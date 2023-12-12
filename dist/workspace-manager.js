var t_ = Object.defineProperty;
var n_ = (e, t, n) => t in e ? t_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var mf = (e, t, n) => (n_(e, typeof t != "symbol" ? t + "" : t, n), n);
import { app as zl } from "/scripts/app.js";
function r_(e, t) {
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
var $S = { exports: {} }, id = {}, AS = { exports: {} }, ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ll = Symbol.for("react.element"), o_ = Symbol.for("react.portal"), i_ = Symbol.for("react.fragment"), a_ = Symbol.for("react.strict_mode"), s_ = Symbol.for("react.profiler"), l_ = Symbol.for("react.provider"), u_ = Symbol.for("react.context"), c_ = Symbol.for("react.forward_ref"), d_ = Symbol.for("react.suspense"), f_ = Symbol.for("react.memo"), p_ = Symbol.for("react.lazy"), u0 = Symbol.iterator;
function h_(e) {
  return e === null || typeof e != "object" ? null : (e = u0 && e[u0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var DS = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, FS = Object.assign, LS = {};
function Sa(e, t, n) {
  this.props = e, this.context = t, this.refs = LS, this.updater = n || DS;
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
function zS() {
}
zS.prototype = Sa.prototype;
function _m(e, t, n) {
  this.props = e, this.context = t, this.refs = LS, this.updater = n || DS;
}
var Om = _m.prototype = new zS();
Om.constructor = _m;
FS(Om, Sa.prototype);
Om.isPureReactComponent = !0;
var c0 = Array.isArray, jS = Object.prototype.hasOwnProperty, Mm = { current: null }, NS = { key: !0, ref: !0, __self: !0, __source: !0 };
function VS(e, t, n) {
  var r, o = {}, i = null, a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      jS.call(t, r) && !NS.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: ll, type: e, key: i, ref: a, props: o, _owner: Mm.current };
}
function m_(e, t) {
  return { $$typeof: ll, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Im(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ll;
}
function v_(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var d0 = /\/+/g;
function vf(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? v_("" + e.key) : t.toString(36);
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
          case ll:
          case o_:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = r === "" ? "." + vf(a, 0) : r, c0(o) ? (n = "", e != null && (n = e.replace(d0, "$&/") + "/"), Pu(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Im(o) && (o = m_(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(d0, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", c0(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + vf(i, s);
      a += Pu(i, t, n, l, o);
    }
  else if (l = h_(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = r + vf(i, s++), a += Pu(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function jl(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Pu(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function g_(e) {
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
var Ot = { current: null }, Tu = { transition: null }, y_ = { ReactCurrentDispatcher: Ot, ReactCurrentBatchConfig: Tu, ReactCurrentOwner: Mm };
ue.Children = { map: jl, forEach: function(e, t, n) {
  jl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return jl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return jl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Im(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ue.Component = Sa;
ue.Fragment = i_;
ue.Profiler = s_;
ue.PureComponent = _m;
ue.StrictMode = a_;
ue.Suspense = d_;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = y_;
ue.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = FS({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = Mm.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      jS.call(t, l) && !NS.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
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
  return e = { $$typeof: u_, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: l_, _context: e }, e.Consumer = e;
};
ue.createElement = VS;
ue.createFactory = function(e) {
  var t = VS.bind(null, e);
  return t.type = e, t;
};
ue.createRef = function() {
  return { current: null };
};
ue.forwardRef = function(e) {
  return { $$typeof: c_, render: e };
};
ue.isValidElement = Im;
ue.lazy = function(e) {
  return { $$typeof: p_, _payload: { _status: -1, _result: e }, _init: g_ };
};
ue.memo = function(e, t) {
  return { $$typeof: f_, type: e, compare: t === void 0 ? null : t };
};
ue.startTransition = function(e) {
  var t = Tu.transition;
  Tu.transition = {};
  try {
    e();
  } finally {
    Tu.transition = t;
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
AS.exports = ue;
var v = AS.exports;
const re = /* @__PURE__ */ sl(v), f0 = /* @__PURE__ */ r_({
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
var b_ = v, S_ = Symbol.for("react.element"), x_ = Symbol.for("react.fragment"), w_ = Object.prototype.hasOwnProperty, C_ = b_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function BS(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    w_.call(t, r) && !k_.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: S_, type: e, key: i, ref: a, props: o, _owner: C_.current };
}
id.Fragment = x_;
id.jsx = BS;
id.jsxs = BS;
$S.exports = id;
var w = $S.exports, jp = {}, WS = { exports: {} }, tn = {}, HS = { exports: {} }, US = {};
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
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, y = !1, g = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
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
    if (g = !1, b(A), !y)
      if (n(l) !== null)
        y = !0, K(k);
      else {
        var z = n(u);
        z !== null && $(x, z.startTime - A);
      }
  }
  function k(A, z) {
    y = !1, g && (g = !1, m(E), E = -1), p = !0;
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
  var P = !1, T = null, E = -1, M = 5, I = -1;
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
    E = S(function() {
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
    return Y = U + Y, A = { id: c++, callback: z, priorityLevel: A, startTime: U, expirationTime: Y, sortIndex: -1 }, U > V ? (A.sortIndex = U, t(u, A), n(l) === null && A === n(u) && (g ? (m(E), E = -1) : g = !0, $(x, U - V))) : (A.sortIndex = Y, t(l, A), y || p || (y = !0, K(k))), A;
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
})(US);
HS.exports = US;
var P_ = HS.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var GS = v, Zt = P_;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var KS = /* @__PURE__ */ new Set(), Os = {};
function Qo(e, t) {
  Ji(e, t), Ji(e + "Capture", t);
}
function Ji(e, t) {
  for (Os[e] = t, e = 0; e < t.length; e++)
    KS.add(t[e]);
}
var xr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Np = Object.prototype.hasOwnProperty, T_ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p0 = {}, h0 = {};
function E_(e) {
  return Np.call(h0, e) ? !0 : Np.call(p0, e) ? !1 : T_.test(e) ? h0[e] = !0 : (p0[e] = !0, !1);
}
function __(e, t, n, r) {
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
function O_(e, t, n, r) {
  if (t === null || typeof t > "u" || __(e, t, n, r))
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
var Rm = /[\-:]([a-z])/g;
function $m(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Rm,
    $m
  );
  ht[t] = new Mt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Rm, $m);
  ht[t] = new Mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Rm, $m);
  ht[t] = new Mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ht[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ht.xlinkHref = new Mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ht[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Am(e, t, n, r) {
  var o = ht.hasOwnProperty(t) ? ht[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (O_(t, n, o, r) && (n = null), r || o === null ? E_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _r = GS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Nl = Symbol.for("react.element"), mi = Symbol.for("react.portal"), vi = Symbol.for("react.fragment"), Dm = Symbol.for("react.strict_mode"), Vp = Symbol.for("react.profiler"), YS = Symbol.for("react.provider"), qS = Symbol.for("react.context"), Fm = Symbol.for("react.forward_ref"), Bp = Symbol.for("react.suspense"), Wp = Symbol.for("react.suspense_list"), Lm = Symbol.for("react.memo"), zr = Symbol.for("react.lazy"), XS = Symbol.for("react.offscreen"), m0 = Symbol.iterator;
function Ma(e) {
  return e === null || typeof e != "object" ? null : (e = m0 && e[m0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ve = Object.assign, gf;
function Ka(e) {
  if (gf === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      gf = t && t[1] || "";
    }
  return `
` + gf + e;
}
var yf = !1;
function bf(e, t) {
  if (!e || yf)
    return "";
  yf = !0;
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
    yf = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ka(e) : "";
}
function M_(e) {
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
      return e = bf(e.type, !1), e;
    case 11:
      return e = bf(e.type.render, !1), e;
    case 1:
      return e = bf(e.type, !0), e;
    default:
      return "";
  }
}
function Hp(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case vi:
      return "Fragment";
    case mi:
      return "Portal";
    case Vp:
      return "Profiler";
    case Dm:
      return "StrictMode";
    case Bp:
      return "Suspense";
    case Wp:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qS:
        return (e.displayName || "Context") + ".Consumer";
      case YS:
        return (e._context.displayName || "Context") + ".Provider";
      case Fm:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Lm:
        return t = e.displayName || null, t !== null ? t : Hp(e.type) || "Memo";
      case zr:
        t = e._payload, e = e._init;
        try {
          return Hp(e(t));
        } catch {
        }
    }
  return null;
}
function I_(e) {
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
      return Hp(t);
    case 8:
      return t === Dm ? "StrictMode" : "Mode";
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
function QS(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function R_(e) {
  var t = QS(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = R_(e));
}
function ZS(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = QS(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function rc(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Up(e, t) {
  var n = t.checked;
  return Ve({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function v0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = io(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function JS(e, t) {
  t = t.checked, t != null && Am(e, "checked", t, !1);
}
function Gp(e, t) {
  JS(e, t);
  var n = io(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Kp(e, t.type, n) : t.hasOwnProperty("defaultValue") && Kp(e, t.type, io(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function g0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Kp(e, t, n) {
  (t !== "number" || rc(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
function Yp(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(F(91));
  return Ve({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function y0(e, t) {
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
  e._wrapperState = { initialValue: io(n) };
}
function ex(e, t) {
  var n = io(t.value), r = io(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function b0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function tx(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function qp(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? tx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Bl, nx = function(e) {
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
var is = {
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
}, $_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(is).forEach(function(e) {
  $_.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), is[t] = is[e];
  });
});
function rx(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || is.hasOwnProperty(e) && is[e] ? ("" + t).trim() : t + "px";
}
function ox(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = rx(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var A_ = Ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Xp(e, t) {
  if (t) {
    if (A_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Qp(e, t) {
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
var Zp = null;
function zm(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Jp = null, Ni = null, Vi = null;
function S0(e) {
  if (e = dl(e)) {
    if (typeof Jp != "function")
      throw Error(F(280));
    var t = e.stateNode;
    t && (t = cd(t), Jp(e.stateNode, e.type, t));
  }
}
function ix(e) {
  Ni ? Vi ? Vi.push(e) : Vi = [e] : Ni = e;
}
function ax() {
  if (Ni) {
    var e = Ni, t = Vi;
    if (Vi = Ni = null, S0(e), t)
      for (e = 0; e < t.length; e++)
        S0(t[e]);
  }
}
function sx(e, t) {
  return e(t);
}
function lx() {
}
var Sf = !1;
function ux(e, t, n) {
  if (Sf)
    return e(t, n);
  Sf = !0;
  try {
    return sx(e, t, n);
  } finally {
    Sf = !1, (Ni !== null || Vi !== null) && (lx(), ax());
  }
}
function Is(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = cd(n);
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
var eh = !1;
if (xr)
  try {
    var Ia = {};
    Object.defineProperty(Ia, "passive", { get: function() {
      eh = !0;
    } }), window.addEventListener("test", Ia, Ia), window.removeEventListener("test", Ia, Ia);
  } catch {
    eh = !1;
  }
function D_(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var as = !1, oc = null, ic = !1, th = null, F_ = { onError: function(e) {
  as = !0, oc = e;
} };
function L_(e, t, n, r, o, i, a, s, l) {
  as = !1, oc = null, D_.apply(F_, arguments);
}
function z_(e, t, n, r, o, i, a, s, l) {
  if (L_.apply(this, arguments), as) {
    if (as) {
      var u = oc;
      as = !1, oc = null;
    } else
      throw Error(F(198));
    ic || (ic = !0, th = u);
  }
}
function Zo(e) {
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
function cx(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function x0(e) {
  if (Zo(e) !== e)
    throw Error(F(188));
}
function j_(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Zo(e), t === null)
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
          return x0(o), e;
        if (i === r)
          return x0(o), t;
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
function dx(e) {
  return e = j_(e), e !== null ? fx(e) : null;
}
function fx(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = fx(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var px = Zt.unstable_scheduleCallback, w0 = Zt.unstable_cancelCallback, N_ = Zt.unstable_shouldYield, V_ = Zt.unstable_requestPaint, Ke = Zt.unstable_now, B_ = Zt.unstable_getCurrentPriorityLevel, jm = Zt.unstable_ImmediatePriority, hx = Zt.unstable_UserBlockingPriority, ac = Zt.unstable_NormalPriority, W_ = Zt.unstable_LowPriority, mx = Zt.unstable_IdlePriority, ad = null, Qn = null;
function H_(e) {
  if (Qn && typeof Qn.onCommitFiberRoot == "function")
    try {
      Qn.onCommitFiberRoot(ad, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var $n = Math.clz32 ? Math.clz32 : K_, U_ = Math.log, G_ = Math.LN2;
function K_(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (U_(e) / G_ | 0) | 0;
}
var Wl = 64, Hl = 4194304;
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
function sc(e, t) {
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
      n = 31 - $n(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Y_(e, t) {
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
function q_(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - $n(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & n) || s & r) && (o[a] = Y_(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function nh(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function vx() {
  var e = Wl;
  return Wl <<= 1, !(Wl & 4194240) && (Wl = 64), e;
}
function xf(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function ul(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - $n(t), e[t] = n;
}
function X_(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - $n(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Nm(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - $n(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var xe = 0;
function gx(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var yx, Vm, bx, Sx, xx, rh = !1, Ul = [], Kr = null, Yr = null, qr = null, Rs = /* @__PURE__ */ new Map(), $s = /* @__PURE__ */ new Map(), Vr = [], Q_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function C0(e, t) {
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
      Rs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $s.delete(t.pointerId);
  }
}
function Ra(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = dl(t), t !== null && Vm(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Z_(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Kr = Ra(Kr, e, t, n, r, o), !0;
    case "dragenter":
      return Yr = Ra(Yr, e, t, n, r, o), !0;
    case "mouseover":
      return qr = Ra(qr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Rs.set(i, Ra(Rs.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, $s.set(i, Ra($s.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function wx(e) {
  var t = Io(e.target);
  if (t !== null) {
    var n = Zo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = cx(n), t !== null) {
          e.blockedOn = t, xx(e.priority, function() {
            bx(n);
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
function Eu(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = oh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Zp = r, n.target.dispatchEvent(r), Zp = null;
    } else
      return t = dl(n), t !== null && Vm(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function k0(e, t, n) {
  Eu(e) && n.delete(t);
}
function J_() {
  rh = !1, Kr !== null && Eu(Kr) && (Kr = null), Yr !== null && Eu(Yr) && (Yr = null), qr !== null && Eu(qr) && (qr = null), Rs.forEach(k0), $s.forEach(k0);
}
function $a(e, t) {
  e.blockedOn === t && (e.blockedOn = null, rh || (rh = !0, Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority, J_)));
}
function As(e) {
  function t(o) {
    return $a(o, e);
  }
  if (0 < Ul.length) {
    $a(Ul[0], e);
    for (var n = 1; n < Ul.length; n++) {
      var r = Ul[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Kr !== null && $a(Kr, e), Yr !== null && $a(Yr, e), qr !== null && $a(qr, e), Rs.forEach(t), $s.forEach(t), n = 0; n < Vr.length; n++)
    r = Vr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vr.length && (n = Vr[0], n.blockedOn === null); )
    wx(n), n.blockedOn === null && Vr.shift();
}
var Bi = _r.ReactCurrentBatchConfig, lc = !0;
function eO(e, t, n, r) {
  var o = xe, i = Bi.transition;
  Bi.transition = null;
  try {
    xe = 1, Bm(e, t, n, r);
  } finally {
    xe = o, Bi.transition = i;
  }
}
function tO(e, t, n, r) {
  var o = xe, i = Bi.transition;
  Bi.transition = null;
  try {
    xe = 4, Bm(e, t, n, r);
  } finally {
    xe = o, Bi.transition = i;
  }
}
function Bm(e, t, n, r) {
  if (lc) {
    var o = oh(e, t, n, r);
    if (o === null)
      If(e, t, r, uc, n), C0(e, r);
    else if (Z_(o, e, t, n, r))
      r.stopPropagation();
    else if (C0(e, r), t & 4 && -1 < Q_.indexOf(e)) {
      for (; o !== null; ) {
        var i = dl(o);
        if (i !== null && yx(i), i = oh(e, t, n, r), i === null && If(e, t, r, uc, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      If(e, t, r, null, n);
  }
}
var uc = null;
function oh(e, t, n, r) {
  if (uc = null, e = zm(r), e = Io(e), e !== null)
    if (t = Zo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = cx(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return uc = e, null;
}
function Cx(e) {
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
      switch (B_()) {
        case jm:
          return 1;
        case hx:
          return 4;
        case ac:
        case W_:
          return 16;
        case mx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ur = null, Wm = null, _u = null;
function kx() {
  if (_u)
    return _u;
  var e, t = Wm, n = t.length, r, o = "value" in Ur ? Ur.value : Ur.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
    ;
  return _u = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ou(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Gl() {
  return !0;
}
function P0() {
  return !1;
}
function nn(e) {
  function t(n, r, o, i, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Gl : P0, this.isPropagationStopped = P0, this;
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
var xa = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Hm = nn(xa), cl = Ve({}, xa, { view: 0, detail: 0 }), nO = nn(cl), wf, Cf, Aa, sd = Ve({}, cl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Um, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Aa && (Aa && e.type === "mousemove" ? (wf = e.screenX - Aa.screenX, Cf = e.screenY - Aa.screenY) : Cf = wf = 0, Aa = e), wf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Cf;
} }), T0 = nn(sd), rO = Ve({}, sd, { dataTransfer: 0 }), oO = nn(rO), iO = Ve({}, cl, { relatedTarget: 0 }), kf = nn(iO), aO = Ve({}, xa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sO = nn(aO), lO = Ve({}, xa, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), uO = nn(lO), cO = Ve({}, xa, { data: 0 }), E0 = nn(cO), dO = {
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
}, fO = {
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
}, pO = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function hO(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pO[e]) ? !!t[e] : !1;
}
function Um() {
  return hO;
}
var mO = Ve({}, cl, { key: function(e) {
  if (e.key) {
    var t = dO[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Ou(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fO[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Um, charCode: function(e) {
  return e.type === "keypress" ? Ou(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ou(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), vO = nn(mO), gO = Ve({}, sd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), _0 = nn(gO), yO = Ve({}, cl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Um }), bO = nn(yO), SO = Ve({}, xa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), xO = nn(SO), wO = Ve({}, sd, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), CO = nn(wO), kO = [9, 13, 27, 32], Gm = xr && "CompositionEvent" in window, ss = null;
xr && "documentMode" in document && (ss = document.documentMode);
var PO = xr && "TextEvent" in window && !ss, Px = xr && (!Gm || ss && 8 < ss && 11 >= ss), O0 = " ", M0 = !1;
function Tx(e, t) {
  switch (e) {
    case "keyup":
      return kO.indexOf(t.keyCode) !== -1;
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
function Ex(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var gi = !1;
function TO(e, t) {
  switch (e) {
    case "compositionend":
      return Ex(t);
    case "keypress":
      return t.which !== 32 ? null : (M0 = !0, O0);
    case "textInput":
      return e = t.data, e === O0 && M0 ? null : e;
    default:
      return null;
  }
}
function EO(e, t) {
  if (gi)
    return e === "compositionend" || !Gm && Tx(e, t) ? (e = kx(), _u = Wm = Ur = null, gi = !1, e) : null;
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
      return Px && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _O = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function I0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_O[e.type] : t === "textarea";
}
function _x(e, t, n, r) {
  ix(r), t = cc(t, "onChange"), 0 < t.length && (n = new Hm("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ls = null, Ds = null;
function OO(e) {
  jx(e, 0);
}
function ld(e) {
  var t = Si(e);
  if (ZS(t))
    return e;
}
function MO(e, t) {
  if (e === "change")
    return t;
}
var Ox = !1;
if (xr) {
  var Pf;
  if (xr) {
    var Tf = "oninput" in document;
    if (!Tf) {
      var R0 = document.createElement("div");
      R0.setAttribute("oninput", "return;"), Tf = typeof R0.oninput == "function";
    }
    Pf = Tf;
  } else
    Pf = !1;
  Ox = Pf && (!document.documentMode || 9 < document.documentMode);
}
function $0() {
  ls && (ls.detachEvent("onpropertychange", Mx), Ds = ls = null);
}
function Mx(e) {
  if (e.propertyName === "value" && ld(Ds)) {
    var t = [];
    _x(t, Ds, e, zm(e)), ux(OO, t);
  }
}
function IO(e, t, n) {
  e === "focusin" ? ($0(), ls = t, Ds = n, ls.attachEvent("onpropertychange", Mx)) : e === "focusout" && $0();
}
function RO(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ld(Ds);
}
function $O(e, t) {
  if (e === "click")
    return ld(t);
}
function AO(e, t) {
  if (e === "input" || e === "change")
    return ld(t);
}
function DO(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var zn = typeof Object.is == "function" ? Object.is : DO;
function Fs(e, t) {
  if (zn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Np.call(t, o) || !zn(e[o], t[o]))
      return !1;
  }
  return !0;
}
function A0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function D0(e, t) {
  var n = A0(e);
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
    n = A0(n);
  }
}
function Ix(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ix(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Rx() {
  for (var e = window, t = rc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = rc(e.document);
  }
  return t;
}
function Km(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function FO(e) {
  var t = Rx(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ix(n.ownerDocument.documentElement, n)) {
    if (r !== null && Km(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = D0(n, i);
        var a = D0(
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
var LO = xr && "documentMode" in document && 11 >= document.documentMode, yi = null, ih = null, us = null, ah = !1;
function F0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ah || yi == null || yi !== rc(r) || (r = yi, "selectionStart" in r && Km(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), us && Fs(us, r) || (us = r, r = cc(ih, "onSelect"), 0 < r.length && (t = new Hm("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = yi)));
}
function Kl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var bi = { animationend: Kl("Animation", "AnimationEnd"), animationiteration: Kl("Animation", "AnimationIteration"), animationstart: Kl("Animation", "AnimationStart"), transitionend: Kl("Transition", "TransitionEnd") }, Ef = {}, $x = {};
xr && ($x = document.createElement("div").style, "AnimationEvent" in window || (delete bi.animationend.animation, delete bi.animationiteration.animation, delete bi.animationstart.animation), "TransitionEvent" in window || delete bi.transitionend.transition);
function ud(e) {
  if (Ef[e])
    return Ef[e];
  if (!bi[e])
    return e;
  var t = bi[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in $x)
      return Ef[e] = t[n];
  return e;
}
var Ax = ud("animationend"), Dx = ud("animationiteration"), Fx = ud("animationstart"), Lx = ud("transitionend"), zx = /* @__PURE__ */ new Map(), L0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function co(e, t) {
  zx.set(e, t), Qo(t, [e]);
}
for (var _f = 0; _f < L0.length; _f++) {
  var Of = L0[_f], zO = Of.toLowerCase(), jO = Of[0].toUpperCase() + Of.slice(1);
  co(zO, "on" + jO);
}
co(Ax, "onAnimationEnd");
co(Dx, "onAnimationIteration");
co(Fx, "onAnimationStart");
co("dblclick", "onDoubleClick");
co("focusin", "onFocus");
co("focusout", "onBlur");
co(Lx, "onTransitionEnd");
Ji("onMouseEnter", ["mouseout", "mouseover"]);
Ji("onMouseLeave", ["mouseout", "mouseover"]);
Ji("onPointerEnter", ["pointerout", "pointerover"]);
Ji("onPointerLeave", ["pointerout", "pointerover"]);
Qo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Qo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Qo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Qo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Qo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), NO = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xa));
function z0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, z_(r, t, void 0, e), e.currentTarget = null;
}
function jx(e, t) {
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
          z0(o, s, u), i = l;
        }
      else
        for (a = 0; a < r.length; a++) {
          if (s = r[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          z0(o, s, u), i = l;
        }
    }
  }
  if (ic)
    throw e = th, ic = !1, th = null, e;
}
function Me(e, t) {
  var n = t[dh];
  n === void 0 && (n = t[dh] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Nx(t, e, 2, !1), n.add(r));
}
function Mf(e, t, n) {
  var r = 0;
  t && (r |= 4), Nx(n, e, r, t);
}
var Yl = "_reactListening" + Math.random().toString(36).slice(2);
function Ls(e) {
  if (!e[Yl]) {
    e[Yl] = !0, KS.forEach(function(n) {
      n !== "selectionchange" && (NO.has(n) || Mf(n, !1, e), Mf(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yl] || (t[Yl] = !0, Mf("selectionchange", !1, t));
  }
}
function Nx(e, t, n, r) {
  switch (Cx(t)) {
    case 1:
      var o = eO;
      break;
    case 4:
      o = tO;
      break;
    default:
      o = Bm;
  }
  n = o.bind(null, t, n, e), o = void 0, !eh || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function If(e, t, n, r, o) {
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
            if (a = Io(s), a === null)
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
  ux(function() {
    var u = i, c = zm(n), d = [];
    e: {
      var f = zx.get(e);
      if (f !== void 0) {
        var p = Hm, y = e;
        switch (e) {
          case "keypress":
            if (Ou(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = vO;
            break;
          case "focusin":
            y = "focus", p = kf;
            break;
          case "focusout":
            y = "blur", p = kf;
            break;
          case "beforeblur":
          case "afterblur":
            p = kf;
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
            p = T0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = oO;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = bO;
            break;
          case Ax:
          case Dx:
          case Fx:
            p = sO;
            break;
          case Lx:
            p = xO;
            break;
          case "scroll":
            p = nO;
            break;
          case "wheel":
            p = CO;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = uO;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = _0;
        }
        var g = (t & 4) !== 0, S = !g && e === "scroll", m = g ? f !== null ? f + "Capture" : null : f;
        g = [];
        for (var h = u, b; h !== null; ) {
          b = h;
          var x = b.stateNode;
          if (b.tag === 5 && x !== null && (b = x, m !== null && (x = Is(h, m), x != null && g.push(zs(h, x, b)))), S)
            break;
          h = h.return;
        }
        0 < g.length && (f = new p(f, y, null, n, c), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && n !== Zp && (y = n.relatedTarget || n.fromElement) && (Io(y) || y[wr]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (y = n.relatedTarget || n.toElement, p = u, y = y ? Io(y) : null, y !== null && (S = Zo(y), y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (p = null, y = u), p !== y)) {
          if (g = T0, x = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (g = _0, x = "onPointerLeave", m = "onPointerEnter", h = "pointer"), S = p == null ? f : Si(p), b = y == null ? f : Si(y), f = new g(x, h + "leave", p, n, c), f.target = S, f.relatedTarget = b, x = null, Io(c) === u && (g = new g(m, h + "enter", y, n, c), g.target = b, g.relatedTarget = S, x = g), S = x, p && y)
            t: {
              for (g = p, m = y, h = 0, b = g; b; b = si(b))
                h++;
              for (b = 0, x = m; x; x = si(x))
                b++;
              for (; 0 < h - b; )
                g = si(g), h--;
              for (; 0 < b - h; )
                m = si(m), b--;
              for (; h--; ) {
                if (g === m || m !== null && g === m.alternate)
                  break t;
                g = si(g), m = si(m);
              }
              g = null;
            }
          else
            g = null;
          p !== null && j0(d, f, p, g, !1), y !== null && S !== null && j0(d, S, y, g, !0);
        }
      }
      e: {
        if (f = u ? Si(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var k = MO;
        else if (I0(f))
          if (Ox)
            k = AO;
          else {
            k = RO;
            var P = IO;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = $O);
        if (k && (k = k(e, u))) {
          _x(d, k, n, c);
          break e;
        }
        P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Kp(f, "number", f.value);
      }
      switch (P = u ? Si(u) : window, e) {
        case "focusin":
          (I0(P) || P.contentEditable === "true") && (yi = P, ih = u, us = null);
          break;
        case "focusout":
          us = ih = yi = null;
          break;
        case "mousedown":
          ah = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ah = !1, F0(d, n, c);
          break;
        case "selectionchange":
          if (LO)
            break;
        case "keydown":
        case "keyup":
          F0(d, n, c);
      }
      var T;
      if (Gm)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        gi ? Tx(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Px && n.locale !== "ko" && (gi || E !== "onCompositionStart" ? E === "onCompositionEnd" && gi && (T = kx()) : (Ur = c, Wm = "value" in Ur ? Ur.value : Ur.textContent, gi = !0)), P = cc(u, E), 0 < P.length && (E = new E0(E, e, null, n, c), d.push({ event: E, listeners: P }), T ? E.data = T : (T = Ex(n), T !== null && (E.data = T)))), (T = PO ? TO(e, n) : EO(e, n)) && (u = cc(u, "onBeforeInput"), 0 < u.length && (c = new E0("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = T));
    }
    jx(d, t);
  });
}
function zs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function cc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Is(e, n), i != null && r.unshift(zs(e, i, o)), i = Is(e, t), i != null && r.push(zs(e, i, o))), e = e.return;
  }
  return r;
}
function si(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function j0(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = Is(n, i), l != null && a.unshift(zs(n, l, s))) : o || (l = Is(n, i), l != null && a.push(zs(n, l, s)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var VO = /\r\n?/g, BO = /\u0000|\uFFFD/g;
function N0(e) {
  return (typeof e == "string" ? e : "" + e).replace(VO, `
`).replace(BO, "");
}
function ql(e, t, n) {
  if (t = N0(t), N0(e) !== t && n)
    throw Error(F(425));
}
function dc() {
}
var sh = null, lh = null;
function uh(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ch = typeof setTimeout == "function" ? setTimeout : void 0, WO = typeof clearTimeout == "function" ? clearTimeout : void 0, V0 = typeof Promise == "function" ? Promise : void 0, HO = typeof queueMicrotask == "function" ? queueMicrotask : typeof V0 < "u" ? function(e) {
  return V0.resolve(null).then(e).catch(UO);
} : ch;
function UO(e) {
  setTimeout(function() {
    throw e;
  });
}
function Rf(e, t) {
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
function B0(e) {
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
var wa = Math.random().toString(36).slice(2), Yn = "__reactFiber$" + wa, js = "__reactProps$" + wa, wr = "__reactContainer$" + wa, dh = "__reactEvents$" + wa, GO = "__reactListeners$" + wa, KO = "__reactHandles$" + wa;
function Io(e) {
  var t = e[Yn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wr] || n[Yn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = B0(e); e !== null; ) {
          if (n = e[Yn])
            return n;
          e = B0(e);
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
function Si(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(F(33));
}
function cd(e) {
  return e[js] || null;
}
var fh = [], xi = -1;
function fo(e) {
  return { current: e };
}
function Re(e) {
  0 > xi || (e.current = fh[xi], fh[xi] = null, xi--);
}
function Ee(e, t) {
  xi++, fh[xi] = e.current, e.current = t;
}
var ao = {}, wt = fo(ao), Dt = fo(!1), Ho = ao;
function ea(e, t) {
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
function fc() {
  Re(Dt), Re(wt);
}
function W0(e, t, n) {
  if (wt.current !== ao)
    throw Error(F(168));
  Ee(wt, t), Ee(Dt, n);
}
function Vx(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(F(108, I_(e) || "Unknown", o));
  return Ve({}, n, r);
}
function pc(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ao, Ho = wt.current, Ee(wt, e), Ee(Dt, Dt.current), !0;
}
function H0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(F(169));
  n ? (e = Vx(e, t, Ho), r.__reactInternalMemoizedMergedChildContext = e, Re(Dt), Re(wt), Ee(wt, e)) : Re(Dt), Ee(Dt, n);
}
var ur = null, dd = !1, $f = !1;
function Bx(e) {
  ur === null ? ur = [e] : ur.push(e);
}
function YO(e) {
  dd = !0, Bx(e);
}
function po() {
  if (!$f && ur !== null) {
    $f = !0;
    var e = 0, t = xe;
    try {
      var n = ur;
      for (xe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ur = null, dd = !1;
    } catch (o) {
      throw ur !== null && (ur = ur.slice(e + 1)), px(jm, po), o;
    } finally {
      xe = t, $f = !1;
    }
  }
  return null;
}
var wi = [], Ci = 0, hc = null, mc = 0, fn = [], pn = 0, Uo = null, fr = 1, pr = "";
function Co(e, t) {
  wi[Ci++] = mc, wi[Ci++] = hc, hc = e, mc = t;
}
function Wx(e, t, n) {
  fn[pn++] = fr, fn[pn++] = pr, fn[pn++] = Uo, Uo = e;
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
function Ym(e) {
  e.return !== null && (Co(e, 1), Wx(e, 1, 0));
}
function qm(e) {
  for (; e === hc; )
    hc = wi[--Ci], wi[Ci] = null, mc = wi[--Ci], wi[Ci] = null;
  for (; e === Uo; )
    Uo = fn[--pn], fn[pn] = null, pr = fn[--pn], fn[pn] = null, fr = fn[--pn], fn[pn] = null;
}
var qt = null, Yt = null, De = !1, Mn = null;
function Hx(e, t) {
  var n = hn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function U0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qt = e, Yt = Xr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qt = e, Yt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Uo !== null ? { id: fr, overflow: pr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = hn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qt = e, Yt = null, !0) : !1;
    default:
      return !1;
  }
}
function ph(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hh(e) {
  if (De) {
    var t = Yt;
    if (t) {
      var n = t;
      if (!U0(e, t)) {
        if (ph(e))
          throw Error(F(418));
        t = Xr(n.nextSibling);
        var r = qt;
        t && U0(e, t) ? Hx(r, n) : (e.flags = e.flags & -4097 | 2, De = !1, qt = e);
      }
    } else {
      if (ph(e))
        throw Error(F(418));
      e.flags = e.flags & -4097 | 2, De = !1, qt = e;
    }
  }
}
function G0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qt = e;
}
function Xl(e) {
  if (e !== qt)
    return !1;
  if (!De)
    return G0(e), De = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !uh(e.type, e.memoizedProps)), t && (t = Yt)) {
    if (ph(e))
      throw Ux(), Error(F(418));
    for (; t; )
      Hx(e, t), t = Xr(t.nextSibling);
  }
  if (G0(e), e.tag === 13) {
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
function Ux() {
  for (var e = Yt; e; )
    e = Xr(e.nextSibling);
}
function ta() {
  Yt = qt = null, De = !1;
}
function Xm(e) {
  Mn === null ? Mn = [e] : Mn.push(e);
}
var qO = _r.ReactCurrentBatchConfig;
function _n(e, t) {
  if (e && e.defaultProps) {
    t = Ve({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var vc = fo(null), gc = null, ki = null, Qm = null;
function Zm() {
  Qm = ki = gc = null;
}
function Jm(e) {
  var t = vc.current;
  Re(vc), e._currentValue = t;
}
function mh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Wi(e, t) {
  gc = e, Qm = ki = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (At = !0), e.firstContext = null);
}
function yn(e) {
  var t = e._currentValue;
  if (Qm !== e)
    if (e = { context: e, memoizedValue: t, next: null }, ki === null) {
      if (gc === null)
        throw Error(F(308));
      ki = e, gc.dependencies = { lanes: 0, firstContext: e };
    } else
      ki = ki.next = e;
  return t;
}
var Ro = null;
function ev(e) {
  Ro === null ? Ro = [e] : Ro.push(e);
}
function Gx(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, ev(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Cr(e, r);
}
function Cr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var jr = !1;
function tv(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Kx(e, t) {
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
  return o = r.interleaved, o === null ? (t.next = t, ev(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Cr(e, n);
}
function Mu(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Nm(e, n);
  }
}
function K0(e, t) {
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
function yc(e, t, n, r) {
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
    Ko |= a, e.lanes = a, e.memoizedState = d;
  }
}
function Y0(e, t, n) {
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
var Yx = new GS.Component().refs;
function vh(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fd = { isMounted: function(e) {
  return (e = e._reactInternals) ? Zo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Et(), o = Jr(e), i = vr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Qr(e, i, o), t !== null && (An(t, e, o, r), Mu(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Et(), o = Jr(e), i = vr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Qr(e, i, o), t !== null && (An(t, e, o, r), Mu(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Et(), r = Jr(e), o = vr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Qr(e, o, r), t !== null && (An(t, e, r, n), Mu(t, e, r));
} };
function q0(e, t, n, r, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Fs(n, r) || !Fs(o, i) : !0;
}
function qx(e, t, n) {
  var r = !1, o = ao, i = t.contextType;
  return typeof i == "object" && i !== null ? i = yn(i) : (o = Ft(t) ? Ho : wt.current, r = t.contextTypes, i = (r = r != null) ? ea(e, o) : ao), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fd, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function X0(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && fd.enqueueReplaceState(t, t.state, null);
}
function gh(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = Yx, tv(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = yn(i) : (i = Ft(t) ? Ho : wt.current, o.context = ea(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (vh(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && fd.enqueueReplaceState(o, o.state, null), yc(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Da(e, t, n) {
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
        s === Yx && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
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
function Q0(e) {
  var t = e._init;
  return t(e._payload);
}
function Xx(e) {
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
    return h === null || h.tag !== 6 ? (h = Nf(b, m.mode, x), h.return = m, h) : (h = o(h, b), h.return = m, h);
  }
  function l(m, h, b, x) {
    var k = b.type;
    return k === vi ? c(m, h, b.props.children, x, b.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && Q0(k) === h.type) ? (x = o(h, b.props), x.ref = Da(m, h, b), x.return = m, x) : (x = Fu(b.type, b.key, b.props, null, m.mode, x), x.ref = Da(m, h, b), x.return = m, x);
  }
  function u(m, h, b, x) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== b.containerInfo || h.stateNode.implementation !== b.implementation ? (h = Vf(b, m.mode, x), h.return = m, h) : (h = o(h, b.children || []), h.return = m, h);
  }
  function c(m, h, b, x, k) {
    return h === null || h.tag !== 7 ? (h = zo(b, m.mode, x, k), h.return = m, h) : (h = o(h, b), h.return = m, h);
  }
  function d(m, h, b) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Nf("" + h, m.mode, b), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Nl:
          return b = Fu(h.type, h.key, h.props, null, m.mode, b), b.ref = Da(m, null, h), b.return = m, b;
        case mi:
          return h = Vf(h, m.mode, b), h.return = m, h;
        case zr:
          var x = h._init;
          return d(m, x(h._payload), b);
      }
      if (Ya(h) || Ma(h))
        return h = zo(h, m.mode, b, null), h.return = m, h;
      Ql(m, h);
    }
    return null;
  }
  function f(m, h, b, x) {
    var k = h !== null ? h.key : null;
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return k !== null ? null : s(m, h, "" + b, x);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Nl:
          return b.key === k ? l(m, h, b, x) : null;
        case mi:
          return b.key === k ? u(m, h, b, x) : null;
        case zr:
          return k = b._init, f(
            m,
            h,
            k(b._payload),
            x
          );
      }
      if (Ya(b) || Ma(b))
        return k !== null ? null : c(m, h, b, x, null);
      Ql(m, b);
    }
    return null;
  }
  function p(m, h, b, x, k) {
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return m = m.get(b) || null, s(h, m, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Nl:
          return m = m.get(x.key === null ? b : x.key) || null, l(h, m, x, k);
        case mi:
          return m = m.get(x.key === null ? b : x.key) || null, u(h, m, x, k);
        case zr:
          var P = x._init;
          return p(m, h, b, P(x._payload), k);
      }
      if (Ya(x) || Ma(x))
        return m = m.get(b) || null, c(h, m, x, k, null);
      Ql(h, x);
    }
    return null;
  }
  function y(m, h, b, x) {
    for (var k = null, P = null, T = h, E = h = 0, M = null; T !== null && E < b.length; E++) {
      T.index > E ? (M = T, T = null) : M = T.sibling;
      var I = f(m, T, b[E], x);
      if (I === null) {
        T === null && (T = M);
        break;
      }
      e && T && I.alternate === null && t(m, T), h = i(I, h, E), P === null ? k = I : P.sibling = I, P = I, T = M;
    }
    if (E === b.length)
      return n(m, T), De && Co(m, E), k;
    if (T === null) {
      for (; E < b.length; E++)
        T = d(m, b[E], x), T !== null && (h = i(T, h, E), P === null ? k = T : P.sibling = T, P = T);
      return De && Co(m, E), k;
    }
    for (T = r(m, T); E < b.length; E++)
      M = p(T, m, E, b[E], x), M !== null && (e && M.alternate !== null && T.delete(M.key === null ? E : M.key), h = i(M, h, E), P === null ? k = M : P.sibling = M, P = M);
    return e && T.forEach(function(D) {
      return t(m, D);
    }), De && Co(m, E), k;
  }
  function g(m, h, b, x) {
    var k = Ma(b);
    if (typeof k != "function")
      throw Error(F(150));
    if (b = k.call(b), b == null)
      throw Error(F(151));
    for (var P = k = null, T = h, E = h = 0, M = null, I = b.next(); T !== null && !I.done; E++, I = b.next()) {
      T.index > E ? (M = T, T = null) : M = T.sibling;
      var D = f(m, T, I.value, x);
      if (D === null) {
        T === null && (T = M);
        break;
      }
      e && T && D.alternate === null && t(m, T), h = i(D, h, E), P === null ? k = D : P.sibling = D, P = D, T = M;
    }
    if (I.done)
      return n(
        m,
        T
      ), De && Co(m, E), k;
    if (T === null) {
      for (; !I.done; E++, I = b.next())
        I = d(m, I.value, x), I !== null && (h = i(I, h, E), P === null ? k = I : P.sibling = I, P = I);
      return De && Co(m, E), k;
    }
    for (T = r(m, T); !I.done; E++, I = b.next())
      I = p(T, m, E, I.value, x), I !== null && (e && I.alternate !== null && T.delete(I.key === null ? E : I.key), h = i(I, h, E), P === null ? k = I : P.sibling = I, P = I);
    return e && T.forEach(function(G) {
      return t(m, G);
    }), De && Co(m, E), k;
  }
  function S(m, h, b, x) {
    if (typeof b == "object" && b !== null && b.type === vi && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Nl:
          e: {
            for (var k = b.key, P = h; P !== null; ) {
              if (P.key === k) {
                if (k = b.type, k === vi) {
                  if (P.tag === 7) {
                    n(m, P.sibling), h = o(P, b.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && Q0(k) === P.type) {
                  n(m, P.sibling), h = o(P, b.props), h.ref = Da(m, P, b), h.return = m, m = h;
                  break e;
                }
                n(m, P);
                break;
              } else
                t(m, P);
              P = P.sibling;
            }
            b.type === vi ? (h = zo(b.props.children, m.mode, x, b.key), h.return = m, m = h) : (x = Fu(b.type, b.key, b.props, null, m.mode, x), x.ref = Da(m, h, b), x.return = m, m = x);
          }
          return a(m);
        case mi:
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
            h = Vf(b, m.mode, x), h.return = m, m = h;
          }
          return a(m);
        case zr:
          return P = b._init, S(m, h, P(b._payload), x);
      }
      if (Ya(b))
        return y(m, h, b, x);
      if (Ma(b))
        return g(m, h, b, x);
      Ql(m, b);
    }
    return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, b), h.return = m, m = h) : (n(m, h), h = Nf(b, m.mode, x), h.return = m, m = h), a(m)) : n(m, h);
  }
  return S;
}
var na = Xx(!0), Qx = Xx(!1), fl = {}, Zn = fo(fl), Ns = fo(fl), Vs = fo(fl);
function $o(e) {
  if (e === fl)
    throw Error(F(174));
  return e;
}
function nv(e, t) {
  switch (Ee(Vs, t), Ee(Ns, e), Ee(Zn, fl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : qp(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = qp(t, e);
  }
  Re(Zn), Ee(Zn, t);
}
function ra() {
  Re(Zn), Re(Ns), Re(Vs);
}
function Zx(e) {
  $o(Vs.current);
  var t = $o(Zn.current), n = qp(t, e.type);
  t !== n && (Ee(Ns, e), Ee(Zn, n));
}
function rv(e) {
  Ns.current === e && (Re(Zn), Re(Ns));
}
var ze = fo(0);
function bc(e) {
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
var Af = [];
function ov() {
  for (var e = 0; e < Af.length; e++)
    Af[e]._workInProgressVersionPrimary = null;
  Af.length = 0;
}
var Iu = _r.ReactCurrentDispatcher, Df = _r.ReactCurrentBatchConfig, Go = 0, Ne = null, tt = null, it = null, Sc = !1, cs = !1, Bs = 0, XO = 0;
function gt() {
  throw Error(F(321));
}
function iv(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!zn(e[n], t[n]))
      return !1;
  return !0;
}
function av(e, t, n, r, o, i) {
  if (Go = i, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Iu.current = e === null || e.memoizedState === null ? eM : tM, e = n(r, o), cs) {
    i = 0;
    do {
      if (cs = !1, Bs = 0, 25 <= i)
        throw Error(F(301));
      i += 1, it = tt = null, t.updateQueue = null, Iu.current = nM, e = n(r, o);
    } while (cs);
  }
  if (Iu.current = xc, t = tt !== null && tt.next !== null, Go = 0, it = tt = Ne = null, Sc = !1, t)
    throw Error(F(300));
  return e;
}
function sv() {
  var e = Bs !== 0;
  return Bs = 0, e;
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
function Ws(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ff(e) {
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
      if ((Go & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, a = r) : l = l.next = d, Ne.lanes |= c, Ko |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = r : l.next = s, zn(r, t.memoizedState) || (At = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ne.lanes |= i, Ko |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Lf(e) {
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
function Jx() {
}
function ew(e, t) {
  var n = Ne, r = bn(), o = t(), i = !zn(r.memoizedState, o);
  if (i && (r.memoizedState = o, At = !0), r = r.queue, lv(rw.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || it !== null && it.memoizedState.tag & 1) {
    if (n.flags |= 2048, Hs(9, nw.bind(null, n, r, o, t), void 0, null), st === null)
      throw Error(F(349));
    Go & 30 || tw(n, t, o);
  }
  return o;
}
function tw(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function nw(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ow(t) && iw(e);
}
function rw(e, t, n) {
  return n(function() {
    ow(t) && iw(e);
  });
}
function ow(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !zn(e, n);
  } catch {
    return !0;
  }
}
function iw(e) {
  var t = Cr(e, 1);
  t !== null && An(t, e, 1, -1);
}
function Z0(e) {
  var t = Wn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ws, lastRenderedState: e }, t.queue = e, e = e.dispatch = JO.bind(null, Ne, e), [t.memoizedState, e];
}
function Hs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function aw() {
  return bn().memoizedState;
}
function Ru(e, t, n, r) {
  var o = Wn();
  Ne.flags |= e, o.memoizedState = Hs(1 | t, n, void 0, r === void 0 ? null : r);
}
function pd(e, t, n, r) {
  var o = bn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (tt !== null) {
    var a = tt.memoizedState;
    if (i = a.destroy, r !== null && iv(r, a.deps)) {
      o.memoizedState = Hs(t, n, i, r);
      return;
    }
  }
  Ne.flags |= e, o.memoizedState = Hs(1 | t, n, i, r);
}
function J0(e, t) {
  return Ru(8390656, 8, e, t);
}
function lv(e, t) {
  return pd(2048, 8, e, t);
}
function sw(e, t) {
  return pd(4, 2, e, t);
}
function lw(e, t) {
  return pd(4, 4, e, t);
}
function uw(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function cw(e, t, n) {
  return n = n != null ? n.concat([e]) : null, pd(4, 4, uw.bind(null, t, e), n);
}
function uv() {
}
function dw(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && iv(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function fw(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && iv(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function pw(e, t, n) {
  return Go & 21 ? (zn(n, t) || (n = vx(), Ne.lanes |= n, Ko |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, At = !0), e.memoizedState = n);
}
function QO(e, t) {
  var n = xe;
  xe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Df.transition;
  Df.transition = {};
  try {
    e(!1), t();
  } finally {
    xe = n, Df.transition = r;
  }
}
function hw() {
  return bn().memoizedState;
}
function ZO(e, t, n) {
  var r = Jr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, mw(e))
    vw(t, n);
  else if (n = Gx(e, t, n, r), n !== null) {
    var o = Et();
    An(n, e, r, o), gw(n, t, r);
  }
}
function JO(e, t, n) {
  var r = Jr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (mw(e))
    vw(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, n);
        if (o.hasEagerState = !0, o.eagerState = s, zn(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, ev(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Gx(e, t, o, r), n !== null && (o = Et(), An(n, e, r, o), gw(n, t, r));
  }
}
function mw(e) {
  var t = e.alternate;
  return e === Ne || t !== null && t === Ne;
}
function vw(e, t) {
  cs = Sc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function gw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Nm(e, n);
  }
}
var xc = { readContext: yn, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, eM = { readContext: yn, useCallback: function(e, t) {
  return Wn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: yn, useEffect: J0, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ru(
    4194308,
    4,
    uw.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ZO.bind(null, Ne, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Wn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Z0, useDebugValue: uv, useDeferredValue: function(e) {
  return Wn().memoizedState = e;
}, useTransition: function() {
  var e = Z0(!1), t = e[0];
  return e = QO.bind(null, e[1]), Wn().memoizedState = e, [t, e];
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
    Go & 30 || tw(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, J0(rw.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Hs(9, nw.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Wn(), t = st.identifierPrefix;
  if (De) {
    var n = pr, r = fr;
    n = (r & ~(1 << 32 - $n(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Bs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = XO++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, tM = {
  readContext: yn,
  useCallback: dw,
  useContext: yn,
  useEffect: lv,
  useImperativeHandle: cw,
  useInsertionEffect: sw,
  useLayoutEffect: lw,
  useMemo: fw,
  useReducer: Ff,
  useRef: aw,
  useState: function() {
    return Ff(Ws);
  },
  useDebugValue: uv,
  useDeferredValue: function(e) {
    var t = bn();
    return pw(t, tt.memoizedState, e);
  },
  useTransition: function() {
    var e = Ff(Ws)[0], t = bn().memoizedState;
    return [e, t];
  },
  useMutableSource: Jx,
  useSyncExternalStore: ew,
  useId: hw,
  unstable_isNewReconciler: !1
}, nM = { readContext: yn, useCallback: dw, useContext: yn, useEffect: lv, useImperativeHandle: cw, useInsertionEffect: sw, useLayoutEffect: lw, useMemo: fw, useReducer: Lf, useRef: aw, useState: function() {
  return Lf(Ws);
}, useDebugValue: uv, useDeferredValue: function(e) {
  var t = bn();
  return tt === null ? t.memoizedState = e : pw(t, tt.memoizedState, e);
}, useTransition: function() {
  var e = Lf(Ws)[0], t = bn().memoizedState;
  return [e, t];
}, useMutableSource: Jx, useSyncExternalStore: ew, useId: hw, unstable_isNewReconciler: !1 };
function oa(e, t) {
  try {
    var n = "", r = t;
    do
      n += M_(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function zf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function yh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var rM = typeof WeakMap == "function" ? WeakMap : Map;
function yw(e, t, n) {
  n = vr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Cc || (Cc = !0, _h = r), yh(e, t);
  }, n;
}
function bw(e, t, n) {
  n = vr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      yh(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    yh(e, t), typeof r != "function" && (Zr === null ? Zr = /* @__PURE__ */ new Set([this]) : Zr.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function ey(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new rM();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = gM.bind(null, e, t, n), t.then(e, e));
}
function ty(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ny(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vr(-1, 1), t.tag = 2, Qr(n, t, 1))), n.lanes |= 1), e);
}
var oM = _r.ReactCurrentOwner, At = !1;
function Pt(e, t, n, r) {
  t.child = e === null ? Qx(t, null, n, r) : na(t, e.child, n, r);
}
function ry(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Wi(t, o), r = av(e, t, n, r, i, o), n = sv(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kr(e, t, o)) : (De && n && Ym(t), t.flags |= 1, Pt(e, t, r, o), t.child);
}
function oy(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !gv(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Sw(e, t, i, r, o)) : (e = Fu(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Fs, n(a, r) && e.ref === t.ref)
      return kr(e, t, o);
  }
  return t.flags |= 1, e = eo(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Sw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Fs(i, r) && e.ref === t.ref)
      if (At = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (At = !0);
      else
        return t.lanes = e.lanes, kr(e, t, o);
  }
  return bh(e, t, n, r, o);
}
function xw(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ee(Ti, Kt), Kt |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ee(Ti, Kt), Kt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ee(Ti, Kt), Kt |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ee(Ti, Kt), Kt |= r;
  return Pt(e, t, o, n), t.child;
}
function ww(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function bh(e, t, n, r, o) {
  var i = Ft(n) ? Ho : wt.current;
  return i = ea(t, i), Wi(t, o), n = av(e, t, n, r, i, o), r = sv(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kr(e, t, o)) : (De && r && Ym(t), t.flags |= 1, Pt(e, t, n, o), t.child);
}
function iy(e, t, n, r, o) {
  if (Ft(n)) {
    var i = !0;
    pc(t);
  } else
    i = !1;
  if (Wi(t, o), t.stateNode === null)
    $u(e, t), qx(t, n, r), gh(t, n, r, o), r = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = yn(u) : (u = Ft(n) ? Ho : wt.current, u = ea(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && X0(t, a, r, u), jr = !1;
    var f = t.memoizedState;
    a.state = f, yc(t, r, a, o), l = t.memoizedState, s !== r || f !== l || Dt.current || jr ? (typeof c == "function" && (vh(t, n, c, r), l = t.memoizedState), (s = jr || q0(t, n, s, r, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Kx(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : _n(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = yn(l) : (l = Ft(n) ? Ho : wt.current, l = ea(t, l));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && X0(t, a, r, l), jr = !1, f = t.memoizedState, a.state = f, yc(t, r, a, o);
    var y = t.memoizedState;
    s !== d || f !== y || Dt.current || jr ? (typeof p == "function" && (vh(t, n, p, r), y = t.memoizedState), (u = jr || q0(t, n, u, r, f, y, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, y, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, y, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), a.props = r, a.state = y, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Sh(e, t, n, r, i, o);
}
function Sh(e, t, n, r, o, i) {
  ww(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a)
    return o && H0(t, n, !1), kr(e, t, i);
  r = t.stateNode, oM.current = t;
  var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = na(t, e.child, null, i), t.child = na(t, null, s, i)) : Pt(e, t, s, i), t.memoizedState = r.state, o && H0(t, n, !0), t.child;
}
function Cw(e) {
  var t = e.stateNode;
  t.pendingContext ? W0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && W0(e, t.context, !1), nv(e, t.containerInfo);
}
function ay(e, t, n, r, o) {
  return ta(), Xm(o), t.flags |= 256, Pt(e, t, n, r), t.child;
}
var xh = { dehydrated: null, treeContext: null, retryLane: 0 };
function wh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function kw(e, t, n) {
  var r = t.pendingProps, o = ze.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ee(ze, o & 1), e === null)
    return hh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = vd(a, r, 0, null), e = zo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = wh(n), t.memoizedState = xh, e) : cv(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return iM(e, t, a, r, s, o, n);
  if (i) {
    i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = eo(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = eo(s, i) : (i = zo(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? wh(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = xh, r;
  }
  return i = e.child, e = i.sibling, r = eo(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function cv(e, t) {
  return t = vd({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Zl(e, t, n, r) {
  return r !== null && Xm(r), na(t, e.child, null, n), e = cv(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function iM(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = zf(Error(F(422))), Zl(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = vd({ mode: "visible", children: r.children }, o, 0, null), i = zo(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && na(t, e.child, null, a), t.child.memoizedState = wh(a), t.memoizedState = xh, i);
  if (!(t.mode & 1))
    return Zl(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(F(419)), r = zf(i, r, void 0), Zl(e, t, a, r);
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
    return vv(), r = zf(Error(F(421))), Zl(e, t, a, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = yM.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Yt = Xr(o.nextSibling), qt = t, De = !0, Mn = null, e !== null && (fn[pn++] = fr, fn[pn++] = pr, fn[pn++] = Uo, fr = e.id, pr = e.overflow, Uo = t), t = cv(t, r.children), t.flags |= 4096, t);
}
function sy(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), mh(e.return, t, n);
}
function jf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Pw(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Pt(e, t, r.children, n), r = ze.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && sy(e, n, t);
          else if (e.tag === 19)
            sy(e, n, t);
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
  if (Ee(ze, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && bc(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), jf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && bc(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        jf(t, !0, n, null, i);
        break;
      case "together":
        jf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $u(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ko |= t.lanes, !(n & t.childLanes))
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
function aM(e, t, n) {
  switch (t.tag) {
    case 3:
      Cw(t), ta();
      break;
    case 5:
      Zx(t);
      break;
    case 1:
      Ft(t.type) && pc(t);
      break;
    case 4:
      nv(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Ee(vc, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ee(ze, ze.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? kw(e, t, n) : (Ee(ze, ze.current & 1), e = kr(e, t, n), e !== null ? e.sibling : null);
      Ee(ze, ze.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Pw(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ee(ze, ze.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, xw(e, t, n);
  }
  return kr(e, t, n);
}
var Tw, Ch, Ew, _w;
Tw = function(e, t) {
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
Ch = function() {
};
Ew = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, $o(Zn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Up(e, o), r = Up(e, r), i = [];
        break;
      case "select":
        o = Ve({}, o, { value: void 0 }), r = Ve({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Yp(e, o), r = Yp(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = dc);
    }
    Xp(n, r);
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
_w = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fa(e, t) {
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
function sM(e, t, n) {
  var r = t.pendingProps;
  switch (qm(t), t.tag) {
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
      return Ft(t.type) && fc(), yt(t), null;
    case 3:
      return r = t.stateNode, ra(), Re(Dt), Re(wt), ov(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Xl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Mn !== null && (Ih(Mn), Mn = null))), Ch(e, t), yt(t), null;
    case 5:
      rv(t);
      var o = $o(Vs.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Ew(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(F(166));
          return yt(t), null;
        }
        if (e = $o(Zn.current), Xl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Yn] = t, r[js] = i, e = (t.mode & 1) !== 0, n) {
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
              v0(r, i), Me("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Me("invalid", r);
              break;
            case "textarea":
              y0(r, i), Me("invalid", r);
          }
          Xp(n, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && ql(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && ql(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Os.hasOwnProperty(a) && s != null && a === "onScroll" && Me("scroll", r);
            }
          switch (n) {
            case "input":
              Vl(r), g0(r, i, !0);
              break;
            case "textarea":
              Vl(r), b0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = dc);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = tx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Yn] = t, e[js] = r, Tw(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Qp(n, r), n) {
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
                v0(e, r), o = Up(e, r), Me("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ve({}, r, { value: void 0 }), Me("invalid", e);
                break;
              case "textarea":
                y0(e, r), o = Yp(e, r), Me("invalid", e);
                break;
              default:
                o = r;
            }
            Xp(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? ox(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && nx(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ms(e, l) : typeof l == "number" && Ms(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Os.hasOwnProperty(i) ? l != null && i === "onScroll" && Me("scroll", e) : l != null && Am(e, i, l, a));
              }
            switch (n) {
              case "input":
                Vl(e), g0(e, r, !1);
                break;
              case "textarea":
                Vl(e), b0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + io(r.value));
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
                typeof o.onClick == "function" && (e.onclick = dc);
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
        _w(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(F(166));
        if (n = $o(Vs.current), $o(Zn.current), Xl(t)) {
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
      if (Re(ze), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (De && Yt !== null && t.mode & 1 && !(t.flags & 128))
          Ux(), ta(), t.flags |= 98560, i = !1;
        else if (i = Xl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(F(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(F(317));
            i[Yn] = t;
          } else
            ta(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          yt(t), i = !1;
        } else
          Mn !== null && (Ih(Mn), Mn = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ze.current & 1 ? nt === 0 && (nt = 3) : vv())), t.updateQueue !== null && (t.flags |= 4), yt(t), null);
    case 4:
      return ra(), Ch(e, t), e === null && Ls(t.stateNode.containerInfo), yt(t), null;
    case 10:
      return Jm(t.type._context), yt(t), null;
    case 17:
      return Ft(t.type) && fc(), yt(t), null;
    case 19:
      if (Re(ze), i = t.memoizedState, i === null)
        return yt(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (r)
          Fa(i, !1);
        else {
          if (nt !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = bc(e), a !== null) {
                for (t.flags |= 128, Fa(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return Ee(ze, ze.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ke() > ia && (t.flags |= 128, r = !0, Fa(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = bc(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Fa(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !De)
              return yt(t), null;
          } else
            2 * Ke() - i.renderingStartTime > ia && n !== 1073741824 && (t.flags |= 128, r = !0, Fa(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ke(), t.sibling = null, n = ze.current, Ee(ze, r ? n & 1 | 2 : n & 1), t) : (yt(t), null);
    case 22:
    case 23:
      return mv(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Kt & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function lM(e, t) {
  switch (qm(t), t.tag) {
    case 1:
      return Ft(t.type) && fc(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ra(), Re(Dt), Re(wt), ov(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return rv(t), null;
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
      return Jm(t.type._context), null;
    case 22:
    case 23:
      return mv(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jl = !1, St = !1, uM = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function Pi(e, t) {
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
function kh(e, t, n) {
  try {
    n();
  } catch (r) {
    We(e, t, r);
  }
}
var ly = !1;
function cM(e, t) {
  if (sh = lc, e = Rx(), Km(e)) {
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
  for (lh = { focusedElem: e, selectionRange: n }, lc = !1, B = t; B !== null; )
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
                  var g = y.memoizedProps, S = y.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : _n(t.type, g), S);
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
          We(t, t.return, x);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, B = e;
          break;
        }
        B = t.return;
      }
  return y = ly, ly = !1, y;
}
function ds(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && kh(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function hd(e, t) {
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
function Ph(e) {
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
function Ow(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ow(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yn], delete t[js], delete t[dh], delete t[GO], delete t[KO])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Mw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function uy(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Mw(e.return))
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
function Th(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = dc));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Th(e, t, n), e = e.sibling; e !== null; )
      Th(e, t, n), e = e.sibling;
}
function Eh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Eh(e, t, n), e = e.sibling; e !== null; )
      Eh(e, t, n), e = e.sibling;
}
var dt = null, On = !1;
function $r(e, t, n) {
  for (n = n.child; n !== null; )
    Iw(e, t, n), n = n.sibling;
}
function Iw(e, t, n) {
  if (Qn && typeof Qn.onCommitFiberUnmount == "function")
    try {
      Qn.onCommitFiberUnmount(ad, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      St || Pi(n, t);
    case 6:
      var r = dt, o = On;
      dt = null, $r(e, t, n), dt = r, On = o, dt !== null && (On ? (e = dt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : dt.removeChild(n.stateNode));
      break;
    case 18:
      dt !== null && (On ? (e = dt, n = n.stateNode, e.nodeType === 8 ? Rf(e.parentNode, n) : e.nodeType === 1 && Rf(e, n), As(e)) : Rf(dt, n.stateNode));
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
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && kh(n, t, a), o = o.next;
        } while (o !== r);
      }
      $r(e, t, n);
      break;
    case 1:
      if (!St && (Pi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
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
function cy(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new uM()), t.forEach(function(r) {
      var o = bM.bind(null, e, r);
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
        Iw(i, a, o), dt = null, On = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        We(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Rw(t, e), t = t.sibling;
}
function Rw(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Tn(t, e), Vn(e), r & 4) {
        try {
          ds(3, e, e.return), hd(3, e);
        } catch (g) {
          We(e, e.return, g);
        }
        try {
          ds(5, e, e.return);
        } catch (g) {
          We(e, e.return, g);
        }
      }
      break;
    case 1:
      Tn(t, e), Vn(e), r & 512 && n !== null && Pi(n, n.return);
      break;
    case 5:
      if (Tn(t, e), Vn(e), r & 512 && n !== null && Pi(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ms(o, "");
        } catch (g) {
          We(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && JS(o, i), Qp(s, a);
            var u = Qp(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? ox(o, d) : c === "dangerouslySetInnerHTML" ? nx(o, d) : c === "children" ? Ms(o, d) : Am(o, c, d, u);
            }
            switch (s) {
              case "input":
                Gp(o, i);
                break;
              case "textarea":
                ex(o, i);
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
          } catch (g) {
            We(e, e.return, g);
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
          We(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Tn(t, e), Vn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          As(t.containerInfo);
        } catch (g) {
          We(e, e.return, g);
        }
      break;
    case 4:
      Tn(t, e), Vn(e);
      break;
    case 13:
      Tn(t, e), Vn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (pv = Ke())), r & 4 && cy(e);
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
                  ds(4, f, f.return);
                  break;
                case 1:
                  Pi(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    r = f, n = f.return;
                    try {
                      t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                    } catch (g) {
                      We(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Pi(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    fy(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, B = p) : fy(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = rx("display", a));
                } catch (g) {
                  We(e, e.return, g);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (g) {
                  We(e, e.return, g);
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
      Tn(t, e), Vn(e), r & 4 && cy(e);
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
          if (Mw(n)) {
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
          var i = uy(e);
          Eh(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, s = uy(e);
          Th(e, s, a);
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
function dM(e, t, n) {
  B = e, $w(e);
}
function $w(e, t, n) {
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
            a = B, l = a.child, a.tag === 22 && a.memoizedState !== null ? py(o) : l !== null ? (l.return = a, B = l) : py(o);
        for (; i !== null; )
          B = i, $w(i), i = i.sibling;
        B = o, Jl = s, St = u;
      }
      dy(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : dy(e);
  }
}
function dy(e) {
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
              St || hd(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !St)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : _n(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Y0(t, i, r);
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
                Y0(t, a, n);
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
        St || t.flags & 512 && Ph(t);
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
function fy(e) {
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
function py(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hd(4, t);
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
            Ph(t);
          } catch (l) {
            We(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Ph(t);
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
var fM = Math.ceil, wc = _r.ReactCurrentDispatcher, dv = _r.ReactCurrentOwner, vn = _r.ReactCurrentBatchConfig, he = 0, st = null, Ze = null, pt = 0, Kt = 0, Ti = fo(0), nt = 0, Us = null, Ko = 0, md = 0, fv = 0, fs = null, It = null, pv = 0, ia = 1 / 0, lr = null, Cc = !1, _h = null, Zr = null, eu = !1, Gr = null, kc = 0, ps = 0, Oh = null, Au = -1, Du = 0;
function Et() {
  return he & 6 ? Ke() : Au !== -1 ? Au : Au = Ke();
}
function Jr(e) {
  return e.mode & 1 ? he & 2 && pt !== 0 ? pt & -pt : qO.transition !== null ? (Du === 0 && (Du = vx()), Du) : (e = xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Cx(e.type)), e) : 1;
}
function An(e, t, n, r) {
  if (50 < ps)
    throw ps = 0, Oh = null, Error(F(185));
  ul(e, n, r), (!(he & 2) || e !== st) && (e === st && (!(he & 2) && (md |= n), nt === 4 && Br(e, pt)), Lt(e, r), n === 1 && he === 0 && !(t.mode & 1) && (ia = Ke() + 500, dd && po()));
}
function Lt(e, t) {
  var n = e.callbackNode;
  q_(e, t);
  var r = sc(e, e === st ? pt : 0);
  if (r === 0)
    n !== null && w0(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && w0(n), t === 1)
      e.tag === 0 ? YO(hy.bind(null, e)) : Bx(hy.bind(null, e)), HO(function() {
        !(he & 6) && po();
      }), n = null;
    else {
      switch (gx(r)) {
        case 1:
          n = jm;
          break;
        case 4:
          n = hx;
          break;
        case 16:
          n = ac;
          break;
        case 536870912:
          n = mx;
          break;
        default:
          n = ac;
      }
      n = Vw(n, Aw.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Aw(e, t) {
  if (Au = -1, Du = 0, he & 6)
    throw Error(F(327));
  var n = e.callbackNode;
  if (Hi() && e.callbackNode !== n)
    return null;
  var r = sc(e, e === st ? pt : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Pc(e, r);
  else {
    t = r;
    var o = he;
    he |= 2;
    var i = Fw();
    (st !== e || pt !== t) && (lr = null, ia = Ke() + 500, Lo(e, t));
    do
      try {
        mM();
        break;
      } catch (s) {
        Dw(e, s);
      }
    while (!0);
    Zm(), wc.current = i, he = o, Ze !== null ? t = 0 : (st = null, pt = 0, t = nt);
  }
  if (t !== 0) {
    if (t === 2 && (o = nh(e), o !== 0 && (r = o, t = Mh(e, o))), t === 1)
      throw n = Us, Lo(e, 0), Br(e, r), Lt(e, Ke()), n;
    if (t === 6)
      Br(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !pM(o) && (t = Pc(e, r), t === 2 && (i = nh(e), i !== 0 && (r = i, t = Mh(e, i))), t === 1))
        throw n = Us, Lo(e, 0), Br(e, r), Lt(e, Ke()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          ko(e, It, lr);
          break;
        case 3:
          if (Br(e, r), (r & 130023424) === r && (t = pv + 500 - Ke(), 10 < t)) {
            if (sc(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Et(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ch(ko.bind(null, e, It, lr), t);
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
          if (r = o, r = Ke() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * fM(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ch(ko.bind(null, e, It, lr), r);
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
  return Lt(e, Ke()), e.callbackNode === n ? Aw.bind(null, e) : null;
}
function Mh(e, t) {
  var n = fs;
  return e.current.memoizedState.isDehydrated && (Lo(e, t).flags |= 256), e = Pc(e, t), e !== 2 && (t = It, It = n, t !== null && Ih(t)), e;
}
function Ih(e) {
  It === null ? It = e : It.push.apply(It, e);
}
function pM(e) {
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
  for (t &= ~fv, t &= ~md, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $n(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function hy(e) {
  if (he & 6)
    throw Error(F(327));
  Hi();
  var t = sc(e, 0);
  if (!(t & 1))
    return Lt(e, Ke()), null;
  var n = Pc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = nh(e);
    r !== 0 && (t = r, n = Mh(e, r));
  }
  if (n === 1)
    throw n = Us, Lo(e, 0), Br(e, t), Lt(e, Ke()), n;
  if (n === 6)
    throw Error(F(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ko(e, It, lr), Lt(e, Ke()), null;
}
function hv(e, t) {
  var n = he;
  he |= 1;
  try {
    return e(t);
  } finally {
    he = n, he === 0 && (ia = Ke() + 500, dd && po());
  }
}
function Yo(e) {
  Gr !== null && Gr.tag === 0 && !(he & 6) && Hi();
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
function mv() {
  Kt = Ti.current, Re(Ti);
}
function Lo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, WO(n)), Ze !== null)
    for (n = Ze.return; n !== null; ) {
      var r = n;
      switch (qm(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && fc();
          break;
        case 3:
          ra(), Re(Dt), Re(wt), ov();
          break;
        case 5:
          rv(r);
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
          Jm(r.type._context);
          break;
        case 22:
        case 23:
          mv();
      }
      n = n.return;
    }
  if (st = e, Ze = e = eo(e.current, null), pt = Kt = t, nt = 0, Us = null, fv = md = Ko = 0, It = fs = null, Ro !== null) {
    for (t = 0; t < Ro.length; t++)
      if (n = Ro[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, r.next = a;
        }
        n.pending = r;
      }
    Ro = null;
  }
  return e;
}
function Dw(e, t) {
  do {
    var n = Ze;
    try {
      if (Zm(), Iu.current = xc, Sc) {
        for (var r = Ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Sc = !1;
      }
      if (Go = 0, it = tt = Ne = null, cs = !1, Bs = 0, dv.current = null, n === null || n.return === null) {
        nt = 1, Us = t, Ze = null;
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
          var p = ty(a);
          if (p !== null) {
            p.flags &= -257, ny(p, a, s, i, t), p.mode & 1 && ey(i, u, t), t = p, l = u;
            var y = t.updateQueue;
            if (y === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else
              y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              ey(i, u, t), vv();
              break e;
            }
            l = Error(F(426));
          }
        } else if (De && s.mode & 1) {
          var S = ty(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), ny(S, a, s, i, t), Xm(oa(l, s));
            break e;
          }
        }
        i = l = oa(l, s), nt !== 4 && (nt = 2), fs === null ? fs = [i] : fs.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = yw(i, l, t);
              K0(i, m);
              break e;
            case 1:
              s = l;
              var h = i.type, b = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Zr === null || !Zr.has(b)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = bw(i, s, t);
                K0(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      zw(n);
    } catch (k) {
      t = k, Ze === n && n !== null && (Ze = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Fw() {
  var e = wc.current;
  return wc.current = xc, e === null ? xc : e;
}
function vv() {
  (nt === 0 || nt === 3 || nt === 2) && (nt = 4), st === null || !(Ko & 268435455) && !(md & 268435455) || Br(st, pt);
}
function Pc(e, t) {
  var n = he;
  he |= 2;
  var r = Fw();
  (st !== e || pt !== t) && (lr = null, Lo(e, t));
  do
    try {
      hM();
      break;
    } catch (o) {
      Dw(e, o);
    }
  while (!0);
  if (Zm(), he = n, wc.current = r, Ze !== null)
    throw Error(F(261));
  return st = null, pt = 0, nt;
}
function hM() {
  for (; Ze !== null; )
    Lw(Ze);
}
function mM() {
  for (; Ze !== null && !N_(); )
    Lw(Ze);
}
function Lw(e) {
  var t = Nw(e.alternate, e, Kt);
  e.memoizedProps = e.pendingProps, t === null ? zw(e) : Ze = t, dv.current = null;
}
function zw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = lM(n, t), n !== null) {
        n.flags &= 32767, Ze = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        nt = 6, Ze = null;
        return;
      }
    } else if (n = sM(n, t, Kt), n !== null) {
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
    vn.transition = null, xe = 1, vM(e, t, n, r);
  } finally {
    vn.transition = o, xe = r;
  }
  return null;
}
function vM(e, t, n, r) {
  do
    Hi();
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
  if (X_(e, i), e === st && (Ze = st = null, pt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || eu || (eu = !0, Vw(ac, function() {
    return Hi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = vn.transition, vn.transition = null;
    var a = xe;
    xe = 1;
    var s = he;
    he |= 4, dv.current = null, cM(e, n), Rw(n, e), FO(lh), lc = !!sh, lh = sh = null, e.current = n, dM(n), V_(), he = s, xe = a, vn.transition = i;
  } else
    e.current = n;
  if (eu && (eu = !1, Gr = e, kc = o), i = e.pendingLanes, i === 0 && (Zr = null), H_(n.stateNode), Lt(e, Ke()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Cc)
    throw Cc = !1, e = _h, _h = null, e;
  return kc & 1 && e.tag !== 0 && Hi(), i = e.pendingLanes, i & 1 ? e === Oh ? ps++ : (ps = 0, Oh = e) : ps = 0, po(), null;
}
function Hi() {
  if (Gr !== null) {
    var e = gx(kc), t = vn.transition, n = xe;
    try {
      if (vn.transition = null, xe = 16 > e ? 16 : e, Gr === null)
        var r = !1;
      else {
        if (e = Gr, Gr = null, kc = 0, he & 6)
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
                      ds(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, B = d;
                  else
                    for (; B !== null; ) {
                      c = B;
                      var f = c.sibling, p = c.return;
                      if (Ow(c), c === u) {
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
                var g = y.child;
                if (g !== null) {
                  y.child = null;
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
                      ds(9, i, i.return);
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
                        hd(9, s);
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
            Qn.onPostCommitFiberRoot(ad, e);
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
function my(e, t, n) {
  t = oa(n, t), t = yw(e, t, 1), e = Qr(e, t, 1), t = Et(), e !== null && (ul(e, 1, t), Lt(e, t));
}
function We(e, t, n) {
  if (e.tag === 3)
    my(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        my(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zr === null || !Zr.has(r))) {
          e = oa(n, e), e = bw(t, e, 1), t = Qr(t, e, 1), e = Et(), t !== null && (ul(t, 1, e), Lt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function gM(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Et(), e.pingedLanes |= e.suspendedLanes & n, st === e && (pt & n) === n && (nt === 4 || nt === 3 && (pt & 130023424) === pt && 500 > Ke() - pv ? Lo(e, 0) : fv |= n), Lt(e, t);
}
function jw(e, t) {
  t === 0 && (e.mode & 1 ? (t = Hl, Hl <<= 1, !(Hl & 130023424) && (Hl = 4194304)) : t = 1);
  var n = Et();
  e = Cr(e, t), e !== null && (ul(e, t, n), Lt(e, n));
}
function yM(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), jw(e, n);
}
function bM(e, t) {
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
  r !== null && r.delete(t), jw(e, n);
}
var Nw;
Nw = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Dt.current)
      At = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return At = !1, aM(e, t, n);
      At = !!(e.flags & 131072);
    }
  else
    At = !1, De && t.flags & 1048576 && Wx(t, mc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      $u(e, t), e = t.pendingProps;
      var o = ea(t, wt.current);
      Wi(t, n), o = av(null, t, r, e, o, n);
      var i = sv();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ft(r) ? (i = !0, pc(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, tv(t), o.updater = fd, t.stateNode = o, o._reactInternals = t, gh(t, r, e, n), t = Sh(null, t, r, !0, i, n)) : (t.tag = 0, De && i && Ym(t), Pt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch ($u(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = xM(r), e = _n(r, e), o) {
          case 0:
            t = bh(null, t, r, e, n);
            break e;
          case 1:
            t = iy(null, t, r, e, n);
            break e;
          case 11:
            t = ry(null, t, r, e, n);
            break e;
          case 14:
            t = oy(null, t, r, _n(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), bh(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), iy(e, t, r, o, n);
    case 3:
      e: {
        if (Cw(t), e === null)
          throw Error(F(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Kx(e, t), yc(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = oa(Error(F(423)), t), t = ay(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = oa(Error(F(424)), t), t = ay(e, t, r, n, o);
            break e;
          } else
            for (Yt = Xr(t.stateNode.containerInfo.firstChild), qt = t, De = !0, Mn = null, n = Qx(t, null, r, n), t.child = n; n; )
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
      return Zx(t), e === null && hh(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, uh(r, o) ? a = null : i !== null && uh(r, i) && (t.flags |= 32), ww(e, t), Pt(e, t, a, n), t.child;
    case 6:
      return e === null && hh(t), null;
    case 13:
      return kw(e, t, n);
    case 4:
      return nv(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = na(t, null, r, n) : Pt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), ry(e, t, r, o, n);
    case 7:
      return Pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, Ee(vc, r._currentValue), r._currentValue = a, i !== null)
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
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), mh(
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
                a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), mh(a, n, t), a = i.sibling;
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
      return o = t.type, r = t.pendingProps.children, Wi(t, n), o = yn(o), r = r(o), t.flags |= 1, Pt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = _n(r, t.pendingProps), o = _n(r.type, o), oy(e, t, r, o, n);
    case 15:
      return Sw(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), $u(e, t), t.tag = 1, Ft(r) ? (e = !0, pc(t)) : e = !1, Wi(t, n), qx(t, r, o), gh(t, r, o, n), Sh(null, t, r, !0, e, n);
    case 19:
      return Pw(e, t, n);
    case 22:
      return xw(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function Vw(e, t) {
  return px(e, t);
}
function SM(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function hn(e, t, n, r) {
  return new SM(e, t, n, r);
}
function gv(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function xM(e) {
  if (typeof e == "function")
    return gv(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Fm)
      return 11;
    if (e === Lm)
      return 14;
  }
  return 2;
}
function eo(e, t) {
  var n = e.alternate;
  return n === null ? (n = hn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Fu(e, t, n, r, o, i) {
  var a = 2;
  if (r = e, typeof e == "function")
    gv(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case vi:
          return zo(n.children, o, i, t);
        case Dm:
          a = 8, o |= 8;
          break;
        case Vp:
          return e = hn(12, n, t, o | 2), e.elementType = Vp, e.lanes = i, e;
        case Bp:
          return e = hn(13, n, t, o), e.elementType = Bp, e.lanes = i, e;
        case Wp:
          return e = hn(19, n, t, o), e.elementType = Wp, e.lanes = i, e;
        case XS:
          return vd(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case YS:
                a = 10;
                break e;
              case qS:
                a = 9;
                break e;
              case Fm:
                a = 11;
                break e;
              case Lm:
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
function vd(e, t, n, r) {
  return e = hn(22, e, r, t), e.elementType = XS, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Nf(e, t, n) {
  return e = hn(6, e, null, t), e.lanes = n, e;
}
function Vf(e, t, n) {
  return t = hn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function wM(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xf(0), this.expirationTimes = xf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function yv(e, t, n, r, o, i, a, s, l) {
  return e = new wM(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = hn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, tv(i), e;
}
function CM(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: mi, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Bw(e) {
  if (!e)
    return ao;
  e = e._reactInternals;
  e: {
    if (Zo(e) !== e || e.tag !== 1)
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
      return Vx(e, n, t);
  }
  return t;
}
function Ww(e, t, n, r, o, i, a, s, l) {
  return e = yv(n, r, !0, e, o, i, a, s, l), e.context = Bw(null), n = e.current, r = Et(), o = Jr(n), i = vr(r, o), i.callback = t ?? null, Qr(n, i, o), e.current.lanes = o, ul(e, o, r), Lt(e, r), e;
}
function gd(e, t, n, r) {
  var o = t.current, i = Et(), a = Jr(o);
  return n = Bw(n), t.context === null ? t.context = n : t.pendingContext = n, t = vr(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qr(o, t, a), e !== null && (An(e, o, a, i), Mu(e, o, a)), a;
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
function vy(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function bv(e, t) {
  vy(e, t), (e = e.alternate) && vy(e, t);
}
function kM() {
  return null;
}
var Hw = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Sv(e) {
  this._internalRoot = e;
}
yd.prototype.render = Sv.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(F(409));
  gd(e, t, null, null);
};
yd.prototype.unmount = Sv.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yo(function() {
      gd(null, e, null, null);
    }), t[wr] = null;
  }
};
function yd(e) {
  this._internalRoot = e;
}
yd.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Sx();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vr.length && t !== 0 && t < Vr[n].priority; n++)
      ;
    Vr.splice(n, 0, e), n === 0 && wx(e);
  }
};
function xv(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function bd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function gy() {
}
function PM(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Tc(a);
        i.call(u);
      };
    }
    var a = Ww(t, r, e, 0, null, !1, !1, "", gy);
    return e._reactRootContainer = a, e[wr] = a.current, Ls(e.nodeType === 8 ? e.parentNode : e), Yo(), a;
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
  var l = yv(e, 0, !1, null, null, !1, !1, "", gy);
  return e._reactRootContainer = l, e[wr] = l.current, Ls(e.nodeType === 8 ? e.parentNode : e), Yo(function() {
    gd(t, l, n, r);
  }), l;
}
function Sd(e, t, n, r, o) {
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
    gd(t, a, e, o);
  } else
    a = PM(n, t, e, o, r);
  return Tc(a);
}
yx = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qa(t.pendingLanes);
        n !== 0 && (Nm(t, n | 1), Lt(t, Ke()), !(he & 6) && (ia = Ke() + 500, po()));
      }
      break;
    case 13:
      Yo(function() {
        var r = Cr(e, 1);
        if (r !== null) {
          var o = Et();
          An(r, e, 1, o);
        }
      }), bv(e, 1);
  }
};
Vm = function(e) {
  if (e.tag === 13) {
    var t = Cr(e, 134217728);
    if (t !== null) {
      var n = Et();
      An(t, e, 134217728, n);
    }
    bv(e, 134217728);
  }
};
bx = function(e) {
  if (e.tag === 13) {
    var t = Jr(e), n = Cr(e, t);
    if (n !== null) {
      var r = Et();
      An(n, e, t, r);
    }
    bv(e, t);
  }
};
Sx = function() {
  return xe;
};
xx = function(e, t) {
  var n = xe;
  try {
    return xe = e, t();
  } finally {
    xe = n;
  }
};
Jp = function(e, t, n) {
  switch (t) {
    case "input":
      if (Gp(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = cd(r);
            if (!o)
              throw Error(F(90));
            ZS(r), Gp(r, o);
          }
        }
      }
      break;
    case "textarea":
      ex(e, n);
      break;
    case "select":
      t = n.value, t != null && ji(e, !!n.multiple, t, !1);
  }
};
sx = hv;
lx = Yo;
var TM = { usingClientEntryPoint: !1, Events: [dl, Si, cd, ix, ax, hv] }, La = { findFiberByHostInstance: Io, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, EM = { bundleType: La.bundleType, version: La.version, rendererPackageName: La.rendererPackageName, rendererConfig: La.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _r.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = dx(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: La.findFiberByHostInstance || kM, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var tu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!tu.isDisabled && tu.supportsFiber)
    try {
      ad = tu.inject(EM), Qn = tu;
    } catch {
    }
}
tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = TM;
tn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!xv(t))
    throw Error(F(200));
  return CM(e, t, null, n);
};
tn.createRoot = function(e, t) {
  if (!xv(e))
    throw Error(F(299));
  var n = !1, r = "", o = Hw;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = yv(e, 1, !1, null, null, n, !1, r, o), e[wr] = t.current, Ls(e.nodeType === 8 ? e.parentNode : e), new Sv(t);
};
tn.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","), Error(F(268, e)));
  return e = dx(t), e = e === null ? null : e.stateNode, e;
};
tn.flushSync = function(e) {
  return Yo(e);
};
tn.hydrate = function(e, t, n) {
  if (!bd(t))
    throw Error(F(200));
  return Sd(null, e, t, !0, n);
};
tn.hydrateRoot = function(e, t, n) {
  if (!xv(e))
    throw Error(F(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", a = Hw;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Ww(t, null, e, 1, n ?? null, o, !1, i, a), e[wr] = t.current, Ls(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new yd(t);
};
tn.render = function(e, t, n) {
  if (!bd(t))
    throw Error(F(200));
  return Sd(null, e, t, !1, n);
};
tn.unmountComponentAtNode = function(e) {
  if (!bd(e))
    throw Error(F(40));
  return e._reactRootContainer ? (Yo(function() {
    Sd(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wr] = null;
    });
  }), !0) : !1;
};
tn.unstable_batchedUpdates = hv;
tn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!bd(n))
    throw Error(F(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(F(38));
  return Sd(e, t, n, !1, r);
};
tn.version = "18.2.0-next-9e3b772b8-20220608";
function Uw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uw);
    } catch (e) {
      console.error(e);
    }
}
Uw(), WS.exports = tn;
var xd = WS.exports, yy = xd;
jp.createRoot = yy.createRoot, jp.hydrateRoot = yy.hydrateRoot;
var Gw = "Expected a function", by = NaN, _M = "[object Symbol]", OM = /^\s+|\s+$/g, MM = /^[-+]0x[0-9a-f]+$/i, IM = /^0b[01]+$/i, RM = /^0o[0-7]+$/i, $M = parseInt, AM = typeof Hr == "object" && Hr && Hr.Object === Object && Hr, DM = typeof self == "object" && self && self.Object === Object && self, FM = AM || DM || Function("return this")(), LM = Object.prototype, zM = LM.toString, jM = Math.max, NM = Math.min, Bf = function() {
  return FM.Date.now();
};
function VM(e, t, n) {
  var r, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Gw);
  t = Sy(t) || 0, Ec(n) && (c = !!n.leading, d = "maxWait" in n, i = d ? jM(Sy(n.maxWait) || 0, t) : i, f = "trailing" in n ? !!n.trailing : f);
  function p(P) {
    var T = r, E = o;
    return r = o = void 0, u = P, a = e.apply(E, T), a;
  }
  function y(P) {
    return u = P, s = setTimeout(m, t), c ? p(P) : a;
  }
  function g(P) {
    var T = P - l, E = P - u, M = t - T;
    return d ? NM(M, i - E) : M;
  }
  function S(P) {
    var T = P - l, E = P - u;
    return l === void 0 || T >= t || T < 0 || d && E >= i;
  }
  function m() {
    var P = Bf();
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
    return s === void 0 ? a : h(Bf());
  }
  function k() {
    var P = Bf(), T = S(P);
    if (r = arguments, o = this, l = P, T) {
      if (s === void 0)
        return y(l);
      if (d)
        return s = setTimeout(m, t), p(l);
    }
    return s === void 0 && (s = setTimeout(m, t)), a;
  }
  return k.cancel = b, k.flush = x, k;
}
function BM(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Gw);
  return Ec(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), VM(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
function Ec(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function WM(e) {
  return !!e && typeof e == "object";
}
function HM(e) {
  return typeof e == "symbol" || WM(e) && zM.call(e) == _M;
}
function Sy(e) {
  if (typeof e == "number")
    return e;
  if (HM(e))
    return by;
  if (Ec(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ec(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(OM, "");
  var n = IM.test(e);
  return n || RM.test(e) ? $M(e.slice(2), n ? 2 : 8) : MM.test(e) ? by : +e;
}
var UM = BM;
const GM = /* @__PURE__ */ sl(UM);
function KM(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function YM(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var qM = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(YM(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = KM(o);
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
}(), bt = "-ms-", _c = "-moz-", ge = "-webkit-", Kw = "comm", wv = "rule", Cv = "decl", XM = "@import", Yw = "@keyframes", QM = "@layer", ZM = Math.abs, wd = String.fromCharCode, JM = Object.assign;
function eI(e, t) {
  return ft(e, 0) ^ 45 ? (((t << 2 ^ ft(e, 0)) << 2 ^ ft(e, 1)) << 2 ^ ft(e, 2)) << 2 ^ ft(e, 3) : 0;
}
function qw(e) {
  return e.trim();
}
function tI(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ye(e, t, n) {
  return e.replace(t, n);
}
function Rh(e, t) {
  return e.indexOf(t);
}
function ft(e, t) {
  return e.charCodeAt(t) | 0;
}
function Gs(e, t, n) {
  return e.slice(t, n);
}
function Gn(e) {
  return e.length;
}
function kv(e) {
  return e.length;
}
function nu(e, t) {
  return t.push(e), e;
}
function nI(e, t) {
  return e.map(t).join("");
}
var Cd = 1, aa = 1, Xw = 0, Vt = 0, Qe = 0, Ca = "";
function kd(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Cd, column: aa, length: a, return: "" };
}
function za(e, t) {
  return JM(kd("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function rI() {
  return Qe;
}
function oI() {
  return Qe = Vt > 0 ? ft(Ca, --Vt) : 0, aa--, Qe === 10 && (aa = 1, Cd--), Qe;
}
function Xt() {
  return Qe = Vt < Xw ? ft(Ca, Vt++) : 0, aa++, Qe === 10 && (aa = 1, Cd++), Qe;
}
function Jn() {
  return ft(Ca, Vt);
}
function Lu() {
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
function Qw(e) {
  return Cd = aa = 1, Xw = Gn(Ca = e), Vt = 0, [];
}
function Zw(e) {
  return Ca = "", e;
}
function zu(e) {
  return qw(pl(Vt - 1, $h(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function iI(e) {
  for (; (Qe = Jn()) && Qe < 33; )
    Xt();
  return Ks(e) > 2 || Ks(Qe) > 3 ? "" : " ";
}
function aI(e, t) {
  for (; --t && Xt() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
    ;
  return pl(e, Lu() + (t < 6 && Jn() == 32 && Xt() == 32));
}
function $h(e) {
  for (; Xt(); )
    switch (Qe) {
      case e:
        return Vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && $h(Qe);
        break;
      case 40:
        e === 41 && $h(e);
        break;
      case 92:
        Xt();
        break;
    }
  return Vt;
}
function sI(e, t) {
  for (; Xt() && e + Qe !== 57; )
    if (e + Qe === 84 && Jn() === 47)
      break;
  return "/*" + pl(t, Vt - 1) + "*" + wd(e === 47 ? e : Xt());
}
function lI(e) {
  for (; !Ks(Jn()); )
    Xt();
  return pl(e, Vt);
}
function uI(e) {
  return Zw(ju("", null, null, null, [""], e = Qw(e), 0, [0], e));
}
function ju(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, y = 0, g = 1, S = 1, m = 1, h = 0, b = "", x = o, k = i, P = r, T = b; S; )
    switch (y = h, h = Xt()) {
      case 40:
        if (y != 108 && ft(T, d - 1) == 58) {
          Rh(T += ye(zu(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += zu(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += iI(y);
        break;
      case 92:
        T += aI(Lu() - 1, 7);
        continue;
      case 47:
        switch (Jn()) {
          case 42:
          case 47:
            nu(cI(sI(Xt(), Lu()), t, n), l);
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
            m == -1 && (T = ye(T, /\f/g, "")), p > 0 && Gn(T) - d && nu(p > 32 ? wy(T + ";", r, n, d - 1) : wy(ye(T, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            T += ";";
          default:
            if (nu(P = xy(T, t, n, u, c, o, s, b, x = [], k = [], d), i), h === 123)
              if (c === 0)
                ju(T, t, P, P, x, i, d, s, k);
              else
                switch (f === 99 && ft(T, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ju(e, P, P, r && nu(xy(e, P, P, 0, 0, o, s, b, o, x = [], d), k), o, k, d, s, r ? x : k);
                    break;
                  default:
                    ju(T, P, P, P, [""], k, 0, s, k);
                }
        }
        u = c = p = 0, g = m = 1, b = T = "", d = a;
        break;
      case 58:
        d = 1 + Gn(T), p = y;
      default:
        if (g < 1) {
          if (h == 123)
            --g;
          else if (h == 125 && g++ == 0 && oI() == 125)
            continue;
        }
        switch (T += wd(h), h * g) {
          case 38:
            m = c > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            s[u++] = (Gn(T) - 1) * m, m = 1;
            break;
          case 64:
            Jn() === 45 && (T += zu(Xt())), f = Jn(), c = d = Gn(b = T += lI(Lu())), h++;
            break;
          case 45:
            y === 45 && Gn(T) == 2 && (g = 0);
        }
    }
  return i;
}
function xy(e, t, n, r, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = kv(f), y = 0, g = 0, S = 0; y < r; ++y)
    for (var m = 0, h = Gs(e, d + 1, d = ZM(g = a[y])), b = e; m < p; ++m)
      (b = qw(g > 0 ? f[m] + " " + h : ye(h, /&\f/g, f[m]))) && (l[S++] = b);
  return kd(e, t, n, o === 0 ? wv : s, l, u, c);
}
function cI(e, t, n) {
  return kd(e, t, n, Kw, wd(rI()), Gs(e, 2, -2), 0);
}
function wy(e, t, n, r) {
  return kd(e, t, n, Cv, Gs(e, 0, r), Gs(e, r + 1, -1), r);
}
function Ui(e, t) {
  for (var n = "", r = kv(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function dI(e, t, n, r) {
  switch (e.type) {
    case QM:
      if (e.children.length)
        break;
    case XM:
    case Cv:
      return e.return = e.return || e.value;
    case Kw:
      return "";
    case Yw:
      return e.return = e.value + "{" + Ui(e.children, r) + "}";
    case wv:
      e.value = e.props.join(",");
  }
  return Gn(n = Ui(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function fI(e) {
  var t = kv(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function pI(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Cy = function(t) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (n.has(r))
      return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function Jw(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var hI = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Jn(), o === 38 && i === 12 && (n[r] = 1), !Ks(i); )
    Xt();
  return pl(t, Vt);
}, mI = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ks(o)) {
      case 0:
        o === 38 && Jn() === 12 && (n[r] = 1), t[r] += hI(Vt - 1, n, r);
        break;
      case 2:
        t[r] += zu(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Jn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += wd(o);
    }
  while (o = Xt());
  return t;
}, vI = function(t, n) {
  return Zw(mI(Qw(t), n));
}, ky = /* @__PURE__ */ new WeakMap(), gI = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ky.get(r)) && !o) {
      ky.set(t, !0);
      for (var i = [], a = vI(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, yI = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function eC(e, t) {
  switch (eI(e, t)) {
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
      return ge + e + _c + e + bt + e + e;
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
            return ye(e, /(.+:)(.+)-([^]+)/, "$1" + ge + "$2-$3$1" + _c + (ft(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Rh(e, "stretch") ? eC(ye(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ft(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ft(e, Gn(e) - 3 - (~Rh(e, "!important") && 10))) {
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
var bI = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Cv:
        t.return = eC(t.value, t.length);
        break;
      case Yw:
        return Ui([za(t, {
          value: ye(t.value, "@", "@" + ge)
        })], o);
      case wv:
        if (t.length)
          return nI(t.props, function(i) {
            switch (tI(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ui([za(t, {
                  props: [ye(i, /:(read-\w+)/, ":" + _c + "$1")]
                })], o);
              case "::placeholder":
                return Ui([za(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + ge + "input-$1")]
                }), za(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + _c + "$1")]
                }), za(t, {
                  props: [ye(i, /:(plac\w+)/, bt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, SI = [bI], xI = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var S = g.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || SI, i = {}, a, s = [];
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
  var l, u = [gI, yI];
  {
    var c, d = [dI, pI(function(g) {
      c.insert(g);
    })], f = fI(u.concat(o, d)), p = function(S) {
      return Ui(uI(S), f);
    };
    l = function(S, m, h, b) {
      c = h, p(S ? S + "{" + m.styles + "}" : m.styles), b && (y.inserted[m.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new qM({
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
var tC = { exports: {} }, we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt = typeof Symbol == "function" && Symbol.for, Pv = lt ? Symbol.for("react.element") : 60103, Tv = lt ? Symbol.for("react.portal") : 60106, Pd = lt ? Symbol.for("react.fragment") : 60107, Td = lt ? Symbol.for("react.strict_mode") : 60108, Ed = lt ? Symbol.for("react.profiler") : 60114, _d = lt ? Symbol.for("react.provider") : 60109, Od = lt ? Symbol.for("react.context") : 60110, Ev = lt ? Symbol.for("react.async_mode") : 60111, Md = lt ? Symbol.for("react.concurrent_mode") : 60111, Id = lt ? Symbol.for("react.forward_ref") : 60112, Rd = lt ? Symbol.for("react.suspense") : 60113, wI = lt ? Symbol.for("react.suspense_list") : 60120, $d = lt ? Symbol.for("react.memo") : 60115, Ad = lt ? Symbol.for("react.lazy") : 60116, CI = lt ? Symbol.for("react.block") : 60121, kI = lt ? Symbol.for("react.fundamental") : 60117, PI = lt ? Symbol.for("react.responder") : 60118, TI = lt ? Symbol.for("react.scope") : 60119;
function rn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Pv:
        switch (e = e.type, e) {
          case Ev:
          case Md:
          case Pd:
          case Ed:
          case Td:
          case Rd:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Od:
              case Id:
              case Ad:
              case $d:
              case _d:
                return e;
              default:
                return t;
            }
        }
      case Tv:
        return t;
    }
  }
}
function nC(e) {
  return rn(e) === Md;
}
we.AsyncMode = Ev;
we.ConcurrentMode = Md;
we.ContextConsumer = Od;
we.ContextProvider = _d;
we.Element = Pv;
we.ForwardRef = Id;
we.Fragment = Pd;
we.Lazy = Ad;
we.Memo = $d;
we.Portal = Tv;
we.Profiler = Ed;
we.StrictMode = Td;
we.Suspense = Rd;
we.isAsyncMode = function(e) {
  return nC(e) || rn(e) === Ev;
};
we.isConcurrentMode = nC;
we.isContextConsumer = function(e) {
  return rn(e) === Od;
};
we.isContextProvider = function(e) {
  return rn(e) === _d;
};
we.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Pv;
};
we.isForwardRef = function(e) {
  return rn(e) === Id;
};
we.isFragment = function(e) {
  return rn(e) === Pd;
};
we.isLazy = function(e) {
  return rn(e) === Ad;
};
we.isMemo = function(e) {
  return rn(e) === $d;
};
we.isPortal = function(e) {
  return rn(e) === Tv;
};
we.isProfiler = function(e) {
  return rn(e) === Ed;
};
we.isStrictMode = function(e) {
  return rn(e) === Td;
};
we.isSuspense = function(e) {
  return rn(e) === Rd;
};
we.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Pd || e === Md || e === Ed || e === Td || e === Rd || e === wI || typeof e == "object" && e !== null && (e.$$typeof === Ad || e.$$typeof === $d || e.$$typeof === _d || e.$$typeof === Od || e.$$typeof === Id || e.$$typeof === kI || e.$$typeof === PI || e.$$typeof === TI || e.$$typeof === CI);
};
we.typeOf = rn;
tC.exports = we;
var EI = tC.exports, rC = EI, _I = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, OI = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, oC = {};
oC[rC.ForwardRef] = _I;
oC[rC.Memo] = OI;
var MI = !0;
function iC(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var _v = function(t, n, r) {
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
  MI === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Ov = function(t, n, r) {
  _v(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function II(e) {
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
var RI = {
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
}, $I = /[A-Z]|^ms/g, AI = /_EMO_([^_]+?)_([^]*?)_EMO_/g, aC = function(t) {
  return t.charCodeAt(1) === 45;
}, Py = function(t) {
  return t != null && typeof t != "boolean";
}, Wf = /* @__PURE__ */ Jw(function(e) {
  return aC(e) ? e : e.replace($I, "-$&").toLowerCase();
}), Ty = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(AI, function(r, o, i) {
          return Kn = {
            name: o,
            styles: i,
            next: Kn
          }, o;
        });
  }
  return RI[t] !== 1 && !aC(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
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
      return DI(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Kn, a = n(e);
        return Kn = i, Ys(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function DI(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Ys(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Py(a) && (r += Wf(i) + ":" + Ty(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Py(a[s]) && (r += Wf(i) + ":" + Ty(i, a[s]) + ";");
      else {
        var l = Ys(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Wf(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var Ey = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Kn, Dd = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Kn = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Ys(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += Ys(r, n, t[s]), o && (i += a[s]);
  Ey.lastIndex = 0;
  for (var l = "", u; (u = Ey.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = II(i) + l;
  return {
    name: c,
    styles: i,
    next: Kn
  };
}, FI = function(t) {
  return t();
}, sC = f0.useInsertionEffect ? f0.useInsertionEffect : !1, lC = sC || FI, _y = sC || v.useLayoutEffect, Mv = {}.hasOwnProperty, uC = /* @__PURE__ */ v.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ xI({
    key: "css"
  }) : null
);
uC.Provider;
var Iv = function(t) {
  return /* @__PURE__ */ v.forwardRef(function(n, r) {
    var o = v.useContext(uC);
    return t(n, o, r);
  });
}, sa = /* @__PURE__ */ v.createContext({}), LI = function(t, n) {
  if (typeof n == "function") {
    var r = n(t);
    return r;
  }
  return q({}, t, n);
}, zI = /* @__PURE__ */ Cy(function(e) {
  return Cy(function(t) {
    return LI(e, t);
  });
}), jI = function(t) {
  var n = v.useContext(sa);
  return t.theme !== n && (n = zI(n)(t.theme)), /* @__PURE__ */ v.createElement(sa.Provider, {
    value: n
  }, t.children);
}, Ah = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", NI = function(t, n) {
  var r = {};
  for (var o in n)
    Mv.call(n, o) && (r[o] = n[o]);
  return r[Ah] = t, r;
}, VI = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return _v(n, r, o), lC(function() {
    return Ov(n, r, o);
  }), null;
}, BI = /* @__PURE__ */ Iv(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Ah], i = [r], a = "";
  typeof e.className == "string" ? a = iC(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Dd(i, void 0, v.useContext(sa));
  a += t.key + "-" + s.name;
  var l = {};
  for (var u in e)
    Mv.call(e, u) && u !== "css" && u !== Ah && (l[u] = e[u]);
  return l.ref = n, l.className = a, /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(VI, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ v.createElement(o, l));
}), WI = BI, ee = function(t, n) {
  var r = arguments;
  if (n == null || !Mv.call(n, "css"))
    return v.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = WI, i[1] = NI(t, n);
  for (var a = 2; a < o; a++)
    i[a] = r[a];
  return v.createElement.apply(null, i);
}, Fd = /* @__PURE__ */ Iv(function(e, t) {
  var n = e.styles, r = Dd([n], void 0, v.useContext(sa)), o = v.useRef();
  return _y(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), _y(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Ov(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function Rv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Dd(t);
}
var cC = function() {
  var t = Rv.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, dC = String.raw, fC = dC`
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
`, HI = () => /* @__PURE__ */ w.jsx(Fd, { styles: fC }), UI = ({ scope: e = "" }) => /* @__PURE__ */ w.jsx(
  Fd,
  {
    styles: dC`
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

      ${fC}
    `
  }
);
function GI(e, t) {
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
        i ?? GI(r, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [KI, YI] = Je({
  strict: !1,
  name: "PortalManagerContext"
});
function pC(e) {
  const { children: t, zIndex: n } = e;
  return /* @__PURE__ */ w.jsx(KI, { value: { zIndex: n }, children: t });
}
pC.displayName = "PortalManager";
var la = globalThis != null && globalThis.document ? v.useLayoutEffect : v.useEffect, [hC, qI] = Je({
  strict: !1,
  name: "PortalContext"
}), $v = "chakra-portal", XI = ".chakra-portal", QI = (e) => /* @__PURE__ */ w.jsx(
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
), ZI = (e) => {
  const { appendToParentPortal: t, children: n } = e, [r, o] = v.useState(null), i = v.useRef(null), [, a] = v.useState({});
  v.useEffect(() => a({}), []);
  const s = qI(), l = YI();
  la(() => {
    if (!r)
      return;
    const c = r.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = $v, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [r]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ w.jsx(QI, { zIndex: l == null ? void 0 : l.zIndex, children: n }) : n;
  return i.current ? xd.createPortal(
    /* @__PURE__ */ w.jsx(hC, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ w.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, JI = (e) => {
  const { children: t, containerRef: n, appendToParentPortal: r } = e, o = n.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = v.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = $v), l;
  }, [o]), [, s] = v.useState({});
  return la(() => s({}), []), la(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? xd.createPortal(
    /* @__PURE__ */ w.jsx(hC, { value: r ? a : null, children: t }),
    a
  ) : null;
};
function hl(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: n, ...r } = t;
  return n ? /* @__PURE__ */ w.jsx(JI, { containerRef: n, ...r }) : /* @__PURE__ */ w.jsx(ZI, { ...r });
}
hl.className = $v;
hl.selector = XI;
hl.displayName = "Portal";
function ho() {
  const e = v.useContext(
    sa
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var Av = v.createContext({});
Av.displayName = "ColorModeContext";
function ka() {
  const e = v.useContext(Av);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function Oy(e, t) {
  const { colorMode: n } = ka();
  return n === "dark" ? t : e;
}
var ru = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function eR(e = {}) {
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
var tR = "chakra-ui-color-mode";
function nR(e) {
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
var rR = nR(tR), My = () => {
};
function Iy(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function mC(e) {
  const {
    value: t,
    children: n,
    options: {
      useSystemColorMode: r,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = rR
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = v.useState(
    () => Iy(a, s)
  ), [c, d] = v.useState(
    () => Iy(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: y, addListener: g } = v.useMemo(
    () => eR({ preventTransition: i }),
    [i]
  ), S = o === "system" && !l ? c : l, m = v.useCallback(
    (x) => {
      const k = x === "system" ? f() : x;
      u(k), p(k === "dark"), y(k), a.set(k);
    },
    [a, f, p, y]
  );
  la(() => {
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
  const h = v.useCallback(() => {
    m(S === "dark" ? "light" : "dark");
  }, [S, m]);
  v.useEffect(() => {
    if (r)
      return g(m);
  }, [r, g, m]);
  const b = v.useMemo(
    () => ({
      colorMode: t ?? S,
      toggleColorMode: t ? My : h,
      setColorMode: t ? My : m,
      forced: t !== void 0
    }),
    [S, h, m, t]
  );
  return /* @__PURE__ */ w.jsx(Av.Provider, { value: b, children: n });
}
mC.displayName = "ColorModeProvider";
var oR = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function iR(e) {
  let t = e;
  return oR.has(t) || (t = "light"), t;
}
function aR(e = {}) {
  const {
    initialColorMode: t = "light",
    type: n = "localStorage",
    storageKey: r = "chakra-ui-color-mode"
  } = e, o = iR(t), i = n === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function sR(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ w.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: aR(e) }
    }
  );
}
function lR() {
  const e = ka(), t = ho();
  return { ...e, theme: t };
}
var ae = (...e) => e.filter(Boolean).join(" ");
function uR() {
  return !1;
}
function zt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var ml = (e) => {
  const { condition: t, message: n } = e;
  t && uR() && console.warn(n);
};
function Xn(e, ...t) {
  return cR(e) ? e(...t) : e;
}
var cR = (e) => typeof e == "function", dn = (e) => e ? "" : void 0, Hf = (e) => e ? !0 : void 0;
function Le(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function vC(...e) {
  return function(n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var Oc = { exports: {} };
Oc.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", y = "[object GeneratorFunction]", g = "[object Map]", S = "[object Number]", m = "[object Null]", h = "[object Object]", b = "[object Proxy]", x = "[object RegExp]", k = "[object Set]", P = "[object String]", T = "[object Undefined]", E = "[object WeakMap]", M = "[object ArrayBuffer]", I = "[object DataView]", D = "[object Float32Array]", G = "[object Float64Array]", H = "[object Int8Array]", L = "[object Int16Array]", W = "[object Int32Array]", K = "[object Uint8Array]", $ = "[object Uint8ClampedArray]", A = "[object Uint16Array]", z = "[object Uint32Array]", U = /[\\^$.*+?()[\]{}|]/g, V = /^\[object .+?Constructor\]$/, Y = /^(?:0|[1-9]\d*)$/, j = {};
  j[D] = j[G] = j[H] = j[L] = j[W] = j[K] = j[$] = j[A] = j[z] = !0, j[s] = j[l] = j[M] = j[c] = j[I] = j[d] = j[f] = j[p] = j[g] = j[S] = j[h] = j[x] = j[k] = j[P] = j[E] = !1;
  var te = typeof Hr == "object" && Hr && Hr.Object === Object && Hr, le = typeof self == "object" && self && self.Object === Object && self, ie = te || le || Function("return this")(), se = t && !t.nodeType && t, me = se && !0 && e && !e.nodeType && e, ke = me && me.exports === se, et = ke && te.process, qe = function() {
    try {
      var C = me && me.require && me.require("util").types;
      return C || et && et.binding && et.binding("util");
    } catch {
    }
  }(), on = qe && qe.isTypedArray;
  function Pn(C, _, R) {
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
  function Mr(C, _) {
    for (var R = -1, N = Array(C); ++R < C; )
      N[R] = _(R);
    return N;
  }
  function fe(C) {
    return function(_) {
      return C(_);
    };
  }
  function mt(C, _) {
    return C == null ? void 0 : C[_];
  }
  function Ge(C, _) {
    return function(R) {
      return C(_(R));
    };
  }
  var Ut = Array.prototype, Ir = Function.prototype, vt = Object.prototype, Nn = ie["__core-js_shared__"], Rr = Ir.toString, an = vt.hasOwnProperty, oi = function() {
    var C = /[^.]+$/.exec(Nn && Nn.keys && Nn.keys.IE_PROTO || "");
    return C ? "Symbol(src)_1." + C : "";
  }(), Ta = vt.toString, Il = Rr.call(Object), Rl = RegExp(
    "^" + Rr.call(an).replace(U, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), go = ke ? ie.Buffer : void 0, Gg = ie.Symbol, Kg = ie.Uint8Array, Yg = go ? go.allocUnsafe : void 0, qg = Ge(Object.getPrototypeOf, Object), Xg = Object.create, QT = vt.propertyIsEnumerable, ZT = Ut.splice, yo = Gg ? Gg.toStringTag : void 0, $l = function() {
    try {
      var C = sf(Object, "defineProperty");
      return C({}, "", {}), C;
    } catch {
    }
  }(), JT = go ? go.isBuffer : void 0, Qg = Math.max, eE = Date.now, Zg = sf(ie, "Map"), Ea = sf(Object, "create"), tE = /* @__PURE__ */ function() {
    function C() {
    }
    return function(_) {
      if (!So(_))
        return {};
      if (Xg)
        return Xg(_);
      C.prototype = _;
      var R = new C();
      return C.prototype = void 0, R;
    };
  }();
  function bo(C) {
    var _ = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++_ < R; ) {
      var N = C[_];
      this.set(N[0], N[1]);
    }
  }
  function nE() {
    this.__data__ = Ea ? Ea(null) : {}, this.size = 0;
  }
  function rE(C) {
    var _ = this.has(C) && delete this.__data__[C];
    return this.size -= _ ? 1 : 0, _;
  }
  function oE(C) {
    var _ = this.__data__;
    if (Ea) {
      var R = _[C];
      return R === r ? void 0 : R;
    }
    return an.call(_, C) ? _[C] : void 0;
  }
  function iE(C) {
    var _ = this.__data__;
    return Ea ? _[C] !== void 0 : an.call(_, C);
  }
  function aE(C, _) {
    var R = this.__data__;
    return this.size += this.has(C) ? 0 : 1, R[C] = Ea && _ === void 0 ? r : _, this;
  }
  bo.prototype.clear = nE, bo.prototype.delete = rE, bo.prototype.get = oE, bo.prototype.has = iE, bo.prototype.set = aE;
  function ar(C) {
    var _ = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++_ < R; ) {
      var N = C[_];
      this.set(N[0], N[1]);
    }
  }
  function sE() {
    this.__data__ = [], this.size = 0;
  }
  function lE(C) {
    var _ = this.__data__, R = Al(_, C);
    if (R < 0)
      return !1;
    var N = _.length - 1;
    return R == N ? _.pop() : ZT.call(_, R, 1), --this.size, !0;
  }
  function uE(C) {
    var _ = this.__data__, R = Al(_, C);
    return R < 0 ? void 0 : _[R][1];
  }
  function cE(C) {
    return Al(this.__data__, C) > -1;
  }
  function dE(C, _) {
    var R = this.__data__, N = Al(R, C);
    return N < 0 ? (++this.size, R.push([C, _])) : R[N][1] = _, this;
  }
  ar.prototype.clear = sE, ar.prototype.delete = lE, ar.prototype.get = uE, ar.prototype.has = cE, ar.prototype.set = dE;
  function ii(C) {
    var _ = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++_ < R; ) {
      var N = C[_];
      this.set(N[0], N[1]);
    }
  }
  function fE() {
    this.size = 0, this.__data__ = {
      hash: new bo(),
      map: new (Zg || ar)(),
      string: new bo()
    };
  }
  function pE(C) {
    var _ = Fl(this, C).delete(C);
    return this.size -= _ ? 1 : 0, _;
  }
  function hE(C) {
    return Fl(this, C).get(C);
  }
  function mE(C) {
    return Fl(this, C).has(C);
  }
  function vE(C, _) {
    var R = Fl(this, C), N = R.size;
    return R.set(C, _), this.size += R.size == N ? 0 : 1, this;
  }
  ii.prototype.clear = fE, ii.prototype.delete = pE, ii.prototype.get = hE, ii.prototype.has = mE, ii.prototype.set = vE;
  function ai(C) {
    var _ = this.__data__ = new ar(C);
    this.size = _.size;
  }
  function gE() {
    this.__data__ = new ar(), this.size = 0;
  }
  function yE(C) {
    var _ = this.__data__, R = _.delete(C);
    return this.size = _.size, R;
  }
  function bE(C) {
    return this.__data__.get(C);
  }
  function SE(C) {
    return this.__data__.has(C);
  }
  function xE(C, _) {
    var R = this.__data__;
    if (R instanceof ar) {
      var N = R.__data__;
      if (!Zg || N.length < n - 1)
        return N.push([C, _]), this.size = ++R.size, this;
      R = this.__data__ = new ii(N);
    }
    return R.set(C, _), this.size = R.size, this;
  }
  ai.prototype.clear = gE, ai.prototype.delete = yE, ai.prototype.get = bE, ai.prototype.has = SE, ai.prototype.set = xE;
  function wE(C, _) {
    var R = cf(C), N = !R && uf(C), pe = !R && !N && r0(C), Pe = !R && !N && !pe && i0(C), $e = R || N || pe || Pe, ce = $e ? Mr(C.length, String) : [], Ae = ce.length;
    for (var sn in C)
      (_ || an.call(C, sn)) && !($e && // Safari 9 has enumerable `arguments.length` in strict mode.
      (sn == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      pe && (sn == "offset" || sn == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Pe && (sn == "buffer" || sn == "byteLength" || sn == "byteOffset") || // Skip index properties.
      t0(sn, Ae))) && ce.push(sn);
    return ce;
  }
  function of(C, _, R) {
    (R !== void 0 && !Ll(C[_], R) || R === void 0 && !(_ in C)) && af(C, _, R);
  }
  function CE(C, _, R) {
    var N = C[_];
    (!(an.call(C, _) && Ll(N, R)) || R === void 0 && !(_ in C)) && af(C, _, R);
  }
  function Al(C, _) {
    for (var R = C.length; R--; )
      if (Ll(C[R][0], _))
        return R;
    return -1;
  }
  function af(C, _, R) {
    _ == "__proto__" && $l ? $l(C, _, {
      configurable: !0,
      enumerable: !0,
      value: R,
      writable: !0
    }) : C[_] = R;
  }
  var kE = LE();
  function Dl(C) {
    return C == null ? C === void 0 ? T : m : yo && yo in Object(C) ? zE(C) : HE(C);
  }
  function Jg(C) {
    return _a(C) && Dl(C) == s;
  }
  function PE(C) {
    if (!So(C) || BE(C))
      return !1;
    var _ = ff(C) ? Rl : V;
    return _.test(YE(C));
  }
  function TE(C) {
    return _a(C) && o0(C.length) && !!j[Dl(C)];
  }
  function EE(C) {
    if (!So(C))
      return WE(C);
    var _ = n0(C), R = [];
    for (var N in C)
      N == "constructor" && (_ || !an.call(C, N)) || R.push(N);
    return R;
  }
  function e0(C, _, R, N, pe) {
    C !== _ && kE(_, function(Pe, $e) {
      if (pe || (pe = new ai()), So(Pe))
        _E(C, _, $e, R, e0, N, pe);
      else {
        var ce = N ? N(lf(C, $e), Pe, $e + "", C, _, pe) : void 0;
        ce === void 0 && (ce = Pe), of(C, $e, ce);
      }
    }, a0);
  }
  function _E(C, _, R, N, pe, Pe, $e) {
    var ce = lf(C, R), Ae = lf(_, R), sn = $e.get(Ae);
    if (sn) {
      of(C, R, sn);
      return;
    }
    var Gt = Pe ? Pe(ce, Ae, R + "", C, _, $e) : void 0, Oa = Gt === void 0;
    if (Oa) {
      var pf = cf(Ae), hf = !pf && r0(Ae), l0 = !pf && !hf && i0(Ae);
      Gt = Ae, pf || hf || l0 ? cf(ce) ? Gt = ce : qE(ce) ? Gt = AE(ce) : hf ? (Oa = !1, Gt = IE(Ae, !0)) : l0 ? (Oa = !1, Gt = $E(Ae, !0)) : Gt = [] : XE(Ae) || uf(Ae) ? (Gt = ce, uf(ce) ? Gt = QE(ce) : (!So(ce) || ff(ce)) && (Gt = jE(Ae))) : Oa = !1;
    }
    Oa && ($e.set(Ae, Gt), pe(Gt, Ae, N, Pe, $e), $e.delete(Ae)), of(C, R, Gt);
  }
  function OE(C, _) {
    return GE(UE(C, _, s0), C + "");
  }
  var ME = $l ? function(C, _) {
    return $l(C, "toString", {
      configurable: !0,
      enumerable: !1,
      value: JE(_),
      writable: !0
    });
  } : s0;
  function IE(C, _) {
    if (_)
      return C.slice();
    var R = C.length, N = Yg ? Yg(R) : new C.constructor(R);
    return C.copy(N), N;
  }
  function RE(C) {
    var _ = new C.constructor(C.byteLength);
    return new Kg(_).set(new Kg(C)), _;
  }
  function $E(C, _) {
    var R = _ ? RE(C.buffer) : C.buffer;
    return new C.constructor(R, C.byteOffset, C.length);
  }
  function AE(C, _) {
    var R = -1, N = C.length;
    for (_ || (_ = Array(N)); ++R < N; )
      _[R] = C[R];
    return _;
  }
  function DE(C, _, R, N) {
    var pe = !R;
    R || (R = {});
    for (var Pe = -1, $e = _.length; ++Pe < $e; ) {
      var ce = _[Pe], Ae = N ? N(R[ce], C[ce], ce, R, C) : void 0;
      Ae === void 0 && (Ae = C[ce]), pe ? af(R, ce, Ae) : CE(R, ce, Ae);
    }
    return R;
  }
  function FE(C) {
    return OE(function(_, R) {
      var N = -1, pe = R.length, Pe = pe > 1 ? R[pe - 1] : void 0, $e = pe > 2 ? R[2] : void 0;
      for (Pe = C.length > 3 && typeof Pe == "function" ? (pe--, Pe) : void 0, $e && NE(R[0], R[1], $e) && (Pe = pe < 3 ? void 0 : Pe, pe = 1), _ = Object(_); ++N < pe; ) {
        var ce = R[N];
        ce && C(_, ce, N, Pe);
      }
      return _;
    });
  }
  function LE(C) {
    return function(_, R, N) {
      for (var pe = -1, Pe = Object(_), $e = N(_), ce = $e.length; ce--; ) {
        var Ae = $e[C ? ce : ++pe];
        if (R(Pe[Ae], Ae, Pe) === !1)
          break;
      }
      return _;
    };
  }
  function Fl(C, _) {
    var R = C.__data__;
    return VE(_) ? R[typeof _ == "string" ? "string" : "hash"] : R.map;
  }
  function sf(C, _) {
    var R = mt(C, _);
    return PE(R) ? R : void 0;
  }
  function zE(C) {
    var _ = an.call(C, yo), R = C[yo];
    try {
      C[yo] = void 0;
      var N = !0;
    } catch {
    }
    var pe = Ta.call(C);
    return N && (_ ? C[yo] = R : delete C[yo]), pe;
  }
  function jE(C) {
    return typeof C.constructor == "function" && !n0(C) ? tE(qg(C)) : {};
  }
  function t0(C, _) {
    var R = typeof C;
    return _ = _ ?? a, !!_ && (R == "number" || R != "symbol" && Y.test(C)) && C > -1 && C % 1 == 0 && C < _;
  }
  function NE(C, _, R) {
    if (!So(R))
      return !1;
    var N = typeof _;
    return (N == "number" ? df(R) && t0(_, R.length) : N == "string" && _ in R) ? Ll(R[_], C) : !1;
  }
  function VE(C) {
    var _ = typeof C;
    return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? C !== "__proto__" : C === null;
  }
  function BE(C) {
    return !!oi && oi in C;
  }
  function n0(C) {
    var _ = C && C.constructor, R = typeof _ == "function" && _.prototype || vt;
    return C === R;
  }
  function WE(C) {
    var _ = [];
    if (C != null)
      for (var R in Object(C))
        _.push(R);
    return _;
  }
  function HE(C) {
    return Ta.call(C);
  }
  function UE(C, _, R) {
    return _ = Qg(_ === void 0 ? C.length - 1 : _, 0), function() {
      for (var N = arguments, pe = -1, Pe = Qg(N.length - _, 0), $e = Array(Pe); ++pe < Pe; )
        $e[pe] = N[_ + pe];
      pe = -1;
      for (var ce = Array(_ + 1); ++pe < _; )
        ce[pe] = N[pe];
      return ce[_] = R($e), Pn(C, this, ce);
    };
  }
  function lf(C, _) {
    if (!(_ === "constructor" && typeof C[_] == "function") && _ != "__proto__")
      return C[_];
  }
  var GE = KE(ME);
  function KE(C) {
    var _ = 0, R = 0;
    return function() {
      var N = eE(), pe = i - (N - R);
      if (R = N, pe > 0) {
        if (++_ >= o)
          return arguments[0];
      } else
        _ = 0;
      return C.apply(void 0, arguments);
    };
  }
  function YE(C) {
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
  function Ll(C, _) {
    return C === _ || C !== C && _ !== _;
  }
  var uf = Jg(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Jg : function(C) {
    return _a(C) && an.call(C, "callee") && !QT.call(C, "callee");
  }, cf = Array.isArray;
  function df(C) {
    return C != null && o0(C.length) && !ff(C);
  }
  function qE(C) {
    return _a(C) && df(C);
  }
  var r0 = JT || e_;
  function ff(C) {
    if (!So(C))
      return !1;
    var _ = Dl(C);
    return _ == p || _ == y || _ == u || _ == b;
  }
  function o0(C) {
    return typeof C == "number" && C > -1 && C % 1 == 0 && C <= a;
  }
  function So(C) {
    var _ = typeof C;
    return C != null && (_ == "object" || _ == "function");
  }
  function _a(C) {
    return C != null && typeof C == "object";
  }
  function XE(C) {
    if (!_a(C) || Dl(C) != h)
      return !1;
    var _ = qg(C);
    if (_ === null)
      return !0;
    var R = an.call(_, "constructor") && _.constructor;
    return typeof R == "function" && R instanceof R && Rr.call(R) == Il;
  }
  var i0 = on ? fe(on) : TE;
  function QE(C) {
    return DE(C, a0(C));
  }
  function a0(C) {
    return df(C) ? wE(C, !0) : EE(C);
  }
  var ZE = FE(function(C, _, R, N) {
    e0(C, _, R, N);
  });
  function JE(C) {
    return function() {
      return C;
    };
  }
  function s0(C) {
    return C;
  }
  function e_() {
    return !1;
  }
  e.exports = ZE;
})(Oc, Oc.exports);
var dR = Oc.exports;
const mn = /* @__PURE__ */ sl(dR);
var fR = (e) => /!(important)?$/.test(e), Ry = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, pR = (e, t) => (n) => {
  const r = String(t), o = fR(r), i = Ry(r), a = e ? `${e}.${i}` : i;
  let s = zt(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
  return s = Ry(s), o ? `${s} !important` : s;
};
function Dv(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = pR(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var ou = (...e) => (t) => e.reduce((n, r) => r(n), t);
function ln(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return r.transform = Dv({
      scale: e,
      transform: t
    }), r;
  };
}
var hR = ({ rtl: e, ltr: t }) => (n) => n.direction === "rtl" ? e : t;
function mR(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: hR(t),
    transform: n ? Dv({
      scale: n,
      compose: r
    }) : r
  };
}
var gC = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function vR() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...gC
  ].join(" ");
}
function gR() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...gC
  ].join(" ");
}
var yR = {
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
}, bR = {
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
function SR(e) {
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
var xR = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Dh = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, wR = new Set(Object.values(Dh)), Fh = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), CR = (e) => e.trim();
function kR(e, t) {
  if (e == null || Fh.has(e))
    return e;
  if (!(Lh(e) || Fh.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(CR).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in Dh ? Dh[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (wR.has(f))
      return f;
    const p = f.indexOf(" "), [y, g] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], S = Lh(g) ? g : g && g.split(" "), m = `colors.${y}`, h = m in t.__cssMap ? t.__cssMap[m].varRef : y;
    return S ? [
      h,
      ...Array.isArray(S) ? S : [S]
    ].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var Lh = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), PR = (e, t) => kR(e, t ?? {});
function TR(e) {
  return /^var\(--.+\)$/.test(e);
}
var ER = (e) => {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}, Bn = (e) => (t) => `${e}(${t})`, de = {
  filter(e) {
    return e !== "auto" ? e : yR;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : bR;
  },
  ring(e) {
    return SR(de.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? vR() : e === "auto-gpu" ? gR() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = ER(e);
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
    if (TR(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: PR,
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
    return e == null || Lh(e) || Fh.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: n, divide: r } = (t = xR[e]) != null ? t : {}, o = { flexDirection: e };
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
        transform: Dv({ scale: t, transform: n })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: ln("sizes", ou(de.vh, de.px)),
  sizesT: ln("sizes", ou(de.vh, de.fraction)),
  shadows: ln("shadows"),
  logical: mR,
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
var _R = {
  color: O.colors("color"),
  textColor: O.colors("color"),
  fill: O.colors("fill"),
  stroke: O.colors("stroke")
}, zh = {
  boxShadow: O.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: O.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: O.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(zh, {
  shadow: zh.boxShadow
});
var OR = {
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
}, Mc = {
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
Object.assign(Mc, {
  flexDir: Mc.flexDirection
});
var yC = {
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
}, MR = {
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
var IR = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: O.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: O.prop("listStyleImage")
};
function RR(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var $R = (e) => {
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
}, AR = $R(RR), DR = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, FR = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Uf = (e, t, n) => {
  const r = {}, o = AR(e, t, {});
  for (const i in o)
    i in n && n[i] != null || (r[i] = o[i]);
  return r;
}, LR = {
  srOnly: {
    transform(e) {
      return e === !0 ? DR : e === "focusable" ? FR : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, n) => Uf(t, `layerStyles.${e}`, n)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, n) => Uf(t, `textStyles.${e}`, n)
  },
  apply: {
    processResult: !0,
    transform: (e, t, n) => Uf(t, e, n)
  }
}, hs = {
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
Object.assign(hs, {
  insetStart: hs.insetInlineStart,
  insetEnd: hs.insetInlineEnd
});
var zR = {
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
var jR = {
  textDecorationColor: O.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: O.shadows("textShadow")
}, NR = {
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
}, VR = {
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
}, BR = {
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
}, WR = {
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
function bC(e) {
  return zt(e) && e.reference ? e.reference : String(e);
}
var Ld = (e, ...t) => t.map(bC).join(` ${e} `).replace(/calc/g, ""), $y = (...e) => `calc(${Ld("+", ...e)})`, Ay = (...e) => `calc(${Ld("-", ...e)})`, jh = (...e) => `calc(${Ld("*", ...e)})`, Dy = (...e) => `calc(${Ld("/", ...e)})`, Fy = (e) => {
  const t = bC(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : jh(t, -1);
}, _o = Object.assign(
  (e) => ({
    add: (...t) => _o($y(e, ...t)),
    subtract: (...t) => _o(Ay(e, ...t)),
    multiply: (...t) => _o(jh(e, ...t)),
    divide: (...t) => _o(Dy(e, ...t)),
    negate: () => _o(Fy(e)),
    toString: () => e.toString()
  }),
  {
    add: $y,
    subtract: Ay,
    multiply: jh,
    divide: Dy,
    negate: Fy
  }
);
function HR(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function UR(e) {
  const t = HR(e.toString());
  return KR(GR(t));
}
function GR(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function KR(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function YR(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function qR(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function XR(e, t = "") {
  return UR(`--${YR(e, t)}`);
}
function J(e, t, n) {
  const r = XR(e, n);
  return {
    variable: r,
    reference: qR(r, t)
  };
}
function QR(e, t) {
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
function ZR(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function JR(e) {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Nh(e) {
  if (e == null)
    return e;
  const { unitless: t } = JR(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var SC = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Fv = (e) => Object.fromEntries(Object.entries(e).sort(SC));
function Ly(e) {
  const t = Fv(e);
  return Object.assign(Object.values(t), t);
}
function e$(e) {
  const t = Object.keys(Fv(e));
  return new Set(t);
}
function zy(e) {
  var t;
  if (!e)
    return e;
  e = (t = Nh(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == "number" ? `${e + n}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function Qa(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${Nh(e)})`), t && n.push("and", `(max-width: ${Nh(t)})`), n.join(" ");
}
function t$(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = Ly(e), r = Object.entries(e).sort(SC).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? zy(d) : void 0, {
      _minW: zy(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: Qa(null, d),
      minWQuery: Qa(s),
      minMaxQuery: Qa(s, d)
    };
  }), o = e$(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Fv(e),
    asArray: Ly(e),
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
      for (; ZR(s) === null; )
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
}, Ar = (e) => xC((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), sr = (e) => xC((t) => e(t, "~ &"), "[data-peer]", ".peer"), xC = (e, ...t) => t.map(e).join(", "), zd = {
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
}, wC = Object.keys(
  zd
);
function jy(e, t) {
  return J(String(e).replace(/\./g, "-"), void 0, t);
}
function n$(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = jy(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...y] = f, g = `${p}.-${y.join(".")}`, S = _o.negate(s), m = _o.negate(u);
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
      const y = [String(o).split(".")[0], f].join(".");
      if (!e[y])
        return f;
      const { reference: S } = jy(y, t == null ? void 0 : t.cssVarPrefix);
      return S;
    }, d = zt(s) ? s : { default: s };
    n = mn(
      n,
      Object.entries(d).reduce(
        (f, [p, y]) => {
          var g, S;
          if (!y)
            return f;
          const m = c(`${y}`);
          if (p === "default")
            return f[l] = m, f;
          const h = (S = (g = zd) == null ? void 0 : g[p]) != null ? S : p;
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
function r$(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t)
    r in n && delete n[r];
  return n;
}
function o$(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function i$(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Ny(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(a, s = []) {
    var l;
    if (i$(a) || Array.isArray(a)) {
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
var a$ = [
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
function s$(e) {
  return o$(e, a$);
}
function l$(e) {
  return e.semanticTokens;
}
function u$(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var c$ = (e) => wC.includes(e) || e === "default";
function d$({
  tokens: e,
  semanticTokens: t
}) {
  const n = {};
  return Ny(e, (r, o) => {
    r != null && (n[o.join(".")] = { isSemantic: !1, value: r });
  }), Ny(
    t,
    (r, o) => {
      r != null && (n[o.join(".")] = { isSemantic: !0, value: r });
    },
    {
      stop: (r) => Object.keys(r).every(c$)
    }
  ), n;
}
function f$(e) {
  var t;
  const n = u$(e), r = s$(n), o = l$(n), i = d$({ tokens: r, semanticTokens: o }), a = (t = n.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = n$(i, { cssVarPrefix: a });
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
    __breakpoints: t$(n.breakpoints)
  }), n;
}
var Lv = mn(
  {},
  Nu,
  ve,
  _R,
  Mc,
  cn,
  OR,
  zR,
  MR,
  yC,
  LR,
  hs,
  zh,
  Ie,
  WR,
  BR,
  jR,
  NR,
  IR,
  VR
);
Object.assign({}, Ie, cn, Mc, yC, hs);
var p$ = [...Object.keys(Lv), ...wC], h$ = { ...Lv, ...zd }, m$ = (e) => e in h$, v$ = (e) => (t) => {
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
function g$(e) {
  const t = [];
  let n = "", r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (r = !0, n += i) : i === ")" ? (r = !1, n += i) : i === "," && !r ? (t.push(n), n = "") : n += i;
  }
  return n = n.trim(), n && t.push(n), t;
}
function y$(e) {
  return /^var\(--.+\)$/.test(e);
}
var b$ = (e, t) => e.startsWith("--") && typeof t == "string" && !y$(t), S$ = (e, t) => {
  var n, r;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = g$(t);
  return t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t), t;
};
function x$(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = Xn(i, r), d = v$(c)(r);
    let f = {};
    for (let p in d) {
      const y = d[p];
      let g = Xn(y, r);
      p in n && (p = n[p]), b$(p, g) && (g = S$(r, g));
      let S = t[p];
      if (S === !0 && (S = { property: p }), zt(g)) {
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
        h === "&" && zt(m) ? f = mn({}, f, m) : f[h] = m;
        continue;
      }
      if (zt(m)) {
        f = mn({}, f, m);
        continue;
      }
      f[p] = m;
    }
    return f;
  };
  return o;
}
var CC = (e) => (t) => x$({
  theme: t,
  pseudos: zd,
  configs: Lv
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
function w$(e, t) {
  if (Array.isArray(e))
    return e;
  if (zt(e))
    return t(e);
  if (e != null)
    return [e];
}
function C$(e, t) {
  for (let n = t + 1; n < e.length; n++)
    if (e[n] != null)
      return n;
  return -1;
}
function k$(e) {
  const t = e.__breakpoints;
  return function(r, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = w$(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!r.parts;
    for (let y = 0; y < d; y++) {
      const g = t.details[y], S = t.details[C$(c, y)], m = Qa(g.minW, S == null ? void 0 : S._minW), h = Xn((s = r[o]) == null ? void 0 : s[c[y]], a);
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
function P$(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t, a = k$(i);
    return mn(
      {},
      Xn((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", r, t)
    );
  };
}
function Cn(e) {
  return r$(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var T$ = [
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
function E$(e) {
  return zt(e) ? T$.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var _$ = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, O$ = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, M$ = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, I$ = {
  property: _$,
  easing: O$,
  duration: M$
}, R$ = I$, $$ = {
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
}, A$ = $$, D$ = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, F$ = D$, L$ = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, z$ = L$, j$ = {
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
}, N$ = j$, V$ = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, B$ = V$, W$ = {
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
}, H$ = W$, U$ = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, G$ = U$, K$ = {
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
}, kC = K$, PC = {
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
}, Y$ = {
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
}, q$ = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, X$ = {
  ...PC,
  ...Y$,
  container: q$
}, TC = X$, Q$ = {
  breakpoints: z$,
  zIndices: A$,
  radii: B$,
  blur: G$,
  colors: N$,
  ...kC,
  sizes: TC,
  shadows: H$,
  space: PC,
  borders: F$,
  transition: R$
}, { defineMultiStyleConfig: Z$, definePartsStyle: Za } = Oe([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), cr = J("stepper-indicator-size"), Ei = J("stepper-icon-size"), _i = J("stepper-title-font-size"), Ja = J("stepper-description-font-size"), ja = J("stepper-accent-color"), J$ = Za(({ colorScheme: e }) => ({
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
    [ja.variable]: `colors.${e}.500`,
    _dark: {
      [ja.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: _i.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Ja.reference,
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
    width: Ei.reference,
    height: Ei.reference
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
      borderColor: ja.reference
    },
    "&[data-status=complete]": {
      bg: ja.reference,
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
      bg: ja.reference
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
})), eA = Z$({
  baseStyle: J$,
  sizes: {
    xs: Za({
      stepper: {
        [cr.variable]: "sizes.4",
        [Ei.variable]: "sizes.3",
        [_i.variable]: "fontSizes.xs",
        [Ja.variable]: "fontSizes.xs"
      }
    }),
    sm: Za({
      stepper: {
        [cr.variable]: "sizes.6",
        [Ei.variable]: "sizes.4",
        [_i.variable]: "fontSizes.sm",
        [Ja.variable]: "fontSizes.xs"
      }
    }),
    md: Za({
      stepper: {
        [cr.variable]: "sizes.8",
        [Ei.variable]: "sizes.5",
        [_i.variable]: "fontSizes.md",
        [Ja.variable]: "fontSizes.sm"
      }
    }),
    lg: Za({
      stepper: {
        [cr.variable]: "sizes.10",
        [Ei.variable]: "sizes.6",
        [_i.variable]: "fontSizes.lg",
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
var tA = Se("accordion").parts("root", "container", "button", "panel").extend("icon"), nA = Se("alert").parts("title", "description", "container").extend("icon", "spinner"), rA = Se("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), oA = Se("breadcrumb").parts("link", "item", "container").extend("separator");
Se("button").parts();
var iA = Se("checkbox").parts("control", "icon", "container").extend("label");
Se("progress").parts("track", "filledTrack").extend("label");
var aA = Se("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), sA = Se("editable").parts(
  "preview",
  "input",
  "textarea"
), lA = Se("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), uA = Se("formError").parts("text", "icon"), cA = Se("input").parts(
  "addon",
  "field",
  "element",
  "group"
), dA = Se("list").parts("container", "item", "icon"), fA = Se("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), pA = Se("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), hA = Se("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Se("pininput").parts("field");
var mA = Se("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), vA = Se("progress").parts(
  "label",
  "filledTrack",
  "track"
), gA = Se("radio").parts(
  "container",
  "control",
  "label"
), yA = Se("select").parts("field", "icon"), bA = Se("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), SA = Se("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), xA = Se("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), wA = Se("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), CA = Se("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), kA = Se("tag").parts(
  "container",
  "label",
  "closeButton"
), PA = Se("card").parts(
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
function Ao(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class TA extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var es = TA;
function zv(e) {
  if (typeof e != "string")
    throw new es(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = AA.test(e) ? OA(e) : e;
  const n = MA.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(qs(s, 2), 16)), parseInt(qs(a[3] || "f", 2), 16) / 255];
  }
  const r = IA.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = RA.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = $A.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (Ao(0, 100, s) !== s)
      throw new es(e);
    if (Ao(0, 100, l) !== l)
      throw new es(e);
    return [...DA(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new es(e);
}
function EA(e) {
  let t = 5381, n = e.length;
  for (; n; )
    t = t * 33 ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const Vy = (e) => parseInt(e.replace(/_/g, ""), 36), _A = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const n = Vy(t.substring(0, 3)), r = Vy(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - r.length; i++)
    o += "0";
  return e[n] = `${o}${r}`, e;
}, {});
function OA(e) {
  const t = e.toLowerCase().trim(), n = _A[EA(t)];
  if (!n)
    throw new es(e);
  return `#${n}`;
}
const qs = (e, t) => Array.from(Array(t)).map(() => e).join(""), MA = new RegExp(`^#${qs("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), IA = new RegExp(`^#${qs("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), RA = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${qs(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), $A = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, AA = /^[a-z]+$/i, By = (e) => Math.round(e * 255), DA = (e, t, n) => {
  let r = n / 100;
  if (t === 0)
    return [r, r, r].map(By);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = r - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(By);
};
function FA(e, t, n, r) {
  return `rgba(${Ao(0, 255, e).toFixed()}, ${Ao(0, 255, t).toFixed()}, ${Ao(0, 255, n).toFixed()}, ${parseFloat(Ao(0, 1, r).toFixed(3))})`;
}
function LA(e, t) {
  const [n, r, o, i] = zv(e);
  return FA(n, r, o, i - t);
}
function zA(e) {
  const [t, n, r, o] = zv(e);
  let i = (a) => {
    const s = Ao(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function jA(e, t, n, r, o) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
var NA = (e) => Object.keys(e).length === 0, Tt = (e, t, n) => {
  const r = jA(e, `colors.${t}`, t);
  try {
    return zA(r), r;
  } catch {
    return n ?? "#000000";
  }
}, VA = (e) => {
  const [t, n, r] = zv(e);
  return (t * 299 + n * 587 + r * 114) / 1e3;
}, BA = (e) => (t) => {
  const n = Tt(t, e);
  return VA(n) < 128 ? "dark" : "light";
}, WA = (e) => (t) => BA(e)(t) === "dark", ua = (e, t) => (n) => {
  const r = Tt(n, e);
  return LA(r, 1 - t);
};
function Wy(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var HA = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function UA(e) {
  const t = HA();
  return !e || NA(e) ? t : e.string && e.colors ? KA(e.string, e.colors) : e.string && !e.colors ? GA(e.string) : e.colors && !e.string ? YA(e.colors) : t;
}
function GA(e) {
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
function KA(e, t) {
  let n = 0;
  if (e.length === 0)
    return t[0];
  for (let r = 0; r < e.length; r += 1)
    n = e.charCodeAt(r) + ((n << 5) - n), n = n & n;
  return n = (n % t.length + t.length) % t.length, t[n];
}
function YA(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function Q(e, t) {
  return (n) => n.colorMode === "dark" ? t : e;
}
function jv(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? t === "vertical" ? n : r : {};
}
function EC(e) {
  return zt(e) && e.reference ? e.reference : String(e);
}
var jd = (e, ...t) => t.map(EC).join(` ${e} `).replace(/calc/g, ""), Hy = (...e) => `calc(${jd("+", ...e)})`, Uy = (...e) => `calc(${jd("-", ...e)})`, Vh = (...e) => `calc(${jd("*", ...e)})`, Gy = (...e) => `calc(${jd("/", ...e)})`, Ky = (e) => {
  const t = EC(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Vh(t, -1);
}, dr = Object.assign(
  (e) => ({
    add: (...t) => dr(Hy(e, ...t)),
    subtract: (...t) => dr(Uy(e, ...t)),
    multiply: (...t) => dr(Vh(e, ...t)),
    divide: (...t) => dr(Gy(e, ...t)),
    negate: () => dr(Ky(e)),
    toString: () => e.toString()
  }),
  {
    add: Hy,
    subtract: Uy,
    multiply: Vh,
    divide: Gy,
    negate: Ky
  }
);
function qA(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function XA(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function _C(e) {
  const t = XA(e.toString());
  return t.includes("\\.") ? e : qA(e) ? t.replace(".", "\\.") : e;
}
function QA(e, t = "") {
  return [t, _C(e)].filter(Boolean).join("-");
}
function ZA(e, t) {
  return `var(${_C(e)}${t ? `, ${t}` : ""})`;
}
function JA(e, t = "") {
  return `--${QA(e, t)}`;
}
function rt(e, t) {
  const n = JA(e, t == null ? void 0 : t.prefix);
  return {
    variable: n,
    reference: ZA(n, e5(t == null ? void 0 : t.fallback))
  };
}
function e5(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: t5, definePartsStyle: Vu } = Oe(xA.keys), ms = rt("switch-track-width"), jo = rt("switch-track-height"), Gf = rt("switch-track-diff"), n5 = dr.subtract(ms, jo), Bh = rt("switch-thumb-x"), Na = rt("switch-bg"), r5 = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [ms.reference],
    height: [jo.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Na.variable]: "colors.gray.300",
    _dark: {
      [Na.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Na.variable]: `colors.${t}.500`,
      _dark: {
        [Na.variable]: `colors.${t}.200`
      }
    },
    bg: Na.reference
  };
}, o5 = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [jo.reference],
  height: [jo.reference],
  _checked: {
    transform: `translateX(${Bh.reference})`
  }
}, i5 = Vu((e) => ({
  container: {
    [Gf.variable]: n5,
    [Bh.variable]: Gf.reference,
    _rtl: {
      [Bh.variable]: dr(Gf).negate().toString()
    }
  },
  track: r5(e),
  thumb: o5
})), a5 = {
  sm: Vu({
    container: {
      [ms.variable]: "1.375rem",
      [jo.variable]: "sizes.3"
    }
  }),
  md: Vu({
    container: {
      [ms.variable]: "1.875rem",
      [jo.variable]: "sizes.4"
    }
  }),
  lg: Vu({
    container: {
      [ms.variable]: "2.875rem",
      [jo.variable]: "sizes.6"
    }
  })
}, s5 = t5({
  baseStyle: i5,
  sizes: a5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: l5, definePartsStyle: Gi } = Oe(wA.keys), u5 = Gi({
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
}), Ic = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, c5 = Gi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Ic
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Ic
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
}), d5 = Gi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Ic
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Ic
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
}), f5 = {
  simple: c5,
  striped: d5,
  unstyled: {}
}, p5 = {
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
}, h5 = l5({
  baseStyle: u5,
  variants: f5,
  sizes: p5,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Rt = J("tabs-color"), In = J("tabs-bg"), iu = J("tabs-border-color"), { defineMultiStyleConfig: m5, definePartsStyle: er } = Oe(CA.keys), v5 = (e) => {
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
  const { align: t = "start", orientation: n } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: n === "vertical" ? "column" : "row"
  };
}, b5 = {
  p: 4
}, S5 = er((e) => ({
  root: v5(e),
  tab: g5(e),
  tablist: y5(e),
  tabpanel: b5
})), x5 = {
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
}, w5 = er((e) => {
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
}), C5 = er((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [iu.variable]: "transparent",
      _selected: {
        [Rt.variable]: `colors.${t}.600`,
        [iu.variable]: "colors.white",
        _dark: {
          [Rt.variable]: `colors.${t}.300`,
          [iu.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: iu.reference
      },
      color: Rt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), k5 = er((e) => {
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
}), P5 = er((e) => {
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
}), T5 = er((e) => {
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
}), E5 = er({}), _5 = {
  line: w5,
  enclosed: C5,
  "enclosed-colored": k5,
  "soft-rounded": P5,
  "solid-rounded": T5,
  unstyled: E5
}, O5 = m5({
  baseStyle: S5,
  sizes: x5,
  variants: _5,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Ye = QR("badge", ["bg", "color", "shadow"]), M5 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, I5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = ua(`${t}.500`, 0.6)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.500`,
    [Ye.color.variable]: "colors.white",
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, R5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = ua(`${t}.200`, 0.16)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.100`,
    [Ye.color.variable]: `colors.${t}.800`,
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: `colors.${t}.200`
    }
  };
}, $5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = ua(`${t}.200`, 0.8)(n);
  return {
    [Ye.color.variable]: `colors.${t}.500`,
    _dark: {
      [Ye.color.variable]: r
    },
    [Ye.shadow.variable]: `inset 0 0 0px 1px ${Ye.color.reference}`
  };
}, A5 = {
  solid: I5,
  subtle: R5,
  outline: $5
}, vs = {
  baseStyle: M5,
  variants: A5,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: D5, definePartsStyle: No } = Oe(kA.keys), Yy = J("tag-bg"), qy = J("tag-color"), Kf = J("tag-shadow"), Bu = J("tag-min-height"), Wu = J("tag-min-width"), Hu = J("tag-font-size"), Uu = J("tag-padding-inline"), F5 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [qy.variable]: Ye.color.reference,
  [Yy.variable]: Ye.bg.reference,
  [Kf.variable]: Ye.shadow.reference,
  color: qy.reference,
  bg: Yy.reference,
  boxShadow: Kf.reference,
  borderRadius: "md",
  minH: Bu.reference,
  minW: Wu.reference,
  fontSize: Hu.reference,
  px: Uu.reference,
  _focusVisible: {
    [Kf.variable]: "shadows.outline"
  }
}, L5 = {
  lineHeight: 1.2,
  overflow: "visible"
}, z5 = {
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
}, j5 = No({
  container: F5,
  label: L5,
  closeButton: z5
}), N5 = {
  sm: No({
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
  md: No({
    container: {
      [Bu.variable]: "sizes.6",
      [Wu.variable]: "sizes.6",
      [Hu.variable]: "fontSizes.sm",
      [Uu.variable]: "space.2"
    }
  }),
  lg: No({
    container: {
      [Bu.variable]: "sizes.8",
      [Wu.variable]: "sizes.8",
      [Hu.variable]: "fontSizes.md",
      [Uu.variable]: "space.3"
    }
  })
}, V5 = {
  subtle: No((e) => {
    var t;
    return {
      container: (t = vs.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: No((e) => {
    var t;
    return {
      container: (t = vs.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: No((e) => {
    var t;
    return {
      container: (t = vs.variants) == null ? void 0 : t.outline(e)
    };
  })
}, B5 = D5({
  variants: V5,
  baseStyle: j5,
  sizes: N5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: hr, defineMultiStyleConfig: W5 } = Oe(cA.keys), Oi = J("input-height"), Mi = J("input-font-size"), Ii = J("input-padding"), Ri = J("input-border-radius"), H5 = hr({
  addon: {
    height: Oi.reference,
    fontSize: Mi.reference,
    px: Ii.reference,
    borderRadius: Ri.reference
  },
  field: {
    width: "100%",
    height: Oi.reference,
    fontSize: Mi.reference,
    px: Ii.reference,
    borderRadius: Ri.reference,
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
    [Mi.variable]: "fontSizes.lg",
    [Ii.variable]: "space.4",
    [Ri.variable]: "radii.md",
    [Oi.variable]: "sizes.12"
  },
  md: {
    [Mi.variable]: "fontSizes.md",
    [Ii.variable]: "space.4",
    [Ri.variable]: "radii.md",
    [Oi.variable]: "sizes.10"
  },
  sm: {
    [Mi.variable]: "fontSizes.sm",
    [Ii.variable]: "space.3",
    [Ri.variable]: "radii.sm",
    [Oi.variable]: "sizes.8"
  },
  xs: {
    [Mi.variable]: "fontSizes.xs",
    [Ii.variable]: "space.2",
    [Ri.variable]: "radii.sm",
    [Oi.variable]: "sizes.6"
  }
}, U5 = {
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
function Nv(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || Q("blue.500", "blue.300")(e),
    errorBorderColor: n || Q("red.500", "red.300")(e)
  };
}
var G5 = hr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Nv(e);
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
}), K5 = hr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Nv(e);
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
}), Y5 = hr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Nv(e);
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
}), q5 = hr({
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
}, be = W5({
  baseStyle: H5,
  sizes: U5,
  variants: X5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), Xy, Q5 = {
  ...(Xy = be.baseStyle) == null ? void 0 : Xy.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, Qy, Zy, Z5 = {
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
  unstyled: (Zy = (Qy = be.variants) == null ? void 0 : Qy.unstyled.field) != null ? Zy : {}
}, Jy, eb, tb, nb, rb, ob, ib, ab, J5 = {
  xs: (eb = (Jy = be.sizes) == null ? void 0 : Jy.xs.field) != null ? eb : {},
  sm: (nb = (tb = be.sizes) == null ? void 0 : tb.sm.field) != null ? nb : {},
  md: (ob = (rb = be.sizes) == null ? void 0 : rb.md.field) != null ? ob : {},
  lg: (ab = (ib = be.sizes) == null ? void 0 : ib.lg.field) != null ? ab : {}
}, eD = {
  baseStyle: Q5,
  sizes: J5,
  variants: Z5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, au = rt("tooltip-bg"), Yf = rt("tooltip-fg"), tD = rt("popper-arrow-bg"), nD = {
  bg: au.reference,
  color: Yf.reference,
  [au.variable]: "colors.gray.700",
  [Yf.variable]: "colors.whiteAlpha.900",
  _dark: {
    [au.variable]: "colors.gray.300",
    [Yf.variable]: "colors.gray.900"
  },
  [tD.variable]: au.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, rD = {
  baseStyle: nD
}, { defineMultiStyleConfig: oD, definePartsStyle: ts } = Oe(vA.keys), iD = (e) => {
  const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e, i = Q(
    Wy(),
    Wy("1rem", "rgba(0,0,0,0.1)")
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
}, aD = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, sD = (e) => ({
  bg: Q("gray.100", "whiteAlpha.300")(e)
}), lD = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...iD(e)
}), uD = ts((e) => ({
  label: aD,
  filledTrack: lD(e),
  track: sD(e)
})), cD = {
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
}, dD = oD({
  sizes: cD,
  baseStyle: uD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), fD = (e) => typeof e == "function";
function _t(e, ...t) {
  return fD(e) ? e(...t) : e;
}
var { definePartsStyle: Gu, defineMultiStyleConfig: pD } = Oe(iA.keys), gs = J("checkbox-size"), hD = (e) => {
  const { colorScheme: t } = e;
  return {
    w: gs.reference,
    h: gs.reference,
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
}, mD = {
  _disabled: { cursor: "not-allowed" }
}, vD = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, gD = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, yD = Gu((e) => ({
  icon: gD,
  container: mD,
  control: _t(hD, e),
  label: vD
})), bD = {
  sm: Gu({
    control: { [gs.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Gu({
    control: { [gs.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Gu({
    control: { [gs.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Rc = pD({
  baseStyle: yD,
  sizes: bD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: SD, definePartsStyle: Ku } = Oe(gA.keys), xD = (e) => {
  var t;
  const n = (t = _t(Rc.baseStyle, e)) == null ? void 0 : t.control;
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
}, wD = Ku((e) => {
  var t, n, r, o;
  return {
    label: (n = (t = Rc).baseStyle) == null ? void 0 : n.call(t, e).label,
    container: (o = (r = Rc).baseStyle) == null ? void 0 : o.call(r, e).container,
    control: xD(e)
  };
}), CD = {
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
}, kD = SD({
  baseStyle: wD,
  sizes: CD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: PD, definePartsStyle: TD } = Oe(yA.keys), su = J("select-bg"), sb, ED = {
  ...(sb = be.baseStyle) == null ? void 0 : sb.field,
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
}, _D = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, OD = TD({
  field: ED,
  icon: _D
}), lu = {
  paddingInlineEnd: "8"
}, lb, ub, cb, db, fb, pb, hb, mb, MD = {
  lg: {
    ...(lb = be.sizes) == null ? void 0 : lb.lg,
    field: {
      ...(ub = be.sizes) == null ? void 0 : ub.lg.field,
      ...lu
    }
  },
  md: {
    ...(cb = be.sizes) == null ? void 0 : cb.md,
    field: {
      ...(db = be.sizes) == null ? void 0 : db.md.field,
      ...lu
    }
  },
  sm: {
    ...(fb = be.sizes) == null ? void 0 : fb.sm,
    field: {
      ...(pb = be.sizes) == null ? void 0 : pb.sm.field,
      ...lu
    }
  },
  xs: {
    ...(hb = be.sizes) == null ? void 0 : hb.xs,
    field: {
      ...(mb = be.sizes) == null ? void 0 : mb.xs.field,
      ...lu
    },
    icon: {
      insetEnd: "1"
    }
  }
}, ID = PD({
  baseStyle: OD,
  sizes: MD,
  variants: be.variants,
  defaultProps: be.defaultProps
}), qf = J("skeleton-start-color"), Xf = J("skeleton-end-color"), RD = {
  [qf.variable]: "colors.gray.100",
  [Xf.variable]: "colors.gray.400",
  _dark: {
    [qf.variable]: "colors.gray.800",
    [Xf.variable]: "colors.gray.600"
  },
  background: qf.reference,
  borderColor: Xf.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, $D = {
  baseStyle: RD
}, Qf = J("skip-link-bg"), AD = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Qf.variable]: "colors.white",
    _dark: {
      [Qf.variable]: "colors.gray.700"
    },
    bg: Qf.reference
  }
}, DD = {
  baseStyle: AD
}, { defineMultiStyleConfig: FD, definePartsStyle: Nd } = Oe(bA.keys), Xs = J("slider-thumb-size"), Qs = J("slider-track-size"), Wr = J("slider-bg"), LD = (e) => {
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
    ...jv({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, zD = (e) => ({
  ...jv({
    orientation: e.orientation,
    horizontal: { h: Qs.reference },
    vertical: { w: Qs.reference }
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
}), jD = (e) => {
  const { orientation: t } = e;
  return {
    ...jv({
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
}, ND = (e) => {
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
}, VD = Nd((e) => ({
  container: LD(e),
  track: zD(e),
  thumb: jD(e),
  filledTrack: ND(e)
})), BD = Nd({
  container: {
    [Xs.variable]: "sizes.4",
    [Qs.variable]: "sizes.1"
  }
}), WD = Nd({
  container: {
    [Xs.variable]: "sizes.3.5",
    [Qs.variable]: "sizes.1"
  }
}), HD = Nd({
  container: {
    [Xs.variable]: "sizes.2.5",
    [Qs.variable]: "sizes.0.5"
  }
}), UD = {
  lg: BD,
  md: WD,
  sm: HD
}, GD = FD({
  baseStyle: VD,
  sizes: UD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Oo = rt("spinner-size"), KD = {
  width: [Oo.reference],
  height: [Oo.reference]
}, YD = {
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
}, qD = {
  baseStyle: KD,
  sizes: YD,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: XD, definePartsStyle: OC } = Oe(SA.keys), QD = {
  fontWeight: "medium"
}, ZD = {
  opacity: 0.8,
  marginBottom: "2"
}, JD = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, eF = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, tF = OC({
  container: {},
  label: QD,
  helpText: ZD,
  number: JD,
  icon: eF
}), nF = {
  md: OC({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, rF = XD({
  baseStyle: tF,
  sizes: nF,
  defaultProps: {
    size: "md"
  }
}), Zf = J("kbd-bg"), oF = {
  [Zf.variable]: "colors.gray.100",
  _dark: {
    [Zf.variable]: "colors.whiteAlpha.100"
  },
  bg: Zf.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, iF = {
  baseStyle: oF
}, aF = {
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
}, sF = {
  baseStyle: aF
}, { defineMultiStyleConfig: lF, definePartsStyle: uF } = Oe(dA.keys), cF = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, dF = uF({
  icon: cF
}), fF = lF({
  baseStyle: dF
}), { defineMultiStyleConfig: pF, definePartsStyle: hF } = Oe(fA.keys), Un = J("menu-bg"), Jf = J("menu-shadow"), mF = {
  [Un.variable]: "#fff",
  [Jf.variable]: "shadows.sm",
  _dark: {
    [Un.variable]: "colors.gray.700",
    [Jf.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Un.reference,
  boxShadow: Jf.reference
}, vF = {
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
}, gF = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, yF = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, bF = {
  opacity: 0.6
}, SF = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, xF = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, wF = hF({
  button: xF,
  list: mF,
  item: vF,
  groupTitle: gF,
  icon: yF,
  command: bF,
  divider: SF
}), CF = pF({
  baseStyle: wF
}), { defineMultiStyleConfig: kF, definePartsStyle: Wh } = Oe(pA.keys), ep = J("modal-bg"), tp = J("modal-shadow"), PF = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, TF = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: n === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, EF = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [ep.variable]: "colors.white",
    [tp.variable]: "shadows.lg",
    _dark: {
      [ep.variable]: "colors.gray.700",
      [tp.variable]: "shadows.dark-lg"
    },
    bg: ep.reference,
    boxShadow: tp.reference
  };
}, _F = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, OF = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, MF = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, IF = {
  px: "6",
  py: "4"
}, RF = Wh((e) => ({
  overlay: PF,
  dialogContainer: _t(TF, e),
  dialog: _t(EF, e),
  header: _F,
  closeButton: OF,
  body: _t(MF, e),
  footer: IF
}));
function En(e) {
  return Wh(e === "full" ? {
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
var $F = {
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
}, AF = kF({
  baseStyle: RF,
  sizes: $F,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: DF, definePartsStyle: MC } = Oe(hA.keys), Vv = rt("number-input-stepper-width"), IC = rt("number-input-input-padding"), FF = dr(Vv).add("0.5rem").toString(), np = rt("number-input-bg"), rp = rt("number-input-color"), op = rt("number-input-border-color"), LF = {
  [Vv.variable]: "sizes.6",
  [IC.variable]: FF
}, zF = (e) => {
  var t, n;
  return (n = (t = _t(be.baseStyle, e)) == null ? void 0 : t.field) != null ? n : {};
}, jF = {
  width: Vv.reference
}, NF = {
  borderStart: "1px solid",
  borderStartColor: op.reference,
  color: rp.reference,
  bg: np.reference,
  [rp.variable]: "colors.chakra-body-text",
  [op.variable]: "colors.chakra-border-color",
  _dark: {
    [rp.variable]: "colors.whiteAlpha.800",
    [op.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [np.variable]: "colors.gray.200",
    _dark: {
      [np.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, VF = MC((e) => {
  var t;
  return {
    root: LF,
    field: (t = _t(zF, e)) != null ? t : {},
    stepperGroup: jF,
    stepper: NF
  };
});
function uu(e) {
  var t, n, r;
  const o = (t = be.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md", s = kC.fontSizes[a];
  return MC({
    field: {
      ...o.field,
      paddingInlineEnd: IC.reference,
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
var BF = {
  xs: uu("xs"),
  sm: uu("sm"),
  md: uu("md"),
  lg: uu("lg")
}, WF = DF({
  baseStyle: VF,
  sizes: BF,
  variants: be.variants,
  defaultProps: be.defaultProps
}), vb, HF = {
  ...(vb = be.baseStyle) == null ? void 0 : vb.field,
  textAlign: "center"
}, UF = {
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
}, gb, yb, GF = {
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
  unstyled: (yb = (gb = be.variants) == null ? void 0 : gb.unstyled.field) != null ? yb : {}
}, KF = {
  baseStyle: HF,
  sizes: UF,
  variants: GF,
  defaultProps: be.defaultProps
}, { defineMultiStyleConfig: YF, definePartsStyle: qF } = Oe(mA.keys), cu = rt("popper-bg"), XF = rt("popper-arrow-bg"), bb = rt("popper-arrow-shadow-color"), QF = { zIndex: 10 }, ZF = {
  [cu.variable]: "colors.white",
  bg: cu.reference,
  [XF.variable]: cu.reference,
  [bb.variable]: "colors.gray.200",
  _dark: {
    [cu.variable]: "colors.gray.700",
    [bb.variable]: "colors.whiteAlpha.300"
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
}, JF = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, e4 = {
  px: 3,
  py: 2
}, t4 = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, n4 = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, r4 = qF({
  popper: QF,
  content: ZF,
  header: JF,
  body: e4,
  footer: t4,
  closeButton: n4
}), o4 = YF({
  baseStyle: r4
}), { definePartsStyle: Hh, defineMultiStyleConfig: i4 } = Oe(aA.keys), ip = J("drawer-bg"), ap = J("drawer-box-shadow");
function li(e) {
  return Hh(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var a4 = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, s4 = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, l4 = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [ip.variable]: "colors.white",
    [ap.variable]: "shadows.lg",
    _dark: {
      [ip.variable]: "colors.gray.700",
      [ap.variable]: "shadows.dark-lg"
    },
    bg: ip.reference,
    boxShadow: ap.reference
  };
}, u4 = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, c4 = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, d4 = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, f4 = {
  px: "6",
  py: "4"
}, p4 = Hh((e) => ({
  overlay: a4,
  dialogContainer: s4,
  dialog: _t(l4, e),
  header: u4,
  closeButton: c4,
  body: d4,
  footer: f4
})), h4 = {
  xs: li("xs"),
  sm: li("md"),
  md: li("lg"),
  lg: li("2xl"),
  xl: li("4xl"),
  full: li("full")
}, m4 = i4({
  baseStyle: p4,
  sizes: h4,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: v4, defineMultiStyleConfig: g4 } = Oe(sA.keys), y4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, b4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, S4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, x4 = v4({
  preview: y4,
  input: b4,
  textarea: S4
}), w4 = g4({
  baseStyle: x4
}), { definePartsStyle: C4, defineMultiStyleConfig: k4 } = Oe(lA.keys), Ki = J("form-control-color"), P4 = {
  marginStart: "1",
  [Ki.variable]: "colors.red.500",
  _dark: {
    [Ki.variable]: "colors.red.300"
  },
  color: Ki.reference
}, T4 = {
  mt: "2",
  [Ki.variable]: "colors.gray.600",
  _dark: {
    [Ki.variable]: "colors.whiteAlpha.600"
  },
  color: Ki.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, E4 = C4({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: P4,
  helperText: T4
}), _4 = k4({
  baseStyle: E4
}), { definePartsStyle: O4, defineMultiStyleConfig: M4 } = Oe(uA.keys), Yi = J("form-error-color"), I4 = {
  [Yi.variable]: "colors.red.500",
  _dark: {
    [Yi.variable]: "colors.red.300"
  },
  color: Yi.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, R4 = {
  marginEnd: "0.5em",
  [Yi.variable]: "colors.red.500",
  _dark: {
    [Yi.variable]: "colors.red.300"
  },
  color: Yi.reference
}, $4 = O4({
  text: I4,
  icon: R4
}), A4 = M4({
  baseStyle: $4
}), D4 = {
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
}, F4 = {
  baseStyle: D4
}, L4 = {
  fontFamily: "heading",
  fontWeight: "bold"
}, z4 = {
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
}, j4 = {
  baseStyle: L4,
  sizes: z4,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: N4, definePartsStyle: V4 } = Oe(oA.keys), sp = J("breadcrumb-link-decor"), B4 = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: sp.reference,
  [sp.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [sp.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, W4 = V4({
  link: B4
}), H4 = N4({
  baseStyle: W4
}), U4 = {
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
}, RC = (e) => {
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
}, G4 = (e) => {
  const { colorScheme: t } = e, n = Q("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? n : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ..._t(RC, e)
  };
}, K4 = {
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
}, Y4 = (e) => {
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
  } = (t = K4[n]) != null ? t : {}, s = Q(r, `${n}.200`)(e);
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
}, q4 = (e) => {
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
}, X4 = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, Q4 = {
  ghost: RC,
  outline: G4,
  solid: Y4,
  link: q4,
  unstyled: X4
}, Z4 = {
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
}, J4 = {
  baseStyle: U4,
  variants: Q4,
  sizes: Z4,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Vo, defineMultiStyleConfig: eL } = Oe(PA.keys), $c = J("card-bg"), gr = J("card-padding"), $C = J("card-shadow"), Yu = J("card-radius"), AC = J("card-border-width", "0"), DC = J("card-border-color"), tL = Vo({
  container: {
    [$c.variable]: "colors.chakra-body-bg",
    backgroundColor: $c.reference,
    boxShadow: $C.reference,
    borderRadius: Yu.reference,
    color: "chakra-body-text",
    borderWidth: AC.reference,
    borderColor: DC.reference
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
}), nL = {
  sm: Vo({
    container: {
      [Yu.variable]: "radii.base",
      [gr.variable]: "space.3"
    }
  }),
  md: Vo({
    container: {
      [Yu.variable]: "radii.md",
      [gr.variable]: "space.5"
    }
  }),
  lg: Vo({
    container: {
      [Yu.variable]: "radii.xl",
      [gr.variable]: "space.7"
    }
  })
}, rL = {
  elevated: Vo({
    container: {
      [$C.variable]: "shadows.base",
      _dark: {
        [$c.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Vo({
    container: {
      [AC.variable]: "1px",
      [DC.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Vo({
    container: {
      [$c.variable]: "colors.chakra-subtle-bg"
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
}, oL = eL({
  baseStyle: tL,
  variants: rL,
  sizes: nL,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), ys = rt("close-button-size"), Va = rt("close-button-bg"), iL = {
  w: [ys.reference],
  h: [ys.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Va.variable]: "colors.blackAlpha.100",
    _dark: {
      [Va.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Va.variable]: "colors.blackAlpha.200",
    _dark: {
      [Va.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Va.reference
}, aL = {
  lg: {
    [ys.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [ys.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [ys.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, sL = {
  baseStyle: iL,
  sizes: aL,
  defaultProps: {
    size: "md"
  }
}, { variants: lL, defaultProps: uL } = vs, cL = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, dL = {
  baseStyle: cL,
  variants: lL,
  defaultProps: uL
}, fL = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, pL = {
  baseStyle: fL
}, hL = {
  opacity: 0.6,
  borderColor: "inherit"
}, mL = {
  borderStyle: "solid"
}, vL = {
  borderStyle: "dashed"
}, gL = {
  solid: mL,
  dashed: vL
}, yL = {
  baseStyle: hL,
  variants: gL,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: bL, defineMultiStyleConfig: SL } = Oe(tA.keys), xL = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, wL = {
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
}, CL = {
  pt: "2",
  px: "4",
  pb: "5"
}, kL = {
  fontSize: "1.25em"
}, PL = bL({
  container: xL,
  button: wL,
  panel: CL,
  icon: kL
}), TL = SL({ baseStyle: PL }), { definePartsStyle: vl, defineMultiStyleConfig: EL } = Oe(nA.keys), Qt = J("alert-fg"), Pr = J("alert-bg"), _L = vl({
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
function Bv(e) {
  const { theme: t, colorScheme: n } = e, r = ua(`${n}.200`, 0.16)(t);
  return {
    light: `colors.${n}.100`,
    dark: r
  };
}
var OL = vl((e) => {
  const { colorScheme: t } = e, n = Bv(e);
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
}), ML = vl((e) => {
  const { colorScheme: t } = e, n = Bv(e);
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
}), IL = vl((e) => {
  const { colorScheme: t } = e, n = Bv(e);
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
}), RL = vl((e) => {
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
}), $L = {
  subtle: OL,
  "left-accent": ML,
  "top-accent": IL,
  solid: RL
}, AL = EL({
  baseStyle: _L,
  variants: $L,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: FC, defineMultiStyleConfig: DL } = Oe(rA.keys), qi = J("avatar-border-color"), bs = J("avatar-bg"), Zs = J("avatar-font-size"), ca = J("avatar-size"), FL = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: qi.reference,
  [qi.variable]: "white",
  _dark: {
    [qi.variable]: "colors.gray.800"
  }
}, LL = {
  bg: bs.reference,
  fontSize: Zs.reference,
  width: ca.reference,
  height: ca.reference,
  lineHeight: "1",
  [bs.variable]: "colors.gray.200",
  _dark: {
    [bs.variable]: "colors.whiteAlpha.400"
  }
}, zL = (e) => {
  const { name: t, theme: n } = e, r = t ? UA({ string: t }) : "colors.gray.400", o = WA(r)(n);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: bs.reference,
    fontSize: Zs.reference,
    color: i,
    borderColor: qi.reference,
    verticalAlign: "top",
    width: ca.reference,
    height: ca.reference,
    "&:not([data-loaded])": {
      [bs.variable]: r
    },
    [qi.variable]: "colors.white",
    _dark: {
      [qi.variable]: "colors.gray.800"
    }
  };
}, jL = {
  fontSize: Zs.reference,
  lineHeight: "1"
}, NL = FC((e) => ({
  badge: _t(FL, e),
  excessLabel: _t(LL, e),
  container: _t(zL, e),
  label: jL
}));
function Fr(e) {
  const t = e !== "100%" ? TC[e] : void 0;
  return FC({
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
var VL = {
  "2xs": Fr(4),
  xs: Fr(6),
  sm: Fr(8),
  md: Fr(12),
  lg: Fr(16),
  xl: Fr(24),
  "2xl": Fr(32),
  full: Fr("100%")
}, BL = DL({
  baseStyle: NL,
  sizes: VL,
  defaultProps: {
    size: "md"
  }
}), WL = {
  Accordion: TL,
  Alert: AL,
  Avatar: BL,
  Badge: vs,
  Breadcrumb: H4,
  Button: J4,
  Checkbox: Rc,
  CloseButton: sL,
  Code: dL,
  Container: pL,
  Divider: yL,
  Drawer: m4,
  Editable: w4,
  Form: _4,
  FormError: A4,
  FormLabel: F4,
  Heading: j4,
  Input: be,
  Kbd: iF,
  Link: sF,
  List: fF,
  Menu: CF,
  Modal: AF,
  NumberInput: WF,
  PinInput: KF,
  Popover: o4,
  Progress: dD,
  Radio: kD,
  Select: ID,
  Skeleton: $D,
  SkipLink: DD,
  Slider: GD,
  Spinner: qD,
  Stat: rF,
  Switch: s5,
  Table: h5,
  Tabs: O5,
  Tag: B5,
  Textarea: eD,
  Tooltip: rD,
  Card: oL,
  Stepper: eA
}, HL = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, UL = {
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
}, GL = "ltr", KL = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, LC = {
  semanticTokens: HL,
  direction: GL,
  ...Q$,
  components: WL,
  styles: UL,
  config: KL
};
function ns(e) {
  return typeof e == "function";
}
function YL(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
var qL = (e) => function(...n) {
  let r = [...n], o = n[n.length - 1];
  return E$(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  r.length > 1 ? r = r.slice(0, r.length - 1) : o = e, YL(
    ...r.map(
      (i) => (a) => ns(i) ? i(a) : QL(a, i)
    )
  )(o);
}, XL = qL(LC);
function QL(...e) {
  return mn({}, ...e, zC);
}
function zC(e, t, n, r) {
  if ((ns(e) || ns(t)) && Object.prototype.hasOwnProperty.call(r, n))
    return (...o) => {
      const i = ns(e) ? e(...o) : e, a = ns(t) ? t(...o) : t;
      return mn({}, i, a, zC);
    };
}
function ZL() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var JL = /* @__PURE__ */ ZL();
function e3(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    t.includes(r) || (n[r] = e[r]);
  }), n;
}
function t3(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var n3 = (e) => {
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
}, jC = n3(t3);
function NC(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const o = e[r];
    t(o, r, e) && (n[r] = o);
  }), n;
}
var VC = (e) => NC(e, (t) => t != null);
function r3(e) {
  return typeof e == "function";
}
function BC(e, ...t) {
  return r3(e) ? e(...t) : e;
}
function o3(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var i3 = typeof Element < "u", a3 = typeof Map == "function", s3 = typeof Set == "function", l3 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
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
    if (a3 && e instanceof Map && t instanceof Map) {
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
    if (s3 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (l3 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (i3 && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !qu(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var u3 = function(t, n) {
  try {
    return qu(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const c3 = /* @__PURE__ */ sl(u3);
function WC(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t, { theme: i, colorMode: a } = lR(), s = e ? jC(i, `components.${e}`) : void 0, l = r || s, u = mn(
    { theme: i, colorMode: a },
    (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
    VC(e3(o, ["children"]))
  ), c = v.useRef({});
  if (l) {
    const f = P$(l)(u);
    c3(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Jo(e, t = {}) {
  return WC(e, t);
}
function Ct(e, t = {}) {
  return WC(e, t);
}
var d3 = /* @__PURE__ */ new Set([
  ...p$,
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
]), f3 = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function p3(e) {
  return f3.has(e) || !d3.has(e);
}
function h3(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (o in n && delete n[o], n[o] = r[o]);
  return n;
}
function m3(e) {
  const t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
var v3 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, g3 = /* @__PURE__ */ Jw(
  function(e) {
    return v3.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), y3 = g3, b3 = function(t) {
  return t !== "theme";
}, Sb = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? y3 : b3;
}, xb = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, S3 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return _v(n, r, o), lC(function() {
    return Ov(n, r, o);
  }), null;
}, x3 = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = xb(t, n, r), l = s || Sb(o), u = !l("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var y = Iv(function(g, S, m) {
      var h = u && g.as || o, b = "", x = [], k = g;
      if (g.theme == null) {
        k = {};
        for (var P in g)
          k[P] = g[P];
        k.theme = v.useContext(sa);
      }
      typeof g.className == "string" ? b = iC(S.registered, x, g.className) : g.className != null && (b = g.className + " ");
      var T = Dd(d.concat(x), S.registered, k);
      b += S.key + "-" + T.name, a !== void 0 && (b += " " + a);
      var E = u && s === void 0 ? Sb(h) : l, M = {};
      for (var I in g)
        u && I === "as" || // $FlowFixMe
        E(I) && (M[I] = g[I]);
      return M.className = b, M.ref = m, /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(S3, {
        cache: S,
        serialized: T,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ v.createElement(h, M));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = d, y.__emotion_forwardProp = s, Object.defineProperty(y, "toString", {
      value: function() {
        return "." + a;
      }
    }), y.withComponent = function(g, S) {
      return e(g, q({}, n, S, {
        shouldForwardProp: xb(y, S, !0)
      })).apply(void 0, d);
    }, y;
  };
}, w3 = [
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
], Ac = x3.bind();
w3.forEach(function(e) {
  Ac[e] = Ac(e);
});
var wb, C3 = (wb = Ac.default) != null ? wb : Ac, k3 = ({ baseStyle: e }) => (t) => {
  const { theme: n, css: r, __css: o, sx: i, ...a } = t, s = NC(a, (d, f) => m$(f)), l = BC(e, t), u = h3(
    {},
    o,
    l,
    VC(s),
    i
  ), c = CC(u)(t.theme);
  return r ? [c, r] : c;
};
function lp(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = p3);
  const o = k3({ baseStyle: n }), i = C3(
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
function P3() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(lp, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, n, r) {
      return lp(...r);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, n) {
      return e.has(n) || e.set(n, lp(n)), e.get(n);
    }
  });
}
var X = P3();
function oe(e) {
  return v.forwardRef(e);
}
function T3(e = {}) {
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
function E3(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e, o = v.useMemo(() => f$(n), [n]);
  return /* @__PURE__ */ w.jsxs(jI, { theme: o, children: [
    /* @__PURE__ */ w.jsx(_3, { root: t }),
    r
  ] });
}
function _3({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ w.jsx(Fd, { styles: (n) => ({ [t]: n.__cssVars }) });
}
T3({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function O3() {
  const { colorMode: e } = ka();
  return /* @__PURE__ */ w.jsx(
    Fd,
    {
      styles: (t) => {
        const n = jC(t, "styles.global"), r = BC(n, { theme: t, colorMode: e });
        return r ? CC(r)(t) : void 0;
      }
    }
  );
}
var Wv = v.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
Wv.displayName = "EnvironmentContext";
function M3({ defer: e } = {}) {
  const [, t] = v.useReducer((n) => n + 1, 0);
  return la(() => {
    e && t();
  }, [e]), v.useContext(Wv);
}
function HC(e) {
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
  return /* @__PURE__ */ w.jsxs(Wv.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ w.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
HC.displayName = "EnvironmentProvider";
var I3 = (e) => {
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
    HC,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ w.jsx(E3, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ w.jsxs(
    mC,
    {
      colorModeManager: n,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ w.jsx(UI, { scope: o }) : /* @__PURE__ */ w.jsx(HI, {}),
        !c && /* @__PURE__ */ w.jsx(O3, {}),
        r ? /* @__PURE__ */ w.jsx(pC, { zIndex: r, children: d }) : d
      ]
    }
  ) });
}, R3 = (e, t) => e.find((n) => n.id === t);
function Cb(e, t) {
  const n = UC(e, t), r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return {
    position: n,
    index: r
  };
}
function UC(e, t) {
  for (const [n, r] of Object.entries(e))
    if (R3(r, t))
      return n;
}
function $3(e) {
  const t = e.includes("right"), n = e.includes("left");
  let r = "center";
  return t && (r = "flex-end"), n && (r = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: r
  };
}
function A3(e) {
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
  const n = v.useRef(e);
  return v.useEffect(() => {
    n.current = e;
  }), v.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function D3(e, t) {
  const n = to(e);
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
function da(e, t) {
  const n = v.useRef(!1), r = v.useRef(!1);
  v.useEffect(() => {
    if (n.current && r.current)
      return e();
    r.current = !0;
  }, t), v.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []);
}
const GC = v.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Vd = v.createContext({}), gl = v.createContext(null), Bd = typeof document < "u", Hv = Bd ? v.useLayoutEffect : v.useEffect, KC = v.createContext({ strict: !1 }), Uv = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), F3 = "framerAppearId", YC = "data-" + Uv(F3);
function L3(e, t, n, r) {
  const { visualElement: o } = v.useContext(Vd), i = v.useContext(KC), a = v.useContext(gl), s = v.useContext(GC).reducedMotion, l = v.useRef();
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
  const c = v.useRef(!!n[YC]);
  return Hv(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), v.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function $i(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function z3(e, t, n) {
  return v.useCallback(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : $i(n) && (n.current = r));
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
function Wd(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Gv = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Kv = ["initial", ...Gv];
function Hd(e) {
  return Wd(e.animate) || Kv.some((t) => Js(e[t]));
}
function qC(e) {
  return !!(Hd(e) || e.variants);
}
function j3(e, t) {
  if (Hd(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Js(n) ? n : void 0,
      animate: Js(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function N3(e) {
  const { initial: t, animate: n } = j3(e, v.useContext(Vd));
  return v.useMemo(() => ({ initial: t, animate: n }), [kb(t), kb(n)]);
}
function kb(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Pb = {
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
for (const e in Pb)
  el[e] = {
    isEnabled: (t) => Pb[e].some((n) => !!t[n])
  };
function V3(e) {
  for (const t in e)
    el[t] = {
      ...el[t],
      ...e[t]
    };
}
const Yv = v.createContext({}), XC = v.createContext({}), B3 = Symbol.for("motionComponentSymbol");
function W3({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && V3(e);
  function i(s, l) {
    let u;
    const c = {
      ...v.useContext(GC),
      ...s,
      layoutId: H3(s)
    }, { isStatic: d } = c, f = N3(s), p = r(s, d);
    if (!d && Bd) {
      f.visualElement = L3(o, p, c, t);
      const y = v.useContext(XC), g = v.useContext(KC).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        g,
        e,
        y
      ));
    }
    return v.createElement(
      Vd.Provider,
      { value: f },
      u && f.visualElement ? v.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      n(o, s, z3(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = v.forwardRef(i);
  return a[B3] = o, a;
}
function H3({ layoutId: e }) {
  const t = v.useContext(Yv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function U3(e) {
  function t(r, o = {}) {
    return W3(e(r, o));
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
const G3 = [
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
function qv(e) {
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
      !!(G3.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Dc = {};
function K3(e) {
  Object.assign(Dc, e);
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
function QC(e, { layout: t, layoutId: n }) {
  return ei.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Dc[e] || e === "opacity");
}
const Bt = (e) => !!(e && e.getVelocity), Y3 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, q3 = yl.length;
function X3(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, o) {
  let i = "";
  for (let a = 0; a < q3; a++) {
    const s = yl[a];
    if (e[s] !== void 0) {
      const l = Y3[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, r ? "" : i) : n && r && (i = "none"), i;
}
const ZC = (e) => (t) => typeof t == "string" && t.startsWith(e), JC = ZC("--"), Uh = ZC("var(--"), Q3 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, Z3 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, so = (e, t, n) => Math.min(Math.max(n, e), t), ti = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Ss = {
  ...ti,
  transform: (e) => so(0, 1, e)
}, du = {
  ...ti,
  default: 1
}, xs = (e) => Math.round(e * 1e5) / 1e5, Ud = /(-)?([\d]*\.?[\d])+/g, ek = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, J3 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function bl(e) {
  return typeof e == "string";
}
const Sl = (e) => ({
  test: (t) => bl(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Lr = Sl("deg"), tr = Sl("%"), ne = Sl("px"), ez = Sl("vh"), tz = Sl("vw"), Tb = {
  ...tr,
  parse: (e) => tr.parse(e) / 100,
  transform: (e) => tr.transform(e * 100)
}, Eb = {
  ...ti,
  transform: Math.round
}, tk = {
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
  scale: du,
  scaleX: du,
  scaleY: du,
  scaleZ: du,
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
  opacity: Ss,
  originX: Tb,
  originY: Tb,
  originZ: ne,
  // Misc
  zIndex: Eb,
  // SVG
  fillOpacity: Ss,
  strokeOpacity: Ss,
  numOctaves: Eb
};
function Xv(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (JC(d)) {
      i[d] = f;
      continue;
    }
    const p = tk[d], y = Z3(f, p);
    if (ei.has(d)) {
      if (l = !0, a[d] = y, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = y) : o[d] = y;
  }
  if (t.transform || (l || r ? o.transform = X3(e.transform, n, c, r) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Qv = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function nk(e, t, n) {
  for (const r in t)
    !Bt(t[r]) && !QC(r, n) && (e[r] = t[r]);
}
function nz({ transformTemplate: e }, t, n) {
  return v.useMemo(() => {
    const r = Qv();
    return Xv(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function rz(e, t, n) {
  const r = e.style || {}, o = {};
  return nk(o, r, e), Object.assign(o, nz(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function oz(e, t, n) {
  const r = {}, o = rz(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const iz = /* @__PURE__ */ new Set([
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
function Fc(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || iz.has(e);
}
let rk = (e) => !Fc(e);
function az(e) {
  e && (rk = (t) => t.startsWith("on") ? !Fc(t) : e(t));
}
try {
  az(require("@emotion/is-prop-valid").default);
} catch {
}
function sz(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (rk(o) || n === !0 && Fc(o) || !t && !Fc(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function _b(e, t, n) {
  return typeof e == "string" ? e : ne.transform(t + n * e);
}
function lz(e, t, n) {
  const r = _b(t, e.x, e.width), o = _b(n, e.y, e.height);
  return `${r} ${o}`;
}
const uz = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, cz = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function dz(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? uz : cz;
  e[i.offset] = ne.transform(-r);
  const a = ne.transform(t), s = ne.transform(n);
  e[i.array] = `${a} ${s}`;
}
function Zv(e, {
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
  if (Xv(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: y, dimensions: g } = e;
  p.transform && (g && (y.transform = p.transform), delete p.transform), g && (o !== void 0 || i !== void 0 || y.transform) && (y.transformOrigin = lz(g, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), a !== void 0 && dz(p, a, s, l, !1);
}
const ok = () => ({
  ...Qv(),
  attrs: {}
}), Jv = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function fz(e, t, n, r) {
  const o = v.useMemo(() => {
    const i = ok();
    return Zv(i, t, { enableHardwareAcceleration: !1 }, Jv(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    nk(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function pz(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (qv(n) ? fz : oz)(r, i, a, n), c = {
      ...sz(r, typeof n == "string", e),
      ...l,
      ref: o
    }, { children: d } = r, f = v.useMemo(() => Bt(d) ? d.get() : d, [d]);
    return v.createElement(n, {
      ...c,
      children: f
    });
  };
}
function ik(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const ak = /* @__PURE__ */ new Set([
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
function sk(e, t, n, r) {
  ik(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(ak.has(o) ? o : Uv(o), t.attrs[o]);
}
function eg(e, t) {
  const { style: n } = e, r = {};
  for (const o in n)
    (Bt(n[o]) || t.style && Bt(t.style[o]) || QC(o, e)) && (r[o] = n[o]);
  return r;
}
function lk(e, t) {
  const n = eg(e, t);
  for (const r in e)
    if (Bt(e[r]) || Bt(t[r])) {
      const o = yl.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[o] = e[r];
    }
  return n;
}
function tg(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
function uk(e) {
  const t = v.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Lc = (e) => Array.isArray(e), hz = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), mz = (e) => Lc(e) ? e[e.length - 1] || 0 : e;
function Xu(e) {
  const t = Bt(e) ? e.get() : e;
  return hz(t) ? t.toValue() : t;
}
function vz({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, i) {
  const a = {
    latestValues: gz(r, o, i, e),
    renderState: t()
  };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const ck = (e) => (t, n) => {
  const r = v.useContext(Vd), o = v.useContext(gl), i = () => vz(e, t, r, o);
  return n ? i() : uk(i);
};
function gz(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const f in i)
    o[f] = Xu(i[f]);
  let { initial: a, animate: s } = e;
  const l = Hd(e), u = qC(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Wd(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const y = tg(e, p);
    if (!y)
      return;
    const { transitionEnd: g, transition: S, ...m } = y;
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
class Ob {
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
function yz(e) {
  let t = new Ob(), n = new Ob(), r = 0, o = !1, i = !1;
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
], bz = 40;
function Sz(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = fu.reduce((d, f) => (d[f] = yz(() => n = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, bz), 1), o.timestamp = d, o.isProcessing = !0, fu.forEach(a), o.isProcessing = !1, n && t && (r = !1, e(s));
  }, l = () => {
    n = !0, r = !0, o.isProcessing || e(s);
  };
  return { schedule: fu.reduce((d, f) => {
    const p = i[f];
    return d[f] = (y, g = !1, S = !1) => (n || l(), p.schedule(y, g, S)), d;
  }, {}), cancel: (d) => fu.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: _e, cancel: Tr, state: ot, steps: up } = Sz(typeof requestAnimationFrame < "u" ? requestAnimationFrame : He, !0), xz = {
  useVisualState: ck({
    scrapeMotionValuesFromProps: lk,
    createRenderState: ok,
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
        Zv(n, r, { enableHardwareAcceleration: !1 }, Jv(t.tagName), e.transformTemplate), sk(t, n);
      });
    }
  })
}, wz = {
  useVisualState: ck({
    scrapeMotionValuesFromProps: eg,
    createRenderState: Qv
  })
};
function Cz(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...qv(e) ? xz : wz,
    preloadedFeatures: n,
    useRender: pz(t),
    createVisualElement: r,
    Component: e
  };
}
function mr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const dk = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Gd(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const kz = (e) => (t) => dk(t) && e(t, Gd(t));
function yr(e, t, n, r) {
  return mr(e, t, kz(n), r);
}
const Pz = (e, t) => (n) => t(e(n)), no = (...e) => e.reduce(Pz);
function fk(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Mb = fk("dragHorizontal"), Ib = fk("dragVertical");
function pk(e) {
  let t = !1;
  if (e === "y")
    t = Ib();
  else if (e === "x")
    t = Mb();
  else {
    const n = Mb(), r = Ib();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function hk() {
  const e = pk(!0);
  return e ? (e(), !1) : !0;
}
class mo {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Rb(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || hk())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[r] && _e.update(() => s[r](i, a));
  };
  return yr(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
class Tz extends mo {
  mount() {
    this.unmount = no(Rb(this.node, !0), Rb(this.node, !1));
  }
  unmount() {
  }
}
class Ez extends mo {
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
const mk = (e, t) => t ? e === t ? !0 : mk(e, t.parentElement) : !1;
function cp(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Gd(n));
}
class _z extends mo {
  constructor() {
    super(...arguments), this.removeStartListeners = He, this.removeEndListeners = He, this.removeAccessibleListeners = He, this.startPointerPress = (t, n) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const r = this.node.getProps(), i = yr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        _e.update(() => {
          mk(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(r.onTap || r.onPointerUp) }), a = yr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
      this.removeEndListeners = no(i, a), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || cp("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && _e.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = mr(this.node.current, "keyup", a), cp("down", (s, l) => {
          this.startPress(s, l);
        });
      }, n = mr(this.node.current, "keydown", t), r = () => {
        this.isPressing && cp("cancel", (i, a) => this.cancelPress(i, a));
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
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !hk();
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
const Gh = /* @__PURE__ */ new WeakMap(), dp = /* @__PURE__ */ new WeakMap(), Oz = (e) => {
  const t = Gh.get(e.target);
  t && t(e);
}, Mz = (e) => {
  e.forEach(Oz);
};
function Iz({ root: e, ...t }) {
  const n = e || document;
  dp.has(n) || dp.set(n, {});
  const r = dp.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Mz, { root: e, ...t })), r[o];
}
function Rz(e, t, n) {
  const r = Iz(t);
  return Gh.set(e, n), r.observe(e), () => {
    Gh.delete(e), r.unobserve(e);
  };
}
const $z = {
  some: 0,
  all: 1
};
class Az extends mo {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : $z[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return Rz(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Dz(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Dz({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Fz = {
  inView: {
    Feature: Az
  },
  tap: {
    Feature: _z
  },
  focus: {
    Feature: Ez
  },
  hover: {
    Feature: Tz
  }
};
function vk(e, t) {
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
function Lz(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.get()), t;
}
function zz(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
}
function Kd(e, t, n) {
  const r = e.getProps();
  return tg(r, t, n !== void 0 ? n : r.custom, Lz(e), zz(e));
}
let jz = He, ng = He;
const ro = (e) => e * 1e3, br = (e) => e / 1e3, Nz = {
  current: !1
}, gk = (e) => Array.isArray(e) && typeof e[0] == "number";
function yk(e) {
  return !!(!e || typeof e == "string" && bk[e] || gk(e) || Array.isArray(e) && e.every(yk));
}
const rs = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, bk = {
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
function Sk(e) {
  if (e)
    return gk(e) ? rs(e) : Array.isArray(e) ? e.map(Sk) : bk[e];
}
function Vz(e, t, n, { delay: r = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Sk(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function Bz(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const xk = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Wz = 1e-7, Hz = 12;
function Uz(e, t, n, r, o) {
  let i, a, s = 0;
  do
    a = t + (n - t) / 2, i = xk(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > Wz && ++s < Hz);
  return a;
}
function xl(e, t, n, r) {
  if (e === t && n === r)
    return He;
  const o = (i) => Uz(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : xk(o(i), t, r);
}
const Gz = xl(0.42, 0, 1, 1), Kz = xl(0, 0, 0.58, 1), wk = xl(0.42, 0, 0.58, 1), Yz = (e) => Array.isArray(e) && typeof e[0] != "number", Ck = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, kk = (e) => (t) => 1 - e(1 - t), Pk = (e) => 1 - Math.sin(Math.acos(e)), rg = kk(Pk), qz = Ck(rg), Tk = xl(0.33, 1.53, 0.69, 0.99), og = kk(Tk), Xz = Ck(og), Qz = (e) => (e *= 2) < 1 ? 0.5 * og(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Zz = {
  linear: He,
  easeIn: Gz,
  easeInOut: wk,
  easeOut: Kz,
  circIn: Pk,
  circInOut: qz,
  circOut: rg,
  backIn: og,
  backInOut: Xz,
  backOut: Tk,
  anticipate: Qz
}, $b = (e) => {
  if (Array.isArray(e)) {
    ng(e.length === 4);
    const [t, n, r, o] = e;
    return xl(t, n, r, o);
  } else if (typeof e == "string")
    return Zz[e];
  return e;
}, ig = (e, t) => (n) => !!(bl(n) && J3.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Ek = (e, t, n) => (r) => {
  if (!bl(r))
    return r;
  const [o, i, a, s] = r.match(Ud);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, Jz = (e) => so(0, 255, e), fp = {
  ...ti,
  transform: (e) => Math.round(Jz(e))
}, Do = {
  test: ig("rgb", "red"),
  parse: Ek("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + fp.transform(e) + ", " + fp.transform(t) + ", " + fp.transform(n) + ", " + xs(Ss.transform(r)) + ")"
};
function ej(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Kh = {
  test: ig("#"),
  parse: ej,
  transform: Do.transform
}, Ai = {
  test: ig("hsl", "hue"),
  parse: Ek("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + tr.transform(xs(t)) + ", " + tr.transform(xs(n)) + ", " + xs(Ss.transform(r)) + ")"
}, kt = {
  test: (e) => Do.test(e) || Kh.test(e) || Ai.test(e),
  parse: (e) => Do.test(e) ? Do.parse(e) : Ai.test(e) ? Ai.parse(e) : Kh.parse(e),
  transform: (e) => bl(e) ? e : e.hasOwnProperty("red") ? Do.transform(e) : Ai.transform(e)
}, je = (e, t, n) => -n * e + n * t + e;
function pp(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function tj({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    o = pp(l, s, e + 1 / 3), i = pp(l, s, e), a = pp(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
const hp = (e, t, n) => {
  const r = e * e;
  return Math.sqrt(Math.max(0, n * (t * t - r) + r));
}, nj = [Kh, Do, Ai], rj = (e) => nj.find((t) => t.test(e));
function Ab(e) {
  const t = rj(e);
  let n = t.parse(e);
  return t === Ai && (n = tj(n)), n;
}
const _k = (e, t) => {
  const n = Ab(e), r = Ab(t), o = { ...n };
  return (i) => (o.red = hp(n.red, r.red, i), o.green = hp(n.green, r.green, i), o.blue = hp(n.blue, r.blue, i), o.alpha = je(n.alpha, r.alpha, i), Do.transform(o));
};
function oj(e) {
  var t, n;
  return isNaN(e) && bl(e) && (((t = e.match(Ud)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(ek)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Ok = {
  regex: Q3,
  countKey: "Vars",
  token: "${v}",
  parse: He
}, Mk = {
  regex: ek,
  countKey: "Colors",
  token: "${c}",
  parse: kt.parse
}, Ik = {
  regex: Ud,
  countKey: "Numbers",
  token: "${n}",
  parse: ti.parse
};
function mp(e, { regex: t, countKey: n, token: r, parse: o }) {
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
  return n.value.includes("var(--") && mp(n, Ok), mp(n, Mk), mp(n, Ik), n;
}
function Rk(e) {
  return zc(e).values;
}
function $k(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = zc(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r ? s = s.replace(Ok.token, a[l]) : l < r + n ? s = s.replace(Mk.token, kt.transform(a[l])) : s = s.replace(Ik.token, xs(a[l]));
    return s;
  };
}
const ij = (e) => typeof e == "number" ? 0 : e;
function aj(e) {
  const t = Rk(e);
  return $k(e)(t.map(ij));
}
const lo = {
  test: oj,
  parse: Rk,
  createTransformer: $k,
  getAnimatableNone: aj
}, Ak = (e, t) => (n) => `${n > 0 ? t : e}`;
function Dk(e, t) {
  return typeof e == "number" ? (n) => je(e, t, n) : kt.test(e) ? _k(e, t) : e.startsWith("var(") ? Ak(e, t) : Lk(e, t);
}
const Fk = (e, t) => {
  const n = [...e], r = n.length, o = e.map((i, a) => Dk(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}, sj = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Dk(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}, Lk = (e, t) => {
  const n = lo.createTransformer(t), r = zc(e), o = zc(t);
  return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? no(Fk(r.values, o.values), n) : Ak(e, t);
}, tl = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Db = (e, t) => (n) => je(e, t, n);
function lj(e) {
  return typeof e == "number" ? Db : typeof e == "string" ? kt.test(e) ? _k : Lk : Array.isArray(e) ? Fk : typeof e == "object" ? sj : Db;
}
function uj(e, t, n) {
  const r = [], o = n || lj(e[0]), i = e.length - 1;
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
function zk(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (ng(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = uj(t, r, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = tl(e[c], e[c + 1], u);
    return a[c](d);
  };
  return n ? (u) => l(so(e[0], e[i - 1], u)) : l;
}
function cj(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = tl(0, t, r);
    e.push(je(n, 1, o));
  }
}
function dj(e) {
  const t = [0];
  return cj(t, e.length - 1), t;
}
function fj(e, t) {
  return e.map((n) => n * t);
}
function pj(e, t) {
  return e.map(() => t || wk).splice(0, e.length - 1);
}
function jc({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = Yz(r) ? r.map($b) : $b(r), i = {
    done: !1,
    value: t[0]
  }, a = fj(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : dj(t),
    e
  ), s = zk(a, t, {
    ease: Array.isArray(o) ? o : pj(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function jk(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const hj = 5;
function Nk(e, t, n) {
  const r = Math.max(t - hj, 0);
  return jk(n - e(r), t - r);
}
const vp = 1e-3, mj = 0.01, Fb = 10, vj = 0.05, gj = 1;
function yj({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  jz(e <= ro(Fb));
  let a = 1 - t;
  a = so(vj, gj, a), e = so(mj, Fb, br(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - n, p = Yh(u, a), y = Math.exp(-d);
    return vp - f / p * y;
  }, i = (u) => {
    const d = u * a * e, f = d * n + n, p = Math.pow(a, 2) * Math.pow(u, 2) * e, y = Math.exp(-d), g = Yh(Math.pow(u, 2), a);
    return (-o(u) + vp > 0 ? -1 : 1) * ((f - p) * y) / g;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -vp + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = Sj(o, i, s);
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
const bj = 12;
function Sj(e, t, n) {
  let r = n;
  for (let o = 1; o < bj; o++)
    r = r - e(r) / t(r);
  return r;
}
function Yh(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const xj = ["duration", "bounce"], wj = ["stiffness", "damping", "mass"];
function Lb(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Cj(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Lb(e, wj) && Lb(e, xj)) {
    const n = yj(e);
    t = {
      ...t,
      ...n,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Vk({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = Cj(r), p = c ? -br(c) : 0, y = l / (2 * Math.sqrt(s * u)), g = i - o, S = br(Math.sqrt(s / u)), m = Math.abs(g) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 5e-3 : 0.5);
  let h;
  if (y < 1) {
    const b = Yh(S, y);
    h = (x) => {
      const k = Math.exp(-y * S * x);
      return i - k * ((p + y * S * g) / b * Math.sin(b * x) + g * Math.cos(b * x));
    };
  } else if (y === 1)
    h = (b) => i - Math.exp(-S * b) * (g + (p + S * g) * b);
  else {
    const b = S * Math.sqrt(y * y - 1);
    h = (x) => {
      const k = Math.exp(-y * S * x), P = Math.min(b * x, 300);
      return i - k * ((p + y * S * g) * Math.sinh(P) + b * g * Math.cosh(P)) / b;
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
        b !== 0 && (y < 1 ? k = Nk(h, b, x) : k = 0);
        const P = Math.abs(k) <= n, T = Math.abs(i - x) <= t;
        a.done = P && T;
      }
      return a.value = a.done ? i : x, a;
    }
  };
}
function zb({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (E) => s !== void 0 && E < s || l !== void 0 && E > l, y = (E) => s === void 0 ? l : l === void 0 || Math.abs(s - E) < Math.abs(l - E) ? s : l;
  let g = n * t;
  const S = d + g, m = a === void 0 ? S : a(S);
  m !== S && (g = m - d);
  const h = (E) => -g * Math.exp(-E / r), b = (E) => m + h(E), x = (E) => {
    const M = h(E), I = b(E);
    f.done = Math.abs(M) <= u, f.value = f.done ? m : I;
  };
  let k, P;
  const T = (E) => {
    p(f.value) && (k = E, P = Vk({
      keyframes: [f.value, y(f.value)],
      velocity: Nk(b, E, f.value),
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return T(0), {
    calculatedDuration: null,
    next: (E) => {
      let M = !1;
      return !P && k === void 0 && (M = !0, x(E), T(E)), k !== void 0 && E > k ? P.next(E - k) : (!M && x(E), f);
    }
  };
}
const kj = (e) => {
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
}, jb = 2e4;
function Nb(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < jb; )
    t += n, r = e.next(t);
  return t >= jb ? 1 / 0 : t;
}
const Pj = {
  decay: zb,
  inertia: zb,
  tween: jc,
  keyframes: jc,
  spring: Vk
};
function Nc({ autoplay: e = !0, delay: t = 0, driver: n = kj, keyframes: r, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, y = !1, g, S;
  const m = () => {
    S = new Promise((V) => {
      g = V;
    });
  };
  m();
  let h;
  const b = Pj[o] || jc;
  let x;
  b !== jc && typeof r[0] != "number" && (x = zk([0, 100], r, {
    clamp: !1
  }), r = [0, 100]);
  const k = b({ ...f, keyframes: r });
  let P;
  s === "mirror" && (P = b({
    ...f,
    keyframes: [...r].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let T = "idle", E = null, M = null, I = null;
  k.calculatedDuration === null && i && (k.calculatedDuration = Nb(k));
  const { calculatedDuration: D } = k;
  let G = 1 / 0, H = 1 / 0;
  D !== null && (G = D + a, H = G * (i + 1) - a);
  let L = 0;
  const W = (V) => {
    if (M === null)
      return;
    p > 0 && (M = Math.min(M, V)), p < 0 && (M = Math.min(V - H / p, M)), E !== null ? L = E : L = Math.round(V - M) * p;
    const Y = L - t * (p >= 0 ? 1 : -1), j = p >= 0 ? Y < 0 : Y > H;
    L = Math.max(Y, 0), T === "finished" && E === null && (L = H);
    let te = L, le = k;
    if (i) {
      const ke = L / G;
      let et = Math.floor(ke), qe = ke % 1;
      !qe && ke >= 1 && (qe = 1), qe === 1 && et--, et = Math.min(et, i + 1);
      const on = !!(et % 2);
      on && (s === "reverse" ? (qe = 1 - qe, a && (qe -= a / G)) : s === "mirror" && (le = P));
      let Pn = so(0, 1, qe);
      L > H && (Pn = s === "reverse" && on ? 1 : 0), te = Pn * G;
    }
    const ie = j ? { done: !1, value: r[0] } : le.next(te);
    x && (ie.value = x(ie.value));
    let { done: se } = ie;
    !j && D !== null && (se = p >= 0 ? L >= H : L <= 0);
    const me = E === null && (T === "finished" || T === "running" && se);
    return d && d(ie.value), me && A(), ie;
  }, K = () => {
    h && h.stop(), h = void 0;
  }, $ = () => {
    T = "idle", K(), g(), m(), M = I = null;
  }, A = () => {
    T = "finished", c && c(), K(), g();
  }, z = () => {
    if (y)
      return;
    h || (h = n(W));
    const V = h.now();
    l && l(), E !== null ? M = V - E : (!M || T === "finished") && (M = V), T === "finished" && m(), I = M, E = null, T = "running", h.start();
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
      V = ro(V), L = V, E !== null || !h || p === 0 ? E = V : M = h.now() - V / p;
    },
    get duration() {
      const V = k.calculatedDuration === null ? Nb(k) : k.calculatedDuration;
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
      T = "paused", E = L;
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
function Tj(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Ej = Tj(() => Object.hasOwnProperty.call(Element.prototype, "animate")), _j = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), pu = 10, Oj = 2e4, Mj = (e, t) => t.type === "spring" || e === "backgroundColor" || !yk(t.ease);
function Ij(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (!(Ej() && _j.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (Mj(t, o)) {
    const h = Nc({
      ...o,
      repeat: 0,
      delay: 0
    });
    let b = { done: !1, value: c[0] };
    const x = [];
    let k = 0;
    for (; !b.done && k < Oj; )
      b = h.sample(k), x.push(b.value), k += pu;
    p = void 0, c = x, d = k - pu, f = "linear";
  }
  const y = Vz(e.owner.current, t, c, {
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
  const g = () => y.cancel(), S = () => {
    _e.update(g), s(), u();
  };
  return y.onfinish = () => {
    e.set(Bz(c, o)), r && r(), S();
  }, {
    then(h, b) {
      return l.then(h, b);
    },
    attachTimeline(h) {
      return y.timeline = h, y.onfinish = null, He;
    },
    get time() {
      return br(y.currentTime || 0);
    },
    set time(h) {
      y.currentTime = ro(h);
    },
    get speed() {
      return y.playbackRate;
    },
    set speed(h) {
      y.playbackRate = h;
    },
    get duration() {
      return br(d);
    },
    play: () => {
      a || (y.play(), Tr(g));
    },
    pause: () => y.pause(),
    stop: () => {
      if (a = !0, y.playState === "idle")
        return;
      const { currentTime: h } = y;
      if (h) {
        const b = Nc({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(b.sample(h - pu).value, b.sample(h).value, pu);
      }
      S();
    },
    complete: () => y.finish(),
    cancel: S
  };
}
function Rj({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
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
  return t ? Nc({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const $j = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Aj = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Dj = {
  type: "keyframes",
  duration: 0.8
}, Fj = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Lj = (e, { keyframes: t }) => t.length > 2 ? Dj : ei.has(e) ? e.startsWith("scale") ? Aj(t[1]) : $j : Fj, qh = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(lo.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), zj = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function jj(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Ud) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = zj.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const Nj = /([a-z-]*)\(.*?\)/g, Xh = {
  ...lo,
  getAnimatableNone: (e) => {
    const t = e.match(Nj);
    return t ? t.map(jj).join(" ") : e;
  }
}, Vj = {
  ...tk,
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
  filter: Xh,
  WebkitFilter: Xh
}, ag = (e) => Vj[e];
function Bk(e, t) {
  let n = ag(e);
  return n !== Xh && (n = lo), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Wk = (e) => /^0[^.\s]+$/.test(e);
function Bj(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Wk(e);
}
function Wj(e, t, n, r) {
  const o = qh(t, n);
  let i;
  Array.isArray(n) ? i = [...n] : i = [null, n];
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), Bj(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = Bk(t, s);
    }
  return i;
}
function Hj({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function sg(e, t) {
  return e[t] || e.default || e;
}
const lg = (e, t, n, r = {}) => (o) => {
  const i = sg(r, e) || {}, a = i.delay || r.delay || 0;
  let { elapsed: s = 0 } = r;
  s = s - ro(a);
  const l = Wj(t, e, n, i), u = l[0], c = l[l.length - 1], d = qh(e, u), f = qh(e, c);
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
  if (Hj(i) || (p = {
    ...p,
    ...Lj(e, p)
  }), p.duration && (p.duration = ro(p.duration)), p.repeatDelay && (p.repeatDelay = ro(p.repeatDelay)), !d || !f || Nz.current || i.type === !1)
    return Rj(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const y = Ij(t, e, p);
    if (y)
      return y;
  }
  return Nc(p);
};
function Vc(e) {
  return !!(Bt(e) && e.add);
}
const Hk = (e) => /^\-?\d*\.?\d+$/.test(e);
function ug(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function cg(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class dg {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ug(this.subscriptions, t), () => cg(this.subscriptions, t);
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
const Uj = (e) => !isNaN(parseFloat(e));
class Gj {
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
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = Uj(this.current), this.owner = n.owner;
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
    this.events[t] || (this.events[t] = new dg());
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
      jk(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
  return new Gj(e, t);
}
const Uk = (e) => (t) => t.test(e), Kj = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Gk = [ti, ne, tr, Lr, tz, ez, Kj], Ba = (e) => Gk.find(Uk(e)), Yj = [...Gk, kt, lo], qj = (e) => Yj.find(Uk(e));
function Xj(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, fa(n));
}
function Qj(e, t) {
  const n = Kd(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = mz(i[a]);
    Xj(e, a, s);
  }
}
function Zj(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (Hk(c) || Wk(c)) ? c = parseFloat(c) : !qj(c) && lo.test(u) && (c = Bk(l, u)), e.addValue(l, fa(c, { owner: e })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function Jj(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function eN(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = Jj(o, t);
    if (i !== void 0)
      r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function tN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Kk(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && tN(c, d))
      continue;
    const y = {
      delay: n,
      elapsed: 0,
      ...sg(i || {}, d)
    };
    let g = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const h = e.getProps()[YC];
      h && (g = !1, y.elapsed = window.HandoffAppearAnimations(h, d, f, _e), y.syncStart = !0);
    }
    let S = g && p === f.get();
    if (y.type === "spring" && (f.getVelocity() || y.velocity) && (S = !1), f.animation && (S = !1), S)
      continue;
    f.start(lg(d, f, p, e.shouldReduceMotion && ei.has(d) ? { type: !1 } : y));
    const m = f.animation;
    Vc(l) && (l.add(d), m.then(() => l.remove(d))), u.push(m);
  }
  return a && Promise.all(u).then(() => {
    a && Qj(e, a);
  }), u;
}
function Qh(e, t, n = {}) {
  const r = Kd(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(Kk(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return nN(e, t, u + l, c, d, n);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function nN(e, t, n = 0, r = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return Array.from(e.variantChildren).sort(rN).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(Qh(u, t, {
      ...i,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function rN(e, t) {
  return e.sortNodePosition(t);
}
function oN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Qh(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Qh(e, t, n);
  else {
    const o = typeof t == "function" ? Kd(e, t, n.custom) : t;
    r = Promise.all(Kk(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const iN = [...Gv].reverse(), aN = Gv.length;
function sN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => oN(e, n, r)));
}
function lN(e) {
  let t = sN(e);
  const n = cN();
  let r = !0;
  const o = (l, u) => {
    const c = Kd(e, u);
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
    for (let m = 0; m < aN; m++) {
      const h = iN[m], b = n[h], x = c[h] !== void 0 ? c[h] : d[h], k = Js(x), P = h === u ? b.isActive : null;
      P === !1 && (g = m);
      let T = x === d[h] && x !== c[h] && k;
      if (T && r && e.manuallyAnimateOnMount && (T = !1), b.protectedKeys = { ...y }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !x && !b.prevProp || // Or if the prop doesn't define an animation
      Wd(x) || typeof x == "boolean")
        continue;
      const E = uN(b.prevProp, x);
      let M = E || // If we're making this variant active, we want to always make it active
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
        y.hasOwnProperty(W) || (K !== $ ? Lc(K) && Lc($) ? !vk(K, $) || E ? L(W) : b.protectedKeys[W] = !0 : K !== void 0 ? L(W) : p.add(W) : K !== void 0 && p.has(W) ? L(W) : b.protectedKeys[W] = !0);
      }
      b.prevProp = x, b.prevResolvedValues = D, b.isActive && (y = { ...y, ...D }), r && e.blockInitialAnimation && (M = !1), M && !T && f.push(...I.map((W) => ({
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
function uN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !vk(t, e) : !1;
}
function xo(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function cN() {
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
class dN extends mo {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = lN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Wd(t) && (this.unmount = t.subscribe(this.node));
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
let fN = 0;
class pN extends mo {
  constructor() {
    super(...arguments), this.id = fN++;
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
const hN = {
  animation: {
    Feature: dN
  },
  exit: {
    Feature: pN
  }
}, Vb = (e, t) => Math.abs(e - t);
function mN(e, t) {
  const n = Vb(e.x, t.x), r = Vb(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Yk {
  constructor(t, n, { transformPagePoint: r, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = yp(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = mN(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: y } = ot;
      this.history.push({ ...p, timestamp: y });
      const { onStart: g, onMove: S } = this.handlers;
      d || (g && g(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), S && S(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = gp(d, this.transformPagePoint), _e.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, y = yp(c.type === "pointercancel" ? this.lastMoveEventInfo : gp(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, y), p && p(c, y);
    }, !dk(t))
      return;
    this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Gd(t), a = gp(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = ot;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, yp(a, this.history)), this.removeListeners = no(yr(this.contextWindow, "pointermove", this.handlePointerMove), yr(this.contextWindow, "pointerup", this.handlePointerUp), yr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Tr(this.updatePoint);
  }
}
function gp(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Bb(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function yp({ point: e }, t) {
  return {
    point: e,
    delta: Bb(e, qk(t)),
    offset: Bb(e, vN(t)),
    velocity: gN(t, 0.1)
  };
}
function vN(e) {
  return e[0];
}
function qk(e) {
  return e[e.length - 1];
}
function gN(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = qk(e);
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
function Zh(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Wb(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = je(t.min, t.max, e.origin), e.scale = Jt(n) / Jt(t), (Zh(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = je(n.min, n.max, e.origin) - e.originPoint, (Zh(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ws(e, t, n, r) {
  Wb(e.x, t.x, n.x, r ? r.originX : void 0), Wb(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Hb(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Jt(t);
}
function yN(e, t, n) {
  Hb(e.x, t.x, n.x), Hb(e.y, t.y, n.y);
}
function Ub(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Jt(t);
}
function Cs(e, t, n) {
  Ub(e.x, t.x, n.x), Ub(e.y, t.y, n.y);
}
function bN(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? je(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? je(n, e, r.max) : Math.min(e, n)), e;
}
function Gb(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function SN(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Gb(e.x, n, o),
    y: Gb(e.y, t, r)
  };
}
function Kb(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function xN(e, t) {
  return {
    x: Kb(e.x, t.x),
    y: Kb(e.y, t.y)
  };
}
function wN(e, t) {
  let n = 0.5;
  const r = Jt(e), o = Jt(t);
  return o > r ? n = tl(t.min, t.max - r, e.min) : r > o && (n = tl(e.min, e.max - o, t.min)), so(0, 1, n);
}
function CN(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Jh = 0.35;
function kN(e = Jh) {
  return e === !1 ? e = 0 : e === !0 && (e = Jh), {
    x: Yb(e, "left", "right"),
    y: Yb(e, "top", "bottom")
  };
}
function Yb(e, t, n) {
  return {
    min: qb(e, t),
    max: qb(e, n)
  };
}
function qb(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Xb = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Di = () => ({
  x: Xb(),
  y: Xb()
}), Qb = () => ({ min: 0, max: 0 }), Xe = () => ({
  x: Qb(),
  y: Qb()
});
function Hn(e) {
  return [e("x"), e("y")];
}
function Xk({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function PN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function TN(e, t) {
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
function bp(e) {
  return e === void 0 || e === 1;
}
function em({ scale: e, scaleX: t, scaleY: n }) {
  return !bp(e) || !bp(t) || !bp(n);
}
function Po(e) {
  return em(e) || Qk(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Qk(e) {
  return Zb(e.x) || Zb(e.y);
}
function Zb(e) {
  return e && e !== "0%";
}
function Bc(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Jb(e, t, n, r, o) {
  return o !== void 0 && (e = Bc(e, o, r)), Bc(e, n, r) + t;
}
function tm(e, t = 0, n = 1, r, o) {
  e.min = Jb(e.min, t, n, r, o), e.max = Jb(e.max, t, n, r, o);
}
function Zk(e, { x: t, y: n }) {
  tm(e.x, t.translate, t.scale, t.originPoint), tm(e.y, n.translate, n.scale, n.originPoint);
}
function EN(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = n[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Fi(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Zk(e, a)), r && Po(i.latestValues) && Fi(e, i.latestValues));
  }
  t.x = e1(t.x), t.y = e1(t.y);
}
function e1(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Nr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function t1(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = je(e.min, e.max, i);
  tm(e, t[n], t[r], a, t.scale);
}
const _N = ["x", "scaleX", "originX"], ON = ["y", "scaleY", "originY"];
function Fi(e, t) {
  t1(e.x, t, _N), t1(e.y, t, ON);
}
function Jk(e, t) {
  return Xk(TN(e.getBoundingClientRect(), t));
}
function MN(e, t, n) {
  const r = Jk(e, n), { scroll: o } = t;
  return o && (Nr(r.x, o.offset.x), Nr(r.y, o.offset.y)), r;
}
const eP = ({ current: e }) => e ? e.ownerDocument.defaultView : null, IN = /* @__PURE__ */ new WeakMap();
class RN {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Xe(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), n && this.snapToCursor(Gd(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = pk(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Hn((y) => {
        let g = this.getAxisMotionValue(y).get() || 0;
        if (tr.test(g)) {
          const { projection: S } = this.visualElement;
          if (S && S.layout) {
            const m = S.layout.layoutBox[y];
            m && (g = Jt(m) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[y] = g;
      }), f && _e.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: y } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = $N(y), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, y), this.updateAxis("y", u.point, y), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new Yk(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: eP(this.visualElement)
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
    if (!r || !hu(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = bN(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && $i(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = SN(o.layoutBox, n) : this.constraints = !1, this.elastic = kN(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Hn((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = CN(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !$i(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = MN(r, o.root, this.visualElement.getTransformPagePoint());
    let a = xN(o.layout.layoutBox, i);
    if (n) {
      const s = n(PN(a));
      this.hasMutatedConstraints = !!s, s && (a = Xk(s));
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
    return r.start(lg(t, r, 0, n));
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
    if (!$i(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Hn((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = wN({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Hn((a) => {
      if (!hu(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(je(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    IN.set(this.visualElement, this);
    const t = this.visualElement.current, n = yr(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      $i(l) && (this.constraints = this.resolveRefConstraints());
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
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = Jh, dragMomentum: s = !0 } = t;
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
function $N(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class AN extends mo {
  constructor(t) {
    super(t), this.removeGroupControls = He, this.removeListeners = He, this.controls = new RN(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || He;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const n1 = (e) => (t, n) => {
  e && _e.update(() => e(t, n));
};
class DN extends mo {
  constructor() {
    super(...arguments), this.removePointerDownListener = He;
  }
  onPointerDown(t) {
    this.session = new Yk(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: eP(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: n1(t),
      onStart: n1(n),
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
function tP() {
  const e = v.useContext(gl);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = v.useId();
  return v.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function FN() {
  return LN(v.useContext(gl));
}
function LN(e) {
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
function r1(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Wa = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ne.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = r1(e, t.target.x), r = r1(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, zN = {
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
class jN extends re.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    K3(NN), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Qu.hasEverUpdated = !0;
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
function nP(e) {
  const [t, n] = tP(), r = v.useContext(Yv);
  return re.createElement(jN, { ...e, layoutGroup: r, switchLayoutGroup: v.useContext(XC), isPresent: t, safeToRemove: n });
}
const NN = {
  borderRadius: {
    ...Wa,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Wa,
  borderTopRightRadius: Wa,
  borderBottomLeftRadius: Wa,
  borderBottomRightRadius: Wa,
  boxShadow: zN
}, rP = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], VN = rP.length, o1 = (e) => typeof e == "string" ? parseFloat(e) : e, i1 = (e) => typeof e == "number" || ne.test(e);
function BN(e, t, n, r, o, i) {
  o ? (e.opacity = je(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    WN(r)
  ), e.opacityExit = je(t.opacity !== void 0 ? t.opacity : 1, 0, HN(r))) : i && (e.opacity = je(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let a = 0; a < VN; a++) {
    const s = `border${rP[a]}Radius`;
    let l = a1(t, s), u = a1(n, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || i1(l) === i1(u) ? (e[s] = Math.max(je(o1(l), o1(u), r), 0), (tr.test(u) || tr.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = je(t.rotate || 0, n.rotate || 0, r));
}
function a1(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const WN = oP(0, 0.5, rg), HN = oP(0.5, 0.95, He);
function oP(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(tl(e, t, r));
}
function s1(e, t) {
  e.min = t.min, e.max = t.max;
}
function un(e, t) {
  s1(e.x, t.x), s1(e.y, t.y);
}
function l1(e, t, n, r, o) {
  return e -= t, e = Bc(e, 1 / n, r), o !== void 0 && (e = Bc(e, 1 / o, r)), e;
}
function UN(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (tr.test(t) && (t = parseFloat(t), t = je(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = je(i.min, i.max, r);
  e === i && (s -= t), e.min = l1(e.min, t, n, s, o), e.max = l1(e.max, t, n, s, o);
}
function u1(e, t, [n, r, o], i, a) {
  UN(e, t[n], t[r], t[o], t.scale, i, a);
}
const GN = ["x", "scaleX", "originX"], KN = ["y", "scaleY", "originY"];
function c1(e, t, n, r) {
  u1(e.x, t, GN, n ? n.x : void 0, r ? r.x : void 0), u1(e.y, t, KN, n ? n.y : void 0, r ? r.y : void 0);
}
function d1(e) {
  return e.translate === 0 && e.scale === 1;
}
function iP(e) {
  return d1(e.x) && d1(e.y);
}
function YN(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function aP(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function f1(e) {
  return Jt(e.x) / Jt(e.y);
}
class qN {
  constructor() {
    this.members = [];
  }
  add(t) {
    ug(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (cg(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function p1(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
const XN = (e, t) => e.depth - t.depth;
class QN {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    ug(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    cg(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(XN), this.isDirty = !1, this.children.forEach(t);
  }
}
function ZN(e, t) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (Tr(r), e(i - t));
  };
  return _e.read(r, !0), () => Tr(r);
}
function JN(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function eV(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function tV(e, t, n) {
  const r = Bt(e) ? e : fa(e);
  return r.start(lg("", r, t, n)), r.animation;
}
const h1 = ["", "X", "Y", "Z"], nV = { visibility: "hidden" }, m1 = 1e3;
let rV = 0;
const To = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function sP({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = rV++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, To.totalNodes = To.resolvedTargetDeltas = To.recalculatedProjection = 0, this.nodes.forEach(aV), this.nodes.forEach(dV), this.nodes.forEach(fV), this.nodes.forEach(sV), JN(To);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new QN());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new dg()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = eV(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = ZN(f, 250), Qu.hasAnimatedSinceResize && (Qu.hasAnimatedSinceResize = !1, this.nodes.forEach(g1));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || c.getDefaultTransition() || gV, { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !aP(this.targetLayout, y) || p, b = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || b || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, b);
          const x = {
            ...sg(g, "layout"),
            onPlay: S,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          f || g1(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(pV), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(v1);
        return;
      }
      this.isUpdating || this.nodes.forEach(uV), this.isUpdating = !1, this.nodes.forEach(cV), this.nodes.forEach(oV), this.nodes.forEach(iV), this.clearAllSnapshots();
      const s = performance.now();
      ot.delta = so(0, 1e3 / 60, s - ot.timestamp), ot.timestamp = s, ot.isProcessing = !0, up.update.process(ot), up.preRender.process(ot), up.render.process(ot), ot.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(lV), this.sharedNodes.forEach(hV);
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
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !iP(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || Po(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), yV(l), {
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
        !s && c.options.layoutScroll && c.scroll && c !== c.root && Fi(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Po(c.latestValues) && Fi(l, c.latestValues);
      }
      return Po(this.latestValues) && Fi(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Xe();
      un(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Po(u.latestValues))
          continue;
        em(u.latestValues) && u.updateSnapshot();
        const c = Xe(), d = u.measurePageBox();
        un(c, d), c1(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Po(this.latestValues) && c1(s, this.latestValues), s;
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
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), Cs(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), un(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Xe(), this.targetWithTransforms = Xe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), yN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : un(this.target, this.layout.layoutBox), Zk(this.target, this.targetDelta)) : un(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), Cs(this.relativeTargetOrigin, this.target, p.target), un(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          To.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || em(this.parent.latestValues) || Qk(this.parent.latestValues)))
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
      EN(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: y } = s;
      if (!y) {
        this.projectionTransform && (this.projectionDelta = Di(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Di(), this.projectionDeltaWithTransform = Di());
      const g = this.projectionTransform;
      ws(this.projectionDelta, this.layoutCorrected, y, this.latestValues), this.projectionTransform = p1(this.projectionDelta, this.treeScale), (this.projectionTransform !== g || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), To.recalculatedProjection++;
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
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = Di();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = Xe(), p = l ? l.source : void 0, y = this.layout ? this.layout.source : void 0, g = p !== y, S = this.getStack(), m = !S || S.members.length <= 1, h = !!(g && !m && this.options.crossfade === !0 && !this.path.some(vV));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (x) => {
        const k = x / 1e3;
        y1(d.x, a.x, k), y1(d.y, a.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Cs(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), mV(this.relativeTarget, this.relativeTargetOrigin, f, k), b && YN(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = Xe()), un(b, this.relativeTarget)), g && (this.animationValues = c, BN(c, u, this.latestValues, k, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Tr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = _e.update(() => {
        Qu.hasAnimatedSinceResize = !0, this.currentAnimation = tV(0, m1, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(m1), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && lP(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Xe();
          const d = Jt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Jt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        un(s, l), Fi(s, c), ws(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new qN()), this.sharedNodes.get(a).add(s);
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
      for (let c = 0; c < h1.length; c++) {
        const d = "rotate" + h1[c];
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
        return nV;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Xu(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = Xu(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Po(this.latestValues) && (g.transform = c ? c({}, "") : "none", this.hasProjected = !1), g;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = p1(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${y.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const g in Dc) {
        if (f[g] === void 0)
          continue;
        const { correct: S, applyTo: m } = Dc[g], h = u.transform === "none" ? f[g] : S(f[g], d);
        if (m) {
          const b = m.length;
          for (let x = 0; x < b; x++)
            u[m[x]] = h;
        } else
          u[g] = h;
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
      }), this.root.nodes.forEach(v1), this.root.sharedNodes.clear();
    }
  };
}
function oV(e) {
  e.updateLayout();
}
function iV(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = n.source !== e.layout.source;
    i === "size" ? Hn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Jt(f);
      f.min = r[d].min, f.max = f.min + p;
    }) : lP(i, n.layoutBox, r) && Hn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Jt(r[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = Di();
    ws(s, r, n.layoutBox);
    const l = Di();
    a ? ws(l, e.applyTransform(o, !0), n.measuredBox) : ws(l, r, n.layoutBox);
    const u = !iP(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const y = Xe();
          Cs(y, n.layoutBox, f.layoutBox);
          const g = Xe();
          Cs(g, r, p.layoutBox), aP(y, g) || (c = !0), d.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = y, e.relativeParent = d);
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
function aV(e) {
  To.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function sV(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function lV(e) {
  e.clearSnapshot();
}
function v1(e) {
  e.clearMeasurements();
}
function uV(e) {
  e.isLayoutDirty = !1;
}
function cV(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function g1(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function dV(e) {
  e.resolveTargetDelta();
}
function fV(e) {
  e.calcProjection();
}
function pV(e) {
  e.resetRotation();
}
function hV(e) {
  e.removeLeadSnapshot();
}
function y1(e, t, n) {
  e.translate = je(t.translate, 0, n), e.scale = je(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function b1(e, t, n, r) {
  e.min = je(t.min, n.min, r), e.max = je(t.max, n.max, r);
}
function mV(e, t, n, r) {
  b1(e.x, t.x, n.x, r), b1(e.y, t.y, n.y, r);
}
function vV(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const gV = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, S1 = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), x1 = S1("applewebkit/") && !S1("chrome/") ? Math.round : He;
function w1(e) {
  e.min = x1(e.min), e.max = x1(e.max);
}
function yV(e) {
  w1(e.x), w1(e.y);
}
function lP(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Zh(f1(t), f1(n), 0.2);
}
const bV = sP({
  attachResizeListener: (e, t) => mr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Sp = {
  current: void 0
}, uP = sP({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Sp.current) {
      const e = new bV({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Sp.current = e;
    }
    return Sp.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), SV = {
  pan: {
    Feature: DN
  },
  drag: {
    Feature: AN,
    ProjectionNode: uP,
    MeasureLayout: nP
  }
}, xV = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function wV(e) {
  const t = xV.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
function nm(e, t, n = 1) {
  const [r, o] = wV(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return Hk(a) ? parseFloat(a) : a;
  } else
    return Uh(o) ? nm(o, t, n + 1) : o;
}
function CV(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element))
    return { target: t, transitionEnd: n };
  n && (n = { ...n }), e.values.forEach((o) => {
    const i = o.get();
    if (!Uh(i))
      return;
    const a = nm(i, r);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Uh(i))
      continue;
    const a = nm(i, r);
    a && (t[o] = a, n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const kV = /* @__PURE__ */ new Set([
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
]), cP = (e) => kV.has(e), PV = (e) => Object.keys(e).some(cP), C1 = (e) => e === ti || e === ne, k1 = (e, t) => parseFloat(e.split(", ")[t]), P1 = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return k1(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/);
    return i ? k1(i[1], e) : 0;
  }
}, TV = /* @__PURE__ */ new Set(["x", "y", "z"]), EV = yl.filter((e) => !TV.has(e));
function _V(e) {
  const t = [];
  return EV.forEach((n) => {
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
  x: P1(4, 13),
  y: P1(5, 14)
};
pa.translateX = pa.x;
pa.translateY = pa.y;
const OV = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
    s[u] = pa[u](r, i);
  }), t.render();
  const l = t.measureViewportBox();
  return n.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = pa[u](l, i);
  }), e;
}, MV = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(cP);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = n[l], d = Ba(c);
    const f = t[l];
    let p;
    if (Lc(f)) {
      const y = f.length, g = f[0] === null ? 1 : 0;
      c = f[g], d = Ba(c);
      for (let S = g; S < y && f[S] !== null; S++)
        p ? ng(Ba(f[S]) === p) : p = Ba(f[S]);
    } else
      p = Ba(f);
    if (d !== p)
      if (C1(d) && C1(p)) {
        const y = u.get();
        typeof y == "string" && u.set(parseFloat(y)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === ne && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = _V(e), a = !0), s.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = OV(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), Bd && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function IV(e, t, n, r) {
  return PV(t) ? MV(e, t, n, r) : { target: t, transitionEnd: r };
}
const RV = (e, t, n, r) => {
  const o = CV(e, t, r);
  return t = o.target, r = o.transitionEnd, IV(e, t, n, r);
}, rm = { current: null }, dP = { current: !1 };
function $V() {
  if (dP.current = !0, !!Bd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => rm.current = e.matches;
      e.addListener(t), t();
    } else
      rm.current = !1;
}
function AV(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o], a = n[o];
    if (Bt(i))
      e.addValue(o, i), Vc(r) && r.add(o);
    else if (Bt(a))
      e.addValue(o, fa(i, { owner: e })), Vc(r) && r.remove(o);
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
const T1 = /* @__PURE__ */ new WeakMap(), fP = Object.keys(el), DV = fP.length, E1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], FV = Kv.length;
class LV {
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => _e.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = n.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Hd(n), this.isVariantNode = qC(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Bt(f) && (f.set(s[d], !1), Vc(u) && u.add(d));
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
    this.current = t, T1.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), dP.current || $V(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : rm.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    T1.delete(this.current), this.projection && this.projection.unmount(), Tr(this.notifyUpdate), Tr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    for (let l = 0; l < DV; l++) {
      const u = fP[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = el[u];
      f && (a = f), c(n) && (!this.features[u] && d && (this.features[u] = new d(this)), p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: p } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && $i(d),
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
    for (let r = 0; r < E1.length; r++) {
      const o = E1[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = AV(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let r = 0; r < FV; r++) {
      const o = Kv[r], i = this.props[o];
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
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = tg(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Bt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new dg()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class pP extends LV {
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
    let a = eN(r, t || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i) {
      Zj(this, r, a);
      const s = RV(this, r, a, n);
      n = s.transitionEnd, r = s.target;
    }
    return {
      transition: t,
      transitionEnd: n,
      ...r
    };
  }
}
function zV(e) {
  return window.getComputedStyle(e);
}
class jV extends pP {
  readValueFromInstance(t, n) {
    if (ei.has(n)) {
      const r = ag(n);
      return r && r.default || 0;
    } else {
      const r = zV(t), o = (JC(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Jk(t, n);
  }
  build(t, n, r, o) {
    Xv(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return eg(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Bt(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(t, n, r, o) {
    ik(t, n, r, o);
  }
}
class NV extends pP {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ei.has(n)) {
      const r = ag(n);
      return r && r.default || 0;
    }
    return n = ak.has(n) ? n : Uv(n), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Xe();
  }
  scrapeMotionValuesFromProps(t, n) {
    return lk(t, n);
  }
  build(t, n, r, o) {
    Zv(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    sk(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Jv(t.tagName), super.mount(t);
  }
}
const VV = (e, t) => qv(e) ? new NV(t, { enableHardwareAcceleration: !1 }) : new jV(t, { enableHardwareAcceleration: !0 }), BV = {
  layout: {
    ProjectionNode: uP,
    MeasureLayout: nP
  }
}, WV = {
  ...hN,
  ...Fz,
  ...SV,
  ...BV
}, or = /* @__PURE__ */ U3((e, t) => Cz(e, t, WV, VV));
function hP() {
  const e = v.useRef(!1);
  return Hv(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function HV() {
  const e = hP(), [t, n] = v.useState(0), r = v.useCallback(() => {
    e.current && n(t + 1);
  }, [t]);
  return [v.useCallback(() => _e.postRender(r), [r]), t];
}
class UV extends v.Component {
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
function GV({ children: e, isPresent: t }) {
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
  }, [t]), v.createElement(UV, { isPresent: t, childRef: r, sizeRef: o }, v.cloneElement(e, { ref: r }));
}
const xp = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = uk(KV), l = v.useId(), u = v.useMemo(
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
  }, [n]), a === "popLayout" && (e = v.createElement(GV, { isPresent: n }, e)), v.createElement(gl.Provider, { value: u }, e);
};
function KV() {
  return /* @__PURE__ */ new Map();
}
function YV(e) {
  return v.useEffect(() => () => e(), []);
}
const Eo = (e) => e.key || "";
function qV(e, t) {
  e.forEach((n) => {
    const r = Eo(n);
    t.set(r, n);
  });
}
function XV(e) {
  const t = [];
  return v.Children.forEach(e, (n) => {
    v.isValidElement(n) && t.push(n);
  }), t;
}
const ni = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = v.useContext(Yv).forceRender || HV()[0], l = hP(), u = XV(e);
  let c = u;
  const d = v.useRef(/* @__PURE__ */ new Map()).current, f = v.useRef(c), p = v.useRef(/* @__PURE__ */ new Map()).current, y = v.useRef(!0);
  if (Hv(() => {
    y.current = !1, qV(u, p), f.current = c;
  }), YV(() => {
    y.current = !0, p.clear(), d.clear();
  }), y.current)
    return v.createElement(v.Fragment, null, c.map((h) => v.createElement(xp, { key: Eo(h), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: i, mode: a }, h)));
  c = [...c];
  const g = f.current.map(Eo), S = u.map(Eo), m = g.length;
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
        const E = Array.from(p.keys()).filter((M) => !S.includes(M));
        if (E.forEach((M) => p.delete(M)), f.current = u.filter((M) => {
          const I = Eo(M);
          return (
            // filter out the node exiting
            I === b || // filter out the leftover children
            E.includes(I)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), r && r();
        }
      };
      P = v.createElement(xp, { key: Eo(x), isPresent: !1, onExitComplete: T, custom: t, presenceAffectsLayout: i, mode: a }, x), d.set(b, P);
    }
    c.splice(k, 0, P);
  }), c = c.map((h) => {
    const b = h.key;
    return d.has(b) ? h : v.createElement(xp, { key: Eo(h), isPresent: !0, presenceAffectsLayout: i, mode: a }, h);
  }), v.createElement(v.Fragment, null, d.size ? c : c.map((h) => v.cloneElement(h)));
};
var QV = {
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
}, mP = v.memo((e) => {
  const {
    id: t,
    message: n,
    onCloseComplete: r,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = QV,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = v.useState(s), p = FN();
  da(() => {
    p || r == null || r();
  }, [p]), da(() => {
    f(s);
  }, [s]);
  const y = () => f(null), g = () => f(s), S = () => {
    p && o();
  };
  v.useEffect(() => {
    p && i && o();
  }, [p, i, o]), D3(S, d);
  const m = v.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), h = v.useMemo(() => $3(a), [a]);
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
mP.displayName = "ToastComponent";
var _1 = {
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
  } = e, c = ae("chakra-icon", s), d = Jo("Icon", e), f = {
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
  }, y = r ?? _1.viewBox;
  if (n && typeof n != "string")
    return /* @__PURE__ */ w.jsx(X.svg, { as: n, ...p, ...u });
  const g = a ?? _1.path;
  return /* @__PURE__ */ w.jsx(X.svg, { verticalAlign: "middle", viewBox: y, ...p, ...u, children: g });
});
kn.displayName = "Icon";
function ZV(e) {
  return /* @__PURE__ */ w.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function JV(e) {
  return /* @__PURE__ */ w.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function O1(e) {
  return /* @__PURE__ */ w.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var eB = cC({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Yd = oe((e, t) => {
  const n = Jo("Spinner", e), {
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
    animation: `${eB} ${i} linear infinite`,
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
Yd.displayName = "Spinner";
var [tB, fg] = Je({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [nB, pg] = Je({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), vP = {
  info: { icon: JV, colorScheme: "blue" },
  warning: { icon: O1, colorScheme: "orange" },
  success: { icon: ZV, colorScheme: "green" },
  error: { icon: O1, colorScheme: "red" },
  loading: { icon: Yd, colorScheme: "blue" }
};
function rB(e) {
  return vP[e].colorScheme;
}
function oB(e) {
  return vP[e].icon;
}
var gP = oe(
  function(t, n) {
    const r = pg(), { status: o } = fg(), i = {
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
gP.displayName = "AlertDescription";
function yP(e) {
  const { status: t } = fg(), n = oB(t), r = pg(), o = t === "loading" ? r.spinner : r.icon;
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
yP.displayName = "AlertIcon";
var bP = oe(
  function(t, n) {
    const r = pg(), { status: o } = fg();
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
bP.displayName = "AlertTitle";
var SP = oe(function(t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...a } = Cn(t), s = (r = t.colorScheme) != null ? r : rB(o), l = Ct("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ w.jsx(tB, { value: { status: o }, children: /* @__PURE__ */ w.jsx(nB, { value: l, children: /* @__PURE__ */ w.jsx(
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
SP.displayName = "Alert";
function iB(e) {
  return /* @__PURE__ */ w.jsx(kn, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var qd = oe(
  function(t, n) {
    const r = Jo("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = Cn(t), l = {
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
        children: o || /* @__PURE__ */ w.jsx(iB, { width: "1em", height: "1em" })
      }
    );
  }
);
qd.displayName = "CloseButton";
var aB = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, ks = sB(aB);
function sB(e) {
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
      const a = lB(o, i), { position: s, id: l } = a;
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
        const s = { ...a }, { position: l, index: u } = Cb(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: cB(i)
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
        const a = UC(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!Cb(ks.getState(), o).position
  };
}
var M1 = 0;
function lB(e, t = {}) {
  var n, r;
  M1 += 1;
  const o = (n = t.id) != null ? n : M1, i = (r = t.position) != null ? r : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => ks.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var uB = (e) => {
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
    SP,
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
        /* @__PURE__ */ w.jsx(yP, { children: u }),
        /* @__PURE__ */ w.jsxs(X.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ w.jsx(bP, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ w.jsx(gP, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ w.jsx(
          qd,
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
function cB(e = {}) {
  const { render: t, toastComponent: n = uB } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ w.jsx(n, { ...o, ...e });
}
var [dB, CY] = Je({
  name: "ToastOptionsContext",
  strict: !1
}), fB = (e) => {
  const t = v.useSyncExternalStore(
    ks.subscribe,
    ks.getState,
    ks.getState
  ), {
    motionVariants: n,
    component: r = mP,
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
        style: A3(s),
        children: /* @__PURE__ */ w.jsx(ni, { initial: !1, children: l.map((u) => /* @__PURE__ */ w.jsx(
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
}, pB = (e) => function({
  children: n,
  theme: r = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ w.jsxs(I3, { theme: r, ...i, children: [
    /* @__PURE__ */ w.jsx(dB, { value: o == null ? void 0 : o.defaultOptions, children: n }),
    /* @__PURE__ */ w.jsx(fB, { ...o })
  ] });
}, hB = pB(LC), mB = Object.defineProperty, vB = (e, t, n) => t in e ? mB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Be = (e, t, n) => (vB(e, typeof t != "symbol" ? t + "" : t, n), n);
function I1(e) {
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
var gB = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function R1(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function $1(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var om = typeof window < "u" ? v.useLayoutEffect : v.useEffect, Wc = (e) => e, yB = class {
  constructor() {
    Be(this, "descendants", /* @__PURE__ */ new Map()), Be(this, "register", (e) => {
      if (e != null)
        return gB(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), Be(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = I1(Array.from(this.descendants.keys()));
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
      const n = R1(e, this.count(), t);
      return this.item(n);
    }), Be(this, "nextEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = R1(
        r,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), Be(this, "prev", (e, t = !0) => {
      const n = $1(e, this.count() - 1, t);
      return this.item(n);
    }), Be(this, "prevEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = $1(
        r,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), Be(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const n = Array.from(this.descendants.keys()).concat(e), r = I1(n);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(r);
    });
  }
};
function bB(e, t) {
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
      bB(n, t);
    });
  };
}
function SB(...e) {
  return v.useMemo(() => at(...e), e);
}
function xB() {
  const e = v.useRef(new yB());
  return om(() => () => e.current.destroy()), e.current;
}
var [wB, xP] = Je({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function CB(e) {
  const t = xP(), [n, r] = v.useState(-1), o = v.useRef(null);
  om(() => () => {
    o.current && t.unregister(o.current);
  }, []), om(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    n != a && !Number.isNaN(a) && r(a);
  });
  const i = Wc(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: at(i, o)
  };
}
function wP() {
  return [
    Wc(wB),
    () => Wc(xP()),
    () => xB(),
    (o) => CB(o)
  ];
}
var [kB, Xd] = Je({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
}), [PB, hg] = Je({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
}), [
  TB,
  kY,
  EB,
  _B
] = wP(), CP = oe(
  function(t, n) {
    const { getButtonProps: r } = hg(), o = r(t, n), a = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...Xd().button
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
CP.displayName = "AccordionButton";
function OB(e) {
  const {
    value: t,
    defaultValue: n,
    onChange: r,
    shouldUpdate: o = (f, p) => f !== p
  } = e, i = to(r), a = to(o), [s, l] = v.useState(n), u = t !== void 0, c = u ? t : s, d = to(
    (f) => {
      const y = typeof f == "function" ? f(c) : f;
      a(c, y) && (u || l(y), i(y));
    },
    [u, i, c, a]
  );
  return [c, d];
}
function MB(e) {
  const {
    onChange: t,
    defaultIndex: n,
    index: r,
    allowMultiple: o,
    allowToggle: i,
    ...a
  } = e;
  $B(e), AB(e);
  const s = EB(), [l, u] = v.useState(-1);
  v.useEffect(() => () => {
    u(-1);
  }, []);
  const [c, d] = OB({
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
var [IB, mg] = Je({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function RB(e) {
  const { isDisabled: t, isFocusable: n, id: r, ...o } = e, { getAccordionItemProps: i, setFocusedIndex: a } = mg(), s = v.useRef(null), l = v.useId(), u = r ?? l, c = `accordion-button-${u}`, d = `accordion-panel-${u}`;
  DB(e);
  const { register: f, index: p, descendants: y } = _B({
    disabled: t && !n
  }), { isOpen: g, onChange: S } = i(
    p === -1 ? null : p
  );
  FB({ isOpen: g, isDisabled: t });
  const m = () => {
    S == null || S(!0);
  }, h = () => {
    S == null || S(!1);
  }, b = v.useCallback(() => {
    S == null || S(!g), a(p);
  }, [p, a, g, S]), x = v.useCallback(
    (E) => {
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
      }[E.key];
      I && (E.preventDefault(), I(E));
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
        "aria-expanded": !!g,
        "aria-controls": d,
        onClick: Le(M.onClick, b),
        onFocus: Le(M.onFocus, k),
        onKeyDown: Le(M.onKeyDown, x)
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
  ), T = v.useCallback(
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
function $B(e) {
  const t = e.index || e.defaultIndex, n = t != null && !Array.isArray(t) && e.allowMultiple;
  ml({
    condition: !!n,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`
  });
}
function AB(e) {
  ml({
    condition: !!(e.allowMultiple && e.allowToggle),
    message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
  });
}
function DB(e) {
  ml({
    condition: !!(e.isFocusable && !e.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function FB(e) {
  ml({
    condition: e.isOpen && !!e.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}
function kP(e) {
  const { isOpen: t, isDisabled: n } = hg(), { reduceMotion: r } = mg(), o = ae("chakra-accordion__icon", e.className), i = Xd(), a = {
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
kP.displayName = "AccordionIcon";
var PP = oe(
  function(t, n) {
    const { children: r, className: o } = t, { htmlProps: i, ...a } = RB(t), l = {
      ...Xd().container,
      overflowAnchor: "none"
    }, u = v.useMemo(() => a, [a]);
    return /* @__PURE__ */ w.jsx(PB, { value: u, children: /* @__PURE__ */ w.jsx(
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
PP.displayName = "AccordionItem";
var Fo = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Ha = {
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
function im(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Ha.slideRight;
    case "left":
      return Ha.slideLeft;
    case "bottom":
      return Ha.slideDown;
    case "top":
      return Ha.slideUp;
    default:
      return Ha.slideRight;
  }
}
var Bo = {
  enter: {
    duration: 0.2,
    ease: Fo.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Fo.easeIn
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
}, LB = (e) => e != null && parseInt(e.toString(), 10) > 0, A1 = {
  exit: {
    height: { duration: 0.2, ease: Fo.ease },
    opacity: { duration: 0.3, ease: Fo.ease }
  },
  enter: {
    height: { duration: 0.3, ease: Fo.ease },
    opacity: { duration: 0.4, ease: Fo.ease }
  }
}, zB = {
  exit: ({
    animateOpacity: e,
    startingHeight: t,
    transition: n,
    transitionEnd: r,
    delay: o
  }) => {
    var i;
    return {
      ...e && { opacity: LB(t) ? 1 : 0 },
      height: t,
      transitionEnd: r == null ? void 0 : r.exit,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(A1.exit, o)
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
      transition: (i = n == null ? void 0 : n.enter) != null ? i : Dn.enter(A1.enter, o)
    };
  }
}, TP = v.forwardRef(
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
    }, []), ml({
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
    }, S = r ? n : !0, m = n || r ? "enter" : "exit";
    return /* @__PURE__ */ w.jsx(ni, { initial: !1, custom: g, children: S && /* @__PURE__ */ w.jsx(
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
        variants: zB,
        initial: r ? "exit" : !1,
        animate: m,
        exit: "exit"
      }
    ) });
  }
);
TP.displayName = "Collapse";
var jB = {
  enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 1,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Dn.enter(Bo.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 0,
      transition: (r = e == null ? void 0 : e.exit) != null ? r : Dn.exit(Bo.exit, n),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, EP = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: jB
}, NB = v.forwardRef(function(t, n) {
  const {
    unmountOnExit: r,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || r ? "enter" : "exit", d = r ? o && r : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ w.jsx(ni, { custom: f, children: d && /* @__PURE__ */ w.jsx(
    or.div,
    {
      ref: n,
      className: ae("chakra-fade", i),
      custom: f,
      ...EP,
      animate: c,
      ...u
    }
  ) });
});
NB.displayName = "Fade";
var VB = {
  exit: ({ reverse: e, initialScale: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { scale: t, ...r == null ? void 0 : r.exit } },
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(Bo.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      scale: 1,
      transition: (r = t == null ? void 0 : t.enter) != null ? r : Dn.enter(Bo.enter, n),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, _P = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: VB
}, BB = v.forwardRef(
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
    return /* @__PURE__ */ w.jsx(ni, { custom: y, children: f && /* @__PURE__ */ w.jsx(
      or.div,
      {
        ref: n,
        className: ae("chakra-offset-slide", s),
        ..._P,
        animate: p,
        custom: y,
        ...d
      }
    ) });
  }
);
BB.displayName = "ScaleFade";
var WB = {
  initial: ({ offsetX: e, offsetY: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(Bo.exit, o),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Dn.enter(Bo.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: n, transitionEnd: r, reverse: o, delay: i }) => {
    var a;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (a = n == null ? void 0 : n.exit) != null ? a : Dn.exit(Bo.exit, i),
      ...o ? { ...s, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { ...s, ...r == null ? void 0 : r.exit } }
    };
  }
}, os = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: WB
}, HB = v.forwardRef(
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
    return /* @__PURE__ */ w.jsx(ni, { custom: g, children: p && /* @__PURE__ */ w.jsx(
      or.div,
      {
        ref: n,
        className: ae("chakra-offset-slide", a),
        custom: g,
        ...os,
        animate: y,
        ...f
      }
    ) });
  }
);
HB.displayName = "SlideFade";
var D1 = {
  exit: {
    duration: 0.15,
    ease: Fo.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, UB = {
  exit: ({ direction: e, transition: t, transitionEnd: n, delay: r }) => {
    var o;
    const { exit: i } = im({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : Dn.exit(D1.exit, r),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: n, delay: r }) => {
    var o;
    const { enter: i } = im({ direction: e });
    return {
      ...i,
      transition: (o = n == null ? void 0 : n.enter) != null ? o : Dn.enter(D1.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, OP = v.forwardRef(function(t, n) {
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
  } = t, p = im({ direction: r }), y = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), g = i ? a && i : !0, S = a || i ? "enter" : "exit", m = { transitionEnd: u, transition: l, direction: r, delay: c };
  return /* @__PURE__ */ w.jsx(ni, { custom: m, children: g && /* @__PURE__ */ w.jsx(
    or.div,
    {
      ...f,
      ref: n,
      initial: "exit",
      className: ae("chakra-slide", s),
      animate: S,
      exit: "exit",
      custom: m,
      variants: UB,
      style: y,
      ...d
    }
  ) });
});
OP.displayName = "Slide";
var MP = oe(
  function(t, n) {
    const { className: r, motionProps: o, ...i } = t, { reduceMotion: a } = mg(), { getPanelProps: s, isOpen: l } = hg(), u = s(i, n), c = ae("chakra-accordion__panel", r), d = Xd();
    a || delete u.hidden;
    const f = /* @__PURE__ */ w.jsx(X.div, { ...u, __css: d.panel, className: c });
    return a ? f : /* @__PURE__ */ w.jsx(TP, { in: l, ...o, children: f });
  }
);
MP.displayName = "AccordionPanel";
var IP = oe(function({ children: t, reduceMotion: n, ...r }, o) {
  const i = Ct("Accordion", r), a = Cn(r), { htmlProps: s, descendants: l, ...u } = MB(a), c = v.useMemo(
    () => ({ ...u, reduceMotion: !!n }),
    [u, n]
  );
  return /* @__PURE__ */ w.jsx(TB, { value: l, children: /* @__PURE__ */ w.jsx(IB, { value: c, children: /* @__PURE__ */ w.jsx(kB, { value: i, children: /* @__PURE__ */ w.jsx(
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
IP.displayName = "Accordion";
function GB(e) {
  return v.Children.toArray(e).filter(
    (t) => v.isValidElement(t)
  );
}
var [PY, KB] = Je({
  strict: !1,
  name: "ButtonGroupContext"
});
function YB(e) {
  const [t, n] = v.useState(!e);
  return { ref: v.useCallback((i) => {
    i && n(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function am(e) {
  const { children: t, className: n, ...r } = e, o = v.isValidElement(t) ? v.cloneElement(t, {
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
am.displayName = "ButtonIcon";
function sm(e) {
  const {
    label: t,
    placement: n,
    spacing: r = "0.5rem",
    children: o = /* @__PURE__ */ w.jsx(Yd, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = ae("chakra-button__spinner", i), u = n === "start" ? "marginEnd" : "marginStart", c = v.useMemo(
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
sm.displayName = "ButtonSpinner";
var Fn = oe((e, t) => {
  const n = KB(), r = Jo("Button", { ...n, ...e }), {
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
    as: S,
    ...m
  } = Cn(e), h = v.useMemo(() => {
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
  }, [r, n]), { ref: b, type: x } = YB(S), k = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ w.jsxs(
    X.button,
    {
      ref: SB(t, b),
      as: S,
      type: f ?? x,
      "data-active": dn(a),
      "data-loading": dn(i),
      __css: h,
      className: ae("chakra-button", g),
      ...m,
      disabled: o || i,
      children: [
        i && y === "start" && /* @__PURE__ */ w.jsx(
          sm,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ w.jsx(X.span, { opacity: 0, children: /* @__PURE__ */ w.jsx(F1, { ...k }) }) : /* @__PURE__ */ w.jsx(F1, { ...k }),
        i && y === "end" && /* @__PURE__ */ w.jsx(
          sm,
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
function F1(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    t && /* @__PURE__ */ w.jsx(am, { marginEnd: o, children: t }),
    r,
    n && /* @__PURE__ */ w.jsx(am, { marginStart: o, children: n })
  ] });
}
var nl = oe(
  (e, t) => {
    const { icon: n, children: r, isRound: o, "aria-label": i, ...a } = e, s = n || r, l = v.isValidElement(s) ? v.cloneElement(s, {
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
nl.displayName = "IconButton";
var [qB, XB] = Je({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [QB, RP] = Je({
  strict: !1,
  name: "FormControlContext"
});
function ZB(e) {
  const {
    id: t,
    isRequired: n,
    isInvalid: r,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = v.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = v.useState(!1), [y, g] = v.useState(!1), [S, m] = v.useState(!1), h = v.useCallback(
    (T = {}, E = null) => ({
      id: d,
      ...T,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: at(E, (M) => {
        M && g(!0);
      })
    }),
    [d]
  ), b = v.useCallback(
    (T = {}, E = null) => ({
      ...T,
      ref: E,
      "data-focus": dn(S),
      "data-disabled": dn(o),
      "data-invalid": dn(r),
      "data-readonly": dn(i),
      id: T.id !== void 0 ? T.id : u,
      htmlFor: T.htmlFor !== void 0 ? T.htmlFor : l
    }),
    [l, o, S, r, i, u]
  ), x = v.useCallback(
    (T = {}, E = null) => ({
      id: c,
      ...T,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: at(E, (M) => {
        M && p(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), k = v.useCallback(
    (T = {}, E = null) => ({
      ...T,
      ...a,
      ref: E,
      role: "group",
      "data-focus": dn(S),
      "data-disabled": dn(o),
      "data-invalid": dn(r),
      "data-readonly": dn(i)
    }),
    [a, o, S, r, i]
  ), P = v.useCallback(
    (T = {}, E = null) => ({
      ...T,
      ref: E,
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
    hasHelpText: y,
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
var JB = oe(
  function(t, n) {
    const r = Ct("Form", t), o = Cn(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = ZB(o), l = ae("chakra-form-control", t.className);
    return /* @__PURE__ */ w.jsx(QB, { value: s, children: /* @__PURE__ */ w.jsx(qB, { value: r, children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...i({}, n),
        className: l,
        __css: r.container
      }
    ) }) });
  }
);
JB.displayName = "FormControl";
var e6 = oe(
  function(t, n) {
    const r = RP(), o = XB(), i = ae("chakra-form__helper-text", t.className);
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
e6.displayName = "FormHelperText";
function $P(e) {
  const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...i } = t6(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": Hf(n),
    "aria-required": Hf(o),
    "aria-readonly": Hf(r)
  };
}
function t6(e) {
  var t, n, r;
  const o = RP(), {
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
  } = e, S = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && S.push(o.feedbackId), o != null && o.hasHelpText && S.push(o.helpTextId), {
    ...g,
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
function vg(e, t, n, r) {
  const o = to(n);
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
function n6(e) {
  return "current" in e;
}
var AP = () => typeof window < "u";
function r6() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var o6 = (e) => AP() && e.test(navigator.vendor), i6 = (e) => AP() && e.test(r6()), a6 = () => i6(/mac|iphone|ipad|ipod/i), s6 = () => a6() && o6(/apple/i);
function l6(e) {
  const { ref: t, elements: n, enabled: r } = e, o = () => {
    var i, a;
    return (a = (i = t.current) == null ? void 0 : i.ownerDocument) != null ? a : document;
  };
  vg(o, "pointerdown", (i) => {
    if (!s6() || !r)
      return;
    const a = i.target, l = (n ?? [t]).some((u) => {
      const c = n6(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(a)) || c === a;
    });
    o().activeElement !== a && l && (i.preventDefault(), a.focus());
  });
}
function DP(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var FP = { exports: {} }, u6 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", c6 = u6, d6 = c6;
function LP() {
}
function zP() {
}
zP.resetWarningCache = LP;
var f6 = function() {
  function e(r, o, i, a, s, l) {
    if (l !== d6) {
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
    checkPropTypes: zP,
    resetWarningCache: LP
  };
  return n.PropTypes = n, n;
};
FP.exports = f6();
var p6 = FP.exports;
const wo = /* @__PURE__ */ sl(p6);
var lm = "data-focus-lock", jP = "data-focus-lock-disabled", h6 = "data-no-focus-lock", m6 = "data-autofocus-inside", v6 = "data-no-autofocus";
function g6(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function y6(e, t) {
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
function NP(e, t) {
  return y6(t || null, function(n) {
    return e.forEach(function(r) {
      return g6(r, n);
    });
  });
}
var wp = {
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
function VP(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function b6(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function BP(e) {
  return e;
}
function WP(e, t) {
  t === void 0 && (t = BP);
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
function gg(e, t) {
  return t === void 0 && (t = BP), WP(e, t);
}
function HP(e) {
  e === void 0 && (e = {});
  var t = WP(null);
  return t.options = qn({ async: !0, ssr: !1 }, e), t;
}
var UP = function(e) {
  var t = e.sideCar, n = VP(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, qn({}, n));
};
UP.isSideCarExport = !0;
function S6(e, t) {
  return e.useMedium(t), UP;
}
var GP = gg({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), KP = gg(), x6 = gg(), w6 = HP({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), C6 = [], yg = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, o = v.useState(), i = o[0], a = o[1], s = v.useRef(), l = v.useRef(!1), u = v.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, y = t.crossFrame, g = t.autoFocus;
  t.allowTextSelection;
  var S = t.group, m = t.className, h = t.whiteList, b = t.hasPositiveIndices, x = t.shards, k = x === void 0 ? C6 : x, P = t.as, T = P === void 0 ? "div" : P, E = t.lockProps, M = E === void 0 ? {} : E, I = t.sideCar, D = t.returnFocus, G = t.focusOptions, H = t.onActivation, L = t.onDeactivation, W = v.useState({}), K = W[0], $ = v.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && H && H(s.current), l.current = !0;
  }, [H]), A = v.useCallback(function() {
    l.current = !1, L && L(s.current);
  }, [L]);
  v.useEffect(function() {
    d || (u.current = null);
  }, []);
  var z = v.useCallback(function(se) {
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
    l.current && GP.useMedium(se);
  }, []), V = KP.useMedium, Y = v.useCallback(function(se) {
    s.current !== se && (s.current = se, a(se));
  }, []), j = q((r = {}, r[jP] = d && "disabled", r[lm] = S, r), M), te = f !== !0, le = te && f !== "tail", ie = NP([n, Y]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, te && [
    // nearest focus guard
    /* @__PURE__ */ v.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: wp
    }),
    // first tabbed element guard
    b ? /* @__PURE__ */ v.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: wp
    }) : null
  ], !d && /* @__PURE__ */ v.createElement(I, {
    id: K,
    sideCar: w6,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: y,
    autoFocus: g,
    whiteList: h,
    shards: k,
    onActivation: $,
    onDeactivation: A,
    returnFocus: z,
    focusOptions: G
  }), /* @__PURE__ */ v.createElement(T, q({
    ref: ie
  }, j, {
    className: m,
    onBlur: V,
    onFocus: U
  }), c), le && /* @__PURE__ */ v.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: wp
  }));
});
yg.propTypes = {};
yg.defaultProps = {
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
const YP = yg;
function Hc(e, t) {
  return Hc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Hc(e, t);
}
function k6(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Hc(e, t);
}
function qo(e) {
  "@babel/helpers - typeof";
  return qo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qo(e);
}
function P6(e, t) {
  if (qo(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (qo(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qP(e) {
  var t = P6(e, "string");
  return qo(t) === "symbol" ? t : String(t);
}
function Li(e, t, n) {
  return t = qP(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function T6(e, t) {
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
      k6(c, u);
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
    return Li(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var ir = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Uc = function(e) {
  return Array.isArray(e) ? e : [e];
}, XP = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, E6 = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, QP = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, ZP = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, _6 = function(e, t) {
  return !e || ZP(e) || !E6(e) && t(QP(e));
}, JP = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = _6(t, JP.bind(void 0, e));
  return e.set(t, r), r;
}, O6 = function(e, t) {
  return e && !ZP(e) ? R6(e) ? t(QP(e)) : !1 : !0;
}, e2 = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = O6(t, e2.bind(void 0, e));
  return e.set(t, r), r;
}, t2 = function(e) {
  return e.dataset;
}, M6 = function(e) {
  return e.tagName === "BUTTON";
}, n2 = function(e) {
  return e.tagName === "INPUT";
}, r2 = function(e) {
  return n2(e) && e.type === "radio";
}, I6 = function(e) {
  return !((n2(e) || M6(e)) && (e.type === "hidden" || e.disabled));
}, R6 = function(e) {
  var t = e.getAttribute(v6);
  return ![!0, "true", ""].includes(t);
}, bg = function(e) {
  var t;
  return !!(e && (!((t = t2(e)) === null || t === void 0) && t.focusGuard));
}, Gc = function(e) {
  return !bg(e);
}, $6 = function(e) {
  return !!e;
}, A6 = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, o2 = function(e, t, n) {
  return ir(e).map(function(r, o) {
    return {
      node: r,
      index: o,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(A6);
}, D6 = [
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
], Sg = D6.join(","), F6 = "".concat(Sg, ", [data-focus-guard]"), i2 = function(e, t) {
  return ir((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? F6 : Sg) ? [r] : [], i2(r));
  }, []);
}, L6 = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? Qd([e.contentDocument.body], t) : [e];
}, Qd = function(e, t) {
  return e.reduce(function(n, r) {
    var o, i = i2(r, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return L6(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      r.parentNode ? ir(r.parentNode.querySelectorAll(Sg)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, z6 = function(e) {
  var t = e.querySelectorAll("[".concat(m6, "]"));
  return ir(t).map(function(n) {
    return Qd([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, xg = function(e, t) {
  return ir(e).filter(function(n) {
    return JP(t, n);
  }).filter(function(n) {
    return I6(n);
  });
}, L1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), ir(e).filter(function(n) {
    return e2(t, n);
  });
}, um = function(e, t, n) {
  return o2(xg(Qd(e, n), t), !0, n);
}, z1 = function(e, t) {
  return o2(xg(Qd(e), t), !1);
}, j6 = function(e, t) {
  return xg(z6(e), t);
}, Xi = function(e, t) {
  return e.shadowRoot ? Xi(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : ir(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return o ? Xi(o, t) : !1;
    }
    return Xi(n, t);
  });
}, N6 = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var o = r + 1; o < n; o += 1) {
      var i = e[r].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, a2 = function(e) {
  return e.parentNode ? a2(e.parentNode) : e;
}, wg = function(e) {
  var t = Uc(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var o = r.getAttribute(lm);
    return n.push.apply(n, o ? N6(ir(a2(r).querySelectorAll("[".concat(lm, '="').concat(o, '"]:not([').concat(jP, '="disabled"])')))) : [r]), n;
  }, []);
}, V6 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, rl = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? rl(t.shadowRoot) : t instanceof HTMLIFrameElement && V6(function() {
      return t.contentWindow.document;
    }) ? rl(t.contentWindow.document) : t;
  }
}, B6 = function(e, t) {
  return e === t;
}, W6 = function(e, t) {
  return !!ir(e.querySelectorAll("iframe")).some(function(n) {
    return B6(n, t);
  });
}, s2 = function(e, t) {
  return t === void 0 && (t = rl(XP(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : wg(e).some(function(n) {
    return Xi(n, t) || W6(n, t);
  });
}, H6 = function(e) {
  e === void 0 && (e = document);
  var t = rl(e);
  return t ? ir(e.querySelectorAll("[".concat(h6, "]"))).some(function(n) {
    return Xi(n, t);
  }) : !1;
}, U6 = function(e, t) {
  return t.filter(r2).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, Cg = function(e, t) {
  return r2(e) && e.name ? U6(e, t) : e;
}, G6 = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(Cg(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, j1 = function(e) {
  return e[0] && e.length > 1 ? Cg(e[0], e) : e[0];
}, N1 = function(e, t) {
  return e.length > 1 ? e.indexOf(Cg(e[t], e)) : t;
}, l2 = "NEW_FOCUS", K6 = function(e, t, n, r) {
  var o = e.length, i = e[0], a = e[o - 1], s = bg(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var l = n !== void 0 ? t.indexOf(n) : -1, u = r ? t.indexOf(r) : l, c = r ? e.indexOf(r) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), y = G6(t), g = n !== void 0 ? y.indexOf(n) : -1, S = g - (r ? y.indexOf(r) : l), m = N1(e, 0), h = N1(e, o - 1);
    if (l === -1 || c === -1)
      return l2;
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
}, Y6 = function(e) {
  return function(t) {
    var n, r = (n = t2(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, q6 = function(e, t, n) {
  var r = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = L1(r.filter(Y6(n)));
  return o && o.length ? j1(o) : j1(L1(t));
}, cm = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && cm(e.parentNode.host || e.parentNode, t), t;
}, Cp = function(e, t) {
  for (var n = cm(e), r = cm(t), o = 0; o < n.length; o += 1) {
    var i = n[o];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, u2 = function(e, t, n) {
  var r = Uc(e), o = Uc(t), i = r[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = Cp(a || s, s) || a, n.filter(Boolean).forEach(function(l) {
      var u = Cp(i, l);
      u && (!a || Xi(u, a) ? a = u : a = Cp(u, a));
    });
  }), a;
}, X6 = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(j6(r, t));
  }, []);
}, Q6 = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter($6);
}, Z6 = function(e, t) {
  var n = rl(Uc(e).length > 0 ? document : XP(e).ownerDocument), r = wg(e).filter(Gc), o = u2(n || e, e, r), i = /* @__PURE__ */ new Map(), a = z1(r, i), s = um(r, i).filter(function(p) {
    var y = p.node;
    return Gc(y);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = z1([o], i).map(function(p) {
      var y = p.node;
      return y;
    }), u = Q6(l, s), c = u.map(function(p) {
      var y = p.node;
      return y;
    }), d = K6(c, l, n, t);
    if (d === l2) {
      var f = q6(a, c, X6(r, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, J6 = function(e) {
  var t = wg(e).filter(Gc), n = u2(e, e, t), r = /* @__PURE__ */ new Map(), o = um([n], r, !0), i = um(t, r).filter(function(a) {
    var s = a.node;
    return Gc(s);
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
      guard: bg(s)
    };
  });
}, e9 = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, kp = 0, Pp = !1, c2 = function(e, t, n) {
  n === void 0 && (n = {});
  var r = Z6(e, t);
  if (!Pp && r) {
    if (kp > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Pp = !0, setTimeout(function() {
        Pp = !1;
      }, 1);
      return;
    }
    kp++, e9(r.node, n.focusOptions), kp--;
  }
};
function kg(e) {
  setTimeout(e, 1);
}
var t9 = function() {
  return document && document.activeElement === document.body;
}, n9 = function() {
  return t9() || H6();
}, Qi = null, zi = null, Zi = null, ol = !1, r9 = function() {
  return !0;
}, o9 = function(t) {
  return (Qi.whiteList || r9)(t);
}, i9 = function(t, n) {
  Zi = {
    observerNode: t,
    portaledElement: n
  };
}, a9 = function(t) {
  return Zi && Zi.portaledElement === t;
};
function V1(e, t, n, r) {
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
var s9 = function(t) {
  return t && "current" in t ? t.current : t;
}, l9 = function(t) {
  return t ? !!ol : ol === "meanwhile";
}, u9 = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, c9 = function(t, n) {
  return n.some(function(r) {
    return u9(t, r, r);
  });
}, Kc = function() {
  var t = !1;
  if (Qi) {
    var n = Qi, r = n.observed, o = n.persistentFocus, i = n.autoFocus, a = n.shards, s = n.crossFrame, l = n.focusOptions, u = r || Zi && Zi.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(s9).filter(Boolean));
      if ((!c || o9(c)) && (o || l9(s) || !n9() || !zi && i) && (u && !// active element is "inside" working area
      (s2(d) || // check for shadow-dom contained elements
      c && c9(c, d) || a9(c)) && (document && !zi && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = c2(d, zi, {
        focusOptions: l
      }), Zi = {})), ol = !1, zi = document && document.activeElement), document) {
        var f = document && document.activeElement, p = J6(d), y = p.map(function(g) {
          var S = g.node;
          return S;
        }).indexOf(f);
        y > -1 && (p.filter(function(g) {
          var S = g.guard, m = g.node;
          return S && m.dataset.focusAutoGuard;
        }).forEach(function(g) {
          var S = g.node;
          return S.removeAttribute("tabIndex");
        }), V1(y, p.length, 1, p), V1(y, -1, -1, p));
      }
    }
  }
  return t;
}, d2 = function(t) {
  Kc() && t && (t.stopPropagation(), t.preventDefault());
}, Pg = function() {
  return kg(Kc);
}, d9 = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || i9(r, n);
}, f9 = function() {
  return null;
}, f2 = function() {
  ol = "just", kg(function() {
    ol = "meanwhile";
  });
}, p9 = function() {
  document.addEventListener("focusin", d2), document.addEventListener("focusout", Pg), window.addEventListener("blur", f2);
}, h9 = function() {
  document.removeEventListener("focusin", d2), document.removeEventListener("focusout", Pg), window.removeEventListener("blur", f2);
};
function m9(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function v9(e) {
  var t = e.slice(-1)[0];
  t && !Qi && p9();
  var n = Qi, r = n && t && t.id === n.id;
  Qi = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (zi = null, (!r || n.observed !== t.observed) && t.onActivation(), Kc(), kg(Kc)) : (h9(), zi = null);
}
GP.assignSyncMedium(d9);
KP.assignMedium(Pg);
x6.assignMedium(function(e) {
  return e({
    moveFocusInside: c2,
    focusInside: s2
  });
});
const g9 = T6(m9, v9)(f9);
var p2 = /* @__PURE__ */ v.forwardRef(function(t, n) {
  return /* @__PURE__ */ v.createElement(YP, q({
    sideCar: g9,
    ref: n
  }, t));
}), h2 = YP.propTypes || {};
h2.sideCar;
DP(h2, ["sideCar"]);
p2.propTypes = {};
const B1 = p2;
function m2(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function v2(e) {
  var t;
  if (!m2(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function y9(e) {
  var t, n;
  return (n = (t = g2(e)) == null ? void 0 : t.defaultView) != null ? n : window;
}
function g2(e) {
  return m2(e) ? e.ownerDocument : document;
}
function b9(e) {
  return g2(e).activeElement;
}
var y2 = (e) => e.hasAttribute("tabindex"), S9 = (e) => y2(e) && e.tabIndex === -1;
function x9(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function b2(e) {
  return e.parentElement && b2(e.parentElement) ? !0 : e.hidden;
}
function w9(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function S2(e) {
  if (!v2(e) || b2(e) || x9(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in r ? r[t]() : w9(e) ? !0 : y2(e);
}
function C9(e) {
  return e ? v2(e) && S2(e) && !S9(e) : !1;
}
var k9 = [
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
], P9 = k9.join(), T9 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function x2(e) {
  const t = Array.from(
    e.querySelectorAll(P9)
  );
  return t.unshift(e), t.filter((n) => S2(n) && T9(n));
}
var W1, E9 = (W1 = B1.default) != null ? W1 : B1, w2 = (e) => {
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
    t != null && t.current ? t.current.focus() : r != null && r.current && x2(r.current).length === 0 && requestAnimationFrame(() => {
      var y;
      (y = r.current) == null || y.focus();
    });
  }, [t, r]), d = v.useCallback(() => {
    var p;
    (p = n == null ? void 0 : n.current) == null || p.focus();
  }, [n]), f = o && !n;
  return /* @__PURE__ */ w.jsx(
    E9,
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
w2.displayName = "FocusLock";
var _9 = JL ? v.useLayoutEffect : v.useEffect;
function H1(e, t = []) {
  const n = v.useRef(e);
  return _9(() => {
    n.current = e;
  }), v.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function O9(e, t) {
  const n = v.useId();
  return v.useMemo(
    () => e || [t, n].filter(Boolean).join("-"),
    [e, t, n]
  );
}
function M9(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < "u" ? e : t];
}
function I9(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = H1(n), a = H1(t), [s, l] = v.useState(e.defaultIsOpen || !1), [u, c] = M9(r, s), d = O9(o, "disclosure"), f = v.useCallback(() => {
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
      onClick: o3(g.onClick, y)
    }),
    getDisclosureProps: (g = {}) => ({
      ...g,
      hidden: !c,
      id: d
    })
  };
}
var Zd = oe(function(t, n) {
  const { htmlSize: r, ...o } = t, i = Ct("Input", o), a = Cn(o), s = $P(a), l = ae("chakra-input", t.className);
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
Zd.displayName = "Input";
Zd.id = "Input";
var C2 = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function R9(e, t) {
  return Array.isArray(e) ? e.map((n) => n === null ? null : t(n)) : zt(e) ? Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : e != null ? t(e) : null;
}
function $9(e, t = C2) {
  const n = {};
  return e.forEach((r, o) => {
    const i = t[o];
    r != null && (n[i] = r);
  }), n;
}
var oo = oe(function(t, n) {
  const r = Jo("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = Cn(t), u = m3({
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
var k2 = (e) => /* @__PURE__ */ w.jsx(
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
k2.displayName = "StackItem";
function A9(e) {
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
    "&": R9(
      n,
      (o) => r[o]
    )
  };
}
var P2 = oe((e, t) => {
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
    () => A9({ spacing: a, direction: p }),
    [a, p]
  ), g = !!u, S = !d && !g, m = v.useMemo(() => {
    const b = GB(l);
    return S ? b : b.map((x, k) => {
      const P = typeof x.key < "u" ? x.key : k, T = k + 1 === b.length, M = d ? /* @__PURE__ */ w.jsx(k2, { children: x }, P) : x;
      if (!g)
        return M;
      const I = v.cloneElement(
        u,
        {
          __css: y
        }
      ), D = T ? null : I;
      return /* @__PURE__ */ w.jsxs(v.Fragment, { children: [
        M,
        D
      ] }, P);
    });
  }, [
    u,
    y,
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
P2.displayName = "Stack";
var $t = oe((e, t) => /* @__PURE__ */ w.jsx(P2, { align: "center", ...e, direction: "row", ref: t }));
$t.displayName = "HStack";
var Fe = X("div");
Fe.displayName = "Box";
var T2 = oe(function(t, n) {
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
T2.displayName = "Square";
var D9 = oe(function(t, n) {
  const { size: r, ...o } = t;
  return /* @__PURE__ */ w.jsx(T2, { size: r, ref: n, borderRadius: "9999px", ...o });
});
D9.displayName = "Circle";
var E2 = oe(function(t, n) {
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
    ...y
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
      ...y,
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
E2.displayName = "Divider";
function F9(e, t = {}) {
  const { ssr: n = !0, fallback: r } = t, { getWindow: o } = M3(), i = Array.isArray(e) ? e : [e];
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
function L9(e, t, n = C2) {
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
function z9(e) {
  var t, n;
  const r = zt(e) ? e : { fallback: e ?? "base" }, i = ho().__breakpoints.details.map(
    ({ minMaxQuery: u, breakpoint: c }) => ({
      breakpoint: c,
      query: u.replace("@media screen and ", "")
    })
  ), a = i.map((u) => u.breakpoint === r.fallback), l = F9(
    i.map((u) => u.query),
    { fallback: a, ssr: r.ssr }
  ).findIndex((u) => u == !0);
  return (n = (t = i[l]) == null ? void 0 : t.breakpoint) != null ? n : r.fallback;
}
function j9(e, t) {
  var n;
  const r = zt(t) ? t : { fallback: t ?? "base" }, o = z9(r), i = ho();
  if (!o)
    return;
  const a = Array.from(((n = i.__breakpoints) == null ? void 0 : n.keys) || []), s = Array.isArray(e) ? Object.fromEntries(
    Object.entries($9(e, a)).map(
      ([l, u]) => [l, u]
    )
  ) : e;
  return L9(s, o, a);
}
function N9(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function V9(e = {}) {
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
      if (N9(c)) {
        const d = r.concat(c.key);
        n(c) && (c.preventDefault(), c.stopPropagation()), o(d), u(d.join("")), s();
      }
    };
  }
  return l;
}
function B9(e, t, n, r) {
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
function W9() {
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
function Tp(e) {
  const t = e.target, { tagName: n, isContentEditable: r } = t;
  return n !== "INPUT" && n !== "TEXTAREA" && r !== !0;
}
function H9(e = {}) {
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
  } = e, [g, S] = v.useState(!0), [m, h] = v.useState(!1), b = W9(), x = ($) => {
    $ && $.tagName !== "BUTTON" && S(!1);
  }, k = g ? d : d || 0, P = n && !r, T = v.useCallback(
    ($) => {
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      $.currentTarget.focus(), l == null || l($);
    },
    [n, l]
  ), E = v.useCallback(
    ($) => {
      m && Tp($) && ($.preventDefault(), $.stopPropagation(), h(!1), b.remove(document, "keyup", E, !1));
    },
    [m, b]
  ), M = v.useCallback(
    ($) => {
      if (u == null || u($), n || $.defaultPrevented || $.metaKey || !Tp($.nativeEvent) || g)
        return;
      const A = o && $.key === "Enter";
      i && $.key === " " && ($.preventDefault(), h(!0)), A && ($.preventDefault(), $.currentTarget.click()), b.add(document, "keyup", E, !1);
    },
    [
      n,
      g,
      u,
      o,
      i,
      b,
      E
    ]
  ), I = v.useCallback(
    ($) => {
      if (c == null || c($), n || $.defaultPrevented || $.metaKey || !Tp($.nativeEvent) || g)
        return;
      i && $.key === " " && ($.preventDefault(), h(!1), $.currentTarget.click());
    },
    [i, g, n, c]
  ), D = v.useCallback(
    ($) => {
      $.button === 0 && (h(!1), b.remove(document, "mouseup", D, !1));
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
      g || h(!0), $.currentTarget.focus({ preventScroll: !0 }), b.add(document, "mouseup", D, !1), a == null || a($);
    },
    [n, g, a, b, D]
  ), H = v.useCallback(
    ($) => {
      $.button === 0 && (g || h(!1), s == null || s($));
    },
    [s, g]
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
      m && ($.preventDefault(), h(!1)), p == null || p($);
    },
    [m, p]
  ), K = at(t, x);
  return g ? {
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
function U9(e) {
  const t = e.current;
  if (!t)
    return !1;
  const n = b9(t);
  return !n || t.contains(n) ? !1 : !!C9(n);
}
function _2(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t, i = n && !r;
  da(() => {
    if (!i || U9(e))
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
var G9 = {
  preventScroll: !0,
  shouldFocus: !1
};
function K9(e, t = G9) {
  const { focusRef: n, preventScroll: r, shouldFocus: o, visible: i } = t, a = Y9(e) ? e.current : e, s = o && i, l = v.useRef(s), u = v.useRef(i);
  la(() => {
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
        const d = x2(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: r });
        });
      }
  }, [i, r, a, n]);
  da(() => {
    c();
  }, [c]), vg(a, "transitionend", c);
}
function Y9(e) {
  return "current" in e;
}
var ui = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), xt = {
  arrowShadowColor: ui("--popper-arrow-shadow-color"),
  arrowSize: ui("--popper-arrow-size", "8px"),
  arrowSizeHalf: ui("--popper-arrow-size-half"),
  arrowBg: ui("--popper-arrow-bg"),
  transformOrigin: ui("--popper-transform-origin"),
  arrowOffset: ui("--popper-arrow-offset")
};
function q9(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var X9 = {
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
}, Q9 = (e) => X9[e], U1 = {
  scroll: !0,
  resize: !0
};
function Z9(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...U1, ...e }
  } : t = {
    enabled: e,
    options: U1
  }, t;
}
var J9 = {
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
}, e8 = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    G1(e);
  },
  effect: ({ state: e }) => () => {
    G1(e);
  }
}, G1 = (e) => {
  e.elements.popper.style.setProperty(
    xt.transformOrigin.var,
    Q9(e.placement)
  );
}, t8 = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    n8(e);
  }
}, n8 = (e) => {
  var t;
  if (!e.placement)
    return;
  const n = r8(e.placement);
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
}, r8 = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: xt.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: xt.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: xt.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: xt.arrowOffset.varRef };
}, o8 = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    K1(e);
  },
  effect: ({ state: e }) => () => {
    K1(e);
  }
}, K1 = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const n = q9(e.placement);
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
}, i8 = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, a8 = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function s8(e, t = "ltr") {
  var n, r;
  const o = ((n = i8[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? o : (r = a8[e]) != null ? r : o;
}
var jt = "top", Sn = "bottom", xn = "right", Nt = "left", Tg = "auto", wl = [jt, Sn, xn, Nt], ha = "start", il = "end", l8 = "clippingParents", O2 = "viewport", Ua = "popper", u8 = "reference", Y1 = /* @__PURE__ */ wl.reduce(function(e, t) {
  return e.concat([t + "-" + ha, t + "-" + il]);
}, []), M2 = /* @__PURE__ */ [].concat(wl, [Tg]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ha, t + "-" + il]);
}, []), c8 = "beforeRead", d8 = "read", f8 = "afterRead", p8 = "beforeMain", h8 = "main", m8 = "afterMain", v8 = "beforeWrite", g8 = "write", y8 = "afterWrite", b8 = [c8, d8, f8, p8, h8, m8, v8, g8, y8];
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
function Xo(e) {
  var t = en(e).Element;
  return e instanceof t || e instanceof Element;
}
function gn(e) {
  var t = en(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Eg(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = en(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function S8(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !gn(i) || !rr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function x8(e) {
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
const w8 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: S8,
  effect: x8,
  requires: ["computeStyles"]
};
function nr(e) {
  return e.split("-")[0];
}
var Wo = Math.max, Yc = Math.min, ma = Math.round;
function dm() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function I2() {
  return !/^((?!chrome|android).)*safari/i.test(dm());
}
function va(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && gn(e) && (o = e.offsetWidth > 0 && ma(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ma(r.height) / e.offsetHeight || 1);
  var a = Xo(e) ? en(e) : window, s = a.visualViewport, l = !I2() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / o, c = (r.top + (l && s ? s.offsetTop : 0)) / i, d = r.width / o, f = r.height / i;
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
function _g(e) {
  var t = va(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function R2(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Eg(n)) {
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
function C8(e) {
  return ["table", "td", "th"].indexOf(rr(e)) >= 0;
}
function vo(e) {
  return ((Xo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Jd(e) {
  return rr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Eg(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    vo(e)
  );
}
function q1(e) {
  return !gn(e) || // https://github.com/popperjs/popper-core/issues/837
  Er(e).position === "fixed" ? null : e.offsetParent;
}
function k8(e) {
  var t = /firefox/i.test(dm()), n = /Trident/i.test(dm());
  if (n && gn(e)) {
    var r = Er(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Jd(e);
  for (Eg(o) && (o = o.host); gn(o) && ["html", "body"].indexOf(rr(o)) < 0; ) {
    var i = Er(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Cl(e) {
  for (var t = en(e), n = q1(e); n && C8(n) && Er(n).position === "static"; )
    n = q1(n);
  return n && (rr(n) === "html" || rr(n) === "body" && Er(n).position === "static") ? t : n || k8(e) || t;
}
function Og(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ps(e, t, n) {
  return Wo(e, Yc(t, n));
}
function P8(e, t, n) {
  var r = Ps(e, t, n);
  return r > n ? n : r;
}
function $2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function A2(e) {
  return Object.assign({}, $2(), e);
}
function D2(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var T8 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, A2(typeof t != "number" ? t : D2(t, wl));
};
function E8(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = nr(n.placement), l = Og(s), u = [Nt, xn].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = T8(o.padding, n), f = _g(i), p = l === "y" ? jt : Nt, y = l === "y" ? Sn : xn, g = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], S = a[l] - n.rects.reference[l], m = Cl(i), h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, b = g / 2 - S / 2, x = d[p], k = h - f[c] - d[y], P = h / 2 - f[c] / 2 + b, T = Ps(x, P, k), E = l;
    n.modifiersData[r] = (t = {}, t[E] = T, t.centerOffset = T - P, t);
  }
}
function _8(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || R2(t.elements.popper, o) && (t.elements.arrow = o));
}
const O8 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: E8,
  effect: _8,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ga(e) {
  return e.split("-")[1];
}
var M8 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function I8(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ma(n * o) / o || 0,
    y: ma(r * o) / o || 0
  };
}
function X1(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, y = a.y, g = y === void 0 ? 0 : y, S = typeof c == "function" ? c({
    x: p,
    y: g
  }) : {
    x: p,
    y: g
  };
  p = S.x, g = S.y;
  var m = a.hasOwnProperty("x"), h = a.hasOwnProperty("y"), b = Nt, x = jt, k = window;
  if (u) {
    var P = Cl(n), T = "clientHeight", E = "clientWidth";
    if (P === en(n) && (P = vo(n), Er(P).position !== "static" && s === "absolute" && (T = "scrollHeight", E = "scrollWidth")), P = P, o === jt || (o === Nt || o === xn) && i === il) {
      x = Sn;
      var M = d && P === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[T]
      );
      g -= M - r.height, g *= l ? 1 : -1;
    }
    if (o === Nt || (o === jt || o === Sn) && i === il) {
      b = xn;
      var I = d && P === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[E]
      );
      p -= I - r.width, p *= l ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: s
  }, u && M8), G = c === !0 ? I8({
    x: p,
    y: g
  }, en(n)) : {
    x: p,
    y: g
  };
  if (p = G.x, g = G.y, l) {
    var H;
    return Object.assign({}, D, (H = {}, H[x] = h ? "0" : "", H[b] = m ? "0" : "", H.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", H));
  }
  return Object.assign({}, D, (t = {}, t[x] = h ? g + "px" : "", t[b] = m ? p + "px" : "", t.transform = "", t));
}
function R8(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: nr(t.placement),
    variation: ga(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, X1(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, X1(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const $8 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: R8,
  data: {}
};
var mu = {
  passive: !0
};
function A8(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = en(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, mu);
  }), s && l.addEventListener("resize", n.update, mu), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, mu);
    }), s && l.removeEventListener("resize", n.update, mu);
  };
}
const D8 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: A8,
  data: {}
};
var F8 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return F8[t];
  });
}
var L8 = {
  start: "end",
  end: "start"
};
function Q1(e) {
  return e.replace(/start|end/g, function(t) {
    return L8[t];
  });
}
function Mg(e) {
  var t = en(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Ig(e) {
  return va(vo(e)).left + Mg(e).scrollLeft;
}
function z8(e, t) {
  var n = en(e), r = vo(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = I2();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + Ig(e),
    y: l
  };
}
function j8(e) {
  var t, n = vo(e), r = Mg(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Wo(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Wo(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Ig(e), l = -r.scrollTop;
  return Er(o || n).direction === "rtl" && (s += Wo(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Rg(e) {
  var t = Er(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function F2(e) {
  return ["html", "body", "#document"].indexOf(rr(e)) >= 0 ? e.ownerDocument.body : gn(e) && Rg(e) ? e : F2(Jd(e));
}
function Ts(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = F2(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = en(r), a = o ? [i].concat(i.visualViewport || [], Rg(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ts(Jd(a)))
  );
}
function fm(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function N8(e, t) {
  var n = va(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Z1(e, t, n) {
  return t === O2 ? fm(z8(e, n)) : Xo(t) ? N8(t, n) : fm(j8(vo(e)));
}
function V8(e) {
  var t = Ts(Jd(e)), n = ["absolute", "fixed"].indexOf(Er(e).position) >= 0, r = n && gn(e) ? Cl(e) : e;
  return Xo(r) ? t.filter(function(o) {
    return Xo(o) && R2(o, r) && rr(o) !== "body";
  }) : [];
}
function B8(e, t, n, r) {
  var o = t === "clippingParents" ? V8(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, u) {
    var c = Z1(e, u, r);
    return l.top = Wo(c.top, l.top), l.right = Yc(c.right, l.right), l.bottom = Yc(c.bottom, l.bottom), l.left = Wo(c.left, l.left), l;
  }, Z1(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function L2(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? nr(r) : null, i = r ? ga(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
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
  var u = o ? Og(o) : null;
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? l8 : s, u = n.rootBoundary, c = u === void 0 ? O2 : u, d = n.elementContext, f = d === void 0 ? Ua : d, p = n.altBoundary, y = p === void 0 ? !1 : p, g = n.padding, S = g === void 0 ? 0 : g, m = A2(typeof S != "number" ? S : D2(S, wl)), h = f === Ua ? u8 : Ua, b = e.rects.popper, x = e.elements[y ? h : f], k = B8(Xo(x) ? x : x.contextElement || vo(e.elements.popper), l, c, a), P = va(e.elements.reference), T = L2({
    reference: P,
    element: b,
    strategy: "absolute",
    placement: o
  }), E = fm(Object.assign({}, b, T)), M = f === Ua ? E : P, I = {
    top: k.top - M.top + m.top,
    bottom: M.bottom - k.bottom + m.bottom,
    left: k.left - M.left + m.left,
    right: M.right - k.right + m.right
  }, D = e.modifiersData.offset;
  if (f === Ua && D) {
    var G = D[o];
    Object.keys(I).forEach(function(H) {
      var L = [xn, Sn].indexOf(H) >= 0 ? 1 : -1, W = [jt, Sn].indexOf(H) >= 0 ? "y" : "x";
      I[H] += G[W] * L;
    });
  }
  return I;
}
function W8(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? M2 : l, c = ga(r), d = c ? s ? Y1 : Y1.filter(function(y) {
    return ga(y) === c;
  }) : wl, f = d.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(y, g) {
    return y[g] = al(e, {
      placement: g,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[nr(g)], y;
  }, {});
  return Object.keys(p).sort(function(y, g) {
    return p[y] - p[g];
  });
}
function H8(e) {
  if (nr(e) === Tg)
    return [];
  var t = Zu(e);
  return [Q1(e), t, Q1(t)];
}
function U8(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, y = p === void 0 ? !0 : p, g = n.allowedAutoPlacements, S = t.options.placement, m = nr(S), h = m === S, b = l || (h || !y ? [Zu(S)] : H8(S)), x = [S].concat(b).reduce(function(te, le) {
      return te.concat(nr(le) === Tg ? W8(t, {
        placement: le,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: g
      }) : le);
    }, []), k = t.rects.reference, P = t.rects.popper, T = /* @__PURE__ */ new Map(), E = !0, M = x[0], I = 0; I < x.length; I++) {
      var D = x[I], G = nr(D), H = ga(D) === ha, L = [jt, Sn].indexOf(G) >= 0, W = L ? "width" : "height", K = al(t, {
        placement: D,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), $ = L ? H ? xn : Nt : H ? Sn : jt;
      k[W] > P[W] && ($ = Zu($));
      var A = Zu($), z = [];
      if (i && z.push(K[G] <= 0), s && z.push(K[$] <= 0, K[A] <= 0), z.every(function(te) {
        return te;
      })) {
        M = D, E = !1;
        break;
      }
      T.set(D, z);
    }
    if (E)
      for (var U = y ? 3 : 1, V = function(le) {
        var ie = x.find(function(se) {
          var me = T.get(se);
          if (me)
            return me.slice(0, le).every(function(ke) {
              return ke;
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
const G8 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: U8,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function J1(e, t, n) {
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
function eS(e) {
  return [jt, xn, Sn, Nt].some(function(t) {
    return e[t] >= 0;
  });
}
function K8(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = al(t, {
    elementContext: "reference"
  }), s = al(t, {
    altBoundary: !0
  }), l = J1(a, r), u = J1(s, o, i), c = eS(l), d = eS(u);
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
const Y8 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: K8
};
function q8(e, t, n) {
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
function X8(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = M2.reduce(function(c, d) {
    return c[d] = q8(d, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const Q8 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: X8
};
function Z8(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = L2({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const J8 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Z8,
  data: {}
};
function e7(e) {
  return e === "x" ? "y" : "x";
}
function t7(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, y = n.tetherOffset, g = y === void 0 ? 0 : y, S = al(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), m = nr(t.placement), h = ga(t.placement), b = !h, x = Og(m), k = e7(x), P = t.modifiersData.popperOffsets, T = t.rects.reference, E = t.rects.popper, M = typeof g == "function" ? g(Object.assign({}, t.rects, {
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
      var H, L = x === "y" ? jt : Nt, W = x === "y" ? Sn : xn, K = x === "y" ? "height" : "width", $ = P[x], A = $ + S[L], z = $ - S[W], U = p ? -E[K] / 2 : 0, V = h === ha ? T[K] : E[K], Y = h === ha ? -E[K] : -T[K], j = t.elements.arrow, te = p && j ? _g(j) : {
        width: 0,
        height: 0
      }, le = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : $2(), ie = le[L], se = le[W], me = Ps(0, T[K], te[K]), ke = b ? T[K] / 2 - U - me - ie - I.mainAxis : V - me - ie - I.mainAxis, et = b ? -T[K] / 2 + U + me + se + I.mainAxis : Y + me + se + I.mainAxis, qe = t.elements.arrow && Cl(t.elements.arrow), on = qe ? x === "y" ? qe.clientTop || 0 : qe.clientLeft || 0 : 0, Pn = (H = D == null ? void 0 : D[x]) != null ? H : 0, Mr = $ + ke - Pn - on, fe = $ + et - Pn, mt = Ps(p ? Yc(A, Mr) : A, $, p ? Wo(z, fe) : z);
      P[x] = mt, G[x] = mt - $;
    }
    if (s) {
      var Ge, Ut = x === "x" ? jt : Nt, Ir = x === "x" ? Sn : xn, vt = P[k], Nn = k === "y" ? "height" : "width", Rr = vt + S[Ut], an = vt - S[Ir], oi = [jt, Nt].indexOf(m) !== -1, Ta = (Ge = D == null ? void 0 : D[k]) != null ? Ge : 0, Il = oi ? Rr : vt - T[Nn] - E[Nn] - Ta + I.altAxis, Rl = oi ? vt + T[Nn] + E[Nn] - Ta - I.altAxis : an, go = p && oi ? P8(Il, vt, Rl) : Ps(p ? Il : Rr, vt, p ? Rl : an);
      P[k] = go, G[k] = go - vt;
    }
    t.modifiersData[r] = G;
  }
}
const n7 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: t7,
  requiresIfExists: ["offset"]
};
function r7(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function o7(e) {
  return e === en(e) || !gn(e) ? Mg(e) : r7(e);
}
function i7(e) {
  var t = e.getBoundingClientRect(), n = ma(t.width) / e.offsetWidth || 1, r = ma(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function a7(e, t, n) {
  n === void 0 && (n = !1);
  var r = gn(t), o = gn(t) && i7(t), i = vo(t), a = va(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((rr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Rg(i)) && (s = o7(t)), gn(t) ? (l = va(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Ig(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function s7(e) {
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
function l7(e) {
  var t = s7(e);
  return b8.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function u7(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function c7(e) {
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
var tS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function nS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function d7(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? tS : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, tS, i),
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
          reference: Xo(s) ? Ts(s) : s.contextElement ? Ts(s.contextElement) : [],
          popper: Ts(l)
        };
        var b = l7(c7([].concat(r, c.options.modifiers)));
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
          var m = c.elements, h = m.reference, b = m.popper;
          if (nS(h, b)) {
            c.rects = {
              reference: a7(h, Cl(b), c.options.strategy === "fixed"),
              popper: _g(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(I) {
              return c.modifiersData[I.name] = Object.assign({}, I.data);
            });
            for (var x = 0; x < c.orderedModifiers.length; x++) {
              if (c.reset === !0) {
                c.reset = !1, x = -1;
                continue;
              }
              var k = c.orderedModifiers[x], P = k.fn, T = k.options, E = T === void 0 ? {} : T, M = k.name;
              typeof P == "function" && (c = P({
                state: c,
                options: E,
                name: M,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: u7(function() {
        return new Promise(function(S) {
          p.forceUpdate(), S(c);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!nS(s, l))
      return p;
    p.setOptions(u).then(function(S) {
      !f && u.onFirstUpdate && u.onFirstUpdate(S);
    });
    function y() {
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
var f7 = [D8, J8, $8, w8, Q8, G8, n7, O8, Y8], p7 = /* @__PURE__ */ d7({
  defaultModifiers: f7
});
function z2(e = {}) {
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
  } = e, y = v.useRef(null), g = v.useRef(null), S = v.useRef(null), m = s8(r, p), h = v.useRef(() => {
  }), b = v.useCallback(() => {
    var I;
    !t || !y.current || !g.current || ((I = h.current) == null || I.call(h), S.current = p7(y.current, g.current, {
      placement: m,
      modifiers: [
        o8,
        t8,
        e8,
        {
          ...J9,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...Z9(a)
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
  v.useEffect(() => () => {
    var I;
    !y.current && !g.current && ((I = S.current) == null || I.destroy(), S.current = null);
  }, []);
  const x = v.useCallback(
    (I) => {
      y.current = I, b();
    },
    [b]
  ), k = v.useCallback(
    (I = {}, D = null) => ({
      ...I,
      ref: at(x, D)
    }),
    [x]
  ), P = v.useCallback(
    (I) => {
      g.current = I, b();
    },
    [b]
  ), T = v.useCallback(
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
  ), E = v.useCallback((I = {}, D = null) => {
    const { size: G, shadowColor: H, bg: L, style: W, ...K } = I;
    return {
      ...K,
      ref: D,
      "data-popper-arrow": "",
      style: h7(I)
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
    getArrowProps: E,
    getArrowInnerProps: M,
    getReferenceProps: k
  };
}
function h7(e) {
  const { size: t, shadowColor: n, bg: r, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), n && (i["--popper-arrow-shadow-color"] = n), r && (i["--popper-arrow-bg"] = r), i;
}
function j2(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = to(n), a = to(t), [s, l] = v.useState(e.defaultIsOpen || !1), u = r !== void 0 ? r : s, c = r !== void 0, d = v.useId(), f = o ?? `disclosure-${d}`, p = v.useCallback(() => {
    c || l(!1), a == null || a();
  }, [c, a]), y = v.useCallback(() => {
    c || l(!0), i == null || i();
  }, [c, i]), g = v.useCallback(() => {
    u ? p() : y();
  }, [u, y, p]);
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
    onOpen: y,
    onClose: p,
    onToggle: g,
    isControlled: c,
    getButtonProps: S,
    getDisclosureProps: m
  };
}
function m7(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e, o = to(n), a = v.useRef({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  v.useEffect(() => {
    if (!r)
      return;
    const s = (d) => {
      Ep(d, t) && (a.isPointerDown = !0);
    }, l = (d) => {
      if (a.ignoreEmulatedMouseEvents) {
        a.ignoreEmulatedMouseEvents = !1;
        return;
      }
      a.isPointerDown && n && Ep(d, t) && (a.isPointerDown = !1, o(d));
    }, u = (d) => {
      a.ignoreEmulatedMouseEvents = !0, n && a.isPointerDown && Ep(d, t) && (a.isPointerDown = !1, o(d));
    }, c = N2(t.current);
    return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", l, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", u, !0), () => {
      c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", l, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", u, !0);
    };
  }, [n, t, o, a, r]);
}
function Ep(e, t) {
  var n;
  const r = e.target;
  return r && !N2(r).contains(r) ? !1 : !((n = t.current) != null && n.contains(r));
}
function N2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function V2(e) {
  const { isOpen: t, ref: n } = e, [r, o] = v.useState(t), [i, a] = v.useState(!1);
  return v.useEffect(() => {
    i || (o(t), a(!0));
  }, [t, i, r]), vg(
    () => n.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !r),
    onComplete() {
      var l;
      const u = y9(n.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = n.current) == null || l.dispatchEvent(c);
    }
  };
}
function B2(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || o === "keepMounted" && t);
}
var [
  v7,
  g7,
  y7,
  b7
] = wP(), [S7, kl] = Je({
  strict: !1,
  name: "MenuContext"
});
function x7(e, ...t) {
  const n = v.useId(), r = e || n;
  return v.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function W2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function rS(e) {
  return W2(e).activeElement === e;
}
function w7(e = {}) {
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
  } = e, S = v.useRef(null), m = v.useRef(null), h = y7(), b = v.useCallback(() => {
    requestAnimationFrame(() => {
      var j;
      (j = S.current) == null || j.focus({ preventScroll: !1 });
    });
  }, []), x = v.useCallback(() => {
    const j = setTimeout(() => {
      var te;
      if (o)
        (te = o.current) == null || te.focus();
      else {
        const le = h.firstEnabled();
        le && H(le.index);
      }
    });
    A.current.add(j);
  }, [h, o]), k = v.useCallback(() => {
    const j = setTimeout(() => {
      const te = h.lastEnabled();
      te && H(te.index);
    });
    A.current.add(j);
  }, [h]), P = v.useCallback(() => {
    c == null || c(), i ? x() : b();
  }, [i, x, b, c]), { isOpen: T, onOpen: E, onClose: M, onToggle: I } = j2({
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: P
  });
  m7({
    enabled: T && r,
    ref: S,
    handler: (j) => {
      var te;
      (te = m.current) != null && te.contains(j.target) || M();
    }
  });
  const D = z2({
    ...g,
    enabled: T || y,
    placement: d,
    direction: p
  }), [G, H] = v.useState(-1);
  da(() => {
    T || H(-1);
  }, [T]), _2(S, {
    focusRef: m,
    visible: T,
    shouldFocus: !0
  });
  const L = V2({ isOpen: T, ref: S }), [W, K] = x7(t, "menu-button", "menu-list"), $ = v.useCallback(() => {
    E(), b();
  }, [E, b]), A = v.useRef(/* @__PURE__ */ new Set([]));
  v.useEffect(() => {
    const j = A.current;
    return () => {
      j.forEach((te) => clearTimeout(te)), j.clear();
    };
  }, []);
  const z = v.useCallback(() => {
    E(), x();
  }, [x, E]), U = v.useCallback(() => {
    E(), k();
  }, [E, k]), V = v.useCallback(() => {
    var j, te;
    const le = W2(S.current), ie = (j = S.current) == null ? void 0 : j.contains(le.activeElement);
    if (!(T && !ie))
      return;
    const me = (te = h.item(G)) == null ? void 0 : te.node;
    me == null || me.focus({ preventScroll: !0 });
  }, [T, G, h]), Y = v.useRef(null);
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
    onOpen: E,
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
function C7(e = {}, t = null) {
  const n = kl(), { onToggle: r, popper: o, openAndFocusFirstItem: i, openAndFocusLastItem: a } = n, s = v.useCallback(
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
function pm(e) {
  var t;
  return E7(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function k7(e = {}, t = null) {
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
  } = n, f = g7(), p = V9({
    preventDefault: (m) => m.key !== " " && pm(m.target)
  }), y = v.useCallback(
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
        const T = B9(
          f.values(),
          P,
          (E) => {
            var M, I;
            return (I = (M = E == null ? void 0 : E.node) == null ? void 0 : M.textContent) != null ? I : "";
          },
          f.item(r)
        );
        if (T) {
          const E = f.indexOf(T.node);
          o(E);
        }
      });
      pm(m.target) && k(m);
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
  const S = B2({
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
    onKeyDown: Le(e.onKeyDown, y)
  };
}
function P7(e = {}) {
  const { popper: t, isOpen: n } = kl();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: n ? "visible" : "hidden",
      ...e.style
    }
  });
}
function T7(e = {}, t = null) {
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
    closeOnSelect: g,
    onClose: S,
    menuRef: m,
    isOpen: h,
    menuId: b,
    rafId: x
  } = f, k = v.useRef(null), P = `${b}-menuitem-${v.useId()}`, { index: T, register: E } = b7({
    disabled: s && !l
  }), M = v.useCallback(
    ($) => {
      n == null || n($), !s && p(T);
    },
    [p, T, s, n]
  ), I = v.useCallback(
    ($) => {
      r == null || r($), k.current && !rS(k.current) && M($);
    },
    [M, r]
  ), D = v.useCallback(
    ($) => {
      o == null || o($), !s && p(-1);
    },
    [p, s, o]
  ), G = v.useCallback(
    ($) => {
      i == null || i($), pm($.currentTarget) && (u ?? g) && S();
    },
    [S, i, g, u]
  ), H = v.useCallback(
    ($) => {
      a == null || a($), p(T);
    },
    [p, a, T]
  ), L = T === y, W = s && !l;
  da(() => {
    if (h)
      return L && !W && k.current ? (x.current && cancelAnimationFrame(x.current), x.current = requestAnimationFrame(() => {
        var $;
        ($ = k.current) == null || $.focus({ preventScroll: !0 }), x.current = null;
      })) : m.current && !rS(m.current) && m.current.focus({ preventScroll: !0 }), () => {
        x.current && cancelAnimationFrame(x.current);
      };
  }, [L, W, m, h]);
  const K = H9({
    onClick: G,
    onFocus: H,
    onMouseEnter: M,
    onMouseMove: I,
    onMouseLeave: D,
    ref: at(E, k, t),
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
function E7(e) {
  var t;
  if (!_7(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function _7(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
var [O7, Pl] = Je({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), $g = (e) => {
  const { children: t } = e, n = Ct("Menu", e), r = Cn(e), { direction: o } = ho(), { descendants: i, ...a } = w7({ ...r, direction: o }), s = v.useMemo(() => a, [a]), { isOpen: l, onClose: u, forceUpdate: c } = s;
  return /* @__PURE__ */ w.jsx(v7, { value: i, children: /* @__PURE__ */ w.jsx(S7, { value: s, children: /* @__PURE__ */ w.jsx(O7, { value: n, children: Xn(t, { isOpen: l, onClose: u, forceUpdate: c }) }) }) });
};
$g.displayName = "Menu";
var H2 = oe(
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
H2.displayName = "MenuCommand";
var M7 = oe(
  (e, t) => {
    const { type: n, ...r } = e, o = Pl(), i = r.as || n ? n ?? void 0 : "button", a = v.useMemo(
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
), Ag = (e) => {
  const { className: t, children: n, ...r } = e, o = Pl(), i = v.Children.only(n), a = v.isValidElement(i) ? v.cloneElement(i, {
    focusable: "false",
    "aria-hidden": !0,
    className: ae("chakra-menu__icon", i.props.className)
  }) : null, s = ae("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ w.jsx(X.span, { className: s, ...r, __css: o.icon, children: a });
};
Ag.displayName = "MenuIcon";
var Ju = oe((e, t) => {
  const {
    icon: n,
    iconSpacing: r = "0.75rem",
    command: o,
    commandSpacing: i = "0.75rem",
    children: a,
    ...s
  } = e, l = T7(s, t), c = n || o ? /* @__PURE__ */ w.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: a }) : a;
  return /* @__PURE__ */ w.jsxs(
    M7,
    {
      ...l,
      className: ae("chakra-menu__menuitem", l.className),
      children: [
        n && /* @__PURE__ */ w.jsx(Ag, { fontSize: "0.8em", marginEnd: r, children: n }),
        c,
        o && /* @__PURE__ */ w.jsx(H2, { marginStart: i, children: o })
      ]
    }
  );
});
Ju.displayName = "MenuItem";
var I7 = {
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
}, R7 = X(or.div), U2 = oe(function(t, n) {
  var r, o;
  const { rootProps: i, motionProps: a, ...s } = t, {
    isOpen: l,
    onTransitionEnd: u,
    unstable__animationState: c
  } = kl(), d = k7(s, n), f = P7(i), p = Pl();
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (r = p.list) == null ? void 0 : r.zIndex },
      children: /* @__PURE__ */ w.jsx(
        R7,
        {
          variants: I7,
          initial: !1,
          animate: l ? "enter" : "exit",
          __css: { outline: 0, ...p.list },
          ...a,
          className: ae("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: u,
          onAnimationComplete: vC(
            c.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
U2.displayName = "MenuList";
var $7 = oe((e, t) => {
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
}), G2 = oe(
  (e, t) => {
    const { children: n, as: r, ...o } = e, i = C7(o, t), a = r || $7;
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
G2.displayName = "MenuButton";
var A7 = {
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
    ..._P,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, D7 = X(or.section), F7 = (e) => A7[e || "none"], K2 = v.forwardRef(
  (e, t) => {
    const { preset: n, motionProps: r = F7(n), ...o } = e;
    return /* @__PURE__ */ w.jsx(D7, { ref: t, ...r, ...o });
  }
);
K2.displayName = "ModalTransition";
var L7 = Object.defineProperty, z7 = (e, t, n) => t in e ? L7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, j7 = (e, t, n) => (z7(e, typeof t != "symbol" ? t + "" : t, n), n), N7 = class {
  constructor() {
    j7(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, hm = new N7();
function Y2(e, t) {
  const [n, r] = v.useState(0);
  return v.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = hm.add(o);
        r(i);
      }
      return () => {
        hm.remove(o), r(0);
      };
    }
  }, [t, e]), n;
}
var V7 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ci = /* @__PURE__ */ new WeakMap(), vu = /* @__PURE__ */ new WeakMap(), gu = {}, _p = 0, q2 = function(e) {
  return e && (e.host || q2(e.parentNode));
}, B7 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = q2(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, W7 = function(e, t, n, r) {
  var o = B7(t, Array.isArray(e) ? e : [e]);
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
        var p = f.getAttribute(r), y = p !== null && p !== "false", g = (ci.get(f) || 0) + 1, S = (i.get(f) || 0) + 1;
        ci.set(f, g), i.set(f, S), a.push(f), g === 1 && y && vu.set(f, !0), S === 1 && f.setAttribute(n, "true"), y || f.setAttribute(r, "true");
      }
    });
  };
  return c(t), s.clear(), _p++, function() {
    a.forEach(function(d) {
      var f = ci.get(d) - 1, p = i.get(d) - 1;
      ci.set(d, f), i.set(d, p), f || (vu.has(d) || d.removeAttribute(r), vu.delete(d)), p || d.removeAttribute(n);
    }), _p--, _p || (ci = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), vu = /* @__PURE__ */ new WeakMap(), gu = {});
  };
}, H7 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || V7(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), W7(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function U7(e) {
  const {
    isOpen: t,
    onClose: n,
    id: r,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = v.useRef(null), c = v.useRef(null), [d, f, p] = K7(
    r,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  G7(u, t && a);
  const y = Y2(u, t), g = v.useRef(null), S = v.useCallback((M) => {
    g.current = M.target;
  }, []), m = v.useCallback(
    (M) => {
      M.key === "Escape" && (M.stopPropagation(), i && (n == null || n()), l == null || l());
    },
    [i, n, l]
  ), [h, b] = v.useState(!1), [x, k] = v.useState(!1), P = v.useCallback(
    (M = {}, I = null) => ({
      role: "dialog",
      ...M,
      ref: at(I, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": h ? f : void 0,
      "aria-describedby": x ? p : void 0,
      onClick: Le(
        M.onClick,
        (D) => D.stopPropagation()
      )
    }),
    [p, x, d, f, h]
  ), T = v.useCallback(
    (M) => {
      M.stopPropagation(), g.current === M.target && hm.isTopModal(u.current) && (o && (n == null || n()), s == null || s());
    },
    [n, o, s]
  ), E = v.useCallback(
    (M = {}, I = null) => ({
      ...M,
      ref: at(I, c),
      onClick: Le(M.onClick, T),
      onKeyDown: Le(M.onKeyDown, m),
      onMouseDown: Le(M.onMouseDown, S)
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
    getDialogContainerProps: E,
    index: y
  };
}
function G7(e, t) {
  const n = e.current;
  v.useEffect(() => {
    if (!(!e.current || !t))
      return H7(e.current);
  }, [t, e, n]);
}
function K7(e, ...t) {
  const n = v.useId(), r = e || n;
  return v.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
var [Y7, Pa] = Je({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [q7, uo] = Je({
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
  } = t, g = Ct("Modal", t), m = {
    ...U7(t),
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
  return /* @__PURE__ */ w.jsx(q7, { value: m, children: /* @__PURE__ */ w.jsx(Y7, { value: g, children: /* @__PURE__ */ w.jsx(ni, { onExitComplete: y, children: m.isOpen && /* @__PURE__ */ w.jsx(hl, { ...n, children: r }) }) }) });
};
Tl.displayName = "Modal";
var ec = "right-scroll-bar-position", tc = "width-before-scroll-bar", X7 = "with-scroll-bars-hidden", Q7 = "--removed-body-scroll-bar-size", X2 = HP(), Op = function() {
}, ef = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: Op,
    onWheelCapture: Op,
    onTouchMoveCapture: Op
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, y = e.inert, g = e.allowPinchZoom, S = e.as, m = S === void 0 ? "div" : S, h = e.gapMode, b = VP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = f, k = NP([n, t]), P = qn(qn({}, b), o);
  return v.createElement(
    v.Fragment,
    null,
    c && v.createElement(x, { sideCar: X2, removeScrollBar: u, shards: d, noIsolation: p, inert: y, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: h }),
    a ? v.cloneElement(v.Children.only(s), qn(qn({}, P), { ref: k })) : v.createElement(m, qn({}, P, { className: l, ref: k }), s)
  );
});
ef.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ef.classNames = {
  fullWidth: tc,
  zeroRight: ec
};
var oS, Z7 = function() {
  if (oS)
    return oS;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function J7() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Z7();
  return t && e.setAttribute("nonce", t), e;
}
function eW(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function tW(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var nW = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = J7()) && (eW(t, n), tW(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, rW = function() {
  var e = nW();
  return function(t, n) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Q2 = function() {
  var e = rW(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, oW = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Mp = function(e) {
  return parseInt(e || "", 10) || 0;
}, iW = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Mp(n), Mp(r), Mp(o)];
}, aW = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return oW;
  var t = iW(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, sW = Q2(), lW = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(X7, ` {
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
    `).concat(Q7, ": ").concat(s, `px;
  }
`);
}, uW = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = v.useMemo(function() {
    return aW(o);
  }, [o]);
  return v.createElement(sW, { styles: lW(i, !t, o, n ? "" : "!important") });
}, mm = !1;
if (typeof window < "u")
  try {
    var yu = Object.defineProperty({}, "passive", {
      get: function() {
        return mm = !0, !0;
      }
    });
    window.addEventListener("test", yu, yu), window.removeEventListener("test", yu, yu);
  } catch {
    mm = !1;
  }
var di = mm ? { passive: !1 } : !1, cW = function(e) {
  return e.tagName === "TEXTAREA";
}, Z2 = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !cW(e) && n[t] === "visible")
  );
}, dW = function(e) {
  return Z2(e, "overflowY");
}, fW = function(e) {
  return Z2(e, "overflowX");
}, iS = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = J2(e, r);
    if (o) {
      var i = eT(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, pW = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, hW = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, J2 = function(e, t) {
  return e === "v" ? dW(t) : fW(t);
}, eT = function(e, t) {
  return e === "v" ? pW(t) : hW(t);
}, mW = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, vW = function(e, t, n, r, o) {
  var i = mW(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = eT(e, s), y = p[0], g = p[1], S = p[2], m = g - S - i * y;
    (y || m) && J2(e, s) && (d += m, f += y), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, bu = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, aS = function(e) {
  return [e.deltaX, e.deltaY];
}, sS = function(e) {
  return e && "current" in e ? e.current : e;
}, gW = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, yW = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, bW = 0, fi = [];
function SW(e) {
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), o = v.useState(bW++)[0], i = v.useState(Q2)[0], a = v.useRef(e);
  v.useEffect(function() {
    a.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = b6([e.lockRef.current], (e.shards || []).map(sS), !0).filter(Boolean);
      return g.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = v.useCallback(function(g, S) {
    if ("touches" in g && g.touches.length === 2)
      return !a.current.allowPinchZoom;
    var m = bu(g), h = n.current, b = "deltaX" in g ? g.deltaX : h[0] - m[0], x = "deltaY" in g ? g.deltaY : h[1] - m[1], k, P = g.target, T = Math.abs(b) > Math.abs(x) ? "h" : "v";
    if ("touches" in g && T === "h" && P.type === "range")
      return !1;
    var E = iS(T, P);
    if (!E)
      return !0;
    if (E ? k = T : (k = T === "v" ? "h" : "v", E = iS(T, P)), !E)
      return !1;
    if (!r.current && "changedTouches" in g && (b || x) && (r.current = k), !k)
      return !0;
    var M = r.current || k;
    return vW(M, S, g, M === "h" ? b : x, !0);
  }, []), l = v.useCallback(function(g) {
    var S = g;
    if (!(!fi.length || fi[fi.length - 1] !== i)) {
      var m = "deltaY" in S ? aS(S) : bu(S), h = t.current.filter(function(k) {
        return k.name === S.type && (k.target === S.target || S.target === k.shadowParent) && gW(k.delta, m);
      })[0];
      if (h && h.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!h) {
        var b = (a.current.shards || []).map(sS).filter(Boolean).filter(function(k) {
          return k.contains(S.target);
        }), x = b.length > 0 ? s(S, b[0]) : !a.current.noIsolation;
        x && S.cancelable && S.preventDefault();
      }
    }
  }, []), u = v.useCallback(function(g, S, m, h) {
    var b = { name: g, delta: S, target: m, should: h, shadowParent: xW(m) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== b;
      });
    }, 1);
  }, []), c = v.useCallback(function(g) {
    n.current = bu(g), r.current = void 0;
  }, []), d = v.useCallback(function(g) {
    u(g.type, aS(g), g.target, s(g, e.lockRef.current));
  }, []), f = v.useCallback(function(g) {
    u(g.type, bu(g), g.target, s(g, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return fi.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, di), document.addEventListener("touchmove", l, di), document.addEventListener("touchstart", c, di), function() {
      fi = fi.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", l, di), document.removeEventListener("touchmove", l, di), document.removeEventListener("touchstart", c, di);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    y ? v.createElement(i, { styles: yW(o) }) : null,
    p ? v.createElement(uW, { gapMode: e.gapMode }) : null
  );
}
function xW(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const wW = S6(X2, SW);
var tT = v.forwardRef(function(e, t) {
  return v.createElement(ef, qn({}, e, { ref: t, sideCar: wW }));
});
tT.classNames = ef.classNames;
const CW = tT;
function nT(e) {
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
  } = uo(), [f, p] = tP();
  v.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const y = Y2(r, d);
  return /* @__PURE__ */ w.jsx(
    w2,
    {
      autoFocus: t,
      isDisabled: !n,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: r,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ w.jsx(
        CW,
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
var tf = oe(
  (e, t) => {
    const {
      className: n,
      children: r,
      containerProps: o,
      motionProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l } = uo(), u = s(a, t), c = l(o), d = ae("chakra-modal__content", n), f = Pa(), p = {
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
    }, { motionPreset: g } = uo();
    return /* @__PURE__ */ w.jsx(nT, { children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...c,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: y,
        children: /* @__PURE__ */ w.jsx(
          K2,
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
tf.displayName = "ModalContent";
var [kW, PW] = Je(), TW = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function EW(e, t) {
  var n, r;
  if (e)
    return (r = (n = TW[e]) == null ? void 0 : n[t]) != null ? r : e;
}
function _W(e) {
  var t;
  const {
    isOpen: n,
    onClose: r,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = ho(), l = (t = s.components) == null ? void 0 : t.Drawer, u = EW(o, s.direction);
  return /* @__PURE__ */ w.jsx(kW, { value: { placement: u }, children: /* @__PURE__ */ w.jsx(
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
var OW = X(OP), rT = oe(
  (e, t) => {
    const {
      className: n,
      children: r,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = uo(), c = s(a, t), d = l(i), f = ae("chakra-modal__content", n), p = Pa(), y = {
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
    }, { placement: S } = PW();
    return /* @__PURE__ */ w.jsx(nT, { children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: g,
        children: /* @__PURE__ */ w.jsx(
          OW,
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
rT.displayName = "DrawerContent";
var El = oe(
  (e, t) => {
    const { className: n, ...r } = e, { headerId: o, setHeaderMounted: i } = uo();
    v.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = ae("chakra-modal__header", n), l = {
      flex: 0,
      ...Pa().header
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
var MW = X(or.div), _l = oe(
  (e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e, a = ae("chakra-modal__overlay", n), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Pa().overlay
    }, { motionPreset: u } = uo(), d = o || (u === "none" ? {} : EP);
    return /* @__PURE__ */ w.jsx(
      MW,
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
_l.displayName = "ModalOverlay";
var Ol = oe((e, t) => {
  const { className: n, ...r } = e, { bodyId: o, setBodyMounted: i } = uo();
  v.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = ae("chakra-modal__body", n), s = Pa();
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
var nf = oe(
  (e, t) => {
    const { onClick: n, className: r, ...o } = e, { onClose: i } = uo(), a = ae("chakra-modal__close-btn", r), s = Pa();
    return /* @__PURE__ */ w.jsx(
      qd,
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
nf.displayName = "ModalCloseButton";
var [IW, ri] = Je({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [RW, Ml] = Je({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), oT = oe(
  function(t, n) {
    const { getHeaderProps: r } = ri(), o = Ml();
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
oT.displayName = "PopoverHeader";
function Dg(e) {
  const t = v.Children.only(e.children), { getTriggerProps: n } = ri();
  return v.cloneElement(t, n(t.props, t.ref));
}
Dg.displayName = "PopoverTrigger";
var pi = {
  click: "click",
  hover: "hover"
};
function $W(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: n = !0,
    initialFocusRef: r,
    id: o,
    returnFocusOnClose: i = !0,
    autoFocus: a = !0,
    arrowSize: s,
    arrowShadowColor: l,
    trigger: u = pi.click,
    openDelay: c = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: y,
    ...g
  } = e, { isOpen: S, onClose: m, onOpen: h, onToggle: b } = j2(e), x = v.useRef(null), k = v.useRef(null), P = v.useRef(null), T = v.useRef(!1), E = v.useRef(!1);
  S && (E.current = !0);
  const [M, I] = v.useState(!1), [D, G] = v.useState(!1), H = v.useId(), L = o ?? H, [W, K, $, A] = [
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
  } = z2({
    ...g,
    enabled: S || !!y
  }), te = V2({ isOpen: S, ref: P });
  l6({
    enabled: S,
    ref: k
  }), _2(P, {
    focusRef: k,
    visible: S,
    shouldFocus: i && u === pi.click
  }), K9(P, {
    focusRef: r,
    visible: S,
    shouldFocus: a && u === pi.click
  });
  const le = B2({
    wasSelected: E.current,
    enabled: f,
    mode: p,
    isSelected: te.present
  }), ie = v.useCallback(
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
          const Ir = lS(Ut), vt = Ip(P.current, Ir), Nn = Ip(k.current, Ir);
          S && t && (!vt && !Nn) && m();
        }),
        "aria-labelledby": M ? $ : void 0,
        "aria-describedby": D ? A : void 0
      };
      return u === pi.hover && (Ge.role = "tooltip", Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        T.current = !0;
      }), Ge.onMouseLeave = Le(
        fe.onMouseLeave,
        (Ut) => {
          Ut.nativeEvent.relatedTarget !== null && (T.current = !1, setTimeout(() => m(), d));
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
  ), se = v.useCallback(
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
  ), me = v.useCallback(
    (fe, mt = null) => ({
      ...fe,
      // If anchor is rendered, it is used as reference.
      ref: at(mt, x, z)
    }),
    [x, z]
  ), ke = v.useRef(), et = v.useRef(), qe = v.useCallback(
    (fe) => {
      x.current == null && z(fe);
    },
    [z]
  ), on = v.useCallback(
    (fe = {}, mt = null) => {
      const Ge = {
        ...fe,
        ref: at(k, mt, qe),
        id: W,
        "aria-haspopup": "dialog",
        "aria-expanded": S,
        "aria-controls": K
      };
      return u === pi.click && (Ge.onClick = Le(fe.onClick, b)), u === pi.hover && (Ge.onFocus = Le(fe.onFocus, () => {
        ke.current === void 0 && h();
      }), Ge.onBlur = Le(fe.onBlur, (Ut) => {
        const Ir = lS(Ut), vt = !Ip(P.current, Ir);
        S && t && vt && m();
      }), Ge.onKeyDown = Le(fe.onKeyDown, (Ut) => {
        Ut.key === "Escape" && m();
      }), Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        T.current = !0, ke.current = window.setTimeout(() => h(), c);
      }), Ge.onMouseLeave = Le(fe.onMouseLeave, () => {
        T.current = !1, ke.current && (clearTimeout(ke.current), ke.current = void 0), et.current = window.setTimeout(() => {
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
  ), Mr = v.useCallback(
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
function Ip(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function lS(e) {
  var t;
  const n = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : n;
}
function Fg(e) {
  const t = Ct("Popover", e), { children: n, ...r } = Cn(e), o = ho(), i = $W({ ...r, direction: o.direction });
  return /* @__PURE__ */ w.jsx(IW, { value: i, children: /* @__PURE__ */ w.jsx(RW, { value: t, children: Xn(n, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
Fg.displayName = "Popover";
var Rp = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function Lg(e) {
  var t;
  const { bg: n, bgColor: r, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = ri(), c = Ml(), d = (t = n ?? r) != null ? t : o, f = i ?? a;
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
            "--popper-arrow-shadow-color": Rp("colors", s),
            "--popper-arrow-bg": Rp("colors", d),
            "--popper-arrow-shadow": Rp("shadows", f),
            ...c.arrow
          }
        }
      )
    }
  );
}
Lg.displayName = "PopoverArrow";
var zg = oe(
  function(t, n) {
    const { getBodyProps: r } = ri(), o = Ml();
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
zg.displayName = "PopoverBody";
var jg = oe(
  function(t, n) {
    const { onClose: r } = ri(), o = Ml();
    return /* @__PURE__ */ w.jsx(
      qd,
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
jg.displayName = "PopoverCloseButton";
function AW(e) {
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
var DW = {
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
}, FW = X(or.section), iT = oe(function(t, n) {
  const { variants: r = DW, ...o } = t, { isOpen: i } = ri();
  return /* @__PURE__ */ w.jsx(
    FW,
    {
      ref: n,
      variants: AW(r),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
iT.displayName = "PopoverTransition";
var Ng = oe(
  function(t, n) {
    const { rootProps: r, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = ri(), u = Ml(), c = {
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
          iT,
          {
            ...o,
            ...a(i, n),
            onAnimationComplete: vC(
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
Ng.displayName = "PopoverContent";
var [LW, aT] = Je({
  name: "TagStylesContext",
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
}), sT = oe((e, t) => {
  const n = Ct("Tag", e), r = Cn(e), o = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...n.container
  };
  return /* @__PURE__ */ w.jsx(LW, { value: n, children: /* @__PURE__ */ w.jsx(X.span, { ref: t, ...r, __css: o }) });
});
sT.displayName = "Tag";
var zW = oe((e, t) => {
  const n = aT();
  return /* @__PURE__ */ w.jsx(X.span, { ref: t, noOfLines: 1, ...e, __css: n.label });
});
zW.displayName = "TagLabel";
var jW = oe((e, t) => /* @__PURE__ */ w.jsx(kn, { ref: t, verticalAlign: "top", marginEnd: "0.5rem", ...e }));
jW.displayName = "TagLeftIcon";
var NW = oe((e, t) => /* @__PURE__ */ w.jsx(kn, { ref: t, verticalAlign: "top", marginStart: "0.5rem", ...e }));
NW.displayName = "TagRightIcon";
var lT = (e) => /* @__PURE__ */ w.jsx(kn, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...e, children: /* @__PURE__ */ w.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
lT.displayName = "TagCloseIcon";
var VW = oe(
  (e, t) => {
    const { isDisabled: n, children: r, ...o } = e, a = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...aT().closeButton
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
        children: r || /* @__PURE__ */ w.jsx(lT, {})
      }
    );
  }
);
VW.displayName = "TagCloseButton";
var BW = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, WW = Object.defineProperty, HW = Object.defineProperties, UW = Object.getOwnPropertyDescriptors, qc = Object.getOwnPropertySymbols, uT = Object.prototype.hasOwnProperty, cT = Object.prototype.propertyIsEnumerable, uS = (e, t, n) => t in e ? WW(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, cS = (e, t) => {
  for (var n in t || (t = {}))
    uT.call(t, n) && uS(e, n, t[n]);
  if (qc)
    for (var n of qc(t))
      cT.call(t, n) && uS(e, n, t[n]);
  return e;
}, GW = (e, t) => HW(e, UW(t)), KW = (e, t) => {
  var n = {};
  for (var r in e)
    uT.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && qc)
    for (var r of qc(e))
      t.indexOf(r) < 0 && cT.call(e, r) && (n[r] = e[r]);
  return n;
}, Ht = (e, t, n) => {
  const r = v.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = KW(a, ["color", "size", "stroke", "children"]);
      return v.createElement(
        "svg",
        cS(GW(cS({
          ref: i
        }, BW), {
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
    color: wo.string,
    size: wo.oneOfType([wo.string, wo.number]),
    stroke: wo.oneOfType([wo.string, wo.number])
  }, r.displayName = `${t}`, r;
}, YW = Ht("chevron-down", "IconChevronDown", [
  ["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]
]), qW = Ht("chevron-up", "IconChevronUp", [
  ["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]
]), XW = Ht("file-import", "IconFileImport", [
  ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }],
  [
    "path",
    {
      d: "M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3",
      key: "svg-1"
    }
  ]
]), dT = Ht("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), QW = Ht("history", "IconHistory", [
  ["path", { d: "M12 8l0 4l2 2", key: "svg-0" }],
  ["path", { d: "M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5", key: "svg-1" }]
]), ZW = Ht("menu-2", "IconMenu2", [
  ["path", { d: "M4 6l16 0", key: "svg-0" }],
  ["path", { d: "M4 12l16 0", key: "svg-1" }],
  ["path", { d: "M4 18l16 0", key: "svg-2" }]
]), JW = Ht("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), fT = Ht("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), eH = Ht("settings", "IconSettings", [
  [
    "path",
    {
      d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }]
]), tH = Ht("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]), pT = Ht("tag", "IconTag", [
  ["path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",
      key: "svg-1"
    }
  ]
]), hT = Ht("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), nH = Ht(
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
), rH = Ht("x", "IconX", [
  ["path", { d: "M18 6l-12 12", key: "svg-0" }],
  ["path", { d: "M6 6l12 12", key: "svg-1" }]
]);
let Su;
const oH = new Uint8Array(16);
function iH() {
  if (!Su && (Su = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Su))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Su(oH);
}
const ct = [];
for (let e = 0; e < 256; ++e)
  ct.push((e + 256).toString(16).slice(1));
function aH(e, t = 0) {
  return ct[e[t + 0]] + ct[e[t + 1]] + ct[e[t + 2]] + ct[e[t + 3]] + "-" + ct[e[t + 4]] + ct[e[t + 5]] + "-" + ct[e[t + 6]] + ct[e[t + 7]] + "-" + ct[e[t + 8]] + ct[e[t + 9]] + "-" + ct[e[t + 10]] + ct[e[t + 11]] + ct[e[t + 12]] + ct[e[t + 13]] + ct[e[t + 14]] + ct[e[t + 15]];
}
const sH = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), dS = {
  randomUUID: sH
};
function lH(e, t, n) {
  if (dS.randomUUID && !t && !e)
    return dS.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || iH)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return aH(r);
}
async function Vg(e) {
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
  cH(n, t);
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
async function uH(e, t) {
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
async function mT(e) {
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
async function cH(e, t) {
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
async function dH(e) {
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
async function fH() {
  try {
    return await (await fetch("/workspace/get_my_workflows_dir")).text();
  } catch (e) {
    console.error("Error getting workflows dir:", e);
  }
}
async function pH(e) {
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
function hH(e) {
  return e = e.replace(/[\\/:*?"<>|]/g, "_"), e.trim();
}
function vT(e) {
  const t = new Date(e), n = String(t.getDate()).padStart(2, "0"), r = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${r}-${n}-${o} ${i}:${a}`;
}
let Te, Ce = null, nc = null;
async function mH() {
  const e = async () => {
    let r = await Vg("workflows");
    r == null && (r = localStorage.getItem("workspace") ?? "{}"), Te = JSON.parse(r ?? "{}");
  }, t = async () => {
    Ce = await gH();
  }, n = async () => {
    nc = await Xc.load();
  };
  await Promise.all([e(), t(), n()]);
}
function vm(e, t) {
  if (Te == null)
    return;
  const n = Te[e];
  if (n == null)
    return;
  const r = {
    ...n,
    ...t,
    id: e
  }, o = JSON.stringify(n), i = JSON.stringify(r);
  if (o !== i) {
    if (Te[e] = {
      ...Te[e],
      ...t,
      updateTime: Date.now()
    }, localStorage.setItem("workspace", JSON.stringify(Te)), ya("workflows", JSON.stringify(Te)), t.name != null) {
      n.filePath && mT(n.filePath), gm(e);
      return;
    }
    t.json != null && gm(e);
  }
}
function gm(e) {
  if (Te == null)
    return;
  const t = Te[e];
  if (t == null) {
    console.error("saveToMyWorkflowsUpdateJson: workflow not found", e);
    return;
  }
  const n = hH(t.name) + ".json";
  Te[e].filePath = n, uH(n, t.json);
}
function ym({
  json: e,
  name: t
}) {
  if (Te == null)
    throw new Error("workspace is not loaded");
  const n = lH();
  return Te[n] = {
    id: n,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(Te)), ya("workflows", JSON.stringify(Te)), gm(n), Te[n];
}
function Es() {
  if (Te == null)
    throw new Error("workspace is not loaded");
  return Object.values(Te).sort((e, t) => t.updateTime - e.updateTime);
}
function vH(e) {
  var n;
  if (Te == null)
    throw new Error("workspace is not loaded");
  const t = (n = Te[e]) == null ? void 0 : n.filePath;
  delete Te[e], localStorage.setItem("workspace", JSON.stringify(Te)), ya("workflows", JSON.stringify(Te)), t != null && mT(t);
}
async function gH() {
  let e = await Vg("tags"), t = JSON.parse(e ?? "{}") ?? {};
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
function yH() {
  return JSON.stringify({
    [Xc.TABLE_NAME]: nc == null ? void 0 : nc.records,
    tags: Ce == null ? void 0 : Ce.tags,
    workflows: Te
  });
}
const Mo = class Mo {
  constructor() {
    mf(this, "records");
    this.records = {};
  }
  upsert(t) {
    this.records = {
      ...this.records,
      ...t
    }, ya(Mo.TABLE_NAME, JSON.stringify(this.records)), localStorage.setItem("comfyspace", yH());
  }
  static async load() {
    const t = new Mo();
    let n = await Vg(Mo.TABLE_NAME), r = n != null ? JSON.parse(n) : null;
    if (r == null) {
      const o = localStorage.getItem("comfyspace") ?? "{}", i = JSON.parse(o);
      r = i[Mo.TABLE_NAME], console.log("userSettings", i.userSettings);
    }
    return r != null && (t.records = r), t;
  }
};
mf(Mo, "TABLE_NAME", "userSettings");
let Xc = Mo;
const gT = v.createContext({
  curFlowID: null
}), yT = v.createContext({});
function bH({ onclose: e }) {
  const [t, n] = v.useState([]), r = async () => {
    const o = await dH("workflows");
    if (o == null)
      return;
    const i = JSON.parse(o);
    n(i);
  };
  return v.useEffect(() => {
    r();
  }, []), /* @__PURE__ */ w.jsxs(Tl, { onClose: e, size: "xl", isOpen: !0, children: [
    /* @__PURE__ */ w.jsx(_l, {}),
    /* @__PURE__ */ w.jsxs(tf, { children: [
      /* @__PURE__ */ w.jsx(El, { children: "Backups" }),
      /* @__PURE__ */ w.jsx(nf, {}),
      /* @__PURE__ */ w.jsx(Ol, { children: /* @__PURE__ */ w.jsx(IP, { allowToggle: !0, children: t.map((o) => {
        const i = parseInt(o.fileName.split(".")[0]);
        return /* @__PURE__ */ w.jsxs(PP, { children: [
          /* @__PURE__ */ w.jsx("h2", { children: /* @__PURE__ */ w.jsxs(CP, { children: [
            /* @__PURE__ */ w.jsxs(Fe, { as: "span", flex: "1", textAlign: "left", children: [
              "Saved on ",
              vT(i)
            ] }),
            /* @__PURE__ */ w.jsx(kP, {})
          ] }) }),
          /* @__PURE__ */ w.jsx(MP, { pb: 4, children: Object.values(o.jsonStr).map((a) => /* @__PURE__ */ w.jsx(Fe, { children: a.name })) })
        ] });
      }) }) })
    ] })
  ] });
}
function SH({ onclose: e }) {
  const [t, n] = v.useState((Ce == null ? void 0 : Ce.listAll()) ?? []);
  return /* @__PURE__ */ w.jsxs(Tl, { isOpen: !0, onClose: e, children: [
    /* @__PURE__ */ w.jsx(_l, {}),
    /* @__PURE__ */ w.jsxs(tf, { children: [
      /* @__PURE__ */ w.jsx(El, { children: "My Tags" }),
      /* @__PURE__ */ w.jsx(nf, {}),
      /* @__PURE__ */ w.jsx(Ol, { children: t.map((r) => /* @__PURE__ */ w.jsxs($t, { children: [
        /* @__PURE__ */ w.jsx(sT, { children: r.name }),
        /* @__PURE__ */ w.jsx(
          nl,
          {
            onClick: () => {
              Ce == null || Ce.delete(r.name), n((Ce == null ? void 0 : Ce.listAll()) ?? []);
            },
            "aria-label": "delete-tag",
            colorScheme: "red",
            variant: "ghost",
            icon: /* @__PURE__ */ w.jsx(hT, {})
          }
        )
      ] })) })
    ] })
  ] });
}
function xH({
  onclose: e
}) {
  const [t, n] = v.useState(null), r = async (o) => {
    const i = await fH();
    n(i ?? null);
  };
  return v.useEffect(() => {
    r();
  }), /* @__PURE__ */ w.jsxs(Tl, { isOpen: !0, onClose: e, size: "2xl", children: [
    /* @__PURE__ */ w.jsx(_l, {}),
    /* @__PURE__ */ w.jsxs(tf, { children: [
      /* @__PURE__ */ w.jsx(El, { children: "Settings" }),
      /* @__PURE__ */ w.jsx(nf, {}),
      /* @__PURE__ */ w.jsxs(Ol, { children: [
        /* @__PURE__ */ w.jsx(oo, { fontWeight: 600, mb: 3, children: "Workspace Save Directory" }),
        /* @__PURE__ */ w.jsxs($t, { children: [
          /* @__PURE__ */ w.jsx(oo, { children: t }),
          /* @__PURE__ */ w.jsx(
            Fn,
            {
              onClick: () => {
                pH();
              },
              paddingLeft: 10,
              paddingRight: 10,
              leftIcon: /* @__PURE__ */ w.jsx(dT, {}),
              colorScheme: "teal",
              children: "Choose Folder"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function wH({}) {
  const { isOpen: e, onOpen: t, onClose: n } = I9(), [r, o] = v.useState(!1), [i, a] = v.useState(!1);
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxs($g, { isLazy: !0, children: [
      /* @__PURE__ */ w.jsx(
        G2,
        {
          as: nl,
          "aria-label": "Options",
          icon: /* @__PURE__ */ w.jsx(ZW, {}),
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ w.jsxs(U2, { children: [
        /* @__PURE__ */ w.jsx(
          Ju,
          {
            onClick: () => a(!0),
            icon: /* @__PURE__ */ w.jsx(eH, { size: 16 }),
            fontSize: 16,
            children: "Settings"
          }
        ),
        /* @__PURE__ */ w.jsx(
          Ju,
          {
            onClick: () => o(!0),
            icon: /* @__PURE__ */ w.jsx(pT, { size: 16 }),
            fontSize: 16,
            children: "Manage Tags"
          }
        ),
        /* @__PURE__ */ w.jsx(
          Ju,
          {
            onClick: t,
            icon: /* @__PURE__ */ w.jsx(QW, { size: 16 }),
            fontSize: 16,
            children: "Backups (Experimental)"
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ w.jsx(SH, { onclose: () => o(!1) }),
    i && /* @__PURE__ */ w.jsx(xH, { onclose: () => a(!1) }),
    e && /* @__PURE__ */ w.jsx(bH, { onclose: n })
  ] });
}
function fS(e, t) {
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
    t % 2 ? fS(Object(n), !0).forEach(function(r) {
      Li(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fS(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function CH(e) {
  if (Array.isArray(e))
    return e;
}
function kH(e, t) {
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
function bm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function bT(e, t) {
  if (e) {
    if (typeof e == "string")
      return bm(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return bm(e, t);
  }
}
function PH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sr(e, t) {
  return CH(e) || kH(e, t) || bT(e, t) || PH();
}
function Or(e, t) {
  if (e == null)
    return {};
  var n = DP(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var TH = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function EH(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, o = r === void 0 ? !1 : r, i = e.defaultValue, a = i === void 0 ? null : i, s = e.inputValue, l = e.menuIsOpen, u = e.onChange, c = e.onInputChange, d = e.onMenuClose, f = e.onMenuOpen, p = e.value, y = Or(e, TH), g = v.useState(s !== void 0 ? s : n), S = Sr(g, 2), m = S[0], h = S[1], b = v.useState(l !== void 0 ? l : o), x = Sr(b, 2), k = x[0], P = x[1], T = v.useState(p !== void 0 ? p : a), E = Sr(T, 2), M = E[0], I = E[1], D = v.useCallback(function(A, z) {
    typeof u == "function" && u(A, z), I(A);
  }, [u]), G = v.useCallback(function(A, z) {
    var U;
    typeof c == "function" && (U = c(A, z)), h(U !== void 0 ? U : A);
  }, [c]), H = v.useCallback(function() {
    typeof f == "function" && f(), P(!0);
  }, [f]), L = v.useCallback(function() {
    typeof d == "function" && d(), P(!1);
  }, [d]), W = s !== void 0 ? s : m, K = l !== void 0 ? l : k, $ = p !== void 0 ? p : M;
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
function _H(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pS(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, qP(r.key), r);
  }
}
function OH(e, t, n) {
  return t && pS(e.prototype, t), n && pS(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function MH(e, t) {
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
  }), t && Hc(e, t);
}
function Qc(e) {
  return Qc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Qc(e);
}
function IH() {
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
function RH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $H(e, t) {
  if (t && (qo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return RH(e);
}
function AH(e) {
  var t = IH();
  return function() {
    var r = Qc(e), o;
    if (t) {
      var i = Qc(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return $H(this, o);
  };
}
function DH(e) {
  if (Array.isArray(e))
    return bm(e);
}
function FH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function LH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ST(e) {
  return DH(e) || FH(e) || bT(e) || LH();
}
function zH(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const jH = Math.min, NH = Math.max, Zc = Math.round, xu = Math.floor, Jc = (e) => ({
  x: e,
  y: e
});
function VH(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function xT(e) {
  return CT(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ln(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function wT(e) {
  var t;
  return (t = (CT(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function CT(e) {
  return e instanceof Node || e instanceof Ln(e).Node;
}
function Sm(e) {
  return e instanceof Element || e instanceof Ln(e).Element;
}
function Bg(e) {
  return e instanceof HTMLElement || e instanceof Ln(e).HTMLElement;
}
function hS(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ln(e).ShadowRoot;
}
function kT(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Wg(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function BH() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function WH(e) {
  return ["html", "body", "#document"].includes(xT(e));
}
function Wg(e) {
  return Ln(e).getComputedStyle(e);
}
function HH(e) {
  if (xT(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    hS(e) && e.host || // Fallback.
    wT(e)
  );
  return hS(t) ? t.host : t;
}
function PT(e) {
  const t = HH(e);
  return WH(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Bg(t) && kT(t) ? t : PT(t);
}
function ed(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = PT(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ln(o);
  return i ? t.concat(a, a.visualViewport || [], kT(o) ? o : [], a.frameElement && n ? ed(a.frameElement) : []) : t.concat(o, ed(o, [], n));
}
function UH(e) {
  const t = Wg(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Bg(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Zc(n) !== i || Zc(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Hg(e) {
  return Sm(e) ? e : e.contextElement;
}
function $p(e) {
  const t = Hg(e);
  if (!Bg(t))
    return Jc(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = UH(t);
  let a = (i ? Zc(n.width) : n.width) / r, s = (i ? Zc(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const GH = /* @__PURE__ */ Jc(0);
function KH(e) {
  const t = Ln(e);
  return !BH() || !t.visualViewport ? GH : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function YH(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ln(e) ? !1 : t;
}
function mS(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Hg(e);
  let a = Jc(1);
  t && (r ? Sm(r) && (a = $p(r)) : a = $p(e));
  const s = YH(i, n, r) ? KH(i) : Jc(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = Ln(i), p = r && Sm(r) ? Ln(r) : r;
    let y = f.frameElement;
    for (; y && r && p !== f; ) {
      const g = $p(y), S = y.getBoundingClientRect(), m = Wg(y), h = S.left + (y.clientLeft + parseFloat(m.paddingLeft)) * g.x, b = S.top + (y.clientTop + parseFloat(m.paddingTop)) * g.y;
      l *= g.x, u *= g.y, c *= g.x, d *= g.y, l += h, u += b, y = Ln(y).frameElement;
    }
  }
  return VH({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function qH(e, t) {
  let n = null, r;
  const o = wT(e);
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
    const p = xu(c), y = xu(o.clientWidth - (u + d)), g = xu(o.clientHeight - (c + f)), S = xu(u), h = {
      rootMargin: -p + "px " + -y + "px " + -g + "px " + -S + "px",
      threshold: NH(0, jH(1, l)) || 1
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
function XH(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Hg(e), c = o || i ? [...u ? ed(u) : [], ...ed(t)] : [];
  c.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), i && m.addEventListener("resize", n);
  });
  const d = u && s ? qH(u, n) : null;
  let f = -1, p = null;
  a && (p = new ResizeObserver((m) => {
    let [h] = m;
    h && h.target === u && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), u && !l && p.observe(u), p.observe(t));
  let y, g = l ? mS(e) : null;
  l && S();
  function S() {
    const m = mS(e);
    g && (m.x !== g.x || m.y !== g.y || m.width !== g.width || m.height !== g.height) && n(), g = m, y = requestAnimationFrame(S);
  }
  return n(), () => {
    c.forEach((m) => {
      o && m.removeEventListener("scroll", n), i && m.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(y);
  };
}
var xm = v.useLayoutEffect, QH = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], td = function() {
};
function ZH(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function JH(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  var i = [].concat(r);
  if (t && e)
    for (var a in t)
      t.hasOwnProperty(a) && t[a] && i.push("".concat(ZH(e, a)));
  return i.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var vS = function(t) {
  return lU(t) ? t.filter(Boolean) : qo(t) === "object" && t !== null ? [t] : [];
}, TT = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = Or(t, QH);
  return Z({}, n);
}, Ue = function(t, n, r) {
  var o = t.cx, i = t.getStyles, a = t.getClassNames, s = t.className;
  return {
    css: i(n, t),
    className: o(r ?? {}, a(n, t), s)
  };
};
function rf(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function eU(e) {
  return rf(e) ? window.innerHeight : e.clientHeight;
}
function ET(e) {
  return rf(e) ? window.pageYOffset : e.scrollTop;
}
function nd(e, t) {
  if (rf(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function tU(e) {
  var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
  if (t.position === "fixed")
    return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function nU(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function wu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : td, o = ET(e), i = t - o, a = 10, s = 0;
  function l() {
    s += a;
    var u = nU(s, o, i, n);
    nd(e, u), s < n ? window.requestAnimationFrame(l) : r(e);
  }
  l();
}
function gS(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  r.bottom + o > n.bottom ? nd(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : r.top - o < n.top && nd(e, Math.max(t.offsetTop - o, 0));
}
function rU(e) {
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
function yS() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function oU() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var _T = !1, iU = {
  get passive() {
    return _T = !0;
  }
}, Cu = typeof window < "u" ? window : {};
Cu.addEventListener && Cu.removeEventListener && (Cu.addEventListener("p", td, iU), Cu.removeEventListener("p", td, !1));
var aU = _T;
function sU(e) {
  return e != null;
}
function lU(e) {
  return Array.isArray(e);
}
function ku(e, t, n) {
  return e ? t : n;
}
var uU = function(t) {
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
}, cU = ["children", "innerProps"], dU = ["children", "innerProps"];
function fU(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, o = e.placement, i = e.shouldScroll, a = e.isFixedPosition, s = e.controlHeight, l = tU(n), u = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent)
    return u;
  var c = l.getBoundingClientRect(), d = c.height, f = n.getBoundingClientRect(), p = f.bottom, y = f.height, g = f.top, S = n.offsetParent.getBoundingClientRect(), m = S.top, h = a ? window.innerHeight : eU(l), b = ET(l), x = parseInt(getComputedStyle(n).marginBottom, 10), k = parseInt(getComputedStyle(n).marginTop, 10), P = m - k, T = h - g, E = P + b, M = d - b - g, I = p - h + b + x, D = b + g - k, G = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (T >= y)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (M >= y && !a)
        return i && wu(l, I, G), {
          placement: "bottom",
          maxHeight: t
        };
      if (!a && M >= r || a && T >= r) {
        i && wu(l, I, G);
        var H = a ? T - x : M - x;
        return {
          placement: "bottom",
          maxHeight: H
        };
      }
      if (o === "auto" || a) {
        var L = t, W = a ? P : E;
        return W >= r && (L = Math.min(W - x - s, t)), {
          placement: "top",
          maxHeight: L
        };
      }
      if (o === "bottom")
        return i && nd(l, I), {
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
      if (E >= y && !a)
        return i && wu(l, D, G), {
          placement: "top",
          maxHeight: t
        };
      if (!a && E >= r || a && P >= r) {
        var K = t;
        return (!a && E >= r || a && P >= r) && (K = a ? P - k : E - k), i && wu(l, D, G), {
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
function pU(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var OT = function(t) {
  return t === "auto" ? "bottom" : t;
}, hU = function(t, n) {
  var r, o = t.placement, i = t.theme, a = i.borderRadius, s = i.spacing, l = i.colors;
  return Z((r = {
    label: "menu"
  }, Li(r, pU(o), "100%"), Li(r, "position", "absolute"), Li(r, "width", "100%"), Li(r, "zIndex", 1), r), n ? {} : {
    backgroundColor: l.neutral0,
    borderRadius: a,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: s.menuGutter,
    marginTop: s.menuGutter
  });
}, MT = /* @__PURE__ */ v.createContext(null), mU = function(t) {
  var n = t.children, r = t.minMenuHeight, o = t.maxMenuHeight, i = t.menuPlacement, a = t.menuPosition, s = t.menuShouldScrollIntoView, l = t.theme, u = v.useContext(MT) || {}, c = u.setPortalPlacement, d = v.useRef(null), f = v.useState(o), p = Sr(f, 2), y = p[0], g = p[1], S = v.useState(null), m = Sr(S, 2), h = m[0], b = m[1], x = l.spacing.controlHeight;
  return xm(function() {
    var k = d.current;
    if (k) {
      var P = a === "fixed", T = s && !P, E = fU({
        maxHeight: o,
        menuEl: k,
        minHeight: r,
        placement: i,
        shouldScroll: T,
        isFixedPosition: P,
        controlHeight: x
      });
      g(E.maxHeight), b(E.placement), c == null || c(E.placement);
    }
  }, [o, i, a, s, r, c, x]), n({
    ref: d,
    placerProps: Z(Z({}, t), {}, {
      placement: h || OT(i),
      maxHeight: y
    })
  });
}, vU = function(t) {
  var n = t.children, r = t.innerRef, o = t.innerProps;
  return ee("div", q({}, Ue(t, "menu", {
    menu: !0
  }), {
    ref: r
  }, o), n);
}, gU = vU, yU = function(t, n) {
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
}, bU = function(t) {
  var n = t.children, r = t.innerProps, o = t.innerRef, i = t.isMulti;
  return ee("div", q({}, Ue(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": i
  }), {
    ref: o
  }, r), n);
}, IT = function(t, n) {
  var r = t.theme, o = r.spacing.baseUnit, i = r.colors;
  return Z({
    textAlign: "center"
  }, n ? {} : {
    color: i.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, SU = IT, xU = IT, wU = function(t) {
  var n = t.children, r = n === void 0 ? "No options" : n, o = t.innerProps, i = Or(t, cU);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), r);
}, CU = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, o = t.innerProps, i = Or(t, dU);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), r);
}, kU = function(t) {
  var n = t.rect, r = t.offset, o = t.position;
  return {
    left: n.left,
    position: o,
    top: r,
    width: n.width,
    zIndex: 1
  };
}, PU = function(t) {
  var n = t.appendTo, r = t.children, o = t.controlElement, i = t.innerProps, a = t.menuPlacement, s = t.menuPosition, l = v.useRef(null), u = v.useRef(null), c = v.useState(OT(a)), d = Sr(c, 2), f = d[0], p = d[1], y = v.useMemo(function() {
    return {
      setPortalPlacement: p
    };
  }, []), g = v.useState(null), S = Sr(g, 2), m = S[0], h = S[1], b = v.useCallback(function() {
    if (o) {
      var T = rU(o), E = s === "fixed" ? 0 : window.pageYOffset, M = T[f] + E;
      (M !== (m == null ? void 0 : m.offset) || T.left !== (m == null ? void 0 : m.rect.left) || T.width !== (m == null ? void 0 : m.rect.width)) && h({
        offset: M,
        rect: T
      });
    }
  }, [o, s, f, m == null ? void 0 : m.offset, m == null ? void 0 : m.rect.left, m == null ? void 0 : m.rect.width]);
  xm(function() {
    b();
  }, [b]);
  var x = v.useCallback(function() {
    typeof u.current == "function" && (u.current(), u.current = null), o && l.current && (u.current = XH(o, l.current, b, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, b]);
  xm(function() {
    x();
  }, [x]);
  var k = v.useCallback(function(T) {
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
  return ee(MT.Provider, {
    value: y
  }, n ? /* @__PURE__ */ xd.createPortal(P, n) : P);
}, TU = function(t) {
  var n = t.isDisabled, r = t.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: n ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, EU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isDisabled, i = t.isRtl;
  return ee("div", q({}, Ue(t, "container", {
    "--is-disabled": o,
    "--is-rtl": i
  }), r), n);
}, _U = function(t, n) {
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
}, OU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isMulti, i = t.hasValue;
  return ee("div", q({}, Ue(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": i
  }), r), n);
}, MU = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, IU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "indicatorsContainer", {
    indicators: !0
  }), r), n);
}, bS, RU = ["size"], $U = ["innerProps", "isRtl", "size"], AU = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
}, RT = function(t) {
  var n = t.size, r = Or(t, RU);
  return ee("svg", q({
    height: n,
    width: n,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: AU
  }, r));
}, Ug = function(t) {
  return ee(RT, q({
    size: 20
  }, t), ee("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, $T = function(t) {
  return ee(RT, q({
    size: 20
  }, t), ee("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, AT = function(t, n) {
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
}, DU = AT, FU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), n || ee($T, null));
}, LU = AT, zU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), n || ee(Ug, null));
}, jU = function(t, n) {
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
}, NU = function(t) {
  var n = t.innerProps;
  return ee("span", q({}, n, Ue(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, VU = cC(bS || (bS = zH([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), BU = function(t, n) {
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
}, Ap = function(t) {
  var n = t.delay, r = t.offset;
  return ee("span", {
    css: /* @__PURE__ */ Rv({
      animation: "".concat(VU, " 1s ease-in-out ").concat(n, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
}, WU = function(t) {
  var n = t.innerProps, r = t.isRtl, o = t.size, i = o === void 0 ? 4 : o, a = Or(t, $U);
  return ee("div", q({}, Ue(Z(Z({}, a), {}, {
    innerProps: n,
    isRtl: r,
    size: i
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), n), ee(Ap, {
    delay: 0,
    offset: r
  }), ee(Ap, {
    delay: 160,
    offset: !0
  }), ee(Ap, {
    delay: 320,
    offset: !r
  }));
}, HU = function(t, n) {
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
}, UU = function(t) {
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
}, GU = UU, KU = ["data"], YU = function(t, n) {
  var r = t.theme.spacing;
  return n ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, qU = function(t) {
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
}, XU = function(t, n) {
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
}, QU = function(t) {
  var n = TT(t);
  n.data;
  var r = Or(n, KU);
  return ee("div", q({}, Ue(t, "groupHeading", {
    "group-heading": !0
  }), r));
}, ZU = qU, JU = ["innerRef", "isDisabled", "isHidden", "inputClassName"], eG = function(t, n) {
  var r = t.isDisabled, o = t.value, i = t.theme, a = i.spacing, s = i.colors;
  return Z(Z({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, tG), n ? {} : {
    margin: a.baseUnit / 2,
    paddingBottom: a.baseUnit / 2,
    paddingTop: a.baseUnit / 2,
    color: s.neutral80
  });
}, DT = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, tG = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": Z({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, DT)
}, nG = function(t) {
  return Z({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, DT);
}, rG = function(t) {
  var n = t.cx, r = t.value, o = TT(t), i = o.innerRef, a = o.isDisabled, s = o.isHidden, l = o.inputClassName, u = Or(o, JU);
  return ee("div", q({}, Ue(t, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), ee("input", q({
    className: n({
      input: !0
    }, l),
    ref: i,
    style: nG(s),
    disabled: a
  }, u)));
}, oG = rG, iG = function(t, n) {
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
}, aG = function(t, n) {
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
}, sG = function(t, n) {
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
}, FT = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", r, n);
}, lG = FT, uG = FT;
function cG(e) {
  var t = e.children, n = e.innerProps;
  return ee("div", q({
    role: "button"
  }, n), t || ee(Ug, {
    size: 14
  }));
}
var dG = function(t) {
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
}, fG = dG, pG = function(t, n) {
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
}, hG = function(t) {
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
}, mG = hG, vG = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.colors;
  return Z({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, n ? {} : {
    color: i.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, gG = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "placeholder", {
    placeholder: !0
  }), r), n);
}, yG = gG, bG = function(t, n) {
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
}, SG = function(t) {
  var n = t.children, r = t.isDisabled, o = t.innerProps;
  return ee("div", q({}, Ue(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), o), n);
}, xG = SG, wG = {
  ClearIndicator: zU,
  Control: GU,
  DropdownIndicator: FU,
  DownChevron: $T,
  CrossIcon: Ug,
  Group: ZU,
  GroupHeading: QU,
  IndicatorsContainer: IU,
  IndicatorSeparator: NU,
  Input: oG,
  LoadingIndicator: WU,
  Menu: gU,
  MenuList: bU,
  MenuPortal: PU,
  LoadingMessage: CU,
  NoOptionsMessage: wU,
  MultiValue: fG,
  MultiValueContainer: lG,
  MultiValueLabel: uG,
  MultiValueRemove: cG,
  Option: mG,
  Placeholder: yG,
  SelectContainer: EU,
  SingleValue: xG,
  ValueContainer: OU
}, CG = function(t) {
  return Z(Z({}, wG), t.components);
}, SS = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function kG(e, t) {
  return !!(e === t || SS(e) && SS(t));
}
function PG(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!kG(e[n], t[n]))
      return !1;
  return !0;
}
function TG(e, t) {
  t === void 0 && (t = PG);
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
var EG = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
}, _G = function(t) {
  return ee("span", q({
    css: EG
  }, t));
}, xS = _G, OG = {
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
    var n = t.context, r = t.focused, o = t.options, i = t.label, a = i === void 0 ? "" : i, s = t.selectValue, l = t.isDisabled, u = t.isSelected, c = function(y, g) {
      return y && y.length ? "".concat(y.indexOf(g) + 1, " of ").concat(y.length) : "";
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
}, MG = function(t) {
  var n = t.ariaSelection, r = t.focusedOption, o = t.focusedValue, i = t.focusableOptions, a = t.isFocused, s = t.selectValue, l = t.selectProps, u = t.id, c = l.ariaLiveMessages, d = l.getOptionLabel, f = l.inputValue, p = l.isMulti, y = l.isOptionDisabled, g = l.isSearchable, S = l.menuIsOpen, m = l.options, h = l.screenReaderStatus, b = l.tabSelectsValue, x = l["aria-label"], k = l["aria-live"], P = v.useMemo(function() {
    return Z(Z({}, OG), c || {});
  }, [c]), T = v.useMemo(function() {
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
  }, [n, P, y, s, d]), E = v.useMemo(function() {
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
  }, [i, f, S, P, m, h]), I = v.useMemo(function() {
    var L = "";
    if (P.guidance) {
      var W = o ? "value" : S ? "menu" : "input";
      L = P.guidance({
        "aria-label": x,
        context: W,
        isDisabled: r && y(r, s),
        isMulti: p,
        isSearchable: g,
        tabSelectsValue: b
      });
    }
    return L;
  }, [x, r, o, p, y, g, S, P, s, b]), D = "".concat(E, " ").concat(M, " ").concat(I), G = ee(v.Fragment, null, ee("span", {
    id: "aria-selection"
  }, T), ee("span", {
    id: "aria-context"
  }, D)), H = (n == null ? void 0 : n.action) === "initial-input-focus";
  return ee(v.Fragment, null, ee(xS, {
    id: u
  }, H && G), ee(xS, {
    "aria-live": k,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, a && !H && G));
}, IG = MG, wm = [{
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
}], RG = new RegExp("[" + wm.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), LT = {};
for (var Dp = 0; Dp < wm.length; Dp++)
  for (var Fp = wm[Dp], Lp = 0; Lp < Fp.letters.length; Lp++)
    LT[Fp.letters[Lp]] = Fp.base;
var zT = function(t) {
  return t.replace(RG, function(n) {
    return LT[n];
  });
}, $G = TG(zT), wS = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, AG = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, DG = function(t) {
  return function(n, r) {
    if (n.data.__isNew__)
      return !0;
    var o = Z({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: AG,
      trim: !0,
      matchFrom: "any"
    }, t), i = o.ignoreCase, a = o.ignoreAccents, s = o.stringify, l = o.trim, u = o.matchFrom, c = l ? wS(r) : r, d = l ? wS(s(n)) : s(n);
    return i && (c = c.toLowerCase(), d = d.toLowerCase()), a && (c = $G(c), d = zT(d)), u === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1;
  };
}, FG = ["innerRef"];
function LG(e) {
  var t = e.innerRef, n = Or(e, FG), r = uU(n, "onExited", "in", "enter", "exit", "appear");
  return ee("input", q({
    ref: t
  }, r, {
    css: /* @__PURE__ */ Rv({
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
var zG = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function jG(e) {
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, o = e.onTopArrive, i = e.onTopLeave, a = v.useRef(!1), s = v.useRef(!1), l = v.useRef(0), u = v.useRef(null), c = v.useCallback(function(S, m) {
    if (u.current !== null) {
      var h = u.current, b = h.scrollTop, x = h.scrollHeight, k = h.clientHeight, P = u.current, T = m > 0, E = x - k - b, M = !1;
      E > m && a.current && (r && r(S), a.current = !1), T && s.current && (i && i(S), s.current = !1), T && m > E ? (n && !a.current && n(S), P.scrollTop = x, M = !0, a.current = !0) : !T && -m > b && (o && !s.current && o(S), P.scrollTop = 0, M = !0, s.current = !0), M && zG(S);
    }
  }, [n, r, o, i]), d = v.useCallback(function(S) {
    c(S, S.deltaY);
  }, [c]), f = v.useCallback(function(S) {
    l.current = S.changedTouches[0].clientY;
  }, []), p = v.useCallback(function(S) {
    var m = l.current - S.changedTouches[0].clientY;
    c(S, m);
  }, [c]), y = v.useCallback(function(S) {
    if (S) {
      var m = aU ? {
        passive: !1
      } : !1;
      S.addEventListener("wheel", d, m), S.addEventListener("touchstart", f, m), S.addEventListener("touchmove", p, m);
    }
  }, [p, f, d]), g = v.useCallback(function(S) {
    S && (S.removeEventListener("wheel", d, !1), S.removeEventListener("touchstart", f, !1), S.removeEventListener("touchmove", p, !1));
  }, [p, f, d]);
  return v.useEffect(function() {
    if (t) {
      var S = u.current;
      return y(S), function() {
        g(S);
      };
    }
  }, [t, y, g]), function(S) {
    u.current = S;
  };
}
var CS = ["boxSizing", "height", "overflow", "paddingRight", "position"], kS = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function PS(e) {
  e.preventDefault();
}
function TS(e) {
  e.stopPropagation();
}
function ES() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function _S() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var OS = !!(typeof window < "u" && window.document && window.document.createElement), Ga = 0, hi = {
  capture: !1,
  passive: !1
};
function NG(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, o = v.useRef({}), i = v.useRef(null), a = v.useCallback(function(l) {
    if (OS) {
      var u = document.body, c = u && u.style;
      if (r && CS.forEach(function(y) {
        var g = c && c[y];
        o.current[y] = g;
      }), r && Ga < 1) {
        var d = parseInt(o.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, p = window.innerWidth - f + d || 0;
        Object.keys(kS).forEach(function(y) {
          var g = kS[y];
          c && (c[y] = g);
        }), c && (c.paddingRight = "".concat(p, "px"));
      }
      u && _S() && (u.addEventListener("touchmove", PS, hi), l && (l.addEventListener("touchstart", ES, hi), l.addEventListener("touchmove", TS, hi))), Ga += 1;
    }
  }, [r]), s = v.useCallback(function(l) {
    if (OS) {
      var u = document.body, c = u && u.style;
      Ga = Math.max(Ga - 1, 0), r && Ga < 1 && CS.forEach(function(d) {
        var f = o.current[d];
        c && (c[d] = f);
      }), u && _S() && (u.removeEventListener("touchmove", PS, hi), l && (l.removeEventListener("touchstart", ES, hi), l.removeEventListener("touchmove", TS, hi)));
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
var VG = function(t) {
  var n = t.target;
  return n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur();
}, BG = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function WG(e) {
  var t = e.children, n = e.lockEnabled, r = e.captureEnabled, o = r === void 0 ? !0 : r, i = e.onBottomArrive, a = e.onBottomLeave, s = e.onTopArrive, l = e.onTopLeave, u = jG({
    isEnabled: o,
    onBottomArrive: i,
    onBottomLeave: a,
    onTopArrive: s,
    onTopLeave: l
  }), c = NG({
    isEnabled: n
  }), d = function(p) {
    u(p), c(p);
  };
  return ee(v.Fragment, null, n && ee("div", {
    onClick: VG,
    css: BG
  }), t(d));
}
var HG = {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
}, UG = function(t) {
  var n = t.name, r = t.onFocus;
  return ee("input", {
    required: !0,
    name: n,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: HG,
    value: "",
    onChange: function() {
    }
  });
}, GG = UG, KG = function(t) {
  return t.label;
}, YG = function(t) {
  return t.label;
}, qG = function(t) {
  return t.value;
}, XG = function(t) {
  return !!t.isDisabled;
}, QG = {
  clearIndicator: LU,
  container: TU,
  control: HU,
  dropdownIndicator: DU,
  group: YU,
  groupHeading: XU,
  indicatorsContainer: MU,
  indicatorSeparator: jU,
  input: eG,
  loadingIndicator: BU,
  loadingMessage: xU,
  menu: hU,
  menuList: yU,
  menuPortal: kU,
  multiValue: iG,
  multiValueLabel: aG,
  multiValueRemove: sG,
  noOptionsMessage: SU,
  option: pG,
  placeholder: vG,
  singleValue: bG,
  valueContainer: _U
}, ZG = {
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
}, JG = 4, jT = 4, eK = 38, tK = jT * 2, nK = {
  baseUnit: jT,
  controlHeight: eK,
  menuGutter: tK
}, zp = {
  borderRadius: JG,
  colors: ZG,
  spacing: nK
}, rK = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: yS(),
  captureMenuScroll: !yS(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: DG(),
  formatGroupLabel: KG,
  getOptionLabel: YG,
  getOptionValue: qG,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: XG,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !oU(),
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
function MS(e, t, n, r) {
  var o = WT(e, t, n), i = HT(e, t, n), a = BT(e, t), s = rd(e, t);
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
function NT(e, t) {
  return e.options.map(function(n, r) {
    if ("options" in n) {
      var o = n.options.map(function(a, s) {
        return MS(e, a, t, s);
      }).filter(function(a) {
        return IS(e, a);
      });
      return o.length > 0 ? {
        type: "group",
        data: n,
        options: o,
        index: r
      } : void 0;
    }
    var i = MS(e, n, t, r);
    return IS(e, i) ? i : void 0;
  }).filter(sU);
}
function VT(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, ST(n.options.map(function(r) {
      return r.data;
    }))) : t.push(n.data), t;
  }, []);
}
function oK(e, t) {
  return VT(NT(e, t));
}
function IS(e, t) {
  var n = e.inputValue, r = n === void 0 ? "" : n, o = t.data, i = t.isSelected, a = t.label, s = t.value;
  return (!GT(e) || !i) && UT(e, {
    label: a,
    value: s,
    data: o
  }, r);
}
function iK(e, t) {
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
function aK(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var BT = function(t, n) {
  return t.getOptionLabel(n);
}, rd = function(t, n) {
  return t.getOptionValue(n);
};
function WT(e, t, n) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function HT(e, t, n) {
  if (n.indexOf(t) > -1)
    return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var r = rd(e, t);
  return n.some(function(o) {
    return rd(e, o) === r;
  });
}
function UT(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var GT = function(t) {
  var n = t.hideSelectedOptions, r = t.isMulti;
  return n === void 0 ? r : n;
}, sK = 1, KT = /* @__PURE__ */ function(e) {
  MH(n, e);
  var t = AH(n);
  function n(r) {
    var o;
    if (_H(this, n), o = t.call(this, r), o.state = {
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
        var g = o.getOptionValue(s);
        o.setValue(f.filter(function(S) {
          return o.getOptionValue(S) !== g;
        }), "deselect-option", s);
      } else if (!y)
        c ? o.setValue([].concat(ST(f), [s]), "select-option", s) : o.setValue(s, "select-option");
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
      return JH.apply(void 0, [o.props.classNamePrefix].concat(l));
    }, o.getOptionLabel = function(s) {
      return BT(o.props, s);
    }, o.getOptionValue = function(s) {
      return rd(o.props, s);
    }, o.getStyles = function(s, l) {
      var u = o.props.unstyled, c = QG[s](l, u);
      c.boxSizing = "border-box";
      var d = o.props.styles[s];
      return d ? d(c, l) : c;
    }, o.getClassNames = function(s, l) {
      var u, c;
      return (u = (c = o.props.classNames)[s]) === null || u === void 0 ? void 0 : u.call(c, l);
    }, o.getElementId = function(s) {
      return "".concat(o.instancePrefix, "-").concat(s);
    }, o.getComponents = function() {
      return CG(o.props);
    }, o.buildCategorizedOptions = function() {
      return NT(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return VT(o.buildCategorizedOptions());
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
      typeof o.props.closeMenuOnScroll == "boolean" ? s.target instanceof HTMLElement && rf(s.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(s) && o.props.onMenuClose();
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
      return GT(o.props);
    }, o.onValueInputFocus = function(s) {
      s.preventDefault(), s.stopPropagation(), o.focus();
    }, o.onKeyDown = function(s) {
      var l = o.props, u = l.isMulti, c = l.backspaceRemovesValue, d = l.escapeClearsValue, f = l.inputValue, p = l.isClearable, y = l.isDisabled, g = l.menuIsOpen, S = l.onKeyDown, m = l.tabSelectsValue, h = l.openMenuOnFocus, b = o.state, x = b.focusedOption, k = b.focusedValue, P = b.selectValue;
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
    }, o.instancePrefix = "react-select-" + (o.props.instanceId || ++sK), o.state.selectValue = vS(r.value), r.menuIsOpen && o.state.selectValue.length) {
      var i = o.buildFocusableOptions(), a = i.indexOf(o.state.selectValue[0]);
      o.state.focusedOption = i[a];
    }
    return o;
  }
  return OH(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && gS(this.menuListRef, this.focusedOptionRef);
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
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (gS(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
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
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(zp) : Z(Z({}, zp), this.props.theme) : zp;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, i = this.cx, a = this.getStyles, s = this.getClassNames, l = this.getValue, u = this.selectOption, c = this.setValue, d = this.props, f = d.isMulti, p = d.isRtl, y = d.options, g = this.hasValue();
      return {
        clearValue: o,
        cx: i,
        getStyles: a,
        getClassNames: s,
        getValue: l,
        hasValue: g,
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
      return WT(this.props, o, i);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, i) {
      return HT(this.props, o, i);
    }
  }, {
    key: "filterOption",
    value: function(o, i) {
      return UT(this.props, o, i);
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
        var o = this.props, i = o.isDisabled, a = o.isSearchable, s = o.inputId, l = o.inputValue, u = o.tabIndex, c = o.form, d = o.menuIsOpen, f = o.required, p = this.getComponents(), y = p.Input, g = this.state, S = g.inputIsHidden, m = g.ariaSelection, h = this.commonProps, b = s || this.getElementId("input"), x = Z(Z(Z({
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
        return a ? /* @__PURE__ */ v.createElement(y, q({}, h, {
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
        }, x)) : /* @__PURE__ */ v.createElement(LG, q({
          id: b,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: td,
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
      var o = this, i = this.getComponents(), a = i.MultiValue, s = i.MultiValueContainer, l = i.MultiValueLabel, u = i.MultiValueRemove, c = i.SingleValue, d = i.Placeholder, f = this.commonProps, p = this.props, y = p.controlShouldRenderValue, g = p.isDisabled, S = p.isMulti, m = p.inputValue, h = p.placeholder, b = this.state, x = b.selectValue, k = b.focusedValue, P = b.isFocused;
      if (!this.hasValue() || !y)
        return m ? null : /* @__PURE__ */ v.createElement(d, q({}, f, {
          key: "placeholder",
          isDisabled: g,
          isFocused: P,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), h);
      if (S)
        return x.map(function(E, M) {
          var I = E === k, D = "".concat(o.getOptionLabel(E), "-").concat(o.getOptionValue(E));
          return /* @__PURE__ */ v.createElement(a, q({}, f, {
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
                return o.removeValue(E);
              },
              onTouchEnd: function() {
                return o.removeValue(E);
              },
              onMouseDown: function(H) {
                H.preventDefault();
              }
            },
            data: E
          }), o.formatOptionLabel(E, "value"));
        });
      if (m)
        return null;
      var T = x[0];
      return /* @__PURE__ */ v.createElement(c, q({}, f, {
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
      var o = this, i = this.getComponents(), a = i.Group, s = i.GroupHeading, l = i.Menu, u = i.MenuList, c = i.MenuPortal, d = i.LoadingMessage, f = i.NoOptionsMessage, p = i.Option, y = this.commonProps, g = this.state.focusedOption, S = this.props, m = S.captureMenuScroll, h = S.inputValue, b = S.isLoading, x = S.loadingMessage, k = S.minMenuHeight, P = S.maxMenuHeight, T = S.menuIsOpen, E = S.menuPlacement, M = S.menuPosition, I = S.menuPortalTarget, D = S.menuShouldBlockScroll, G = S.menuShouldScrollIntoView, H = S.noOptionsMessage, L = S.onMenuScrollToTop, W = S.onMenuScrollToBottom;
      if (!T)
        return null;
      var K = function(j, te) {
        var le = j.type, ie = j.data, se = j.isDisabled, me = j.isSelected, ke = j.label, et = j.value, qe = g === ie, on = se ? void 0 : function() {
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
        return /* @__PURE__ */ v.createElement(p, q({}, y, {
          innerProps: fe,
          data: ie,
          isDisabled: se,
          isSelected: me,
          key: Mr,
          label: ke,
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
            return /* @__PURE__ */ v.createElement(a, q({}, y, {
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
          inputValue: h
        });
        if (A === null)
          return null;
        $ = /* @__PURE__ */ v.createElement(d, y, A);
      } else {
        var z = H({
          inputValue: h
        });
        if (z === null)
          return null;
        $ = /* @__PURE__ */ v.createElement(f, y, z);
      }
      var U = {
        minMenuHeight: k,
        maxMenuHeight: P,
        menuPlacement: E,
        menuPosition: M,
        menuShouldScrollIntoView: G
      }, V = /* @__PURE__ */ v.createElement(mU, q({}, y, U), function(Y) {
        var j = Y.ref, te = Y.placerProps, le = te.placement, ie = te.maxHeight;
        return /* @__PURE__ */ v.createElement(l, q({}, y, U, {
          innerRef: j,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove,
            id: o.getElementId("listbox")
          },
          isLoading: b,
          placement: le
        }), /* @__PURE__ */ v.createElement(WG, {
          captureEnabled: m,
          onTopArrive: L,
          onBottomArrive: W,
          lockEnabled: D
        }, function(se) {
          return /* @__PURE__ */ v.createElement(u, q({}, y, {
            innerRef: function(ke) {
              o.getMenuListRef(ke), se(ke);
            },
            isLoading: b,
            maxHeight: ie,
            focusedOption: g
          }), $);
        }));
      });
      return I || M === "fixed" ? /* @__PURE__ */ v.createElement(c, q({}, y, {
        appendTo: I,
        controlElement: this.controlRef,
        menuPlacement: E,
        menuPosition: M
      }), V) : V;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var o = this, i = this.props, a = i.delimiter, s = i.isDisabled, l = i.isMulti, u = i.name, c = i.required, d = this.state.selectValue;
      if (c && !this.hasValue() && !s)
        return /* @__PURE__ */ v.createElement(GG, {
          name: u,
          onFocus: this.onValueInputFocus
        });
      if (!(!u || s))
        if (l)
          if (a) {
            var f = d.map(function(g) {
              return o.getOptionValue(g);
            }).join(a);
            return /* @__PURE__ */ v.createElement("input", {
              name: u,
              type: "hidden",
              value: f
            });
          } else {
            var p = d.length > 0 ? d.map(function(g, S) {
              return /* @__PURE__ */ v.createElement("input", {
                key: "i-".concat(S),
                name: u,
                type: "hidden",
                value: o.getOptionValue(g)
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
      return /* @__PURE__ */ v.createElement(IG, q({}, o, {
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
      var o = this.getComponents(), i = o.Control, a = o.IndicatorsContainer, s = o.SelectContainer, l = o.ValueContainer, u = this.props, c = u.className, d = u.id, f = u.isDisabled, p = u.menuIsOpen, y = this.state.isFocused, g = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ v.createElement(s, q({}, g, {
        className: c,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: f,
        isFocused: y
      }), this.renderLiveRegion(), /* @__PURE__ */ v.createElement(i, q({}, g, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: f,
        isFocused: y,
        menuIsOpen: p
      }), /* @__PURE__ */ v.createElement(l, q({}, g, {
        isDisabled: f
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ v.createElement(a, q({}, g, {
        isDisabled: f
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, i) {
      var a = i.prevProps, s = i.clearFocusValueOnUpdate, l = i.inputIsHiddenAfterUpdate, u = i.ariaSelection, c = i.isFocused, d = i.prevWasFocused, f = o.options, p = o.value, y = o.menuIsOpen, g = o.inputValue, S = o.isMulti, m = vS(p), h = {};
      if (a && (p !== a.value || f !== a.options || y !== a.menuIsOpen || g !== a.inputValue)) {
        var b = y ? oK(o, m) : [], x = s ? iK(i, m) : null, k = aK(i, b);
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
      } : {}, T = u, E = c && d;
      return c && !E && (T = {
        value: ku(S, m, m[0] || null),
        options: m,
        action: "initial-input-focus"
      }, E = !d), (u == null ? void 0 : u.action) === "initial-input-focus" && (T = null), Z(Z(Z({}, h), P), {}, {
        prevProps: o,
        ariaSelection: T,
        prevWasFocused: E
      });
    }
  }]), n;
}(v.Component);
KT.defaultProps = rK;
var lK = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = EH(e);
  return /* @__PURE__ */ v.createElement(KT, q({
    ref: t
  }, n));
}), uK = lK, cK = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
function Cm() {
  return Cm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Cm.apply(this, arguments);
}
function dK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var YT = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = dK(t, cK);
  return Cm({}, n);
}, fK = function(t) {
  var n = typeof t == "string";
  return n && ["sm", "md", "lg"].includes(t);
}, pK = function(t) {
  return fK(t) ? t : t === "xs" ? "sm" : t === "xl" ? "lg" : "md";
}, jn = function(t) {
  var n = ho(), r = pK(n.components.Input.defaultProps.size), o = t ?? r, i = j9(typeof o == "string" ? [o] : o, {
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
var hK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.isDisabled, s = t.isRtl, l = t.hasValue, u = t.selectProps.chakraStyles, c = ba({
    position: "relative",
    direction: s ? "rtl" : void 0
  }, a ? {
    cursor: "not-allowed"
  } : {}), d = u != null && u.container ? u.container(c, t) : c;
  return /* @__PURE__ */ re.createElement(Fe, ba({}, i, {
    className: o({
      "--is-disabled": a,
      "--is-rtl": s,
      "--has-value": l
    }, r),
    sx: d
  }), n);
}, mK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isMulti, a = t.hasValue, s = t.innerProps, l = t.selectProps, u = l.chakraStyles, c = l.size, d = l.variant, f = l.focusBorderColor, p = l.errorBorderColor, y = l.controlShouldRenderValue, g = jn(c), S = Ct("Input", {
    size: g,
    variant: d,
    focusBorderColor: f,
    errorBorderColor: p
  }), m = {
    display: i && a && y ? "flex" : "grid",
    alignItems: "center",
    flex: 1,
    paddingY: "2px",
    paddingX: S.field.px,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, h = u != null && u.valueContainer ? u.valueContainer(m, t) : m;
  return /* @__PURE__ */ re.createElement(Fe, ba({}, s, {
    className: o({
      "value-container": !0,
      "value-container--is-multi": i,
      "value-container--has-value": a
    }, r),
    sx: h
  }), n);
}, vK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    flexShrink: 0
  }, l = a != null && a.indicatorsContainer ? a.indicatorsContainer(s, t) : s;
  return /* @__PURE__ */ re.createElement(Fe, ba({}, i, {
    className: o({
      indicators: !0
    }, r),
    sx: l
  }), n);
}, gK = ["height", "h"];
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
function yK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var bK = function(t) {
  var n = t.className, r = t.cx, o = t.children, i = t.innerRef, a = t.innerProps, s = t.isDisabled, l = t.isFocused, u = t.menuIsOpen, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, y = c.focusBorderColor, g = c.errorBorderColor, S = c.isInvalid, m = c.isReadOnly, h = jn(f), b = Ct("Input", {
    size: h,
    variant: p,
    focusBorderColor: y,
    errorBorderColor: g
  }), x = b.field, k = x.height, P = x.h, T = yK(x, gK), E = k || P, M = wn({}, T, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 0,
    overflow: "hidden",
    height: "auto",
    minH: E
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
    "data-readonly": m ? !0 : void 0
  }), o);
}, SK = function(t) {
  var n = t.className, r = t.cx, o = t.selectProps, i = o.chakraStyles, a = o.useBasicStyles, s = o.variant, l = wn({
    opacity: 1
  }, a || s !== "outline" ? {
    display: "none"
  } : {}), u = i != null && i.indicatorSeparator ? i.indicatorSeparator(l, t) : l;
  return /* @__PURE__ */ re.createElement(E2, {
    className: r({
      "indicator-separator": !0
    }, n),
    sx: u,
    orientation: "vertical"
  });
}, xK = function(t) {
  return /* @__PURE__ */ re.createElement(kn, wn({
    role: "presentation",
    focusable: "false",
    "aria-hidden": "true"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }));
}, wK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.useBasicStyles, u = a.size, c = a.focusBorderColor, d = a.errorBorderColor, f = a.variant, p = jn(u), y = Ct("Input", {
    size: p,
    variant: f,
    focusBorderColor: c,
    errorBorderColor: d
  }), g = {
    sm: "16px",
    md: "20px",
    lg: "24px"
  }, S = g[p], m = wn({}, y.addon, {
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
  return /* @__PURE__ */ re.createElement(Fe, wn({}, i, {
    className: o({
      indicator: !0,
      "dropdown-indicator": !0
    }, r),
    sx: h
  }), n || /* @__PURE__ */ re.createElement(xK, {
    sx: x
  }));
}, CK = function(t) {
  return /* @__PURE__ */ re.createElement(kn, wn({
    focusable: "false",
    "aria-hidden": !0
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
  }));
}, kK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = jn(l), c = Jo("CloseButton", {
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
  }, i), n || /* @__PURE__ */ re.createElement(CK, {
    sx: y
  }));
}, PK = function(t) {
  var n = t.className, r = t.cx, o = t.innerProps, i = t.selectProps, a = i.chakraStyles, s = i.size, l = t.color, u = t.emptyColor, c = t.speed, d = t.thickness, f = t.spinnerSize, p = jn(s), y = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, g = y[p], S = {
    marginRight: 3
  }, m = a != null && a.loadingIndicator ? a.loadingIndicator(S, t) : S;
  return /* @__PURE__ */ re.createElement(Yd, wn({
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
const TK = bK;
var EK = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
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
function _K(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var OK = function(t) {
  var n = t.className, r = t.cx, o = t.value, i = t.selectProps, a = i.chakraStyles, s = i.isReadOnly, l = YT(t), u = l.innerRef, c = l.isDisabled, d = l.isHidden, f = l.inputClassName, p = _K(l, EK), y = {
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
    _after: _s({
      content: 'attr(data-value) " "',
      visibility: "hidden",
      whiteSpace: "pre",
      padding: 0
    }, y)
  }, S = a != null && a.inputContainer ? a.inputContainer(g, t) : g, m = _s({
    background: 0,
    opacity: d ? 0 : 1,
    width: "100%"
  }, y), h = a != null && a.input ? a.input(m, t) : m;
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
    sx: h,
    disabled: c,
    readOnly: s ? !0 : void 0
  }, p)));
};
const MK = OK;
var IK = ["data"];
function RK(e, t) {
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
var $K = function(t) {
  var n = {
    bottom: "top",
    top: "bottom"
  };
  return t ? n[t] : "top";
}, AK = function(t) {
  var n, r = t.className, o = t.cx, i = t.children, a = t.innerProps, s = t.innerRef, l = t.placement, u = t.selectProps.chakraStyles, c = (n = {
    position: "absolute"
  }, n[$K(l)] = "100%", n.marginY = "8px", n.width = "100%", n.zIndex = 1, n), d = u != null && u.menu ? u.menu(c, t) : c;
  return /* @__PURE__ */ re.createElement($g, null, /* @__PURE__ */ re.createElement(Fe, Wt({}, a, {
    ref: s,
    className: o({
      menu: !0
    }, r),
    sx: d
  }), i));
};
const DK = AK;
var FK = function(t) {
  var n, r = t.className, o = t.cx, i = t.innerRef, a = t.children, s = t.maxHeight, l = t.isMulti, u = t.innerProps, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, y = c.focusBorderColor, g = c.errorBorderColor, S = Ct("Menu"), m = jn(f), h = Ct("Input", {
    size: m,
    variant: p,
    focusBorderColor: y,
    errorBorderColor: g
  }), b = h.field, x = Wt({}, S.list, {
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
}, LK = function(t) {
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
}, zK = function(t) {
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
}, jK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.theme, a = t.getStyles, s = t.Heading, l = t.headingProps, u = t.label, c = t.selectProps, d = t.innerProps, f = t.getClassNames, p = c.chakraStyles, y = {}, g = p != null && p.group ? p.group(y, t) : y;
  return /* @__PURE__ */ re.createElement(Fe, Wt({}, d, {
    className: o({
      group: !0
    }, r),
    sx: g
  }), /* @__PURE__ */ re.createElement(s, Wt({}, l, {
    selectProps: c,
    cx: o,
    theme: i,
    getStyles: a,
    getClassNames: f
  }), u), /* @__PURE__ */ re.createElement(Fe, null, n));
}, NK = function(t) {
  var n = t.cx, r = t.className, o = t.selectProps, i = o.chakraStyles, a = o.size, s = o.hasStickyGroupHeaders, l = YT(t);
  l.data;
  var u = RK(l, IK), c = Ct("Menu"), d = jn(a), f = {
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
  }), g = i != null && i.groupHeading ? i.groupHeading(y, t) : y;
  return /* @__PURE__ */ re.createElement(Fe, Wt({}, u, {
    className: n({
      "group-heading": !0
    }, r),
    sx: g
  }));
}, VK = function(t) {
  return /* @__PURE__ */ re.createElement("svg", Wt({
    viewBox: "0 0 14 14",
    width: "1em",
    height: "1em"
  }, t), /* @__PURE__ */ re.createElement("polygon", {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }));
}, BK = function(t) {
  var n = t.className, r = t.cx, o = t.innerRef, i = t.innerProps, a = t.children, s = t.isFocused, l = t.isDisabled, u = t.isSelected, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.isMulti, y = c.hideSelectedOptions, g = c.selectedOptionStyle, S = c.selectedOptionColorScheme, m = Ct("Menu").item, h = jn(f), b = {
    sm: "0.6rem",
    md: "0.8rem",
    lg: "1rem"
  }, x = {
    sm: "0.3rem",
    md: "0.4rem",
    lg: "0.5rem"
  }, k = Oy(S + ".500", S + ".300"), P = Oy("white", "black"), T = g === "check" && (!p || y === !1), E = g === "color", M = Wt({}, m, {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "100%",
    textAlign: "start",
    fontSize: h,
    paddingX: b[h],
    paddingY: x[h]
  }, E && {
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
  }), T && /* @__PURE__ */ re.createElement(Ag, {
    fontSize: "0.8em",
    marginEnd: "0.75rem",
    opacity: u ? 1 : 0
  }, /* @__PURE__ */ re.createElement(VK, null)), a);
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
var WK = function(t) {
  return typeof t == "object" && t !== null && "colorScheme" in t && typeof t.colorScheme == "string";
}, HK = function(t) {
  return typeof t == "object" && t !== null && "variant" in t && typeof t.variant == "string";
}, qT = function(t) {
  return typeof t == "object" && t !== null && "isFixed" in t && typeof t.isFixed == "boolean";
}, UK = function(t) {
  var n = t.children, r = t.className, o = t.components, i = t.cx, a = t.data, s = t.innerProps, l = t.isDisabled, u = t.isFocused, c = t.removeProps, d = t.selectProps, f = t.cropWithEllipsis, p = o.Container, y = o.Label, g = o.Remove, S = d.chakraStyles, m = d.colorScheme, h = d.tagVariant, b = d.size, x = jn(b), k = "", P = "", T = !1;
  WK(a) && (k = a.colorScheme), HK(a) && (P = a.variant), qT(a) && (T = a.isFixed);
  var E = Ct("Tag", {
    size: x,
    colorScheme: k || m,
    variant: P || h || (T ? "solid" : "subtle")
  }), M = Rn({}, E.container, {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    // resolves flex/text-overflow bug
    margin: "0.125rem"
  }), I = S != null && S.multiValue ? S.multiValue(M, t) : M, D = Rn({}, E.label, {
    overflow: "hidden",
    textOverflow: f || f === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }), G = S != null && S.multiValueLabel ? S.multiValueLabel(D, t) : D, H = Rn({}, E.closeButton, {
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
}, GK = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, Rn({}, r, {
    sx: o
  }), n);
}, KK = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, Rn({}, r, {
    sx: o
  }), n);
}, YK = function(t) {
  return /* @__PURE__ */ re.createElement(kn, Rn({
    verticalAlign: "inherit",
    viewBox: "0 0 512 512"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }));
}, qK = function(t) {
  var n = t.children, r = t.innerProps, o = t.isFocused, i = t.data, a = t.sx;
  return qT(i) && i.isFixed ? null : /* @__PURE__ */ re.createElement(Fe, Rn({}, r, {
    role: "button",
    sx: a,
    "data-focus": o ? !0 : void 0,
    "data-focus-visible": o ? !0 : void 0
  }), n || /* @__PURE__ */ re.createElement(YK, null));
};
const XK = UK;
function km() {
  return km = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, km.apply(this, arguments);
}
var QK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    gridArea: "1 / 1 / 2 / 3",
    color: "chakra-placeholder-color",
    mx: "0.125rem",
    userSelect: "none"
  }, l = a != null && a.placeholder ? a.placeholder(s, t) : s;
  return /* @__PURE__ */ re.createElement(Fe, km({}, i, {
    className: o({
      placeholder: !0
    }, r),
    sx: l
  }), n);
};
const ZK = QK;
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
var JK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isDisabled, a = t.innerProps, s = t.selectProps.chakraStyles, l = {
    gridArea: "1 / 1 / 2 / 3",
    mx: "0.125rem",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, u = s != null && s.singleValue ? s.singleValue(l, t) : l;
  return /* @__PURE__ */ re.createElement(Fe, Pm({
    className: o({
      "single-value": !0,
      "single-value--is-disabled": i
    }, r),
    sx: u
  }, a), n);
};
const eY = JK;
var tY = {
  ClearIndicator: kK,
  Control: TK,
  DropdownIndicator: wK,
  Group: jK,
  GroupHeading: NK,
  IndicatorSeparator: SK,
  IndicatorsContainer: vK,
  Input: MK,
  LoadingIndicator: PK,
  LoadingMessage: LK,
  Menu: DK,
  MenuList: FK,
  MultiValue: XK,
  MultiValueContainer: GK,
  MultiValueLabel: KK,
  MultiValueRemove: qK,
  NoOptionsMessage: zK,
  Option: BK,
  Placeholder: ZK,
  SelectContainer: hK,
  SingleValue: eY,
  ValueContainer: mK
};
const nY = tY;
var rY = ["components", "theme", "size", "colorScheme", "isDisabled", "isInvalid", "isReadOnly", "required", "isRequired", "inputId", "tagVariant", "selectedOptionStyle", "selectedOptionColorScheme", "selectedOptionColor", "variant", "focusBorderColor", "errorBorderColor", "chakraStyles", "onFocus", "onBlur", "menuIsOpen"];
function od() {
  return od = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, od.apply(this, arguments);
}
function oY(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var iY = function(t) {
  var n, r = t.components, o = r === void 0 ? {} : r;
  t.theme;
  var i = t.size, a = t.colorScheme, s = a === void 0 ? "gray" : a, l = t.isDisabled, u = t.isInvalid, c = t.isReadOnly, d = t.required, f = t.isRequired, p = t.inputId, y = t.tagVariant, g = t.selectedOptionStyle, S = g === void 0 ? "color" : g, m = t.selectedOptionColorScheme, h = t.selectedOptionColor, b = t.variant, x = t.focusBorderColor, k = t.errorBorderColor, P = t.chakraStyles, T = P === void 0 ? {} : P, E = t.onFocus, M = t.onBlur, I = t.menuIsOpen, D = oY(t, rY), G = ho(), H = G.components.Input.defaultProps.variant, L = $P({
    id: p,
    isDisabled: l,
    isInvalid: u,
    isRequired: f,
    isReadOnly: c,
    onFocus: E,
    onBlur: M
  }), W = I ?? (L.readOnly ? !1 : void 0), K = S, $ = ["color", "check"];
  $.includes(S) || (K = "color");
  var A = m || h || "blue";
  typeof A != "string" && (A = "blue");
  var z = od({
    // Allow overriding of custom components
    components: od({}, nY, o),
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
const aY = iY;
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
var sY = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = aY(e);
  return /* @__PURE__ */ re.createElement(uK, Tm({
    ref: t
  }, n));
});
const lY = sY;
function uY({ workflow: e }) {
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
  return /* @__PURE__ */ w.jsxs(Fg, { isLazy: !0, children: [
    /* @__PURE__ */ w.jsx(Dg, { children: /* @__PURE__ */ w.jsx(Fn, { variant: "ghost", size: "sm", colorScheme: "teal", children: /* @__PURE__ */ w.jsx(pT, { color: "#718096" }) }) }),
    /* @__PURE__ */ w.jsxs(Ng, { children: [
      /* @__PURE__ */ w.jsx(Lg, {}),
      /* @__PURE__ */ w.jsx(jg, {}),
      /* @__PURE__ */ w.jsx(oT, { children: /* @__PURE__ */ w.jsx("b", { children: e.name }) }),
      /* @__PURE__ */ w.jsxs(zg, { children: [
        /* @__PURE__ */ w.jsx(
          lY,
          {
            isMulti: !0,
            name: "tags",
            options: l,
            menuIsOpen: !0,
            value: a,
            onChange: (d) => {
              s(d), vm(e.id, {
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
                Zd,
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
                  leftIcon: /* @__PURE__ */ w.jsx(fT, { size: 16 }),
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
function cY({
  isSelected: e,
  workflow: t,
  loadWorkflowID: n,
  setRecentFlow: r
}) {
  const { colorMode: o } = ka(), i = (a) => {
    vH(a);
    const s = Es();
    r(s);
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
          bg: o === "light" ? "gray.200" : "#4A5568"
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
            vT(t.updateTime)
          ] })
        ]
      }
    ),
    /* @__PURE__ */ w.jsx(uY, { workflow: t }),
    /* @__PURE__ */ w.jsx(Fg, { isLazy: !0, children: ({ isOpen: a, onClose: s }) => /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
      /* @__PURE__ */ w.jsx(Dg, { children: /* @__PURE__ */ w.jsx(hT, { color: "#F56565", cursor: "pointer" }) }),
      /* @__PURE__ */ w.jsxs(Ng, { children: [
        /* @__PURE__ */ w.jsx(Lg, {}),
        /* @__PURE__ */ w.jsx(jg, {}),
        /* @__PURE__ */ w.jsxs(zg, { children: [
          /* @__PURE__ */ w.jsx(oo, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
          /* @__PURE__ */ w.jsx(
            Fn,
            {
              colorScheme: "red",
              size: "sm",
              onClick: () => {
                i(t.id), s();
              },
              children: "Yes, delete"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
function dY() {
  const e = v.useRef(null), { setRecentFiles: t } = v.useContext(yT), n = async (o) => {
    const i = o.target.files;
    if (!i)
      return;
    const a = Array.from(i);
    console.log("filearr", a), await Promise.all(
      a.map((s) => r(s))
    ), t && t(Es());
  }, r = async (o) => new Promise((i, a) => {
    const s = new FileReader();
    s.onload = (l) => {
      var u;
      try {
        const c = (u = l.target) == null ? void 0 : u.result;
        typeof c == "string" ? i(
          ym({
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
      leftIcon: /* @__PURE__ */ w.jsx(XW, {}),
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
const RS = 6;
function fY({
  onclose: e,
  loadWorkflowID: t,
  onClickNewFlow: n
}) {
  const [r, o] = v.useState([]), { curFlowID: i } = v.useContext(gT), [a, s] = v.useState(), [l, u] = v.useState(!1);
  v.useEffect(() => {
    const d = Es();
    o(d);
  }, []);
  const c = (d) => {
    s(d), o(Es().filter((f) => {
      var p;
      return (p = f.tags) == null ? void 0 : p.includes(d);
    }));
  };
  return /* @__PURE__ */ w.jsx(yT.Provider, { value: { setRecentFiles: o }, children: /* @__PURE__ */ w.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ w.jsxs(
    _W,
    {
      isOpen: !0,
      placement: "left",
      onClose: () => e(),
      size: "sm",
      children: [
        /* @__PURE__ */ w.jsx(_l, {}),
        /* @__PURE__ */ w.jsxs(rT, { children: [
          /* @__PURE__ */ w.jsx(El, { children: /* @__PURE__ */ w.jsxs($t, { alignItems: "center", justifyContent: "space-between", children: [
            /* @__PURE__ */ w.jsxs($t, { gap: 4, children: [
              /* @__PURE__ */ w.jsx(oo, { mr: 4, children: "Workflows" }),
              /* @__PURE__ */ w.jsx(dY, {})
            ] }),
            /* @__PURE__ */ w.jsx($t, { alignItems: "center", children: /* @__PURE__ */ w.jsx(wH, {}) })
          ] }) }),
          /* @__PURE__ */ w.jsxs(Ol, { children: [
            /* @__PURE__ */ w.jsxs($t, { spacing: 2, wrap: "wrap", mb: 6, children: [
              a != null && /* @__PURE__ */ w.jsx(
                nl,
                {
                  "aria-label": "Close",
                  size: "sm",
                  icon: /* @__PURE__ */ w.jsx(rH, {}),
                  onClick: () => {
                    s(void 0), o(Es());
                  }
                }
              ),
              Ce == null ? void 0 : Ce.listAll().slice(0, l ? void 0 : RS).map((d) => /* @__PURE__ */ w.jsx(
                Fn,
                {
                  variant: "solid",
                  width: "auto",
                  flexShrink: 0,
                  size: "sm",
                  py: 4,
                  onClick: () => c(d.name),
                  isActive: a === d.name,
                  children: d.name
                }
              )),
              ((Ce == null ? void 0 : Ce.listAll().length) ?? 0) > RS && /* @__PURE__ */ w.jsx(
                nl,
                {
                  "aria-label": "Show-all-tags",
                  size: "sm",
                  icon: l ? /* @__PURE__ */ w.jsx(qW, {}) : /* @__PURE__ */ w.jsx(YW, {}),
                  onClick: () => u(!l)
                }
              )
            ] }),
            r.map((d) => /* @__PURE__ */ w.jsx(
              cY,
              {
                isSelected: d.id === i,
                workflow: d,
                loadWorkflowID: t,
                setRecentFlow: o
              }
            ))
          ] })
        ] })
      ]
    }
  ) }) });
}
const pY = {
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
function hY() {
  v.useState([]);
  const e = v.useRef({}), [t, n] = v.useState(null), [r, o] = v.useState("root"), [i, a] = v.useState(!0), [s, l] = v.useState(null), u = v.useRef(null), { colorMode: c, toggleColorMode: d } = ka(), f = (h) => {
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
    zl.registerExtension(h);
    try {
      await mH();
    } catch (k) {
      console.error("error loading db", k);
    }
    a(!1);
    const b = localStorage.getItem("curFlowID");
    if (b)
      f(b), Te && n(((x = Te[b]) == null ? void 0 : x.name) ?? "");
    else {
      const k = localStorage.getItem("workflow"), P = ym({ json: k ?? "" });
      f(P.id), n(P.name ?? "");
    }
  };
  v.useEffect(() => {
    p(), setInterval(() => {
      if (u.current != null) {
        const h = JSON.stringify(zl.graph.serialize());
        localStorage.setItem("curFlowID", u.current), h != null && vm(u.current, {
          json: h
        });
      }
    }, 1e3);
  }, []);
  const y = (h) => {
    u.current != null && vm(u.current, {
      name: h
    });
  }, g = v.useCallback(
    GM(y, 700),
    []
  ), S = (h) => {
    if (Te == null) {
      alert("Error: Workspace not loaded!");
      return;
    }
    f(h);
    const b = Te[h];
    if (b == null) {
      alert("Error: Workflow not found! id: " + h);
      return;
    }
    zl.loadGraphData(JSON.parse(b.json)), n(b.name), o("root");
  }, m = () => {
    const h = pY, b = ym({ json: JSON.stringify(h) });
    f(b.id), n(b.name), zl.loadGraphData(h);
  };
  return i ? null : /* @__PURE__ */ w.jsx(gT.Provider, { value: { curFlowID: s }, children: /* @__PURE__ */ w.jsxs(
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
                      /* @__PURE__ */ w.jsx(dT, { size: 21 }),
                      /* @__PURE__ */ w.jsx(nH, { size: 8 })
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
                    px: 2.5,
                    children: /* @__PURE__ */ w.jsxs($t, { gap: 1, children: [
                      /* @__PURE__ */ w.jsx(fT, { size: 16, color: "white" }),
                      /* @__PURE__ */ w.jsx(oo, { color: "white", fontSize: "sm", children: "New" })
                    ] })
                  }
                ),
                /* @__PURE__ */ w.jsx(
                  Zd,
                  {
                    variant: "unstyled",
                    placeholder: "Workflow name",
                    color: "white",
                    value: t ?? "",
                    maxWidth: 470,
                    onChange: (h) => {
                      n(h.target.value), g(h.target.value);
                    },
                    style: { width: `${(t == null ? void 0 : t.length) ?? 20}ch` }
                  }
                )
              ] }),
              /* @__PURE__ */ w.jsx($t, { children: /* @__PURE__ */ w.jsx(Fn, { onClick: d, variant: "link", children: c === "light" ? /* @__PURE__ */ w.jsx(JW, { size: 20 }) : /* @__PURE__ */ w.jsx(tH, { size: 20 }) }) })
            ]
          }
        ),
        r === "recentFlows" && /* @__PURE__ */ w.jsx(
          fY,
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
const XT = document.createElement("div");
document.body.append(XT);
const mY = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, vY = XL({ config: mY });
jp.createRoot(XT).render(
  /* @__PURE__ */ w.jsx(re.StrictMode, { children: /* @__PURE__ */ w.jsxs(hB, { children: [
    /* @__PURE__ */ w.jsx(sR, { initialColorMode: vY.config.initialColorMode }),
    /* @__PURE__ */ w.jsx(hY, {})
  ] }) })
);
const Em = document.body, gY = { attributes: !0, attributeFilter: ["class"] }, yY = function(e, t) {
  for (const n of e)
    if (n.type === "attributes" && n.attributeName === "class")
      for (const r of Em.classList)
        r.includes("chakra") && Em.classList.remove(r);
}, bY = new MutationObserver(yY);
bY.observe(Em, gY);
