var Jv = Object.defineProperty;
var Zv = (e, r, o) =>
  r in e
    ? Jv(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (e[r] = o);
var zi = (e, r, o) => Zv(e, typeof r != 'symbol' ? r + '' : r, o);
function e1(e, r) {
  for (var o = 0; o < r.length; o++) {
    const s = r[o];
    if (typeof s != 'string' && !Array.isArray(s)) {
      for (const a in s)
        if (a !== 'default' && !(a in e)) {
          const u = Object.getOwnPropertyDescriptor(s, a);
          u &&
            Object.defineProperty(
              e,
              a,
              u.get ? u : { enumerable: !0, get: () => s[a] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a);
  new MutationObserver((a) => {
    for (const u of a)
      if (u.type === 'childList')
        for (const c of u.addedNodes)
          c.tagName === 'LINK' && c.rel === 'modulepreload' && s(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(a) {
    const u = {};
    return (
      a.integrity && (u.integrity = a.integrity),
      a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === 'use-credentials'
        ? (u.credentials = 'include')
        : a.crossOrigin === 'anonymous'
        ? (u.credentials = 'omit')
        : (u.credentials = 'same-origin'),
      u
    );
  }
  function s(a) {
    if (a.ep) return;
    a.ep = !0;
    const u = o(a);
    fetch(a.href, u);
  }
})();
function cd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var mc = { exports: {} },
  Fi = {},
  gc = { exports: {} },
  Ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _h;
function t1() {
  if (_h) return Ie;
  _h = 1;
  var e = Symbol.for('react.element'),
    r = Symbol.for('react.portal'),
    o = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    a = Symbol.for('react.profiler'),
    u = Symbol.for('react.provider'),
    c = Symbol.for('react.context'),
    f = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    g = Symbol.for('react.lazy'),
    v = Symbol.iterator;
  function C(L) {
    return L === null || typeof L != 'object'
      ? null
      : ((L = (v && L[v]) || L['@@iterator']),
        typeof L == 'function' ? L : null);
  }
  var k = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    b = {};
  function E(L, q, ae) {
    (this.props = L),
      (this.context = q),
      (this.refs = b),
      (this.updater = ae || k);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (L, q) {
      if (typeof L != 'object' && typeof L != 'function' && L != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, L, q, 'setState');
    }),
    (E.prototype.forceUpdate = function (L) {
      this.updater.enqueueForceUpdate(this, L, 'forceUpdate');
    });
  function R() {}
  R.prototype = E.prototype;
  function N(L, q, ae) {
    (this.props = L),
      (this.context = q),
      (this.refs = b),
      (this.updater = ae || k);
  }
  var P = (N.prototype = new R());
  (P.constructor = N), w(P, E.prototype), (P.isPureReactComponent = !0);
  var I = Array.isArray,
    O = Object.prototype.hasOwnProperty,
    _ = { current: null },
    z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(L, q, ae) {
    var ue,
      pe = {},
      Ce = null,
      ke = null;
    if (q != null)
      for (ue in (q.ref !== void 0 && (ke = q.ref),
      q.key !== void 0 && (Ce = '' + q.key),
      q))
        O.call(q, ue) && !z.hasOwnProperty(ue) && (pe[ue] = q[ue]);
    var Re = arguments.length - 2;
    if (Re === 1) pe.children = ae;
    else if (1 < Re) {
      for (var be = Array(Re), xe = 0; xe < Re; xe++)
        be[xe] = arguments[xe + 2];
      pe.children = be;
    }
    if (L && L.defaultProps)
      for (ue in ((Re = L.defaultProps), Re))
        pe[ue] === void 0 && (pe[ue] = Re[ue]);
    return {
      $$typeof: e,
      type: L,
      key: Ce,
      ref: ke,
      props: pe,
      _owner: _.current,
    };
  }
  function G(L, q) {
    return {
      $$typeof: e,
      type: L.type,
      key: q,
      ref: L.ref,
      props: L.props,
      _owner: L._owner,
    };
  }
  function x(L) {
    return typeof L == 'object' && L !== null && L.$$typeof === e;
  }
  function j(L) {
    var q = { '=': '=0', ':': '=2' };
    return (
      '$' +
      L.replace(/[=:]/g, function (ae) {
        return q[ae];
      })
    );
  }
  var Z = /\/+/g;
  function Y(L, q) {
    return typeof L == 'object' && L !== null && L.key != null
      ? j('' + L.key)
      : q.toString(36);
  }
  function ne(L, q, ae, ue, pe) {
    var Ce = typeof L;
    (Ce === 'undefined' || Ce === 'boolean') && (L = null);
    var ke = !1;
    if (L === null) ke = !0;
    else
      switch (Ce) {
        case 'string':
        case 'number':
          ke = !0;
          break;
        case 'object':
          switch (L.$$typeof) {
            case e:
            case r:
              ke = !0;
          }
      }
    if (ke)
      return (
        (ke = L),
        (pe = pe(ke)),
        (L = ue === '' ? '.' + Y(ke, 0) : ue),
        I(pe)
          ? ((ae = ''),
            L != null && (ae = L.replace(Z, '$&/') + '/'),
            ne(pe, q, ae, '', function (xe) {
              return xe;
            }))
          : pe != null &&
            (x(pe) &&
              (pe = G(
                pe,
                ae +
                  (!pe.key || (ke && ke.key === pe.key)
                    ? ''
                    : ('' + pe.key).replace(Z, '$&/') + '/') +
                  L,
              )),
            q.push(pe)),
        1
      );
    if (((ke = 0), (ue = ue === '' ? '.' : ue + ':'), I(L)))
      for (var Re = 0; Re < L.length; Re++) {
        Ce = L[Re];
        var be = ue + Y(Ce, Re);
        ke += ne(Ce, q, ae, be, pe);
      }
    else if (((be = C(L)), typeof be == 'function'))
      for (L = be.call(L), Re = 0; !(Ce = L.next()).done; )
        (Ce = Ce.value), (be = ue + Y(Ce, Re++)), (ke += ne(Ce, q, ae, be, pe));
    else if (Ce === 'object')
      throw (
        ((q = String(L)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (q === '[object Object]'
              ? 'object with keys {' + Object.keys(L).join(', ') + '}'
              : q) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    return ke;
  }
  function Q(L, q, ae) {
    if (L == null) return L;
    var ue = [],
      pe = 0;
    return (
      ne(L, ue, '', '', function (Ce) {
        return q.call(ae, Ce, pe++);
      }),
      ue
    );
  }
  function ee(L) {
    if (L._status === -1) {
      var q = L._result;
      (q = q()),
        q.then(
          function (ae) {
            (L._status === 0 || L._status === -1) &&
              ((L._status = 1), (L._result = ae));
          },
          function (ae) {
            (L._status === 0 || L._status === -1) &&
              ((L._status = 2), (L._result = ae));
          },
        ),
        L._status === -1 && ((L._status = 0), (L._result = q));
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var ie = { current: null },
    U = { transition: null },
    K = {
      ReactCurrentDispatcher: ie,
      ReactCurrentBatchConfig: U,
      ReactCurrentOwner: _,
    };
  function re() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (Ie.Children = {
      map: Q,
      forEach: function (L, q, ae) {
        Q(
          L,
          function () {
            q.apply(this, arguments);
          },
          ae,
        );
      },
      count: function (L) {
        var q = 0;
        return (
          Q(L, function () {
            q++;
          }),
          q
        );
      },
      toArray: function (L) {
        return (
          Q(L, function (q) {
            return q;
          }) || []
        );
      },
      only: function (L) {
        if (!x(L))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return L;
      },
    }),
    (Ie.Component = E),
    (Ie.Fragment = o),
    (Ie.Profiler = a),
    (Ie.PureComponent = N),
    (Ie.StrictMode = s),
    (Ie.Suspense = h),
    (Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K),
    (Ie.act = re),
    (Ie.cloneElement = function (L, q, ae) {
      if (L == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            L +
            '.',
        );
      var ue = w({}, L.props),
        pe = L.key,
        Ce = L.ref,
        ke = L._owner;
      if (q != null) {
        if (
          (q.ref !== void 0 && ((Ce = q.ref), (ke = _.current)),
          q.key !== void 0 && (pe = '' + q.key),
          L.type && L.type.defaultProps)
        )
          var Re = L.type.defaultProps;
        for (be in q)
          O.call(q, be) &&
            !z.hasOwnProperty(be) &&
            (ue[be] = q[be] === void 0 && Re !== void 0 ? Re[be] : q[be]);
      }
      var be = arguments.length - 2;
      if (be === 1) ue.children = ae;
      else if (1 < be) {
        Re = Array(be);
        for (var xe = 0; xe < be; xe++) Re[xe] = arguments[xe + 2];
        ue.children = Re;
      }
      return {
        $$typeof: e,
        type: L.type,
        key: pe,
        ref: Ce,
        props: ue,
        _owner: ke,
      };
    }),
    (Ie.createContext = function (L) {
      return (
        (L = {
          $$typeof: c,
          _currentValue: L,
          _currentValue2: L,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (L.Provider = { $$typeof: u, _context: L }),
        (L.Consumer = L)
      );
    }),
    (Ie.createElement = V),
    (Ie.createFactory = function (L) {
      var q = V.bind(null, L);
      return (q.type = L), q;
    }),
    (Ie.createRef = function () {
      return { current: null };
    }),
    (Ie.forwardRef = function (L) {
      return { $$typeof: f, render: L };
    }),
    (Ie.isValidElement = x),
    (Ie.lazy = function (L) {
      return { $$typeof: g, _payload: { _status: -1, _result: L }, _init: ee };
    }),
    (Ie.memo = function (L, q) {
      return { $$typeof: m, type: L, compare: q === void 0 ? null : q };
    }),
    (Ie.startTransition = function (L) {
      var q = U.transition;
      U.transition = {};
      try {
        L();
      } finally {
        U.transition = q;
      }
    }),
    (Ie.unstable_act = re),
    (Ie.useCallback = function (L, q) {
      return ie.current.useCallback(L, q);
    }),
    (Ie.useContext = function (L) {
      return ie.current.useContext(L);
    }),
    (Ie.useDebugValue = function () {}),
    (Ie.useDeferredValue = function (L) {
      return ie.current.useDeferredValue(L);
    }),
    (Ie.useEffect = function (L, q) {
      return ie.current.useEffect(L, q);
    }),
    (Ie.useId = function () {
      return ie.current.useId();
    }),
    (Ie.useImperativeHandle = function (L, q, ae) {
      return ie.current.useImperativeHandle(L, q, ae);
    }),
    (Ie.useInsertionEffect = function (L, q) {
      return ie.current.useInsertionEffect(L, q);
    }),
    (Ie.useLayoutEffect = function (L, q) {
      return ie.current.useLayoutEffect(L, q);
    }),
    (Ie.useMemo = function (L, q) {
      return ie.current.useMemo(L, q);
    }),
    (Ie.useReducer = function (L, q, ae) {
      return ie.current.useReducer(L, q, ae);
    }),
    (Ie.useRef = function (L) {
      return ie.current.useRef(L);
    }),
    (Ie.useState = function (L) {
      return ie.current.useState(L);
    }),
    (Ie.useSyncExternalStore = function (L, q, ae) {
      return ie.current.useSyncExternalStore(L, q, ae);
    }),
    (Ie.useTransition = function () {
      return ie.current.useTransition();
    }),
    (Ie.version = '18.3.1'),
    Ie
  );
}
var zh;
function dd() {
  return zh || ((zh = 1), (gc.exports = t1())), gc.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fh;
function n1() {
  if (Fh) return Fi;
  Fh = 1;
  var e = dd(),
    r = Symbol.for('react.element'),
    o = Symbol.for('react.fragment'),
    s = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, h, m) {
    var g,
      v = {},
      C = null,
      k = null;
    m !== void 0 && (C = '' + m),
      h.key !== void 0 && (C = '' + h.key),
      h.ref !== void 0 && (k = h.ref);
    for (g in h) s.call(h, g) && !u.hasOwnProperty(g) && (v[g] = h[g]);
    if (f && f.defaultProps)
      for (g in ((h = f.defaultProps), h)) v[g] === void 0 && (v[g] = h[g]);
    return {
      $$typeof: r,
      type: f,
      key: C,
      ref: k,
      props: v,
      _owner: a.current,
    };
  }
  return (Fi.Fragment = o), (Fi.jsx = c), (Fi.jsxs = c), Fi;
}
var Bh;
function r1() {
  return Bh || ((Bh = 1), (mc.exports = n1())), mc.exports;
}
var M = r1(),
  S = dd();
const bn = cd(S),
  zc = e1({ __proto__: null, default: bn }, [S]);
var Pa = {},
  yc = { exports: {} },
  Ht = {},
  vc = { exports: {} },
  xc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dh;
function o1() {
  return (
    Dh ||
      ((Dh = 1),
      (function (e) {
        function r(U, K) {
          var re = U.length;
          U.push(K);
          e: for (; 0 < re; ) {
            var L = (re - 1) >>> 1,
              q = U[L];
            if (0 < a(q, K)) (U[L] = K), (U[re] = q), (re = L);
            else break e;
          }
        }
        function o(U) {
          return U.length === 0 ? null : U[0];
        }
        function s(U) {
          if (U.length === 0) return null;
          var K = U[0],
            re = U.pop();
          if (re !== K) {
            U[0] = re;
            e: for (var L = 0, q = U.length, ae = q >>> 1; L < ae; ) {
              var ue = 2 * (L + 1) - 1,
                pe = U[ue],
                Ce = ue + 1,
                ke = U[Ce];
              if (0 > a(pe, re))
                Ce < q && 0 > a(ke, pe)
                  ? ((U[L] = ke), (U[Ce] = re), (L = Ce))
                  : ((U[L] = pe), (U[ue] = re), (L = ue));
              else if (Ce < q && 0 > a(ke, re))
                (U[L] = ke), (U[Ce] = re), (L = Ce);
              else break e;
            }
          }
          return K;
        }
        function a(U, K) {
          var re = U.sortIndex - K.sortIndex;
          return re !== 0 ? re : U.id - K.id;
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var u = performance;
          e.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            f = c.now();
          e.unstable_now = function () {
            return c.now() - f;
          };
        }
        var h = [],
          m = [],
          g = 1,
          v = null,
          C = 3,
          k = !1,
          w = !1,
          b = !1,
          E = typeof setTimeout == 'function' ? setTimeout : null,
          R = typeof clearTimeout == 'function' ? clearTimeout : null,
          N = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function P(U) {
          for (var K = o(m); K !== null; ) {
            if (K.callback === null) s(m);
            else if (K.startTime <= U)
              s(m), (K.sortIndex = K.expirationTime), r(h, K);
            else break;
            K = o(m);
          }
        }
        function I(U) {
          if (((b = !1), P(U), !w))
            if (o(h) !== null) (w = !0), ee(O);
            else {
              var K = o(m);
              K !== null && ie(I, K.startTime - U);
            }
        }
        function O(U, K) {
          (w = !1), b && ((b = !1), R(V), (V = -1)), (k = !0);
          var re = C;
          try {
            for (
              P(K), v = o(h);
              v !== null && (!(v.expirationTime > K) || (U && !j()));

            ) {
              var L = v.callback;
              if (typeof L == 'function') {
                (v.callback = null), (C = v.priorityLevel);
                var q = L(v.expirationTime <= K);
                (K = e.unstable_now()),
                  typeof q == 'function'
                    ? (v.callback = q)
                    : v === o(h) && s(h),
                  P(K);
              } else s(h);
              v = o(h);
            }
            if (v !== null) var ae = !0;
            else {
              var ue = o(m);
              ue !== null && ie(I, ue.startTime - K), (ae = !1);
            }
            return ae;
          } finally {
            (v = null), (C = re), (k = !1);
          }
        }
        var _ = !1,
          z = null,
          V = -1,
          G = 5,
          x = -1;
        function j() {
          return !(e.unstable_now() - x < G);
        }
        function Z() {
          if (z !== null) {
            var U = e.unstable_now();
            x = U;
            var K = !0;
            try {
              K = z(!0, U);
            } finally {
              K ? Y() : ((_ = !1), (z = null));
            }
          } else _ = !1;
        }
        var Y;
        if (typeof N == 'function')
          Y = function () {
            N(Z);
          };
        else if (typeof MessageChannel < 'u') {
          var ne = new MessageChannel(),
            Q = ne.port2;
          (ne.port1.onmessage = Z),
            (Y = function () {
              Q.postMessage(null);
            });
        } else
          Y = function () {
            E(Z, 0);
          };
        function ee(U) {
          (z = U), _ || ((_ = !0), Y());
        }
        function ie(U, K) {
          V = E(function () {
            U(e.unstable_now());
          }, K);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            w || k || ((w = !0), ee(O));
          }),
          (e.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (G = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return o(h);
          }),
          (e.unstable_next = function (U) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = C;
            }
            var re = C;
            C = K;
            try {
              return U();
            } finally {
              C = re;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (U, K) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var re = C;
            C = U;
            try {
              return K();
            } finally {
              C = re;
            }
          }),
          (e.unstable_scheduleCallback = function (U, K, re) {
            var L = e.unstable_now();
            switch (
              (typeof re == 'object' && re !== null
                ? ((re = re.delay),
                  (re = typeof re == 'number' && 0 < re ? L + re : L))
                : (re = L),
              U)
            ) {
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
            return (
              (q = re + q),
              (U = {
                id: g++,
                callback: K,
                priorityLevel: U,
                startTime: re,
                expirationTime: q,
                sortIndex: -1,
              }),
              re > L
                ? ((U.sortIndex = re),
                  r(m, U),
                  o(h) === null &&
                    U === o(m) &&
                    (b ? (R(V), (V = -1)) : (b = !0), ie(I, re - L)))
                : ((U.sortIndex = q), r(h, U), w || k || ((w = !0), ee(O))),
              U
            );
          }),
          (e.unstable_shouldYield = j),
          (e.unstable_wrapCallback = function (U) {
            var K = C;
            return function () {
              var re = C;
              C = K;
              try {
                return U.apply(this, arguments);
              } finally {
                C = re;
              }
            };
          });
      })(xc)),
    xc
  );
}
var jh;
function i1() {
  return jh || ((jh = 1), (vc.exports = o1())), vc.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uh;
function s1() {
  if (Uh) return Ht;
  Uh = 1;
  var e = dd(),
    r = i1();
  function o(t) {
    for (
      var n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
        i = 1;
      i < arguments.length;
      i++
    )
      n += '&args[]=' + encodeURIComponent(arguments[i]);
    return (
      'Minified React error #' +
      t +
      '; visit ' +
      n +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var s = new Set(),
    a = {};
  function u(t, n) {
    c(t, n), c(t + 'Capture', n);
  }
  function c(t, n) {
    for (a[t] = n, t = 0; t < n.length; t++) s.add(n[t]);
  }
  var f = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    h = Object.prototype.hasOwnProperty,
    m =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    v = {};
  function C(t) {
    return h.call(v, t)
      ? !0
      : h.call(g, t)
      ? !1
      : m.test(t)
      ? (v[t] = !0)
      : ((g[t] = !0), !1);
  }
  function k(t, n, i, l) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof n) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return l
          ? !1
          : i !== null
          ? !i.acceptsBooleans
          : ((t = t.toLowerCase().slice(0, 5)), t !== 'data-' && t !== 'aria-');
      default:
        return !1;
    }
  }
  function w(t, n, i, l) {
    if (n === null || typeof n > 'u' || k(t, n, i, l)) return !0;
    if (l) return !1;
    if (i !== null)
      switch (i.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function b(t, n, i, l, d, p, y) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = l),
      (this.attributeNamespace = d),
      (this.mustUseProperty = i),
      (this.propertyName = t),
      (this.type = n),
      (this.sanitizeURL = p),
      (this.removeEmptyString = y);
  }
  var E = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (t) {
      E[t] = new b(t, 0, !1, t, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (t) {
      var n = t[0];
      E[n] = new b(n, 1, !1, t[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (
      t,
    ) {
      E[t] = new b(t, 2, !1, t.toLowerCase(), null, !1, !1);
    }),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (t) {
      E[t] = new b(t, 2, !1, t, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (t) {
        E[t] = new b(t, 3, !1, t.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
      E[t] = new b(t, 3, !0, t, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (t) {
      E[t] = new b(t, 4, !1, t, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (t) {
      E[t] = new b(t, 6, !1, t, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (t) {
      E[t] = new b(t, 5, !1, t.toLowerCase(), null, !1, !1);
    });
  var R = /[\-:]([a-z])/g;
  function N(t) {
    return t[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (t) {
      var n = t.replace(R, N);
      E[n] = new b(n, 1, !1, t, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (t) {
        var n = t.replace(R, N);
        E[n] = new b(n, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
      var n = t.replace(R, N);
      E[n] = new b(n, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (t) {
      E[t] = new b(t, 1, !1, t.toLowerCase(), null, !1, !1);
    }),
    (E.xlinkHref = new b(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1,
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (t) {
      E[t] = new b(t, 1, !1, t.toLowerCase(), null, !0, !0);
    });
  function P(t, n, i, l) {
    var d = E.hasOwnProperty(n) ? E[n] : null;
    (d !== null
      ? d.type !== 0
      : l ||
        !(2 < n.length) ||
        (n[0] !== 'o' && n[0] !== 'O') ||
        (n[1] !== 'n' && n[1] !== 'N')) &&
      (w(n, i, d, l) && (i = null),
      l || d === null
        ? C(n) &&
          (i === null ? t.removeAttribute(n) : t.setAttribute(n, '' + i))
        : d.mustUseProperty
        ? (t[d.propertyName] = i === null ? (d.type === 3 ? !1 : '') : i)
        : ((n = d.attributeName),
          (l = d.attributeNamespace),
          i === null
            ? t.removeAttribute(n)
            : ((d = d.type),
              (i = d === 3 || (d === 4 && i === !0) ? '' : '' + i),
              l ? t.setAttributeNS(l, n, i) : t.setAttribute(n, i))));
  }
  var I = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    O = Symbol.for('react.element'),
    _ = Symbol.for('react.portal'),
    z = Symbol.for('react.fragment'),
    V = Symbol.for('react.strict_mode'),
    G = Symbol.for('react.profiler'),
    x = Symbol.for('react.provider'),
    j = Symbol.for('react.context'),
    Z = Symbol.for('react.forward_ref'),
    Y = Symbol.for('react.suspense'),
    ne = Symbol.for('react.suspense_list'),
    Q = Symbol.for('react.memo'),
    ee = Symbol.for('react.lazy'),
    ie = Symbol.for('react.offscreen'),
    U = Symbol.iterator;
  function K(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (U && t[U]) || t['@@iterator']),
        typeof t == 'function' ? t : null);
  }
  var re = Object.assign,
    L;
  function q(t) {
    if (L === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        L = (n && n[1]) || '';
      }
    return (
      `
` +
      L +
      t
    );
  }
  var ae = !1;
  function ue(t, n) {
    if (!t || ae) return '';
    ae = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (D) {
            var l = D;
          }
          Reflect.construct(t, [], n);
        } else {
          try {
            n.call();
          } catch (D) {
            l = D;
          }
          t.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (D) {
          l = D;
        }
        t();
      }
    } catch (D) {
      if (D && l && typeof D.stack == 'string') {
        for (
          var d = D.stack.split(`
`),
            p = l.stack.split(`
`),
            y = d.length - 1,
            T = p.length - 1;
          1 <= y && 0 <= T && d[y] !== p[T];

        )
          T--;
        for (; 1 <= y && 0 <= T; y--, T--)
          if (d[y] !== p[T]) {
            if (y !== 1 || T !== 1)
              do
                if ((y--, T--, 0 > T || d[y] !== p[T])) {
                  var A =
                    `
` + d[y].replace(' at new ', ' at ');
                  return (
                    t.displayName &&
                      A.includes('<anonymous>') &&
                      (A = A.replace('<anonymous>', t.displayName)),
                    A
                  );
                }
              while (1 <= y && 0 <= T);
            break;
          }
      }
    } finally {
      (ae = !1), (Error.prepareStackTrace = i);
    }
    return (t = t ? t.displayName || t.name : '') ? q(t) : '';
  }
  function pe(t) {
    switch (t.tag) {
      case 5:
        return q(t.type);
      case 16:
        return q('Lazy');
      case 13:
        return q('Suspense');
      case 19:
        return q('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (t = ue(t.type, !1)), t;
      case 11:
        return (t = ue(t.type.render, !1)), t;
      case 1:
        return (t = ue(t.type, !0)), t;
      default:
        return '';
    }
  }
  function Ce(t) {
    if (t == null) return null;
    if (typeof t == 'function') return t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case z:
        return 'Fragment';
      case _:
        return 'Portal';
      case G:
        return 'Profiler';
      case V:
        return 'StrictMode';
      case Y:
        return 'Suspense';
      case ne:
        return 'SuspenseList';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case j:
          return (t.displayName || 'Context') + '.Consumer';
        case x:
          return (t._context.displayName || 'Context') + '.Provider';
        case Z:
          var n = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ''),
              (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          );
        case Q:
          return (
            (n = t.displayName || null), n !== null ? n : Ce(t.type) || 'Memo'
          );
        case ee:
          (n = t._payload), (t = t._init);
          try {
            return Ce(t(n));
          } catch {}
      }
    return null;
  }
  function ke(t) {
    var n = t.type;
    switch (t.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (n.displayName || 'Context') + '.Consumer';
      case 10:
        return (n._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (t = n.render),
          (t = t.displayName || t.name || ''),
          n.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return n;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return Ce(n);
      case 8:
        return n === V ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == 'function') return n.displayName || n.name || null;
        if (typeof n == 'string') return n;
    }
    return null;
  }
  function Re(t) {
    switch (typeof t) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return t;
      case 'object':
        return t;
      default:
        return '';
    }
  }
  function be(t) {
    var n = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === 'input' &&
      (n === 'checkbox' || n === 'radio')
    );
  }
  function xe(t) {
    var n = be(t) ? 'checked' : 'value',
      i = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
      l = '' + t[n];
    if (
      !t.hasOwnProperty(n) &&
      typeof i < 'u' &&
      typeof i.get == 'function' &&
      typeof i.set == 'function'
    ) {
      var d = i.get,
        p = i.set;
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return d.call(this);
          },
          set: function (y) {
            (l = '' + y), p.call(this, y);
          },
        }),
        Object.defineProperty(t, n, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (y) {
            l = '' + y;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[n];
          },
        }
      );
    }
  }
  function Le(t) {
    t._valueTracker || (t._valueTracker = xe(t));
  }
  function Oe(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var i = n.getValue(),
      l = '';
    return (
      t && (l = be(t) ? (t.checked ? 'true' : 'false') : t.value),
      (t = l),
      t !== i ? (n.setValue(t), !0) : !1
    );
  }
  function Xe(t) {
    if (
      ((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Te(t, n) {
    var i = n.checked;
    return re({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? t._wrapperState.initialChecked,
    });
  }
  function Ve(t, n) {
    var i = n.defaultValue == null ? '' : n.defaultValue,
      l = n.checked != null ? n.checked : n.defaultChecked;
    (i = Re(n.value != null ? n.value : i)),
      (t._wrapperState = {
        initialChecked: l,
        initialValue: i,
        controlled:
          n.type === 'checkbox' || n.type === 'radio'
            ? n.checked != null
            : n.value != null,
      });
  }
  function Pt(t, n) {
    (n = n.checked), n != null && P(t, 'checked', n, !1);
  }
  function gt(t, n) {
    Pt(t, n);
    var i = Re(n.value),
      l = n.type;
    if (i != null)
      l === 'number'
        ? ((i === 0 && t.value === '') || t.value != i) && (t.value = '' + i)
        : t.value !== '' + i && (t.value = '' + i);
    else if (l === 'submit' || l === 'reset') {
      t.removeAttribute('value');
      return;
    }
    n.hasOwnProperty('value')
      ? Ft(t, n.type, i)
      : n.hasOwnProperty('defaultValue') && Ft(t, n.type, Re(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (t.defaultChecked = !!n.defaultChecked);
  }
  function at(t, n, i) {
    if (n.hasOwnProperty('value') || n.hasOwnProperty('defaultValue')) {
      var l = n.type;
      if (
        !(
          (l !== 'submit' && l !== 'reset') ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      (n = '' + t._wrapperState.initialValue),
        i || n === t.value || (t.value = n),
        (t.defaultValue = n);
    }
    (i = t.name),
      i !== '' && (t.name = ''),
      (t.defaultChecked = !!t._wrapperState.initialChecked),
      i !== '' && (t.name = i);
  }
  function Ft(t, n, i) {
    (n !== 'number' || Xe(t.ownerDocument) !== t) &&
      (i == null
        ? (t.defaultValue = '' + t._wrapperState.initialValue)
        : t.defaultValue !== '' + i && (t.defaultValue = '' + i));
  }
  var ft = Array.isArray;
  function Ge(t, n, i, l) {
    if (((t = t.options), n)) {
      n = {};
      for (var d = 0; d < i.length; d++) n['$' + i[d]] = !0;
      for (i = 0; i < t.length; i++)
        (d = n.hasOwnProperty('$' + t[i].value)),
          t[i].selected !== d && (t[i].selected = d),
          d && l && (t[i].defaultSelected = !0);
    } else {
      for (i = '' + Re(i), n = null, d = 0; d < t.length; d++) {
        if (t[d].value === i) {
          (t[d].selected = !0), l && (t[d].defaultSelected = !0);
          return;
        }
        n !== null || t[d].disabled || (n = t[d]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function me(t, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(o(91));
    return re({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: '' + t._wrapperState.initialValue,
    });
  }
  function Vn(t, n) {
    var i = n.value;
    if (i == null) {
      if (((i = n.children), (n = n.defaultValue), i != null)) {
        if (n != null) throw Error(o(92));
        if (ft(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ''), (i = n);
    }
    t._wrapperState = { initialValue: Re(i) };
  }
  function bt(t, n) {
    var i = Re(n.value),
      l = Re(n.defaultValue);
    i != null &&
      ((i = '' + i),
      i !== t.value && (t.value = i),
      n.defaultValue == null && t.defaultValue !== i && (t.defaultValue = i)),
      l != null && (t.defaultValue = '' + l);
  }
  function Kn(t) {
    var n = t.textContent;
    n === t._wrapperState.initialValue &&
      n !== '' &&
      n !== null &&
      (t.value = n);
  }
  function lr(t) {
    switch (t) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function qn(t, n) {
    return t == null || t === 'http://www.w3.org/1999/xhtml'
      ? lr(n)
      : t === 'http://www.w3.org/2000/svg' && n === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : t;
  }
  var hn,
    Gn = (function (t) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (n, i, l, d) {
            MSApp.execUnsafeLocalFunction(function () {
              return t(n, i, l, d);
            });
          }
        : t;
    })(function (t, n) {
      if (t.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in t)
        t.innerHTML = n;
      else {
        for (
          hn = hn || document.createElement('div'),
            hn.innerHTML = '<svg>' + n.valueOf().toString() + '</svg>',
            n = hn.firstChild;
          t.firstChild;

        )
          t.removeChild(t.firstChild);
        for (; n.firstChild; ) t.appendChild(n.firstChild);
      }
    });
  function qt(t, n) {
    if (n) {
      var i = t.firstChild;
      if (i && i === t.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var De = {
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
      strokeWidth: !0,
    },
    ur = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(De).forEach(function (t) {
    ur.forEach(function (n) {
      (n = n + t.charAt(0).toUpperCase() + t.substring(1)), (De[n] = De[t]);
    });
  });
  function cr(t, n, i) {
    return n == null || typeof n == 'boolean' || n === ''
      ? ''
      : i || typeof n != 'number' || n === 0 || (De.hasOwnProperty(t) && De[t])
      ? ('' + n).trim()
      : n + 'px';
  }
  function ei(t, n) {
    t = t.style;
    for (var i in n)
      if (n.hasOwnProperty(i)) {
        var l = i.indexOf('--') === 0,
          d = cr(i, n[i], l);
        i === 'float' && (i = 'cssFloat'), l ? t.setProperty(i, d) : (t[i] = d);
      }
  }
  var Se = re(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Ue(t, n) {
    if (n) {
      if (Se[t] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(o(137, t));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(o(60));
        if (
          typeof n.dangerouslySetInnerHTML != 'object' ||
          !('__html' in n.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (n.style != null && typeof n.style != 'object') throw Error(o(62));
    }
  }
  function lt(t, n) {
    if (t.indexOf('-') === -1) return typeof n.is == 'string';
    switch (t) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var On = null;
  function oo(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Nl = null,
    io = null,
    so = null;
  function Jd(t) {
    if ((t = Ci(t))) {
      if (typeof Nl != 'function') throw Error(o(280));
      var n = t.stateNode;
      n && ((n = Us(n)), Nl(t.stateNode, t.type, n));
    }
  }
  function Zd(t) {
    io ? (so ? so.push(t) : (so = [t])) : (io = t);
  }
  function ef() {
    if (io) {
      var t = io,
        n = so;
      if (((so = io = null), Jd(t), n)) for (t = 0; t < n.length; t++) Jd(n[t]);
    }
  }
  function tf(t, n) {
    return t(n);
  }
  function nf() {}
  var Al = !1;
  function rf(t, n, i) {
    if (Al) return t(n, i);
    Al = !0;
    try {
      return tf(t, n, i);
    } finally {
      (Al = !1), (io !== null || so !== null) && (nf(), ef());
    }
  }
  function ti(t, n) {
    var i = t.stateNode;
    if (i === null) return null;
    var l = Us(i);
    if (l === null) return null;
    i = l[n];
    e: switch (n) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === 'button' ||
            t === 'input' ||
            t === 'select' ||
            t === 'textarea'
          ))),
          (t = !l);
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (i && typeof i != 'function') throw Error(o(231, n, typeof i));
    return i;
  }
  var Ll = !1;
  if (f)
    try {
      var ni = {};
      Object.defineProperty(ni, 'passive', {
        get: function () {
          Ll = !0;
        },
      }),
        window.addEventListener('test', ni, ni),
        window.removeEventListener('test', ni, ni);
    } catch {
      Ll = !1;
    }
  function i0(t, n, i, l, d, p, y, T, A) {
    var D = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(i, D);
    } catch (J) {
      this.onError(J);
    }
  }
  var ri = !1,
    Ss = null,
    ws = !1,
    $l = null,
    s0 = {
      onError: function (t) {
        (ri = !0), (Ss = t);
      },
    };
  function a0(t, n, i, l, d, p, y, T, A) {
    (ri = !1), (Ss = null), i0.apply(s0, arguments);
  }
  function l0(t, n, i, l, d, p, y, T, A) {
    if ((a0.apply(this, arguments), ri)) {
      if (ri) {
        var D = Ss;
        (ri = !1), (Ss = null);
      } else throw Error(o(198));
      ws || ((ws = !0), ($l = D));
    }
  }
  function $r(t) {
    var n = t,
      i = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do (n = t), n.flags & 4098 && (i = n.return), (t = n.return);
      while (t);
    }
    return n.tag === 3 ? i : null;
  }
  function of(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function sf(t) {
    if ($r(t) !== t) throw Error(o(188));
  }
  function u0(t) {
    var n = t.alternate;
    if (!n) {
      if (((n = $r(t)), n === null)) throw Error(o(188));
      return n !== t ? null : t;
    }
    for (var i = t, l = n; ; ) {
      var d = i.return;
      if (d === null) break;
      var p = d.alternate;
      if (p === null) {
        if (((l = d.return), l !== null)) {
          i = l;
          continue;
        }
        break;
      }
      if (d.child === p.child) {
        for (p = d.child; p; ) {
          if (p === i) return sf(d), t;
          if (p === l) return sf(d), n;
          p = p.sibling;
        }
        throw Error(o(188));
      }
      if (i.return !== l.return) (i = d), (l = p);
      else {
        for (var y = !1, T = d.child; T; ) {
          if (T === i) {
            (y = !0), (i = d), (l = p);
            break;
          }
          if (T === l) {
            (y = !0), (l = d), (i = p);
            break;
          }
          T = T.sibling;
        }
        if (!y) {
          for (T = p.child; T; ) {
            if (T === i) {
              (y = !0), (i = p), (l = d);
              break;
            }
            if (T === l) {
              (y = !0), (l = p), (i = d);
              break;
            }
            T = T.sibling;
          }
          if (!y) throw Error(o(189));
        }
      }
      if (i.alternate !== l) throw Error(o(190));
    }
    if (i.tag !== 3) throw Error(o(188));
    return i.stateNode.current === i ? t : n;
  }
  function af(t) {
    return (t = u0(t)), t !== null ? lf(t) : null;
  }
  function lf(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
      var n = lf(t);
      if (n !== null) return n;
      t = t.sibling;
    }
    return null;
  }
  var uf = r.unstable_scheduleCallback,
    cf = r.unstable_cancelCallback,
    c0 = r.unstable_shouldYield,
    d0 = r.unstable_requestPaint,
    ut = r.unstable_now,
    f0 = r.unstable_getCurrentPriorityLevel,
    Ml = r.unstable_ImmediatePriority,
    df = r.unstable_UserBlockingPriority,
    Cs = r.unstable_NormalPriority,
    p0 = r.unstable_LowPriority,
    ff = r.unstable_IdlePriority,
    bs = null,
    Nn = null;
  function h0(t) {
    if (Nn && typeof Nn.onCommitFiberRoot == 'function')
      try {
        Nn.onCommitFiberRoot(bs, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  var mn = Math.clz32 ? Math.clz32 : y0,
    m0 = Math.log,
    g0 = Math.LN2;
  function y0(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((m0(t) / g0) | 0)) | 0;
  }
  var Es = 64,
    ks = 4194304;
  function oi(t) {
    switch (t & -t) {
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
        return t & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return t & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function Rs(t, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var l = 0,
      d = t.suspendedLanes,
      p = t.pingedLanes,
      y = i & 268435455;
    if (y !== 0) {
      var T = y & ~d;
      T !== 0 ? (l = oi(T)) : ((p &= y), p !== 0 && (l = oi(p)));
    } else (y = i & ~d), y !== 0 ? (l = oi(y)) : p !== 0 && (l = oi(p));
    if (l === 0) return 0;
    if (
      n !== 0 &&
      n !== l &&
      !(n & d) &&
      ((d = l & -l), (p = n & -n), d >= p || (d === 16 && (p & 4194240) !== 0))
    )
      return n;
    if ((l & 4 && (l |= i & 16), (n = t.entangledLanes), n !== 0))
      for (t = t.entanglements, n &= l; 0 < n; )
        (i = 31 - mn(n)), (d = 1 << i), (l |= t[i]), (n &= ~d);
    return l;
  }
  function v0(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
        return n + 250;
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
        return n + 5e3;
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
  function x0(t, n) {
    for (
      var i = t.suspendedLanes,
        l = t.pingedLanes,
        d = t.expirationTimes,
        p = t.pendingLanes;
      0 < p;

    ) {
      var y = 31 - mn(p),
        T = 1 << y,
        A = d[y];
      A === -1
        ? (!(T & i) || T & l) && (d[y] = v0(T, n))
        : A <= n && (t.expiredLanes |= T),
        (p &= ~T);
    }
  }
  function _l(t) {
    return (
      (t = t.pendingLanes & -1073741825),
      t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
    );
  }
  function pf() {
    var t = Es;
    return (Es <<= 1), !(Es & 4194240) && (Es = 64), t;
  }
  function zl(t) {
    for (var n = [], i = 0; 31 > i; i++) n.push(t);
    return n;
  }
  function ii(t, n, i) {
    (t.pendingLanes |= n),
      n !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
      (t = t.eventTimes),
      (n = 31 - mn(n)),
      (t[n] = i);
  }
  function S0(t, n) {
    var i = t.pendingLanes & ~n;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.expiredLanes &= n),
      (t.mutableReadLanes &= n),
      (t.entangledLanes &= n),
      (n = t.entanglements);
    var l = t.eventTimes;
    for (t = t.expirationTimes; 0 < i; ) {
      var d = 31 - mn(i),
        p = 1 << d;
      (n[d] = 0), (l[d] = -1), (t[d] = -1), (i &= ~p);
    }
  }
  function Fl(t, n) {
    var i = (t.entangledLanes |= n);
    for (t = t.entanglements; i; ) {
      var l = 31 - mn(i),
        d = 1 << l;
      (d & n) | (t[l] & n) && (t[l] |= n), (i &= ~d);
    }
  }
  var We = 0;
  function hf(t) {
    return (
      (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var mf,
    Bl,
    gf,
    yf,
    vf,
    Dl = !1,
    Ps = [],
    dr = null,
    fr = null,
    pr = null,
    si = new Map(),
    ai = new Map(),
    hr = [],
    w0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      );
  function xf(t, n) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        dr = null;
        break;
      case 'dragenter':
      case 'dragleave':
        fr = null;
        break;
      case 'mouseover':
      case 'mouseout':
        pr = null;
        break;
      case 'pointerover':
      case 'pointerout':
        si.delete(n.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        ai.delete(n.pointerId);
    }
  }
  function li(t, n, i, l, d, p) {
    return t === null || t.nativeEvent !== p
      ? ((t = {
          blockedOn: n,
          domEventName: i,
          eventSystemFlags: l,
          nativeEvent: p,
          targetContainers: [d],
        }),
        n !== null && ((n = Ci(n)), n !== null && Bl(n)),
        t)
      : ((t.eventSystemFlags |= l),
        (n = t.targetContainers),
        d !== null && n.indexOf(d) === -1 && n.push(d),
        t);
  }
  function C0(t, n, i, l, d) {
    switch (n) {
      case 'focusin':
        return (dr = li(dr, t, n, i, l, d)), !0;
      case 'dragenter':
        return (fr = li(fr, t, n, i, l, d)), !0;
      case 'mouseover':
        return (pr = li(pr, t, n, i, l, d)), !0;
      case 'pointerover':
        var p = d.pointerId;
        return si.set(p, li(si.get(p) || null, t, n, i, l, d)), !0;
      case 'gotpointercapture':
        return (
          (p = d.pointerId), ai.set(p, li(ai.get(p) || null, t, n, i, l, d)), !0
        );
    }
    return !1;
  }
  function Sf(t) {
    var n = Mr(t.target);
    if (n !== null) {
      var i = $r(n);
      if (i !== null) {
        if (((n = i.tag), n === 13)) {
          if (((n = of(i)), n !== null)) {
            (t.blockedOn = n),
              vf(t.priority, function () {
                gf(i);
              });
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ts(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var i = Ul(t.domEventName, t.eventSystemFlags, n[0], t.nativeEvent);
      if (i === null) {
        i = t.nativeEvent;
        var l = new i.constructor(i.type, i);
        (On = l), i.target.dispatchEvent(l), (On = null);
      } else return (n = Ci(i)), n !== null && Bl(n), (t.blockedOn = i), !1;
      n.shift();
    }
    return !0;
  }
  function wf(t, n, i) {
    Ts(t) && i.delete(n);
  }
  function b0() {
    (Dl = !1),
      dr !== null && Ts(dr) && (dr = null),
      fr !== null && Ts(fr) && (fr = null),
      pr !== null && Ts(pr) && (pr = null),
      si.forEach(wf),
      ai.forEach(wf);
  }
  function ui(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      Dl ||
        ((Dl = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, b0)));
  }
  function ci(t) {
    function n(d) {
      return ui(d, t);
    }
    if (0 < Ps.length) {
      ui(Ps[0], t);
      for (var i = 1; i < Ps.length; i++) {
        var l = Ps[i];
        l.blockedOn === t && (l.blockedOn = null);
      }
    }
    for (
      dr !== null && ui(dr, t),
        fr !== null && ui(fr, t),
        pr !== null && ui(pr, t),
        si.forEach(n),
        ai.forEach(n),
        i = 0;
      i < hr.length;
      i++
    )
      (l = hr[i]), l.blockedOn === t && (l.blockedOn = null);
    for (; 0 < hr.length && ((i = hr[0]), i.blockedOn === null); )
      Sf(i), i.blockedOn === null && hr.shift();
  }
  var ao = I.ReactCurrentBatchConfig,
    Is = !0;
  function E0(t, n, i, l) {
    var d = We,
      p = ao.transition;
    ao.transition = null;
    try {
      (We = 1), jl(t, n, i, l);
    } finally {
      (We = d), (ao.transition = p);
    }
  }
  function k0(t, n, i, l) {
    var d = We,
      p = ao.transition;
    ao.transition = null;
    try {
      (We = 4), jl(t, n, i, l);
    } finally {
      (We = d), (ao.transition = p);
    }
  }
  function jl(t, n, i, l) {
    if (Is) {
      var d = Ul(t, n, i, l);
      if (d === null) iu(t, n, l, Os, i), xf(t, l);
      else if (C0(d, t, n, i, l)) l.stopPropagation();
      else if ((xf(t, l), n & 4 && -1 < w0.indexOf(t))) {
        for (; d !== null; ) {
          var p = Ci(d);
          if (
            (p !== null && mf(p),
            (p = Ul(t, n, i, l)),
            p === null && iu(t, n, l, Os, i),
            p === d)
          )
            break;
          d = p;
        }
        d !== null && l.stopPropagation();
      } else iu(t, n, l, null, i);
    }
  }
  var Os = null;
  function Ul(t, n, i, l) {
    if (((Os = null), (t = oo(l)), (t = Mr(t)), t !== null))
      if (((n = $r(t)), n === null)) t = null;
      else if (((i = n.tag), i === 13)) {
        if (((t = of(n)), t !== null)) return t;
        t = null;
      } else if (i === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        t = null;
      } else n !== t && (t = null);
    return (Os = t), null;
  }
  function Cf(t) {
    switch (t) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (f0()) {
          case Ml:
            return 1;
          case df:
            return 4;
          case Cs:
          case p0:
            return 16;
          case ff:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var mr = null,
    Wl = null,
    Ns = null;
  function bf() {
    if (Ns) return Ns;
    var t,
      n = Wl,
      i = n.length,
      l,
      d = 'value' in mr ? mr.value : mr.textContent,
      p = d.length;
    for (t = 0; t < i && n[t] === d[t]; t++);
    var y = i - t;
    for (l = 1; l <= y && n[i - l] === d[p - l]; l++);
    return (Ns = d.slice(t, 1 < l ? 1 - l : void 0));
  }
  function As(t) {
    var n = t.keyCode;
    return (
      'charCode' in t
        ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Ls() {
    return !0;
  }
  function Ef() {
    return !1;
  }
  function Gt(t) {
    function n(i, l, d, p, y) {
      (this._reactName = i),
        (this._targetInst = d),
        (this.type = l),
        (this.nativeEvent = p),
        (this.target = y),
        (this.currentTarget = null);
      for (var T in t)
        t.hasOwnProperty(T) && ((i = t[T]), (this[T] = i ? i(p) : p[T]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? Ls
          : Ef),
        (this.isPropagationStopped = Ef),
        this
      );
    }
    return (
      re(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != 'unknown' && (i.returnValue = !1),
            (this.isDefaultPrevented = Ls));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != 'unknown' && (i.cancelBubble = !0),
            (this.isPropagationStopped = Ls));
        },
        persist: function () {},
        isPersistent: Ls,
      }),
      n
    );
  }
  var lo = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Hl = Gt(lo),
    di = re({}, lo, { view: 0, detail: 0 }),
    R0 = Gt(di),
    Vl,
    Kl,
    fi,
    $s = re({}, di, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Gl,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return 'movementX' in t
          ? t.movementX
          : (t !== fi &&
              (fi && t.type === 'mousemove'
                ? ((Vl = t.screenX - fi.screenX), (Kl = t.screenY - fi.screenY))
                : (Kl = Vl = 0),
              (fi = t)),
            Vl);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : Kl;
      },
    }),
    kf = Gt($s),
    P0 = re({}, $s, { dataTransfer: 0 }),
    T0 = Gt(P0),
    I0 = re({}, di, { relatedTarget: 0 }),
    ql = Gt(I0),
    O0 = re({}, lo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    N0 = Gt(O0),
    A0 = re({}, lo, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    L0 = Gt(A0),
    $0 = re({}, lo, { data: 0 }),
    Rf = Gt($0),
    M0 = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    _0 = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    z0 = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function F0(t) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(t)
      : (t = z0[t])
      ? !!n[t]
      : !1;
  }
  function Gl() {
    return F0;
  }
  var B0 = re({}, di, {
      key: function (t) {
        if (t.key) {
          var n = M0[t.key] || t.key;
          if (n !== 'Unidentified') return n;
        }
        return t.type === 'keypress'
          ? ((t = As(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
          ? _0[t.keyCode] || 'Unidentified'
          : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Gl,
      charCode: function (t) {
        return t.type === 'keypress' ? As(t) : 0;
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === 'keypress'
          ? As(t)
          : t.type === 'keydown' || t.type === 'keyup'
          ? t.keyCode
          : 0;
      },
    }),
    D0 = Gt(B0),
    j0 = re({}, $s, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Pf = Gt(j0),
    U0 = re({}, di, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gl,
    }),
    W0 = Gt(U0),
    H0 = re({}, lo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    V0 = Gt(H0),
    K0 = re({}, $s, {
      deltaX: function (t) {
        return 'deltaX' in t
          ? t.deltaX
          : 'wheelDeltaX' in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return 'deltaY' in t
          ? t.deltaY
          : 'wheelDeltaY' in t
          ? -t.wheelDeltaY
          : 'wheelDelta' in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    q0 = Gt(K0),
    G0 = [9, 13, 27, 32],
    Ql = f && 'CompositionEvent' in window,
    pi = null;
  f && 'documentMode' in document && (pi = document.documentMode);
  var Q0 = f && 'TextEvent' in window && !pi,
    Tf = f && (!Ql || (pi && 8 < pi && 11 >= pi)),
    If = ' ',
    Of = !1;
  function Nf(t, n) {
    switch (t) {
      case 'keyup':
        return G0.indexOf(n.keyCode) !== -1;
      case 'keydown':
        return n.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Af(t) {
    return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
  }
  var uo = !1;
  function X0(t, n) {
    switch (t) {
      case 'compositionend':
        return Af(n);
      case 'keypress':
        return n.which !== 32 ? null : ((Of = !0), If);
      case 'textInput':
        return (t = n.data), t === If && Of ? null : t;
      default:
        return null;
    }
  }
  function Y0(t, n) {
    if (uo)
      return t === 'compositionend' || (!Ql && Nf(t, n))
        ? ((t = bf()), (Ns = Wl = mr = null), (uo = !1), t)
        : null;
    switch (t) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case 'compositionend':
        return Tf && n.locale !== 'ko' ? null : n.data;
      default:
        return null;
    }
  }
  var J0 = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Lf(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === 'input' ? !!J0[t.type] : n === 'textarea';
  }
  function $f(t, n, i, l) {
    Zd(l),
      (n = Bs(n, 'onChange')),
      0 < n.length &&
        ((i = new Hl('onChange', 'change', null, i, l)),
        t.push({ event: i, listeners: n }));
  }
  var hi = null,
    mi = null;
  function Z0(t) {
    Jf(t, 0);
  }
  function Ms(t) {
    var n = mo(t);
    if (Oe(n)) return t;
  }
  function ev(t, n) {
    if (t === 'change') return n;
  }
  var Mf = !1;
  if (f) {
    var Xl;
    if (f) {
      var Yl = 'oninput' in document;
      if (!Yl) {
        var _f = document.createElement('div');
        _f.setAttribute('oninput', 'return;'),
          (Yl = typeof _f.oninput == 'function');
      }
      Xl = Yl;
    } else Xl = !1;
    Mf = Xl && (!document.documentMode || 9 < document.documentMode);
  }
  function zf() {
    hi && (hi.detachEvent('onpropertychange', Ff), (mi = hi = null));
  }
  function Ff(t) {
    if (t.propertyName === 'value' && Ms(mi)) {
      var n = [];
      $f(n, mi, t, oo(t)), rf(Z0, n);
    }
  }
  function tv(t, n, i) {
    t === 'focusin'
      ? (zf(), (hi = n), (mi = i), hi.attachEvent('onpropertychange', Ff))
      : t === 'focusout' && zf();
  }
  function nv(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
      return Ms(mi);
  }
  function rv(t, n) {
    if (t === 'click') return Ms(n);
  }
  function ov(t, n) {
    if (t === 'input' || t === 'change') return Ms(n);
  }
  function iv(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
  }
  var gn = typeof Object.is == 'function' ? Object.is : iv;
  function gi(t, n) {
    if (gn(t, n)) return !0;
    if (
      typeof t != 'object' ||
      t === null ||
      typeof n != 'object' ||
      n === null
    )
      return !1;
    var i = Object.keys(t),
      l = Object.keys(n);
    if (i.length !== l.length) return !1;
    for (l = 0; l < i.length; l++) {
      var d = i[l];
      if (!h.call(n, d) || !gn(t[d], n[d])) return !1;
    }
    return !0;
  }
  function Bf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Df(t, n) {
    var i = Bf(t);
    t = 0;
    for (var l; i; ) {
      if (i.nodeType === 3) {
        if (((l = t + i.textContent.length), t <= n && l >= n))
          return { node: i, offset: n - t };
        t = l;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Bf(i);
    }
  }
  function jf(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? jf(t, n.parentNode)
        : 'contains' in t
        ? t.contains(n)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function Uf() {
    for (var t = window, n = Xe(); n instanceof t.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == 'string';
      } catch {
        i = !1;
      }
      if (i) t = n.contentWindow;
      else break;
      n = Xe(t.document);
    }
    return n;
  }
  function Jl(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      n &&
      ((n === 'input' &&
        (t.type === 'text' ||
          t.type === 'search' ||
          t.type === 'tel' ||
          t.type === 'url' ||
          t.type === 'password')) ||
        n === 'textarea' ||
        t.contentEditable === 'true')
    );
  }
  function sv(t) {
    var n = Uf(),
      i = t.focusedElem,
      l = t.selectionRange;
    if (
      n !== i &&
      i &&
      i.ownerDocument &&
      jf(i.ownerDocument.documentElement, i)
    ) {
      if (l !== null && Jl(i)) {
        if (
          ((n = l.start),
          (t = l.end),
          t === void 0 && (t = n),
          'selectionStart' in i)
        )
          (i.selectionStart = n),
            (i.selectionEnd = Math.min(t, i.value.length));
        else if (
          ((t = ((n = i.ownerDocument || document) && n.defaultView) || window),
          t.getSelection)
        ) {
          t = t.getSelection();
          var d = i.textContent.length,
            p = Math.min(l.start, d);
          (l = l.end === void 0 ? p : Math.min(l.end, d)),
            !t.extend && p > l && ((d = l), (l = p), (p = d)),
            (d = Df(i, p));
          var y = Df(i, l);
          d &&
            y &&
            (t.rangeCount !== 1 ||
              t.anchorNode !== d.node ||
              t.anchorOffset !== d.offset ||
              t.focusNode !== y.node ||
              t.focusOffset !== y.offset) &&
            ((n = n.createRange()),
            n.setStart(d.node, d.offset),
            t.removeAllRanges(),
            p > l
              ? (t.addRange(n), t.extend(y.node, y.offset))
              : (n.setEnd(y.node, y.offset), t.addRange(n)));
        }
      }
      for (n = [], t = i; (t = t.parentNode); )
        t.nodeType === 1 &&
          n.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof i.focus == 'function' && i.focus(), i = 0; i < n.length; i++)
        (t = n[i]),
          (t.element.scrollLeft = t.left),
          (t.element.scrollTop = t.top);
    }
  }
  var av = f && 'documentMode' in document && 11 >= document.documentMode,
    co = null,
    Zl = null,
    yi = null,
    eu = !1;
  function Wf(t, n, i) {
    var l =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    eu ||
      co == null ||
      co !== Xe(l) ||
      ((l = co),
      'selectionStart' in l && Jl(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (yi && gi(yi, l)) ||
        ((yi = l),
        (l = Bs(Zl, 'onSelect')),
        0 < l.length &&
          ((n = new Hl('onSelect', 'select', null, n, i)),
          t.push({ event: n, listeners: l }),
          (n.target = co))));
  }
  function _s(t, n) {
    var i = {};
    return (
      (i[t.toLowerCase()] = n.toLowerCase()),
      (i['Webkit' + t] = 'webkit' + n),
      (i['Moz' + t] = 'moz' + n),
      i
    );
  }
  var fo = {
      animationend: _s('Animation', 'AnimationEnd'),
      animationiteration: _s('Animation', 'AnimationIteration'),
      animationstart: _s('Animation', 'AnimationStart'),
      transitionend: _s('Transition', 'TransitionEnd'),
    },
    tu = {},
    Hf = {};
  f &&
    ((Hf = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete fo.animationend.animation,
      delete fo.animationiteration.animation,
      delete fo.animationstart.animation),
    'TransitionEvent' in window || delete fo.transitionend.transition);
  function zs(t) {
    if (tu[t]) return tu[t];
    if (!fo[t]) return t;
    var n = fo[t],
      i;
    for (i in n) if (n.hasOwnProperty(i) && i in Hf) return (tu[t] = n[i]);
    return t;
  }
  var Vf = zs('animationend'),
    Kf = zs('animationiteration'),
    qf = zs('animationstart'),
    Gf = zs('transitionend'),
    Qf = new Map(),
    Xf =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  function gr(t, n) {
    Qf.set(t, n), u(n, [t]);
  }
  for (var nu = 0; nu < Xf.length; nu++) {
    var ru = Xf[nu],
      lv = ru.toLowerCase(),
      uv = ru[0].toUpperCase() + ru.slice(1);
    gr(lv, 'on' + uv);
  }
  gr(Vf, 'onAnimationEnd'),
    gr(Kf, 'onAnimationIteration'),
    gr(qf, 'onAnimationStart'),
    gr('dblclick', 'onDoubleClick'),
    gr('focusin', 'onFocus'),
    gr('focusout', 'onBlur'),
    gr(Gf, 'onTransitionEnd'),
    c('onMouseEnter', ['mouseout', 'mouseover']),
    c('onMouseLeave', ['mouseout', 'mouseover']),
    c('onPointerEnter', ['pointerout', 'pointerover']),
    c('onPointerLeave', ['pointerout', 'pointerover']),
    u(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    u(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    u('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    u(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    u(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    u(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
  var vi =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    cv = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(vi),
    );
  function Yf(t, n, i) {
    var l = t.type || 'unknown-event';
    (t.currentTarget = i), l0(l, n, void 0, t), (t.currentTarget = null);
  }
  function Jf(t, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < t.length; i++) {
      var l = t[i],
        d = l.event;
      l = l.listeners;
      e: {
        var p = void 0;
        if (n)
          for (var y = l.length - 1; 0 <= y; y--) {
            var T = l[y],
              A = T.instance,
              D = T.currentTarget;
            if (((T = T.listener), A !== p && d.isPropagationStopped()))
              break e;
            Yf(d, T, D), (p = A);
          }
        else
          for (y = 0; y < l.length; y++) {
            if (
              ((T = l[y]),
              (A = T.instance),
              (D = T.currentTarget),
              (T = T.listener),
              A !== p && d.isPropagationStopped())
            )
              break e;
            Yf(d, T, D), (p = A);
          }
      }
    }
    if (ws) throw ((t = $l), (ws = !1), ($l = null), t);
  }
  function Ye(t, n) {
    var i = n[du];
    i === void 0 && (i = n[du] = new Set());
    var l = t + '__bubble';
    i.has(l) || (Zf(n, t, 2, !1), i.add(l));
  }
  function ou(t, n, i) {
    var l = 0;
    n && (l |= 4), Zf(i, t, l, n);
  }
  var Fs = '_reactListening' + Math.random().toString(36).slice(2);
  function xi(t) {
    if (!t[Fs]) {
      (t[Fs] = !0),
        s.forEach(function (i) {
          i !== 'selectionchange' && (cv.has(i) || ou(i, !1, t), ou(i, !0, t));
        });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[Fs] || ((n[Fs] = !0), ou('selectionchange', !1, n));
    }
  }
  function Zf(t, n, i, l) {
    switch (Cf(n)) {
      case 1:
        var d = E0;
        break;
      case 4:
        d = k0;
        break;
      default:
        d = jl;
    }
    (i = d.bind(null, n, i, t)),
      (d = void 0),
      !Ll ||
        (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') ||
        (d = !0),
      l
        ? d !== void 0
          ? t.addEventListener(n, i, { capture: !0, passive: d })
          : t.addEventListener(n, i, !0)
        : d !== void 0
        ? t.addEventListener(n, i, { passive: d })
        : t.addEventListener(n, i, !1);
  }
  function iu(t, n, i, l, d) {
    var p = l;
    if (!(n & 1) && !(n & 2) && l !== null)
      e: for (;;) {
        if (l === null) return;
        var y = l.tag;
        if (y === 3 || y === 4) {
          var T = l.stateNode.containerInfo;
          if (T === d || (T.nodeType === 8 && T.parentNode === d)) break;
          if (y === 4)
            for (y = l.return; y !== null; ) {
              var A = y.tag;
              if (
                (A === 3 || A === 4) &&
                ((A = y.stateNode.containerInfo),
                A === d || (A.nodeType === 8 && A.parentNode === d))
              )
                return;
              y = y.return;
            }
          for (; T !== null; ) {
            if (((y = Mr(T)), y === null)) return;
            if (((A = y.tag), A === 5 || A === 6)) {
              l = p = y;
              continue e;
            }
            T = T.parentNode;
          }
        }
        l = l.return;
      }
    rf(function () {
      var D = p,
        J = oo(i),
        te = [];
      e: {
        var X = Qf.get(t);
        if (X !== void 0) {
          var se = Hl,
            ce = t;
          switch (t) {
            case 'keypress':
              if (As(i) === 0) break e;
            case 'keydown':
            case 'keyup':
              se = D0;
              break;
            case 'focusin':
              (ce = 'focus'), (se = ql);
              break;
            case 'focusout':
              (ce = 'blur'), (se = ql);
              break;
            case 'beforeblur':
            case 'afterblur':
              se = ql;
              break;
            case 'click':
              if (i.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              se = kf;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              se = T0;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              se = W0;
              break;
            case Vf:
            case Kf:
            case qf:
              se = N0;
              break;
            case Gf:
              se = V0;
              break;
            case 'scroll':
              se = R0;
              break;
            case 'wheel':
              se = q0;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              se = L0;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              se = Pf;
          }
          var fe = (n & 4) !== 0,
            ct = !fe && t === 'scroll',
            F = fe ? (X !== null ? X + 'Capture' : null) : X;
          fe = [];
          for (var $ = D, B; $ !== null; ) {
            B = $;
            var oe = B.stateNode;
            if (
              (B.tag === 5 &&
                oe !== null &&
                ((B = oe),
                F !== null &&
                  ((oe = ti($, F)), oe != null && fe.push(Si($, oe, B)))),
              ct)
            )
              break;
            $ = $.return;
          }
          0 < fe.length &&
            ((X = new se(X, ce, null, i, J)),
            te.push({ event: X, listeners: fe }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((X = t === 'mouseover' || t === 'pointerover'),
            (se = t === 'mouseout' || t === 'pointerout'),
            X &&
              i !== On &&
              (ce = i.relatedTarget || i.fromElement) &&
              (Mr(ce) || ce[Qn]))
          )
            break e;
          if (
            (se || X) &&
            ((X =
              J.window === J
                ? J
                : (X = J.ownerDocument)
                ? X.defaultView || X.parentWindow
                : window),
            se
              ? ((ce = i.relatedTarget || i.toElement),
                (se = D),
                (ce = ce ? Mr(ce) : null),
                ce !== null &&
                  ((ct = $r(ce)),
                  ce !== ct || (ce.tag !== 5 && ce.tag !== 6)) &&
                  (ce = null))
              : ((se = null), (ce = D)),
            se !== ce)
          ) {
            if (
              ((fe = kf),
              (oe = 'onMouseLeave'),
              (F = 'onMouseEnter'),
              ($ = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((fe = Pf),
                (oe = 'onPointerLeave'),
                (F = 'onPointerEnter'),
                ($ = 'pointer')),
              (ct = se == null ? X : mo(se)),
              (B = ce == null ? X : mo(ce)),
              (X = new fe(oe, $ + 'leave', se, i, J)),
              (X.target = ct),
              (X.relatedTarget = B),
              (oe = null),
              Mr(J) === D &&
                ((fe = new fe(F, $ + 'enter', ce, i, J)),
                (fe.target = B),
                (fe.relatedTarget = ct),
                (oe = fe)),
              (ct = oe),
              se && ce)
            )
              t: {
                for (fe = se, F = ce, $ = 0, B = fe; B; B = po(B)) $++;
                for (B = 0, oe = F; oe; oe = po(oe)) B++;
                for (; 0 < $ - B; ) (fe = po(fe)), $--;
                for (; 0 < B - $; ) (F = po(F)), B--;
                for (; $--; ) {
                  if (fe === F || (F !== null && fe === F.alternate)) break t;
                  (fe = po(fe)), (F = po(F));
                }
                fe = null;
              }
            else fe = null;
            se !== null && ep(te, X, se, fe, !1),
              ce !== null && ct !== null && ep(te, ct, ce, fe, !0);
          }
        }
        e: {
          if (
            ((X = D ? mo(D) : window),
            (se = X.nodeName && X.nodeName.toLowerCase()),
            se === 'select' || (se === 'input' && X.type === 'file'))
          )
            var he = ev;
          else if (Lf(X))
            if (Mf) he = ov;
            else {
              he = nv;
              var ye = tv;
            }
          else
            (se = X.nodeName) &&
              se.toLowerCase() === 'input' &&
              (X.type === 'checkbox' || X.type === 'radio') &&
              (he = rv);
          if (he && (he = he(t, D))) {
            $f(te, he, i, J);
            break e;
          }
          ye && ye(t, X, D),
            t === 'focusout' &&
              (ye = X._wrapperState) &&
              ye.controlled &&
              X.type === 'number' &&
              Ft(X, 'number', X.value);
        }
        switch (((ye = D ? mo(D) : window), t)) {
          case 'focusin':
            (Lf(ye) || ye.contentEditable === 'true') &&
              ((co = ye), (Zl = D), (yi = null));
            break;
          case 'focusout':
            yi = Zl = co = null;
            break;
          case 'mousedown':
            eu = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (eu = !1), Wf(te, i, J);
            break;
          case 'selectionchange':
            if (av) break;
          case 'keydown':
          case 'keyup':
            Wf(te, i, J);
        }
        var ve;
        if (Ql)
          e: {
            switch (t) {
              case 'compositionstart':
                var Ee = 'onCompositionStart';
                break e;
              case 'compositionend':
                Ee = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Ee = 'onCompositionUpdate';
                break e;
            }
            Ee = void 0;
          }
        else
          uo
            ? Nf(t, i) && (Ee = 'onCompositionEnd')
            : t === 'keydown' &&
              i.keyCode === 229 &&
              (Ee = 'onCompositionStart');
        Ee &&
          (Tf &&
            i.locale !== 'ko' &&
            (uo || Ee !== 'onCompositionStart'
              ? Ee === 'onCompositionEnd' && uo && (ve = bf())
              : ((mr = J),
                (Wl = 'value' in mr ? mr.value : mr.textContent),
                (uo = !0))),
          (ye = Bs(D, Ee)),
          0 < ye.length &&
            ((Ee = new Rf(Ee, t, null, i, J)),
            te.push({ event: Ee, listeners: ye }),
            ve
              ? (Ee.data = ve)
              : ((ve = Af(i)), ve !== null && (Ee.data = ve)))),
          (ve = Q0 ? X0(t, i) : Y0(t, i)) &&
            ((D = Bs(D, 'onBeforeInput')),
            0 < D.length &&
              ((J = new Rf('onBeforeInput', 'beforeinput', null, i, J)),
              te.push({ event: J, listeners: D }),
              (J.data = ve)));
      }
      Jf(te, n);
    });
  }
  function Si(t, n, i) {
    return { instance: t, listener: n, currentTarget: i };
  }
  function Bs(t, n) {
    for (var i = n + 'Capture', l = []; t !== null; ) {
      var d = t,
        p = d.stateNode;
      d.tag === 5 &&
        p !== null &&
        ((d = p),
        (p = ti(t, i)),
        p != null && l.unshift(Si(t, p, d)),
        (p = ti(t, n)),
        p != null && l.push(Si(t, p, d))),
        (t = t.return);
    }
    return l;
  }
  function po(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function ep(t, n, i, l, d) {
    for (var p = n._reactName, y = []; i !== null && i !== l; ) {
      var T = i,
        A = T.alternate,
        D = T.stateNode;
      if (A !== null && A === l) break;
      T.tag === 5 &&
        D !== null &&
        ((T = D),
        d
          ? ((A = ti(i, p)), A != null && y.unshift(Si(i, A, T)))
          : d || ((A = ti(i, p)), A != null && y.push(Si(i, A, T)))),
        (i = i.return);
    }
    y.length !== 0 && t.push({ event: n, listeners: y });
  }
  var dv = /\r\n?/g,
    fv = /\u0000|\uFFFD/g;
  function tp(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        dv,
        `
`,
      )
      .replace(fv, '');
  }
  function Ds(t, n, i) {
    if (((n = tp(n)), tp(t) !== n && i)) throw Error(o(425));
  }
  function js() {}
  var su = null,
    au = null;
  function lu(t, n) {
    return (
      t === 'textarea' ||
      t === 'noscript' ||
      typeof n.children == 'string' ||
      typeof n.children == 'number' ||
      (typeof n.dangerouslySetInnerHTML == 'object' &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var uu = typeof setTimeout == 'function' ? setTimeout : void 0,
    pv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    np = typeof Promise == 'function' ? Promise : void 0,
    hv =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof np < 'u'
        ? function (t) {
            return np.resolve(null).then(t).catch(mv);
          }
        : uu;
  function mv(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function cu(t, n) {
    var i = n,
      l = 0;
    do {
      var d = i.nextSibling;
      if ((t.removeChild(i), d && d.nodeType === 8))
        if (((i = d.data), i === '/$')) {
          if (l === 0) {
            t.removeChild(d), ci(n);
            return;
          }
          l--;
        } else (i !== '$' && i !== '$?' && i !== '$!') || l++;
      i = d;
    } while (i);
    ci(n);
  }
  function yr(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = t.data), n === '$' || n === '$!' || n === '$?')) break;
        if (n === '/$') return null;
      }
    }
    return t;
  }
  function rp(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var i = t.data;
        if (i === '$' || i === '$!' || i === '$?') {
          if (n === 0) return t;
          n--;
        } else i === '/$' && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var ho = Math.random().toString(36).slice(2),
    An = '__reactFiber$' + ho,
    wi = '__reactProps$' + ho,
    Qn = '__reactContainer$' + ho,
    du = '__reactEvents$' + ho,
    gv = '__reactListeners$' + ho,
    yv = '__reactHandles$' + ho;
  function Mr(t) {
    var n = t[An];
    if (n) return n;
    for (var i = t.parentNode; i; ) {
      if ((n = i[Qn] || i[An])) {
        if (
          ((i = n.alternate),
          n.child !== null || (i !== null && i.child !== null))
        )
          for (t = rp(t); t !== null; ) {
            if ((i = t[An])) return i;
            t = rp(t);
          }
        return n;
      }
      (t = i), (i = t.parentNode);
    }
    return null;
  }
  function Ci(t) {
    return (
      (t = t[An] || t[Qn]),
      !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3)
        ? null
        : t
    );
  }
  function mo(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Us(t) {
    return t[wi] || null;
  }
  var fu = [],
    go = -1;
  function vr(t) {
    return { current: t };
  }
  function Je(t) {
    0 > go || ((t.current = fu[go]), (fu[go] = null), go--);
  }
  function Qe(t, n) {
    go++, (fu[go] = t.current), (t.current = n);
  }
  var xr = {},
    Tt = vr(xr),
    Bt = vr(!1),
    _r = xr;
  function yo(t, n) {
    var i = t.type.contextTypes;
    if (!i) return xr;
    var l = t.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === n)
      return l.__reactInternalMemoizedMaskedChildContext;
    var d = {},
      p;
    for (p in i) d[p] = n[p];
    return (
      l &&
        ((t = t.stateNode),
        (t.__reactInternalMemoizedUnmaskedChildContext = n),
        (t.__reactInternalMemoizedMaskedChildContext = d)),
      d
    );
  }
  function Dt(t) {
    return (t = t.childContextTypes), t != null;
  }
  function Ws() {
    Je(Bt), Je(Tt);
  }
  function op(t, n, i) {
    if (Tt.current !== xr) throw Error(o(168));
    Qe(Tt, n), Qe(Bt, i);
  }
  function ip(t, n, i) {
    var l = t.stateNode;
    if (((n = n.childContextTypes), typeof l.getChildContext != 'function'))
      return i;
    l = l.getChildContext();
    for (var d in l) if (!(d in n)) throw Error(o(108, ke(t) || 'Unknown', d));
    return re({}, i, l);
  }
  function Hs(t) {
    return (
      (t =
        ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) ||
        xr),
      (_r = Tt.current),
      Qe(Tt, t),
      Qe(Bt, Bt.current),
      !0
    );
  }
  function sp(t, n, i) {
    var l = t.stateNode;
    if (!l) throw Error(o(169));
    i
      ? ((t = ip(t, n, _r)),
        (l.__reactInternalMemoizedMergedChildContext = t),
        Je(Bt),
        Je(Tt),
        Qe(Tt, t))
      : Je(Bt),
      Qe(Bt, i);
  }
  var Xn = null,
    Vs = !1,
    pu = !1;
  function ap(t) {
    Xn === null ? (Xn = [t]) : Xn.push(t);
  }
  function vv(t) {
    (Vs = !0), ap(t);
  }
  function Sr() {
    if (!pu && Xn !== null) {
      pu = !0;
      var t = 0,
        n = We;
      try {
        var i = Xn;
        for (We = 1; t < i.length; t++) {
          var l = i[t];
          do l = l(!0);
          while (l !== null);
        }
        (Xn = null), (Vs = !1);
      } catch (d) {
        throw (Xn !== null && (Xn = Xn.slice(t + 1)), uf(Ml, Sr), d);
      } finally {
        (We = n), (pu = !1);
      }
    }
    return null;
  }
  var vo = [],
    xo = 0,
    Ks = null,
    qs = 0,
    tn = [],
    nn = 0,
    zr = null,
    Yn = 1,
    Jn = '';
  function Fr(t, n) {
    (vo[xo++] = qs), (vo[xo++] = Ks), (Ks = t), (qs = n);
  }
  function lp(t, n, i) {
    (tn[nn++] = Yn), (tn[nn++] = Jn), (tn[nn++] = zr), (zr = t);
    var l = Yn;
    t = Jn;
    var d = 32 - mn(l) - 1;
    (l &= ~(1 << d)), (i += 1);
    var p = 32 - mn(n) + d;
    if (30 < p) {
      var y = d - (d % 5);
      (p = (l & ((1 << y) - 1)).toString(32)),
        (l >>= y),
        (d -= y),
        (Yn = (1 << (32 - mn(n) + d)) | (i << d) | l),
        (Jn = p + t);
    } else (Yn = (1 << p) | (i << d) | l), (Jn = t);
  }
  function hu(t) {
    t.return !== null && (Fr(t, 1), lp(t, 1, 0));
  }
  function mu(t) {
    for (; t === Ks; )
      (Ks = vo[--xo]), (vo[xo] = null), (qs = vo[--xo]), (vo[xo] = null);
    for (; t === zr; )
      (zr = tn[--nn]),
        (tn[nn] = null),
        (Jn = tn[--nn]),
        (tn[nn] = null),
        (Yn = tn[--nn]),
        (tn[nn] = null);
  }
  var Qt = null,
    Xt = null,
    Ze = !1,
    yn = null;
  function up(t, n) {
    var i = an(5, null, null, 0);
    (i.elementType = 'DELETED'),
      (i.stateNode = n),
      (i.return = t),
      (n = t.deletions),
      n === null ? ((t.deletions = [i]), (t.flags |= 16)) : n.push(i);
  }
  function cp(t, n) {
    switch (t.tag) {
      case 5:
        var i = t.type;
        return (
          (n =
            n.nodeType !== 1 || i.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((t.stateNode = n), (Qt = t), (Xt = yr(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = t.pendingProps === '' || n.nodeType !== 3 ? null : n),
          n !== null ? ((t.stateNode = n), (Qt = t), (Xt = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((i = zr !== null ? { id: Yn, overflow: Jn } : null),
              (t.memoizedState = {
                dehydrated: n,
                treeContext: i,
                retryLane: 1073741824,
              }),
              (i = an(18, null, null, 0)),
              (i.stateNode = n),
              (i.return = t),
              (t.child = i),
              (Qt = t),
              (Xt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function gu(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function yu(t) {
    if (Ze) {
      var n = Xt;
      if (n) {
        var i = n;
        if (!cp(t, n)) {
          if (gu(t)) throw Error(o(418));
          n = yr(i.nextSibling);
          var l = Qt;
          n && cp(t, n)
            ? up(l, i)
            : ((t.flags = (t.flags & -4097) | 2), (Ze = !1), (Qt = t));
        }
      } else {
        if (gu(t)) throw Error(o(418));
        (t.flags = (t.flags & -4097) | 2), (Ze = !1), (Qt = t);
      }
    }
  }
  function dp(t) {
    for (
      t = t.return;
      t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;

    )
      t = t.return;
    Qt = t;
  }
  function Gs(t) {
    if (t !== Qt) return !1;
    if (!Ze) return dp(t), (Ze = !0), !1;
    var n;
    if (
      ((n = t.tag !== 3) &&
        !(n = t.tag !== 5) &&
        ((n = t.type),
        (n = n !== 'head' && n !== 'body' && !lu(t.type, t.memoizedProps))),
      n && (n = Xt))
    ) {
      if (gu(t)) throw (fp(), Error(o(418)));
      for (; n; ) up(t, n), (n = yr(n.nextSibling));
    }
    if ((dp(t), t.tag === 13)) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      e: {
        for (t = t.nextSibling, n = 0; t; ) {
          if (t.nodeType === 8) {
            var i = t.data;
            if (i === '/$') {
              if (n === 0) {
                Xt = yr(t.nextSibling);
                break e;
              }
              n--;
            } else (i !== '$' && i !== '$!' && i !== '$?') || n++;
          }
          t = t.nextSibling;
        }
        Xt = null;
      }
    } else Xt = Qt ? yr(t.stateNode.nextSibling) : null;
    return !0;
  }
  function fp() {
    for (var t = Xt; t; ) t = yr(t.nextSibling);
  }
  function So() {
    (Xt = Qt = null), (Ze = !1);
  }
  function vu(t) {
    yn === null ? (yn = [t]) : yn.push(t);
  }
  var xv = I.ReactCurrentBatchConfig;
  function bi(t, n, i) {
    if (
      ((t = i.ref),
      t !== null && typeof t != 'function' && typeof t != 'object')
    ) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(o(309));
          var l = i.stateNode;
        }
        if (!l) throw Error(o(147, t));
        var d = l,
          p = '' + t;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == 'function' &&
          n.ref._stringRef === p
          ? n.ref
          : ((n = function (y) {
              var T = d.refs;
              y === null ? delete T[p] : (T[p] = y);
            }),
            (n._stringRef = p),
            n);
      }
      if (typeof t != 'string') throw Error(o(284));
      if (!i._owner) throw Error(o(290, t));
    }
    return t;
  }
  function Qs(t, n) {
    throw (
      ((t = Object.prototype.toString.call(n)),
      Error(
        o(
          31,
          t === '[object Object]'
            ? 'object with keys {' + Object.keys(n).join(', ') + '}'
            : t,
        ),
      ))
    );
  }
  function pp(t) {
    var n = t._init;
    return n(t._payload);
  }
  function hp(t) {
    function n(F, $) {
      if (t) {
        var B = F.deletions;
        B === null ? ((F.deletions = [$]), (F.flags |= 16)) : B.push($);
      }
    }
    function i(F, $) {
      if (!t) return null;
      for (; $ !== null; ) n(F, $), ($ = $.sibling);
      return null;
    }
    function l(F, $) {
      for (F = new Map(); $ !== null; )
        $.key !== null ? F.set($.key, $) : F.set($.index, $), ($ = $.sibling);
      return F;
    }
    function d(F, $) {
      return (F = Tr(F, $)), (F.index = 0), (F.sibling = null), F;
    }
    function p(F, $, B) {
      return (
        (F.index = B),
        t
          ? ((B = F.alternate),
            B !== null
              ? ((B = B.index), B < $ ? ((F.flags |= 2), $) : B)
              : ((F.flags |= 2), $))
          : ((F.flags |= 1048576), $)
      );
    }
    function y(F) {
      return t && F.alternate === null && (F.flags |= 2), F;
    }
    function T(F, $, B, oe) {
      return $ === null || $.tag !== 6
        ? (($ = uc(B, F.mode, oe)), ($.return = F), $)
        : (($ = d($, B)), ($.return = F), $);
    }
    function A(F, $, B, oe) {
      var he = B.type;
      return he === z
        ? J(F, $, B.props.children, oe, B.key)
        : $ !== null &&
          ($.elementType === he ||
            (typeof he == 'object' &&
              he !== null &&
              he.$$typeof === ee &&
              pp(he) === $.type))
        ? ((oe = d($, B.props)), (oe.ref = bi(F, $, B)), (oe.return = F), oe)
        : ((oe = xa(B.type, B.key, B.props, null, F.mode, oe)),
          (oe.ref = bi(F, $, B)),
          (oe.return = F),
          oe);
    }
    function D(F, $, B, oe) {
      return $ === null ||
        $.tag !== 4 ||
        $.stateNode.containerInfo !== B.containerInfo ||
        $.stateNode.implementation !== B.implementation
        ? (($ = cc(B, F.mode, oe)), ($.return = F), $)
        : (($ = d($, B.children || [])), ($.return = F), $);
    }
    function J(F, $, B, oe, he) {
      return $ === null || $.tag !== 7
        ? (($ = Kr(B, F.mode, oe, he)), ($.return = F), $)
        : (($ = d($, B)), ($.return = F), $);
    }
    function te(F, $, B) {
      if ((typeof $ == 'string' && $ !== '') || typeof $ == 'number')
        return ($ = uc('' + $, F.mode, B)), ($.return = F), $;
      if (typeof $ == 'object' && $ !== null) {
        switch ($.$$typeof) {
          case O:
            return (
              (B = xa($.type, $.key, $.props, null, F.mode, B)),
              (B.ref = bi(F, null, $)),
              (B.return = F),
              B
            );
          case _:
            return ($ = cc($, F.mode, B)), ($.return = F), $;
          case ee:
            var oe = $._init;
            return te(F, oe($._payload), B);
        }
        if (ft($) || K($))
          return ($ = Kr($, F.mode, B, null)), ($.return = F), $;
        Qs(F, $);
      }
      return null;
    }
    function X(F, $, B, oe) {
      var he = $ !== null ? $.key : null;
      if ((typeof B == 'string' && B !== '') || typeof B == 'number')
        return he !== null ? null : T(F, $, '' + B, oe);
      if (typeof B == 'object' && B !== null) {
        switch (B.$$typeof) {
          case O:
            return B.key === he ? A(F, $, B, oe) : null;
          case _:
            return B.key === he ? D(F, $, B, oe) : null;
          case ee:
            return (he = B._init), X(F, $, he(B._payload), oe);
        }
        if (ft(B) || K(B)) return he !== null ? null : J(F, $, B, oe, null);
        Qs(F, B);
      }
      return null;
    }
    function se(F, $, B, oe, he) {
      if ((typeof oe == 'string' && oe !== '') || typeof oe == 'number')
        return (F = F.get(B) || null), T($, F, '' + oe, he);
      if (typeof oe == 'object' && oe !== null) {
        switch (oe.$$typeof) {
          case O:
            return (
              (F = F.get(oe.key === null ? B : oe.key) || null), A($, F, oe, he)
            );
          case _:
            return (
              (F = F.get(oe.key === null ? B : oe.key) || null), D($, F, oe, he)
            );
          case ee:
            var ye = oe._init;
            return se(F, $, B, ye(oe._payload), he);
        }
        if (ft(oe) || K(oe))
          return (F = F.get(B) || null), J($, F, oe, he, null);
        Qs($, oe);
      }
      return null;
    }
    function ce(F, $, B, oe) {
      for (
        var he = null, ye = null, ve = $, Ee = ($ = 0), wt = null;
        ve !== null && Ee < B.length;
        Ee++
      ) {
        ve.index > Ee ? ((wt = ve), (ve = null)) : (wt = ve.sibling);
        var $e = X(F, ve, B[Ee], oe);
        if ($e === null) {
          ve === null && (ve = wt);
          break;
        }
        t && ve && $e.alternate === null && n(F, ve),
          ($ = p($e, $, Ee)),
          ye === null ? (he = $e) : (ye.sibling = $e),
          (ye = $e),
          (ve = wt);
      }
      if (Ee === B.length) return i(F, ve), Ze && Fr(F, Ee), he;
      if (ve === null) {
        for (; Ee < B.length; Ee++)
          (ve = te(F, B[Ee], oe)),
            ve !== null &&
              (($ = p(ve, $, Ee)),
              ye === null ? (he = ve) : (ye.sibling = ve),
              (ye = ve));
        return Ze && Fr(F, Ee), he;
      }
      for (ve = l(F, ve); Ee < B.length; Ee++)
        (wt = se(ve, F, Ee, B[Ee], oe)),
          wt !== null &&
            (t &&
              wt.alternate !== null &&
              ve.delete(wt.key === null ? Ee : wt.key),
            ($ = p(wt, $, Ee)),
            ye === null ? (he = wt) : (ye.sibling = wt),
            (ye = wt));
      return (
        t &&
          ve.forEach(function (Ir) {
            return n(F, Ir);
          }),
        Ze && Fr(F, Ee),
        he
      );
    }
    function fe(F, $, B, oe) {
      var he = K(B);
      if (typeof he != 'function') throw Error(o(150));
      if (((B = he.call(B)), B == null)) throw Error(o(151));
      for (
        var ye = (he = null), ve = $, Ee = ($ = 0), wt = null, $e = B.next();
        ve !== null && !$e.done;
        Ee++, $e = B.next()
      ) {
        ve.index > Ee ? ((wt = ve), (ve = null)) : (wt = ve.sibling);
        var Ir = X(F, ve, $e.value, oe);
        if (Ir === null) {
          ve === null && (ve = wt);
          break;
        }
        t && ve && Ir.alternate === null && n(F, ve),
          ($ = p(Ir, $, Ee)),
          ye === null ? (he = Ir) : (ye.sibling = Ir),
          (ye = Ir),
          (ve = wt);
      }
      if ($e.done) return i(F, ve), Ze && Fr(F, Ee), he;
      if (ve === null) {
        for (; !$e.done; Ee++, $e = B.next())
          ($e = te(F, $e.value, oe)),
            $e !== null &&
              (($ = p($e, $, Ee)),
              ye === null ? (he = $e) : (ye.sibling = $e),
              (ye = $e));
        return Ze && Fr(F, Ee), he;
      }
      for (ve = l(F, ve); !$e.done; Ee++, $e = B.next())
        ($e = se(ve, F, Ee, $e.value, oe)),
          $e !== null &&
            (t &&
              $e.alternate !== null &&
              ve.delete($e.key === null ? Ee : $e.key),
            ($ = p($e, $, Ee)),
            ye === null ? (he = $e) : (ye.sibling = $e),
            (ye = $e));
      return (
        t &&
          ve.forEach(function (Yv) {
            return n(F, Yv);
          }),
        Ze && Fr(F, Ee),
        he
      );
    }
    function ct(F, $, B, oe) {
      if (
        (typeof B == 'object' &&
          B !== null &&
          B.type === z &&
          B.key === null &&
          (B = B.props.children),
        typeof B == 'object' && B !== null)
      ) {
        switch (B.$$typeof) {
          case O:
            e: {
              for (var he = B.key, ye = $; ye !== null; ) {
                if (ye.key === he) {
                  if (((he = B.type), he === z)) {
                    if (ye.tag === 7) {
                      i(F, ye.sibling),
                        ($ = d(ye, B.props.children)),
                        ($.return = F),
                        (F = $);
                      break e;
                    }
                  } else if (
                    ye.elementType === he ||
                    (typeof he == 'object' &&
                      he !== null &&
                      he.$$typeof === ee &&
                      pp(he) === ye.type)
                  ) {
                    i(F, ye.sibling),
                      ($ = d(ye, B.props)),
                      ($.ref = bi(F, ye, B)),
                      ($.return = F),
                      (F = $);
                    break e;
                  }
                  i(F, ye);
                  break;
                } else n(F, ye);
                ye = ye.sibling;
              }
              B.type === z
                ? (($ = Kr(B.props.children, F.mode, oe, B.key)),
                  ($.return = F),
                  (F = $))
                : ((oe = xa(B.type, B.key, B.props, null, F.mode, oe)),
                  (oe.ref = bi(F, $, B)),
                  (oe.return = F),
                  (F = oe));
            }
            return y(F);
          case _:
            e: {
              for (ye = B.key; $ !== null; ) {
                if ($.key === ye)
                  if (
                    $.tag === 4 &&
                    $.stateNode.containerInfo === B.containerInfo &&
                    $.stateNode.implementation === B.implementation
                  ) {
                    i(F, $.sibling),
                      ($ = d($, B.children || [])),
                      ($.return = F),
                      (F = $);
                    break e;
                  } else {
                    i(F, $);
                    break;
                  }
                else n(F, $);
                $ = $.sibling;
              }
              ($ = cc(B, F.mode, oe)), ($.return = F), (F = $);
            }
            return y(F);
          case ee:
            return (ye = B._init), ct(F, $, ye(B._payload), oe);
        }
        if (ft(B)) return ce(F, $, B, oe);
        if (K(B)) return fe(F, $, B, oe);
        Qs(F, B);
      }
      return (typeof B == 'string' && B !== '') || typeof B == 'number'
        ? ((B = '' + B),
          $ !== null && $.tag === 6
            ? (i(F, $.sibling), ($ = d($, B)), ($.return = F), (F = $))
            : (i(F, $), ($ = uc(B, F.mode, oe)), ($.return = F), (F = $)),
          y(F))
        : i(F, $);
    }
    return ct;
  }
  var wo = hp(!0),
    mp = hp(!1),
    Xs = vr(null),
    Ys = null,
    Co = null,
    xu = null;
  function Su() {
    xu = Co = Ys = null;
  }
  function wu(t) {
    var n = Xs.current;
    Je(Xs), (t._currentValue = n);
  }
  function Cu(t, n, i) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), l !== null && (l.childLanes |= n))
          : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n),
        t === i)
      )
        break;
      t = t.return;
    }
  }
  function bo(t, n) {
    (Ys = t),
      (xu = Co = null),
      (t = t.dependencies),
      t !== null &&
        t.firstContext !== null &&
        (t.lanes & n && (jt = !0), (t.firstContext = null));
  }
  function rn(t) {
    var n = t._currentValue;
    if (xu !== t)
      if (((t = { context: t, memoizedValue: n, next: null }), Co === null)) {
        if (Ys === null) throw Error(o(308));
        (Co = t), (Ys.dependencies = { lanes: 0, firstContext: t });
      } else Co = Co.next = t;
    return n;
  }
  var Br = null;
  function bu(t) {
    Br === null ? (Br = [t]) : Br.push(t);
  }
  function gp(t, n, i, l) {
    var d = n.interleaved;
    return (
      d === null ? ((i.next = i), bu(n)) : ((i.next = d.next), (d.next = i)),
      (n.interleaved = i),
      Zn(t, l)
    );
  }
  function Zn(t, n) {
    t.lanes |= n;
    var i = t.alternate;
    for (i !== null && (i.lanes |= n), i = t, t = t.return; t !== null; )
      (t.childLanes |= n),
        (i = t.alternate),
        i !== null && (i.childLanes |= n),
        (i = t),
        (t = t.return);
    return i.tag === 3 ? i.stateNode : null;
  }
  var wr = !1;
  function Eu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function yp(t, n) {
    (t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          effects: t.effects,
        });
  }
  function er(t, n) {
    return {
      eventTime: t,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Cr(t, n, i) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), Ne & 2)) {
      var d = l.pending;
      return (
        d === null ? (n.next = n) : ((n.next = d.next), (d.next = n)),
        (l.pending = n),
        Zn(t, i)
      );
    }
    return (
      (d = l.interleaved),
      d === null ? ((n.next = n), bu(l)) : ((n.next = d.next), (d.next = n)),
      (l.interleaved = n),
      Zn(t, i)
    );
  }
  function Js(t, n, i) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (i & 4194240) !== 0))
    ) {
      var l = n.lanes;
      (l &= t.pendingLanes), (i |= l), (n.lanes = i), Fl(t, i);
    }
  }
  function vp(t, n) {
    var i = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), i === l)) {
      var d = null,
        p = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var y = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          p === null ? (d = p = y) : (p = p.next = y), (i = i.next);
        } while (i !== null);
        p === null ? (d = p = n) : (p = p.next = n);
      } else d = p = n;
      (i = {
        baseState: l.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: p,
        shared: l.shared,
        effects: l.effects,
      }),
        (t.updateQueue = i);
      return;
    }
    (t = i.lastBaseUpdate),
      t === null ? (i.firstBaseUpdate = n) : (t.next = n),
      (i.lastBaseUpdate = n);
  }
  function Zs(t, n, i, l) {
    var d = t.updateQueue;
    wr = !1;
    var p = d.firstBaseUpdate,
      y = d.lastBaseUpdate,
      T = d.shared.pending;
    if (T !== null) {
      d.shared.pending = null;
      var A = T,
        D = A.next;
      (A.next = null), y === null ? (p = D) : (y.next = D), (y = A);
      var J = t.alternate;
      J !== null &&
        ((J = J.updateQueue),
        (T = J.lastBaseUpdate),
        T !== y &&
          (T === null ? (J.firstBaseUpdate = D) : (T.next = D),
          (J.lastBaseUpdate = A)));
    }
    if (p !== null) {
      var te = d.baseState;
      (y = 0), (J = D = A = null), (T = p);
      do {
        var X = T.lane,
          se = T.eventTime;
        if ((l & X) === X) {
          J !== null &&
            (J = J.next =
              {
                eventTime: se,
                lane: 0,
                tag: T.tag,
                payload: T.payload,
                callback: T.callback,
                next: null,
              });
          e: {
            var ce = t,
              fe = T;
            switch (((X = n), (se = i), fe.tag)) {
              case 1:
                if (((ce = fe.payload), typeof ce == 'function')) {
                  te = ce.call(se, te, X);
                  break e;
                }
                te = ce;
                break e;
              case 3:
                ce.flags = (ce.flags & -65537) | 128;
              case 0:
                if (
                  ((ce = fe.payload),
                  (X = typeof ce == 'function' ? ce.call(se, te, X) : ce),
                  X == null)
                )
                  break e;
                te = re({}, te, X);
                break e;
              case 2:
                wr = !0;
            }
          }
          T.callback !== null &&
            T.lane !== 0 &&
            ((t.flags |= 64),
            (X = d.effects),
            X === null ? (d.effects = [T]) : X.push(T));
        } else
          (se = {
            eventTime: se,
            lane: X,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null,
          }),
            J === null ? ((D = J = se), (A = te)) : (J = J.next = se),
            (y |= X);
        if (((T = T.next), T === null)) {
          if (((T = d.shared.pending), T === null)) break;
          (X = T),
            (T = X.next),
            (X.next = null),
            (d.lastBaseUpdate = X),
            (d.shared.pending = null);
        }
      } while (!0);
      if (
        (J === null && (A = te),
        (d.baseState = A),
        (d.firstBaseUpdate = D),
        (d.lastBaseUpdate = J),
        (n = d.shared.interleaved),
        n !== null)
      ) {
        d = n;
        do (y |= d.lane), (d = d.next);
        while (d !== n);
      } else p === null && (d.shared.lanes = 0);
      (Ur |= y), (t.lanes = y), (t.memoizedState = te);
    }
  }
  function xp(t, n, i) {
    if (((t = n.effects), (n.effects = null), t !== null))
      for (n = 0; n < t.length; n++) {
        var l = t[n],
          d = l.callback;
        if (d !== null) {
          if (((l.callback = null), (l = i), typeof d != 'function'))
            throw Error(o(191, d));
          d.call(l);
        }
      }
  }
  var Ei = {},
    Ln = vr(Ei),
    ki = vr(Ei),
    Ri = vr(Ei);
  function Dr(t) {
    if (t === Ei) throw Error(o(174));
    return t;
  }
  function ku(t, n) {
    switch ((Qe(Ri, n), Qe(ki, t), Qe(Ln, Ei), (t = n.nodeType), t)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : qn(null, '');
        break;
      default:
        (t = t === 8 ? n.parentNode : n),
          (n = t.namespaceURI || null),
          (t = t.tagName),
          (n = qn(n, t));
    }
    Je(Ln), Qe(Ln, n);
  }
  function Eo() {
    Je(Ln), Je(ki), Je(Ri);
  }
  function Sp(t) {
    Dr(Ri.current);
    var n = Dr(Ln.current),
      i = qn(n, t.type);
    n !== i && (Qe(ki, t), Qe(Ln, i));
  }
  function Ru(t) {
    ki.current === t && (Je(Ln), Je(ki));
  }
  var nt = vr(0);
  function ea(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === '$?' || i.data === '$!')
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Pu = [];
  function Tu() {
    for (var t = 0; t < Pu.length; t++)
      Pu[t]._workInProgressVersionPrimary = null;
    Pu.length = 0;
  }
  var ta = I.ReactCurrentDispatcher,
    Iu = I.ReactCurrentBatchConfig,
    jr = 0,
    rt = null,
    yt = null,
    xt = null,
    na = !1,
    Pi = !1,
    Ti = 0,
    Sv = 0;
  function It() {
    throw Error(o(321));
  }
  function Ou(t, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < t.length; i++)
      if (!gn(t[i], n[i])) return !1;
    return !0;
  }
  function Nu(t, n, i, l, d, p) {
    if (
      ((jr = p),
      (rt = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (ta.current = t === null || t.memoizedState === null ? Ev : kv),
      (t = i(l, d)),
      Pi)
    ) {
      p = 0;
      do {
        if (((Pi = !1), (Ti = 0), 25 <= p)) throw Error(o(301));
        (p += 1),
          (xt = yt = null),
          (n.updateQueue = null),
          (ta.current = Rv),
          (t = i(l, d));
      } while (Pi);
    }
    if (
      ((ta.current = ia),
      (n = yt !== null && yt.next !== null),
      (jr = 0),
      (xt = yt = rt = null),
      (na = !1),
      n)
    )
      throw Error(o(300));
    return t;
  }
  function Au() {
    var t = Ti !== 0;
    return (Ti = 0), t;
  }
  function $n() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return xt === null ? (rt.memoizedState = xt = t) : (xt = xt.next = t), xt;
  }
  function on() {
    if (yt === null) {
      var t = rt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = yt.next;
    var n = xt === null ? rt.memoizedState : xt.next;
    if (n !== null) (xt = n), (yt = t);
    else {
      if (t === null) throw Error(o(310));
      (yt = t),
        (t = {
          memoizedState: yt.memoizedState,
          baseState: yt.baseState,
          baseQueue: yt.baseQueue,
          queue: yt.queue,
          next: null,
        }),
        xt === null ? (rt.memoizedState = xt = t) : (xt = xt.next = t);
    }
    return xt;
  }
  function Ii(t, n) {
    return typeof n == 'function' ? n(t) : n;
  }
  function Lu(t) {
    var n = on(),
      i = n.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = t;
    var l = yt,
      d = l.baseQueue,
      p = i.pending;
    if (p !== null) {
      if (d !== null) {
        var y = d.next;
        (d.next = p.next), (p.next = y);
      }
      (l.baseQueue = d = p), (i.pending = null);
    }
    if (d !== null) {
      (p = d.next), (l = l.baseState);
      var T = (y = null),
        A = null,
        D = p;
      do {
        var J = D.lane;
        if ((jr & J) === J)
          A !== null &&
            (A = A.next =
              {
                lane: 0,
                action: D.action,
                hasEagerState: D.hasEagerState,
                eagerState: D.eagerState,
                next: null,
              }),
            (l = D.hasEagerState ? D.eagerState : t(l, D.action));
        else {
          var te = {
            lane: J,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          };
          A === null ? ((T = A = te), (y = l)) : (A = A.next = te),
            (rt.lanes |= J),
            (Ur |= J);
        }
        D = D.next;
      } while (D !== null && D !== p);
      A === null ? (y = l) : (A.next = T),
        gn(l, n.memoizedState) || (jt = !0),
        (n.memoizedState = l),
        (n.baseState = y),
        (n.baseQueue = A),
        (i.lastRenderedState = l);
    }
    if (((t = i.interleaved), t !== null)) {
      d = t;
      do (p = d.lane), (rt.lanes |= p), (Ur |= p), (d = d.next);
      while (d !== t);
    } else d === null && (i.lanes = 0);
    return [n.memoizedState, i.dispatch];
  }
  function $u(t) {
    var n = on(),
      i = n.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = t;
    var l = i.dispatch,
      d = i.pending,
      p = n.memoizedState;
    if (d !== null) {
      i.pending = null;
      var y = (d = d.next);
      do (p = t(p, y.action)), (y = y.next);
      while (y !== d);
      gn(p, n.memoizedState) || (jt = !0),
        (n.memoizedState = p),
        n.baseQueue === null && (n.baseState = p),
        (i.lastRenderedState = p);
    }
    return [p, l];
  }
  function wp() {}
  function Cp(t, n) {
    var i = rt,
      l = on(),
      d = n(),
      p = !gn(l.memoizedState, d);
    if (
      (p && ((l.memoizedState = d), (jt = !0)),
      (l = l.queue),
      Mu(kp.bind(null, i, l, t), [t]),
      l.getSnapshot !== n || p || (xt !== null && xt.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Oi(9, Ep.bind(null, i, l, d, n), void 0, null),
        St === null)
      )
        throw Error(o(349));
      jr & 30 || bp(i, n, d);
    }
    return d;
  }
  function bp(t, n, i) {
    (t.flags |= 16384),
      (t = { getSnapshot: n, value: i }),
      (n = rt.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (rt.updateQueue = n),
          (n.stores = [t]))
        : ((i = n.stores), i === null ? (n.stores = [t]) : i.push(t));
  }
  function Ep(t, n, i, l) {
    (n.value = i), (n.getSnapshot = l), Rp(n) && Pp(t);
  }
  function kp(t, n, i) {
    return i(function () {
      Rp(n) && Pp(t);
    });
  }
  function Rp(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var i = n();
      return !gn(t, i);
    } catch {
      return !0;
    }
  }
  function Pp(t) {
    var n = Zn(t, 1);
    n !== null && wn(n, t, 1, -1);
  }
  function Tp(t) {
    var n = $n();
    return (
      typeof t == 'function' && (t = t()),
      (n.memoizedState = n.baseState = t),
      (t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ii,
        lastRenderedState: t,
      }),
      (n.queue = t),
      (t = t.dispatch = bv.bind(null, rt, t)),
      [n.memoizedState, t]
    );
  }
  function Oi(t, n, i, l) {
    return (
      (t = { tag: t, create: n, destroy: i, deps: l, next: null }),
      (n = rt.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (rt.updateQueue = n),
          (n.lastEffect = t.next = t))
        : ((i = n.lastEffect),
          i === null
            ? (n.lastEffect = t.next = t)
            : ((l = i.next), (i.next = t), (t.next = l), (n.lastEffect = t))),
      t
    );
  }
  function Ip() {
    return on().memoizedState;
  }
  function ra(t, n, i, l) {
    var d = $n();
    (rt.flags |= t),
      (d.memoizedState = Oi(1 | n, i, void 0, l === void 0 ? null : l));
  }
  function oa(t, n, i, l) {
    var d = on();
    l = l === void 0 ? null : l;
    var p = void 0;
    if (yt !== null) {
      var y = yt.memoizedState;
      if (((p = y.destroy), l !== null && Ou(l, y.deps))) {
        d.memoizedState = Oi(n, i, p, l);
        return;
      }
    }
    (rt.flags |= t), (d.memoizedState = Oi(1 | n, i, p, l));
  }
  function Op(t, n) {
    return ra(8390656, 8, t, n);
  }
  function Mu(t, n) {
    return oa(2048, 8, t, n);
  }
  function Np(t, n) {
    return oa(4, 2, t, n);
  }
  function Ap(t, n) {
    return oa(4, 4, t, n);
  }
  function Lp(t, n) {
    if (typeof n == 'function')
      return (
        (t = t()),
        n(t),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null;
        }
      );
  }
  function $p(t, n, i) {
    return (
      (i = i != null ? i.concat([t]) : null), oa(4, 4, Lp.bind(null, n, t), i)
    );
  }
  function _u() {}
  function Mp(t, n) {
    var i = on();
    n = n === void 0 ? null : n;
    var l = i.memoizedState;
    return l !== null && n !== null && Ou(n, l[1])
      ? l[0]
      : ((i.memoizedState = [t, n]), t);
  }
  function _p(t, n) {
    var i = on();
    n = n === void 0 ? null : n;
    var l = i.memoizedState;
    return l !== null && n !== null && Ou(n, l[1])
      ? l[0]
      : ((t = t()), (i.memoizedState = [t, n]), t);
  }
  function zp(t, n, i) {
    return jr & 21
      ? (gn(i, n) ||
          ((i = pf()), (rt.lanes |= i), (Ur |= i), (t.baseState = !0)),
        n)
      : (t.baseState && ((t.baseState = !1), (jt = !0)), (t.memoizedState = i));
  }
  function wv(t, n) {
    var i = We;
    (We = i !== 0 && 4 > i ? i : 4), t(!0);
    var l = Iu.transition;
    Iu.transition = {};
    try {
      t(!1), n();
    } finally {
      (We = i), (Iu.transition = l);
    }
  }
  function Fp() {
    return on().memoizedState;
  }
  function Cv(t, n, i) {
    var l = Rr(t);
    if (
      ((i = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Bp(t))
    )
      Dp(n, i);
    else if (((i = gp(t, n, i, l)), i !== null)) {
      var d = _t();
      wn(i, t, l, d), jp(i, n, l);
    }
  }
  function bv(t, n, i) {
    var l = Rr(t),
      d = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Bp(t)) Dp(n, d);
    else {
      var p = t.alternate;
      if (
        t.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = n.lastRenderedReducer), p !== null)
      )
        try {
          var y = n.lastRenderedState,
            T = p(y, i);
          if (((d.hasEagerState = !0), (d.eagerState = T), gn(T, y))) {
            var A = n.interleaved;
            A === null
              ? ((d.next = d), bu(n))
              : ((d.next = A.next), (A.next = d)),
              (n.interleaved = d);
            return;
          }
        } catch {
        } finally {
        }
      (i = gp(t, n, d, l)),
        i !== null && ((d = _t()), wn(i, t, l, d), jp(i, n, l));
    }
  }
  function Bp(t) {
    var n = t.alternate;
    return t === rt || (n !== null && n === rt);
  }
  function Dp(t, n) {
    Pi = na = !0;
    var i = t.pending;
    i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
      (t.pending = n);
  }
  function jp(t, n, i) {
    if (i & 4194240) {
      var l = n.lanes;
      (l &= t.pendingLanes), (i |= l), (n.lanes = i), Fl(t, i);
    }
  }
  var ia = {
      readContext: rn,
      useCallback: It,
      useContext: It,
      useEffect: It,
      useImperativeHandle: It,
      useInsertionEffect: It,
      useLayoutEffect: It,
      useMemo: It,
      useReducer: It,
      useRef: It,
      useState: It,
      useDebugValue: It,
      useDeferredValue: It,
      useTransition: It,
      useMutableSource: It,
      useSyncExternalStore: It,
      useId: It,
      unstable_isNewReconciler: !1,
    },
    Ev = {
      readContext: rn,
      useCallback: function (t, n) {
        return ($n().memoizedState = [t, n === void 0 ? null : n]), t;
      },
      useContext: rn,
      useEffect: Op,
      useImperativeHandle: function (t, n, i) {
        return (
          (i = i != null ? i.concat([t]) : null),
          ra(4194308, 4, Lp.bind(null, n, t), i)
        );
      },
      useLayoutEffect: function (t, n) {
        return ra(4194308, 4, t, n);
      },
      useInsertionEffect: function (t, n) {
        return ra(4, 2, t, n);
      },
      useMemo: function (t, n) {
        var i = $n();
        return (
          (n = n === void 0 ? null : n),
          (t = t()),
          (i.memoizedState = [t, n]),
          t
        );
      },
      useReducer: function (t, n, i) {
        var l = $n();
        return (
          (n = i !== void 0 ? i(n) : n),
          (l.memoizedState = l.baseState = n),
          (t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (l.queue = t),
          (t = t.dispatch = Cv.bind(null, rt, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var n = $n();
        return (t = { current: t }), (n.memoizedState = t);
      },
      useState: Tp,
      useDebugValue: _u,
      useDeferredValue: function (t) {
        return ($n().memoizedState = t);
      },
      useTransition: function () {
        var t = Tp(!1),
          n = t[0];
        return (t = wv.bind(null, t[1])), ($n().memoizedState = t), [n, t];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (t, n, i) {
        var l = rt,
          d = $n();
        if (Ze) {
          if (i === void 0) throw Error(o(407));
          i = i();
        } else {
          if (((i = n()), St === null)) throw Error(o(349));
          jr & 30 || bp(l, n, i);
        }
        d.memoizedState = i;
        var p = { value: i, getSnapshot: n };
        return (
          (d.queue = p),
          Op(kp.bind(null, l, p, t), [t]),
          (l.flags |= 2048),
          Oi(9, Ep.bind(null, l, p, i, n), void 0, null),
          i
        );
      },
      useId: function () {
        var t = $n(),
          n = St.identifierPrefix;
        if (Ze) {
          var i = Jn,
            l = Yn;
          (i = (l & ~(1 << (32 - mn(l) - 1))).toString(32) + i),
            (n = ':' + n + 'R' + i),
            (i = Ti++),
            0 < i && (n += 'H' + i.toString(32)),
            (n += ':');
        } else (i = Sv++), (n = ':' + n + 'r' + i.toString(32) + ':');
        return (t.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    kv = {
      readContext: rn,
      useCallback: Mp,
      useContext: rn,
      useEffect: Mu,
      useImperativeHandle: $p,
      useInsertionEffect: Np,
      useLayoutEffect: Ap,
      useMemo: _p,
      useReducer: Lu,
      useRef: Ip,
      useState: function () {
        return Lu(Ii);
      },
      useDebugValue: _u,
      useDeferredValue: function (t) {
        var n = on();
        return zp(n, yt.memoizedState, t);
      },
      useTransition: function () {
        var t = Lu(Ii)[0],
          n = on().memoizedState;
        return [t, n];
      },
      useMutableSource: wp,
      useSyncExternalStore: Cp,
      useId: Fp,
      unstable_isNewReconciler: !1,
    },
    Rv = {
      readContext: rn,
      useCallback: Mp,
      useContext: rn,
      useEffect: Mu,
      useImperativeHandle: $p,
      useInsertionEffect: Np,
      useLayoutEffect: Ap,
      useMemo: _p,
      useReducer: $u,
      useRef: Ip,
      useState: function () {
        return $u(Ii);
      },
      useDebugValue: _u,
      useDeferredValue: function (t) {
        var n = on();
        return yt === null ? (n.memoizedState = t) : zp(n, yt.memoizedState, t);
      },
      useTransition: function () {
        var t = $u(Ii)[0],
          n = on().memoizedState;
        return [t, n];
      },
      useMutableSource: wp,
      useSyncExternalStore: Cp,
      useId: Fp,
      unstable_isNewReconciler: !1,
    };
  function vn(t, n) {
    if (t && t.defaultProps) {
      (n = re({}, n)), (t = t.defaultProps);
      for (var i in t) n[i] === void 0 && (n[i] = t[i]);
      return n;
    }
    return n;
  }
  function zu(t, n, i, l) {
    (n = t.memoizedState),
      (i = i(l, n)),
      (i = i == null ? n : re({}, n, i)),
      (t.memoizedState = i),
      t.lanes === 0 && (t.updateQueue.baseState = i);
  }
  var sa = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? $r(t) === t : !1;
    },
    enqueueSetState: function (t, n, i) {
      t = t._reactInternals;
      var l = _t(),
        d = Rr(t),
        p = er(l, d);
      (p.payload = n),
        i != null && (p.callback = i),
        (n = Cr(t, p, d)),
        n !== null && (wn(n, t, d, l), Js(n, t, d));
    },
    enqueueReplaceState: function (t, n, i) {
      t = t._reactInternals;
      var l = _t(),
        d = Rr(t),
        p = er(l, d);
      (p.tag = 1),
        (p.payload = n),
        i != null && (p.callback = i),
        (n = Cr(t, p, d)),
        n !== null && (wn(n, t, d, l), Js(n, t, d));
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var i = _t(),
        l = Rr(t),
        d = er(i, l);
      (d.tag = 2),
        n != null && (d.callback = n),
        (n = Cr(t, d, l)),
        n !== null && (wn(n, t, l, i), Js(n, t, l));
    },
  };
  function Up(t, n, i, l, d, p, y) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(l, p, y)
        : n.prototype && n.prototype.isPureReactComponent
        ? !gi(i, l) || !gi(d, p)
        : !0
    );
  }
  function Wp(t, n, i) {
    var l = !1,
      d = xr,
      p = n.contextType;
    return (
      typeof p == 'object' && p !== null
        ? (p = rn(p))
        : ((d = Dt(n) ? _r : Tt.current),
          (l = n.contextTypes),
          (p = (l = l != null) ? yo(t, d) : xr)),
      (n = new n(i, p)),
      (t.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = sa),
      (t.stateNode = n),
      (n._reactInternals = t),
      l &&
        ((t = t.stateNode),
        (t.__reactInternalMemoizedUnmaskedChildContext = d),
        (t.__reactInternalMemoizedMaskedChildContext = p)),
      n
    );
  }
  function Hp(t, n, i, l) {
    (t = n.state),
      typeof n.componentWillReceiveProps == 'function' &&
        n.componentWillReceiveProps(i, l),
      typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
        n.UNSAFE_componentWillReceiveProps(i, l),
      n.state !== t && sa.enqueueReplaceState(n, n.state, null);
  }
  function Fu(t, n, i, l) {
    var d = t.stateNode;
    (d.props = i), (d.state = t.memoizedState), (d.refs = {}), Eu(t);
    var p = n.contextType;
    typeof p == 'object' && p !== null
      ? (d.context = rn(p))
      : ((p = Dt(n) ? _r : Tt.current), (d.context = yo(t, p))),
      (d.state = t.memoizedState),
      (p = n.getDerivedStateFromProps),
      typeof p == 'function' && (zu(t, n, p, i), (d.state = t.memoizedState)),
      typeof n.getDerivedStateFromProps == 'function' ||
        typeof d.getSnapshotBeforeUpdate == 'function' ||
        (typeof d.UNSAFE_componentWillMount != 'function' &&
          typeof d.componentWillMount != 'function') ||
        ((n = d.state),
        typeof d.componentWillMount == 'function' && d.componentWillMount(),
        typeof d.UNSAFE_componentWillMount == 'function' &&
          d.UNSAFE_componentWillMount(),
        n !== d.state && sa.enqueueReplaceState(d, d.state, null),
        Zs(t, i, d, l),
        (d.state = t.memoizedState)),
      typeof d.componentDidMount == 'function' && (t.flags |= 4194308);
  }
  function ko(t, n) {
    try {
      var i = '',
        l = n;
      do (i += pe(l)), (l = l.return);
      while (l);
      var d = i;
    } catch (p) {
      d =
        `
Error generating stack: ` +
        p.message +
        `
` +
        p.stack;
    }
    return { value: t, source: n, stack: d, digest: null };
  }
  function Bu(t, n, i) {
    return { value: t, source: null, stack: i ?? null, digest: n ?? null };
  }
  function Du(t, n) {
    try {
      console.error(n.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var Pv = typeof WeakMap == 'function' ? WeakMap : Map;
  function Vp(t, n, i) {
    (i = er(-1, i)), (i.tag = 3), (i.payload = { element: null });
    var l = n.value;
    return (
      (i.callback = function () {
        pa || ((pa = !0), (tc = l)), Du(t, n);
      }),
      i
    );
  }
  function Kp(t, n, i) {
    (i = er(-1, i)), (i.tag = 3);
    var l = t.type.getDerivedStateFromError;
    if (typeof l == 'function') {
      var d = n.value;
      (i.payload = function () {
        return l(d);
      }),
        (i.callback = function () {
          Du(t, n);
        });
    }
    var p = t.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == 'function' &&
        (i.callback = function () {
          Du(t, n),
            typeof l != 'function' &&
              (Er === null ? (Er = new Set([this])) : Er.add(this));
          var y = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: y !== null ? y : '',
          });
        }),
      i
    );
  }
  function qp(t, n, i) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new Pv();
      var d = new Set();
      l.set(n, d);
    } else (d = l.get(n)), d === void 0 && ((d = new Set()), l.set(n, d));
    d.has(i) || (d.add(i), (t = jv.bind(null, t, n, i)), n.then(t, t));
  }
  function Gp(t) {
    do {
      var n;
      if (
        ((n = t.tag === 13) &&
          ((n = t.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function Qp(t, n, i, l, d) {
    return t.mode & 1
      ? ((t.flags |= 65536), (t.lanes = d), t)
      : (t === n
          ? (t.flags |= 65536)
          : ((t.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null
                ? (i.tag = 17)
                : ((n = er(-1, 1)), (n.tag = 2), Cr(i, n, 1))),
            (i.lanes |= 1)),
        t);
  }
  var Tv = I.ReactCurrentOwner,
    jt = !1;
  function Mt(t, n, i, l) {
    n.child = t === null ? mp(n, null, i, l) : wo(n, t.child, i, l);
  }
  function Xp(t, n, i, l, d) {
    i = i.render;
    var p = n.ref;
    return (
      bo(n, d),
      (l = Nu(t, n, i, l, p, d)),
      (i = Au()),
      t !== null && !jt
        ? ((n.updateQueue = t.updateQueue),
          (n.flags &= -2053),
          (t.lanes &= ~d),
          tr(t, n, d))
        : (Ze && i && hu(n), (n.flags |= 1), Mt(t, n, l, d), n.child)
    );
  }
  function Yp(t, n, i, l, d) {
    if (t === null) {
      var p = i.type;
      return typeof p == 'function' &&
        !lc(p) &&
        p.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((n.tag = 15), (n.type = p), Jp(t, n, p, l, d))
        : ((t = xa(i.type, null, l, n, n.mode, d)),
          (t.ref = n.ref),
          (t.return = n),
          (n.child = t));
    }
    if (((p = t.child), !(t.lanes & d))) {
      var y = p.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : gi), i(y, l) && t.ref === n.ref)
      )
        return tr(t, n, d);
    }
    return (
      (n.flags |= 1),
      (t = Tr(p, l)),
      (t.ref = n.ref),
      (t.return = n),
      (n.child = t)
    );
  }
  function Jp(t, n, i, l, d) {
    if (t !== null) {
      var p = t.memoizedProps;
      if (gi(p, l) && t.ref === n.ref)
        if (((jt = !1), (n.pendingProps = l = p), (t.lanes & d) !== 0))
          t.flags & 131072 && (jt = !0);
        else return (n.lanes = t.lanes), tr(t, n, d);
    }
    return ju(t, n, i, l, d);
  }
  function Zp(t, n, i) {
    var l = n.pendingProps,
      d = l.children,
      p = t !== null ? t.memoizedState : null;
    if (l.mode === 'hidden')
      if (!(n.mode & 1))
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Qe(Po, Yt),
          (Yt |= i);
      else {
        if (!(i & 1073741824))
          return (
            (t = p !== null ? p.baseLanes | i : i),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: t,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            Qe(Po, Yt),
            (Yt |= t),
            null
          );
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = p !== null ? p.baseLanes : i),
          Qe(Po, Yt),
          (Yt |= l);
      }
    else
      p !== null ? ((l = p.baseLanes | i), (n.memoizedState = null)) : (l = i),
        Qe(Po, Yt),
        (Yt |= l);
    return Mt(t, n, d, i), n.child;
  }
  function eh(t, n) {
    var i = n.ref;
    ((t === null && i !== null) || (t !== null && t.ref !== i)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function ju(t, n, i, l, d) {
    var p = Dt(i) ? _r : Tt.current;
    return (
      (p = yo(n, p)),
      bo(n, d),
      (i = Nu(t, n, i, l, p, d)),
      (l = Au()),
      t !== null && !jt
        ? ((n.updateQueue = t.updateQueue),
          (n.flags &= -2053),
          (t.lanes &= ~d),
          tr(t, n, d))
        : (Ze && l && hu(n), (n.flags |= 1), Mt(t, n, i, d), n.child)
    );
  }
  function th(t, n, i, l, d) {
    if (Dt(i)) {
      var p = !0;
      Hs(n);
    } else p = !1;
    if ((bo(n, d), n.stateNode === null))
      la(t, n), Wp(n, i, l), Fu(n, i, l, d), (l = !0);
    else if (t === null) {
      var y = n.stateNode,
        T = n.memoizedProps;
      y.props = T;
      var A = y.context,
        D = i.contextType;
      typeof D == 'object' && D !== null
        ? (D = rn(D))
        : ((D = Dt(i) ? _r : Tt.current), (D = yo(n, D)));
      var J = i.getDerivedStateFromProps,
        te =
          typeof J == 'function' ||
          typeof y.getSnapshotBeforeUpdate == 'function';
      te ||
        (typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof y.componentWillReceiveProps != 'function') ||
        ((T !== l || A !== D) && Hp(n, y, l, D)),
        (wr = !1);
      var X = n.memoizedState;
      (y.state = X),
        Zs(n, l, y, d),
        (A = n.memoizedState),
        T !== l || X !== A || Bt.current || wr
          ? (typeof J == 'function' && (zu(n, i, J, l), (A = n.memoizedState)),
            (T = wr || Up(n, i, T, l, X, A, D))
              ? (te ||
                  (typeof y.UNSAFE_componentWillMount != 'function' &&
                    typeof y.componentWillMount != 'function') ||
                  (typeof y.componentWillMount == 'function' &&
                    y.componentWillMount(),
                  typeof y.UNSAFE_componentWillMount == 'function' &&
                    y.UNSAFE_componentWillMount()),
                typeof y.componentDidMount == 'function' &&
                  (n.flags |= 4194308))
              : (typeof y.componentDidMount == 'function' &&
                  (n.flags |= 4194308),
                (n.memoizedProps = l),
                (n.memoizedState = A)),
            (y.props = l),
            (y.state = A),
            (y.context = D),
            (l = T))
          : (typeof y.componentDidMount == 'function' && (n.flags |= 4194308),
            (l = !1));
    } else {
      (y = n.stateNode),
        yp(t, n),
        (T = n.memoizedProps),
        (D = n.type === n.elementType ? T : vn(n.type, T)),
        (y.props = D),
        (te = n.pendingProps),
        (X = y.context),
        (A = i.contextType),
        typeof A == 'object' && A !== null
          ? (A = rn(A))
          : ((A = Dt(i) ? _r : Tt.current), (A = yo(n, A)));
      var se = i.getDerivedStateFromProps;
      (J =
        typeof se == 'function' ||
        typeof y.getSnapshotBeforeUpdate == 'function') ||
        (typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof y.componentWillReceiveProps != 'function') ||
        ((T !== te || X !== A) && Hp(n, y, l, A)),
        (wr = !1),
        (X = n.memoizedState),
        (y.state = X),
        Zs(n, l, y, d);
      var ce = n.memoizedState;
      T !== te || X !== ce || Bt.current || wr
        ? (typeof se == 'function' && (zu(n, i, se, l), (ce = n.memoizedState)),
          (D = wr || Up(n, i, D, l, X, ce, A) || !1)
            ? (J ||
                (typeof y.UNSAFE_componentWillUpdate != 'function' &&
                  typeof y.componentWillUpdate != 'function') ||
                (typeof y.componentWillUpdate == 'function' &&
                  y.componentWillUpdate(l, ce, A),
                typeof y.UNSAFE_componentWillUpdate == 'function' &&
                  y.UNSAFE_componentWillUpdate(l, ce, A)),
              typeof y.componentDidUpdate == 'function' && (n.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == 'function' &&
                (n.flags |= 1024))
            : (typeof y.componentDidUpdate != 'function' ||
                (T === t.memoizedProps && X === t.memoizedState) ||
                (n.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != 'function' ||
                (T === t.memoizedProps && X === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = l),
              (n.memoizedState = ce)),
          (y.props = l),
          (y.state = ce),
          (y.context = A),
          (l = D))
        : (typeof y.componentDidUpdate != 'function' ||
            (T === t.memoizedProps && X === t.memoizedState) ||
            (n.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != 'function' ||
            (T === t.memoizedProps && X === t.memoizedState) ||
            (n.flags |= 1024),
          (l = !1));
    }
    return Uu(t, n, i, l, p, d);
  }
  function Uu(t, n, i, l, d, p) {
    eh(t, n);
    var y = (n.flags & 128) !== 0;
    if (!l && !y) return d && sp(n, i, !1), tr(t, n, p);
    (l = n.stateNode), (Tv.current = n);
    var T =
      y && typeof i.getDerivedStateFromError != 'function' ? null : l.render();
    return (
      (n.flags |= 1),
      t !== null && y
        ? ((n.child = wo(n, t.child, null, p)), (n.child = wo(n, null, T, p)))
        : Mt(t, n, T, p),
      (n.memoizedState = l.state),
      d && sp(n, i, !0),
      n.child
    );
  }
  function nh(t) {
    var n = t.stateNode;
    n.pendingContext
      ? op(t, n.pendingContext, n.pendingContext !== n.context)
      : n.context && op(t, n.context, !1),
      ku(t, n.containerInfo);
  }
  function rh(t, n, i, l, d) {
    return So(), vu(d), (n.flags |= 256), Mt(t, n, i, l), n.child;
  }
  var Wu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Hu(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function oh(t, n, i) {
    var l = n.pendingProps,
      d = nt.current,
      p = !1,
      y = (n.flags & 128) !== 0,
      T;
    if (
      ((T = y) ||
        (T = t !== null && t.memoizedState === null ? !1 : (d & 2) !== 0),
      T
        ? ((p = !0), (n.flags &= -129))
        : (t === null || t.memoizedState !== null) && (d |= 1),
      Qe(nt, d & 1),
      t === null)
    )
      return (
        yu(n),
        (t = n.memoizedState),
        t !== null && ((t = t.dehydrated), t !== null)
          ? (n.mode & 1
              ? t.data === '$!'
                ? (n.lanes = 8)
                : (n.lanes = 1073741824)
              : (n.lanes = 1),
            null)
          : ((y = l.children),
            (t = l.fallback),
            p
              ? ((l = n.mode),
                (p = n.child),
                (y = { mode: 'hidden', children: y }),
                !(l & 1) && p !== null
                  ? ((p.childLanes = 0), (p.pendingProps = y))
                  : (p = Sa(y, l, 0, null)),
                (t = Kr(t, l, i, null)),
                (p.return = n),
                (t.return = n),
                (p.sibling = t),
                (n.child = p),
                (n.child.memoizedState = Hu(i)),
                (n.memoizedState = Wu),
                t)
              : Vu(n, y))
      );
    if (((d = t.memoizedState), d !== null && ((T = d.dehydrated), T !== null)))
      return Iv(t, n, y, l, T, d, i);
    if (p) {
      (p = l.fallback), (y = n.mode), (d = t.child), (T = d.sibling);
      var A = { mode: 'hidden', children: l.children };
      return (
        !(y & 1) && n.child !== d
          ? ((l = n.child),
            (l.childLanes = 0),
            (l.pendingProps = A),
            (n.deletions = null))
          : ((l = Tr(d, A)), (l.subtreeFlags = d.subtreeFlags & 14680064)),
        T !== null ? (p = Tr(T, p)) : ((p = Kr(p, y, i, null)), (p.flags |= 2)),
        (p.return = n),
        (l.return = n),
        (l.sibling = p),
        (n.child = l),
        (l = p),
        (p = n.child),
        (y = t.child.memoizedState),
        (y =
          y === null
            ? Hu(i)
            : {
                baseLanes: y.baseLanes | i,
                cachePool: null,
                transitions: y.transitions,
              }),
        (p.memoizedState = y),
        (p.childLanes = t.childLanes & ~i),
        (n.memoizedState = Wu),
        l
      );
    }
    return (
      (p = t.child),
      (t = p.sibling),
      (l = Tr(p, { mode: 'visible', children: l.children })),
      !(n.mode & 1) && (l.lanes = i),
      (l.return = n),
      (l.sibling = null),
      t !== null &&
        ((i = n.deletions),
        i === null ? ((n.deletions = [t]), (n.flags |= 16)) : i.push(t)),
      (n.child = l),
      (n.memoizedState = null),
      l
    );
  }
  function Vu(t, n) {
    return (
      (n = Sa({ mode: 'visible', children: n }, t.mode, 0, null)),
      (n.return = t),
      (t.child = n)
    );
  }
  function aa(t, n, i, l) {
    return (
      l !== null && vu(l),
      wo(n, t.child, null, i),
      (t = Vu(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    );
  }
  function Iv(t, n, i, l, d, p, y) {
    if (i)
      return n.flags & 256
        ? ((n.flags &= -257), (l = Bu(Error(o(422)))), aa(t, n, y, l))
        : n.memoizedState !== null
        ? ((n.child = t.child), (n.flags |= 128), null)
        : ((p = l.fallback),
          (d = n.mode),
          (l = Sa({ mode: 'visible', children: l.children }, d, 0, null)),
          (p = Kr(p, d, y, null)),
          (p.flags |= 2),
          (l.return = n),
          (p.return = n),
          (l.sibling = p),
          (n.child = l),
          n.mode & 1 && wo(n, t.child, null, y),
          (n.child.memoizedState = Hu(y)),
          (n.memoizedState = Wu),
          p);
    if (!(n.mode & 1)) return aa(t, n, y, null);
    if (d.data === '$!') {
      if (((l = d.nextSibling && d.nextSibling.dataset), l)) var T = l.dgst;
      return (
        (l = T), (p = Error(o(419))), (l = Bu(p, l, void 0)), aa(t, n, y, l)
      );
    }
    if (((T = (y & t.childLanes) !== 0), jt || T)) {
      if (((l = St), l !== null)) {
        switch (y & -y) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
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
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        (d = d & (l.suspendedLanes | y) ? 0 : d),
          d !== 0 &&
            d !== p.retryLane &&
            ((p.retryLane = d), Zn(t, d), wn(l, t, d, -1));
      }
      return ac(), (l = Bu(Error(o(421)))), aa(t, n, y, l);
    }
    return d.data === '$?'
      ? ((n.flags |= 128),
        (n.child = t.child),
        (n = Uv.bind(null, t)),
        (d._reactRetry = n),
        null)
      : ((t = p.treeContext),
        (Xt = yr(d.nextSibling)),
        (Qt = n),
        (Ze = !0),
        (yn = null),
        t !== null &&
          ((tn[nn++] = Yn),
          (tn[nn++] = Jn),
          (tn[nn++] = zr),
          (Yn = t.id),
          (Jn = t.overflow),
          (zr = n)),
        (n = Vu(n, l.children)),
        (n.flags |= 4096),
        n);
  }
  function ih(t, n, i) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n), Cu(t.return, n, i);
  }
  function Ku(t, n, i, l, d) {
    var p = t.memoizedState;
    p === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: i,
          tailMode: d,
        })
      : ((p.isBackwards = n),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = l),
        (p.tail = i),
        (p.tailMode = d));
  }
  function sh(t, n, i) {
    var l = n.pendingProps,
      d = l.revealOrder,
      p = l.tail;
    if ((Mt(t, n, l.children, i), (l = nt.current), l & 2))
      (l = (l & 1) | 2), (n.flags |= 128);
    else {
      if (t !== null && t.flags & 128)
        e: for (t = n.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && ih(t, i, n);
          else if (t.tag === 19) ih(t, i, n);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === n) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) break e;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      l &= 1;
    }
    if ((Qe(nt, l), !(n.mode & 1))) n.memoizedState = null;
    else
      switch (d) {
        case 'forwards':
          for (i = n.child, d = null; i !== null; )
            (t = i.alternate),
              t !== null && ea(t) === null && (d = i),
              (i = i.sibling);
          (i = d),
            i === null
              ? ((d = n.child), (n.child = null))
              : ((d = i.sibling), (i.sibling = null)),
            Ku(n, !1, d, i, p);
          break;
        case 'backwards':
          for (i = null, d = n.child, n.child = null; d !== null; ) {
            if (((t = d.alternate), t !== null && ea(t) === null)) {
              n.child = d;
              break;
            }
            (t = d.sibling), (d.sibling = i), (i = d), (d = t);
          }
          Ku(n, !0, i, null, p);
          break;
        case 'together':
          Ku(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function la(t, n) {
    !(n.mode & 1) &&
      t !== null &&
      ((t.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function tr(t, n, i) {
    if (
      (t !== null && (n.dependencies = t.dependencies),
      (Ur |= n.lanes),
      !(i & n.childLanes))
    )
      return null;
    if (t !== null && n.child !== t.child) throw Error(o(153));
    if (n.child !== null) {
      for (
        t = n.child, i = Tr(t, t.pendingProps), n.child = i, i.return = n;
        t.sibling !== null;

      )
        (t = t.sibling),
          (i = i.sibling = Tr(t, t.pendingProps)),
          (i.return = n);
      i.sibling = null;
    }
    return n.child;
  }
  function Ov(t, n, i) {
    switch (n.tag) {
      case 3:
        nh(n), So();
        break;
      case 5:
        Sp(n);
        break;
      case 1:
        Dt(n.type) && Hs(n);
        break;
      case 4:
        ku(n, n.stateNode.containerInfo);
        break;
      case 10:
        var l = n.type._context,
          d = n.memoizedProps.value;
        Qe(Xs, l._currentValue), (l._currentValue = d);
        break;
      case 13:
        if (((l = n.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Qe(nt, nt.current & 1), (n.flags |= 128), null)
            : i & n.child.childLanes
            ? oh(t, n, i)
            : (Qe(nt, nt.current & 1),
              (t = tr(t, n, i)),
              t !== null ? t.sibling : null);
        Qe(nt, nt.current & 1);
        break;
      case 19:
        if (((l = (i & n.childLanes) !== 0), t.flags & 128)) {
          if (l) return sh(t, n, i);
          n.flags |= 128;
        }
        if (
          ((d = n.memoizedState),
          d !== null &&
            ((d.rendering = null), (d.tail = null), (d.lastEffect = null)),
          Qe(nt, nt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Zp(t, n, i);
    }
    return tr(t, n, i);
  }
  var ah, qu, lh, uh;
  (ah = function (t, n) {
    for (var i = n.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) t.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        (i.child.return = i), (i = i.child);
        continue;
      }
      if (i === n) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === n) return;
        i = i.return;
      }
      (i.sibling.return = i.return), (i = i.sibling);
    }
  }),
    (qu = function () {}),
    (lh = function (t, n, i, l) {
      var d = t.memoizedProps;
      if (d !== l) {
        (t = n.stateNode), Dr(Ln.current);
        var p = null;
        switch (i) {
          case 'input':
            (d = Te(t, d)), (l = Te(t, l)), (p = []);
            break;
          case 'select':
            (d = re({}, d, { value: void 0 })),
              (l = re({}, l, { value: void 0 })),
              (p = []);
            break;
          case 'textarea':
            (d = me(t, d)), (l = me(t, l)), (p = []);
            break;
          default:
            typeof d.onClick != 'function' &&
              typeof l.onClick == 'function' &&
              (t.onclick = js);
        }
        Ue(i, l);
        var y;
        i = null;
        for (D in d)
          if (!l.hasOwnProperty(D) && d.hasOwnProperty(D) && d[D] != null)
            if (D === 'style') {
              var T = d[D];
              for (y in T) T.hasOwnProperty(y) && (i || (i = {}), (i[y] = ''));
            } else
              D !== 'dangerouslySetInnerHTML' &&
                D !== 'children' &&
                D !== 'suppressContentEditableWarning' &&
                D !== 'suppressHydrationWarning' &&
                D !== 'autoFocus' &&
                (a.hasOwnProperty(D)
                  ? p || (p = [])
                  : (p = p || []).push(D, null));
        for (D in l) {
          var A = l[D];
          if (
            ((T = d != null ? d[D] : void 0),
            l.hasOwnProperty(D) && A !== T && (A != null || T != null))
          )
            if (D === 'style')
              if (T) {
                for (y in T)
                  !T.hasOwnProperty(y) ||
                    (A && A.hasOwnProperty(y)) ||
                    (i || (i = {}), (i[y] = ''));
                for (y in A)
                  A.hasOwnProperty(y) &&
                    T[y] !== A[y] &&
                    (i || (i = {}), (i[y] = A[y]));
              } else i || (p || (p = []), p.push(D, i)), (i = A);
            else
              D === 'dangerouslySetInnerHTML'
                ? ((A = A ? A.__html : void 0),
                  (T = T ? T.__html : void 0),
                  A != null && T !== A && (p = p || []).push(D, A))
                : D === 'children'
                ? (typeof A != 'string' && typeof A != 'number') ||
                  (p = p || []).push(D, '' + A)
                : D !== 'suppressContentEditableWarning' &&
                  D !== 'suppressHydrationWarning' &&
                  (a.hasOwnProperty(D)
                    ? (A != null && D === 'onScroll' && Ye('scroll', t),
                      p || T === A || (p = []))
                    : (p = p || []).push(D, A));
        }
        i && (p = p || []).push('style', i);
        var D = p;
        (n.updateQueue = D) && (n.flags |= 4);
      }
    }),
    (uh = function (t, n, i, l) {
      i !== l && (n.flags |= 4);
    });
  function Ni(t, n) {
    if (!Ze)
      switch (t.tailMode) {
        case 'hidden':
          n = t.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null ? (t.tail = null) : (i.sibling = null);
          break;
        case 'collapsed':
          i = t.tail;
          for (var l = null; i !== null; )
            i.alternate !== null && (l = i), (i = i.sibling);
          l === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Ot(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      i = 0,
      l = 0;
    if (n)
      for (var d = t.child; d !== null; )
        (i |= d.lanes | d.childLanes),
          (l |= d.subtreeFlags & 14680064),
          (l |= d.flags & 14680064),
          (d.return = t),
          (d = d.sibling);
    else
      for (d = t.child; d !== null; )
        (i |= d.lanes | d.childLanes),
          (l |= d.subtreeFlags),
          (l |= d.flags),
          (d.return = t),
          (d = d.sibling);
    return (t.subtreeFlags |= l), (t.childLanes = i), n;
  }
  function Nv(t, n, i) {
    var l = n.pendingProps;
    switch ((mu(n), n.tag)) {
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
        return Ot(n), null;
      case 1:
        return Dt(n.type) && Ws(), Ot(n), null;
      case 3:
        return (
          (l = n.stateNode),
          Eo(),
          Je(Bt),
          Je(Tt),
          Tu(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Gs(n)
              ? (n.flags |= 4)
              : t === null ||
                (t.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), yn !== null && (oc(yn), (yn = null)))),
          qu(t, n),
          Ot(n),
          null
        );
      case 5:
        Ru(n);
        var d = Dr(Ri.current);
        if (((i = n.type), t !== null && n.stateNode != null))
          lh(t, n, i, l, d),
            t.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
        else {
          if (!l) {
            if (n.stateNode === null) throw Error(o(166));
            return Ot(n), null;
          }
          if (((t = Dr(Ln.current)), Gs(n))) {
            (l = n.stateNode), (i = n.type);
            var p = n.memoizedProps;
            switch (((l[An] = n), (l[wi] = p), (t = (n.mode & 1) !== 0), i)) {
              case 'dialog':
                Ye('cancel', l), Ye('close', l);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Ye('load', l);
                break;
              case 'video':
              case 'audio':
                for (d = 0; d < vi.length; d++) Ye(vi[d], l);
                break;
              case 'source':
                Ye('error', l);
                break;
              case 'img':
              case 'image':
              case 'link':
                Ye('error', l), Ye('load', l);
                break;
              case 'details':
                Ye('toggle', l);
                break;
              case 'input':
                Ve(l, p), Ye('invalid', l);
                break;
              case 'select':
                (l._wrapperState = { wasMultiple: !!p.multiple }),
                  Ye('invalid', l);
                break;
              case 'textarea':
                Vn(l, p), Ye('invalid', l);
            }
            Ue(i, p), (d = null);
            for (var y in p)
              if (p.hasOwnProperty(y)) {
                var T = p[y];
                y === 'children'
                  ? typeof T == 'string'
                    ? l.textContent !== T &&
                      (p.suppressHydrationWarning !== !0 &&
                        Ds(l.textContent, T, t),
                      (d = ['children', T]))
                    : typeof T == 'number' &&
                      l.textContent !== '' + T &&
                      (p.suppressHydrationWarning !== !0 &&
                        Ds(l.textContent, T, t),
                      (d = ['children', '' + T]))
                  : a.hasOwnProperty(y) &&
                    T != null &&
                    y === 'onScroll' &&
                    Ye('scroll', l);
              }
            switch (i) {
              case 'input':
                Le(l), at(l, p, !0);
                break;
              case 'textarea':
                Le(l), Kn(l);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof p.onClick == 'function' && (l.onclick = js);
            }
            (l = d), (n.updateQueue = l), l !== null && (n.flags |= 4);
          } else {
            (y = d.nodeType === 9 ? d : d.ownerDocument),
              t === 'http://www.w3.org/1999/xhtml' && (t = lr(i)),
              t === 'http://www.w3.org/1999/xhtml'
                ? i === 'script'
                  ? ((t = y.createElement('div')),
                    (t.innerHTML = '<script></script>'),
                    (t = t.removeChild(t.firstChild)))
                  : typeof l.is == 'string'
                  ? (t = y.createElement(i, { is: l.is }))
                  : ((t = y.createElement(i)),
                    i === 'select' &&
                      ((y = t),
                      l.multiple
                        ? (y.multiple = !0)
                        : l.size && (y.size = l.size)))
                : (t = y.createElementNS(t, i)),
              (t[An] = n),
              (t[wi] = l),
              ah(t, n, !1, !1),
              (n.stateNode = t);
            e: {
              switch (((y = lt(i, l)), i)) {
                case 'dialog':
                  Ye('cancel', t), Ye('close', t), (d = l);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  Ye('load', t), (d = l);
                  break;
                case 'video':
                case 'audio':
                  for (d = 0; d < vi.length; d++) Ye(vi[d], t);
                  d = l;
                  break;
                case 'source':
                  Ye('error', t), (d = l);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  Ye('error', t), Ye('load', t), (d = l);
                  break;
                case 'details':
                  Ye('toggle', t), (d = l);
                  break;
                case 'input':
                  Ve(t, l), (d = Te(t, l)), Ye('invalid', t);
                  break;
                case 'option':
                  d = l;
                  break;
                case 'select':
                  (t._wrapperState = { wasMultiple: !!l.multiple }),
                    (d = re({}, l, { value: void 0 })),
                    Ye('invalid', t);
                  break;
                case 'textarea':
                  Vn(t, l), (d = me(t, l)), Ye('invalid', t);
                  break;
                default:
                  d = l;
              }
              Ue(i, d), (T = d);
              for (p in T)
                if (T.hasOwnProperty(p)) {
                  var A = T[p];
                  p === 'style'
                    ? ei(t, A)
                    : p === 'dangerouslySetInnerHTML'
                    ? ((A = A ? A.__html : void 0), A != null && Gn(t, A))
                    : p === 'children'
                    ? typeof A == 'string'
                      ? (i !== 'textarea' || A !== '') && qt(t, A)
                      : typeof A == 'number' && qt(t, '' + A)
                    : p !== 'suppressContentEditableWarning' &&
                      p !== 'suppressHydrationWarning' &&
                      p !== 'autoFocus' &&
                      (a.hasOwnProperty(p)
                        ? A != null && p === 'onScroll' && Ye('scroll', t)
                        : A != null && P(t, p, A, y));
                }
              switch (i) {
                case 'input':
                  Le(t), at(t, l, !1);
                  break;
                case 'textarea':
                  Le(t), Kn(t);
                  break;
                case 'option':
                  l.value != null && t.setAttribute('value', '' + Re(l.value));
                  break;
                case 'select':
                  (t.multiple = !!l.multiple),
                    (p = l.value),
                    p != null
                      ? Ge(t, !!l.multiple, p, !1)
                      : l.defaultValue != null &&
                        Ge(t, !!l.multiple, l.defaultValue, !0);
                  break;
                default:
                  typeof d.onClick == 'function' && (t.onclick = js);
              }
              switch (i) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  l = !!l.autoFocus;
                  break e;
                case 'img':
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return Ot(n), null;
      case 6:
        if (t && n.stateNode != null) uh(t, n, t.memoizedProps, l);
        else {
          if (typeof l != 'string' && n.stateNode === null) throw Error(o(166));
          if (((i = Dr(Ri.current)), Dr(Ln.current), Gs(n))) {
            if (
              ((l = n.stateNode),
              (i = n.memoizedProps),
              (l[An] = n),
              (p = l.nodeValue !== i) && ((t = Qt), t !== null))
            )
              switch (t.tag) {
                case 3:
                  Ds(l.nodeValue, i, (t.mode & 1) !== 0);
                  break;
                case 5:
                  t.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ds(l.nodeValue, i, (t.mode & 1) !== 0);
              }
            p && (n.flags |= 4);
          } else
            (l = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(l)),
              (l[An] = n),
              (n.stateNode = l);
        }
        return Ot(n), null;
      case 13:
        if (
          (Je(nt),
          (l = n.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (Ze && Xt !== null && n.mode & 1 && !(n.flags & 128))
            fp(), So(), (n.flags |= 98560), (p = !1);
          else if (((p = Gs(n)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!p) throw Error(o(318));
              if (
                ((p = n.memoizedState),
                (p = p !== null ? p.dehydrated : null),
                !p)
              )
                throw Error(o(317));
              p[An] = n;
            } else
              So(),
                !(n.flags & 128) && (n.memoizedState = null),
                (n.flags |= 4);
            Ot(n), (p = !1);
          } else yn !== null && (oc(yn), (yn = null)), (p = !0);
          if (!p) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128
          ? ((n.lanes = i), n)
          : ((l = l !== null),
            l !== (t !== null && t.memoizedState !== null) &&
              l &&
              ((n.child.flags |= 8192),
              n.mode & 1 &&
                (t === null || nt.current & 1 ? vt === 0 && (vt = 3) : ac())),
            n.updateQueue !== null && (n.flags |= 4),
            Ot(n),
            null);
      case 4:
        return (
          Eo(),
          qu(t, n),
          t === null && xi(n.stateNode.containerInfo),
          Ot(n),
          null
        );
      case 10:
        return wu(n.type._context), Ot(n), null;
      case 17:
        return Dt(n.type) && Ws(), Ot(n), null;
      case 19:
        if ((Je(nt), (p = n.memoizedState), p === null)) return Ot(n), null;
        if (((l = (n.flags & 128) !== 0), (y = p.rendering), y === null))
          if (l) Ni(p, !1);
          else {
            if (vt !== 0 || (t !== null && t.flags & 128))
              for (t = n.child; t !== null; ) {
                if (((y = ea(t)), y !== null)) {
                  for (
                    n.flags |= 128,
                      Ni(p, !1),
                      l = y.updateQueue,
                      l !== null && ((n.updateQueue = l), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      l = i,
                      i = n.child;
                    i !== null;

                  )
                    (p = i),
                      (t = l),
                      (p.flags &= 14680066),
                      (y = p.alternate),
                      y === null
                        ? ((p.childLanes = 0),
                          (p.lanes = t),
                          (p.child = null),
                          (p.subtreeFlags = 0),
                          (p.memoizedProps = null),
                          (p.memoizedState = null),
                          (p.updateQueue = null),
                          (p.dependencies = null),
                          (p.stateNode = null))
                        : ((p.childLanes = y.childLanes),
                          (p.lanes = y.lanes),
                          (p.child = y.child),
                          (p.subtreeFlags = 0),
                          (p.deletions = null),
                          (p.memoizedProps = y.memoizedProps),
                          (p.memoizedState = y.memoizedState),
                          (p.updateQueue = y.updateQueue),
                          (p.type = y.type),
                          (t = y.dependencies),
                          (p.dependencies =
                            t === null
                              ? null
                              : {
                                  lanes: t.lanes,
                                  firstContext: t.firstContext,
                                })),
                      (i = i.sibling);
                  return Qe(nt, (nt.current & 1) | 2), n.child;
                }
                t = t.sibling;
              }
            p.tail !== null &&
              ut() > To &&
              ((n.flags |= 128), (l = !0), Ni(p, !1), (n.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = ea(y)), t !== null)) {
              if (
                ((n.flags |= 128),
                (l = !0),
                (i = t.updateQueue),
                i !== null && ((n.updateQueue = i), (n.flags |= 4)),
                Ni(p, !0),
                p.tail === null &&
                  p.tailMode === 'hidden' &&
                  !y.alternate &&
                  !Ze)
              )
                return Ot(n), null;
            } else
              2 * ut() - p.renderingStartTime > To &&
                i !== 1073741824 &&
                ((n.flags |= 128), (l = !0), Ni(p, !1), (n.lanes = 4194304));
          p.isBackwards
            ? ((y.sibling = n.child), (n.child = y))
            : ((i = p.last),
              i !== null ? (i.sibling = y) : (n.child = y),
              (p.last = y));
        }
        return p.tail !== null
          ? ((n = p.tail),
            (p.rendering = n),
            (p.tail = n.sibling),
            (p.renderingStartTime = ut()),
            (n.sibling = null),
            (i = nt.current),
            Qe(nt, l ? (i & 1) | 2 : i & 1),
            n)
          : (Ot(n), null);
      case 22:
      case 23:
        return (
          sc(),
          (l = n.memoizedState !== null),
          t !== null && (t.memoizedState !== null) !== l && (n.flags |= 8192),
          l && n.mode & 1
            ? Yt & 1073741824 &&
              (Ot(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Ot(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, n.tag));
  }
  function Av(t, n) {
    switch ((mu(n), n.tag)) {
      case 1:
        return (
          Dt(n.type) && Ws(),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 3:
        return (
          Eo(),
          Je(Bt),
          Je(Tt),
          Tu(),
          (t = n.flags),
          t & 65536 && !(t & 128) ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 5:
        return Ru(n), null;
      case 13:
        if (
          (Je(nt), (t = n.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(o(340));
          So();
        }
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 19:
        return Je(nt), null;
      case 4:
        return Eo(), null;
      case 10:
        return wu(n.type._context), null;
      case 22:
      case 23:
        return sc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ua = !1,
    Nt = !1,
    Lv = typeof WeakSet == 'function' ? WeakSet : Set,
    le = null;
  function Ro(t, n) {
    var i = t.ref;
    if (i !== null)
      if (typeof i == 'function')
        try {
          i(null);
        } catch (l) {
          ot(t, n, l);
        }
      else i.current = null;
  }
  function Gu(t, n, i) {
    try {
      i();
    } catch (l) {
      ot(t, n, l);
    }
  }
  var ch = !1;
  function $v(t, n) {
    if (((su = Is), (t = Uf()), Jl(t))) {
      if ('selectionStart' in t)
        var i = { start: t.selectionStart, end: t.selectionEnd };
      else
        e: {
          i = ((i = t.ownerDocument) && i.defaultView) || window;
          var l = i.getSelection && i.getSelection();
          if (l && l.rangeCount !== 0) {
            i = l.anchorNode;
            var d = l.anchorOffset,
              p = l.focusNode;
            l = l.focusOffset;
            try {
              i.nodeType, p.nodeType;
            } catch {
              i = null;
              break e;
            }
            var y = 0,
              T = -1,
              A = -1,
              D = 0,
              J = 0,
              te = t,
              X = null;
            t: for (;;) {
              for (
                var se;
                te !== i || (d !== 0 && te.nodeType !== 3) || (T = y + d),
                  te !== p || (l !== 0 && te.nodeType !== 3) || (A = y + l),
                  te.nodeType === 3 && (y += te.nodeValue.length),
                  (se = te.firstChild) !== null;

              )
                (X = te), (te = se);
              for (;;) {
                if (te === t) break t;
                if (
                  (X === i && ++D === d && (T = y),
                  X === p && ++J === l && (A = y),
                  (se = te.nextSibling) !== null)
                )
                  break;
                (te = X), (X = te.parentNode);
              }
              te = se;
            }
            i = T === -1 || A === -1 ? null : { start: T, end: A };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      au = { focusedElem: t, selectionRange: i }, Is = !1, le = n;
      le !== null;

    )
      if (
        ((n = le), (t = n.child), (n.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = n), (le = t);
      else
        for (; le !== null; ) {
          n = le;
          try {
            var ce = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ce !== null) {
                    var fe = ce.memoizedProps,
                      ct = ce.memoizedState,
                      F = n.stateNode,
                      $ = F.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? fe : vn(n.type, fe),
                        ct,
                      );
                    F.__reactInternalSnapshotBeforeUpdate = $;
                  }
                  break;
                case 3:
                  var B = n.stateNode.containerInfo;
                  B.nodeType === 1
                    ? (B.textContent = '')
                    : B.nodeType === 9 &&
                      B.documentElement &&
                      B.removeChild(B.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (oe) {
            ot(n, n.return, oe);
          }
          if (((t = n.sibling), t !== null)) {
            (t.return = n.return), (le = t);
            break;
          }
          le = n.return;
        }
    return (ce = ch), (ch = !1), ce;
  }
  function Ai(t, n, i) {
    var l = n.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var d = (l = l.next);
      do {
        if ((d.tag & t) === t) {
          var p = d.destroy;
          (d.destroy = void 0), p !== void 0 && Gu(n, i, p);
        }
        d = d.next;
      } while (d !== l);
    }
  }
  function ca(t, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var i = (n = n.next);
      do {
        if ((i.tag & t) === t) {
          var l = i.create;
          i.destroy = l();
        }
        i = i.next;
      } while (i !== n);
    }
  }
  function Qu(t) {
    var n = t.ref;
    if (n !== null) {
      var i = t.stateNode;
      switch (t.tag) {
        case 5:
          t = i;
          break;
        default:
          t = i;
      }
      typeof n == 'function' ? n(t) : (n.current = t);
    }
  }
  function dh(t) {
    var n = t.alternate;
    n !== null && ((t.alternate = null), dh(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 &&
        ((n = t.stateNode),
        n !== null &&
          (delete n[An],
          delete n[wi],
          delete n[du],
          delete n[gv],
          delete n[yv])),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  function fh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function ph(t) {
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || fh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Xu(t, n, i) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode),
        n
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(t, n)
            : i.insertBefore(t, n)
          : (i.nodeType === 8
              ? ((n = i.parentNode), n.insertBefore(t, i))
              : ((n = i), n.appendChild(t)),
            (i = i._reactRootContainer),
            i != null || n.onclick !== null || (n.onclick = js));
    else if (l !== 4 && ((t = t.child), t !== null))
      for (Xu(t, n, i), t = t.sibling; t !== null; )
        Xu(t, n, i), (t = t.sibling);
  }
  function Yu(t, n, i) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode), n ? i.insertBefore(t, n) : i.appendChild(t);
    else if (l !== 4 && ((t = t.child), t !== null))
      for (Yu(t, n, i), t = t.sibling; t !== null; )
        Yu(t, n, i), (t = t.sibling);
  }
  var Et = null,
    xn = !1;
  function br(t, n, i) {
    for (i = i.child; i !== null; ) hh(t, n, i), (i = i.sibling);
  }
  function hh(t, n, i) {
    if (Nn && typeof Nn.onCommitFiberUnmount == 'function')
      try {
        Nn.onCommitFiberUnmount(bs, i);
      } catch {}
    switch (i.tag) {
      case 5:
        Nt || Ro(i, n);
      case 6:
        var l = Et,
          d = xn;
        (Et = null),
          br(t, n, i),
          (Et = l),
          (xn = d),
          Et !== null &&
            (xn
              ? ((t = Et),
                (i = i.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(i)
                  : t.removeChild(i))
              : Et.removeChild(i.stateNode));
        break;
      case 18:
        Et !== null &&
          (xn
            ? ((t = Et),
              (i = i.stateNode),
              t.nodeType === 8
                ? cu(t.parentNode, i)
                : t.nodeType === 1 && cu(t, i),
              ci(t))
            : cu(Et, i.stateNode));
        break;
      case 4:
        (l = Et),
          (d = xn),
          (Et = i.stateNode.containerInfo),
          (xn = !0),
          br(t, n, i),
          (Et = l),
          (xn = d);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Nt &&
          ((l = i.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          d = l = l.next;
          do {
            var p = d,
              y = p.destroy;
            (p = p.tag),
              y !== void 0 && (p & 2 || p & 4) && Gu(i, n, y),
              (d = d.next);
          } while (d !== l);
        }
        br(t, n, i);
        break;
      case 1:
        if (
          !Nt &&
          (Ro(i, n),
          (l = i.stateNode),
          typeof l.componentWillUnmount == 'function')
        )
          try {
            (l.props = i.memoizedProps),
              (l.state = i.memoizedState),
              l.componentWillUnmount();
          } catch (T) {
            ot(i, n, T);
          }
        br(t, n, i);
        break;
      case 21:
        br(t, n, i);
        break;
      case 22:
        i.mode & 1
          ? ((Nt = (l = Nt) || i.memoizedState !== null), br(t, n, i), (Nt = l))
          : br(t, n, i);
        break;
      default:
        br(t, n, i);
    }
  }
  function mh(t) {
    var n = t.updateQueue;
    if (n !== null) {
      t.updateQueue = null;
      var i = t.stateNode;
      i === null && (i = t.stateNode = new Lv()),
        n.forEach(function (l) {
          var d = Wv.bind(null, t, l);
          i.has(l) || (i.add(l), l.then(d, d));
        });
    }
  }
  function Sn(t, n) {
    var i = n.deletions;
    if (i !== null)
      for (var l = 0; l < i.length; l++) {
        var d = i[l];
        try {
          var p = t,
            y = n,
            T = y;
          e: for (; T !== null; ) {
            switch (T.tag) {
              case 5:
                (Et = T.stateNode), (xn = !1);
                break e;
              case 3:
                (Et = T.stateNode.containerInfo), (xn = !0);
                break e;
              case 4:
                (Et = T.stateNode.containerInfo), (xn = !0);
                break e;
            }
            T = T.return;
          }
          if (Et === null) throw Error(o(160));
          hh(p, y, d), (Et = null), (xn = !1);
          var A = d.alternate;
          A !== null && (A.return = null), (d.return = null);
        } catch (D) {
          ot(d, n, D);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) gh(n, t), (n = n.sibling);
  }
  function gh(t, n) {
    var i = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Sn(n, t), Mn(t), l & 4)) {
          try {
            Ai(3, t, t.return), ca(3, t);
          } catch (fe) {
            ot(t, t.return, fe);
          }
          try {
            Ai(5, t, t.return);
          } catch (fe) {
            ot(t, t.return, fe);
          }
        }
        break;
      case 1:
        Sn(n, t), Mn(t), l & 512 && i !== null && Ro(i, i.return);
        break;
      case 5:
        if (
          (Sn(n, t),
          Mn(t),
          l & 512 && i !== null && Ro(i, i.return),
          t.flags & 32)
        ) {
          var d = t.stateNode;
          try {
            qt(d, '');
          } catch (fe) {
            ot(t, t.return, fe);
          }
        }
        if (l & 4 && ((d = t.stateNode), d != null)) {
          var p = t.memoizedProps,
            y = i !== null ? i.memoizedProps : p,
            T = t.type,
            A = t.updateQueue;
          if (((t.updateQueue = null), A !== null))
            try {
              T === 'input' && p.type === 'radio' && p.name != null && Pt(d, p),
                lt(T, y);
              var D = lt(T, p);
              for (y = 0; y < A.length; y += 2) {
                var J = A[y],
                  te = A[y + 1];
                J === 'style'
                  ? ei(d, te)
                  : J === 'dangerouslySetInnerHTML'
                  ? Gn(d, te)
                  : J === 'children'
                  ? qt(d, te)
                  : P(d, J, te, D);
              }
              switch (T) {
                case 'input':
                  gt(d, p);
                  break;
                case 'textarea':
                  bt(d, p);
                  break;
                case 'select':
                  var X = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!p.multiple;
                  var se = p.value;
                  se != null
                    ? Ge(d, !!p.multiple, se, !1)
                    : X !== !!p.multiple &&
                      (p.defaultValue != null
                        ? Ge(d, !!p.multiple, p.defaultValue, !0)
                        : Ge(d, !!p.multiple, p.multiple ? [] : '', !1));
              }
              d[wi] = p;
            } catch (fe) {
              ot(t, t.return, fe);
            }
        }
        break;
      case 6:
        if ((Sn(n, t), Mn(t), l & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          (d = t.stateNode), (p = t.memoizedProps);
          try {
            d.nodeValue = p;
          } catch (fe) {
            ot(t, t.return, fe);
          }
        }
        break;
      case 3:
        if (
          (Sn(n, t), Mn(t), l & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            ci(n.containerInfo);
          } catch (fe) {
            ot(t, t.return, fe);
          }
        break;
      case 4:
        Sn(n, t), Mn(t);
        break;
      case 13:
        Sn(n, t),
          Mn(t),
          (d = t.child),
          d.flags & 8192 &&
            ((p = d.memoizedState !== null),
            (d.stateNode.isHidden = p),
            !p ||
              (d.alternate !== null && d.alternate.memoizedState !== null) ||
              (ec = ut())),
          l & 4 && mh(t);
        break;
      case 22:
        if (
          ((J = i !== null && i.memoizedState !== null),
          t.mode & 1 ? ((Nt = (D = Nt) || J), Sn(n, t), (Nt = D)) : Sn(n, t),
          Mn(t),
          l & 8192)
        ) {
          if (
            ((D = t.memoizedState !== null),
            (t.stateNode.isHidden = D) && !J && t.mode & 1)
          )
            for (le = t, J = t.child; J !== null; ) {
              for (te = le = J; le !== null; ) {
                switch (((X = le), (se = X.child), X.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ai(4, X, X.return);
                    break;
                  case 1:
                    Ro(X, X.return);
                    var ce = X.stateNode;
                    if (typeof ce.componentWillUnmount == 'function') {
                      (l = X), (i = X.return);
                      try {
                        (n = l),
                          (ce.props = n.memoizedProps),
                          (ce.state = n.memoizedState),
                          ce.componentWillUnmount();
                      } catch (fe) {
                        ot(l, i, fe);
                      }
                    }
                    break;
                  case 5:
                    Ro(X, X.return);
                    break;
                  case 22:
                    if (X.memoizedState !== null) {
                      xh(te);
                      continue;
                    }
                }
                se !== null ? ((se.return = X), (le = se)) : xh(te);
              }
              J = J.sibling;
            }
          e: for (J = null, te = t; ; ) {
            if (te.tag === 5) {
              if (J === null) {
                J = te;
                try {
                  (d = te.stateNode),
                    D
                      ? ((p = d.style),
                        typeof p.setProperty == 'function'
                          ? p.setProperty('display', 'none', 'important')
                          : (p.display = 'none'))
                      : ((T = te.stateNode),
                        (A = te.memoizedProps.style),
                        (y =
                          A != null && A.hasOwnProperty('display')
                            ? A.display
                            : null),
                        (T.style.display = cr('display', y)));
                } catch (fe) {
                  ot(t, t.return, fe);
                }
              }
            } else if (te.tag === 6) {
              if (J === null)
                try {
                  te.stateNode.nodeValue = D ? '' : te.memoizedProps;
                } catch (fe) {
                  ot(t, t.return, fe);
                }
            } else if (
              ((te.tag !== 22 && te.tag !== 23) ||
                te.memoizedState === null ||
                te === t) &&
              te.child !== null
            ) {
              (te.child.return = te), (te = te.child);
              continue;
            }
            if (te === t) break e;
            for (; te.sibling === null; ) {
              if (te.return === null || te.return === t) break e;
              J === te && (J = null), (te = te.return);
            }
            J === te && (J = null),
              (te.sibling.return = te.return),
              (te = te.sibling);
          }
        }
        break;
      case 19:
        Sn(n, t), Mn(t), l & 4 && mh(t);
        break;
      case 21:
        break;
      default:
        Sn(n, t), Mn(t);
    }
  }
  function Mn(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        e: {
          for (var i = t.return; i !== null; ) {
            if (fh(i)) {
              var l = i;
              break e;
            }
            i = i.return;
          }
          throw Error(o(160));
        }
        switch (l.tag) {
          case 5:
            var d = l.stateNode;
            l.flags & 32 && (qt(d, ''), (l.flags &= -33));
            var p = ph(t);
            Yu(t, p, d);
            break;
          case 3:
          case 4:
            var y = l.stateNode.containerInfo,
              T = ph(t);
            Xu(t, T, y);
            break;
          default:
            throw Error(o(161));
        }
      } catch (A) {
        ot(t, t.return, A);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function Mv(t, n, i) {
    (le = t), yh(t);
  }
  function yh(t, n, i) {
    for (var l = (t.mode & 1) !== 0; le !== null; ) {
      var d = le,
        p = d.child;
      if (d.tag === 22 && l) {
        var y = d.memoizedState !== null || ua;
        if (!y) {
          var T = d.alternate,
            A = (T !== null && T.memoizedState !== null) || Nt;
          T = ua;
          var D = Nt;
          if (((ua = y), (Nt = A) && !D))
            for (le = d; le !== null; )
              (y = le),
                (A = y.child),
                y.tag === 22 && y.memoizedState !== null
                  ? Sh(d)
                  : A !== null
                  ? ((A.return = y), (le = A))
                  : Sh(d);
          for (; p !== null; ) (le = p), yh(p), (p = p.sibling);
          (le = d), (ua = T), (Nt = D);
        }
        vh(t);
      } else
        d.subtreeFlags & 8772 && p !== null
          ? ((p.return = d), (le = p))
          : vh(t);
    }
  }
  function vh(t) {
    for (; le !== null; ) {
      var n = le;
      if (n.flags & 8772) {
        var i = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Nt || ca(5, n);
                break;
              case 1:
                var l = n.stateNode;
                if (n.flags & 4 && !Nt)
                  if (i === null) l.componentDidMount();
                  else {
                    var d =
                      n.elementType === n.type
                        ? i.memoizedProps
                        : vn(n.type, i.memoizedProps);
                    l.componentDidUpdate(
                      d,
                      i.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var p = n.updateQueue;
                p !== null && xp(n, p, l);
                break;
              case 3:
                var y = n.updateQueue;
                if (y !== null) {
                  if (((i = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        i = n.child.stateNode;
                        break;
                      case 1:
                        i = n.child.stateNode;
                    }
                  xp(n, y, i);
                }
                break;
              case 5:
                var T = n.stateNode;
                if (i === null && n.flags & 4) {
                  i = T;
                  var A = n.memoizedProps;
                  switch (n.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      A.autoFocus && i.focus();
                      break;
                    case 'img':
                      A.src && (i.src = A.src);
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
                if (n.memoizedState === null) {
                  var D = n.alternate;
                  if (D !== null) {
                    var J = D.memoizedState;
                    if (J !== null) {
                      var te = J.dehydrated;
                      te !== null && ci(te);
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
                throw Error(o(163));
            }
          Nt || (n.flags & 512 && Qu(n));
        } catch (X) {
          ot(n, n.return, X);
        }
      }
      if (n === t) {
        le = null;
        break;
      }
      if (((i = n.sibling), i !== null)) {
        (i.return = n.return), (le = i);
        break;
      }
      le = n.return;
    }
  }
  function xh(t) {
    for (; le !== null; ) {
      var n = le;
      if (n === t) {
        le = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        (i.return = n.return), (le = i);
        break;
      }
      le = n.return;
    }
  }
  function Sh(t) {
    for (; le !== null; ) {
      var n = le;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var i = n.return;
            try {
              ca(4, n);
            } catch (A) {
              ot(n, i, A);
            }
            break;
          case 1:
            var l = n.stateNode;
            if (typeof l.componentDidMount == 'function') {
              var d = n.return;
              try {
                l.componentDidMount();
              } catch (A) {
                ot(n, d, A);
              }
            }
            var p = n.return;
            try {
              Qu(n);
            } catch (A) {
              ot(n, p, A);
            }
            break;
          case 5:
            var y = n.return;
            try {
              Qu(n);
            } catch (A) {
              ot(n, y, A);
            }
        }
      } catch (A) {
        ot(n, n.return, A);
      }
      if (n === t) {
        le = null;
        break;
      }
      var T = n.sibling;
      if (T !== null) {
        (T.return = n.return), (le = T);
        break;
      }
      le = n.return;
    }
  }
  var _v = Math.ceil,
    da = I.ReactCurrentDispatcher,
    Ju = I.ReactCurrentOwner,
    sn = I.ReactCurrentBatchConfig,
    Ne = 0,
    St = null,
    pt = null,
    kt = 0,
    Yt = 0,
    Po = vr(0),
    vt = 0,
    Li = null,
    Ur = 0,
    fa = 0,
    Zu = 0,
    $i = null,
    Ut = null,
    ec = 0,
    To = 1 / 0,
    nr = null,
    pa = !1,
    tc = null,
    Er = null,
    ha = !1,
    kr = null,
    ma = 0,
    Mi = 0,
    nc = null,
    ga = -1,
    ya = 0;
  function _t() {
    return Ne & 6 ? ut() : ga !== -1 ? ga : (ga = ut());
  }
  function Rr(t) {
    return t.mode & 1
      ? Ne & 2 && kt !== 0
        ? kt & -kt
        : xv.transition !== null
        ? (ya === 0 && (ya = pf()), ya)
        : ((t = We),
          t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Cf(t.type))),
          t)
      : 1;
  }
  function wn(t, n, i, l) {
    if (50 < Mi) throw ((Mi = 0), (nc = null), Error(o(185)));
    ii(t, i, l),
      (!(Ne & 2) || t !== St) &&
        (t === St && (!(Ne & 2) && (fa |= i), vt === 4 && Pr(t, kt)),
        Wt(t, l),
        i === 1 &&
          Ne === 0 &&
          !(n.mode & 1) &&
          ((To = ut() + 500), Vs && Sr()));
  }
  function Wt(t, n) {
    var i = t.callbackNode;
    x0(t, n);
    var l = Rs(t, t === St ? kt : 0);
    if (l === 0)
      i !== null && cf(i), (t.callbackNode = null), (t.callbackPriority = 0);
    else if (((n = l & -l), t.callbackPriority !== n)) {
      if ((i != null && cf(i), n === 1))
        t.tag === 0 ? vv(Ch.bind(null, t)) : ap(Ch.bind(null, t)),
          hv(function () {
            !(Ne & 6) && Sr();
          }),
          (i = null);
      else {
        switch (hf(l)) {
          case 1:
            i = Ml;
            break;
          case 4:
            i = df;
            break;
          case 16:
            i = Cs;
            break;
          case 536870912:
            i = ff;
            break;
          default:
            i = Cs;
        }
        i = Oh(i, wh.bind(null, t));
      }
      (t.callbackPriority = n), (t.callbackNode = i);
    }
  }
  function wh(t, n) {
    if (((ga = -1), (ya = 0), Ne & 6)) throw Error(o(327));
    var i = t.callbackNode;
    if (Io() && t.callbackNode !== i) return null;
    var l = Rs(t, t === St ? kt : 0);
    if (l === 0) return null;
    if (l & 30 || l & t.expiredLanes || n) n = va(t, l);
    else {
      n = l;
      var d = Ne;
      Ne |= 2;
      var p = Eh();
      (St !== t || kt !== n) && ((nr = null), (To = ut() + 500), Hr(t, n));
      do
        try {
          Bv();
          break;
        } catch (T) {
          bh(t, T);
        }
      while (!0);
      Su(),
        (da.current = p),
        (Ne = d),
        pt !== null ? (n = 0) : ((St = null), (kt = 0), (n = vt));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((d = _l(t)), d !== 0 && ((l = d), (n = rc(t, d)))),
        n === 1)
      )
        throw ((i = Li), Hr(t, 0), Pr(t, l), Wt(t, ut()), i);
      if (n === 6) Pr(t, l);
      else {
        if (
          ((d = t.current.alternate),
          !(l & 30) &&
            !zv(d) &&
            ((n = va(t, l)),
            n === 2 && ((p = _l(t)), p !== 0 && ((l = p), (n = rc(t, p)))),
            n === 1))
        )
          throw ((i = Li), Hr(t, 0), Pr(t, l), Wt(t, ut()), i);
        switch (((t.finishedWork = d), (t.finishedLanes = l), n)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Vr(t, Ut, nr);
            break;
          case 3:
            if (
              (Pr(t, l),
              (l & 130023424) === l && ((n = ec + 500 - ut()), 10 < n))
            ) {
              if (Rs(t, 0) !== 0) break;
              if (((d = t.suspendedLanes), (d & l) !== l)) {
                _t(), (t.pingedLanes |= t.suspendedLanes & d);
                break;
              }
              t.timeoutHandle = uu(Vr.bind(null, t, Ut, nr), n);
              break;
            }
            Vr(t, Ut, nr);
            break;
          case 4:
            if ((Pr(t, l), (l & 4194240) === l)) break;
            for (n = t.eventTimes, d = -1; 0 < l; ) {
              var y = 31 - mn(l);
              (p = 1 << y), (y = n[y]), y > d && (d = y), (l &= ~p);
            }
            if (
              ((l = d),
              (l = ut() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                  ? 480
                  : 1080 > l
                  ? 1080
                  : 1920 > l
                  ? 1920
                  : 3e3 > l
                  ? 3e3
                  : 4320 > l
                  ? 4320
                  : 1960 * _v(l / 1960)) - l),
              10 < l)
            ) {
              t.timeoutHandle = uu(Vr.bind(null, t, Ut, nr), l);
              break;
            }
            Vr(t, Ut, nr);
            break;
          case 5:
            Vr(t, Ut, nr);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Wt(t, ut()), t.callbackNode === i ? wh.bind(null, t) : null;
  }
  function rc(t, n) {
    var i = $i;
    return (
      t.current.memoizedState.isDehydrated && (Hr(t, n).flags |= 256),
      (t = va(t, n)),
      t !== 2 && ((n = Ut), (Ut = i), n !== null && oc(n)),
      t
    );
  }
  function oc(t) {
    Ut === null ? (Ut = t) : Ut.push.apply(Ut, t);
  }
  function zv(t) {
    for (var n = t; ; ) {
      if (n.flags & 16384) {
        var i = n.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var l = 0; l < i.length; l++) {
            var d = i[l],
              p = d.getSnapshot;
            d = d.value;
            try {
              if (!gn(p(), d)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = n.child), n.subtreeFlags & 16384 && i !== null))
        (i.return = n), (n = i);
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Pr(t, n) {
    for (
      n &= ~Zu,
        n &= ~fa,
        t.suspendedLanes |= n,
        t.pingedLanes &= ~n,
        t = t.expirationTimes;
      0 < n;

    ) {
      var i = 31 - mn(n),
        l = 1 << i;
      (t[i] = -1), (n &= ~l);
    }
  }
  function Ch(t) {
    if (Ne & 6) throw Error(o(327));
    Io();
    var n = Rs(t, 0);
    if (!(n & 1)) return Wt(t, ut()), null;
    var i = va(t, n);
    if (t.tag !== 0 && i === 2) {
      var l = _l(t);
      l !== 0 && ((n = l), (i = rc(t, l)));
    }
    if (i === 1) throw ((i = Li), Hr(t, 0), Pr(t, n), Wt(t, ut()), i);
    if (i === 6) throw Error(o(345));
    return (
      (t.finishedWork = t.current.alternate),
      (t.finishedLanes = n),
      Vr(t, Ut, nr),
      Wt(t, ut()),
      null
    );
  }
  function ic(t, n) {
    var i = Ne;
    Ne |= 1;
    try {
      return t(n);
    } finally {
      (Ne = i), Ne === 0 && ((To = ut() + 500), Vs && Sr());
    }
  }
  function Wr(t) {
    kr !== null && kr.tag === 0 && !(Ne & 6) && Io();
    var n = Ne;
    Ne |= 1;
    var i = sn.transition,
      l = We;
    try {
      if (((sn.transition = null), (We = 1), t)) return t();
    } finally {
      (We = l), (sn.transition = i), (Ne = n), !(Ne & 6) && Sr();
    }
  }
  function sc() {
    (Yt = Po.current), Je(Po);
  }
  function Hr(t, n) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var i = t.timeoutHandle;
    if ((i !== -1 && ((t.timeoutHandle = -1), pv(i)), pt !== null))
      for (i = pt.return; i !== null; ) {
        var l = i;
        switch ((mu(l), l.tag)) {
          case 1:
            (l = l.type.childContextTypes), l != null && Ws();
            break;
          case 3:
            Eo(), Je(Bt), Je(Tt), Tu();
            break;
          case 5:
            Ru(l);
            break;
          case 4:
            Eo();
            break;
          case 13:
            Je(nt);
            break;
          case 19:
            Je(nt);
            break;
          case 10:
            wu(l.type._context);
            break;
          case 22:
          case 23:
            sc();
        }
        i = i.return;
      }
    if (
      ((St = t),
      (pt = t = Tr(t.current, null)),
      (kt = Yt = n),
      (vt = 0),
      (Li = null),
      (Zu = fa = Ur = 0),
      (Ut = $i = null),
      Br !== null)
    ) {
      for (n = 0; n < Br.length; n++)
        if (((i = Br[n]), (l = i.interleaved), l !== null)) {
          i.interleaved = null;
          var d = l.next,
            p = i.pending;
          if (p !== null) {
            var y = p.next;
            (p.next = d), (l.next = y);
          }
          i.pending = l;
        }
      Br = null;
    }
    return t;
  }
  function bh(t, n) {
    do {
      var i = pt;
      try {
        if ((Su(), (ta.current = ia), na)) {
          for (var l = rt.memoizedState; l !== null; ) {
            var d = l.queue;
            d !== null && (d.pending = null), (l = l.next);
          }
          na = !1;
        }
        if (
          ((jr = 0),
          (xt = yt = rt = null),
          (Pi = !1),
          (Ti = 0),
          (Ju.current = null),
          i === null || i.return === null)
        ) {
          (vt = 1), (Li = n), (pt = null);
          break;
        }
        e: {
          var p = t,
            y = i.return,
            T = i,
            A = n;
          if (
            ((n = kt),
            (T.flags |= 32768),
            A !== null && typeof A == 'object' && typeof A.then == 'function')
          ) {
            var D = A,
              J = T,
              te = J.tag;
            if (!(J.mode & 1) && (te === 0 || te === 11 || te === 15)) {
              var X = J.alternate;
              X
                ? ((J.updateQueue = X.updateQueue),
                  (J.memoizedState = X.memoizedState),
                  (J.lanes = X.lanes))
                : ((J.updateQueue = null), (J.memoizedState = null));
            }
            var se = Gp(y);
            if (se !== null) {
              (se.flags &= -257),
                Qp(se, y, T, p, n),
                se.mode & 1 && qp(p, D, n),
                (n = se),
                (A = D);
              var ce = n.updateQueue;
              if (ce === null) {
                var fe = new Set();
                fe.add(A), (n.updateQueue = fe);
              } else ce.add(A);
              break e;
            } else {
              if (!(n & 1)) {
                qp(p, D, n), ac();
                break e;
              }
              A = Error(o(426));
            }
          } else if (Ze && T.mode & 1) {
            var ct = Gp(y);
            if (ct !== null) {
              !(ct.flags & 65536) && (ct.flags |= 256),
                Qp(ct, y, T, p, n),
                vu(ko(A, T));
              break e;
            }
          }
          (p = A = ko(A, T)),
            vt !== 4 && (vt = 2),
            $i === null ? ($i = [p]) : $i.push(p),
            (p = y);
          do {
            switch (p.tag) {
              case 3:
                (p.flags |= 65536), (n &= -n), (p.lanes |= n);
                var F = Vp(p, A, n);
                vp(p, F);
                break e;
              case 1:
                T = A;
                var $ = p.type,
                  B = p.stateNode;
                if (
                  !(p.flags & 128) &&
                  (typeof $.getDerivedStateFromError == 'function' ||
                    (B !== null &&
                      typeof B.componentDidCatch == 'function' &&
                      (Er === null || !Er.has(B))))
                ) {
                  (p.flags |= 65536), (n &= -n), (p.lanes |= n);
                  var oe = Kp(p, T, n);
                  vp(p, oe);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Rh(i);
      } catch (he) {
        (n = he), pt === i && i !== null && (pt = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Eh() {
    var t = da.current;
    return (da.current = ia), t === null ? ia : t;
  }
  function ac() {
    (vt === 0 || vt === 3 || vt === 2) && (vt = 4),
      St === null || (!(Ur & 268435455) && !(fa & 268435455)) || Pr(St, kt);
  }
  function va(t, n) {
    var i = Ne;
    Ne |= 2;
    var l = Eh();
    (St !== t || kt !== n) && ((nr = null), Hr(t, n));
    do
      try {
        Fv();
        break;
      } catch (d) {
        bh(t, d);
      }
    while (!0);
    if ((Su(), (Ne = i), (da.current = l), pt !== null)) throw Error(o(261));
    return (St = null), (kt = 0), vt;
  }
  function Fv() {
    for (; pt !== null; ) kh(pt);
  }
  function Bv() {
    for (; pt !== null && !c0(); ) kh(pt);
  }
  function kh(t) {
    var n = Ih(t.alternate, t, Yt);
    (t.memoizedProps = t.pendingProps),
      n === null ? Rh(t) : (pt = n),
      (Ju.current = null);
  }
  function Rh(t) {
    var n = t;
    do {
      var i = n.alternate;
      if (((t = n.return), n.flags & 32768)) {
        if (((i = Av(i, n)), i !== null)) {
          (i.flags &= 32767), (pt = i);
          return;
        }
        if (t !== null)
          (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
        else {
          (vt = 6), (pt = null);
          return;
        }
      } else if (((i = Nv(i, n, Yt)), i !== null)) {
        pt = i;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        pt = n;
        return;
      }
      pt = n = t;
    } while (n !== null);
    vt === 0 && (vt = 5);
  }
  function Vr(t, n, i) {
    var l = We,
      d = sn.transition;
    try {
      (sn.transition = null), (We = 1), Dv(t, n, i, l);
    } finally {
      (sn.transition = d), (We = l);
    }
    return null;
  }
  function Dv(t, n, i, l) {
    do Io();
    while (kr !== null);
    if (Ne & 6) throw Error(o(327));
    i = t.finishedWork;
    var d = t.finishedLanes;
    if (i === null) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), i === t.current))
      throw Error(o(177));
    (t.callbackNode = null), (t.callbackPriority = 0);
    var p = i.lanes | i.childLanes;
    if (
      (S0(t, p),
      t === St && ((pt = St = null), (kt = 0)),
      (!(i.subtreeFlags & 2064) && !(i.flags & 2064)) ||
        ha ||
        ((ha = !0),
        Oh(Cs, function () {
          return Io(), null;
        })),
      (p = (i.flags & 15990) !== 0),
      i.subtreeFlags & 15990 || p)
    ) {
      (p = sn.transition), (sn.transition = null);
      var y = We;
      We = 1;
      var T = Ne;
      (Ne |= 4),
        (Ju.current = null),
        $v(t, i),
        gh(i, t),
        sv(au),
        (Is = !!su),
        (au = su = null),
        (t.current = i),
        Mv(i),
        d0(),
        (Ne = T),
        (We = y),
        (sn.transition = p);
    } else t.current = i;
    if (
      (ha && ((ha = !1), (kr = t), (ma = d)),
      (p = t.pendingLanes),
      p === 0 && (Er = null),
      h0(i.stateNode),
      Wt(t, ut()),
      n !== null)
    )
      for (l = t.onRecoverableError, i = 0; i < n.length; i++)
        (d = n[i]), l(d.value, { componentStack: d.stack, digest: d.digest });
    if (pa) throw ((pa = !1), (t = tc), (tc = null), t);
    return (
      ma & 1 && t.tag !== 0 && Io(),
      (p = t.pendingLanes),
      p & 1 ? (t === nc ? Mi++ : ((Mi = 0), (nc = t))) : (Mi = 0),
      Sr(),
      null
    );
  }
  function Io() {
    if (kr !== null) {
      var t = hf(ma),
        n = sn.transition,
        i = We;
      try {
        if (((sn.transition = null), (We = 16 > t ? 16 : t), kr === null))
          var l = !1;
        else {
          if (((t = kr), (kr = null), (ma = 0), Ne & 6)) throw Error(o(331));
          var d = Ne;
          for (Ne |= 4, le = t.current; le !== null; ) {
            var p = le,
              y = p.child;
            if (le.flags & 16) {
              var T = p.deletions;
              if (T !== null) {
                for (var A = 0; A < T.length; A++) {
                  var D = T[A];
                  for (le = D; le !== null; ) {
                    var J = le;
                    switch (J.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ai(8, J, p);
                    }
                    var te = J.child;
                    if (te !== null) (te.return = J), (le = te);
                    else
                      for (; le !== null; ) {
                        J = le;
                        var X = J.sibling,
                          se = J.return;
                        if ((dh(J), J === D)) {
                          le = null;
                          break;
                        }
                        if (X !== null) {
                          (X.return = se), (le = X);
                          break;
                        }
                        le = se;
                      }
                  }
                }
                var ce = p.alternate;
                if (ce !== null) {
                  var fe = ce.child;
                  if (fe !== null) {
                    ce.child = null;
                    do {
                      var ct = fe.sibling;
                      (fe.sibling = null), (fe = ct);
                    } while (fe !== null);
                  }
                }
                le = p;
              }
            }
            if (p.subtreeFlags & 2064 && y !== null) (y.return = p), (le = y);
            else
              e: for (; le !== null; ) {
                if (((p = le), p.flags & 2048))
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ai(9, p, p.return);
                  }
                var F = p.sibling;
                if (F !== null) {
                  (F.return = p.return), (le = F);
                  break e;
                }
                le = p.return;
              }
          }
          var $ = t.current;
          for (le = $; le !== null; ) {
            y = le;
            var B = y.child;
            if (y.subtreeFlags & 2064 && B !== null) (B.return = y), (le = B);
            else
              e: for (y = $; le !== null; ) {
                if (((T = le), T.flags & 2048))
                  try {
                    switch (T.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ca(9, T);
                    }
                  } catch (he) {
                    ot(T, T.return, he);
                  }
                if (T === y) {
                  le = null;
                  break e;
                }
                var oe = T.sibling;
                if (oe !== null) {
                  (oe.return = T.return), (le = oe);
                  break e;
                }
                le = T.return;
              }
          }
          if (
            ((Ne = d),
            Sr(),
            Nn && typeof Nn.onPostCommitFiberRoot == 'function')
          )
            try {
              Nn.onPostCommitFiberRoot(bs, t);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        (We = i), (sn.transition = n);
      }
    }
    return !1;
  }
  function Ph(t, n, i) {
    (n = ko(i, n)),
      (n = Vp(t, n, 1)),
      (t = Cr(t, n, 1)),
      (n = _t()),
      t !== null && (ii(t, 1, n), Wt(t, n));
  }
  function ot(t, n, i) {
    if (t.tag === 3) Ph(t, t, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Ph(n, t, i);
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' &&
              (Er === null || !Er.has(l)))
          ) {
            (t = ko(i, t)),
              (t = Kp(n, t, 1)),
              (n = Cr(n, t, 1)),
              (t = _t()),
              n !== null && (ii(n, 1, t), Wt(n, t));
            break;
          }
        }
        n = n.return;
      }
  }
  function jv(t, n, i) {
    var l = t.pingCache;
    l !== null && l.delete(n),
      (n = _t()),
      (t.pingedLanes |= t.suspendedLanes & i),
      St === t &&
        (kt & i) === i &&
        (vt === 4 || (vt === 3 && (kt & 130023424) === kt && 500 > ut() - ec)
          ? Hr(t, 0)
          : (Zu |= i)),
      Wt(t, n);
  }
  function Th(t, n) {
    n === 0 &&
      (t.mode & 1
        ? ((n = ks), (ks <<= 1), !(ks & 130023424) && (ks = 4194304))
        : (n = 1));
    var i = _t();
    (t = Zn(t, n)), t !== null && (ii(t, n, i), Wt(t, i));
  }
  function Uv(t) {
    var n = t.memoizedState,
      i = 0;
    n !== null && (i = n.retryLane), Th(t, i);
  }
  function Wv(t, n) {
    var i = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode,
          d = t.memoizedState;
        d !== null && (i = d.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(n), Th(t, i);
  }
  var Ih;
  Ih = function (t, n, i) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps || Bt.current) jt = !0;
      else {
        if (!(t.lanes & i) && !(n.flags & 128)) return (jt = !1), Ov(t, n, i);
        jt = !!(t.flags & 131072);
      }
    else (jt = !1), Ze && n.flags & 1048576 && lp(n, qs, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var l = n.type;
        la(t, n), (t = n.pendingProps);
        var d = yo(n, Tt.current);
        bo(n, i), (d = Nu(null, n, l, t, d, i));
        var p = Au();
        return (
          (n.flags |= 1),
          typeof d == 'object' &&
          d !== null &&
          typeof d.render == 'function' &&
          d.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              Dt(l) ? ((p = !0), Hs(n)) : (p = !1),
              (n.memoizedState =
                d.state !== null && d.state !== void 0 ? d.state : null),
              Eu(n),
              (d.updater = sa),
              (n.stateNode = d),
              (d._reactInternals = n),
              Fu(n, l, t, i),
              (n = Uu(null, n, l, !0, p, i)))
            : ((n.tag = 0), Ze && p && hu(n), Mt(null, n, d, i), (n = n.child)),
          n
        );
      case 16:
        l = n.elementType;
        e: {
          switch (
            (la(t, n),
            (t = n.pendingProps),
            (d = l._init),
            (l = d(l._payload)),
            (n.type = l),
            (d = n.tag = Vv(l)),
            (t = vn(l, t)),
            d)
          ) {
            case 0:
              n = ju(null, n, l, t, i);
              break e;
            case 1:
              n = th(null, n, l, t, i);
              break e;
            case 11:
              n = Xp(null, n, l, t, i);
              break e;
            case 14:
              n = Yp(null, n, l, vn(l.type, t), i);
              break e;
          }
          throw Error(o(306, l, ''));
        }
        return n;
      case 0:
        return (
          (l = n.type),
          (d = n.pendingProps),
          (d = n.elementType === l ? d : vn(l, d)),
          ju(t, n, l, d, i)
        );
      case 1:
        return (
          (l = n.type),
          (d = n.pendingProps),
          (d = n.elementType === l ? d : vn(l, d)),
          th(t, n, l, d, i)
        );
      case 3:
        e: {
          if ((nh(n), t === null)) throw Error(o(387));
          (l = n.pendingProps),
            (p = n.memoizedState),
            (d = p.element),
            yp(t, n),
            Zs(n, l, null, i);
          var y = n.memoizedState;
          if (((l = y.element), p.isDehydrated))
            if (
              ((p = {
                element: l,
                isDehydrated: !1,
                cache: y.cache,
                pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                transitions: y.transitions,
              }),
              (n.updateQueue.baseState = p),
              (n.memoizedState = p),
              n.flags & 256)
            ) {
              (d = ko(Error(o(423)), n)), (n = rh(t, n, l, i, d));
              break e;
            } else if (l !== d) {
              (d = ko(Error(o(424)), n)), (n = rh(t, n, l, i, d));
              break e;
            } else
              for (
                Xt = yr(n.stateNode.containerInfo.firstChild),
                  Qt = n,
                  Ze = !0,
                  yn = null,
                  i = mp(n, null, l, i),
                  n.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
          else {
            if ((So(), l === d)) {
              n = tr(t, n, i);
              break e;
            }
            Mt(t, n, l, i);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          Sp(n),
          t === null && yu(n),
          (l = n.type),
          (d = n.pendingProps),
          (p = t !== null ? t.memoizedProps : null),
          (y = d.children),
          lu(l, d) ? (y = null) : p !== null && lu(l, p) && (n.flags |= 32),
          eh(t, n),
          Mt(t, n, y, i),
          n.child
        );
      case 6:
        return t === null && yu(n), null;
      case 13:
        return oh(t, n, i);
      case 4:
        return (
          ku(n, n.stateNode.containerInfo),
          (l = n.pendingProps),
          t === null ? (n.child = wo(n, null, l, i)) : Mt(t, n, l, i),
          n.child
        );
      case 11:
        return (
          (l = n.type),
          (d = n.pendingProps),
          (d = n.elementType === l ? d : vn(l, d)),
          Xp(t, n, l, d, i)
        );
      case 7:
        return Mt(t, n, n.pendingProps, i), n.child;
      case 8:
        return Mt(t, n, n.pendingProps.children, i), n.child;
      case 12:
        return Mt(t, n, n.pendingProps.children, i), n.child;
      case 10:
        e: {
          if (
            ((l = n.type._context),
            (d = n.pendingProps),
            (p = n.memoizedProps),
            (y = d.value),
            Qe(Xs, l._currentValue),
            (l._currentValue = y),
            p !== null)
          )
            if (gn(p.value, y)) {
              if (p.children === d.children && !Bt.current) {
                n = tr(t, n, i);
                break e;
              }
            } else
              for (p = n.child, p !== null && (p.return = n); p !== null; ) {
                var T = p.dependencies;
                if (T !== null) {
                  y = p.child;
                  for (var A = T.firstContext; A !== null; ) {
                    if (A.context === l) {
                      if (p.tag === 1) {
                        (A = er(-1, i & -i)), (A.tag = 2);
                        var D = p.updateQueue;
                        if (D !== null) {
                          D = D.shared;
                          var J = D.pending;
                          J === null
                            ? (A.next = A)
                            : ((A.next = J.next), (J.next = A)),
                            (D.pending = A);
                        }
                      }
                      (p.lanes |= i),
                        (A = p.alternate),
                        A !== null && (A.lanes |= i),
                        Cu(p.return, i, n),
                        (T.lanes |= i);
                      break;
                    }
                    A = A.next;
                  }
                } else if (p.tag === 10) y = p.type === n.type ? null : p.child;
                else if (p.tag === 18) {
                  if (((y = p.return), y === null)) throw Error(o(341));
                  (y.lanes |= i),
                    (T = y.alternate),
                    T !== null && (T.lanes |= i),
                    Cu(y, i, n),
                    (y = p.sibling);
                } else y = p.child;
                if (y !== null) y.return = p;
                else
                  for (y = p; y !== null; ) {
                    if (y === n) {
                      y = null;
                      break;
                    }
                    if (((p = y.sibling), p !== null)) {
                      (p.return = y.return), (y = p);
                      break;
                    }
                    y = y.return;
                  }
                p = y;
              }
          Mt(t, n, d.children, i), (n = n.child);
        }
        return n;
      case 9:
        return (
          (d = n.type),
          (l = n.pendingProps.children),
          bo(n, i),
          (d = rn(d)),
          (l = l(d)),
          (n.flags |= 1),
          Mt(t, n, l, i),
          n.child
        );
      case 14:
        return (
          (l = n.type),
          (d = vn(l, n.pendingProps)),
          (d = vn(l.type, d)),
          Yp(t, n, l, d, i)
        );
      case 15:
        return Jp(t, n, n.type, n.pendingProps, i);
      case 17:
        return (
          (l = n.type),
          (d = n.pendingProps),
          (d = n.elementType === l ? d : vn(l, d)),
          la(t, n),
          (n.tag = 1),
          Dt(l) ? ((t = !0), Hs(n)) : (t = !1),
          bo(n, i),
          Wp(n, l, d),
          Fu(n, l, d, i),
          Uu(null, n, l, !0, t, i)
        );
      case 19:
        return sh(t, n, i);
      case 22:
        return Zp(t, n, i);
    }
    throw Error(o(156, n.tag));
  };
  function Oh(t, n) {
    return uf(t, n);
  }
  function Hv(t, n, i, l) {
    (this.tag = t),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function an(t, n, i, l) {
    return new Hv(t, n, i, l);
  }
  function lc(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Vv(t) {
    if (typeof t == 'function') return lc(t) ? 1 : 0;
    if (t != null) {
      if (((t = t.$$typeof), t === Z)) return 11;
      if (t === Q) return 14;
    }
    return 2;
  }
  function Tr(t, n) {
    var i = t.alternate;
    return (
      i === null
        ? ((i = an(t.tag, n, t.key, t.mode)),
          (i.elementType = t.elementType),
          (i.type = t.type),
          (i.stateNode = t.stateNode),
          (i.alternate = t),
          (t.alternate = i))
        : ((i.pendingProps = n),
          (i.type = t.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = t.flags & 14680064),
      (i.childLanes = t.childLanes),
      (i.lanes = t.lanes),
      (i.child = t.child),
      (i.memoizedProps = t.memoizedProps),
      (i.memoizedState = t.memoizedState),
      (i.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (i.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (i.sibling = t.sibling),
      (i.index = t.index),
      (i.ref = t.ref),
      i
    );
  }
  function xa(t, n, i, l, d, p) {
    var y = 2;
    if (((l = t), typeof t == 'function')) lc(t) && (y = 1);
    else if (typeof t == 'string') y = 5;
    else
      e: switch (t) {
        case z:
          return Kr(i.children, d, p, n);
        case V:
          (y = 8), (d |= 8);
          break;
        case G:
          return (
            (t = an(12, i, n, d | 2)), (t.elementType = G), (t.lanes = p), t
          );
        case Y:
          return (t = an(13, i, n, d)), (t.elementType = Y), (t.lanes = p), t;
        case ne:
          return (t = an(19, i, n, d)), (t.elementType = ne), (t.lanes = p), t;
        case ie:
          return Sa(i, d, p, n);
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case x:
                y = 10;
                break e;
              case j:
                y = 9;
                break e;
              case Z:
                y = 11;
                break e;
              case Q:
                y = 14;
                break e;
              case ee:
                (y = 16), (l = null);
                break e;
            }
          throw Error(o(130, t == null ? t : typeof t, ''));
      }
    return (
      (n = an(y, i, n, d)), (n.elementType = t), (n.type = l), (n.lanes = p), n
    );
  }
  function Kr(t, n, i, l) {
    return (t = an(7, t, l, n)), (t.lanes = i), t;
  }
  function Sa(t, n, i, l) {
    return (
      (t = an(22, t, l, n)),
      (t.elementType = ie),
      (t.lanes = i),
      (t.stateNode = { isHidden: !1 }),
      t
    );
  }
  function uc(t, n, i) {
    return (t = an(6, t, null, n)), (t.lanes = i), t;
  }
  function cc(t, n, i) {
    return (
      (n = an(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = i),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    );
  }
  function Kv(t, n, i, l, d) {
    (this.tag = n),
      (this.containerInfo = t),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = zl(0)),
      (this.expirationTimes = zl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = zl(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = d),
      (this.mutableSourceEagerHydrationData = null);
  }
  function dc(t, n, i, l, d, p, y, T, A) {
    return (
      (t = new Kv(t, n, i, T, A)),
      n === 1 ? ((n = 1), p === !0 && (n |= 8)) : (n = 0),
      (p = an(3, null, null, n)),
      (t.current = p),
      (p.stateNode = t),
      (p.memoizedState = {
        element: l,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Eu(p),
      t
    );
  }
  function qv(t, n, i) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: _,
      key: l == null ? null : '' + l,
      children: t,
      containerInfo: n,
      implementation: i,
    };
  }
  function Nh(t) {
    if (!t) return xr;
    t = t._reactInternals;
    e: {
      if ($r(t) !== t || t.tag !== 1) throw Error(o(170));
      var n = t;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Dt(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(o(171));
    }
    if (t.tag === 1) {
      var i = t.type;
      if (Dt(i)) return ip(t, i, n);
    }
    return n;
  }
  function Ah(t, n, i, l, d, p, y, T, A) {
    return (
      (t = dc(i, l, !0, t, d, p, y, T, A)),
      (t.context = Nh(null)),
      (i = t.current),
      (l = _t()),
      (d = Rr(i)),
      (p = er(l, d)),
      (p.callback = n ?? null),
      Cr(i, p, d),
      (t.current.lanes = d),
      ii(t, d, l),
      Wt(t, l),
      t
    );
  }
  function wa(t, n, i, l) {
    var d = n.current,
      p = _t(),
      y = Rr(d);
    return (
      (i = Nh(i)),
      n.context === null ? (n.context = i) : (n.pendingContext = i),
      (n = er(p, y)),
      (n.payload = { element: t }),
      (l = l === void 0 ? null : l),
      l !== null && (n.callback = l),
      (t = Cr(d, n, y)),
      t !== null && (wn(t, d, y, p), Js(t, d, y)),
      y
    );
  }
  function Ca(t) {
    if (((t = t.current), !t.child)) return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function Lh(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var i = t.retryLane;
      t.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function fc(t, n) {
    Lh(t, n), (t = t.alternate) && Lh(t, n);
  }
  var $h =
    typeof reportError == 'function'
      ? reportError
      : function (t) {
          console.error(t);
        };
  function pc(t) {
    this._internalRoot = t;
  }
  (ba.prototype.render = pc.prototype.render =
    function (t) {
      var n = this._internalRoot;
      if (n === null) throw Error(o(409));
      wa(t, n, null, null);
    }),
    (ba.prototype.unmount = pc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          Wr(function () {
            wa(null, t, null, null);
          }),
            (n[Qn] = null);
        }
      });
  function ba(t) {
    this._internalRoot = t;
  }
  ba.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = yf();
      t = { blockedOn: null, target: t, priority: n };
      for (var i = 0; i < hr.length && n !== 0 && n < hr[i].priority; i++);
      hr.splice(i, 0, t), i === 0 && Sf(t);
    }
  };
  function hc(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function Ea(t) {
    return !(
      !t ||
      (t.nodeType !== 1 &&
        t.nodeType !== 9 &&
        t.nodeType !== 11 &&
        (t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Mh() {}
  function Gv(t, n, i, l, d) {
    if (d) {
      if (typeof l == 'function') {
        var p = l;
        l = function () {
          var D = Ca(y);
          p.call(D);
        };
      }
      var y = Ah(n, l, t, 0, null, !1, !1, '', Mh);
      return (
        (t._reactRootContainer = y),
        (t[Qn] = y.current),
        xi(t.nodeType === 8 ? t.parentNode : t),
        Wr(),
        y
      );
    }
    for (; (d = t.lastChild); ) t.removeChild(d);
    if (typeof l == 'function') {
      var T = l;
      l = function () {
        var D = Ca(A);
        T.call(D);
      };
    }
    var A = dc(t, 0, !1, null, null, !1, !1, '', Mh);
    return (
      (t._reactRootContainer = A),
      (t[Qn] = A.current),
      xi(t.nodeType === 8 ? t.parentNode : t),
      Wr(function () {
        wa(n, A, i, l);
      }),
      A
    );
  }
  function ka(t, n, i, l, d) {
    var p = i._reactRootContainer;
    if (p) {
      var y = p;
      if (typeof d == 'function') {
        var T = d;
        d = function () {
          var A = Ca(y);
          T.call(A);
        };
      }
      wa(n, y, t, d);
    } else y = Gv(i, n, t, d, l);
    return Ca(y);
  }
  (mf = function (t) {
    switch (t.tag) {
      case 3:
        var n = t.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var i = oi(n.pendingLanes);
          i !== 0 &&
            (Fl(n, i | 1), Wt(n, ut()), !(Ne & 6) && ((To = ut() + 500), Sr()));
        }
        break;
      case 13:
        Wr(function () {
          var l = Zn(t, 1);
          if (l !== null) {
            var d = _t();
            wn(l, t, 1, d);
          }
        }),
          fc(t, 1);
    }
  }),
    (Bl = function (t) {
      if (t.tag === 13) {
        var n = Zn(t, 134217728);
        if (n !== null) {
          var i = _t();
          wn(n, t, 134217728, i);
        }
        fc(t, 134217728);
      }
    }),
    (gf = function (t) {
      if (t.tag === 13) {
        var n = Rr(t),
          i = Zn(t, n);
        if (i !== null) {
          var l = _t();
          wn(i, t, n, l);
        }
        fc(t, n);
      }
    }),
    (yf = function () {
      return We;
    }),
    (vf = function (t, n) {
      var i = We;
      try {
        return (We = t), n();
      } finally {
        We = i;
      }
    }),
    (Nl = function (t, n, i) {
      switch (n) {
        case 'input':
          if ((gt(t, i), (n = i.name), i.type === 'radio' && n != null)) {
            for (i = t; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                'input[name=' + JSON.stringify('' + n) + '][type="radio"]',
              ),
                n = 0;
              n < i.length;
              n++
            ) {
              var l = i[n];
              if (l !== t && l.form === t.form) {
                var d = Us(l);
                if (!d) throw Error(o(90));
                Oe(l), gt(l, d);
              }
            }
          }
          break;
        case 'textarea':
          bt(t, i);
          break;
        case 'select':
          (n = i.value), n != null && Ge(t, !!i.multiple, n, !1);
      }
    }),
    (tf = ic),
    (nf = Wr);
  var Qv = { usingClientEntryPoint: !1, Events: [Ci, mo, Us, Zd, ef, ic] },
    _i = {
      findFiberByHostInstance: Mr,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    Xv = {
      bundleType: _i.bundleType,
      version: _i.version,
      rendererPackageName: _i.rendererPackageName,
      rendererConfig: _i.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: I.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (t) {
        return (t = af(t)), t === null ? null : t.stateNode;
      },
      findFiberByHostInstance: _i.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ra = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ra.isDisabled && Ra.supportsFiber)
      try {
        (bs = Ra.inject(Xv)), (Nn = Ra);
      } catch {}
  }
  return (
    (Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qv),
    (Ht.createPortal = function (t, n) {
      var i =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!hc(n)) throw Error(o(200));
      return qv(t, n, null, i);
    }),
    (Ht.createRoot = function (t, n) {
      if (!hc(t)) throw Error(o(299));
      var i = !1,
        l = '',
        d = $h;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (d = n.onRecoverableError)),
        (n = dc(t, 1, !1, null, null, i, !1, l, d)),
        (t[Qn] = n.current),
        xi(t.nodeType === 8 ? t.parentNode : t),
        new pc(n)
      );
    }),
    (Ht.findDOMNode = function (t) {
      if (t == null) return null;
      if (t.nodeType === 1) return t;
      var n = t._reactInternals;
      if (n === void 0)
        throw typeof t.render == 'function'
          ? Error(o(188))
          : ((t = Object.keys(t).join(',')), Error(o(268, t)));
      return (t = af(n)), (t = t === null ? null : t.stateNode), t;
    }),
    (Ht.flushSync = function (t) {
      return Wr(t);
    }),
    (Ht.hydrate = function (t, n, i) {
      if (!Ea(n)) throw Error(o(200));
      return ka(null, t, n, !0, i);
    }),
    (Ht.hydrateRoot = function (t, n, i) {
      if (!hc(t)) throw Error(o(405));
      var l = (i != null && i.hydratedSources) || null,
        d = !1,
        p = '',
        y = $h;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (d = !0),
          i.identifierPrefix !== void 0 && (p = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (y = i.onRecoverableError)),
        (n = Ah(n, null, t, 1, i ?? null, d, !1, p, y)),
        (t[Qn] = n.current),
        xi(t),
        l)
      )
        for (t = 0; t < l.length; t++)
          (i = l[t]),
            (d = i._getVersion),
            (d = d(i._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [i, d])
              : n.mutableSourceEagerHydrationData.push(i, d);
      return new ba(n);
    }),
    (Ht.render = function (t, n, i) {
      if (!Ea(n)) throw Error(o(200));
      return ka(null, t, n, !1, i);
    }),
    (Ht.unmountComponentAtNode = function (t) {
      if (!Ea(t)) throw Error(o(40));
      return t._reactRootContainer
        ? (Wr(function () {
            ka(null, null, t, !1, function () {
              (t._reactRootContainer = null), (t[Qn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ht.unstable_batchedUpdates = ic),
    (Ht.unstable_renderSubtreeIntoContainer = function (t, n, i, l) {
      if (!Ea(i)) throw Error(o(200));
      if (t == null || t._reactInternals === void 0) throw Error(o(38));
      return ka(t, n, i, !1, l);
    }),
    (Ht.version = '18.3.1-next-f1338f8080-20240426'),
    Ht
  );
}
var Wh;
function vg() {
  if (Wh) return yc.exports;
  Wh = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (r) {
        console.error(r);
      }
  }
  return e(), (yc.exports = s1()), yc.exports;
}
var Hh;
function a1() {
  if (Hh) return Pa;
  Hh = 1;
  var e = vg();
  return (Pa.createRoot = e.createRoot), (Pa.hydrateRoot = e.hydrateRoot), Pa;
}
var l1 = a1();
const u1 = cd(l1);
var Bi = {},
  Vh;
function c1() {
  if (Vh) return Bi;
  (Vh = 1),
    Object.defineProperty(Bi, '__esModule', { value: !0 }),
    (Bi.parse = c),
    (Bi.serialize = m);
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    r = /^[\u0021-\u003A\u003C-\u007E]*$/,
    o =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    s = /^[\u0020-\u003A\u003D-\u007E]*$/,
    a = Object.prototype.toString,
    u = (() => {
      const C = function () {};
      return (C.prototype = Object.create(null)), C;
    })();
  function c(C, k) {
    const w = new u(),
      b = C.length;
    if (b < 2) return w;
    const E = (k == null ? void 0 : k.decode) || g;
    let R = 0;
    do {
      const N = C.indexOf('=', R);
      if (N === -1) break;
      const P = C.indexOf(';', R),
        I = P === -1 ? b : P;
      if (N > I) {
        R = C.lastIndexOf(';', N - 1) + 1;
        continue;
      }
      const O = f(C, R, N),
        _ = h(C, N, O),
        z = C.slice(O, _);
      if (w[z] === void 0) {
        let V = f(C, N + 1, I),
          G = h(C, I, V);
        const x = E(C.slice(V, G));
        w[z] = x;
      }
      R = I + 1;
    } while (R < b);
    return w;
  }
  function f(C, k, w) {
    do {
      const b = C.charCodeAt(k);
      if (b !== 32 && b !== 9) return k;
    } while (++k < w);
    return w;
  }
  function h(C, k, w) {
    for (; k > w; ) {
      const b = C.charCodeAt(--k);
      if (b !== 32 && b !== 9) return k + 1;
    }
    return w;
  }
  function m(C, k, w) {
    const b = (w == null ? void 0 : w.encode) || encodeURIComponent;
    if (!e.test(C)) throw new TypeError(`argument name is invalid: ${C}`);
    const E = b(k);
    if (!r.test(E)) throw new TypeError(`argument val is invalid: ${k}`);
    let R = C + '=' + E;
    if (!w) return R;
    if (w.maxAge !== void 0) {
      if (!Number.isInteger(w.maxAge))
        throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);
      R += '; Max-Age=' + w.maxAge;
    }
    if (w.domain) {
      if (!o.test(w.domain))
        throw new TypeError(`option domain is invalid: ${w.domain}`);
      R += '; Domain=' + w.domain;
    }
    if (w.path) {
      if (!s.test(w.path))
        throw new TypeError(`option path is invalid: ${w.path}`);
      R += '; Path=' + w.path;
    }
    if (w.expires) {
      if (!v(w.expires) || !Number.isFinite(w.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${w.expires}`);
      R += '; Expires=' + w.expires.toUTCString();
    }
    if (
      (w.httpOnly && (R += '; HttpOnly'),
      w.secure && (R += '; Secure'),
      w.partitioned && (R += '; Partitioned'),
      w.priority)
    )
      switch (
        typeof w.priority == 'string' ? w.priority.toLowerCase() : void 0
      ) {
        case 'low':
          R += '; Priority=Low';
          break;
        case 'medium':
          R += '; Priority=Medium';
          break;
        case 'high':
          R += '; Priority=High';
          break;
        default:
          throw new TypeError(`option priority is invalid: ${w.priority}`);
      }
    if (w.sameSite)
      switch (
        typeof w.sameSite == 'string' ? w.sameSite.toLowerCase() : w.sameSite
      ) {
        case !0:
        case 'strict':
          R += '; SameSite=Strict';
          break;
        case 'lax':
          R += '; SameSite=Lax';
          break;
        case 'none':
          R += '; SameSite=None';
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${w.sameSite}`);
      }
    return R;
  }
  function g(C) {
    if (C.indexOf('%') === -1) return C;
    try {
      return decodeURIComponent(C);
    } catch {
      return C;
    }
  }
  function v(C) {
    return a.call(C) === '[object Date]';
  }
  return Bi;
}
c1();
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Kh = 'popstate';
function d1(e = {}) {
  function r(s, a) {
    let { pathname: u, search: c, hash: f } = s.location;
    return Fc(
      '',
      { pathname: u, search: c, hash: f },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default',
    );
  }
  function o(s, a) {
    return typeof a == 'string' ? a : Zi(a);
  }
  return p1(r, o, null, e);
}
function tt(e, r) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(r);
}
function En(e, r) {
  if (!e) {
    typeof console < 'u' && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function f1() {
  return Math.random().toString(36).substring(2, 10);
}
function qh(e, r) {
  return { usr: e.state, key: e.key, idx: r };
}
function Fc(e, r, o = null, s) {
  return {
    pathname: typeof e == 'string' ? e : e.pathname,
    search: '',
    hash: '',
    ...(typeof r == 'string' ? Vo(r) : r),
    state: o,
    key: (r && r.key) || s || f1(),
  };
}
function Zi({ pathname: e = '/', search: r = '', hash: o = '' }) {
  return (
    r && r !== '?' && (e += r.charAt(0) === '?' ? r : '?' + r),
    o && o !== '#' && (e += o.charAt(0) === '#' ? o : '#' + o),
    e
  );
}
function Vo(e) {
  let r = {};
  if (e) {
    let o = e.indexOf('#');
    o >= 0 && ((r.hash = e.substring(o)), (e = e.substring(0, o)));
    let s = e.indexOf('?');
    s >= 0 && ((r.search = e.substring(s)), (e = e.substring(0, s))),
      e && (r.pathname = e);
  }
  return r;
}
function p1(e, r, o, s = {}) {
  let { window: a = document.defaultView, v5Compat: u = !1 } = s,
    c = a.history,
    f = 'POP',
    h = null,
    m = g();
  m == null && ((m = 0), c.replaceState({ ...c.state, idx: m }, ''));
  function g() {
    return (c.state || { idx: null }).idx;
  }
  function v() {
    f = 'POP';
    let E = g(),
      R = E == null ? null : E - m;
    (m = E), h && h({ action: f, location: b.location, delta: R });
  }
  function C(E, R) {
    f = 'PUSH';
    let N = Fc(b.location, E, R);
    m = g() + 1;
    let P = qh(N, m),
      I = b.createHref(N);
    try {
      c.pushState(P, '', I);
    } catch (O) {
      if (O instanceof DOMException && O.name === 'DataCloneError') throw O;
      a.location.assign(I);
    }
    u && h && h({ action: f, location: b.location, delta: 1 });
  }
  function k(E, R) {
    f = 'REPLACE';
    let N = Fc(b.location, E, R);
    m = g();
    let P = qh(N, m),
      I = b.createHref(N);
    c.replaceState(P, '', I),
      u && h && h({ action: f, location: b.location, delta: 0 });
  }
  function w(E) {
    let R = a.location.origin !== 'null' ? a.location.origin : a.location.href,
      N = typeof E == 'string' ? E : Zi(E);
    return (
      (N = N.replace(/ $/, '%20')),
      tt(
        R,
        `No window.location.(origin|href) available to create URL for href: ${N}`,
      ),
      new URL(N, R)
    );
  }
  let b = {
    get action() {
      return f;
    },
    get location() {
      return e(a, c);
    },
    listen(E) {
      if (h) throw new Error('A history only accepts one active listener');
      return (
        a.addEventListener(Kh, v),
        (h = E),
        () => {
          a.removeEventListener(Kh, v), (h = null);
        }
      );
    },
    createHref(E) {
      return r(a, E);
    },
    createURL: w,
    encodeLocation(E) {
      let R = w(E);
      return { pathname: R.pathname, search: R.search, hash: R.hash };
    },
    push: C,
    replace: k,
    go(E) {
      return c.go(E);
    },
  };
  return b;
}
function xg(e, r, o = '/') {
  return h1(e, r, o, !1);
}
function h1(e, r, o, s) {
  let a = typeof r == 'string' ? Vo(r) : r,
    u = Nr(a.pathname || '/', o);
  if (u == null) return null;
  let c = Sg(e);
  m1(c);
  let f = null;
  for (let h = 0; f == null && h < c.length; ++h) {
    let m = R1(u);
    f = E1(c[h], m, s);
  }
  return f;
}
function Sg(e, r = [], o = [], s = '') {
  let a = (u, c, f) => {
    let h = {
      relativePath: f === void 0 ? u.path || '' : f,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: c,
      route: u,
    };
    h.relativePath.startsWith('/') &&
      (tt(
        h.relativePath.startsWith(s),
        `Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (h.relativePath = h.relativePath.slice(s.length)));
    let m = ir([s, h.relativePath]),
      g = o.concat(h);
    u.children &&
      u.children.length > 0 &&
      (tt(
        u.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`,
      ),
      Sg(u.children, r, g, m)),
      !(u.path == null && !u.index) &&
        r.push({ path: m, score: C1(m, u.index), routesMeta: g });
  };
  return (
    e.forEach((u, c) => {
      var f;
      if (u.path === '' || !((f = u.path) != null && f.includes('?'))) a(u, c);
      else for (let h of wg(u.path)) a(u, c, h);
    }),
    r
  );
}
function wg(e) {
  let r = e.split('/');
  if (r.length === 0) return [];
  let [o, ...s] = r,
    a = o.endsWith('?'),
    u = o.replace(/\?$/, '');
  if (s.length === 0) return a ? [u, ''] : [u];
  let c = wg(s.join('/')),
    f = [];
  return (
    f.push(...c.map((h) => (h === '' ? u : [u, h].join('/')))),
    a && f.push(...c),
    f.map((h) => (e.startsWith('/') && h === '' ? '/' : h))
  );
}
function m1(e) {
  e.sort((r, o) =>
    r.score !== o.score
      ? o.score - r.score
      : b1(
          r.routesMeta.map((s) => s.childrenIndex),
          o.routesMeta.map((s) => s.childrenIndex),
        ),
  );
}
var g1 = /^:[\w-]+$/,
  y1 = 3,
  v1 = 2,
  x1 = 1,
  S1 = 10,
  w1 = -2,
  Gh = (e) => e === '*';
function C1(e, r) {
  let o = e.split('/'),
    s = o.length;
  return (
    o.some(Gh) && (s += w1),
    r && (s += v1),
    o
      .filter((a) => !Gh(a))
      .reduce((a, u) => a + (g1.test(u) ? y1 : u === '' ? x1 : S1), s)
  );
}
function b1(e, r) {
  return e.length === r.length && e.slice(0, -1).every((s, a) => s === r[a])
    ? e[e.length - 1] - r[r.length - 1]
    : 0;
}
function E1(e, r, o = !1) {
  let { routesMeta: s } = e,
    a = {},
    u = '/',
    c = [];
  for (let f = 0; f < s.length; ++f) {
    let h = s[f],
      m = f === s.length - 1,
      g = u === '/' ? r : r.slice(u.length) || '/',
      v = Qa(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: m },
        g,
      ),
      C = h.route;
    if (
      (!v &&
        m &&
        o &&
        !s[s.length - 1].route.index &&
        (v = Qa(
          { path: h.relativePath, caseSensitive: h.caseSensitive, end: !1 },
          g,
        )),
      !v)
    )
      return null;
    Object.assign(a, v.params),
      c.push({
        params: a,
        pathname: ir([u, v.pathname]),
        pathnameBase: O1(ir([u, v.pathnameBase])),
        route: C,
      }),
      v.pathnameBase !== '/' && (u = ir([u, v.pathnameBase]));
  }
  return c;
}
function Qa(e, r) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [o, s] = k1(e.path, e.caseSensitive, e.end),
    a = r.match(o);
  if (!a) return null;
  let u = a[0],
    c = u.replace(/(.)\/+$/, '$1'),
    f = a.slice(1);
  return {
    params: s.reduce((m, { paramName: g, isOptional: v }, C) => {
      if (g === '*') {
        let w = f[C] || '';
        c = u.slice(0, u.length - w.length).replace(/(.)\/+$/, '$1');
      }
      const k = f[C];
      return (
        v && !k ? (m[g] = void 0) : (m[g] = (k || '').replace(/%2F/g, '/')), m
      );
    }, {}),
    pathname: u,
    pathnameBase: c,
    pattern: e,
  };
}
function k1(e, r = !1, o = !0) {
  En(
    e === '*' || !e.endsWith('*') || e.endsWith('/*'),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      '/*',
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      '/*',
    )}".`,
  );
  let s = [],
    a =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (c, f, h) => (
            s.push({ paramName: f, isOptional: h != null }),
            h ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    e.endsWith('*')
      ? (s.push({ paramName: '*' }),
        (a += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : o
      ? (a += '\\/*$')
      : e !== '' && e !== '/' && (a += '(?:(?=\\/|$))'),
    [new RegExp(a, r ? void 0 : 'i'), s]
  );
}
function R1(e) {
  try {
    return e
      .split('/')
      .map((r) => decodeURIComponent(r).replace(/\//g, '%2F'))
      .join('/');
  } catch (r) {
    return (
      En(
        !1,
        `The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
      ),
      e
    );
  }
}
function Nr(e, r) {
  if (r === '/') return e;
  if (!e.toLowerCase().startsWith(r.toLowerCase())) return null;
  let o = r.endsWith('/') ? r.length - 1 : r.length,
    s = e.charAt(o);
  return s && s !== '/' ? null : e.slice(o) || '/';
}
function P1(e, r = '/') {
  let {
    pathname: o,
    search: s = '',
    hash: a = '',
  } = typeof e == 'string' ? Vo(e) : e;
  return {
    pathname: o ? (o.startsWith('/') ? o : T1(o, r)) : r,
    search: N1(s),
    hash: A1(a),
  };
}
function T1(e, r) {
  let o = r.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((a) => {
      a === '..' ? o.length > 1 && o.pop() : a !== '.' && o.push(a);
    }),
    o.length > 1 ? o.join('/') : '/'
  );
}
function Sc(e, r, o, s) {
  return `Cannot include a '${e}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    s,
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function I1(e) {
  return e.filter(
    (r, o) => o === 0 || (r.route.path && r.route.path.length > 0),
  );
}
function fd(e) {
  let r = I1(e);
  return r.map((o, s) => (s === r.length - 1 ? o.pathname : o.pathnameBase));
}
function pd(e, r, o, s = !1) {
  let a;
  typeof e == 'string'
    ? (a = Vo(e))
    : ((a = { ...e }),
      tt(
        !a.pathname || !a.pathname.includes('?'),
        Sc('?', 'pathname', 'search', a),
      ),
      tt(
        !a.pathname || !a.pathname.includes('#'),
        Sc('#', 'pathname', 'hash', a),
      ),
      tt(!a.search || !a.search.includes('#'), Sc('#', 'search', 'hash', a)));
  let u = e === '' || a.pathname === '',
    c = u ? '/' : a.pathname,
    f;
  if (c == null) f = o;
  else {
    let v = r.length - 1;
    if (!s && c.startsWith('..')) {
      let C = c.split('/');
      for (; C[0] === '..'; ) C.shift(), (v -= 1);
      a.pathname = C.join('/');
    }
    f = v >= 0 ? r[v] : '/';
  }
  let h = P1(a, f),
    m = c && c !== '/' && c.endsWith('/'),
    g = (u || c === '.') && o.endsWith('/');
  return !h.pathname.endsWith('/') && (m || g) && (h.pathname += '/'), h;
}
var ir = (e) => e.join('/').replace(/\/\/+/g, '/'),
  O1 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  N1 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  A1 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function L1(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
var Cg = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Cg);
var $1 = ['GET', ...Cg];
new Set($1);
var Ko = S.createContext(null);
Ko.displayName = 'DataRouter';
var ol = S.createContext(null);
ol.displayName = 'DataRouterState';
var bg = S.createContext({ isTransitioning: !1 });
bg.displayName = 'ViewTransition';
var M1 = S.createContext(new Map());
M1.displayName = 'Fetchers';
var _1 = S.createContext(null);
_1.displayName = 'Await';
var Pn = S.createContext(null);
Pn.displayName = 'Navigation';
var us = S.createContext(null);
us.displayName = 'Location';
var Wn = S.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Wn.displayName = 'Route';
var hd = S.createContext(null);
hd.displayName = 'RouteError';
function z1(e, { relative: r } = {}) {
  tt(
    qo(),
    'useHref() may be used only in the context of a <Router> component.',
  );
  let { basename: o, navigator: s } = S.useContext(Pn),
    { hash: a, pathname: u, search: c } = cs(e, { relative: r }),
    f = u;
  return (
    o !== '/' && (f = u === '/' ? o : ir([o, u])),
    s.createHref({ pathname: f, search: c, hash: a })
  );
}
function qo() {
  return S.useContext(us) != null;
}
function Lr() {
  return (
    tt(
      qo(),
      'useLocation() may be used only in the context of a <Router> component.',
    ),
    S.useContext(us).location
  );
}
var Eg =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function kg(e) {
  S.useContext(Pn).static || S.useLayoutEffect(e);
}
function md() {
  let { isDataRoute: e } = S.useContext(Wn);
  return e ? X1() : F1();
}
function F1() {
  tt(
    qo(),
    'useNavigate() may be used only in the context of a <Router> component.',
  );
  let e = S.useContext(Ko),
    { basename: r, navigator: o } = S.useContext(Pn),
    { matches: s } = S.useContext(Wn),
    { pathname: a } = Lr(),
    u = JSON.stringify(fd(s)),
    c = S.useRef(!1);
  return (
    kg(() => {
      c.current = !0;
    }),
    S.useCallback(
      (h, m = {}) => {
        if ((En(c.current, Eg), !c.current)) return;
        if (typeof h == 'number') {
          o.go(h);
          return;
        }
        let g = pd(h, JSON.parse(u), a, m.relative === 'path');
        e == null &&
          r !== '/' &&
          (g.pathname = g.pathname === '/' ? r : ir([r, g.pathname])),
          (m.replace ? o.replace : o.push)(g, m.state, m);
      },
      [r, o, u, a, e],
    )
  );
}
S.createContext(null);
function cs(e, { relative: r } = {}) {
  let { matches: o } = S.useContext(Wn),
    { pathname: s } = Lr(),
    a = JSON.stringify(fd(o));
  return S.useMemo(() => pd(e, JSON.parse(a), s, r === 'path'), [e, a, s, r]);
}
function B1(e, r) {
  return Rg(e, r);
}
function Rg(e, r, o, s) {
  var R;
  tt(
    qo(),
    'useRoutes() may be used only in the context of a <Router> component.',
  );
  let { navigator: a } = S.useContext(Pn),
    { matches: u } = S.useContext(Wn),
    c = u[u.length - 1],
    f = c ? c.params : {},
    h = c ? c.pathname : '/',
    m = c ? c.pathnameBase : '/',
    g = c && c.route;
  {
    let N = (g && g.path) || '';
    Pg(
      h,
      !g || N.endsWith('*') || N.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${
        N === '/' ? '*' : `${N}/*`
      }">.`,
    );
  }
  let v = Lr(),
    C;
  if (r) {
    let N = typeof r == 'string' ? Vo(r) : r;
    tt(
      m === '/' || ((R = N.pathname) == null ? void 0 : R.startsWith(m)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${N.pathname}" was given in the \`location\` prop.`,
    ),
      (C = N);
  } else C = v;
  let k = C.pathname || '/',
    w = k;
  if (m !== '/') {
    let N = m.replace(/^\//, '').split('/');
    w = '/' + k.replace(/^\//, '').split('/').slice(N.length).join('/');
  }
  let b = xg(e, { pathname: w });
  En(
    g || b != null,
    `No routes matched location "${C.pathname}${C.search}${C.hash}" `,
  ),
    En(
      b == null ||
        b[b.length - 1].route.element !== void 0 ||
        b[b.length - 1].route.Component !== void 0 ||
        b[b.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    );
  let E = H1(
    b &&
      b.map((N) =>
        Object.assign({}, N, {
          params: Object.assign({}, f, N.params),
          pathname: ir([
            m,
            a.encodeLocation
              ? a.encodeLocation(N.pathname).pathname
              : N.pathname,
          ]),
          pathnameBase:
            N.pathnameBase === '/'
              ? m
              : ir([
                  m,
                  a.encodeLocation
                    ? a.encodeLocation(N.pathnameBase).pathname
                    : N.pathnameBase,
                ]),
        }),
      ),
    u,
    o,
    s,
  );
  return r && E
    ? S.createElement(
        us.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...C,
            },
            navigationType: 'POP',
          },
        },
        E,
      )
    : E;
}
function D1() {
  let e = Q1(),
    r = L1(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    o = e instanceof Error ? e.stack : null,
    s = 'rgba(200,200,200, 0.5)',
    a = { padding: '0.5rem', backgroundColor: s },
    u = { padding: '2px 4px', backgroundColor: s },
    c = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', e),
    (c = S.createElement(
      S.Fragment,
      null,
      S.createElement('p', null, '💿 Hey developer 👋'),
      S.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        S.createElement('code', { style: u }, 'ErrorBoundary'),
        ' or',
        ' ',
        S.createElement('code', { style: u }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    S.createElement(
      S.Fragment,
      null,
      S.createElement('h2', null, 'Unexpected Application Error!'),
      S.createElement('h3', { style: { fontStyle: 'italic' } }, r),
      o ? S.createElement('pre', { style: a }, o) : null,
      c,
    )
  );
}
var j1 = S.createElement(D1, null),
  U1 = class extends S.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, r) {
      return r.location !== e.location ||
        (r.revalidation !== 'idle' && e.revalidation === 'idle')
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : r.error,
            location: r.location,
            revalidation: e.revalidation || r.revalidation,
          };
    }
    componentDidCatch(e, r) {
      console.error(
        'React Router caught the following error during render',
        e,
        r,
      );
    }
    render() {
      return this.state.error !== void 0
        ? S.createElement(
            Wn.Provider,
            { value: this.props.routeContext },
            S.createElement(hd.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function W1({ routeContext: e, match: r, children: o }) {
  let s = S.useContext(Ko);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = r.route.id),
    S.createElement(Wn.Provider, { value: e }, o)
  );
}
function H1(e, r = [], o = null, s = null) {
  if (e == null) {
    if (!o) return null;
    if (o.errors) e = o.matches;
    else if (r.length === 0 && !o.initialized && o.matches.length > 0)
      e = o.matches;
    else return null;
  }
  let a = e,
    u = o == null ? void 0 : o.errors;
  if (u != null) {
    let h = a.findIndex(
      (m) => m.route.id && (u == null ? void 0 : u[m.route.id]) !== void 0,
    );
    tt(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        u,
      ).join(',')}`,
    ),
      (a = a.slice(0, Math.min(a.length, h + 1)));
  }
  let c = !1,
    f = -1;
  if (o)
    for (let h = 0; h < a.length; h++) {
      let m = a[h];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (f = h),
        m.route.id)
      ) {
        let { loaderData: g, errors: v } = o,
          C =
            m.route.loader &&
            !g.hasOwnProperty(m.route.id) &&
            (!v || v[m.route.id] === void 0);
        if (m.route.lazy || C) {
          (c = !0), f >= 0 ? (a = a.slice(0, f + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((h, m, g) => {
    let v,
      C = !1,
      k = null,
      w = null;
    o &&
      ((v = u && m.route.id ? u[m.route.id] : void 0),
      (k = m.route.errorElement || j1),
      c &&
        (f < 0 && g === 0
          ? (Pg(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration',
            ),
            (C = !0),
            (w = null))
          : f === g &&
            ((C = !0), (w = m.route.hydrateFallbackElement || null))));
    let b = r.concat(a.slice(0, g + 1)),
      E = () => {
        let R;
        return (
          v
            ? (R = k)
            : C
            ? (R = w)
            : m.route.Component
            ? (R = S.createElement(m.route.Component, null))
            : m.route.element
            ? (R = m.route.element)
            : (R = h),
          S.createElement(W1, {
            match: m,
            routeContext: { outlet: h, matches: b, isDataRoute: o != null },
            children: R,
          })
        );
      };
    return o && (m.route.ErrorBoundary || m.route.errorElement || g === 0)
      ? S.createElement(U1, {
          location: o.location,
          revalidation: o.revalidation,
          component: k,
          error: v,
          children: E(),
          routeContext: { outlet: null, matches: b, isDataRoute: !0 },
        })
      : E();
  }, null);
}
function gd(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function V1(e) {
  let r = S.useContext(Ko);
  return tt(r, gd(e)), r;
}
function K1(e) {
  let r = S.useContext(ol);
  return tt(r, gd(e)), r;
}
function q1(e) {
  let r = S.useContext(Wn);
  return tt(r, gd(e)), r;
}
function yd(e) {
  let r = q1(e),
    o = r.matches[r.matches.length - 1];
  return (
    tt(
      o.route.id,
      `${e} can only be used on routes that contain a unique "id"`,
    ),
    o.route.id
  );
}
function G1() {
  return yd('useRouteId');
}
function Q1() {
  var s;
  let e = S.useContext(hd),
    r = K1('useRouteError'),
    o = yd('useRouteError');
  return e !== void 0 ? e : (s = r.errors) == null ? void 0 : s[o];
}
function X1() {
  let { router: e } = V1('useNavigate'),
    r = yd('useNavigate'),
    o = S.useRef(!1);
  return (
    kg(() => {
      o.current = !0;
    }),
    S.useCallback(
      async (a, u = {}) => {
        En(o.current, Eg),
          o.current &&
            (typeof a == 'number'
              ? e.navigate(a)
              : await e.navigate(a, { fromRouteId: r, ...u }));
      },
      [e, r],
    )
  );
}
var Qh = {};
function Pg(e, r, o) {
  !r && !Qh[e] && ((Qh[e] = !0), En(!1, o));
}
S.memo(Y1);
function Y1({ routes: e, future: r, state: o }) {
  return Rg(e, void 0, o, r);
}
function J1({ to: e, replace: r, state: o, relative: s }) {
  tt(
    qo(),
    '<Navigate> may be used only in the context of a <Router> component.',
  );
  let { static: a } = S.useContext(Pn);
  En(
    !a,
    '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.',
  );
  let { matches: u } = S.useContext(Wn),
    { pathname: c } = Lr(),
    f = md(),
    h = pd(e, fd(u), c, s === 'path'),
    m = JSON.stringify(h);
  return (
    S.useEffect(() => {
      f(JSON.parse(m), { replace: r, state: o, relative: s });
    }, [f, m, s, r, o]),
    null
  );
}
function za(e) {
  tt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.',
  );
}
function Z1({
  basename: e = '/',
  children: r = null,
  location: o,
  navigationType: s = 'POP',
  navigator: a,
  static: u = !1,
}) {
  tt(
    !qo(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let c = e.replace(/^\/*/, '/'),
    f = S.useMemo(
      () => ({ basename: c, navigator: a, static: u, future: {} }),
      [c, a, u],
    );
  typeof o == 'string' && (o = Vo(o));
  let {
      pathname: h = '/',
      search: m = '',
      hash: g = '',
      state: v = null,
      key: C = 'default',
    } = o,
    k = S.useMemo(() => {
      let w = Nr(h, c);
      return w == null
        ? null
        : {
            location: { pathname: w, search: m, hash: g, state: v, key: C },
            navigationType: s,
          };
    }, [c, h, m, g, v, C, s]);
  return (
    En(
      k != null,
      `<Router basename="${c}"> is not able to match the URL "${h}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    k == null
      ? null
      : S.createElement(
          Pn.Provider,
          { value: f },
          S.createElement(us.Provider, { children: r, value: k }),
        )
  );
}
function ex({ children: e, location: r }) {
  return B1(Bc(e), r);
}
function Bc(e, r = []) {
  let o = [];
  return (
    S.Children.forEach(e, (s, a) => {
      if (!S.isValidElement(s)) return;
      let u = [...r, a];
      if (s.type === S.Fragment) {
        o.push.apply(o, Bc(s.props.children, u));
        return;
      }
      tt(
        s.type === za,
        `[${
          typeof s.type == 'string' ? s.type : s.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        tt(
          !s.props.index || !s.props.children,
          'An index route cannot have child routes.',
        );
      let c = {
        id: s.props.id || u.join('-'),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        loader: s.props.loader,
        action: s.props.action,
        hydrateFallbackElement: s.props.hydrateFallbackElement,
        HydrateFallback: s.props.HydrateFallback,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.hasErrorBoundary === !0 ||
          s.props.ErrorBoundary != null ||
          s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      s.props.children && (c.children = Bc(s.props.children, u)), o.push(c);
    }),
    o
  );
}
var Fa = 'get',
  Ba = 'application/x-www-form-urlencoded';
function il(e) {
  return e != null && typeof e.tagName == 'string';
}
function tx(e) {
  return il(e) && e.tagName.toLowerCase() === 'button';
}
function nx(e) {
  return il(e) && e.tagName.toLowerCase() === 'form';
}
function rx(e) {
  return il(e) && e.tagName.toLowerCase() === 'input';
}
function ox(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ix(e, r) {
  return e.button === 0 && (!r || r === '_self') && !ox(e);
}
var Ta = null;
function sx() {
  if (Ta === null)
    try {
      new FormData(document.createElement('form'), 0), (Ta = !1);
    } catch {
      Ta = !0;
    }
  return Ta;
}
var ax = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function wc(e) {
  return e != null && !ax.has(e)
    ? (En(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ba}"`,
      ),
      null)
    : e;
}
function lx(e, r) {
  let o, s, a, u, c;
  if (nx(e)) {
    let f = e.getAttribute('action');
    (s = f ? Nr(f, r) : null),
      (o = e.getAttribute('method') || Fa),
      (a = wc(e.getAttribute('enctype')) || Ba),
      (u = new FormData(e));
  } else if (tx(e) || (rx(e) && (e.type === 'submit' || e.type === 'image'))) {
    let f = e.form;
    if (f == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let h = e.getAttribute('formaction') || f.getAttribute('action');
    if (
      ((s = h ? Nr(h, r) : null),
      (o = e.getAttribute('formmethod') || f.getAttribute('method') || Fa),
      (a =
        wc(e.getAttribute('formenctype')) ||
        wc(f.getAttribute('enctype')) ||
        Ba),
      (u = new FormData(f, e)),
      !sx())
    ) {
      let { name: m, type: g, value: v } = e;
      if (g === 'image') {
        let C = m ? `${m}.` : '';
        u.append(`${C}x`, '0'), u.append(`${C}y`, '0');
      } else m && u.append(m, v);
    }
  } else {
    if (il(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (o = Fa), (s = null), (a = Ba), (c = e);
  }
  return (
    u && a === 'text/plain' && ((c = u), (u = void 0)),
    { action: s, method: o.toLowerCase(), encType: a, formData: u, body: c }
  );
}
function vd(e, r) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(r);
}
async function ux(e, r) {
  if (e.id in r) return r[e.id];
  try {
    let o = await import(e.module);
    return (r[e.id] = o), o;
  } catch (o) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function cx(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === 'preload' &&
      typeof e.imageSrcSet == 'string' &&
      typeof e.imageSizes == 'string'
    : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function dx(e, r, o) {
  let s = await Promise.all(
    e.map(async (a) => {
      let u = r.routes[a.route.id];
      if (u) {
        let c = await ux(u, o);
        return c.links ? c.links() : [];
      }
      return [];
    }),
  );
  return mx(
    s
      .flat(1)
      .filter(cx)
      .filter((a) => a.rel === 'stylesheet' || a.rel === 'preload')
      .map((a) =>
        a.rel === 'stylesheet'
          ? { ...a, rel: 'prefetch', as: 'style' }
          : { ...a, rel: 'prefetch' },
      ),
  );
}
function Xh(e, r, o, s, a, u) {
  let c = (h, m) => (o[m] ? h.route.id !== o[m].route.id : !0),
    f = (h, m) => {
      var g;
      return (
        o[m].pathname !== h.pathname ||
        (((g = o[m].route.path) == null ? void 0 : g.endsWith('*')) &&
          o[m].params['*'] !== h.params['*'])
      );
    };
  return u === 'assets'
    ? r.filter((h, m) => c(h, m) || f(h, m))
    : u === 'data'
    ? r.filter((h, m) => {
        var v;
        let g = s.routes[h.route.id];
        if (!g || !g.hasLoader) return !1;
        if (c(h, m) || f(h, m)) return !0;
        if (h.route.shouldRevalidate) {
          let C = h.route.shouldRevalidate({
            currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
            currentParams: ((v = o[0]) == null ? void 0 : v.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: h.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof C == 'boolean') return C;
        }
        return !0;
      })
    : [];
}
function fx(e, r) {
  return px(
    e
      .map((o) => {
        let s = r.routes[o.route.id];
        if (!s) return [];
        let a = [s.module];
        return s.imports && (a = a.concat(s.imports)), a;
      })
      .flat(1),
  );
}
function px(e) {
  return [...new Set(e)];
}
function hx(e) {
  let r = {},
    o = Object.keys(e).sort();
  for (let s of o) r[s] = e[s];
  return r;
}
function mx(e, r) {
  let o = new Set();
  return (
    new Set(r),
    e.reduce((s, a) => {
      let u = JSON.stringify(hx(a));
      return o.has(u) || (o.add(u), s.push({ key: u, link: a })), s;
    }, [])
  );
}
function gx(e) {
  let r =
    typeof e == 'string'
      ? new URL(
          e,
          typeof window > 'u'
            ? 'server://singlefetch/'
            : window.location.origin,
        )
      : e;
  return (
    r.pathname === '/'
      ? (r.pathname = '_root.data')
      : (r.pathname = `${r.pathname.replace(/\/$/, '')}.data`),
    r
  );
}
function yx() {
  let e = S.useContext(Ko);
  return (
    vd(
      e,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    e
  );
}
function vx() {
  let e = S.useContext(ol);
  return (
    vd(
      e,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    e
  );
}
var xd = S.createContext(void 0);
xd.displayName = 'FrameworkContext';
function Tg() {
  let e = S.useContext(xd);
  return (
    vd(e, 'You must render this element inside a <HydratedRouter> element'), e
  );
}
function xx(e, r) {
  let o = S.useContext(xd),
    [s, a] = S.useState(!1),
    [u, c] = S.useState(!1),
    {
      onFocus: f,
      onBlur: h,
      onMouseEnter: m,
      onMouseLeave: g,
      onTouchStart: v,
    } = r,
    C = S.useRef(null);
  S.useEffect(() => {
    if ((e === 'render' && c(!0), e === 'viewport')) {
      let b = (R) => {
          R.forEach((N) => {
            c(N.isIntersecting);
          });
        },
        E = new IntersectionObserver(b, { threshold: 0.5 });
      return (
        C.current && E.observe(C.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [e]),
    S.useEffect(() => {
      if (s) {
        let b = setTimeout(() => {
          c(!0);
        }, 100);
        return () => {
          clearTimeout(b);
        };
      }
    }, [s]);
  let k = () => {
      a(!0);
    },
    w = () => {
      a(!1), c(!1);
    };
  return o
    ? e !== 'intent'
      ? [u, C, {}]
      : [
          u,
          C,
          {
            onFocus: Di(f, k),
            onBlur: Di(h, w),
            onMouseEnter: Di(m, k),
            onMouseLeave: Di(g, w),
            onTouchStart: Di(v, k),
          },
        ]
    : [!1, C, {}];
}
function Di(e, r) {
  return (o) => {
    e && e(o), o.defaultPrevented || r(o);
  };
}
function Sx({ page: e, ...r }) {
  let { router: o } = yx(),
    s = S.useMemo(() => xg(o.routes, e, o.basename), [o.routes, e, o.basename]);
  return s ? S.createElement(Cx, { page: e, matches: s, ...r }) : null;
}
function wx(e) {
  let { manifest: r, routeModules: o } = Tg(),
    [s, a] = S.useState([]);
  return (
    S.useEffect(() => {
      let u = !1;
      return (
        dx(e, r, o).then((c) => {
          u || a(c);
        }),
        () => {
          u = !0;
        }
      );
    }, [e, r, o]),
    s
  );
}
function Cx({ page: e, matches: r, ...o }) {
  let s = Lr(),
    { manifest: a, routeModules: u } = Tg(),
    { loaderData: c, matches: f } = vx(),
    h = S.useMemo(() => Xh(e, r, f, a, s, 'data'), [e, r, f, a, s]),
    m = S.useMemo(() => Xh(e, r, f, a, s, 'assets'), [e, r, f, a, s]),
    g = S.useMemo(() => {
      if (e === s.pathname + s.search + s.hash) return [];
      let k = new Set(),
        w = !1;
      if (
        (r.forEach((E) => {
          var N;
          let R = a.routes[E.route.id];
          !R ||
            !R.hasLoader ||
            ((!h.some((P) => P.route.id === E.route.id) &&
              E.route.id in c &&
              (N = u[E.route.id]) != null &&
              N.shouldRevalidate) ||
            R.hasClientLoader
              ? (w = !0)
              : k.add(E.route.id));
        }),
        k.size === 0)
      )
        return [];
      let b = gx(e);
      return (
        w &&
          k.size > 0 &&
          b.searchParams.set(
            '_routes',
            r
              .filter((E) => k.has(E.route.id))
              .map((E) => E.route.id)
              .join(','),
          ),
        [b.pathname + b.search]
      );
    }, [c, s, a, h, r, e, u]),
    v = S.useMemo(() => fx(m, a), [m, a]),
    C = wx(m);
  return S.createElement(
    S.Fragment,
    null,
    g.map((k) =>
      S.createElement('link', {
        key: k,
        rel: 'prefetch',
        as: 'fetch',
        href: k,
        ...o,
      }),
    ),
    v.map((k) =>
      S.createElement('link', { key: k, rel: 'modulepreload', href: k, ...o }),
    ),
    C.map(({ key: k, link: w }) => S.createElement('link', { key: k, ...w })),
  );
}
function bx(...e) {
  return (r) => {
    e.forEach((o) => {
      typeof o == 'function' ? o(r) : o != null && (o.current = r);
    });
  };
}
var Ig =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  Ig && (window.__reactRouterVersion = '7.1.1');
} catch {}
function Ex({ basename: e, children: r, window: o }) {
  let s = S.useRef();
  s.current == null && (s.current = d1({ window: o, v5Compat: !0 }));
  let a = s.current,
    [u, c] = S.useState({ action: a.action, location: a.location }),
    f = S.useCallback(
      (h) => {
        S.startTransition(() => c(h));
      },
      [c],
    );
  return (
    S.useLayoutEffect(() => a.listen(f), [a, f]),
    S.createElement(Z1, {
      basename: e,
      children: r,
      location: u.location,
      navigationType: u.action,
      navigator: a,
    })
  );
}
var Og = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ng = S.forwardRef(function (
    {
      onClick: r,
      discover: o = 'render',
      prefetch: s = 'none',
      relative: a,
      reloadDocument: u,
      replace: c,
      state: f,
      target: h,
      to: m,
      preventScrollReset: g,
      viewTransition: v,
      ...C
    },
    k,
  ) {
    let { basename: w } = S.useContext(Pn),
      b = typeof m == 'string' && Og.test(m),
      E,
      R = !1;
    if (typeof m == 'string' && b && ((E = m), Ig))
      try {
        let G = new URL(window.location.href),
          x = m.startsWith('//') ? new URL(G.protocol + m) : new URL(m),
          j = Nr(x.pathname, w);
        x.origin === G.origin && j != null
          ? (m = j + x.search + x.hash)
          : (R = !0);
      } catch {
        En(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let N = z1(m, { relative: a }),
      [P, I, O] = xx(s, C),
      _ = Tx(m, {
        replace: c,
        state: f,
        target: h,
        preventScrollReset: g,
        relative: a,
        viewTransition: v,
      });
    function z(G) {
      r && r(G), G.defaultPrevented || _(G);
    }
    let V = S.createElement('a', {
      ...C,
      ...O,
      href: E || N,
      onClick: R || u ? r : z,
      ref: bx(k, I),
      target: h,
      'data-discover': !b && o === 'render' ? 'true' : void 0,
    });
    return P && !b
      ? S.createElement(S.Fragment, null, V, S.createElement(Sx, { page: N }))
      : V;
  });
Ng.displayName = 'Link';
var kx = S.forwardRef(function (
  {
    'aria-current': r = 'page',
    caseSensitive: o = !1,
    className: s = '',
    end: a = !1,
    style: u,
    to: c,
    viewTransition: f,
    children: h,
    ...m
  },
  g,
) {
  let v = cs(c, { relative: m.relative }),
    C = Lr(),
    k = S.useContext(ol),
    { navigator: w, basename: b } = S.useContext(Pn),
    E = k != null && Lx(v) && f === !0,
    R = w.encodeLocation ? w.encodeLocation(v).pathname : v.pathname,
    N = C.pathname,
    P =
      k && k.navigation && k.navigation.location
        ? k.navigation.location.pathname
        : null;
  o ||
    ((N = N.toLowerCase()),
    (P = P ? P.toLowerCase() : null),
    (R = R.toLowerCase())),
    P && b && (P = Nr(P, b) || P);
  const I = R !== '/' && R.endsWith('/') ? R.length - 1 : R.length;
  let O = N === R || (!a && N.startsWith(R) && N.charAt(I) === '/'),
    _ =
      P != null &&
      (P === R || (!a && P.startsWith(R) && P.charAt(R.length) === '/')),
    z = { isActive: O, isPending: _, isTransitioning: E },
    V = O ? r : void 0,
    G;
  typeof s == 'function'
    ? (G = s(z))
    : (G = [
        s,
        O ? 'active' : null,
        _ ? 'pending' : null,
        E ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let x = typeof u == 'function' ? u(z) : u;
  return S.createElement(
    Ng,
    {
      ...m,
      'aria-current': V,
      className: G,
      ref: g,
      style: x,
      to: c,
      viewTransition: f,
    },
    typeof h == 'function' ? h(z) : h,
  );
});
kx.displayName = 'NavLink';
var Rx = S.forwardRef(
  (
    {
      discover: e = 'render',
      fetcherKey: r,
      navigate: o,
      reloadDocument: s,
      replace: a,
      state: u,
      method: c = Fa,
      action: f,
      onSubmit: h,
      relative: m,
      preventScrollReset: g,
      viewTransition: v,
      ...C
    },
    k,
  ) => {
    let w = Nx(),
      b = Ax(f, { relative: m }),
      E = c.toLowerCase() === 'get' ? 'get' : 'post',
      R = typeof f == 'string' && Og.test(f),
      N = (P) => {
        if ((h && h(P), P.defaultPrevented)) return;
        P.preventDefault();
        let I = P.nativeEvent.submitter,
          O = (I == null ? void 0 : I.getAttribute('formmethod')) || c;
        w(I || P.currentTarget, {
          fetcherKey: r,
          method: O,
          navigate: o,
          replace: a,
          state: u,
          relative: m,
          preventScrollReset: g,
          viewTransition: v,
        });
      };
    return S.createElement('form', {
      ref: k,
      method: E,
      action: b,
      onSubmit: s ? h : N,
      ...C,
      'data-discover': !R && e === 'render' ? 'true' : void 0,
    });
  },
);
Rx.displayName = 'Form';
function Px(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ag(e) {
  let r = S.useContext(Ko);
  return tt(r, Px(e)), r;
}
function Tx(
  e,
  {
    target: r,
    replace: o,
    state: s,
    preventScrollReset: a,
    relative: u,
    viewTransition: c,
  } = {},
) {
  let f = md(),
    h = Lr(),
    m = cs(e, { relative: u });
  return S.useCallback(
    (g) => {
      if (ix(g, r)) {
        g.preventDefault();
        let v = o !== void 0 ? o : Zi(h) === Zi(m);
        f(e, {
          replace: v,
          state: s,
          preventScrollReset: a,
          relative: u,
          viewTransition: c,
        });
      }
    },
    [h, f, m, o, s, r, e, a, u, c],
  );
}
var Ix = 0,
  Ox = () => `__${String(++Ix)}__`;
function Nx() {
  let { router: e } = Ag('useSubmit'),
    { basename: r } = S.useContext(Pn),
    o = G1();
  return S.useCallback(
    async (s, a = {}) => {
      let { action: u, method: c, encType: f, formData: h, body: m } = lx(s, r);
      if (a.navigate === !1) {
        let g = a.fetcherKey || Ox();
        await e.fetch(g, o, a.action || u, {
          preventScrollReset: a.preventScrollReset,
          formData: h,
          body: m,
          formMethod: a.method || c,
          formEncType: a.encType || f,
          flushSync: a.flushSync,
        });
      } else
        await e.navigate(a.action || u, {
          preventScrollReset: a.preventScrollReset,
          formData: h,
          body: m,
          formMethod: a.method || c,
          formEncType: a.encType || f,
          replace: a.replace,
          state: a.state,
          fromRouteId: o,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition,
        });
    },
    [e, r, o],
  );
}
function Ax(e, { relative: r } = {}) {
  let { basename: o } = S.useContext(Pn),
    s = S.useContext(Wn);
  tt(s, 'useFormAction must be used inside a RouteContext');
  let [a] = s.matches.slice(-1),
    u = { ...cs(e || '.', { relative: r }) },
    c = Lr();
  if (e == null) {
    u.search = c.search;
    let f = new URLSearchParams(u.search),
      h = f.getAll('index');
    if (h.some((g) => g === '')) {
      f.delete('index'),
        h.filter((v) => v).forEach((v) => f.append('index', v));
      let g = f.toString();
      u.search = g ? `?${g}` : '';
    }
  }
  return (
    (!e || e === '.') &&
      a.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
    o !== '/' && (u.pathname = u.pathname === '/' ? o : ir([o, u.pathname])),
    Zi(u)
  );
}
function Lx(e, r = {}) {
  let o = S.useContext(bg);
  tt(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: s } = Ag('useViewTransitionState'),
    a = cs(e, { relative: r.relative });
  if (!o.isTransitioning) return !1;
  let u = Nr(o.currentLocation.pathname, s) || o.currentLocation.pathname,
    c = Nr(o.nextLocation.pathname, s) || o.nextLocation.pathname;
  return Qa(a.pathname, c) != null || Qa(a.pathname, u) != null;
}
new TextEncoder();
var Lg = vg();
const Ia = cd(Lg),
  es = { black: '#000', white: '#fff' },
  Oo = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  },
  No = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  },
  Ao = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  },
  Lo = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  },
  $o = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  },
  ji = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  },
  $x = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  };
function sr(e, ...r) {
  const o = new URL(`https://mui.com/production-error/?code=${e}`);
  return (
    r.forEach((s) => o.searchParams.append('args[]', s)),
    `Minified MUI error #${e}; visit ${o} for the full message.`
  );
}
const sl = '$$material';
function Xa() {
  return (
    (Xa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var s in o) ({}).hasOwnProperty.call(o, s) && (e[s] = o[s]);
          }
          return e;
        }),
    Xa.apply(null, arguments)
  );
}
var Mx = !1;
function _x(e) {
  if (e.sheet) return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e) return document.styleSheets[r];
}
function zx(e) {
  var r = document.createElement('style');
  return (
    r.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && r.setAttribute('nonce', e.nonce),
    r.appendChild(document.createTextNode('')),
    r.setAttribute('data-s', ''),
    r
  );
}
var Fx = (function () {
    function e(o) {
      var s = this;
      (this._insertTag = function (a) {
        var u;
        s.tags.length === 0
          ? s.insertionPoint
            ? (u = s.insertionPoint.nextSibling)
            : s.prepend
            ? (u = s.container.firstChild)
            : (u = s.before)
          : (u = s.tags[s.tags.length - 1].nextSibling),
          s.container.insertBefore(a, u),
          s.tags.push(a);
      }),
        (this.isSpeedy = o.speedy === void 0 ? !Mx : o.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = o.nonce),
        (this.key = o.key),
        (this.container = o.container),
        (this.prepend = o.prepend),
        (this.insertionPoint = o.insertionPoint),
        (this.before = null);
    }
    var r = e.prototype;
    return (
      (r.hydrate = function (s) {
        s.forEach(this._insertTag);
      }),
      (r.insert = function (s) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(zx(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var u = _x(a);
          try {
            u.insertRule(s, u.cssRules.length);
          } catch {}
        } else a.appendChild(document.createTextNode(s));
        this.ctr++;
      }),
      (r.flush = function () {
        this.tags.forEach(function (s) {
          var a;
          return (a = s.parentNode) == null ? void 0 : a.removeChild(s);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  At = '-ms-',
  Ya = '-moz-',
  _e = '-webkit-',
  $g = 'comm',
  Sd = 'rule',
  wd = 'decl',
  Bx = '@import',
  Mg = '@keyframes',
  Dx = '@layer',
  jx = Math.abs,
  al = String.fromCharCode,
  Ux = Object.assign;
function Wx(e, r) {
  return Rt(e, 0) ^ 45
    ? (((((((r << 2) ^ Rt(e, 0)) << 2) ^ Rt(e, 1)) << 2) ^ Rt(e, 2)) << 2) ^
        Rt(e, 3)
    : 0;
}
function _g(e) {
  return e.trim();
}
function Hx(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function ze(e, r, o) {
  return e.replace(r, o);
}
function Dc(e, r) {
  return e.indexOf(r);
}
function Rt(e, r) {
  return e.charCodeAt(r) | 0;
}
function ts(e, r, o) {
  return e.slice(r, o);
}
function Bn(e) {
  return e.length;
}
function Cd(e) {
  return e.length;
}
function Oa(e, r) {
  return r.push(e), e;
}
function Vx(e, r) {
  return e.map(r).join('');
}
var ll = 1,
  Uo = 1,
  zg = 0,
  Kt = 0,
  ht = 0,
  Go = '';
function ul(e, r, o, s, a, u, c) {
  return {
    value: e,
    root: r,
    parent: o,
    type: s,
    props: a,
    children: u,
    line: ll,
    column: Uo,
    length: c,
    return: '',
  };
}
function Ui(e, r) {
  return Ux(ul('', null, null, '', null, null, 0), e, { length: -e.length }, r);
}
function Kx() {
  return ht;
}
function qx() {
  return (
    (ht = Kt > 0 ? Rt(Go, --Kt) : 0), Uo--, ht === 10 && ((Uo = 1), ll--), ht
  );
}
function Zt() {
  return (
    (ht = Kt < zg ? Rt(Go, Kt++) : 0), Uo++, ht === 10 && ((Uo = 1), ll++), ht
  );
}
function Un() {
  return Rt(Go, Kt);
}
function Da() {
  return Kt;
}
function ds(e, r) {
  return ts(Go, e, r);
}
function ns(e) {
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
function Fg(e) {
  return (ll = Uo = 1), (zg = Bn((Go = e))), (Kt = 0), [];
}
function Bg(e) {
  return (Go = ''), e;
}
function ja(e) {
  return _g(ds(Kt - 1, jc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Gx(e) {
  for (; (ht = Un()) && ht < 33; ) Zt();
  return ns(e) > 2 || ns(ht) > 3 ? '' : ' ';
}
function Qx(e, r) {
  for (
    ;
    --r &&
    Zt() &&
    !(ht < 48 || ht > 102 || (ht > 57 && ht < 65) || (ht > 70 && ht < 97));

  );
  return ds(e, Da() + (r < 6 && Un() == 32 && Zt() == 32));
}
function jc(e) {
  for (; Zt(); )
    switch (ht) {
      case e:
        return Kt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && jc(ht);
        break;
      case 40:
        e === 41 && jc(e);
        break;
      case 92:
        Zt();
        break;
    }
  return Kt;
}
function Xx(e, r) {
  for (; Zt() && e + ht !== 57; ) if (e + ht === 84 && Un() === 47) break;
  return '/*' + ds(r, Kt - 1) + '*' + al(e === 47 ? e : Zt());
}
function Yx(e) {
  for (; !ns(Un()); ) Zt();
  return ds(e, Kt);
}
function Jx(e) {
  return Bg(Ua('', null, null, null, [''], (e = Fg(e)), 0, [0], e));
}
function Ua(e, r, o, s, a, u, c, f, h) {
  for (
    var m = 0,
      g = 0,
      v = c,
      C = 0,
      k = 0,
      w = 0,
      b = 1,
      E = 1,
      R = 1,
      N = 0,
      P = '',
      I = a,
      O = u,
      _ = s,
      z = P;
    E;

  )
    switch (((w = N), (N = Zt()))) {
      case 40:
        if (w != 108 && Rt(z, v - 1) == 58) {
          Dc((z += ze(ja(N), '&', '&\f')), '&\f') != -1 && (R = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        z += ja(N);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        z += Gx(w);
        break;
      case 92:
        z += Qx(Da() - 1, 7);
        continue;
      case 47:
        switch (Un()) {
          case 42:
          case 47:
            Oa(Zx(Xx(Zt(), Da()), r, o), h);
            break;
          default:
            z += '/';
        }
        break;
      case 123 * b:
        f[m++] = Bn(z) * R;
      case 125 * b:
      case 59:
      case 0:
        switch (N) {
          case 0:
          case 125:
            E = 0;
          case 59 + g:
            R == -1 && (z = ze(z, /\f/g, '')),
              k > 0 &&
                Bn(z) - v &&
                Oa(
                  k > 32
                    ? Jh(z + ';', s, o, v - 1)
                    : Jh(ze(z, ' ', '') + ';', s, o, v - 2),
                  h,
                );
            break;
          case 59:
            z += ';';
          default:
            if (
              (Oa((_ = Yh(z, r, o, m, g, a, f, P, (I = []), (O = []), v)), u),
              N === 123)
            )
              if (g === 0) Ua(z, r, _, _, I, u, v, f, O);
              else
                switch (C === 99 && Rt(z, 3) === 110 ? 100 : C) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ua(
                      e,
                      _,
                      _,
                      s && Oa(Yh(e, _, _, 0, 0, a, f, P, a, (I = []), v), O),
                      a,
                      O,
                      v,
                      f,
                      s ? I : O,
                    );
                    break;
                  default:
                    Ua(z, _, _, _, [''], O, 0, f, O);
                }
        }
        (m = g = k = 0), (b = R = 1), (P = z = ''), (v = c);
        break;
      case 58:
        (v = 1 + Bn(z)), (k = w);
      default:
        if (b < 1) {
          if (N == 123) --b;
          else if (N == 125 && b++ == 0 && qx() == 125) continue;
        }
        switch (((z += al(N)), N * b)) {
          case 38:
            R = g > 0 ? 1 : ((z += '\f'), -1);
            break;
          case 44:
            (f[m++] = (Bn(z) - 1) * R), (R = 1);
            break;
          case 64:
            Un() === 45 && (z += ja(Zt())),
              (C = Un()),
              (g = v = Bn((P = z += Yx(Da())))),
              N++;
            break;
          case 45:
            w === 45 && Bn(z) == 2 && (b = 0);
        }
    }
  return u;
}
function Yh(e, r, o, s, a, u, c, f, h, m, g) {
  for (
    var v = a - 1, C = a === 0 ? u : [''], k = Cd(C), w = 0, b = 0, E = 0;
    w < s;
    ++w
  )
    for (var R = 0, N = ts(e, v + 1, (v = jx((b = c[w])))), P = e; R < k; ++R)
      (P = _g(b > 0 ? C[R] + ' ' + N : ze(N, /&\f/g, C[R]))) && (h[E++] = P);
  return ul(e, r, o, a === 0 ? Sd : f, h, m, g);
}
function Zx(e, r, o) {
  return ul(e, r, o, $g, al(Kx()), ts(e, 2, -2), 0);
}
function Jh(e, r, o, s) {
  return ul(e, r, o, wd, ts(e, 0, s), ts(e, s + 1, -1), s);
}
function Bo(e, r) {
  for (var o = '', s = Cd(e), a = 0; a < s; a++) o += r(e[a], a, e, r) || '';
  return o;
}
function eS(e, r, o, s) {
  switch (e.type) {
    case Dx:
      if (e.children.length) break;
    case Bx:
    case wd:
      return (e.return = e.return || e.value);
    case $g:
      return '';
    case Mg:
      return (e.return = e.value + '{' + Bo(e.children, s) + '}');
    case Sd:
      e.value = e.props.join(',');
  }
  return Bn((o = Bo(e.children, s)))
    ? (e.return = e.value + '{' + o + '}')
    : '';
}
function tS(e) {
  var r = Cd(e);
  return function (o, s, a, u) {
    for (var c = '', f = 0; f < r; f++) c += e[f](o, s, a, u) || '';
    return c;
  };
}
function nS(e) {
  return function (r) {
    r.root || ((r = r.return) && e(r));
  };
}
function Dg(e) {
  var r = Object.create(null);
  return function (o) {
    return r[o] === void 0 && (r[o] = e(o)), r[o];
  };
}
var rS = function (r, o, s) {
    for (
      var a = 0, u = 0;
      (a = u), (u = Un()), a === 38 && u === 12 && (o[s] = 1), !ns(u);

    )
      Zt();
    return ds(r, Kt);
  },
  oS = function (r, o) {
    var s = -1,
      a = 44;
    do
      switch (ns(a)) {
        case 0:
          a === 38 && Un() === 12 && (o[s] = 1), (r[s] += rS(Kt - 1, o, s));
          break;
        case 2:
          r[s] += ja(a);
          break;
        case 4:
          if (a === 44) {
            (r[++s] = Un() === 58 ? '&\f' : ''), (o[s] = r[s].length);
            break;
          }
        default:
          r[s] += al(a);
      }
    while ((a = Zt()));
    return r;
  },
  iS = function (r, o) {
    return Bg(oS(Fg(r), o));
  },
  Zh = new WeakMap(),
  sS = function (r) {
    if (!(r.type !== 'rule' || !r.parent || r.length < 1)) {
      for (
        var o = r.value,
          s = r.parent,
          a = r.column === s.column && r.line === s.line;
        s.type !== 'rule';

      )
        if (((s = s.parent), !s)) return;
      if (
        !(r.props.length === 1 && o.charCodeAt(0) !== 58 && !Zh.get(s)) &&
        !a
      ) {
        Zh.set(r, !0);
        for (
          var u = [], c = iS(o, u), f = s.props, h = 0, m = 0;
          h < c.length;
          h++
        )
          for (var g = 0; g < f.length; g++, m++)
            r.props[m] = u[h] ? c[h].replace(/&\f/g, f[g]) : f[g] + ' ' + c[h];
      }
    }
  },
  aS = function (r) {
    if (r.type === 'decl') {
      var o = r.value;
      o.charCodeAt(0) === 108 &&
        o.charCodeAt(2) === 98 &&
        ((r.return = ''), (r.value = ''));
    }
  };
function jg(e, r) {
  switch (Wx(e, r)) {
    case 5103:
      return _e + 'print-' + e + e;
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
      return _e + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return _e + e + Ya + e + At + e + e;
    case 6828:
    case 4268:
      return _e + e + At + e + e;
    case 6165:
      return _e + e + At + 'flex-' + e + e;
    case 5187:
      return (
        _e + e + ze(e, /(\w+).+(:[^]+)/, _e + 'box-$1$2' + At + 'flex-$1$2') + e
      );
    case 5443:
      return _e + e + At + 'flex-item-' + ze(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        _e +
        e +
        At +
        'flex-line-pack' +
        ze(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return _e + e + At + ze(e, 'shrink', 'negative') + e;
    case 5292:
      return _e + e + At + ze(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        _e +
        'box-' +
        ze(e, '-grow', '') +
        _e +
        e +
        At +
        ze(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return _e + ze(e, /([^-])(transform)/g, '$1' + _e + '$2') + e;
    case 6187:
      return (
        ze(
          ze(ze(e, /(zoom-|grab)/, _e + '$1'), /(image-set)/, _e + '$1'),
          e,
          '',
        ) + e
      );
    case 5495:
    case 3959:
      return ze(e, /(image-set\([^]*)/, _e + '$1$`$1');
    case 4968:
      return (
        ze(
          ze(e, /(.+:)(flex-)?(.*)/, _e + 'box-pack:$3' + At + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        _e +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ze(e, /(.+)-inline(.+)/, _e + '$1$2') + e;
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
      if (Bn(e) - 1 - r > 6)
        switch (Rt(e, r + 1)) {
          case 109:
            if (Rt(e, r + 4) !== 45) break;
          case 102:
            return (
              ze(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  _e +
                  '$2-$3$1' +
                  Ya +
                  (Rt(e, r + 3) == 108 ? '$3' : '$2-$3'),
              ) + e
            );
          case 115:
            return ~Dc(e, 'stretch')
              ? jg(ze(e, 'stretch', 'fill-available'), r) + e
              : e;
        }
      break;
    case 4949:
      if (Rt(e, r + 1) !== 115) break;
    case 6444:
      switch (Rt(e, Bn(e) - 3 - (~Dc(e, '!important') && 10))) {
        case 107:
          return ze(e, ':', ':' + _e) + e;
        case 101:
          return (
            ze(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                _e +
                (Rt(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                _e +
                '$2$3$1' +
                At +
                '$2box$3',
            ) + e
          );
      }
      break;
    case 5936:
      switch (Rt(e, r + 11)) {
        case 114:
          return _e + e + At + ze(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return _e + e + At + ze(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return _e + e + At + ze(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return _e + e + At + e + e;
  }
  return e;
}
var lS = function (r, o, s, a) {
    if (r.length > -1 && !r.return)
      switch (r.type) {
        case wd:
          r.return = jg(r.value, r.length);
          break;
        case Mg:
          return Bo([Ui(r, { value: ze(r.value, '@', '@' + _e) })], a);
        case Sd:
          if (r.length)
            return Vx(r.props, function (u) {
              switch (Hx(u, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Bo(
                    [Ui(r, { props: [ze(u, /:(read-\w+)/, ':' + Ya + '$1')] })],
                    a,
                  );
                case '::placeholder':
                  return Bo(
                    [
                      Ui(r, {
                        props: [ze(u, /:(plac\w+)/, ':' + _e + 'input-$1')],
                      }),
                      Ui(r, { props: [ze(u, /:(plac\w+)/, ':' + Ya + '$1')] }),
                      Ui(r, { props: [ze(u, /:(plac\w+)/, At + 'input-$1')] }),
                    ],
                    a,
                  );
              }
              return '';
            });
      }
  },
  uS = [lS],
  cS = function (r) {
    var o = r.key;
    if (o === 'css') {
      var s = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(s, function (b) {
        var E = b.getAttribute('data-emotion');
        E.indexOf(' ') !== -1 &&
          (document.head.appendChild(b), b.setAttribute('data-s', ''));
      });
    }
    var a = r.stylisPlugins || uS,
      u = {},
      c,
      f = [];
    (c = r.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
        function (b) {
          for (
            var E = b.getAttribute('data-emotion').split(' '), R = 1;
            R < E.length;
            R++
          )
            u[E[R]] = !0;
          f.push(b);
        },
      );
    var h,
      m = [sS, aS];
    {
      var g,
        v = [
          eS,
          nS(function (b) {
            g.insert(b);
          }),
        ],
        C = tS(m.concat(a, v)),
        k = function (E) {
          return Bo(Jx(E), C);
        };
      h = function (E, R, N, P) {
        (g = N),
          k(E ? E + '{' + R.styles + '}' : R.styles),
          P && (w.inserted[R.name] = !0);
      };
    }
    var w = {
      key: o,
      sheet: new Fx({
        key: o,
        container: c,
        nonce: r.nonce,
        speedy: r.speedy,
        prepend: r.prepend,
        insertionPoint: r.insertionPoint,
      }),
      nonce: r.nonce,
      inserted: u,
      registered: {},
      insert: h,
    };
    return w.sheet.hydrate(f), w;
  },
  Cc = { exports: {} },
  je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var em;
function dS() {
  if (em) return je;
  em = 1;
  var e = typeof Symbol == 'function' && Symbol.for,
    r = e ? Symbol.for('react.element') : 60103,
    o = e ? Symbol.for('react.portal') : 60106,
    s = e ? Symbol.for('react.fragment') : 60107,
    a = e ? Symbol.for('react.strict_mode') : 60108,
    u = e ? Symbol.for('react.profiler') : 60114,
    c = e ? Symbol.for('react.provider') : 60109,
    f = e ? Symbol.for('react.context') : 60110,
    h = e ? Symbol.for('react.async_mode') : 60111,
    m = e ? Symbol.for('react.concurrent_mode') : 60111,
    g = e ? Symbol.for('react.forward_ref') : 60112,
    v = e ? Symbol.for('react.suspense') : 60113,
    C = e ? Symbol.for('react.suspense_list') : 60120,
    k = e ? Symbol.for('react.memo') : 60115,
    w = e ? Symbol.for('react.lazy') : 60116,
    b = e ? Symbol.for('react.block') : 60121,
    E = e ? Symbol.for('react.fundamental') : 60117,
    R = e ? Symbol.for('react.responder') : 60118,
    N = e ? Symbol.for('react.scope') : 60119;
  function P(O) {
    if (typeof O == 'object' && O !== null) {
      var _ = O.$$typeof;
      switch (_) {
        case r:
          switch (((O = O.type), O)) {
            case h:
            case m:
            case s:
            case u:
            case a:
            case v:
              return O;
            default:
              switch (((O = O && O.$$typeof), O)) {
                case f:
                case g:
                case w:
                case k:
                case c:
                  return O;
                default:
                  return _;
              }
          }
        case o:
          return _;
      }
    }
  }
  function I(O) {
    return P(O) === m;
  }
  return (
    (je.AsyncMode = h),
    (je.ConcurrentMode = m),
    (je.ContextConsumer = f),
    (je.ContextProvider = c),
    (je.Element = r),
    (je.ForwardRef = g),
    (je.Fragment = s),
    (je.Lazy = w),
    (je.Memo = k),
    (je.Portal = o),
    (je.Profiler = u),
    (je.StrictMode = a),
    (je.Suspense = v),
    (je.isAsyncMode = function (O) {
      return I(O) || P(O) === h;
    }),
    (je.isConcurrentMode = I),
    (je.isContextConsumer = function (O) {
      return P(O) === f;
    }),
    (je.isContextProvider = function (O) {
      return P(O) === c;
    }),
    (je.isElement = function (O) {
      return typeof O == 'object' && O !== null && O.$$typeof === r;
    }),
    (je.isForwardRef = function (O) {
      return P(O) === g;
    }),
    (je.isFragment = function (O) {
      return P(O) === s;
    }),
    (je.isLazy = function (O) {
      return P(O) === w;
    }),
    (je.isMemo = function (O) {
      return P(O) === k;
    }),
    (je.isPortal = function (O) {
      return P(O) === o;
    }),
    (je.isProfiler = function (O) {
      return P(O) === u;
    }),
    (je.isStrictMode = function (O) {
      return P(O) === a;
    }),
    (je.isSuspense = function (O) {
      return P(O) === v;
    }),
    (je.isValidElementType = function (O) {
      return (
        typeof O == 'string' ||
        typeof O == 'function' ||
        O === s ||
        O === m ||
        O === u ||
        O === a ||
        O === v ||
        O === C ||
        (typeof O == 'object' &&
          O !== null &&
          (O.$$typeof === w ||
            O.$$typeof === k ||
            O.$$typeof === c ||
            O.$$typeof === f ||
            O.$$typeof === g ||
            O.$$typeof === E ||
            O.$$typeof === R ||
            O.$$typeof === N ||
            O.$$typeof === b))
      );
    }),
    (je.typeOf = P),
    je
  );
}
var tm;
function fS() {
  return tm || ((tm = 1), (Cc.exports = dS())), Cc.exports;
}
var bc, nm;
function pS() {
  if (nm) return bc;
  nm = 1;
  var e = fS(),
    r = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    o = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    s = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    a = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    u = {};
  (u[e.ForwardRef] = s), (u[e.Memo] = a);
  function c(w) {
    return e.isMemo(w) ? a : u[w.$$typeof] || r;
  }
  var f = Object.defineProperty,
    h = Object.getOwnPropertyNames,
    m = Object.getOwnPropertySymbols,
    g = Object.getOwnPropertyDescriptor,
    v = Object.getPrototypeOf,
    C = Object.prototype;
  function k(w, b, E) {
    if (typeof b != 'string') {
      if (C) {
        var R = v(b);
        R && R !== C && k(w, R, E);
      }
      var N = h(b);
      m && (N = N.concat(m(b)));
      for (var P = c(w), I = c(b), O = 0; O < N.length; ++O) {
        var _ = N[O];
        if (!o[_] && !(E && E[_]) && !(I && I[_]) && !(P && P[_])) {
          var z = g(b, _);
          try {
            f(w, _, z);
          } catch {}
        }
      }
    }
    return w;
  }
  return (bc = k), bc;
}
pS();
var hS = !0;
function Ug(e, r, o) {
  var s = '';
  return (
    o.split(' ').forEach(function (a) {
      e[a] !== void 0 ? r.push(e[a] + ';') : a && (s += a + ' ');
    }),
    s
  );
}
var bd = function (r, o, s) {
    var a = r.key + '-' + o.name;
    (s === !1 || hS === !1) &&
      r.registered[a] === void 0 &&
      (r.registered[a] = o.styles);
  },
  Ed = function (r, o, s) {
    bd(r, o, s);
    var a = r.key + '-' + o.name;
    if (r.inserted[o.name] === void 0) {
      var u = o;
      do r.insert(o === u ? '.' + a : '', u, r.sheet, !0), (u = u.next);
      while (u !== void 0);
    }
  };
function mS(e) {
  for (var r = 0, o, s = 0, a = e.length; a >= 4; ++s, a -= 4)
    (o =
      (e.charCodeAt(s) & 255) |
      ((e.charCodeAt(++s) & 255) << 8) |
      ((e.charCodeAt(++s) & 255) << 16) |
      ((e.charCodeAt(++s) & 255) << 24)),
      (o = (o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)),
      (o ^= o >>> 24),
      (r =
        ((o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)) ^
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
  switch (a) {
    case 3:
      r ^= (e.charCodeAt(s + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(s + 1) & 255) << 8;
    case 1:
      (r ^= e.charCodeAt(s) & 255),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16));
  }
  return (
    (r ^= r >>> 13),
    (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
var gS = {
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
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  yS = /[A-Z]|^ms/g,
  vS = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Wg = function (r) {
    return r.charCodeAt(1) === 45;
  },
  rm = function (r) {
    return r != null && typeof r != 'boolean';
  },
  Ec = Dg(function (e) {
    return Wg(e) ? e : e.replace(yS, '-$&').toLowerCase();
  }),
  om = function (r, o) {
    switch (r) {
      case 'animation':
      case 'animationName':
        if (typeof o == 'string')
          return o.replace(vS, function (s, a, u) {
            return (Dn = { name: a, styles: u, next: Dn }), a;
          });
    }
    return gS[r] !== 1 && !Wg(r) && typeof o == 'number' && o !== 0
      ? o + 'px'
      : o;
  };
function rs(e, r, o) {
  if (o == null) return '';
  var s = o;
  if (s.__emotion_styles !== void 0) return s;
  switch (typeof o) {
    case 'boolean':
      return '';
    case 'object': {
      var a = o;
      if (a.anim === 1)
        return (Dn = { name: a.name, styles: a.styles, next: Dn }), a.name;
      var u = o;
      if (u.styles !== void 0) {
        var c = u.next;
        if (c !== void 0)
          for (; c !== void 0; )
            (Dn = { name: c.name, styles: c.styles, next: Dn }), (c = c.next);
        var f = u.styles + ';';
        return f;
      }
      return xS(e, r, o);
    }
    case 'function': {
      if (e !== void 0) {
        var h = Dn,
          m = o(e);
        return (Dn = h), rs(e, r, m);
      }
      break;
    }
  }
  var g = o;
  if (r == null) return g;
  var v = r[g];
  return v !== void 0 ? v : g;
}
function xS(e, r, o) {
  var s = '';
  if (Array.isArray(o))
    for (var a = 0; a < o.length; a++) s += rs(e, r, o[a]) + ';';
  else
    for (var u in o) {
      var c = o[u];
      if (typeof c != 'object') {
        var f = c;
        r != null && r[f] !== void 0
          ? (s += u + '{' + r[f] + '}')
          : rm(f) && (s += Ec(u) + ':' + om(u, f) + ';');
      } else if (
        Array.isArray(c) &&
        typeof c[0] == 'string' &&
        (r == null || r[c[0]] === void 0)
      )
        for (var h = 0; h < c.length; h++)
          rm(c[h]) && (s += Ec(u) + ':' + om(u, c[h]) + ';');
      else {
        var m = rs(e, r, c);
        switch (u) {
          case 'animation':
          case 'animationName': {
            s += Ec(u) + ':' + m + ';';
            break;
          }
          default:
            s += u + '{' + m + '}';
        }
      }
    }
  return s;
}
var im = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Dn;
function fs(e, r, o) {
  if (
    e.length === 1 &&
    typeof e[0] == 'object' &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var s = !0,
    a = '';
  Dn = void 0;
  var u = e[0];
  if (u == null || u.raw === void 0) (s = !1), (a += rs(o, r, u));
  else {
    var c = u;
    a += c[0];
  }
  for (var f = 1; f < e.length; f++)
    if (((a += rs(o, r, e[f])), s)) {
      var h = u;
      a += h[f];
    }
  im.lastIndex = 0;
  for (var m = '', g; (g = im.exec(a)) !== null; ) m += '-' + g[1];
  var v = mS(a) + m;
  return { name: v, styles: a, next: Dn };
}
var SS = function (r) {
    return r();
  },
  Hg = zc.useInsertionEffect ? zc.useInsertionEffect : !1,
  Vg = Hg || SS,
  sm = Hg || S.useLayoutEffect,
  wS = !1,
  Kg = S.createContext(typeof HTMLElement < 'u' ? cS({ key: 'css' }) : null);
Kg.Provider;
var kd = function (r) {
    return S.forwardRef(function (o, s) {
      var a = S.useContext(Kg);
      return r(o, a, s);
    });
  },
  cl = S.createContext({}),
  Rd = {}.hasOwnProperty,
  Uc = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  CS = function (r, o) {
    var s = {};
    for (var a in o) Rd.call(o, a) && (s[a] = o[a]);
    return (s[Uc] = r), s;
  },
  bS = function (r) {
    var o = r.cache,
      s = r.serialized,
      a = r.isStringTag;
    return (
      bd(o, s, a),
      Vg(function () {
        return Ed(o, s, a);
      }),
      null
    );
  },
  ES = kd(function (e, r, o) {
    var s = e.css;
    typeof s == 'string' && r.registered[s] !== void 0 && (s = r.registered[s]);
    var a = e[Uc],
      u = [s],
      c = '';
    typeof e.className == 'string'
      ? (c = Ug(r.registered, u, e.className))
      : e.className != null && (c = e.className + ' ');
    var f = fs(u, void 0, S.useContext(cl));
    c += r.key + '-' + f.name;
    var h = {};
    for (var m in e)
      Rd.call(e, m) && m !== 'css' && m !== Uc && !wS && (h[m] = e[m]);
    return (
      (h.className = c),
      o && (h.ref = o),
      S.createElement(
        S.Fragment,
        null,
        S.createElement(bS, {
          cache: r,
          serialized: f,
          isStringTag: typeof a == 'string',
        }),
        S.createElement(a, h),
      )
    );
  }),
  kS = ES,
  RS = function (r, o) {
    var s = arguments;
    if (o == null || !Rd.call(o, 'css'))
      return S.createElement.apply(void 0, s);
    var a = s.length,
      u = new Array(a);
    (u[0] = kS), (u[1] = CS(r, o));
    for (var c = 2; c < a; c++) u[c] = s[c];
    return S.createElement.apply(null, u);
  };
(function (e) {
  var r;
  r || (r = e.JSX || (e.JSX = {}));
})(RS);
var PS = kd(function (e, r) {
  var o = e.styles,
    s = fs([o], void 0, S.useContext(cl)),
    a = S.useRef();
  return (
    sm(
      function () {
        var u = r.key + '-global',
          c = new r.sheet.constructor({
            key: u,
            nonce: r.sheet.nonce,
            container: r.sheet.container,
            speedy: r.sheet.isSpeedy,
          }),
          f = !1,
          h = document.querySelector(
            'style[data-emotion="' + u + ' ' + s.name + '"]',
          );
        return (
          r.sheet.tags.length && (c.before = r.sheet.tags[0]),
          h !== null &&
            ((f = !0), h.setAttribute('data-emotion', u), c.hydrate([h])),
          (a.current = [c, f]),
          function () {
            c.flush();
          }
        );
      },
      [r],
    ),
    sm(
      function () {
        var u = a.current,
          c = u[0],
          f = u[1];
        if (f) {
          u[1] = !1;
          return;
        }
        if ((s.next !== void 0 && Ed(r, s.next, !0), c.tags.length)) {
          var h = c.tags[c.tags.length - 1].nextElementSibling;
          (c.before = h), c.flush();
        }
        r.insert('', s, c, !1);
      },
      [r, s.name],
    ),
    null
  );
});
function Pd() {
  for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
    r[o] = arguments[o];
  return fs(r);
}
function ps() {
  var e = Pd.apply(void 0, arguments),
    r = 'animation-' + e.name;
  return {
    name: r,
    styles: '@keyframes ' + r + '{' + e.styles + '}',
    anim: 1,
    toString: function () {
      return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
    },
  };
}
var TS =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  IS = Dg(function (e) {
    return (
      TS.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  OS = IS,
  NS = function (r) {
    return r !== 'theme';
  },
  am = function (r) {
    return typeof r == 'string' && r.charCodeAt(0) > 96 ? OS : NS;
  },
  lm = function (r, o, s) {
    var a;
    if (o) {
      var u = o.shouldForwardProp;
      a =
        r.__emotion_forwardProp && u
          ? function (c) {
              return r.__emotion_forwardProp(c) && u(c);
            }
          : u;
    }
    return typeof a != 'function' && s && (a = r.__emotion_forwardProp), a;
  },
  AS = function (r) {
    var o = r.cache,
      s = r.serialized,
      a = r.isStringTag;
    return (
      bd(o, s, a),
      Vg(function () {
        return Ed(o, s, a);
      }),
      null
    );
  },
  LS = function e(r, o) {
    var s = r.__emotion_real === r,
      a = (s && r.__emotion_base) || r,
      u,
      c;
    o !== void 0 && ((u = o.label), (c = o.target));
    var f = lm(r, o, s),
      h = f || am(a),
      m = !h('as');
    return function () {
      var g = arguments,
        v =
          s && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
      if (
        (u !== void 0 && v.push('label:' + u + ';'),
        g[0] == null || g[0].raw === void 0)
      )
        v.push.apply(v, g);
      else {
        var C = g[0];
        v.push(C[0]);
        for (var k = g.length, w = 1; w < k; w++) v.push(g[w], C[w]);
      }
      var b = kd(function (E, R, N) {
        var P = (m && E.as) || a,
          I = '',
          O = [],
          _ = E;
        if (E.theme == null) {
          _ = {};
          for (var z in E) _[z] = E[z];
          _.theme = S.useContext(cl);
        }
        typeof E.className == 'string'
          ? (I = Ug(R.registered, O, E.className))
          : E.className != null && (I = E.className + ' ');
        var V = fs(v.concat(O), R.registered, _);
        (I += R.key + '-' + V.name), c !== void 0 && (I += ' ' + c);
        var G = m && f === void 0 ? am(P) : h,
          x = {};
        for (var j in E) (m && j === 'as') || (G(j) && (x[j] = E[j]));
        return (
          (x.className = I),
          N && (x.ref = N),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(AS, {
              cache: R,
              serialized: V,
              isStringTag: typeof P == 'string',
            }),
            S.createElement(P, x),
          )
        );
      });
      return (
        (b.displayName =
          u !== void 0
            ? u
            : 'Styled(' +
              (typeof a == 'string'
                ? a
                : a.displayName || a.name || 'Component') +
              ')'),
        (b.defaultProps = r.defaultProps),
        (b.__emotion_real = b),
        (b.__emotion_base = a),
        (b.__emotion_styles = v),
        (b.__emotion_forwardProp = f),
        Object.defineProperty(b, 'toString', {
          value: function () {
            return '.' + c;
          },
        }),
        (b.withComponent = function (E, R) {
          var N = e(E, Xa({}, o, R, { shouldForwardProp: lm(b, R, !0) }));
          return N.apply(void 0, v);
        }),
        b
      );
    };
  },
  $S = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  Wc = LS.bind(null);
$S.forEach(function (e) {
  Wc[e] = Wc(e);
});
function MS(e) {
  return e == null || Object.keys(e).length === 0;
}
function _S(e) {
  const { styles: r, defaultTheme: o = {} } = e,
    s = typeof r == 'function' ? (a) => r(MS(a) ? o : a) : r;
  return M.jsx(PS, { styles: s });
}
/**
 * @mui/styled-engine v6.3.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function qg(e, r) {
  return Wc(e, r);
}
function zS(e, r) {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = r(e.__emotion_styles));
}
const um = [];
function cm(e) {
  return (um[0] = e), fs(um);
}
function jn(e) {
  if (typeof e != 'object' || e === null) return !1;
  const r = Object.getPrototypeOf(e);
  return (
    (r === null ||
      r === Object.prototype ||
      Object.getPrototypeOf(r) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function Gg(e) {
  if (S.isValidElement(e) || !jn(e)) return e;
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = Gg(e[o]);
    }),
    r
  );
}
function $t(e, r, o = { clone: !0 }) {
  const s = o.clone ? { ...e } : e;
  return (
    jn(e) &&
      jn(r) &&
      Object.keys(r).forEach((a) => {
        S.isValidElement(r[a])
          ? (s[a] = r[a])
          : jn(r[a]) && Object.prototype.hasOwnProperty.call(e, a) && jn(e[a])
          ? (s[a] = $t(e[a], r[a], o))
          : o.clone
          ? (s[a] = jn(r[a]) ? Gg(r[a]) : r[a])
          : (s[a] = r[a]);
      }),
    s
  );
}
const FS = (e) => {
  const r = Object.keys(e).map((o) => ({ key: o, val: e[o] })) || [];
  return (
    r.sort((o, s) => o.val - s.val),
    r.reduce((o, s) => ({ ...o, [s.key]: s.val }), {})
  );
};
function BS(e) {
  const {
      values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: o = 'px',
      step: s = 5,
      ...a
    } = e,
    u = FS(r),
    c = Object.keys(u);
  function f(C) {
    return `@media (min-width:${typeof r[C] == 'number' ? r[C] : C}${o})`;
  }
  function h(C) {
    return `@media (max-width:${
      (typeof r[C] == 'number' ? r[C] : C) - s / 100
    }${o})`;
  }
  function m(C, k) {
    const w = c.indexOf(k);
    return `@media (min-width:${
      typeof r[C] == 'number' ? r[C] : C
    }${o}) and (max-width:${
      (w !== -1 && typeof r[c[w]] == 'number' ? r[c[w]] : k) - s / 100
    }${o})`;
  }
  function g(C) {
    return c.indexOf(C) + 1 < c.length ? m(C, c[c.indexOf(C) + 1]) : f(C);
  }
  function v(C) {
    const k = c.indexOf(C);
    return k === 0
      ? f(c[1])
      : k === c.length - 1
      ? h(c[k])
      : m(C, c[c.indexOf(C) + 1]).replace('@media', '@media not all and');
  }
  return {
    keys: c,
    values: u,
    up: f,
    down: h,
    between: m,
    only: g,
    not: v,
    unit: o,
    ...a,
  };
}
function DS(e, r) {
  if (!e.containerQueries) return r;
  const o = Object.keys(r)
    .filter((s) => s.startsWith('@container'))
    .sort((s, a) => {
      var c, f;
      const u = /min-width:\s*([0-9.]+)/;
      return (
        +(((c = s.match(u)) == null ? void 0 : c[1]) || 0) -
        +(((f = a.match(u)) == null ? void 0 : f[1]) || 0)
      );
    });
  return o.length
    ? o.reduce(
        (s, a) => {
          const u = r[a];
          return delete s[a], (s[a] = u), s;
        },
        { ...r },
      )
    : r;
}
function jS(e, r) {
  return (
    r === '@' ||
    (r.startsWith('@') &&
      (e.some((o) => r.startsWith(`@${o}`)) || !!r.match(/^@\d/)))
  );
}
function US(e, r) {
  const o = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) return null;
  const [, s, a] = o,
    u = Number.isNaN(+s) ? s || 0 : +s;
  return e.containerQueries(a).up(u);
}
function WS(e) {
  const r = (u, c) => u.replace('@media', c ? `@container ${c}` : '@container');
  function o(u, c) {
    (u.up = (...f) => r(e.breakpoints.up(...f), c)),
      (u.down = (...f) => r(e.breakpoints.down(...f), c)),
      (u.between = (...f) => r(e.breakpoints.between(...f), c)),
      (u.only = (...f) => r(e.breakpoints.only(...f), c)),
      (u.not = (...f) => {
        const h = r(e.breakpoints.not(...f), c);
        return h.includes('not all and')
          ? h
              .replace('not all and ', '')
              .replace('min-width:', 'width<')
              .replace('max-width:', 'width>')
              .replace('and', 'or')
          : h;
      });
  }
  const s = {},
    a = (u) => (o(s, u), s);
  return o(a), { ...e, containerQueries: a };
}
const HS = { borderRadius: 4 };
function Xi(e, r) {
  return r ? $t(e, r, { clone: !1 }) : e;
}
const dl = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  dm = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${dl[e]}px)`,
  },
  VS = {
    containerQueries: (e) => ({
      up: (r) => {
        let o = typeof r == 'number' ? r : dl[r] || r;
        return (
          typeof o == 'number' && (o = `${o}px`),
          e ? `@container ${e} (min-width:${o})` : `@container (min-width:${o})`
        );
      },
    }),
  };
function ar(e, r, o) {
  const s = e.theme || {};
  if (Array.isArray(r)) {
    const u = s.breakpoints || dm;
    return r.reduce((c, f, h) => ((c[u.up(u.keys[h])] = o(r[h])), c), {});
  }
  if (typeof r == 'object') {
    const u = s.breakpoints || dm;
    return Object.keys(r).reduce((c, f) => {
      if (jS(u.keys, f)) {
        const h = US(s.containerQueries ? s : VS, f);
        h && (c[h] = o(r[f], f));
      } else if (Object.keys(u.values || dl).includes(f)) {
        const h = u.up(f);
        c[h] = o(r[f], f);
      } else {
        const h = f;
        c[h] = r[h];
      }
      return c;
    }, {});
  }
  return o(r);
}
function KS(e = {}) {
  var o;
  return (
    ((o = e.keys) == null
      ? void 0
      : o.reduce((s, a) => {
          const u = e.up(a);
          return (s[u] = {}), s;
        }, {})) || {}
  );
}
function qS(e, r) {
  return e.reduce((o, s) => {
    const a = o[s];
    return (!a || Object.keys(a).length === 0) && delete o[s], o;
  }, r);
}
function ge(e) {
  if (typeof e != 'string') throw new Error(sr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function fl(e, r, o = !0) {
  if (!r || typeof r != 'string') return null;
  if (e && e.vars && o) {
    const s = `vars.${r}`
      .split('.')
      .reduce((a, u) => (a && a[u] ? a[u] : null), e);
    if (s != null) return s;
  }
  return r.split('.').reduce((s, a) => (s && s[a] != null ? s[a] : null), e);
}
function Ja(e, r, o, s = o) {
  let a;
  return (
    typeof e == 'function'
      ? (a = e(o))
      : Array.isArray(e)
      ? (a = e[o] || s)
      : (a = fl(e, o) || s),
    r && (a = r(a, s, e)),
    a
  );
}
function dt(e) {
  const { prop: r, cssProperty: o = e.prop, themeKey: s, transform: a } = e,
    u = (c) => {
      if (c[r] == null) return null;
      const f = c[r],
        h = c.theme,
        m = fl(h, s) || {};
      return ar(c, f, (v) => {
        let C = Ja(m, a, v);
        return (
          v === C &&
            typeof v == 'string' &&
            (C = Ja(m, a, `${r}${v === 'default' ? '' : ge(v)}`, v)),
          o === !1 ? C : { [o]: C }
        );
      });
    };
  return (u.propTypes = {}), (u.filterProps = [r]), u;
}
function GS(e) {
  const r = {};
  return (o) => (r[o] === void 0 && (r[o] = e(o)), r[o]);
}
const QS = { m: 'margin', p: 'padding' },
  XS = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  },
  fm = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  YS = GS((e) => {
    if (e.length > 2)
      if (fm[e]) e = fm[e];
      else return [e];
    const [r, o] = e.split(''),
      s = QS[r],
      a = XS[o] || '';
    return Array.isArray(a) ? a.map((u) => s + u) : [s + a];
  }),
  Td = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  Id = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...Td, ...Id];
function hs(e, r, o, s) {
  const a = fl(e, r, !0) ?? o;
  return typeof a == 'number' || typeof a == 'string'
    ? (u) =>
        typeof u == 'string'
          ? u
          : typeof a == 'string'
          ? `calc(${u} * ${a})`
          : a * u
    : Array.isArray(a)
    ? (u) => {
        if (typeof u == 'string') return u;
        const c = Math.abs(u),
          f = a[c];
        return u >= 0 ? f : typeof f == 'number' ? -f : `-${f}`;
      }
    : typeof a == 'function'
    ? a
    : () => {};
}
function Od(e) {
  return hs(e, 'spacing', 8);
}
function ms(e, r) {
  return typeof r == 'string' || r == null ? r : e(r);
}
function JS(e, r) {
  return (o) => e.reduce((s, a) => ((s[a] = ms(r, o)), s), {});
}
function ZS(e, r, o, s) {
  if (!r.includes(o)) return null;
  const a = YS(o),
    u = JS(a, s),
    c = e[o];
  return ar(e, c, u);
}
function Qg(e, r) {
  const o = Od(e.theme);
  return Object.keys(e)
    .map((s) => ZS(e, r, s, o))
    .reduce(Xi, {});
}
function it(e) {
  return Qg(e, Td);
}
it.propTypes = {};
it.filterProps = Td;
function st(e) {
  return Qg(e, Id);
}
st.propTypes = {};
st.filterProps = Id;
function Xg(e = 8, r = Od({ spacing: e })) {
  if (e.mui) return e;
  const o = (...s) =>
    (s.length === 0 ? [1] : s)
      .map((u) => {
        const c = r(u);
        return typeof c == 'number' ? `${c}px` : c;
      })
      .join(' ');
  return (o.mui = !0), o;
}
function pl(...e) {
  const r = e.reduce(
      (s, a) => (
        a.filterProps.forEach((u) => {
          s[u] = a;
        }),
        s
      ),
      {},
    ),
    o = (s) => Object.keys(s).reduce((a, u) => (r[u] ? Xi(a, r[u](s)) : a), {});
  return (
    (o.propTypes = {}),
    (o.filterProps = e.reduce((s, a) => s.concat(a.filterProps), [])),
    o
  );
}
function un(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
function fn(e, r) {
  return dt({ prop: e, themeKey: 'borders', transform: r });
}
const ew = fn('border', un),
  tw = fn('borderTop', un),
  nw = fn('borderRight', un),
  rw = fn('borderBottom', un),
  ow = fn('borderLeft', un),
  iw = fn('borderColor'),
  sw = fn('borderTopColor'),
  aw = fn('borderRightColor'),
  lw = fn('borderBottomColor'),
  uw = fn('borderLeftColor'),
  cw = fn('outline', un),
  dw = fn('outlineColor'),
  hl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const r = hs(e.theme, 'shape.borderRadius', 4),
        o = (s) => ({ borderRadius: ms(r, s) });
      return ar(e, e.borderRadius, o);
    }
    return null;
  };
hl.propTypes = {};
hl.filterProps = ['borderRadius'];
pl(ew, tw, nw, rw, ow, iw, sw, aw, lw, uw, hl, cw, dw);
const ml = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = hs(e.theme, 'spacing', 8),
      o = (s) => ({ gap: ms(r, s) });
    return ar(e, e.gap, o);
  }
  return null;
};
ml.propTypes = {};
ml.filterProps = ['gap'];
const gl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = hs(e.theme, 'spacing', 8),
      o = (s) => ({ columnGap: ms(r, s) });
    return ar(e, e.columnGap, o);
  }
  return null;
};
gl.propTypes = {};
gl.filterProps = ['columnGap'];
const yl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = hs(e.theme, 'spacing', 8),
      o = (s) => ({ rowGap: ms(r, s) });
    return ar(e, e.rowGap, o);
  }
  return null;
};
yl.propTypes = {};
yl.filterProps = ['rowGap'];
const fw = dt({ prop: 'gridColumn' }),
  pw = dt({ prop: 'gridRow' }),
  hw = dt({ prop: 'gridAutoFlow' }),
  mw = dt({ prop: 'gridAutoColumns' }),
  gw = dt({ prop: 'gridAutoRows' }),
  yw = dt({ prop: 'gridTemplateColumns' }),
  vw = dt({ prop: 'gridTemplateRows' }),
  xw = dt({ prop: 'gridTemplateAreas' }),
  Sw = dt({ prop: 'gridArea' });
pl(ml, gl, yl, fw, pw, hw, mw, gw, yw, vw, xw, Sw);
function Do(e, r) {
  return r === 'grey' ? r : e;
}
const ww = dt({ prop: 'color', themeKey: 'palette', transform: Do }),
  Cw = dt({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: Do,
  }),
  bw = dt({ prop: 'backgroundColor', themeKey: 'palette', transform: Do });
pl(ww, Cw, bw);
function Jt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ew = dt({ prop: 'width', transform: Jt }),
  Nd = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const r = (o) => {
        var a, u, c, f, h;
        const s =
          ((c =
            (u = (a = e.theme) == null ? void 0 : a.breakpoints) == null
              ? void 0
              : u.values) == null
            ? void 0
            : c[o]) || dl[o];
        return s
          ? ((h = (f = e.theme) == null ? void 0 : f.breakpoints) == null
              ? void 0
              : h.unit) !== 'px'
            ? { maxWidth: `${s}${e.theme.breakpoints.unit}` }
            : { maxWidth: s }
          : { maxWidth: Jt(o) };
      };
      return ar(e, e.maxWidth, r);
    }
    return null;
  };
Nd.filterProps = ['maxWidth'];
const kw = dt({ prop: 'minWidth', transform: Jt }),
  Rw = dt({ prop: 'height', transform: Jt }),
  Pw = dt({ prop: 'maxHeight', transform: Jt }),
  Tw = dt({ prop: 'minHeight', transform: Jt });
dt({ prop: 'size', cssProperty: 'width', transform: Jt });
dt({ prop: 'size', cssProperty: 'height', transform: Jt });
const Iw = dt({ prop: 'boxSizing' });
pl(Ew, Nd, kw, Rw, Pw, Tw, Iw);
const gs = {
  border: { themeKey: 'borders', transform: un },
  borderTop: { themeKey: 'borders', transform: un },
  borderRight: { themeKey: 'borders', transform: un },
  borderBottom: { themeKey: 'borders', transform: un },
  borderLeft: { themeKey: 'borders', transform: un },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: un },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: hl },
  color: { themeKey: 'palette', transform: Do },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: Do,
  },
  backgroundColor: { themeKey: 'palette', transform: Do },
  p: { style: st },
  pt: { style: st },
  pr: { style: st },
  pb: { style: st },
  pl: { style: st },
  px: { style: st },
  py: { style: st },
  padding: { style: st },
  paddingTop: { style: st },
  paddingRight: { style: st },
  paddingBottom: { style: st },
  paddingLeft: { style: st },
  paddingX: { style: st },
  paddingY: { style: st },
  paddingInline: { style: st },
  paddingInlineStart: { style: st },
  paddingInlineEnd: { style: st },
  paddingBlock: { style: st },
  paddingBlockStart: { style: st },
  paddingBlockEnd: { style: st },
  m: { style: it },
  mt: { style: it },
  mr: { style: it },
  mb: { style: it },
  ml: { style: it },
  mx: { style: it },
  my: { style: it },
  margin: { style: it },
  marginTop: { style: it },
  marginRight: { style: it },
  marginBottom: { style: it },
  marginLeft: { style: it },
  marginX: { style: it },
  marginY: { style: it },
  marginInline: { style: it },
  marginInlineStart: { style: it },
  marginInlineEnd: { style: it },
  marginBlock: { style: it },
  marginBlockStart: { style: it },
  marginBlockEnd: { style: it },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ '@media print': { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: ml },
  rowGap: { style: yl },
  columnGap: { style: gl },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: 'zIndex' },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: 'shadows' },
  width: { transform: Jt },
  maxWidth: { style: Nd },
  minWidth: { transform: Jt },
  height: { transform: Jt },
  maxHeight: { transform: Jt },
  minHeight: { transform: Jt },
  boxSizing: {},
  font: { themeKey: 'font' },
  fontFamily: { themeKey: 'typography' },
  fontSize: { themeKey: 'typography' },
  fontStyle: { themeKey: 'typography' },
  fontWeight: { themeKey: 'typography' },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: 'typography' },
};
function Ow(...e) {
  const r = e.reduce((s, a) => s.concat(Object.keys(a)), []),
    o = new Set(r);
  return e.every((s) => o.size === Object.keys(s).length);
}
function Nw(e, r) {
  return typeof e == 'function' ? e(r) : e;
}
function Aw() {
  function e(o, s, a, u) {
    const c = { [o]: s, theme: a },
      f = u[o];
    if (!f) return { [o]: s };
    const { cssProperty: h = o, themeKey: m, transform: g, style: v } = f;
    if (s == null) return null;
    if (m === 'typography' && s === 'inherit') return { [o]: s };
    const C = fl(a, m) || {};
    return v
      ? v(c)
      : ar(c, s, (w) => {
          let b = Ja(C, g, w);
          return (
            w === b &&
              typeof w == 'string' &&
              (b = Ja(C, g, `${o}${w === 'default' ? '' : ge(w)}`, w)),
            h === !1 ? b : { [h]: b }
          );
        });
  }
  function r(o) {
    const { sx: s, theme: a = {} } = o || {};
    if (!s) return null;
    const u = a.unstable_sxConfig ?? gs;
    function c(f) {
      let h = f;
      if (typeof f == 'function') h = f(a);
      else if (typeof f != 'object') return f;
      if (!h) return null;
      const m = KS(a.breakpoints),
        g = Object.keys(m);
      let v = m;
      return (
        Object.keys(h).forEach((C) => {
          const k = Nw(h[C], a);
          if (k != null)
            if (typeof k == 'object')
              if (u[C]) v = Xi(v, e(C, k, a, u));
              else {
                const w = ar({ theme: a }, k, (b) => ({ [C]: b }));
                Ow(w, k) ? (v[C] = r({ sx: k, theme: a })) : (v = Xi(v, w));
              }
            else v = Xi(v, e(C, k, a, u));
        }),
        DS(a, qS(g, v))
      );
    }
    return Array.isArray(s) ? s.map(c) : c(s);
  }
  return r;
}
const to = Aw();
to.filterProps = ['sx'];
function Lw(e, r) {
  var s;
  const o = this;
  if (o.vars) {
    if (
      !((s = o.colorSchemes) != null && s[e]) ||
      typeof o.getColorSchemeSelector != 'function'
    )
      return {};
    let a = o.getColorSchemeSelector(e);
    return a === '&'
      ? r
      : ((a.includes('data-') || a.includes('.')) &&
          (a = `*:where(${a.replace(/\s*&$/, '')}) &`),
        { [a]: r });
  }
  return o.palette.mode === e ? r : {};
}
function vl(e = {}, ...r) {
  const {
      breakpoints: o = {},
      palette: s = {},
      spacing: a,
      shape: u = {},
      ...c
    } = e,
    f = BS(o),
    h = Xg(a);
  let m = $t(
    {
      breakpoints: f,
      direction: 'ltr',
      components: {},
      palette: { mode: 'light', ...s },
      spacing: h,
      shape: { ...HS, ...u },
    },
    c,
  );
  return (
    (m = WS(m)),
    (m.applyStyles = Lw),
    (m = r.reduce((g, v) => $t(g, v), m)),
    (m.unstable_sxConfig = {
      ...gs,
      ...(c == null ? void 0 : c.unstable_sxConfig),
    }),
    (m.unstable_sx = function (v) {
      return to({ sx: v, theme: this });
    }),
    m
  );
}
function $w(e) {
  return Object.keys(e).length === 0;
}
function Mw(e = null) {
  const r = S.useContext(cl);
  return !r || $w(r) ? e : r;
}
const _w = vl();
function xl(e = _w) {
  return Mw(e);
}
function zw({ styles: e, themeId: r, defaultTheme: o = {} }) {
  const s = xl(o),
    a = typeof e == 'function' ? e((r && s[r]) || s) : e;
  return M.jsx(_S, { styles: a });
}
const Fw = (e) => {
  var s;
  const r = { systemProps: {}, otherProps: {} },
    o =
      ((s = e == null ? void 0 : e.theme) == null
        ? void 0
        : s.unstable_sxConfig) ?? gs;
  return (
    Object.keys(e).forEach((a) => {
      o[a] ? (r.systemProps[a] = e[a]) : (r.otherProps[a] = e[a]);
    }),
    r
  );
};
function Yg(e) {
  const { sx: r, ...o } = e,
    { systemProps: s, otherProps: a } = Fw(o);
  let u;
  return (
    Array.isArray(r)
      ? (u = [s, ...r])
      : typeof r == 'function'
      ? (u = (...c) => {
          const f = r(...c);
          return jn(f) ? { ...s, ...f } : s;
        })
      : (u = { ...s, ...r }),
    { ...a, sx: u }
  );
}
const pm = (e) => e,
  Bw = () => {
    let e = pm;
    return {
      configure(r) {
        e = r;
      },
      generate(r) {
        return e(r);
      },
      reset() {
        e = pm;
      },
    };
  },
  Jg = Bw();
function Zg(e) {
  var r,
    o,
    s = '';
  if (typeof e == 'string' || typeof e == 'number') s += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var a = e.length;
      for (r = 0; r < a; r++)
        e[r] && (o = Zg(e[r])) && (s && (s += ' '), (s += o));
    } else for (o in e) e[o] && (s && (s += ' '), (s += o));
  return s;
}
function we() {
  for (var e, r, o = 0, s = '', a = arguments.length; o < a; o++)
    (e = arguments[o]) && (r = Zg(e)) && (s && (s += ' '), (s += r));
  return s;
}
function Dw(e = {}) {
  const {
      themeId: r,
      defaultTheme: o,
      defaultClassName: s = 'MuiBox-root',
      generateClassName: a,
    } = e,
    u = qg('div', {
      shouldForwardProp: (f) => f !== 'theme' && f !== 'sx' && f !== 'as',
    })(to);
  return S.forwardRef(function (h, m) {
    const g = xl(o),
      { className: v, component: C = 'div', ...k } = Yg(h);
    return M.jsx(u, {
      as: C,
      ref: m,
      className: we(v, a ? a(s) : s),
      theme: (r && g[r]) || g,
      ...k,
    });
  });
}
const jw = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected',
};
function Me(e, r, o = 'Mui') {
  const s = jw[r];
  return s ? `${o}-${s}` : `${Jg.generate(e)}-${r}`;
}
function Ae(e, r, o = 'Mui') {
  const s = {};
  return (
    r.forEach((a) => {
      s[a] = Me(e, a, o);
    }),
    s
  );
}
function ey(e) {
  const { variants: r, ...o } = e,
    s = { variants: r, style: cm(o), isProcessed: !0 };
  return (
    s.style === o ||
      (r &&
        r.forEach((a) => {
          typeof a.style != 'function' && (a.style = cm(a.style));
        })),
    s
  );
}
const Uw = vl();
function kc(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
function Ww(e) {
  return e ? (r, o) => o[e] : null;
}
function Hw(e, r, o) {
  e.theme = Kw(e.theme) ? o : e.theme[r] || e.theme;
}
function Wa(e, r) {
  const o = typeof r == 'function' ? r(e) : r;
  if (Array.isArray(o)) return o.flatMap((s) => Wa(e, s));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let s;
    if (o.isProcessed) s = o.style;
    else {
      const { variants: a, ...u } = o;
      s = u;
    }
    return ty(e, o.variants, [s]);
  }
  return o != null && o.isProcessed ? o.style : o;
}
function ty(e, r, o = []) {
  var a;
  let s;
  e: for (let u = 0; u < r.length; u += 1) {
    const c = r[u];
    if (typeof c.props == 'function') {
      if (
        (s ?? (s = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        !c.props(s))
      )
        continue;
    } else
      for (const f in c.props)
        if (
          e[f] !== c.props[f] &&
          ((a = e.ownerState) == null ? void 0 : a[f]) !== c.props[f]
        )
          continue e;
    typeof c.style == 'function'
      ? (s ?? (s = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        o.push(c.style(s)))
      : o.push(c.style);
  }
  return o;
}
function ny(e = {}) {
  const {
    themeId: r,
    defaultTheme: o = Uw,
    rootShouldForwardProp: s = kc,
    slotShouldForwardProp: a = kc,
  } = e;
  function u(f) {
    Hw(f, r, o);
  }
  return (f, h = {}) => {
    zS(f, (O) => O.filter((_) => _ !== to));
    const {
        name: m,
        slot: g,
        skipVariantsResolver: v,
        skipSx: C,
        overridesResolver: k = Ww(Gw(g)),
        ...w
      } = h,
      b = v !== void 0 ? v : (g && g !== 'Root' && g !== 'root') || !1,
      E = C || !1;
    let R = kc;
    g === 'Root' || g === 'root'
      ? (R = s)
      : g
      ? (R = a)
      : qw(f) && (R = void 0);
    const N = qg(f, { shouldForwardProp: R, label: Vw(), ...w }),
      P = (O) => {
        if (typeof O == 'function' && O.__emotion_real !== O)
          return function (z) {
            return Wa(z, O);
          };
        if (jn(O)) {
          const _ = ey(O);
          return _.variants
            ? function (V) {
                return Wa(V, _);
              }
            : _.style;
        }
        return O;
      },
      I = (...O) => {
        const _ = [],
          z = O.map(P),
          V = [];
        if (
          (_.push(u),
          m &&
            k &&
            V.push(function (Z) {
              var ee, ie;
              const ne =
                (ie = (ee = Z.theme.components) == null ? void 0 : ee[m]) ==
                null
                  ? void 0
                  : ie.styleOverrides;
              if (!ne) return null;
              const Q = {};
              for (const U in ne) Q[U] = Wa(Z, ne[U]);
              return k(Z, Q);
            }),
          m &&
            !b &&
            V.push(function (Z) {
              var Q, ee;
              const Y = Z.theme,
                ne =
                  (ee =
                    (Q = Y == null ? void 0 : Y.components) == null
                      ? void 0
                      : Q[m]) == null
                    ? void 0
                    : ee.variants;
              return ne ? ty(Z, ne) : null;
            }),
          E || V.push(to),
          Array.isArray(z[0]))
        ) {
          const j = z.shift(),
            Z = new Array(_.length).fill(''),
            Y = new Array(V.length).fill('');
          let ne;
          (ne = [...Z, ...j, ...Y]),
            (ne.raw = [...Z, ...j.raw, ...Y]),
            _.unshift(ne);
        }
        const G = [..._, ...z, ...V],
          x = N(...G);
        return f.muiName && (x.muiName = f.muiName), x;
      };
    return N.withConfig && (I.withConfig = N.withConfig), I;
  };
}
function Vw(e, r) {
  return void 0;
}
function Kw(e) {
  for (const r in e) return !1;
  return !0;
}
function qw(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function Gw(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Qw = ny();
function os(e, r) {
  const o = { ...r };
  for (const s in e)
    if (Object.prototype.hasOwnProperty.call(e, s)) {
      const a = s;
      if (a === 'components' || a === 'slots') o[a] = { ...e[a], ...o[a] };
      else if (a === 'componentsProps' || a === 'slotProps') {
        const u = e[a],
          c = r[a];
        if (!c) o[a] = u || {};
        else if (!u) o[a] = c;
        else {
          o[a] = { ...c };
          for (const f in u)
            if (Object.prototype.hasOwnProperty.call(u, f)) {
              const h = f;
              o[a][h] = os(u[h], c[h]);
            }
        }
      } else o[a] === void 0 && (o[a] = e[a]);
    }
  return o;
}
function Xw(e) {
  const { theme: r, name: o, props: s } = e;
  return !r ||
    !r.components ||
    !r.components[o] ||
    !r.components[o].defaultProps
    ? s
    : os(r.components[o].defaultProps, s);
}
function Yw({ props: e, name: r, defaultTheme: o, themeId: s }) {
  let a = xl(o);
  return s && (a = a[s] || a), Xw({ theme: a, name: r, props: e });
}
const no = typeof window < 'u' ? S.useLayoutEffect : S.useEffect;
function Jw(e, r = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, o));
}
function Ad(e, r = 0, o = 1) {
  return Jw(e, r, o);
}
function Zw(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let o = e.match(r);
  return (
    o && o[0].length === 1 && (o = o.map((s) => s + s)),
    o
      ? `rgb${o.length === 4 ? 'a' : ''}(${o
          .map((s, a) =>
            a < 3
              ? parseInt(s, 16)
              : Math.round((parseInt(s, 16) / 255) * 1e3) / 1e3,
          )
          .join(', ')})`
      : ''
  );
}
function Ar(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return Ar(Zw(e));
  const r = e.indexOf('('),
    o = e.substring(0, r);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(o))
    throw new Error(sr(9, e));
  let s = e.substring(r + 1, e.length - 1),
    a;
  if (o === 'color') {
    if (
      ((s = s.split(' ')),
      (a = s.shift()),
      s.length === 4 && s[3].charAt(0) === '/' && (s[3] = s[3].slice(1)),
      !['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(
        a,
      ))
    )
      throw new Error(sr(10, a));
  } else s = s.split(',');
  return (
    (s = s.map((u) => parseFloat(u))), { type: o, values: s, colorSpace: a }
  );
}
const eC = (e) => {
    const r = Ar(e);
    return r.values
      .slice(0, 3)
      .map((o, s) => (r.type.includes('hsl') && s !== 0 ? `${o}%` : o))
      .join(' ');
  },
  qi = (e, r) => {
    try {
      return eC(e);
    } catch {
      return e;
    }
  };
function Sl(e) {
  const { type: r, colorSpace: o } = e;
  let { values: s } = e;
  return (
    r.includes('rgb')
      ? (s = s.map((a, u) => (u < 3 ? parseInt(a, 10) : a)))
      : r.includes('hsl') && ((s[1] = `${s[1]}%`), (s[2] = `${s[2]}%`)),
    r.includes('color') ? (s = `${o} ${s.join(' ')}`) : (s = `${s.join(', ')}`),
    `${r}(${s})`
  );
}
function ry(e) {
  e = Ar(e);
  const { values: r } = e,
    o = r[0],
    s = r[1] / 100,
    a = r[2] / 100,
    u = s * Math.min(a, 1 - a),
    c = (m, g = (m + o / 30) % 12) =>
      a - u * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let f = 'rgb';
  const h = [
    Math.round(c(0) * 255),
    Math.round(c(8) * 255),
    Math.round(c(4) * 255),
  ];
  return (
    e.type === 'hsla' && ((f += 'a'), h.push(r[3])), Sl({ type: f, values: h })
  );
}
function Hc(e) {
  e = Ar(e);
  let r = e.type === 'hsl' || e.type === 'hsla' ? Ar(ry(e)).values : e.values;
  return (
    (r = r.map(
      (o) => (
        e.type !== 'color' && (o /= 255),
        o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3))
  );
}
function tC(e, r) {
  const o = Hc(e),
    s = Hc(r);
  return (Math.max(o, s) + 0.05) / (Math.min(o, s) + 0.05);
}
function Cn(e, r) {
  return (
    (e = Ar(e)),
    (r = Ad(r)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${r}`) : (e.values[3] = r),
    Sl(e)
  );
}
function Na(e, r, o) {
  try {
    return Cn(e, r);
  } catch {
    return e;
  }
}
function is(e, r) {
  if (((e = Ar(e)), (r = Ad(r)), e.type.includes('hsl'))) e.values[2] *= 1 - r;
  else if (e.type.includes('rgb') || e.type.includes('color'))
    for (let o = 0; o < 3; o += 1) e.values[o] *= 1 - r;
  return Sl(e);
}
function Ke(e, r, o) {
  try {
    return is(e, r);
  } catch {
    return e;
  }
}
function ss(e, r) {
  if (((e = Ar(e)), (r = Ad(r)), e.type.includes('hsl')))
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.includes('rgb'))
    for (let o = 0; o < 3; o += 1) e.values[o] += (255 - e.values[o]) * r;
  else if (e.type.includes('color'))
    for (let o = 0; o < 3; o += 1) e.values[o] += (1 - e.values[o]) * r;
  return Sl(e);
}
function qe(e, r, o) {
  try {
    return ss(e, r);
  } catch {
    return e;
  }
}
function nC(e, r = 0.15) {
  return Hc(e) > 0.5 ? is(e, r) : ss(e, r);
}
function Aa(e, r, o) {
  try {
    return nC(e, r);
  } catch {
    return e;
  }
}
function hm(...e) {
  return e.reduce(
    (r, o) =>
      o == null
        ? r
        : function (...a) {
            r.apply(this, a), o.apply(this, a);
          },
    () => {},
  );
}
function Ld(e, r = 166) {
  let o;
  function s(...a) {
    const u = () => {
      e.apply(this, a);
    };
    clearTimeout(o), (o = setTimeout(u, r));
  }
  return (
    (s.clear = () => {
      clearTimeout(o);
    }),
    s
  );
}
function Ha(e, r) {
  var o, s, a;
  return (
    S.isValidElement(e) &&
    r.indexOf(
      e.type.muiName ??
        ((a =
          (s = (o = e.type) == null ? void 0 : o._payload) == null
            ? void 0
            : s.value) == null
          ? void 0
          : a.muiName),
    ) !== -1
  );
}
function kn(e) {
  return (e && e.ownerDocument) || document;
}
function Rn(e) {
  return kn(e).defaultView || window;
}
function Vc(e, r) {
  typeof e == 'function' ? e(r) : e && (e.current = r);
}
let mm = 0;
function rC(e) {
  const [r, o] = S.useState(e),
    s = e || r;
  return (
    S.useEffect(() => {
      r == null && ((mm += 1), o(`mui-${mm}`));
    }, [r]),
    s
  );
}
const oC = { ...zc },
  gm = oC.useId;
function oy(e) {
  if (gm !== void 0) {
    const r = gm();
    return e ?? r;
  }
  return rC(e);
}
function ym({ controlled: e, default: r, name: o, state: s = 'value' }) {
  const { current: a } = S.useRef(e !== void 0),
    [u, c] = S.useState(r),
    f = a ? e : u,
    h = S.useCallback((m) => {
      a || c(m);
    }, []);
  return [f, h];
}
function jo(e) {
  const r = S.useRef(e);
  return (
    no(() => {
      r.current = e;
    }),
    S.useRef((...o) => (0, r.current)(...o)).current
  );
}
function Ct(...e) {
  return S.useMemo(
    () =>
      e.every((r) => r == null)
        ? null
        : (r) => {
            e.forEach((o) => {
              Vc(o, r);
            });
          },
    e,
  );
}
const vm = {};
function iy(e, r) {
  const o = S.useRef(vm);
  return o.current === vm && (o.current = e(r)), o;
}
const iC = [];
function sC(e) {
  S.useEffect(e, iC);
}
class $d {
  constructor() {
    zi(this, 'currentId', null);
    zi(this, 'clear', () => {
      this.currentId !== null &&
        (clearTimeout(this.currentId), (this.currentId = null));
    });
    zi(this, 'disposeEffect', () => this.clear);
  }
  static create() {
    return new $d();
  }
  start(r, o) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), o();
      }, r));
  }
}
function sy() {
  const e = iy($d.create).current;
  return sC(e.disposeEffect), e;
}
function xm(e) {
  try {
    return e.matches(':focus-visible');
  } catch {}
  return !1;
}
function ay(e = window) {
  const r = e.document.documentElement.clientWidth;
  return e.innerWidth - r;
}
function Fe(e, r, o = void 0) {
  const s = {};
  for (const a in e) {
    const u = e[a];
    let c = '',
      f = !0;
    for (let h = 0; h < u.length; h += 1) {
      const m = u[h];
      m &&
        ((c += (f === !0 ? '' : ' ') + r(m)),
        (f = !1),
        o && o[m] && (c += ' ' + o[m]));
    }
    s[a] = c;
  }
  return s;
}
function aC(e) {
  return typeof e == 'string';
}
function ly(e, r, o) {
  return e === void 0 || aC(e)
    ? r
    : { ...r, ownerState: { ...r.ownerState, ...o } };
}
function uy(e, r = []) {
  if (e === void 0) return {};
  const o = {};
  return (
    Object.keys(e)
      .filter(
        (s) =>
          s.match(/^on[A-Z]/) && typeof e[s] == 'function' && !r.includes(s),
      )
      .forEach((s) => {
        o[s] = e[s];
      }),
    o
  );
}
function Sm(e) {
  if (e === void 0) return {};
  const r = {};
  return (
    Object.keys(e)
      .filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == 'function'))
      .forEach((o) => {
        r[o] = e[o];
      }),
    r
  );
}
function cy(e) {
  const {
    getSlotProps: r,
    additionalProps: o,
    externalSlotProps: s,
    externalForwardedProps: a,
    className: u,
  } = e;
  if (!r) {
    const k = we(
        o == null ? void 0 : o.className,
        u,
        a == null ? void 0 : a.className,
        s == null ? void 0 : s.className,
      ),
      w = {
        ...(o == null ? void 0 : o.style),
        ...(a == null ? void 0 : a.style),
        ...(s == null ? void 0 : s.style),
      },
      b = { ...o, ...a, ...s };
    return (
      k.length > 0 && (b.className = k),
      Object.keys(w).length > 0 && (b.style = w),
      { props: b, internalRef: void 0 }
    );
  }
  const c = uy({ ...a, ...s }),
    f = Sm(s),
    h = Sm(a),
    m = r(c),
    g = we(
      m == null ? void 0 : m.className,
      o == null ? void 0 : o.className,
      u,
      a == null ? void 0 : a.className,
      s == null ? void 0 : s.className,
    ),
    v = {
      ...(m == null ? void 0 : m.style),
      ...(o == null ? void 0 : o.style),
      ...(a == null ? void 0 : a.style),
      ...(s == null ? void 0 : s.style),
    },
    C = { ...m, ...o, ...h, ...f };
  return (
    g.length > 0 && (C.className = g),
    Object.keys(v).length > 0 && (C.style = v),
    { props: C, internalRef: m.ref }
  );
}
function dy(e, r, o) {
  return typeof e == 'function' ? e(r, o) : e;
}
function wm(e) {
  var v;
  const {
      elementType: r,
      externalSlotProps: o,
      ownerState: s,
      skipResolvingSlotProps: a = !1,
      ...u
    } = e,
    c = a ? {} : dy(o, s),
    { props: f, internalRef: h } = cy({ ...u, externalSlotProps: c }),
    m = Ct(
      h,
      c == null ? void 0 : c.ref,
      (v = e.additionalProps) == null ? void 0 : v.ref,
    );
  return ly(r, { ...f, ref: m }, s);
}
function Qo(e) {
  var r;
  return parseInt(S.version, 10) >= 19
    ? ((r = e == null ? void 0 : e.props) == null ? void 0 : r.ref) || null
    : (e == null ? void 0 : e.ref) || null;
}
const lC = S.createContext(),
  fy = () => S.useContext(lC) ?? !1,
  uC = S.createContext(void 0);
function cC(e) {
  const { theme: r, name: o, props: s } = e;
  if (!r || !r.components || !r.components[o]) return s;
  const a = r.components[o];
  return a.defaultProps
    ? os(a.defaultProps, s)
    : !a.styleOverrides && !a.variants
    ? os(a, s)
    : s;
}
function dC({ props: e, name: r }) {
  const o = S.useContext(uC);
  return cC({ props: e, name: r, theme: { components: o } });
}
const Cm = { theme: void 0 };
function fC(e) {
  let r, o;
  return function (a) {
    let u = r;
    return (
      (u === void 0 || a.theme !== o) &&
        ((Cm.theme = a.theme), (u = ey(e(Cm))), (r = u), (o = a.theme)),
      u
    );
  };
}
function pC(e = '') {
  function r(...s) {
    if (!s.length) return '';
    const a = s[0];
    return typeof a == 'string' &&
      !a.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/,
      )
      ? `, var(--${e ? `${e}-` : ''}${a}${r(...s.slice(1))})`
      : `, ${a}`;
  }
  return (s, ...a) => `var(--${e ? `${e}-` : ''}${s}${r(...a)})`;
}
const bm = (e, r, o, s = []) => {
    let a = e;
    r.forEach((u, c) => {
      c === r.length - 1
        ? Array.isArray(a)
          ? (a[Number(u)] = o)
          : a && typeof a == 'object' && (a[u] = o)
        : a &&
          typeof a == 'object' &&
          (a[u] || (a[u] = s.includes(u) ? [] : {}), (a = a[u]));
    });
  },
  hC = (e, r, o) => {
    function s(a, u = [], c = []) {
      Object.entries(a).forEach(([f, h]) => {
        (!o || !o([...u, f])) &&
          h != null &&
          (typeof h == 'object' && Object.keys(h).length > 0
            ? s(h, [...u, f], Array.isArray(h) ? [...c, f] : c)
            : r([...u, f], h, c));
      });
    }
    s(e);
  },
  mC = (e, r) =>
    typeof r == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((s) =>
          e.includes(s),
        ) || e[e.length - 1].toLowerCase().includes('opacity')
        ? r
        : `${r}px`
      : r;
function Rc(e, r) {
  const { prefix: o, shouldSkipGeneratingVar: s } = r || {},
    a = {},
    u = {},
    c = {};
  return (
    hC(
      e,
      (f, h, m) => {
        if (
          (typeof h == 'string' || typeof h == 'number') &&
          (!s || !s(f, h))
        ) {
          const g = `--${o ? `${o}-` : ''}${f.join('-')}`,
            v = mC(f, h);
          Object.assign(a, { [g]: v }),
            bm(u, f, `var(${g})`, m),
            bm(c, f, `var(${g}, ${v})`, m);
        }
      },
      (f) => f[0] === 'vars',
    ),
    { css: a, vars: u, varsWithDefaults: c }
  );
}
function gC(e, r = {}) {
  const {
      getSelector: o = E,
      disableCssColorScheme: s,
      colorSchemeSelector: a,
    } = r,
    {
      colorSchemes: u = {},
      components: c,
      defaultColorScheme: f = 'light',
      ...h
    } = e,
    { vars: m, css: g, varsWithDefaults: v } = Rc(h, r);
  let C = v;
  const k = {},
    { [f]: w, ...b } = u;
  if (
    (Object.entries(b || {}).forEach(([P, I]) => {
      const { vars: O, css: _, varsWithDefaults: z } = Rc(I, r);
      (C = $t(C, z)), (k[P] = { css: _, vars: O });
    }),
    w)
  ) {
    const { css: P, vars: I, varsWithDefaults: O } = Rc(w, r);
    (C = $t(C, O)), (k[f] = { css: P, vars: I });
  }
  function E(P, I) {
    var _, z;
    let O = a;
    if (
      (a === 'class' && (O = '.%s'),
      a === 'data' && (O = '[data-%s]'),
      a != null &&
        a.startsWith('data-') &&
        !a.includes('%s') &&
        (O = `[${a}="%s"]`),
      P)
    ) {
      if (O === 'media')
        return e.defaultColorScheme === P
          ? ':root'
          : {
              [`@media (prefers-color-scheme: ${
                ((z = (_ = u[P]) == null ? void 0 : _.palette) == null
                  ? void 0
                  : z.mode) || P
              })`]: { ':root': I },
            };
      if (O)
        return e.defaultColorScheme === P
          ? `:root, ${O.replace('%s', String(P))}`
          : O.replace('%s', String(P));
    }
    return ':root';
  }
  return {
    vars: C,
    generateThemeVars: () => {
      let P = { ...m };
      return (
        Object.entries(k).forEach(([, { vars: I }]) => {
          P = $t(P, I);
        }),
        P
      );
    },
    generateStyleSheets: () => {
      var V, G;
      const P = [],
        I = e.defaultColorScheme || 'light';
      function O(x, j) {
        Object.keys(j).length &&
          P.push(typeof x == 'string' ? { [x]: { ...j } } : x);
      }
      O(o(void 0, { ...g }), g);
      const { [I]: _, ...z } = k;
      if (_) {
        const { css: x } = _,
          j =
            (G = (V = u[I]) == null ? void 0 : V.palette) == null
              ? void 0
              : G.mode,
          Z = !s && j ? { colorScheme: j, ...x } : { ...x };
        O(o(I, { ...Z }), Z);
      }
      return (
        Object.entries(z).forEach(([x, { css: j }]) => {
          var ne, Q;
          const Z =
              (Q = (ne = u[x]) == null ? void 0 : ne.palette) == null
                ? void 0
                : Q.mode,
            Y = !s && Z ? { colorScheme: Z, ...j } : { ...j };
          O(o(x, { ...Y }), Y);
        }),
        P
      );
    },
  };
}
function yC(e) {
  return function (o) {
    return e === 'media'
      ? `@media (prefers-color-scheme: ${o})`
      : e
      ? e.startsWith('data-') && !e.includes('%s')
        ? `[${e}="${o}"] &`
        : e === 'class'
        ? `.${o} &`
        : e === 'data'
        ? `[data-${o}] &`
        : `${e.replace('%s', o)} &`
      : '&';
  };
}
const vC = vl(),
  xC = Qw('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        r[`maxWidth${ge(String(o.maxWidth))}`],
        o.fixed && r.fixed,
        o.disableGutters && r.disableGutters,
      ];
    },
  }),
  SC = (e) => Yw({ props: e, name: 'MuiContainer', defaultTheme: vC }),
  wC = (e, r) => {
    const o = (h) => Me(r, h),
      { classes: s, fixed: a, disableGutters: u, maxWidth: c } = e,
      f = {
        root: [
          'root',
          c && `maxWidth${ge(String(c))}`,
          a && 'fixed',
          u && 'disableGutters',
        ],
      };
    return Fe(f, o, s);
  };
function CC(e = {}) {
  const {
      createStyledComponent: r = xC,
      useThemeProps: o = SC,
      componentName: s = 'MuiContainer',
    } = e,
    a = r(
      ({ theme: c, ownerState: f }) => ({
        width: '100%',
        marginLeft: 'auto',
        boxSizing: 'border-box',
        marginRight: 'auto',
        ...(!f.disableGutters && {
          paddingLeft: c.spacing(2),
          paddingRight: c.spacing(2),
          [c.breakpoints.up('sm')]: {
            paddingLeft: c.spacing(3),
            paddingRight: c.spacing(3),
          },
        }),
      }),
      ({ theme: c, ownerState: f }) =>
        f.fixed &&
        Object.keys(c.breakpoints.values).reduce((h, m) => {
          const g = m,
            v = c.breakpoints.values[g];
          return (
            v !== 0 &&
              (h[c.breakpoints.up(g)] = {
                maxWidth: `${v}${c.breakpoints.unit}`,
              }),
            h
          );
        }, {}),
      ({ theme: c, ownerState: f }) => ({
        ...(f.maxWidth === 'xs' && {
          [c.breakpoints.up('xs')]: {
            maxWidth: Math.max(c.breakpoints.values.xs, 444),
          },
        }),
        ...(f.maxWidth &&
          f.maxWidth !== 'xs' && {
            [c.breakpoints.up(f.maxWidth)]: {
              maxWidth: `${c.breakpoints.values[f.maxWidth]}${
                c.breakpoints.unit
              }`,
            },
          }),
      }),
    );
  return S.forwardRef(function (f, h) {
    const m = o(f),
      {
        className: g,
        component: v = 'div',
        disableGutters: C = !1,
        fixed: k = !1,
        maxWidth: w = 'lg',
        classes: b,
        ...E
      } = m,
      R = { ...m, component: v, disableGutters: C, fixed: k, maxWidth: w },
      N = wC(R, s);
    return M.jsx(a, {
      as: v,
      ownerState: R,
      className: we(N.root, g),
      ref: h,
      ...E,
    });
  });
}
function py() {
  return {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: es.white, default: es.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const bC = py();
function hy() {
  return {
    text: {
      primary: es.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: es.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const Em = hy();
function km(e, r, o, s) {
  const a = s.light || s,
    u = s.dark || s * 1.5;
  e[r] ||
    (e.hasOwnProperty(o)
      ? (e[r] = e[o])
      : r === 'light'
      ? (e.light = ss(e.main, a))
      : r === 'dark' && (e.dark = is(e.main, u)));
}
function EC(e = 'light') {
  return e === 'dark'
    ? { main: Ao[200], light: Ao[50], dark: Ao[400] }
    : { main: Ao[700], light: Ao[400], dark: Ao[800] };
}
function kC(e = 'light') {
  return e === 'dark'
    ? { main: No[200], light: No[50], dark: No[400] }
    : { main: No[500], light: No[300], dark: No[700] };
}
function RC(e = 'light') {
  return e === 'dark'
    ? { main: Oo[500], light: Oo[300], dark: Oo[700] }
    : { main: Oo[700], light: Oo[400], dark: Oo[800] };
}
function PC(e = 'light') {
  return e === 'dark'
    ? { main: Lo[400], light: Lo[300], dark: Lo[700] }
    : { main: Lo[700], light: Lo[500], dark: Lo[900] };
}
function TC(e = 'light') {
  return e === 'dark'
    ? { main: $o[400], light: $o[300], dark: $o[700] }
    : { main: $o[800], light: $o[500], dark: $o[900] };
}
function IC(e = 'light') {
  return e === 'dark'
    ? { main: ji[400], light: ji[300], dark: ji[700] }
    : { main: '#ed6c02', light: ji[500], dark: ji[900] };
}
function Md(e) {
  const {
      mode: r = 'light',
      contrastThreshold: o = 3,
      tonalOffset: s = 0.2,
      ...a
    } = e,
    u = e.primary || EC(r),
    c = e.secondary || kC(r),
    f = e.error || RC(r),
    h = e.info || PC(r),
    m = e.success || TC(r),
    g = e.warning || IC(r);
  function v(b) {
    return tC(b, Em.text.primary) >= o ? Em.text.primary : bC.text.primary;
  }
  const C = ({
    color: b,
    name: E,
    mainShade: R = 500,
    lightShade: N = 300,
    darkShade: P = 700,
  }) => {
    if (
      ((b = { ...b }),
      !b.main && b[R] && (b.main = b[R]),
      !b.hasOwnProperty('main'))
    )
      throw new Error(sr(11, E ? ` (${E})` : '', R));
    if (typeof b.main != 'string')
      throw new Error(sr(12, E ? ` (${E})` : '', JSON.stringify(b.main)));
    return (
      km(b, 'light', N, s),
      km(b, 'dark', P, s),
      b.contrastText || (b.contrastText = v(b.main)),
      b
    );
  };
  let k;
  return (
    r === 'light' ? (k = py()) : r === 'dark' && (k = hy()),
    $t(
      {
        common: { ...es },
        mode: r,
        primary: C({ color: u, name: 'primary' }),
        secondary: C({
          color: c,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: C({ color: f, name: 'error' }),
        warning: C({ color: g, name: 'warning' }),
        info: C({ color: h, name: 'info' }),
        success: C({ color: m, name: 'success' }),
        grey: $x,
        contrastThreshold: o,
        getContrastText: v,
        augmentColor: C,
        tonalOffset: s,
        ...k,
      },
      a,
    )
  );
}
function OC(e) {
  const r = {};
  return (
    Object.entries(e).forEach((s) => {
      const [a, u] = s;
      typeof u == 'object' &&
        (r[a] = `${u.fontStyle ? `${u.fontStyle} ` : ''}${
          u.fontVariant ? `${u.fontVariant} ` : ''
        }${u.fontWeight ? `${u.fontWeight} ` : ''}${
          u.fontStretch ? `${u.fontStretch} ` : ''
        }${u.fontSize || ''}${u.lineHeight ? `/${u.lineHeight} ` : ''}${
          u.fontFamily || ''
        }`);
    }),
    r
  );
}
function NC(e, r) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
      [e.up('sm')]: { minHeight: 64 },
    },
    ...r,
  };
}
function AC(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Rm = { textTransform: 'uppercase' },
  Pm = '"Roboto", "Helvetica", "Arial", sans-serif';
function LC(e, r) {
  const {
      fontFamily: o = Pm,
      fontSize: s = 14,
      fontWeightLight: a = 300,
      fontWeightRegular: u = 400,
      fontWeightMedium: c = 500,
      fontWeightBold: f = 700,
      htmlFontSize: h = 16,
      allVariants: m,
      pxToRem: g,
      ...v
    } = typeof r == 'function' ? r(e) : r,
    C = s / 14,
    k = g || ((E) => `${(E / h) * C}rem`),
    w = (E, R, N, P, I) => ({
      fontFamily: o,
      fontWeight: E,
      fontSize: k(R),
      lineHeight: N,
      ...(o === Pm ? { letterSpacing: `${AC(P / R)}em` } : {}),
      ...I,
      ...m,
    }),
    b = {
      h1: w(a, 96, 1.167, -1.5),
      h2: w(a, 60, 1.2, -0.5),
      h3: w(u, 48, 1.167, 0),
      h4: w(u, 34, 1.235, 0.25),
      h5: w(u, 24, 1.334, 0),
      h6: w(c, 20, 1.6, 0.15),
      subtitle1: w(u, 16, 1.75, 0.15),
      subtitle2: w(c, 14, 1.57, 0.1),
      body1: w(u, 16, 1.5, 0.15),
      body2: w(u, 14, 1.43, 0.15),
      button: w(c, 14, 1.75, 0.4, Rm),
      caption: w(u, 12, 1.66, 0.4),
      overline: w(u, 12, 2.66, 1, Rm),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return $t(
    {
      htmlFontSize: h,
      pxToRem: k,
      fontFamily: o,
      fontSize: s,
      fontWeightLight: a,
      fontWeightRegular: u,
      fontWeightMedium: c,
      fontWeightBold: f,
      ...b,
    },
    v,
    { clone: !1 },
  );
}
const $C = 0.2,
  MC = 0.14,
  _C = 0.12;
function et(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${$C})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${MC})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${_C})`,
  ].join(',');
}
const zC = [
    'none',
    et(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    et(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    et(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    et(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    et(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    et(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    et(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    et(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    et(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    et(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    et(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    et(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    et(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    et(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    et(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    et(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    et(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    et(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    et(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    et(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    et(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    et(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    et(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    et(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  FC = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  BC = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Tm(e) {
  return `${Math.round(e)}ms`;
}
function DC(e) {
  if (!e) return 0;
  const r = e / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function jC(e) {
  const r = { ...FC, ...e.easing },
    o = { ...BC, ...e.duration };
  return {
    getAutoHeightDuration: DC,
    create: (a = ['all'], u = {}) => {
      const {
        duration: c = o.standard,
        easing: f = r.easeInOut,
        delay: h = 0,
        ...m
      } = u;
      return (Array.isArray(a) ? a : [a])
        .map(
          (g) =>
            `${g} ${typeof c == 'string' ? c : Tm(c)} ${f} ${
              typeof h == 'string' ? h : Tm(h)
            }`,
        )
        .join(',');
    },
    ...e,
    easing: r,
    duration: o,
  };
}
const UC = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function WC(e) {
  return (
    jn(e) ||
    typeof e > 'u' ||
    typeof e == 'string' ||
    typeof e == 'boolean' ||
    typeof e == 'number' ||
    Array.isArray(e)
  );
}
function my(e = {}) {
  const r = { ...e };
  function o(s) {
    const a = Object.entries(s);
    for (let u = 0; u < a.length; u++) {
      const [c, f] = a[u];
      !WC(f) || c.startsWith('unstable_')
        ? delete s[c]
        : jn(f) && ((s[c] = { ...f }), o(s[c]));
    }
  }
  return (
    o(r),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function Kc(e = {}, ...r) {
  const {
    breakpoints: o,
    mixins: s = {},
    spacing: a,
    palette: u = {},
    transitions: c = {},
    typography: f = {},
    shape: h,
    ...m
  } = e;
  if (e.vars) throw new Error(sr(20));
  const g = Md(u),
    v = vl(e);
  let C = $t(v, {
    mixins: NC(v.breakpoints, s),
    palette: g,
    shadows: zC.slice(),
    typography: LC(g, f),
    transitions: jC(c),
    zIndex: { ...UC },
  });
  return (
    (C = $t(C, m)),
    (C = r.reduce((k, w) => $t(k, w), C)),
    (C.unstable_sxConfig = {
      ...gs,
      ...(m == null ? void 0 : m.unstable_sxConfig),
    }),
    (C.unstable_sx = function (w) {
      return to({ sx: w, theme: this });
    }),
    (C.toRuntimeSource = my),
    C
  );
}
function qc(e) {
  let r;
  return (
    e < 1 ? (r = 5.11916 * e ** 2) : (r = 4.5 * Math.log(e + 1) + 2),
    Math.round(r * 10) / 1e3
  );
}
const HC = [...Array(25)].map((e, r) => {
  if (r === 0) return 'none';
  const o = qc(r);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function gy(e) {
  return {
    inputPlaceholder: e === 'dark' ? 0.5 : 0.42,
    inputUnderline: e === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: e === 'dark' ? 0.2 : 0.12,
    switchTrack: e === 'dark' ? 0.3 : 0.38,
  };
}
function yy(e) {
  return e === 'dark' ? HC : [];
}
function VC(e) {
  const { palette: r = { mode: 'light' }, opacity: o, overlays: s, ...a } = e,
    u = Md(r);
  return {
    palette: u,
    opacity: { ...gy(u.mode), ...o },
    overlays: s || yy(u.mode),
    ...a,
  };
}
function KC(e) {
  var r;
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/,
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === 'palette' &&
      !!((r = e[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const qC = (e) => [
    ...[...Array(25)].map((r, o) => `--${e ? `${e}-` : ''}overlays-${o}`),
    `--${e ? `${e}-` : ''}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ''}palette-AppBar-darkColor`,
  ],
  GC = (e) => (r, o) => {
    const s = e.rootSelector || ':root',
      a = e.colorSchemeSelector;
    let u = a;
    if (
      (a === 'class' && (u = '.%s'),
      a === 'data' && (u = '[data-%s]'),
      a != null &&
        a.startsWith('data-') &&
        !a.includes('%s') &&
        (u = `[${a}="%s"]`),
      e.defaultColorScheme === r)
    ) {
      if (r === 'dark') {
        const c = {};
        return (
          qC(e.cssVarPrefix).forEach((f) => {
            (c[f] = o[f]), delete o[f];
          }),
          u === 'media'
            ? { [s]: o, '@media (prefers-color-scheme: dark)': { [s]: c } }
            : u
            ? { [u.replace('%s', r)]: c, [`${s}, ${u.replace('%s', r)}`]: o }
            : { [s]: { ...o, ...c } }
        );
      }
      if (u && u !== 'media') return `${s}, ${u.replace('%s', String(r))}`;
    } else if (r) {
      if (u === 'media')
        return { [`@media (prefers-color-scheme: ${String(r)})`]: { [s]: o } };
      if (u) return u.replace('%s', String(r));
    }
    return s;
  };
function QC(e, r) {
  r.forEach((o) => {
    e[o] || (e[o] = {});
  });
}
function H(e, r, o) {
  !e[r] && o && (e[r] = o);
}
function Gi(e) {
  return typeof e != 'string' || !e.startsWith('hsl') ? e : ry(e);
}
function rr(e, r) {
  `${r}Channel` in e || (e[`${r}Channel`] = qi(Gi(e[r])));
}
function XC(e) {
  return typeof e == 'number'
    ? `${e}px`
    : typeof e == 'string' || typeof e == 'function' || Array.isArray(e)
    ? e
    : '8px';
}
const _n = (e) => {
    try {
      return e();
    } catch {}
  },
  YC = (e = 'mui') => pC(e);
function Pc(e, r, o, s) {
  if (!r) return;
  r = r === !0 ? {} : r;
  const a = s === 'dark' ? 'dark' : 'light';
  if (!o) {
    e[s] = VC({
      ...r,
      palette: { mode: a, ...(r == null ? void 0 : r.palette) },
    });
    return;
  }
  const { palette: u, ...c } = Kc({
    ...o,
    palette: { mode: a, ...(r == null ? void 0 : r.palette) },
  });
  return (
    (e[s] = {
      ...r,
      palette: u,
      opacity: { ...gy(a), ...(r == null ? void 0 : r.opacity) },
      overlays: (r == null ? void 0 : r.overlays) || yy(a),
    }),
    c
  );
}
function JC(e = {}, ...r) {
  const {
      colorSchemes: o = { light: !0 },
      defaultColorScheme: s,
      disableCssColorScheme: a = !1,
      cssVarPrefix: u = 'mui',
      shouldSkipGeneratingVar: c = KC,
      colorSchemeSelector: f = o.light && o.dark ? 'media' : void 0,
      rootSelector: h = ':root',
      ...m
    } = e,
    g = Object.keys(o)[0],
    v = s || (o.light && g !== 'light' ? 'light' : g),
    C = YC(u),
    { [v]: k, light: w, dark: b, ...E } = o,
    R = { ...E };
  let N = k;
  if (
    (((v === 'dark' && !('dark' in o)) || (v === 'light' && !('light' in o))) &&
      (N = !0),
    !N)
  )
    throw new Error(sr(21, v));
  const P = Pc(R, N, m, v);
  w && !R.light && Pc(R, w, void 0, 'light'),
    b && !R.dark && Pc(R, b, void 0, 'dark');
  let I = {
    defaultColorScheme: v,
    ...P,
    cssVarPrefix: u,
    colorSchemeSelector: f,
    rootSelector: h,
    getCssVar: C,
    colorSchemes: R,
    font: { ...OC(P.typography), ...P.font },
    spacing: XC(m.spacing),
  };
  Object.keys(I.colorSchemes).forEach((G) => {
    const x = I.colorSchemes[G].palette,
      j = (Z) => {
        const Y = Z.split('-'),
          ne = Y[1],
          Q = Y[2];
        return C(Z, x[ne][Q]);
      };
    if (
      (x.mode === 'light' &&
        (H(x.common, 'background', '#fff'),
        H(x.common, 'onBackground', '#000')),
      x.mode === 'dark' &&
        (H(x.common, 'background', '#000'),
        H(x.common, 'onBackground', '#fff')),
      QC(x, [
        'Alert',
        'AppBar',
        'Avatar',
        'Button',
        'Chip',
        'FilledInput',
        'LinearProgress',
        'Skeleton',
        'Slider',
        'SnackbarContent',
        'SpeedDialAction',
        'StepConnector',
        'StepContent',
        'Switch',
        'TableCell',
        'Tooltip',
      ]),
      x.mode === 'light')
    ) {
      H(x.Alert, 'errorColor', Ke(x.error.light, 0.6)),
        H(x.Alert, 'infoColor', Ke(x.info.light, 0.6)),
        H(x.Alert, 'successColor', Ke(x.success.light, 0.6)),
        H(x.Alert, 'warningColor', Ke(x.warning.light, 0.6)),
        H(x.Alert, 'errorFilledBg', j('palette-error-main')),
        H(x.Alert, 'infoFilledBg', j('palette-info-main')),
        H(x.Alert, 'successFilledBg', j('palette-success-main')),
        H(x.Alert, 'warningFilledBg', j('palette-warning-main')),
        H(
          x.Alert,
          'errorFilledColor',
          _n(() => x.getContrastText(x.error.main)),
        ),
        H(
          x.Alert,
          'infoFilledColor',
          _n(() => x.getContrastText(x.info.main)),
        ),
        H(
          x.Alert,
          'successFilledColor',
          _n(() => x.getContrastText(x.success.main)),
        ),
        H(
          x.Alert,
          'warningFilledColor',
          _n(() => x.getContrastText(x.warning.main)),
        ),
        H(x.Alert, 'errorStandardBg', qe(x.error.light, 0.9)),
        H(x.Alert, 'infoStandardBg', qe(x.info.light, 0.9)),
        H(x.Alert, 'successStandardBg', qe(x.success.light, 0.9)),
        H(x.Alert, 'warningStandardBg', qe(x.warning.light, 0.9)),
        H(x.Alert, 'errorIconColor', j('palette-error-main')),
        H(x.Alert, 'infoIconColor', j('palette-info-main')),
        H(x.Alert, 'successIconColor', j('palette-success-main')),
        H(x.Alert, 'warningIconColor', j('palette-warning-main')),
        H(x.AppBar, 'defaultBg', j('palette-grey-100')),
        H(x.Avatar, 'defaultBg', j('palette-grey-400')),
        H(x.Button, 'inheritContainedBg', j('palette-grey-300')),
        H(x.Button, 'inheritContainedHoverBg', j('palette-grey-A100')),
        H(x.Chip, 'defaultBorder', j('palette-grey-400')),
        H(x.Chip, 'defaultAvatarColor', j('palette-grey-700')),
        H(x.Chip, 'defaultIconColor', j('palette-grey-700')),
        H(x.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
        H(x.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
        H(x.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
        H(x.LinearProgress, 'primaryBg', qe(x.primary.main, 0.62)),
        H(x.LinearProgress, 'secondaryBg', qe(x.secondary.main, 0.62)),
        H(x.LinearProgress, 'errorBg', qe(x.error.main, 0.62)),
        H(x.LinearProgress, 'infoBg', qe(x.info.main, 0.62)),
        H(x.LinearProgress, 'successBg', qe(x.success.main, 0.62)),
        H(x.LinearProgress, 'warningBg', qe(x.warning.main, 0.62)),
        H(x.Skeleton, 'bg', `rgba(${j('palette-text-primaryChannel')} / 0.11)`),
        H(x.Slider, 'primaryTrack', qe(x.primary.main, 0.62)),
        H(x.Slider, 'secondaryTrack', qe(x.secondary.main, 0.62)),
        H(x.Slider, 'errorTrack', qe(x.error.main, 0.62)),
        H(x.Slider, 'infoTrack', qe(x.info.main, 0.62)),
        H(x.Slider, 'successTrack', qe(x.success.main, 0.62)),
        H(x.Slider, 'warningTrack', qe(x.warning.main, 0.62));
      const Z = Aa(x.background.default, 0.8);
      H(x.SnackbarContent, 'bg', Z),
        H(
          x.SnackbarContent,
          'color',
          _n(() => x.getContrastText(Z)),
        ),
        H(x.SpeedDialAction, 'fabHoverBg', Aa(x.background.paper, 0.15)),
        H(x.StepConnector, 'border', j('palette-grey-400')),
        H(x.StepContent, 'border', j('palette-grey-400')),
        H(x.Switch, 'defaultColor', j('palette-common-white')),
        H(x.Switch, 'defaultDisabledColor', j('palette-grey-100')),
        H(x.Switch, 'primaryDisabledColor', qe(x.primary.main, 0.62)),
        H(x.Switch, 'secondaryDisabledColor', qe(x.secondary.main, 0.62)),
        H(x.Switch, 'errorDisabledColor', qe(x.error.main, 0.62)),
        H(x.Switch, 'infoDisabledColor', qe(x.info.main, 0.62)),
        H(x.Switch, 'successDisabledColor', qe(x.success.main, 0.62)),
        H(x.Switch, 'warningDisabledColor', qe(x.warning.main, 0.62)),
        H(x.TableCell, 'border', qe(Na(x.divider, 1), 0.88)),
        H(x.Tooltip, 'bg', Na(x.grey[700], 0.92));
    }
    if (x.mode === 'dark') {
      H(x.Alert, 'errorColor', qe(x.error.light, 0.6)),
        H(x.Alert, 'infoColor', qe(x.info.light, 0.6)),
        H(x.Alert, 'successColor', qe(x.success.light, 0.6)),
        H(x.Alert, 'warningColor', qe(x.warning.light, 0.6)),
        H(x.Alert, 'errorFilledBg', j('palette-error-dark')),
        H(x.Alert, 'infoFilledBg', j('palette-info-dark')),
        H(x.Alert, 'successFilledBg', j('palette-success-dark')),
        H(x.Alert, 'warningFilledBg', j('palette-warning-dark')),
        H(
          x.Alert,
          'errorFilledColor',
          _n(() => x.getContrastText(x.error.dark)),
        ),
        H(
          x.Alert,
          'infoFilledColor',
          _n(() => x.getContrastText(x.info.dark)),
        ),
        H(
          x.Alert,
          'successFilledColor',
          _n(() => x.getContrastText(x.success.dark)),
        ),
        H(
          x.Alert,
          'warningFilledColor',
          _n(() => x.getContrastText(x.warning.dark)),
        ),
        H(x.Alert, 'errorStandardBg', Ke(x.error.light, 0.9)),
        H(x.Alert, 'infoStandardBg', Ke(x.info.light, 0.9)),
        H(x.Alert, 'successStandardBg', Ke(x.success.light, 0.9)),
        H(x.Alert, 'warningStandardBg', Ke(x.warning.light, 0.9)),
        H(x.Alert, 'errorIconColor', j('palette-error-main')),
        H(x.Alert, 'infoIconColor', j('palette-info-main')),
        H(x.Alert, 'successIconColor', j('palette-success-main')),
        H(x.Alert, 'warningIconColor', j('palette-warning-main')),
        H(x.AppBar, 'defaultBg', j('palette-grey-900')),
        H(x.AppBar, 'darkBg', j('palette-background-paper')),
        H(x.AppBar, 'darkColor', j('palette-text-primary')),
        H(x.Avatar, 'defaultBg', j('palette-grey-600')),
        H(x.Button, 'inheritContainedBg', j('palette-grey-800')),
        H(x.Button, 'inheritContainedHoverBg', j('palette-grey-700')),
        H(x.Chip, 'defaultBorder', j('palette-grey-700')),
        H(x.Chip, 'defaultAvatarColor', j('palette-grey-300')),
        H(x.Chip, 'defaultIconColor', j('palette-grey-300')),
        H(x.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
        H(x.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
        H(x.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
        H(x.LinearProgress, 'primaryBg', Ke(x.primary.main, 0.5)),
        H(x.LinearProgress, 'secondaryBg', Ke(x.secondary.main, 0.5)),
        H(x.LinearProgress, 'errorBg', Ke(x.error.main, 0.5)),
        H(x.LinearProgress, 'infoBg', Ke(x.info.main, 0.5)),
        H(x.LinearProgress, 'successBg', Ke(x.success.main, 0.5)),
        H(x.LinearProgress, 'warningBg', Ke(x.warning.main, 0.5)),
        H(x.Skeleton, 'bg', `rgba(${j('palette-text-primaryChannel')} / 0.13)`),
        H(x.Slider, 'primaryTrack', Ke(x.primary.main, 0.5)),
        H(x.Slider, 'secondaryTrack', Ke(x.secondary.main, 0.5)),
        H(x.Slider, 'errorTrack', Ke(x.error.main, 0.5)),
        H(x.Slider, 'infoTrack', Ke(x.info.main, 0.5)),
        H(x.Slider, 'successTrack', Ke(x.success.main, 0.5)),
        H(x.Slider, 'warningTrack', Ke(x.warning.main, 0.5));
      const Z = Aa(x.background.default, 0.98);
      H(x.SnackbarContent, 'bg', Z),
        H(
          x.SnackbarContent,
          'color',
          _n(() => x.getContrastText(Z)),
        ),
        H(x.SpeedDialAction, 'fabHoverBg', Aa(x.background.paper, 0.15)),
        H(x.StepConnector, 'border', j('palette-grey-600')),
        H(x.StepContent, 'border', j('palette-grey-600')),
        H(x.Switch, 'defaultColor', j('palette-grey-300')),
        H(x.Switch, 'defaultDisabledColor', j('palette-grey-600')),
        H(x.Switch, 'primaryDisabledColor', Ke(x.primary.main, 0.55)),
        H(x.Switch, 'secondaryDisabledColor', Ke(x.secondary.main, 0.55)),
        H(x.Switch, 'errorDisabledColor', Ke(x.error.main, 0.55)),
        H(x.Switch, 'infoDisabledColor', Ke(x.info.main, 0.55)),
        H(x.Switch, 'successDisabledColor', Ke(x.success.main, 0.55)),
        H(x.Switch, 'warningDisabledColor', Ke(x.warning.main, 0.55)),
        H(x.TableCell, 'border', Ke(Na(x.divider, 1), 0.68)),
        H(x.Tooltip, 'bg', Na(x.grey[700], 0.92));
    }
    rr(x.background, 'default'),
      rr(x.background, 'paper'),
      rr(x.common, 'background'),
      rr(x.common, 'onBackground'),
      rr(x, 'divider'),
      Object.keys(x).forEach((Z) => {
        const Y = x[Z];
        Z !== 'tonalOffset' &&
          Y &&
          typeof Y == 'object' &&
          (Y.main && H(x[Z], 'mainChannel', qi(Gi(Y.main))),
          Y.light && H(x[Z], 'lightChannel', qi(Gi(Y.light))),
          Y.dark && H(x[Z], 'darkChannel', qi(Gi(Y.dark))),
          Y.contrastText &&
            H(x[Z], 'contrastTextChannel', qi(Gi(Y.contrastText))),
          Z === 'text' && (rr(x[Z], 'primary'), rr(x[Z], 'secondary')),
          Z === 'action' &&
            (Y.active && rr(x[Z], 'active'),
            Y.selected && rr(x[Z], 'selected')));
      });
  }),
    (I = r.reduce((G, x) => $t(G, x), I));
  const O = {
      prefix: u,
      disableCssColorScheme: a,
      shouldSkipGeneratingVar: c,
      getSelector: GC(I),
    },
    { vars: _, generateThemeVars: z, generateStyleSheets: V } = gC(I, O);
  return (
    (I.vars = _),
    Object.entries(I.colorSchemes[I.defaultColorScheme]).forEach(([G, x]) => {
      I[G] = x;
    }),
    (I.generateThemeVars = z),
    (I.generateStyleSheets = V),
    (I.generateSpacing = function () {
      return Xg(m.spacing, Od(this));
    }),
    (I.getColorSchemeSelector = yC(f)),
    (I.spacing = I.generateSpacing()),
    (I.shouldSkipGeneratingVar = c),
    (I.unstable_sxConfig = {
      ...gs,
      ...(m == null ? void 0 : m.unstable_sxConfig),
    }),
    (I.unstable_sx = function (x) {
      return to({ sx: x, theme: this });
    }),
    (I.toRuntimeSource = my),
    I
  );
}
function Im(e, r, o) {
  e.colorSchemes &&
    o &&
    (e.colorSchemes[r] = {
      ...(o !== !0 && o),
      palette: Md({ ...(o === !0 ? {} : o.palette), mode: r }),
    });
}
function vy(e = {}, ...r) {
  const {
      palette: o,
      cssVariables: s = !1,
      colorSchemes: a = o ? void 0 : { light: !0 },
      defaultColorScheme: u = o == null ? void 0 : o.mode,
      ...c
    } = e,
    f = u || 'light',
    h = a == null ? void 0 : a[f],
    m = {
      ...a,
      ...(o
        ? { [f]: { ...(typeof h != 'boolean' && h), palette: o } }
        : void 0),
    };
  if (s === !1) {
    if (!('colorSchemes' in e)) return Kc(e, ...r);
    let g = o;
    'palette' in e ||
      (m[f] &&
        (m[f] !== !0
          ? (g = m[f].palette)
          : f === 'dark' && (g = { mode: 'dark' })));
    const v = Kc({ ...e, palette: g }, ...r);
    return (
      (v.defaultColorScheme = f),
      (v.colorSchemes = m),
      v.palette.mode === 'light' &&
        ((v.colorSchemes.light = {
          ...(m.light !== !0 && m.light),
          palette: v.palette,
        }),
        Im(v, 'dark', m.dark)),
      v.palette.mode === 'dark' &&
        ((v.colorSchemes.dark = {
          ...(m.dark !== !0 && m.dark),
          palette: v.palette,
        }),
        Im(v, 'light', m.light)),
      v
    );
  }
  return (
    !o && !('light' in m) && f === 'light' && (m.light = !0),
    JC(
      {
        ...c,
        colorSchemes: m,
        defaultColorScheme: f,
        ...(typeof s != 'boolean' && s),
      },
      ...r,
    )
  );
}
const _d = vy();
function ys() {
  const e = xl(_d);
  return e[sl] || e;
}
function xy(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const pn = (e) => xy(e) && e !== 'classes',
  de = ny({ themeId: sl, defaultTheme: _d, rootShouldForwardProp: pn });
function ZC(e) {
  return M.jsx(zw, { ...e, defaultTheme: _d, themeId: sl });
}
function eb(e) {
  return function (o) {
    return M.jsx(ZC, {
      styles: typeof e == 'function' ? (s) => e({ theme: s, ...o }) : e,
    });
  };
}
function tb() {
  return Yg;
}
const He = fC;
function Be(e) {
  return dC(e);
}
function nb(e) {
  return Me('MuiSvgIcon', e);
}
Ae('MuiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge',
]);
const rb = (e) => {
    const { color: r, fontSize: o, classes: s } = e,
      a = {
        root: ['root', r !== 'inherit' && `color${ge(r)}`, `fontSize${ge(o)}`],
      };
    return Fe(a, nb, s);
  },
  ob = de('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        o.color !== 'inherit' && r[`color${ge(o.color)}`],
        r[`fontSize${ge(o.fontSize)}`],
      ];
    },
  })(
    He(({ theme: e }) => {
      var r, o, s, a, u, c, f, h, m, g, v, C, k, w;
      return {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        flexShrink: 0,
        transition:
          (a = (r = e.transitions) == null ? void 0 : r.create) == null
            ? void 0
            : a.call(r, 'fill', {
                duration:
                  (s =
                    (o = (e.vars ?? e).transitions) == null
                      ? void 0
                      : o.duration) == null
                    ? void 0
                    : s.shorter,
              }),
        variants: [
          { props: (b) => !b.hasSvgAsChild, style: { fill: 'currentColor' } },
          { props: { fontSize: 'inherit' }, style: { fontSize: 'inherit' } },
          {
            props: { fontSize: 'small' },
            style: {
              fontSize:
                ((c = (u = e.typography) == null ? void 0 : u.pxToRem) == null
                  ? void 0
                  : c.call(u, 20)) || '1.25rem',
            },
          },
          {
            props: { fontSize: 'medium' },
            style: {
              fontSize:
                ((h = (f = e.typography) == null ? void 0 : f.pxToRem) == null
                  ? void 0
                  : h.call(f, 24)) || '1.5rem',
            },
          },
          {
            props: { fontSize: 'large' },
            style: {
              fontSize:
                ((g = (m = e.typography) == null ? void 0 : m.pxToRem) == null
                  ? void 0
                  : g.call(m, 35)) || '2.1875rem',
            },
          },
          ...Object.entries((e.vars ?? e).palette)
            .filter(([, b]) => b && b.main)
            .map(([b]) => {
              var E, R;
              return {
                props: { color: b },
                style: {
                  color:
                    (R = (E = (e.vars ?? e).palette) == null ? void 0 : E[b]) ==
                    null
                      ? void 0
                      : R.main,
                },
              };
            }),
          {
            props: { color: 'action' },
            style: {
              color:
                (C = (v = (e.vars ?? e).palette) == null ? void 0 : v.action) ==
                null
                  ? void 0
                  : C.active,
            },
          },
          {
            props: { color: 'disabled' },
            style: {
              color:
                (w = (k = (e.vars ?? e).palette) == null ? void 0 : k.action) ==
                null
                  ? void 0
                  : w.disabled,
            },
          },
          { props: { color: 'inherit' }, style: { color: void 0 } },
        ],
      };
    }),
  ),
  Gc = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiSvgIcon' }),
      {
        children: a,
        className: u,
        color: c = 'inherit',
        component: f = 'svg',
        fontSize: h = 'medium',
        htmlColor: m,
        inheritViewBox: g = !1,
        titleAccess: v,
        viewBox: C = '0 0 24 24',
        ...k
      } = s,
      w = S.isValidElement(a) && a.type === 'svg',
      b = {
        ...s,
        color: c,
        component: f,
        fontSize: h,
        instanceFontSize: r.fontSize,
        inheritViewBox: g,
        viewBox: C,
        hasSvgAsChild: w,
      },
      E = {};
    g || (E.viewBox = C);
    const R = rb(b);
    return M.jsxs(ob, {
      as: f,
      className: we(R.root, u),
      focusable: 'false',
      color: m,
      'aria-hidden': v ? void 0 : !0,
      role: v ? 'img' : void 0,
      ref: o,
      ...E,
      ...k,
      ...(w && a.props),
      ownerState: b,
      children: [
        w ? a.props.children : a,
        v ? M.jsx('title', { children: v }) : null,
      ],
    });
  });
Gc.muiName = 'SvgIcon';
function Hn(e, r) {
  function o(s, a) {
    return M.jsx(Gc, { 'data-testid': `${r}Icon`, ref: a, ...s, children: e });
  }
  return (o.muiName = Gc.muiName), S.memo(S.forwardRef(o));
}
function Sy(e, r) {
  if (e == null) return {};
  var o = {};
  for (var s in e)
    if ({}.hasOwnProperty.call(e, s)) {
      if (r.includes(s)) continue;
      o[s] = e[s];
    }
  return o;
}
function Qc(e, r) {
  return (
    (Qc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (o, s) {
          return (o.__proto__ = s), o;
        }),
    Qc(e, r)
  );
}
function wy(e, r) {
  (e.prototype = Object.create(r.prototype)),
    (e.prototype.constructor = e),
    Qc(e, r);
}
const Om = { disabled: !1 },
  Za = bn.createContext(null);
var ib = function (r) {
    return r.scrollTop;
  },
  Qi = 'unmounted',
  Gr = 'exited',
  Qr = 'entering',
  zo = 'entered',
  Xc = 'exiting',
  Tn = (function (e) {
    wy(r, e);
    function r(s, a) {
      var u;
      u = e.call(this, s, a) || this;
      var c = a,
        f = c && !c.isMounting ? s.enter : s.appear,
        h;
      return (
        (u.appearStatus = null),
        s.in
          ? f
            ? ((h = Gr), (u.appearStatus = Qr))
            : (h = zo)
          : s.unmountOnExit || s.mountOnEnter
          ? (h = Qi)
          : (h = Gr),
        (u.state = { status: h }),
        (u.nextCallback = null),
        u
      );
    }
    r.getDerivedStateFromProps = function (a, u) {
      var c = a.in;
      return c && u.status === Qi ? { status: Gr } : null;
    };
    var o = r.prototype;
    return (
      (o.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (o.componentDidUpdate = function (a) {
        var u = null;
        if (a !== this.props) {
          var c = this.state.status;
          this.props.in
            ? c !== Qr && c !== zo && (u = Qr)
            : (c === Qr || c === zo) && (u = Xc);
        }
        this.updateStatus(!1, u);
      }),
      (o.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (o.getTimeouts = function () {
        var a = this.props.timeout,
          u,
          c,
          f;
        return (
          (u = c = f = a),
          a != null &&
            typeof a != 'number' &&
            ((u = a.exit),
            (c = a.enter),
            (f = a.appear !== void 0 ? a.appear : c)),
          { exit: u, enter: c, appear: f }
        );
      }),
      (o.updateStatus = function (a, u) {
        if ((a === void 0 && (a = !1), u !== null))
          if ((this.cancelNextCallback(), u === Qr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var c = this.props.nodeRef
                ? this.props.nodeRef.current
                : Ia.findDOMNode(this);
              c && ib(c);
            }
            this.performEnter(a);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Gr &&
            this.setState({ status: Qi });
      }),
      (o.performEnter = function (a) {
        var u = this,
          c = this.props.enter,
          f = this.context ? this.context.isMounting : a,
          h = this.props.nodeRef ? [f] : [Ia.findDOMNode(this), f],
          m = h[0],
          g = h[1],
          v = this.getTimeouts(),
          C = f ? v.appear : v.enter;
        if ((!a && !c) || Om.disabled) {
          this.safeSetState({ status: zo }, function () {
            u.props.onEntered(m);
          });
          return;
        }
        this.props.onEnter(m, g),
          this.safeSetState({ status: Qr }, function () {
            u.props.onEntering(m, g),
              u.onTransitionEnd(C, function () {
                u.safeSetState({ status: zo }, function () {
                  u.props.onEntered(m, g);
                });
              });
          });
      }),
      (o.performExit = function () {
        var a = this,
          u = this.props.exit,
          c = this.getTimeouts(),
          f = this.props.nodeRef ? void 0 : Ia.findDOMNode(this);
        if (!u || Om.disabled) {
          this.safeSetState({ status: Gr }, function () {
            a.props.onExited(f);
          });
          return;
        }
        this.props.onExit(f),
          this.safeSetState({ status: Xc }, function () {
            a.props.onExiting(f),
              a.onTransitionEnd(c.exit, function () {
                a.safeSetState({ status: Gr }, function () {
                  a.props.onExited(f);
                });
              });
          });
      }),
      (o.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (o.safeSetState = function (a, u) {
        (u = this.setNextCallback(u)), this.setState(a, u);
      }),
      (o.setNextCallback = function (a) {
        var u = this,
          c = !0;
        return (
          (this.nextCallback = function (f) {
            c && ((c = !1), (u.nextCallback = null), a(f));
          }),
          (this.nextCallback.cancel = function () {
            c = !1;
          }),
          this.nextCallback
        );
      }),
      (o.onTransitionEnd = function (a, u) {
        this.setNextCallback(u);
        var c = this.props.nodeRef
            ? this.props.nodeRef.current
            : Ia.findDOMNode(this),
          f = a == null && !this.props.addEndListener;
        if (!c || f) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var h = this.props.nodeRef
              ? [this.nextCallback]
              : [c, this.nextCallback],
            m = h[0],
            g = h[1];
          this.props.addEndListener(m, g);
        }
        a != null && setTimeout(this.nextCallback, a);
      }),
      (o.render = function () {
        var a = this.state.status;
        if (a === Qi) return null;
        var u = this.props,
          c = u.children;
        u.in,
          u.mountOnEnter,
          u.unmountOnExit,
          u.appear,
          u.enter,
          u.exit,
          u.timeout,
          u.addEndListener,
          u.onEnter,
          u.onEntering,
          u.onEntered,
          u.onExit,
          u.onExiting,
          u.onExited,
          u.nodeRef;
        var f = Sy(u, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return bn.createElement(
          Za.Provider,
          { value: null },
          typeof c == 'function'
            ? c(a, f)
            : bn.cloneElement(bn.Children.only(c), f),
        );
      }),
      r
    );
  })(bn.Component);
Tn.contextType = Za;
Tn.propTypes = {};
function Mo() {}
Tn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Mo,
  onEntering: Mo,
  onEntered: Mo,
  onExit: Mo,
  onExiting: Mo,
  onExited: Mo,
};
Tn.UNMOUNTED = Qi;
Tn.EXITED = Gr;
Tn.ENTERING = Qr;
Tn.ENTERED = zo;
Tn.EXITING = Xc;
function sb(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function zd(e, r) {
  var o = function (u) {
      return r && S.isValidElement(u) ? r(u) : u;
    },
    s = Object.create(null);
  return (
    e &&
      S.Children.map(e, function (a) {
        return a;
      }).forEach(function (a) {
        s[a.key] = o(a);
      }),
    s
  );
}
function ab(e, r) {
  (e = e || {}), (r = r || {});
  function o(g) {
    return g in r ? r[g] : e[g];
  }
  var s = Object.create(null),
    a = [];
  for (var u in e) u in r ? a.length && ((s[u] = a), (a = [])) : a.push(u);
  var c,
    f = {};
  for (var h in r) {
    if (s[h])
      for (c = 0; c < s[h].length; c++) {
        var m = s[h][c];
        f[s[h][c]] = o(m);
      }
    f[h] = o(h);
  }
  for (c = 0; c < a.length; c++) f[a[c]] = o(a[c]);
  return f;
}
function Yr(e, r, o) {
  return o[r] != null ? o[r] : e.props[r];
}
function lb(e, r) {
  return zd(e.children, function (o) {
    return S.cloneElement(o, {
      onExited: r.bind(null, o),
      in: !0,
      appear: Yr(o, 'appear', e),
      enter: Yr(o, 'enter', e),
      exit: Yr(o, 'exit', e),
    });
  });
}
function ub(e, r, o) {
  var s = zd(e.children),
    a = ab(r, s);
  return (
    Object.keys(a).forEach(function (u) {
      var c = a[u];
      if (S.isValidElement(c)) {
        var f = u in r,
          h = u in s,
          m = r[u],
          g = S.isValidElement(m) && !m.props.in;
        h && (!f || g)
          ? (a[u] = S.cloneElement(c, {
              onExited: o.bind(null, c),
              in: !0,
              exit: Yr(c, 'exit', e),
              enter: Yr(c, 'enter', e),
            }))
          : !h && f && !g
          ? (a[u] = S.cloneElement(c, { in: !1 }))
          : h &&
            f &&
            S.isValidElement(m) &&
            (a[u] = S.cloneElement(c, {
              onExited: o.bind(null, c),
              in: m.props.in,
              exit: Yr(c, 'exit', e),
              enter: Yr(c, 'enter', e),
            }));
      }
    }),
    a
  );
}
var cb =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (r) {
        return e[r];
      });
    },
  db = {
    component: 'div',
    childFactory: function (r) {
      return r;
    },
  },
  Fd = (function (e) {
    wy(r, e);
    function r(s, a) {
      var u;
      u = e.call(this, s, a) || this;
      var c = u.handleExited.bind(sb(u));
      return (
        (u.state = {
          contextValue: { isMounting: !0 },
          handleExited: c,
          firstRender: !0,
        }),
        u
      );
    }
    var o = r.prototype;
    return (
      (o.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (o.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (r.getDerivedStateFromProps = function (a, u) {
        var c = u.children,
          f = u.handleExited,
          h = u.firstRender;
        return { children: h ? lb(a, f) : ub(a, c, f), firstRender: !1 };
      }),
      (o.handleExited = function (a, u) {
        var c = zd(this.props.children);
        a.key in c ||
          (a.props.onExited && a.props.onExited(u),
          this.mounted &&
            this.setState(function (f) {
              var h = Xa({}, f.children);
              return delete h[a.key], { children: h };
            }));
      }),
      (o.render = function () {
        var a = this.props,
          u = a.component,
          c = a.childFactory,
          f = Sy(a, ['component', 'childFactory']),
          h = this.state.contextValue,
          m = cb(this.state.children).map(c);
        return (
          delete f.appear,
          delete f.enter,
          delete f.exit,
          u === null
            ? bn.createElement(Za.Provider, { value: h }, m)
            : bn.createElement(
                Za.Provider,
                { value: h },
                bn.createElement(u, f, m),
              )
        );
      }),
      r
    );
  })(bn.Component);
Fd.propTypes = {};
Fd.defaultProps = db;
const Bd = (e) => e.scrollTop;
function Wo(e, r) {
  const { timeout: o, easing: s, style: a = {} } = e;
  return {
    duration:
      a.transitionDuration ?? (typeof o == 'number' ? o : o[r.mode] || 0),
    easing:
      a.transitionTimingFunction ?? (typeof s == 'object' ? s[r.mode] : s),
    delay: a.transitionDelay,
  };
}
function fb(e) {
  return Me('MuiPaper', e);
}
Ae('MuiPaper', [
  'root',
  'rounded',
  'outlined',
  'elevation',
  'elevation0',
  'elevation1',
  'elevation2',
  'elevation3',
  'elevation4',
  'elevation5',
  'elevation6',
  'elevation7',
  'elevation8',
  'elevation9',
  'elevation10',
  'elevation11',
  'elevation12',
  'elevation13',
  'elevation14',
  'elevation15',
  'elevation16',
  'elevation17',
  'elevation18',
  'elevation19',
  'elevation20',
  'elevation21',
  'elevation22',
  'elevation23',
  'elevation24',
]);
const pb = (e) => {
    const { square: r, elevation: o, variant: s, classes: a } = e,
      u = {
        root: [
          'root',
          s,
          !r && 'rounded',
          s === 'elevation' && `elevation${o}`,
        ],
      };
    return Fe(u, fb, a);
  },
  hb = de('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        r[o.variant],
        !o.square && r.rounded,
        o.variant === 'elevation' && r[`elevation${o.elevation}`],
      ];
    },
  })(
    He(({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create('box-shadow'),
      variants: [
        {
          props: ({ ownerState: r }) => !r.square,
          style: { borderRadius: e.shape.borderRadius },
        },
        {
          props: { variant: 'outlined' },
          style: { border: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: { variant: 'elevation' },
          style: {
            boxShadow: 'var(--Paper-shadow)',
            backgroundImage: 'var(--Paper-overlay)',
          },
        },
      ],
    })),
  ),
  Dd = S.forwardRef(function (r, o) {
    var k;
    const s = Be({ props: r, name: 'MuiPaper' }),
      a = ys(),
      {
        className: u,
        component: c = 'div',
        elevation: f = 1,
        square: h = !1,
        variant: m = 'elevation',
        ...g
      } = s,
      v = { ...s, component: c, elevation: f, square: h, variant: m },
      C = pb(v);
    return M.jsx(hb, {
      as: c,
      ownerState: v,
      className: we(C.root, u),
      ref: o,
      ...g,
      style: {
        ...(m === 'elevation' && {
          '--Paper-shadow': (a.vars || a).shadows[f],
          ...(a.vars && {
            '--Paper-overlay': (k = a.vars.overlays) == null ? void 0 : k[f],
          }),
          ...(!a.vars &&
            a.palette.mode === 'dark' && {
              '--Paper-overlay': `linear-gradient(${Cn('#fff', qc(f))}, ${Cn(
                '#fff',
                qc(f),
              )})`,
            }),
        }),
        ...g.style,
      },
    });
  });
function zt(e, r) {
  const {
      className: o,
      elementType: s,
      ownerState: a,
      externalForwardedProps: u,
      internalForwardedProps: c,
      ...f
    } = r,
    {
      component: h,
      slots: m = { [e]: void 0 },
      slotProps: g = { [e]: void 0 },
      ...v
    } = u,
    C = m[e] || s,
    k = dy(g[e], a),
    {
      props: { component: w, ...b },
      internalRef: E,
    } = cy({
      className: o,
      ...f,
      externalForwardedProps: e === 'root' ? v : void 0,
      externalSlotProps: k,
    }),
    R = Ct(E, k == null ? void 0 : k.ref, r.ref),
    N = e === 'root' ? w || h : w,
    P = ly(
      C,
      {
        ...(e === 'root' && !h && !m[e] && c),
        ...(e !== 'root' && !m[e] && c),
        ...b,
        ...(N && { as: N }),
        ref: R,
      },
      a,
    );
  return [C, P];
}
class el {
  constructor() {
    zi(this, 'mountEffect', () => {
      this.shouldMount &&
        !this.didMount &&
        this.ref.current !== null &&
        ((this.didMount = !0), this.mounted.resolve());
    });
    (this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null);
  }
  static create() {
    return new el();
  }
  static use() {
    const r = iy(el.create).current,
      [o, s] = S.useState(!1);
    return (
      (r.shouldMount = o),
      (r.setShouldMount = s),
      S.useEffect(r.mountEffect, [o]),
      r
    );
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = gb()),
        (this.shouldMount = !0),
        this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  start(...r) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.pulsate(...r);
    });
  }
}
function mb() {
  return el.use();
}
function gb() {
  let e, r;
  const o = new Promise((s, a) => {
    (e = s), (r = a);
  });
  return (o.resolve = e), (o.reject = r), o;
}
function yb(e) {
  const {
      className: r,
      classes: o,
      pulsate: s = !1,
      rippleX: a,
      rippleY: u,
      rippleSize: c,
      in: f,
      onExited: h,
      timeout: m,
    } = e,
    [g, v] = S.useState(!1),
    C = we(r, o.ripple, o.rippleVisible, s && o.ripplePulsate),
    k = { width: c, height: c, top: -(c / 2) + u, left: -(c / 2) + a },
    w = we(o.child, g && o.childLeaving, s && o.childPulsate);
  return (
    !f && !g && v(!0),
    S.useEffect(() => {
      if (!f && h != null) {
        const b = setTimeout(h, m);
        return () => {
          clearTimeout(b);
        };
      }
    }, [h, f, m]),
    M.jsx('span', {
      className: C,
      style: k,
      children: M.jsx('span', { className: w }),
    })
  );
}
const ln = Ae('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  Yc = 550,
  vb = 80,
  xb = ps`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  Sb = ps`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  wb = ps`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  Cb = de('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
  }),
  bb = de(yb, { name: 'MuiTouchRipple', slot: 'Ripple' })`
  opacity: 0;
  position: absolute;

  &.${ln.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${xb};
    animation-duration: ${Yc}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  &.${ln.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${ln.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ln.childLeaving} {
    opacity: 0;
    animation-name: ${Sb};
    animation-duration: ${Yc}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  & .${ln.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${wb};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  Eb = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiTouchRipple' }),
      { center: a = !1, classes: u = {}, className: c, ...f } = s,
      [h, m] = S.useState([]),
      g = S.useRef(0),
      v = S.useRef(null);
    S.useEffect(() => {
      v.current && (v.current(), (v.current = null));
    }, [h]);
    const C = S.useRef(!1),
      k = sy(),
      w = S.useRef(null),
      b = S.useRef(null),
      E = S.useCallback(
        (I) => {
          const {
            pulsate: O,
            rippleX: _,
            rippleY: z,
            rippleSize: V,
            cb: G,
          } = I;
          m((x) => [
            ...x,
            M.jsx(
              bb,
              {
                classes: {
                  ripple: we(u.ripple, ln.ripple),
                  rippleVisible: we(u.rippleVisible, ln.rippleVisible),
                  ripplePulsate: we(u.ripplePulsate, ln.ripplePulsate),
                  child: we(u.child, ln.child),
                  childLeaving: we(u.childLeaving, ln.childLeaving),
                  childPulsate: we(u.childPulsate, ln.childPulsate),
                },
                timeout: Yc,
                pulsate: O,
                rippleX: _,
                rippleY: z,
                rippleSize: V,
              },
              g.current,
            ),
          ]),
            (g.current += 1),
            (v.current = G);
        },
        [u],
      ),
      R = S.useCallback(
        (I = {}, O = {}, _ = () => {}) => {
          const {
            pulsate: z = !1,
            center: V = a || O.pulsate,
            fakeElement: G = !1,
          } = O;
          if ((I == null ? void 0 : I.type) === 'mousedown' && C.current) {
            C.current = !1;
            return;
          }
          (I == null ? void 0 : I.type) === 'touchstart' && (C.current = !0);
          const x = G ? null : b.current,
            j = x
              ? x.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let Z, Y, ne;
          if (
            V ||
            I === void 0 ||
            (I.clientX === 0 && I.clientY === 0) ||
            (!I.clientX && !I.touches)
          )
            (Z = Math.round(j.width / 2)), (Y = Math.round(j.height / 2));
          else {
            const { clientX: Q, clientY: ee } =
              I.touches && I.touches.length > 0 ? I.touches[0] : I;
            (Z = Math.round(Q - j.left)), (Y = Math.round(ee - j.top));
          }
          if (V)
            (ne = Math.sqrt((2 * j.width ** 2 + j.height ** 2) / 3)),
              ne % 2 === 0 && (ne += 1);
          else {
            const Q =
                Math.max(Math.abs((x ? x.clientWidth : 0) - Z), Z) * 2 + 2,
              ee = Math.max(Math.abs((x ? x.clientHeight : 0) - Y), Y) * 2 + 2;
            ne = Math.sqrt(Q ** 2 + ee ** 2);
          }
          I != null && I.touches
            ? w.current === null &&
              ((w.current = () => {
                E({
                  pulsate: z,
                  rippleX: Z,
                  rippleY: Y,
                  rippleSize: ne,
                  cb: _,
                });
              }),
              k.start(vb, () => {
                w.current && (w.current(), (w.current = null));
              }))
            : E({ pulsate: z, rippleX: Z, rippleY: Y, rippleSize: ne, cb: _ });
        },
        [a, E, k],
      ),
      N = S.useCallback(() => {
        R({}, { pulsate: !0 });
      }, [R]),
      P = S.useCallback(
        (I, O) => {
          if (
            (k.clear(),
            (I == null ? void 0 : I.type) === 'touchend' && w.current)
          ) {
            w.current(),
              (w.current = null),
              k.start(0, () => {
                P(I, O);
              });
            return;
          }
          (w.current = null),
            m((_) => (_.length > 0 ? _.slice(1) : _)),
            (v.current = O);
        },
        [k],
      );
    return (
      S.useImperativeHandle(o, () => ({ pulsate: N, start: R, stop: P }), [
        N,
        R,
        P,
      ]),
      M.jsx(Cb, {
        className: we(ln.root, u.root, c),
        ref: b,
        ...f,
        children: M.jsx(Fd, { component: null, exit: !0, children: h }),
      })
    );
  });
function kb(e) {
  return Me('MuiButtonBase', e);
}
const Rb = Ae('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  Pb = (e) => {
    const {
        disabled: r,
        focusVisible: o,
        focusVisibleClassName: s,
        classes: a,
      } = e,
      c = Fe({ root: ['root', r && 'disabled', o && 'focusVisible'] }, kb, a);
    return o && s && (c.root += ` ${s}`), c;
  },
  Tb = de('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (e, r) => r.root,
  })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${Rb.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  Cy = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiButtonBase' }),
      {
        action: a,
        centerRipple: u = !1,
        children: c,
        className: f,
        component: h = 'button',
        disabled: m = !1,
        disableRipple: g = !1,
        disableTouchRipple: v = !1,
        focusRipple: C = !1,
        focusVisibleClassName: k,
        LinkComponent: w = 'a',
        onBlur: b,
        onClick: E,
        onContextMenu: R,
        onDragLeave: N,
        onFocus: P,
        onFocusVisible: I,
        onKeyDown: O,
        onKeyUp: _,
        onMouseDown: z,
        onMouseLeave: V,
        onMouseUp: G,
        onTouchEnd: x,
        onTouchMove: j,
        onTouchStart: Z,
        tabIndex: Y = 0,
        TouchRippleProps: ne,
        touchRippleRef: Q,
        type: ee,
        ...ie
      } = s,
      U = S.useRef(null),
      K = mb(),
      re = Ct(K.ref, Q),
      [L, q] = S.useState(!1);
    m && L && q(!1),
      S.useImperativeHandle(
        a,
        () => ({
          focusVisible: () => {
            q(!0), U.current.focus();
          },
        }),
        [],
      );
    const ae = K.shouldMount && !g && !m;
    S.useEffect(() => {
      L && C && !g && K.pulsate();
    }, [g, C, L, K]);
    const ue = or(K, 'start', z, v),
      pe = or(K, 'stop', R, v),
      Ce = or(K, 'stop', N, v),
      ke = or(K, 'stop', G, v),
      Re = or(
        K,
        'stop',
        (me) => {
          L && me.preventDefault(), V && V(me);
        },
        v,
      ),
      be = or(K, 'start', Z, v),
      xe = or(K, 'stop', x, v),
      Le = or(K, 'stop', j, v),
      Oe = or(
        K,
        'stop',
        (me) => {
          xm(me.target) || q(!1), b && b(me);
        },
        !1,
      ),
      Xe = jo((me) => {
        U.current || (U.current = me.currentTarget),
          xm(me.target) && (q(!0), I && I(me)),
          P && P(me);
      }),
      Te = () => {
        const me = U.current;
        return h && h !== 'button' && !(me.tagName === 'A' && me.href);
      },
      Ve = jo((me) => {
        C &&
          !me.repeat &&
          L &&
          me.key === ' ' &&
          K.stop(me, () => {
            K.start(me);
          }),
          me.target === me.currentTarget &&
            Te() &&
            me.key === ' ' &&
            me.preventDefault(),
          O && O(me),
          me.target === me.currentTarget &&
            Te() &&
            me.key === 'Enter' &&
            !m &&
            (me.preventDefault(), E && E(me));
      }),
      Pt = jo((me) => {
        C &&
          me.key === ' ' &&
          L &&
          !me.defaultPrevented &&
          K.stop(me, () => {
            K.pulsate(me);
          }),
          _ && _(me),
          E &&
            me.target === me.currentTarget &&
            Te() &&
            me.key === ' ' &&
            !me.defaultPrevented &&
            E(me);
      });
    let gt = h;
    gt === 'button' && (ie.href || ie.to) && (gt = w);
    const at = {};
    gt === 'button'
      ? ((at.type = ee === void 0 ? 'button' : ee), (at.disabled = m))
      : (!ie.href && !ie.to && (at.role = 'button'),
        m && (at['aria-disabled'] = m));
    const Ft = Ct(o, U),
      ft = {
        ...s,
        centerRipple: u,
        component: h,
        disabled: m,
        disableRipple: g,
        disableTouchRipple: v,
        focusRipple: C,
        tabIndex: Y,
        focusVisible: L,
      },
      Ge = Pb(ft);
    return M.jsxs(Tb, {
      as: gt,
      className: we(Ge.root, f),
      ownerState: ft,
      onBlur: Oe,
      onClick: E,
      onContextMenu: pe,
      onFocus: Xe,
      onKeyDown: Ve,
      onKeyUp: Pt,
      onMouseDown: ue,
      onMouseLeave: Re,
      onMouseUp: ke,
      onDragLeave: Ce,
      onTouchEnd: xe,
      onTouchMove: Le,
      onTouchStart: be,
      ref: Ft,
      tabIndex: m ? -1 : Y,
      type: ee,
      ...at,
      ...ie,
      children: [c, ae ? M.jsx(Eb, { ref: re, center: u, ...ne }) : null],
    });
  });
function or(e, r, o, s = !1) {
  return jo((a) => (o && o(a), s || e[r](a), !0));
}
function Ib(e) {
  return typeof e.main == 'string';
}
function Ob(e, r = []) {
  if (!Ib(e)) return !1;
  for (const o of r)
    if (!e.hasOwnProperty(o) || typeof e[o] != 'string') return !1;
  return !0;
}
function dn(e = []) {
  return ([, r]) => r && Ob(r, e);
}
function Nb(e) {
  return Me('MuiAlert', e);
}
const Nm = Ae('MuiAlert', [
  'root',
  'action',
  'icon',
  'message',
  'filled',
  'colorSuccess',
  'colorInfo',
  'colorWarning',
  'colorError',
  'filledSuccess',
  'filledInfo',
  'filledWarning',
  'filledError',
  'outlined',
  'outlinedSuccess',
  'outlinedInfo',
  'outlinedWarning',
  'outlinedError',
  'standard',
  'standardSuccess',
  'standardInfo',
  'standardWarning',
  'standardError',
]);
function Ab(e) {
  return Me('MuiIconButton', e);
}
const Lb = Ae('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
  ]),
  $b = (e) => {
    const { classes: r, disabled: o, color: s, edge: a, size: u } = e,
      c = {
        root: [
          'root',
          o && 'disabled',
          s !== 'default' && `color${ge(s)}`,
          a && `edge${ge(a)}`,
          `size${ge(u)}`,
        ],
      };
    return Fe(c, Ab, r);
  },
  Mb = de(Cy, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        o.color !== 'default' && r[`color${ge(o.color)}`],
        o.edge && r[`edge${ge(o.edge)}`],
        r[`size${ge(o.size)}`],
      ];
    },
  })(
    He(({ theme: e }) => ({
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: e.typography.pxToRem(24),
      padding: 8,
      borderRadius: '50%',
      color: (e.vars || e).palette.action.active,
      transition: e.transitions.create('background-color', {
        duration: e.transitions.duration.shortest,
      }),
      variants: [
        {
          props: (r) => !r.disableRipple,
          style: {
            '--IconButton-hoverBg': e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : Cn(e.palette.action.active, e.palette.action.hoverOpacity),
            '&:hover': {
              backgroundColor: 'var(--IconButton-hoverBg)',
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
          },
        },
        { props: { edge: 'start' }, style: { marginLeft: -12 } },
        { props: { edge: 'start', size: 'small' }, style: { marginLeft: -3 } },
        { props: { edge: 'end' }, style: { marginRight: -12 } },
        { props: { edge: 'end', size: 'small' }, style: { marginRight: -3 } },
      ],
    })),
    He(({ theme: e }) => ({
      variants: [
        { props: { color: 'inherit' }, style: { color: 'inherit' } },
        ...Object.entries(e.palette)
          .filter(dn())
          .map(([r]) => ({
            props: { color: r },
            style: { color: (e.vars || e).palette[r].main },
          })),
        ...Object.entries(e.palette)
          .filter(dn())
          .map(([r]) => ({
            props: { color: r },
            style: {
              '--IconButton-hoverBg': e.vars
                ? `rgba(${(e.vars || e).palette[r].mainChannel} / ${
                    e.vars.palette.action.hoverOpacity
                  })`
                : Cn(
                    (e.vars || e).palette[r].main,
                    e.palette.action.hoverOpacity,
                  ),
            },
          })),
        {
          props: { size: 'small' },
          style: { padding: 5, fontSize: e.typography.pxToRem(18) },
        },
        {
          props: { size: 'large' },
          style: { padding: 12, fontSize: e.typography.pxToRem(28) },
        },
      ],
      [`&.${Lb.disabled}`]: {
        backgroundColor: 'transparent',
        color: (e.vars || e).palette.action.disabled,
      },
    })),
  ),
  by = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiIconButton' }),
      {
        edge: a = !1,
        children: u,
        className: c,
        color: f = 'default',
        disabled: h = !1,
        disableFocusRipple: m = !1,
        size: g = 'medium',
        ...v
      } = s,
      C = {
        ...s,
        edge: a,
        color: f,
        disabled: h,
        disableFocusRipple: m,
        size: g,
      },
      k = $b(C);
    return M.jsx(Mb, {
      className: we(k.root, c),
      centerRipple: !0,
      focusRipple: !m,
      disabled: h,
      ref: o,
      ...v,
      ownerState: C,
      children: u,
    });
  }),
  _b = Hn(
    M.jsx('path', {
      d: 'M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z',
    }),
    'SuccessOutlined',
  ),
  zb = Hn(
    M.jsx('path', {
      d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
    }),
    'ReportProblemOutlined',
  ),
  Fb = Hn(
    M.jsx('path', {
      d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
    }),
    'ErrorOutline',
  ),
  Bb = Hn(
    M.jsx('path', {
      d: 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z',
    }),
    'InfoOutlined',
  ),
  Db = Hn(
    M.jsx('path', {
      d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    }),
    'Close',
  ),
  jb = (e) => {
    const { variant: r, color: o, severity: s, classes: a } = e,
      u = {
        root: ['root', `color${ge(o || s)}`, `${r}${ge(o || s)}`, `${r}`],
        icon: ['icon'],
        message: ['message'],
        action: ['action'],
      };
    return Fe(u, Nb, a);
  },
  Ub = de(Dd, {
    name: 'MuiAlert',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        r[o.variant],
        r[`${o.variant}${ge(o.color || o.severity)}`],
      ];
    },
  })(
    He(({ theme: e }) => {
      const r = e.palette.mode === 'light' ? is : ss,
        o = e.palette.mode === 'light' ? ss : is;
      return {
        ...e.typography.body2,
        backgroundColor: 'transparent',
        display: 'flex',
        padding: '6px 16px',
        variants: [
          ...Object.entries(e.palette)
            .filter(dn(['light']))
            .map(([s]) => ({
              props: { colorSeverity: s, variant: 'standard' },
              style: {
                color: e.vars
                  ? e.vars.palette.Alert[`${s}Color`]
                  : r(e.palette[s].light, 0.6),
                backgroundColor: e.vars
                  ? e.vars.palette.Alert[`${s}StandardBg`]
                  : o(e.palette[s].light, 0.9),
                [`& .${Nm.icon}`]: e.vars
                  ? { color: e.vars.palette.Alert[`${s}IconColor`] }
                  : { color: e.palette[s].main },
              },
            })),
          ...Object.entries(e.palette)
            .filter(dn(['light']))
            .map(([s]) => ({
              props: { colorSeverity: s, variant: 'outlined' },
              style: {
                color: e.vars
                  ? e.vars.palette.Alert[`${s}Color`]
                  : r(e.palette[s].light, 0.6),
                border: `1px solid ${(e.vars || e).palette[s].light}`,
                [`& .${Nm.icon}`]: e.vars
                  ? { color: e.vars.palette.Alert[`${s}IconColor`] }
                  : { color: e.palette[s].main },
              },
            })),
          ...Object.entries(e.palette)
            .filter(dn(['dark']))
            .map(([s]) => ({
              props: { colorSeverity: s, variant: 'filled' },
              style: {
                fontWeight: e.typography.fontWeightMedium,
                ...(e.vars
                  ? {
                      color: e.vars.palette.Alert[`${s}FilledColor`],
                      backgroundColor: e.vars.palette.Alert[`${s}FilledBg`],
                    }
                  : {
                      backgroundColor:
                        e.palette.mode === 'dark'
                          ? e.palette[s].dark
                          : e.palette[s].main,
                      color: e.palette.getContrastText(e.palette[s].main),
                    }),
              },
            })),
        ],
      };
    }),
  ),
  Wb = de('div', {
    name: 'MuiAlert',
    slot: 'Icon',
    overridesResolver: (e, r) => r.icon,
  })({
    marginRight: 12,
    padding: '7px 0',
    display: 'flex',
    fontSize: 22,
    opacity: 0.9,
  }),
  Hb = de('div', {
    name: 'MuiAlert',
    slot: 'Message',
    overridesResolver: (e, r) => r.message,
  })({ padding: '8px 0', minWidth: 0, overflow: 'auto' }),
  Am = de('div', {
    name: 'MuiAlert',
    slot: 'Action',
    overridesResolver: (e, r) => r.action,
  })({
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 0 0 16px',
    marginLeft: 'auto',
    marginRight: -8,
  }),
  Lm = {
    success: M.jsx(_b, { fontSize: 'inherit' }),
    warning: M.jsx(zb, { fontSize: 'inherit' }),
    error: M.jsx(Fb, { fontSize: 'inherit' }),
    info: M.jsx(Bb, { fontSize: 'inherit' }),
  },
  $m = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiAlert' }),
      {
        action: a,
        children: u,
        className: c,
        closeText: f = 'Close',
        color: h,
        components: m = {},
        componentsProps: g = {},
        icon: v,
        iconMapping: C = Lm,
        onClose: k,
        role: w = 'alert',
        severity: b = 'success',
        slotProps: E = {},
        slots: R = {},
        variant: N = 'standard',
        ...P
      } = s,
      I = { ...s, color: h, severity: b, variant: N, colorSeverity: h || b },
      O = jb(I),
      _ = {
        slots: { closeButton: m.CloseButton, closeIcon: m.CloseIcon, ...R },
        slotProps: { ...g, ...E },
      },
      [z, V] = zt('closeButton', {
        elementType: by,
        externalForwardedProps: _,
        ownerState: I,
      }),
      [G, x] = zt('closeIcon', {
        elementType: Db,
        externalForwardedProps: _,
        ownerState: I,
      });
    return M.jsxs(Ub, {
      role: w,
      elevation: 0,
      ownerState: I,
      className: we(O.root, c),
      ref: o,
      ...P,
      children: [
        v !== !1
          ? M.jsx(Wb, {
              ownerState: I,
              className: O.icon,
              children: v || C[b] || Lm[b],
            })
          : null,
        M.jsx(Hb, { ownerState: I, className: O.message, children: u }),
        a != null
          ? M.jsx(Am, { ownerState: I, className: O.action, children: a })
          : null,
        a == null && k
          ? M.jsx(Am, {
              ownerState: I,
              className: O.action,
              children: M.jsx(z, {
                size: 'small',
                'aria-label': f,
                title: f,
                color: 'inherit',
                onClick: k,
                ...V,
                children: M.jsx(G, { fontSize: 'small', ...x }),
              }),
            })
          : null,
      ],
    });
  });
function Vb(e) {
  return Me('MuiTypography', e);
}
const Mm = Ae('MuiTypography', [
    'root',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'inherit',
    'button',
    'caption',
    'overline',
    'alignLeft',
    'alignRight',
    'alignCenter',
    'alignJustify',
    'noWrap',
    'gutterBottom',
    'paragraph',
  ]),
  Kb = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  qb = tb(),
  Gb = (e) => {
    const {
        align: r,
        gutterBottom: o,
        noWrap: s,
        paragraph: a,
        variant: u,
        classes: c,
      } = e,
      f = {
        root: [
          'root',
          u,
          e.align !== 'inherit' && `align${ge(r)}`,
          o && 'gutterBottom',
          s && 'noWrap',
          a && 'paragraph',
        ],
      };
    return Fe(f, Vb, c);
  },
  Qb = de('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        o.variant && r[o.variant],
        o.align !== 'inherit' && r[`align${ge(o.align)}`],
        o.noWrap && r.noWrap,
        o.gutterBottom && r.gutterBottom,
        o.paragraph && r.paragraph,
      ];
    },
  })(
    He(({ theme: e }) => {
      var r;
      return {
        margin: 0,
        variants: [
          {
            props: { variant: 'inherit' },
            style: {
              font: 'inherit',
              lineHeight: 'inherit',
              letterSpacing: 'inherit',
            },
          },
          ...Object.entries(e.typography)
            .filter(([o, s]) => o !== 'inherit' && s && typeof s == 'object')
            .map(([o, s]) => ({ props: { variant: o }, style: s })),
          ...Object.entries(e.palette)
            .filter(dn())
            .map(([o]) => ({
              props: { color: o },
              style: { color: (e.vars || e).palette[o].main },
            })),
          ...Object.entries(((r = e.palette) == null ? void 0 : r.text) || {})
            .filter(([, o]) => typeof o == 'string')
            .map(([o]) => ({
              props: { color: `text${ge(o)}` },
              style: { color: (e.vars || e).palette.text[o] },
            })),
          {
            props: ({ ownerState: o }) => o.align !== 'inherit',
            style: { textAlign: 'var(--Typography-textAlign)' },
          },
          {
            props: ({ ownerState: o }) => o.noWrap,
            style: {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            },
          },
          {
            props: ({ ownerState: o }) => o.gutterBottom,
            style: { marginBottom: '0.35em' },
          },
          {
            props: ({ ownerState: o }) => o.paragraph,
            style: { marginBottom: 16 },
          },
        ],
      };
    }),
  ),
  _m = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p',
  },
  cn = S.forwardRef(function (r, o) {
    const { color: s, ...a } = Be({ props: r, name: 'MuiTypography' }),
      u = !Kb[s],
      c = qb({ ...a, ...(u && { color: s }) }),
      {
        align: f = 'inherit',
        className: h,
        component: m,
        gutterBottom: g = !1,
        noWrap: v = !1,
        paragraph: C = !1,
        variant: k = 'body1',
        variantMapping: w = _m,
        ...b
      } = c,
      E = {
        ...c,
        align: f,
        color: s,
        className: h,
        component: m,
        gutterBottom: g,
        noWrap: v,
        paragraph: C,
        variant: k,
        variantMapping: w,
      },
      R = m || (C ? 'p' : w[k] || _m[k]) || 'span',
      N = Gb(E);
    return M.jsx(Qb, {
      as: R,
      ref: o,
      className: we(N.root, h),
      ...b,
      ownerState: E,
      style: {
        ...(f !== 'inherit' && { '--Typography-textAlign': f }),
        ...b.style,
      },
    });
  });
function Xb(e) {
  return typeof e == 'function' ? e() : e;
}
const Yb = S.forwardRef(function (r, o) {
  const { children: s, container: a, disablePortal: u = !1 } = r,
    [c, f] = S.useState(null),
    h = Ct(S.isValidElement(s) ? Qo(s) : null, o);
  if (
    (no(() => {
      u || f(Xb(a) || document.body);
    }, [a, u]),
    no(() => {
      if (c && !u)
        return (
          Vc(o, c),
          () => {
            Vc(o, null);
          }
        );
    }, [o, c, u]),
    u)
  ) {
    if (S.isValidElement(s)) {
      const m = { ref: h };
      return S.cloneElement(s, m);
    }
    return s;
  }
  return c && Lg.createPortal(s, c);
});
function La(e) {
  return parseInt(e, 10) || 0;
}
const Jb = {
  shadow: {
    visibility: 'hidden',
    position: 'absolute',
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    transform: 'translateZ(0)',
  },
};
function Zb(e) {
  return (
    e == null ||
    Object.keys(e).length === 0 ||
    (e.outerHeightStyle === 0 && !e.overflowing)
  );
}
const eE = S.forwardRef(function (r, o) {
  const {
      onChange: s,
      maxRows: a,
      minRows: u = 1,
      style: c,
      value: f,
      ...h
    } = r,
    { current: m } = S.useRef(f != null),
    g = S.useRef(null),
    v = Ct(o, g),
    C = S.useRef(null),
    k = S.useRef(null),
    w = S.useCallback(() => {
      const R = g.current,
        P = Rn(R).getComputedStyle(R);
      if (P.width === '0px') return { outerHeightStyle: 0, overflowing: !1 };
      const I = k.current;
      (I.style.width = P.width),
        (I.value = R.value || r.placeholder || 'x'),
        I.value.slice(-1) ===
          `
` && (I.value += ' ');
      const O = P.boxSizing,
        _ = La(P.paddingBottom) + La(P.paddingTop),
        z = La(P.borderBottomWidth) + La(P.borderTopWidth),
        V = I.scrollHeight;
      I.value = 'x';
      const G = I.scrollHeight;
      let x = V;
      u && (x = Math.max(Number(u) * G, x)),
        a && (x = Math.min(Number(a) * G, x)),
        (x = Math.max(x, G));
      const j = x + (O === 'border-box' ? _ + z : 0),
        Z = Math.abs(x - V) <= 1;
      return { outerHeightStyle: j, overflowing: Z };
    }, [a, u, r.placeholder]),
    b = S.useCallback(() => {
      const R = w();
      if (Zb(R)) return;
      const N = R.outerHeightStyle,
        P = g.current;
      C.current !== N && ((C.current = N), (P.style.height = `${N}px`)),
        (P.style.overflow = R.overflowing ? 'hidden' : '');
    }, [w]);
  no(() => {
    const R = () => {
      b();
    };
    let N;
    const P = Ld(R),
      I = g.current,
      O = Rn(I);
    O.addEventListener('resize', P);
    let _;
    return (
      typeof ResizeObserver < 'u' &&
        ((_ = new ResizeObserver(R)), _.observe(I)),
      () => {
        P.clear(),
          cancelAnimationFrame(N),
          O.removeEventListener('resize', P),
          _ && _.disconnect();
      }
    );
  }, [w, b]),
    no(() => {
      b();
    });
  const E = (R) => {
    m || b(), s && s(R);
  };
  return M.jsxs(S.Fragment, {
    children: [
      M.jsx('textarea', {
        value: f,
        onChange: E,
        ref: v,
        rows: u,
        style: c,
        ...h,
      }),
      M.jsx('textarea', {
        'aria-hidden': !0,
        className: r.className,
        readOnly: !0,
        ref: k,
        tabIndex: -1,
        style: { ...Jb.shadow, ...c, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  });
});
function as(e) {
  return typeof e == 'string';
}
function Xo({ props: e, states: r, muiFormControl: o }) {
  return r.reduce(
    (s, a) => ((s[a] = e[a]), o && typeof e[a] > 'u' && (s[a] = o[a]), s),
    {},
  );
}
const jd = S.createContext(void 0);
function Yo() {
  return S.useContext(jd);
}
function zm(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function tl(e, r = !1) {
  return (
    e &&
    ((zm(e.value) && e.value !== '') ||
      (r && zm(e.defaultValue) && e.defaultValue !== ''))
  );
}
function tE(e) {
  return e.startAdornment;
}
function nE(e) {
  return Me('MuiInputBase', e);
}
const Ho = Ae('MuiInputBase', [
  'root',
  'formControl',
  'focused',
  'disabled',
  'adornedStart',
  'adornedEnd',
  'error',
  'sizeSmall',
  'multiline',
  'colorSecondary',
  'fullWidth',
  'hiddenLabel',
  'readOnly',
  'input',
  'inputSizeSmall',
  'inputMultiline',
  'inputTypeSearch',
  'inputAdornedStart',
  'inputAdornedEnd',
  'inputHiddenLabel',
]);
var Fm;
const wl = (e, r) => {
    const { ownerState: o } = e;
    return [
      r.root,
      o.formControl && r.formControl,
      o.startAdornment && r.adornedStart,
      o.endAdornment && r.adornedEnd,
      o.error && r.error,
      o.size === 'small' && r.sizeSmall,
      o.multiline && r.multiline,
      o.color && r[`color${ge(o.color)}`],
      o.fullWidth && r.fullWidth,
      o.hiddenLabel && r.hiddenLabel,
    ];
  },
  Cl = (e, r) => {
    const { ownerState: o } = e;
    return [
      r.input,
      o.size === 'small' && r.inputSizeSmall,
      o.multiline && r.inputMultiline,
      o.type === 'search' && r.inputTypeSearch,
      o.startAdornment && r.inputAdornedStart,
      o.endAdornment && r.inputAdornedEnd,
      o.hiddenLabel && r.inputHiddenLabel,
    ];
  },
  rE = (e) => {
    const {
        classes: r,
        color: o,
        disabled: s,
        error: a,
        endAdornment: u,
        focused: c,
        formControl: f,
        fullWidth: h,
        hiddenLabel: m,
        multiline: g,
        readOnly: v,
        size: C,
        startAdornment: k,
        type: w,
      } = e,
      b = {
        root: [
          'root',
          `color${ge(o)}`,
          s && 'disabled',
          a && 'error',
          h && 'fullWidth',
          c && 'focused',
          f && 'formControl',
          C && C !== 'medium' && `size${ge(C)}`,
          g && 'multiline',
          k && 'adornedStart',
          u && 'adornedEnd',
          m && 'hiddenLabel',
          v && 'readOnly',
        ],
        input: [
          'input',
          s && 'disabled',
          w === 'search' && 'inputTypeSearch',
          g && 'inputMultiline',
          C === 'small' && 'inputSizeSmall',
          m && 'inputHiddenLabel',
          k && 'inputAdornedStart',
          u && 'inputAdornedEnd',
          v && 'readOnly',
        ],
      };
    return Fe(b, nE, r);
  },
  bl = de('div', { name: 'MuiInputBase', slot: 'Root', overridesResolver: wl })(
    He(({ theme: e }) => ({
      ...e.typography.body1,
      color: (e.vars || e).palette.text.primary,
      lineHeight: '1.4375em',
      boxSizing: 'border-box',
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      [`&.${Ho.disabled}`]: {
        color: (e.vars || e).palette.text.disabled,
        cursor: 'default',
      },
      variants: [
        {
          props: ({ ownerState: r }) => r.multiline,
          style: { padding: '4px 0 5px' },
        },
        {
          props: ({ ownerState: r, size: o }) => r.multiline && o === 'small',
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: r }) => r.fullWidth, style: { width: '100%' } },
      ],
    })),
  ),
  El = de('input', {
    name: 'MuiInputBase',
    slot: 'Input',
    overridesResolver: Cl,
  })(
    He(({ theme: e }) => {
      const r = e.palette.mode === 'light',
        o = {
          color: 'currentColor',
          ...(e.vars
            ? { opacity: e.vars.opacity.inputPlaceholder }
            : { opacity: r ? 0.42 : 0.5 }),
          transition: e.transitions.create('opacity', {
            duration: e.transitions.duration.shorter,
          }),
        },
        s = { opacity: '0 !important' },
        a = e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: r ? 0.42 : 0.5 };
      return {
        font: 'inherit',
        letterSpacing: 'inherit',
        color: 'currentColor',
        padding: '4px 0 5px',
        border: 0,
        boxSizing: 'content-box',
        background: 'none',
        height: '1.4375em',
        margin: 0,
        WebkitTapHighlightColor: 'transparent',
        display: 'block',
        minWidth: 0,
        width: '100%',
        '&::-webkit-input-placeholder': o,
        '&::-moz-placeholder': o,
        '&::-ms-input-placeholder': o,
        '&:focus': { outline: 0 },
        '&:invalid': { boxShadow: 'none' },
        '&::-webkit-search-decoration': { WebkitAppearance: 'none' },
        [`label[data-shrink=false] + .${Ho.formControl} &`]: {
          '&::-webkit-input-placeholder': s,
          '&::-moz-placeholder': s,
          '&::-ms-input-placeholder': s,
          '&:focus::-webkit-input-placeholder': a,
          '&:focus::-moz-placeholder': a,
          '&:focus::-ms-input-placeholder': a,
        },
        [`&.${Ho.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: u }) => !u.disableInjectingGlobalStyles,
            style: {
              animationName: 'mui-auto-fill-cancel',
              animationDuration: '10ms',
              '&:-webkit-autofill': {
                animationDuration: '5000s',
                animationName: 'mui-auto-fill',
              },
            },
          },
          { props: { size: 'small' }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: u }) => u.multiline,
            style: {
              height: 'auto',
              resize: 'none',
              padding: 0,
              paddingTop: 0,
            },
          },
          { props: { type: 'search' }, style: { MozAppearance: 'textfield' } },
        ],
      };
    }),
  ),
  Bm = eb({
    '@keyframes mui-auto-fill': { from: { display: 'block' } },
    '@keyframes mui-auto-fill-cancel': { from: { display: 'block' } },
  }),
  Ud = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiInputBase' }),
      {
        'aria-describedby': a,
        autoComplete: u,
        autoFocus: c,
        className: f,
        color: h,
        components: m = {},
        componentsProps: g = {},
        defaultValue: v,
        disabled: C,
        disableInjectingGlobalStyles: k,
        endAdornment: w,
        error: b,
        fullWidth: E = !1,
        id: R,
        inputComponent: N = 'input',
        inputProps: P = {},
        inputRef: I,
        margin: O,
        maxRows: _,
        minRows: z,
        multiline: V = !1,
        name: G,
        onBlur: x,
        onChange: j,
        onClick: Z,
        onFocus: Y,
        onKeyDown: ne,
        onKeyUp: Q,
        placeholder: ee,
        readOnly: ie,
        renderSuffix: U,
        rows: K,
        size: re,
        slotProps: L = {},
        slots: q = {},
        startAdornment: ae,
        type: ue = 'text',
        value: pe,
        ...Ce
      } = s,
      ke = P.value != null ? P.value : pe,
      { current: Re } = S.useRef(ke != null),
      be = S.useRef(),
      xe = S.useCallback((De) => {}, []),
      Le = Ct(be, I, P.ref, xe),
      [Oe, Xe] = S.useState(!1),
      Te = Yo(),
      Ve = Xo({
        props: s,
        muiFormControl: Te,
        states: [
          'color',
          'disabled',
          'error',
          'hiddenLabel',
          'size',
          'required',
          'filled',
        ],
      });
    (Ve.focused = Te ? Te.focused : Oe),
      S.useEffect(() => {
        !Te && C && Oe && (Xe(!1), x && x());
      }, [Te, C, Oe, x]);
    const Pt = Te && Te.onFilled,
      gt = Te && Te.onEmpty,
      at = S.useCallback(
        (De) => {
          tl(De) ? Pt && Pt() : gt && gt();
        },
        [Pt, gt],
      );
    no(() => {
      Re && at({ value: ke });
    }, [ke, at, Re]);
    const Ft = (De) => {
        Y && Y(De),
          P.onFocus && P.onFocus(De),
          Te && Te.onFocus ? Te.onFocus(De) : Xe(!0);
      },
      ft = (De) => {
        x && x(De),
          P.onBlur && P.onBlur(De),
          Te && Te.onBlur ? Te.onBlur(De) : Xe(!1);
      },
      Ge = (De, ...ur) => {
        if (!Re) {
          const cr = De.target || be.current;
          if (cr == null) throw new Error(sr(1));
          at({ value: cr.value });
        }
        P.onChange && P.onChange(De, ...ur), j && j(De, ...ur);
      };
    S.useEffect(() => {
      at(be.current);
    }, []);
    const me = (De) => {
      be.current && De.currentTarget === De.target && be.current.focus(),
        Z && Z(De);
    };
    let Vn = N,
      bt = P;
    V &&
      Vn === 'input' &&
      (K
        ? (bt = { type: void 0, minRows: K, maxRows: K, ...bt })
        : (bt = { type: void 0, maxRows: _, minRows: z, ...bt }),
      (Vn = eE));
    const Kn = (De) => {
      at(
        De.animationName === 'mui-auto-fill-cancel'
          ? be.current
          : { value: 'x' },
      );
    };
    S.useEffect(() => {
      Te && Te.setAdornedStart(!!ae);
    }, [Te, ae]);
    const lr = {
        ...s,
        color: Ve.color || 'primary',
        disabled: Ve.disabled,
        endAdornment: w,
        error: Ve.error,
        focused: Ve.focused,
        formControl: Te,
        fullWidth: E,
        hiddenLabel: Ve.hiddenLabel,
        multiline: V,
        size: Ve.size,
        startAdornment: ae,
        type: ue,
      },
      qn = rE(lr),
      hn = q.root || m.Root || bl,
      Gn = L.root || g.root || {},
      qt = q.input || m.Input || El;
    return (
      (bt = { ...bt, ...(L.input ?? g.input) }),
      M.jsxs(S.Fragment, {
        children: [
          !k && typeof Bm == 'function' && (Fm || (Fm = M.jsx(Bm, {}))),
          M.jsxs(hn, {
            ...Gn,
            ref: o,
            onClick: me,
            ...Ce,
            ...(!as(hn) && { ownerState: { ...lr, ...Gn.ownerState } }),
            className: we(
              qn.root,
              Gn.className,
              f,
              ie && 'MuiInputBase-readOnly',
            ),
            children: [
              ae,
              M.jsx(jd.Provider, {
                value: null,
                children: M.jsx(qt, {
                  'aria-invalid': Ve.error,
                  'aria-describedby': a,
                  autoComplete: u,
                  autoFocus: c,
                  defaultValue: v,
                  disabled: Ve.disabled,
                  id: R,
                  onAnimationStart: Kn,
                  name: G,
                  placeholder: ee,
                  readOnly: ie,
                  required: Ve.required,
                  rows: K,
                  value: ke,
                  onKeyDown: ne,
                  onKeyUp: Q,
                  type: ue,
                  ...bt,
                  ...(!as(qt) && {
                    as: Vn,
                    ownerState: { ...lr, ...bt.ownerState },
                  }),
                  ref: Le,
                  className: we(
                    qn.input,
                    bt.className,
                    ie && 'MuiInputBase-readOnly',
                  ),
                  onBlur: ft,
                  onChange: Ge,
                  onFocus: Ft,
                }),
              }),
              w,
              U ? U({ ...Ve, startAdornment: ae }) : null,
            ],
          }),
        ],
      })
    );
  });
function oE(e) {
  return Me('MuiInput', e);
}
const Wi = { ...Ho, ...Ae('MuiInput', ['root', 'underline', 'input']) };
function iE(e) {
  return Me('MuiOutlinedInput', e);
}
const zn = {
  ...Ho,
  ...Ae('MuiOutlinedInput', ['root', 'notchedOutline', 'input']),
};
function sE(e) {
  return Me('MuiFilledInput', e);
}
const qr = {
    ...Ho,
    ...Ae('MuiFilledInput', [
      'root',
      'underline',
      'input',
      'adornedStart',
      'adornedEnd',
      'sizeSmall',
      'multiline',
      'hiddenLabel',
    ]),
  },
  aE = Hn(M.jsx('path', { d: 'M7 10l5 5 5-5z' }), 'ArrowDropDown'),
  lE = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  uE = S.forwardRef(function (r, o) {
    const s = ys(),
      a = {
        enter: s.transitions.duration.enteringScreen,
        exit: s.transitions.duration.leavingScreen,
      },
      {
        addEndListener: u,
        appear: c = !0,
        children: f,
        easing: h,
        in: m,
        onEnter: g,
        onEntered: v,
        onEntering: C,
        onExit: k,
        onExited: w,
        onExiting: b,
        style: E,
        timeout: R = a,
        TransitionComponent: N = Tn,
        ...P
      } = r,
      I = S.useRef(null),
      O = Ct(I, Qo(f), o),
      _ = (ne) => (Q) => {
        if (ne) {
          const ee = I.current;
          Q === void 0 ? ne(ee) : ne(ee, Q);
        }
      },
      z = _(C),
      V = _((ne, Q) => {
        Bd(ne);
        const ee = Wo({ style: E, timeout: R, easing: h }, { mode: 'enter' });
        (ne.style.webkitTransition = s.transitions.create('opacity', ee)),
          (ne.style.transition = s.transitions.create('opacity', ee)),
          g && g(ne, Q);
      }),
      G = _(v),
      x = _(b),
      j = _((ne) => {
        const Q = Wo({ style: E, timeout: R, easing: h }, { mode: 'exit' });
        (ne.style.webkitTransition = s.transitions.create('opacity', Q)),
          (ne.style.transition = s.transitions.create('opacity', Q)),
          k && k(ne);
      }),
      Z = _(w),
      Y = (ne) => {
        u && u(I.current, ne);
      };
    return M.jsx(N, {
      appear: c,
      in: m,
      nodeRef: I,
      onEnter: V,
      onEntered: G,
      onEntering: z,
      onExit: j,
      onExited: Z,
      onExiting: x,
      addEndListener: Y,
      timeout: R,
      ...P,
      children: (ne, { ownerState: Q, ...ee }) =>
        S.cloneElement(f, {
          style: {
            opacity: 0,
            visibility: ne === 'exited' && !m ? 'hidden' : void 0,
            ...lE[ne],
            ...E,
            ...f.props.style,
          },
          ref: O,
          ...ee,
        }),
    });
  });
function cE(e) {
  return Me('MuiBackdrop', e);
}
Ae('MuiBackdrop', ['root', 'invisible']);
const dE = (e) => {
    const { classes: r, invisible: o } = e;
    return Fe({ root: ['root', o && 'invisible'] }, cE, r);
  },
  fE = de('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [r.root, o.invisible && r.invisible];
    },
  })({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent',
    variants: [
      { props: { invisible: !0 }, style: { backgroundColor: 'transparent' } },
    ],
  }),
  pE = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiBackdrop' }),
      {
        children: a,
        className: u,
        component: c = 'div',
        invisible: f = !1,
        open: h,
        components: m = {},
        componentsProps: g = {},
        slotProps: v = {},
        slots: C = {},
        TransitionComponent: k,
        transitionDuration: w,
        ...b
      } = s,
      E = { ...s, component: c, invisible: f },
      R = dE(E),
      N = { transition: k, root: m.Root, ...C },
      P = { ...g, ...v },
      I = { slots: N, slotProps: P },
      [O, _] = zt('root', {
        elementType: fE,
        externalForwardedProps: I,
        className: we(R.root, u),
        ownerState: E,
      }),
      [z, V] = zt('transition', {
        elementType: uE,
        externalForwardedProps: I,
        ownerState: E,
      });
    return M.jsx(z, {
      in: h,
      timeout: w,
      ...b,
      ...V,
      children: M.jsx(O, {
        'aria-hidden': !0,
        ..._,
        classes: R,
        ref: o,
        children: a,
      }),
    });
  }),
  hE = Ae('MuiBox', ['root']),
  mE = vy(),
  Xr = Dw({
    themeId: sl,
    defaultTheme: mE,
    defaultClassName: hE.root,
    generateClassName: Jg.generate,
  });
function gE(e) {
  return Me('MuiButton', e);
}
const _o = Ae('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorInfo',
    'colorWarning',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'icon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge',
  ]),
  yE = S.createContext({}),
  vE = S.createContext(void 0),
  xE = (e) => {
    const {
        color: r,
        disableElevation: o,
        fullWidth: s,
        size: a,
        variant: u,
        classes: c,
      } = e,
      f = {
        root: [
          'root',
          u,
          `${u}${ge(r)}`,
          `size${ge(a)}`,
          `${u}Size${ge(a)}`,
          `color${ge(r)}`,
          o && 'disableElevation',
          s && 'fullWidth',
        ],
        label: ['label'],
        startIcon: ['icon', 'startIcon', `iconSize${ge(a)}`],
        endIcon: ['icon', 'endIcon', `iconSize${ge(a)}`],
      },
      h = Fe(f, gE, c);
    return { ...c, ...h };
  },
  Ey = [
    {
      props: { size: 'small' },
      style: { '& > *:nth-of-type(1)': { fontSize: 18 } },
    },
    {
      props: { size: 'medium' },
      style: { '& > *:nth-of-type(1)': { fontSize: 20 } },
    },
    {
      props: { size: 'large' },
      style: { '& > *:nth-of-type(1)': { fontSize: 22 } },
    },
  ],
  SE = de(Cy, {
    shouldForwardProp: (e) => pn(e) || e === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        r[o.variant],
        r[`${o.variant}${ge(o.color)}`],
        r[`size${ge(o.size)}`],
        r[`${o.variant}Size${ge(o.size)}`],
        o.color === 'inherit' && r.colorInherit,
        o.disableElevation && r.disableElevation,
        o.fullWidth && r.fullWidth,
      ];
    },
  })(
    He(({ theme: e }) => {
      const r =
          e.palette.mode === 'light'
            ? e.palette.grey[300]
            : e.palette.grey[800],
        o =
          e.palette.mode === 'light'
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return {
        ...e.typography.button,
        minWidth: 64,
        padding: '6px 16px',
        border: 0,
        borderRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create(
          ['background-color', 'box-shadow', 'border-color', 'color'],
          { duration: e.transitions.duration.short },
        ),
        '&:hover': { textDecoration: 'none' },
        [`&.${_o.disabled}`]: { color: (e.vars || e).palette.action.disabled },
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              color: 'var(--variant-containedColor)',
              backgroundColor: 'var(--variant-containedBg)',
              boxShadow: (e.vars || e).shadows[2],
              '&:hover': {
                boxShadow: (e.vars || e).shadows[4],
                '@media (hover: none)': { boxShadow: (e.vars || e).shadows[2] },
              },
              '&:active': { boxShadow: (e.vars || e).shadows[8] },
              [`&.${_o.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
              [`&.${_o.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
                boxShadow: (e.vars || e).shadows[0],
                backgroundColor: (e.vars || e).palette.action
                  .disabledBackground,
              },
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              padding: '5px 15px',
              border: '1px solid currentColor',
              borderColor: 'var(--variant-outlinedBorder, currentColor)',
              backgroundColor: 'var(--variant-outlinedBg)',
              color: 'var(--variant-outlinedColor)',
              [`&.${_o.disabled}`]: {
                border: `1px solid ${
                  (e.vars || e).palette.action.disabledBackground
                }`,
              },
            },
          },
          {
            props: { variant: 'text' },
            style: {
              padding: '6px 8px',
              color: 'var(--variant-textColor)',
              backgroundColor: 'var(--variant-textBg)',
            },
          },
          ...Object.entries(e.palette)
            .filter(dn())
            .map(([s]) => ({
              props: { color: s },
              style: {
                '--variant-textColor': (e.vars || e).palette[s].main,
                '--variant-outlinedColor': (e.vars || e).palette[s].main,
                '--variant-outlinedBorder': e.vars
                  ? `rgba(${e.vars.palette[s].mainChannel} / 0.5)`
                  : Cn(e.palette[s].main, 0.5),
                '--variant-containedColor': (e.vars || e).palette[s]
                  .contrastText,
                '--variant-containedBg': (e.vars || e).palette[s].main,
                '@media (hover: hover)': {
                  '&:hover': {
                    '--variant-containedBg': (e.vars || e).palette[s].dark,
                    '--variant-textBg': e.vars
                      ? `rgba(${e.vars.palette[s].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : Cn(e.palette[s].main, e.palette.action.hoverOpacity),
                    '--variant-outlinedBorder': (e.vars || e).palette[s].main,
                    '--variant-outlinedBg': e.vars
                      ? `rgba(${e.vars.palette[s].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : Cn(e.palette[s].main, e.palette.action.hoverOpacity),
                  },
                },
              },
            })),
          {
            props: { color: 'inherit' },
            style: {
              color: 'inherit',
              borderColor: 'currentColor',
              '--variant-containedBg': e.vars
                ? e.vars.palette.Button.inheritContainedBg
                : r,
              '@media (hover: hover)': {
                '&:hover': {
                  '--variant-containedBg': e.vars
                    ? e.vars.palette.Button.inheritContainedHoverBg
                    : o,
                  '--variant-textBg': e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : Cn(e.palette.text.primary, e.palette.action.hoverOpacity),
                  '--variant-outlinedBg': e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : Cn(e.palette.text.primary, e.palette.action.hoverOpacity),
                },
              },
            },
          },
          {
            props: { size: 'small', variant: 'text' },
            style: { padding: '4px 5px', fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'text' },
            style: { padding: '8px 11px', fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'outlined' },
            style: { padding: '3px 9px', fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'outlined' },
            style: { padding: '7px 21px', fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'contained' },
            style: { padding: '4px 10px', fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'contained' },
            style: { padding: '8px 22px', fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none' },
              [`&.${_o.focusVisible}`]: { boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
              [`&.${_o.disabled}`]: { boxShadow: 'none' },
            },
          },
          { props: { fullWidth: !0 }, style: { width: '100%' } },
        ],
      };
    }),
  ),
  wE = de('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [r.startIcon, r[`iconSize${ge(o.size)}`]];
    },
  })({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    variants: [{ props: { size: 'small' }, style: { marginLeft: -2 } }, ...Ey],
  }),
  CE = de('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [r.endIcon, r[`iconSize${ge(o.size)}`]];
    },
  })({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    variants: [{ props: { size: 'small' }, style: { marginRight: -2 } }, ...Ey],
  }),
  Va = S.forwardRef(function (r, o) {
    const s = S.useContext(yE),
      a = S.useContext(vE),
      u = os(s, r),
      c = Be({ props: u, name: 'MuiButton' }),
      {
        children: f,
        color: h = 'primary',
        component: m = 'button',
        className: g,
        disabled: v = !1,
        disableElevation: C = !1,
        disableFocusRipple: k = !1,
        endIcon: w,
        focusVisibleClassName: b,
        fullWidth: E = !1,
        size: R = 'medium',
        startIcon: N,
        type: P,
        variant: I = 'text',
        ...O
      } = c,
      _ = {
        ...c,
        color: h,
        component: m,
        disabled: v,
        disableElevation: C,
        disableFocusRipple: k,
        fullWidth: E,
        size: R,
        type: P,
        variant: I,
      },
      z = xE(_),
      V =
        N && M.jsx(wE, { className: z.startIcon, ownerState: _, children: N }),
      G = w && M.jsx(CE, { className: z.endIcon, ownerState: _, children: w }),
      x = a || '';
    return M.jsxs(SE, {
      ownerState: _,
      className: we(s.className, z.root, g, x),
      component: m,
      disabled: v,
      focusRipple: !k,
      focusVisibleClassName: we(z.focusVisible, b),
      ref: o,
      type: P,
      ...O,
      classes: z,
      children: [V, f, G],
    });
  });
function bE(e) {
  return Me('MuiCircularProgress', e);
}
Ae('MuiCircularProgress', [
  'root',
  'determinate',
  'indeterminate',
  'colorPrimary',
  'colorSecondary',
  'svg',
  'circle',
  'circleDeterminate',
  'circleIndeterminate',
  'circleDisableShrink',
]);
const Or = 44,
  Jc = ps`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  Zc = ps`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,
  EE =
    typeof Jc != 'string'
      ? Pd`
        animation: ${Jc} 1.4s linear infinite;
      `
      : null,
  kE =
    typeof Zc != 'string'
      ? Pd`
        animation: ${Zc} 1.4s ease-in-out infinite;
      `
      : null,
  RE = (e) => {
    const { classes: r, variant: o, color: s, disableShrink: a } = e,
      u = {
        root: ['root', o, `color${ge(s)}`],
        svg: ['svg'],
        circle: ['circle', `circle${ge(o)}`, a && 'circleDisableShrink'],
      };
    return Fe(u, bE, r);
  },
  PE = de('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [r.root, r[o.variant], r[`color${ge(o.color)}`]];
    },
  })(
    He(({ theme: e }) => ({
      display: 'inline-block',
      variants: [
        {
          props: { variant: 'determinate' },
          style: { transition: e.transitions.create('transform') },
        },
        {
          props: { variant: 'indeterminate' },
          style: EE || { animation: `${Jc} 1.4s linear infinite` },
        },
        ...Object.entries(e.palette)
          .filter(dn())
          .map(([r]) => ({
            props: { color: r },
            style: { color: (e.vars || e).palette[r].main },
          })),
      ],
    })),
  ),
  TE = de('svg', {
    name: 'MuiCircularProgress',
    slot: 'Svg',
    overridesResolver: (e, r) => r.svg,
  })({ display: 'block' }),
  IE = de('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.circle,
        r[`circle${ge(o.variant)}`],
        o.disableShrink && r.circleDisableShrink,
      ];
    },
  })(
    He(({ theme: e }) => ({
      stroke: 'currentColor',
      variants: [
        {
          props: { variant: 'determinate' },
          style: { transition: e.transitions.create('stroke-dashoffset') },
        },
        {
          props: { variant: 'indeterminate' },
          style: { strokeDasharray: '80px, 200px', strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: r }) =>
            r.variant === 'indeterminate' && !r.disableShrink,
          style: kE || { animation: `${Zc} 1.4s ease-in-out infinite` },
        },
      ],
    })),
  ),
  Dm = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiCircularProgress' }),
      {
        className: a,
        color: u = 'primary',
        disableShrink: c = !1,
        size: f = 40,
        style: h,
        thickness: m = 3.6,
        value: g = 0,
        variant: v = 'indeterminate',
        ...C
      } = s,
      k = {
        ...s,
        color: u,
        disableShrink: c,
        size: f,
        thickness: m,
        value: g,
        variant: v,
      },
      w = RE(k),
      b = {},
      E = {},
      R = {};
    if (v === 'determinate') {
      const N = 2 * Math.PI * ((Or - m) / 2);
      (b.strokeDasharray = N.toFixed(3)),
        (R['aria-valuenow'] = Math.round(g)),
        (b.strokeDashoffset = `${(((100 - g) / 100) * N).toFixed(3)}px`),
        (E.transform = 'rotate(-90deg)');
    }
    return M.jsx(PE, {
      className: we(w.root, a),
      style: { width: f, height: f, ...E, ...h },
      ownerState: k,
      ref: o,
      role: 'progressbar',
      ...R,
      ...C,
      children: M.jsx(TE, {
        className: w.svg,
        ownerState: k,
        viewBox: `${Or / 2} ${Or / 2} ${Or} ${Or}`,
        children: M.jsx(IE, {
          className: w.circle,
          style: b,
          ownerState: k,
          cx: Or,
          cy: Or,
          r: (Or - m) / 2,
          fill: 'none',
          strokeWidth: m,
        }),
      }),
    });
  }),
  ky = CC({
    createStyledComponent: de('div', {
      name: 'MuiContainer',
      slot: 'Root',
      overridesResolver: (e, r) => {
        const { ownerState: o } = e;
        return [
          r.root,
          r[`maxWidth${ge(String(o.maxWidth))}`],
          o.fixed && r.fixed,
          o.disableGutters && r.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => Be({ props: e, name: 'MuiContainer' }),
  });
function OE(e) {
  const r = kn(e);
  return r.body === e
    ? Rn(e).innerWidth > r.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Yi(e, r) {
  r ? e.setAttribute('aria-hidden', 'true') : e.removeAttribute('aria-hidden');
}
function jm(e) {
  return parseInt(Rn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function NE(e) {
  const o = [
      'TEMPLATE',
      'SCRIPT',
      'STYLE',
      'LINK',
      'MAP',
      'META',
      'NOSCRIPT',
      'PICTURE',
      'COL',
      'COLGROUP',
      'PARAM',
      'SLOT',
      'SOURCE',
      'TRACK',
    ].includes(e.tagName),
    s = e.tagName === 'INPUT' && e.getAttribute('type') === 'hidden';
  return o || s;
}
function Um(e, r, o, s, a) {
  const u = [r, o, ...s];
  [].forEach.call(e.children, (c) => {
    const f = !u.includes(c),
      h = !NE(c);
    f && h && Yi(c, a);
  });
}
function Tc(e, r) {
  let o = -1;
  return e.some((s, a) => (r(s) ? ((o = a), !0) : !1)), o;
}
function AE(e, r) {
  const o = [],
    s = e.container;
  if (!r.disableScrollLock) {
    if (OE(s)) {
      const c = ay(Rn(s));
      o.push({ value: s.style.paddingRight, property: 'padding-right', el: s }),
        (s.style.paddingRight = `${jm(s) + c}px`);
      const f = kn(s).querySelectorAll('.mui-fixed');
      [].forEach.call(f, (h) => {
        o.push({
          value: h.style.paddingRight,
          property: 'padding-right',
          el: h,
        }),
          (h.style.paddingRight = `${jm(h) + c}px`);
      });
    }
    let u;
    if (s.parentNode instanceof DocumentFragment) u = kn(s).body;
    else {
      const c = s.parentElement,
        f = Rn(s);
      u =
        (c == null ? void 0 : c.nodeName) === 'HTML' &&
        f.getComputedStyle(c).overflowY === 'scroll'
          ? c
          : s;
    }
    o.push(
      { value: u.style.overflow, property: 'overflow', el: u },
      { value: u.style.overflowX, property: 'overflow-x', el: u },
      { value: u.style.overflowY, property: 'overflow-y', el: u },
    ),
      (u.style.overflow = 'hidden');
  }
  return () => {
    o.forEach(({ value: u, el: c, property: f }) => {
      u ? c.style.setProperty(f, u) : c.style.removeProperty(f);
    });
  };
}
function LE(e) {
  const r = [];
  return (
    [].forEach.call(e.children, (o) => {
      o.getAttribute('aria-hidden') === 'true' && r.push(o);
    }),
    r
  );
}
class $E {
  constructor() {
    (this.modals = []), (this.containers = []);
  }
  add(r, o) {
    let s = this.modals.indexOf(r);
    if (s !== -1) return s;
    (s = this.modals.length),
      this.modals.push(r),
      r.modalRef && Yi(r.modalRef, !1);
    const a = LE(o);
    Um(o, r.mount, r.modalRef, a, !0);
    const u = Tc(this.containers, (c) => c.container === o);
    return u !== -1
      ? (this.containers[u].modals.push(r), s)
      : (this.containers.push({
          modals: [r],
          container: o,
          restore: null,
          hiddenSiblings: a,
        }),
        s);
  }
  mount(r, o) {
    const s = Tc(this.containers, (u) => u.modals.includes(r)),
      a = this.containers[s];
    a.restore || (a.restore = AE(a, o));
  }
  remove(r, o = !0) {
    const s = this.modals.indexOf(r);
    if (s === -1) return s;
    const a = Tc(this.containers, (c) => c.modals.includes(r)),
      u = this.containers[a];
    if (
      (u.modals.splice(u.modals.indexOf(r), 1),
      this.modals.splice(s, 1),
      u.modals.length === 0)
    )
      u.restore && u.restore(),
        r.modalRef && Yi(r.modalRef, o),
        Um(u.container, r.mount, r.modalRef, u.hiddenSiblings, !1),
        this.containers.splice(a, 1);
    else {
      const c = u.modals[u.modals.length - 1];
      c.modalRef && Yi(c.modalRef, !1);
    }
    return s;
  }
  isTopModal(r) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === r;
  }
}
const ME = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
].join(',');
function _E(e) {
  const r = parseInt(e.getAttribute('tabindex') || '', 10);
  return Number.isNaN(r)
    ? e.contentEditable === 'true' ||
      ((e.nodeName === 'AUDIO' ||
        e.nodeName === 'VIDEO' ||
        e.nodeName === 'DETAILS') &&
        e.getAttribute('tabindex') === null)
      ? 0
      : e.tabIndex
    : r;
}
function zE(e) {
  if (e.tagName !== 'INPUT' || e.type !== 'radio' || !e.name) return !1;
  const r = (s) => e.ownerDocument.querySelector(`input[type="radio"]${s}`);
  let o = r(`[name="${e.name}"]:checked`);
  return o || (o = r(`[name="${e.name}"]`)), o !== e;
}
function FE(e) {
  return !(
    e.disabled ||
    (e.tagName === 'INPUT' && e.type === 'hidden') ||
    zE(e)
  );
}
function BE(e) {
  const r = [],
    o = [];
  return (
    Array.from(e.querySelectorAll(ME)).forEach((s, a) => {
      const u = _E(s);
      u === -1 ||
        !FE(s) ||
        (u === 0
          ? r.push(s)
          : o.push({ documentOrder: a, tabIndex: u, node: s }));
    }),
    o
      .sort((s, a) =>
        s.tabIndex === a.tabIndex
          ? s.documentOrder - a.documentOrder
          : s.tabIndex - a.tabIndex,
      )
      .map((s) => s.node)
      .concat(r)
  );
}
function DE() {
  return !0;
}
function jE(e) {
  const {
      children: r,
      disableAutoFocus: o = !1,
      disableEnforceFocus: s = !1,
      disableRestoreFocus: a = !1,
      getTabbable: u = BE,
      isEnabled: c = DE,
      open: f,
    } = e,
    h = S.useRef(!1),
    m = S.useRef(null),
    g = S.useRef(null),
    v = S.useRef(null),
    C = S.useRef(null),
    k = S.useRef(!1),
    w = S.useRef(null),
    b = Ct(Qo(r), w),
    E = S.useRef(null);
  S.useEffect(() => {
    !f || !w.current || (k.current = !o);
  }, [o, f]),
    S.useEffect(() => {
      if (!f || !w.current) return;
      const P = kn(w.current);
      return (
        w.current.contains(P.activeElement) ||
          (w.current.hasAttribute('tabIndex') ||
            w.current.setAttribute('tabIndex', '-1'),
          k.current && w.current.focus()),
        () => {
          a ||
            (v.current &&
              v.current.focus &&
              ((h.current = !0), v.current.focus()),
            (v.current = null));
        }
      );
    }, [f]),
    S.useEffect(() => {
      if (!f || !w.current) return;
      const P = kn(w.current),
        I = (z) => {
          (E.current = z),
            !(s || !c() || z.key !== 'Tab') &&
              P.activeElement === w.current &&
              z.shiftKey &&
              ((h.current = !0), g.current && g.current.focus());
        },
        O = () => {
          var G, x;
          const z = w.current;
          if (z === null) return;
          if (!P.hasFocus() || !c() || h.current) {
            h.current = !1;
            return;
          }
          if (
            z.contains(P.activeElement) ||
            (s &&
              P.activeElement !== m.current &&
              P.activeElement !== g.current)
          )
            return;
          if (P.activeElement !== C.current) C.current = null;
          else if (C.current !== null) return;
          if (!k.current) return;
          let V = [];
          if (
            ((P.activeElement === m.current || P.activeElement === g.current) &&
              (V = u(w.current)),
            V.length > 0)
          ) {
            const j = !!(
                (G = E.current) != null &&
                G.shiftKey &&
                ((x = E.current) == null ? void 0 : x.key) === 'Tab'
              ),
              Z = V[0],
              Y = V[V.length - 1];
            typeof Z != 'string' &&
              typeof Y != 'string' &&
              (j ? Y.focus() : Z.focus());
          } else z.focus();
        };
      P.addEventListener('focusin', O), P.addEventListener('keydown', I, !0);
      const _ = setInterval(() => {
        P.activeElement && P.activeElement.tagName === 'BODY' && O();
      }, 50);
      return () => {
        clearInterval(_),
          P.removeEventListener('focusin', O),
          P.removeEventListener('keydown', I, !0);
      };
    }, [o, s, a, c, f, u]);
  const R = (P) => {
      v.current === null && (v.current = P.relatedTarget),
        (k.current = !0),
        (C.current = P.target);
      const I = r.props.onFocus;
      I && I(P);
    },
    N = (P) => {
      v.current === null && (v.current = P.relatedTarget), (k.current = !0);
    };
  return M.jsxs(S.Fragment, {
    children: [
      M.jsx('div', {
        tabIndex: f ? 0 : -1,
        onFocus: N,
        ref: m,
        'data-testid': 'sentinelStart',
      }),
      S.cloneElement(r, { ref: b, onFocus: R }),
      M.jsx('div', {
        tabIndex: f ? 0 : -1,
        onFocus: N,
        ref: g,
        'data-testid': 'sentinelEnd',
      }),
    ],
  });
}
function UE(e) {
  return typeof e == 'function' ? e() : e;
}
function WE(e) {
  return e ? e.props.hasOwnProperty('in') : !1;
}
const Wm = () => {},
  $a = new $E();
function HE(e) {
  const {
      container: r,
      disableEscapeKeyDown: o = !1,
      disableScrollLock: s = !1,
      closeAfterTransition: a = !1,
      onTransitionEnter: u,
      onTransitionExited: c,
      children: f,
      onClose: h,
      open: m,
      rootRef: g,
    } = e,
    v = S.useRef({}),
    C = S.useRef(null),
    k = S.useRef(null),
    w = Ct(k, g),
    [b, E] = S.useState(!m),
    R = WE(f);
  let N = !0;
  (e['aria-hidden'] === 'false' || e['aria-hidden'] === !1) && (N = !1);
  const P = () => kn(C.current),
    I = () => (
      (v.current.modalRef = k.current), (v.current.mount = C.current), v.current
    ),
    O = () => {
      $a.mount(I(), { disableScrollLock: s }),
        k.current && (k.current.scrollTop = 0);
    },
    _ = jo(() => {
      const Q = UE(r) || P().body;
      $a.add(I(), Q), k.current && O();
    }),
    z = () => $a.isTopModal(I()),
    V = jo((Q) => {
      (C.current = Q), Q && (m && z() ? O() : k.current && Yi(k.current, N));
    }),
    G = S.useCallback(() => {
      $a.remove(I(), N);
    }, [N]);
  S.useEffect(
    () => () => {
      G();
    },
    [G],
  ),
    S.useEffect(() => {
      m ? _() : (!R || !a) && G();
    }, [m, G, R, a, _]);
  const x = (Q) => (ee) => {
      var ie;
      (ie = Q.onKeyDown) == null || ie.call(Q, ee),
        !(ee.key !== 'Escape' || ee.which === 229 || !z()) &&
          (o || (ee.stopPropagation(), h && h(ee, 'escapeKeyDown')));
    },
    j = (Q) => (ee) => {
      var ie;
      (ie = Q.onClick) == null || ie.call(Q, ee),
        ee.target === ee.currentTarget && h && h(ee, 'backdropClick');
    };
  return {
    getRootProps: (Q = {}) => {
      const ee = uy(e);
      delete ee.onTransitionEnter, delete ee.onTransitionExited;
      const ie = { ...ee, ...Q };
      return { role: 'presentation', ...ie, onKeyDown: x(ie), ref: w };
    },
    getBackdropProps: (Q = {}) => {
      const ee = Q;
      return { 'aria-hidden': !0, ...ee, onClick: j(ee), open: m };
    },
    getTransitionProps: () => {
      const Q = () => {
          E(!1), u && u();
        },
        ee = () => {
          E(!0), c && c(), a && G();
        };
      return {
        onEnter: hm(Q, (f == null ? void 0 : f.props.onEnter) ?? Wm),
        onExited: hm(ee, (f == null ? void 0 : f.props.onExited) ?? Wm),
      };
    },
    rootRef: w,
    portalRef: V,
    isTopModal: z,
    exited: b,
    hasTransition: R,
  };
}
function VE(e) {
  return Me('MuiModal', e);
}
Ae('MuiModal', ['root', 'hidden', 'backdrop']);
const KE = (e) => {
    const { open: r, exited: o, classes: s } = e;
    return Fe(
      { root: ['root', !r && o && 'hidden'], backdrop: ['backdrop'] },
      VE,
      s,
    );
  },
  qE = de('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [r.root, !o.open && o.exited && r.hidden];
    },
  })(
    He(({ theme: e }) => ({
      position: 'fixed',
      zIndex: (e.vars || e).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        {
          props: ({ ownerState: r }) => !r.open && r.exited,
          style: { visibility: 'hidden' },
        },
      ],
    })),
  ),
  GE = de(pE, {
    name: 'MuiModal',
    slot: 'Backdrop',
    overridesResolver: (e, r) => r.backdrop,
  })({ zIndex: -1 }),
  Ry = S.forwardRef(function (r, o) {
    const s = Be({ name: 'MuiModal', props: r }),
      {
        BackdropComponent: a = GE,
        BackdropProps: u,
        classes: c,
        className: f,
        closeAfterTransition: h = !1,
        children: m,
        container: g,
        component: v,
        components: C = {},
        componentsProps: k = {},
        disableAutoFocus: w = !1,
        disableEnforceFocus: b = !1,
        disableEscapeKeyDown: E = !1,
        disablePortal: R = !1,
        disableRestoreFocus: N = !1,
        disableScrollLock: P = !1,
        hideBackdrop: I = !1,
        keepMounted: O = !1,
        onBackdropClick: _,
        onClose: z,
        onTransitionEnter: V,
        onTransitionExited: G,
        open: x,
        slotProps: j = {},
        slots: Z = {},
        theme: Y,
        ...ne
      } = s,
      Q = {
        ...s,
        closeAfterTransition: h,
        disableAutoFocus: w,
        disableEnforceFocus: b,
        disableEscapeKeyDown: E,
        disablePortal: R,
        disableRestoreFocus: N,
        disableScrollLock: P,
        hideBackdrop: I,
        keepMounted: O,
      },
      {
        getRootProps: ee,
        getBackdropProps: ie,
        getTransitionProps: U,
        portalRef: K,
        isTopModal: re,
        exited: L,
        hasTransition: q,
      } = HE({ ...Q, rootRef: o }),
      ae = { ...Q, exited: L },
      ue = KE(ae),
      pe = {};
    if ((m.props.tabIndex === void 0 && (pe.tabIndex = '-1'), q)) {
      const { onEnter: Oe, onExited: Xe } = U();
      (pe.onEnter = Oe), (pe.onExited = Xe);
    }
    const Ce = {
        ...ne,
        slots: { root: C.Root, backdrop: C.Backdrop, ...Z },
        slotProps: { ...k, ...j },
      },
      [ke, Re] = zt('root', {
        elementType: qE,
        externalForwardedProps: Ce,
        getSlotProps: ee,
        additionalProps: { ref: o, as: v },
        ownerState: ae,
        className: we(
          f,
          ue == null ? void 0 : ue.root,
          !ae.open && ae.exited && (ue == null ? void 0 : ue.hidden),
        ),
      }),
      [be, xe] = zt('backdrop', {
        elementType: a,
        externalForwardedProps: Ce,
        additionalProps: u,
        getSlotProps: (Oe) =>
          ie({
            ...Oe,
            onClick: (Xe) => {
              _ && _(Xe), Oe != null && Oe.onClick && Oe.onClick(Xe);
            },
          }),
        className: we(
          u == null ? void 0 : u.className,
          ue == null ? void 0 : ue.backdrop,
        ),
        ownerState: ae,
      }),
      Le = Ct(u == null ? void 0 : u.ref, xe.ref);
    return !O && !x && (!q || L)
      ? null
      : M.jsx(Yb, {
          ref: K,
          container: g,
          disablePortal: R,
          children: M.jsxs(ke, {
            ...Re,
            children: [
              !I && a ? M.jsx(be, { ...xe, ref: Le }) : null,
              M.jsx(jE, {
                disableEnforceFocus: b,
                disableAutoFocus: w,
                disableRestoreFocus: N,
                isEnabled: re,
                open: x,
                children: S.cloneElement(m, pe),
              }),
            ],
          }),
        });
  });
function QE(e) {
  return Me('MuiDivider', e);
}
Ae('MuiDivider', [
  'root',
  'absolute',
  'fullWidth',
  'inset',
  'middle',
  'flexItem',
  'light',
  'vertical',
  'withChildren',
  'withChildrenVertical',
  'textAlignRight',
  'textAlignLeft',
  'wrapper',
  'wrapperVertical',
]);
const XE = (e) => {
    const {
      absolute: r,
      children: o,
      classes: s,
      flexItem: a,
      light: u,
      orientation: c,
      textAlign: f,
      variant: h,
    } = e;
    return Fe(
      {
        root: [
          'root',
          r && 'absolute',
          h,
          u && 'light',
          c === 'vertical' && 'vertical',
          a && 'flexItem',
          o && 'withChildren',
          o && c === 'vertical' && 'withChildrenVertical',
          f === 'right' && c !== 'vertical' && 'textAlignRight',
          f === 'left' && c !== 'vertical' && 'textAlignLeft',
        ],
        wrapper: ['wrapper', c === 'vertical' && 'wrapperVertical'],
      },
      QE,
      s,
    );
  },
  YE = de('div', {
    name: 'MuiDivider',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        o.absolute && r.absolute,
        r[o.variant],
        o.light && r.light,
        o.orientation === 'vertical' && r.vertical,
        o.flexItem && r.flexItem,
        o.children && r.withChildren,
        o.children && o.orientation === 'vertical' && r.withChildrenVertical,
        o.textAlign === 'right' &&
          o.orientation !== 'vertical' &&
          r.textAlignRight,
        o.textAlign === 'left' &&
          o.orientation !== 'vertical' &&
          r.textAlignLeft,
      ];
    },
  })(
    He(({ theme: e }) => ({
      margin: 0,
      flexShrink: 0,
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: (e.vars || e).palette.divider,
      borderBottomWidth: 'thin',
      variants: [
        {
          props: { absolute: !0 },
          style: { position: 'absolute', bottom: 0, left: 0, width: '100%' },
        },
        {
          props: { light: !0 },
          style: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.dividerChannel} / 0.08)`
              : Cn(e.palette.divider, 0.08),
          },
        },
        { props: { variant: 'inset' }, style: { marginLeft: 72 } },
        {
          props: { variant: 'middle', orientation: 'horizontal' },
          style: { marginLeft: e.spacing(2), marginRight: e.spacing(2) },
        },
        {
          props: { variant: 'middle', orientation: 'vertical' },
          style: { marginTop: e.spacing(1), marginBottom: e.spacing(1) },
        },
        {
          props: { orientation: 'vertical' },
          style: {
            height: '100%',
            borderBottomWidth: 0,
            borderRightWidth: 'thin',
          },
        },
        {
          props: { flexItem: !0 },
          style: { alignSelf: 'stretch', height: 'auto' },
        },
        {
          props: ({ ownerState: r }) => !!r.children,
          style: {
            display: 'flex',
            textAlign: 'center',
            border: 0,
            borderTopStyle: 'solid',
            borderLeftStyle: 'solid',
            '&::before, &::after': { content: '""', alignSelf: 'center' },
          },
        },
        {
          props: ({ ownerState: r }) =>
            r.children && r.orientation !== 'vertical',
          style: {
            '&::before, &::after': {
              width: '100%',
              borderTop: `thin solid ${(e.vars || e).palette.divider}`,
              borderTopStyle: 'inherit',
            },
          },
        },
        {
          props: ({ ownerState: r }) =>
            r.orientation === 'vertical' && r.children,
          style: {
            flexDirection: 'column',
            '&::before, &::after': {
              height: '100%',
              borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
              borderLeftStyle: 'inherit',
            },
          },
        },
        {
          props: ({ ownerState: r }) =>
            r.textAlign === 'right' && r.orientation !== 'vertical',
          style: {
            '&::before': { width: '90%' },
            '&::after': { width: '10%' },
          },
        },
        {
          props: ({ ownerState: r }) =>
            r.textAlign === 'left' && r.orientation !== 'vertical',
          style: {
            '&::before': { width: '10%' },
            '&::after': { width: '90%' },
          },
        },
      ],
    })),
  ),
  JE = de('span', {
    name: 'MuiDivider',
    slot: 'Wrapper',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [r.wrapper, o.orientation === 'vertical' && r.wrapperVertical];
    },
  })(
    He(({ theme: e }) => ({
      display: 'inline-block',
      paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
      paddingRight: `calc(${e.spacing(1)} * 1.2)`,
      whiteSpace: 'nowrap',
      variants: [
        {
          props: { orientation: 'vertical' },
          style: {
            paddingTop: `calc(${e.spacing(1)} * 1.2)`,
            paddingBottom: `calc(${e.spacing(1)} * 1.2)`,
          },
        },
      ],
    })),
  ),
  ed = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiDivider' }),
      {
        absolute: a = !1,
        children: u,
        className: c,
        orientation: f = 'horizontal',
        component: h = u || f === 'vertical' ? 'div' : 'hr',
        flexItem: m = !1,
        light: g = !1,
        role: v = h !== 'hr' ? 'separator' : void 0,
        textAlign: C = 'center',
        variant: k = 'fullWidth',
        ...w
      } = s,
      b = {
        ...s,
        absolute: a,
        component: h,
        flexItem: m,
        light: g,
        orientation: f,
        role: v,
        textAlign: C,
        variant: k,
      },
      E = XE(b);
    return M.jsx(YE, {
      as: h,
      className: we(E.root, c),
      role: v,
      ref: o,
      ownerState: b,
      'aria-orientation':
        v === 'separator' && (h !== 'hr' || f === 'vertical') ? f : void 0,
      ...w,
      children: u
        ? M.jsx(JE, { className: E.wrapper, ownerState: b, children: u })
        : null,
    });
  });
ed && (ed.muiSkipListHighlight = !0);
function ZE(e, r, o) {
  const s = r.getBoundingClientRect(),
    a = o && o.getBoundingClientRect(),
    u = Rn(r);
  let c;
  if (r.fakeTransform) c = r.fakeTransform;
  else {
    const m = u.getComputedStyle(r);
    c =
      m.getPropertyValue('-webkit-transform') ||
      m.getPropertyValue('transform');
  }
  let f = 0,
    h = 0;
  if (c && c !== 'none' && typeof c == 'string') {
    const m = c.split('(')[1].split(')')[0].split(',');
    (f = parseInt(m[4], 10)), (h = parseInt(m[5], 10));
  }
  return e === 'left'
    ? a
      ? `translateX(${a.right + f - s.left}px)`
      : `translateX(${u.innerWidth + f - s.left}px)`
    : e === 'right'
    ? a
      ? `translateX(-${s.right - a.left - f}px)`
      : `translateX(-${s.left + s.width - f}px)`
    : e === 'up'
    ? a
      ? `translateY(${a.bottom + h - s.top}px)`
      : `translateY(${u.innerHeight + h - s.top}px)`
    : a
    ? `translateY(-${s.top - a.top + s.height - h}px)`
    : `translateY(-${s.top + s.height - h}px)`;
}
function ek(e) {
  return typeof e == 'function' ? e() : e;
}
function Ma(e, r, o) {
  const s = ek(o),
    a = ZE(e, r, s);
  a && ((r.style.webkitTransform = a), (r.style.transform = a));
}
const tk = S.forwardRef(function (r, o) {
  const s = ys(),
    a = {
      enter: s.transitions.easing.easeOut,
      exit: s.transitions.easing.sharp,
    },
    u = {
      enter: s.transitions.duration.enteringScreen,
      exit: s.transitions.duration.leavingScreen,
    },
    {
      addEndListener: c,
      appear: f = !0,
      children: h,
      container: m,
      direction: g = 'down',
      easing: v = a,
      in: C,
      onEnter: k,
      onEntered: w,
      onEntering: b,
      onExit: E,
      onExited: R,
      onExiting: N,
      style: P,
      timeout: I = u,
      TransitionComponent: O = Tn,
      ..._
    } = r,
    z = S.useRef(null),
    V = Ct(Qo(h), z, o),
    G = (U) => (K) => {
      U && (K === void 0 ? U(z.current) : U(z.current, K));
    },
    x = G((U, K) => {
      Ma(g, U, m), Bd(U), k && k(U, K);
    }),
    j = G((U, K) => {
      const re = Wo({ timeout: I, style: P, easing: v }, { mode: 'enter' });
      (U.style.webkitTransition = s.transitions.create('-webkit-transform', {
        ...re,
      })),
        (U.style.transition = s.transitions.create('transform', { ...re })),
        (U.style.webkitTransform = 'none'),
        (U.style.transform = 'none'),
        b && b(U, K);
    }),
    Z = G(w),
    Y = G(N),
    ne = G((U) => {
      const K = Wo({ timeout: I, style: P, easing: v }, { mode: 'exit' });
      (U.style.webkitTransition = s.transitions.create('-webkit-transform', K)),
        (U.style.transition = s.transitions.create('transform', K)),
        Ma(g, U, m),
        E && E(U);
    }),
    Q = G((U) => {
      (U.style.webkitTransition = ''), (U.style.transition = ''), R && R(U);
    }),
    ee = (U) => {
      c && c(z.current, U);
    },
    ie = S.useCallback(() => {
      z.current && Ma(g, z.current, m);
    }, [g, m]);
  return (
    S.useEffect(() => {
      if (C || g === 'down' || g === 'right') return;
      const U = Ld(() => {
          z.current && Ma(g, z.current, m);
        }),
        K = Rn(z.current);
      return (
        K.addEventListener('resize', U),
        () => {
          U.clear(), K.removeEventListener('resize', U);
        }
      );
    }, [g, C, m]),
    S.useEffect(() => {
      C || ie();
    }, [C, ie]),
    M.jsx(O, {
      nodeRef: z,
      onEnter: x,
      onEntered: Z,
      onEntering: j,
      onExit: ne,
      onExited: Q,
      onExiting: Y,
      addEndListener: ee,
      appear: f,
      in: C,
      timeout: I,
      ..._,
      children: (U, { ownerState: K, ...re }) =>
        S.cloneElement(h, {
          ref: V,
          style: {
            visibility: U === 'exited' && !C ? 'hidden' : void 0,
            ...P,
            ...h.props.style,
          },
          ...re,
        }),
    })
  );
});
function nk(e) {
  return Me('MuiDrawer', e);
}
Ae('MuiDrawer', [
  'root',
  'docked',
  'paper',
  'paperAnchorLeft',
  'paperAnchorRight',
  'paperAnchorTop',
  'paperAnchorBottom',
  'paperAnchorDockedLeft',
  'paperAnchorDockedRight',
  'paperAnchorDockedTop',
  'paperAnchorDockedBottom',
  'modal',
]);
const Py = (e, r) => {
    const { ownerState: o } = e;
    return [
      r.root,
      (o.variant === 'permanent' || o.variant === 'persistent') && r.docked,
      r.modal,
    ];
  },
  rk = (e) => {
    const { classes: r, anchor: o, variant: s } = e,
      a = {
        root: ['root'],
        docked: [(s === 'permanent' || s === 'persistent') && 'docked'],
        modal: ['modal'],
        paper: [
          'paper',
          `paperAnchor${ge(o)}`,
          s !== 'temporary' && `paperAnchorDocked${ge(o)}`,
        ],
      };
    return Fe(a, nk, r);
  },
  ok = de(Ry, { name: 'MuiDrawer', slot: 'Root', overridesResolver: Py })(
    He(({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer })),
  ),
  Hm = de('div', {
    shouldForwardProp: pn,
    name: 'MuiDrawer',
    slot: 'Docked',
    skipVariantsResolver: !1,
    overridesResolver: Py,
  })({ flex: '0 0 auto' }),
  ik = de(Dd, {
    name: 'MuiDrawer',
    slot: 'Paper',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.paper,
        r[`paperAnchor${ge(o.anchor)}`],
        o.variant !== 'temporary' && r[`paperAnchorDocked${ge(o.anchor)}`],
      ];
    },
  })(
    He(({ theme: e }) => ({
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      flex: '1 0 auto',
      zIndex: (e.vars || e).zIndex.drawer,
      WebkitOverflowScrolling: 'touch',
      position: 'fixed',
      top: 0,
      outline: 0,
      variants: [
        { props: { anchor: 'left' }, style: { left: 0 } },
        {
          props: { anchor: 'top' },
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: 'auto',
            maxHeight: '100%',
          },
        },
        { props: { anchor: 'right' }, style: { right: 0 } },
        {
          props: { anchor: 'bottom' },
          style: {
            top: 'auto',
            left: 0,
            bottom: 0,
            right: 0,
            height: 'auto',
            maxHeight: '100%',
          },
        },
        {
          props: ({ ownerState: r }) =>
            r.anchor === 'left' && r.variant !== 'temporary',
          style: { borderRight: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: r }) =>
            r.anchor === 'top' && r.variant !== 'temporary',
          style: { borderBottom: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: r }) =>
            r.anchor === 'right' && r.variant !== 'temporary',
          style: { borderLeft: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: r }) =>
            r.anchor === 'bottom' && r.variant !== 'temporary',
          style: { borderTop: `1px solid ${(e.vars || e).palette.divider}` },
        },
      ],
    })),
  ),
  Ty = { left: 'right', right: 'left', top: 'down', bottom: 'up' };
function sk(e) {
  return ['left', 'right'].includes(e);
}
function ak({ direction: e }, r) {
  return e === 'rtl' && sk(r) ? Ty[r] : r;
}
const lk = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiDrawer' }),
      a = ys(),
      u = fy(),
      c = {
        enter: a.transitions.duration.enteringScreen,
        exit: a.transitions.duration.leavingScreen,
      },
      {
        anchor: f = 'left',
        BackdropProps: h,
        children: m,
        className: g,
        elevation: v = 16,
        hideBackdrop: C = !1,
        ModalProps: { BackdropProps: k, ...w } = {},
        onClose: b,
        open: E = !1,
        PaperProps: R = {},
        SlideProps: N,
        TransitionComponent: P = tk,
        transitionDuration: I = c,
        variant: O = 'temporary',
        ..._
      } = s,
      z = S.useRef(!1);
    S.useEffect(() => {
      z.current = !0;
    }, []);
    const V = ak({ direction: u ? 'rtl' : 'ltr' }, f),
      x = { ...s, anchor: f, elevation: v, open: E, variant: O, ..._ },
      j = rk(x),
      Z = M.jsx(ik, {
        elevation: O === 'temporary' ? v : 0,
        square: !0,
        ...R,
        className: we(j.paper, R.className),
        ownerState: x,
        children: m,
      });
    if (O === 'permanent')
      return M.jsx(Hm, {
        className: we(j.root, j.docked, g),
        ownerState: x,
        ref: o,
        ..._,
        children: Z,
      });
    const Y = M.jsx(P, {
      in: E,
      direction: Ty[V],
      timeout: I,
      appear: z.current,
      ...N,
      children: Z,
    });
    return O === 'persistent'
      ? M.jsx(Hm, {
          className: we(j.root, j.docked, g),
          ownerState: x,
          ref: o,
          ..._,
          children: Y,
        })
      : M.jsx(ok, {
          BackdropProps: { ...h, ...k, transitionDuration: I },
          className: we(j.root, j.modal, g),
          open: E,
          ownerState: x,
          onClose: b,
          hideBackdrop: C,
          ref: o,
          ..._,
          ...w,
          children: Y,
        });
  }),
  uk = (e) => {
    const {
        classes: r,
        disableUnderline: o,
        startAdornment: s,
        endAdornment: a,
        size: u,
        hiddenLabel: c,
        multiline: f,
      } = e,
      h = {
        root: [
          'root',
          !o && 'underline',
          s && 'adornedStart',
          a && 'adornedEnd',
          u === 'small' && `size${ge(u)}`,
          c && 'hiddenLabel',
          f && 'multiline',
        ],
        input: ['input'],
      },
      m = Fe(h, sE, r);
    return { ...r, ...m };
  },
  ck = de(bl, {
    shouldForwardProp: (e) => pn(e) || e === 'classes',
    name: 'MuiFilledInput',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [...wl(e, r), !o.disableUnderline && r.underline];
    },
  })(
    He(({ theme: e }) => {
      const r = e.palette.mode === 'light',
        o = r ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)',
        s = r ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)',
        a = r ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)',
        u = r ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)';
      return {
        position: 'relative',
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create('background-color', {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        '&:hover': {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
          '@media (hover: none)': {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
          },
        },
        [`&.${qr.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
        },
        [`&.${qr.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : u,
        },
        variants: [
          {
            props: ({ ownerState: c }) => !c.disableUnderline,
            style: {
              '&::after': {
                left: 0,
                bottom: 0,
                content: '""',
                position: 'absolute',
                right: 0,
                transform: 'scaleX(0)',
                transition: e.transitions.create('transform', {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut,
                }),
                pointerEvents: 'none',
              },
              [`&.${qr.focused}:after`]: {
                transform: 'scaleX(1) translateX(0)',
              },
              [`&.${qr.error}`]: {
                '&::before, &::after': {
                  borderBottomColor: (e.vars || e).palette.error.main,
                },
              },
              '&::before': {
                borderBottom: `1px solid ${
                  e.vars
                    ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
                    : o
                }`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: 'absolute',
                right: 0,
                transition: e.transitions.create('border-bottom-color', {
                  duration: e.transitions.duration.shorter,
                }),
                pointerEvents: 'none',
              },
              [`&:hover:not(.${qr.disabled}, .${qr.error}):before`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
              },
              [`&.${qr.disabled}:before`]: { borderBottomStyle: 'dotted' },
            },
          },
          ...Object.entries(e.palette)
            .filter(dn())
            .map(([c]) => {
              var f;
              return {
                props: { disableUnderline: !1, color: c },
                style: {
                  '&::after': {
                    borderBottom: `2px solid ${
                      (f = (e.vars || e).palette[c]) == null ? void 0 : f.main
                    }`,
                  },
                },
              };
            }),
          {
            props: ({ ownerState: c }) => c.startAdornment,
            style: { paddingLeft: 12 },
          },
          {
            props: ({ ownerState: c }) => c.endAdornment,
            style: { paddingRight: 12 },
          },
          {
            props: ({ ownerState: c }) => c.multiline,
            style: { padding: '25px 12px 8px' },
          },
          {
            props: ({ ownerState: c, size: f }) => c.multiline && f === 'small',
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: c }) => c.multiline && c.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: c }) =>
              c.multiline && c.hiddenLabel && c.size === 'small',
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      };
    }),
  ),
  dk = de(El, { name: 'MuiFilledInput', slot: 'Input', overridesResolver: Cl })(
    He(({ theme: e }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!e.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow:
            e.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: e.palette.mode === 'light' ? null : '#fff',
          caretColor: e.palette.mode === 'light' ? null : '#fff',
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit',
        },
      }),
      ...(e.vars && {
        '&:-webkit-autofill': {
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit',
        },
        [e.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff',
          },
        },
      }),
      variants: [
        {
          props: { size: 'small' },
          style: { paddingTop: 21, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: r }) => r.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        {
          props: ({ ownerState: r }) => r.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: r }) => r.endAdornment,
          style: { paddingRight: 0 },
        },
        {
          props: ({ ownerState: r }) => r.hiddenLabel && r.size === 'small',
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: r }) => r.multiline,
          style: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      ],
    })),
  ),
  Wd = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiFilledInput' }),
      {
        disableUnderline: a = !1,
        components: u = {},
        componentsProps: c,
        fullWidth: f = !1,
        hiddenLabel: h,
        inputComponent: m = 'input',
        multiline: g = !1,
        slotProps: v,
        slots: C = {},
        type: k = 'text',
        ...w
      } = s,
      b = {
        ...s,
        disableUnderline: a,
        fullWidth: f,
        inputComponent: m,
        multiline: g,
        type: k,
      },
      E = uk(s),
      R = { root: { ownerState: b }, input: { ownerState: b } },
      N = v ?? c ? $t(R, v ?? c) : R,
      P = C.root ?? u.Root ?? ck,
      I = C.input ?? u.Input ?? dk;
    return M.jsx(Ud, {
      slots: { root: P, input: I },
      slotProps: N,
      fullWidth: f,
      inputComponent: m,
      multiline: g,
      ref: o,
      type: k,
      ...w,
      classes: E,
    });
  });
Wd.muiName = 'Input';
function fk(e) {
  return Me('MuiFormControl', e);
}
Ae('MuiFormControl', [
  'root',
  'marginNone',
  'marginNormal',
  'marginDense',
  'fullWidth',
  'disabled',
]);
const pk = (e) => {
    const { classes: r, margin: o, fullWidth: s } = e,
      a = {
        root: ['root', o !== 'none' && `margin${ge(o)}`, s && 'fullWidth'],
      };
    return Fe(a, fk, r);
  },
  hk = de('div', {
    name: 'MuiFormControl',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [r.root, r[`margin${ge(o.margin)}`], o.fullWidth && r.fullWidth];
    },
  })({
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top',
    variants: [
      {
        props: { margin: 'normal' },
        style: { marginTop: 16, marginBottom: 8 },
      },
      { props: { margin: 'dense' }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: '100%' } },
    ],
  }),
  mk = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiFormControl' }),
      {
        children: a,
        className: u,
        color: c = 'primary',
        component: f = 'div',
        disabled: h = !1,
        error: m = !1,
        focused: g,
        fullWidth: v = !1,
        hiddenLabel: C = !1,
        margin: k = 'none',
        required: w = !1,
        size: b = 'medium',
        variant: E = 'outlined',
        ...R
      } = s,
      N = {
        ...s,
        color: c,
        component: f,
        disabled: h,
        error: m,
        fullWidth: v,
        hiddenLabel: C,
        margin: k,
        required: w,
        size: b,
        variant: E,
      },
      P = pk(N),
      [I, O] = S.useState(() => {
        let Y = !1;
        return (
          a &&
            S.Children.forEach(a, (ne) => {
              if (!Ha(ne, ['Input', 'Select'])) return;
              const Q = Ha(ne, ['Select']) ? ne.props.input : ne;
              Q && tE(Q.props) && (Y = !0);
            }),
          Y
        );
      }),
      [_, z] = S.useState(() => {
        let Y = !1;
        return (
          a &&
            S.Children.forEach(a, (ne) => {
              Ha(ne, ['Input', 'Select']) &&
                (tl(ne.props, !0) || tl(ne.props.inputProps, !0)) &&
                (Y = !0);
            }),
          Y
        );
      }),
      [V, G] = S.useState(!1);
    h && V && G(!1);
    const x = g !== void 0 && !h ? g : V;
    let j;
    S.useRef(!1);
    const Z = S.useMemo(
      () => ({
        adornedStart: I,
        setAdornedStart: O,
        color: c,
        disabled: h,
        error: m,
        filled: _,
        focused: x,
        fullWidth: v,
        hiddenLabel: C,
        size: b,
        onBlur: () => {
          G(!1);
        },
        onEmpty: () => {
          z(!1);
        },
        onFilled: () => {
          z(!0);
        },
        onFocus: () => {
          G(!0);
        },
        registerEffect: j,
        required: w,
        variant: E,
      }),
      [I, c, h, m, _, x, v, C, j, w, b, E],
    );
    return M.jsx(jd.Provider, {
      value: Z,
      children: M.jsx(hk, {
        as: f,
        ownerState: N,
        className: we(P.root, u),
        ref: o,
        ...R,
        children: a,
      }),
    });
  });
function gk(e) {
  return Me('MuiFormHelperText', e);
}
const Vm = Ae('MuiFormHelperText', [
  'root',
  'error',
  'disabled',
  'sizeSmall',
  'sizeMedium',
  'contained',
  'focused',
  'filled',
  'required',
]);
var Km;
const yk = (e) => {
    const {
        classes: r,
        contained: o,
        size: s,
        disabled: a,
        error: u,
        filled: c,
        focused: f,
        required: h,
      } = e,
      m = {
        root: [
          'root',
          a && 'disabled',
          u && 'error',
          s && `size${ge(s)}`,
          o && 'contained',
          f && 'focused',
          c && 'filled',
          h && 'required',
        ],
      };
    return Fe(m, gk, r);
  },
  vk = de('p', {
    name: 'MuiFormHelperText',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        o.size && r[`size${ge(o.size)}`],
        o.contained && r.contained,
        o.filled && r.filled,
      ];
    },
  })(
    He(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.caption,
      textAlign: 'left',
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${Vm.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${Vm.error}`]: { color: (e.vars || e).palette.error.main },
      variants: [
        { props: { size: 'small' }, style: { marginTop: 4 } },
        {
          props: ({ ownerState: r }) => r.contained,
          style: { marginLeft: 14, marginRight: 14 },
        },
      ],
    })),
  ),
  xk = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiFormHelperText' }),
      {
        children: a,
        className: u,
        component: c = 'p',
        disabled: f,
        error: h,
        filled: m,
        focused: g,
        margin: v,
        required: C,
        variant: k,
        ...w
      } = s,
      b = Yo(),
      E = Xo({
        props: s,
        muiFormControl: b,
        states: [
          'variant',
          'size',
          'disabled',
          'error',
          'filled',
          'focused',
          'required',
        ],
      }),
      R = {
        ...s,
        component: c,
        contained: E.variant === 'filled' || E.variant === 'outlined',
        variant: E.variant,
        size: E.size,
        disabled: E.disabled,
        error: E.error,
        filled: E.filled,
        focused: E.focused,
        required: E.required,
      };
    delete R.ownerState;
    const N = yk(R);
    return M.jsx(vk, {
      as: c,
      className: we(N.root, u),
      ref: o,
      ...w,
      ownerState: R,
      children:
        a === ' '
          ? Km ||
            (Km = M.jsx('span', {
              className: 'notranslate',
              'aria-hidden': !0,
              children: '​',
            }))
          : a,
    });
  });
function Sk(e) {
  return Me('MuiFormLabel', e);
}
const Ji = Ae('MuiFormLabel', [
    'root',
    'colorSecondary',
    'focused',
    'disabled',
    'error',
    'filled',
    'required',
    'asterisk',
  ]),
  wk = (e) => {
    const {
        classes: r,
        color: o,
        focused: s,
        disabled: a,
        error: u,
        filled: c,
        required: f,
      } = e,
      h = {
        root: [
          'root',
          `color${ge(o)}`,
          a && 'disabled',
          u && 'error',
          c && 'filled',
          s && 'focused',
          f && 'required',
        ],
        asterisk: ['asterisk', u && 'error'],
      };
    return Fe(h, Sk, r);
  },
  Ck = de('label', {
    name: 'MuiFormLabel',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        o.color === 'secondary' && r.colorSecondary,
        o.filled && r.filled,
      ];
    },
  })(
    He(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.body1,
      lineHeight: '1.4375em',
      padding: 0,
      position: 'relative',
      variants: [
        ...Object.entries(e.palette)
          .filter(dn())
          .map(([r]) => ({
            props: { color: r },
            style: {
              [`&.${Ji.focused}`]: { color: (e.vars || e).palette[r].main },
            },
          })),
        {
          props: {},
          style: {
            [`&.${Ji.disabled}`]: {
              color: (e.vars || e).palette.text.disabled,
            },
            [`&.${Ji.error}`]: { color: (e.vars || e).palette.error.main },
          },
        },
      ],
    })),
  ),
  bk = de('span', {
    name: 'MuiFormLabel',
    slot: 'Asterisk',
    overridesResolver: (e, r) => r.asterisk,
  })(
    He(({ theme: e }) => ({
      [`&.${Ji.error}`]: { color: (e.vars || e).palette.error.main },
    })),
  ),
  Ek = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiFormLabel' }),
      {
        children: a,
        className: u,
        color: c,
        component: f = 'label',
        disabled: h,
        error: m,
        filled: g,
        focused: v,
        required: C,
        ...k
      } = s,
      w = Yo(),
      b = Xo({
        props: s,
        muiFormControl: w,
        states: ['color', 'required', 'focused', 'disabled', 'error', 'filled'],
      }),
      E = {
        ...s,
        color: b.color || 'primary',
        component: f,
        disabled: b.disabled,
        error: b.error,
        filled: b.filled,
        focused: b.focused,
        required: b.required,
      },
      R = wk(E);
    return M.jsxs(Ck, {
      as: f,
      ownerState: E,
      className: we(R.root, u),
      ref: o,
      ...k,
      children: [
        a,
        b.required &&
          M.jsxs(bk, {
            ownerState: E,
            'aria-hidden': !0,
            className: R.asterisk,
            children: [' ', '*'],
          }),
      ],
    });
  });
function td(e) {
  return `scale(${e}, ${e ** 2})`;
}
const kk = {
    entering: { opacity: 1, transform: td(1) },
    entered: { opacity: 1, transform: 'none' },
  },
  Ic =
    typeof navigator < 'u' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  nd = S.forwardRef(function (r, o) {
    const {
        addEndListener: s,
        appear: a = !0,
        children: u,
        easing: c,
        in: f,
        onEnter: h,
        onEntered: m,
        onEntering: g,
        onExit: v,
        onExited: C,
        onExiting: k,
        style: w,
        timeout: b = 'auto',
        TransitionComponent: E = Tn,
        ...R
      } = r,
      N = sy(),
      P = S.useRef(),
      I = ys(),
      O = S.useRef(null),
      _ = Ct(O, Qo(u), o),
      z = (Q) => (ee) => {
        if (Q) {
          const ie = O.current;
          ee === void 0 ? Q(ie) : Q(ie, ee);
        }
      },
      V = z(g),
      G = z((Q, ee) => {
        Bd(Q);
        const {
          duration: ie,
          delay: U,
          easing: K,
        } = Wo({ style: w, timeout: b, easing: c }, { mode: 'enter' });
        let re;
        b === 'auto'
          ? ((re = I.transitions.getAutoHeightDuration(Q.clientHeight)),
            (P.current = re))
          : (re = ie),
          (Q.style.transition = [
            I.transitions.create('opacity', { duration: re, delay: U }),
            I.transitions.create('transform', {
              duration: Ic ? re : re * 0.666,
              delay: U,
              easing: K,
            }),
          ].join(',')),
          h && h(Q, ee);
      }),
      x = z(m),
      j = z(k),
      Z = z((Q) => {
        const {
          duration: ee,
          delay: ie,
          easing: U,
        } = Wo({ style: w, timeout: b, easing: c }, { mode: 'exit' });
        let K;
        b === 'auto'
          ? ((K = I.transitions.getAutoHeightDuration(Q.clientHeight)),
            (P.current = K))
          : (K = ee),
          (Q.style.transition = [
            I.transitions.create('opacity', { duration: K, delay: ie }),
            I.transitions.create('transform', {
              duration: Ic ? K : K * 0.666,
              delay: Ic ? ie : ie || K * 0.333,
              easing: U,
            }),
          ].join(',')),
          (Q.style.opacity = 0),
          (Q.style.transform = td(0.75)),
          v && v(Q);
      }),
      Y = z(C),
      ne = (Q) => {
        b === 'auto' && N.start(P.current || 0, Q), s && s(O.current, Q);
      };
    return M.jsx(E, {
      appear: a,
      in: f,
      nodeRef: O,
      onEnter: G,
      onEntered: x,
      onEntering: V,
      onExit: Z,
      onExited: Y,
      onExiting: j,
      addEndListener: ne,
      timeout: b === 'auto' ? null : b,
      ...R,
      children: (Q, { ownerState: ee, ...ie }) =>
        S.cloneElement(u, {
          style: {
            opacity: 0,
            transform: td(0.75),
            visibility: Q === 'exited' && !f ? 'hidden' : void 0,
            ...kk[Q],
            ...w,
            ...u.props.style,
          },
          ref: _,
          ...ie,
        }),
    });
  });
nd && (nd.muiSupportAuto = !0);
const Rk = (e) => {
    const { classes: r, disableUnderline: o } = e,
      a = Fe({ root: ['root', !o && 'underline'], input: ['input'] }, oE, r);
    return { ...r, ...a };
  },
  Pk = de(bl, {
    shouldForwardProp: (e) => pn(e) || e === 'classes',
    name: 'MuiInput',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [...wl(e, r), !o.disableUnderline && r.underline];
    },
  })(
    He(({ theme: e }) => {
      let o =
        e.palette.mode === 'light'
          ? 'rgba(0, 0, 0, 0.42)'
          : 'rgba(255, 255, 255, 0.7)';
      return (
        e.vars &&
          (o = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
        {
          position: 'relative',
          variants: [
            {
              props: ({ ownerState: s }) => s.formControl,
              style: { 'label + &': { marginTop: 16 } },
            },
            {
              props: ({ ownerState: s }) => !s.disableUnderline,
              style: {
                '&::after': {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  transform: 'scaleX(0)',
                  transition: e.transitions.create('transform', {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                  }),
                  pointerEvents: 'none',
                },
                [`&.${Wi.focused}:after`]: {
                  transform: 'scaleX(1) translateX(0)',
                },
                [`&.${Wi.error}`]: {
                  '&::before, &::after': {
                    borderBottomColor: (e.vars || e).palette.error.main,
                  },
                },
                '&::before': {
                  borderBottom: `1px solid ${o}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: 'absolute',
                  right: 0,
                  transition: e.transitions.create('border-bottom-color', {
                    duration: e.transitions.duration.shorter,
                  }),
                  pointerEvents: 'none',
                },
                [`&:hover:not(.${Wi.disabled}, .${Wi.error}):before`]: {
                  borderBottom: `2px solid ${
                    (e.vars || e).palette.text.primary
                  }`,
                  '@media (hover: none)': { borderBottom: `1px solid ${o}` },
                },
                [`&.${Wi.disabled}:before`]: { borderBottomStyle: 'dotted' },
              },
            },
            ...Object.entries(e.palette)
              .filter(dn())
              .map(([s]) => ({
                props: { color: s, disableUnderline: !1 },
                style: {
                  '&::after': {
                    borderBottom: `2px solid ${(e.vars || e).palette[s].main}`,
                  },
                },
              })),
          ],
        }
      );
    }),
  ),
  Tk = de(El, { name: 'MuiInput', slot: 'Input', overridesResolver: Cl })({}),
  Hd = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiInput' }),
      {
        disableUnderline: a = !1,
        components: u = {},
        componentsProps: c,
        fullWidth: f = !1,
        inputComponent: h = 'input',
        multiline: m = !1,
        slotProps: g,
        slots: v = {},
        type: C = 'text',
        ...k
      } = s,
      w = Rk(s),
      E = { root: { ownerState: { disableUnderline: a } } },
      R = g ?? c ? $t(g ?? c, E) : E,
      N = v.root ?? u.Root ?? Pk,
      P = v.input ?? u.Input ?? Tk;
    return M.jsx(Ud, {
      slots: { root: N, input: P },
      slotProps: R,
      fullWidth: f,
      inputComponent: h,
      multiline: m,
      ref: o,
      type: C,
      ...k,
      classes: w,
    });
  });
Hd.muiName = 'Input';
function Ik(e) {
  return Me('MuiInputLabel', e);
}
Ae('MuiInputLabel', [
  'root',
  'focused',
  'disabled',
  'error',
  'required',
  'asterisk',
  'formControl',
  'sizeSmall',
  'shrink',
  'animated',
  'standard',
  'filled',
  'outlined',
]);
const Ok = (e) => {
    const {
        classes: r,
        formControl: o,
        size: s,
        shrink: a,
        disableAnimation: u,
        variant: c,
        required: f,
      } = e,
      h = {
        root: [
          'root',
          o && 'formControl',
          !u && 'animated',
          a && 'shrink',
          s && s !== 'normal' && `size${ge(s)}`,
          c,
        ],
        asterisk: [f && 'asterisk'],
      },
      m = Fe(h, Ik, r);
    return { ...r, ...m };
  },
  Nk = de(Ek, {
    shouldForwardProp: (e) => pn(e) || e === 'classes',
    name: 'MuiInputLabel',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        { [`& .${Ji.asterisk}`]: r.asterisk },
        r.root,
        o.formControl && r.formControl,
        o.size === 'small' && r.sizeSmall,
        o.shrink && r.shrink,
        !o.disableAnimation && r.animated,
        o.focused && r.focused,
        r[o.variant],
      ];
    },
  })(
    He(({ theme: e }) => ({
      display: 'block',
      transformOrigin: 'top left',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
      variants: [
        {
          props: ({ ownerState: r }) => r.formControl,
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            transform: 'translate(0, 20px) scale(1)',
          },
        },
        {
          props: { size: 'small' },
          style: { transform: 'translate(0, 17px) scale(1)' },
        },
        {
          props: ({ ownerState: r }) => r.shrink,
          style: {
            transform: 'translate(0, -1.5px) scale(0.75)',
            transformOrigin: 'top left',
            maxWidth: '133%',
          },
        },
        {
          props: ({ ownerState: r }) => !r.disableAnimation,
          style: {
            transition: e.transitions.create(
              ['color', 'transform', 'max-width'],
              {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut,
              },
            ),
          },
        },
        {
          props: { variant: 'filled' },
          style: {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(12px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)',
          },
        },
        {
          props: { variant: 'filled', size: 'small' },
          style: { transform: 'translate(12px, 13px) scale(1)' },
        },
        {
          props: ({ variant: r, ownerState: o }) => r === 'filled' && o.shrink,
          style: {
            userSelect: 'none',
            pointerEvents: 'auto',
            transform: 'translate(12px, 7px) scale(0.75)',
            maxWidth: 'calc(133% - 24px)',
          },
        },
        {
          props: ({ variant: r, ownerState: o, size: s }) =>
            r === 'filled' && o.shrink && s === 'small',
          style: { transform: 'translate(12px, 4px) scale(0.75)' },
        },
        {
          props: { variant: 'outlined' },
          style: {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(14px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)',
          },
        },
        {
          props: { variant: 'outlined', size: 'small' },
          style: { transform: 'translate(14px, 9px) scale(1)' },
        },
        {
          props: ({ variant: r, ownerState: o }) =>
            r === 'outlined' && o.shrink,
          style: {
            userSelect: 'none',
            pointerEvents: 'auto',
            maxWidth: 'calc(133% - 32px)',
            transform: 'translate(14px, -9px) scale(0.75)',
          },
        },
      ],
    })),
  ),
  Ak = S.forwardRef(function (r, o) {
    const s = Be({ name: 'MuiInputLabel', props: r }),
      {
        disableAnimation: a = !1,
        margin: u,
        shrink: c,
        variant: f,
        className: h,
        ...m
      } = s,
      g = Yo();
    let v = c;
    typeof v > 'u' && g && (v = g.filled || g.focused || g.adornedStart);
    const C = Xo({
        props: s,
        muiFormControl: g,
        states: ['size', 'variant', 'required', 'focused'],
      }),
      k = {
        ...s,
        disableAnimation: a,
        formControl: g,
        shrink: v,
        size: C.size,
        variant: C.variant,
        required: C.required,
        focused: C.focused,
      },
      w = Ok(k);
    return M.jsx(Nk, {
      'data-shrink': v,
      ref: o,
      className: we(w.root, h),
      ...m,
      ownerState: k,
      classes: w,
    });
  }),
  Zr = S.createContext({});
function Lk(e) {
  return Me('MuiList', e);
}
Ae('MuiList', ['root', 'padding', 'dense', 'subheader']);
const $k = (e) => {
    const { classes: r, disablePadding: o, dense: s, subheader: a } = e;
    return Fe(
      { root: ['root', !o && 'padding', s && 'dense', a && 'subheader'] },
      Lk,
      r,
    );
  },
  Mk = de('ul', {
    name: 'MuiList',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        !o.disablePadding && r.padding,
        o.dense && r.dense,
        o.subheader && r.subheader,
      ];
    },
  })({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    variants: [
      {
        props: ({ ownerState: e }) => !e.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: e }) => e.subheader, style: { paddingTop: 0 } },
    ],
  }),
  rd = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiList' }),
      {
        children: a,
        className: u,
        component: c = 'ul',
        dense: f = !1,
        disablePadding: h = !1,
        subheader: m,
        ...g
      } = s,
      v = S.useMemo(() => ({ dense: f }), [f]),
      C = { ...s, component: c, dense: f, disablePadding: h },
      k = $k(C);
    return M.jsx(Zr.Provider, {
      value: v,
      children: M.jsxs(Mk, {
        as: c,
        className: we(k.root, u),
        ref: o,
        ownerState: C,
        ...g,
        children: [m, a],
      }),
    });
  });
function _k(e) {
  return Me('MuiListItem', e);
}
Ae('MuiListItem', [
  'root',
  'container',
  'dense',
  'alignItemsFlexStart',
  'divider',
  'gutters',
  'padding',
  'secondaryAction',
]);
const zk = Ae('MuiListItemButton', [
  'root',
  'focusVisible',
  'dense',
  'alignItemsFlexStart',
  'disabled',
  'divider',
  'gutters',
  'selected',
]);
function Fk(e) {
  return Me('MuiListItemSecondaryAction', e);
}
Ae('MuiListItemSecondaryAction', ['root', 'disableGutters']);
const Bk = (e) => {
    const { disableGutters: r, classes: o } = e;
    return Fe({ root: ['root', r && 'disableGutters'] }, Fk, o);
  },
  Dk = de('div', {
    name: 'MuiListItemSecondaryAction',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [r.root, o.disableGutters && r.disableGutters];
    },
  })({
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: 'translateY(-50%)',
    variants: [
      { props: ({ ownerState: e }) => e.disableGutters, style: { right: 0 } },
    ],
  }),
  Iy = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiListItemSecondaryAction' }),
      { className: a, ...u } = s,
      c = S.useContext(Zr),
      f = { ...s, disableGutters: c.disableGutters },
      h = Bk(f);
    return M.jsx(Dk, { className: we(h.root, a), ownerState: f, ref: o, ...u });
  });
Iy.muiName = 'ListItemSecondaryAction';
const jk = (e, r) => {
    const { ownerState: o } = e;
    return [
      r.root,
      o.dense && r.dense,
      o.alignItems === 'flex-start' && r.alignItemsFlexStart,
      o.divider && r.divider,
      !o.disableGutters && r.gutters,
      !o.disablePadding && r.padding,
      o.hasSecondaryAction && r.secondaryAction,
    ];
  },
  Uk = (e) => {
    const {
      alignItems: r,
      classes: o,
      dense: s,
      disableGutters: a,
      disablePadding: u,
      divider: c,
      hasSecondaryAction: f,
    } = e;
    return Fe(
      {
        root: [
          'root',
          s && 'dense',
          !a && 'gutters',
          !u && 'padding',
          c && 'divider',
          r === 'flex-start' && 'alignItemsFlexStart',
          f && 'secondaryAction',
        ],
        container: ['container'],
      },
      _k,
      o,
    );
  },
  Wk = de('div', { name: 'MuiListItem', slot: 'Root', overridesResolver: jk })(
    He(({ theme: e }) => ({
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      variants: [
        {
          props: ({ ownerState: r }) => !r.disablePadding,
          style: { paddingTop: 8, paddingBottom: 8 },
        },
        {
          props: ({ ownerState: r }) => !r.disablePadding && r.dense,
          style: { paddingTop: 4, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: r }) => !r.disablePadding && !r.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: r }) =>
            !r.disablePadding && !!r.secondaryAction,
          style: { paddingRight: 48 },
        },
        {
          props: ({ ownerState: r }) => !!r.secondaryAction,
          style: { [`& > .${zk.root}`]: { paddingRight: 48 } },
        },
        {
          props: { alignItems: 'flex-start' },
          style: { alignItems: 'flex-start' },
        },
        {
          props: ({ ownerState: r }) => r.divider,
          style: {
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
            backgroundClip: 'padding-box',
          },
        },
        {
          props: ({ ownerState: r }) => r.button,
          style: {
            transition: e.transitions.create('background-color', {
              duration: e.transitions.duration.shortest,
            }),
            '&:hover': {
              textDecoration: 'none',
              backgroundColor: (e.vars || e).palette.action.hover,
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.hasSecondaryAction,
          style: { paddingRight: 48 },
        },
      ],
    })),
  ),
  Hk = de('li', {
    name: 'MuiListItem',
    slot: 'Container',
    overridesResolver: (e, r) => r.container,
  })({ position: 'relative' }),
  qm = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiListItem' }),
      {
        alignItems: a = 'center',
        children: u,
        className: c,
        component: f,
        components: h = {},
        componentsProps: m = {},
        ContainerComponent: g = 'li',
        ContainerProps: { className: v, ...C } = {},
        dense: k = !1,
        disableGutters: w = !1,
        disablePadding: b = !1,
        divider: E = !1,
        secondaryAction: R,
        slotProps: N = {},
        slots: P = {},
        ...I
      } = s,
      O = S.useContext(Zr),
      _ = S.useMemo(
        () => ({ dense: k || O.dense || !1, alignItems: a, disableGutters: w }),
        [a, O.dense, k, w],
      ),
      z = S.useRef(null),
      V = S.Children.toArray(u),
      G = V.length && Ha(V[V.length - 1], ['ListItemSecondaryAction']),
      x = {
        ...s,
        alignItems: a,
        dense: _.dense,
        disableGutters: w,
        disablePadding: b,
        divider: E,
        hasSecondaryAction: G,
      },
      j = Uk(x),
      Z = Ct(z, o),
      Y = P.root || h.Root || Wk,
      ne = N.root || m.root || {},
      Q = { className: we(j.root, ne.className, c), ...I };
    let ee = f || 'li';
    return G
      ? ((ee = !Q.component && !f ? 'div' : ee),
        g === 'li' &&
          (ee === 'li'
            ? (ee = 'div')
            : Q.component === 'li' && (Q.component = 'div')),
        M.jsx(Zr.Provider, {
          value: _,
          children: M.jsxs(Hk, {
            as: g,
            className: we(j.container, v),
            ref: Z,
            ownerState: x,
            ...C,
            children: [
              M.jsx(Y, {
                ...ne,
                ...(!as(Y) && {
                  as: ee,
                  ownerState: { ...x, ...ne.ownerState },
                }),
                ...Q,
                children: V,
              }),
              V.pop(),
            ],
          }),
        }))
      : M.jsx(Zr.Provider, {
          value: _,
          children: M.jsxs(Y, {
            ...ne,
            as: ee,
            ref: Z,
            ...(!as(Y) && { ownerState: { ...x, ...ne.ownerState } }),
            ...Q,
            children: [V, R && M.jsx(Iy, { children: R })],
          }),
        });
  });
function Vk(e) {
  return Me('MuiListItemIcon', e);
}
Ae('MuiListItemIcon', ['root', 'alignItemsFlexStart']);
const Kk = (e) => {
    const { alignItems: r, classes: o } = e;
    return Fe(
      { root: ['root', r === 'flex-start' && 'alignItemsFlexStart'] },
      Vk,
      o,
    );
  },
  qk = de('div', {
    name: 'MuiListItemIcon',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [r.root, o.alignItems === 'flex-start' && r.alignItemsFlexStart];
    },
  })(
    He(({ theme: e }) => ({
      minWidth: 56,
      color: (e.vars || e).palette.action.active,
      flexShrink: 0,
      display: 'inline-flex',
      variants: [
        { props: { alignItems: 'flex-start' }, style: { marginTop: 8 } },
      ],
    })),
  ),
  Gk = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiListItemIcon' }),
      { className: a, ...u } = s,
      c = S.useContext(Zr),
      f = { ...s, alignItems: c.alignItems },
      h = Kk(f);
    return M.jsx(qk, { className: we(h.root, a), ownerState: f, ref: o, ...u });
  });
function Qk(e) {
  return Me('MuiListItemText', e);
}
const _a = Ae('MuiListItemText', [
    'root',
    'multiline',
    'dense',
    'inset',
    'primary',
    'secondary',
  ]),
  Xk = (e) => {
    const { classes: r, inset: o, primary: s, secondary: a, dense: u } = e;
    return Fe(
      {
        root: ['root', o && 'inset', u && 'dense', s && a && 'multiline'],
        primary: ['primary'],
        secondary: ['secondary'],
      },
      Qk,
      r,
    );
  },
  Yk = de('div', {
    name: 'MuiListItemText',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        { [`& .${_a.primary}`]: r.primary },
        { [`& .${_a.secondary}`]: r.secondary },
        r.root,
        o.inset && r.inset,
        o.primary && o.secondary && r.multiline,
        o.dense && r.dense,
      ];
    },
  })({
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
    [`.${Mm.root}:where(& .${_a.primary})`]: { display: 'block' },
    [`.${Mm.root}:where(& .${_a.secondary})`]: { display: 'block' },
    variants: [
      {
        props: ({ ownerState: e }) => e.primary && e.secondary,
        style: { marginTop: 6, marginBottom: 6 },
      },
      { props: ({ ownerState: e }) => e.inset, style: { paddingLeft: 56 } },
    ],
  }),
  Gm = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiListItemText' }),
      {
        children: a,
        className: u,
        disableTypography: c = !1,
        inset: f = !1,
        primary: h,
        primaryTypographyProps: m,
        secondary: g,
        secondaryTypographyProps: v,
        slots: C = {},
        slotProps: k = {},
        ...w
      } = s,
      { dense: b } = S.useContext(Zr);
    let E = h ?? a,
      R = g;
    const N = {
        ...s,
        disableTypography: c,
        inset: f,
        primary: !!E,
        secondary: !!R,
        dense: b,
      },
      P = Xk(N),
      I = { slots: C, slotProps: { primary: m, secondary: v, ...k } },
      [O, _] = zt('primary', {
        className: P.primary,
        elementType: cn,
        externalForwardedProps: I,
        ownerState: N,
      }),
      [z, V] = zt('secondary', {
        className: P.secondary,
        elementType: cn,
        externalForwardedProps: I,
        ownerState: N,
      });
    return (
      E != null &&
        E.type !== cn &&
        !c &&
        (E = M.jsx(O, {
          variant: b ? 'body2' : 'body1',
          component: _ != null && _.variant ? void 0 : 'span',
          ..._,
          children: E,
        })),
      R != null &&
        R.type !== cn &&
        !c &&
        (R = M.jsx(z, {
          variant: 'body2',
          color: 'textSecondary',
          ...V,
          children: R,
        })),
      M.jsxs(Yk, {
        className: we(P.root, u),
        ownerState: N,
        ref: o,
        ...w,
        children: [E, R],
      })
    );
  });
function Oc(e, r, o) {
  return e === r
    ? e.firstChild
    : r && r.nextElementSibling
    ? r.nextElementSibling
    : o
    ? null
    : e.firstChild;
}
function Qm(e, r, o) {
  return e === r
    ? o
      ? e.firstChild
      : e.lastChild
    : r && r.previousElementSibling
    ? r.previousElementSibling
    : o
    ? null
    : e.lastChild;
}
function Oy(e, r) {
  if (r === void 0) return !0;
  let o = e.innerText;
  return (
    o === void 0 && (o = e.textContent),
    (o = o.trim().toLowerCase()),
    o.length === 0
      ? !1
      : r.repeating
      ? o[0] === r.keys[0]
      : o.startsWith(r.keys.join(''))
  );
}
function Hi(e, r, o, s, a, u) {
  let c = !1,
    f = a(e, r, r ? o : !1);
  for (; f; ) {
    if (f === e.firstChild) {
      if (c) return !1;
      c = !0;
    }
    const h = s ? !1 : f.disabled || f.getAttribute('aria-disabled') === 'true';
    if (!f.hasAttribute('tabindex') || !Oy(f, u) || h) f = a(e, f, o);
    else return f.focus(), !0;
  }
  return !1;
}
const Jk = S.forwardRef(function (r, o) {
  const {
      actions: s,
      autoFocus: a = !1,
      autoFocusItem: u = !1,
      children: c,
      className: f,
      disabledItemsFocusable: h = !1,
      disableListWrap: m = !1,
      onKeyDown: g,
      variant: v = 'selectedMenu',
      ...C
    } = r,
    k = S.useRef(null),
    w = S.useRef({
      keys: [],
      repeating: !0,
      previousKeyMatched: !0,
      lastTime: null,
    });
  no(() => {
    a && k.current.focus();
  }, [a]),
    S.useImperativeHandle(
      s,
      () => ({
        adjustStyleForScrollbar: (P, { direction: I }) => {
          const O = !k.current.style.width;
          if (P.clientHeight < k.current.clientHeight && O) {
            const _ = `${ay(Rn(P))}px`;
            (k.current.style[I === 'rtl' ? 'paddingLeft' : 'paddingRight'] = _),
              (k.current.style.width = `calc(100% + ${_})`);
          }
          return k.current;
        },
      }),
      [],
    );
  const b = (P) => {
      const I = k.current,
        O = P.key;
      if (P.ctrlKey || P.metaKey || P.altKey) {
        g && g(P);
        return;
      }
      const z = kn(I).activeElement;
      if (O === 'ArrowDown') P.preventDefault(), Hi(I, z, m, h, Oc);
      else if (O === 'ArrowUp') P.preventDefault(), Hi(I, z, m, h, Qm);
      else if (O === 'Home') P.preventDefault(), Hi(I, null, m, h, Oc);
      else if (O === 'End') P.preventDefault(), Hi(I, null, m, h, Qm);
      else if (O.length === 1) {
        const V = w.current,
          G = O.toLowerCase(),
          x = performance.now();
        V.keys.length > 0 &&
          (x - V.lastTime > 500
            ? ((V.keys = []), (V.repeating = !0), (V.previousKeyMatched = !0))
            : V.repeating && G !== V.keys[0] && (V.repeating = !1)),
          (V.lastTime = x),
          V.keys.push(G);
        const j = z && !V.repeating && Oy(z, V);
        V.previousKeyMatched && (j || Hi(I, z, !1, h, Oc, V))
          ? P.preventDefault()
          : (V.previousKeyMatched = !1);
      }
      g && g(P);
    },
    E = Ct(k, o);
  let R = -1;
  S.Children.forEach(c, (P, I) => {
    if (!S.isValidElement(P)) {
      R === I && ((R += 1), R >= c.length && (R = -1));
      return;
    }
    P.props.disabled ||
      (((v === 'selectedMenu' && P.props.selected) || R === -1) && (R = I)),
      R === I &&
        (P.props.disabled ||
          P.props.muiSkipListHighlight ||
          P.type.muiSkipListHighlight) &&
        ((R += 1), R >= c.length && (R = -1));
  });
  const N = S.Children.map(c, (P, I) => {
    if (I === R) {
      const O = {};
      return (
        u && (O.autoFocus = !0),
        P.props.tabIndex === void 0 && v === 'selectedMenu' && (O.tabIndex = 0),
        S.cloneElement(P, O)
      );
    }
    return P;
  });
  return M.jsx(rd, {
    role: 'menu',
    ref: E,
    className: f,
    onKeyDown: b,
    tabIndex: a ? 0 : -1,
    ...C,
    children: N,
  });
});
function Zk(e) {
  return Me('MuiPopover', e);
}
Ae('MuiPopover', ['root', 'paper']);
function Xm(e, r) {
  let o = 0;
  return (
    typeof r == 'number'
      ? (o = r)
      : r === 'center'
      ? (o = e.height / 2)
      : r === 'bottom' && (o = e.height),
    o
  );
}
function Ym(e, r) {
  let o = 0;
  return (
    typeof r == 'number'
      ? (o = r)
      : r === 'center'
      ? (o = e.width / 2)
      : r === 'right' && (o = e.width),
    o
  );
}
function Jm(e) {
  return [e.horizontal, e.vertical]
    .map((r) => (typeof r == 'number' ? `${r}px` : r))
    .join(' ');
}
function Nc(e) {
  return typeof e == 'function' ? e() : e;
}
const e2 = (e) => {
    const { classes: r } = e;
    return Fe({ root: ['root'], paper: ['paper'] }, Zk, r);
  },
  t2 = de(Ry, {
    name: 'MuiPopover',
    slot: 'Root',
    overridesResolver: (e, r) => r.root,
  })({}),
  Ny = de(Dd, {
    name: 'MuiPopover',
    slot: 'Paper',
    overridesResolver: (e, r) => r.paper,
  })({
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    outline: 0,
  }),
  n2 = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiPopover' }),
      {
        action: a,
        anchorEl: u,
        anchorOrigin: c = { vertical: 'top', horizontal: 'left' },
        anchorPosition: f,
        anchorReference: h = 'anchorEl',
        children: m,
        className: g,
        container: v,
        elevation: C = 8,
        marginThreshold: k = 16,
        open: w,
        PaperProps: b = {},
        slots: E = {},
        slotProps: R = {},
        transformOrigin: N = { vertical: 'top', horizontal: 'left' },
        TransitionComponent: P = nd,
        transitionDuration: I = 'auto',
        TransitionProps: { onEntering: O, ..._ } = {},
        disableScrollLock: z = !1,
        ...V
      } = s,
      G = (R == null ? void 0 : R.paper) ?? b,
      x = S.useRef(),
      j = {
        ...s,
        anchorOrigin: c,
        anchorReference: h,
        elevation: C,
        marginThreshold: k,
        externalPaperSlotProps: G,
        transformOrigin: N,
        TransitionComponent: P,
        transitionDuration: I,
        TransitionProps: _,
      },
      Z = e2(j),
      Y = S.useCallback(() => {
        if (h === 'anchorPosition') return f;
        const xe = Nc(u),
          Oe = (
            xe && xe.nodeType === 1 ? xe : kn(x.current).body
          ).getBoundingClientRect();
        return {
          top: Oe.top + Xm(Oe, c.vertical),
          left: Oe.left + Ym(Oe, c.horizontal),
        };
      }, [u, c.horizontal, c.vertical, f, h]),
      ne = S.useCallback(
        (xe) => ({
          vertical: Xm(xe, N.vertical),
          horizontal: Ym(xe, N.horizontal),
        }),
        [N.horizontal, N.vertical],
      ),
      Q = S.useCallback(
        (xe) => {
          const Le = { width: xe.offsetWidth, height: xe.offsetHeight },
            Oe = ne(Le);
          if (h === 'none')
            return { top: null, left: null, transformOrigin: Jm(Oe) };
          const Xe = Y();
          let Te = Xe.top - Oe.vertical,
            Ve = Xe.left - Oe.horizontal;
          const Pt = Te + Le.height,
            gt = Ve + Le.width,
            at = Rn(Nc(u)),
            Ft = at.innerHeight - k,
            ft = at.innerWidth - k;
          if (k !== null && Te < k) {
            const Ge = Te - k;
            (Te -= Ge), (Oe.vertical += Ge);
          } else if (k !== null && Pt > Ft) {
            const Ge = Pt - Ft;
            (Te -= Ge), (Oe.vertical += Ge);
          }
          if (k !== null && Ve < k) {
            const Ge = Ve - k;
            (Ve -= Ge), (Oe.horizontal += Ge);
          } else if (gt > ft) {
            const Ge = gt - ft;
            (Ve -= Ge), (Oe.horizontal += Ge);
          }
          return {
            top: `${Math.round(Te)}px`,
            left: `${Math.round(Ve)}px`,
            transformOrigin: Jm(Oe),
          };
        },
        [u, h, Y, ne, k],
      ),
      [ee, ie] = S.useState(w),
      U = S.useCallback(() => {
        const xe = x.current;
        if (!xe) return;
        const Le = Q(xe);
        Le.top !== null && xe.style.setProperty('top', Le.top),
          Le.left !== null && (xe.style.left = Le.left),
          (xe.style.transformOrigin = Le.transformOrigin),
          ie(!0);
      }, [Q]);
    S.useEffect(
      () => (
        z && window.addEventListener('scroll', U),
        () => window.removeEventListener('scroll', U)
      ),
      [u, z, U],
    );
    const K = (xe, Le) => {
        O && O(xe, Le), U();
      },
      re = () => {
        ie(!1);
      };
    S.useEffect(() => {
      w && U();
    }),
      S.useImperativeHandle(
        a,
        () =>
          w
            ? {
                updatePosition: () => {
                  U();
                },
              }
            : null,
        [w, U],
      ),
      S.useEffect(() => {
        if (!w) return;
        const xe = Ld(() => {
            U();
          }),
          Le = Rn(u);
        return (
          Le.addEventListener('resize', xe),
          () => {
            xe.clear(), Le.removeEventListener('resize', xe);
          }
        );
      }, [u, w, U]);
    let L = I;
    I === 'auto' && !P.muiSupportAuto && (L = void 0);
    const q = v || (u ? kn(Nc(u)).body : void 0),
      ae = { slots: E, slotProps: { ...R, paper: G } },
      [ue, pe] = zt('paper', {
        elementType: Ny,
        externalForwardedProps: ae,
        additionalProps: {
          elevation: C,
          className: we(Z.paper, G == null ? void 0 : G.className),
          style: ee ? G.style : { ...G.style, opacity: 0 },
        },
        ownerState: j,
      }),
      [Ce, { slotProps: ke, ...Re }] = zt('root', {
        elementType: t2,
        externalForwardedProps: ae,
        additionalProps: {
          slotProps: { backdrop: { invisible: !0 } },
          container: q,
          open: w,
        },
        ownerState: j,
        className: we(Z.root, g),
      }),
      be = Ct(x, pe.ref);
    return M.jsx(Ce, {
      ...Re,
      ...(!as(Ce) && { slotProps: ke, disableScrollLock: z }),
      ...V,
      ref: o,
      children: M.jsx(P, {
        appear: !0,
        in: w,
        onEntering: K,
        onExited: re,
        timeout: L,
        ..._,
        children: M.jsx(ue, { ...pe, ref: be, children: m }),
      }),
    });
  });
function r2(e) {
  return Me('MuiMenu', e);
}
Ae('MuiMenu', ['root', 'paper', 'list']);
const o2 = { vertical: 'top', horizontal: 'right' },
  i2 = { vertical: 'top', horizontal: 'left' },
  s2 = (e) => {
    const { classes: r } = e;
    return Fe({ root: ['root'], paper: ['paper'], list: ['list'] }, r2, r);
  },
  a2 = de(n2, {
    shouldForwardProp: (e) => pn(e) || e === 'classes',
    name: 'MuiMenu',
    slot: 'Root',
    overridesResolver: (e, r) => r.root,
  })({}),
  l2 = de(Ny, {
    name: 'MuiMenu',
    slot: 'Paper',
    overridesResolver: (e, r) => r.paper,
  })({ maxHeight: 'calc(100% - 96px)', WebkitOverflowScrolling: 'touch' }),
  u2 = de(Jk, {
    name: 'MuiMenu',
    slot: 'List',
    overridesResolver: (e, r) => r.list,
  })({ outline: 0 }),
  c2 = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiMenu' }),
      {
        autoFocus: a = !0,
        children: u,
        className: c,
        disableAutoFocusItem: f = !1,
        MenuListProps: h = {},
        onClose: m,
        open: g,
        PaperProps: v = {},
        PopoverClasses: C,
        transitionDuration: k = 'auto',
        TransitionProps: { onEntering: w, ...b } = {},
        variant: E = 'selectedMenu',
        slots: R = {},
        slotProps: N = {},
        ...P
      } = s,
      I = fy(),
      O = {
        ...s,
        autoFocus: a,
        disableAutoFocusItem: f,
        MenuListProps: h,
        onEntering: w,
        PaperProps: v,
        transitionDuration: k,
        TransitionProps: b,
        variant: E,
      },
      _ = s2(O),
      z = a && !f && g,
      V = S.useRef(null),
      G = (ee, ie) => {
        V.current &&
          V.current.adjustStyleForScrollbar(ee, {
            direction: I ? 'rtl' : 'ltr',
          }),
          w && w(ee, ie);
      },
      x = (ee) => {
        ee.key === 'Tab' && (ee.preventDefault(), m && m(ee, 'tabKeyDown'));
      };
    let j = -1;
    S.Children.map(u, (ee, ie) => {
      S.isValidElement(ee) &&
        (ee.props.disabled ||
          (((E === 'selectedMenu' && ee.props.selected) || j === -1) &&
            (j = ie)));
    });
    const Z = R.paper ?? l2,
      Y = N.paper ?? v,
      ne = wm({
        elementType: R.root,
        externalSlotProps: N.root,
        ownerState: O,
        className: [_.root, c],
      }),
      Q = wm({
        elementType: Z,
        externalSlotProps: Y,
        ownerState: O,
        className: _.paper,
      });
    return M.jsx(a2, {
      onClose: m,
      anchorOrigin: { vertical: 'bottom', horizontal: I ? 'right' : 'left' },
      transformOrigin: I ? o2 : i2,
      slots: { paper: Z, root: R.root },
      slotProps: { root: ne, paper: Q },
      open: g,
      ref: o,
      transitionDuration: k,
      TransitionProps: { onEntering: G, ...b },
      ownerState: O,
      ...P,
      classes: C,
      children: M.jsx(u2, {
        onKeyDown: x,
        actions: V,
        autoFocus: a && (j === -1 || f),
        autoFocusItem: z,
        variant: E,
        ...h,
        className: we(_.list, h.className),
        children: u,
      }),
    });
  });
function d2(e) {
  return Me('MuiNativeSelect', e);
}
const Vd = Ae('MuiNativeSelect', [
    'root',
    'select',
    'multiple',
    'filled',
    'outlined',
    'standard',
    'disabled',
    'icon',
    'iconOpen',
    'iconFilled',
    'iconOutlined',
    'iconStandard',
    'nativeInput',
    'error',
  ]),
  f2 = (e) => {
    const {
        classes: r,
        variant: o,
        disabled: s,
        multiple: a,
        open: u,
        error: c,
      } = e,
      f = {
        select: ['select', o, s && 'disabled', a && 'multiple', c && 'error'],
        icon: ['icon', `icon${ge(o)}`, u && 'iconOpen', s && 'disabled'],
      };
    return Fe(f, d2, r);
  },
  Ay = de('select')(({ theme: e }) => ({
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    userSelect: 'none',
    borderRadius: 0,
    cursor: 'pointer',
    '&:focus': { borderRadius: 0 },
    [`&.${Vd.disabled}`]: { cursor: 'default' },
    '&[multiple]': { height: 'auto' },
    '&:not([multiple]) option, &:not([multiple]) optgroup': {
      backgroundColor: (e.vars || e).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: r }) =>
          r.variant !== 'filled' && r.variant !== 'outlined',
        style: { '&&&': { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: 'filled' }, style: { '&&&': { paddingRight: 32 } } },
      {
        props: { variant: 'outlined' },
        style: {
          borderRadius: (e.vars || e).shape.borderRadius,
          '&:focus': { borderRadius: (e.vars || e).shape.borderRadius },
          '&&&': { paddingRight: 32 },
        },
      },
    ],
  })),
  p2 = de(Ay, {
    name: 'MuiNativeSelect',
    slot: 'Select',
    shouldForwardProp: pn,
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.select,
        r[o.variant],
        o.error && r.error,
        { [`&.${Vd.multiple}`]: r.multiple },
      ];
    },
  })({}),
  Ly = de('svg')(({ theme: e }) => ({
    position: 'absolute',
    right: 0,
    top: 'calc(50% - .5em)',
    pointerEvents: 'none',
    color: (e.vars || e).palette.action.active,
    [`&.${Vd.disabled}`]: { color: (e.vars || e).palette.action.disabled },
    variants: [
      {
        props: ({ ownerState: r }) => r.open,
        style: { transform: 'rotate(180deg)' },
      },
      { props: { variant: 'filled' }, style: { right: 7 } },
      { props: { variant: 'outlined' }, style: { right: 7 } },
    ],
  })),
  h2 = de(Ly, {
    name: 'MuiNativeSelect',
    slot: 'Icon',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.icon,
        o.variant && r[`icon${ge(o.variant)}`],
        o.open && r.iconOpen,
      ];
    },
  })({}),
  m2 = S.forwardRef(function (r, o) {
    const {
        className: s,
        disabled: a,
        error: u,
        IconComponent: c,
        inputRef: f,
        variant: h = 'standard',
        ...m
      } = r,
      g = { ...r, disabled: a, variant: h, error: u },
      v = f2(g);
    return M.jsxs(S.Fragment, {
      children: [
        M.jsx(p2, {
          ownerState: g,
          className: we(v.select, s),
          disabled: a,
          ref: f || o,
          ...m,
        }),
        r.multiple
          ? null
          : M.jsx(h2, { as: c, ownerState: g, className: v.icon }),
      ],
    });
  });
var Zm;
const g2 = de('fieldset', { shouldForwardProp: pn })({
    textAlign: 'left',
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: '0 8px',
    pointerEvents: 'none',
    borderRadius: 'inherit',
    borderStyle: 'solid',
    borderWidth: 1,
    overflow: 'hidden',
    minWidth: '0%',
  }),
  y2 = de('legend', { shouldForwardProp: pn })(
    He(({ theme: e }) => ({
      float: 'unset',
      width: 'auto',
      overflow: 'hidden',
      variants: [
        {
          props: ({ ownerState: r }) => !r.withLabel,
          style: {
            padding: 0,
            lineHeight: '11px',
            transition: e.transitions.create('width', {
              duration: 150,
              easing: e.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: r }) => r.withLabel,
          style: {
            display: 'block',
            padding: 0,
            height: 11,
            fontSize: '0.75em',
            visibility: 'hidden',
            maxWidth: 0.01,
            transition: e.transitions.create('max-width', {
              duration: 50,
              easing: e.transitions.easing.easeOut,
            }),
            whiteSpace: 'nowrap',
            '& > span': {
              paddingLeft: 5,
              paddingRight: 5,
              display: 'inline-block',
              opacity: 0,
              visibility: 'visible',
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.withLabel && r.notched,
          style: {
            maxWidth: '100%',
            transition: e.transitions.create('max-width', {
              duration: 100,
              easing: e.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    })),
  );
function v2(e) {
  const {
      children: r,
      classes: o,
      className: s,
      label: a,
      notched: u,
      ...c
    } = e,
    f = a != null && a !== '',
    h = { ...e, notched: u, withLabel: f };
  return M.jsx(g2, {
    'aria-hidden': !0,
    className: s,
    ownerState: h,
    ...c,
    children: M.jsx(y2, {
      ownerState: h,
      children: f
        ? M.jsx('span', { children: a })
        : Zm ||
          (Zm = M.jsx('span', {
            className: 'notranslate',
            'aria-hidden': !0,
            children: '​',
          })),
    }),
  });
}
const x2 = (e) => {
    const { classes: r } = e,
      s = Fe(
        {
          root: ['root'],
          notchedOutline: ['notchedOutline'],
          input: ['input'],
        },
        iE,
        r,
      );
    return { ...r, ...s };
  },
  S2 = de(bl, {
    shouldForwardProp: (e) => pn(e) || e === 'classes',
    name: 'MuiOutlinedInput',
    slot: 'Root',
    overridesResolver: wl,
  })(
    He(({ theme: e }) => {
      const r =
        e.palette.mode === 'light'
          ? 'rgba(0, 0, 0, 0.23)'
          : 'rgba(255, 255, 255, 0.23)';
      return {
        position: 'relative',
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${zn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        '@media (hover: none)': {
          [`&:hover .${zn.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : r,
          },
        },
        [`&.${zn.focused} .${zn.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(e.palette)
            .filter(dn())
            .map(([o]) => ({
              props: { color: o },
              style: {
                [`&.${zn.focused} .${zn.notchedOutline}`]: {
                  borderColor: (e.vars || e).palette[o].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${zn.error} .${zn.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.error.main,
              },
              [`&.${zn.disabled} .${zn.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.action.disabled,
              },
            },
          },
          {
            props: ({ ownerState: o }) => o.startAdornment,
            style: { paddingLeft: 14 },
          },
          {
            props: ({ ownerState: o }) => o.endAdornment,
            style: { paddingRight: 14 },
          },
          {
            props: ({ ownerState: o }) => o.multiline,
            style: { padding: '16.5px 14px' },
          },
          {
            props: ({ ownerState: o, size: s }) => o.multiline && s === 'small',
            style: { padding: '8.5px 14px' },
          },
        ],
      };
    }),
  ),
  w2 = de(v2, {
    name: 'MuiOutlinedInput',
    slot: 'NotchedOutline',
    overridesResolver: (e, r) => r.notchedOutline,
  })(
    He(({ theme: e }) => {
      const r =
        e.palette.mode === 'light'
          ? 'rgba(0, 0, 0, 0.23)'
          : 'rgba(255, 255, 255, 0.23)';
      return {
        borderColor: e.vars
          ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
          : r,
      };
    }),
  ),
  C2 = de(El, {
    name: 'MuiOutlinedInput',
    slot: 'Input',
    overridesResolver: Cl,
  })(
    He(({ theme: e }) => ({
      padding: '16.5px 14px',
      ...(!e.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow:
            e.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: e.palette.mode === 'light' ? null : '#fff',
          caretColor: e.palette.mode === 'light' ? null : '#fff',
          borderRadius: 'inherit',
        },
      }),
      ...(e.vars && {
        '&:-webkit-autofill': { borderRadius: 'inherit' },
        [e.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff',
          },
        },
      }),
      variants: [
        { props: { size: 'small' }, style: { padding: '8.5px 14px' } },
        { props: ({ ownerState: r }) => r.multiline, style: { padding: 0 } },
        {
          props: ({ ownerState: r }) => r.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: r }) => r.endAdornment,
          style: { paddingRight: 0 },
        },
      ],
    })),
  ),
  Kd = S.forwardRef(function (r, o) {
    var s;
    const a = Be({ props: r, name: 'MuiOutlinedInput' }),
      {
        components: u = {},
        fullWidth: c = !1,
        inputComponent: f = 'input',
        label: h,
        multiline: m = !1,
        notched: g,
        slots: v = {},
        type: C = 'text',
        ...k
      } = a,
      w = x2(a),
      b = Yo(),
      E = Xo({
        props: a,
        muiFormControl: b,
        states: [
          'color',
          'disabled',
          'error',
          'focused',
          'hiddenLabel',
          'size',
          'required',
        ],
      }),
      R = {
        ...a,
        color: E.color || 'primary',
        disabled: E.disabled,
        error: E.error,
        focused: E.focused,
        formControl: b,
        fullWidth: c,
        hiddenLabel: E.hiddenLabel,
        multiline: m,
        size: E.size,
        type: C,
      },
      N = v.root ?? u.Root ?? S2,
      P = v.input ?? u.Input ?? C2;
    return M.jsx(Ud, {
      slots: { root: N, input: P },
      renderSuffix: (I) =>
        M.jsx(w2, {
          ownerState: R,
          className: w.notchedOutline,
          label:
            h != null && h !== '' && E.required
              ? s || (s = M.jsxs(S.Fragment, { children: [h, ' ', '*'] }))
              : h,
          notched:
            typeof g < 'u' ? g : !!(I.startAdornment || I.filled || I.focused),
        }),
      fullWidth: c,
      inputComponent: f,
      multiline: m,
      ref: o,
      type: C,
      ...k,
      classes: { ...w, notchedOutline: null },
    });
  });
Kd.muiName = 'Input';
function b2(e) {
  return Me('MuiSelect', e);
}
const Vi = Ae('MuiSelect', [
  'root',
  'select',
  'multiple',
  'filled',
  'outlined',
  'standard',
  'disabled',
  'focused',
  'icon',
  'iconOpen',
  'iconFilled',
  'iconOutlined',
  'iconStandard',
  'nativeInput',
  'error',
]);
var eg;
const E2 = de(Ay, {
    name: 'MuiSelect',
    slot: 'Select',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        { [`&.${Vi.select}`]: r.select },
        { [`&.${Vi.select}`]: r[o.variant] },
        { [`&.${Vi.error}`]: r.error },
        { [`&.${Vi.multiple}`]: r.multiple },
      ];
    },
  })({
    [`&.${Vi.select}`]: {
      height: 'auto',
      minHeight: '1.4375em',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  }),
  k2 = de(Ly, {
    name: 'MuiSelect',
    slot: 'Icon',
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.icon,
        o.variant && r[`icon${ge(o.variant)}`],
        o.open && r.iconOpen,
      ];
    },
  })({}),
  R2 = de('input', {
    shouldForwardProp: (e) => xy(e) && e !== 'classes',
    name: 'MuiSelect',
    slot: 'NativeInput',
    overridesResolver: (e, r) => r.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    width: '100%',
    boxSizing: 'border-box',
  });
function tg(e, r) {
  return typeof r == 'object' && r !== null ? e === r : String(e) === String(r);
}
function P2(e) {
  return e == null || (typeof e == 'string' && !e.trim());
}
const T2 = (e) => {
    const {
        classes: r,
        variant: o,
        disabled: s,
        multiple: a,
        open: u,
        error: c,
      } = e,
      f = {
        select: ['select', o, s && 'disabled', a && 'multiple', c && 'error'],
        icon: ['icon', `icon${ge(o)}`, u && 'iconOpen', s && 'disabled'],
        nativeInput: ['nativeInput'],
      };
    return Fe(f, b2, r);
  },
  I2 = S.forwardRef(function (r, o) {
    var ei;
    const {
        'aria-describedby': s,
        'aria-label': a,
        autoFocus: u,
        autoWidth: c,
        children: f,
        className: h,
        defaultOpen: m,
        defaultValue: g,
        disabled: v,
        displayEmpty: C,
        error: k = !1,
        IconComponent: w,
        inputRef: b,
        labelId: E,
        MenuProps: R = {},
        multiple: N,
        name: P,
        onBlur: I,
        onChange: O,
        onClose: _,
        onFocus: z,
        onOpen: V,
        open: G,
        readOnly: x,
        renderValue: j,
        required: Z,
        SelectDisplayProps: Y = {},
        tabIndex: ne,
        type: Q,
        value: ee,
        variant: ie = 'standard',
        ...U
      } = r,
      [K, re] = ym({ controlled: ee, default: g, name: 'Select' }),
      [L, q] = ym({ controlled: G, default: m, name: 'Select' }),
      ae = S.useRef(null),
      ue = S.useRef(null),
      [pe, Ce] = S.useState(null),
      { current: ke } = S.useRef(G != null),
      [Re, be] = S.useState(),
      xe = Ct(o, b),
      Le = S.useCallback((Se) => {
        (ue.current = Se), Se && Ce(Se);
      }, []),
      Oe = pe == null ? void 0 : pe.parentNode;
    S.useImperativeHandle(
      xe,
      () => ({
        focus: () => {
          ue.current.focus();
        },
        node: ae.current,
        value: K,
      }),
      [K],
    ),
      S.useEffect(() => {
        m &&
          L &&
          pe &&
          !ke &&
          (be(c ? null : Oe.clientWidth), ue.current.focus());
      }, [pe, c]),
      S.useEffect(() => {
        u && ue.current.focus();
      }, [u]),
      S.useEffect(() => {
        if (!E) return;
        const Se = kn(ue.current).getElementById(E);
        if (Se) {
          const Ue = () => {
            getSelection().isCollapsed && ue.current.focus();
          };
          return (
            Se.addEventListener('click', Ue),
            () => {
              Se.removeEventListener('click', Ue);
            }
          );
        }
      }, [E]);
    const Xe = (Se, Ue) => {
        Se ? V && V(Ue) : _ && _(Ue),
          ke || (be(c ? null : Oe.clientWidth), q(Se));
      },
      Te = (Se) => {
        Se.button === 0 &&
          (Se.preventDefault(), ue.current.focus(), Xe(!0, Se));
      },
      Ve = (Se) => {
        Xe(!1, Se);
      },
      Pt = S.Children.toArray(f),
      gt = (Se) => {
        const Ue = Pt.find((lt) => lt.props.value === Se.target.value);
        Ue !== void 0 && (re(Ue.props.value), O && O(Se, Ue));
      },
      at = (Se) => (Ue) => {
        let lt;
        if (Ue.currentTarget.hasAttribute('tabindex')) {
          if (N) {
            lt = Array.isArray(K) ? K.slice() : [];
            const On = K.indexOf(Se.props.value);
            On === -1 ? lt.push(Se.props.value) : lt.splice(On, 1);
          } else lt = Se.props.value;
          if (
            (Se.props.onClick && Se.props.onClick(Ue), K !== lt && (re(lt), O))
          ) {
            const On = Ue.nativeEvent || Ue,
              oo = new On.constructor(On.type, On);
            Object.defineProperty(oo, 'target', {
              writable: !0,
              value: { value: lt, name: P },
            }),
              O(oo, Se);
          }
          N || Xe(!1, Ue);
        }
      },
      Ft = (Se) => {
        x ||
          ([' ', 'ArrowUp', 'ArrowDown', 'Enter'].includes(Se.key) &&
            (Se.preventDefault(), Xe(!0, Se)));
      },
      ft = pe !== null && L,
      Ge = (Se) => {
        !ft &&
          I &&
          (Object.defineProperty(Se, 'target', {
            writable: !0,
            value: { value: K, name: P },
          }),
          I(Se));
      };
    delete U['aria-invalid'];
    let me, Vn;
    const bt = [];
    let Kn = !1;
    (tl({ value: K }) || C) && (j ? (me = j(K)) : (Kn = !0));
    const lr = Pt.map((Se) => {
      if (!S.isValidElement(Se)) return null;
      let Ue;
      if (N) {
        if (!Array.isArray(K)) throw new Error(sr(2));
        (Ue = K.some((lt) => tg(lt, Se.props.value))),
          Ue && Kn && bt.push(Se.props.children);
      } else (Ue = tg(K, Se.props.value)), Ue && Kn && (Vn = Se.props.children);
      return S.cloneElement(Se, {
        'aria-selected': Ue ? 'true' : 'false',
        onClick: at(Se),
        onKeyUp: (lt) => {
          lt.key === ' ' && lt.preventDefault(),
            Se.props.onKeyUp && Se.props.onKeyUp(lt);
        },
        role: 'option',
        selected: Ue,
        value: void 0,
        'data-value': Se.props.value,
      });
    });
    Kn &&
      (N
        ? bt.length === 0
          ? (me = null)
          : (me = bt.reduce(
              (Se, Ue, lt) => (
                Se.push(Ue), lt < bt.length - 1 && Se.push(', '), Se
              ),
              [],
            ))
        : (me = Vn));
    let qn = Re;
    !c && ke && pe && (qn = Oe.clientWidth);
    let hn;
    typeof ne < 'u' ? (hn = ne) : (hn = v ? null : 0);
    const Gn = Y.id || (P ? `mui-component-select-${P}` : void 0),
      qt = { ...r, variant: ie, value: K, open: ft, error: k },
      De = T2(qt),
      ur = {
        ...R.PaperProps,
        ...((ei = R.slotProps) == null ? void 0 : ei.paper),
      },
      cr = oy();
    return M.jsxs(S.Fragment, {
      children: [
        M.jsx(E2, {
          as: 'div',
          ref: Le,
          tabIndex: hn,
          role: 'combobox',
          'aria-controls': cr,
          'aria-disabled': v ? 'true' : void 0,
          'aria-expanded': ft ? 'true' : 'false',
          'aria-haspopup': 'listbox',
          'aria-label': a,
          'aria-labelledby': [E, Gn].filter(Boolean).join(' ') || void 0,
          'aria-describedby': s,
          'aria-required': Z ? 'true' : void 0,
          'aria-invalid': k ? 'true' : void 0,
          onKeyDown: Ft,
          onMouseDown: v || x ? null : Te,
          onBlur: Ge,
          onFocus: z,
          ...Y,
          ownerState: qt,
          className: we(Y.className, De.select, h),
          id: Gn,
          children: P2(me)
            ? eg ||
              (eg = M.jsx('span', {
                className: 'notranslate',
                'aria-hidden': !0,
                children: '​',
              }))
            : me,
        }),
        M.jsx(R2, {
          'aria-invalid': k,
          value: Array.isArray(K) ? K.join(',') : K,
          name: P,
          ref: ae,
          'aria-hidden': !0,
          onChange: gt,
          tabIndex: -1,
          disabled: v,
          className: De.nativeInput,
          autoFocus: u,
          required: Z,
          ...U,
          ownerState: qt,
        }),
        M.jsx(k2, { as: w, className: De.icon, ownerState: qt }),
        M.jsx(c2, {
          id: `menu-${P || ''}`,
          anchorEl: Oe,
          open: ft,
          onClose: Ve,
          anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
          transformOrigin: { vertical: 'top', horizontal: 'center' },
          ...R,
          MenuListProps: {
            'aria-labelledby': E,
            role: 'listbox',
            'aria-multiselectable': N ? 'true' : void 0,
            disableListWrap: !0,
            id: cr,
            ...R.MenuListProps,
          },
          slotProps: {
            ...R.slotProps,
            paper: {
              ...ur,
              style: { minWidth: qn, ...(ur != null ? ur.style : null) },
            },
          },
          children: lr,
        }),
      ],
    });
  }),
  O2 = (e) => {
    const { classes: r } = e;
    return r;
  },
  qd = {
    name: 'MuiSelect',
    overridesResolver: (e, r) => r.root,
    shouldForwardProp: (e) => pn(e) && e !== 'variant',
    slot: 'Root',
  },
  N2 = de(Hd, qd)(''),
  A2 = de(Kd, qd)(''),
  L2 = de(Wd, qd)(''),
  $y = S.forwardRef(function (r, o) {
    const s = Be({ name: 'MuiSelect', props: r }),
      {
        autoWidth: a = !1,
        children: u,
        classes: c = {},
        className: f,
        defaultOpen: h = !1,
        displayEmpty: m = !1,
        IconComponent: g = aE,
        id: v,
        input: C,
        inputProps: k,
        label: w,
        labelId: b,
        MenuProps: E,
        multiple: R = !1,
        native: N = !1,
        onClose: P,
        onOpen: I,
        open: O,
        renderValue: _,
        SelectDisplayProps: z,
        variant: V = 'outlined',
        ...G
      } = s,
      x = N ? m2 : I2,
      j = Yo(),
      Z = Xo({ props: s, muiFormControl: j, states: ['variant', 'error'] }),
      Y = Z.variant || V,
      ne = { ...s, variant: Y, classes: c },
      Q = O2(ne),
      { root: ee, ...ie } = Q,
      U =
        C ||
        {
          standard: M.jsx(N2, { ownerState: ne }),
          outlined: M.jsx(A2, { label: w, ownerState: ne }),
          filled: M.jsx(L2, { ownerState: ne }),
        }[Y],
      K = Ct(o, Qo(U));
    return M.jsx(S.Fragment, {
      children: S.cloneElement(U, {
        inputComponent: x,
        inputProps: {
          children: u,
          error: Z.error,
          IconComponent: g,
          variant: Y,
          type: void 0,
          multiple: R,
          ...(N
            ? { id: v }
            : {
                autoWidth: a,
                defaultOpen: h,
                displayEmpty: m,
                labelId: b,
                MenuProps: E,
                onClose: P,
                onOpen: I,
                open: O,
                renderValue: _,
                SelectDisplayProps: { id: v, ...z },
              }),
          ...k,
          classes: k ? $t(ie, k.classes) : ie,
          ...(C ? C.props.inputProps : {}),
        },
        ...(((R && N) || m) && Y === 'outlined' ? { notched: !0 } : {}),
        ref: K,
        className: we(U.props.className, f, Q.root),
        ...(!C && { variant: Y }),
        ...G,
      }),
    });
  });
$y.muiName = 'Select';
function $2(e) {
  return Me('MuiTextField', e);
}
Ae('MuiTextField', ['root']);
const M2 = { standard: Hd, filled: Wd, outlined: Kd },
  _2 = (e) => {
    const { classes: r } = e;
    return Fe({ root: ['root'] }, $2, r);
  },
  z2 = de(mk, {
    name: 'MuiTextField',
    slot: 'Root',
    overridesResolver: (e, r) => r.root,
  })({}),
  ng = S.forwardRef(function (r, o) {
    const s = Be({ props: r, name: 'MuiTextField' }),
      {
        autoComplete: a,
        autoFocus: u = !1,
        children: c,
        className: f,
        color: h = 'primary',
        defaultValue: m,
        disabled: g = !1,
        error: v = !1,
        FormHelperTextProps: C,
        fullWidth: k = !1,
        helperText: w,
        id: b,
        InputLabelProps: E,
        inputProps: R,
        InputProps: N,
        inputRef: P,
        label: I,
        maxRows: O,
        minRows: _,
        multiline: z = !1,
        name: V,
        onBlur: G,
        onChange: x,
        onFocus: j,
        placeholder: Z,
        required: Y = !1,
        rows: ne,
        select: Q = !1,
        SelectProps: ee,
        slots: ie = {},
        slotProps: U = {},
        type: K,
        value: re,
        variant: L = 'outlined',
        ...q
      } = s,
      ae = {
        ...s,
        autoFocus: u,
        color: h,
        disabled: g,
        error: v,
        fullWidth: k,
        multiline: z,
        required: Y,
        select: Q,
        variant: L,
      },
      ue = _2(ae),
      pe = oy(b),
      Ce = w && pe ? `${pe}-helper-text` : void 0,
      ke = I && pe ? `${pe}-label` : void 0,
      Re = M2[L],
      be = {
        slots: ie,
        slotProps: {
          input: N,
          inputLabel: E,
          htmlInput: R,
          formHelperText: C,
          select: ee,
          ...U,
        },
      },
      xe = {},
      Le = be.slotProps.inputLabel;
    L === 'outlined' &&
      (Le && typeof Le.shrink < 'u' && (xe.notched = Le.shrink),
      (xe.label = I)),
      Q &&
        ((!ee || !ee.native) && (xe.id = void 0),
        (xe['aria-describedby'] = void 0));
    const [Oe, Xe] = zt('input', {
        elementType: Re,
        externalForwardedProps: be,
        additionalProps: xe,
        ownerState: ae,
      }),
      [Te, Ve] = zt('inputLabel', {
        elementType: Ak,
        externalForwardedProps: be,
        ownerState: ae,
      }),
      [Pt, gt] = zt('htmlInput', {
        elementType: 'input',
        externalForwardedProps: be,
        ownerState: ae,
      }),
      [at, Ft] = zt('formHelperText', {
        elementType: xk,
        externalForwardedProps: be,
        ownerState: ae,
      }),
      [ft, Ge] = zt('select', {
        elementType: $y,
        externalForwardedProps: be,
        ownerState: ae,
      }),
      me = M.jsx(Oe, {
        'aria-describedby': Ce,
        autoComplete: a,
        autoFocus: u,
        defaultValue: m,
        fullWidth: k,
        multiline: z,
        name: V,
        rows: ne,
        maxRows: O,
        minRows: _,
        type: K,
        value: re,
        id: pe,
        inputRef: P,
        onBlur: G,
        onChange: x,
        onFocus: j,
        placeholder: Z,
        inputProps: gt,
        slots: { input: ie.htmlInput ? Pt : void 0 },
        ...Xe,
      });
    return M.jsxs(z2, {
      className: we(ue.root, f),
      disabled: g,
      error: v,
      fullWidth: k,
      ref: o,
      required: Y,
      color: h,
      variant: L,
      ownerState: ae,
      ...q,
      children: [
        I != null &&
          I !== '' &&
          M.jsx(Te, { htmlFor: pe, id: ke, ...Ve, children: I }),
        Q
          ? M.jsx(ft, {
              'aria-describedby': Ce,
              id: pe,
              labelId: ke,
              value: re,
              input: me,
              ...Ge,
              children: c,
            })
          : me,
        w && M.jsx(at, { id: Ce, ...Ft, children: w }),
      ],
    });
  }),
  F2 = Hn(
    M.jsx('path', { d: 'M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z' }),
    'Menu',
  ),
  B2 = Hn(M.jsx('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' }), 'Home'),
  D2 = Hn(
    M.jsx('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z',
    }),
    'Info',
  ),
  j2 = Hn(
    M.jsx('path', {
      d: 'M21 8V7l-3 2-3-2v1l3 2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm8-6h-8V6h8z',
    }),
    'ContactMail',
  );
function My(e, r) {
  return function () {
    return e.apply(r, arguments);
  };
}
const { toString: U2 } = Object.prototype,
  { getPrototypeOf: Gd } = Object,
  kl = ((e) => (r) => {
    const o = U2.call(r);
    return e[o] || (e[o] = o.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  In = (e) => ((e = e.toLowerCase()), (r) => kl(r) === e),
  Rl = (e) => (r) => typeof r === e,
  { isArray: Jo } = Array,
  ls = Rl('undefined');
function W2(e) {
  return (
    e !== null &&
    !ls(e) &&
    e.constructor !== null &&
    !ls(e.constructor) &&
    en(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const _y = In('ArrayBuffer');
function H2(e) {
  let r;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (r = ArrayBuffer.isView(e))
      : (r = e && e.buffer && _y(e.buffer)),
    r
  );
}
const V2 = Rl('string'),
  en = Rl('function'),
  zy = Rl('number'),
  Pl = (e) => e !== null && typeof e == 'object',
  K2 = (e) => e === !0 || e === !1,
  Ka = (e) => {
    if (kl(e) !== 'object') return !1;
    const r = Gd(e);
    return (
      (r === null ||
        r === Object.prototype ||
        Object.getPrototypeOf(r) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  q2 = In('Date'),
  G2 = In('File'),
  Q2 = In('Blob'),
  X2 = In('FileList'),
  Y2 = (e) => Pl(e) && en(e.pipe),
  J2 = (e) => {
    let r;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (en(e.append) &&
          ((r = kl(e)) === 'formdata' ||
            (r === 'object' &&
              en(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  Z2 = In('URLSearchParams'),
  [eR, tR, nR, rR] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    In,
  ),
  oR = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function vs(e, r, { allOwnKeys: o = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let s, a;
  if ((typeof e != 'object' && (e = [e]), Jo(e)))
    for (s = 0, a = e.length; s < a; s++) r.call(null, e[s], s, e);
  else {
    const u = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
      c = u.length;
    let f;
    for (s = 0; s < c; s++) (f = u[s]), r.call(null, e[f], f, e);
  }
}
function Fy(e, r) {
  r = r.toLowerCase();
  const o = Object.keys(e);
  let s = o.length,
    a;
  for (; s-- > 0; ) if (((a = o[s]), r === a.toLowerCase())) return a;
  return null;
}
const Jr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global,
  By = (e) => !ls(e) && e !== Jr;
function od() {
  const { caseless: e } = (By(this) && this) || {},
    r = {},
    o = (s, a) => {
      const u = (e && Fy(r, a)) || a;
      Ka(r[u]) && Ka(s)
        ? (r[u] = od(r[u], s))
        : Ka(s)
        ? (r[u] = od({}, s))
        : Jo(s)
        ? (r[u] = s.slice())
        : (r[u] = s);
    };
  for (let s = 0, a = arguments.length; s < a; s++)
    arguments[s] && vs(arguments[s], o);
  return r;
}
const iR = (e, r, o, { allOwnKeys: s } = {}) => (
    vs(
      r,
      (a, u) => {
        o && en(a) ? (e[u] = My(a, o)) : (e[u] = a);
      },
      { allOwnKeys: s },
    ),
    e
  ),
  sR = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  aR = (e, r, o, s) => {
    (e.prototype = Object.create(r.prototype, s)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: r.prototype }),
      o && Object.assign(e.prototype, o);
  },
  lR = (e, r, o, s) => {
    let a, u, c;
    const f = {};
    if (((r = r || {}), e == null)) return r;
    do {
      for (a = Object.getOwnPropertyNames(e), u = a.length; u-- > 0; )
        (c = a[u]), (!s || s(c, e, r)) && !f[c] && ((r[c] = e[c]), (f[c] = !0));
      e = o !== !1 && Gd(e);
    } while (e && (!o || o(e, r)) && e !== Object.prototype);
    return r;
  },
  uR = (e, r, o) => {
    (e = String(e)),
      (o === void 0 || o > e.length) && (o = e.length),
      (o -= r.length);
    const s = e.indexOf(r, o);
    return s !== -1 && s === o;
  },
  cR = (e) => {
    if (!e) return null;
    if (Jo(e)) return e;
    let r = e.length;
    if (!zy(r)) return null;
    const o = new Array(r);
    for (; r-- > 0; ) o[r] = e[r];
    return o;
  },
  dR = (
    (e) => (r) =>
      e && r instanceof e
  )(typeof Uint8Array < 'u' && Gd(Uint8Array)),
  fR = (e, r) => {
    const s = (e && e[Symbol.iterator]).call(e);
    let a;
    for (; (a = s.next()) && !a.done; ) {
      const u = a.value;
      r.call(e, u[0], u[1]);
    }
  },
  pR = (e, r) => {
    let o;
    const s = [];
    for (; (o = e.exec(r)) !== null; ) s.push(o);
    return s;
  },
  hR = In('HTMLFormElement'),
  mR = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (o, s, a) {
      return s.toUpperCase() + a;
    }),
  rg = (
    ({ hasOwnProperty: e }) =>
    (r, o) =>
      e.call(r, o)
  )(Object.prototype),
  gR = In('RegExp'),
  Dy = (e, r) => {
    const o = Object.getOwnPropertyDescriptors(e),
      s = {};
    vs(o, (a, u) => {
      let c;
      (c = r(a, u, e)) !== !1 && (s[u] = c || a);
    }),
      Object.defineProperties(e, s);
  },
  yR = (e) => {
    Dy(e, (r, o) => {
      if (en(e) && ['arguments', 'caller', 'callee'].indexOf(o) !== -1)
        return !1;
      const s = e[o];
      if (en(s)) {
        if (((r.enumerable = !1), 'writable' in r)) {
          r.writable = !1;
          return;
        }
        r.set ||
          (r.set = () => {
            throw Error("Can not rewrite read-only method '" + o + "'");
          });
      }
    });
  },
  vR = (e, r) => {
    const o = {},
      s = (a) => {
        a.forEach((u) => {
          o[u] = !0;
        });
      };
    return Jo(e) ? s(e) : s(String(e).split(r)), o;
  },
  xR = () => {},
  SR = (e, r) => (e != null && Number.isFinite((e = +e)) ? e : r),
  Ac = 'abcdefghijklmnopqrstuvwxyz',
  og = '0123456789',
  jy = { DIGIT: og, ALPHA: Ac, ALPHA_DIGIT: Ac + Ac.toUpperCase() + og },
  wR = (e = 16, r = jy.ALPHA_DIGIT) => {
    let o = '';
    const { length: s } = r;
    for (; e--; ) o += r[(Math.random() * s) | 0];
    return o;
  };
function CR(e) {
  return !!(
    e &&
    en(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const bR = (e) => {
    const r = new Array(10),
      o = (s, a) => {
        if (Pl(s)) {
          if (r.indexOf(s) >= 0) return;
          if (!('toJSON' in s)) {
            r[a] = s;
            const u = Jo(s) ? [] : {};
            return (
              vs(s, (c, f) => {
                const h = o(c, a + 1);
                !ls(h) && (u[f] = h);
              }),
              (r[a] = void 0),
              u
            );
          }
        }
        return s;
      };
    return o(e, 0);
  },
  ER = In('AsyncFunction'),
  kR = (e) => e && (Pl(e) || en(e)) && en(e.then) && en(e.catch),
  Uy = ((e, r) =>
    e
      ? setImmediate
      : r
      ? ((o, s) => (
          Jr.addEventListener(
            'message',
            ({ source: a, data: u }) => {
              a === Jr && u === o && s.length && s.shift()();
            },
            !1,
          ),
          (a) => {
            s.push(a), Jr.postMessage(o, '*');
          }
        ))(`axios@${Math.random()}`, [])
      : (o) => setTimeout(o))(
    typeof setImmediate == 'function',
    en(Jr.postMessage),
  ),
  RR =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Jr)
      : (typeof process < 'u' && process.nextTick) || Uy,
  W = {
    isArray: Jo,
    isArrayBuffer: _y,
    isBuffer: W2,
    isFormData: J2,
    isArrayBufferView: H2,
    isString: V2,
    isNumber: zy,
    isBoolean: K2,
    isObject: Pl,
    isPlainObject: Ka,
    isReadableStream: eR,
    isRequest: tR,
    isResponse: nR,
    isHeaders: rR,
    isUndefined: ls,
    isDate: q2,
    isFile: G2,
    isBlob: Q2,
    isRegExp: gR,
    isFunction: en,
    isStream: Y2,
    isURLSearchParams: Z2,
    isTypedArray: dR,
    isFileList: X2,
    forEach: vs,
    merge: od,
    extend: iR,
    trim: oR,
    stripBOM: sR,
    inherits: aR,
    toFlatObject: lR,
    kindOf: kl,
    kindOfTest: In,
    endsWith: uR,
    toArray: cR,
    forEachEntry: fR,
    matchAll: pR,
    isHTMLForm: hR,
    hasOwnProperty: rg,
    hasOwnProp: rg,
    reduceDescriptors: Dy,
    freezeMethods: yR,
    toObjectSet: vR,
    toCamelCase: mR,
    noop: xR,
    toFiniteNumber: SR,
    findKey: Fy,
    global: Jr,
    isContextDefined: By,
    ALPHABET: jy,
    generateString: wR,
    isSpecCompliantForm: CR,
    toJSONObject: bR,
    isAsyncFn: ER,
    isThenable: kR,
    setImmediate: Uy,
    asap: RR,
  };
function Pe(e, r, o, s, a) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    r && (this.code = r),
    o && (this.config = o),
    s && (this.request = s),
    a && ((this.response = a), (this.status = a.status ? a.status : null));
}
W.inherits(Pe, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: W.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Wy = Pe.prototype,
  Hy = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  Hy[e] = { value: e };
});
Object.defineProperties(Pe, Hy);
Object.defineProperty(Wy, 'isAxiosError', { value: !0 });
Pe.from = (e, r, o, s, a, u) => {
  const c = Object.create(Wy);
  return (
    W.toFlatObject(
      e,
      c,
      function (h) {
        return h !== Error.prototype;
      },
      (f) => f !== 'isAxiosError',
    ),
    Pe.call(c, e.message, r, o, s, a),
    (c.cause = e),
    (c.name = e.name),
    u && Object.assign(c, u),
    c
  );
};
const PR = null;
function id(e) {
  return W.isPlainObject(e) || W.isArray(e);
}
function Vy(e) {
  return W.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function ig(e, r, o) {
  return e
    ? e
        .concat(r)
        .map(function (a, u) {
          return (a = Vy(a)), !o && u ? '[' + a + ']' : a;
        })
        .join(o ? '.' : '')
    : r;
}
function TR(e) {
  return W.isArray(e) && !e.some(id);
}
const IR = W.toFlatObject(W, {}, null, function (r) {
  return /^is[A-Z]/.test(r);
});
function Tl(e, r, o) {
  if (!W.isObject(e)) throw new TypeError('target must be an object');
  (r = r || new FormData()),
    (o = W.toFlatObject(
      o,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (b, E) {
        return !W.isUndefined(E[b]);
      },
    ));
  const s = o.metaTokens,
    a = o.visitor || g,
    u = o.dots,
    c = o.indexes,
    h = (o.Blob || (typeof Blob < 'u' && Blob)) && W.isSpecCompliantForm(r);
  if (!W.isFunction(a)) throw new TypeError('visitor must be a function');
  function m(w) {
    if (w === null) return '';
    if (W.isDate(w)) return w.toISOString();
    if (!h && W.isBlob(w))
      throw new Pe('Blob is not supported. Use a Buffer instead.');
    return W.isArrayBuffer(w) || W.isTypedArray(w)
      ? h && typeof Blob == 'function'
        ? new Blob([w])
        : Buffer.from(w)
      : w;
  }
  function g(w, b, E) {
    let R = w;
    if (w && !E && typeof w == 'object') {
      if (W.endsWith(b, '{}'))
        (b = s ? b : b.slice(0, -2)), (w = JSON.stringify(w));
      else if (
        (W.isArray(w) && TR(w)) ||
        ((W.isFileList(w) || W.endsWith(b, '[]')) && (R = W.toArray(w)))
      )
        return (
          (b = Vy(b)),
          R.forEach(function (P, I) {
            !(W.isUndefined(P) || P === null) &&
              r.append(
                c === !0 ? ig([b], I, u) : c === null ? b : b + '[]',
                m(P),
              );
          }),
          !1
        );
    }
    return id(w) ? !0 : (r.append(ig(E, b, u), m(w)), !1);
  }
  const v = [],
    C = Object.assign(IR, {
      defaultVisitor: g,
      convertValue: m,
      isVisitable: id,
    });
  function k(w, b) {
    if (!W.isUndefined(w)) {
      if (v.indexOf(w) !== -1)
        throw Error('Circular reference detected in ' + b.join('.'));
      v.push(w),
        W.forEach(w, function (R, N) {
          (!(W.isUndefined(R) || R === null) &&
            a.call(r, R, W.isString(N) ? N.trim() : N, b, C)) === !0 &&
            k(R, b ? b.concat(N) : [N]);
        }),
        v.pop();
    }
  }
  if (!W.isObject(e)) throw new TypeError('data must be an object');
  return k(e), r;
}
function sg(e) {
  const r = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
    return r[s];
  });
}
function Qd(e, r) {
  (this._pairs = []), e && Tl(e, this, r);
}
const Ky = Qd.prototype;
Ky.append = function (r, o) {
  this._pairs.push([r, o]);
};
Ky.toString = function (r) {
  const o = r
    ? function (s) {
        return r.call(this, s, sg);
      }
    : sg;
  return this._pairs
    .map(function (a) {
      return o(a[0]) + '=' + o(a[1]);
    }, '')
    .join('&');
};
function OR(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function qy(e, r, o) {
  if (!r) return e;
  const s = (o && o.encode) || OR;
  W.isFunction(o) && (o = { serialize: o });
  const a = o && o.serialize;
  let u;
  if (
    (a
      ? (u = a(r, o))
      : (u = W.isURLSearchParams(r) ? r.toString() : new Qd(r, o).toString(s)),
    u)
  ) {
    const c = e.indexOf('#');
    c !== -1 && (e = e.slice(0, c)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + u);
  }
  return e;
}
class ag {
  constructor() {
    this.handlers = [];
  }
  use(r, o, s) {
    return (
      this.handlers.push({
        fulfilled: r,
        rejected: o,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(r) {
    W.forEach(this.handlers, function (s) {
      s !== null && r(s);
    });
  }
}
const Gy = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  NR = typeof URLSearchParams < 'u' ? URLSearchParams : Qd,
  AR = typeof FormData < 'u' ? FormData : null,
  LR = typeof Blob < 'u' ? Blob : null,
  $R = {
    isBrowser: !0,
    classes: { URLSearchParams: NR, FormData: AR, Blob: LR },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  Xd = typeof window < 'u' && typeof document < 'u',
  sd = (typeof navigator == 'object' && navigator) || void 0,
  MR =
    Xd &&
    (!sd || ['ReactNative', 'NativeScript', 'NS'].indexOf(sd.product) < 0),
  _R =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  zR = (Xd && window.location.href) || 'http://localhost',
  FR = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Xd,
        hasStandardBrowserEnv: MR,
        hasStandardBrowserWebWorkerEnv: _R,
        navigator: sd,
        origin: zR,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Lt = { ...FR, ...$R };
function BR(e, r) {
  return Tl(
    e,
    new Lt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (o, s, a, u) {
          return Lt.isNode && W.isBuffer(o)
            ? (this.append(s, o.toString('base64')), !1)
            : u.defaultVisitor.apply(this, arguments);
        },
      },
      r,
    ),
  );
}
function DR(e) {
  return W.matchAll(/\w+|\[(\w*)]/g, e).map((r) =>
    r[0] === '[]' ? '' : r[1] || r[0],
  );
}
function jR(e) {
  const r = {},
    o = Object.keys(e);
  let s;
  const a = o.length;
  let u;
  for (s = 0; s < a; s++) (u = o[s]), (r[u] = e[u]);
  return r;
}
function Qy(e) {
  function r(o, s, a, u) {
    let c = o[u++];
    if (c === '__proto__') return !0;
    const f = Number.isFinite(+c),
      h = u >= o.length;
    return (
      (c = !c && W.isArray(a) ? a.length : c),
      h
        ? (W.hasOwnProp(a, c) ? (a[c] = [a[c], s]) : (a[c] = s), !f)
        : ((!a[c] || !W.isObject(a[c])) && (a[c] = []),
          r(o, s, a[c], u) && W.isArray(a[c]) && (a[c] = jR(a[c])),
          !f)
    );
  }
  if (W.isFormData(e) && W.isFunction(e.entries)) {
    const o = {};
    return (
      W.forEachEntry(e, (s, a) => {
        r(DR(s), a, o, 0);
      }),
      o
    );
  }
  return null;
}
function UR(e, r, o) {
  if (W.isString(e))
    try {
      return (r || JSON.parse)(e), W.trim(e);
    } catch (s) {
      if (s.name !== 'SyntaxError') throw s;
    }
  return (0, JSON.stringify)(e);
}
const xs = {
  transitional: Gy,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (r, o) {
      const s = o.getContentType() || '',
        a = s.indexOf('application/json') > -1,
        u = W.isObject(r);
      if ((u && W.isHTMLForm(r) && (r = new FormData(r)), W.isFormData(r)))
        return a ? JSON.stringify(Qy(r)) : r;
      if (
        W.isArrayBuffer(r) ||
        W.isBuffer(r) ||
        W.isStream(r) ||
        W.isFile(r) ||
        W.isBlob(r) ||
        W.isReadableStream(r)
      )
        return r;
      if (W.isArrayBufferView(r)) return r.buffer;
      if (W.isURLSearchParams(r))
        return (
          o.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          r.toString()
        );
      let f;
      if (u) {
        if (s.indexOf('application/x-www-form-urlencoded') > -1)
          return BR(r, this.formSerializer).toString();
        if ((f = W.isFileList(r)) || s.indexOf('multipart/form-data') > -1) {
          const h = this.env && this.env.FormData;
          return Tl(
            f ? { 'files[]': r } : r,
            h && new h(),
            this.formSerializer,
          );
        }
      }
      return u || a ? (o.setContentType('application/json', !1), UR(r)) : r;
    },
  ],
  transformResponse: [
    function (r) {
      const o = this.transitional || xs.transitional,
        s = o && o.forcedJSONParsing,
        a = this.responseType === 'json';
      if (W.isResponse(r) || W.isReadableStream(r)) return r;
      if (r && W.isString(r) && ((s && !this.responseType) || a)) {
        const c = !(o && o.silentJSONParsing) && a;
        try {
          return JSON.parse(r);
        } catch (f) {
          if (c)
            throw f.name === 'SyntaxError'
              ? Pe.from(f, Pe.ERR_BAD_RESPONSE, this, null, this.response)
              : f;
        }
      }
      return r;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Lt.classes.FormData, Blob: Lt.classes.Blob },
  validateStatus: function (r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
W.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  xs.headers[e] = {};
});
const WR = W.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  HR = (e) => {
    const r = {};
    let o, s, a;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (c) {
            (a = c.indexOf(':')),
              (o = c.substring(0, a).trim().toLowerCase()),
              (s = c.substring(a + 1).trim()),
              !(!o || (r[o] && WR[o])) &&
                (o === 'set-cookie'
                  ? r[o]
                    ? r[o].push(s)
                    : (r[o] = [s])
                  : (r[o] = r[o] ? r[o] + ', ' + s : s));
          }),
      r
    );
  },
  lg = Symbol('internals');
function Ki(e) {
  return e && String(e).trim().toLowerCase();
}
function qa(e) {
  return e === !1 || e == null ? e : W.isArray(e) ? e.map(qa) : String(e);
}
function VR(e) {
  const r = Object.create(null),
    o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = o.exec(e)); ) r[s[1]] = s[2];
  return r;
}
const KR = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Lc(e, r, o, s, a) {
  if (W.isFunction(s)) return s.call(this, r, o);
  if ((a && (r = o), !!W.isString(r))) {
    if (W.isString(s)) return r.indexOf(s) !== -1;
    if (W.isRegExp(s)) return s.test(r);
  }
}
function qR(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (r, o, s) => o.toUpperCase() + s);
}
function GR(e, r) {
  const o = W.toCamelCase(' ' + r);
  ['get', 'set', 'has'].forEach((s) => {
    Object.defineProperty(e, s + o, {
      value: function (a, u, c) {
        return this[s].call(this, r, a, u, c);
      },
      configurable: !0,
    });
  });
}
class Vt {
  constructor(r) {
    r && this.set(r);
  }
  set(r, o, s) {
    const a = this;
    function u(f, h, m) {
      const g = Ki(h);
      if (!g) throw new Error('header name must be a non-empty string');
      const v = W.findKey(a, g);
      (!v || a[v] === void 0 || m === !0 || (m === void 0 && a[v] !== !1)) &&
        (a[v || h] = qa(f));
    }
    const c = (f, h) => W.forEach(f, (m, g) => u(m, g, h));
    if (W.isPlainObject(r) || r instanceof this.constructor) c(r, o);
    else if (W.isString(r) && (r = r.trim()) && !KR(r)) c(HR(r), o);
    else if (W.isHeaders(r)) for (const [f, h] of r.entries()) u(h, f, s);
    else r != null && u(o, r, s);
    return this;
  }
  get(r, o) {
    if (((r = Ki(r)), r)) {
      const s = W.findKey(this, r);
      if (s) {
        const a = this[s];
        if (!o) return a;
        if (o === !0) return VR(a);
        if (W.isFunction(o)) return o.call(this, a, s);
        if (W.isRegExp(o)) return o.exec(a);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(r, o) {
    if (((r = Ki(r)), r)) {
      const s = W.findKey(this, r);
      return !!(s && this[s] !== void 0 && (!o || Lc(this, this[s], s, o)));
    }
    return !1;
  }
  delete(r, o) {
    const s = this;
    let a = !1;
    function u(c) {
      if (((c = Ki(c)), c)) {
        const f = W.findKey(s, c);
        f && (!o || Lc(s, s[f], f, o)) && (delete s[f], (a = !0));
      }
    }
    return W.isArray(r) ? r.forEach(u) : u(r), a;
  }
  clear(r) {
    const o = Object.keys(this);
    let s = o.length,
      a = !1;
    for (; s--; ) {
      const u = o[s];
      (!r || Lc(this, this[u], u, r, !0)) && (delete this[u], (a = !0));
    }
    return a;
  }
  normalize(r) {
    const o = this,
      s = {};
    return (
      W.forEach(this, (a, u) => {
        const c = W.findKey(s, u);
        if (c) {
          (o[c] = qa(a)), delete o[u];
          return;
        }
        const f = r ? qR(u) : String(u).trim();
        f !== u && delete o[u], (o[f] = qa(a)), (s[f] = !0);
      }),
      this
    );
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const o = Object.create(null);
    return (
      W.forEach(this, (s, a) => {
        s != null && s !== !1 && (o[a] = r && W.isArray(s) ? s.join(', ') : s);
      }),
      o
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, o]) => r + ': ' + o).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...o) {
    const s = new this(r);
    return o.forEach((a) => s.set(a)), s;
  }
  static accessor(r) {
    const s = (this[lg] = this[lg] = { accessors: {} }).accessors,
      a = this.prototype;
    function u(c) {
      const f = Ki(c);
      s[f] || (GR(a, c), (s[f] = !0));
    }
    return W.isArray(r) ? r.forEach(u) : u(r), this;
  }
}
Vt.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
W.reduceDescriptors(Vt.prototype, ({ value: e }, r) => {
  let o = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => e,
    set(s) {
      this[o] = s;
    },
  };
});
W.freezeMethods(Vt);
function $c(e, r) {
  const o = this || xs,
    s = r || o,
    a = Vt.from(s.headers);
  let u = s.data;
  return (
    W.forEach(e, function (f) {
      u = f.call(o, u, a.normalize(), r ? r.status : void 0);
    }),
    a.normalize(),
    u
  );
}
function Xy(e) {
  return !!(e && e.__CANCEL__);
}
function Zo(e, r, o) {
  Pe.call(this, e ?? 'canceled', Pe.ERR_CANCELED, r, o),
    (this.name = 'CanceledError');
}
W.inherits(Zo, Pe, { __CANCEL__: !0 });
function Yy(e, r, o) {
  const s = o.config.validateStatus;
  !o.status || !s || s(o.status)
    ? e(o)
    : r(
        new Pe(
          'Request failed with status code ' + o.status,
          [Pe.ERR_BAD_REQUEST, Pe.ERR_BAD_RESPONSE][
            Math.floor(o.status / 100) - 4
          ],
          o.config,
          o.request,
          o,
        ),
      );
}
function QR(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (r && r[1]) || '';
}
function XR(e, r) {
  e = e || 10;
  const o = new Array(e),
    s = new Array(e);
  let a = 0,
    u = 0,
    c;
  return (
    (r = r !== void 0 ? r : 1e3),
    function (h) {
      const m = Date.now(),
        g = s[u];
      c || (c = m), (o[a] = h), (s[a] = m);
      let v = u,
        C = 0;
      for (; v !== a; ) (C += o[v++]), (v = v % e);
      if (((a = (a + 1) % e), a === u && (u = (u + 1) % e), m - c < r)) return;
      const k = g && m - g;
      return k ? Math.round((C * 1e3) / k) : void 0;
    }
  );
}
function YR(e, r) {
  let o = 0,
    s = 1e3 / r,
    a,
    u;
  const c = (m, g = Date.now()) => {
    (o = g), (a = null), u && (clearTimeout(u), (u = null)), e.apply(null, m);
  };
  return [
    (...m) => {
      const g = Date.now(),
        v = g - o;
      v >= s
        ? c(m, g)
        : ((a = m),
          u ||
            (u = setTimeout(() => {
              (u = null), c(a);
            }, s - v)));
    },
    () => a && c(a),
  ];
}
const nl = (e, r, o = 3) => {
    let s = 0;
    const a = XR(50, 250);
    return YR((u) => {
      const c = u.loaded,
        f = u.lengthComputable ? u.total : void 0,
        h = c - s,
        m = a(h),
        g = c <= f;
      s = c;
      const v = {
        loaded: c,
        total: f,
        progress: f ? c / f : void 0,
        bytes: h,
        rate: m || void 0,
        estimated: m && f && g ? (f - c) / m : void 0,
        event: u,
        lengthComputable: f != null,
        [r ? 'download' : 'upload']: !0,
      };
      e(v);
    }, o);
  },
  ug = (e, r) => {
    const o = e != null;
    return [(s) => r[0]({ lengthComputable: o, total: e, loaded: s }), r[1]];
  },
  cg =
    (e) =>
    (...r) =>
      W.asap(() => e(...r)),
  JR = Lt.hasStandardBrowserEnv
    ? ((e, r) => (o) => (
        (o = new URL(o, Lt.origin)),
        e.protocol === o.protocol &&
          e.host === o.host &&
          (r || e.port === o.port)
      ))(
        new URL(Lt.origin),
        Lt.navigator && /(msie|trident)/i.test(Lt.navigator.userAgent),
      )
    : () => !0,
  ZR = Lt.hasStandardBrowserEnv
    ? {
        write(e, r, o, s, a, u) {
          const c = [e + '=' + encodeURIComponent(r)];
          W.isNumber(o) && c.push('expires=' + new Date(o).toGMTString()),
            W.isString(s) && c.push('path=' + s),
            W.isString(a) && c.push('domain=' + a),
            u === !0 && c.push('secure'),
            (document.cookie = c.join('; '));
        },
        read(e) {
          const r = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function eP(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function tP(e, r) {
  return r ? e.replace(/\/?\/$/, '') + '/' + r.replace(/^\/+/, '') : e;
}
function Jy(e, r) {
  return e && !eP(r) ? tP(e, r) : r;
}
const dg = (e) => (e instanceof Vt ? { ...e } : e);
function ro(e, r) {
  r = r || {};
  const o = {};
  function s(m, g, v, C) {
    return W.isPlainObject(m) && W.isPlainObject(g)
      ? W.merge.call({ caseless: C }, m, g)
      : W.isPlainObject(g)
      ? W.merge({}, g)
      : W.isArray(g)
      ? g.slice()
      : g;
  }
  function a(m, g, v, C) {
    if (W.isUndefined(g)) {
      if (!W.isUndefined(m)) return s(void 0, m, v, C);
    } else return s(m, g, v, C);
  }
  function u(m, g) {
    if (!W.isUndefined(g)) return s(void 0, g);
  }
  function c(m, g) {
    if (W.isUndefined(g)) {
      if (!W.isUndefined(m)) return s(void 0, m);
    } else return s(void 0, g);
  }
  function f(m, g, v) {
    if (v in r) return s(m, g);
    if (v in e) return s(void 0, m);
  }
  const h = {
    url: u,
    method: u,
    data: u,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    withXSRFToken: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: f,
    headers: (m, g, v) => a(dg(m), dg(g), v, !0),
  };
  return (
    W.forEach(Object.keys(Object.assign({}, e, r)), function (g) {
      const v = h[g] || a,
        C = v(e[g], r[g], g);
      (W.isUndefined(C) && v !== f) || (o[g] = C);
    }),
    o
  );
}
const Zy = (e) => {
    const r = ro({}, e);
    let {
      data: o,
      withXSRFToken: s,
      xsrfHeaderName: a,
      xsrfCookieName: u,
      headers: c,
      auth: f,
    } = r;
    (r.headers = c = Vt.from(c)),
      (r.url = qy(Jy(r.baseURL, r.url), e.params, e.paramsSerializer)),
      f &&
        c.set(
          'Authorization',
          'Basic ' +
            btoa(
              (f.username || '') +
                ':' +
                (f.password ? unescape(encodeURIComponent(f.password)) : ''),
            ),
        );
    let h;
    if (W.isFormData(o)) {
      if (Lt.hasStandardBrowserEnv || Lt.hasStandardBrowserWebWorkerEnv)
        c.setContentType(void 0);
      else if ((h = c.getContentType()) !== !1) {
        const [m, ...g] = h
          ? h
              .split(';')
              .map((v) => v.trim())
              .filter(Boolean)
          : [];
        c.setContentType([m || 'multipart/form-data', ...g].join('; '));
      }
    }
    if (
      Lt.hasStandardBrowserEnv &&
      (s && W.isFunction(s) && (s = s(r)), s || (s !== !1 && JR(r.url)))
    ) {
      const m = a && u && ZR.read(u);
      m && c.set(a, m);
    }
    return r;
  },
  nP = typeof XMLHttpRequest < 'u',
  rP =
    nP &&
    function (e) {
      return new Promise(function (o, s) {
        const a = Zy(e);
        let u = a.data;
        const c = Vt.from(a.headers).normalize();
        let { responseType: f, onUploadProgress: h, onDownloadProgress: m } = a,
          g,
          v,
          C,
          k,
          w;
        function b() {
          k && k(),
            w && w(),
            a.cancelToken && a.cancelToken.unsubscribe(g),
            a.signal && a.signal.removeEventListener('abort', g);
        }
        let E = new XMLHttpRequest();
        E.open(a.method.toUpperCase(), a.url, !0), (E.timeout = a.timeout);
        function R() {
          if (!E) return;
          const P = Vt.from(
              'getAllResponseHeaders' in E && E.getAllResponseHeaders(),
            ),
            O = {
              data:
                !f || f === 'text' || f === 'json'
                  ? E.responseText
                  : E.response,
              status: E.status,
              statusText: E.statusText,
              headers: P,
              config: e,
              request: E,
            };
          Yy(
            function (z) {
              o(z), b();
            },
            function (z) {
              s(z), b();
            },
            O,
          ),
            (E = null);
        }
        'onloadend' in E
          ? (E.onloadend = R)
          : (E.onreadystatechange = function () {
              !E ||
                E.readyState !== 4 ||
                (E.status === 0 &&
                  !(E.responseURL && E.responseURL.indexOf('file:') === 0)) ||
                setTimeout(R);
            }),
          (E.onabort = function () {
            E &&
              (s(new Pe('Request aborted', Pe.ECONNABORTED, e, E)), (E = null));
          }),
          (E.onerror = function () {
            s(new Pe('Network Error', Pe.ERR_NETWORK, e, E)), (E = null);
          }),
          (E.ontimeout = function () {
            let I = a.timeout
              ? 'timeout of ' + a.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const O = a.transitional || Gy;
            a.timeoutErrorMessage && (I = a.timeoutErrorMessage),
              s(
                new Pe(
                  I,
                  O.clarifyTimeoutError ? Pe.ETIMEDOUT : Pe.ECONNABORTED,
                  e,
                  E,
                ),
              ),
              (E = null);
          }),
          u === void 0 && c.setContentType(null),
          'setRequestHeader' in E &&
            W.forEach(c.toJSON(), function (I, O) {
              E.setRequestHeader(O, I);
            }),
          W.isUndefined(a.withCredentials) ||
            (E.withCredentials = !!a.withCredentials),
          f && f !== 'json' && (E.responseType = a.responseType),
          m && (([C, w] = nl(m, !0)), E.addEventListener('progress', C)),
          h &&
            E.upload &&
            (([v, k] = nl(h)),
            E.upload.addEventListener('progress', v),
            E.upload.addEventListener('loadend', k)),
          (a.cancelToken || a.signal) &&
            ((g = (P) => {
              E &&
                (s(!P || P.type ? new Zo(null, e, E) : P),
                E.abort(),
                (E = null));
            }),
            a.cancelToken && a.cancelToken.subscribe(g),
            a.signal &&
              (a.signal.aborted ? g() : a.signal.addEventListener('abort', g)));
        const N = QR(a.url);
        if (N && Lt.protocols.indexOf(N) === -1) {
          s(new Pe('Unsupported protocol ' + N + ':', Pe.ERR_BAD_REQUEST, e));
          return;
        }
        E.send(u || null);
      });
    },
  oP = (e, r) => {
    const { length: o } = (e = e ? e.filter(Boolean) : []);
    if (r || o) {
      let s = new AbortController(),
        a;
      const u = function (m) {
        if (!a) {
          (a = !0), f();
          const g = m instanceof Error ? m : this.reason;
          s.abort(
            g instanceof Pe ? g : new Zo(g instanceof Error ? g.message : g),
          );
        }
      };
      let c =
        r &&
        setTimeout(() => {
          (c = null), u(new Pe(`timeout ${r} of ms exceeded`, Pe.ETIMEDOUT));
        }, r);
      const f = () => {
        e &&
          (c && clearTimeout(c),
          (c = null),
          e.forEach((m) => {
            m.unsubscribe
              ? m.unsubscribe(u)
              : m.removeEventListener('abort', u);
          }),
          (e = null));
      };
      e.forEach((m) => m.addEventListener('abort', u));
      const { signal: h } = s;
      return (h.unsubscribe = () => W.asap(f)), h;
    }
  },
  iP = function* (e, r) {
    let o = e.byteLength;
    if (o < r) {
      yield e;
      return;
    }
    let s = 0,
      a;
    for (; s < o; ) (a = s + r), yield e.slice(s, a), (s = a);
  },
  sP = async function* (e, r) {
    for await (const o of aP(e)) yield* iP(o, r);
  },
  aP = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const r = e.getReader();
    try {
      for (;;) {
        const { done: o, value: s } = await r.read();
        if (o) break;
        yield s;
      }
    } finally {
      await r.cancel();
    }
  },
  fg = (e, r, o, s) => {
    const a = sP(e, r);
    let u = 0,
      c,
      f = (h) => {
        c || ((c = !0), s && s(h));
      };
    return new ReadableStream(
      {
        async pull(h) {
          try {
            const { done: m, value: g } = await a.next();
            if (m) {
              f(), h.close();
              return;
            }
            let v = g.byteLength;
            if (o) {
              let C = (u += v);
              o(C);
            }
            h.enqueue(new Uint8Array(g));
          } catch (m) {
            throw (f(m), m);
          }
        },
        cancel(h) {
          return f(h), a.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  Il =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  e0 = Il && typeof ReadableStream == 'function',
  lP =
    Il &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (r) =>
            e.encode(r)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  t0 = (e, ...r) => {
    try {
      return !!e(...r);
    } catch {
      return !1;
    }
  },
  uP =
    e0 &&
    t0(() => {
      let e = !1;
      const r = new Request(Lt.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !r;
    }),
  pg = 64 * 1024,
  ad = e0 && t0(() => W.isReadableStream(new Response('').body)),
  rl = { stream: ad && ((e) => e.body) };
Il &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((r) => {
      !rl[r] &&
        (rl[r] = W.isFunction(e[r])
          ? (o) => o[r]()
          : (o, s) => {
              throw new Pe(
                `Response type '${r}' is not supported`,
                Pe.ERR_NOT_SUPPORT,
                s,
              );
            });
    });
  })(new Response());
const cP = async (e) => {
    if (e == null) return 0;
    if (W.isBlob(e)) return e.size;
    if (W.isSpecCompliantForm(e))
      return (
        await new Request(Lt.origin, { method: 'POST', body: e }).arrayBuffer()
      ).byteLength;
    if (W.isArrayBufferView(e) || W.isArrayBuffer(e)) return e.byteLength;
    if ((W.isURLSearchParams(e) && (e = e + ''), W.isString(e)))
      return (await lP(e)).byteLength;
  },
  dP = async (e, r) => {
    const o = W.toFiniteNumber(e.getContentLength());
    return o ?? cP(r);
  },
  fP =
    Il &&
    (async (e) => {
      let {
        url: r,
        method: o,
        data: s,
        signal: a,
        cancelToken: u,
        timeout: c,
        onDownloadProgress: f,
        onUploadProgress: h,
        responseType: m,
        headers: g,
        withCredentials: v = 'same-origin',
        fetchOptions: C,
      } = Zy(e);
      m = m ? (m + '').toLowerCase() : 'text';
      let k = oP([a, u && u.toAbortSignal()], c),
        w;
      const b =
        k &&
        k.unsubscribe &&
        (() => {
          k.unsubscribe();
        });
      let E;
      try {
        if (
          h &&
          uP &&
          o !== 'get' &&
          o !== 'head' &&
          (E = await dP(g, s)) !== 0
        ) {
          let O = new Request(r, { method: 'POST', body: s, duplex: 'half' }),
            _;
          if (
            (W.isFormData(s) &&
              (_ = O.headers.get('content-type')) &&
              g.setContentType(_),
            O.body)
          ) {
            const [z, V] = ug(E, nl(cg(h)));
            s = fg(O.body, pg, z, V);
          }
        }
        W.isString(v) || (v = v ? 'include' : 'omit');
        const R = 'credentials' in Request.prototype;
        w = new Request(r, {
          ...C,
          signal: k,
          method: o.toUpperCase(),
          headers: g.normalize().toJSON(),
          body: s,
          duplex: 'half',
          credentials: R ? v : void 0,
        });
        let N = await fetch(w);
        const P = ad && (m === 'stream' || m === 'response');
        if (ad && (f || (P && b))) {
          const O = {};
          ['status', 'statusText', 'headers'].forEach((G) => {
            O[G] = N[G];
          });
          const _ = W.toFiniteNumber(N.headers.get('content-length')),
            [z, V] = (f && ug(_, nl(cg(f), !0))) || [];
          N = new Response(
            fg(N.body, pg, z, () => {
              V && V(), b && b();
            }),
            O,
          );
        }
        m = m || 'text';
        let I = await rl[W.findKey(rl, m) || 'text'](N, e);
        return (
          !P && b && b(),
          await new Promise((O, _) => {
            Yy(O, _, {
              data: I,
              headers: Vt.from(N.headers),
              status: N.status,
              statusText: N.statusText,
              config: e,
              request: w,
            });
          })
        );
      } catch (R) {
        throw (
          (b && b(),
          R && R.name === 'TypeError' && /fetch/i.test(R.message)
            ? Object.assign(new Pe('Network Error', Pe.ERR_NETWORK, e, w), {
                cause: R.cause || R,
              })
            : Pe.from(R, R && R.code, e, w))
        );
      }
    }),
  ld = { http: PR, xhr: rP, fetch: fP };
W.forEach(ld, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: r });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: r });
  }
});
const hg = (e) => `- ${e}`,
  pP = (e) => W.isFunction(e) || e === null || e === !1,
  n0 = {
    getAdapter: (e) => {
      e = W.isArray(e) ? e : [e];
      const { length: r } = e;
      let o, s;
      const a = {};
      for (let u = 0; u < r; u++) {
        o = e[u];
        let c;
        if (
          ((s = o),
          !pP(o) && ((s = ld[(c = String(o)).toLowerCase()]), s === void 0))
        )
          throw new Pe(`Unknown adapter '${c}'`);
        if (s) break;
        a[c || '#' + u] = s;
      }
      if (!s) {
        const u = Object.entries(a).map(
          ([f, h]) =>
            `adapter ${f} ` +
            (h === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        );
        let c = r
          ? u.length > 1
            ? `since :
` +
              u.map(hg).join(`
`)
            : ' ' + hg(u[0])
          : 'as no adapter specified';
        throw new Pe(
          'There is no suitable adapter to dispatch the request ' + c,
          'ERR_NOT_SUPPORT',
        );
      }
      return s;
    },
    adapters: ld,
  };
function Mc(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Zo(null, e);
}
function mg(e) {
  return (
    Mc(e),
    (e.headers = Vt.from(e.headers)),
    (e.data = $c.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    n0
      .getAdapter(e.adapter || xs.adapter)(e)
      .then(
        function (s) {
          return (
            Mc(e),
            (s.data = $c.call(e, e.transformResponse, s)),
            (s.headers = Vt.from(s.headers)),
            s
          );
        },
        function (s) {
          return (
            Xy(s) ||
              (Mc(e),
              s &&
                s.response &&
                ((s.response.data = $c.call(
                  e,
                  e.transformResponse,
                  s.response,
                )),
                (s.response.headers = Vt.from(s.response.headers)))),
            Promise.reject(s)
          );
        },
      )
  );
}
const r0 = '1.7.9',
  Ol = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, r) => {
    Ol[e] = function (s) {
      return typeof s === e || 'a' + (r < 1 ? 'n ' : ' ') + e;
    };
  },
);
const gg = {};
Ol.transitional = function (r, o, s) {
  function a(u, c) {
    return (
      '[Axios v' +
      r0 +
      "] Transitional option '" +
      u +
      "'" +
      c +
      (s ? '. ' + s : '')
    );
  }
  return (u, c, f) => {
    if (r === !1)
      throw new Pe(
        a(c, ' has been removed' + (o ? ' in ' + o : '')),
        Pe.ERR_DEPRECATED,
      );
    return (
      o &&
        !gg[c] &&
        ((gg[c] = !0),
        console.warn(
          a(
            c,
            ' has been deprecated since v' +
              o +
              ' and will be removed in the near future',
          ),
        )),
      r ? r(u, c, f) : !0
    );
  };
};
Ol.spelling = function (r) {
  return (o, s) => (console.warn(`${s} is likely a misspelling of ${r}`), !0);
};
function hP(e, r, o) {
  if (typeof e != 'object')
    throw new Pe('options must be an object', Pe.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let a = s.length;
  for (; a-- > 0; ) {
    const u = s[a],
      c = r[u];
    if (c) {
      const f = e[u],
        h = f === void 0 || c(f, u, e);
      if (h !== !0)
        throw new Pe('option ' + u + ' must be ' + h, Pe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0) throw new Pe('Unknown option ' + u, Pe.ERR_BAD_OPTION);
  }
}
const Ga = { assertOptions: hP, validators: Ol },
  Fn = Ga.validators;
class eo {
  constructor(r) {
    (this.defaults = r),
      (this.interceptors = { request: new ag(), response: new ag() });
  }
  async request(r, o) {
    try {
      return await this._request(r, o);
    } catch (s) {
      if (s instanceof Error) {
        let a = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(a)
          : (a = new Error());
        const u = a.stack ? a.stack.replace(/^.+\n/, '') : '';
        try {
          s.stack
            ? u &&
              !String(s.stack).endsWith(u.replace(/^.+\n.+\n/, '')) &&
              (s.stack +=
                `
` + u)
            : (s.stack = u);
        } catch {}
      }
      throw s;
    }
  }
  _request(r, o) {
    typeof r == 'string' ? ((o = o || {}), (o.url = r)) : (o = r || {}),
      (o = ro(this.defaults, o));
    const { transitional: s, paramsSerializer: a, headers: u } = o;
    s !== void 0 &&
      Ga.assertOptions(
        s,
        {
          silentJSONParsing: Fn.transitional(Fn.boolean),
          forcedJSONParsing: Fn.transitional(Fn.boolean),
          clarifyTimeoutError: Fn.transitional(Fn.boolean),
        },
        !1,
      ),
      a != null &&
        (W.isFunction(a)
          ? (o.paramsSerializer = { serialize: a })
          : Ga.assertOptions(
              a,
              { encode: Fn.function, serialize: Fn.function },
              !0,
            )),
      Ga.assertOptions(
        o,
        {
          baseUrl: Fn.spelling('baseURL'),
          withXsrfToken: Fn.spelling('withXSRFToken'),
        },
        !0,
      ),
      (o.method = (o.method || this.defaults.method || 'get').toLowerCase());
    let c = u && W.merge(u.common, u[o.method]);
    u &&
      W.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (w) => {
          delete u[w];
        },
      ),
      (o.headers = Vt.concat(c, u));
    const f = [];
    let h = !0;
    this.interceptors.request.forEach(function (b) {
      (typeof b.runWhen == 'function' && b.runWhen(o) === !1) ||
        ((h = h && b.synchronous), f.unshift(b.fulfilled, b.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function (b) {
      m.push(b.fulfilled, b.rejected);
    });
    let g,
      v = 0,
      C;
    if (!h) {
      const w = [mg.bind(this), void 0];
      for (
        w.unshift.apply(w, f),
          w.push.apply(w, m),
          C = w.length,
          g = Promise.resolve(o);
        v < C;

      )
        g = g.then(w[v++], w[v++]);
      return g;
    }
    C = f.length;
    let k = o;
    for (v = 0; v < C; ) {
      const w = f[v++],
        b = f[v++];
      try {
        k = w(k);
      } catch (E) {
        b.call(this, E);
        break;
      }
    }
    try {
      g = mg.call(this, k);
    } catch (w) {
      return Promise.reject(w);
    }
    for (v = 0, C = m.length; v < C; ) g = g.then(m[v++], m[v++]);
    return g;
  }
  getUri(r) {
    r = ro(this.defaults, r);
    const o = Jy(r.baseURL, r.url);
    return qy(o, r.params, r.paramsSerializer);
  }
}
W.forEach(['delete', 'get', 'head', 'options'], function (r) {
  eo.prototype[r] = function (o, s) {
    return this.request(
      ro(s || {}, { method: r, url: o, data: (s || {}).data }),
    );
  };
});
W.forEach(['post', 'put', 'patch'], function (r) {
  function o(s) {
    return function (u, c, f) {
      return this.request(
        ro(f || {}, {
          method: r,
          headers: s ? { 'Content-Type': 'multipart/form-data' } : {},
          url: u,
          data: c,
        }),
      );
    };
  }
  (eo.prototype[r] = o()), (eo.prototype[r + 'Form'] = o(!0));
});
class Yd {
  constructor(r) {
    if (typeof r != 'function')
      throw new TypeError('executor must be a function.');
    let o;
    this.promise = new Promise(function (u) {
      o = u;
    });
    const s = this;
    this.promise.then((a) => {
      if (!s._listeners) return;
      let u = s._listeners.length;
      for (; u-- > 0; ) s._listeners[u](a);
      s._listeners = null;
    }),
      (this.promise.then = (a) => {
        let u;
        const c = new Promise((f) => {
          s.subscribe(f), (u = f);
        }).then(a);
        return (
          (c.cancel = function () {
            s.unsubscribe(u);
          }),
          c
        );
      }),
      r(function (u, c, f) {
        s.reason || ((s.reason = new Zo(u, c, f)), o(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : (this._listeners = [r]);
  }
  unsubscribe(r) {
    if (!this._listeners) return;
    const o = this._listeners.indexOf(r);
    o !== -1 && this._listeners.splice(o, 1);
  }
  toAbortSignal() {
    const r = new AbortController(),
      o = (s) => {
        r.abort(s);
      };
    return (
      this.subscribe(o),
      (r.signal.unsubscribe = () => this.unsubscribe(o)),
      r.signal
    );
  }
  static source() {
    let r;
    return {
      token: new Yd(function (a) {
        r = a;
      }),
      cancel: r,
    };
  }
}
function mP(e) {
  return function (o) {
    return e.apply(null, o);
  };
}
function gP(e) {
  return W.isObject(e) && e.isAxiosError === !0;
}
const ud = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ud).forEach(([e, r]) => {
  ud[r] = e;
});
function o0(e) {
  const r = new eo(e),
    o = My(eo.prototype.request, r);
  return (
    W.extend(o, eo.prototype, r, { allOwnKeys: !0 }),
    W.extend(o, r, null, { allOwnKeys: !0 }),
    (o.create = function (a) {
      return o0(ro(e, a));
    }),
    o
  );
}
const mt = o0(xs);
mt.Axios = eo;
mt.CanceledError = Zo;
mt.CancelToken = Yd;
mt.isCancel = Xy;
mt.VERSION = r0;
mt.toFormData = Tl;
mt.AxiosError = Pe;
mt.Cancel = mt.CanceledError;
mt.all = function (r) {
  return Promise.all(r);
};
mt.spread = mP;
mt.isAxiosError = gP;
mt.mergeConfig = ro;
mt.AxiosHeaders = Vt;
mt.formToJSON = (e) => Qy(W.isHTMLForm(e) ? new FormData(e) : e);
mt.getAdapter = n0.getAdapter;
mt.HttpStatusCode = ud;
mt.default = mt;
const Fo = mt.create({
  baseURL: 'http://localhost:8080/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 1e4,
});
Fo.interceptors.request.use(
  (e) => {
    const r = localStorage.getItem('token');
    return r && (e.headers.Authorization = `Bearer ${r}`), e;
  },
  (e) => Promise.reject(e),
);
Fo.interceptors.response.use(
  (e) => e,
  (e) => {
    var r;
    return (
      ((r = e.response) == null ? void 0 : r.status) === 401 &&
        (localStorage.removeItem('token'), (window.location.href = '/login')),
      Promise.reject(e)
    );
  },
);
const yP = {
    get: async (e, r = {}) => (await Fo.get(e, r)).data,
    post: async (e, r, o = {}) => (await Fo.post(e, r, o)).data,
    put: async (e, r, o = {}) => (await Fo.put(e, r, o)).data,
    delete: async (e, r = {}) => (await Fo.delete(e, r)).data,
  },
  _c = (e) => {
    const [r, o] = S.useState(null),
      [s, a] = S.useState(!0),
      [u, c] = S.useState(null);
    return (
      S.useEffect(() => {
        (async () => {
          try {
            const h = await yP.get(e);
            o(h);
          } catch {
            c('Failed to fetch data.');
          } finally {
            a(!1);
          }
        })();
      }, [e]),
      { data: r, loading: s, error: u }
    );
  },
  vP = () => {
    const [e, r] = S.useState(null);
    return (
      S.useEffect(() => {
        const a = localStorage.getItem('user');
        a && r(JSON.parse(a));
      }, []),
      {
        user: e,
        login: (a) => {
          r(a), localStorage.setItem('user', JSON.stringify(a));
        },
        logout: () => {
          r(null), localStorage.removeItem('user');
        },
      }
    );
  },
  xP = ({ showDate: e = !1 }) => {
    const [r, o] = S.useState(new Date());
    return (
      S.useEffect(() => {
        const s = setInterval(() => o(new Date()), 1e3);
        return () => clearInterval(s);
      }, []),
      M.jsxs('div', {
        className: 'clock-container',
        children: [
          e &&
            M.jsx('div', {
              className: 'date',
              children: r.toLocaleDateString(),
            }),
          M.jsx('div', { className: 'time', children: r.toLocaleTimeString() }),
        ],
      })
    );
  },
  SP = () => {
    const { login: e } = vP(),
      [r, o] = S.useState({ username: '', password: '' }),
      [s, a] = S.useState(''),
      [u, c] = S.useState(!1),
      [f, h] = S.useState(!1),
      { data: m, loading: g, error: v } = _c('/dashboard/reminders'),
      { data: C, loading: k, error: w } = _c('/dashboard/holidays'),
      { data: b, loading: E, error: R } = _c('/dashboard/birthdays'),
      N = () => c((x) => !x),
      P = (x) => {
        const { id: j, value: Z } = x.target;
        o((Y) => ({ ...Y, [j]: Z }));
      },
      I = () =>
        !r.username || !r.password
          ? (a('Both username and password are required.'), !1)
          : !0,
      O = async () => {
        if (I()) {
          h(!0), a('');
          try {
            const x = await fetch('/auth/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(r),
            });
            if (!x.ok) throw new Error('Invalid username or password.');
            const j = await x.json();
            e(j.token), (window.location.href = '/post-login');
          } catch {
            a('Invalid username or password.');
          } finally {
            h(!1);
          }
        }
      },
      _ = [
        { text: 'Home', icon: M.jsx(B2, {}), link: '/' },
        { text: 'About', icon: M.jsx(D2, {}), link: '/about' },
        { text: 'Contact', icon: M.jsx(j2, {}), link: '/contact' },
      ],
      z = (x, j, Z) =>
        M.jsxs(Xr, {
          mb: 3,
          children: [
            M.jsx(cn, { variant: 'h6', gutterBottom: !0, children: x }),
            M.jsx(rd, {
              children:
                j != null && j.length
                  ? j.map((Y, ne) =>
                      M.jsx(
                        qm,
                        {
                          children: M.jsx(Gm, {
                            primary: `${Y.empname} (${Y.birth_date})`,
                            secondary: Y.emp_des,
                          }),
                        },
                        ne,
                      ),
                    )
                  : M.jsx(cn, {
                      variant: 'body2',
                      color: 'textSecondary',
                      children: Z,
                    }),
            }),
          ],
        }),
      V = g || k || E,
      G = v || w || R;
    return M.jsxs(ky, {
      maxWidth: 'md',
      sx: { mt: 5 },
      children: [
        M.jsx(lk, {
          anchor: 'left',
          open: u,
          onClose: N,
          children: M.jsxs(Xr, {
            sx: { width: 250 },
            children: [
              M.jsx(cn, {
                variant: 'h6',
                sx: { p: 2, textAlign: 'center' },
                children: 'Menu',
              }),
              M.jsx(ed, {}),
              M.jsx(rd, {
                children: _.map((x, j) =>
                  M.jsxs(
                    qm,
                    {
                      component: 'a',
                      href: x.link,
                      sx: { textDecoration: 'none', color: 'inherit' },
                      children: [
                        x.icon && M.jsx(Gk, { children: x.icon }),
                        M.jsx(Gm, { primary: x.text }),
                      ],
                    },
                    j,
                  ),
                ),
              }),
            ],
          }),
        }),
        M.jsx(by, { onClick: N, sx: { mb: 3 }, children: M.jsx(F2, {}) }),
        M.jsx(Xr, { mb: 5, children: M.jsx(xP, {}) }),
        V
          ? M.jsx(Xr, { textAlign: 'center', mb: 3, children: M.jsx(Dm, {}) })
          : M.jsxs(M.Fragment, {
              children: [
                z('Reminders', m, 'No reminders available'),
                z('Birthdays', b, 'No birthdays available'),
                z('Holidays', C, 'No holidays available'),
              ],
            }),
        G &&
          M.jsx($m, { severity: 'error', children: G || 'An error occurred.' }),
        M.jsxs(Xr, {
          mt: 5,
          children: [
            M.jsx(cn, { variant: 'h5', gutterBottom: !0, children: 'Login' }),
            M.jsx(ng, {
              fullWidth: !0,
              id: 'username',
              label: 'Username',
              variant: 'outlined',
              margin: 'normal',
              value: r.username,
              onChange: P,
            }),
            M.jsx(ng, {
              fullWidth: !0,
              id: 'password',
              label: 'Password',
              type: 'password',
              variant: 'outlined',
              margin: 'normal',
              value: r.password,
              onChange: P,
            }),
            s && M.jsx($m, { severity: 'error', sx: { mt: 2 }, children: s }),
            M.jsx(Va, {
              fullWidth: !0,
              variant: 'contained',
              color: 'primary',
              sx: { mt: 3 },
              onClick: O,
              disabled: f,
              children: f ? M.jsx(Dm, { size: 24 }) : 'Login',
            }),
          ],
        }),
      ],
    });
  },
  wP = () => {
    const e = md(),
      r = { name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' },
      o = (s) => {
        e(s);
      };
    return M.jsxs(ky, {
      maxWidth: 'sm',
      sx: { textAlign: 'center', mt: 5 },
      children: [
        M.jsxs(cn, {
          variant: 'h4',
          gutterBottom: !0,
          children: ['Welcome, ', r.name, '!'],
        }),
        M.jsxs(cn, {
          variant: 'body1',
          gutterBottom: !0,
          children: ['Your email: ', r.email],
        }),
        M.jsxs(cn, {
          variant: 'body1',
          gutterBottom: !0,
          children: ['Role: ', r.role],
        }),
        M.jsxs(Xr, {
          mt: 4,
          children: [
            M.jsx(cn, {
              variant: 'h6',
              gutterBottom: !0,
              children: 'Quick Actions',
            }),
            M.jsxs(Xr, {
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              children: [
                M.jsx(Va, {
                  variant: 'contained',
                  color: 'primary',
                  onClick: () => o('/dashboard'),
                  children: 'Go to Dashboard',
                }),
                M.jsx(Va, {
                  variant: 'contained',
                  color: 'secondary',
                  onClick: () => o('/profile'),
                  children: 'View Profile',
                }),
                M.jsx(Va, {
                  variant: 'outlined',
                  color: 'primary',
                  onClick: () => o('/settings'),
                  children: 'Settings',
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  CP = () =>
    M.jsx(Ex, {
      children: M.jsxs(ex, {
        children: [
          M.jsx(za, {
            path: '/',
            element: M.jsx(J1, { to: '/login', replace: !0 }),
          }),
          M.jsx(za, { path: '/login', element: M.jsx(SP, {}) }),
          M.jsx(za, { path: '/dashboard', element: M.jsx(wP, {}) }),
        ],
      }),
    }),
  yg = document.getElementById('root');
yg
  ? u1.createRoot(yg).render(M.jsx(bn.StrictMode, { children: M.jsx(CP, {}) }))
  : console.error('Root element not found');
//# sourceMappingURL=index-BLlcq4Mq.js.map
