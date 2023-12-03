import { app as Am } from "/scripts/app.js";
function hC(e, t) {
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
var ms = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vy = { exports: {} }, mu = {}, gy = { exports: {} }, K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ha = Symbol.for("react.element"), pC = Symbol.for("react.portal"), mC = Symbol.for("react.fragment"), vC = Symbol.for("react.strict_mode"), gC = Symbol.for("react.profiler"), yC = Symbol.for("react.provider"), bC = Symbol.for("react.context"), SC = Symbol.for("react.forward_ref"), xC = Symbol.for("react.suspense"), wC = Symbol.for("react.memo"), kC = Symbol.for("react.lazy"), Rm = Symbol.iterator;
function CC(e) {
  return e === null || typeof e != "object" ? null : (e = Rm && e[Rm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var yy = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, by = Object.assign, Sy = {};
function di(e, t, r) {
  this.props = e, this.context = t, this.refs = Sy, this.updater = r || yy;
}
di.prototype.isReactComponent = {};
di.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
di.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xy() {
}
xy.prototype = di.prototype;
function fh(e, t, r) {
  this.props = e, this.context = t, this.refs = Sy, this.updater = r || yy;
}
var hh = fh.prototype = new xy();
hh.constructor = fh;
by(hh, di.prototype);
hh.isPureReactComponent = !0;
var Mm = Array.isArray, wy = Object.prototype.hasOwnProperty, ph = { current: null }, ky = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cy(e, t, r) {
  var n, o = {}, i = null, a = null;
  if (t != null)
    for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      wy.call(t, n) && !ky.hasOwnProperty(n) && (o[n] = t[n]);
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
  return { $$typeof: Ha, type: e, key: i, ref: a, props: o, _owner: ph.current };
}
function _C(e, t) {
  return { $$typeof: Ha, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function mh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ha;
}
function TC(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var zm = /\/+/g;
function yc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? TC("" + e.key) : t.toString(36);
}
function qs(e, t, r, n, o) {
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
          case Ha:
          case pC:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = n === "" ? "." + yc(a, 0) : n, Mm(o) ? (r = "", e != null && (r = e.replace(zm, "$&/") + "/"), qs(o, t, r, "", function(u) {
      return u;
    })) : o != null && (mh(o) && (o = _C(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(zm, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, n = n === "" ? "." : n + ":", Mm(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = n + yc(i, s);
      a += qs(i, t, r, l, o);
    }
  else if (l = CC(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = n + yc(i, s++), a += qs(i, t, r, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function vs(e, t, r) {
  if (e == null)
    return e;
  var n = [], o = 0;
  return qs(e, n, "", "", function(i) {
    return t.call(r, i, o++);
  }), n;
}
function PC(e) {
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
var dt = { current: null }, Qs = { transition: null }, EC = { ReactCurrentDispatcher: dt, ReactCurrentBatchConfig: Qs, ReactCurrentOwner: ph };
K.Children = { map: vs, forEach: function(e, t, r) {
  vs(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return vs(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return vs(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!mh(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
K.Component = di;
K.Fragment = mC;
K.Profiler = gC;
K.PureComponent = fh;
K.StrictMode = vC;
K.Suspense = xC;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = EC;
K.cloneElement = function(e, t, r) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = by({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = ph.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      wy.call(t, l) && !ky.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
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
  return { $$typeof: Ha, type: e.type, key: o, ref: i, props: n, _owner: a };
};
K.createContext = function(e) {
  return e = { $$typeof: bC, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: yC, _context: e }, e.Consumer = e;
};
K.createElement = Cy;
K.createFactory = function(e) {
  var t = Cy.bind(null, e);
  return t.type = e, t;
};
K.createRef = function() {
  return { current: null };
};
K.forwardRef = function(e) {
  return { $$typeof: SC, render: e };
};
K.isValidElement = mh;
K.lazy = function(e) {
  return { $$typeof: kC, _payload: { _status: -1, _result: e }, _init: PC };
};
K.memo = function(e, t) {
  return { $$typeof: wC, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function(e) {
  var t = Qs.transition;
  Qs.transition = {};
  try {
    e();
  } finally {
    Qs.transition = t;
  }
};
K.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
K.useCallback = function(e, t) {
  return dt.current.useCallback(e, t);
};
K.useContext = function(e) {
  return dt.current.useContext(e);
};
K.useDebugValue = function() {
};
K.useDeferredValue = function(e) {
  return dt.current.useDeferredValue(e);
};
K.useEffect = function(e, t) {
  return dt.current.useEffect(e, t);
};
K.useId = function() {
  return dt.current.useId();
};
K.useImperativeHandle = function(e, t, r) {
  return dt.current.useImperativeHandle(e, t, r);
};
K.useInsertionEffect = function(e, t) {
  return dt.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function(e, t) {
  return dt.current.useLayoutEffect(e, t);
};
K.useMemo = function(e, t) {
  return dt.current.useMemo(e, t);
};
K.useReducer = function(e, t, r) {
  return dt.current.useReducer(e, t, r);
};
K.useRef = function(e) {
  return dt.current.useRef(e);
};
K.useState = function(e) {
  return dt.current.useState(e);
};
K.useSyncExternalStore = function(e, t, r) {
  return dt.current.useSyncExternalStore(e, t, r);
};
K.useTransition = function() {
  return dt.current.useTransition();
};
K.version = "18.2.0";
gy.exports = K;
var b = gy.exports;
const Kn = /* @__PURE__ */ dh(b), Im = /* @__PURE__ */ hC({
  __proto__: null,
  default: Kn
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
var $C = b, AC = Symbol.for("react.element"), RC = Symbol.for("react.fragment"), MC = Object.prototype.hasOwnProperty, zC = $C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, IC = { key: !0, ref: !0, __self: !0, __source: !0 };
function _y(e, t, r) {
  var n, o = {}, i = null, a = null;
  r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (n in t)
    MC.call(t, n) && !IC.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in t = e.defaultProps, t)
      o[n] === void 0 && (o[n] = t[n]);
  return { $$typeof: AC, type: e, key: i, ref: a, props: o, _owner: zC.current };
}
mu.Fragment = RC;
mu.jsx = _y;
mu.jsxs = _y;
vy.exports = mu;
var _ = vy.exports, Ad = {}, Ty = { exports: {} }, Mt = {}, Py = { exports: {} }, Ey = {};
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
  function t(z, N) {
    var V = z.length;
    z.push(N);
    e:
      for (; 0 < V; ) {
        var j = V - 1 >>> 1, J = z[j];
        if (0 < o(J, N))
          z[j] = N, z[V] = J, V = j;
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
    var N = z[0], V = z.pop();
    if (V !== N) {
      z[0] = V;
      e:
        for (var j = 0, J = z.length, W = J >>> 1; j < W; ) {
          var te = 2 * (j + 1) - 1, wt = z[te], Se = te + 1, Ie = z[Se];
          if (0 > o(wt, V))
            Se < J && 0 > o(Ie, wt) ? (z[j] = Ie, z[Se] = V, j = Se) : (z[j] = wt, z[te] = V, j = te);
          else if (Se < J && 0 > o(Ie, V))
            z[j] = Ie, z[Se] = V, j = Se;
          else
            break e;
        }
    }
    return N;
  }
  function o(z, N) {
    var V = z.sortIndex - N.sortIndex;
    return V !== 0 ? V : z.id - N.id;
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
    for (var N = r(u); N !== null; ) {
      if (N.callback === null)
        n(u);
      else if (N.startTime <= z)
        n(u), N.sortIndex = N.expirationTime, t(l, N);
      else
        break;
      N = r(u);
    }
  }
  function w(z) {
    if (y = !1, v(z), !g)
      if (r(l) !== null)
        g = !0, $e(T);
      else {
        var N = r(u);
        N !== null && ze(w, N.startTime - z);
      }
  }
  function T(z, N) {
    g = !1, y && (y = !1, m($), $ = -1), p = !0;
    var V = f;
    try {
      for (v(N), d = r(l); d !== null && (!(d.expirationTime > N) || z && !H()); ) {
        var j = d.callback;
        if (typeof j == "function") {
          d.callback = null, f = d.priorityLevel;
          var J = j(d.expirationTime <= N);
          N = e.unstable_now(), typeof J == "function" ? d.callback = J : d === r(l) && n(l), v(N);
        } else
          n(l);
        d = r(l);
      }
      if (d !== null)
        var W = !0;
      else {
        var te = r(u);
        te !== null && ze(w, te.startTime - N), W = !1;
      }
      return W;
    } finally {
      d = null, f = V, p = !1;
    }
  }
  var A = !1, P = null, $ = -1, M = 5, I = -1;
  function H() {
    return !(e.unstable_now() - I < M);
  }
  function ce() {
    if (P !== null) {
      var z = e.unstable_now();
      I = z;
      var N = !0;
      try {
        N = P(!0, z);
      } finally {
        N ? me() : (A = !1, P = null);
      }
    } else
      A = !1;
  }
  var me;
  if (typeof h == "function")
    me = function() {
      h(ce);
    };
  else if (typeof MessageChannel < "u") {
    var Z = new MessageChannel(), ue = Z.port2;
    Z.port1.onmessage = ce, me = function() {
      ue.postMessage(null);
    };
  } else
    me = function() {
      x(ce, 0);
    };
  function $e(z) {
    P = z, A || (A = !0, me());
  }
  function ze(z, N) {
    $ = x(function() {
      z(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) {
    z.callback = null;
  }, e.unstable_continueExecution = function() {
    g || p || (g = !0, $e(T));
  }, e.unstable_forceFrameRate = function(z) {
    0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < z ? Math.floor(1e3 / z) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, e.unstable_next = function(z) {
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
      return z();
    } finally {
      f = V;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(z, N) {
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
    var V = f;
    f = z;
    try {
      return N();
    } finally {
      f = V;
    }
  }, e.unstable_scheduleCallback = function(z, N, V) {
    var j = e.unstable_now();
    switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? j + V : j) : V = j, z) {
      case 1:
        var J = -1;
        break;
      case 2:
        J = 250;
        break;
      case 5:
        J = 1073741823;
        break;
      case 4:
        J = 1e4;
        break;
      default:
        J = 5e3;
    }
    return J = V + J, z = { id: c++, callback: N, priorityLevel: z, startTime: V, expirationTime: J, sortIndex: -1 }, V > j ? (z.sortIndex = V, t(u, z), r(l) === null && z === r(u) && (y ? (m($), $ = -1) : y = !0, ze(w, V - j))) : (z.sortIndex = J, t(l, z), g || p || (g = !0, $e(T))), z;
  }, e.unstable_shouldYield = H, e.unstable_wrapCallback = function(z) {
    var N = f;
    return function() {
      var V = f;
      f = N;
      try {
        return z.apply(this, arguments);
      } finally {
        f = V;
      }
    };
  };
})(Ey);
Py.exports = Ey;
var FC = Py.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $y = b, At = FC;
function R(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ay = /* @__PURE__ */ new Set(), ha = {};
function to(e, t) {
  Jo(e, t), Jo(e + "Capture", t);
}
function Jo(e, t) {
  for (ha[e] = t, e = 0; e < t.length; e++)
    Ay.add(t[e]);
}
var Dr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Rd = Object.prototype.hasOwnProperty, DC = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Fm = {}, Dm = {};
function LC(e) {
  return Rd.call(Dm, e) ? !0 : Rd.call(Fm, e) ? !1 : DC.test(e) ? Dm[e] = !0 : (Fm[e] = !0, !1);
}
function OC(e, t, r, n) {
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
function NC(e, t, r, n) {
  if (t === null || typeof t > "u" || OC(e, t, r, n))
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
function ft(e, t, r, n, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var Ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ze[e] = new ft(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ze[t] = new ft(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ze[e] = new ft(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ze[e] = new ft(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ze[e] = new ft(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ze[e] = new ft(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ze[e] = new ft(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ze[e] = new ft(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ze[e] = new ft(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  Ze[t] = new ft(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(vh, gh);
  Ze[t] = new ft(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(vh, gh);
  Ze[t] = new ft(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ze[e] = new ft(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ze.xlinkHref = new ft("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ze[e] = new ft(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yh(e, t, r, n) {
  var o = Ze.hasOwnProperty(t) ? Ze[t] : null;
  (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (NC(t, r, o, n) && (r = null), n || o === null ? LC(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Vr = $y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, gs = Symbol.for("react.element"), vo = Symbol.for("react.portal"), go = Symbol.for("react.fragment"), bh = Symbol.for("react.strict_mode"), Md = Symbol.for("react.profiler"), Ry = Symbol.for("react.provider"), My = Symbol.for("react.context"), Sh = Symbol.for("react.forward_ref"), zd = Symbol.for("react.suspense"), Id = Symbol.for("react.suspense_list"), xh = Symbol.for("react.memo"), Yr = Symbol.for("react.lazy"), zy = Symbol.for("react.offscreen"), Lm = Symbol.iterator;
function xi(e) {
  return e === null || typeof e != "object" ? null : (e = Lm && e[Lm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ee = Object.assign, bc;
function Di(e) {
  if (bc === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      bc = t && t[1] || "";
    }
  return `
` + bc + e;
}
var Sc = !1;
function xc(e, t) {
  if (!e || Sc)
    return "";
  Sc = !0;
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
    Sc = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? Di(e) : "";
}
function jC(e) {
  switch (e.tag) {
    case 5:
      return Di(e.type);
    case 16:
      return Di("Lazy");
    case 13:
      return Di("Suspense");
    case 19:
      return Di("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = xc(e.type, !1), e;
    case 11:
      return e = xc(e.type.render, !1), e;
    case 1:
      return e = xc(e.type, !0), e;
    default:
      return "";
  }
}
function Fd(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case go:
      return "Fragment";
    case vo:
      return "Portal";
    case Md:
      return "Profiler";
    case bh:
      return "StrictMode";
    case zd:
      return "Suspense";
    case Id:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case My:
        return (e.displayName || "Context") + ".Consumer";
      case Ry:
        return (e._context.displayName || "Context") + ".Provider";
      case Sh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case xh:
        return t = e.displayName || null, t !== null ? t : Fd(e.type) || "Memo";
      case Yr:
        t = e._payload, e = e._init;
        try {
          return Fd(e(t));
        } catch {
        }
    }
  return null;
}
function BC(e) {
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
      return Fd(t);
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
function pn(e) {
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
function Iy(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function VC(e) {
  var t = Iy(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
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
function ys(e) {
  e._valueTracker || (e._valueTracker = VC(e));
}
function Fy(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var r = t.getValue(), n = "";
  return e && (n = Iy(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function _l(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Dd(e, t) {
  var r = t.checked;
  return Ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function Om(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = pn(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Dy(e, t) {
  t = t.checked, t != null && yh(e, "checked", t, !1);
}
function Ld(e, t) {
  Dy(e, t);
  var r = pn(t.value), n = t.type;
  if (r != null)
    n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Od(e, t.type, r) : t.hasOwnProperty("defaultValue") && Od(e, t.type, pn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Nm(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function Od(e, t, r) {
  (t !== "number" || _l(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Li = Array.isArray;
function No(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < r.length; o++)
      t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      o = t.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + pn(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        e[o].selected = !0, n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Nd(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(R(91));
  return Ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function jm(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null)
        throw Error(R(92));
      if (Li(r)) {
        if (1 < r.length)
          throw Error(R(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: pn(r) };
}
function Ly(e, t) {
  var r = pn(t.value), n = pn(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function Bm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Oy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function jd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Oy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var bs, Ny = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (bs = bs || document.createElement("div"), bs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = bs.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function pa(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ki = {
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
}, WC = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ki).forEach(function(e) {
  WC.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ki[t] = Ki[e];
  });
});
function jy(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Ki.hasOwnProperty(e) && Ki[e] ? ("" + t).trim() : t + "px";
}
function By(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0, o = jy(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o;
    }
}
var UC = Ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Bd(e, t) {
  if (t) {
    if (UC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(R(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(R(62));
  }
}
function Vd(e, t) {
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
var Wd = null;
function wh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ud = null, jo = null, Bo = null;
function Vm(e) {
  if (e = Ya(e)) {
    if (typeof Ud != "function")
      throw Error(R(280));
    var t = e.stateNode;
    t && (t = Su(t), Ud(e.stateNode, e.type, t));
  }
}
function Vy(e) {
  jo ? Bo ? Bo.push(e) : Bo = [e] : jo = e;
}
function Wy() {
  if (jo) {
    var e = jo, t = Bo;
    if (Bo = jo = null, Vm(e), t)
      for (e = 0; e < t.length; e++)
        Vm(t[e]);
  }
}
function Uy(e, t) {
  return e(t);
}
function Hy() {
}
var wc = !1;
function Gy(e, t, r) {
  if (wc)
    return e(t, r);
  wc = !0;
  try {
    return Uy(e, t, r);
  } finally {
    wc = !1, (jo !== null || Bo !== null) && (Hy(), Wy());
  }
}
function ma(e, t) {
  var r = e.stateNode;
  if (r === null)
    return null;
  var n = Su(r);
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
    throw Error(R(231, t, typeof r));
  return r;
}
var Hd = !1;
if (Dr)
  try {
    var wi = {};
    Object.defineProperty(wi, "passive", { get: function() {
      Hd = !0;
    } }), window.addEventListener("test", wi, wi), window.removeEventListener("test", wi, wi);
  } catch {
    Hd = !1;
  }
function HC(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Yi = !1, Tl = null, Pl = !1, Gd = null, GC = { onError: function(e) {
  Yi = !0, Tl = e;
} };
function KC(e, t, r, n, o, i, a, s, l) {
  Yi = !1, Tl = null, HC.apply(GC, arguments);
}
function YC(e, t, r, n, o, i, a, s, l) {
  if (KC.apply(this, arguments), Yi) {
    if (Yi) {
      var u = Tl;
      Yi = !1, Tl = null;
    } else
      throw Error(R(198));
    Pl || (Pl = !0, Gd = u);
  }
}
function ro(e) {
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
function Ky(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Wm(e) {
  if (ro(e) !== e)
    throw Error(R(188));
}
function XC(e) {
  var t = e.alternate;
  if (!t) {
    if (t = ro(e), t === null)
      throw Error(R(188));
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
          return Wm(o), e;
        if (i === n)
          return Wm(o), t;
        i = i.sibling;
      }
      throw Error(R(188));
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
          throw Error(R(189));
      }
    }
    if (r.alternate !== n)
      throw Error(R(190));
  }
  if (r.tag !== 3)
    throw Error(R(188));
  return r.stateNode.current === r ? e : t;
}
function Yy(e) {
  return e = XC(e), e !== null ? Xy(e) : null;
}
function Xy(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Xy(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var qy = At.unstable_scheduleCallback, Um = At.unstable_cancelCallback, qC = At.unstable_shouldYield, QC = At.unstable_requestPaint, Fe = At.unstable_now, ZC = At.unstable_getCurrentPriorityLevel, kh = At.unstable_ImmediatePriority, Qy = At.unstable_UserBlockingPriority, El = At.unstable_NormalPriority, JC = At.unstable_LowPriority, Zy = At.unstable_IdlePriority, vu = null, pr = null;
function e_(e) {
  if (pr && typeof pr.onCommitFiberRoot == "function")
    try {
      pr.onCommitFiberRoot(vu, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var rr = Math.clz32 ? Math.clz32 : n_, t_ = Math.log, r_ = Math.LN2;
function n_(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (t_(e) / r_ | 0) | 0;
}
var Ss = 64, xs = 4194304;
function Oi(e) {
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
function $l(e, t) {
  var r = e.pendingLanes;
  if (r === 0)
    return 0;
  var n = 0, o = e.suspendedLanes, i = e.pingedLanes, a = r & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? n = Oi(s) : (i &= a, i !== 0 && (n = Oi(i)));
  } else
    a = r & ~o, a !== 0 ? n = Oi(a) : i !== 0 && (n = Oi(i));
  if (n === 0)
    return 0;
  if (t !== 0 && t !== n && !(t & o) && (o = n & -n, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= n; 0 < t; )
      r = 31 - rr(t), o = 1 << r, n |= e[r], t &= ~o;
  return n;
}
function o_(e, t) {
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
function i_(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - rr(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & r) || s & n) && (o[a] = o_(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Kd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Jy() {
  var e = Ss;
  return Ss <<= 1, !(Ss & 4194240) && (Ss = 64), e;
}
function kc(e) {
  for (var t = [], r = 0; 31 > r; r++)
    t.push(e);
  return t;
}
function Ga(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - rr(t), e[t] = r;
}
function a_(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - rr(r), i = 1 << o;
    t[o] = 0, n[o] = -1, e[o] = -1, r &= ~i;
  }
}
function Ch(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - rr(r), o = 1 << n;
    o & t | e[n] & t && (e[n] |= t), r &= ~o;
  }
}
var se = 0;
function e1(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var t1, _h, r1, n1, o1, Yd = !1, ws = [], nn = null, on = null, an = null, va = /* @__PURE__ */ new Map(), ga = /* @__PURE__ */ new Map(), Qr = [], s_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Hm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nn = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      an = null;
      break;
    case "pointerover":
    case "pointerout":
      va.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ga.delete(t.pointerId);
  }
}
function ki(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ya(t), t !== null && _h(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function l_(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return nn = ki(nn, e, t, r, n, o), !0;
    case "dragenter":
      return on = ki(on, e, t, r, n, o), !0;
    case "mouseover":
      return an = ki(an, e, t, r, n, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return va.set(i, ki(va.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, ga.set(i, ki(ga.get(i) || null, e, t, r, n, o)), !0;
  }
  return !1;
}
function i1(e) {
  var t = Fn(e.target);
  if (t !== null) {
    var r = ro(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = Ky(r), t !== null) {
          e.blockedOn = t, o1(e.priority, function() {
            r1(r);
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
function Zs(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Xd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      Wd = n, r.target.dispatchEvent(n), Wd = null;
    } else
      return t = Ya(r), t !== null && _h(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function Gm(e, t, r) {
  Zs(e) && r.delete(t);
}
function u_() {
  Yd = !1, nn !== null && Zs(nn) && (nn = null), on !== null && Zs(on) && (on = null), an !== null && Zs(an) && (an = null), va.forEach(Gm), ga.forEach(Gm);
}
function Ci(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Yd || (Yd = !0, At.unstable_scheduleCallback(At.unstable_NormalPriority, u_)));
}
function ya(e) {
  function t(o) {
    return Ci(o, e);
  }
  if (0 < ws.length) {
    Ci(ws[0], e);
    for (var r = 1; r < ws.length; r++) {
      var n = ws[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (nn !== null && Ci(nn, e), on !== null && Ci(on, e), an !== null && Ci(an, e), va.forEach(t), ga.forEach(t), r = 0; r < Qr.length; r++)
    n = Qr[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Qr.length && (r = Qr[0], r.blockedOn === null); )
    i1(r), r.blockedOn === null && Qr.shift();
}
var Vo = Vr.ReactCurrentBatchConfig, Al = !0;
function c_(e, t, r, n) {
  var o = se, i = Vo.transition;
  Vo.transition = null;
  try {
    se = 1, Th(e, t, r, n);
  } finally {
    se = o, Vo.transition = i;
  }
}
function d_(e, t, r, n) {
  var o = se, i = Vo.transition;
  Vo.transition = null;
  try {
    se = 4, Th(e, t, r, n);
  } finally {
    se = o, Vo.transition = i;
  }
}
function Th(e, t, r, n) {
  if (Al) {
    var o = Xd(e, t, r, n);
    if (o === null)
      zc(e, t, n, Rl, r), Hm(e, n);
    else if (l_(o, e, t, r, n))
      n.stopPropagation();
    else if (Hm(e, n), t & 4 && -1 < s_.indexOf(e)) {
      for (; o !== null; ) {
        var i = Ya(o);
        if (i !== null && t1(i), i = Xd(e, t, r, n), i === null && zc(e, t, n, Rl, r), i === o)
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else
      zc(e, t, n, null, r);
  }
}
var Rl = null;
function Xd(e, t, r, n) {
  if (Rl = null, e = wh(n), e = Fn(e), e !== null)
    if (t = ro(e), t === null)
      e = null;
    else if (r = t.tag, r === 13) {
      if (e = Ky(t), e !== null)
        return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Rl = e, null;
}
function a1(e) {
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
      switch (ZC()) {
        case kh:
          return 1;
        case Qy:
          return 4;
        case El:
        case JC:
          return 16;
        case Zy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null, Ph = null, Js = null;
function s1() {
  if (Js)
    return Js;
  var e, t = Ph, r = t.length, n, o = "value" in en ? en.value : en.textContent, i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++)
    ;
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++)
    ;
  return Js = o.slice(e, 1 < n ? 1 - n : void 0);
}
function el(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ks() {
  return !0;
}
function Km() {
  return !1;
}
function zt(e) {
  function t(r, n, o, i, a) {
    this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ks : Km, this.isPropagationStopped = Km, this;
  }
  return Ee(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = ks);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = ks);
  }, persist: function() {
  }, isPersistent: ks }), t;
}
var fi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Eh = zt(fi), Ka = Ee({}, fi, { view: 0, detail: 0 }), f_ = zt(Ka), Cc, _c, _i, gu = Ee({}, Ka, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $h, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== _i && (_i && e.type === "mousemove" ? (Cc = e.screenX - _i.screenX, _c = e.screenY - _i.screenY) : _c = Cc = 0, _i = e), Cc);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : _c;
} }), Ym = zt(gu), h_ = Ee({}, gu, { dataTransfer: 0 }), p_ = zt(h_), m_ = Ee({}, Ka, { relatedTarget: 0 }), Tc = zt(m_), v_ = Ee({}, fi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), g_ = zt(v_), y_ = Ee({}, fi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), b_ = zt(y_), S_ = Ee({}, fi, { data: 0 }), Xm = zt(S_), x_ = {
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
}, w_ = {
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
}, k_ = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function C_(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = k_[e]) ? !!t[e] : !1;
}
function $h() {
  return C_;
}
var __ = Ee({}, Ka, { key: function(e) {
  if (e.key) {
    var t = x_[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = el(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? w_[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $h, charCode: function(e) {
  return e.type === "keypress" ? el(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? el(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), T_ = zt(__), P_ = Ee({}, gu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), qm = zt(P_), E_ = Ee({}, Ka, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $h }), $_ = zt(E_), A_ = Ee({}, fi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), R_ = zt(A_), M_ = Ee({}, gu, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), z_ = zt(M_), I_ = [9, 13, 27, 32], Ah = Dr && "CompositionEvent" in window, Xi = null;
Dr && "documentMode" in document && (Xi = document.documentMode);
var F_ = Dr && "TextEvent" in window && !Xi, l1 = Dr && (!Ah || Xi && 8 < Xi && 11 >= Xi), Qm = " ", Zm = !1;
function u1(e, t) {
  switch (e) {
    case "keyup":
      return I_.indexOf(t.keyCode) !== -1;
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
function c1(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var yo = !1;
function D_(e, t) {
  switch (e) {
    case "compositionend":
      return c1(t);
    case "keypress":
      return t.which !== 32 ? null : (Zm = !0, Qm);
    case "textInput":
      return e = t.data, e === Qm && Zm ? null : e;
    default:
      return null;
  }
}
function L_(e, t) {
  if (yo)
    return e === "compositionend" || !Ah && u1(e, t) ? (e = s1(), Js = Ph = en = null, yo = !1, e) : null;
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
      return l1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var O_ = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Jm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!O_[e.type] : t === "textarea";
}
function d1(e, t, r, n) {
  Vy(n), t = Ml(t, "onChange"), 0 < t.length && (r = new Eh("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var qi = null, ba = null;
function N_(e) {
  w1(e, 0);
}
function yu(e) {
  var t = xo(e);
  if (Fy(t))
    return e;
}
function j_(e, t) {
  if (e === "change")
    return t;
}
var f1 = !1;
if (Dr) {
  var Pc;
  if (Dr) {
    var Ec = "oninput" in document;
    if (!Ec) {
      var ev = document.createElement("div");
      ev.setAttribute("oninput", "return;"), Ec = typeof ev.oninput == "function";
    }
    Pc = Ec;
  } else
    Pc = !1;
  f1 = Pc && (!document.documentMode || 9 < document.documentMode);
}
function tv() {
  qi && (qi.detachEvent("onpropertychange", h1), ba = qi = null);
}
function h1(e) {
  if (e.propertyName === "value" && yu(ba)) {
    var t = [];
    d1(t, ba, e, wh(e)), Gy(N_, t);
  }
}
function B_(e, t, r) {
  e === "focusin" ? (tv(), qi = t, ba = r, qi.attachEvent("onpropertychange", h1)) : e === "focusout" && tv();
}
function V_(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return yu(ba);
}
function W_(e, t) {
  if (e === "click")
    return yu(t);
}
function U_(e, t) {
  if (e === "input" || e === "change")
    return yu(t);
}
function H_(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var or = typeof Object.is == "function" ? Object.is : H_;
function Sa(e, t) {
  if (or(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Rd.call(t, o) || !or(e[o], t[o]))
      return !1;
  }
  return !0;
}
function rv(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function nv(e, t) {
  var r = rv(e);
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
    r = rv(r);
  }
}
function p1(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? p1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function m1() {
  for (var e = window, t = _l(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r)
      e = t.contentWindow;
    else
      break;
    t = _l(e.document);
  }
  return t;
}
function Rh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function G_(e) {
  var t = m1(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && p1(r.ownerDocument.documentElement, r)) {
    if (n !== null && Rh(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r)
        r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = r.textContent.length, i = Math.min(n.start, o);
        n = n.end === void 0 ? i : Math.min(n.end, o), !e.extend && i > n && (o = n, n = i, i = o), o = nv(r, i);
        var a = nv(
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
var K_ = Dr && "documentMode" in document && 11 >= document.documentMode, bo = null, qd = null, Qi = null, Qd = !1;
function ov(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Qd || bo == null || bo !== _l(n) || (n = bo, "selectionStart" in n && Rh(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Qi && Sa(Qi, n) || (Qi = n, n = Ml(qd, "onSelect"), 0 < n.length && (t = new Eh("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = bo)));
}
function Cs(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var So = { animationend: Cs("Animation", "AnimationEnd"), animationiteration: Cs("Animation", "AnimationIteration"), animationstart: Cs("Animation", "AnimationStart"), transitionend: Cs("Transition", "TransitionEnd") }, $c = {}, v1 = {};
Dr && (v1 = document.createElement("div").style, "AnimationEvent" in window || (delete So.animationend.animation, delete So.animationiteration.animation, delete So.animationstart.animation), "TransitionEvent" in window || delete So.transitionend.transition);
function bu(e) {
  if ($c[e])
    return $c[e];
  if (!So[e])
    return e;
  var t = So[e], r;
  for (r in t)
    if (t.hasOwnProperty(r) && r in v1)
      return $c[e] = t[r];
  return e;
}
var g1 = bu("animationend"), y1 = bu("animationiteration"), b1 = bu("animationstart"), S1 = bu("transitionend"), x1 = /* @__PURE__ */ new Map(), iv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function bn(e, t) {
  x1.set(e, t), to(t, [e]);
}
for (var Ac = 0; Ac < iv.length; Ac++) {
  var Rc = iv[Ac], Y_ = Rc.toLowerCase(), X_ = Rc[0].toUpperCase() + Rc.slice(1);
  bn(Y_, "on" + X_);
}
bn(g1, "onAnimationEnd");
bn(y1, "onAnimationIteration");
bn(b1, "onAnimationStart");
bn("dblclick", "onDoubleClick");
bn("focusin", "onFocus");
bn("focusout", "onBlur");
bn(S1, "onTransitionEnd");
Jo("onMouseEnter", ["mouseout", "mouseover"]);
Jo("onMouseLeave", ["mouseout", "mouseover"]);
Jo("onPointerEnter", ["pointerout", "pointerover"]);
Jo("onPointerLeave", ["pointerout", "pointerover"]);
to("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
to("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
to("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
to("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
to("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
to("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), q_ = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));
function av(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, YC(n, t, void 0, e), e.currentTarget = null;
}
function w1(e, t) {
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
          av(o, s, u), i = l;
        }
      else
        for (a = 0; a < n.length; a++) {
          if (s = n[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          av(o, s, u), i = l;
        }
    }
  }
  if (Pl)
    throw e = Gd, Pl = !1, Gd = null, e;
}
function ve(e, t) {
  var r = t[rf];
  r === void 0 && (r = t[rf] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (k1(t, e, 2, !1), r.add(n));
}
function Mc(e, t, r) {
  var n = 0;
  t && (n |= 4), k1(r, e, n, t);
}
var _s = "_reactListening" + Math.random().toString(36).slice(2);
function xa(e) {
  if (!e[_s]) {
    e[_s] = !0, Ay.forEach(function(r) {
      r !== "selectionchange" && (q_.has(r) || Mc(r, !1, e), Mc(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_s] || (t[_s] = !0, Mc("selectionchange", !1, t));
  }
}
function k1(e, t, r, n) {
  switch (a1(t)) {
    case 1:
      var o = c_;
      break;
    case 4:
      o = d_;
      break;
    default:
      o = Th;
  }
  r = o.bind(null, t, r, e), o = void 0, !Hd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: o }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, { passive: o }) : e.addEventListener(t, r, !1);
}
function zc(e, t, r, n, o) {
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
            if (a = Fn(s), a === null)
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
  Gy(function() {
    var u = i, c = wh(r), d = [];
    e: {
      var f = x1.get(e);
      if (f !== void 0) {
        var p = Eh, g = e;
        switch (e) {
          case "keypress":
            if (el(r) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = T_;
            break;
          case "focusin":
            g = "focus", p = Tc;
            break;
          case "focusout":
            g = "blur", p = Tc;
            break;
          case "beforeblur":
          case "afterblur":
            p = Tc;
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
            p = Ym;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = p_;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = $_;
            break;
          case g1:
          case y1:
          case b1:
            p = g_;
            break;
          case S1:
            p = R_;
            break;
          case "scroll":
            p = f_;
            break;
          case "wheel":
            p = z_;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = b_;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = qm;
        }
        var y = (t & 4) !== 0, x = !y && e === "scroll", m = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var w = v.stateNode;
          if (v.tag === 5 && w !== null && (v = w, m !== null && (w = ma(h, m), w != null && y.push(wa(h, w, v)))), x)
            break;
          h = h.return;
        }
        0 < y.length && (f = new p(f, g, null, r, c), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && r !== Wd && (g = r.relatedTarget || r.fromElement) && (Fn(g) || g[Lr]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (g = r.relatedTarget || r.toElement, p = u, g = g ? Fn(g) : null, g !== null && (x = ro(g), g !== x || g.tag !== 5 && g.tag !== 6) && (g = null)) : (p = null, g = u), p !== g)) {
          if (y = Ym, w = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (y = qm, w = "onPointerLeave", m = "onPointerEnter", h = "pointer"), x = p == null ? f : xo(p), v = g == null ? f : xo(g), f = new y(w, h + "leave", p, r, c), f.target = x, f.relatedTarget = v, w = null, Fn(c) === u && (y = new y(m, h + "enter", g, r, c), y.target = v, y.relatedTarget = x, w = y), x = w, p && g)
            t: {
              for (y = p, m = g, h = 0, v = y; v; v = uo(v))
                h++;
              for (v = 0, w = m; w; w = uo(w))
                v++;
              for (; 0 < h - v; )
                y = uo(y), h--;
              for (; 0 < v - h; )
                m = uo(m), v--;
              for (; h--; ) {
                if (y === m || m !== null && y === m.alternate)
                  break t;
                y = uo(y), m = uo(m);
              }
              y = null;
            }
          else
            y = null;
          p !== null && sv(d, f, p, y, !1), g !== null && x !== null && sv(d, x, g, y, !0);
        }
      }
      e: {
        if (f = u ? xo(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var T = j_;
        else if (Jm(f))
          if (f1)
            T = U_;
          else {
            T = V_;
            var A = B_;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (T = W_);
        if (T && (T = T(e, u))) {
          d1(d, T, r, c);
          break e;
        }
        A && A(e, f, u), e === "focusout" && (A = f._wrapperState) && A.controlled && f.type === "number" && Od(f, "number", f.value);
      }
      switch (A = u ? xo(u) : window, e) {
        case "focusin":
          (Jm(A) || A.contentEditable === "true") && (bo = A, qd = u, Qi = null);
          break;
        case "focusout":
          Qi = qd = bo = null;
          break;
        case "mousedown":
          Qd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Qd = !1, ov(d, r, c);
          break;
        case "selectionchange":
          if (K_)
            break;
        case "keydown":
        case "keyup":
          ov(d, r, c);
      }
      var P;
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
        yo ? u1(e, r) && ($ = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && ($ = "onCompositionStart");
      $ && (l1 && r.locale !== "ko" && (yo || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && yo && (P = s1()) : (en = c, Ph = "value" in en ? en.value : en.textContent, yo = !0)), A = Ml(u, $), 0 < A.length && ($ = new Xm($, e, null, r, c), d.push({ event: $, listeners: A }), P ? $.data = P : (P = c1(r), P !== null && ($.data = P)))), (P = F_ ? D_(e, r) : L_(e, r)) && (u = Ml(u, "onBeforeInput"), 0 < u.length && (c = new Xm("onBeforeInput", "beforeinput", null, r, c), d.push({ event: c, listeners: u }), c.data = P));
    }
    w1(d, t);
  });
}
function wa(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Ml(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ma(e, r), i != null && n.unshift(wa(e, i, o)), i = ma(e, t), i != null && n.push(wa(e, i, o))), e = e.return;
  }
  return n;
}
function uo(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function sv(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r, l = s.alternate, u = s.stateNode;
    if (l !== null && l === n)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = ma(r, i), l != null && a.unshift(wa(r, l, s))) : o || (l = ma(r, i), l != null && a.push(wa(r, l, s)))), r = r.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Q_ = /\r\n?/g, Z_ = /\u0000|\uFFFD/g;
function lv(e) {
  return (typeof e == "string" ? e : "" + e).replace(Q_, `
`).replace(Z_, "");
}
function Ts(e, t, r) {
  if (t = lv(t), lv(e) !== t && r)
    throw Error(R(425));
}
function zl() {
}
var Zd = null, Jd = null;
function ef(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var tf = typeof setTimeout == "function" ? setTimeout : void 0, J_ = typeof clearTimeout == "function" ? clearTimeout : void 0, uv = typeof Promise == "function" ? Promise : void 0, e2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof uv < "u" ? function(e) {
  return uv.resolve(null).then(e).catch(t2);
} : tf;
function t2(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ic(e, t) {
  var r = t, n = 0;
  do {
    var o = r.nextSibling;
    if (e.removeChild(r), o && o.nodeType === 8)
      if (r = o.data, r === "/$") {
        if (n === 0) {
          e.removeChild(o), ya(t);
          return;
        }
        n--;
      } else
        r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = o;
  } while (r);
  ya(t);
}
function sn(e) {
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
function cv(e) {
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
var hi = Math.random().toString(36).slice(2), fr = "__reactFiber$" + hi, ka = "__reactProps$" + hi, Lr = "__reactContainer$" + hi, rf = "__reactEvents$" + hi, r2 = "__reactListeners$" + hi, n2 = "__reactHandles$" + hi;
function Fn(e) {
  var t = e[fr];
  if (t)
    return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[Lr] || r[fr]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
        for (e = cv(e); e !== null; ) {
          if (r = e[fr])
            return r;
          e = cv(e);
        }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function Ya(e) {
  return e = e[fr] || e[Lr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function xo(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(R(33));
}
function Su(e) {
  return e[ka] || null;
}
var nf = [], wo = -1;
function Sn(e) {
  return { current: e };
}
function ye(e) {
  0 > wo || (e.current = nf[wo], nf[wo] = null, wo--);
}
function fe(e, t) {
  wo++, nf[wo] = e.current, e.current = t;
}
var mn = {}, ot = Sn(mn), gt = Sn(!1), Yn = mn;
function ei(e, t) {
  var r = e.type.contextTypes;
  if (!r)
    return mn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in r)
    o[i] = t[i];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function yt(e) {
  return e = e.childContextTypes, e != null;
}
function Il() {
  ye(gt), ye(ot);
}
function dv(e, t, r) {
  if (ot.current !== mn)
    throw Error(R(168));
  fe(ot, t), fe(gt, r);
}
function C1(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function")
    return r;
  n = n.getChildContext();
  for (var o in n)
    if (!(o in t))
      throw Error(R(108, BC(e) || "Unknown", o));
  return Ee({}, r, n);
}
function Fl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mn, Yn = ot.current, fe(ot, e), fe(gt, gt.current), !0;
}
function fv(e, t, r) {
  var n = e.stateNode;
  if (!n)
    throw Error(R(169));
  r ? (e = C1(e, t, Yn), n.__reactInternalMemoizedMergedChildContext = e, ye(gt), ye(ot), fe(ot, e)) : ye(gt), fe(gt, r);
}
var _r = null, xu = !1, Fc = !1;
function _1(e) {
  _r === null ? _r = [e] : _r.push(e);
}
function o2(e) {
  xu = !0, _1(e);
}
function xn() {
  if (!Fc && _r !== null) {
    Fc = !0;
    var e = 0, t = se;
    try {
      var r = _r;
      for (se = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      _r = null, xu = !1;
    } catch (o) {
      throw _r !== null && (_r = _r.slice(e + 1)), qy(kh, xn), o;
    } finally {
      se = t, Fc = !1;
    }
  }
  return null;
}
var ko = [], Co = 0, Dl = null, Ll = 0, Vt = [], Wt = 0, Xn = null, Er = 1, $r = "";
function En(e, t) {
  ko[Co++] = Ll, ko[Co++] = Dl, Dl = e, Ll = t;
}
function T1(e, t, r) {
  Vt[Wt++] = Er, Vt[Wt++] = $r, Vt[Wt++] = Xn, Xn = e;
  var n = Er;
  e = $r;
  var o = 32 - rr(n) - 1;
  n &= ~(1 << o), r += 1;
  var i = 32 - rr(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (n & (1 << a) - 1).toString(32), n >>= a, o -= a, Er = 1 << 32 - rr(t) + o | r << o | n, $r = i + e;
  } else
    Er = 1 << i | r << o | n, $r = e;
}
function Mh(e) {
  e.return !== null && (En(e, 1), T1(e, 1, 0));
}
function zh(e) {
  for (; e === Dl; )
    Dl = ko[--Co], ko[Co] = null, Ll = ko[--Co], ko[Co] = null;
  for (; e === Xn; )
    Xn = Vt[--Wt], Vt[Wt] = null, $r = Vt[--Wt], Vt[Wt] = null, Er = Vt[--Wt], Vt[Wt] = null;
}
var Pt = null, Tt = null, ke = !1, er = null;
function P1(e, t) {
  var r = Ut(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function hv(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Pt = e, Tt = sn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Pt = e, Tt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Xn !== null ? { id: Er, overflow: $r } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Ut(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Pt = e, Tt = null, !0) : !1;
    default:
      return !1;
  }
}
function of(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function af(e) {
  if (ke) {
    var t = Tt;
    if (t) {
      var r = t;
      if (!hv(e, t)) {
        if (of(e))
          throw Error(R(418));
        t = sn(r.nextSibling);
        var n = Pt;
        t && hv(e, t) ? P1(n, r) : (e.flags = e.flags & -4097 | 2, ke = !1, Pt = e);
      }
    } else {
      if (of(e))
        throw Error(R(418));
      e.flags = e.flags & -4097 | 2, ke = !1, Pt = e;
    }
  }
}
function pv(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pt = e;
}
function Ps(e) {
  if (e !== Pt)
    return !1;
  if (!ke)
    return pv(e), ke = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ef(e.type, e.memoizedProps)), t && (t = Tt)) {
    if (of(e))
      throw E1(), Error(R(418));
    for (; t; )
      P1(e, t), t = sn(t.nextSibling);
  }
  if (pv(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Tt = sn(e.nextSibling);
              break e;
            }
            t--;
          } else
            r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Tt = null;
    }
  } else
    Tt = Pt ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function E1() {
  for (var e = Tt; e; )
    e = sn(e.nextSibling);
}
function ti() {
  Tt = Pt = null, ke = !1;
}
function Ih(e) {
  er === null ? er = [e] : er.push(e);
}
var i2 = Vr.ReactCurrentBatchConfig;
function Zt(e, t) {
  if (e && e.defaultProps) {
    t = Ee({}, t), e = e.defaultProps;
    for (var r in e)
      t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Ol = Sn(null), Nl = null, _o = null, Fh = null;
function Dh() {
  Fh = _o = Nl = null;
}
function Lh(e) {
  var t = Ol.current;
  ye(Ol), e._currentValue = t;
}
function sf(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r)
      break;
    e = e.return;
  }
}
function Wo(e, t) {
  Nl = e, Fh = _o = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (vt = !0), e.firstContext = null);
}
function Yt(e) {
  var t = e._currentValue;
  if (Fh !== e)
    if (e = { context: e, memoizedValue: t, next: null }, _o === null) {
      if (Nl === null)
        throw Error(R(308));
      _o = e, Nl.dependencies = { lanes: 0, firstContext: e };
    } else
      _o = _o.next = e;
  return t;
}
var Dn = null;
function Oh(e) {
  Dn === null ? Dn = [e] : Dn.push(e);
}
function $1(e, t, r, n) {
  var o = t.interleaved;
  return o === null ? (r.next = r, Oh(t)) : (r.next = o.next, o.next = r), t.interleaved = r, Or(e, n);
}
function Or(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var Xr = !1;
function Nh(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function A1(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Mr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ln(e, t, r) {
  var n = e.updateQueue;
  if (n === null)
    return null;
  if (n = n.shared, ee & 2) {
    var o = n.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, Or(e, r);
  }
  return o = n.interleaved, o === null ? (t.next = t, Oh(n)) : (t.next = o.next, o.next = t), n.interleaved = t, Or(e, r);
}
function tl(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, Ch(e, r);
  }
}
function mv(e, t) {
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
function jl(e, t, r, n) {
  var o = e.updateQueue;
  Xr = !1;
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
              d = Ee({}, d, f);
              break e;
            case 2:
              Xr = !0;
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
    Qn |= a, e.lanes = a, e.memoizedState = d;
  }
}
function vv(e, t, r) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var n = e[t], o = n.callback;
      if (o !== null) {
        if (n.callback = null, n = r, typeof o != "function")
          throw Error(R(191, o));
        o.call(n);
      }
    }
}
var R1 = new $y.Component().refs;
function lf(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : Ee({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var wu = { isMounted: function(e) {
  return (e = e._reactInternals) ? ro(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = ut(), o = cn(e), i = Mr(n, o);
  i.payload = t, r != null && (i.callback = r), t = ln(e, i, o), t !== null && (nr(t, e, o, n), tl(t, e, o));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = ut(), o = cn(e), i = Mr(n, o);
  i.tag = 1, i.payload = t, r != null && (i.callback = r), t = ln(e, i, o), t !== null && (nr(t, e, o, n), tl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = ut(), n = cn(e), o = Mr(r, n);
  o.tag = 2, t != null && (o.callback = t), t = ln(e, o, n), t !== null && (nr(t, e, n, r), tl(t, e, n));
} };
function gv(e, t, r, n, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Sa(r, n) || !Sa(o, i) : !0;
}
function M1(e, t, r) {
  var n = !1, o = mn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Yt(i) : (o = yt(t) ? Yn : ot.current, n = t.contextTypes, i = (n = n != null) ? ei(e, o) : mn), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = wu, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function yv(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && wu.enqueueReplaceState(t, t.state, null);
}
function uf(e, t, r, n) {
  var o = e.stateNode;
  o.props = r, o.state = e.memoizedState, o.refs = R1, Nh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Yt(i) : (i = yt(t) ? Yn : ot.current, o.context = ei(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (lf(e, t, i, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && wu.enqueueReplaceState(o, o.state, null), jl(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ti(e, t, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1)
          throw Error(R(309));
        var n = r.stateNode;
      }
      if (!n)
        throw Error(R(147, e));
      var o = n, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var s = o.refs;
        s === R1 && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(R(284));
    if (!r._owner)
      throw Error(R(290, e));
  }
  return e;
}
function Es(e, t) {
  throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function bv(e) {
  var t = e._init;
  return t(e._payload);
}
function z1(e) {
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
    return m = dn(m, h), m.index = 0, m.sibling = null, m;
  }
  function i(m, h, v) {
    return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < h ? (m.flags |= 2, h) : v) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, v, w) {
    return h === null || h.tag !== 6 ? (h = Vc(v, m.mode, w), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function l(m, h, v, w) {
    var T = v.type;
    return T === go ? c(m, h, v.props.children, w, v.key) : h !== null && (h.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Yr && bv(T) === h.type) ? (w = o(h, v.props), w.ref = Ti(m, h, v), w.return = m, w) : (w = sl(v.type, v.key, v.props, null, m.mode, w), w.ref = Ti(m, h, v), w.return = m, w);
  }
  function u(m, h, v, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Wc(v, m.mode, w), h.return = m, h) : (h = o(h, v.children || []), h.return = m, h);
  }
  function c(m, h, v, w, T) {
    return h === null || h.tag !== 7 ? (h = Bn(v, m.mode, w, T), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function d(m, h, v) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Vc("" + h, m.mode, v), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case gs:
          return v = sl(h.type, h.key, h.props, null, m.mode, v), v.ref = Ti(m, null, h), v.return = m, v;
        case vo:
          return h = Wc(h, m.mode, v), h.return = m, h;
        case Yr:
          var w = h._init;
          return d(m, w(h._payload), v);
      }
      if (Li(h) || xi(h))
        return h = Bn(h, m.mode, v, null), h.return = m, h;
      Es(m, h);
    }
    return null;
  }
  function f(m, h, v, w) {
    var T = h !== null ? h.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return T !== null ? null : s(m, h, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case gs:
          return v.key === T ? l(m, h, v, w) : null;
        case vo:
          return v.key === T ? u(m, h, v, w) : null;
        case Yr:
          return T = v._init, f(
            m,
            h,
            T(v._payload),
            w
          );
      }
      if (Li(v) || xi(v))
        return T !== null ? null : c(m, h, v, w, null);
      Es(m, v);
    }
    return null;
  }
  function p(m, h, v, w, T) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return m = m.get(v) || null, s(h, m, "" + w, T);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case gs:
          return m = m.get(w.key === null ? v : w.key) || null, l(h, m, w, T);
        case vo:
          return m = m.get(w.key === null ? v : w.key) || null, u(h, m, w, T);
        case Yr:
          var A = w._init;
          return p(m, h, v, A(w._payload), T);
      }
      if (Li(w) || xi(w))
        return m = m.get(v) || null, c(h, m, w, T, null);
      Es(h, w);
    }
    return null;
  }
  function g(m, h, v, w) {
    for (var T = null, A = null, P = h, $ = h = 0, M = null; P !== null && $ < v.length; $++) {
      P.index > $ ? (M = P, P = null) : M = P.sibling;
      var I = f(m, P, v[$], w);
      if (I === null) {
        P === null && (P = M);
        break;
      }
      e && P && I.alternate === null && t(m, P), h = i(I, h, $), A === null ? T = I : A.sibling = I, A = I, P = M;
    }
    if ($ === v.length)
      return r(m, P), ke && En(m, $), T;
    if (P === null) {
      for (; $ < v.length; $++)
        P = d(m, v[$], w), P !== null && (h = i(P, h, $), A === null ? T = P : A.sibling = P, A = P);
      return ke && En(m, $), T;
    }
    for (P = n(m, P); $ < v.length; $++)
      M = p(P, m, $, v[$], w), M !== null && (e && M.alternate !== null && P.delete(M.key === null ? $ : M.key), h = i(M, h, $), A === null ? T = M : A.sibling = M, A = M);
    return e && P.forEach(function(H) {
      return t(m, H);
    }), ke && En(m, $), T;
  }
  function y(m, h, v, w) {
    var T = xi(v);
    if (typeof T != "function")
      throw Error(R(150));
    if (v = T.call(v), v == null)
      throw Error(R(151));
    for (var A = T = null, P = h, $ = h = 0, M = null, I = v.next(); P !== null && !I.done; $++, I = v.next()) {
      P.index > $ ? (M = P, P = null) : M = P.sibling;
      var H = f(m, P, I.value, w);
      if (H === null) {
        P === null && (P = M);
        break;
      }
      e && P && H.alternate === null && t(m, P), h = i(H, h, $), A === null ? T = H : A.sibling = H, A = H, P = M;
    }
    if (I.done)
      return r(
        m,
        P
      ), ke && En(m, $), T;
    if (P === null) {
      for (; !I.done; $++, I = v.next())
        I = d(m, I.value, w), I !== null && (h = i(I, h, $), A === null ? T = I : A.sibling = I, A = I);
      return ke && En(m, $), T;
    }
    for (P = n(m, P); !I.done; $++, I = v.next())
      I = p(P, m, $, I.value, w), I !== null && (e && I.alternate !== null && P.delete(I.key === null ? $ : I.key), h = i(I, h, $), A === null ? T = I : A.sibling = I, A = I);
    return e && P.forEach(function(ce) {
      return t(m, ce);
    }), ke && En(m, $), T;
  }
  function x(m, h, v, w) {
    if (typeof v == "object" && v !== null && v.type === go && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case gs:
          e: {
            for (var T = v.key, A = h; A !== null; ) {
              if (A.key === T) {
                if (T = v.type, T === go) {
                  if (A.tag === 7) {
                    r(m, A.sibling), h = o(A, v.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (A.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Yr && bv(T) === A.type) {
                  r(m, A.sibling), h = o(A, v.props), h.ref = Ti(m, A, v), h.return = m, m = h;
                  break e;
                }
                r(m, A);
                break;
              } else
                t(m, A);
              A = A.sibling;
            }
            v.type === go ? (h = Bn(v.props.children, m.mode, w, v.key), h.return = m, m = h) : (w = sl(v.type, v.key, v.props, null, m.mode, w), w.ref = Ti(m, h, v), w.return = m, m = w);
          }
          return a(m);
        case vo:
          e: {
            for (A = v.key; h !== null; ) {
              if (h.key === A)
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
            h = Wc(v, m.mode, w), h.return = m, m = h;
          }
          return a(m);
        case Yr:
          return A = v._init, x(m, h, A(v._payload), w);
      }
      if (Li(v))
        return g(m, h, v, w);
      if (xi(v))
        return y(m, h, v, w);
      Es(m, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (r(m, h.sibling), h = o(h, v), h.return = m, m = h) : (r(m, h), h = Vc(v, m.mode, w), h.return = m, m = h), a(m)) : r(m, h);
  }
  return x;
}
var ri = z1(!0), I1 = z1(!1), Xa = {}, mr = Sn(Xa), Ca = Sn(Xa), _a = Sn(Xa);
function Ln(e) {
  if (e === Xa)
    throw Error(R(174));
  return e;
}
function jh(e, t) {
  switch (fe(_a, t), fe(Ca, e), fe(mr, Xa), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : jd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = jd(t, e);
  }
  ye(mr), fe(mr, t);
}
function ni() {
  ye(mr), ye(Ca), ye(_a);
}
function F1(e) {
  Ln(_a.current);
  var t = Ln(mr.current), r = jd(t, e.type);
  t !== r && (fe(Ca, e), fe(mr, r));
}
function Bh(e) {
  Ca.current === e && (ye(mr), ye(Ca));
}
var _e = Sn(0);
function Bl(e) {
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
var Dc = [];
function Vh() {
  for (var e = 0; e < Dc.length; e++)
    Dc[e]._workInProgressVersionPrimary = null;
  Dc.length = 0;
}
var rl = Vr.ReactCurrentDispatcher, Lc = Vr.ReactCurrentBatchConfig, qn = 0, Pe = null, Be = null, He = null, Vl = !1, Zi = !1, Ta = 0, a2 = 0;
function et() {
  throw Error(R(321));
}
function Wh(e, t) {
  if (t === null)
    return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!or(e[r], t[r]))
      return !1;
  return !0;
}
function Uh(e, t, r, n, o, i) {
  if (qn = i, Pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, rl.current = e === null || e.memoizedState === null ? c2 : d2, e = r(n, o), Zi) {
    i = 0;
    do {
      if (Zi = !1, Ta = 0, 25 <= i)
        throw Error(R(301));
      i += 1, He = Be = null, t.updateQueue = null, rl.current = f2, e = r(n, o);
    } while (Zi);
  }
  if (rl.current = Wl, t = Be !== null && Be.next !== null, qn = 0, He = Be = Pe = null, Vl = !1, t)
    throw Error(R(300));
  return e;
}
function Hh() {
  var e = Ta !== 0;
  return Ta = 0, e;
}
function sr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return He === null ? Pe.memoizedState = He = e : He = He.next = e, He;
}
function Xt() {
  if (Be === null) {
    var e = Pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Be.next;
  var t = He === null ? Pe.memoizedState : He.next;
  if (t !== null)
    He = t, Be = e;
  else {
    if (e === null)
      throw Error(R(310));
    Be = e, e = { memoizedState: Be.memoizedState, baseState: Be.baseState, baseQueue: Be.baseQueue, queue: Be.queue, next: null }, He === null ? Pe.memoizedState = He = e : He = He.next = e;
  }
  return He;
}
function Pa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Oc(e) {
  var t = Xt(), r = t.queue;
  if (r === null)
    throw Error(R(311));
  r.lastRenderedReducer = e;
  var n = Be, o = n.baseQueue, i = r.pending;
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
      if ((qn & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, a = n) : l = l.next = d, Pe.lanes |= c, Qn |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = n : l.next = s, or(n, t.memoizedState) || (vt = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Pe.lanes |= i, Qn |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Nc(e) {
  var t = Xt(), r = t.queue;
  if (r === null)
    throw Error(R(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch, o = r.pending, i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var a = o = o.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== o);
    or(i, t.memoizedState) || (vt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i;
  }
  return [i, n];
}
function D1() {
}
function L1(e, t) {
  var r = Pe, n = Xt(), o = t(), i = !or(n.memoizedState, o);
  if (i && (n.memoizedState = o, vt = !0), n = n.queue, Gh(j1.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || He !== null && He.memoizedState.tag & 1) {
    if (r.flags |= 2048, Ea(9, N1.bind(null, r, n, o, t), void 0, null), Ge === null)
      throw Error(R(349));
    qn & 30 || O1(r, t, o);
  }
  return o;
}
function O1(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Pe.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function N1(e, t, r, n) {
  t.value = r, t.getSnapshot = n, B1(t) && V1(e);
}
function j1(e, t, r) {
  return r(function() {
    B1(t) && V1(e);
  });
}
function B1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !or(e, r);
  } catch {
    return !0;
  }
}
function V1(e) {
  var t = Or(e, 1);
  t !== null && nr(t, e, 1, -1);
}
function Sv(e) {
  var t = sr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pa, lastRenderedState: e }, t.queue = e, e = e.dispatch = u2.bind(null, Pe, e), [t.memoizedState, e];
}
function Ea(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = Pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Pe.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function W1() {
  return Xt().memoizedState;
}
function nl(e, t, r, n) {
  var o = sr();
  Pe.flags |= e, o.memoizedState = Ea(1 | t, r, void 0, n === void 0 ? null : n);
}
function ku(e, t, r, n) {
  var o = Xt();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (Be !== null) {
    var a = Be.memoizedState;
    if (i = a.destroy, n !== null && Wh(n, a.deps)) {
      o.memoizedState = Ea(t, r, i, n);
      return;
    }
  }
  Pe.flags |= e, o.memoizedState = Ea(1 | t, r, i, n);
}
function xv(e, t) {
  return nl(8390656, 8, e, t);
}
function Gh(e, t) {
  return ku(2048, 8, e, t);
}
function U1(e, t) {
  return ku(4, 2, e, t);
}
function H1(e, t) {
  return ku(4, 4, e, t);
}
function G1(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function K1(e, t, r) {
  return r = r != null ? r.concat([e]) : null, ku(4, 4, G1.bind(null, t, e), r);
}
function Kh() {
}
function Y1(e, t) {
  var r = Xt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Wh(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function X1(e, t) {
  var r = Xt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Wh(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function q1(e, t, r) {
  return qn & 21 ? (or(r, t) || (r = Jy(), Pe.lanes |= r, Qn |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, vt = !0), e.memoizedState = r);
}
function s2(e, t) {
  var r = se;
  se = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = Lc.transition;
  Lc.transition = {};
  try {
    e(!1), t();
  } finally {
    se = r, Lc.transition = n;
  }
}
function Q1() {
  return Xt().memoizedState;
}
function l2(e, t, r) {
  var n = cn(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, Z1(e))
    J1(t, r);
  else if (r = $1(e, t, r, n), r !== null) {
    var o = ut();
    nr(r, e, n, o), eb(r, t, n);
  }
}
function u2(e, t, r) {
  var n = cn(e), o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Z1(e))
    J1(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, r);
        if (o.hasEagerState = !0, o.eagerState = s, or(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Oh(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    r = $1(e, t, o, n), r !== null && (o = ut(), nr(r, e, n, o), eb(r, t, n));
  }
}
function Z1(e) {
  var t = e.alternate;
  return e === Pe || t !== null && t === Pe;
}
function J1(e, t) {
  Zi = Vl = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function eb(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, Ch(e, r);
  }
}
var Wl = { readContext: Yt, useCallback: et, useContext: et, useEffect: et, useImperativeHandle: et, useInsertionEffect: et, useLayoutEffect: et, useMemo: et, useReducer: et, useRef: et, useState: et, useDebugValue: et, useDeferredValue: et, useTransition: et, useMutableSource: et, useSyncExternalStore: et, useId: et, unstable_isNewReconciler: !1 }, c2 = { readContext: Yt, useCallback: function(e, t) {
  return sr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Yt, useEffect: xv, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, nl(
    4194308,
    4,
    G1.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return nl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return nl(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = sr();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = sr();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = l2.bind(null, Pe, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = sr();
  return e = { current: e }, t.memoizedState = e;
}, useState: Sv, useDebugValue: Kh, useDeferredValue: function(e) {
  return sr().memoizedState = e;
}, useTransition: function() {
  var e = Sv(!1), t = e[0];
  return e = s2.bind(null, e[1]), sr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = Pe, o = sr();
  if (ke) {
    if (r === void 0)
      throw Error(R(407));
    r = r();
  } else {
    if (r = t(), Ge === null)
      throw Error(R(349));
    qn & 30 || O1(n, t, r);
  }
  o.memoizedState = r;
  var i = { value: r, getSnapshot: t };
  return o.queue = i, xv(j1.bind(
    null,
    n,
    i,
    e
  ), [e]), n.flags |= 2048, Ea(9, N1.bind(null, n, i, r, t), void 0, null), r;
}, useId: function() {
  var e = sr(), t = Ge.identifierPrefix;
  if (ke) {
    var r = $r, n = Er;
    r = (n & ~(1 << 32 - rr(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Ta++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else
    r = a2++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, d2 = {
  readContext: Yt,
  useCallback: Y1,
  useContext: Yt,
  useEffect: Gh,
  useImperativeHandle: K1,
  useInsertionEffect: U1,
  useLayoutEffect: H1,
  useMemo: X1,
  useReducer: Oc,
  useRef: W1,
  useState: function() {
    return Oc(Pa);
  },
  useDebugValue: Kh,
  useDeferredValue: function(e) {
    var t = Xt();
    return q1(t, Be.memoizedState, e);
  },
  useTransition: function() {
    var e = Oc(Pa)[0], t = Xt().memoizedState;
    return [e, t];
  },
  useMutableSource: D1,
  useSyncExternalStore: L1,
  useId: Q1,
  unstable_isNewReconciler: !1
}, f2 = { readContext: Yt, useCallback: Y1, useContext: Yt, useEffect: Gh, useImperativeHandle: K1, useInsertionEffect: U1, useLayoutEffect: H1, useMemo: X1, useReducer: Nc, useRef: W1, useState: function() {
  return Nc(Pa);
}, useDebugValue: Kh, useDeferredValue: function(e) {
  var t = Xt();
  return Be === null ? t.memoizedState = e : q1(t, Be.memoizedState, e);
}, useTransition: function() {
  var e = Nc(Pa)[0], t = Xt().memoizedState;
  return [e, t];
}, useMutableSource: D1, useSyncExternalStore: L1, useId: Q1, unstable_isNewReconciler: !1 };
function oi(e, t) {
  try {
    var r = "", n = t;
    do
      r += jC(n), n = n.return;
    while (n);
    var o = r;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function jc(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function cf(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var h2 = typeof WeakMap == "function" ? WeakMap : Map;
function tb(e, t, r) {
  r = Mr(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    Hl || (Hl = !0, Sf = n), cf(e, t);
  }, r;
}
function rb(e, t, r) {
  r = Mr(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    r.payload = function() {
      return n(o);
    }, r.callback = function() {
      cf(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
    cf(e, t), typeof n != "function" && (un === null ? un = /* @__PURE__ */ new Set([this]) : un.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), r;
}
function wv(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new h2();
    var o = /* @__PURE__ */ new Set();
    n.set(t, o);
  } else
    o = n.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), n.set(t, o));
  o.has(r) || (o.add(r), e = P2.bind(null, e, t, r), t.then(e, e));
}
function kv(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Cv(e, t, r, n, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Mr(-1, 1), t.tag = 2, ln(r, t, 1))), r.lanes |= 1), e);
}
var p2 = Vr.ReactCurrentOwner, vt = !1;
function st(e, t, r, n) {
  t.child = e === null ? I1(t, null, r, n) : ri(t, e.child, r, n);
}
function _v(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return Wo(t, o), n = Uh(e, t, r, n, i, o), r = Hh(), e !== null && !vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Nr(e, t, o)) : (ke && r && Mh(t), t.flags |= 1, st(e, t, n, o), t.child);
}
function Tv(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" && !tp(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, nb(e, t, i, n, o)) : (e = sl(r.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (r = r.compare, r = r !== null ? r : Sa, r(a, n) && e.ref === t.ref)
      return Nr(e, t, o);
  }
  return t.flags |= 1, e = dn(i, n), e.ref = t.ref, e.return = t, t.child = e;
}
function nb(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Sa(i, n) && e.ref === t.ref)
      if (vt = !1, t.pendingProps = n = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (vt = !0);
      else
        return t.lanes = e.lanes, Nr(e, t, o);
  }
  return df(e, t, r, n, o);
}
function ob(e, t, r) {
  var n = t.pendingProps, o = n.children, i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, fe(Po, _t), _t |= r;
    else {
      if (!(r & 1073741824))
        return e = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, fe(Po, _t), _t |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = i !== null ? i.baseLanes : r, fe(Po, _t), _t |= n;
    }
  else
    i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, fe(Po, _t), _t |= n;
  return st(e, t, o, r), t.child;
}
function ib(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function df(e, t, r, n, o) {
  var i = yt(r) ? Yn : ot.current;
  return i = ei(t, i), Wo(t, o), r = Uh(e, t, r, n, i, o), n = Hh(), e !== null && !vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Nr(e, t, o)) : (ke && n && Mh(t), t.flags |= 1, st(e, t, r, o), t.child);
}
function Pv(e, t, r, n, o) {
  if (yt(r)) {
    var i = !0;
    Fl(t);
  } else
    i = !1;
  if (Wo(t, o), t.stateNode === null)
    ol(e, t), M1(t, r, n), uf(t, r, n, o), n = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = Yt(u) : (u = yt(r) ? Yn : ot.current, u = ei(t, u));
    var c = r.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || l !== u) && yv(t, a, n, u), Xr = !1;
    var f = t.memoizedState;
    a.state = f, jl(t, n, a, o), l = t.memoizedState, s !== n || f !== l || gt.current || Xr ? (typeof c == "function" && (lf(t, r, c, n), l = t.memoizedState), (s = Xr || gv(t, r, s, n, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = u, n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    a = t.stateNode, A1(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Zt(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = Yt(l) : (l = yt(r) ? Yn : ot.current, l = ei(t, l));
    var p = r.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && yv(t, a, n, l), Xr = !1, f = t.memoizedState, a.state = f, jl(t, n, a, o);
    var g = t.memoizedState;
    s !== d || f !== g || gt.current || Xr ? (typeof p == "function" && (lf(t, r, p, n), g = t.memoizedState), (u = Xr || gv(t, r, u, n, f, g, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, g, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, g, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = g), a.props = n, a.state = g, a.context = l, n = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return ff(e, t, r, n, i, o);
}
function ff(e, t, r, n, o, i) {
  ib(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a)
    return o && fv(t, r, !1), Nr(e, t, i);
  n = t.stateNode, p2.current = t;
  var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && a ? (t.child = ri(t, e.child, null, i), t.child = ri(t, null, s, i)) : st(e, t, s, i), t.memoizedState = n.state, o && fv(t, r, !0), t.child;
}
function ab(e) {
  var t = e.stateNode;
  t.pendingContext ? dv(e, t.pendingContext, t.pendingContext !== t.context) : t.context && dv(e, t.context, !1), jh(e, t.containerInfo);
}
function Ev(e, t, r, n, o) {
  return ti(), Ih(o), t.flags |= 256, st(e, t, r, n), t.child;
}
var hf = { dehydrated: null, treeContext: null, retryLane: 0 };
function pf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sb(e, t, r) {
  var n = t.pendingProps, o = _e.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), fe(_e, o & 1), e === null)
    return af(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Tu(a, n, 0, null), e = Bn(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = pf(r), t.memoizedState = hf, e) : Yh(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return m2(e, t, a, n, s, o, r);
  if (i) {
    i = n.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(a & 1) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = dn(o, l), n.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = dn(s, i) : (i = Bn(i, a, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, a = e.child.memoizedState, a = a === null ? pf(r) : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~r, t.memoizedState = hf, n;
  }
  return i = e.child, e = i.sibling, n = dn(i, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function Yh(e, t) {
  return t = Tu({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function $s(e, t, r, n) {
  return n !== null && Ih(n), ri(t, e.child, null, r), e = Yh(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function m2(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = jc(Error(R(422))), $s(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, o = t.mode, n = Tu({ mode: "visible", children: n.children }, o, 0, null), i = Bn(i, o, a, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, t.mode & 1 && ri(t, e.child, null, a), t.child.memoizedState = pf(a), t.memoizedState = hf, i);
  if (!(t.mode & 1))
    return $s(e, t, a, null);
  if (o.data === "$!") {
    if (n = o.nextSibling && o.nextSibling.dataset, n)
      var s = n.dgst;
    return n = s, i = Error(R(419)), n = jc(i, n, void 0), $s(e, t, a, n);
  }
  if (s = (a & e.childLanes) !== 0, vt || s) {
    if (n = Ge, n !== null) {
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
      o = o & (n.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Or(e, o), nr(n, e, o, -1));
    }
    return ep(), n = jc(Error(R(421))), $s(e, t, a, n);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = E2.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Tt = sn(o.nextSibling), Pt = t, ke = !0, er = null, e !== null && (Vt[Wt++] = Er, Vt[Wt++] = $r, Vt[Wt++] = Xn, Er = e.id, $r = e.overflow, Xn = t), t = Yh(t, n.children), t.flags |= 4096, t);
}
function $v(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), sf(e.return, t, r);
}
function Bc(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = o);
}
function lb(e, t, r) {
  var n = t.pendingProps, o = n.revealOrder, i = n.tail;
  if (st(e, t, n.children, r), n = _e.current, n & 2)
    n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && $v(e, r, t);
          else if (e.tag === 19)
            $v(e, r, t);
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
  if (fe(_e, n), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          e = r.alternate, e !== null && Bl(e) === null && (o = r), r = r.sibling;
        r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), Bc(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Bl(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = r, r = o, o = e;
        }
        Bc(t, !0, r, null, i);
        break;
      case "together":
        Bc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ol(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Nr(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), Qn |= t.lanes, !(r & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, r = dn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      e = e.sibling, r = r.sibling = dn(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function v2(e, t, r) {
  switch (t.tag) {
    case 3:
      ab(t), ti();
      break;
    case 5:
      F1(t);
      break;
    case 1:
      yt(t.type) && Fl(t);
      break;
    case 4:
      jh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, o = t.memoizedProps.value;
      fe(Ol, n._currentValue), n._currentValue = o;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (fe(_e, _e.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? sb(e, t, r) : (fe(_e, _e.current & 1), e = Nr(e, t, r), e !== null ? e.sibling : null);
      fe(_e, _e.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n)
          return lb(e, t, r);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), fe(_e, _e.current), n)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ob(e, t, r);
  }
  return Nr(e, t, r);
}
var ub, mf, cb, db;
ub = function(e, t) {
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
mf = function() {
};
cb = function(e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    e = t.stateNode, Ln(mr.current);
    var i = null;
    switch (r) {
      case "input":
        o = Dd(e, o), n = Dd(e, n), i = [];
        break;
      case "select":
        o = Ee({}, o, { value: void 0 }), n = Ee({}, n, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Nd(e, o), n = Nd(e, n), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = zl);
    }
    Bd(r, n);
    var a;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (r || (r = {}), r[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ha.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ha.hasOwnProperty(u) ? (l != null && u === "onScroll" && ve("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
db = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Pi(e, t) {
  if (!ke)
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
function tt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags & 14680064, n |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function g2(e, t, r) {
  var n = t.pendingProps;
  switch (zh(t), t.tag) {
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
      return tt(t), null;
    case 1:
      return yt(t.type) && Il(), tt(t), null;
    case 3:
      return n = t.stateNode, ni(), ye(gt), ye(ot), Vh(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ps(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, er !== null && (kf(er), er = null))), mf(e, t), tt(t), null;
    case 5:
      Bh(t);
      var o = Ln(_a.current);
      if (r = t.type, e !== null && t.stateNode != null)
        cb(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null)
            throw Error(R(166));
          return tt(t), null;
        }
        if (e = Ln(mr.current), Ps(t)) {
          n = t.stateNode, r = t.type;
          var i = t.memoizedProps;
          switch (n[fr] = t, n[ka] = i, e = (t.mode & 1) !== 0, r) {
            case "dialog":
              ve("cancel", n), ve("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              ve("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ni.length; o++)
                ve(Ni[o], n);
              break;
            case "source":
              ve("error", n);
              break;
            case "img":
            case "image":
            case "link":
              ve(
                "error",
                n
              ), ve("load", n);
              break;
            case "details":
              ve("toggle", n);
              break;
            case "input":
              Om(n, i), ve("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!i.multiple }, ve("invalid", n);
              break;
            case "textarea":
              jm(n, i), ve("invalid", n);
          }
          Bd(r, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && Ts(n.textContent, s, e), o = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Ts(
                n.textContent,
                s,
                e
              ), o = ["children", "" + s]) : ha.hasOwnProperty(a) && s != null && a === "onScroll" && ve("scroll", n);
            }
          switch (r) {
            case "input":
              ys(n), Nm(n, i, !0);
              break;
            case "textarea":
              ys(n), Bm(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = zl);
          }
          n = o, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Oy(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, { is: n.is }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[fr] = t, e[ka] = n, ub(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Vd(r, n), r) {
              case "dialog":
                ve("cancel", e), ve("close", e), o = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", e), o = n;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ni.length; o++)
                  ve(Ni[o], e);
                o = n;
                break;
              case "source":
                ve("error", e), o = n;
                break;
              case "img":
              case "image":
              case "link":
                ve(
                  "error",
                  e
                ), ve("load", e), o = n;
                break;
              case "details":
                ve("toggle", e), o = n;
                break;
              case "input":
                Om(e, n), o = Dd(e, n), ve("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, o = Ee({}, n, { value: void 0 }), ve("invalid", e);
                break;
              case "textarea":
                jm(e, n), o = Nd(e, n), ve("invalid", e);
                break;
              default:
                o = n;
            }
            Bd(r, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? By(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Ny(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && pa(e, l) : typeof l == "number" && pa(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ha.hasOwnProperty(i) ? l != null && i === "onScroll" && ve("scroll", e) : l != null && yh(e, i, l, a));
              }
            switch (r) {
              case "input":
                ys(e), Nm(e, n, !1);
                break;
              case "textarea":
                ys(e), Bm(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + pn(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, i = n.value, i != null ? No(e, !!n.multiple, i, !1) : n.defaultValue != null && No(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = zl);
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
      return tt(t), null;
    case 6:
      if (e && t.stateNode != null)
        db(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null)
          throw Error(R(166));
        if (r = Ln(_a.current), Ln(mr.current), Ps(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[fr] = t, (i = n.nodeValue !== r) && (e = Pt, e !== null))
            switch (e.tag) {
              case 3:
                Ts(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ts(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[fr] = t, t.stateNode = n;
      }
      return tt(t), null;
    case 13:
      if (ye(_e), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ke && Tt !== null && t.mode & 1 && !(t.flags & 128))
          E1(), ti(), t.flags |= 98560, i = !1;
        else if (i = Ps(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(R(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(R(317));
            i[fr] = t;
          } else
            ti(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          tt(t), i = !1;
        } else
          er !== null && (kf(er), er = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || _e.current & 1 ? Ve === 0 && (Ve = 3) : ep())), t.updateQueue !== null && (t.flags |= 4), tt(t), null);
    case 4:
      return ni(), mf(e, t), e === null && xa(t.stateNode.containerInfo), tt(t), null;
    case 10:
      return Lh(t.type._context), tt(t), null;
    case 17:
      return yt(t.type) && Il(), tt(t), null;
    case 19:
      if (ye(_e), i = t.memoizedState, i === null)
        return tt(t), null;
      if (n = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (n)
          Pi(i, !1);
        else {
          if (Ve !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = Bl(e), a !== null) {
                for (t.flags |= 128, Pi(i, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; )
                  i = r, e = n, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
                return fe(_e, _e.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Fe() > ii && (t.flags |= 128, n = !0, Pi(i, !1), t.lanes = 4194304);
        }
      else {
        if (!n)
          if (e = Bl(a), e !== null) {
            if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Pi(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !ke)
              return tt(t), null;
          } else
            2 * Fe() - i.renderingStartTime > ii && r !== 1073741824 && (t.flags |= 128, n = !0, Pi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (r = i.last, r !== null ? r.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Fe(), t.sibling = null, r = _e.current, fe(_e, n ? r & 1 | 2 : r & 1), t) : (tt(t), null);
    case 22:
    case 23:
      return Jh(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? _t & 1073741824 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function y2(e, t) {
  switch (zh(t), t.tag) {
    case 1:
      return yt(t.type) && Il(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ni(), ye(gt), ye(ot), Vh(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Bh(t), null;
    case 13:
      if (ye(_e), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(R(340));
        ti();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ye(_e), null;
    case 4:
      return ni(), null;
    case 10:
      return Lh(t.type._context), null;
    case 22:
    case 23:
      return Jh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var As = !1, nt = !1, b2 = typeof WeakSet == "function" ? WeakSet : Set, D = null;
function To(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Re(e, t, n);
      }
    else
      r.current = null;
}
function vf(e, t, r) {
  try {
    r();
  } catch (n) {
    Re(e, t, n);
  }
}
var Av = !1;
function S2(e, t) {
  if (Zd = Al, e = m1(), Rh(e)) {
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
  for (Jd = { focusedElem: e, selectionRange: r }, Al = !1, D = t; D !== null; )
    if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, D = e;
    else
      for (; D !== null; ) {
        t = D;
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
                  var y = g.memoizedProps, x = g.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Zt(t.type, y), x);
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
                throw Error(R(163));
            }
        } catch (w) {
          Re(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, D = e;
          break;
        }
        D = t.return;
      }
  return g = Av, Av = !1, g;
}
function Ji(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var o = n = n.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && vf(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function Cu(e, t) {
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
function gf(e) {
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
function fb(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, fb(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[fr], delete t[ka], delete t[rf], delete t[r2], delete t[n2])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function hb(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rv(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || hb(e.return))
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
function yf(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = zl));
  else if (n !== 4 && (e = e.child, e !== null))
    for (yf(e, t, r), e = e.sibling; e !== null; )
      yf(e, t, r), e = e.sibling;
}
function bf(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null))
    for (bf(e, t, r), e = e.sibling; e !== null; )
      bf(e, t, r), e = e.sibling;
}
var Xe = null, Jt = !1;
function Wr(e, t, r) {
  for (r = r.child; r !== null; )
    pb(e, t, r), r = r.sibling;
}
function pb(e, t, r) {
  if (pr && typeof pr.onCommitFiberUnmount == "function")
    try {
      pr.onCommitFiberUnmount(vu, r);
    } catch {
    }
  switch (r.tag) {
    case 5:
      nt || To(r, t);
    case 6:
      var n = Xe, o = Jt;
      Xe = null, Wr(e, t, r), Xe = n, Jt = o, Xe !== null && (Jt ? (e = Xe, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Xe.removeChild(r.stateNode));
      break;
    case 18:
      Xe !== null && (Jt ? (e = Xe, r = r.stateNode, e.nodeType === 8 ? Ic(e.parentNode, r) : e.nodeType === 1 && Ic(e, r), ya(e)) : Ic(Xe, r.stateNode));
      break;
    case 4:
      n = Xe, o = Jt, Xe = r.stateNode.containerInfo, Jt = !0, Wr(e, t, r), Xe = n, Jt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!nt && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        o = n = n.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && vf(r, t, a), o = o.next;
        } while (o !== n);
      }
      Wr(e, t, r);
      break;
    case 1:
      if (!nt && (To(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function"))
        try {
          n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
        } catch (s) {
          Re(r, t, s);
        }
      Wr(e, t, r);
      break;
    case 21:
      Wr(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (nt = (n = nt) || r.memoizedState !== null, Wr(e, t, r), nt = n) : Wr(e, t, r);
      break;
    default:
      Wr(e, t, r);
  }
}
function Mv(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new b2()), t.forEach(function(n) {
      var o = $2.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(o, o));
    });
  }
}
function qt(e, t) {
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
                Xe = s.stateNode, Jt = !1;
                break e;
              case 3:
                Xe = s.stateNode.containerInfo, Jt = !0;
                break e;
              case 4:
                Xe = s.stateNode.containerInfo, Jt = !0;
                break e;
            }
            s = s.return;
          }
        if (Xe === null)
          throw Error(R(160));
        pb(i, a, o), Xe = null, Jt = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        Re(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      mb(t, e), t = t.sibling;
}
function mb(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (qt(t, e), ir(e), n & 4) {
        try {
          Ji(3, e, e.return), Cu(3, e);
        } catch (y) {
          Re(e, e.return, y);
        }
        try {
          Ji(5, e, e.return);
        } catch (y) {
          Re(e, e.return, y);
        }
      }
      break;
    case 1:
      qt(t, e), ir(e), n & 512 && r !== null && To(r, r.return);
      break;
    case 5:
      if (qt(t, e), ir(e), n & 512 && r !== null && To(r, r.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          pa(o, "");
        } catch (y) {
          Re(e, e.return, y);
        }
      }
      if (n & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = r !== null ? r.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && Dy(o, i), Vd(s, a);
            var u = Vd(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? By(o, d) : c === "dangerouslySetInnerHTML" ? Ny(o, d) : c === "children" ? pa(o, d) : yh(o, c, d, u);
            }
            switch (s) {
              case "input":
                Ld(o, i);
                break;
              case "textarea":
                Ly(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null ? No(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? No(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : No(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ka] = i;
          } catch (y) {
            Re(e, e.return, y);
          }
      }
      break;
    case 6:
      if (qt(t, e), ir(e), n & 4) {
        if (e.stateNode === null)
          throw Error(R(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (y) {
          Re(e, e.return, y);
        }
      }
      break;
    case 3:
      if (qt(t, e), ir(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
        try {
          ya(t.containerInfo);
        } catch (y) {
          Re(e, e.return, y);
        }
      break;
    case 4:
      qt(t, e), ir(e);
      break;
    case 13:
      qt(t, e), ir(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Qh = Fe())), n & 4 && Mv(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (nt = (u = nt) || c, qt(t, e), nt = u) : qt(t, e), ir(e), n & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (D = e, c = e.child; c !== null; ) {
            for (d = D = c; D !== null; ) {
              switch (f = D, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ji(4, f, f.return);
                  break;
                case 1:
                  To(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    n = f, r = f.return;
                    try {
                      t = n, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (y) {
                      Re(n, r, y);
                    }
                  }
                  break;
                case 5:
                  To(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Iv(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, D = p) : Iv(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = jy("display", a));
                } catch (y) {
                  Re(e, e.return, y);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (y) {
                  Re(e, e.return, y);
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
      qt(t, e), ir(e), n & 4 && Mv(e);
      break;
    case 21:
      break;
    default:
      qt(
        t,
        e
      ), ir(e);
  }
}
function ir(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (hb(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(R(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (pa(o, ""), n.flags &= -33);
          var i = Rv(e);
          bf(e, i, o);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo, s = Rv(e);
          yf(e, s, a);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      Re(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function x2(e, t, r) {
  D = e, vb(e);
}
function vb(e, t, r) {
  for (var n = (e.mode & 1) !== 0; D !== null; ) {
    var o = D, i = o.child;
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || As;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || nt;
        s = As;
        var u = nt;
        if (As = a, (nt = l) && !u)
          for (D = o; D !== null; )
            a = D, l = a.child, a.tag === 22 && a.memoizedState !== null ? Fv(o) : l !== null ? (l.return = a, D = l) : Fv(o);
        for (; i !== null; )
          D = i, vb(i), i = i.sibling;
        D = o, As = s, nt = u;
      }
      zv(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, D = i) : zv(e);
  }
}
function zv(e) {
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
              nt || Cu(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !nt)
                if (r === null)
                  n.componentDidMount();
                else {
                  var o = t.elementType === t.type ? r.memoizedProps : Zt(t.type, r.memoizedProps);
                  n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && vv(t, i, n);
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
                vv(t, a, r);
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
                    d !== null && ya(d);
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
              throw Error(R(163));
          }
        nt || t.flags & 512 && gf(t);
      } catch (f) {
        Re(t, t.return, f);
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
function Iv(e) {
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
function Fv(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Cu(4, t);
          } catch (l) {
            Re(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              Re(t, o, l);
            }
          }
          var i = t.return;
          try {
            gf(t);
          } catch (l) {
            Re(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            gf(t);
          } catch (l) {
            Re(t, a, l);
          }
      }
    } catch (l) {
      Re(t, t.return, l);
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
var w2 = Math.ceil, Ul = Vr.ReactCurrentDispatcher, Xh = Vr.ReactCurrentOwner, Gt = Vr.ReactCurrentBatchConfig, ee = 0, Ge = null, Ne = null, Qe = 0, _t = 0, Po = Sn(0), Ve = 0, $a = null, Qn = 0, _u = 0, qh = 0, ea = null, pt = null, Qh = 0, ii = 1 / 0, Cr = null, Hl = !1, Sf = null, un = null, Rs = !1, tn = null, Gl = 0, ta = 0, xf = null, il = -1, al = 0;
function ut() {
  return ee & 6 ? Fe() : il !== -1 ? il : il = Fe();
}
function cn(e) {
  return e.mode & 1 ? ee & 2 && Qe !== 0 ? Qe & -Qe : i2.transition !== null ? (al === 0 && (al = Jy()), al) : (e = se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : a1(e.type)), e) : 1;
}
function nr(e, t, r, n) {
  if (50 < ta)
    throw ta = 0, xf = null, Error(R(185));
  Ga(e, r, n), (!(ee & 2) || e !== Ge) && (e === Ge && (!(ee & 2) && (_u |= r), Ve === 4 && Zr(e, Qe)), bt(e, n), r === 1 && ee === 0 && !(t.mode & 1) && (ii = Fe() + 500, xu && xn()));
}
function bt(e, t) {
  var r = e.callbackNode;
  i_(e, t);
  var n = $l(e, e === Ge ? Qe : 0);
  if (n === 0)
    r !== null && Um(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && Um(r), t === 1)
      e.tag === 0 ? o2(Dv.bind(null, e)) : _1(Dv.bind(null, e)), e2(function() {
        !(ee & 6) && xn();
      }), r = null;
    else {
      switch (e1(n)) {
        case 1:
          r = kh;
          break;
        case 4:
          r = Qy;
          break;
        case 16:
          r = El;
          break;
        case 536870912:
          r = Zy;
          break;
        default:
          r = El;
      }
      r = Cb(r, gb.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function gb(e, t) {
  if (il = -1, al = 0, ee & 6)
    throw Error(R(327));
  var r = e.callbackNode;
  if (Uo() && e.callbackNode !== r)
    return null;
  var n = $l(e, e === Ge ? Qe : 0);
  if (n === 0)
    return null;
  if (n & 30 || n & e.expiredLanes || t)
    t = Kl(e, n);
  else {
    t = n;
    var o = ee;
    ee |= 2;
    var i = bb();
    (Ge !== e || Qe !== t) && (Cr = null, ii = Fe() + 500, jn(e, t));
    do
      try {
        _2();
        break;
      } catch (s) {
        yb(e, s);
      }
    while (!0);
    Dh(), Ul.current = i, ee = o, Ne !== null ? t = 0 : (Ge = null, Qe = 0, t = Ve);
  }
  if (t !== 0) {
    if (t === 2 && (o = Kd(e), o !== 0 && (n = o, t = wf(e, o))), t === 1)
      throw r = $a, jn(e, 0), Zr(e, n), bt(e, Fe()), r;
    if (t === 6)
      Zr(e, n);
    else {
      if (o = e.current.alternate, !(n & 30) && !k2(o) && (t = Kl(e, n), t === 2 && (i = Kd(e), i !== 0 && (n = i, t = wf(e, i))), t === 1))
        throw r = $a, jn(e, 0), Zr(e, n), bt(e, Fe()), r;
      switch (e.finishedWork = o, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          $n(e, pt, Cr);
          break;
        case 3:
          if (Zr(e, n), (n & 130023424) === n && (t = Qh + 500 - Fe(), 10 < t)) {
            if ($l(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & n) !== n) {
              ut(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = tf($n.bind(null, e, pt, Cr), t);
            break;
          }
          $n(e, pt, Cr);
          break;
        case 4:
          if (Zr(e, n), (n & 4194240) === n)
            break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - rr(n);
            i = 1 << a, a = t[a], a > o && (o = a), n &= ~i;
          }
          if (n = o, n = Fe() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * w2(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = tf($n.bind(null, e, pt, Cr), n);
            break;
          }
          $n(e, pt, Cr);
          break;
        case 5:
          $n(e, pt, Cr);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return bt(e, Fe()), e.callbackNode === r ? gb.bind(null, e) : null;
}
function wf(e, t) {
  var r = ea;
  return e.current.memoizedState.isDehydrated && (jn(e, t).flags |= 256), e = Kl(e, t), e !== 2 && (t = pt, pt = r, t !== null && kf(t)), e;
}
function kf(e) {
  pt === null ? pt = e : pt.push.apply(pt, e);
}
function k2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n], i = o.getSnapshot;
          o = o.value;
          try {
            if (!or(i(), o))
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
function Zr(e, t) {
  for (t &= ~qh, t &= ~_u, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - rr(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function Dv(e) {
  if (ee & 6)
    throw Error(R(327));
  Uo();
  var t = $l(e, 0);
  if (!(t & 1))
    return bt(e, Fe()), null;
  var r = Kl(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Kd(e);
    n !== 0 && (t = n, r = wf(e, n));
  }
  if (r === 1)
    throw r = $a, jn(e, 0), Zr(e, t), bt(e, Fe()), r;
  if (r === 6)
    throw Error(R(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, $n(e, pt, Cr), bt(e, Fe()), null;
}
function Zh(e, t) {
  var r = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    ee = r, ee === 0 && (ii = Fe() + 500, xu && xn());
  }
}
function Zn(e) {
  tn !== null && tn.tag === 0 && !(ee & 6) && Uo();
  var t = ee;
  ee |= 1;
  var r = Gt.transition, n = se;
  try {
    if (Gt.transition = null, se = 1, e)
      return e();
  } finally {
    se = n, Gt.transition = r, ee = t, !(ee & 6) && xn();
  }
}
function Jh() {
  _t = Po.current, ye(Po);
}
function jn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, J_(r)), Ne !== null)
    for (r = Ne.return; r !== null; ) {
      var n = r;
      switch (zh(n), n.tag) {
        case 1:
          n = n.type.childContextTypes, n != null && Il();
          break;
        case 3:
          ni(), ye(gt), ye(ot), Vh();
          break;
        case 5:
          Bh(n);
          break;
        case 4:
          ni();
          break;
        case 13:
          ye(_e);
          break;
        case 19:
          ye(_e);
          break;
        case 10:
          Lh(n.type._context);
          break;
        case 22:
        case 23:
          Jh();
      }
      r = r.return;
    }
  if (Ge = e, Ne = e = dn(e.current, null), Qe = _t = t, Ve = 0, $a = null, qh = _u = Qn = 0, pt = ea = null, Dn !== null) {
    for (t = 0; t < Dn.length; t++)
      if (r = Dn[t], n = r.interleaved, n !== null) {
        r.interleaved = null;
        var o = n.next, i = r.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, n.next = a;
        }
        r.pending = n;
      }
    Dn = null;
  }
  return e;
}
function yb(e, t) {
  do {
    var r = Ne;
    try {
      if (Dh(), rl.current = Wl, Vl) {
        for (var n = Pe.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), n = n.next;
        }
        Vl = !1;
      }
      if (qn = 0, He = Be = Pe = null, Zi = !1, Ta = 0, Xh.current = null, r === null || r.return === null) {
        Ve = 1, $a = t, Ne = null;
        break;
      }
      e: {
        var i = e, a = r.return, s = r, l = t;
        if (t = Qe, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var p = kv(a);
          if (p !== null) {
            p.flags &= -257, Cv(p, a, s, i, t), p.mode & 1 && wv(i, u, t), t = p, l = u;
            var g = t.updateQueue;
            if (g === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else
              g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              wv(i, u, t), ep();
              break e;
            }
            l = Error(R(426));
          }
        } else if (ke && s.mode & 1) {
          var x = kv(a);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Cv(x, a, s, i, t), Ih(oi(l, s));
            break e;
          }
        }
        i = l = oi(l, s), Ve !== 4 && (Ve = 2), ea === null ? ea = [i] : ea.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = tb(i, l, t);
              mv(i, m);
              break e;
            case 1:
              s = l;
              var h = i.type, v = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (un === null || !un.has(v)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = rb(i, s, t);
                mv(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      xb(r);
    } catch (T) {
      t = T, Ne === r && r !== null && (Ne = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function bb() {
  var e = Ul.current;
  return Ul.current = Wl, e === null ? Wl : e;
}
function ep() {
  (Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4), Ge === null || !(Qn & 268435455) && !(_u & 268435455) || Zr(Ge, Qe);
}
function Kl(e, t) {
  var r = ee;
  ee |= 2;
  var n = bb();
  (Ge !== e || Qe !== t) && (Cr = null, jn(e, t));
  do
    try {
      C2();
      break;
    } catch (o) {
      yb(e, o);
    }
  while (!0);
  if (Dh(), ee = r, Ul.current = n, Ne !== null)
    throw Error(R(261));
  return Ge = null, Qe = 0, Ve;
}
function C2() {
  for (; Ne !== null; )
    Sb(Ne);
}
function _2() {
  for (; Ne !== null && !qC(); )
    Sb(Ne);
}
function Sb(e) {
  var t = kb(e.alternate, e, _t);
  e.memoizedProps = e.pendingProps, t === null ? xb(e) : Ne = t, Xh.current = null;
}
function xb(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = y2(r, t), r !== null) {
        r.flags &= 32767, Ne = r;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ve = 6, Ne = null;
        return;
      }
    } else if (r = g2(r, t, _t), r !== null) {
      Ne = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ne = t;
      return;
    }
    Ne = t = e;
  } while (t !== null);
  Ve === 0 && (Ve = 5);
}
function $n(e, t, r) {
  var n = se, o = Gt.transition;
  try {
    Gt.transition = null, se = 1, T2(e, t, r, n);
  } finally {
    Gt.transition = o, se = n;
  }
  return null;
}
function T2(e, t, r, n) {
  do
    Uo();
  while (tn !== null);
  if (ee & 6)
    throw Error(R(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current)
    throw Error(R(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = r.lanes | r.childLanes;
  if (a_(e, i), e === Ge && (Ne = Ge = null, Qe = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Rs || (Rs = !0, Cb(El, function() {
    return Uo(), null;
  })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
    i = Gt.transition, Gt.transition = null;
    var a = se;
    se = 1;
    var s = ee;
    ee |= 4, Xh.current = null, S2(e, r), mb(r, e), G_(Jd), Al = !!Zd, Jd = Zd = null, e.current = r, x2(r), QC(), ee = s, se = a, Gt.transition = i;
  } else
    e.current = r;
  if (Rs && (Rs = !1, tn = e, Gl = o), i = e.pendingLanes, i === 0 && (un = null), e_(r.stateNode), bt(e, Fe()), t !== null)
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      o = t[r], n(o.value, { componentStack: o.stack, digest: o.digest });
  if (Hl)
    throw Hl = !1, e = Sf, Sf = null, e;
  return Gl & 1 && e.tag !== 0 && Uo(), i = e.pendingLanes, i & 1 ? e === xf ? ta++ : (ta = 0, xf = e) : ta = 0, xn(), null;
}
function Uo() {
  if (tn !== null) {
    var e = e1(Gl), t = Gt.transition, r = se;
    try {
      if (Gt.transition = null, se = 16 > e ? 16 : e, tn === null)
        var n = !1;
      else {
        if (e = tn, tn = null, Gl = 0, ee & 6)
          throw Error(R(331));
        var o = ee;
        for (ee |= 4, D = e.current; D !== null; ) {
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
                      Ji(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, D = d;
                  else
                    for (; D !== null; ) {
                      c = D;
                      var f = c.sibling, p = c.return;
                      if (fb(c), c === u) {
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
                      Ji(9, i, i.return);
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
          var v = a.child;
          if (a.subtreeFlags & 2064 && v !== null)
            v.return = a, D = v;
          else
            e:
              for (a = h; D !== null; ) {
                if (s = D, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Cu(9, s);
                    }
                  } catch (T) {
                    Re(s, s.return, T);
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
        if (ee = o, xn(), pr && typeof pr.onPostCommitFiberRoot == "function")
          try {
            pr.onPostCommitFiberRoot(vu, e);
          } catch {
          }
        n = !0;
      }
      return n;
    } finally {
      se = r, Gt.transition = t;
    }
  }
  return !1;
}
function Lv(e, t, r) {
  t = oi(r, t), t = tb(e, t, 1), e = ln(e, t, 1), t = ut(), e !== null && (Ga(e, 1, t), bt(e, t));
}
function Re(e, t, r) {
  if (e.tag === 3)
    Lv(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Lv(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (un === null || !un.has(n))) {
          e = oi(r, e), e = rb(t, e, 1), t = ln(t, e, 1), e = ut(), t !== null && (Ga(t, 1, e), bt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function P2(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = ut(), e.pingedLanes |= e.suspendedLanes & r, Ge === e && (Qe & r) === r && (Ve === 4 || Ve === 3 && (Qe & 130023424) === Qe && 500 > Fe() - Qh ? jn(e, 0) : qh |= r), bt(e, t);
}
function wb(e, t) {
  t === 0 && (e.mode & 1 ? (t = xs, xs <<= 1, !(xs & 130023424) && (xs = 4194304)) : t = 1);
  var r = ut();
  e = Or(e, t), e !== null && (Ga(e, t, r), bt(e, r));
}
function E2(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), wb(e, r);
}
function $2(e, t) {
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
      throw Error(R(314));
  }
  n !== null && n.delete(t), wb(e, r);
}
var kb;
kb = function(e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || gt.current)
      vt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128))
        return vt = !1, v2(e, t, r);
      vt = !!(e.flags & 131072);
    }
  else
    vt = !1, ke && t.flags & 1048576 && T1(t, Ll, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      ol(e, t), e = t.pendingProps;
      var o = ei(t, ot.current);
      Wo(t, r), o = Uh(null, t, n, e, o, r);
      var i = Hh();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yt(n) ? (i = !0, Fl(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Nh(t), o.updater = wu, t.stateNode = o, o._reactInternals = t, uf(t, n, e, r), t = ff(null, t, n, !0, i, r)) : (t.tag = 0, ke && i && Mh(t), st(null, t, o, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (ol(e, t), e = t.pendingProps, o = n._init, n = o(n._payload), t.type = n, o = t.tag = R2(n), e = Zt(n, e), o) {
          case 0:
            t = df(null, t, n, e, r);
            break e;
          case 1:
            t = Pv(null, t, n, e, r);
            break e;
          case 11:
            t = _v(null, t, n, e, r);
            break e;
          case 14:
            t = Tv(null, t, n, Zt(n.type, e), r);
            break e;
        }
        throw Error(R(
          306,
          n,
          ""
        ));
      }
      return t;
    case 0:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Zt(n, o), df(e, t, n, o, r);
    case 1:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Zt(n, o), Pv(e, t, n, o, r);
    case 3:
      e: {
        if (ab(t), e === null)
          throw Error(R(387));
        n = t.pendingProps, i = t.memoizedState, o = i.element, A1(e, t), jl(t, n, null, r);
        var a = t.memoizedState;
        if (n = a.element, i.isDehydrated)
          if (i = { element: n, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = oi(Error(R(423)), t), t = Ev(e, t, n, r, o);
            break e;
          } else if (n !== o) {
            o = oi(Error(R(424)), t), t = Ev(e, t, n, r, o);
            break e;
          } else
            for (Tt = sn(t.stateNode.containerInfo.firstChild), Pt = t, ke = !0, er = null, r = I1(t, null, n, r), t.child = r; r; )
              r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (ti(), n === o) {
            t = Nr(e, t, r);
            break e;
          }
          st(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return F1(t), e === null && af(t), n = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, ef(n, o) ? a = null : i !== null && ef(n, i) && (t.flags |= 32), ib(e, t), st(e, t, a, r), t.child;
    case 6:
      return e === null && af(t), null;
    case 13:
      return sb(e, t, r);
    case 4:
      return jh(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = ri(t, null, n, r) : st(e, t, n, r), t.child;
    case 11:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Zt(n, o), _v(e, t, n, o, r);
    case 7:
      return st(e, t, t.pendingProps, r), t.child;
    case 8:
      return st(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return st(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, fe(Ol, n._currentValue), n._currentValue = a, i !== null)
          if (or(i.value, a)) {
            if (i.children === o.children && !gt.current) {
              t = Nr(e, t, r);
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
                      l = Mr(-1, r & -r), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= r, l = i.alternate, l !== null && (l.lanes |= r), sf(
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
                  throw Error(R(341));
                a.lanes |= r, s = a.alternate, s !== null && (s.lanes |= r), sf(a, r, t), a = i.sibling;
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
        st(e, t, o.children, r), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, n = t.pendingProps.children, Wo(t, r), o = Yt(o), n = n(o), t.flags |= 1, st(e, t, n, r), t.child;
    case 14:
      return n = t.type, o = Zt(n, t.pendingProps), o = Zt(n.type, o), Tv(e, t, n, o, r);
    case 15:
      return nb(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Zt(n, o), ol(e, t), t.tag = 1, yt(n) ? (e = !0, Fl(t)) : e = !1, Wo(t, r), M1(t, n, o), uf(t, n, o, r), ff(null, t, n, !0, e, r);
    case 19:
      return lb(e, t, r);
    case 22:
      return ob(e, t, r);
  }
  throw Error(R(156, t.tag));
};
function Cb(e, t) {
  return qy(e, t);
}
function A2(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ut(e, t, r, n) {
  return new A2(e, t, r, n);
}
function tp(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function R2(e) {
  if (typeof e == "function")
    return tp(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Sh)
      return 11;
    if (e === xh)
      return 14;
  }
  return 2;
}
function dn(e, t) {
  var r = e.alternate;
  return r === null ? (r = Ut(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function sl(e, t, r, n, o, i) {
  var a = 2;
  if (n = e, typeof e == "function")
    tp(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case go:
          return Bn(r.children, o, i, t);
        case bh:
          a = 8, o |= 8;
          break;
        case Md:
          return e = Ut(12, r, t, o | 2), e.elementType = Md, e.lanes = i, e;
        case zd:
          return e = Ut(13, r, t, o), e.elementType = zd, e.lanes = i, e;
        case Id:
          return e = Ut(19, r, t, o), e.elementType = Id, e.lanes = i, e;
        case zy:
          return Tu(r, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ry:
                a = 10;
                break e;
              case My:
                a = 9;
                break e;
              case Sh:
                a = 11;
                break e;
              case xh:
                a = 14;
                break e;
              case Yr:
                a = 16, n = null;
                break e;
            }
          throw Error(R(130, e == null ? e : typeof e, ""));
      }
  return t = Ut(a, r, t, o), t.elementType = e, t.type = n, t.lanes = i, t;
}
function Bn(e, t, r, n) {
  return e = Ut(7, e, n, t), e.lanes = r, e;
}
function Tu(e, t, r, n) {
  return e = Ut(22, e, n, t), e.elementType = zy, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function Vc(e, t, r) {
  return e = Ut(6, e, null, t), e.lanes = r, e;
}
function Wc(e, t, r) {
  return t = Ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function M2(e, t, r, n, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = kc(0), this.expirationTimes = kc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kc(0), this.identifierPrefix = n, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function rp(e, t, r, n, o, i, a, s, l) {
  return e = new M2(e, t, r, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ut(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Nh(i), e;
}
function z2(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: vo, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function _b(e) {
  if (!e)
    return mn;
  e = e._reactInternals;
  e: {
    if (ro(e) !== e || e.tag !== 1)
      throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (yt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (yt(r))
      return C1(e, r, t);
  }
  return t;
}
function Tb(e, t, r, n, o, i, a, s, l) {
  return e = rp(r, n, !0, e, o, i, a, s, l), e.context = _b(null), r = e.current, n = ut(), o = cn(r), i = Mr(n, o), i.callback = t ?? null, ln(r, i, o), e.current.lanes = o, Ga(e, o, n), bt(e, n), e;
}
function Pu(e, t, r, n) {
  var o = t.current, i = ut(), a = cn(o);
  return r = _b(r), t.context === null ? t.context = r : t.pendingContext = r, t = Mr(i, a), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = ln(o, t, a), e !== null && (nr(e, o, a, i), tl(e, o, a)), a;
}
function Yl(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ov(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function np(e, t) {
  Ov(e, t), (e = e.alternate) && Ov(e, t);
}
function I2() {
  return null;
}
var Pb = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function op(e) {
  this._internalRoot = e;
}
Eu.prototype.render = op.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(R(409));
  Pu(e, t, null, null);
};
Eu.prototype.unmount = op.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zn(function() {
      Pu(null, e, null, null);
    }), t[Lr] = null;
  }
};
function Eu(e) {
  this._internalRoot = e;
}
Eu.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = n1();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Qr.length && t !== 0 && t < Qr[r].priority; r++)
      ;
    Qr.splice(r, 0, e), r === 0 && i1(e);
  }
};
function ip(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function $u(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Nv() {
}
function F2(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function() {
        var u = Yl(a);
        i.call(u);
      };
    }
    var a = Tb(t, n, e, 0, null, !1, !1, "", Nv);
    return e._reactRootContainer = a, e[Lr] = a.current, xa(e.nodeType === 8 ? e.parentNode : e), Zn(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof n == "function") {
    var s = n;
    n = function() {
      var u = Yl(l);
      s.call(u);
    };
  }
  var l = rp(e, 0, !1, null, null, !1, !1, "", Nv);
  return e._reactRootContainer = l, e[Lr] = l.current, xa(e.nodeType === 8 ? e.parentNode : e), Zn(function() {
    Pu(t, l, r, n);
  }), l;
}
function Au(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = Yl(a);
        s.call(l);
      };
    }
    Pu(t, a, e, o);
  } else
    a = F2(r, t, e, o, n);
  return Yl(a);
}
t1 = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Oi(t.pendingLanes);
        r !== 0 && (Ch(t, r | 1), bt(t, Fe()), !(ee & 6) && (ii = Fe() + 500, xn()));
      }
      break;
    case 13:
      Zn(function() {
        var n = Or(e, 1);
        if (n !== null) {
          var o = ut();
          nr(n, e, 1, o);
        }
      }), np(e, 1);
  }
};
_h = function(e) {
  if (e.tag === 13) {
    var t = Or(e, 134217728);
    if (t !== null) {
      var r = ut();
      nr(t, e, 134217728, r);
    }
    np(e, 134217728);
  }
};
r1 = function(e) {
  if (e.tag === 13) {
    var t = cn(e), r = Or(e, t);
    if (r !== null) {
      var n = ut();
      nr(r, e, t, n);
    }
    np(e, t);
  }
};
n1 = function() {
  return se;
};
o1 = function(e, t) {
  var r = se;
  try {
    return se = e, t();
  } finally {
    se = r;
  }
};
Ud = function(e, t, r) {
  switch (t) {
    case "input":
      if (Ld(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; )
          r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = Su(n);
            if (!o)
              throw Error(R(90));
            Fy(n), Ld(n, o);
          }
        }
      }
      break;
    case "textarea":
      Ly(e, r);
      break;
    case "select":
      t = r.value, t != null && No(e, !!r.multiple, t, !1);
  }
};
Uy = Zh;
Hy = Zn;
var D2 = { usingClientEntryPoint: !1, Events: [Ya, xo, Su, Vy, Wy, Zh] }, Ei = { findFiberByHostInstance: Fn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, L2 = { bundleType: Ei.bundleType, version: Ei.version, rendererPackageName: Ei.rendererPackageName, rendererConfig: Ei.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Vr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Yy(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ei.findFiberByHostInstance || I2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ms = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ms.isDisabled && Ms.supportsFiber)
    try {
      vu = Ms.inject(L2), pr = Ms;
    } catch {
    }
}
Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D2;
Mt.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ip(t))
    throw Error(R(200));
  return z2(e, t, null, r);
};
Mt.createRoot = function(e, t) {
  if (!ip(e))
    throw Error(R(299));
  var r = !1, n = "", o = Pb;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = rp(e, 1, !1, null, null, r, !1, n, o), e[Lr] = t.current, xa(e.nodeType === 8 ? e.parentNode : e), new op(t);
};
Mt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
  return e = Yy(t), e = e === null ? null : e.stateNode, e;
};
Mt.flushSync = function(e) {
  return Zn(e);
};
Mt.hydrate = function(e, t, r) {
  if (!$u(t))
    throw Error(R(200));
  return Au(null, e, t, !0, r);
};
Mt.hydrateRoot = function(e, t, r) {
  if (!ip(e))
    throw Error(R(405));
  var n = r != null && r.hydratedSources || null, o = !1, i = "", a = Pb;
  if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = Tb(t, null, e, 1, r ?? null, o, !1, i, a), e[Lr] = t.current, xa(e), n)
    for (e = 0; e < n.length; e++)
      r = n[e], o = r._getVersion, o = o(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(
        r,
        o
      );
  return new Eu(t);
};
Mt.render = function(e, t, r) {
  if (!$u(t))
    throw Error(R(200));
  return Au(null, e, t, !1, r);
};
Mt.unmountComponentAtNode = function(e) {
  if (!$u(e))
    throw Error(R(40));
  return e._reactRootContainer ? (Zn(function() {
    Au(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Lr] = null;
    });
  }), !0) : !1;
};
Mt.unstable_batchedUpdates = Zh;
Mt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!$u(r))
    throw Error(R(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(R(38));
  return Au(e, t, r, !1, n);
};
Mt.version = "18.2.0-next-9e3b772b8-20220608";
function Eb() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Eb);
    } catch (e) {
      console.error(e);
    }
}
Eb(), Ty.exports = Mt;
var ap = Ty.exports, jv = ap;
Ad.createRoot = jv.createRoot, Ad.hydrateRoot = jv.hydrateRoot;
function O2(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function N2(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var j2 = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(N2(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = O2(o);
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
}(), rt = "-ms-", Xl = "-moz-", ne = "-webkit-", $b = "comm", sp = "rule", lp = "decl", B2 = "@import", Ab = "@keyframes", V2 = "@layer", W2 = Math.abs, Ru = String.fromCharCode, U2 = Object.assign;
function H2(e, t) {
  return qe(e, 0) ^ 45 ? (((t << 2 ^ qe(e, 0)) << 2 ^ qe(e, 1)) << 2 ^ qe(e, 2)) << 2 ^ qe(e, 3) : 0;
}
function Rb(e) {
  return e.trim();
}
function G2(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function oe(e, t, r) {
  return e.replace(t, r);
}
function Cf(e, t) {
  return e.indexOf(t);
}
function qe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Aa(e, t, r) {
  return e.slice(t, r);
}
function cr(e) {
  return e.length;
}
function up(e) {
  return e.length;
}
function zs(e, t) {
  return t.push(e), e;
}
function K2(e, t) {
  return e.map(t).join("");
}
var Mu = 1, ai = 1, Mb = 0, St = 0, Oe = 0, pi = "";
function zu(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Mu, column: ai, length: a, return: "" };
}
function $i(e, t) {
  return U2(zu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Y2() {
  return Oe;
}
function X2() {
  return Oe = St > 0 ? qe(pi, --St) : 0, ai--, Oe === 10 && (ai = 1, Mu--), Oe;
}
function Et() {
  return Oe = St < Mb ? qe(pi, St++) : 0, ai++, Oe === 10 && (ai = 1, Mu++), Oe;
}
function vr() {
  return qe(pi, St);
}
function ll() {
  return St;
}
function qa(e, t) {
  return Aa(pi, e, t);
}
function Ra(e) {
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
function zb(e) {
  return Mu = ai = 1, Mb = cr(pi = e), St = 0, [];
}
function Ib(e) {
  return pi = "", e;
}
function ul(e) {
  return Rb(qa(St - 1, _f(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function q2(e) {
  for (; (Oe = vr()) && Oe < 33; )
    Et();
  return Ra(e) > 2 || Ra(Oe) > 3 ? "" : " ";
}
function Q2(e, t) {
  for (; --t && Et() && !(Oe < 48 || Oe > 102 || Oe > 57 && Oe < 65 || Oe > 70 && Oe < 97); )
    ;
  return qa(e, ll() + (t < 6 && vr() == 32 && Et() == 32));
}
function _f(e) {
  for (; Et(); )
    switch (Oe) {
      case e:
        return St;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _f(Oe);
        break;
      case 40:
        e === 41 && _f(e);
        break;
      case 92:
        Et();
        break;
    }
  return St;
}
function Z2(e, t) {
  for (; Et() && e + Oe !== 57; )
    if (e + Oe === 84 && vr() === 47)
      break;
  return "/*" + qa(t, St - 1) + "*" + Ru(e === 47 ? e : Et());
}
function J2(e) {
  for (; !Ra(vr()); )
    Et();
  return qa(e, St);
}
function eT(e) {
  return Ib(cl("", null, null, null, [""], e = zb(e), 0, [0], e));
}
function cl(e, t, r, n, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, g = 0, y = 1, x = 1, m = 1, h = 0, v = "", w = o, T = i, A = n, P = v; x; )
    switch (g = h, h = Et()) {
      case 40:
        if (g != 108 && qe(P, d - 1) == 58) {
          Cf(P += oe(ul(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += ul(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += q2(g);
        break;
      case 92:
        P += Q2(ll() - 1, 7);
        continue;
      case 47:
        switch (vr()) {
          case 42:
          case 47:
            zs(tT(Z2(Et(), ll()), t, r), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * y:
        s[u++] = cr(P) * m;
      case 125 * y:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            m == -1 && (P = oe(P, /\f/g, "")), p > 0 && cr(P) - d && zs(p > 32 ? Vv(P + ";", n, r, d - 1) : Vv(oe(P, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            P += ";";
          default:
            if (zs(A = Bv(P, t, r, u, c, o, s, v, w = [], T = [], d), i), h === 123)
              if (c === 0)
                cl(P, t, A, A, w, i, d, s, T);
              else
                switch (f === 99 && qe(P, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    cl(e, A, A, n && zs(Bv(e, A, A, 0, 0, o, s, v, o, w = [], d), T), o, T, d, s, n ? w : T);
                    break;
                  default:
                    cl(P, A, A, A, [""], T, 0, s, T);
                }
        }
        u = c = p = 0, y = m = 1, v = P = "", d = a;
        break;
      case 58:
        d = 1 + cr(P), p = g;
      default:
        if (y < 1) {
          if (h == 123)
            --y;
          else if (h == 125 && y++ == 0 && X2() == 125)
            continue;
        }
        switch (P += Ru(h), h * y) {
          case 38:
            m = c > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            s[u++] = (cr(P) - 1) * m, m = 1;
            break;
          case 64:
            vr() === 45 && (P += ul(Et())), f = vr(), c = d = cr(v = P += J2(ll())), h++;
            break;
          case 45:
            g === 45 && cr(P) == 2 && (y = 0);
        }
    }
  return i;
}
function Bv(e, t, r, n, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = up(f), g = 0, y = 0, x = 0; g < n; ++g)
    for (var m = 0, h = Aa(e, d + 1, d = W2(y = a[g])), v = e; m < p; ++m)
      (v = Rb(y > 0 ? f[m] + " " + h : oe(h, /&\f/g, f[m]))) && (l[x++] = v);
  return zu(e, t, r, o === 0 ? sp : s, l, u, c);
}
function tT(e, t, r) {
  return zu(e, t, r, $b, Ru(Y2()), Aa(e, 2, -2), 0);
}
function Vv(e, t, r, n) {
  return zu(e, t, r, lp, Aa(e, 0, n), Aa(e, n + 1, -1), n);
}
function Ho(e, t) {
  for (var r = "", n = up(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function rT(e, t, r, n) {
  switch (e.type) {
    case V2:
      if (e.children.length)
        break;
    case B2:
    case lp:
      return e.return = e.return || e.value;
    case $b:
      return "";
    case Ab:
      return e.return = e.value + "{" + Ho(e.children, n) + "}";
    case sp:
      e.value = e.props.join(",");
  }
  return cr(r = Ho(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function nT(e) {
  var t = up(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function oT(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Wv = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function Fb(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var iT = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = vr(), o === 38 && i === 12 && (r[n] = 1), !Ra(i); )
    Et();
  return qa(t, St);
}, aT = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Ra(o)) {
      case 0:
        o === 38 && vr() === 12 && (r[n] = 1), t[n] += iT(St - 1, r, n);
        break;
      case 2:
        t[n] += ul(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = vr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Ru(o);
    }
  while (o = Et());
  return t;
}, sT = function(t, r) {
  return Ib(aT(zb(t), r));
}, Uv = /* @__PURE__ */ new WeakMap(), lT = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Uv.get(n)) && !o) {
      Uv.set(t, !0);
      for (var i = [], a = sT(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, uT = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Db(e, t) {
  switch (H2(e, t)) {
    case 5103:
      return ne + "print-" + e + e;
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
      return ne + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ne + e + Xl + e + rt + e + e;
    case 6828:
    case 4268:
      return ne + e + rt + e + e;
    case 6165:
      return ne + e + rt + "flex-" + e + e;
    case 5187:
      return ne + e + oe(e, /(\w+).+(:[^]+)/, ne + "box-$1$2" + rt + "flex-$1$2") + e;
    case 5443:
      return ne + e + rt + "flex-item-" + oe(e, /flex-|-self/, "") + e;
    case 4675:
      return ne + e + rt + "flex-line-pack" + oe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ne + e + rt + oe(e, "shrink", "negative") + e;
    case 5292:
      return ne + e + rt + oe(e, "basis", "preferred-size") + e;
    case 6060:
      return ne + "box-" + oe(e, "-grow", "") + ne + e + rt + oe(e, "grow", "positive") + e;
    case 4554:
      return ne + oe(e, /([^-])(transform)/g, "$1" + ne + "$2") + e;
    case 6187:
      return oe(oe(oe(e, /(zoom-|grab)/, ne + "$1"), /(image-set)/, ne + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return oe(e, /(image-set\([^]*)/, ne + "$1$`$1");
    case 4968:
      return oe(oe(e, /(.+:)(flex-)?(.*)/, ne + "box-pack:$3" + rt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ne + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return oe(e, /(.+)-inline(.+)/, ne + "$1$2") + e;
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
      if (cr(e) - 1 - t > 6)
        switch (qe(e, t + 1)) {
          case 109:
            if (qe(e, t + 4) !== 45)
              break;
          case 102:
            return oe(e, /(.+:)(.+)-([^]+)/, "$1" + ne + "$2-$3$1" + Xl + (qe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Cf(e, "stretch") ? Db(oe(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (qe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (qe(e, cr(e) - 3 - (~Cf(e, "!important") && 10))) {
        case 107:
          return oe(e, ":", ":" + ne) + e;
        case 101:
          return oe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ne + (qe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ne + "$2$3$1" + rt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (qe(e, t + 11)) {
        case 114:
          return ne + e + rt + oe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ne + e + rt + oe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ne + e + rt + oe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ne + e + rt + e + e;
  }
  return e;
}
var cT = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case lp:
        t.return = Db(t.value, t.length);
        break;
      case Ab:
        return Ho([$i(t, {
          value: oe(t.value, "@", "@" + ne)
        })], o);
      case sp:
        if (t.length)
          return K2(t.props, function(i) {
            switch (G2(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ho([$i(t, {
                  props: [oe(i, /:(read-\w+)/, ":" + Xl + "$1")]
                })], o);
              case "::placeholder":
                return Ho([$i(t, {
                  props: [oe(i, /:(plac\w+)/, ":" + ne + "input-$1")]
                }), $i(t, {
                  props: [oe(i, /:(plac\w+)/, ":" + Xl + "$1")]
                }), $i(t, {
                  props: [oe(i, /:(plac\w+)/, rt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, dT = [cT], fT = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var x = y.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || dT, i = {}, a, s = [];
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
  var l, u = [lT, uT];
  {
    var c, d = [rT, oT(function(y) {
      c.insert(y);
    })], f = nT(u.concat(o, d)), p = function(x) {
      return Ho(eT(x), f);
    };
    l = function(x, m, h, v) {
      c = h, p(x ? x + "{" + m.styles + "}" : m.styles), v && (g.inserted[m.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new j2({
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
function Jn() {
  return Jn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Jn.apply(this, arguments);
}
var Lb = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke = typeof Symbol == "function" && Symbol.for, cp = Ke ? Symbol.for("react.element") : 60103, dp = Ke ? Symbol.for("react.portal") : 60106, Iu = Ke ? Symbol.for("react.fragment") : 60107, Fu = Ke ? Symbol.for("react.strict_mode") : 60108, Du = Ke ? Symbol.for("react.profiler") : 60114, Lu = Ke ? Symbol.for("react.provider") : 60109, Ou = Ke ? Symbol.for("react.context") : 60110, fp = Ke ? Symbol.for("react.async_mode") : 60111, Nu = Ke ? Symbol.for("react.concurrent_mode") : 60111, ju = Ke ? Symbol.for("react.forward_ref") : 60112, Bu = Ke ? Symbol.for("react.suspense") : 60113, hT = Ke ? Symbol.for("react.suspense_list") : 60120, Vu = Ke ? Symbol.for("react.memo") : 60115, Wu = Ke ? Symbol.for("react.lazy") : 60116, pT = Ke ? Symbol.for("react.block") : 60121, mT = Ke ? Symbol.for("react.fundamental") : 60117, vT = Ke ? Symbol.for("react.responder") : 60118, gT = Ke ? Symbol.for("react.scope") : 60119;
function It(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case cp:
        switch (e = e.type, e) {
          case fp:
          case Nu:
          case Iu:
          case Du:
          case Fu:
          case Bu:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ou:
              case ju:
              case Wu:
              case Vu:
              case Lu:
                return e;
              default:
                return t;
            }
        }
      case dp:
        return t;
    }
  }
}
function Ob(e) {
  return It(e) === Nu;
}
le.AsyncMode = fp;
le.ConcurrentMode = Nu;
le.ContextConsumer = Ou;
le.ContextProvider = Lu;
le.Element = cp;
le.ForwardRef = ju;
le.Fragment = Iu;
le.Lazy = Wu;
le.Memo = Vu;
le.Portal = dp;
le.Profiler = Du;
le.StrictMode = Fu;
le.Suspense = Bu;
le.isAsyncMode = function(e) {
  return Ob(e) || It(e) === fp;
};
le.isConcurrentMode = Ob;
le.isContextConsumer = function(e) {
  return It(e) === Ou;
};
le.isContextProvider = function(e) {
  return It(e) === Lu;
};
le.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cp;
};
le.isForwardRef = function(e) {
  return It(e) === ju;
};
le.isFragment = function(e) {
  return It(e) === Iu;
};
le.isLazy = function(e) {
  return It(e) === Wu;
};
le.isMemo = function(e) {
  return It(e) === Vu;
};
le.isPortal = function(e) {
  return It(e) === dp;
};
le.isProfiler = function(e) {
  return It(e) === Du;
};
le.isStrictMode = function(e) {
  return It(e) === Fu;
};
le.isSuspense = function(e) {
  return It(e) === Bu;
};
le.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Iu || e === Nu || e === Du || e === Fu || e === Bu || e === hT || typeof e == "object" && e !== null && (e.$$typeof === Wu || e.$$typeof === Vu || e.$$typeof === Lu || e.$$typeof === Ou || e.$$typeof === ju || e.$$typeof === mT || e.$$typeof === vT || e.$$typeof === gT || e.$$typeof === pT);
};
le.typeOf = It;
Lb.exports = le;
var yT = Lb.exports, Nb = yT, bT = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ST = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, jb = {};
jb[Nb.ForwardRef] = bT;
jb[Nb.Memo] = ST;
var xT = !0;
function wT(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Bb = function(t, r, n) {
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
  xT === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Vb = function(t, r, n) {
  Bb(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function kT(e) {
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
var CT = {
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
}, _T = /[A-Z]|^ms/g, TT = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Wb = function(t) {
  return t.charCodeAt(1) === 45;
}, Hv = function(t) {
  return t != null && typeof t != "boolean";
}, Uc = /* @__PURE__ */ Fb(function(e) {
  return Wb(e) ? e : e.replace(_T, "-$&").toLowerCase();
}), Gv = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(TT, function(n, o, i) {
          return dr = {
            name: o,
            styles: i,
            next: dr
          }, o;
        });
  }
  return CT[t] !== 1 && !Wb(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Ma(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return dr = {
          name: r.name,
          styles: r.styles,
          next: dr
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            dr = {
              name: n.name,
              styles: n.styles,
              next: dr
            }, n = n.next;
        var o = r.styles + ";";
        return o;
      }
      return PT(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = dr, a = r(e);
        return dr = i, Ma(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return r;
  var s = t[r];
  return s !== void 0 ? s : r;
}
function PT(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Ma(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : Hv(a) && (n += Uc(i) + ":" + Gv(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Hv(a[s]) && (n += Uc(i) + ":" + Gv(i, a[s]) + ";");
      else {
        var l = Ma(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Uc(i) + ":" + l + ";";
            break;
          }
          default:
            n += i + "{" + l + "}";
        }
      }
    }
  return n;
}
var Kv = /label:\s*([^\s;\n{]+)\s*(;|$)/g, dr, hp = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  dr = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Ma(n, r, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += Ma(n, r, t[s]), o && (i += a[s]);
  Kv.lastIndex = 0;
  for (var l = "", u; (u = Kv.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = kT(i) + l;
  return {
    name: c,
    styles: i,
    next: dr
  };
}, ET = function(t) {
  return t();
}, Ub = Im.useInsertionEffect ? Im.useInsertionEffect : !1, $T = Ub || ET, Yv = Ub || b.useLayoutEffect, Hb = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ fT({
    key: "css"
  }) : null
);
Hb.Provider;
var Gb = function(t) {
  return /* @__PURE__ */ b.forwardRef(function(r, n) {
    var o = b.useContext(Hb);
    return t(r, o, n);
  });
}, za = /* @__PURE__ */ b.createContext({}), AT = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    return n;
  }
  return Jn({}, t, r);
}, RT = /* @__PURE__ */ Wv(function(e) {
  return Wv(function(t) {
    return AT(e, t);
  });
}), MT = function(t) {
  var r = b.useContext(za);
  return t.theme !== r && (r = RT(r)(t.theme)), /* @__PURE__ */ b.createElement(za.Provider, {
    value: r
  }, t.children);
}, Uu = /* @__PURE__ */ Gb(function(e, t) {
  var r = e.styles, n = hp([r], void 0, b.useContext(za)), o = b.useRef();
  return Yv(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Yv(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && Vb(t, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function zT() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return hp(t);
}
var Hu = function() {
  var t = zT.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Kb = String.raw, Yb = Kb`
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
`, IT = () => /* @__PURE__ */ _.jsx(Uu, { styles: Yb }), FT = ({ scope: e = "" }) => /* @__PURE__ */ _.jsx(
  Uu,
  {
    styles: Kb`
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

      ${Yb}
    `
  }
);
function DT(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function it(e = {}) {
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
        i ?? DT(n, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [LT, OT] = it({
  strict: !1,
  name: "PortalManagerContext"
});
function Xb(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ _.jsx(LT, { value: { zIndex: r }, children: t });
}
Xb.displayName = "PortalManager";
var Vn = globalThis != null && globalThis.document ? b.useLayoutEffect : b.useEffect, [qb, NT] = it({
  strict: !1,
  name: "PortalContext"
}), pp = "chakra-portal", jT = ".chakra-portal", BT = (e) => /* @__PURE__ */ _.jsx(
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
), VT = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = b.useState(null), i = b.useRef(null), [, a] = b.useState({});
  b.useEffect(() => a({}), []);
  const s = NT(), l = OT();
  Vn(() => {
    if (!n)
      return;
    const c = n.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = pp, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ _.jsx(BT, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return i.current ? ap.createPortal(
    /* @__PURE__ */ _.jsx(qb, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ _.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, WT = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = b.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = pp), l;
  }, [o]), [, s] = b.useState({});
  return Vn(() => s({}), []), Vn(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? ap.createPortal(
    /* @__PURE__ */ _.jsx(qb, { value: n ? a : null, children: t }),
    a
  ) : null;
};
function Qa(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ _.jsx(WT, { containerRef: r, ...n }) : /* @__PURE__ */ _.jsx(VT, { ...n });
}
Qa.className = pp;
Qa.selector = jT;
Qa.displayName = "Portal";
function Qb() {
  const e = b.useContext(
    za
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var mp = b.createContext({});
mp.displayName = "ColorModeContext";
function vp() {
  const e = b.useContext(mp);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var Is = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function UT(e = {}) {
  const { preventTransition: t = !0 } = e, r = {
    setDataset: (n) => {
      const o = t ? r.preventTransition() : void 0;
      document.documentElement.dataset.theme = n, document.documentElement.style.colorScheme = n, o == null || o();
    },
    setClassName(n) {
      document.body.classList.add(n ? Is.dark : Is.light), document.body.classList.remove(n ? Is.light : Is.dark);
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
var HT = "chakra-ui-color-mode";
function GT(e) {
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
var KT = GT(HT), Xv = () => {
};
function qv(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function Zb(e) {
  const {
    value: t,
    children: r,
    options: {
      useSystemColorMode: n,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = KT
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = b.useState(
    () => qv(a, s)
  ), [c, d] = b.useState(
    () => qv(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: g, addListener: y } = b.useMemo(
    () => UT({ preventTransition: i }),
    [i]
  ), x = o === "system" && !l ? c : l, m = b.useCallback(
    (w) => {
      const T = w === "system" ? f() : w;
      u(T), p(T === "dark"), g(T), a.set(T);
    },
    [a, f, p, g]
  );
  Vn(() => {
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
      toggleColorMode: t ? Xv : h,
      setColorMode: t ? Xv : m,
      forced: t !== void 0
    }),
    [x, h, m, t]
  );
  return /* @__PURE__ */ _.jsx(mp.Provider, { value: v, children: r });
}
Zb.displayName = "ColorModeProvider";
var YT = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function XT(e) {
  let t = e;
  return YT.has(t) || (t = "light"), t;
}
function qT(e = {}) {
  const {
    initialColorMode: t = "light",
    type: r = "localStorage",
    storageKey: n = "chakra-ui-color-mode"
  } = e, o = XT(t), i = r === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${n}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${n}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function QT(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ _.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: qT(e) }
    }
  );
}
function ZT() {
  const e = vp(), t = Qb();
  return { ...e, theme: t };
}
var be = (...e) => e.filter(Boolean).join(" ");
function Kt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function rn(e, ...t) {
  return JT(e) ? e(...t) : e;
}
var JT = (e) => typeof e == "function", Q = (e) => e ? "" : void 0, Hc = (e) => e ? !0 : void 0;
function je(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function eP(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var ql = { exports: {} };
ql.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", g = "[object GeneratorFunction]", y = "[object Map]", x = "[object Number]", m = "[object Null]", h = "[object Object]", v = "[object Proxy]", w = "[object RegExp]", T = "[object Set]", A = "[object String]", P = "[object Undefined]", $ = "[object WeakMap]", M = "[object ArrayBuffer]", I = "[object DataView]", H = "[object Float32Array]", ce = "[object Float64Array]", me = "[object Int8Array]", Z = "[object Int16Array]", ue = "[object Int32Array]", $e = "[object Uint8Array]", ze = "[object Uint8ClampedArray]", z = "[object Uint16Array]", N = "[object Uint32Array]", V = /[\\^$.*+?()[\]{}|]/g, j = /^\[object .+?Constructor\]$/, J = /^(?:0|[1-9]\d*)$/, W = {};
  W[H] = W[ce] = W[me] = W[Z] = W[ue] = W[$e] = W[ze] = W[z] = W[N] = !0, W[s] = W[l] = W[M] = W[c] = W[I] = W[d] = W[f] = W[p] = W[y] = W[x] = W[h] = W[w] = W[T] = W[A] = W[$] = !1;
  var te = typeof ms == "object" && ms && ms.Object === Object && ms, wt = typeof self == "object" && self && self.Object === Object && self, Se = te || wt || Function("return this")(), Ie = t && !t.nodeType && t, Je = Ie && !0 && e && !e.nodeType && e, Ft = Je && Je.exports === Ie, kt = Ft && te.process, Dt = function() {
    try {
      var S = Je && Je.require && Je.require("util").types;
      return S || kt && kt.binding && kt.binding("util");
    } catch {
    }
  }(), kn = Dt && Dt.isTypedArray;
  function io(S, k, E) {
    switch (E.length) {
      case 0:
        return S.call(k);
      case 1:
        return S.call(k, E[0]);
      case 2:
        return S.call(k, E[0], E[1]);
      case 3:
        return S.call(k, E[0], E[1], E[2]);
    }
    return S.apply(k, E);
  }
  function cm(S, k) {
    for (var E = -1, F = Array(S); ++E < S; )
      F[E] = k(E);
    return F;
  }
  function U(S) {
    return function(k) {
      return S(k);
    };
  }
  function ht(S, k) {
    return S == null ? void 0 : S[k];
  }
  function Lt(S, k) {
    return function(E) {
      return S(k(E));
    };
  }
  var ao = Array.prototype, ak = Function.prototype, ss = Object.prototype, sc = Se["__core-js_shared__"], ls = ak.toString, xr = ss.hasOwnProperty, dm = function() {
    var S = /[^.]+$/.exec(sc && sc.keys && sc.keys.IE_PROTO || "");
    return S ? "Symbol(src)_1." + S : "";
  }(), fm = ss.toString, sk = ls.call(Object), lk = RegExp(
    "^" + ls.call(xr).replace(V, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), us = Ft ? Se.Buffer : void 0, hm = Se.Symbol, pm = Se.Uint8Array, mm = us ? us.allocUnsafe : void 0, vm = Lt(Object.getPrototypeOf, Object), gm = Object.create, uk = ss.propertyIsEnumerable, ck = ao.splice, Cn = hm ? hm.toStringTag : void 0, cs = function() {
    try {
      var S = cc(Object, "defineProperty");
      return S({}, "", {}), S;
    } catch {
    }
  }(), dk = us ? us.isBuffer : void 0, ym = Math.max, fk = Date.now, bm = cc(Se, "Map"), yi = cc(Object, "create"), hk = /* @__PURE__ */ function() {
    function S() {
    }
    return function(k) {
      if (!Tn(k))
        return {};
      if (gm)
        return gm(k);
      S.prototype = k;
      var E = new S();
      return S.prototype = void 0, E;
    };
  }();
  function _n(S) {
    var k = -1, E = S == null ? 0 : S.length;
    for (this.clear(); ++k < E; ) {
      var F = S[k];
      this.set(F[0], F[1]);
    }
  }
  function pk() {
    this.__data__ = yi ? yi(null) : {}, this.size = 0;
  }
  function mk(S) {
    var k = this.has(S) && delete this.__data__[S];
    return this.size -= k ? 1 : 0, k;
  }
  function vk(S) {
    var k = this.__data__;
    if (yi) {
      var E = k[S];
      return E === n ? void 0 : E;
    }
    return xr.call(k, S) ? k[S] : void 0;
  }
  function gk(S) {
    var k = this.__data__;
    return yi ? k[S] !== void 0 : xr.call(k, S);
  }
  function yk(S, k) {
    var E = this.__data__;
    return this.size += this.has(S) ? 0 : 1, E[S] = yi && k === void 0 ? n : k, this;
  }
  _n.prototype.clear = pk, _n.prototype.delete = mk, _n.prototype.get = vk, _n.prototype.has = gk, _n.prototype.set = yk;
  function wr(S) {
    var k = -1, E = S == null ? 0 : S.length;
    for (this.clear(); ++k < E; ) {
      var F = S[k];
      this.set(F[0], F[1]);
    }
  }
  function bk() {
    this.__data__ = [], this.size = 0;
  }
  function Sk(S) {
    var k = this.__data__, E = ds(k, S);
    if (E < 0)
      return !1;
    var F = k.length - 1;
    return E == F ? k.pop() : ck.call(k, E, 1), --this.size, !0;
  }
  function xk(S) {
    var k = this.__data__, E = ds(k, S);
    return E < 0 ? void 0 : k[E][1];
  }
  function wk(S) {
    return ds(this.__data__, S) > -1;
  }
  function kk(S, k) {
    var E = this.__data__, F = ds(E, S);
    return F < 0 ? (++this.size, E.push([S, k])) : E[F][1] = k, this;
  }
  wr.prototype.clear = bk, wr.prototype.delete = Sk, wr.prototype.get = xk, wr.prototype.has = wk, wr.prototype.set = kk;
  function so(S) {
    var k = -1, E = S == null ? 0 : S.length;
    for (this.clear(); ++k < E; ) {
      var F = S[k];
      this.set(F[0], F[1]);
    }
  }
  function Ck() {
    this.size = 0, this.__data__ = {
      hash: new _n(),
      map: new (bm || wr)(),
      string: new _n()
    };
  }
  function _k(S) {
    var k = hs(this, S).delete(S);
    return this.size -= k ? 1 : 0, k;
  }
  function Tk(S) {
    return hs(this, S).get(S);
  }
  function Pk(S) {
    return hs(this, S).has(S);
  }
  function Ek(S, k) {
    var E = hs(this, S), F = E.size;
    return E.set(S, k), this.size += E.size == F ? 0 : 1, this;
  }
  so.prototype.clear = Ck, so.prototype.delete = _k, so.prototype.get = Tk, so.prototype.has = Pk, so.prototype.set = Ek;
  function lo(S) {
    var k = this.__data__ = new wr(S);
    this.size = k.size;
  }
  function $k() {
    this.__data__ = new wr(), this.size = 0;
  }
  function Ak(S) {
    var k = this.__data__, E = k.delete(S);
    return this.size = k.size, E;
  }
  function Rk(S) {
    return this.__data__.get(S);
  }
  function Mk(S) {
    return this.__data__.has(S);
  }
  function zk(S, k) {
    var E = this.__data__;
    if (E instanceof wr) {
      var F = E.__data__;
      if (!bm || F.length < r - 1)
        return F.push([S, k]), this.size = ++E.size, this;
      E = this.__data__ = new so(F);
    }
    return E.set(S, k), this.size = E.size, this;
  }
  lo.prototype.clear = $k, lo.prototype.delete = Ak, lo.prototype.get = Rk, lo.prototype.has = Mk, lo.prototype.set = zk;
  function Ik(S, k) {
    var E = hc(S), F = !E && fc(S), q = !E && !F && Cm(S), de = !E && !F && !q && Tm(S), xe = E || F || q || de, Y = xe ? cm(S.length, String) : [], we = Y.length;
    for (var Ot in S)
      (k || xr.call(S, Ot)) && !(xe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ot == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      q && (Ot == "offset" || Ot == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      de && (Ot == "buffer" || Ot == "byteLength" || Ot == "byteOffset") || // Skip index properties.
      wm(Ot, we))) && Y.push(Ot);
    return Y;
  }
  function lc(S, k, E) {
    (E !== void 0 && !ps(S[k], E) || E === void 0 && !(k in S)) && uc(S, k, E);
  }
  function Fk(S, k, E) {
    var F = S[k];
    (!(xr.call(S, k) && ps(F, E)) || E === void 0 && !(k in S)) && uc(S, k, E);
  }
  function ds(S, k) {
    for (var E = S.length; E--; )
      if (ps(S[E][0], k))
        return E;
    return -1;
  }
  function uc(S, k, E) {
    k == "__proto__" && cs ? cs(S, k, {
      configurable: !0,
      enumerable: !0,
      value: E,
      writable: !0
    }) : S[k] = E;
  }
  var Dk = Xk();
  function fs(S) {
    return S == null ? S === void 0 ? P : m : Cn && Cn in Object(S) ? qk(S) : rC(S);
  }
  function Sm(S) {
    return bi(S) && fs(S) == s;
  }
  function Lk(S) {
    if (!Tn(S) || eC(S))
      return !1;
    var k = mc(S) ? lk : j;
    return k.test(aC(S));
  }
  function Ok(S) {
    return bi(S) && _m(S.length) && !!W[fs(S)];
  }
  function Nk(S) {
    if (!Tn(S))
      return tC(S);
    var k = km(S), E = [];
    for (var F in S)
      F == "constructor" && (k || !xr.call(S, F)) || E.push(F);
    return E;
  }
  function xm(S, k, E, F, q) {
    S !== k && Dk(k, function(de, xe) {
      if (q || (q = new lo()), Tn(de))
        jk(S, k, xe, E, xm, F, q);
      else {
        var Y = F ? F(dc(S, xe), de, xe + "", S, k, q) : void 0;
        Y === void 0 && (Y = de), lc(S, xe, Y);
      }
    }, Pm);
  }
  function jk(S, k, E, F, q, de, xe) {
    var Y = dc(S, E), we = dc(k, E), Ot = xe.get(we);
    if (Ot) {
      lc(S, E, Ot);
      return;
    }
    var Ct = de ? de(Y, we, E + "", S, k, xe) : void 0, Si = Ct === void 0;
    if (Si) {
      var vc = hc(we), gc = !vc && Cm(we), $m = !vc && !gc && Tm(we);
      Ct = we, vc || gc || $m ? hc(Y) ? Ct = Y : sC(Y) ? Ct = Gk(Y) : gc ? (Si = !1, Ct = Wk(we, !0)) : $m ? (Si = !1, Ct = Hk(we, !0)) : Ct = [] : lC(we) || fc(we) ? (Ct = Y, fc(Y) ? Ct = uC(Y) : (!Tn(Y) || mc(Y)) && (Ct = Qk(we))) : Si = !1;
    }
    Si && (xe.set(we, Ct), q(Ct, we, F, de, xe), xe.delete(we)), lc(S, E, Ct);
  }
  function Bk(S, k) {
    return oC(nC(S, k, Em), S + "");
  }
  var Vk = cs ? function(S, k) {
    return cs(S, "toString", {
      configurable: !0,
      enumerable: !1,
      value: dC(k),
      writable: !0
    });
  } : Em;
  function Wk(S, k) {
    if (k)
      return S.slice();
    var E = S.length, F = mm ? mm(E) : new S.constructor(E);
    return S.copy(F), F;
  }
  function Uk(S) {
    var k = new S.constructor(S.byteLength);
    return new pm(k).set(new pm(S)), k;
  }
  function Hk(S, k) {
    var E = k ? Uk(S.buffer) : S.buffer;
    return new S.constructor(E, S.byteOffset, S.length);
  }
  function Gk(S, k) {
    var E = -1, F = S.length;
    for (k || (k = Array(F)); ++E < F; )
      k[E] = S[E];
    return k;
  }
  function Kk(S, k, E, F) {
    var q = !E;
    E || (E = {});
    for (var de = -1, xe = k.length; ++de < xe; ) {
      var Y = k[de], we = F ? F(E[Y], S[Y], Y, E, S) : void 0;
      we === void 0 && (we = S[Y]), q ? uc(E, Y, we) : Fk(E, Y, we);
    }
    return E;
  }
  function Yk(S) {
    return Bk(function(k, E) {
      var F = -1, q = E.length, de = q > 1 ? E[q - 1] : void 0, xe = q > 2 ? E[2] : void 0;
      for (de = S.length > 3 && typeof de == "function" ? (q--, de) : void 0, xe && Zk(E[0], E[1], xe) && (de = q < 3 ? void 0 : de, q = 1), k = Object(k); ++F < q; ) {
        var Y = E[F];
        Y && S(k, Y, F, de);
      }
      return k;
    });
  }
  function Xk(S) {
    return function(k, E, F) {
      for (var q = -1, de = Object(k), xe = F(k), Y = xe.length; Y--; ) {
        var we = xe[S ? Y : ++q];
        if (E(de[we], we, de) === !1)
          break;
      }
      return k;
    };
  }
  function hs(S, k) {
    var E = S.__data__;
    return Jk(k) ? E[typeof k == "string" ? "string" : "hash"] : E.map;
  }
  function cc(S, k) {
    var E = ht(S, k);
    return Lk(E) ? E : void 0;
  }
  function qk(S) {
    var k = xr.call(S, Cn), E = S[Cn];
    try {
      S[Cn] = void 0;
      var F = !0;
    } catch {
    }
    var q = fm.call(S);
    return F && (k ? S[Cn] = E : delete S[Cn]), q;
  }
  function Qk(S) {
    return typeof S.constructor == "function" && !km(S) ? hk(vm(S)) : {};
  }
  function wm(S, k) {
    var E = typeof S;
    return k = k ?? a, !!k && (E == "number" || E != "symbol" && J.test(S)) && S > -1 && S % 1 == 0 && S < k;
  }
  function Zk(S, k, E) {
    if (!Tn(E))
      return !1;
    var F = typeof k;
    return (F == "number" ? pc(E) && wm(k, E.length) : F == "string" && k in E) ? ps(E[k], S) : !1;
  }
  function Jk(S) {
    var k = typeof S;
    return k == "string" || k == "number" || k == "symbol" || k == "boolean" ? S !== "__proto__" : S === null;
  }
  function eC(S) {
    return !!dm && dm in S;
  }
  function km(S) {
    var k = S && S.constructor, E = typeof k == "function" && k.prototype || ss;
    return S === E;
  }
  function tC(S) {
    var k = [];
    if (S != null)
      for (var E in Object(S))
        k.push(E);
    return k;
  }
  function rC(S) {
    return fm.call(S);
  }
  function nC(S, k, E) {
    return k = ym(k === void 0 ? S.length - 1 : k, 0), function() {
      for (var F = arguments, q = -1, de = ym(F.length - k, 0), xe = Array(de); ++q < de; )
        xe[q] = F[k + q];
      q = -1;
      for (var Y = Array(k + 1); ++q < k; )
        Y[q] = F[q];
      return Y[k] = E(xe), io(S, this, Y);
    };
  }
  function dc(S, k) {
    if (!(k === "constructor" && typeof S[k] == "function") && k != "__proto__")
      return S[k];
  }
  var oC = iC(Vk);
  function iC(S) {
    var k = 0, E = 0;
    return function() {
      var F = fk(), q = i - (F - E);
      if (E = F, q > 0) {
        if (++k >= o)
          return arguments[0];
      } else
        k = 0;
      return S.apply(void 0, arguments);
    };
  }
  function aC(S) {
    if (S != null) {
      try {
        return ls.call(S);
      } catch {
      }
      try {
        return S + "";
      } catch {
      }
    }
    return "";
  }
  function ps(S, k) {
    return S === k || S !== S && k !== k;
  }
  var fc = Sm(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Sm : function(S) {
    return bi(S) && xr.call(S, "callee") && !uk.call(S, "callee");
  }, hc = Array.isArray;
  function pc(S) {
    return S != null && _m(S.length) && !mc(S);
  }
  function sC(S) {
    return bi(S) && pc(S);
  }
  var Cm = dk || fC;
  function mc(S) {
    if (!Tn(S))
      return !1;
    var k = fs(S);
    return k == p || k == g || k == u || k == v;
  }
  function _m(S) {
    return typeof S == "number" && S > -1 && S % 1 == 0 && S <= a;
  }
  function Tn(S) {
    var k = typeof S;
    return S != null && (k == "object" || k == "function");
  }
  function bi(S) {
    return S != null && typeof S == "object";
  }
  function lC(S) {
    if (!bi(S) || fs(S) != h)
      return !1;
    var k = vm(S);
    if (k === null)
      return !0;
    var E = xr.call(k, "constructor") && k.constructor;
    return typeof E == "function" && E instanceof E && ls.call(E) == sk;
  }
  var Tm = kn ? U(kn) : Ok;
  function uC(S) {
    return Kk(S, Pm(S));
  }
  function Pm(S) {
    return pc(S) ? Ik(S, !0) : Nk(S);
  }
  var cC = Yk(function(S, k, E, F) {
    xm(S, k, E, F);
  });
  function dC(S) {
    return function() {
      return S;
    };
  }
  function Em(S) {
    return S;
  }
  function fC() {
    return !1;
  }
  e.exports = cC;
})(ql, ql.exports);
var tP = ql.exports;
const Ht = /* @__PURE__ */ dh(tP);
var rP = (e) => /!(important)?$/.test(e), Qv = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, nP = (e, t) => (r) => {
  const n = String(t), o = rP(n), i = Qv(n), a = e ? `${e}.${i}` : i;
  let s = Kt(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
  return s = Qv(s), o ? `${s} !important` : s;
};
function gp(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, a) => {
    var s;
    const l = nP(t, i)(a);
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l;
    return n && (u = n(u, a)), u;
  };
}
var Fs = (...e) => (t) => e.reduce((r, n) => n(r), t);
function Nt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = gp({
      scale: e,
      transform: t
    }), n;
  };
}
var oP = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function iP(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: oP(t),
    transform: r ? gp({
      scale: r,
      compose: n
    }) : n
  };
}
var Jb = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function aP() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Jb
  ].join(" ");
}
function sP() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Jb
  ].join(" ");
}
var lP = {
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
}, uP = {
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
function cP(e) {
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
var dP = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Tf = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, fP = new Set(Object.values(Tf)), Pf = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), hP = (e) => e.trim();
function pP(e, t) {
  if (e == null || Pf.has(e))
    return e;
  if (!(Ef(e) || Pf.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(hP).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in Tf ? Tf[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (fP.has(f))
      return f;
    const p = f.indexOf(" "), [g, y] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], x = Ef(y) ? y : y && y.split(" "), m = `colors.${g}`, h = m in t.__cssMap ? t.__cssMap[m].varRef : g;
    return x ? [
      h,
      ...Array.isArray(x) ? x : [x]
    ].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var Ef = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), mP = (e, t) => pP(e, t ?? {});
function vP(e) {
  return /^var\(--.+\)$/.test(e);
}
var gP = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, ar = (e) => (t) => `${e}(${t})`, X = {
  filter(e) {
    return e !== "auto" ? e : lP;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : uP;
  },
  ring(e) {
    return cP(X.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? aP() : e === "auto-gpu" ? sP() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = gP(e);
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
    if (vP(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: mP,
  blur: ar("blur"),
  opacity: ar("opacity"),
  brightness: ar("brightness"),
  contrast: ar("contrast"),
  dropShadow: ar("drop-shadow"),
  grayscale: ar("grayscale"),
  hueRotate: (e) => ar("hue-rotate")(X.degree(e)),
  invert: ar("invert"),
  saturate: ar("saturate"),
  sepia: ar("sepia"),
  bgImage(e) {
    return e == null || Ef(e) || Pf.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = dP[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, C = {
  borderWidths: Nt("borderWidths"),
  borderStyles: Nt("borderStyles"),
  colors: Nt("colors"),
  borders: Nt("borders"),
  gradients: Nt("gradients", X.gradient),
  radii: Nt("radii", X.px),
  space: Nt("space", Fs(X.vh, X.px)),
  spaceT: Nt("space", Fs(X.vh, X.px)),
  degreeT(e) {
    return { property: e, transform: X.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: gp({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: Nt("sizes", Fs(X.vh, X.px)),
  sizesT: Nt("sizes", Fs(X.vh, X.fraction)),
  shadows: Nt("shadows"),
  logical: iP,
  blur: Nt("blur", X.blur)
}, dl = {
  background: C.colors("background"),
  backgroundColor: C.colors("backgroundColor"),
  backgroundImage: C.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: X.bgClip },
  bgSize: C.prop("backgroundSize"),
  bgPosition: C.prop("backgroundPosition"),
  bg: C.colors("background"),
  bgColor: C.colors("backgroundColor"),
  bgPos: C.prop("backgroundPosition"),
  bgRepeat: C.prop("backgroundRepeat"),
  bgAttachment: C.prop("backgroundAttachment"),
  bgGradient: C.gradients("backgroundImage"),
  bgClip: { transform: X.bgClip }
};
Object.assign(dl, {
  bgImage: dl.backgroundImage,
  bgImg: dl.backgroundImage
});
var re = {
  border: C.borders("border"),
  borderWidth: C.borderWidths("borderWidth"),
  borderStyle: C.borderStyles("borderStyle"),
  borderColor: C.colors("borderColor"),
  borderRadius: C.radii("borderRadius"),
  borderTop: C.borders("borderTop"),
  borderBlockStart: C.borders("borderBlockStart"),
  borderTopLeftRadius: C.radii("borderTopLeftRadius"),
  borderStartStartRadius: C.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: C.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: C.radii("borderTopRightRadius"),
  borderStartEndRadius: C.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: C.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: C.borders("borderRight"),
  borderInlineEnd: C.borders("borderInlineEnd"),
  borderBottom: C.borders("borderBottom"),
  borderBlockEnd: C.borders("borderBlockEnd"),
  borderBottomLeftRadius: C.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: C.radii("borderBottomRightRadius"),
  borderLeft: C.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: C.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: C.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: C.borders(["borderLeft", "borderRight"]),
  borderInline: C.borders("borderInline"),
  borderY: C.borders(["borderTop", "borderBottom"]),
  borderBlock: C.borders("borderBlock"),
  borderTopWidth: C.borderWidths("borderTopWidth"),
  borderBlockStartWidth: C.borderWidths("borderBlockStartWidth"),
  borderTopColor: C.colors("borderTopColor"),
  borderBlockStartColor: C.colors("borderBlockStartColor"),
  borderTopStyle: C.borderStyles("borderTopStyle"),
  borderBlockStartStyle: C.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: C.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: C.borderWidths("borderBlockEndWidth"),
  borderBottomColor: C.colors("borderBottomColor"),
  borderBlockEndColor: C.colors("borderBlockEndColor"),
  borderBottomStyle: C.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: C.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: C.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: C.borderWidths("borderInlineStartWidth"),
  borderLeftColor: C.colors("borderLeftColor"),
  borderInlineStartColor: C.colors("borderInlineStartColor"),
  borderLeftStyle: C.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: C.borderStyles("borderInlineStartStyle"),
  borderRightWidth: C.borderWidths("borderRightWidth"),
  borderInlineEndWidth: C.borderWidths("borderInlineEndWidth"),
  borderRightColor: C.colors("borderRightColor"),
  borderInlineEndColor: C.colors("borderInlineEndColor"),
  borderRightStyle: C.borderStyles("borderRightStyle"),
  borderInlineEndStyle: C.borderStyles("borderInlineEndStyle"),
  borderTopRadius: C.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: C.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: C.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: C.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(re, {
  rounded: re.borderRadius,
  roundedTop: re.borderTopRadius,
  roundedTopLeft: re.borderTopLeftRadius,
  roundedTopRight: re.borderTopRightRadius,
  roundedTopStart: re.borderStartStartRadius,
  roundedTopEnd: re.borderStartEndRadius,
  roundedBottom: re.borderBottomRadius,
  roundedBottomLeft: re.borderBottomLeftRadius,
  roundedBottomRight: re.borderBottomRightRadius,
  roundedBottomStart: re.borderEndStartRadius,
  roundedBottomEnd: re.borderEndEndRadius,
  roundedLeft: re.borderLeftRadius,
  roundedRight: re.borderRightRadius,
  roundedStart: re.borderInlineStartRadius,
  roundedEnd: re.borderInlineEndRadius,
  borderStart: re.borderInlineStart,
  borderEnd: re.borderInlineEnd,
  borderTopStartRadius: re.borderStartStartRadius,
  borderTopEndRadius: re.borderStartEndRadius,
  borderBottomStartRadius: re.borderEndStartRadius,
  borderBottomEndRadius: re.borderEndEndRadius,
  borderStartRadius: re.borderInlineStartRadius,
  borderEndRadius: re.borderInlineEndRadius,
  borderStartWidth: re.borderInlineStartWidth,
  borderEndWidth: re.borderInlineEndWidth,
  borderStartColor: re.borderInlineStartColor,
  borderEndColor: re.borderInlineEndColor,
  borderStartStyle: re.borderInlineStartStyle,
  borderEndStyle: re.borderInlineEndStyle
});
var yP = {
  color: C.colors("color"),
  textColor: C.colors("color"),
  fill: C.colors("fill"),
  stroke: C.colors("stroke")
}, $f = {
  boxShadow: C.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: C.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: C.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign($f, {
  shadow: $f.boxShadow
});
var bP = {
  filter: { transform: X.filter },
  blur: C.blur("--chakra-blur"),
  brightness: C.propT("--chakra-brightness", X.brightness),
  contrast: C.propT("--chakra-contrast", X.contrast),
  hueRotate: C.propT("--chakra-hue-rotate", X.hueRotate),
  invert: C.propT("--chakra-invert", X.invert),
  saturate: C.propT("--chakra-saturate", X.saturate),
  dropShadow: C.propT("--chakra-drop-shadow", X.dropShadow),
  backdropFilter: { transform: X.backdropFilter },
  backdropBlur: C.blur("--chakra-backdrop-blur"),
  backdropBrightness: C.propT(
    "--chakra-backdrop-brightness",
    X.brightness
  ),
  backdropContrast: C.propT("--chakra-backdrop-contrast", X.contrast),
  backdropHueRotate: C.propT(
    "--chakra-backdrop-hue-rotate",
    X.hueRotate
  ),
  backdropInvert: C.propT("--chakra-backdrop-invert", X.invert),
  backdropSaturate: C.propT("--chakra-backdrop-saturate", X.saturate)
}, Ql = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: X.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: C.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: C.space("gap"),
  rowGap: C.space("rowGap"),
  columnGap: C.space("columnGap")
};
Object.assign(Ql, {
  flexDir: Ql.flexDirection
});
var eS = {
  gridGap: C.space("gridGap"),
  gridColumnGap: C.space("gridColumnGap"),
  gridRowGap: C.space("gridRowGap"),
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
}, SP = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: X.outline },
  outlineOffset: !0,
  outlineColor: C.colors("outlineColor")
}, Bt = {
  width: C.sizesT("width"),
  inlineSize: C.sizesT("inlineSize"),
  height: C.sizes("height"),
  blockSize: C.sizes("blockSize"),
  boxSize: C.sizes(["width", "height"]),
  minWidth: C.sizes("minWidth"),
  minInlineSize: C.sizes("minInlineSize"),
  minHeight: C.sizes("minHeight"),
  minBlockSize: C.sizes("minBlockSize"),
  maxWidth: C.sizes("maxWidth"),
  maxInlineSize: C.sizes("maxInlineSize"),
  maxHeight: C.sizes("maxHeight"),
  maxBlockSize: C.sizes("maxBlockSize"),
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
  float: C.propT("float", X.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(Bt, {
  w: Bt.width,
  h: Bt.height,
  minW: Bt.minWidth,
  maxW: Bt.maxWidth,
  minH: Bt.minHeight,
  maxH: Bt.maxHeight,
  overscroll: Bt.overscrollBehavior,
  overscrollX: Bt.overscrollBehaviorX,
  overscrollY: Bt.overscrollBehaviorY
});
var xP = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: C.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: C.prop("listStyleImage")
};
function wP(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var kP = (e) => {
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
}, CP = kP(wP), _P = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, TP = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Gc = (e, t, r) => {
  const n = {}, o = CP(e, t, {});
  for (const i in o)
    i in r && r[i] != null || (n[i] = o[i]);
  return n;
}, PP = {
  srOnly: {
    transform(e) {
      return e === !0 ? _P : e === "focusable" ? TP : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => Gc(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => Gc(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => Gc(t, e, r)
  }
}, ra = {
  position: !0,
  pos: C.prop("position"),
  zIndex: C.prop("zIndex", "zIndices"),
  inset: C.spaceT("inset"),
  insetX: C.spaceT(["left", "right"]),
  insetInline: C.spaceT("insetInline"),
  insetY: C.spaceT(["top", "bottom"]),
  insetBlock: C.spaceT("insetBlock"),
  top: C.spaceT("top"),
  insetBlockStart: C.spaceT("insetBlockStart"),
  bottom: C.spaceT("bottom"),
  insetBlockEnd: C.spaceT("insetBlockEnd"),
  left: C.spaceT("left"),
  insetInlineStart: C.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: C.spaceT("right"),
  insetInlineEnd: C.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(ra, {
  insetStart: ra.insetInlineStart,
  insetEnd: ra.insetInlineEnd
});
var EP = {
  ring: { transform: X.ring },
  ringColor: C.colors("--chakra-ring-color"),
  ringOffset: C.prop("--chakra-ring-offset-width"),
  ringOffsetColor: C.colors("--chakra-ring-offset-color"),
  ringInset: C.prop("--chakra-ring-inset")
}, ge = {
  margin: C.spaceT("margin"),
  marginTop: C.spaceT("marginTop"),
  marginBlockStart: C.spaceT("marginBlockStart"),
  marginRight: C.spaceT("marginRight"),
  marginInlineEnd: C.spaceT("marginInlineEnd"),
  marginBottom: C.spaceT("marginBottom"),
  marginBlockEnd: C.spaceT("marginBlockEnd"),
  marginLeft: C.spaceT("marginLeft"),
  marginInlineStart: C.spaceT("marginInlineStart"),
  marginX: C.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: C.spaceT("marginInline"),
  marginY: C.spaceT(["marginTop", "marginBottom"]),
  marginBlock: C.spaceT("marginBlock"),
  padding: C.space("padding"),
  paddingTop: C.space("paddingTop"),
  paddingBlockStart: C.space("paddingBlockStart"),
  paddingRight: C.space("paddingRight"),
  paddingBottom: C.space("paddingBottom"),
  paddingBlockEnd: C.space("paddingBlockEnd"),
  paddingLeft: C.space("paddingLeft"),
  paddingInlineStart: C.space("paddingInlineStart"),
  paddingInlineEnd: C.space("paddingInlineEnd"),
  paddingX: C.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: C.space("paddingInline"),
  paddingY: C.space(["paddingTop", "paddingBottom"]),
  paddingBlock: C.space("paddingBlock")
};
Object.assign(ge, {
  m: ge.margin,
  mt: ge.marginTop,
  mr: ge.marginRight,
  me: ge.marginInlineEnd,
  marginEnd: ge.marginInlineEnd,
  mb: ge.marginBottom,
  ml: ge.marginLeft,
  ms: ge.marginInlineStart,
  marginStart: ge.marginInlineStart,
  mx: ge.marginX,
  my: ge.marginY,
  p: ge.padding,
  pt: ge.paddingTop,
  py: ge.paddingY,
  px: ge.paddingX,
  pb: ge.paddingBottom,
  pl: ge.paddingLeft,
  ps: ge.paddingInlineStart,
  paddingStart: ge.paddingInlineStart,
  pr: ge.paddingRight,
  pe: ge.paddingInlineEnd,
  paddingEnd: ge.paddingInlineEnd
});
var $P = {
  textDecorationColor: C.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: C.shadows("textShadow")
}, AP = {
  clipPath: !0,
  transform: C.propT("transform", X.transform),
  transformOrigin: !0,
  translateX: C.spaceT("--chakra-translate-x"),
  translateY: C.spaceT("--chakra-translate-y"),
  skewX: C.degreeT("--chakra-skew-x"),
  skewY: C.degreeT("--chakra-skew-y"),
  scaleX: C.prop("--chakra-scale-x"),
  scaleY: C.prop("--chakra-scale-y"),
  scale: C.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: C.degreeT("--chakra-rotate")
}, RP = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: C.prop("transitionDuration", "transition.duration"),
  transitionProperty: C.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: C.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, MP = {
  fontFamily: C.prop("fontFamily", "fonts"),
  fontSize: C.prop("fontSize", "fontSizes", X.px),
  fontWeight: C.prop("fontWeight", "fontWeights"),
  lineHeight: C.prop("lineHeight", "lineHeights"),
  letterSpacing: C.prop("letterSpacing", "letterSpacings"),
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
}, zP = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: C.spaceT("scrollMargin"),
  scrollMarginTop: C.spaceT("scrollMarginTop"),
  scrollMarginBottom: C.spaceT("scrollMarginBottom"),
  scrollMarginLeft: C.spaceT("scrollMarginLeft"),
  scrollMarginRight: C.spaceT("scrollMarginRight"),
  scrollMarginX: C.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: C.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: C.spaceT("scrollPadding"),
  scrollPaddingTop: C.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: C.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: C.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: C.spaceT("scrollPaddingRight"),
  scrollPaddingX: C.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: C.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function tS(e) {
  return Kt(e) && e.reference ? e.reference : String(e);
}
var Gu = (e, ...t) => t.map(tS).join(` ${e} `).replace(/calc/g, ""), Zv = (...e) => `calc(${Gu("+", ...e)})`, Jv = (...e) => `calc(${Gu("-", ...e)})`, Af = (...e) => `calc(${Gu("*", ...e)})`, eg = (...e) => `calc(${Gu("/", ...e)})`, tg = (e) => {
  const t = tS(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Af(t, -1);
}, zn = Object.assign(
  (e) => ({
    add: (...t) => zn(Zv(e, ...t)),
    subtract: (...t) => zn(Jv(e, ...t)),
    multiply: (...t) => zn(Af(e, ...t)),
    divide: (...t) => zn(eg(e, ...t)),
    negate: () => zn(tg(e)),
    toString: () => e.toString()
  }),
  {
    add: Zv,
    subtract: Jv,
    multiply: Af,
    divide: eg,
    negate: tg
  }
);
function IP(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function FP(e) {
  const t = IP(e.toString());
  return LP(DP(t));
}
function DP(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function LP(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function OP(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function NP(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function jP(e, t = "") {
  return FP(`--${OP(e, t)}`);
}
function O(e, t, r) {
  const n = jP(e, r);
  return {
    variable: n,
    reference: NP(n, t)
  };
}
function BP(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, i] = n;
      r[o] = O(`${e}-${o}`, i);
      continue;
    }
    r[n] = O(`${e}-${n}`);
  }
  return r;
}
function VP(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function WP(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Rf(e) {
  if (e == null)
    return e;
  const { unitless: t } = WP(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var rS = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, yp = (e) => Object.fromEntries(Object.entries(e).sort(rS));
function rg(e) {
  const t = yp(e);
  return Object.assign(Object.values(t), t);
}
function UP(e) {
  const t = Object.keys(yp(e));
  return new Set(t);
}
function ng(e) {
  var t;
  if (!e)
    return e;
  e = (t = Rf(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function ji(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Rf(e)})`), t && r.push("and", `(max-width: ${Rf(t)})`), r.join(" ");
}
function HP(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = rg(e), n = Object.entries(e).sort(rS).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? ng(d) : void 0, {
      _minW: ng(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: ji(null, d),
      minWQuery: ji(s),
      minMaxQuery: ji(s, d)
    };
  }), o = UP(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: yp(e),
    asArray: rg(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...r.map((a) => ji(a)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(a) {
      if (!Kt(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; VP(s) === null; )
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
var Ye = {
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
}, Ur = (e) => nS((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), kr = (e) => nS((t) => e(t, "~ &"), "[data-peer]", ".peer"), nS = (e, ...t) => t.map(e).join(", "), Ku = {
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
  _groupHover: Ur(Ye.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: kr(Ye.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: Ur(Ye.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: kr(Ye.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: Ur(Ye.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: kr(Ye.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: Ur(Ye.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: kr(Ye.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: Ur(Ye.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: kr(Ye.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: Ur(Ye.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: kr(Ye.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: Ur(Ye.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: kr(Ye.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: Ur(Ye.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: kr(Ye.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: kr(Ye.placeholderShown),
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
}, oS = Object.keys(
  Ku
);
function og(e, t) {
  return O(String(e).replace(/\./g, "-"), void 0, t);
}
function GP(e, t) {
  let r = {};
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = og(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...g] = f, y = `${p}.-${g.join(".")}`, x = zn.negate(s), m = zn.negate(u);
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
      const { reference: x } = og(g, t == null ? void 0 : t.cssVarPrefix);
      return x;
    }, d = Kt(s) ? s : { default: s };
    r = Ht(
      r,
      Object.entries(d).reduce(
        (f, [p, g]) => {
          var y, x;
          if (!g)
            return f;
          const m = c(`${g}`);
          if (p === "default")
            return f[l] = m, f;
          const h = (x = (y = Ku) == null ? void 0 : y[p]) != null ? x : p;
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
function KP(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function YP(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function XP(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function ig(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function i(a, s = []) {
    var l;
    if (XP(a) || Array.isArray(a)) {
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
var qP = [
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
function QP(e) {
  return YP(e, qP);
}
function ZP(e) {
  return e.semanticTokens;
}
function JP(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var eE = (e) => oS.includes(e) || e === "default";
function tE({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return ig(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), ig(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(eE)
    }
  ), r;
}
function rE(e) {
  var t;
  const r = JP(e), n = QP(r), o = ZP(r), i = tE({ tokens: n, semanticTokens: o }), a = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = GP(i, { cssVarPrefix: a });
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
    __breakpoints: HP(r.breakpoints)
  }), r;
}
var bp = Ht(
  {},
  dl,
  re,
  yP,
  Ql,
  Bt,
  bP,
  EP,
  SP,
  eS,
  PP,
  ra,
  $f,
  ge,
  zP,
  MP,
  $P,
  AP,
  xP,
  RP
);
Object.assign({}, ge, Bt, Ql, eS, ra);
var nE = [...Object.keys(bp), ...oS], oE = { ...bp, ...Ku }, iE = (e) => e in oE, aE = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = rn(e[a], t);
    if (s == null)
      continue;
    if (s = Kt(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
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
function sE(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (n = !0, r += i) : i === ")" ? (n = !1, r += i) : i === "," && !n ? (t.push(r), r = "") : r += i;
  }
  return r = r.trim(), r && t.push(r), t;
}
function lE(e) {
  return /^var\(--.+\)$/.test(e);
}
var uE = (e, t) => e.startsWith("--") && typeof t == "string" && !lE(t), cE = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = sE(t);
  return t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t), t;
};
function dE(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = rn(i, n), d = aE(c)(n);
    let f = {};
    for (let p in d) {
      const g = d[p];
      let y = rn(g, n);
      p in r && (p = r[p]), uE(p, y) && (y = cE(n, y));
      let x = t[p];
      if (x === !0 && (x = { property: p }), Kt(y)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = Ht(
          {},
          f[p],
          o(y, !0)
        );
        continue;
      }
      let m = (u = (l = x == null ? void 0 : x.transform) == null ? void 0 : l.call(x, y, n, c)) != null ? u : y;
      m = x != null && x.processResult ? o(m, !0) : m;
      const h = rn(x == null ? void 0 : x.property, n);
      if (!a && (x != null && x.static)) {
        const v = rn(x.static, n);
        f = Ht({}, f, v);
      }
      if (h && Array.isArray(h)) {
        for (const v of h)
          f[v] = m;
        continue;
      }
      if (h) {
        h === "&" && Kt(m) ? f = Ht({}, f, m) : f[h] = m;
        continue;
      }
      if (Kt(m)) {
        f = Ht({}, f, m);
        continue;
      }
      f[p] = m;
    }
    return f;
  };
  return o;
}
var iS = (e) => (t) => dE({
  theme: t,
  pseudos: Ku,
  configs: bp
})(e);
function pe(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function fE(e, t) {
  if (Array.isArray(e))
    return e;
  if (Kt(e))
    return t(e);
  if (e != null)
    return [e];
}
function hE(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function pE(e) {
  const t = e.__breakpoints;
  return function(n, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = fE(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!n.parts;
    for (let g = 0; g < d; g++) {
      const y = t.details[g], x = t.details[hE(c, g)], m = ji(y.minW, x == null ? void 0 : x._minW), h = rn((s = n[o]) == null ? void 0 : s[c[g]], a);
      if (h) {
        if (p) {
          (l = n.parts) == null || l.forEach((v) => {
            Ht(u, {
              [v]: f ? h[v] : { [m]: h[v] }
            });
          });
          continue;
        }
        if (!p) {
          f ? Ht(u, h) : u[m] = h;
          continue;
        }
        u[m] = h;
      }
    }
    return u;
  };
}
function mE(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: i } = t, a = pE(i);
    return Ht(
      {},
      rn((r = e.baseStyle) != null ? r : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", n, t)
    );
  };
}
function br(e) {
  return KP(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var vE = [
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
function gE(e) {
  return Kt(e) ? vE.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var yE = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, bE = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, SE = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, xE = {
  property: yE,
  easing: bE,
  duration: SE
}, wE = xE, kE = {
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
}, CE = kE, _E = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, TE = _E, PE = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, EE = PE, $E = {
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
}, AE = $E, RE = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, ME = RE, zE = {
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
}, IE = zE, FE = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, DE = FE, LE = {
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
}, aS = LE, sS = {
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
}, OE = {
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
}, NE = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, jE = {
  ...sS,
  ...OE,
  container: NE
}, lS = jE, BE = {
  breakpoints: EE,
  zIndices: CE,
  radii: ME,
  blur: DE,
  colors: AE,
  ...aS,
  sizes: lS,
  shadows: IE,
  space: sS,
  borders: TE,
  transition: wE
}, { defineMultiStyleConfig: VE, definePartsStyle: Bi } = pe([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Tr = O("stepper-indicator-size"), Eo = O("stepper-icon-size"), $o = O("stepper-title-font-size"), Vi = O("stepper-description-font-size"), Ai = O("stepper-accent-color"), WE = Bi(({ colorScheme: e }) => ({
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
    [Ai.variable]: `colors.${e}.500`,
    _dark: {
      [Ai.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: $o.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Vi.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: $o.reference
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
    width: Eo.reference,
    height: Eo.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Tr.reference,
    height: Tr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: Ai.reference
    },
    "&[data-status=complete]": {
      bg: Ai.reference,
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
      bg: Ai.reference
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
      maxHeight: `calc(100% - ${Tr.reference} - 8px)`,
      top: `calc(${Tr.reference} + 4px)`,
      insetStart: `calc(${Tr.reference} / 2 - 1px)`
    }
  }
})), UE = VE({
  baseStyle: WE,
  sizes: {
    xs: Bi({
      stepper: {
        [Tr.variable]: "sizes.4",
        [Eo.variable]: "sizes.3",
        [$o.variable]: "fontSizes.xs",
        [Vi.variable]: "fontSizes.xs"
      }
    }),
    sm: Bi({
      stepper: {
        [Tr.variable]: "sizes.6",
        [Eo.variable]: "sizes.4",
        [$o.variable]: "fontSizes.sm",
        [Vi.variable]: "fontSizes.xs"
      }
    }),
    md: Bi({
      stepper: {
        [Tr.variable]: "sizes.8",
        [Eo.variable]: "sizes.5",
        [$o.variable]: "fontSizes.md",
        [Vi.variable]: "fontSizes.sm"
      }
    }),
    lg: Bi({
      stepper: {
        [Tr.variable]: "sizes.10",
        [Eo.variable]: "sizes.6",
        [$o.variable]: "fontSizes.lg",
        [Vi.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function ae(e, t = {}) {
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
    return ae(e, t);
  }
  function i(...c) {
    for (const d of c)
      d in t || (t[d] = l(d));
    return ae(e, t);
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
var HE = ae("accordion").parts("root", "container", "button", "panel").extend("icon"), GE = ae("alert").parts("title", "description", "container").extend("icon", "spinner"), KE = ae("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), YE = ae("breadcrumb").parts("link", "item", "container").extend("separator");
ae("button").parts();
var XE = ae("checkbox").parts("control", "icon", "container").extend("label");
ae("progress").parts("track", "filledTrack").extend("label");
var qE = ae("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), QE = ae("editable").parts(
  "preview",
  "input",
  "textarea"
), ZE = ae("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), JE = ae("formError").parts("text", "icon"), e$ = ae("input").parts(
  "addon",
  "field",
  "element",
  "group"
), t$ = ae("list").parts("container", "item", "icon"), r$ = ae("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), n$ = ae("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), o$ = ae("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
ae("pininput").parts("field");
var i$ = ae("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), a$ = ae("progress").parts(
  "label",
  "filledTrack",
  "track"
), s$ = ae("radio").parts(
  "container",
  "control",
  "label"
), l$ = ae("select").parts("field", "icon"), u$ = ae("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), c$ = ae("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), d$ = ae("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), f$ = ae("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), h$ = ae("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), p$ = ae("tag").parts(
  "container",
  "label",
  "closeButton"
), m$ = ae("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
ae("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function On(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class v$ extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Wi = v$;
function Sp(e) {
  if (typeof e != "string")
    throw new Wi(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = C$.test(e) ? b$(e) : e;
  const r = S$.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(Ia(s, 2), 16)), parseInt(Ia(a[3] || "f", 2), 16) / 255];
  }
  const n = x$.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = w$.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = k$.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (On(0, 100, s) !== s)
      throw new Wi(e);
    if (On(0, 100, l) !== l)
      throw new Wi(e);
    return [..._$(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Wi(e);
}
function g$(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const ag = (e) => parseInt(e.replace(/_/g, ""), 36), y$ = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = ag(t.substring(0, 3)), n = ag(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - n.length; i++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function b$(e) {
  const t = e.toLowerCase().trim(), r = y$[g$(t)];
  if (!r)
    throw new Wi(e);
  return `#${r}`;
}
const Ia = (e, t) => Array.from(Array(t)).map(() => e).join(""), S$ = new RegExp(`^#${Ia("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), x$ = new RegExp(`^#${Ia("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), w$ = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Ia(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), k$ = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, C$ = /^[a-z]+$/i, sg = (e) => Math.round(e * 255), _$ = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(sg);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = n - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(sg);
};
function T$(e, t, r, n) {
  return `rgba(${On(0, 255, e).toFixed()}, ${On(0, 255, t).toFixed()}, ${On(0, 255, r).toFixed()}, ${parseFloat(On(0, 1, n).toFixed(3))})`;
}
function P$(e, t) {
  const [r, n, o, i] = Sp(e);
  return T$(r, n, o, i - t);
}
function E$(e) {
  const [t, r, n, o] = Sp(e);
  let i = (a) => {
    const s = On(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function $$(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var A$ = (e) => Object.keys(e).length === 0, lt = (e, t, r) => {
  const n = $$(e, `colors.${t}`, t);
  try {
    return E$(n), n;
  } catch {
    return r ?? "#000000";
  }
}, R$ = (e) => {
  const [t, r, n] = Sp(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, M$ = (e) => (t) => {
  const r = lt(t, e);
  return R$(r) < 128 ? "dark" : "light";
}, z$ = (e) => (t) => M$(e)(t) === "dark", si = (e, t) => (r) => {
  const n = lt(r, e);
  return P$(n, 1 - t);
};
function lg(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var I$ = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function F$(e) {
  const t = I$();
  return !e || A$(e) ? t : e.string && e.colors ? L$(e.string, e.colors) : e.string && !e.colors ? D$(e.string) : e.colors && !e.string ? O$(e.colors) : t;
}
function D$(e) {
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
function L$(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function O$(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function L(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function xp(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function uS(e) {
  return Kt(e) && e.reference ? e.reference : String(e);
}
var Yu = (e, ...t) => t.map(uS).join(` ${e} `).replace(/calc/g, ""), ug = (...e) => `calc(${Yu("+", ...e)})`, cg = (...e) => `calc(${Yu("-", ...e)})`, Mf = (...e) => `calc(${Yu("*", ...e)})`, dg = (...e) => `calc(${Yu("/", ...e)})`, fg = (e) => {
  const t = uS(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Mf(t, -1);
}, Pr = Object.assign(
  (e) => ({
    add: (...t) => Pr(ug(e, ...t)),
    subtract: (...t) => Pr(cg(e, ...t)),
    multiply: (...t) => Pr(Mf(e, ...t)),
    divide: (...t) => Pr(dg(e, ...t)),
    negate: () => Pr(fg(e)),
    toString: () => e.toString()
  }),
  {
    add: ug,
    subtract: cg,
    multiply: Mf,
    divide: dg,
    negate: fg
  }
);
function N$(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function j$(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function cS(e) {
  const t = j$(e.toString());
  return t.includes("\\.") ? e : N$(e) ? t.replace(".", "\\.") : e;
}
function B$(e, t = "") {
  return [t, cS(e)].filter(Boolean).join("-");
}
function V$(e, t) {
  return `var(${cS(e)}${t ? `, ${t}` : ""})`;
}
function W$(e, t = "") {
  return `--${B$(e, t)}`;
}
function We(e, t) {
  const r = W$(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: V$(r, U$(t == null ? void 0 : t.fallback))
  };
}
function U$(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: H$, definePartsStyle: fl } = pe(d$.keys), na = We("switch-track-width"), Wn = We("switch-track-height"), Kc = We("switch-track-diff"), G$ = Pr.subtract(na, Wn), zf = We("switch-thumb-x"), Ri = We("switch-bg"), K$ = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [na.reference],
    height: [Wn.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Ri.variable]: "colors.gray.300",
    _dark: {
      [Ri.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Ri.variable]: `colors.${t}.500`,
      _dark: {
        [Ri.variable]: `colors.${t}.200`
      }
    },
    bg: Ri.reference
  };
}, Y$ = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Wn.reference],
  height: [Wn.reference],
  _checked: {
    transform: `translateX(${zf.reference})`
  }
}, X$ = fl((e) => ({
  container: {
    [Kc.variable]: G$,
    [zf.variable]: Kc.reference,
    _rtl: {
      [zf.variable]: Pr(Kc).negate().toString()
    }
  },
  track: K$(e),
  thumb: Y$
})), q$ = {
  sm: fl({
    container: {
      [na.variable]: "1.375rem",
      [Wn.variable]: "sizes.3"
    }
  }),
  md: fl({
    container: {
      [na.variable]: "1.875rem",
      [Wn.variable]: "sizes.4"
    }
  }),
  lg: fl({
    container: {
      [na.variable]: "2.875rem",
      [Wn.variable]: "sizes.6"
    }
  })
}, Q$ = H$({
  baseStyle: X$,
  sizes: q$,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Z$, definePartsStyle: Go } = pe(f$.keys), J$ = Go({
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
}), Zl = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, e5 = Go((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: L("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: L(`${t}.100`, `${t}.700`)(e),
      ...Zl
    },
    td: {
      borderBottom: "1px",
      borderColor: L(`${t}.100`, `${t}.700`)(e),
      ...Zl
    },
    caption: {
      color: L("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), t5 = Go((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: L("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: L(`${t}.100`, `${t}.700`)(e),
      ...Zl
    },
    td: {
      borderBottom: "1px",
      borderColor: L(`${t}.100`, `${t}.700`)(e),
      ...Zl
    },
    caption: {
      color: L("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: L(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: L(`${t}.100`, `${t}.700`)(e)
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
}), r5 = {
  simple: e5,
  striped: t5,
  unstyled: {}
}, n5 = {
  sm: Go({
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
  md: Go({
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
  lg: Go({
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
}, o5 = Z$({
  baseStyle: J$,
  variants: r5,
  sizes: n5,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), mt = O("tabs-color"), tr = O("tabs-bg"), Ds = O("tabs-border-color"), { defineMultiStyleConfig: i5, definePartsStyle: gr } = pe(h$.keys), a5 = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, s5 = (e) => {
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
}, l5 = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, u5 = {
  p: 4
}, c5 = gr((e) => ({
  root: a5(e),
  tab: s5(e),
  tablist: l5(e),
  tabpanel: u5
})), d5 = {
  sm: gr({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: gr({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: gr({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, f5 = gr((e) => {
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
        [mt.variable]: `colors.${t}.600`,
        _dark: {
          [mt.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [tr.variable]: "colors.gray.200",
        _dark: {
          [tr.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: mt.reference,
      bg: tr.reference
    }
  };
}), h5 = gr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Ds.variable]: "transparent",
      _selected: {
        [mt.variable]: `colors.${t}.600`,
        [Ds.variable]: "colors.white",
        _dark: {
          [mt.variable]: `colors.${t}.300`,
          [Ds.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Ds.reference
      },
      color: mt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), p5 = gr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [tr.variable]: "colors.gray.50",
      _dark: {
        [tr.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [tr.variable]: "colors.white",
        [mt.variable]: `colors.${t}.600`,
        _dark: {
          [tr.variable]: "colors.gray.800",
          [mt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: mt.reference,
      bg: tr.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), m5 = gr((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: lt(r, `${t}.700`),
        bg: lt(r, `${t}.100`)
      }
    }
  };
}), v5 = gr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [mt.variable]: "colors.gray.600",
      _dark: {
        [mt.variable]: "inherit"
      },
      _selected: {
        [mt.variable]: "colors.white",
        [tr.variable]: `colors.${t}.600`,
        _dark: {
          [mt.variable]: "colors.gray.800",
          [tr.variable]: `colors.${t}.300`
        }
      },
      color: mt.reference,
      bg: tr.reference
    }
  };
}), g5 = gr({}), y5 = {
  line: f5,
  enclosed: h5,
  "enclosed-colored": p5,
  "soft-rounded": m5,
  "solid-rounded": v5,
  unstyled: g5
}, b5 = i5({
  baseStyle: c5,
  sizes: d5,
  variants: y5,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), De = BP("badge", ["bg", "color", "shadow"]), S5 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: De.bg.reference,
  color: De.color.reference,
  boxShadow: De.shadow.reference
}, x5 = (e) => {
  const { colorScheme: t, theme: r } = e, n = si(`${t}.500`, 0.6)(r);
  return {
    [De.bg.variable]: `colors.${t}.500`,
    [De.color.variable]: "colors.white",
    _dark: {
      [De.bg.variable]: n,
      [De.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, w5 = (e) => {
  const { colorScheme: t, theme: r } = e, n = si(`${t}.200`, 0.16)(r);
  return {
    [De.bg.variable]: `colors.${t}.100`,
    [De.color.variable]: `colors.${t}.800`,
    _dark: {
      [De.bg.variable]: n,
      [De.color.variable]: `colors.${t}.200`
    }
  };
}, k5 = (e) => {
  const { colorScheme: t, theme: r } = e, n = si(`${t}.200`, 0.8)(r);
  return {
    [De.color.variable]: `colors.${t}.500`,
    _dark: {
      [De.color.variable]: n
    },
    [De.shadow.variable]: `inset 0 0 0px 1px ${De.color.reference}`
  };
}, C5 = {
  solid: x5,
  subtle: w5,
  outline: k5
}, oa = {
  baseStyle: S5,
  variants: C5,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: _5, definePartsStyle: Un } = pe(p$.keys), hg = O("tag-bg"), pg = O("tag-color"), Yc = O("tag-shadow"), hl = O("tag-min-height"), pl = O("tag-min-width"), ml = O("tag-font-size"), vl = O("tag-padding-inline"), T5 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [pg.variable]: De.color.reference,
  [hg.variable]: De.bg.reference,
  [Yc.variable]: De.shadow.reference,
  color: pg.reference,
  bg: hg.reference,
  boxShadow: Yc.reference,
  borderRadius: "md",
  minH: hl.reference,
  minW: pl.reference,
  fontSize: ml.reference,
  px: vl.reference,
  _focusVisible: {
    [Yc.variable]: "shadows.outline"
  }
}, P5 = {
  lineHeight: 1.2,
  overflow: "visible"
}, E5 = {
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
}, $5 = Un({
  container: T5,
  label: P5,
  closeButton: E5
}), A5 = {
  sm: Un({
    container: {
      [hl.variable]: "sizes.5",
      [pl.variable]: "sizes.5",
      [ml.variable]: "fontSizes.xs",
      [vl.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Un({
    container: {
      [hl.variable]: "sizes.6",
      [pl.variable]: "sizes.6",
      [ml.variable]: "fontSizes.sm",
      [vl.variable]: "space.2"
    }
  }),
  lg: Un({
    container: {
      [hl.variable]: "sizes.8",
      [pl.variable]: "sizes.8",
      [ml.variable]: "fontSizes.md",
      [vl.variable]: "space.3"
    }
  })
}, R5 = {
  subtle: Un((e) => {
    var t;
    return {
      container: (t = oa.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: Un((e) => {
    var t;
    return {
      container: (t = oa.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: Un((e) => {
    var t;
    return {
      container: (t = oa.variants) == null ? void 0 : t.outline(e)
    };
  })
}, M5 = _5({
  variants: R5,
  baseStyle: $5,
  sizes: A5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Ar, defineMultiStyleConfig: z5 } = pe(e$.keys), Ao = O("input-height"), Ro = O("input-font-size"), Mo = O("input-padding"), zo = O("input-border-radius"), I5 = Ar({
  addon: {
    height: Ao.reference,
    fontSize: Ro.reference,
    px: Mo.reference,
    borderRadius: zo.reference
  },
  field: {
    width: "100%",
    height: Ao.reference,
    fontSize: Ro.reference,
    px: Mo.reference,
    borderRadius: zo.reference,
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
}), Hr = {
  lg: {
    [Ro.variable]: "fontSizes.lg",
    [Mo.variable]: "space.4",
    [zo.variable]: "radii.md",
    [Ao.variable]: "sizes.12"
  },
  md: {
    [Ro.variable]: "fontSizes.md",
    [Mo.variable]: "space.4",
    [zo.variable]: "radii.md",
    [Ao.variable]: "sizes.10"
  },
  sm: {
    [Ro.variable]: "fontSizes.sm",
    [Mo.variable]: "space.3",
    [zo.variable]: "radii.sm",
    [Ao.variable]: "sizes.8"
  },
  xs: {
    [Ro.variable]: "fontSizes.xs",
    [Mo.variable]: "space.2",
    [zo.variable]: "radii.sm",
    [Ao.variable]: "sizes.6"
  }
}, F5 = {
  lg: Ar({
    field: Hr.lg,
    group: Hr.lg
  }),
  md: Ar({
    field: Hr.md,
    group: Hr.md
  }),
  sm: Ar({
    field: Hr.sm,
    group: Hr.sm
  }),
  xs: Ar({
    field: Hr.xs,
    group: Hr.xs
  })
};
function wp(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || L("blue.500", "blue.300")(e),
    errorBorderColor: r || L("red.500", "red.300")(e)
  };
}
var D5 = Ar((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = wp(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: L("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: lt(t, n),
        boxShadow: `0 0 0 1px ${lt(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: lt(t, r),
        boxShadow: `0 0 0 1px ${lt(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: L("inherit", "whiteAlpha.50")(e),
      bg: L("gray.100", "whiteAlpha.300")(e)
    }
  };
}), L5 = Ar((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = wp(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: L("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: L("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: lt(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: lt(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: L("gray.100", "whiteAlpha.50")(e)
    }
  };
}), O5 = Ar((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = wp(e);
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
        borderColor: lt(t, n),
        boxShadow: `0px 1px 0px 0px ${lt(t, n)}`
      },
      _focusVisible: {
        borderColor: lt(t, r),
        boxShadow: `0px 1px 0px 0px ${lt(t, r)}`
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
}), N5 = Ar({
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
}), j5 = {
  outline: D5,
  filled: L5,
  flushed: O5,
  unstyled: N5
}, ie = z5({
  baseStyle: I5,
  sizes: F5,
  variants: j5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), mg, B5 = {
  ...(mg = ie.baseStyle) == null ? void 0 : mg.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, vg, gg, V5 = {
  outline: (e) => {
    var t, r;
    return (r = (t = ie.variants) == null ? void 0 : t.outline(e).field) != null ? r : {};
  },
  flushed: (e) => {
    var t, r;
    return (r = (t = ie.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {};
  },
  filled: (e) => {
    var t, r;
    return (r = (t = ie.variants) == null ? void 0 : t.filled(e).field) != null ? r : {};
  },
  unstyled: (gg = (vg = ie.variants) == null ? void 0 : vg.unstyled.field) != null ? gg : {}
}, yg, bg, Sg, xg, wg, kg, Cg, _g, W5 = {
  xs: (bg = (yg = ie.sizes) == null ? void 0 : yg.xs.field) != null ? bg : {},
  sm: (xg = (Sg = ie.sizes) == null ? void 0 : Sg.sm.field) != null ? xg : {},
  md: (kg = (wg = ie.sizes) == null ? void 0 : wg.md.field) != null ? kg : {},
  lg: (_g = (Cg = ie.sizes) == null ? void 0 : Cg.lg.field) != null ? _g : {}
}, U5 = {
  baseStyle: B5,
  sizes: W5,
  variants: V5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, Ls = We("tooltip-bg"), Xc = We("tooltip-fg"), H5 = We("popper-arrow-bg"), G5 = {
  bg: Ls.reference,
  color: Xc.reference,
  [Ls.variable]: "colors.gray.700",
  [Xc.variable]: "colors.whiteAlpha.900",
  _dark: {
    [Ls.variable]: "colors.gray.300",
    [Xc.variable]: "colors.gray.900"
  },
  [H5.variable]: Ls.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, K5 = {
  baseStyle: G5
}, { defineMultiStyleConfig: Y5, definePartsStyle: Ui } = pe(a$.keys), X5 = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, i = L(
    lg(),
    lg("1rem", "rgba(0,0,0,0.1)")
  )(e), a = L(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${lt(r, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && i,
    ...n ? { bgImage: s } : { bgColor: a }
  };
}, q5 = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, Q5 = (e) => ({
  bg: L("gray.100", "whiteAlpha.300")(e)
}), Z5 = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...X5(e)
}), J5 = Ui((e) => ({
  label: q5,
  filledTrack: Z5(e),
  track: Q5(e)
})), eA = {
  xs: Ui({
    track: { h: "1" }
  }),
  sm: Ui({
    track: { h: "2" }
  }),
  md: Ui({
    track: { h: "3" }
  }),
  lg: Ui({
    track: { h: "4" }
  })
}, tA = Y5({
  sizes: eA,
  baseStyle: J5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), rA = (e) => typeof e == "function";
function ct(e, ...t) {
  return rA(e) ? e(...t) : e;
}
var { definePartsStyle: gl, defineMultiStyleConfig: nA } = pe(XE.keys), ia = O("checkbox-size"), oA = (e) => {
  const { colorScheme: t } = e;
  return {
    w: ia.reference,
    h: ia.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: L(`${t}.500`, `${t}.200`)(e),
      borderColor: L(`${t}.500`, `${t}.200`)(e),
      color: L("white", "gray.900")(e),
      _hover: {
        bg: L(`${t}.600`, `${t}.300`)(e),
        borderColor: L(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: L("gray.200", "transparent")(e),
        bg: L("gray.200", "whiteAlpha.300")(e),
        color: L("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: L(`${t}.500`, `${t}.200`)(e),
      borderColor: L(`${t}.500`, `${t}.200`)(e),
      color: L("white", "gray.900")(e)
    },
    _disabled: {
      bg: L("gray.100", "whiteAlpha.100")(e),
      borderColor: L("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: L("red.500", "red.300")(e)
    }
  };
}, iA = {
  _disabled: { cursor: "not-allowed" }
}, aA = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, sA = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, lA = gl((e) => ({
  icon: sA,
  container: iA,
  control: ct(oA, e),
  label: aA
})), uA = {
  sm: gl({
    control: { [ia.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: gl({
    control: { [ia.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: gl({
    control: { [ia.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Jl = nA({
  baseStyle: lA,
  sizes: uA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: cA, definePartsStyle: yl } = pe(s$.keys), dA = (e) => {
  var t;
  const r = (t = ct(Jl.baseStyle, e)) == null ? void 0 : t.control;
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
}, fA = yl((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = Jl).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = Jl).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: dA(e)
  };
}), hA = {
  md: yl({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: yl({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: yl({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, pA = cA({
  baseStyle: fA,
  sizes: hA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: mA, definePartsStyle: vA } = pe(l$.keys), Os = O("select-bg"), Tg, gA = {
  ...(Tg = ie.baseStyle) == null ? void 0 : Tg.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: Os.reference,
  [Os.variable]: "colors.white",
  _dark: {
    [Os.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: Os.reference
  }
}, yA = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, bA = vA({
  field: gA,
  icon: yA
}), Ns = {
  paddingInlineEnd: "8"
}, Pg, Eg, $g, Ag, Rg, Mg, zg, Ig, SA = {
  lg: {
    ...(Pg = ie.sizes) == null ? void 0 : Pg.lg,
    field: {
      ...(Eg = ie.sizes) == null ? void 0 : Eg.lg.field,
      ...Ns
    }
  },
  md: {
    ...($g = ie.sizes) == null ? void 0 : $g.md,
    field: {
      ...(Ag = ie.sizes) == null ? void 0 : Ag.md.field,
      ...Ns
    }
  },
  sm: {
    ...(Rg = ie.sizes) == null ? void 0 : Rg.sm,
    field: {
      ...(Mg = ie.sizes) == null ? void 0 : Mg.sm.field,
      ...Ns
    }
  },
  xs: {
    ...(zg = ie.sizes) == null ? void 0 : zg.xs,
    field: {
      ...(Ig = ie.sizes) == null ? void 0 : Ig.xs.field,
      ...Ns
    },
    icon: {
      insetEnd: "1"
    }
  }
}, xA = mA({
  baseStyle: bA,
  sizes: SA,
  variants: ie.variants,
  defaultProps: ie.defaultProps
}), qc = O("skeleton-start-color"), Qc = O("skeleton-end-color"), wA = {
  [qc.variable]: "colors.gray.100",
  [Qc.variable]: "colors.gray.400",
  _dark: {
    [qc.variable]: "colors.gray.800",
    [Qc.variable]: "colors.gray.600"
  },
  background: qc.reference,
  borderColor: Qc.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, kA = {
  baseStyle: wA
}, Zc = O("skip-link-bg"), CA = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Zc.variable]: "colors.white",
    _dark: {
      [Zc.variable]: "colors.gray.700"
    },
    bg: Zc.reference
  }
}, _A = {
  baseStyle: CA
}, { defineMultiStyleConfig: TA, definePartsStyle: Xu } = pe(u$.keys), Fa = O("slider-thumb-size"), Da = O("slider-track-size"), Jr = O("slider-bg"), PA = (e) => {
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
    ...xp({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, EA = (e) => ({
  ...xp({
    orientation: e.orientation,
    horizontal: { h: Da.reference },
    vertical: { w: Da.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [Jr.variable]: "colors.gray.200",
  _dark: {
    [Jr.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [Jr.variable]: "colors.gray.300",
    _dark: {
      [Jr.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: Jr.reference
}), $A = (e) => {
  const { orientation: t } = e;
  return {
    ...xp({
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
    w: Fa.reference,
    h: Fa.reference,
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
}, AA = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [Jr.variable]: `colors.${t}.500`,
    _dark: {
      [Jr.variable]: `colors.${t}.200`
    },
    bg: Jr.reference
  };
}, RA = Xu((e) => ({
  container: PA(e),
  track: EA(e),
  thumb: $A(e),
  filledTrack: AA(e)
})), MA = Xu({
  container: {
    [Fa.variable]: "sizes.4",
    [Da.variable]: "sizes.1"
  }
}), zA = Xu({
  container: {
    [Fa.variable]: "sizes.3.5",
    [Da.variable]: "sizes.1"
  }
}), IA = Xu({
  container: {
    [Fa.variable]: "sizes.2.5",
    [Da.variable]: "sizes.0.5"
  }
}), FA = {
  lg: MA,
  md: zA,
  sm: IA
}, DA = TA({
  baseStyle: RA,
  sizes: FA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), In = We("spinner-size"), LA = {
  width: [In.reference],
  height: [In.reference]
}, OA = {
  xs: {
    [In.variable]: "sizes.3"
  },
  sm: {
    [In.variable]: "sizes.4"
  },
  md: {
    [In.variable]: "sizes.6"
  },
  lg: {
    [In.variable]: "sizes.8"
  },
  xl: {
    [In.variable]: "sizes.12"
  }
}, NA = {
  baseStyle: LA,
  sizes: OA,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: jA, definePartsStyle: dS } = pe(c$.keys), BA = {
  fontWeight: "medium"
}, VA = {
  opacity: 0.8,
  marginBottom: "2"
}, WA = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, UA = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, HA = dS({
  container: {},
  label: BA,
  helpText: VA,
  number: WA,
  icon: UA
}), GA = {
  md: dS({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, KA = jA({
  baseStyle: HA,
  sizes: GA,
  defaultProps: {
    size: "md"
  }
}), Jc = O("kbd-bg"), YA = {
  [Jc.variable]: "colors.gray.100",
  _dark: {
    [Jc.variable]: "colors.whiteAlpha.100"
  },
  bg: Jc.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, XA = {
  baseStyle: YA
}, qA = {
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
}, QA = {
  baseStyle: qA
}, { defineMultiStyleConfig: ZA, definePartsStyle: JA } = pe(t$.keys), eR = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, tR = JA({
  icon: eR
}), rR = ZA({
  baseStyle: tR
}), { defineMultiStyleConfig: nR, definePartsStyle: oR } = pe(r$.keys), ur = O("menu-bg"), ed = O("menu-shadow"), iR = {
  [ur.variable]: "#fff",
  [ed.variable]: "shadows.sm",
  _dark: {
    [ur.variable]: "colors.gray.700",
    [ed.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: ur.reference,
  boxShadow: ed.reference
}, aR = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [ur.variable]: "colors.gray.100",
    _dark: {
      [ur.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [ur.variable]: "colors.gray.200",
    _dark: {
      [ur.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [ur.variable]: "colors.gray.100",
    _dark: {
      [ur.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: ur.reference
}, sR = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, lR = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, uR = {
  opacity: 0.6
}, cR = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, dR = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, fR = oR({
  button: dR,
  list: iR,
  item: aR,
  groupTitle: sR,
  icon: lR,
  command: uR,
  divider: cR
}), hR = nR({
  baseStyle: fR
}), { defineMultiStyleConfig: pR, definePartsStyle: If } = pe(n$.keys), td = O("modal-bg"), rd = O("modal-shadow"), mR = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, vR = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, gR = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [td.variable]: "colors.white",
    [rd.variable]: "shadows.lg",
    _dark: {
      [td.variable]: "colors.gray.700",
      [rd.variable]: "shadows.dark-lg"
    },
    bg: td.reference,
    boxShadow: rd.reference
  };
}, yR = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, bR = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, SR = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, xR = {
  px: "6",
  py: "4"
}, wR = If((e) => ({
  overlay: mR,
  dialogContainer: ct(vR, e),
  dialog: ct(gR, e),
  header: yR,
  closeButton: bR,
  body: ct(SR, e),
  footer: xR
}));
function Qt(e) {
  return If(e === "full" ? {
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
var kR = {
  xs: Qt("xs"),
  sm: Qt("sm"),
  md: Qt("md"),
  lg: Qt("lg"),
  xl: Qt("xl"),
  "2xl": Qt("2xl"),
  "3xl": Qt("3xl"),
  "4xl": Qt("4xl"),
  "5xl": Qt("5xl"),
  "6xl": Qt("6xl"),
  full: Qt("full")
}, CR = pR({
  baseStyle: wR,
  sizes: kR,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: _R, definePartsStyle: fS } = pe(o$.keys), kp = We("number-input-stepper-width"), hS = We("number-input-input-padding"), TR = Pr(kp).add("0.5rem").toString(), nd = We("number-input-bg"), od = We("number-input-color"), id = We("number-input-border-color"), PR = {
  [kp.variable]: "sizes.6",
  [hS.variable]: TR
}, ER = (e) => {
  var t, r;
  return (r = (t = ct(ie.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, $R = {
  width: kp.reference
}, AR = {
  borderStart: "1px solid",
  borderStartColor: id.reference,
  color: od.reference,
  bg: nd.reference,
  [od.variable]: "colors.chakra-body-text",
  [id.variable]: "colors.chakra-border-color",
  _dark: {
    [od.variable]: "colors.whiteAlpha.800",
    [id.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [nd.variable]: "colors.gray.200",
    _dark: {
      [nd.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, RR = fS((e) => {
  var t;
  return {
    root: PR,
    field: (t = ct(ER, e)) != null ? t : {},
    stepperGroup: $R,
    stepper: AR
  };
});
function js(e) {
  var t, r, n;
  const o = (t = ie.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = aS.fontSizes[a];
  return fS({
    field: {
      ...o.field,
      paddingInlineEnd: hS.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Pr(s).multiply(0.75).toString(),
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
var MR = {
  xs: js("xs"),
  sm: js("sm"),
  md: js("md"),
  lg: js("lg")
}, zR = _R({
  baseStyle: RR,
  sizes: MR,
  variants: ie.variants,
  defaultProps: ie.defaultProps
}), Fg, IR = {
  ...(Fg = ie.baseStyle) == null ? void 0 : Fg.field,
  textAlign: "center"
}, FR = {
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
}, Dg, Lg, DR = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = ct((t = ie.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = ct((t = ie.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = ct((t = ie.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (Lg = (Dg = ie.variants) == null ? void 0 : Dg.unstyled.field) != null ? Lg : {}
}, LR = {
  baseStyle: IR,
  sizes: FR,
  variants: DR,
  defaultProps: ie.defaultProps
}, { defineMultiStyleConfig: OR, definePartsStyle: NR } = pe(i$.keys), Bs = We("popper-bg"), jR = We("popper-arrow-bg"), Og = We("popper-arrow-shadow-color"), BR = { zIndex: 10 }, VR = {
  [Bs.variable]: "colors.white",
  bg: Bs.reference,
  [jR.variable]: Bs.reference,
  [Og.variable]: "colors.gray.200",
  _dark: {
    [Bs.variable]: "colors.gray.700",
    [Og.variable]: "colors.whiteAlpha.300"
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
}, WR = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, UR = {
  px: 3,
  py: 2
}, HR = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, GR = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, KR = NR({
  popper: BR,
  content: VR,
  header: WR,
  body: UR,
  footer: HR,
  closeButton: GR
}), YR = OR({
  baseStyle: KR
}), { definePartsStyle: Ff, defineMultiStyleConfig: XR } = pe(qE.keys), ad = O("drawer-bg"), sd = O("drawer-box-shadow");
function co(e) {
  return Ff(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var qR = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, QR = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, ZR = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [ad.variable]: "colors.white",
    [sd.variable]: "shadows.lg",
    _dark: {
      [ad.variable]: "colors.gray.700",
      [sd.variable]: "shadows.dark-lg"
    },
    bg: ad.reference,
    boxShadow: sd.reference
  };
}, JR = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, eM = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, tM = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, rM = {
  px: "6",
  py: "4"
}, nM = Ff((e) => ({
  overlay: qR,
  dialogContainer: QR,
  dialog: ct(ZR, e),
  header: JR,
  closeButton: eM,
  body: tM,
  footer: rM
})), oM = {
  xs: co("xs"),
  sm: co("md"),
  md: co("lg"),
  lg: co("2xl"),
  xl: co("4xl"),
  full: co("full")
}, iM = XR({
  baseStyle: nM,
  sizes: oM,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: aM, defineMultiStyleConfig: sM } = pe(QE.keys), lM = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, uM = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, cM = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, dM = aM({
  preview: lM,
  input: uM,
  textarea: cM
}), fM = sM({
  baseStyle: dM
}), { definePartsStyle: hM, defineMultiStyleConfig: pM } = pe(ZE.keys), Ko = O("form-control-color"), mM = {
  marginStart: "1",
  [Ko.variable]: "colors.red.500",
  _dark: {
    [Ko.variable]: "colors.red.300"
  },
  color: Ko.reference
}, vM = {
  mt: "2",
  [Ko.variable]: "colors.gray.600",
  _dark: {
    [Ko.variable]: "colors.whiteAlpha.600"
  },
  color: Ko.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, gM = hM({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: mM,
  helperText: vM
}), yM = pM({
  baseStyle: gM
}), { definePartsStyle: bM, defineMultiStyleConfig: SM } = pe(JE.keys), Yo = O("form-error-color"), xM = {
  [Yo.variable]: "colors.red.500",
  _dark: {
    [Yo.variable]: "colors.red.300"
  },
  color: Yo.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, wM = {
  marginEnd: "0.5em",
  [Yo.variable]: "colors.red.500",
  _dark: {
    [Yo.variable]: "colors.red.300"
  },
  color: Yo.reference
}, kM = bM({
  text: xM,
  icon: wM
}), CM = SM({
  baseStyle: kM
}), _M = {
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
}, TM = {
  baseStyle: _M
}, PM = {
  fontFamily: "heading",
  fontWeight: "bold"
}, EM = {
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
}, $M = {
  baseStyle: PM,
  sizes: EM,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: AM, definePartsStyle: RM } = pe(YE.keys), ld = O("breadcrumb-link-decor"), MM = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: ld.reference,
  [ld.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [ld.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, zM = RM({
  link: MM
}), IM = AM({
  baseStyle: zM
}), FM = {
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
}, pS = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: L("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: L("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: L("gray.200", "whiteAlpha.300")(e) }
    };
  const n = si(`${t}.200`, 0.12)(r), o = si(`${t}.200`, 0.24)(r);
  return {
    color: L(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: L(`${t}.50`, n)(e)
    },
    _active: {
      bg: L(`${t}.100`, o)(e)
    }
  };
}, DM = (e) => {
  const { colorScheme: t } = e, r = L("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...ct(pS, e)
  };
}, LM = {
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
}, OM = (e) => {
  var t;
  const { colorScheme: r } = e;
  if (r === "gray") {
    const l = L("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: L("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: L("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: L("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: n = `${r}.500`,
    color: o = "white",
    hoverBg: i = `${r}.600`,
    activeBg: a = `${r}.700`
  } = (t = LM[r]) != null ? t : {}, s = L(n, `${r}.200`)(e);
  return {
    bg: s,
    color: L(o, "gray.800")(e),
    _hover: {
      bg: L(i, `${r}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: L(a, `${r}.400`)(e) }
  };
}, NM = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: L(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: L(`${t}.700`, `${t}.500`)(e)
    }
  };
}, jM = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, BM = {
  ghost: pS,
  outline: DM,
  solid: OM,
  link: NM,
  unstyled: jM
}, VM = {
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
}, WM = {
  baseStyle: FM,
  variants: BM,
  sizes: VM,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Hn, defineMultiStyleConfig: UM } = pe(m$.keys), eu = O("card-bg"), zr = O("card-padding"), mS = O("card-shadow"), bl = O("card-radius"), vS = O("card-border-width", "0"), gS = O("card-border-color"), HM = Hn({
  container: {
    [eu.variable]: "colors.chakra-body-bg",
    backgroundColor: eu.reference,
    boxShadow: mS.reference,
    borderRadius: bl.reference,
    color: "chakra-body-text",
    borderWidth: vS.reference,
    borderColor: gS.reference
  },
  body: {
    padding: zr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: zr.reference
  },
  footer: {
    padding: zr.reference
  }
}), GM = {
  sm: Hn({
    container: {
      [bl.variable]: "radii.base",
      [zr.variable]: "space.3"
    }
  }),
  md: Hn({
    container: {
      [bl.variable]: "radii.md",
      [zr.variable]: "space.5"
    }
  }),
  lg: Hn({
    container: {
      [bl.variable]: "radii.xl",
      [zr.variable]: "space.7"
    }
  })
}, KM = {
  elevated: Hn({
    container: {
      [mS.variable]: "shadows.base",
      _dark: {
        [eu.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Hn({
    container: {
      [vS.variable]: "1px",
      [gS.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Hn({
    container: {
      [eu.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [zr.variable]: 0
    },
    header: {
      [zr.variable]: 0
    },
    footer: {
      [zr.variable]: 0
    }
  }
}, YM = UM({
  baseStyle: HM,
  variants: KM,
  sizes: GM,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), aa = We("close-button-size"), Mi = We("close-button-bg"), XM = {
  w: [aa.reference],
  h: [aa.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Mi.variable]: "colors.blackAlpha.100",
    _dark: {
      [Mi.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Mi.variable]: "colors.blackAlpha.200",
    _dark: {
      [Mi.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Mi.reference
}, qM = {
  lg: {
    [aa.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [aa.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [aa.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, QM = {
  baseStyle: XM,
  sizes: qM,
  defaultProps: {
    size: "md"
  }
}, { variants: ZM, defaultProps: JM } = oa, ez = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: De.bg.reference,
  color: De.color.reference,
  boxShadow: De.shadow.reference
}, tz = {
  baseStyle: ez,
  variants: ZM,
  defaultProps: JM
}, rz = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, nz = {
  baseStyle: rz
}, oz = {
  opacity: 0.6,
  borderColor: "inherit"
}, iz = {
  borderStyle: "solid"
}, az = {
  borderStyle: "dashed"
}, sz = {
  solid: iz,
  dashed: az
}, lz = {
  baseStyle: oz,
  variants: sz,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: uz, defineMultiStyleConfig: cz } = pe(HE.keys), dz = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, fz = {
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
}, hz = {
  pt: "2",
  px: "4",
  pb: "5"
}, pz = {
  fontSize: "1.25em"
}, mz = uz({
  container: dz,
  button: fz,
  panel: hz,
  icon: pz
}), vz = cz({ baseStyle: mz }), { definePartsStyle: Za, defineMultiStyleConfig: gz } = pe(GE.keys), $t = O("alert-fg"), jr = O("alert-bg"), yz = Za({
  container: {
    bg: jr.reference,
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
    color: $t.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: $t.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Cp(e) {
  const { theme: t, colorScheme: r } = e, n = si(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var bz = Za((e) => {
  const { colorScheme: t } = e, r = Cp(e);
  return {
    container: {
      [$t.variable]: `colors.${t}.600`,
      [jr.variable]: r.light,
      _dark: {
        [$t.variable]: `colors.${t}.200`,
        [jr.variable]: r.dark
      }
    }
  };
}), Sz = Za((e) => {
  const { colorScheme: t } = e, r = Cp(e);
  return {
    container: {
      [$t.variable]: `colors.${t}.600`,
      [jr.variable]: r.light,
      _dark: {
        [$t.variable]: `colors.${t}.200`,
        [jr.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: $t.reference
    }
  };
}), xz = Za((e) => {
  const { colorScheme: t } = e, r = Cp(e);
  return {
    container: {
      [$t.variable]: `colors.${t}.600`,
      [jr.variable]: r.light,
      _dark: {
        [$t.variable]: `colors.${t}.200`,
        [jr.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: $t.reference
    }
  };
}), wz = Za((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [$t.variable]: "colors.white",
      [jr.variable]: `colors.${t}.600`,
      _dark: {
        [$t.variable]: "colors.gray.900",
        [jr.variable]: `colors.${t}.200`
      },
      color: $t.reference
    }
  };
}), kz = {
  subtle: bz,
  "left-accent": Sz,
  "top-accent": xz,
  solid: wz
}, Cz = gz({
  baseStyle: yz,
  variants: kz,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: yS, defineMultiStyleConfig: _z } = pe(KE.keys), Xo = O("avatar-border-color"), sa = O("avatar-bg"), La = O("avatar-font-size"), li = O("avatar-size"), Tz = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Xo.reference,
  [Xo.variable]: "white",
  _dark: {
    [Xo.variable]: "colors.gray.800"
  }
}, Pz = {
  bg: sa.reference,
  fontSize: La.reference,
  width: li.reference,
  height: li.reference,
  lineHeight: "1",
  [sa.variable]: "colors.gray.200",
  _dark: {
    [sa.variable]: "colors.whiteAlpha.400"
  }
}, Ez = (e) => {
  const { name: t, theme: r } = e, n = t ? F$({ string: t }) : "colors.gray.400", o = z$(n)(r);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: sa.reference,
    fontSize: La.reference,
    color: i,
    borderColor: Xo.reference,
    verticalAlign: "top",
    width: li.reference,
    height: li.reference,
    "&:not([data-loaded])": {
      [sa.variable]: n
    },
    [Xo.variable]: "colors.white",
    _dark: {
      [Xo.variable]: "colors.gray.800"
    }
  };
}, $z = {
  fontSize: La.reference,
  lineHeight: "1"
}, Az = yS((e) => ({
  badge: ct(Tz, e),
  excessLabel: ct(Pz, e),
  container: ct(Ez, e),
  label: $z
}));
function Gr(e) {
  const t = e !== "100%" ? lS[e] : void 0;
  return yS({
    container: {
      [li.variable]: t ?? e,
      [La.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [li.variable]: t ?? e,
      [La.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var Rz = {
  "2xs": Gr(4),
  xs: Gr(6),
  sm: Gr(8),
  md: Gr(12),
  lg: Gr(16),
  xl: Gr(24),
  "2xl": Gr(32),
  full: Gr("100%")
}, Mz = _z({
  baseStyle: Az,
  sizes: Rz,
  defaultProps: {
    size: "md"
  }
}), zz = {
  Accordion: vz,
  Alert: Cz,
  Avatar: Mz,
  Badge: oa,
  Breadcrumb: IM,
  Button: WM,
  Checkbox: Jl,
  CloseButton: QM,
  Code: tz,
  Container: nz,
  Divider: lz,
  Drawer: iM,
  Editable: fM,
  Form: yM,
  FormError: CM,
  FormLabel: TM,
  Heading: $M,
  Input: ie,
  Kbd: XA,
  Link: QA,
  List: rR,
  Menu: hR,
  Modal: CR,
  NumberInput: zR,
  PinInput: LR,
  Popover: YR,
  Progress: tA,
  Radio: pA,
  Select: xA,
  Skeleton: kA,
  SkipLink: _A,
  Slider: DA,
  Spinner: NA,
  Stat: KA,
  Switch: Q$,
  Table: o5,
  Tabs: b5,
  Tag: M5,
  Textarea: U5,
  Tooltip: K5,
  Card: YM,
  Stepper: UE
}, Iz = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, Fz = {
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
}, Dz = "ltr", Lz = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, bS = {
  semanticTokens: Iz,
  direction: Dz,
  ...BE,
  components: zz,
  styles: Fz,
  config: Lz
};
function Hi(e) {
  return typeof e == "function";
}
function Oz(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var Nz = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return gE(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, Oz(
    ...n.map(
      (i) => (a) => Hi(i) ? i(a) : Bz(a, i)
    )
  )(o);
}, jz = Nz(bS);
function Bz(...e) {
  return Ht({}, ...e, SS);
}
function SS(e, t, r, n) {
  if ((Hi(e) || Hi(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = Hi(e) ? e(...o) : e, a = Hi(t) ? t(...o) : t;
      return Ht({}, i, a, SS);
    };
}
function Vz(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function Wz(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var Uz = (e) => {
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
}, xS = Uz(Wz);
function wS(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var kS = (e) => wS(e, (t) => t != null);
function Hz(e) {
  return typeof e == "function";
}
function CS(e, ...t) {
  return Hz(e) ? e(...t) : e;
}
var Gz = typeof Element < "u", Kz = typeof Map == "function", Yz = typeof Set == "function", Xz = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Sl(e, t) {
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
        if (!Sl(e[n], t[n]))
          return !1;
      return !0;
    }
    var i;
    if (Kz && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!Sl(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Yz && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Xz && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Gz && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !Sl(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var qz = function(t, r) {
  try {
    return Sl(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const Qz = /* @__PURE__ */ dh(qz);
function _S(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: i, colorMode: a } = ZT(), s = e ? xS(i, `components.${e}`) : void 0, l = n || s, u = Ht(
    { theme: i, colorMode: a },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    kS(Vz(o, ["children"]))
  ), c = b.useRef({});
  if (l) {
    const f = mE(l)(u);
    Qz(c.current, f) || (c.current = f);
  }
  return c.current;
}
function mi(e, t = {}) {
  return _S(e, t);
}
function vi(e, t = {}) {
  return _S(e, t);
}
var Zz = /* @__PURE__ */ new Set([
  ...nE,
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
]), Jz = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function e3(e) {
  return Jz.has(e) || !Zz.has(e);
}
function t3(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
function r3(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
var n3 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, o3 = /* @__PURE__ */ Fb(
  function(e) {
    return n3.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), i3 = o3, a3 = function(t) {
  return t !== "theme";
}, Ng = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? i3 : a3;
}, jg = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, s3 = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Bb(r, n, o), $T(function() {
    return Vb(r, n, o);
  }), null;
}, l3 = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = jg(t, r, n), l = s || Ng(o), u = !l("as");
  return function() {
    var c = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var g = Gb(function(y, x, m) {
      var h = u && y.as || o, v = "", w = [], T = y;
      if (y.theme == null) {
        T = {};
        for (var A in y)
          T[A] = y[A];
        T.theme = b.useContext(za);
      }
      typeof y.className == "string" ? v = wT(x.registered, w, y.className) : y.className != null && (v = y.className + " ");
      var P = hp(d.concat(w), x.registered, T);
      v += x.key + "-" + P.name, a !== void 0 && (v += " " + a);
      var $ = u && s === void 0 ? Ng(h) : l, M = {};
      for (var I in y)
        u && I === "as" || // $FlowFixMe
        $(I) && (M[I] = y[I]);
      return M.className = v, M.ref = m, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(s3, {
        cache: x,
        serialized: P,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ b.createElement(h, M));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = s, Object.defineProperty(g, "toString", {
      value: function() {
        return "." + a;
      }
    }), g.withComponent = function(y, x) {
      return e(y, Jn({}, r, x, {
        shouldForwardProp: jg(g, x, !0)
      })).apply(void 0, d);
    }, g;
  };
}, u3 = [
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
], tu = l3.bind();
u3.forEach(function(e) {
  tu[e] = tu(e);
});
var Bg, c3 = (Bg = tu.default) != null ? Bg : tu, d3 = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: i, ...a } = t, s = wS(a, (d, f) => iE(f)), l = CS(e, t), u = t3(
    {},
    o,
    l,
    kS(s),
    i
  ), c = iS(u)(t.theme);
  return n ? [c, n] : c;
};
function ud(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = e3);
  const o = d3({ baseStyle: r }), i = c3(
    e,
    n
  )(o);
  return Kn.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = vp();
    return Kn.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function f3() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(ud, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, r, n) {
      return ud(...n);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, ud(r)), e.get(r);
    }
  });
}
var G = f3();
function Ce(e) {
  return b.forwardRef(e);
}
function h3(e = {}) {
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
function p3(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, o = b.useMemo(() => rE(r), [r]);
  return /* @__PURE__ */ _.jsxs(MT, { theme: o, children: [
    /* @__PURE__ */ _.jsx(m3, { root: t }),
    n
  ] });
}
function m3({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ _.jsx(Uu, { styles: (r) => ({ [t]: r.__cssVars }) });
}
h3({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function v3() {
  const { colorMode: e } = vp();
  return /* @__PURE__ */ _.jsx(
    Uu,
    {
      styles: (t) => {
        const r = xS(t, "styles.global"), n = CS(r, { theme: t, colorMode: e });
        return n ? iS(n)(t) : void 0;
      }
    }
  );
}
var TS = b.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
TS.displayName = "EnvironmentContext";
function PS(e) {
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
  return /* @__PURE__ */ _.jsxs(TS.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ _.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
PS.displayName = "EnvironmentProvider";
var g3 = (e) => {
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
  } = e, d = /* @__PURE__ */ _.jsx(
    PS,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ _.jsx(p3, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ _.jsxs(
    Zb,
    {
      colorModeManager: r,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ _.jsx(FT, { scope: o }) : /* @__PURE__ */ _.jsx(IT, {}),
        !c && /* @__PURE__ */ _.jsx(v3, {}),
        n ? /* @__PURE__ */ _.jsx(Xb, { zIndex: n, children: d }) : d
      ]
    }
  ) });
}, y3 = (e, t) => e.find((r) => r.id === t);
function Vg(e, t) {
  const r = ES(e, t), n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function ES(e, t) {
  for (const [r, n] of Object.entries(e))
    if (y3(n, t))
      return r;
}
function b3(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function S3(e) {
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
function Gn(e, t = []) {
  const r = b.useRef(e);
  return b.useEffect(() => {
    r.current = e;
  }), b.useCallback((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function x3(e, t) {
  const r = Gn(e);
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
function Df(e, t) {
  const r = b.useRef(!1), n = b.useRef(!1);
  b.useEffect(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), b.useEffect(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const $S = b.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), qu = b.createContext({}), Ja = b.createContext(null), Qu = typeof document < "u", _p = Qu ? b.useLayoutEffect : b.useEffect, AS = b.createContext({ strict: !1 });
function w3(e, t, r, n) {
  const { visualElement: o } = b.useContext(qu), i = b.useContext(AS), a = b.useContext(Ja), s = b.useContext($S).reducedMotion, l = b.useRef();
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
  const c = b.useRef(!!window.HandoffAppearAnimations);
  return _p(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), b.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), window.HandoffAppearAnimations = !1, c.current = !1);
  }), u;
}
function Io(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function k3(e, t, r) {
  return b.useCallback(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : Io(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Oa(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Zu(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Tp = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Pp = ["initial", ...Tp];
function Ju(e) {
  return Zu(e.animate) || Pp.some((t) => Oa(e[t]));
}
function RS(e) {
  return !!(Ju(e) || e.variants);
}
function C3(e, t) {
  if (Ju(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || Oa(r) ? r : void 0,
      animate: Oa(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function _3(e) {
  const { initial: t, animate: r } = C3(e, b.useContext(qu));
  return b.useMemo(() => ({ initial: t, animate: r }), [Wg(t), Wg(r)]);
}
function Wg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ug = {
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
}, Na = {};
for (const e in Ug)
  Na[e] = {
    isEnabled: (t) => Ug[e].some((r) => !!t[r])
  };
function T3(e) {
  for (const t in e)
    Na[t] = {
      ...Na[t],
      ...e[t]
    };
}
const Ep = b.createContext({}), MS = b.createContext({}), P3 = Symbol.for("motionComponentSymbol");
function E3({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && T3(e);
  function i(s, l) {
    let u;
    const c = {
      ...b.useContext($S),
      ...s,
      layoutId: $3(s)
    }, { isStatic: d } = c, f = _3(s), p = n(s, d);
    if (!d && Qu) {
      f.visualElement = w3(o, p, c, t);
      const g = b.useContext(MS), y = b.useContext(AS).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        y,
        e,
        g
      ));
    }
    return b.createElement(
      qu.Provider,
      { value: f },
      u && f.visualElement ? b.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      r(o, s, k3(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = b.forwardRef(i);
  return a[P3] = o, a;
}
function $3({ layoutId: e }) {
  const t = b.useContext(Ep).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function A3(e) {
  function t(n, o = {}) {
    return E3(e(n, o));
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
const R3 = [
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
function $p(e) {
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
      !!(R3.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const ru = {};
function M3(e) {
  Object.assign(ru, e);
}
const es = [
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
], no = new Set(es);
function zS(e, { layout: t, layoutId: r }) {
  return no.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!ru[e] || e === "opacity");
}
const xt = (e) => !!(e && e.getVelocity), z3 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, I3 = es.length;
function F3(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = "";
  for (let a = 0; a < I3; a++) {
    const s = es[a];
    if (e[s] !== void 0) {
      const l = z3[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, n ? "" : i) : r && n && (i = "none"), i;
}
const IS = (e) => (t) => typeof t == "string" && t.startsWith(e), FS = IS("--"), Lf = IS("var(--"), D3 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, L3 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, vn = (e, t, r) => Math.min(Math.max(r, e), t), oo = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, la = {
  ...oo,
  transform: (e) => vn(0, 1, e)
}, Vs = {
  ...oo,
  default: 1
}, ua = (e) => Math.round(e * 1e5) / 1e5, ec = /(-)?([\d]*\.?[\d])+/g, DS = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, O3 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ts(e) {
  return typeof e == "string";
}
const rs = (e) => ({
  test: (t) => ts(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Kr = rs("deg"), yr = rs("%"), B = rs("px"), N3 = rs("vh"), j3 = rs("vw"), Hg = {
  ...yr,
  parse: (e) => yr.parse(e) / 100,
  transform: (e) => yr.transform(e * 100)
}, Gg = {
  ...oo,
  transform: Math.round
}, LS = {
  // Border props
  borderWidth: B,
  borderTopWidth: B,
  borderRightWidth: B,
  borderBottomWidth: B,
  borderLeftWidth: B,
  borderRadius: B,
  radius: B,
  borderTopLeftRadius: B,
  borderTopRightRadius: B,
  borderBottomRightRadius: B,
  borderBottomLeftRadius: B,
  // Positioning props
  width: B,
  maxWidth: B,
  height: B,
  maxHeight: B,
  size: B,
  top: B,
  right: B,
  bottom: B,
  left: B,
  // Spacing props
  padding: B,
  paddingTop: B,
  paddingRight: B,
  paddingBottom: B,
  paddingLeft: B,
  margin: B,
  marginTop: B,
  marginRight: B,
  marginBottom: B,
  marginLeft: B,
  // Transform props
  rotate: Kr,
  rotateX: Kr,
  rotateY: Kr,
  rotateZ: Kr,
  scale: Vs,
  scaleX: Vs,
  scaleY: Vs,
  scaleZ: Vs,
  skew: Kr,
  skewX: Kr,
  skewY: Kr,
  distance: B,
  translateX: B,
  translateY: B,
  translateZ: B,
  x: B,
  y: B,
  z: B,
  perspective: B,
  transformPerspective: B,
  opacity: la,
  originX: Hg,
  originY: Hg,
  originZ: B,
  // Misc
  zIndex: Gg,
  // SVG
  fillOpacity: la,
  strokeOpacity: la,
  numOctaves: Gg
};
function Ap(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (FS(d)) {
      i[d] = f;
      continue;
    }
    const p = LS[d], g = L3(f, p);
    if (no.has(d)) {
      if (l = !0, a[d] = g, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = g) : o[d] = g;
  }
  if (t.transform || (l || n ? o.transform = F3(e.transform, r, c, n) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Rp = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function OS(e, t, r) {
  for (const n in t)
    !xt(t[n]) && !zS(n, r) && (e[n] = t[n]);
}
function B3({ transformTemplate: e }, t, r) {
  return b.useMemo(() => {
    const n = Rp();
    return Ap(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function V3(e, t, r) {
  const n = e.style || {}, o = {};
  return OS(o, n, e), Object.assign(o, B3(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function W3(e, t, r) {
  const n = {}, o = V3(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const U3 = /* @__PURE__ */ new Set([
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
function nu(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || U3.has(e);
}
let NS = (e) => !nu(e);
function H3(e) {
  e && (NS = (t) => t.startsWith("on") ? !nu(t) : e(t));
}
try {
  H3(require("@emotion/is-prop-valid").default);
} catch {
}
function G3(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (NS(o) || r === !0 && nu(o) || !t && !nu(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function Kg(e, t, r) {
  return typeof e == "string" ? e : B.transform(t + r * e);
}
function K3(e, t, r) {
  const n = Kg(t, e.x, e.width), o = Kg(r, e.y, e.height);
  return `${n} ${o}`;
}
const Y3 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, X3 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function q3(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? Y3 : X3;
  e[i.offset] = B.transform(-n);
  const a = B.transform(t), s = B.transform(r);
  e[i.array] = `${a} ${s}`;
}
function Mp(e, {
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
  if (Ap(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: g, dimensions: y } = e;
  p.transform && (y && (g.transform = p.transform), delete p.transform), y && (o !== void 0 || i !== void 0 || g.transform) && (g.transformOrigin = K3(y, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), a !== void 0 && q3(p, a, s, l, !1);
}
const jS = () => ({
  ...Rp(),
  attrs: {}
}), zp = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Q3(e, t, r, n) {
  const o = b.useMemo(() => {
    const i = jS();
    return Mp(i, t, { enableHardwareAcceleration: !1 }, zp(n), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    OS(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function Z3(e = !1) {
  return (r, n, o, { latestValues: i }, a) => {
    const l = ($p(r) ? Q3 : W3)(n, i, a, r), c = {
      ...G3(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = b.useMemo(() => xt(d) ? d.get() : d, [d]);
    return b.createElement(r, {
      ...c,
      children: f
    });
  };
}
const Ip = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function BS(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r)
    e.style.setProperty(i, r[i]);
}
const VS = /* @__PURE__ */ new Set([
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
function WS(e, t, r, n) {
  BS(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(VS.has(o) ? o : Ip(o), t.attrs[o]);
}
function Fp(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (xt(r[o]) || t.style && xt(t.style[o]) || zS(o, e)) && (n[o] = r[o]);
  return n;
}
function US(e, t) {
  const r = Fp(e, t);
  for (const n in e)
    if (xt(e[n]) || xt(t[n])) {
      const o = es.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function Dp(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function HS(e) {
  const t = b.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const ou = (e) => Array.isArray(e), J3 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), eI = (e) => ou(e) ? e[e.length - 1] || 0 : e;
function xl(e) {
  const t = xt(e) ? e.get() : e;
  return J3(t) ? t.toValue() : t;
}
function tI({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = {
    latestValues: rI(n, o, i, e),
    renderState: t()
  };
  return r && (a.mount = (s) => r(n, s, a)), a;
}
const GS = (e) => (t, r) => {
  const n = b.useContext(qu), o = b.useContext(Ja), i = () => tI(e, t, n, o);
  return r ? i() : HS(i);
};
function rI(e, t, r, n) {
  const o = {}, i = n(e, {});
  for (const f in i)
    o[f] = xl(i[f]);
  let { initial: a, animate: s } = e;
  const l = Ju(e), u = RS(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Zu(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const g = Dp(e, p);
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
const Me = (e) => e;
class Yg {
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
function nI(e) {
  let t = new Yg(), r = new Yg(), n = 0, o = !1, i = !1;
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
const Ws = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], oI = 40;
function iI(e, t) {
  let r = !1, n = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = Ws.reduce((d, f) => (d[f] = nI(() => r = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    r = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, oI), 1), o.timestamp = d, o.isProcessing = !0, Ws.forEach(a), o.isProcessing = !1, r && t && (n = !1, e(s));
  }, l = () => {
    r = !0, n = !0, o.isProcessing || e(s);
  };
  return { schedule: Ws.reduce((d, f) => {
    const p = i[f];
    return d[f] = (g, y = !1, x = !1) => (r || l(), p.schedule(g, y, x)), d;
  }, {}), cancel: (d) => Ws.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: he, cancel: Br, state: Ue, steps: cd } = iI(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Me, !0), aI = {
  useVisualState: GS({
    scrapeMotionValuesFromProps: US,
    createRenderState: jS,
    onMount: (e, t, { renderState: r, latestValues: n }) => {
      he.read(() => {
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
      }), he.render(() => {
        Mp(r, n, { enableHardwareAcceleration: !1 }, zp(t.tagName), e.transformTemplate), WS(t, r);
      });
    }
  })
}, sI = {
  useVisualState: GS({
    scrapeMotionValuesFromProps: Fp,
    createRenderState: Rp
  })
};
function lI(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...$p(e) ? aI : sI,
    preloadedFeatures: r,
    useRender: Z3(t),
    createVisualElement: n,
    Component: e
  };
}
function Rr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const KS = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function tc(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const uI = (e) => (t) => KS(t) && e(t, tc(t));
function Ir(e, t, r, n) {
  return Rr(e, t, uI(r), n);
}
const cI = (e, t) => (r) => t(e(r)), fn = (...e) => e.reduce(cI);
function YS(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const Xg = YS("dragHorizontal"), qg = YS("dragVertical");
function XS(e) {
  let t = !1;
  if (e === "y")
    t = qg();
  else if (e === "x")
    t = Xg();
  else {
    const r = Xg(), n = qg();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function qS() {
  const e = XS(!0);
  return e ? (e(), !1) : !0;
}
class wn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Qg(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || qS())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && he.update(() => s[n](i, a));
  };
  return Ir(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class dI extends wn {
  mount() {
    this.unmount = fn(Qg(this.node, !0), Qg(this.node, !1));
  }
  unmount() {
  }
}
class fI extends wn {
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
    this.unmount = fn(Rr(this.node.current, "focus", () => this.onFocus()), Rr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const QS = (e, t) => t ? e === t ? !0 : QS(e, t.parentElement) : !1;
function dd(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, tc(r));
}
class hI extends wn {
  constructor() {
    super(...arguments), this.removeStartListeners = Me, this.removeEndListeners = Me, this.removeAccessibleListeners = Me, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), i = Ir(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        he.update(() => {
          QS(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), a = Ir(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = fn(i, a), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || dd("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && he.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Rr(this.node.current, "keyup", a), dd("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Rr(this.node.current, "keydown", t), n = () => {
        this.isPressing && dd("cancel", (i, a) => this.cancelPress(i, a));
      }, o = Rr(this.node.current, "blur", n);
      this.removeAccessibleListeners = fn(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && he.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !qS();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && he.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Ir(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Rr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = fn(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Of = /* @__PURE__ */ new WeakMap(), fd = /* @__PURE__ */ new WeakMap(), pI = (e) => {
  const t = Of.get(e.target);
  t && t(e);
}, mI = (e) => {
  e.forEach(pI);
};
function vI({ root: e, ...t }) {
  const r = e || document;
  fd.has(r) || fd.set(r, {});
  const n = fd.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(mI, { root: e, ...t })), n[o];
}
function gI(e, t, r) {
  const n = vI(t);
  return Of.set(e, r), n.observe(e), () => {
    Of.delete(e), n.unobserve(e);
  };
}
const yI = {
  some: 0,
  all: 1
};
class bI extends wn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: i } = t, a = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : yI[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return gI(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(SI(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function SI({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const xI = {
  inView: {
    Feature: bI
  },
  tap: {
    Feature: hI
  },
  focus: {
    Feature: fI
  },
  hover: {
    Feature: dI
  }
};
function ZS(e, t) {
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
function wI(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function kI(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function rc(e, t, r) {
  const n = e.getProps();
  return Dp(n, t, r !== void 0 ? r : n.custom, wI(e), kI(e));
}
const CI = "framerAppearId", _I = "data-" + Ip(CI);
let TI = Me, Lp = Me;
const hn = (e) => e * 1e3, Fr = (e) => e / 1e3, PI = {
  current: !1
}, JS = (e) => Array.isArray(e) && typeof e[0] == "number";
function ex(e) {
  return !!(!e || typeof e == "string" && tx[e] || JS(e) || Array.isArray(e) && e.every(ex));
}
const Gi = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, tx = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Gi([0, 0.65, 0.55, 1]),
  circOut: Gi([0.55, 0, 1, 0.45]),
  backIn: Gi([0.31, 0.01, 0.66, -0.59]),
  backOut: Gi([0.33, 1.53, 0.69, 0.99])
};
function rx(e) {
  if (e)
    return JS(e) ? Gi(e) : Array.isArray(e) ? e.map(rx) : tx[e];
}
function EI(e, t, r, { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: r };
  l && (u.offset = l);
  const c = rx(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: n,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function $I(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const nx = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, AI = 1e-7, RI = 12;
function MI(e, t, r, n, o) {
  let i, a, s = 0;
  do
    a = t + (r - t) / 2, i = nx(a, n, o) - e, i > 0 ? r = a : t = a;
  while (Math.abs(i) > AI && ++s < RI);
  return a;
}
function ns(e, t, r, n) {
  if (e === t && r === n)
    return Me;
  const o = (i) => MI(i, 0, 1, e, r);
  return (i) => i === 0 || i === 1 ? i : nx(o(i), t, n);
}
const zI = ns(0.42, 0, 1, 1), II = ns(0, 0, 0.58, 1), ox = ns(0.42, 0, 0.58, 1), FI = (e) => Array.isArray(e) && typeof e[0] != "number", ix = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, ax = (e) => (t) => 1 - e(1 - t), sx = (e) => 1 - Math.sin(Math.acos(e)), Op = ax(sx), DI = ix(Op), lx = ns(0.33, 1.53, 0.69, 0.99), Np = ax(lx), LI = ix(Np), OI = (e) => (e *= 2) < 1 ? 0.5 * Np(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), NI = {
  linear: Me,
  easeIn: zI,
  easeInOut: ox,
  easeOut: II,
  circIn: sx,
  circInOut: DI,
  circOut: Op,
  backIn: Np,
  backInOut: LI,
  backOut: lx,
  anticipate: OI
}, Zg = (e) => {
  if (Array.isArray(e)) {
    Lp(e.length === 4);
    const [t, r, n, o] = e;
    return ns(t, r, n, o);
  } else if (typeof e == "string")
    return NI[e];
  return e;
}, jp = (e, t) => (r) => !!(ts(r) && O3.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), ux = (e, t, r) => (n) => {
  if (!ts(n))
    return n;
  const [o, i, a, s] = n.match(ec);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [r]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, jI = (e) => vn(0, 255, e), hd = {
  ...oo,
  transform: (e) => Math.round(jI(e))
}, Nn = {
  test: jp("rgb", "red"),
  parse: ux("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + hd.transform(e) + ", " + hd.transform(t) + ", " + hd.transform(r) + ", " + ua(la.transform(n)) + ")"
};
function BI(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Nf = {
  test: jp("#"),
  parse: BI,
  transform: Nn.transform
}, Fo = {
  test: jp("hsl", "hue"),
  parse: ux("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + yr.transform(ua(t)) + ", " + yr.transform(ua(r)) + ", " + ua(la.transform(n)) + ")"
}, at = {
  test: (e) => Nn.test(e) || Nf.test(e) || Fo.test(e),
  parse: (e) => Nn.test(e) ? Nn.parse(e) : Fo.test(e) ? Fo.parse(e) : Nf.parse(e),
  transform: (e) => ts(e) ? e : e.hasOwnProperty("red") ? Nn.transform(e) : Fo.transform(e)
}, Te = (e, t, r) => -r * e + r * t + e;
function pd(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function VI({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = pd(l, s, e + 1 / 3), i = pd(l, s, e), a = pd(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n
  };
}
const md = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, WI = [Nf, Nn, Fo], UI = (e) => WI.find((t) => t.test(e));
function Jg(e) {
  const t = UI(e);
  let r = t.parse(e);
  return t === Fo && (r = VI(r)), r;
}
const cx = (e, t) => {
  const r = Jg(e), n = Jg(t), o = { ...r };
  return (i) => (o.red = md(r.red, n.red, i), o.green = md(r.green, n.green, i), o.blue = md(r.blue, n.blue, i), o.alpha = Te(r.alpha, n.alpha, i), Nn.transform(o));
};
function HI(e) {
  var t, r;
  return isNaN(e) && ts(e) && (((t = e.match(ec)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(DS)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const dx = {
  regex: D3,
  countKey: "Vars",
  token: "${v}",
  parse: Me
}, fx = {
  regex: DS,
  countKey: "Colors",
  token: "${c}",
  parse: at.parse
}, hx = {
  regex: ec,
  countKey: "Numbers",
  token: "${n}",
  parse: oo.parse
};
function vd(e, { regex: t, countKey: r, token: n, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + r] = i.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...i.map(o)));
}
function iu(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && vd(r, dx), vd(r, fx), vd(r, hx), r;
}
function px(e) {
  return iu(e).values;
}
function mx(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = iu(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < n ? s = s.replace(dx.token, a[l]) : l < n + r ? s = s.replace(fx.token, at.transform(a[l])) : s = s.replace(hx.token, ua(a[l]));
    return s;
  };
}
const GI = (e) => typeof e == "number" ? 0 : e;
function KI(e) {
  const t = px(e);
  return mx(e)(t.map(GI));
}
const gn = {
  test: HI,
  parse: px,
  createTransformer: mx,
  getAnimatableNone: KI
}, vx = (e, t) => (r) => `${r > 0 ? t : e}`;
function gx(e, t) {
  return typeof e == "number" ? (r) => Te(e, t, r) : at.test(e) ? cx(e, t) : e.startsWith("var(") ? vx(e, t) : bx(e, t);
}
const yx = (e, t) => {
  const r = [...e], n = r.length, o = e.map((i, a) => gx(i, t[a]));
  return (i) => {
    for (let a = 0; a < n; a++)
      r[a] = o[a](i);
    return r;
  };
}, YI = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = gx(e[o], t[o]));
  return (o) => {
    for (const i in n)
      r[i] = n[i](o);
    return r;
  };
}, bx = (e, t) => {
  const r = gn.createTransformer(t), n = iu(e), o = iu(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? fn(yx(n.values, o.values), r) : vx(e, t);
}, ja = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, e0 = (e, t) => (r) => Te(e, t, r);
function XI(e) {
  return typeof e == "number" ? e0 : typeof e == "string" ? at.test(e) ? cx : bx : Array.isArray(e) ? yx : typeof e == "object" ? YI : e0;
}
function qI(e, t, r) {
  const n = [], o = r || XI(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Me : t;
      s = fn(l, s);
    }
    n.push(s);
  }
  return n;
}
function Sx(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if (Lp(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = qI(t, n, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = ja(e[c], e[c + 1], u);
    return a[c](d);
  };
  return r ? (u) => l(vn(e[0], e[i - 1], u)) : l;
}
function QI(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = ja(0, t, n);
    e.push(Te(r, 1, o));
  }
}
function ZI(e) {
  const t = [0];
  return QI(t, e.length - 1), t;
}
function JI(e, t) {
  return e.map((r) => r * t);
}
function e4(e, t) {
  return e.map(() => t || ox).splice(0, e.length - 1);
}
function au({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = FI(n) ? n.map(Zg) : Zg(n), i = {
    done: !1,
    value: t[0]
  }, a = JI(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : ZI(t),
    e
  ), s = Sx(a, t, {
    ease: Array.isArray(o) ? o : e4(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function xx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const t4 = 5;
function wx(e, t, r) {
  const n = Math.max(t - t4, 0);
  return xx(r - e(n), t - n);
}
const gd = 1e-3, r4 = 0.01, t0 = 10, n4 = 0.05, o4 = 1;
function i4({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i;
  TI(e <= hn(t0));
  let a = 1 - t;
  a = vn(n4, o4, a), e = vn(r4, t0, Fr(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - r, p = jf(u, a), g = Math.exp(-d);
    return gd - f / p * g;
  }, i = (u) => {
    const d = u * a * e, f = d * r + r, p = Math.pow(a, 2) * Math.pow(u, 2) * e, g = Math.exp(-d), y = jf(Math.pow(u, 2), a);
    return (-o(u) + gd > 0 ? -1 : 1) * ((f - p) * g) / y;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - r) * e + 1;
    return -gd + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (r - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = s4(o, i, s);
  if (e = hn(e), isNaN(l))
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
const a4 = 12;
function s4(e, t, r) {
  let n = r;
  for (let o = 1; o < a4; o++)
    n = n - e(n) / t(n);
  return n;
}
function jf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const l4 = ["duration", "bounce"], u4 = ["stiffness", "damping", "mass"];
function r0(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function c4(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!r0(e, u4) && r0(e, l4)) {
    const r = i4(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function kx({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = c4(n), p = c ? -Fr(c) : 0, g = l / (2 * Math.sqrt(s * u)), y = i - o, x = Fr(Math.sqrt(s / u)), m = Math.abs(y) < 5;
  r || (r = m ? 0.01 : 2), t || (t = m ? 5e-3 : 0.5);
  let h;
  if (g < 1) {
    const v = jf(x, g);
    h = (w) => {
      const T = Math.exp(-g * x * w);
      return i - T * ((p + g * x * y) / v * Math.sin(v * w) + y * Math.cos(v * w));
    };
  } else if (g === 1)
    h = (v) => i - Math.exp(-x * v) * (y + (p + x * y) * v);
  else {
    const v = x * Math.sqrt(g * g - 1);
    h = (w) => {
      const T = Math.exp(-g * x * w), A = Math.min(v * w, 300);
      return i - T * ((p + g * x * y) * Math.sinh(A) + v * y * Math.cosh(A)) / v;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (v) => {
      const w = h(v);
      if (f)
        a.done = v >= d;
      else {
        let T = p;
        v !== 0 && (g < 1 ? T = wx(h, v, w) : T = 0);
        const A = Math.abs(T) <= r, P = Math.abs(i - w) <= t;
        a.done = A && P;
      }
      return a.value = a.done ? i : w, a;
    }
  };
}
function n0({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = ($) => s !== void 0 && $ < s || l !== void 0 && $ > l, g = ($) => s === void 0 ? l : l === void 0 || Math.abs(s - $) < Math.abs(l - $) ? s : l;
  let y = r * t;
  const x = d + y, m = a === void 0 ? x : a(x);
  m !== x && (y = m - d);
  const h = ($) => -y * Math.exp(-$ / n), v = ($) => m + h($), w = ($) => {
    const M = h($), I = v($);
    f.done = Math.abs(M) <= u, f.value = f.done ? m : I;
  };
  let T, A;
  const P = ($) => {
    p(f.value) && (T = $, A = kx({
      keyframes: [f.value, g(f.value)],
      velocity: wx(v, $, f.value),
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return P(0), {
    calculatedDuration: null,
    next: ($) => {
      let M = !1;
      return !A && T === void 0 && (M = !0, w($), P($)), T !== void 0 && $ > T ? A.next($ - T) : (!M && w($), f);
    }
  };
}
const d4 = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => he.update(t, !0),
    stop: () => Br(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ue.isProcessing ? Ue.timestamp : performance.now()
  };
}, o0 = 2e4;
function i0(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < o0; )
    t += r, n = e.next(t);
  return t >= o0 ? 1 / 0 : t;
}
const f4 = {
  decay: n0,
  inertia: n0,
  tween: au,
  keyframes: au,
  spring: kx
};
function su({ autoplay: e = !0, delay: t = 0, driver: r = d4, keyframes: n, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, g = !1, y, x;
  const m = () => {
    x = new Promise((j) => {
      y = j;
    });
  };
  m();
  let h;
  const v = f4[o] || au;
  let w;
  v !== au && typeof n[0] != "number" && (w = Sx([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const T = v({ ...f, keyframes: n });
  let A;
  s === "mirror" && (A = v({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let P = "idle", $ = null, M = null, I = null;
  T.calculatedDuration === null && i && (T.calculatedDuration = i0(T));
  const { calculatedDuration: H } = T;
  let ce = 1 / 0, me = 1 / 0;
  H !== null && (ce = H + a, me = ce * (i + 1) - a);
  let Z = 0;
  const ue = (j) => {
    if (M === null)
      return;
    p > 0 && (M = Math.min(M, j)), p < 0 && (M = Math.min(j - me / p, M)), $ !== null ? Z = $ : Z = Math.round(j - M) * p;
    const J = Z - t * (p >= 0 ? 1 : -1), W = p >= 0 ? J < 0 : J > me;
    Z = Math.max(J, 0), P === "finished" && $ === null && (Z = me);
    let te = Z, wt = T;
    if (i) {
      const Ft = Z / ce;
      let kt = Math.floor(Ft), Dt = Ft % 1;
      !Dt && Ft >= 1 && (Dt = 1), Dt === 1 && kt--, kt = Math.min(kt, i + 1);
      const kn = !!(kt % 2);
      kn && (s === "reverse" ? (Dt = 1 - Dt, a && (Dt -= a / ce)) : s === "mirror" && (wt = A));
      let io = vn(0, 1, Dt);
      Z > me && (io = s === "reverse" && kn ? 1 : 0), te = io * ce;
    }
    const Se = W ? { done: !1, value: n[0] } : wt.next(te);
    w && (Se.value = w(Se.value));
    let { done: Ie } = Se;
    !W && H !== null && (Ie = p >= 0 ? Z >= me : Z <= 0);
    const Je = $ === null && (P === "finished" || P === "running" && Ie);
    return d && d(Se.value), Je && z(), Se;
  }, $e = () => {
    h && h.stop(), h = void 0;
  }, ze = () => {
    P = "idle", $e(), y(), m(), M = I = null;
  }, z = () => {
    P = "finished", c && c(), $e(), y();
  }, N = () => {
    if (g)
      return;
    h || (h = r(ue));
    const j = h.now();
    l && l(), $ !== null ? M = j - $ : (!M || P === "finished") && (M = j), P === "finished" && m(), I = M, $ = null, P = "running", h.start();
  };
  e && N();
  const V = {
    then(j, J) {
      return x.then(j, J);
    },
    get time() {
      return Fr(Z);
    },
    set time(j) {
      j = hn(j), Z = j, $ !== null || !h || p === 0 ? $ = j : M = h.now() - j / p;
    },
    get duration() {
      const j = T.calculatedDuration === null ? i0(T) : T.calculatedDuration;
      return Fr(j);
    },
    get speed() {
      return p;
    },
    set speed(j) {
      j === p || !h || (p = j, V.time = Fr(Z));
    },
    get state() {
      return P;
    },
    play: N,
    pause: () => {
      P = "paused", $ = Z;
    },
    stop: () => {
      g = !0, P !== "idle" && (P = "idle", u && u(), ze());
    },
    cancel: () => {
      I !== null && ue(I), ze();
    },
    complete: () => {
      P = "finished";
    },
    sample: (j) => (M = 0, ue(j))
  };
  return V;
}
function h4(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const p4 = h4(() => Object.hasOwnProperty.call(Element.prototype, "animate")), m4 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Us = 10, v4 = 2e4, g4 = (e, t) => t.type === "spring" || e === "backgroundColor" || !ex(t.ease);
function y4(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(p4() && m4.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (g4(t, o)) {
    const h = su({
      ...o,
      repeat: 0,
      delay: 0
    });
    let v = { done: !1, value: c[0] };
    const w = [];
    let T = 0;
    for (; !v.done && T < v4; )
      v = h.sample(T), w.push(v.value), T += Us;
    p = void 0, c = w, d = T - Us, f = "linear";
  }
  const g = EI(e.owner.current, t, c, {
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
  o.syncStart && (g.startTime = Ue.isProcessing ? Ue.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const y = () => g.cancel(), x = () => {
    he.update(y), s(), u();
  };
  return g.onfinish = () => {
    e.set($I(c, o)), n && n(), x();
  }, {
    then(h, v) {
      return l.then(h, v);
    },
    attachTimeline(h) {
      return g.timeline = h, g.onfinish = null, Me;
    },
    get time() {
      return Fr(g.currentTime || 0);
    },
    set time(h) {
      g.currentTime = hn(h);
    },
    get speed() {
      return g.playbackRate;
    },
    set speed(h) {
      g.playbackRate = h;
    },
    get duration() {
      return Fr(d);
    },
    play: () => {
      a || (g.play(), Br(y));
    },
    pause: () => g.pause(),
    stop: () => {
      if (a = !0, g.playState === "idle")
        return;
      const { currentTime: h } = g;
      if (h) {
        const v = su({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(v.sample(h - Us).value, v.sample(h).value, Us);
      }
      x();
    },
    complete: () => g.finish(),
    cancel: x
  };
}
function b4({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: Me,
    pause: Me,
    stop: Me,
    then: (i) => (i(), Promise.resolve()),
    cancel: Me,
    complete: Me
  });
  return t ? su({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const S4 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, x4 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), w4 = {
  type: "keyframes",
  duration: 0.8
}, k4 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, C4 = (e, { keyframes: t }) => t.length > 2 ? w4 : no.has(e) ? e.startsWith("scale") ? x4(t[1]) : S4 : k4, Bf = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(gn.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), _4 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function T4(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(ec) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let i = _4.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const P4 = /([a-z-]*)\(.*?\)/g, Vf = {
  ...gn,
  getAnimatableNone: (e) => {
    const t = e.match(P4);
    return t ? t.map(T4).join(" ") : e;
  }
}, E4 = {
  ...LS,
  // Color props
  color: at,
  backgroundColor: at,
  outlineColor: at,
  fill: at,
  stroke: at,
  // Border props
  borderColor: at,
  borderTopColor: at,
  borderRightColor: at,
  borderBottomColor: at,
  borderLeftColor: at,
  filter: Vf,
  WebkitFilter: Vf
}, Bp = (e) => E4[e];
function Cx(e, t) {
  let r = Bp(e);
  return r !== Vf && (r = gn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const _x = (e) => /^0[^.\s]+$/.test(e);
function $4(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || _x(e);
}
function A4(e, t, r, n) {
  const o = Bf(t, r);
  let i;
  Array.isArray(r) ? i = [...r] : i = [null, r];
  const a = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), $4(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = Cx(t, s);
    }
  return i;
}
function R4({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function Tx(e, t) {
  return e[t] || e.default || e;
}
const Vp = (e, t, r, n = {}) => (o) => {
  const i = Tx(n, e) || {}, a = i.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - hn(a);
  const l = A4(t, e, r, i), u = l[0], c = l[l.length - 1], d = Bf(e, u), f = Bf(e, c);
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
  if (R4(i) || (p = {
    ...p,
    ...C4(e, p)
  }), p.duration && (p.duration = hn(p.duration)), p.repeatDelay && (p.repeatDelay = hn(p.repeatDelay)), !d || !f || PI.current || i.type === !1)
    return b4(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const g = y4(t, e, p);
    if (g)
      return g;
  }
  return su(p);
};
function lu(e) {
  return !!(xt(e) && e.add);
}
const Px = (e) => /^\-?\d*\.?\d+$/.test(e);
function Wp(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Up(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Hp {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Wp(this.subscriptions, t), () => Up(this.subscriptions, t);
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
const M4 = (e) => !isNaN(parseFloat(e));
class z4 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, r = {}) {
    this.version = "10.6.8", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (n, o = !0) => {
      this.prev = this.current, this.current = n;
      const { delta: i, timestamp: a } = Ue;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, he.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => he.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = M4(this.current), this.owner = r.owner;
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
    this.events[t] || (this.events[t] = new Hp());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), he.read(() => {
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
      xx(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function ui(e, t) {
  return new z4(e, t);
}
const Ex = (e) => (t) => t.test(e), I4 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, $x = [oo, B, yr, Kr, j3, N3, I4], zi = (e) => $x.find(Ex(e)), F4 = [...$x, at, gn], D4 = (e) => F4.find(Ex(e));
function L4(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, ui(r));
}
function O4(e, t) {
  const r = rc(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const a in i) {
    const s = eI(i[a]);
    L4(e, a, s);
  }
}
function N4(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (Px(c) || _x(c)) ? c = parseFloat(c) : !D4(c) && gn.test(u) && (c = Cx(l, u)), e.addValue(l, ui(c, { owner: e })), r[l] === void 0 && (r[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function j4(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function B4(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = j4(o, t);
    if (i !== void 0)
      n[o] = i;
    else {
      const a = r.getValue(o);
      a && (n[o] = a.get());
    }
  }
  return n;
}
function V4({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function Ax(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (i = n);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && V4(c, d))
      continue;
    const g = {
      delay: r,
      elapsed: 0,
      ...i
    };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const x = e.getProps()[_I];
      x && (g.elapsed = window.HandoffAppearAnimations(x, d, f, he), g.syncStart = !0);
    }
    f.start(Vp(d, f, p, e.shouldReduceMotion && no.has(d) ? { type: !1 } : g));
    const y = f.animation;
    lu(l) && (l.add(d), y.then(() => l.remove(d))), u.push(y);
  }
  return a && Promise.all(u).then(() => {
    a && O4(e, a);
  }), u;
}
function Wf(e, t, r = {}) {
  const n = rc(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => Promise.all(Ax(e, n, r)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return W4(e, t, u + l, c, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(r.delay)]);
}
function W4(e, t, r = 0, n = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n;
  return Array.from(e.variantChildren).sort(U4).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(Wf(u, t, {
      ...i,
      delay: r + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function U4(e, t) {
  return e.sortNodePosition(t);
}
function H4(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Wf(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Wf(e, t, r);
  else {
    const o = typeof t == "function" ? rc(e, t, r.custom) : t;
    n = Promise.all(Ax(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const G4 = [...Tp].reverse(), K4 = Tp.length;
function Y4(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => H4(e, r, n)));
}
function X4(e) {
  let t = Y4(e);
  const r = Q4();
  let n = !0;
  const o = (l, u) => {
    const c = rc(e, u);
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
    for (let m = 0; m < K4; m++) {
      const h = G4[m], v = r[h], w = c[h] !== void 0 ? c[h] : d[h], T = Oa(w), A = h === u ? v.isActive : null;
      A === !1 && (y = m);
      let P = w === d[h] && w !== c[h] && T;
      if (P && n && e.manuallyAnimateOnMount && (P = !1), v.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !v.isActive && A === null || // If we didn't and don't have any defined prop for this animation type
      !w && !v.prevProp || // Or if the prop doesn't define an animation
      Zu(w) || typeof w == "boolean")
        continue;
      const $ = q4(v.prevProp, w);
      let M = $ || // If we're making this variant active, we want to always make it active
      h === u && v.isActive && !P && T || // If we removed a higher-priority variant (i is in reverse order)
      m > y && T;
      const I = Array.isArray(w) ? w : [w];
      let H = I.reduce(o, {});
      A === !1 && (H = {});
      const { prevResolvedValues: ce = {} } = v, me = {
        ...ce,
        ...H
      }, Z = (ue) => {
        M = !0, p.delete(ue), v.needsAnimating[ue] = !0;
      };
      for (const ue in me) {
        const $e = H[ue], ze = ce[ue];
        g.hasOwnProperty(ue) || ($e !== ze ? ou($e) && ou(ze) ? !ZS($e, ze) || $ ? Z(ue) : v.protectedKeys[ue] = !0 : $e !== void 0 ? Z(ue) : p.add(ue) : $e !== void 0 && p.has(ue) ? Z(ue) : v.protectedKeys[ue] = !0);
      }
      v.prevProp = w, v.prevResolvedValues = H, v.isActive && (g = { ...g, ...H }), n && e.blockInitialAnimation && (M = !1), M && !P && f.push(...I.map((ue) => ({
        animation: ue,
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
function q4(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ZS(t, e) : !1;
}
function Pn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Q4() {
  return {
    animate: Pn(!0),
    whileInView: Pn(),
    whileHover: Pn(),
    whileTap: Pn(),
    whileDrag: Pn(),
    whileFocus: Pn(),
    exit: Pn()
  };
}
class Z4 extends wn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = X4(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Zu(t) && (this.unmount = t.subscribe(this.node));
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
let J4 = 0;
class eF extends wn {
  constructor() {
    super(...arguments), this.id = J4++;
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
const tF = {
  animation: {
    Feature: Z4
  },
  exit: {
    Feature: eF
  }
}, a0 = (e, t) => Math.abs(e - t);
function rF(e, t) {
  const r = a0(e.x, t.x), n = a0(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class Rx {
  constructor(t, r, { transformPagePoint: n, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = bd(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = rF(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: g } = Ue;
      this.history.push({ ...p, timestamp: g });
      const { onStart: y, onMove: x } = this.handlers;
      d || (y && y(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = yd(d, this.transformPagePoint), he.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, g = bd(c.type === "pointercancel" ? this.lastMoveEventInfo : yd(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, g), p && p(c, g);
    }, !KS(t))
      return;
    this.handlers = r, this.transformPagePoint = n, this.contextWindow = o || window;
    const i = tc(t), a = yd(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = Ue;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = r;
    u && u(t, bd(a, this.history)), this.removeListeners = fn(Ir(this.contextWindow, "pointermove", this.handlePointerMove), Ir(this.contextWindow, "pointerup", this.handlePointerUp), Ir(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Br(this.updatePoint);
  }
}
function yd(e, t) {
  return t ? { point: t(e.point) } : e;
}
function s0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function bd({ point: e }, t) {
  return {
    point: e,
    delta: s0(e, Mx(t)),
    offset: s0(e, nF(t)),
    velocity: oF(t, 0.1)
  };
}
function nF(e) {
  return e[0];
}
function Mx(e) {
  return e[e.length - 1];
}
function oF(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = Mx(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > hn(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const i = Fr(o.timestamp - n.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - n.x) / i,
    y: (o.y - n.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Rt(e) {
  return e.max - e.min;
}
function Uf(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function l0(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = Te(t.min, t.max, e.origin), e.scale = Rt(r) / Rt(t), (Uf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Te(r.min, r.max, e.origin) - e.originPoint, (Uf(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ca(e, t, r, n) {
  l0(e.x, t.x, r.x, n ? n.originX : void 0), l0(e.y, t.y, r.y, n ? n.originY : void 0);
}
function u0(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Rt(t);
}
function iF(e, t, r) {
  u0(e.x, t.x, r.x), u0(e.y, t.y, r.y);
}
function c0(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Rt(t);
}
function da(e, t, r) {
  c0(e.x, t.x, r.x), c0(e.y, t.y, r.y);
}
function aF(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? Te(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? Te(r, e, n.max) : Math.min(e, r)), e;
}
function d0(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function sF(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: d0(e.x, r, o),
    y: d0(e.y, t, n)
  };
}
function f0(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function lF(e, t) {
  return {
    x: f0(e.x, t.x),
    y: f0(e.y, t.y)
  };
}
function uF(e, t) {
  let r = 0.5;
  const n = Rt(e), o = Rt(t);
  return o > n ? r = ja(t.min, t.max - n, e.min) : n > o && (r = ja(e.min, e.max - o, t.min)), vn(0, 1, r);
}
function cF(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Hf = 0.35;
function dF(e = Hf) {
  return e === !1 ? e = 0 : e === !0 && (e = Hf), {
    x: h0(e, "left", "right"),
    y: h0(e, "top", "bottom")
  };
}
function h0(e, t, r) {
  return {
    min: p0(e, t),
    max: p0(e, r)
  };
}
function p0(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const m0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Do = () => ({
  x: m0(),
  y: m0()
}), v0 = () => ({ min: 0, max: 0 }), Le = () => ({
  x: v0(),
  y: v0()
});
function lr(e) {
  return [e("x"), e("y")];
}
function zx({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function fF({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function hF(e, t) {
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
function Sd(e) {
  return e === void 0 || e === 1;
}
function Gf({ scale: e, scaleX: t, scaleY: r }) {
  return !Sd(e) || !Sd(t) || !Sd(r);
}
function An(e) {
  return Gf(e) || Ix(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Ix(e) {
  return g0(e.x) || g0(e.y);
}
function g0(e) {
  return e && e !== "0%";
}
function uu(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function y0(e, t, r, n, o) {
  return o !== void 0 && (e = uu(e, o, n)), uu(e, r, n) + t;
}
function Kf(e, t = 0, r = 1, n, o) {
  e.min = y0(e.min, t, r, n, o), e.max = y0(e.max, t, r, n, o);
}
function Fx(e, { x: t, y: r }) {
  Kf(e.x, t.translate, t.scale, t.originPoint), Kf(e.y, r.translate, r.scale, r.originPoint);
}
function pF(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = r[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (n && i.options.layoutScroll && i.scroll && i !== i.root && Lo(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Fx(e, a)), n && An(i.latestValues) && Lo(e, i.latestValues));
  }
  t.x = b0(t.x), t.y = b0(t.y);
}
function b0(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function qr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function S0(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = Te(e.min, e.max, i);
  Kf(e, t[r], t[n], a, t.scale);
}
const mF = ["x", "scaleX", "originX"], vF = ["y", "scaleY", "originY"];
function Lo(e, t) {
  S0(e.x, t, mF), S0(e.y, t, vF);
}
function Dx(e, t) {
  return zx(hF(e.getBoundingClientRect(), t));
}
function gF(e, t, r) {
  const n = Dx(e, r), { scroll: o } = t;
  return o && (qr(n.x, o.offset.x), qr(n.y, o.offset.y)), n;
}
const Lx = ({ current: e }) => e ? e.ownerDocument.defaultView : null, yF = /* @__PURE__ */ new WeakMap();
class bF {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Le(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(tc(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = XS(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), lr((g) => {
        let y = this.getAxisMotionValue(g).get() || 0;
        if (yr.test(y)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const m = x.layout.layoutBox[g];
            m && (y = Rt(m) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[g] = y;
      }), f && he.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: g } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = SF(g), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new Rx(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: Lx(this.visualElement)
    });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && he.update(() => i(t, r));
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
    if (!n || !Hs(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (a = aF(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    r && Io(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = sF(o.layoutBox, r) : this.constraints = !1, this.elastic = dF(n), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && lr((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = cF(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !Io(t))
      return !1;
    const n = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = gF(n, o.root, this.visualElement.getTransformPagePoint());
    let a = lF(o.layout.layoutBox, i);
    if (r) {
      const s = r(fF(a));
      this.hasMutatedConstraints = !!s, s && (a = zx(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = lr((c) => {
      if (!Hs(c, r, this.currentDirection))
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
    return n.start(Vp(t, n, 0, r));
  }
  stopAnimation() {
    lr((t) => this.getAxisMotionValue(t).stop());
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
    lr((r) => {
      const { drag: n } = this.getProps();
      if (!Hs(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[r];
        i.set(t[r] - Te(a, s, 0.5));
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
    if (!Io(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    lr((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = uF({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), lr((a) => {
      if (!Hs(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(Te(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    yF.set(this.visualElement, this);
    const t = this.visualElement.current, r = Ir(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      Io(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const a = Rr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (lr((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = Hf, dragMomentum: s = !0 } = t;
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
function Hs(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function SF(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class xF extends wn {
  constructor(t) {
    super(t), this.removeGroupControls = Me, this.removeListeners = Me, this.controls = new bF(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Me;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const x0 = (e) => (t, r) => {
  e && he.update(() => e(t, r));
};
class wF extends wn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Me;
  }
  onPointerDown(t) {
    this.session = new Rx(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Lx(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: x0(t),
      onStart: x0(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && he.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ir(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function Ox() {
  const e = b.useContext(Ja);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = b.useId();
  return b.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function kF() {
  return CF(b.useContext(Ja));
}
function CF(e) {
  return e === null ? !0 : e.isPresent;
}
const wl = {
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
function w0(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Ii = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (B.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = w0(e, t.target.x), n = w0(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, _F = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = gn.parse(e);
    if (o.length > 5)
      return n;
    const i = gn.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = Te(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class TF extends Kn.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: i } = t;
    M3(PF), i && (r.group && r.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), wl.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: i } = this.props, a = n.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== r || r === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || he.postRender(() => {
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
function Nx(e) {
  const [t, r] = Ox(), n = b.useContext(Ep);
  return Kn.createElement(TF, { ...e, layoutGroup: n, switchLayoutGroup: b.useContext(MS), isPresent: t, safeToRemove: r });
}
const PF = {
  borderRadius: {
    ...Ii,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Ii,
  borderTopRightRadius: Ii,
  borderBottomLeftRadius: Ii,
  borderBottomRightRadius: Ii,
  boxShadow: _F
}, jx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], EF = jx.length, k0 = (e) => typeof e == "string" ? parseFloat(e) : e, C0 = (e) => typeof e == "number" || B.test(e);
function $F(e, t, r, n, o, i) {
  o ? (e.opacity = Te(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    AF(n)
  ), e.opacityExit = Te(t.opacity !== void 0 ? t.opacity : 1, 0, RF(n))) : i && (e.opacity = Te(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let a = 0; a < EF; a++) {
    const s = `border${jx[a]}Radius`;
    let l = _0(t, s), u = _0(r, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || C0(l) === C0(u) ? (e[s] = Math.max(Te(k0(l), k0(u), n), 0), (yr.test(u) || yr.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || r.rotate) && (e.rotate = Te(t.rotate || 0, r.rotate || 0, n));
}
function _0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const AF = Bx(0, 0.5, Op), RF = Bx(0.5, 0.95, Me);
function Bx(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(ja(e, t, n));
}
function T0(e, t) {
  e.min = t.min, e.max = t.max;
}
function jt(e, t) {
  T0(e.x, t.x), T0(e.y, t.y);
}
function P0(e, t, r, n, o) {
  return e -= t, e = uu(e, 1 / r, n), o !== void 0 && (e = uu(e, 1 / o, n)), e;
}
function MF(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (yr.test(t) && (t = parseFloat(t), t = Te(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = Te(i.min, i.max, n);
  e === i && (s -= t), e.min = P0(e.min, t, r, s, o), e.max = P0(e.max, t, r, s, o);
}
function E0(e, t, [r, n, o], i, a) {
  MF(e, t[r], t[n], t[o], t.scale, i, a);
}
const zF = ["x", "scaleX", "originX"], IF = ["y", "scaleY", "originY"];
function $0(e, t, r, n) {
  E0(e.x, t, zF, r ? r.x : void 0, n ? n.x : void 0), E0(e.y, t, IF, r ? r.y : void 0, n ? n.y : void 0);
}
function A0(e) {
  return e.translate === 0 && e.scale === 1;
}
function Vx(e) {
  return A0(e.x) && A0(e.y);
}
function FF(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Wx(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function R0(e) {
  return Rt(e.x) / Rt(e.y);
}
class DF {
  constructor() {
    this.members = [];
  }
  add(t) {
    Wp(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Up(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function M0(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: u, rotateY: c } = r;
    l && (n += `rotate(${l}deg) `), u && (n += `rotateX(${u}deg) `), c && (n += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || "none";
}
const LF = (e, t) => e.depth - t.depth;
class OF {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Wp(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Up(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(LF), this.isDirty = !1, this.children.forEach(t);
  }
}
function NF(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const i = o - r;
    i >= t && (Br(n), e(i - t));
  };
  return he.read(n, !0), () => Br(n);
}
function jF(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function BF(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function VF(e, t, r) {
  const n = xt(e) ? e : ui(e);
  return n.start(Vp("", n, t, r)), n.animation;
}
const z0 = ["", "X", "Y", "Z"], WF = { visibility: "hidden" }, I0 = 1e3;
let UF = 0;
const Rn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Ux({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = UF++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Rn.totalNodes = Rn.resolvedTargetDeltas = Rn.recalculatedProjection = 0, this.nodes.forEach(KF), this.nodes.forEach(ZF), this.nodes.forEach(JF), this.nodes.forEach(YF), jF(Rn);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new OF());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Hp()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = BF(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = NF(f, 250), wl.hasAnimatedSinceResize && (wl.hasAnimatedSinceResize = !1, this.nodes.forEach(D0));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || oD, { onLayoutAnimationStart: x, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !Wx(this.targetLayout, g) || p, v = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, v);
          const w = {
            ...Tx(y, "layout"),
            onPlay: x,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || D0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Br(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(eD), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(F0);
        return;
      }
      this.isUpdating || this.nodes.forEach(qF), this.isUpdating = !1, this.nodes.forEach(QF), this.nodes.forEach(HF), this.nodes.forEach(GF), this.clearAllSnapshots();
      const s = performance.now();
      Ue.delta = vn(0, 1e3 / 60, s - Ue.timestamp), Ue.timestamp = s, Ue.isProcessing = !0, cd.update.process(Ue), cd.preRender.process(Ue), cd.render.process(Ue), Ue.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(XF), this.sharedNodes.forEach(tD);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, he.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      he.postRender(() => {
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
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !Vx(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || An(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), iD(l), {
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
      return l && (qr(s.x, l.offset.x), qr(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = Le();
      jt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            jt(s, a);
            const { scroll: f } = this.root;
            f && (qr(s.x, -f.offset.x), qr(s.y, -f.offset.y));
          }
          qr(s.x, c.offset.x), qr(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Le();
      jt(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && Lo(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), An(c.latestValues) && Lo(l, c.latestValues);
      }
      return An(this.latestValues) && Lo(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Le();
      jt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !An(u.latestValues))
          continue;
        Gf(u.latestValues) && u.updateSnapshot();
        const c = Le(), d = u.measurePageBox();
        jt(c, d), $0(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return An(this.latestValues) && $0(s, this.latestValues), s;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ue.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = Ue.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Le(), this.relativeTargetOrigin = Le(), da(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), jt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Le(), this.targetWithTransforms = Le()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), iF(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : jt(this.target, this.layout.layoutBox), Fx(this.target, this.targetDelta)) : jt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Le(), this.relativeTargetOrigin = Le(), da(this.relativeTargetOrigin, this.target, p.target), jt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Rn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Gf(this.parent.latestValues) || Ix(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let u = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Ue.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      jt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      pF(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: g } = s;
      if (!g) {
        this.projectionTransform && (this.projectionDelta = Do(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Do(), this.projectionDeltaWithTransform = Do());
      const y = this.projectionTransform;
      ca(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = M0(this.projectionDelta, this.treeScale), (this.projectionTransform !== y || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), Rn.recalculatedProjection++;
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
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = Do();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = Le(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, y = p !== g, x = this.getStack(), m = !x || x.members.length <= 1, h = !!(y && !m && this.options.crossfade === !0 && !this.path.some(nD));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (w) => {
        const T = w / 1e3;
        L0(d.x, a.x, T), L0(d.y, a.y, T), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (da(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), rD(this.relativeTarget, this.relativeTargetOrigin, f, T), v && FF(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = Le()), jt(v, this.relativeTarget)), y && (this.animationValues = c, $F(c, u, this.latestValues, T, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Br(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = he.update(() => {
        wl.hasAnimatedSinceResize = !0, this.currentAnimation = VF(0, I0, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(I0), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && Hx(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Le();
          const d = Rt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Rt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        jt(s, l), Lo(s, c), ca(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new DF()), this.sharedNodes.get(a).add(s);
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
      for (let c = 0; c < z0.length; c++) {
        const d = "rotate" + z0[c];
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
        return WF;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = xl(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = xl(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !An(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = M0(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y: g } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in ru) {
        if (f[y] === void 0)
          continue;
        const { correct: x, applyTo: m } = ru[y], h = u.transform === "none" ? f[y] : x(f[y], d);
        if (m) {
          const v = m.length;
          for (let w = 0; w < v; w++)
            u[m[w]] = h;
        } else
          u[y] = h;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? xl(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(F0), this.root.sharedNodes.clear();
    }
  };
}
function HF(e) {
  e.updateLayout();
}
function GF(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: i } = e.options, a = r.source !== e.layout.source;
    i === "size" ? lr((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = Rt(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : Hx(i, r.layoutBox, n) && lr((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = Rt(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = Do();
    ca(s, n, r.layoutBox);
    const l = Do();
    a ? ca(l, e.applyTransform(o, !0), r.measuredBox) : ca(l, n, r.layoutBox);
    const u = !Vx(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const g = Le();
          da(g, r.layoutBox, f.layoutBox);
          const y = Le();
          da(y, n, p.layoutBox), Wx(g, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = g, e.relativeParent = d);
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
function KF(e) {
  Rn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function YF(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function XF(e) {
  e.clearSnapshot();
}
function F0(e) {
  e.clearMeasurements();
}
function qF(e) {
  e.isLayoutDirty = !1;
}
function QF(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function D0(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function ZF(e) {
  e.resolveTargetDelta();
}
function JF(e) {
  e.calcProjection();
}
function eD(e) {
  e.resetRotation();
}
function tD(e) {
  e.removeLeadSnapshot();
}
function L0(e, t, r) {
  e.translate = Te(t.translate, 0, r), e.scale = Te(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function O0(e, t, r, n) {
  e.min = Te(t.min, r.min, n), e.max = Te(t.max, r.max, n);
}
function rD(e, t, r, n) {
  O0(e.x, t.x, r.x, n), O0(e.y, t.y, r.y, n);
}
function nD(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const oD = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, N0 = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), j0 = N0("applewebkit/") && !N0("chrome/") ? Math.round : Me;
function B0(e) {
  e.min = j0(e.min), e.max = j0(e.max);
}
function iD(e) {
  B0(e.x), B0(e.y);
}
function Hx(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Uf(R0(t), R0(r), 0.2);
}
const aD = Ux({
  attachResizeListener: (e, t) => Rr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), xd = {
  current: void 0
}, Gx = Ux({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!xd.current) {
      const e = new aD({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), xd.current = e;
    }
    return xd.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), sD = {
  pan: {
    Feature: wF
  },
  drag: {
    Feature: xF,
    ProjectionNode: Gx,
    MeasureLayout: Nx
  }
}, lD = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function uD(e) {
  const t = lD.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
function Yf(e, t, r = 1) {
  const [n, o] = uD(e);
  if (!n)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const a = i.trim();
    return Px(a) ? parseFloat(a) : a;
  } else
    return Lf(o) ? Yf(o, t, r + 1) : o;
}
function cD(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const i = o.get();
    if (!Lf(i))
      return;
    const a = Yf(i, n);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Lf(i))
      continue;
    const a = Yf(i, n);
    a && (t[o] = a, r || (r = {}), r[o] === void 0 && (r[o] = i));
  }
  return { target: t, transitionEnd: r };
}
const dD = /* @__PURE__ */ new Set([
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
]), Kx = (e) => dD.has(e), fD = (e) => Object.keys(e).some(Kx), V0 = (e) => e === oo || e === B, W0 = (e, t) => parseFloat(e.split(", ")[t]), U0 = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return W0(o[1], t);
  {
    const i = n.match(/^matrix\((.+)\)$/);
    return i ? W0(i[1], e) : 0;
  }
}, hD = /* @__PURE__ */ new Set(["x", "y", "z"]), pD = es.filter((e) => !hD.has(e));
function mD(e) {
  const t = [];
  return pD.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const ci = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: U0(4, 13),
  y: U0(5, 14)
};
ci.translateX = ci.x;
ci.translateY = ci.y;
const vD = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((u) => {
    s[u] = ci[u](n, i);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = ci[u](l, i);
  }), e;
}, gD = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(Kx);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = r[l], d = zi(c);
    const f = t[l];
    let p;
    if (ou(f)) {
      const g = f.length, y = f[0] === null ? 1 : 0;
      c = f[y], d = zi(c);
      for (let x = y; x < g && f[x] !== null; x++)
        p ? Lp(zi(f[x]) === p) : p = zi(f[x]);
    } else
      p = zi(f);
    if (d !== p)
      if (V0(d) && V0(p)) {
        const g = u.get();
        typeof g == "string" && u.set(parseFloat(g)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === B && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = mD(e), a = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = vD(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), Qu && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function yD(e, t, r, n) {
  return fD(t) ? gD(e, t, r, n) : { target: t, transitionEnd: n };
}
const bD = (e, t, r, n) => {
  const o = cD(e, t, n);
  return t = o.target, n = o.transitionEnd, yD(e, t, r, n);
}, Xf = { current: null }, Yx = { current: !1 };
function SD() {
  if (Yx.current = !0, !!Qu)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Xf.current = e.matches;
      e.addListener(t), t();
    } else
      Xf.current = !1;
}
function xD(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o], a = r[o];
    if (xt(i))
      e.addValue(o, i), lu(n) && n.add(o);
    else if (xt(a))
      e.addValue(o, ui(i, { owner: e })), lu(n) && n.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, ui(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const H0 = /* @__PURE__ */ new WeakMap(), Xx = Object.keys(Na), wD = Xx.length, G0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], kD = Pp.length;
class CD {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => he.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Ju(r), this.isVariantNode = RS(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && xt(f) && (f.set(s[d], !1), lu(u) && u.add(d));
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
    this.current = t, H0.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), Yx.current || SD(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Xf.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    H0.delete(this.current), this.projection && this.projection.unmount(), Br(this.notifyUpdate), Br(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = no.has(t), o = r.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && he.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
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
    for (let l = 0; l < wD; l++) {
      const u = Xx[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = Na[u];
      f && (a = f), c(r) && (!this.features[u] && d && (this.features[u] = new d(this)), p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: p } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && Io(d),
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
    for (let n = 0; n < G0.length; n++) {
      const o = G0[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = xD(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let n = 0; n < kD; n++) {
      const o = Pp[n], i = this.props[o];
      (Oa(i) || i === !1) && (r[o] = i);
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
    return n === void 0 && r !== void 0 && (n = ui(r, { owner: this }), this.addValue(t, n)), n;
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
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = Dp(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !xt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Hp()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class qx extends CD {
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
    let a = B4(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i) {
      N4(this, n, a);
      const s = bD(this, n, a, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function _D(e) {
  return window.getComputedStyle(e);
}
class TD extends qx {
  readValueFromInstance(t, r) {
    if (no.has(r)) {
      const n = Bp(r);
      return n && n.default || 0;
    } else {
      const n = _D(t), o = (FS(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Dx(t, r);
  }
  build(t, r, n, o) {
    Ap(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return Fp(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    xt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    BS(t, r, n, o);
  }
}
class PD extends qx {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (no.has(r)) {
      const n = Bp(r);
      return n && n.default || 0;
    }
    return r = VS.has(r) ? r : Ip(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return Le();
  }
  scrapeMotionValuesFromProps(t, r) {
    return US(t, r);
  }
  build(t, r, n, o) {
    Mp(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    WS(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = zp(t.tagName), super.mount(t);
  }
}
const ED = (e, t) => $p(e) ? new PD(t, { enableHardwareAcceleration: !1 }) : new TD(t, { enableHardwareAcceleration: !0 }), $D = {
  layout: {
    ProjectionNode: Gx,
    MeasureLayout: Nx
  }
}, AD = {
  ...tF,
  ...xI,
  ...sD,
  ...$D
}, nc = /* @__PURE__ */ A3((e, t) => lI(e, t, AD, ED));
function Qx() {
  const e = b.useRef(!1);
  return _p(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function RD() {
  const e = Qx(), [t, r] = b.useState(0), n = b.useCallback(() => {
    e.current && r(t + 1);
  }, [t]);
  return [b.useCallback(() => he.postRender(n), [n]), t];
}
class MD extends b.Component {
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
function zD({ children: e, isPresent: t }) {
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
  }, [t]), b.createElement(MD, { isPresent: t, childRef: n, sizeRef: o }, b.cloneElement(e, { ref: n }));
}
const wd = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = HS(ID), l = b.useId(), u = b.useMemo(
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
  }, [r]), a === "popLayout" && (e = b.createElement(zD, { isPresent: r }, e)), b.createElement(Ja.Provider, { value: u }, e);
};
function ID() {
  return /* @__PURE__ */ new Map();
}
function FD(e) {
  return b.useEffect(() => () => e(), []);
}
const Mn = (e) => e.key || "";
function DD(e, t) {
  e.forEach((r) => {
    const n = Mn(r);
    t.set(n, r);
  });
}
function LD(e) {
  const t = [];
  return b.Children.forEach(e, (r) => {
    b.isValidElement(r) && t.push(r);
  }), t;
}
const oc = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = b.useContext(Ep).forceRender || RD()[0], l = Qx(), u = LD(e);
  let c = u;
  const d = b.useRef(/* @__PURE__ */ new Map()).current, f = b.useRef(c), p = b.useRef(/* @__PURE__ */ new Map()).current, g = b.useRef(!0);
  if (_p(() => {
    g.current = !1, DD(u, p), f.current = c;
  }), FD(() => {
    g.current = !0, p.clear(), d.clear();
  }), g.current)
    return b.createElement(b.Fragment, null, c.map((h) => b.createElement(wd, { key: Mn(h), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: i, mode: a }, h)));
  c = [...c];
  const y = f.current.map(Mn), x = u.map(Mn), m = y.length;
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
    const T = y.indexOf(v);
    let A = h;
    if (!A) {
      const P = () => {
        d.delete(v);
        const $ = Array.from(p.keys()).filter((M) => !x.includes(M));
        if ($.forEach((M) => p.delete(M)), f.current = u.filter((M) => {
          const I = Mn(M);
          return (
            // filter out the node exiting
            I === v || // filter out the leftover children
            $.includes(I)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), n && n();
        }
      };
      A = b.createElement(wd, { key: Mn(w), isPresent: !1, onExitComplete: P, custom: t, presenceAffectsLayout: i, mode: a }, w), d.set(v, A);
    }
    c.splice(T, 0, A);
  }), c = c.map((h) => {
    const v = h.key;
    return d.has(v) ? h : b.createElement(wd, { key: Mn(h), isPresent: !0, presenceAffectsLayout: i, mode: a }, h);
  }), b.createElement(b.Fragment, null, d.size ? c : c.map((h) => b.cloneElement(h)));
};
var OD = {
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
}, Zx = b.memo((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = OD,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = b.useState(s), p = kF();
  Df(() => {
    p || n == null || n();
  }, [p]), Df(() => {
    f(s);
  }, [s]);
  const g = () => f(null), y = () => f(s), x = () => {
    p && o();
  };
  b.useEffect(() => {
    p && i && o();
  }, [p, i, o]), x3(x, d);
  const m = b.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), h = b.useMemo(() => b3(a), [a]);
  return /* @__PURE__ */ _.jsx(
    nc.div,
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
      children: /* @__PURE__ */ _.jsx(
        G.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: m,
          children: rn(r, { id: t, onClose: x })
        }
      )
    }
  );
});
Zx.displayName = "ToastComponent";
var K0 = {
  path: /* @__PURE__ */ _.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ _.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ _.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ _.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, os = Ce((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...u
  } = e, c = be("chakra-icon", s), d = mi("Icon", e), f = {
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
  }, g = n ?? K0.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ _.jsx(G.svg, { as: r, ...p, ...u });
  const y = a ?? K0.path;
  return /* @__PURE__ */ _.jsx(G.svg, { verticalAlign: "middle", viewBox: g, ...p, ...u, children: y });
});
os.displayName = "Icon";
function ND(e) {
  return /* @__PURE__ */ _.jsx(os, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ _.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function jD(e) {
  return /* @__PURE__ */ _.jsx(os, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ _.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function Y0(e) {
  return /* @__PURE__ */ _.jsx(os, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ _.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var BD = Hu({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Gp = Ce((e, t) => {
  const r = mi("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = br(e), u = be("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${BD} ${i} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ _.jsx(
    G.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && /* @__PURE__ */ _.jsx(G.span, { srOnly: !0, children: n })
    }
  );
});
Gp.displayName = "Spinner";
var [VD, Kp] = it({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [WD, Yp] = it({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), Jx = {
  info: { icon: jD, colorScheme: "blue" },
  warning: { icon: Y0, colorScheme: "orange" },
  success: { icon: ND, colorScheme: "green" },
  error: { icon: Y0, colorScheme: "red" },
  loading: { icon: Gp, colorScheme: "blue" }
};
function UD(e) {
  return Jx[e].colorScheme;
}
function HD(e) {
  return Jx[e].icon;
}
var ew = Ce(
  function(t, r) {
    const n = Yp(), { status: o } = Kp(), i = {
      display: "inline",
      ...n.description
    };
    return /* @__PURE__ */ _.jsx(
      G.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: be("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
ew.displayName = "AlertDescription";
function tw(e) {
  const { status: t } = Kp(), r = HD(t), n = Yp(), o = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ _.jsx(
    G.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: be("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ _.jsx(r, { h: "100%", w: "100%" })
    }
  );
}
tw.displayName = "AlertIcon";
var rw = Ce(
  function(t, r) {
    const n = Yp(), { status: o } = Kp();
    return /* @__PURE__ */ _.jsx(
      G.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: be("chakra-alert__title", t.className),
        __css: n.title
      }
    );
  }
);
rw.displayName = "AlertTitle";
var nw = Ce(function(t, r) {
  var n;
  const { status: o = "info", addRole: i = !0, ...a } = br(t), s = (n = t.colorScheme) != null ? n : UD(o), l = vi("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ _.jsx(VD, { value: { status: o }, children: /* @__PURE__ */ _.jsx(WD, { value: l, children: /* @__PURE__ */ _.jsx(
    G.div,
    {
      "data-status": o,
      role: i ? "alert" : void 0,
      ref: r,
      ...a,
      className: be("chakra-alert", t.className),
      __css: u
    }
  ) }) });
});
nw.displayName = "Alert";
function GD(e) {
  return /* @__PURE__ */ _.jsx(os, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ _.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Xp = Ce(
  function(t, r) {
    const n = mi("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = br(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ _.jsx(
      G.button,
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
        children: o || /* @__PURE__ */ _.jsx(GD, { width: "1em", height: "1em" })
      }
    );
  }
);
Xp.displayName = "CloseButton";
var KD = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, fa = YD(KD);
function YD(e) {
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
      const a = XD(o, i), { position: s, id: l } = a;
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
        const s = { ...a }, { position: l, index: u } = Vg(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: QD(i)
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
        const a = ES(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!Vg(fa.getState(), o).position
  };
}
var X0 = 0;
function XD(e, t = {}) {
  var r, n;
  X0 += 1;
  const o = (r = t.id) != null ? r : X0, i = (n = t.position) != null ? n : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => fa.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var qD = (e) => {
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
  return /* @__PURE__ */ _.jsxs(
    nw,
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
        /* @__PURE__ */ _.jsx(tw, { children: u }),
        /* @__PURE__ */ _.jsxs(G.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ _.jsx(rw, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ _.jsx(ew, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ _.jsx(
          Xp,
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
function QD(e = {}) {
  const { render: t, toastComponent: r = qD } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ _.jsx(r, { ...o, ...e });
}
var [ZD, Pj] = it({
  name: "ToastOptionsContext",
  strict: !1
}), JD = (e) => {
  const t = b.useSyncExternalStore(
    fa.subscribe,
    fa.getState,
    fa.getState
  ), {
    motionVariants: r,
    component: n = Zx,
    portalProps: o
  } = e, a = Object.keys(t).map((s) => {
    const l = t[s];
    return /* @__PURE__ */ _.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${s}`,
        id: `chakra-toast-manager-${s}`,
        style: S3(s),
        children: /* @__PURE__ */ _.jsx(oc, { initial: !1, children: l.map((u) => /* @__PURE__ */ _.jsx(
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
  return /* @__PURE__ */ _.jsx(Qa, { ...o, children: a });
}, eL = (e) => function({
  children: r,
  theme: n = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ _.jsxs(g3, { theme: n, ...i, children: [
    /* @__PURE__ */ _.jsx(ZD, { value: o == null ? void 0 : o.defaultOptions, children: r }),
    /* @__PURE__ */ _.jsx(JD, { ...o })
  ] });
}, tL = eL(bS), rL = Object.defineProperty, nL = (e, t, r) => t in e ? rL(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ae = (e, t, r) => (nL(e, typeof t != "symbol" ? t + "" : t, r), r);
function q0(e) {
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
var oL = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function Q0(e, t, r) {
  let n = e + 1;
  return r && n >= t && (n = 0), n;
}
function Z0(e, t, r) {
  let n = e - 1;
  return r && n < 0 && (n = t), n;
}
var qf = typeof window < "u" ? b.useLayoutEffect : b.useEffect, cu = (e) => e, iL = class {
  constructor() {
    Ae(this, "descendants", /* @__PURE__ */ new Map()), Ae(this, "register", (e) => {
      if (e != null)
        return oL(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), Ae(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = q0(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), Ae(this, "destroy", () => {
      this.descendants.clear();
    }), Ae(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const r = e.indexOf(t.node);
        t.index = r, t.node.dataset.index = t.index.toString();
      });
    }), Ae(this, "count", () => this.descendants.size), Ae(this, "enabledCount", () => this.enabledValues().length), Ae(this, "values", () => Array.from(this.descendants.values()).sort((t, r) => t.index - r.index)), Ae(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), Ae(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), Ae(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), Ae(this, "first", () => this.item(0)), Ae(this, "firstEnabled", () => this.enabledItem(0)), Ae(this, "last", () => this.item(this.descendants.size - 1)), Ae(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), Ae(this, "indexOf", (e) => {
      var t, r;
      return e && (r = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? r : -1;
    }), Ae(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), Ae(this, "next", (e, t = !0) => {
      const r = Q0(e, this.count(), t);
      return this.item(r);
    }), Ae(this, "nextEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = Q0(
        n,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), Ae(this, "prev", (e, t = !0) => {
      const r = Z0(e, this.count() - 1, t);
      return this.item(r);
    }), Ae(this, "prevEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = Z0(
        n,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), Ae(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const r = Array.from(this.descendants.keys()).concat(e), n = q0(r);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(n);
    });
  }
};
function aL(e, t) {
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
function yn(...e) {
  return (t) => {
    e.forEach((r) => {
      aL(r, t);
    });
  };
}
function sL(...e) {
  return b.useMemo(() => yn(...e), e);
}
function lL() {
  const e = b.useRef(new iL());
  return qf(() => () => e.current.destroy()), e.current;
}
var [uL, ow] = it({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function cL(e) {
  const t = ow(), [r, n] = b.useState(-1), o = b.useRef(null);
  qf(() => () => {
    o.current && t.unregister(o.current);
  }, []), qf(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    r != a && !Number.isNaN(a) && n(a);
  });
  const i = cu(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: r,
    enabledIndex: t.enabledIndexOf(o.current),
    register: yn(i, o)
  };
}
function dL() {
  return [
    cu(uL),
    () => cu(ow()),
    () => lL(),
    (o) => cL(o)
  ];
}
function fL(e) {
  const {
    value: t,
    defaultValue: r,
    onChange: n,
    shouldUpdate: o = (f, p) => f !== p
  } = e, i = Gn(n), a = Gn(o), [s, l] = b.useState(r), u = t !== void 0, c = u ? t : s, d = Gn(
    (f) => {
      const g = typeof f == "function" ? f(c) : f;
      a(c, g) && (u || l(g), i(g));
    },
    [u, i, c, a]
  );
  return [c, d];
}
var Qf = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Fi = {
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
function Zf(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Fi.slideRight;
    case "left":
      return Fi.slideLeft;
    case "bottom":
      return Fi.slideDown;
    case "top":
      return Fi.slideUp;
    default:
      return Fi.slideRight;
  }
}
var J0 = {
  enter: {
    duration: 0.2,
    ease: Qf.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Qf.easeIn
  }
}, du = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, hL = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : du.enter(J0.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : du.exit(J0.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, iw = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: hL
}, pL = b.forwardRef(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ _.jsx(oc, { custom: f, children: d && /* @__PURE__ */ _.jsx(
    nc.div,
    {
      ref: r,
      className: be("chakra-fade", i),
      custom: f,
      ...iw,
      animate: c,
      ...u
    }
  ) });
});
pL.displayName = "Fade";
var ey = {
  exit: {
    duration: 0.15,
    ease: Qf.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, mL = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: i } = Zf({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : du.exit(ey.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: i } = Zf({ direction: e });
    return {
      ...i,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : du.enter(ey.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, aw = b.forwardRef(function(t, r) {
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
  } = t, p = Zf({ direction: n }), g = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), y = i ? a && i : !0, x = a || i ? "enter" : "exit", m = { transitionEnd: u, transition: l, direction: n, delay: c };
  return /* @__PURE__ */ _.jsx(oc, { custom: m, children: y && /* @__PURE__ */ _.jsx(
    nc.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: be("chakra-slide", s),
      animate: x,
      exit: "exit",
      custom: m,
      variants: mL,
      style: g,
      ...d
    }
  ) });
});
aw.displayName = "Slide";
function vL(e) {
  return b.Children.toArray(e).filter(
    (t) => b.isValidElement(t)
  );
}
var [Ej, gL] = it({
  strict: !1,
  name: "ButtonGroupContext"
});
function yL(e) {
  const [t, r] = b.useState(!e);
  return { ref: b.useCallback((i) => {
    i && r(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function Jf(e) {
  const { children: t, className: r, ...n } = e, o = b.isValidElement(t) ? b.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = be("chakra-button__icon", r);
  return /* @__PURE__ */ _.jsx(
    G.span,
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
Jf.displayName = "ButtonIcon";
function eh(e) {
  const {
    label: t,
    placement: r,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ _.jsx(Gp, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = be("chakra-button__spinner", i), u = r === "start" ? "marginEnd" : "marginStart", c = b.useMemo(
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
  return /* @__PURE__ */ _.jsx(G.div, { className: l, ...s, __css: c, children: o });
}
eh.displayName = "ButtonSpinner";
var qp = Ce((e, t) => {
  const r = gL(), n = mi("Button", { ...r, ...e }), {
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
  } = br(e), h = b.useMemo(() => {
    const A = { ...n == null ? void 0 : n._focus, zIndex: 1 };
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
      ...!!r && { _focus: A }
    };
  }, [n, r]), { ref: v, type: w } = yL(x), T = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ _.jsxs(
    G.button,
    {
      ref: sL(t, v),
      as: x,
      type: f ?? w,
      "data-active": Q(a),
      "data-loading": Q(i),
      __css: h,
      className: be("chakra-button", y),
      ...m,
      disabled: o || i,
      children: [
        i && g === "start" && /* @__PURE__ */ _.jsx(
          eh,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ _.jsx(G.span, { opacity: 0, children: /* @__PURE__ */ _.jsx(ty, { ...T }) }) : /* @__PURE__ */ _.jsx(ty, { ...T }),
        i && g === "end" && /* @__PURE__ */ _.jsx(
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
qp.displayName = "Button";
function ty(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    t && /* @__PURE__ */ _.jsx(Jf, { marginEnd: o, children: t }),
    n,
    r && /* @__PURE__ */ _.jsx(Jf, { marginStart: o, children: r })
  ] });
}
var [$j, bL] = it({
  name: "CheckboxGroupContext",
  strict: !1
});
function SL(e) {
  const [t, r] = b.useState(e), [n, o] = b.useState(!1);
  return e !== t && (o(!0), r(e)), n;
}
function xL(e) {
  return /* @__PURE__ */ _.jsx(
    G.svg,
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
      children: /* @__PURE__ */ _.jsx("polyline", { points: "1.5 6 4.5 9 10.5 1" })
    }
  );
}
function wL(e) {
  return /* @__PURE__ */ _.jsx(
    G.svg,
    {
      width: "1.2em",
      viewBox: "0 0 24 24",
      style: { stroke: "currentColor", strokeWidth: 4 },
      ...e,
      children: /* @__PURE__ */ _.jsx("line", { x1: "21", x2: "3", y1: "12", y2: "12" })
    }
  );
}
function kL(e) {
  const { isIndeterminate: t, isChecked: r, ...n } = e, o = t ? wL : xL;
  return r || t ? /* @__PURE__ */ _.jsx(
    G.div,
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      },
      children: /* @__PURE__ */ _.jsx(o, { ...n })
    }
  ) : null;
}
var [CL, _L] = it({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [TL, sw] = it({
  strict: !1,
  name: "FormControlContext"
});
function PL(e) {
  const {
    id: t,
    isRequired: r,
    isInvalid: n,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = b.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = b.useState(!1), [g, y] = b.useState(!1), [x, m] = b.useState(!1), h = b.useCallback(
    (P = {}, $ = null) => ({
      id: d,
      ...P,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: yn($, (M) => {
        M && y(!0);
      })
    }),
    [d]
  ), v = b.useCallback(
    (P = {}, $ = null) => ({
      ...P,
      ref: $,
      "data-focus": Q(x),
      "data-disabled": Q(o),
      "data-invalid": Q(n),
      "data-readonly": Q(i),
      id: P.id !== void 0 ? P.id : u,
      htmlFor: P.htmlFor !== void 0 ? P.htmlFor : l
    }),
    [l, o, x, n, i, u]
  ), w = b.useCallback(
    (P = {}, $ = null) => ({
      id: c,
      ...P,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: yn($, (M) => {
        M && p(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), T = b.useCallback(
    (P = {}, $ = null) => ({
      ...P,
      ...a,
      ref: $,
      role: "group",
      "data-focus": Q(x),
      "data-disabled": Q(o),
      "data-invalid": Q(n),
      "data-readonly": Q(i)
    }),
    [a, o, x, n, i]
  ), A = b.useCallback(
    (P = {}, $ = null) => ({
      ...P,
      ref: $,
      role: "presentation",
      "aria-hidden": !0,
      children: P.children || "*"
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
    getRootProps: T,
    getLabelProps: v,
    getRequiredIndicatorProps: A
  };
}
var EL = Ce(
  function(t, r) {
    const n = vi("Form", t), o = br(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = PL(o), l = be("chakra-form-control", t.className);
    return /* @__PURE__ */ _.jsx(TL, { value: s, children: /* @__PURE__ */ _.jsx(CL, { value: n, children: /* @__PURE__ */ _.jsx(
      G.div,
      {
        ...i({}, r),
        className: l,
        __css: n.container
      }
    ) }) });
  }
);
EL.displayName = "FormControl";
var $L = Ce(
  function(t, r) {
    const n = sw(), o = _L(), i = be("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ _.jsx(
      G.div,
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
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: o, ...i } = lw(e);
  return {
    ...i,
    disabled: t,
    readOnly: n,
    required: o,
    "aria-invalid": Hc(r),
    "aria-required": Hc(o),
    "aria-readonly": Hc(n)
  };
}
function lw(e) {
  var t, r, n;
  const o = sw(), {
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
    onFocus: je(o == null ? void 0 : o.onFocus, p),
    onBlur: je(o == null ? void 0 : o.onBlur, g)
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
}, ML = () => typeof document < "u", ry = !1, is = null, eo = !1, th = !1, rh = /* @__PURE__ */ new Set();
function Qp(e, t) {
  rh.forEach((r) => r(e, t));
}
var zL = typeof window < "u" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;
function IL(e) {
  return !(e.metaKey || !zL && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function ny(e) {
  eo = !0, IL(e) && (is = "keyboard", Qp("keyboard", e));
}
function fo(e) {
  if (is = "pointer", e.type === "mousedown" || e.type === "pointerdown") {
    eo = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let r = !1;
    try {
      r = t.matches(":focus-visible");
    } catch {
    }
    if (r)
      return;
    Qp("pointer", e);
  }
}
function FL(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : e.detail === 0 && !e.pointerType;
}
function DL(e) {
  FL(e) && (eo = !0, is = "virtual");
}
function LL(e) {
  e.target === window || e.target === document || (!eo && !th && (is = "virtual", Qp("virtual", e)), eo = !1, th = !1);
}
function OL() {
  eo = !1, th = !0;
}
function oy() {
  return is !== "pointer";
}
function NL() {
  if (!ML() || ry)
    return;
  const { focus: e } = HTMLElement.prototype;
  HTMLElement.prototype.focus = function(...r) {
    eo = !0, e.apply(this, r);
  }, document.addEventListener("keydown", ny, !0), document.addEventListener("keyup", ny, !0), document.addEventListener("click", DL, !0), window.addEventListener("focus", LL, !0), window.addEventListener("blur", OL, !1), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", fo, !0), document.addEventListener("pointermove", fo, !0), document.addEventListener("pointerup", fo, !0)) : (document.addEventListener("mousedown", fo, !0), document.addEventListener("mousemove", fo, !0), document.addEventListener("mouseup", fo, !0)), ry = !0;
}
function jL(e) {
  NL(), e(oy());
  const t = () => e(oy());
  return rh.add(t), () => {
    rh.delete(t);
  };
}
function BL(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function VL(e = {}) {
  const t = lw(e), {
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
    isIndeterminate: g,
    name: y,
    value: x,
    tabIndex: m = void 0,
    "aria-label": h,
    "aria-labelledby": v,
    "aria-invalid": w,
    ...T
  } = e, A = BL(T, [
    "isDisabled",
    "isReadOnly",
    "isRequired",
    "isInvalid",
    "id",
    "onBlur",
    "onFocus",
    "aria-describedby"
  ]), P = Gn(p), $ = Gn(s), M = Gn(l), [I, H] = b.useState(!1), [ce, me] = b.useState(!1), [Z, ue] = b.useState(!1), [$e, ze] = b.useState(!1);
  b.useEffect(() => jL(H), []);
  const z = b.useRef(null), [N, V] = b.useState(!0), [j, J] = b.useState(!!c), W = d !== void 0, te = W ? d : j, wt = b.useCallback(
    (U) => {
      if (n || r) {
        U.preventDefault();
        return;
      }
      W || J(te ? U.target.checked : g ? !0 : U.target.checked), P == null || P(U);
    },
    [
      n,
      r,
      te,
      W,
      g,
      P
    ]
  );
  Vn(() => {
    z.current && (z.current.indeterminate = !!g);
  }, [g]), Df(() => {
    r && me(!1);
  }, [r, me]), Vn(() => {
    const U = z.current;
    if (!(U != null && U.form))
      return;
    const ht = () => {
      J(!!c);
    };
    return U.form.addEventListener("reset", ht), () => {
      var Lt;
      return (Lt = U.form) == null ? void 0 : Lt.removeEventListener("reset", ht);
    };
  }, []);
  const Se = r && !f, Ie = b.useCallback(
    (U) => {
      U.key === " " && ze(!0);
    },
    [ze]
  ), Je = b.useCallback(
    (U) => {
      U.key === " " && ze(!1);
    },
    [ze]
  );
  Vn(() => {
    if (!z.current)
      return;
    z.current.checked !== te && J(z.current.checked);
  }, [z.current]);
  const Ft = b.useCallback(
    (U = {}, ht = null) => {
      const Lt = (ao) => {
        ce && ao.preventDefault(), ze(!0);
      };
      return {
        ...U,
        ref: ht,
        "data-active": Q($e),
        "data-hover": Q(Z),
        "data-checked": Q(te),
        "data-focus": Q(ce),
        "data-focus-visible": Q(ce && I),
        "data-indeterminate": Q(g),
        "data-disabled": Q(r),
        "data-invalid": Q(i),
        "data-readonly": Q(n),
        "aria-hidden": !0,
        onMouseDown: je(U.onMouseDown, Lt),
        onMouseUp: je(U.onMouseUp, () => ze(!1)),
        onMouseEnter: je(
          U.onMouseEnter,
          () => ue(!0)
        ),
        onMouseLeave: je(
          U.onMouseLeave,
          () => ue(!1)
        )
      };
    },
    [
      $e,
      te,
      r,
      ce,
      I,
      Z,
      g,
      i,
      n
    ]
  ), kt = b.useCallback(
    (U = {}, ht = null) => ({
      ...U,
      ref: ht,
      "data-active": Q($e),
      "data-hover": Q(Z),
      "data-checked": Q(te),
      "data-focus": Q(ce),
      "data-focus-visible": Q(ce && I),
      "data-indeterminate": Q(g),
      "data-disabled": Q(r),
      "data-invalid": Q(i),
      "data-readonly": Q(n)
    }),
    [
      $e,
      te,
      r,
      ce,
      I,
      Z,
      g,
      i,
      n
    ]
  ), Dt = b.useCallback(
    (U = {}, ht = null) => ({
      ...A,
      ...U,
      ref: yn(ht, (Lt) => {
        Lt && V(Lt.tagName === "LABEL");
      }),
      onClick: je(U.onClick, () => {
        var Lt;
        N || ((Lt = z.current) == null || Lt.click(), requestAnimationFrame(() => {
          var ao;
          (ao = z.current) == null || ao.focus({ preventScroll: !0 });
        }));
      }),
      "data-disabled": Q(r),
      "data-checked": Q(te),
      "data-invalid": Q(i)
    }),
    [A, r, te, i, N]
  ), kn = b.useCallback(
    (U = {}, ht = null) => ({
      ...U,
      ref: yn(z, ht),
      type: "checkbox",
      name: y,
      value: x,
      id: a,
      tabIndex: m,
      onChange: je(U.onChange, wt),
      onBlur: je(
        U.onBlur,
        $,
        () => me(!1)
      ),
      onFocus: je(
        U.onFocus,
        M,
        () => me(!0)
      ),
      onKeyDown: je(U.onKeyDown, Ie),
      onKeyUp: je(U.onKeyUp, Je),
      required: o,
      checked: te,
      disabled: Se,
      readOnly: n,
      "aria-label": h,
      "aria-labelledby": v,
      "aria-invalid": w ? !!w : i,
      "aria-describedby": u,
      "aria-disabled": r,
      style: RL
    }),
    [
      y,
      x,
      a,
      wt,
      $,
      M,
      Ie,
      Je,
      o,
      te,
      Se,
      n,
      h,
      v,
      w,
      i,
      u,
      r,
      m
    ]
  ), io = b.useCallback(
    (U = {}, ht = null) => ({
      ...U,
      ref: ht,
      onMouseDown: je(U.onMouseDown, WL),
      "data-disabled": Q(r),
      "data-checked": Q(te),
      "data-invalid": Q(i)
    }),
    [te, r, i]
  );
  return {
    state: {
      isInvalid: i,
      isFocused: ce,
      isChecked: te,
      isActive: $e,
      isHovered: Z,
      isIndeterminate: g,
      isDisabled: r,
      isReadOnly: n,
      isRequired: o
    },
    getRootProps: Dt,
    getCheckboxProps: Ft,
    getIndicatorProps: kt,
    getInputProps: kn,
    getLabelProps: io,
    htmlProps: A
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
}, GL = Hu({
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
}), KL = Hu({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}), YL = Hu({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
}), nh = Ce(function(t, r) {
  const n = bL(), o = { ...n, ...t }, i = vi("Checkbox", o), a = br(t), {
    spacing: s = "0.5rem",
    className: l,
    children: u,
    iconColor: c,
    iconSize: d,
    icon: f = /* @__PURE__ */ _.jsx(kL, {}),
    isChecked: p,
    isDisabled: g = n == null ? void 0 : n.isDisabled,
    onChange: y,
    inputProps: x,
    ...m
  } = a;
  let h = p;
  n != null && n.value && a.value && (h = n.value.includes(a.value));
  let v = y;
  n != null && n.onChange && a.value && (v = eP(n.onChange, y));
  const {
    state: w,
    getInputProps: T,
    getCheckboxProps: A,
    getLabelProps: P,
    getRootProps: $
  } = VL({
    ...m,
    isDisabled: g,
    isChecked: h,
    onChange: v
  }), M = SL(w.isChecked), I = b.useMemo(
    () => ({
      animation: M ? w.isIndeterminate ? `${KL} 20ms linear, ${YL} 200ms linear` : `${GL} 200ms linear` : void 0,
      fontSize: d,
      color: c,
      ...i.icon
    }),
    [c, d, M, w.isIndeterminate, i.icon]
  ), H = b.cloneElement(f, {
    __css: I,
    isIndeterminate: w.isIndeterminate,
    isChecked: w.isChecked
  });
  return /* @__PURE__ */ _.jsxs(
    G.label,
    {
      __css: { ...HL, ...i.container },
      className: be("chakra-checkbox", l),
      ...$(),
      children: [
        /* @__PURE__ */ _.jsx(
          "input",
          {
            className: "chakra-checkbox__input",
            ...T(x, r)
          }
        ),
        /* @__PURE__ */ _.jsx(
          G.span,
          {
            __css: { ...UL, ...i.control },
            className: "chakra-checkbox__control",
            ...A(),
            children: H
          }
        ),
        u && /* @__PURE__ */ _.jsx(
          G.span,
          {
            className: "chakra-checkbox__label",
            ...P(),
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
function XL(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var oh = "data-focus-lock", uw = "data-focus-lock-disabled", qL = "data-no-focus-lock", QL = "data-autofocus-inside", ZL = "data-no-autofocus";
function JL(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function eO(e, t) {
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
function cw(e, t) {
  return eO(t || null, function(r) {
    return e.forEach(function(n) {
      return JL(n, r);
    });
  });
}
var kd = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, hr = function() {
  return hr = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, hr.apply(this, arguments);
};
function dw(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function tO(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function fw(e) {
  return e;
}
function hw(e, t) {
  t === void 0 && (t = fw);
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
function Zp(e, t) {
  return t === void 0 && (t = fw), hw(e, t);
}
function pw(e) {
  e === void 0 && (e = {});
  var t = hw(null);
  return t.options = hr({ async: !0, ssr: !1 }, e), t;
}
var mw = function(e) {
  var t = e.sideCar, r = dw(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return b.createElement(n, hr({}, r));
};
mw.isSideCarExport = !0;
function rO(e, t) {
  return e.useMedium(t), mw;
}
var vw = Zp({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), gw = Zp(), nO = Zp(), oO = pw({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), iO = [], Jp = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o = b.useState(), i = o[0], a = o[1], s = b.useRef(), l = b.useRef(!1), u = b.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, g = t.crossFrame, y = t.autoFocus;
  t.allowTextSelection;
  var x = t.group, m = t.className, h = t.whiteList, v = t.hasPositiveIndices, w = t.shards, T = w === void 0 ? iO : w, A = t.as, P = A === void 0 ? "div" : A, $ = t.lockProps, M = $ === void 0 ? {} : $, I = t.sideCar, H = t.returnFocus, ce = t.focusOptions, me = t.onActivation, Z = t.onDeactivation, ue = b.useState({}), $e = ue[0], ze = b.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && me && me(s.current), l.current = !0;
  }, [me]), z = b.useCallback(function() {
    l.current = !1, Z && Z(s.current);
  }, [Z]);
  b.useEffect(function() {
    d || (u.current = null);
  }, []);
  var N = b.useCallback(function(Ie) {
    var Je = u.current;
    if (Je && Je.focus) {
      var Ft = typeof H == "function" ? H(Je) : H;
      if (Ft) {
        var kt = typeof Ft == "object" ? Ft : void 0;
        u.current = null, Ie ? Promise.resolve().then(function() {
          return Je.focus(kt);
        }) : Je.focus(kt);
      }
    }
  }, [H]), V = b.useCallback(function(Ie) {
    l.current && vw.useMedium(Ie);
  }, []), j = gw.useMedium, J = b.useCallback(function(Ie) {
    s.current !== Ie && (s.current = Ie, a(Ie));
  }, []), W = Jn((n = {}, n[uw] = d && "disabled", n[oh] = x, n), M), te = f !== !0, wt = te && f !== "tail", Se = cw([r, J]);
  return /* @__PURE__ */ b.createElement(b.Fragment, null, te && [
    // nearest focus guard
    /* @__PURE__ */ b.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: kd
    }),
    // first tabbed element guard
    v ? /* @__PURE__ */ b.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: kd
    }) : null
  ], !d && /* @__PURE__ */ b.createElement(I, {
    id: $e,
    sideCar: oO,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: g,
    autoFocus: y,
    whiteList: h,
    shards: T,
    onActivation: ze,
    onDeactivation: z,
    returnFocus: N,
    focusOptions: ce
  }), /* @__PURE__ */ b.createElement(P, Jn({
    ref: Se
  }, W, {
    className: m,
    onBlur: j,
    onFocus: V
  }), c), wt && /* @__PURE__ */ b.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: kd
  }));
});
Jp.propTypes = {};
Jp.defaultProps = {
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
const yw = Jp;
function ih(e, t) {
  return ih = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, ih(e, t);
}
function aO(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ih(e, t);
}
function Ba(e) {
  "@babel/helpers - typeof";
  return Ba = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ba(e);
}
function sO(e, t) {
  if (Ba(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ba(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lO(e) {
  var t = sO(e, "string");
  return Ba(t) === "symbol" ? t : String(t);
}
function uO(e, t, r) {
  return t = lO(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function cO(e, t) {
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
      aO(c, u);
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
        return /* @__PURE__ */ Kn.createElement(o, this.props);
      }, c;
    }(b.PureComponent);
    return uO(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var Sr = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, fu = function(e) {
  return Array.isArray(e) ? e : [e];
}, bw = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, dO = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Sw = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, xw = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, fO = function(e, t) {
  return !e || xw(e) || !dO(e) && t(Sw(e));
}, ww = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = fO(t, ww.bind(void 0, e));
  return e.set(t, n), n;
}, hO = function(e, t) {
  return e && !xw(e) ? vO(e) ? t(Sw(e)) : !1 : !0;
}, kw = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = hO(t, kw.bind(void 0, e));
  return e.set(t, n), n;
}, Cw = function(e) {
  return e.dataset;
}, pO = function(e) {
  return e.tagName === "BUTTON";
}, _w = function(e) {
  return e.tagName === "INPUT";
}, Tw = function(e) {
  return _w(e) && e.type === "radio";
}, mO = function(e) {
  return !((_w(e) || pO(e)) && (e.type === "hidden" || e.disabled));
}, vO = function(e) {
  var t = e.getAttribute(ZL);
  return ![!0, "true", ""].includes(t);
}, em = function(e) {
  var t;
  return !!(e && (!((t = Cw(e)) === null || t === void 0) && t.focusGuard));
}, hu = function(e) {
  return !em(e);
}, gO = function(e) {
  return !!e;
}, yO = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, Pw = function(e, t, r) {
  return Sr(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(yO);
}, bO = [
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
], tm = bO.join(","), SO = "".concat(tm, ", [data-focus-guard]"), Ew = function(e, t) {
  return Sr((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? SO : tm) ? [n] : [], Ew(n));
  }, []);
}, xO = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? ic([e.contentDocument.body], t) : [e];
}, ic = function(e, t) {
  return e.reduce(function(r, n) {
    var o, i = Ew(n, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return xO(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      n.parentNode ? Sr(n.parentNode.querySelectorAll(tm)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, wO = function(e) {
  var t = e.querySelectorAll("[".concat(QL, "]"));
  return Sr(t).map(function(r) {
    return ic([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, rm = function(e, t) {
  return Sr(e).filter(function(r) {
    return ww(t, r);
  }).filter(function(r) {
    return mO(r);
  });
}, iy = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Sr(e).filter(function(r) {
    return kw(t, r);
  });
}, ah = function(e, t, r) {
  return Pw(rm(ic(e, r), t), !0, r);
}, ay = function(e, t) {
  return Pw(rm(ic(e), t), !1);
}, kO = function(e, t) {
  return rm(wO(e), t);
}, qo = function(e, t) {
  return e.shadowRoot ? qo(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Sr(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? qo(o, t) : !1;
    }
    return qo(r, t);
  });
}, CO = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var i = e[n].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, $w = function(e) {
  return e.parentNode ? $w(e.parentNode) : e;
}, nm = function(e) {
  var t = fu(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(oh);
    return r.push.apply(r, o ? CO(Sr($w(n).querySelectorAll("[".concat(oh, '="').concat(o, '"]:not([').concat(uw, '="disabled"])')))) : [n]), r;
  }, []);
}, _O = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Va = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Va(t.shadowRoot) : t instanceof HTMLIFrameElement && _O(function() {
      return t.contentWindow.document;
    }) ? Va(t.contentWindow.document) : t;
  }
}, TO = function(e, t) {
  return e === t;
}, PO = function(e, t) {
  return !!Sr(e.querySelectorAll("iframe")).some(function(r) {
    return TO(r, t);
  });
}, Aw = function(e, t) {
  return t === void 0 && (t = Va(bw(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : nm(e).some(function(r) {
    return qo(r, t) || PO(r, t);
  });
}, EO = function(e) {
  e === void 0 && (e = document);
  var t = Va(e);
  return t ? Sr(e.querySelectorAll("[".concat(qL, "]"))).some(function(r) {
    return qo(r, t);
  }) : !1;
}, $O = function(e, t) {
  return t.filter(Tw).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, om = function(e, t) {
  return Tw(e) && e.name ? $O(e, t) : e;
}, AO = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(om(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, sy = function(e) {
  return e[0] && e.length > 1 ? om(e[0], e) : e[0];
}, ly = function(e, t) {
  return e.length > 1 ? e.indexOf(om(e[t], e)) : t;
}, Rw = "NEW_FOCUS", RO = function(e, t, r, n) {
  var o = e.length, i = e[0], a = e[o - 1], s = em(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, u = n ? t.indexOf(n) : l, c = n ? e.indexOf(n) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), g = AO(t), y = r !== void 0 ? g.indexOf(r) : -1, x = y - (n ? g.indexOf(n) : l), m = ly(e, 0), h = ly(e, o - 1);
    if (l === -1 || c === -1)
      return Rw;
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
}, MO = function(e) {
  return function(t) {
    var r, n = (r = Cw(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, zO = function(e, t, r) {
  var n = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = iy(n.filter(MO(r)));
  return o && o.length ? sy(o) : sy(iy(t));
}, sh = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && sh(e.parentNode.host || e.parentNode, t), t;
}, Cd = function(e, t) {
  for (var r = sh(e), n = sh(t), o = 0; o < r.length; o += 1) {
    var i = r[o];
    if (n.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, Mw = function(e, t, r) {
  var n = fu(e), o = fu(t), i = n[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = Cd(a || s, s) || a, r.filter(Boolean).forEach(function(l) {
      var u = Cd(i, l);
      u && (!a || qo(u, a) ? a = u : a = Cd(u, a));
    });
  }), a;
}, IO = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(kO(n, t));
  }, []);
}, FO = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(gO);
}, DO = function(e, t) {
  var r = Va(fu(e).length > 0 ? document : bw(e).ownerDocument), n = nm(e).filter(hu), o = Mw(r || e, e, n), i = /* @__PURE__ */ new Map(), a = ay(n, i), s = ah(n, i).filter(function(p) {
    var g = p.node;
    return hu(g);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = ay([o], i).map(function(p) {
      var g = p.node;
      return g;
    }), u = FO(l, s), c = u.map(function(p) {
      var g = p.node;
      return g;
    }), d = RO(c, l, r, t);
    if (d === Rw) {
      var f = zO(a, c, IO(n, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, LO = function(e) {
  var t = nm(e).filter(hu), r = Mw(e, e, t), n = /* @__PURE__ */ new Map(), o = ah([r], n, !0), i = ah(t, n).filter(function(a) {
    var s = a.node;
    return hu(s);
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
      guard: em(s)
    };
  });
}, OO = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, _d = 0, Td = !1, zw = function(e, t, r) {
  r === void 0 && (r = {});
  var n = DO(e, t);
  if (!Td && n) {
    if (_d > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Td = !0, setTimeout(function() {
        Td = !1;
      }, 1);
      return;
    }
    _d++, OO(n.node, r.focusOptions), _d--;
  }
};
function im(e) {
  setTimeout(e, 1);
}
var NO = function() {
  return document && document.activeElement === document.body;
}, jO = function() {
  return NO() || EO();
}, Qo = null, Oo = null, Zo = null, Wa = !1, BO = function() {
  return !0;
}, VO = function(t) {
  return (Qo.whiteList || BO)(t);
}, WO = function(t, r) {
  Zo = {
    observerNode: t,
    portaledElement: r
  };
}, UO = function(t) {
  return Zo && Zo.portaledElement === t;
};
function uy(e, t, r, n) {
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
var HO = function(t) {
  return t && "current" in t ? t.current : t;
}, GO = function(t) {
  return t ? !!Wa : Wa === "meanwhile";
}, KO = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, YO = function(t, r) {
  return r.some(function(n) {
    return KO(t, n, n);
  });
}, pu = function() {
  var t = !1;
  if (Qo) {
    var r = Qo, n = r.observed, o = r.persistentFocus, i = r.autoFocus, a = r.shards, s = r.crossFrame, l = r.focusOptions, u = n || Zo && Zo.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(HO).filter(Boolean));
      if ((!c || VO(c)) && (o || GO(s) || !jO() || !Oo && i) && (u && !// active element is "inside" working area
      (Aw(d) || // check for shadow-dom contained elements
      c && YO(c, d) || UO(c)) && (document && !Oo && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = zw(d, Oo, {
        focusOptions: l
      }), Zo = {})), Wa = !1, Oo = document && document.activeElement), document) {
        var f = document && document.activeElement, p = LO(d), g = p.map(function(y) {
          var x = y.node;
          return x;
        }).indexOf(f);
        g > -1 && (p.filter(function(y) {
          var x = y.guard, m = y.node;
          return x && m.dataset.focusAutoGuard;
        }).forEach(function(y) {
          var x = y.node;
          return x.removeAttribute("tabIndex");
        }), uy(g, p.length, 1, p), uy(g, -1, -1, p));
      }
    }
  }
  return t;
}, Iw = function(t) {
  pu() && t && (t.stopPropagation(), t.preventDefault());
}, am = function() {
  return im(pu);
}, XO = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || WO(n, r);
}, qO = function() {
  return null;
}, Fw = function() {
  Wa = "just", im(function() {
    Wa = "meanwhile";
  });
}, QO = function() {
  document.addEventListener("focusin", Iw), document.addEventListener("focusout", am), window.addEventListener("blur", Fw);
}, ZO = function() {
  document.removeEventListener("focusin", Iw), document.removeEventListener("focusout", am), window.removeEventListener("blur", Fw);
};
function JO(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function eN(e) {
  var t = e.slice(-1)[0];
  t && !Qo && QO();
  var r = Qo, n = r && t && t.id === r.id;
  Qo = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === r.id;
  }).length || r.returnFocus(!t)), t ? (Oo = null, (!n || r.observed !== t.observed) && t.onActivation(), pu(), im(pu)) : (ZO(), Oo = null);
}
vw.assignSyncMedium(XO);
gw.assignMedium(am);
nO.assignMedium(function(e) {
  return e({
    moveFocusInside: zw,
    focusInside: Aw
  });
});
const tN = cO(JO, eN)(qO);
var Dw = /* @__PURE__ */ b.forwardRef(function(t, r) {
  return /* @__PURE__ */ b.createElement(yw, Jn({
    sideCar: tN,
    ref: r
  }, t));
}), Lw = yw.propTypes || {};
Lw.sideCar;
XL(Lw, ["sideCar"]);
Dw.propTypes = {};
const cy = Dw;
function rN(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function nN(e) {
  var t;
  if (!rN(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
var oN = (e) => e.hasAttribute("tabindex");
function iN(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function Ow(e) {
  return e.parentElement && Ow(e.parentElement) ? !0 : e.hidden;
}
function aN(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function sN(e) {
  if (!nN(e) || Ow(e) || iN(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : aN(e) ? !0 : oN(e);
}
var lN = [
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
], uN = lN.join(), cN = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function dN(e) {
  const t = Array.from(
    e.querySelectorAll(uN)
  );
  return t.unshift(e), t.filter((r) => sN(r) && cN(r));
}
var dy, fN = (dy = cy.default) != null ? dy : cy, Nw = (e) => {
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
    t != null && t.current ? t.current.focus() : n != null && n.current && dN(n.current).length === 0 && requestAnimationFrame(() => {
      var g;
      (g = n.current) == null || g.focus();
    });
  }, [t, n]), d = b.useCallback(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ _.jsx(
    fN,
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
Nw.displayName = "FocusLock";
var sm = Ce(function(t, r) {
  const { htmlSize: n, ...o } = t, i = vi("Input", o), a = br(o), s = AL(a), l = be("chakra-input", t.className);
  return /* @__PURE__ */ _.jsx(
    G.input,
    {
      size: n,
      ...s,
      __css: i.field,
      ref: r,
      className: l
    }
  );
});
sm.displayName = "Input";
sm.id = "Input";
var jw = Ce(function(t, r) {
  const n = mi("Link", t), { className: o, isExternal: i, ...a } = br(t);
  return /* @__PURE__ */ _.jsx(
    G.a,
    {
      target: i ? "_blank" : void 0,
      rel: i ? "noopener" : void 0,
      ref: r,
      className: be("chakra-link", o),
      ...a,
      __css: n
    }
  );
});
jw.displayName = "Link";
function hN(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : Kt(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
var lh = Ce(function(t, r) {
  const n = mi("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = br(t), u = r3({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ _.jsx(
    G.p,
    {
      ref: r,
      className: be("chakra-text", t.className),
      ...u,
      ...l,
      __css: n
    }
  );
});
lh.displayName = "Text";
var Bw = (e) => /* @__PURE__ */ _.jsx(
  G.div,
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
Bw.displayName = "StackItem";
function pN(e) {
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
    "&": hN(
      r,
      (o) => n[o]
    )
  };
}
var lm = Ce((e, t) => {
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
    () => pN({ spacing: a, direction: p }),
    [a, p]
  ), y = !!u, x = !d && !y, m = b.useMemo(() => {
    const v = vL(l);
    return x ? v : v.map((w, T) => {
      const A = typeof w.key < "u" ? w.key : T, P = T + 1 === v.length, M = d ? /* @__PURE__ */ _.jsx(Bw, { children: w }, A) : w;
      if (!y)
        return M;
      const I = b.cloneElement(
        u,
        {
          __css: g
        }
      ), H = P ? null : I;
      return /* @__PURE__ */ _.jsxs(b.Fragment, { children: [
        M,
        H
      ] }, A);
    });
  }, [
    u,
    g,
    y,
    x,
    d,
    l
  ]), h = be("chakra-stack", c);
  return /* @__PURE__ */ _.jsx(
    G.div,
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
lm.displayName = "Stack";
var Ua = Ce((e, t) => /* @__PURE__ */ _.jsx(lm, { align: "center", ...e, direction: "row", ref: t }));
Ua.displayName = "HStack";
var um = G("div");
um.displayName = "Box";
var Vw = Ce(function(t, r) {
  const { size: n, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ _.jsx(
    um,
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
Vw.displayName = "Square";
var mN = Ce(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ _.jsx(Vw, { size: n, ref: r, borderRadius: "9999px", ...o });
});
mN.displayName = "Circle";
var vN = Object.defineProperty, gN = (e, t, r) => t in e ? vN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, yN = (e, t, r) => (gN(e, typeof t != "symbol" ? t + "" : t, r), r), bN = class {
  constructor() {
    yN(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, uh = new bN();
function Ww(e, t) {
  const [r, n] = b.useState(0);
  return b.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = uh.add(o);
        n(i);
      }
      return () => {
        uh.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var SN = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ho = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), Ks = {}, Pd = 0, Uw = function(e) {
  return e && (e.host || Uw(e.parentNode));
}, xN = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Uw(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, wN = function(e, t, r, n) {
  var o = xN(t, Array.isArray(e) ? e : [e]);
  Ks[r] || (Ks[r] = /* @__PURE__ */ new WeakMap());
  var i = Ks[r], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(n), g = p !== null && p !== "false", y = (ho.get(f) || 0) + 1, x = (i.get(f) || 0) + 1;
        ho.set(f, y), i.set(f, x), a.push(f), y === 1 && g && Gs.set(f, !0), x === 1 && f.setAttribute(r, "true"), g || f.setAttribute(n, "true");
      }
    });
  };
  return c(t), s.clear(), Pd++, function() {
    a.forEach(function(d) {
      var f = ho.get(d) - 1, p = i.get(d) - 1;
      ho.set(d, f), i.set(d, p), f || (Gs.has(d) || d.removeAttribute(n), Gs.delete(d)), p || d.removeAttribute(r);
    }), Pd--, Pd || (ho = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), Ks = {});
  };
}, kN = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || SN(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), wN(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function CN(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = b.useRef(null), c = b.useRef(null), [d, f, p] = TN(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  _N(u, t && a);
  const g = Ww(u, t), y = b.useRef(null), x = b.useCallback((M) => {
    y.current = M.target;
  }, []), m = b.useCallback(
    (M) => {
      M.key === "Escape" && (M.stopPropagation(), i && (r == null || r()), l == null || l());
    },
    [i, r, l]
  ), [h, v] = b.useState(!1), [w, T] = b.useState(!1), A = b.useCallback(
    (M = {}, I = null) => ({
      role: "dialog",
      ...M,
      ref: yn(I, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": h ? f : void 0,
      "aria-describedby": w ? p : void 0,
      onClick: je(
        M.onClick,
        (H) => H.stopPropagation()
      )
    }),
    [p, w, d, f, h]
  ), P = b.useCallback(
    (M) => {
      M.stopPropagation(), y.current === M.target && uh.isTopModal(u.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), $ = b.useCallback(
    (M = {}, I = null) => ({
      ...M,
      ref: yn(I, c),
      onClick: je(M.onClick, P),
      onKeyDown: je(M.onKeyDown, m),
      onMouseDown: je(M.onMouseDown, x)
    }),
    [m, x, P]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: p,
    setBodyMounted: T,
    setHeaderMounted: v,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: A,
    getDialogContainerProps: $,
    index: g
  };
}
function _N(e, t) {
  const r = e.current;
  b.useEffect(() => {
    if (!(!e.current || !t))
      return kN(e.current);
  }, [t, e, r]);
}
function TN(e, ...t) {
  const r = b.useId(), n = e || r;
  return b.useMemo(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [PN, as] = it({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [EN, gi] = it({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), Hw = (e) => {
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
  } = t, y = vi("Modal", t), m = {
    ...CN(t),
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
  return /* @__PURE__ */ _.jsx(EN, { value: m, children: /* @__PURE__ */ _.jsx(PN, { value: y, children: /* @__PURE__ */ _.jsx(oc, { onExitComplete: g, children: m.isOpen && /* @__PURE__ */ _.jsx(Qa, { ...r, children: n }) }) }) });
};
Hw.displayName = "Modal";
var kl = "right-scroll-bar-position", Cl = "width-before-scroll-bar", $N = "with-scroll-bars-hidden", AN = "--removed-body-scroll-bar-size", Gw = pw(), Ed = function() {
}, ac = b.forwardRef(function(e, t) {
  var r = b.useRef(null), n = b.useState({
    onScrollCapture: Ed,
    onWheelCapture: Ed,
    onTouchMoveCapture: Ed
  }), o = n[0], i = n[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, g = e.inert, y = e.allowPinchZoom, x = e.as, m = x === void 0 ? "div" : x, h = e.gapMode, v = dw(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = f, T = cw([r, t]), A = hr(hr({}, v), o);
  return b.createElement(
    b.Fragment,
    null,
    c && b.createElement(w, { sideCar: Gw, removeScrollBar: u, shards: d, noIsolation: p, inert: g, setCallbacks: i, allowPinchZoom: !!y, lockRef: r, gapMode: h }),
    a ? b.cloneElement(b.Children.only(s), hr(hr({}, A), { ref: T })) : b.createElement(m, hr({}, A, { className: l, ref: T }), s)
  );
});
ac.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ac.classNames = {
  fullWidth: Cl,
  zeroRight: kl
};
var fy, RN = function() {
  if (fy)
    return fy;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function MN() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = RN();
  return t && e.setAttribute("nonce", t), e;
}
function zN(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function IN(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var FN = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = MN()) && (zN(t, r), IN(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, DN = function() {
  var e = FN();
  return function(t, r) {
    b.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Kw = function() {
  var e = DN(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, LN = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, $d = function(e) {
  return parseInt(e || "", 10) || 0;
}, ON = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [$d(r), $d(n), $d(o)];
}, NN = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return LN;
  var t = ON(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, jN = Kw(), BN = function(e, t, r, n) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat($N, ` {
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
  
  .`).concat(kl, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Cl, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(kl, " .").concat(kl, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Cl, " .").concat(Cl, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(AN, ": ").concat(s, `px;
  }
`);
}, VN = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, i = b.useMemo(function() {
    return NN(o);
  }, [o]);
  return b.createElement(jN, { styles: BN(i, !t, o, r ? "" : "!important") });
}, ch = !1;
if (typeof window < "u")
  try {
    var Ys = Object.defineProperty({}, "passive", {
      get: function() {
        return ch = !0, !0;
      }
    });
    window.addEventListener("test", Ys, Ys), window.removeEventListener("test", Ys, Ys);
  } catch {
    ch = !1;
  }
var po = ch ? { passive: !1 } : !1, WN = function(e) {
  return e.tagName === "TEXTAREA";
}, Yw = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !WN(e) && r[t] === "visible")
  );
}, UN = function(e) {
  return Yw(e, "overflowY");
}, HN = function(e) {
  return Yw(e, "overflowX");
}, hy = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Xw(e, n);
    if (o) {
      var i = qw(e, n), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, GN = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, KN = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Xw = function(e, t) {
  return e === "v" ? UN(t) : HN(t);
}, qw = function(e, t) {
  return e === "v" ? GN(t) : KN(t);
}, YN = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, XN = function(e, t, r, n, o) {
  var i = YN(e, window.getComputedStyle(t).direction), a = i * n, s = r.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = qw(e, s), g = p[0], y = p[1], x = p[2], m = y - x - i * g;
    (g || m) && Xw(e, s) && (d += m, f += g), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, Xs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, py = function(e) {
  return [e.deltaX, e.deltaY];
}, my = function(e) {
  return e && "current" in e ? e.current : e;
}, qN = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, QN = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ZN = 0, mo = [];
function JN(e) {
  var t = b.useRef([]), r = b.useRef([0, 0]), n = b.useRef(), o = b.useState(ZN++)[0], i = b.useState(Kw)[0], a = b.useRef(e);
  b.useEffect(function() {
    a.current = e;
  }, [e]), b.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = tO([e.lockRef.current], (e.shards || []).map(my), !0).filter(Boolean);
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
    var m = Xs(y), h = r.current, v = "deltaX" in y ? y.deltaX : h[0] - m[0], w = "deltaY" in y ? y.deltaY : h[1] - m[1], T, A = y.target, P = Math.abs(v) > Math.abs(w) ? "h" : "v";
    if ("touches" in y && P === "h" && A.type === "range")
      return !1;
    var $ = hy(P, A);
    if (!$)
      return !0;
    if ($ ? T = P : (T = P === "v" ? "h" : "v", $ = hy(P, A)), !$)
      return !1;
    if (!n.current && "changedTouches" in y && (v || w) && (n.current = T), !T)
      return !0;
    var M = n.current || T;
    return XN(M, x, y, M === "h" ? v : w, !0);
  }, []), l = b.useCallback(function(y) {
    var x = y;
    if (!(!mo.length || mo[mo.length - 1] !== i)) {
      var m = "deltaY" in x ? py(x) : Xs(x), h = t.current.filter(function(T) {
        return T.name === x.type && (T.target === x.target || x.target === T.shadowParent) && qN(T.delta, m);
      })[0];
      if (h && h.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!h) {
        var v = (a.current.shards || []).map(my).filter(Boolean).filter(function(T) {
          return T.contains(x.target);
        }), w = v.length > 0 ? s(x, v[0]) : !a.current.noIsolation;
        w && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = b.useCallback(function(y, x, m, h) {
    var v = { name: y, delta: x, target: m, should: h, shadowParent: ej(m) };
    t.current.push(v), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== v;
      });
    }, 1);
  }, []), c = b.useCallback(function(y) {
    r.current = Xs(y), n.current = void 0;
  }, []), d = b.useCallback(function(y) {
    u(y.type, py(y), y.target, s(y, e.lockRef.current));
  }, []), f = b.useCallback(function(y) {
    u(y.type, Xs(y), y.target, s(y, e.lockRef.current));
  }, []);
  b.useEffect(function() {
    return mo.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, po), document.addEventListener("touchmove", l, po), document.addEventListener("touchstart", c, po), function() {
      mo = mo.filter(function(y) {
        return y !== i;
      }), document.removeEventListener("wheel", l, po), document.removeEventListener("touchmove", l, po), document.removeEventListener("touchstart", c, po);
    };
  }, []);
  var p = e.removeScrollBar, g = e.inert;
  return b.createElement(
    b.Fragment,
    null,
    g ? b.createElement(i, { styles: QN(o) }) : null,
    p ? b.createElement(VN, { gapMode: e.gapMode }) : null
  );
}
function ej(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const tj = rO(Gw, JN);
var Qw = b.forwardRef(function(e, t) {
  return b.createElement(ac, hr({}, e, { ref: t, sideCar: tj }));
});
Qw.classNames = ac.classNames;
const rj = Qw;
function nj(e) {
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
  } = gi(), [f, p] = Ox();
  b.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const g = Ww(n, d);
  return /* @__PURE__ */ _.jsx(
    Nw,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ _.jsx(
        rj,
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
var [oj, ij] = it(), aj = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function sj(e, t) {
  var r, n;
  if (e)
    return (n = (r = aj[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function lj(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = Qb(), l = (t = s.components) == null ? void 0 : t.Drawer, u = sj(o, s.direction);
  return /* @__PURE__ */ _.jsx(oj, { value: { placement: u }, children: /* @__PURE__ */ _.jsx(
    Hw,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var uj = G(aw), Zw = Ce(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = gi(), c = s(a, t), d = l(i), f = be("chakra-modal__content", r), p = as(), g = {
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
    }, { placement: x } = ij();
    return /* @__PURE__ */ _.jsx(nj, { children: /* @__PURE__ */ _.jsx(
      G.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: y,
        children: /* @__PURE__ */ _.jsx(
          uj,
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
Zw.displayName = "DrawerContent";
var Jw = Ce(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: i } = gi();
    b.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = be("chakra-modal__header", r), l = {
      flex: 0,
      ...as().header
    };
    return /* @__PURE__ */ _.jsx(
      G.header,
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
Jw.displayName = "ModalHeader";
var cj = G(nc.div), ek = Ce(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...i } = e, a = be("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...as().overlay
    }, { motionPreset: u } = gi(), d = o || (u === "none" ? {} : iw);
    return /* @__PURE__ */ _.jsx(
      cj,
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
ek.displayName = "ModalOverlay";
var tk = Ce((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: i } = gi();
  b.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = be("chakra-modal__body", r), s = as();
  return /* @__PURE__ */ _.jsx(
    G.div,
    {
      ref: t,
      className: a,
      id: o,
      ...n,
      __css: s.body
    }
  );
});
tk.displayName = "ModalBody";
var rk = Ce(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: i } = gi(), a = be("chakra-modal__close-btn", n), s = as();
    return /* @__PURE__ */ _.jsx(
      Xp,
      {
        ref: t,
        __css: s.closeButton,
        className: a,
        onClick: je(r, (l) => {
          l.stopPropagation(), i();
        }),
        ...o
      }
    );
  }
);
rk.displayName = "ModalCloseButton";
var [
  dj,
  fj,
  hj,
  Aj
] = dL();
function pj(e) {
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
  } = e, [d, f] = b.useState(r ?? 0), [p, g] = fL({
    defaultValue: r ?? 0,
    value: o,
    onChange: n
  });
  b.useEffect(() => {
    o != null && f(o);
  }, [o]);
  const y = hj(), x = b.useId();
  return {
    id: `tabs-${(t = e.id) != null ? t : x}`,
    selectedIndex: p,
    focusedIndex: d,
    setSelectedIndex: g,
    setFocusedIndex: f,
    isManual: i,
    isLazy: a,
    lazyBehavior: s,
    orientation: l,
    descendants: y,
    direction: u,
    htmlProps: c
  };
}
var [mj, vj] = it({
  name: "TabsContext",
  errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"
});
function gj(e) {
  const { focusedIndex: t, orientation: r, direction: n } = vj(), o = fj(), i = b.useCallback(
    (a) => {
      const s = () => {
        var h;
        const v = o.nextEnabled(t);
        v && ((h = v.node) == null || h.focus());
      }, l = () => {
        var h;
        const v = o.prevEnabled(t);
        v && ((h = v.node) == null || h.focus());
      }, u = () => {
        var h;
        const v = o.firstEnabled();
        v && ((h = v.node) == null || h.focus());
      }, c = () => {
        var h;
        const v = o.lastEnabled();
        v && ((h = v.node) == null || h.focus());
      }, d = r === "horizontal", f = r === "vertical", p = a.key, g = n === "ltr" ? "ArrowLeft" : "ArrowRight", y = n === "ltr" ? "ArrowRight" : "ArrowLeft", m = {
        [g]: () => d && l(),
        [y]: () => d && s(),
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
    onKeyDown: je(e.onKeyDown, i)
  };
}
it({});
var [yj, bj] = it({
  name: "TabsStylesContext",
  errorMessage: `useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `
}), nk = Ce(function(t, r) {
  const n = vi("Tabs", t), { children: o, className: i, ...a } = br(t), { htmlProps: s, descendants: l, ...u } = pj(a), c = b.useMemo(() => u, [u]), { isFitted: d, ...f } = s, p = {
    position: "relative",
    ...n.root
  };
  return /* @__PURE__ */ _.jsx(dj, { value: l, children: /* @__PURE__ */ _.jsx(mj, { value: c, children: /* @__PURE__ */ _.jsx(yj, { value: n, children: /* @__PURE__ */ _.jsx(
    G.div,
    {
      className: be("chakra-tabs", i),
      ref: r,
      ...f,
      __css: p,
      children: o
    }
  ) }) }) });
});
nk.displayName = "Tabs";
var ok = Ce(function(t, r) {
  const n = gj({ ...t, ref: r }), i = {
    display: "flex",
    ...bj().tablist
  };
  return /* @__PURE__ */ _.jsx(
    G.div,
    {
      ...n,
      className: be("chakra-tabs__tablist", t.className),
      __css: i
    }
  );
});
ok.displayName = "TabList";
function Sj(e) {
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
function xj() {
  const [e, t] = b.useState([]), r = b.useRef({}), [n, o] = b.useState(
    "workflow-" + (/* @__PURE__ */ new Date()).getTime()
  ), [i, a] = b.useState("root"), s = () => {
    const u = /* @__PURE__ */ new Set();
    for (let c of Am.graph._nodes)
      c.type == "T2IAdapterLoader" && (c.type = "ControlNetLoader"), c.type == "ConditioningAverage " && (c.type = "ConditioningAverage"), c.type == "SDV_img2vid_Conditioning" && (c.type = "SVD_img2vid_Conditioning"), c.type in r.current || (c.type = Sj(c.type), u.add(c.type));
    t(Array.from(u));
  }, l = () => {
    const u = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(c) {
        console.log("ext.setup", c);
      },
      async addCustomNodeDefs(c) {
        console.log("addCustomNodeDefs in workspace manager", c), r.current = c;
      }
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    Am.registerExtension(u), setTimeout(() => {
      s();
    }, 500);
  };
  return b.useEffect(() => {
    l(), setInterval(() => {
      localStorage.getItem("workflow"), localStorage.setItem("latestWorkflow", n);
    }, 3e3);
  }, []), /* @__PURE__ */ _.jsxs(
    um,
    {
      style: {
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      },
      children: [
        /* @__PURE__ */ _.jsx(
          nk,
          {
            variant: "unstyled",
            style: {
              // backgroundColor: "white",
            },
            children: /* @__PURE__ */ _.jsxs(
              ok,
              {
                defaultValue: "ComfyUI",
                style: { padding: 8, marginLeft: 16 },
                justifyContent: "space-between",
                gap: 4,
                children: [
                  /* @__PURE__ */ _.jsx(Ua, { children: /* @__PURE__ */ _.jsx(
                    sm,
                    {
                      variant: "unstyled",
                      placeholder: "Workflow name",
                      color: "white",
                      value: n,
                      onChange: (u) => {
                        o(u.target.value);
                      }
                    }
                  ) }),
                  /* @__PURE__ */ _.jsx(Ua, { children: /* @__PURE__ */ _.jsx(
                    qp,
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
            )
          }
        ),
        /* @__PURE__ */ _.jsx(
          wj,
          {
            missingNodes: e,
            isOpen: i === "customNodes",
            onclose: () => {
              a("root"), console.log("close");
            }
          }
        )
      ]
    }
  );
}
function wj({
  missingNodes: e,
  isOpen: t,
  onclose: r
}) {
  const [n, o] = b.useState(e), [i, a] = b.useState([]);
  b.useState(""), b.useState(!1), b.useEffect(() => {
    o(e);
    const l = e.map((u) => u.replace(" ", "_"));
    console.log("nodeIDs", l), fetch("/workspace/find_nodes", {
      method: "POST",
      body: JSON.stringify({
        nodes: l
      })
    }).then((u) => u.json()).then((u) => {
      console.log("search_nodes res", u), a(u.filter((c) => c != null)), o(u.filter((c) => c != null).map((c) => c.id));
    });
  }, [e]);
  const s = (l) => {
    fetch("/workspace/install_nodes", {
      method: "POST",
      body: JSON.stringify({
        nodes: i.filter((u) => l.includes(u.id))
      })
    }).then((u) => u.json()).then((u) => {
      console.log("install res", u);
    });
  };
  return /* @__PURE__ */ _.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ _.jsxs(
    lj,
    {
      isOpen: t,
      placement: "right",
      onClose: () => r(),
      size: "sm",
      children: [
        /* @__PURE__ */ _.jsx(ek, {}),
        /* @__PURE__ */ _.jsxs(Zw, { children: [
          /* @__PURE__ */ _.jsx(rk, {}),
          /* @__PURE__ */ _.jsx(Jw, { children: "Custom Nodes" }),
          /* @__PURE__ */ _.jsxs(tk, { children: [
            /* @__PURE__ */ _.jsxs(Ua, { mb: 3, children: [
              /* @__PURE__ */ _.jsx(
                nh,
                {
                  mr: 6,
                  isChecked: n.length === i.length,
                  onChange: (l) => {
                    l.target.checked ? o([...i.map((u) => u.id)]) : o([]);
                  },
                  children: "Select All"
                }
              ),
              /* @__PURE__ */ _.jsxs(
                qp,
                {
                  onClick: () => {
                    console.log("onclick install missing nodes", n), s(n);
                  },
                  children: [
                    "Install Missing Nodes ",
                    n.length
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ _.jsx(lh, { mb: 3, color: "GrayText", fontSize: "small", children: "Unselectable nodes are not found in Github, they may be private repos" }),
            e.map((l) => {
              const u = i.find((c) => (c == null ? void 0 : c.id) === l);
              return /* @__PURE__ */ _.jsxs(lm, { gap: 0, mb: 2, children: [
                /* @__PURE__ */ _.jsxs(Ua, { children: [
                  /* @__PURE__ */ _.jsx(
                    nh,
                    {
                      isChecked: n.includes(l),
                      disabled: u == null,
                      onChange: (c) => {
                        c.target.checked ? o([...n, l]) : o(n.filter((d) => d !== l));
                      }
                    }
                  ),
                  /* @__PURE__ */ _.jsx("span", { children: l })
                ] }),
                u != null ? /* @__PURE__ */ _.jsx(
                  jw,
                  {
                    color: "teal.500",
                    href: u.gitHtmlUrl,
                    noOfLines: 1,
                    ml: 6,
                    children: u.gitHtmlUrl
                  }
                ) : /* @__PURE__ */ _.jsx(lh, {})
              ] });
            })
          ] })
        ] })
      ]
    }
  ) });
}
const ik = document.createElement("div");
document.body.prepend(ik);
const kj = {
  // initialColorMode: "light",
  // useSystemColorMode: false,
}, Cj = jz({ config: kj });
Ad.createRoot(ik).render(
  /* @__PURE__ */ _.jsx(Kn.StrictMode, { children: /* @__PURE__ */ _.jsxs(tL, { children: [
    /* @__PURE__ */ _.jsx(QT, { initialColorMode: Cj.config.initialColorMode }),
    /* @__PURE__ */ _.jsx(xj, {})
  ] }) })
);
