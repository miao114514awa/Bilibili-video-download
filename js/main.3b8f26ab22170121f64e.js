/*! For license information please see main.3b8f26ab22170121f64e.js.LICENSE.txt */
(() => {
	function t(r) {
		return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		}, t(r)
	}

	function r(t, r) {
		return function(t) {
			if (Array.isArray(t)) return t
		}(t) || function(t, r) {
			var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
			if (null != e) {
				var n, o, i, a, c = [],
					u = !0,
					l = !1;
				try {
					if (i = (e = e.call(t)).next, 0 === r) {
						if (Object(e) !== e) return;
						u = !1
					} else
						for (; !(u = (n = i.call(e)).done) && (c.push(n.value), c.length !== r); u = !0);
				} catch (t) {
					l = !0, o = t
				} finally {
					try {
						if (!u && null != e.return && (a = e.return(), Object(a) !== a)) return
					} finally {
						if (l) throw o
					}
				}
				return c
			}
		}(t, r) || function(t, r) {
			if (t) {
				if ("string" == typeof t) return e(t, r);
				var n = {}.toString.call(t).slice(8, -1);
				return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? e(t, r) : void 0
			}
		}(t, r) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function e(t, r) {
		(null == r || r > t.length) && (r = t.length);
		for (var e = 0, n = Array(r); e < r; e++) n[e] = t[e];
		return n
	}

	function n() {
		"use strict";
		n = function() {
			return e
		};
		var r, e = {},
			o = Object.prototype,
			i = o.hasOwnProperty,
			a = Object.defineProperty || function(t, r, e) {
				t[r] = e.value
			},
			c = "function" == typeof Symbol ? Symbol : {},
			u = c.iterator || "@@iterator",
			l = c.asyncIterator || "@@asyncIterator",
			s = c.toStringTag || "@@toStringTag";

		function f(t, r, e) {
			return Object.defineProperty(t, r, {
				value: e,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), t[r]
		}
		try {
			f({}, "")
		} catch (r) {
			f = function(t, r, e) {
				return t[r] = e
			}
		}

		function h(t, r, e, n) {
			var o = r && r.prototype instanceof b ? r : b,
				i = Object.create(o.prototype),
				c = new V(n || []);
			return a(i, "_invoke", {
				value: _(t, e, c)
			}), i
		}

		function p(t, r, e) {
			try {
				return {
					type: "normal",
					arg: t.call(r, e)
				}
			} catch (t) {
				return {
					type: "throw",
					arg: t
				}
			}
		}
		e.wrap = h;
		var d = "suspendedStart",
			v = "suspendedYield",
			y = "executing",
			w = "completed",
			m = {};

		function b() {}

		function g() {}

		function x() {}
		var L = {};
		f(L, u, (function() {
			return this
		}));
		var j = Object.getPrototypeOf,
			E = j && j(j(A([])));
		E && E !== o && i.call(E, u) && (L = E);
		var k = x.prototype = b.prototype = Object.create(L);

		function O(t) {
			["next", "throw", "return"].forEach((function(r) {
				f(t, r, (function(t) {
					return this._invoke(r, t)
				}))
			}))
		}

		function S(r, e) {
			function n(o, a, c, u) {
				var l = p(r[o], r, a);
				if ("throw" !== l.type) {
					var s = l.arg,
						f = s.value;
					return f && "object" == t(f) && i.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
						n("next", t, c, u)
					}), (function(t) {
						n("throw", t, c, u)
					})) : e.resolve(f).then((function(t) {
						s.value = t, c(s)
					}), (function(t) {
						return n("throw", t, c, u)
					}))
				}
				u(l.arg)
			}
			var o;
			a(this, "_invoke", {
				value: function(t, r) {
					function i() {
						return new e((function(e, o) {
							n(t, r, e, o)
						}))
					}
					return o = o ? o.then(i, i) : i()
				}
			})
		}

		function _(t, e, n) {
			var o = d;
			return function(i, a) {
				if (o === y) throw Error("Generator is already running");
				if (o === w) {
					if ("throw" === i) throw a;
					return {
						value: r,
						done: !0
					}
				}
				for (n.method = i, n.arg = a;;) {
					var c = n.delegate;
					if (c) {
						var u = I(c, n);
						if (u) {
							if (u === m) continue;
							return u
						}
					}
					if ("next" === n.method) n.sent = n._sent = n.arg;
					else if ("throw" === n.method) {
						if (o === d) throw o = w, n.arg;
						n.dispatchException(n.arg)
					} else "return" === n.method && n.abrupt("return", n.arg);
					o = y;
					var l = p(t, e, n);
					if ("normal" === l.type) {
						if (o = n.done ? w : v, l.arg === m) continue;
						return {
							value: l.arg,
							done: n.done
						}
					}
					"throw" === l.type && (o = w, n.method = "throw", n.arg = l.arg)
				}
			}
		}

		function I(t, e) {
			var n = e.method,
				o = t.iterator[n];
			if (o === r) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", e.arg = r, I(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), m;
			var i = p(o, t.iterator, e.arg);
			if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, m;
			var a = i.arg;
			return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = r), e.delegate = null, m) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, m)
		}

		function P(t) {
			var r = {
				tryLoc: t[0]
			};
			1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
		}

		function U(t) {
			var r = t.completion || {};
			r.type = "normal", delete r.arg, t.completion = r
		}

		function V(t) {
			this.tryEntries = [{
				tryLoc: "root"
			}], t.forEach(P, this), this.reset(!0)
		}

		function A(e) {
			if (e || "" === e) {
				var n = e[u];
				if (n) return n.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) {
					var o = -1,
						a = function t() {
							for (; ++o < e.length;)
								if (i.call(e, o)) return t.value = e[o], t.done = !1, t;
							return t.value = r, t.done = !0, t
						};
					return a.next = a
				}
			}
			throw new TypeError(t(e) + " is not iterable")
		}
		return g.prototype = x, a(k, "constructor", {
			value: x,
			configurable: !0
		}), a(x, "constructor", {
			value: g,
			configurable: !0
		}), g.displayName = f(x, s, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
			var r = "function" == typeof t && t.constructor;
			return !!r && (r === g || "GeneratorFunction" === (r.displayName || r.name))
		}, e.mark = function(t) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, f(t, s, "GeneratorFunction")), t.prototype = Object.create(k), t
		}, e.awrap = function(t) {
			return {
				__await: t
			}
		}, O(S.prototype), f(S.prototype, l, (function() {
			return this
		})), e.AsyncIterator = S, e.async = function(t, r, n, o, i) {
			void 0 === i && (i = Promise);
			var a = new S(h(t, r, n, o), i);
			return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
				return t.done ? t.value : a.next()
			}))
		}, O(k), f(k, s, "Generator"), f(k, u, (function() {
			return this
		})), f(k, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(t) {
			var r = Object(t),
				e = [];
			for (var n in r) e.push(n);
			return e.reverse(),
				function t() {
					for (; e.length;) {
						var n = e.pop();
						if (n in r) return t.value = n, t.done = !1, t
					}
					return t.done = !0, t
				}
		}, e.values = A, V.prototype = {
			constructor: V,
			reset: function(t) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(U), !t)
					for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
			},
			stop: function() {
				this.done = !0;
				var t = this.tryEntries[0].completion;
				if ("throw" === t.type) throw t.arg;
				return this.rval
			},
			dispatchException: function(t) {
				if (this.done) throw t;
				var e = this;

				function n(n, o) {
					return c.type = "throw", c.arg = t, e.next = n, o && (e.method = "next", e.arg = r), !!o
				}
				for (var o = this.tryEntries.length - 1; o >= 0; --o) {
					var a = this.tryEntries[o],
						c = a.completion;
					if ("root" === a.tryLoc) return n("end");
					if (a.tryLoc <= this.prev) {
						var u = i.call(a, "catchLoc"),
							l = i.call(a, "finallyLoc");
						if (u && l) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						} else if (u) {
							if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
						} else {
							if (!l) throw Error("try statement without catch or finally");
							if (this.prev < a.finallyLoc) return n(a.finallyLoc)
						}
					}
				}
			},
			abrupt: function(t, r) {
				for (var e = this.tryEntries.length - 1; e >= 0; --e) {
					var n = this.tryEntries[e];
					if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
						var o = n;
						break
					}
				}
				o && ("break" === t || "continue" === t) && o.tryLoc <= r && r <= o.finallyLoc && (o = null);
				var a = o ? o.completion : {};
				return a.type = t, a.arg = r, o ? (this.method = "next", this.next = o.finallyLoc, m) : this.complete(a)
			},
			complete: function(t, r) {
				if ("throw" === t.type) throw t.arg;
				return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), m
			},
			finish: function(t) {
				for (var r = this.tryEntries.length - 1; r >= 0; --r) {
					var e = this.tryEntries[r];
					if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), U(e), m
				}
			},
			catch: function(t) {
				for (var r = this.tryEntries.length - 1; r >= 0; --r) {
					var e = this.tryEntries[r];
					if (e.tryLoc === t) {
						var n = e.completion;
						if ("throw" === n.type) {
							var o = n.arg;
							U(e)
						}
						return o
					}
				}
				throw Error("illegal catch attempt")
			},
			delegateYield: function(t, e, n) {
				return this.delegate = {
					iterator: A(t),
					resultName: e,
					nextLoc: n
				}, "next" === this.method && (this.arg = r), m
			}
		}, e
	}

	function o(t, r, e, n, o, i, a) {
		try {
			var c = t[i](a),
				u = c.value
		} catch (t) {
			return void e(t)
		}
		c.done ? r(u) : Promise.resolve(u).then(n, o)
	}

	function i(t) {
		return function() {
			var r = this,
				e = arguments;
			return new Promise((function(n, i) {
				var a = t.apply(r, e);

				function c(t) {
					o(a, n, i, c, u, "next", t)
				}

				function u(t) {
					o(a, n, i, c, u, "throw", t)
				}
				c(void 0)
			}))
		}
	}
	var a = ["https://api.injahow.cn/bparse/", "https://jx.jsonplayer.com/player/", "https://jx.bozrc.com:4433/player/", "https://jx.parwix.com:4433/player/"];
	window.getBiliVideoInfo = function() {
		var t = i(n().mark((function t(r) {
			var e, o, i, a;
			return n().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						if (o = null === (e = r.match(/BV\w+/)) || void 0 === e ? void 0 : e[0]) {
							t.next = 3;
							break
						}
						throw new Error("无法从URL中获取BV号，请确保输入了正确的B站视频URL");
					case 3:
						return t.prev = 3, t.next = 6, fetch("https://api.bilibili.com/x/web-interface/view?bvid=".concat(o));
					case 6:
						return i = t.sent, t.next = 9, i.json();
					case 9:
						if (0 !== (a = t.sent).code || !a.data) {
							t.next = 14;
							break
						}
						return t.abrupt("return", {
							bvid: a.data.bvid,
							title: a.data.title,
							pic: a.data.pic,
							aid: a.data.aid,
							cid: a.data.cid
						});
					case 14:
						return t.abrupt("return", {
							bvid: o,
							aid: null,
							cid: null
						});
					case 15:
						t.next = 21;
						break;
					case 17:
						return t.prev = 17, t.t0 = t.catch(3), t.abrupt("return", {
							bvid: o,
							aid: null,
							cid: null
						});
					case 21:
					case "end":
						return t.stop()
				}
			}), t, null, [
				[3, 17]
			])
		})));
		return function(r) {
			return t.apply(this, arguments)
		}
	}(), window.getVideoUrl = function() {
		var t = i(n().mark((function t(e, o, i) {
			var a, c, u, l;
			return n().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						return a = {
							otype: "json",
							platform: "html5",
							avid: e,
							cid: o,
							qn: i,
							fnver: 0,
							fnval: 1,
							high_quality: 1
						}, c = Object.entries(a).map((function(t) {
							var e = r(t, 2),
								n = e[0],
								o = e[1];
							return "".concat(n, "=").concat(o)
						})).join("&"), t.next = 5, fetch("".concat("https://api.bilibili.com/x/player/playurl", "?").concat(c), {
							credentials: "include"
						});
					case 5:
						return u = t.sent, t.next = 8, u.json();
					case 8:
						if (0 === (l = t.sent).code) {
							t.next = 12;
							break
						}
						throw new Error(l.message || "获取下载地址失败");
					case 12:
						return t.abrupt("return", l.data.durl[0].url);
					case 13:
					case "end":
						return t.stop()
				}
			}), t)
		})));
		return function(r, e, n) {
			return t.apply(this, arguments)
		}
	}(), window.parseVideoUrl = function() {
		var t = i(n().mark((function t(r) {
			var e, o, i, c, u, l = arguments;
			return n().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						if (!((e = l.length > 1 && void 0 !== l[1] ? l[1] : 0) >= a.length)) {
							t.next = 3;
							break
						}
						throw new Error("所有解析接口都失败了");
					case 3:
						return t.prev = 3, i = "".concat(a[e], "?bv=").concat(r), t.next = 8, fetch(i);
					case 8:
						return c = t.sent, t.next = 11, c.json();
					case 11:
						if ((u = t.sent).url || null !== (o = u.data) && void 0 !== o && o.url) {
							t.next = 14;
							break
						}
						throw new Error("解析接口返回数据格式错误");
					case 14:
						return t.abrupt("return", u.url || u.data.url);
					case 17:
						return t.prev = 17, t.t0 = t.catch(3), t.abrupt("return", parseVideoUrl(r, e + 1));
					case 21:
					case "end":
						return t.stop()
				}
			}), t, null, [
				[3, 17]
			])
		})));
		return function(r) {
			return t.apply(this, arguments)
		}
	}(), window.constructDownloadInfo = function() {
		var t = i(n().mark((function t(r) {
			var e, o;
			return n().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						return t.prev = 0, t.next = 3, getBiliVideoInfo(r);
					case 3:
						if (!(e = t.sent).aid || !e.cid) {
							t.next = 16;
							break
						}
						return t.prev = 6, t.next = 9, getVideoUrl(e.aid, e.cid, 80);
					case 9:
						o = t.sent, t.next = 16;
						break;
					case 13:
						t.prev = 13, t.t0 = t.catch(6);
					case 16:
						if (o) {
							t.next = 20;
							break
						}
						return t.next = 19, parseVideoUrl(e.bvid);
					case 19:
						o = t.sent;
					case 20:
						return t.abrupt("return", {
							bvid: e.bvid,
							downloadUrl: o,
							title: e.title,
							pic: e.pic
						});
					case 23:
						throw t.prev = 23, t.t1 = t.catch(0), t.t1;
					case 27:
					case "end":
						return t.stop()
				}
			}), t, null, [
				[0, 23],
				[6, 13]
			])
		})));
		return function(r) {
			return t.apply(this, arguments)
		}
	}(), window.BiliDownloader = {}
})();