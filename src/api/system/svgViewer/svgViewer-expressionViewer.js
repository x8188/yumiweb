// import axios from 'axios';
import request from '../../../utils/request.js'
// const instance = axios.create({
//   baseURL: '/dev-api',
//   timeout: 5000,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });


module.exports = function (t) {
  var n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var i = n[r] = {i: r, l: !1, exports: {}};
    return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
  }

  return e.m = t, e.c = n, e.d = function (t, n, r) {
    e.o(t, n) || Object.defineProperty(t, n, {enumerable: !0, get: r})
  }, e.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, e.t = function (t, n) {
    if (1 & n && (t = e(t)), 8 & n) return t;
    if (4 & n && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (e.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & n && "string" != typeof t) for (var i in t) e.d(r, i, function (n) {
      return t[n]
    }.bind(null, i));
    return r
  }, e.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return e.d(n, "a", n), n
  }, e.o = function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n)
  }, e.p = "", e(e.s = 12)
}([function (t, n, e) {
  "use strict";
  var r = e(3), i = e(17), o = Object.prototype.toString;

  function u(t) {
    return "[object Array]" === o.call(t)
  }

  function a(t) {
    return null !== t && "object" == typeof t
  }

  function c(t) {
    return "[object Function]" === o.call(t)
  }

  function f(t, n) {
    if (null != t) if ("object" != typeof t && (t = [t]), u(t)) for (var e = 0, r = t.length; e < r; e++) n.call(null, t[e], e, t); else for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && n.call(null, t[i], i, t)
  }

  t.exports = {
    isArray: u, isArrayBuffer: function (t) {
      return "[object ArrayBuffer]" === o.call(t)
    }, isBuffer: i, isFormData: function (t) {
      return "undefined" != typeof FormData && t instanceof FormData
    }, isArrayBufferView: function (t) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
    }, isString: function (t) {
      return "string" == typeof t
    }, isNumber: function (t) {
      return "number" == typeof t
    }, isObject: a, isUndefined: function (t) {
      return void 0 === t
    }, isDate: function (t) {
      return "[object Date]" === o.call(t)
    }, isFile: function (t) {
      return "[object File]" === o.call(t)
    }, isBlob: function (t) {
      return "[object Blob]" === o.call(t)
    }, isFunction: c, isStream: function (t) {
      return a(t) && c(t.pipe)
    }, isURLSearchParams: function (t) {
      return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
    }, isStandardBrowserEnv: function () {
      return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
    }, forEach: f, merge: function t() {
      var n = {};

      function e(e, r) {
        "object" == typeof n[r] && "object" == typeof e ? n[r] = t(n[r], e) : n[r] = e
      }

      for (var r = 0, i = arguments.length; r < i; r++) f(arguments[r], e);
      return n
    }, deepMerge: function t() {
      var n = {};

      function e(e, r) {
        "object" == typeof n[r] && "object" == typeof e ? n[r] = t(n[r], e) : n[r] = "object" == typeof e ? t({}, e) : e
      }

      for (var r = 0, i = arguments.length; r < i; r++) f(arguments[r], e);
      return n
    }, extend: function (t, n, e) {
      return f(n, function (n, i) {
        t[i] = e && "function" == typeof n ? r(n, e) : n
      }), t
    }, trim: function (t) {
      return t.replace(/^\s*/, "").replace(/\s*$/, "")
    }
  }
}, function (t, n, e) {
  "use strict";
  e.r(n);
  var r = function (t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
  }, i = function (t) {
    var n;
    return 1 === t.length && (n = t, t = function (t, e) {
      return r(n(t), e)
    }), {
      left: function (n, e, r, i) {
        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
          var o = r + i >>> 1;
          t(n[o], e) < 0 ? r = o + 1 : i = o
        }
        return r
      }, right: function (n, e, r, i) {
        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
          var o = r + i >>> 1;
          t(n[o], e) > 0 ? i = o : r = o + 1
        }
        return r
      }
    }
  };
  var o = i(r), u = o.right, a = o.left, c = u, f = function (t, n) {
    null == n && (n = s);
    for (var e = 0, r = t.length - 1, i = t[0], o = new Array(r < 0 ? 0 : r); e < r;) o[e] = n(i, i = t[++e]);
    return o
  };

  function s(t, n) {
    return [t, n]
  }

  var l = function (t, n, e) {
    var r, i, o, u, a = t.length, c = n.length, f = new Array(a * c);
    for (null == e && (e = s), r = o = 0; r < a; ++r) for (u = t[r], i = 0; i < c; ++i, ++o) f[o] = e(u, n[i]);
    return f
  }, h = function (t, n) {
    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
  }, d = function (t) {
    return null === t ? NaN : +t
  }, p = function (t, n) {
    var e, r, i = t.length, o = 0, u = -1, a = 0, c = 0;
    if (null == n) for (; ++u < i;) isNaN(e = d(t[u])) || (c += (r = e - a) * (e - (a += r / ++o))); else for (; ++u < i;) isNaN(e = d(n(t[u], u, t))) || (c += (r = e - a) * (e - (a += r / ++o)));
    if (o > 1) return c / (o - 1)
  }, v = function (t, n) {
    var e = p(t, n);
    return e ? Math.sqrt(e) : e
  }, y = function (t, n) {
    var e, r, i, o = t.length, u = -1;
    if (null == n) {
      for (; ++u < o;) if (null != (e = t[u]) && e >= e) for (r = i = e; ++u < o;) null != (e = t[u]) && (r > e && (r = e), i < e && (i = e))
    } else for (; ++u < o;) if (null != (e = n(t[u], u, t)) && e >= e) for (r = i = e; ++u < o;) null != (e = n(t[u], u, t)) && (r > e && (r = e), i < e && (i = e));
    return [r, i]
  }, g = Array.prototype, b = g.slice, m = g.map, _ = function (t) {
    return function () {
      return t
    }
  }, x = function (t) {
    return t
  }, w = function (t, n, e) {
    t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
    for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e;
    return o
  }, M = Math.sqrt(50), S = Math.sqrt(10), T = Math.sqrt(2), A = function (t, n, e) {
    var r, i, o, u, a = -1;
    if (e = +e, (t = +t) === (n = +n) && e > 0) return [t];
    if ((r = n < t) && (i = t, t = n, n = i), 0 === (u = k(t, n, e)) || !isFinite(u)) return [];
    if (u > 0) for (t = Math.ceil(t / u), n = Math.floor(n / u), o = new Array(i = Math.ceil(n - t + 1)); ++a < i;) o[a] = (t + a) * u; else for (t = Math.floor(t * u), n = Math.ceil(n * u), o = new Array(i = Math.ceil(t - n + 1)); ++a < i;) o[a] = (t - a) / u;
    return r && o.reverse(), o
  };

  function k(t, n, e) {
    var r = (n - t) / Math.max(0, e), i = Math.floor(Math.log(r) / Math.LN10), o = r / Math.pow(10, i);
    return i >= 0 ? (o >= M ? 10 : o >= S ? 5 : o >= T ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= M ? 10 : o >= S ? 5 : o >= T ? 2 : 1)
  }

  function E(t, n, e) {
    var r = Math.abs(n - t) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), o = r / i;
    return o >= M ? i *= 10 : o >= S ? i *= 5 : o >= T && (i *= 2), n < t ? -i : i
  }

  var N = function (t) {
    return Math.ceil(Math.log(t.length) / Math.LN2) + 1
  }, C = function () {
    var t = x, n = y, e = N;

    function r(r) {
      var i, o, u = r.length, a = new Array(u);
      for (i = 0; i < u; ++i) a[i] = t(r[i], i, r);
      var f = n(a), s = f[0], l = f[1], h = e(a, s, l);
      Array.isArray(h) || (h = E(s, l, h), h = w(Math.ceil(s / h) * h, l, h));
      for (var d = h.length; h[0] <= s;) h.shift(), --d;
      for (; h[d - 1] > l;) h.pop(), --d;
      var p, v = new Array(d + 1);
      for (i = 0; i <= d; ++i) (p = v[i] = []).x0 = i > 0 ? h[i - 1] : s, p.x1 = i < d ? h[i] : l;
      for (i = 0; i < u; ++i) s <= (o = a[i]) && o <= l && v[c(h, o, 0, d)].push(r[i]);
      return v
    }

    return r.value = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : _(n), r) : t
    }, r.domain = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : _([t[0], t[1]]), r) : n
    }, r.thresholds = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? _(b.call(t)) : _(t), r) : e
    }, r
  }, P = function (t, n, e) {
    if (null == e && (e = d), r = t.length) {
      if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
      if (n >= 1) return +e(t[r - 1], r - 1, t);
      var r, i = (r - 1) * n, o = Math.floor(i), u = +e(t[o], o, t);
      return u + (+e(t[o + 1], o + 1, t) - u) * (i - o)
    }
  }, R = function (t, n, e) {
    return t = m.call(t, d).sort(r), Math.ceil((e - n) / (2 * (P(t, .75) - P(t, .25)) * Math.pow(t.length, -1 / 3)))
  }, O = function (t, n, e) {
    return Math.ceil((e - n) / (3.5 * v(t) * Math.pow(t.length, -1 / 3)))
  }, z = function (t, n) {
    var e, r, i = t.length, o = -1;
    if (null == n) {
      for (; ++o < i;) if (null != (e = t[o]) && e >= e) for (r = e; ++o < i;) null != (e = t[o]) && e > r && (r = e)
    } else for (; ++o < i;) if (null != (e = n(t[o], o, t)) && e >= e) for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && e > r && (r = e);
    return r
  }, L = function (t, n) {
    var e, r = t.length, i = r, o = -1, u = 0;
    if (null == n) for (; ++o < r;) isNaN(e = d(t[o])) ? --i : u += e; else for (; ++o < r;) isNaN(e = d(n(t[o], o, t))) ? --i : u += e;
    if (i) return u / i
  }, U = function (t, n) {
    var e, i = t.length, o = -1, u = [];
    if (null == n) for (; ++o < i;) isNaN(e = d(t[o])) || u.push(e); else for (; ++o < i;) isNaN(e = d(n(t[o], o, t))) || u.push(e);
    return P(u.sort(r), .5)
  }, j = function (t) {
    for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i;) u += t[o].length;
    for (e = new Array(u); --i >= 0;) for (n = (r = t[i]).length; --n >= 0;) e[--u] = r[n];
    return e
  }, D = function (t, n) {
    var e, r, i = t.length, o = -1;
    if (null == n) {
      for (; ++o < i;) if (null != (e = t[o]) && e >= e) for (r = e; ++o < i;) null != (e = t[o]) && r > e && (r = e)
    } else for (; ++o < i;) if (null != (e = n(t[o], o, t)) && e >= e) for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && r > e && (r = e);
    return r
  }, q = function (t, n) {
    for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]];
    return r
  }, B = function (t, n) {
    if (e = t.length) {
      var e, i, o = 0, u = 0, a = t[u];
      for (null == n && (n = r); ++o < e;) (n(i = t[o], a) < 0 || 0 !== n(a, a)) && (a = i, u = o);
      return 0 === n(a, a) ? u : void 0
    }
  }, I = function (t, n, e) {
    for (var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o;) i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r;
    return t
  }, F = function (t, n) {
    var e, r = t.length, i = -1, o = 0;
    if (null == n) for (; ++i < r;) (e = +t[i]) && (o += e); else for (; ++i < r;) (e = +n(t[i], i, t)) && (o += e);
    return o
  }, Y = function (t) {
    if (!(i = t.length)) return [];
    for (var n = -1, e = D(t, H), r = new Array(e); ++n < e;) for (var i, o = -1, u = r[n] = new Array(i); ++o < i;) u[o] = t[o][n];
    return r
  };

  function H(t) {
    return t.length
  }

  var V = function () {
    return Y(arguments)
  }, X = Array.prototype.slice, G = function (t) {
    return t
  }, $ = 1, W = 2, Z = 3, Q = 4, J = 1e-6;

  function K(t) {
    return "translate(" + (t + .5) + ",0)"
  }

  function tt(t) {
    return "translate(0," + (t + .5) + ")"
  }

  function nt() {
    return !this.__axis
  }

  function et(t, n) {
    var e = [], r = null, i = null, o = 6, u = 6, a = 3, c = t === $ || t === Q ? -1 : 1,
      f = t === Q || t === W ? "x" : "y", s = t === $ || t === Z ? K : tt;

    function l(l) {
      var h = null == r ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r,
        d = null == i ? n.tickFormat ? n.tickFormat.apply(n, e) : G : i, p = Math.max(o, 0) + a, v = n.range(),
        y = +v[0] + .5, g = +v[v.length - 1] + .5, b = (n.bandwidth ? function (t) {
          var n = Math.max(0, t.bandwidth() - 1) / 2;
          return t.round() && (n = Math.round(n)), function (e) {
            return +t(e) + n
          }
        } : function (t) {
          return function (n) {
            return +t(n)
          }
        })(n.copy()), m = l.selection ? l.selection() : l, _ = m.selectAll(".domain").data([null]),
        x = m.selectAll(".tick").data(h, n).order(), w = x.exit(), M = x.enter().append("g").attr("class", "tick"),
        S = x.select("line"), T = x.select("text");
      _ = _.merge(_.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), x = x.merge(M), S = S.merge(M.append("line").attr("stroke", "currentColor").attr(f + "2", c * o)), T = T.merge(M.append("text").attr("fill", "currentColor").attr(f, c * p).attr("dy", t === $ ? "0em" : t === Z ? "0.71em" : "0.32em")), l !== m && (_ = _.transition(l), x = x.transition(l), S = S.transition(l), T = T.transition(l), w = w.transition(l).attr("opacity", J).attr("transform", function (t) {
        return isFinite(t = b(t)) ? s(t) : this.getAttribute("transform")
      }), M.attr("opacity", J).attr("transform", function (t) {
        var n = this.parentNode.__axis;
        return s(n && isFinite(n = n(t)) ? n : b(t))
      })), w.remove(), _.attr("d", t === Q || t == W ? u ? "M" + c * u + "," + y + "H0.5V" + g + "H" + c * u : "M0.5," + y + "V" + g : u ? "M" + y + "," + c * u + "V0.5H" + g + "V" + c * u : "M" + y + ",0.5H" + g), x.attr("opacity", 1).attr("transform", function (t) {
        return s(b(t))
      }), S.attr(f + "2", c * o), T.attr(f, c * p).text(d), m.filter(nt).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === W ? "start" : t === Q ? "end" : "middle"), m.each(function () {
        this.__axis = b
      })
    }

    return l.scale = function (t) {
      return arguments.length ? (n = t, l) : n
    }, l.ticks = function () {
      return e = X.call(arguments), l
    }, l.tickArguments = function (t) {
      return arguments.length ? (e = null == t ? [] : X.call(t), l) : e.slice()
    }, l.tickValues = function (t) {
      return arguments.length ? (r = null == t ? null : X.call(t), l) : r && r.slice()
    }, l.tickFormat = function (t) {
      return arguments.length ? (i = t, l) : i
    }, l.tickSize = function (t) {
      return arguments.length ? (o = u = +t, l) : o
    }, l.tickSizeInner = function (t) {
      return arguments.length ? (o = +t, l) : o
    }, l.tickSizeOuter = function (t) {
      return arguments.length ? (u = +t, l) : u
    }, l.tickPadding = function (t) {
      return arguments.length ? (a = +t, l) : a
    }, l
  }

  function rt(t) {
    return et($, t)
  }

  function it(t) {
    return et(W, t)
  }

  function ot(t) {
    return et(Z, t)
  }

  function ut(t) {
    return et(Q, t)
  }

  var at = {
    value: function () {
    }
  };

  function ct() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
      r[t] = []
    }
    return new ft(r)
  }

  function ft(t) {
    this._ = t
  }

  function st(t, n) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var e = "", r = t.indexOf(".");
      if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      return {type: t, name: e}
    })
  }

  function lt(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r) if ((e = t[r]).name === n) return e.value
  }

  function ht(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) if (t[r].name === n) {
      t[r] = at, t = t.slice(0, r).concat(t.slice(r + 1));
      break
    }
    return null != e && t.push({name: n, value: e}), t
  }

  ft.prototype = ct.prototype = {
    constructor: ft, on: function (t, n) {
      var e, r = this._, i = st(t + "", r), o = -1, u = i.length;
      if (!(arguments.length < 2)) {
        if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
        for (; ++o < u;) if (e = (t = i[o]).type) r[e] = ht(r[e], t.name, n); else if (null == n) for (e in r) r[e] = ht(r[e], t.name, null);
        return this
      }
      for (; ++o < u;) if ((e = (t = i[o]).type) && (e = lt(r[e], t.name))) return e
    }, copy: function () {
      var t = {}, n = this._;
      for (var e in n) t[e] = n[e].slice();
      return new ft(t)
    }, call: function (t, n) {
      if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
    }, apply: function (t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e)
    }
  };
  var dt = ct, pt = "http://www.w3.org/1999/xhtml", vt = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: pt,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  }, yt = function (t) {
    var n = t += "", e = n.indexOf(":");
    return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), vt.hasOwnProperty(n) ? {
      space: vt[n],
      local: t
    } : t
  };
  var gt = function (t) {
    var n = yt(t);
    return (n.local ? function (t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local)
      }
    } : function (t) {
      return function () {
        var n = this.ownerDocument, e = this.namespaceURI;
        return e === pt && n.documentElement.namespaceURI === pt ? n.createElement(t) : n.createElementNS(e, t)
      }
    })(n)
  };

  function bt() {
  }

  var mt = function (t) {
    return null == t ? bt : function () {
      return this.querySelector(t)
    }
  };

  function _t() {
    return []
  }

  var xt = function (t) {
    return null == t ? _t : function () {
      return this.querySelectorAll(t)
    }
  }, wt = function (t) {
    return function () {
      return this.matches(t)
    }
  }, Mt = function (t) {
    return new Array(t.length)
  };

  function St(t, n) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
  }

  St.prototype = {
    constructor: St, appendChild: function (t) {
      return this._parent.insertBefore(t, this._next)
    }, insertBefore: function (t, n) {
      return this._parent.insertBefore(t, n)
    }, querySelector: function (t) {
      return this._parent.querySelector(t)
    }, querySelectorAll: function (t) {
      return this._parent.querySelectorAll(t)
    }
  };
  var Tt = "$";

  function At(t, n, e, r, i, o) {
    for (var u, a = 0, c = n.length, f = o.length; a < f; ++a) (u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new St(t, o[a]);
    for (; a < c; ++a) (u = n[a]) && (i[a] = u)
  }

  function kt(t, n, e, r, i, o, u) {
    var a, c, f, s = {}, l = n.length, h = o.length, d = new Array(l);
    for (a = 0; a < l; ++a) (c = n[a]) && (d[a] = f = Tt + u.call(c, c.__data__, a, n), f in s ? i[a] = c : s[f] = c);
    for (a = 0; a < h; ++a) (c = s[f = Tt + u.call(t, o[a], a, o)]) ? (r[a] = c, c.__data__ = o[a], s[f] = null) : e[a] = new St(t, o[a]);
    for (a = 0; a < l; ++a) (c = n[a]) && s[d[a]] === c && (i[a] = c)
  }

  function Et(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
  }

  function Nt(t) {
    return function () {
      this.removeAttribute(t)
    }
  }

  function Ct(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local)
    }
  }

  function Pt(t, n) {
    return function () {
      this.setAttribute(t, n)
    }
  }

  function Rt(t, n) {
    return function () {
      this.setAttributeNS(t.space, t.local, n)
    }
  }

  function Ot(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
    }
  }

  function zt(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
    }
  }

  var Lt = function (t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
  };

  function Ut(t) {
    return function () {
      this.style.removeProperty(t)
    }
  }

  function jt(t, n, e) {
    return function () {
      this.style.setProperty(t, n, e)
    }
  }

  function Dt(t, n, e) {
    return function () {
      var r = n.apply(this, arguments);
      null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
    }
  }

  function qt(t, n) {
    return t.style.getPropertyValue(n) || Lt(t).getComputedStyle(t, null).getPropertyValue(n)
  }

  function Bt(t) {
    return function () {
      delete this[t]
    }
  }

  function It(t, n) {
    return function () {
      this[t] = n
    }
  }

  function Ft(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? delete this[t] : this[t] = e
    }
  }

  function Yt(t) {
    return t.trim().split(/^|\s+/)
  }

  function Ht(t) {
    return t.classList || new Vt(t)
  }

  function Vt(t) {
    this._node = t, this._names = Yt(t.getAttribute("class") || "")
  }

  function Xt(t, n) {
    for (var e = Ht(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
  }

  function Gt(t, n) {
    for (var e = Ht(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
  }

  function $t(t) {
    return function () {
      Xt(this, t)
    }
  }

  function Wt(t) {
    return function () {
      Gt(this, t)
    }
  }

  function Zt(t, n) {
    return function () {
      (n.apply(this, arguments) ? Xt : Gt)(this, t)
    }
  }

  Vt.prototype = {
    add: function (t) {
      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
    }, remove: function (t) {
      var n = this._names.indexOf(t);
      n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
    }, contains: function (t) {
      return this._names.indexOf(t) >= 0
    }
  };

  function Qt() {
    this.textContent = ""
  }

  function Jt(t) {
    return function () {
      this.textContent = t
    }
  }

  function Kt(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.textContent = null == n ? "" : n
    }
  }

  function tn() {
    this.innerHTML = ""
  }

  function nn(t) {
    return function () {
      this.innerHTML = t
    }
  }

  function en(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.innerHTML = null == n ? "" : n
    }
  }

  function rn() {
    this.nextSibling && this.parentNode.appendChild(this)
  }

  function on() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
  }

  function un() {
    return null
  }

  function an() {
    var t = this.parentNode;
    t && t.removeChild(this)
  }

  function cn() {
    return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
  }

  function fn() {
    return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
  }

  var sn = {}, ln = null;
  "undefined" != typeof document && ("onmouseenter" in document.documentElement || (sn = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }));

  function hn(t, n, e) {
    return t = dn(t, n, e), function (n) {
      var e = n.relatedTarget;
      e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
    }
  }

  function dn(t, n, e) {
    return function (r) {
      var i = ln;
      ln = r;
      try {
        t.call(this, this.__data__, n, e)
      } finally {
        ln = i
      }
    }
  }

  function pn(t) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var n = "", e = t.indexOf(".");
      return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {type: t, name: n}
    })
  }

  function vn(t) {
    return function () {
      var n = this.__on;
      if (n) {
        for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
        ++i ? n.length = i : delete this.__on
      }
    }
  }

  function yn(t, n, e) {
    var r = sn.hasOwnProperty(t.type) ? hn : dn;
    return function (i, o, u) {
      var a, c = this.__on, f = r(n, o, u);
      if (c) for (var s = 0, l = c.length; s < l; ++s) if ((a = c[s]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = f, a.capture = e), void (a.value = n);
      this.addEventListener(t.type, f, e), a = {
        type: t.type,
        name: t.name,
        value: n,
        listener: f,
        capture: e
      }, c ? c.push(a) : this.__on = [a]
    }
  }

  function gn(t, n, e, r) {
    var i = ln;
    t.sourceEvent = ln, ln = t;
    try {
      return n.apply(e, r)
    } finally {
      ln = i
    }
  }

  function bn(t, n, e) {
    var r = Lt(t), i = r.CustomEvent;
    "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
  }

  var mn = [null];

  function _n(t, n) {
    this._groups = t, this._parents = n
  }

  function xn() {
    return new _n([[document.documentElement]], mn)
  }

  _n.prototype = xn.prototype = {
    constructor: _n, select: function (t) {
      "function" != typeof t && (t = mt(t));
      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) for (var o, u, a = n[i], c = a.length, f = r[i] = new Array(c), s = 0; s < c; ++s) (o = a[s]) && (u = t.call(o, o.__data__, s, a)) && ("__data__" in o && (u.__data__ = o.__data__), f[s] = u);
      return new _n(r, this._parents)
    }, selectAll: function (t) {
      "function" != typeof t && (t = xt(t));
      for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o) for (var u, a = n[o], c = a.length, f = 0; f < c; ++f) (u = a[f]) && (r.push(t.call(u, u.__data__, f, a)), i.push(u));
      return new _n(r, i)
    }, filter: function (t) {
      "function" != typeof t && (t = wt(t));
      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) for (var o, u = n[i], a = u.length, c = r[i] = [], f = 0; f < a; ++f) (o = u[f]) && t.call(o, o.__data__, f, u) && c.push(o);
      return new _n(r, this._parents)
    }, data: function (t, n) {
      if (!t) return p = new Array(this.size()), s = -1, this.each(function (t) {
        p[++s] = t
      }), p;
      var e, r = n ? kt : At, i = this._parents, o = this._groups;
      "function" != typeof t && (e = t, t = function () {
        return e
      });
      for (var u = o.length, a = new Array(u), c = new Array(u), f = new Array(u), s = 0; s < u; ++s) {
        var l = i[s], h = o[s], d = h.length, p = t.call(l, l && l.__data__, s, i), v = p.length,
          y = c[s] = new Array(v), g = a[s] = new Array(v);
        r(l, h, y, g, f[s] = new Array(d), p, n);
        for (var b, m, _ = 0, x = 0; _ < v; ++_) if (b = y[_]) {
          for (_ >= x && (x = _ + 1); !(m = g[x]) && ++x < v;) ;
          b._next = m || null
        }
      }
      return (a = new _n(a, i))._enter = c, a._exit = f, a
    }, enter: function () {
      return new _n(this._enter || this._groups.map(Mt), this._parents)
    }, exit: function () {
      return new _n(this._exit || this._groups.map(Mt), this._parents)
    }, join: function (t, n, e) {
      var r = this.enter(), i = this, o = this.exit();
      return r = "function" == typeof t ? t(r) : r.append(t + ""), null != n && (i = n(i)), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i
    }, merge: function (t) {
      for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a) for (var c, f = n[a], s = e[a], l = f.length, h = u[a] = new Array(l), d = 0; d < l; ++d) (c = f[d] || s[d]) && (h[d] = c);
      for (; a < r; ++a) u[a] = n[a];
      return new _n(u, this._parents)
    }, order: function () {
      for (var t = this._groups, n = -1, e = t.length; ++n < e;) for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;) (r = i[o]) && (u && 4 ^ r.compareDocumentPosition(u) && u.parentNode.insertBefore(r, u), u = r);
      return this
    }, sort: function (t) {
      function n(n, e) {
        return n && e ? t(n.__data__, e.__data__) : !n - !e
      }

      t || (t = Et);
      for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
        for (var u, a = e[o], c = a.length, f = i[o] = new Array(c), s = 0; s < c; ++s) (u = a[s]) && (f[s] = u);
        f.sort(n)
      }
      return new _n(i, this._parents).order()
    }, call: function () {
      var t = arguments[0];
      return arguments[0] = this, t.apply(null, arguments), this
    }, nodes: function () {
      var t = new Array(this.size()), n = -1;
      return this.each(function () {
        t[++n] = this
      }), t
    }, node: function () {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n) for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
        var u = r[i];
        if (u) return u
      }
      return null
    }, size: function () {
      var t = 0;
      return this.each(function () {
        ++t
      }), t
    }, empty: function () {
      return !this.node()
    }, each: function (t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e) for (var i, o = n[e], u = 0, a = o.length; u < a; ++u) (i = o[u]) && t.call(i, i.__data__, u, o);
      return this
    }, attr: function (t, n) {
      var e = yt(t);
      if (arguments.length < 2) {
        var r = this.node();
        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
      }
      return this.each((null == n ? e.local ? Ct : Nt : "function" == typeof n ? e.local ? zt : Ot : e.local ? Rt : Pt)(e, n))
    }, style: function (t, n, e) {
      return arguments.length > 1 ? this.each((null == n ? Ut : "function" == typeof n ? Dt : jt)(t, n, null == e ? "" : e)) : qt(this.node(), t)
    }, property: function (t, n) {
      return arguments.length > 1 ? this.each((null == n ? Bt : "function" == typeof n ? Ft : It)(t, n)) : this.node()[t]
    }, classed: function (t, n) {
      var e = Yt(t + "");
      if (arguments.length < 2) {
        for (var r = Ht(this.node()), i = -1, o = e.length; ++i < o;) if (!r.contains(e[i])) return !1;
        return !0
      }
      return this.each(("function" == typeof n ? Zt : n ? $t : Wt)(e, n))
    }, text: function (t) {
      return arguments.length ? this.each(null == t ? Qt : ("function" == typeof t ? Kt : Jt)(t)) : this.node().textContent
    }, html: function (t) {
      return arguments.length ? this.each(null == t ? tn : ("function" == typeof t ? en : nn)(t)) : this.node().innerHTML
    }, raise: function () {
      return this.each(rn)
    }, lower: function () {
      return this.each(on)
    }, append: function (t) {
      var n = "function" == typeof t ? t : gt(t);
      return this.select(function () {
        return this.appendChild(n.apply(this, arguments))
      })
    }, insert: function (t, n) {
      var e = "function" == typeof t ? t : gt(t), r = null == n ? un : "function" == typeof n ? n : mt(n);
      return this.select(function () {
        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
      })
    }, remove: function () {
      return this.each(an)
    }, clone: function (t) {
      return this.select(t ? fn : cn)
    }, datum: function (t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__
    }, on: function (t, n, e) {
      var r, i, o = pn(t + ""), u = o.length;
      if (!(arguments.length < 2)) {
        for (a = n ? yn : vn, null == e && (e = !1), r = 0; r < u; ++r) this.each(a(o[r], n, e));
        return this
      }
      var a = this.node().__on;
      if (a) for (var c, f = 0, s = a.length; f < s; ++f) for (r = 0, c = a[f]; r < u; ++r) if ((i = o[r]).type === c.type && i.name === c.name) return c.value
    }, dispatch: function (t, n) {
      return this.each(("function" == typeof n ? function (t, n) {
        return function () {
          return bn(this, t, n.apply(this, arguments))
        }
      } : function (t, n) {
        return function () {
          return bn(this, t, n)
        }
      })(t, n))
    }
  };
  var wn = xn, Mn = function (t) {
    return "string" == typeof t ? new _n([[document.querySelector(t)]], [document.documentElement]) : new _n([[t]], mn)
  }, Sn = function (t) {
    return Mn(gt(t).call(document.documentElement))
  }, Tn = 0;

  function An() {
    return new kn
  }

  function kn() {
    this._ = "@" + (++Tn).toString(36)
  }

  kn.prototype = An.prototype = {
    constructor: kn, get: function (t) {
      for (var n = this._; !(n in t);) if (!(t = t.parentNode)) return;
      return t[n]
    }, set: function (t, n) {
      return t[this._] = n
    }, remove: function (t) {
      return this._ in t && delete t[this._]
    }, toString: function () {
      return this._
    }
  };
  var En = function () {
    for (var t, n = ln; t = n.sourceEvent;) n = t;
    return n
  }, Nn = function (t, n) {
    var e = t.ownerSVGElement || t;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = n.clientX, r.y = n.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
    }
    var i = t.getBoundingClientRect();
    return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
  }, Cn = function (t) {
    var n = En();
    return n.changedTouches && (n = n.changedTouches[0]), Nn(t, n)
  }, Pn = function (t) {
    return "string" == typeof t ? new _n([document.querySelectorAll(t)], [document.documentElement]) : new _n([null == t ? [] : t], mn)
  }, Rn = function (t, n, e) {
    arguments.length < 3 && (e = n, n = En().changedTouches);
    for (var r, i = 0, o = n ? n.length : 0; i < o; ++i) if ((r = n[i]).identifier === e) return Nn(t, r);
    return null
  }, On = function (t, n) {
    null == n && (n = En().touches);
    for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) i[e] = Nn(t, n[e]);
    return i
  };

  function zn() {
    ln.stopImmediatePropagation()
  }

  var Ln = function () {
    ln.preventDefault(), ln.stopImmediatePropagation()
  }, Un = function (t) {
    var n = t.document.documentElement, e = Mn(t).on("dragstart.drag", Ln, !0);
    "onselectstart" in n ? e.on("selectstart.drag", Ln, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
  };

  function jn(t, n) {
    var e = t.document.documentElement, r = Mn(t).on("dragstart.drag", null);
    n && (r.on("click.drag", Ln, !0), setTimeout(function () {
      r.on("click.drag", null)
    }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
  }

  var Dn = function (t) {
    return function () {
      return t
    }
  };

  function qn(t, n, e, r, i, o, u, a, c, f) {
    this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = u, this.dx = a, this.dy = c, this._ = f
  }

  function Bn() {
    return !ln.button
  }

  function In() {
    return this.parentNode
  }

  function Fn(t) {
    return null == t ? {x: ln.x, y: ln.y} : t
  }

  function Yn() {
    return "ontouchstart" in this
  }

  qn.prototype.on = function () {
    var t = this._.on.apply(this._, arguments);
    return t === this._ ? this : t
  };
  var Hn = function () {
    var t, n, e, r, i = Bn, o = In, u = Fn, a = Yn, c = {}, f = dt("start", "drag", "end"), s = 0, l = 0;

    function h(t) {
      t.on("mousedown.drag", d).filter(a).on("touchstart.drag", y).on("touchmove.drag", g).on("touchend.drag touchcancel.drag", b).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
    }

    function d() {
      if (!r && i.apply(this, arguments)) {
        var u = m("mouse", o.apply(this, arguments), Cn, this, arguments);
        u && (Mn(ln.view).on("mousemove.drag", p, !0).on("mouseup.drag", v, !0), Un(ln.view), zn(), e = !1, t = ln.clientX, n = ln.clientY, u("start"))
      }
    }

    function p() {
      if (Ln(), !e) {
        var r = ln.clientX - t, i = ln.clientY - n;
        e = r * r + i * i > l
      }
      c.mouse("drag")
    }

    function v() {
      Mn(ln.view).on("mousemove.drag mouseup.drag", null), jn(ln.view, e), Ln(), c.mouse("end")
    }

    function y() {
      if (i.apply(this, arguments)) {
        var t, n, e = ln.changedTouches, r = o.apply(this, arguments), u = e.length;
        for (t = 0; t < u; ++t) (n = m(e[t].identifier, r, Rn, this, arguments)) && (zn(), n("start"))
      }
    }

    function g() {
      var t, n, e = ln.changedTouches, r = e.length;
      for (t = 0; t < r; ++t) (n = c[e[t].identifier]) && (Ln(), n("drag"))
    }

    function b() {
      var t, n, e = ln.changedTouches, i = e.length;
      for (r && clearTimeout(r), r = setTimeout(function () {
        r = null
      }, 500), t = 0; t < i; ++t) (n = c[e[t].identifier]) && (zn(), n("end"))
    }

    function m(t, n, e, r, i) {
      var o, a, l, d = e(n, t), p = f.copy();
      if (gn(new qn(h, "beforestart", o, t, s, d[0], d[1], 0, 0, p), function () {
        return null != (ln.subject = o = u.apply(r, i)) && (a = o.x - d[0] || 0, l = o.y - d[1] || 0, !0)
      })) return function u(f) {
        var v, y = d;
        switch (f) {
          case"start":
            c[t] = u, v = s++;
            break;
          case"end":
            delete c[t], --s;
          case"drag":
            d = e(n, t), v = s
        }
        gn(new qn(h, f, o, t, v, d[0] + a, d[1] + l, d[0] - y[0], d[1] - y[1], p), p.apply, p, [f, r, i])
      }
    }

    return h.filter = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : Dn(!!t), h) : i
    }, h.container = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : Dn(t), h) : o
    }, h.subject = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : Dn(t), h) : u
    }, h.touchable = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : Dn(!!t), h) : a
    }, h.on = function () {
      var t = f.on.apply(f, arguments);
      return t === f ? h : t
    }, h.clickDistance = function (t) {
      return arguments.length ? (l = (t = +t) * t, h) : Math.sqrt(l)
    }, h
  }, Vn = function (t, n, e) {
    t.prototype = n.prototype = e, e.constructor = t
  };

  function Xn(t, n) {
    var e = Object.create(t.prototype);
    for (var r in n) e[r] = n[r];
    return e
  }

  function Gn() {
  }

  var $n = "\\s*([+-]?\\d+)\\s*", Wn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    Zn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Qn = /^#([0-9a-f]{3})$/, Jn = /^#([0-9a-f]{6})$/,
    Kn = new RegExp("^rgb\\(" + [$n, $n, $n] + "\\)$"), te = new RegExp("^rgb\\(" + [Zn, Zn, Zn] + "\\)$"),
    ne = new RegExp("^rgba\\(" + [$n, $n, $n, Wn] + "\\)$"), ee = new RegExp("^rgba\\(" + [Zn, Zn, Zn, Wn] + "\\)$"),
    re = new RegExp("^hsl\\(" + [Wn, Zn, Zn] + "\\)$"), ie = new RegExp("^hsla\\(" + [Wn, Zn, Zn, Wn] + "\\)$"), oe = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    };

  function ue(t) {
    var n;
    return t = (t + "").trim().toLowerCase(), (n = Qn.exec(t)) ? new le((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = Jn.exec(t)) ? ae(parseInt(n[1], 16)) : (n = Kn.exec(t)) ? new le(n[1], n[2], n[3], 1) : (n = te.exec(t)) ? new le(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = ne.exec(t)) ? ce(n[1], n[2], n[3], n[4]) : (n = ee.exec(t)) ? ce(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = re.exec(t)) ? de(n[1], n[2] / 100, n[3] / 100, 1) : (n = ie.exec(t)) ? de(n[1], n[2] / 100, n[3] / 100, n[4]) : oe.hasOwnProperty(t) ? ae(oe[t]) : "transparent" === t ? new le(NaN, NaN, NaN, 0) : null
  }

  function ae(t) {
    return new le(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
  }

  function ce(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new le(t, n, e, r)
  }

  function fe(t) {
    return t instanceof Gn || (t = ue(t)), t ? new le((t = t.rgb()).r, t.g, t.b, t.opacity) : new le
  }

  function se(t, n, e, r) {
    return 1 === arguments.length ? fe(t) : new le(t, n, e, null == r ? 1 : r)
  }

  function le(t, n, e, r) {
    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
  }

  function he(t) {
    return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
  }

  function de(t, n, e, r) {
    return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new ve(t, n, e, r)
  }

  function pe(t, n, e, r) {
    return 1 === arguments.length ? function (t) {
      if (t instanceof ve) return new ve(t.h, t.s, t.l, t.opacity);
      if (t instanceof Gn || (t = ue(t)), !t) return new ve;
      if (t instanceof ve) return t;
      var n = (t = t.rgb()).r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r),
        u = NaN, a = o - i, c = (o + i) / 2;
      return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= c < .5 ? o + i : 2 - o - i, u *= 60) : a = c > 0 && c < 1 ? 0 : u, new ve(u, a, c, t.opacity)
    }(t) : new ve(t, n, e, null == r ? 1 : r)
  }

  function ve(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
  }

  function ye(t, n, e) {
    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
  }

  Vn(Gn, ue, {
    displayable: function () {
      return this.rgb().displayable()
    }, hex: function () {
      return this.rgb().hex()
    }, toString: function () {
      return this.rgb() + ""
    }
  }), Vn(le, se, Xn(Gn, {
    brighter: function (t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new le(this.r * t, this.g * t, this.b * t, this.opacity)
    }, darker: function (t) {
      return t = null == t ? .7 : Math.pow(.7, t), new le(this.r * t, this.g * t, this.b * t, this.opacity)
    }, rgb: function () {
      return this
    }, displayable: function () {
      return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
    }, hex: function () {
      return "#" + he(this.r) + he(this.g) + he(this.b)
    }, toString: function () {
      var t = this.opacity;
      return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
    }
  })), Vn(ve, pe, Xn(Gn, {
    brighter: function (t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new ve(this.h, this.s, this.l * t, this.opacity)
    }, darker: function (t) {
      return t = null == t ? .7 : Math.pow(.7, t), new ve(this.h, this.s, this.l * t, this.opacity)
    }, rgb: function () {
      var t = this.h % 360 + 360 * (this.h < 0), n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l,
        r = e + (e < .5 ? e : 1 - e) * n, i = 2 * e - r;
      return new le(ye(t >= 240 ? t - 240 : t + 120, i, r), ye(t, i, r), ye(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
    }, displayable: function () {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
    }
  }));
  var ge = Math.PI / 180, be = 180 / Math.PI, me = .96422, _e = 1, xe = .82521, we = 4 / 29, Me = 6 / 29,
    Se = 3 * Me * Me, Te = Me * Me * Me;

  function Ae(t) {
    if (t instanceof Ne) return new Ne(t.l, t.a, t.b, t.opacity);
    if (t instanceof je) return De(t);
    t instanceof le || (t = fe(t));
    var n, e, r = Oe(t.r), i = Oe(t.g), o = Oe(t.b), u = Ce((.2225045 * r + .7168786 * i + .0606169 * o) / _e);
    return r === i && i === o ? n = e = u : (n = Ce((.4360747 * r + .3850649 * i + .1430804 * o) / me), e = Ce((.0139322 * r + .0971045 * i + .7141733 * o) / xe)), new Ne(116 * u - 16, 500 * (n - u), 200 * (u - e), t.opacity)
  }

  function ke(t, n) {
    return new Ne(t, 0, 0, null == n ? 1 : n)
  }

  function Ee(t, n, e, r) {
    return 1 === arguments.length ? Ae(t) : new Ne(t, n, e, null == r ? 1 : r)
  }

  function Ne(t, n, e, r) {
    this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
  }

  function Ce(t) {
    return t > Te ? Math.pow(t, 1 / 3) : t / Se + we
  }

  function Pe(t) {
    return t > Me ? t * t * t : Se * (t - we)
  }

  function Re(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
  }

  function Oe(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
  }

  function ze(t) {
    if (t instanceof je) return new je(t.h, t.c, t.l, t.opacity);
    if (t instanceof Ne || (t = Ae(t)), 0 === t.a && 0 === t.b) return new je(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
    var n = Math.atan2(t.b, t.a) * be;
    return new je(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
  }

  function Le(t, n, e, r) {
    return 1 === arguments.length ? ze(t) : new je(e, n, t, null == r ? 1 : r)
  }

  function Ue(t, n, e, r) {
    return 1 === arguments.length ? ze(t) : new je(t, n, e, null == r ? 1 : r)
  }

  function je(t, n, e, r) {
    this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
  }

  function De(t) {
    if (isNaN(t.h)) return new Ne(t.l, 0, 0, t.opacity);
    var n = t.h * ge;
    return new Ne(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
  }

  Vn(Ne, Ee, Xn(Gn, {
    brighter: function (t) {
      return new Ne(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
    }, darker: function (t) {
      return new Ne(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
    }, rgb: function () {
      var t = (this.l + 16) / 116, n = isNaN(this.a) ? t : t + this.a / 500, e = isNaN(this.b) ? t : t - this.b / 200;
      return new le(Re(3.1338561 * (n = me * Pe(n)) - 1.6168667 * (t = _e * Pe(t)) - .4906146 * (e = xe * Pe(e))), Re(-.9787684 * n + 1.9161415 * t + .033454 * e), Re(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
    }
  })), Vn(je, Ue, Xn(Gn, {
    brighter: function (t) {
      return new je(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
    }, darker: function (t) {
      return new je(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
    }, rgb: function () {
      return De(this).rgb()
    }
  }));
  var qe = -.29227, Be = -.90649, Ie = 1.97294, Fe = Ie * Be, Ye = 1.78277 * Ie, He = 1.78277 * qe - -.14861 * Be;

  function Ve(t, n, e, r) {
    return 1 === arguments.length ? function (t) {
      if (t instanceof Xe) return new Xe(t.h, t.s, t.l, t.opacity);
      t instanceof le || (t = fe(t));
      var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = (He * r + Fe * n - Ye * e) / (He + Fe - Ye), o = r - i,
        u = (Ie * (e - i) - qe * o) / Be, a = Math.sqrt(u * u + o * o) / (Ie * i * (1 - i)),
        c = a ? Math.atan2(u, o) * be - 120 : NaN;
      return new Xe(c < 0 ? c + 360 : c, a, i, t.opacity)
    }(t) : new Xe(t, n, e, null == r ? 1 : r)
  }

  function Xe(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
  }

  function Ge(t, n, e, r, i) {
    var o = t * t, u = o * t;
    return ((1 - 3 * t + 3 * o - u) * n + (4 - 6 * o + 3 * u) * e + (1 + 3 * t + 3 * o - 3 * u) * r + u * i) / 6
  }

  Vn(Xe, Ve, Xn(Gn, {
    brighter: function (t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Xe(this.h, this.s, this.l * t, this.opacity)
    }, darker: function (t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Xe(this.h, this.s, this.l * t, this.opacity)
    }, rgb: function () {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * ge, n = +this.l, e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
        r = Math.cos(t), i = Math.sin(t);
      return new le(255 * (n + e * (-.14861 * r + 1.78277 * i)), 255 * (n + e * (qe * r + Be * i)), 255 * (n + e * (Ie * r)), this.opacity)
    }
  }));
  var $e = function (t) {
    var n = t.length - 1;
    return function (e) {
      var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n), i = t[r], o = t[r + 1],
        u = r > 0 ? t[r - 1] : 2 * i - o, a = r < n - 1 ? t[r + 2] : 2 * o - i;
      return Ge((e - r / n) * n, u, i, o, a)
    }
  }, We = function (t) {
    var n = t.length;
    return function (e) {
      var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n), i = t[(r + n - 1) % n], o = t[r % n], u = t[(r + 1) % n],
        a = t[(r + 2) % n];
      return Ge((e - r / n) * n, i, o, u, a)
    }
  }, Ze = function (t) {
    return function () {
      return t
    }
  };

  function Qe(t, n) {
    return function (e) {
      return t + e * n
    }
  }

  function Je(t, n) {
    var e = n - t;
    return e ? Qe(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Ze(isNaN(t) ? n : t)
  }

  function Ke(t) {
    return 1 == (t = +t) ? tr : function (n, e) {
      return e - n ? function (t, n, e) {
        return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
          return Math.pow(t + r * n, e)
        }
      }(n, e, t) : Ze(isNaN(n) ? e : n)
    }
  }

  function tr(t, n) {
    var e = n - t;
    return e ? Qe(t, e) : Ze(isNaN(t) ? n : t)
  }

  var nr = function t(n) {
    var e = Ke(n);

    function r(t, n) {
      var r = e((t = se(t)).r, (n = se(n)).r), i = e(t.g, n.g), o = e(t.b, n.b), u = tr(t.opacity, n.opacity);
      return function (n) {
        return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + ""
      }
    }

    return r.gamma = t, r
  }(1);

  function er(t) {
    return function (n) {
      var e, r, i = n.length, o = new Array(i), u = new Array(i), a = new Array(i);
      for (e = 0; e < i; ++e) r = se(n[e]), o[e] = r.r || 0, u[e] = r.g || 0, a[e] = r.b || 0;
      return o = t(o), u = t(u), a = t(a), r.opacity = 1, function (t) {
        return r.r = o(t), r.g = u(t), r.b = a(t), r + ""
      }
    }
  }

  var rr = er($e), ir = er(We), or = function (t, n) {
    var e, r = n ? n.length : 0, i = t ? Math.min(r, t.length) : 0, o = new Array(i), u = new Array(r);
    for (e = 0; e < i; ++e) o[e] = yr(t[e], n[e]);
    for (; e < r; ++e) u[e] = n[e];
    return function (t) {
      for (e = 0; e < i; ++e) u[e] = o[e](t);
      return u
    }
  }, ur = function (t, n) {
    var e = new Date;
    return n -= t = +t, function (r) {
      return e.setTime(t + n * r), e
    }
  }, ar = function (t, n) {
    return n -= t = +t, function (e) {
      return t + n * e
    }
  }, cr = function (t, n) {
    var e, r = {}, i = {};
    for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? r[e] = yr(t[e], n[e]) : i[e] = n[e];
    return function (t) {
      for (e in r) i[e] = r[e](t);
      return i
    }
  }, fr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, sr = new RegExp(fr.source, "g");
  var lr, hr, dr, pr, vr = function (t, n) {
      var e, r, i, o = fr.lastIndex = sr.lastIndex = 0, u = -1, a = [], c = [];
      for (t += "", n += ""; (e = fr.exec(t)) && (r = sr.exec(n));) (i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, c.push({
        i: u,
        x: ar(e, r)
      })), o = sr.lastIndex;
      return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? c[0] ? function (t) {
        return function (n) {
          return t(n) + ""
        }
      }(c[0].x) : function (t) {
        return function () {
          return t
        }
      }(n) : (n = c.length, function (t) {
        for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
        return a.join("")
      })
    }, yr = function (t, n) {
      var e, r = typeof n;
      return null == n || "boolean" === r ? Ze(n) : ("number" === r ? ar : "string" === r ? (e = ue(n)) ? (n = e, nr) : vr : n instanceof ue ? nr : n instanceof Date ? ur : Array.isArray(n) ? or : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? cr : ar)(t, n)
    }, gr = function (t) {
      var n = t.length;
      return function (e) {
        return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
      }
    }, br = function (t, n) {
      var e = Je(+t, +n);
      return function (t) {
        var n = e(t);
        return n - 360 * Math.floor(n / 360)
      }
    }, mr = function (t, n) {
      return n -= t = +t, function (e) {
        return Math.round(t + n * e)
      }
    }, _r = 180 / Math.PI, xr = {translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1},
    wr = function (t, n, e, r, i, o) {
      var u, a, c;
      return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t * r < n * e && (t = -t, n = -n, c = -c, u = -u), {
        translateX: i,
        translateY: o,
        rotate: Math.atan2(n, t) * _r,
        skewX: Math.atan(c) * _r,
        scaleX: u,
        scaleY: a
      }
    };

  function Mr(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : ""
    }

    return function (o, u) {
      var a = [], c = [];
      return o = t(o), u = t(u), function (t, r, i, o, u, a) {
        if (t !== i || r !== o) {
          var c = u.push("translate(", null, n, null, e);
          a.push({i: c - 4, x: ar(t, i)}, {i: c - 2, x: ar(r, o)})
        } else (i || o) && u.push("translate(" + i + n + o + e)
      }(o.translateX, o.translateY, u.translateX, u.translateY, a, c), function (t, n, e, o) {
        t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
          i: e.push(i(e) + "rotate(", null, r) - 2,
          x: ar(t, n)
        })) : n && e.push(i(e) + "rotate(" + n + r)
      }(o.rotate, u.rotate, a, c), function (t, n, e, o) {
        t !== n ? o.push({i: e.push(i(e) + "skewX(", null, r) - 2, x: ar(t, n)}) : n && e.push(i(e) + "skewX(" + n + r)
      }(o.skewX, u.skewX, a, c), function (t, n, e, r, o, u) {
        if (t !== e || n !== r) {
          var a = o.push(i(o) + "scale(", null, ",", null, ")");
          u.push({i: a - 4, x: ar(t, e)}, {i: a - 2, x: ar(n, r)})
        } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
      }(o.scaleX, o.scaleY, u.scaleX, u.scaleY, a, c), o = u = null, function (t) {
        for (var n, e = -1, r = c.length; ++e < r;) a[(n = c[e]).i] = n.x(t);
        return a.join("")
      }
    }
  }

  var Sr = Mr(function (t) {
    return "none" === t ? xr : (lr || (lr = document.createElement("DIV"), hr = document.documentElement, dr = document.defaultView), lr.style.transform = t, t = dr.getComputedStyle(hr.appendChild(lr), null).getPropertyValue("transform"), hr.removeChild(lr), t = t.slice(7, -1).split(","), wr(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
  }, "px, ", "px)", "deg)"), Tr = Mr(function (t) {
    return null == t ? xr : (pr || (pr = document.createElementNS("http://www.w3.org/2000/svg", "g")), pr.setAttribute("transform", t), (t = pr.transform.baseVal.consolidate()) ? (t = t.matrix, wr(t.a, t.b, t.c, t.d, t.e, t.f)) : xr)
  }, ", ", ")", ")"), Ar = Math.SQRT2;

  function kr(t) {
    return ((t = Math.exp(t)) + 1 / t) / 2
  }

  var Er = function (t, n) {
    var e, r, i = t[0], o = t[1], u = t[2], a = n[0], c = n[1], f = n[2], s = a - i, l = c - o, h = s * s + l * l;
    if (h < 1e-12) r = Math.log(f / u) / Ar, e = function (t) {
      return [i + t * s, o + t * l, u * Math.exp(Ar * t * r)]
    }; else {
      var d = Math.sqrt(h), p = (f * f - u * u + 4 * h) / (2 * u * 2 * d),
        v = (f * f - u * u - 4 * h) / (2 * f * 2 * d), y = Math.log(Math.sqrt(p * p + 1) - p),
        g = Math.log(Math.sqrt(v * v + 1) - v);
      r = (g - y) / Ar, e = function (t) {
        var n, e = t * r, a = kr(y),
          c = u / (2 * d) * (a * (n = Ar * e + y, ((n = Math.exp(2 * n)) - 1) / (n + 1)) - function (t) {
            return ((t = Math.exp(t)) - 1 / t) / 2
          }(y));
        return [i + c * s, o + c * l, u * a / kr(Ar * e + y)]
      }
    }
    return e.duration = 1e3 * r, e
  };

  function Nr(t) {
    return function (n, e) {
      var r = t((n = pe(n)).h, (e = pe(e)).h), i = tr(n.s, e.s), o = tr(n.l, e.l), u = tr(n.opacity, e.opacity);
      return function (t) {
        return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = u(t), n + ""
      }
    }
  }

  var Cr = Nr(Je), Pr = Nr(tr);

  function Rr(t, n) {
    var e = tr((t = Ee(t)).l, (n = Ee(n)).l), r = tr(t.a, n.a), i = tr(t.b, n.b), o = tr(t.opacity, n.opacity);
    return function (n) {
      return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + ""
    }
  }

  function Or(t) {
    return function (n, e) {
      var r = t((n = Ue(n)).h, (e = Ue(e)).h), i = tr(n.c, e.c), o = tr(n.l, e.l), u = tr(n.opacity, e.opacity);
      return function (t) {
        return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = u(t), n + ""
      }
    }
  }

  var zr = Or(Je), Lr = Or(tr);

  function Ur(t) {
    return function n(e) {
      function r(n, r) {
        var i = t((n = Ve(n)).h, (r = Ve(r)).h), o = tr(n.s, r.s), u = tr(n.l, r.l), a = tr(n.opacity, r.opacity);
        return function (t) {
          return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + ""
        }
      }

      return e = +e, r.gamma = n, r
    }(1)
  }

  var jr = Ur(Je), Dr = Ur(tr);

  function qr(t, n) {
    for (var e = 0, r = n.length - 1, i = n[0], o = new Array(r < 0 ? 0 : r); e < r;) o[e] = t(i, i = n[++e]);
    return function (t) {
      var n = Math.max(0, Math.min(r - 1, Math.floor(t *= r)));
      return o[n](t - n)
    }
  }

  var Br, Ir, Fr = function (t, n) {
      for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
      return e
    }, Yr = 0, Hr = 0, Vr = 0, Xr = 1e3, Gr = 0, $r = 0, Wr = 0,
    Zr = "object" == typeof performance && performance.now ? performance : Date,
    Qr = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
      setTimeout(t, 17)
    };

  function Jr() {
    return $r || (Qr(Kr), $r = Zr.now() + Wr)
  }

  function Kr() {
    $r = 0
  }

  function ti() {
    this._call = this._time = this._next = null
  }

  function ni(t, n, e) {
    var r = new ti;
    return r.restart(t, n, e), r
  }

  function ei() {
    Jr(), ++Yr;
    for (var t, n = Br; n;) (t = $r - n._time) >= 0 && n._call.call(null, t), n = n._next;
    --Yr
  }

  function ri() {
    $r = (Gr = Zr.now()) + Wr, Yr = Hr = 0;
    try {
      ei()
    } finally {
      Yr = 0, function () {
        var t, n, e = Br, r = 1 / 0;
        for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Br = n);
        Ir = t, oi(r)
      }(), $r = 0
    }
  }

  function ii() {
    var t = Zr.now(), n = t - Gr;
    n > Xr && (Wr -= n, Gr = t)
  }

  function oi(t) {
    Yr || (Hr && (Hr = clearTimeout(Hr)), t - $r > 24 ? (t < 1 / 0 && (Hr = setTimeout(ri, t - Zr.now() - Wr)), Vr && (Vr = clearInterval(Vr))) : (Vr || (Gr = Zr.now(), Vr = setInterval(ii, Xr)), Yr = 1, Qr(ri)))
  }

  ti.prototype = ni.prototype = {
    constructor: ti, restart: function (t, n, e) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");
      e = (null == e ? Jr() : +e) + (null == n ? 0 : +n), this._next || Ir === this || (Ir ? Ir._next = this : Br = this, Ir = this), this._call = t, this._time = e, oi()
    }, stop: function () {
      this._call && (this._call = null, this._time = 1 / 0, oi())
    }
  };
  var ui = function (t, n, e) {
      var r = new ti;
      return n = null == n ? 0 : +n, r.restart(function (e) {
        r.stop(), t(e + n)
      }, n, e), r
    }, ai = function (t, n, e) {
      var r = new ti, i = n;
      return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? Jr() : +e, r.restart(function o(u) {
        u += i, r.restart(o, i += n, e), t(u)
      }, n, e), r)
    }, ci = dt("start", "end", "cancel", "interrupt"), fi = [], si = 0, li = 1, hi = 2, di = 3, pi = 4, vi = 5, yi = 6,
    gi = function (t, n, e, r, i, o) {
      var u = t.__transition;
      if (u) {
        if (e in u) return
      } else t.__transition = {};
      !function (t, n, e) {
        var r, i = t.__transition;

        function o(c) {
          var f, s, l, h;
          if (e.state !== li) return a();
          for (f in i) if ((h = i[f]).name === e.name) {
            if (h.state === di) return ui(o);
            h.state === pi ? (h.state = yi, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[f]) : +f < n && (h.state = yi, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete i[f])
          }
          if (ui(function () {
            e.state === di && (e.state = pi, e.timer.restart(u, e.delay, e.time), u(c))
          }), e.state = hi, e.on.call("start", t, t.__data__, e.index, e.group), e.state === hi) {
            for (e.state = di, r = new Array(l = e.tween.length), f = 0, s = -1; f < l; ++f) (h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);
            r.length = s + 1
          }
        }

        function u(n) {
          for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = vi, 1), o = -1, u = r.length; ++o < u;) r[o].call(t, i);
          e.state === vi && (e.on.call("end", t, t.__data__, e.index, e.group), a())
        }

        function a() {
          for (var r in e.state = yi, e.timer.stop(), delete i[n], i) return;
          delete t.__transition
        }

        i[n] = e, e.timer = ni(function (t) {
          e.state = li, e.timer.restart(o, e.delay, e.time), e.delay <= t && o(t - e.delay)
        }, 0, e.time)
      }(t, e, {
        name: n,
        index: r,
        group: i,
        on: ci,
        tween: fi,
        time: o.time,
        delay: o.delay,
        duration: o.duration,
        ease: o.ease,
        timer: null,
        state: si
      })
    };

  function bi(t, n) {
    var e = _i(t, n);
    if (e.state > si) throw new Error("too late; already scheduled");
    return e
  }

  function mi(t, n) {
    var e = _i(t, n);
    if (e.state > di) throw new Error("too late; already running");
    return e
  }

  function _i(t, n) {
    var e = t.__transition;
    if (!e || !(e = e[n])) throw new Error("transition not found");
    return e
  }

  var xi = function (t, n) {
    var e, r, i, o = t.__transition, u = !0;
    if (o) {
      for (i in n = null == n ? null : n + "", o) (e = o[i]).name === n ? (r = e.state > hi && e.state < vi, e.state = yi, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
      u && delete t.__transition
    }
  };

  function wi(t, n) {
    var e, r;
    return function () {
      var i = mi(this, t), o = i.tween;
      if (o !== e) for (var u = 0, a = (r = e = o).length; u < a; ++u) if (r[u].name === n) {
        (r = r.slice()).splice(u, 1);
        break
      }
      i.tween = r
    }
  }

  function Mi(t, n, e) {
    var r, i;
    if ("function" != typeof e) throw new Error;
    return function () {
      var o = mi(this, t), u = o.tween;
      if (u !== r) {
        i = (r = u).slice();
        for (var a = {name: n, value: e}, c = 0, f = i.length; c < f; ++c) if (i[c].name === n) {
          i[c] = a;
          break
        }
        c === f && i.push(a)
      }
      o.tween = i
    }
  }

  function Si(t, n, e) {
    var r = t._id;
    return t.each(function () {
      var t = mi(this, r);
      (t.value || (t.value = {}))[n] = e.apply(this, arguments)
    }), function (t) {
      return _i(t, r).value[n]
    }
  }

  var Ti = function (t, n) {
    var e;
    return ("number" == typeof n ? ar : n instanceof ue ? nr : (e = ue(n)) ? (n = e, nr) : vr)(t, n)
  };

  function Ai(t, n) {
    var e, r;

    function i() {
      var i = n.apply(this, arguments);
      return i !== r && (e = (r = i) && function (t, n) {
        return function (e) {
          this.setAttributeNS(t.space, t.local, n(e))
        }
      }(t, i)), e
    }

    return i._value = n, i
  }

  function ki(t, n) {
    var e, r;

    function i() {
      var i = n.apply(this, arguments);
      return i !== r && (e = (r = i) && function (t, n) {
        return function (e) {
          this.setAttribute(t, n(e))
        }
      }(t, i)), e
    }

    return i._value = n, i
  }

  function Ei(t, n) {
    return function () {
      bi(this, t).delay = +n.apply(this, arguments)
    }
  }

  function Ni(t, n) {
    return n = +n, function () {
      bi(this, t).delay = n
    }
  }

  function Ci(t, n) {
    return function () {
      mi(this, t).duration = +n.apply(this, arguments)
    }
  }

  function Pi(t, n) {
    return n = +n, function () {
      mi(this, t).duration = n
    }
  }

  function Ri(t, n) {
    if ("function" != typeof n) throw new Error;
    return function () {
      mi(this, t).ease = n
    }
  }

  function Oi(t, n, e) {
    var r, i, o = function (t) {
      return (t + "").trim().split(/^|\s+/).every(function (t) {
        var n = t.indexOf(".");
        return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
      })
    }(n) ? bi : mi;
    return function () {
      var u = o(this, t), a = u.on;
      a !== r && (i = (r = a).copy()).on(n, e), u.on = i
    }
  }

  var zi = wn.prototype.constructor;

  function Li(t) {
    return function () {
      this.style.removeProperty(t)
    }
  }

  function Ui(t, n, e) {
    var r, i;

    function o() {
      var o = n.apply(this, arguments);
      return o !== i && (r = (i = o) && function (t, n, e) {
        return function (r) {
          this.style.setProperty(t, n(r), e)
        }
      }(t, o, e)), r
    }

    return o._value = n, o
  }

  var ji = 0;

  function Di(t, n, e, r) {
    this._groups = t, this._parents = n, this._name = e, this._id = r
  }

  function qi(t) {
    return wn().transition(t)
  }

  function Bi() {
    return ++ji
  }

  var Ii = wn.prototype;

  function Fi(t) {
    return +t
  }

  function Yi(t) {
    return t * t
  }

  function Hi(t) {
    return t * (2 - t)
  }

  function Vi(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
  }

  function Xi(t) {
    return t * t * t
  }

  function Gi(t) {
    return --t * t * t + 1
  }

  function $i(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
  }

  Di.prototype = qi.prototype = {
    constructor: Di,
    select: function (t) {
      var n = this._name, e = this._id;
      "function" != typeof t && (t = mt(t));
      for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u) for (var a, c, f = r[u], s = f.length, l = o[u] = new Array(s), h = 0; h < s; ++h) (a = f[h]) && (c = t.call(a, a.__data__, h, f)) && ("__data__" in a && (c.__data__ = a.__data__), l[h] = c, gi(l[h], n, e, h, l, _i(a, e)));
      return new Di(o, this._parents, n, e)
    },
    selectAll: function (t) {
      var n = this._name, e = this._id;
      "function" != typeof t && (t = xt(t));
      for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a) for (var c, f = r[a], s = f.length, l = 0; l < s; ++l) if (c = f[l]) {
        for (var h, d = t.call(c, c.__data__, l, f), p = _i(c, e), v = 0, y = d.length; v < y; ++v) (h = d[v]) && gi(h, n, e, v, d, p);
        o.push(d), u.push(c)
      }
      return new Di(o, u, n, e)
    },
    filter: function (t) {
      "function" != typeof t && (t = wt(t));
      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) for (var o, u = n[i], a = u.length, c = r[i] = [], f = 0; f < a; ++f) (o = u[f]) && t.call(o, o.__data__, f, u) && c.push(o);
      return new Di(r, this._parents, this._name, this._id)
    },
    merge: function (t) {
      if (t._id !== this._id) throw new Error;
      for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a) for (var c, f = n[a], s = e[a], l = f.length, h = u[a] = new Array(l), d = 0; d < l; ++d) (c = f[d] || s[d]) && (h[d] = c);
      for (; a < r; ++a) u[a] = n[a];
      return new Di(u, this._parents, this._name, this._id)
    },
    selection: function () {
      return new zi(this._groups, this._parents)
    },
    transition: function () {
      for (var t = this._name, n = this._id, e = Bi(), r = this._groups, i = r.length, o = 0; o < i; ++o) for (var u, a = r[o], c = a.length, f = 0; f < c; ++f) if (u = a[f]) {
        var s = _i(u, n);
        gi(u, t, e, f, a, {time: s.time + s.delay + s.duration, delay: 0, duration: s.duration, ease: s.ease})
      }
      return new Di(r, this._parents, t, e)
    },
    call: Ii.call,
    nodes: Ii.nodes,
    node: Ii.node,
    size: Ii.size,
    empty: Ii.empty,
    each: Ii.each,
    on: function (t, n) {
      var e = this._id;
      return arguments.length < 2 ? _i(this.node(), e).on.on(t) : this.each(Oi(e, t, n))
    },
    attr: function (t, n) {
      var e = yt(t), r = "transform" === e ? Tr : Ti;
      return this.attrTween(t, "function" == typeof n ? (e.local ? function (t, n, e) {
        var r, i, o;
        return function () {
          var u, a, c = e(this);
          if (null != c) return (u = this.getAttributeNS(t.space, t.local)) === (a = c + "") ? null : u === r && a === i ? o : (i = a, o = n(r = u, c));
          this.removeAttributeNS(t.space, t.local)
        }
      } : function (t, n, e) {
        var r, i, o;
        return function () {
          var u, a, c = e(this);
          if (null != c) return (u = this.getAttribute(t)) === (a = c + "") ? null : u === r && a === i ? o : (i = a, o = n(r = u, c));
          this.removeAttribute(t)
        }
      })(e, r, Si(this, "attr." + t, n)) : null == n ? (e.local ? function (t) {
        return function () {
          this.removeAttributeNS(t.space, t.local)
        }
      } : function (t) {
        return function () {
          this.removeAttribute(t)
        }
      })(e) : (e.local ? function (t, n, e) {
        var r, i, o = e + "";
        return function () {
          var u = this.getAttributeNS(t.space, t.local);
          return u === o ? null : u === r ? i : i = n(r = u, e)
        }
      } : function (t, n, e) {
        var r, i, o = e + "";
        return function () {
          var u = this.getAttribute(t);
          return u === o ? null : u === r ? i : i = n(r = u, e)
        }
      })(e, r, n))
    },
    attrTween: function (t, n) {
      var e = "attr." + t;
      if (arguments.length < 2) return (e = this.tween(e)) && e._value;
      if (null == n) return this.tween(e, null);
      if ("function" != typeof n) throw new Error;
      var r = yt(t);
      return this.tween(e, (r.local ? Ai : ki)(r, n))
    },
    style: function (t, n, e) {
      var r = "transform" == (t += "") ? Sr : Ti;
      return null == n ? this.styleTween(t, function (t, n) {
        var e, r, i;
        return function () {
          var o = qt(this, t), u = (this.style.removeProperty(t), qt(this, t));
          return o === u ? null : o === e && u === r ? i : i = n(e = o, r = u)
        }
      }(t, r)).on("end.style." + t, Li(t)) : "function" == typeof n ? this.styleTween(t, function (t, n, e) {
        var r, i, o;
        return function () {
          var u = qt(this, t), a = e(this), c = a + "";
          return null == a && (this.style.removeProperty(t), c = a = qt(this, t)), u === c ? null : u === r && c === i ? o : (i = c, o = n(r = u, a))
        }
      }(t, r, Si(this, "style." + t, n))).each(function (t, n) {
        var e, r, i, o, u = "style." + n, a = "end." + u;
        return function () {
          var c = mi(this, t), f = c.on, s = null == c.value[u] ? o || (o = Li(n)) : void 0;
          f === e && i === s || (r = (e = f).copy()).on(a, i = s), c.on = r
        }
      }(this._id, t)) : this.styleTween(t, function (t, n, e) {
        var r, i, o = e + "";
        return function () {
          var u = qt(this, t);
          return u === o ? null : u === r ? i : i = n(r = u, e)
        }
      }(t, r, n), e).on("end.style." + t, null)
    },
    styleTween: function (t, n, e) {
      var r = "style." + (t += "");
      if (arguments.length < 2) return (r = this.tween(r)) && r._value;
      if (null == n) return this.tween(r, null);
      if ("function" != typeof n) throw new Error;
      return this.tween(r, Ui(t, n, null == e ? "" : e))
    },
    text: function (t) {
      return this.tween("text", "function" == typeof t ? function (t) {
        return function () {
          var n = t(this);
          this.textContent = null == n ? "" : n
        }
      }(Si(this, "text", t)) : function (t) {
        return function () {
          this.textContent = t
        }
      }(null == t ? "" : t + ""))
    },
    remove: function () {
      return this.on("end.remove", (t = this._id, function () {
        var n = this.parentNode;
        for (var e in this.__transition) if (+e !== t) return;
        n && n.removeChild(this)
      }));
      var t
    },
    tween: function (t, n) {
      var e = this._id;
      if (t += "", arguments.length < 2) {
        for (var r, i = _i(this.node(), e).tween, o = 0, u = i.length; o < u; ++o) if ((r = i[o]).name === t) return r.value;
        return null
      }
      return this.each((null == n ? wi : Mi)(e, t, n))
    },
    delay: function (t) {
      var n = this._id;
      return arguments.length ? this.each(("function" == typeof t ? Ei : Ni)(n, t)) : _i(this.node(), n).delay
    },
    duration: function (t) {
      var n = this._id;
      return arguments.length ? this.each(("function" == typeof t ? Ci : Pi)(n, t)) : _i(this.node(), n).duration
    },
    ease: function (t) {
      var n = this._id;
      return arguments.length ? this.each(Ri(n, t)) : _i(this.node(), n).ease
    },
    end: function () {
      var t, n, e = this, r = e._id, i = e.size();
      return new Promise(function (o, u) {
        var a = {value: u}, c = {
          value: function () {
            0 == --i && o()
          }
        };
        e.each(function () {
          var e = mi(this, r), i = e.on;
          i !== t && ((n = (t = i).copy())._.cancel.push(a), n._.interrupt.push(a), n._.end.push(c)), e.on = n
        })
      })
    }
  };
  var Wi = function t(n) {
    function e(t) {
      return Math.pow(t, n)
    }

    return n = +n, e.exponent = t, e
  }(3), Zi = function t(n) {
    function e(t) {
      return 1 - Math.pow(1 - t, n)
    }

    return n = +n, e.exponent = t, e
  }(3), Qi = function t(n) {
    function e(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
    }

    return n = +n, e.exponent = t, e
  }(3), Ji = Math.PI, Ki = Ji / 2;

  function to(t) {
    return 1 - Math.cos(t * Ki)
  }

  function no(t) {
    return Math.sin(t * Ki)
  }

  function eo(t) {
    return (1 - Math.cos(Ji * t)) / 2
  }

  function ro(t) {
    return Math.pow(2, 10 * t - 10)
  }

  function io(t) {
    return 1 - Math.pow(2, -10 * t)
  }

  function oo(t) {
    return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
  }

  function uo(t) {
    return 1 - Math.sqrt(1 - t * t)
  }

  function ao(t) {
    return Math.sqrt(1 - --t * t)
  }

  function co(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
  }

  var fo = 4 / 11, so = 6 / 11, lo = 8 / 11, ho = .75, po = 9 / 11, vo = 10 / 11, yo = .9375, go = 21 / 22,
    bo = 63 / 64, mo = 1 / fo / fo;

  function _o(t) {
    return 1 - xo(1 - t)
  }

  function xo(t) {
    return (t = +t) < fo ? mo * t * t : t < lo ? mo * (t -= so) * t + ho : t < vo ? mo * (t -= po) * t + yo : mo * (t -= go) * t + bo
  }

  function wo(t) {
    return ((t *= 2) <= 1 ? 1 - xo(1 - t) : xo(t - 1) + 1) / 2
  }

  var Mo = function t(n) {
    function e(t) {
      return t * t * ((n + 1) * t - n)
    }

    return n = +n, e.overshoot = t, e
  }(1.70158), So = function t(n) {
    function e(t) {
      return --t * t * ((n + 1) * t + n) + 1
    }

    return n = +n, e.overshoot = t, e
  }(1.70158), To = function t(n) {
    function e(t) {
      return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
    }

    return n = +n, e.overshoot = t, e
  }(1.70158), Ao = 2 * Math.PI, ko = function t(n, e) {
    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ao);

    function i(t) {
      return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e)
    }

    return i.amplitude = function (n) {
      return t(n, e * Ao)
    }, i.period = function (e) {
      return t(n, e)
    }, i
  }(1, .3), Eo = function t(n, e) {
    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ao);

    function i(t) {
      return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e)
    }

    return i.amplitude = function (n) {
      return t(n, e * Ao)
    }, i.period = function (e) {
      return t(n, e)
    }, i
  }(1, .3), No = function t(n, e) {
    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ao);

    function i(t) {
      return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2
    }

    return i.amplitude = function (n) {
      return t(n, e * Ao)
    }, i.period = function (e) {
      return t(n, e)
    }, i
  }(1, .3), Co = {time: null, delay: 0, duration: 250, ease: $i};

  function Po(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]);) if (!(t = t.parentNode)) return Co.time = Jr(), Co;
    return e
  }

  wn.prototype.interrupt = function (t) {
    return this.each(function () {
      xi(this, t)
    })
  }, wn.prototype.transition = function (t) {
    var n, e;
    t instanceof Di ? (n = t._id, t = t._name) : (n = Bi(), (e = Co).time = Jr(), t = null == t ? null : t + "");
    for (var r = this._groups, i = r.length, o = 0; o < i; ++o) for (var u, a = r[o], c = a.length, f = 0; f < c; ++f) (u = a[f]) && gi(u, t, n, f, a, e || Po(u, n));
    return new Di(r, this._parents, t, n)
  };
  var Ro = [null], Oo = function (t, n) {
    var e, r, i = t.__transition;
    if (i) for (r in n = null == n ? null : n + "", i) if ((e = i[r]).state > li && e.name === n) return new Di([[t]], Ro, n, +r);
    return null
  }, zo = function (t) {
    return function () {
      return t
    }
  }, Lo = function (t, n, e) {
    this.target = t, this.type = n, this.selection = e
  };

  function Uo() {
    ln.stopImmediatePropagation()
  }

  var jo = function () {
      ln.preventDefault(), ln.stopImmediatePropagation()
    }, Do = {name: "drag"}, qo = {name: "space"}, Bo = {name: "handle"}, Io = {name: "center"}, Fo = {
      name: "x", handles: ["e", "w"].map(Zo), input: function (t, n) {
        return t && [[t[0], n[0][1]], [t[1], n[1][1]]]
      }, output: function (t) {
        return t && [t[0][0], t[1][0]]
      }
    }, Yo = {
      name: "y", handles: ["n", "s"].map(Zo), input: function (t, n) {
        return t && [[n[0][0], t[0]], [n[1][0], t[1]]]
      }, output: function (t) {
        return t && [t[0][1], t[1][1]]
      }
    }, Ho = {
      name: "xy", handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Zo), input: function (t) {
        return t
      }, output: function (t) {
        return t
      }
    }, Vo = {
      overlay: "crosshair",
      selection: "move",
      n: "ns-resize",
      e: "ew-resize",
      s: "ns-resize",
      w: "ew-resize",
      nw: "nwse-resize",
      ne: "nesw-resize",
      se: "nwse-resize",
      sw: "nesw-resize"
    }, Xo = {e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se"},
    Go = {n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw"},
    $o = {overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1},
    Wo = {overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1};

  function Zo(t) {
    return {type: t}
  }

  function Qo() {
    return !ln.button
  }

  function Jo() {
    var t = this.ownerSVGElement || this;
    return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]
  }

  function Ko(t) {
    for (; !t.__brush;) if (!(t = t.parentNode)) return;
    return t.__brush
  }

  function tu(t) {
    return t[0][0] === t[1][0] || t[0][1] === t[1][1]
  }

  function nu(t) {
    var n = t.__brush;
    return n ? n.dim.output(n.selection) : null
  }

  function eu() {
    return ou(Fo)
  }

  function ru() {
    return ou(Yo)
  }

  var iu = function () {
    return ou(Ho)
  };

  function ou(t) {
    var n, e = Jo, r = Qo, i = dt(u, "start", "brush", "end"), o = 6;

    function u(n) {
      var e = n.property("__brush", l).selectAll(".overlay").data([Zo("overlay")]);
      e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", Vo.overlay).merge(e).each(function () {
        var t = Ko(this).extent;
        Mn(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
      }), n.selectAll(".selection").data([Zo("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", Vo.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
      var r = n.selectAll(".handle").data(t.handles, function (t) {
        return t.type
      });
      r.exit().remove(), r.enter().append("rect").attr("class", function (t) {
        return "handle handle--" + t.type
      }).attr("cursor", function (t) {
        return Vo[t.type]
      }), n.each(a).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", s)
    }

    function a() {
      var t = Mn(this), n = Ko(this).selection;
      n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function (t) {
        return "e" === t.type[t.type.length - 1] ? n[1][0] - o / 2 : n[0][0] - o / 2
      }).attr("y", function (t) {
        return "s" === t.type[0] ? n[1][1] - o / 2 : n[0][1] - o / 2
      }).attr("width", function (t) {
        return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + o : o
      }).attr("height", function (t) {
        return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + o : o
      })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
    }

    function c(t, n) {
      return t.__brush.emitter || new f(t, n)
    }

    function f(t, n) {
      this.that = t, this.args = n, this.state = t.__brush, this.active = 0
    }

    function s() {
      if (ln.touches) {
        if (ln.changedTouches.length < ln.touches.length) return jo()
      } else if (n) return;
      if (r.apply(this, arguments)) {
        var e, i, o, u, f, s, l, h, d, p, v, y, g, b = this, m = ln.target.__data__.type,
          _ = "selection" === (ln.metaKey ? m = "overlay" : m) ? Do : ln.altKey ? Io : Bo, x = t === Yo ? null : $o[m],
          w = t === Fo ? null : Wo[m], M = Ko(b), S = M.extent, T = M.selection, A = S[0][0], k = S[0][1], E = S[1][0],
          N = S[1][1], C = x && w && ln.shiftKey, P = Cn(b), R = P, O = c(b, arguments).beforestart();
        "overlay" === m ? M.selection = T = [[e = t === Yo ? A : P[0], o = t === Fo ? k : P[1]], [f = t === Yo ? E : e, l = t === Fo ? N : o]] : (e = T[0][0], o = T[0][1], f = T[1][0], l = T[1][1]), i = e, u = o, s = f, h = l;
        var z = Mn(b).attr("pointer-events", "none"), L = z.selectAll(".overlay").attr("cursor", Vo[m]);
        if (ln.touches) z.on("touchmove.brush", j, !0).on("touchend.brush touchcancel.brush", q, !0); else {
          var U = Mn(ln.view).on("keydown.brush", function () {
            switch (ln.keyCode) {
              case 16:
                C = x && w;
                break;
              case 18:
                _ === Bo && (x && (f = s - d * x, e = i + d * x), w && (l = h - p * w, o = u + p * w), _ = Io, D());
                break;
              case 32:
                _ !== Bo && _ !== Io || (x < 0 ? f = s - d : x > 0 && (e = i - d), w < 0 ? l = h - p : w > 0 && (o = u - p), _ = qo, L.attr("cursor", Vo.selection), D());
                break;
              default:
                return
            }
            jo()
          }, !0).on("keyup.brush", function () {
            switch (ln.keyCode) {
              case 16:
                C && (y = g = C = !1, D());
                break;
              case 18:
                _ === Io && (x < 0 ? f = s : x > 0 && (e = i), w < 0 ? l = h : w > 0 && (o = u), _ = Bo, D());
                break;
              case 32:
                _ === qo && (ln.altKey ? (x && (f = s - d * x, e = i + d * x), w && (l = h - p * w, o = u + p * w), _ = Io) : (x < 0 ? f = s : x > 0 && (e = i), w < 0 ? l = h : w > 0 && (o = u), _ = Bo), L.attr("cursor", Vo[m]), D());
                break;
              default:
                return
            }
            jo()
          }, !0).on("mousemove.brush", j, !0).on("mouseup.brush", q, !0);
          Un(ln.view)
        }
        Uo(), xi(b), a.call(b), O.start()
      }

      function j() {
        var t = Cn(b);
        !C || y || g || (Math.abs(t[0] - R[0]) > Math.abs(t[1] - R[1]) ? g = !0 : y = !0), R = t, v = !0, jo(), D()
      }

      function D() {
        var t;
        switch (d = R[0] - P[0], p = R[1] - P[1], _) {
          case qo:
          case Do:
            x && (d = Math.max(A - e, Math.min(E - f, d)), i = e + d, s = f + d), w && (p = Math.max(k - o, Math.min(N - l, p)), u = o + p, h = l + p);
            break;
          case Bo:
            x < 0 ? (d = Math.max(A - e, Math.min(E - e, d)), i = e + d, s = f) : x > 0 && (d = Math.max(A - f, Math.min(E - f, d)), i = e, s = f + d), w < 0 ? (p = Math.max(k - o, Math.min(N - o, p)), u = o + p, h = l) : w > 0 && (p = Math.max(k - l, Math.min(N - l, p)), u = o, h = l + p);
            break;
          case Io:
            x && (i = Math.max(A, Math.min(E, e - d * x)), s = Math.max(A, Math.min(E, f + d * x))), w && (u = Math.max(k, Math.min(N, o - p * w)), h = Math.max(k, Math.min(N, l + p * w)))
        }
        s < i && (x *= -1, t = e, e = f, f = t, t = i, i = s, s = t, m in Xo && L.attr("cursor", Vo[m = Xo[m]])), h < u && (w *= -1, t = o, o = l, l = t, t = u, u = h, h = t, m in Go && L.attr("cursor", Vo[m = Go[m]])), M.selection && (T = M.selection), y && (i = T[0][0], s = T[1][0]), g && (u = T[0][1], h = T[1][1]), T[0][0] === i && T[0][1] === u && T[1][0] === s && T[1][1] === h || (M.selection = [[i, u], [s, h]], a.call(b), O.brush())
      }

      function q() {
        if (Uo(), ln.touches) {
          if (ln.touches.length) return;
          n && clearTimeout(n), n = setTimeout(function () {
            n = null
          }, 500), z.on("touchmove.brush touchend.brush touchcancel.brush", null)
        } else jn(ln.view, v), U.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
        z.attr("pointer-events", "all"), L.attr("cursor", Vo.overlay), M.selection && (T = M.selection), tu(T) && (M.selection = null, a.call(b)), O.end()
      }
    }

    function l() {
      var n = this.__brush || {selection: null};
      return n.extent = e.apply(this, arguments), n.dim = t, n
    }

    return u.move = function (n, e) {
      n.selection ? n.on("start.brush", function () {
        c(this, arguments).beforestart().start()
      }).on("interrupt.brush end.brush", function () {
        c(this, arguments).end()
      }).tween("brush", function () {
        var n = this, r = n.__brush, i = c(n, arguments), o = r.selection,
          u = t.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent), f = yr(o, u);

        function s(t) {
          r.selection = 1 === t && tu(u) ? null : f(t), a.call(n), i.brush()
        }

        return o && u ? s : s(1)
      }) : n.each(function () {
        var n = this, r = arguments, i = n.__brush, o = t.input("function" == typeof e ? e.apply(n, r) : e, i.extent),
          u = c(n, r).beforestart();
        xi(n), i.selection = null == o || tu(o) ? null : o, a.call(n), u.start().brush().end()
      })
    }, f.prototype = {
      beforestart: function () {
        return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this
      }, start: function () {
        return this.starting && (this.starting = !1, this.emit("start")), this
      }, brush: function () {
        return this.emit("brush"), this
      }, end: function () {
        return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this
      }, emit: function (n) {
        gn(new Lo(u, n, t.output(this.state.selection)), i.apply, i, [n, this.that, this.args])
      }
    }, u.extent = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : zo([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), u) : e
    }, u.filter = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : zo(!!t), u) : r
    }, u.handleSize = function (t) {
      return arguments.length ? (o = +t, u) : o
    }, u.on = function () {
      var t = i.on.apply(i, arguments);
      return t === i ? u : t
    }, u
  }

  var uu = Math.cos, au = Math.sin, cu = Math.PI, fu = cu / 2, su = 2 * cu, lu = Math.max;

  function hu(t) {
    return function (n, e) {
      return t(n.source.value + n.target.value, e.source.value + e.target.value)
    }
  }

  var du = function () {
    var t = 0, n = null, e = null, r = null;

    function i(i) {
      var o, u, a, c, f, s, l = i.length, h = [], d = w(l), p = [], v = [], y = v.groups = new Array(l),
        g = new Array(l * l);
      for (o = 0, f = -1; ++f < l;) {
        for (u = 0, s = -1; ++s < l;) u += i[f][s];
        h.push(u), p.push(w(l)), o += u
      }
      for (n && d.sort(function (t, e) {
        return n(h[t], h[e])
      }), e && p.forEach(function (t, n) {
        t.sort(function (t, r) {
          return e(i[n][t], i[n][r])
        })
      }), c = (o = lu(0, su - t * l) / o) ? t : su / l, u = 0, f = -1; ++f < l;) {
        for (a = u, s = -1; ++s < l;) {
          var b = d[f], m = p[b][s], _ = i[b][m], x = u, M = u += _ * o;
          g[m * l + b] = {index: b, subindex: m, startAngle: x, endAngle: M, value: _}
        }
        y[b] = {index: b, startAngle: a, endAngle: u, value: h[b]}, u += c
      }
      for (f = -1; ++f < l;) for (s = f - 1; ++s < l;) {
        var S = g[s * l + f], T = g[f * l + s];
        (S.value || T.value) && v.push(S.value < T.value ? {source: T, target: S} : {source: S, target: T})
      }
      return r ? v.sort(r) : v
    }

    return i.padAngle = function (n) {
      return arguments.length ? (t = lu(0, n), i) : t
    }, i.sortGroups = function (t) {
      return arguments.length ? (n = t, i) : n
    }, i.sortSubgroups = function (t) {
      return arguments.length ? (e = t, i) : e
    }, i.sortChords = function (t) {
      return arguments.length ? (null == t ? r = null : (r = hu(t))._ = t, i) : r && r._
    }, i
  }, pu = Array.prototype.slice, vu = function (t) {
    return function () {
      return t
    }
  }, yu = Math.PI, gu = 2 * yu, bu = gu - 1e-6;

  function mu() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
  }

  function _u() {
    return new mu
  }

  mu.prototype = _u.prototype = {
    constructor: mu, moveTo: function (t, n) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
    }, closePath: function () {
      null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
    }, lineTo: function (t, n) {
      this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
    }, quadraticCurveTo: function (t, n, e, r) {
      this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
    }, bezierCurveTo: function (t, n, e, r, i, o) {
      this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o)
    }, arcTo: function (t, n, e, r, i) {
      t = +t, n = +n, e = +e, r = +r, i = +i;
      var o = this._x1, u = this._y1, a = e - t, c = r - n, f = o - t, s = u - n, l = f * f + s * s;
      if (i < 0) throw new Error("negative radius: " + i);
      if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n); else if (l > 1e-6) if (Math.abs(s * a - c * f) > 1e-6 && i) {
        var h = e - o, d = r - u, p = a * a + c * c, v = h * h + d * d, y = Math.sqrt(p), g = Math.sqrt(l),
          b = i * Math.tan((yu - Math.acos((p + l - v) / (2 * y * g))) / 2), m = b / g, _ = b / y;
        Math.abs(m - 1) > 1e-6 && (this._ += "L" + (t + m * f) + "," + (n + m * s)), this._ += "A" + i + "," + i + ",0,0," + +(s * h > f * d) + "," + (this._x1 = t + _ * a) + "," + (this._y1 = n + _ * c)
      } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n); else ;
    }, arc: function (t, n, e, r, i, o) {
      t = +t, n = +n;
      var u = (e = +e) * Math.cos(r), a = e * Math.sin(r), c = t + u, f = n + a, s = 1 ^ o, l = o ? r - i : i - r;
      if (e < 0) throw new Error("negative radius: " + e);
      null === this._x1 ? this._ += "M" + c + "," + f : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - f) > 1e-6) && (this._ += "L" + c + "," + f), e && (l < 0 && (l = l % gu + gu), l > bu ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - u) + "," + (n - a) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = f) : l > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(l >= yu) + "," + s + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))))
    }, rect: function (t, n, e, r) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
    }, toString: function () {
      return this._
    }
  };
  var xu = _u;

  function wu(t) {
    return t.source
  }

  function Mu(t) {
    return t.target
  }

  function Su(t) {
    return t.radius
  }

  function Tu(t) {
    return t.startAngle
  }

  function Au(t) {
    return t.endAngle
  }

  var ku = function () {
    var t = wu, n = Mu, e = Su, r = Tu, i = Au, o = null;

    function u() {
      var u, a = pu.call(arguments), c = t.apply(this, a), f = n.apply(this, a), s = +e.apply(this, (a[0] = c, a)),
        l = r.apply(this, a) - fu, h = i.apply(this, a) - fu, d = s * uu(l), p = s * au(l),
        v = +e.apply(this, (a[0] = f, a)), y = r.apply(this, a) - fu, g = i.apply(this, a) - fu;
      if (o || (o = u = xu()), o.moveTo(d, p), o.arc(0, 0, s, l, h), l === y && h === g || (o.quadraticCurveTo(0, 0, v * uu(y), v * au(y)), o.arc(0, 0, v, y, g)), o.quadraticCurveTo(0, 0, d, p), o.closePath(), u) return o = null, u + "" || null
    }

    return u.radius = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : vu(+t), u) : e
    }, u.startAngle = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : vu(+t), u) : r
    }, u.endAngle = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : vu(+t), u) : i
    }, u.source = function (n) {
      return arguments.length ? (t = n, u) : t
    }, u.target = function (t) {
      return arguments.length ? (n = t, u) : n
    }, u.context = function (t) {
      return arguments.length ? (o = null == t ? null : t, u) : o
    }, u
  };

  function Eu() {
  }

  function Nu(t, n) {
    var e = new Eu;
    if (t instanceof Eu) t.each(function (t, n) {
      e.set(n, t)
    }); else if (Array.isArray(t)) {
      var r, i = -1, o = t.length;
      if (null == n) for (; ++i < o;) e.set(i, t[i]); else for (; ++i < o;) e.set(n(r = t[i], i, t), r)
    } else if (t) for (var u in t) e.set(u, t[u]);
    return e
  }

  Eu.prototype = Nu.prototype = {
    constructor: Eu, has: function (t) {
      return "$" + t in this
    }, get: function (t) {
      return this["$" + t]
    }, set: function (t, n) {
      return this["$" + t] = n, this
    }, remove: function (t) {
      var n = "$" + t;
      return n in this && delete this[n]
    }, clear: function () {
      for (var t in this) "$" === t[0] && delete this[t]
    }, keys: function () {
      var t = [];
      for (var n in this) "$" === n[0] && t.push(n.slice(1));
      return t
    }, values: function () {
      var t = [];
      for (var n in this) "$" === n[0] && t.push(this[n]);
      return t
    }, entries: function () {
      var t = [];
      for (var n in this) "$" === n[0] && t.push({key: n.slice(1), value: this[n]});
      return t
    }, size: function () {
      var t = 0;
      for (var n in this) "$" === n[0] && ++t;
      return t
    }, empty: function () {
      for (var t in this) if ("$" === t[0]) return !1;
      return !0
    }, each: function (t) {
      for (var n in this) "$" === n[0] && t(this[n], n.slice(1), this)
    }
  };
  var Cu = Nu, Pu = function () {
    var t, n, e, r = [], i = [];

    function o(e, i, u, a) {
      if (i >= r.length) return null != t && e.sort(t), null != n ? n(e) : e;
      for (var c, f, s, l = -1, h = e.length, d = r[i++], p = Cu(), v = u(); ++l < h;) (s = p.get(c = d(f = e[l]) + "")) ? s.push(f) : p.set(c, [f]);
      return p.each(function (t, n) {
        a(v, n, o(t, i, u, a))
      }), v
    }

    return e = {
      object: function (t) {
        return o(t, 0, Ru, Ou)
      }, map: function (t) {
        return o(t, 0, zu, Lu)
      }, entries: function (t) {
        return function t(e, o) {
          if (++o > r.length) return e;
          var u, a = i[o - 1];
          return null != n && o >= r.length ? u = e.entries() : (u = [], e.each(function (n, e) {
            u.push({key: e, values: t(n, o)})
          })), null != a ? u.sort(function (t, n) {
            return a(t.key, n.key)
          }) : u
        }(o(t, 0, zu, Lu), 0)
      }, key: function (t) {
        return r.push(t), e
      }, sortKeys: function (t) {
        return i[r.length - 1] = t, e
      }, sortValues: function (n) {
        return t = n, e
      }, rollup: function (t) {
        return n = t, e
      }
    }
  };

  function Ru() {
    return {}
  }

  function Ou(t, n, e) {
    t[n] = e
  }

  function zu() {
    return Cu()
  }

  function Lu(t, n, e) {
    t.set(n, e)
  }

  function Uu() {
  }

  var ju = Cu.prototype;

  function Du(t, n) {
    var e = new Uu;
    if (t instanceof Uu) t.each(function (t) {
      e.add(t)
    }); else if (t) {
      var r = -1, i = t.length;
      if (null == n) for (; ++r < i;) e.add(t[r]); else for (; ++r < i;) e.add(n(t[r], r, t))
    }
    return e
  }

  Uu.prototype = Du.prototype = {
    constructor: Uu, has: ju.has, add: function (t) {
      return this["$" + (t += "")] = t, this
    }, remove: ju.remove, clear: ju.clear, values: ju.keys, size: ju.size, empty: ju.empty, each: ju.each
  };
  var qu = Du, Bu = function (t) {
    var n = [];
    for (var e in t) n.push(e);
    return n
  }, Iu = function (t) {
    var n = [];
    for (var e in t) n.push(t[e]);
    return n
  }, Fu = function (t) {
    var n = [];
    for (var e in t) n.push({key: e, value: t[e]});
    return n
  }, Yu = Array.prototype.slice, Hu = function (t, n) {
    return t - n
  }, Vu = function (t) {
    for (var n = 0, e = t.length, r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1]; ++n < e;) r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
    return r
  }, Xu = function (t) {
    return function () {
      return t
    }
  }, Gu = function (t, n) {
    for (var e, r = -1, i = n.length; ++r < i;) if (e = $u(t, n[r])) return e;
    return 0
  };

  function $u(t, n) {
    for (var e = n[0], r = n[1], i = -1, o = 0, u = t.length, a = u - 1; o < u; a = o++) {
      var c = t[o], f = c[0], s = c[1], l = t[a], h = l[0], d = l[1];
      if (Wu(c, l, n)) return 0;
      s > r != d > r && e < (h - f) * (r - s) / (d - s) + f && (i = -i)
    }
    return i
  }

  function Wu(t, n, e) {
    var r, i, o, u;
    return function (t, n, e) {
      return (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1])
    }(t, n, e) && (i = t[r = +(t[0] === n[0])], o = e[r], u = n[r], i <= o && o <= u || u <= o && o <= i)
  }

  var Zu = function () {
    },
    Qu = [[], [[[1, 1.5], [.5, 1]]], [[[1.5, 1], [1, 1.5]]], [[[1.5, 1], [.5, 1]]], [[[1, .5], [1.5, 1]]], [[[1, 1.5], [.5, 1]], [[1, .5], [1.5, 1]]], [[[1, .5], [1, 1.5]]], [[[1, .5], [.5, 1]]], [[[.5, 1], [1, .5]]], [[[1, 1.5], [1, .5]]], [[[.5, 1], [1, .5]], [[1.5, 1], [1, 1.5]]], [[[1.5, 1], [1, .5]]], [[[.5, 1], [1.5, 1]]], [[[1, 1.5], [1.5, 1]]], [[[.5, 1], [1, 1.5]]], []],
    Ju = function () {
      var t = 1, n = 1, e = N, r = a;

      function i(t) {
        var n = e(t);
        if (Array.isArray(n)) n = n.slice().sort(Hu); else {
          var r = y(t), i = r[0], u = r[1];
          n = E(i, u, n), n = w(Math.floor(i / n) * n, Math.floor(u / n) * n, n)
        }
        return n.map(function (n) {
          return o(t, n)
        })
      }

      function o(e, i) {
        var o = [], a = [];
        return function (e, r, i) {
          var o, a, c, f, s, l, h = new Array, d = new Array;
          o = a = -1, f = e[0] >= r, Qu[f << 1].forEach(p);
          for (; ++o < t - 1;) c = f, f = e[o + 1] >= r, Qu[c | f << 1].forEach(p);
          Qu[f << 0].forEach(p);
          for (; ++a < n - 1;) {
            for (o = -1, f = e[a * t + t] >= r, s = e[a * t] >= r, Qu[f << 1 | s << 2].forEach(p); ++o < t - 1;) c = f, f = e[a * t + t + o + 1] >= r, l = s, s = e[a * t + o + 1] >= r, Qu[c | f << 1 | s << 2 | l << 3].forEach(p);
            Qu[f | s << 3].forEach(p)
          }
          o = -1, s = e[a * t] >= r, Qu[s << 2].forEach(p);
          for (; ++o < t - 1;) l = s, s = e[a * t + o + 1] >= r, Qu[s << 2 | l << 3].forEach(p);

          function p(t) {
            var n, e, r = [t[0][0] + o, t[0][1] + a], c = [t[1][0] + o, t[1][1] + a], f = u(r), s = u(c);
            (n = d[f]) ? (e = h[s]) ? (delete d[n.end], delete h[e.start], n === e ? (n.ring.push(c), i(n.ring)) : h[n.start] = d[e.end] = {
              start: n.start,
              end: e.end,
              ring: n.ring.concat(e.ring)
            }) : (delete d[n.end], n.ring.push(c), d[n.end = s] = n) : (n = h[s]) ? (e = d[f]) ? (delete h[n.start], delete d[e.end], n === e ? (n.ring.push(c), i(n.ring)) : h[e.start] = d[n.end] = {
              start: e.start,
              end: n.end,
              ring: e.ring.concat(n.ring)
            }) : (delete h[n.start], n.ring.unshift(r), h[n.start = f] = n) : h[f] = d[s] = {
              start: f,
              end: s,
              ring: [r, c]
            }
          }

          Qu[s << 3].forEach(p)
        }(e, i, function (t) {
          r(t, e, i), Vu(t) > 0 ? o.push([t]) : a.push(t)
        }), a.forEach(function (t) {
          for (var n, e = 0, r = o.length; e < r; ++e) if (-1 !== Gu((n = o[e])[0], t)) return void n.push(t)
        }), {type: "MultiPolygon", value: i, coordinates: o}
      }

      function u(n) {
        return 2 * n[0] + n[1] * (t + 1) * 4
      }

      function a(e, r, i) {
        e.forEach(function (e) {
          var o, u = e[0], a = e[1], c = 0 | u, f = 0 | a, s = r[f * t + c];
          u > 0 && u < t && c === u && (o = r[f * t + c - 1], e[0] = u + (i - o) / (s - o) - .5), a > 0 && a < n && f === a && (o = r[(f - 1) * t + c], e[1] = a + (i - o) / (s - o) - .5)
        })
      }

      return i.contour = o, i.size = function (e) {
        if (!arguments.length) return [t, n];
        var r = Math.ceil(e[0]), o = Math.ceil(e[1]);
        if (!(r > 0 && o > 0)) throw new Error("invalid size");
        return t = r, n = o, i
      }, i.thresholds = function (t) {
        return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? Xu(Yu.call(t)) : Xu(t), i) : e
      }, i.smooth = function (t) {
        return arguments.length ? (r = t ? a : Zu, i) : r === a
      }, i
    };

  function Ku(t, n, e) {
    for (var r = t.width, i = t.height, o = 1 + (e << 1), u = 0; u < i; ++u) for (var a = 0, c = 0; a < r + e; ++a) a < r && (c += t.data[a + u * r]), a >= e && (a >= o && (c -= t.data[a - o + u * r]), n.data[a - e + u * r] = c / Math.min(a + 1, r - 1 + o - a, o))
  }

  function ta(t, n, e) {
    for (var r = t.width, i = t.height, o = 1 + (e << 1), u = 0; u < r; ++u) for (var a = 0, c = 0; a < i + e; ++a) a < i && (c += t.data[u + a * r]), a >= e && (a >= o && (c -= t.data[u + (a - o) * r]), n.data[u + (a - e) * r] = c / Math.min(a + 1, i - 1 + o - a, o))
  }

  function na(t) {
    return t[0]
  }

  function ea(t) {
    return t[1]
  }

  function ra() {
    return 1
  }

  var ia = function () {
    var t = na, n = ea, e = ra, r = 960, i = 500, o = 20, u = 2, a = 3 * o, c = r + 2 * a >> u, f = i + 2 * a >> u,
      s = Xu(20);

    function l(r) {
      var i = new Float32Array(c * f), l = new Float32Array(c * f);
      r.forEach(function (r, o, s) {
        var l = +t(r, o, s) + a >> u, h = +n(r, o, s) + a >> u, d = +e(r, o, s);
        l >= 0 && l < c && h >= 0 && h < f && (i[l + h * c] += d)
      }), Ku({width: c, height: f, data: i}, {width: c, height: f, data: l}, o >> u), ta({
        width: c,
        height: f,
        data: l
      }, {width: c, height: f, data: i}, o >> u), Ku({width: c, height: f, data: i}, {
        width: c,
        height: f,
        data: l
      }, o >> u), ta({width: c, height: f, data: l}, {width: c, height: f, data: i}, o >> u), Ku({
        width: c,
        height: f,
        data: i
      }, {width: c, height: f, data: l}, o >> u), ta({width: c, height: f, data: l}, {
        width: c,
        height: f,
        data: i
      }, o >> u);
      var d = s(i);
      if (!Array.isArray(d)) {
        var p = z(i);
        d = E(0, p, d), (d = w(0, Math.floor(p / d) * d, d)).shift()
      }
      return Ju().thresholds(d).size([c, f])(i).map(h)
    }

    function h(t) {
      return t.value *= Math.pow(2, -2 * u), t.coordinates.forEach(d), t
    }

    function d(t) {
      t.forEach(p)
    }

    function p(t) {
      t.forEach(v)
    }

    function v(t) {
      t[0] = t[0] * Math.pow(2, u) - a, t[1] = t[1] * Math.pow(2, u) - a
    }

    function y() {
      return c = r + 2 * (a = 3 * o) >> u, f = i + 2 * a >> u, l
    }

    return l.x = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : Xu(+n), l) : t
    }, l.y = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : Xu(+t), l) : n
    }, l.weight = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : Xu(+t), l) : e
    }, l.size = function (t) {
      if (!arguments.length) return [r, i];
      var n = Math.ceil(t[0]), e = Math.ceil(t[1]);
      if (!(n >= 0 || n >= 0)) throw new Error("invalid size");
      return r = n, i = e, y()
    }, l.cellSize = function (t) {
      if (!arguments.length) return 1 << u;
      if (!((t = +t) >= 1)) throw new Error("invalid cell size");
      return u = Math.floor(Math.log(t) / Math.LN2), y()
    }, l.thresholds = function (t) {
      return arguments.length ? (s = "function" == typeof t ? t : Array.isArray(t) ? Xu(Yu.call(t)) : Xu(t), l) : s
    }, l.bandwidth = function (t) {
      if (!arguments.length) return Math.sqrt(o * (o + 1));
      if (!((t = +t) >= 0)) throw new Error("invalid bandwidth");
      return o = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2), y()
    }, l
  }, oa = {}, ua = {}, aa = 34, ca = 10, fa = 13;

  function sa(t) {
    return new Function("d", "return {" + t.map(function (t, n) {
      return JSON.stringify(t) + ": d[" + n + "]"
    }).join(",") + "}")
  }

  function la(t) {
    var n = Object.create(null), e = [];
    return t.forEach(function (t) {
      for (var r in t) r in n || e.push(n[r] = r)
    }), e
  }

  function ha(t, n) {
    var e = t + "", r = e.length;
    return r < n ? new Array(n - r + 1).join(0) + e : e
  }

  function da(t) {
    var n, e = t.getUTCHours(), r = t.getUTCMinutes(), i = t.getUTCSeconds(), o = t.getUTCMilliseconds();
    return isNaN(t) ? "Invalid Date" : ((n = t.getUTCFullYear()) < 0 ? "-" + ha(-n, 6) : n > 9999 ? "+" + ha(n, 6) : ha(n, 4)) + "-" + ha(t.getUTCMonth() + 1, 2) + "-" + ha(t.getUTCDate(), 2) + (o ? "T" + ha(e, 2) + ":" + ha(r, 2) + ":" + ha(i, 2) + "." + ha(o, 3) + "Z" : i ? "T" + ha(e, 2) + ":" + ha(r, 2) + ":" + ha(i, 2) + "Z" : r || e ? "T" + ha(e, 2) + ":" + ha(r, 2) + "Z" : "")
  }

  var pa = function (t) {
      var n = new RegExp('["' + t + "\n\r]"), e = t.charCodeAt(0);

      function r(t, n) {
        var r, i = [], o = t.length, u = 0, a = 0, c = o <= 0, f = !1;

        function s() {
          if (c) return ua;
          if (f) return f = !1, oa;
          var n, r, i = u;
          if (t.charCodeAt(i) === aa) {
            for (; u++ < o && t.charCodeAt(u) !== aa || t.charCodeAt(++u) === aa;) ;
            return (n = u) >= o ? c = !0 : (r = t.charCodeAt(u++)) === ca ? f = !0 : r === fa && (f = !0, t.charCodeAt(u) === ca && ++u), t.slice(i + 1, n - 1).replace(/""/g, '"')
          }
          for (; u < o;) {
            if ((r = t.charCodeAt(n = u++)) === ca) f = !0; else if (r === fa) f = !0, t.charCodeAt(u) === ca && ++u; else if (r !== e) continue;
            return t.slice(i, n)
          }
          return c = !0, t.slice(i, o)
        }

        for (t.charCodeAt(o - 1) === ca && --o, t.charCodeAt(o - 1) === fa && --o; (r = s()) !== ua;) {
          for (var l = []; r !== oa && r !== ua;) l.push(r), r = s();
          n && null == (l = n(l, a++)) || i.push(l)
        }
        return i
      }

      function i(n, e) {
        return n.map(function (n) {
          return e.map(function (t) {
            return u(n[t])
          }).join(t)
        })
      }

      function o(n) {
        return n.map(u).join(t)
      }

      function u(t) {
        return null == t ? "" : t instanceof Date ? da(t) : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
      }

      return {
        parse: function (t, n) {
          var e, i, o = r(t, function (t, r) {
            if (e) return e(t, r - 1);
            i = t, e = n ? function (t, n) {
              var e = sa(t);
              return function (r, i) {
                return n(e(r), i, t)
              }
            }(t, n) : sa(t)
          });
          return o.columns = i || [], o
        }, parseRows: r, format: function (n, e) {
          return null == e && (e = la(n)), [e.map(u).join(t)].concat(i(n, e)).join("\n")
        }, formatBody: function (t, n) {
          return null == n && (n = la(t)), i(t, n).join("\n")
        }, formatRows: function (t) {
          return t.map(o).join("\n")
        }
      }
    }, va = pa(","), ya = va.parse, ga = va.parseRows, ba = va.format, ma = va.formatBody, _a = va.formatRows,
    xa = pa("\t"), wa = xa.parse, Ma = xa.parseRows, Sa = xa.format, Ta = xa.formatBody, Aa = xa.formatRows;

  function ka(t) {
    for (var n in t) {
      var e, r = t[n].trim();
      if (r) if ("true" === r) r = !0; else if ("false" === r) r = !1; else if ("NaN" === r) r = NaN; else if (isNaN(e = +r)) {
        if (!/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/.test(r)) continue;
        r = new Date(r)
      } else r = e; else r = null;
      t[n] = r
    }
    return t
  }

  function Ea(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);
    return t.blob()
  }

  var Na = function (t, n) {
    return fetch(t, n).then(Ea)
  };

  function Ca(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);
    return t.arrayBuffer()
  }

  var Pa = function (t, n) {
    return fetch(t, n).then(Ca)
  };

  function Ra(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);
    return t.text()
  }

  var Oa = function (t, n) {
    return fetch(t, n).then(Ra)
  };

  function za(t) {
    return function (n, e, r) {
      return 2 === arguments.length && "function" == typeof e && (r = e, e = void 0), Oa(n, e).then(function (n) {
        return t(n, r)
      })
    }
  }

  function La(t, n, e, r) {
    3 === arguments.length && "function" == typeof e && (r = e, e = void 0);
    var i = pa(t);
    return Oa(n, e).then(function (t) {
      return i.parse(t, r)
    })
  }

  var Ua = za(ya), ja = za(wa), Da = function (t, n) {
    return new Promise(function (e, r) {
      var i = new Image;
      for (var o in n) i[o] = n[o];
      i.onerror = r, i.onload = function () {
        e(i)
      }, i.src = t
    })
  };

  function qa(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);
    return t.json()
  }

  var Ba = function (t, n) {
    return fetch(t, n).then(qa)
  };

  function Ia(t) {
    return function (n, e) {
      return Oa(n, e).then(function (n) {
        return (new DOMParser).parseFromString(n, t)
      })
    }
  }

  var Fa = Ia("application/xml"), Ya = Ia("text/html"), Ha = Ia("image/svg+xml"), Va = function (t, n) {
    var e;

    function r() {
      var r, i, o = e.length, u = 0, a = 0;
      for (r = 0; r < o; ++r) u += (i = e[r]).x, a += i.y;
      for (u = u / o - t, a = a / o - n, r = 0; r < o; ++r) (i = e[r]).x -= u, i.y -= a
    }

    return null == t && (t = 0), null == n && (n = 0), r.initialize = function (t) {
      e = t
    }, r.x = function (n) {
      return arguments.length ? (t = +n, r) : t
    }, r.y = function (t) {
      return arguments.length ? (n = +t, r) : n
    }, r
  }, Xa = function (t) {
    return function () {
      return t
    }
  }, Ga = function () {
    return 1e-6 * (Math.random() - .5)
  };

  function $a(t, n, e, r) {
    if (isNaN(n) || isNaN(e)) return t;
    var i, o, u, a, c, f, s, l, h, d = t._root, p = {data: r}, v = t._x0, y = t._y0, g = t._x1, b = t._y1;
    if (!d) return t._root = p, t;
    for (; d.length;) if ((f = n >= (o = (v + g) / 2)) ? v = o : g = o, (s = e >= (u = (y + b) / 2)) ? y = u : b = u, i = d, !(d = d[l = s << 1 | f])) return i[l] = p, t;
    if (a = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === a && e === c) return p.next = d, i ? i[l] = p : t._root = p, t;
    do {
      i = i ? i[l] = new Array(4) : t._root = new Array(4), (f = n >= (o = (v + g) / 2)) ? v = o : g = o, (s = e >= (u = (y + b) / 2)) ? y = u : b = u
    } while ((l = s << 1 | f) == (h = (c >= u) << 1 | a >= o));
    return i[h] = d, i[l] = p, t
  }

  var Wa = function (t, n, e, r, i) {
    this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i
  };

  function Za(t) {
    return t[0]
  }

  function Qa(t) {
    return t[1]
  }

  function Ja(t, n, e) {
    var r = new Ka(null == n ? Za : n, null == e ? Qa : e, NaN, NaN, NaN, NaN);
    return null == t ? r : r.addAll(t)
  }

  function Ka(t, n, e, r, i, o) {
    this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0
  }

  function tc(t) {
    for (var n = {data: t.data}, e = n; t = t.next;) e = e.next = {data: t.data};
    return n
  }

  var nc = Ja.prototype = Ka.prototype;

  function ec(t) {
    return t.x + t.vx
  }

  function rc(t) {
    return t.y + t.vy
  }

  nc.copy = function () {
    var t, n, e = new Ka(this._x, this._y, this._x0, this._y0, this._x1, this._y1), r = this._root;
    if (!r) return e;
    if (!r.length) return e._root = tc(r), e;
    for (t = [{
      source: r,
      target: e._root = new Array(4)
    }]; r = t.pop();) for (var i = 0; i < 4; ++i) (n = r.source[i]) && (n.length ? t.push({
      source: n,
      target: r.target[i] = new Array(4)
    }) : r.target[i] = tc(n));
    return e
  }, nc.add = function (t) {
    var n = +this._x.call(null, t), e = +this._y.call(null, t);
    return $a(this.cover(n, e), n, e, t)
  }, nc.addAll = function (t) {
    var n, e, r, i, o = t.length, u = new Array(o), a = new Array(o), c = 1 / 0, f = 1 / 0, s = -1 / 0, l = -1 / 0;
    for (e = 0; e < o; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (u[e] = r, a[e] = i, r < c && (c = r), r > s && (s = r), i < f && (f = i), i > l && (l = i));
    if (c > s || f > l) return this;
    for (this.cover(c, f).cover(s, l), e = 0; e < o; ++e) $a(this, u[e], a[e], t[e]);
    return this
  }, nc.cover = function (t, n) {
    if (isNaN(t = +t) || isNaN(n = +n)) return this;
    var e = this._x0, r = this._y0, i = this._x1, o = this._y1;
    if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1; else {
      for (var u, a, c = i - e, f = this._root; e > t || t >= i || r > n || n >= o;) switch (a = (n < r) << 1 | t < e, (u = new Array(4))[a] = f, f = u, c *= 2, a) {
        case 0:
          i = e + c, o = r + c;
          break;
        case 1:
          e = i - c, o = r + c;
          break;
        case 2:
          i = e + c, r = o - c;
          break;
        case 3:
          e = i - c, r = o - c
      }
      this._root && this._root.length && (this._root = f)
    }
    return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this
  }, nc.data = function () {
    var t = [];
    return this.visit(function (n) {
      if (!n.length) do {
        t.push(n.data)
      } while (n = n.next)
    }), t
  }, nc.extent = function (t) {
    return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
  }, nc.find = function (t, n, e) {
    var r, i, o, u, a, c, f, s = this._x0, l = this._y0, h = this._x1, d = this._y1, p = [], v = this._root;
    for (v && p.push(new Wa(v, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); c = p.pop();) if (!(!(v = c.node) || (i = c.x0) > h || (o = c.y0) > d || (u = c.x1) < s || (a = c.y1) < l)) if (v.length) {
      var y = (i + u) / 2, g = (o + a) / 2;
      p.push(new Wa(v[3], y, g, u, a), new Wa(v[2], i, g, y, a), new Wa(v[1], y, o, u, g), new Wa(v[0], i, o, y, g)), (f = (n >= g) << 1 | t >= y) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = c)
    } else {
      var b = t - +this._x.call(null, v.data), m = n - +this._y.call(null, v.data), _ = b * b + m * m;
      if (_ < e) {
        var x = Math.sqrt(e = _);
        s = t - x, l = n - x, h = t + x, d = n + x, r = v.data
      }
    }
    return r
  }, nc.remove = function (t) {
    if (isNaN(o = +this._x.call(null, t)) || isNaN(u = +this._y.call(null, t))) return this;
    var n, e, r, i, o, u, a, c, f, s, l, h, d = this._root, p = this._x0, v = this._y0, y = this._x1, g = this._y1;
    if (!d) return this;
    if (d.length) for (; ;) {
      if ((f = o >= (a = (p + y) / 2)) ? p = a : y = a, (s = u >= (c = (v + g) / 2)) ? v = c : g = c, n = d, !(d = d[l = s << 1 | f])) return this;
      if (!d.length) break;
      (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
    }
    for (; d.data !== t;) if (r = d, !(d = d.next)) return this;
    return (i = d.next) && delete d.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d : this._root = d), this) : (this._root = i, this)
  }, nc.removeAll = function (t) {
    for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
    return this
  }, nc.root = function () {
    return this._root
  }, nc.size = function () {
    var t = 0;
    return this.visit(function (n) {
      if (!n.length) do {
        ++t
      } while (n = n.next)
    }), t
  }, nc.visit = function (t) {
    var n, e, r, i, o, u, a = [], c = this._root;
    for (c && a.push(new Wa(c, this._x0, this._y0, this._x1, this._y1)); n = a.pop();) if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, u = n.y1) && c.length) {
      var f = (r + o) / 2, s = (i + u) / 2;
      (e = c[3]) && a.push(new Wa(e, f, s, o, u)), (e = c[2]) && a.push(new Wa(e, r, s, f, u)), (e = c[1]) && a.push(new Wa(e, f, i, o, s)), (e = c[0]) && a.push(new Wa(e, r, i, f, s))
    }
    return this
  }, nc.visitAfter = function (t) {
    var n, e = [], r = [];
    for (this._root && e.push(new Wa(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
      var i = n.node;
      if (i.length) {
        var o, u = n.x0, a = n.y0, c = n.x1, f = n.y1, s = (u + c) / 2, l = (a + f) / 2;
        (o = i[0]) && e.push(new Wa(o, u, a, s, l)), (o = i[1]) && e.push(new Wa(o, s, a, c, l)), (o = i[2]) && e.push(new Wa(o, u, l, s, f)), (o = i[3]) && e.push(new Wa(o, s, l, c, f))
      }
      r.push(n)
    }
    for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
    return this
  }, nc.x = function (t) {
    return arguments.length ? (this._x = t, this) : this._x
  }, nc.y = function (t) {
    return arguments.length ? (this._y = t, this) : this._y
  };
  var ic = function (t) {
    var n, e, r = 1, i = 1;

    function o() {
      for (var t, o, a, c, f, s, l, h = n.length, d = 0; d < i; ++d) for (o = Ja(n, ec, rc).visitAfter(u), t = 0; t < h; ++t) a = n[t], s = e[a.index], l = s * s, c = a.x + a.vx, f = a.y + a.vy, o.visit(p);

      function p(t, n, e, i, o) {
        var u = t.data, h = t.r, d = s + h;
        if (!u) return n > c + d || i < c - d || e > f + d || o < f - d;
        if (u.index > a.index) {
          var p = c - u.x - u.vx, v = f - u.y - u.vy, y = p * p + v * v;
          y < d * d && (0 === p && (y += (p = Ga()) * p), 0 === v && (y += (v = Ga()) * v), y = (d - (y = Math.sqrt(y))) / y * r, a.vx += (p *= y) * (d = (h *= h) / (l + h)), a.vy += (v *= y) * d, u.vx -= p * (d = 1 - d), u.vy -= v * d)
        }
      }
    }

    function u(t) {
      if (t.data) return t.r = e[t.data.index];
      for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r)
    }

    function a() {
      if (n) {
        var r, i, o = n.length;
        for (e = new Array(o), r = 0; r < o; ++r) i = n[r], e[i.index] = +t(i, r, n)
      }
    }

    return "function" != typeof t && (t = Xa(null == t ? 1 : +t)), o.initialize = function (t) {
      n = t, a()
    }, o.iterations = function (t) {
      return arguments.length ? (i = +t, o) : i
    }, o.strength = function (t) {
      return arguments.length ? (r = +t, o) : r
    }, o.radius = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : Xa(+n), a(), o) : t
    }, o
  };

  function oc(t) {
    return t.index
  }

  function uc(t, n) {
    var e = t.get(n);
    if (!e) throw new Error("missing: " + n);
    return e
  }

  var ac = function (t) {
    var n, e, r, i, o, u = oc, a = function (t) {
      return 1 / Math.min(i[t.source.index], i[t.target.index])
    }, c = Xa(30), f = 1;

    function s(r) {
      for (var i = 0, u = t.length; i < f; ++i) for (var a, c, s, l, h, d, p, v = 0; v < u; ++v) c = (a = t[v]).source, l = (s = a.target).x + s.vx - c.x - c.vx || Ga(), h = s.y + s.vy - c.y - c.vy || Ga(), l *= d = ((d = Math.sqrt(l * l + h * h)) - e[v]) / d * r * n[v], h *= d, s.vx -= l * (p = o[v]), s.vy -= h * p, c.vx += l * (p = 1 - p), c.vy += h * p
    }

    function l() {
      if (r) {
        var a, c, f = r.length, s = t.length, l = Cu(r, u);
        for (a = 0, i = new Array(f); a < s; ++a) (c = t[a]).index = a, "object" != typeof c.source && (c.source = uc(l, c.source)), "object" != typeof c.target && (c.target = uc(l, c.target)), i[c.source.index] = (i[c.source.index] || 0) + 1, i[c.target.index] = (i[c.target.index] || 0) + 1;
        for (a = 0, o = new Array(s); a < s; ++a) c = t[a], o[a] = i[c.source.index] / (i[c.source.index] + i[c.target.index]);
        n = new Array(s), h(), e = new Array(s), d()
      }
    }

    function h() {
      if (r) for (var e = 0, i = t.length; e < i; ++e) n[e] = +a(t[e], e, t)
    }

    function d() {
      if (r) for (var n = 0, i = t.length; n < i; ++n) e[n] = +c(t[n], n, t)
    }

    return null == t && (t = []), s.initialize = function (t) {
      r = t, l()
    }, s.links = function (n) {
      return arguments.length ? (t = n, l(), s) : t
    }, s.id = function (t) {
      return arguments.length ? (u = t, s) : u
    }, s.iterations = function (t) {
      return arguments.length ? (f = +t, s) : f
    }, s.strength = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : Xa(+t), h(), s) : a
    }, s.distance = function (t) {
      return arguments.length ? (c = "function" == typeof t ? t : Xa(+t), d(), s) : c
    }, s
  };

  function cc(t) {
    return t.x
  }

  function fc(t) {
    return t.y
  }

  var sc = 10, lc = Math.PI * (3 - Math.sqrt(5)), hc = function (t) {
    var n, e = 1, r = .001, i = 1 - Math.pow(r, 1 / 300), o = 0, u = .6, a = Cu(), c = ni(s), f = dt("tick", "end");

    function s() {
      l(), f.call("tick", n), e < r && (c.stop(), f.call("end", n))
    }

    function l(r) {
      var c, f, s = t.length;
      void 0 === r && (r = 1);
      for (var l = 0; l < r; ++l) for (e += (o - e) * i, a.each(function (t) {
        t(e)
      }), c = 0; c < s; ++c) null == (f = t[c]).fx ? f.x += f.vx *= u : (f.x = f.fx, f.vx = 0), null == f.fy ? f.y += f.vy *= u : (f.y = f.fy, f.vy = 0);
      return n
    }

    function h() {
      for (var n, e = 0, r = t.length; e < r; ++e) {
        if ((n = t[e]).index = e, null != n.fx && (n.x = n.fx), null != n.fy && (n.y = n.fy), isNaN(n.x) || isNaN(n.y)) {
          var i = sc * Math.sqrt(e), o = e * lc;
          n.x = i * Math.cos(o), n.y = i * Math.sin(o)
        }
        (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
      }
    }

    function d(n) {
      return n.initialize && n.initialize(t), n
    }

    return null == t && (t = []), h(), n = {
      tick: l, restart: function () {
        return c.restart(s), n
      }, stop: function () {
        return c.stop(), n
      }, nodes: function (e) {
        return arguments.length ? (t = e, h(), a.each(d), n) : t
      }, alpha: function (t) {
        return arguments.length ? (e = +t, n) : e
      }, alphaMin: function (t) {
        return arguments.length ? (r = +t, n) : r
      }, alphaDecay: function (t) {
        return arguments.length ? (i = +t, n) : +i
      }, alphaTarget: function (t) {
        return arguments.length ? (o = +t, n) : o
      }, velocityDecay: function (t) {
        return arguments.length ? (u = 1 - t, n) : 1 - u
      }, force: function (t, e) {
        return arguments.length > 1 ? (null == e ? a.remove(t) : a.set(t, d(e)), n) : a.get(t)
      }, find: function (n, e, r) {
        var i, o, u, a, c, f = 0, s = t.length;
        for (null == r ? r = 1 / 0 : r *= r, f = 0; f < s; ++f) (u = (i = n - (a = t[f]).x) * i + (o = e - a.y) * o) < r && (c = a, r = u);
        return c
      }, on: function (t, e) {
        return arguments.length > 1 ? (f.on(t, e), n) : f.on(t)
      }
    }
  }, dc = function () {
    var t, n, e, r, i = Xa(-30), o = 1, u = 1 / 0, a = .81;

    function c(r) {
      var i, o = t.length, u = Ja(t, cc, fc).visitAfter(s);
      for (e = r, i = 0; i < o; ++i) n = t[i], u.visit(l)
    }

    function f() {
      if (t) {
        var n, e, o = t.length;
        for (r = new Array(o), n = 0; n < o; ++n) e = t[n], r[e.index] = +i(e, n, t)
      }
    }

    function s(t) {
      var n, e, i, o, u, a = 0, c = 0;
      if (t.length) {
        for (i = o = u = 0; u < 4; ++u) (n = t[u]) && (e = Math.abs(n.value)) && (a += n.value, c += e, i += e * n.x, o += e * n.y);
        t.x = i / c, t.y = o / c
      } else {
        (n = t).x = n.data.x, n.y = n.data.y;
        do {
          a += r[n.data.index]
        } while (n = n.next)
      }
      t.value = a
    }

    function l(t, i, c, f) {
      if (!t.value) return !0;
      var s = t.x - n.x, l = t.y - n.y, h = f - i, d = s * s + l * l;
      if (h * h / a < d) return d < u && (0 === s && (d += (s = Ga()) * s), 0 === l && (d += (l = Ga()) * l), d < o && (d = Math.sqrt(o * d)), n.vx += s * t.value * e / d, n.vy += l * t.value * e / d), !0;
      if (!(t.length || d >= u)) {
        (t.data !== n || t.next) && (0 === s && (d += (s = Ga()) * s), 0 === l && (d += (l = Ga()) * l), d < o && (d = Math.sqrt(o * d)));
        do {
          t.data !== n && (h = r[t.data.index] * e / d, n.vx += s * h, n.vy += l * h)
        } while (t = t.next)
      }
    }

    return c.initialize = function (n) {
      t = n, f()
    }, c.strength = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : Xa(+t), f(), c) : i
    }, c.distanceMin = function (t) {
      return arguments.length ? (o = t * t, c) : Math.sqrt(o)
    }, c.distanceMax = function (t) {
      return arguments.length ? (u = t * t, c) : Math.sqrt(u)
    }, c.theta = function (t) {
      return arguments.length ? (a = t * t, c) : Math.sqrt(a)
    }, c
  }, pc = function (t, n, e) {
    var r, i, o, u = Xa(.1);

    function a(t) {
      for (var u = 0, a = r.length; u < a; ++u) {
        var c = r[u], f = c.x - n || 1e-6, s = c.y - e || 1e-6, l = Math.sqrt(f * f + s * s),
          h = (o[u] - l) * i[u] * t / l;
        c.vx += f * h, c.vy += s * h
      }
    }

    function c() {
      if (r) {
        var n, e = r.length;
        for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) o[n] = +t(r[n], n, r), i[n] = isNaN(o[n]) ? 0 : +u(r[n], n, r)
      }
    }

    return "function" != typeof t && (t = Xa(+t)), null == n && (n = 0), null == e && (e = 0), a.initialize = function (t) {
      r = t, c()
    }, a.strength = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : Xa(+t), c(), a) : u
    }, a.radius = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : Xa(+n), c(), a) : t
    }, a.x = function (t) {
      return arguments.length ? (n = +t, a) : n
    }, a.y = function (t) {
      return arguments.length ? (e = +t, a) : e
    }, a
  }, vc = function (t) {
    var n, e, r, i = Xa(.1);

    function o(t) {
      for (var i, o = 0, u = n.length; o < u; ++o) (i = n[o]).vx += (r[o] - i.x) * e[o] * t
    }

    function u() {
      if (n) {
        var o, u = n.length;
        for (e = new Array(u), r = new Array(u), o = 0; o < u; ++o) e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n)
      }
    }

    return "function" != typeof t && (t = Xa(null == t ? 0 : +t)), o.initialize = function (t) {
      n = t, u()
    }, o.strength = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : Xa(+t), u(), o) : i
    }, o.x = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : Xa(+n), u(), o) : t
    }, o
  }, yc = function (t) {
    var n, e, r, i = Xa(.1);

    function o(t) {
      for (var i, o = 0, u = n.length; o < u; ++o) (i = n[o]).vy += (r[o] - i.y) * e[o] * t
    }

    function u() {
      if (n) {
        var o, u = n.length;
        for (e = new Array(u), r = new Array(u), o = 0; o < u; ++o) e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n)
      }
    }

    return "function" != typeof t && (t = Xa(null == t ? 0 : +t)), o.initialize = function (t) {
      n = t, u()
    }, o.strength = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : Xa(+t), u(), o) : i
    }, o.y = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : Xa(+n), u(), o) : t
    }, o
  }, gc = function (t, n) {
    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
    var e, r = t.slice(0, e);
    return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
  }, bc = function (t) {
    return (t = gc(Math.abs(t))) ? t[1] : NaN
  }, mc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

  function _c(t) {
    return new xc(t)
  }

  function xc(t) {
    if (!(n = mc.exec(t))) throw new Error("invalid format: " + t);
    var n;
    this.fill = n[1] || " ", this.align = n[2] || ">", this.sign = n[3] || "-", this.symbol = n[4] || "", this.zero = !!n[5], this.width = n[6] && +n[6], this.comma = !!n[7], this.precision = n[8] && +n[8].slice(1), this.trim = !!n[9], this.type = n[10] || ""
  }

  _c.prototype = xc.prototype, xc.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
  };
  var wc, Mc, Sc, Tc, Ac = function (t) {
    t:for (var n, e = t.length, r = 1, i = -1; r < e; ++r) switch (t[r]) {
      case".":
        i = n = r;
        break;
      case"0":
        0 === i && (i = r), n = r;
        break;
      default:
        if (i > 0) {
          if (!+t[r]) break t;
          i = 0
        }
    }
    return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t
  }, kc = function (t, n) {
    var e = gc(t, n);
    if (!e) return t + "";
    var r = e[0], i = e[1];
    return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
  }, Ec = {
    "%": function (t, n) {
      return (100 * t).toFixed(n)
    }, b: function (t) {
      return Math.round(t).toString(2)
    }, c: function (t) {
      return t + ""
    }, d: function (t) {
      return Math.round(t).toString(10)
    }, e: function (t, n) {
      return t.toExponential(n)
    }, f: function (t, n) {
      return t.toFixed(n)
    }, g: function (t, n) {
      return t.toPrecision(n)
    }, o: function (t) {
      return Math.round(t).toString(8)
    }, p: function (t, n) {
      return kc(100 * t, n)
    }, r: kc, s: function (t, n) {
      var e = gc(t, n);
      if (!e) return t + "";
      var r = e[0], i = e[1], o = i - (wc = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1, u = r.length;
      return o === u ? r : o > u ? r + new Array(o - u + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + gc(t, Math.max(0, n + o - 1))[0]
    }, X: function (t) {
      return Math.round(t).toString(16).toUpperCase()
    }, x: function (t) {
      return Math.round(t).toString(16)
    }
  }, Nc = function (t) {
    return t
  }, Cc = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"], Pc = function (t) {
    var n, e, r = t.grouping && t.thousands ? (n = t.grouping, e = t.thousands, function (t, r) {
      for (var i = t.length, o = [], u = 0, a = n[0], c = 0; i > 0 && a > 0 && (c + a + 1 > r && (a = Math.max(1, r - c)), o.push(t.substring(i -= a, i + a)), !((c += a + 1) > r));) a = n[u = (u + 1) % n.length];
      return o.reverse().join(e)
    }) : Nc, i = t.currency, o = t.decimal, u = t.numerals ? function (t) {
      return function (n) {
        return n.replace(/[0-9]/g, function (n) {
          return t[+n]
        })
      }
    }(t.numerals) : Nc, a = t.percent || "%";

    function c(t) {
      var n = (t = _c(t)).fill, e = t.align, c = t.sign, f = t.symbol, s = t.zero, l = t.width, h = t.comma,
        d = t.precision, p = t.trim, v = t.type;
      "n" === v ? (h = !0, v = "g") : Ec[v] || (null == d && (d = 12), p = !0, v = "g"), (s || "0" === n && "=" === e) && (s = !0, n = "0", e = "=");
      var y = "$" === f ? i[0] : "#" === f && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "",
        g = "$" === f ? i[1] : /[%p]/.test(v) ? a : "", b = Ec[v], m = /[defgprs%]/.test(v);

      function _(t) {
        var i, a, f, _ = y, x = g;
        if ("c" === v) x = b(t) + x, t = ""; else {
          var w = (t = +t) < 0;
          if (t = b(Math.abs(t), d), p && (t = Ac(t)), w && 0 == +t && (w = !1), _ = (w ? "(" === c ? c : "-" : "-" === c || "(" === c ? "" : c) + _, x = ("s" === v ? Cc[8 + wc / 3] : "") + x + (w && "(" === c ? ")" : ""), m) for (i = -1, a = t.length; ++i < a;) if (48 > (f = t.charCodeAt(i)) || f > 57) {
            x = (46 === f ? o + t.slice(i + 1) : t.slice(i)) + x, t = t.slice(0, i);
            break
          }
        }
        h && !s && (t = r(t, 1 / 0));
        var M = _.length + t.length + x.length, S = M < l ? new Array(l - M + 1).join(n) : "";
        switch (h && s && (t = r(S + t, S.length ? l - x.length : 1 / 0), S = ""), e) {
          case"<":
            t = _ + t + x + S;
            break;
          case"=":
            t = _ + S + t + x;
            break;
          case"^":
            t = S.slice(0, M = S.length >> 1) + _ + t + x + S.slice(M);
            break;
          default:
            t = S + _ + t + x
        }
        return u(t)
      }

      return d = null == d ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), _.toString = function () {
        return t + ""
      }, _
    }

    return {
      format: c, formatPrefix: function (t, n) {
        var e = c(((t = _c(t)).type = "f", t)), r = 3 * Math.max(-8, Math.min(8, Math.floor(bc(n) / 3))),
          i = Math.pow(10, -r), o = Cc[8 + r / 3];
        return function (t) {
          return e(i * t) + o
        }
      }
    }
  };

  function Rc(t) {
    return Mc = Pc(t), Sc = Mc.format, Tc = Mc.formatPrefix, Mc
  }

  Rc({decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""]});
  var Oc = function (t) {
    return Math.max(0, -bc(Math.abs(t)))
  }, zc = function (t, n) {
    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(bc(n) / 3))) - bc(Math.abs(t)))
  }, Lc = function (t, n) {
    return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, bc(n) - bc(t)) + 1
  }, Uc = function () {
    return new jc
  };

  function jc() {
    this.reset()
  }

  jc.prototype = {
    constructor: jc, reset: function () {
      this.s = this.t = 0
    }, add: function (t) {
      qc(Dc, t, this.t), qc(this, Dc.s, this.s), this.s ? this.t += Dc.t : this.s = Dc.t
    }, valueOf: function () {
      return this.s
    }
  };
  var Dc = new jc;

  function qc(t, n, e) {
    var r = t.s = n + e, i = r - n, o = r - i;
    t.t = n - o + (e - i)
  }

  var Bc = 1e-6, Ic = 1e-12, Fc = Math.PI, Yc = Fc / 2, Hc = Fc / 4, Vc = 2 * Fc, Xc = 180 / Fc, Gc = Fc / 180,
    $c = Math.abs, Wc = Math.atan, Zc = Math.atan2, Qc = Math.cos, Jc = Math.ceil, Kc = Math.exp,
    tf = (Math.floor, Math.log), nf = Math.pow, ef = Math.sin, rf = Math.sign || function (t) {
      return t > 0 ? 1 : t < 0 ? -1 : 0
    }, of = Math.sqrt, uf = Math.tan;

  function af(t) {
    return t > 1 ? 0 : t < -1 ? Fc : Math.acos(t)
  }

  function cf(t) {
    return t > 1 ? Yc : t < -1 ? -Yc : Math.asin(t)
  }

  function ff(t) {
    return (t = ef(t / 2)) * t
  }

  function sf() {
  }

  function lf(t, n) {
    t && df.hasOwnProperty(t.type) && df[t.type](t, n)
  }

  var hf = {
    Feature: function (t, n) {
      lf(t.geometry, n)
    }, FeatureCollection: function (t, n) {
      for (var e = t.features, r = -1, i = e.length; ++r < i;) lf(e[r].geometry, n)
    }
  }, df = {
    Sphere: function (t, n) {
      n.sphere()
    }, Point: function (t, n) {
      t = t.coordinates, n.point(t[0], t[1], t[2])
    }, MultiPoint: function (t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
    }, LineString: function (t, n) {
      pf(t.coordinates, n, 0)
    }, MultiLineString: function (t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) pf(e[r], n, 0)
    }, Polygon: function (t, n) {
      vf(t.coordinates, n)
    }, MultiPolygon: function (t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) vf(e[r], n)
    }, GeometryCollection: function (t, n) {
      for (var e = t.geometries, r = -1, i = e.length; ++r < i;) lf(e[r], n)
    }
  };

  function pf(t, n, e) {
    var r, i = -1, o = t.length - e;
    for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
    n.lineEnd()
  }

  function vf(t, n) {
    var e = -1, r = t.length;
    for (n.polygonStart(); ++e < r;) pf(t[e], n, 1);
    n.polygonEnd()
  }

  var yf, gf, bf, mf, _f, xf = function (t, n) {
    t && hf.hasOwnProperty(t.type) ? hf[t.type](t, n) : lf(t, n)
  }, wf = Uc(), Mf = Uc(), Sf = {
    point: sf, lineStart: sf, lineEnd: sf, polygonStart: function () {
      wf.reset(), Sf.lineStart = Tf, Sf.lineEnd = Af
    }, polygonEnd: function () {
      var t = +wf;
      Mf.add(t < 0 ? Vc + t : t), this.lineStart = this.lineEnd = this.point = sf
    }, sphere: function () {
      Mf.add(Vc)
    }
  };

  function Tf() {
    Sf.point = kf
  }

  function Af() {
    Ef(yf, gf)
  }

  function kf(t, n) {
    Sf.point = Ef, yf = t, gf = n, bf = t *= Gc, mf = Qc(n = (n *= Gc) / 2 + Hc), _f = ef(n)
  }

  function Ef(t, n) {
    var e = (t *= Gc) - bf, r = e >= 0 ? 1 : -1, i = r * e, o = Qc(n = (n *= Gc) / 2 + Hc), u = ef(n), a = _f * u,
      c = mf * o + a * Qc(i), f = a * r * ef(i);
    wf.add(Zc(f, c)), bf = t, mf = o, _f = u
  }

  var Nf = function (t) {
    return Mf.reset(), xf(t, Sf), 2 * Mf
  };

  function Cf(t) {
    return [Zc(t[1], t[0]), cf(t[2])]
  }

  function Pf(t) {
    var n = t[0], e = t[1], r = Qc(e);
    return [r * Qc(n), r * ef(n), ef(e)]
  }

  function Rf(t, n) {
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
  }

  function Of(t, n) {
    return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
  }

  function zf(t, n) {
    t[0] += n[0], t[1] += n[1], t[2] += n[2]
  }

  function Lf(t, n) {
    return [t[0] * n, t[1] * n, t[2] * n]
  }

  function Uf(t) {
    var n = of(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
    t[0] /= n, t[1] /= n, t[2] /= n
  }

  var jf, Df, qf, Bf, If, Ff, Yf, Hf, Vf, Xf, Gf = Uc(), $f = {
    point: Wf, lineStart: Qf, lineEnd: Jf, polygonStart: function () {
      $f.point = Kf, $f.lineStart = ts, $f.lineEnd = ns, Gf.reset(), Sf.polygonStart()
    }, polygonEnd: function () {
      Sf.polygonEnd(), $f.point = Wf, $f.lineStart = Qf, $f.lineEnd = Jf, wf < 0 ? (jf = -(qf = 180), Df = -(Bf = 90)) : Gf > Bc ? Bf = 90 : Gf < -Bc && (Df = -90), Xf[0] = jf, Xf[1] = qf
    }, sphere: function () {
      jf = -(qf = 180), Df = -(Bf = 90)
    }
  };

  function Wf(t, n) {
    Vf.push(Xf = [jf = t, qf = t]), n < Df && (Df = n), n > Bf && (Bf = n)
  }

  function Zf(t, n) {
    var e = Pf([t * Gc, n * Gc]);
    if (Hf) {
      var r = Of(Hf, e), i = Of([r[1], -r[0], 0], r);
      Uf(i), i = Cf(i);
      var o, u = t - If, a = u > 0 ? 1 : -1, c = i[0] * Xc * a, f = $c(u) > 180;
      f ^ (a * If < c && c < a * t) ? (o = i[1] * Xc) > Bf && (Bf = o) : f ^ (a * If < (c = (c + 360) % 360 - 180) && c < a * t) ? (o = -i[1] * Xc) < Df && (Df = o) : (n < Df && (Df = n), n > Bf && (Bf = n)), f ? t < If ? es(jf, t) > es(jf, qf) && (qf = t) : es(t, qf) > es(jf, qf) && (jf = t) : qf >= jf ? (t < jf && (jf = t), t > qf && (qf = t)) : t > If ? es(jf, t) > es(jf, qf) && (qf = t) : es(t, qf) > es(jf, qf) && (jf = t)
    } else Vf.push(Xf = [jf = t, qf = t]);
    n < Df && (Df = n), n > Bf && (Bf = n), Hf = e, If = t
  }

  function Qf() {
    $f.point = Zf
  }

  function Jf() {
    Xf[0] = jf, Xf[1] = qf, $f.point = Wf, Hf = null
  }

  function Kf(t, n) {
    if (Hf) {
      var e = t - If;
      Gf.add($c(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
    } else Ff = t, Yf = n;
    Sf.point(t, n), Zf(t, n)
  }

  function ts() {
    Sf.lineStart()
  }

  function ns() {
    Kf(Ff, Yf), Sf.lineEnd(), $c(Gf) > Bc && (jf = -(qf = 180)), Xf[0] = jf, Xf[1] = qf, Hf = null
  }

  function es(t, n) {
    return (n -= t) < 0 ? n + 360 : n
  }

  function rs(t, n) {
    return t[0] - n[0]
  }

  function is(t, n) {
    return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
  }

  var os, us, as, cs, fs, ss, ls, hs, ds, ps, vs, ys, gs, bs, ms, _s, xs = function (t) {
    var n, e, r, i, o, u, a;
    if (Bf = qf = -(jf = Df = 1 / 0), Vf = [], xf(t, $f), e = Vf.length) {
      for (Vf.sort(rs), n = 1, o = [r = Vf[0]]; n < e; ++n) is(r, (i = Vf[n])[0]) || is(r, i[1]) ? (es(r[0], i[1]) > es(r[0], r[1]) && (r[1] = i[1]), es(i[0], r[1]) > es(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
      for (u = -1 / 0, n = 0, r = o[e = o.length - 1]; n <= e; r = i, ++n) i = o[n], (a = es(r[1], i[0])) > u && (u = a, jf = i[0], qf = r[1])
    }
    return Vf = Xf = null, jf === 1 / 0 || Df === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[jf, Df], [qf, Bf]]
  }, ws = {
    sphere: sf, point: Ms, lineStart: Ts, lineEnd: Es, polygonStart: function () {
      ws.lineStart = Ns, ws.lineEnd = Cs
    }, polygonEnd: function () {
      ws.lineStart = Ts, ws.lineEnd = Es
    }
  };

  function Ms(t, n) {
    t *= Gc;
    var e = Qc(n *= Gc);
    Ss(e * Qc(t), e * ef(t), ef(n))
  }

  function Ss(t, n, e) {
    as += (t - as) / ++os, cs += (n - cs) / os, fs += (e - fs) / os
  }

  function Ts() {
    ws.point = As
  }

  function As(t, n) {
    t *= Gc;
    var e = Qc(n *= Gc);
    bs = e * Qc(t), ms = e * ef(t), _s = ef(n), ws.point = ks, Ss(bs, ms, _s)
  }

  function ks(t, n) {
    t *= Gc;
    var e = Qc(n *= Gc), r = e * Qc(t), i = e * ef(t), o = ef(n),
      u = Zc(of((u = ms * o - _s * i) * u + (u = _s * r - bs * o) * u + (u = bs * i - ms * r) * u), bs * r + ms * i + _s * o);
    us += u, ss += u * (bs + (bs = r)), ls += u * (ms + (ms = i)), hs += u * (_s + (_s = o)), Ss(bs, ms, _s)
  }

  function Es() {
    ws.point = Ms
  }

  function Ns() {
    ws.point = Ps
  }

  function Cs() {
    Rs(ys, gs), ws.point = Ms
  }

  function Ps(t, n) {
    ys = t, gs = n, t *= Gc, n *= Gc, ws.point = Rs;
    var e = Qc(n);
    bs = e * Qc(t), ms = e * ef(t), _s = ef(n), Ss(bs, ms, _s)
  }

  function Rs(t, n) {
    t *= Gc;
    var e = Qc(n *= Gc), r = e * Qc(t), i = e * ef(t), o = ef(n), u = ms * o - _s * i, a = _s * r - bs * o,
      c = bs * i - ms * r, f = of(u * u + a * a + c * c), s = cf(f), l = f && -s / f;
    ds += l * u, ps += l * a, vs += l * c, us += s, ss += s * (bs + (bs = r)), ls += s * (ms + (ms = i)), hs += s * (_s + (_s = o)), Ss(bs, ms, _s)
  }

  var Os = function (t) {
    os = us = as = cs = fs = ss = ls = hs = ds = ps = vs = 0, xf(t, ws);
    var n = ds, e = ps, r = vs, i = n * n + e * e + r * r;
    return i < Ic && (n = ss, e = ls, r = hs, us < Bc && (n = as, e = cs, r = fs), (i = n * n + e * e + r * r) < Ic) ? [NaN, NaN] : [Zc(e, n) * Xc, cf(r / of(i)) * Xc]
  }, zs = function (t) {
    return function () {
      return t
    }
  }, Ls = function (t, n) {
    function e(e, r) {
      return e = t(e, r), n(e[0], e[1])
    }

    return t.invert && n.invert && (e.invert = function (e, r) {
      return (e = n.invert(e, r)) && t.invert(e[0], e[1])
    }), e
  };

  function Us(t, n) {
    return [$c(t) > Fc ? t + Math.round(-t / Vc) * Vc : t, n]
  }

  function js(t, n, e) {
    return (t %= Vc) ? n || e ? Ls(qs(t), Bs(n, e)) : qs(t) : n || e ? Bs(n, e) : Us
  }

  function Ds(t) {
    return function (n, e) {
      return [(n += t) > Fc ? n - Vc : n < -Fc ? n + Vc : n, e]
    }
  }

  function qs(t) {
    var n = Ds(t);
    return n.invert = Ds(-t), n
  }

  function Bs(t, n) {
    var e = Qc(t), r = ef(t), i = Qc(n), o = ef(n);

    function u(t, n) {
      var u = Qc(n), a = Qc(t) * u, c = ef(t) * u, f = ef(n), s = f * e + a * r;
      return [Zc(c * i - s * o, a * e - f * r), cf(s * i + c * o)]
    }

    return u.invert = function (t, n) {
      var u = Qc(n), a = Qc(t) * u, c = ef(t) * u, f = ef(n), s = f * i - c * o;
      return [Zc(c * i + f * o, a * e + s * r), cf(s * e - a * r)]
    }, u
  }

  Us.invert = Us;
  var Is = function (t) {
    function n(n) {
      return (n = t(n[0] * Gc, n[1] * Gc))[0] *= Xc, n[1] *= Xc, n
    }

    return t = js(t[0] * Gc, t[1] * Gc, t.length > 2 ? t[2] * Gc : 0), n.invert = function (n) {
      return (n = t.invert(n[0] * Gc, n[1] * Gc))[0] *= Xc, n[1] *= Xc, n
    }, n
  };

  function Fs(t, n, e, r, i, o) {
    if (e) {
      var u = Qc(n), a = ef(n), c = r * e;
      null == i ? (i = n + r * Vc, o = n - c / 2) : (i = Ys(u, i), o = Ys(u, o), (r > 0 ? i < o : i > o) && (i += r * Vc));
      for (var f, s = i; r > 0 ? s > o : s < o; s -= c) f = Cf([u, -a * Qc(s), -a * ef(s)]), t.point(f[0], f[1])
    }
  }

  function Ys(t, n) {
    (n = Pf(n))[0] -= t, Uf(n);
    var e = af(-n[1]);
    return ((-n[2] < 0 ? -e : e) + Vc - Bc) % Vc
  }

  var Hs = function () {
    var t, n, e = zs([0, 0]), r = zs(90), i = zs(6), o = {
      point: function (e, r) {
        t.push(e = n(e, r)), e[0] *= Xc, e[1] *= Xc
      }
    };

    function u() {
      var u = e.apply(this, arguments), a = r.apply(this, arguments) * Gc, c = i.apply(this, arguments) * Gc;
      return t = [], n = js(-u[0] * Gc, -u[1] * Gc, 0).invert, Fs(o, a, c, 1), u = {
        type: "Polygon",
        coordinates: [t]
      }, t = n = null, u
    }

    return u.center = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : zs([+t[0], +t[1]]), u) : e
    }, u.radius = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : zs(+t), u) : r
    }, u.precision = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : zs(+t), u) : i
    }, u
  }, Vs = function () {
    var t, n = [];
    return {
      point: function (n, e) {
        t.push([n, e])
      }, lineStart: function () {
        n.push(t = [])
      }, lineEnd: sf, rejoin: function () {
        n.length > 1 && n.push(n.pop().concat(n.shift()))
      }, result: function () {
        var e = n;
        return n = [], t = null, e
      }
    }
  }, Xs = function (t, n) {
    return $c(t[0] - n[0]) < Bc && $c(t[1] - n[1]) < Bc
  };

  function Gs(t, n, e, r) {
    this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
  }

  var $s = function (t, n, e, r, i) {
    var o, u, a = [], c = [];
    if (t.forEach(function (t) {
      if (!((n = t.length - 1) <= 0)) {
        var n, e, r = t[0], u = t[n];
        if (Xs(r, u)) {
          for (i.lineStart(), o = 0; o < n; ++o) i.point((r = t[o])[0], r[1]);
          i.lineEnd()
        } else a.push(e = new Gs(r, t, null, !0)), c.push(e.o = new Gs(r, null, e, !1)), a.push(e = new Gs(u, t, null, !1)), c.push(e.o = new Gs(u, null, e, !0))
      }
    }), a.length) {
      for (c.sort(n), Ws(a), Ws(c), o = 0, u = c.length; o < u; ++o) c[o].e = e = !e;
      for (var f, s, l = a[0]; ;) {
        for (var h = l, d = !0; h.v;) if ((h = h.n) === l) return;
        f = h.z, i.lineStart();
        do {
          if (h.v = h.o.v = !0, h.e) {
            if (d) for (o = 0, u = f.length; o < u; ++o) i.point((s = f[o])[0], s[1]); else r(h.x, h.n.x, 1, i);
            h = h.n
          } else {
            if (d) for (f = h.p.z, o = f.length - 1; o >= 0; --o) i.point((s = f[o])[0], s[1]); else r(h.x, h.p.x, -1, i);
            h = h.p
          }
          f = (h = h.o).z, d = !d
        } while (!h.v);
        i.lineEnd()
      }
    }
  };

  function Ws(t) {
    if (n = t.length) {
      for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
      i.n = e = t[0], e.p = i
    }
  }

  var Zs = Uc();

  function Qs(t) {
    return $c(t[0]) <= Fc ? t[0] : rf(t[0]) * (($c(t[0]) + Fc) % Vc - Fc)
  }

  var Js = function (t, n) {
    var e = Qs(n), r = n[1], i = ef(r), o = [ef(e), -Qc(e), 0], u = 0, a = 0;
    Zs.reset(), 1 === i ? r = Yc + Bc : -1 === i && (r = -Yc - Bc);
    for (var c = 0, f = t.length; c < f; ++c) if (l = (s = t[c]).length) for (var s, l, h = s[l - 1], d = Qs(h), p = h[1] / 2 + Hc, v = ef(p), y = Qc(p), g = 0; g < l; ++g, d = m, v = x, y = w, h = b) {
      var b = s[g], m = Qs(b), _ = b[1] / 2 + Hc, x = ef(_), w = Qc(_), M = m - d, S = M >= 0 ? 1 : -1, T = S * M,
        A = T > Fc, k = v * x;
      if (Zs.add(Zc(k * S * ef(T), y * w + k * Qc(T))), u += A ? M + S * Vc : M, A ^ d >= e ^ m >= e) {
        var E = Of(Pf(h), Pf(b));
        Uf(E);
        var N = Of(o, E);
        Uf(N);
        var C = (A ^ M >= 0 ? -1 : 1) * cf(N[2]);
        (r > C || r === C && (E[0] || E[1])) && (a += A ^ M >= 0 ? 1 : -1)
      }
    }
    return (u < -Bc || u < Bc && Zs < -Bc) ^ 1 & a
  }, Ks = function (t, n, e, r) {
    return function (i) {
      var o, u, a, c = n(i), f = Vs(), s = n(f), l = !1, h = {
        point: d, lineStart: v, lineEnd: y, polygonStart: function () {
          h.point = g, h.lineStart = b, h.lineEnd = m, u = [], o = []
        }, polygonEnd: function () {
          h.point = d, h.lineStart = v, h.lineEnd = y, u = j(u);
          var t = Js(o, r);
          u.length ? (l || (i.polygonStart(), l = !0), $s(u, nl, t, e, i)) : t && (l || (i.polygonStart(), l = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), l && (i.polygonEnd(), l = !1), u = o = null
        }, sphere: function () {
          i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd()
        }
      };

      function d(n, e) {
        t(n, e) && i.point(n, e)
      }

      function p(t, n) {
        c.point(t, n)
      }

      function v() {
        h.point = p, c.lineStart()
      }

      function y() {
        h.point = d, c.lineEnd()
      }

      function g(t, n) {
        a.push([t, n]), s.point(t, n)
      }

      function b() {
        s.lineStart(), a = []
      }

      function m() {
        g(a[0][0], a[0][1]), s.lineEnd();
        var t, n, e, r, c = s.clean(), h = f.result(), d = h.length;
        if (a.pop(), o.push(a), a = null, d) if (1 & c) {
          if ((n = (e = h[0]).length - 1) > 0) {
            for (l || (i.polygonStart(), l = !0), i.lineStart(), t = 0; t < n; ++t) i.point((r = e[t])[0], r[1]);
            i.lineEnd()
          }
        } else d > 1 && 2 & c && h.push(h.pop().concat(h.shift())), u.push(h.filter(tl))
      }

      return h
    }
  };

  function tl(t) {
    return t.length > 1
  }

  function nl(t, n) {
    return ((t = t.x)[0] < 0 ? t[1] - Yc - Bc : Yc - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Yc - Bc : Yc - n[1])
  }

  var el = Ks(function () {
    return !0
  }, function (t) {
    var n, e = NaN, r = NaN, i = NaN;
    return {
      lineStart: function () {
        t.lineStart(), n = 1
      }, point: function (o, u) {
        var a = o > 0 ? Fc : -Fc, c = $c(o - e);
        $c(c - Fc) < Bc ? (t.point(e, r = (r + u) / 2 > 0 ? Yc : -Yc), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(o, r), n = 0) : i !== a && c >= Fc && ($c(e - i) < Bc && (e -= i * Bc), $c(o - a) < Bc && (o -= a * Bc), r = function (t, n, e, r) {
          var i, o, u = ef(t - e);
          return $c(u) > Bc ? Wc((ef(n) * (o = Qc(r)) * ef(e) - ef(r) * (i = Qc(n)) * ef(t)) / (i * o * u)) : (n + r) / 2
        }(e, r, o, u), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), n = 0), t.point(e = o, r = u), i = a
      }, lineEnd: function () {
        t.lineEnd(), e = r = NaN
      }, clean: function () {
        return 2 - n
      }
    }
  }, function (t, n, e, r) {
    var i;
    if (null == t) i = e * Yc, r.point(-Fc, i), r.point(0, i), r.point(Fc, i), r.point(Fc, 0), r.point(Fc, -i), r.point(0, -i), r.point(-Fc, -i), r.point(-Fc, 0), r.point(-Fc, i); else if ($c(t[0] - n[0]) > Bc) {
      var o = t[0] < n[0] ? Fc : -Fc;
      i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
    } else r.point(n[0], n[1])
  }, [-Fc, -Yc]);
  var rl = function (t) {
    var n = Qc(t), e = 6 * Gc, r = n > 0, i = $c(n) > Bc;

    function o(t, e) {
      return Qc(t) * Qc(e) > n
    }

    function u(t, e, r) {
      var i = [1, 0, 0], o = Of(Pf(t), Pf(e)), u = Rf(o, o), a = o[0], c = u - a * a;
      if (!c) return !r && t;
      var f = n * u / c, s = -n * a / c, l = Of(i, o), h = Lf(i, f);
      zf(h, Lf(o, s));
      var d = l, p = Rf(h, d), v = Rf(d, d), y = p * p - v * (Rf(h, h) - 1);
      if (!(y < 0)) {
        var g = of(y), b = Lf(d, (-p - g) / v);
        if (zf(b, h), b = Cf(b), !r) return b;
        var m, _ = t[0], x = e[0], w = t[1], M = e[1];
        x < _ && (m = _, _ = x, x = m);
        var S = x - _, T = $c(S - Fc) < Bc;
        if (!T && M < w && (m = w, w = M, M = m), T || S < Bc ? T ? w + M > 0 ^ b[1] < ($c(b[0] - _) < Bc ? w : M) : w <= b[1] && b[1] <= M : S > Fc ^ (_ <= b[0] && b[0] <= x)) {
          var A = Lf(d, (-p + g) / v);
          return zf(A, h), [b, Cf(A)]
        }
      }
    }

    function a(n, e) {
      var i = r ? t : Fc - t, o = 0;
      return n < -i ? o |= 1 : n > i && (o |= 2), e < -i ? o |= 4 : e > i && (o |= 8), o
    }

    return Ks(o, function (t) {
      var n, e, c, f, s;
      return {
        lineStart: function () {
          f = c = !1, s = 1
        }, point: function (l, h) {
          var d, p = [l, h], v = o(l, h), y = r ? v ? 0 : a(l, h) : v ? a(l + (l < 0 ? Fc : -Fc), h) : 0;
          if (!n && (f = c = v) && t.lineStart(), v !== c && (!(d = u(n, p)) || Xs(n, d) || Xs(p, d)) && (p[0] += Bc, p[1] += Bc, v = o(p[0], p[1])), v !== c) s = 0, v ? (t.lineStart(), d = u(p, n), t.point(d[0], d[1])) : (d = u(n, p), t.point(d[0], d[1]), t.lineEnd()), n = d; else if (i && n && r ^ v) {
            var g;
            y & e || !(g = u(p, n, !0)) || (s = 0, r ? (t.lineStart(), t.point(g[0][0], g[0][1]), t.point(g[1][0], g[1][1]), t.lineEnd()) : (t.point(g[1][0], g[1][1]), t.lineEnd(), t.lineStart(), t.point(g[0][0], g[0][1])))
          }
          !v || n && Xs(n, p) || t.point(p[0], p[1]), n = p, c = v, e = y
        }, lineEnd: function () {
          c && t.lineEnd(), n = null
        }, clean: function () {
          return s | (f && c) << 1
        }
      }
    }, function (n, r, i, o) {
      Fs(o, t, e, i, n, r)
    }, r ? [0, -t] : [-Fc, t - Fc])
  }, il = function (t, n, e, r, i, o) {
    var u, a = t[0], c = t[1], f = 0, s = 1, l = n[0] - a, h = n[1] - c;
    if (u = e - a, l || !(u > 0)) {
      if (u /= l, l < 0) {
        if (u < f) return;
        u < s && (s = u)
      } else if (l > 0) {
        if (u > s) return;
        u > f && (f = u)
      }
      if (u = i - a, l || !(u < 0)) {
        if (u /= l, l < 0) {
          if (u > s) return;
          u > f && (f = u)
        } else if (l > 0) {
          if (u < f) return;
          u < s && (s = u)
        }
        if (u = r - c, h || !(u > 0)) {
          if (u /= h, h < 0) {
            if (u < f) return;
            u < s && (s = u)
          } else if (h > 0) {
            if (u > s) return;
            u > f && (f = u)
          }
          if (u = o - c, h || !(u < 0)) {
            if (u /= h, h < 0) {
              if (u > s) return;
              u > f && (f = u)
            } else if (h > 0) {
              if (u < f) return;
              u < s && (s = u)
            }
            return f > 0 && (t[0] = a + f * l, t[1] = c + f * h), s < 1 && (n[0] = a + s * l, n[1] = c + s * h), !0
          }
        }
      }
    }
  }, ol = 1e9, ul = -ol;

  function al(t, n, e, r) {
    function i(i, o) {
      return t <= i && i <= e && n <= o && o <= r
    }

    function o(i, o, a, f) {
      var s = 0, l = 0;
      if (null == i || (s = u(i, a)) !== (l = u(o, a)) || c(i, o) < 0 ^ a > 0) do {
        f.point(0 === s || 3 === s ? t : e, s > 1 ? r : n)
      } while ((s = (s + a + 4) % 4) !== l); else f.point(o[0], o[1])
    }

    function u(r, i) {
      return $c(r[0] - t) < Bc ? i > 0 ? 0 : 3 : $c(r[0] - e) < Bc ? i > 0 ? 2 : 1 : $c(r[1] - n) < Bc ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
    }

    function a(t, n) {
      return c(t.x, n.x)
    }

    function c(t, n) {
      var e = u(t, 1), r = u(n, 1);
      return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
    }

    return function (u) {
      var c, f, s, l, h, d, p, v, y, g, b, m = u, _ = Vs(), x = {
        point: w, lineStart: function () {
          x.point = M, f && f.push(s = []);
          g = !0, y = !1, p = v = NaN
        }, lineEnd: function () {
          c && (M(l, h), d && y && _.rejoin(), c.push(_.result()));
          x.point = w, y && m.lineEnd()
        }, polygonStart: function () {
          m = _, c = [], f = [], b = !0
        }, polygonEnd: function () {
          var n = function () {
            for (var n = 0, e = 0, i = f.length; e < i; ++e) for (var o, u, a = f[e], c = 1, s = a.length, l = a[0], h = l[0], d = l[1]; c < s; ++c) o = h, u = d, l = a[c], h = l[0], d = l[1], u <= r ? d > r && (h - o) * (r - u) > (d - u) * (t - o) && ++n : d <= r && (h - o) * (r - u) < (d - u) * (t - o) && --n;
            return n
          }(), e = b && n, i = (c = j(c)).length;
          (e || i) && (u.polygonStart(), e && (u.lineStart(), o(null, null, 1, u), u.lineEnd()), i && $s(c, a, n, o, u), u.polygonEnd());
          m = u, c = f = s = null
        }
      };

      function w(t, n) {
        i(t, n) && m.point(t, n)
      }

      function M(o, u) {
        var a = i(o, u);
        if (f && s.push([o, u]), g) l = o, h = u, d = a, g = !1, a && (m.lineStart(), m.point(o, u)); else if (a && y) m.point(o, u); else {
          var c = [p = Math.max(ul, Math.min(ol, p)), v = Math.max(ul, Math.min(ol, v))],
            _ = [o = Math.max(ul, Math.min(ol, o)), u = Math.max(ul, Math.min(ol, u))];
          il(c, _, t, n, e, r) ? (y || (m.lineStart(), m.point(c[0], c[1])), m.point(_[0], _[1]), a || m.lineEnd(), b = !1) : a && (m.lineStart(), m.point(o, u), b = !1)
        }
        p = o, v = u, y = a
      }

      return x
    }
  }

  var cl, fl, sl, ll = function () {
    var t, n, e, r = 0, i = 0, o = 960, u = 500;
    return e = {
      stream: function (e) {
        return t && n === e ? t : t = al(r, i, o, u)(n = e)
      }, extent: function (a) {
        return arguments.length ? (r = +a[0][0], i = +a[0][1], o = +a[1][0], u = +a[1][1], t = n = null, e) : [[r, i], [o, u]]
      }
    }
  }, hl = Uc(), dl = {
    sphere: sf, point: sf, lineStart: function () {
      dl.point = vl, dl.lineEnd = pl
    }, lineEnd: sf, polygonStart: sf, polygonEnd: sf
  };

  function pl() {
    dl.point = dl.lineEnd = sf
  }

  function vl(t, n) {
    cl = t *= Gc, fl = ef(n *= Gc), sl = Qc(n), dl.point = yl
  }

  function yl(t, n) {
    t *= Gc;
    var e = ef(n *= Gc), r = Qc(n), i = $c(t - cl), o = Qc(i), u = r * ef(i), a = sl * e - fl * r * o,
      c = fl * e + sl * r * o;
    hl.add(Zc(of(u * u + a * a), c)), cl = t, fl = e, sl = r
  }

  var gl = function (t) {
    return hl.reset(), xf(t, dl), +hl
  }, bl = [null, null], ml = {type: "LineString", coordinates: bl}, _l = function (t, n) {
    return bl[0] = t, bl[1] = n, gl(ml)
  }, xl = {
    Feature: function (t, n) {
      return Ml(t.geometry, n)
    }, FeatureCollection: function (t, n) {
      for (var e = t.features, r = -1, i = e.length; ++r < i;) if (Ml(e[r].geometry, n)) return !0;
      return !1
    }
  }, wl = {
    Sphere: function () {
      return !0
    }, Point: function (t, n) {
      return Sl(t.coordinates, n)
    }, MultiPoint: function (t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) if (Sl(e[r], n)) return !0;
      return !1
    }, LineString: function (t, n) {
      return Tl(t.coordinates, n)
    }, MultiLineString: function (t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) if (Tl(e[r], n)) return !0;
      return !1
    }, Polygon: function (t, n) {
      return Al(t.coordinates, n)
    }, MultiPolygon: function (t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) if (Al(e[r], n)) return !0;
      return !1
    }, GeometryCollection: function (t, n) {
      for (var e = t.geometries, r = -1, i = e.length; ++r < i;) if (Ml(e[r], n)) return !0;
      return !1
    }
  };

  function Ml(t, n) {
    return !(!t || !wl.hasOwnProperty(t.type)) && wl[t.type](t, n)
  }

  function Sl(t, n) {
    return 0 === _l(t, n)
  }

  function Tl(t, n) {
    for (var e, r, i, o = 0, u = t.length; o < u; o++) {
      if (0 === (r = _l(t[o], n))) return !0;
      if (o > 0 && (i = _l(t[o], t[o - 1])) > 0 && e <= i && r <= i && (e + r - i) * (1 - Math.pow((e - r) / i, 2)) < Ic * i) return !0;
      e = r
    }
    return !1
  }

  function Al(t, n) {
    return !!Js(t.map(kl), El(n))
  }

  function kl(t) {
    return (t = t.map(El)).pop(), t
  }

  function El(t) {
    return [t[0] * Gc, t[1] * Gc]
  }

  var Nl = function (t, n) {
    return (t && xl.hasOwnProperty(t.type) ? xl[t.type] : Ml)(t, n)
  };

  function Cl(t, n, e) {
    var r = w(t, n - Bc, e).concat(n);
    return function (t) {
      return r.map(function (n) {
        return [t, n]
      })
    }
  }

  function Pl(t, n, e) {
    var r = w(t, n - Bc, e).concat(n);
    return function (t) {
      return r.map(function (n) {
        return [n, t]
      })
    }
  }

  function Rl() {
    var t, n, e, r, i, o, u, a, c, f, s, l, h = 10, d = h, p = 90, v = 360, y = 2.5;

    function g() {
      return {type: "MultiLineString", coordinates: b()}
    }

    function b() {
      return w(Jc(r / p) * p, e, p).map(s).concat(w(Jc(a / v) * v, u, v).map(l)).concat(w(Jc(n / h) * h, t, h).filter(function (t) {
        return $c(t % p) > Bc
      }).map(c)).concat(w(Jc(o / d) * d, i, d).filter(function (t) {
        return $c(t % v) > Bc
      }).map(f))
    }

    return g.lines = function () {
      return b().map(function (t) {
        return {type: "LineString", coordinates: t}
      })
    }, g.outline = function () {
      return {
        type: "Polygon",
        coordinates: [s(r).concat(l(u).slice(1), s(e).reverse().slice(1), l(a).reverse().slice(1))]
      }
    }, g.extent = function (t) {
      return arguments.length ? g.extentMajor(t).extentMinor(t) : g.extentMinor()
    }, g.extentMajor = function (t) {
      return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], u = +t[1][1], r > e && (t = r, r = e, e = t), a > u && (t = a, a = u, u = t), g.precision(y)) : [[r, a], [e, u]]
    }, g.extentMinor = function (e) {
      return arguments.length ? (n = +e[0][0], t = +e[1][0], o = +e[0][1], i = +e[1][1], n > t && (e = n, n = t, t = e), o > i && (e = o, o = i, i = e), g.precision(y)) : [[n, o], [t, i]]
    }, g.step = function (t) {
      return arguments.length ? g.stepMajor(t).stepMinor(t) : g.stepMinor()
    }, g.stepMajor = function (t) {
      return arguments.length ? (p = +t[0], v = +t[1], g) : [p, v]
    }, g.stepMinor = function (t) {
      return arguments.length ? (h = +t[0], d = +t[1], g) : [h, d]
    }, g.precision = function (h) {
      return arguments.length ? (y = +h, c = Cl(o, i, 90), f = Pl(n, t, y), s = Cl(a, u, 90), l = Pl(r, e, y), g) : y
    }, g.extentMajor([[-180, -90 + Bc], [180, 90 - Bc]]).extentMinor([[-180, -80 - Bc], [180, 80 + Bc]])
  }

  function Ol() {
    return Rl()()
  }

  var zl, Ll, Ul, jl, Dl = function (t, n) {
    var e = t[0] * Gc, r = t[1] * Gc, i = n[0] * Gc, o = n[1] * Gc, u = Qc(r), a = ef(r), c = Qc(o), f = ef(o),
      s = u * Qc(e), l = u * ef(e), h = c * Qc(i), d = c * ef(i), p = 2 * cf(of(ff(o - r) + u * c * ff(i - e))),
      v = ef(p), y = p ? function (t) {
        var n = ef(t *= p) / v, e = ef(p - t) / v, r = e * s + n * h, i = e * l + n * d, o = e * a + n * f;
        return [Zc(i, r) * Xc, Zc(o, of(r * r + i * i)) * Xc]
      } : function () {
        return [e * Xc, r * Xc]
      };
    return y.distance = p, y
  }, ql = function (t) {
    return t
  }, Bl = Uc(), Il = Uc(), Fl = {
    point: sf, lineStart: sf, lineEnd: sf, polygonStart: function () {
      Fl.lineStart = Yl, Fl.lineEnd = Xl
    }, polygonEnd: function () {
      Fl.lineStart = Fl.lineEnd = Fl.point = sf, Bl.add($c(Il)), Il.reset()
    }, result: function () {
      var t = Bl / 2;
      return Bl.reset(), t
    }
  };

  function Yl() {
    Fl.point = Hl
  }

  function Hl(t, n) {
    Fl.point = Vl, zl = Ul = t, Ll = jl = n
  }

  function Vl(t, n) {
    Il.add(jl * t - Ul * n), Ul = t, jl = n
  }

  function Xl() {
    Vl(zl, Ll)
  }

  var Gl = Fl, $l = 1 / 0, Wl = $l, Zl = -$l, Ql = Zl;
  var Jl, Kl, th, nh, eh = {
    point: function (t, n) {
      t < $l && ($l = t);
      t > Zl && (Zl = t);
      n < Wl && (Wl = n);
      n > Ql && (Ql = n)
    }, lineStart: sf, lineEnd: sf, polygonStart: sf, polygonEnd: sf, result: function () {
      var t = [[$l, Wl], [Zl, Ql]];
      return Zl = Ql = -(Wl = $l = 1 / 0), t
    }
  }, rh = 0, ih = 0, oh = 0, uh = 0, ah = 0, ch = 0, fh = 0, sh = 0, lh = 0, hh = {
    point: dh, lineStart: ph, lineEnd: gh, polygonStart: function () {
      hh.lineStart = bh, hh.lineEnd = mh
    }, polygonEnd: function () {
      hh.point = dh, hh.lineStart = ph, hh.lineEnd = gh
    }, result: function () {
      var t = lh ? [fh / lh, sh / lh] : ch ? [uh / ch, ah / ch] : oh ? [rh / oh, ih / oh] : [NaN, NaN];
      return rh = ih = oh = uh = ah = ch = fh = sh = lh = 0, t
    }
  };

  function dh(t, n) {
    rh += t, ih += n, ++oh
  }

  function ph() {
    hh.point = vh
  }

  function vh(t, n) {
    hh.point = yh, dh(th = t, nh = n)
  }

  function yh(t, n) {
    var e = t - th, r = n - nh, i = of(e * e + r * r);
    uh += i * (th + t) / 2, ah += i * (nh + n) / 2, ch += i, dh(th = t, nh = n)
  }

  function gh() {
    hh.point = dh
  }

  function bh() {
    hh.point = _h
  }

  function mh() {
    xh(Jl, Kl)
  }

  function _h(t, n) {
    hh.point = xh, dh(Jl = th = t, Kl = nh = n)
  }

  function xh(t, n) {
    var e = t - th, r = n - nh, i = of(e * e + r * r);
    uh += i * (th + t) / 2, ah += i * (nh + n) / 2, ch += i, fh += (i = nh * t - th * n) * (th + t), sh += i * (nh + n), lh += 3 * i, dh(th = t, nh = n)
  }

  var wh = hh;

  function Mh(t) {
    this._context = t
  }

  Mh.prototype = {
    _radius: 4.5, pointRadius: function (t) {
      return this._radius = t, this
    }, polygonStart: function () {
      this._line = 0
    }, polygonEnd: function () {
      this._line = NaN
    }, lineStart: function () {
      this._point = 0
    }, lineEnd: function () {
      0 === this._line && this._context.closePath(), this._point = NaN
    }, point: function (t, n) {
      switch (this._point) {
        case 0:
          this._context.moveTo(t, n), this._point = 1;
          break;
        case 1:
          this._context.lineTo(t, n);
          break;
        default:
          this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, Vc)
      }
    }, result: sf
  };
  var Sh, Th, Ah, kh, Eh, Nh = Uc(), Ch = {
    point: sf, lineStart: function () {
      Ch.point = Ph
    }, lineEnd: function () {
      Sh && Rh(Th, Ah), Ch.point = sf
    }, polygonStart: function () {
      Sh = !0
    }, polygonEnd: function () {
      Sh = null
    }, result: function () {
      var t = +Nh;
      return Nh.reset(), t
    }
  };

  function Ph(t, n) {
    Ch.point = Rh, Th = kh = t, Ah = Eh = n
  }

  function Rh(t, n) {
    kh -= t, Eh -= n, Nh.add(of(kh * kh + Eh * Eh)), kh = t, Eh = n
  }

  var Oh = Ch;

  function zh() {
    this._string = []
  }

  function Lh(t) {
    return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
  }

  zh.prototype = {
    _radius: 4.5, _circle: Lh(4.5), pointRadius: function (t) {
      return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
    }, polygonStart: function () {
      this._line = 0
    }, polygonEnd: function () {
      this._line = NaN
    }, lineStart: function () {
      this._point = 0
    }, lineEnd: function () {
      0 === this._line && this._string.push("Z"), this._point = NaN
    }, point: function (t, n) {
      switch (this._point) {
        case 0:
          this._string.push("M", t, ",", n), this._point = 1;
          break;
        case 1:
          this._string.push("L", t, ",", n);
          break;
        default:
          null == this._circle && (this._circle = Lh(this._radius)), this._string.push("M", t, ",", n, this._circle)
      }
    }, result: function () {
      if (this._string.length) {
        var t = this._string.join("");
        return this._string = [], t
      }
      return null
    }
  };
  var Uh = function (t, n) {
    var e, r, i = 4.5;

    function o(t) {
      return t && ("function" == typeof i && r.pointRadius(+i.apply(this, arguments)), xf(t, e(r))), r.result()
    }

    return o.area = function (t) {
      return xf(t, e(Gl)), Gl.result()
    }, o.measure = function (t) {
      return xf(t, e(Oh)), Oh.result()
    }, o.bounds = function (t) {
      return xf(t, e(eh)), eh.result()
    }, o.centroid = function (t) {
      return xf(t, e(wh)), wh.result()
    }, o.projection = function (n) {
      return arguments.length ? (e = null == n ? (t = null, ql) : (t = n).stream, o) : t
    }, o.context = function (t) {
      return arguments.length ? (r = null == t ? (n = null, new zh) : new Mh(n = t), "function" != typeof i && r.pointRadius(i), o) : n
    }, o.pointRadius = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : (r.pointRadius(+t), +t), o) : i
    }, o.projection(t).context(n)
  }, jh = function (t) {
    return {stream: Dh(t)}
  };

  function Dh(t) {
    return function (n) {
      var e = new qh;
      for (var r in t) e[r] = t[r];
      return e.stream = n, e
    }
  }

  function qh() {
  }

  function Bh(t, n, e) {
    var r = t.clipExtent && t.clipExtent();
    return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), xf(e, t.stream(eh)), n(eh.result()), null != r && t.clipExtent(r), t
  }

  function Ih(t, n, e) {
    return Bh(t, function (e) {
      var r = n[1][0] - n[0][0], i = n[1][1] - n[0][1], o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
        u = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2, a = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
      t.scale(150 * o).translate([u, a])
    }, e)
  }

  function Fh(t, n, e) {
    return Ih(t, [[0, 0], n], e)
  }

  function Yh(t, n, e) {
    return Bh(t, function (e) {
      var r = +n, i = r / (e[1][0] - e[0][0]), o = (r - i * (e[1][0] + e[0][0])) / 2, u = -i * e[0][1];
      t.scale(150 * i).translate([o, u])
    }, e)
  }

  function Hh(t, n, e) {
    return Bh(t, function (e) {
      var r = +n, i = r / (e[1][1] - e[0][1]), o = -i * e[0][0], u = (r - i * (e[1][1] + e[0][1])) / 2;
      t.scale(150 * i).translate([o, u])
    }, e)
  }

  qh.prototype = {
    constructor: qh, point: function (t, n) {
      this.stream.point(t, n)
    }, sphere: function () {
      this.stream.sphere()
    }, lineStart: function () {
      this.stream.lineStart()
    }, lineEnd: function () {
      this.stream.lineEnd()
    }, polygonStart: function () {
      this.stream.polygonStart()
    }, polygonEnd: function () {
      this.stream.polygonEnd()
    }
  };
  var Vh = 16, Xh = Qc(30 * Gc), Gh = function (t, n) {
    return +n ? function (t, n) {
      function e(r, i, o, u, a, c, f, s, l, h, d, p, v, y) {
        var g = f - r, b = s - i, m = g * g + b * b;
        if (m > 4 * n && v--) {
          var _ = u + h, x = a + d, w = c + p, M = of(_ * _ + x * x + w * w), S = cf(w /= M),
            T = $c($c(w) - 1) < Bc || $c(o - l) < Bc ? (o + l) / 2 : Zc(x, _), A = t(T, S), k = A[0], E = A[1],
            N = k - r, C = E - i, P = b * N - g * C;
          (P * P / m > n || $c((g * N + b * C) / m - .5) > .3 || u * h + a * d + c * p < Xh) && (e(r, i, o, u, a, c, k, E, T, _ /= M, x /= M, w, v, y), y.point(k, E), e(k, E, T, _, x, w, f, s, l, h, d, p, v, y))
        }
      }

      return function (n) {
        var r, i, o, u, a, c, f, s, l, h, d, p, v = {
          point: y, lineStart: g, lineEnd: m, polygonStart: function () {
            n.polygonStart(), v.lineStart = _
          }, polygonEnd: function () {
            n.polygonEnd(), v.lineStart = g
          }
        };

        function y(e, r) {
          e = t(e, r), n.point(e[0], e[1])
        }

        function g() {
          s = NaN, v.point = b, n.lineStart()
        }

        function b(r, i) {
          var o = Pf([r, i]), u = t(r, i);
          e(s, l, f, h, d, p, s = u[0], l = u[1], f = r, h = o[0], d = o[1], p = o[2], Vh, n), n.point(s, l)
        }

        function m() {
          v.point = y, n.lineEnd()
        }

        function _() {
          g(), v.point = x, v.lineEnd = w
        }

        function x(t, n) {
          b(r = t, n), i = s, o = l, u = h, a = d, c = p, v.point = b
        }

        function w() {
          e(s, l, f, h, d, p, i, o, r, u, a, c, Vh, n), v.lineEnd = m, m()
        }

        return v
      }
    }(t, n) : function (t) {
      return Dh({
        point: function (n, e) {
          n = t(n, e), this.stream.point(n[0], n[1])
        }
      })
    }(t)
  };
  var $h = Dh({
    point: function (t, n) {
      this.stream.point(t * Gc, n * Gc)
    }
  });

  function Wh(t, n, e, r) {
    var i = Qc(r), o = ef(r), u = i * t, a = o * t, c = i / t, f = o / t, s = (o * e - i * n) / t,
      l = (o * n + i * e) / t;

    function h(t, r) {
      return [u * t - a * r + n, e - a * t - u * r]
    }

    return h.invert = function (t, n) {
      return [c * t - f * n + s, l - f * t - c * n]
    }, h
  }

  function Zh(t) {
    return Qh(function () {
      return t
    })()
  }

  function Qh(t) {
    var n, e, r, i, o, u, a, c, f, s, l = 150, h = 480, d = 250, p = 0, v = 0, y = 0, g = 0, b = 0, m = 0, _ = null,
      x = el, w = null, M = ql, S = .5;

    function T(t) {
      return c(t[0] * Gc, t[1] * Gc)
    }

    function A(t) {
      return (t = c.invert(t[0], t[1])) && [t[0] * Xc, t[1] * Xc]
    }

    function k() {
      var t = Wh(l, 0, 0, m).apply(null, n(p, v)), r = (m ? Wh : function (t, n, e) {
        function r(r, i) {
          return [n + t * r, e - t * i]
        }

        return r.invert = function (r, i) {
          return [(r - n) / t, (e - i) / t]
        }, r
      })(l, h - t[0], d - t[1], m);
      return e = js(y, g, b), a = Ls(n, r), c = Ls(e, a), u = Gh(a, S), E()
    }

    function E() {
      return f = s = null, T
    }

    return T.stream = function (t) {
      return f && s === t ? f : f = $h(function (t) {
        return Dh({
          point: function (n, e) {
            var r = t(n, e);
            return this.stream.point(r[0], r[1])
          }
        })
      }(e)(x(u(M(s = t)))))
    }, T.preclip = function (t) {
      return arguments.length ? (x = t, _ = void 0, E()) : x
    }, T.postclip = function (t) {
      return arguments.length ? (M = t, w = r = i = o = null, E()) : M
    }, T.clipAngle = function (t) {
      return arguments.length ? (x = +t ? rl(_ = t * Gc) : (_ = null, el), E()) : _ * Xc
    }, T.clipExtent = function (t) {
      return arguments.length ? (M = null == t ? (w = r = i = o = null, ql) : al(w = +t[0][0], r = +t[0][1], i = +t[1][0], o = +t[1][1]), E()) : null == w ? null : [[w, r], [i, o]]
    }, T.scale = function (t) {
      return arguments.length ? (l = +t, k()) : l
    }, T.translate = function (t) {
      return arguments.length ? (h = +t[0], d = +t[1], k()) : [h, d]
    }, T.center = function (t) {
      return arguments.length ? (p = t[0] % 360 * Gc, v = t[1] % 360 * Gc, k()) : [p * Xc, v * Xc]
    }, T.rotate = function (t) {
      return arguments.length ? (y = t[0] % 360 * Gc, g = t[1] % 360 * Gc, b = t.length > 2 ? t[2] % 360 * Gc : 0, k()) : [y * Xc, g * Xc, b * Xc]
    }, T.angle = function (t) {
      return arguments.length ? (m = t % 360 * Gc, k()) : m * Xc
    }, T.precision = function (t) {
      return arguments.length ? (u = Gh(a, S = t * t), E()) : of(S)
    }, T.fitExtent = function (t, n) {
      return Ih(T, t, n)
    }, T.fitSize = function (t, n) {
      return Fh(T, t, n)
    }, T.fitWidth = function (t, n) {
      return Yh(T, t, n)
    }, T.fitHeight = function (t, n) {
      return Hh(T, t, n)
    }, function () {
      return n = t.apply(this, arguments), T.invert = n.invert && A, k()
    }
  }

  function Jh(t) {
    var n = 0, e = Fc / 3, r = Qh(t), i = r(n, e);
    return i.parallels = function (t) {
      return arguments.length ? r(n = t[0] * Gc, e = t[1] * Gc) : [n * Xc, e * Xc]
    }, i
  }

  function Kh(t, n) {
    var e = ef(t), r = (e + ef(n)) / 2;
    if ($c(r) < Bc) return function (t) {
      var n = Qc(t);

      function e(t, e) {
        return [t * n, ef(e) / n]
      }

      return e.invert = function (t, e) {
        return [t / n, cf(e * n)]
      }, e
    }(t);
    var i = 1 + e * (2 * r - e), o = of(i) / r;

    function u(t, n) {
      var e = of(i - 2 * r * ef(n)) / r;
      return [e * ef(t *= r), o - e * Qc(t)]
    }

    return u.invert = function (t, n) {
      var e = o - n;
      return [Zc(t, $c(e)) / r * rf(e), cf((i - (t * t + e * e) * r * r) / (2 * r))]
    }, u
  }

  var td = function () {
    return Jh(Kh).scale(155.424).center([0, 33.6442])
  }, nd = function () {
    return td().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
  };
  var ed = function () {
    var t, n, e, r, i, o, u = nd(), a = td().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
      c = td().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), f = {
        point: function (t, n) {
          o = [t, n]
        }
      };

    function s(t) {
      var n = t[0], u = t[1];
      return o = null, e.point(n, u), o || (r.point(n, u), o) || (i.point(n, u), o)
    }

    function l() {
      return t = n = null, s
    }

    return s.invert = function (t) {
      var n = u.scale(), e = u.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
      return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? a : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? c : u).invert(t)
    }, s.stream = function (e) {
      return t && n === e ? t : (r = [u.stream(n = e), a.stream(e), c.stream(e)], i = r.length, t = {
        point: function (t, n) {
          for (var e = -1; ++e < i;) r[e].point(t, n)
        }, sphere: function () {
          for (var t = -1; ++t < i;) r[t].sphere()
        }, lineStart: function () {
          for (var t = -1; ++t < i;) r[t].lineStart()
        }, lineEnd: function () {
          for (var t = -1; ++t < i;) r[t].lineEnd()
        }, polygonStart: function () {
          for (var t = -1; ++t < i;) r[t].polygonStart()
        }, polygonEnd: function () {
          for (var t = -1; ++t < i;) r[t].polygonEnd()
        }
      });
      var r, i
    }, s.precision = function (t) {
      return arguments.length ? (u.precision(t), a.precision(t), c.precision(t), l()) : u.precision()
    }, s.scale = function (t) {
      return arguments.length ? (u.scale(t), a.scale(.35 * t), c.scale(t), s.translate(u.translate())) : u.scale()
    }, s.translate = function (t) {
      if (!arguments.length) return u.translate();
      var n = u.scale(), o = +t[0], s = +t[1];
      return e = u.translate(t).clipExtent([[o - .455 * n, s - .238 * n], [o + .455 * n, s + .238 * n]]).stream(f), r = a.translate([o - .307 * n, s + .201 * n]).clipExtent([[o - .425 * n + Bc, s + .12 * n + Bc], [o - .214 * n - Bc, s + .234 * n - Bc]]).stream(f), i = c.translate([o - .205 * n, s + .212 * n]).clipExtent([[o - .214 * n + Bc, s + .166 * n + Bc], [o - .115 * n - Bc, s + .234 * n - Bc]]).stream(f), l()
    }, s.fitExtent = function (t, n) {
      return Ih(s, t, n)
    }, s.fitSize = function (t, n) {
      return Fh(s, t, n)
    }, s.fitWidth = function (t, n) {
      return Yh(s, t, n)
    }, s.fitHeight = function (t, n) {
      return Hh(s, t, n)
    }, s.scale(1070)
  };

  function rd(t) {
    return function (n, e) {
      var r = Qc(n), i = Qc(e), o = t(r * i);
      return [o * i * ef(n), o * ef(e)]
    }
  }

  function id(t) {
    return function (n, e) {
      var r = of(n * n + e * e), i = t(r), o = ef(i), u = Qc(i);
      return [Zc(n * o, r * u), cf(r && e * o / r)]
    }
  }

  var od = rd(function (t) {
    return of(2 / (1 + t))
  });
  od.invert = id(function (t) {
    return 2 * cf(t / 2)
  });
  var ud = function () {
    return Zh(od).scale(124.75).clipAngle(179.999)
  }, ad = rd(function (t) {
    return (t = af(t)) && t / ef(t)
  });
  ad.invert = id(function (t) {
    return t
  });
  var cd = function () {
    return Zh(ad).scale(79.4188).clipAngle(179.999)
  };

  function fd(t, n) {
    return [t, tf(uf((Yc + n) / 2))]
  }

  fd.invert = function (t, n) {
    return [t, 2 * Wc(Kc(n)) - Yc]
  };
  var sd = function () {
    return ld(fd).scale(961 / Vc)
  };

  function ld(t) {
    var n, e, r, i = Zh(t), o = i.center, u = i.scale, a = i.translate, c = i.clipExtent, f = null;

    function s() {
      var o = Fc * u(), a = i(Is(i.rotate()).invert([0, 0]));
      return c(null == f ? [[a[0] - o, a[1] - o], [a[0] + o, a[1] + o]] : t === fd ? [[Math.max(a[0] - o, f), n], [Math.min(a[0] + o, e), r]] : [[f, Math.max(a[1] - o, n)], [e, Math.min(a[1] + o, r)]])
    }

    return i.scale = function (t) {
      return arguments.length ? (u(t), s()) : u()
    }, i.translate = function (t) {
      return arguments.length ? (a(t), s()) : a()
    }, i.center = function (t) {
      return arguments.length ? (o(t), s()) : o()
    }, i.clipExtent = function (t) {
      return arguments.length ? (null == t ? f = n = e = r = null : (f = +t[0][0], n = +t[0][1], e = +t[1][0], r = +t[1][1]), s()) : null == f ? null : [[f, n], [e, r]]
    }, s()
  }

  function hd(t) {
    return uf((Yc + t) / 2)
  }

  function dd(t, n) {
    var e = Qc(t), r = t === n ? ef(t) : tf(e / Qc(n)) / tf(hd(n) / hd(t)), i = e * nf(hd(t), r) / r;
    if (!r) return fd;

    function o(t, n) {
      i > 0 ? n < -Yc + Bc && (n = -Yc + Bc) : n > Yc - Bc && (n = Yc - Bc);
      var e = i / nf(hd(n), r);
      return [e * ef(r * t), i - e * Qc(r * t)]
    }

    return o.invert = function (t, n) {
      var e = i - n, o = rf(r) * of(t * t + e * e);
      return [Zc(t, $c(e)) / r * rf(e), 2 * Wc(nf(i / o, 1 / r)) - Yc]
    }, o
  }

  var pd = function () {
    return Jh(dd).scale(109.5).parallels([30, 30])
  };

  function vd(t, n) {
    return [t, n]
  }

  vd.invert = vd;
  var yd = function () {
    return Zh(vd).scale(152.63)
  };

  function gd(t, n) {
    var e = Qc(t), r = t === n ? ef(t) : (e - Qc(n)) / (n - t), i = e / r + t;
    if ($c(r) < Bc) return vd;

    function o(t, n) {
      var e = i - n, o = r * t;
      return [e * ef(o), i - e * Qc(o)]
    }

    return o.invert = function (t, n) {
      var e = i - n;
      return [Zc(t, $c(e)) / r * rf(e), i - rf(r) * of(t * t + e * e)]
    }, o
  }

  var bd = function () {
    return Jh(gd).scale(131.154).center([0, 13.9389])
  }, md = 1.340264, _d = -.081106, xd = 893e-6, wd = .003796, Md = of(3) / 2;

  function Sd(t, n) {
    var e = cf(Md * ef(n)), r = e * e, i = r * r * r;
    return [t * Qc(e) / (Md * (md + 3 * _d * r + i * (7 * xd + 9 * wd * r))), e * (md + _d * r + i * (xd + wd * r))]
  }

  Sd.invert = function (t, n) {
    for (var e, r = n, i = r * r, o = i * i * i, u = 0; u < 12 && (o = (i = (r -= e = (r * (md + _d * i + o * (xd + wd * i)) - n) / (md + 3 * _d * i + o * (7 * xd + 9 * wd * i))) * r) * i * i, !($c(e) < Ic)); ++u) ;
    return [Md * t * (md + 3 * _d * i + o * (7 * xd + 9 * wd * i)) / Qc(r), cf(ef(r) / Md)]
  };
  var Td = function () {
    return Zh(Sd).scale(177.158)
  };

  function Ad(t, n) {
    var e = Qc(n), r = Qc(t) * e;
    return [e * ef(t) / r, ef(n) / r]
  }

  Ad.invert = id(Wc);
  var kd = function () {
    return Zh(Ad).scale(144.049).clipAngle(60)
  };

  function Ed(t, n, e, r) {
    return 1 === t && 1 === n && 0 === e && 0 === r ? ql : Dh({
      point: function (i, o) {
        this.stream.point(i * t + e, o * n + r)
      }
    })
  }

  var Nd = function () {
    var t, n, e, r, i, o, u = 1, a = 0, c = 0, f = 1, s = 1, l = ql, h = null, d = ql;

    function p() {
      return r = i = null, o
    }

    return o = {
      stream: function (t) {
        return r && i === t ? r : r = l(d(i = t))
      }, postclip: function (r) {
        return arguments.length ? (d = r, h = t = n = e = null, p()) : d
      }, clipExtent: function (r) {
        return arguments.length ? (d = null == r ? (h = t = n = e = null, ql) : al(h = +r[0][0], t = +r[0][1], n = +r[1][0], e = +r[1][1]), p()) : null == h ? null : [[h, t], [n, e]]
      }, scale: function (t) {
        return arguments.length ? (l = Ed((u = +t) * f, u * s, a, c), p()) : u
      }, translate: function (t) {
        return arguments.length ? (l = Ed(u * f, u * s, a = +t[0], c = +t[1]), p()) : [a, c]
      }, reflectX: function (t) {
        return arguments.length ? (l = Ed(u * (f = t ? -1 : 1), u * s, a, c), p()) : f < 0
      }, reflectY: function (t) {
        return arguments.length ? (l = Ed(u * f, u * (s = t ? -1 : 1), a, c), p()) : s < 0
      }, fitExtent: function (t, n) {
        return Ih(o, t, n)
      }, fitSize: function (t, n) {
        return Fh(o, t, n)
      }, fitWidth: function (t, n) {
        return Yh(o, t, n)
      }, fitHeight: function (t, n) {
        return Hh(o, t, n)
      }
    }
  };

  function Cd(t, n) {
    var e = n * n, r = e * e;
    return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))]
  }

  Cd.invert = function (t, n) {
    var e, r = n, i = 25;
    do {
      var o = r * r, u = o * o;
      r -= e = (r * (1.007226 + o * (.015085 + u * (.028874 * o - .044475 - .005916 * u))) - n) / (1.007226 + o * (.045255 + u * (.259866 * o - .311325 - .005916 * 11 * u)))
    } while ($c(e) > Bc && --i > 0);
    return [t / (.8707 + (o = r * r) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), r]
  };
  var Pd = function () {
    return Zh(Cd).scale(175.295)
  };

  function Rd(t, n) {
    return [Qc(n) * ef(t), ef(n)]
  }

  Rd.invert = id(cf);
  var Od = function () {
    return Zh(Rd).scale(249.5).clipAngle(90 + Bc)
  };

  function zd(t, n) {
    var e = Qc(n), r = 1 + Qc(t) * e;
    return [e * ef(t) / r, ef(n) / r]
  }

  zd.invert = id(function (t) {
    return 2 * Wc(t)
  });
  var Ld = function () {
    return Zh(zd).scale(250).clipAngle(142)
  };

  function Ud(t, n) {
    return [tf(uf((Yc + n) / 2)), -t]
  }

  Ud.invert = function (t, n) {
    return [-n, 2 * Wc(Kc(t)) - Yc]
  };
  var jd = function () {
    var t = ld(Ud), n = t.center, e = t.rotate;
    return t.center = function (t) {
      return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]]
    }, t.rotate = function (t) {
      return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = e())[0], t[1], t[2] - 90]
    }, e([0, 0, 90]).scale(159.155)
  };

  function Dd(t, n) {
    return t.parent === n.parent ? 1 : 2
  }

  function qd(t, n) {
    return t + n.x
  }

  function Bd(t, n) {
    return Math.max(t, n.y)
  }

  var Id = function () {
    var t = Dd, n = 1, e = 1, r = !1;

    function i(i) {
      var o, u = 0;
      i.eachAfter(function (n) {
        var e = n.children;
        e ? (n.x = function (t) {
          return t.reduce(qd, 0) / t.length
        }(e), n.y = function (t) {
          return 1 + t.reduce(Bd, 0)
        }(e)) : (n.x = o ? u += t(n, o) : 0, n.y = 0, o = n)
      });
      var a = function (t) {
        for (var n; n = t.children;) t = n[0];
        return t
      }(i), c = function (t) {
        for (var n; n = t.children;) t = n[n.length - 1];
        return t
      }(i), f = a.x - t(a, c) / 2, s = c.x + t(c, a) / 2;
      return i.eachAfter(r ? function (t) {
        t.x = (t.x - i.x) * n, t.y = (i.y - t.y) * e
      } : function (t) {
        t.x = (t.x - f) / (s - f) * n, t.y = (1 - (i.y ? t.y / i.y : 1)) * e
      })
    }

    return i.separation = function (n) {
      return arguments.length ? (t = n, i) : t
    }, i.size = function (t) {
      return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e]
    }, i.nodeSize = function (t) {
      return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null
    }, i
  };

  function Fd(t) {
    var n = 0, e = t.children, r = e && e.length;
    if (r) for (; --r >= 0;) n += e[r].value; else n = 1;
    t.value = n
  }

  function Yd(t, n) {
    var e, r, i, o, u, a = new Gd(t), c = +t.value && (a.value = t.value), f = [a];
    for (null == n && (n = Hd); e = f.pop();) if (c && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length)) for (e.children = new Array(u), o = u - 1; o >= 0; --o) f.push(r = e.children[o] = new Gd(i[o])), r.parent = e, r.depth = e.depth + 1;
    return a.eachBefore(Xd)
  }

  function Hd(t) {
    return t.children
  }

  function Vd(t) {
    t.data = t.data.data
  }

  function Xd(t) {
    var n = 0;
    do {
      t.height = n
    } while ((t = t.parent) && t.height < ++n)
  }

  function Gd(t) {
    this.data = t, this.depth = this.height = 0, this.parent = null
  }

  Gd.prototype = Yd.prototype = {
    constructor: Gd, count: function () {
      return this.eachAfter(Fd)
    }, each: function (t) {
      var n, e, r, i, o = this, u = [o];
      do {
        for (n = u.reverse(), u = []; o = n.pop();) if (t(o), e = o.children) for (r = 0, i = e.length; r < i; ++r) u.push(e[r])
      } while (u.length);
      return this
    }, eachAfter: function (t) {
      for (var n, e, r, i = this, o = [i], u = []; i = o.pop();) if (u.push(i), n = i.children) for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
      for (; i = u.pop();) t(i);
      return this
    }, eachBefore: function (t) {
      for (var n, e, r = this, i = [r]; r = i.pop();) if (t(r), n = r.children) for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
      return this
    }, sum: function (t) {
      return this.eachAfter(function (n) {
        for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
        n.value = e
      })
    }, sort: function (t) {
      return this.eachBefore(function (n) {
        n.children && n.children.sort(t)
      })
    }, path: function (t) {
      for (var n = this, e = function (t, n) {
        if (t === n) return t;
        var e = t.ancestors(), r = n.ancestors(), i = null;
        for (t = e.pop(), n = r.pop(); t === n;) i = t, t = e.pop(), n = r.pop();
        return i
      }(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
      for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
      return r
    }, ancestors: function () {
      for (var t = this, n = [t]; t = t.parent;) n.push(t);
      return n
    }, descendants: function () {
      var t = [];
      return this.each(function (n) {
        t.push(n)
      }), t
    }, leaves: function () {
      var t = [];
      return this.eachBefore(function (n) {
        n.children || t.push(n)
      }), t
    }, links: function () {
      var t = this, n = [];
      return t.each(function (e) {
        e !== t && n.push({source: e.parent, target: e})
      }), n
    }, copy: function () {
      return Yd(this).eachBefore(Vd)
    }
  };
  var $d = Array.prototype.slice;
  var Wd = function (t) {
    for (var n, e, r = 0, i = (t = function (t) {
      for (var n, e, r = t.length; r;) e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n;
      return t
    }($d.call(t))).length, o = []; r < i;) n = t[r], e && Jd(e, n) ? ++r : (e = tp(o = Zd(o, n)), r = 0);
    return e
  };

  function Zd(t, n) {
    var e, r;
    if (Kd(n, t)) return [n];
    for (e = 0; e < t.length; ++e) if (Qd(n, t[e]) && Kd(np(t[e], n), t)) return [t[e], n];
    for (e = 0; e < t.length - 1; ++e) for (r = e + 1; r < t.length; ++r) if (Qd(np(t[e], t[r]), n) && Qd(np(t[e], n), t[r]) && Qd(np(t[r], n), t[e]) && Kd(ep(t[e], t[r], n), t)) return [t[e], t[r], n];
    throw new Error
  }

  function Qd(t, n) {
    var e = t.r - n.r, r = n.x - t.x, i = n.y - t.y;
    return e < 0 || e * e < r * r + i * i
  }

  function Jd(t, n) {
    var e = t.r - n.r + 1e-6, r = n.x - t.x, i = n.y - t.y;
    return e > 0 && e * e > r * r + i * i
  }

  function Kd(t, n) {
    for (var e = 0; e < n.length; ++e) if (!Jd(t, n[e])) return !1;
    return !0
  }

  function tp(t) {
    switch (t.length) {
      case 1:
        return {x: (n = t[0]).x, y: n.y, r: n.r};
      case 2:
        return np(t[0], t[1]);
      case 3:
        return ep(t[0], t[1], t[2])
    }
    var n
  }

  function np(t, n) {
    var e = t.x, r = t.y, i = t.r, o = n.x, u = n.y, a = n.r, c = o - e, f = u - r, s = a - i,
      l = Math.sqrt(c * c + f * f);
    return {x: (e + o + c / l * s) / 2, y: (r + u + f / l * s) / 2, r: (l + i + a) / 2}
  }

  function ep(t, n, e) {
    var r = t.x, i = t.y, o = t.r, u = n.x, a = n.y, c = n.r, f = e.x, s = e.y, l = e.r, h = r - u, d = r - f,
      p = i - a, v = i - s, y = c - o, g = l - o, b = r * r + i * i - o * o, m = b - u * u - a * a + c * c,
      _ = b - f * f - s * s + l * l, x = d * p - h * v, w = (p * _ - v * m) / (2 * x) - r, M = (v * y - p * g) / x,
      S = (d * m - h * _) / (2 * x) - i, T = (h * g - d * y) / x, A = M * M + T * T - 1, k = 2 * (o + w * M + S * T),
      E = w * w + S * S - o * o, N = -(A ? (k + Math.sqrt(k * k - 4 * A * E)) / (2 * A) : E / k);
    return {x: r + w + M * N, y: i + S + T * N, r: N}
  }

  function rp(t, n, e) {
    var r, i, o, u, a = t.x - n.x, c = t.y - n.y, f = a * a + c * c;
    f ? (i = n.r + e.r, i *= i, u = t.r + e.r, i > (u *= u) ? (r = (f + u - i) / (2 * f), o = Math.sqrt(Math.max(0, u / f - r * r)), e.x = t.x - r * a - o * c, e.y = t.y - r * c + o * a) : (r = (f + i - u) / (2 * f), o = Math.sqrt(Math.max(0, i / f - r * r)), e.x = n.x + r * a - o * c, e.y = n.y + r * c + o * a)) : (e.x = n.x + e.r, e.y = n.y)
  }

  function ip(t, n) {
    var e = t.r + n.r - 1e-6, r = n.x - t.x, i = n.y - t.y;
    return e > 0 && e * e > r * r + i * i
  }

  function op(t) {
    var n = t._, e = t.next._, r = n.r + e.r, i = (n.x * e.r + e.x * n.r) / r, o = (n.y * e.r + e.y * n.r) / r;
    return i * i + o * o
  }

  function up(t) {
    this._ = t, this.next = null, this.previous = null
  }

  function ap(t) {
    if (!(i = t.length)) return 0;
    var n, e, r, i, o, u, a, c, f, s, l;
    if ((n = t[0]).x = 0, n.y = 0, !(i > 1)) return n.r;
    if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;
    rp(e, n, r = t[2]), n = new up(n), e = new up(e), r = new up(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;
    t:for (a = 3; a < i; ++a) {
      rp(n._, e._, r = t[a]), r = new up(r), c = e.next, f = n.previous, s = e._.r, l = n._.r;
      do {
        if (s <= l) {
          if (ip(c._, r._)) {
            e = c, n.next = e, e.previous = n, --a;
            continue t
          }
          s += c._.r, c = c.next
        } else {
          if (ip(f._, r._)) {
            (n = f).next = e, e.previous = n, --a;
            continue t
          }
          l += f._.r, f = f.previous
        }
      } while (c !== f.next);
      for (r.previous = n, r.next = e, n.next = e.previous = e = r, o = op(n); (r = r.next) !== e;) (u = op(r)) < o && (n = r, o = u);
      e = n.next
    }
    for (n = [e._], r = e; (r = r.next) !== e;) n.push(r._);
    for (r = Wd(n), a = 0; a < i; ++a) (n = t[a]).x -= r.x, n.y -= r.y;
    return r.r
  }

  var cp = function (t) {
    return ap(t), t
  };

  function fp(t) {
    return null == t ? null : sp(t)
  }

  function sp(t) {
    if ("function" != typeof t) throw new Error;
    return t
  }

  function lp() {
    return 0
  }

  var hp = function (t) {
    return function () {
      return t
    }
  };

  function dp(t) {
    return Math.sqrt(t.value)
  }

  var pp = function () {
    var t = null, n = 1, e = 1, r = lp;

    function i(i) {
      return i.x = n / 2, i.y = e / 2, t ? i.eachBefore(vp(t)).eachAfter(yp(r, .5)).eachBefore(gp(1)) : i.eachBefore(vp(dp)).eachAfter(yp(lp, 1)).eachAfter(yp(r, i.r / Math.min(n, e))).eachBefore(gp(Math.min(n, e) / (2 * i.r))), i
    }

    return i.radius = function (n) {
      return arguments.length ? (t = fp(n), i) : t
    }, i.size = function (t) {
      return arguments.length ? (n = +t[0], e = +t[1], i) : [n, e]
    }, i.padding = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : hp(+t), i) : r
    }, i
  };

  function vp(t) {
    return function (n) {
      n.children || (n.r = Math.max(0, +t(n) || 0))
    }
  }

  function yp(t, n) {
    return function (e) {
      if (r = e.children) {
        var r, i, o, u = r.length, a = t(e) * n || 0;
        if (a) for (i = 0; i < u; ++i) r[i].r += a;
        if (o = ap(r), a) for (i = 0; i < u; ++i) r[i].r -= a;
        e.r = o + a
      }
    }
  }

  function gp(t) {
    return function (n) {
      var e = n.parent;
      n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
    }
  }

  var bp = function (t) {
    t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
  }, mp = function (t, n, e, r, i) {
    for (var o, u = t.children, a = -1, c = u.length, f = t.value && (r - n) / t.value; ++a < c;) (o = u[a]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * f
  }, _p = function () {
    var t = 1, n = 1, e = 0, r = !1;

    function i(i) {
      var o = i.height + 1;
      return i.x0 = i.y0 = e, i.x1 = t, i.y1 = n / o, i.eachBefore(function (t, n) {
        return function (r) {
          r.children && mp(r, r.x0, t * (r.depth + 1) / n, r.x1, t * (r.depth + 2) / n);
          var i = r.x0, o = r.y0, u = r.x1 - e, a = r.y1 - e;
          u < i && (i = u = (i + u) / 2), a < o && (o = a = (o + a) / 2), r.x0 = i, r.y0 = o, r.x1 = u, r.y1 = a
        }
      }(n, o)), r && i.eachBefore(bp), i
    }

    return i.round = function (t) {
      return arguments.length ? (r = !!t, i) : r
    }, i.size = function (e) {
      return arguments.length ? (t = +e[0], n = +e[1], i) : [t, n]
    }, i.padding = function (t) {
      return arguments.length ? (e = +t, i) : e
    }, i
  }, xp = "$", wp = {depth: -1}, Mp = {};

  function Sp(t) {
    return t.id
  }

  function Tp(t) {
    return t.parentId
  }

  var Ap = function () {
    var t = Sp, n = Tp;

    function e(e) {
      var r, i, o, u, a, c, f, s = e.length, l = new Array(s), h = {};
      for (i = 0; i < s; ++i) r = e[i], a = l[i] = new Gd(r), null != (c = t(r, i, e)) && (c += "") && (h[f = xp + (a.id = c)] = f in h ? Mp : a);
      for (i = 0; i < s; ++i) if (a = l[i], null != (c = n(e[i], i, e)) && (c += "")) {
        if (!(u = h[xp + c])) throw new Error("missing: " + c);
        if (u === Mp) throw new Error("ambiguous: " + c);
        u.children ? u.children.push(a) : u.children = [a], a.parent = u
      } else {
        if (o) throw new Error("multiple roots");
        o = a
      }
      if (!o) throw new Error("no root");
      if (o.parent = wp, o.eachBefore(function (t) {
        t.depth = t.parent.depth + 1, --s
      }).eachBefore(Xd), o.parent = null, s > 0) throw new Error("cycle");
      return o
    }

    return e.id = function (n) {
      return arguments.length ? (t = sp(n), e) : t
    }, e.parentId = function (t) {
      return arguments.length ? (n = sp(t), e) : n
    }, e
  };

  function kp(t, n) {
    return t.parent === n.parent ? 1 : 2
  }

  function Ep(t) {
    var n = t.children;
    return n ? n[0] : t.t
  }

  function Np(t) {
    var n = t.children;
    return n ? n[n.length - 1] : t.t
  }

  function Cp(t, n, e) {
    var r = e / (n.i - t.i);
    n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
  }

  function Pp(t, n, e) {
    return t.a.parent === n.parent ? t.a : e
  }

  function Rp(t, n) {
    this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
  }

  Rp.prototype = Object.create(Gd.prototype);
  var Op = function () {
    var t = kp, n = 1, e = 1, r = null;

    function i(i) {
      var c = function (t) {
        for (var n, e, r, i, o, u = new Rp(t, 0), a = [u]; n = a.pop();) if (r = n._.children) for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) a.push(e = n.children[i] = new Rp(r[i], i)), e.parent = n;
        return (u.parent = new Rp(null, 0)).children = [u], u
      }(i);
      if (c.eachAfter(o), c.parent.m = -c.z, c.eachBefore(u), r) i.eachBefore(a); else {
        var f = i, s = i, l = i;
        i.eachBefore(function (t) {
          t.x < f.x && (f = t), t.x > s.x && (s = t), t.depth > l.depth && (l = t)
        });
        var h = f === s ? 1 : t(f, s) / 2, d = h - f.x, p = n / (s.x + h + d), v = e / (l.depth || 1);
        i.eachBefore(function (t) {
          t.x = (t.x + d) * p, t.y = t.depth * v
        })
      }
      return i
    }

    function o(n) {
      var e = n.children, r = n.parent.children, i = n.i ? r[n.i - 1] : null;
      if (e) {
        !function (t) {
          for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;) (n = i[o]).z += e, n.m += e, e += n.s + (r += n.c)
        }(n);
        var o = (e[0].z + e[e.length - 1].z) / 2;
        i ? (n.z = i.z + t(n._, i._), n.m = n.z - o) : n.z = o
      } else i && (n.z = i.z + t(n._, i._));
      n.parent.A = function (n, e, r) {
        if (e) {
          for (var i, o = n, u = n, a = e, c = o.parent.children[0], f = o.m, s = u.m, l = a.m, h = c.m; a = Np(a), o = Ep(o), a && o;) c = Ep(c), (u = Np(u)).a = n, (i = a.z + l - o.z - f + t(a._, o._)) > 0 && (Cp(Pp(a, n, r), n, i), f += i, s += i), l += a.m, f += o.m, h += c.m, s += u.m;
          a && !Np(u) && (u.t = a, u.m += l - s), o && !Ep(c) && (c.t = o, c.m += f - h, r = n)
        }
        return r
      }(n, i, n.parent.A || r[0])
    }

    function u(t) {
      t._.x = t.z + t.parent.m, t.m += t.parent.m
    }

    function a(t) {
      t.x *= n, t.y = t.depth * e
    }

    return i.separation = function (n) {
      return arguments.length ? (t = n, i) : t
    }, i.size = function (t) {
      return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e]
    }, i.nodeSize = function (t) {
      return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null
    }, i
  }, zp = function (t, n, e, r, i) {
    for (var o, u = t.children, a = -1, c = u.length, f = t.value && (i - e) / t.value; ++a < c;) (o = u[a]).x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * f
  }, Lp = (1 + Math.sqrt(5)) / 2;

  function Up(t, n, e, r, i, o) {
    for (var u, a, c, f, s, l, h, d, p, v, y, g = [], b = n.children, m = 0, _ = 0, x = b.length, w = n.value; m < x;) {
      c = i - e, f = o - r;
      do {
        s = b[_++].value
      } while (!s && _ < x);
      for (l = h = s, y = s * s * (v = Math.max(f / c, c / f) / (w * t)), p = Math.max(h / y, y / l); _ < x; ++_) {
        if (s += a = b[_].value, a < l && (l = a), a > h && (h = a), y = s * s * v, (d = Math.max(h / y, y / l)) > p) {
          s -= a;
          break
        }
        p = d
      }
      g.push(u = {
        value: s,
        dice: c < f,
        children: b.slice(m, _)
      }), u.dice ? mp(u, e, r, i, w ? r += f * s / w : o) : zp(u, e, r, w ? e += c * s / w : i, o), w -= s, m = _
    }
    return g
  }

  var jp = function t(n) {
    function e(t, e, r, i, o) {
      Up(n, t, e, r, i, o)
    }

    return e.ratio = function (n) {
      return t((n = +n) > 1 ? n : 1)
    }, e
  }(Lp), Dp = function () {
    var t = jp, n = !1, e = 1, r = 1, i = [0], o = lp, u = lp, a = lp, c = lp, f = lp;

    function s(t) {
      return t.x0 = t.y0 = 0, t.x1 = e, t.y1 = r, t.eachBefore(l), i = [0], n && t.eachBefore(bp), t
    }

    function l(n) {
      var e = i[n.depth], r = n.x0 + e, s = n.y0 + e, l = n.x1 - e, h = n.y1 - e;
      l < r && (r = l = (r + l) / 2), h < s && (s = h = (s + h) / 2), n.x0 = r, n.y0 = s, n.x1 = l, n.y1 = h, n.children && (e = i[n.depth + 1] = o(n) / 2, r += f(n) - e, s += u(n) - e, (l -= a(n) - e) < r && (r = l = (r + l) / 2), (h -= c(n) - e) < s && (s = h = (s + h) / 2), t(n, r, s, l, h))
    }

    return s.round = function (t) {
      return arguments.length ? (n = !!t, s) : n
    }, s.size = function (t) {
      return arguments.length ? (e = +t[0], r = +t[1], s) : [e, r]
    }, s.tile = function (n) {
      return arguments.length ? (t = sp(n), s) : t
    }, s.padding = function (t) {
      return arguments.length ? s.paddingInner(t).paddingOuter(t) : s.paddingInner()
    }, s.paddingInner = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : hp(+t), s) : o
    }, s.paddingOuter = function (t) {
      return arguments.length ? s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : s.paddingTop()
    }, s.paddingTop = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : hp(+t), s) : u
    }, s.paddingRight = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : hp(+t), s) : a
    }, s.paddingBottom = function (t) {
      return arguments.length ? (c = "function" == typeof t ? t : hp(+t), s) : c
    }, s.paddingLeft = function (t) {
      return arguments.length ? (f = "function" == typeof t ? t : hp(+t), s) : f
    }, s
  }, qp = function (t, n, e, r, i) {
    var o, u, a = t.children, c = a.length, f = new Array(c + 1);
    for (f[0] = u = o = 0; o < c; ++o) f[o + 1] = u += a[o].value;
    !function t(n, e, r, i, o, u, c) {
      if (n >= e - 1) {
        var s = a[n];
        return s.x0 = i, s.y0 = o, s.x1 = u, void (s.y1 = c)
      }
      var l = f[n], h = r / 2 + l, d = n + 1, p = e - 1;
      for (; d < p;) {
        var v = d + p >>> 1;
        f[v] < h ? d = v + 1 : p = v
      }
      h - f[d - 1] < f[d] - h && n + 1 < d && --d;
      var y = f[d] - l, g = r - y;
      if (u - i > c - o) {
        var b = (i * g + u * y) / r;
        t(n, d, y, i, o, b, c), t(d, e, g, b, o, u, c)
      } else {
        var m = (o * g + c * y) / r;
        t(n, d, y, i, o, u, m), t(d, e, g, i, m, u, c)
      }
    }(0, c, t.value, n, e, r, i)
  }, Bp = function (t, n, e, r, i) {
    (1 & t.depth ? zp : mp)(t, n, e, r, i)
  }, Ip = function t(n) {
    function e(t, e, r, i, o) {
      if ((u = t._squarify) && u.ratio === n) for (var u, a, c, f, s, l = -1, h = u.length, d = t.value; ++l < h;) {
        for (c = (a = u[l]).children, f = a.value = 0, s = c.length; f < s; ++f) a.value += c[f].value;
        a.dice ? mp(a, e, r, i, r += (o - r) * a.value / d) : zp(a, e, r, e += (i - e) * a.value / d, o), d -= a.value
      } else t._squarify = u = Up(n, t, e, r, i, o), u.ratio = n
    }

    return e.ratio = function (n) {
      return t((n = +n) > 1 ? n : 1)
    }, e
  }(Lp), Fp = function (t) {
    for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1];
    return o / 2
  }, Yp = function (t) {
    for (var n, e, r = -1, i = t.length, o = 0, u = 0, a = t[i - 1], c = 0; ++r < i;) n = a, a = t[r], c += e = n[0] * a[1] - a[0] * n[1], o += (n[0] + a[0]) * e, u += (n[1] + a[1]) * e;
    return [o / (c *= 3), u / c]
  }, Hp = function (t, n, e) {
    return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
  };

  function Vp(t, n) {
    return t[0] - n[0] || t[1] - n[1]
  }

  function Xp(t) {
    for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
      for (; r > 1 && Hp(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;) --r;
      e[r++] = i
    }
    return e.slice(0, r)
  }

  var Gp = function (t) {
    if ((e = t.length) < 3) return null;
    var n, e, r = new Array(e), i = new Array(e);
    for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
    for (r.sort(Vp), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
    var o = Xp(r), u = Xp(i), a = u[0] === o[0], c = u[u.length - 1] === o[o.length - 1], f = [];
    for (n = o.length - 1; n >= 0; --n) f.push(t[r[o[n]][2]]);
    for (n = +a; n < u.length - c; ++n) f.push(t[r[u[n]][2]]);
    return f
  }, $p = function (t, n) {
    for (var e, r, i = t.length, o = t[i - 1], u = n[0], a = n[1], c = o[0], f = o[1], s = !1, l = 0; l < i; ++l) e = (o = t[l])[0], (r = o[1]) > a != f > a && u < (c - e) * (a - r) / (f - r) + e && (s = !s), c = e, f = r;
    return s
  }, Wp = function (t) {
    for (var n, e, r = -1, i = t.length, o = t[i - 1], u = o[0], a = o[1], c = 0; ++r < i;) n = u, e = a, n -= u = (o = t[r])[0], e -= a = o[1], c += Math.sqrt(n * n + e * e);
    return c
  }, Zp = function () {
    return Math.random()
  }, Qp = function t(n) {
    function e(t, e) {
      return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t, function () {
        return n() * e + t
      }
    }

    return e.source = t, e
  }(Zp), Jp = function t(n) {
    function e(t, e) {
      var r, i;
      return t = null == t ? 0 : +t, e = null == e ? 1 : +e, function () {
        var o;
        if (null != r) o = r, r = null; else do {
          r = 2 * n() - 1, o = 2 * n() - 1, i = r * r + o * o
        } while (!i || i > 1);
        return t + e * o * Math.sqrt(-2 * Math.log(i) / i)
      }
    }

    return e.source = t, e
  }(Zp), Kp = function t(n) {
    function e() {
      var t = Jp.source(n).apply(this, arguments);
      return function () {
        return Math.exp(t())
      }
    }

    return e.source = t, e
  }(Zp), tv = function t(n) {
    function e(t) {
      return function () {
        for (var e = 0, r = 0; r < t; ++r) e += n();
        return e
      }
    }

    return e.source = t, e
  }(Zp), nv = function t(n) {
    function e(t) {
      var e = tv.source(n)(t);
      return function () {
        return e() / t
      }
    }

    return e.source = t, e
  }(Zp), ev = function t(n) {
    function e(t) {
      return function () {
        return -Math.log(1 - n()) / t
      }
    }

    return e.source = t, e
  }(Zp);

  function rv(t, n) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(t);
        break;
      default:
        this.range(n).domain(t)
    }
    return this
  }

  function iv(t, n) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.interpolator(t);
        break;
      default:
        this.interpolator(n).domain(t)
    }
    return this
  }

  var ov = Array.prototype, uv = ov.map, av = ov.slice, cv = {name: "implicit"};

  function fv() {
    var t = Cu(), n = [], e = [], r = cv;

    function i(i) {
      var o = i + "", u = t.get(o);
      if (!u) {
        if (r !== cv) return r;
        t.set(o, u = n.push(i))
      }
      return e[(u - 1) % e.length]
    }

    return i.domain = function (e) {
      if (!arguments.length) return n.slice();
      n = [], t = Cu();
      for (var r, o, u = -1, a = e.length; ++u < a;) t.has(o = (r = e[u]) + "") || t.set(o, n.push(r));
      return i
    }, i.range = function (t) {
      return arguments.length ? (e = av.call(t), i) : e.slice()
    }, i.unknown = function (t) {
      return arguments.length ? (r = t, i) : r
    }, i.copy = function () {
      return fv(n, e).unknown(r)
    }, rv.apply(i, arguments), i
  }

  function sv() {
    var t, n, e = fv().unknown(void 0), r = e.domain, i = e.range, o = [0, 1], u = !1, a = 0, c = 0, f = .5;

    function s() {
      var e = r().length, s = o[1] < o[0], l = o[s - 0], h = o[1 - s];
      t = (h - l) / Math.max(1, e - a + 2 * c), u && (t = Math.floor(t)), l += (h - l - t * (e - a)) * f, n = t * (1 - a), u && (l = Math.round(l), n = Math.round(n));
      var d = w(e).map(function (n) {
        return l + t * n
      });
      return i(s ? d.reverse() : d)
    }

    return delete e.unknown, e.domain = function (t) {
      return arguments.length ? (r(t), s()) : r()
    }, e.range = function (t) {
      return arguments.length ? (o = [+t[0], +t[1]], s()) : o.slice()
    }, e.rangeRound = function (t) {
      return o = [+t[0], +t[1]], u = !0, s()
    }, e.bandwidth = function () {
      return n
    }, e.step = function () {
      return t
    }, e.round = function (t) {
      return arguments.length ? (u = !!t, s()) : u
    }, e.padding = function (t) {
      return arguments.length ? (a = Math.min(1, c = +t), s()) : a
    }, e.paddingInner = function (t) {
      return arguments.length ? (a = Math.min(1, t), s()) : a
    }, e.paddingOuter = function (t) {
      return arguments.length ? (c = +t, s()) : c
    }, e.align = function (t) {
      return arguments.length ? (f = Math.max(0, Math.min(1, t)), s()) : f
    }, e.copy = function () {
      return sv(r(), o).round(u).paddingInner(a).paddingOuter(c).align(f)
    }, rv.apply(s(), arguments)
  }

  function lv() {
    return function t(n) {
      var e = n.copy;
      return n.padding = n.paddingOuter, delete n.paddingInner, delete n.paddingOuter, n.copy = function () {
        return t(e())
      }, n
    }(sv.apply(null, arguments).paddingInner(1))
  }

  var hv = function (t) {
    return function () {
      return t
    }
  }, dv = function (t) {
    return +t
  }, pv = [0, 1];

  function vv(t) {
    return t
  }

  function yv(t, n) {
    return (n -= t = +t) ? function (e) {
      return (e - t) / n
    } : hv(isNaN(n) ? NaN : .5)
  }

  function gv(t) {
    var n, e = t[0], r = t[t.length - 1];
    return e > r && (n = e, e = r, r = n), function (t) {
      return Math.max(e, Math.min(r, t))
    }
  }

  function bv(t, n, e) {
    var r = t[0], i = t[1], o = n[0], u = n[1];
    return i < r ? (r = yv(i, r), o = e(u, o)) : (r = yv(r, i), o = e(o, u)), function (t) {
      return o(r(t))
    }
  }

  function mv(t, n, e) {
    var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), u = -1;
    for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < r;) i[u] = yv(t[u], t[u + 1]), o[u] = e(n[u], n[u + 1]);
    return function (n) {
      var e = c(t, n, 1, r) - 1;
      return o[e](i[e](n))
    }
  }

  function _v(t, n) {
    return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
  }

  function xv() {
    var t, n, e, r, i, o, u = pv, a = pv, c = yr, f = vv;

    function s() {
      return r = Math.min(u.length, a.length) > 2 ? mv : bv, i = o = null, l
    }

    function l(n) {
      return isNaN(n = +n) ? e : (i || (i = r(u.map(t), a, c)))(t(f(n)))
    }

    return l.invert = function (e) {
      return f(n((o || (o = r(a, u.map(t), ar)))(e)))
    }, l.domain = function (t) {
      return arguments.length ? (u = uv.call(t, dv), f === vv || (f = gv(u)), s()) : u.slice()
    }, l.range = function (t) {
      return arguments.length ? (a = av.call(t), s()) : a.slice()
    }, l.rangeRound = function (t) {
      return a = av.call(t), c = mr, s()
    }, l.clamp = function (t) {
      return arguments.length ? (f = t ? gv(u) : vv, l) : f !== vv
    }, l.interpolate = function (t) {
      return arguments.length ? (c = t, s()) : c
    }, l.unknown = function (t) {
      return arguments.length ? (e = t, l) : e
    }, function (e, r) {
      return t = e, n = r, s()
    }
  }

  function wv(t, n) {
    return xv()(t, n)
  }

  var Mv = function (t, n, e, r) {
    var i, o = E(t, n, e);
    switch ((r = _c(null == r ? ",f" : r)).type) {
      case"s":
        var u = Math.max(Math.abs(t), Math.abs(n));
        return null != r.precision || isNaN(i = zc(o, u)) || (r.precision = i), Tc(r, u);
      case"":
      case"e":
      case"g":
      case"p":
      case"r":
        null != r.precision || isNaN(i = Lc(o, Math.max(Math.abs(t), Math.abs(n)))) || (r.precision = i - ("e" === r.type));
        break;
      case"f":
      case"%":
        null != r.precision || isNaN(i = Oc(o)) || (r.precision = i - 2 * ("%" === r.type))
    }
    return Sc(r)
  };

  function Sv(t) {
    var n = t.domain;
    return t.ticks = function (t) {
      var e = n();
      return A(e[0], e[e.length - 1], null == t ? 10 : t)
    }, t.tickFormat = function (t, e) {
      var r = n();
      return Mv(r[0], r[r.length - 1], null == t ? 10 : t, e)
    }, t.nice = function (e) {
      null == e && (e = 10);
      var r, i = n(), o = 0, u = i.length - 1, a = i[o], c = i[u];
      return c < a && (r = a, a = c, c = r, r = o, o = u, u = r), (r = k(a, c, e)) > 0 ? r = k(a = Math.floor(a / r) * r, c = Math.ceil(c / r) * r, e) : r < 0 && (r = k(a = Math.ceil(a * r) / r, c = Math.floor(c * r) / r, e)), r > 0 ? (i[o] = Math.floor(a / r) * r, i[u] = Math.ceil(c / r) * r, n(i)) : r < 0 && (i[o] = Math.ceil(a * r) / r, i[u] = Math.floor(c * r) / r, n(i)), t
    }, t
  }

  function Tv() {
    var t = wv(vv, vv);
    return t.copy = function () {
      return _v(t, Tv())
    }, rv.apply(t, arguments), Sv(t)
  }

  function Av(t) {
    var n;

    function e(t) {
      return isNaN(t = +t) ? n : t
    }

    return e.invert = e, e.domain = e.range = function (n) {
      return arguments.length ? (t = uv.call(n, dv), e) : t.slice()
    }, e.unknown = function (t) {
      return arguments.length ? (n = t, e) : n
    }, e.copy = function () {
      return Av(t).unknown(n)
    }, t = arguments.length ? uv.call(t, dv) : [0, 1], Sv(e)
  }

  var kv = function (t, n) {
    var e, r = 0, i = (t = t.slice()).length - 1, o = t[r], u = t[i];
    return u < o && (e = r, r = i, i = e, e = o, o = u, u = e), t[r] = n.floor(o), t[i] = n.ceil(u), t
  };

  function Ev(t) {
    return Math.log(t)
  }

  function Nv(t) {
    return Math.exp(t)
  }

  function Cv(t) {
    return -Math.log(-t)
  }

  function Pv(t) {
    return -Math.exp(-t)
  }

  function Rv(t) {
    return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
  }

  function Ov(t) {
    return function (n) {
      return -t(-n)
    }
  }

  function zv(t) {
    var n, e, r = t(Ev, Nv), i = r.domain, o = 10;

    function u() {
      return n = function (t) {
        return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (n) {
          return Math.log(n) / t
        })
      }(o), e = function (t) {
        return 10 === t ? Rv : t === Math.E ? Math.exp : function (n) {
          return Math.pow(t, n)
        }
      }(o), i()[0] < 0 ? (n = Ov(n), e = Ov(e), t(Cv, Pv)) : t(Ev, Nv), r
    }

    return r.base = function (t) {
      return arguments.length ? (o = +t, u()) : o
    }, r.domain = function (t) {
      return arguments.length ? (i(t), u()) : i()
    }, r.ticks = function (t) {
      var r, u = i(), a = u[0], c = u[u.length - 1];
      (r = c < a) && (h = a, a = c, c = h);
      var f, s, l, h = n(a), d = n(c), p = null == t ? 10 : +t, v = [];
      if (!(o % 1) && d - h < p) {
        if (h = Math.round(h) - 1, d = Math.round(d) + 1, a > 0) {
          for (; h < d; ++h) for (s = 1, f = e(h); s < o; ++s) if (!((l = f * s) < a)) {
            if (l > c) break;
            v.push(l)
          }
        } else for (; h < d; ++h) for (s = o - 1, f = e(h); s >= 1; --s) if (!((l = f * s) < a)) {
          if (l > c) break;
          v.push(l)
        }
      } else v = A(h, d, Math.min(d - h, p)).map(e);
      return r ? v.reverse() : v
    }, r.tickFormat = function (t, i) {
      if (null == i && (i = 10 === o ? ".0e" : ","), "function" != typeof i && (i = Sc(i)), t === 1 / 0) return i;
      null == t && (t = 10);
      var u = Math.max(1, o * t / r.ticks().length);
      return function (t) {
        var r = t / e(Math.round(n(t)));
        return r * o < o - .5 && (r *= o), r <= u ? i(t) : ""
      }
    }, r.nice = function () {
      return i(kv(i(), {
        floor: function (t) {
          return e(Math.floor(n(t)))
        }, ceil: function (t) {
          return e(Math.ceil(n(t)))
        }
      }))
    }, r
  }

  function Lv() {
    var t = zv(xv()).domain([1, 10]);
    return t.copy = function () {
      return _v(t, Lv()).base(t.base())
    }, rv.apply(t, arguments), t
  }

  function Uv(t) {
    return function (n) {
      return Math.sign(n) * Math.log1p(Math.abs(n / t))
    }
  }

  function jv(t) {
    return function (n) {
      return Math.sign(n) * Math.expm1(Math.abs(n)) * t
    }
  }

  function Dv(t) {
    var n = 1, e = t(Uv(n), jv(n));
    return e.constant = function (e) {
      return arguments.length ? t(Uv(n = +e), jv(n)) : n
    }, Sv(e)
  }

  function qv() {
    var t = Dv(xv());
    return t.copy = function () {
      return _v(t, qv()).constant(t.constant())
    }, rv.apply(t, arguments)
  }

  function Bv(t) {
    return function (n) {
      return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t)
    }
  }

  function Iv(t) {
    return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t)
  }

  function Fv(t) {
    return t < 0 ? -t * t : t * t
  }

  function Yv(t) {
    var n = t(vv, vv), e = 1;

    function r() {
      return 1 === e ? t(vv, vv) : .5 === e ? t(Iv, Fv) : t(Bv(e), Bv(1 / e))
    }

    return n.exponent = function (t) {
      return arguments.length ? (e = +t, r()) : e
    }, Sv(n)
  }

  function Hv() {
    var t = Yv(xv());
    return t.copy = function () {
      return _v(t, Hv()).exponent(t.exponent())
    }, rv.apply(t, arguments), t
  }

  function Vv() {
    return Hv.apply(null, arguments).exponent(.5)
  }

  function Xv() {
    var t, n = [], e = [], i = [];

    function o() {
      var t = 0, r = Math.max(1, e.length);
      for (i = new Array(r - 1); ++t < r;) i[t - 1] = P(n, t / r);
      return u
    }

    function u(n) {
      return isNaN(n = +n) ? t : e[c(i, n)]
    }

    return u.invertExtent = function (t) {
      var r = e.indexOf(t);
      return r < 0 ? [NaN, NaN] : [r > 0 ? i[r - 1] : n[0], r < i.length ? i[r] : n[n.length - 1]]
    }, u.domain = function (t) {
      if (!arguments.length) return n.slice();
      n = [];
      for (var e, i = 0, u = t.length; i < u; ++i) null == (e = t[i]) || isNaN(e = +e) || n.push(e);
      return n.sort(r), o()
    }, u.range = function (t) {
      return arguments.length ? (e = av.call(t), o()) : e.slice()
    }, u.unknown = function (n) {
      return arguments.length ? (t = n, u) : t
    }, u.quantiles = function () {
      return i.slice()
    }, u.copy = function () {
      return Xv().domain(n).range(e).unknown(t)
    }, rv.apply(u, arguments)
  }

  function Gv() {
    var t, n = 0, e = 1, r = 1, i = [.5], o = [0, 1];

    function u(n) {
      return n <= n ? o[c(i, n, 0, r)] : t
    }

    function a() {
      var t = -1;
      for (i = new Array(r); ++t < r;) i[t] = ((t + 1) * e - (t - r) * n) / (r + 1);
      return u
    }

    return u.domain = function (t) {
      return arguments.length ? (n = +t[0], e = +t[1], a()) : [n, e]
    }, u.range = function (t) {
      return arguments.length ? (r = (o = av.call(t)).length - 1, a()) : o.slice()
    }, u.invertExtent = function (t) {
      var u = o.indexOf(t);
      return u < 0 ? [NaN, NaN] : u < 1 ? [n, i[0]] : u >= r ? [i[r - 1], e] : [i[u - 1], i[u]]
    }, u.unknown = function (n) {
      return arguments.length ? (t = n, u) : u
    }, u.thresholds = function () {
      return i.slice()
    }, u.copy = function () {
      return Gv().domain([n, e]).range(o).unknown(t)
    }, rv.apply(Sv(u), arguments)
  }

  function $v() {
    var t, n = [.5], e = [0, 1], r = 1;

    function i(i) {
      return i <= i ? e[c(n, i, 0, r)] : t
    }

    return i.domain = function (t) {
      return arguments.length ? (n = av.call(t), r = Math.min(n.length, e.length - 1), i) : n.slice()
    }, i.range = function (t) {
      return arguments.length ? (e = av.call(t), r = Math.min(n.length, e.length - 1), i) : e.slice()
    }, i.invertExtent = function (t) {
      var r = e.indexOf(t);
      return [n[r - 1], n[r]]
    }, i.unknown = function (n) {
      return arguments.length ? (t = n, i) : t
    }, i.copy = function () {
      return $v().domain(n).range(e).unknown(t)
    }, rv.apply(i, arguments)
  }

  var Wv = new Date, Zv = new Date;

  function Qv(t, n, e, r) {
    function i(n) {
      return t(n = new Date(+n)), n
    }

    return i.floor = i, i.ceil = function (e) {
      return t(e = new Date(e - 1)), n(e, 1), t(e), e
    }, i.round = function (t) {
      var n = i(t), e = i.ceil(t);
      return t - n < e - t ? n : e
    }, i.offset = function (t, e) {
      return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
    }, i.range = function (e, r, o) {
      var u, a = [];
      if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return a;
      do {
        a.push(u = new Date(+e)), n(e, o), t(e)
      } while (u < e && e < r);
      return a
    }, i.filter = function (e) {
      return Qv(function (n) {
        if (n >= n) for (; t(n), !e(n);) n.setTime(n - 1)
      }, function (t, r) {
        if (t >= t) if (r < 0) for (; ++r <= 0;) for (; n(t, -1), !e(t);) ; else for (; --r >= 0;) for (; n(t, 1), !e(t);) ;
      })
    }, e && (i.count = function (n, r) {
      return Wv.setTime(+n), Zv.setTime(+r), t(Wv), t(Zv), Math.floor(e(Wv, Zv))
    }, i.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
        return r(n) % t == 0
      } : function (n) {
        return i.count(0, n) % t == 0
      }) : i : null
    }), i
  }

  var Jv = Qv(function () {
  }, function (t, n) {
    t.setTime(+t + n)
  }, function (t, n) {
    return n - t
  });
  Jv.every = function (t) {
    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Qv(function (n) {
      n.setTime(Math.floor(n / t) * t)
    }, function (n, e) {
      n.setTime(+n + e * t)
    }, function (n, e) {
      return (e - n) / t
    }) : Jv : null
  };
  var Kv = Jv, ty = Jv.range, ny = 6e4, ey = 6048e5, ry = Qv(function (t) {
    t.setTime(t - t.getMilliseconds())
  }, function (t, n) {
    t.setTime(+t + 1e3 * n)
  }, function (t, n) {
    return (n - t) / 1e3
  }, function (t) {
    return t.getUTCSeconds()
  }), iy = ry, oy = ry.range, uy = Qv(function (t) {
    t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds())
  }, function (t, n) {
    t.setTime(+t + n * ny)
  }, function (t, n) {
    return (n - t) / ny
  }, function (t) {
    return t.getMinutes()
  }), ay = uy, cy = uy.range, fy = Qv(function (t) {
    t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds() - t.getMinutes() * ny)
  }, function (t, n) {
    t.setTime(+t + 36e5 * n)
  }, function (t, n) {
    return (n - t) / 36e5
  }, function (t) {
    return t.getHours()
  }), sy = fy, ly = fy.range, hy = Qv(function (t) {
    t.setHours(0, 0, 0, 0)
  }, function (t, n) {
    t.setDate(t.getDate() + n)
  }, function (t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ny) / 864e5
  }, function (t) {
    return t.getDate() - 1
  }), dy = hy, py = hy.range;

  function vy(t) {
    return Qv(function (n) {
      n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
    }, function (t, n) {
      t.setDate(t.getDate() + 7 * n)
    }, function (t, n) {
      return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ny) / ey
    })
  }

  var yy = vy(0), gy = vy(1), by = vy(2), my = vy(3), _y = vy(4), xy = vy(5), wy = vy(6), My = yy.range, Sy = gy.range,
    Ty = by.range, Ay = my.range, ky = _y.range, Ey = xy.range, Ny = wy.range, Cy = Qv(function (t) {
      t.setDate(1), t.setHours(0, 0, 0, 0)
    }, function (t, n) {
      t.setMonth(t.getMonth() + n)
    }, function (t, n) {
      return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
    }, function (t) {
      return t.getMonth()
    }), Py = Cy, Ry = Cy.range, Oy = Qv(function (t) {
      t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
    }, function (t, n) {
      t.setFullYear(t.getFullYear() + n)
    }, function (t, n) {
      return n.getFullYear() - t.getFullYear()
    }, function (t) {
      return t.getFullYear()
    });
  Oy.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? Qv(function (n) {
      n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
    }, function (n, e) {
      n.setFullYear(n.getFullYear() + e * t)
    }) : null
  };
  var zy = Oy, Ly = Oy.range, Uy = Qv(function (t) {
    t.setUTCSeconds(0, 0)
  }, function (t, n) {
    t.setTime(+t + n * ny)
  }, function (t, n) {
    return (n - t) / ny
  }, function (t) {
    return t.getUTCMinutes()
  }), jy = Uy, Dy = Uy.range, qy = Qv(function (t) {
    t.setUTCMinutes(0, 0, 0)
  }, function (t, n) {
    t.setTime(+t + 36e5 * n)
  }, function (t, n) {
    return (n - t) / 36e5
  }, function (t) {
    return t.getUTCHours()
  }), By = qy, Iy = qy.range, Fy = Qv(function (t) {
    t.setUTCHours(0, 0, 0, 0)
  }, function (t, n) {
    t.setUTCDate(t.getUTCDate() + n)
  }, function (t, n) {
    return (n - t) / 864e5
  }, function (t) {
    return t.getUTCDate() - 1
  }), Yy = Fy, Hy = Fy.range;

  function Vy(t) {
    return Qv(function (n) {
      n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
    }, function (t, n) {
      t.setUTCDate(t.getUTCDate() + 7 * n)
    }, function (t, n) {
      return (n - t) / ey
    })
  }

  var Xy = Vy(0), Gy = Vy(1), $y = Vy(2), Wy = Vy(3), Zy = Vy(4), Qy = Vy(5), Jy = Vy(6), Ky = Xy.range, tg = Gy.range,
    ng = $y.range, eg = Wy.range, rg = Zy.range, ig = Qy.range, og = Jy.range, ug = Qv(function (t) {
      t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
    }, function (t, n) {
      t.setUTCMonth(t.getUTCMonth() + n)
    }, function (t, n) {
      return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
    }, function (t) {
      return t.getUTCMonth()
    }), ag = ug, cg = ug.range, fg = Qv(function (t) {
      t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
    }, function (t, n) {
      t.setUTCFullYear(t.getUTCFullYear() + n)
    }, function (t, n) {
      return n.getUTCFullYear() - t.getUTCFullYear()
    }, function (t) {
      return t.getUTCFullYear()
    });
  fg.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? Qv(function (n) {
      n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
    }, function (n, e) {
      n.setUTCFullYear(n.getUTCFullYear() + e * t)
    }) : null
  };
  var sg = fg, lg = fg.range;

  function hg(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
      return n.setFullYear(t.y), n
    }
    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
  }

  function dg(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
      return n.setUTCFullYear(t.y), n
    }
    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
  }

  function pg(t) {
    return {y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0}
  }

  function vg(t) {
    var n = t.dateTime, e = t.date, r = t.time, i = t.periods, o = t.days, u = t.shortDays, a = t.months,
      c = t.shortMonths, f = kg(i), s = Eg(i), l = kg(o), h = Eg(o), d = kg(u), p = Eg(u), v = kg(a), y = Eg(a),
      g = kg(c), b = Eg(c), m = {
        a: function (t) {
          return u[t.getDay()]
        }, A: function (t) {
          return o[t.getDay()]
        }, b: function (t) {
          return c[t.getMonth()]
        }, B: function (t) {
          return a[t.getMonth()]
        }, c: null, d: $g, e: $g, f: Kg, H: Wg, I: Zg, j: Qg, L: Jg, m: tb, M: nb, p: function (t) {
          return i[+(t.getHours() >= 12)]
        }, Q: Nb, s: Cb, S: eb, u: rb, U: ib, V: ob, w: ub, W: ab, x: null, X: null, y: cb, Y: fb, Z: sb, "%": Eb
      }, _ = {
        a: function (t) {
          return u[t.getUTCDay()]
        }, A: function (t) {
          return o[t.getUTCDay()]
        }, b: function (t) {
          return c[t.getUTCMonth()]
        }, B: function (t) {
          return a[t.getUTCMonth()]
        }, c: null, d: lb, e: lb, f: yb, H: hb, I: db, j: pb, L: vb, m: gb, M: bb, p: function (t) {
          return i[+(t.getUTCHours() >= 12)]
        }, Q: Nb, s: Cb, S: mb, u: _b, U: xb, V: wb, w: Mb, W: Sb, x: null, X: null, y: Tb, Y: Ab, Z: kb, "%": Eb
      }, x = {
        a: function (t, n, e) {
          var r = d.exec(n.slice(e));
          return r ? (t.w = p[r[0].toLowerCase()], e + r[0].length) : -1
        }, A: function (t, n, e) {
          var r = l.exec(n.slice(e));
          return r ? (t.w = h[r[0].toLowerCase()], e + r[0].length) : -1
        }, b: function (t, n, e) {
          var r = g.exec(n.slice(e));
          return r ? (t.m = b[r[0].toLowerCase()], e + r[0].length) : -1
        }, B: function (t, n, e) {
          var r = v.exec(n.slice(e));
          return r ? (t.m = y[r[0].toLowerCase()], e + r[0].length) : -1
        }, c: function (t, e, r) {
          return S(t, n, e, r)
        }, d: Dg, e: Dg, f: Hg, H: Bg, I: Bg, j: qg, L: Yg, m: jg, M: Ig, p: function (t, n, e) {
          var r = f.exec(n.slice(e));
          return r ? (t.p = s[r[0].toLowerCase()], e + r[0].length) : -1
        }, Q: Xg, s: Gg, S: Fg, u: Cg, U: Pg, V: Rg, w: Ng, W: Og, x: function (t, n, r) {
          return S(t, e, n, r)
        }, X: function (t, n, e) {
          return S(t, r, n, e)
        }, y: Lg, Y: zg, Z: Ug, "%": Vg
      };

    function w(t, n) {
      return function (e) {
        var r, i, o, u = [], a = -1, c = 0, f = t.length;
        for (e instanceof Date || (e = new Date(+e)); ++a < f;) 37 === t.charCodeAt(a) && (u.push(t.slice(c, a)), null != (i = xg[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), u.push(r), c = a + 1);
        return u.push(t.slice(c, a)), u.join("")
      }
    }

    function M(t, n) {
      return function (e) {
        var r, i, o = pg(1900);
        if (S(o, t, e += "", 0) != e.length) return null;
        if ("Q" in o) return new Date(o.Q);
        if ("p" in o && (o.H = o.H % 12 + 12 * o.p), "V" in o) {
          if (o.V < 1 || o.V > 53) return null;
          "w" in o || (o.w = 1), "Z" in o ? (i = (r = dg(pg(o.y))).getUTCDay(), r = i > 4 || 0 === i ? Gy.ceil(r) : Gy(r), r = Yy.offset(r, 7 * (o.V - 1)), o.y = r.getUTCFullYear(), o.m = r.getUTCMonth(), o.d = r.getUTCDate() + (o.w + 6) % 7) : (i = (r = n(pg(o.y))).getDay(), r = i > 4 || 0 === i ? gy.ceil(r) : gy(r), r = dy.offset(r, 7 * (o.V - 1)), o.y = r.getFullYear(), o.m = r.getMonth(), o.d = r.getDate() + (o.w + 6) % 7)
        } else ("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), i = "Z" in o ? dg(pg(o.y)).getUTCDay() : n(pg(o.y)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (i + 5) % 7 : o.w + 7 * o.U - (i + 6) % 7);
        return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, dg(o)) : n(o)
      }
    }

    function S(t, n, e, r) {
      for (var i, o, u = 0, a = n.length, c = e.length; u < a;) {
        if (r >= c) return -1;
        if (37 === (i = n.charCodeAt(u++))) {
          if (i = n.charAt(u++), !(o = x[i in xg ? n.charAt(u++) : i]) || (r = o(t, e, r)) < 0) return -1
        } else if (i != e.charCodeAt(r++)) return -1
      }
      return r
    }

    return m.x = w(e, m), m.X = w(r, m), m.c = w(n, m), _.x = w(e, _), _.X = w(r, _), _.c = w(n, _), {
      format: function (t) {
        var n = w(t += "", m);
        return n.toString = function () {
          return t
        }, n
      }, parse: function (t) {
        var n = M(t += "", hg);
        return n.toString = function () {
          return t
        }, n
      }, utcFormat: function (t) {
        var n = w(t += "", _);
        return n.toString = function () {
          return t
        }, n
      }, utcParse: function (t) {
        var n = M(t, dg);
        return n.toString = function () {
          return t
        }, n
      }
    }
  }

  var yg, gg, bg, mg, _g, xg = {"-": "", _: " ", 0: "0"}, wg = /^\s*\d+/, Mg = /^%/, Sg = /[\\^$*+?|[\]().{}]/g;

  function Tg(t, n, e) {
    var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
    return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
  }

  function Ag(t) {
    return t.replace(Sg, "\\$&")
  }

  function kg(t) {
    return new RegExp("^(?:" + t.map(Ag).join("|") + ")", "i")
  }

  function Eg(t) {
    for (var n = {}, e = -1, r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
    return n
  }

  function Ng(t, n, e) {
    var r = wg.exec(n.slice(e, e + 1));
    return r ? (t.w = +r[0], e + r[0].length) : -1
  }

  function Cg(t, n, e) {
    var r = wg.exec(n.slice(e, e + 1));
    return r ? (t.u = +r[0], e + r[0].length) : -1
  }

  function Pg(t, n, e) {
    var r = wg.exec(n.slice(e, e + 2));
    return r ? (t.U = +r[0], e + r[0].length) : -1
  }

  function Rg(t, n, e) {
    var r = wg.exec(n.slice(e, e + 2));
    return r ? (t.V = +r[0], e + r[0].length) : -1
  }

  function Og(t, n, e) {
    var r = wg.exec(n.slice(e, e + 2));
    return r ? (t.W = +r[0], e + r[0].length) : -1
  }

  function zg(t, n, e) {
    var r = wg.exec(n.slice(e, e + 4));
    return r ? (t.y = +r[0], e + r[0].length) : -1
  }

  function Lg(t, n, e) {
    var r = wg.exec(n.slice(e, e + 2));
    return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
  }

  function Ug(t, n, e) {
    var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
    return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
  }

  function jg(t, n, e) {
    var r = wg.exec(n.slice(e, e + 2));
    return r ? (t.m = r[0] - 1, e + r[0].length) : -1
  }

  function Dg(t, n, e) {
    var r = wg.exec(n.slice(e, e + 2));
    return r ? (t.d = +r[0], e + r[0].length) : -1
  }

  function qg(t, n, e) {
    var r = wg.exec(n.slice(e, e + 3));
    return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
  }

  function Bg(t, n, e) {
    var r = wg.exec(n.slice(e, e + 2));
    return r ? (t.H = +r[0], e + r[0].length) : -1
  }

  function Ig(t, n, e) {
    var r = wg.exec(n.slice(e, e + 2));
    return r ? (t.M = +r[0], e + r[0].length) : -1
  }

  function Fg(t, n, e) {
    var r = wg.exec(n.slice(e, e + 2));
    return r ? (t.S = +r[0], e + r[0].length) : -1
  }

  function Yg(t, n, e) {
    var r = wg.exec(n.slice(e, e + 3));
    return r ? (t.L = +r[0], e + r[0].length) : -1
  }

  function Hg(t, n, e) {
    var r = wg.exec(n.slice(e, e + 6));
    return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
  }

  function Vg(t, n, e) {
    var r = Mg.exec(n.slice(e, e + 1));
    return r ? e + r[0].length : -1
  }

  function Xg(t, n, e) {
    var r = wg.exec(n.slice(e));
    return r ? (t.Q = +r[0], e + r[0].length) : -1
  }

  function Gg(t, n, e) {
    var r = wg.exec(n.slice(e));
    return r ? (t.Q = 1e3 * +r[0], e + r[0].length) : -1
  }

  function $g(t, n) {
    return Tg(t.getDate(), n, 2)
  }

  function Wg(t, n) {
    return Tg(t.getHours(), n, 2)
  }

  function Zg(t, n) {
    return Tg(t.getHours() % 12 || 12, n, 2)
  }

  function Qg(t, n) {
    return Tg(1 + dy.count(zy(t), t), n, 3)
  }

  function Jg(t, n) {
    return Tg(t.getMilliseconds(), n, 3)
  }

  function Kg(t, n) {
    return Jg(t, n) + "000"
  }

  function tb(t, n) {
    return Tg(t.getMonth() + 1, n, 2)
  }

  function nb(t, n) {
    return Tg(t.getMinutes(), n, 2)
  }

  function eb(t, n) {
    return Tg(t.getSeconds(), n, 2)
  }

  function rb(t) {
    var n = t.getDay();
    return 0 === n ? 7 : n
  }

  function ib(t, n) {
    return Tg(yy.count(zy(t), t), n, 2)
  }

  function ob(t, n) {
    var e = t.getDay();
    return t = e >= 4 || 0 === e ? _y(t) : _y.ceil(t), Tg(_y.count(zy(t), t) + (4 === zy(t).getDay()), n, 2)
  }

  function ub(t) {
    return t.getDay()
  }

  function ab(t, n) {
    return Tg(gy.count(zy(t), t), n, 2)
  }

  function cb(t, n) {
    return Tg(t.getFullYear() % 100, n, 2)
  }

  function fb(t, n) {
    return Tg(t.getFullYear() % 1e4, n, 4)
  }

  function sb(t) {
    var n = t.getTimezoneOffset();
    return (n > 0 ? "-" : (n *= -1, "+")) + Tg(n / 60 | 0, "0", 2) + Tg(n % 60, "0", 2)
  }

  function lb(t, n) {
    return Tg(t.getUTCDate(), n, 2)
  }

  function hb(t, n) {
    return Tg(t.getUTCHours(), n, 2)
  }

  function db(t, n) {
    return Tg(t.getUTCHours() % 12 || 12, n, 2)
  }

  function pb(t, n) {
    return Tg(1 + Yy.count(sg(t), t), n, 3)
  }

  function vb(t, n) {
    return Tg(t.getUTCMilliseconds(), n, 3)
  }

  function yb(t, n) {
    return vb(t, n) + "000"
  }

  function gb(t, n) {
    return Tg(t.getUTCMonth() + 1, n, 2)
  }

  function bb(t, n) {
    return Tg(t.getUTCMinutes(), n, 2)
  }

  function mb(t, n) {
    return Tg(t.getUTCSeconds(), n, 2)
  }

  function _b(t) {
    var n = t.getUTCDay();
    return 0 === n ? 7 : n
  }

  function xb(t, n) {
    return Tg(Xy.count(sg(t), t), n, 2)
  }

  function wb(t, n) {
    var e = t.getUTCDay();
    return t = e >= 4 || 0 === e ? Zy(t) : Zy.ceil(t), Tg(Zy.count(sg(t), t) + (4 === sg(t).getUTCDay()), n, 2)
  }

  function Mb(t) {
    return t.getUTCDay()
  }

  function Sb(t, n) {
    return Tg(Gy.count(sg(t), t), n, 2)
  }

  function Tb(t, n) {
    return Tg(t.getUTCFullYear() % 100, n, 2)
  }

  function Ab(t, n) {
    return Tg(t.getUTCFullYear() % 1e4, n, 4)
  }

  function kb() {
    return "+0000"
  }

  function Eb() {
    return "%"
  }

  function Nb(t) {
    return +t
  }

  function Cb(t) {
    return Math.floor(+t / 1e3)
  }

  function Pb(t) {
    return yg = vg(t), gg = yg.format, bg = yg.parse, mg = yg.utcFormat, _g = yg.utcParse, yg
  }

  Pb({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  });
  var Rb = Date.prototype.toISOString ? function (t) {
    return t.toISOString()
  } : mg("%Y-%m-%dT%H:%M:%S.%LZ");
  var Ob = +new Date("2000-01-01T00:00:00.000Z") ? function (t) {
      var n = new Date(t);
      return isNaN(n) ? null : n
    } : _g("%Y-%m-%dT%H:%M:%S.%LZ"), zb = 1e3, Lb = 60 * zb, Ub = 60 * Lb, jb = 24 * Ub, Db = 7 * jb, qb = 30 * jb,
    Bb = 365 * jb;

  function Ib(t) {
    return new Date(t)
  }

  function Fb(t) {
    return t instanceof Date ? +t : +new Date(+t)
  }

  function Yb(t, n, e, r, o, u, a, c, f) {
    var s = wv(vv, vv), l = s.invert, h = s.domain, d = f(".%L"), p = f(":%S"), v = f("%I:%M"), y = f("%I %p"),
      g = f("%a %d"), b = f("%b %d"), m = f("%B"), _ = f("%Y"),
      x = [[a, 1, zb], [a, 5, 5 * zb], [a, 15, 15 * zb], [a, 30, 30 * zb], [u, 1, Lb], [u, 5, 5 * Lb], [u, 15, 15 * Lb], [u, 30, 30 * Lb], [o, 1, Ub], [o, 3, 3 * Ub], [o, 6, 6 * Ub], [o, 12, 12 * Ub], [r, 1, jb], [r, 2, 2 * jb], [e, 1, Db], [n, 1, qb], [n, 3, 3 * qb], [t, 1, Bb]];

    function w(i) {
      return (a(i) < i ? d : u(i) < i ? p : o(i) < i ? v : r(i) < i ? y : n(i) < i ? e(i) < i ? g : b : t(i) < i ? m : _)(i)
    }

    function M(n, e, r, o) {
      if (null == n && (n = 10), "number" == typeof n) {
        var u = Math.abs(r - e) / n, a = i(function (t) {
          return t[2]
        }).right(x, u);
        a === x.length ? (o = E(e / Bb, r / Bb, n), n = t) : a ? (o = (a = x[u / x[a - 1][2] < x[a][2] / u ? a - 1 : a])[1], n = a[0]) : (o = Math.max(E(e, r, n), 1), n = c)
      }
      return null == o ? n : n.every(o)
    }

    return s.invert = function (t) {
      return new Date(l(t))
    }, s.domain = function (t) {
      return arguments.length ? h(uv.call(t, Fb)) : h().map(Ib)
    }, s.ticks = function (t, n) {
      var e, r = h(), i = r[0], o = r[r.length - 1], u = o < i;
      return u && (e = i, i = o, o = e), e = (e = M(t, i, o, n)) ? e.range(i, o + 1) : [], u ? e.reverse() : e
    }, s.tickFormat = function (t, n) {
      return null == n ? w : f(n)
    }, s.nice = function (t, n) {
      var e = h();
      return (t = M(t, e[0], e[e.length - 1], n)) ? h(kv(e, t)) : s
    }, s.copy = function () {
      return _v(s, Yb(t, n, e, r, o, u, a, c, f))
    }, s
  }

  var Hb = function () {
    return rv.apply(Yb(zy, Py, yy, dy, sy, ay, iy, Kv, gg).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
  }, Vb = function () {
    return rv.apply(Yb(sg, ag, Xy, Yy, By, jy, iy, Kv, mg).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
  };

  function Xb() {
    var t, n, e, r, i, o = 0, u = 1, a = vv, c = !1;

    function f(n) {
      return isNaN(n = +n) ? i : a(0 === e ? .5 : (n = (r(n) - t) * e, c ? Math.max(0, Math.min(1, n)) : n))
    }

    return f.domain = function (i) {
      return arguments.length ? (t = r(o = +i[0]), n = r(u = +i[1]), e = t === n ? 0 : 1 / (n - t), f) : [o, u]
    }, f.clamp = function (t) {
      return arguments.length ? (c = !!t, f) : c
    }, f.interpolator = function (t) {
      return arguments.length ? (a = t, f) : a
    }, f.unknown = function (t) {
      return arguments.length ? (i = t, f) : i
    }, function (i) {
      return r = i, t = i(o), n = i(u), e = t === n ? 0 : 1 / (n - t), f
    }
  }

  function Gb(t, n) {
    return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())
  }

  function $b() {
    var t = Sv(Xb()(vv));
    return t.copy = function () {
      return Gb(t, $b())
    }, iv.apply(t, arguments)
  }

  function Wb() {
    var t = zv(Xb()).domain([1, 10]);
    return t.copy = function () {
      return Gb(t, Wb()).base(t.base())
    }, iv.apply(t, arguments)
  }

  function Zb() {
    var t = Dv(Xb());
    return t.copy = function () {
      return Gb(t, Zb()).constant(t.constant())
    }, iv.apply(t, arguments)
  }

  function Qb() {
    var t = Yv(Xb());
    return t.copy = function () {
      return Gb(t, Qb()).exponent(t.exponent())
    }, iv.apply(t, arguments)
  }

  function Jb() {
    return Qb.apply(null, arguments).exponent(.5)
  }

  function Kb() {
    var t = [], n = vv;

    function e(e) {
      if (!isNaN(e = +e)) return n((c(t, e) - 1) / (t.length - 1))
    }

    return e.domain = function (n) {
      if (!arguments.length) return t.slice();
      t = [];
      for (var i, o = 0, u = n.length; o < u; ++o) null == (i = n[o]) || isNaN(i = +i) || t.push(i);
      return t.sort(r), e
    }, e.interpolator = function (t) {
      return arguments.length ? (n = t, e) : n
    }, e.copy = function () {
      return Kb(n).domain(t)
    }, iv.apply(e, arguments)
  }

  function tm() {
    var t, n, e, r, i, o, u, a = 0, c = .5, f = 1, s = vv, l = !1;

    function h(t) {
      return isNaN(t = +t) ? u : (t = .5 + ((t = +o(t)) - n) * (t < n ? r : i), s(l ? Math.max(0, Math.min(1, t)) : t))
    }

    return h.domain = function (u) {
      return arguments.length ? (t = o(a = +u[0]), n = o(c = +u[1]), e = o(f = +u[2]), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), h) : [a, c, f]
    }, h.clamp = function (t) {
      return arguments.length ? (l = !!t, h) : l
    }, h.interpolator = function (t) {
      return arguments.length ? (s = t, h) : s
    }, h.unknown = function (t) {
      return arguments.length ? (u = t, h) : u
    }, function (u) {
      return o = u, t = u(a), n = u(c), e = u(f), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), h
    }
  }

  function nm() {
    var t = Sv(tm()(vv));
    return t.copy = function () {
      return Gb(t, nm())
    }, iv.apply(t, arguments)
  }

  function em() {
    var t = zv(tm()).domain([.1, 1, 10]);
    return t.copy = function () {
      return Gb(t, em()).base(t.base())
    }, iv.apply(t, arguments)
  }

  function rm() {
    var t = Dv(tm());
    return t.copy = function () {
      return Gb(t, rm()).constant(t.constant())
    }, iv.apply(t, arguments)
  }

  function im() {
    var t = Yv(tm());
    return t.copy = function () {
      return Gb(t, im()).exponent(t.exponent())
    }, iv.apply(t, arguments)
  }

  function om() {
    return im.apply(null, arguments).exponent(.5)
  }

  var um = function (t) {
      for (var n = t.length / 6 | 0, e = new Array(n), r = 0; r < n;) e[r] = "#" + t.slice(6 * r, 6 * ++r);
      return e
    }, am = um("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
    cm = um("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
    fm = um("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
    sm = um("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
    lm = um("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
    hm = um("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
    dm = um("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
    pm = um("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
    vm = um("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), ym = function (t) {
      return rr(t[t.length - 1])
    },
    gm = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(um),
    bm = ym(gm),
    mm = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(um),
    _m = ym(mm),
    xm = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(um),
    wm = ym(xm),
    Mm = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(um),
    Sm = ym(Mm),
    Tm = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(um),
    Am = ym(Tm),
    km = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(um),
    Em = ym(km),
    Nm = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(um),
    Cm = ym(Nm),
    Pm = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(um),
    Rm = ym(Pm),
    Om = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(um),
    zm = ym(Om),
    Lm = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(um),
    Um = ym(Lm),
    jm = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(um),
    Dm = ym(jm),
    qm = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(um),
    Bm = ym(qm),
    Im = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(um),
    Fm = ym(Im),
    Ym = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(um),
    Hm = ym(Ym),
    Vm = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(um),
    Xm = ym(Vm),
    Gm = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(um),
    $m = ym(Gm),
    Wm = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(um),
    Zm = ym(Wm),
    Qm = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(um),
    Jm = ym(Qm),
    Km = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(um),
    t_ = ym(Km),
    n_ = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(um),
    e_ = ym(n_),
    r_ = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(um),
    i_ = ym(r_),
    o_ = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(um),
    u_ = ym(o_),
    a_ = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(um),
    c_ = ym(a_),
    f_ = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(um),
    s_ = ym(f_),
    l_ = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(um),
    h_ = ym(l_),
    d_ = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(um),
    p_ = ym(d_),
    v_ = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(um),
    y_ = ym(v_), g_ = Dr(Ve(300, .5, 0), Ve(-240, .5, 1)), b_ = Dr(Ve(-100, .75, .35), Ve(80, 1.5, .8)),
    m_ = Dr(Ve(260, .75, .35), Ve(80, 1.5, .8)), __ = Ve(), x_ = function (t) {
      (t < 0 || t > 1) && (t -= Math.floor(t));
      var n = Math.abs(t - .5);
      return __.h = 360 * t - 100, __.s = 1.5 - 1.5 * n, __.l = .8 - .9 * n, __ + ""
    }, w_ = se(), M_ = Math.PI / 3, S_ = 2 * Math.PI / 3, T_ = function (t) {
      var n;
      return t = (.5 - t) * Math.PI, w_.r = 255 * (n = Math.sin(t)) * n, w_.g = 255 * (n = Math.sin(t + M_)) * n, w_.b = 255 * (n = Math.sin(t + S_)) * n, w_ + ""
    };

  function A_(t) {
    var n = t.length;
    return function (e) {
      return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
    }
  }

  var k_ = A_(um("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
    E_ = A_(um("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
    N_ = A_(um("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
    C_ = A_(um("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
    P_ = function (t) {
      return function () {
        return t
      }
    }, R_ = Math.abs, O_ = Math.atan2, z_ = Math.cos, L_ = Math.max, U_ = Math.min, j_ = Math.sin, D_ = Math.sqrt,
    q_ = 1e-12, B_ = Math.PI, I_ = B_ / 2, F_ = 2 * B_;

  function Y_(t) {
    return t >= 1 ? I_ : t <= -1 ? -I_ : Math.asin(t)
  }

  function H_(t) {
    return t.innerRadius
  }

  function V_(t) {
    return t.outerRadius
  }

  function X_(t) {
    return t.startAngle
  }

  function G_(t) {
    return t.endAngle
  }

  function $_(t) {
    return t && t.padAngle
  }

  function W_(t, n, e, r, i, o, u) {
    var a = t - e, c = n - r, f = (u ? o : -o) / D_(a * a + c * c), s = f * c, l = -f * a, h = t + s, d = n + l,
      p = e + s, v = r + l, y = (h + p) / 2, g = (d + v) / 2, b = p - h, m = v - d, _ = b * b + m * m, x = i - o,
      w = h * v - p * d, M = (m < 0 ? -1 : 1) * D_(L_(0, x * x * _ - w * w)), S = (w * m - b * M) / _,
      T = (-w * b - m * M) / _, A = (w * m + b * M) / _, k = (-w * b + m * M) / _, E = S - y, N = T - g, C = A - y,
      P = k - g;
    return E * E + N * N > C * C + P * P && (S = A, T = k), {
      cx: S,
      cy: T,
      x01: -s,
      y01: -l,
      x11: S * (i / x - 1),
      y11: T * (i / x - 1)
    }
  }

  var Z_ = function () {
    var t = H_, n = V_, e = P_(0), r = null, i = X_, o = G_, u = $_, a = null;

    function c() {
      var c, f, s, l = +t.apply(this, arguments), h = +n.apply(this, arguments), d = i.apply(this, arguments) - I_,
        p = o.apply(this, arguments) - I_, v = R_(p - d), y = p > d;
      if (a || (a = c = xu()), h < l && (f = h, h = l, l = f), h > q_) if (v > F_ - q_) a.moveTo(h * z_(d), h * j_(d)), a.arc(0, 0, h, d, p, !y), l > q_ && (a.moveTo(l * z_(p), l * j_(p)), a.arc(0, 0, l, p, d, y)); else {
        var g, b, m = d, _ = p, x = d, w = p, M = v, S = v, T = u.apply(this, arguments) / 2,
          A = T > q_ && (r ? +r.apply(this, arguments) : D_(l * l + h * h)),
          k = U_(R_(h - l) / 2, +e.apply(this, arguments)), E = k, N = k;
        if (A > q_) {
          var C = Y_(A / l * j_(T)), P = Y_(A / h * j_(T));
          (M -= 2 * C) > q_ ? (x += C *= y ? 1 : -1, w -= C) : (M = 0, x = w = (d + p) / 2), (S -= 2 * P) > q_ ? (m += P *= y ? 1 : -1, _ -= P) : (S = 0, m = _ = (d + p) / 2)
        }
        var R = h * z_(m), O = h * j_(m), z = l * z_(w), L = l * j_(w);
        if (k > q_) {
          var U, j = h * z_(_), D = h * j_(_), q = l * z_(x), B = l * j_(x);
          if (v < B_ && (U = function (t, n, e, r, i, o, u, a) {
            var c = e - t, f = r - n, s = u - i, l = a - o, h = l * c - s * f;
            if (!(h * h < q_)) return [t + (h = (s * (n - o) - l * (t - i)) / h) * c, n + h * f]
          }(R, O, q, B, j, D, z, L))) {
            var I = R - U[0], F = O - U[1], Y = j - U[0], H = D - U[1],
              V = 1 / j_(((s = (I * Y + F * H) / (D_(I * I + F * F) * D_(Y * Y + H * H))) > 1 ? 0 : s < -1 ? B_ : Math.acos(s)) / 2),
              X = D_(U[0] * U[0] + U[1] * U[1]);
            E = U_(k, (l - X) / (V - 1)), N = U_(k, (h - X) / (V + 1))
          }
        }
        S > q_ ? N > q_ ? (g = W_(q, B, R, O, h, N, y), b = W_(j, D, z, L, h, N, y), a.moveTo(g.cx + g.x01, g.cy + g.y01), N < k ? a.arc(g.cx, g.cy, N, O_(g.y01, g.x01), O_(b.y01, b.x01), !y) : (a.arc(g.cx, g.cy, N, O_(g.y01, g.x01), O_(g.y11, g.x11), !y), a.arc(0, 0, h, O_(g.cy + g.y11, g.cx + g.x11), O_(b.cy + b.y11, b.cx + b.x11), !y), a.arc(b.cx, b.cy, N, O_(b.y11, b.x11), O_(b.y01, b.x01), !y))) : (a.moveTo(R, O), a.arc(0, 0, h, m, _, !y)) : a.moveTo(R, O), l > q_ && M > q_ ? E > q_ ? (g = W_(z, L, j, D, l, -E, y), b = W_(R, O, q, B, l, -E, y), a.lineTo(g.cx + g.x01, g.cy + g.y01), E < k ? a.arc(g.cx, g.cy, E, O_(g.y01, g.x01), O_(b.y01, b.x01), !y) : (a.arc(g.cx, g.cy, E, O_(g.y01, g.x01), O_(g.y11, g.x11), !y), a.arc(0, 0, l, O_(g.cy + g.y11, g.cx + g.x11), O_(b.cy + b.y11, b.cx + b.x11), y), a.arc(b.cx, b.cy, E, O_(b.y11, b.x11), O_(b.y01, b.x01), !y))) : a.arc(0, 0, l, w, x, y) : a.lineTo(z, L)
      } else a.moveTo(0, 0);
      if (a.closePath(), c) return a = null, c + "" || null
    }

    return c.centroid = function () {
      var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
        r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - B_ / 2;
      return [z_(r) * e, j_(r) * e]
    }, c.innerRadius = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : P_(+n), c) : t
    }, c.outerRadius = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : P_(+t), c) : n
    }, c.cornerRadius = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : P_(+t), c) : e
    }, c.padRadius = function (t) {
      return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : P_(+t), c) : r
    }, c.startAngle = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : P_(+t), c) : i
    }, c.endAngle = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : P_(+t), c) : o
    }, c.padAngle = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : P_(+t), c) : u
    }, c.context = function (t) {
      return arguments.length ? (a = null == t ? null : t, c) : a
    }, c
  };

  function Q_(t) {
    this._context = t
  }

  Q_.prototype = {
    areaStart: function () {
      this._line = 0
    }, areaEnd: function () {
      this._line = NaN
    }, lineStart: function () {
      this._point = 0
    }, lineEnd: function () {
      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
    }, point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(t, n)
      }
    }
  };
  var J_ = function (t) {
    return new Q_(t)
  };

  function K_(t) {
    return t[0]
  }

  function tx(t) {
    return t[1]
  }

  var nx = function () {
    var t = K_, n = tx, e = P_(!0), r = null, i = J_, o = null;

    function u(u) {
      var a, c, f, s = u.length, l = !1;
      for (null == r && (o = i(f = xu())), a = 0; a <= s; ++a) !(a < s && e(c = u[a], a, u)) === l && ((l = !l) ? o.lineStart() : o.lineEnd()), l && o.point(+t(c, a, u), +n(c, a, u));
      if (f) return o = null, f + "" || null
    }

    return u.x = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : P_(+n), u) : t
    }, u.y = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : P_(+t), u) : n
    }, u.defined = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : P_(!!t), u) : e
    }, u.curve = function (t) {
      return arguments.length ? (i = t, null != r && (o = i(r)), u) : i
    }, u.context = function (t) {
      return arguments.length ? (null == t ? r = o = null : o = i(r = t), u) : r
    }, u
  }, ex = function () {
    var t = K_, n = null, e = P_(0), r = tx, i = P_(!0), o = null, u = J_, a = null;

    function c(c) {
      var f, s, l, h, d, p = c.length, v = !1, y = new Array(p), g = new Array(p);
      for (null == o && (a = u(d = xu())), f = 0; f <= p; ++f) {
        if (!(f < p && i(h = c[f], f, c)) === v) if (v = !v) s = f, a.areaStart(), a.lineStart(); else {
          for (a.lineEnd(), a.lineStart(), l = f - 1; l >= s; --l) a.point(y[l], g[l]);
          a.lineEnd(), a.areaEnd()
        }
        v && (y[f] = +t(h, f, c), g[f] = +e(h, f, c), a.point(n ? +n(h, f, c) : y[f], r ? +r(h, f, c) : g[f]))
      }
      if (d) return a = null, d + "" || null
    }

    function f() {
      return nx().defined(i).curve(u).context(o)
    }

    return c.x = function (e) {
      return arguments.length ? (t = "function" == typeof e ? e : P_(+e), n = null, c) : t
    }, c.x0 = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : P_(+n), c) : t
    }, c.x1 = function (t) {
      return arguments.length ? (n = null == t ? null : "function" == typeof t ? t : P_(+t), c) : n
    }, c.y = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : P_(+t), r = null, c) : e
    }, c.y0 = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : P_(+t), c) : e
    }, c.y1 = function (t) {
      return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : P_(+t), c) : r
    }, c.lineX0 = c.lineY0 = function () {
      return f().x(t).y(e)
    }, c.lineY1 = function () {
      return f().x(t).y(r)
    }, c.lineX1 = function () {
      return f().x(n).y(e)
    }, c.defined = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : P_(!!t), c) : i
    }, c.curve = function (t) {
      return arguments.length ? (u = t, null != o && (a = u(o)), c) : u
    }, c.context = function (t) {
      return arguments.length ? (null == t ? o = a = null : a = u(o = t), c) : o
    }, c
  }, rx = function (t, n) {
    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
  }, ix = function (t) {
    return t
  }, ox = function () {
    var t = ix, n = rx, e = null, r = P_(0), i = P_(F_), o = P_(0);

    function u(u) {
      var a, c, f, s, l, h = u.length, d = 0, p = new Array(h), v = new Array(h), y = +r.apply(this, arguments),
        g = Math.min(F_, Math.max(-F_, i.apply(this, arguments) - y)),
        b = Math.min(Math.abs(g) / h, o.apply(this, arguments)), m = b * (g < 0 ? -1 : 1);
      for (a = 0; a < h; ++a) (l = v[p[a] = a] = +t(u[a], a, u)) > 0 && (d += l);
      for (null != n ? p.sort(function (t, e) {
        return n(v[t], v[e])
      }) : null != e && p.sort(function (t, n) {
        return e(u[t], u[n])
      }), a = 0, f = d ? (g - h * m) / d : 0; a < h; ++a, y = s) c = p[a], s = y + ((l = v[c]) > 0 ? l * f : 0) + m, v[c] = {
        data: u[c],
        index: a,
        value: l,
        startAngle: y,
        endAngle: s,
        padAngle: b
      };
      return v
    }

    return u.value = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : P_(+n), u) : t
    }, u.sortValues = function (t) {
      return arguments.length ? (n = t, e = null, u) : n
    }, u.sort = function (t) {
      return arguments.length ? (e = t, n = null, u) : e
    }, u.startAngle = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : P_(+t), u) : r
    }, u.endAngle = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : P_(+t), u) : i
    }, u.padAngle = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : P_(+t), u) : o
    }, u
  }, ux = cx(J_);

  function ax(t) {
    this._curve = t
  }

  function cx(t) {
    function n(n) {
      return new ax(t(n))
    }

    return n._curve = t, n
  }

  function fx(t) {
    var n = t.curve;
    return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
      return arguments.length ? n(cx(t)) : n()._curve
    }, t
  }

  ax.prototype = {
    areaStart: function () {
      this._curve.areaStart()
    }, areaEnd: function () {
      this._curve.areaEnd()
    }, lineStart: function () {
      this._curve.lineStart()
    }, lineEnd: function () {
      this._curve.lineEnd()
    }, point: function (t, n) {
      this._curve.point(n * Math.sin(t), n * -Math.cos(t))
    }
  };
  var sx = function () {
    return fx(nx().curve(ux))
  }, lx = function () {
    var t = ex().curve(ux), n = t.curve, e = t.lineX0, r = t.lineX1, i = t.lineY0, o = t.lineY1;
    return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
      return fx(e())
    }, delete t.lineX0, t.lineEndAngle = function () {
      return fx(r())
    }, delete t.lineX1, t.lineInnerRadius = function () {
      return fx(i())
    }, delete t.lineY0, t.lineOuterRadius = function () {
      return fx(o())
    }, delete t.lineY1, t.curve = function (t) {
      return arguments.length ? n(cx(t)) : n()._curve
    }, t
  }, hx = function (t, n) {
    return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
  }, dx = Array.prototype.slice;

  function px(t) {
    return t.source
  }

  function vx(t) {
    return t.target
  }

  function yx(t) {
    var n = px, e = vx, r = K_, i = tx, o = null;

    function u() {
      var u, a = dx.call(arguments), c = n.apply(this, a), f = e.apply(this, a);
      if (o || (o = u = xu()), t(o, +r.apply(this, (a[0] = c, a)), +i.apply(this, a), +r.apply(this, (a[0] = f, a)), +i.apply(this, a)), u) return o = null, u + "" || null
    }

    return u.source = function (t) {
      return arguments.length ? (n = t, u) : n
    }, u.target = function (t) {
      return arguments.length ? (e = t, u) : e
    }, u.x = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : P_(+t), u) : r
    }, u.y = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : P_(+t), u) : i
    }, u.context = function (t) {
      return arguments.length ? (o = null == t ? null : t, u) : o
    }, u
  }

  function gx(t, n, e, r, i) {
    t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i)
  }

  function bx(t, n, e, r, i) {
    t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i)
  }

  function mx(t, n, e, r, i) {
    var o = hx(n, e), u = hx(n, e = (e + i) / 2), a = hx(r, e), c = hx(r, i);
    t.moveTo(o[0], o[1]), t.bezierCurveTo(u[0], u[1], a[0], a[1], c[0], c[1])
  }

  function _x() {
    return yx(gx)
  }

  function xx() {
    return yx(bx)
  }

  function wx() {
    var t = yx(mx);
    return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t
  }

  var Mx = {
    draw: function (t, n) {
      var e = Math.sqrt(n / B_);
      t.moveTo(e, 0), t.arc(0, 0, e, 0, F_)
    }
  }, Sx = {
    draw: function (t, n) {
      var e = Math.sqrt(n / 5) / 2;
      t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
    }
  }, Tx = Math.sqrt(1 / 3), Ax = 2 * Tx, kx = {
    draw: function (t, n) {
      var e = Math.sqrt(n / Ax), r = e * Tx;
      t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
    }
  }, Ex = Math.sin(B_ / 10) / Math.sin(7 * B_ / 10), Nx = Math.sin(F_ / 10) * Ex, Cx = -Math.cos(F_ / 10) * Ex, Px = {
    draw: function (t, n) {
      var e = Math.sqrt(.8908130915292852 * n), r = Nx * e, i = Cx * e;
      t.moveTo(0, -e), t.lineTo(r, i);
      for (var o = 1; o < 5; ++o) {
        var u = F_ * o / 5, a = Math.cos(u), c = Math.sin(u);
        t.lineTo(c * e, -a * e), t.lineTo(a * r - c * i, c * r + a * i)
      }
      t.closePath()
    }
  }, Rx = {
    draw: function (t, n) {
      var e = Math.sqrt(n), r = -e / 2;
      t.rect(r, r, e, e)
    }
  }, Ox = Math.sqrt(3), zx = {
    draw: function (t, n) {
      var e = -Math.sqrt(n / (3 * Ox));
      t.moveTo(0, 2 * e), t.lineTo(-Ox * e, -e), t.lineTo(Ox * e, -e), t.closePath()
    }
  }, Lx = Math.sqrt(3) / 2, Ux = 1 / Math.sqrt(12), jx = 3 * (Ux / 2 + 1), Dx = {
    draw: function (t, n) {
      var e = Math.sqrt(n / jx), r = e / 2, i = e * Ux, o = r, u = e * Ux + e, a = -o, c = u;
      t.moveTo(r, i), t.lineTo(o, u), t.lineTo(a, c), t.lineTo(-.5 * r - Lx * i, Lx * r + -.5 * i), t.lineTo(-.5 * o - Lx * u, Lx * o + -.5 * u), t.lineTo(-.5 * a - Lx * c, Lx * a + -.5 * c), t.lineTo(-.5 * r + Lx * i, -.5 * i - Lx * r), t.lineTo(-.5 * o + Lx * u, -.5 * u - Lx * o), t.lineTo(-.5 * a + Lx * c, -.5 * c - Lx * a), t.closePath()
    }
  }, qx = [Mx, Sx, kx, Rx, Px, zx, Dx], Bx = function () {
    var t = P_(Mx), n = P_(64), e = null;

    function r() {
      var r;
      if (e || (e = r = xu()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), r) return e = null, r + "" || null
    }

    return r.type = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : P_(n), r) : t
    }, r.size = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : P_(+t), r) : n
    }, r.context = function (t) {
      return arguments.length ? (e = null == t ? null : t, r) : e
    }, r
  }, Ix = function () {
  };

  function Fx(t, n, e) {
    t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
  }

  function Yx(t) {
    this._context = t
  }

  Yx.prototype = {
    areaStart: function () {
      this._line = 0
    }, areaEnd: function () {
      this._line = NaN
    }, lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
    }, lineEnd: function () {
      switch (this._point) {
        case 3:
          Fx(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1)
      }
      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
    }, point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
        default:
          Fx(this, t, n)
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
    }
  };
  var Hx = function (t) {
    return new Yx(t)
  };

  function Vx(t) {
    this._context = t
  }

  Vx.prototype = {
    areaStart: Ix, areaEnd: Ix, lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
    }, lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x2, this._y2), this._context.closePath();
          break;
        case 2:
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
          break;
        case 3:
          this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
      }
    }, point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._x2 = t, this._y2 = n;
          break;
        case 1:
          this._point = 2, this._x3 = t, this._y3 = n;
          break;
        case 2:
          this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
          break;
        default:
          Fx(this, t, n)
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
    }
  };
  var Xx = function (t) {
    return new Vx(t)
  };

  function Gx(t) {
    this._context = t
  }

  Gx.prototype = {
    areaStart: function () {
      this._line = 0
    }, areaEnd: function () {
      this._line = NaN
    }, lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
    }, lineEnd: function () {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
    }, point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var e = (this._x0 + 4 * this._x1 + t) / 6, r = (this._y0 + 4 * this._y1 + n) / 6;
          this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
          break;
        case 3:
          this._point = 4;
        default:
          Fx(this, t, n)
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
    }
  };
  var $x = function (t) {
    return new Gx(t)
  };

  function Wx(t, n) {
    this._basis = new Yx(t), this._beta = n
  }

  Wx.prototype = {
    lineStart: function () {
      this._x = [], this._y = [], this._basis.lineStart()
    }, lineEnd: function () {
      var t = this._x, n = this._y, e = t.length - 1;
      if (e > 0) for (var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, c = -1; ++c <= e;) r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * u), this._beta * n[c] + (1 - this._beta) * (o + r * a));
      this._x = this._y = null, this._basis.lineEnd()
    }, point: function (t, n) {
      this._x.push(+t), this._y.push(+n)
    }
  };
  var Zx = function t(n) {
    function e(t) {
      return 1 === n ? new Yx(t) : new Wx(t, n)
    }

    return e.beta = function (n) {
      return t(+n)
    }, e
  }(.85);

  function Qx(t, n, e) {
    t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
  }

  function Jx(t, n) {
    this._context = t, this._k = (1 - n) / 6
  }

  Jx.prototype = {
    areaStart: function () {
      this._line = 0
    }, areaEnd: function () {
      this._line = NaN
    }, lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
    }, lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          Qx(this, this._x1, this._y1)
      }
      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
    }, point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2, this._x1 = t, this._y1 = n;
          break;
        case 2:
          this._point = 3;
        default:
          Qx(this, t, n)
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
    }
  };
  var Kx = function t(n) {
    function e(t) {
      return new Jx(t, n)
    }

    return e.tension = function (n) {
      return t(+n)
    }, e
  }(0);

  function tw(t, n) {
    this._context = t, this._k = (1 - n) / 6
  }

  tw.prototype = {
    areaStart: Ix, areaEnd: Ix, lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
    }, lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;
        case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;
        case 3:
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
      }
    }, point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._x3 = t, this._y3 = n;
          break;
        case 1:
          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
          break;
        case 2:
          this._point = 3, this._x5 = t, this._y5 = n;
          break;
        default:
          Qx(this, t, n)
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
    }
  };
  var nw = function t(n) {
    function e(t) {
      return new tw(t, n)
    }

    return e.tension = function (n) {
      return t(+n)
    }, e
  }(0);

  function ew(t, n) {
    this._context = t, this._k = (1 - n) / 6
  }

  ew.prototype = {
    areaStart: function () {
      this._line = 0
    }, areaEnd: function () {
      this._line = NaN
    }, lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
    }, lineEnd: function () {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
    }, point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          Qx(this, t, n)
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
    }
  };
  var rw = function t(n) {
    function e(t) {
      return new ew(t, n)
    }

    return e.tension = function (n) {
      return t(+n)
    }, e
  }(0);

  function iw(t, n, e) {
    var r = t._x1, i = t._y1, o = t._x2, u = t._y2;
    if (t._l01_a > q_) {
      var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, c = 3 * t._l01_a * (t._l01_a + t._l12_a);
      r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
    }
    if (t._l23_a > q_) {
      var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, s = 3 * t._l23_a * (t._l23_a + t._l12_a);
      o = (o * f + t._x1 * t._l23_2a - n * t._l12_2a) / s, u = (u * f + t._y1 * t._l23_2a - e * t._l12_2a) / s
    }
    t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2)
  }

  function ow(t, n) {
    this._context = t, this._alpha = n
  }

  ow.prototype = {
    areaStart: function () {
      this._line = 0
    }, areaEnd: function () {
      this._line = NaN
    }, lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
    }, lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          this.point(this._x2, this._y2)
      }
      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
    }, point: function (t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t, r = this._y2 - n;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
      }
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
        default:
          iw(this, t, n)
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
    }
  };
  var uw = function t(n) {
    function e(t) {
      return n ? new ow(t, n) : new Jx(t, 0)
    }

    return e.alpha = function (n) {
      return t(+n)
    }, e
  }(.5);

  function aw(t, n) {
    this._context = t, this._alpha = n
  }

  aw.prototype = {
    areaStart: Ix, areaEnd: Ix, lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
    }, lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;
        case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;
        case 3:
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
      }
    }, point: function (t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t, r = this._y2 - n;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
      }
      switch (this._point) {
        case 0:
          this._point = 1, this._x3 = t, this._y3 = n;
          break;
        case 1:
          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
          break;
        case 2:
          this._point = 3, this._x5 = t, this._y5 = n;
          break;
        default:
          iw(this, t, n)
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
    }
  };
  var cw = function t(n) {
    function e(t) {
      return n ? new aw(t, n) : new tw(t, 0)
    }

    return e.alpha = function (n) {
      return t(+n)
    }, e
  }(.5);

  function fw(t, n) {
    this._context = t, this._alpha = n
  }

  fw.prototype = {
    areaStart: function () {
      this._line = 0
    }, areaEnd: function () {
      this._line = NaN
    }, lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
    }, lineEnd: function () {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
    }, point: function (t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t, r = this._y2 - n;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          iw(this, t, n)
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
    }
  };
  var sw = function t(n) {
    function e(t) {
      return n ? new fw(t, n) : new ew(t, 0)
    }

    return e.alpha = function (n) {
      return t(+n)
    }, e
  }(.5);

  function lw(t) {
    this._context = t
  }

  lw.prototype = {
    areaStart: Ix, areaEnd: Ix, lineStart: function () {
      this._point = 0
    }, lineEnd: function () {
      this._point && this._context.closePath()
    }, point: function (t, n) {
      t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
    }
  };
  var hw = function (t) {
    return new lw(t)
  };

  function dw(t) {
    return t < 0 ? -1 : 1
  }

  function pw(t, n, e) {
    var r = t._x1 - t._x0, i = n - t._x1, o = (t._y1 - t._y0) / (r || i < 0 && -0),
      u = (e - t._y1) / (i || r < 0 && -0), a = (o * i + u * r) / (r + i);
    return (dw(o) + dw(u)) * Math.min(Math.abs(o), Math.abs(u), .5 * Math.abs(a)) || 0
  }

  function vw(t, n) {
    var e = t._x1 - t._x0;
    return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
  }

  function yw(t, n, e) {
    var r = t._x0, i = t._y0, o = t._x1, u = t._y1, a = (o - r) / 3;
    t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u)
  }

  function gw(t) {
    this._context = t
  }

  function bw(t) {
    this._context = new mw(t)
  }

  function mw(t) {
    this._context = t
  }

  function _w(t) {
    return new gw(t)
  }

  function xw(t) {
    return new bw(t)
  }

  function ww(t) {
    this._context = t
  }

  function Mw(t) {
    var n, e, r = t.length - 1, i = new Array(r), o = new Array(r), u = new Array(r);
    for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, o[n] = 4, u[n] = 4 * t[n] + 2 * t[n + 1];
    for (i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / o[n - 1], o[n] -= e, u[n] -= e * u[n - 1];
    for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (u[n] - i[n + 1]) / o[n];
    for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
    return [i, o]
  }

  gw.prototype = {
    areaStart: function () {
      this._line = 0
    }, areaEnd: function () {
      this._line = NaN
    }, lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
    }, lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          yw(this, this._t0, vw(this, this._t0))
      }
      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
    }, point: function (t, n) {
      var e = NaN;
      if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, yw(this, vw(this, e = pw(this, t, n)), e);
            break;
          default:
            yw(this, this._t0, e = pw(this, t, n))
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
      }
    }
  }, (bw.prototype = Object.create(gw.prototype)).point = function (t, n) {
    gw.prototype.point.call(this, n, t)
  }, mw.prototype = {
    moveTo: function (t, n) {
      this._context.moveTo(n, t)
    }, closePath: function () {
      this._context.closePath()
    }, lineTo: function (t, n) {
      this._context.lineTo(n, t)
    }, bezierCurveTo: function (t, n, e, r, i, o) {
      this._context.bezierCurveTo(n, t, r, e, o, i)
    }
  }, ww.prototype = {
    areaStart: function () {
      this._line = 0
    }, areaEnd: function () {
      this._line = NaN
    }, lineStart: function () {
      this._x = [], this._y = []
    }, lineEnd: function () {
      var t = this._x, n = this._y, e = t.length;
      if (e) if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]); else for (var r = Mw(t), i = Mw(n), o = 0, u = 1; u < e; ++o, ++u) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[u], n[u]);
      (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
    }, point: function (t, n) {
      this._x.push(+t), this._y.push(+n)
    }
  };
  var Sw = function (t) {
    return new ww(t)
  };

  function Tw(t, n) {
    this._context = t, this._t = n
  }

  Tw.prototype = {
    areaStart: function () {
      this._line = 0
    }, areaEnd: function () {
      this._line = NaN
    }, lineStart: function () {
      this._x = this._y = NaN, this._point = 0
    }, lineEnd: function () {
      0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
    }, point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
        default:
          if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n); else {
            var e = this._x * (1 - this._t) + t * this._t;
            this._context.lineTo(e, this._y), this._context.lineTo(e, n)
          }
      }
      this._x = t, this._y = n
    }
  };
  var Aw = function (t) {
    return new Tw(t, .5)
  };

  function kw(t) {
    return new Tw(t, 0)
  }

  function Ew(t) {
    return new Tw(t, 1)
  }

  var Nw = function (t, n) {
    if ((i = t.length) > 1) for (var e, r, i, o = 1, u = t[n[0]], a = u.length; o < i; ++o) for (r = u, u = t[n[o]], e = 0; e < a; ++e) u[e][1] += u[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
  }, Cw = function (t) {
    for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;
    return e
  };

  function Pw(t, n) {
    return t[n]
  }

  var Rw = function () {
    var t = P_([]), n = Cw, e = Nw, r = Pw;

    function i(i) {
      var o, u, a = t.apply(this, arguments), c = i.length, f = a.length, s = new Array(f);
      for (o = 0; o < f; ++o) {
        for (var l, h = a[o], d = s[o] = new Array(c), p = 0; p < c; ++p) d[p] = l = [0, +r(i[p], h, p, i)], l.data = i[p];
        d.key = h
      }
      for (o = 0, u = n(s); o < f; ++o) s[u[o]].index = o;
      return e(s, u), s
    }

    return i.keys = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : P_(dx.call(n)), i) : t
    }, i.value = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : P_(+t), i) : r
    }, i.order = function (t) {
      return arguments.length ? (n = null == t ? Cw : "function" == typeof t ? t : P_(dx.call(t)), i) : n
    }, i.offset = function (t) {
      return arguments.length ? (e = null == t ? Nw : t, i) : e
    }, i
  }, Ow = function (t, n) {
    if ((r = t.length) > 0) {
      for (var e, r, i, o = 0, u = t[0].length; o < u; ++o) {
        for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
        if (i) for (e = 0; e < r; ++e) t[e][o][1] /= i
      }
      Nw(t, n)
    }
  }, zw = function (t, n) {
    if ((a = t.length) > 0) for (var e, r, i, o, u, a, c = 0, f = t[n[0]].length; c < f; ++c) for (o = u = 0, e = 0; e < a; ++e) (i = (r = t[n[e]][c])[1] - r[0]) >= 0 ? (r[0] = o, r[1] = o += i) : i < 0 ? (r[1] = u, r[0] = u += i) : r[0] = o
  }, Lw = function (t, n) {
    if ((e = t.length) > 0) {
      for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
        for (var u = 0, a = 0; u < e; ++u) a += t[u][r][1] || 0;
        i[r][1] += i[r][0] = -a / 2
      }
      Nw(t, n)
    }
  }, Uw = function (t, n) {
    if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
      for (var e, r, i, o = 0, u = 1; u < r; ++u) {
        for (var a = 0, c = 0, f = 0; a < i; ++a) {
          for (var s = t[n[a]], l = s[u][1] || 0, h = (l - (s[u - 1][1] || 0)) / 2, d = 0; d < a; ++d) {
            var p = t[n[d]];
            h += (p[u][1] || 0) - (p[u - 1][1] || 0)
          }
          c += l, f += h * l
        }
        e[u - 1][1] += e[u - 1][0] = o, c && (o -= f / c)
      }
      e[u - 1][1] += e[u - 1][0] = o, Nw(t, n)
    }
  }, jw = function (t) {
    var n = t.map(Dw);
    return Cw(t).sort(function (t, e) {
      return n[t] - n[e]
    })
  };

  function Dw(t) {
    for (var n, e = -1, r = 0, i = t.length, o = -1 / 0; ++e < i;) (n = +t[e][1]) > o && (o = n, r = e);
    return r
  }

  var qw = function (t) {
    var n = t.map(Bw);
    return Cw(t).sort(function (t, e) {
      return n[t] - n[e]
    })
  };

  function Bw(t) {
    for (var n, e = 0, r = -1, i = t.length; ++r < i;) (n = +t[r][1]) && (e += n);
    return e
  }

  var Iw = function (t) {
    return qw(t).reverse()
  }, Fw = function (t) {
    var n, e, r = t.length, i = t.map(Bw), o = jw(t), u = 0, a = 0, c = [], f = [];
    for (n = 0; n < r; ++n) e = o[n], u < a ? (u += i[e], c.push(e)) : (a += i[e], f.push(e));
    return f.reverse().concat(c)
  }, Yw = function (t) {
    return Cw(t).reverse()
  }, Hw = function (t) {
    return function () {
      return t
    }
  };

  function Vw(t) {
    return t[0]
  }

  function Xw(t) {
    return t[1]
  }

  function Gw() {
    this._ = null
  }

  function $w(t) {
    t.U = t.C = t.L = t.R = t.P = t.N = null
  }

  function Ww(t, n) {
    var e = n, r = n.R, i = e.U;
    i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
  }

  function Zw(t, n) {
    var e = n, r = n.L, i = e.U;
    i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
  }

  function Qw(t) {
    for (; t.L;) t = t.L;
    return t
  }

  Gw.prototype = {
    constructor: Gw, insert: function (t, n) {
      var e, r, i;
      if (t) {
        if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
          for (t = t.R; t.L;) t = t.L;
          t.L = n
        } else t.R = n;
        e = t
      } else this._ ? (t = Qw(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
      for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (Ww(this, e), e = (t = e).U), e.C = !1, r.C = !0, Zw(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (Zw(this, e), e = (t = e).U), e.C = !1, r.C = !0, Ww(this, r)), e = t.U;
      this._.C = !1
    }, remove: function (t) {
      t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
      var n, e, r, i = t.U, o = t.L, u = t.R;
      if (e = o ? u ? Qw(u) : o : u, i ? i.L === t ? i.L = e : i.R = e : this._ = e, o && u ? (r = e.C, e.C = t.C, e.L = o, o.U = e, e !== u ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = u, u.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) if (t && t.C) t.C = !1; else {
        do {
          if (t === this._) break;
          if (t === i.L) {
            if ((n = i.R).C && (n.C = !1, i.C = !0, Ww(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
              n.R && n.R.C || (n.L.C = !1, n.C = !0, Zw(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, Ww(this, i), t = this._;
              break
            }
          } else if ((n = i.L).C && (n.C = !1, i.C = !0, Zw(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
            n.L && n.L.C || (n.R.C = !1, n.C = !0, Ww(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, Zw(this, i), t = this._;
            break
          }
          n.C = !0, t = i, i = i.U
        } while (!t.C);
        t && (t.C = !1)
      }
    }
  };
  var Jw = Gw;

  function Kw(t, n, e, r) {
    var i = [null, null], o = MM.push(i) - 1;
    return i.left = t, i.right = n, e && nM(i, t, n, e), r && nM(i, n, t, r), xM[t.index].halfedges.push(o), xM[n.index].halfedges.push(o), i
  }

  function tM(t, n, e) {
    var r = [n, e];
    return r.left = t, r
  }

  function nM(t, n, e, r) {
    t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e)
  }

  function eM(t, n, e, r, i) {
    var o, u = t[0], a = t[1], c = u[0], f = u[1], s = 0, l = 1, h = a[0] - c, d = a[1] - f;
    if (o = n - c, h || !(o > 0)) {
      if (o /= h, h < 0) {
        if (o < s) return;
        o < l && (l = o)
      } else if (h > 0) {
        if (o > l) return;
        o > s && (s = o)
      }
      if (o = r - c, h || !(o < 0)) {
        if (o /= h, h < 0) {
          if (o > l) return;
          o > s && (s = o)
        } else if (h > 0) {
          if (o < s) return;
          o < l && (l = o)
        }
        if (o = e - f, d || !(o > 0)) {
          if (o /= d, d < 0) {
            if (o < s) return;
            o < l && (l = o)
          } else if (d > 0) {
            if (o > l) return;
            o > s && (s = o)
          }
          if (o = i - f, d || !(o < 0)) {
            if (o /= d, d < 0) {
              if (o > l) return;
              o > s && (s = o)
            } else if (d > 0) {
              if (o < s) return;
              o < l && (l = o)
            }
            return !(s > 0 || l < 1) || (s > 0 && (t[0] = [c + s * h, f + s * d]), l < 1 && (t[1] = [c + l * h, f + l * d]), !0)
          }
        }
      }
    }
  }

  function rM(t, n, e, r, i) {
    var o = t[1];
    if (o) return !0;
    var u, a, c = t[0], f = t.left, s = t.right, l = f[0], h = f[1], d = s[0], p = s[1], v = (l + d) / 2,
      y = (h + p) / 2;
    if (p === h) {
      if (v < n || v >= r) return;
      if (l > d) {
        if (c) {
          if (c[1] >= i) return
        } else c = [v, e];
        o = [v, i]
      } else {
        if (c) {
          if (c[1] < e) return
        } else c = [v, i];
        o = [v, e]
      }
    } else if (a = y - (u = (l - d) / (p - h)) * v, u < -1 || u > 1) if (l > d) {
      if (c) {
        if (c[1] >= i) return
      } else c = [(e - a) / u, e];
      o = [(i - a) / u, i]
    } else {
      if (c) {
        if (c[1] < e) return
      } else c = [(i - a) / u, i];
      o = [(e - a) / u, e]
    } else if (h < p) {
      if (c) {
        if (c[0] >= r) return
      } else c = [n, u * n + a];
      o = [r, u * r + a]
    } else {
      if (c) {
        if (c[0] < n) return
      } else c = [r, u * r + a];
      o = [n, u * n + a]
    }
    return t[0] = c, t[1] = o, !0
  }

  function iM(t, n) {
    var e = t.site, r = n.left, i = n.right;
    return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
  }

  function oM(t, n) {
    return n[+(n.left !== t.site)]
  }

  function uM(t, n) {
    return n[+(n.left === t.site)]
  }

  var aM, cM = [];

  function fM() {
    $w(this), this.x = this.y = this.arc = this.site = this.cy = null
  }

  function sM(t) {
    var n = t.P, e = t.N;
    if (n && e) {
      var r = n.site, i = t.site, o = e.site;
      if (r !== o) {
        var u = i[0], a = i[1], c = r[0] - u, f = r[1] - a, s = o[0] - u, l = o[1] - a, h = 2 * (c * l - f * s);
        if (!(h >= -TM)) {
          var d = c * c + f * f, p = s * s + l * l, v = (l * d - f * p) / h, y = (c * p - s * d) / h,
            g = cM.pop() || new fM;
          g.arc = t, g.site = i, g.x = v + u, g.y = (g.cy = y + a) + Math.sqrt(v * v + y * y), t.circle = g;
          for (var b = null, m = wM._; m;) if (g.y < m.y || g.y === m.y && g.x <= m.x) {
            if (!m.L) {
              b = m.P;
              break
            }
            m = m.L
          } else {
            if (!m.R) {
              b = m;
              break
            }
            m = m.R
          }
          wM.insert(b, g), b || (aM = g)
        }
      }
    }
  }

  function lM(t) {
    var n = t.circle;
    n && (n.P || (aM = n.N), wM.remove(n), cM.push(n), $w(n), t.circle = null)
  }

  var hM = [];

  function dM() {
    $w(this), this.edge = this.site = this.circle = null
  }

  function pM(t) {
    var n = hM.pop() || new dM;
    return n.site = t, n
  }

  function vM(t) {
    lM(t), _M.remove(t), hM.push(t), $w(t)
  }

  function yM(t) {
    var n = t.circle, e = n.x, r = n.cy, i = [e, r], o = t.P, u = t.N, a = [t];
    vM(t);
    for (var c = o; c.circle && Math.abs(e - c.circle.x) < SM && Math.abs(r - c.circle.cy) < SM;) o = c.P, a.unshift(c), vM(c), c = o;
    a.unshift(c), lM(c);
    for (var f = u; f.circle && Math.abs(e - f.circle.x) < SM && Math.abs(r - f.circle.cy) < SM;) u = f.N, a.push(f), vM(f), f = u;
    a.push(f), lM(f);
    var s, l = a.length;
    for (s = 1; s < l; ++s) f = a[s], c = a[s - 1], nM(f.edge, c.site, f.site, i);
    c = a[0], (f = a[l - 1]).edge = Kw(c.site, f.site, null, i), sM(c), sM(f)
  }

  function gM(t) {
    for (var n, e, r, i, o = t[0], u = t[1], a = _M._; a;) if ((r = bM(a, u) - o) > SM) a = a.L; else {
      if (!((i = o - mM(a, u)) > SM)) {
        r > -SM ? (n = a.P, e = a) : i > -SM ? (n = a, e = a.N) : n = e = a;
        break
      }
      if (!a.R) {
        n = a;
        break
      }
      a = a.R
    }
    !function (t) {
      xM[t.index] = {site: t, halfedges: []}
    }(t);
    var c = pM(t);
    if (_M.insert(n, c), n || e) {
      if (n === e) return lM(n), e = pM(n.site), _M.insert(c, e), c.edge = e.edge = Kw(n.site, c.site), sM(n), void sM(e);
      if (e) {
        lM(n), lM(e);
        var f = n.site, s = f[0], l = f[1], h = t[0] - s, d = t[1] - l, p = e.site, v = p[0] - s, y = p[1] - l,
          g = 2 * (h * y - d * v), b = h * h + d * d, m = v * v + y * y,
          _ = [(y * b - d * m) / g + s, (h * m - v * b) / g + l];
        nM(e.edge, f, p, _), c.edge = Kw(f, t, null, _), e.edge = Kw(t, p, null, _), sM(n), sM(e)
      } else c.edge = Kw(n.site, c.site)
    }
  }

  function bM(t, n) {
    var e = t.site, r = e[0], i = e[1], o = i - n;
    if (!o) return r;
    var u = t.P;
    if (!u) return -1 / 0;
    var a = (e = u.site)[0], c = e[1], f = c - n;
    if (!f) return a;
    var s = a - r, l = 1 / o - 1 / f, h = s / f;
    return l ? (-h + Math.sqrt(h * h - 2 * l * (s * s / (-2 * f) - c + f / 2 + i - o / 2))) / l + r : (r + a) / 2
  }

  function mM(t, n) {
    var e = t.N;
    if (e) return bM(e, n);
    var r = t.site;
    return r[1] === n ? r[0] : 1 / 0
  }

  var _M, xM, wM, MM, SM = 1e-6, TM = 1e-12;

  function AM(t, n) {
    return n[1] - t[1] || n[0] - t[0]
  }

  function kM(t, n) {
    var e, r, i, o = t.sort(AM).pop();
    for (MM = [], xM = new Array(t.length), _M = new Jw, wM = new Jw; ;) if (i = aM, o && (!i || o[1] < i.y || o[1] === i.y && o[0] < i.x)) o[0] === e && o[1] === r || (gM(o), e = o[0], r = o[1]), o = t.pop(); else {
      if (!i) break;
      yM(i.arc)
    }
    if (function () {
      for (var t, n, e, r, i = 0, o = xM.length; i < o; ++i) if ((t = xM[i]) && (r = (n = t.halfedges).length)) {
        var u = new Array(r), a = new Array(r);
        for (e = 0; e < r; ++e) u[e] = e, a[e] = iM(t, MM[n[e]]);
        for (u.sort(function (t, n) {
          return a[n] - a[t]
        }), e = 0; e < r; ++e) a[e] = n[u[e]];
        for (e = 0; e < r; ++e) n[e] = a[e]
      }
    }(), n) {
      var u = +n[0][0], a = +n[0][1], c = +n[1][0], f = +n[1][1];
      !function (t, n, e, r) {
        for (var i, o = MM.length; o--;) rM(i = MM[o], t, n, e, r) && eM(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > SM || Math.abs(i[0][1] - i[1][1]) > SM) || delete MM[o]
      }(u, a, c, f), function (t, n, e, r) {
        var i, o, u, a, c, f, s, l, h, d, p, v, y = xM.length, g = !0;
        for (i = 0; i < y; ++i) if (o = xM[i]) {
          for (u = o.site, a = (c = o.halfedges).length; a--;) MM[c[a]] || c.splice(a, 1);
          for (a = 0, f = c.length; a < f;) p = (d = uM(o, MM[c[a]]))[0], v = d[1], l = (s = oM(o, MM[c[++a % f]]))[0], h = s[1], (Math.abs(p - l) > SM || Math.abs(v - h) > SM) && (c.splice(a, 0, MM.push(tM(u, d, Math.abs(p - t) < SM && r - v > SM ? [t, Math.abs(l - t) < SM ? h : r] : Math.abs(v - r) < SM && e - p > SM ? [Math.abs(h - r) < SM ? l : e, r] : Math.abs(p - e) < SM && v - n > SM ? [e, Math.abs(l - e) < SM ? h : n] : Math.abs(v - n) < SM && p - t > SM ? [Math.abs(h - n) < SM ? l : t, n] : null)) - 1), ++f);
          f && (g = !1)
        }
        if (g) {
          var b, m, _, x = 1 / 0;
          for (i = 0, g = null; i < y; ++i) (o = xM[i]) && (_ = (b = (u = o.site)[0] - t) * b + (m = u[1] - n) * m) < x && (x = _, g = o);
          if (g) {
            var w = [t, n], M = [t, r], S = [e, r], T = [e, n];
            g.halfedges.push(MM.push(tM(u = g.site, w, M)) - 1, MM.push(tM(u, M, S)) - 1, MM.push(tM(u, S, T)) - 1, MM.push(tM(u, T, w)) - 1)
          }
        }
        for (i = 0; i < y; ++i) (o = xM[i]) && (o.halfedges.length || delete xM[i])
      }(u, a, c, f)
    }
    this.edges = MM, this.cells = xM, _M = wM = MM = xM = null
  }

  kM.prototype = {
    constructor: kM, polygons: function () {
      var t = this.edges;
      return this.cells.map(function (n) {
        var e = n.halfedges.map(function (e) {
          return oM(n, t[e])
        });
        return e.data = n.site.data, e
      })
    }, triangles: function () {
      var t = [], n = this.edges;
      return this.cells.forEach(function (e, r) {
        if (o = (i = e.halfedges).length) for (var i, o, u, a, c, f, s = e.site, l = -1, h = n[i[o - 1]], d = h.left === s ? h.right : h.left; ++l < o;) u = d, d = (h = n[i[l]]).left === s ? h.right : h.left, u && d && r < u.index && r < d.index && (c = u, f = d, ((a = s)[0] - f[0]) * (c[1] - a[1]) - (a[0] - c[0]) * (f[1] - a[1]) < 0) && t.push([s.data, u.data, d.data])
      }), t
    }, links: function () {
      return this.edges.filter(function (t) {
        return t.right
      }).map(function (t) {
        return {source: t.left.data, target: t.right.data}
      })
    }, find: function (t, n, e) {
      for (var r, i, o = this, u = o._found || 0, a = o.cells.length; !(i = o.cells[u]);) if (++u >= a) return null;
      var c = t - i.site[0], f = n - i.site[1], s = c * c + f * f;
      do {
        i = o.cells[r = u], u = null, i.halfedges.forEach(function (e) {
          var r = o.edges[e], a = r.left;
          if (a !== i.site && a || (a = r.right)) {
            var c = t - a[0], f = n - a[1], l = c * c + f * f;
            l < s && (s = l, u = a.index)
          }
        })
      } while (null !== u);
      return o._found = r, null == e || s <= e * e ? i.site : null
    }
  };
  var EM = function () {
    var t = Vw, n = Xw, e = null;

    function r(r) {
      return new kM(r.map(function (e, i) {
        var o = [Math.round(t(e, i, r) / SM) * SM, Math.round(n(e, i, r) / SM) * SM];
        return o.index = i, o.data = e, o
      }), e)
    }

    return r.polygons = function (t) {
      return r(t).polygons()
    }, r.links = function (t) {
      return r(t).links()
    }, r.triangles = function (t) {
      return r(t).triangles()
    }, r.x = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : Hw(+n), r) : t
    }, r.y = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : Hw(+t), r) : n
    }, r.extent = function (t) {
      return arguments.length ? (e = null == t ? null : [[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]], r) : e && [[e[0][0], e[0][1]], [e[1][0], e[1][1]]]
    }, r.size = function (t) {
      return arguments.length ? (e = null == t ? null : [[0, 0], [+t[0], +t[1]]], r) : e && [e[1][0] - e[0][0], e[1][1] - e[0][1]]
    }, r
  }, NM = function (t) {
    return function () {
      return t
    }
  };

  function CM(t, n, e) {
    this.target = t, this.type = n, this.transform = e
  }

  function PM(t, n, e) {
    this.k = t, this.x = n, this.y = e
  }

  PM.prototype = {
    constructor: PM, scale: function (t) {
      return 1 === t ? this : new PM(this.k * t, this.x, this.y)
    }, translate: function (t, n) {
      return 0 === t & 0 === n ? this : new PM(this.k, this.x + this.k * t, this.y + this.k * n)
    }, apply: function (t) {
      return [t[0] * this.k + this.x, t[1] * this.k + this.y]
    }, applyX: function (t) {
      return t * this.k + this.x
    }, applyY: function (t) {
      return t * this.k + this.y
    }, invert: function (t) {
      return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
    }, invertX: function (t) {
      return (t - this.x) / this.k
    }, invertY: function (t) {
      return (t - this.y) / this.k
    }, rescaleX: function (t) {
      return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
    }, rescaleY: function (t) {
      return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
    }, toString: function () {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
    }
  };
  var RM = new PM(1, 0, 0);

  function OM(t) {
    return t.__zoom || RM
  }

  function zM() {
    ln.stopImmediatePropagation()
  }

  OM.prototype = PM.prototype;
  var LM = function () {
    ln.preventDefault(), ln.stopImmediatePropagation()
  };

  function UM() {
    return !ln.button
  }

  function jM() {
    var t, n, e = this;
    return e instanceof SVGElement ? (t = (e = e.ownerSVGElement || e).width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [[0, 0], [t, n]]
  }

  function DM() {
    return this.__zoom || RM
  }

  function qM() {
    return -ln.deltaY * (ln.deltaMode ? 120 : 1) / 500
  }

  function BM() {
    return "ontouchstart" in this
  }

  function IM(t, n, e) {
    var r = t.invertX(n[0][0]) - e[0][0], i = t.invertX(n[1][0]) - e[1][0], o = t.invertY(n[0][1]) - e[0][1],
      u = t.invertY(n[1][1]) - e[1][1];
    return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u))
  }

  var FM = function () {
    var t, n, e = UM, r = jM, i = IM, o = qM, u = BM, a = [0, 1 / 0], c = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], f = 250,
      s = Er, l = [], h = dt("start", "zoom", "end"), d = 500, p = 150, v = 0;

    function y(t) {
      t.property("__zoom", DM).on("wheel.zoom", M).on("mousedown.zoom", S).on("dblclick.zoom", T).filter(u).on("touchstart.zoom", A).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", E).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
    }

    function g(t, n) {
      return (n = Math.max(a[0], Math.min(a[1], n))) === t.k ? t : new PM(n, t.x, t.y)
    }

    function b(t, n, e) {
      var r = n[0] - e[0] * t.k, i = n[1] - e[1] * t.k;
      return r === t.x && i === t.y ? t : new PM(t.k, r, i)
    }

    function m(t) {
      return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
    }

    function _(t, n, e) {
      t.on("start.zoom", function () {
        x(this, arguments).start()
      }).on("interrupt.zoom end.zoom", function () {
        x(this, arguments).end()
      }).tween("zoom", function () {
        var t = this, i = arguments, o = x(t, i), u = r.apply(t, i), a = e || m(u),
          c = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]), f = t.__zoom,
          l = "function" == typeof n ? n.apply(t, i) : n,
          h = s(f.invert(a).concat(c / f.k), l.invert(a).concat(c / l.k));
        return function (t) {
          if (1 === t) t = l; else {
            var n = h(t), e = c / n[2];
            t = new PM(e, a[0] - n[0] * e, a[1] - n[1] * e)
          }
          o.zoom(null, t)
        }
      })
    }

    function x(t, n) {
      for (var e, r = 0, i = l.length; r < i; ++r) if ((e = l[r]).that === t) return e;
      return new w(t, n)
    }

    function w(t, n) {
      this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = r.apply(t, n)
    }

    function M() {
      if (e.apply(this, arguments)) {
        var t = x(this, arguments), n = this.__zoom,
          r = Math.max(a[0], Math.min(a[1], n.k * Math.pow(2, o.apply(this, arguments)))), u = Cn(this);
        if (t.wheel) t.mouse[0][0] === u[0] && t.mouse[0][1] === u[1] || (t.mouse[1] = n.invert(t.mouse[0] = u)), clearTimeout(t.wheel); else {
          if (n.k === r) return;
          t.mouse = [u, n.invert(u)], xi(this), t.start()
        }
        LM(), t.wheel = setTimeout(function () {
          t.wheel = null, t.end()
        }, p), t.zoom("mouse", i(b(g(n, r), t.mouse[0], t.mouse[1]), t.extent, c))
      }
    }

    function S() {
      if (!n && e.apply(this, arguments)) {
        var t = x(this, arguments), r = Mn(ln.view).on("mousemove.zoom", function () {
          if (LM(), !t.moved) {
            var n = ln.clientX - u, e = ln.clientY - a;
            t.moved = n * n + e * e > v
          }
          t.zoom("mouse", i(b(t.that.__zoom, t.mouse[0] = Cn(t.that), t.mouse[1]), t.extent, c))
        }, !0).on("mouseup.zoom", function () {
          r.on("mousemove.zoom mouseup.zoom", null), jn(ln.view, t.moved), LM(), t.end()
        }, !0), o = Cn(this), u = ln.clientX, a = ln.clientY;
        Un(ln.view), zM(), t.mouse = [o, this.__zoom.invert(o)], xi(this), t.start()
      }
    }

    function T() {
      if (e.apply(this, arguments)) {
        var t = this.__zoom, n = Cn(this), o = t.invert(n), u = t.k * (ln.shiftKey ? .5 : 2),
          a = i(b(g(t, u), n, o), r.apply(this, arguments), c);
        LM(), f > 0 ? Mn(this).transition().duration(f).call(_, a, n) : Mn(this).call(y.transform, a)
      }
    }

    function A() {
      if (e.apply(this, arguments)) {
        var n, r, i, o, u = x(this, arguments), a = ln.changedTouches, c = a.length;
        for (zM(), r = 0; r < c; ++r) i = a[r], o = [o = Rn(this, a, i.identifier), this.__zoom.invert(o), i.identifier], u.touch0 ? u.touch1 || (u.touch1 = o) : (u.touch0 = o, n = !0);
        if (t && (t = clearTimeout(t), !u.touch1)) return u.end(), void ((o = Mn(this).on("dblclick.zoom")) && o.apply(this, arguments));
        n && (t = setTimeout(function () {
          t = null
        }, d), xi(this), u.start())
      }
    }

    function k() {
      var n, e, r, o, u = x(this, arguments), a = ln.changedTouches, f = a.length;
      for (LM(), t && (t = clearTimeout(t)), n = 0; n < f; ++n) e = a[n], r = Rn(this, a, e.identifier), u.touch0 && u.touch0[2] === e.identifier ? u.touch0[0] = r : u.touch1 && u.touch1[2] === e.identifier && (u.touch1[0] = r);
      if (e = u.that.__zoom, u.touch1) {
        var s = u.touch0[0], l = u.touch0[1], h = u.touch1[0], d = u.touch1[1],
          p = (p = h[0] - s[0]) * p + (p = h[1] - s[1]) * p, v = (v = d[0] - l[0]) * v + (v = d[1] - l[1]) * v;
        e = g(e, Math.sqrt(p / v)), r = [(s[0] + h[0]) / 2, (s[1] + h[1]) / 2], o = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2]
      } else {
        if (!u.touch0) return;
        r = u.touch0[0], o = u.touch0[1]
      }
      u.zoom("touch", i(b(e, r, o), u.extent, c))
    }

    function E() {
      var t, e, r = x(this, arguments), i = ln.changedTouches, o = i.length;
      for (zM(), n && clearTimeout(n), n = setTimeout(function () {
        n = null
      }, d), t = 0; t < o; ++t) e = i[t], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
      r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 ? r.touch0[1] = this.__zoom.invert(r.touch0[0]) : r.end()
    }

    return y.transform = function (t, n) {
      var e = t.selection ? t.selection() : t;
      e.property("__zoom", DM), t !== e ? _(t, n) : e.interrupt().each(function () {
        x(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
      })
    }, y.scaleBy = function (t, n) {
      y.scaleTo(t, function () {
        var t = this.__zoom.k, e = "function" == typeof n ? n.apply(this, arguments) : n;
        return t * e
      })
    }, y.scaleTo = function (t, n) {
      y.transform(t, function () {
        var t = r.apply(this, arguments), e = this.__zoom, o = m(t), u = e.invert(o),
          a = "function" == typeof n ? n.apply(this, arguments) : n;
        return i(b(g(e, a), o, u), t, c)
      })
    }, y.translateBy = function (t, n, e) {
      y.transform(t, function () {
        return i(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), r.apply(this, arguments), c)
      })
    }, y.translateTo = function (t, n, e) {
      y.transform(t, function () {
        var t = r.apply(this, arguments), o = this.__zoom, u = m(t);
        return i(RM.translate(u[0], u[1]).scale(o.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, c)
      })
    }, w.prototype = {
      start: function () {
        return 1 == ++this.active && (this.index = l.push(this) - 1, this.emit("start")), this
      }, zoom: function (t, n) {
        return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
      }, end: function () {
        return 0 == --this.active && (l.splice(this.index, 1), this.index = -1, this.emit("end")), this
      }, emit: function (t) {
        gn(new CM(y, t, this.that.__zoom), h.apply, h, [t, this.that, this.args])
      }
    }, y.wheelDelta = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : NM(+t), y) : o
    }, y.filter = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : NM(!!t), y) : e
    }, y.touchable = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : NM(!!t), y) : u
    }, y.extent = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : NM([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), y) : r
    }, y.scaleExtent = function (t) {
      return arguments.length ? (a[0] = +t[0], a[1] = +t[1], y) : [a[0], a[1]]
    }, y.translateExtent = function (t) {
      return arguments.length ? (c[0][0] = +t[0][0], c[1][0] = +t[1][0], c[0][1] = +t[0][1], c[1][1] = +t[1][1], y) : [[c[0][0], c[0][1]], [c[1][0], c[1][1]]]
    }, y.constrain = function (t) {
      return arguments.length ? (i = t, y) : i
    }, y.duration = function (t) {
      return arguments.length ? (f = +t, y) : f
    }, y.interpolate = function (t) {
      return arguments.length ? (s = t, y) : s
    }, y.on = function () {
      var t = h.on.apply(h, arguments);
      return t === h ? y : t
    }, y.clickDistance = function (t) {
      return arguments.length ? (v = (t = +t) * t, y) : Math.sqrt(v)
    }, y
  };
  e.d(n, "version", function () {
    return "5.9.7"
  }), e.d(n, "bisect", function () {
    return c
  }), e.d(n, "bisectRight", function () {
    return u
  }), e.d(n, "bisectLeft", function () {
    return a
  }), e.d(n, "ascending", function () {
    return r
  }), e.d(n, "bisector", function () {
    return i
  }), e.d(n, "cross", function () {
    return l
  }), e.d(n, "descending", function () {
    return h
  }), e.d(n, "deviation", function () {
    return v
  }), e.d(n, "extent", function () {
    return y
  }), e.d(n, "histogram", function () {
    return C
  }), e.d(n, "thresholdFreedmanDiaconis", function () {
    return R
  }), e.d(n, "thresholdScott", function () {
    return O
  }), e.d(n, "thresholdSturges", function () {
    return N
  }), e.d(n, "max", function () {
    return z
  }), e.d(n, "mean", function () {
    return L
  }), e.d(n, "median", function () {
    return U
  }), e.d(n, "merge", function () {
    return j
  }), e.d(n, "min", function () {
    return D
  }), e.d(n, "pairs", function () {
    return f
  }), e.d(n, "permute", function () {
    return q
  }), e.d(n, "quantile", function () {
    return P
  }), e.d(n, "range", function () {
    return w
  }), e.d(n, "scan", function () {
    return B
  }), e.d(n, "shuffle", function () {
    return I
  }), e.d(n, "sum", function () {
    return F
  }), e.d(n, "ticks", function () {
    return A
  }), e.d(n, "tickIncrement", function () {
    return k
  }), e.d(n, "tickStep", function () {
    return E
  }), e.d(n, "transpose", function () {
    return Y
  }), e.d(n, "variance", function () {
    return p
  }), e.d(n, "zip", function () {
    return V
  }), e.d(n, "axisTop", function () {
    return rt
  }), e.d(n, "axisRight", function () {
    return it
  }), e.d(n, "axisBottom", function () {
    return ot
  }), e.d(n, "axisLeft", function () {
    return ut
  }), e.d(n, "brush", function () {
    return iu
  }), e.d(n, "brushX", function () {
    return eu
  }), e.d(n, "brushY", function () {
    return ru
  }), e.d(n, "brushSelection", function () {
    return nu
  }), e.d(n, "chord", function () {
    return du
  }), e.d(n, "ribbon", function () {
    return ku
  }), e.d(n, "nest", function () {
    return Pu
  }), e.d(n, "set", function () {
    return qu
  }), e.d(n, "map", function () {
    return Cu
  }), e.d(n, "keys", function () {
    return Bu
  }), e.d(n, "values", function () {
    return Iu
  }), e.d(n, "entries", function () {
    return Fu
  }), e.d(n, "color", function () {
    return ue
  }), e.d(n, "rgb", function () {
    return se
  }), e.d(n, "hsl", function () {
    return pe
  }), e.d(n, "lab", function () {
    return Ee
  }), e.d(n, "hcl", function () {
    return Ue
  }), e.d(n, "lch", function () {
    return Le
  }), e.d(n, "gray", function () {
    return ke
  }), e.d(n, "cubehelix", function () {
    return Ve
  }), e.d(n, "contours", function () {
    return Ju
  }), e.d(n, "contourDensity", function () {
    return ia
  }), e.d(n, "dispatch", function () {
    return dt
  }), e.d(n, "drag", function () {
    return Hn
  }), e.d(n, "dragDisable", function () {
    return Un
  }), e.d(n, "dragEnable", function () {
    return jn
  }), e.d(n, "dsvFormat", function () {
    return pa
  }), e.d(n, "csvParse", function () {
    return ya
  }), e.d(n, "csvParseRows", function () {
    return ga
  }), e.d(n, "csvFormat", function () {
    return ba
  }), e.d(n, "csvFormatBody", function () {
    return ma
  }), e.d(n, "csvFormatRows", function () {
    return _a
  }), e.d(n, "tsvParse", function () {
    return wa
  }), e.d(n, "tsvParseRows", function () {
    return Ma
  }), e.d(n, "tsvFormat", function () {
    return Sa
  }), e.d(n, "tsvFormatBody", function () {
    return Ta
  }), e.d(n, "tsvFormatRows", function () {
    return Aa
  }), e.d(n, "autoType", function () {
    return ka
  }), e.d(n, "easeLinear", function () {
    return Fi
  }), e.d(n, "easeQuad", function () {
    return Vi
  }), e.d(n, "easeQuadIn", function () {
    return Yi
  }), e.d(n, "easeQuadOut", function () {
    return Hi
  }), e.d(n, "easeQuadInOut", function () {
    return Vi
  }), e.d(n, "easeCubic", function () {
    return $i
  }), e.d(n, "easeCubicIn", function () {
    return Xi
  }), e.d(n, "easeCubicOut", function () {
    return Gi
  }), e.d(n, "easeCubicInOut", function () {
    return $i
  }), e.d(n, "easePoly", function () {
    return Qi
  }), e.d(n, "easePolyIn", function () {
    return Wi
  }), e.d(n, "easePolyOut", function () {
    return Zi
  }), e.d(n, "easePolyInOut", function () {
    return Qi
  }), e.d(n, "easeSin", function () {
    return eo
  }), e.d(n, "easeSinIn", function () {
    return to
  }), e.d(n, "easeSinOut", function () {
    return no
  }), e.d(n, "easeSinInOut", function () {
    return eo
  }), e.d(n, "easeExp", function () {
    return oo
  }), e.d(n, "easeExpIn", function () {
    return ro
  }), e.d(n, "easeExpOut", function () {
    return io
  }), e.d(n, "easeExpInOut", function () {
    return oo
  }), e.d(n, "easeCircle", function () {
    return co
  }), e.d(n, "easeCircleIn", function () {
    return uo
  }), e.d(n, "easeCircleOut", function () {
    return ao
  }), e.d(n, "easeCircleInOut", function () {
    return co
  }), e.d(n, "easeBounce", function () {
    return xo
  }), e.d(n, "easeBounceIn", function () {
    return _o
  }),e.d(n, "easeBounceOut", function () {
    return xo
  }),e.d(n, "easeBounceInOut", function () {
    return wo
  }),e.d(n, "easeBack", function () {
    return To
  }),e.d(n, "easeBackIn", function () {
    return Mo
  }),e.d(n, "easeBackOut", function () {
    return So
  }),e.d(n, "easeBackInOut", function () {
    return To
  }),e.d(n, "easeElastic", function () {
    return Eo
  }),e.d(n, "easeElasticIn", function () {
    return ko
  }),e.d(n, "easeElasticOut", function () {
    return Eo
  }),e.d(n, "easeElasticInOut", function () {
    return No
  }),e.d(n, "blob", function () {
    return Na
  }),e.d(n, "buffer", function () {
    return Pa
  }),e.d(n, "dsv", function () {
    return La
  }),e.d(n, "csv", function () {
    return Ua
  }),e.d(n, "tsv", function () {
    return ja
  }),e.d(n, "image", function () {
    return Da
  }),e.d(n, "json", function () {
    return Ba
  }),e.d(n, "text", function () {
    return Oa
  }),e.d(n, "xml", function () {
    return Fa
  }),e.d(n, "html", function () {
    return Ya
  }),e.d(n, "svg", function () {
    return Ha
  }),e.d(n, "forceCenter", function () {
    return Va
  }),e.d(n, "forceCollide", function () {
    return ic
  }),e.d(n, "forceLink", function () {
    return ac
  }),e.d(n, "forceManyBody", function () {
    return dc
  }),e.d(n, "forceRadial", function () {
    return pc
  }),e.d(n, "forceSimulation", function () {
    return hc
  }),e.d(n, "forceX", function () {
    return vc
  }),e.d(n, "forceY", function () {
    return yc
  }),e.d(n, "formatDefaultLocale", function () {
    return Rc
  }),e.d(n, "format", function () {
    return Sc
  }),e.d(n, "formatPrefix", function () {
    return Tc
  }),e.d(n, "formatLocale", function () {
    return Pc
  }),e.d(n, "formatSpecifier", function () {
    return _c
  }),e.d(n, "precisionFixed", function () {
    return Oc
  }),e.d(n, "precisionPrefix", function () {
    return zc
  }),e.d(n, "precisionRound", function () {
    return Lc
  }),e.d(n, "geoArea", function () {
    return Nf
  }),e.d(n, "geoBounds", function () {
    return xs
  }),e.d(n, "geoCentroid", function () {
    return Os
  }),e.d(n, "geoCircle", function () {
    return Hs
  }),e.d(n, "geoClipAntimeridian", function () {
    return el
  }),e.d(n, "geoClipCircle", function () {
    return rl
  }),e.d(n, "geoClipExtent", function () {
    return ll
  }),e.d(n, "geoClipRectangle", function () {
    return al
  }),e.d(n, "geoContains", function () {
    return Nl
  }),e.d(n, "geoDistance", function () {
    return _l
  }),e.d(n, "geoGraticule", function () {
    return Rl
  }),e.d(n, "geoGraticule10", function () {
    return Ol
  }),e.d(n, "geoInterpolate", function () {
    return Dl
  }),e.d(n, "geoLength", function () {
    return gl
  }),e.d(n, "geoPath", function () {
    return Uh
  }),e.d(n, "geoAlbers", function () {
    return nd
  }),e.d(n, "geoAlbersUsa", function () {
    return ed
  }),e.d(n, "geoAzimuthalEqualArea", function () {
    return ud
  }),e.d(n, "geoAzimuthalEqualAreaRaw", function () {
    return od
  }),e.d(n, "geoAzimuthalEquidistant", function () {
    return cd
  }),e.d(n, "geoAzimuthalEquidistantRaw", function () {
    return ad
  }),e.d(n, "geoConicConformal", function () {
    return pd
  }),e.d(n, "geoConicConformalRaw", function () {
    return dd
  }),e.d(n, "geoConicEqualArea", function () {
    return td
  }),e.d(n, "geoConicEqualAreaRaw", function () {
    return Kh
  }),e.d(n, "geoConicEquidistant", function () {
    return bd
  }),e.d(n, "geoConicEquidistantRaw", function () {
    return gd
  }),e.d(n, "geoEqualEarth", function () {
    return Td
  }),e.d(n, "geoEqualEarthRaw", function () {
    return Sd
  }),e.d(n, "geoEquirectangular", function () {
    return yd
  }),e.d(n, "geoEquirectangularRaw", function () {
    return vd
  }),e.d(n, "geoGnomonic", function () {
    return kd
  }),e.d(n, "geoGnomonicRaw", function () {
    return Ad
  }),e.d(n, "geoIdentity", function () {
    return Nd
  }),e.d(n, "geoProjection", function () {
    return Zh
  }),e.d(n, "geoProjectionMutator", function () {
    return Qh
  }),e.d(n, "geoMercator", function () {
    return sd
  }),e.d(n, "geoMercatorRaw", function () {
    return fd
  }),e.d(n, "geoNaturalEarth1", function () {
    return Pd
  }),e.d(n, "geoNaturalEarth1Raw", function () {
    return Cd
  }),e.d(n, "geoOrthographic", function () {
    return Od
  }),e.d(n, "geoOrthographicRaw", function () {
    return Rd
  }),e.d(n, "geoStereographic", function () {
    return Ld
  }),e.d(n, "geoStereographicRaw", function () {
    return zd
  }),e.d(n, "geoTransverseMercator", function () {
    return jd
  }),e.d(n, "geoTransverseMercatorRaw", function () {
    return Ud
  }),e.d(n, "geoRotation", function () {
    return Is
  }),e.d(n, "geoStream", function () {
    return xf
  }),e.d(n, "geoTransform", function () {
    return jh
  }),e.d(n, "cluster", function () {
    return Id
  }),e.d(n, "hierarchy", function () {
    return Yd
  }),e.d(n, "pack", function () {
    return pp
  }),e.d(n, "packSiblings", function () {
    return cp
  }),e.d(n, "packEnclose", function () {
    return Wd
  }),e.d(n, "partition", function () {
    return _p
  }),e.d(n, "stratify", function () {
    return Ap
  }),e.d(n, "tree", function () {
    return Op
  }),e.d(n, "treemap", function () {
    return Dp
  }),e.d(n, "treemapBinary", function () {
    return qp
  }),e.d(n, "treemapDice", function () {
    return mp
  }),e.d(n, "treemapSlice", function () {
    return zp
  }),e.d(n, "treemapSliceDice", function () {
    return Bp
  }),e.d(n, "treemapSquarify", function () {
    return jp
  }),e.d(n, "treemapResquarify", function () {
    return Ip
  }),e.d(n, "interpolate", function () {
    return yr
  }),e.d(n, "interpolateArray", function () {
    return or
  }),e.d(n, "interpolateBasis", function () {
    return $e
  }),e.d(n, "interpolateBasisClosed", function () {
    return We
  }),e.d(n, "interpolateDate", function () {
    return ur
  }),e.d(n, "interpolateDiscrete", function () {
    return gr
  }),e.d(n, "interpolateHue", function () {
    return br
  }),e.d(n, "interpolateNumber", function () {
    return ar
  }),e.d(n, "interpolateObject", function () {
    return cr
  }),e.d(n, "interpolateRound", function () {
    return mr
  }),e.d(n, "interpolateString", function () {
    return vr
  }),e.d(n, "interpolateTransformCss", function () {
    return Sr
  }),e.d(n, "interpolateTransformSvg", function () {
    return Tr
  }),e.d(n, "interpolateZoom", function () {
    return Er
  }),e.d(n, "interpolateRgb", function () {
    return nr
  }),e.d(n, "interpolateRgbBasis", function () {
    return rr
  }),e.d(n, "interpolateRgbBasisClosed", function () {
    return ir
  }),e.d(n, "interpolateHsl", function () {
    return Cr
  }),e.d(n, "interpolateHslLong", function () {
    return Pr
  }),e.d(n, "interpolateLab", function () {
    return Rr
  }),e.d(n, "interpolateHcl", function () {
    return zr
  }),e.d(n, "interpolateHclLong", function () {
    return Lr
  }),e.d(n, "interpolateCubehelix", function () {
    return jr
  }),e.d(n, "interpolateCubehelixLong", function () {
    return Dr
  }),e.d(n, "piecewise", function () {
    return qr
  }),e.d(n, "quantize", function () {
    return Fr
  }),e.d(n, "path", function () {
    return xu
  }),e.d(n, "polygonArea", function () {
    return Fp
  }),e.d(n, "polygonCentroid", function () {
    return Yp
  }),e.d(n, "polygonHull", function () {
    return Gp
  }),e.d(n, "polygonContains", function () {
    return $p
  }),e.d(n, "polygonLength", function () {
    return Wp
  }),e.d(n, "quadtree", function () {
    return Ja
  }),e.d(n, "randomUniform", function () {
    return Qp
  }),e.d(n, "randomNormal", function () {
    return Jp
  }),e.d(n, "randomLogNormal", function () {
    return Kp
  }),e.d(n, "randomBates", function () {
    return nv
  }),e.d(n, "randomIrwinHall", function () {
    return tv
  }),e.d(n, "randomExponential", function () {
    return ev
  }),e.d(n, "scaleBand", function () {
    return sv
  }),e.d(n, "scalePoint", function () {
    return lv
  }),e.d(n, "scaleIdentity", function () {
    return Av
  }),e.d(n, "scaleLinear", function () {
    return Tv
  }),e.d(n, "scaleLog", function () {
    return Lv
  }),e.d(n, "scaleSymlog", function () {
    return qv
  }),e.d(n, "scaleOrdinal", function () {
    return fv
  }),e.d(n, "scaleImplicit", function () {
    return cv
  }),e.d(n, "scalePow", function () {
    return Hv
  }),e.d(n, "scaleSqrt", function () {
    return Vv
  }),e.d(n, "scaleQuantile", function () {
    return Xv
  }),e.d(n, "scaleQuantize", function () {
    return Gv
  }),e.d(n, "scaleThreshold", function () {
    return $v
  }),e.d(n, "scaleTime", function () {
    return Hb
  }),e.d(n, "scaleUtc", function () {
    return Vb
  }),e.d(n, "scaleSequential", function () {
    return $b
  }),e.d(n, "scaleSequentialLog", function () {
    return Wb
  }),e.d(n, "scaleSequentialPow", function () {
    return Qb
  }),e.d(n, "scaleSequentialSqrt", function () {
    return Jb
  }),e.d(n, "scaleSequentialSymlog", function () {
    return Zb
  }),e.d(n, "scaleSequentialQuantile", function () {
    return Kb
  }),e.d(n, "scaleDiverging", function () {
    return nm
  }),e.d(n, "scaleDivergingLog", function () {
    return em
  }),e.d(n, "scaleDivergingPow", function () {
    return im
  }),e.d(n, "scaleDivergingSqrt", function () {
    return om
  }),e.d(n, "scaleDivergingSymlog", function () {
    return rm
  }),e.d(n, "tickFormat", function () {
    return Mv
  }),e.d(n, "schemeCategory10", function () {
    return am
  }),e.d(n, "schemeAccent", function () {
    return cm
  }),e.d(n, "schemeDark2", function () {
    return fm
  }),e.d(n, "schemePaired", function () {
    return sm
  }),e.d(n, "schemePastel1", function () {
    return lm
  }),e.d(n, "schemePastel2", function () {
    return hm
  }),e.d(n, "schemeSet1", function () {
    return dm
  }),e.d(n, "schemeSet2", function () {
    return pm
  }),e.d(n, "schemeSet3", function () {
    return vm
  }),e.d(n, "interpolateBrBG", function () {
    return bm
  }),e.d(n, "schemeBrBG", function () {
    return gm
  }),e.d(n, "interpolatePRGn", function () {
    return _m
  }),e.d(n, "schemePRGn", function () {
    return mm
  }),e.d(n, "interpolatePiYG", function () {
    return wm
  }),e.d(n, "schemePiYG", function () {
    return xm
  }),e.d(n, "interpolatePuOr", function () {
    return Sm
  }),e.d(n, "schemePuOr", function () {
    return Mm
  }),e.d(n, "interpolateRdBu", function () {
    return Am
  }),e.d(n, "schemeRdBu", function () {
    return Tm
  }),e.d(n, "interpolateRdGy", function () {
    return Em
  }),e.d(n, "schemeRdGy", function () {
    return km
  }),e.d(n, "interpolateRdYlBu", function () {
    return Cm
  }),e.d(n, "schemeRdYlBu", function () {
    return Nm
  }),e.d(n, "interpolateRdYlGn", function () {
    return Rm
  }),e.d(n, "schemeRdYlGn", function () {
    return Pm
  }),e.d(n, "interpolateSpectral", function () {
    return zm
  }),e.d(n, "schemeSpectral", function () {
    return Om
  }),e.d(n, "interpolateBuGn", function () {
    return Um
  }),e.d(n, "schemeBuGn", function () {
    return Lm
  }),e.d(n, "interpolateBuPu", function () {
    return Dm
  }),e.d(n, "schemeBuPu", function () {
    return jm
  }),e.d(n, "interpolateGnBu", function () {
    return Bm
  }),e.d(n, "schemeGnBu", function () {
    return qm
  }),e.d(n, "interpolateOrRd", function () {
    return Fm
  }),e.d(n, "schemeOrRd", function () {
    return Im
  }),e.d(n, "interpolatePuBuGn", function () {
    return Hm
  }),e.d(n, "schemePuBuGn", function () {
    return Ym
  }),e.d(n, "interpolatePuBu", function () {
    return Xm
  }),e.d(n, "schemePuBu", function () {
    return Vm
  }),e.d(n, "interpolatePuRd", function () {
    return $m
  }),e.d(n, "schemePuRd", function () {
    return Gm
  }),e.d(n, "interpolateRdPu", function () {
    return Zm
  }),e.d(n, "schemeRdPu", function () {
    return Wm
  }),e.d(n, "interpolateYlGnBu", function () {
    return Jm
  }),e.d(n, "schemeYlGnBu", function () {
    return Qm
  }),e.d(n, "interpolateYlGn", function () {
    return t_
  }),e.d(n, "schemeYlGn", function () {
    return Km
  }),e.d(n, "interpolateYlOrBr", function () {
    return e_
  }),e.d(n, "schemeYlOrBr", function () {
    return n_
  }),e.d(n, "interpolateYlOrRd", function () {
    return i_
  }),e.d(n, "schemeYlOrRd", function () {
    return r_
  }),e.d(n, "interpolateBlues", function () {
    return u_
  }),e.d(n, "schemeBlues", function () {
    return o_
  }),e.d(n, "interpolateGreens", function () {
    return c_
  }),e.d(n, "schemeGreens", function () {
    return a_
  }),e.d(n, "interpolateGreys", function () {
    return s_
  }),e.d(n, "schemeGreys", function () {
    return f_
  }),e.d(n, "interpolatePurples", function () {
    return h_
  }),e.d(n, "schemePurples", function () {
    return l_
  }),e.d(n, "interpolateReds", function () {
    return p_
  }),e.d(n, "schemeReds", function () {
    return d_
  }),e.d(n, "interpolateOranges", function () {
    return y_
  }),e.d(n, "schemeOranges", function () {
    return v_
  }),e.d(n, "interpolateCubehelixDefault", function () {
    return g_
  }),e.d(n, "interpolateRainbow", function () {
    return x_
  }),e.d(n, "interpolateWarm", function () {
    return b_
  }),e.d(n, "interpolateCool", function () {
    return m_
  }),e.d(n, "interpolateSinebow", function () {
    return T_
  }),e.d(n, "interpolateViridis", function () {
    return k_
  }),e.d(n, "interpolateMagma", function () {
    return E_
  }),e.d(n, "interpolateInferno", function () {
    return N_
  }),e.d(n, "interpolatePlasma", function () {
    return C_
  }),e.d(n, "create", function () {
    return Sn
  }),e.d(n, "creator", function () {
    return gt
  }),e.d(n, "local", function () {
    return An
  }),e.d(n, "matcher", function () {
    return wt
  }),e.d(n, "mouse", function () {
    return Cn
  }),e.d(n, "namespace", function () {
    return yt
  }),e.d(n, "namespaces", function () {
    return vt
  }),e.d(n, "clientPoint", function () {
    return Nn
  }),e.d(n, "select", function () {
    return Mn
  }),e.d(n, "selectAll", function () {
    return Pn
  }),e.d(n, "selection", function () {
    return wn
  }),e.d(n, "selector", function () {
    return mt
  }),e.d(n, "selectorAll", function () {
    return xt
  }),e.d(n, "style", function () {
    return qt
  }),e.d(n, "touch", function () {
    return Rn
  }),e.d(n, "touches", function () {
    return On
  }),e.d(n, "window", function () {
    return Lt
  }),e.d(n, "event", function () {
    return ln
  }),e.d(n, "customEvent", function () {
    return gn
  }),e.d(n, "arc", function () {
    return Z_
  }),e.d(n, "area", function () {
    return ex
  }),e.d(n, "line", function () {
    return nx
  }),e.d(n, "pie", function () {
    return ox
  }),e.d(n, "areaRadial", function () {
    return lx
  }),e.d(n, "radialArea", function () {
    return lx
  }),e.d(n, "lineRadial", function () {
    return sx
  }),e.d(n, "radialLine", function () {
    return sx
  }),e.d(n, "pointRadial", function () {
    return hx
  }),e.d(n, "linkHorizontal", function () {
    return _x
  }),e.d(n, "linkVertical", function () {
    return xx
  }),e.d(n, "linkRadial", function () {
    return wx
  }),e.d(n, "symbol", function () {
    return Bx
  }),e.d(n, "symbols", function () {
    return qx
  }),e.d(n, "symbolCircle", function () {
    return Mx
  }),e.d(n, "symbolCross", function () {
    return Sx
  }),e.d(n, "symbolDiamond", function () {
    return kx
  }),e.d(n, "symbolSquare", function () {
    return Rx
  }),e.d(n, "symbolStar", function () {
    return Px
  }),e.d(n, "symbolTriangle", function () {
    return zx
  }),e.d(n, "symbolWye", function () {
    return Dx
  }),e.d(n, "curveBasisClosed", function () {
    return Xx
  }),e.d(n, "curveBasisOpen", function () {
    return $x
  }),e.d(n, "curveBasis", function () {
    return Hx
  }),e.d(n, "curveBundle", function () {
    return Zx
  }),e.d(n, "curveCardinalClosed", function () {
    return nw
  }),e.d(n, "curveCardinalOpen", function () {
    return rw
  }),e.d(n, "curveCardinal", function () {
    return Kx
  }),e.d(n, "curveCatmullRomClosed", function () {
    return cw
  }),e.d(n, "curveCatmullRomOpen", function () {
    return sw
  }),e.d(n, "curveCatmullRom", function () {
    return uw
  }),e.d(n, "curveLinearClosed", function () {
    return hw
  }),e.d(n, "curveLinear", function () {
    return J_
  }),e.d(n, "curveMonotoneX", function () {
    return _w
  }),e.d(n, "curveMonotoneY", function () {
    return xw
  }),e.d(n, "curveNatural", function () {
    return Sw
  }),e.d(n, "curveStep", function () {
    return Aw
  }),e.d(n, "curveStepAfter", function () {
    return Ew
  }),e.d(n, "curveStepBefore", function () {
    return kw
  }),e.d(n, "stack", function () {
    return Rw
  }),e.d(n, "stackOffsetExpand", function () {
    return Ow
  }),e.d(n, "stackOffsetDiverging", function () {
    return zw
  }),e.d(n, "stackOffsetNone", function () {
    return Nw
  }),e.d(n, "stackOffsetSilhouette", function () {
    return Lw
  }),e.d(n, "stackOffsetWiggle", function () {
    return Uw
  }),e.d(n, "stackOrderAppearance", function () {
    return jw
  }),e.d(n, "stackOrderAscending", function () {
    return qw
  }),e.d(n, "stackOrderDescending", function () {
    return Iw
  }),e.d(n, "stackOrderInsideOut", function () {
    return Fw
  }),e.d(n, "stackOrderNone", function () {
    return Cw
  }),e.d(n, "stackOrderReverse", function () {
    return Yw
  }),e.d(n, "timeInterval", function () {
    return Qv
  }),e.d(n, "timeMillisecond", function () {
    return Kv
  }),e.d(n, "timeMilliseconds", function () {
    return ty
  }),e.d(n, "utcMillisecond", function () {
    return Kv
  }),e.d(n, "utcMilliseconds", function () {
    return ty
  }),e.d(n, "timeSecond", function () {
    return iy
  }),e.d(n, "timeSeconds", function () {
    return oy
  }),e.d(n, "utcSecond", function () {
    return iy
  }),e.d(n, "utcSeconds", function () {
    return oy
  }),e.d(n, "timeMinute", function () {
    return ay
  }),e.d(n, "timeMinutes", function () {
    return cy
  }),e.d(n, "timeHour", function () {
    return sy
  }),e.d(n, "timeHours", function () {
    return ly
  }),e.d(n, "timeDay", function () {
    return dy
  }),e.d(n, "timeDays", function () {
    return py
  }),e.d(n, "timeWeek", function () {
    return yy
  }),e.d(n, "timeWeeks", function () {
    return My
  }),e.d(n, "timeSunday", function () {
    return yy
  }),e.d(n, "timeSundays", function () {
    return My
  }),e.d(n, "timeMonday", function () {
    return gy
  }),e.d(n, "timeMondays", function () {
    return Sy
  }),e.d(n, "timeTuesday", function () {
    return by
  }),e.d(n, "timeTuesdays", function () {
    return Ty
  }),e.d(n, "timeWednesday", function () {
    return my
  }),e.d(n, "timeWednesdays", function () {
    return Ay
  }),e.d(n, "timeThursday", function () {
    return _y
  }),e.d(n, "timeThursdays", function () {
    return ky
  }),e.d(n, "timeFriday", function () {
    return xy
  }),e.d(n, "timeFridays", function () {
    return Ey
  }),e.d(n, "timeSaturday", function () {
    return wy
  }),e.d(n, "timeSaturdays", function () {
    return Ny
  }),e.d(n, "timeMonth", function () {
    return Py
  }),e.d(n, "timeMonths", function () {
    return Ry
  }),e.d(n, "timeYear", function () {
    return zy
  }),e.d(n, "timeYears", function () {
    return Ly
  }),e.d(n, "utcMinute", function () {
    return jy
  }),e.d(n, "utcMinutes", function () {
    return Dy
  }),e.d(n, "utcHour", function () {
    return By
  }),e.d(n, "utcHours", function () {
    return Iy
  }),e.d(n, "utcDay", function () {
    return Yy
  }),e.d(n, "utcDays", function () {
    return Hy
  }),e.d(n, "utcWeek", function () {
    return Xy
  }),e.d(n, "utcWeeks", function () {
    return Ky
  }),e.d(n, "utcSunday", function () {
    return Xy
  }),e.d(n, "utcSundays", function () {
    return Ky
  }),e.d(n, "utcMonday", function () {
    return Gy
  }),e.d(n, "utcMondays", function () {
    return tg
  }),e.d(n, "utcTuesday", function () {
    return $y
  }),e.d(n, "utcTuesdays", function () {
    return ng
  }),e.d(n, "utcWednesday", function () {
    return Wy
  }),e.d(n, "utcWednesdays", function () {
    return eg
  }),e.d(n, "utcThursday", function () {
    return Zy
  }),e.d(n, "utcThursdays", function () {
    return rg
  }),e.d(n, "utcFriday", function () {
    return Qy
  }),e.d(n, "utcFridays", function () {
    return ig
  }),e.d(n, "utcSaturday", function () {
    return Jy
  }),e.d(n, "utcSaturdays", function () {
    return og
  }),e.d(n, "utcMonth", function () {
    return ag
  }),e.d(n, "utcMonths", function () {
    return cg
  }),e.d(n, "utcYear", function () {
    return sg
  }),e.d(n, "utcYears", function () {
    return lg
  }),e.d(n, "timeFormatDefaultLocale", function () {
    return Pb
  }),e.d(n, "timeFormat", function () {
    return gg
  }),e.d(n, "timeParse", function () {
    return bg
  }),e.d(n, "utcFormat", function () {
    return mg
  }),e.d(n, "utcParse", function () {
    return _g
  }),e.d(n, "timeFormatLocale", function () {
    return vg
  }),e.d(n, "isoFormat", function () {
    return Rb
  }),e.d(n, "isoParse", function () {
    return Ob
  }),e.d(n, "now", function () {
    return Jr
  }),e.d(n, "timer", function () {
    return ni
  }),e.d(n, "timerFlush", function () {
    return ei
  }),e.d(n, "timeout", function () {
    return ui
  }),e.d(n, "interval", function () {
    return ai
  }),e.d(n, "transition", function () {
    return qi
  }),e.d(n, "active", function () {
    return Oo
  }),e.d(n, "interrupt", function () {
    return xi
  }),e.d(n, "voronoi", function () {
    return EM
  }),e.d(n, "zoom", function () {
    return FM
  }),e.d(n, "zoomTransform", function () {
    return OM
  }),e.d(n, "zoomIdentity", function () {
    return RM
  })
}, function (t, n, e) {
  "use strict";
  Object.defineProperty(n, "__esModule", {value: !0});
  var r = function () {
    function t(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
      }
    }

    return function (n, e, r) {
      return e && t(n.prototype, e), r && t(n, r), n
    }
  }();
  var i = e(34), o = function () {
    function t(n) {
      !function (t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this.option = n, this.ID = t.extractID(this.option).replace("#", "")
    }

    return r(t, [{
      key: "mergeOption", value: function (t) {
        return this.option = i(t, this.option), this
      }
    }], [{
      key: "hasEl", value: function (t) {
        return t.hasOwnProperty("el") && t.el
      }
    }, {
      key: "elPrefixValid", value: function (t) {
        return t.el.startsWith("#")
      }
    }, {
      key: "extractID", value: function (t) {
        return this.hasEl(t) || this.elPrefixValid(t) ? t.el : (console.warn("field el is null"), null)
      }
    }]), t
  }();
  n.default = o
}, function (t, n, e) {
  "use strict";
  t.exports = function (t, n) {
    return function () {
      for (var e = new Array(arguments.length), r = 0; r < e.length; r++) e[r] = arguments[r];
      return t.apply(n, e)
    }
  }
}, function (t, n, e) {
  "use strict";
  var r = e(0);

  function i(t) {
    return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
  }

  t.exports = function (t, n, e) {
    if (!n) return t;
    var o;
    if (e) o = e(n); else if (r.isURLSearchParams(n)) o = n.toString(); else {
      var u = [];
      r.forEach(n, function (t, n) {
        null != t && (r.isArray(t) ? n += "[]" : t = [t], r.forEach(t, function (t) {
          r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)), u.push(i(n) + "=" + i(t))
        }))
      }), o = u.join("&")
    }
    if (o) {
      var a = t.indexOf("#");
      -1 !== a && (t = t.slice(0, a)), t += (-1 === t.indexOf("?") ? "?" : "&") + o
    }
    return t
  }
}, function (t, n, e) {
  "use strict";
  t.exports = function (t) {
    return !(!t || !t.__CANCEL__)
  }
}, function (t, n, e) {
  "use strict";
  (function (n) {
    var r = e(0), i = e(23), o = {"Content-Type": "application/x-www-form-urlencoded"};

    function u(t, n) {
      !r.isUndefined(t) && r.isUndefined(t["Content-Type"]) && (t["Content-Type"] = n)
    }

    var a, c = {
      adapter: (void 0 !== n && "[object process]" === Object.prototype.toString.call(n) ? a = e(7) : "undefined" != typeof XMLHttpRequest && (a = e(7)), a),
      transformRequest: [function (t, n) {
        return i(n, "Accept"), i(n, "Content-Type"), r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t) ? t : r.isArrayBufferView(t) ? t.buffer : r.isURLSearchParams(t) ? (u(n, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : r.isObject(t) ? (u(n, "application/json;charset=utf-8"), JSON.stringify(t)) : t
      }],
      transformResponse: [function (t) {
        if ("string" == typeof t) try {
          t = JSON.parse(t)
        } catch (t) {
        }
        return t
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      validateStatus: function (t) {
        return t >= 200 && t < 300
      }
    };
    c.headers = {common: {Accept: "application/json, text/plain, */*"}}, r.forEach(["delete", "get", "head"], function (t) {
      c.headers[t] = {}
    }), r.forEach(["post", "put", "patch"], function (t) {
      c.headers[t] = r.merge(o)
    }), t.exports = c
  }).call(this, e(22))
}, function (t, n, e) {
  "use strict";
  var r = e(0), i = e(24), o = e(4), u = e(26), a = e(27), c = e(8);
  t.exports = function (t) {
    return new Promise(function (n, f) {
      var s = t.data, l = t.headers;
      r.isFormData(s) && delete l["Content-Type"];
      var h = new XMLHttpRequest;
      if (t.auth) {
        var d = t.auth.username || "", p = t.auth.password || "";
        l.Authorization = "Basic " + btoa(d + ":" + p)
      }
      if (h.open(t.method.toUpperCase(), o(t.url, t.params, t.paramsSerializer), !0), h.timeout = t.timeout, h.onreadystatechange = function () {
        if (h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
          var e = "getAllResponseHeaders" in h ? u(h.getAllResponseHeaders()) : null, r = {
            data: t.responseType && "text" !== t.responseType ? h.response : h.responseText,
            status: h.status,
            statusText: h.statusText,
            headers: e,
            config: t,
            request: h
          };
          i(n, f, r), h = null
        }
      }, h.onabort = function () {
        h && (f(c("Request aborted", t, "ECONNABORTED", h)), h = null)
      }, h.onerror = function () {
        f(c("Network Error", t, null, h)), h = null
      }, h.ontimeout = function () {
        f(c("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", h)), h = null
      }, r.isStandardBrowserEnv()) {
        var v = e(28), y = (t.withCredentials || a(t.url)) && t.xsrfCookieName ? v.read(t.xsrfCookieName) : void 0;
        y && (l[t.xsrfHeaderName] = y)
      }
      if ("setRequestHeader" in h && r.forEach(l, function (t, n) {
        void 0 === s && "content-type" === n.toLowerCase() ? delete l[n] : h.setRequestHeader(n, t)
      }), t.withCredentials && (h.withCredentials = !0), t.responseType) try {
        h.responseType = t.responseType
      } catch (n) {
        if ("json" !== t.responseType) throw n
      }
      "function" == typeof t.onDownloadProgress && h.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && h.upload && h.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function (t) {
        h && (h.abort(), f(t), h = null)
      }), void 0 === s && (s = null), h.send(s)
    })
  }
}, function (t, n, e) {
  "use strict";
  var r = e(25);
  t.exports = function (t, n, e, i, o) {
    var u = new Error(t);
    return r(u, n, e, i, o)
  }
}, function (t, n, e) {
  "use strict";
  var r = e(0);
  t.exports = function (t, n) {
    n = n || {};
    var e = {};
    return r.forEach(["url", "method", "params", "data"], function (t) {
      void 0 !== n[t] && (e[t] = n[t])
    }), r.forEach(["headers", "auth", "proxy"], function (i) {
      r.isObject(n[i]) ? e[i] = r.deepMerge(t[i], n[i]) : void 0 !== n[i] ? e[i] = n[i] : r.isObject(t[i]) ? e[i] = r.deepMerge(t[i]) : void 0 !== t[i] && (e[i] = t[i])
    }), r.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], function (r) {
      void 0 !== n[r] ? e[r] = n[r] : void 0 !== t[r] && (e[r] = t[r])
    }), e
  }
}, function (t, n, e) {
  "use strict";

  function r(t) {
    this.message = t
  }

  r.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "")
  }, r.prototype.__CANCEL__ = !0, t.exports = r
}, function (t, n, e) {
  "use strict";
  (function (t) {
    Object.defineProperty(n, "__esModule", {value: !0});
    var r = function () {
      function t(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }

      return function (n, e, r) {
        return e && t(n.prototype, e), r && t(n, r), n
      }
    }();
    e(1);
    var i = [{name: "schemeAccent", n: 8}, {name: "schemeDark2", n: 8}, {
      name: "schemePastel2",
      n: 8
    }, {name: "schemeSet2", n: 8}, {name: "schemeSet1", n: 9}, {name: "schemePastel1", n: 9}, {
      name: "schemeCategory10",
      n: 10
    }, {name: "schemeSet3", n: 12}, {name: "schemePaired", n: 12}, {
      name: "schemeCategory20",
      n: 20
    }, {name: "schemeCategory20b", n: 20}, {name: "schemeCategory20c", n: 20}], o = function () {
      function n() {
        !function (t, n) {
          if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }(this, n), this.defaultSchema = "schemeAccent", this.schema = null
      }

      return r(n, [{
        key: "setSchemeAccent", value: function (t) {
          for (var n = void 0, e = 0; e < i.length; e++) if (i[e].name === t) {
            n = t;
            break
          }
          return n || (console.warn("the schema named " + t + " doesn't exist"), console.log("using the default schema named " + this.defaultSchema + " is the way to resolve this error"), n = this.defaultSchema), this.schema = n, this
        }
      }, {
        key: "getColorScale", value: function () {
          return t.scaleOrdinal(t[this.schema])
        }
      }]), n
    }();
    n.default = new o
  }).call(this, e(1))
}, function (t, n, e) {
  "use strict";
  var r = f(e(13)), i = f(e(14)), o = f(e(33)), u = f(e(35)), a = e(36), c = f(a);

  function f(t) {
    return t && t.__esModule ? t : {default: t}
  }

  e(38), t.exports = {
    DataSource: i.default,
    HotGradient: o.default,
    HotGradientSeparate: u.default,
    ExpressionViewer: c.default,
    goLink: r.default,
    vTok: a.vTok
  }
}, function (t, n, e) {
  "use strict";
  Object.defineProperty(n, "__esModule", {value: !0}), n.default = function (t) {
    var n = document.createElement("a");
    n.target = "_blank", n.href = t, document.body.append(n), n.click(), document.body.removeChild(n)
  }
}, function (t, n, e) {
  "use strict";
  (function (t) {
    Object.defineProperty(n, "__esModule", {value: !0});
    var r = function () {
      function t(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }

      return function (n, e, r) {
        return e && t(n.prototype, e), r && t(n, r), n
      }
    }();
    e(1);
    var i, o = e(15), u = (i = o) && i.__esModule ? i : {default: i};
    var a = function () {
      function n(t) {
        !function (t, n) {
          if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }(this, n), this.config = t, this.data = null
      }

      return r(n, [{
        key: "maize", value: function () {
          this.data = [];
          var n = this;
          return t.tsv(this.config.url, function (t) {
            n.data.push(t)
          }), this
        }
      }, {
        key: "nw", value: function () {
          this.data = [];
          var n = this;
          return t.tsv(this.config.url, function (t) {
            t.distance = parseFloat(t.distance), n.data.push(t)
          }), this
        }
      }, {
        key: "newick", value: function () {
          return t.text(this.config.url, function (t, n) {
            return new Promise(function (t, e) {
              t(n)
            })
          })
        }
      }, {
        key: "selectOne", value: function (t) {
          //加了测试数据
          this.data=[{"geneID":"Zm00001d000001","B73_6-7_internode":"534.3606667","B73_7-8_internode":"937.3466667","B73_Vegetative_Meristem_16-19_Day":"1466.885","B73_Ear_Primordium_2-4_mm":"50.9252","B73_Ear_Primordium_6-8_mm":"54.59923333","B73_Embryo_20_DAP":"1.584866667","B73_Embryo_38_DAP":"11.17333667","B73_Endosperm_12_DAP":"0","B73_Endosperm_Crown_27_DAP":"1.27837","B73_Germinatin_Kernels_2_DAI":"21.5213","B73_Pericarp_Aleurone_27_DAP":"11.22052333","B73_Leaf_Zone_1_Symmetrical":"565.1873333","B73_Leaf_Zone_2_Stomatal":"169.073","B73_Leaf_Zone_3_Growth":"48.85053333","B73_Mature_Leaf_8":"6.38015","B73_Primary_Root_5_Days":"4.403233333","B73_Root_Cortex_5_Days":"4.862066667","B73_Root_Elongation_Zone_5_Days":"2.22319","B73_Root_Meristem_Zone_5_Days":"7.265293333","B73_Secondary_Root_7-8_Days":"7.57871","B73_Mature_Pollen":"1.56354","B73_Female_Spikelet_Collected_on_day_as_silk":"136.839","B73_Silk":"1376.446667"},]
          var n = null, e = this.data.filter(function (n) {
            return n.geneID === t
          });
          return e.length > 0 && (n = e[0]), new Promise(function (t, e) {
            t(n)
          })
        }
      }, {
        key: "remoteSelectOne", value: function (t) {
          return request.get(t).then(function (t) {
            return new Promise(function (n, e) {
              n(t.data)
            })
          })
        }
      }, {
        key: "select", value: function (t) {
          var n = this, e = [];
          return t.map(function (t) {
            var r = n.data.filter(function (n) {
              return n.source === t || n.target === t
            });
            r.length > 0 && (e = e.concat(r))
          }).filter(function (t) {
            return null !== t
          }), new Promise(function (t, n) {
            t(e)
          })
        }
      }, {
        key: "remoteSelect", value: function (t) {
          return request.get(t).then(function (t) {
            return new Promise(function (n, e) {
              n(t.data)
            })
          })
        }
      }]), n
    }();
    n.default = a
  }).call(this, e(1))
}, function (t, n, e) {
  t.exports = e(16)
}, function (t, n, e) {
  "use strict";
  var r = e(0), i = e(3), o = e(18), u = e(9);

  function a(t) {
    var n = new o(t), e = i(o.prototype.request, n);
    return r.extend(e, o.prototype, n), r.extend(e, n), e
  }

  var c = a(e(6));
  c.Axios = o, c.create = function (t) {
    return a(u(c.defaults, t))
  }, c.Cancel = e(10), c.CancelToken = e(31), c.isCancel = e(5), c.all = function (t) {
    return Promise.all(t)
  }, c.spread = e(32), t.exports = c, t.exports.default = c
}, function (t, n) {
  /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
  t.exports = function (t) {
    return null != t && null != t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
  }
}, function (t, n, e) {
  "use strict";
  var r = e(0), i = e(4), o = e(19), u = e(20), a = e(9);

  function c(t) {
    this.defaults = t, this.interceptors = {request: new o, response: new o}
  }

  c.prototype.request = function (t) {
    "string" == typeof t ? (t = arguments[1] || {}).url = arguments[0] : t = t || {}, (t = a(this.defaults, t)).method = t.method ? t.method.toLowerCase() : "get";
    var n = [u, void 0], e = Promise.resolve(t);
    for (this.interceptors.request.forEach(function (t) {
      n.unshift(t.fulfilled, t.rejected)
    }), this.interceptors.response.forEach(function (t) {
      n.push(t.fulfilled, t.rejected)
    }); n.length;) e = e.then(n.shift(), n.shift());
    return e
  }, c.prototype.getUri = function (t) {
    return t = a(this.defaults, t), i(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
  }, r.forEach(["delete", "get", "head", "options"], function (t) {
    c.prototype[t] = function (n, e) {
      return this.request(r.merge(e || {}, {method: t, url: n}))
    }
  }), r.forEach(["post", "put", "patch"], function (t) {
    c.prototype[t] = function (n, e, i) {
      return this.request(r.merge(i || {}, {method: t, url: n, data: e}))
    }
  }), t.exports = c
}, function (t, n, e) {
  "use strict";
  var r = e(0);

  function i() {
    this.handlers = []
  }

  i.prototype.use = function (t, n) {
    return this.handlers.push({fulfilled: t, rejected: n}), this.handlers.length - 1
  }, i.prototype.eject = function (t) {
    this.handlers[t] && (this.handlers[t] = null)
  }, i.prototype.forEach = function (t) {
    r.forEach(this.handlers, function (n) {
      null !== n && t(n)
    })
  }, t.exports = i
}, function (t, n, e) {
  "use strict";
  var r = e(0), i = e(21), o = e(5), u = e(6), a = e(29), c = e(30);

  function f(t) {
    t.cancelToken && t.cancelToken.throwIfRequested()
  }

  t.exports = function (t) {
    return f(t), t.baseURL && !a(t.url) && (t.url = c(t.baseURL, t.url)), t.headers = t.headers || {}, t.data = i(t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (n) {
      delete t.headers[n]
    }), (t.adapter || u.adapter)(t).then(function (n) {
      return f(t), n.data = i(n.data, n.headers, t.transformResponse), n
    }, function (n) {
      return o(n) || (f(t), n && n.response && (n.response.data = i(n.response.data, n.response.headers, t.transformResponse))), Promise.reject(n)
    })
  }
}, function (t, n, e) {
  "use strict";
  var r = e(0);
  t.exports = function (t, n, e) {
    return r.forEach(e, function (e) {
      t = e(t, n)
    }), t
  }
}, function (t, n) {
  var e, r, i = t.exports = {};

  function o() {
    throw new Error("setTimeout has not been defined")
  }

  function u() {
    throw new Error("clearTimeout has not been defined")
  }

  function a(t) {
    if (e === setTimeout) return setTimeout(t, 0);
    if ((e === o || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
    try {
      return e(t, 0)
    } catch (n) {
      try {
        return e.call(null, t, 0)
      } catch (n) {
        return e.call(this, t, 0)
      }
    }
  }

  !function () {
    try {
      e = "function" == typeof setTimeout ? setTimeout : o
    } catch (t) {
      e = o
    }
    try {
      r = "function" == typeof clearTimeout ? clearTimeout : u
    } catch (t) {
      r = u
    }
  }();
  var c, f = [], s = !1, l = -1;

  function h() {
    s && c && (s = !1, c.length ? f = c.concat(f) : l = -1, f.length && d())
  }

  function d() {
    if (!s) {
      var t = a(h);
      s = !0;
      for (var n = f.length; n;) {
        for (c = f, f = []; ++l < n;) c && c[l].run();
        l = -1, n = f.length
      }
      c = null, s = !1, function (t) {
        if (r === clearTimeout) return clearTimeout(t);
        if ((r === u || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
        try {
          r(t)
        } catch (n) {
          try {
            return r.call(null, t)
          } catch (n) {
            return r.call(this, t)
          }
        }
      }(t)
    }
  }

  function p(t, n) {
    this.fun = t, this.array = n
  }

  function v() {
  }

  i.nextTick = function (t) {
    var n = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
    f.push(new p(t, n)), 1 !== f.length || s || a(d)
  }, p.prototype.run = function () {
    this.fun.apply(null, this.array)
  }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function (t) {
    return []
  }, i.binding = function (t) {
    throw new Error("process.binding is not supported")
  }, i.cwd = function () {
    return "/"
  }, i.chdir = function (t) {
    throw new Error("process.chdir is not supported")
  }, i.umask = function () {
    return 0
  }
}, function (t, n, e) {
  "use strict";
  var r = e(0);
  t.exports = function (t, n) {
    r.forEach(t, function (e, r) {
      r !== n && r.toUpperCase() === n.toUpperCase() && (t[n] = e, delete t[r])
    })
  }
}, function (t, n, e) {
  "use strict";
  var r = e(8);
  t.exports = function (t, n, e) {
    var i = e.config.validateStatus;
    !i || i(e.status) ? t(e) : n(r("Request failed with status code " + e.status, e.config, null, e.request, e))
  }
}, function (t, n, e) {
  "use strict";
  t.exports = function (t, n, e, r, i) {
    return t.config = n, e && (t.code = e), t.request = r, t.response = i, t.isAxiosError = !0, t.toJSON = function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code
      }
    }, t
  }
}, function (t, n, e) {
  "use strict";
  var r = e(0),
    i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
  t.exports = function (t) {
    var n, e, o, u = {};
    return t ? (r.forEach(t.split("\n"), function (t) {
      if (o = t.indexOf(":"), n = r.trim(t.substr(0, o)).toLowerCase(), e = r.trim(t.substr(o + 1)), n) {
        if (u[n] && i.indexOf(n) >= 0) return;
        u[n] = "set-cookie" === n ? (u[n] ? u[n] : []).concat([e]) : u[n] ? u[n] + ", " + e : e
      }
    }), u) : u
  }
}, function (t, n, e) {
  "use strict";
  var r = e(0);
  t.exports = r.isStandardBrowserEnv() ? function () {
    var t, n = /(msie|trident)/i.test(navigator.userAgent), e = document.createElement("a");

    function i(t) {
      var r = t;
      return n && (e.setAttribute("href", r), r = e.href), e.setAttribute("href", r), {
        href: e.href,
        protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
        host: e.host,
        search: e.search ? e.search.replace(/^\?/, "") : "",
        hash: e.hash ? e.hash.replace(/^#/, "") : "",
        hostname: e.hostname,
        port: e.port,
        pathname: "/" === e.pathname.charAt(0) ? e.pathname : "/" + e.pathname
      }
    }

    return t = i(window.location.href), function (n) {
      var e = r.isString(n) ? i(n) : n;
      return e.protocol === t.protocol && e.host === t.host
    }
  }() : function () {
    return !0
  }
}, function (t, n, e) {
  "use strict";
  var r = e(0);
  t.exports = r.isStandardBrowserEnv() ? {
    write: function (t, n, e, i, o, u) {
      var a = [];
      a.push(t + "=" + encodeURIComponent(n)), r.isNumber(e) && a.push("expires=" + new Date(e).toGMTString()), r.isString(i) && a.push("path=" + i), r.isString(o) && a.push("domain=" + o), !0 === u && a.push("secure"), document.cookie = a.join("; ")
    }, read: function (t) {
      var n = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return n ? decodeURIComponent(n[3]) : null
    }, remove: function (t) {
      this.write(t, "", Date.now() - 864e5)
    }
  } : {
    write: function () {
    }, read: function () {
      return null
    }, remove: function () {
    }
  }
}, function (t, n, e) {
  "use strict";
  t.exports = function (t) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
  }
}, function (t, n, e) {
  "use strict";
  t.exports = function (t, n) {
    return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t
  }
}, function (t, n, e) {
  "use strict";
  var r = e(10);

  function i(t) {
    if ("function" != typeof t) throw new TypeError("executor must be a function.");
    var n;
    this.promise = new Promise(function (t) {
      n = t
    });
    var e = this;
    t(function (t) {
      e.reason || (e.reason = new r(t), n(e.reason))
    })
  }

  i.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason
  }, i.source = function () {
    var t;
    return {
      token: new i(function (n) {
        t = n
      }), cancel: t
    }
  }, t.exports = i
}, function (t, n, e) {
  "use strict";
  t.exports = function (t) {
    return function (n) {
      return t.apply(null, n)
    }
  }
}, function (t, n, e) {
  "use strict";
  (function (t) {
    Object.defineProperty(n, "__esModule", {value: !0});
    var r = function () {
      function t(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }

      return function (n, e, r) {
        return e && t(n.prototype, e), r && t(n, r), n
      }
    }();
    e(1), e(11);
    var i, o = e(2), u = (i = o) && i.__esModule ? i : {default: i};
    var a = {
      el: void 0,
      count: 10,
      colors: ["#ffff00", "#ffe600", "#ffcc00", "#ffb300", "#ff9900", "#ff8000", "#ff6600", "#ff4d00", "#ff3300", "#ff1a00", "#ff0000"],
      width: void 0,
      height: void 0,
      fontSize: 24,
      label: {width: 32, height: 32}
    }, c = function (n) {
      function e(n) {
        !function (t, n) {
          if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var r = function (t, n) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !n || "object" != typeof n && "function" != typeof n ? t : n
        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
        return r.mergeOption(a), r.svgContainer = t.select(u.default.extractID(r.option)), r.labels = [], r.size = r.computeSize(), r.svg = r.svgContainer.append("svg").attr("width", r.size.width).attr("height", r.size.height), r.colorScale = r.option.colors.slice(0, r.option.count), r.isRender = !1, r.data = [], r
      }

      return function (t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        t.prototype = Object.create(n && n.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n)
      }(e, u.default), r(e, [{
        key: "remove", value: function () {
          this.svg.selectAll("*").remove(), this.isRender = !1
        }
      }, {
        key: "render", value: function (t) {
          this.data = t, this.computeSteps(t), this.isRender && this.remove(), this.isRender = !0;
          var n = this, e = this.svg.append("g").attr("id", "hotGradient-g"), r = function (t) {
              return parseInt(t)
            },
            i = e.append("text").text("FPKM:" + r(t[t.length - 1].value)).attr("font-size", this.option.fontSize + "px").attr("y", this.option.fontSize);
          e.selectAll("rect").data(this.colorScale).enter().append("rect").attr("x", function (t, e) {
            return n.option.label.width * e + i.node().getBBox().width
          }).attr("y", 0).attr("width", n.option.label.width).attr("height", n.option.label.height).attr("fill", function (t, e) {
            return n.colorScale[e]
          }), e.append("text").text(r(t[0].value)).attr("font-size", this.option.fontSize + "px").attr("y", this.option.fontSize).attr("x", function () {
            return n.option.count * n.option.label.width + i.node().getBBox().width
          })
        }
      }, {
        key: "computeSize", value: function () {
          return {
            width: this.option.width || this.option.label.width * this.option.count,
            height: this.option.height || this.option.label.height
          }
        }
      }, {
        key: "computeSteps", value: function (t) {
          for (var n = t[0].value, e = t[t.length - 1].value, r = (n - e) / (this.option.count - 1), i = 0; i < this.option.count; i++) this.labels[i] = e + r * i
        }
      }, {
        key: "getColor", value: function (t, n) {
          for (var e = 0; e < this.labels.length; e++) if (this.labels[e] >= n) return this.colorScale[e];
          return "#d9d9d9"
        }
      }, {
        key: "node", value: function () {
          return this.svg.node()
        }
      }]), e
    }();
    n.default = c
  }).call(this, e(1))
}, function (t, n, e) {
  "use strict";
  var r = function (t) {
    return function (t) {
      return !!t && "object" == typeof t
    }(t) && !function (t) {
      var n = Object.prototype.toString.call(t);
      return "[object RegExp]" === n || "[object Date]" === n || function (t) {
        return t.$$typeof === i
      }(t)
    }(t)
  };
  var i = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

  function o(t, n) {
    return !1 !== n.clone && n.isMergeableObject(t) ? f((e = t, Array.isArray(e) ? [] : {}), t, n) : t;
    var e
  }

  function u(t, n, e) {
    return t.concat(n).map(function (t) {
      return o(t, e)
    })
  }

  function a(t) {
    return Object.keys(t).concat(function (t) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function (n) {
        return t.propertyIsEnumerable(n)
      }) : []
    }(t))
  }

  function c(t, n, e) {
    var r = {};
    return e.isMergeableObject(t) && a(t).forEach(function (n) {
      r[n] = o(t[n], e)
    }), a(n).forEach(function (i) {
      e.isMergeableObject(n[i]) && t[i] ? r[i] = function (t, n) {
        if (!n.customMerge) return f;
        var e = n.customMerge(t);
        return "function" == typeof e ? e : f
      }(i, e)(t[i], n[i], e) : r[i] = o(n[i], e)
    }), r
  }

  function f(t, n, e) {
    (e = e || {}).arrayMerge = e.arrayMerge || u, e.isMergeableObject = e.isMergeableObject || r;
    var i = Array.isArray(n);
    return i === Array.isArray(t) ? i ? e.arrayMerge(t, n, e) : c(t, n, e) : o(n, e)
  }

  f.all = function (t, n) {
    if (!Array.isArray(t)) throw new Error("first argument should be an array");
    return t.reduce(function (t, e) {
      return f(t, e, n)
    }, {})
  };
  var s = f;
  t.exports = s
}, function (t, n, e) {
  "use strict";
  (function (t) {
    Object.defineProperty(n, "__esModule", {value: !0});
    var r = function () {
      function t(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }

      return function (n, e, r) {
        return e && t(n.prototype, e), r && t(n, r), n
      }
    }();
    e(1), e(11);
    var i, o = e(2), u = (i = o) && i.__esModule ? i : {default: i};
    var a = {
      el: void 0,
      count: 6,
      colors: ["#ffff00", "#ffe600", "#ffcc00", "#ffb300", "#ff9900", "#ff8000", "#ff6600", "#ff4d00", "#ff3300", "#ff1a00", "#ff0000"],
      width: void 0,
      height: void 0,
      fontSize: 24,
      label: {width: 32, height: 32}
    }, c = function (n) {
      function e(n) {
        !function (t, n) {
          if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var r = function (t, n) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !n || "object" != typeof n && "function" != typeof n ? t : n
        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
        return r.mergeOption(a), r.svgContainer = t.select(u.default.extractID(r.option)), r.labels = {}, r.size = r.computeSize(), r.svg = r.svgContainer.append("svg").attr("width", r.size.width).attr("height", r.size.height), r.colorScale = r.option.colors.slice(0, r.option.count), r.isRender = !1, r.data = [], r
      }

      return function (t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        t.prototype = Object.create(n && n.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n)
      }(e, u.default), r(e, [{
        key: "remove", value: function () {
          this.svg.selectAll("*").remove(), this.isRender = !1
        }
      }, {
        key: "render", value: function (t) {
          this.data = t;
          var n = Array.from(t.map(function (t) {
            return t.value
          })).reverse();
          this.computeSteps(n), this.isRender && this.remove(), this.isRender = !0;
          var e = this, r = this.svg.append("g").attr("id", "hotGradient-g"), i = t[t.length - 1].value,
            o = r.append("text").text("FPKM:" + (0 === i ? 0 : i.toFixed(4))).attr("font-size", this.option.fontSize + "px").attr("y", this.option.fontSize);
          r.selectAll("rect").data(this.colorScale).enter().append("rect").attr("x", function (t, n) {
            return e.option.label.width * n + o.node().getBBox().width
          }).attr("y", 0).attr("width", e.option.label.width).attr("height", e.option.label.height).attr("fill", function (t, n) {
            return e.colorScale[n]
          }), r.append("text").text(0 === t[0].value ? 0 : t[0].value.toFixed(4)).attr("font-size", this.option.fontSize + "px").attr("y", this.option.fontSize).attr("x", function () {
            return e.option.count * e.option.label.width + o.node().getBBox().width
          })
        }
      }, {
        key: "computeSize", value: function () {
          return {
            width: this.option.width || this.option.label.width * this.option.count,
            height: this.option.height || this.option.label.height
          }
        }
      }, {
        key: "computeSteps", value: function (t) {
          for (var n = Math.ceil(t.length / this.option.count), e = 0; e < this.option.count; e++) for (var r = 0; r < n && !(e * n + r >= t.length); r++) this.labels["" + t[e * n + r]] = this.colorScale[e]
        }
      }, {
        key: "getColor", value: function (t, n) {
          return 0 === n ? "#d9d9d9" : this.labels.hasOwnProperty("" + n) ? this.labels["" + n] : "#d9d9d9"
        }
      }, {
        key: "node", value: function () {
          return this.svg.node()
        }
      }]), e
    }();
    n.default = c
  }).call(this, e(1))
}, function (t, n, e) {
  "use strict";
  (function (t) {
    Object.defineProperty(n, "__esModule", {value: !0});
    var r = function () {
      function t(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }

      return function (n, e, r) {
        return e && t(n.prototype, e), r && t(n, r), n
      }
    }();
    n.vTok = function (t, n) {
      for (var e in t) if (t.hasOwnProperty(e) && t[e] === n) return e;
      return ""
    }, e(1);
    var i = u(e(37)), o = u(e(2));

    function u(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function a(t) {
      if (Array.isArray(t)) {
        for (var n = 0, e = Array(t.length); n < t.length; n++) e[n] = t[n];
        return e
      }
      return Array.from(t)
    }

    var c = {downloadable: !1, svgPath: void 0}, f = function (n) {
      function e(n) {
        !function (t, n) {
          if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var r = function (t, n) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !n || "object" != typeof n && "function" != typeof n ? t : n
        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
        return r.mergeOption(c, n), r.classes = null, r.dom = t.select(r.option.el), void 0 === r.option.svgPath && (console.warn("Pass the option.svgPath argument to constructor function"), alert("Pass the option.svgPath argument to constructor function")), r.svg = null, r.hotGradient = n.hotGradient, r.tooltip = null, r.load(), r.tooltip = r.dom.append("div").attr("class", "tooltip"), r.map = null, r.summary = {tissues: new Set}, r.isShowTooltip = !1, r.downloadName = void 0, r.renderDownloadBtn(r.option.downloadable), r
      }

      return function (t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        t.prototype = Object.create(n && n.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n)
      }(e, o.default), r(e, [{
        key: "load", value: function () {
          var n = this;
          this.removeAll(), t.xml(this.option.svgPath).then(function (t) {
            0 === n.dom.select("#svgViewerData").size() && (n.dom.node().append(t.documentElement), n.svg = n.dom.select("svg"), n.svg.attr("id", "svgViewerData").on("click", function () {
              n.hideTooltip()
            }))
          })
        }
      }, {
        key: "setTissues", value: function (t) {
          for (var n in this.classes = Object.values(t), this.map = t, this.map) this.summary.tissues.add(this.map[n].split("-")[0]);
          this.summary = {tissues: [].concat(a(this.summary.tissues))}
        }
      }, {
        key: "drawColor", value: function (n) {
          var e = this;
          t.selectAll("path").attr("fill", "#d9d9d9"), console.log(n);
          for (var r = this, i = n.map(function (t) {
            return t.color = r.hotGradient.getColor(t.tissue, t.value), t.class = r.map[t.tissue], t
          }), o = 0; o < i.length; o++) t.selectAll("." + i[o].class).selectAll("path").attr("fill", i[o].color);
          for (var u = function (n) {
            var r = i.filter(function (t) {
              return t.class.startsWith(e.summary.tissues[n])
            }).sort(function (t, n) {
              return n.value - t.value
            });
            e.summary[e.summary.tissues[n]] = r, t.selectAll("." + e.summary.tissues[n]).selectAll("path").attr("fill", r[0].color)
          }, a = 0; a < this.summary.tissues.length; a++) u(a)
        }
      }, {
        key: "bind", value: function (n, e) {
          for (var r = this, i = {}, o = 0; o < this.classes.length; o++) i[this.classes[o]] = n(this.classes[o]);
          for (var u = function (n, e, o) {
            r.showTooltip(), r.tooltip.html(i[o[0].className.baseVal]).style("left", t.event.offsetX + 20 + "px").style("top", t.event.offsetY + 20 + "px"), t.event.stopPropagation()
          }, a = 0; a < this.classes.length; a++) t.selectAll("." + this.classes[a]).style("cursor", "pointer").on("click", u);
          this.summaryBind(e)
        }
      }, {
        key: "summaryBind", value: function (n) {
          for (var e = this, r = {}, i = 0; i < this.summary.tissues.length; i++) r[this.summary.tissues[i]] = n(this.summary.tissues[i], this.summary[this.summary.tissues[i]]);
          for (var o = function (n, i, o) {
            e.showTooltip(), e.tooltip.html(r[o[0].className.baseVal]).style("left", t.event.offsetX + 20 + "px").style("top", t.event.offsetY + 20 + "px"), t.event.stopPropagation()
          }, u = 0; u < this.summary.tissues.length; u++) t.selectAll("." + this.summary.tissues[u]).style("cursor", "pointer").on("click", o)
        }
      }, {
        key: "refresh", value: function () {
          this.removeAll(), this.hideTooltip(), this.load()
        }
      }, {
        key: "removeAll", value: function () {
          this.dom.selectAll("svg").remove()
        }
      }, {
        key: "setDownloadName", value: function (t) {
          this.downloadName = t
        }
      }, {
        key: "hideTooltip", value: function () {
          this.tooltip.attr("class", "tooltip"), this.isShowTooltip = !1
        }
      }, {
        key: "showTooltip", value: function () {
          this.tooltip.attr("class", "viewer-info viewer-info-active"), this.isShowTooltip = !0
        }
      }, {
        key: "renderDownloadBtn", value: function (t) {
          if (t) {
            var n = this;
            this.dom.append("input").attr("class", "btn btn-primary").attr("type", "button").attr("value", "download SVG").on("click", function () {
              var t, e = n.dom.select("svg").node();
              e.insertAdjacentHTML("beforeend", n.hotGradient.node().innerHTML), new i.default(e, (t = n, t.downloadName || "expression.svg")).download(), n.dom.select("#hotGradient-g").remove()
            })
          }
        }
      }]), e
    }();
    n.default = f
  }).call(this, e(1))
}, function (t, n, e) {
  "use strict";
  Object.defineProperty(n, "__esModule", {value: !0});
  var r = function () {
    function t(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
      }
    }

    return function (n, e, r) {
      return e && t(n.prototype, e), r && t(n, r), n
    }
  }();
  var i = function () {
    function t(n, e) {
      !function (t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
      }(this, t), n.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      var r = n.outerHTML,
        i = new Blob(['<?xml version="1.0" standalone="no"?>\r\n', r], {type: "image/svg+xml;charset=utf-8"}),
        o = URL.createObjectURL(i);
      this.element = document.createElement("a"), this.element.href = o, this.element.download = e
    }

    return r(t, [{
      key: "download", value: function () {
        document.body.appendChild(this.element), this.element.click(), document.body.removeChild(this.element)
      }
    }]), t
  }();
  n.default = i
}, function (t, n, e) {
  var r = e(39);
  "string" == typeof r && (r = [[t.i, r, ""]]);
  var i = {hmr: !0, transform: void 0, insertInto: void 0};
  e(41)(r, i);
  r.locals && (t.exports = r.locals)
}, function (t, n, e) {
  (t.exports = e(40)(!1)).push([t.i, "#geneExample {\n  cursor: pointer; }\n\n#example {\n  text-align: center; }\n  #example #svgContainer {\n    padding: 4px;\n    display: inline-block; }\n\n#svgViewer {\n  padding: 10px;\n  width: 100%;\n  display: inline-block;\n  text-align: right;\n  position: relative; }\n  #svgViewer .viewer-info {\n    text-align: left;\n    background: #ffffff;\n    z-index: 9999 !important;\n    position: absolute;\n    white-space: nowrap;\n    padding: 5px;\n    left: 0;\n    top: 0;\n    display: none;\n    border-radius: 10px;\n    border: 2px solid green; }\n    #svgViewer .viewer-info p {\n      padding: 0;\n      margin: 0; }\n  #svgViewer .viewer-info-active {\n    display: inline-block; }\n  #svgViewer .viewer-info-inactive {\n    display: none; }\n", ""])
}, function (t, n) {
  t.exports = function (t) {
    var n = [];
    return n.toString = function () {
      return this.map(function (n) {
        var e = function (t, n) {
          var e = t[1] || "", r = t[3];
          if (!r) return e;
          if (n && "function" == typeof btoa) {
            var i = (u = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(u)))) + " */"),
              o = r.sources.map(function (t) {
                return "/*# sourceURL=" + r.sourceRoot + t + " */"
              });
            return [e].concat(o).concat([i]).join("\n")
          }
          var u;
          return [e].join("\n")
        }(n, t);
        return n[2] ? "@media " + n[2] + "{" + e + "}" : e
      }).join("")
    }, n.i = function (t, e) {
      "string" == typeof t && (t = [[null, t, ""]]);
      for (var r = {}, i = 0; i < this.length; i++) {
        var o = this[i][0];
        "number" == typeof o && (r[o] = !0)
      }
      for (i = 0; i < t.length; i++) {
        var u = t[i];
        "number" == typeof u[0] && r[u[0]] || (e && !u[2] ? u[2] = e : e && (u[2] = "(" + u[2] + ") and (" + e + ")"), n.push(u))
      }
    }, n
  }
}, function (t, n, e) {
  var r, i, o = {}, u = (r = function () {
    return window && document && document.all && !window.atob
  }, function () {
    return void 0 === i && (i = r.apply(this, arguments)), i
  }), a = function (t) {
    var n = {};
    return function (t) {
      if ("function" == typeof t) return t();
      if (void 0 === n[t]) {
        var e = function (t) {
          return document.querySelector(t)
        }.call(this, t);
        if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
          e = e.contentDocument.head
        } catch (t) {
          e = null
        }
        n[t] = e
      }
      return n[t]
    }
  }(), c = null, f = 0, s = [], l = e(42);

  function h(t, n) {
    for (var e = 0; e < t.length; e++) {
      var r = t[e], i = o[r.id];
      if (i) {
        i.refs++;
        for (var u = 0; u < i.parts.length; u++) i.parts[u](r.parts[u]);
        for (; u < r.parts.length; u++) i.parts.push(b(r.parts[u], n))
      } else {
        var a = [];
        for (u = 0; u < r.parts.length; u++) a.push(b(r.parts[u], n));
        o[r.id] = {id: r.id, refs: 1, parts: a}
      }
    }
  }

  function d(t, n) {
    for (var e = [], r = {}, i = 0; i < t.length; i++) {
      var o = t[i], u = n.base ? o[0] + n.base : o[0], a = {css: o[1], media: o[2], sourceMap: o[3]};
      r[u] ? r[u].parts.push(a) : e.push(r[u] = {id: u, parts: [a]})
    }
    return e
  }

  function p(t, n) {
    var e = a(t.insertInto);
    if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    var r = s[s.length - 1];
    if ("top" === t.insertAt) r ? r.nextSibling ? e.insertBefore(n, r.nextSibling) : e.appendChild(n) : e.insertBefore(n, e.firstChild), s.push(n); else if ("bottom" === t.insertAt) e.appendChild(n); else {
      if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
      var i = a(t.insertInto + " " + t.insertAt.before);
      e.insertBefore(n, i)
    }
  }

  function v(t) {
    if (null === t.parentNode) return !1;
    t.parentNode.removeChild(t);
    var n = s.indexOf(t);
    n >= 0 && s.splice(n, 1)
  }

  function y(t) {
    var n = document.createElement("style");
    return t.attrs.type = "text/css", g(n, t.attrs), p(t, n), n
  }

  function g(t, n) {
    Object.keys(n).forEach(function (e) {
      t.setAttribute(e, n[e])
    })
  }

  function b(t, n) {
    var e, r, i, o;
    if (n.transform && t.css) {
      if (!(o = n.transform(t.css))) return function () {
      };
      t.css = o
    }
    if (n.singleton) {
      var u = f++;
      e = c || (c = y(n)), r = x.bind(null, e, u, !1), i = x.bind(null, e, u, !0)
    } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (e = function (t) {
      var n = document.createElement("link");
      return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", g(n, t.attrs), p(t, n), n
    }(n), r = function (t, n, e) {
      var r = e.css, i = e.sourceMap, o = void 0 === n.convertToAbsoluteUrls && i;
      (n.convertToAbsoluteUrls || o) && (r = l(r));
      i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
      var u = new Blob([r], {type: "text/css"}), a = t.href;
      t.href = URL.createObjectURL(u), a && URL.revokeObjectURL(a)
    }.bind(null, e, n), i = function () {
      v(e), e.href && URL.revokeObjectURL(e.href)
    }) : (e = y(n), r = function (t, n) {
      var e = n.css, r = n.media;
      r && t.setAttribute("media", r);
      if (t.styleSheet) t.styleSheet.cssText = e; else {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(e))
      }
    }.bind(null, e), i = function () {
      v(e)
    });
    return r(t), function (n) {
      if (n) {
        if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) return;
        r(t = n)
      } else i()
    }
  }

  t.exports = function (t, n) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
    (n = n || {}).attrs = "object" == typeof n.attrs ? n.attrs : {}, n.singleton || "boolean" == typeof n.singleton || (n.singleton = u()), n.insertInto || (n.insertInto = "head"), n.insertAt || (n.insertAt = "bottom");
    var e = d(t, n);
    return h(e, n), function (t) {
      for (var r = [], i = 0; i < e.length; i++) {
        var u = e[i];
        (a = o[u.id]).refs--, r.push(a)
      }
      t && h(d(t, n), n);
      for (i = 0; i < r.length; i++) {
        var a;
        if (0 === (a = r[i]).refs) {
          for (var c = 0; c < a.parts.length; c++) a.parts[c]();
          delete o[a.id]
        }
      }
    }
  };
  var m, _ = (m = [], function (t, n) {
    return m[t] = n, m.filter(Boolean).join("\n")
  });

  function x(t, n, e, r) {
    var i = e ? "" : r.css;
    if (t.styleSheet) t.styleSheet.cssText = _(n, i); else {
      var o = document.createTextNode(i), u = t.childNodes;
      u[n] && t.removeChild(u[n]), u.length ? t.insertBefore(o, u[n]) : t.appendChild(o)
    }
  }
}, function (t, n) {
  t.exports = function (t) {
    var n = "undefined" != typeof window && window.location;
    if (!n) throw new Error("fixUrls requires window.location");
    if (!t || "string" != typeof t) return t;
    var e = n.protocol + "//" + n.host, r = e + n.pathname.replace(/\/[^\/]*$/, "/");
    return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, n) {
      var i, o = n.trim().replace(/^"(.*)"$/, function (t, n) {
        return n
      }).replace(/^'(.*)'$/, function (t, n) {
        return n
      });
      return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? t : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? e + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
    })
  }
}]);