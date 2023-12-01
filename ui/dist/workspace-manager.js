import { app as Tm } from "/scripts/app.js";
function fC(e, t) {
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
var hs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function uh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hy = { exports: {} }, hu = {}, py = { exports: {} }, K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wa = Symbol.for("react.element"), hC = Symbol.for("react.portal"), pC = Symbol.for("react.fragment"), mC = Symbol.for("react.strict_mode"), vC = Symbol.for("react.profiler"), gC = Symbol.for("react.provider"), yC = Symbol.for("react.context"), bC = Symbol.for("react.forward_ref"), SC = Symbol.for("react.suspense"), xC = Symbol.for("react.memo"), wC = Symbol.for("react.lazy"), Em = Symbol.iterator;
function kC(e) {
  return e === null || typeof e != "object" ? null : (e = Em && e[Em] || e["@@iterator"], typeof e == "function" ? e : null);
}
var my = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, vy = Object.assign, gy = {};
function di(e, t, r) {
  this.props = e, this.context = t, this.refs = gy, this.updater = r || my;
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
function yy() {
}
yy.prototype = di.prototype;
function ch(e, t, r) {
  this.props = e, this.context = t, this.refs = gy, this.updater = r || my;
}
var dh = ch.prototype = new yy();
dh.constructor = ch;
vy(dh, di.prototype);
dh.isPureReactComponent = !0;
var $m = Array.isArray, by = Object.prototype.hasOwnProperty, fh = { current: null }, Sy = { key: !0, ref: !0, __self: !0, __source: !0 };
function xy(e, t, r) {
  var n, o = {}, i = null, a = null;
  if (t != null)
    for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      by.call(t, n) && !Sy.hasOwnProperty(n) && (o[n] = t[n]);
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
  return { $$typeof: Wa, type: e, key: i, ref: a, props: o, _owner: fh.current };
}
function CC(e, t) {
  return { $$typeof: Wa, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function hh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wa;
}
function _C(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var Am = /\/+/g;
function gc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? _C("" + e.key) : t.toString(36);
}
function Ys(e, t, r, n, o) {
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
          case Wa:
          case hC:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = n === "" ? "." + gc(a, 0) : n, $m(o) ? (r = "", e != null && (r = e.replace(Am, "$&/") + "/"), Ys(o, t, r, "", function(u) {
      return u;
    })) : o != null && (hh(o) && (o = CC(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Am, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, n = n === "" ? "." : n + ":", $m(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = n + gc(i, s);
      a += Ys(i, t, r, l, o);
    }
  else if (l = kC(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = n + gc(i, s++), a += Ys(i, t, r, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function ps(e, t, r) {
  if (e == null)
    return e;
  var n = [], o = 0;
  return Ys(e, n, "", "", function(i) {
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
var dt = { current: null }, Xs = { transition: null }, TC = { ReactCurrentDispatcher: dt, ReactCurrentBatchConfig: Xs, ReactCurrentOwner: fh };
K.Children = { map: ps, forEach: function(e, t, r) {
  ps(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return ps(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ps(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!hh(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
K.Component = di;
K.Fragment = pC;
K.Profiler = vC;
K.PureComponent = ch;
K.StrictMode = mC;
K.Suspense = SC;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = TC;
K.cloneElement = function(e, t, r) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = vy({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = fh.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      by.call(t, l) && !Sy.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
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
  return { $$typeof: Wa, type: e.type, key: o, ref: i, props: n, _owner: a };
};
K.createContext = function(e) {
  return e = { $$typeof: yC, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: gC, _context: e }, e.Consumer = e;
};
K.createElement = xy;
K.createFactory = function(e) {
  var t = xy.bind(null, e);
  return t.type = e, t;
};
K.createRef = function() {
  return { current: null };
};
K.forwardRef = function(e) {
  return { $$typeof: bC, render: e };
};
K.isValidElement = hh;
K.lazy = function(e) {
  return { $$typeof: wC, _payload: { _status: -1, _result: e }, _init: PC };
};
K.memo = function(e, t) {
  return { $$typeof: xC, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function(e) {
  var t = Xs.transition;
  Xs.transition = {};
  try {
    e();
  } finally {
    Xs.transition = t;
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
py.exports = K;
var b = py.exports;
const Kn = /* @__PURE__ */ uh(b), Rm = /* @__PURE__ */ fC({
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
var EC = b, $C = Symbol.for("react.element"), AC = Symbol.for("react.fragment"), RC = Object.prototype.hasOwnProperty, MC = EC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, zC = { key: !0, ref: !0, __self: !0, __source: !0 };
function wy(e, t, r) {
  var n, o = {}, i = null, a = null;
  r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (n in t)
    RC.call(t, n) && !zC.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in t = e.defaultProps, t)
      o[n] === void 0 && (o[n] = t[n]);
  return { $$typeof: $C, type: e, key: i, ref: a, props: o, _owner: MC.current };
}
hu.Fragment = AC;
hu.jsx = wy;
hu.jsxs = wy;
hy.exports = hu;
var T = hy.exports, Ad = {}, ky = { exports: {} }, Mt = {}, Cy = { exports: {} }, _y = {};
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
  function t(z, O) {
    var W = z.length;
    z.push(O);
    e:
      for (; 0 < W; ) {
        var j = W - 1 >>> 1, ee = z[j];
        if (0 < o(ee, O))
          z[j] = O, z[W] = ee, W = j;
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
    var O = z[0], W = z.pop();
    if (W !== O) {
      z[0] = W;
      e:
        for (var j = 0, ee = z.length, H = ee >>> 1; j < H; ) {
          var re = 2 * (j + 1) - 1, wt = z[re], xe = re + 1, Ie = z[xe];
          if (0 > o(wt, W))
            xe < ee && 0 > o(Ie, wt) ? (z[j] = Ie, z[xe] = W, j = xe) : (z[j] = wt, z[re] = W, j = re);
          else if (xe < ee && 0 > o(Ie, W))
            z[j] = Ie, z[xe] = W, j = xe;
          else
            break e;
        }
    }
    return O;
  }
  function o(z, O) {
    var W = z.sortIndex - O.sortIndex;
    return W !== 0 ? W : z.id - O.id;
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
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, g = !1, y = !1, x = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(z) {
    for (var O = r(u); O !== null; ) {
      if (O.callback === null)
        n(u);
      else if (O.startTime <= z)
        n(u), O.sortIndex = O.expirationTime, t(l, O);
      else
        break;
      O = r(u);
    }
  }
  function w(z) {
    if (y = !1, m(z), !g)
      if (r(l) !== null)
        g = !0, ge(_);
      else {
        var O = r(u);
        O !== null && F(w, O.startTime - z);
      }
  }
  function _(z, O) {
    g = !1, y && (y = !1, v($), $ = -1), p = !0;
    var W = f;
    try {
      for (m(O), d = r(l); d !== null && (!(d.expirationTime > O) || z && !U()); ) {
        var j = d.callback;
        if (typeof j == "function") {
          d.callback = null, f = d.priorityLevel;
          var ee = j(d.expirationTime <= O);
          O = e.unstable_now(), typeof ee == "function" ? d.callback = ee : d === r(l) && n(l), m(O);
        } else
          n(l);
        d = r(l);
      }
      if (d !== null)
        var H = !0;
      else {
        var re = r(u);
        re !== null && F(w, re.startTime - O), H = !1;
      }
      return H;
    } finally {
      d = null, f = W, p = !1;
    }
  }
  var A = !1, P = null, $ = -1, R = 5, I = -1;
  function U() {
    return !(e.unstable_now() - I < R);
  }
  function ue() {
    if (P !== null) {
      var z = e.unstable_now();
      I = z;
      var O = !0;
      try {
        O = P(!0, z);
      } finally {
        O ? fe() : (A = !1, P = null);
      }
    } else
      A = !1;
  }
  var fe;
  if (typeof h == "function")
    fe = function() {
      h(ue);
    };
  else if (typeof MessageChannel < "u") {
    var Y = new MessageChannel(), le = Y.port2;
    Y.port1.onmessage = ue, fe = function() {
      le.postMessage(null);
    };
  } else
    fe = function() {
      x(ue, 0);
    };
  function ge(z) {
    P = z, A || (A = !0, fe());
  }
  function F(z, O) {
    $ = x(function() {
      z(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) {
    z.callback = null;
  }, e.unstable_continueExecution = function() {
    g || p || (g = !0, ge(_));
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
        var O = 3;
        break;
      default:
        O = f;
    }
    var W = f;
    f = O;
    try {
      return z();
    } finally {
      f = W;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(z, O) {
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
    var W = f;
    f = z;
    try {
      return O();
    } finally {
      f = W;
    }
  }, e.unstable_scheduleCallback = function(z, O, W) {
    var j = e.unstable_now();
    switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? j + W : j) : W = j, z) {
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
    return ee = W + ee, z = { id: c++, callback: O, priorityLevel: z, startTime: W, expirationTime: ee, sortIndex: -1 }, W > j ? (z.sortIndex = W, t(u, z), r(l) === null && z === r(u) && (y ? (v($), $ = -1) : y = !0, F(w, W - j))) : (z.sortIndex = ee, t(l, z), g || p || (g = !0, ge(_))), z;
  }, e.unstable_shouldYield = U, e.unstable_wrapCallback = function(z) {
    var O = f;
    return function() {
      var W = f;
      f = O;
      try {
        return z.apply(this, arguments);
      } finally {
        f = W;
      }
    };
  };
})(_y);
Cy.exports = _y;
var IC = Cy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Py = b, At = IC;
function M(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ty = /* @__PURE__ */ new Set(), da = {};
function to(e, t) {
  Jo(e, t), Jo(e + "Capture", t);
}
function Jo(e, t) {
  for (da[e] = t, e = 0; e < t.length; e++)
    Ty.add(t[e]);
}
var Dr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Rd = Object.prototype.hasOwnProperty, FC = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Mm = {}, zm = {};
function DC(e) {
  return Rd.call(zm, e) ? !0 : Rd.call(Mm, e) ? !1 : FC.test(e) ? zm[e] = !0 : (Mm[e] = !0, !1);
}
function LC(e, t, r, n) {
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
function OC(e, t, r, n) {
  if (t === null || typeof t > "u" || LC(e, t, r, n))
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
var ph = /[\-:]([a-z])/g;
function mh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ph,
    mh
  );
  Ze[t] = new ft(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ph, mh);
  Ze[t] = new ft(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ph, mh);
  Ze[t] = new ft(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ze[e] = new ft(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ze.xlinkHref = new ft("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ze[e] = new ft(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vh(e, t, r, n) {
  var o = Ze.hasOwnProperty(t) ? Ze[t] : null;
  (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (OC(t, r, o, n) && (r = null), n || o === null ? DC(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Vr = Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ms = Symbol.for("react.element"), vo = Symbol.for("react.portal"), go = Symbol.for("react.fragment"), gh = Symbol.for("react.strict_mode"), Md = Symbol.for("react.profiler"), Ey = Symbol.for("react.provider"), $y = Symbol.for("react.context"), yh = Symbol.for("react.forward_ref"), zd = Symbol.for("react.suspense"), Id = Symbol.for("react.suspense_list"), bh = Symbol.for("react.memo"), Yr = Symbol.for("react.lazy"), Ay = Symbol.for("react.offscreen"), Im = Symbol.iterator;
function Si(e) {
  return e === null || typeof e != "object" ? null : (e = Im && e[Im] || e["@@iterator"], typeof e == "function" ? e : null);
}
var $e = Object.assign, yc;
function Fi(e) {
  if (yc === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      yc = t && t[1] || "";
    }
  return `
` + yc + e;
}
var bc = !1;
function Sc(e, t) {
  if (!e || bc)
    return "";
  bc = !0;
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
    bc = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? Fi(e) : "";
}
function NC(e) {
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
      return e = Sc(e.type, !1), e;
    case 11:
      return e = Sc(e.type.render, !1), e;
    case 1:
      return e = Sc(e.type, !0), e;
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
    case gh:
      return "StrictMode";
    case zd:
      return "Suspense";
    case Id:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case $y:
        return (e.displayName || "Context") + ".Consumer";
      case Ey:
        return (e._context.displayName || "Context") + ".Provider";
      case yh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case bh:
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
function Ry(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function jC(e) {
  var t = Ry(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
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
function vs(e) {
  e._valueTracker || (e._valueTracker = jC(e));
}
function My(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var r = t.getValue(), n = "";
  return e && (n = Ry(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function kl(e) {
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
  return $e({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function Fm(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = pn(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function zy(e, t) {
  t = t.checked, t != null && vh(e, "checked", t, !1);
}
function Ld(e, t) {
  zy(e, t);
  var r = pn(t.value), n = t.type;
  if (r != null)
    n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Od(e, t.type, r) : t.hasOwnProperty("defaultValue") && Od(e, t.type, pn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Dm(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function Od(e, t, r) {
  (t !== "number" || kl(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
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
    throw Error(M(91));
  return $e({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Lm(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null)
        throw Error(M(92));
      if (Di(r)) {
        if (1 < r.length)
          throw Error(M(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: pn(r) };
}
function Iy(e, t) {
  var r = pn(t.value), n = pn(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function Om(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fy(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Fy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var gs, Dy = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (gs = gs || document.createElement("div"), gs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = gs.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function fa(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Hi = {
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
}, VC = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hi).forEach(function(e) {
  VC.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Hi[t] = Hi[e];
  });
});
function Ly(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Hi.hasOwnProperty(e) && Hi[e] ? ("" + t).trim() : t + "px";
}
function Oy(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0, o = Ly(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o;
    }
}
var WC = $e({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function jd(e, t) {
  if (t) {
    if (WC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Sh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ud = null, Bo = null, jo = null;
function Nm(e) {
  if (e = Ga(e)) {
    if (typeof Ud != "function")
      throw Error(M(280));
    var t = e.stateNode;
    t && (t = yu(t), Ud(e.stateNode, e.type, t));
  }
}
function Ny(e) {
  Bo ? jo ? jo.push(e) : jo = [e] : Bo = e;
}
function By() {
  if (Bo) {
    var e = Bo, t = jo;
    if (jo = Bo = null, Nm(e), t)
      for (e = 0; e < t.length; e++)
        Nm(t[e]);
  }
}
function jy(e, t) {
  return e(t);
}
function Vy() {
}
var xc = !1;
function Wy(e, t, r) {
  if (xc)
    return e(t, r);
  xc = !0;
  try {
    return jy(e, t, r);
  } finally {
    xc = !1, (Bo !== null || jo !== null) && (Vy(), By());
  }
}
function ha(e, t) {
  var r = e.stateNode;
  if (r === null)
    return null;
  var n = yu(r);
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
var Hd = !1;
if (Dr)
  try {
    var xi = {};
    Object.defineProperty(xi, "passive", { get: function() {
      Hd = !0;
    } }), window.addEventListener("test", xi, xi), window.removeEventListener("test", xi, xi);
  } catch {
    Hd = !1;
  }
function UC(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Gi = !1, Cl = null, _l = !1, Gd = null, HC = { onError: function(e) {
  Gi = !0, Cl = e;
} };
function GC(e, t, r, n, o, i, a, s, l) {
  Gi = !1, Cl = null, UC.apply(HC, arguments);
}
function KC(e, t, r, n, o, i, a, s, l) {
  if (GC.apply(this, arguments), Gi) {
    if (Gi) {
      var u = Cl;
      Gi = !1, Cl = null;
    } else
      throw Error(M(198));
    _l || (_l = !0, Gd = u);
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
function Uy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Bm(e) {
  if (ro(e) !== e)
    throw Error(M(188));
}
function YC(e) {
  var t = e.alternate;
  if (!t) {
    if (t = ro(e), t === null)
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
          return Bm(o), e;
        if (i === n)
          return Bm(o), t;
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
function Hy(e) {
  return e = YC(e), e !== null ? Gy(e) : null;
}
function Gy(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Gy(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Ky = At.unstable_scheduleCallback, jm = At.unstable_cancelCallback, XC = At.unstable_shouldYield, qC = At.unstable_requestPaint, De = At.unstable_now, QC = At.unstable_getCurrentPriorityLevel, xh = At.unstable_ImmediatePriority, Yy = At.unstable_UserBlockingPriority, Pl = At.unstable_NormalPriority, ZC = At.unstable_LowPriority, Xy = At.unstable_IdlePriority, pu = null, pr = null;
function JC(e) {
  if (pr && typeof pr.onCommitFiberRoot == "function")
    try {
      pr.onCommitFiberRoot(pu, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var er = Math.clz32 ? Math.clz32 : r_, e_ = Math.log, t_ = Math.LN2;
function r_(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (e_(e) / t_ | 0) | 0;
}
var ys = 64, bs = 4194304;
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
function Tl(e, t) {
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
      r = 31 - er(t), o = 1 << r, n |= e[r], t &= ~o;
  return n;
}
function n_(e, t) {
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
function o_(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - er(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & r) || s & n) && (o[a] = n_(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Kd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function qy() {
  var e = ys;
  return ys <<= 1, !(ys & 4194240) && (ys = 64), e;
}
function wc(e) {
  for (var t = [], r = 0; 31 > r; r++)
    t.push(e);
  return t;
}
function Ua(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - er(t), e[t] = r;
}
function i_(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - er(r), i = 1 << o;
    t[o] = 0, n[o] = -1, e[o] = -1, r &= ~i;
  }
}
function wh(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - er(r), o = 1 << n;
    o & t | e[n] & t && (e[n] |= t), r &= ~o;
  }
}
var ce = 0;
function Qy(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Zy, kh, Jy, e1, t1, Yd = !1, Ss = [], nn = null, on = null, an = null, pa = /* @__PURE__ */ new Map(), ma = /* @__PURE__ */ new Map(), Qr = [], a_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Vm(e, t) {
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
      pa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ma.delete(t.pointerId);
  }
}
function wi(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ga(t), t !== null && kh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function s_(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return nn = wi(nn, e, t, r, n, o), !0;
    case "dragenter":
      return on = wi(on, e, t, r, n, o), !0;
    case "mouseover":
      return an = wi(an, e, t, r, n, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return pa.set(i, wi(pa.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, ma.set(i, wi(ma.get(i) || null, e, t, r, n, o)), !0;
  }
  return !1;
}
function r1(e) {
  var t = Fn(e.target);
  if (t !== null) {
    var r = ro(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = Uy(r), t !== null) {
          e.blockedOn = t, t1(e.priority, function() {
            Jy(r);
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
function qs(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Xd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      Wd = n, r.target.dispatchEvent(n), Wd = null;
    } else
      return t = Ga(r), t !== null && kh(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function Wm(e, t, r) {
  qs(e) && r.delete(t);
}
function l_() {
  Yd = !1, nn !== null && qs(nn) && (nn = null), on !== null && qs(on) && (on = null), an !== null && qs(an) && (an = null), pa.forEach(Wm), ma.forEach(Wm);
}
function ki(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Yd || (Yd = !0, At.unstable_scheduleCallback(At.unstable_NormalPriority, l_)));
}
function va(e) {
  function t(o) {
    return ki(o, e);
  }
  if (0 < Ss.length) {
    ki(Ss[0], e);
    for (var r = 1; r < Ss.length; r++) {
      var n = Ss[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (nn !== null && ki(nn, e), on !== null && ki(on, e), an !== null && ki(an, e), pa.forEach(t), ma.forEach(t), r = 0; r < Qr.length; r++)
    n = Qr[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Qr.length && (r = Qr[0], r.blockedOn === null); )
    r1(r), r.blockedOn === null && Qr.shift();
}
var Vo = Vr.ReactCurrentBatchConfig, El = !0;
function u_(e, t, r, n) {
  var o = ce, i = Vo.transition;
  Vo.transition = null;
  try {
    ce = 1, Ch(e, t, r, n);
  } finally {
    ce = o, Vo.transition = i;
  }
}
function c_(e, t, r, n) {
  var o = ce, i = Vo.transition;
  Vo.transition = null;
  try {
    ce = 4, Ch(e, t, r, n);
  } finally {
    ce = o, Vo.transition = i;
  }
}
function Ch(e, t, r, n) {
  if (El) {
    var o = Xd(e, t, r, n);
    if (o === null)
      Mc(e, t, n, $l, r), Vm(e, n);
    else if (s_(o, e, t, r, n))
      n.stopPropagation();
    else if (Vm(e, n), t & 4 && -1 < a_.indexOf(e)) {
      for (; o !== null; ) {
        var i = Ga(o);
        if (i !== null && Zy(i), i = Xd(e, t, r, n), i === null && Mc(e, t, n, $l, r), i === o)
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else
      Mc(e, t, n, null, r);
  }
}
var $l = null;
function Xd(e, t, r, n) {
  if ($l = null, e = Sh(n), e = Fn(e), e !== null)
    if (t = ro(e), t === null)
      e = null;
    else if (r = t.tag, r === 13) {
      if (e = Uy(t), e !== null)
        return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return $l = e, null;
}
function n1(e) {
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
      switch (QC()) {
        case xh:
          return 1;
        case Yy:
          return 4;
        case Pl:
        case ZC:
          return 16;
        case Xy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null, _h = null, Qs = null;
function o1() {
  if (Qs)
    return Qs;
  var e, t = _h, r = t.length, n, o = "value" in en ? en.value : en.textContent, i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++)
    ;
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++)
    ;
  return Qs = o.slice(e, 1 < n ? 1 - n : void 0);
}
function Zs(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function xs() {
  return !0;
}
function Um() {
  return !1;
}
function zt(e) {
  function t(r, n, o, i, a) {
    this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? xs : Um, this.isPropagationStopped = Um, this;
  }
  return $e(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = xs);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = xs);
  }, persist: function() {
  }, isPersistent: xs }), t;
}
var fi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ph = zt(fi), Ha = $e({}, fi, { view: 0, detail: 0 }), d_ = zt(Ha), kc, Cc, Ci, mu = $e({}, Ha, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Th, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ci && (Ci && e.type === "mousemove" ? (kc = e.screenX - Ci.screenX, Cc = e.screenY - Ci.screenY) : Cc = kc = 0, Ci = e), kc);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Cc;
} }), Hm = zt(mu), f_ = $e({}, mu, { dataTransfer: 0 }), h_ = zt(f_), p_ = $e({}, Ha, { relatedTarget: 0 }), _c = zt(p_), m_ = $e({}, fi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), v_ = zt(m_), g_ = $e({}, fi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), y_ = zt(g_), b_ = $e({}, fi, { data: 0 }), Gm = zt(b_), S_ = {
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
}, x_ = {
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
}, w_ = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function k_(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = w_[e]) ? !!t[e] : !1;
}
function Th() {
  return k_;
}
var C_ = $e({}, Ha, { key: function(e) {
  if (e.key) {
    var t = S_[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Zs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? x_[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Th, charCode: function(e) {
  return e.type === "keypress" ? Zs(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Zs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), __ = zt(C_), P_ = $e({}, mu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Km = zt(P_), T_ = $e({}, Ha, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Th }), E_ = zt(T_), $_ = $e({}, fi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), A_ = zt($_), R_ = $e({}, mu, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), M_ = zt(R_), z_ = [9, 13, 27, 32], Eh = Dr && "CompositionEvent" in window, Ki = null;
Dr && "documentMode" in document && (Ki = document.documentMode);
var I_ = Dr && "TextEvent" in window && !Ki, i1 = Dr && (!Eh || Ki && 8 < Ki && 11 >= Ki), Ym = " ", Xm = !1;
function a1(e, t) {
  switch (e) {
    case "keyup":
      return z_.indexOf(t.keyCode) !== -1;
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
function s1(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var yo = !1;
function F_(e, t) {
  switch (e) {
    case "compositionend":
      return s1(t);
    case "keypress":
      return t.which !== 32 ? null : (Xm = !0, Ym);
    case "textInput":
      return e = t.data, e === Ym && Xm ? null : e;
    default:
      return null;
  }
}
function D_(e, t) {
  if (yo)
    return e === "compositionend" || !Eh && a1(e, t) ? (e = o1(), Qs = _h = en = null, yo = !1, e) : null;
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
      return i1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var L_ = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function qm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!L_[e.type] : t === "textarea";
}
function l1(e, t, r, n) {
  Ny(n), t = Al(t, "onChange"), 0 < t.length && (r = new Ph("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var Yi = null, ga = null;
function O_(e) {
  b1(e, 0);
}
function vu(e) {
  var t = xo(e);
  if (My(t))
    return e;
}
function N_(e, t) {
  if (e === "change")
    return t;
}
var u1 = !1;
if (Dr) {
  var Pc;
  if (Dr) {
    var Tc = "oninput" in document;
    if (!Tc) {
      var Qm = document.createElement("div");
      Qm.setAttribute("oninput", "return;"), Tc = typeof Qm.oninput == "function";
    }
    Pc = Tc;
  } else
    Pc = !1;
  u1 = Pc && (!document.documentMode || 9 < document.documentMode);
}
function Zm() {
  Yi && (Yi.detachEvent("onpropertychange", c1), ga = Yi = null);
}
function c1(e) {
  if (e.propertyName === "value" && vu(ga)) {
    var t = [];
    l1(t, ga, e, Sh(e)), Wy(O_, t);
  }
}
function B_(e, t, r) {
  e === "focusin" ? (Zm(), Yi = t, ga = r, Yi.attachEvent("onpropertychange", c1)) : e === "focusout" && Zm();
}
function j_(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return vu(ga);
}
function V_(e, t) {
  if (e === "click")
    return vu(t);
}
function W_(e, t) {
  if (e === "input" || e === "change")
    return vu(t);
}
function U_(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var nr = typeof Object.is == "function" ? Object.is : U_;
function ya(e, t) {
  if (nr(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Rd.call(t, o) || !nr(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Jm(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function ev(e, t) {
  var r = Jm(e);
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
    r = Jm(r);
  }
}
function d1(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? d1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function f1() {
  for (var e = window, t = kl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r)
      e = t.contentWindow;
    else
      break;
    t = kl(e.document);
  }
  return t;
}
function $h(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function H_(e) {
  var t = f1(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && d1(r.ownerDocument.documentElement, r)) {
    if (n !== null && $h(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r)
        r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = r.textContent.length, i = Math.min(n.start, o);
        n = n.end === void 0 ? i : Math.min(n.end, o), !e.extend && i > n && (o = n, n = i, i = o), o = ev(r, i);
        var a = ev(
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
var G_ = Dr && "documentMode" in document && 11 >= document.documentMode, bo = null, qd = null, Xi = null, Qd = !1;
function tv(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Qd || bo == null || bo !== kl(n) || (n = bo, "selectionStart" in n && $h(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Xi && ya(Xi, n) || (Xi = n, n = Al(qd, "onSelect"), 0 < n.length && (t = new Ph("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = bo)));
}
function ws(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var So = { animationend: ws("Animation", "AnimationEnd"), animationiteration: ws("Animation", "AnimationIteration"), animationstart: ws("Animation", "AnimationStart"), transitionend: ws("Transition", "TransitionEnd") }, Ec = {}, h1 = {};
Dr && (h1 = document.createElement("div").style, "AnimationEvent" in window || (delete So.animationend.animation, delete So.animationiteration.animation, delete So.animationstart.animation), "TransitionEvent" in window || delete So.transitionend.transition);
function gu(e) {
  if (Ec[e])
    return Ec[e];
  if (!So[e])
    return e;
  var t = So[e], r;
  for (r in t)
    if (t.hasOwnProperty(r) && r in h1)
      return Ec[e] = t[r];
  return e;
}
var p1 = gu("animationend"), m1 = gu("animationiteration"), v1 = gu("animationstart"), g1 = gu("transitionend"), y1 = /* @__PURE__ */ new Map(), rv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function yn(e, t) {
  y1.set(e, t), to(t, [e]);
}
for (var $c = 0; $c < rv.length; $c++) {
  var Ac = rv[$c], K_ = Ac.toLowerCase(), Y_ = Ac[0].toUpperCase() + Ac.slice(1);
  yn(K_, "on" + Y_);
}
yn(p1, "onAnimationEnd");
yn(m1, "onAnimationIteration");
yn(v1, "onAnimationStart");
yn("dblclick", "onDoubleClick");
yn("focusin", "onFocus");
yn("focusout", "onBlur");
yn(g1, "onTransitionEnd");
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
var Oi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), X_ = new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));
function nv(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, KC(n, t, void 0, e), e.currentTarget = null;
}
function b1(e, t) {
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
          nv(o, s, u), i = l;
        }
      else
        for (a = 0; a < n.length; a++) {
          if (s = n[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          nv(o, s, u), i = l;
        }
    }
  }
  if (_l)
    throw e = Gd, _l = !1, Gd = null, e;
}
function ye(e, t) {
  var r = t[rf];
  r === void 0 && (r = t[rf] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (S1(t, e, 2, !1), r.add(n));
}
function Rc(e, t, r) {
  var n = 0;
  t && (n |= 4), S1(r, e, n, t);
}
var ks = "_reactListening" + Math.random().toString(36).slice(2);
function ba(e) {
  if (!e[ks]) {
    e[ks] = !0, Ty.forEach(function(r) {
      r !== "selectionchange" && (X_.has(r) || Rc(r, !1, e), Rc(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ks] || (t[ks] = !0, Rc("selectionchange", !1, t));
  }
}
function S1(e, t, r, n) {
  switch (n1(t)) {
    case 1:
      var o = u_;
      break;
    case 4:
      o = c_;
      break;
    default:
      o = Ch;
  }
  r = o.bind(null, t, r, e), o = void 0, !Hd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: o }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, { passive: o }) : e.addEventListener(t, r, !1);
}
function Mc(e, t, r, n, o) {
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
  Wy(function() {
    var u = i, c = Sh(r), d = [];
    e: {
      var f = y1.get(e);
      if (f !== void 0) {
        var p = Ph, g = e;
        switch (e) {
          case "keypress":
            if (Zs(r) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = __;
            break;
          case "focusin":
            g = "focus", p = _c;
            break;
          case "focusout":
            g = "blur", p = _c;
            break;
          case "beforeblur":
          case "afterblur":
            p = _c;
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
            p = Hm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = h_;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = E_;
            break;
          case p1:
          case m1:
          case v1:
            p = v_;
            break;
          case g1:
            p = A_;
            break;
          case "scroll":
            p = d_;
            break;
          case "wheel":
            p = M_;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = y_;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Km;
        }
        var y = (t & 4) !== 0, x = !y && e === "scroll", v = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var w = m.stateNode;
          if (m.tag === 5 && w !== null && (m = w, v !== null && (w = ha(h, v), w != null && y.push(Sa(h, w, m)))), x)
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
          if (y = Hm, w = "onMouseLeave", v = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (y = Km, w = "onPointerLeave", v = "onPointerEnter", h = "pointer"), x = p == null ? f : xo(p), m = g == null ? f : xo(g), f = new y(w, h + "leave", p, r, c), f.target = x, f.relatedTarget = m, w = null, Fn(c) === u && (y = new y(v, h + "enter", g, r, c), y.target = m, y.relatedTarget = x, w = y), x = w, p && g)
            t: {
              for (y = p, v = g, h = 0, m = y; m; m = uo(m))
                h++;
              for (m = 0, w = v; w; w = uo(w))
                m++;
              for (; 0 < h - m; )
                y = uo(y), h--;
              for (; 0 < m - h; )
                v = uo(v), m--;
              for (; h--; ) {
                if (y === v || v !== null && y === v.alternate)
                  break t;
                y = uo(y), v = uo(v);
              }
              y = null;
            }
          else
            y = null;
          p !== null && ov(d, f, p, y, !1), g !== null && x !== null && ov(d, x, g, y, !0);
        }
      }
      e: {
        if (f = u ? xo(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var _ = N_;
        else if (qm(f))
          if (u1)
            _ = W_;
          else {
            _ = j_;
            var A = B_;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (_ = V_);
        if (_ && (_ = _(e, u))) {
          l1(d, _, r, c);
          break e;
        }
        A && A(e, f, u), e === "focusout" && (A = f._wrapperState) && A.controlled && f.type === "number" && Od(f, "number", f.value);
      }
      switch (A = u ? xo(u) : window, e) {
        case "focusin":
          (qm(A) || A.contentEditable === "true") && (bo = A, qd = u, Xi = null);
          break;
        case "focusout":
          Xi = qd = bo = null;
          break;
        case "mousedown":
          Qd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Qd = !1, tv(d, r, c);
          break;
        case "selectionchange":
          if (G_)
            break;
        case "keydown":
        case "keyup":
          tv(d, r, c);
      }
      var P;
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
        yo ? a1(e, r) && ($ = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && ($ = "onCompositionStart");
      $ && (i1 && r.locale !== "ko" && (yo || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && yo && (P = o1()) : (en = c, _h = "value" in en ? en.value : en.textContent, yo = !0)), A = Al(u, $), 0 < A.length && ($ = new Gm($, e, null, r, c), d.push({ event: $, listeners: A }), P ? $.data = P : (P = s1(r), P !== null && ($.data = P)))), (P = I_ ? F_(e, r) : D_(e, r)) && (u = Al(u, "onBeforeInput"), 0 < u.length && (c = new Gm("onBeforeInput", "beforeinput", null, r, c), d.push({ event: c, listeners: u }), c.data = P));
    }
    b1(d, t);
  });
}
function Sa(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Al(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ha(e, r), i != null && n.unshift(Sa(e, i, o)), i = ha(e, t), i != null && n.push(Sa(e, i, o))), e = e.return;
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
function ov(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r, l = s.alternate, u = s.stateNode;
    if (l !== null && l === n)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = ha(r, i), l != null && a.unshift(Sa(r, l, s))) : o || (l = ha(r, i), l != null && a.push(Sa(r, l, s)))), r = r.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var q_ = /\r\n?/g, Q_ = /\u0000|\uFFFD/g;
function iv(e) {
  return (typeof e == "string" ? e : "" + e).replace(q_, `
`).replace(Q_, "");
}
function Cs(e, t, r) {
  if (t = iv(t), iv(e) !== t && r)
    throw Error(M(425));
}
function Rl() {
}
var Zd = null, Jd = null;
function ef(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var tf = typeof setTimeout == "function" ? setTimeout : void 0, Z_ = typeof clearTimeout == "function" ? clearTimeout : void 0, av = typeof Promise == "function" ? Promise : void 0, J_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof av < "u" ? function(e) {
  return av.resolve(null).then(e).catch(e2);
} : tf;
function e2(e) {
  setTimeout(function() {
    throw e;
  });
}
function zc(e, t) {
  var r = t, n = 0;
  do {
    var o = r.nextSibling;
    if (e.removeChild(r), o && o.nodeType === 8)
      if (r = o.data, r === "/$") {
        if (n === 0) {
          e.removeChild(o), va(t);
          return;
        }
        n--;
      } else
        r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = o;
  } while (r);
  va(t);
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
function sv(e) {
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
var hi = Math.random().toString(36).slice(2), dr = "__reactFiber$" + hi, xa = "__reactProps$" + hi, Lr = "__reactContainer$" + hi, rf = "__reactEvents$" + hi, t2 = "__reactListeners$" + hi, r2 = "__reactHandles$" + hi;
function Fn(e) {
  var t = e[dr];
  if (t)
    return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[Lr] || r[dr]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
        for (e = sv(e); e !== null; ) {
          if (r = e[dr])
            return r;
          e = sv(e);
        }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function Ga(e) {
  return e = e[dr] || e[Lr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function xo(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(M(33));
}
function yu(e) {
  return e[xa] || null;
}
var nf = [], wo = -1;
function bn(e) {
  return { current: e };
}
function Se(e) {
  0 > wo || (e.current = nf[wo], nf[wo] = null, wo--);
}
function pe(e, t) {
  wo++, nf[wo] = e.current, e.current = t;
}
var mn = {}, ot = bn(mn), gt = bn(!1), Yn = mn;
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
function Ml() {
  Se(gt), Se(ot);
}
function lv(e, t, r) {
  if (ot.current !== mn)
    throw Error(M(168));
  pe(ot, t), pe(gt, r);
}
function x1(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function")
    return r;
  n = n.getChildContext();
  for (var o in n)
    if (!(o in t))
      throw Error(M(108, BC(e) || "Unknown", o));
  return $e({}, r, n);
}
function zl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mn, Yn = ot.current, pe(ot, e), pe(gt, gt.current), !0;
}
function uv(e, t, r) {
  var n = e.stateNode;
  if (!n)
    throw Error(M(169));
  r ? (e = x1(e, t, Yn), n.__reactInternalMemoizedMergedChildContext = e, Se(gt), Se(ot), pe(ot, e)) : Se(gt), pe(gt, r);
}
var _r = null, bu = !1, Ic = !1;
function w1(e) {
  _r === null ? _r = [e] : _r.push(e);
}
function n2(e) {
  bu = !0, w1(e);
}
function Sn() {
  if (!Ic && _r !== null) {
    Ic = !0;
    var e = 0, t = ce;
    try {
      var r = _r;
      for (ce = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      _r = null, bu = !1;
    } catch (o) {
      throw _r !== null && (_r = _r.slice(e + 1)), Ky(xh, Sn), o;
    } finally {
      ce = t, Ic = !1;
    }
  }
  return null;
}
var ko = [], Co = 0, Il = null, Fl = 0, Vt = [], Wt = 0, Xn = null, Er = 1, $r = "";
function En(e, t) {
  ko[Co++] = Fl, ko[Co++] = Il, Il = e, Fl = t;
}
function k1(e, t, r) {
  Vt[Wt++] = Er, Vt[Wt++] = $r, Vt[Wt++] = Xn, Xn = e;
  var n = Er;
  e = $r;
  var o = 32 - er(n) - 1;
  n &= ~(1 << o), r += 1;
  var i = 32 - er(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (n & (1 << a) - 1).toString(32), n >>= a, o -= a, Er = 1 << 32 - er(t) + o | r << o | n, $r = i + e;
  } else
    Er = 1 << i | r << o | n, $r = e;
}
function Ah(e) {
  e.return !== null && (En(e, 1), k1(e, 1, 0));
}
function Rh(e) {
  for (; e === Il; )
    Il = ko[--Co], ko[Co] = null, Fl = ko[--Co], ko[Co] = null;
  for (; e === Xn; )
    Xn = Vt[--Wt], Vt[Wt] = null, $r = Vt[--Wt], Vt[Wt] = null, Er = Vt[--Wt], Vt[Wt] = null;
}
var Tt = null, Pt = null, Ce = !1, Zt = null;
function C1(e, t) {
  var r = Ut(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function cv(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Tt = e, Pt = sn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Tt = e, Pt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Xn !== null ? { id: Er, overflow: $r } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Ut(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Tt = e, Pt = null, !0) : !1;
    default:
      return !1;
  }
}
function of(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function af(e) {
  if (Ce) {
    var t = Pt;
    if (t) {
      var r = t;
      if (!cv(e, t)) {
        if (of(e))
          throw Error(M(418));
        t = sn(r.nextSibling);
        var n = Tt;
        t && cv(e, t) ? C1(n, r) : (e.flags = e.flags & -4097 | 2, Ce = !1, Tt = e);
      }
    } else {
      if (of(e))
        throw Error(M(418));
      e.flags = e.flags & -4097 | 2, Ce = !1, Tt = e;
    }
  }
}
function dv(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Tt = e;
}
function _s(e) {
  if (e !== Tt)
    return !1;
  if (!Ce)
    return dv(e), Ce = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ef(e.type, e.memoizedProps)), t && (t = Pt)) {
    if (of(e))
      throw _1(), Error(M(418));
    for (; t; )
      C1(e, t), t = sn(t.nextSibling);
  }
  if (dv(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Pt = sn(e.nextSibling);
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
    Pt = Tt ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function _1() {
  for (var e = Pt; e; )
    e = sn(e.nextSibling);
}
function ti() {
  Pt = Tt = null, Ce = !1;
}
function Mh(e) {
  Zt === null ? Zt = [e] : Zt.push(e);
}
var o2 = Vr.ReactCurrentBatchConfig;
function qt(e, t) {
  if (e && e.defaultProps) {
    t = $e({}, t), e = e.defaultProps;
    for (var r in e)
      t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Dl = bn(null), Ll = null, _o = null, zh = null;
function Ih() {
  zh = _o = Ll = null;
}
function Fh(e) {
  var t = Dl.current;
  Se(Dl), e._currentValue = t;
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
  Ll = e, zh = _o = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (vt = !0), e.firstContext = null);
}
function Gt(e) {
  var t = e._currentValue;
  if (zh !== e)
    if (e = { context: e, memoizedValue: t, next: null }, _o === null) {
      if (Ll === null)
        throw Error(M(308));
      _o = e, Ll.dependencies = { lanes: 0, firstContext: e };
    } else
      _o = _o.next = e;
  return t;
}
var Dn = null;
function Dh(e) {
  Dn === null ? Dn = [e] : Dn.push(e);
}
function P1(e, t, r, n) {
  var o = t.interleaved;
  return o === null ? (r.next = r, Dh(t)) : (r.next = o.next, o.next = r), t.interleaved = r, Or(e, n);
}
function Or(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var Xr = !1;
function Lh(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function T1(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Mr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ln(e, t, r) {
  var n = e.updateQueue;
  if (n === null)
    return null;
  if (n = n.shared, te & 2) {
    var o = n.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, Or(e, r);
  }
  return o = n.interleaved, o === null ? (t.next = t, Dh(n)) : (t.next = o.next, o.next = t), n.interleaved = t, Or(e, r);
}
function Js(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, wh(e, r);
  }
}
function fv(e, t) {
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
function Ol(e, t, r, n) {
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
              d = $e({}, d, f);
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
function hv(e, t, r) {
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
var E1 = new Py.Component().refs;
function lf(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : $e({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Su = { isMounted: function(e) {
  return (e = e._reactInternals) ? ro(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = ut(), o = cn(e), i = Mr(n, o);
  i.payload = t, r != null && (i.callback = r), t = ln(e, i, o), t !== null && (tr(t, e, o, n), Js(t, e, o));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = ut(), o = cn(e), i = Mr(n, o);
  i.tag = 1, i.payload = t, r != null && (i.callback = r), t = ln(e, i, o), t !== null && (tr(t, e, o, n), Js(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = ut(), n = cn(e), o = Mr(r, n);
  o.tag = 2, t != null && (o.callback = t), t = ln(e, o, n), t !== null && (tr(t, e, n, r), Js(t, e, n));
} };
function pv(e, t, r, n, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !ya(r, n) || !ya(o, i) : !0;
}
function $1(e, t, r) {
  var n = !1, o = mn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Gt(i) : (o = yt(t) ? Yn : ot.current, n = t.contextTypes, i = (n = n != null) ? ei(e, o) : mn), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Su, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function mv(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && Su.enqueueReplaceState(t, t.state, null);
}
function uf(e, t, r, n) {
  var o = e.stateNode;
  o.props = r, o.state = e.memoizedState, o.refs = E1, Lh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Gt(i) : (i = yt(t) ? Yn : ot.current, o.context = ei(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (lf(e, t, i, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Su.enqueueReplaceState(o, o.state, null), Ol(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function _i(e, t, r) {
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
        s === E1 && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(M(284));
    if (!r._owner)
      throw Error(M(290, e));
  }
  return e;
}
function Ps(e, t) {
  throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function vv(e) {
  var t = e._init;
  return t(e._payload);
}
function A1(e) {
  function t(v, h) {
    if (e) {
      var m = v.deletions;
      m === null ? (v.deletions = [h], v.flags |= 16) : m.push(h);
    }
  }
  function r(v, h) {
    if (!e)
      return null;
    for (; h !== null; )
      t(v, h), h = h.sibling;
    return null;
  }
  function n(v, h) {
    for (v = /* @__PURE__ */ new Map(); h !== null; )
      h.key !== null ? v.set(h.key, h) : v.set(h.index, h), h = h.sibling;
    return v;
  }
  function o(v, h) {
    return v = dn(v, h), v.index = 0, v.sibling = null, v;
  }
  function i(v, h, m) {
    return v.index = m, e ? (m = v.alternate, m !== null ? (m = m.index, m < h ? (v.flags |= 2, h) : m) : (v.flags |= 2, h)) : (v.flags |= 1048576, h);
  }
  function a(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function s(v, h, m, w) {
    return h === null || h.tag !== 6 ? (h = jc(m, v.mode, w), h.return = v, h) : (h = o(h, m), h.return = v, h);
  }
  function l(v, h, m, w) {
    var _ = m.type;
    return _ === go ? c(v, h, m.props.children, w, m.key) : h !== null && (h.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Yr && vv(_) === h.type) ? (w = o(h, m.props), w.ref = _i(v, h, m), w.return = v, w) : (w = il(m.type, m.key, m.props, null, v.mode, w), w.ref = _i(v, h, m), w.return = v, w);
  }
  function u(v, h, m, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = Vc(m, v.mode, w), h.return = v, h) : (h = o(h, m.children || []), h.return = v, h);
  }
  function c(v, h, m, w, _) {
    return h === null || h.tag !== 7 ? (h = jn(m, v.mode, w, _), h.return = v, h) : (h = o(h, m), h.return = v, h);
  }
  function d(v, h, m) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = jc("" + h, v.mode, m), h.return = v, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ms:
          return m = il(h.type, h.key, h.props, null, v.mode, m), m.ref = _i(v, null, h), m.return = v, m;
        case vo:
          return h = Vc(h, v.mode, m), h.return = v, h;
        case Yr:
          var w = h._init;
          return d(v, w(h._payload), m);
      }
      if (Di(h) || Si(h))
        return h = jn(h, v.mode, m, null), h.return = v, h;
      Ps(v, h);
    }
    return null;
  }
  function f(v, h, m, w) {
    var _ = h !== null ? h.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return _ !== null ? null : s(v, h, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ms:
          return m.key === _ ? l(v, h, m, w) : null;
        case vo:
          return m.key === _ ? u(v, h, m, w) : null;
        case Yr:
          return _ = m._init, f(
            v,
            h,
            _(m._payload),
            w
          );
      }
      if (Di(m) || Si(m))
        return _ !== null ? null : c(v, h, m, w, null);
      Ps(v, m);
    }
    return null;
  }
  function p(v, h, m, w, _) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return v = v.get(m) || null, s(h, v, "" + w, _);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ms:
          return v = v.get(w.key === null ? m : w.key) || null, l(h, v, w, _);
        case vo:
          return v = v.get(w.key === null ? m : w.key) || null, u(h, v, w, _);
        case Yr:
          var A = w._init;
          return p(v, h, m, A(w._payload), _);
      }
      if (Di(w) || Si(w))
        return v = v.get(m) || null, c(h, v, w, _, null);
      Ps(h, w);
    }
    return null;
  }
  function g(v, h, m, w) {
    for (var _ = null, A = null, P = h, $ = h = 0, R = null; P !== null && $ < m.length; $++) {
      P.index > $ ? (R = P, P = null) : R = P.sibling;
      var I = f(v, P, m[$], w);
      if (I === null) {
        P === null && (P = R);
        break;
      }
      e && P && I.alternate === null && t(v, P), h = i(I, h, $), A === null ? _ = I : A.sibling = I, A = I, P = R;
    }
    if ($ === m.length)
      return r(v, P), Ce && En(v, $), _;
    if (P === null) {
      for (; $ < m.length; $++)
        P = d(v, m[$], w), P !== null && (h = i(P, h, $), A === null ? _ = P : A.sibling = P, A = P);
      return Ce && En(v, $), _;
    }
    for (P = n(v, P); $ < m.length; $++)
      R = p(P, v, $, m[$], w), R !== null && (e && R.alternate !== null && P.delete(R.key === null ? $ : R.key), h = i(R, h, $), A === null ? _ = R : A.sibling = R, A = R);
    return e && P.forEach(function(U) {
      return t(v, U);
    }), Ce && En(v, $), _;
  }
  function y(v, h, m, w) {
    var _ = Si(m);
    if (typeof _ != "function")
      throw Error(M(150));
    if (m = _.call(m), m == null)
      throw Error(M(151));
    for (var A = _ = null, P = h, $ = h = 0, R = null, I = m.next(); P !== null && !I.done; $++, I = m.next()) {
      P.index > $ ? (R = P, P = null) : R = P.sibling;
      var U = f(v, P, I.value, w);
      if (U === null) {
        P === null && (P = R);
        break;
      }
      e && P && U.alternate === null && t(v, P), h = i(U, h, $), A === null ? _ = U : A.sibling = U, A = U, P = R;
    }
    if (I.done)
      return r(
        v,
        P
      ), Ce && En(v, $), _;
    if (P === null) {
      for (; !I.done; $++, I = m.next())
        I = d(v, I.value, w), I !== null && (h = i(I, h, $), A === null ? _ = I : A.sibling = I, A = I);
      return Ce && En(v, $), _;
    }
    for (P = n(v, P); !I.done; $++, I = m.next())
      I = p(P, v, $, I.value, w), I !== null && (e && I.alternate !== null && P.delete(I.key === null ? $ : I.key), h = i(I, h, $), A === null ? _ = I : A.sibling = I, A = I);
    return e && P.forEach(function(ue) {
      return t(v, ue);
    }), Ce && En(v, $), _;
  }
  function x(v, h, m, w) {
    if (typeof m == "object" && m !== null && m.type === go && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ms:
          e: {
            for (var _ = m.key, A = h; A !== null; ) {
              if (A.key === _) {
                if (_ = m.type, _ === go) {
                  if (A.tag === 7) {
                    r(v, A.sibling), h = o(A, m.props.children), h.return = v, v = h;
                    break e;
                  }
                } else if (A.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Yr && vv(_) === A.type) {
                  r(v, A.sibling), h = o(A, m.props), h.ref = _i(v, A, m), h.return = v, v = h;
                  break e;
                }
                r(v, A);
                break;
              } else
                t(v, A);
              A = A.sibling;
            }
            m.type === go ? (h = jn(m.props.children, v.mode, w, m.key), h.return = v, v = h) : (w = il(m.type, m.key, m.props, null, v.mode, w), w.ref = _i(v, h, m), w.return = v, v = w);
          }
          return a(v);
        case vo:
          e: {
            for (A = m.key; h !== null; ) {
              if (h.key === A)
                if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                  r(v, h.sibling), h = o(h, m.children || []), h.return = v, v = h;
                  break e;
                } else {
                  r(v, h);
                  break;
                }
              else
                t(v, h);
              h = h.sibling;
            }
            h = Vc(m, v.mode, w), h.return = v, v = h;
          }
          return a(v);
        case Yr:
          return A = m._init, x(v, h, A(m._payload), w);
      }
      if (Di(m))
        return g(v, h, m, w);
      if (Si(m))
        return y(v, h, m, w);
      Ps(v, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (r(v, h.sibling), h = o(h, m), h.return = v, v = h) : (r(v, h), h = jc(m, v.mode, w), h.return = v, v = h), a(v)) : r(v, h);
  }
  return x;
}
var ri = A1(!0), R1 = A1(!1), Ka = {}, mr = bn(Ka), wa = bn(Ka), ka = bn(Ka);
function Ln(e) {
  if (e === Ka)
    throw Error(M(174));
  return e;
}
function Oh(e, t) {
  switch (pe(ka, t), pe(wa, e), pe(mr, Ka), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Bd(t, e);
  }
  Se(mr), pe(mr, t);
}
function ni() {
  Se(mr), Se(wa), Se(ka);
}
function M1(e) {
  Ln(ka.current);
  var t = Ln(mr.current), r = Bd(t, e.type);
  t !== r && (pe(wa, e), pe(mr, r));
}
function Nh(e) {
  wa.current === e && (Se(mr), Se(wa));
}
var Pe = bn(0);
function Nl(e) {
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
var Fc = [];
function Bh() {
  for (var e = 0; e < Fc.length; e++)
    Fc[e]._workInProgressVersionPrimary = null;
  Fc.length = 0;
}
var el = Vr.ReactCurrentDispatcher, Dc = Vr.ReactCurrentBatchConfig, qn = 0, Ee = null, je = null, He = null, Bl = !1, qi = !1, Ca = 0, i2 = 0;
function et() {
  throw Error(M(321));
}
function jh(e, t) {
  if (t === null)
    return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!nr(e[r], t[r]))
      return !1;
  return !0;
}
function Vh(e, t, r, n, o, i) {
  if (qn = i, Ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, el.current = e === null || e.memoizedState === null ? u2 : c2, e = r(n, o), qi) {
    i = 0;
    do {
      if (qi = !1, Ca = 0, 25 <= i)
        throw Error(M(301));
      i += 1, He = je = null, t.updateQueue = null, el.current = d2, e = r(n, o);
    } while (qi);
  }
  if (el.current = jl, t = je !== null && je.next !== null, qn = 0, He = je = Ee = null, Bl = !1, t)
    throw Error(M(300));
  return e;
}
function Wh() {
  var e = Ca !== 0;
  return Ca = 0, e;
}
function ar() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return He === null ? Ee.memoizedState = He = e : He = He.next = e, He;
}
function Kt() {
  if (je === null) {
    var e = Ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = je.next;
  var t = He === null ? Ee.memoizedState : He.next;
  if (t !== null)
    He = t, je = e;
  else {
    if (e === null)
      throw Error(M(310));
    je = e, e = { memoizedState: je.memoizedState, baseState: je.baseState, baseQueue: je.baseQueue, queue: je.queue, next: null }, He === null ? Ee.memoizedState = He = e : He = He.next = e;
  }
  return He;
}
function _a(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Lc(e) {
  var t = Kt(), r = t.queue;
  if (r === null)
    throw Error(M(311));
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
        l === null ? (s = l = d, a = n) : l = l.next = d, Ee.lanes |= c, Qn |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = n : l.next = s, nr(n, t.memoizedState) || (vt = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ee.lanes |= i, Qn |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Oc(e) {
  var t = Kt(), r = t.queue;
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
    nr(i, t.memoizedState) || (vt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i;
  }
  return [i, n];
}
function z1() {
}
function I1(e, t) {
  var r = Ee, n = Kt(), o = t(), i = !nr(n.memoizedState, o);
  if (i && (n.memoizedState = o, vt = !0), n = n.queue, Uh(L1.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || He !== null && He.memoizedState.tag & 1) {
    if (r.flags |= 2048, Pa(9, D1.bind(null, r, n, o, t), void 0, null), Ge === null)
      throw Error(M(349));
    qn & 30 || F1(r, t, o);
  }
  return o;
}
function F1(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ee.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function D1(e, t, r, n) {
  t.value = r, t.getSnapshot = n, O1(t) && N1(e);
}
function L1(e, t, r) {
  return r(function() {
    O1(t) && N1(e);
  });
}
function O1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !nr(e, r);
  } catch {
    return !0;
  }
}
function N1(e) {
  var t = Or(e, 1);
  t !== null && tr(t, e, 1, -1);
}
function gv(e) {
  var t = ar();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _a, lastRenderedState: e }, t.queue = e, e = e.dispatch = l2.bind(null, Ee, e), [t.memoizedState, e];
}
function Pa(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = Ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ee.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function B1() {
  return Kt().memoizedState;
}
function tl(e, t, r, n) {
  var o = ar();
  Ee.flags |= e, o.memoizedState = Pa(1 | t, r, void 0, n === void 0 ? null : n);
}
function xu(e, t, r, n) {
  var o = Kt();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (je !== null) {
    var a = je.memoizedState;
    if (i = a.destroy, n !== null && jh(n, a.deps)) {
      o.memoizedState = Pa(t, r, i, n);
      return;
    }
  }
  Ee.flags |= e, o.memoizedState = Pa(1 | t, r, i, n);
}
function yv(e, t) {
  return tl(8390656, 8, e, t);
}
function Uh(e, t) {
  return xu(2048, 8, e, t);
}
function j1(e, t) {
  return xu(4, 2, e, t);
}
function V1(e, t) {
  return xu(4, 4, e, t);
}
function W1(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function U1(e, t, r) {
  return r = r != null ? r.concat([e]) : null, xu(4, 4, W1.bind(null, t, e), r);
}
function Hh() {
}
function H1(e, t) {
  var r = Kt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && jh(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function G1(e, t) {
  var r = Kt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && jh(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function K1(e, t, r) {
  return qn & 21 ? (nr(r, t) || (r = qy(), Ee.lanes |= r, Qn |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, vt = !0), e.memoizedState = r);
}
function a2(e, t) {
  var r = ce;
  ce = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = Dc.transition;
  Dc.transition = {};
  try {
    e(!1), t();
  } finally {
    ce = r, Dc.transition = n;
  }
}
function Y1() {
  return Kt().memoizedState;
}
function s2(e, t, r) {
  var n = cn(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, X1(e))
    q1(t, r);
  else if (r = P1(e, t, r, n), r !== null) {
    var o = ut();
    tr(r, e, n, o), Q1(r, t, n);
  }
}
function l2(e, t, r) {
  var n = cn(e), o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (X1(e))
    q1(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, r);
        if (o.hasEagerState = !0, o.eagerState = s, nr(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Dh(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    r = P1(e, t, o, n), r !== null && (o = ut(), tr(r, e, n, o), Q1(r, t, n));
  }
}
function X1(e) {
  var t = e.alternate;
  return e === Ee || t !== null && t === Ee;
}
function q1(e, t) {
  qi = Bl = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function Q1(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, wh(e, r);
  }
}
var jl = { readContext: Gt, useCallback: et, useContext: et, useEffect: et, useImperativeHandle: et, useInsertionEffect: et, useLayoutEffect: et, useMemo: et, useReducer: et, useRef: et, useState: et, useDebugValue: et, useDeferredValue: et, useTransition: et, useMutableSource: et, useSyncExternalStore: et, useId: et, unstable_isNewReconciler: !1 }, u2 = { readContext: Gt, useCallback: function(e, t) {
  return ar().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Gt, useEffect: yv, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, tl(
    4194308,
    4,
    W1.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return tl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return tl(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = ar();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = ar();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = s2.bind(null, Ee, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = ar();
  return e = { current: e }, t.memoizedState = e;
}, useState: gv, useDebugValue: Hh, useDeferredValue: function(e) {
  return ar().memoizedState = e;
}, useTransition: function() {
  var e = gv(!1), t = e[0];
  return e = a2.bind(null, e[1]), ar().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = Ee, o = ar();
  if (Ce) {
    if (r === void 0)
      throw Error(M(407));
    r = r();
  } else {
    if (r = t(), Ge === null)
      throw Error(M(349));
    qn & 30 || F1(n, t, r);
  }
  o.memoizedState = r;
  var i = { value: r, getSnapshot: t };
  return o.queue = i, yv(L1.bind(
    null,
    n,
    i,
    e
  ), [e]), n.flags |= 2048, Pa(9, D1.bind(null, n, i, r, t), void 0, null), r;
}, useId: function() {
  var e = ar(), t = Ge.identifierPrefix;
  if (Ce) {
    var r = $r, n = Er;
    r = (n & ~(1 << 32 - er(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Ca++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else
    r = i2++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, c2 = {
  readContext: Gt,
  useCallback: H1,
  useContext: Gt,
  useEffect: Uh,
  useImperativeHandle: U1,
  useInsertionEffect: j1,
  useLayoutEffect: V1,
  useMemo: G1,
  useReducer: Lc,
  useRef: B1,
  useState: function() {
    return Lc(_a);
  },
  useDebugValue: Hh,
  useDeferredValue: function(e) {
    var t = Kt();
    return K1(t, je.memoizedState, e);
  },
  useTransition: function() {
    var e = Lc(_a)[0], t = Kt().memoizedState;
    return [e, t];
  },
  useMutableSource: z1,
  useSyncExternalStore: I1,
  useId: Y1,
  unstable_isNewReconciler: !1
}, d2 = { readContext: Gt, useCallback: H1, useContext: Gt, useEffect: Uh, useImperativeHandle: U1, useInsertionEffect: j1, useLayoutEffect: V1, useMemo: G1, useReducer: Oc, useRef: B1, useState: function() {
  return Oc(_a);
}, useDebugValue: Hh, useDeferredValue: function(e) {
  var t = Kt();
  return je === null ? t.memoizedState = e : K1(t, je.memoizedState, e);
}, useTransition: function() {
  var e = Oc(_a)[0], t = Kt().memoizedState;
  return [e, t];
}, useMutableSource: z1, useSyncExternalStore: I1, useId: Y1, unstable_isNewReconciler: !1 };
function oi(e, t) {
  try {
    var r = "", n = t;
    do
      r += NC(n), n = n.return;
    while (n);
    var o = r;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Nc(e, t, r) {
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
var f2 = typeof WeakMap == "function" ? WeakMap : Map;
function Z1(e, t, r) {
  r = Mr(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    Wl || (Wl = !0, Sf = n), cf(e, t);
  }, r;
}
function J1(e, t, r) {
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
function bv(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new f2();
    var o = /* @__PURE__ */ new Set();
    n.set(t, o);
  } else
    o = n.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), n.set(t, o));
  o.has(r) || (o.add(r), e = P2.bind(null, e, t, r), t.then(e, e));
}
function Sv(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xv(e, t, r, n, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Mr(-1, 1), t.tag = 2, ln(r, t, 1))), r.lanes |= 1), e);
}
var h2 = Vr.ReactCurrentOwner, vt = !1;
function st(e, t, r, n) {
  t.child = e === null ? R1(t, null, r, n) : ri(t, e.child, r, n);
}
function wv(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return Wo(t, o), n = Vh(e, t, r, n, i, o), r = Wh(), e !== null && !vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Nr(e, t, o)) : (Ce && r && Ah(t), t.flags |= 1, st(e, t, n, o), t.child);
}
function kv(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" && !Jh(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, eb(e, t, i, n, o)) : (e = il(r.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (r = r.compare, r = r !== null ? r : ya, r(a, n) && e.ref === t.ref)
      return Nr(e, t, o);
  }
  return t.flags |= 1, e = dn(i, n), e.ref = t.ref, e.return = t, t.child = e;
}
function eb(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ya(i, n) && e.ref === t.ref)
      if (vt = !1, t.pendingProps = n = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (vt = !0);
      else
        return t.lanes = e.lanes, Nr(e, t, o);
  }
  return df(e, t, r, n, o);
}
function tb(e, t, r) {
  var n = t.pendingProps, o = n.children, i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, pe(To, _t), _t |= r;
    else {
      if (!(r & 1073741824))
        return e = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, pe(To, _t), _t |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = i !== null ? i.baseLanes : r, pe(To, _t), _t |= n;
    }
  else
    i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, pe(To, _t), _t |= n;
  return st(e, t, o, r), t.child;
}
function rb(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function df(e, t, r, n, o) {
  var i = yt(r) ? Yn : ot.current;
  return i = ei(t, i), Wo(t, o), r = Vh(e, t, r, n, i, o), n = Wh(), e !== null && !vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Nr(e, t, o)) : (Ce && n && Ah(t), t.flags |= 1, st(e, t, r, o), t.child);
}
function Cv(e, t, r, n, o) {
  if (yt(r)) {
    var i = !0;
    zl(t);
  } else
    i = !1;
  if (Wo(t, o), t.stateNode === null)
    rl(e, t), $1(t, r, n), uf(t, r, n, o), n = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = Gt(u) : (u = yt(r) ? Yn : ot.current, u = ei(t, u));
    var c = r.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || l !== u) && mv(t, a, n, u), Xr = !1;
    var f = t.memoizedState;
    a.state = f, Ol(t, n, a, o), l = t.memoizedState, s !== n || f !== l || gt.current || Xr ? (typeof c == "function" && (lf(t, r, c, n), l = t.memoizedState), (s = Xr || pv(t, r, s, n, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = u, n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    a = t.stateNode, T1(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : qt(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = Gt(l) : (l = yt(r) ? Yn : ot.current, l = ei(t, l));
    var p = r.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && mv(t, a, n, l), Xr = !1, f = t.memoizedState, a.state = f, Ol(t, n, a, o);
    var g = t.memoizedState;
    s !== d || f !== g || gt.current || Xr ? (typeof p == "function" && (lf(t, r, p, n), g = t.memoizedState), (u = Xr || pv(t, r, u, n, f, g, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, g, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, g, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = g), a.props = n, a.state = g, a.context = l, n = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return ff(e, t, r, n, i, o);
}
function ff(e, t, r, n, o, i) {
  rb(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a)
    return o && uv(t, r, !1), Nr(e, t, i);
  n = t.stateNode, h2.current = t;
  var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && a ? (t.child = ri(t, e.child, null, i), t.child = ri(t, null, s, i)) : st(e, t, s, i), t.memoizedState = n.state, o && uv(t, r, !0), t.child;
}
function nb(e) {
  var t = e.stateNode;
  t.pendingContext ? lv(e, t.pendingContext, t.pendingContext !== t.context) : t.context && lv(e, t.context, !1), Oh(e, t.containerInfo);
}
function _v(e, t, r, n, o) {
  return ti(), Mh(o), t.flags |= 256, st(e, t, r, n), t.child;
}
var hf = { dehydrated: null, treeContext: null, retryLane: 0 };
function pf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ob(e, t, r) {
  var n = t.pendingProps, o = Pe.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), pe(Pe, o & 1), e === null)
    return af(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Cu(a, n, 0, null), e = jn(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = pf(r), t.memoizedState = hf, e) : Gh(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return p2(e, t, a, n, s, o, r);
  if (i) {
    i = n.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(a & 1) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = dn(o, l), n.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = dn(s, i) : (i = jn(i, a, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, a = e.child.memoizedState, a = a === null ? pf(r) : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~r, t.memoizedState = hf, n;
  }
  return i = e.child, e = i.sibling, n = dn(i, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function Gh(e, t) {
  return t = Cu({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ts(e, t, r, n) {
  return n !== null && Mh(n), ri(t, e.child, null, r), e = Gh(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function p2(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = Nc(Error(M(422))), Ts(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, o = t.mode, n = Cu({ mode: "visible", children: n.children }, o, 0, null), i = jn(i, o, a, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, t.mode & 1 && ri(t, e.child, null, a), t.child.memoizedState = pf(a), t.memoizedState = hf, i);
  if (!(t.mode & 1))
    return Ts(e, t, a, null);
  if (o.data === "$!") {
    if (n = o.nextSibling && o.nextSibling.dataset, n)
      var s = n.dgst;
    return n = s, i = Error(M(419)), n = Nc(i, n, void 0), Ts(e, t, a, n);
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
      o = o & (n.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Or(e, o), tr(n, e, o, -1));
    }
    return Zh(), n = Nc(Error(M(421))), Ts(e, t, a, n);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = T2.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Pt = sn(o.nextSibling), Tt = t, Ce = !0, Zt = null, e !== null && (Vt[Wt++] = Er, Vt[Wt++] = $r, Vt[Wt++] = Xn, Er = e.id, $r = e.overflow, Xn = t), t = Gh(t, n.children), t.flags |= 4096, t);
}
function Pv(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), sf(e.return, t, r);
}
function Bc(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = o);
}
function ib(e, t, r) {
  var n = t.pendingProps, o = n.revealOrder, i = n.tail;
  if (st(e, t, n.children, r), n = Pe.current, n & 2)
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
  if (pe(Pe, n), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          e = r.alternate, e !== null && Nl(e) === null && (o = r), r = r.sibling;
        r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), Bc(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Nl(e) === null) {
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
function rl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Nr(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), Qn |= t.lanes, !(r & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(M(153));
  if (t.child !== null) {
    for (e = t.child, r = dn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      e = e.sibling, r = r.sibling = dn(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function m2(e, t, r) {
  switch (t.tag) {
    case 3:
      nb(t), ti();
      break;
    case 5:
      M1(t);
      break;
    case 1:
      yt(t.type) && zl(t);
      break;
    case 4:
      Oh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, o = t.memoizedProps.value;
      pe(Dl, n._currentValue), n._currentValue = o;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (pe(Pe, Pe.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? ob(e, t, r) : (pe(Pe, Pe.current & 1), e = Nr(e, t, r), e !== null ? e.sibling : null);
      pe(Pe, Pe.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n)
          return ib(e, t, r);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), pe(Pe, Pe.current), n)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, tb(e, t, r);
  }
  return Nr(e, t, r);
}
var ab, mf, sb, lb;
ab = function(e, t) {
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
sb = function(e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    e = t.stateNode, Ln(mr.current);
    var i = null;
    switch (r) {
      case "input":
        o = Dd(e, o), n = Dd(e, n), i = [];
        break;
      case "select":
        o = $e({}, o, { value: void 0 }), n = $e({}, n, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Nd(e, o), n = Nd(e, n), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Rl);
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
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (da.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (da.hasOwnProperty(u) ? (l != null && u === "onScroll" && ye("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
lb = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Pi(e, t) {
  if (!Ce)
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
function v2(e, t, r) {
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
      return tt(t), null;
    case 1:
      return yt(t.type) && Ml(), tt(t), null;
    case 3:
      return n = t.stateNode, ni(), Se(gt), Se(ot), Bh(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (_s(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Zt !== null && (kf(Zt), Zt = null))), mf(e, t), tt(t), null;
    case 5:
      Nh(t);
      var o = Ln(ka.current);
      if (r = t.type, e !== null && t.stateNode != null)
        sb(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null)
            throw Error(M(166));
          return tt(t), null;
        }
        if (e = Ln(mr.current), _s(t)) {
          n = t.stateNode, r = t.type;
          var i = t.memoizedProps;
          switch (n[dr] = t, n[xa] = i, e = (t.mode & 1) !== 0, r) {
            case "dialog":
              ye("cancel", n), ye("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              ye("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Oi.length; o++)
                ye(Oi[o], n);
              break;
            case "source":
              ye("error", n);
              break;
            case "img":
            case "image":
            case "link":
              ye(
                "error",
                n
              ), ye("load", n);
              break;
            case "details":
              ye("toggle", n);
              break;
            case "input":
              Fm(n, i), ye("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!i.multiple }, ye("invalid", n);
              break;
            case "textarea":
              Lm(n, i), ye("invalid", n);
          }
          jd(r, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && Cs(n.textContent, s, e), o = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Cs(
                n.textContent,
                s,
                e
              ), o = ["children", "" + s]) : da.hasOwnProperty(a) && s != null && a === "onScroll" && ye("scroll", n);
            }
          switch (r) {
            case "input":
              vs(n), Dm(n, i, !0);
              break;
            case "textarea":
              vs(n), Om(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = Rl);
          }
          n = o, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Fy(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, { is: n.is }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[dr] = t, e[xa] = n, ab(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Vd(r, n), r) {
              case "dialog":
                ye("cancel", e), ye("close", e), o = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", e), o = n;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Oi.length; o++)
                  ye(Oi[o], e);
                o = n;
                break;
              case "source":
                ye("error", e), o = n;
                break;
              case "img":
              case "image":
              case "link":
                ye(
                  "error",
                  e
                ), ye("load", e), o = n;
                break;
              case "details":
                ye("toggle", e), o = n;
                break;
              case "input":
                Fm(e, n), o = Dd(e, n), ye("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, o = $e({}, n, { value: void 0 }), ye("invalid", e);
                break;
              case "textarea":
                Lm(e, n), o = Nd(e, n), ye("invalid", e);
                break;
              default:
                o = n;
            }
            jd(r, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? Oy(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Dy(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && fa(e, l) : typeof l == "number" && fa(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (da.hasOwnProperty(i) ? l != null && i === "onScroll" && ye("scroll", e) : l != null && vh(e, i, l, a));
              }
            switch (r) {
              case "input":
                vs(e), Dm(e, n, !1);
                break;
              case "textarea":
                vs(e), Om(e);
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
                typeof o.onClick == "function" && (e.onclick = Rl);
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
        lb(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null)
          throw Error(M(166));
        if (r = Ln(ka.current), Ln(mr.current), _s(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[dr] = t, (i = n.nodeValue !== r) && (e = Tt, e !== null))
            switch (e.tag) {
              case 3:
                Cs(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Cs(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[dr] = t, t.stateNode = n;
      }
      return tt(t), null;
    case 13:
      if (Se(Pe), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Ce && Pt !== null && t.mode & 1 && !(t.flags & 128))
          _1(), ti(), t.flags |= 98560, i = !1;
        else if (i = _s(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(M(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(M(317));
            i[dr] = t;
          } else
            ti(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          tt(t), i = !1;
        } else
          Zt !== null && (kf(Zt), Zt = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || Pe.current & 1 ? Ve === 0 && (Ve = 3) : Zh())), t.updateQueue !== null && (t.flags |= 4), tt(t), null);
    case 4:
      return ni(), mf(e, t), e === null && ba(t.stateNode.containerInfo), tt(t), null;
    case 10:
      return Fh(t.type._context), tt(t), null;
    case 17:
      return yt(t.type) && Ml(), tt(t), null;
    case 19:
      if (Se(Pe), i = t.memoizedState, i === null)
        return tt(t), null;
      if (n = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (n)
          Pi(i, !1);
        else {
          if (Ve !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = Nl(e), a !== null) {
                for (t.flags |= 128, Pi(i, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; )
                  i = r, e = n, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
                return pe(Pe, Pe.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && De() > ii && (t.flags |= 128, n = !0, Pi(i, !1), t.lanes = 4194304);
        }
      else {
        if (!n)
          if (e = Nl(a), e !== null) {
            if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Pi(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !Ce)
              return tt(t), null;
          } else
            2 * De() - i.renderingStartTime > ii && r !== 1073741824 && (t.flags |= 128, n = !0, Pi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (r = i.last, r !== null ? r.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = De(), t.sibling = null, r = Pe.current, pe(Pe, n ? r & 1 | 2 : r & 1), t) : (tt(t), null);
    case 22:
    case 23:
      return Qh(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? _t & 1073741824 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function g2(e, t) {
  switch (Rh(t), t.tag) {
    case 1:
      return yt(t.type) && Ml(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ni(), Se(gt), Se(ot), Bh(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Nh(t), null;
    case 13:
      if (Se(Pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(M(340));
        ti();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Se(Pe), null;
    case 4:
      return ni(), null;
    case 10:
      return Fh(t.type._context), null;
    case 22:
    case 23:
      return Qh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Es = !1, nt = !1, y2 = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function Po(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Me(e, t, n);
      }
    else
      r.current = null;
}
function vf(e, t, r) {
  try {
    r();
  } catch (n) {
    Me(e, t, n);
  }
}
var Tv = !1;
function b2(e, t) {
  if (Zd = El, e = f1(), $h(e)) {
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
  for (Jd = { focusedElem: e, selectionRange: r }, El = !1, L = t; L !== null; )
    if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, L = e;
    else
      for (; L !== null; ) {
        t = L;
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
                  var y = g.memoizedProps, x = g.memoizedState, v = t.stateNode, h = v.getSnapshotBeforeUpdate(t.elementType === t.type ? y : qt(t.type, y), x);
                  v.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
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
          Me(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, L = e;
          break;
        }
        L = t.return;
      }
  return g = Tv, Tv = !1, g;
}
function Qi(e, t, r) {
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
function wu(e, t) {
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
function ub(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ub(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[dr], delete t[xa], delete t[rf], delete t[t2], delete t[r2])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function cb(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ev(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || cb(e.return))
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
    e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Rl));
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
var Xe = null, Qt = !1;
function Wr(e, t, r) {
  for (r = r.child; r !== null; )
    db(e, t, r), r = r.sibling;
}
function db(e, t, r) {
  if (pr && typeof pr.onCommitFiberUnmount == "function")
    try {
      pr.onCommitFiberUnmount(pu, r);
    } catch {
    }
  switch (r.tag) {
    case 5:
      nt || Po(r, t);
    case 6:
      var n = Xe, o = Qt;
      Xe = null, Wr(e, t, r), Xe = n, Qt = o, Xe !== null && (Qt ? (e = Xe, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Xe.removeChild(r.stateNode));
      break;
    case 18:
      Xe !== null && (Qt ? (e = Xe, r = r.stateNode, e.nodeType === 8 ? zc(e.parentNode, r) : e.nodeType === 1 && zc(e, r), va(e)) : zc(Xe, r.stateNode));
      break;
    case 4:
      n = Xe, o = Qt, Xe = r.stateNode.containerInfo, Qt = !0, Wr(e, t, r), Xe = n, Qt = o;
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
      if (!nt && (Po(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function"))
        try {
          n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
        } catch (s) {
          Me(r, t, s);
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
function $v(e) {
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
function Yt(e, t) {
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
                Xe = s.stateNode, Qt = !1;
                break e;
              case 3:
                Xe = s.stateNode.containerInfo, Qt = !0;
                break e;
              case 4:
                Xe = s.stateNode.containerInfo, Qt = !0;
                break e;
            }
            s = s.return;
          }
        if (Xe === null)
          throw Error(M(160));
        db(i, a, o), Xe = null, Qt = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        Me(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      fb(t, e), t = t.sibling;
}
function fb(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Yt(t, e), or(e), n & 4) {
        try {
          Qi(3, e, e.return), wu(3, e);
        } catch (y) {
          Me(e, e.return, y);
        }
        try {
          Qi(5, e, e.return);
        } catch (y) {
          Me(e, e.return, y);
        }
      }
      break;
    case 1:
      Yt(t, e), or(e), n & 512 && r !== null && Po(r, r.return);
      break;
    case 5:
      if (Yt(t, e), or(e), n & 512 && r !== null && Po(r, r.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          fa(o, "");
        } catch (y) {
          Me(e, e.return, y);
        }
      }
      if (n & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = r !== null ? r.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && zy(o, i), Vd(s, a);
            var u = Vd(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? Oy(o, d) : c === "dangerouslySetInnerHTML" ? Dy(o, d) : c === "children" ? fa(o, d) : vh(o, c, d, u);
            }
            switch (s) {
              case "input":
                Ld(o, i);
                break;
              case "textarea":
                Iy(o, i);
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
            o[xa] = i;
          } catch (y) {
            Me(e, e.return, y);
          }
      }
      break;
    case 6:
      if (Yt(t, e), or(e), n & 4) {
        if (e.stateNode === null)
          throw Error(M(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (y) {
          Me(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Yt(t, e), or(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
        try {
          va(t.containerInfo);
        } catch (y) {
          Me(e, e.return, y);
        }
      break;
    case 4:
      Yt(t, e), or(e);
      break;
    case 13:
      Yt(t, e), or(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Xh = De())), n & 4 && $v(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (nt = (u = nt) || c, Yt(t, e), nt = u) : Yt(t, e), or(e), n & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (L = e, c = e.child; c !== null; ) {
            for (d = L = c; L !== null; ) {
              switch (f = L, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qi(4, f, f.return);
                  break;
                case 1:
                  Po(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    n = f, r = f.return;
                    try {
                      t = n, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (y) {
                      Me(n, r, y);
                    }
                  }
                  break;
                case 5:
                  Po(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Rv(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, L = p) : Rv(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = Ly("display", a));
                } catch (y) {
                  Me(e, e.return, y);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (y) {
                  Me(e, e.return, y);
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
      Yt(t, e), or(e), n & 4 && $v(e);
      break;
    case 21:
      break;
    default:
      Yt(
        t,
        e
      ), or(e);
  }
}
function or(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (cb(r)) {
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
          n.flags & 32 && (fa(o, ""), n.flags &= -33);
          var i = Ev(e);
          bf(e, i, o);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo, s = Ev(e);
          yf(e, s, a);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      Me(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function S2(e, t, r) {
  L = e, hb(e);
}
function hb(e, t, r) {
  for (var n = (e.mode & 1) !== 0; L !== null; ) {
    var o = L, i = o.child;
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || Es;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || nt;
        s = Es;
        var u = nt;
        if (Es = a, (nt = l) && !u)
          for (L = o; L !== null; )
            a = L, l = a.child, a.tag === 22 && a.memoizedState !== null ? Mv(o) : l !== null ? (l.return = a, L = l) : Mv(o);
        for (; i !== null; )
          L = i, hb(i), i = i.sibling;
        L = o, Es = s, nt = u;
      }
      Av(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, L = i) : Av(e);
  }
}
function Av(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              nt || wu(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !nt)
                if (r === null)
                  n.componentDidMount();
                else {
                  var o = t.elementType === t.type ? r.memoizedProps : qt(t.type, r.memoizedProps);
                  n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && hv(t, i, n);
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
                hv(t, a, r);
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
                    d !== null && va(d);
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
        nt || t.flags & 512 && gf(t);
      } catch (f) {
        Me(t, t.return, f);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (r = t.sibling, r !== null) {
      r.return = t.return, L = r;
      break;
    }
    L = t.return;
  }
}
function Rv(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      r.return = t.return, L = r;
      break;
    }
    L = t.return;
  }
}
function Mv(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            wu(4, t);
          } catch (l) {
            Me(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              Me(t, o, l);
            }
          }
          var i = t.return;
          try {
            gf(t);
          } catch (l) {
            Me(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            gf(t);
          } catch (l) {
            Me(t, a, l);
          }
      }
    } catch (l) {
      Me(t, t.return, l);
    }
    if (t === e) {
      L = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, L = s;
      break;
    }
    L = t.return;
  }
}
var x2 = Math.ceil, Vl = Vr.ReactCurrentDispatcher, Kh = Vr.ReactCurrentOwner, Ht = Vr.ReactCurrentBatchConfig, te = 0, Ge = null, Be = null, Qe = 0, _t = 0, To = bn(0), Ve = 0, Ta = null, Qn = 0, ku = 0, Yh = 0, Zi = null, pt = null, Xh = 0, ii = 1 / 0, Cr = null, Wl = !1, Sf = null, un = null, $s = !1, tn = null, Ul = 0, Ji = 0, xf = null, nl = -1, ol = 0;
function ut() {
  return te & 6 ? De() : nl !== -1 ? nl : nl = De();
}
function cn(e) {
  return e.mode & 1 ? te & 2 && Qe !== 0 ? Qe & -Qe : o2.transition !== null ? (ol === 0 && (ol = qy()), ol) : (e = ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : n1(e.type)), e) : 1;
}
function tr(e, t, r, n) {
  if (50 < Ji)
    throw Ji = 0, xf = null, Error(M(185));
  Ua(e, r, n), (!(te & 2) || e !== Ge) && (e === Ge && (!(te & 2) && (ku |= r), Ve === 4 && Zr(e, Qe)), bt(e, n), r === 1 && te === 0 && !(t.mode & 1) && (ii = De() + 500, bu && Sn()));
}
function bt(e, t) {
  var r = e.callbackNode;
  o_(e, t);
  var n = Tl(e, e === Ge ? Qe : 0);
  if (n === 0)
    r !== null && jm(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && jm(r), t === 1)
      e.tag === 0 ? n2(zv.bind(null, e)) : w1(zv.bind(null, e)), J_(function() {
        !(te & 6) && Sn();
      }), r = null;
    else {
      switch (Qy(n)) {
        case 1:
          r = xh;
          break;
        case 4:
          r = Yy;
          break;
        case 16:
          r = Pl;
          break;
        case 536870912:
          r = Xy;
          break;
        default:
          r = Pl;
      }
      r = xb(r, pb.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function pb(e, t) {
  if (nl = -1, ol = 0, te & 6)
    throw Error(M(327));
  var r = e.callbackNode;
  if (Uo() && e.callbackNode !== r)
    return null;
  var n = Tl(e, e === Ge ? Qe : 0);
  if (n === 0)
    return null;
  if (n & 30 || n & e.expiredLanes || t)
    t = Hl(e, n);
  else {
    t = n;
    var o = te;
    te |= 2;
    var i = vb();
    (Ge !== e || Qe !== t) && (Cr = null, ii = De() + 500, Bn(e, t));
    do
      try {
        C2();
        break;
      } catch (s) {
        mb(e, s);
      }
    while (!0);
    Ih(), Vl.current = i, te = o, Be !== null ? t = 0 : (Ge = null, Qe = 0, t = Ve);
  }
  if (t !== 0) {
    if (t === 2 && (o = Kd(e), o !== 0 && (n = o, t = wf(e, o))), t === 1)
      throw r = Ta, Bn(e, 0), Zr(e, n), bt(e, De()), r;
    if (t === 6)
      Zr(e, n);
    else {
      if (o = e.current.alternate, !(n & 30) && !w2(o) && (t = Hl(e, n), t === 2 && (i = Kd(e), i !== 0 && (n = i, t = wf(e, i))), t === 1))
        throw r = Ta, Bn(e, 0), Zr(e, n), bt(e, De()), r;
      switch (e.finishedWork = o, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          $n(e, pt, Cr);
          break;
        case 3:
          if (Zr(e, n), (n & 130023424) === n && (t = Xh + 500 - De(), 10 < t)) {
            if (Tl(e, 0) !== 0)
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
            var a = 31 - er(n);
            i = 1 << a, a = t[a], a > o && (o = a), n &= ~i;
          }
          if (n = o, n = De() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * x2(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = tf($n.bind(null, e, pt, Cr), n);
            break;
          }
          $n(e, pt, Cr);
          break;
        case 5:
          $n(e, pt, Cr);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return bt(e, De()), e.callbackNode === r ? pb.bind(null, e) : null;
}
function wf(e, t) {
  var r = Zi;
  return e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256), e = Hl(e, t), e !== 2 && (t = pt, pt = r, t !== null && kf(t)), e;
}
function kf(e) {
  pt === null ? pt = e : pt.push.apply(pt, e);
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
            if (!nr(i(), o))
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
  for (t &= ~Yh, t &= ~ku, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - er(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function zv(e) {
  if (te & 6)
    throw Error(M(327));
  Uo();
  var t = Tl(e, 0);
  if (!(t & 1))
    return bt(e, De()), null;
  var r = Hl(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Kd(e);
    n !== 0 && (t = n, r = wf(e, n));
  }
  if (r === 1)
    throw r = Ta, Bn(e, 0), Zr(e, t), bt(e, De()), r;
  if (r === 6)
    throw Error(M(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, $n(e, pt, Cr), bt(e, De()), null;
}
function qh(e, t) {
  var r = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    te = r, te === 0 && (ii = De() + 500, bu && Sn());
  }
}
function Zn(e) {
  tn !== null && tn.tag === 0 && !(te & 6) && Uo();
  var t = te;
  te |= 1;
  var r = Ht.transition, n = ce;
  try {
    if (Ht.transition = null, ce = 1, e)
      return e();
  } finally {
    ce = n, Ht.transition = r, te = t, !(te & 6) && Sn();
  }
}
function Qh() {
  _t = To.current, Se(To);
}
function Bn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, Z_(r)), Be !== null)
    for (r = Be.return; r !== null; ) {
      var n = r;
      switch (Rh(n), n.tag) {
        case 1:
          n = n.type.childContextTypes, n != null && Ml();
          break;
        case 3:
          ni(), Se(gt), Se(ot), Bh();
          break;
        case 5:
          Nh(n);
          break;
        case 4:
          ni();
          break;
        case 13:
          Se(Pe);
          break;
        case 19:
          Se(Pe);
          break;
        case 10:
          Fh(n.type._context);
          break;
        case 22:
        case 23:
          Qh();
      }
      r = r.return;
    }
  if (Ge = e, Be = e = dn(e.current, null), Qe = _t = t, Ve = 0, Ta = null, Yh = ku = Qn = 0, pt = Zi = null, Dn !== null) {
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
function mb(e, t) {
  do {
    var r = Be;
    try {
      if (Ih(), el.current = jl, Bl) {
        for (var n = Ee.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), n = n.next;
        }
        Bl = !1;
      }
      if (qn = 0, He = je = Ee = null, qi = !1, Ca = 0, Kh.current = null, r === null || r.return === null) {
        Ve = 1, Ta = t, Be = null;
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
          var p = Sv(a);
          if (p !== null) {
            p.flags &= -257, xv(p, a, s, i, t), p.mode & 1 && bv(i, u, t), t = p, l = u;
            var g = t.updateQueue;
            if (g === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else
              g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              bv(i, u, t), Zh();
              break e;
            }
            l = Error(M(426));
          }
        } else if (Ce && s.mode & 1) {
          var x = Sv(a);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), xv(x, a, s, i, t), Mh(oi(l, s));
            break e;
          }
        }
        i = l = oi(l, s), Ve !== 4 && (Ve = 2), Zi === null ? Zi = [i] : Zi.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var v = Z1(i, l, t);
              fv(i, v);
              break e;
            case 1:
              s = l;
              var h = i.type, m = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (un === null || !un.has(m)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = J1(i, s, t);
                fv(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      yb(r);
    } catch (_) {
      t = _, Be === r && r !== null && (Be = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function vb() {
  var e = Vl.current;
  return Vl.current = jl, e === null ? jl : e;
}
function Zh() {
  (Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4), Ge === null || !(Qn & 268435455) && !(ku & 268435455) || Zr(Ge, Qe);
}
function Hl(e, t) {
  var r = te;
  te |= 2;
  var n = vb();
  (Ge !== e || Qe !== t) && (Cr = null, Bn(e, t));
  do
    try {
      k2();
      break;
    } catch (o) {
      mb(e, o);
    }
  while (!0);
  if (Ih(), te = r, Vl.current = n, Be !== null)
    throw Error(M(261));
  return Ge = null, Qe = 0, Ve;
}
function k2() {
  for (; Be !== null; )
    gb(Be);
}
function C2() {
  for (; Be !== null && !XC(); )
    gb(Be);
}
function gb(e) {
  var t = Sb(e.alternate, e, _t);
  e.memoizedProps = e.pendingProps, t === null ? yb(e) : Be = t, Kh.current = null;
}
function yb(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = g2(r, t), r !== null) {
        r.flags &= 32767, Be = r;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ve = 6, Be = null;
        return;
      }
    } else if (r = v2(r, t, _t), r !== null) {
      Be = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      Be = t;
      return;
    }
    Be = t = e;
  } while (t !== null);
  Ve === 0 && (Ve = 5);
}
function $n(e, t, r) {
  var n = ce, o = Ht.transition;
  try {
    Ht.transition = null, ce = 1, _2(e, t, r, n);
  } finally {
    Ht.transition = o, ce = n;
  }
  return null;
}
function _2(e, t, r, n) {
  do
    Uo();
  while (tn !== null);
  if (te & 6)
    throw Error(M(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current)
    throw Error(M(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = r.lanes | r.childLanes;
  if (i_(e, i), e === Ge && (Be = Ge = null, Qe = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || $s || ($s = !0, xb(Pl, function() {
    return Uo(), null;
  })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
    i = Ht.transition, Ht.transition = null;
    var a = ce;
    ce = 1;
    var s = te;
    te |= 4, Kh.current = null, b2(e, r), fb(r, e), H_(Jd), El = !!Zd, Jd = Zd = null, e.current = r, S2(r), qC(), te = s, ce = a, Ht.transition = i;
  } else
    e.current = r;
  if ($s && ($s = !1, tn = e, Ul = o), i = e.pendingLanes, i === 0 && (un = null), JC(r.stateNode), bt(e, De()), t !== null)
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      o = t[r], n(o.value, { componentStack: o.stack, digest: o.digest });
  if (Wl)
    throw Wl = !1, e = Sf, Sf = null, e;
  return Ul & 1 && e.tag !== 0 && Uo(), i = e.pendingLanes, i & 1 ? e === xf ? Ji++ : (Ji = 0, xf = e) : Ji = 0, Sn(), null;
}
function Uo() {
  if (tn !== null) {
    var e = Qy(Ul), t = Ht.transition, r = ce;
    try {
      if (Ht.transition = null, ce = 16 > e ? 16 : e, tn === null)
        var n = !1;
      else {
        if (e = tn, tn = null, Ul = 0, te & 6)
          throw Error(M(331));
        var o = te;
        for (te |= 4, L = e.current; L !== null; ) {
          var i = L, a = i.child;
          if (L.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qi(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, L = d;
                  else
                    for (; L !== null; ) {
                      c = L;
                      var f = c.sibling, p = c.return;
                      if (ub(c), c === u) {
                        L = null;
                        break;
                      }
                      if (f !== null) {
                        f.return = p, L = f;
                        break;
                      }
                      L = p;
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
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null)
            a.return = i, L = a;
          else
            e:
              for (; L !== null; ) {
                if (i = L, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qi(9, i, i.return);
                  }
                var v = i.sibling;
                if (v !== null) {
                  v.return = i.return, L = v;
                  break e;
                }
                L = i.return;
              }
        }
        var h = e.current;
        for (L = h; L !== null; ) {
          a = L;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null)
            m.return = a, L = m;
          else
            e:
              for (a = h; L !== null; ) {
                if (s = L, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        wu(9, s);
                    }
                  } catch (_) {
                    Me(s, s.return, _);
                  }
                if (s === a) {
                  L = null;
                  break e;
                }
                var w = s.sibling;
                if (w !== null) {
                  w.return = s.return, L = w;
                  break e;
                }
                L = s.return;
              }
        }
        if (te = o, Sn(), pr && typeof pr.onPostCommitFiberRoot == "function")
          try {
            pr.onPostCommitFiberRoot(pu, e);
          } catch {
          }
        n = !0;
      }
      return n;
    } finally {
      ce = r, Ht.transition = t;
    }
  }
  return !1;
}
function Iv(e, t, r) {
  t = oi(r, t), t = Z1(e, t, 1), e = ln(e, t, 1), t = ut(), e !== null && (Ua(e, 1, t), bt(e, t));
}
function Me(e, t, r) {
  if (e.tag === 3)
    Iv(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Iv(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (un === null || !un.has(n))) {
          e = oi(r, e), e = J1(t, e, 1), t = ln(t, e, 1), e = ut(), t !== null && (Ua(t, 1, e), bt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function P2(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = ut(), e.pingedLanes |= e.suspendedLanes & r, Ge === e && (Qe & r) === r && (Ve === 4 || Ve === 3 && (Qe & 130023424) === Qe && 500 > De() - Xh ? Bn(e, 0) : Yh |= r), bt(e, t);
}
function bb(e, t) {
  t === 0 && (e.mode & 1 ? (t = bs, bs <<= 1, !(bs & 130023424) && (bs = 4194304)) : t = 1);
  var r = ut();
  e = Or(e, t), e !== null && (Ua(e, t, r), bt(e, r));
}
function T2(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), bb(e, r);
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
      throw Error(M(314));
  }
  n !== null && n.delete(t), bb(e, r);
}
var Sb;
Sb = function(e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || gt.current)
      vt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128))
        return vt = !1, m2(e, t, r);
      vt = !!(e.flags & 131072);
    }
  else
    vt = !1, Ce && t.flags & 1048576 && k1(t, Fl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      rl(e, t), e = t.pendingProps;
      var o = ei(t, ot.current);
      Wo(t, r), o = Vh(null, t, n, e, o, r);
      var i = Wh();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yt(n) ? (i = !0, zl(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Lh(t), o.updater = Su, t.stateNode = o, o._reactInternals = t, uf(t, n, e, r), t = ff(null, t, n, !0, i, r)) : (t.tag = 0, Ce && i && Ah(t), st(null, t, o, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (rl(e, t), e = t.pendingProps, o = n._init, n = o(n._payload), t.type = n, o = t.tag = A2(n), e = qt(n, e), o) {
          case 0:
            t = df(null, t, n, e, r);
            break e;
          case 1:
            t = Cv(null, t, n, e, r);
            break e;
          case 11:
            t = wv(null, t, n, e, r);
            break e;
          case 14:
            t = kv(null, t, n, qt(n.type, e), r);
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
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : qt(n, o), df(e, t, n, o, r);
    case 1:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : qt(n, o), Cv(e, t, n, o, r);
    case 3:
      e: {
        if (nb(t), e === null)
          throw Error(M(387));
        n = t.pendingProps, i = t.memoizedState, o = i.element, T1(e, t), Ol(t, n, null, r);
        var a = t.memoizedState;
        if (n = a.element, i.isDehydrated)
          if (i = { element: n, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = oi(Error(M(423)), t), t = _v(e, t, n, r, o);
            break e;
          } else if (n !== o) {
            o = oi(Error(M(424)), t), t = _v(e, t, n, r, o);
            break e;
          } else
            for (Pt = sn(t.stateNode.containerInfo.firstChild), Tt = t, Ce = !0, Zt = null, r = R1(t, null, n, r), t.child = r; r; )
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
      return M1(t), e === null && af(t), n = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, ef(n, o) ? a = null : i !== null && ef(n, i) && (t.flags |= 32), rb(e, t), st(e, t, a, r), t.child;
    case 6:
      return e === null && af(t), null;
    case 13:
      return ob(e, t, r);
    case 4:
      return Oh(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = ri(t, null, n, r) : st(e, t, n, r), t.child;
    case 11:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : qt(n, o), wv(e, t, n, o, r);
    case 7:
      return st(e, t, t.pendingProps, r), t.child;
    case 8:
      return st(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return st(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, pe(Dl, n._currentValue), n._currentValue = a, i !== null)
          if (nr(i.value, a)) {
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
                  throw Error(M(341));
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
      return o = t.type, n = t.pendingProps.children, Wo(t, r), o = Gt(o), n = n(o), t.flags |= 1, st(e, t, n, r), t.child;
    case 14:
      return n = t.type, o = qt(n, t.pendingProps), o = qt(n.type, o), kv(e, t, n, o, r);
    case 15:
      return eb(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : qt(n, o), rl(e, t), t.tag = 1, yt(n) ? (e = !0, zl(t)) : e = !1, Wo(t, r), $1(t, n, o), uf(t, n, o, r), ff(null, t, n, !0, e, r);
    case 19:
      return ib(e, t, r);
    case 22:
      return tb(e, t, r);
  }
  throw Error(M(156, t.tag));
};
function xb(e, t) {
  return Ky(e, t);
}
function $2(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ut(e, t, r, n) {
  return new $2(e, t, r, n);
}
function Jh(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function A2(e) {
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
function dn(e, t) {
  var r = e.alternate;
  return r === null ? (r = Ut(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function il(e, t, r, n, o, i) {
  var a = 2;
  if (n = e, typeof e == "function")
    Jh(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case go:
          return jn(r.children, o, i, t);
        case gh:
          a = 8, o |= 8;
          break;
        case Md:
          return e = Ut(12, r, t, o | 2), e.elementType = Md, e.lanes = i, e;
        case zd:
          return e = Ut(13, r, t, o), e.elementType = zd, e.lanes = i, e;
        case Id:
          return e = Ut(19, r, t, o), e.elementType = Id, e.lanes = i, e;
        case Ay:
          return Cu(r, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ey:
                a = 10;
                break e;
              case $y:
                a = 9;
                break e;
              case yh:
                a = 11;
                break e;
              case bh:
                a = 14;
                break e;
              case Yr:
                a = 16, n = null;
                break e;
            }
          throw Error(M(130, e == null ? e : typeof e, ""));
      }
  return t = Ut(a, r, t, o), t.elementType = e, t.type = n, t.lanes = i, t;
}
function jn(e, t, r, n) {
  return e = Ut(7, e, n, t), e.lanes = r, e;
}
function Cu(e, t, r, n) {
  return e = Ut(22, e, n, t), e.elementType = Ay, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function jc(e, t, r) {
  return e = Ut(6, e, null, t), e.lanes = r, e;
}
function Vc(e, t, r) {
  return t = Ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function R2(e, t, r, n, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = wc(0), this.expirationTimes = wc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wc(0), this.identifierPrefix = n, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function ep(e, t, r, n, o, i, a, s, l) {
  return e = new R2(e, t, r, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ut(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Lh(i), e;
}
function M2(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: vo, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function wb(e) {
  if (!e)
    return mn;
  e = e._reactInternals;
  e: {
    if (ro(e) !== e || e.tag !== 1)
      throw Error(M(170));
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
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (yt(r))
      return x1(e, r, t);
  }
  return t;
}
function kb(e, t, r, n, o, i, a, s, l) {
  return e = ep(r, n, !0, e, o, i, a, s, l), e.context = wb(null), r = e.current, n = ut(), o = cn(r), i = Mr(n, o), i.callback = t ?? null, ln(r, i, o), e.current.lanes = o, Ua(e, o, n), bt(e, n), e;
}
function _u(e, t, r, n) {
  var o = t.current, i = ut(), a = cn(o);
  return r = wb(r), t.context === null ? t.context = r : t.pendingContext = r, t = Mr(i, a), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = ln(o, t, a), e !== null && (tr(e, o, a, i), Js(e, o, a)), a;
}
function Gl(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Fv(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function tp(e, t) {
  Fv(e, t), (e = e.alternate) && Fv(e, t);
}
function z2() {
  return null;
}
var Cb = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function rp(e) {
  this._internalRoot = e;
}
Pu.prototype.render = rp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(M(409));
  _u(e, t, null, null);
};
Pu.prototype.unmount = rp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zn(function() {
      _u(null, e, null, null);
    }), t[Lr] = null;
  }
};
function Pu(e) {
  this._internalRoot = e;
}
Pu.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = e1();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Qr.length && t !== 0 && t < Qr[r].priority; r++)
      ;
    Qr.splice(r, 0, e), r === 0 && r1(e);
  }
};
function np(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Tu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Dv() {
}
function I2(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function() {
        var u = Gl(a);
        i.call(u);
      };
    }
    var a = kb(t, n, e, 0, null, !1, !1, "", Dv);
    return e._reactRootContainer = a, e[Lr] = a.current, ba(e.nodeType === 8 ? e.parentNode : e), Zn(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof n == "function") {
    var s = n;
    n = function() {
      var u = Gl(l);
      s.call(u);
    };
  }
  var l = ep(e, 0, !1, null, null, !1, !1, "", Dv);
  return e._reactRootContainer = l, e[Lr] = l.current, ba(e.nodeType === 8 ? e.parentNode : e), Zn(function() {
    _u(t, l, r, n);
  }), l;
}
function Eu(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = Gl(a);
        s.call(l);
      };
    }
    _u(t, a, e, o);
  } else
    a = I2(r, t, e, o, n);
  return Gl(a);
}
Zy = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Li(t.pendingLanes);
        r !== 0 && (wh(t, r | 1), bt(t, De()), !(te & 6) && (ii = De() + 500, Sn()));
      }
      break;
    case 13:
      Zn(function() {
        var n = Or(e, 1);
        if (n !== null) {
          var o = ut();
          tr(n, e, 1, o);
        }
      }), tp(e, 1);
  }
};
kh = function(e) {
  if (e.tag === 13) {
    var t = Or(e, 134217728);
    if (t !== null) {
      var r = ut();
      tr(t, e, 134217728, r);
    }
    tp(e, 134217728);
  }
};
Jy = function(e) {
  if (e.tag === 13) {
    var t = cn(e), r = Or(e, t);
    if (r !== null) {
      var n = ut();
      tr(r, e, t, n);
    }
    tp(e, t);
  }
};
e1 = function() {
  return ce;
};
t1 = function(e, t) {
  var r = ce;
  try {
    return ce = e, t();
  } finally {
    ce = r;
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
            var o = yu(n);
            if (!o)
              throw Error(M(90));
            My(n), Ld(n, o);
          }
        }
      }
      break;
    case "textarea":
      Iy(e, r);
      break;
    case "select":
      t = r.value, t != null && No(e, !!r.multiple, t, !1);
  }
};
jy = qh;
Vy = Zn;
var F2 = { usingClientEntryPoint: !1, Events: [Ga, xo, yu, Ny, By, qh] }, Ti = { findFiberByHostInstance: Fn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, D2 = { bundleType: Ti.bundleType, version: Ti.version, rendererPackageName: Ti.rendererPackageName, rendererConfig: Ti.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Vr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Hy(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ti.findFiberByHostInstance || z2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var As = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!As.isDisabled && As.supportsFiber)
    try {
      pu = As.inject(D2), pr = As;
    } catch {
    }
}
Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F2;
Mt.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!np(t))
    throw Error(M(200));
  return M2(e, t, null, r);
};
Mt.createRoot = function(e, t) {
  if (!np(e))
    throw Error(M(299));
  var r = !1, n = "", o = Cb;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ep(e, 1, !1, null, null, r, !1, n, o), e[Lr] = t.current, ba(e.nodeType === 8 ? e.parentNode : e), new rp(t);
};
Mt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
  return e = Hy(t), e = e === null ? null : e.stateNode, e;
};
Mt.flushSync = function(e) {
  return Zn(e);
};
Mt.hydrate = function(e, t, r) {
  if (!Tu(t))
    throw Error(M(200));
  return Eu(null, e, t, !0, r);
};
Mt.hydrateRoot = function(e, t, r) {
  if (!np(e))
    throw Error(M(405));
  var n = r != null && r.hydratedSources || null, o = !1, i = "", a = Cb;
  if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = kb(t, null, e, 1, r ?? null, o, !1, i, a), e[Lr] = t.current, ba(e), n)
    for (e = 0; e < n.length; e++)
      r = n[e], o = r._getVersion, o = o(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(
        r,
        o
      );
  return new Pu(t);
};
Mt.render = function(e, t, r) {
  if (!Tu(t))
    throw Error(M(200));
  return Eu(null, e, t, !1, r);
};
Mt.unmountComponentAtNode = function(e) {
  if (!Tu(e))
    throw Error(M(40));
  return e._reactRootContainer ? (Zn(function() {
    Eu(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Lr] = null;
    });
  }), !0) : !1;
};
Mt.unstable_batchedUpdates = qh;
Mt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!Tu(r))
    throw Error(M(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(M(38));
  return Eu(e, t, r, !1, n);
};
Mt.version = "18.2.0-next-9e3b772b8-20220608";
function _b() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_b);
    } catch (e) {
      console.error(e);
    }
}
_b(), ky.exports = Mt;
var op = ky.exports, Lv = op;
Ad.createRoot = Lv.createRoot, Ad.hydrateRoot = Lv.hydrateRoot;
function L2(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function O2(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var N2 = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(O2(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = L2(o);
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
}(), rt = "-ms-", Kl = "-moz-", oe = "-webkit-", Pb = "comm", ip = "rule", ap = "decl", B2 = "@import", Tb = "@keyframes", j2 = "@layer", V2 = Math.abs, $u = String.fromCharCode, W2 = Object.assign;
function U2(e, t) {
  return qe(e, 0) ^ 45 ? (((t << 2 ^ qe(e, 0)) << 2 ^ qe(e, 1)) << 2 ^ qe(e, 2)) << 2 ^ qe(e, 3) : 0;
}
function Eb(e) {
  return e.trim();
}
function H2(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ie(e, t, r) {
  return e.replace(t, r);
}
function Cf(e, t) {
  return e.indexOf(t);
}
function qe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ea(e, t, r) {
  return e.slice(t, r);
}
function ur(e) {
  return e.length;
}
function sp(e) {
  return e.length;
}
function Rs(e, t) {
  return t.push(e), e;
}
function G2(e, t) {
  return e.map(t).join("");
}
var Au = 1, ai = 1, $b = 0, St = 0, Ne = 0, pi = "";
function Ru(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Au, column: ai, length: a, return: "" };
}
function Ei(e, t) {
  return W2(Ru("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function K2() {
  return Ne;
}
function Y2() {
  return Ne = St > 0 ? qe(pi, --St) : 0, ai--, Ne === 10 && (ai = 1, Au--), Ne;
}
function Et() {
  return Ne = St < $b ? qe(pi, St++) : 0, ai++, Ne === 10 && (ai = 1, Au++), Ne;
}
function vr() {
  return qe(pi, St);
}
function al() {
  return St;
}
function Ya(e, t) {
  return Ea(pi, e, t);
}
function $a(e) {
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
function Ab(e) {
  return Au = ai = 1, $b = ur(pi = e), St = 0, [];
}
function Rb(e) {
  return pi = "", e;
}
function sl(e) {
  return Eb(Ya(St - 1, _f(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function X2(e) {
  for (; (Ne = vr()) && Ne < 33; )
    Et();
  return $a(e) > 2 || $a(Ne) > 3 ? "" : " ";
}
function q2(e, t) {
  for (; --t && Et() && !(Ne < 48 || Ne > 102 || Ne > 57 && Ne < 65 || Ne > 70 && Ne < 97); )
    ;
  return Ya(e, al() + (t < 6 && vr() == 32 && Et() == 32));
}
function _f(e) {
  for (; Et(); )
    switch (Ne) {
      case e:
        return St;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _f(Ne);
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
function Q2(e, t) {
  for (; Et() && e + Ne !== 57; )
    if (e + Ne === 84 && vr() === 47)
      break;
  return "/*" + Ya(t, St - 1) + "*" + $u(e === 47 ? e : Et());
}
function Z2(e) {
  for (; !$a(vr()); )
    Et();
  return Ya(e, St);
}
function J2(e) {
  return Rb(ll("", null, null, null, [""], e = Ab(e), 0, [0], e));
}
function ll(e, t, r, n, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, g = 0, y = 1, x = 1, v = 1, h = 0, m = "", w = o, _ = i, A = n, P = m; x; )
    switch (g = h, h = Et()) {
      case 40:
        if (g != 108 && qe(P, d - 1) == 58) {
          Cf(P += ie(sl(h), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += sl(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += X2(g);
        break;
      case 92:
        P += q2(al() - 1, 7);
        continue;
      case 47:
        switch (vr()) {
          case 42:
          case 47:
            Rs(eP(Q2(Et(), al()), t, r), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * y:
        s[u++] = ur(P) * v;
      case 125 * y:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            v == -1 && (P = ie(P, /\f/g, "")), p > 0 && ur(P) - d && Rs(p > 32 ? Nv(P + ";", n, r, d - 1) : Nv(ie(P, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            P += ";";
          default:
            if (Rs(A = Ov(P, t, r, u, c, o, s, m, w = [], _ = [], d), i), h === 123)
              if (c === 0)
                ll(P, t, A, A, w, i, d, s, _);
              else
                switch (f === 99 && qe(P, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ll(e, A, A, n && Rs(Ov(e, A, A, 0, 0, o, s, m, o, w = [], d), _), o, _, d, s, n ? w : _);
                    break;
                  default:
                    ll(P, A, A, A, [""], _, 0, s, _);
                }
        }
        u = c = p = 0, y = v = 1, m = P = "", d = a;
        break;
      case 58:
        d = 1 + ur(P), p = g;
      default:
        if (y < 1) {
          if (h == 123)
            --y;
          else if (h == 125 && y++ == 0 && Y2() == 125)
            continue;
        }
        switch (P += $u(h), h * y) {
          case 38:
            v = c > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            s[u++] = (ur(P) - 1) * v, v = 1;
            break;
          case 64:
            vr() === 45 && (P += sl(Et())), f = vr(), c = d = ur(m = P += Z2(al())), h++;
            break;
          case 45:
            g === 45 && ur(P) == 2 && (y = 0);
        }
    }
  return i;
}
function Ov(e, t, r, n, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = sp(f), g = 0, y = 0, x = 0; g < n; ++g)
    for (var v = 0, h = Ea(e, d + 1, d = V2(y = a[g])), m = e; v < p; ++v)
      (m = Eb(y > 0 ? f[v] + " " + h : ie(h, /&\f/g, f[v]))) && (l[x++] = m);
  return Ru(e, t, r, o === 0 ? ip : s, l, u, c);
}
function eP(e, t, r) {
  return Ru(e, t, r, Pb, $u(K2()), Ea(e, 2, -2), 0);
}
function Nv(e, t, r, n) {
  return Ru(e, t, r, ap, Ea(e, 0, n), Ea(e, n + 1, -1), n);
}
function Ho(e, t) {
  for (var r = "", n = sp(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function tP(e, t, r, n) {
  switch (e.type) {
    case j2:
      if (e.children.length)
        break;
    case B2:
    case ap:
      return e.return = e.return || e.value;
    case Pb:
      return "";
    case Tb:
      return e.return = e.value + "{" + Ho(e.children, n) + "}";
    case ip:
      e.value = e.props.join(",");
  }
  return ur(r = Ho(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function rP(e) {
  var t = sp(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function nP(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Bv = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function Mb(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var oP = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = vr(), o === 38 && i === 12 && (r[n] = 1), !$a(i); )
    Et();
  return Ya(t, St);
}, iP = function(t, r) {
  var n = -1, o = 44;
  do
    switch ($a(o)) {
      case 0:
        o === 38 && vr() === 12 && (r[n] = 1), t[n] += oP(St - 1, r, n);
        break;
      case 2:
        t[n] += sl(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = vr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += $u(o);
    }
  while (o = Et());
  return t;
}, aP = function(t, r) {
  return Rb(iP(Ab(t), r));
}, jv = /* @__PURE__ */ new WeakMap(), sP = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !jv.get(n)) && !o) {
      jv.set(t, !0);
      for (var i = [], a = aP(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, lP = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function zb(e, t) {
  switch (U2(e, t)) {
    case 5103:
      return oe + "print-" + e + e;
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
      return oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return oe + e + Kl + e + rt + e + e;
    case 6828:
    case 4268:
      return oe + e + rt + e + e;
    case 6165:
      return oe + e + rt + "flex-" + e + e;
    case 5187:
      return oe + e + ie(e, /(\w+).+(:[^]+)/, oe + "box-$1$2" + rt + "flex-$1$2") + e;
    case 5443:
      return oe + e + rt + "flex-item-" + ie(e, /flex-|-self/, "") + e;
    case 4675:
      return oe + e + rt + "flex-line-pack" + ie(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return oe + e + rt + ie(e, "shrink", "negative") + e;
    case 5292:
      return oe + e + rt + ie(e, "basis", "preferred-size") + e;
    case 6060:
      return oe + "box-" + ie(e, "-grow", "") + oe + e + rt + ie(e, "grow", "positive") + e;
    case 4554:
      return oe + ie(e, /([^-])(transform)/g, "$1" + oe + "$2") + e;
    case 6187:
      return ie(ie(ie(e, /(zoom-|grab)/, oe + "$1"), /(image-set)/, oe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ie(e, /(image-set\([^]*)/, oe + "$1$`$1");
    case 4968:
      return ie(ie(e, /(.+:)(flex-)?(.*)/, oe + "box-pack:$3" + rt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + oe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(e, /(.+)-inline(.+)/, oe + "$1$2") + e;
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
      if (ur(e) - 1 - t > 6)
        switch (qe(e, t + 1)) {
          case 109:
            if (qe(e, t + 4) !== 45)
              break;
          case 102:
            return ie(e, /(.+:)(.+)-([^]+)/, "$1" + oe + "$2-$3$1" + Kl + (qe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Cf(e, "stretch") ? zb(ie(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (qe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (qe(e, ur(e) - 3 - (~Cf(e, "!important") && 10))) {
        case 107:
          return ie(e, ":", ":" + oe) + e;
        case 101:
          return ie(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + oe + (qe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + oe + "$2$3$1" + rt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (qe(e, t + 11)) {
        case 114:
          return oe + e + rt + ie(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return oe + e + rt + ie(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return oe + e + rt + ie(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return oe + e + rt + e + e;
  }
  return e;
}
var uP = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ap:
        t.return = zb(t.value, t.length);
        break;
      case Tb:
        return Ho([Ei(t, {
          value: ie(t.value, "@", "@" + oe)
        })], o);
      case ip:
        if (t.length)
          return G2(t.props, function(i) {
            switch (H2(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ho([Ei(t, {
                  props: [ie(i, /:(read-\w+)/, ":" + Kl + "$1")]
                })], o);
              case "::placeholder":
                return Ho([Ei(t, {
                  props: [ie(i, /:(plac\w+)/, ":" + oe + "input-$1")]
                }), Ei(t, {
                  props: [ie(i, /:(plac\w+)/, ":" + Kl + "$1")]
                }), Ei(t, {
                  props: [ie(i, /:(plac\w+)/, rt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, cP = [uP], dP = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var x = y.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || cP, i = {}, a, s = [];
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
  var l, u = [sP, lP];
  {
    var c, d = [tP, nP(function(y) {
      c.insert(y);
    })], f = rP(u.concat(o, d)), p = function(x) {
      return Ho(J2(x), f);
    };
    l = function(x, v, h, m) {
      c = h, p(x ? x + "{" + v.styles + "}" : v.styles), m && (g.inserted[v.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new N2({
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
var Ib = { exports: {} }, de = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke = typeof Symbol == "function" && Symbol.for, lp = Ke ? Symbol.for("react.element") : 60103, up = Ke ? Symbol.for("react.portal") : 60106, Mu = Ke ? Symbol.for("react.fragment") : 60107, zu = Ke ? Symbol.for("react.strict_mode") : 60108, Iu = Ke ? Symbol.for("react.profiler") : 60114, Fu = Ke ? Symbol.for("react.provider") : 60109, Du = Ke ? Symbol.for("react.context") : 60110, cp = Ke ? Symbol.for("react.async_mode") : 60111, Lu = Ke ? Symbol.for("react.concurrent_mode") : 60111, Ou = Ke ? Symbol.for("react.forward_ref") : 60112, Nu = Ke ? Symbol.for("react.suspense") : 60113, fP = Ke ? Symbol.for("react.suspense_list") : 60120, Bu = Ke ? Symbol.for("react.memo") : 60115, ju = Ke ? Symbol.for("react.lazy") : 60116, hP = Ke ? Symbol.for("react.block") : 60121, pP = Ke ? Symbol.for("react.fundamental") : 60117, mP = Ke ? Symbol.for("react.responder") : 60118, vP = Ke ? Symbol.for("react.scope") : 60119;
function It(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case lp:
        switch (e = e.type, e) {
          case cp:
          case Lu:
          case Mu:
          case Iu:
          case zu:
          case Nu:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Du:
              case Ou:
              case ju:
              case Bu:
              case Fu:
                return e;
              default:
                return t;
            }
        }
      case up:
        return t;
    }
  }
}
function Fb(e) {
  return It(e) === Lu;
}
de.AsyncMode = cp;
de.ConcurrentMode = Lu;
de.ContextConsumer = Du;
de.ContextProvider = Fu;
de.Element = lp;
de.ForwardRef = Ou;
de.Fragment = Mu;
de.Lazy = ju;
de.Memo = Bu;
de.Portal = up;
de.Profiler = Iu;
de.StrictMode = zu;
de.Suspense = Nu;
de.isAsyncMode = function(e) {
  return Fb(e) || It(e) === cp;
};
de.isConcurrentMode = Fb;
de.isContextConsumer = function(e) {
  return It(e) === Du;
};
de.isContextProvider = function(e) {
  return It(e) === Fu;
};
de.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lp;
};
de.isForwardRef = function(e) {
  return It(e) === Ou;
};
de.isFragment = function(e) {
  return It(e) === Mu;
};
de.isLazy = function(e) {
  return It(e) === ju;
};
de.isMemo = function(e) {
  return It(e) === Bu;
};
de.isPortal = function(e) {
  return It(e) === up;
};
de.isProfiler = function(e) {
  return It(e) === Iu;
};
de.isStrictMode = function(e) {
  return It(e) === zu;
};
de.isSuspense = function(e) {
  return It(e) === Nu;
};
de.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Mu || e === Lu || e === Iu || e === zu || e === Nu || e === fP || typeof e == "object" && e !== null && (e.$$typeof === ju || e.$$typeof === Bu || e.$$typeof === Fu || e.$$typeof === Du || e.$$typeof === Ou || e.$$typeof === pP || e.$$typeof === mP || e.$$typeof === vP || e.$$typeof === hP);
};
de.typeOf = It;
Ib.exports = de;
var gP = Ib.exports, Db = gP, yP = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, bP = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Lb = {};
Lb[Db.ForwardRef] = yP;
Lb[Db.Memo] = bP;
var SP = !0;
function xP(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Ob = function(t, r, n) {
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
  SP === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Nb = function(t, r, n) {
  Ob(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function wP(e) {
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
var kP = {
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
}, CP = /[A-Z]|^ms/g, _P = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Bb = function(t) {
  return t.charCodeAt(1) === 45;
}, Vv = function(t) {
  return t != null && typeof t != "boolean";
}, Wc = /* @__PURE__ */ Mb(function(e) {
  return Bb(e) ? e : e.replace(CP, "-$&").toLowerCase();
}), Wv = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(_P, function(n, o, i) {
          return cr = {
            name: o,
            styles: i,
            next: cr
          }, o;
        });
  }
  return kP[t] !== 1 && !Bb(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Aa(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return cr = {
          name: r.name,
          styles: r.styles,
          next: cr
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            cr = {
              name: n.name,
              styles: n.styles,
              next: cr
            }, n = n.next;
        var o = r.styles + ";";
        return o;
      }
      return PP(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = cr, a = r(e);
        return cr = i, Aa(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return r;
  var s = t[r];
  return s !== void 0 ? s : r;
}
function PP(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Aa(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : Vv(a) && (n += Wc(i) + ":" + Wv(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Vv(a[s]) && (n += Wc(i) + ":" + Wv(i, a[s]) + ";");
      else {
        var l = Aa(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Wc(i) + ":" + l + ";";
            break;
          }
          default:
            n += i + "{" + l + "}";
        }
      }
    }
  return n;
}
var Uv = /label:\s*([^\s;\n{]+)\s*(;|$)/g, cr, dp = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  cr = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Aa(n, r, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += Aa(n, r, t[s]), o && (i += a[s]);
  Uv.lastIndex = 0;
  for (var l = "", u; (u = Uv.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = wP(i) + l;
  return {
    name: c,
    styles: i,
    next: cr
  };
}, TP = function(t) {
  return t();
}, jb = Rm.useInsertionEffect ? Rm.useInsertionEffect : !1, EP = jb || TP, Hv = jb || b.useLayoutEffect, Vb = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ dP({
    key: "css"
  }) : null
);
Vb.Provider;
var Wb = function(t) {
  return /* @__PURE__ */ b.forwardRef(function(r, n) {
    var o = b.useContext(Vb);
    return t(r, o, n);
  });
}, Ra = /* @__PURE__ */ b.createContext({}), $P = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    return n;
  }
  return Jn({}, t, r);
}, AP = /* @__PURE__ */ Bv(function(e) {
  return Bv(function(t) {
    return $P(e, t);
  });
}), RP = function(t) {
  var r = b.useContext(Ra);
  return t.theme !== r && (r = AP(r)(t.theme)), /* @__PURE__ */ b.createElement(Ra.Provider, {
    value: r
  }, t.children);
}, Vu = /* @__PURE__ */ Wb(function(e, t) {
  var r = e.styles, n = dp([r], void 0, b.useContext(Ra)), o = b.useRef();
  return Hv(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Hv(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && Nb(t, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function MP() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return dp(t);
}
var Wu = function() {
  var t = MP.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Ub = String.raw, Hb = Ub`
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
`, zP = () => /* @__PURE__ */ T.jsx(Vu, { styles: Hb }), IP = ({ scope: e = "" }) => /* @__PURE__ */ T.jsx(
  Vu,
  {
    styles: Ub`
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

      ${Hb}
    `
  }
);
function FP(e, t) {
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
        i ?? FP(n, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [DP, LP] = it({
  strict: !1,
  name: "PortalManagerContext"
});
function Gb(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ T.jsx(DP, { value: { zIndex: r }, children: t });
}
Gb.displayName = "PortalManager";
var Vn = globalThis != null && globalThis.document ? b.useLayoutEffect : b.useEffect, [Kb, OP] = it({
  strict: !1,
  name: "PortalContext"
}), fp = "chakra-portal", NP = ".chakra-portal", BP = (e) => /* @__PURE__ */ T.jsx(
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
), jP = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = b.useState(null), i = b.useRef(null), [, a] = b.useState({});
  b.useEffect(() => a({}), []);
  const s = OP(), l = LP();
  Vn(() => {
    if (!n)
      return;
    const c = n.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = fp, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ T.jsx(BP, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return i.current ? op.createPortal(
    /* @__PURE__ */ T.jsx(Kb, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ T.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, VP = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = b.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = fp), l;
  }, [o]), [, s] = b.useState({});
  return Vn(() => s({}), []), Vn(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? op.createPortal(
    /* @__PURE__ */ T.jsx(Kb, { value: n ? a : null, children: t }),
    a
  ) : null;
};
function Xa(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ T.jsx(VP, { containerRef: r, ...n }) : /* @__PURE__ */ T.jsx(jP, { ...n });
}
Xa.className = fp;
Xa.selector = NP;
Xa.displayName = "Portal";
function Yb() {
  const e = b.useContext(
    Ra
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var hp = b.createContext({});
hp.displayName = "ColorModeContext";
function pp() {
  const e = b.useContext(hp);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var Ms = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function WP(e = {}) {
  const { preventTransition: t = !0 } = e, r = {
    setDataset: (n) => {
      const o = t ? r.preventTransition() : void 0;
      document.documentElement.dataset.theme = n, document.documentElement.style.colorScheme = n, o == null || o();
    },
    setClassName(n) {
      document.body.classList.add(n ? Ms.dark : Ms.light), document.body.classList.remove(n ? Ms.light : Ms.dark);
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
var UP = "chakra-ui-color-mode";
function HP(e) {
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
var GP = HP(UP), Gv = () => {
};
function Kv(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function Xb(e) {
  const {
    value: t,
    children: r,
    options: {
      useSystemColorMode: n,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = GP
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = b.useState(
    () => Kv(a, s)
  ), [c, d] = b.useState(
    () => Kv(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: g, addListener: y } = b.useMemo(
    () => WP({ preventTransition: i }),
    [i]
  ), x = o === "system" && !l ? c : l, v = b.useCallback(
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
      v(w);
      return;
    }
    if (o === "system") {
      v("system");
      return;
    }
    v(s);
  }, [a, s, o, v]);
  const h = b.useCallback(() => {
    v(x === "dark" ? "light" : "dark");
  }, [x, v]);
  b.useEffect(() => {
    if (n)
      return y(v);
  }, [n, y, v]);
  const m = b.useMemo(
    () => ({
      colorMode: t ?? x,
      toggleColorMode: t ? Gv : h,
      setColorMode: t ? Gv : v,
      forced: t !== void 0
    }),
    [x, h, v, t]
  );
  return /* @__PURE__ */ T.jsx(hp.Provider, { value: m, children: r });
}
Xb.displayName = "ColorModeProvider";
function KP() {
  const e = pp(), t = Yb();
  return { ...e, theme: t };
}
var _e = (...e) => e.filter(Boolean).join(" ");
function rr(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function rn(e, ...t) {
  return YP(e) ? e(...t) : e;
}
var YP = (e) => typeof e == "function", q = (e) => e ? "" : void 0, Uc = (e) => e ? !0 : void 0;
function Fe(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function XP(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var Yl = { exports: {} };
Yl.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", g = "[object GeneratorFunction]", y = "[object Map]", x = "[object Number]", v = "[object Null]", h = "[object Object]", m = "[object Proxy]", w = "[object RegExp]", _ = "[object Set]", A = "[object String]", P = "[object Undefined]", $ = "[object WeakMap]", R = "[object ArrayBuffer]", I = "[object DataView]", U = "[object Float32Array]", ue = "[object Float64Array]", fe = "[object Int8Array]", Y = "[object Int16Array]", le = "[object Int32Array]", ge = "[object Uint8Array]", F = "[object Uint8ClampedArray]", z = "[object Uint16Array]", O = "[object Uint32Array]", W = /[\\^$.*+?()[\]{}|]/g, j = /^\[object .+?Constructor\]$/, ee = /^(?:0|[1-9]\d*)$/, H = {};
  H[U] = H[ue] = H[fe] = H[Y] = H[le] = H[ge] = H[F] = H[z] = H[O] = !0, H[s] = H[l] = H[R] = H[c] = H[I] = H[d] = H[f] = H[p] = H[y] = H[x] = H[h] = H[w] = H[_] = H[A] = H[$] = !1;
  var re = typeof hs == "object" && hs && hs.Object === Object && hs, wt = typeof self == "object" && self && self.Object === Object && self, xe = re || wt || Function("return this")(), Ie = t && !t.nodeType && t, Je = Ie && !0 && e && !e.nodeType && e, Ft = Je && Je.exports === Ie, kt = Ft && re.process, Dt = function() {
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
  function sm(S, k) {
    for (var E = -1, D = Array(S); ++E < S; )
      D[E] = k(E);
    return D;
  }
  function G(S) {
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
  var ao = Array.prototype, ik = Function.prototype, is = Object.prototype, ac = xe["__core-js_shared__"], as = ik.toString, xr = is.hasOwnProperty, lm = function() {
    var S = /[^.]+$/.exec(ac && ac.keys && ac.keys.IE_PROTO || "");
    return S ? "Symbol(src)_1." + S : "";
  }(), um = is.toString, ak = as.call(Object), sk = RegExp(
    "^" + as.call(xr).replace(W, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ss = Ft ? xe.Buffer : void 0, cm = xe.Symbol, dm = xe.Uint8Array, fm = ss ? ss.allocUnsafe : void 0, hm = Lt(Object.getPrototypeOf, Object), pm = Object.create, lk = is.propertyIsEnumerable, uk = ao.splice, Cn = cm ? cm.toStringTag : void 0, ls = function() {
    try {
      var S = uc(Object, "defineProperty");
      return S({}, "", {}), S;
    } catch {
    }
  }(), ck = ss ? ss.isBuffer : void 0, mm = Math.max, dk = Date.now, vm = uc(xe, "Map"), gi = uc(Object, "create"), fk = /* @__PURE__ */ function() {
    function S() {
    }
    return function(k) {
      if (!Pn(k))
        return {};
      if (pm)
        return pm(k);
      S.prototype = k;
      var E = new S();
      return S.prototype = void 0, E;
    };
  }();
  function _n(S) {
    var k = -1, E = S == null ? 0 : S.length;
    for (this.clear(); ++k < E; ) {
      var D = S[k];
      this.set(D[0], D[1]);
    }
  }
  function hk() {
    this.__data__ = gi ? gi(null) : {}, this.size = 0;
  }
  function pk(S) {
    var k = this.has(S) && delete this.__data__[S];
    return this.size -= k ? 1 : 0, k;
  }
  function mk(S) {
    var k = this.__data__;
    if (gi) {
      var E = k[S];
      return E === n ? void 0 : E;
    }
    return xr.call(k, S) ? k[S] : void 0;
  }
  function vk(S) {
    var k = this.__data__;
    return gi ? k[S] !== void 0 : xr.call(k, S);
  }
  function gk(S, k) {
    var E = this.__data__;
    return this.size += this.has(S) ? 0 : 1, E[S] = gi && k === void 0 ? n : k, this;
  }
  _n.prototype.clear = hk, _n.prototype.delete = pk, _n.prototype.get = mk, _n.prototype.has = vk, _n.prototype.set = gk;
  function wr(S) {
    var k = -1, E = S == null ? 0 : S.length;
    for (this.clear(); ++k < E; ) {
      var D = S[k];
      this.set(D[0], D[1]);
    }
  }
  function yk() {
    this.__data__ = [], this.size = 0;
  }
  function bk(S) {
    var k = this.__data__, E = us(k, S);
    if (E < 0)
      return !1;
    var D = k.length - 1;
    return E == D ? k.pop() : uk.call(k, E, 1), --this.size, !0;
  }
  function Sk(S) {
    var k = this.__data__, E = us(k, S);
    return E < 0 ? void 0 : k[E][1];
  }
  function xk(S) {
    return us(this.__data__, S) > -1;
  }
  function wk(S, k) {
    var E = this.__data__, D = us(E, S);
    return D < 0 ? (++this.size, E.push([S, k])) : E[D][1] = k, this;
  }
  wr.prototype.clear = yk, wr.prototype.delete = bk, wr.prototype.get = Sk, wr.prototype.has = xk, wr.prototype.set = wk;
  function so(S) {
    var k = -1, E = S == null ? 0 : S.length;
    for (this.clear(); ++k < E; ) {
      var D = S[k];
      this.set(D[0], D[1]);
    }
  }
  function kk() {
    this.size = 0, this.__data__ = {
      hash: new _n(),
      map: new (vm || wr)(),
      string: new _n()
    };
  }
  function Ck(S) {
    var k = ds(this, S).delete(S);
    return this.size -= k ? 1 : 0, k;
  }
  function _k(S) {
    return ds(this, S).get(S);
  }
  function Pk(S) {
    return ds(this, S).has(S);
  }
  function Tk(S, k) {
    var E = ds(this, S), D = E.size;
    return E.set(S, k), this.size += E.size == D ? 0 : 1, this;
  }
  so.prototype.clear = kk, so.prototype.delete = Ck, so.prototype.get = _k, so.prototype.has = Pk, so.prototype.set = Tk;
  function lo(S) {
    var k = this.__data__ = new wr(S);
    this.size = k.size;
  }
  function Ek() {
    this.__data__ = new wr(), this.size = 0;
  }
  function $k(S) {
    var k = this.__data__, E = k.delete(S);
    return this.size = k.size, E;
  }
  function Ak(S) {
    return this.__data__.get(S);
  }
  function Rk(S) {
    return this.__data__.has(S);
  }
  function Mk(S, k) {
    var E = this.__data__;
    if (E instanceof wr) {
      var D = E.__data__;
      if (!vm || D.length < r - 1)
        return D.push([S, k]), this.size = ++E.size, this;
      E = this.__data__ = new so(D);
    }
    return E.set(S, k), this.size = E.size, this;
  }
  lo.prototype.clear = Ek, lo.prototype.delete = $k, lo.prototype.get = Ak, lo.prototype.has = Rk, lo.prototype.set = Mk;
  function zk(S, k) {
    var E = fc(S), D = !E && dc(S), J = !E && !D && xm(S), he = !E && !D && !J && km(S), we = E || D || J || he, X = we ? sm(S.length, String) : [], ke = X.length;
    for (var Ot in S)
      (k || xr.call(S, Ot)) && !(we && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ot == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      J && (Ot == "offset" || Ot == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      he && (Ot == "buffer" || Ot == "byteLength" || Ot == "byteOffset") || // Skip index properties.
      bm(Ot, ke))) && X.push(Ot);
    return X;
  }
  function sc(S, k, E) {
    (E !== void 0 && !fs(S[k], E) || E === void 0 && !(k in S)) && lc(S, k, E);
  }
  function Ik(S, k, E) {
    var D = S[k];
    (!(xr.call(S, k) && fs(D, E)) || E === void 0 && !(k in S)) && lc(S, k, E);
  }
  function us(S, k) {
    for (var E = S.length; E--; )
      if (fs(S[E][0], k))
        return E;
    return -1;
  }
  function lc(S, k, E) {
    k == "__proto__" && ls ? ls(S, k, {
      configurable: !0,
      enumerable: !0,
      value: E,
      writable: !0
    }) : S[k] = E;
  }
  var Fk = Yk();
  function cs(S) {
    return S == null ? S === void 0 ? P : v : Cn && Cn in Object(S) ? Xk(S) : tC(S);
  }
  function gm(S) {
    return yi(S) && cs(S) == s;
  }
  function Dk(S) {
    if (!Pn(S) || Jk(S))
      return !1;
    var k = pc(S) ? sk : j;
    return k.test(iC(S));
  }
  function Lk(S) {
    return yi(S) && wm(S.length) && !!H[cs(S)];
  }
  function Ok(S) {
    if (!Pn(S))
      return eC(S);
    var k = Sm(S), E = [];
    for (var D in S)
      D == "constructor" && (k || !xr.call(S, D)) || E.push(D);
    return E;
  }
  function ym(S, k, E, D, J) {
    S !== k && Fk(k, function(he, we) {
      if (J || (J = new lo()), Pn(he))
        Nk(S, k, we, E, ym, D, J);
      else {
        var X = D ? D(cc(S, we), he, we + "", S, k, J) : void 0;
        X === void 0 && (X = he), sc(S, we, X);
      }
    }, Cm);
  }
  function Nk(S, k, E, D, J, he, we) {
    var X = cc(S, E), ke = cc(k, E), Ot = we.get(ke);
    if (Ot) {
      sc(S, E, Ot);
      return;
    }
    var Ct = he ? he(X, ke, E + "", S, k, we) : void 0, bi = Ct === void 0;
    if (bi) {
      var mc = fc(ke), vc = !mc && xm(ke), Pm = !mc && !vc && km(ke);
      Ct = ke, mc || vc || Pm ? fc(X) ? Ct = X : aC(X) ? Ct = Hk(X) : vc ? (bi = !1, Ct = Vk(ke, !0)) : Pm ? (bi = !1, Ct = Uk(ke, !0)) : Ct = [] : sC(ke) || dc(ke) ? (Ct = X, dc(X) ? Ct = lC(X) : (!Pn(X) || pc(X)) && (Ct = qk(ke))) : bi = !1;
    }
    bi && (we.set(ke, Ct), J(Ct, ke, D, he, we), we.delete(ke)), sc(S, E, Ct);
  }
  function Bk(S, k) {
    return nC(rC(S, k, _m), S + "");
  }
  var jk = ls ? function(S, k) {
    return ls(S, "toString", {
      configurable: !0,
      enumerable: !1,
      value: cC(k),
      writable: !0
    });
  } : _m;
  function Vk(S, k) {
    if (k)
      return S.slice();
    var E = S.length, D = fm ? fm(E) : new S.constructor(E);
    return S.copy(D), D;
  }
  function Wk(S) {
    var k = new S.constructor(S.byteLength);
    return new dm(k).set(new dm(S)), k;
  }
  function Uk(S, k) {
    var E = k ? Wk(S.buffer) : S.buffer;
    return new S.constructor(E, S.byteOffset, S.length);
  }
  function Hk(S, k) {
    var E = -1, D = S.length;
    for (k || (k = Array(D)); ++E < D; )
      k[E] = S[E];
    return k;
  }
  function Gk(S, k, E, D) {
    var J = !E;
    E || (E = {});
    for (var he = -1, we = k.length; ++he < we; ) {
      var X = k[he], ke = D ? D(E[X], S[X], X, E, S) : void 0;
      ke === void 0 && (ke = S[X]), J ? lc(E, X, ke) : Ik(E, X, ke);
    }
    return E;
  }
  function Kk(S) {
    return Bk(function(k, E) {
      var D = -1, J = E.length, he = J > 1 ? E[J - 1] : void 0, we = J > 2 ? E[2] : void 0;
      for (he = S.length > 3 && typeof he == "function" ? (J--, he) : void 0, we && Qk(E[0], E[1], we) && (he = J < 3 ? void 0 : he, J = 1), k = Object(k); ++D < J; ) {
        var X = E[D];
        X && S(k, X, D, he);
      }
      return k;
    });
  }
  function Yk(S) {
    return function(k, E, D) {
      for (var J = -1, he = Object(k), we = D(k), X = we.length; X--; ) {
        var ke = we[S ? X : ++J];
        if (E(he[ke], ke, he) === !1)
          break;
      }
      return k;
    };
  }
  function ds(S, k) {
    var E = S.__data__;
    return Zk(k) ? E[typeof k == "string" ? "string" : "hash"] : E.map;
  }
  function uc(S, k) {
    var E = ht(S, k);
    return Dk(E) ? E : void 0;
  }
  function Xk(S) {
    var k = xr.call(S, Cn), E = S[Cn];
    try {
      S[Cn] = void 0;
      var D = !0;
    } catch {
    }
    var J = um.call(S);
    return D && (k ? S[Cn] = E : delete S[Cn]), J;
  }
  function qk(S) {
    return typeof S.constructor == "function" && !Sm(S) ? fk(hm(S)) : {};
  }
  function bm(S, k) {
    var E = typeof S;
    return k = k ?? a, !!k && (E == "number" || E != "symbol" && ee.test(S)) && S > -1 && S % 1 == 0 && S < k;
  }
  function Qk(S, k, E) {
    if (!Pn(E))
      return !1;
    var D = typeof k;
    return (D == "number" ? hc(E) && bm(k, E.length) : D == "string" && k in E) ? fs(E[k], S) : !1;
  }
  function Zk(S) {
    var k = typeof S;
    return k == "string" || k == "number" || k == "symbol" || k == "boolean" ? S !== "__proto__" : S === null;
  }
  function Jk(S) {
    return !!lm && lm in S;
  }
  function Sm(S) {
    var k = S && S.constructor, E = typeof k == "function" && k.prototype || is;
    return S === E;
  }
  function eC(S) {
    var k = [];
    if (S != null)
      for (var E in Object(S))
        k.push(E);
    return k;
  }
  function tC(S) {
    return um.call(S);
  }
  function rC(S, k, E) {
    return k = mm(k === void 0 ? S.length - 1 : k, 0), function() {
      for (var D = arguments, J = -1, he = mm(D.length - k, 0), we = Array(he); ++J < he; )
        we[J] = D[k + J];
      J = -1;
      for (var X = Array(k + 1); ++J < k; )
        X[J] = D[J];
      return X[k] = E(we), io(S, this, X);
    };
  }
  function cc(S, k) {
    if (!(k === "constructor" && typeof S[k] == "function") && k != "__proto__")
      return S[k];
  }
  var nC = oC(jk);
  function oC(S) {
    var k = 0, E = 0;
    return function() {
      var D = dk(), J = i - (D - E);
      if (E = D, J > 0) {
        if (++k >= o)
          return arguments[0];
      } else
        k = 0;
      return S.apply(void 0, arguments);
    };
  }
  function iC(S) {
    if (S != null) {
      try {
        return as.call(S);
      } catch {
      }
      try {
        return S + "";
      } catch {
      }
    }
    return "";
  }
  function fs(S, k) {
    return S === k || S !== S && k !== k;
  }
  var dc = gm(/* @__PURE__ */ function() {
    return arguments;
  }()) ? gm : function(S) {
    return yi(S) && xr.call(S, "callee") && !lk.call(S, "callee");
  }, fc = Array.isArray;
  function hc(S) {
    return S != null && wm(S.length) && !pc(S);
  }
  function aC(S) {
    return yi(S) && hc(S);
  }
  var xm = ck || dC;
  function pc(S) {
    if (!Pn(S))
      return !1;
    var k = cs(S);
    return k == p || k == g || k == u || k == m;
  }
  function wm(S) {
    return typeof S == "number" && S > -1 && S % 1 == 0 && S <= a;
  }
  function Pn(S) {
    var k = typeof S;
    return S != null && (k == "object" || k == "function");
  }
  function yi(S) {
    return S != null && typeof S == "object";
  }
  function sC(S) {
    if (!yi(S) || cs(S) != h)
      return !1;
    var k = hm(S);
    if (k === null)
      return !0;
    var E = xr.call(k, "constructor") && k.constructor;
    return typeof E == "function" && E instanceof E && as.call(E) == ak;
  }
  var km = kn ? G(kn) : Lk;
  function lC(S) {
    return Gk(S, Cm(S));
  }
  function Cm(S) {
    return hc(S) ? zk(S, !0) : Ok(S);
  }
  var uC = Kk(function(S, k, E, D) {
    ym(S, k, E, D);
  });
  function cC(S) {
    return function() {
      return S;
    };
  }
  function _m(S) {
    return S;
  }
  function dC() {
    return !1;
  }
  e.exports = uC;
})(Yl, Yl.exports);
var qP = Yl.exports;
const hr = /* @__PURE__ */ uh(qP);
var QP = (e) => /!(important)?$/.test(e), Yv = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, ZP = (e, t) => (r) => {
  const n = String(t), o = QP(n), i = Yv(n), a = e ? `${e}.${i}` : i;
  let s = rr(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
  return s = Yv(s), o ? `${s} !important` : s;
};
function mp(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, a) => {
    var s;
    const l = ZP(t, i)(a);
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l;
    return n && (u = n(u, a)), u;
  };
}
var zs = (...e) => (t) => e.reduce((r, n) => n(r), t);
function Nt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = mp({
      scale: e,
      transform: t
    }), n;
  };
}
var JP = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function eT(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: JP(t),
    transform: r ? mp({
      scale: r,
      compose: n
    }) : n
  };
}
var qb = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function tT() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...qb
  ].join(" ");
}
function rT() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...qb
  ].join(" ");
}
var nT = {
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
}, oT = {
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
function iT(e) {
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
var aT = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Pf = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, sT = new Set(Object.values(Pf)), Tf = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), lT = (e) => e.trim();
function uT(e, t) {
  if (e == null || Tf.has(e))
    return e;
  if (!(Ef(e) || Tf.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(lT).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in Pf ? Pf[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (sT.has(f))
      return f;
    const p = f.indexOf(" "), [g, y] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], x = Ef(y) ? y : y && y.split(" "), v = `colors.${g}`, h = v in t.__cssMap ? t.__cssMap[v].varRef : g;
    return x ? [
      h,
      ...Array.isArray(x) ? x : [x]
    ].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var Ef = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), cT = (e, t) => uT(e, t ?? {});
function dT(e) {
  return /^var\(--.+\)$/.test(e);
}
var fT = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, ir = (e) => (t) => `${e}(${t})`, Q = {
  filter(e) {
    return e !== "auto" ? e : nT;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : oT;
  },
  ring(e) {
    return iT(Q.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? tT() : e === "auto-gpu" ? rT() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = fT(e);
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
    if (dT(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: cT,
  blur: ir("blur"),
  opacity: ir("opacity"),
  brightness: ir("brightness"),
  contrast: ir("contrast"),
  dropShadow: ir("drop-shadow"),
  grayscale: ir("grayscale"),
  hueRotate: (e) => ir("hue-rotate")(Q.degree(e)),
  invert: ir("invert"),
  saturate: ir("saturate"),
  sepia: ir("sepia"),
  bgImage(e) {
    return e == null || Ef(e) || Tf.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = aT[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, C = {
  borderWidths: Nt("borderWidths"),
  borderStyles: Nt("borderStyles"),
  colors: Nt("colors"),
  borders: Nt("borders"),
  gradients: Nt("gradients", Q.gradient),
  radii: Nt("radii", Q.px),
  space: Nt("space", zs(Q.vh, Q.px)),
  spaceT: Nt("space", zs(Q.vh, Q.px)),
  degreeT(e) {
    return { property: e, transform: Q.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: mp({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: Nt("sizes", zs(Q.vh, Q.px)),
  sizesT: Nt("sizes", zs(Q.vh, Q.fraction)),
  shadows: Nt("shadows"),
  logical: eT,
  blur: Nt("blur", Q.blur)
}, ul = {
  background: C.colors("background"),
  backgroundColor: C.colors("backgroundColor"),
  backgroundImage: C.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: Q.bgClip },
  bgSize: C.prop("backgroundSize"),
  bgPosition: C.prop("backgroundPosition"),
  bg: C.colors("background"),
  bgColor: C.colors("backgroundColor"),
  bgPos: C.prop("backgroundPosition"),
  bgRepeat: C.prop("backgroundRepeat"),
  bgAttachment: C.prop("backgroundAttachment"),
  bgGradient: C.gradients("backgroundImage"),
  bgClip: { transform: Q.bgClip }
};
Object.assign(ul, {
  bgImage: ul.backgroundImage,
  bgImg: ul.backgroundImage
});
var ne = {
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
Object.assign(ne, {
  rounded: ne.borderRadius,
  roundedTop: ne.borderTopRadius,
  roundedTopLeft: ne.borderTopLeftRadius,
  roundedTopRight: ne.borderTopRightRadius,
  roundedTopStart: ne.borderStartStartRadius,
  roundedTopEnd: ne.borderStartEndRadius,
  roundedBottom: ne.borderBottomRadius,
  roundedBottomLeft: ne.borderBottomLeftRadius,
  roundedBottomRight: ne.borderBottomRightRadius,
  roundedBottomStart: ne.borderEndStartRadius,
  roundedBottomEnd: ne.borderEndEndRadius,
  roundedLeft: ne.borderLeftRadius,
  roundedRight: ne.borderRightRadius,
  roundedStart: ne.borderInlineStartRadius,
  roundedEnd: ne.borderInlineEndRadius,
  borderStart: ne.borderInlineStart,
  borderEnd: ne.borderInlineEnd,
  borderTopStartRadius: ne.borderStartStartRadius,
  borderTopEndRadius: ne.borderStartEndRadius,
  borderBottomStartRadius: ne.borderEndStartRadius,
  borderBottomEndRadius: ne.borderEndEndRadius,
  borderStartRadius: ne.borderInlineStartRadius,
  borderEndRadius: ne.borderInlineEndRadius,
  borderStartWidth: ne.borderInlineStartWidth,
  borderEndWidth: ne.borderInlineEndWidth,
  borderStartColor: ne.borderInlineStartColor,
  borderEndColor: ne.borderInlineEndColor,
  borderStartStyle: ne.borderInlineStartStyle,
  borderEndStyle: ne.borderInlineEndStyle
});
var hT = {
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
var pT = {
  filter: { transform: Q.filter },
  blur: C.blur("--chakra-blur"),
  brightness: C.propT("--chakra-brightness", Q.brightness),
  contrast: C.propT("--chakra-contrast", Q.contrast),
  hueRotate: C.propT("--chakra-hue-rotate", Q.hueRotate),
  invert: C.propT("--chakra-invert", Q.invert),
  saturate: C.propT("--chakra-saturate", Q.saturate),
  dropShadow: C.propT("--chakra-drop-shadow", Q.dropShadow),
  backdropFilter: { transform: Q.backdropFilter },
  backdropBlur: C.blur("--chakra-backdrop-blur"),
  backdropBrightness: C.propT(
    "--chakra-backdrop-brightness",
    Q.brightness
  ),
  backdropContrast: C.propT("--chakra-backdrop-contrast", Q.contrast),
  backdropHueRotate: C.propT(
    "--chakra-backdrop-hue-rotate",
    Q.hueRotate
  ),
  backdropInvert: C.propT("--chakra-backdrop-invert", Q.invert),
  backdropSaturate: C.propT("--chakra-backdrop-saturate", Q.saturate)
}, Xl = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: Q.flexDirection },
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
Object.assign(Xl, {
  flexDir: Xl.flexDirection
});
var Qb = {
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
}, mT = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: Q.outline },
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
  float: C.propT("float", Q.float),
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
var vT = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: C.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: C.prop("listStyleImage")
};
function gT(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var yT = (e) => {
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
}, bT = yT(gT), ST = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, xT = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Hc = (e, t, r) => {
  const n = {}, o = bT(e, t, {});
  for (const i in o)
    i in r && r[i] != null || (n[i] = o[i]);
  return n;
}, wT = {
  srOnly: {
    transform(e) {
      return e === !0 ? ST : e === "focusable" ? xT : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => Hc(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => Hc(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => Hc(t, e, r)
  }
}, ea = {
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
Object.assign(ea, {
  insetStart: ea.insetInlineStart,
  insetEnd: ea.insetInlineEnd
});
var kT = {
  ring: { transform: Q.ring },
  ringColor: C.colors("--chakra-ring-color"),
  ringOffset: C.prop("--chakra-ring-offset-width"),
  ringOffsetColor: C.colors("--chakra-ring-offset-color"),
  ringInset: C.prop("--chakra-ring-inset")
}, be = {
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
Object.assign(be, {
  m: be.margin,
  mt: be.marginTop,
  mr: be.marginRight,
  me: be.marginInlineEnd,
  marginEnd: be.marginInlineEnd,
  mb: be.marginBottom,
  ml: be.marginLeft,
  ms: be.marginInlineStart,
  marginStart: be.marginInlineStart,
  mx: be.marginX,
  my: be.marginY,
  p: be.padding,
  pt: be.paddingTop,
  py: be.paddingY,
  px: be.paddingX,
  pb: be.paddingBottom,
  pl: be.paddingLeft,
  ps: be.paddingInlineStart,
  paddingStart: be.paddingInlineStart,
  pr: be.paddingRight,
  pe: be.paddingInlineEnd,
  paddingEnd: be.paddingInlineEnd
});
var CT = {
  textDecorationColor: C.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: C.shadows("textShadow")
}, _T = {
  clipPath: !0,
  transform: C.propT("transform", Q.transform),
  transformOrigin: !0,
  translateX: C.spaceT("--chakra-translate-x"),
  translateY: C.spaceT("--chakra-translate-y"),
  skewX: C.degreeT("--chakra-skew-x"),
  skewY: C.degreeT("--chakra-skew-y"),
  scaleX: C.prop("--chakra-scale-x"),
  scaleY: C.prop("--chakra-scale-y"),
  scale: C.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: C.degreeT("--chakra-rotate")
}, PT = {
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
}, TT = {
  fontFamily: C.prop("fontFamily", "fonts"),
  fontSize: C.prop("fontSize", "fontSizes", Q.px),
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
}, ET = {
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
function Zb(e) {
  return rr(e) && e.reference ? e.reference : String(e);
}
var Uu = (e, ...t) => t.map(Zb).join(` ${e} `).replace(/calc/g, ""), Xv = (...e) => `calc(${Uu("+", ...e)})`, qv = (...e) => `calc(${Uu("-", ...e)})`, Af = (...e) => `calc(${Uu("*", ...e)})`, Qv = (...e) => `calc(${Uu("/", ...e)})`, Zv = (e) => {
  const t = Zb(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Af(t, -1);
}, zn = Object.assign(
  (e) => ({
    add: (...t) => zn(Xv(e, ...t)),
    subtract: (...t) => zn(qv(e, ...t)),
    multiply: (...t) => zn(Af(e, ...t)),
    divide: (...t) => zn(Qv(e, ...t)),
    negate: () => zn(Zv(e)),
    toString: () => e.toString()
  }),
  {
    add: Xv,
    subtract: qv,
    multiply: Af,
    divide: Qv,
    negate: Zv
  }
);
function $T(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function AT(e) {
  const t = $T(e.toString());
  return MT(RT(t));
}
function RT(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function MT(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function zT(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function IT(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function FT(e, t = "") {
  return AT(`--${zT(e, t)}`);
}
function B(e, t, r) {
  const n = FT(e, r);
  return {
    variable: n,
    reference: IT(n, t)
  };
}
function DT(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, i] = n;
      r[o] = B(`${e}-${o}`, i);
      continue;
    }
    r[n] = B(`${e}-${n}`);
  }
  return r;
}
function LT(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function OT(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Rf(e) {
  if (e == null)
    return e;
  const { unitless: t } = OT(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var Jb = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, vp = (e) => Object.fromEntries(Object.entries(e).sort(Jb));
function Jv(e) {
  const t = vp(e);
  return Object.assign(Object.values(t), t);
}
function NT(e) {
  const t = Object.keys(vp(e));
  return new Set(t);
}
function eg(e) {
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
function BT(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = Jv(e), n = Object.entries(e).sort(Jb).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? eg(d) : void 0, {
      _minW: eg(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: Ni(null, d),
      minWQuery: Ni(s),
      minMaxQuery: Ni(s, d)
    };
  }), o = NT(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: vp(e),
    asArray: Jv(e),
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
      if (!rr(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; LT(s) === null; )
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
}, Ur = (e) => eS((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), kr = (e) => eS((t) => e(t, "~ &"), "[data-peer]", ".peer"), eS = (e, ...t) => t.map(e).join(", "), Hu = {
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
}, tS = Object.keys(
  Hu
);
function tg(e, t) {
  return B(String(e).replace(/\./g, "-"), void 0, t);
}
function jT(e, t) {
  let r = {};
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = tg(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...g] = f, y = `${p}.-${g.join(".")}`, x = zn.negate(s), v = zn.negate(u);
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
      const g = [String(o).split(".")[0], f].join(".");
      if (!e[g])
        return f;
      const { reference: x } = tg(g, t == null ? void 0 : t.cssVarPrefix);
      return x;
    }, d = rr(s) ? s : { default: s };
    r = hr(
      r,
      Object.entries(d).reduce(
        (f, [p, g]) => {
          var y, x;
          if (!g)
            return f;
          const v = c(`${g}`);
          if (p === "default")
            return f[l] = v, f;
          const h = (x = (y = Hu) == null ? void 0 : y[p]) != null ? x : p;
          return f[h] = { [l]: v }, f;
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
function VT(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function WT(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function UT(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function rg(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function i(a, s = []) {
    var l;
    if (UT(a) || Array.isArray(a)) {
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
var HT = [
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
function GT(e) {
  return WT(e, HT);
}
function KT(e) {
  return e.semanticTokens;
}
function YT(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var XT = (e) => tS.includes(e) || e === "default";
function qT({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return rg(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), rg(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(XT)
    }
  ), r;
}
function QT(e) {
  var t;
  const r = YT(e), n = GT(r), o = KT(r), i = qT({ tokens: n, semanticTokens: o }), a = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = jT(i, { cssVarPrefix: a });
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
    __breakpoints: BT(r.breakpoints)
  }), r;
}
var gp = hr(
  {},
  ul,
  ne,
  hT,
  Xl,
  jt,
  pT,
  kT,
  mT,
  Qb,
  wT,
  ea,
  $f,
  be,
  ET,
  TT,
  CT,
  _T,
  vT,
  PT
);
Object.assign({}, be, jt, Xl, Qb, ea);
var ZT = [...Object.keys(gp), ...tS], JT = { ...gp, ...Hu }, eE = (e) => e in JT, tE = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = rn(e[a], t);
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
function rE(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (n = !0, r += i) : i === ")" ? (n = !1, r += i) : i === "," && !n ? (t.push(r), r = "") : r += i;
  }
  return r = r.trim(), r && t.push(r), t;
}
function nE(e) {
  return /^var\(--.+\)$/.test(e);
}
var oE = (e, t) => e.startsWith("--") && typeof t == "string" && !nE(t), iE = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = rE(t);
  return t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t), t;
};
function aE(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = rn(i, n), d = tE(c)(n);
    let f = {};
    for (let p in d) {
      const g = d[p];
      let y = rn(g, n);
      p in r && (p = r[p]), oE(p, y) && (y = iE(n, y));
      let x = t[p];
      if (x === !0 && (x = { property: p }), rr(y)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = hr(
          {},
          f[p],
          o(y, !0)
        );
        continue;
      }
      let v = (u = (l = x == null ? void 0 : x.transform) == null ? void 0 : l.call(x, y, n, c)) != null ? u : y;
      v = x != null && x.processResult ? o(v, !0) : v;
      const h = rn(x == null ? void 0 : x.property, n);
      if (!a && (x != null && x.static)) {
        const m = rn(x.static, n);
        f = hr({}, f, m);
      }
      if (h && Array.isArray(h)) {
        for (const m of h)
          f[m] = v;
        continue;
      }
      if (h) {
        h === "&" && rr(v) ? f = hr({}, f, v) : f[h] = v;
        continue;
      }
      if (rr(v)) {
        f = hr({}, f, v);
        continue;
      }
      f[p] = v;
    }
    return f;
  };
  return o;
}
var rS = (e) => (t) => aE({
  theme: t,
  pseudos: Hu,
  configs: gp
})(e);
function ve(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function sE(e, t) {
  if (Array.isArray(e))
    return e;
  if (rr(e))
    return t(e);
  if (e != null)
    return [e];
}
function lE(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function uE(e) {
  const t = e.__breakpoints;
  return function(n, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = sE(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!n.parts;
    for (let g = 0; g < d; g++) {
      const y = t.details[g], x = t.details[lE(c, g)], v = Ni(y.minW, x == null ? void 0 : x._minW), h = rn((s = n[o]) == null ? void 0 : s[c[g]], a);
      if (h) {
        if (p) {
          (l = n.parts) == null || l.forEach((m) => {
            hr(u, {
              [m]: f ? h[m] : { [v]: h[m] }
            });
          });
          continue;
        }
        if (!p) {
          f ? hr(u, h) : u[v] = h;
          continue;
        }
        u[v] = h;
      }
    }
    return u;
  };
}
function cE(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: i } = t, a = uE(i);
    return hr(
      {},
      rn((r = e.baseStyle) != null ? r : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", n, t)
    );
  };
}
function xn(e) {
  return VT(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var dE = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, fE = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, hE = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, pE = {
  property: dE,
  easing: fE,
  duration: hE
}, mE = pE, vE = {
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
}, gE = vE, yE = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, bE = yE, SE = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, xE = SE, wE = {
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
}, kE = wE, CE = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, _E = CE, PE = {
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
}, TE = PE, EE = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, $E = EE, AE = {
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
}, nS = AE, oS = {
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
}, RE = {
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
}, ME = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, zE = {
  ...oS,
  ...RE,
  container: ME
}, iS = zE, IE = {
  breakpoints: xE,
  zIndices: gE,
  radii: _E,
  blur: $E,
  colors: kE,
  ...nS,
  sizes: iS,
  shadows: TE,
  space: oS,
  borders: bE,
  transition: mE
}, { defineMultiStyleConfig: FE, definePartsStyle: Bi } = ve([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Pr = B("stepper-indicator-size"), Eo = B("stepper-icon-size"), $o = B("stepper-title-font-size"), ji = B("stepper-description-font-size"), $i = B("stepper-accent-color"), DE = Bi(({ colorScheme: e }) => ({
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
    width: Pr.reference,
    height: Pr.reference,
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
      maxHeight: `calc(100% - ${Pr.reference} - 8px)`,
      top: `calc(${Pr.reference} + 4px)`,
      insetStart: `calc(${Pr.reference} / 2 - 1px)`
    }
  }
})), LE = FE({
  baseStyle: DE,
  sizes: {
    xs: Bi({
      stepper: {
        [Pr.variable]: "sizes.4",
        [Eo.variable]: "sizes.3",
        [$o.variable]: "fontSizes.xs",
        [ji.variable]: "fontSizes.xs"
      }
    }),
    sm: Bi({
      stepper: {
        [Pr.variable]: "sizes.6",
        [Eo.variable]: "sizes.4",
        [$o.variable]: "fontSizes.sm",
        [ji.variable]: "fontSizes.xs"
      }
    }),
    md: Bi({
      stepper: {
        [Pr.variable]: "sizes.8",
        [Eo.variable]: "sizes.5",
        [$o.variable]: "fontSizes.md",
        [ji.variable]: "fontSizes.sm"
      }
    }),
    lg: Bi({
      stepper: {
        [Pr.variable]: "sizes.10",
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
function se(e, t = {}) {
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
    return se(e, t);
  }
  function i(...c) {
    for (const d of c)
      d in t || (t[d] = l(d));
    return se(e, t);
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
var OE = se("accordion").parts("root", "container", "button", "panel").extend("icon"), NE = se("alert").parts("title", "description", "container").extend("icon", "spinner"), BE = se("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), jE = se("breadcrumb").parts("link", "item", "container").extend("separator");
se("button").parts();
var VE = se("checkbox").parts("control", "icon", "container").extend("label");
se("progress").parts("track", "filledTrack").extend("label");
var WE = se("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), UE = se("editable").parts(
  "preview",
  "input",
  "textarea"
), HE = se("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), GE = se("formError").parts("text", "icon"), KE = se("input").parts(
  "addon",
  "field",
  "element",
  "group"
), YE = se("list").parts("container", "item", "icon"), XE = se("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), qE = se("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), QE = se("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
se("pininput").parts("field");
var ZE = se("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), JE = se("progress").parts(
  "label",
  "filledTrack",
  "track"
), e$ = se("radio").parts(
  "container",
  "control",
  "label"
), t$ = se("select").parts("field", "icon"), r$ = se("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), n$ = se("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), o$ = se("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), i$ = se("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), a$ = se("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), s$ = se("tag").parts(
  "container",
  "label",
  "closeButton"
), l$ = se("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
se("stepper").parts(
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
class u$ extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Vi = u$;
function yp(e) {
  if (typeof e != "string")
    throw new Vi(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = g$.test(e) ? f$(e) : e;
  const r = h$.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(Ma(s, 2), 16)), parseInt(Ma(a[3] || "f", 2), 16) / 255];
  }
  const n = p$.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = m$.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = v$.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (On(0, 100, s) !== s)
      throw new Vi(e);
    if (On(0, 100, l) !== l)
      throw new Vi(e);
    return [...y$(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Vi(e);
}
function c$(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const ng = (e) => parseInt(e.replace(/_/g, ""), 36), d$ = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = ng(t.substring(0, 3)), n = ng(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - n.length; i++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function f$(e) {
  const t = e.toLowerCase().trim(), r = d$[c$(t)];
  if (!r)
    throw new Vi(e);
  return `#${r}`;
}
const Ma = (e, t) => Array.from(Array(t)).map(() => e).join(""), h$ = new RegExp(`^#${Ma("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), p$ = new RegExp(`^#${Ma("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), m$ = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Ma(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), v$ = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, g$ = /^[a-z]+$/i, og = (e) => Math.round(e * 255), y$ = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(og);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = n - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(og);
};
function b$(e, t, r, n) {
  return `rgba(${On(0, 255, e).toFixed()}, ${On(0, 255, t).toFixed()}, ${On(0, 255, r).toFixed()}, ${parseFloat(On(0, 1, n).toFixed(3))})`;
}
function S$(e, t) {
  const [r, n, o, i] = yp(e);
  return b$(r, n, o, i - t);
}
function x$(e) {
  const [t, r, n, o] = yp(e);
  let i = (a) => {
    const s = On(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function w$(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var k$ = (e) => Object.keys(e).length === 0, lt = (e, t, r) => {
  const n = w$(e, `colors.${t}`, t);
  try {
    return x$(n), n;
  } catch {
    return r ?? "#000000";
  }
}, C$ = (e) => {
  const [t, r, n] = yp(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, _$ = (e) => (t) => {
  const r = lt(t, e);
  return C$(r) < 128 ? "dark" : "light";
}, P$ = (e) => (t) => _$(e)(t) === "dark", si = (e, t) => (r) => {
  const n = lt(r, e);
  return S$(n, 1 - t);
};
function ig(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var T$ = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function E$(e) {
  const t = T$();
  return !e || k$(e) ? t : e.string && e.colors ? A$(e.string, e.colors) : e.string && !e.colors ? $$(e.string) : e.colors && !e.string ? R$(e.colors) : t;
}
function $$(e) {
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
function A$(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function R$(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function N(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function bp(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function aS(e) {
  return rr(e) && e.reference ? e.reference : String(e);
}
var Gu = (e, ...t) => t.map(aS).join(` ${e} `).replace(/calc/g, ""), ag = (...e) => `calc(${Gu("+", ...e)})`, sg = (...e) => `calc(${Gu("-", ...e)})`, Mf = (...e) => `calc(${Gu("*", ...e)})`, lg = (...e) => `calc(${Gu("/", ...e)})`, ug = (e) => {
  const t = aS(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Mf(t, -1);
}, Tr = Object.assign(
  (e) => ({
    add: (...t) => Tr(ag(e, ...t)),
    subtract: (...t) => Tr(sg(e, ...t)),
    multiply: (...t) => Tr(Mf(e, ...t)),
    divide: (...t) => Tr(lg(e, ...t)),
    negate: () => Tr(ug(e)),
    toString: () => e.toString()
  }),
  {
    add: ag,
    subtract: sg,
    multiply: Mf,
    divide: lg,
    negate: ug
  }
);
function M$(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function z$(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function sS(e) {
  const t = z$(e.toString());
  return t.includes("\\.") ? e : M$(e) ? t.replace(".", "\\.") : e;
}
function I$(e, t = "") {
  return [t, sS(e)].filter(Boolean).join("-");
}
function F$(e, t) {
  return `var(${sS(e)}${t ? `, ${t}` : ""})`;
}
function D$(e, t = "") {
  return `--${I$(e, t)}`;
}
function We(e, t) {
  const r = D$(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: F$(r, L$(t == null ? void 0 : t.fallback))
  };
}
function L$(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: O$, definePartsStyle: cl } = ve(o$.keys), ta = We("switch-track-width"), Wn = We("switch-track-height"), Gc = We("switch-track-diff"), N$ = Tr.subtract(ta, Wn), zf = We("switch-thumb-x"), Ai = We("switch-bg"), B$ = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [ta.reference],
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
}, j$ = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Wn.reference],
  height: [Wn.reference],
  _checked: {
    transform: `translateX(${zf.reference})`
  }
}, V$ = cl((e) => ({
  container: {
    [Gc.variable]: N$,
    [zf.variable]: Gc.reference,
    _rtl: {
      [zf.variable]: Tr(Gc).negate().toString()
    }
  },
  track: B$(e),
  thumb: j$
})), W$ = {
  sm: cl({
    container: {
      [ta.variable]: "1.375rem",
      [Wn.variable]: "sizes.3"
    }
  }),
  md: cl({
    container: {
      [ta.variable]: "1.875rem",
      [Wn.variable]: "sizes.4"
    }
  }),
  lg: cl({
    container: {
      [ta.variable]: "2.875rem",
      [Wn.variable]: "sizes.6"
    }
  })
}, U$ = O$({
  baseStyle: V$,
  sizes: W$,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: H$, definePartsStyle: Go } = ve(i$.keys), G$ = Go({
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
}), ql = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, K$ = Go((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: N("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: N(`${t}.100`, `${t}.700`)(e),
      ...ql
    },
    td: {
      borderBottom: "1px",
      borderColor: N(`${t}.100`, `${t}.700`)(e),
      ...ql
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
}), Y$ = Go((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: N("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: N(`${t}.100`, `${t}.700`)(e),
      ...ql
    },
    td: {
      borderBottom: "1px",
      borderColor: N(`${t}.100`, `${t}.700`)(e),
      ...ql
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
}), X$ = {
  simple: K$,
  striped: Y$,
  unstyled: {}
}, q$ = {
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
}, Q$ = H$({
  baseStyle: G$,
  variants: X$,
  sizes: q$,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), mt = B("tabs-color"), Jt = B("tabs-bg"), Is = B("tabs-border-color"), { defineMultiStyleConfig: Z$, definePartsStyle: gr } = ve(a$.keys), J$ = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, e5 = (e) => {
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
}, t5 = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, r5 = {
  p: 4
}, n5 = gr((e) => ({
  root: J$(e),
  tab: e5(e),
  tablist: t5(e),
  tabpanel: r5
})), o5 = {
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
}, i5 = gr((e) => {
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
        [Jt.variable]: "colors.gray.200",
        _dark: {
          [Jt.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: mt.reference,
      bg: Jt.reference
    }
  };
}), a5 = gr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Is.variable]: "transparent",
      _selected: {
        [mt.variable]: `colors.${t}.600`,
        [Is.variable]: "colors.white",
        _dark: {
          [mt.variable]: `colors.${t}.300`,
          [Is.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Is.reference
      },
      color: mt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), s5 = gr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [Jt.variable]: "colors.gray.50",
      _dark: {
        [Jt.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [Jt.variable]: "colors.white",
        [mt.variable]: `colors.${t}.600`,
        _dark: {
          [Jt.variable]: "colors.gray.800",
          [mt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: mt.reference,
      bg: Jt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), l5 = gr((e) => {
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
}), u5 = gr((e) => {
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
        [Jt.variable]: `colors.${t}.600`,
        _dark: {
          [mt.variable]: "colors.gray.800",
          [Jt.variable]: `colors.${t}.300`
        }
      },
      color: mt.reference,
      bg: Jt.reference
    }
  };
}), c5 = gr({}), d5 = {
  line: i5,
  enclosed: a5,
  "enclosed-colored": s5,
  "soft-rounded": l5,
  "solid-rounded": u5,
  unstyled: c5
}, f5 = Z$({
  baseStyle: n5,
  sizes: o5,
  variants: d5,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Le = DT("badge", ["bg", "color", "shadow"]), h5 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Le.bg.reference,
  color: Le.color.reference,
  boxShadow: Le.shadow.reference
}, p5 = (e) => {
  const { colorScheme: t, theme: r } = e, n = si(`${t}.500`, 0.6)(r);
  return {
    [Le.bg.variable]: `colors.${t}.500`,
    [Le.color.variable]: "colors.white",
    _dark: {
      [Le.bg.variable]: n,
      [Le.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, m5 = (e) => {
  const { colorScheme: t, theme: r } = e, n = si(`${t}.200`, 0.16)(r);
  return {
    [Le.bg.variable]: `colors.${t}.100`,
    [Le.color.variable]: `colors.${t}.800`,
    _dark: {
      [Le.bg.variable]: n,
      [Le.color.variable]: `colors.${t}.200`
    }
  };
}, v5 = (e) => {
  const { colorScheme: t, theme: r } = e, n = si(`${t}.200`, 0.8)(r);
  return {
    [Le.color.variable]: `colors.${t}.500`,
    _dark: {
      [Le.color.variable]: n
    },
    [Le.shadow.variable]: `inset 0 0 0px 1px ${Le.color.reference}`
  };
}, g5 = {
  solid: p5,
  subtle: m5,
  outline: v5
}, ra = {
  baseStyle: h5,
  variants: g5,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: y5, definePartsStyle: Un } = ve(s$.keys), cg = B("tag-bg"), dg = B("tag-color"), Kc = B("tag-shadow"), dl = B("tag-min-height"), fl = B("tag-min-width"), hl = B("tag-font-size"), pl = B("tag-padding-inline"), b5 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [dg.variable]: Le.color.reference,
  [cg.variable]: Le.bg.reference,
  [Kc.variable]: Le.shadow.reference,
  color: dg.reference,
  bg: cg.reference,
  boxShadow: Kc.reference,
  borderRadius: "md",
  minH: dl.reference,
  minW: fl.reference,
  fontSize: hl.reference,
  px: pl.reference,
  _focusVisible: {
    [Kc.variable]: "shadows.outline"
  }
}, S5 = {
  lineHeight: 1.2,
  overflow: "visible"
}, x5 = {
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
}, w5 = Un({
  container: b5,
  label: S5,
  closeButton: x5
}), k5 = {
  sm: Un({
    container: {
      [dl.variable]: "sizes.5",
      [fl.variable]: "sizes.5",
      [hl.variable]: "fontSizes.xs",
      [pl.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Un({
    container: {
      [dl.variable]: "sizes.6",
      [fl.variable]: "sizes.6",
      [hl.variable]: "fontSizes.sm",
      [pl.variable]: "space.2"
    }
  }),
  lg: Un({
    container: {
      [dl.variable]: "sizes.8",
      [fl.variable]: "sizes.8",
      [hl.variable]: "fontSizes.md",
      [pl.variable]: "space.3"
    }
  })
}, C5 = {
  subtle: Un((e) => {
    var t;
    return {
      container: (t = ra.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: Un((e) => {
    var t;
    return {
      container: (t = ra.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: Un((e) => {
    var t;
    return {
      container: (t = ra.variants) == null ? void 0 : t.outline(e)
    };
  })
}, _5 = y5({
  variants: C5,
  baseStyle: w5,
  sizes: k5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Ar, defineMultiStyleConfig: P5 } = ve(KE.keys), Ao = B("input-height"), Ro = B("input-font-size"), Mo = B("input-padding"), zo = B("input-border-radius"), T5 = Ar({
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
}, E5 = {
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
function Sp(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || N("blue.500", "blue.300")(e),
    errorBorderColor: r || N("red.500", "red.300")(e)
  };
}
var $5 = Ar((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Sp(e);
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
      borderColor: N("inherit", "whiteAlpha.50")(e),
      bg: N("gray.100", "whiteAlpha.300")(e)
    }
  };
}), A5 = Ar((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Sp(e);
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
      bg: N("gray.100", "whiteAlpha.50")(e)
    }
  };
}), R5 = Ar((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Sp(e);
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
}), M5 = Ar({
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
}), z5 = {
  outline: $5,
  filled: A5,
  flushed: R5,
  unstyled: M5
}, ae = P5({
  baseStyle: T5,
  sizes: E5,
  variants: z5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), fg, I5 = {
  ...(fg = ae.baseStyle) == null ? void 0 : fg.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, hg, pg, F5 = {
  outline: (e) => {
    var t, r;
    return (r = (t = ae.variants) == null ? void 0 : t.outline(e).field) != null ? r : {};
  },
  flushed: (e) => {
    var t, r;
    return (r = (t = ae.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {};
  },
  filled: (e) => {
    var t, r;
    return (r = (t = ae.variants) == null ? void 0 : t.filled(e).field) != null ? r : {};
  },
  unstyled: (pg = (hg = ae.variants) == null ? void 0 : hg.unstyled.field) != null ? pg : {}
}, mg, vg, gg, yg, bg, Sg, xg, wg, D5 = {
  xs: (vg = (mg = ae.sizes) == null ? void 0 : mg.xs.field) != null ? vg : {},
  sm: (yg = (gg = ae.sizes) == null ? void 0 : gg.sm.field) != null ? yg : {},
  md: (Sg = (bg = ae.sizes) == null ? void 0 : bg.md.field) != null ? Sg : {},
  lg: (wg = (xg = ae.sizes) == null ? void 0 : xg.lg.field) != null ? wg : {}
}, L5 = {
  baseStyle: I5,
  sizes: D5,
  variants: F5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, Fs = We("tooltip-bg"), Yc = We("tooltip-fg"), O5 = We("popper-arrow-bg"), N5 = {
  bg: Fs.reference,
  color: Yc.reference,
  [Fs.variable]: "colors.gray.700",
  [Yc.variable]: "colors.whiteAlpha.900",
  _dark: {
    [Fs.variable]: "colors.gray.300",
    [Yc.variable]: "colors.gray.900"
  },
  [O5.variable]: Fs.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, B5 = {
  baseStyle: N5
}, { defineMultiStyleConfig: j5, definePartsStyle: Wi } = ve(JE.keys), V5 = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, i = N(
    ig(),
    ig("1rem", "rgba(0,0,0,0.1)")
  )(e), a = N(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${lt(r, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && i,
    ...n ? { bgImage: s } : { bgColor: a }
  };
}, W5 = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, U5 = (e) => ({
  bg: N("gray.100", "whiteAlpha.300")(e)
}), H5 = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...V5(e)
}), G5 = Wi((e) => ({
  label: W5,
  filledTrack: H5(e),
  track: U5(e)
})), K5 = {
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
}, Y5 = j5({
  sizes: K5,
  baseStyle: G5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), X5 = (e) => typeof e == "function";
function ct(e, ...t) {
  return X5(e) ? e(...t) : e;
}
var { definePartsStyle: ml, defineMultiStyleConfig: q5 } = ve(VE.keys), na = B("checkbox-size"), Q5 = (e) => {
  const { colorScheme: t } = e;
  return {
    w: na.reference,
    h: na.reference,
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
}, Z5 = {
  _disabled: { cursor: "not-allowed" }
}, J5 = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, eA = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, tA = ml((e) => ({
  icon: eA,
  container: Z5,
  control: ct(Q5, e),
  label: J5
})), rA = {
  sm: ml({
    control: { [na.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: ml({
    control: { [na.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: ml({
    control: { [na.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Ql = q5({
  baseStyle: tA,
  sizes: rA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: nA, definePartsStyle: vl } = ve(e$.keys), oA = (e) => {
  var t;
  const r = (t = ct(Ql.baseStyle, e)) == null ? void 0 : t.control;
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
}, iA = vl((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = Ql).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = Ql).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: oA(e)
  };
}), aA = {
  md: vl({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: vl({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: vl({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, sA = nA({
  baseStyle: iA,
  sizes: aA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: lA, definePartsStyle: uA } = ve(t$.keys), Ds = B("select-bg"), kg, cA = {
  ...(kg = ae.baseStyle) == null ? void 0 : kg.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: Ds.reference,
  [Ds.variable]: "colors.white",
  _dark: {
    [Ds.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: Ds.reference
  }
}, dA = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, fA = uA({
  field: cA,
  icon: dA
}), Ls = {
  paddingInlineEnd: "8"
}, Cg, _g, Pg, Tg, Eg, $g, Ag, Rg, hA = {
  lg: {
    ...(Cg = ae.sizes) == null ? void 0 : Cg.lg,
    field: {
      ...(_g = ae.sizes) == null ? void 0 : _g.lg.field,
      ...Ls
    }
  },
  md: {
    ...(Pg = ae.sizes) == null ? void 0 : Pg.md,
    field: {
      ...(Tg = ae.sizes) == null ? void 0 : Tg.md.field,
      ...Ls
    }
  },
  sm: {
    ...(Eg = ae.sizes) == null ? void 0 : Eg.sm,
    field: {
      ...($g = ae.sizes) == null ? void 0 : $g.sm.field,
      ...Ls
    }
  },
  xs: {
    ...(Ag = ae.sizes) == null ? void 0 : Ag.xs,
    field: {
      ...(Rg = ae.sizes) == null ? void 0 : Rg.xs.field,
      ...Ls
    },
    icon: {
      insetEnd: "1"
    }
  }
}, pA = lA({
  baseStyle: fA,
  sizes: hA,
  variants: ae.variants,
  defaultProps: ae.defaultProps
}), Xc = B("skeleton-start-color"), qc = B("skeleton-end-color"), mA = {
  [Xc.variable]: "colors.gray.100",
  [qc.variable]: "colors.gray.400",
  _dark: {
    [Xc.variable]: "colors.gray.800",
    [qc.variable]: "colors.gray.600"
  },
  background: Xc.reference,
  borderColor: qc.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, vA = {
  baseStyle: mA
}, Qc = B("skip-link-bg"), gA = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Qc.variable]: "colors.white",
    _dark: {
      [Qc.variable]: "colors.gray.700"
    },
    bg: Qc.reference
  }
}, yA = {
  baseStyle: gA
}, { defineMultiStyleConfig: bA, definePartsStyle: Ku } = ve(r$.keys), za = B("slider-thumb-size"), Ia = B("slider-track-size"), Jr = B("slider-bg"), SA = (e) => {
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
    ...bp({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, xA = (e) => ({
  ...bp({
    orientation: e.orientation,
    horizontal: { h: Ia.reference },
    vertical: { w: Ia.reference }
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
}), wA = (e) => {
  const { orientation: t } = e;
  return {
    ...bp({
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
    w: za.reference,
    h: za.reference,
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
}, kA = (e) => {
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
}, CA = Ku((e) => ({
  container: SA(e),
  track: xA(e),
  thumb: wA(e),
  filledTrack: kA(e)
})), _A = Ku({
  container: {
    [za.variable]: "sizes.4",
    [Ia.variable]: "sizes.1"
  }
}), PA = Ku({
  container: {
    [za.variable]: "sizes.3.5",
    [Ia.variable]: "sizes.1"
  }
}), TA = Ku({
  container: {
    [za.variable]: "sizes.2.5",
    [Ia.variable]: "sizes.0.5"
  }
}), EA = {
  lg: _A,
  md: PA,
  sm: TA
}, $A = bA({
  baseStyle: CA,
  sizes: EA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), In = We("spinner-size"), AA = {
  width: [In.reference],
  height: [In.reference]
}, RA = {
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
}, MA = {
  baseStyle: AA,
  sizes: RA,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: zA, definePartsStyle: lS } = ve(n$.keys), IA = {
  fontWeight: "medium"
}, FA = {
  opacity: 0.8,
  marginBottom: "2"
}, DA = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, LA = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, OA = lS({
  container: {},
  label: IA,
  helpText: FA,
  number: DA,
  icon: LA
}), NA = {
  md: lS({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, BA = zA({
  baseStyle: OA,
  sizes: NA,
  defaultProps: {
    size: "md"
  }
}), Zc = B("kbd-bg"), jA = {
  [Zc.variable]: "colors.gray.100",
  _dark: {
    [Zc.variable]: "colors.whiteAlpha.100"
  },
  bg: Zc.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, VA = {
  baseStyle: jA
}, WA = {
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
}, UA = {
  baseStyle: WA
}, { defineMultiStyleConfig: HA, definePartsStyle: GA } = ve(YE.keys), KA = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, YA = GA({
  icon: KA
}), XA = HA({
  baseStyle: YA
}), { defineMultiStyleConfig: qA, definePartsStyle: QA } = ve(XE.keys), lr = B("menu-bg"), Jc = B("menu-shadow"), ZA = {
  [lr.variable]: "#fff",
  [Jc.variable]: "shadows.sm",
  _dark: {
    [lr.variable]: "colors.gray.700",
    [Jc.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: lr.reference,
  boxShadow: Jc.reference
}, JA = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [lr.variable]: "colors.gray.100",
    _dark: {
      [lr.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [lr.variable]: "colors.gray.200",
    _dark: {
      [lr.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [lr.variable]: "colors.gray.100",
    _dark: {
      [lr.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: lr.reference
}, eR = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, tR = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, rR = {
  opacity: 0.6
}, nR = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, oR = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, iR = QA({
  button: oR,
  list: ZA,
  item: JA,
  groupTitle: eR,
  icon: tR,
  command: rR,
  divider: nR
}), aR = qA({
  baseStyle: iR
}), { defineMultiStyleConfig: sR, definePartsStyle: If } = ve(qE.keys), ed = B("modal-bg"), td = B("modal-shadow"), lR = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, uR = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, cR = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [ed.variable]: "colors.white",
    [td.variable]: "shadows.lg",
    _dark: {
      [ed.variable]: "colors.gray.700",
      [td.variable]: "shadows.dark-lg"
    },
    bg: ed.reference,
    boxShadow: td.reference
  };
}, dR = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, fR = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, hR = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, pR = {
  px: "6",
  py: "4"
}, mR = If((e) => ({
  overlay: lR,
  dialogContainer: ct(uR, e),
  dialog: ct(cR, e),
  header: dR,
  closeButton: fR,
  body: ct(hR, e),
  footer: pR
}));
function Xt(e) {
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
var vR = {
  xs: Xt("xs"),
  sm: Xt("sm"),
  md: Xt("md"),
  lg: Xt("lg"),
  xl: Xt("xl"),
  "2xl": Xt("2xl"),
  "3xl": Xt("3xl"),
  "4xl": Xt("4xl"),
  "5xl": Xt("5xl"),
  "6xl": Xt("6xl"),
  full: Xt("full")
}, gR = sR({
  baseStyle: mR,
  sizes: vR,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: yR, definePartsStyle: uS } = ve(QE.keys), xp = We("number-input-stepper-width"), cS = We("number-input-input-padding"), bR = Tr(xp).add("0.5rem").toString(), rd = We("number-input-bg"), nd = We("number-input-color"), od = We("number-input-border-color"), SR = {
  [xp.variable]: "sizes.6",
  [cS.variable]: bR
}, xR = (e) => {
  var t, r;
  return (r = (t = ct(ae.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, wR = {
  width: xp.reference
}, kR = {
  borderStart: "1px solid",
  borderStartColor: od.reference,
  color: nd.reference,
  bg: rd.reference,
  [nd.variable]: "colors.chakra-body-text",
  [od.variable]: "colors.chakra-border-color",
  _dark: {
    [nd.variable]: "colors.whiteAlpha.800",
    [od.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [rd.variable]: "colors.gray.200",
    _dark: {
      [rd.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, CR = uS((e) => {
  var t;
  return {
    root: SR,
    field: (t = ct(xR, e)) != null ? t : {},
    stepperGroup: wR,
    stepper: kR
  };
});
function Os(e) {
  var t, r, n;
  const o = (t = ae.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = nS.fontSizes[a];
  return uS({
    field: {
      ...o.field,
      paddingInlineEnd: cS.reference,
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
var _R = {
  xs: Os("xs"),
  sm: Os("sm"),
  md: Os("md"),
  lg: Os("lg")
}, PR = yR({
  baseStyle: CR,
  sizes: _R,
  variants: ae.variants,
  defaultProps: ae.defaultProps
}), Mg, TR = {
  ...(Mg = ae.baseStyle) == null ? void 0 : Mg.field,
  textAlign: "center"
}, ER = {
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
}, zg, Ig, $R = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = ct((t = ae.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = ct((t = ae.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = ct((t = ae.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (Ig = (zg = ae.variants) == null ? void 0 : zg.unstyled.field) != null ? Ig : {}
}, AR = {
  baseStyle: TR,
  sizes: ER,
  variants: $R,
  defaultProps: ae.defaultProps
}, { defineMultiStyleConfig: RR, definePartsStyle: MR } = ve(ZE.keys), Ns = We("popper-bg"), zR = We("popper-arrow-bg"), Fg = We("popper-arrow-shadow-color"), IR = { zIndex: 10 }, FR = {
  [Ns.variable]: "colors.white",
  bg: Ns.reference,
  [zR.variable]: Ns.reference,
  [Fg.variable]: "colors.gray.200",
  _dark: {
    [Ns.variable]: "colors.gray.700",
    [Fg.variable]: "colors.whiteAlpha.300"
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
}, DR = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, LR = {
  px: 3,
  py: 2
}, OR = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, NR = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, BR = MR({
  popper: IR,
  content: FR,
  header: DR,
  body: LR,
  footer: OR,
  closeButton: NR
}), jR = RR({
  baseStyle: BR
}), { definePartsStyle: Ff, defineMultiStyleConfig: VR } = ve(WE.keys), id = B("drawer-bg"), ad = B("drawer-box-shadow");
function co(e) {
  return Ff(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var WR = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, UR = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, HR = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [id.variable]: "colors.white",
    [ad.variable]: "shadows.lg",
    _dark: {
      [id.variable]: "colors.gray.700",
      [ad.variable]: "shadows.dark-lg"
    },
    bg: id.reference,
    boxShadow: ad.reference
  };
}, GR = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, KR = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, YR = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, XR = {
  px: "6",
  py: "4"
}, qR = Ff((e) => ({
  overlay: WR,
  dialogContainer: UR,
  dialog: ct(HR, e),
  header: GR,
  closeButton: KR,
  body: YR,
  footer: XR
})), QR = {
  xs: co("xs"),
  sm: co("md"),
  md: co("lg"),
  lg: co("2xl"),
  xl: co("4xl"),
  full: co("full")
}, ZR = VR({
  baseStyle: qR,
  sizes: QR,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: JR, defineMultiStyleConfig: eM } = ve(UE.keys), tM = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, rM = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, nM = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, oM = JR({
  preview: tM,
  input: rM,
  textarea: nM
}), iM = eM({
  baseStyle: oM
}), { definePartsStyle: aM, defineMultiStyleConfig: sM } = ve(HE.keys), Ko = B("form-control-color"), lM = {
  marginStart: "1",
  [Ko.variable]: "colors.red.500",
  _dark: {
    [Ko.variable]: "colors.red.300"
  },
  color: Ko.reference
}, uM = {
  mt: "2",
  [Ko.variable]: "colors.gray.600",
  _dark: {
    [Ko.variable]: "colors.whiteAlpha.600"
  },
  color: Ko.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, cM = aM({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: lM,
  helperText: uM
}), dM = sM({
  baseStyle: cM
}), { definePartsStyle: fM, defineMultiStyleConfig: hM } = ve(GE.keys), Yo = B("form-error-color"), pM = {
  [Yo.variable]: "colors.red.500",
  _dark: {
    [Yo.variable]: "colors.red.300"
  },
  color: Yo.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, mM = {
  marginEnd: "0.5em",
  [Yo.variable]: "colors.red.500",
  _dark: {
    [Yo.variable]: "colors.red.300"
  },
  color: Yo.reference
}, vM = fM({
  text: pM,
  icon: mM
}), gM = hM({
  baseStyle: vM
}), yM = {
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
}, bM = {
  baseStyle: yM
}, SM = {
  fontFamily: "heading",
  fontWeight: "bold"
}, xM = {
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
}, wM = {
  baseStyle: SM,
  sizes: xM,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: kM, definePartsStyle: CM } = ve(jE.keys), sd = B("breadcrumb-link-decor"), _M = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: sd.reference,
  [sd.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [sd.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, PM = CM({
  link: _M
}), TM = kM({
  baseStyle: PM
}), EM = {
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
}, dS = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: N("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: N("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: N("gray.200", "whiteAlpha.300")(e) }
    };
  const n = si(`${t}.200`, 0.12)(r), o = si(`${t}.200`, 0.24)(r);
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
}, $M = (e) => {
  const { colorScheme: t } = e, r = N("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...ct(dS, e)
  };
}, AM = {
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
}, RM = (e) => {
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
  } = (t = AM[r]) != null ? t : {}, s = N(n, `${r}.200`)(e);
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
}, MM = (e) => {
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
}, zM = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, IM = {
  ghost: dS,
  outline: $M,
  solid: RM,
  link: MM,
  unstyled: zM
}, FM = {
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
}, DM = {
  baseStyle: EM,
  variants: IM,
  sizes: FM,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Hn, defineMultiStyleConfig: LM } = ve(l$.keys), Zl = B("card-bg"), zr = B("card-padding"), fS = B("card-shadow"), gl = B("card-radius"), hS = B("card-border-width", "0"), pS = B("card-border-color"), OM = Hn({
  container: {
    [Zl.variable]: "colors.chakra-body-bg",
    backgroundColor: Zl.reference,
    boxShadow: fS.reference,
    borderRadius: gl.reference,
    color: "chakra-body-text",
    borderWidth: hS.reference,
    borderColor: pS.reference
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
}), NM = {
  sm: Hn({
    container: {
      [gl.variable]: "radii.base",
      [zr.variable]: "space.3"
    }
  }),
  md: Hn({
    container: {
      [gl.variable]: "radii.md",
      [zr.variable]: "space.5"
    }
  }),
  lg: Hn({
    container: {
      [gl.variable]: "radii.xl",
      [zr.variable]: "space.7"
    }
  })
}, BM = {
  elevated: Hn({
    container: {
      [fS.variable]: "shadows.base",
      _dark: {
        [Zl.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Hn({
    container: {
      [hS.variable]: "1px",
      [pS.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Hn({
    container: {
      [Zl.variable]: "colors.chakra-subtle-bg"
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
}, jM = LM({
  baseStyle: OM,
  variants: BM,
  sizes: NM,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), oa = We("close-button-size"), Ri = We("close-button-bg"), VM = {
  w: [oa.reference],
  h: [oa.reference],
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
}, WM = {
  lg: {
    [oa.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [oa.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [oa.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, UM = {
  baseStyle: VM,
  sizes: WM,
  defaultProps: {
    size: "md"
  }
}, { variants: HM, defaultProps: GM } = ra, KM = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Le.bg.reference,
  color: Le.color.reference,
  boxShadow: Le.shadow.reference
}, YM = {
  baseStyle: KM,
  variants: HM,
  defaultProps: GM
}, XM = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, qM = {
  baseStyle: XM
}, QM = {
  opacity: 0.6,
  borderColor: "inherit"
}, ZM = {
  borderStyle: "solid"
}, JM = {
  borderStyle: "dashed"
}, ez = {
  solid: ZM,
  dashed: JM
}, tz = {
  baseStyle: QM,
  variants: ez,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: rz, defineMultiStyleConfig: nz } = ve(OE.keys), oz = {
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
}, lz = rz({
  container: oz,
  button: iz,
  panel: az,
  icon: sz
}), uz = nz({ baseStyle: lz }), { definePartsStyle: qa, defineMultiStyleConfig: cz } = ve(NE.keys), $t = B("alert-fg"), Br = B("alert-bg"), dz = qa({
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
function wp(e) {
  const { theme: t, colorScheme: r } = e, n = si(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var fz = qa((e) => {
  const { colorScheme: t } = e, r = wp(e);
  return {
    container: {
      [$t.variable]: `colors.${t}.600`,
      [Br.variable]: r.light,
      _dark: {
        [$t.variable]: `colors.${t}.200`,
        [Br.variable]: r.dark
      }
    }
  };
}), hz = qa((e) => {
  const { colorScheme: t } = e, r = wp(e);
  return {
    container: {
      [$t.variable]: `colors.${t}.600`,
      [Br.variable]: r.light,
      _dark: {
        [$t.variable]: `colors.${t}.200`,
        [Br.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: $t.reference
    }
  };
}), pz = qa((e) => {
  const { colorScheme: t } = e, r = wp(e);
  return {
    container: {
      [$t.variable]: `colors.${t}.600`,
      [Br.variable]: r.light,
      _dark: {
        [$t.variable]: `colors.${t}.200`,
        [Br.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: $t.reference
    }
  };
}), mz = qa((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [$t.variable]: "colors.white",
      [Br.variable]: `colors.${t}.600`,
      _dark: {
        [$t.variable]: "colors.gray.900",
        [Br.variable]: `colors.${t}.200`
      },
      color: $t.reference
    }
  };
}), vz = {
  subtle: fz,
  "left-accent": hz,
  "top-accent": pz,
  solid: mz
}, gz = cz({
  baseStyle: dz,
  variants: vz,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: mS, defineMultiStyleConfig: yz } = ve(BE.keys), Xo = B("avatar-border-color"), ia = B("avatar-bg"), Fa = B("avatar-font-size"), li = B("avatar-size"), bz = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Xo.reference,
  [Xo.variable]: "white",
  _dark: {
    [Xo.variable]: "colors.gray.800"
  }
}, Sz = {
  bg: ia.reference,
  fontSize: Fa.reference,
  width: li.reference,
  height: li.reference,
  lineHeight: "1",
  [ia.variable]: "colors.gray.200",
  _dark: {
    [ia.variable]: "colors.whiteAlpha.400"
  }
}, xz = (e) => {
  const { name: t, theme: r } = e, n = t ? E$({ string: t }) : "colors.gray.400", o = P$(n)(r);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: ia.reference,
    fontSize: Fa.reference,
    color: i,
    borderColor: Xo.reference,
    verticalAlign: "top",
    width: li.reference,
    height: li.reference,
    "&:not([data-loaded])": {
      [ia.variable]: n
    },
    [Xo.variable]: "colors.white",
    _dark: {
      [Xo.variable]: "colors.gray.800"
    }
  };
}, wz = {
  fontSize: Fa.reference,
  lineHeight: "1"
}, kz = mS((e) => ({
  badge: ct(bz, e),
  excessLabel: ct(Sz, e),
  container: ct(xz, e),
  label: wz
}));
function Gr(e) {
  const t = e !== "100%" ? iS[e] : void 0;
  return mS({
    container: {
      [li.variable]: t ?? e,
      [Fa.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [li.variable]: t ?? e,
      [Fa.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var Cz = {
  "2xs": Gr(4),
  xs: Gr(6),
  sm: Gr(8),
  md: Gr(12),
  lg: Gr(16),
  xl: Gr(24),
  "2xl": Gr(32),
  full: Gr("100%")
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
  Badge: ra,
  Breadcrumb: TM,
  Button: DM,
  Checkbox: Ql,
  CloseButton: UM,
  Code: YM,
  Container: qM,
  Divider: tz,
  Drawer: ZR,
  Editable: iM,
  Form: dM,
  FormError: gM,
  FormLabel: bM,
  Heading: wM,
  Input: ae,
  Kbd: VA,
  Link: UA,
  List: XA,
  Menu: aR,
  Modal: gR,
  NumberInput: PR,
  PinInput: AR,
  Popover: jR,
  Progress: Y5,
  Radio: sA,
  Select: pA,
  Skeleton: vA,
  SkipLink: yA,
  Slider: $A,
  Spinner: MA,
  Stat: BA,
  Switch: U$,
  Table: Q$,
  Tabs: f5,
  Tag: _5,
  Textarea: L5,
  Tooltip: B5,
  Card: jM,
  Stepper: LE
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
}, $z = "ltr", Az = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, Rz = {
  semanticTokens: Tz,
  direction: $z,
  ...IE,
  components: Pz,
  styles: Ez,
  config: Az
};
function Mz(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function zz(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var Iz = (e) => {
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
}, vS = Iz(zz);
function gS(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var yS = (e) => gS(e, (t) => t != null);
function Fz(e) {
  return typeof e == "function";
}
function bS(e, ...t) {
  return Fz(e) ? e(...t) : e;
}
var Dz = typeof Element < "u", Lz = typeof Map == "function", Oz = typeof Set == "function", Nz = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function yl(e, t) {
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
        if (!yl(e[n], t[n]))
          return !1;
      return !0;
    }
    var i;
    if (Lz && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!yl(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Oz && e instanceof Set && t instanceof Set) {
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
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !yl(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Bz = function(t, r) {
  try {
    return yl(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const jz = /* @__PURE__ */ uh(Bz);
function SS(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: i, colorMode: a } = KP(), s = e ? vS(i, `components.${e}`) : void 0, l = n || s, u = hr(
    { theme: i, colorMode: a },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    yS(Mz(o, ["children"]))
  ), c = b.useRef({});
  if (l) {
    const f = cE(l)(u);
    jz(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Yu(e, t = {}) {
  return SS(e, t);
}
function mi(e, t = {}) {
  return SS(e, t);
}
var Vz = /* @__PURE__ */ new Set([
  ...ZT,
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
var Gz = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Kz = /* @__PURE__ */ Mb(
  function(e) {
    return Gz.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Yz = Kz, Xz = function(t) {
  return t !== "theme";
}, Dg = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Yz : Xz;
}, Lg = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, qz = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Ob(r, n, o), EP(function() {
    return Nb(r, n, o);
  }), null;
}, Qz = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = Lg(t, r, n), l = s || Dg(o), u = !l("as");
  return function() {
    var c = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var g = Wb(function(y, x, v) {
      var h = u && y.as || o, m = "", w = [], _ = y;
      if (y.theme == null) {
        _ = {};
        for (var A in y)
          _[A] = y[A];
        _.theme = b.useContext(Ra);
      }
      typeof y.className == "string" ? m = xP(x.registered, w, y.className) : y.className != null && (m = y.className + " ");
      var P = dp(d.concat(w), x.registered, _);
      m += x.key + "-" + P.name, a !== void 0 && (m += " " + a);
      var $ = u && s === void 0 ? Dg(h) : l, R = {};
      for (var I in y)
        u && I === "as" || // $FlowFixMe
        $(I) && (R[I] = y[I]);
      return R.className = m, R.ref = v, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(qz, {
        cache: x,
        serialized: P,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ b.createElement(h, R));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = s, Object.defineProperty(g, "toString", {
      value: function() {
        return "." + a;
      }
    }), g.withComponent = function(y, x) {
      return e(y, Jn({}, r, x, {
        shouldForwardProp: Lg(g, x, !0)
      })).apply(void 0, d);
    }, g;
  };
}, Zz = [
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
], Jl = Qz.bind();
Zz.forEach(function(e) {
  Jl[e] = Jl(e);
});
var Og, Jz = (Og = Jl.default) != null ? Og : Jl, eI = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: i, ...a } = t, s = gS(a, (d, f) => eE(f)), l = bS(e, t), u = Hz(
    {},
    o,
    l,
    yS(s),
    i
  ), c = rS(u)(t.theme);
  return n ? [c, n] : c;
};
function ld(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = Uz);
  const o = eI({ baseStyle: r }), i = Jz(
    e,
    n
  )(o);
  return Kn.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = pp();
    return Kn.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function tI() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(ld, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, r, n) {
      return ld(...n);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, ld(r)), e.get(r);
    }
  });
}
var Z = tI();
function Ae(e) {
  return b.forwardRef(e);
}
function rI(e = {}) {
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
function nI(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, o = b.useMemo(() => QT(r), [r]);
  return /* @__PURE__ */ T.jsxs(RP, { theme: o, children: [
    /* @__PURE__ */ T.jsx(oI, { root: t }),
    n
  ] });
}
function oI({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ T.jsx(Vu, { styles: (r) => ({ [t]: r.__cssVars }) });
}
rI({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function iI() {
  const { colorMode: e } = pp();
  return /* @__PURE__ */ T.jsx(
    Vu,
    {
      styles: (t) => {
        const r = vS(t, "styles.global"), n = bS(r, { theme: t, colorMode: e });
        return n ? rS(n)(t) : void 0;
      }
    }
  );
}
var xS = b.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
xS.displayName = "EnvironmentContext";
function wS(e) {
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
  return /* @__PURE__ */ T.jsxs(xS.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ T.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
wS.displayName = "EnvironmentProvider";
var aI = (e) => {
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
    wS,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ T.jsx(nI, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ T.jsxs(
    Xb,
    {
      colorModeManager: r,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ T.jsx(IP, { scope: o }) : /* @__PURE__ */ T.jsx(zP, {}),
        !c && /* @__PURE__ */ T.jsx(iI, {}),
        n ? /* @__PURE__ */ T.jsx(Gb, { zIndex: n, children: d }) : d
      ]
    }
  ) });
}, sI = (e, t) => e.find((r) => r.id === t);
function Ng(e, t) {
  const r = kS(e, t), n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function kS(e, t) {
  for (const [r, n] of Object.entries(e))
    if (sI(n, t))
      return r;
}
function lI(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function uI(e) {
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
function cI(e, t) {
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
const CS = b.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Xu = b.createContext({}), Qa = b.createContext(null), qu = typeof document < "u", kp = qu ? b.useLayoutEffect : b.useEffect, _S = b.createContext({ strict: !1 });
function dI(e, t, r, n) {
  const { visualElement: o } = b.useContext(Xu), i = b.useContext(_S), a = b.useContext(Qa), s = b.useContext(CS).reducedMotion, l = b.useRef();
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
  return kp(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), b.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), window.HandoffAppearAnimations = !1, c.current = !1);
  }), u;
}
function Io(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function fI(e, t, r) {
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
function Da(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Qu(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Cp = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], _p = ["initial", ...Cp];
function Zu(e) {
  return Qu(e.animate) || _p.some((t) => Da(e[t]));
}
function PS(e) {
  return !!(Zu(e) || e.variants);
}
function hI(e, t) {
  if (Zu(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || Da(r) ? r : void 0,
      animate: Da(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function pI(e) {
  const { initial: t, animate: r } = hI(e, b.useContext(Xu));
  return b.useMemo(() => ({ initial: t, animate: r }), [Bg(t), Bg(r)]);
}
function Bg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const jg = {
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
}, La = {};
for (const e in jg)
  La[e] = {
    isEnabled: (t) => jg[e].some((r) => !!t[r])
  };
function mI(e) {
  for (const t in e)
    La[t] = {
      ...La[t],
      ...e[t]
    };
}
const Pp = b.createContext({}), TS = b.createContext({}), vI = Symbol.for("motionComponentSymbol");
function gI({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && mI(e);
  function i(s, l) {
    let u;
    const c = {
      ...b.useContext(CS),
      ...s,
      layoutId: yI(s)
    }, { isStatic: d } = c, f = pI(s), p = n(s, d);
    if (!d && qu) {
      f.visualElement = dI(o, p, c, t);
      const g = b.useContext(TS), y = b.useContext(_S).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        y,
        e,
        g
      ));
    }
    return b.createElement(
      Xu.Provider,
      { value: f },
      u && f.visualElement ? b.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      r(o, s, fI(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = b.forwardRef(i);
  return a[vI] = o, a;
}
function yI({ layoutId: e }) {
  const t = b.useContext(Pp).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function bI(e) {
  function t(n, o = {}) {
    return gI(e(n, o));
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
const SI = [
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
function Tp(e) {
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
      !!(SI.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const eu = {};
function xI(e) {
  Object.assign(eu, e);
}
const Za = [
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
], no = new Set(Za);
function ES(e, { layout: t, layoutId: r }) {
  return no.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!eu[e] || e === "opacity");
}
const xt = (e) => !!(e && e.getVelocity), wI = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, kI = Za.length;
function CI(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = "";
  for (let a = 0; a < kI; a++) {
    const s = Za[a];
    if (e[s] !== void 0) {
      const l = wI[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, n ? "" : i) : r && n && (i = "none"), i;
}
const $S = (e) => (t) => typeof t == "string" && t.startsWith(e), AS = $S("--"), Lf = $S("var(--"), _I = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, PI = (e, t) => t && typeof e == "number" ? t.transform(e) : e, vn = (e, t, r) => Math.min(Math.max(r, e), t), oo = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, aa = {
  ...oo,
  transform: (e) => vn(0, 1, e)
}, Bs = {
  ...oo,
  default: 1
}, sa = (e) => Math.round(e * 1e5) / 1e5, Ju = /(-)?([\d]*\.?[\d])+/g, RS = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, TI = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ja(e) {
  return typeof e == "string";
}
const es = (e) => ({
  test: (t) => Ja(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Kr = es("deg"), yr = es("%"), V = es("px"), EI = es("vh"), $I = es("vw"), Vg = {
  ...yr,
  parse: (e) => yr.parse(e) / 100,
  transform: (e) => yr.transform(e * 100)
}, Wg = {
  ...oo,
  transform: Math.round
}, MS = {
  // Border props
  borderWidth: V,
  borderTopWidth: V,
  borderRightWidth: V,
  borderBottomWidth: V,
  borderLeftWidth: V,
  borderRadius: V,
  radius: V,
  borderTopLeftRadius: V,
  borderTopRightRadius: V,
  borderBottomRightRadius: V,
  borderBottomLeftRadius: V,
  // Positioning props
  width: V,
  maxWidth: V,
  height: V,
  maxHeight: V,
  size: V,
  top: V,
  right: V,
  bottom: V,
  left: V,
  // Spacing props
  padding: V,
  paddingTop: V,
  paddingRight: V,
  paddingBottom: V,
  paddingLeft: V,
  margin: V,
  marginTop: V,
  marginRight: V,
  marginBottom: V,
  marginLeft: V,
  // Transform props
  rotate: Kr,
  rotateX: Kr,
  rotateY: Kr,
  rotateZ: Kr,
  scale: Bs,
  scaleX: Bs,
  scaleY: Bs,
  scaleZ: Bs,
  skew: Kr,
  skewX: Kr,
  skewY: Kr,
  distance: V,
  translateX: V,
  translateY: V,
  translateZ: V,
  x: V,
  y: V,
  z: V,
  perspective: V,
  transformPerspective: V,
  opacity: aa,
  originX: Vg,
  originY: Vg,
  originZ: V,
  // Misc
  zIndex: Wg,
  // SVG
  fillOpacity: aa,
  strokeOpacity: aa,
  numOctaves: Wg
};
function Ep(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (AS(d)) {
      i[d] = f;
      continue;
    }
    const p = MS[d], g = PI(f, p);
    if (no.has(d)) {
      if (l = !0, a[d] = g, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = g) : o[d] = g;
  }
  if (t.transform || (l || n ? o.transform = CI(e.transform, r, c, n) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const $p = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function zS(e, t, r) {
  for (const n in t)
    !xt(t[n]) && !ES(n, r) && (e[n] = t[n]);
}
function AI({ transformTemplate: e }, t, r) {
  return b.useMemo(() => {
    const n = $p();
    return Ep(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function RI(e, t, r) {
  const n = e.style || {}, o = {};
  return zS(o, n, e), Object.assign(o, AI(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function MI(e, t, r) {
  const n = {}, o = RI(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const zI = /* @__PURE__ */ new Set([
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
function tu(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || zI.has(e);
}
let IS = (e) => !tu(e);
function II(e) {
  e && (IS = (t) => t.startsWith("on") ? !tu(t) : e(t));
}
try {
  II(require("@emotion/is-prop-valid").default);
} catch {
}
function FI(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (IS(o) || r === !0 && tu(o) || !t && !tu(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function Ug(e, t, r) {
  return typeof e == "string" ? e : V.transform(t + r * e);
}
function DI(e, t, r) {
  const n = Ug(t, e.x, e.width), o = Ug(r, e.y, e.height);
  return `${n} ${o}`;
}
const LI = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, OI = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function NI(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? LI : OI;
  e[i.offset] = V.transform(-n);
  const a = V.transform(t), s = V.transform(r);
  e[i.array] = `${a} ${s}`;
}
function Ap(e, {
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
  if (Ep(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: g, dimensions: y } = e;
  p.transform && (y && (g.transform = p.transform), delete p.transform), y && (o !== void 0 || i !== void 0 || g.transform) && (g.transformOrigin = DI(y, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), a !== void 0 && NI(p, a, s, l, !1);
}
const FS = () => ({
  ...$p(),
  attrs: {}
}), Rp = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function BI(e, t, r, n) {
  const o = b.useMemo(() => {
    const i = FS();
    return Ap(i, t, { enableHardwareAcceleration: !1 }, Rp(n), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    zS(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function jI(e = !1) {
  return (r, n, o, { latestValues: i }, a) => {
    const l = (Tp(r) ? BI : MI)(n, i, a, r), c = {
      ...FI(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = b.useMemo(() => xt(d) ? d.get() : d, [d]);
    return b.createElement(r, {
      ...c,
      children: f
    });
  };
}
const Mp = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function DS(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r)
    e.style.setProperty(i, r[i]);
}
const LS = /* @__PURE__ */ new Set([
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
function OS(e, t, r, n) {
  DS(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(LS.has(o) ? o : Mp(o), t.attrs[o]);
}
function zp(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (xt(r[o]) || t.style && xt(t.style[o]) || ES(o, e)) && (n[o] = r[o]);
  return n;
}
function NS(e, t) {
  const r = zp(e, t);
  for (const n in e)
    if (xt(e[n]) || xt(t[n])) {
      const o = Za.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function Ip(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function BS(e) {
  const t = b.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const ru = (e) => Array.isArray(e), VI = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), WI = (e) => ru(e) ? e[e.length - 1] || 0 : e;
function bl(e) {
  const t = xt(e) ? e.get() : e;
  return VI(t) ? t.toValue() : t;
}
function UI({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = {
    latestValues: HI(n, o, i, e),
    renderState: t()
  };
  return r && (a.mount = (s) => r(n, s, a)), a;
}
const jS = (e) => (t, r) => {
  const n = b.useContext(Xu), o = b.useContext(Qa), i = () => UI(e, t, n, o);
  return r ? i() : BS(i);
};
function HI(e, t, r, n) {
  const o = {}, i = n(e, {});
  for (const f in i)
    o[f] = bl(i[f]);
  let { initial: a, animate: s } = e;
  const l = Zu(e), u = PS(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Qu(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const g = Ip(e, p);
    if (!g)
      return;
    const { transitionEnd: y, transition: x, ...v } = g;
    for (const h in v) {
      let m = v[h];
      if (Array.isArray(m)) {
        const w = c ? m.length - 1 : 0;
        m = m[w];
      }
      m !== null && (o[h] = m);
    }
    for (const h in y)
      o[h] = y[h];
  }), o;
}
const ze = (e) => e;
class Hg {
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
function GI(e) {
  let t = new Hg(), r = new Hg(), n = 0, o = !1, i = !1;
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
const js = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], KI = 40;
function YI(e, t) {
  let r = !1, n = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = js.reduce((d, f) => (d[f] = GI(() => r = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    r = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, KI), 1), o.timestamp = d, o.isProcessing = !0, js.forEach(a), o.isProcessing = !1, r && t && (n = !1, e(s));
  }, l = () => {
    r = !0, n = !0, o.isProcessing || e(s);
  };
  return { schedule: js.reduce((d, f) => {
    const p = i[f];
    return d[f] = (g, y = !1, x = !1) => (r || l(), p.schedule(g, y, x)), d;
  }, {}), cancel: (d) => js.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: me, cancel: jr, state: Ue, steps: ud } = YI(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ze, !0), XI = {
  useVisualState: jS({
    scrapeMotionValuesFromProps: NS,
    createRenderState: FS,
    onMount: (e, t, { renderState: r, latestValues: n }) => {
      me.read(() => {
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
      }), me.render(() => {
        Ap(r, n, { enableHardwareAcceleration: !1 }, Rp(t.tagName), e.transformTemplate), OS(t, r);
      });
    }
  })
}, qI = {
  useVisualState: jS({
    scrapeMotionValuesFromProps: zp,
    createRenderState: $p
  })
};
function QI(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...Tp(e) ? XI : qI,
    preloadedFeatures: r,
    useRender: jI(t),
    createVisualElement: n,
    Component: e
  };
}
function Rr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const VS = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function ec(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const ZI = (e) => (t) => VS(t) && e(t, ec(t));
function Ir(e, t, r, n) {
  return Rr(e, t, ZI(r), n);
}
const JI = (e, t) => (r) => t(e(r)), fn = (...e) => e.reduce(JI);
function WS(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const Gg = WS("dragHorizontal"), Kg = WS("dragVertical");
function US(e) {
  let t = !1;
  if (e === "y")
    t = Kg();
  else if (e === "x")
    t = Gg();
  else {
    const r = Gg(), n = Kg();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function HS() {
  const e = US(!0);
  return e ? (e(), !1) : !0;
}
class wn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Yg(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || HS())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && me.update(() => s[n](i, a));
  };
  return Ir(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class e3 extends wn {
  mount() {
    this.unmount = fn(Yg(this.node, !0), Yg(this.node, !1));
  }
  unmount() {
  }
}
class t3 extends wn {
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
const GS = (e, t) => t ? e === t ? !0 : GS(e, t.parentElement) : !1;
function cd(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, ec(r));
}
class r3 extends wn {
  constructor() {
    super(...arguments), this.removeStartListeners = ze, this.removeEndListeners = ze, this.removeAccessibleListeners = ze, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), i = Ir(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        me.update(() => {
          GS(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), a = Ir(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = fn(i, a), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || cd("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && me.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Rr(this.node.current, "keyup", a), cd("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Rr(this.node.current, "keydown", t), n = () => {
        this.isPressing && cd("cancel", (i, a) => this.cancelPress(i, a));
      }, o = Rr(this.node.current, "blur", n);
      this.removeAccessibleListeners = fn(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && me.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !HS();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && me.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Ir(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Rr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = fn(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Of = /* @__PURE__ */ new WeakMap(), dd = /* @__PURE__ */ new WeakMap(), n3 = (e) => {
  const t = Of.get(e.target);
  t && t(e);
}, o3 = (e) => {
  e.forEach(n3);
};
function i3({ root: e, ...t }) {
  const r = e || document;
  dd.has(r) || dd.set(r, {});
  const n = dd.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(o3, { root: e, ...t })), n[o];
}
function a3(e, t, r) {
  const n = i3(t);
  return Of.set(e, r), n.observe(e), () => {
    Of.delete(e), n.unobserve(e);
  };
}
const s3 = {
  some: 0,
  all: 1
};
class l3 extends wn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: i } = t, a = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : s3[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return a3(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(u3(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function u3({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const c3 = {
  inView: {
    Feature: l3
  },
  tap: {
    Feature: r3
  },
  focus: {
    Feature: t3
  },
  hover: {
    Feature: e3
  }
};
function KS(e, t) {
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
function d3(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function f3(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function tc(e, t, r) {
  const n = e.getProps();
  return Ip(n, t, r !== void 0 ? r : n.custom, d3(e), f3(e));
}
const h3 = "framerAppearId", p3 = "data-" + Mp(h3);
let m3 = ze, Fp = ze;
const hn = (e) => e * 1e3, Fr = (e) => e / 1e3, v3 = {
  current: !1
}, YS = (e) => Array.isArray(e) && typeof e[0] == "number";
function XS(e) {
  return !!(!e || typeof e == "string" && qS[e] || YS(e) || Array.isArray(e) && e.every(XS));
}
const Ui = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, qS = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Ui([0, 0.65, 0.55, 1]),
  circOut: Ui([0.55, 0, 1, 0.45]),
  backIn: Ui([0.31, 0.01, 0.66, -0.59]),
  backOut: Ui([0.33, 1.53, 0.69, 0.99])
};
function QS(e) {
  if (e)
    return YS(e) ? Ui(e) : Array.isArray(e) ? e.map(QS) : qS[e];
}
function g3(e, t, r, { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: r };
  l && (u.offset = l);
  const c = QS(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: n,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function y3(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const ZS = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, b3 = 1e-7, S3 = 12;
function x3(e, t, r, n, o) {
  let i, a, s = 0;
  do
    a = t + (r - t) / 2, i = ZS(a, n, o) - e, i > 0 ? r = a : t = a;
  while (Math.abs(i) > b3 && ++s < S3);
  return a;
}
function ts(e, t, r, n) {
  if (e === t && r === n)
    return ze;
  const o = (i) => x3(i, 0, 1, e, r);
  return (i) => i === 0 || i === 1 ? i : ZS(o(i), t, n);
}
const w3 = ts(0.42, 0, 1, 1), k3 = ts(0, 0, 0.58, 1), JS = ts(0.42, 0, 0.58, 1), C3 = (e) => Array.isArray(e) && typeof e[0] != "number", ex = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, tx = (e) => (t) => 1 - e(1 - t), rx = (e) => 1 - Math.sin(Math.acos(e)), Dp = tx(rx), _3 = ex(Dp), nx = ts(0.33, 1.53, 0.69, 0.99), Lp = tx(nx), P3 = ex(Lp), T3 = (e) => (e *= 2) < 1 ? 0.5 * Lp(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), E3 = {
  linear: ze,
  easeIn: w3,
  easeInOut: JS,
  easeOut: k3,
  circIn: rx,
  circInOut: _3,
  circOut: Dp,
  backIn: Lp,
  backInOut: P3,
  backOut: nx,
  anticipate: T3
}, Xg = (e) => {
  if (Array.isArray(e)) {
    Fp(e.length === 4);
    const [t, r, n, o] = e;
    return ts(t, r, n, o);
  } else if (typeof e == "string")
    return E3[e];
  return e;
}, Op = (e, t) => (r) => !!(Ja(r) && TI.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), ox = (e, t, r) => (n) => {
  if (!Ja(n))
    return n;
  const [o, i, a, s] = n.match(Ju);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [r]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, $3 = (e) => vn(0, 255, e), fd = {
  ...oo,
  transform: (e) => Math.round($3(e))
}, Nn = {
  test: Op("rgb", "red"),
  parse: ox("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + fd.transform(e) + ", " + fd.transform(t) + ", " + fd.transform(r) + ", " + sa(aa.transform(n)) + ")"
};
function A3(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Nf = {
  test: Op("#"),
  parse: A3,
  transform: Nn.transform
}, Fo = {
  test: Op("hsl", "hue"),
  parse: ox("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + yr.transform(sa(t)) + ", " + yr.transform(sa(r)) + ", " + sa(aa.transform(n)) + ")"
}, at = {
  test: (e) => Nn.test(e) || Nf.test(e) || Fo.test(e),
  parse: (e) => Nn.test(e) ? Nn.parse(e) : Fo.test(e) ? Fo.parse(e) : Nf.parse(e),
  transform: (e) => Ja(e) ? e : e.hasOwnProperty("red") ? Nn.transform(e) : Fo.transform(e)
}, Te = (e, t, r) => -r * e + r * t + e;
function hd(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function R3({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = hd(l, s, e + 1 / 3), i = hd(l, s, e), a = hd(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n
  };
}
const pd = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, M3 = [Nf, Nn, Fo], z3 = (e) => M3.find((t) => t.test(e));
function qg(e) {
  const t = z3(e);
  let r = t.parse(e);
  return t === Fo && (r = R3(r)), r;
}
const ix = (e, t) => {
  const r = qg(e), n = qg(t), o = { ...r };
  return (i) => (o.red = pd(r.red, n.red, i), o.green = pd(r.green, n.green, i), o.blue = pd(r.blue, n.blue, i), o.alpha = Te(r.alpha, n.alpha, i), Nn.transform(o));
};
function I3(e) {
  var t, r;
  return isNaN(e) && Ja(e) && (((t = e.match(Ju)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(RS)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const ax = {
  regex: _I,
  countKey: "Vars",
  token: "${v}",
  parse: ze
}, sx = {
  regex: RS,
  countKey: "Colors",
  token: "${c}",
  parse: at.parse
}, lx = {
  regex: Ju,
  countKey: "Numbers",
  token: "${n}",
  parse: oo.parse
};
function md(e, { regex: t, countKey: r, token: n, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + r] = i.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...i.map(o)));
}
function nu(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && md(r, ax), md(r, sx), md(r, lx), r;
}
function ux(e) {
  return nu(e).values;
}
function cx(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = nu(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < n ? s = s.replace(ax.token, a[l]) : l < n + r ? s = s.replace(sx.token, at.transform(a[l])) : s = s.replace(lx.token, sa(a[l]));
    return s;
  };
}
const F3 = (e) => typeof e == "number" ? 0 : e;
function D3(e) {
  const t = ux(e);
  return cx(e)(t.map(F3));
}
const gn = {
  test: I3,
  parse: ux,
  createTransformer: cx,
  getAnimatableNone: D3
}, dx = (e, t) => (r) => `${r > 0 ? t : e}`;
function fx(e, t) {
  return typeof e == "number" ? (r) => Te(e, t, r) : at.test(e) ? ix(e, t) : e.startsWith("var(") ? dx(e, t) : px(e, t);
}
const hx = (e, t) => {
  const r = [...e], n = r.length, o = e.map((i, a) => fx(i, t[a]));
  return (i) => {
    for (let a = 0; a < n; a++)
      r[a] = o[a](i);
    return r;
  };
}, L3 = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = fx(e[o], t[o]));
  return (o) => {
    for (const i in n)
      r[i] = n[i](o);
    return r;
  };
}, px = (e, t) => {
  const r = gn.createTransformer(t), n = nu(e), o = nu(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? fn(hx(n.values, o.values), r) : dx(e, t);
}, Oa = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, Qg = (e, t) => (r) => Te(e, t, r);
function O3(e) {
  return typeof e == "number" ? Qg : typeof e == "string" ? at.test(e) ? ix : px : Array.isArray(e) ? hx : typeof e == "object" ? L3 : Qg;
}
function N3(e, t, r) {
  const n = [], o = r || O3(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || ze : t;
      s = fn(l, s);
    }
    n.push(s);
  }
  return n;
}
function mx(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if (Fp(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = N3(t, n, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = Oa(e[c], e[c + 1], u);
    return a[c](d);
  };
  return r ? (u) => l(vn(e[0], e[i - 1], u)) : l;
}
function B3(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = Oa(0, t, n);
    e.push(Te(r, 1, o));
  }
}
function j3(e) {
  const t = [0];
  return B3(t, e.length - 1), t;
}
function V3(e, t) {
  return e.map((r) => r * t);
}
function W3(e, t) {
  return e.map(() => t || JS).splice(0, e.length - 1);
}
function ou({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = C3(n) ? n.map(Xg) : Xg(n), i = {
    done: !1,
    value: t[0]
  }, a = V3(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : j3(t),
    e
  ), s = mx(a, t, {
    ease: Array.isArray(o) ? o : W3(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function vx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const U3 = 5;
function gx(e, t, r) {
  const n = Math.max(t - U3, 0);
  return vx(r - e(n), t - n);
}
const vd = 1e-3, H3 = 0.01, Zg = 10, G3 = 0.05, K3 = 1;
function Y3({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i;
  m3(e <= hn(Zg));
  let a = 1 - t;
  a = vn(G3, K3, a), e = vn(H3, Zg, Fr(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - r, p = Bf(u, a), g = Math.exp(-d);
    return vd - f / p * g;
  }, i = (u) => {
    const d = u * a * e, f = d * r + r, p = Math.pow(a, 2) * Math.pow(u, 2) * e, g = Math.exp(-d), y = Bf(Math.pow(u, 2), a);
    return (-o(u) + vd > 0 ? -1 : 1) * ((f - p) * g) / y;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - r) * e + 1;
    return -vd + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (r - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = q3(o, i, s);
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
const X3 = 12;
function q3(e, t, r) {
  let n = r;
  for (let o = 1; o < X3; o++)
    n = n - e(n) / t(n);
  return n;
}
function Bf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Q3 = ["duration", "bounce"], Z3 = ["stiffness", "damping", "mass"];
function Jg(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function J3(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Jg(e, Z3) && Jg(e, Q3)) {
    const r = Y3(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function yx({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = J3(n), p = c ? -Fr(c) : 0, g = l / (2 * Math.sqrt(s * u)), y = i - o, x = Fr(Math.sqrt(s / u)), v = Math.abs(y) < 5;
  r || (r = v ? 0.01 : 2), t || (t = v ? 5e-3 : 0.5);
  let h;
  if (g < 1) {
    const m = Bf(x, g);
    h = (w) => {
      const _ = Math.exp(-g * x * w);
      return i - _ * ((p + g * x * y) / m * Math.sin(m * w) + y * Math.cos(m * w));
    };
  } else if (g === 1)
    h = (m) => i - Math.exp(-x * m) * (y + (p + x * y) * m);
  else {
    const m = x * Math.sqrt(g * g - 1);
    h = (w) => {
      const _ = Math.exp(-g * x * w), A = Math.min(m * w, 300);
      return i - _ * ((p + g * x * y) * Math.sinh(A) + m * y * Math.cosh(A)) / m;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (m) => {
      const w = h(m);
      if (f)
        a.done = m >= d;
      else {
        let _ = p;
        m !== 0 && (g < 1 ? _ = gx(h, m, w) : _ = 0);
        const A = Math.abs(_) <= r, P = Math.abs(i - w) <= t;
        a.done = A && P;
      }
      return a.value = a.done ? i : w, a;
    }
  };
}
function e0({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = ($) => s !== void 0 && $ < s || l !== void 0 && $ > l, g = ($) => s === void 0 ? l : l === void 0 || Math.abs(s - $) < Math.abs(l - $) ? s : l;
  let y = r * t;
  const x = d + y, v = a === void 0 ? x : a(x);
  v !== x && (y = v - d);
  const h = ($) => -y * Math.exp(-$ / n), m = ($) => v + h($), w = ($) => {
    const R = h($), I = m($);
    f.done = Math.abs(R) <= u, f.value = f.done ? v : I;
  };
  let _, A;
  const P = ($) => {
    p(f.value) && (_ = $, A = yx({
      keyframes: [f.value, g(f.value)],
      velocity: gx(m, $, f.value),
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return P(0), {
    calculatedDuration: null,
    next: ($) => {
      let R = !1;
      return !A && _ === void 0 && (R = !0, w($), P($)), _ !== void 0 && $ > _ ? A.next($ - _) : (!R && w($), f);
    }
  };
}
const eF = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => me.update(t, !0),
    stop: () => jr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ue.isProcessing ? Ue.timestamp : performance.now()
  };
}, t0 = 2e4;
function r0(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < t0; )
    t += r, n = e.next(t);
  return t >= t0 ? 1 / 0 : t;
}
const tF = {
  decay: e0,
  inertia: e0,
  tween: ou,
  keyframes: ou,
  spring: yx
};
function iu({ autoplay: e = !0, delay: t = 0, driver: r = eF, keyframes: n, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, g = !1, y, x;
  const v = () => {
    x = new Promise((j) => {
      y = j;
    });
  };
  v();
  let h;
  const m = tF[o] || ou;
  let w;
  m !== ou && typeof n[0] != "number" && (w = mx([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const _ = m({ ...f, keyframes: n });
  let A;
  s === "mirror" && (A = m({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let P = "idle", $ = null, R = null, I = null;
  _.calculatedDuration === null && i && (_.calculatedDuration = r0(_));
  const { calculatedDuration: U } = _;
  let ue = 1 / 0, fe = 1 / 0;
  U !== null && (ue = U + a, fe = ue * (i + 1) - a);
  let Y = 0;
  const le = (j) => {
    if (R === null)
      return;
    p > 0 && (R = Math.min(R, j)), p < 0 && (R = Math.min(j - fe / p, R)), $ !== null ? Y = $ : Y = Math.round(j - R) * p;
    const ee = Y - t * (p >= 0 ? 1 : -1), H = p >= 0 ? ee < 0 : ee > fe;
    Y = Math.max(ee, 0), P === "finished" && $ === null && (Y = fe);
    let re = Y, wt = _;
    if (i) {
      const Ft = Y / ue;
      let kt = Math.floor(Ft), Dt = Ft % 1;
      !Dt && Ft >= 1 && (Dt = 1), Dt === 1 && kt--, kt = Math.min(kt, i + 1);
      const kn = !!(kt % 2);
      kn && (s === "reverse" ? (Dt = 1 - Dt, a && (Dt -= a / ue)) : s === "mirror" && (wt = A));
      let io = vn(0, 1, Dt);
      Y > fe && (io = s === "reverse" && kn ? 1 : 0), re = io * ue;
    }
    const xe = H ? { done: !1, value: n[0] } : wt.next(re);
    w && (xe.value = w(xe.value));
    let { done: Ie } = xe;
    !H && U !== null && (Ie = p >= 0 ? Y >= fe : Y <= 0);
    const Je = $ === null && (P === "finished" || P === "running" && Ie);
    return d && d(xe.value), Je && z(), xe;
  }, ge = () => {
    h && h.stop(), h = void 0;
  }, F = () => {
    P = "idle", ge(), y(), v(), R = I = null;
  }, z = () => {
    P = "finished", c && c(), ge(), y();
  }, O = () => {
    if (g)
      return;
    h || (h = r(le));
    const j = h.now();
    l && l(), $ !== null ? R = j - $ : (!R || P === "finished") && (R = j), P === "finished" && v(), I = R, $ = null, P = "running", h.start();
  };
  e && O();
  const W = {
    then(j, ee) {
      return x.then(j, ee);
    },
    get time() {
      return Fr(Y);
    },
    set time(j) {
      j = hn(j), Y = j, $ !== null || !h || p === 0 ? $ = j : R = h.now() - j / p;
    },
    get duration() {
      const j = _.calculatedDuration === null ? r0(_) : _.calculatedDuration;
      return Fr(j);
    },
    get speed() {
      return p;
    },
    set speed(j) {
      j === p || !h || (p = j, W.time = Fr(Y));
    },
    get state() {
      return P;
    },
    play: O,
    pause: () => {
      P = "paused", $ = Y;
    },
    stop: () => {
      g = !0, P !== "idle" && (P = "idle", u && u(), F());
    },
    cancel: () => {
      I !== null && le(I), F();
    },
    complete: () => {
      P = "finished";
    },
    sample: (j) => (R = 0, le(j))
  };
  return W;
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
]), Vs = 10, iF = 2e4, aF = (e, t) => t.type === "spring" || e === "backgroundColor" || !XS(t.ease);
function sF(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(nF() && oF.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (aF(t, o)) {
    const h = iu({
      ...o,
      repeat: 0,
      delay: 0
    });
    let m = { done: !1, value: c[0] };
    const w = [];
    let _ = 0;
    for (; !m.done && _ < iF; )
      m = h.sample(_), w.push(m.value), _ += Vs;
    p = void 0, c = w, d = _ - Vs, f = "linear";
  }
  const g = g3(e.owner.current, t, c, {
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
    me.update(y), s(), u();
  };
  return g.onfinish = () => {
    e.set(y3(c, o)), n && n(), x();
  }, {
    then(h, m) {
      return l.then(h, m);
    },
    attachTimeline(h) {
      return g.timeline = h, g.onfinish = null, ze;
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
      a || (g.play(), jr(y));
    },
    pause: () => g.pause(),
    stop: () => {
      if (a = !0, g.playState === "idle")
        return;
      const { currentTime: h } = g;
      if (h) {
        const m = iu({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(m.sample(h - Vs).value, m.sample(h).value, Vs);
      }
      x();
    },
    complete: () => g.finish(),
    cancel: x
  };
}
function lF({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: ze,
    pause: ze,
    stop: ze,
    then: (i) => (i(), Promise.resolve()),
    cancel: ze,
    complete: ze
  });
  return t ? iu({
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
}, hF = (e, { keyframes: t }) => t.length > 2 ? dF : no.has(e) ? e.startsWith("scale") ? cF(t[1]) : uF : fF, jf = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(gn.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), pF = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function mF(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(Ju) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let i = pF.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const vF = /([a-z-]*)\(.*?\)/g, Vf = {
  ...gn,
  getAnimatableNone: (e) => {
    const t = e.match(vF);
    return t ? t.map(mF).join(" ") : e;
  }
}, gF = {
  ...MS,
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
}, Np = (e) => gF[e];
function bx(e, t) {
  let r = Np(e);
  return r !== Vf && (r = gn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const Sx = (e) => /^0[^.\s]+$/.test(e);
function yF(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Sx(e);
}
function bF(e, t, r, n) {
  const o = jf(t, r);
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
      i[c] = bx(t, s);
    }
  return i;
}
function SF({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function xx(e, t) {
  return e[t] || e.default || e;
}
const Bp = (e, t, r, n = {}) => (o) => {
  const i = xx(n, e) || {}, a = i.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - hn(a);
  const l = bF(t, e, r, i), u = l[0], c = l[l.length - 1], d = jf(e, u), f = jf(e, c);
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
  if (SF(i) || (p = {
    ...p,
    ...hF(e, p)
  }), p.duration && (p.duration = hn(p.duration)), p.repeatDelay && (p.repeatDelay = hn(p.repeatDelay)), !d || !f || v3.current || i.type === !1)
    return lF(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const g = sF(t, e, p);
    if (g)
      return g;
  }
  return iu(p);
};
function au(e) {
  return !!(xt(e) && e.add);
}
const wx = (e) => /^\-?\d*\.?\d+$/.test(e);
function jp(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Vp(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Wp {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return jp(this.subscriptions, t), () => Vp(this.subscriptions, t);
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
    this.version = "10.6.8", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (n, o = !0) => {
      this.prev = this.current, this.current = n;
      const { delta: i, timestamp: a } = Ue;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, me.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => me.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
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
    this.events[t] || (this.events[t] = new Wp());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), me.read(() => {
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
      vx(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
  return new wF(e, t);
}
const kx = (e) => (t) => t.test(e), kF = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Cx = [oo, V, yr, Kr, $I, EI, kF], Mi = (e) => Cx.find(kx(e)), CF = [...Cx, at, gn], _F = (e) => CF.find(kx(e));
function PF(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, ui(r));
}
function TF(e, t) {
  const r = tc(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const a in i) {
    const s = WI(i[a]);
    PF(e, a, s);
  }
}
function EF(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (wx(c) || Sx(c)) ? c = parseFloat(c) : !_F(c) && gn.test(u) && (c = bx(l, u)), e.addValue(l, ui(c, { owner: e })), r[l] === void 0 && (r[l] = c), c !== null && e.setBaseTarget(l, c));
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
function _x(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (i = n);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && RF(c, d))
      continue;
    const g = {
      delay: r,
      elapsed: 0,
      ...i
    };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const x = e.getProps()[p3];
      x && (g.elapsed = window.HandoffAppearAnimations(x, d, f, me), g.syncStart = !0);
    }
    f.start(Bp(d, f, p, e.shouldReduceMotion && no.has(d) ? { type: !1 } : g));
    const y = f.animation;
    au(l) && (l.add(d), y.then(() => l.remove(d))), u.push(y);
  }
  return a && Promise.all(u).then(() => {
    a && TF(e, a);
  }), u;
}
function Wf(e, t, r = {}) {
  const n = tc(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => Promise.all(_x(e, n, r)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
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
  return Array.from(e.variantChildren).sort(zF).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(Wf(u, t, {
      ...i,
      delay: r + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function zF(e, t) {
  return e.sortNodePosition(t);
}
function IF(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Wf(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Wf(e, t, r);
  else {
    const o = typeof t == "function" ? tc(e, t, r.custom) : t;
    n = Promise.all(_x(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const FF = [...Cp].reverse(), DF = Cp.length;
function LF(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => IF(e, r, n)));
}
function OF(e) {
  let t = LF(e);
  const r = BF();
  let n = !0;
  const o = (l, u) => {
    const c = tc(e, u);
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
    for (let v = 0; v < DF; v++) {
      const h = FF[v], m = r[h], w = c[h] !== void 0 ? c[h] : d[h], _ = Da(w), A = h === u ? m.isActive : null;
      A === !1 && (y = v);
      let P = w === d[h] && w !== c[h] && _;
      if (P && n && e.manuallyAnimateOnMount && (P = !1), m.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !m.isActive && A === null || // If we didn't and don't have any defined prop for this animation type
      !w && !m.prevProp || // Or if the prop doesn't define an animation
      Qu(w) || typeof w == "boolean")
        continue;
      const $ = NF(m.prevProp, w);
      let R = $ || // If we're making this variant active, we want to always make it active
      h === u && m.isActive && !P && _ || // If we removed a higher-priority variant (i is in reverse order)
      v > y && _;
      const I = Array.isArray(w) ? w : [w];
      let U = I.reduce(o, {});
      A === !1 && (U = {});
      const { prevResolvedValues: ue = {} } = m, fe = {
        ...ue,
        ...U
      }, Y = (le) => {
        R = !0, p.delete(le), m.needsAnimating[le] = !0;
      };
      for (const le in fe) {
        const ge = U[le], F = ue[le];
        g.hasOwnProperty(le) || (ge !== F ? ru(ge) && ru(F) ? !KS(ge, F) || $ ? Y(le) : m.protectedKeys[le] = !0 : ge !== void 0 ? Y(le) : p.add(le) : ge !== void 0 && p.has(le) ? Y(le) : m.protectedKeys[le] = !0);
      }
      m.prevProp = w, m.prevResolvedValues = U, m.isActive && (g = { ...g, ...U }), n && e.blockInitialAnimation && (R = !1), R && !P && f.push(...I.map((le) => ({
        animation: le,
        options: { type: h, ...l }
      })));
    }
    if (p.size) {
      const v = {};
      p.forEach((h) => {
        const m = e.getBaseTarget(h);
        m !== void 0 && (v[h] = m);
      }), f.push({ animation: v });
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
function NF(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !KS(t, e) : !1;
}
function Tn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function BF() {
  return {
    animate: Tn(!0),
    whileInView: Tn(),
    whileHover: Tn(),
    whileTap: Tn(),
    whileDrag: Tn(),
    whileFocus: Tn(),
    exit: Tn()
  };
}
class jF extends wn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = OF(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Qu(t) && (this.unmount = t.subscribe(this.node));
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
class WF extends wn {
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
    Feature: jF
  },
  exit: {
    Feature: WF
  }
}, n0 = (e, t) => Math.abs(e - t);
function HF(e, t) {
  const r = n0(e.x, t.x), n = n0(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class Px {
  constructor(t, r, { transformPagePoint: n, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = yd(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = HF(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: g } = Ue;
      this.history.push({ ...p, timestamp: g });
      const { onStart: y, onMove: x } = this.handlers;
      d || (y && y(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = gd(d, this.transformPagePoint), me.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, g = yd(c.type === "pointercancel" ? this.lastMoveEventInfo : gd(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, g), p && p(c, g);
    }, !VS(t))
      return;
    this.handlers = r, this.transformPagePoint = n, this.contextWindow = o || window;
    const i = ec(t), a = gd(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = Ue;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = r;
    u && u(t, yd(a, this.history)), this.removeListeners = fn(Ir(this.contextWindow, "pointermove", this.handlePointerMove), Ir(this.contextWindow, "pointerup", this.handlePointerUp), Ir(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), jr(this.updatePoint);
  }
}
function gd(e, t) {
  return t ? { point: t(e.point) } : e;
}
function o0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function yd({ point: e }, t) {
  return {
    point: e,
    delta: o0(e, Tx(t)),
    offset: o0(e, GF(t)),
    velocity: KF(t, 0.1)
  };
}
function GF(e) {
  return e[0];
}
function Tx(e) {
  return e[e.length - 1];
}
function KF(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = Tx(e);
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
function i0(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = Te(t.min, t.max, e.origin), e.scale = Rt(r) / Rt(t), (Uf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Te(r.min, r.max, e.origin) - e.originPoint, (Uf(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function la(e, t, r, n) {
  i0(e.x, t.x, r.x, n ? n.originX : void 0), i0(e.y, t.y, r.y, n ? n.originY : void 0);
}
function a0(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Rt(t);
}
function YF(e, t, r) {
  a0(e.x, t.x, r.x), a0(e.y, t.y, r.y);
}
function s0(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Rt(t);
}
function ua(e, t, r) {
  s0(e.x, t.x, r.x), s0(e.y, t.y, r.y);
}
function XF(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? Te(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? Te(r, e, n.max) : Math.min(e, r)), e;
}
function l0(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function qF(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: l0(e.x, r, o),
    y: l0(e.y, t, n)
  };
}
function u0(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function QF(e, t) {
  return {
    x: u0(e.x, t.x),
    y: u0(e.y, t.y)
  };
}
function ZF(e, t) {
  let r = 0.5;
  const n = Rt(e), o = Rt(t);
  return o > n ? r = Oa(t.min, t.max - n, e.min) : n > o && (r = Oa(e.min, e.max - o, t.min)), vn(0, 1, r);
}
function JF(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Hf = 0.35;
function e4(e = Hf) {
  return e === !1 ? e = 0 : e === !0 && (e = Hf), {
    x: c0(e, "left", "right"),
    y: c0(e, "top", "bottom")
  };
}
function c0(e, t, r) {
  return {
    min: d0(e, t),
    max: d0(e, r)
  };
}
function d0(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const f0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Do = () => ({
  x: f0(),
  y: f0()
}), h0 = () => ({ min: 0, max: 0 }), Oe = () => ({
  x: h0(),
  y: h0()
});
function sr(e) {
  return [e("x"), e("y")];
}
function Ex({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function t4({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function r4(e, t) {
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
function bd(e) {
  return e === void 0 || e === 1;
}
function Gf({ scale: e, scaleX: t, scaleY: r }) {
  return !bd(e) || !bd(t) || !bd(r);
}
function An(e) {
  return Gf(e) || $x(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function $x(e) {
  return p0(e.x) || p0(e.y);
}
function p0(e) {
  return e && e !== "0%";
}
function su(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function m0(e, t, r, n, o) {
  return o !== void 0 && (e = su(e, o, n)), su(e, r, n) + t;
}
function Kf(e, t = 0, r = 1, n, o) {
  e.min = m0(e.min, t, r, n, o), e.max = m0(e.max, t, r, n, o);
}
function Ax(e, { x: t, y: r }) {
  Kf(e.x, t.translate, t.scale, t.originPoint), Kf(e.y, r.translate, r.scale, r.originPoint);
}
function n4(e, t, r, n = !1) {
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
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Ax(e, a)), n && An(i.latestValues) && Lo(e, i.latestValues));
  }
  t.x = v0(t.x), t.y = v0(t.y);
}
function v0(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function qr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function g0(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = Te(e.min, e.max, i);
  Kf(e, t[r], t[n], a, t.scale);
}
const o4 = ["x", "scaleX", "originX"], i4 = ["y", "scaleY", "originY"];
function Lo(e, t) {
  g0(e.x, t, o4), g0(e.y, t, i4);
}
function Rx(e, t) {
  return Ex(r4(e.getBoundingClientRect(), t));
}
function a4(e, t, r) {
  const n = Rx(e, r), { scroll: o } = t;
  return o && (qr(n.x, o.offset.x), qr(n.y, o.offset.y)), n;
}
const Mx = ({ current: e }) => e ? e.ownerDocument.defaultView : null, s4 = /* @__PURE__ */ new WeakMap();
class l4 {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Oe(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(ec(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = US(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), sr((g) => {
        let y = this.getAxisMotionValue(g).get() || 0;
        if (yr.test(y)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const v = x.layout.layoutBox[g];
            v && (y = Rt(v) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[g] = y;
      }), f && me.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: g } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = u4(g), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new Px(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: Mx(this.visualElement)
    });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && me.update(() => i(t, r));
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
    if (!n || !Ws(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (a = XF(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    r && Io(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = qF(o.layoutBox, r) : this.constraints = !1, this.elastic = e4(n), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && sr((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = JF(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !Io(t))
      return !1;
    const n = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = a4(n, o.root, this.visualElement.getTransformPagePoint());
    let a = QF(o.layout.layoutBox, i);
    if (r) {
      const s = r(t4(a));
      this.hasMutatedConstraints = !!s, s && (a = Ex(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = sr((c) => {
      if (!Ws(c, r, this.currentDirection))
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
    return n.start(Bp(t, n, 0, r));
  }
  stopAnimation() {
    sr((t) => this.getAxisMotionValue(t).stop());
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
    sr((r) => {
      const { drag: n } = this.getProps();
      if (!Ws(r, n, this.currentDirection))
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
    sr((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = ZF({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), sr((a) => {
      if (!Ws(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(Te(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    s4.set(this.visualElement, this);
    const t = this.visualElement.current, r = Ir(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      Io(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const a = Rr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (sr((c) => {
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
function Ws(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function u4(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class c4 extends wn {
  constructor(t) {
    super(t), this.removeGroupControls = ze, this.removeListeners = ze, this.controls = new l4(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ze;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const y0 = (e) => (t, r) => {
  e && me.update(() => e(t, r));
};
class d4 extends wn {
  constructor() {
    super(...arguments), this.removePointerDownListener = ze;
  }
  onPointerDown(t) {
    this.session = new Px(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Mx(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: y0(t),
      onStart: y0(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && me.update(() => o(i, a));
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
function zx() {
  const e = b.useContext(Qa);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = b.useId();
  return b.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function f4() {
  return h4(b.useContext(Qa));
}
function h4(e) {
  return e === null ? !0 : e.isPresent;
}
const Sl = {
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
function b0(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const zi = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (V.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = b0(e, t.target.x), n = b0(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, p4 = {
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
class m4 extends Kn.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: i } = t;
    xI(v4), i && (r.group && r.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Sl.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: i } = this.props, a = n.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== r || r === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || me.postRender(() => {
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
function Ix(e) {
  const [t, r] = zx(), n = b.useContext(Pp);
  return Kn.createElement(m4, { ...e, layoutGroup: n, switchLayoutGroup: b.useContext(TS), isPresent: t, safeToRemove: r });
}
const v4 = {
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
  boxShadow: p4
}, Fx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], g4 = Fx.length, S0 = (e) => typeof e == "string" ? parseFloat(e) : e, x0 = (e) => typeof e == "number" || V.test(e);
function y4(e, t, r, n, o, i) {
  o ? (e.opacity = Te(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    b4(n)
  ), e.opacityExit = Te(t.opacity !== void 0 ? t.opacity : 1, 0, S4(n))) : i && (e.opacity = Te(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let a = 0; a < g4; a++) {
    const s = `border${Fx[a]}Radius`;
    let l = w0(t, s), u = w0(r, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || x0(l) === x0(u) ? (e[s] = Math.max(Te(S0(l), S0(u), n), 0), (yr.test(u) || yr.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || r.rotate) && (e.rotate = Te(t.rotate || 0, r.rotate || 0, n));
}
function w0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const b4 = Dx(0, 0.5, Dp), S4 = Dx(0.5, 0.95, ze);
function Dx(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(Oa(e, t, n));
}
function k0(e, t) {
  e.min = t.min, e.max = t.max;
}
function Bt(e, t) {
  k0(e.x, t.x), k0(e.y, t.y);
}
function C0(e, t, r, n, o) {
  return e -= t, e = su(e, 1 / r, n), o !== void 0 && (e = su(e, 1 / o, n)), e;
}
function x4(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (yr.test(t) && (t = parseFloat(t), t = Te(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = Te(i.min, i.max, n);
  e === i && (s -= t), e.min = C0(e.min, t, r, s, o), e.max = C0(e.max, t, r, s, o);
}
function _0(e, t, [r, n, o], i, a) {
  x4(e, t[r], t[n], t[o], t.scale, i, a);
}
const w4 = ["x", "scaleX", "originX"], k4 = ["y", "scaleY", "originY"];
function P0(e, t, r, n) {
  _0(e.x, t, w4, r ? r.x : void 0, n ? n.x : void 0), _0(e.y, t, k4, r ? r.y : void 0, n ? n.y : void 0);
}
function T0(e) {
  return e.translate === 0 && e.scale === 1;
}
function Lx(e) {
  return T0(e.x) && T0(e.y);
}
function C4(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Ox(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function E0(e) {
  return Rt(e.x) / Rt(e.y);
}
class _4 {
  constructor() {
    this.members = [];
  }
  add(t) {
    jp(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Vp(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function $0(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: u, rotateY: c } = r;
    l && (n += `rotate(${l}deg) `), u && (n += `rotateX(${u}deg) `), c && (n += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || "none";
}
const P4 = (e, t) => e.depth - t.depth;
class T4 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    jp(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Vp(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(P4), this.isDirty = !1, this.children.forEach(t);
  }
}
function E4(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const i = o - r;
    i >= t && (jr(n), e(i - t));
  };
  return me.read(n, !0), () => jr(n);
}
function $4(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function A4(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function R4(e, t, r) {
  const n = xt(e) ? e : ui(e);
  return n.start(Bp("", n, t, r)), n.animation;
}
const A0 = ["", "X", "Y", "Z"], M4 = { visibility: "hidden" }, R0 = 1e3;
let z4 = 0;
const Rn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Nx({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = z4++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Rn.totalNodes = Rn.resolvedTargetDeltas = Rn.recalculatedProjection = 0, this.nodes.forEach(D4), this.nodes.forEach(j4), this.nodes.forEach(V4), this.nodes.forEach(L4), $4(Rn);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new T4());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Wp()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = A4(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = E4(f, 250), Sl.hasAnimatedSinceResize && (Sl.hasAnimatedSinceResize = !1, this.nodes.forEach(z0));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || K4, { onLayoutAnimationStart: x, onLayoutAnimationComplete: v } = c.getProps(), h = !this.targetLayout || !Ox(this.targetLayout, g) || p, m = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, m);
          const w = {
            ...xx(y, "layout"),
            onPlay: x,
            onComplete: v
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || z0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, jr(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(W4), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(M0);
        return;
      }
      this.isUpdating || this.nodes.forEach(N4), this.isUpdating = !1, this.nodes.forEach(B4), this.nodes.forEach(I4), this.nodes.forEach(F4), this.clearAllSnapshots();
      const s = performance.now();
      Ue.delta = vn(0, 1e3 / 60, s - Ue.timestamp), Ue.timestamp = s, Ue.isProcessing = !0, ud.update.process(Ue), ud.preRender.process(Ue), ud.render.process(Ue), Ue.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(O4), this.sharedNodes.forEach(U4);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, me.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      me.postRender(() => {
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
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !Lx(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || An(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), Y4(l), {
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
      return l && (qr(s.x, l.offset.x), qr(s.y, l.offset.y)), s;
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
            f && (qr(s.x, -f.offset.x), qr(s.y, -f.offset.y));
          }
          qr(s.x, c.offset.x), qr(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Oe();
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
      const s = Oe();
      Bt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !An(u.latestValues))
          continue;
        Gf(u.latestValues) && u.updateSnapshot();
        const c = Oe(), d = u.measurePageBox();
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
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Oe(), this.relativeTargetOrigin = Oe(), ua(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), Bt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Oe(), this.targetWithTransforms = Oe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), YF(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Bt(this.target, this.layout.layoutBox), Ax(this.target, this.targetDelta)) : Bt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Oe(), this.relativeTargetOrigin = Oe(), ua(this.relativeTargetOrigin, this.target, p.target), Bt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Rn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Gf(this.parent.latestValues) || $x(this.parent.latestValues)))
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
      n4(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: g } = s;
      if (!g) {
        this.projectionTransform && (this.projectionDelta = Do(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Do(), this.projectionDeltaWithTransform = Do());
      const y = this.projectionTransform;
      la(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = $0(this.projectionDelta, this.treeScale), (this.projectionTransform !== y || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), Rn.recalculatedProjection++;
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
      const f = Oe(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, y = p !== g, x = this.getStack(), v = !x || x.members.length <= 1, h = !!(y && !v && this.options.crossfade === !0 && !this.path.some(G4));
      this.animationProgress = 0;
      let m;
      this.mixTargetDelta = (w) => {
        const _ = w / 1e3;
        I0(d.x, a.x, _), I0(d.y, a.y, _), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ua(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), H4(this.relativeTarget, this.relativeTargetOrigin, f, _), m && C4(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = Oe()), Bt(m, this.relativeTarget)), y && (this.animationValues = c, y4(c, u, this.latestValues, _, h, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = _;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (jr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = me.update(() => {
        Sl.hasAnimatedSinceResize = !0, this.currentAnimation = R4(0, R0, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(R0), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && Bx(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Oe();
          const d = Rt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Rt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        Bt(s, l), Lo(s, c), la(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new _4()), this.sharedNodes.get(a).add(s);
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
      for (let c = 0; c < A0.length; c++) {
        const d = "rotate" + A0[c];
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
        return M4;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = bl(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = bl(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !An(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = $0(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y: g } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in eu) {
        if (f[y] === void 0)
          continue;
        const { correct: x, applyTo: v } = eu[y], h = u.transform === "none" ? f[y] : x(f[y], d);
        if (v) {
          const m = v.length;
          for (let w = 0; w < m; w++)
            u[v[w]] = h;
        } else
          u[y] = h;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? bl(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(M0), this.root.sharedNodes.clear();
    }
  };
}
function I4(e) {
  e.updateLayout();
}
function F4(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: i } = e.options, a = r.source !== e.layout.source;
    i === "size" ? sr((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = Rt(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : Bx(i, r.layoutBox, n) && sr((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = Rt(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = Do();
    la(s, n, r.layoutBox);
    const l = Do();
    a ? la(l, e.applyTransform(o, !0), r.measuredBox) : la(l, n, r.layoutBox);
    const u = !Lx(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const g = Oe();
          ua(g, r.layoutBox, f.layoutBox);
          const y = Oe();
          ua(y, n, p.layoutBox), Ox(g, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = g, e.relativeParent = d);
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
function D4(e) {
  Rn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function L4(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function O4(e) {
  e.clearSnapshot();
}
function M0(e) {
  e.clearMeasurements();
}
function N4(e) {
  e.isLayoutDirty = !1;
}
function B4(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function z0(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function j4(e) {
  e.resolveTargetDelta();
}
function V4(e) {
  e.calcProjection();
}
function W4(e) {
  e.resetRotation();
}
function U4(e) {
  e.removeLeadSnapshot();
}
function I0(e, t, r) {
  e.translate = Te(t.translate, 0, r), e.scale = Te(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function F0(e, t, r, n) {
  e.min = Te(t.min, r.min, n), e.max = Te(t.max, r.max, n);
}
function H4(e, t, r, n) {
  F0(e.x, t.x, r.x, n), F0(e.y, t.y, r.y, n);
}
function G4(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const K4 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, D0 = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), L0 = D0("applewebkit/") && !D0("chrome/") ? Math.round : ze;
function O0(e) {
  e.min = L0(e.min), e.max = L0(e.max);
}
function Y4(e) {
  O0(e.x), O0(e.y);
}
function Bx(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Uf(E0(t), E0(r), 0.2);
}
const X4 = Nx({
  attachResizeListener: (e, t) => Rr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Sd = {
  current: void 0
}, jx = Nx({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Sd.current) {
      const e = new X4({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Sd.current = e;
    }
    return Sd.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), q4 = {
  pan: {
    Feature: d4
  },
  drag: {
    Feature: c4,
    ProjectionNode: jx,
    MeasureLayout: Ix
  }
}, Q4 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Z4(e) {
  const t = Q4.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
function Yf(e, t, r = 1) {
  const [n, o] = Z4(e);
  if (!n)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const a = i.trim();
    return wx(a) ? parseFloat(a) : a;
  } else
    return Lf(o) ? Yf(o, t, r + 1) : o;
}
function J4(e, { ...t }, r) {
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
const eD = /* @__PURE__ */ new Set([
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
]), Vx = (e) => eD.has(e), tD = (e) => Object.keys(e).some(Vx), N0 = (e) => e === oo || e === V, B0 = (e, t) => parseFloat(e.split(", ")[t]), j0 = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return B0(o[1], t);
  {
    const i = n.match(/^matrix\((.+)\)$/);
    return i ? B0(i[1], e) : 0;
  }
}, rD = /* @__PURE__ */ new Set(["x", "y", "z"]), nD = Za.filter((e) => !rD.has(e));
function oD(e) {
  const t = [];
  return nD.forEach((r) => {
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
  x: j0(4, 13),
  y: j0(5, 14)
};
ci.translateX = ci.x;
ci.translateY = ci.y;
const iD = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((u) => {
    s[u] = ci[u](n, i);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = ci[u](l, i);
  }), e;
}, aD = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(Vx);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = r[l], d = Mi(c);
    const f = t[l];
    let p;
    if (ru(f)) {
      const g = f.length, y = f[0] === null ? 1 : 0;
      c = f[y], d = Mi(c);
      for (let x = y; x < g && f[x] !== null; x++)
        p ? Fp(Mi(f[x]) === p) : p = Mi(f[x]);
    } else
      p = Mi(f);
    if (d !== p)
      if (N0(d) && N0(p)) {
        const g = u.get();
        typeof g == "string" && u.set(parseFloat(g)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === V && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = oD(e), a = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = iD(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), qu && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function sD(e, t, r, n) {
  return tD(t) ? aD(e, t, r, n) : { target: t, transitionEnd: n };
}
const lD = (e, t, r, n) => {
  const o = J4(e, t, n);
  return t = o.target, n = o.transitionEnd, sD(e, t, r, n);
}, Xf = { current: null }, Wx = { current: !1 };
function uD() {
  if (Wx.current = !0, !!qu)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Xf.current = e.matches;
      e.addListener(t), t();
    } else
      Xf.current = !1;
}
function cD(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o], a = r[o];
    if (xt(i))
      e.addValue(o, i), au(n) && n.add(o);
    else if (xt(a))
      e.addValue(o, ui(i, { owner: e })), au(n) && n.remove(o);
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
const V0 = /* @__PURE__ */ new WeakMap(), Ux = Object.keys(La), dD = Ux.length, W0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], fD = _p.length;
class hD {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => me.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Zu(r), this.isVariantNode = PS(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && xt(f) && (f.set(s[d], !1), au(u) && u.add(d));
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
    this.current = t, V0.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), Wx.current || uD(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Xf.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    V0.delete(this.current), this.projection && this.projection.unmount(), jr(this.notifyUpdate), jr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = no.has(t), o = r.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && me.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
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
    for (let l = 0; l < dD; l++) {
      const u = Ux[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = La[u];
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
    for (let n = 0; n < W0.length; n++) {
      const o = W0[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = cD(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let n = 0; n < fD; n++) {
      const o = _p[n], i = this.props[o];
      (Da(i) || i === !1) && (r[o] = i);
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
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = Ip(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !xt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Wp()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Hx extends hD {
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
      const s = lD(this, n, a, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function pD(e) {
  return window.getComputedStyle(e);
}
class mD extends Hx {
  readValueFromInstance(t, r) {
    if (no.has(r)) {
      const n = Np(r);
      return n && n.default || 0;
    } else {
      const n = pD(t), o = (AS(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Rx(t, r);
  }
  build(t, r, n, o) {
    Ep(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return zp(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    xt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    DS(t, r, n, o);
  }
}
class vD extends Hx {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (no.has(r)) {
      const n = Np(r);
      return n && n.default || 0;
    }
    return r = LS.has(r) ? r : Mp(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return Oe();
  }
  scrapeMotionValuesFromProps(t, r) {
    return NS(t, r);
  }
  build(t, r, n, o) {
    Ap(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    OS(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = Rp(t.tagName), super.mount(t);
  }
}
const gD = (e, t) => Tp(e) ? new vD(t, { enableHardwareAcceleration: !1 }) : new mD(t, { enableHardwareAcceleration: !0 }), yD = {
  layout: {
    ProjectionNode: jx,
    MeasureLayout: Ix
  }
}, bD = {
  ...UF,
  ...c3,
  ...q4,
  ...yD
}, rc = /* @__PURE__ */ bI((e, t) => QI(e, t, bD, gD));
function Gx() {
  const e = b.useRef(!1);
  return kp(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function SD() {
  const e = Gx(), [t, r] = b.useState(0), n = b.useCallback(() => {
    e.current && r(t + 1);
  }, [t]);
  return [b.useCallback(() => me.postRender(n), [n]), t];
}
class xD extends b.Component {
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
function wD({ children: e, isPresent: t }) {
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
  }, [t]), b.createElement(xD, { isPresent: t, childRef: n, sizeRef: o }, b.cloneElement(e, { ref: n }));
}
const xd = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = BS(kD), l = b.useId(), u = b.useMemo(
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
  }, [r]), a === "popLayout" && (e = b.createElement(wD, { isPresent: r }, e)), b.createElement(Qa.Provider, { value: u }, e);
};
function kD() {
  return /* @__PURE__ */ new Map();
}
function CD(e) {
  return b.useEffect(() => () => e(), []);
}
const Mn = (e) => e.key || "";
function _D(e, t) {
  e.forEach((r) => {
    const n = Mn(r);
    t.set(n, r);
  });
}
function PD(e) {
  const t = [];
  return b.Children.forEach(e, (r) => {
    b.isValidElement(r) && t.push(r);
  }), t;
}
const nc = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = b.useContext(Pp).forceRender || SD()[0], l = Gx(), u = PD(e);
  let c = u;
  const d = b.useRef(/* @__PURE__ */ new Map()).current, f = b.useRef(c), p = b.useRef(/* @__PURE__ */ new Map()).current, g = b.useRef(!0);
  if (kp(() => {
    g.current = !1, _D(u, p), f.current = c;
  }), CD(() => {
    g.current = !0, p.clear(), d.clear();
  }), g.current)
    return b.createElement(b.Fragment, null, c.map((h) => b.createElement(xd, { key: Mn(h), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: i, mode: a }, h)));
  c = [...c];
  const y = f.current.map(Mn), x = u.map(Mn), v = y.length;
  for (let h = 0; h < v; h++) {
    const m = y[h];
    x.indexOf(m) === -1 && !d.has(m) && d.set(m, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((h, m) => {
    if (x.indexOf(m) !== -1)
      return;
    const w = p.get(m);
    if (!w)
      return;
    const _ = y.indexOf(m);
    let A = h;
    if (!A) {
      const P = () => {
        d.delete(m);
        const $ = Array.from(p.keys()).filter((R) => !x.includes(R));
        if ($.forEach((R) => p.delete(R)), f.current = u.filter((R) => {
          const I = Mn(R);
          return (
            // filter out the node exiting
            I === m || // filter out the leftover children
            $.includes(I)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), n && n();
        }
      };
      A = b.createElement(xd, { key: Mn(w), isPresent: !1, onExitComplete: P, custom: t, presenceAffectsLayout: i, mode: a }, w), d.set(m, A);
    }
    c.splice(_, 0, A);
  }), c = c.map((h) => {
    const m = h.key;
    return d.has(m) ? h : b.createElement(xd, { key: Mn(h), isPresent: !0, presenceAffectsLayout: i, mode: a }, h);
  }), b.createElement(b.Fragment, null, d.size ? c : c.map((h) => b.cloneElement(h)));
};
var TD = {
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
}, Kx = b.memo((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = TD,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = b.useState(s), p = f4();
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
  }, [p, i, o]), cI(x, d);
  const v = b.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), h = b.useMemo(() => lI(a), [a]);
  return /* @__PURE__ */ T.jsx(
    rc.div,
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
        Z.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: v,
          children: rn(r, { id: t, onClose: x })
        }
      )
    }
  );
});
Kx.displayName = "ToastComponent";
var U0 = {
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
}, rs = Ae((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...u
  } = e, c = _e("chakra-icon", s), d = Yu("Icon", e), f = {
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
  }, g = n ?? U0.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ T.jsx(Z.svg, { as: r, ...p, ...u });
  const y = a ?? U0.path;
  return /* @__PURE__ */ T.jsx(Z.svg, { verticalAlign: "middle", viewBox: g, ...p, ...u, children: y });
});
rs.displayName = "Icon";
function ED(e) {
  return /* @__PURE__ */ T.jsx(rs, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ T.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function $D(e) {
  return /* @__PURE__ */ T.jsx(rs, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ T.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function H0(e) {
  return /* @__PURE__ */ T.jsx(rs, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ T.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var AD = Wu({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Up = Ae((e, t) => {
  const r = Yu("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = xn(e), u = _e("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${AD} ${i} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ T.jsx(
    Z.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && /* @__PURE__ */ T.jsx(Z.span, { srOnly: !0, children: n })
    }
  );
});
Up.displayName = "Spinner";
var [RD, Hp] = it({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [MD, Gp] = it({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), Yx = {
  info: { icon: $D, colorScheme: "blue" },
  warning: { icon: H0, colorScheme: "orange" },
  success: { icon: ED, colorScheme: "green" },
  error: { icon: H0, colorScheme: "red" },
  loading: { icon: Up, colorScheme: "blue" }
};
function zD(e) {
  return Yx[e].colorScheme;
}
function ID(e) {
  return Yx[e].icon;
}
var Xx = Ae(
  function(t, r) {
    const n = Gp(), { status: o } = Hp(), i = {
      display: "inline",
      ...n.description
    };
    return /* @__PURE__ */ T.jsx(
      Z.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: _e("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
Xx.displayName = "AlertDescription";
function qx(e) {
  const { status: t } = Hp(), r = ID(t), n = Gp(), o = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ T.jsx(
    Z.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: _e("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ T.jsx(r, { h: "100%", w: "100%" })
    }
  );
}
qx.displayName = "AlertIcon";
var Qx = Ae(
  function(t, r) {
    const n = Gp(), { status: o } = Hp();
    return /* @__PURE__ */ T.jsx(
      Z.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: _e("chakra-alert__title", t.className),
        __css: n.title
      }
    );
  }
);
Qx.displayName = "AlertTitle";
var Zx = Ae(function(t, r) {
  var n;
  const { status: o = "info", addRole: i = !0, ...a } = xn(t), s = (n = t.colorScheme) != null ? n : zD(o), l = mi("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ T.jsx(RD, { value: { status: o }, children: /* @__PURE__ */ T.jsx(MD, { value: l, children: /* @__PURE__ */ T.jsx(
    Z.div,
    {
      "data-status": o,
      role: i ? "alert" : void 0,
      ref: r,
      ...a,
      className: _e("chakra-alert", t.className),
      __css: u
    }
  ) }) });
});
Zx.displayName = "Alert";
function FD(e) {
  return /* @__PURE__ */ T.jsx(rs, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ T.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Kp = Ae(
  function(t, r) {
    const n = Yu("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = xn(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ T.jsx(
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
        children: o || /* @__PURE__ */ T.jsx(FD, { width: "1em", height: "1em" })
      }
    );
  }
);
Kp.displayName = "CloseButton";
var DD = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, ca = LD(DD);
function LD(e) {
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
      const a = OD(o, i), { position: s, id: l } = a;
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
        const s = { ...a }, { position: l, index: u } = Ng(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: BD(i)
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
        const a = kS(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!Ng(ca.getState(), o).position
  };
}
var G0 = 0;
function OD(e, t = {}) {
  var r, n;
  G0 += 1;
  const o = (r = t.id) != null ? r : G0, i = (n = t.position) != null ? n : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => ca.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var ND = (e) => {
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
    Zx,
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
        /* @__PURE__ */ T.jsx(qx, { children: u }),
        /* @__PURE__ */ T.jsxs(Z.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ T.jsx(Qx, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ T.jsx(Xx, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ T.jsx(
          Kp,
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
function BD(e = {}) {
  const { render: t, toastComponent: r = ND } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ T.jsx(r, { ...o, ...e });
}
var [jD, yB] = it({
  name: "ToastOptionsContext",
  strict: !1
}), VD = (e) => {
  const t = b.useSyncExternalStore(
    ca.subscribe,
    ca.getState,
    ca.getState
  ), {
    motionVariants: r,
    component: n = Kx,
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
        style: uI(s),
        children: /* @__PURE__ */ T.jsx(nc, { initial: !1, children: l.map((u) => /* @__PURE__ */ T.jsx(
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
  return /* @__PURE__ */ T.jsx(Xa, { ...o, children: a });
}, WD = (e) => function({
  children: r,
  theme: n = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ T.jsxs(aI, { theme: n, ...i, children: [
    /* @__PURE__ */ T.jsx(jD, { value: o == null ? void 0 : o.defaultOptions, children: r }),
    /* @__PURE__ */ T.jsx(VD, { ...o })
  ] });
}, UD = WD(Rz), HD = Object.defineProperty, GD = (e, t, r) => t in e ? HD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Re = (e, t, r) => (GD(e, typeof t != "symbol" ? t + "" : t, r), r);
function K0(e) {
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
var KD = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function Y0(e, t, r) {
  let n = e + 1;
  return r && n >= t && (n = 0), n;
}
function X0(e, t, r) {
  let n = e - 1;
  return r && n < 0 && (n = t), n;
}
var qf = typeof window < "u" ? b.useLayoutEffect : b.useEffect, lu = (e) => e, YD = class {
  constructor() {
    Re(this, "descendants", /* @__PURE__ */ new Map()), Re(this, "register", (e) => {
      if (e != null)
        return KD(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), Re(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = K0(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), Re(this, "destroy", () => {
      this.descendants.clear();
    }), Re(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const r = e.indexOf(t.node);
        t.index = r, t.node.dataset.index = t.index.toString();
      });
    }), Re(this, "count", () => this.descendants.size), Re(this, "enabledCount", () => this.enabledValues().length), Re(this, "values", () => Array.from(this.descendants.values()).sort((t, r) => t.index - r.index)), Re(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), Re(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), Re(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), Re(this, "first", () => this.item(0)), Re(this, "firstEnabled", () => this.enabledItem(0)), Re(this, "last", () => this.item(this.descendants.size - 1)), Re(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), Re(this, "indexOf", (e) => {
      var t, r;
      return e && (r = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? r : -1;
    }), Re(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), Re(this, "next", (e, t = !0) => {
      const r = Y0(e, this.count(), t);
      return this.item(r);
    }), Re(this, "nextEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = Y0(
        n,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), Re(this, "prev", (e, t = !0) => {
      const r = X0(e, this.count() - 1, t);
      return this.item(r);
    }), Re(this, "prevEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = X0(
        n,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), Re(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const r = Array.from(this.descendants.keys()).concat(e), n = K0(r);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(n);
    });
  }
};
function XD(e, t) {
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
function br(...e) {
  return (t) => {
    e.forEach((r) => {
      XD(r, t);
    });
  };
}
function qD(...e) {
  return b.useMemo(() => br(...e), e);
}
function QD() {
  const e = b.useRef(new YD());
  return qf(() => () => e.current.destroy()), e.current;
}
var [ZD, Jx] = it({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function JD(e) {
  const t = Jx(), [r, n] = b.useState(-1), o = b.useRef(null);
  qf(() => () => {
    o.current && t.unregister(o.current);
  }, []), qf(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    r != a && !Number.isNaN(a) && n(a);
  });
  const i = lu(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: r,
    enabledIndex: t.enabledIndexOf(o.current),
    register: br(i, o)
  };
}
function eL() {
  return [
    lu(ZD),
    () => lu(Jx()),
    () => QD(),
    (o) => JD(o)
  ];
}
function tL(e) {
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
var q0 = {
  enter: {
    duration: 0.2,
    ease: Qf.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Qf.easeIn
  }
}, uu = {
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
      transition: (n = e == null ? void 0 : e.enter) != null ? n : uu.enter(q0.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : uu.exit(q0.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, ew = {
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
  return /* @__PURE__ */ T.jsx(nc, { custom: f, children: d && /* @__PURE__ */ T.jsx(
    rc.div,
    {
      ref: r,
      className: _e("chakra-fade", i),
      custom: f,
      ...ew,
      animate: c,
      ...u
    }
  ) });
});
nL.displayName = "Fade";
var Q0 = {
  exit: {
    duration: 0.15,
    ease: Qf.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, oL = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: i } = Zf({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : uu.exit(Q0.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: i } = Zf({ direction: e });
    return {
      ...i,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : uu.enter(Q0.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, tw = b.forwardRef(function(t, r) {
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
  ), y = i ? a && i : !0, x = a || i ? "enter" : "exit", v = { transitionEnd: u, transition: l, direction: n, delay: c };
  return /* @__PURE__ */ T.jsx(nc, { custom: v, children: y && /* @__PURE__ */ T.jsx(
    rc.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: _e("chakra-slide", s),
      animate: x,
      exit: "exit",
      custom: v,
      variants: oL,
      style: g,
      ...d
    }
  ) });
});
tw.displayName = "Slide";
function iL(e) {
  return b.Children.toArray(e).filter(
    (t) => b.isValidElement(t)
  );
}
var [bB, aL] = it({
  strict: !1,
  name: "ButtonGroupContext"
});
function sL(e) {
  const [t, r] = b.useState(!e);
  return { ref: b.useCallback((i) => {
    i && r(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function Jf(e) {
  const { children: t, className: r, ...n } = e, o = b.isValidElement(t) ? b.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = _e("chakra-button__icon", r);
  return /* @__PURE__ */ T.jsx(
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
Jf.displayName = "ButtonIcon";
function eh(e) {
  const {
    label: t,
    placement: r,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ T.jsx(Up, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = _e("chakra-button__spinner", i), u = r === "start" ? "marginEnd" : "marginStart", c = b.useMemo(
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
  return /* @__PURE__ */ T.jsx(Z.div, { className: l, ...s, __css: c, children: o });
}
eh.displayName = "ButtonSpinner";
var Yp = Ae((e, t) => {
  const r = aL(), n = Yu("Button", { ...r, ...e }), {
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
    ...v
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
  }, [n, r]), { ref: m, type: w } = sL(x), _ = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ T.jsxs(
    Z.button,
    {
      ref: qD(t, m),
      as: x,
      type: f ?? w,
      "data-active": q(a),
      "data-loading": q(i),
      __css: h,
      className: _e("chakra-button", y),
      ...v,
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
        i ? c || /* @__PURE__ */ T.jsx(Z.span, { opacity: 0, children: /* @__PURE__ */ T.jsx(Z0, { ..._ }) }) : /* @__PURE__ */ T.jsx(Z0, { ..._ }),
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
Yp.displayName = "Button";
function Z0(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    t && /* @__PURE__ */ T.jsx(Jf, { marginEnd: o, children: t }),
    n,
    r && /* @__PURE__ */ T.jsx(Jf, { marginStart: o, children: r })
  ] });
}
var [SB, lL] = it({
  name: "CheckboxGroupContext",
  strict: !1
});
function uL(e) {
  const [t, r] = b.useState(e), [n, o] = b.useState(!1);
  return e !== t && (o(!0), r(e)), n;
}
function cL(e) {
  return /* @__PURE__ */ T.jsx(
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
      children: /* @__PURE__ */ T.jsx("polyline", { points: "1.5 6 4.5 9 10.5 1" })
    }
  );
}
function dL(e) {
  return /* @__PURE__ */ T.jsx(
    Z.svg,
    {
      width: "1.2em",
      viewBox: "0 0 24 24",
      style: { stroke: "currentColor", strokeWidth: 4 },
      ...e,
      children: /* @__PURE__ */ T.jsx("line", { x1: "21", x2: "3", y1: "12", y2: "12" })
    }
  );
}
function fL(e) {
  const { isIndeterminate: t, isChecked: r, ...n } = e, o = t ? dL : cL;
  return r || t ? /* @__PURE__ */ T.jsx(
    Z.div,
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
var [hL, pL] = it({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [mL, rw] = it({
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
  } = e, s = b.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = b.useState(!1), [g, y] = b.useState(!1), [x, v] = b.useState(!1), h = b.useCallback(
    (P = {}, $ = null) => ({
      id: d,
      ...P,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: br($, (R) => {
        R && y(!0);
      })
    }),
    [d]
  ), m = b.useCallback(
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
      ref: br($, (R) => {
        R && p(!0);
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
    onFocus: () => v(!0),
    onBlur: () => v(!1),
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
    getLabelProps: m,
    getRequiredIndicatorProps: A
  };
}
var gL = Ae(
  function(t, r) {
    const n = mi("Form", t), o = xn(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = vL(o), l = _e("chakra-form-control", t.className);
    return /* @__PURE__ */ T.jsx(mL, { value: s, children: /* @__PURE__ */ T.jsx(hL, { value: n, children: /* @__PURE__ */ T.jsx(
      Z.div,
      {
        ...i({}, r),
        className: l,
        __css: n.container
      }
    ) }) });
  }
);
gL.displayName = "FormControl";
var yL = Ae(
  function(t, r) {
    const n = rw(), o = pL(), i = _e("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ T.jsx(
      Z.div,
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
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: o, ...i } = nw(e);
  return {
    ...i,
    disabled: t,
    readOnly: n,
    required: o,
    "aria-invalid": Uc(r),
    "aria-required": Uc(o),
    "aria-readonly": Uc(n)
  };
}
function nw(e) {
  var t, r, n;
  const o = rw(), {
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
    onFocus: Fe(o == null ? void 0 : o.onFocus, p),
    onBlur: Fe(o == null ? void 0 : o.onBlur, g)
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
}, xL = () => typeof document < "u", J0 = !1, ns = null, eo = !1, th = !1, rh = /* @__PURE__ */ new Set();
function Xp(e, t) {
  rh.forEach((r) => r(e, t));
}
var wL = typeof window < "u" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;
function kL(e) {
  return !(e.metaKey || !wL && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function ey(e) {
  eo = !0, kL(e) && (ns = "keyboard", Xp("keyboard", e));
}
function fo(e) {
  if (ns = "pointer", e.type === "mousedown" || e.type === "pointerdown") {
    eo = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let r = !1;
    try {
      r = t.matches(":focus-visible");
    } catch {
    }
    if (r)
      return;
    Xp("pointer", e);
  }
}
function CL(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : e.detail === 0 && !e.pointerType;
}
function _L(e) {
  CL(e) && (eo = !0, ns = "virtual");
}
function PL(e) {
  e.target === window || e.target === document || (!eo && !th && (ns = "virtual", Xp("virtual", e)), eo = !1, th = !1);
}
function TL() {
  eo = !1, th = !0;
}
function ty() {
  return ns !== "pointer";
}
function EL() {
  if (!xL() || J0)
    return;
  const { focus: e } = HTMLElement.prototype;
  HTMLElement.prototype.focus = function(...r) {
    eo = !0, e.apply(this, r);
  }, document.addEventListener("keydown", ey, !0), document.addEventListener("keyup", ey, !0), document.addEventListener("click", _L, !0), window.addEventListener("focus", PL, !0), window.addEventListener("blur", TL, !1), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", fo, !0), document.addEventListener("pointermove", fo, !0), document.addEventListener("pointerup", fo, !0)) : (document.addEventListener("mousedown", fo, !0), document.addEventListener("mousemove", fo, !0), document.addEventListener("mouseup", fo, !0)), J0 = !0;
}
function $L(e) {
  EL(), e(ty());
  const t = () => e(ty());
  return rh.add(t), () => {
    rh.delete(t);
  };
}
function AL(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function RL(e = {}) {
  const t = nw(e), {
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
    tabIndex: v = void 0,
    "aria-label": h,
    "aria-labelledby": m,
    "aria-invalid": w,
    ..._
  } = e, A = AL(_, [
    "isDisabled",
    "isReadOnly",
    "isRequired",
    "isInvalid",
    "id",
    "onBlur",
    "onFocus",
    "aria-describedby"
  ]), P = Gn(p), $ = Gn(s), R = Gn(l), [I, U] = b.useState(!1), [ue, fe] = b.useState(!1), [Y, le] = b.useState(!1), [ge, F] = b.useState(!1);
  b.useEffect(() => $L(U), []);
  const z = b.useRef(null), [O, W] = b.useState(!0), [j, ee] = b.useState(!!c), H = d !== void 0, re = H ? d : j, wt = b.useCallback(
    (G) => {
      if (n || r) {
        G.preventDefault();
        return;
      }
      H || ee(re ? G.target.checked : g ? !0 : G.target.checked), P == null || P(G);
    },
    [
      n,
      r,
      re,
      H,
      g,
      P
    ]
  );
  Vn(() => {
    z.current && (z.current.indeterminate = !!g);
  }, [g]), Df(() => {
    r && fe(!1);
  }, [r, fe]), Vn(() => {
    const G = z.current;
    if (!(G != null && G.form))
      return;
    const ht = () => {
      ee(!!c);
    };
    return G.form.addEventListener("reset", ht), () => {
      var Lt;
      return (Lt = G.form) == null ? void 0 : Lt.removeEventListener("reset", ht);
    };
  }, []);
  const xe = r && !f, Ie = b.useCallback(
    (G) => {
      G.key === " " && F(!0);
    },
    [F]
  ), Je = b.useCallback(
    (G) => {
      G.key === " " && F(!1);
    },
    [F]
  );
  Vn(() => {
    if (!z.current)
      return;
    z.current.checked !== re && ee(z.current.checked);
  }, [z.current]);
  const Ft = b.useCallback(
    (G = {}, ht = null) => {
      const Lt = (ao) => {
        ue && ao.preventDefault(), F(!0);
      };
      return {
        ...G,
        ref: ht,
        "data-active": q(ge),
        "data-hover": q(Y),
        "data-checked": q(re),
        "data-focus": q(ue),
        "data-focus-visible": q(ue && I),
        "data-indeterminate": q(g),
        "data-disabled": q(r),
        "data-invalid": q(i),
        "data-readonly": q(n),
        "aria-hidden": !0,
        onMouseDown: Fe(G.onMouseDown, Lt),
        onMouseUp: Fe(G.onMouseUp, () => F(!1)),
        onMouseEnter: Fe(
          G.onMouseEnter,
          () => le(!0)
        ),
        onMouseLeave: Fe(
          G.onMouseLeave,
          () => le(!1)
        )
      };
    },
    [
      ge,
      re,
      r,
      ue,
      I,
      Y,
      g,
      i,
      n
    ]
  ), kt = b.useCallback(
    (G = {}, ht = null) => ({
      ...G,
      ref: ht,
      "data-active": q(ge),
      "data-hover": q(Y),
      "data-checked": q(re),
      "data-focus": q(ue),
      "data-focus-visible": q(ue && I),
      "data-indeterminate": q(g),
      "data-disabled": q(r),
      "data-invalid": q(i),
      "data-readonly": q(n)
    }),
    [
      ge,
      re,
      r,
      ue,
      I,
      Y,
      g,
      i,
      n
    ]
  ), Dt = b.useCallback(
    (G = {}, ht = null) => ({
      ...A,
      ...G,
      ref: br(ht, (Lt) => {
        Lt && W(Lt.tagName === "LABEL");
      }),
      onClick: Fe(G.onClick, () => {
        var Lt;
        O || ((Lt = z.current) == null || Lt.click(), requestAnimationFrame(() => {
          var ao;
          (ao = z.current) == null || ao.focus({ preventScroll: !0 });
        }));
      }),
      "data-disabled": q(r),
      "data-checked": q(re),
      "data-invalid": q(i)
    }),
    [A, r, re, i, O]
  ), kn = b.useCallback(
    (G = {}, ht = null) => ({
      ...G,
      ref: br(z, ht),
      type: "checkbox",
      name: y,
      value: x,
      id: a,
      tabIndex: v,
      onChange: Fe(G.onChange, wt),
      onBlur: Fe(
        G.onBlur,
        $,
        () => fe(!1)
      ),
      onFocus: Fe(
        G.onFocus,
        R,
        () => fe(!0)
      ),
      onKeyDown: Fe(G.onKeyDown, Ie),
      onKeyUp: Fe(G.onKeyUp, Je),
      required: o,
      checked: re,
      disabled: xe,
      readOnly: n,
      "aria-label": h,
      "aria-labelledby": m,
      "aria-invalid": w ? !!w : i,
      "aria-describedby": u,
      "aria-disabled": r,
      style: SL
    }),
    [
      y,
      x,
      a,
      wt,
      $,
      R,
      Ie,
      Je,
      o,
      re,
      xe,
      n,
      h,
      m,
      w,
      i,
      u,
      r,
      v
    ]
  ), io = b.useCallback(
    (G = {}, ht = null) => ({
      ...G,
      ref: ht,
      onMouseDown: Fe(G.onMouseDown, ML),
      "data-disabled": q(r),
      "data-checked": q(re),
      "data-invalid": q(i)
    }),
    [re, r, i]
  );
  return {
    state: {
      isInvalid: i,
      isFocused: ue,
      isChecked: re,
      isActive: ge,
      isHovered: Y,
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
function ML(e) {
  e.preventDefault(), e.stopPropagation();
}
var zL = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "top",
  userSelect: "none",
  flexShrink: 0
}, IL = {
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "top",
  position: "relative"
}, FL = Wu({
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
}), DL = Wu({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}), LL = Wu({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
}), ow = Ae(function(t, r) {
  const n = lL(), o = { ...n, ...t }, i = mi("Checkbox", o), a = xn(t), {
    spacing: s = "0.5rem",
    className: l,
    children: u,
    iconColor: c,
    iconSize: d,
    icon: f = /* @__PURE__ */ T.jsx(fL, {}),
    isChecked: p,
    isDisabled: g = n == null ? void 0 : n.isDisabled,
    onChange: y,
    inputProps: x,
    ...v
  } = a;
  let h = p;
  n != null && n.value && a.value && (h = n.value.includes(a.value));
  let m = y;
  n != null && n.onChange && a.value && (m = XP(n.onChange, y));
  const {
    state: w,
    getInputProps: _,
    getCheckboxProps: A,
    getLabelProps: P,
    getRootProps: $
  } = RL({
    ...v,
    isDisabled: g,
    isChecked: h,
    onChange: m
  }), R = uL(w.isChecked), I = b.useMemo(
    () => ({
      animation: R ? w.isIndeterminate ? `${DL} 20ms linear, ${LL} 200ms linear` : `${FL} 200ms linear` : void 0,
      fontSize: d,
      color: c,
      ...i.icon
    }),
    [c, d, R, w.isIndeterminate, i.icon]
  ), U = b.cloneElement(f, {
    __css: I,
    isIndeterminate: w.isIndeterminate,
    isChecked: w.isChecked
  });
  return /* @__PURE__ */ T.jsxs(
    Z.label,
    {
      __css: { ...IL, ...i.container },
      className: _e("chakra-checkbox", l),
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
          Z.span,
          {
            __css: { ...zL, ...i.control },
            className: "chakra-checkbox__control",
            ...A(),
            children: U
          }
        ),
        u && /* @__PURE__ */ T.jsx(
          Z.span,
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
ow.displayName = "Checkbox";
function OL(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var nh = "data-focus-lock", iw = "data-focus-lock-disabled", NL = "data-no-focus-lock", BL = "data-autofocus-inside", jL = "data-no-autofocus";
function VL(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function WL(e, t) {
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
function aw(e, t) {
  return WL(t || null, function(r) {
    return e.forEach(function(n) {
      return VL(n, r);
    });
  });
}
var wd = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, fr = function() {
  return fr = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, fr.apply(this, arguments);
};
function sw(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function UL(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function lw(e) {
  return e;
}
function uw(e, t) {
  t === void 0 && (t = lw);
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
function qp(e, t) {
  return t === void 0 && (t = lw), uw(e, t);
}
function cw(e) {
  e === void 0 && (e = {});
  var t = uw(null);
  return t.options = fr({ async: !0, ssr: !1 }, e), t;
}
var dw = function(e) {
  var t = e.sideCar, r = sw(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return b.createElement(n, fr({}, r));
};
dw.isSideCarExport = !0;
function HL(e, t) {
  return e.useMedium(t), dw;
}
var fw = qp({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), hw = qp(), GL = qp(), KL = cw({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), YL = [], Qp = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o = b.useState(), i = o[0], a = o[1], s = b.useRef(), l = b.useRef(!1), u = b.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, g = t.crossFrame, y = t.autoFocus;
  t.allowTextSelection;
  var x = t.group, v = t.className, h = t.whiteList, m = t.hasPositiveIndices, w = t.shards, _ = w === void 0 ? YL : w, A = t.as, P = A === void 0 ? "div" : A, $ = t.lockProps, R = $ === void 0 ? {} : $, I = t.sideCar, U = t.returnFocus, ue = t.focusOptions, fe = t.onActivation, Y = t.onDeactivation, le = b.useState({}), ge = le[0], F = b.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && fe && fe(s.current), l.current = !0;
  }, [fe]), z = b.useCallback(function() {
    l.current = !1, Y && Y(s.current);
  }, [Y]);
  b.useEffect(function() {
    d || (u.current = null);
  }, []);
  var O = b.useCallback(function(Ie) {
    var Je = u.current;
    if (Je && Je.focus) {
      var Ft = typeof U == "function" ? U(Je) : U;
      if (Ft) {
        var kt = typeof Ft == "object" ? Ft : void 0;
        u.current = null, Ie ? Promise.resolve().then(function() {
          return Je.focus(kt);
        }) : Je.focus(kt);
      }
    }
  }, [U]), W = b.useCallback(function(Ie) {
    l.current && fw.useMedium(Ie);
  }, []), j = hw.useMedium, ee = b.useCallback(function(Ie) {
    s.current !== Ie && (s.current = Ie, a(Ie));
  }, []), H = Jn((n = {}, n[iw] = d && "disabled", n[nh] = x, n), R), re = f !== !0, wt = re && f !== "tail", xe = aw([r, ee]);
  return /* @__PURE__ */ b.createElement(b.Fragment, null, re && [
    // nearest focus guard
    /* @__PURE__ */ b.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: wd
    }),
    // first tabbed element guard
    m ? /* @__PURE__ */ b.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: wd
    }) : null
  ], !d && /* @__PURE__ */ b.createElement(I, {
    id: ge,
    sideCar: KL,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: g,
    autoFocus: y,
    whiteList: h,
    shards: _,
    onActivation: F,
    onDeactivation: z,
    returnFocus: O,
    focusOptions: ue
  }), /* @__PURE__ */ b.createElement(P, Jn({
    ref: xe
  }, H, {
    className: v,
    onBlur: j,
    onFocus: W
  }), c), wt && /* @__PURE__ */ b.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: wd
  }));
});
Qp.propTypes = {};
Qp.defaultProps = {
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
const pw = Qp;
function oh(e, t) {
  return oh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, oh(e, t);
}
function XL(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, oh(e, t);
}
function Na(e) {
  "@babel/helpers - typeof";
  return Na = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Na(e);
}
function qL(e, t) {
  if (Na(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Na(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function QL(e) {
  var t = qL(e, "string");
  return Na(t) === "symbol" ? t : String(t);
}
function ZL(e, t, r) {
  return t = QL(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function JL(e, t) {
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
      XL(c, u);
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
    return ZL(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var Sr = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, cu = function(e) {
  return Array.isArray(e) ? e : [e];
}, mw = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, eO = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, vw = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, gw = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, tO = function(e, t) {
  return !e || gw(e) || !eO(e) && t(vw(e));
}, yw = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = tO(t, yw.bind(void 0, e));
  return e.set(t, n), n;
}, rO = function(e, t) {
  return e && !gw(e) ? iO(e) ? t(vw(e)) : !1 : !0;
}, bw = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = rO(t, bw.bind(void 0, e));
  return e.set(t, n), n;
}, Sw = function(e) {
  return e.dataset;
}, nO = function(e) {
  return e.tagName === "BUTTON";
}, xw = function(e) {
  return e.tagName === "INPUT";
}, ww = function(e) {
  return xw(e) && e.type === "radio";
}, oO = function(e) {
  return !((xw(e) || nO(e)) && (e.type === "hidden" || e.disabled));
}, iO = function(e) {
  var t = e.getAttribute(jL);
  return ![!0, "true", ""].includes(t);
}, Zp = function(e) {
  var t;
  return !!(e && (!((t = Sw(e)) === null || t === void 0) && t.focusGuard));
}, du = function(e) {
  return !Zp(e);
}, aO = function(e) {
  return !!e;
}, sO = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, kw = function(e, t, r) {
  return Sr(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(sO);
}, lO = [
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
], Jp = lO.join(","), uO = "".concat(Jp, ", [data-focus-guard]"), Cw = function(e, t) {
  return Sr((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? uO : Jp) ? [n] : [], Cw(n));
  }, []);
}, cO = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? oc([e.contentDocument.body], t) : [e];
}, oc = function(e, t) {
  return e.reduce(function(r, n) {
    var o, i = Cw(n, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return cO(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      n.parentNode ? Sr(n.parentNode.querySelectorAll(Jp)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, dO = function(e) {
  var t = e.querySelectorAll("[".concat(BL, "]"));
  return Sr(t).map(function(r) {
    return oc([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, em = function(e, t) {
  return Sr(e).filter(function(r) {
    return yw(t, r);
  }).filter(function(r) {
    return oO(r);
  });
}, ry = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Sr(e).filter(function(r) {
    return bw(t, r);
  });
}, ih = function(e, t, r) {
  return kw(em(oc(e, r), t), !0, r);
}, ny = function(e, t) {
  return kw(em(oc(e), t), !1);
}, fO = function(e, t) {
  return em(dO(e), t);
}, qo = function(e, t) {
  return e.shadowRoot ? qo(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Sr(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? qo(o, t) : !1;
    }
    return qo(r, t);
  });
}, hO = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var i = e[n].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, _w = function(e) {
  return e.parentNode ? _w(e.parentNode) : e;
}, tm = function(e) {
  var t = cu(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(nh);
    return r.push.apply(r, o ? hO(Sr(_w(n).querySelectorAll("[".concat(nh, '="').concat(o, '"]:not([').concat(iw, '="disabled"])')))) : [n]), r;
  }, []);
}, pO = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Ba = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Ba(t.shadowRoot) : t instanceof HTMLIFrameElement && pO(function() {
      return t.contentWindow.document;
    }) ? Ba(t.contentWindow.document) : t;
  }
}, mO = function(e, t) {
  return e === t;
}, vO = function(e, t) {
  return !!Sr(e.querySelectorAll("iframe")).some(function(r) {
    return mO(r, t);
  });
}, Pw = function(e, t) {
  return t === void 0 && (t = Ba(mw(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : tm(e).some(function(r) {
    return qo(r, t) || vO(r, t);
  });
}, gO = function(e) {
  e === void 0 && (e = document);
  var t = Ba(e);
  return t ? Sr(e.querySelectorAll("[".concat(NL, "]"))).some(function(r) {
    return qo(r, t);
  }) : !1;
}, yO = function(e, t) {
  return t.filter(ww).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, rm = function(e, t) {
  return ww(e) && e.name ? yO(e, t) : e;
}, bO = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(rm(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, oy = function(e) {
  return e[0] && e.length > 1 ? rm(e[0], e) : e[0];
}, iy = function(e, t) {
  return e.length > 1 ? e.indexOf(rm(e[t], e)) : t;
}, Tw = "NEW_FOCUS", SO = function(e, t, r, n) {
  var o = e.length, i = e[0], a = e[o - 1], s = Zp(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, u = n ? t.indexOf(n) : l, c = n ? e.indexOf(n) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), g = bO(t), y = r !== void 0 ? g.indexOf(r) : -1, x = y - (n ? g.indexOf(n) : l), v = iy(e, 0), h = iy(e, o - 1);
    if (l === -1 || c === -1)
      return Tw;
    if (!d && c >= 0)
      return c;
    if (l <= f && s && Math.abs(d) > 1)
      return h;
    if (l >= p && s && Math.abs(d) > 1)
      return v;
    if (d && Math.abs(x) > 1)
      return c;
    if (l <= f)
      return h;
    if (l > p)
      return v;
    if (d)
      return Math.abs(d) > 1 ? c : (o + c + d) % o;
  }
}, xO = function(e) {
  return function(t) {
    var r, n = (r = Sw(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, wO = function(e, t, r) {
  var n = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = ry(n.filter(xO(r)));
  return o && o.length ? oy(o) : oy(ry(t));
}, ah = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && ah(e.parentNode.host || e.parentNode, t), t;
}, kd = function(e, t) {
  for (var r = ah(e), n = ah(t), o = 0; o < r.length; o += 1) {
    var i = r[o];
    if (n.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, Ew = function(e, t, r) {
  var n = cu(e), o = cu(t), i = n[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = kd(a || s, s) || a, r.filter(Boolean).forEach(function(l) {
      var u = kd(i, l);
      u && (!a || qo(u, a) ? a = u : a = kd(u, a));
    });
  }), a;
}, kO = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(fO(n, t));
  }, []);
}, CO = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(aO);
}, _O = function(e, t) {
  var r = Ba(cu(e).length > 0 ? document : mw(e).ownerDocument), n = tm(e).filter(du), o = Ew(r || e, e, n), i = /* @__PURE__ */ new Map(), a = ny(n, i), s = ih(n, i).filter(function(p) {
    var g = p.node;
    return du(g);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = ny([o], i).map(function(p) {
      var g = p.node;
      return g;
    }), u = CO(l, s), c = u.map(function(p) {
      var g = p.node;
      return g;
    }), d = SO(c, l, r, t);
    if (d === Tw) {
      var f = wO(a, c, kO(n, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, PO = function(e) {
  var t = tm(e).filter(du), r = Ew(e, e, t), n = /* @__PURE__ */ new Map(), o = ih([r], n, !0), i = ih(t, n).filter(function(a) {
    var s = a.node;
    return du(s);
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
      guard: Zp(s)
    };
  });
}, TO = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, Cd = 0, _d = !1, $w = function(e, t, r) {
  r === void 0 && (r = {});
  var n = _O(e, t);
  if (!_d && n) {
    if (Cd > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), _d = !0, setTimeout(function() {
        _d = !1;
      }, 1);
      return;
    }
    Cd++, TO(n.node, r.focusOptions), Cd--;
  }
};
function nm(e) {
  setTimeout(e, 1);
}
var EO = function() {
  return document && document.activeElement === document.body;
}, $O = function() {
  return EO() || gO();
}, Qo = null, Oo = null, Zo = null, ja = !1, AO = function() {
  return !0;
}, RO = function(t) {
  return (Qo.whiteList || AO)(t);
}, MO = function(t, r) {
  Zo = {
    observerNode: t,
    portaledElement: r
  };
}, zO = function(t) {
  return Zo && Zo.portaledElement === t;
};
function ay(e, t, r, n) {
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
var IO = function(t) {
  return t && "current" in t ? t.current : t;
}, FO = function(t) {
  return t ? !!ja : ja === "meanwhile";
}, DO = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, LO = function(t, r) {
  return r.some(function(n) {
    return DO(t, n, n);
  });
}, fu = function() {
  var t = !1;
  if (Qo) {
    var r = Qo, n = r.observed, o = r.persistentFocus, i = r.autoFocus, a = r.shards, s = r.crossFrame, l = r.focusOptions, u = n || Zo && Zo.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(IO).filter(Boolean));
      if ((!c || RO(c)) && (o || FO(s) || !$O() || !Oo && i) && (u && !// active element is "inside" working area
      (Pw(d) || // check for shadow-dom contained elements
      c && LO(c, d) || zO(c)) && (document && !Oo && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = $w(d, Oo, {
        focusOptions: l
      }), Zo = {})), ja = !1, Oo = document && document.activeElement), document) {
        var f = document && document.activeElement, p = PO(d), g = p.map(function(y) {
          var x = y.node;
          return x;
        }).indexOf(f);
        g > -1 && (p.filter(function(y) {
          var x = y.guard, v = y.node;
          return x && v.dataset.focusAutoGuard;
        }).forEach(function(y) {
          var x = y.node;
          return x.removeAttribute("tabIndex");
        }), ay(g, p.length, 1, p), ay(g, -1, -1, p));
      }
    }
  }
  return t;
}, Aw = function(t) {
  fu() && t && (t.stopPropagation(), t.preventDefault());
}, om = function() {
  return nm(fu);
}, OO = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || MO(n, r);
}, NO = function() {
  return null;
}, Rw = function() {
  ja = "just", nm(function() {
    ja = "meanwhile";
  });
}, BO = function() {
  document.addEventListener("focusin", Aw), document.addEventListener("focusout", om), window.addEventListener("blur", Rw);
}, jO = function() {
  document.removeEventListener("focusin", Aw), document.removeEventListener("focusout", om), window.removeEventListener("blur", Rw);
};
function VO(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function WO(e) {
  var t = e.slice(-1)[0];
  t && !Qo && BO();
  var r = Qo, n = r && t && t.id === r.id;
  Qo = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === r.id;
  }).length || r.returnFocus(!t)), t ? (Oo = null, (!n || r.observed !== t.observed) && t.onActivation(), fu(), nm(fu)) : (jO(), Oo = null);
}
fw.assignSyncMedium(OO);
hw.assignMedium(om);
GL.assignMedium(function(e) {
  return e({
    moveFocusInside: $w,
    focusInside: Pw
  });
});
const UO = JL(VO, WO)(NO);
var Mw = /* @__PURE__ */ b.forwardRef(function(t, r) {
  return /* @__PURE__ */ b.createElement(pw, Jn({
    sideCar: UO,
    ref: r
  }, t));
}), zw = pw.propTypes || {};
zw.sideCar;
OL(zw, ["sideCar"]);
Mw.propTypes = {};
const sy = Mw;
function HO(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function GO(e) {
  var t;
  if (!HO(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
var KO = (e) => e.hasAttribute("tabindex");
function YO(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function Iw(e) {
  return e.parentElement && Iw(e.parentElement) ? !0 : e.hidden;
}
function XO(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function qO(e) {
  if (!GO(e) || Iw(e) || YO(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : XO(e) ? !0 : KO(e);
}
var QO = [
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
], ZO = QO.join(), JO = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function eN(e) {
  const t = Array.from(
    e.querySelectorAll(ZO)
  );
  return t.unshift(e), t.filter((r) => qO(r) && JO(r));
}
var ly, tN = (ly = sy.default) != null ? ly : sy, Fw = (e) => {
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
    t != null && t.current ? t.current.focus() : n != null && n.current && eN(n.current).length === 0 && requestAnimationFrame(() => {
      var g;
      (g = n.current) == null || g.focus();
    });
  }, [t, n]), d = b.useCallback(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ T.jsx(
    tN,
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
Fw.displayName = "FocusLock";
var im = Ae(function(t, r) {
  const { htmlSize: n, ...o } = t, i = mi("Input", o), a = xn(o), s = bL(a), l = _e("chakra-input", t.className);
  return /* @__PURE__ */ T.jsx(
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
im.displayName = "Input";
im.id = "Input";
function rN(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : rr(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
var Dw = (e) => /* @__PURE__ */ T.jsx(
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
Dw.displayName = "StackItem";
function nN(e) {
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
    "&": rN(
      r,
      (o) => n[o]
    )
  };
}
var Lw = Ae((e, t) => {
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
    () => nN({ spacing: a, direction: p }),
    [a, p]
  ), y = !!u, x = !d && !y, v = b.useMemo(() => {
    const m = iL(l);
    return x ? m : m.map((w, _) => {
      const A = typeof w.key < "u" ? w.key : _, P = _ + 1 === m.length, R = d ? /* @__PURE__ */ T.jsx(Dw, { children: w }, A) : w;
      if (!y)
        return R;
      const I = b.cloneElement(
        u,
        {
          __css: g
        }
      ), U = P ? null : I;
      return /* @__PURE__ */ T.jsxs(b.Fragment, { children: [
        R,
        U
      ] }, A);
    });
  }, [
    u,
    g,
    y,
    x,
    d,
    l
  ]), h = _e("chakra-stack", c);
  return /* @__PURE__ */ T.jsx(
    Z.div,
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
      children: v
    }
  );
});
Lw.displayName = "Stack";
var Va = Ae((e, t) => /* @__PURE__ */ T.jsx(Lw, { align: "center", ...e, direction: "row", ref: t }));
Va.displayName = "HStack";
var am = Z("div");
am.displayName = "Box";
var Ow = Ae(function(t, r) {
  const { size: n, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ T.jsx(
    am,
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
Ow.displayName = "Square";
var oN = Ae(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ T.jsx(Ow, { size: n, ref: r, borderRadius: "9999px", ...o });
});
oN.displayName = "Circle";
function iN() {
  const e = b.useRef(/* @__PURE__ */ new Map()), t = e.current, r = b.useCallback((o, i, a, s) => {
    e.current.set(a, { type: i, el: o, options: s }), o.addEventListener(i, a, s);
  }, []), n = b.useCallback(
    (o, i, a, s) => {
      o.removeEventListener(i, a, s), e.current.delete(a);
    },
    []
  );
  return b.useEffect(
    () => () => {
      t.forEach((o, i) => {
        n(o.el, o.type, i, o.options);
      });
    },
    [n, t]
  ), { add: r, remove: n };
}
function Pd(e) {
  const t = e.target, { tagName: r, isContentEditable: n } = t;
  return r !== "INPUT" && r !== "TEXTAREA" && n !== !0;
}
function aN(e = {}) {
  const {
    ref: t,
    isDisabled: r,
    isFocusable: n,
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
    ...g
  } = e, [y, x] = b.useState(!0), [v, h] = b.useState(!1), m = iN(), w = (F) => {
    F && F.tagName !== "BUTTON" && x(!1);
  }, _ = y ? d : d || 0, A = r && !n, P = b.useCallback(
    (F) => {
      if (r) {
        F.stopPropagation(), F.preventDefault();
        return;
      }
      F.currentTarget.focus(), l == null || l(F);
    },
    [r, l]
  ), $ = b.useCallback(
    (F) => {
      v && Pd(F) && (F.preventDefault(), F.stopPropagation(), h(!1), m.remove(document, "keyup", $, !1));
    },
    [v, m]
  ), R = b.useCallback(
    (F) => {
      if (u == null || u(F), r || F.defaultPrevented || F.metaKey || !Pd(F.nativeEvent) || y)
        return;
      const z = o && F.key === "Enter";
      i && F.key === " " && (F.preventDefault(), h(!0)), z && (F.preventDefault(), F.currentTarget.click()), m.add(document, "keyup", $, !1);
    },
    [
      r,
      y,
      u,
      o,
      i,
      m,
      $
    ]
  ), I = b.useCallback(
    (F) => {
      if (c == null || c(F), r || F.defaultPrevented || F.metaKey || !Pd(F.nativeEvent) || y)
        return;
      i && F.key === " " && (F.preventDefault(), h(!1), F.currentTarget.click());
    },
    [i, y, r, c]
  ), U = b.useCallback(
    (F) => {
      F.button === 0 && (h(!1), m.remove(document, "mouseup", U, !1));
    },
    [m]
  ), ue = b.useCallback(
    (F) => {
      if (F.button !== 0)
        return;
      if (r) {
        F.stopPropagation(), F.preventDefault();
        return;
      }
      y || h(!0), F.currentTarget.focus({ preventScroll: !0 }), m.add(document, "mouseup", U, !1), a == null || a(F);
    },
    [r, y, a, m, U]
  ), fe = b.useCallback(
    (F) => {
      F.button === 0 && (y || h(!1), s == null || s(F));
    },
    [s, y]
  ), Y = b.useCallback(
    (F) => {
      if (r) {
        F.preventDefault();
        return;
      }
      f == null || f(F);
    },
    [r, f]
  ), le = b.useCallback(
    (F) => {
      v && (F.preventDefault(), h(!1)), p == null || p(F);
    },
    [v, p]
  ), ge = br(t, w);
  return y ? {
    ...g,
    ref: ge,
    type: "button",
    "aria-disabled": A ? void 0 : r,
    disabled: A,
    onClick: P,
    onMouseDown: a,
    onMouseUp: s,
    onKeyUp: c,
    onKeyDown: u,
    onMouseOver: f,
    onMouseLeave: p
  } : {
    ...g,
    ref: ge,
    role: "button",
    "data-active": q(v),
    "aria-disabled": r ? "true" : void 0,
    tabIndex: A ? void 0 : _,
    onClick: P,
    onMouseDown: ue,
    onMouseUp: fe,
    onKeyUp: I,
    onKeyDown: R,
    onMouseOver: Y,
    onMouseLeave: le
  };
}
var sN = Object.defineProperty, lN = (e, t, r) => t in e ? sN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, uN = (e, t, r) => (lN(e, typeof t != "symbol" ? t + "" : t, r), r), cN = class {
  constructor() {
    uN(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, sh = new cN();
function Nw(e, t) {
  const [r, n] = b.useState(0);
  return b.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = sh.add(o);
        n(i);
      }
      return () => {
        sh.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var dN = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ho = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), Hs = {}, Td = 0, Bw = function(e) {
  return e && (e.host || Bw(e.parentNode));
}, fN = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Bw(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, hN = function(e, t, r, n) {
  var o = fN(t, Array.isArray(e) ? e : [e]);
  Hs[r] || (Hs[r] = /* @__PURE__ */ new WeakMap());
  var i = Hs[r], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(n), g = p !== null && p !== "false", y = (ho.get(f) || 0) + 1, x = (i.get(f) || 0) + 1;
        ho.set(f, y), i.set(f, x), a.push(f), y === 1 && g && Us.set(f, !0), x === 1 && f.setAttribute(r, "true"), g || f.setAttribute(n, "true");
      }
    });
  };
  return c(t), s.clear(), Td++, function() {
    a.forEach(function(d) {
      var f = ho.get(d) - 1, p = i.get(d) - 1;
      ho.set(d, f), i.set(d, p), f || (Us.has(d) || d.removeAttribute(n), Us.delete(d)), p || d.removeAttribute(r);
    }), Td--, Td || (ho = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), Hs = {});
  };
}, pN = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || dN(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), hN(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function mN(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = b.useRef(null), c = b.useRef(null), [d, f, p] = gN(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  vN(u, t && a);
  const g = Nw(u, t), y = b.useRef(null), x = b.useCallback((R) => {
    y.current = R.target;
  }, []), v = b.useCallback(
    (R) => {
      R.key === "Escape" && (R.stopPropagation(), i && (r == null || r()), l == null || l());
    },
    [i, r, l]
  ), [h, m] = b.useState(!1), [w, _] = b.useState(!1), A = b.useCallback(
    (R = {}, I = null) => ({
      role: "dialog",
      ...R,
      ref: br(I, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": h ? f : void 0,
      "aria-describedby": w ? p : void 0,
      onClick: Fe(
        R.onClick,
        (U) => U.stopPropagation()
      )
    }),
    [p, w, d, f, h]
  ), P = b.useCallback(
    (R) => {
      R.stopPropagation(), y.current === R.target && sh.isTopModal(u.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), $ = b.useCallback(
    (R = {}, I = null) => ({
      ...R,
      ref: br(I, c),
      onClick: Fe(R.onClick, P),
      onKeyDown: Fe(R.onKeyDown, v),
      onMouseDown: Fe(R.onMouseDown, x)
    }),
    [v, x, P]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: p,
    setBodyMounted: _,
    setHeaderMounted: m,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: A,
    getDialogContainerProps: $,
    index: g
  };
}
function vN(e, t) {
  const r = e.current;
  b.useEffect(() => {
    if (!(!e.current || !t))
      return pN(e.current);
  }, [t, e, r]);
}
function gN(e, ...t) {
  const r = b.useId(), n = e || r;
  return b.useMemo(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [yN, os] = it({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [bN, vi] = it({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), jw = (e) => {
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
  } = t, y = mi("Modal", t), v = {
    ...mN(t),
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
  return /* @__PURE__ */ T.jsx(bN, { value: v, children: /* @__PURE__ */ T.jsx(yN, { value: y, children: /* @__PURE__ */ T.jsx(nc, { onExitComplete: g, children: v.isOpen && /* @__PURE__ */ T.jsx(Xa, { ...r, children: n }) }) }) });
};
jw.displayName = "Modal";
var xl = "right-scroll-bar-position", wl = "width-before-scroll-bar", SN = "with-scroll-bars-hidden", xN = "--removed-body-scroll-bar-size", Vw = cw(), Ed = function() {
}, ic = b.forwardRef(function(e, t) {
  var r = b.useRef(null), n = b.useState({
    onScrollCapture: Ed,
    onWheelCapture: Ed,
    onTouchMoveCapture: Ed
  }), o = n[0], i = n[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, g = e.inert, y = e.allowPinchZoom, x = e.as, v = x === void 0 ? "div" : x, h = e.gapMode, m = sw(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = f, _ = aw([r, t]), A = fr(fr({}, m), o);
  return b.createElement(
    b.Fragment,
    null,
    c && b.createElement(w, { sideCar: Vw, removeScrollBar: u, shards: d, noIsolation: p, inert: g, setCallbacks: i, allowPinchZoom: !!y, lockRef: r, gapMode: h }),
    a ? b.cloneElement(b.Children.only(s), fr(fr({}, A), { ref: _ })) : b.createElement(v, fr({}, A, { className: l, ref: _ }), s)
  );
});
ic.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ic.classNames = {
  fullWidth: wl,
  zeroRight: xl
};
var uy, wN = function() {
  if (uy)
    return uy;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function kN() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = wN();
  return t && e.setAttribute("nonce", t), e;
}
function CN(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function _N(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var PN = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = kN()) && (CN(t, r), _N(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, TN = function() {
  var e = PN();
  return function(t, r) {
    b.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Ww = function() {
  var e = TN(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, EN = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, $d = function(e) {
  return parseInt(e || "", 10) || 0;
}, $N = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [$d(r), $d(n), $d(o)];
}, AN = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return EN;
  var t = $N(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, RN = Ww(), MN = function(e, t, r, n) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(SN, ` {
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
  
  .`).concat(xl, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(wl, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(xl, " .").concat(xl, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(wl, " .").concat(wl, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(xN, ": ").concat(s, `px;
  }
`);
}, zN = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, i = b.useMemo(function() {
    return AN(o);
  }, [o]);
  return b.createElement(RN, { styles: MN(i, !t, o, r ? "" : "!important") });
}, lh = !1;
if (typeof window < "u")
  try {
    var Gs = Object.defineProperty({}, "passive", {
      get: function() {
        return lh = !0, !0;
      }
    });
    window.addEventListener("test", Gs, Gs), window.removeEventListener("test", Gs, Gs);
  } catch {
    lh = !1;
  }
var po = lh ? { passive: !1 } : !1, IN = function(e) {
  return e.tagName === "TEXTAREA";
}, Uw = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !IN(e) && r[t] === "visible")
  );
}, FN = function(e) {
  return Uw(e, "overflowY");
}, DN = function(e) {
  return Uw(e, "overflowX");
}, cy = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Hw(e, n);
    if (o) {
      var i = Gw(e, n), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, LN = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, ON = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Hw = function(e, t) {
  return e === "v" ? FN(t) : DN(t);
}, Gw = function(e, t) {
  return e === "v" ? LN(t) : ON(t);
}, NN = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, BN = function(e, t, r, n, o) {
  var i = NN(e, window.getComputedStyle(t).direction), a = i * n, s = r.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = Gw(e, s), g = p[0], y = p[1], x = p[2], v = y - x - i * g;
    (g || v) && Hw(e, s) && (d += v, f += g), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, Ks = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, dy = function(e) {
  return [e.deltaX, e.deltaY];
}, fy = function(e) {
  return e && "current" in e ? e.current : e;
}, jN = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, VN = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, WN = 0, mo = [];
function UN(e) {
  var t = b.useRef([]), r = b.useRef([0, 0]), n = b.useRef(), o = b.useState(WN++)[0], i = b.useState(Ww)[0], a = b.useRef(e);
  b.useEffect(function() {
    a.current = e;
  }, [e]), b.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = UL([e.lockRef.current], (e.shards || []).map(fy), !0).filter(Boolean);
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
    var v = Ks(y), h = r.current, m = "deltaX" in y ? y.deltaX : h[0] - v[0], w = "deltaY" in y ? y.deltaY : h[1] - v[1], _, A = y.target, P = Math.abs(m) > Math.abs(w) ? "h" : "v";
    if ("touches" in y && P === "h" && A.type === "range")
      return !1;
    var $ = cy(P, A);
    if (!$)
      return !0;
    if ($ ? _ = P : (_ = P === "v" ? "h" : "v", $ = cy(P, A)), !$)
      return !1;
    if (!n.current && "changedTouches" in y && (m || w) && (n.current = _), !_)
      return !0;
    var R = n.current || _;
    return BN(R, x, y, R === "h" ? m : w, !0);
  }, []), l = b.useCallback(function(y) {
    var x = y;
    if (!(!mo.length || mo[mo.length - 1] !== i)) {
      var v = "deltaY" in x ? dy(x) : Ks(x), h = t.current.filter(function(_) {
        return _.name === x.type && (_.target === x.target || x.target === _.shadowParent) && jN(_.delta, v);
      })[0];
      if (h && h.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!h) {
        var m = (a.current.shards || []).map(fy).filter(Boolean).filter(function(_) {
          return _.contains(x.target);
        }), w = m.length > 0 ? s(x, m[0]) : !a.current.noIsolation;
        w && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = b.useCallback(function(y, x, v, h) {
    var m = { name: y, delta: x, target: v, should: h, shadowParent: HN(v) };
    t.current.push(m), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== m;
      });
    }, 1);
  }, []), c = b.useCallback(function(y) {
    r.current = Ks(y), n.current = void 0;
  }, []), d = b.useCallback(function(y) {
    u(y.type, dy(y), y.target, s(y, e.lockRef.current));
  }, []), f = b.useCallback(function(y) {
    u(y.type, Ks(y), y.target, s(y, e.lockRef.current));
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
    g ? b.createElement(i, { styles: VN(o) }) : null,
    p ? b.createElement(zN, { gapMode: e.gapMode }) : null
  );
}
function HN(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const GN = HL(Vw, UN);
var Kw = b.forwardRef(function(e, t) {
  return b.createElement(ic, fr({}, e, { ref: t, sideCar: GN }));
});
Kw.classNames = ic.classNames;
const KN = Kw;
function YN(e) {
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
  } = vi(), [f, p] = zx();
  b.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const g = Nw(n, d);
  return /* @__PURE__ */ T.jsx(
    Fw,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ T.jsx(
        KN,
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
var [XN, qN] = it(), QN = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function ZN(e, t) {
  var r, n;
  if (e)
    return (n = (r = QN[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function JN(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = Yb(), l = (t = s.components) == null ? void 0 : t.Drawer, u = ZN(o, s.direction);
  return /* @__PURE__ */ T.jsx(XN, { value: { placement: u }, children: /* @__PURE__ */ T.jsx(
    jw,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var eB = Z(tw), Yw = Ae(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = vi(), c = s(a, t), d = l(i), f = _e("chakra-modal__content", r), p = os(), g = {
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
    }, { placement: x } = qN();
    return /* @__PURE__ */ T.jsx(YN, { children: /* @__PURE__ */ T.jsx(
      Z.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: y,
        children: /* @__PURE__ */ T.jsx(
          eB,
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
Yw.displayName = "DrawerContent";
var Xw = Ae(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: i } = vi();
    b.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = _e("chakra-modal__header", r), l = {
      flex: 0,
      ...os().header
    };
    return /* @__PURE__ */ T.jsx(
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
Xw.displayName = "ModalHeader";
var tB = Z(rc.div), qw = Ae(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...i } = e, a = _e("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...os().overlay
    }, { motionPreset: u } = vi(), d = o || (u === "none" ? {} : ew);
    return /* @__PURE__ */ T.jsx(
      tB,
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
qw.displayName = "ModalOverlay";
var Qw = Ae((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: i } = vi();
  b.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = _e("chakra-modal__body", r), s = os();
  return /* @__PURE__ */ T.jsx(
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
Qw.displayName = "ModalBody";
var Zw = Ae(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: i } = vi(), a = _e("chakra-modal__close-btn", n), s = os();
    return /* @__PURE__ */ T.jsx(
      Kp,
      {
        ref: t,
        __css: s.closeButton,
        className: a,
        onClick: Fe(r, (l) => {
          l.stopPropagation(), i();
        }),
        ...o
      }
    );
  }
);
Zw.displayName = "ModalCloseButton";
var [
  rB,
  nB,
  oB,
  iB
] = eL();
function aB(e) {
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
  } = e, [d, f] = b.useState(r ?? 0), [p, g] = tL({
    defaultValue: r ?? 0,
    value: o,
    onChange: n
  });
  b.useEffect(() => {
    o != null && f(o);
  }, [o]);
  const y = oB(), x = b.useId();
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
var [sB, Jw] = it({
  name: "TabsContext",
  errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"
});
function lB(e) {
  const { focusedIndex: t, orientation: r, direction: n } = Jw(), o = nB(), i = b.useCallback(
    (a) => {
      const s = () => {
        var h;
        const m = o.nextEnabled(t);
        m && ((h = m.node) == null || h.focus());
      }, l = () => {
        var h;
        const m = o.prevEnabled(t);
        m && ((h = m.node) == null || h.focus());
      }, u = () => {
        var h;
        const m = o.firstEnabled();
        m && ((h = m.node) == null || h.focus());
      }, c = () => {
        var h;
        const m = o.lastEnabled();
        m && ((h = m.node) == null || h.focus());
      }, d = r === "horizontal", f = r === "vertical", p = a.key, g = n === "ltr" ? "ArrowLeft" : "ArrowRight", y = n === "ltr" ? "ArrowRight" : "ArrowLeft", v = {
        [g]: () => d && l(),
        [y]: () => d && s(),
        ArrowDown: () => f && s(),
        ArrowUp: () => f && l(),
        Home: u,
        End: c
      }[p];
      v && (a.preventDefault(), v(a));
    },
    [o, t, r, n]
  );
  return {
    ...e,
    role: "tablist",
    "aria-orientation": r,
    onKeyDown: Fe(e.onKeyDown, i)
  };
}
function uB(e) {
  const { isDisabled: t = !1, isFocusable: r = !1, ...n } = e, { setSelectedIndex: o, isManual: i, id: a, setFocusedIndex: s, selectedIndex: l } = Jw(), { index: u, register: c } = iB({
    disabled: t && !r
  }), d = u === l, f = () => {
    o(u);
  }, p = () => {
    s(u), !i && !(t && r) && o(u);
  }, g = aN({
    ...n,
    ref: br(c, e.ref),
    isDisabled: t,
    isFocusable: r,
    onClick: Fe(e.onClick, f)
  }), y = "button";
  return {
    ...g,
    id: cB(a, u),
    role: "tab",
    tabIndex: d ? 0 : -1,
    type: y,
    "aria-selected": d,
    "aria-controls": dB(a, u),
    onFocus: t ? void 0 : Fe(e.onFocus, p)
  };
}
it({});
function cB(e, t) {
  return `${e}--tab-${t}`;
}
function dB(e, t) {
  return `${e}--tabpanel-${t}`;
}
var [fB, ek] = it({
  name: "TabsStylesContext",
  errorMessage: `useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `
}), tk = Ae(function(t, r) {
  const n = mi("Tabs", t), { children: o, className: i, ...a } = xn(t), { htmlProps: s, descendants: l, ...u } = aB(a), c = b.useMemo(() => u, [u]), { isFitted: d, ...f } = s, p = {
    position: "relative",
    ...n.root
  };
  return /* @__PURE__ */ T.jsx(rB, { value: l, children: /* @__PURE__ */ T.jsx(sB, { value: c, children: /* @__PURE__ */ T.jsx(fB, { value: n, children: /* @__PURE__ */ T.jsx(
    Z.div,
    {
      className: _e("chakra-tabs", i),
      ref: r,
      ...f,
      __css: p,
      children: o
    }
  ) }) }) });
});
tk.displayName = "Tabs";
var rk = Ae(function(t, r) {
  const n = lB({ ...t, ref: r }), i = {
    display: "flex",
    ...ek().tablist
  };
  return /* @__PURE__ */ T.jsx(
    Z.div,
    {
      ...n,
      className: _e("chakra-tabs__tablist", t.className),
      __css: i
    }
  );
});
rk.displayName = "TabList";
var nk = Ae(function(t, r) {
  const n = ek(), o = uB({ ...t, ref: r }), i = {
    outline: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...n.tab
  };
  return /* @__PURE__ */ T.jsx(
    Z.button,
    {
      ...o,
      className: _e("chakra-tabs__tab", t.className),
      __css: i
    }
  );
});
nk.displayName = "Tab";
function hB(e) {
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
function pB() {
  const e = {
    color: "white",
    bg: "#333"
  }, [t, r] = b.useState([]), n = b.useRef({}), [o, i] = b.useState(
    "workflow-" + (/* @__PURE__ */ new Date()).getTime()
  ), [a, s] = b.useState("root"), l = () => {
    const c = /* @__PURE__ */ new Set();
    for (let d of Tm.graph._nodes)
      d.type == "T2IAdapterLoader" && (d.type = "ControlNetLoader"), d.type == "ConditioningAverage " && (d.type = "ConditioningAverage"), d.type == "SDV_img2vid_Conditioning" && (d.type = "SVD_img2vid_Conditioning"), d.type in n.current || (d.type = hB(d.type), c.add(d.type));
    console.log("missing", c), r(Array.from(c));
  }, u = () => {
    const c = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(d) {
        console.log("ext.setup", d);
      },
      async addCustomNodeDefs(d) {
        console.log("addCustomNodeDefs in workspace manager", d), n.current = d;
      }
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    Tm.registerExtension(c), setTimeout(() => {
      l();
    }, 500);
  };
  return b.useEffect(() => {
    u(), setInterval(() => {
      const c = localStorage.getItem("workflow");
      localStorage.setItem("wf-" + o, c ?? ""), localStorage.setItem("latestWorkflow", o);
    }, 3e3);
  }, []), /* @__PURE__ */ T.jsxs(
    am,
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
              backgroundColor: "white"
            },
            children: /* @__PURE__ */ T.jsxs(
              rk,
              {
                defaultValue: "ComfyUI",
                style: { padding: 8, marginLeft: 16 },
                justifyContent: "space-between",
                gap: 4,
                children: [
                  /* @__PURE__ */ T.jsx(Va, { children: /* @__PURE__ */ T.jsx(
                    im,
                    {
                      variant: "unstyled",
                      placeholder: "Workflow name",
                      value: o,
                      onChange: (c) => {
                        i(c.target.value);
                      }
                    }
                  ) }),
                  /* @__PURE__ */ T.jsxs(Va, { children: [
                    /* @__PURE__ */ T.jsx(nk, { _selected: e, children: "111" }),
                    /* @__PURE__ */ T.jsx(
                      Yp,
                      {
                        onClick: () => {
                          s("customNodes");
                        },
                        children: t.length === 0 ? "Custom Nodes" : "Install Missing Nodes " + t.length
                      }
                    )
                  ] })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ T.jsx(
          mB,
          {
            missingNodes: t,
            isOpen: a === "customNodes",
            onclose: () => {
              s("root"), console.log("close");
            }
          }
        )
      ]
    }
  );
}
function mB({
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
      // method: "POST",
      body: JSON.stringify({ nodes: a })
    }).then((s) => s.json()).then((s) => {
      console.log("install res", s);
    });
  };
  return /* @__PURE__ */ T.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ T.jsxs(
    JN,
    {
      isOpen: t,
      placement: "right",
      onClose: () => r(),
      size: "sm",
      children: [
        /* @__PURE__ */ T.jsx(qw, {}),
        /* @__PURE__ */ T.jsxs(Yw, { children: [
          /* @__PURE__ */ T.jsx(Zw, {}),
          /* @__PURE__ */ T.jsx(Xw, { children: "Custom Nodes" }),
          /* @__PURE__ */ T.jsxs(Qw, { children: [
            /* @__PURE__ */ T.jsx(Va, { mb: 6, children: /* @__PURE__ */ T.jsxs(
              Yp,
              {
                onClick: () => {
                  i(n);
                },
                children: [
                  "Install Missing Nodes ",
                  n.length
                ]
              }
            ) }),
            e.map((a) => /* @__PURE__ */ T.jsxs(Va, { children: [
              /* @__PURE__ */ T.jsx(
                ow,
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
const ok = document.createElement("div");
document.body.prepend(ok);
Ad.createRoot(ok).render(
  /* @__PURE__ */ T.jsx(Kn.StrictMode, { children: /* @__PURE__ */ T.jsx(UD, { children: /* @__PURE__ */ T.jsx(pB, {}) }) })
);
