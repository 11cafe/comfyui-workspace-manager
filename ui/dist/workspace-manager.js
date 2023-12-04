import { app as Bd } from "/scripts/app.js";
function LC(e, t) {
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
var tn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ly = { exports: {} }, Cu = {}, Ny = { exports: {} }, K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Za = Symbol.for("react.element"), NC = Symbol.for("react.portal"), jC = Symbol.for("react.fragment"), BC = Symbol.for("react.strict_mode"), VC = Symbol.for("react.profiler"), WC = Symbol.for("react.provider"), UC = Symbol.for("react.context"), HC = Symbol.for("react.forward_ref"), GC = Symbol.for("react.suspense"), KC = Symbol.for("react.memo"), YC = Symbol.for("react.lazy"), Hm = Symbol.iterator;
function XC(e) {
  return e === null || typeof e != "object" ? null : (e = Hm && e[Hm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var jy = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, By = Object.assign, Vy = {};
function gi(e, t, r) {
  this.props = e, this.context = t, this.refs = Vy, this.updater = r || jy;
}
gi.prototype.isReactComponent = {};
gi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
gi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wy() {
}
Wy.prototype = gi.prototype;
function wh(e, t, r) {
  this.props = e, this.context = t, this.refs = Vy, this.updater = r || jy;
}
var kh = wh.prototype = new Wy();
kh.constructor = wh;
By(kh, gi.prototype);
kh.isPureReactComponent = !0;
var Gm = Array.isArray, Uy = Object.prototype.hasOwnProperty, Ch = { current: null }, Hy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gy(e, t, r) {
  var n, o = {}, i = null, a = null;
  if (t != null)
    for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Uy.call(t, n) && !Hy.hasOwnProperty(n) && (o[n] = t[n]);
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
  return { $$typeof: Za, type: e, key: i, ref: a, props: o, _owner: Ch.current };
}
function qC(e, t) {
  return { $$typeof: Za, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function _h(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Za;
}
function QC(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var Km = /\/+/g;
function Ec(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? QC("" + e.key) : t.toString(36);
}
function nl(e, t, r, n, o) {
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
          case Za:
          case NC:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = n === "" ? "." + Ec(a, 0) : n, Gm(o) ? (r = "", e != null && (r = e.replace(Km, "$&/") + "/"), nl(o, t, r, "", function(u) {
      return u;
    })) : o != null && (_h(o) && (o = qC(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Km, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, n = n === "" ? "." : n + ":", Gm(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = n + Ec(i, s);
      a += nl(i, t, r, l, o);
    }
  else if (l = XC(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = n + Ec(i, s++), a += nl(i, t, r, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function ws(e, t, r) {
  if (e == null)
    return e;
  var n = [], o = 0;
  return nl(e, n, "", "", function(i) {
    return t.call(r, i, o++);
  }), n;
}
function ZC(e) {
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
var ft = { current: null }, ol = { transition: null }, JC = { ReactCurrentDispatcher: ft, ReactCurrentBatchConfig: ol, ReactCurrentOwner: Ch };
K.Children = { map: ws, forEach: function(e, t, r) {
  ws(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return ws(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ws(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!_h(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
K.Component = gi;
K.Fragment = jC;
K.Profiler = VC;
K.PureComponent = wh;
K.StrictMode = BC;
K.Suspense = GC;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JC;
K.cloneElement = function(e, t, r) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = By({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = Ch.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      Uy.call(t, l) && !Hy.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
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
  return { $$typeof: Za, type: e.type, key: o, ref: i, props: n, _owner: a };
};
K.createContext = function(e) {
  return e = { $$typeof: UC, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: WC, _context: e }, e.Consumer = e;
};
K.createElement = Gy;
K.createFactory = function(e) {
  var t = Gy.bind(null, e);
  return t.type = e, t;
};
K.createRef = function() {
  return { current: null };
};
K.forwardRef = function(e) {
  return { $$typeof: HC, render: e };
};
K.isValidElement = _h;
K.lazy = function(e) {
  return { $$typeof: YC, _payload: { _status: -1, _result: e }, _init: ZC };
};
K.memo = function(e, t) {
  return { $$typeof: KC, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function(e) {
  var t = ol.transition;
  ol.transition = {};
  try {
    e();
  } finally {
    ol.transition = t;
  }
};
K.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
K.useCallback = function(e, t) {
  return ft.current.useCallback(e, t);
};
K.useContext = function(e) {
  return ft.current.useContext(e);
};
K.useDebugValue = function() {
};
K.useDeferredValue = function(e) {
  return ft.current.useDeferredValue(e);
};
K.useEffect = function(e, t) {
  return ft.current.useEffect(e, t);
};
K.useId = function() {
  return ft.current.useId();
};
K.useImperativeHandle = function(e, t, r) {
  return ft.current.useImperativeHandle(e, t, r);
};
K.useInsertionEffect = function(e, t) {
  return ft.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function(e, t) {
  return ft.current.useLayoutEffect(e, t);
};
K.useMemo = function(e, t) {
  return ft.current.useMemo(e, t);
};
K.useReducer = function(e, t, r) {
  return ft.current.useReducer(e, t, r);
};
K.useRef = function(e) {
  return ft.current.useRef(e);
};
K.useState = function(e) {
  return ft.current.useState(e);
};
K.useSyncExternalStore = function(e, t, r) {
  return ft.current.useSyncExternalStore(e, t, r);
};
K.useTransition = function() {
  return ft.current.useTransition();
};
K.version = "18.2.0";
Ny.exports = K;
var b = Ny.exports;
const Qn = /* @__PURE__ */ Qa(b), Ym = /* @__PURE__ */ LC({
  __proto__: null,
  default: Qn
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
var e_ = b, t_ = Symbol.for("react.element"), r_ = Symbol.for("react.fragment"), n_ = Object.prototype.hasOwnProperty, o_ = e_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ky(e, t, r) {
  var n, o = {}, i = null, a = null;
  r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (n in t)
    n_.call(t, n) && !i_.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in t = e.defaultProps, t)
      o[n] === void 0 && (o[n] = t[n]);
  return { $$typeof: t_, type: e, key: i, ref: a, props: o, _owner: o_.current };
}
Cu.Fragment = r_;
Cu.jsx = Ky;
Cu.jsxs = Ky;
Ly.exports = Cu;
var _ = Ly.exports, Vd = {}, Yy = { exports: {} }, It = {}, Xy = { exports: {} }, qy = {};
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
  function t(I, N) {
    var V = I.length;
    I.push(N);
    e:
      for (; 0 < V; ) {
        var j = V - 1 >>> 1, J = I[j];
        if (0 < o(J, N))
          I[j] = N, I[V] = J, V = j;
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
    var N = I[0], V = I.pop();
    if (V !== N) {
      I[0] = V;
      e:
        for (var j = 0, J = I.length, W = J >>> 1; j < W; ) {
          var te = 2 * (j + 1) - 1, kt = I[te], Se = te + 1, ze = I[Se];
          if (0 > o(kt, V))
            Se < J && 0 > o(ze, kt) ? (I[j] = ze, I[Se] = V, j = Se) : (I[j] = kt, I[te] = V, j = te);
          else if (Se < J && 0 > o(ze, V))
            I[j] = ze, I[Se] = V, j = Se;
          else
            break e;
        }
    }
    return N;
  }
  function o(I, N) {
    var V = I.sortIndex - N.sortIndex;
    return V !== 0 ? V : I.id - N.id;
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
  var l = [], u = [], c = 1, d = null, f = 3, h = !1, m = !1, y = !1, x = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(I) {
    for (var N = r(u); N !== null; ) {
      if (N.callback === null)
        n(u);
      else if (N.startTime <= I)
        n(u), N.sortIndex = N.expirationTime, t(l, N);
      else
        break;
      N = r(u);
    }
  }
  function w(I) {
    if (y = !1, g(I), !m)
      if (r(l) !== null)
        m = !0, $e(T);
      else {
        var N = r(u);
        N !== null && Ie(w, N.startTime - I);
      }
  }
  function T(I, N) {
    m = !1, y && (y = !1, v(A), A = -1), h = !0;
    var V = f;
    try {
      for (g(N), d = r(l); d !== null && (!(d.expirationTime > N) || I && !H()); ) {
        var j = d.callback;
        if (typeof j == "function") {
          d.callback = null, f = d.priorityLevel;
          var J = j(d.expirationTime <= N);
          N = e.unstable_now(), typeof J == "function" ? d.callback = J : d === r(l) && n(l), g(N);
        } else
          n(l);
        d = r(l);
      }
      if (d !== null)
        var W = !0;
      else {
        var te = r(u);
        te !== null && Ie(w, te.startTime - N), W = !1;
      }
      return W;
    } finally {
      d = null, f = V, h = !1;
    }
  }
  var $ = !1, P = null, A = -1, R = 5, z = -1;
  function H() {
    return !(e.unstable_now() - z < R);
  }
  function ce() {
    if (P !== null) {
      var I = e.unstable_now();
      z = I;
      var N = !0;
      try {
        N = P(!0, I);
      } finally {
        N ? me() : ($ = !1, P = null);
      }
    } else
      $ = !1;
  }
  var me;
  if (typeof p == "function")
    me = function() {
      p(ce);
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
  function $e(I) {
    P = I, $ || ($ = !0, me());
  }
  function Ie(I, N) {
    A = x(function() {
      I(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    m || h || (m = !0, $e(T));
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
        var N = 3;
        break;
      default:
        N = f;
    }
    var V = f;
    f = N;
    try {
      return I();
    } finally {
      f = V;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(I, N) {
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
    var V = f;
    f = I;
    try {
      return N();
    } finally {
      f = V;
    }
  }, e.unstable_scheduleCallback = function(I, N, V) {
    var j = e.unstable_now();
    switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? j + V : j) : V = j, I) {
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
    return J = V + J, I = { id: c++, callback: N, priorityLevel: I, startTime: V, expirationTime: J, sortIndex: -1 }, V > j ? (I.sortIndex = V, t(u, I), r(l) === null && I === r(u) && (y ? (v(A), A = -1) : y = !0, Ie(w, V - j))) : (I.sortIndex = J, t(l, I), m || h || (m = !0, $e(T))), I;
  }, e.unstable_shouldYield = H, e.unstable_wrapCallback = function(I) {
    var N = f;
    return function() {
      var V = f;
      f = N;
      try {
        return I.apply(this, arguments);
      } finally {
        f = V;
      }
    };
  };
})(qy);
Xy.exports = qy;
var a_ = Xy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qy = b, Rt = a_;
function M(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Zy = /* @__PURE__ */ new Set(), ba = {};
function io(e, t) {
  ii(e, t), ii(e + "Capture", t);
}
function ii(e, t) {
  for (ba[e] = t, e = 0; e < t.length; e++)
    Zy.add(t[e]);
}
var Or = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wd = Object.prototype.hasOwnProperty, s_ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xm = {}, qm = {};
function l_(e) {
  return Wd.call(qm, e) ? !0 : Wd.call(Xm, e) ? !1 : s_.test(e) ? qm[e] = !0 : (Xm[e] = !0, !1);
}
function u_(e, t, r, n) {
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
function c_(e, t, r, n) {
  if (t === null || typeof t > "u" || u_(e, t, r, n))
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
function ht(e, t, r, n, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var Je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Je[e] = new ht(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Je[t] = new ht(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Je[e] = new ht(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Je[e] = new ht(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Je[e] = new ht(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Je[e] = new ht(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Je[e] = new ht(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Je[e] = new ht(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Je[e] = new ht(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Th = /[\-:]([a-z])/g;
function Ph(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Th,
    Ph
  );
  Je[t] = new ht(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Th, Ph);
  Je[t] = new ht(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Th, Ph);
  Je[t] = new ht(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Je[e] = new ht(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Je.xlinkHref = new ht("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Je[e] = new ht(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Eh(e, t, r, n) {
  var o = Je.hasOwnProperty(t) ? Je[t] : null;
  (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (c_(t, r, o, n) && (r = null), n || o === null ? l_(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Wr = Qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ks = Symbol.for("react.element"), So = Symbol.for("react.portal"), xo = Symbol.for("react.fragment"), $h = Symbol.for("react.strict_mode"), Ud = Symbol.for("react.profiler"), Jy = Symbol.for("react.provider"), e1 = Symbol.for("react.context"), Ah = Symbol.for("react.forward_ref"), Hd = Symbol.for("react.suspense"), Gd = Symbol.for("react.suspense_list"), Rh = Symbol.for("react.memo"), Xr = Symbol.for("react.lazy"), t1 = Symbol.for("react.offscreen"), Qm = Symbol.iterator;
function Pi(e) {
  return e === null || typeof e != "object" ? null : (e = Qm && e[Qm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ee = Object.assign, $c;
function Vi(e) {
  if ($c === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      $c = t && t[1] || "";
    }
  return `
` + $c + e;
}
var Ac = !1;
function Rc(e, t) {
  if (!e || Ac)
    return "";
  Ac = !0;
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
    Ac = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? Vi(e) : "";
}
function d_(e) {
  switch (e.tag) {
    case 5:
      return Vi(e.type);
    case 16:
      return Vi("Lazy");
    case 13:
      return Vi("Suspense");
    case 19:
      return Vi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Rc(e.type, !1), e;
    case 11:
      return e = Rc(e.type.render, !1), e;
    case 1:
      return e = Rc(e.type, !0), e;
    default:
      return "";
  }
}
function Kd(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case xo:
      return "Fragment";
    case So:
      return "Portal";
    case Ud:
      return "Profiler";
    case $h:
      return "StrictMode";
    case Hd:
      return "Suspense";
    case Gd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case e1:
        return (e.displayName || "Context") + ".Consumer";
      case Jy:
        return (e._context.displayName || "Context") + ".Provider";
      case Ah:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Rh:
        return t = e.displayName || null, t !== null ? t : Kd(e.type) || "Memo";
      case Xr:
        t = e._payload, e = e._init;
        try {
          return Kd(e(t));
        } catch {
        }
    }
  return null;
}
function f_(e) {
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
      return Kd(t);
    case 8:
      return t === $h ? "StrictMode" : "Mode";
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
function gn(e) {
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
function r1(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function h_(e) {
  var t = r1(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
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
function Cs(e) {
  e._valueTracker || (e._valueTracker = h_(e));
}
function n1(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var r = t.getValue(), n = "";
  return e && (n = r1(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function Ml(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Yd(e, t) {
  var r = t.checked;
  return Ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function Zm(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = gn(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function o1(e, t) {
  t = t.checked, t != null && Eh(e, "checked", t, !1);
}
function Xd(e, t) {
  o1(e, t);
  var r = gn(t.value), n = t.type;
  if (r != null)
    n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? qd(e, t.type, r) : t.hasOwnProperty("defaultValue") && qd(e, t.type, gn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Jm(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function qd(e, t, r) {
  (t !== "number" || Ml(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Wi = Array.isArray;
function Wo(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < r.length; o++)
      t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      o = t.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + gn(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        e[o].selected = !0, n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Qd(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(M(91));
  return Ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ev(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null)
        throw Error(M(92));
      if (Wi(r)) {
        if (1 < r.length)
          throw Error(M(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: gn(r) };
}
function i1(e, t) {
  var r = gn(t.value), n = gn(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function tv(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function a1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Zd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? a1(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var _s, s1 = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (_s = _s || document.createElement("div"), _s.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = _s.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Sa(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ji = {
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
}, p_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ji).forEach(function(e) {
  p_.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ji[t] = Ji[e];
  });
});
function l1(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Ji.hasOwnProperty(e) && Ji[e] ? ("" + t).trim() : t + "px";
}
function u1(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0, o = l1(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o;
    }
}
var m_ = Ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Jd(e, t) {
  if (t) {
    if (m_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(M(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(M(62));
  }
}
function ef(e, t) {
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
var tf = null;
function Mh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var rf = null, Uo = null, Ho = null;
function rv(e) {
  if (e = ts(e)) {
    if (typeof rf != "function")
      throw Error(M(280));
    var t = e.stateNode;
    t && (t = $u(t), rf(e.stateNode, e.type, t));
  }
}
function c1(e) {
  Uo ? Ho ? Ho.push(e) : Ho = [e] : Uo = e;
}
function d1() {
  if (Uo) {
    var e = Uo, t = Ho;
    if (Ho = Uo = null, rv(e), t)
      for (e = 0; e < t.length; e++)
        rv(t[e]);
  }
}
function f1(e, t) {
  return e(t);
}
function h1() {
}
var Mc = !1;
function p1(e, t, r) {
  if (Mc)
    return e(t, r);
  Mc = !0;
  try {
    return f1(e, t, r);
  } finally {
    Mc = !1, (Uo !== null || Ho !== null) && (h1(), d1());
  }
}
function xa(e, t) {
  var r = e.stateNode;
  if (r === null)
    return null;
  var n = $u(r);
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
    throw Error(M(231, t, typeof r));
  return r;
}
var nf = !1;
if (Or)
  try {
    var Ei = {};
    Object.defineProperty(Ei, "passive", { get: function() {
      nf = !0;
    } }), window.addEventListener("test", Ei, Ei), window.removeEventListener("test", Ei, Ei);
  } catch {
    nf = !1;
  }
function v_(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var ea = !1, Il = null, zl = !1, of = null, g_ = { onError: function(e) {
  ea = !0, Il = e;
} };
function y_(e, t, r, n, o, i, a, s, l) {
  ea = !1, Il = null, v_.apply(g_, arguments);
}
function b_(e, t, r, n, o, i, a, s, l) {
  if (y_.apply(this, arguments), ea) {
    if (ea) {
      var u = Il;
      ea = !1, Il = null;
    } else
      throw Error(M(198));
    zl || (zl = !0, of = u);
  }
}
function ao(e) {
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
function m1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function nv(e) {
  if (ao(e) !== e)
    throw Error(M(188));
}
function S_(e) {
  var t = e.alternate;
  if (!t) {
    if (t = ao(e), t === null)
      throw Error(M(188));
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
          return nv(o), e;
        if (i === n)
          return nv(o), t;
        i = i.sibling;
      }
      throw Error(M(188));
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
          throw Error(M(189));
      }
    }
    if (r.alternate !== n)
      throw Error(M(190));
  }
  if (r.tag !== 3)
    throw Error(M(188));
  return r.stateNode.current === r ? e : t;
}
function v1(e) {
  return e = S_(e), e !== null ? g1(e) : null;
}
function g1(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = g1(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var y1 = Rt.unstable_scheduleCallback, ov = Rt.unstable_cancelCallback, x_ = Rt.unstable_shouldYield, w_ = Rt.unstable_requestPaint, Fe = Rt.unstable_now, k_ = Rt.unstable_getCurrentPriorityLevel, Ih = Rt.unstable_ImmediatePriority, b1 = Rt.unstable_UserBlockingPriority, Fl = Rt.unstable_NormalPriority, C_ = Rt.unstable_LowPriority, S1 = Rt.unstable_IdlePriority, _u = null, mr = null;
function __(e) {
  if (mr && typeof mr.onCommitFiberRoot == "function")
    try {
      mr.onCommitFiberRoot(_u, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var nr = Math.clz32 ? Math.clz32 : E_, T_ = Math.log, P_ = Math.LN2;
function E_(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (T_(e) / P_ | 0) | 0;
}
var Ts = 64, Ps = 4194304;
function Ui(e) {
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
function Dl(e, t) {
  var r = e.pendingLanes;
  if (r === 0)
    return 0;
  var n = 0, o = e.suspendedLanes, i = e.pingedLanes, a = r & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? n = Ui(s) : (i &= a, i !== 0 && (n = Ui(i)));
  } else
    a = r & ~o, a !== 0 ? n = Ui(a) : i !== 0 && (n = Ui(i));
  if (n === 0)
    return 0;
  if (t !== 0 && t !== n && !(t & o) && (o = n & -n, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= n; 0 < t; )
      r = 31 - nr(t), o = 1 << r, n |= e[r], t &= ~o;
  return n;
}
function $_(e, t) {
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
function A_(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - nr(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & r) || s & n) && (o[a] = $_(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function af(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function x1() {
  var e = Ts;
  return Ts <<= 1, !(Ts & 4194240) && (Ts = 64), e;
}
function Ic(e) {
  for (var t = [], r = 0; 31 > r; r++)
    t.push(e);
  return t;
}
function Ja(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - nr(t), e[t] = r;
}
function R_(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - nr(r), i = 1 << o;
    t[o] = 0, n[o] = -1, e[o] = -1, r &= ~i;
  }
}
function zh(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - nr(r), o = 1 << n;
    o & t | e[n] & t && (e[n] |= t), r &= ~o;
  }
}
var se = 0;
function w1(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var k1, Fh, C1, _1, T1, sf = !1, Es = [], an = null, sn = null, ln = null, wa = /* @__PURE__ */ new Map(), ka = /* @__PURE__ */ new Map(), Zr = [], M_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function iv(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      an = null;
      break;
    case "dragenter":
    case "dragleave":
      sn = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      wa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ka.delete(t.pointerId);
  }
}
function $i(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [o] }, t !== null && (t = ts(t), t !== null && Fh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function I_(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return an = $i(an, e, t, r, n, o), !0;
    case "dragenter":
      return sn = $i(sn, e, t, r, n, o), !0;
    case "mouseover":
      return ln = $i(ln, e, t, r, n, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return wa.set(i, $i(wa.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, ka.set(i, $i(ka.get(i) || null, e, t, r, n, o)), !0;
  }
  return !1;
}
function P1(e) {
  var t = Nn(e.target);
  if (t !== null) {
    var r = ao(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = m1(r), t !== null) {
          e.blockedOn = t, T1(e.priority, function() {
            C1(r);
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
function il(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = lf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      tf = n, r.target.dispatchEvent(n), tf = null;
    } else
      return t = ts(r), t !== null && Fh(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function av(e, t, r) {
  il(e) && r.delete(t);
}
function z_() {
  sf = !1, an !== null && il(an) && (an = null), sn !== null && il(sn) && (sn = null), ln !== null && il(ln) && (ln = null), wa.forEach(av), ka.forEach(av);
}
function Ai(e, t) {
  e.blockedOn === t && (e.blockedOn = null, sf || (sf = !0, Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority, z_)));
}
function Ca(e) {
  function t(o) {
    return Ai(o, e);
  }
  if (0 < Es.length) {
    Ai(Es[0], e);
    for (var r = 1; r < Es.length; r++) {
      var n = Es[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (an !== null && Ai(an, e), sn !== null && Ai(sn, e), ln !== null && Ai(ln, e), wa.forEach(t), ka.forEach(t), r = 0; r < Zr.length; r++)
    n = Zr[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Zr.length && (r = Zr[0], r.blockedOn === null); )
    P1(r), r.blockedOn === null && Zr.shift();
}
var Go = Wr.ReactCurrentBatchConfig, Ol = !0;
function F_(e, t, r, n) {
  var o = se, i = Go.transition;
  Go.transition = null;
  try {
    se = 1, Dh(e, t, r, n);
  } finally {
    se = o, Go.transition = i;
  }
}
function D_(e, t, r, n) {
  var o = se, i = Go.transition;
  Go.transition = null;
  try {
    se = 4, Dh(e, t, r, n);
  } finally {
    se = o, Go.transition = i;
  }
}
function Dh(e, t, r, n) {
  if (Ol) {
    var o = lf(e, t, r, n);
    if (o === null)
      Wc(e, t, n, Ll, r), iv(e, n);
    else if (I_(o, e, t, r, n))
      n.stopPropagation();
    else if (iv(e, n), t & 4 && -1 < M_.indexOf(e)) {
      for (; o !== null; ) {
        var i = ts(o);
        if (i !== null && k1(i), i = lf(e, t, r, n), i === null && Wc(e, t, n, Ll, r), i === o)
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else
      Wc(e, t, n, null, r);
  }
}
var Ll = null;
function lf(e, t, r, n) {
  if (Ll = null, e = Mh(n), e = Nn(e), e !== null)
    if (t = ao(e), t === null)
      e = null;
    else if (r = t.tag, r === 13) {
      if (e = m1(t), e !== null)
        return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Ll = e, null;
}
function E1(e) {
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
      switch (k_()) {
        case Ih:
          return 1;
        case b1:
          return 4;
        case Fl:
        case C_:
          return 16;
        case S1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rn = null, Oh = null, al = null;
function $1() {
  if (al)
    return al;
  var e, t = Oh, r = t.length, n, o = "value" in rn ? rn.value : rn.textContent, i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++)
    ;
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++)
    ;
  return al = o.slice(e, 1 < n ? 1 - n : void 0);
}
function sl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function $s() {
  return !0;
}
function sv() {
  return !1;
}
function zt(e) {
  function t(r, n, o, i, a) {
    this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? $s : sv, this.isPropagationStopped = sv, this;
  }
  return Ee(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = $s);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = $s);
  }, persist: function() {
  }, isPersistent: $s }), t;
}
var yi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Lh = zt(yi), es = Ee({}, yi, { view: 0, detail: 0 }), O_ = zt(es), zc, Fc, Ri, Tu = Ee({}, es, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nh, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ri && (Ri && e.type === "mousemove" ? (zc = e.screenX - Ri.screenX, Fc = e.screenY - Ri.screenY) : Fc = zc = 0, Ri = e), zc);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Fc;
} }), lv = zt(Tu), L_ = Ee({}, Tu, { dataTransfer: 0 }), N_ = zt(L_), j_ = Ee({}, es, { relatedTarget: 0 }), Dc = zt(j_), B_ = Ee({}, yi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), V_ = zt(B_), W_ = Ee({}, yi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), U_ = zt(W_), H_ = Ee({}, yi, { data: 0 }), uv = zt(H_), G_ = {
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
}, K_ = {
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
}, Y_ = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function X_(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Y_[e]) ? !!t[e] : !1;
}
function Nh() {
  return X_;
}
var q_ = Ee({}, es, { key: function(e) {
  if (e.key) {
    var t = G_[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = sl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? K_[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nh, charCode: function(e) {
  return e.type === "keypress" ? sl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? sl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Q_ = zt(q_), Z_ = Ee({}, Tu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cv = zt(Z_), J_ = Ee({}, es, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nh }), e2 = zt(J_), t2 = Ee({}, yi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), r2 = zt(t2), n2 = Ee({}, Tu, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), o2 = zt(n2), i2 = [9, 13, 27, 32], jh = Or && "CompositionEvent" in window, ta = null;
Or && "documentMode" in document && (ta = document.documentMode);
var a2 = Or && "TextEvent" in window && !ta, A1 = Or && (!jh || ta && 8 < ta && 11 >= ta), dv = " ", fv = !1;
function R1(e, t) {
  switch (e) {
    case "keyup":
      return i2.indexOf(t.keyCode) !== -1;
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
function M1(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var wo = !1;
function s2(e, t) {
  switch (e) {
    case "compositionend":
      return M1(t);
    case "keypress":
      return t.which !== 32 ? null : (fv = !0, dv);
    case "textInput":
      return e = t.data, e === dv && fv ? null : e;
    default:
      return null;
  }
}
function l2(e, t) {
  if (wo)
    return e === "compositionend" || !jh && R1(e, t) ? (e = $1(), al = Oh = rn = null, wo = !1, e) : null;
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
      return A1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var u2 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function hv(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!u2[e.type] : t === "textarea";
}
function I1(e, t, r, n) {
  c1(n), t = Nl(t, "onChange"), 0 < t.length && (r = new Lh("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var ra = null, _a = null;
function c2(e) {
  U1(e, 0);
}
function Pu(e) {
  var t = _o(e);
  if (n1(t))
    return e;
}
function d2(e, t) {
  if (e === "change")
    return t;
}
var z1 = !1;
if (Or) {
  var Oc;
  if (Or) {
    var Lc = "oninput" in document;
    if (!Lc) {
      var pv = document.createElement("div");
      pv.setAttribute("oninput", "return;"), Lc = typeof pv.oninput == "function";
    }
    Oc = Lc;
  } else
    Oc = !1;
  z1 = Oc && (!document.documentMode || 9 < document.documentMode);
}
function mv() {
  ra && (ra.detachEvent("onpropertychange", F1), _a = ra = null);
}
function F1(e) {
  if (e.propertyName === "value" && Pu(_a)) {
    var t = [];
    I1(t, _a, e, Mh(e)), p1(c2, t);
  }
}
function f2(e, t, r) {
  e === "focusin" ? (mv(), ra = t, _a = r, ra.attachEvent("onpropertychange", F1)) : e === "focusout" && mv();
}
function h2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Pu(_a);
}
function p2(e, t) {
  if (e === "click")
    return Pu(t);
}
function m2(e, t) {
  if (e === "input" || e === "change")
    return Pu(t);
}
function v2(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ir = typeof Object.is == "function" ? Object.is : v2;
function Ta(e, t) {
  if (ir(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Wd.call(t, o) || !ir(e[o], t[o]))
      return !1;
  }
  return !0;
}
function vv(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function gv(e, t) {
  var r = vv(e);
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
    r = vv(r);
  }
}
function D1(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? D1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function O1() {
  for (var e = window, t = Ml(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r)
      e = t.contentWindow;
    else
      break;
    t = Ml(e.document);
  }
  return t;
}
function Bh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function g2(e) {
  var t = O1(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && D1(r.ownerDocument.documentElement, r)) {
    if (n !== null && Bh(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r)
        r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = r.textContent.length, i = Math.min(n.start, o);
        n = n.end === void 0 ? i : Math.min(n.end, o), !e.extend && i > n && (o = n, n = i, i = o), o = gv(r, i);
        var a = gv(
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
var y2 = Or && "documentMode" in document && 11 >= document.documentMode, ko = null, uf = null, na = null, cf = !1;
function yv(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  cf || ko == null || ko !== Ml(n) || (n = ko, "selectionStart" in n && Bh(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), na && Ta(na, n) || (na = n, n = Nl(uf, "onSelect"), 0 < n.length && (t = new Lh("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = ko)));
}
function As(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var Co = { animationend: As("Animation", "AnimationEnd"), animationiteration: As("Animation", "AnimationIteration"), animationstart: As("Animation", "AnimationStart"), transitionend: As("Transition", "TransitionEnd") }, Nc = {}, L1 = {};
Or && (L1 = document.createElement("div").style, "AnimationEvent" in window || (delete Co.animationend.animation, delete Co.animationiteration.animation, delete Co.animationstart.animation), "TransitionEvent" in window || delete Co.transitionend.transition);
function Eu(e) {
  if (Nc[e])
    return Nc[e];
  if (!Co[e])
    return e;
  var t = Co[e], r;
  for (r in t)
    if (t.hasOwnProperty(r) && r in L1)
      return Nc[e] = t[r];
  return e;
}
var N1 = Eu("animationend"), j1 = Eu("animationiteration"), B1 = Eu("animationstart"), V1 = Eu("transitionend"), W1 = /* @__PURE__ */ new Map(), bv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function wn(e, t) {
  W1.set(e, t), io(t, [e]);
}
for (var jc = 0; jc < bv.length; jc++) {
  var Bc = bv[jc], b2 = Bc.toLowerCase(), S2 = Bc[0].toUpperCase() + Bc.slice(1);
  wn(b2, "on" + S2);
}
wn(N1, "onAnimationEnd");
wn(j1, "onAnimationIteration");
wn(B1, "onAnimationStart");
wn("dblclick", "onDoubleClick");
wn("focusin", "onFocus");
wn("focusout", "onBlur");
wn(V1, "onTransitionEnd");
ii("onMouseEnter", ["mouseout", "mouseover"]);
ii("onMouseLeave", ["mouseout", "mouseover"]);
ii("onPointerEnter", ["pointerout", "pointerover"]);
ii("onPointerLeave", ["pointerout", "pointerover"]);
io("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
io("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
io("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
io("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
io("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
io("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Hi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), x2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));
function Sv(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, b_(n, t, void 0, e), e.currentTarget = null;
}
function U1(e, t) {
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
          Sv(o, s, u), i = l;
        }
      else
        for (a = 0; a < n.length; a++) {
          if (s = n[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          Sv(o, s, u), i = l;
        }
    }
  }
  if (zl)
    throw e = of, zl = !1, of = null, e;
}
function ve(e, t) {
  var r = t[mf];
  r === void 0 && (r = t[mf] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (H1(t, e, 2, !1), r.add(n));
}
function Vc(e, t, r) {
  var n = 0;
  t && (n |= 4), H1(r, e, n, t);
}
var Rs = "_reactListening" + Math.random().toString(36).slice(2);
function Pa(e) {
  if (!e[Rs]) {
    e[Rs] = !0, Zy.forEach(function(r) {
      r !== "selectionchange" && (x2.has(r) || Vc(r, !1, e), Vc(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Rs] || (t[Rs] = !0, Vc("selectionchange", !1, t));
  }
}
function H1(e, t, r, n) {
  switch (E1(t)) {
    case 1:
      var o = F_;
      break;
    case 4:
      o = D_;
      break;
    default:
      o = Dh;
  }
  r = o.bind(null, t, r, e), o = void 0, !nf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: o }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, { passive: o }) : e.addEventListener(t, r, !1);
}
function Wc(e, t, r, n, o) {
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
            if (a = Nn(s), a === null)
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
  p1(function() {
    var u = i, c = Mh(r), d = [];
    e: {
      var f = W1.get(e);
      if (f !== void 0) {
        var h = Lh, m = e;
        switch (e) {
          case "keypress":
            if (sl(r) === 0)
              break e;
          case "keydown":
          case "keyup":
            h = Q_;
            break;
          case "focusin":
            m = "focus", h = Dc;
            break;
          case "focusout":
            m = "blur", h = Dc;
            break;
          case "beforeblur":
          case "afterblur":
            h = Dc;
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
            h = lv;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = N_;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = e2;
            break;
          case N1:
          case j1:
          case B1:
            h = V_;
            break;
          case V1:
            h = r2;
            break;
          case "scroll":
            h = O_;
            break;
          case "wheel":
            h = o2;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = U_;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = cv;
        }
        var y = (t & 4) !== 0, x = !y && e === "scroll", v = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var w = g.stateNode;
          if (g.tag === 5 && w !== null && (g = w, v !== null && (w = xa(p, v), w != null && y.push(Ea(p, w, g)))), x)
            break;
          p = p.return;
        }
        0 < y.length && (f = new h(f, m, null, r, c), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", f && r !== tf && (m = r.relatedTarget || r.fromElement) && (Nn(m) || m[Lr]))
          break e;
        if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, h ? (m = r.relatedTarget || r.toElement, h = u, m = m ? Nn(m) : null, m !== null && (x = ao(m), m !== x || m.tag !== 5 && m.tag !== 6) && (m = null)) : (h = null, m = u), h !== m)) {
          if (y = lv, w = "onMouseLeave", v = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (y = cv, w = "onPointerLeave", v = "onPointerEnter", p = "pointer"), x = h == null ? f : _o(h), g = m == null ? f : _o(m), f = new y(w, p + "leave", h, r, c), f.target = x, f.relatedTarget = g, w = null, Nn(c) === u && (y = new y(v, p + "enter", m, r, c), y.target = g, y.relatedTarget = x, w = y), x = w, h && m)
            t: {
              for (y = h, v = m, p = 0, g = y; g; g = po(g))
                p++;
              for (g = 0, w = v; w; w = po(w))
                g++;
              for (; 0 < p - g; )
                y = po(y), p--;
              for (; 0 < g - p; )
                v = po(v), g--;
              for (; p--; ) {
                if (y === v || v !== null && y === v.alternate)
                  break t;
                y = po(y), v = po(v);
              }
              y = null;
            }
          else
            y = null;
          h !== null && xv(d, f, h, y, !1), m !== null && x !== null && xv(d, x, m, y, !0);
        }
      }
      e: {
        if (f = u ? _o(u) : window, h = f.nodeName && f.nodeName.toLowerCase(), h === "select" || h === "input" && f.type === "file")
          var T = d2;
        else if (hv(f))
          if (z1)
            T = m2;
          else {
            T = h2;
            var $ = f2;
          }
        else
          (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (T = p2);
        if (T && (T = T(e, u))) {
          I1(d, T, r, c);
          break e;
        }
        $ && $(e, f, u), e === "focusout" && ($ = f._wrapperState) && $.controlled && f.type === "number" && qd(f, "number", f.value);
      }
      switch ($ = u ? _o(u) : window, e) {
        case "focusin":
          (hv($) || $.contentEditable === "true") && (ko = $, uf = u, na = null);
          break;
        case "focusout":
          na = uf = ko = null;
          break;
        case "mousedown":
          cf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          cf = !1, yv(d, r, c);
          break;
        case "selectionchange":
          if (y2)
            break;
        case "keydown":
        case "keyup":
          yv(d, r, c);
      }
      var P;
      if (jh)
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
        wo ? R1(e, r) && (A = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (A = "onCompositionStart");
      A && (A1 && r.locale !== "ko" && (wo || A !== "onCompositionStart" ? A === "onCompositionEnd" && wo && (P = $1()) : (rn = c, Oh = "value" in rn ? rn.value : rn.textContent, wo = !0)), $ = Nl(u, A), 0 < $.length && (A = new uv(A, e, null, r, c), d.push({ event: A, listeners: $ }), P ? A.data = P : (P = M1(r), P !== null && (A.data = P)))), (P = a2 ? s2(e, r) : l2(e, r)) && (u = Nl(u, "onBeforeInput"), 0 < u.length && (c = new uv("onBeforeInput", "beforeinput", null, r, c), d.push({ event: c, listeners: u }), c.data = P));
    }
    U1(d, t);
  });
}
function Ea(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Nl(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = xa(e, r), i != null && n.unshift(Ea(e, i, o)), i = xa(e, t), i != null && n.push(Ea(e, i, o))), e = e.return;
  }
  return n;
}
function po(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xv(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r, l = s.alternate, u = s.stateNode;
    if (l !== null && l === n)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = xa(r, i), l != null && a.unshift(Ea(r, l, s))) : o || (l = xa(r, i), l != null && a.push(Ea(r, l, s)))), r = r.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var w2 = /\r\n?/g, k2 = /\u0000|\uFFFD/g;
function wv(e) {
  return (typeof e == "string" ? e : "" + e).replace(w2, `
`).replace(k2, "");
}
function Ms(e, t, r) {
  if (t = wv(t), wv(e) !== t && r)
    throw Error(M(425));
}
function jl() {
}
var df = null, ff = null;
function hf(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var pf = typeof setTimeout == "function" ? setTimeout : void 0, C2 = typeof clearTimeout == "function" ? clearTimeout : void 0, kv = typeof Promise == "function" ? Promise : void 0, _2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof kv < "u" ? function(e) {
  return kv.resolve(null).then(e).catch(T2);
} : pf;
function T2(e) {
  setTimeout(function() {
    throw e;
  });
}
function Uc(e, t) {
  var r = t, n = 0;
  do {
    var o = r.nextSibling;
    if (e.removeChild(r), o && o.nodeType === 8)
      if (r = o.data, r === "/$") {
        if (n === 0) {
          e.removeChild(o), Ca(t);
          return;
        }
        n--;
      } else
        r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = o;
  } while (r);
  Ca(t);
}
function un(e) {
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
function Cv(e) {
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
var bi = Math.random().toString(36).slice(2), hr = "__reactFiber$" + bi, $a = "__reactProps$" + bi, Lr = "__reactContainer$" + bi, mf = "__reactEvents$" + bi, P2 = "__reactListeners$" + bi, E2 = "__reactHandles$" + bi;
function Nn(e) {
  var t = e[hr];
  if (t)
    return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[Lr] || r[hr]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
        for (e = Cv(e); e !== null; ) {
          if (r = e[hr])
            return r;
          e = Cv(e);
        }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function ts(e) {
  return e = e[hr] || e[Lr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function _o(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(M(33));
}
function $u(e) {
  return e[$a] || null;
}
var vf = [], To = -1;
function kn(e) {
  return { current: e };
}
function ye(e) {
  0 > To || (e.current = vf[To], vf[To] = null, To--);
}
function fe(e, t) {
  To++, vf[To] = e.current, e.current = t;
}
var yn = {}, it = kn(yn), yt = kn(!1), Zn = yn;
function ai(e, t) {
  var r = e.type.contextTypes;
  if (!r)
    return yn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in r)
    o[i] = t[i];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function bt(e) {
  return e = e.childContextTypes, e != null;
}
function Bl() {
  ye(yt), ye(it);
}
function _v(e, t, r) {
  if (it.current !== yn)
    throw Error(M(168));
  fe(it, t), fe(yt, r);
}
function G1(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function")
    return r;
  n = n.getChildContext();
  for (var o in n)
    if (!(o in t))
      throw Error(M(108, f_(e) || "Unknown", o));
  return Ee({}, r, n);
}
function Vl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yn, Zn = it.current, fe(it, e), fe(yt, yt.current), !0;
}
function Tv(e, t, r) {
  var n = e.stateNode;
  if (!n)
    throw Error(M(169));
  r ? (e = G1(e, t, Zn), n.__reactInternalMemoizedMergedChildContext = e, ye(yt), ye(it), fe(it, e)) : ye(yt), fe(yt, r);
}
var Tr = null, Au = !1, Hc = !1;
function K1(e) {
  Tr === null ? Tr = [e] : Tr.push(e);
}
function $2(e) {
  Au = !0, K1(e);
}
function Cn() {
  if (!Hc && Tr !== null) {
    Hc = !0;
    var e = 0, t = se;
    try {
      var r = Tr;
      for (se = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      Tr = null, Au = !1;
    } catch (o) {
      throw Tr !== null && (Tr = Tr.slice(e + 1)), y1(Ih, Cn), o;
    } finally {
      se = t, Hc = !1;
    }
  }
  return null;
}
var Po = [], Eo = 0, Wl = null, Ul = 0, Wt = [], Ut = 0, Jn = null, $r = 1, Ar = "";
function Mn(e, t) {
  Po[Eo++] = Ul, Po[Eo++] = Wl, Wl = e, Ul = t;
}
function Y1(e, t, r) {
  Wt[Ut++] = $r, Wt[Ut++] = Ar, Wt[Ut++] = Jn, Jn = e;
  var n = $r;
  e = Ar;
  var o = 32 - nr(n) - 1;
  n &= ~(1 << o), r += 1;
  var i = 32 - nr(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (n & (1 << a) - 1).toString(32), n >>= a, o -= a, $r = 1 << 32 - nr(t) + o | r << o | n, Ar = i + e;
  } else
    $r = 1 << i | r << o | n, Ar = e;
}
function Vh(e) {
  e.return !== null && (Mn(e, 1), Y1(e, 1, 0));
}
function Wh(e) {
  for (; e === Wl; )
    Wl = Po[--Eo], Po[Eo] = null, Ul = Po[--Eo], Po[Eo] = null;
  for (; e === Jn; )
    Jn = Wt[--Ut], Wt[Ut] = null, Ar = Wt[--Ut], Wt[Ut] = null, $r = Wt[--Ut], Wt[Ut] = null;
}
var Et = null, Pt = null, ke = !1, tr = null;
function X1(e, t) {
  var r = Ht(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function Pv(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Et = e, Pt = un(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Et = e, Pt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Jn !== null ? { id: $r, overflow: Ar } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Ht(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Et = e, Pt = null, !0) : !1;
    default:
      return !1;
  }
}
function gf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function yf(e) {
  if (ke) {
    var t = Pt;
    if (t) {
      var r = t;
      if (!Pv(e, t)) {
        if (gf(e))
          throw Error(M(418));
        t = un(r.nextSibling);
        var n = Et;
        t && Pv(e, t) ? X1(n, r) : (e.flags = e.flags & -4097 | 2, ke = !1, Et = e);
      }
    } else {
      if (gf(e))
        throw Error(M(418));
      e.flags = e.flags & -4097 | 2, ke = !1, Et = e;
    }
  }
}
function Ev(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Et = e;
}
function Is(e) {
  if (e !== Et)
    return !1;
  if (!ke)
    return Ev(e), ke = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !hf(e.type, e.memoizedProps)), t && (t = Pt)) {
    if (gf(e))
      throw q1(), Error(M(418));
    for (; t; )
      X1(e, t), t = un(t.nextSibling);
  }
  if (Ev(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Pt = un(e.nextSibling);
              break e;
            }
            t--;
          } else
            r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Pt = null;
    }
  } else
    Pt = Et ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function q1() {
  for (var e = Pt; e; )
    e = un(e.nextSibling);
}
function si() {
  Pt = Et = null, ke = !1;
}
function Uh(e) {
  tr === null ? tr = [e] : tr.push(e);
}
var A2 = Wr.ReactCurrentBatchConfig;
function Jt(e, t) {
  if (e && e.defaultProps) {
    t = Ee({}, t), e = e.defaultProps;
    for (var r in e)
      t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Hl = kn(null), Gl = null, $o = null, Hh = null;
function Gh() {
  Hh = $o = Gl = null;
}
function Kh(e) {
  var t = Hl.current;
  ye(Hl), e._currentValue = t;
}
function bf(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r)
      break;
    e = e.return;
  }
}
function Ko(e, t) {
  Gl = e, Hh = $o = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (gt = !0), e.firstContext = null);
}
function Xt(e) {
  var t = e._currentValue;
  if (Hh !== e)
    if (e = { context: e, memoizedValue: t, next: null }, $o === null) {
      if (Gl === null)
        throw Error(M(308));
      $o = e, Gl.dependencies = { lanes: 0, firstContext: e };
    } else
      $o = $o.next = e;
  return t;
}
var jn = null;
function Yh(e) {
  jn === null ? jn = [e] : jn.push(e);
}
function Q1(e, t, r, n) {
  var o = t.interleaved;
  return o === null ? (r.next = r, Yh(t)) : (r.next = o.next, o.next = r), t.interleaved = r, Nr(e, n);
}
function Nr(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var qr = !1;
function Xh(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Z1(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ir(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function cn(e, t, r) {
  var n = e.updateQueue;
  if (n === null)
    return null;
  if (n = n.shared, ee & 2) {
    var o = n.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, Nr(e, r);
  }
  return o = n.interleaved, o === null ? (t.next = t, Yh(n)) : (t.next = o.next, o.next = t), n.interleaved = t, Nr(e, r);
}
function ll(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, zh(e, r);
  }
}
function $v(e, t) {
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
function Kl(e, t, r, n) {
  var o = e.updateQueue;
  qr = !1;
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
      var f = s.lane, h = s.eventTime;
      if ((n & f) === f) {
        c !== null && (c = c.next = {
          eventTime: h,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var m = e, y = s;
          switch (f = t, h = r, y.tag) {
            case 1:
              if (m = y.payload, typeof m == "function") {
                d = m.call(h, d, f);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = m.flags & -65537 | 128;
            case 0:
              if (m = y.payload, f = typeof m == "function" ? m.call(h, d, f) : m, f == null)
                break e;
              d = Ee({}, d, f);
              break e;
            case 2:
              qr = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [s] : f.push(s));
      } else
        h = { eventTime: h, lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = h, l = d) : c = c.next = h, a |= f;
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
    to |= a, e.lanes = a, e.memoizedState = d;
  }
}
function Av(e, t, r) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var n = e[t], o = n.callback;
      if (o !== null) {
        if (n.callback = null, n = r, typeof o != "function")
          throw Error(M(191, o));
        o.call(n);
      }
    }
}
var J1 = new Qy.Component().refs;
function Sf(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : Ee({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Ru = { isMounted: function(e) {
  return (e = e._reactInternals) ? ao(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = ct(), o = fn(e), i = Ir(n, o);
  i.payload = t, r != null && (i.callback = r), t = cn(e, i, o), t !== null && (or(t, e, o, n), ll(t, e, o));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = ct(), o = fn(e), i = Ir(n, o);
  i.tag = 1, i.payload = t, r != null && (i.callback = r), t = cn(e, i, o), t !== null && (or(t, e, o, n), ll(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = ct(), n = fn(e), o = Ir(r, n);
  o.tag = 2, t != null && (o.callback = t), t = cn(e, o, n), t !== null && (or(t, e, n, r), ll(t, e, n));
} };
function Rv(e, t, r, n, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Ta(r, n) || !Ta(o, i) : !0;
}
function eb(e, t, r) {
  var n = !1, o = yn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Xt(i) : (o = bt(t) ? Zn : it.current, n = t.contextTypes, i = (n = n != null) ? ai(e, o) : yn), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ru, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Mv(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && Ru.enqueueReplaceState(t, t.state, null);
}
function xf(e, t, r, n) {
  var o = e.stateNode;
  o.props = r, o.state = e.memoizedState, o.refs = J1, Xh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Xt(i) : (i = bt(t) ? Zn : it.current, o.context = ai(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Sf(e, t, i, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ru.enqueueReplaceState(o, o.state, null), Kl(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Mi(e, t, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1)
          throw Error(M(309));
        var n = r.stateNode;
      }
      if (!n)
        throw Error(M(147, e));
      var o = n, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var s = o.refs;
        s === J1 && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(M(284));
    if (!r._owner)
      throw Error(M(290, e));
  }
  return e;
}
function zs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Iv(e) {
  var t = e._init;
  return t(e._payload);
}
function tb(e) {
  function t(v, p) {
    if (e) {
      var g = v.deletions;
      g === null ? (v.deletions = [p], v.flags |= 16) : g.push(p);
    }
  }
  function r(v, p) {
    if (!e)
      return null;
    for (; p !== null; )
      t(v, p), p = p.sibling;
    return null;
  }
  function n(v, p) {
    for (v = /* @__PURE__ */ new Map(); p !== null; )
      p.key !== null ? v.set(p.key, p) : v.set(p.index, p), p = p.sibling;
    return v;
  }
  function o(v, p) {
    return v = hn(v, p), v.index = 0, v.sibling = null, v;
  }
  function i(v, p, g) {
    return v.index = g, e ? (g = v.alternate, g !== null ? (g = g.index, g < p ? (v.flags |= 2, p) : g) : (v.flags |= 2, p)) : (v.flags |= 1048576, p);
  }
  function a(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function s(v, p, g, w) {
    return p === null || p.tag !== 6 ? (p = Zc(g, v.mode, w), p.return = v, p) : (p = o(p, g), p.return = v, p);
  }
  function l(v, p, g, w) {
    var T = g.type;
    return T === xo ? c(v, p, g.props.children, w, g.key) : p !== null && (p.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Xr && Iv(T) === p.type) ? (w = o(p, g.props), w.ref = Mi(v, p, g), w.return = v, w) : (w = pl(g.type, g.key, g.props, null, v.mode, w), w.ref = Mi(v, p, g), w.return = v, w);
  }
  function u(v, p, g, w) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = Jc(g, v.mode, w), p.return = v, p) : (p = o(p, g.children || []), p.return = v, p);
  }
  function c(v, p, g, w, T) {
    return p === null || p.tag !== 7 ? (p = Hn(g, v.mode, w, T), p.return = v, p) : (p = o(p, g), p.return = v, p);
  }
  function d(v, p, g) {
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return p = Zc("" + p, v.mode, g), p.return = v, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ks:
          return g = pl(p.type, p.key, p.props, null, v.mode, g), g.ref = Mi(v, null, p), g.return = v, g;
        case So:
          return p = Jc(p, v.mode, g), p.return = v, p;
        case Xr:
          var w = p._init;
          return d(v, w(p._payload), g);
      }
      if (Wi(p) || Pi(p))
        return p = Hn(p, v.mode, g, null), p.return = v, p;
      zs(v, p);
    }
    return null;
  }
  function f(v, p, g, w) {
    var T = p !== null ? p.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return T !== null ? null : s(v, p, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ks:
          return g.key === T ? l(v, p, g, w) : null;
        case So:
          return g.key === T ? u(v, p, g, w) : null;
        case Xr:
          return T = g._init, f(
            v,
            p,
            T(g._payload),
            w
          );
      }
      if (Wi(g) || Pi(g))
        return T !== null ? null : c(v, p, g, w, null);
      zs(v, g);
    }
    return null;
  }
  function h(v, p, g, w, T) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return v = v.get(g) || null, s(p, v, "" + w, T);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ks:
          return v = v.get(w.key === null ? g : w.key) || null, l(p, v, w, T);
        case So:
          return v = v.get(w.key === null ? g : w.key) || null, u(p, v, w, T);
        case Xr:
          var $ = w._init;
          return h(v, p, g, $(w._payload), T);
      }
      if (Wi(w) || Pi(w))
        return v = v.get(g) || null, c(p, v, w, T, null);
      zs(p, w);
    }
    return null;
  }
  function m(v, p, g, w) {
    for (var T = null, $ = null, P = p, A = p = 0, R = null; P !== null && A < g.length; A++) {
      P.index > A ? (R = P, P = null) : R = P.sibling;
      var z = f(v, P, g[A], w);
      if (z === null) {
        P === null && (P = R);
        break;
      }
      e && P && z.alternate === null && t(v, P), p = i(z, p, A), $ === null ? T = z : $.sibling = z, $ = z, P = R;
    }
    if (A === g.length)
      return r(v, P), ke && Mn(v, A), T;
    if (P === null) {
      for (; A < g.length; A++)
        P = d(v, g[A], w), P !== null && (p = i(P, p, A), $ === null ? T = P : $.sibling = P, $ = P);
      return ke && Mn(v, A), T;
    }
    for (P = n(v, P); A < g.length; A++)
      R = h(P, v, A, g[A], w), R !== null && (e && R.alternate !== null && P.delete(R.key === null ? A : R.key), p = i(R, p, A), $ === null ? T = R : $.sibling = R, $ = R);
    return e && P.forEach(function(H) {
      return t(v, H);
    }), ke && Mn(v, A), T;
  }
  function y(v, p, g, w) {
    var T = Pi(g);
    if (typeof T != "function")
      throw Error(M(150));
    if (g = T.call(g), g == null)
      throw Error(M(151));
    for (var $ = T = null, P = p, A = p = 0, R = null, z = g.next(); P !== null && !z.done; A++, z = g.next()) {
      P.index > A ? (R = P, P = null) : R = P.sibling;
      var H = f(v, P, z.value, w);
      if (H === null) {
        P === null && (P = R);
        break;
      }
      e && P && H.alternate === null && t(v, P), p = i(H, p, A), $ === null ? T = H : $.sibling = H, $ = H, P = R;
    }
    if (z.done)
      return r(
        v,
        P
      ), ke && Mn(v, A), T;
    if (P === null) {
      for (; !z.done; A++, z = g.next())
        z = d(v, z.value, w), z !== null && (p = i(z, p, A), $ === null ? T = z : $.sibling = z, $ = z);
      return ke && Mn(v, A), T;
    }
    for (P = n(v, P); !z.done; A++, z = g.next())
      z = h(P, v, A, z.value, w), z !== null && (e && z.alternate !== null && P.delete(z.key === null ? A : z.key), p = i(z, p, A), $ === null ? T = z : $.sibling = z, $ = z);
    return e && P.forEach(function(ce) {
      return t(v, ce);
    }), ke && Mn(v, A), T;
  }
  function x(v, p, g, w) {
    if (typeof g == "object" && g !== null && g.type === xo && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ks:
          e: {
            for (var T = g.key, $ = p; $ !== null; ) {
              if ($.key === T) {
                if (T = g.type, T === xo) {
                  if ($.tag === 7) {
                    r(v, $.sibling), p = o($, g.props.children), p.return = v, v = p;
                    break e;
                  }
                } else if ($.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Xr && Iv(T) === $.type) {
                  r(v, $.sibling), p = o($, g.props), p.ref = Mi(v, $, g), p.return = v, v = p;
                  break e;
                }
                r(v, $);
                break;
              } else
                t(v, $);
              $ = $.sibling;
            }
            g.type === xo ? (p = Hn(g.props.children, v.mode, w, g.key), p.return = v, v = p) : (w = pl(g.type, g.key, g.props, null, v.mode, w), w.ref = Mi(v, p, g), w.return = v, v = w);
          }
          return a(v);
        case So:
          e: {
            for ($ = g.key; p !== null; ) {
              if (p.key === $)
                if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                  r(v, p.sibling), p = o(p, g.children || []), p.return = v, v = p;
                  break e;
                } else {
                  r(v, p);
                  break;
                }
              else
                t(v, p);
              p = p.sibling;
            }
            p = Jc(g, v.mode, w), p.return = v, v = p;
          }
          return a(v);
        case Xr:
          return $ = g._init, x(v, p, $(g._payload), w);
      }
      if (Wi(g))
        return m(v, p, g, w);
      if (Pi(g))
        return y(v, p, g, w);
      zs(v, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, p !== null && p.tag === 6 ? (r(v, p.sibling), p = o(p, g), p.return = v, v = p) : (r(v, p), p = Zc(g, v.mode, w), p.return = v, v = p), a(v)) : r(v, p);
  }
  return x;
}
var li = tb(!0), rb = tb(!1), rs = {}, vr = kn(rs), Aa = kn(rs), Ra = kn(rs);
function Bn(e) {
  if (e === rs)
    throw Error(M(174));
  return e;
}
function qh(e, t) {
  switch (fe(Ra, t), fe(Aa, e), fe(vr, rs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Zd(t, e);
  }
  ye(vr), fe(vr, t);
}
function ui() {
  ye(vr), ye(Aa), ye(Ra);
}
function nb(e) {
  Bn(Ra.current);
  var t = Bn(vr.current), r = Zd(t, e.type);
  t !== r && (fe(Aa, e), fe(vr, r));
}
function Qh(e) {
  Aa.current === e && (ye(vr), ye(Aa));
}
var _e = kn(0);
function Yl(e) {
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
var Gc = [];
function Zh() {
  for (var e = 0; e < Gc.length; e++)
    Gc[e]._workInProgressVersionPrimary = null;
  Gc.length = 0;
}
var ul = Wr.ReactCurrentDispatcher, Kc = Wr.ReactCurrentBatchConfig, eo = 0, Pe = null, Be = null, He = null, Xl = !1, oa = !1, Ma = 0, R2 = 0;
function tt() {
  throw Error(M(321));
}
function Jh(e, t) {
  if (t === null)
    return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!ir(e[r], t[r]))
      return !1;
  return !0;
}
function ep(e, t, r, n, o, i) {
  if (eo = i, Pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ul.current = e === null || e.memoizedState === null ? F2 : D2, e = r(n, o), oa) {
    i = 0;
    do {
      if (oa = !1, Ma = 0, 25 <= i)
        throw Error(M(301));
      i += 1, He = Be = null, t.updateQueue = null, ul.current = O2, e = r(n, o);
    } while (oa);
  }
  if (ul.current = ql, t = Be !== null && Be.next !== null, eo = 0, He = Be = Pe = null, Xl = !1, t)
    throw Error(M(300));
  return e;
}
function tp() {
  var e = Ma !== 0;
  return Ma = 0, e;
}
function lr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return He === null ? Pe.memoizedState = He = e : He = He.next = e, He;
}
function qt() {
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
      throw Error(M(310));
    Be = e, e = { memoizedState: Be.memoizedState, baseState: Be.baseState, baseQueue: Be.baseQueue, queue: Be.queue, next: null }, He === null ? Pe.memoizedState = He = e : He = He.next = e;
  }
  return He;
}
function Ia(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Yc(e) {
  var t = qt(), r = t.queue;
  if (r === null)
    throw Error(M(311));
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
      if ((eo & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, a = n) : l = l.next = d, Pe.lanes |= c, to |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = n : l.next = s, ir(n, t.memoizedState) || (gt = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Pe.lanes |= i, to |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Xc(e) {
  var t = qt(), r = t.queue;
  if (r === null)
    throw Error(M(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch, o = r.pending, i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var a = o = o.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== o);
    ir(i, t.memoizedState) || (gt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i;
  }
  return [i, n];
}
function ob() {
}
function ib(e, t) {
  var r = Pe, n = qt(), o = t(), i = !ir(n.memoizedState, o);
  if (i && (n.memoizedState = o, gt = !0), n = n.queue, rp(lb.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || He !== null && He.memoizedState.tag & 1) {
    if (r.flags |= 2048, za(9, sb.bind(null, r, n, o, t), void 0, null), Ge === null)
      throw Error(M(349));
    eo & 30 || ab(r, t, o);
  }
  return o;
}
function ab(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Pe.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function sb(e, t, r, n) {
  t.value = r, t.getSnapshot = n, ub(t) && cb(e);
}
function lb(e, t, r) {
  return r(function() {
    ub(t) && cb(e);
  });
}
function ub(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !ir(e, r);
  } catch {
    return !0;
  }
}
function cb(e) {
  var t = Nr(e, 1);
  t !== null && or(t, e, 1, -1);
}
function zv(e) {
  var t = lr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ia, lastRenderedState: e }, t.queue = e, e = e.dispatch = z2.bind(null, Pe, e), [t.memoizedState, e];
}
function za(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = Pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Pe.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function db() {
  return qt().memoizedState;
}
function cl(e, t, r, n) {
  var o = lr();
  Pe.flags |= e, o.memoizedState = za(1 | t, r, void 0, n === void 0 ? null : n);
}
function Mu(e, t, r, n) {
  var o = qt();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (Be !== null) {
    var a = Be.memoizedState;
    if (i = a.destroy, n !== null && Jh(n, a.deps)) {
      o.memoizedState = za(t, r, i, n);
      return;
    }
  }
  Pe.flags |= e, o.memoizedState = za(1 | t, r, i, n);
}
function Fv(e, t) {
  return cl(8390656, 8, e, t);
}
function rp(e, t) {
  return Mu(2048, 8, e, t);
}
function fb(e, t) {
  return Mu(4, 2, e, t);
}
function hb(e, t) {
  return Mu(4, 4, e, t);
}
function pb(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function mb(e, t, r) {
  return r = r != null ? r.concat([e]) : null, Mu(4, 4, pb.bind(null, t, e), r);
}
function np() {
}
function vb(e, t) {
  var r = qt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Jh(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function gb(e, t) {
  var r = qt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Jh(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function yb(e, t, r) {
  return eo & 21 ? (ir(r, t) || (r = x1(), Pe.lanes |= r, to |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, gt = !0), e.memoizedState = r);
}
function M2(e, t) {
  var r = se;
  se = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = Kc.transition;
  Kc.transition = {};
  try {
    e(!1), t();
  } finally {
    se = r, Kc.transition = n;
  }
}
function bb() {
  return qt().memoizedState;
}
function I2(e, t, r) {
  var n = fn(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, Sb(e))
    xb(t, r);
  else if (r = Q1(e, t, r, n), r !== null) {
    var o = ct();
    or(r, e, n, o), wb(r, t, n);
  }
}
function z2(e, t, r) {
  var n = fn(e), o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Sb(e))
    xb(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, r);
        if (o.hasEagerState = !0, o.eagerState = s, ir(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Yh(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    r = Q1(e, t, o, n), r !== null && (o = ct(), or(r, e, n, o), wb(r, t, n));
  }
}
function Sb(e) {
  var t = e.alternate;
  return e === Pe || t !== null && t === Pe;
}
function xb(e, t) {
  oa = Xl = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function wb(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, zh(e, r);
  }
}
var ql = { readContext: Xt, useCallback: tt, useContext: tt, useEffect: tt, useImperativeHandle: tt, useInsertionEffect: tt, useLayoutEffect: tt, useMemo: tt, useReducer: tt, useRef: tt, useState: tt, useDebugValue: tt, useDeferredValue: tt, useTransition: tt, useMutableSource: tt, useSyncExternalStore: tt, useId: tt, unstable_isNewReconciler: !1 }, F2 = { readContext: Xt, useCallback: function(e, t) {
  return lr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Xt, useEffect: Fv, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, cl(
    4194308,
    4,
    pb.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return cl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return cl(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = lr();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = lr();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = I2.bind(null, Pe, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = lr();
  return e = { current: e }, t.memoizedState = e;
}, useState: zv, useDebugValue: np, useDeferredValue: function(e) {
  return lr().memoizedState = e;
}, useTransition: function() {
  var e = zv(!1), t = e[0];
  return e = M2.bind(null, e[1]), lr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = Pe, o = lr();
  if (ke) {
    if (r === void 0)
      throw Error(M(407));
    r = r();
  } else {
    if (r = t(), Ge === null)
      throw Error(M(349));
    eo & 30 || ab(n, t, r);
  }
  o.memoizedState = r;
  var i = { value: r, getSnapshot: t };
  return o.queue = i, Fv(lb.bind(
    null,
    n,
    i,
    e
  ), [e]), n.flags |= 2048, za(9, sb.bind(null, n, i, r, t), void 0, null), r;
}, useId: function() {
  var e = lr(), t = Ge.identifierPrefix;
  if (ke) {
    var r = Ar, n = $r;
    r = (n & ~(1 << 32 - nr(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Ma++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else
    r = R2++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, D2 = {
  readContext: Xt,
  useCallback: vb,
  useContext: Xt,
  useEffect: rp,
  useImperativeHandle: mb,
  useInsertionEffect: fb,
  useLayoutEffect: hb,
  useMemo: gb,
  useReducer: Yc,
  useRef: db,
  useState: function() {
    return Yc(Ia);
  },
  useDebugValue: np,
  useDeferredValue: function(e) {
    var t = qt();
    return yb(t, Be.memoizedState, e);
  },
  useTransition: function() {
    var e = Yc(Ia)[0], t = qt().memoizedState;
    return [e, t];
  },
  useMutableSource: ob,
  useSyncExternalStore: ib,
  useId: bb,
  unstable_isNewReconciler: !1
}, O2 = { readContext: Xt, useCallback: vb, useContext: Xt, useEffect: rp, useImperativeHandle: mb, useInsertionEffect: fb, useLayoutEffect: hb, useMemo: gb, useReducer: Xc, useRef: db, useState: function() {
  return Xc(Ia);
}, useDebugValue: np, useDeferredValue: function(e) {
  var t = qt();
  return Be === null ? t.memoizedState = e : yb(t, Be.memoizedState, e);
}, useTransition: function() {
  var e = Xc(Ia)[0], t = qt().memoizedState;
  return [e, t];
}, useMutableSource: ob, useSyncExternalStore: ib, useId: bb, unstable_isNewReconciler: !1 };
function ci(e, t) {
  try {
    var r = "", n = t;
    do
      r += d_(n), n = n.return;
    while (n);
    var o = r;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function qc(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function wf(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var L2 = typeof WeakMap == "function" ? WeakMap : Map;
function kb(e, t, r) {
  r = Ir(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    Zl || (Zl = !0, Mf = n), wf(e, t);
  }, r;
}
function Cb(e, t, r) {
  r = Ir(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    r.payload = function() {
      return n(o);
    }, r.callback = function() {
      wf(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
    wf(e, t), typeof n != "function" && (dn === null ? dn = /* @__PURE__ */ new Set([this]) : dn.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), r;
}
function Dv(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new L2();
    var o = /* @__PURE__ */ new Set();
    n.set(t, o);
  } else
    o = n.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), n.set(t, o));
  o.has(r) || (o.add(r), e = Z2.bind(null, e, t, r), t.then(e, e));
}
function Ov(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Lv(e, t, r, n, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Ir(-1, 1), t.tag = 2, cn(r, t, 1))), r.lanes |= 1), e);
}
var N2 = Wr.ReactCurrentOwner, gt = !1;
function lt(e, t, r, n) {
  t.child = e === null ? rb(t, null, r, n) : li(t, e.child, r, n);
}
function Nv(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return Ko(t, o), n = ep(e, t, r, n, i, o), r = tp(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jr(e, t, o)) : (ke && r && Vh(t), t.flags |= 1, lt(e, t, n, o), t.child);
}
function jv(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" && !dp(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, _b(e, t, i, n, o)) : (e = pl(r.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (r = r.compare, r = r !== null ? r : Ta, r(a, n) && e.ref === t.ref)
      return jr(e, t, o);
  }
  return t.flags |= 1, e = hn(i, n), e.ref = t.ref, e.return = t, t.child = e;
}
function _b(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ta(i, n) && e.ref === t.ref)
      if (gt = !1, t.pendingProps = n = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (gt = !0);
      else
        return t.lanes = e.lanes, jr(e, t, o);
  }
  return kf(e, t, r, n, o);
}
function Tb(e, t, r) {
  var n = t.pendingProps, o = n.children, i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, fe(Ro, Tt), Tt |= r;
    else {
      if (!(r & 1073741824))
        return e = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, fe(Ro, Tt), Tt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = i !== null ? i.baseLanes : r, fe(Ro, Tt), Tt |= n;
    }
  else
    i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, fe(Ro, Tt), Tt |= n;
  return lt(e, t, o, r), t.child;
}
function Pb(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function kf(e, t, r, n, o) {
  var i = bt(r) ? Zn : it.current;
  return i = ai(t, i), Ko(t, o), r = ep(e, t, r, n, i, o), n = tp(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jr(e, t, o)) : (ke && n && Vh(t), t.flags |= 1, lt(e, t, r, o), t.child);
}
function Bv(e, t, r, n, o) {
  if (bt(r)) {
    var i = !0;
    Vl(t);
  } else
    i = !1;
  if (Ko(t, o), t.stateNode === null)
    dl(e, t), eb(t, r, n), xf(t, r, n, o), n = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = Xt(u) : (u = bt(r) ? Zn : it.current, u = ai(t, u));
    var c = r.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || l !== u) && Mv(t, a, n, u), qr = !1;
    var f = t.memoizedState;
    a.state = f, Kl(t, n, a, o), l = t.memoizedState, s !== n || f !== l || yt.current || qr ? (typeof c == "function" && (Sf(t, r, c, n), l = t.memoizedState), (s = qr || Rv(t, r, s, n, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = u, n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    a = t.stateNode, Z1(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Jt(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = Xt(l) : (l = bt(r) ? Zn : it.current, l = ai(t, l));
    var h = r.getDerivedStateFromProps;
    (c = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && Mv(t, a, n, l), qr = !1, f = t.memoizedState, a.state = f, Kl(t, n, a, o);
    var m = t.memoizedState;
    s !== d || f !== m || yt.current || qr ? (typeof h == "function" && (Sf(t, r, h, n), m = t.memoizedState), (u = qr || Rv(t, r, u, n, f, m, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, m, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, m, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = m), a.props = n, a.state = m, a.context = l, n = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return Cf(e, t, r, n, i, o);
}
function Cf(e, t, r, n, o, i) {
  Pb(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a)
    return o && Tv(t, r, !1), jr(e, t, i);
  n = t.stateNode, N2.current = t;
  var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && a ? (t.child = li(t, e.child, null, i), t.child = li(t, null, s, i)) : lt(e, t, s, i), t.memoizedState = n.state, o && Tv(t, r, !0), t.child;
}
function Eb(e) {
  var t = e.stateNode;
  t.pendingContext ? _v(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _v(e, t.context, !1), qh(e, t.containerInfo);
}
function Vv(e, t, r, n, o) {
  return si(), Uh(o), t.flags |= 256, lt(e, t, r, n), t.child;
}
var _f = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $b(e, t, r) {
  var n = t.pendingProps, o = _e.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), fe(_e, o & 1), e === null)
    return yf(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Fu(a, n, 0, null), e = Hn(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Tf(r), t.memoizedState = _f, e) : op(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return j2(e, t, a, n, s, o, r);
  if (i) {
    i = n.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(a & 1) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = hn(o, l), n.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = hn(s, i) : (i = Hn(i, a, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, a = e.child.memoizedState, a = a === null ? Tf(r) : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~r, t.memoizedState = _f, n;
  }
  return i = e.child, e = i.sibling, n = hn(i, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function op(e, t) {
  return t = Fu({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Fs(e, t, r, n) {
  return n !== null && Uh(n), li(t, e.child, null, r), e = op(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function j2(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = qc(Error(M(422))), Fs(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, o = t.mode, n = Fu({ mode: "visible", children: n.children }, o, 0, null), i = Hn(i, o, a, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, t.mode & 1 && li(t, e.child, null, a), t.child.memoizedState = Tf(a), t.memoizedState = _f, i);
  if (!(t.mode & 1))
    return Fs(e, t, a, null);
  if (o.data === "$!") {
    if (n = o.nextSibling && o.nextSibling.dataset, n)
      var s = n.dgst;
    return n = s, i = Error(M(419)), n = qc(i, n, void 0), Fs(e, t, a, n);
  }
  if (s = (a & e.childLanes) !== 0, gt || s) {
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
      o = o & (n.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Nr(e, o), or(n, e, o, -1));
    }
    return cp(), n = qc(Error(M(421))), Fs(e, t, a, n);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = J2.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Pt = un(o.nextSibling), Et = t, ke = !0, tr = null, e !== null && (Wt[Ut++] = $r, Wt[Ut++] = Ar, Wt[Ut++] = Jn, $r = e.id, Ar = e.overflow, Jn = t), t = op(t, n.children), t.flags |= 4096, t);
}
function Wv(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), bf(e.return, t, r);
}
function Qc(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = o);
}
function Ab(e, t, r) {
  var n = t.pendingProps, o = n.revealOrder, i = n.tail;
  if (lt(e, t, n.children, r), n = _e.current, n & 2)
    n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Wv(e, r, t);
          else if (e.tag === 19)
            Wv(e, r, t);
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
          e = r.alternate, e !== null && Yl(e) === null && (o = r), r = r.sibling;
        r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), Qc(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Yl(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = r, r = o, o = e;
        }
        Qc(t, !0, r, null, i);
        break;
      case "together":
        Qc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function dl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function jr(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), to |= t.lanes, !(r & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(M(153));
  if (t.child !== null) {
    for (e = t.child, r = hn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      e = e.sibling, r = r.sibling = hn(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function B2(e, t, r) {
  switch (t.tag) {
    case 3:
      Eb(t), si();
      break;
    case 5:
      nb(t);
      break;
    case 1:
      bt(t.type) && Vl(t);
      break;
    case 4:
      qh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, o = t.memoizedProps.value;
      fe(Hl, n._currentValue), n._currentValue = o;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (fe(_e, _e.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? $b(e, t, r) : (fe(_e, _e.current & 1), e = jr(e, t, r), e !== null ? e.sibling : null);
      fe(_e, _e.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n)
          return Ab(e, t, r);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), fe(_e, _e.current), n)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Tb(e, t, r);
  }
  return jr(e, t, r);
}
var Rb, Pf, Mb, Ib;
Rb = function(e, t) {
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
Pf = function() {
};
Mb = function(e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    e = t.stateNode, Bn(vr.current);
    var i = null;
    switch (r) {
      case "input":
        o = Yd(e, o), n = Yd(e, n), i = [];
        break;
      case "select":
        o = Ee({}, o, { value: void 0 }), n = Ee({}, n, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Qd(e, o), n = Qd(e, n), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = jl);
    }
    Jd(r, n);
    var a;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (r || (r = {}), r[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ba.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ba.hasOwnProperty(u) ? (l != null && u === "onScroll" && ve("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ib = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Ii(e, t) {
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
function rt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags & 14680064, n |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function V2(e, t, r) {
  var n = t.pendingProps;
  switch (Wh(t), t.tag) {
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
      return rt(t), null;
    case 1:
      return bt(t.type) && Bl(), rt(t), null;
    case 3:
      return n = t.stateNode, ui(), ye(yt), ye(it), Zh(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Is(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, tr !== null && (Ff(tr), tr = null))), Pf(e, t), rt(t), null;
    case 5:
      Qh(t);
      var o = Bn(Ra.current);
      if (r = t.type, e !== null && t.stateNode != null)
        Mb(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null)
            throw Error(M(166));
          return rt(t), null;
        }
        if (e = Bn(vr.current), Is(t)) {
          n = t.stateNode, r = t.type;
          var i = t.memoizedProps;
          switch (n[hr] = t, n[$a] = i, e = (t.mode & 1) !== 0, r) {
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
              for (o = 0; o < Hi.length; o++)
                ve(Hi[o], n);
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
              Zm(n, i), ve("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!i.multiple }, ve("invalid", n);
              break;
            case "textarea":
              ev(n, i), ve("invalid", n);
          }
          Jd(r, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && Ms(n.textContent, s, e), o = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Ms(
                n.textContent,
                s,
                e
              ), o = ["children", "" + s]) : ba.hasOwnProperty(a) && s != null && a === "onScroll" && ve("scroll", n);
            }
          switch (r) {
            case "input":
              Cs(n), Jm(n, i, !0);
              break;
            case "textarea":
              Cs(n), tv(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = jl);
          }
          n = o, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = a1(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, { is: n.is }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[hr] = t, e[$a] = n, Rb(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = ef(r, n), r) {
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
                for (o = 0; o < Hi.length; o++)
                  ve(Hi[o], e);
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
                Zm(e, n), o = Yd(e, n), ve("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, o = Ee({}, n, { value: void 0 }), ve("invalid", e);
                break;
              case "textarea":
                ev(e, n), o = Qd(e, n), ve("invalid", e);
                break;
              default:
                o = n;
            }
            Jd(r, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? u1(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && s1(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Sa(e, l) : typeof l == "number" && Sa(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ba.hasOwnProperty(i) ? l != null && i === "onScroll" && ve("scroll", e) : l != null && Eh(e, i, l, a));
              }
            switch (r) {
              case "input":
                Cs(e), Jm(e, n, !1);
                break;
              case "textarea":
                Cs(e), tv(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + gn(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, i = n.value, i != null ? Wo(e, !!n.multiple, i, !1) : n.defaultValue != null && Wo(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = jl);
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
      return rt(t), null;
    case 6:
      if (e && t.stateNode != null)
        Ib(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null)
          throw Error(M(166));
        if (r = Bn(Ra.current), Bn(vr.current), Is(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[hr] = t, (i = n.nodeValue !== r) && (e = Et, e !== null))
            switch (e.tag) {
              case 3:
                Ms(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ms(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[hr] = t, t.stateNode = n;
      }
      return rt(t), null;
    case 13:
      if (ye(_e), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ke && Pt !== null && t.mode & 1 && !(t.flags & 128))
          q1(), si(), t.flags |= 98560, i = !1;
        else if (i = Is(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(M(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(M(317));
            i[hr] = t;
          } else
            si(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          rt(t), i = !1;
        } else
          tr !== null && (Ff(tr), tr = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || _e.current & 1 ? Ve === 0 && (Ve = 3) : cp())), t.updateQueue !== null && (t.flags |= 4), rt(t), null);
    case 4:
      return ui(), Pf(e, t), e === null && Pa(t.stateNode.containerInfo), rt(t), null;
    case 10:
      return Kh(t.type._context), rt(t), null;
    case 17:
      return bt(t.type) && Bl(), rt(t), null;
    case 19:
      if (ye(_e), i = t.memoizedState, i === null)
        return rt(t), null;
      if (n = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (n)
          Ii(i, !1);
        else {
          if (Ve !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = Yl(e), a !== null) {
                for (t.flags |= 128, Ii(i, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; )
                  i = r, e = n, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
                return fe(_e, _e.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Fe() > di && (t.flags |= 128, n = !0, Ii(i, !1), t.lanes = 4194304);
        }
      else {
        if (!n)
          if (e = Yl(a), e !== null) {
            if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Ii(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !ke)
              return rt(t), null;
          } else
            2 * Fe() - i.renderingStartTime > di && r !== 1073741824 && (t.flags |= 128, n = !0, Ii(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (r = i.last, r !== null ? r.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Fe(), t.sibling = null, r = _e.current, fe(_e, n ? r & 1 | 2 : r & 1), t) : (rt(t), null);
    case 22:
    case 23:
      return up(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? Tt & 1073741824 && (rt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : rt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function W2(e, t) {
  switch (Wh(t), t.tag) {
    case 1:
      return bt(t.type) && Bl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ui(), ye(yt), ye(it), Zh(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Qh(t), null;
    case 13:
      if (ye(_e), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(M(340));
        si();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ye(_e), null;
    case 4:
      return ui(), null;
    case 10:
      return Kh(t.type._context), null;
    case 22:
    case 23:
      return up(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ds = !1, ot = !1, U2 = typeof WeakSet == "function" ? WeakSet : Set, D = null;
function Ao(e, t) {
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
function Ef(e, t, r) {
  try {
    r();
  } catch (n) {
    Re(e, t, n);
  }
}
var Uv = !1;
function H2(e, t) {
  if (df = Ol, e = O1(), Bh(e)) {
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
              for (var h; d !== r || o !== 0 && d.nodeType !== 3 || (s = a + o), d !== i || n !== 0 && d.nodeType !== 3 || (l = a + n), d.nodeType === 3 && (a += d.nodeValue.length), (h = d.firstChild) !== null; )
                f = d, d = h;
              for (; ; ) {
                if (d === e)
                  break t;
                if (f === r && ++u === o && (s = a), f === i && ++c === n && (l = a), (h = d.nextSibling) !== null)
                  break;
                d = f, f = d.parentNode;
              }
              d = h;
            }
          r = s === -1 || l === -1 ? null : { start: s, end: l };
        } else
          r = null;
      }
    r = r || { start: 0, end: 0 };
  } else
    r = null;
  for (ff = { focusedElem: e, selectionRange: r }, Ol = !1, D = t; D !== null; )
    if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, D = e;
    else
      for (; D !== null; ) {
        t = D;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var y = m.memoizedProps, x = m.memoizedState, v = t.stateNode, p = v.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Jt(t.type, y), x);
                  v.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
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
  return m = Uv, Uv = !1, m;
}
function ia(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var o = n = n.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Ef(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function Iu(e, t) {
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
function $f(e) {
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
function zb(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, zb(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[hr], delete t[$a], delete t[mf], delete t[P2], delete t[E2])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Fb(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hv(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fb(e.return))
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
function Af(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = jl));
  else if (n !== 4 && (e = e.child, e !== null))
    for (Af(e, t, r), e = e.sibling; e !== null; )
      Af(e, t, r), e = e.sibling;
}
function Rf(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null))
    for (Rf(e, t, r), e = e.sibling; e !== null; )
      Rf(e, t, r), e = e.sibling;
}
var qe = null, er = !1;
function Ur(e, t, r) {
  for (r = r.child; r !== null; )
    Db(e, t, r), r = r.sibling;
}
function Db(e, t, r) {
  if (mr && typeof mr.onCommitFiberUnmount == "function")
    try {
      mr.onCommitFiberUnmount(_u, r);
    } catch {
    }
  switch (r.tag) {
    case 5:
      ot || Ao(r, t);
    case 6:
      var n = qe, o = er;
      qe = null, Ur(e, t, r), qe = n, er = o, qe !== null && (er ? (e = qe, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : qe.removeChild(r.stateNode));
      break;
    case 18:
      qe !== null && (er ? (e = qe, r = r.stateNode, e.nodeType === 8 ? Uc(e.parentNode, r) : e.nodeType === 1 && Uc(e, r), Ca(e)) : Uc(qe, r.stateNode));
      break;
    case 4:
      n = qe, o = er, qe = r.stateNode.containerInfo, er = !0, Ur(e, t, r), qe = n, er = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ot && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        o = n = n.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && Ef(r, t, a), o = o.next;
        } while (o !== n);
      }
      Ur(e, t, r);
      break;
    case 1:
      if (!ot && (Ao(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function"))
        try {
          n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
        } catch (s) {
          Re(r, t, s);
        }
      Ur(e, t, r);
      break;
    case 21:
      Ur(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (ot = (n = ot) || r.memoizedState !== null, Ur(e, t, r), ot = n) : Ur(e, t, r);
      break;
    default:
      Ur(e, t, r);
  }
}
function Gv(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new U2()), t.forEach(function(n) {
      var o = eT.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(o, o));
    });
  }
}
function Qt(e, t) {
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
                qe = s.stateNode, er = !1;
                break e;
              case 3:
                qe = s.stateNode.containerInfo, er = !0;
                break e;
              case 4:
                qe = s.stateNode.containerInfo, er = !0;
                break e;
            }
            s = s.return;
          }
        if (qe === null)
          throw Error(M(160));
        Db(i, a, o), qe = null, er = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        Re(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Ob(t, e), t = t.sibling;
}
function Ob(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Qt(t, e), ar(e), n & 4) {
        try {
          ia(3, e, e.return), Iu(3, e);
        } catch (y) {
          Re(e, e.return, y);
        }
        try {
          ia(5, e, e.return);
        } catch (y) {
          Re(e, e.return, y);
        }
      }
      break;
    case 1:
      Qt(t, e), ar(e), n & 512 && r !== null && Ao(r, r.return);
      break;
    case 5:
      if (Qt(t, e), ar(e), n & 512 && r !== null && Ao(r, r.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Sa(o, "");
        } catch (y) {
          Re(e, e.return, y);
        }
      }
      if (n & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = r !== null ? r.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && o1(o, i), ef(s, a);
            var u = ef(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? u1(o, d) : c === "dangerouslySetInnerHTML" ? s1(o, d) : c === "children" ? Sa(o, d) : Eh(o, c, d, u);
            }
            switch (s) {
              case "input":
                Xd(o, i);
                break;
              case "textarea":
                i1(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null ? Wo(o, !!i.multiple, h, !1) : f !== !!i.multiple && (i.defaultValue != null ? Wo(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Wo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[$a] = i;
          } catch (y) {
            Re(e, e.return, y);
          }
      }
      break;
    case 6:
      if (Qt(t, e), ar(e), n & 4) {
        if (e.stateNode === null)
          throw Error(M(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (y) {
          Re(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Qt(t, e), ar(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
        try {
          Ca(t.containerInfo);
        } catch (y) {
          Re(e, e.return, y);
        }
      break;
    case 4:
      Qt(t, e), ar(e);
      break;
    case 13:
      Qt(t, e), ar(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (sp = Fe())), n & 4 && Gv(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (ot = (u = ot) || c, Qt(t, e), ot = u) : Qt(t, e), ar(e), n & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (D = e, c = e.child; c !== null; ) {
            for (d = D = c; D !== null; ) {
              switch (f = D, h = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ia(4, f, f.return);
                  break;
                case 1:
                  Ao(f, f.return);
                  var m = f.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    n = f, r = f.return;
                    try {
                      t = n, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                    } catch (y) {
                      Re(n, r, y);
                    }
                  }
                  break;
                case 5:
                  Ao(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Yv(d);
                    continue;
                  }
              }
              h !== null ? (h.return = f, D = h) : Yv(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = l1("display", a));
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
      Qt(t, e), ar(e), n & 4 && Gv(e);
      break;
    case 21:
      break;
    default:
      Qt(
        t,
        e
      ), ar(e);
  }
}
function ar(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Fb(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(M(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (Sa(o, ""), n.flags &= -33);
          var i = Hv(e);
          Rf(e, i, o);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo, s = Hv(e);
          Af(e, s, a);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      Re(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function G2(e, t, r) {
  D = e, Lb(e);
}
function Lb(e, t, r) {
  for (var n = (e.mode & 1) !== 0; D !== null; ) {
    var o = D, i = o.child;
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || Ds;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || ot;
        s = Ds;
        var u = ot;
        if (Ds = a, (ot = l) && !u)
          for (D = o; D !== null; )
            a = D, l = a.child, a.tag === 22 && a.memoizedState !== null ? Xv(o) : l !== null ? (l.return = a, D = l) : Xv(o);
        for (; i !== null; )
          D = i, Lb(i), i = i.sibling;
        D = o, Ds = s, ot = u;
      }
      Kv(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, D = i) : Kv(e);
  }
}
function Kv(e) {
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
              ot || Iu(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !ot)
                if (r === null)
                  n.componentDidMount();
                else {
                  var o = t.elementType === t.type ? r.memoizedProps : Jt(t.type, r.memoizedProps);
                  n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Av(t, i, n);
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
                Av(t, a, r);
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
                    d !== null && Ca(d);
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
              throw Error(M(163));
          }
        ot || t.flags & 512 && $f(t);
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
function Yv(e) {
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
function Xv(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Iu(4, t);
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
            $f(t);
          } catch (l) {
            Re(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            $f(t);
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
var K2 = Math.ceil, Ql = Wr.ReactCurrentDispatcher, ip = Wr.ReactCurrentOwner, Kt = Wr.ReactCurrentBatchConfig, ee = 0, Ge = null, Ne = null, Ze = 0, Tt = 0, Ro = kn(0), Ve = 0, Fa = null, to = 0, zu = 0, ap = 0, aa = null, mt = null, sp = 0, di = 1 / 0, _r = null, Zl = !1, Mf = null, dn = null, Os = !1, nn = null, Jl = 0, sa = 0, If = null, fl = -1, hl = 0;
function ct() {
  return ee & 6 ? Fe() : fl !== -1 ? fl : fl = Fe();
}
function fn(e) {
  return e.mode & 1 ? ee & 2 && Ze !== 0 ? Ze & -Ze : A2.transition !== null ? (hl === 0 && (hl = x1()), hl) : (e = se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : E1(e.type)), e) : 1;
}
function or(e, t, r, n) {
  if (50 < sa)
    throw sa = 0, If = null, Error(M(185));
  Ja(e, r, n), (!(ee & 2) || e !== Ge) && (e === Ge && (!(ee & 2) && (zu |= r), Ve === 4 && Jr(e, Ze)), St(e, n), r === 1 && ee === 0 && !(t.mode & 1) && (di = Fe() + 500, Au && Cn()));
}
function St(e, t) {
  var r = e.callbackNode;
  A_(e, t);
  var n = Dl(e, e === Ge ? Ze : 0);
  if (n === 0)
    r !== null && ov(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && ov(r), t === 1)
      e.tag === 0 ? $2(qv.bind(null, e)) : K1(qv.bind(null, e)), _2(function() {
        !(ee & 6) && Cn();
      }), r = null;
    else {
      switch (w1(n)) {
        case 1:
          r = Ih;
          break;
        case 4:
          r = b1;
          break;
        case 16:
          r = Fl;
          break;
        case 536870912:
          r = S1;
          break;
        default:
          r = Fl;
      }
      r = Gb(r, Nb.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function Nb(e, t) {
  if (fl = -1, hl = 0, ee & 6)
    throw Error(M(327));
  var r = e.callbackNode;
  if (Yo() && e.callbackNode !== r)
    return null;
  var n = Dl(e, e === Ge ? Ze : 0);
  if (n === 0)
    return null;
  if (n & 30 || n & e.expiredLanes || t)
    t = eu(e, n);
  else {
    t = n;
    var o = ee;
    ee |= 2;
    var i = Bb();
    (Ge !== e || Ze !== t) && (_r = null, di = Fe() + 500, Un(e, t));
    do
      try {
        q2();
        break;
      } catch (s) {
        jb(e, s);
      }
    while (!0);
    Gh(), Ql.current = i, ee = o, Ne !== null ? t = 0 : (Ge = null, Ze = 0, t = Ve);
  }
  if (t !== 0) {
    if (t === 2 && (o = af(e), o !== 0 && (n = o, t = zf(e, o))), t === 1)
      throw r = Fa, Un(e, 0), Jr(e, n), St(e, Fe()), r;
    if (t === 6)
      Jr(e, n);
    else {
      if (o = e.current.alternate, !(n & 30) && !Y2(o) && (t = eu(e, n), t === 2 && (i = af(e), i !== 0 && (n = i, t = zf(e, i))), t === 1))
        throw r = Fa, Un(e, 0), Jr(e, n), St(e, Fe()), r;
      switch (e.finishedWork = o, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          In(e, mt, _r);
          break;
        case 3:
          if (Jr(e, n), (n & 130023424) === n && (t = sp + 500 - Fe(), 10 < t)) {
            if (Dl(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & n) !== n) {
              ct(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = pf(In.bind(null, e, mt, _r), t);
            break;
          }
          In(e, mt, _r);
          break;
        case 4:
          if (Jr(e, n), (n & 4194240) === n)
            break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - nr(n);
            i = 1 << a, a = t[a], a > o && (o = a), n &= ~i;
          }
          if (n = o, n = Fe() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * K2(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = pf(In.bind(null, e, mt, _r), n);
            break;
          }
          In(e, mt, _r);
          break;
        case 5:
          In(e, mt, _r);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return St(e, Fe()), e.callbackNode === r ? Nb.bind(null, e) : null;
}
function zf(e, t) {
  var r = aa;
  return e.current.memoizedState.isDehydrated && (Un(e, t).flags |= 256), e = eu(e, t), e !== 2 && (t = mt, mt = r, t !== null && Ff(t)), e;
}
function Ff(e) {
  mt === null ? mt = e : mt.push.apply(mt, e);
}
function Y2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n], i = o.getSnapshot;
          o = o.value;
          try {
            if (!ir(i(), o))
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
function Jr(e, t) {
  for (t &= ~ap, t &= ~zu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - nr(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function qv(e) {
  if (ee & 6)
    throw Error(M(327));
  Yo();
  var t = Dl(e, 0);
  if (!(t & 1))
    return St(e, Fe()), null;
  var r = eu(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = af(e);
    n !== 0 && (t = n, r = zf(e, n));
  }
  if (r === 1)
    throw r = Fa, Un(e, 0), Jr(e, t), St(e, Fe()), r;
  if (r === 6)
    throw Error(M(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, In(e, mt, _r), St(e, Fe()), null;
}
function lp(e, t) {
  var r = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    ee = r, ee === 0 && (di = Fe() + 500, Au && Cn());
  }
}
function ro(e) {
  nn !== null && nn.tag === 0 && !(ee & 6) && Yo();
  var t = ee;
  ee |= 1;
  var r = Kt.transition, n = se;
  try {
    if (Kt.transition = null, se = 1, e)
      return e();
  } finally {
    se = n, Kt.transition = r, ee = t, !(ee & 6) && Cn();
  }
}
function up() {
  Tt = Ro.current, ye(Ro);
}
function Un(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, C2(r)), Ne !== null)
    for (r = Ne.return; r !== null; ) {
      var n = r;
      switch (Wh(n), n.tag) {
        case 1:
          n = n.type.childContextTypes, n != null && Bl();
          break;
        case 3:
          ui(), ye(yt), ye(it), Zh();
          break;
        case 5:
          Qh(n);
          break;
        case 4:
          ui();
          break;
        case 13:
          ye(_e);
          break;
        case 19:
          ye(_e);
          break;
        case 10:
          Kh(n.type._context);
          break;
        case 22:
        case 23:
          up();
      }
      r = r.return;
    }
  if (Ge = e, Ne = e = hn(e.current, null), Ze = Tt = t, Ve = 0, Fa = null, ap = zu = to = 0, mt = aa = null, jn !== null) {
    for (t = 0; t < jn.length; t++)
      if (r = jn[t], n = r.interleaved, n !== null) {
        r.interleaved = null;
        var o = n.next, i = r.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, n.next = a;
        }
        r.pending = n;
      }
    jn = null;
  }
  return e;
}
function jb(e, t) {
  do {
    var r = Ne;
    try {
      if (Gh(), ul.current = ql, Xl) {
        for (var n = Pe.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), n = n.next;
        }
        Xl = !1;
      }
      if (eo = 0, He = Be = Pe = null, oa = !1, Ma = 0, ip.current = null, r === null || r.return === null) {
        Ve = 1, Fa = t, Ne = null;
        break;
      }
      e: {
        var i = e, a = r.return, s = r, l = t;
        if (t = Ze, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var h = Ov(a);
          if (h !== null) {
            h.flags &= -257, Lv(h, a, s, i, t), h.mode & 1 && Dv(i, u, t), t = h, l = u;
            var m = t.updateQueue;
            if (m === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else
              m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Dv(i, u, t), cp();
              break e;
            }
            l = Error(M(426));
          }
        } else if (ke && s.mode & 1) {
          var x = Ov(a);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Lv(x, a, s, i, t), Uh(ci(l, s));
            break e;
          }
        }
        i = l = ci(l, s), Ve !== 4 && (Ve = 2), aa === null ? aa = [i] : aa.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var v = kb(i, l, t);
              $v(i, v);
              break e;
            case 1:
              s = l;
              var p = i.type, g = i.stateNode;
              if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (dn === null || !dn.has(g)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Cb(i, s, t);
                $v(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Wb(r);
    } catch (T) {
      t = T, Ne === r && r !== null && (Ne = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Bb() {
  var e = Ql.current;
  return Ql.current = ql, e === null ? ql : e;
}
function cp() {
  (Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4), Ge === null || !(to & 268435455) && !(zu & 268435455) || Jr(Ge, Ze);
}
function eu(e, t) {
  var r = ee;
  ee |= 2;
  var n = Bb();
  (Ge !== e || Ze !== t) && (_r = null, Un(e, t));
  do
    try {
      X2();
      break;
    } catch (o) {
      jb(e, o);
    }
  while (!0);
  if (Gh(), ee = r, Ql.current = n, Ne !== null)
    throw Error(M(261));
  return Ge = null, Ze = 0, Ve;
}
function X2() {
  for (; Ne !== null; )
    Vb(Ne);
}
function q2() {
  for (; Ne !== null && !x_(); )
    Vb(Ne);
}
function Vb(e) {
  var t = Hb(e.alternate, e, Tt);
  e.memoizedProps = e.pendingProps, t === null ? Wb(e) : Ne = t, ip.current = null;
}
function Wb(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = W2(r, t), r !== null) {
        r.flags &= 32767, Ne = r;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ve = 6, Ne = null;
        return;
      }
    } else if (r = V2(r, t, Tt), r !== null) {
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
function In(e, t, r) {
  var n = se, o = Kt.transition;
  try {
    Kt.transition = null, se = 1, Q2(e, t, r, n);
  } finally {
    Kt.transition = o, se = n;
  }
  return null;
}
function Q2(e, t, r, n) {
  do
    Yo();
  while (nn !== null);
  if (ee & 6)
    throw Error(M(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current)
    throw Error(M(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = r.lanes | r.childLanes;
  if (R_(e, i), e === Ge && (Ne = Ge = null, Ze = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Os || (Os = !0, Gb(Fl, function() {
    return Yo(), null;
  })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
    i = Kt.transition, Kt.transition = null;
    var a = se;
    se = 1;
    var s = ee;
    ee |= 4, ip.current = null, H2(e, r), Ob(r, e), g2(ff), Ol = !!df, ff = df = null, e.current = r, G2(r), w_(), ee = s, se = a, Kt.transition = i;
  } else
    e.current = r;
  if (Os && (Os = !1, nn = e, Jl = o), i = e.pendingLanes, i === 0 && (dn = null), __(r.stateNode), St(e, Fe()), t !== null)
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      o = t[r], n(o.value, { componentStack: o.stack, digest: o.digest });
  if (Zl)
    throw Zl = !1, e = Mf, Mf = null, e;
  return Jl & 1 && e.tag !== 0 && Yo(), i = e.pendingLanes, i & 1 ? e === If ? sa++ : (sa = 0, If = e) : sa = 0, Cn(), null;
}
function Yo() {
  if (nn !== null) {
    var e = w1(Jl), t = Kt.transition, r = se;
    try {
      if (Kt.transition = null, se = 16 > e ? 16 : e, nn === null)
        var n = !1;
      else {
        if (e = nn, nn = null, Jl = 0, ee & 6)
          throw Error(M(331));
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
                      ia(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, D = d;
                  else
                    for (; D !== null; ) {
                      c = D;
                      var f = c.sibling, h = c.return;
                      if (zb(c), c === u) {
                        D = null;
                        break;
                      }
                      if (f !== null) {
                        f.return = h, D = f;
                        break;
                      }
                      D = h;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var y = m.child;
                if (y !== null) {
                  m.child = null;
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
                      ia(9, i, i.return);
                  }
                var v = i.sibling;
                if (v !== null) {
                  v.return = i.return, D = v;
                  break e;
                }
                D = i.return;
              }
        }
        var p = e.current;
        for (D = p; D !== null; ) {
          a = D;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null)
            g.return = a, D = g;
          else
            e:
              for (a = p; D !== null; ) {
                if (s = D, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Iu(9, s);
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
        if (ee = o, Cn(), mr && typeof mr.onPostCommitFiberRoot == "function")
          try {
            mr.onPostCommitFiberRoot(_u, e);
          } catch {
          }
        n = !0;
      }
      return n;
    } finally {
      se = r, Kt.transition = t;
    }
  }
  return !1;
}
function Qv(e, t, r) {
  t = ci(r, t), t = kb(e, t, 1), e = cn(e, t, 1), t = ct(), e !== null && (Ja(e, 1, t), St(e, t));
}
function Re(e, t, r) {
  if (e.tag === 3)
    Qv(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qv(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (dn === null || !dn.has(n))) {
          e = ci(r, e), e = Cb(t, e, 1), t = cn(t, e, 1), e = ct(), t !== null && (Ja(t, 1, e), St(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Z2(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = ct(), e.pingedLanes |= e.suspendedLanes & r, Ge === e && (Ze & r) === r && (Ve === 4 || Ve === 3 && (Ze & 130023424) === Ze && 500 > Fe() - sp ? Un(e, 0) : ap |= r), St(e, t);
}
function Ub(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ps, Ps <<= 1, !(Ps & 130023424) && (Ps = 4194304)) : t = 1);
  var r = ct();
  e = Nr(e, t), e !== null && (Ja(e, t, r), St(e, r));
}
function J2(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), Ub(e, r);
}
function eT(e, t) {
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
      throw Error(M(314));
  }
  n !== null && n.delete(t), Ub(e, r);
}
var Hb;
Hb = function(e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || yt.current)
      gt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128))
        return gt = !1, B2(e, t, r);
      gt = !!(e.flags & 131072);
    }
  else
    gt = !1, ke && t.flags & 1048576 && Y1(t, Ul, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      dl(e, t), e = t.pendingProps;
      var o = ai(t, it.current);
      Ko(t, r), o = ep(null, t, n, e, o, r);
      var i = tp();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, bt(n) ? (i = !0, Vl(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Xh(t), o.updater = Ru, t.stateNode = o, o._reactInternals = t, xf(t, n, e, r), t = Cf(null, t, n, !0, i, r)) : (t.tag = 0, ke && i && Vh(t), lt(null, t, o, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (dl(e, t), e = t.pendingProps, o = n._init, n = o(n._payload), t.type = n, o = t.tag = rT(n), e = Jt(n, e), o) {
          case 0:
            t = kf(null, t, n, e, r);
            break e;
          case 1:
            t = Bv(null, t, n, e, r);
            break e;
          case 11:
            t = Nv(null, t, n, e, r);
            break e;
          case 14:
            t = jv(null, t, n, Jt(n.type, e), r);
            break e;
        }
        throw Error(M(
          306,
          n,
          ""
        ));
      }
      return t;
    case 0:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Jt(n, o), kf(e, t, n, o, r);
    case 1:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Jt(n, o), Bv(e, t, n, o, r);
    case 3:
      e: {
        if (Eb(t), e === null)
          throw Error(M(387));
        n = t.pendingProps, i = t.memoizedState, o = i.element, Z1(e, t), Kl(t, n, null, r);
        var a = t.memoizedState;
        if (n = a.element, i.isDehydrated)
          if (i = { element: n, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = ci(Error(M(423)), t), t = Vv(e, t, n, r, o);
            break e;
          } else if (n !== o) {
            o = ci(Error(M(424)), t), t = Vv(e, t, n, r, o);
            break e;
          } else
            for (Pt = un(t.stateNode.containerInfo.firstChild), Et = t, ke = !0, tr = null, r = rb(t, null, n, r), t.child = r; r; )
              r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (si(), n === o) {
            t = jr(e, t, r);
            break e;
          }
          lt(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return nb(t), e === null && yf(t), n = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, hf(n, o) ? a = null : i !== null && hf(n, i) && (t.flags |= 32), Pb(e, t), lt(e, t, a, r), t.child;
    case 6:
      return e === null && yf(t), null;
    case 13:
      return $b(e, t, r);
    case 4:
      return qh(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = li(t, null, n, r) : lt(e, t, n, r), t.child;
    case 11:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Jt(n, o), Nv(e, t, n, o, r);
    case 7:
      return lt(e, t, t.pendingProps, r), t.child;
    case 8:
      return lt(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return lt(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, fe(Hl, n._currentValue), n._currentValue = a, i !== null)
          if (ir(i.value, a)) {
            if (i.children === o.children && !yt.current) {
              t = jr(e, t, r);
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
                      l = Ir(-1, r & -r), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= r, l = i.alternate, l !== null && (l.lanes |= r), bf(
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
                  throw Error(M(341));
                a.lanes |= r, s = a.alternate, s !== null && (s.lanes |= r), bf(a, r, t), a = i.sibling;
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
        lt(e, t, o.children, r), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, n = t.pendingProps.children, Ko(t, r), o = Xt(o), n = n(o), t.flags |= 1, lt(e, t, n, r), t.child;
    case 14:
      return n = t.type, o = Jt(n, t.pendingProps), o = Jt(n.type, o), jv(e, t, n, o, r);
    case 15:
      return _b(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Jt(n, o), dl(e, t), t.tag = 1, bt(n) ? (e = !0, Vl(t)) : e = !1, Ko(t, r), eb(t, n, o), xf(t, n, o, r), Cf(null, t, n, !0, e, r);
    case 19:
      return Ab(e, t, r);
    case 22:
      return Tb(e, t, r);
  }
  throw Error(M(156, t.tag));
};
function Gb(e, t) {
  return y1(e, t);
}
function tT(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ht(e, t, r, n) {
  return new tT(e, t, r, n);
}
function dp(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function rT(e) {
  if (typeof e == "function")
    return dp(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ah)
      return 11;
    if (e === Rh)
      return 14;
  }
  return 2;
}
function hn(e, t) {
  var r = e.alternate;
  return r === null ? (r = Ht(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function pl(e, t, r, n, o, i) {
  var a = 2;
  if (n = e, typeof e == "function")
    dp(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case xo:
          return Hn(r.children, o, i, t);
        case $h:
          a = 8, o |= 8;
          break;
        case Ud:
          return e = Ht(12, r, t, o | 2), e.elementType = Ud, e.lanes = i, e;
        case Hd:
          return e = Ht(13, r, t, o), e.elementType = Hd, e.lanes = i, e;
        case Gd:
          return e = Ht(19, r, t, o), e.elementType = Gd, e.lanes = i, e;
        case t1:
          return Fu(r, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Jy:
                a = 10;
                break e;
              case e1:
                a = 9;
                break e;
              case Ah:
                a = 11;
                break e;
              case Rh:
                a = 14;
                break e;
              case Xr:
                a = 16, n = null;
                break e;
            }
          throw Error(M(130, e == null ? e : typeof e, ""));
      }
  return t = Ht(a, r, t, o), t.elementType = e, t.type = n, t.lanes = i, t;
}
function Hn(e, t, r, n) {
  return e = Ht(7, e, n, t), e.lanes = r, e;
}
function Fu(e, t, r, n) {
  return e = Ht(22, e, n, t), e.elementType = t1, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function Zc(e, t, r) {
  return e = Ht(6, e, null, t), e.lanes = r, e;
}
function Jc(e, t, r) {
  return t = Ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function nT(e, t, r, n, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ic(0), this.expirationTimes = Ic(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ic(0), this.identifierPrefix = n, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function fp(e, t, r, n, o, i, a, s, l) {
  return e = new nT(e, t, r, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ht(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Xh(i), e;
}
function oT(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: So, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function Kb(e) {
  if (!e)
    return yn;
  e = e._reactInternals;
  e: {
    if (ao(e) !== e || e.tag !== 1)
      throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (bt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (bt(r))
      return G1(e, r, t);
  }
  return t;
}
function Yb(e, t, r, n, o, i, a, s, l) {
  return e = fp(r, n, !0, e, o, i, a, s, l), e.context = Kb(null), r = e.current, n = ct(), o = fn(r), i = Ir(n, o), i.callback = t ?? null, cn(r, i, o), e.current.lanes = o, Ja(e, o, n), St(e, n), e;
}
function Du(e, t, r, n) {
  var o = t.current, i = ct(), a = fn(o);
  return r = Kb(r), t.context === null ? t.context = r : t.pendingContext = r, t = Ir(i, a), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = cn(o, t, a), e !== null && (or(e, o, a, i), ll(e, o, a)), a;
}
function tu(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zv(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function hp(e, t) {
  Zv(e, t), (e = e.alternate) && Zv(e, t);
}
function iT() {
  return null;
}
var Xb = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function pp(e) {
  this._internalRoot = e;
}
Ou.prototype.render = pp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(M(409));
  Du(e, t, null, null);
};
Ou.prototype.unmount = pp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ro(function() {
      Du(null, e, null, null);
    }), t[Lr] = null;
  }
};
function Ou(e) {
  this._internalRoot = e;
}
Ou.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = _1();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Zr.length && t !== 0 && t < Zr[r].priority; r++)
      ;
    Zr.splice(r, 0, e), r === 0 && P1(e);
  }
};
function mp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Lu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Jv() {
}
function aT(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function() {
        var u = tu(a);
        i.call(u);
      };
    }
    var a = Yb(t, n, e, 0, null, !1, !1, "", Jv);
    return e._reactRootContainer = a, e[Lr] = a.current, Pa(e.nodeType === 8 ? e.parentNode : e), ro(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof n == "function") {
    var s = n;
    n = function() {
      var u = tu(l);
      s.call(u);
    };
  }
  var l = fp(e, 0, !1, null, null, !1, !1, "", Jv);
  return e._reactRootContainer = l, e[Lr] = l.current, Pa(e.nodeType === 8 ? e.parentNode : e), ro(function() {
    Du(t, l, r, n);
  }), l;
}
function Nu(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = tu(a);
        s.call(l);
      };
    }
    Du(t, a, e, o);
  } else
    a = aT(r, t, e, o, n);
  return tu(a);
}
k1 = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Ui(t.pendingLanes);
        r !== 0 && (zh(t, r | 1), St(t, Fe()), !(ee & 6) && (di = Fe() + 500, Cn()));
      }
      break;
    case 13:
      ro(function() {
        var n = Nr(e, 1);
        if (n !== null) {
          var o = ct();
          or(n, e, 1, o);
        }
      }), hp(e, 1);
  }
};
Fh = function(e) {
  if (e.tag === 13) {
    var t = Nr(e, 134217728);
    if (t !== null) {
      var r = ct();
      or(t, e, 134217728, r);
    }
    hp(e, 134217728);
  }
};
C1 = function(e) {
  if (e.tag === 13) {
    var t = fn(e), r = Nr(e, t);
    if (r !== null) {
      var n = ct();
      or(r, e, t, n);
    }
    hp(e, t);
  }
};
_1 = function() {
  return se;
};
T1 = function(e, t) {
  var r = se;
  try {
    return se = e, t();
  } finally {
    se = r;
  }
};
rf = function(e, t, r) {
  switch (t) {
    case "input":
      if (Xd(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; )
          r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = $u(n);
            if (!o)
              throw Error(M(90));
            n1(n), Xd(n, o);
          }
        }
      }
      break;
    case "textarea":
      i1(e, r);
      break;
    case "select":
      t = r.value, t != null && Wo(e, !!r.multiple, t, !1);
  }
};
f1 = lp;
h1 = ro;
var sT = { usingClientEntryPoint: !1, Events: [ts, _o, $u, c1, d1, lp] }, zi = { findFiberByHostInstance: Nn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, lT = { bundleType: zi.bundleType, version: zi.version, rendererPackageName: zi.rendererPackageName, rendererConfig: zi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Wr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = v1(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: zi.findFiberByHostInstance || iT, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ls.isDisabled && Ls.supportsFiber)
    try {
      _u = Ls.inject(lT), mr = Ls;
    } catch {
    }
}
It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sT;
It.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!mp(t))
    throw Error(M(200));
  return oT(e, t, null, r);
};
It.createRoot = function(e, t) {
  if (!mp(e))
    throw Error(M(299));
  var r = !1, n = "", o = Xb;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = fp(e, 1, !1, null, null, r, !1, n, o), e[Lr] = t.current, Pa(e.nodeType === 8 ? e.parentNode : e), new pp(t);
};
It.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
  return e = v1(t), e = e === null ? null : e.stateNode, e;
};
It.flushSync = function(e) {
  return ro(e);
};
It.hydrate = function(e, t, r) {
  if (!Lu(t))
    throw Error(M(200));
  return Nu(null, e, t, !0, r);
};
It.hydrateRoot = function(e, t, r) {
  if (!mp(e))
    throw Error(M(405));
  var n = r != null && r.hydratedSources || null, o = !1, i = "", a = Xb;
  if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = Yb(t, null, e, 1, r ?? null, o, !1, i, a), e[Lr] = t.current, Pa(e), n)
    for (e = 0; e < n.length; e++)
      r = n[e], o = r._getVersion, o = o(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(
        r,
        o
      );
  return new Ou(t);
};
It.render = function(e, t, r) {
  if (!Lu(t))
    throw Error(M(200));
  return Nu(null, e, t, !1, r);
};
It.unmountComponentAtNode = function(e) {
  if (!Lu(e))
    throw Error(M(40));
  return e._reactRootContainer ? (ro(function() {
    Nu(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Lr] = null;
    });
  }), !0) : !1;
};
It.unstable_batchedUpdates = lp;
It.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!Lu(r))
    throw Error(M(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(M(38));
  return Nu(e, t, r, !1, n);
};
It.version = "18.2.0-next-9e3b772b8-20220608";
function qb() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qb);
    } catch (e) {
      console.error(e);
    }
}
qb(), Yy.exports = It;
var vp = Yy.exports, eg = vp;
Vd.createRoot = eg.createRoot, Vd.hydrateRoot = eg.hydrateRoot;
var Qb = "Expected a function", tg = NaN, uT = "[object Symbol]", cT = /^\s+|\s+$/g, dT = /^[-+]0x[0-9a-f]+$/i, fT = /^0b[01]+$/i, hT = /^0o[0-7]+$/i, pT = parseInt, mT = typeof tn == "object" && tn && tn.Object === Object && tn, vT = typeof self == "object" && self && self.Object === Object && self, gT = mT || vT || Function("return this")(), yT = Object.prototype, bT = yT.toString, ST = Math.max, xT = Math.min, ed = function() {
  return gT.Date.now();
};
function wT(e, t, r) {
  var n, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Qb);
  t = rg(t) || 0, ru(r) && (c = !!r.leading, d = "maxWait" in r, i = d ? ST(rg(r.maxWait) || 0, t) : i, f = "trailing" in r ? !!r.trailing : f);
  function h($) {
    var P = n, A = o;
    return n = o = void 0, u = $, a = e.apply(A, P), a;
  }
  function m($) {
    return u = $, s = setTimeout(v, t), c ? h($) : a;
  }
  function y($) {
    var P = $ - l, A = $ - u, R = t - P;
    return d ? xT(R, i - A) : R;
  }
  function x($) {
    var P = $ - l, A = $ - u;
    return l === void 0 || P >= t || P < 0 || d && A >= i;
  }
  function v() {
    var $ = ed();
    if (x($))
      return p($);
    s = setTimeout(v, y($));
  }
  function p($) {
    return s = void 0, f && n ? h($) : (n = o = void 0, a);
  }
  function g() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = o = s = void 0;
  }
  function w() {
    return s === void 0 ? a : p(ed());
  }
  function T() {
    var $ = ed(), P = x($);
    if (n = arguments, o = this, l = $, P) {
      if (s === void 0)
        return m(l);
      if (d)
        return s = setTimeout(v, t), h(l);
    }
    return s === void 0 && (s = setTimeout(v, t)), a;
  }
  return T.cancel = g, T.flush = w, T;
}
function kT(e, t, r) {
  var n = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Qb);
  return ru(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), wT(e, t, {
    leading: n,
    maxWait: t,
    trailing: o
  });
}
function ru(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function CT(e) {
  return !!e && typeof e == "object";
}
function _T(e) {
  return typeof e == "symbol" || CT(e) && bT.call(e) == uT;
}
function rg(e) {
  if (typeof e == "number")
    return e;
  if (_T(e))
    return tg;
  if (ru(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ru(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(cT, "");
  var r = fT.test(e);
  return r || hT.test(e) ? pT(e.slice(2), r ? 2 : 8) : dT.test(e) ? tg : +e;
}
var TT = kT;
const PT = /* @__PURE__ */ Qa(TT);
function ET(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function $T(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var AT = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag($T(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = ET(o);
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
}(), nt = "-ms-", nu = "-moz-", ne = "-webkit-", Zb = "comm", gp = "rule", yp = "decl", RT = "@import", Jb = "@keyframes", MT = "@layer", IT = Math.abs, ju = String.fromCharCode, zT = Object.assign;
function FT(e, t) {
  return Qe(e, 0) ^ 45 ? (((t << 2 ^ Qe(e, 0)) << 2 ^ Qe(e, 1)) << 2 ^ Qe(e, 2)) << 2 ^ Qe(e, 3) : 0;
}
function eS(e) {
  return e.trim();
}
function DT(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function oe(e, t, r) {
  return e.replace(t, r);
}
function Df(e, t) {
  return e.indexOf(t);
}
function Qe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Da(e, t, r) {
  return e.slice(t, r);
}
function dr(e) {
  return e.length;
}
function bp(e) {
  return e.length;
}
function Ns(e, t) {
  return t.push(e), e;
}
function OT(e, t) {
  return e.map(t).join("");
}
var Bu = 1, fi = 1, tS = 0, xt = 0, Le = 0, Si = "";
function Vu(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Bu, column: fi, length: a, return: "" };
}
function Fi(e, t) {
  return zT(Vu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function LT() {
  return Le;
}
function NT() {
  return Le = xt > 0 ? Qe(Si, --xt) : 0, fi--, Le === 10 && (fi = 1, Bu--), Le;
}
function $t() {
  return Le = xt < tS ? Qe(Si, xt++) : 0, fi++, Le === 10 && (fi = 1, Bu++), Le;
}
function gr() {
  return Qe(Si, xt);
}
function ml() {
  return xt;
}
function ns(e, t) {
  return Da(Si, e, t);
}
function Oa(e) {
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
function rS(e) {
  return Bu = fi = 1, tS = dr(Si = e), xt = 0, [];
}
function nS(e) {
  return Si = "", e;
}
function vl(e) {
  return eS(ns(xt - 1, Of(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function jT(e) {
  for (; (Le = gr()) && Le < 33; )
    $t();
  return Oa(e) > 2 || Oa(Le) > 3 ? "" : " ";
}
function BT(e, t) {
  for (; --t && $t() && !(Le < 48 || Le > 102 || Le > 57 && Le < 65 || Le > 70 && Le < 97); )
    ;
  return ns(e, ml() + (t < 6 && gr() == 32 && $t() == 32));
}
function Of(e) {
  for (; $t(); )
    switch (Le) {
      case e:
        return xt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Of(Le);
        break;
      case 40:
        e === 41 && Of(e);
        break;
      case 92:
        $t();
        break;
    }
  return xt;
}
function VT(e, t) {
  for (; $t() && e + Le !== 57; )
    if (e + Le === 84 && gr() === 47)
      break;
  return "/*" + ns(t, xt - 1) + "*" + ju(e === 47 ? e : $t());
}
function WT(e) {
  for (; !Oa(gr()); )
    $t();
  return ns(e, xt);
}
function UT(e) {
  return nS(gl("", null, null, null, [""], e = rS(e), 0, [0], e));
}
function gl(e, t, r, n, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, h = 0, m = 0, y = 1, x = 1, v = 1, p = 0, g = "", w = o, T = i, $ = n, P = g; x; )
    switch (m = p, p = $t()) {
      case 40:
        if (m != 108 && Qe(P, d - 1) == 58) {
          Df(P += oe(vl(p), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += vl(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += jT(m);
        break;
      case 92:
        P += BT(ml() - 1, 7);
        continue;
      case 47:
        switch (gr()) {
          case 42:
          case 47:
            Ns(HT(VT($t(), ml()), t, r), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * y:
        s[u++] = dr(P) * v;
      case 125 * y:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            v == -1 && (P = oe(P, /\f/g, "")), h > 0 && dr(P) - d && Ns(h > 32 ? og(P + ";", n, r, d - 1) : og(oe(P, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            P += ";";
          default:
            if (Ns($ = ng(P, t, r, u, c, o, s, g, w = [], T = [], d), i), p === 123)
              if (c === 0)
                gl(P, t, $, $, w, i, d, s, T);
              else
                switch (f === 99 && Qe(P, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    gl(e, $, $, n && Ns(ng(e, $, $, 0, 0, o, s, g, o, w = [], d), T), o, T, d, s, n ? w : T);
                    break;
                  default:
                    gl(P, $, $, $, [""], T, 0, s, T);
                }
        }
        u = c = h = 0, y = v = 1, g = P = "", d = a;
        break;
      case 58:
        d = 1 + dr(P), h = m;
      default:
        if (y < 1) {
          if (p == 123)
            --y;
          else if (p == 125 && y++ == 0 && NT() == 125)
            continue;
        }
        switch (P += ju(p), p * y) {
          case 38:
            v = c > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            s[u++] = (dr(P) - 1) * v, v = 1;
            break;
          case 64:
            gr() === 45 && (P += vl($t())), f = gr(), c = d = dr(g = P += WT(ml())), p++;
            break;
          case 45:
            m === 45 && dr(P) == 2 && (y = 0);
        }
    }
  return i;
}
function ng(e, t, r, n, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], h = bp(f), m = 0, y = 0, x = 0; m < n; ++m)
    for (var v = 0, p = Da(e, d + 1, d = IT(y = a[m])), g = e; v < h; ++v)
      (g = eS(y > 0 ? f[v] + " " + p : oe(p, /&\f/g, f[v]))) && (l[x++] = g);
  return Vu(e, t, r, o === 0 ? gp : s, l, u, c);
}
function HT(e, t, r) {
  return Vu(e, t, r, Zb, ju(LT()), Da(e, 2, -2), 0);
}
function og(e, t, r, n) {
  return Vu(e, t, r, yp, Da(e, 0, n), Da(e, n + 1, -1), n);
}
function Xo(e, t) {
  for (var r = "", n = bp(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function GT(e, t, r, n) {
  switch (e.type) {
    case MT:
      if (e.children.length)
        break;
    case RT:
    case yp:
      return e.return = e.return || e.value;
    case Zb:
      return "";
    case Jb:
      return e.return = e.value + "{" + Xo(e.children, n) + "}";
    case gp:
      e.value = e.props.join(",");
  }
  return dr(r = Xo(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function KT(e) {
  var t = bp(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function YT(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ig = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function oS(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var XT = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = gr(), o === 38 && i === 12 && (r[n] = 1), !Oa(i); )
    $t();
  return ns(t, xt);
}, qT = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Oa(o)) {
      case 0:
        o === 38 && gr() === 12 && (r[n] = 1), t[n] += XT(xt - 1, r, n);
        break;
      case 2:
        t[n] += vl(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = gr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += ju(o);
    }
  while (o = $t());
  return t;
}, QT = function(t, r) {
  return nS(qT(rS(t), r));
}, ag = /* @__PURE__ */ new WeakMap(), ZT = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !ag.get(n)) && !o) {
      ag.set(t, !0);
      for (var i = [], a = QT(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, JT = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function iS(e, t) {
  switch (FT(e, t)) {
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
      return ne + e + nu + e + nt + e + e;
    case 6828:
    case 4268:
      return ne + e + nt + e + e;
    case 6165:
      return ne + e + nt + "flex-" + e + e;
    case 5187:
      return ne + e + oe(e, /(\w+).+(:[^]+)/, ne + "box-$1$2" + nt + "flex-$1$2") + e;
    case 5443:
      return ne + e + nt + "flex-item-" + oe(e, /flex-|-self/, "") + e;
    case 4675:
      return ne + e + nt + "flex-line-pack" + oe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ne + e + nt + oe(e, "shrink", "negative") + e;
    case 5292:
      return ne + e + nt + oe(e, "basis", "preferred-size") + e;
    case 6060:
      return ne + "box-" + oe(e, "-grow", "") + ne + e + nt + oe(e, "grow", "positive") + e;
    case 4554:
      return ne + oe(e, /([^-])(transform)/g, "$1" + ne + "$2") + e;
    case 6187:
      return oe(oe(oe(e, /(zoom-|grab)/, ne + "$1"), /(image-set)/, ne + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return oe(e, /(image-set\([^]*)/, ne + "$1$`$1");
    case 4968:
      return oe(oe(e, /(.+:)(flex-)?(.*)/, ne + "box-pack:$3" + nt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ne + e + e;
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
      if (dr(e) - 1 - t > 6)
        switch (Qe(e, t + 1)) {
          case 109:
            if (Qe(e, t + 4) !== 45)
              break;
          case 102:
            return oe(e, /(.+:)(.+)-([^]+)/, "$1" + ne + "$2-$3$1" + nu + (Qe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Df(e, "stretch") ? iS(oe(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Qe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Qe(e, dr(e) - 3 - (~Df(e, "!important") && 10))) {
        case 107:
          return oe(e, ":", ":" + ne) + e;
        case 101:
          return oe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ne + (Qe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ne + "$2$3$1" + nt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Qe(e, t + 11)) {
        case 114:
          return ne + e + nt + oe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ne + e + nt + oe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ne + e + nt + oe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ne + e + nt + e + e;
  }
  return e;
}
var eP = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case yp:
        t.return = iS(t.value, t.length);
        break;
      case Jb:
        return Xo([Fi(t, {
          value: oe(t.value, "@", "@" + ne)
        })], o);
      case gp:
        if (t.length)
          return OT(t.props, function(i) {
            switch (DT(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Xo([Fi(t, {
                  props: [oe(i, /:(read-\w+)/, ":" + nu + "$1")]
                })], o);
              case "::placeholder":
                return Xo([Fi(t, {
                  props: [oe(i, /:(plac\w+)/, ":" + ne + "input-$1")]
                }), Fi(t, {
                  props: [oe(i, /:(plac\w+)/, ":" + nu + "$1")]
                }), Fi(t, {
                  props: [oe(i, /:(plac\w+)/, nt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, tP = [eP], rP = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var x = y.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || tP, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(y) {
      for (var x = y.getAttribute("data-emotion").split(" "), v = 1; v < x.length; v++)
        i[x[v]] = !0;
      s.push(y);
    }
  );
  var l, u = [ZT, JT];
  {
    var c, d = [GT, YT(function(y) {
      c.insert(y);
    })], f = KT(u.concat(o, d)), h = function(x) {
      return Xo(UT(x), f);
    };
    l = function(x, v, p, g) {
      c = p, h(x ? x + "{" + v.styles + "}" : v.styles), g && (m.inserted[v.name] = !0);
    };
  }
  var m = {
    key: r,
    sheet: new AT({
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
  return m.sheet.hydrate(s), m;
};
function no() {
  return no = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, no.apply(this, arguments);
}
var aS = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke = typeof Symbol == "function" && Symbol.for, Sp = Ke ? Symbol.for("react.element") : 60103, xp = Ke ? Symbol.for("react.portal") : 60106, Wu = Ke ? Symbol.for("react.fragment") : 60107, Uu = Ke ? Symbol.for("react.strict_mode") : 60108, Hu = Ke ? Symbol.for("react.profiler") : 60114, Gu = Ke ? Symbol.for("react.provider") : 60109, Ku = Ke ? Symbol.for("react.context") : 60110, wp = Ke ? Symbol.for("react.async_mode") : 60111, Yu = Ke ? Symbol.for("react.concurrent_mode") : 60111, Xu = Ke ? Symbol.for("react.forward_ref") : 60112, qu = Ke ? Symbol.for("react.suspense") : 60113, nP = Ke ? Symbol.for("react.suspense_list") : 60120, Qu = Ke ? Symbol.for("react.memo") : 60115, Zu = Ke ? Symbol.for("react.lazy") : 60116, oP = Ke ? Symbol.for("react.block") : 60121, iP = Ke ? Symbol.for("react.fundamental") : 60117, aP = Ke ? Symbol.for("react.responder") : 60118, sP = Ke ? Symbol.for("react.scope") : 60119;
function Ft(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Sp:
        switch (e = e.type, e) {
          case wp:
          case Yu:
          case Wu:
          case Hu:
          case Uu:
          case qu:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ku:
              case Xu:
              case Zu:
              case Qu:
              case Gu:
                return e;
              default:
                return t;
            }
        }
      case xp:
        return t;
    }
  }
}
function sS(e) {
  return Ft(e) === Yu;
}
le.AsyncMode = wp;
le.ConcurrentMode = Yu;
le.ContextConsumer = Ku;
le.ContextProvider = Gu;
le.Element = Sp;
le.ForwardRef = Xu;
le.Fragment = Wu;
le.Lazy = Zu;
le.Memo = Qu;
le.Portal = xp;
le.Profiler = Hu;
le.StrictMode = Uu;
le.Suspense = qu;
le.isAsyncMode = function(e) {
  return sS(e) || Ft(e) === wp;
};
le.isConcurrentMode = sS;
le.isContextConsumer = function(e) {
  return Ft(e) === Ku;
};
le.isContextProvider = function(e) {
  return Ft(e) === Gu;
};
le.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Sp;
};
le.isForwardRef = function(e) {
  return Ft(e) === Xu;
};
le.isFragment = function(e) {
  return Ft(e) === Wu;
};
le.isLazy = function(e) {
  return Ft(e) === Zu;
};
le.isMemo = function(e) {
  return Ft(e) === Qu;
};
le.isPortal = function(e) {
  return Ft(e) === xp;
};
le.isProfiler = function(e) {
  return Ft(e) === Hu;
};
le.isStrictMode = function(e) {
  return Ft(e) === Uu;
};
le.isSuspense = function(e) {
  return Ft(e) === qu;
};
le.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Wu || e === Yu || e === Hu || e === Uu || e === qu || e === nP || typeof e == "object" && e !== null && (e.$$typeof === Zu || e.$$typeof === Qu || e.$$typeof === Gu || e.$$typeof === Ku || e.$$typeof === Xu || e.$$typeof === iP || e.$$typeof === aP || e.$$typeof === sP || e.$$typeof === oP);
};
le.typeOf = Ft;
aS.exports = le;
var lP = aS.exports, lS = lP, uP = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, cP = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, uS = {};
uS[lS.ForwardRef] = uP;
uS[lS.Memo] = cP;
var dP = !0;
function fP(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var cS = function(t, r, n) {
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
  dP === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, dS = function(t, r, n) {
  cS(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function hP(e) {
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
var pP = {
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
}, mP = /[A-Z]|^ms/g, vP = /_EMO_([^_]+?)_([^]*?)_EMO_/g, fS = function(t) {
  return t.charCodeAt(1) === 45;
}, sg = function(t) {
  return t != null && typeof t != "boolean";
}, td = /* @__PURE__ */ oS(function(e) {
  return fS(e) ? e : e.replace(mP, "-$&").toLowerCase();
}), lg = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(vP, function(n, o, i) {
          return fr = {
            name: o,
            styles: i,
            next: fr
          }, o;
        });
  }
  return pP[t] !== 1 && !fS(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function La(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return fr = {
          name: r.name,
          styles: r.styles,
          next: fr
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            fr = {
              name: n.name,
              styles: n.styles,
              next: fr
            }, n = n.next;
        var o = r.styles + ";";
        return o;
      }
      return gP(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = fr, a = r(e);
        return fr = i, La(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return r;
  var s = t[r];
  return s !== void 0 ? s : r;
}
function gP(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += La(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : sg(a) && (n += td(i) + ":" + lg(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          sg(a[s]) && (n += td(i) + ":" + lg(i, a[s]) + ";");
      else {
        var l = La(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += td(i) + ":" + l + ";";
            break;
          }
          default:
            n += i + "{" + l + "}";
        }
      }
    }
  return n;
}
var ug = /label:\s*([^\s;\n{]+)\s*(;|$)/g, fr, kp = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  fr = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += La(n, r, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += La(n, r, t[s]), o && (i += a[s]);
  ug.lastIndex = 0;
  for (var l = "", u; (u = ug.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = hP(i) + l;
  return {
    name: c,
    styles: i,
    next: fr
  };
}, yP = function(t) {
  return t();
}, hS = Ym.useInsertionEffect ? Ym.useInsertionEffect : !1, bP = hS || yP, cg = hS || b.useLayoutEffect, pS = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ rP({
    key: "css"
  }) : null
);
pS.Provider;
var mS = function(t) {
  return /* @__PURE__ */ b.forwardRef(function(r, n) {
    var o = b.useContext(pS);
    return t(r, o, n);
  });
}, Na = /* @__PURE__ */ b.createContext({}), SP = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    return n;
  }
  return no({}, t, r);
}, xP = /* @__PURE__ */ ig(function(e) {
  return ig(function(t) {
    return SP(e, t);
  });
}), wP = function(t) {
  var r = b.useContext(Na);
  return t.theme !== r && (r = xP(r)(t.theme)), /* @__PURE__ */ b.createElement(Na.Provider, {
    value: r
  }, t.children);
}, Ju = /* @__PURE__ */ mS(function(e, t) {
  var r = e.styles, n = kp([r], void 0, b.useContext(Na)), o = b.useRef();
  return cg(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), cg(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && dS(t, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function kP() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return kp(t);
}
var ec = function() {
  var t = kP.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, vS = String.raw, gS = vS`
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
`, CP = () => /* @__PURE__ */ _.jsx(Ju, { styles: gS }), _P = ({ scope: e = "" }) => /* @__PURE__ */ _.jsx(
  Ju,
  {
    styles: vS`
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

      ${gS}
    `
  }
);
function TP(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function at(e = {}) {
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
        i ?? TP(n, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [PP, EP] = at({
  strict: !1,
  name: "PortalManagerContext"
});
function yS(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ _.jsx(PP, { value: { zIndex: r }, children: t });
}
yS.displayName = "PortalManager";
var Gn = globalThis != null && globalThis.document ? b.useLayoutEffect : b.useEffect, [bS, $P] = at({
  strict: !1,
  name: "PortalContext"
}), Cp = "chakra-portal", AP = ".chakra-portal", RP = (e) => /* @__PURE__ */ _.jsx(
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
), MP = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = b.useState(null), i = b.useRef(null), [, a] = b.useState({});
  b.useEffect(() => a({}), []);
  const s = $P(), l = EP();
  Gn(() => {
    if (!n)
      return;
    const c = n.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = Cp, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ _.jsx(RP, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return i.current ? vp.createPortal(
    /* @__PURE__ */ _.jsx(bS, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ _.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, IP = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = b.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = Cp), l;
  }, [o]), [, s] = b.useState({});
  return Gn(() => s({}), []), Gn(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? vp.createPortal(
    /* @__PURE__ */ _.jsx(bS, { value: n ? a : null, children: t }),
    a
  ) : null;
};
function os(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ _.jsx(IP, { containerRef: r, ...n }) : /* @__PURE__ */ _.jsx(MP, { ...n });
}
os.className = Cp;
os.selector = AP;
os.displayName = "Portal";
function SS() {
  const e = b.useContext(
    Na
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var _p = b.createContext({});
_p.displayName = "ColorModeContext";
function Tp() {
  const e = b.useContext(_p);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var js = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function zP(e = {}) {
  const { preventTransition: t = !0 } = e, r = {
    setDataset: (n) => {
      const o = t ? r.preventTransition() : void 0;
      document.documentElement.dataset.theme = n, document.documentElement.style.colorScheme = n, o == null || o();
    },
    setClassName(n) {
      document.body.classList.add(n ? js.dark : js.light), document.body.classList.remove(n ? js.light : js.dark);
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
var FP = "chakra-ui-color-mode";
function DP(e) {
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
var OP = DP(FP), dg = () => {
};
function fg(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function xS(e) {
  const {
    value: t,
    children: r,
    options: {
      useSystemColorMode: n,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = OP
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = b.useState(
    () => fg(a, s)
  ), [c, d] = b.useState(
    () => fg(a)
  ), { getSystemTheme: f, setClassName: h, setDataset: m, addListener: y } = b.useMemo(
    () => zP({ preventTransition: i }),
    [i]
  ), x = o === "system" && !l ? c : l, v = b.useCallback(
    (w) => {
      const T = w === "system" ? f() : w;
      u(T), h(T === "dark"), m(T), a.set(T);
    },
    [a, f, h, m]
  );
  Gn(() => {
    o === "system" && d(f());
  }, []), b.useEffect(() => {
    const w = a.get();
    if (w) {
      v(w);
      return;
    }
    if (o === "system") {
      v("system");
      return;
    }
    v(s);
  }, [a, s, o, v]);
  const p = b.useCallback(() => {
    v(x === "dark" ? "light" : "dark");
  }, [x, v]);
  b.useEffect(() => {
    if (n)
      return y(v);
  }, [n, y, v]);
  const g = b.useMemo(
    () => ({
      colorMode: t ?? x,
      toggleColorMode: t ? dg : p,
      setColorMode: t ? dg : v,
      forced: t !== void 0
    }),
    [x, p, v, t]
  );
  return /* @__PURE__ */ _.jsx(_p.Provider, { value: g, children: r });
}
xS.displayName = "ColorModeProvider";
var LP = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function NP(e) {
  let t = e;
  return LP.has(t) || (t = "light"), t;
}
function jP(e = {}) {
  const {
    initialColorMode: t = "light",
    type: r = "localStorage",
    storageKey: n = "chakra-ui-color-mode"
  } = e, o = NP(t), i = r === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${n}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${n}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function BP(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ _.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: jP(e) }
    }
  );
}
function VP() {
  const e = Tp(), t = SS();
  return { ...e, theme: t };
}
var be = (...e) => e.filter(Boolean).join(" ");
function Yt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function on(e, ...t) {
  return WP(e) ? e(...t) : e;
}
var WP = (e) => typeof e == "function", Q = (e) => e ? "" : void 0, rd = (e) => e ? !0 : void 0;
function je(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function UP(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var ou = { exports: {} };
ou.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", h = "[object Function]", m = "[object GeneratorFunction]", y = "[object Map]", x = "[object Number]", v = "[object Null]", p = "[object Object]", g = "[object Proxy]", w = "[object RegExp]", T = "[object Set]", $ = "[object String]", P = "[object Undefined]", A = "[object WeakMap]", R = "[object ArrayBuffer]", z = "[object DataView]", H = "[object Float32Array]", ce = "[object Float64Array]", me = "[object Int8Array]", Z = "[object Int16Array]", ue = "[object Int32Array]", $e = "[object Uint8Array]", Ie = "[object Uint8ClampedArray]", I = "[object Uint16Array]", N = "[object Uint32Array]", V = /[\\^$.*+?()[\]{}|]/g, j = /^\[object .+?Constructor\]$/, J = /^(?:0|[1-9]\d*)$/, W = {};
  W[H] = W[ce] = W[me] = W[Z] = W[ue] = W[$e] = W[Ie] = W[I] = W[N] = !0, W[s] = W[l] = W[R] = W[c] = W[z] = W[d] = W[f] = W[h] = W[y] = W[x] = W[p] = W[w] = W[T] = W[$] = W[A] = !1;
  var te = typeof tn == "object" && tn && tn.Object === Object && tn, kt = typeof self == "object" && self && self.Object === Object && self, Se = te || kt || Function("return this")(), ze = t && !t.nodeType && t, et = ze && !0 && e && !e.nodeType && e, Dt = et && et.exports === ze, Ct = Dt && te.process, Ot = function() {
    try {
      var S = et && et.require && et.require("util").types;
      return S || Ct && Ct.binding && Ct.binding("util");
    } catch {
    }
  }(), Tn = Ot && Ot.isTypedArray;
  function uo(S, k, E) {
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
  function _m(S, k) {
    for (var E = -1, F = Array(S); ++E < S; )
      F[E] = k(E);
    return F;
  }
  function U(S) {
    return function(k) {
      return S(k);
    };
  }
  function pt(S, k) {
    return S == null ? void 0 : S[k];
  }
  function Lt(S, k) {
    return function(E) {
      return S(k(E));
    };
  }
  var co = Array.prototype, Rk = Function.prototype, ps = Object.prototype, gc = Se["__core-js_shared__"], ms = Rk.toString, wr = ps.hasOwnProperty, Tm = function() {
    var S = /[^.]+$/.exec(gc && gc.keys && gc.keys.IE_PROTO || "");
    return S ? "Symbol(src)_1." + S : "";
  }(), Pm = ps.toString, Mk = ms.call(Object), Ik = RegExp(
    "^" + ms.call(wr).replace(V, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), vs = Dt ? Se.Buffer : void 0, Em = Se.Symbol, $m = Se.Uint8Array, Am = vs ? vs.allocUnsafe : void 0, Rm = Lt(Object.getPrototypeOf, Object), Mm = Object.create, zk = ps.propertyIsEnumerable, Fk = co.splice, Pn = Em ? Em.toStringTag : void 0, gs = function() {
    try {
      var S = Sc(Object, "defineProperty");
      return S({}, "", {}), S;
    } catch {
    }
  }(), Dk = vs ? vs.isBuffer : void 0, Im = Math.max, Ok = Date.now, zm = Sc(Se, "Map"), Ci = Sc(Object, "create"), Lk = /* @__PURE__ */ function() {
    function S() {
    }
    return function(k) {
      if (!$n(k))
        return {};
      if (Mm)
        return Mm(k);
      S.prototype = k;
      var E = new S();
      return S.prototype = void 0, E;
    };
  }();
  function En(S) {
    var k = -1, E = S == null ? 0 : S.length;
    for (this.clear(); ++k < E; ) {
      var F = S[k];
      this.set(F[0], F[1]);
    }
  }
  function Nk() {
    this.__data__ = Ci ? Ci(null) : {}, this.size = 0;
  }
  function jk(S) {
    var k = this.has(S) && delete this.__data__[S];
    return this.size -= k ? 1 : 0, k;
  }
  function Bk(S) {
    var k = this.__data__;
    if (Ci) {
      var E = k[S];
      return E === n ? void 0 : E;
    }
    return wr.call(k, S) ? k[S] : void 0;
  }
  function Vk(S) {
    var k = this.__data__;
    return Ci ? k[S] !== void 0 : wr.call(k, S);
  }
  function Wk(S, k) {
    var E = this.__data__;
    return this.size += this.has(S) ? 0 : 1, E[S] = Ci && k === void 0 ? n : k, this;
  }
  En.prototype.clear = Nk, En.prototype.delete = jk, En.prototype.get = Bk, En.prototype.has = Vk, En.prototype.set = Wk;
  function kr(S) {
    var k = -1, E = S == null ? 0 : S.length;
    for (this.clear(); ++k < E; ) {
      var F = S[k];
      this.set(F[0], F[1]);
    }
  }
  function Uk() {
    this.__data__ = [], this.size = 0;
  }
  function Hk(S) {
    var k = this.__data__, E = ys(k, S);
    if (E < 0)
      return !1;
    var F = k.length - 1;
    return E == F ? k.pop() : Fk.call(k, E, 1), --this.size, !0;
  }
  function Gk(S) {
    var k = this.__data__, E = ys(k, S);
    return E < 0 ? void 0 : k[E][1];
  }
  function Kk(S) {
    return ys(this.__data__, S) > -1;
  }
  function Yk(S, k) {
    var E = this.__data__, F = ys(E, S);
    return F < 0 ? (++this.size, E.push([S, k])) : E[F][1] = k, this;
  }
  kr.prototype.clear = Uk, kr.prototype.delete = Hk, kr.prototype.get = Gk, kr.prototype.has = Kk, kr.prototype.set = Yk;
  function fo(S) {
    var k = -1, E = S == null ? 0 : S.length;
    for (this.clear(); ++k < E; ) {
      var F = S[k];
      this.set(F[0], F[1]);
    }
  }
  function Xk() {
    this.size = 0, this.__data__ = {
      hash: new En(),
      map: new (zm || kr)(),
      string: new En()
    };
  }
  function qk(S) {
    var k = Ss(this, S).delete(S);
    return this.size -= k ? 1 : 0, k;
  }
  function Qk(S) {
    return Ss(this, S).get(S);
  }
  function Zk(S) {
    return Ss(this, S).has(S);
  }
  function Jk(S, k) {
    var E = Ss(this, S), F = E.size;
    return E.set(S, k), this.size += E.size == F ? 0 : 1, this;
  }
  fo.prototype.clear = Xk, fo.prototype.delete = qk, fo.prototype.get = Qk, fo.prototype.has = Zk, fo.prototype.set = Jk;
  function ho(S) {
    var k = this.__data__ = new kr(S);
    this.size = k.size;
  }
  function eC() {
    this.__data__ = new kr(), this.size = 0;
  }
  function tC(S) {
    var k = this.__data__, E = k.delete(S);
    return this.size = k.size, E;
  }
  function rC(S) {
    return this.__data__.get(S);
  }
  function nC(S) {
    return this.__data__.has(S);
  }
  function oC(S, k) {
    var E = this.__data__;
    if (E instanceof kr) {
      var F = E.__data__;
      if (!zm || F.length < r - 1)
        return F.push([S, k]), this.size = ++E.size, this;
      E = this.__data__ = new fo(F);
    }
    return E.set(S, k), this.size = E.size, this;
  }
  ho.prototype.clear = eC, ho.prototype.delete = tC, ho.prototype.get = rC, ho.prototype.has = nC, ho.prototype.set = oC;
  function iC(S, k) {
    var E = kc(S), F = !E && wc(S), q = !E && !F && Nm(S), de = !E && !F && !q && Bm(S), xe = E || F || q || de, Y = xe ? _m(S.length, String) : [], we = Y.length;
    for (var Nt in S)
      (k || wr.call(S, Nt)) && !(xe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Nt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      q && (Nt == "offset" || Nt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      de && (Nt == "buffer" || Nt == "byteLength" || Nt == "byteOffset") || // Skip index properties.
      Om(Nt, we))) && Y.push(Nt);
    return Y;
  }
  function yc(S, k, E) {
    (E !== void 0 && !xs(S[k], E) || E === void 0 && !(k in S)) && bc(S, k, E);
  }
  function aC(S, k, E) {
    var F = S[k];
    (!(wr.call(S, k) && xs(F, E)) || E === void 0 && !(k in S)) && bc(S, k, E);
  }
  function ys(S, k) {
    for (var E = S.length; E--; )
      if (xs(S[E][0], k))
        return E;
    return -1;
  }
  function bc(S, k, E) {
    k == "__proto__" && gs ? gs(S, k, {
      configurable: !0,
      enumerable: !0,
      value: E,
      writable: !0
    }) : S[k] = E;
  }
  var sC = SC();
  function bs(S) {
    return S == null ? S === void 0 ? P : v : Pn && Pn in Object(S) ? xC(S) : PC(S);
  }
  function Fm(S) {
    return _i(S) && bs(S) == s;
  }
  function lC(S) {
    if (!$n(S) || _C(S))
      return !1;
    var k = _c(S) ? Ik : j;
    return k.test(RC(S));
  }
  function uC(S) {
    return _i(S) && jm(S.length) && !!W[bs(S)];
  }
  function cC(S) {
    if (!$n(S))
      return TC(S);
    var k = Lm(S), E = [];
    for (var F in S)
      F == "constructor" && (k || !wr.call(S, F)) || E.push(F);
    return E;
  }
  function Dm(S, k, E, F, q) {
    S !== k && sC(k, function(de, xe) {
      if (q || (q = new ho()), $n(de))
        dC(S, k, xe, E, Dm, F, q);
      else {
        var Y = F ? F(xc(S, xe), de, xe + "", S, k, q) : void 0;
        Y === void 0 && (Y = de), yc(S, xe, Y);
      }
    }, Vm);
  }
  function dC(S, k, E, F, q, de, xe) {
    var Y = xc(S, E), we = xc(k, E), Nt = xe.get(we);
    if (Nt) {
      yc(S, E, Nt);
      return;
    }
    var _t = de ? de(Y, we, E + "", S, k, xe) : void 0, Ti = _t === void 0;
    if (Ti) {
      var Tc = kc(we), Pc = !Tc && Nm(we), Um = !Tc && !Pc && Bm(we);
      _t = we, Tc || Pc || Um ? kc(Y) ? _t = Y : MC(Y) ? _t = gC(Y) : Pc ? (Ti = !1, _t = pC(we, !0)) : Um ? (Ti = !1, _t = vC(we, !0)) : _t = [] : IC(we) || wc(we) ? (_t = Y, wc(Y) ? _t = zC(Y) : (!$n(Y) || _c(Y)) && (_t = wC(we))) : Ti = !1;
    }
    Ti && (xe.set(we, _t), q(_t, we, F, de, xe), xe.delete(we)), yc(S, E, _t);
  }
  function fC(S, k) {
    return $C(EC(S, k, Wm), S + "");
  }
  var hC = gs ? function(S, k) {
    return gs(S, "toString", {
      configurable: !0,
      enumerable: !1,
      value: DC(k),
      writable: !0
    });
  } : Wm;
  function pC(S, k) {
    if (k)
      return S.slice();
    var E = S.length, F = Am ? Am(E) : new S.constructor(E);
    return S.copy(F), F;
  }
  function mC(S) {
    var k = new S.constructor(S.byteLength);
    return new $m(k).set(new $m(S)), k;
  }
  function vC(S, k) {
    var E = k ? mC(S.buffer) : S.buffer;
    return new S.constructor(E, S.byteOffset, S.length);
  }
  function gC(S, k) {
    var E = -1, F = S.length;
    for (k || (k = Array(F)); ++E < F; )
      k[E] = S[E];
    return k;
  }
  function yC(S, k, E, F) {
    var q = !E;
    E || (E = {});
    for (var de = -1, xe = k.length; ++de < xe; ) {
      var Y = k[de], we = F ? F(E[Y], S[Y], Y, E, S) : void 0;
      we === void 0 && (we = S[Y]), q ? bc(E, Y, we) : aC(E, Y, we);
    }
    return E;
  }
  function bC(S) {
    return fC(function(k, E) {
      var F = -1, q = E.length, de = q > 1 ? E[q - 1] : void 0, xe = q > 2 ? E[2] : void 0;
      for (de = S.length > 3 && typeof de == "function" ? (q--, de) : void 0, xe && kC(E[0], E[1], xe) && (de = q < 3 ? void 0 : de, q = 1), k = Object(k); ++F < q; ) {
        var Y = E[F];
        Y && S(k, Y, F, de);
      }
      return k;
    });
  }
  function SC(S) {
    return function(k, E, F) {
      for (var q = -1, de = Object(k), xe = F(k), Y = xe.length; Y--; ) {
        var we = xe[S ? Y : ++q];
        if (E(de[we], we, de) === !1)
          break;
      }
      return k;
    };
  }
  function Ss(S, k) {
    var E = S.__data__;
    return CC(k) ? E[typeof k == "string" ? "string" : "hash"] : E.map;
  }
  function Sc(S, k) {
    var E = pt(S, k);
    return lC(E) ? E : void 0;
  }
  function xC(S) {
    var k = wr.call(S, Pn), E = S[Pn];
    try {
      S[Pn] = void 0;
      var F = !0;
    } catch {
    }
    var q = Pm.call(S);
    return F && (k ? S[Pn] = E : delete S[Pn]), q;
  }
  function wC(S) {
    return typeof S.constructor == "function" && !Lm(S) ? Lk(Rm(S)) : {};
  }
  function Om(S, k) {
    var E = typeof S;
    return k = k ?? a, !!k && (E == "number" || E != "symbol" && J.test(S)) && S > -1 && S % 1 == 0 && S < k;
  }
  function kC(S, k, E) {
    if (!$n(E))
      return !1;
    var F = typeof k;
    return (F == "number" ? Cc(E) && Om(k, E.length) : F == "string" && k in E) ? xs(E[k], S) : !1;
  }
  function CC(S) {
    var k = typeof S;
    return k == "string" || k == "number" || k == "symbol" || k == "boolean" ? S !== "__proto__" : S === null;
  }
  function _C(S) {
    return !!Tm && Tm in S;
  }
  function Lm(S) {
    var k = S && S.constructor, E = typeof k == "function" && k.prototype || ps;
    return S === E;
  }
  function TC(S) {
    var k = [];
    if (S != null)
      for (var E in Object(S))
        k.push(E);
    return k;
  }
  function PC(S) {
    return Pm.call(S);
  }
  function EC(S, k, E) {
    return k = Im(k === void 0 ? S.length - 1 : k, 0), function() {
      for (var F = arguments, q = -1, de = Im(F.length - k, 0), xe = Array(de); ++q < de; )
        xe[q] = F[k + q];
      q = -1;
      for (var Y = Array(k + 1); ++q < k; )
        Y[q] = F[q];
      return Y[k] = E(xe), uo(S, this, Y);
    };
  }
  function xc(S, k) {
    if (!(k === "constructor" && typeof S[k] == "function") && k != "__proto__")
      return S[k];
  }
  var $C = AC(hC);
  function AC(S) {
    var k = 0, E = 0;
    return function() {
      var F = Ok(), q = i - (F - E);
      if (E = F, q > 0) {
        if (++k >= o)
          return arguments[0];
      } else
        k = 0;
      return S.apply(void 0, arguments);
    };
  }
  function RC(S) {
    if (S != null) {
      try {
        return ms.call(S);
      } catch {
      }
      try {
        return S + "";
      } catch {
      }
    }
    return "";
  }
  function xs(S, k) {
    return S === k || S !== S && k !== k;
  }
  var wc = Fm(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Fm : function(S) {
    return _i(S) && wr.call(S, "callee") && !zk.call(S, "callee");
  }, kc = Array.isArray;
  function Cc(S) {
    return S != null && jm(S.length) && !_c(S);
  }
  function MC(S) {
    return _i(S) && Cc(S);
  }
  var Nm = Dk || OC;
  function _c(S) {
    if (!$n(S))
      return !1;
    var k = bs(S);
    return k == h || k == m || k == u || k == g;
  }
  function jm(S) {
    return typeof S == "number" && S > -1 && S % 1 == 0 && S <= a;
  }
  function $n(S) {
    var k = typeof S;
    return S != null && (k == "object" || k == "function");
  }
  function _i(S) {
    return S != null && typeof S == "object";
  }
  function IC(S) {
    if (!_i(S) || bs(S) != p)
      return !1;
    var k = Rm(S);
    if (k === null)
      return !0;
    var E = wr.call(k, "constructor") && k.constructor;
    return typeof E == "function" && E instanceof E && ms.call(E) == Mk;
  }
  var Bm = Tn ? U(Tn) : uC;
  function zC(S) {
    return yC(S, Vm(S));
  }
  function Vm(S) {
    return Cc(S) ? iC(S, !0) : cC(S);
  }
  var FC = bC(function(S, k, E, F) {
    Dm(S, k, E, F);
  });
  function DC(S) {
    return function() {
      return S;
    };
  }
  function Wm(S) {
    return S;
  }
  function OC() {
    return !1;
  }
  e.exports = FC;
})(ou, ou.exports);
var HP = ou.exports;
const Gt = /* @__PURE__ */ Qa(HP);
var GP = (e) => /!(important)?$/.test(e), hg = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, KP = (e, t) => (r) => {
  const n = String(t), o = GP(n), i = hg(n), a = e ? `${e}.${i}` : i;
  let s = Yt(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
  return s = hg(s), o ? `${s} !important` : s;
};
function Pp(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, a) => {
    var s;
    const l = KP(t, i)(a);
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l;
    return n && (u = n(u, a)), u;
  };
}
var Bs = (...e) => (t) => e.reduce((r, n) => n(r), t);
function jt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = Pp({
      scale: e,
      transform: t
    }), n;
  };
}
var YP = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function XP(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: YP(t),
    transform: r ? Pp({
      scale: r,
      compose: n
    }) : n
  };
}
var wS = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function qP() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...wS
  ].join(" ");
}
function QP() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...wS
  ].join(" ");
}
var ZP = {
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
}, JP = {
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
function eE(e) {
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
var tE = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Lf = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, rE = new Set(Object.values(Lf)), Nf = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), nE = (e) => e.trim();
function oE(e, t) {
  if (e == null || Nf.has(e))
    return e;
  if (!(jf(e) || Nf.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(nE).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in Lf ? Lf[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (rE.has(f))
      return f;
    const h = f.indexOf(" "), [m, y] = h !== -1 ? [f.substr(0, h), f.substr(h + 1)] : [f], x = jf(y) ? y : y && y.split(" "), v = `colors.${m}`, p = v in t.__cssMap ? t.__cssMap[v].varRef : m;
    return x ? [
      p,
      ...Array.isArray(x) ? x : [x]
    ].join(" ") : p;
  });
  return `${s}(${d.join(", ")})`;
}
var jf = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), iE = (e, t) => oE(e, t ?? {});
function aE(e) {
  return /^var\(--.+\)$/.test(e);
}
var sE = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, sr = (e) => (t) => `${e}(${t})`, X = {
  filter(e) {
    return e !== "auto" ? e : ZP;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : JP;
  },
  ring(e) {
    return eE(X.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? qP() : e === "auto-gpu" ? QP() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = sE(e);
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
    if (aE(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: iE,
  blur: sr("blur"),
  opacity: sr("opacity"),
  brightness: sr("brightness"),
  contrast: sr("contrast"),
  dropShadow: sr("drop-shadow"),
  grayscale: sr("grayscale"),
  hueRotate: (e) => sr("hue-rotate")(X.degree(e)),
  invert: sr("invert"),
  saturate: sr("saturate"),
  sepia: sr("sepia"),
  bgImage(e) {
    return e == null || jf(e) || Nf.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = tE[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, C = {
  borderWidths: jt("borderWidths"),
  borderStyles: jt("borderStyles"),
  colors: jt("colors"),
  borders: jt("borders"),
  gradients: jt("gradients", X.gradient),
  radii: jt("radii", X.px),
  space: jt("space", Bs(X.vh, X.px)),
  spaceT: jt("space", Bs(X.vh, X.px)),
  degreeT(e) {
    return { property: e, transform: X.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: Pp({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: jt("sizes", Bs(X.vh, X.px)),
  sizesT: jt("sizes", Bs(X.vh, X.fraction)),
  shadows: jt("shadows"),
  logical: XP,
  blur: jt("blur", X.blur)
}, yl = {
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
Object.assign(yl, {
  bgImage: yl.backgroundImage,
  bgImg: yl.backgroundImage
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
var lE = {
  color: C.colors("color"),
  textColor: C.colors("color"),
  fill: C.colors("fill"),
  stroke: C.colors("stroke")
}, Bf = {
  boxShadow: C.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: C.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: C.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Bf, {
  shadow: Bf.boxShadow
});
var uE = {
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
}, iu = {
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
Object.assign(iu, {
  flexDir: iu.flexDirection
});
var kS = {
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
}, cE = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: X.outline },
  outlineOffset: !0,
  outlineColor: C.colors("outlineColor")
}, Vt = {
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
Object.assign(Vt, {
  w: Vt.width,
  h: Vt.height,
  minW: Vt.minWidth,
  maxW: Vt.maxWidth,
  minH: Vt.minHeight,
  maxH: Vt.maxHeight,
  overscroll: Vt.overscrollBehavior,
  overscrollX: Vt.overscrollBehaviorX,
  overscrollY: Vt.overscrollBehaviorY
});
var dE = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: C.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: C.prop("listStyleImage")
};
function fE(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var hE = (e) => {
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
}, pE = hE(fE), mE = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, vE = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, nd = (e, t, r) => {
  const n = {}, o = pE(e, t, {});
  for (const i in o)
    i in r && r[i] != null || (n[i] = o[i]);
  return n;
}, gE = {
  srOnly: {
    transform(e) {
      return e === !0 ? mE : e === "focusable" ? vE : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => nd(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => nd(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => nd(t, e, r)
  }
}, la = {
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
Object.assign(la, {
  insetStart: la.insetInlineStart,
  insetEnd: la.insetInlineEnd
});
var yE = {
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
var bE = {
  textDecorationColor: C.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: C.shadows("textShadow")
}, SE = {
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
}, xE = {
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
}, wE = {
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
}, kE = {
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
function CS(e) {
  return Yt(e) && e.reference ? e.reference : String(e);
}
var tc = (e, ...t) => t.map(CS).join(` ${e} `).replace(/calc/g, ""), pg = (...e) => `calc(${tc("+", ...e)})`, mg = (...e) => `calc(${tc("-", ...e)})`, Vf = (...e) => `calc(${tc("*", ...e)})`, vg = (...e) => `calc(${tc("/", ...e)})`, gg = (e) => {
  const t = CS(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Vf(t, -1);
}, On = Object.assign(
  (e) => ({
    add: (...t) => On(pg(e, ...t)),
    subtract: (...t) => On(mg(e, ...t)),
    multiply: (...t) => On(Vf(e, ...t)),
    divide: (...t) => On(vg(e, ...t)),
    negate: () => On(gg(e)),
    toString: () => e.toString()
  }),
  {
    add: pg,
    subtract: mg,
    multiply: Vf,
    divide: vg,
    negate: gg
  }
);
function CE(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function _E(e) {
  const t = CE(e.toString());
  return PE(TE(t));
}
function TE(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function PE(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function EE(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function $E(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function AE(e, t = "") {
  return _E(`--${EE(e, t)}`);
}
function L(e, t, r) {
  const n = AE(e, r);
  return {
    variable: n,
    reference: $E(n, t)
  };
}
function RE(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, i] = n;
      r[o] = L(`${e}-${o}`, i);
      continue;
    }
    r[n] = L(`${e}-${n}`);
  }
  return r;
}
function ME(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function IE(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Wf(e) {
  if (e == null)
    return e;
  const { unitless: t } = IE(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var _S = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Ep = (e) => Object.fromEntries(Object.entries(e).sort(_S));
function yg(e) {
  const t = Ep(e);
  return Object.assign(Object.values(t), t);
}
function zE(e) {
  const t = Object.keys(Ep(e));
  return new Set(t);
}
function bg(e) {
  var t;
  if (!e)
    return e;
  e = (t = Wf(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function Gi(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Wf(e)})`), t && r.push("and", `(max-width: ${Wf(t)})`), r.join(" ");
}
function FE(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = yg(e), n = Object.entries(e).sort(_S).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? bg(d) : void 0, {
      _minW: bg(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: Gi(null, d),
      minWQuery: Gi(s),
      minMaxQuery: Gi(s, d)
    };
  }), o = zE(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Ep(e),
    asArray: yg(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...r.map((a) => Gi(a)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(a) {
      if (!Yt(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; ME(s) === null; )
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
}, Hr = (e) => TS((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), Cr = (e) => TS((t) => e(t, "~ &"), "[data-peer]", ".peer"), TS = (e, ...t) => t.map(e).join(", "), rc = {
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
  _groupHover: Hr(Ye.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: Cr(Ye.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: Hr(Ye.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: Cr(Ye.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: Hr(Ye.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: Cr(Ye.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: Hr(Ye.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: Cr(Ye.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: Hr(Ye.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: Cr(Ye.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: Hr(Ye.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: Cr(Ye.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: Hr(Ye.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: Cr(Ye.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: Hr(Ye.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: Cr(Ye.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: Cr(Ye.placeholderShown),
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
}, PS = Object.keys(
  rc
);
function Sg(e, t) {
  return L(String(e).replace(/\./g, "-"), void 0, t);
}
function DE(e, t) {
  let r = {};
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = Sg(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [h, ...m] = f, y = `${h}.-${m.join(".")}`, x = On.negate(s), v = On.negate(u);
        n[y] = {
          value: x,
          var: l,
          varRef: v
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
      const m = [String(o).split(".")[0], f].join(".");
      if (!e[m])
        return f;
      const { reference: x } = Sg(m, t == null ? void 0 : t.cssVarPrefix);
      return x;
    }, d = Yt(s) ? s : { default: s };
    r = Gt(
      r,
      Object.entries(d).reduce(
        (f, [h, m]) => {
          var y, x;
          if (!m)
            return f;
          const v = c(`${m}`);
          if (h === "default")
            return f[l] = v, f;
          const p = (x = (y = rc) == null ? void 0 : y[h]) != null ? x : h;
          return f[p] = { [l]: v }, f;
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
function OE(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function LE(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function NE(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function xg(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function i(a, s = []) {
    var l;
    if (NE(a) || Array.isArray(a)) {
      const u = {};
      for (const [c, d] of Object.entries(a)) {
        const f = (l = o == null ? void 0 : o(c)) != null ? l : c, h = [...s, f];
        if (n != null && n(a, h))
          return t(a, s);
        u[f] = i(d, h);
      }
      return u;
    }
    return t(a, s);
  }
  return i(e);
}
var jE = [
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
function BE(e) {
  return LE(e, jE);
}
function VE(e) {
  return e.semanticTokens;
}
function WE(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var UE = (e) => PS.includes(e) || e === "default";
function HE({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return xg(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), xg(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(UE)
    }
  ), r;
}
function GE(e) {
  var t;
  const r = WE(e), n = BE(r), o = VE(r), i = HE({ tokens: n, semanticTokens: o }), a = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = DE(i, { cssVarPrefix: a });
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
    __breakpoints: FE(r.breakpoints)
  }), r;
}
var $p = Gt(
  {},
  yl,
  re,
  lE,
  iu,
  Vt,
  uE,
  yE,
  cE,
  kS,
  gE,
  la,
  Bf,
  ge,
  kE,
  wE,
  bE,
  SE,
  dE,
  xE
);
Object.assign({}, ge, Vt, iu, kS, la);
var KE = [...Object.keys($p), ...PS], YE = { ...$p, ...rc }, XE = (e) => e in YE, qE = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = on(e[a], t);
    if (s == null)
      continue;
    if (s = Yt(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
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
function QE(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (n = !0, r += i) : i === ")" ? (n = !1, r += i) : i === "," && !n ? (t.push(r), r = "") : r += i;
  }
  return r = r.trim(), r && t.push(r), t;
}
function ZE(e) {
  return /^var\(--.+\)$/.test(e);
}
var JE = (e, t) => e.startsWith("--") && typeof t == "string" && !ZE(t), e5 = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = QE(t);
  return t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t), t;
};
function t5(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = on(i, n), d = qE(c)(n);
    let f = {};
    for (let h in d) {
      const m = d[h];
      let y = on(m, n);
      h in r && (h = r[h]), JE(h, y) && (y = e5(n, y));
      let x = t[h];
      if (x === !0 && (x = { property: h }), Yt(y)) {
        f[h] = (s = f[h]) != null ? s : {}, f[h] = Gt(
          {},
          f[h],
          o(y, !0)
        );
        continue;
      }
      let v = (u = (l = x == null ? void 0 : x.transform) == null ? void 0 : l.call(x, y, n, c)) != null ? u : y;
      v = x != null && x.processResult ? o(v, !0) : v;
      const p = on(x == null ? void 0 : x.property, n);
      if (!a && (x != null && x.static)) {
        const g = on(x.static, n);
        f = Gt({}, f, g);
      }
      if (p && Array.isArray(p)) {
        for (const g of p)
          f[g] = v;
        continue;
      }
      if (p) {
        p === "&" && Yt(v) ? f = Gt({}, f, v) : f[p] = v;
        continue;
      }
      if (Yt(v)) {
        f = Gt({}, f, v);
        continue;
      }
      f[h] = v;
    }
    return f;
  };
  return o;
}
var ES = (e) => (t) => t5({
  theme: t,
  pseudos: rc,
  configs: $p
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
function r5(e, t) {
  if (Array.isArray(e))
    return e;
  if (Yt(e))
    return t(e);
  if (e != null)
    return [e];
}
function n5(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function o5(e) {
  const t = e.__breakpoints;
  return function(n, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = r5(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, h = !!n.parts;
    for (let m = 0; m < d; m++) {
      const y = t.details[m], x = t.details[n5(c, m)], v = Gi(y.minW, x == null ? void 0 : x._minW), p = on((s = n[o]) == null ? void 0 : s[c[m]], a);
      if (p) {
        if (h) {
          (l = n.parts) == null || l.forEach((g) => {
            Gt(u, {
              [g]: f ? p[g] : { [v]: p[g] }
            });
          });
          continue;
        }
        if (!h) {
          f ? Gt(u, p) : u[v] = p;
          continue;
        }
        u[v] = p;
      }
    }
    return u;
  };
}
function i5(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: i } = t, a = o5(i);
    return Gt(
      {},
      on((r = e.baseStyle) != null ? r : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", n, t)
    );
  };
}
function Sr(e) {
  return OE(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var a5 = [
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
function s5(e) {
  return Yt(e) ? a5.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var l5 = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, u5 = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, c5 = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, d5 = {
  property: l5,
  easing: u5,
  duration: c5
}, f5 = d5, h5 = {
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
}, p5 = h5, m5 = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, v5 = m5, g5 = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, y5 = g5, b5 = {
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
}, S5 = b5, x5 = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, w5 = x5, k5 = {
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
}, C5 = k5, _5 = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, T5 = _5, P5 = {
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
}, $S = P5, AS = {
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
}, E5 = {
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
}, $5 = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, A5 = {
  ...AS,
  ...E5,
  container: $5
}, RS = A5, R5 = {
  breakpoints: y5,
  zIndices: p5,
  radii: w5,
  blur: T5,
  colors: S5,
  ...$S,
  sizes: RS,
  shadows: C5,
  space: AS,
  borders: v5,
  transition: f5
}, { defineMultiStyleConfig: M5, definePartsStyle: Ki } = pe([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Pr = L("stepper-indicator-size"), Mo = L("stepper-icon-size"), Io = L("stepper-title-font-size"), Yi = L("stepper-description-font-size"), Di = L("stepper-accent-color"), I5 = Ki(({ colorScheme: e }) => ({
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
    [Di.variable]: `colors.${e}.500`,
    _dark: {
      [Di.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: Io.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Yi.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: Io.reference
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
    width: Mo.reference,
    height: Mo.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Pr.reference,
    height: Pr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: Di.reference
    },
    "&[data-status=complete]": {
      bg: Di.reference,
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
      bg: Di.reference
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
      maxHeight: `calc(100% - ${Pr.reference} - 8px)`,
      top: `calc(${Pr.reference} + 4px)`,
      insetStart: `calc(${Pr.reference} / 2 - 1px)`
    }
  }
})), z5 = M5({
  baseStyle: I5,
  sizes: {
    xs: Ki({
      stepper: {
        [Pr.variable]: "sizes.4",
        [Mo.variable]: "sizes.3",
        [Io.variable]: "fontSizes.xs",
        [Yi.variable]: "fontSizes.xs"
      }
    }),
    sm: Ki({
      stepper: {
        [Pr.variable]: "sizes.6",
        [Mo.variable]: "sizes.4",
        [Io.variable]: "fontSizes.sm",
        [Yi.variable]: "fontSizes.xs"
      }
    }),
    md: Ki({
      stepper: {
        [Pr.variable]: "sizes.8",
        [Mo.variable]: "sizes.5",
        [Io.variable]: "fontSizes.md",
        [Yi.variable]: "fontSizes.sm"
      }
    }),
    lg: Ki({
      stepper: {
        [Pr.variable]: "sizes.10",
        [Mo.variable]: "sizes.6",
        [Io.variable]: "fontSizes.lg",
        [Yi.variable]: "fontSizes.md"
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
    const h = `chakra-${(["container", "root"].includes(c ?? "") ? [e] : [e, c]).filter(Boolean).join("__")}`;
    return {
      className: h,
      selector: `.${h}`,
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
var F5 = ae("accordion").parts("root", "container", "button", "panel").extend("icon"), D5 = ae("alert").parts("title", "description", "container").extend("icon", "spinner"), O5 = ae("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), L5 = ae("breadcrumb").parts("link", "item", "container").extend("separator");
ae("button").parts();
var N5 = ae("checkbox").parts("control", "icon", "container").extend("label");
ae("progress").parts("track", "filledTrack").extend("label");
var j5 = ae("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), B5 = ae("editable").parts(
  "preview",
  "input",
  "textarea"
), V5 = ae("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), W5 = ae("formError").parts("text", "icon"), U5 = ae("input").parts(
  "addon",
  "field",
  "element",
  "group"
), H5 = ae("list").parts("container", "item", "icon"), G5 = ae("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), K5 = ae("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), Y5 = ae("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
ae("pininput").parts("field");
var X5 = ae("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), q5 = ae("progress").parts(
  "label",
  "filledTrack",
  "track"
), Q5 = ae("radio").parts(
  "container",
  "control",
  "label"
), Z5 = ae("select").parts("field", "icon"), J5 = ae("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), e$ = ae("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), t$ = ae("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), r$ = ae("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), n$ = ae("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), o$ = ae("tag").parts(
  "container",
  "label",
  "closeButton"
), i$ = ae("card").parts(
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
function Vn(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class a$ extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Xi = a$;
function Ap(e) {
  if (typeof e != "string")
    throw new Xi(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = p$.test(e) ? u$(e) : e;
  const r = c$.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(ja(s, 2), 16)), parseInt(ja(a[3] || "f", 2), 16) / 255];
  }
  const n = d$.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = f$.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = h$.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (Vn(0, 100, s) !== s)
      throw new Xi(e);
    if (Vn(0, 100, l) !== l)
      throw new Xi(e);
    return [...m$(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Xi(e);
}
function s$(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const wg = (e) => parseInt(e.replace(/_/g, ""), 36), l$ = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = wg(t.substring(0, 3)), n = wg(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - n.length; i++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function u$(e) {
  const t = e.toLowerCase().trim(), r = l$[s$(t)];
  if (!r)
    throw new Xi(e);
  return `#${r}`;
}
const ja = (e, t) => Array.from(Array(t)).map(() => e).join(""), c$ = new RegExp(`^#${ja("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), d$ = new RegExp(`^#${ja("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), f$ = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${ja(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), h$ = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, p$ = /^[a-z]+$/i, kg = (e) => Math.round(e * 255), m$ = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(kg);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = n - i / 2, d = s + c, f = l + c, h = u + c;
  return [d, f, h].map(kg);
};
function v$(e, t, r, n) {
  return `rgba(${Vn(0, 255, e).toFixed()}, ${Vn(0, 255, t).toFixed()}, ${Vn(0, 255, r).toFixed()}, ${parseFloat(Vn(0, 1, n).toFixed(3))})`;
}
function g$(e, t) {
  const [r, n, o, i] = Ap(e);
  return v$(r, n, o, i - t);
}
function y$(e) {
  const [t, r, n, o] = Ap(e);
  let i = (a) => {
    const s = Vn(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function b$(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var S$ = (e) => Object.keys(e).length === 0, ut = (e, t, r) => {
  const n = b$(e, `colors.${t}`, t);
  try {
    return y$(n), n;
  } catch {
    return r ?? "#000000";
  }
}, x$ = (e) => {
  const [t, r, n] = Ap(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, w$ = (e) => (t) => {
  const r = ut(t, e);
  return x$(r) < 128 ? "dark" : "light";
}, k$ = (e) => (t) => w$(e)(t) === "dark", hi = (e, t) => (r) => {
  const n = ut(r, e);
  return g$(n, 1 - t);
};
function Cg(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var C$ = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function _$(e) {
  const t = C$();
  return !e || S$(e) ? t : e.string && e.colors ? P$(e.string, e.colors) : e.string && !e.colors ? T$(e.string) : e.colors && !e.string ? E$(e.colors) : t;
}
function T$(e) {
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
function P$(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function E$(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function O(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function Rp(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function MS(e) {
  return Yt(e) && e.reference ? e.reference : String(e);
}
var nc = (e, ...t) => t.map(MS).join(` ${e} `).replace(/calc/g, ""), _g = (...e) => `calc(${nc("+", ...e)})`, Tg = (...e) => `calc(${nc("-", ...e)})`, Uf = (...e) => `calc(${nc("*", ...e)})`, Pg = (...e) => `calc(${nc("/", ...e)})`, Eg = (e) => {
  const t = MS(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Uf(t, -1);
}, Er = Object.assign(
  (e) => ({
    add: (...t) => Er(_g(e, ...t)),
    subtract: (...t) => Er(Tg(e, ...t)),
    multiply: (...t) => Er(Uf(e, ...t)),
    divide: (...t) => Er(Pg(e, ...t)),
    negate: () => Er(Eg(e)),
    toString: () => e.toString()
  }),
  {
    add: _g,
    subtract: Tg,
    multiply: Uf,
    divide: Pg,
    negate: Eg
  }
);
function $$(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function A$(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function IS(e) {
  const t = A$(e.toString());
  return t.includes("\\.") ? e : $$(e) ? t.replace(".", "\\.") : e;
}
function R$(e, t = "") {
  return [t, IS(e)].filter(Boolean).join("-");
}
function M$(e, t) {
  return `var(${IS(e)}${t ? `, ${t}` : ""})`;
}
function I$(e, t = "") {
  return `--${R$(e, t)}`;
}
function We(e, t) {
  const r = I$(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: M$(r, z$(t == null ? void 0 : t.fallback))
  };
}
function z$(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: F$, definePartsStyle: bl } = pe(t$.keys), ua = We("switch-track-width"), Kn = We("switch-track-height"), od = We("switch-track-diff"), D$ = Er.subtract(ua, Kn), Hf = We("switch-thumb-x"), Oi = We("switch-bg"), O$ = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [ua.reference],
    height: [Kn.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Oi.variable]: "colors.gray.300",
    _dark: {
      [Oi.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Oi.variable]: `colors.${t}.500`,
      _dark: {
        [Oi.variable]: `colors.${t}.200`
      }
    },
    bg: Oi.reference
  };
}, L$ = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Kn.reference],
  height: [Kn.reference],
  _checked: {
    transform: `translateX(${Hf.reference})`
  }
}, N$ = bl((e) => ({
  container: {
    [od.variable]: D$,
    [Hf.variable]: od.reference,
    _rtl: {
      [Hf.variable]: Er(od).negate().toString()
    }
  },
  track: O$(e),
  thumb: L$
})), j$ = {
  sm: bl({
    container: {
      [ua.variable]: "1.375rem",
      [Kn.variable]: "sizes.3"
    }
  }),
  md: bl({
    container: {
      [ua.variable]: "1.875rem",
      [Kn.variable]: "sizes.4"
    }
  }),
  lg: bl({
    container: {
      [ua.variable]: "2.875rem",
      [Kn.variable]: "sizes.6"
    }
  })
}, B$ = F$({
  baseStyle: N$,
  sizes: j$,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: V$, definePartsStyle: qo } = pe(r$.keys), W$ = qo({
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
}), au = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, U$ = qo((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: O("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: O(`${t}.100`, `${t}.700`)(e),
      ...au
    },
    td: {
      borderBottom: "1px",
      borderColor: O(`${t}.100`, `${t}.700`)(e),
      ...au
    },
    caption: {
      color: O("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), H$ = qo((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: O("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: O(`${t}.100`, `${t}.700`)(e),
      ...au
    },
    td: {
      borderBottom: "1px",
      borderColor: O(`${t}.100`, `${t}.700`)(e),
      ...au
    },
    caption: {
      color: O("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: O(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: O(`${t}.100`, `${t}.700`)(e)
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
}), G$ = {
  simple: U$,
  striped: H$,
  unstyled: {}
}, K$ = {
  sm: qo({
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
  md: qo({
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
  lg: qo({
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
}, Y$ = V$({
  baseStyle: W$,
  variants: G$,
  sizes: K$,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), vt = L("tabs-color"), rr = L("tabs-bg"), Vs = L("tabs-border-color"), { defineMultiStyleConfig: X$, definePartsStyle: yr } = pe(n$.keys), q$ = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, Q$ = (e) => {
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
}, Z$ = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, J$ = {
  p: 4
}, eA = yr((e) => ({
  root: q$(e),
  tab: Q$(e),
  tablist: Z$(e),
  tabpanel: J$
})), tA = {
  sm: yr({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: yr({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: yr({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, rA = yr((e) => {
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
        [vt.variable]: `colors.${t}.600`,
        _dark: {
          [vt.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [rr.variable]: "colors.gray.200",
        _dark: {
          [rr.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: vt.reference,
      bg: rr.reference
    }
  };
}), nA = yr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Vs.variable]: "transparent",
      _selected: {
        [vt.variable]: `colors.${t}.600`,
        [Vs.variable]: "colors.white",
        _dark: {
          [vt.variable]: `colors.${t}.300`,
          [Vs.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Vs.reference
      },
      color: vt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), oA = yr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [rr.variable]: "colors.gray.50",
      _dark: {
        [rr.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [rr.variable]: "colors.white",
        [vt.variable]: `colors.${t}.600`,
        _dark: {
          [rr.variable]: "colors.gray.800",
          [vt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: vt.reference,
      bg: rr.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), iA = yr((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: ut(r, `${t}.700`),
        bg: ut(r, `${t}.100`)
      }
    }
  };
}), aA = yr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [vt.variable]: "colors.gray.600",
      _dark: {
        [vt.variable]: "inherit"
      },
      _selected: {
        [vt.variable]: "colors.white",
        [rr.variable]: `colors.${t}.600`,
        _dark: {
          [vt.variable]: "colors.gray.800",
          [rr.variable]: `colors.${t}.300`
        }
      },
      color: vt.reference,
      bg: rr.reference
    }
  };
}), sA = yr({}), lA = {
  line: rA,
  enclosed: nA,
  "enclosed-colored": oA,
  "soft-rounded": iA,
  "solid-rounded": aA,
  unstyled: sA
}, uA = X$({
  baseStyle: eA,
  sizes: tA,
  variants: lA,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), De = RE("badge", ["bg", "color", "shadow"]), cA = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: De.bg.reference,
  color: De.color.reference,
  boxShadow: De.shadow.reference
}, dA = (e) => {
  const { colorScheme: t, theme: r } = e, n = hi(`${t}.500`, 0.6)(r);
  return {
    [De.bg.variable]: `colors.${t}.500`,
    [De.color.variable]: "colors.white",
    _dark: {
      [De.bg.variable]: n,
      [De.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, fA = (e) => {
  const { colorScheme: t, theme: r } = e, n = hi(`${t}.200`, 0.16)(r);
  return {
    [De.bg.variable]: `colors.${t}.100`,
    [De.color.variable]: `colors.${t}.800`,
    _dark: {
      [De.bg.variable]: n,
      [De.color.variable]: `colors.${t}.200`
    }
  };
}, hA = (e) => {
  const { colorScheme: t, theme: r } = e, n = hi(`${t}.200`, 0.8)(r);
  return {
    [De.color.variable]: `colors.${t}.500`,
    _dark: {
      [De.color.variable]: n
    },
    [De.shadow.variable]: `inset 0 0 0px 1px ${De.color.reference}`
  };
}, pA = {
  solid: dA,
  subtle: fA,
  outline: hA
}, ca = {
  baseStyle: cA,
  variants: pA,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: mA, definePartsStyle: Yn } = pe(o$.keys), $g = L("tag-bg"), Ag = L("tag-color"), id = L("tag-shadow"), Sl = L("tag-min-height"), xl = L("tag-min-width"), wl = L("tag-font-size"), kl = L("tag-padding-inline"), vA = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Ag.variable]: De.color.reference,
  [$g.variable]: De.bg.reference,
  [id.variable]: De.shadow.reference,
  color: Ag.reference,
  bg: $g.reference,
  boxShadow: id.reference,
  borderRadius: "md",
  minH: Sl.reference,
  minW: xl.reference,
  fontSize: wl.reference,
  px: kl.reference,
  _focusVisible: {
    [id.variable]: "shadows.outline"
  }
}, gA = {
  lineHeight: 1.2,
  overflow: "visible"
}, yA = {
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
}, bA = Yn({
  container: vA,
  label: gA,
  closeButton: yA
}), SA = {
  sm: Yn({
    container: {
      [Sl.variable]: "sizes.5",
      [xl.variable]: "sizes.5",
      [wl.variable]: "fontSizes.xs",
      [kl.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Yn({
    container: {
      [Sl.variable]: "sizes.6",
      [xl.variable]: "sizes.6",
      [wl.variable]: "fontSizes.sm",
      [kl.variable]: "space.2"
    }
  }),
  lg: Yn({
    container: {
      [Sl.variable]: "sizes.8",
      [xl.variable]: "sizes.8",
      [wl.variable]: "fontSizes.md",
      [kl.variable]: "space.3"
    }
  })
}, xA = {
  subtle: Yn((e) => {
    var t;
    return {
      container: (t = ca.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: Yn((e) => {
    var t;
    return {
      container: (t = ca.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: Yn((e) => {
    var t;
    return {
      container: (t = ca.variants) == null ? void 0 : t.outline(e)
    };
  })
}, wA = mA({
  variants: xA,
  baseStyle: bA,
  sizes: SA,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Rr, defineMultiStyleConfig: kA } = pe(U5.keys), zo = L("input-height"), Fo = L("input-font-size"), Do = L("input-padding"), Oo = L("input-border-radius"), CA = Rr({
  addon: {
    height: zo.reference,
    fontSize: Fo.reference,
    px: Do.reference,
    borderRadius: Oo.reference
  },
  field: {
    width: "100%",
    height: zo.reference,
    fontSize: Fo.reference,
    px: Do.reference,
    borderRadius: Oo.reference,
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
}), Gr = {
  lg: {
    [Fo.variable]: "fontSizes.lg",
    [Do.variable]: "space.4",
    [Oo.variable]: "radii.md",
    [zo.variable]: "sizes.12"
  },
  md: {
    [Fo.variable]: "fontSizes.md",
    [Do.variable]: "space.4",
    [Oo.variable]: "radii.md",
    [zo.variable]: "sizes.10"
  },
  sm: {
    [Fo.variable]: "fontSizes.sm",
    [Do.variable]: "space.3",
    [Oo.variable]: "radii.sm",
    [zo.variable]: "sizes.8"
  },
  xs: {
    [Fo.variable]: "fontSizes.xs",
    [Do.variable]: "space.2",
    [Oo.variable]: "radii.sm",
    [zo.variable]: "sizes.6"
  }
}, _A = {
  lg: Rr({
    field: Gr.lg,
    group: Gr.lg
  }),
  md: Rr({
    field: Gr.md,
    group: Gr.md
  }),
  sm: Rr({
    field: Gr.sm,
    group: Gr.sm
  }),
  xs: Rr({
    field: Gr.xs,
    group: Gr.xs
  })
};
function Mp(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || O("blue.500", "blue.300")(e),
    errorBorderColor: r || O("red.500", "red.300")(e)
  };
}
var TA = Rr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Mp(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: O("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: ut(t, n),
        boxShadow: `0 0 0 1px ${ut(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: ut(t, r),
        boxShadow: `0 0 0 1px ${ut(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: O("inherit", "whiteAlpha.50")(e),
      bg: O("gray.100", "whiteAlpha.300")(e)
    }
  };
}), PA = Rr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Mp(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: O("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: O("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: ut(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: ut(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: O("gray.100", "whiteAlpha.50")(e)
    }
  };
}), EA = Rr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Mp(e);
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
        borderColor: ut(t, n),
        boxShadow: `0px 1px 0px 0px ${ut(t, n)}`
      },
      _focusVisible: {
        borderColor: ut(t, r),
        boxShadow: `0px 1px 0px 0px ${ut(t, r)}`
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
}), $A = Rr({
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
}), AA = {
  outline: TA,
  filled: PA,
  flushed: EA,
  unstyled: $A
}, ie = kA({
  baseStyle: CA,
  sizes: _A,
  variants: AA,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), Rg, RA = {
  ...(Rg = ie.baseStyle) == null ? void 0 : Rg.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, Mg, Ig, MA = {
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
  unstyled: (Ig = (Mg = ie.variants) == null ? void 0 : Mg.unstyled.field) != null ? Ig : {}
}, zg, Fg, Dg, Og, Lg, Ng, jg, Bg, IA = {
  xs: (Fg = (zg = ie.sizes) == null ? void 0 : zg.xs.field) != null ? Fg : {},
  sm: (Og = (Dg = ie.sizes) == null ? void 0 : Dg.sm.field) != null ? Og : {},
  md: (Ng = (Lg = ie.sizes) == null ? void 0 : Lg.md.field) != null ? Ng : {},
  lg: (Bg = (jg = ie.sizes) == null ? void 0 : jg.lg.field) != null ? Bg : {}
}, zA = {
  baseStyle: RA,
  sizes: IA,
  variants: MA,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, Ws = We("tooltip-bg"), ad = We("tooltip-fg"), FA = We("popper-arrow-bg"), DA = {
  bg: Ws.reference,
  color: ad.reference,
  [Ws.variable]: "colors.gray.700",
  [ad.variable]: "colors.whiteAlpha.900",
  _dark: {
    [Ws.variable]: "colors.gray.300",
    [ad.variable]: "colors.gray.900"
  },
  [FA.variable]: Ws.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, OA = {
  baseStyle: DA
}, { defineMultiStyleConfig: LA, definePartsStyle: qi } = pe(q5.keys), NA = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, i = O(
    Cg(),
    Cg("1rem", "rgba(0,0,0,0.1)")
  )(e), a = O(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${ut(r, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && i,
    ...n ? { bgImage: s } : { bgColor: a }
  };
}, jA = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, BA = (e) => ({
  bg: O("gray.100", "whiteAlpha.300")(e)
}), VA = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...NA(e)
}), WA = qi((e) => ({
  label: jA,
  filledTrack: VA(e),
  track: BA(e)
})), UA = {
  xs: qi({
    track: { h: "1" }
  }),
  sm: qi({
    track: { h: "2" }
  }),
  md: qi({
    track: { h: "3" }
  }),
  lg: qi({
    track: { h: "4" }
  })
}, HA = LA({
  sizes: UA,
  baseStyle: WA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), GA = (e) => typeof e == "function";
function dt(e, ...t) {
  return GA(e) ? e(...t) : e;
}
var { definePartsStyle: Cl, defineMultiStyleConfig: KA } = pe(N5.keys), da = L("checkbox-size"), YA = (e) => {
  const { colorScheme: t } = e;
  return {
    w: da.reference,
    h: da.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: O(`${t}.500`, `${t}.200`)(e),
      borderColor: O(`${t}.500`, `${t}.200`)(e),
      color: O("white", "gray.900")(e),
      _hover: {
        bg: O(`${t}.600`, `${t}.300`)(e),
        borderColor: O(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: O("gray.200", "transparent")(e),
        bg: O("gray.200", "whiteAlpha.300")(e),
        color: O("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: O(`${t}.500`, `${t}.200`)(e),
      borderColor: O(`${t}.500`, `${t}.200`)(e),
      color: O("white", "gray.900")(e)
    },
    _disabled: {
      bg: O("gray.100", "whiteAlpha.100")(e),
      borderColor: O("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: O("red.500", "red.300")(e)
    }
  };
}, XA = {
  _disabled: { cursor: "not-allowed" }
}, qA = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, QA = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, ZA = Cl((e) => ({
  icon: QA,
  container: XA,
  control: dt(YA, e),
  label: qA
})), JA = {
  sm: Cl({
    control: { [da.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Cl({
    control: { [da.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Cl({
    control: { [da.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, su = KA({
  baseStyle: ZA,
  sizes: JA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: eR, definePartsStyle: _l } = pe(Q5.keys), tR = (e) => {
  var t;
  const r = (t = dt(su.baseStyle, e)) == null ? void 0 : t.control;
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
}, rR = _l((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = su).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = su).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: tR(e)
  };
}), nR = {
  md: _l({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: _l({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: _l({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, oR = eR({
  baseStyle: rR,
  sizes: nR,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: iR, definePartsStyle: aR } = pe(Z5.keys), Us = L("select-bg"), Vg, sR = {
  ...(Vg = ie.baseStyle) == null ? void 0 : Vg.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: Us.reference,
  [Us.variable]: "colors.white",
  _dark: {
    [Us.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: Us.reference
  }
}, lR = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, uR = aR({
  field: sR,
  icon: lR
}), Hs = {
  paddingInlineEnd: "8"
}, Wg, Ug, Hg, Gg, Kg, Yg, Xg, qg, cR = {
  lg: {
    ...(Wg = ie.sizes) == null ? void 0 : Wg.lg,
    field: {
      ...(Ug = ie.sizes) == null ? void 0 : Ug.lg.field,
      ...Hs
    }
  },
  md: {
    ...(Hg = ie.sizes) == null ? void 0 : Hg.md,
    field: {
      ...(Gg = ie.sizes) == null ? void 0 : Gg.md.field,
      ...Hs
    }
  },
  sm: {
    ...(Kg = ie.sizes) == null ? void 0 : Kg.sm,
    field: {
      ...(Yg = ie.sizes) == null ? void 0 : Yg.sm.field,
      ...Hs
    }
  },
  xs: {
    ...(Xg = ie.sizes) == null ? void 0 : Xg.xs,
    field: {
      ...(qg = ie.sizes) == null ? void 0 : qg.xs.field,
      ...Hs
    },
    icon: {
      insetEnd: "1"
    }
  }
}, dR = iR({
  baseStyle: uR,
  sizes: cR,
  variants: ie.variants,
  defaultProps: ie.defaultProps
}), sd = L("skeleton-start-color"), ld = L("skeleton-end-color"), fR = {
  [sd.variable]: "colors.gray.100",
  [ld.variable]: "colors.gray.400",
  _dark: {
    [sd.variable]: "colors.gray.800",
    [ld.variable]: "colors.gray.600"
  },
  background: sd.reference,
  borderColor: ld.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, hR = {
  baseStyle: fR
}, ud = L("skip-link-bg"), pR = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [ud.variable]: "colors.white",
    _dark: {
      [ud.variable]: "colors.gray.700"
    },
    bg: ud.reference
  }
}, mR = {
  baseStyle: pR
}, { defineMultiStyleConfig: vR, definePartsStyle: oc } = pe(J5.keys), Ba = L("slider-thumb-size"), Va = L("slider-track-size"), en = L("slider-bg"), gR = (e) => {
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
    ...Rp({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, yR = (e) => ({
  ...Rp({
    orientation: e.orientation,
    horizontal: { h: Va.reference },
    vertical: { w: Va.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [en.variable]: "colors.gray.200",
  _dark: {
    [en.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [en.variable]: "colors.gray.300",
    _dark: {
      [en.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: en.reference
}), bR = (e) => {
  const { orientation: t } = e;
  return {
    ...Rp({
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
    w: Ba.reference,
    h: Ba.reference,
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
}, SR = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [en.variable]: `colors.${t}.500`,
    _dark: {
      [en.variable]: `colors.${t}.200`
    },
    bg: en.reference
  };
}, xR = oc((e) => ({
  container: gR(e),
  track: yR(e),
  thumb: bR(e),
  filledTrack: SR(e)
})), wR = oc({
  container: {
    [Ba.variable]: "sizes.4",
    [Va.variable]: "sizes.1"
  }
}), kR = oc({
  container: {
    [Ba.variable]: "sizes.3.5",
    [Va.variable]: "sizes.1"
  }
}), CR = oc({
  container: {
    [Ba.variable]: "sizes.2.5",
    [Va.variable]: "sizes.0.5"
  }
}), _R = {
  lg: wR,
  md: kR,
  sm: CR
}, TR = vR({
  baseStyle: xR,
  sizes: _R,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Ln = We("spinner-size"), PR = {
  width: [Ln.reference],
  height: [Ln.reference]
}, ER = {
  xs: {
    [Ln.variable]: "sizes.3"
  },
  sm: {
    [Ln.variable]: "sizes.4"
  },
  md: {
    [Ln.variable]: "sizes.6"
  },
  lg: {
    [Ln.variable]: "sizes.8"
  },
  xl: {
    [Ln.variable]: "sizes.12"
  }
}, $R = {
  baseStyle: PR,
  sizes: ER,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: AR, definePartsStyle: zS } = pe(e$.keys), RR = {
  fontWeight: "medium"
}, MR = {
  opacity: 0.8,
  marginBottom: "2"
}, IR = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, zR = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, FR = zS({
  container: {},
  label: RR,
  helpText: MR,
  number: IR,
  icon: zR
}), DR = {
  md: zS({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, OR = AR({
  baseStyle: FR,
  sizes: DR,
  defaultProps: {
    size: "md"
  }
}), cd = L("kbd-bg"), LR = {
  [cd.variable]: "colors.gray.100",
  _dark: {
    [cd.variable]: "colors.whiteAlpha.100"
  },
  bg: cd.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, NR = {
  baseStyle: LR
}, jR = {
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
}, BR = {
  baseStyle: jR
}, { defineMultiStyleConfig: VR, definePartsStyle: WR } = pe(H5.keys), UR = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, HR = WR({
  icon: UR
}), GR = VR({
  baseStyle: HR
}), { defineMultiStyleConfig: KR, definePartsStyle: YR } = pe(G5.keys), cr = L("menu-bg"), dd = L("menu-shadow"), XR = {
  [cr.variable]: "#fff",
  [dd.variable]: "shadows.sm",
  _dark: {
    [cr.variable]: "colors.gray.700",
    [dd.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: cr.reference,
  boxShadow: dd.reference
}, qR = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [cr.variable]: "colors.gray.100",
    _dark: {
      [cr.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [cr.variable]: "colors.gray.200",
    _dark: {
      [cr.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [cr.variable]: "colors.gray.100",
    _dark: {
      [cr.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: cr.reference
}, QR = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, ZR = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, JR = {
  opacity: 0.6
}, eM = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, tM = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, rM = YR({
  button: tM,
  list: XR,
  item: qR,
  groupTitle: QR,
  icon: ZR,
  command: JR,
  divider: eM
}), nM = KR({
  baseStyle: rM
}), { defineMultiStyleConfig: oM, definePartsStyle: Gf } = pe(K5.keys), fd = L("modal-bg"), hd = L("modal-shadow"), iM = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, aM = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, sM = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [fd.variable]: "colors.white",
    [hd.variable]: "shadows.lg",
    _dark: {
      [fd.variable]: "colors.gray.700",
      [hd.variable]: "shadows.dark-lg"
    },
    bg: fd.reference,
    boxShadow: hd.reference
  };
}, lM = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, uM = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, cM = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, dM = {
  px: "6",
  py: "4"
}, fM = Gf((e) => ({
  overlay: iM,
  dialogContainer: dt(aM, e),
  dialog: dt(sM, e),
  header: lM,
  closeButton: uM,
  body: dt(cM, e),
  footer: dM
}));
function Zt(e) {
  return Gf(e === "full" ? {
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
var hM = {
  xs: Zt("xs"),
  sm: Zt("sm"),
  md: Zt("md"),
  lg: Zt("lg"),
  xl: Zt("xl"),
  "2xl": Zt("2xl"),
  "3xl": Zt("3xl"),
  "4xl": Zt("4xl"),
  "5xl": Zt("5xl"),
  "6xl": Zt("6xl"),
  full: Zt("full")
}, pM = oM({
  baseStyle: fM,
  sizes: hM,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: mM, definePartsStyle: FS } = pe(Y5.keys), Ip = We("number-input-stepper-width"), DS = We("number-input-input-padding"), vM = Er(Ip).add("0.5rem").toString(), pd = We("number-input-bg"), md = We("number-input-color"), vd = We("number-input-border-color"), gM = {
  [Ip.variable]: "sizes.6",
  [DS.variable]: vM
}, yM = (e) => {
  var t, r;
  return (r = (t = dt(ie.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, bM = {
  width: Ip.reference
}, SM = {
  borderStart: "1px solid",
  borderStartColor: vd.reference,
  color: md.reference,
  bg: pd.reference,
  [md.variable]: "colors.chakra-body-text",
  [vd.variable]: "colors.chakra-border-color",
  _dark: {
    [md.variable]: "colors.whiteAlpha.800",
    [vd.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [pd.variable]: "colors.gray.200",
    _dark: {
      [pd.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, xM = FS((e) => {
  var t;
  return {
    root: gM,
    field: (t = dt(yM, e)) != null ? t : {},
    stepperGroup: bM,
    stepper: SM
  };
});
function Gs(e) {
  var t, r, n;
  const o = (t = ie.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = $S.fontSizes[a];
  return FS({
    field: {
      ...o.field,
      paddingInlineEnd: DS.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Er(s).multiply(0.75).toString(),
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
var wM = {
  xs: Gs("xs"),
  sm: Gs("sm"),
  md: Gs("md"),
  lg: Gs("lg")
}, kM = mM({
  baseStyle: xM,
  sizes: wM,
  variants: ie.variants,
  defaultProps: ie.defaultProps
}), Qg, CM = {
  ...(Qg = ie.baseStyle) == null ? void 0 : Qg.field,
  textAlign: "center"
}, _M = {
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
}, Zg, Jg, TM = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = dt((t = ie.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = dt((t = ie.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = dt((t = ie.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (Jg = (Zg = ie.variants) == null ? void 0 : Zg.unstyled.field) != null ? Jg : {}
}, PM = {
  baseStyle: CM,
  sizes: _M,
  variants: TM,
  defaultProps: ie.defaultProps
}, { defineMultiStyleConfig: EM, definePartsStyle: $M } = pe(X5.keys), Ks = We("popper-bg"), AM = We("popper-arrow-bg"), e0 = We("popper-arrow-shadow-color"), RM = { zIndex: 10 }, MM = {
  [Ks.variable]: "colors.white",
  bg: Ks.reference,
  [AM.variable]: Ks.reference,
  [e0.variable]: "colors.gray.200",
  _dark: {
    [Ks.variable]: "colors.gray.700",
    [e0.variable]: "colors.whiteAlpha.300"
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
}, IM = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, zM = {
  px: 3,
  py: 2
}, FM = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, DM = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, OM = $M({
  popper: RM,
  content: MM,
  header: IM,
  body: zM,
  footer: FM,
  closeButton: DM
}), LM = EM({
  baseStyle: OM
}), { definePartsStyle: Kf, defineMultiStyleConfig: NM } = pe(j5.keys), gd = L("drawer-bg"), yd = L("drawer-box-shadow");
function mo(e) {
  return Kf(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var jM = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, BM = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, VM = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [gd.variable]: "colors.white",
    [yd.variable]: "shadows.lg",
    _dark: {
      [gd.variable]: "colors.gray.700",
      [yd.variable]: "shadows.dark-lg"
    },
    bg: gd.reference,
    boxShadow: yd.reference
  };
}, WM = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, UM = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, HM = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, GM = {
  px: "6",
  py: "4"
}, KM = Kf((e) => ({
  overlay: jM,
  dialogContainer: BM,
  dialog: dt(VM, e),
  header: WM,
  closeButton: UM,
  body: HM,
  footer: GM
})), YM = {
  xs: mo("xs"),
  sm: mo("md"),
  md: mo("lg"),
  lg: mo("2xl"),
  xl: mo("4xl"),
  full: mo("full")
}, XM = NM({
  baseStyle: KM,
  sizes: YM,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: qM, defineMultiStyleConfig: QM } = pe(B5.keys), ZM = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, JM = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, eI = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, tI = qM({
  preview: ZM,
  input: JM,
  textarea: eI
}), rI = QM({
  baseStyle: tI
}), { definePartsStyle: nI, defineMultiStyleConfig: oI } = pe(V5.keys), Qo = L("form-control-color"), iI = {
  marginStart: "1",
  [Qo.variable]: "colors.red.500",
  _dark: {
    [Qo.variable]: "colors.red.300"
  },
  color: Qo.reference
}, aI = {
  mt: "2",
  [Qo.variable]: "colors.gray.600",
  _dark: {
    [Qo.variable]: "colors.whiteAlpha.600"
  },
  color: Qo.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, sI = nI({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: iI,
  helperText: aI
}), lI = oI({
  baseStyle: sI
}), { definePartsStyle: uI, defineMultiStyleConfig: cI } = pe(W5.keys), Zo = L("form-error-color"), dI = {
  [Zo.variable]: "colors.red.500",
  _dark: {
    [Zo.variable]: "colors.red.300"
  },
  color: Zo.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, fI = {
  marginEnd: "0.5em",
  [Zo.variable]: "colors.red.500",
  _dark: {
    [Zo.variable]: "colors.red.300"
  },
  color: Zo.reference
}, hI = uI({
  text: dI,
  icon: fI
}), pI = cI({
  baseStyle: hI
}), mI = {
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
}, vI = {
  baseStyle: mI
}, gI = {
  fontFamily: "heading",
  fontWeight: "bold"
}, yI = {
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
}, bI = {
  baseStyle: gI,
  sizes: yI,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: SI, definePartsStyle: xI } = pe(L5.keys), bd = L("breadcrumb-link-decor"), wI = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: bd.reference,
  [bd.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [bd.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, kI = xI({
  link: wI
}), CI = SI({
  baseStyle: kI
}), _I = {
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
}, OS = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: O("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: O("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: O("gray.200", "whiteAlpha.300")(e) }
    };
  const n = hi(`${t}.200`, 0.12)(r), o = hi(`${t}.200`, 0.24)(r);
  return {
    color: O(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: O(`${t}.50`, n)(e)
    },
    _active: {
      bg: O(`${t}.100`, o)(e)
    }
  };
}, TI = (e) => {
  const { colorScheme: t } = e, r = O("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...dt(OS, e)
  };
}, PI = {
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
}, EI = (e) => {
  var t;
  const { colorScheme: r } = e;
  if (r === "gray") {
    const l = O("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: O("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: O("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: O("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: n = `${r}.500`,
    color: o = "white",
    hoverBg: i = `${r}.600`,
    activeBg: a = `${r}.700`
  } = (t = PI[r]) != null ? t : {}, s = O(n, `${r}.200`)(e);
  return {
    bg: s,
    color: O(o, "gray.800")(e),
    _hover: {
      bg: O(i, `${r}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: O(a, `${r}.400`)(e) }
  };
}, $I = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: O(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: O(`${t}.700`, `${t}.500`)(e)
    }
  };
}, AI = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, RI = {
  ghost: OS,
  outline: TI,
  solid: EI,
  link: $I,
  unstyled: AI
}, MI = {
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
}, II = {
  baseStyle: _I,
  variants: RI,
  sizes: MI,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Xn, defineMultiStyleConfig: zI } = pe(i$.keys), lu = L("card-bg"), zr = L("card-padding"), LS = L("card-shadow"), Tl = L("card-radius"), NS = L("card-border-width", "0"), jS = L("card-border-color"), FI = Xn({
  container: {
    [lu.variable]: "colors.chakra-body-bg",
    backgroundColor: lu.reference,
    boxShadow: LS.reference,
    borderRadius: Tl.reference,
    color: "chakra-body-text",
    borderWidth: NS.reference,
    borderColor: jS.reference
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
}), DI = {
  sm: Xn({
    container: {
      [Tl.variable]: "radii.base",
      [zr.variable]: "space.3"
    }
  }),
  md: Xn({
    container: {
      [Tl.variable]: "radii.md",
      [zr.variable]: "space.5"
    }
  }),
  lg: Xn({
    container: {
      [Tl.variable]: "radii.xl",
      [zr.variable]: "space.7"
    }
  })
}, OI = {
  elevated: Xn({
    container: {
      [LS.variable]: "shadows.base",
      _dark: {
        [lu.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Xn({
    container: {
      [NS.variable]: "1px",
      [jS.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Xn({
    container: {
      [lu.variable]: "colors.chakra-subtle-bg"
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
}, LI = zI({
  baseStyle: FI,
  variants: OI,
  sizes: DI,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), fa = We("close-button-size"), Li = We("close-button-bg"), NI = {
  w: [fa.reference],
  h: [fa.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Li.variable]: "colors.blackAlpha.100",
    _dark: {
      [Li.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Li.variable]: "colors.blackAlpha.200",
    _dark: {
      [Li.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Li.reference
}, jI = {
  lg: {
    [fa.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [fa.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [fa.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, BI = {
  baseStyle: NI,
  sizes: jI,
  defaultProps: {
    size: "md"
  }
}, { variants: VI, defaultProps: WI } = ca, UI = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: De.bg.reference,
  color: De.color.reference,
  boxShadow: De.shadow.reference
}, HI = {
  baseStyle: UI,
  variants: VI,
  defaultProps: WI
}, GI = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, KI = {
  baseStyle: GI
}, YI = {
  opacity: 0.6,
  borderColor: "inherit"
}, XI = {
  borderStyle: "solid"
}, qI = {
  borderStyle: "dashed"
}, QI = {
  solid: XI,
  dashed: qI
}, ZI = {
  baseStyle: YI,
  variants: QI,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: JI, defineMultiStyleConfig: ez } = pe(F5.keys), tz = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, rz = {
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
}, nz = {
  pt: "2",
  px: "4",
  pb: "5"
}, oz = {
  fontSize: "1.25em"
}, iz = JI({
  container: tz,
  button: rz,
  panel: nz,
  icon: oz
}), az = ez({ baseStyle: iz }), { definePartsStyle: is, defineMultiStyleConfig: sz } = pe(D5.keys), At = L("alert-fg"), Br = L("alert-bg"), lz = is({
  container: {
    bg: Br.reference,
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
    color: At.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: At.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function zp(e) {
  const { theme: t, colorScheme: r } = e, n = hi(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var uz = is((e) => {
  const { colorScheme: t } = e, r = zp(e);
  return {
    container: {
      [At.variable]: `colors.${t}.600`,
      [Br.variable]: r.light,
      _dark: {
        [At.variable]: `colors.${t}.200`,
        [Br.variable]: r.dark
      }
    }
  };
}), cz = is((e) => {
  const { colorScheme: t } = e, r = zp(e);
  return {
    container: {
      [At.variable]: `colors.${t}.600`,
      [Br.variable]: r.light,
      _dark: {
        [At.variable]: `colors.${t}.200`,
        [Br.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: At.reference
    }
  };
}), dz = is((e) => {
  const { colorScheme: t } = e, r = zp(e);
  return {
    container: {
      [At.variable]: `colors.${t}.600`,
      [Br.variable]: r.light,
      _dark: {
        [At.variable]: `colors.${t}.200`,
        [Br.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: At.reference
    }
  };
}), fz = is((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [At.variable]: "colors.white",
      [Br.variable]: `colors.${t}.600`,
      _dark: {
        [At.variable]: "colors.gray.900",
        [Br.variable]: `colors.${t}.200`
      },
      color: At.reference
    }
  };
}), hz = {
  subtle: uz,
  "left-accent": cz,
  "top-accent": dz,
  solid: fz
}, pz = sz({
  baseStyle: lz,
  variants: hz,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: BS, defineMultiStyleConfig: mz } = pe(O5.keys), Jo = L("avatar-border-color"), ha = L("avatar-bg"), Wa = L("avatar-font-size"), pi = L("avatar-size"), vz = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Jo.reference,
  [Jo.variable]: "white",
  _dark: {
    [Jo.variable]: "colors.gray.800"
  }
}, gz = {
  bg: ha.reference,
  fontSize: Wa.reference,
  width: pi.reference,
  height: pi.reference,
  lineHeight: "1",
  [ha.variable]: "colors.gray.200",
  _dark: {
    [ha.variable]: "colors.whiteAlpha.400"
  }
}, yz = (e) => {
  const { name: t, theme: r } = e, n = t ? _$({ string: t }) : "colors.gray.400", o = k$(n)(r);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: ha.reference,
    fontSize: Wa.reference,
    color: i,
    borderColor: Jo.reference,
    verticalAlign: "top",
    width: pi.reference,
    height: pi.reference,
    "&:not([data-loaded])": {
      [ha.variable]: n
    },
    [Jo.variable]: "colors.white",
    _dark: {
      [Jo.variable]: "colors.gray.800"
    }
  };
}, bz = {
  fontSize: Wa.reference,
  lineHeight: "1"
}, Sz = BS((e) => ({
  badge: dt(vz, e),
  excessLabel: dt(gz, e),
  container: dt(yz, e),
  label: bz
}));
function Kr(e) {
  const t = e !== "100%" ? RS[e] : void 0;
  return BS({
    container: {
      [pi.variable]: t ?? e,
      [Wa.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [pi.variable]: t ?? e,
      [Wa.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var xz = {
  "2xs": Kr(4),
  xs: Kr(6),
  sm: Kr(8),
  md: Kr(12),
  lg: Kr(16),
  xl: Kr(24),
  "2xl": Kr(32),
  full: Kr("100%")
}, wz = mz({
  baseStyle: Sz,
  sizes: xz,
  defaultProps: {
    size: "md"
  }
}), kz = {
  Accordion: az,
  Alert: pz,
  Avatar: wz,
  Badge: ca,
  Breadcrumb: CI,
  Button: II,
  Checkbox: su,
  CloseButton: BI,
  Code: HI,
  Container: KI,
  Divider: ZI,
  Drawer: XM,
  Editable: rI,
  Form: lI,
  FormError: pI,
  FormLabel: vI,
  Heading: bI,
  Input: ie,
  Kbd: NR,
  Link: BR,
  List: GR,
  Menu: nM,
  Modal: pM,
  NumberInput: kM,
  PinInput: PM,
  Popover: LM,
  Progress: HA,
  Radio: oR,
  Select: dR,
  Skeleton: hR,
  SkipLink: mR,
  Slider: TR,
  Spinner: $R,
  Stat: OR,
  Switch: B$,
  Table: Y$,
  Tabs: uA,
  Tag: wA,
  Textarea: zA,
  Tooltip: OA,
  Card: LI,
  Stepper: z5
}, Cz = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, _z = {
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
}, Tz = "ltr", Pz = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, VS = {
  semanticTokens: Cz,
  direction: Tz,
  ...R5,
  components: kz,
  styles: _z,
  config: Pz
};
function Qi(e) {
  return typeof e == "function";
}
function Ez(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var $z = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return s5(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, Ez(
    ...n.map(
      (i) => (a) => Qi(i) ? i(a) : Rz(a, i)
    )
  )(o);
}, Az = $z(VS);
function Rz(...e) {
  return Gt({}, ...e, WS);
}
function WS(e, t, r, n) {
  if ((Qi(e) || Qi(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = Qi(e) ? e(...o) : e, a = Qi(t) ? t(...o) : t;
      return Gt({}, i, a, WS);
    };
}
function Mz(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function Iz(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var zz = (e) => {
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
}, US = zz(Iz);
function HS(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var GS = (e) => HS(e, (t) => t != null);
function Fz(e) {
  return typeof e == "function";
}
function KS(e, ...t) {
  return Fz(e) ? e(...t) : e;
}
var Dz = typeof Element < "u", Oz = typeof Map == "function", Lz = typeof Set == "function", Nz = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Pl(e, t) {
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
        if (!Pl(e[n], t[n]))
          return !1;
      return !0;
    }
    var i;
    if (Oz && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!Pl(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Lz && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Nz && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Dz && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !Pl(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var jz = function(t, r) {
  try {
    return Pl(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const Bz = /* @__PURE__ */ Qa(jz);
function YS(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: i, colorMode: a } = VP(), s = e ? US(i, `components.${e}`) : void 0, l = n || s, u = Gt(
    { theme: i, colorMode: a },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    GS(Mz(o, ["children"]))
  ), c = b.useRef({});
  if (l) {
    const f = i5(l)(u);
    Bz(c.current, f) || (c.current = f);
  }
  return c.current;
}
function xi(e, t = {}) {
  return YS(e, t);
}
function wi(e, t = {}) {
  return YS(e, t);
}
var Vz = /* @__PURE__ */ new Set([
  ...KE,
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
]), Wz = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function Uz(e) {
  return Wz.has(e) || !Vz.has(e);
}
function Hz(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
function Gz(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
var Kz = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Yz = /* @__PURE__ */ oS(
  function(e) {
    return Kz.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Xz = Yz, qz = function(t) {
  return t !== "theme";
}, t0 = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Xz : qz;
}, r0 = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Qz = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return cS(r, n, o), bP(function() {
    return dS(r, n, o);
  }), null;
}, Zz = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = r0(t, r, n), l = s || t0(o), u = !l("as");
  return function() {
    var c = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, h = 1; h < f; h++)
        d.push(c[h], c[0][h]);
    }
    var m = mS(function(y, x, v) {
      var p = u && y.as || o, g = "", w = [], T = y;
      if (y.theme == null) {
        T = {};
        for (var $ in y)
          T[$] = y[$];
        T.theme = b.useContext(Na);
      }
      typeof y.className == "string" ? g = fP(x.registered, w, y.className) : y.className != null && (g = y.className + " ");
      var P = kp(d.concat(w), x.registered, T);
      g += x.key + "-" + P.name, a !== void 0 && (g += " " + a);
      var A = u && s === void 0 ? t0(p) : l, R = {};
      for (var z in y)
        u && z === "as" || // $FlowFixMe
        A(z) && (R[z] = y[z]);
      return R.className = g, R.ref = v, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Qz, {
        cache: x,
        serialized: P,
        isStringTag: typeof p == "string"
      }), /* @__PURE__ */ b.createElement(p, R));
    });
    return m.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = o, m.__emotion_styles = d, m.__emotion_forwardProp = s, Object.defineProperty(m, "toString", {
      value: function() {
        return "." + a;
      }
    }), m.withComponent = function(y, x) {
      return e(y, no({}, r, x, {
        shouldForwardProp: r0(m, x, !0)
      })).apply(void 0, d);
    }, m;
  };
}, Jz = [
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
], uu = Zz.bind();
Jz.forEach(function(e) {
  uu[e] = uu(e);
});
var n0, e3 = (n0 = uu.default) != null ? n0 : uu, t3 = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: i, ...a } = t, s = HS(a, (d, f) => XE(f)), l = KS(e, t), u = Hz(
    {},
    o,
    l,
    GS(s),
    i
  ), c = ES(u)(t.theme);
  return n ? [c, n] : c;
};
function Sd(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = Uz);
  const o = t3({ baseStyle: r }), i = e3(
    e,
    n
  )(o);
  return Qn.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = Tp();
    return Qn.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function r3() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Sd, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, r, n) {
      return Sd(...n);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, Sd(r)), e.get(r);
    }
  });
}
var G = r3();
function Ce(e) {
  return b.forwardRef(e);
}
function n3(e = {}) {
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
function o3(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, o = b.useMemo(() => GE(r), [r]);
  return /* @__PURE__ */ _.jsxs(wP, { theme: o, children: [
    /* @__PURE__ */ _.jsx(i3, { root: t }),
    n
  ] });
}
function i3({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ _.jsx(Ju, { styles: (r) => ({ [t]: r.__cssVars }) });
}
n3({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function a3() {
  const { colorMode: e } = Tp();
  return /* @__PURE__ */ _.jsx(
    Ju,
    {
      styles: (t) => {
        const r = US(t, "styles.global"), n = KS(r, { theme: t, colorMode: e });
        return n ? ES(n)(t) : void 0;
      }
    }
  );
}
var XS = b.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
XS.displayName = "EnvironmentContext";
function qS(e) {
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
  return /* @__PURE__ */ _.jsxs(XS.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ _.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
qS.displayName = "EnvironmentProvider";
var s3 = (e) => {
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
    qS,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ _.jsx(o3, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ _.jsxs(
    xS,
    {
      colorModeManager: r,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ _.jsx(_P, { scope: o }) : /* @__PURE__ */ _.jsx(CP, {}),
        !c && /* @__PURE__ */ _.jsx(a3, {}),
        n ? /* @__PURE__ */ _.jsx(yS, { zIndex: n, children: d }) : d
      ]
    }
  ) });
}, l3 = (e, t) => e.find((r) => r.id === t);
function o0(e, t) {
  const r = QS(e, t), n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function QS(e, t) {
  for (const [r, n] of Object.entries(e))
    if (l3(n, t))
      return r;
}
function u3(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function c3(e) {
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
function qn(e, t = []) {
  const r = b.useRef(e);
  return b.useEffect(() => {
    r.current = e;
  }), b.useCallback((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function d3(e, t) {
  const r = qn(e);
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
function Yf(e, t) {
  const r = b.useRef(!1), n = b.useRef(!1);
  b.useEffect(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), b.useEffect(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const ZS = b.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), ic = b.createContext({}), as = b.createContext(null), ac = typeof document < "u", Fp = ac ? b.useLayoutEffect : b.useEffect, JS = b.createContext({ strict: !1 }), Dp = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), f3 = "framerAppearId", ex = "data-" + Dp(f3);
function h3(e, t, r, n) {
  const { visualElement: o } = b.useContext(ic), i = b.useContext(JS), a = b.useContext(as), s = b.useContext(ZS).reducedMotion, l = b.useRef();
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
  const c = b.useRef(!!r[ex]);
  return Fp(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), b.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function Lo(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function p3(e, t, r) {
  return b.useCallback(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : Lo(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Ua(e) {
  return typeof e == "string" || Array.isArray(e);
}
function sc(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Op = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Lp = ["initial", ...Op];
function lc(e) {
  return sc(e.animate) || Lp.some((t) => Ua(e[t]));
}
function tx(e) {
  return !!(lc(e) || e.variants);
}
function m3(e, t) {
  if (lc(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || Ua(r) ? r : void 0,
      animate: Ua(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function v3(e) {
  const { initial: t, animate: r } = m3(e, b.useContext(ic));
  return b.useMemo(() => ({ initial: t, animate: r }), [i0(t), i0(r)]);
}
function i0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const a0 = {
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
}, Ha = {};
for (const e in a0)
  Ha[e] = {
    isEnabled: (t) => a0[e].some((r) => !!t[r])
  };
function g3(e) {
  for (const t in e)
    Ha[t] = {
      ...Ha[t],
      ...e[t]
    };
}
const Np = b.createContext({}), rx = b.createContext({}), y3 = Symbol.for("motionComponentSymbol");
function b3({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && g3(e);
  function i(s, l) {
    let u;
    const c = {
      ...b.useContext(ZS),
      ...s,
      layoutId: S3(s)
    }, { isStatic: d } = c, f = v3(s), h = n(s, d);
    if (!d && ac) {
      f.visualElement = h3(o, h, c, t);
      const m = b.useContext(rx), y = b.useContext(JS).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        y,
        e,
        m
      ));
    }
    return b.createElement(
      ic.Provider,
      { value: f },
      u && f.visualElement ? b.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      r(o, s, p3(h, f.visualElement, l), h, d, f.visualElement)
    );
  }
  const a = b.forwardRef(i);
  return a[y3] = o, a;
}
function S3({ layoutId: e }) {
  const t = b.useContext(Np).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function x3(e) {
  function t(n, o = {}) {
    return b3(e(n, o));
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
const w3 = [
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
function jp(e) {
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
      !!(w3.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const cu = {};
function k3(e) {
  Object.assign(cu, e);
}
const ss = [
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
], so = new Set(ss);
function nx(e, { layout: t, layoutId: r }) {
  return so.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!cu[e] || e === "opacity");
}
const wt = (e) => !!(e && e.getVelocity), C3 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, _3 = ss.length;
function T3(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = "";
  for (let a = 0; a < _3; a++) {
    const s = ss[a];
    if (e[s] !== void 0) {
      const l = C3[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, n ? "" : i) : r && n && (i = "none"), i;
}
const ox = (e) => (t) => typeof t == "string" && t.startsWith(e), ix = ox("--"), Xf = ox("var(--"), P3 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, E3 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, bn = (e, t, r) => Math.min(Math.max(r, e), t), lo = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, pa = {
  ...lo,
  transform: (e) => bn(0, 1, e)
}, Ys = {
  ...lo,
  default: 1
}, ma = (e) => Math.round(e * 1e5) / 1e5, uc = /(-)?([\d]*\.?[\d])+/g, ax = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, $3 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ls(e) {
  return typeof e == "string";
}
const us = (e) => ({
  test: (t) => ls(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Yr = us("deg"), br = us("%"), B = us("px"), A3 = us("vh"), R3 = us("vw"), s0 = {
  ...br,
  parse: (e) => br.parse(e) / 100,
  transform: (e) => br.transform(e * 100)
}, l0 = {
  ...lo,
  transform: Math.round
}, sx = {
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
  rotate: Yr,
  rotateX: Yr,
  rotateY: Yr,
  rotateZ: Yr,
  scale: Ys,
  scaleX: Ys,
  scaleY: Ys,
  scaleZ: Ys,
  skew: Yr,
  skewX: Yr,
  skewY: Yr,
  distance: B,
  translateX: B,
  translateY: B,
  translateZ: B,
  x: B,
  y: B,
  z: B,
  perspective: B,
  transformPerspective: B,
  opacity: pa,
  originX: s0,
  originY: s0,
  originZ: B,
  // Misc
  zIndex: l0,
  // SVG
  fillOpacity: pa,
  strokeOpacity: pa,
  numOctaves: l0
};
function Bp(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (ix(d)) {
      i[d] = f;
      continue;
    }
    const h = sx[d], m = E3(f, h);
    if (so.has(d)) {
      if (l = !0, a[d] = m, !c)
        continue;
      f !== (h.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = m) : o[d] = m;
  }
  if (t.transform || (l || n ? o.transform = T3(e.transform, r, c, n) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: h = 0 } = s;
    o.transformOrigin = `${d} ${f} ${h}`;
  }
}
const Vp = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function lx(e, t, r) {
  for (const n in t)
    !wt(t[n]) && !nx(n, r) && (e[n] = t[n]);
}
function M3({ transformTemplate: e }, t, r) {
  return b.useMemo(() => {
    const n = Vp();
    return Bp(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function I3(e, t, r) {
  const n = e.style || {}, o = {};
  return lx(o, n, e), Object.assign(o, M3(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function z3(e, t, r) {
  const n = {}, o = I3(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const F3 = /* @__PURE__ */ new Set([
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
function du(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || F3.has(e);
}
let ux = (e) => !du(e);
function D3(e) {
  e && (ux = (t) => t.startsWith("on") ? !du(t) : e(t));
}
try {
  D3(require("@emotion/is-prop-valid").default);
} catch {
}
function O3(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (ux(o) || r === !0 && du(o) || !t && !du(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function u0(e, t, r) {
  return typeof e == "string" ? e : B.transform(t + r * e);
}
function L3(e, t, r) {
  const n = u0(t, e.x, e.width), o = u0(r, e.y, e.height);
  return `${n} ${o}`;
}
const N3 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, j3 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function B3(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? N3 : j3;
  e[i.offset] = B.transform(-n);
  const a = B.transform(t), s = B.transform(r);
  e[i.array] = `${a} ${s}`;
}
function Wp(e, {
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
  if (Bp(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: m, dimensions: y } = e;
  h.transform && (y && (m.transform = h.transform), delete h.transform), y && (o !== void 0 || i !== void 0 || m.transform) && (m.transformOrigin = L3(y, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (h.x = t), r !== void 0 && (h.y = r), n !== void 0 && (h.scale = n), a !== void 0 && B3(h, a, s, l, !1);
}
const cx = () => ({
  ...Vp(),
  attrs: {}
}), Up = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function V3(e, t, r, n) {
  const o = b.useMemo(() => {
    const i = cx();
    return Wp(i, t, { enableHardwareAcceleration: !1 }, Up(n), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    lx(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function W3(e = !1) {
  return (r, n, o, { latestValues: i }, a) => {
    const l = (jp(r) ? V3 : z3)(n, i, a, r), c = {
      ...O3(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = b.useMemo(() => wt(d) ? d.get() : d, [d]);
    return b.createElement(r, {
      ...c,
      children: f
    });
  };
}
function dx(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r)
    e.style.setProperty(i, r[i]);
}
const fx = /* @__PURE__ */ new Set([
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
function hx(e, t, r, n) {
  dx(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(fx.has(o) ? o : Dp(o), t.attrs[o]);
}
function Hp(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (wt(r[o]) || t.style && wt(t.style[o]) || nx(o, e)) && (n[o] = r[o]);
  return n;
}
function px(e, t) {
  const r = Hp(e, t);
  for (const n in e)
    if (wt(e[n]) || wt(t[n])) {
      const o = ss.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function Gp(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function mx(e) {
  const t = b.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const fu = (e) => Array.isArray(e), U3 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), H3 = (e) => fu(e) ? e[e.length - 1] || 0 : e;
function El(e) {
  const t = wt(e) ? e.get() : e;
  return U3(t) ? t.toValue() : t;
}
function G3({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = {
    latestValues: K3(n, o, i, e),
    renderState: t()
  };
  return r && (a.mount = (s) => r(n, s, a)), a;
}
const vx = (e) => (t, r) => {
  const n = b.useContext(ic), o = b.useContext(as), i = () => G3(e, t, n, o);
  return r ? i() : mx(i);
};
function K3(e, t, r, n) {
  const o = {}, i = n(e, {});
  for (const f in i)
    o[f] = El(i[f]);
  let { initial: a, animate: s } = e;
  const l = lc(e), u = tx(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !sc(d) && (Array.isArray(d) ? d : [d]).forEach((h) => {
    const m = Gp(e, h);
    if (!m)
      return;
    const { transitionEnd: y, transition: x, ...v } = m;
    for (const p in v) {
      let g = v[p];
      if (Array.isArray(g)) {
        const w = c ? g.length - 1 : 0;
        g = g[w];
      }
      g !== null && (o[p] = g);
    }
    for (const p in y)
      o[p] = y[p];
  }), o;
}
const Me = (e) => e;
class c0 {
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
function Y3(e) {
  let t = new c0(), r = new c0(), n = 0, o = !1, i = !1;
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
const Xs = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], X3 = 40;
function q3(e, t) {
  let r = !1, n = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = Xs.reduce((d, f) => (d[f] = Y3(() => r = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    r = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, X3), 1), o.timestamp = d, o.isProcessing = !0, Xs.forEach(a), o.isProcessing = !1, r && t && (n = !1, e(s));
  }, l = () => {
    r = !0, n = !0, o.isProcessing || e(s);
  };
  return { schedule: Xs.reduce((d, f) => {
    const h = i[f];
    return d[f] = (m, y = !1, x = !1) => (r || l(), h.schedule(m, y, x)), d;
  }, {}), cancel: (d) => Xs.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: he, cancel: Vr, state: Ue, steps: xd } = q3(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Me, !0), Q3 = {
  useVisualState: vx({
    scrapeMotionValuesFromProps: px,
    createRenderState: cx,
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
        Wp(r, n, { enableHardwareAcceleration: !1 }, Up(t.tagName), e.transformTemplate), hx(t, r);
      });
    }
  })
}, Z3 = {
  useVisualState: vx({
    scrapeMotionValuesFromProps: Hp,
    createRenderState: Vp
  })
};
function J3(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...jp(e) ? Q3 : Z3,
    preloadedFeatures: r,
    useRender: W3(t),
    createVisualElement: n,
    Component: e
  };
}
function Mr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const gx = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function cc(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const e4 = (e) => (t) => gx(t) && e(t, cc(t));
function Fr(e, t, r, n) {
  return Mr(e, t, e4(r), n);
}
const t4 = (e, t) => (r) => t(e(r)), pn = (...e) => e.reduce(t4);
function yx(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const d0 = yx("dragHorizontal"), f0 = yx("dragVertical");
function bx(e) {
  let t = !1;
  if (e === "y")
    t = f0();
  else if (e === "x")
    t = d0();
  else {
    const r = d0(), n = f0();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function Sx() {
  const e = bx(!0);
  return e ? (e(), !1) : !0;
}
class _n {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function h0(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || Sx())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && he.update(() => s[n](i, a));
  };
  return Fr(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class r4 extends _n {
  mount() {
    this.unmount = pn(h0(this.node, !0), h0(this.node, !1));
  }
  unmount() {
  }
}
class n4 extends _n {
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
    this.unmount = pn(Mr(this.node.current, "focus", () => this.onFocus()), Mr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const xx = (e, t) => t ? e === t ? !0 : xx(e, t.parentElement) : !1;
function wd(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, cc(r));
}
class o4 extends _n {
  constructor() {
    super(...arguments), this.removeStartListeners = Me, this.removeEndListeners = Me, this.removeAccessibleListeners = Me, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), i = Fr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        he.update(() => {
          xx(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), a = Fr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = pn(i, a), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || wd("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && he.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Mr(this.node.current, "keyup", a), wd("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Mr(this.node.current, "keydown", t), n = () => {
        this.isPressing && wd("cancel", (i, a) => this.cancelPress(i, a));
      }, o = Mr(this.node.current, "blur", n);
      this.removeAccessibleListeners = pn(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && he.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Sx();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && he.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Fr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Mr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = pn(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const qf = /* @__PURE__ */ new WeakMap(), kd = /* @__PURE__ */ new WeakMap(), i4 = (e) => {
  const t = qf.get(e.target);
  t && t(e);
}, a4 = (e) => {
  e.forEach(i4);
};
function s4({ root: e, ...t }) {
  const r = e || document;
  kd.has(r) || kd.set(r, {});
  const n = kd.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(a4, { root: e, ...t })), n[o];
}
function l4(e, t, r) {
  const n = s4(t);
  return qf.set(e, r), n.observe(e), () => {
    qf.delete(e), n.unobserve(e);
  };
}
const u4 = {
  some: 0,
  all: 1
};
class c4 extends _n {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: i } = t, a = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : u4[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return l4(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(d4(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function d4({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const f4 = {
  inView: {
    Feature: c4
  },
  tap: {
    Feature: o4
  },
  focus: {
    Feature: n4
  },
  hover: {
    Feature: r4
  }
};
function wx(e, t) {
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
function h4(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function p4(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function dc(e, t, r) {
  const n = e.getProps();
  return Gp(n, t, r !== void 0 ? r : n.custom, h4(e), p4(e));
}
let m4 = Me, Kp = Me;
const mn = (e) => e * 1e3, Dr = (e) => e / 1e3, v4 = {
  current: !1
}, kx = (e) => Array.isArray(e) && typeof e[0] == "number";
function Cx(e) {
  return !!(!e || typeof e == "string" && _x[e] || kx(e) || Array.isArray(e) && e.every(Cx));
}
const Zi = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, _x = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Zi([0, 0.65, 0.55, 1]),
  circOut: Zi([0.55, 0, 1, 0.45]),
  backIn: Zi([0.31, 0.01, 0.66, -0.59]),
  backOut: Zi([0.33, 1.53, 0.69, 0.99])
};
function Tx(e) {
  if (e)
    return kx(e) ? Zi(e) : Array.isArray(e) ? e.map(Tx) : _x[e];
}
function g4(e, t, r, { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: r };
  l && (u.offset = l);
  const c = Tx(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: n,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function y4(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const Px = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, b4 = 1e-7, S4 = 12;
function x4(e, t, r, n, o) {
  let i, a, s = 0;
  do
    a = t + (r - t) / 2, i = Px(a, n, o) - e, i > 0 ? r = a : t = a;
  while (Math.abs(i) > b4 && ++s < S4);
  return a;
}
function cs(e, t, r, n) {
  if (e === t && r === n)
    return Me;
  const o = (i) => x4(i, 0, 1, e, r);
  return (i) => i === 0 || i === 1 ? i : Px(o(i), t, n);
}
const w4 = cs(0.42, 0, 1, 1), k4 = cs(0, 0, 0.58, 1), Ex = cs(0.42, 0, 0.58, 1), C4 = (e) => Array.isArray(e) && typeof e[0] != "number", $x = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ax = (e) => (t) => 1 - e(1 - t), Rx = (e) => 1 - Math.sin(Math.acos(e)), Yp = Ax(Rx), _4 = $x(Yp), Mx = cs(0.33, 1.53, 0.69, 0.99), Xp = Ax(Mx), T4 = $x(Xp), P4 = (e) => (e *= 2) < 1 ? 0.5 * Xp(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), E4 = {
  linear: Me,
  easeIn: w4,
  easeInOut: Ex,
  easeOut: k4,
  circIn: Rx,
  circInOut: _4,
  circOut: Yp,
  backIn: Xp,
  backInOut: T4,
  backOut: Mx,
  anticipate: P4
}, p0 = (e) => {
  if (Array.isArray(e)) {
    Kp(e.length === 4);
    const [t, r, n, o] = e;
    return cs(t, r, n, o);
  } else if (typeof e == "string")
    return E4[e];
  return e;
}, qp = (e, t) => (r) => !!(ls(r) && $3.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), Ix = (e, t, r) => (n) => {
  if (!ls(n))
    return n;
  const [o, i, a, s] = n.match(uc);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [r]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, $4 = (e) => bn(0, 255, e), Cd = {
  ...lo,
  transform: (e) => Math.round($4(e))
}, Wn = {
  test: qp("rgb", "red"),
  parse: Ix("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + Cd.transform(e) + ", " + Cd.transform(t) + ", " + Cd.transform(r) + ", " + ma(pa.transform(n)) + ")"
};
function A4(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Qf = {
  test: qp("#"),
  parse: A4,
  transform: Wn.transform
}, No = {
  test: qp("hsl", "hue"),
  parse: Ix("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + br.transform(ma(t)) + ", " + br.transform(ma(r)) + ", " + ma(pa.transform(n)) + ")"
}, st = {
  test: (e) => Wn.test(e) || Qf.test(e) || No.test(e),
  parse: (e) => Wn.test(e) ? Wn.parse(e) : No.test(e) ? No.parse(e) : Qf.parse(e),
  transform: (e) => ls(e) ? e : e.hasOwnProperty("red") ? Wn.transform(e) : No.transform(e)
}, Te = (e, t, r) => -r * e + r * t + e;
function _d(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function R4({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = _d(l, s, e + 1 / 3), i = _d(l, s, e), a = _d(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n
  };
}
const Td = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, M4 = [Qf, Wn, No], I4 = (e) => M4.find((t) => t.test(e));
function m0(e) {
  const t = I4(e);
  let r = t.parse(e);
  return t === No && (r = R4(r)), r;
}
const zx = (e, t) => {
  const r = m0(e), n = m0(t), o = { ...r };
  return (i) => (o.red = Td(r.red, n.red, i), o.green = Td(r.green, n.green, i), o.blue = Td(r.blue, n.blue, i), o.alpha = Te(r.alpha, n.alpha, i), Wn.transform(o));
};
function z4(e) {
  var t, r;
  return isNaN(e) && ls(e) && (((t = e.match(uc)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(ax)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const Fx = {
  regex: P3,
  countKey: "Vars",
  token: "${v}",
  parse: Me
}, Dx = {
  regex: ax,
  countKey: "Colors",
  token: "${c}",
  parse: st.parse
}, Ox = {
  regex: uc,
  countKey: "Numbers",
  token: "${n}",
  parse: lo.parse
};
function Pd(e, { regex: t, countKey: r, token: n, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + r] = i.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...i.map(o)));
}
function hu(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && Pd(r, Fx), Pd(r, Dx), Pd(r, Ox), r;
}
function Lx(e) {
  return hu(e).values;
}
function Nx(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = hu(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < n ? s = s.replace(Fx.token, a[l]) : l < n + r ? s = s.replace(Dx.token, st.transform(a[l])) : s = s.replace(Ox.token, ma(a[l]));
    return s;
  };
}
const F4 = (e) => typeof e == "number" ? 0 : e;
function D4(e) {
  const t = Lx(e);
  return Nx(e)(t.map(F4));
}
const Sn = {
  test: z4,
  parse: Lx,
  createTransformer: Nx,
  getAnimatableNone: D4
}, jx = (e, t) => (r) => `${r > 0 ? t : e}`;
function Bx(e, t) {
  return typeof e == "number" ? (r) => Te(e, t, r) : st.test(e) ? zx(e, t) : e.startsWith("var(") ? jx(e, t) : Wx(e, t);
}
const Vx = (e, t) => {
  const r = [...e], n = r.length, o = e.map((i, a) => Bx(i, t[a]));
  return (i) => {
    for (let a = 0; a < n; a++)
      r[a] = o[a](i);
    return r;
  };
}, O4 = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Bx(e[o], t[o]));
  return (o) => {
    for (const i in n)
      r[i] = n[i](o);
    return r;
  };
}, Wx = (e, t) => {
  const r = Sn.createTransformer(t), n = hu(e), o = hu(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? pn(Vx(n.values, o.values), r) : jx(e, t);
}, Ga = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, v0 = (e, t) => (r) => Te(e, t, r);
function L4(e) {
  return typeof e == "number" ? v0 : typeof e == "string" ? st.test(e) ? zx : Wx : Array.isArray(e) ? Vx : typeof e == "object" ? O4 : v0;
}
function N4(e, t, r) {
  const n = [], o = r || L4(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Me : t;
      s = pn(l, s);
    }
    n.push(s);
  }
  return n;
}
function Ux(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if (Kp(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = N4(t, n, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = Ga(e[c], e[c + 1], u);
    return a[c](d);
  };
  return r ? (u) => l(bn(e[0], e[i - 1], u)) : l;
}
function j4(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = Ga(0, t, n);
    e.push(Te(r, 1, o));
  }
}
function B4(e) {
  const t = [0];
  return j4(t, e.length - 1), t;
}
function V4(e, t) {
  return e.map((r) => r * t);
}
function W4(e, t) {
  return e.map(() => t || Ex).splice(0, e.length - 1);
}
function pu({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = C4(n) ? n.map(p0) : p0(n), i = {
    done: !1,
    value: t[0]
  }, a = V4(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : B4(t),
    e
  ), s = Ux(a, t, {
    ease: Array.isArray(o) ? o : W4(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Hx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const U4 = 5;
function Gx(e, t, r) {
  const n = Math.max(t - U4, 0);
  return Hx(r - e(n), t - n);
}
const Ed = 1e-3, H4 = 0.01, g0 = 10, G4 = 0.05, K4 = 1;
function Y4({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i;
  m4(e <= mn(g0));
  let a = 1 - t;
  a = bn(G4, K4, a), e = bn(H4, g0, Dr(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - r, h = Zf(u, a), m = Math.exp(-d);
    return Ed - f / h * m;
  }, i = (u) => {
    const d = u * a * e, f = d * r + r, h = Math.pow(a, 2) * Math.pow(u, 2) * e, m = Math.exp(-d), y = Zf(Math.pow(u, 2), a);
    return (-o(u) + Ed > 0 ? -1 : 1) * ((f - h) * m) / y;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - r) * e + 1;
    return -Ed + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (r - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = q4(o, i, s);
  if (e = mn(e), isNaN(l))
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
const X4 = 12;
function q4(e, t, r) {
  let n = r;
  for (let o = 1; o < X4; o++)
    n = n - e(n) / t(n);
  return n;
}
function Zf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Q4 = ["duration", "bounce"], Z4 = ["stiffness", "damping", "mass"];
function y0(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function J4(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!y0(e, Z4) && y0(e, Q4)) {
    const r = Y4(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Kx({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = J4(n), h = c ? -Dr(c) : 0, m = l / (2 * Math.sqrt(s * u)), y = i - o, x = Dr(Math.sqrt(s / u)), v = Math.abs(y) < 5;
  r || (r = v ? 0.01 : 2), t || (t = v ? 5e-3 : 0.5);
  let p;
  if (m < 1) {
    const g = Zf(x, m);
    p = (w) => {
      const T = Math.exp(-m * x * w);
      return i - T * ((h + m * x * y) / g * Math.sin(g * w) + y * Math.cos(g * w));
    };
  } else if (m === 1)
    p = (g) => i - Math.exp(-x * g) * (y + (h + x * y) * g);
  else {
    const g = x * Math.sqrt(m * m - 1);
    p = (w) => {
      const T = Math.exp(-m * x * w), $ = Math.min(g * w, 300);
      return i - T * ((h + m * x * y) * Math.sinh($) + g * y * Math.cosh($)) / g;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (g) => {
      const w = p(g);
      if (f)
        a.done = g >= d;
      else {
        let T = h;
        g !== 0 && (m < 1 ? T = Gx(p, g, w) : T = 0);
        const $ = Math.abs(T) <= r, P = Math.abs(i - w) <= t;
        a.done = $ && P;
      }
      return a.value = a.done ? i : w, a;
    }
  };
}
function b0({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, h = (A) => s !== void 0 && A < s || l !== void 0 && A > l, m = (A) => s === void 0 ? l : l === void 0 || Math.abs(s - A) < Math.abs(l - A) ? s : l;
  let y = r * t;
  const x = d + y, v = a === void 0 ? x : a(x);
  v !== x && (y = v - d);
  const p = (A) => -y * Math.exp(-A / n), g = (A) => v + p(A), w = (A) => {
    const R = p(A), z = g(A);
    f.done = Math.abs(R) <= u, f.value = f.done ? v : z;
  };
  let T, $;
  const P = (A) => {
    h(f.value) && (T = A, $ = Kx({
      keyframes: [f.value, m(f.value)],
      velocity: Gx(g, A, f.value),
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return P(0), {
    calculatedDuration: null,
    next: (A) => {
      let R = !1;
      return !$ && T === void 0 && (R = !0, w(A), P(A)), T !== void 0 && A > T ? $.next(A - T) : (!R && w(A), f);
    }
  };
}
const eF = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => he.update(t, !0),
    stop: () => Vr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ue.isProcessing ? Ue.timestamp : performance.now()
  };
}, S0 = 2e4;
function x0(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < S0; )
    t += r, n = e.next(t);
  return t >= S0 ? 1 / 0 : t;
}
const tF = {
  decay: b0,
  inertia: b0,
  tween: pu,
  keyframes: pu,
  spring: Kx
};
function mu({ autoplay: e = !0, delay: t = 0, driver: r = eF, keyframes: n, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let h = 1, m = !1, y, x;
  const v = () => {
    x = new Promise((j) => {
      y = j;
    });
  };
  v();
  let p;
  const g = tF[o] || pu;
  let w;
  g !== pu && typeof n[0] != "number" && (w = Ux([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const T = g({ ...f, keyframes: n });
  let $;
  s === "mirror" && ($ = g({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let P = "idle", A = null, R = null, z = null;
  T.calculatedDuration === null && i && (T.calculatedDuration = x0(T));
  const { calculatedDuration: H } = T;
  let ce = 1 / 0, me = 1 / 0;
  H !== null && (ce = H + a, me = ce * (i + 1) - a);
  let Z = 0;
  const ue = (j) => {
    if (R === null)
      return;
    h > 0 && (R = Math.min(R, j)), h < 0 && (R = Math.min(j - me / h, R)), A !== null ? Z = A : Z = Math.round(j - R) * h;
    const J = Z - t * (h >= 0 ? 1 : -1), W = h >= 0 ? J < 0 : J > me;
    Z = Math.max(J, 0), P === "finished" && A === null && (Z = me);
    let te = Z, kt = T;
    if (i) {
      const Dt = Z / ce;
      let Ct = Math.floor(Dt), Ot = Dt % 1;
      !Ot && Dt >= 1 && (Ot = 1), Ot === 1 && Ct--, Ct = Math.min(Ct, i + 1);
      const Tn = !!(Ct % 2);
      Tn && (s === "reverse" ? (Ot = 1 - Ot, a && (Ot -= a / ce)) : s === "mirror" && (kt = $));
      let uo = bn(0, 1, Ot);
      Z > me && (uo = s === "reverse" && Tn ? 1 : 0), te = uo * ce;
    }
    const Se = W ? { done: !1, value: n[0] } : kt.next(te);
    w && (Se.value = w(Se.value));
    let { done: ze } = Se;
    !W && H !== null && (ze = h >= 0 ? Z >= me : Z <= 0);
    const et = A === null && (P === "finished" || P === "running" && ze);
    return d && d(Se.value), et && I(), Se;
  }, $e = () => {
    p && p.stop(), p = void 0;
  }, Ie = () => {
    P = "idle", $e(), y(), v(), R = z = null;
  }, I = () => {
    P = "finished", c && c(), $e(), y();
  }, N = () => {
    if (m)
      return;
    p || (p = r(ue));
    const j = p.now();
    l && l(), A !== null ? R = j - A : (!R || P === "finished") && (R = j), P === "finished" && v(), z = R, A = null, P = "running", p.start();
  };
  e && N();
  const V = {
    then(j, J) {
      return x.then(j, J);
    },
    get time() {
      return Dr(Z);
    },
    set time(j) {
      j = mn(j), Z = j, A !== null || !p || h === 0 ? A = j : R = p.now() - j / h;
    },
    get duration() {
      const j = T.calculatedDuration === null ? x0(T) : T.calculatedDuration;
      return Dr(j);
    },
    get speed() {
      return h;
    },
    set speed(j) {
      j === h || !p || (h = j, V.time = Dr(Z));
    },
    get state() {
      return P;
    },
    play: N,
    pause: () => {
      P = "paused", A = Z;
    },
    stop: () => {
      m = !0, P !== "idle" && (P = "idle", u && u(), Ie());
    },
    cancel: () => {
      z !== null && ue(z), Ie();
    },
    complete: () => {
      P = "finished";
    },
    sample: (j) => (R = 0, ue(j))
  };
  return V;
}
function rF(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const nF = rF(() => Object.hasOwnProperty.call(Element.prototype, "animate")), oF = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), qs = 10, iF = 2e4, aF = (e, t) => t.type === "spring" || e === "backgroundColor" || !Cx(t.ease);
function sF(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(nF() && oF.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((p) => {
      s = p;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: h } = o;
  if (aF(t, o)) {
    const p = mu({
      ...o,
      repeat: 0,
      delay: 0
    });
    let g = { done: !1, value: c[0] };
    const w = [];
    let T = 0;
    for (; !g.done && T < iF; )
      g = p.sample(T), w.push(g.value), T += qs;
    h = void 0, c = w, d = T - qs, f = "linear";
  }
  const m = g4(e.owner.current, t, c, {
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
    times: h
  });
  o.syncStart && (m.startTime = Ue.isProcessing ? Ue.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const y = () => m.cancel(), x = () => {
    he.update(y), s(), u();
  };
  return m.onfinish = () => {
    e.set(y4(c, o)), n && n(), x();
  }, {
    then(p, g) {
      return l.then(p, g);
    },
    attachTimeline(p) {
      return m.timeline = p, m.onfinish = null, Me;
    },
    get time() {
      return Dr(m.currentTime || 0);
    },
    set time(p) {
      m.currentTime = mn(p);
    },
    get speed() {
      return m.playbackRate;
    },
    set speed(p) {
      m.playbackRate = p;
    },
    get duration() {
      return Dr(d);
    },
    play: () => {
      a || (m.play(), Vr(y));
    },
    pause: () => m.pause(),
    stop: () => {
      if (a = !0, m.playState === "idle")
        return;
      const { currentTime: p } = m;
      if (p) {
        const g = mu({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(g.sample(p - qs).value, g.sample(p).value, qs);
      }
      x();
    },
    complete: () => m.finish(),
    cancel: x
  };
}
function lF({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
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
  return t ? mu({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const uF = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, cF = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), dF = {
  type: "keyframes",
  duration: 0.8
}, fF = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, hF = (e, { keyframes: t }) => t.length > 2 ? dF : so.has(e) ? e.startsWith("scale") ? cF(t[1]) : uF : fF, Jf = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Sn.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), pF = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function mF(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(uc) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let i = pF.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const vF = /([a-z-]*)\(.*?\)/g, eh = {
  ...Sn,
  getAnimatableNone: (e) => {
    const t = e.match(vF);
    return t ? t.map(mF).join(" ") : e;
  }
}, gF = {
  ...sx,
  // Color props
  color: st,
  backgroundColor: st,
  outlineColor: st,
  fill: st,
  stroke: st,
  // Border props
  borderColor: st,
  borderTopColor: st,
  borderRightColor: st,
  borderBottomColor: st,
  borderLeftColor: st,
  filter: eh,
  WebkitFilter: eh
}, Qp = (e) => gF[e];
function Yx(e, t) {
  let r = Qp(e);
  return r !== eh && (r = Sn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const Xx = (e) => /^0[^.\s]+$/.test(e);
function yF(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Xx(e);
}
function bF(e, t, r, n) {
  const o = Jf(t, r);
  let i;
  Array.isArray(r) ? i = [...r] : i = [null, r];
  const a = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), yF(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = Yx(t, s);
    }
  return i;
}
function SF({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function Zp(e, t) {
  return e[t] || e.default || e;
}
const Jp = (e, t, r, n = {}) => (o) => {
  const i = Zp(n, e) || {}, a = i.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - mn(a);
  const l = bF(t, e, r, i), u = l[0], c = l[l.length - 1], d = Jf(e, u), f = Jf(e, c);
  let h = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...i,
    delay: -s,
    onUpdate: (m) => {
      t.set(m), i.onUpdate && i.onUpdate(m);
    },
    onComplete: () => {
      o(), i.onComplete && i.onComplete();
    }
  };
  if (SF(i) || (h = {
    ...h,
    ...hF(e, h)
  }), h.duration && (h.duration = mn(h.duration)), h.repeatDelay && (h.repeatDelay = mn(h.repeatDelay)), !d || !f || v4.current || i.type === !1)
    return lF(h);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const m = sF(t, e, h);
    if (m)
      return m;
  }
  return mu(h);
};
function vu(e) {
  return !!(wt(e) && e.add);
}
const qx = (e) => /^\-?\d*\.?\d+$/.test(e);
function em(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function tm(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class rm {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return em(this.subscriptions, t), () => tm(this.subscriptions, t);
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
const xF = (e) => !isNaN(parseFloat(e));
class wF {
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
      const { delta: i, timestamp: a } = Ue;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, he.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => he.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = xF(this.current), this.owner = r.owner;
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
    this.events[t] || (this.events[t] = new rm());
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
      Hx(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function mi(e, t) {
  return new wF(e, t);
}
const Qx = (e) => (t) => t.test(e), kF = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Zx = [lo, B, br, Yr, R3, A3, kF], Ni = (e) => Zx.find(Qx(e)), CF = [...Zx, st, Sn], _F = (e) => CF.find(Qx(e));
function TF(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, mi(r));
}
function PF(e, t) {
  const r = dc(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const a in i) {
    const s = H3(i[a]);
    TF(e, a, s);
  }
}
function EF(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (qx(c) || Xx(c)) ? c = parseFloat(c) : !_F(c) && Sn.test(u) && (c = Yx(l, u)), e.addValue(l, mi(c, { owner: e })), r[l] === void 0 && (r[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function $F(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function AF(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = $F(o, t);
    if (i !== void 0)
      n[o] = i;
    else {
      const a = r.getValue(o);
      a && (n[o] = a.get());
    }
  }
  return n;
}
function RF({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function Jx(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (i = n);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), h = s[d];
    if (!f || h === void 0 || c && RF(c, d))
      continue;
    const m = {
      delay: r,
      elapsed: 0,
      ...Zp(i || {}, d)
    };
    let y = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const p = e.getProps()[ex];
      p && (y = !1, m.elapsed = window.HandoffAppearAnimations(p, d, f, he), m.syncStart = !0);
    }
    let x = y && h === f.get();
    if (m.type === "spring" && (f.getVelocity() || m.velocity) && (x = !1), f.animation && (x = !1), x)
      continue;
    f.start(Jp(d, f, h, e.shouldReduceMotion && so.has(d) ? { type: !1 } : m));
    const v = f.animation;
    vu(l) && (l.add(d), v.then(() => l.remove(d))), u.push(v);
  }
  return a && Promise.all(u).then(() => {
    a && PF(e, a);
  }), u;
}
function th(e, t, r = {}) {
  const n = dc(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => Promise.all(Jx(e, n, r)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return MF(e, t, u + l, c, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(r.delay)]);
}
function MF(e, t, r = 0, n = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n;
  return Array.from(e.variantChildren).sort(IF).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(th(u, t, {
      ...i,
      delay: r + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function IF(e, t) {
  return e.sortNodePosition(t);
}
function zF(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => th(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = th(e, t, r);
  else {
    const o = typeof t == "function" ? dc(e, t, r.custom) : t;
    n = Promise.all(Jx(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const FF = [...Op].reverse(), DF = Op.length;
function OF(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => zF(e, r, n)));
}
function LF(e) {
  let t = OF(e);
  const r = jF();
  let n = !0;
  const o = (l, u) => {
    const c = dc(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...h } = c;
      l = { ...l, ...h, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(), d = e.getVariantContext(!0) || {}, f = [], h = /* @__PURE__ */ new Set();
    let m = {}, y = 1 / 0;
    for (let v = 0; v < DF; v++) {
      const p = FF[v], g = r[p], w = c[p] !== void 0 ? c[p] : d[p], T = Ua(w), $ = p === u ? g.isActive : null;
      $ === !1 && (y = v);
      let P = w === d[p] && w !== c[p] && T;
      if (P && n && e.manuallyAnimateOnMount && (P = !1), g.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !g.isActive && $ === null || // If we didn't and don't have any defined prop for this animation type
      !w && !g.prevProp || // Or if the prop doesn't define an animation
      sc(w) || typeof w == "boolean")
        continue;
      const A = NF(g.prevProp, w);
      let R = A || // If we're making this variant active, we want to always make it active
      p === u && g.isActive && !P && T || // If we removed a higher-priority variant (i is in reverse order)
      v > y && T;
      const z = Array.isArray(w) ? w : [w];
      let H = z.reduce(o, {});
      $ === !1 && (H = {});
      const { prevResolvedValues: ce = {} } = g, me = {
        ...ce,
        ...H
      }, Z = (ue) => {
        R = !0, h.delete(ue), g.needsAnimating[ue] = !0;
      };
      for (const ue in me) {
        const $e = H[ue], Ie = ce[ue];
        m.hasOwnProperty(ue) || ($e !== Ie ? fu($e) && fu(Ie) ? !wx($e, Ie) || A ? Z(ue) : g.protectedKeys[ue] = !0 : $e !== void 0 ? Z(ue) : h.add(ue) : $e !== void 0 && h.has(ue) ? Z(ue) : g.protectedKeys[ue] = !0);
      }
      g.prevProp = w, g.prevResolvedValues = H, g.isActive && (m = { ...m, ...H }), n && e.blockInitialAnimation && (R = !1), R && !P && f.push(...z.map((ue) => ({
        animation: ue,
        options: { type: p, ...l }
      })));
    }
    if (h.size) {
      const v = {};
      h.forEach((p) => {
        const g = e.getBaseTarget(p);
        g !== void 0 && (v[p] = g);
      }), f.push({ animation: v });
    }
    let x = !!f.length;
    return n && c.initial === !1 && !e.manuallyAnimateOnMount && (x = !1), n = !1, x ? t(f) : Promise.resolve();
  }
  function s(l, u, c) {
    var d;
    if (r[l].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((h) => {
      var m;
      return (m = h.animationState) === null || m === void 0 ? void 0 : m.setActive(l, u);
    }), r[l].isActive = u;
    const f = a(c, l);
    for (const h in r)
      r[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => r
  };
}
function NF(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !wx(t, e) : !1;
}
function An(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function jF() {
  return {
    animate: An(!0),
    whileInView: An(),
    whileHover: An(),
    whileTap: An(),
    whileDrag: An(),
    whileFocus: An(),
    exit: An()
  };
}
class BF extends _n {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = LF(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), sc(t) && (this.unmount = t.subscribe(this.node));
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
let VF = 0;
class WF extends _n {
  constructor() {
    super(...arguments), this.id = VF++;
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
const UF = {
  animation: {
    Feature: BF
  },
  exit: {
    Feature: WF
  }
}, w0 = (e, t) => Math.abs(e - t);
function HF(e, t) {
  const r = w0(e.x, t.x), n = w0(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class ew {
  constructor(t, r, { transformPagePoint: n, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = Ad(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = HF(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: h } = c, { timestamp: m } = Ue;
      this.history.push({ ...h, timestamp: m });
      const { onStart: y, onMove: x } = this.handlers;
      d || (y && y(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = $d(d, this.transformPagePoint), he.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: h } = this.handlers, m = Ad(c.type === "pointercancel" ? this.lastMoveEventInfo : $d(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, m), h && h(c, m);
    }, !gx(t))
      return;
    this.handlers = r, this.transformPagePoint = n, this.contextWindow = o || window;
    const i = cc(t), a = $d(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = Ue;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = r;
    u && u(t, Ad(a, this.history)), this.removeListeners = pn(Fr(this.contextWindow, "pointermove", this.handlePointerMove), Fr(this.contextWindow, "pointerup", this.handlePointerUp), Fr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Vr(this.updatePoint);
  }
}
function $d(e, t) {
  return t ? { point: t(e.point) } : e;
}
function k0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ad({ point: e }, t) {
  return {
    point: e,
    delta: k0(e, tw(t)),
    offset: k0(e, GF(t)),
    velocity: KF(t, 0.1)
  };
}
function GF(e) {
  return e[0];
}
function tw(e) {
  return e[e.length - 1];
}
function KF(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = tw(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > mn(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const i = Dr(o.timestamp - n.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - n.x) / i,
    y: (o.y - n.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Mt(e) {
  return e.max - e.min;
}
function rh(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function C0(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = Te(t.min, t.max, e.origin), e.scale = Mt(r) / Mt(t), (rh(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Te(r.min, r.max, e.origin) - e.originPoint, (rh(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function va(e, t, r, n) {
  C0(e.x, t.x, r.x, n ? n.originX : void 0), C0(e.y, t.y, r.y, n ? n.originY : void 0);
}
function _0(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Mt(t);
}
function YF(e, t, r) {
  _0(e.x, t.x, r.x), _0(e.y, t.y, r.y);
}
function T0(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Mt(t);
}
function ga(e, t, r) {
  T0(e.x, t.x, r.x), T0(e.y, t.y, r.y);
}
function XF(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? Te(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? Te(r, e, n.max) : Math.min(e, r)), e;
}
function P0(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function qF(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: P0(e.x, r, o),
    y: P0(e.y, t, n)
  };
}
function E0(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function QF(e, t) {
  return {
    x: E0(e.x, t.x),
    y: E0(e.y, t.y)
  };
}
function ZF(e, t) {
  let r = 0.5;
  const n = Mt(e), o = Mt(t);
  return o > n ? r = Ga(t.min, t.max - n, e.min) : n > o && (r = Ga(e.min, e.max - o, t.min)), bn(0, 1, r);
}
function JF(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const nh = 0.35;
function eD(e = nh) {
  return e === !1 ? e = 0 : e === !0 && (e = nh), {
    x: $0(e, "left", "right"),
    y: $0(e, "top", "bottom")
  };
}
function $0(e, t, r) {
  return {
    min: A0(e, t),
    max: A0(e, r)
  };
}
function A0(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const R0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), jo = () => ({
  x: R0(),
  y: R0()
}), M0 = () => ({ min: 0, max: 0 }), Oe = () => ({
  x: M0(),
  y: M0()
});
function ur(e) {
  return [e("x"), e("y")];
}
function rw({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function tD({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function rD(e, t) {
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
function Rd(e) {
  return e === void 0 || e === 1;
}
function oh({ scale: e, scaleX: t, scaleY: r }) {
  return !Rd(e) || !Rd(t) || !Rd(r);
}
function zn(e) {
  return oh(e) || nw(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function nw(e) {
  return I0(e.x) || I0(e.y);
}
function I0(e) {
  return e && e !== "0%";
}
function gu(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function z0(e, t, r, n, o) {
  return o !== void 0 && (e = gu(e, o, n)), gu(e, r, n) + t;
}
function ih(e, t = 0, r = 1, n, o) {
  e.min = z0(e.min, t, r, n, o), e.max = z0(e.max, t, r, n, o);
}
function ow(e, { x: t, y: r }) {
  ih(e.x, t.translate, t.scale, t.originPoint), ih(e.y, r.translate, r.scale, r.originPoint);
}
function nD(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = r[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (n && i.options.layoutScroll && i.scroll && i !== i.root && Bo(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, ow(e, a)), n && zn(i.latestValues) && Bo(e, i.latestValues));
  }
  t.x = F0(t.x), t.y = F0(t.y);
}
function F0(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Qr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function D0(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = Te(e.min, e.max, i);
  ih(e, t[r], t[n], a, t.scale);
}
const oD = ["x", "scaleX", "originX"], iD = ["y", "scaleY", "originY"];
function Bo(e, t) {
  D0(e.x, t, oD), D0(e.y, t, iD);
}
function iw(e, t) {
  return rw(rD(e.getBoundingClientRect(), t));
}
function aD(e, t, r) {
  const n = iw(e, r), { scroll: o } = t;
  return o && (Qr(n.x, o.offset.x), Qr(n.y, o.offset.y)), n;
}
const aw = ({ current: e }) => e ? e.ownerDocument.defaultView : null, sD = /* @__PURE__ */ new WeakMap();
class lD {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Oe(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(cc(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = bx(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ur((m) => {
        let y = this.getAxisMotionValue(m).get() || 0;
        if (br.test(y)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const v = x.layout.layoutBox[m];
            v && (y = Mt(v) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[m] = y;
      }), f && he.update(() => f(l, u), !1, !0);
      const { animationState: h } = this.visualElement;
      h && h.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: h } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: m } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = uD(m), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, m), this.updateAxis("y", u.point, m), this.visualElement.render(), h && h(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new ew(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: aw(this.visualElement)
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
    if (!n || !Qs(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (a = XF(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    r && Lo(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = qF(o.layoutBox, r) : this.constraints = !1, this.elastic = eD(n), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && ur((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = JF(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !Lo(t))
      return !1;
    const n = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = aD(n, o.root, this.visualElement.getTransformPagePoint());
    let a = QF(o.layout.layoutBox, i);
    if (r) {
      const s = r(tD(a));
      this.hasMutatedConstraints = !!s, s && (a = rw(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = ur((c) => {
      if (!Qs(c, r, this.currentDirection))
        return;
      let d = l && l[c] || {};
      a && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, h = o ? 40 : 1e7, m = {
        type: "inertia",
        velocity: n ? t[c] : 0,
        bounceStiffness: f,
        bounceDamping: h,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...d
      };
      return this.startAxisValueAnimation(c, m);
    });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(Jp(t, n, 0, r));
  }
  stopAnimation() {
    ur((t) => this.getAxisMotionValue(t).stop());
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
    ur((r) => {
      const { drag: n } = this.getProps();
      if (!Qs(r, n, this.currentDirection))
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
    if (!Lo(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    ur((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = ZF({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), ur((a) => {
      if (!Qs(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(Te(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    sD.set(this.visualElement, this);
    const t = this.visualElement.current, r = Fr(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      Lo(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const a = Mr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (ur((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = nh, dragMomentum: s = !0 } = t;
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
function Qs(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function uD(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class cD extends _n {
  constructor(t) {
    super(t), this.removeGroupControls = Me, this.removeListeners = Me, this.controls = new lD(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Me;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const O0 = (e) => (t, r) => {
  e && he.update(() => e(t, r));
};
class dD extends _n {
  constructor() {
    super(...arguments), this.removePointerDownListener = Me;
  }
  onPointerDown(t) {
    this.session = new ew(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: aw(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: O0(t),
      onStart: O0(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && he.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Fr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function sw() {
  const e = b.useContext(as);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = b.useId();
  return b.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function fD() {
  return hD(b.useContext(as));
}
function hD(e) {
  return e === null ? !0 : e.isPresent;
}
const $l = {
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
function L0(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ji = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (B.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = L0(e, t.target.x), n = L0(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, pD = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = Sn.parse(e);
    if (o.length > 5)
      return n;
    const i = Sn.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = Te(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class mD extends Qn.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: i } = t;
    k3(vD), i && (r.group && r.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), $l.hasEverUpdated = !0;
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
function lw(e) {
  const [t, r] = sw(), n = b.useContext(Np);
  return Qn.createElement(mD, { ...e, layoutGroup: n, switchLayoutGroup: b.useContext(rx), isPresent: t, safeToRemove: r });
}
const vD = {
  borderRadius: {
    ...ji,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ji,
  borderTopRightRadius: ji,
  borderBottomLeftRadius: ji,
  borderBottomRightRadius: ji,
  boxShadow: pD
}, uw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], gD = uw.length, N0 = (e) => typeof e == "string" ? parseFloat(e) : e, j0 = (e) => typeof e == "number" || B.test(e);
function yD(e, t, r, n, o, i) {
  o ? (e.opacity = Te(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    bD(n)
  ), e.opacityExit = Te(t.opacity !== void 0 ? t.opacity : 1, 0, SD(n))) : i && (e.opacity = Te(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let a = 0; a < gD; a++) {
    const s = `border${uw[a]}Radius`;
    let l = B0(t, s), u = B0(r, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || j0(l) === j0(u) ? (e[s] = Math.max(Te(N0(l), N0(u), n), 0), (br.test(u) || br.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || r.rotate) && (e.rotate = Te(t.rotate || 0, r.rotate || 0, n));
}
function B0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const bD = cw(0, 0.5, Yp), SD = cw(0.5, 0.95, Me);
function cw(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(Ga(e, t, n));
}
function V0(e, t) {
  e.min = t.min, e.max = t.max;
}
function Bt(e, t) {
  V0(e.x, t.x), V0(e.y, t.y);
}
function W0(e, t, r, n, o) {
  return e -= t, e = gu(e, 1 / r, n), o !== void 0 && (e = gu(e, 1 / o, n)), e;
}
function xD(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (br.test(t) && (t = parseFloat(t), t = Te(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = Te(i.min, i.max, n);
  e === i && (s -= t), e.min = W0(e.min, t, r, s, o), e.max = W0(e.max, t, r, s, o);
}
function U0(e, t, [r, n, o], i, a) {
  xD(e, t[r], t[n], t[o], t.scale, i, a);
}
const wD = ["x", "scaleX", "originX"], kD = ["y", "scaleY", "originY"];
function H0(e, t, r, n) {
  U0(e.x, t, wD, r ? r.x : void 0, n ? n.x : void 0), U0(e.y, t, kD, r ? r.y : void 0, n ? n.y : void 0);
}
function G0(e) {
  return e.translate === 0 && e.scale === 1;
}
function dw(e) {
  return G0(e.x) && G0(e.y);
}
function CD(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function fw(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function K0(e) {
  return Mt(e.x) / Mt(e.y);
}
class _D {
  constructor() {
    this.members = [];
  }
  add(t) {
    em(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (tm(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function Y0(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: u, rotateY: c } = r;
    l && (n += `rotate(${l}deg) `), u && (n += `rotateX(${u}deg) `), c && (n += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || "none";
}
const TD = (e, t) => e.depth - t.depth;
class PD {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    em(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    tm(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(TD), this.isDirty = !1, this.children.forEach(t);
  }
}
function ED(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const i = o - r;
    i >= t && (Vr(n), e(i - t));
  };
  return he.read(n, !0), () => Vr(n);
}
function $D(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function AD(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function RD(e, t, r) {
  const n = wt(e) ? e : mi(e);
  return n.start(Jp("", n, t, r)), n.animation;
}
const X0 = ["", "X", "Y", "Z"], MD = { visibility: "hidden" }, q0 = 1e3;
let ID = 0;
const Fn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function hw({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = ID++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Fn.totalNodes = Fn.resolvedTargetDeltas = Fn.recalculatedProjection = 0, this.nodes.forEach(DD), this.nodes.forEach(BD), this.nodes.forEach(VD), this.nodes.forEach(OD), $D(Fn);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new PD());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new rm()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = AD(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = ED(f, 250), $l.hasAnimatedSinceResize && ($l.hasAnimatedSinceResize = !1, this.nodes.forEach(Z0));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: h, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || KD, { onLayoutAnimationStart: x, onLayoutAnimationComplete: v } = c.getProps(), p = !this.targetLayout || !fw(this.targetLayout, m) || h, g = !f && h;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || f && (p || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, g);
          const w = {
            ...Zp(y, "layout"),
            onPlay: x,
            onComplete: v
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || Z0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Vr(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(WD), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Q0);
        return;
      }
      this.isUpdating || this.nodes.forEach(ND), this.isUpdating = !1, this.nodes.forEach(jD), this.nodes.forEach(zD), this.nodes.forEach(FD), this.clearAllSnapshots();
      const s = performance.now();
      Ue.delta = bn(0, 1e3 / 60, s - Ue.timestamp), Ue.timestamp = s, Ue.isProcessing = !0, xd.update.process(Ue), xd.preRender.process(Ue), xd.render.process(Ue), Ue.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(LD), this.sharedNodes.forEach(UD);
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
      this.layout = this.measure(!1), this.layoutCorrected = Oe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !dw(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || zn(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), YD(l), {
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
        return Oe();
      const s = a.measureViewportBox(), { scroll: l } = this.root;
      return l && (Qr(s.x, l.offset.x), Qr(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = Oe();
      Bt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            Bt(s, a);
            const { scroll: f } = this.root;
            f && (Qr(s.x, -f.offset.x), Qr(s.y, -f.offset.y));
          }
          Qr(s.x, c.offset.x), Qr(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Oe();
      Bt(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && Bo(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), zn(c.latestValues) && Bo(l, c.latestValues);
      }
      return zn(this.latestValues) && Bo(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Oe();
      Bt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !zn(u.latestValues))
          continue;
        oh(u.latestValues) && u.updateSnapshot();
        const c = Oe(), d = u.measurePageBox();
        Bt(c, d), H0(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return zn(this.latestValues) && H0(s, this.latestValues), s;
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
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Oe(), this.relativeTargetOrigin = Oe(), ga(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), Bt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Oe(), this.targetWithTransforms = Oe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), YF(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Bt(this.target, this.layout.layoutBox), ow(this.target, this.targetDelta)) : Bt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Oe(), this.relativeTargetOrigin = Oe(), ga(this.relativeTargetOrigin, this.target, h.target), Bt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Fn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || oh(this.parent.latestValues) || nw(this.parent.latestValues)))
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
      Bt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, h = this.treeScale.y;
      nD(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: m } = s;
      if (!m) {
        this.projectionTransform && (this.projectionDelta = jo(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = jo(), this.projectionDeltaWithTransform = jo());
      const y = this.projectionTransform;
      va(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = Y0(this.projectionDelta, this.treeScale), (this.projectionTransform !== y || this.treeScale.x !== f || this.treeScale.y !== h) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), Fn.recalculatedProjection++;
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
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = jo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = Oe(), h = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, y = h !== m, x = this.getStack(), v = !x || x.members.length <= 1, p = !!(y && !v && this.options.crossfade === !0 && !this.path.some(GD));
      this.animationProgress = 0;
      let g;
      this.mixTargetDelta = (w) => {
        const T = w / 1e3;
        J0(d.x, a.x, T), J0(d.y, a.y, T), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ga(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), HD(this.relativeTarget, this.relativeTargetOrigin, f, T), g && CD(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = Oe()), Bt(g, this.relativeTarget)), y && (this.animationValues = c, yD(c, u, this.latestValues, T, p, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Vr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = he.update(() => {
        $l.hasAnimatedSinceResize = !0, this.currentAnimation = RD(0, q0, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(q0), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && pw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Oe();
          const d = Mt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Mt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        Bt(s, l), Bo(s, c), va(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new _D()), this.sharedNodes.get(a).add(s);
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
      for (let c = 0; c < X0.length; c++) {
        const d = "rotate" + X0[c];
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
        return MD;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = El(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = El(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !zn(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = Y0(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: h, y: m } = this.projectionDelta;
      u.transformOrigin = `${h.origin * 100}% ${m.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in cu) {
        if (f[y] === void 0)
          continue;
        const { correct: x, applyTo: v } = cu[y], p = u.transform === "none" ? f[y] : x(f[y], d);
        if (v) {
          const g = v.length;
          for (let w = 0; w < g; w++)
            u[v[w]] = p;
        } else
          u[y] = p;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? El(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(Q0), this.root.sharedNodes.clear();
    }
  };
}
function zD(e) {
  e.updateLayout();
}
function FD(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: i } = e.options, a = r.source !== e.layout.source;
    i === "size" ? ur((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], h = Mt(f);
      f.min = n[d].min, f.max = f.min + h;
    }) : pw(i, r.layoutBox, n) && ur((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], h = Mt(n[d]);
      f.max = f.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + h);
    });
    const s = jo();
    va(s, n, r.layoutBox);
    const l = jo();
    a ? va(l, e.applyTransform(o, !0), r.measuredBox) : va(l, n, r.layoutBox);
    const u = !dw(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const m = Oe();
          ga(m, r.layoutBox, f.layoutBox);
          const y = Oe();
          ga(y, n, h.layoutBox), fw(m, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = m, e.relativeParent = d);
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
function DD(e) {
  Fn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function OD(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function LD(e) {
  e.clearSnapshot();
}
function Q0(e) {
  e.clearMeasurements();
}
function ND(e) {
  e.isLayoutDirty = !1;
}
function jD(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Z0(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function BD(e) {
  e.resolveTargetDelta();
}
function VD(e) {
  e.calcProjection();
}
function WD(e) {
  e.resetRotation();
}
function UD(e) {
  e.removeLeadSnapshot();
}
function J0(e, t, r) {
  e.translate = Te(t.translate, 0, r), e.scale = Te(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ey(e, t, r, n) {
  e.min = Te(t.min, r.min, n), e.max = Te(t.max, r.max, n);
}
function HD(e, t, r, n) {
  ey(e.x, t.x, r.x, n), ey(e.y, t.y, r.y, n);
}
function GD(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const KD = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, ty = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), ry = ty("applewebkit/") && !ty("chrome/") ? Math.round : Me;
function ny(e) {
  e.min = ry(e.min), e.max = ry(e.max);
}
function YD(e) {
  ny(e.x), ny(e.y);
}
function pw(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !rh(K0(t), K0(r), 0.2);
}
const XD = hw({
  attachResizeListener: (e, t) => Mr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Md = {
  current: void 0
}, mw = hw({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Md.current) {
      const e = new XD({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Md.current = e;
    }
    return Md.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), qD = {
  pan: {
    Feature: dD
  },
  drag: {
    Feature: cD,
    ProjectionNode: mw,
    MeasureLayout: lw
  }
}, QD = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function ZD(e) {
  const t = QD.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
function ah(e, t, r = 1) {
  const [n, o] = ZD(e);
  if (!n)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const a = i.trim();
    return qx(a) ? parseFloat(a) : a;
  } else
    return Xf(o) ? ah(o, t, r + 1) : o;
}
function JD(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const i = o.get();
    if (!Xf(i))
      return;
    const a = ah(i, n);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Xf(i))
      continue;
    const a = ah(i, n);
    a && (t[o] = a, r || (r = {}), r[o] === void 0 && (r[o] = i));
  }
  return { target: t, transitionEnd: r };
}
const eO = /* @__PURE__ */ new Set([
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
]), vw = (e) => eO.has(e), tO = (e) => Object.keys(e).some(vw), oy = (e) => e === lo || e === B, iy = (e, t) => parseFloat(e.split(", ")[t]), ay = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return iy(o[1], t);
  {
    const i = n.match(/^matrix\((.+)\)$/);
    return i ? iy(i[1], e) : 0;
  }
}, rO = /* @__PURE__ */ new Set(["x", "y", "z"]), nO = ss.filter((e) => !rO.has(e));
function oO(e) {
  const t = [];
  return nO.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const vi = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: ay(4, 13),
  y: ay(5, 14)
};
vi.translateX = vi.x;
vi.translateY = vi.y;
const iO = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((u) => {
    s[u] = vi[u](n, i);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = vi[u](l, i);
  }), e;
}, aO = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(vw);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = r[l], d = Ni(c);
    const f = t[l];
    let h;
    if (fu(f)) {
      const m = f.length, y = f[0] === null ? 1 : 0;
      c = f[y], d = Ni(c);
      for (let x = y; x < m && f[x] !== null; x++)
        h ? Kp(Ni(f[x]) === h) : h = Ni(f[x]);
    } else
      h = Ni(f);
    if (d !== h)
      if (oy(d) && oy(h)) {
        const m = u.get();
        typeof m == "string" && u.set(parseFloat(m)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && h === B && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (h != null && h.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(h.transform(c)) : t[l] = d.transform(f) : (a || (i = oO(e), a = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = iO(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), ac && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function sO(e, t, r, n) {
  return tO(t) ? aO(e, t, r, n) : { target: t, transitionEnd: n };
}
const lO = (e, t, r, n) => {
  const o = JD(e, t, n);
  return t = o.target, n = o.transitionEnd, sO(e, t, r, n);
}, sh = { current: null }, gw = { current: !1 };
function uO() {
  if (gw.current = !0, !!ac)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => sh.current = e.matches;
      e.addListener(t), t();
    } else
      sh.current = !1;
}
function cO(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o], a = r[o];
    if (wt(i))
      e.addValue(o, i), vu(n) && n.add(o);
    else if (wt(a))
      e.addValue(o, mi(i, { owner: e })), vu(n) && n.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, mi(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const sy = /* @__PURE__ */ new WeakMap(), yw = Object.keys(Ha), dO = yw.length, ly = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], fO = Lp.length;
class hO {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => he.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = lc(r), this.isVariantNode = tx(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && wt(f) && (f.set(s[d], !1), vu(u) && u.add(d));
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
    this.current = t, sy.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), gw.current || uO(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : sh.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    sy.delete(this.current), this.projection && this.projection.unmount(), Vr(this.notifyUpdate), Vr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = so.has(t), o = r.on("change", (a) => {
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
    for (let l = 0; l < dO; l++) {
      const u = yw[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: h } = Ha[u];
      f && (a = f), c(r) && (!this.features[u] && d && (this.features[u] = new d(this)), h && (s = h));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: h } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && Lo(d),
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
        layoutRoot: h
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Oe();
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
    for (let n = 0; n < ly.length; n++) {
      const o = ly[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = cO(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let n = 0; n < fO; n++) {
      const o = Lp[n], i = this.props[o];
      (Ua(i) || i === !1) && (r[o] = i);
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
    return n === void 0 && r !== void 0 && (n = mi(r, { owner: this }), this.addValue(t, n)), n;
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
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = Gp(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !wt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new rm()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class bw extends hO {
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
    let a = AF(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i) {
      EF(this, n, a);
      const s = lO(this, n, a, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function pO(e) {
  return window.getComputedStyle(e);
}
class mO extends bw {
  readValueFromInstance(t, r) {
    if (so.has(r)) {
      const n = Qp(r);
      return n && n.default || 0;
    } else {
      const n = pO(t), o = (ix(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return iw(t, r);
  }
  build(t, r, n, o) {
    Bp(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return Hp(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    wt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    dx(t, r, n, o);
  }
}
class vO extends bw {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (so.has(r)) {
      const n = Qp(r);
      return n && n.default || 0;
    }
    return r = fx.has(r) ? r : Dp(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return Oe();
  }
  scrapeMotionValuesFromProps(t, r) {
    return px(t, r);
  }
  build(t, r, n, o) {
    Wp(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    hx(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = Up(t.tagName), super.mount(t);
  }
}
const gO = (e, t) => jp(e) ? new vO(t, { enableHardwareAcceleration: !1 }) : new mO(t, { enableHardwareAcceleration: !0 }), yO = {
  layout: {
    ProjectionNode: mw,
    MeasureLayout: lw
  }
}, bO = {
  ...UF,
  ...f4,
  ...qD,
  ...yO
}, fc = /* @__PURE__ */ x3((e, t) => J3(e, t, bO, gO));
function Sw() {
  const e = b.useRef(!1);
  return Fp(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function SO() {
  const e = Sw(), [t, r] = b.useState(0), n = b.useCallback(() => {
    e.current && r(t + 1);
  }, [t]);
  return [b.useCallback(() => he.postRender(n), [n]), t];
}
class xO extends b.Component {
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
function wO({ children: e, isPresent: t }) {
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
  }, [t]), b.createElement(xO, { isPresent: t, childRef: n, sizeRef: o }, b.cloneElement(e, { ref: n }));
}
const Id = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = mx(kO), l = b.useId(), u = b.useMemo(
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
  }, [r]), a === "popLayout" && (e = b.createElement(wO, { isPresent: r }, e)), b.createElement(as.Provider, { value: u }, e);
};
function kO() {
  return /* @__PURE__ */ new Map();
}
function CO(e) {
  return b.useEffect(() => () => e(), []);
}
const Dn = (e) => e.key || "";
function _O(e, t) {
  e.forEach((r) => {
    const n = Dn(r);
    t.set(n, r);
  });
}
function TO(e) {
  const t = [];
  return b.Children.forEach(e, (r) => {
    b.isValidElement(r) && t.push(r);
  }), t;
}
const hc = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = b.useContext(Np).forceRender || SO()[0], l = Sw(), u = TO(e);
  let c = u;
  const d = b.useRef(/* @__PURE__ */ new Map()).current, f = b.useRef(c), h = b.useRef(/* @__PURE__ */ new Map()).current, m = b.useRef(!0);
  if (Fp(() => {
    m.current = !1, _O(u, h), f.current = c;
  }), CO(() => {
    m.current = !0, h.clear(), d.clear();
  }), m.current)
    return b.createElement(b.Fragment, null, c.map((p) => b.createElement(Id, { key: Dn(p), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: i, mode: a }, p)));
  c = [...c];
  const y = f.current.map(Dn), x = u.map(Dn), v = y.length;
  for (let p = 0; p < v; p++) {
    const g = y[p];
    x.indexOf(g) === -1 && !d.has(g) && d.set(g, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((p, g) => {
    if (x.indexOf(g) !== -1)
      return;
    const w = h.get(g);
    if (!w)
      return;
    const T = y.indexOf(g);
    let $ = p;
    if (!$) {
      const P = () => {
        d.delete(g);
        const A = Array.from(h.keys()).filter((R) => !x.includes(R));
        if (A.forEach((R) => h.delete(R)), f.current = u.filter((R) => {
          const z = Dn(R);
          return (
            // filter out the node exiting
            z === g || // filter out the leftover children
            A.includes(z)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), n && n();
        }
      };
      $ = b.createElement(Id, { key: Dn(w), isPresent: !1, onExitComplete: P, custom: t, presenceAffectsLayout: i, mode: a }, w), d.set(g, $);
    }
    c.splice(T, 0, $);
  }), c = c.map((p) => {
    const g = p.key;
    return d.has(g) ? p : b.createElement(Id, { key: Dn(p), isPresent: !0, presenceAffectsLayout: i, mode: a }, p);
  }), b.createElement(b.Fragment, null, d.size ? c : c.map((p) => b.cloneElement(p)));
};
var PO = {
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
}, xw = b.memo((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = PO,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = b.useState(s), h = fD();
  Yf(() => {
    h || n == null || n();
  }, [h]), Yf(() => {
    f(s);
  }, [s]);
  const m = () => f(null), y = () => f(s), x = () => {
    h && o();
  };
  b.useEffect(() => {
    h && i && o();
  }, [h, i, o]), d3(x, d);
  const v = b.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), p = b.useMemo(() => u3(a), [a]);
  return /* @__PURE__ */ _.jsx(
    fc.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: m,
      onHoverEnd: y,
      custom: { position: a },
      style: p,
      children: /* @__PURE__ */ _.jsx(
        G.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: v,
          children: on(r, { id: t, onClose: x })
        }
      )
    }
  );
});
xw.displayName = "ToastComponent";
var uy = {
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
}, ds = Ce((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...u
  } = e, c = be("chakra-icon", s), d = xi("Icon", e), f = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: o,
    ...l,
    ...d
  }, h = {
    ref: t,
    focusable: i,
    className: c,
    __css: f
  }, m = n ?? uy.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ _.jsx(G.svg, { as: r, ...h, ...u });
  const y = a ?? uy.path;
  return /* @__PURE__ */ _.jsx(G.svg, { verticalAlign: "middle", viewBox: m, ...h, ...u, children: y });
});
ds.displayName = "Icon";
function EO(e) {
  return /* @__PURE__ */ _.jsx(ds, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ _.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function $O(e) {
  return /* @__PURE__ */ _.jsx(ds, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ _.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function cy(e) {
  return /* @__PURE__ */ _.jsx(ds, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ _.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var AO = ec({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), nm = Ce((e, t) => {
  const r = xi("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = Sr(e), u = be("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${AO} ${i} linear infinite`,
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
nm.displayName = "Spinner";
var [RO, om] = at({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [MO, im] = at({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), ww = {
  info: { icon: $O, colorScheme: "blue" },
  warning: { icon: cy, colorScheme: "orange" },
  success: { icon: EO, colorScheme: "green" },
  error: { icon: cy, colorScheme: "red" },
  loading: { icon: nm, colorScheme: "blue" }
};
function IO(e) {
  return ww[e].colorScheme;
}
function zO(e) {
  return ww[e].icon;
}
var kw = Ce(
  function(t, r) {
    const n = im(), { status: o } = om(), i = {
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
kw.displayName = "AlertDescription";
function Cw(e) {
  const { status: t } = om(), r = zO(t), n = im(), o = t === "loading" ? n.spinner : n.icon;
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
Cw.displayName = "AlertIcon";
var _w = Ce(
  function(t, r) {
    const n = im(), { status: o } = om();
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
_w.displayName = "AlertTitle";
var Tw = Ce(function(t, r) {
  var n;
  const { status: o = "info", addRole: i = !0, ...a } = Sr(t), s = (n = t.colorScheme) != null ? n : IO(o), l = wi("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ _.jsx(RO, { value: { status: o }, children: /* @__PURE__ */ _.jsx(MO, { value: l, children: /* @__PURE__ */ _.jsx(
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
Tw.displayName = "Alert";
function FO(e) {
  return /* @__PURE__ */ _.jsx(ds, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ _.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var am = Ce(
  function(t, r) {
    const n = xi("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = Sr(t), l = {
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
        children: o || /* @__PURE__ */ _.jsx(FO, { width: "1em", height: "1em" })
      }
    );
  }
);
am.displayName = "CloseButton";
var DO = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, ya = OO(DO);
function OO(e) {
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
      const a = LO(o, i), { position: s, id: l } = a;
      return n((u) => {
        var c, d;
        const h = s.includes("top") ? [a, ...(c = u[s]) != null ? c : []] : [...(d = u[s]) != null ? d : [], a];
        return {
          ...u,
          [s]: h
        };
      }), l;
    },
    update: (o, i) => {
      o && n((a) => {
        const s = { ...a }, { position: l, index: u } = o0(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: jO(i)
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
        const a = QS(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!o0(ya.getState(), o).position
  };
}
var dy = 0;
function LO(e, t = {}) {
  var r, n;
  dy += 1;
  const o = (r = t.id) != null ? r : dy, i = (n = t.position) != null ? n : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => ya.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var NO = (e) => {
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
    Tw,
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
        /* @__PURE__ */ _.jsx(Cw, { children: u }),
        /* @__PURE__ */ _.jsxs(G.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ _.jsx(_w, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ _.jsx(kw, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ _.jsx(
          am,
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
function jO(e = {}) {
  const { render: t, toastComponent: r = NO } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ _.jsx(r, { ...o, ...e });
}
var [BO, LB] = at({
  name: "ToastOptionsContext",
  strict: !1
}), VO = (e) => {
  const t = b.useSyncExternalStore(
    ya.subscribe,
    ya.getState,
    ya.getState
  ), {
    motionVariants: r,
    component: n = xw,
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
        style: c3(s),
        children: /* @__PURE__ */ _.jsx(hc, { initial: !1, children: l.map((u) => /* @__PURE__ */ _.jsx(
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
  return /* @__PURE__ */ _.jsx(os, { ...o, children: a });
}, WO = (e) => function({
  children: r,
  theme: n = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ _.jsxs(s3, { theme: n, ...i, children: [
    /* @__PURE__ */ _.jsx(BO, { value: o == null ? void 0 : o.defaultOptions, children: r }),
    /* @__PURE__ */ _.jsx(VO, { ...o })
  ] });
}, UO = WO(VS), HO = Object.defineProperty, GO = (e, t, r) => t in e ? HO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ae = (e, t, r) => (GO(e, typeof t != "symbol" ? t + "" : t, r), r);
function fy(e) {
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
var KO = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function hy(e, t, r) {
  let n = e + 1;
  return r && n >= t && (n = 0), n;
}
function py(e, t, r) {
  let n = e - 1;
  return r && n < 0 && (n = t), n;
}
var lh = typeof window < "u" ? b.useLayoutEffect : b.useEffect, yu = (e) => e, YO = class {
  constructor() {
    Ae(this, "descendants", /* @__PURE__ */ new Map()), Ae(this, "register", (e) => {
      if (e != null)
        return KO(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), Ae(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = fy(Array.from(this.descendants.keys()));
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
      const r = hy(e, this.count(), t);
      return this.item(r);
    }), Ae(this, "nextEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = hy(
        n,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), Ae(this, "prev", (e, t = !0) => {
      const r = py(e, this.count() - 1, t);
      return this.item(r);
    }), Ae(this, "prevEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = py(
        n,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), Ae(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const r = Array.from(this.descendants.keys()).concat(e), n = fy(r);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(n);
    });
  }
};
function XO(e, t) {
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
function xn(...e) {
  return (t) => {
    e.forEach((r) => {
      XO(r, t);
    });
  };
}
function qO(...e) {
  return b.useMemo(() => xn(...e), e);
}
function QO() {
  const e = b.useRef(new YO());
  return lh(() => () => e.current.destroy()), e.current;
}
var [ZO, Pw] = at({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function JO(e) {
  const t = Pw(), [r, n] = b.useState(-1), o = b.useRef(null);
  lh(() => () => {
    o.current && t.unregister(o.current);
  }, []), lh(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    r != a && !Number.isNaN(a) && n(a);
  });
  const i = yu(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: r,
    enabledIndex: t.enabledIndexOf(o.current),
    register: xn(i, o)
  };
}
function eL() {
  return [
    yu(ZO),
    () => yu(Pw()),
    () => QO(),
    (o) => JO(o)
  ];
}
function tL(e) {
  const {
    value: t,
    defaultValue: r,
    onChange: n,
    shouldUpdate: o = (f, h) => f !== h
  } = e, i = qn(n), a = qn(o), [s, l] = b.useState(r), u = t !== void 0, c = u ? t : s, d = qn(
    (f) => {
      const m = typeof f == "function" ? f(c) : f;
      a(c, m) && (u || l(m), i(m));
    },
    [u, i, c, a]
  );
  return [c, d];
}
var uh = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Bi = {
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
function ch(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Bi.slideRight;
    case "left":
      return Bi.slideLeft;
    case "bottom":
      return Bi.slideDown;
    case "top":
      return Bi.slideUp;
    default:
      return Bi.slideRight;
  }
}
var my = {
  enter: {
    duration: 0.2,
    ease: uh.easeOut
  },
  exit: {
    duration: 0.1,
    ease: uh.easeIn
  }
}, bu = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, rL = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : bu.enter(my.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : bu.exit(my.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, Ew = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: rL
}, nL = b.forwardRef(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ _.jsx(hc, { custom: f, children: d && /* @__PURE__ */ _.jsx(
    fc.div,
    {
      ref: r,
      className: be("chakra-fade", i),
      custom: f,
      ...Ew,
      animate: c,
      ...u
    }
  ) });
});
nL.displayName = "Fade";
var vy = {
  exit: {
    duration: 0.15,
    ease: uh.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, oL = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: i } = ch({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : bu.exit(vy.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: i } = ch({ direction: e });
    return {
      ...i,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : bu.enter(vy.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, $w = b.forwardRef(function(t, r) {
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
  } = t, h = ch({ direction: n }), m = Object.assign(
    { position: "fixed" },
    h.position,
    o
  ), y = i ? a && i : !0, x = a || i ? "enter" : "exit", v = { transitionEnd: u, transition: l, direction: n, delay: c };
  return /* @__PURE__ */ _.jsx(hc, { custom: v, children: y && /* @__PURE__ */ _.jsx(
    fc.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: be("chakra-slide", s),
      animate: x,
      exit: "exit",
      custom: v,
      variants: oL,
      style: m,
      ...d
    }
  ) });
});
$w.displayName = "Slide";
function iL(e) {
  return b.Children.toArray(e).filter(
    (t) => b.isValidElement(t)
  );
}
var [NB, aL] = at({
  strict: !1,
  name: "ButtonGroupContext"
});
function sL(e) {
  const [t, r] = b.useState(!e);
  return { ref: b.useCallback((i) => {
    i && r(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function dh(e) {
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
dh.displayName = "ButtonIcon";
function fh(e) {
  const {
    label: t,
    placement: r,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ _.jsx(nm, { color: "currentColor", width: "1em", height: "1em" }),
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
fh.displayName = "ButtonSpinner";
var ei = Ce((e, t) => {
  const r = aL(), n = xi("Button", { ...r, ...e }), {
    isDisabled: o = r == null ? void 0 : r.isDisabled,
    isLoading: i,
    isActive: a,
    children: s,
    leftIcon: l,
    rightIcon: u,
    loadingText: c,
    iconSpacing: d = "0.5rem",
    type: f,
    spinner: h,
    spinnerPlacement: m = "start",
    className: y,
    as: x,
    ...v
  } = Sr(e), p = b.useMemo(() => {
    const $ = { ...n == null ? void 0 : n._focus, zIndex: 1 };
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
      ...!!r && { _focus: $ }
    };
  }, [n, r]), { ref: g, type: w } = sL(x), T = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ _.jsxs(
    G.button,
    {
      ref: qO(t, g),
      as: x,
      type: f ?? w,
      "data-active": Q(a),
      "data-loading": Q(i),
      __css: p,
      className: be("chakra-button", y),
      ...v,
      disabled: o || i,
      children: [
        i && m === "start" && /* @__PURE__ */ _.jsx(
          fh,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: h
          }
        ),
        i ? c || /* @__PURE__ */ _.jsx(G.span, { opacity: 0, children: /* @__PURE__ */ _.jsx(gy, { ...T }) }) : /* @__PURE__ */ _.jsx(gy, { ...T }),
        i && m === "end" && /* @__PURE__ */ _.jsx(
          fh,
          {
            className: "chakra-button__spinner--end",
            label: c,
            placement: "end",
            spacing: d,
            children: h
          }
        )
      ]
    }
  );
});
ei.displayName = "Button";
function gy(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    t && /* @__PURE__ */ _.jsx(dh, { marginEnd: o, children: t }),
    n,
    r && /* @__PURE__ */ _.jsx(dh, { marginStart: o, children: r })
  ] });
}
var [jB, lL] = at({
  name: "CheckboxGroupContext",
  strict: !1
});
function uL(e) {
  const [t, r] = b.useState(e), [n, o] = b.useState(!1);
  return e !== t && (o(!0), r(e)), n;
}
function cL(e) {
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
function dL(e) {
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
function fL(e) {
  const { isIndeterminate: t, isChecked: r, ...n } = e, o = t ? dL : cL;
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
var [hL, pL] = at({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [mL, Aw] = at({
  strict: !1,
  name: "FormControlContext"
});
function vL(e) {
  const {
    id: t,
    isRequired: r,
    isInvalid: n,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = b.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, h] = b.useState(!1), [m, y] = b.useState(!1), [x, v] = b.useState(!1), p = b.useCallback(
    (P = {}, A = null) => ({
      id: d,
      ...P,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: xn(A, (R) => {
        R && y(!0);
      })
    }),
    [d]
  ), g = b.useCallback(
    (P = {}, A = null) => ({
      ...P,
      ref: A,
      "data-focus": Q(x),
      "data-disabled": Q(o),
      "data-invalid": Q(n),
      "data-readonly": Q(i),
      id: P.id !== void 0 ? P.id : u,
      htmlFor: P.htmlFor !== void 0 ? P.htmlFor : l
    }),
    [l, o, x, n, i, u]
  ), w = b.useCallback(
    (P = {}, A = null) => ({
      id: c,
      ...P,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: xn(A, (R) => {
        R && h(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), T = b.useCallback(
    (P = {}, A = null) => ({
      ...P,
      ...a,
      ref: A,
      role: "group",
      "data-focus": Q(x),
      "data-disabled": Q(o),
      "data-invalid": Q(n),
      "data-readonly": Q(i)
    }),
    [a, o, x, n, i]
  ), $ = b.useCallback(
    (P = {}, A = null) => ({
      ...P,
      ref: A,
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
    onFocus: () => v(!0),
    onBlur: () => v(!1),
    hasFeedbackText: f,
    setHasFeedbackText: h,
    hasHelpText: m,
    setHasHelpText: y,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: p,
    getErrorMessageProps: w,
    getRootProps: T,
    getLabelProps: g,
    getRequiredIndicatorProps: $
  };
}
var gL = Ce(
  function(t, r) {
    const n = wi("Form", t), o = Sr(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = vL(o), l = be("chakra-form-control", t.className);
    return /* @__PURE__ */ _.jsx(mL, { value: s, children: /* @__PURE__ */ _.jsx(hL, { value: n, children: /* @__PURE__ */ _.jsx(
      G.div,
      {
        ...i({}, r),
        className: l,
        __css: n.container
      }
    ) }) });
  }
);
gL.displayName = "FormControl";
var yL = Ce(
  function(t, r) {
    const n = Aw(), o = pL(), i = be("chakra-form__helper-text", t.className);
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
yL.displayName = "FormHelperText";
function bL(e) {
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: o, ...i } = Rw(e);
  return {
    ...i,
    disabled: t,
    readOnly: n,
    required: o,
    "aria-invalid": rd(r),
    "aria-required": rd(o),
    "aria-readonly": rd(n)
  };
}
function Rw(e) {
  var t, r, n;
  const o = Aw(), {
    id: i,
    disabled: a,
    readOnly: s,
    required: l,
    isRequired: u,
    isInvalid: c,
    isReadOnly: d,
    isDisabled: f,
    onFocus: h,
    onBlur: m,
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
    onFocus: je(o == null ? void 0 : o.onFocus, h),
    onBlur: je(o == null ? void 0 : o.onBlur, m)
  };
}
var SL = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, xL = () => typeof document < "u", yy = !1, fs = null, oo = !1, hh = !1, ph = /* @__PURE__ */ new Set();
function sm(e, t) {
  ph.forEach((r) => r(e, t));
}
var wL = typeof window < "u" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;
function kL(e) {
  return !(e.metaKey || !wL && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function by(e) {
  oo = !0, kL(e) && (fs = "keyboard", sm("keyboard", e));
}
function vo(e) {
  if (fs = "pointer", e.type === "mousedown" || e.type === "pointerdown") {
    oo = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let r = !1;
    try {
      r = t.matches(":focus-visible");
    } catch {
    }
    if (r)
      return;
    sm("pointer", e);
  }
}
function CL(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : e.detail === 0 && !e.pointerType;
}
function _L(e) {
  CL(e) && (oo = !0, fs = "virtual");
}
function TL(e) {
  e.target === window || e.target === document || (!oo && !hh && (fs = "virtual", sm("virtual", e)), oo = !1, hh = !1);
}
function PL() {
  oo = !1, hh = !0;
}
function Sy() {
  return fs !== "pointer";
}
function EL() {
  if (!xL() || yy)
    return;
  const { focus: e } = HTMLElement.prototype;
  HTMLElement.prototype.focus = function(...r) {
    oo = !0, e.apply(this, r);
  }, document.addEventListener("keydown", by, !0), document.addEventListener("keyup", by, !0), document.addEventListener("click", _L, !0), window.addEventListener("focus", TL, !0), window.addEventListener("blur", PL, !1), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", vo, !0), document.addEventListener("pointermove", vo, !0), document.addEventListener("pointerup", vo, !0)) : (document.addEventListener("mousedown", vo, !0), document.addEventListener("mousemove", vo, !0), document.addEventListener("mouseup", vo, !0)), yy = !0;
}
function $L(e) {
  EL(), e(Sy());
  const t = () => e(Sy());
  return ph.add(t), () => {
    ph.delete(t);
  };
}
function AL(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function RL(e = {}) {
  const t = Rw(e), {
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
    onChange: h,
    isIndeterminate: m,
    name: y,
    value: x,
    tabIndex: v = void 0,
    "aria-label": p,
    "aria-labelledby": g,
    "aria-invalid": w,
    ...T
  } = e, $ = AL(T, [
    "isDisabled",
    "isReadOnly",
    "isRequired",
    "isInvalid",
    "id",
    "onBlur",
    "onFocus",
    "aria-describedby"
  ]), P = qn(h), A = qn(s), R = qn(l), [z, H] = b.useState(!1), [ce, me] = b.useState(!1), [Z, ue] = b.useState(!1), [$e, Ie] = b.useState(!1);
  b.useEffect(() => $L(H), []);
  const I = b.useRef(null), [N, V] = b.useState(!0), [j, J] = b.useState(!!c), W = d !== void 0, te = W ? d : j, kt = b.useCallback(
    (U) => {
      if (n || r) {
        U.preventDefault();
        return;
      }
      W || J(te ? U.target.checked : m ? !0 : U.target.checked), P == null || P(U);
    },
    [
      n,
      r,
      te,
      W,
      m,
      P
    ]
  );
  Gn(() => {
    I.current && (I.current.indeterminate = !!m);
  }, [m]), Yf(() => {
    r && me(!1);
  }, [r, me]), Gn(() => {
    const U = I.current;
    if (!(U != null && U.form))
      return;
    const pt = () => {
      J(!!c);
    };
    return U.form.addEventListener("reset", pt), () => {
      var Lt;
      return (Lt = U.form) == null ? void 0 : Lt.removeEventListener("reset", pt);
    };
  }, []);
  const Se = r && !f, ze = b.useCallback(
    (U) => {
      U.key === " " && Ie(!0);
    },
    [Ie]
  ), et = b.useCallback(
    (U) => {
      U.key === " " && Ie(!1);
    },
    [Ie]
  );
  Gn(() => {
    if (!I.current)
      return;
    I.current.checked !== te && J(I.current.checked);
  }, [I.current]);
  const Dt = b.useCallback(
    (U = {}, pt = null) => {
      const Lt = (co) => {
        ce && co.preventDefault(), Ie(!0);
      };
      return {
        ...U,
        ref: pt,
        "data-active": Q($e),
        "data-hover": Q(Z),
        "data-checked": Q(te),
        "data-focus": Q(ce),
        "data-focus-visible": Q(ce && z),
        "data-indeterminate": Q(m),
        "data-disabled": Q(r),
        "data-invalid": Q(i),
        "data-readonly": Q(n),
        "aria-hidden": !0,
        onMouseDown: je(U.onMouseDown, Lt),
        onMouseUp: je(U.onMouseUp, () => Ie(!1)),
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
      z,
      Z,
      m,
      i,
      n
    ]
  ), Ct = b.useCallback(
    (U = {}, pt = null) => ({
      ...U,
      ref: pt,
      "data-active": Q($e),
      "data-hover": Q(Z),
      "data-checked": Q(te),
      "data-focus": Q(ce),
      "data-focus-visible": Q(ce && z),
      "data-indeterminate": Q(m),
      "data-disabled": Q(r),
      "data-invalid": Q(i),
      "data-readonly": Q(n)
    }),
    [
      $e,
      te,
      r,
      ce,
      z,
      Z,
      m,
      i,
      n
    ]
  ), Ot = b.useCallback(
    (U = {}, pt = null) => ({
      ...$,
      ...U,
      ref: xn(pt, (Lt) => {
        Lt && V(Lt.tagName === "LABEL");
      }),
      onClick: je(U.onClick, () => {
        var Lt;
        N || ((Lt = I.current) == null || Lt.click(), requestAnimationFrame(() => {
          var co;
          (co = I.current) == null || co.focus({ preventScroll: !0 });
        }));
      }),
      "data-disabled": Q(r),
      "data-checked": Q(te),
      "data-invalid": Q(i)
    }),
    [$, r, te, i, N]
  ), Tn = b.useCallback(
    (U = {}, pt = null) => ({
      ...U,
      ref: xn(I, pt),
      type: "checkbox",
      name: y,
      value: x,
      id: a,
      tabIndex: v,
      onChange: je(U.onChange, kt),
      onBlur: je(
        U.onBlur,
        A,
        () => me(!1)
      ),
      onFocus: je(
        U.onFocus,
        R,
        () => me(!0)
      ),
      onKeyDown: je(U.onKeyDown, ze),
      onKeyUp: je(U.onKeyUp, et),
      required: o,
      checked: te,
      disabled: Se,
      readOnly: n,
      "aria-label": p,
      "aria-labelledby": g,
      "aria-invalid": w ? !!w : i,
      "aria-describedby": u,
      "aria-disabled": r,
      style: SL
    }),
    [
      y,
      x,
      a,
      kt,
      A,
      R,
      ze,
      et,
      o,
      te,
      Se,
      n,
      p,
      g,
      w,
      i,
      u,
      r,
      v
    ]
  ), uo = b.useCallback(
    (U = {}, pt = null) => ({
      ...U,
      ref: pt,
      onMouseDown: je(U.onMouseDown, ML),
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
      isIndeterminate: m,
      isDisabled: r,
      isReadOnly: n,
      isRequired: o
    },
    getRootProps: Ot,
    getCheckboxProps: Dt,
    getIndicatorProps: Ct,
    getInputProps: Tn,
    getLabelProps: uo,
    htmlProps: $
  };
}
function ML(e) {
  e.preventDefault(), e.stopPropagation();
}
var IL = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "top",
  userSelect: "none",
  flexShrink: 0
}, zL = {
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "top",
  position: "relative"
}, FL = ec({
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
}), DL = ec({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}), OL = ec({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
}), mh = Ce(function(t, r) {
  const n = lL(), o = { ...n, ...t }, i = wi("Checkbox", o), a = Sr(t), {
    spacing: s = "0.5rem",
    className: l,
    children: u,
    iconColor: c,
    iconSize: d,
    icon: f = /* @__PURE__ */ _.jsx(fL, {}),
    isChecked: h,
    isDisabled: m = n == null ? void 0 : n.isDisabled,
    onChange: y,
    inputProps: x,
    ...v
  } = a;
  let p = h;
  n != null && n.value && a.value && (p = n.value.includes(a.value));
  let g = y;
  n != null && n.onChange && a.value && (g = UP(n.onChange, y));
  const {
    state: w,
    getInputProps: T,
    getCheckboxProps: $,
    getLabelProps: P,
    getRootProps: A
  } = RL({
    ...v,
    isDisabled: m,
    isChecked: p,
    onChange: g
  }), R = uL(w.isChecked), z = b.useMemo(
    () => ({
      animation: R ? w.isIndeterminate ? `${DL} 20ms linear, ${OL} 200ms linear` : `${FL} 200ms linear` : void 0,
      fontSize: d,
      color: c,
      ...i.icon
    }),
    [c, d, R, w.isIndeterminate, i.icon]
  ), H = b.cloneElement(f, {
    __css: z,
    isIndeterminate: w.isIndeterminate,
    isChecked: w.isChecked
  });
  return /* @__PURE__ */ _.jsxs(
    G.label,
    {
      __css: { ...zL, ...i.container },
      className: be("chakra-checkbox", l),
      ...A(),
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
            __css: { ...IL, ...i.control },
            className: "chakra-checkbox__control",
            ...$(),
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
mh.displayName = "Checkbox";
function LL(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Mw = { exports: {} }, NL = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", jL = NL, BL = jL;
function Iw() {
}
function zw() {
}
zw.resetWarningCache = Iw;
var VL = function() {
  function e(n, o, i, a, s, l) {
    if (l !== BL) {
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
    checkPropTypes: zw,
    resetWarningCache: Iw
  };
  return r.PropTypes = r, r;
};
Mw.exports = VL();
var WL = Mw.exports;
const Rn = /* @__PURE__ */ Qa(WL);
var vh = "data-focus-lock", Fw = "data-focus-lock-disabled", UL = "data-no-focus-lock", HL = "data-autofocus-inside", GL = "data-no-autofocus";
function KL(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function YL(e, t) {
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
function Dw(e, t) {
  return YL(t || null, function(r) {
    return e.forEach(function(n) {
      return KL(n, r);
    });
  });
}
var zd = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, pr = function() {
  return pr = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, pr.apply(this, arguments);
};
function Ow(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function XL(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Lw(e) {
  return e;
}
function Nw(e, t) {
  t === void 0 && (t = Lw);
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
function lm(e, t) {
  return t === void 0 && (t = Lw), Nw(e, t);
}
function jw(e) {
  e === void 0 && (e = {});
  var t = Nw(null);
  return t.options = pr({ async: !0, ssr: !1 }, e), t;
}
var Bw = function(e) {
  var t = e.sideCar, r = Ow(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return b.createElement(n, pr({}, r));
};
Bw.isSideCarExport = !0;
function qL(e, t) {
  return e.useMedium(t), Bw;
}
var Vw = lm({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), Ww = lm(), QL = lm(), ZL = jw({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), JL = [], um = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o = b.useState(), i = o[0], a = o[1], s = b.useRef(), l = b.useRef(!1), u = b.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, h = t.persistentFocus, m = t.crossFrame, y = t.autoFocus;
  t.allowTextSelection;
  var x = t.group, v = t.className, p = t.whiteList, g = t.hasPositiveIndices, w = t.shards, T = w === void 0 ? JL : w, $ = t.as, P = $ === void 0 ? "div" : $, A = t.lockProps, R = A === void 0 ? {} : A, z = t.sideCar, H = t.returnFocus, ce = t.focusOptions, me = t.onActivation, Z = t.onDeactivation, ue = b.useState({}), $e = ue[0], Ie = b.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && me && me(s.current), l.current = !0;
  }, [me]), I = b.useCallback(function() {
    l.current = !1, Z && Z(s.current);
  }, [Z]);
  b.useEffect(function() {
    d || (u.current = null);
  }, []);
  var N = b.useCallback(function(ze) {
    var et = u.current;
    if (et && et.focus) {
      var Dt = typeof H == "function" ? H(et) : H;
      if (Dt) {
        var Ct = typeof Dt == "object" ? Dt : void 0;
        u.current = null, ze ? Promise.resolve().then(function() {
          return et.focus(Ct);
        }) : et.focus(Ct);
      }
    }
  }, [H]), V = b.useCallback(function(ze) {
    l.current && Vw.useMedium(ze);
  }, []), j = Ww.useMedium, J = b.useCallback(function(ze) {
    s.current !== ze && (s.current = ze, a(ze));
  }, []), W = no((n = {}, n[Fw] = d && "disabled", n[vh] = x, n), R), te = f !== !0, kt = te && f !== "tail", Se = Dw([r, J]);
  return /* @__PURE__ */ b.createElement(b.Fragment, null, te && [
    // nearest focus guard
    /* @__PURE__ */ b.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: zd
    }),
    // first tabbed element guard
    g ? /* @__PURE__ */ b.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: zd
    }) : null
  ], !d && /* @__PURE__ */ b.createElement(z, {
    id: $e,
    sideCar: ZL,
    observed: i,
    disabled: d,
    persistentFocus: h,
    crossFrame: m,
    autoFocus: y,
    whiteList: p,
    shards: T,
    onActivation: Ie,
    onDeactivation: I,
    returnFocus: N,
    focusOptions: ce
  }), /* @__PURE__ */ b.createElement(P, no({
    ref: Se
  }, W, {
    className: v,
    onBlur: j,
    onFocus: V
  }), c), kt && /* @__PURE__ */ b.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: zd
  }));
});
um.propTypes = {};
um.defaultProps = {
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
const Uw = um;
function gh(e, t) {
  return gh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, gh(e, t);
}
function eN(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, gh(e, t);
}
function Ka(e) {
  "@babel/helpers - typeof";
  return Ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ka(e);
}
function tN(e, t) {
  if (Ka(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ka(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rN(e) {
  var t = tN(e, "string");
  return Ka(t) === "symbol" ? t : String(t);
}
function nN(e, t, r) {
  return t = rN(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function oN(e, t) {
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
      eN(c, u);
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
        var h = i.indexOf(this);
        i.splice(h, 1), s();
      }, d.render = function() {
        return /* @__PURE__ */ Qn.createElement(o, this.props);
      }, c;
    }(b.PureComponent);
    return nN(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var xr = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, Su = function(e) {
  return Array.isArray(e) ? e : [e];
}, Hw = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, iN = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Gw = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, Kw = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, aN = function(e, t) {
  return !e || Kw(e) || !iN(e) && t(Gw(e));
}, Yw = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = aN(t, Yw.bind(void 0, e));
  return e.set(t, n), n;
}, sN = function(e, t) {
  return e && !Kw(e) ? cN(e) ? t(Gw(e)) : !1 : !0;
}, Xw = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = sN(t, Xw.bind(void 0, e));
  return e.set(t, n), n;
}, qw = function(e) {
  return e.dataset;
}, lN = function(e) {
  return e.tagName === "BUTTON";
}, Qw = function(e) {
  return e.tagName === "INPUT";
}, Zw = function(e) {
  return Qw(e) && e.type === "radio";
}, uN = function(e) {
  return !((Qw(e) || lN(e)) && (e.type === "hidden" || e.disabled));
}, cN = function(e) {
  var t = e.getAttribute(GL);
  return ![!0, "true", ""].includes(t);
}, cm = function(e) {
  var t;
  return !!(e && (!((t = qw(e)) === null || t === void 0) && t.focusGuard));
}, xu = function(e) {
  return !cm(e);
}, dN = function(e) {
  return !!e;
}, fN = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, Jw = function(e, t, r) {
  return xr(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(fN);
}, hN = [
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
], dm = hN.join(","), pN = "".concat(dm, ", [data-focus-guard]"), ek = function(e, t) {
  return xr((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? pN : dm) ? [n] : [], ek(n));
  }, []);
}, mN = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? pc([e.contentDocument.body], t) : [e];
}, pc = function(e, t) {
  return e.reduce(function(r, n) {
    var o, i = ek(n, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return mN(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      n.parentNode ? xr(n.parentNode.querySelectorAll(dm)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, vN = function(e) {
  var t = e.querySelectorAll("[".concat(HL, "]"));
  return xr(t).map(function(r) {
    return pc([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, fm = function(e, t) {
  return xr(e).filter(function(r) {
    return Yw(t, r);
  }).filter(function(r) {
    return uN(r);
  });
}, xy = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), xr(e).filter(function(r) {
    return Xw(t, r);
  });
}, yh = function(e, t, r) {
  return Jw(fm(pc(e, r), t), !0, r);
}, wy = function(e, t) {
  return Jw(fm(pc(e), t), !1);
}, gN = function(e, t) {
  return fm(vN(e), t);
}, ti = function(e, t) {
  return e.shadowRoot ? ti(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : xr(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? ti(o, t) : !1;
    }
    return ti(r, t);
  });
}, yN = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var i = e[n].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, tk = function(e) {
  return e.parentNode ? tk(e.parentNode) : e;
}, hm = function(e) {
  var t = Su(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(vh);
    return r.push.apply(r, o ? yN(xr(tk(n).querySelectorAll("[".concat(vh, '="').concat(o, '"]:not([').concat(Fw, '="disabled"])')))) : [n]), r;
  }, []);
}, bN = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Ya = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Ya(t.shadowRoot) : t instanceof HTMLIFrameElement && bN(function() {
      return t.contentWindow.document;
    }) ? Ya(t.contentWindow.document) : t;
  }
}, SN = function(e, t) {
  return e === t;
}, xN = function(e, t) {
  return !!xr(e.querySelectorAll("iframe")).some(function(r) {
    return SN(r, t);
  });
}, rk = function(e, t) {
  return t === void 0 && (t = Ya(Hw(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : hm(e).some(function(r) {
    return ti(r, t) || xN(r, t);
  });
}, wN = function(e) {
  e === void 0 && (e = document);
  var t = Ya(e);
  return t ? xr(e.querySelectorAll("[".concat(UL, "]"))).some(function(r) {
    return ti(r, t);
  }) : !1;
}, kN = function(e, t) {
  return t.filter(Zw).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, pm = function(e, t) {
  return Zw(e) && e.name ? kN(e, t) : e;
}, CN = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(pm(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, ky = function(e) {
  return e[0] && e.length > 1 ? pm(e[0], e) : e[0];
}, Cy = function(e, t) {
  return e.length > 1 ? e.indexOf(pm(e[t], e)) : t;
}, nk = "NEW_FOCUS", _N = function(e, t, r, n) {
  var o = e.length, i = e[0], a = e[o - 1], s = cm(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, u = n ? t.indexOf(n) : l, c = n ? e.indexOf(n) : -1, d = l - u, f = t.indexOf(i), h = t.indexOf(a), m = CN(t), y = r !== void 0 ? m.indexOf(r) : -1, x = y - (n ? m.indexOf(n) : l), v = Cy(e, 0), p = Cy(e, o - 1);
    if (l === -1 || c === -1)
      return nk;
    if (!d && c >= 0)
      return c;
    if (l <= f && s && Math.abs(d) > 1)
      return p;
    if (l >= h && s && Math.abs(d) > 1)
      return v;
    if (d && Math.abs(x) > 1)
      return c;
    if (l <= f)
      return p;
    if (l > h)
      return v;
    if (d)
      return Math.abs(d) > 1 ? c : (o + c + d) % o;
  }
}, TN = function(e) {
  return function(t) {
    var r, n = (r = qw(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, PN = function(e, t, r) {
  var n = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = xy(n.filter(TN(r)));
  return o && o.length ? ky(o) : ky(xy(t));
}, bh = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && bh(e.parentNode.host || e.parentNode, t), t;
}, Fd = function(e, t) {
  for (var r = bh(e), n = bh(t), o = 0; o < r.length; o += 1) {
    var i = r[o];
    if (n.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, ok = function(e, t, r) {
  var n = Su(e), o = Su(t), i = n[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = Fd(a || s, s) || a, r.filter(Boolean).forEach(function(l) {
      var u = Fd(i, l);
      u && (!a || ti(u, a) ? a = u : a = Fd(u, a));
    });
  }), a;
}, EN = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(gN(n, t));
  }, []);
}, $N = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(dN);
}, AN = function(e, t) {
  var r = Ya(Su(e).length > 0 ? document : Hw(e).ownerDocument), n = hm(e).filter(xu), o = ok(r || e, e, n), i = /* @__PURE__ */ new Map(), a = wy(n, i), s = yh(n, i).filter(function(h) {
    var m = h.node;
    return xu(m);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = wy([o], i).map(function(h) {
      var m = h.node;
      return m;
    }), u = $N(l, s), c = u.map(function(h) {
      var m = h.node;
      return m;
    }), d = _N(c, l, r, t);
    if (d === nk) {
      var f = PN(a, c, EN(n, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, RN = function(e) {
  var t = hm(e).filter(xu), r = ok(e, e, t), n = /* @__PURE__ */ new Map(), o = yh([r], n, !0), i = yh(t, n).filter(function(a) {
    var s = a.node;
    return xu(s);
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
      guard: cm(s)
    };
  });
}, MN = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, Dd = 0, Od = !1, ik = function(e, t, r) {
  r === void 0 && (r = {});
  var n = AN(e, t);
  if (!Od && n) {
    if (Dd > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Od = !0, setTimeout(function() {
        Od = !1;
      }, 1);
      return;
    }
    Dd++, MN(n.node, r.focusOptions), Dd--;
  }
};
function mm(e) {
  setTimeout(e, 1);
}
var IN = function() {
  return document && document.activeElement === document.body;
}, zN = function() {
  return IN() || wN();
}, ri = null, Vo = null, ni = null, Xa = !1, FN = function() {
  return !0;
}, DN = function(t) {
  return (ri.whiteList || FN)(t);
}, ON = function(t, r) {
  ni = {
    observerNode: t,
    portaledElement: r
  };
}, LN = function(t) {
  return ni && ni.portaledElement === t;
};
function _y(e, t, r, n) {
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
var NN = function(t) {
  return t && "current" in t ? t.current : t;
}, jN = function(t) {
  return t ? !!Xa : Xa === "meanwhile";
}, BN = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, VN = function(t, r) {
  return r.some(function(n) {
    return BN(t, n, n);
  });
}, wu = function() {
  var t = !1;
  if (ri) {
    var r = ri, n = r.observed, o = r.persistentFocus, i = r.autoFocus, a = r.shards, s = r.crossFrame, l = r.focusOptions, u = n || ni && ni.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(NN).filter(Boolean));
      if ((!c || DN(c)) && (o || jN(s) || !zN() || !Vo && i) && (u && !// active element is "inside" working area
      (rk(d) || // check for shadow-dom contained elements
      c && VN(c, d) || LN(c)) && (document && !Vo && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = ik(d, Vo, {
        focusOptions: l
      }), ni = {})), Xa = !1, Vo = document && document.activeElement), document) {
        var f = document && document.activeElement, h = RN(d), m = h.map(function(y) {
          var x = y.node;
          return x;
        }).indexOf(f);
        m > -1 && (h.filter(function(y) {
          var x = y.guard, v = y.node;
          return x && v.dataset.focusAutoGuard;
        }).forEach(function(y) {
          var x = y.node;
          return x.removeAttribute("tabIndex");
        }), _y(m, h.length, 1, h), _y(m, -1, -1, h));
      }
    }
  }
  return t;
}, ak = function(t) {
  wu() && t && (t.stopPropagation(), t.preventDefault());
}, vm = function() {
  return mm(wu);
}, WN = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || ON(n, r);
}, UN = function() {
  return null;
}, sk = function() {
  Xa = "just", mm(function() {
    Xa = "meanwhile";
  });
}, HN = function() {
  document.addEventListener("focusin", ak), document.addEventListener("focusout", vm), window.addEventListener("blur", sk);
}, GN = function() {
  document.removeEventListener("focusin", ak), document.removeEventListener("focusout", vm), window.removeEventListener("blur", sk);
};
function KN(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function YN(e) {
  var t = e.slice(-1)[0];
  t && !ri && HN();
  var r = ri, n = r && t && t.id === r.id;
  ri = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === r.id;
  }).length || r.returnFocus(!t)), t ? (Vo = null, (!n || r.observed !== t.observed) && t.onActivation(), wu(), mm(wu)) : (GN(), Vo = null);
}
Vw.assignSyncMedium(WN);
Ww.assignMedium(vm);
QL.assignMedium(function(e) {
  return e({
    moveFocusInside: ik,
    focusInside: rk
  });
});
const XN = oN(KN, YN)(UN);
var lk = /* @__PURE__ */ b.forwardRef(function(t, r) {
  return /* @__PURE__ */ b.createElement(Uw, no({
    sideCar: XN,
    ref: r
  }, t));
}), uk = Uw.propTypes || {};
uk.sideCar;
LL(uk, ["sideCar"]);
lk.propTypes = {};
const Ty = lk;
function qN(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function QN(e) {
  var t;
  if (!qN(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
var ZN = (e) => e.hasAttribute("tabindex");
function JN(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function ck(e) {
  return e.parentElement && ck(e.parentElement) ? !0 : e.hidden;
}
function ej(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function tj(e) {
  if (!QN(e) || ck(e) || JN(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : ej(e) ? !0 : ZN(e);
}
var rj = [
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
], nj = rj.join(), oj = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function ij(e) {
  const t = Array.from(
    e.querySelectorAll(nj)
  );
  return t.unshift(e), t.filter((r) => tj(r) && oj(r));
}
var Py, aj = (Py = Ty.default) != null ? Py : Ty, dk = (e) => {
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
    t != null && t.current ? t.current.focus() : n != null && n.current && ij(n.current).length === 0 && requestAnimationFrame(() => {
      var m;
      (m = n.current) == null || m.focus();
    });
  }, [t, n]), d = b.useCallback(() => {
    var h;
    (h = r == null ? void 0 : r.current) == null || h.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ _.jsx(
    aj,
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
dk.displayName = "FocusLock";
var gm = Ce(function(t, r) {
  const { htmlSize: n, ...o } = t, i = wi("Input", o), a = Sr(o), s = bL(a), l = be("chakra-input", t.className);
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
gm.displayName = "Input";
gm.id = "Input";
var fk = Ce(function(t, r) {
  const n = xi("Link", t), { className: o, isExternal: i, ...a } = Sr(t);
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
fk.displayName = "Link";
function sj(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : Yt(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
var qa = Ce(function(t, r) {
  const n = xi("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = Sr(t), u = Gz({
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
qa.displayName = "Text";
var hk = (e) => /* @__PURE__ */ _.jsx(
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
hk.displayName = "StackItem";
function lj(e) {
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
    "&": sj(
      r,
      (o) => n[o]
    )
  };
}
var mc = Ce((e, t) => {
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
  } = e, h = r ? "row" : n ?? "column", m = b.useMemo(
    () => lj({ spacing: a, direction: h }),
    [a, h]
  ), y = !!u, x = !d && !y, v = b.useMemo(() => {
    const g = iL(l);
    return x ? g : g.map((w, T) => {
      const $ = typeof w.key < "u" ? w.key : T, P = T + 1 === g.length, R = d ? /* @__PURE__ */ _.jsx(hk, { children: w }, $) : w;
      if (!y)
        return R;
      const z = b.cloneElement(
        u,
        {
          __css: m
        }
      ), H = P ? null : z;
      return /* @__PURE__ */ _.jsxs(b.Fragment, { children: [
        R,
        H
      ] }, $);
    });
  }, [
    u,
    m,
    y,
    x,
    d,
    l
  ]), p = be("chakra-stack", c);
  return /* @__PURE__ */ _.jsx(
    G.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: i,
      flexDirection: h,
      flexWrap: s,
      gap: y ? void 0 : a,
      className: p,
      ...f,
      children: v
    }
  );
});
mc.displayName = "Stack";
var oi = Ce((e, t) => /* @__PURE__ */ _.jsx(mc, { align: "center", ...e, direction: "row", ref: t }));
oi.displayName = "HStack";
var ym = G("div");
ym.displayName = "Box";
var pk = Ce(function(t, r) {
  const { size: n, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ _.jsx(
    ym,
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
pk.displayName = "Square";
var uj = Ce(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ _.jsx(pk, { size: n, ref: r, borderRadius: "9999px", ...o });
});
uj.displayName = "Circle";
var cj = Object.defineProperty, dj = (e, t, r) => t in e ? cj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, fj = (e, t, r) => (dj(e, typeof t != "symbol" ? t + "" : t, r), r), hj = class {
  constructor() {
    fj(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, Sh = new hj();
function mk(e, t) {
  const [r, n] = b.useState(0);
  return b.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = Sh.add(o);
        n(i);
      }
      return () => {
        Sh.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var pj = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, go = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new WeakMap(), Js = {}, Ld = 0, vk = function(e) {
  return e && (e.host || vk(e.parentNode));
}, mj = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = vk(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, vj = function(e, t, r, n) {
  var o = mj(t, Array.isArray(e) ? e : [e]);
  Js[r] || (Js[r] = /* @__PURE__ */ new WeakMap());
  var i = Js[r], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var h = f.getAttribute(n), m = h !== null && h !== "false", y = (go.get(f) || 0) + 1, x = (i.get(f) || 0) + 1;
        go.set(f, y), i.set(f, x), a.push(f), y === 1 && m && Zs.set(f, !0), x === 1 && f.setAttribute(r, "true"), m || f.setAttribute(n, "true");
      }
    });
  };
  return c(t), s.clear(), Ld++, function() {
    a.forEach(function(d) {
      var f = go.get(d) - 1, h = i.get(d) - 1;
      go.set(d, f), i.set(d, h), f || (Zs.has(d) || d.removeAttribute(n), Zs.delete(d)), h || d.removeAttribute(r);
    }), Ld--, Ld || (go = /* @__PURE__ */ new WeakMap(), go = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new WeakMap(), Js = {});
  };
}, gj = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || pj(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), vj(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function yj(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = b.useRef(null), c = b.useRef(null), [d, f, h] = Sj(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  bj(u, t && a);
  const m = mk(u, t), y = b.useRef(null), x = b.useCallback((R) => {
    y.current = R.target;
  }, []), v = b.useCallback(
    (R) => {
      R.key === "Escape" && (R.stopPropagation(), i && (r == null || r()), l == null || l());
    },
    [i, r, l]
  ), [p, g] = b.useState(!1), [w, T] = b.useState(!1), $ = b.useCallback(
    (R = {}, z = null) => ({
      role: "dialog",
      ...R,
      ref: xn(z, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": p ? f : void 0,
      "aria-describedby": w ? h : void 0,
      onClick: je(
        R.onClick,
        (H) => H.stopPropagation()
      )
    }),
    [h, w, d, f, p]
  ), P = b.useCallback(
    (R) => {
      R.stopPropagation(), y.current === R.target && Sh.isTopModal(u.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), A = b.useCallback(
    (R = {}, z = null) => ({
      ...R,
      ref: xn(z, c),
      onClick: je(R.onClick, P),
      onKeyDown: je(R.onKeyDown, v),
      onMouseDown: je(R.onMouseDown, x)
    }),
    [v, x, P]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: h,
    setBodyMounted: T,
    setHeaderMounted: g,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: $,
    getDialogContainerProps: A,
    index: m
  };
}
function bj(e, t) {
  const r = e.current;
  b.useEffect(() => {
    if (!(!e.current || !t))
      return gj(e.current);
  }, [t, e, r]);
}
function Sj(e, ...t) {
  const r = b.useId(), n = e || r;
  return b.useMemo(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [xj, hs] = at({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [wj, ki] = at({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), gk = (e) => {
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
    lockFocusAcrossFrames: h,
    onCloseComplete: m
  } = t, y = wi("Modal", t), v = {
    ...yj(t),
    autoFocus: o,
    trapFocus: i,
    initialFocusRef: a,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: u,
    allowPinchZoom: c,
    preserveScrollBarGap: d,
    motionPreset: f,
    lockFocusAcrossFrames: h
  };
  return /* @__PURE__ */ _.jsx(wj, { value: v, children: /* @__PURE__ */ _.jsx(xj, { value: y, children: /* @__PURE__ */ _.jsx(hc, { onExitComplete: m, children: v.isOpen && /* @__PURE__ */ _.jsx(os, { ...r, children: n }) }) }) });
};
gk.displayName = "Modal";
var Al = "right-scroll-bar-position", Rl = "width-before-scroll-bar", kj = "with-scroll-bars-hidden", Cj = "--removed-body-scroll-bar-size", yk = jw(), Nd = function() {
}, vc = b.forwardRef(function(e, t) {
  var r = b.useRef(null), n = b.useState({
    onScrollCapture: Nd,
    onWheelCapture: Nd,
    onTouchMoveCapture: Nd
  }), o = n[0], i = n[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, h = e.noIsolation, m = e.inert, y = e.allowPinchZoom, x = e.as, v = x === void 0 ? "div" : x, p = e.gapMode, g = Ow(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = f, T = Dw([r, t]), $ = pr(pr({}, g), o);
  return b.createElement(
    b.Fragment,
    null,
    c && b.createElement(w, { sideCar: yk, removeScrollBar: u, shards: d, noIsolation: h, inert: m, setCallbacks: i, allowPinchZoom: !!y, lockRef: r, gapMode: p }),
    a ? b.cloneElement(b.Children.only(s), pr(pr({}, $), { ref: T })) : b.createElement(v, pr({}, $, { className: l, ref: T }), s)
  );
});
vc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
vc.classNames = {
  fullWidth: Rl,
  zeroRight: Al
};
var Ey, _j = function() {
  if (Ey)
    return Ey;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Tj() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = _j();
  return t && e.setAttribute("nonce", t), e;
}
function Pj(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ej(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var $j = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Tj()) && (Pj(t, r), Ej(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Aj = function() {
  var e = $j();
  return function(t, r) {
    b.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, bk = function() {
  var e = Aj(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, Rj = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, jd = function(e) {
  return parseInt(e || "", 10) || 0;
}, Mj = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [jd(r), jd(n), jd(o)];
}, Ij = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Rj;
  var t = Mj(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, zj = bk(), Fj = function(e, t, r, n) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(kj, ` {
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
  
  .`).concat(Al, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Rl, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Al, " .").concat(Al, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Rl, " .").concat(Rl, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(Cj, ": ").concat(s, `px;
  }
`);
}, Dj = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, i = b.useMemo(function() {
    return Ij(o);
  }, [o]);
  return b.createElement(zj, { styles: Fj(i, !t, o, r ? "" : "!important") });
}, xh = !1;
if (typeof window < "u")
  try {
    var el = Object.defineProperty({}, "passive", {
      get: function() {
        return xh = !0, !0;
      }
    });
    window.addEventListener("test", el, el), window.removeEventListener("test", el, el);
  } catch {
    xh = !1;
  }
var yo = xh ? { passive: !1 } : !1, Oj = function(e) {
  return e.tagName === "TEXTAREA";
}, Sk = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Oj(e) && r[t] === "visible")
  );
}, Lj = function(e) {
  return Sk(e, "overflowY");
}, Nj = function(e) {
  return Sk(e, "overflowX");
}, $y = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = xk(e, n);
    if (o) {
      var i = wk(e, n), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, jj = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, Bj = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, xk = function(e, t) {
  return e === "v" ? Lj(t) : Nj(t);
}, wk = function(e, t) {
  return e === "v" ? jj(t) : Bj(t);
}, Vj = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Wj = function(e, t, r, n, o) {
  var i = Vj(e, window.getComputedStyle(t).direction), a = i * n, s = r.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var h = wk(e, s), m = h[0], y = h[1], x = h[2], v = y - x - i * m;
    (m || v) && xk(e, s) && (d += v, f += m), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, tl = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ay = function(e) {
  return [e.deltaX, e.deltaY];
}, Ry = function(e) {
  return e && "current" in e ? e.current : e;
}, Uj = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Hj = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Gj = 0, bo = [];
function Kj(e) {
  var t = b.useRef([]), r = b.useRef([0, 0]), n = b.useRef(), o = b.useState(Gj++)[0], i = b.useState(bk)[0], a = b.useRef(e);
  b.useEffect(function() {
    a.current = e;
  }, [e]), b.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = XL([e.lockRef.current], (e.shards || []).map(Ry), !0).filter(Boolean);
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
    var v = tl(y), p = r.current, g = "deltaX" in y ? y.deltaX : p[0] - v[0], w = "deltaY" in y ? y.deltaY : p[1] - v[1], T, $ = y.target, P = Math.abs(g) > Math.abs(w) ? "h" : "v";
    if ("touches" in y && P === "h" && $.type === "range")
      return !1;
    var A = $y(P, $);
    if (!A)
      return !0;
    if (A ? T = P : (T = P === "v" ? "h" : "v", A = $y(P, $)), !A)
      return !1;
    if (!n.current && "changedTouches" in y && (g || w) && (n.current = T), !T)
      return !0;
    var R = n.current || T;
    return Wj(R, x, y, R === "h" ? g : w, !0);
  }, []), l = b.useCallback(function(y) {
    var x = y;
    if (!(!bo.length || bo[bo.length - 1] !== i)) {
      var v = "deltaY" in x ? Ay(x) : tl(x), p = t.current.filter(function(T) {
        return T.name === x.type && (T.target === x.target || x.target === T.shadowParent) && Uj(T.delta, v);
      })[0];
      if (p && p.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!p) {
        var g = (a.current.shards || []).map(Ry).filter(Boolean).filter(function(T) {
          return T.contains(x.target);
        }), w = g.length > 0 ? s(x, g[0]) : !a.current.noIsolation;
        w && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = b.useCallback(function(y, x, v, p) {
    var g = { name: y, delta: x, target: v, should: p, shadowParent: Yj(v) };
    t.current.push(g), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== g;
      });
    }, 1);
  }, []), c = b.useCallback(function(y) {
    r.current = tl(y), n.current = void 0;
  }, []), d = b.useCallback(function(y) {
    u(y.type, Ay(y), y.target, s(y, e.lockRef.current));
  }, []), f = b.useCallback(function(y) {
    u(y.type, tl(y), y.target, s(y, e.lockRef.current));
  }, []);
  b.useEffect(function() {
    return bo.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, yo), document.addEventListener("touchmove", l, yo), document.addEventListener("touchstart", c, yo), function() {
      bo = bo.filter(function(y) {
        return y !== i;
      }), document.removeEventListener("wheel", l, yo), document.removeEventListener("touchmove", l, yo), document.removeEventListener("touchstart", c, yo);
    };
  }, []);
  var h = e.removeScrollBar, m = e.inert;
  return b.createElement(
    b.Fragment,
    null,
    m ? b.createElement(i, { styles: Hj(o) }) : null,
    h ? b.createElement(Dj, { gapMode: e.gapMode }) : null
  );
}
function Yj(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Xj = qL(yk, Kj);
var kk = b.forwardRef(function(e, t) {
  return b.createElement(vc, pr({}, e, { ref: t, sideCar: Xj }));
});
kk.classNames = vc.classNames;
const qj = kk;
function Qj(e) {
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
  } = ki(), [f, h] = sw();
  b.useEffect(() => {
    !f && h && setTimeout(h);
  }, [f, h]);
  const m = mk(n, d);
  return /* @__PURE__ */ _.jsx(
    dk,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ _.jsx(
        qj,
        {
          removeScrollBar: !u,
          allowPinchZoom: a,
          enabled: m === 1 && i,
          forwardProps: !0,
          children: e.children
        }
      )
    }
  );
}
var [Zj, Jj] = at(), eB = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function tB(e, t) {
  var r, n;
  if (e)
    return (n = (r = eB[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function Ck(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = SS(), l = (t = s.components) == null ? void 0 : t.Drawer, u = tB(o, s.direction);
  return /* @__PURE__ */ _.jsx(Zj, { value: { placement: u }, children: /* @__PURE__ */ _.jsx(
    gk,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var rB = G($w), bm = Ce(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = ki(), c = s(a, t), d = l(i), f = be("chakra-modal__content", r), h = hs(), m = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...h.dialog
    }, y = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...h.dialogContainer
    }, { placement: x } = Jj();
    return /* @__PURE__ */ _.jsx(Qj, { children: /* @__PURE__ */ _.jsx(
      G.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: y,
        children: /* @__PURE__ */ _.jsx(
          rB,
          {
            motionProps: o,
            direction: x,
            in: u,
            className: f,
            ...c,
            __css: m,
            children: n
          }
        )
      }
    ) });
  }
);
bm.displayName = "DrawerContent";
var Sm = Ce(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: i } = ki();
    b.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = be("chakra-modal__header", r), l = {
      flex: 0,
      ...hs().header
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
Sm.displayName = "ModalHeader";
var nB = G(fc.div), xm = Ce(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...i } = e, a = be("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...hs().overlay
    }, { motionPreset: u } = ki(), d = o || (u === "none" ? {} : Ew);
    return /* @__PURE__ */ _.jsx(
      nB,
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
xm.displayName = "ModalOverlay";
var wm = Ce((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: i } = ki();
  b.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = be("chakra-modal__body", r), s = hs();
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
wm.displayName = "ModalBody";
var km = Ce(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: i } = ki(), a = be("chakra-modal__close-btn", n), s = hs();
    return /* @__PURE__ */ _.jsx(
      am,
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
km.displayName = "ModalCloseButton";
var [
  oB,
  iB,
  aB,
  BB
] = eL();
function sB(e) {
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
  } = e, [d, f] = b.useState(r ?? 0), [h, m] = tL({
    defaultValue: r ?? 0,
    value: o,
    onChange: n
  });
  b.useEffect(() => {
    o != null && f(o);
  }, [o]);
  const y = aB(), x = b.useId();
  return {
    id: `tabs-${(t = e.id) != null ? t : x}`,
    selectedIndex: h,
    focusedIndex: d,
    setSelectedIndex: m,
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
var [lB, uB] = at({
  name: "TabsContext",
  errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"
});
function cB(e) {
  const { focusedIndex: t, orientation: r, direction: n } = uB(), o = iB(), i = b.useCallback(
    (a) => {
      const s = () => {
        var p;
        const g = o.nextEnabled(t);
        g && ((p = g.node) == null || p.focus());
      }, l = () => {
        var p;
        const g = o.prevEnabled(t);
        g && ((p = g.node) == null || p.focus());
      }, u = () => {
        var p;
        const g = o.firstEnabled();
        g && ((p = g.node) == null || p.focus());
      }, c = () => {
        var p;
        const g = o.lastEnabled();
        g && ((p = g.node) == null || p.focus());
      }, d = r === "horizontal", f = r === "vertical", h = a.key, m = n === "ltr" ? "ArrowLeft" : "ArrowRight", y = n === "ltr" ? "ArrowRight" : "ArrowLeft", v = {
        [m]: () => d && l(),
        [y]: () => d && s(),
        ArrowDown: () => f && s(),
        ArrowUp: () => f && l(),
        Home: u,
        End: c
      }[h];
      v && (a.preventDefault(), v(a));
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
at({});
var [dB, fB] = at({
  name: "TabsStylesContext",
  errorMessage: `useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `
}), _k = Ce(function(t, r) {
  const n = wi("Tabs", t), { children: o, className: i, ...a } = Sr(t), { htmlProps: s, descendants: l, ...u } = sB(a), c = b.useMemo(() => u, [u]), { isFitted: d, ...f } = s, h = {
    position: "relative",
    ...n.root
  };
  return /* @__PURE__ */ _.jsx(oB, { value: l, children: /* @__PURE__ */ _.jsx(lB, { value: c, children: /* @__PURE__ */ _.jsx(dB, { value: n, children: /* @__PURE__ */ _.jsx(
    G.div,
    {
      className: be("chakra-tabs", i),
      ref: r,
      ...f,
      __css: h,
      children: o
    }
  ) }) }) });
});
_k.displayName = "Tabs";
var Tk = Ce(function(t, r) {
  const n = cB({ ...t, ref: r }), i = {
    display: "flex",
    ...fB().tablist
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
Tk.displayName = "TabList";
var hB = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, pB = Object.defineProperty, mB = Object.defineProperties, vB = Object.getOwnPropertyDescriptors, ku = Object.getOwnPropertySymbols, Pk = Object.prototype.hasOwnProperty, Ek = Object.prototype.propertyIsEnumerable, My = (e, t, r) => t in e ? pB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Iy = (e, t) => {
  for (var r in t || (t = {}))
    Pk.call(t, r) && My(e, r, t[r]);
  if (ku)
    for (var r of ku(t))
      Ek.call(t, r) && My(e, r, t[r]);
  return e;
}, gB = (e, t) => mB(e, vB(t)), yB = (e, t) => {
  var r = {};
  for (var n in e)
    Pk.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && ku)
    for (var n of ku(e))
      t.indexOf(n) < 0 && Ek.call(e, n) && (r[n] = e[n]);
  return r;
}, Cm = (e, t, r) => {
  const n = b.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = yB(a, ["color", "size", "stroke", "children"]);
      return b.createElement(
        "svg",
        Iy(gB(Iy({
          ref: i
        }, hB), {
          width: l,
          height: l,
          stroke: s,
          strokeWidth: u,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...r.map(([f, h]) => b.createElement(f, h)), ...c || []]
      );
    }
  );
  return n.propTypes = {
    color: Rn.string,
    size: Rn.oneOfType([Rn.string, Rn.number]),
    stroke: Rn.oneOfType([Rn.string, Rn.number])
  }, n.displayName = `${t}`, n;
}, bB = Cm("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), $k = Cm("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), SB = Cm(
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
let rl;
const xB = new Uint8Array(16);
function wB() {
  if (!rl && (rl = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !rl))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return rl(xB);
}
const Xe = [];
for (let e = 0; e < 256; ++e)
  Xe.push((e + 256).toString(16).slice(1));
function kB(e, t = 0) {
  return Xe[e[t + 0]] + Xe[e[t + 1]] + Xe[e[t + 2]] + Xe[e[t + 3]] + "-" + Xe[e[t + 4]] + Xe[e[t + 5]] + "-" + Xe[e[t + 6]] + Xe[e[t + 7]] + "-" + Xe[e[t + 8]] + Xe[e[t + 9]] + "-" + Xe[e[t + 10]] + Xe[e[t + 11]] + Xe[e[t + 12]] + Xe[e[t + 13]] + Xe[e[t + 14]] + Xe[e[t + 15]];
}
const CB = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), zy = {
  randomUUID: CB
};
function _B(e, t, r) {
  if (zy.randomUUID && !t && !e)
    return zy.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || wB)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    r = r || 0;
    for (let o = 0; o < 16; ++o)
      t[r + o] = n[o];
    return t;
  }
  return kB(n);
}
const Fy = localStorage.getItem("workspace"), vn = Fy != null ? JSON.parse(Fy) : {};
function Dy(e, t) {
  vn[e] = {
    ...vn[e],
    ...t,
    id: e,
    updateTime: Date.now()
  }, localStorage.setItem("workspace", JSON.stringify(vn));
}
function Oy(e, t) {
  const r = _B();
  return vn[r] = {
    id: r,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now()
  }, localStorage.setItem("workspace", JSON.stringify(vn)), vn[r];
}
function TB() {
  return Object.values(vn).sort((e, t) => t.updateTime - e.updateTime);
}
function PB({ isOpen: e, onclose: t }) {
  const [r, n] = b.useState([]);
  return b.useEffect(() => {
    const o = TB();
    n(o);
  }, []), /* @__PURE__ */ _.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ _.jsxs(
    Ck,
    {
      isOpen: e,
      placement: "left",
      onClose: () => t(),
      size: "sm",
      children: [
        /* @__PURE__ */ _.jsx(xm, {}),
        /* @__PURE__ */ _.jsxs(bm, { children: [
          /* @__PURE__ */ _.jsx(km, {}),
          /* @__PURE__ */ _.jsx(Sm, { children: "Recent Workflows" }),
          /* @__PURE__ */ _.jsxs(wm, { children: [
            /* @__PURE__ */ _.jsx(
              ei,
              {
                leftIcon: /* @__PURE__ */ _.jsx($k, {}),
                variant: "outline",
                size: "sm",
                colorScheme: "teal",
                mb: 6,
                children: "New"
              }
            ),
            r.map((o) => /* @__PURE__ */ _.jsxs(
              mc,
              {
                gap: 0,
                borderRadius: 6,
                p: 2,
                mb: 2,
                backgroundColor: "#EEF2F6",
                cursor: "pointer",
                children: [
                  /* @__PURE__ */ _.jsx(qa, { fontWeight: "500", children: o.name }),
                  /* @__PURE__ */ _.jsxs(qa, { color: "GrayText", ml: 2, fontSize: "sm", children: [
                    "Updated: ",
                    EB(o.updateTime)
                  ] })
                ]
              }
            ))
          ] })
        ] })
      ]
    }
  ) });
}
function EB(e) {
  const t = new Date(e * 1e3), r = String(t.getDate()).padStart(2, "0"), n = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${n}-${r}-${o} ${i}:${a}`;
}
function $B(e) {
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
function AB() {
  const e = [];
  for (let t of Bd.graph._nodes)
    t.type == "T2IAdapterLoader" && (t.type = "ControlNetLoader"), t.type == "ConditioningAverage " && (t.type = "ConditioningAverage"), t.type == "SDV_img2vid_Conditioning" && (t.type = "SVD_img2vid_Conditioning"), t.type in LiteGraph.registered_node_types || (t.type = $B(t.type), e.push(t.type));
  return e;
}
const RB = {
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
function MB() {
  const [e, t] = b.useState([]), r = b.useRef({}), n = b.useRef(null), [o, i] = b.useState(null), [a, s] = b.useState("root"), l = () => {
    var h;
    const d = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(m) {
        console.log("ext.setup", m);
      },
      async addCustomNodeDefs(m) {
        console.log("addCustomNodeDefs in workspace manager", m), r.current = m;
      }
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    Bd.registerExtension(d);
    const f = localStorage.getItem("curFlowID");
    if (console.log("latest", f), f)
      n.current = f;
    else {
      const m = localStorage.getItem("workflow"), y = Oy(m ?? "");
      console.log("created new flow", y), n.current = y.id;
    }
    i(((h = vn[n.current]) == null ? void 0 : h.name) ?? ""), setTimeout(() => {
      const m = AB();
      t(m);
    }, 1e3);
  };
  b.useEffect(() => {
    l(), setInterval(() => {
      if (console.log("interval curflowid", n.current), n.current != null) {
        const d = localStorage.getItem("workflow");
        localStorage.setItem("curFlowID", n.current), d != null && Dy(n.current, {
          json: d
        });
      }
    }, 1e3);
  }, []);
  const u = (d) => {
    n.current != null && Dy(n.current, {
      name: d
    });
  }, c = b.useCallback(
    PT(u, 700),
    []
  );
  return /* @__PURE__ */ _.jsxs(
    ym,
    {
      style: {
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      },
      children: [
        /* @__PURE__ */ _.jsx(_k, { variant: "unstyled", children: /* @__PURE__ */ _.jsxs(
          Tk,
          {
            defaultValue: "ComfyUI",
            style: { padding: 8, marginLeft: 16 },
            justifyContent: "space-between",
            gap: 4,
            children: [
              /* @__PURE__ */ _.jsxs(oi, { children: [
                /* @__PURE__ */ _.jsx(
                  ei,
                  {
                    size: "sm",
                    "aria-label": "workspace folder",
                    onClick: () => s("recentFlows"),
                    children: /* @__PURE__ */ _.jsxs(oi, { gap: 1, children: [
                      /* @__PURE__ */ _.jsx(bB, { size: 20 }),
                      /* @__PURE__ */ _.jsx(SB, { size: 8 })
                    ] })
                  }
                ),
                /* @__PURE__ */ _.jsx(
                  gm,
                  {
                    variant: "unstyled",
                    placeholder: "Workflow name",
                    color: "white",
                    value: o ?? "",
                    onChange: (d) => {
                      i(d.target.value), c(d.target.value);
                    }
                  }
                ),
                /* @__PURE__ */ _.jsx(
                  ei,
                  {
                    leftIcon: /* @__PURE__ */ _.jsx($k, { size: 16 }),
                    size: "sm",
                    onClick: () => {
                      const d = RB, f = Oy(JSON.stringify(d));
                      console.log("created new flow", f), n.current = f.id, i(f.name), Bd.loadGraphData(d);
                    },
                    children: "New"
                  }
                )
              ] }),
              /* @__PURE__ */ _.jsx(oi, { children: /* @__PURE__ */ _.jsx(
                ei,
                {
                  colorScheme: "gray",
                  onClick: () => {
                    s("customNodes");
                  },
                  children: e.length === 0 ? "Custom Nodes" : "Install Missing Nodes " + e.length
                }
              ) })
            ]
          }
        ) }),
        a === "recentFlows" && /* @__PURE__ */ _.jsx(PB, { isOpen: !0, onclose: () => s("root") }),
        /* @__PURE__ */ _.jsx(
          IB,
          {
            missingNodes: e,
            isOpen: a === "customNodes",
            onclose: () => {
              s("root");
            }
          }
        )
      ]
    }
  );
}
function IB({
  missingNodes: e,
  isOpen: t,
  onclose: r
}) {
  const [n, o] = b.useState(e), [i, a] = b.useState([]), [s, l] = b.useState(""), [u, c] = b.useState(!1);
  b.useEffect(() => {
    o(e);
    const f = e.map((h) => h.replace(" ", "_"));
    console.log("nodeIDs", f), fetch("/workspace/find_nodes", {
      method: "POST",
      body: JSON.stringify({
        nodes: f
      })
    }).then((h) => h.json()).then((h) => {
      console.log("search_nodes res", h), a(h.filter((m) => m != null)), o(h.filter((m) => m != null).map((m) => m.id));
    });
  }, [e]);
  const d = async (f) => {
    var h;
    c(!0), l(`Starting installation...
`);
    try {
      const m = await fetch("/workspace/install_nodes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nodes: f
        })
      }), y = (h = m == null ? void 0 : m.body) == null ? void 0 : h.getReader();
      if (y == null) {
        console.log("reader is null", y);
        return;
      }
      const x = new TextDecoder();
      for (; ; ) {
        const { done: v, value: p } = await y.read();
        if (v)
          break;
        console.log("value", x.decode(p));
      }
    } catch (m) {
      console.error("Failed to install custom nodes", m), l((y) => y + `
Installation failed.`);
    } finally {
      c(!1);
    }
  };
  return /* @__PURE__ */ _.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ _.jsxs(
    Ck,
    {
      isOpen: t,
      placement: "right",
      onClose: () => r(),
      size: "sm",
      children: [
        /* @__PURE__ */ _.jsx(xm, {}),
        /* @__PURE__ */ _.jsxs(bm, { children: [
          /* @__PURE__ */ _.jsx(km, {}),
          /* @__PURE__ */ _.jsx(Sm, { children: "Custom Nodes" }),
          /* @__PURE__ */ _.jsxs(wm, { children: [
            /* @__PURE__ */ _.jsxs(oi, { mb: 3, children: [
              /* @__PURE__ */ _.jsx(
                mh,
                {
                  mr: 6,
                  isChecked: n.length === i.length,
                  onChange: (f) => {
                    f.target.checked ? o([...i.map((h) => h.id)]) : o([]);
                  },
                  children: "Select All"
                }
              ),
              /* @__PURE__ */ _.jsxs(
                ei,
                {
                  onClick: () => {
                    console.log("onclick install missing nodes", n), d(
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
            /* @__PURE__ */ _.jsx(qa, { mb: 3, color: "GrayText", fontSize: "small", children: "Unselectable nodes are not found in Github, they may be private repos" }),
            e.map((f) => {
              const h = i.find((m) => (m == null ? void 0 : m.id) === f);
              return /* @__PURE__ */ _.jsxs(mc, { gap: 0, mb: 2, children: [
                /* @__PURE__ */ _.jsxs(oi, { children: [
                  /* @__PURE__ */ _.jsx(
                    mh,
                    {
                      isChecked: n.includes(f),
                      disabled: h == null,
                      onChange: (m) => {
                        m.target.checked ? o([...n, f]) : o(n.filter((y) => y !== f));
                      }
                    }
                  ),
                  /* @__PURE__ */ _.jsx("span", { children: f })
                ] }),
                h != null ? /* @__PURE__ */ _.jsx(
                  fk,
                  {
                    color: "teal.500",
                    href: h.gitHtmlUrl,
                    noOfLines: 1,
                    ml: 6,
                    children: h.gitHtmlUrl
                  }
                ) : /* @__PURE__ */ _.jsx(qa, {})
              ] });
            })
          ] })
        ] })
      ]
    }
  ) });
}
const Ak = document.createElement("div");
document.body.prepend(Ak);
const zB = {
  // initialColorMode: "light",
  // useSystemColorMode: false,
}, FB = Az({ config: zB });
Vd.createRoot(Ak).render(
  /* @__PURE__ */ _.jsx(Qn.StrictMode, { children: /* @__PURE__ */ _.jsxs(UO, { children: [
    /* @__PURE__ */ _.jsx(BP, { initialColorMode: FB.config.initialColorMode }),
    /* @__PURE__ */ _.jsx(MB, {})
  ] }) })
);
