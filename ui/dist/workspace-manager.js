import { app as Em } from "/scripts/app.js";
function dC(e, t) {
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
var ps = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ch(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var py = { exports: {} }, pu = {}, my = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ua = Symbol.for("react.element"), fC = Symbol.for("react.portal"), hC = Symbol.for("react.fragment"), pC = Symbol.for("react.strict_mode"), mC = Symbol.for("react.profiler"), vC = Symbol.for("react.provider"), gC = Symbol.for("react.context"), yC = Symbol.for("react.forward_ref"), bC = Symbol.for("react.suspense"), SC = Symbol.for("react.memo"), xC = Symbol.for("react.lazy"), $m = Symbol.iterator;
function wC(e) {
  return e === null || typeof e != "object" ? null : (e = $m && e[$m] || e["@@iterator"], typeof e == "function" ? e : null);
}
var vy = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, gy = Object.assign, yy = {};
function di(e, t, r) {
  this.props = e, this.context = t, this.refs = yy, this.updater = r || vy;
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
function by() {
}
by.prototype = di.prototype;
function dh(e, t, r) {
  this.props = e, this.context = t, this.refs = yy, this.updater = r || vy;
}
var fh = dh.prototype = new by();
fh.constructor = dh;
gy(fh, di.prototype);
fh.isPureReactComponent = !0;
var Am = Array.isArray, Sy = Object.prototype.hasOwnProperty, hh = { current: null }, xy = { key: !0, ref: !0, __self: !0, __source: !0 };
function wy(e, t, r) {
  var n, o = {}, i = null, a = null;
  if (t != null)
    for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Sy.call(t, n) && !xy.hasOwnProperty(n) && (o[n] = t[n]);
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
  return { $$typeof: Ua, type: e, key: i, ref: a, props: o, _owner: hh.current };
}
function kC(e, t) {
  return { $$typeof: Ua, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ph(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ua;
}
function CC(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var Rm = /\/+/g;
function yc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? CC("" + e.key) : t.toString(36);
}
function Xs(e, t, r, n, o) {
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
          case Ua:
          case fC:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = n === "" ? "." + yc(a, 0) : n, Am(o) ? (r = "", e != null && (r = e.replace(Rm, "$&/") + "/"), Xs(o, t, r, "", function(u) {
      return u;
    })) : o != null && (ph(o) && (o = kC(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Rm, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, n = n === "" ? "." : n + ":", Am(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = n + yc(i, s);
      a += Xs(i, t, r, l, o);
    }
  else if (l = wC(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = n + yc(i, s++), a += Xs(i, t, r, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function ms(e, t, r) {
  if (e == null)
    return e;
  var n = [], o = 0;
  return Xs(e, n, "", "", function(i) {
    return t.call(r, i, o++);
  }), n;
}
function _C(e) {
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
var dt = { current: null }, qs = { transition: null }, TC = { ReactCurrentDispatcher: dt, ReactCurrentBatchConfig: qs, ReactCurrentOwner: hh };
G.Children = { map: ms, forEach: function(e, t, r) {
  ms(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return ms(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ms(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ph(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
G.Component = di;
G.Fragment = hC;
G.Profiler = mC;
G.PureComponent = dh;
G.StrictMode = pC;
G.Suspense = bC;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = TC;
G.cloneElement = function(e, t, r) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = gy({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = hh.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      Sy.call(t, l) && !xy.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
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
  return { $$typeof: Ua, type: e.type, key: o, ref: i, props: n, _owner: a };
};
G.createContext = function(e) {
  return e = { $$typeof: gC, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: vC, _context: e }, e.Consumer = e;
};
G.createElement = wy;
G.createFactory = function(e) {
  var t = wy.bind(null, e);
  return t.type = e, t;
};
G.createRef = function() {
  return { current: null };
};
G.forwardRef = function(e) {
  return { $$typeof: yC, render: e };
};
G.isValidElement = ph;
G.lazy = function(e) {
  return { $$typeof: xC, _payload: { _status: -1, _result: e }, _init: _C };
};
G.memo = function(e, t) {
  return { $$typeof: SC, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function(e) {
  var t = qs.transition;
  qs.transition = {};
  try {
    e();
  } finally {
    qs.transition = t;
  }
};
G.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
G.useCallback = function(e, t) {
  return dt.current.useCallback(e, t);
};
G.useContext = function(e) {
  return dt.current.useContext(e);
};
G.useDebugValue = function() {
};
G.useDeferredValue = function(e) {
  return dt.current.useDeferredValue(e);
};
G.useEffect = function(e, t) {
  return dt.current.useEffect(e, t);
};
G.useId = function() {
  return dt.current.useId();
};
G.useImperativeHandle = function(e, t, r) {
  return dt.current.useImperativeHandle(e, t, r);
};
G.useInsertionEffect = function(e, t) {
  return dt.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function(e, t) {
  return dt.current.useLayoutEffect(e, t);
};
G.useMemo = function(e, t) {
  return dt.current.useMemo(e, t);
};
G.useReducer = function(e, t, r) {
  return dt.current.useReducer(e, t, r);
};
G.useRef = function(e) {
  return dt.current.useRef(e);
};
G.useState = function(e) {
  return dt.current.useState(e);
};
G.useSyncExternalStore = function(e, t, r) {
  return dt.current.useSyncExternalStore(e, t, r);
};
G.useTransition = function() {
  return dt.current.useTransition();
};
G.version = "18.2.0";
my.exports = G;
var b = my.exports;
const Kn = /* @__PURE__ */ ch(b), Mm = /* @__PURE__ */ dC({
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
var PC = b, EC = Symbol.for("react.element"), $C = Symbol.for("react.fragment"), AC = Object.prototype.hasOwnProperty, RC = PC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, MC = { key: !0, ref: !0, __self: !0, __source: !0 };
function ky(e, t, r) {
  var n, o = {}, i = null, a = null;
  r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (n in t)
    AC.call(t, n) && !MC.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in t = e.defaultProps, t)
      o[n] === void 0 && (o[n] = t[n]);
  return { $$typeof: EC, type: e, key: i, ref: a, props: o, _owner: RC.current };
}
pu.Fragment = $C;
pu.jsx = ky;
pu.jsxs = ky;
py.exports = pu;
var T = py.exports, Ad = {}, Cy = { exports: {} }, Mt = {}, _y = { exports: {} }, Ty = {};
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
        var B = V - 1 >>> 1, J = z[B];
        if (0 < o(J, N))
          z[B] = N, z[V] = J, V = B;
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
        for (var B = 0, J = z.length, W = J >>> 1; B < W; ) {
          var te = 2 * (B + 1) - 1, wt = z[te], be = te + 1, Ie = z[be];
          if (0 > o(wt, V))
            be < J && 0 > o(Ie, wt) ? (z[B] = Ie, z[be] = V, B = be) : (z[B] = wt, z[te] = V, B = te);
          else if (be < J && 0 > o(Ie, V))
            z[B] = Ie, z[be] = V, B = be;
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
        g = !0, Ee(_);
      else {
        var N = r(u);
        N !== null && ze(w, N.startTime - z);
      }
  }
  function _(z, N) {
    g = !1, y && (y = !1, m($), $ = -1), p = !0;
    var V = f;
    try {
      for (v(N), d = r(l); d !== null && (!(d.expirationTime > N) || z && !H()); ) {
        var B = d.callback;
        if (typeof B == "function") {
          d.callback = null, f = d.priorityLevel;
          var J = B(d.expirationTime <= N);
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
  function Ee(z) {
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
    g || p || (g = !0, Ee(_));
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
    var B = e.unstable_now();
    switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? B + V : B) : V = B, z) {
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
    return J = V + J, z = { id: c++, callback: N, priorityLevel: z, startTime: V, expirationTime: J, sortIndex: -1 }, V > B ? (z.sortIndex = V, t(u, z), r(l) === null && z === r(u) && (y ? (m($), $ = -1) : y = !0, ze(w, V - B))) : (z.sortIndex = J, t(l, z), g || p || (g = !0, Ee(_))), z;
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
})(Ty);
_y.exports = Ty;
var zC = _y.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Py = b, At = zC;
function R(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ey = /* @__PURE__ */ new Set(), fa = {};
function to(e, t) {
  Jo(e, t), Jo(e + "Capture", t);
}
function Jo(e, t) {
  for (fa[e] = t, e = 0; e < t.length; e++)
    Ey.add(t[e]);
}
var Fr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Rd = Object.prototype.hasOwnProperty, IC = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, zm = {}, Im = {};
function FC(e) {
  return Rd.call(Im, e) ? !0 : Rd.call(zm, e) ? !1 : IC.test(e) ? Im[e] = !0 : (zm[e] = !0, !1);
}
function DC(e, t, r, n) {
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
function LC(e, t, r, n) {
  if (t === null || typeof t > "u" || DC(e, t, r, n))
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
var mh = /[\-:]([a-z])/g;
function vh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    mh,
    vh
  );
  Ze[t] = new ft(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(mh, vh);
  Ze[t] = new ft(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(mh, vh);
  Ze[t] = new ft(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ze[e] = new ft(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ze.xlinkHref = new ft("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ze[e] = new ft(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function gh(e, t, r, n) {
  var o = Ze.hasOwnProperty(t) ? Ze[t] : null;
  (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (LC(t, r, o, n) && (r = null), n || o === null ? FC(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var jr = Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vs = Symbol.for("react.element"), vo = Symbol.for("react.portal"), go = Symbol.for("react.fragment"), yh = Symbol.for("react.strict_mode"), Md = Symbol.for("react.profiler"), $y = Symbol.for("react.provider"), Ay = Symbol.for("react.context"), bh = Symbol.for("react.forward_ref"), zd = Symbol.for("react.suspense"), Id = Symbol.for("react.suspense_list"), Sh = Symbol.for("react.memo"), Kr = Symbol.for("react.lazy"), Ry = Symbol.for("react.offscreen"), Fm = Symbol.iterator;
function Si(e) {
  return e === null || typeof e != "object" ? null : (e = Fm && e[Fm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Te = Object.assign, bc;
function Fi(e) {
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
  return (e = e ? e.displayName || e.name : "") ? Fi(e) : "";
}
function OC(e) {
  switch (e.tag) {
    case 5:
      return Fi(e.type);
    case 16:
      return Fi("Lazy");
    case 13:
      return Fi("Suspense");
    case 19:
      return Fi("SuspenseList");
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
    case yh:
      return "StrictMode";
    case zd:
      return "Suspense";
    case Id:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ay:
        return (e.displayName || "Context") + ".Consumer";
      case $y:
        return (e._context.displayName || "Context") + ".Provider";
      case bh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Sh:
        return t = e.displayName || null, t !== null ? t : Fd(e.type) || "Memo";
      case Kr:
        t = e._payload, e = e._init;
        try {
          return Fd(e(t));
        } catch {
        }
    }
  return null;
}
function NC(e) {
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
      return t === yh ? "StrictMode" : "Mode";
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
function hn(e) {
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
function My(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function BC(e) {
  var t = My(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
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
function gs(e) {
  e._valueTracker || (e._valueTracker = BC(e));
}
function zy(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var r = t.getValue(), n = "";
  return e && (n = My(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function Cl(e) {
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
  return Te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function Dm(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = hn(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Iy(e, t) {
  t = t.checked, t != null && gh(e, "checked", t, !1);
}
function Ld(e, t) {
  Iy(e, t);
  var r = hn(t.value), n = t.type;
  if (r != null)
    n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Od(e, t.type, r) : t.hasOwnProperty("defaultValue") && Od(e, t.type, hn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Lm(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function Od(e, t, r) {
  (t !== "number" || Cl(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Di = Array.isArray;
function No(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < r.length; o++)
      t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      o = t.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + hn(r), t = null, o = 0; o < e.length; o++) {
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
  return Te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Om(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null)
        throw Error(R(92));
      if (Di(r)) {
        if (1 < r.length)
          throw Error(R(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: hn(r) };
}
function Fy(e, t) {
  var r = hn(t.value), n = hn(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function Nm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Dy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Dy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ys, Ly = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (ys = ys || document.createElement("div"), ys.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ys.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function ha(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Gi = {
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
}, jC = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gi).forEach(function(e) {
  jC.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Gi[t] = Gi[e];
  });
});
function Oy(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Gi.hasOwnProperty(e) && Gi[e] ? ("" + t).trim() : t + "px";
}
function Ny(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0, o = Oy(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o;
    }
}
var VC = Te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function jd(e, t) {
  if (t) {
    if (VC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function xh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ud = null, Bo = null, jo = null;
function Bm(e) {
  if (e = Ka(e)) {
    if (typeof Ud != "function")
      throw Error(R(280));
    var t = e.stateNode;
    t && (t = bu(t), Ud(e.stateNode, e.type, t));
  }
}
function By(e) {
  Bo ? jo ? jo.push(e) : jo = [e] : Bo = e;
}
function jy() {
  if (Bo) {
    var e = Bo, t = jo;
    if (jo = Bo = null, Bm(e), t)
      for (e = 0; e < t.length; e++)
        Bm(t[e]);
  }
}
function Vy(e, t) {
  return e(t);
}
function Wy() {
}
var wc = !1;
function Uy(e, t, r) {
  if (wc)
    return e(t, r);
  wc = !0;
  try {
    return Vy(e, t, r);
  } finally {
    wc = !1, (Bo !== null || jo !== null) && (Wy(), jy());
  }
}
function pa(e, t) {
  var r = e.stateNode;
  if (r === null)
    return null;
  var n = bu(r);
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
if (Fr)
  try {
    var xi = {};
    Object.defineProperty(xi, "passive", { get: function() {
      Hd = !0;
    } }), window.addEventListener("test", xi, xi), window.removeEventListener("test", xi, xi);
  } catch {
    Hd = !1;
  }
function WC(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ki = !1, _l = null, Tl = !1, Gd = null, UC = { onError: function(e) {
  Ki = !0, _l = e;
} };
function HC(e, t, r, n, o, i, a, s, l) {
  Ki = !1, _l = null, WC.apply(UC, arguments);
}
function GC(e, t, r, n, o, i, a, s, l) {
  if (HC.apply(this, arguments), Ki) {
    if (Ki) {
      var u = _l;
      Ki = !1, _l = null;
    } else
      throw Error(R(198));
    Tl || (Tl = !0, Gd = u);
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
function Hy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function jm(e) {
  if (ro(e) !== e)
    throw Error(R(188));
}
function KC(e) {
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
          return jm(o), e;
        if (i === n)
          return jm(o), t;
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
function Gy(e) {
  return e = KC(e), e !== null ? Ky(e) : null;
}
function Ky(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Ky(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Yy = At.unstable_scheduleCallback, Vm = At.unstable_cancelCallback, YC = At.unstable_shouldYield, XC = At.unstable_requestPaint, Fe = At.unstable_now, qC = At.unstable_getCurrentPriorityLevel, wh = At.unstable_ImmediatePriority, Xy = At.unstable_UserBlockingPriority, Pl = At.unstable_NormalPriority, QC = At.unstable_LowPriority, qy = At.unstable_IdlePriority, mu = null, pr = null;
function ZC(e) {
  if (pr && typeof pr.onCommitFiberRoot == "function")
    try {
      pr.onCommitFiberRoot(mu, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var rr = Math.clz32 ? Math.clz32 : t_, JC = Math.log, e_ = Math.LN2;
function t_(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (JC(e) / e_ | 0) | 0;
}
var bs = 64, Ss = 4194304;
function Li(e) {
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
function El(e, t) {
  var r = e.pendingLanes;
  if (r === 0)
    return 0;
  var n = 0, o = e.suspendedLanes, i = e.pingedLanes, a = r & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? n = Li(s) : (i &= a, i !== 0 && (n = Li(i)));
  } else
    a = r & ~o, a !== 0 ? n = Li(a) : i !== 0 && (n = Li(i));
  if (n === 0)
    return 0;
  if (t !== 0 && t !== n && !(t & o) && (o = n & -n, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= n; 0 < t; )
      r = 31 - rr(t), o = 1 << r, n |= e[r], t &= ~o;
  return n;
}
function r_(e, t) {
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
function n_(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - rr(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & r) || s & n) && (o[a] = r_(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Kd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Qy() {
  var e = bs;
  return bs <<= 1, !(bs & 4194240) && (bs = 64), e;
}
function kc(e) {
  for (var t = [], r = 0; 31 > r; r++)
    t.push(e);
  return t;
}
function Ha(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - rr(t), e[t] = r;
}
function o_(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - rr(r), i = 1 << o;
    t[o] = 0, n[o] = -1, e[o] = -1, r &= ~i;
  }
}
function kh(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - rr(r), o = 1 << n;
    o & t | e[n] & t && (e[n] |= t), r &= ~o;
  }
}
var se = 0;
function Zy(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Jy, Ch, e1, t1, r1, Yd = !1, xs = [], rn = null, nn = null, on = null, ma = /* @__PURE__ */ new Map(), va = /* @__PURE__ */ new Map(), qr = [], i_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Wm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      nn = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      ma.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      va.delete(t.pointerId);
  }
}
function wi(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ka(t), t !== null && Ch(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function a_(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return rn = wi(rn, e, t, r, n, o), !0;
    case "dragenter":
      return nn = wi(nn, e, t, r, n, o), !0;
    case "mouseover":
      return on = wi(on, e, t, r, n, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return ma.set(i, wi(ma.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, va.set(i, wi(va.get(i) || null, e, t, r, n, o)), !0;
  }
  return !1;
}
function n1(e) {
  var t = Fn(e.target);
  if (t !== null) {
    var r = ro(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = Hy(r), t !== null) {
          e.blockedOn = t, r1(e.priority, function() {
            e1(r);
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
function Qs(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Xd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      Wd = n, r.target.dispatchEvent(n), Wd = null;
    } else
      return t = Ka(r), t !== null && Ch(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function Um(e, t, r) {
  Qs(e) && r.delete(t);
}
function s_() {
  Yd = !1, rn !== null && Qs(rn) && (rn = null), nn !== null && Qs(nn) && (nn = null), on !== null && Qs(on) && (on = null), ma.forEach(Um), va.forEach(Um);
}
function ki(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Yd || (Yd = !0, At.unstable_scheduleCallback(At.unstable_NormalPriority, s_)));
}
function ga(e) {
  function t(o) {
    return ki(o, e);
  }
  if (0 < xs.length) {
    ki(xs[0], e);
    for (var r = 1; r < xs.length; r++) {
      var n = xs[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (rn !== null && ki(rn, e), nn !== null && ki(nn, e), on !== null && ki(on, e), ma.forEach(t), va.forEach(t), r = 0; r < qr.length; r++)
    n = qr[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < qr.length && (r = qr[0], r.blockedOn === null); )
    n1(r), r.blockedOn === null && qr.shift();
}
var Vo = jr.ReactCurrentBatchConfig, $l = !0;
function l_(e, t, r, n) {
  var o = se, i = Vo.transition;
  Vo.transition = null;
  try {
    se = 1, _h(e, t, r, n);
  } finally {
    se = o, Vo.transition = i;
  }
}
function u_(e, t, r, n) {
  var o = se, i = Vo.transition;
  Vo.transition = null;
  try {
    se = 4, _h(e, t, r, n);
  } finally {
    se = o, Vo.transition = i;
  }
}
function _h(e, t, r, n) {
  if ($l) {
    var o = Xd(e, t, r, n);
    if (o === null)
      zc(e, t, n, Al, r), Wm(e, n);
    else if (a_(o, e, t, r, n))
      n.stopPropagation();
    else if (Wm(e, n), t & 4 && -1 < i_.indexOf(e)) {
      for (; o !== null; ) {
        var i = Ka(o);
        if (i !== null && Jy(i), i = Xd(e, t, r, n), i === null && zc(e, t, n, Al, r), i === o)
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else
      zc(e, t, n, null, r);
  }
}
var Al = null;
function Xd(e, t, r, n) {
  if (Al = null, e = xh(n), e = Fn(e), e !== null)
    if (t = ro(e), t === null)
      e = null;
    else if (r = t.tag, r === 13) {
      if (e = Hy(t), e !== null)
        return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Al = e, null;
}
function o1(e) {
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
      switch (qC()) {
        case wh:
          return 1;
        case Xy:
          return 4;
        case Pl:
        case QC:
          return 16;
        case qy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jr = null, Th = null, Zs = null;
function i1() {
  if (Zs)
    return Zs;
  var e, t = Th, r = t.length, n, o = "value" in Jr ? Jr.value : Jr.textContent, i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++)
    ;
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++)
    ;
  return Zs = o.slice(e, 1 < n ? 1 - n : void 0);
}
function Js(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ws() {
  return !0;
}
function Hm() {
  return !1;
}
function zt(e) {
  function t(r, n, o, i, a) {
    this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ws : Hm, this.isPropagationStopped = Hm, this;
  }
  return Te(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = ws);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = ws);
  }, persist: function() {
  }, isPersistent: ws }), t;
}
var fi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ph = zt(fi), Ga = Te({}, fi, { view: 0, detail: 0 }), c_ = zt(Ga), Cc, _c, Ci, vu = Te({}, Ga, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Eh, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ci && (Ci && e.type === "mousemove" ? (Cc = e.screenX - Ci.screenX, _c = e.screenY - Ci.screenY) : _c = Cc = 0, Ci = e), Cc);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : _c;
} }), Gm = zt(vu), d_ = Te({}, vu, { dataTransfer: 0 }), f_ = zt(d_), h_ = Te({}, Ga, { relatedTarget: 0 }), Tc = zt(h_), p_ = Te({}, fi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), m_ = zt(p_), v_ = Te({}, fi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), g_ = zt(v_), y_ = Te({}, fi, { data: 0 }), Km = zt(y_), b_ = {
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
}, S_ = {
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
}, x_ = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function w_(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = x_[e]) ? !!t[e] : !1;
}
function Eh() {
  return w_;
}
var k_ = Te({}, Ga, { key: function(e) {
  if (e.key) {
    var t = b_[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Js(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? S_[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Eh, charCode: function(e) {
  return e.type === "keypress" ? Js(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Js(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), C_ = zt(k_), __ = Te({}, vu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ym = zt(__), T_ = Te({}, Ga, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Eh }), P_ = zt(T_), E_ = Te({}, fi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $_ = zt(E_), A_ = Te({}, vu, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), R_ = zt(A_), M_ = [9, 13, 27, 32], $h = Fr && "CompositionEvent" in window, Yi = null;
Fr && "documentMode" in document && (Yi = document.documentMode);
var z_ = Fr && "TextEvent" in window && !Yi, a1 = Fr && (!$h || Yi && 8 < Yi && 11 >= Yi), Xm = " ", qm = !1;
function s1(e, t) {
  switch (e) {
    case "keyup":
      return M_.indexOf(t.keyCode) !== -1;
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
function l1(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var yo = !1;
function I_(e, t) {
  switch (e) {
    case "compositionend":
      return l1(t);
    case "keypress":
      return t.which !== 32 ? null : (qm = !0, Xm);
    case "textInput":
      return e = t.data, e === Xm && qm ? null : e;
    default:
      return null;
  }
}
function F_(e, t) {
  if (yo)
    return e === "compositionend" || !$h && s1(e, t) ? (e = i1(), Zs = Th = Jr = null, yo = !1, e) : null;
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
      return a1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var D_ = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Qm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!D_[e.type] : t === "textarea";
}
function u1(e, t, r, n) {
  By(n), t = Rl(t, "onChange"), 0 < t.length && (r = new Ph("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var Xi = null, ya = null;
function L_(e) {
  S1(e, 0);
}
function gu(e) {
  var t = xo(e);
  if (zy(t))
    return e;
}
function O_(e, t) {
  if (e === "change")
    return t;
}
var c1 = !1;
if (Fr) {
  var Pc;
  if (Fr) {
    var Ec = "oninput" in document;
    if (!Ec) {
      var Zm = document.createElement("div");
      Zm.setAttribute("oninput", "return;"), Ec = typeof Zm.oninput == "function";
    }
    Pc = Ec;
  } else
    Pc = !1;
  c1 = Pc && (!document.documentMode || 9 < document.documentMode);
}
function Jm() {
  Xi && (Xi.detachEvent("onpropertychange", d1), ya = Xi = null);
}
function d1(e) {
  if (e.propertyName === "value" && gu(ya)) {
    var t = [];
    u1(t, ya, e, xh(e)), Uy(L_, t);
  }
}
function N_(e, t, r) {
  e === "focusin" ? (Jm(), Xi = t, ya = r, Xi.attachEvent("onpropertychange", d1)) : e === "focusout" && Jm();
}
function B_(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gu(ya);
}
function j_(e, t) {
  if (e === "click")
    return gu(t);
}
function V_(e, t) {
  if (e === "input" || e === "change")
    return gu(t);
}
function W_(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var or = typeof Object.is == "function" ? Object.is : W_;
function ba(e, t) {
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
function ev(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function tv(e, t) {
  var r = ev(e);
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
    r = ev(r);
  }
}
function f1(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? f1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function h1() {
  for (var e = window, t = Cl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r)
      e = t.contentWindow;
    else
      break;
    t = Cl(e.document);
  }
  return t;
}
function Ah(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function U_(e) {
  var t = h1(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && f1(r.ownerDocument.documentElement, r)) {
    if (n !== null && Ah(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r)
        r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = r.textContent.length, i = Math.min(n.start, o);
        n = n.end === void 0 ? i : Math.min(n.end, o), !e.extend && i > n && (o = n, n = i, i = o), o = tv(r, i);
        var a = tv(
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
var H_ = Fr && "documentMode" in document && 11 >= document.documentMode, bo = null, qd = null, qi = null, Qd = !1;
function rv(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Qd || bo == null || bo !== Cl(n) || (n = bo, "selectionStart" in n && Ah(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), qi && ba(qi, n) || (qi = n, n = Rl(qd, "onSelect"), 0 < n.length && (t = new Ph("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = bo)));
}
function ks(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var So = { animationend: ks("Animation", "AnimationEnd"), animationiteration: ks("Animation", "AnimationIteration"), animationstart: ks("Animation", "AnimationStart"), transitionend: ks("Transition", "TransitionEnd") }, $c = {}, p1 = {};
Fr && (p1 = document.createElement("div").style, "AnimationEvent" in window || (delete So.animationend.animation, delete So.animationiteration.animation, delete So.animationstart.animation), "TransitionEvent" in window || delete So.transitionend.transition);
function yu(e) {
  if ($c[e])
    return $c[e];
  if (!So[e])
    return e;
  var t = So[e], r;
  for (r in t)
    if (t.hasOwnProperty(r) && r in p1)
      return $c[e] = t[r];
  return e;
}
var m1 = yu("animationend"), v1 = yu("animationiteration"), g1 = yu("animationstart"), y1 = yu("transitionend"), b1 = /* @__PURE__ */ new Map(), nv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function yn(e, t) {
  b1.set(e, t), to(t, [e]);
}
for (var Ac = 0; Ac < nv.length; Ac++) {
  var Rc = nv[Ac], G_ = Rc.toLowerCase(), K_ = Rc[0].toUpperCase() + Rc.slice(1);
  yn(G_, "on" + K_);
}
yn(m1, "onAnimationEnd");
yn(v1, "onAnimationIteration");
yn(g1, "onAnimationStart");
yn("dblclick", "onDoubleClick");
yn("focusin", "onFocus");
yn("focusout", "onBlur");
yn(y1, "onTransitionEnd");
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
var Oi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Y_ = new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));
function ov(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, GC(n, t, void 0, e), e.currentTarget = null;
}
function S1(e, t) {
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
          ov(o, s, u), i = l;
        }
      else
        for (a = 0; a < n.length; a++) {
          if (s = n[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          ov(o, s, u), i = l;
        }
    }
  }
  if (Tl)
    throw e = Gd, Tl = !1, Gd = null, e;
}
function ve(e, t) {
  var r = t[rf];
  r === void 0 && (r = t[rf] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (x1(t, e, 2, !1), r.add(n));
}
function Mc(e, t, r) {
  var n = 0;
  t && (n |= 4), x1(r, e, n, t);
}
var Cs = "_reactListening" + Math.random().toString(36).slice(2);
function Sa(e) {
  if (!e[Cs]) {
    e[Cs] = !0, Ey.forEach(function(r) {
      r !== "selectionchange" && (Y_.has(r) || Mc(r, !1, e), Mc(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Cs] || (t[Cs] = !0, Mc("selectionchange", !1, t));
  }
}
function x1(e, t, r, n) {
  switch (o1(t)) {
    case 1:
      var o = l_;
      break;
    case 4:
      o = u_;
      break;
    default:
      o = _h;
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
  Uy(function() {
    var u = i, c = xh(r), d = [];
    e: {
      var f = b1.get(e);
      if (f !== void 0) {
        var p = Ph, g = e;
        switch (e) {
          case "keypress":
            if (Js(r) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = C_;
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
            p = Gm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = f_;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = P_;
            break;
          case m1:
          case v1:
          case g1:
            p = m_;
            break;
          case y1:
            p = $_;
            break;
          case "scroll":
            p = c_;
            break;
          case "wheel":
            p = R_;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = g_;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Ym;
        }
        var y = (t & 4) !== 0, x = !y && e === "scroll", m = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var w = v.stateNode;
          if (v.tag === 5 && w !== null && (v = w, m !== null && (w = pa(h, m), w != null && y.push(xa(h, w, v)))), x)
            break;
          h = h.return;
        }
        0 < y.length && (f = new p(f, g, null, r, c), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && r !== Wd && (g = r.relatedTarget || r.fromElement) && (Fn(g) || g[Dr]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (g = r.relatedTarget || r.toElement, p = u, g = g ? Fn(g) : null, g !== null && (x = ro(g), g !== x || g.tag !== 5 && g.tag !== 6) && (g = null)) : (p = null, g = u), p !== g)) {
          if (y = Gm, w = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (y = Ym, w = "onPointerLeave", m = "onPointerEnter", h = "pointer"), x = p == null ? f : xo(p), v = g == null ? f : xo(g), f = new y(w, h + "leave", p, r, c), f.target = x, f.relatedTarget = v, w = null, Fn(c) === u && (y = new y(m, h + "enter", g, r, c), y.target = v, y.relatedTarget = x, w = y), x = w, p && g)
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
          p !== null && iv(d, f, p, y, !1), g !== null && x !== null && iv(d, x, g, y, !0);
        }
      }
      e: {
        if (f = u ? xo(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var _ = O_;
        else if (Qm(f))
          if (c1)
            _ = V_;
          else {
            _ = B_;
            var A = N_;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (_ = j_);
        if (_ && (_ = _(e, u))) {
          u1(d, _, r, c);
          break e;
        }
        A && A(e, f, u), e === "focusout" && (A = f._wrapperState) && A.controlled && f.type === "number" && Od(f, "number", f.value);
      }
      switch (A = u ? xo(u) : window, e) {
        case "focusin":
          (Qm(A) || A.contentEditable === "true") && (bo = A, qd = u, qi = null);
          break;
        case "focusout":
          qi = qd = bo = null;
          break;
        case "mousedown":
          Qd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Qd = !1, rv(d, r, c);
          break;
        case "selectionchange":
          if (H_)
            break;
        case "keydown":
        case "keyup":
          rv(d, r, c);
      }
      var P;
      if ($h)
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
        yo ? s1(e, r) && ($ = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && ($ = "onCompositionStart");
      $ && (a1 && r.locale !== "ko" && (yo || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && yo && (P = i1()) : (Jr = c, Th = "value" in Jr ? Jr.value : Jr.textContent, yo = !0)), A = Rl(u, $), 0 < A.length && ($ = new Km($, e, null, r, c), d.push({ event: $, listeners: A }), P ? $.data = P : (P = l1(r), P !== null && ($.data = P)))), (P = z_ ? I_(e, r) : F_(e, r)) && (u = Rl(u, "onBeforeInput"), 0 < u.length && (c = new Km("onBeforeInput", "beforeinput", null, r, c), d.push({ event: c, listeners: u }), c.data = P));
    }
    S1(d, t);
  });
}
function xa(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Rl(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = pa(e, r), i != null && n.unshift(xa(e, i, o)), i = pa(e, t), i != null && n.push(xa(e, i, o))), e = e.return;
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
function iv(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r, l = s.alternate, u = s.stateNode;
    if (l !== null && l === n)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = pa(r, i), l != null && a.unshift(xa(r, l, s))) : o || (l = pa(r, i), l != null && a.push(xa(r, l, s)))), r = r.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var X_ = /\r\n?/g, q_ = /\u0000|\uFFFD/g;
function av(e) {
  return (typeof e == "string" ? e : "" + e).replace(X_, `
`).replace(q_, "");
}
function _s(e, t, r) {
  if (t = av(t), av(e) !== t && r)
    throw Error(R(425));
}
function Ml() {
}
var Zd = null, Jd = null;
function ef(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var tf = typeof setTimeout == "function" ? setTimeout : void 0, Q_ = typeof clearTimeout == "function" ? clearTimeout : void 0, sv = typeof Promise == "function" ? Promise : void 0, Z_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof sv < "u" ? function(e) {
  return sv.resolve(null).then(e).catch(J_);
} : tf;
function J_(e) {
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
          e.removeChild(o), ga(t);
          return;
        }
        n--;
      } else
        r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = o;
  } while (r);
  ga(t);
}
function an(e) {
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
function lv(e) {
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
var hi = Math.random().toString(36).slice(2), fr = "__reactFiber$" + hi, wa = "__reactProps$" + hi, Dr = "__reactContainer$" + hi, rf = "__reactEvents$" + hi, e2 = "__reactListeners$" + hi, t2 = "__reactHandles$" + hi;
function Fn(e) {
  var t = e[fr];
  if (t)
    return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[Dr] || r[fr]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
        for (e = lv(e); e !== null; ) {
          if (r = e[fr])
            return r;
          e = lv(e);
        }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function Ka(e) {
  return e = e[fr] || e[Dr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function xo(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(R(33));
}
function bu(e) {
  return e[wa] || null;
}
var nf = [], wo = -1;
function bn(e) {
  return { current: e };
}
function ye(e) {
  0 > wo || (e.current = nf[wo], nf[wo] = null, wo--);
}
function fe(e, t) {
  wo++, nf[wo] = e.current, e.current = t;
}
var pn = {}, ot = bn(pn), gt = bn(!1), Yn = pn;
function ei(e, t) {
  var r = e.type.contextTypes;
  if (!r)
    return pn;
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
function zl() {
  ye(gt), ye(ot);
}
function uv(e, t, r) {
  if (ot.current !== pn)
    throw Error(R(168));
  fe(ot, t), fe(gt, r);
}
function w1(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function")
    return r;
  n = n.getChildContext();
  for (var o in n)
    if (!(o in t))
      throw Error(R(108, NC(e) || "Unknown", o));
  return Te({}, r, n);
}
function Il(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pn, Yn = ot.current, fe(ot, e), fe(gt, gt.current), !0;
}
function cv(e, t, r) {
  var n = e.stateNode;
  if (!n)
    throw Error(R(169));
  r ? (e = w1(e, t, Yn), n.__reactInternalMemoizedMergedChildContext = e, ye(gt), ye(ot), fe(ot, e)) : ye(gt), fe(gt, r);
}
var Cr = null, Su = !1, Fc = !1;
function k1(e) {
  Cr === null ? Cr = [e] : Cr.push(e);
}
function r2(e) {
  Su = !0, k1(e);
}
function Sn() {
  if (!Fc && Cr !== null) {
    Fc = !0;
    var e = 0, t = se;
    try {
      var r = Cr;
      for (se = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      Cr = null, Su = !1;
    } catch (o) {
      throw Cr !== null && (Cr = Cr.slice(e + 1)), Yy(wh, Sn), o;
    } finally {
      se = t, Fc = !1;
    }
  }
  return null;
}
var ko = [], Co = 0, Fl = null, Dl = 0, Vt = [], Wt = 0, Xn = null, Pr = 1, Er = "";
function En(e, t) {
  ko[Co++] = Dl, ko[Co++] = Fl, Fl = e, Dl = t;
}
function C1(e, t, r) {
  Vt[Wt++] = Pr, Vt[Wt++] = Er, Vt[Wt++] = Xn, Xn = e;
  var n = Pr;
  e = Er;
  var o = 32 - rr(n) - 1;
  n &= ~(1 << o), r += 1;
  var i = 32 - rr(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (n & (1 << a) - 1).toString(32), n >>= a, o -= a, Pr = 1 << 32 - rr(t) + o | r << o | n, Er = i + e;
  } else
    Pr = 1 << i | r << o | n, Er = e;
}
function Rh(e) {
  e.return !== null && (En(e, 1), C1(e, 1, 0));
}
function Mh(e) {
  for (; e === Fl; )
    Fl = ko[--Co], ko[Co] = null, Dl = ko[--Co], ko[Co] = null;
  for (; e === Xn; )
    Xn = Vt[--Wt], Vt[Wt] = null, Er = Vt[--Wt], Vt[Wt] = null, Pr = Vt[--Wt], Vt[Wt] = null;
}
var Pt = null, Tt = null, we = !1, er = null;
function _1(e, t) {
  var r = Ut(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function dv(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Pt = e, Tt = an(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Pt = e, Tt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Xn !== null ? { id: Pr, overflow: Er } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Ut(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Pt = e, Tt = null, !0) : !1;
    default:
      return !1;
  }
}
function of(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function af(e) {
  if (we) {
    var t = Tt;
    if (t) {
      var r = t;
      if (!dv(e, t)) {
        if (of(e))
          throw Error(R(418));
        t = an(r.nextSibling);
        var n = Pt;
        t && dv(e, t) ? _1(n, r) : (e.flags = e.flags & -4097 | 2, we = !1, Pt = e);
      }
    } else {
      if (of(e))
        throw Error(R(418));
      e.flags = e.flags & -4097 | 2, we = !1, Pt = e;
    }
  }
}
function fv(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pt = e;
}
function Ts(e) {
  if (e !== Pt)
    return !1;
  if (!we)
    return fv(e), we = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ef(e.type, e.memoizedProps)), t && (t = Tt)) {
    if (of(e))
      throw T1(), Error(R(418));
    for (; t; )
      _1(e, t), t = an(t.nextSibling);
  }
  if (fv(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Tt = an(e.nextSibling);
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
    Tt = Pt ? an(e.stateNode.nextSibling) : null;
  return !0;
}
function T1() {
  for (var e = Tt; e; )
    e = an(e.nextSibling);
}
function ti() {
  Tt = Pt = null, we = !1;
}
function zh(e) {
  er === null ? er = [e] : er.push(e);
}
var n2 = jr.ReactCurrentBatchConfig;
function Zt(e, t) {
  if (e && e.defaultProps) {
    t = Te({}, t), e = e.defaultProps;
    for (var r in e)
      t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Ll = bn(null), Ol = null, _o = null, Ih = null;
function Fh() {
  Ih = _o = Ol = null;
}
function Dh(e) {
  var t = Ll.current;
  ye(Ll), e._currentValue = t;
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
  Ol = e, Ih = _o = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (vt = !0), e.firstContext = null);
}
function Yt(e) {
  var t = e._currentValue;
  if (Ih !== e)
    if (e = { context: e, memoizedValue: t, next: null }, _o === null) {
      if (Ol === null)
        throw Error(R(308));
      _o = e, Ol.dependencies = { lanes: 0, firstContext: e };
    } else
      _o = _o.next = e;
  return t;
}
var Dn = null;
function Lh(e) {
  Dn === null ? Dn = [e] : Dn.push(e);
}
function P1(e, t, r, n) {
  var o = t.interleaved;
  return o === null ? (r.next = r, Lh(t)) : (r.next = o.next, o.next = r), t.interleaved = r, Lr(e, n);
}
function Lr(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var Yr = !1;
function Oh(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function E1(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Rr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function sn(e, t, r) {
  var n = e.updateQueue;
  if (n === null)
    return null;
  if (n = n.shared, ee & 2) {
    var o = n.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, Lr(e, r);
  }
  return o = n.interleaved, o === null ? (t.next = t, Lh(n)) : (t.next = o.next, o.next = t), n.interleaved = t, Lr(e, r);
}
function el(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, kh(e, r);
  }
}
function hv(e, t) {
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
function Nl(e, t, r, n) {
  var o = e.updateQueue;
  Yr = !1;
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
              d = Te({}, d, f);
              break e;
            case 2:
              Yr = !0;
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
function pv(e, t, r) {
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
var $1 = new Py.Component().refs;
function lf(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : Te({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var xu = { isMounted: function(e) {
  return (e = e._reactInternals) ? ro(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = ut(), o = un(e), i = Rr(n, o);
  i.payload = t, r != null && (i.callback = r), t = sn(e, i, o), t !== null && (nr(t, e, o, n), el(t, e, o));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = ut(), o = un(e), i = Rr(n, o);
  i.tag = 1, i.payload = t, r != null && (i.callback = r), t = sn(e, i, o), t !== null && (nr(t, e, o, n), el(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = ut(), n = un(e), o = Rr(r, n);
  o.tag = 2, t != null && (o.callback = t), t = sn(e, o, n), t !== null && (nr(t, e, n, r), el(t, e, n));
} };
function mv(e, t, r, n, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !ba(r, n) || !ba(o, i) : !0;
}
function A1(e, t, r) {
  var n = !1, o = pn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Yt(i) : (o = yt(t) ? Yn : ot.current, n = t.contextTypes, i = (n = n != null) ? ei(e, o) : pn), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = xu, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function vv(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && xu.enqueueReplaceState(t, t.state, null);
}
function uf(e, t, r, n) {
  var o = e.stateNode;
  o.props = r, o.state = e.memoizedState, o.refs = $1, Oh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Yt(i) : (i = yt(t) ? Yn : ot.current, o.context = ei(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (lf(e, t, i, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && xu.enqueueReplaceState(o, o.state, null), Nl(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function _i(e, t, r) {
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
        s === $1 && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(R(284));
    if (!r._owner)
      throw Error(R(290, e));
  }
  return e;
}
function Ps(e, t) {
  throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function gv(e) {
  var t = e._init;
  return t(e._payload);
}
function R1(e) {
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
    return m = cn(m, h), m.index = 0, m.sibling = null, m;
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
    var _ = v.type;
    return _ === go ? c(m, h, v.props.children, w, v.key) : h !== null && (h.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Kr && gv(_) === h.type) ? (w = o(h, v.props), w.ref = _i(m, h, v), w.return = m, w) : (w = al(v.type, v.key, v.props, null, m.mode, w), w.ref = _i(m, h, v), w.return = m, w);
  }
  function u(m, h, v, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Wc(v, m.mode, w), h.return = m, h) : (h = o(h, v.children || []), h.return = m, h);
  }
  function c(m, h, v, w, _) {
    return h === null || h.tag !== 7 ? (h = jn(v, m.mode, w, _), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function d(m, h, v) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Vc("" + h, m.mode, v), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case vs:
          return v = al(h.type, h.key, h.props, null, m.mode, v), v.ref = _i(m, null, h), v.return = m, v;
        case vo:
          return h = Wc(h, m.mode, v), h.return = m, h;
        case Kr:
          var w = h._init;
          return d(m, w(h._payload), v);
      }
      if (Di(h) || Si(h))
        return h = jn(h, m.mode, v, null), h.return = m, h;
      Ps(m, h);
    }
    return null;
  }
  function f(m, h, v, w) {
    var _ = h !== null ? h.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return _ !== null ? null : s(m, h, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case vs:
          return v.key === _ ? l(m, h, v, w) : null;
        case vo:
          return v.key === _ ? u(m, h, v, w) : null;
        case Kr:
          return _ = v._init, f(
            m,
            h,
            _(v._payload),
            w
          );
      }
      if (Di(v) || Si(v))
        return _ !== null ? null : c(m, h, v, w, null);
      Ps(m, v);
    }
    return null;
  }
  function p(m, h, v, w, _) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return m = m.get(v) || null, s(h, m, "" + w, _);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case vs:
          return m = m.get(w.key === null ? v : w.key) || null, l(h, m, w, _);
        case vo:
          return m = m.get(w.key === null ? v : w.key) || null, u(h, m, w, _);
        case Kr:
          var A = w._init;
          return p(m, h, v, A(w._payload), _);
      }
      if (Di(w) || Si(w))
        return m = m.get(v) || null, c(h, m, w, _, null);
      Ps(h, w);
    }
    return null;
  }
  function g(m, h, v, w) {
    for (var _ = null, A = null, P = h, $ = h = 0, M = null; P !== null && $ < v.length; $++) {
      P.index > $ ? (M = P, P = null) : M = P.sibling;
      var I = f(m, P, v[$], w);
      if (I === null) {
        P === null && (P = M);
        break;
      }
      e && P && I.alternate === null && t(m, P), h = i(I, h, $), A === null ? _ = I : A.sibling = I, A = I, P = M;
    }
    if ($ === v.length)
      return r(m, P), we && En(m, $), _;
    if (P === null) {
      for (; $ < v.length; $++)
        P = d(m, v[$], w), P !== null && (h = i(P, h, $), A === null ? _ = P : A.sibling = P, A = P);
      return we && En(m, $), _;
    }
    for (P = n(m, P); $ < v.length; $++)
      M = p(P, m, $, v[$], w), M !== null && (e && M.alternate !== null && P.delete(M.key === null ? $ : M.key), h = i(M, h, $), A === null ? _ = M : A.sibling = M, A = M);
    return e && P.forEach(function(H) {
      return t(m, H);
    }), we && En(m, $), _;
  }
  function y(m, h, v, w) {
    var _ = Si(v);
    if (typeof _ != "function")
      throw Error(R(150));
    if (v = _.call(v), v == null)
      throw Error(R(151));
    for (var A = _ = null, P = h, $ = h = 0, M = null, I = v.next(); P !== null && !I.done; $++, I = v.next()) {
      P.index > $ ? (M = P, P = null) : M = P.sibling;
      var H = f(m, P, I.value, w);
      if (H === null) {
        P === null && (P = M);
        break;
      }
      e && P && H.alternate === null && t(m, P), h = i(H, h, $), A === null ? _ = H : A.sibling = H, A = H, P = M;
    }
    if (I.done)
      return r(
        m,
        P
      ), we && En(m, $), _;
    if (P === null) {
      for (; !I.done; $++, I = v.next())
        I = d(m, I.value, w), I !== null && (h = i(I, h, $), A === null ? _ = I : A.sibling = I, A = I);
      return we && En(m, $), _;
    }
    for (P = n(m, P); !I.done; $++, I = v.next())
      I = p(P, m, $, I.value, w), I !== null && (e && I.alternate !== null && P.delete(I.key === null ? $ : I.key), h = i(I, h, $), A === null ? _ = I : A.sibling = I, A = I);
    return e && P.forEach(function(ce) {
      return t(m, ce);
    }), we && En(m, $), _;
  }
  function x(m, h, v, w) {
    if (typeof v == "object" && v !== null && v.type === go && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case vs:
          e: {
            for (var _ = v.key, A = h; A !== null; ) {
              if (A.key === _) {
                if (_ = v.type, _ === go) {
                  if (A.tag === 7) {
                    r(m, A.sibling), h = o(A, v.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (A.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Kr && gv(_) === A.type) {
                  r(m, A.sibling), h = o(A, v.props), h.ref = _i(m, A, v), h.return = m, m = h;
                  break e;
                }
                r(m, A);
                break;
              } else
                t(m, A);
              A = A.sibling;
            }
            v.type === go ? (h = jn(v.props.children, m.mode, w, v.key), h.return = m, m = h) : (w = al(v.type, v.key, v.props, null, m.mode, w), w.ref = _i(m, h, v), w.return = m, m = w);
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
        case Kr:
          return A = v._init, x(m, h, A(v._payload), w);
      }
      if (Di(v))
        return g(m, h, v, w);
      if (Si(v))
        return y(m, h, v, w);
      Ps(m, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (r(m, h.sibling), h = o(h, v), h.return = m, m = h) : (r(m, h), h = Vc(v, m.mode, w), h.return = m, m = h), a(m)) : r(m, h);
  }
  return x;
}
var ri = R1(!0), M1 = R1(!1), Ya = {}, mr = bn(Ya), ka = bn(Ya), Ca = bn(Ya);
function Ln(e) {
  if (e === Ya)
    throw Error(R(174));
  return e;
}
function Nh(e, t) {
  switch (fe(Ca, t), fe(ka, e), fe(mr, Ya), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Bd(t, e);
  }
  ye(mr), fe(mr, t);
}
function ni() {
  ye(mr), ye(ka), ye(Ca);
}
function z1(e) {
  Ln(Ca.current);
  var t = Ln(mr.current), r = Bd(t, e.type);
  t !== r && (fe(ka, e), fe(mr, r));
}
function Bh(e) {
  ka.current === e && (ye(mr), ye(ka));
}
var ke = bn(0);
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
function jh() {
  for (var e = 0; e < Dc.length; e++)
    Dc[e]._workInProgressVersionPrimary = null;
  Dc.length = 0;
}
var tl = jr.ReactCurrentDispatcher, Lc = jr.ReactCurrentBatchConfig, qn = 0, _e = null, je = null, He = null, jl = !1, Qi = !1, _a = 0, o2 = 0;
function et() {
  throw Error(R(321));
}
function Vh(e, t) {
  if (t === null)
    return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!or(e[r], t[r]))
      return !1;
  return !0;
}
function Wh(e, t, r, n, o, i) {
  if (qn = i, _e = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, tl.current = e === null || e.memoizedState === null ? l2 : u2, e = r(n, o), Qi) {
    i = 0;
    do {
      if (Qi = !1, _a = 0, 25 <= i)
        throw Error(R(301));
      i += 1, He = je = null, t.updateQueue = null, tl.current = c2, e = r(n, o);
    } while (Qi);
  }
  if (tl.current = Vl, t = je !== null && je.next !== null, qn = 0, He = je = _e = null, jl = !1, t)
    throw Error(R(300));
  return e;
}
function Uh() {
  var e = _a !== 0;
  return _a = 0, e;
}
function sr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return He === null ? _e.memoizedState = He = e : He = He.next = e, He;
}
function Xt() {
  if (je === null) {
    var e = _e.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = je.next;
  var t = He === null ? _e.memoizedState : He.next;
  if (t !== null)
    He = t, je = e;
  else {
    if (e === null)
      throw Error(R(310));
    je = e, e = { memoizedState: je.memoizedState, baseState: je.baseState, baseQueue: je.baseQueue, queue: je.queue, next: null }, He === null ? _e.memoizedState = He = e : He = He.next = e;
  }
  return He;
}
function Ta(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Oc(e) {
  var t = Xt(), r = t.queue;
  if (r === null)
    throw Error(R(311));
  r.lastRenderedReducer = e;
  var n = je, o = n.baseQueue, i = r.pending;
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
        l === null ? (s = l = d, a = n) : l = l.next = d, _e.lanes |= c, Qn |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = n : l.next = s, or(n, t.memoizedState) || (vt = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, _e.lanes |= i, Qn |= i, o = o.next;
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
function I1() {
}
function F1(e, t) {
  var r = _e, n = Xt(), o = t(), i = !or(n.memoizedState, o);
  if (i && (n.memoizedState = o, vt = !0), n = n.queue, Hh(O1.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || He !== null && He.memoizedState.tag & 1) {
    if (r.flags |= 2048, Pa(9, L1.bind(null, r, n, o, t), void 0, null), Ge === null)
      throw Error(R(349));
    qn & 30 || D1(r, t, o);
  }
  return o;
}
function D1(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = _e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, _e.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function L1(e, t, r, n) {
  t.value = r, t.getSnapshot = n, N1(t) && B1(e);
}
function O1(e, t, r) {
  return r(function() {
    N1(t) && B1(e);
  });
}
function N1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !or(e, r);
  } catch {
    return !0;
  }
}
function B1(e) {
  var t = Lr(e, 1);
  t !== null && nr(t, e, 1, -1);
}
function yv(e) {
  var t = sr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ta, lastRenderedState: e }, t.queue = e, e = e.dispatch = s2.bind(null, _e, e), [t.memoizedState, e];
}
function Pa(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = _e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, _e.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function j1() {
  return Xt().memoizedState;
}
function rl(e, t, r, n) {
  var o = sr();
  _e.flags |= e, o.memoizedState = Pa(1 | t, r, void 0, n === void 0 ? null : n);
}
function wu(e, t, r, n) {
  var o = Xt();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (je !== null) {
    var a = je.memoizedState;
    if (i = a.destroy, n !== null && Vh(n, a.deps)) {
      o.memoizedState = Pa(t, r, i, n);
      return;
    }
  }
  _e.flags |= e, o.memoizedState = Pa(1 | t, r, i, n);
}
function bv(e, t) {
  return rl(8390656, 8, e, t);
}
function Hh(e, t) {
  return wu(2048, 8, e, t);
}
function V1(e, t) {
  return wu(4, 2, e, t);
}
function W1(e, t) {
  return wu(4, 4, e, t);
}
function U1(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function H1(e, t, r) {
  return r = r != null ? r.concat([e]) : null, wu(4, 4, U1.bind(null, t, e), r);
}
function Gh() {
}
function G1(e, t) {
  var r = Xt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Vh(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function K1(e, t) {
  var r = Xt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Vh(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function Y1(e, t, r) {
  return qn & 21 ? (or(r, t) || (r = Qy(), _e.lanes |= r, Qn |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, vt = !0), e.memoizedState = r);
}
function i2(e, t) {
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
function X1() {
  return Xt().memoizedState;
}
function a2(e, t, r) {
  var n = un(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, q1(e))
    Q1(t, r);
  else if (r = P1(e, t, r, n), r !== null) {
    var o = ut();
    nr(r, e, n, o), Z1(r, t, n);
  }
}
function s2(e, t, r) {
  var n = un(e), o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (q1(e))
    Q1(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, r);
        if (o.hasEagerState = !0, o.eagerState = s, or(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Lh(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    r = P1(e, t, o, n), r !== null && (o = ut(), nr(r, e, n, o), Z1(r, t, n));
  }
}
function q1(e) {
  var t = e.alternate;
  return e === _e || t !== null && t === _e;
}
function Q1(e, t) {
  Qi = jl = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function Z1(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, kh(e, r);
  }
}
var Vl = { readContext: Yt, useCallback: et, useContext: et, useEffect: et, useImperativeHandle: et, useInsertionEffect: et, useLayoutEffect: et, useMemo: et, useReducer: et, useRef: et, useState: et, useDebugValue: et, useDeferredValue: et, useTransition: et, useMutableSource: et, useSyncExternalStore: et, useId: et, unstable_isNewReconciler: !1 }, l2 = { readContext: Yt, useCallback: function(e, t) {
  return sr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Yt, useEffect: bv, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, rl(
    4194308,
    4,
    U1.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return rl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return rl(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = sr();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = sr();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = a2.bind(null, _e, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = sr();
  return e = { current: e }, t.memoizedState = e;
}, useState: yv, useDebugValue: Gh, useDeferredValue: function(e) {
  return sr().memoizedState = e;
}, useTransition: function() {
  var e = yv(!1), t = e[0];
  return e = i2.bind(null, e[1]), sr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = _e, o = sr();
  if (we) {
    if (r === void 0)
      throw Error(R(407));
    r = r();
  } else {
    if (r = t(), Ge === null)
      throw Error(R(349));
    qn & 30 || D1(n, t, r);
  }
  o.memoizedState = r;
  var i = { value: r, getSnapshot: t };
  return o.queue = i, bv(O1.bind(
    null,
    n,
    i,
    e
  ), [e]), n.flags |= 2048, Pa(9, L1.bind(null, n, i, r, t), void 0, null), r;
}, useId: function() {
  var e = sr(), t = Ge.identifierPrefix;
  if (we) {
    var r = Er, n = Pr;
    r = (n & ~(1 << 32 - rr(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = _a++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else
    r = o2++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, u2 = {
  readContext: Yt,
  useCallback: G1,
  useContext: Yt,
  useEffect: Hh,
  useImperativeHandle: H1,
  useInsertionEffect: V1,
  useLayoutEffect: W1,
  useMemo: K1,
  useReducer: Oc,
  useRef: j1,
  useState: function() {
    return Oc(Ta);
  },
  useDebugValue: Gh,
  useDeferredValue: function(e) {
    var t = Xt();
    return Y1(t, je.memoizedState, e);
  },
  useTransition: function() {
    var e = Oc(Ta)[0], t = Xt().memoizedState;
    return [e, t];
  },
  useMutableSource: I1,
  useSyncExternalStore: F1,
  useId: X1,
  unstable_isNewReconciler: !1
}, c2 = { readContext: Yt, useCallback: G1, useContext: Yt, useEffect: Hh, useImperativeHandle: H1, useInsertionEffect: V1, useLayoutEffect: W1, useMemo: K1, useReducer: Nc, useRef: j1, useState: function() {
  return Nc(Ta);
}, useDebugValue: Gh, useDeferredValue: function(e) {
  var t = Xt();
  return je === null ? t.memoizedState = e : Y1(t, je.memoizedState, e);
}, useTransition: function() {
  var e = Nc(Ta)[0], t = Xt().memoizedState;
  return [e, t];
}, useMutableSource: I1, useSyncExternalStore: F1, useId: X1, unstable_isNewReconciler: !1 };
function oi(e, t) {
  try {
    var r = "", n = t;
    do
      r += OC(n), n = n.return;
    while (n);
    var o = r;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Bc(e, t, r) {
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
var d2 = typeof WeakMap == "function" ? WeakMap : Map;
function J1(e, t, r) {
  r = Rr(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    Ul || (Ul = !0, Sf = n), cf(e, t);
  }, r;
}
function eb(e, t, r) {
  r = Rr(-1, r), r.tag = 3;
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
    cf(e, t), typeof n != "function" && (ln === null ? ln = /* @__PURE__ */ new Set([this]) : ln.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), r;
}
function Sv(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new d2();
    var o = /* @__PURE__ */ new Set();
    n.set(t, o);
  } else
    o = n.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), n.set(t, o));
  o.has(r) || (o.add(r), e = _2.bind(null, e, t, r), t.then(e, e));
}
function xv(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function wv(e, t, r, n, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Rr(-1, 1), t.tag = 2, sn(r, t, 1))), r.lanes |= 1), e);
}
var f2 = jr.ReactCurrentOwner, vt = !1;
function st(e, t, r, n) {
  t.child = e === null ? M1(t, null, r, n) : ri(t, e.child, r, n);
}
function kv(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return Wo(t, o), n = Wh(e, t, r, n, i, o), r = Uh(), e !== null && !vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Or(e, t, o)) : (we && r && Rh(t), t.flags |= 1, st(e, t, n, o), t.child);
}
function Cv(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" && !ep(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, tb(e, t, i, n, o)) : (e = al(r.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (r = r.compare, r = r !== null ? r : ba, r(a, n) && e.ref === t.ref)
      return Or(e, t, o);
  }
  return t.flags |= 1, e = cn(i, n), e.ref = t.ref, e.return = t, t.child = e;
}
function tb(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ba(i, n) && e.ref === t.ref)
      if (vt = !1, t.pendingProps = n = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (vt = !0);
      else
        return t.lanes = e.lanes, Or(e, t, o);
  }
  return df(e, t, r, n, o);
}
function rb(e, t, r) {
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
function nb(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function df(e, t, r, n, o) {
  var i = yt(r) ? Yn : ot.current;
  return i = ei(t, i), Wo(t, o), r = Wh(e, t, r, n, i, o), n = Uh(), e !== null && !vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Or(e, t, o)) : (we && n && Rh(t), t.flags |= 1, st(e, t, r, o), t.child);
}
function _v(e, t, r, n, o) {
  if (yt(r)) {
    var i = !0;
    Il(t);
  } else
    i = !1;
  if (Wo(t, o), t.stateNode === null)
    nl(e, t), A1(t, r, n), uf(t, r, n, o), n = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = Yt(u) : (u = yt(r) ? Yn : ot.current, u = ei(t, u));
    var c = r.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || l !== u) && vv(t, a, n, u), Yr = !1;
    var f = t.memoizedState;
    a.state = f, Nl(t, n, a, o), l = t.memoizedState, s !== n || f !== l || gt.current || Yr ? (typeof c == "function" && (lf(t, r, c, n), l = t.memoizedState), (s = Yr || mv(t, r, s, n, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = u, n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    a = t.stateNode, E1(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Zt(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = Yt(l) : (l = yt(r) ? Yn : ot.current, l = ei(t, l));
    var p = r.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && vv(t, a, n, l), Yr = !1, f = t.memoizedState, a.state = f, Nl(t, n, a, o);
    var g = t.memoizedState;
    s !== d || f !== g || gt.current || Yr ? (typeof p == "function" && (lf(t, r, p, n), g = t.memoizedState), (u = Yr || mv(t, r, u, n, f, g, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, g, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, g, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = g), a.props = n, a.state = g, a.context = l, n = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return ff(e, t, r, n, i, o);
}
function ff(e, t, r, n, o, i) {
  nb(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a)
    return o && cv(t, r, !1), Or(e, t, i);
  n = t.stateNode, f2.current = t;
  var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && a ? (t.child = ri(t, e.child, null, i), t.child = ri(t, null, s, i)) : st(e, t, s, i), t.memoizedState = n.state, o && cv(t, r, !0), t.child;
}
function ob(e) {
  var t = e.stateNode;
  t.pendingContext ? uv(e, t.pendingContext, t.pendingContext !== t.context) : t.context && uv(e, t.context, !1), Nh(e, t.containerInfo);
}
function Tv(e, t, r, n, o) {
  return ti(), zh(o), t.flags |= 256, st(e, t, r, n), t.child;
}
var hf = { dehydrated: null, treeContext: null, retryLane: 0 };
function pf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ib(e, t, r) {
  var n = t.pendingProps, o = ke.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), fe(ke, o & 1), e === null)
    return af(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = _u(a, n, 0, null), e = jn(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = pf(r), t.memoizedState = hf, e) : Kh(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return h2(e, t, a, n, s, o, r);
  if (i) {
    i = n.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(a & 1) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = cn(o, l), n.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = cn(s, i) : (i = jn(i, a, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, a = e.child.memoizedState, a = a === null ? pf(r) : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~r, t.memoizedState = hf, n;
  }
  return i = e.child, e = i.sibling, n = cn(i, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function Kh(e, t) {
  return t = _u({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Es(e, t, r, n) {
  return n !== null && zh(n), ri(t, e.child, null, r), e = Kh(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function h2(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = Bc(Error(R(422))), Es(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, o = t.mode, n = _u({ mode: "visible", children: n.children }, o, 0, null), i = jn(i, o, a, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, t.mode & 1 && ri(t, e.child, null, a), t.child.memoizedState = pf(a), t.memoizedState = hf, i);
  if (!(t.mode & 1))
    return Es(e, t, a, null);
  if (o.data === "$!") {
    if (n = o.nextSibling && o.nextSibling.dataset, n)
      var s = n.dgst;
    return n = s, i = Error(R(419)), n = Bc(i, n, void 0), Es(e, t, a, n);
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
      o = o & (n.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Lr(e, o), nr(n, e, o, -1));
    }
    return Jh(), n = Bc(Error(R(421))), Es(e, t, a, n);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = T2.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Tt = an(o.nextSibling), Pt = t, we = !0, er = null, e !== null && (Vt[Wt++] = Pr, Vt[Wt++] = Er, Vt[Wt++] = Xn, Pr = e.id, Er = e.overflow, Xn = t), t = Kh(t, n.children), t.flags |= 4096, t);
}
function Pv(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), sf(e.return, t, r);
}
function jc(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = o);
}
function ab(e, t, r) {
  var n = t.pendingProps, o = n.revealOrder, i = n.tail;
  if (st(e, t, n.children, r), n = ke.current, n & 2)
    n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Pv(e, r, t);
          else if (e.tag === 19)
            Pv(e, r, t);
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
  if (fe(ke, n), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          e = r.alternate, e !== null && Bl(e) === null && (o = r), r = r.sibling;
        r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), jc(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Bl(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = r, r = o, o = e;
        }
        jc(t, !0, r, null, i);
        break;
      case "together":
        jc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function nl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Or(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), Qn |= t.lanes, !(r & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, r = cn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      e = e.sibling, r = r.sibling = cn(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function p2(e, t, r) {
  switch (t.tag) {
    case 3:
      ob(t), ti();
      break;
    case 5:
      z1(t);
      break;
    case 1:
      yt(t.type) && Il(t);
      break;
    case 4:
      Nh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, o = t.memoizedProps.value;
      fe(Ll, n._currentValue), n._currentValue = o;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (fe(ke, ke.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? ib(e, t, r) : (fe(ke, ke.current & 1), e = Or(e, t, r), e !== null ? e.sibling : null);
      fe(ke, ke.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n)
          return ab(e, t, r);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), fe(ke, ke.current), n)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, rb(e, t, r);
  }
  return Or(e, t, r);
}
var sb, mf, lb, ub;
sb = function(e, t) {
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
lb = function(e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    e = t.stateNode, Ln(mr.current);
    var i = null;
    switch (r) {
      case "input":
        o = Dd(e, o), n = Dd(e, n), i = [];
        break;
      case "select":
        o = Te({}, o, { value: void 0 }), n = Te({}, n, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Nd(e, o), n = Nd(e, n), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Ml);
    }
    jd(r, n);
    var a;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (r || (r = {}), r[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (fa.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (fa.hasOwnProperty(u) ? (l != null && u === "onScroll" && ve("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ub = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Ti(e, t) {
  if (!we)
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
function m2(e, t, r) {
  var n = t.pendingProps;
  switch (Mh(t), t.tag) {
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
      return yt(t.type) && zl(), tt(t), null;
    case 3:
      return n = t.stateNode, ni(), ye(gt), ye(ot), jh(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ts(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, er !== null && (kf(er), er = null))), mf(e, t), tt(t), null;
    case 5:
      Bh(t);
      var o = Ln(Ca.current);
      if (r = t.type, e !== null && t.stateNode != null)
        lb(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null)
            throw Error(R(166));
          return tt(t), null;
        }
        if (e = Ln(mr.current), Ts(t)) {
          n = t.stateNode, r = t.type;
          var i = t.memoizedProps;
          switch (n[fr] = t, n[wa] = i, e = (t.mode & 1) !== 0, r) {
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
              for (o = 0; o < Oi.length; o++)
                ve(Oi[o], n);
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
              Dm(n, i), ve("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!i.multiple }, ve("invalid", n);
              break;
            case "textarea":
              Om(n, i), ve("invalid", n);
          }
          jd(r, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && _s(n.textContent, s, e), o = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && _s(
                n.textContent,
                s,
                e
              ), o = ["children", "" + s]) : fa.hasOwnProperty(a) && s != null && a === "onScroll" && ve("scroll", n);
            }
          switch (r) {
            case "input":
              gs(n), Lm(n, i, !0);
              break;
            case "textarea":
              gs(n), Nm(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = Ml);
          }
          n = o, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Dy(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, { is: n.is }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[fr] = t, e[wa] = n, sb(e, t, !1, !1), t.stateNode = e;
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
                for (o = 0; o < Oi.length; o++)
                  ve(Oi[o], e);
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
                Dm(e, n), o = Dd(e, n), ve("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, o = Te({}, n, { value: void 0 }), ve("invalid", e);
                break;
              case "textarea":
                Om(e, n), o = Nd(e, n), ve("invalid", e);
                break;
              default:
                o = n;
            }
            jd(r, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? Ny(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Ly(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && ha(e, l) : typeof l == "number" && ha(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (fa.hasOwnProperty(i) ? l != null && i === "onScroll" && ve("scroll", e) : l != null && gh(e, i, l, a));
              }
            switch (r) {
              case "input":
                gs(e), Lm(e, n, !1);
                break;
              case "textarea":
                gs(e), Nm(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + hn(n.value));
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
                typeof o.onClick == "function" && (e.onclick = Ml);
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
        ub(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null)
          throw Error(R(166));
        if (r = Ln(Ca.current), Ln(mr.current), Ts(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[fr] = t, (i = n.nodeValue !== r) && (e = Pt, e !== null))
            switch (e.tag) {
              case 3:
                _s(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && _s(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[fr] = t, t.stateNode = n;
      }
      return tt(t), null;
    case 13:
      if (ye(ke), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (we && Tt !== null && t.mode & 1 && !(t.flags & 128))
          T1(), ti(), t.flags |= 98560, i = !1;
        else if (i = Ts(t), n !== null && n.dehydrated !== null) {
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
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || ke.current & 1 ? Ve === 0 && (Ve = 3) : Jh())), t.updateQueue !== null && (t.flags |= 4), tt(t), null);
    case 4:
      return ni(), mf(e, t), e === null && Sa(t.stateNode.containerInfo), tt(t), null;
    case 10:
      return Dh(t.type._context), tt(t), null;
    case 17:
      return yt(t.type) && zl(), tt(t), null;
    case 19:
      if (ye(ke), i = t.memoizedState, i === null)
        return tt(t), null;
      if (n = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (n)
          Ti(i, !1);
        else {
          if (Ve !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = Bl(e), a !== null) {
                for (t.flags |= 128, Ti(i, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; )
                  i = r, e = n, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
                return fe(ke, ke.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Fe() > ii && (t.flags |= 128, n = !0, Ti(i, !1), t.lanes = 4194304);
        }
      else {
        if (!n)
          if (e = Bl(a), e !== null) {
            if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Ti(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !we)
              return tt(t), null;
          } else
            2 * Fe() - i.renderingStartTime > ii && r !== 1073741824 && (t.flags |= 128, n = !0, Ti(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (r = i.last, r !== null ? r.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Fe(), t.sibling = null, r = ke.current, fe(ke, n ? r & 1 | 2 : r & 1), t) : (tt(t), null);
    case 22:
    case 23:
      return Zh(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? _t & 1073741824 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function v2(e, t) {
  switch (Mh(t), t.tag) {
    case 1:
      return yt(t.type) && zl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ni(), ye(gt), ye(ot), jh(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Bh(t), null;
    case 13:
      if (ye(ke), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(R(340));
        ti();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ye(ke), null;
    case 4:
      return ni(), null;
    case 10:
      return Dh(t.type._context), null;
    case 22:
    case 23:
      return Zh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var $s = !1, nt = !1, g2 = typeof WeakSet == "function" ? WeakSet : Set, D = null;
function To(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Ae(e, t, n);
      }
    else
      r.current = null;
}
function vf(e, t, r) {
  try {
    r();
  } catch (n) {
    Ae(e, t, n);
  }
}
var Ev = !1;
function y2(e, t) {
  if (Zd = $l, e = h1(), Ah(e)) {
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
  for (Jd = { focusedElem: e, selectionRange: r }, $l = !1, D = t; D !== null; )
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
          Ae(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, D = e;
          break;
        }
        D = t.return;
      }
  return g = Ev, Ev = !1, g;
}
function Zi(e, t, r) {
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
function ku(e, t) {
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
function cb(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, cb(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[fr], delete t[wa], delete t[rf], delete t[e2], delete t[t2])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function db(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $v(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || db(e.return))
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
    e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Ml));
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
function Vr(e, t, r) {
  for (r = r.child; r !== null; )
    fb(e, t, r), r = r.sibling;
}
function fb(e, t, r) {
  if (pr && typeof pr.onCommitFiberUnmount == "function")
    try {
      pr.onCommitFiberUnmount(mu, r);
    } catch {
    }
  switch (r.tag) {
    case 5:
      nt || To(r, t);
    case 6:
      var n = Xe, o = Jt;
      Xe = null, Vr(e, t, r), Xe = n, Jt = o, Xe !== null && (Jt ? (e = Xe, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Xe.removeChild(r.stateNode));
      break;
    case 18:
      Xe !== null && (Jt ? (e = Xe, r = r.stateNode, e.nodeType === 8 ? Ic(e.parentNode, r) : e.nodeType === 1 && Ic(e, r), ga(e)) : Ic(Xe, r.stateNode));
      break;
    case 4:
      n = Xe, o = Jt, Xe = r.stateNode.containerInfo, Jt = !0, Vr(e, t, r), Xe = n, Jt = o;
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
      Vr(e, t, r);
      break;
    case 1:
      if (!nt && (To(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function"))
        try {
          n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
        } catch (s) {
          Ae(r, t, s);
        }
      Vr(e, t, r);
      break;
    case 21:
      Vr(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (nt = (n = nt) || r.memoizedState !== null, Vr(e, t, r), nt = n) : Vr(e, t, r);
      break;
    default:
      Vr(e, t, r);
  }
}
function Av(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new g2()), t.forEach(function(n) {
      var o = P2.bind(null, e, n);
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
        fb(i, a, o), Xe = null, Jt = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        Ae(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      hb(t, e), t = t.sibling;
}
function hb(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (qt(t, e), ir(e), n & 4) {
        try {
          Zi(3, e, e.return), ku(3, e);
        } catch (y) {
          Ae(e, e.return, y);
        }
        try {
          Zi(5, e, e.return);
        } catch (y) {
          Ae(e, e.return, y);
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
          ha(o, "");
        } catch (y) {
          Ae(e, e.return, y);
        }
      }
      if (n & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = r !== null ? r.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && Iy(o, i), Vd(s, a);
            var u = Vd(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? Ny(o, d) : c === "dangerouslySetInnerHTML" ? Ly(o, d) : c === "children" ? ha(o, d) : gh(o, c, d, u);
            }
            switch (s) {
              case "input":
                Ld(o, i);
                break;
              case "textarea":
                Fy(o, i);
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
            o[wa] = i;
          } catch (y) {
            Ae(e, e.return, y);
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
          Ae(e, e.return, y);
        }
      }
      break;
    case 3:
      if (qt(t, e), ir(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
        try {
          ga(t.containerInfo);
        } catch (y) {
          Ae(e, e.return, y);
        }
      break;
    case 4:
      qt(t, e), ir(e);
      break;
    case 13:
      qt(t, e), ir(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (qh = Fe())), n & 4 && Av(e);
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
                  Zi(4, f, f.return);
                  break;
                case 1:
                  To(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    n = f, r = f.return;
                    try {
                      t = n, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (y) {
                      Ae(n, r, y);
                    }
                  }
                  break;
                case 5:
                  To(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Mv(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, D = p) : Mv(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = Oy("display", a));
                } catch (y) {
                  Ae(e, e.return, y);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (y) {
                  Ae(e, e.return, y);
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
      qt(t, e), ir(e), n & 4 && Av(e);
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
          if (db(r)) {
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
          n.flags & 32 && (ha(o, ""), n.flags &= -33);
          var i = $v(e);
          bf(e, i, o);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo, s = $v(e);
          yf(e, s, a);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      Ae(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function b2(e, t, r) {
  D = e, pb(e);
}
function pb(e, t, r) {
  for (var n = (e.mode & 1) !== 0; D !== null; ) {
    var o = D, i = o.child;
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || $s;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || nt;
        s = $s;
        var u = nt;
        if ($s = a, (nt = l) && !u)
          for (D = o; D !== null; )
            a = D, l = a.child, a.tag === 22 && a.memoizedState !== null ? zv(o) : l !== null ? (l.return = a, D = l) : zv(o);
        for (; i !== null; )
          D = i, pb(i), i = i.sibling;
        D = o, $s = s, nt = u;
      }
      Rv(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, D = i) : Rv(e);
  }
}
function Rv(e) {
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
              nt || ku(5, t);
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
              i !== null && pv(t, i, n);
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
                pv(t, a, r);
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
                    d !== null && ga(d);
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
        Ae(t, t.return, f);
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
function Mv(e) {
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
function zv(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            ku(4, t);
          } catch (l) {
            Ae(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              Ae(t, o, l);
            }
          }
          var i = t.return;
          try {
            gf(t);
          } catch (l) {
            Ae(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            gf(t);
          } catch (l) {
            Ae(t, a, l);
          }
      }
    } catch (l) {
      Ae(t, t.return, l);
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
var S2 = Math.ceil, Wl = jr.ReactCurrentDispatcher, Yh = jr.ReactCurrentOwner, Gt = jr.ReactCurrentBatchConfig, ee = 0, Ge = null, Ne = null, Qe = 0, _t = 0, Po = bn(0), Ve = 0, Ea = null, Qn = 0, Cu = 0, Xh = 0, Ji = null, pt = null, qh = 0, ii = 1 / 0, kr = null, Ul = !1, Sf = null, ln = null, As = !1, en = null, Hl = 0, ea = 0, xf = null, ol = -1, il = 0;
function ut() {
  return ee & 6 ? Fe() : ol !== -1 ? ol : ol = Fe();
}
function un(e) {
  return e.mode & 1 ? ee & 2 && Qe !== 0 ? Qe & -Qe : n2.transition !== null ? (il === 0 && (il = Qy()), il) : (e = se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : o1(e.type)), e) : 1;
}
function nr(e, t, r, n) {
  if (50 < ea)
    throw ea = 0, xf = null, Error(R(185));
  Ha(e, r, n), (!(ee & 2) || e !== Ge) && (e === Ge && (!(ee & 2) && (Cu |= r), Ve === 4 && Qr(e, Qe)), bt(e, n), r === 1 && ee === 0 && !(t.mode & 1) && (ii = Fe() + 500, Su && Sn()));
}
function bt(e, t) {
  var r = e.callbackNode;
  n_(e, t);
  var n = El(e, e === Ge ? Qe : 0);
  if (n === 0)
    r !== null && Vm(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && Vm(r), t === 1)
      e.tag === 0 ? r2(Iv.bind(null, e)) : k1(Iv.bind(null, e)), Z_(function() {
        !(ee & 6) && Sn();
      }), r = null;
    else {
      switch (Zy(n)) {
        case 1:
          r = wh;
          break;
        case 4:
          r = Xy;
          break;
        case 16:
          r = Pl;
          break;
        case 536870912:
          r = qy;
          break;
        default:
          r = Pl;
      }
      r = wb(r, mb.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function mb(e, t) {
  if (ol = -1, il = 0, ee & 6)
    throw Error(R(327));
  var r = e.callbackNode;
  if (Uo() && e.callbackNode !== r)
    return null;
  var n = El(e, e === Ge ? Qe : 0);
  if (n === 0)
    return null;
  if (n & 30 || n & e.expiredLanes || t)
    t = Gl(e, n);
  else {
    t = n;
    var o = ee;
    ee |= 2;
    var i = gb();
    (Ge !== e || Qe !== t) && (kr = null, ii = Fe() + 500, Bn(e, t));
    do
      try {
        k2();
        break;
      } catch (s) {
        vb(e, s);
      }
    while (!0);
    Fh(), Wl.current = i, ee = o, Ne !== null ? t = 0 : (Ge = null, Qe = 0, t = Ve);
  }
  if (t !== 0) {
    if (t === 2 && (o = Kd(e), o !== 0 && (n = o, t = wf(e, o))), t === 1)
      throw r = Ea, Bn(e, 0), Qr(e, n), bt(e, Fe()), r;
    if (t === 6)
      Qr(e, n);
    else {
      if (o = e.current.alternate, !(n & 30) && !x2(o) && (t = Gl(e, n), t === 2 && (i = Kd(e), i !== 0 && (n = i, t = wf(e, i))), t === 1))
        throw r = Ea, Bn(e, 0), Qr(e, n), bt(e, Fe()), r;
      switch (e.finishedWork = o, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          $n(e, pt, kr);
          break;
        case 3:
          if (Qr(e, n), (n & 130023424) === n && (t = qh + 500 - Fe(), 10 < t)) {
            if (El(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & n) !== n) {
              ut(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = tf($n.bind(null, e, pt, kr), t);
            break;
          }
          $n(e, pt, kr);
          break;
        case 4:
          if (Qr(e, n), (n & 4194240) === n)
            break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - rr(n);
            i = 1 << a, a = t[a], a > o && (o = a), n &= ~i;
          }
          if (n = o, n = Fe() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * S2(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = tf($n.bind(null, e, pt, kr), n);
            break;
          }
          $n(e, pt, kr);
          break;
        case 5:
          $n(e, pt, kr);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return bt(e, Fe()), e.callbackNode === r ? mb.bind(null, e) : null;
}
function wf(e, t) {
  var r = Ji;
  return e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256), e = Gl(e, t), e !== 2 && (t = pt, pt = r, t !== null && kf(t)), e;
}
function kf(e) {
  pt === null ? pt = e : pt.push.apply(pt, e);
}
function x2(e) {
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
function Qr(e, t) {
  for (t &= ~Xh, t &= ~Cu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - rr(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function Iv(e) {
  if (ee & 6)
    throw Error(R(327));
  Uo();
  var t = El(e, 0);
  if (!(t & 1))
    return bt(e, Fe()), null;
  var r = Gl(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Kd(e);
    n !== 0 && (t = n, r = wf(e, n));
  }
  if (r === 1)
    throw r = Ea, Bn(e, 0), Qr(e, t), bt(e, Fe()), r;
  if (r === 6)
    throw Error(R(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, $n(e, pt, kr), bt(e, Fe()), null;
}
function Qh(e, t) {
  var r = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    ee = r, ee === 0 && (ii = Fe() + 500, Su && Sn());
  }
}
function Zn(e) {
  en !== null && en.tag === 0 && !(ee & 6) && Uo();
  var t = ee;
  ee |= 1;
  var r = Gt.transition, n = se;
  try {
    if (Gt.transition = null, se = 1, e)
      return e();
  } finally {
    se = n, Gt.transition = r, ee = t, !(ee & 6) && Sn();
  }
}
function Zh() {
  _t = Po.current, ye(Po);
}
function Bn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, Q_(r)), Ne !== null)
    for (r = Ne.return; r !== null; ) {
      var n = r;
      switch (Mh(n), n.tag) {
        case 1:
          n = n.type.childContextTypes, n != null && zl();
          break;
        case 3:
          ni(), ye(gt), ye(ot), jh();
          break;
        case 5:
          Bh(n);
          break;
        case 4:
          ni();
          break;
        case 13:
          ye(ke);
          break;
        case 19:
          ye(ke);
          break;
        case 10:
          Dh(n.type._context);
          break;
        case 22:
        case 23:
          Zh();
      }
      r = r.return;
    }
  if (Ge = e, Ne = e = cn(e.current, null), Qe = _t = t, Ve = 0, Ea = null, Xh = Cu = Qn = 0, pt = Ji = null, Dn !== null) {
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
function vb(e, t) {
  do {
    var r = Ne;
    try {
      if (Fh(), tl.current = Vl, jl) {
        for (var n = _e.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), n = n.next;
        }
        jl = !1;
      }
      if (qn = 0, He = je = _e = null, Qi = !1, _a = 0, Yh.current = null, r === null || r.return === null) {
        Ve = 1, Ea = t, Ne = null;
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
          var p = xv(a);
          if (p !== null) {
            p.flags &= -257, wv(p, a, s, i, t), p.mode & 1 && Sv(i, u, t), t = p, l = u;
            var g = t.updateQueue;
            if (g === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else
              g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Sv(i, u, t), Jh();
              break e;
            }
            l = Error(R(426));
          }
        } else if (we && s.mode & 1) {
          var x = xv(a);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), wv(x, a, s, i, t), zh(oi(l, s));
            break e;
          }
        }
        i = l = oi(l, s), Ve !== 4 && (Ve = 2), Ji === null ? Ji = [i] : Ji.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = J1(i, l, t);
              hv(i, m);
              break e;
            case 1:
              s = l;
              var h = i.type, v = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (ln === null || !ln.has(v)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = eb(i, s, t);
                hv(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      bb(r);
    } catch (_) {
      t = _, Ne === r && r !== null && (Ne = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function gb() {
  var e = Wl.current;
  return Wl.current = Vl, e === null ? Vl : e;
}
function Jh() {
  (Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4), Ge === null || !(Qn & 268435455) && !(Cu & 268435455) || Qr(Ge, Qe);
}
function Gl(e, t) {
  var r = ee;
  ee |= 2;
  var n = gb();
  (Ge !== e || Qe !== t) && (kr = null, Bn(e, t));
  do
    try {
      w2();
      break;
    } catch (o) {
      vb(e, o);
    }
  while (!0);
  if (Fh(), ee = r, Wl.current = n, Ne !== null)
    throw Error(R(261));
  return Ge = null, Qe = 0, Ve;
}
function w2() {
  for (; Ne !== null; )
    yb(Ne);
}
function k2() {
  for (; Ne !== null && !YC(); )
    yb(Ne);
}
function yb(e) {
  var t = xb(e.alternate, e, _t);
  e.memoizedProps = e.pendingProps, t === null ? bb(e) : Ne = t, Yh.current = null;
}
function bb(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = v2(r, t), r !== null) {
        r.flags &= 32767, Ne = r;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ve = 6, Ne = null;
        return;
      }
    } else if (r = m2(r, t, _t), r !== null) {
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
    Gt.transition = null, se = 1, C2(e, t, r, n);
  } finally {
    Gt.transition = o, se = n;
  }
  return null;
}
function C2(e, t, r, n) {
  do
    Uo();
  while (en !== null);
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
  if (o_(e, i), e === Ge && (Ne = Ge = null, Qe = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || As || (As = !0, wb(Pl, function() {
    return Uo(), null;
  })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
    i = Gt.transition, Gt.transition = null;
    var a = se;
    se = 1;
    var s = ee;
    ee |= 4, Yh.current = null, y2(e, r), hb(r, e), U_(Jd), $l = !!Zd, Jd = Zd = null, e.current = r, b2(r), XC(), ee = s, se = a, Gt.transition = i;
  } else
    e.current = r;
  if (As && (As = !1, en = e, Hl = o), i = e.pendingLanes, i === 0 && (ln = null), ZC(r.stateNode), bt(e, Fe()), t !== null)
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      o = t[r], n(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ul)
    throw Ul = !1, e = Sf, Sf = null, e;
  return Hl & 1 && e.tag !== 0 && Uo(), i = e.pendingLanes, i & 1 ? e === xf ? ea++ : (ea = 0, xf = e) : ea = 0, Sn(), null;
}
function Uo() {
  if (en !== null) {
    var e = Zy(Hl), t = Gt.transition, r = se;
    try {
      if (Gt.transition = null, se = 16 > e ? 16 : e, en === null)
        var n = !1;
      else {
        if (e = en, en = null, Hl = 0, ee & 6)
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
                      Zi(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, D = d;
                  else
                    for (; D !== null; ) {
                      c = D;
                      var f = c.sibling, p = c.return;
                      if (cb(c), c === u) {
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
                      Zi(9, i, i.return);
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
                        ku(9, s);
                    }
                  } catch (_) {
                    Ae(s, s.return, _);
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
        if (ee = o, Sn(), pr && typeof pr.onPostCommitFiberRoot == "function")
          try {
            pr.onPostCommitFiberRoot(mu, e);
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
function Fv(e, t, r) {
  t = oi(r, t), t = J1(e, t, 1), e = sn(e, t, 1), t = ut(), e !== null && (Ha(e, 1, t), bt(e, t));
}
function Ae(e, t, r) {
  if (e.tag === 3)
    Fv(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fv(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (ln === null || !ln.has(n))) {
          e = oi(r, e), e = eb(t, e, 1), t = sn(t, e, 1), e = ut(), t !== null && (Ha(t, 1, e), bt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function _2(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = ut(), e.pingedLanes |= e.suspendedLanes & r, Ge === e && (Qe & r) === r && (Ve === 4 || Ve === 3 && (Qe & 130023424) === Qe && 500 > Fe() - qh ? Bn(e, 0) : Xh |= r), bt(e, t);
}
function Sb(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ss, Ss <<= 1, !(Ss & 130023424) && (Ss = 4194304)) : t = 1);
  var r = ut();
  e = Lr(e, t), e !== null && (Ha(e, t, r), bt(e, r));
}
function T2(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), Sb(e, r);
}
function P2(e, t) {
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
  n !== null && n.delete(t), Sb(e, r);
}
var xb;
xb = function(e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || gt.current)
      vt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128))
        return vt = !1, p2(e, t, r);
      vt = !!(e.flags & 131072);
    }
  else
    vt = !1, we && t.flags & 1048576 && C1(t, Dl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      nl(e, t), e = t.pendingProps;
      var o = ei(t, ot.current);
      Wo(t, r), o = Wh(null, t, n, e, o, r);
      var i = Uh();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yt(n) ? (i = !0, Il(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Oh(t), o.updater = xu, t.stateNode = o, o._reactInternals = t, uf(t, n, e, r), t = ff(null, t, n, !0, i, r)) : (t.tag = 0, we && i && Rh(t), st(null, t, o, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (nl(e, t), e = t.pendingProps, o = n._init, n = o(n._payload), t.type = n, o = t.tag = $2(n), e = Zt(n, e), o) {
          case 0:
            t = df(null, t, n, e, r);
            break e;
          case 1:
            t = _v(null, t, n, e, r);
            break e;
          case 11:
            t = kv(null, t, n, e, r);
            break e;
          case 14:
            t = Cv(null, t, n, Zt(n.type, e), r);
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
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Zt(n, o), _v(e, t, n, o, r);
    case 3:
      e: {
        if (ob(t), e === null)
          throw Error(R(387));
        n = t.pendingProps, i = t.memoizedState, o = i.element, E1(e, t), Nl(t, n, null, r);
        var a = t.memoizedState;
        if (n = a.element, i.isDehydrated)
          if (i = { element: n, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = oi(Error(R(423)), t), t = Tv(e, t, n, r, o);
            break e;
          } else if (n !== o) {
            o = oi(Error(R(424)), t), t = Tv(e, t, n, r, o);
            break e;
          } else
            for (Tt = an(t.stateNode.containerInfo.firstChild), Pt = t, we = !0, er = null, r = M1(t, null, n, r), t.child = r; r; )
              r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (ti(), n === o) {
            t = Or(e, t, r);
            break e;
          }
          st(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return z1(t), e === null && af(t), n = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, ef(n, o) ? a = null : i !== null && ef(n, i) && (t.flags |= 32), nb(e, t), st(e, t, a, r), t.child;
    case 6:
      return e === null && af(t), null;
    case 13:
      return ib(e, t, r);
    case 4:
      return Nh(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = ri(t, null, n, r) : st(e, t, n, r), t.child;
    case 11:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Zt(n, o), kv(e, t, n, o, r);
    case 7:
      return st(e, t, t.pendingProps, r), t.child;
    case 8:
      return st(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return st(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, fe(Ll, n._currentValue), n._currentValue = a, i !== null)
          if (or(i.value, a)) {
            if (i.children === o.children && !gt.current) {
              t = Or(e, t, r);
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
                      l = Rr(-1, r & -r), l.tag = 2;
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
      return n = t.type, o = Zt(n, t.pendingProps), o = Zt(n.type, o), Cv(e, t, n, o, r);
    case 15:
      return tb(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Zt(n, o), nl(e, t), t.tag = 1, yt(n) ? (e = !0, Il(t)) : e = !1, Wo(t, r), A1(t, n, o), uf(t, n, o, r), ff(null, t, n, !0, e, r);
    case 19:
      return ab(e, t, r);
    case 22:
      return rb(e, t, r);
  }
  throw Error(R(156, t.tag));
};
function wb(e, t) {
  return Yy(e, t);
}
function E2(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ut(e, t, r, n) {
  return new E2(e, t, r, n);
}
function ep(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function $2(e) {
  if (typeof e == "function")
    return ep(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === bh)
      return 11;
    if (e === Sh)
      return 14;
  }
  return 2;
}
function cn(e, t) {
  var r = e.alternate;
  return r === null ? (r = Ut(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function al(e, t, r, n, o, i) {
  var a = 2;
  if (n = e, typeof e == "function")
    ep(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case go:
          return jn(r.children, o, i, t);
        case yh:
          a = 8, o |= 8;
          break;
        case Md:
          return e = Ut(12, r, t, o | 2), e.elementType = Md, e.lanes = i, e;
        case zd:
          return e = Ut(13, r, t, o), e.elementType = zd, e.lanes = i, e;
        case Id:
          return e = Ut(19, r, t, o), e.elementType = Id, e.lanes = i, e;
        case Ry:
          return _u(r, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case $y:
                a = 10;
                break e;
              case Ay:
                a = 9;
                break e;
              case bh:
                a = 11;
                break e;
              case Sh:
                a = 14;
                break e;
              case Kr:
                a = 16, n = null;
                break e;
            }
          throw Error(R(130, e == null ? e : typeof e, ""));
      }
  return t = Ut(a, r, t, o), t.elementType = e, t.type = n, t.lanes = i, t;
}
function jn(e, t, r, n) {
  return e = Ut(7, e, n, t), e.lanes = r, e;
}
function _u(e, t, r, n) {
  return e = Ut(22, e, n, t), e.elementType = Ry, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function Vc(e, t, r) {
  return e = Ut(6, e, null, t), e.lanes = r, e;
}
function Wc(e, t, r) {
  return t = Ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function A2(e, t, r, n, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = kc(0), this.expirationTimes = kc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kc(0), this.identifierPrefix = n, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function tp(e, t, r, n, o, i, a, s, l) {
  return e = new A2(e, t, r, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ut(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Oh(i), e;
}
function R2(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: vo, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function kb(e) {
  if (!e)
    return pn;
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
      return w1(e, r, t);
  }
  return t;
}
function Cb(e, t, r, n, o, i, a, s, l) {
  return e = tp(r, n, !0, e, o, i, a, s, l), e.context = kb(null), r = e.current, n = ut(), o = un(r), i = Rr(n, o), i.callback = t ?? null, sn(r, i, o), e.current.lanes = o, Ha(e, o, n), bt(e, n), e;
}
function Tu(e, t, r, n) {
  var o = t.current, i = ut(), a = un(o);
  return r = kb(r), t.context === null ? t.context = r : t.pendingContext = r, t = Rr(i, a), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = sn(o, t, a), e !== null && (nr(e, o, a, i), el(e, o, a)), a;
}
function Kl(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Dv(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function rp(e, t) {
  Dv(e, t), (e = e.alternate) && Dv(e, t);
}
function M2() {
  return null;
}
var _b = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function np(e) {
  this._internalRoot = e;
}
Pu.prototype.render = np.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(R(409));
  Tu(e, t, null, null);
};
Pu.prototype.unmount = np.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zn(function() {
      Tu(null, e, null, null);
    }), t[Dr] = null;
  }
};
function Pu(e) {
  this._internalRoot = e;
}
Pu.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = t1();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < qr.length && t !== 0 && t < qr[r].priority; r++)
      ;
    qr.splice(r, 0, e), r === 0 && n1(e);
  }
};
function op(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Eu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Lv() {
}
function z2(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function() {
        var u = Kl(a);
        i.call(u);
      };
    }
    var a = Cb(t, n, e, 0, null, !1, !1, "", Lv);
    return e._reactRootContainer = a, e[Dr] = a.current, Sa(e.nodeType === 8 ? e.parentNode : e), Zn(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof n == "function") {
    var s = n;
    n = function() {
      var u = Kl(l);
      s.call(u);
    };
  }
  var l = tp(e, 0, !1, null, null, !1, !1, "", Lv);
  return e._reactRootContainer = l, e[Dr] = l.current, Sa(e.nodeType === 8 ? e.parentNode : e), Zn(function() {
    Tu(t, l, r, n);
  }), l;
}
function $u(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = Kl(a);
        s.call(l);
      };
    }
    Tu(t, a, e, o);
  } else
    a = z2(r, t, e, o, n);
  return Kl(a);
}
Jy = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Li(t.pendingLanes);
        r !== 0 && (kh(t, r | 1), bt(t, Fe()), !(ee & 6) && (ii = Fe() + 500, Sn()));
      }
      break;
    case 13:
      Zn(function() {
        var n = Lr(e, 1);
        if (n !== null) {
          var o = ut();
          nr(n, e, 1, o);
        }
      }), rp(e, 1);
  }
};
Ch = function(e) {
  if (e.tag === 13) {
    var t = Lr(e, 134217728);
    if (t !== null) {
      var r = ut();
      nr(t, e, 134217728, r);
    }
    rp(e, 134217728);
  }
};
e1 = function(e) {
  if (e.tag === 13) {
    var t = un(e), r = Lr(e, t);
    if (r !== null) {
      var n = ut();
      nr(r, e, t, n);
    }
    rp(e, t);
  }
};
t1 = function() {
  return se;
};
r1 = function(e, t) {
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
            var o = bu(n);
            if (!o)
              throw Error(R(90));
            zy(n), Ld(n, o);
          }
        }
      }
      break;
    case "textarea":
      Fy(e, r);
      break;
    case "select":
      t = r.value, t != null && No(e, !!r.multiple, t, !1);
  }
};
Vy = Qh;
Wy = Zn;
var I2 = { usingClientEntryPoint: !1, Events: [Ka, xo, bu, By, jy, Qh] }, Pi = { findFiberByHostInstance: Fn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, F2 = { bundleType: Pi.bundleType, version: Pi.version, rendererPackageName: Pi.rendererPackageName, rendererConfig: Pi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: jr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Gy(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Pi.findFiberByHostInstance || M2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Rs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rs.isDisabled && Rs.supportsFiber)
    try {
      mu = Rs.inject(F2), pr = Rs;
    } catch {
    }
}
Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I2;
Mt.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!op(t))
    throw Error(R(200));
  return R2(e, t, null, r);
};
Mt.createRoot = function(e, t) {
  if (!op(e))
    throw Error(R(299));
  var r = !1, n = "", o = _b;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = tp(e, 1, !1, null, null, r, !1, n, o), e[Dr] = t.current, Sa(e.nodeType === 8 ? e.parentNode : e), new np(t);
};
Mt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
  return e = Gy(t), e = e === null ? null : e.stateNode, e;
};
Mt.flushSync = function(e) {
  return Zn(e);
};
Mt.hydrate = function(e, t, r) {
  if (!Eu(t))
    throw Error(R(200));
  return $u(null, e, t, !0, r);
};
Mt.hydrateRoot = function(e, t, r) {
  if (!op(e))
    throw Error(R(405));
  var n = r != null && r.hydratedSources || null, o = !1, i = "", a = _b;
  if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = Cb(t, null, e, 1, r ?? null, o, !1, i, a), e[Dr] = t.current, Sa(e), n)
    for (e = 0; e < n.length; e++)
      r = n[e], o = r._getVersion, o = o(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(
        r,
        o
      );
  return new Pu(t);
};
Mt.render = function(e, t, r) {
  if (!Eu(t))
    throw Error(R(200));
  return $u(null, e, t, !1, r);
};
Mt.unmountComponentAtNode = function(e) {
  if (!Eu(e))
    throw Error(R(40));
  return e._reactRootContainer ? (Zn(function() {
    $u(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Dr] = null;
    });
  }), !0) : !1;
};
Mt.unstable_batchedUpdates = Qh;
Mt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!Eu(r))
    throw Error(R(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(R(38));
  return $u(e, t, r, !1, n);
};
Mt.version = "18.2.0-next-9e3b772b8-20220608";
function Tb() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tb);
    } catch (e) {
      console.error(e);
    }
}
Tb(), Cy.exports = Mt;
var ip = Cy.exports, Ov = ip;
Ad.createRoot = Ov.createRoot, Ad.hydrateRoot = Ov.hydrateRoot;
function D2(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function L2(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var O2 = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(L2(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = D2(o);
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
}(), rt = "-ms-", Yl = "-moz-", ne = "-webkit-", Pb = "comm", ap = "rule", sp = "decl", N2 = "@import", Eb = "@keyframes", B2 = "@layer", j2 = Math.abs, Au = String.fromCharCode, V2 = Object.assign;
function W2(e, t) {
  return qe(e, 0) ^ 45 ? (((t << 2 ^ qe(e, 0)) << 2 ^ qe(e, 1)) << 2 ^ qe(e, 2)) << 2 ^ qe(e, 3) : 0;
}
function $b(e) {
  return e.trim();
}
function U2(e, t) {
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
function $a(e, t, r) {
  return e.slice(t, r);
}
function cr(e) {
  return e.length;
}
function lp(e) {
  return e.length;
}
function Ms(e, t) {
  return t.push(e), e;
}
function H2(e, t) {
  return e.map(t).join("");
}
var Ru = 1, ai = 1, Ab = 0, St = 0, Oe = 0, pi = "";
function Mu(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Ru, column: ai, length: a, return: "" };
}
function Ei(e, t) {
  return V2(Mu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function G2() {
  return Oe;
}
function K2() {
  return Oe = St > 0 ? qe(pi, --St) : 0, ai--, Oe === 10 && (ai = 1, Ru--), Oe;
}
function Et() {
  return Oe = St < Ab ? qe(pi, St++) : 0, ai++, Oe === 10 && (ai = 1, Ru++), Oe;
}
function vr() {
  return qe(pi, St);
}
function sl() {
  return St;
}
function Xa(e, t) {
  return $a(pi, e, t);
}
function Aa(e) {
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
function Rb(e) {
  return Ru = ai = 1, Ab = cr(pi = e), St = 0, [];
}
function Mb(e) {
  return pi = "", e;
}
function ll(e) {
  return $b(Xa(St - 1, _f(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Y2(e) {
  for (; (Oe = vr()) && Oe < 33; )
    Et();
  return Aa(e) > 2 || Aa(Oe) > 3 ? "" : " ";
}
function X2(e, t) {
  for (; --t && Et() && !(Oe < 48 || Oe > 102 || Oe > 57 && Oe < 65 || Oe > 70 && Oe < 97); )
    ;
  return Xa(e, sl() + (t < 6 && vr() == 32 && Et() == 32));
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
function q2(e, t) {
  for (; Et() && e + Oe !== 57; )
    if (e + Oe === 84 && vr() === 47)
      break;
  return "/*" + Xa(t, St - 1) + "*" + Au(e === 47 ? e : Et());
}
function Q2(e) {
  for (; !Aa(vr()); )
    Et();
  return Xa(e, St);
}
function Z2(e) {
  return Mb(ul("", null, null, null, [""], e = Rb(e), 0, [0], e));
}
function ul(e, t, r, n, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, g = 0, y = 1, x = 1, m = 1, h = 0, v = "", w = o, _ = i, A = n, P = v; x; )
    switch (g = h, h = Et()) {
      case 40:
        if (g != 108 && qe(P, d - 1) == 58) {
          Cf(P += oe(ll(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += ll(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += Y2(g);
        break;
      case 92:
        P += X2(sl() - 1, 7);
        continue;
      case 47:
        switch (vr()) {
          case 42:
          case 47:
            Ms(J2(q2(Et(), sl()), t, r), l);
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
            m == -1 && (P = oe(P, /\f/g, "")), p > 0 && cr(P) - d && Ms(p > 32 ? Bv(P + ";", n, r, d - 1) : Bv(oe(P, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            P += ";";
          default:
            if (Ms(A = Nv(P, t, r, u, c, o, s, v, w = [], _ = [], d), i), h === 123)
              if (c === 0)
                ul(P, t, A, A, w, i, d, s, _);
              else
                switch (f === 99 && qe(P, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ul(e, A, A, n && Ms(Nv(e, A, A, 0, 0, o, s, v, o, w = [], d), _), o, _, d, s, n ? w : _);
                    break;
                  default:
                    ul(P, A, A, A, [""], _, 0, s, _);
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
          else if (h == 125 && y++ == 0 && K2() == 125)
            continue;
        }
        switch (P += Au(h), h * y) {
          case 38:
            m = c > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            s[u++] = (cr(P) - 1) * m, m = 1;
            break;
          case 64:
            vr() === 45 && (P += ll(Et())), f = vr(), c = d = cr(v = P += Q2(sl())), h++;
            break;
          case 45:
            g === 45 && cr(P) == 2 && (y = 0);
        }
    }
  return i;
}
function Nv(e, t, r, n, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = lp(f), g = 0, y = 0, x = 0; g < n; ++g)
    for (var m = 0, h = $a(e, d + 1, d = j2(y = a[g])), v = e; m < p; ++m)
      (v = $b(y > 0 ? f[m] + " " + h : oe(h, /&\f/g, f[m]))) && (l[x++] = v);
  return Mu(e, t, r, o === 0 ? ap : s, l, u, c);
}
function J2(e, t, r) {
  return Mu(e, t, r, Pb, Au(G2()), $a(e, 2, -2), 0);
}
function Bv(e, t, r, n) {
  return Mu(e, t, r, sp, $a(e, 0, n), $a(e, n + 1, -1), n);
}
function Ho(e, t) {
  for (var r = "", n = lp(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function eT(e, t, r, n) {
  switch (e.type) {
    case B2:
      if (e.children.length)
        break;
    case N2:
    case sp:
      return e.return = e.return || e.value;
    case Pb:
      return "";
    case Eb:
      return e.return = e.value + "{" + Ho(e.children, n) + "}";
    case ap:
      e.value = e.props.join(",");
  }
  return cr(r = Ho(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function tT(e) {
  var t = lp(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function rT(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var jv = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function zb(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var nT = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = vr(), o === 38 && i === 12 && (r[n] = 1), !Aa(i); )
    Et();
  return Xa(t, St);
}, oT = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Aa(o)) {
      case 0:
        o === 38 && vr() === 12 && (r[n] = 1), t[n] += nT(St - 1, r, n);
        break;
      case 2:
        t[n] += ll(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = vr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Au(o);
    }
  while (o = Et());
  return t;
}, iT = function(t, r) {
  return Mb(oT(Rb(t), r));
}, Vv = /* @__PURE__ */ new WeakMap(), aT = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Vv.get(n)) && !o) {
      Vv.set(t, !0);
      for (var i = [], a = iT(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, sT = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ib(e, t) {
  switch (W2(e, t)) {
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
      return ne + e + Yl + e + rt + e + e;
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
            return oe(e, /(.+:)(.+)-([^]+)/, "$1" + ne + "$2-$3$1" + Yl + (qe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Cf(e, "stretch") ? Ib(oe(e, "stretch", "fill-available"), t) + e : e;
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
var lT = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case sp:
        t.return = Ib(t.value, t.length);
        break;
      case Eb:
        return Ho([Ei(t, {
          value: oe(t.value, "@", "@" + ne)
        })], o);
      case ap:
        if (t.length)
          return H2(t.props, function(i) {
            switch (U2(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ho([Ei(t, {
                  props: [oe(i, /:(read-\w+)/, ":" + Yl + "$1")]
                })], o);
              case "::placeholder":
                return Ho([Ei(t, {
                  props: [oe(i, /:(plac\w+)/, ":" + ne + "input-$1")]
                }), Ei(t, {
                  props: [oe(i, /:(plac\w+)/, ":" + Yl + "$1")]
                }), Ei(t, {
                  props: [oe(i, /:(plac\w+)/, rt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, uT = [lT], cT = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var x = y.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || uT, i = {}, a, s = [];
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
  var l, u = [aT, sT];
  {
    var c, d = [eT, rT(function(y) {
      c.insert(y);
    })], f = tT(u.concat(o, d)), p = function(x) {
      return Ho(Z2(x), f);
    };
    l = function(x, m, h, v) {
      c = h, p(x ? x + "{" + m.styles + "}" : m.styles), v && (g.inserted[m.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new O2({
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
var Fb = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke = typeof Symbol == "function" && Symbol.for, up = Ke ? Symbol.for("react.element") : 60103, cp = Ke ? Symbol.for("react.portal") : 60106, zu = Ke ? Symbol.for("react.fragment") : 60107, Iu = Ke ? Symbol.for("react.strict_mode") : 60108, Fu = Ke ? Symbol.for("react.profiler") : 60114, Du = Ke ? Symbol.for("react.provider") : 60109, Lu = Ke ? Symbol.for("react.context") : 60110, dp = Ke ? Symbol.for("react.async_mode") : 60111, Ou = Ke ? Symbol.for("react.concurrent_mode") : 60111, Nu = Ke ? Symbol.for("react.forward_ref") : 60112, Bu = Ke ? Symbol.for("react.suspense") : 60113, dT = Ke ? Symbol.for("react.suspense_list") : 60120, ju = Ke ? Symbol.for("react.memo") : 60115, Vu = Ke ? Symbol.for("react.lazy") : 60116, fT = Ke ? Symbol.for("react.block") : 60121, hT = Ke ? Symbol.for("react.fundamental") : 60117, pT = Ke ? Symbol.for("react.responder") : 60118, mT = Ke ? Symbol.for("react.scope") : 60119;
function It(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case up:
        switch (e = e.type, e) {
          case dp:
          case Ou:
          case zu:
          case Fu:
          case Iu:
          case Bu:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Lu:
              case Nu:
              case Vu:
              case ju:
              case Du:
                return e;
              default:
                return t;
            }
        }
      case cp:
        return t;
    }
  }
}
function Db(e) {
  return It(e) === Ou;
}
le.AsyncMode = dp;
le.ConcurrentMode = Ou;
le.ContextConsumer = Lu;
le.ContextProvider = Du;
le.Element = up;
le.ForwardRef = Nu;
le.Fragment = zu;
le.Lazy = Vu;
le.Memo = ju;
le.Portal = cp;
le.Profiler = Fu;
le.StrictMode = Iu;
le.Suspense = Bu;
le.isAsyncMode = function(e) {
  return Db(e) || It(e) === dp;
};
le.isConcurrentMode = Db;
le.isContextConsumer = function(e) {
  return It(e) === Lu;
};
le.isContextProvider = function(e) {
  return It(e) === Du;
};
le.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === up;
};
le.isForwardRef = function(e) {
  return It(e) === Nu;
};
le.isFragment = function(e) {
  return It(e) === zu;
};
le.isLazy = function(e) {
  return It(e) === Vu;
};
le.isMemo = function(e) {
  return It(e) === ju;
};
le.isPortal = function(e) {
  return It(e) === cp;
};
le.isProfiler = function(e) {
  return It(e) === Fu;
};
le.isStrictMode = function(e) {
  return It(e) === Iu;
};
le.isSuspense = function(e) {
  return It(e) === Bu;
};
le.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === zu || e === Ou || e === Fu || e === Iu || e === Bu || e === dT || typeof e == "object" && e !== null && (e.$$typeof === Vu || e.$$typeof === ju || e.$$typeof === Du || e.$$typeof === Lu || e.$$typeof === Nu || e.$$typeof === hT || e.$$typeof === pT || e.$$typeof === mT || e.$$typeof === fT);
};
le.typeOf = It;
Fb.exports = le;
var vT = Fb.exports, Lb = vT, gT = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, yT = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ob = {};
Ob[Lb.ForwardRef] = gT;
Ob[Lb.Memo] = yT;
var bT = !0;
function ST(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Nb = function(t, r, n) {
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
  bT === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Bb = function(t, r, n) {
  Nb(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function xT(e) {
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
var wT = {
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
}, kT = /[A-Z]|^ms/g, CT = /_EMO_([^_]+?)_([^]*?)_EMO_/g, jb = function(t) {
  return t.charCodeAt(1) === 45;
}, Wv = function(t) {
  return t != null && typeof t != "boolean";
}, Uc = /* @__PURE__ */ zb(function(e) {
  return jb(e) ? e : e.replace(kT, "-$&").toLowerCase();
}), Uv = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(CT, function(n, o, i) {
          return dr = {
            name: o,
            styles: i,
            next: dr
          }, o;
        });
  }
  return wT[t] !== 1 && !jb(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Ra(e, t, r) {
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
      return _T(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = dr, a = r(e);
        return dr = i, Ra(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return r;
  var s = t[r];
  return s !== void 0 ? s : r;
}
function _T(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Ra(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : Wv(a) && (n += Uc(i) + ":" + Uv(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Wv(a[s]) && (n += Uc(i) + ":" + Uv(i, a[s]) + ";");
      else {
        var l = Ra(e, t, a);
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
var Hv = /label:\s*([^\s;\n{]+)\s*(;|$)/g, dr, fp = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  dr = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Ra(n, r, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += Ra(n, r, t[s]), o && (i += a[s]);
  Hv.lastIndex = 0;
  for (var l = "", u; (u = Hv.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = xT(i) + l;
  return {
    name: c,
    styles: i,
    next: dr
  };
}, TT = function(t) {
  return t();
}, Vb = Mm.useInsertionEffect ? Mm.useInsertionEffect : !1, PT = Vb || TT, Gv = Vb || b.useLayoutEffect, Wb = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ cT({
    key: "css"
  }) : null
);
Wb.Provider;
var Ub = function(t) {
  return /* @__PURE__ */ b.forwardRef(function(r, n) {
    var o = b.useContext(Wb);
    return t(r, o, n);
  });
}, Ma = /* @__PURE__ */ b.createContext({}), ET = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    return n;
  }
  return Jn({}, t, r);
}, $T = /* @__PURE__ */ jv(function(e) {
  return jv(function(t) {
    return ET(e, t);
  });
}), AT = function(t) {
  var r = b.useContext(Ma);
  return t.theme !== r && (r = $T(r)(t.theme)), /* @__PURE__ */ b.createElement(Ma.Provider, {
    value: r
  }, t.children);
}, Wu = /* @__PURE__ */ Ub(function(e, t) {
  var r = e.styles, n = fp([r], void 0, b.useContext(Ma)), o = b.useRef();
  return Gv(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Gv(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && Bb(t, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function RT() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return fp(t);
}
var Uu = function() {
  var t = RT.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Hb = String.raw, Gb = Hb`
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
`, MT = () => /* @__PURE__ */ T.jsx(Wu, { styles: Gb }), zT = ({ scope: e = "" }) => /* @__PURE__ */ T.jsx(
  Wu,
  {
    styles: Hb`
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

      ${Gb}
    `
  }
);
function IT(e, t) {
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
        i ?? IT(n, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [FT, DT] = it({
  strict: !1,
  name: "PortalManagerContext"
});
function Kb(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ T.jsx(FT, { value: { zIndex: r }, children: t });
}
Kb.displayName = "PortalManager";
var Vn = globalThis != null && globalThis.document ? b.useLayoutEffect : b.useEffect, [Yb, LT] = it({
  strict: !1,
  name: "PortalContext"
}), hp = "chakra-portal", OT = ".chakra-portal", NT = (e) => /* @__PURE__ */ T.jsx(
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
), BT = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = b.useState(null), i = b.useRef(null), [, a] = b.useState({});
  b.useEffect(() => a({}), []);
  const s = LT(), l = DT();
  Vn(() => {
    if (!n)
      return;
    const c = n.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = hp, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ T.jsx(NT, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return i.current ? ip.createPortal(
    /* @__PURE__ */ T.jsx(Yb, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ T.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, jT = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = b.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = hp), l;
  }, [o]), [, s] = b.useState({});
  return Vn(() => s({}), []), Vn(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? ip.createPortal(
    /* @__PURE__ */ T.jsx(Yb, { value: n ? a : null, children: t }),
    a
  ) : null;
};
function qa(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ T.jsx(jT, { containerRef: r, ...n }) : /* @__PURE__ */ T.jsx(BT, { ...n });
}
qa.className = hp;
qa.selector = OT;
qa.displayName = "Portal";
function Xb() {
  const e = b.useContext(
    Ma
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var pp = b.createContext({});
pp.displayName = "ColorModeContext";
function mp() {
  const e = b.useContext(pp);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var zs = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function VT(e = {}) {
  const { preventTransition: t = !0 } = e, r = {
    setDataset: (n) => {
      const o = t ? r.preventTransition() : void 0;
      document.documentElement.dataset.theme = n, document.documentElement.style.colorScheme = n, o == null || o();
    },
    setClassName(n) {
      document.body.classList.add(n ? zs.dark : zs.light), document.body.classList.remove(n ? zs.light : zs.dark);
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
var WT = "chakra-ui-color-mode";
function UT(e) {
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
var HT = UT(WT), Kv = () => {
};
function Yv(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function qb(e) {
  const {
    value: t,
    children: r,
    options: {
      useSystemColorMode: n,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = HT
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = b.useState(
    () => Yv(a, s)
  ), [c, d] = b.useState(
    () => Yv(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: g, addListener: y } = b.useMemo(
    () => VT({ preventTransition: i }),
    [i]
  ), x = o === "system" && !l ? c : l, m = b.useCallback(
    (w) => {
      const _ = w === "system" ? f() : w;
      u(_), p(_ === "dark"), g(_), a.set(_);
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
      toggleColorMode: t ? Kv : h,
      setColorMode: t ? Kv : m,
      forced: t !== void 0
    }),
    [x, h, m, t]
  );
  return /* @__PURE__ */ T.jsx(pp.Provider, { value: v, children: r });
}
qb.displayName = "ColorModeProvider";
var GT = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function KT(e) {
  let t = e;
  return GT.has(t) || (t = "light"), t;
}
function YT(e = {}) {
  const {
    initialColorMode: t = "light",
    type: r = "localStorage",
    storageKey: n = "chakra-ui-color-mode"
  } = e, o = KT(t), i = r === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${n}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${n}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function XT(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ T.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: YT(e) }
    }
  );
}
function qT() {
  const e = mp(), t = Xb();
  return { ...e, theme: t };
}
var Pe = (...e) => e.filter(Boolean).join(" ");
function Kt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function tn(e, ...t) {
  return QT(e) ? e(...t) : e;
}
var QT = (e) => typeof e == "function", q = (e) => e ? "" : void 0, Hc = (e) => e ? !0 : void 0;
function Be(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function ZT(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var Xl = { exports: {} };
Xl.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", g = "[object GeneratorFunction]", y = "[object Map]", x = "[object Number]", m = "[object Null]", h = "[object Object]", v = "[object Proxy]", w = "[object RegExp]", _ = "[object Set]", A = "[object String]", P = "[object Undefined]", $ = "[object WeakMap]", M = "[object ArrayBuffer]", I = "[object DataView]", H = "[object Float32Array]", ce = "[object Float64Array]", me = "[object Int8Array]", Z = "[object Int16Array]", ue = "[object Int32Array]", Ee = "[object Uint8Array]", ze = "[object Uint8ClampedArray]", z = "[object Uint16Array]", N = "[object Uint32Array]", V = /[\\^$.*+?()[\]{}|]/g, B = /^\[object .+?Constructor\]$/, J = /^(?:0|[1-9]\d*)$/, W = {};
  W[H] = W[ce] = W[me] = W[Z] = W[ue] = W[Ee] = W[ze] = W[z] = W[N] = !0, W[s] = W[l] = W[M] = W[c] = W[I] = W[d] = W[f] = W[p] = W[y] = W[x] = W[h] = W[w] = W[_] = W[A] = W[$] = !1;
  var te = typeof ps == "object" && ps && ps.Object === Object && ps, wt = typeof self == "object" && self && self.Object === Object && self, be = te || wt || Function("return this")(), Ie = t && !t.nodeType && t, Je = Ie && !0 && e && !e.nodeType && e, Ft = Je && Je.exports === Ie, kt = Ft && te.process, Dt = function() {
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
  function lm(S, k) {
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
  var ao = Array.prototype, ok = Function.prototype, as = Object.prototype, sc = be["__core-js_shared__"], ss = ok.toString, Sr = as.hasOwnProperty, um = function() {
    var S = /[^.]+$/.exec(sc && sc.keys && sc.keys.IE_PROTO || "");
    return S ? "Symbol(src)_1." + S : "";
  }(), cm = as.toString, ik = ss.call(Object), ak = RegExp(
    "^" + ss.call(Sr).replace(V, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ls = Ft ? be.Buffer : void 0, dm = be.Symbol, fm = be.Uint8Array, hm = ls ? ls.allocUnsafe : void 0, pm = Lt(Object.getPrototypeOf, Object), mm = Object.create, sk = as.propertyIsEnumerable, lk = ao.splice, Cn = dm ? dm.toStringTag : void 0, us = function() {
    try {
      var S = cc(Object, "defineProperty");
      return S({}, "", {}), S;
    } catch {
    }
  }(), uk = ls ? ls.isBuffer : void 0, vm = Math.max, ck = Date.now, gm = cc(be, "Map"), gi = cc(Object, "create"), dk = /* @__PURE__ */ function() {
    function S() {
    }
    return function(k) {
      if (!Tn(k))
        return {};
      if (mm)
        return mm(k);
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
  function fk() {
    this.__data__ = gi ? gi(null) : {}, this.size = 0;
  }
  function hk(S) {
    var k = this.has(S) && delete this.__data__[S];
    return this.size -= k ? 1 : 0, k;
  }
  function pk(S) {
    var k = this.__data__;
    if (gi) {
      var E = k[S];
      return E === n ? void 0 : E;
    }
    return Sr.call(k, S) ? k[S] : void 0;
  }
  function mk(S) {
    var k = this.__data__;
    return gi ? k[S] !== void 0 : Sr.call(k, S);
  }
  function vk(S, k) {
    var E = this.__data__;
    return this.size += this.has(S) ? 0 : 1, E[S] = gi && k === void 0 ? n : k, this;
  }
  _n.prototype.clear = fk, _n.prototype.delete = hk, _n.prototype.get = pk, _n.prototype.has = mk, _n.prototype.set = vk;
  function xr(S) {
    var k = -1, E = S == null ? 0 : S.length;
    for (this.clear(); ++k < E; ) {
      var F = S[k];
      this.set(F[0], F[1]);
    }
  }
  function gk() {
    this.__data__ = [], this.size = 0;
  }
  function yk(S) {
    var k = this.__data__, E = cs(k, S);
    if (E < 0)
      return !1;
    var F = k.length - 1;
    return E == F ? k.pop() : lk.call(k, E, 1), --this.size, !0;
  }
  function bk(S) {
    var k = this.__data__, E = cs(k, S);
    return E < 0 ? void 0 : k[E][1];
  }
  function Sk(S) {
    return cs(this.__data__, S) > -1;
  }
  function xk(S, k) {
    var E = this.__data__, F = cs(E, S);
    return F < 0 ? (++this.size, E.push([S, k])) : E[F][1] = k, this;
  }
  xr.prototype.clear = gk, xr.prototype.delete = yk, xr.prototype.get = bk, xr.prototype.has = Sk, xr.prototype.set = xk;
  function so(S) {
    var k = -1, E = S == null ? 0 : S.length;
    for (this.clear(); ++k < E; ) {
      var F = S[k];
      this.set(F[0], F[1]);
    }
  }
  function wk() {
    this.size = 0, this.__data__ = {
      hash: new _n(),
      map: new (gm || xr)(),
      string: new _n()
    };
  }
  function kk(S) {
    var k = fs(this, S).delete(S);
    return this.size -= k ? 1 : 0, k;
  }
  function Ck(S) {
    return fs(this, S).get(S);
  }
  function _k(S) {
    return fs(this, S).has(S);
  }
  function Tk(S, k) {
    var E = fs(this, S), F = E.size;
    return E.set(S, k), this.size += E.size == F ? 0 : 1, this;
  }
  so.prototype.clear = wk, so.prototype.delete = kk, so.prototype.get = Ck, so.prototype.has = _k, so.prototype.set = Tk;
  function lo(S) {
    var k = this.__data__ = new xr(S);
    this.size = k.size;
  }
  function Pk() {
    this.__data__ = new xr(), this.size = 0;
  }
  function Ek(S) {
    var k = this.__data__, E = k.delete(S);
    return this.size = k.size, E;
  }
  function $k(S) {
    return this.__data__.get(S);
  }
  function Ak(S) {
    return this.__data__.has(S);
  }
  function Rk(S, k) {
    var E = this.__data__;
    if (E instanceof xr) {
      var F = E.__data__;
      if (!gm || F.length < r - 1)
        return F.push([S, k]), this.size = ++E.size, this;
      E = this.__data__ = new so(F);
    }
    return E.set(S, k), this.size = E.size, this;
  }
  lo.prototype.clear = Pk, lo.prototype.delete = Ek, lo.prototype.get = $k, lo.prototype.has = Ak, lo.prototype.set = Rk;
  function Mk(S, k) {
    var E = hc(S), F = !E && fc(S), X = !E && !F && wm(S), de = !E && !F && !X && Cm(S), Se = E || F || X || de, K = Se ? lm(S.length, String) : [], xe = K.length;
    for (var Ot in S)
      (k || Sr.call(S, Ot)) && !(Se && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ot == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      X && (Ot == "offset" || Ot == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      de && (Ot == "buffer" || Ot == "byteLength" || Ot == "byteOffset") || // Skip index properties.
      Sm(Ot, xe))) && K.push(Ot);
    return K;
  }
  function lc(S, k, E) {
    (E !== void 0 && !hs(S[k], E) || E === void 0 && !(k in S)) && uc(S, k, E);
  }
  function zk(S, k, E) {
    var F = S[k];
    (!(Sr.call(S, k) && hs(F, E)) || E === void 0 && !(k in S)) && uc(S, k, E);
  }
  function cs(S, k) {
    for (var E = S.length; E--; )
      if (hs(S[E][0], k))
        return E;
    return -1;
  }
  function uc(S, k, E) {
    k == "__proto__" && us ? us(S, k, {
      configurable: !0,
      enumerable: !0,
      value: E,
      writable: !0
    }) : S[k] = E;
  }
  var Ik = Kk();
  function ds(S) {
    return S == null ? S === void 0 ? P : m : Cn && Cn in Object(S) ? Yk(S) : eC(S);
  }
  function ym(S) {
    return yi(S) && ds(S) == s;
  }
  function Fk(S) {
    if (!Tn(S) || Zk(S))
      return !1;
    var k = mc(S) ? ak : B;
    return k.test(oC(S));
  }
  function Dk(S) {
    return yi(S) && km(S.length) && !!W[ds(S)];
  }
  function Lk(S) {
    if (!Tn(S))
      return Jk(S);
    var k = xm(S), E = [];
    for (var F in S)
      F == "constructor" && (k || !Sr.call(S, F)) || E.push(F);
    return E;
  }
  function bm(S, k, E, F, X) {
    S !== k && Ik(k, function(de, Se) {
      if (X || (X = new lo()), Tn(de))
        Ok(S, k, Se, E, bm, F, X);
      else {
        var K = F ? F(dc(S, Se), de, Se + "", S, k, X) : void 0;
        K === void 0 && (K = de), lc(S, Se, K);
      }
    }, _m);
  }
  function Ok(S, k, E, F, X, de, Se) {
    var K = dc(S, E), xe = dc(k, E), Ot = Se.get(xe);
    if (Ot) {
      lc(S, E, Ot);
      return;
    }
    var Ct = de ? de(K, xe, E + "", S, k, Se) : void 0, bi = Ct === void 0;
    if (bi) {
      var vc = hc(xe), gc = !vc && wm(xe), Pm = !vc && !gc && Cm(xe);
      Ct = xe, vc || gc || Pm ? hc(K) ? Ct = K : iC(K) ? Ct = Uk(K) : gc ? (bi = !1, Ct = jk(xe, !0)) : Pm ? (bi = !1, Ct = Wk(xe, !0)) : Ct = [] : aC(xe) || fc(xe) ? (Ct = K, fc(K) ? Ct = sC(K) : (!Tn(K) || mc(K)) && (Ct = Xk(xe))) : bi = !1;
    }
    bi && (Se.set(xe, Ct), X(Ct, xe, F, de, Se), Se.delete(xe)), lc(S, E, Ct);
  }
  function Nk(S, k) {
    return rC(tC(S, k, Tm), S + "");
  }
  var Bk = us ? function(S, k) {
    return us(S, "toString", {
      configurable: !0,
      enumerable: !1,
      value: uC(k),
      writable: !0
    });
  } : Tm;
  function jk(S, k) {
    if (k)
      return S.slice();
    var E = S.length, F = hm ? hm(E) : new S.constructor(E);
    return S.copy(F), F;
  }
  function Vk(S) {
    var k = new S.constructor(S.byteLength);
    return new fm(k).set(new fm(S)), k;
  }
  function Wk(S, k) {
    var E = k ? Vk(S.buffer) : S.buffer;
    return new S.constructor(E, S.byteOffset, S.length);
  }
  function Uk(S, k) {
    var E = -1, F = S.length;
    for (k || (k = Array(F)); ++E < F; )
      k[E] = S[E];
    return k;
  }
  function Hk(S, k, E, F) {
    var X = !E;
    E || (E = {});
    for (var de = -1, Se = k.length; ++de < Se; ) {
      var K = k[de], xe = F ? F(E[K], S[K], K, E, S) : void 0;
      xe === void 0 && (xe = S[K]), X ? uc(E, K, xe) : zk(E, K, xe);
    }
    return E;
  }
  function Gk(S) {
    return Nk(function(k, E) {
      var F = -1, X = E.length, de = X > 1 ? E[X - 1] : void 0, Se = X > 2 ? E[2] : void 0;
      for (de = S.length > 3 && typeof de == "function" ? (X--, de) : void 0, Se && qk(E[0], E[1], Se) && (de = X < 3 ? void 0 : de, X = 1), k = Object(k); ++F < X; ) {
        var K = E[F];
        K && S(k, K, F, de);
      }
      return k;
    });
  }
  function Kk(S) {
    return function(k, E, F) {
      for (var X = -1, de = Object(k), Se = F(k), K = Se.length; K--; ) {
        var xe = Se[S ? K : ++X];
        if (E(de[xe], xe, de) === !1)
          break;
      }
      return k;
    };
  }
  function fs(S, k) {
    var E = S.__data__;
    return Qk(k) ? E[typeof k == "string" ? "string" : "hash"] : E.map;
  }
  function cc(S, k) {
    var E = ht(S, k);
    return Fk(E) ? E : void 0;
  }
  function Yk(S) {
    var k = Sr.call(S, Cn), E = S[Cn];
    try {
      S[Cn] = void 0;
      var F = !0;
    } catch {
    }
    var X = cm.call(S);
    return F && (k ? S[Cn] = E : delete S[Cn]), X;
  }
  function Xk(S) {
    return typeof S.constructor == "function" && !xm(S) ? dk(pm(S)) : {};
  }
  function Sm(S, k) {
    var E = typeof S;
    return k = k ?? a, !!k && (E == "number" || E != "symbol" && J.test(S)) && S > -1 && S % 1 == 0 && S < k;
  }
  function qk(S, k, E) {
    if (!Tn(E))
      return !1;
    var F = typeof k;
    return (F == "number" ? pc(E) && Sm(k, E.length) : F == "string" && k in E) ? hs(E[k], S) : !1;
  }
  function Qk(S) {
    var k = typeof S;
    return k == "string" || k == "number" || k == "symbol" || k == "boolean" ? S !== "__proto__" : S === null;
  }
  function Zk(S) {
    return !!um && um in S;
  }
  function xm(S) {
    var k = S && S.constructor, E = typeof k == "function" && k.prototype || as;
    return S === E;
  }
  function Jk(S) {
    var k = [];
    if (S != null)
      for (var E in Object(S))
        k.push(E);
    return k;
  }
  function eC(S) {
    return cm.call(S);
  }
  function tC(S, k, E) {
    return k = vm(k === void 0 ? S.length - 1 : k, 0), function() {
      for (var F = arguments, X = -1, de = vm(F.length - k, 0), Se = Array(de); ++X < de; )
        Se[X] = F[k + X];
      X = -1;
      for (var K = Array(k + 1); ++X < k; )
        K[X] = F[X];
      return K[k] = E(Se), io(S, this, K);
    };
  }
  function dc(S, k) {
    if (!(k === "constructor" && typeof S[k] == "function") && k != "__proto__")
      return S[k];
  }
  var rC = nC(Bk);
  function nC(S) {
    var k = 0, E = 0;
    return function() {
      var F = ck(), X = i - (F - E);
      if (E = F, X > 0) {
        if (++k >= o)
          return arguments[0];
      } else
        k = 0;
      return S.apply(void 0, arguments);
    };
  }
  function oC(S) {
    if (S != null) {
      try {
        return ss.call(S);
      } catch {
      }
      try {
        return S + "";
      } catch {
      }
    }
    return "";
  }
  function hs(S, k) {
    return S === k || S !== S && k !== k;
  }
  var fc = ym(/* @__PURE__ */ function() {
    return arguments;
  }()) ? ym : function(S) {
    return yi(S) && Sr.call(S, "callee") && !sk.call(S, "callee");
  }, hc = Array.isArray;
  function pc(S) {
    return S != null && km(S.length) && !mc(S);
  }
  function iC(S) {
    return yi(S) && pc(S);
  }
  var wm = uk || cC;
  function mc(S) {
    if (!Tn(S))
      return !1;
    var k = ds(S);
    return k == p || k == g || k == u || k == v;
  }
  function km(S) {
    return typeof S == "number" && S > -1 && S % 1 == 0 && S <= a;
  }
  function Tn(S) {
    var k = typeof S;
    return S != null && (k == "object" || k == "function");
  }
  function yi(S) {
    return S != null && typeof S == "object";
  }
  function aC(S) {
    if (!yi(S) || ds(S) != h)
      return !1;
    var k = pm(S);
    if (k === null)
      return !0;
    var E = Sr.call(k, "constructor") && k.constructor;
    return typeof E == "function" && E instanceof E && ss.call(E) == ik;
  }
  var Cm = kn ? U(kn) : Dk;
  function sC(S) {
    return Hk(S, _m(S));
  }
  function _m(S) {
    return pc(S) ? Mk(S, !0) : Lk(S);
  }
  var lC = Gk(function(S, k, E, F) {
    bm(S, k, E, F);
  });
  function uC(S) {
    return function() {
      return S;
    };
  }
  function Tm(S) {
    return S;
  }
  function cC() {
    return !1;
  }
  e.exports = lC;
})(Xl, Xl.exports);
var JT = Xl.exports;
const Ht = /* @__PURE__ */ ch(JT);
var eP = (e) => /!(important)?$/.test(e), Xv = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, tP = (e, t) => (r) => {
  const n = String(t), o = eP(n), i = Xv(n), a = e ? `${e}.${i}` : i;
  let s = Kt(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
  return s = Xv(s), o ? `${s} !important` : s;
};
function vp(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, a) => {
    var s;
    const l = tP(t, i)(a);
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l;
    return n && (u = n(u, a)), u;
  };
}
var Is = (...e) => (t) => e.reduce((r, n) => n(r), t);
function Nt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = vp({
      scale: e,
      transform: t
    }), n;
  };
}
var rP = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function nP(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: rP(t),
    transform: r ? vp({
      scale: r,
      compose: n
    }) : n
  };
}
var Qb = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function oP() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Qb
  ].join(" ");
}
function iP() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Qb
  ].join(" ");
}
var aP = {
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
}, sP = {
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
function lP(e) {
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
var uP = {
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
}, cP = new Set(Object.values(Tf)), Pf = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), dP = (e) => e.trim();
function fP(e, t) {
  if (e == null || Pf.has(e))
    return e;
  if (!(Ef(e) || Pf.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(dP).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in Tf ? Tf[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (cP.has(f))
      return f;
    const p = f.indexOf(" "), [g, y] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], x = Ef(y) ? y : y && y.split(" "), m = `colors.${g}`, h = m in t.__cssMap ? t.__cssMap[m].varRef : g;
    return x ? [
      h,
      ...Array.isArray(x) ? x : [x]
    ].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var Ef = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), hP = (e, t) => fP(e, t ?? {});
function pP(e) {
  return /^var\(--.+\)$/.test(e);
}
var mP = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, ar = (e) => (t) => `${e}(${t})`, Y = {
  filter(e) {
    return e !== "auto" ? e : aP;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : sP;
  },
  ring(e) {
    return lP(Y.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? oP() : e === "auto-gpu" ? iP() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = mP(e);
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
    if (pP(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: hP,
  blur: ar("blur"),
  opacity: ar("opacity"),
  brightness: ar("brightness"),
  contrast: ar("contrast"),
  dropShadow: ar("drop-shadow"),
  grayscale: ar("grayscale"),
  hueRotate: (e) => ar("hue-rotate")(Y.degree(e)),
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
    const { space: r, divide: n } = (t = uP[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, C = {
  borderWidths: Nt("borderWidths"),
  borderStyles: Nt("borderStyles"),
  colors: Nt("colors"),
  borders: Nt("borders"),
  gradients: Nt("gradients", Y.gradient),
  radii: Nt("radii", Y.px),
  space: Nt("space", Is(Y.vh, Y.px)),
  spaceT: Nt("space", Is(Y.vh, Y.px)),
  degreeT(e) {
    return { property: e, transform: Y.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: vp({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: Nt("sizes", Is(Y.vh, Y.px)),
  sizesT: Nt("sizes", Is(Y.vh, Y.fraction)),
  shadows: Nt("shadows"),
  logical: nP,
  blur: Nt("blur", Y.blur)
}, cl = {
  background: C.colors("background"),
  backgroundColor: C.colors("backgroundColor"),
  backgroundImage: C.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: Y.bgClip },
  bgSize: C.prop("backgroundSize"),
  bgPosition: C.prop("backgroundPosition"),
  bg: C.colors("background"),
  bgColor: C.colors("backgroundColor"),
  bgPos: C.prop("backgroundPosition"),
  bgRepeat: C.prop("backgroundRepeat"),
  bgAttachment: C.prop("backgroundAttachment"),
  bgGradient: C.gradients("backgroundImage"),
  bgClip: { transform: Y.bgClip }
};
Object.assign(cl, {
  bgImage: cl.backgroundImage,
  bgImg: cl.backgroundImage
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
var vP = {
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
var gP = {
  filter: { transform: Y.filter },
  blur: C.blur("--chakra-blur"),
  brightness: C.propT("--chakra-brightness", Y.brightness),
  contrast: C.propT("--chakra-contrast", Y.contrast),
  hueRotate: C.propT("--chakra-hue-rotate", Y.hueRotate),
  invert: C.propT("--chakra-invert", Y.invert),
  saturate: C.propT("--chakra-saturate", Y.saturate),
  dropShadow: C.propT("--chakra-drop-shadow", Y.dropShadow),
  backdropFilter: { transform: Y.backdropFilter },
  backdropBlur: C.blur("--chakra-backdrop-blur"),
  backdropBrightness: C.propT(
    "--chakra-backdrop-brightness",
    Y.brightness
  ),
  backdropContrast: C.propT("--chakra-backdrop-contrast", Y.contrast),
  backdropHueRotate: C.propT(
    "--chakra-backdrop-hue-rotate",
    Y.hueRotate
  ),
  backdropInvert: C.propT("--chakra-backdrop-invert", Y.invert),
  backdropSaturate: C.propT("--chakra-backdrop-saturate", Y.saturate)
}, ql = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: Y.flexDirection },
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
Object.assign(ql, {
  flexDir: ql.flexDirection
});
var Zb = {
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
}, yP = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: Y.outline },
  outlineOffset: !0,
  outlineColor: C.colors("outlineColor")
}, jt = {
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
  float: C.propT("float", Y.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(jt, {
  w: jt.width,
  h: jt.height,
  minW: jt.minWidth,
  maxW: jt.maxWidth,
  minH: jt.minHeight,
  maxH: jt.maxHeight,
  overscroll: jt.overscrollBehavior,
  overscrollX: jt.overscrollBehaviorX,
  overscrollY: jt.overscrollBehaviorY
});
var bP = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: C.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: C.prop("listStyleImage")
};
function SP(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var xP = (e) => {
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
}, wP = xP(SP), kP = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, CP = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Gc = (e, t, r) => {
  const n = {}, o = wP(e, t, {});
  for (const i in o)
    i in r && r[i] != null || (n[i] = o[i]);
  return n;
}, _P = {
  srOnly: {
    transform(e) {
      return e === !0 ? kP : e === "focusable" ? CP : {};
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
}, ta = {
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
Object.assign(ta, {
  insetStart: ta.insetInlineStart,
  insetEnd: ta.insetInlineEnd
});
var TP = {
  ring: { transform: Y.ring },
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
var PP = {
  textDecorationColor: C.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: C.shadows("textShadow")
}, EP = {
  clipPath: !0,
  transform: C.propT("transform", Y.transform),
  transformOrigin: !0,
  translateX: C.spaceT("--chakra-translate-x"),
  translateY: C.spaceT("--chakra-translate-y"),
  skewX: C.degreeT("--chakra-skew-x"),
  skewY: C.degreeT("--chakra-skew-y"),
  scaleX: C.prop("--chakra-scale-x"),
  scaleY: C.prop("--chakra-scale-y"),
  scale: C.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: C.degreeT("--chakra-rotate")
}, $P = {
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
}, AP = {
  fontFamily: C.prop("fontFamily", "fonts"),
  fontSize: C.prop("fontSize", "fontSizes", Y.px),
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
}, RP = {
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
function Jb(e) {
  return Kt(e) && e.reference ? e.reference : String(e);
}
var Hu = (e, ...t) => t.map(Jb).join(` ${e} `).replace(/calc/g, ""), qv = (...e) => `calc(${Hu("+", ...e)})`, Qv = (...e) => `calc(${Hu("-", ...e)})`, Af = (...e) => `calc(${Hu("*", ...e)})`, Zv = (...e) => `calc(${Hu("/", ...e)})`, Jv = (e) => {
  const t = Jb(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Af(t, -1);
}, zn = Object.assign(
  (e) => ({
    add: (...t) => zn(qv(e, ...t)),
    subtract: (...t) => zn(Qv(e, ...t)),
    multiply: (...t) => zn(Af(e, ...t)),
    divide: (...t) => zn(Zv(e, ...t)),
    negate: () => zn(Jv(e)),
    toString: () => e.toString()
  }),
  {
    add: qv,
    subtract: Qv,
    multiply: Af,
    divide: Zv,
    negate: Jv
  }
);
function MP(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function zP(e) {
  const t = MP(e.toString());
  return FP(IP(t));
}
function IP(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function FP(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function DP(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function LP(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function OP(e, t = "") {
  return zP(`--${DP(e, t)}`);
}
function O(e, t, r) {
  const n = OP(e, r);
  return {
    variable: n,
    reference: LP(n, t)
  };
}
function NP(e, t) {
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
function BP(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function jP(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Rf(e) {
  if (e == null)
    return e;
  const { unitless: t } = jP(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var eS = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, gp = (e) => Object.fromEntries(Object.entries(e).sort(eS));
function eg(e) {
  const t = gp(e);
  return Object.assign(Object.values(t), t);
}
function VP(e) {
  const t = Object.keys(gp(e));
  return new Set(t);
}
function tg(e) {
  var t;
  if (!e)
    return e;
  e = (t = Rf(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function Ni(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Rf(e)})`), t && r.push("and", `(max-width: ${Rf(t)})`), r.join(" ");
}
function WP(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = eg(e), n = Object.entries(e).sort(eS).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? tg(d) : void 0, {
      _minW: tg(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: Ni(null, d),
      minWQuery: Ni(s),
      minMaxQuery: Ni(s, d)
    };
  }), o = VP(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: gp(e),
    asArray: eg(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...r.map((a) => Ni(a)).slice(1)
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
      for (; BP(s) === null; )
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
}, Wr = (e) => tS((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), wr = (e) => tS((t) => e(t, "~ &"), "[data-peer]", ".peer"), tS = (e, ...t) => t.map(e).join(", "), Gu = {
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
  _groupHover: Wr(Ye.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: wr(Ye.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: Wr(Ye.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: wr(Ye.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: Wr(Ye.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: wr(Ye.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: Wr(Ye.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: wr(Ye.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: Wr(Ye.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: wr(Ye.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: Wr(Ye.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: wr(Ye.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: Wr(Ye.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: wr(Ye.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: Wr(Ye.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: wr(Ye.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: wr(Ye.placeholderShown),
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
}, rS = Object.keys(
  Gu
);
function rg(e, t) {
  return O(String(e).replace(/\./g, "-"), void 0, t);
}
function UP(e, t) {
  let r = {};
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = rg(o, t == null ? void 0 : t.cssVarPrefix);
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
      const { reference: x } = rg(g, t == null ? void 0 : t.cssVarPrefix);
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
          const h = (x = (y = Gu) == null ? void 0 : y[p]) != null ? x : p;
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
function HP(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function GP(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function KP(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function ng(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function i(a, s = []) {
    var l;
    if (KP(a) || Array.isArray(a)) {
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
var YP = [
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
function XP(e) {
  return GP(e, YP);
}
function qP(e) {
  return e.semanticTokens;
}
function QP(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var ZP = (e) => rS.includes(e) || e === "default";
function JP({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return ng(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), ng(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(ZP)
    }
  ), r;
}
function eE(e) {
  var t;
  const r = QP(e), n = XP(r), o = qP(r), i = JP({ tokens: n, semanticTokens: o }), a = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = UP(i, { cssVarPrefix: a });
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
    __breakpoints: WP(r.breakpoints)
  }), r;
}
var yp = Ht(
  {},
  cl,
  re,
  vP,
  ql,
  jt,
  gP,
  TP,
  yP,
  Zb,
  _P,
  ta,
  $f,
  ge,
  RP,
  AP,
  PP,
  EP,
  bP,
  $P
);
Object.assign({}, ge, jt, ql, Zb, ta);
var tE = [...Object.keys(yp), ...rS], rE = { ...yp, ...Gu }, nE = (e) => e in rE, oE = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = tn(e[a], t);
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
function iE(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (n = !0, r += i) : i === ")" ? (n = !1, r += i) : i === "," && !n ? (t.push(r), r = "") : r += i;
  }
  return r = r.trim(), r && t.push(r), t;
}
function aE(e) {
  return /^var\(--.+\)$/.test(e);
}
var sE = (e, t) => e.startsWith("--") && typeof t == "string" && !aE(t), lE = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = iE(t);
  return t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t), t;
};
function uE(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = tn(i, n), d = oE(c)(n);
    let f = {};
    for (let p in d) {
      const g = d[p];
      let y = tn(g, n);
      p in r && (p = r[p]), sE(p, y) && (y = lE(n, y));
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
      const h = tn(x == null ? void 0 : x.property, n);
      if (!a && (x != null && x.static)) {
        const v = tn(x.static, n);
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
var nS = (e) => (t) => uE({
  theme: t,
  pseudos: Gu,
  configs: yp
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
function cE(e, t) {
  if (Array.isArray(e))
    return e;
  if (Kt(e))
    return t(e);
  if (e != null)
    return [e];
}
function dE(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function fE(e) {
  const t = e.__breakpoints;
  return function(n, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = cE(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!n.parts;
    for (let g = 0; g < d; g++) {
      const y = t.details[g], x = t.details[dE(c, g)], m = Ni(y.minW, x == null ? void 0 : x._minW), h = tn((s = n[o]) == null ? void 0 : s[c[g]], a);
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
function hE(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: i } = t, a = fE(i);
    return Ht(
      {},
      tn((r = e.baseStyle) != null ? r : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", n, t)
    );
  };
}
function xn(e) {
  return HP(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var pE = [
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
function mE(e) {
  return Kt(e) ? pE.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var vE = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, gE = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, yE = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, bE = {
  property: vE,
  easing: gE,
  duration: yE
}, SE = bE, xE = {
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
}, wE = xE, kE = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, CE = kE, _E = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, TE = _E, PE = {
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
}, EE = PE, $E = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, AE = $E, RE = {
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
}, ME = RE, zE = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, IE = zE, FE = {
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
}, oS = FE, iS = {
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
}, DE = {
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
}, LE = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, OE = {
  ...iS,
  ...DE,
  container: LE
}, aS = OE, NE = {
  breakpoints: TE,
  zIndices: wE,
  radii: AE,
  blur: IE,
  colors: EE,
  ...oS,
  sizes: aS,
  shadows: ME,
  space: iS,
  borders: CE,
  transition: SE
}, { defineMultiStyleConfig: BE, definePartsStyle: Bi } = pe([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), _r = O("stepper-indicator-size"), Eo = O("stepper-icon-size"), $o = O("stepper-title-font-size"), ji = O("stepper-description-font-size"), $i = O("stepper-accent-color"), jE = Bi(({ colorScheme: e }) => ({
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
    [$i.variable]: `colors.${e}.500`,
    _dark: {
      [$i.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: $o.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: ji.reference,
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
    width: _r.reference,
    height: _r.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: $i.reference
    },
    "&[data-status=complete]": {
      bg: $i.reference,
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
      bg: $i.reference
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
      maxHeight: `calc(100% - ${_r.reference} - 8px)`,
      top: `calc(${_r.reference} + 4px)`,
      insetStart: `calc(${_r.reference} / 2 - 1px)`
    }
  }
})), VE = BE({
  baseStyle: jE,
  sizes: {
    xs: Bi({
      stepper: {
        [_r.variable]: "sizes.4",
        [Eo.variable]: "sizes.3",
        [$o.variable]: "fontSizes.xs",
        [ji.variable]: "fontSizes.xs"
      }
    }),
    sm: Bi({
      stepper: {
        [_r.variable]: "sizes.6",
        [Eo.variable]: "sizes.4",
        [$o.variable]: "fontSizes.sm",
        [ji.variable]: "fontSizes.xs"
      }
    }),
    md: Bi({
      stepper: {
        [_r.variable]: "sizes.8",
        [Eo.variable]: "sizes.5",
        [$o.variable]: "fontSizes.md",
        [ji.variable]: "fontSizes.sm"
      }
    }),
    lg: Bi({
      stepper: {
        [_r.variable]: "sizes.10",
        [Eo.variable]: "sizes.6",
        [$o.variable]: "fontSizes.lg",
        [ji.variable]: "fontSizes.md"
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
var WE = ae("accordion").parts("root", "container", "button", "panel").extend("icon"), UE = ae("alert").parts("title", "description", "container").extend("icon", "spinner"), HE = ae("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), GE = ae("breadcrumb").parts("link", "item", "container").extend("separator");
ae("button").parts();
var KE = ae("checkbox").parts("control", "icon", "container").extend("label");
ae("progress").parts("track", "filledTrack").extend("label");
var YE = ae("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), XE = ae("editable").parts(
  "preview",
  "input",
  "textarea"
), qE = ae("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), QE = ae("formError").parts("text", "icon"), ZE = ae("input").parts(
  "addon",
  "field",
  "element",
  "group"
), JE = ae("list").parts("container", "item", "icon"), e$ = ae("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), t$ = ae("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), r$ = ae("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
ae("pininput").parts("field");
var n$ = ae("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), o$ = ae("progress").parts(
  "label",
  "filledTrack",
  "track"
), i$ = ae("radio").parts(
  "container",
  "control",
  "label"
), a$ = ae("select").parts("field", "icon"), s$ = ae("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), l$ = ae("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), u$ = ae("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), c$ = ae("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), d$ = ae("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), f$ = ae("tag").parts(
  "container",
  "label",
  "closeButton"
), h$ = ae("card").parts(
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
class p$ extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Vi = p$;
function bp(e) {
  if (typeof e != "string")
    throw new Vi(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = w$.test(e) ? g$(e) : e;
  const r = y$.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(za(s, 2), 16)), parseInt(za(a[3] || "f", 2), 16) / 255];
  }
  const n = b$.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = S$.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = x$.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (On(0, 100, s) !== s)
      throw new Vi(e);
    if (On(0, 100, l) !== l)
      throw new Vi(e);
    return [...k$(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Vi(e);
}
function m$(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const og = (e) => parseInt(e.replace(/_/g, ""), 36), v$ = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = og(t.substring(0, 3)), n = og(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - n.length; i++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function g$(e) {
  const t = e.toLowerCase().trim(), r = v$[m$(t)];
  if (!r)
    throw new Vi(e);
  return `#${r}`;
}
const za = (e, t) => Array.from(Array(t)).map(() => e).join(""), y$ = new RegExp(`^#${za("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), b$ = new RegExp(`^#${za("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), S$ = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${za(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), x$ = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, w$ = /^[a-z]+$/i, ig = (e) => Math.round(e * 255), k$ = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(ig);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = n - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(ig);
};
function C$(e, t, r, n) {
  return `rgba(${On(0, 255, e).toFixed()}, ${On(0, 255, t).toFixed()}, ${On(0, 255, r).toFixed()}, ${parseFloat(On(0, 1, n).toFixed(3))})`;
}
function _$(e, t) {
  const [r, n, o, i] = bp(e);
  return C$(r, n, o, i - t);
}
function T$(e) {
  const [t, r, n, o] = bp(e);
  let i = (a) => {
    const s = On(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function P$(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var E$ = (e) => Object.keys(e).length === 0, lt = (e, t, r) => {
  const n = P$(e, `colors.${t}`, t);
  try {
    return T$(n), n;
  } catch {
    return r ?? "#000000";
  }
}, $$ = (e) => {
  const [t, r, n] = bp(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, A$ = (e) => (t) => {
  const r = lt(t, e);
  return $$(r) < 128 ? "dark" : "light";
}, R$ = (e) => (t) => A$(e)(t) === "dark", si = (e, t) => (r) => {
  const n = lt(r, e);
  return _$(n, 1 - t);
};
function ag(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var M$ = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function z$(e) {
  const t = M$();
  return !e || E$(e) ? t : e.string && e.colors ? F$(e.string, e.colors) : e.string && !e.colors ? I$(e.string) : e.colors && !e.string ? D$(e.colors) : t;
}
function I$(e) {
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
function F$(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function D$(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function L(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function Sp(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function sS(e) {
  return Kt(e) && e.reference ? e.reference : String(e);
}
var Ku = (e, ...t) => t.map(sS).join(` ${e} `).replace(/calc/g, ""), sg = (...e) => `calc(${Ku("+", ...e)})`, lg = (...e) => `calc(${Ku("-", ...e)})`, Mf = (...e) => `calc(${Ku("*", ...e)})`, ug = (...e) => `calc(${Ku("/", ...e)})`, cg = (e) => {
  const t = sS(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Mf(t, -1);
}, Tr = Object.assign(
  (e) => ({
    add: (...t) => Tr(sg(e, ...t)),
    subtract: (...t) => Tr(lg(e, ...t)),
    multiply: (...t) => Tr(Mf(e, ...t)),
    divide: (...t) => Tr(ug(e, ...t)),
    negate: () => Tr(cg(e)),
    toString: () => e.toString()
  }),
  {
    add: sg,
    subtract: lg,
    multiply: Mf,
    divide: ug,
    negate: cg
  }
);
function L$(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function O$(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function lS(e) {
  const t = O$(e.toString());
  return t.includes("\\.") ? e : L$(e) ? t.replace(".", "\\.") : e;
}
function N$(e, t = "") {
  return [t, lS(e)].filter(Boolean).join("-");
}
function B$(e, t) {
  return `var(${lS(e)}${t ? `, ${t}` : ""})`;
}
function j$(e, t = "") {
  return `--${N$(e, t)}`;
}
function We(e, t) {
  const r = j$(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: B$(r, V$(t == null ? void 0 : t.fallback))
  };
}
function V$(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: W$, definePartsStyle: dl } = pe(u$.keys), ra = We("switch-track-width"), Wn = We("switch-track-height"), Kc = We("switch-track-diff"), U$ = Tr.subtract(ra, Wn), zf = We("switch-thumb-x"), Ai = We("switch-bg"), H$ = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [ra.reference],
    height: [Wn.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Ai.variable]: "colors.gray.300",
    _dark: {
      [Ai.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Ai.variable]: `colors.${t}.500`,
      _dark: {
        [Ai.variable]: `colors.${t}.200`
      }
    },
    bg: Ai.reference
  };
}, G$ = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Wn.reference],
  height: [Wn.reference],
  _checked: {
    transform: `translateX(${zf.reference})`
  }
}, K$ = dl((e) => ({
  container: {
    [Kc.variable]: U$,
    [zf.variable]: Kc.reference,
    _rtl: {
      [zf.variable]: Tr(Kc).negate().toString()
    }
  },
  track: H$(e),
  thumb: G$
})), Y$ = {
  sm: dl({
    container: {
      [ra.variable]: "1.375rem",
      [Wn.variable]: "sizes.3"
    }
  }),
  md: dl({
    container: {
      [ra.variable]: "1.875rem",
      [Wn.variable]: "sizes.4"
    }
  }),
  lg: dl({
    container: {
      [ra.variable]: "2.875rem",
      [Wn.variable]: "sizes.6"
    }
  })
}, X$ = W$({
  baseStyle: K$,
  sizes: Y$,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: q$, definePartsStyle: Go } = pe(c$.keys), Q$ = Go({
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
}), Ql = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, Z$ = Go((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: L("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: L(`${t}.100`, `${t}.700`)(e),
      ...Ql
    },
    td: {
      borderBottom: "1px",
      borderColor: L(`${t}.100`, `${t}.700`)(e),
      ...Ql
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
}), J$ = Go((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: L("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: L(`${t}.100`, `${t}.700`)(e),
      ...Ql
    },
    td: {
      borderBottom: "1px",
      borderColor: L(`${t}.100`, `${t}.700`)(e),
      ...Ql
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
}), e5 = {
  simple: Z$,
  striped: J$,
  unstyled: {}
}, t5 = {
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
}, r5 = q$({
  baseStyle: Q$,
  variants: e5,
  sizes: t5,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), mt = O("tabs-color"), tr = O("tabs-bg"), Fs = O("tabs-border-color"), { defineMultiStyleConfig: n5, definePartsStyle: gr } = pe(d$.keys), o5 = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, i5 = (e) => {
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
}, a5 = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, s5 = {
  p: 4
}, l5 = gr((e) => ({
  root: o5(e),
  tab: i5(e),
  tablist: a5(e),
  tabpanel: s5
})), u5 = {
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
}, c5 = gr((e) => {
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
}), d5 = gr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Fs.variable]: "transparent",
      _selected: {
        [mt.variable]: `colors.${t}.600`,
        [Fs.variable]: "colors.white",
        _dark: {
          [mt.variable]: `colors.${t}.300`,
          [Fs.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Fs.reference
      },
      color: mt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), f5 = gr((e) => {
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
}), h5 = gr((e) => {
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
}), p5 = gr((e) => {
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
}), m5 = gr({}), v5 = {
  line: c5,
  enclosed: d5,
  "enclosed-colored": f5,
  "soft-rounded": h5,
  "solid-rounded": p5,
  unstyled: m5
}, g5 = n5({
  baseStyle: l5,
  sizes: u5,
  variants: v5,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), De = NP("badge", ["bg", "color", "shadow"]), y5 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: De.bg.reference,
  color: De.color.reference,
  boxShadow: De.shadow.reference
}, b5 = (e) => {
  const { colorScheme: t, theme: r } = e, n = si(`${t}.500`, 0.6)(r);
  return {
    [De.bg.variable]: `colors.${t}.500`,
    [De.color.variable]: "colors.white",
    _dark: {
      [De.bg.variable]: n,
      [De.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, S5 = (e) => {
  const { colorScheme: t, theme: r } = e, n = si(`${t}.200`, 0.16)(r);
  return {
    [De.bg.variable]: `colors.${t}.100`,
    [De.color.variable]: `colors.${t}.800`,
    _dark: {
      [De.bg.variable]: n,
      [De.color.variable]: `colors.${t}.200`
    }
  };
}, x5 = (e) => {
  const { colorScheme: t, theme: r } = e, n = si(`${t}.200`, 0.8)(r);
  return {
    [De.color.variable]: `colors.${t}.500`,
    _dark: {
      [De.color.variable]: n
    },
    [De.shadow.variable]: `inset 0 0 0px 1px ${De.color.reference}`
  };
}, w5 = {
  solid: b5,
  subtle: S5,
  outline: x5
}, na = {
  baseStyle: y5,
  variants: w5,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: k5, definePartsStyle: Un } = pe(f$.keys), dg = O("tag-bg"), fg = O("tag-color"), Yc = O("tag-shadow"), fl = O("tag-min-height"), hl = O("tag-min-width"), pl = O("tag-font-size"), ml = O("tag-padding-inline"), C5 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [fg.variable]: De.color.reference,
  [dg.variable]: De.bg.reference,
  [Yc.variable]: De.shadow.reference,
  color: fg.reference,
  bg: dg.reference,
  boxShadow: Yc.reference,
  borderRadius: "md",
  minH: fl.reference,
  minW: hl.reference,
  fontSize: pl.reference,
  px: ml.reference,
  _focusVisible: {
    [Yc.variable]: "shadows.outline"
  }
}, _5 = {
  lineHeight: 1.2,
  overflow: "visible"
}, T5 = {
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
}, P5 = Un({
  container: C5,
  label: _5,
  closeButton: T5
}), E5 = {
  sm: Un({
    container: {
      [fl.variable]: "sizes.5",
      [hl.variable]: "sizes.5",
      [pl.variable]: "fontSizes.xs",
      [ml.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Un({
    container: {
      [fl.variable]: "sizes.6",
      [hl.variable]: "sizes.6",
      [pl.variable]: "fontSizes.sm",
      [ml.variable]: "space.2"
    }
  }),
  lg: Un({
    container: {
      [fl.variable]: "sizes.8",
      [hl.variable]: "sizes.8",
      [pl.variable]: "fontSizes.md",
      [ml.variable]: "space.3"
    }
  })
}, $5 = {
  subtle: Un((e) => {
    var t;
    return {
      container: (t = na.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: Un((e) => {
    var t;
    return {
      container: (t = na.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: Un((e) => {
    var t;
    return {
      container: (t = na.variants) == null ? void 0 : t.outline(e)
    };
  })
}, A5 = k5({
  variants: $5,
  baseStyle: P5,
  sizes: E5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: $r, defineMultiStyleConfig: R5 } = pe(ZE.keys), Ao = O("input-height"), Ro = O("input-font-size"), Mo = O("input-padding"), zo = O("input-border-radius"), M5 = $r({
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
}), Ur = {
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
}, z5 = {
  lg: $r({
    field: Ur.lg,
    group: Ur.lg
  }),
  md: $r({
    field: Ur.md,
    group: Ur.md
  }),
  sm: $r({
    field: Ur.sm,
    group: Ur.sm
  }),
  xs: $r({
    field: Ur.xs,
    group: Ur.xs
  })
};
function xp(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || L("blue.500", "blue.300")(e),
    errorBorderColor: r || L("red.500", "red.300")(e)
  };
}
var I5 = $r((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = xp(e);
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
}), F5 = $r((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = xp(e);
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
}), D5 = $r((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = xp(e);
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
}), L5 = $r({
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
}), O5 = {
  outline: I5,
  filled: F5,
  flushed: D5,
  unstyled: L5
}, ie = R5({
  baseStyle: M5,
  sizes: z5,
  variants: O5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), hg, N5 = {
  ...(hg = ie.baseStyle) == null ? void 0 : hg.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, pg, mg, B5 = {
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
  unstyled: (mg = (pg = ie.variants) == null ? void 0 : pg.unstyled.field) != null ? mg : {}
}, vg, gg, yg, bg, Sg, xg, wg, kg, j5 = {
  xs: (gg = (vg = ie.sizes) == null ? void 0 : vg.xs.field) != null ? gg : {},
  sm: (bg = (yg = ie.sizes) == null ? void 0 : yg.sm.field) != null ? bg : {},
  md: (xg = (Sg = ie.sizes) == null ? void 0 : Sg.md.field) != null ? xg : {},
  lg: (kg = (wg = ie.sizes) == null ? void 0 : wg.lg.field) != null ? kg : {}
}, V5 = {
  baseStyle: N5,
  sizes: j5,
  variants: B5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, Ds = We("tooltip-bg"), Xc = We("tooltip-fg"), W5 = We("popper-arrow-bg"), U5 = {
  bg: Ds.reference,
  color: Xc.reference,
  [Ds.variable]: "colors.gray.700",
  [Xc.variable]: "colors.whiteAlpha.900",
  _dark: {
    [Ds.variable]: "colors.gray.300",
    [Xc.variable]: "colors.gray.900"
  },
  [W5.variable]: Ds.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, H5 = {
  baseStyle: U5
}, { defineMultiStyleConfig: G5, definePartsStyle: Wi } = pe(o$.keys), K5 = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, i = L(
    ag(),
    ag("1rem", "rgba(0,0,0,0.1)")
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
}, Y5 = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, X5 = (e) => ({
  bg: L("gray.100", "whiteAlpha.300")(e)
}), q5 = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...K5(e)
}), Q5 = Wi((e) => ({
  label: Y5,
  filledTrack: q5(e),
  track: X5(e)
})), Z5 = {
  xs: Wi({
    track: { h: "1" }
  }),
  sm: Wi({
    track: { h: "2" }
  }),
  md: Wi({
    track: { h: "3" }
  }),
  lg: Wi({
    track: { h: "4" }
  })
}, J5 = G5({
  sizes: Z5,
  baseStyle: Q5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), eA = (e) => typeof e == "function";
function ct(e, ...t) {
  return eA(e) ? e(...t) : e;
}
var { definePartsStyle: vl, defineMultiStyleConfig: tA } = pe(KE.keys), oa = O("checkbox-size"), rA = (e) => {
  const { colorScheme: t } = e;
  return {
    w: oa.reference,
    h: oa.reference,
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
}, nA = {
  _disabled: { cursor: "not-allowed" }
}, oA = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, iA = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, aA = vl((e) => ({
  icon: iA,
  container: nA,
  control: ct(rA, e),
  label: oA
})), sA = {
  sm: vl({
    control: { [oa.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: vl({
    control: { [oa.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: vl({
    control: { [oa.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Zl = tA({
  baseStyle: aA,
  sizes: sA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: lA, definePartsStyle: gl } = pe(i$.keys), uA = (e) => {
  var t;
  const r = (t = ct(Zl.baseStyle, e)) == null ? void 0 : t.control;
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
}, cA = gl((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = Zl).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = Zl).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: uA(e)
  };
}), dA = {
  md: gl({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: gl({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: gl({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, fA = lA({
  baseStyle: cA,
  sizes: dA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: hA, definePartsStyle: pA } = pe(a$.keys), Ls = O("select-bg"), Cg, mA = {
  ...(Cg = ie.baseStyle) == null ? void 0 : Cg.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: Ls.reference,
  [Ls.variable]: "colors.white",
  _dark: {
    [Ls.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: Ls.reference
  }
}, vA = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, gA = pA({
  field: mA,
  icon: vA
}), Os = {
  paddingInlineEnd: "8"
}, _g, Tg, Pg, Eg, $g, Ag, Rg, Mg, yA = {
  lg: {
    ...(_g = ie.sizes) == null ? void 0 : _g.lg,
    field: {
      ...(Tg = ie.sizes) == null ? void 0 : Tg.lg.field,
      ...Os
    }
  },
  md: {
    ...(Pg = ie.sizes) == null ? void 0 : Pg.md,
    field: {
      ...(Eg = ie.sizes) == null ? void 0 : Eg.md.field,
      ...Os
    }
  },
  sm: {
    ...($g = ie.sizes) == null ? void 0 : $g.sm,
    field: {
      ...(Ag = ie.sizes) == null ? void 0 : Ag.sm.field,
      ...Os
    }
  },
  xs: {
    ...(Rg = ie.sizes) == null ? void 0 : Rg.xs,
    field: {
      ...(Mg = ie.sizes) == null ? void 0 : Mg.xs.field,
      ...Os
    },
    icon: {
      insetEnd: "1"
    }
  }
}, bA = hA({
  baseStyle: gA,
  sizes: yA,
  variants: ie.variants,
  defaultProps: ie.defaultProps
}), qc = O("skeleton-start-color"), Qc = O("skeleton-end-color"), SA = {
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
}, xA = {
  baseStyle: SA
}, Zc = O("skip-link-bg"), wA = {
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
}, kA = {
  baseStyle: wA
}, { defineMultiStyleConfig: CA, definePartsStyle: Yu } = pe(s$.keys), Ia = O("slider-thumb-size"), Fa = O("slider-track-size"), Zr = O("slider-bg"), _A = (e) => {
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
    ...Sp({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, TA = (e) => ({
  ...Sp({
    orientation: e.orientation,
    horizontal: { h: Fa.reference },
    vertical: { w: Fa.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [Zr.variable]: "colors.gray.200",
  _dark: {
    [Zr.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [Zr.variable]: "colors.gray.300",
    _dark: {
      [Zr.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: Zr.reference
}), PA = (e) => {
  const { orientation: t } = e;
  return {
    ...Sp({
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
    w: Ia.reference,
    h: Ia.reference,
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
}, EA = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [Zr.variable]: `colors.${t}.500`,
    _dark: {
      [Zr.variable]: `colors.${t}.200`
    },
    bg: Zr.reference
  };
}, $A = Yu((e) => ({
  container: _A(e),
  track: TA(e),
  thumb: PA(e),
  filledTrack: EA(e)
})), AA = Yu({
  container: {
    [Ia.variable]: "sizes.4",
    [Fa.variable]: "sizes.1"
  }
}), RA = Yu({
  container: {
    [Ia.variable]: "sizes.3.5",
    [Fa.variable]: "sizes.1"
  }
}), MA = Yu({
  container: {
    [Ia.variable]: "sizes.2.5",
    [Fa.variable]: "sizes.0.5"
  }
}), zA = {
  lg: AA,
  md: RA,
  sm: MA
}, IA = CA({
  baseStyle: $A,
  sizes: zA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), In = We("spinner-size"), FA = {
  width: [In.reference],
  height: [In.reference]
}, DA = {
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
}, LA = {
  baseStyle: FA,
  sizes: DA,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: OA, definePartsStyle: uS } = pe(l$.keys), NA = {
  fontWeight: "medium"
}, BA = {
  opacity: 0.8,
  marginBottom: "2"
}, jA = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, VA = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, WA = uS({
  container: {},
  label: NA,
  helpText: BA,
  number: jA,
  icon: VA
}), UA = {
  md: uS({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, HA = OA({
  baseStyle: WA,
  sizes: UA,
  defaultProps: {
    size: "md"
  }
}), Jc = O("kbd-bg"), GA = {
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
}, KA = {
  baseStyle: GA
}, YA = {
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
}, XA = {
  baseStyle: YA
}, { defineMultiStyleConfig: qA, definePartsStyle: QA } = pe(JE.keys), ZA = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, JA = QA({
  icon: ZA
}), eR = qA({
  baseStyle: JA
}), { defineMultiStyleConfig: tR, definePartsStyle: rR } = pe(e$.keys), ur = O("menu-bg"), ed = O("menu-shadow"), nR = {
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
}, oR = {
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
}, iR = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, aR = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, sR = {
  opacity: 0.6
}, lR = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, uR = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, cR = rR({
  button: uR,
  list: nR,
  item: oR,
  groupTitle: iR,
  icon: aR,
  command: sR,
  divider: lR
}), dR = tR({
  baseStyle: cR
}), { defineMultiStyleConfig: fR, definePartsStyle: If } = pe(t$.keys), td = O("modal-bg"), rd = O("modal-shadow"), hR = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, pR = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, mR = (e) => {
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
}, vR = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, gR = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, yR = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, bR = {
  px: "6",
  py: "4"
}, SR = If((e) => ({
  overlay: hR,
  dialogContainer: ct(pR, e),
  dialog: ct(mR, e),
  header: vR,
  closeButton: gR,
  body: ct(yR, e),
  footer: bR
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
var xR = {
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
}, wR = fR({
  baseStyle: SR,
  sizes: xR,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: kR, definePartsStyle: cS } = pe(r$.keys), wp = We("number-input-stepper-width"), dS = We("number-input-input-padding"), CR = Tr(wp).add("0.5rem").toString(), nd = We("number-input-bg"), od = We("number-input-color"), id = We("number-input-border-color"), _R = {
  [wp.variable]: "sizes.6",
  [dS.variable]: CR
}, TR = (e) => {
  var t, r;
  return (r = (t = ct(ie.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, PR = {
  width: wp.reference
}, ER = {
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
}, $R = cS((e) => {
  var t;
  return {
    root: _R,
    field: (t = ct(TR, e)) != null ? t : {},
    stepperGroup: PR,
    stepper: ER
  };
});
function Ns(e) {
  var t, r, n;
  const o = (t = ie.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = oS.fontSizes[a];
  return cS({
    field: {
      ...o.field,
      paddingInlineEnd: dS.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Tr(s).multiply(0.75).toString(),
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
var AR = {
  xs: Ns("xs"),
  sm: Ns("sm"),
  md: Ns("md"),
  lg: Ns("lg")
}, RR = kR({
  baseStyle: $R,
  sizes: AR,
  variants: ie.variants,
  defaultProps: ie.defaultProps
}), zg, MR = {
  ...(zg = ie.baseStyle) == null ? void 0 : zg.field,
  textAlign: "center"
}, zR = {
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
}, Ig, Fg, IR = {
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
  unstyled: (Fg = (Ig = ie.variants) == null ? void 0 : Ig.unstyled.field) != null ? Fg : {}
}, FR = {
  baseStyle: MR,
  sizes: zR,
  variants: IR,
  defaultProps: ie.defaultProps
}, { defineMultiStyleConfig: DR, definePartsStyle: LR } = pe(n$.keys), Bs = We("popper-bg"), OR = We("popper-arrow-bg"), Dg = We("popper-arrow-shadow-color"), NR = { zIndex: 10 }, BR = {
  [Bs.variable]: "colors.white",
  bg: Bs.reference,
  [OR.variable]: Bs.reference,
  [Dg.variable]: "colors.gray.200",
  _dark: {
    [Bs.variable]: "colors.gray.700",
    [Dg.variable]: "colors.whiteAlpha.300"
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
}, jR = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, VR = {
  px: 3,
  py: 2
}, WR = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, UR = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, HR = LR({
  popper: NR,
  content: BR,
  header: jR,
  body: VR,
  footer: WR,
  closeButton: UR
}), GR = DR({
  baseStyle: HR
}), { definePartsStyle: Ff, defineMultiStyleConfig: KR } = pe(YE.keys), ad = O("drawer-bg"), sd = O("drawer-box-shadow");
function co(e) {
  return Ff(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var YR = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, XR = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, qR = (e) => {
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
}, QR = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, ZR = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, JR = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, eM = {
  px: "6",
  py: "4"
}, tM = Ff((e) => ({
  overlay: YR,
  dialogContainer: XR,
  dialog: ct(qR, e),
  header: QR,
  closeButton: ZR,
  body: JR,
  footer: eM
})), rM = {
  xs: co("xs"),
  sm: co("md"),
  md: co("lg"),
  lg: co("2xl"),
  xl: co("4xl"),
  full: co("full")
}, nM = KR({
  baseStyle: tM,
  sizes: rM,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: oM, defineMultiStyleConfig: iM } = pe(XE.keys), aM = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, sM = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, lM = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, uM = oM({
  preview: aM,
  input: sM,
  textarea: lM
}), cM = iM({
  baseStyle: uM
}), { definePartsStyle: dM, defineMultiStyleConfig: fM } = pe(qE.keys), Ko = O("form-control-color"), hM = {
  marginStart: "1",
  [Ko.variable]: "colors.red.500",
  _dark: {
    [Ko.variable]: "colors.red.300"
  },
  color: Ko.reference
}, pM = {
  mt: "2",
  [Ko.variable]: "colors.gray.600",
  _dark: {
    [Ko.variable]: "colors.whiteAlpha.600"
  },
  color: Ko.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, mM = dM({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: hM,
  helperText: pM
}), vM = fM({
  baseStyle: mM
}), { definePartsStyle: gM, defineMultiStyleConfig: yM } = pe(QE.keys), Yo = O("form-error-color"), bM = {
  [Yo.variable]: "colors.red.500",
  _dark: {
    [Yo.variable]: "colors.red.300"
  },
  color: Yo.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, SM = {
  marginEnd: "0.5em",
  [Yo.variable]: "colors.red.500",
  _dark: {
    [Yo.variable]: "colors.red.300"
  },
  color: Yo.reference
}, xM = gM({
  text: bM,
  icon: SM
}), wM = yM({
  baseStyle: xM
}), kM = {
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
}, CM = {
  baseStyle: kM
}, _M = {
  fontFamily: "heading",
  fontWeight: "bold"
}, TM = {
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
}, PM = {
  baseStyle: _M,
  sizes: TM,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: EM, definePartsStyle: $M } = pe(GE.keys), ld = O("breadcrumb-link-decor"), AM = {
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
}, RM = $M({
  link: AM
}), MM = EM({
  baseStyle: RM
}), zM = {
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
}, fS = (e) => {
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
}, IM = (e) => {
  const { colorScheme: t } = e, r = L("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...ct(fS, e)
  };
}, FM = {
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
}, DM = (e) => {
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
  } = (t = FM[r]) != null ? t : {}, s = L(n, `${r}.200`)(e);
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
}, LM = (e) => {
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
}, OM = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, NM = {
  ghost: fS,
  outline: IM,
  solid: DM,
  link: LM,
  unstyled: OM
}, BM = {
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
}, jM = {
  baseStyle: zM,
  variants: NM,
  sizes: BM,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Hn, defineMultiStyleConfig: VM } = pe(h$.keys), Jl = O("card-bg"), Mr = O("card-padding"), hS = O("card-shadow"), yl = O("card-radius"), pS = O("card-border-width", "0"), mS = O("card-border-color"), WM = Hn({
  container: {
    [Jl.variable]: "colors.chakra-body-bg",
    backgroundColor: Jl.reference,
    boxShadow: hS.reference,
    borderRadius: yl.reference,
    color: "chakra-body-text",
    borderWidth: pS.reference,
    borderColor: mS.reference
  },
  body: {
    padding: Mr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: Mr.reference
  },
  footer: {
    padding: Mr.reference
  }
}), UM = {
  sm: Hn({
    container: {
      [yl.variable]: "radii.base",
      [Mr.variable]: "space.3"
    }
  }),
  md: Hn({
    container: {
      [yl.variable]: "radii.md",
      [Mr.variable]: "space.5"
    }
  }),
  lg: Hn({
    container: {
      [yl.variable]: "radii.xl",
      [Mr.variable]: "space.7"
    }
  })
}, HM = {
  elevated: Hn({
    container: {
      [hS.variable]: "shadows.base",
      _dark: {
        [Jl.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Hn({
    container: {
      [pS.variable]: "1px",
      [mS.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Hn({
    container: {
      [Jl.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [Mr.variable]: 0
    },
    header: {
      [Mr.variable]: 0
    },
    footer: {
      [Mr.variable]: 0
    }
  }
}, GM = VM({
  baseStyle: WM,
  variants: HM,
  sizes: UM,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), ia = We("close-button-size"), Ri = We("close-button-bg"), KM = {
  w: [ia.reference],
  h: [ia.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Ri.variable]: "colors.blackAlpha.100",
    _dark: {
      [Ri.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Ri.variable]: "colors.blackAlpha.200",
    _dark: {
      [Ri.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Ri.reference
}, YM = {
  lg: {
    [ia.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [ia.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [ia.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, XM = {
  baseStyle: KM,
  sizes: YM,
  defaultProps: {
    size: "md"
  }
}, { variants: qM, defaultProps: QM } = na, ZM = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: De.bg.reference,
  color: De.color.reference,
  boxShadow: De.shadow.reference
}, JM = {
  baseStyle: ZM,
  variants: qM,
  defaultProps: QM
}, ez = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, tz = {
  baseStyle: ez
}, rz = {
  opacity: 0.6,
  borderColor: "inherit"
}, nz = {
  borderStyle: "solid"
}, oz = {
  borderStyle: "dashed"
}, iz = {
  solid: nz,
  dashed: oz
}, az = {
  baseStyle: rz,
  variants: iz,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: sz, defineMultiStyleConfig: lz } = pe(WE.keys), uz = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, cz = {
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
}, dz = {
  pt: "2",
  px: "4",
  pb: "5"
}, fz = {
  fontSize: "1.25em"
}, hz = sz({
  container: uz,
  button: cz,
  panel: dz,
  icon: fz
}), pz = lz({ baseStyle: hz }), { definePartsStyle: Qa, defineMultiStyleConfig: mz } = pe(UE.keys), $t = O("alert-fg"), Nr = O("alert-bg"), vz = Qa({
  container: {
    bg: Nr.reference,
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
function kp(e) {
  const { theme: t, colorScheme: r } = e, n = si(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var gz = Qa((e) => {
  const { colorScheme: t } = e, r = kp(e);
  return {
    container: {
      [$t.variable]: `colors.${t}.600`,
      [Nr.variable]: r.light,
      _dark: {
        [$t.variable]: `colors.${t}.200`,
        [Nr.variable]: r.dark
      }
    }
  };
}), yz = Qa((e) => {
  const { colorScheme: t } = e, r = kp(e);
  return {
    container: {
      [$t.variable]: `colors.${t}.600`,
      [Nr.variable]: r.light,
      _dark: {
        [$t.variable]: `colors.${t}.200`,
        [Nr.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: $t.reference
    }
  };
}), bz = Qa((e) => {
  const { colorScheme: t } = e, r = kp(e);
  return {
    container: {
      [$t.variable]: `colors.${t}.600`,
      [Nr.variable]: r.light,
      _dark: {
        [$t.variable]: `colors.${t}.200`,
        [Nr.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: $t.reference
    }
  };
}), Sz = Qa((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [$t.variable]: "colors.white",
      [Nr.variable]: `colors.${t}.600`,
      _dark: {
        [$t.variable]: "colors.gray.900",
        [Nr.variable]: `colors.${t}.200`
      },
      color: $t.reference
    }
  };
}), xz = {
  subtle: gz,
  "left-accent": yz,
  "top-accent": bz,
  solid: Sz
}, wz = mz({
  baseStyle: vz,
  variants: xz,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: vS, defineMultiStyleConfig: kz } = pe(HE.keys), Xo = O("avatar-border-color"), aa = O("avatar-bg"), Da = O("avatar-font-size"), li = O("avatar-size"), Cz = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Xo.reference,
  [Xo.variable]: "white",
  _dark: {
    [Xo.variable]: "colors.gray.800"
  }
}, _z = {
  bg: aa.reference,
  fontSize: Da.reference,
  width: li.reference,
  height: li.reference,
  lineHeight: "1",
  [aa.variable]: "colors.gray.200",
  _dark: {
    [aa.variable]: "colors.whiteAlpha.400"
  }
}, Tz = (e) => {
  const { name: t, theme: r } = e, n = t ? z$({ string: t }) : "colors.gray.400", o = R$(n)(r);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: aa.reference,
    fontSize: Da.reference,
    color: i,
    borderColor: Xo.reference,
    verticalAlign: "top",
    width: li.reference,
    height: li.reference,
    "&:not([data-loaded])": {
      [aa.variable]: n
    },
    [Xo.variable]: "colors.white",
    _dark: {
      [Xo.variable]: "colors.gray.800"
    }
  };
}, Pz = {
  fontSize: Da.reference,
  lineHeight: "1"
}, Ez = vS((e) => ({
  badge: ct(Cz, e),
  excessLabel: ct(_z, e),
  container: ct(Tz, e),
  label: Pz
}));
function Hr(e) {
  const t = e !== "100%" ? aS[e] : void 0;
  return vS({
    container: {
      [li.variable]: t ?? e,
      [Da.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [li.variable]: t ?? e,
      [Da.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var $z = {
  "2xs": Hr(4),
  xs: Hr(6),
  sm: Hr(8),
  md: Hr(12),
  lg: Hr(16),
  xl: Hr(24),
  "2xl": Hr(32),
  full: Hr("100%")
}, Az = kz({
  baseStyle: Ez,
  sizes: $z,
  defaultProps: {
    size: "md"
  }
}), Rz = {
  Accordion: pz,
  Alert: wz,
  Avatar: Az,
  Badge: na,
  Breadcrumb: MM,
  Button: jM,
  Checkbox: Zl,
  CloseButton: XM,
  Code: JM,
  Container: tz,
  Divider: az,
  Drawer: nM,
  Editable: cM,
  Form: vM,
  FormError: wM,
  FormLabel: CM,
  Heading: PM,
  Input: ie,
  Kbd: KA,
  Link: XA,
  List: eR,
  Menu: dR,
  Modal: wR,
  NumberInput: RR,
  PinInput: FR,
  Popover: GR,
  Progress: J5,
  Radio: fA,
  Select: bA,
  Skeleton: xA,
  SkipLink: kA,
  Slider: IA,
  Spinner: LA,
  Stat: HA,
  Switch: X$,
  Table: r5,
  Tabs: g5,
  Tag: A5,
  Textarea: V5,
  Tooltip: H5,
  Card: GM,
  Stepper: VE
}, Mz = {
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
}, Iz = "ltr", Fz = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, gS = {
  semanticTokens: Mz,
  direction: Iz,
  ...NE,
  components: Rz,
  styles: zz,
  config: Fz
};
function Ui(e) {
  return typeof e == "function";
}
function Dz(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var Lz = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return mE(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, Dz(
    ...n.map(
      (i) => (a) => Ui(i) ? i(a) : Nz(a, i)
    )
  )(o);
}, Oz = Lz(gS);
function Nz(...e) {
  return Ht({}, ...e, yS);
}
function yS(e, t, r, n) {
  if ((Ui(e) || Ui(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = Ui(e) ? e(...o) : e, a = Ui(t) ? t(...o) : t;
      return Ht({}, i, a, yS);
    };
}
function Bz(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function jz(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var Vz = (e) => {
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
}, bS = Vz(jz);
function SS(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var xS = (e) => SS(e, (t) => t != null);
function Wz(e) {
  return typeof e == "function";
}
function wS(e, ...t) {
  return Wz(e) ? e(...t) : e;
}
var Uz = typeof Element < "u", Hz = typeof Map == "function", Gz = typeof Set == "function", Kz = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function bl(e, t) {
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
        if (!bl(e[n], t[n]))
          return !1;
      return !0;
    }
    var i;
    if (Hz && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!bl(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Gz && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Kz && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Uz && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !bl(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Yz = function(t, r) {
  try {
    return bl(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const Xz = /* @__PURE__ */ ch(Yz);
function kS(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: i, colorMode: a } = qT(), s = e ? bS(i, `components.${e}`) : void 0, l = n || s, u = Ht(
    { theme: i, colorMode: a },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    xS(Bz(o, ["children"]))
  ), c = b.useRef({});
  if (l) {
    const f = hE(l)(u);
    Xz(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Xu(e, t = {}) {
  return kS(e, t);
}
function mi(e, t = {}) {
  return kS(e, t);
}
var qz = /* @__PURE__ */ new Set([
  ...tE,
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
]), Qz = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function Zz(e) {
  return Qz.has(e) || !qz.has(e);
}
function Jz(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
var e3 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, t3 = /* @__PURE__ */ zb(
  function(e) {
    return e3.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), r3 = t3, n3 = function(t) {
  return t !== "theme";
}, Lg = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? r3 : n3;
}, Og = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, o3 = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Nb(r, n, o), PT(function() {
    return Bb(r, n, o);
  }), null;
}, i3 = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = Og(t, r, n), l = s || Lg(o), u = !l("as");
  return function() {
    var c = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var g = Ub(function(y, x, m) {
      var h = u && y.as || o, v = "", w = [], _ = y;
      if (y.theme == null) {
        _ = {};
        for (var A in y)
          _[A] = y[A];
        _.theme = b.useContext(Ma);
      }
      typeof y.className == "string" ? v = ST(x.registered, w, y.className) : y.className != null && (v = y.className + " ");
      var P = fp(d.concat(w), x.registered, _);
      v += x.key + "-" + P.name, a !== void 0 && (v += " " + a);
      var $ = u && s === void 0 ? Lg(h) : l, M = {};
      for (var I in y)
        u && I === "as" || // $FlowFixMe
        $(I) && (M[I] = y[I]);
      return M.className = v, M.ref = m, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(o3, {
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
        shouldForwardProp: Og(g, x, !0)
      })).apply(void 0, d);
    }, g;
  };
}, a3 = [
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
], eu = i3.bind();
a3.forEach(function(e) {
  eu[e] = eu(e);
});
var Ng, s3 = (Ng = eu.default) != null ? Ng : eu, l3 = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: i, ...a } = t, s = SS(a, (d, f) => nE(f)), l = wS(e, t), u = Jz(
    {},
    o,
    l,
    xS(s),
    i
  ), c = nS(u)(t.theme);
  return n ? [c, n] : c;
};
function ud(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = Zz);
  const o = l3({ baseStyle: r }), i = s3(
    e,
    n
  )(o);
  return Kn.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = mp();
    return Kn.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function u3() {
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
var Q = u3();
function Me(e) {
  return b.forwardRef(e);
}
function c3(e = {}) {
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
function d3(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, o = b.useMemo(() => eE(r), [r]);
  return /* @__PURE__ */ T.jsxs(AT, { theme: o, children: [
    /* @__PURE__ */ T.jsx(f3, { root: t }),
    n
  ] });
}
function f3({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ T.jsx(Wu, { styles: (r) => ({ [t]: r.__cssVars }) });
}
c3({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function h3() {
  const { colorMode: e } = mp();
  return /* @__PURE__ */ T.jsx(
    Wu,
    {
      styles: (t) => {
        const r = bS(t, "styles.global"), n = wS(r, { theme: t, colorMode: e });
        return n ? nS(n)(t) : void 0;
      }
    }
  );
}
var CS = b.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
CS.displayName = "EnvironmentContext";
function _S(e) {
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
  return /* @__PURE__ */ T.jsxs(CS.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ T.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
_S.displayName = "EnvironmentProvider";
var p3 = (e) => {
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
  } = e, d = /* @__PURE__ */ T.jsx(
    _S,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ T.jsx(d3, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ T.jsxs(
    qb,
    {
      colorModeManager: r,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ T.jsx(zT, { scope: o }) : /* @__PURE__ */ T.jsx(MT, {}),
        !c && /* @__PURE__ */ T.jsx(h3, {}),
        n ? /* @__PURE__ */ T.jsx(Kb, { zIndex: n, children: d }) : d
      ]
    }
  ) });
}, m3 = (e, t) => e.find((r) => r.id === t);
function Bg(e, t) {
  const r = TS(e, t), n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function TS(e, t) {
  for (const [r, n] of Object.entries(e))
    if (m3(n, t))
      return r;
}
function v3(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function g3(e) {
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
function y3(e, t) {
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
const PS = b.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), qu = b.createContext({}), Za = b.createContext(null), Qu = typeof document < "u", Cp = Qu ? b.useLayoutEffect : b.useEffect, ES = b.createContext({ strict: !1 });
function b3(e, t, r, n) {
  const { visualElement: o } = b.useContext(qu), i = b.useContext(ES), a = b.useContext(Za), s = b.useContext(PS).reducedMotion, l = b.useRef();
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
  return Cp(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), b.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), window.HandoffAppearAnimations = !1, c.current = !1);
  }), u;
}
function Io(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function S3(e, t, r) {
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
function La(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Zu(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const _p = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Tp = ["initial", ..._p];
function Ju(e) {
  return Zu(e.animate) || Tp.some((t) => La(e[t]));
}
function $S(e) {
  return !!(Ju(e) || e.variants);
}
function x3(e, t) {
  if (Ju(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || La(r) ? r : void 0,
      animate: La(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function w3(e) {
  const { initial: t, animate: r } = x3(e, b.useContext(qu));
  return b.useMemo(() => ({ initial: t, animate: r }), [jg(t), jg(r)]);
}
function jg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Vg = {
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
}, Oa = {};
for (const e in Vg)
  Oa[e] = {
    isEnabled: (t) => Vg[e].some((r) => !!t[r])
  };
function k3(e) {
  for (const t in e)
    Oa[t] = {
      ...Oa[t],
      ...e[t]
    };
}
const Pp = b.createContext({}), AS = b.createContext({}), C3 = Symbol.for("motionComponentSymbol");
function _3({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && k3(e);
  function i(s, l) {
    let u;
    const c = {
      ...b.useContext(PS),
      ...s,
      layoutId: T3(s)
    }, { isStatic: d } = c, f = w3(s), p = n(s, d);
    if (!d && Qu) {
      f.visualElement = b3(o, p, c, t);
      const g = b.useContext(AS), y = b.useContext(ES).strict;
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
      r(o, s, S3(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = b.forwardRef(i);
  return a[C3] = o, a;
}
function T3({ layoutId: e }) {
  const t = b.useContext(Pp).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function P3(e) {
  function t(n, o = {}) {
    return _3(e(n, o));
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
const E3 = [
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
function Ep(e) {
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
      !!(E3.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const tu = {};
function $3(e) {
  Object.assign(tu, e);
}
const Ja = [
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
], no = new Set(Ja);
function RS(e, { layout: t, layoutId: r }) {
  return no.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!tu[e] || e === "opacity");
}
const xt = (e) => !!(e && e.getVelocity), A3 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, R3 = Ja.length;
function M3(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = "";
  for (let a = 0; a < R3; a++) {
    const s = Ja[a];
    if (e[s] !== void 0) {
      const l = A3[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, n ? "" : i) : r && n && (i = "none"), i;
}
const MS = (e) => (t) => typeof t == "string" && t.startsWith(e), zS = MS("--"), Lf = MS("var(--"), z3 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, I3 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, mn = (e, t, r) => Math.min(Math.max(r, e), t), oo = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, sa = {
  ...oo,
  transform: (e) => mn(0, 1, e)
}, js = {
  ...oo,
  default: 1
}, la = (e) => Math.round(e * 1e5) / 1e5, ec = /(-)?([\d]*\.?[\d])+/g, IS = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, F3 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function es(e) {
  return typeof e == "string";
}
const ts = (e) => ({
  test: (t) => es(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Gr = ts("deg"), yr = ts("%"), j = ts("px"), D3 = ts("vh"), L3 = ts("vw"), Wg = {
  ...yr,
  parse: (e) => yr.parse(e) / 100,
  transform: (e) => yr.transform(e * 100)
}, Ug = {
  ...oo,
  transform: Math.round
}, FS = {
  // Border props
  borderWidth: j,
  borderTopWidth: j,
  borderRightWidth: j,
  borderBottomWidth: j,
  borderLeftWidth: j,
  borderRadius: j,
  radius: j,
  borderTopLeftRadius: j,
  borderTopRightRadius: j,
  borderBottomRightRadius: j,
  borderBottomLeftRadius: j,
  // Positioning props
  width: j,
  maxWidth: j,
  height: j,
  maxHeight: j,
  size: j,
  top: j,
  right: j,
  bottom: j,
  left: j,
  // Spacing props
  padding: j,
  paddingTop: j,
  paddingRight: j,
  paddingBottom: j,
  paddingLeft: j,
  margin: j,
  marginTop: j,
  marginRight: j,
  marginBottom: j,
  marginLeft: j,
  // Transform props
  rotate: Gr,
  rotateX: Gr,
  rotateY: Gr,
  rotateZ: Gr,
  scale: js,
  scaleX: js,
  scaleY: js,
  scaleZ: js,
  skew: Gr,
  skewX: Gr,
  skewY: Gr,
  distance: j,
  translateX: j,
  translateY: j,
  translateZ: j,
  x: j,
  y: j,
  z: j,
  perspective: j,
  transformPerspective: j,
  opacity: sa,
  originX: Wg,
  originY: Wg,
  originZ: j,
  // Misc
  zIndex: Ug,
  // SVG
  fillOpacity: sa,
  strokeOpacity: sa,
  numOctaves: Ug
};
function $p(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (zS(d)) {
      i[d] = f;
      continue;
    }
    const p = FS[d], g = I3(f, p);
    if (no.has(d)) {
      if (l = !0, a[d] = g, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = g) : o[d] = g;
  }
  if (t.transform || (l || n ? o.transform = M3(e.transform, r, c, n) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Ap = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function DS(e, t, r) {
  for (const n in t)
    !xt(t[n]) && !RS(n, r) && (e[n] = t[n]);
}
function O3({ transformTemplate: e }, t, r) {
  return b.useMemo(() => {
    const n = Ap();
    return $p(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function N3(e, t, r) {
  const n = e.style || {}, o = {};
  return DS(o, n, e), Object.assign(o, O3(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function B3(e, t, r) {
  const n = {}, o = N3(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const j3 = /* @__PURE__ */ new Set([
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
function ru(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || j3.has(e);
}
let LS = (e) => !ru(e);
function V3(e) {
  e && (LS = (t) => t.startsWith("on") ? !ru(t) : e(t));
}
try {
  V3(require("@emotion/is-prop-valid").default);
} catch {
}
function W3(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (LS(o) || r === !0 && ru(o) || !t && !ru(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function Hg(e, t, r) {
  return typeof e == "string" ? e : j.transform(t + r * e);
}
function U3(e, t, r) {
  const n = Hg(t, e.x, e.width), o = Hg(r, e.y, e.height);
  return `${n} ${o}`;
}
const H3 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, G3 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function K3(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? H3 : G3;
  e[i.offset] = j.transform(-n);
  const a = j.transform(t), s = j.transform(r);
  e[i.array] = `${a} ${s}`;
}
function Rp(e, {
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
  if ($p(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: g, dimensions: y } = e;
  p.transform && (y && (g.transform = p.transform), delete p.transform), y && (o !== void 0 || i !== void 0 || g.transform) && (g.transformOrigin = U3(y, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), a !== void 0 && K3(p, a, s, l, !1);
}
const OS = () => ({
  ...Ap(),
  attrs: {}
}), Mp = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Y3(e, t, r, n) {
  const o = b.useMemo(() => {
    const i = OS();
    return Rp(i, t, { enableHardwareAcceleration: !1 }, Mp(n), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    DS(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function X3(e = !1) {
  return (r, n, o, { latestValues: i }, a) => {
    const l = (Ep(r) ? Y3 : B3)(n, i, a, r), c = {
      ...W3(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = b.useMemo(() => xt(d) ? d.get() : d, [d]);
    return b.createElement(r, {
      ...c,
      children: f
    });
  };
}
const zp = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function NS(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r)
    e.style.setProperty(i, r[i]);
}
const BS = /* @__PURE__ */ new Set([
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
function jS(e, t, r, n) {
  NS(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(BS.has(o) ? o : zp(o), t.attrs[o]);
}
function Ip(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (xt(r[o]) || t.style && xt(t.style[o]) || RS(o, e)) && (n[o] = r[o]);
  return n;
}
function VS(e, t) {
  const r = Ip(e, t);
  for (const n in e)
    if (xt(e[n]) || xt(t[n])) {
      const o = Ja.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function Fp(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function WS(e) {
  const t = b.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const nu = (e) => Array.isArray(e), q3 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Q3 = (e) => nu(e) ? e[e.length - 1] || 0 : e;
function Sl(e) {
  const t = xt(e) ? e.get() : e;
  return q3(t) ? t.toValue() : t;
}
function Z3({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = {
    latestValues: J3(n, o, i, e),
    renderState: t()
  };
  return r && (a.mount = (s) => r(n, s, a)), a;
}
const US = (e) => (t, r) => {
  const n = b.useContext(qu), o = b.useContext(Za), i = () => Z3(e, t, n, o);
  return r ? i() : WS(i);
};
function J3(e, t, r, n) {
  const o = {}, i = n(e, {});
  for (const f in i)
    o[f] = Sl(i[f]);
  let { initial: a, animate: s } = e;
  const l = Ju(e), u = $S(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Zu(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const g = Fp(e, p);
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
const Re = (e) => e;
class Gg {
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
function eI(e) {
  let t = new Gg(), r = new Gg(), n = 0, o = !1, i = !1;
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
const Vs = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], tI = 40;
function rI(e, t) {
  let r = !1, n = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = Vs.reduce((d, f) => (d[f] = eI(() => r = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    r = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, tI), 1), o.timestamp = d, o.isProcessing = !0, Vs.forEach(a), o.isProcessing = !1, r && t && (n = !1, e(s));
  }, l = () => {
    r = !0, n = !0, o.isProcessing || e(s);
  };
  return { schedule: Vs.reduce((d, f) => {
    const p = i[f];
    return d[f] = (g, y = !1, x = !1) => (r || l(), p.schedule(g, y, x)), d;
  }, {}), cancel: (d) => Vs.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: he, cancel: Br, state: Ue, steps: cd } = rI(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Re, !0), nI = {
  useVisualState: US({
    scrapeMotionValuesFromProps: VS,
    createRenderState: OS,
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
        Rp(r, n, { enableHardwareAcceleration: !1 }, Mp(t.tagName), e.transformTemplate), jS(t, r);
      });
    }
  })
}, oI = {
  useVisualState: US({
    scrapeMotionValuesFromProps: Ip,
    createRenderState: Ap
  })
};
function iI(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...Ep(e) ? nI : oI,
    preloadedFeatures: r,
    useRender: X3(t),
    createVisualElement: n,
    Component: e
  };
}
function Ar(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const HS = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function tc(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const aI = (e) => (t) => HS(t) && e(t, tc(t));
function zr(e, t, r, n) {
  return Ar(e, t, aI(r), n);
}
const sI = (e, t) => (r) => t(e(r)), dn = (...e) => e.reduce(sI);
function GS(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const Kg = GS("dragHorizontal"), Yg = GS("dragVertical");
function KS(e) {
  let t = !1;
  if (e === "y")
    t = Yg();
  else if (e === "x")
    t = Kg();
  else {
    const r = Kg(), n = Yg();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function YS() {
  const e = KS(!0);
  return e ? (e(), !1) : !0;
}
class wn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Xg(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || YS())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && he.update(() => s[n](i, a));
  };
  return zr(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class lI extends wn {
  mount() {
    this.unmount = dn(Xg(this.node, !0), Xg(this.node, !1));
  }
  unmount() {
  }
}
class uI extends wn {
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
    this.unmount = dn(Ar(this.node.current, "focus", () => this.onFocus()), Ar(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const XS = (e, t) => t ? e === t ? !0 : XS(e, t.parentElement) : !1;
function dd(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, tc(r));
}
class cI extends wn {
  constructor() {
    super(...arguments), this.removeStartListeners = Re, this.removeEndListeners = Re, this.removeAccessibleListeners = Re, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), i = zr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        he.update(() => {
          XS(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), a = zr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = dn(i, a), this.startPress(t, r);
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
        this.removeEndListeners(), this.removeEndListeners = Ar(this.node.current, "keyup", a), dd("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Ar(this.node.current, "keydown", t), n = () => {
        this.isPressing && dd("cancel", (i, a) => this.cancelPress(i, a));
      }, o = Ar(this.node.current, "blur", n);
      this.removeAccessibleListeners = dn(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && he.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !YS();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && he.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = zr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Ar(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = dn(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Of = /* @__PURE__ */ new WeakMap(), fd = /* @__PURE__ */ new WeakMap(), dI = (e) => {
  const t = Of.get(e.target);
  t && t(e);
}, fI = (e) => {
  e.forEach(dI);
};
function hI({ root: e, ...t }) {
  const r = e || document;
  fd.has(r) || fd.set(r, {});
  const n = fd.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(fI, { root: e, ...t })), n[o];
}
function pI(e, t, r) {
  const n = hI(t);
  return Of.set(e, r), n.observe(e), () => {
    Of.delete(e), n.unobserve(e);
  };
}
const mI = {
  some: 0,
  all: 1
};
class vI extends wn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: i } = t, a = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : mI[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return pI(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(gI(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function gI({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const yI = {
  inView: {
    Feature: vI
  },
  tap: {
    Feature: cI
  },
  focus: {
    Feature: uI
  },
  hover: {
    Feature: lI
  }
};
function qS(e, t) {
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
function bI(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function SI(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function rc(e, t, r) {
  const n = e.getProps();
  return Fp(n, t, r !== void 0 ? r : n.custom, bI(e), SI(e));
}
const xI = "framerAppearId", wI = "data-" + zp(xI);
let kI = Re, Dp = Re;
const fn = (e) => e * 1e3, Ir = (e) => e / 1e3, CI = {
  current: !1
}, QS = (e) => Array.isArray(e) && typeof e[0] == "number";
function ZS(e) {
  return !!(!e || typeof e == "string" && JS[e] || QS(e) || Array.isArray(e) && e.every(ZS));
}
const Hi = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, JS = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Hi([0, 0.65, 0.55, 1]),
  circOut: Hi([0.55, 0, 1, 0.45]),
  backIn: Hi([0.31, 0.01, 0.66, -0.59]),
  backOut: Hi([0.33, 1.53, 0.69, 0.99])
};
function ex(e) {
  if (e)
    return QS(e) ? Hi(e) : Array.isArray(e) ? e.map(ex) : JS[e];
}
function _I(e, t, r, { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: r };
  l && (u.offset = l);
  const c = ex(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: n,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function TI(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const tx = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, PI = 1e-7, EI = 12;
function $I(e, t, r, n, o) {
  let i, a, s = 0;
  do
    a = t + (r - t) / 2, i = tx(a, n, o) - e, i > 0 ? r = a : t = a;
  while (Math.abs(i) > PI && ++s < EI);
  return a;
}
function rs(e, t, r, n) {
  if (e === t && r === n)
    return Re;
  const o = (i) => $I(i, 0, 1, e, r);
  return (i) => i === 0 || i === 1 ? i : tx(o(i), t, n);
}
const AI = rs(0.42, 0, 1, 1), RI = rs(0, 0, 0.58, 1), rx = rs(0.42, 0, 0.58, 1), MI = (e) => Array.isArray(e) && typeof e[0] != "number", nx = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, ox = (e) => (t) => 1 - e(1 - t), ix = (e) => 1 - Math.sin(Math.acos(e)), Lp = ox(ix), zI = nx(Lp), ax = rs(0.33, 1.53, 0.69, 0.99), Op = ox(ax), II = nx(Op), FI = (e) => (e *= 2) < 1 ? 0.5 * Op(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), DI = {
  linear: Re,
  easeIn: AI,
  easeInOut: rx,
  easeOut: RI,
  circIn: ix,
  circInOut: zI,
  circOut: Lp,
  backIn: Op,
  backInOut: II,
  backOut: ax,
  anticipate: FI
}, qg = (e) => {
  if (Array.isArray(e)) {
    Dp(e.length === 4);
    const [t, r, n, o] = e;
    return rs(t, r, n, o);
  } else if (typeof e == "string")
    return DI[e];
  return e;
}, Np = (e, t) => (r) => !!(es(r) && F3.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), sx = (e, t, r) => (n) => {
  if (!es(n))
    return n;
  const [o, i, a, s] = n.match(ec);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [r]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, LI = (e) => mn(0, 255, e), hd = {
  ...oo,
  transform: (e) => Math.round(LI(e))
}, Nn = {
  test: Np("rgb", "red"),
  parse: sx("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + hd.transform(e) + ", " + hd.transform(t) + ", " + hd.transform(r) + ", " + la(sa.transform(n)) + ")"
};
function OI(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Nf = {
  test: Np("#"),
  parse: OI,
  transform: Nn.transform
}, Fo = {
  test: Np("hsl", "hue"),
  parse: sx("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + yr.transform(la(t)) + ", " + yr.transform(la(r)) + ", " + la(sa.transform(n)) + ")"
}, at = {
  test: (e) => Nn.test(e) || Nf.test(e) || Fo.test(e),
  parse: (e) => Nn.test(e) ? Nn.parse(e) : Fo.test(e) ? Fo.parse(e) : Nf.parse(e),
  transform: (e) => es(e) ? e : e.hasOwnProperty("red") ? Nn.transform(e) : Fo.transform(e)
}, Ce = (e, t, r) => -r * e + r * t + e;
function pd(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function NI({ hue: e, saturation: t, lightness: r, alpha: n }) {
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
}, BI = [Nf, Nn, Fo], jI = (e) => BI.find((t) => t.test(e));
function Qg(e) {
  const t = jI(e);
  let r = t.parse(e);
  return t === Fo && (r = NI(r)), r;
}
const lx = (e, t) => {
  const r = Qg(e), n = Qg(t), o = { ...r };
  return (i) => (o.red = md(r.red, n.red, i), o.green = md(r.green, n.green, i), o.blue = md(r.blue, n.blue, i), o.alpha = Ce(r.alpha, n.alpha, i), Nn.transform(o));
};
function VI(e) {
  var t, r;
  return isNaN(e) && es(e) && (((t = e.match(ec)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(IS)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const ux = {
  regex: z3,
  countKey: "Vars",
  token: "${v}",
  parse: Re
}, cx = {
  regex: IS,
  countKey: "Colors",
  token: "${c}",
  parse: at.parse
}, dx = {
  regex: ec,
  countKey: "Numbers",
  token: "${n}",
  parse: oo.parse
};
function vd(e, { regex: t, countKey: r, token: n, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + r] = i.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...i.map(o)));
}
function ou(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && vd(r, ux), vd(r, cx), vd(r, dx), r;
}
function fx(e) {
  return ou(e).values;
}
function hx(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = ou(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < n ? s = s.replace(ux.token, a[l]) : l < n + r ? s = s.replace(cx.token, at.transform(a[l])) : s = s.replace(dx.token, la(a[l]));
    return s;
  };
}
const WI = (e) => typeof e == "number" ? 0 : e;
function UI(e) {
  const t = fx(e);
  return hx(e)(t.map(WI));
}
const vn = {
  test: VI,
  parse: fx,
  createTransformer: hx,
  getAnimatableNone: UI
}, px = (e, t) => (r) => `${r > 0 ? t : e}`;
function mx(e, t) {
  return typeof e == "number" ? (r) => Ce(e, t, r) : at.test(e) ? lx(e, t) : e.startsWith("var(") ? px(e, t) : gx(e, t);
}
const vx = (e, t) => {
  const r = [...e], n = r.length, o = e.map((i, a) => mx(i, t[a]));
  return (i) => {
    for (let a = 0; a < n; a++)
      r[a] = o[a](i);
    return r;
  };
}, HI = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = mx(e[o], t[o]));
  return (o) => {
    for (const i in n)
      r[i] = n[i](o);
    return r;
  };
}, gx = (e, t) => {
  const r = vn.createTransformer(t), n = ou(e), o = ou(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? dn(vx(n.values, o.values), r) : px(e, t);
}, Na = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, Zg = (e, t) => (r) => Ce(e, t, r);
function GI(e) {
  return typeof e == "number" ? Zg : typeof e == "string" ? at.test(e) ? lx : gx : Array.isArray(e) ? vx : typeof e == "object" ? HI : Zg;
}
function KI(e, t, r) {
  const n = [], o = r || GI(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Re : t;
      s = dn(l, s);
    }
    n.push(s);
  }
  return n;
}
function yx(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if (Dp(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = KI(t, n, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = Na(e[c], e[c + 1], u);
    return a[c](d);
  };
  return r ? (u) => l(mn(e[0], e[i - 1], u)) : l;
}
function YI(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = Na(0, t, n);
    e.push(Ce(r, 1, o));
  }
}
function XI(e) {
  const t = [0];
  return YI(t, e.length - 1), t;
}
function qI(e, t) {
  return e.map((r) => r * t);
}
function QI(e, t) {
  return e.map(() => t || rx).splice(0, e.length - 1);
}
function iu({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = MI(n) ? n.map(qg) : qg(n), i = {
    done: !1,
    value: t[0]
  }, a = qI(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : XI(t),
    e
  ), s = yx(a, t, {
    ease: Array.isArray(o) ? o : QI(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function bx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ZI = 5;
function Sx(e, t, r) {
  const n = Math.max(t - ZI, 0);
  return bx(r - e(n), t - n);
}
const gd = 1e-3, JI = 0.01, Jg = 10, e4 = 0.05, t4 = 1;
function r4({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i;
  kI(e <= fn(Jg));
  let a = 1 - t;
  a = mn(e4, t4, a), e = mn(JI, Jg, Ir(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - r, p = Bf(u, a), g = Math.exp(-d);
    return gd - f / p * g;
  }, i = (u) => {
    const d = u * a * e, f = d * r + r, p = Math.pow(a, 2) * Math.pow(u, 2) * e, g = Math.exp(-d), y = Bf(Math.pow(u, 2), a);
    return (-o(u) + gd > 0 ? -1 : 1) * ((f - p) * g) / y;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - r) * e + 1;
    return -gd + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (r - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = o4(o, i, s);
  if (e = fn(e), isNaN(l))
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
const n4 = 12;
function o4(e, t, r) {
  let n = r;
  for (let o = 1; o < n4; o++)
    n = n - e(n) / t(n);
  return n;
}
function Bf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const i4 = ["duration", "bounce"], a4 = ["stiffness", "damping", "mass"];
function e0(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function s4(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!e0(e, a4) && e0(e, i4)) {
    const r = r4(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function xx({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = s4(n), p = c ? -Ir(c) : 0, g = l / (2 * Math.sqrt(s * u)), y = i - o, x = Ir(Math.sqrt(s / u)), m = Math.abs(y) < 5;
  r || (r = m ? 0.01 : 2), t || (t = m ? 5e-3 : 0.5);
  let h;
  if (g < 1) {
    const v = Bf(x, g);
    h = (w) => {
      const _ = Math.exp(-g * x * w);
      return i - _ * ((p + g * x * y) / v * Math.sin(v * w) + y * Math.cos(v * w));
    };
  } else if (g === 1)
    h = (v) => i - Math.exp(-x * v) * (y + (p + x * y) * v);
  else {
    const v = x * Math.sqrt(g * g - 1);
    h = (w) => {
      const _ = Math.exp(-g * x * w), A = Math.min(v * w, 300);
      return i - _ * ((p + g * x * y) * Math.sinh(A) + v * y * Math.cosh(A)) / v;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (v) => {
      const w = h(v);
      if (f)
        a.done = v >= d;
      else {
        let _ = p;
        v !== 0 && (g < 1 ? _ = Sx(h, v, w) : _ = 0);
        const A = Math.abs(_) <= r, P = Math.abs(i - w) <= t;
        a.done = A && P;
      }
      return a.value = a.done ? i : w, a;
    }
  };
}
function t0({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
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
  let _, A;
  const P = ($) => {
    p(f.value) && (_ = $, A = xx({
      keyframes: [f.value, g(f.value)],
      velocity: Sx(v, $, f.value),
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
      return !A && _ === void 0 && (M = !0, w($), P($)), _ !== void 0 && $ > _ ? A.next($ - _) : (!M && w($), f);
    }
  };
}
const l4 = (e) => {
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
}, r0 = 2e4;
function n0(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < r0; )
    t += r, n = e.next(t);
  return t >= r0 ? 1 / 0 : t;
}
const u4 = {
  decay: t0,
  inertia: t0,
  tween: iu,
  keyframes: iu,
  spring: xx
};
function au({ autoplay: e = !0, delay: t = 0, driver: r = l4, keyframes: n, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, g = !1, y, x;
  const m = () => {
    x = new Promise((B) => {
      y = B;
    });
  };
  m();
  let h;
  const v = u4[o] || iu;
  let w;
  v !== iu && typeof n[0] != "number" && (w = yx([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const _ = v({ ...f, keyframes: n });
  let A;
  s === "mirror" && (A = v({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let P = "idle", $ = null, M = null, I = null;
  _.calculatedDuration === null && i && (_.calculatedDuration = n0(_));
  const { calculatedDuration: H } = _;
  let ce = 1 / 0, me = 1 / 0;
  H !== null && (ce = H + a, me = ce * (i + 1) - a);
  let Z = 0;
  const ue = (B) => {
    if (M === null)
      return;
    p > 0 && (M = Math.min(M, B)), p < 0 && (M = Math.min(B - me / p, M)), $ !== null ? Z = $ : Z = Math.round(B - M) * p;
    const J = Z - t * (p >= 0 ? 1 : -1), W = p >= 0 ? J < 0 : J > me;
    Z = Math.max(J, 0), P === "finished" && $ === null && (Z = me);
    let te = Z, wt = _;
    if (i) {
      const Ft = Z / ce;
      let kt = Math.floor(Ft), Dt = Ft % 1;
      !Dt && Ft >= 1 && (Dt = 1), Dt === 1 && kt--, kt = Math.min(kt, i + 1);
      const kn = !!(kt % 2);
      kn && (s === "reverse" ? (Dt = 1 - Dt, a && (Dt -= a / ce)) : s === "mirror" && (wt = A));
      let io = mn(0, 1, Dt);
      Z > me && (io = s === "reverse" && kn ? 1 : 0), te = io * ce;
    }
    const be = W ? { done: !1, value: n[0] } : wt.next(te);
    w && (be.value = w(be.value));
    let { done: Ie } = be;
    !W && H !== null && (Ie = p >= 0 ? Z >= me : Z <= 0);
    const Je = $ === null && (P === "finished" || P === "running" && Ie);
    return d && d(be.value), Je && z(), be;
  }, Ee = () => {
    h && h.stop(), h = void 0;
  }, ze = () => {
    P = "idle", Ee(), y(), m(), M = I = null;
  }, z = () => {
    P = "finished", c && c(), Ee(), y();
  }, N = () => {
    if (g)
      return;
    h || (h = r(ue));
    const B = h.now();
    l && l(), $ !== null ? M = B - $ : (!M || P === "finished") && (M = B), P === "finished" && m(), I = M, $ = null, P = "running", h.start();
  };
  e && N();
  const V = {
    then(B, J) {
      return x.then(B, J);
    },
    get time() {
      return Ir(Z);
    },
    set time(B) {
      B = fn(B), Z = B, $ !== null || !h || p === 0 ? $ = B : M = h.now() - B / p;
    },
    get duration() {
      const B = _.calculatedDuration === null ? n0(_) : _.calculatedDuration;
      return Ir(B);
    },
    get speed() {
      return p;
    },
    set speed(B) {
      B === p || !h || (p = B, V.time = Ir(Z));
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
    sample: (B) => (M = 0, ue(B))
  };
  return V;
}
function c4(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const d4 = c4(() => Object.hasOwnProperty.call(Element.prototype, "animate")), f4 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Ws = 10, h4 = 2e4, p4 = (e, t) => t.type === "spring" || e === "backgroundColor" || !ZS(t.ease);
function m4(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(d4() && f4.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (p4(t, o)) {
    const h = au({
      ...o,
      repeat: 0,
      delay: 0
    });
    let v = { done: !1, value: c[0] };
    const w = [];
    let _ = 0;
    for (; !v.done && _ < h4; )
      v = h.sample(_), w.push(v.value), _ += Ws;
    p = void 0, c = w, d = _ - Ws, f = "linear";
  }
  const g = _I(e.owner.current, t, c, {
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
    e.set(TI(c, o)), n && n(), x();
  }, {
    then(h, v) {
      return l.then(h, v);
    },
    attachTimeline(h) {
      return g.timeline = h, g.onfinish = null, Re;
    },
    get time() {
      return Ir(g.currentTime || 0);
    },
    set time(h) {
      g.currentTime = fn(h);
    },
    get speed() {
      return g.playbackRate;
    },
    set speed(h) {
      g.playbackRate = h;
    },
    get duration() {
      return Ir(d);
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
        const v = au({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(v.sample(h - Ws).value, v.sample(h).value, Ws);
      }
      x();
    },
    complete: () => g.finish(),
    cancel: x
  };
}
function v4({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: Re,
    pause: Re,
    stop: Re,
    then: (i) => (i(), Promise.resolve()),
    cancel: Re,
    complete: Re
  });
  return t ? au({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const g4 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, y4 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), b4 = {
  type: "keyframes",
  duration: 0.8
}, S4 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, x4 = (e, { keyframes: t }) => t.length > 2 ? b4 : no.has(e) ? e.startsWith("scale") ? y4(t[1]) : g4 : S4, jf = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(vn.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), w4 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function k4(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(ec) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let i = w4.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const C4 = /([a-z-]*)\(.*?\)/g, Vf = {
  ...vn,
  getAnimatableNone: (e) => {
    const t = e.match(C4);
    return t ? t.map(k4).join(" ") : e;
  }
}, _4 = {
  ...FS,
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
}, Bp = (e) => _4[e];
function wx(e, t) {
  let r = Bp(e);
  return r !== Vf && (r = vn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const kx = (e) => /^0[^.\s]+$/.test(e);
function T4(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || kx(e);
}
function P4(e, t, r, n) {
  const o = jf(t, r);
  let i;
  Array.isArray(r) ? i = [...r] : i = [null, r];
  const a = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), T4(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = wx(t, s);
    }
  return i;
}
function E4({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function Cx(e, t) {
  return e[t] || e.default || e;
}
const jp = (e, t, r, n = {}) => (o) => {
  const i = Cx(n, e) || {}, a = i.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - fn(a);
  const l = P4(t, e, r, i), u = l[0], c = l[l.length - 1], d = jf(e, u), f = jf(e, c);
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
  if (E4(i) || (p = {
    ...p,
    ...x4(e, p)
  }), p.duration && (p.duration = fn(p.duration)), p.repeatDelay && (p.repeatDelay = fn(p.repeatDelay)), !d || !f || CI.current || i.type === !1)
    return v4(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const g = m4(t, e, p);
    if (g)
      return g;
  }
  return au(p);
};
function su(e) {
  return !!(xt(e) && e.add);
}
const _x = (e) => /^\-?\d*\.?\d+$/.test(e);
function Vp(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Wp(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Up {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Vp(this.subscriptions, t), () => Wp(this.subscriptions, t);
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
const $4 = (e) => !isNaN(parseFloat(e));
class A4 {
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
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = $4(this.current), this.owner = r.owner;
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
    this.events[t] || (this.events[t] = new Up());
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
      bx(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
  return new A4(e, t);
}
const Tx = (e) => (t) => t.test(e), R4 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Px = [oo, j, yr, Gr, L3, D3, R4], Mi = (e) => Px.find(Tx(e)), M4 = [...Px, at, vn], z4 = (e) => M4.find(Tx(e));
function I4(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, ui(r));
}
function F4(e, t) {
  const r = rc(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const a in i) {
    const s = Q3(i[a]);
    I4(e, a, s);
  }
}
function D4(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (_x(c) || kx(c)) ? c = parseFloat(c) : !z4(c) && vn.test(u) && (c = wx(l, u)), e.addValue(l, ui(c, { owner: e })), r[l] === void 0 && (r[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function L4(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function O4(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = L4(o, t);
    if (i !== void 0)
      n[o] = i;
    else {
      const a = r.getValue(o);
      a && (n[o] = a.get());
    }
  }
  return n;
}
function N4({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function Ex(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (i = n);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && N4(c, d))
      continue;
    const g = {
      delay: r,
      elapsed: 0,
      ...i
    };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const x = e.getProps()[wI];
      x && (g.elapsed = window.HandoffAppearAnimations(x, d, f, he), g.syncStart = !0);
    }
    f.start(jp(d, f, p, e.shouldReduceMotion && no.has(d) ? { type: !1 } : g));
    const y = f.animation;
    su(l) && (l.add(d), y.then(() => l.remove(d))), u.push(y);
  }
  return a && Promise.all(u).then(() => {
    a && F4(e, a);
  }), u;
}
function Wf(e, t, r = {}) {
  const n = rc(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => Promise.all(Ex(e, n, r)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return B4(e, t, u + l, c, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(r.delay)]);
}
function B4(e, t, r = 0, n = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n;
  return Array.from(e.variantChildren).sort(j4).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(Wf(u, t, {
      ...i,
      delay: r + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function j4(e, t) {
  return e.sortNodePosition(t);
}
function V4(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Wf(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Wf(e, t, r);
  else {
    const o = typeof t == "function" ? rc(e, t, r.custom) : t;
    n = Promise.all(Ex(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const W4 = [..._p].reverse(), U4 = _p.length;
function H4(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => V4(e, r, n)));
}
function G4(e) {
  let t = H4(e);
  const r = Y4();
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
    for (let m = 0; m < U4; m++) {
      const h = W4[m], v = r[h], w = c[h] !== void 0 ? c[h] : d[h], _ = La(w), A = h === u ? v.isActive : null;
      A === !1 && (y = m);
      let P = w === d[h] && w !== c[h] && _;
      if (P && n && e.manuallyAnimateOnMount && (P = !1), v.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !v.isActive && A === null || // If we didn't and don't have any defined prop for this animation type
      !w && !v.prevProp || // Or if the prop doesn't define an animation
      Zu(w) || typeof w == "boolean")
        continue;
      const $ = K4(v.prevProp, w);
      let M = $ || // If we're making this variant active, we want to always make it active
      h === u && v.isActive && !P && _ || // If we removed a higher-priority variant (i is in reverse order)
      m > y && _;
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
        const Ee = H[ue], ze = ce[ue];
        g.hasOwnProperty(ue) || (Ee !== ze ? nu(Ee) && nu(ze) ? !qS(Ee, ze) || $ ? Z(ue) : v.protectedKeys[ue] = !0 : Ee !== void 0 ? Z(ue) : p.add(ue) : Ee !== void 0 && p.has(ue) ? Z(ue) : v.protectedKeys[ue] = !0);
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
function K4(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !qS(t, e) : !1;
}
function Pn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Y4() {
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
class X4 extends wn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = G4(t));
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
let q4 = 0;
class Q4 extends wn {
  constructor() {
    super(...arguments), this.id = q4++;
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
const Z4 = {
  animation: {
    Feature: X4
  },
  exit: {
    Feature: Q4
  }
}, o0 = (e, t) => Math.abs(e - t);
function J4(e, t) {
  const r = o0(e.x, t.x), n = o0(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class $x {
  constructor(t, r, { transformPagePoint: n, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = bd(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = J4(c.offset, { x: 0, y: 0 }) >= 3;
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
    }, !HS(t))
      return;
    this.handlers = r, this.transformPagePoint = n, this.contextWindow = o || window;
    const i = tc(t), a = yd(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = Ue;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = r;
    u && u(t, bd(a, this.history)), this.removeListeners = dn(zr(this.contextWindow, "pointermove", this.handlePointerMove), zr(this.contextWindow, "pointerup", this.handlePointerUp), zr(this.contextWindow, "pointercancel", this.handlePointerUp));
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
function i0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function bd({ point: e }, t) {
  return {
    point: e,
    delta: i0(e, Ax(t)),
    offset: i0(e, eF(t)),
    velocity: tF(t, 0.1)
  };
}
function eF(e) {
  return e[0];
}
function Ax(e) {
  return e[e.length - 1];
}
function tF(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = Ax(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > fn(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const i = Ir(o.timestamp - n.timestamp);
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
function a0(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = Ce(t.min, t.max, e.origin), e.scale = Rt(r) / Rt(t), (Uf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Ce(r.min, r.max, e.origin) - e.originPoint, (Uf(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ua(e, t, r, n) {
  a0(e.x, t.x, r.x, n ? n.originX : void 0), a0(e.y, t.y, r.y, n ? n.originY : void 0);
}
function s0(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Rt(t);
}
function rF(e, t, r) {
  s0(e.x, t.x, r.x), s0(e.y, t.y, r.y);
}
function l0(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Rt(t);
}
function ca(e, t, r) {
  l0(e.x, t.x, r.x), l0(e.y, t.y, r.y);
}
function nF(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? Ce(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? Ce(r, e, n.max) : Math.min(e, r)), e;
}
function u0(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function oF(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: u0(e.x, r, o),
    y: u0(e.y, t, n)
  };
}
function c0(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function iF(e, t) {
  return {
    x: c0(e.x, t.x),
    y: c0(e.y, t.y)
  };
}
function aF(e, t) {
  let r = 0.5;
  const n = Rt(e), o = Rt(t);
  return o > n ? r = Na(t.min, t.max - n, e.min) : n > o && (r = Na(e.min, e.max - o, t.min)), mn(0, 1, r);
}
function sF(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Hf = 0.35;
function lF(e = Hf) {
  return e === !1 ? e = 0 : e === !0 && (e = Hf), {
    x: d0(e, "left", "right"),
    y: d0(e, "top", "bottom")
  };
}
function d0(e, t, r) {
  return {
    min: f0(e, t),
    max: f0(e, r)
  };
}
function f0(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const h0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Do = () => ({
  x: h0(),
  y: h0()
}), p0 = () => ({ min: 0, max: 0 }), Le = () => ({
  x: p0(),
  y: p0()
});
function lr(e) {
  return [e("x"), e("y")];
}
function Rx({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function uF({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function cF(e, t) {
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
  return Gf(e) || Mx(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Mx(e) {
  return m0(e.x) || m0(e.y);
}
function m0(e) {
  return e && e !== "0%";
}
function lu(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function v0(e, t, r, n, o) {
  return o !== void 0 && (e = lu(e, o, n)), lu(e, r, n) + t;
}
function Kf(e, t = 0, r = 1, n, o) {
  e.min = v0(e.min, t, r, n, o), e.max = v0(e.max, t, r, n, o);
}
function zx(e, { x: t, y: r }) {
  Kf(e.x, t.translate, t.scale, t.originPoint), Kf(e.y, r.translate, r.scale, r.originPoint);
}
function dF(e, t, r, n = !1) {
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
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, zx(e, a)), n && An(i.latestValues) && Lo(e, i.latestValues));
  }
  t.x = g0(t.x), t.y = g0(t.y);
}
function g0(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Xr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function y0(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = Ce(e.min, e.max, i);
  Kf(e, t[r], t[n], a, t.scale);
}
const fF = ["x", "scaleX", "originX"], hF = ["y", "scaleY", "originY"];
function Lo(e, t) {
  y0(e.x, t, fF), y0(e.y, t, hF);
}
function Ix(e, t) {
  return Rx(cF(e.getBoundingClientRect(), t));
}
function pF(e, t, r) {
  const n = Ix(e, r), { scroll: o } = t;
  return o && (Xr(n.x, o.offset.x), Xr(n.y, o.offset.y)), n;
}
const Fx = ({ current: e }) => e ? e.ownerDocument.defaultView : null, mF = /* @__PURE__ */ new WeakMap();
class vF {
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
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = KS(c), !this.openGlobalLock))
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
        this.currentDirection = gF(g), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new $x(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: Fx(this.visualElement)
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
    if (!n || !Us(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (a = nF(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    r && Io(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = oF(o.layoutBox, r) : this.constraints = !1, this.elastic = lF(n), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && lr((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = sF(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !Io(t))
      return !1;
    const n = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = pF(n, o.root, this.visualElement.getTransformPagePoint());
    let a = iF(o.layout.layoutBox, i);
    if (r) {
      const s = r(uF(a));
      this.hasMutatedConstraints = !!s, s && (a = Rx(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = lr((c) => {
      if (!Us(c, r, this.currentDirection))
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
    return n.start(jp(t, n, 0, r));
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
      if (!Us(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[r];
        i.set(t[r] - Ce(a, s, 0.5));
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
        o[a] = aF({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), lr((a) => {
      if (!Us(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(Ce(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    mF.set(this.visualElement, this);
    const t = this.visualElement.current, r = zr(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      Io(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const a = Ar(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
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
function Us(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function gF(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class yF extends wn {
  constructor(t) {
    super(t), this.removeGroupControls = Re, this.removeListeners = Re, this.controls = new vF(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Re;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const b0 = (e) => (t, r) => {
  e && he.update(() => e(t, r));
};
class bF extends wn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Re;
  }
  onPointerDown(t) {
    this.session = new $x(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Fx(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: b0(t),
      onStart: b0(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && he.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = zr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function Dx() {
  const e = b.useContext(Za);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = b.useId();
  return b.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function SF() {
  return xF(b.useContext(Za));
}
function xF(e) {
  return e === null ? !0 : e.isPresent;
}
const xl = {
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
function S0(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const zi = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (j.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = S0(e, t.target.x), n = S0(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, wF = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = vn.parse(e);
    if (o.length > 5)
      return n;
    const i = vn.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = Ce(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class kF extends Kn.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: i } = t;
    $3(CF), i && (r.group && r.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), xl.hasEverUpdated = !0;
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
function Lx(e) {
  const [t, r] = Dx(), n = b.useContext(Pp);
  return Kn.createElement(kF, { ...e, layoutGroup: n, switchLayoutGroup: b.useContext(AS), isPresent: t, safeToRemove: r });
}
const CF = {
  borderRadius: {
    ...zi,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: zi,
  borderTopRightRadius: zi,
  borderBottomLeftRadius: zi,
  borderBottomRightRadius: zi,
  boxShadow: wF
}, Ox = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], _F = Ox.length, x0 = (e) => typeof e == "string" ? parseFloat(e) : e, w0 = (e) => typeof e == "number" || j.test(e);
function TF(e, t, r, n, o, i) {
  o ? (e.opacity = Ce(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    PF(n)
  ), e.opacityExit = Ce(t.opacity !== void 0 ? t.opacity : 1, 0, EF(n))) : i && (e.opacity = Ce(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let a = 0; a < _F; a++) {
    const s = `border${Ox[a]}Radius`;
    let l = k0(t, s), u = k0(r, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || w0(l) === w0(u) ? (e[s] = Math.max(Ce(x0(l), x0(u), n), 0), (yr.test(u) || yr.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || r.rotate) && (e.rotate = Ce(t.rotate || 0, r.rotate || 0, n));
}
function k0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const PF = Nx(0, 0.5, Lp), EF = Nx(0.5, 0.95, Re);
function Nx(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(Na(e, t, n));
}
function C0(e, t) {
  e.min = t.min, e.max = t.max;
}
function Bt(e, t) {
  C0(e.x, t.x), C0(e.y, t.y);
}
function _0(e, t, r, n, o) {
  return e -= t, e = lu(e, 1 / r, n), o !== void 0 && (e = lu(e, 1 / o, n)), e;
}
function $F(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (yr.test(t) && (t = parseFloat(t), t = Ce(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = Ce(i.min, i.max, n);
  e === i && (s -= t), e.min = _0(e.min, t, r, s, o), e.max = _0(e.max, t, r, s, o);
}
function T0(e, t, [r, n, o], i, a) {
  $F(e, t[r], t[n], t[o], t.scale, i, a);
}
const AF = ["x", "scaleX", "originX"], RF = ["y", "scaleY", "originY"];
function P0(e, t, r, n) {
  T0(e.x, t, AF, r ? r.x : void 0, n ? n.x : void 0), T0(e.y, t, RF, r ? r.y : void 0, n ? n.y : void 0);
}
function E0(e) {
  return e.translate === 0 && e.scale === 1;
}
function Bx(e) {
  return E0(e.x) && E0(e.y);
}
function MF(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function jx(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function $0(e) {
  return Rt(e.x) / Rt(e.y);
}
class zF {
  constructor() {
    this.members = [];
  }
  add(t) {
    Vp(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Wp(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function A0(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: u, rotateY: c } = r;
    l && (n += `rotate(${l}deg) `), u && (n += `rotateX(${u}deg) `), c && (n += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || "none";
}
const IF = (e, t) => e.depth - t.depth;
class FF {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Vp(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Wp(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(IF), this.isDirty = !1, this.children.forEach(t);
  }
}
function DF(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const i = o - r;
    i >= t && (Br(n), e(i - t));
  };
  return he.read(n, !0), () => Br(n);
}
function LF(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function OF(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function NF(e, t, r) {
  const n = xt(e) ? e : ui(e);
  return n.start(jp("", n, t, r)), n.animation;
}
const R0 = ["", "X", "Y", "Z"], BF = { visibility: "hidden" }, M0 = 1e3;
let jF = 0;
const Rn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Vx({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = jF++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Rn.totalNodes = Rn.resolvedTargetDeltas = Rn.recalculatedProjection = 0, this.nodes.forEach(UF), this.nodes.forEach(XF), this.nodes.forEach(qF), this.nodes.forEach(HF), LF(Rn);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new FF());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Up()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = OF(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = DF(f, 250), xl.hasAnimatedSinceResize && (xl.hasAnimatedSinceResize = !1, this.nodes.forEach(I0));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || tD, { onLayoutAnimationStart: x, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !jx(this.targetLayout, g) || p, v = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, v);
          const w = {
            ...Cx(y, "layout"),
            onPlay: x,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || I0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(QF), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(z0);
        return;
      }
      this.isUpdating || this.nodes.forEach(KF), this.isUpdating = !1, this.nodes.forEach(YF), this.nodes.forEach(VF), this.nodes.forEach(WF), this.clearAllSnapshots();
      const s = performance.now();
      Ue.delta = mn(0, 1e3 / 60, s - Ue.timestamp), Ue.timestamp = s, Ue.isProcessing = !0, cd.update.process(Ue), cd.preRender.process(Ue), cd.render.process(Ue), Ue.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(GF), this.sharedNodes.forEach(ZF);
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
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !Bx(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || An(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), rD(l), {
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
      return l && (Xr(s.x, l.offset.x), Xr(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = Le();
      Bt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            Bt(s, a);
            const { scroll: f } = this.root;
            f && (Xr(s.x, -f.offset.x), Xr(s.y, -f.offset.y));
          }
          Xr(s.x, c.offset.x), Xr(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Le();
      Bt(l, a);
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
      Bt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !An(u.latestValues))
          continue;
        Gf(u.latestValues) && u.updateSnapshot();
        const c = Le(), d = u.measurePageBox();
        Bt(c, d), P0(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return An(this.latestValues) && P0(s, this.latestValues), s;
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
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Le(), this.relativeTargetOrigin = Le(), ca(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), Bt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Le(), this.targetWithTransforms = Le()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), rF(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Bt(this.target, this.layout.layoutBox), zx(this.target, this.targetDelta)) : Bt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Le(), this.relativeTargetOrigin = Le(), ca(this.relativeTargetOrigin, this.target, p.target), Bt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Rn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Gf(this.parent.latestValues) || Mx(this.parent.latestValues)))
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
      const f = this.treeScale.x, p = this.treeScale.y;
      dF(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: g } = s;
      if (!g) {
        this.projectionTransform && (this.projectionDelta = Do(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Do(), this.projectionDeltaWithTransform = Do());
      const y = this.projectionTransform;
      ua(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = A0(this.projectionDelta, this.treeScale), (this.projectionTransform !== y || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), Rn.recalculatedProjection++;
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
      const f = Le(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, y = p !== g, x = this.getStack(), m = !x || x.members.length <= 1, h = !!(y && !m && this.options.crossfade === !0 && !this.path.some(eD));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (w) => {
        const _ = w / 1e3;
        F0(d.x, a.x, _), F0(d.y, a.y, _), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ca(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), JF(this.relativeTarget, this.relativeTargetOrigin, f, _), v && MF(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = Le()), Bt(v, this.relativeTarget)), y && (this.animationValues = c, TF(c, u, this.latestValues, _, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = _;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Br(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = he.update(() => {
        xl.hasAnimatedSinceResize = !0, this.currentAnimation = NF(0, M0, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(M0), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && Wx(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Le();
          const d = Rt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Rt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        Bt(s, l), Lo(s, c), ua(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new zF()), this.sharedNodes.get(a).add(s);
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
      for (let c = 0; c < R0.length; c++) {
        const d = "rotate" + R0[c];
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
        return BF;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Sl(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Sl(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !An(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = A0(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y: g } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in tu) {
        if (f[y] === void 0)
          continue;
        const { correct: x, applyTo: m } = tu[y], h = u.transform === "none" ? f[y] : x(f[y], d);
        if (m) {
          const v = m.length;
          for (let w = 0; w < v; w++)
            u[m[w]] = h;
        } else
          u[y] = h;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? Sl(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(z0), this.root.sharedNodes.clear();
    }
  };
}
function VF(e) {
  e.updateLayout();
}
function WF(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: i } = e.options, a = r.source !== e.layout.source;
    i === "size" ? lr((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = Rt(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : Wx(i, r.layoutBox, n) && lr((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = Rt(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = Do();
    ua(s, n, r.layoutBox);
    const l = Do();
    a ? ua(l, e.applyTransform(o, !0), r.measuredBox) : ua(l, n, r.layoutBox);
    const u = !Bx(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const g = Le();
          ca(g, r.layoutBox, f.layoutBox);
          const y = Le();
          ca(y, n, p.layoutBox), jx(g, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = g, e.relativeParent = d);
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
function UF(e) {
  Rn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function HF(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function GF(e) {
  e.clearSnapshot();
}
function z0(e) {
  e.clearMeasurements();
}
function KF(e) {
  e.isLayoutDirty = !1;
}
function YF(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function I0(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function XF(e) {
  e.resolveTargetDelta();
}
function qF(e) {
  e.calcProjection();
}
function QF(e) {
  e.resetRotation();
}
function ZF(e) {
  e.removeLeadSnapshot();
}
function F0(e, t, r) {
  e.translate = Ce(t.translate, 0, r), e.scale = Ce(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function D0(e, t, r, n) {
  e.min = Ce(t.min, r.min, n), e.max = Ce(t.max, r.max, n);
}
function JF(e, t, r, n) {
  D0(e.x, t.x, r.x, n), D0(e.y, t.y, r.y, n);
}
function eD(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const tD = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, L0 = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), O0 = L0("applewebkit/") && !L0("chrome/") ? Math.round : Re;
function N0(e) {
  e.min = O0(e.min), e.max = O0(e.max);
}
function rD(e) {
  N0(e.x), N0(e.y);
}
function Wx(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Uf($0(t), $0(r), 0.2);
}
const nD = Vx({
  attachResizeListener: (e, t) => Ar(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), xd = {
  current: void 0
}, Ux = Vx({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!xd.current) {
      const e = new nD({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), xd.current = e;
    }
    return xd.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), oD = {
  pan: {
    Feature: bF
  },
  drag: {
    Feature: yF,
    ProjectionNode: Ux,
    MeasureLayout: Lx
  }
}, iD = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function aD(e) {
  const t = iD.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
function Yf(e, t, r = 1) {
  const [n, o] = aD(e);
  if (!n)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const a = i.trim();
    return _x(a) ? parseFloat(a) : a;
  } else
    return Lf(o) ? Yf(o, t, r + 1) : o;
}
function sD(e, { ...t }, r) {
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
const lD = /* @__PURE__ */ new Set([
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
]), Hx = (e) => lD.has(e), uD = (e) => Object.keys(e).some(Hx), B0 = (e) => e === oo || e === j, j0 = (e, t) => parseFloat(e.split(", ")[t]), V0 = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return j0(o[1], t);
  {
    const i = n.match(/^matrix\((.+)\)$/);
    return i ? j0(i[1], e) : 0;
  }
}, cD = /* @__PURE__ */ new Set(["x", "y", "z"]), dD = Ja.filter((e) => !cD.has(e));
function fD(e) {
  const t = [];
  return dD.forEach((r) => {
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
  x: V0(4, 13),
  y: V0(5, 14)
};
ci.translateX = ci.x;
ci.translateY = ci.y;
const hD = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((u) => {
    s[u] = ci[u](n, i);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = ci[u](l, i);
  }), e;
}, pD = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(Hx);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = r[l], d = Mi(c);
    const f = t[l];
    let p;
    if (nu(f)) {
      const g = f.length, y = f[0] === null ? 1 : 0;
      c = f[y], d = Mi(c);
      for (let x = y; x < g && f[x] !== null; x++)
        p ? Dp(Mi(f[x]) === p) : p = Mi(f[x]);
    } else
      p = Mi(f);
    if (d !== p)
      if (B0(d) && B0(p)) {
        const g = u.get();
        typeof g == "string" && u.set(parseFloat(g)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === j && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = fD(e), a = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = hD(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), Qu && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function mD(e, t, r, n) {
  return uD(t) ? pD(e, t, r, n) : { target: t, transitionEnd: n };
}
const vD = (e, t, r, n) => {
  const o = sD(e, t, n);
  return t = o.target, n = o.transitionEnd, mD(e, t, r, n);
}, Xf = { current: null }, Gx = { current: !1 };
function gD() {
  if (Gx.current = !0, !!Qu)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Xf.current = e.matches;
      e.addListener(t), t();
    } else
      Xf.current = !1;
}
function yD(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o], a = r[o];
    if (xt(i))
      e.addValue(o, i), su(n) && n.add(o);
    else if (xt(a))
      e.addValue(o, ui(i, { owner: e })), su(n) && n.remove(o);
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
const W0 = /* @__PURE__ */ new WeakMap(), Kx = Object.keys(Oa), bD = Kx.length, U0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], SD = Tp.length;
class xD {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => he.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Ju(r), this.isVariantNode = $S(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && xt(f) && (f.set(s[d], !1), su(u) && u.add(d));
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
    this.current = t, W0.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), Gx.current || gD(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Xf.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    W0.delete(this.current), this.projection && this.projection.unmount(), Br(this.notifyUpdate), Br(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    for (let l = 0; l < bD; l++) {
      const u = Kx[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = Oa[u];
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
    for (let n = 0; n < U0.length; n++) {
      const o = U0[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = yD(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let n = 0; n < SD; n++) {
      const o = Tp[n], i = this.props[o];
      (La(i) || i === !1) && (r[o] = i);
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
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = Fp(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !xt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Up()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Yx extends xD {
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
    let a = O4(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i) {
      D4(this, n, a);
      const s = vD(this, n, a, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function wD(e) {
  return window.getComputedStyle(e);
}
class kD extends Yx {
  readValueFromInstance(t, r) {
    if (no.has(r)) {
      const n = Bp(r);
      return n && n.default || 0;
    } else {
      const n = wD(t), o = (zS(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Ix(t, r);
  }
  build(t, r, n, o) {
    $p(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return Ip(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    xt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    NS(t, r, n, o);
  }
}
class CD extends Yx {
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
    return r = BS.has(r) ? r : zp(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return Le();
  }
  scrapeMotionValuesFromProps(t, r) {
    return VS(t, r);
  }
  build(t, r, n, o) {
    Rp(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    jS(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = Mp(t.tagName), super.mount(t);
  }
}
const _D = (e, t) => Ep(e) ? new CD(t, { enableHardwareAcceleration: !1 }) : new kD(t, { enableHardwareAcceleration: !0 }), TD = {
  layout: {
    ProjectionNode: Ux,
    MeasureLayout: Lx
  }
}, PD = {
  ...Z4,
  ...yI,
  ...oD,
  ...TD
}, nc = /* @__PURE__ */ P3((e, t) => iI(e, t, PD, _D));
function Xx() {
  const e = b.useRef(!1);
  return Cp(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function ED() {
  const e = Xx(), [t, r] = b.useState(0), n = b.useCallback(() => {
    e.current && r(t + 1);
  }, [t]);
  return [b.useCallback(() => he.postRender(n), [n]), t];
}
class $D extends b.Component {
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
function AD({ children: e, isPresent: t }) {
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
  }, [t]), b.createElement($D, { isPresent: t, childRef: n, sizeRef: o }, b.cloneElement(e, { ref: n }));
}
const wd = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = WS(RD), l = b.useId(), u = b.useMemo(
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
  }, [r]), a === "popLayout" && (e = b.createElement(AD, { isPresent: r }, e)), b.createElement(Za.Provider, { value: u }, e);
};
function RD() {
  return /* @__PURE__ */ new Map();
}
function MD(e) {
  return b.useEffect(() => () => e(), []);
}
const Mn = (e) => e.key || "";
function zD(e, t) {
  e.forEach((r) => {
    const n = Mn(r);
    t.set(n, r);
  });
}
function ID(e) {
  const t = [];
  return b.Children.forEach(e, (r) => {
    b.isValidElement(r) && t.push(r);
  }), t;
}
const oc = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = b.useContext(Pp).forceRender || ED()[0], l = Xx(), u = ID(e);
  let c = u;
  const d = b.useRef(/* @__PURE__ */ new Map()).current, f = b.useRef(c), p = b.useRef(/* @__PURE__ */ new Map()).current, g = b.useRef(!0);
  if (Cp(() => {
    g.current = !1, zD(u, p), f.current = c;
  }), MD(() => {
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
    const _ = y.indexOf(v);
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
    c.splice(_, 0, A);
  }), c = c.map((h) => {
    const v = h.key;
    return d.has(v) ? h : b.createElement(wd, { key: Mn(h), isPresent: !0, presenceAffectsLayout: i, mode: a }, h);
  }), b.createElement(b.Fragment, null, d.size ? c : c.map((h) => b.cloneElement(h)));
};
var FD = {
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
}, qx = b.memo((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = FD,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = b.useState(s), p = SF();
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
  }, [p, i, o]), y3(x, d);
  const m = b.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), h = b.useMemo(() => v3(a), [a]);
  return /* @__PURE__ */ T.jsx(
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
      children: /* @__PURE__ */ T.jsx(
        Q.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: m,
          children: tn(r, { id: t, onClose: x })
        }
      )
    }
  );
});
qx.displayName = "ToastComponent";
var H0 = {
  path: /* @__PURE__ */ T.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ T.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ T.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ T.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, ns = Me((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...u
  } = e, c = Pe("chakra-icon", s), d = Xu("Icon", e), f = {
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
  }, g = n ?? H0.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ T.jsx(Q.svg, { as: r, ...p, ...u });
  const y = a ?? H0.path;
  return /* @__PURE__ */ T.jsx(Q.svg, { verticalAlign: "middle", viewBox: g, ...p, ...u, children: y });
});
ns.displayName = "Icon";
function DD(e) {
  return /* @__PURE__ */ T.jsx(ns, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ T.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function LD(e) {
  return /* @__PURE__ */ T.jsx(ns, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ T.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function G0(e) {
  return /* @__PURE__ */ T.jsx(ns, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ T.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var OD = Uu({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Hp = Me((e, t) => {
  const r = Xu("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = xn(e), u = Pe("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${OD} ${i} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ T.jsx(
    Q.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && /* @__PURE__ */ T.jsx(Q.span, { srOnly: !0, children: n })
    }
  );
});
Hp.displayName = "Spinner";
var [ND, Gp] = it({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [BD, Kp] = it({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), Qx = {
  info: { icon: LD, colorScheme: "blue" },
  warning: { icon: G0, colorScheme: "orange" },
  success: { icon: DD, colorScheme: "green" },
  error: { icon: G0, colorScheme: "red" },
  loading: { icon: Hp, colorScheme: "blue" }
};
function jD(e) {
  return Qx[e].colorScheme;
}
function VD(e) {
  return Qx[e].icon;
}
var Zx = Me(
  function(t, r) {
    const n = Kp(), { status: o } = Gp(), i = {
      display: "inline",
      ...n.description
    };
    return /* @__PURE__ */ T.jsx(
      Q.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: Pe("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
Zx.displayName = "AlertDescription";
function Jx(e) {
  const { status: t } = Gp(), r = VD(t), n = Kp(), o = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ T.jsx(
    Q.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: Pe("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ T.jsx(r, { h: "100%", w: "100%" })
    }
  );
}
Jx.displayName = "AlertIcon";
var ew = Me(
  function(t, r) {
    const n = Kp(), { status: o } = Gp();
    return /* @__PURE__ */ T.jsx(
      Q.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: Pe("chakra-alert__title", t.className),
        __css: n.title
      }
    );
  }
);
ew.displayName = "AlertTitle";
var tw = Me(function(t, r) {
  var n;
  const { status: o = "info", addRole: i = !0, ...a } = xn(t), s = (n = t.colorScheme) != null ? n : jD(o), l = mi("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ T.jsx(ND, { value: { status: o }, children: /* @__PURE__ */ T.jsx(BD, { value: l, children: /* @__PURE__ */ T.jsx(
    Q.div,
    {
      "data-status": o,
      role: i ? "alert" : void 0,
      ref: r,
      ...a,
      className: Pe("chakra-alert", t.className),
      __css: u
    }
  ) }) });
});
tw.displayName = "Alert";
function WD(e) {
  return /* @__PURE__ */ T.jsx(ns, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ T.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Yp = Me(
  function(t, r) {
    const n = Xu("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = xn(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ T.jsx(
      Q.button,
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
        children: o || /* @__PURE__ */ T.jsx(WD, { width: "1em", height: "1em" })
      }
    );
  }
);
Yp.displayName = "CloseButton";
var UD = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, da = HD(UD);
function HD(e) {
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
      const a = GD(o, i), { position: s, id: l } = a;
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
        const s = { ...a }, { position: l, index: u } = Bg(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: YD(i)
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
        const a = TS(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!Bg(da.getState(), o).position
  };
}
var K0 = 0;
function GD(e, t = {}) {
  var r, n;
  K0 += 1;
  const o = (r = t.id) != null ? r : K0, i = (n = t.position) != null ? n : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => da.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var KD = (e) => {
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
  return /* @__PURE__ */ T.jsxs(
    tw,
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
        /* @__PURE__ */ T.jsx(Jx, { children: u }),
        /* @__PURE__ */ T.jsxs(Q.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ T.jsx(ew, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ T.jsx(Zx, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ T.jsx(
          Yp,
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
function YD(e = {}) {
  const { render: t, toastComponent: r = KD } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ T.jsx(r, { ...o, ...e });
}
var [XD, CB] = it({
  name: "ToastOptionsContext",
  strict: !1
}), qD = (e) => {
  const t = b.useSyncExternalStore(
    da.subscribe,
    da.getState,
    da.getState
  ), {
    motionVariants: r,
    component: n = qx,
    portalProps: o
  } = e, a = Object.keys(t).map((s) => {
    const l = t[s];
    return /* @__PURE__ */ T.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${s}`,
        id: `chakra-toast-manager-${s}`,
        style: g3(s),
        children: /* @__PURE__ */ T.jsx(oc, { initial: !1, children: l.map((u) => /* @__PURE__ */ T.jsx(
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
  return /* @__PURE__ */ T.jsx(qa, { ...o, children: a });
}, QD = (e) => function({
  children: r,
  theme: n = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ T.jsxs(p3, { theme: n, ...i, children: [
    /* @__PURE__ */ T.jsx(XD, { value: o == null ? void 0 : o.defaultOptions, children: r }),
    /* @__PURE__ */ T.jsx(qD, { ...o })
  ] });
}, ZD = QD(gS), JD = Object.defineProperty, eL = (e, t, r) => t in e ? JD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, $e = (e, t, r) => (eL(e, typeof t != "symbol" ? t + "" : t, r), r);
function Y0(e) {
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
var tL = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function X0(e, t, r) {
  let n = e + 1;
  return r && n >= t && (n = 0), n;
}
function q0(e, t, r) {
  let n = e - 1;
  return r && n < 0 && (n = t), n;
}
var qf = typeof window < "u" ? b.useLayoutEffect : b.useEffect, uu = (e) => e, rL = class {
  constructor() {
    $e(this, "descendants", /* @__PURE__ */ new Map()), $e(this, "register", (e) => {
      if (e != null)
        return tL(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), $e(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = Y0(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), $e(this, "destroy", () => {
      this.descendants.clear();
    }), $e(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const r = e.indexOf(t.node);
        t.index = r, t.node.dataset.index = t.index.toString();
      });
    }), $e(this, "count", () => this.descendants.size), $e(this, "enabledCount", () => this.enabledValues().length), $e(this, "values", () => Array.from(this.descendants.values()).sort((t, r) => t.index - r.index)), $e(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), $e(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), $e(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), $e(this, "first", () => this.item(0)), $e(this, "firstEnabled", () => this.enabledItem(0)), $e(this, "last", () => this.item(this.descendants.size - 1)), $e(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), $e(this, "indexOf", (e) => {
      var t, r;
      return e && (r = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? r : -1;
    }), $e(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), $e(this, "next", (e, t = !0) => {
      const r = X0(e, this.count(), t);
      return this.item(r);
    }), $e(this, "nextEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = X0(
        n,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), $e(this, "prev", (e, t = !0) => {
      const r = q0(e, this.count() - 1, t);
      return this.item(r);
    }), $e(this, "prevEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = q0(
        n,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), $e(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const r = Array.from(this.descendants.keys()).concat(e), n = Y0(r);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(n);
    });
  }
};
function nL(e, t) {
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
function gn(...e) {
  return (t) => {
    e.forEach((r) => {
      nL(r, t);
    });
  };
}
function oL(...e) {
  return b.useMemo(() => gn(...e), e);
}
function iL() {
  const e = b.useRef(new rL());
  return qf(() => () => e.current.destroy()), e.current;
}
var [aL, rw] = it({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function sL(e) {
  const t = rw(), [r, n] = b.useState(-1), o = b.useRef(null);
  qf(() => () => {
    o.current && t.unregister(o.current);
  }, []), qf(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    r != a && !Number.isNaN(a) && n(a);
  });
  const i = uu(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: r,
    enabledIndex: t.enabledIndexOf(o.current),
    register: gn(i, o)
  };
}
function lL() {
  return [
    uu(aL),
    () => uu(rw()),
    () => iL(),
    (o) => sL(o)
  ];
}
function uL(e) {
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
}, Ii = {
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
      return Ii.slideRight;
    case "left":
      return Ii.slideLeft;
    case "bottom":
      return Ii.slideDown;
    case "top":
      return Ii.slideUp;
    default:
      return Ii.slideRight;
  }
}
var Q0 = {
  enter: {
    duration: 0.2,
    ease: Qf.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Qf.easeIn
  }
}, cu = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, cL = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : cu.enter(Q0.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : cu.exit(Q0.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, nw = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: cL
}, dL = b.forwardRef(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ T.jsx(oc, { custom: f, children: d && /* @__PURE__ */ T.jsx(
    nc.div,
    {
      ref: r,
      className: Pe("chakra-fade", i),
      custom: f,
      ...nw,
      animate: c,
      ...u
    }
  ) });
});
dL.displayName = "Fade";
var Z0 = {
  exit: {
    duration: 0.15,
    ease: Qf.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, fL = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: i } = Zf({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : cu.exit(Z0.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: i } = Zf({ direction: e });
    return {
      ...i,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : cu.enter(Z0.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, ow = b.forwardRef(function(t, r) {
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
  return /* @__PURE__ */ T.jsx(oc, { custom: m, children: y && /* @__PURE__ */ T.jsx(
    nc.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: Pe("chakra-slide", s),
      animate: x,
      exit: "exit",
      custom: m,
      variants: fL,
      style: g,
      ...d
    }
  ) });
});
ow.displayName = "Slide";
function hL(e) {
  return b.Children.toArray(e).filter(
    (t) => b.isValidElement(t)
  );
}
var [_B, pL] = it({
  strict: !1,
  name: "ButtonGroupContext"
});
function mL(e) {
  const [t, r] = b.useState(!e);
  return { ref: b.useCallback((i) => {
    i && r(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function Jf(e) {
  const { children: t, className: r, ...n } = e, o = b.isValidElement(t) ? b.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = Pe("chakra-button__icon", r);
  return /* @__PURE__ */ T.jsx(
    Q.span,
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
    children: o = /* @__PURE__ */ T.jsx(Hp, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = Pe("chakra-button__spinner", i), u = r === "start" ? "marginEnd" : "marginStart", c = b.useMemo(
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
  return /* @__PURE__ */ T.jsx(Q.div, { className: l, ...s, __css: c, children: o });
}
eh.displayName = "ButtonSpinner";
var Xp = Me((e, t) => {
  const r = pL(), n = Xu("Button", { ...r, ...e }), {
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
  } = xn(e), h = b.useMemo(() => {
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
  }, [n, r]), { ref: v, type: w } = mL(x), _ = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ T.jsxs(
    Q.button,
    {
      ref: oL(t, v),
      as: x,
      type: f ?? w,
      "data-active": q(a),
      "data-loading": q(i),
      __css: h,
      className: Pe("chakra-button", y),
      ...m,
      disabled: o || i,
      children: [
        i && g === "start" && /* @__PURE__ */ T.jsx(
          eh,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ T.jsx(Q.span, { opacity: 0, children: /* @__PURE__ */ T.jsx(J0, { ..._ }) }) : /* @__PURE__ */ T.jsx(J0, { ..._ }),
        i && g === "end" && /* @__PURE__ */ T.jsx(
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
Xp.displayName = "Button";
function J0(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    t && /* @__PURE__ */ T.jsx(Jf, { marginEnd: o, children: t }),
    n,
    r && /* @__PURE__ */ T.jsx(Jf, { marginStart: o, children: r })
  ] });
}
var [TB, vL] = it({
  name: "CheckboxGroupContext",
  strict: !1
});
function gL(e) {
  const [t, r] = b.useState(e), [n, o] = b.useState(!1);
  return e !== t && (o(!0), r(e)), n;
}
function yL(e) {
  return /* @__PURE__ */ T.jsx(
    Q.svg,
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
      children: /* @__PURE__ */ T.jsx("polyline", { points: "1.5 6 4.5 9 10.5 1" })
    }
  );
}
function bL(e) {
  return /* @__PURE__ */ T.jsx(
    Q.svg,
    {
      width: "1.2em",
      viewBox: "0 0 24 24",
      style: { stroke: "currentColor", strokeWidth: 4 },
      ...e,
      children: /* @__PURE__ */ T.jsx("line", { x1: "21", x2: "3", y1: "12", y2: "12" })
    }
  );
}
function SL(e) {
  const { isIndeterminate: t, isChecked: r, ...n } = e, o = t ? bL : yL;
  return r || t ? /* @__PURE__ */ T.jsx(
    Q.div,
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      },
      children: /* @__PURE__ */ T.jsx(o, { ...n })
    }
  ) : null;
}
var [xL, wL] = it({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [kL, iw] = it({
  strict: !1,
  name: "FormControlContext"
});
function CL(e) {
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
      ref: gn($, (M) => {
        M && y(!0);
      })
    }),
    [d]
  ), v = b.useCallback(
    (P = {}, $ = null) => ({
      ...P,
      ref: $,
      "data-focus": q(x),
      "data-disabled": q(o),
      "data-invalid": q(n),
      "data-readonly": q(i),
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
      ref: gn($, (M) => {
        M && p(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), _ = b.useCallback(
    (P = {}, $ = null) => ({
      ...P,
      ...a,
      ref: $,
      role: "group",
      "data-focus": q(x),
      "data-disabled": q(o),
      "data-invalid": q(n),
      "data-readonly": q(i)
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
    getRootProps: _,
    getLabelProps: v,
    getRequiredIndicatorProps: A
  };
}
var _L = Me(
  function(t, r) {
    const n = mi("Form", t), o = xn(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = CL(o), l = Pe("chakra-form-control", t.className);
    return /* @__PURE__ */ T.jsx(kL, { value: s, children: /* @__PURE__ */ T.jsx(xL, { value: n, children: /* @__PURE__ */ T.jsx(
      Q.div,
      {
        ...i({}, r),
        className: l,
        __css: n.container
      }
    ) }) });
  }
);
_L.displayName = "FormControl";
var TL = Me(
  function(t, r) {
    const n = iw(), o = wL(), i = Pe("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ T.jsx(
      Q.div,
      {
        ...n == null ? void 0 : n.getHelpTextProps(t, r),
        __css: o.helperText,
        className: i
      }
    );
  }
);
TL.displayName = "FormHelperText";
function PL(e) {
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: o, ...i } = aw(e);
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
function aw(e) {
  var t, r, n;
  const o = iw(), {
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
    onFocus: Be(o == null ? void 0 : o.onFocus, p),
    onBlur: Be(o == null ? void 0 : o.onBlur, g)
  };
}
var EL = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, $L = () => typeof document < "u", ey = !1, os = null, eo = !1, th = !1, rh = /* @__PURE__ */ new Set();
function qp(e, t) {
  rh.forEach((r) => r(e, t));
}
var AL = typeof window < "u" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;
function RL(e) {
  return !(e.metaKey || !AL && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function ty(e) {
  eo = !0, RL(e) && (os = "keyboard", qp("keyboard", e));
}
function fo(e) {
  if (os = "pointer", e.type === "mousedown" || e.type === "pointerdown") {
    eo = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let r = !1;
    try {
      r = t.matches(":focus-visible");
    } catch {
    }
    if (r)
      return;
    qp("pointer", e);
  }
}
function ML(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : e.detail === 0 && !e.pointerType;
}
function zL(e) {
  ML(e) && (eo = !0, os = "virtual");
}
function IL(e) {
  e.target === window || e.target === document || (!eo && !th && (os = "virtual", qp("virtual", e)), eo = !1, th = !1);
}
function FL() {
  eo = !1, th = !0;
}
function ry() {
  return os !== "pointer";
}
function DL() {
  if (!$L() || ey)
    return;
  const { focus: e } = HTMLElement.prototype;
  HTMLElement.prototype.focus = function(...r) {
    eo = !0, e.apply(this, r);
  }, document.addEventListener("keydown", ty, !0), document.addEventListener("keyup", ty, !0), document.addEventListener("click", zL, !0), window.addEventListener("focus", IL, !0), window.addEventListener("blur", FL, !1), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", fo, !0), document.addEventListener("pointermove", fo, !0), document.addEventListener("pointerup", fo, !0)) : (document.addEventListener("mousedown", fo, !0), document.addEventListener("mousemove", fo, !0), document.addEventListener("mouseup", fo, !0)), ey = !0;
}
function LL(e) {
  DL(), e(ry());
  const t = () => e(ry());
  return rh.add(t), () => {
    rh.delete(t);
  };
}
function OL(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function NL(e = {}) {
  const t = aw(e), {
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
    ..._
  } = e, A = OL(_, [
    "isDisabled",
    "isReadOnly",
    "isRequired",
    "isInvalid",
    "id",
    "onBlur",
    "onFocus",
    "aria-describedby"
  ]), P = Gn(p), $ = Gn(s), M = Gn(l), [I, H] = b.useState(!1), [ce, me] = b.useState(!1), [Z, ue] = b.useState(!1), [Ee, ze] = b.useState(!1);
  b.useEffect(() => LL(H), []);
  const z = b.useRef(null), [N, V] = b.useState(!0), [B, J] = b.useState(!!c), W = d !== void 0, te = W ? d : B, wt = b.useCallback(
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
  const be = r && !f, Ie = b.useCallback(
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
        "data-active": q(Ee),
        "data-hover": q(Z),
        "data-checked": q(te),
        "data-focus": q(ce),
        "data-focus-visible": q(ce && I),
        "data-indeterminate": q(g),
        "data-disabled": q(r),
        "data-invalid": q(i),
        "data-readonly": q(n),
        "aria-hidden": !0,
        onMouseDown: Be(U.onMouseDown, Lt),
        onMouseUp: Be(U.onMouseUp, () => ze(!1)),
        onMouseEnter: Be(
          U.onMouseEnter,
          () => ue(!0)
        ),
        onMouseLeave: Be(
          U.onMouseLeave,
          () => ue(!1)
        )
      };
    },
    [
      Ee,
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
      "data-active": q(Ee),
      "data-hover": q(Z),
      "data-checked": q(te),
      "data-focus": q(ce),
      "data-focus-visible": q(ce && I),
      "data-indeterminate": q(g),
      "data-disabled": q(r),
      "data-invalid": q(i),
      "data-readonly": q(n)
    }),
    [
      Ee,
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
      ref: gn(ht, (Lt) => {
        Lt && V(Lt.tagName === "LABEL");
      }),
      onClick: Be(U.onClick, () => {
        var Lt;
        N || ((Lt = z.current) == null || Lt.click(), requestAnimationFrame(() => {
          var ao;
          (ao = z.current) == null || ao.focus({ preventScroll: !0 });
        }));
      }),
      "data-disabled": q(r),
      "data-checked": q(te),
      "data-invalid": q(i)
    }),
    [A, r, te, i, N]
  ), kn = b.useCallback(
    (U = {}, ht = null) => ({
      ...U,
      ref: gn(z, ht),
      type: "checkbox",
      name: y,
      value: x,
      id: a,
      tabIndex: m,
      onChange: Be(U.onChange, wt),
      onBlur: Be(
        U.onBlur,
        $,
        () => me(!1)
      ),
      onFocus: Be(
        U.onFocus,
        M,
        () => me(!0)
      ),
      onKeyDown: Be(U.onKeyDown, Ie),
      onKeyUp: Be(U.onKeyUp, Je),
      required: o,
      checked: te,
      disabled: be,
      readOnly: n,
      "aria-label": h,
      "aria-labelledby": v,
      "aria-invalid": w ? !!w : i,
      "aria-describedby": u,
      "aria-disabled": r,
      style: EL
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
      be,
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
      onMouseDown: Be(U.onMouseDown, BL),
      "data-disabled": q(r),
      "data-checked": q(te),
      "data-invalid": q(i)
    }),
    [te, r, i]
  );
  return {
    state: {
      isInvalid: i,
      isFocused: ce,
      isChecked: te,
      isActive: Ee,
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
function BL(e) {
  e.preventDefault(), e.stopPropagation();
}
var jL = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "top",
  userSelect: "none",
  flexShrink: 0
}, VL = {
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "top",
  position: "relative"
}, WL = Uu({
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
}), UL = Uu({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}), HL = Uu({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
}), nh = Me(function(t, r) {
  const n = vL(), o = { ...n, ...t }, i = mi("Checkbox", o), a = xn(t), {
    spacing: s = "0.5rem",
    className: l,
    children: u,
    iconColor: c,
    iconSize: d,
    icon: f = /* @__PURE__ */ T.jsx(SL, {}),
    isChecked: p,
    isDisabled: g = n == null ? void 0 : n.isDisabled,
    onChange: y,
    inputProps: x,
    ...m
  } = a;
  let h = p;
  n != null && n.value && a.value && (h = n.value.includes(a.value));
  let v = y;
  n != null && n.onChange && a.value && (v = ZT(n.onChange, y));
  const {
    state: w,
    getInputProps: _,
    getCheckboxProps: A,
    getLabelProps: P,
    getRootProps: $
  } = NL({
    ...m,
    isDisabled: g,
    isChecked: h,
    onChange: v
  }), M = gL(w.isChecked), I = b.useMemo(
    () => ({
      animation: M ? w.isIndeterminate ? `${UL} 20ms linear, ${HL} 200ms linear` : `${WL} 200ms linear` : void 0,
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
  return /* @__PURE__ */ T.jsxs(
    Q.label,
    {
      __css: { ...VL, ...i.container },
      className: Pe("chakra-checkbox", l),
      ...$(),
      children: [
        /* @__PURE__ */ T.jsx(
          "input",
          {
            className: "chakra-checkbox__input",
            ..._(x, r)
          }
        ),
        /* @__PURE__ */ T.jsx(
          Q.span,
          {
            __css: { ...jL, ...i.control },
            className: "chakra-checkbox__control",
            ...A(),
            children: H
          }
        ),
        u && /* @__PURE__ */ T.jsx(
          Q.span,
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
function GL(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var oh = "data-focus-lock", sw = "data-focus-lock-disabled", KL = "data-no-focus-lock", YL = "data-autofocus-inside", XL = "data-no-autofocus";
function qL(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function QL(e, t) {
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
function lw(e, t) {
  return QL(t || null, function(r) {
    return e.forEach(function(n) {
      return qL(n, r);
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
function uw(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function ZL(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function cw(e) {
  return e;
}
function dw(e, t) {
  t === void 0 && (t = cw);
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
function Qp(e, t) {
  return t === void 0 && (t = cw), dw(e, t);
}
function fw(e) {
  e === void 0 && (e = {});
  var t = dw(null);
  return t.options = hr({ async: !0, ssr: !1 }, e), t;
}
var hw = function(e) {
  var t = e.sideCar, r = uw(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return b.createElement(n, hr({}, r));
};
hw.isSideCarExport = !0;
function JL(e, t) {
  return e.useMedium(t), hw;
}
var pw = Qp({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), mw = Qp(), eO = Qp(), tO = fw({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), rO = [], Zp = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o = b.useState(), i = o[0], a = o[1], s = b.useRef(), l = b.useRef(!1), u = b.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, g = t.crossFrame, y = t.autoFocus;
  t.allowTextSelection;
  var x = t.group, m = t.className, h = t.whiteList, v = t.hasPositiveIndices, w = t.shards, _ = w === void 0 ? rO : w, A = t.as, P = A === void 0 ? "div" : A, $ = t.lockProps, M = $ === void 0 ? {} : $, I = t.sideCar, H = t.returnFocus, ce = t.focusOptions, me = t.onActivation, Z = t.onDeactivation, ue = b.useState({}), Ee = ue[0], ze = b.useCallback(function() {
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
    l.current && pw.useMedium(Ie);
  }, []), B = mw.useMedium, J = b.useCallback(function(Ie) {
    s.current !== Ie && (s.current = Ie, a(Ie));
  }, []), W = Jn((n = {}, n[sw] = d && "disabled", n[oh] = x, n), M), te = f !== !0, wt = te && f !== "tail", be = lw([r, J]);
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
    id: Ee,
    sideCar: tO,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: g,
    autoFocus: y,
    whiteList: h,
    shards: _,
    onActivation: ze,
    onDeactivation: z,
    returnFocus: N,
    focusOptions: ce
  }), /* @__PURE__ */ b.createElement(P, Jn({
    ref: be
  }, W, {
    className: m,
    onBlur: B,
    onFocus: V
  }), c), wt && /* @__PURE__ */ b.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: kd
  }));
});
Zp.propTypes = {};
Zp.defaultProps = {
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
const vw = Zp;
function ih(e, t) {
  return ih = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, ih(e, t);
}
function nO(e, t) {
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
function oO(e, t) {
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
function iO(e) {
  var t = oO(e, "string");
  return Ba(t) === "symbol" ? t : String(t);
}
function aO(e, t, r) {
  return t = iO(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function sO(e, t) {
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
      nO(c, u);
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
    return aO(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var br = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, du = function(e) {
  return Array.isArray(e) ? e : [e];
}, gw = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, lO = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, yw = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, bw = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, uO = function(e, t) {
  return !e || bw(e) || !lO(e) && t(yw(e));
}, Sw = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = uO(t, Sw.bind(void 0, e));
  return e.set(t, n), n;
}, cO = function(e, t) {
  return e && !bw(e) ? hO(e) ? t(yw(e)) : !1 : !0;
}, xw = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = cO(t, xw.bind(void 0, e));
  return e.set(t, n), n;
}, ww = function(e) {
  return e.dataset;
}, dO = function(e) {
  return e.tagName === "BUTTON";
}, kw = function(e) {
  return e.tagName === "INPUT";
}, Cw = function(e) {
  return kw(e) && e.type === "radio";
}, fO = function(e) {
  return !((kw(e) || dO(e)) && (e.type === "hidden" || e.disabled));
}, hO = function(e) {
  var t = e.getAttribute(XL);
  return ![!0, "true", ""].includes(t);
}, Jp = function(e) {
  var t;
  return !!(e && (!((t = ww(e)) === null || t === void 0) && t.focusGuard));
}, fu = function(e) {
  return !Jp(e);
}, pO = function(e) {
  return !!e;
}, mO = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, _w = function(e, t, r) {
  return br(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(mO);
}, vO = [
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
], em = vO.join(","), gO = "".concat(em, ", [data-focus-guard]"), Tw = function(e, t) {
  return br((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? gO : em) ? [n] : [], Tw(n));
  }, []);
}, yO = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? ic([e.contentDocument.body], t) : [e];
}, ic = function(e, t) {
  return e.reduce(function(r, n) {
    var o, i = Tw(n, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return yO(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      n.parentNode ? br(n.parentNode.querySelectorAll(em)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, bO = function(e) {
  var t = e.querySelectorAll("[".concat(YL, "]"));
  return br(t).map(function(r) {
    return ic([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, tm = function(e, t) {
  return br(e).filter(function(r) {
    return Sw(t, r);
  }).filter(function(r) {
    return fO(r);
  });
}, ny = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), br(e).filter(function(r) {
    return xw(t, r);
  });
}, ah = function(e, t, r) {
  return _w(tm(ic(e, r), t), !0, r);
}, oy = function(e, t) {
  return _w(tm(ic(e), t), !1);
}, SO = function(e, t) {
  return tm(bO(e), t);
}, qo = function(e, t) {
  return e.shadowRoot ? qo(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : br(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? qo(o, t) : !1;
    }
    return qo(r, t);
  });
}, xO = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var i = e[n].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, Pw = function(e) {
  return e.parentNode ? Pw(e.parentNode) : e;
}, rm = function(e) {
  var t = du(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(oh);
    return r.push.apply(r, o ? xO(br(Pw(n).querySelectorAll("[".concat(oh, '="').concat(o, '"]:not([').concat(sw, '="disabled"])')))) : [n]), r;
  }, []);
}, wO = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, ja = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? ja(t.shadowRoot) : t instanceof HTMLIFrameElement && wO(function() {
      return t.contentWindow.document;
    }) ? ja(t.contentWindow.document) : t;
  }
}, kO = function(e, t) {
  return e === t;
}, CO = function(e, t) {
  return !!br(e.querySelectorAll("iframe")).some(function(r) {
    return kO(r, t);
  });
}, Ew = function(e, t) {
  return t === void 0 && (t = ja(gw(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : rm(e).some(function(r) {
    return qo(r, t) || CO(r, t);
  });
}, _O = function(e) {
  e === void 0 && (e = document);
  var t = ja(e);
  return t ? br(e.querySelectorAll("[".concat(KL, "]"))).some(function(r) {
    return qo(r, t);
  }) : !1;
}, TO = function(e, t) {
  return t.filter(Cw).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, nm = function(e, t) {
  return Cw(e) && e.name ? TO(e, t) : e;
}, PO = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(nm(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, iy = function(e) {
  return e[0] && e.length > 1 ? nm(e[0], e) : e[0];
}, ay = function(e, t) {
  return e.length > 1 ? e.indexOf(nm(e[t], e)) : t;
}, $w = "NEW_FOCUS", EO = function(e, t, r, n) {
  var o = e.length, i = e[0], a = e[o - 1], s = Jp(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, u = n ? t.indexOf(n) : l, c = n ? e.indexOf(n) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), g = PO(t), y = r !== void 0 ? g.indexOf(r) : -1, x = y - (n ? g.indexOf(n) : l), m = ay(e, 0), h = ay(e, o - 1);
    if (l === -1 || c === -1)
      return $w;
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
}, $O = function(e) {
  return function(t) {
    var r, n = (r = ww(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, AO = function(e, t, r) {
  var n = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = ny(n.filter($O(r)));
  return o && o.length ? iy(o) : iy(ny(t));
}, sh = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && sh(e.parentNode.host || e.parentNode, t), t;
}, Cd = function(e, t) {
  for (var r = sh(e), n = sh(t), o = 0; o < r.length; o += 1) {
    var i = r[o];
    if (n.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, Aw = function(e, t, r) {
  var n = du(e), o = du(t), i = n[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = Cd(a || s, s) || a, r.filter(Boolean).forEach(function(l) {
      var u = Cd(i, l);
      u && (!a || qo(u, a) ? a = u : a = Cd(u, a));
    });
  }), a;
}, RO = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(SO(n, t));
  }, []);
}, MO = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(pO);
}, zO = function(e, t) {
  var r = ja(du(e).length > 0 ? document : gw(e).ownerDocument), n = rm(e).filter(fu), o = Aw(r || e, e, n), i = /* @__PURE__ */ new Map(), a = oy(n, i), s = ah(n, i).filter(function(p) {
    var g = p.node;
    return fu(g);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = oy([o], i).map(function(p) {
      var g = p.node;
      return g;
    }), u = MO(l, s), c = u.map(function(p) {
      var g = p.node;
      return g;
    }), d = EO(c, l, r, t);
    if (d === $w) {
      var f = AO(a, c, RO(n, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, IO = function(e) {
  var t = rm(e).filter(fu), r = Aw(e, e, t), n = /* @__PURE__ */ new Map(), o = ah([r], n, !0), i = ah(t, n).filter(function(a) {
    var s = a.node;
    return fu(s);
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
      guard: Jp(s)
    };
  });
}, FO = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, _d = 0, Td = !1, Rw = function(e, t, r) {
  r === void 0 && (r = {});
  var n = zO(e, t);
  if (!Td && n) {
    if (_d > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Td = !0, setTimeout(function() {
        Td = !1;
      }, 1);
      return;
    }
    _d++, FO(n.node, r.focusOptions), _d--;
  }
};
function om(e) {
  setTimeout(e, 1);
}
var DO = function() {
  return document && document.activeElement === document.body;
}, LO = function() {
  return DO() || _O();
}, Qo = null, Oo = null, Zo = null, Va = !1, OO = function() {
  return !0;
}, NO = function(t) {
  return (Qo.whiteList || OO)(t);
}, BO = function(t, r) {
  Zo = {
    observerNode: t,
    portaledElement: r
  };
}, jO = function(t) {
  return Zo && Zo.portaledElement === t;
};
function sy(e, t, r, n) {
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
var VO = function(t) {
  return t && "current" in t ? t.current : t;
}, WO = function(t) {
  return t ? !!Va : Va === "meanwhile";
}, UO = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, HO = function(t, r) {
  return r.some(function(n) {
    return UO(t, n, n);
  });
}, hu = function() {
  var t = !1;
  if (Qo) {
    var r = Qo, n = r.observed, o = r.persistentFocus, i = r.autoFocus, a = r.shards, s = r.crossFrame, l = r.focusOptions, u = n || Zo && Zo.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(VO).filter(Boolean));
      if ((!c || NO(c)) && (o || WO(s) || !LO() || !Oo && i) && (u && !// active element is "inside" working area
      (Ew(d) || // check for shadow-dom contained elements
      c && HO(c, d) || jO(c)) && (document && !Oo && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = Rw(d, Oo, {
        focusOptions: l
      }), Zo = {})), Va = !1, Oo = document && document.activeElement), document) {
        var f = document && document.activeElement, p = IO(d), g = p.map(function(y) {
          var x = y.node;
          return x;
        }).indexOf(f);
        g > -1 && (p.filter(function(y) {
          var x = y.guard, m = y.node;
          return x && m.dataset.focusAutoGuard;
        }).forEach(function(y) {
          var x = y.node;
          return x.removeAttribute("tabIndex");
        }), sy(g, p.length, 1, p), sy(g, -1, -1, p));
      }
    }
  }
  return t;
}, Mw = function(t) {
  hu() && t && (t.stopPropagation(), t.preventDefault());
}, im = function() {
  return om(hu);
}, GO = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || BO(n, r);
}, KO = function() {
  return null;
}, zw = function() {
  Va = "just", om(function() {
    Va = "meanwhile";
  });
}, YO = function() {
  document.addEventListener("focusin", Mw), document.addEventListener("focusout", im), window.addEventListener("blur", zw);
}, XO = function() {
  document.removeEventListener("focusin", Mw), document.removeEventListener("focusout", im), window.removeEventListener("blur", zw);
};
function qO(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function QO(e) {
  var t = e.slice(-1)[0];
  t && !Qo && YO();
  var r = Qo, n = r && t && t.id === r.id;
  Qo = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === r.id;
  }).length || r.returnFocus(!t)), t ? (Oo = null, (!n || r.observed !== t.observed) && t.onActivation(), hu(), om(hu)) : (XO(), Oo = null);
}
pw.assignSyncMedium(GO);
mw.assignMedium(im);
eO.assignMedium(function(e) {
  return e({
    moveFocusInside: Rw,
    focusInside: Ew
  });
});
const ZO = sO(qO, QO)(KO);
var Iw = /* @__PURE__ */ b.forwardRef(function(t, r) {
  return /* @__PURE__ */ b.createElement(vw, Jn({
    sideCar: ZO,
    ref: r
  }, t));
}), Fw = vw.propTypes || {};
Fw.sideCar;
GL(Fw, ["sideCar"]);
Iw.propTypes = {};
const ly = Iw;
function JO(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function eN(e) {
  var t;
  if (!JO(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
var tN = (e) => e.hasAttribute("tabindex");
function rN(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function Dw(e) {
  return e.parentElement && Dw(e.parentElement) ? !0 : e.hidden;
}
function nN(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function oN(e) {
  if (!eN(e) || Dw(e) || rN(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : nN(e) ? !0 : tN(e);
}
var iN = [
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
], aN = iN.join(), sN = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function lN(e) {
  const t = Array.from(
    e.querySelectorAll(aN)
  );
  return t.unshift(e), t.filter((r) => oN(r) && sN(r));
}
var uy, uN = (uy = ly.default) != null ? uy : ly, Lw = (e) => {
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
    t != null && t.current ? t.current.focus() : n != null && n.current && lN(n.current).length === 0 && requestAnimationFrame(() => {
      var g;
      (g = n.current) == null || g.focus();
    });
  }, [t, n]), d = b.useCallback(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ T.jsx(
    uN,
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
Lw.displayName = "FocusLock";
var am = Me(function(t, r) {
  const { htmlSize: n, ...o } = t, i = mi("Input", o), a = xn(o), s = PL(a), l = Pe("chakra-input", t.className);
  return /* @__PURE__ */ T.jsx(
    Q.input,
    {
      size: n,
      ...s,
      __css: i.field,
      ref: r,
      className: l
    }
  );
});
am.displayName = "Input";
am.id = "Input";
function cN(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : Kt(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
var Ow = (e) => /* @__PURE__ */ T.jsx(
  Q.div,
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
Ow.displayName = "StackItem";
function dN(e) {
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
    "&": cN(
      r,
      (o) => n[o]
    )
  };
}
var Nw = Me((e, t) => {
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
    () => dN({ spacing: a, direction: p }),
    [a, p]
  ), y = !!u, x = !d && !y, m = b.useMemo(() => {
    const v = hL(l);
    return x ? v : v.map((w, _) => {
      const A = typeof w.key < "u" ? w.key : _, P = _ + 1 === v.length, M = d ? /* @__PURE__ */ T.jsx(Ow, { children: w }, A) : w;
      if (!y)
        return M;
      const I = b.cloneElement(
        u,
        {
          __css: g
        }
      ), H = P ? null : I;
      return /* @__PURE__ */ T.jsxs(b.Fragment, { children: [
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
  ]), h = Pe("chakra-stack", c);
  return /* @__PURE__ */ T.jsx(
    Q.div,
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
Nw.displayName = "Stack";
var Wa = Me((e, t) => /* @__PURE__ */ T.jsx(Nw, { align: "center", ...e, direction: "row", ref: t }));
Wa.displayName = "HStack";
var sm = Q("div");
sm.displayName = "Box";
var Bw = Me(function(t, r) {
  const { size: n, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ T.jsx(
    sm,
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
Bw.displayName = "Square";
var fN = Me(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ T.jsx(Bw, { size: n, ref: r, borderRadius: "9999px", ...o });
});
fN.displayName = "Circle";
var hN = Object.defineProperty, pN = (e, t, r) => t in e ? hN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, mN = (e, t, r) => (pN(e, typeof t != "symbol" ? t + "" : t, r), r), vN = class {
  constructor() {
    mN(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, lh = new vN();
function jw(e, t) {
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
var gN = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ho = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap(), Gs = {}, Pd = 0, Vw = function(e) {
  return e && (e.host || Vw(e.parentNode));
}, yN = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Vw(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, bN = function(e, t, r, n) {
  var o = yN(t, Array.isArray(e) ? e : [e]);
  Gs[r] || (Gs[r] = /* @__PURE__ */ new WeakMap());
  var i = Gs[r], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(n), g = p !== null && p !== "false", y = (ho.get(f) || 0) + 1, x = (i.get(f) || 0) + 1;
        ho.set(f, y), i.set(f, x), a.push(f), y === 1 && g && Hs.set(f, !0), x === 1 && f.setAttribute(r, "true"), g || f.setAttribute(n, "true");
      }
    });
  };
  return c(t), s.clear(), Pd++, function() {
    a.forEach(function(d) {
      var f = ho.get(d) - 1, p = i.get(d) - 1;
      ho.set(d, f), i.set(d, p), f || (Hs.has(d) || d.removeAttribute(n), Hs.delete(d)), p || d.removeAttribute(r);
    }), Pd--, Pd || (ho = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap(), Gs = {});
  };
}, SN = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || gN(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), bN(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function xN(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = b.useRef(null), c = b.useRef(null), [d, f, p] = kN(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  wN(u, t && a);
  const g = jw(u, t), y = b.useRef(null), x = b.useCallback((M) => {
    y.current = M.target;
  }, []), m = b.useCallback(
    (M) => {
      M.key === "Escape" && (M.stopPropagation(), i && (r == null || r()), l == null || l());
    },
    [i, r, l]
  ), [h, v] = b.useState(!1), [w, _] = b.useState(!1), A = b.useCallback(
    (M = {}, I = null) => ({
      role: "dialog",
      ...M,
      ref: gn(I, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": h ? f : void 0,
      "aria-describedby": w ? p : void 0,
      onClick: Be(
        M.onClick,
        (H) => H.stopPropagation()
      )
    }),
    [p, w, d, f, h]
  ), P = b.useCallback(
    (M) => {
      M.stopPropagation(), y.current === M.target && lh.isTopModal(u.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), $ = b.useCallback(
    (M = {}, I = null) => ({
      ...M,
      ref: gn(I, c),
      onClick: Be(M.onClick, P),
      onKeyDown: Be(M.onKeyDown, m),
      onMouseDown: Be(M.onMouseDown, x)
    }),
    [m, x, P]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: p,
    setBodyMounted: _,
    setHeaderMounted: v,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: A,
    getDialogContainerProps: $,
    index: g
  };
}
function wN(e, t) {
  const r = e.current;
  b.useEffect(() => {
    if (!(!e.current || !t))
      return SN(e.current);
  }, [t, e, r]);
}
function kN(e, ...t) {
  const r = b.useId(), n = e || r;
  return b.useMemo(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [CN, is] = it({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [_N, vi] = it({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), Ww = (e) => {
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
  } = t, y = mi("Modal", t), m = {
    ...xN(t),
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
  return /* @__PURE__ */ T.jsx(_N, { value: m, children: /* @__PURE__ */ T.jsx(CN, { value: y, children: /* @__PURE__ */ T.jsx(oc, { onExitComplete: g, children: m.isOpen && /* @__PURE__ */ T.jsx(qa, { ...r, children: n }) }) }) });
};
Ww.displayName = "Modal";
var wl = "right-scroll-bar-position", kl = "width-before-scroll-bar", TN = "with-scroll-bars-hidden", PN = "--removed-body-scroll-bar-size", Uw = fw(), Ed = function() {
}, ac = b.forwardRef(function(e, t) {
  var r = b.useRef(null), n = b.useState({
    onScrollCapture: Ed,
    onWheelCapture: Ed,
    onTouchMoveCapture: Ed
  }), o = n[0], i = n[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, g = e.inert, y = e.allowPinchZoom, x = e.as, m = x === void 0 ? "div" : x, h = e.gapMode, v = uw(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = f, _ = lw([r, t]), A = hr(hr({}, v), o);
  return b.createElement(
    b.Fragment,
    null,
    c && b.createElement(w, { sideCar: Uw, removeScrollBar: u, shards: d, noIsolation: p, inert: g, setCallbacks: i, allowPinchZoom: !!y, lockRef: r, gapMode: h }),
    a ? b.cloneElement(b.Children.only(s), hr(hr({}, A), { ref: _ })) : b.createElement(m, hr({}, A, { className: l, ref: _ }), s)
  );
});
ac.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ac.classNames = {
  fullWidth: kl,
  zeroRight: wl
};
var cy, EN = function() {
  if (cy)
    return cy;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function $N() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = EN();
  return t && e.setAttribute("nonce", t), e;
}
function AN(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function RN(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var MN = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = $N()) && (AN(t, r), RN(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, zN = function() {
  var e = MN();
  return function(t, r) {
    b.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Hw = function() {
  var e = zN(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, IN = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, $d = function(e) {
  return parseInt(e || "", 10) || 0;
}, FN = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [$d(r), $d(n), $d(o)];
}, DN = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return IN;
  var t = FN(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, LN = Hw(), ON = function(e, t, r, n) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(TN, ` {
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
  
  .`).concat(wl, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(kl, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(wl, " .").concat(wl, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(kl, " .").concat(kl, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(PN, ": ").concat(s, `px;
  }
`);
}, NN = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, i = b.useMemo(function() {
    return DN(o);
  }, [o]);
  return b.createElement(LN, { styles: ON(i, !t, o, r ? "" : "!important") });
}, uh = !1;
if (typeof window < "u")
  try {
    var Ks = Object.defineProperty({}, "passive", {
      get: function() {
        return uh = !0, !0;
      }
    });
    window.addEventListener("test", Ks, Ks), window.removeEventListener("test", Ks, Ks);
  } catch {
    uh = !1;
  }
var po = uh ? { passive: !1 } : !1, BN = function(e) {
  return e.tagName === "TEXTAREA";
}, Gw = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !BN(e) && r[t] === "visible")
  );
}, jN = function(e) {
  return Gw(e, "overflowY");
}, VN = function(e) {
  return Gw(e, "overflowX");
}, dy = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Kw(e, n);
    if (o) {
      var i = Yw(e, n), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, WN = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, UN = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Kw = function(e, t) {
  return e === "v" ? jN(t) : VN(t);
}, Yw = function(e, t) {
  return e === "v" ? WN(t) : UN(t);
}, HN = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, GN = function(e, t, r, n, o) {
  var i = HN(e, window.getComputedStyle(t).direction), a = i * n, s = r.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = Yw(e, s), g = p[0], y = p[1], x = p[2], m = y - x - i * g;
    (g || m) && Kw(e, s) && (d += m, f += g), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, Ys = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, fy = function(e) {
  return [e.deltaX, e.deltaY];
}, hy = function(e) {
  return e && "current" in e ? e.current : e;
}, KN = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, YN = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, XN = 0, mo = [];
function qN(e) {
  var t = b.useRef([]), r = b.useRef([0, 0]), n = b.useRef(), o = b.useState(XN++)[0], i = b.useState(Hw)[0], a = b.useRef(e);
  b.useEffect(function() {
    a.current = e;
  }, [e]), b.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = ZL([e.lockRef.current], (e.shards || []).map(hy), !0).filter(Boolean);
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
    var m = Ys(y), h = r.current, v = "deltaX" in y ? y.deltaX : h[0] - m[0], w = "deltaY" in y ? y.deltaY : h[1] - m[1], _, A = y.target, P = Math.abs(v) > Math.abs(w) ? "h" : "v";
    if ("touches" in y && P === "h" && A.type === "range")
      return !1;
    var $ = dy(P, A);
    if (!$)
      return !0;
    if ($ ? _ = P : (_ = P === "v" ? "h" : "v", $ = dy(P, A)), !$)
      return !1;
    if (!n.current && "changedTouches" in y && (v || w) && (n.current = _), !_)
      return !0;
    var M = n.current || _;
    return GN(M, x, y, M === "h" ? v : w, !0);
  }, []), l = b.useCallback(function(y) {
    var x = y;
    if (!(!mo.length || mo[mo.length - 1] !== i)) {
      var m = "deltaY" in x ? fy(x) : Ys(x), h = t.current.filter(function(_) {
        return _.name === x.type && (_.target === x.target || x.target === _.shadowParent) && KN(_.delta, m);
      })[0];
      if (h && h.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!h) {
        var v = (a.current.shards || []).map(hy).filter(Boolean).filter(function(_) {
          return _.contains(x.target);
        }), w = v.length > 0 ? s(x, v[0]) : !a.current.noIsolation;
        w && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = b.useCallback(function(y, x, m, h) {
    var v = { name: y, delta: x, target: m, should: h, shadowParent: QN(m) };
    t.current.push(v), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== v;
      });
    }, 1);
  }, []), c = b.useCallback(function(y) {
    r.current = Ys(y), n.current = void 0;
  }, []), d = b.useCallback(function(y) {
    u(y.type, fy(y), y.target, s(y, e.lockRef.current));
  }, []), f = b.useCallback(function(y) {
    u(y.type, Ys(y), y.target, s(y, e.lockRef.current));
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
    g ? b.createElement(i, { styles: YN(o) }) : null,
    p ? b.createElement(NN, { gapMode: e.gapMode }) : null
  );
}
function QN(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const ZN = JL(Uw, qN);
var Xw = b.forwardRef(function(e, t) {
  return b.createElement(ac, hr({}, e, { ref: t, sideCar: ZN }));
});
Xw.classNames = ac.classNames;
const JN = Xw;
function eB(e) {
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
  } = vi(), [f, p] = Dx();
  b.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const g = jw(n, d);
  return /* @__PURE__ */ T.jsx(
    Lw,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ T.jsx(
        JN,
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
var [tB, rB] = it(), nB = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function oB(e, t) {
  var r, n;
  if (e)
    return (n = (r = nB[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function iB(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = Xb(), l = (t = s.components) == null ? void 0 : t.Drawer, u = oB(o, s.direction);
  return /* @__PURE__ */ T.jsx(tB, { value: { placement: u }, children: /* @__PURE__ */ T.jsx(
    Ww,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var aB = Q(ow), qw = Me(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = vi(), c = s(a, t), d = l(i), f = Pe("chakra-modal__content", r), p = is(), g = {
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
    }, { placement: x } = rB();
    return /* @__PURE__ */ T.jsx(eB, { children: /* @__PURE__ */ T.jsx(
      Q.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: y,
        children: /* @__PURE__ */ T.jsx(
          aB,
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
qw.displayName = "DrawerContent";
var Qw = Me(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: i } = vi();
    b.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = Pe("chakra-modal__header", r), l = {
      flex: 0,
      ...is().header
    };
    return /* @__PURE__ */ T.jsx(
      Q.header,
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
Qw.displayName = "ModalHeader";
var sB = Q(nc.div), Zw = Me(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...i } = e, a = Pe("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...is().overlay
    }, { motionPreset: u } = vi(), d = o || (u === "none" ? {} : nw);
    return /* @__PURE__ */ T.jsx(
      sB,
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
Zw.displayName = "ModalOverlay";
var Jw = Me((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: i } = vi();
  b.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = Pe("chakra-modal__body", r), s = is();
  return /* @__PURE__ */ T.jsx(
    Q.div,
    {
      ref: t,
      className: a,
      id: o,
      ...n,
      __css: s.body
    }
  );
});
Jw.displayName = "ModalBody";
var ek = Me(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: i } = vi(), a = Pe("chakra-modal__close-btn", n), s = is();
    return /* @__PURE__ */ T.jsx(
      Yp,
      {
        ref: t,
        __css: s.closeButton,
        className: a,
        onClick: Be(r, (l) => {
          l.stopPropagation(), i();
        }),
        ...o
      }
    );
  }
);
ek.displayName = "ModalCloseButton";
var [
  lB,
  uB,
  cB,
  PB
] = lL();
function dB(e) {
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
  } = e, [d, f] = b.useState(r ?? 0), [p, g] = uL({
    defaultValue: r ?? 0,
    value: o,
    onChange: n
  });
  b.useEffect(() => {
    o != null && f(o);
  }, [o]);
  const y = cB(), x = b.useId();
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
var [fB, hB] = it({
  name: "TabsContext",
  errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"
});
function pB(e) {
  const { focusedIndex: t, orientation: r, direction: n } = hB(), o = uB(), i = b.useCallback(
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
    onKeyDown: Be(e.onKeyDown, i)
  };
}
it({});
var [mB, vB] = it({
  name: "TabsStylesContext",
  errorMessage: `useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `
}), tk = Me(function(t, r) {
  const n = mi("Tabs", t), { children: o, className: i, ...a } = xn(t), { htmlProps: s, descendants: l, ...u } = dB(a), c = b.useMemo(() => u, [u]), { isFitted: d, ...f } = s, p = {
    position: "relative",
    ...n.root
  };
  return /* @__PURE__ */ T.jsx(lB, { value: l, children: /* @__PURE__ */ T.jsx(fB, { value: c, children: /* @__PURE__ */ T.jsx(mB, { value: n, children: /* @__PURE__ */ T.jsx(
    Q.div,
    {
      className: Pe("chakra-tabs", i),
      ref: r,
      ...f,
      __css: p,
      children: o
    }
  ) }) }) });
});
tk.displayName = "Tabs";
var rk = Me(function(t, r) {
  const n = pB({ ...t, ref: r }), i = {
    display: "flex",
    ...vB().tablist
  };
  return /* @__PURE__ */ T.jsx(
    Q.div,
    {
      ...n,
      className: Pe("chakra-tabs__tablist", t.className),
      __css: i
    }
  );
});
rk.displayName = "TabList";
function gB(e) {
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
function yB() {
  const [e, t] = b.useState([]), r = b.useRef({}), [n, o] = b.useState(
    "workflow-" + (/* @__PURE__ */ new Date()).getTime()
  ), [i, a] = b.useState("root"), s = () => {
    const u = /* @__PURE__ */ new Set();
    for (let c of Em.graph._nodes)
      c.type == "T2IAdapterLoader" && (c.type = "ControlNetLoader"), c.type == "ConditioningAverage " && (c.type = "ConditioningAverage"), c.type == "SDV_img2vid_Conditioning" && (c.type = "SVD_img2vid_Conditioning"), c.type in r.current || (c.type = gB(c.type), u.add(c.type));
    console.log("missing", u), t(Array.from(u));
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
    Em.registerExtension(u), setTimeout(() => {
      s();
    }, 500);
  };
  return b.useEffect(() => {
    l(), setInterval(() => {
      localStorage.getItem("workflow"), localStorage.setItem("latestWorkflow", n);
    }, 3e3);
  }, []), /* @__PURE__ */ T.jsxs(
    sm,
    {
      style: {
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      },
      children: [
        /* @__PURE__ */ T.jsx(
          tk,
          {
            variant: "unstyled",
            style: {
              // backgroundColor: "white",
            },
            children: /* @__PURE__ */ T.jsxs(
              rk,
              {
                defaultValue: "ComfyUI",
                style: { padding: 8, marginLeft: 16 },
                justifyContent: "space-between",
                gap: 4,
                children: [
                  /* @__PURE__ */ T.jsx(Wa, { children: /* @__PURE__ */ T.jsx(
                    am,
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
                  /* @__PURE__ */ T.jsx(Wa, { children: /* @__PURE__ */ T.jsx(
                    Xp,
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
        /* @__PURE__ */ T.jsx(
          bB,
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
function bB({
  missingNodes: e,
  isOpen: t,
  onclose: r
}) {
  const [n, o] = b.useState(e);
  b.useEffect(() => {
    o(e);
  }, [e]);
  const i = (a) => {
    fetch("/workspace/install_nodes", {
      method: "POST",
      body: JSON.stringify({ nodes: a })
    }).then((s) => s.json()).then((s) => {
      console.log("install res", s);
    });
  };
  return /* @__PURE__ */ T.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ T.jsxs(
    iB,
    {
      isOpen: t,
      placement: "right",
      onClose: () => r(),
      size: "sm",
      children: [
        /* @__PURE__ */ T.jsx(Zw, {}),
        /* @__PURE__ */ T.jsxs(qw, { children: [
          /* @__PURE__ */ T.jsx(ek, {}),
          /* @__PURE__ */ T.jsx(Qw, { children: "Custom Nodes" }),
          /* @__PURE__ */ T.jsxs(Jw, { children: [
            /* @__PURE__ */ T.jsxs(Wa, { mb: 6, children: [
              /* @__PURE__ */ T.jsx(
                nh,
                {
                  mr: 6,
                  isChecked: n.length === e.length,
                  onChange: (a) => {
                    a.target.checked ? o([...e]) : o([]);
                  },
                  children: "Select All"
                }
              ),
              /* @__PURE__ */ T.jsxs(
                Xp,
                {
                  onClick: () => {
                    console.log("onclick install missing nodes", n), i(n);
                  },
                  children: [
                    "Install Missing Nodes ",
                    n.length
                  ]
                }
              )
            ] }),
            e.map((a) => /* @__PURE__ */ T.jsxs(Wa, { children: [
              /* @__PURE__ */ T.jsx(
                nh,
                {
                  isChecked: n.includes(a),
                  onChange: (s) => {
                    s.target.checked ? o([...n, a]) : o(n.filter((l) => l !== a));
                  }
                }
              ),
              /* @__PURE__ */ T.jsx("span", { children: a })
            ] }))
          ] })
        ] })
      ]
    }
  ) });
}
const nk = document.createElement("div");
document.body.prepend(nk);
const SB = {
  // initialColorMode: "light",
  // useSystemColorMode: false,
}, xB = Oz({ config: SB });
Ad.createRoot(nk).render(
  /* @__PURE__ */ T.jsx(Kn.StrictMode, { children: /* @__PURE__ */ T.jsxs(ZD, { children: [
    /* @__PURE__ */ T.jsx(XT, { initialColorMode: xB.config.initialColorMode }),
    /* @__PURE__ */ T.jsx(yB, {})
  ] }) })
);
