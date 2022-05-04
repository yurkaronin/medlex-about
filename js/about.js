!(function o(s, a, u) {
  function c(e, t) {
    if (!a[e]) {
      if (!s[e]) {
        var n = "function" == typeof require && require;
        if (!t && n) return n(e, !0);
        if (l) return l(e, !0);
        var i = new Error("Cannot find module '" + e + "'");
        throw ((i.code = "MODULE_NOT_FOUND"), i);
      }
      var r = (a[e] = { exports: {} });
      s[e][0].call(
        r.exports,
        function (t) {
          return c(s[e][1][t] || t);
        },
        r,
        r.exports,
        o,
        s,
        a,
        u
      );
    }
    return a[e].exports;
  }
  for (
    var l = "function" == typeof require && require, t = 0;
    t < u.length;
    t++
  )
    c(u[t]);
  return c;
})(
  {
    1: [
      function (t, e, n) {
        "use strict";
        var i = t("utilities/passiveEvents"),
          r = void 0,
          o = void 0,
          s = void 0;
        function a() {
          o =
            r.getBoundingClientRect().top +
            (window.scrollY || window.pageYOffset) -
            window.innerHeight / 2;
        }
        function u() {
          requestAnimationFrame(a);
        }
        (n.init = function () {
          (r = document.querySelector("#aboutUS")),
            a(),
            window.addEventListener(
              "resize",
              u,
              !!i.status() && { passive: !0 }
            );
        }),
          (n.activate = function () {
            (s = !0),
              r.classList.add("aboutUS-is-active"),
              window.removeEventListener("resize", u);
          }),
          (n.isActive = function () {
            return s;
          }),
          (n.isPassed = function (t) {
            return o < t;
          });
      },
      { "utilities/passiveEvents": 21 },
    ],
    2: [
      function (t, e, n) {
        "use strict";
        e.exports = function () {
          var n = document.querySelector("#aboutCertificateOverlay"),
            i = document.querySelector("#aboutCertificateImage"),
            t = document.querySelector("#aboutDocumentList"),
            r = void 0;
          function o(t) {
            var e;
            r
              ? ((r = !1),
                document.body.classList.remove("body-is-stuck"),
                n.classList.remove("aboutCertificateOverlay-is-active"))
              : ((e = t),
                (r = !0),
                (i.src = e),
                document.body.classList.add("body-is-stuck"),
                n.classList.add("aboutCertificateOverlay-is-active"));
          }
          function e(t) {
            t.preventDefault();
            var e,
              n = t.target;
            ((e = n).classList.contains("aboutCetrificateClose") ||
              e.classList.contains("aboutCertificateOverlay")) &&
              o();
          }
          function s(t) {
            var e = t.target;
            e.classList.contains("aboutDocLink") &&
              (t.preventDefault(), o(e.href));
          }
          n.addEventListener("click", e),
            n.addEventListener("touchstart", e),
            t.addEventListener("click", s);
        };
      },
      {},
    ],
    3: [
      function (t, e, n) {
        "use strict";
        var i = t("deptsNarrow"),
          r = t("deptsWide");
        e.exports = function () {
          var t = [].slice.call(document.querySelectorAll(".aboutDept"));
          900 < window.innerWidth ? r(t) : i(t);
        };
      },
      { deptsNarrow: 4, deptsWide: 5 },
    ],
    4: [
      function (t, e, n) {
        "use strict";
        var v = t("patterns/tx-slider");
        e.exports = function (n) {
          var t = document.querySelector("#aboutDeptLinks"),
            e = n.length,
            i = document.querySelector("#aboutDeptsPrev"),
            r = document.querySelector("#aboutDeptsNext"),
            o = void 0,
            s = void 0,
            a = void 0;
          function u(t) {
            n[(a = t)].classList.add("aboutDept-is-active");
          }
          function c() {
            var t, e;
            n[a].classList.remove("aboutDept-is-active"),
              u(s.current()),
              (t = s.current()),
              (e = s.max()),
              0 === t
                ? (i.classList.add("aboutDeptsPrev-is-disabled"),
                  r.classList.remove("aboutDeptsNext-is-disabled"))
                : t === e
                ? (i.classList.remove("aboutDeptsPrev-is-disabled"),
                  r.classList.add("aboutDeptsNext-is-disabled"))
                : (i.classList.remove("aboutDeptsPrev-is-disabled"),
                  r.classList.remove("aboutDeptsNext-is-disabled"));
          }
          function l(t) {
            t.preventDefault(), s.prev();
          }
          function d(t) {
            t.preventDefault(), s.next();
          }
          (o = v.dots(e, "js-sliderNavigation", "js-sliderNavigationPage")),
            (s = v.init(t, o, "js-sliderNavigationPage")),
            o.classList.add("aboutDeptsDots"),
            s.object().parentElement.appendChild(o),
            s.object().addEventListener("gallery:swipe", c),
            i.addEventListener("click", l),
            i.addEventListener("touchstart", l),
            r.addEventListener("click", d),
            r.addEventListener("touchstart", d),
            u(0);
        };
      },
      { "patterns/tx-slider": 14 },
    ],
    5: [
      function (t, e, n) {
        "use strict";
        var r = t("utilities/passiveEvents");
        e.exports = function (t) {
          var n = void 0;
          function e(t) {
            var e = t.target;
            clearTimeout(n),
              (n = setTimeout(function () {
                e.classList.add("aboutDept-is-active");
              }, 50));
          }
          function i(t) {
            var e = t.target;
            clearTimeout(n), e.classList.remove("aboutDept-is-active");
          }
          t.forEach(function (t) {
            t.addEventListener(
              "mouseenter",
              e,
              !!r.status() && { passive: !0 }
            ),
              t.addEventListener(
                "mouseleave",
                i,
                !!r.status() && { passive: !0 }
              );
          });
        };
      },
      { "utilities/passiveEvents": 21 },
    ],
    6: [
      function (t, e, n) {
        "use strict";
        var q = t("galleryNavWide"),
          x = t("galleryNavNarrow"),
          _ = t("patterns/tx-slider"),
          k = t("patterns/tx-event");
        e.exports = function () {
          var i = document.querySelector("#aboutGalleryOverlay"),
            t = document.querySelector("#aboutGallerySlider"),
            n = [].slice.call(
              document.querySelectorAll(".aboutGallerySliderItemHolder")
            ),
            e = n.length,
            r = document.querySelector("#aboutGallerySliderPrev"),
            o = document.querySelector("#aboutGallerySliderNext"),
            s = document.querySelector("#aboutGallerySliderClose"),
            a = document.querySelector("#aboutGallerySliderCurrent"),
            u = document.querySelector("#aboutGalleryHolder"),
            c = void 0,
            l = void 0,
            d = void 0,
            v = void 0,
            f = void 0;
          function m() {
            (d = !0),
              document.body.classList.add("body-is-stuck"),
              i.classList.add("aboutGalleryOverlay-is-active");
          }
          function p() {
            d
              ? ((d = !1),
                document.body.classList.remove("body-is-stuck"),
                i.classList.remove("aboutGalleryOverlay-is-active"))
              : m();
          }
          function h(t) {
            var e = t.querySelector(".aboutGallerySliderImage");
            e.src = e.getAttribute("data-src");
          }
          function y(t, e) {
            e && !f && ((f = !0), n.forEach(h)),
              n[(v = t)].classList.add(
                "aboutGallerySliderItemHolder-is-active"
              ),
              (a.textContent = t + 1);
          }
          function b() {
            var t, e;
            n[v].classList.remove("aboutGallerySliderItemHolder-is-active"),
              y(l.current()),
              (t = l.current()),
              (e = l.max()),
              0 === t
                ? (r.classList.add("aboutGallerySliderPrev-is-disabled"),
                  o.classList.remove("aboutGallerySliderNext-is-disabled"))
                : t === e
                ? (r.classList.remove("aboutGallerySliderPrev-is-disabled"),
                  o.classList.add("aboutGallerySliderNext-is-disabled"))
                : (r.classList.remove("aboutGallerySliderPrev-is-disabled"),
                  o.classList.remove("aboutGallerySliderNext-is-disabled"));
          }
          function g(t) {
            t.preventDefault(), l.prev();
          }
          function L(t) {
            t.preventDefault(), l.next();
          }
          function w(t) {
            t.preventDefault(), p();
          }
          function E(t) {
            var e = parseInt(t.data.index, 10);
            l.set(e), y(e, !0), m();
          }
          function S(t) {
            t.preventDefault(),
              (function (t) {
                var e = t.target;
                if (e.classList.contains("aboutGalleryLink")) {
                  var n = e.getAttribute("data-index");
                  k.trigger(i, "gallery:show", !1, "UIEvent", { index: n });
                }
              })(t);
          }
          (c = _.dots(e, "js-sliderNavigation", "js-sliderNavigationPage")),
            (l = _.init(t, c, "js-sliderNavigationPage")),
            y(0, !1),
            l.set(0),
            l.object().addEventListener("gallery:swipe", b),
            r.addEventListener("click", g),
            r.addEventListener("touchstart", g),
            o.addEventListener("click", L),
            o.addEventListener("touchstart", L),
            s.addEventListener("click", w),
            s.addEventListener("touchstart", w),
            i.addEventListener("gallery:show", E),
            u.addEventListener("click", S),
            900 < window.innerWidth ? q() : x();
        };
      },
      {
        galleryNavNarrow: 7,
        galleryNavWide: 8,
        "patterns/tx-event": 13,
        "patterns/tx-slider": 14,
      },
    ],
    7: [
      function (t, e, n) {
        "use strict";
        var r = t("utilities/passiveEvents"),
          o = window.innerWidth - 40,
          s = 4.23 * o;
        e.exports = function () {
          var n = document.querySelector("#aboutGalleryNavHandler"),
            i = document.querySelector("#aboutGalleryHolder");
          function t() {
            requestAnimationFrame(function () {
              var t,
                e = i.scrollLeft;
              (t = e / s),
                (n.style.transform = "translateX(" + (o - 30) * t + "px)");
            });
          }
          i.addEventListener("scroll", t, !!r.status() && { passive: !0 });
        };
      },
      { "utilities/passiveEvents": 21 },
    ],
    8: [
      function (t, e, n) {
        "use strict";
        var y = t("utilities/passiveEvents");
        e.exports = function () {
          var e = document.querySelector("#aboutGalleryNavHandler"),
            t = document.querySelector("#aboutGalleryNav"),
            n = document.querySelector("#aboutGalleryHolder"),
            i = 0,
            r = void 0,
            o = void 0,
            s = void 0;
          function a(t) {
            return t.touches ? t.touches[0].clientX : t.clientX;
          }
          function u() {
            e.style.transform = "translateX(" + r + "px)";
          }
          function c() {
            227.5 < r
              ? ((r = 455),
                e.classList.add("aboutGalleryNavHandler-is-reversed"))
              : ((r = 0),
                e.classList.remove("aboutGalleryNavHandler-is-reversed")),
              (i = r),
              e.classList.add("aboutGalleryNavHandler-is-sliding"),
              u();
          }
          function l() {
            n.className =
              227.5 < r
                ? "aboutGalleryHolder aboutGalleryHolder-is-end"
                : "aboutGalleryHolder aboutGalleryHolder-is-beginning";
          }
          function d() {
            (r = 455 <= i ? 0 : 455), c();
          }
          function v(t) {
            e.removeEventListener("click", p),
              (s = a(t)),
              (r = i + (s - o)) < 0 ? (r = 0) : 455 < r && (r = 455),
              u();
          }
          function f(t) {
            t.preventDefault(),
              e.addEventListener("click", p),
              c(),
              l(),
              document.removeEventListener("mousemove", v),
              document.removeEventListener("mouseup", f),
              document.removeEventListener("touchmove", v),
              document.removeEventListener("touchup", f);
          }
          function m(t) {
            t.preventDefault(),
              (o = a(t)),
              e.classList.remove("aboutGalleryNavHandler-is-sliding"),
              document.addEventListener(
                "mousemove",
                v,
                !!y.status() && { passive: !0 }
              ),
              document.addEventListener("mouseup", f),
              document.addEventListener(
                "touchmove",
                v,
                !!y.status() && { passive: !0 }
              ),
              document.addEventListener("touchup", f);
          }
          function p(t) {
            t.preventDefault(), d(), l();
          }
          function h(t) {
            t.preventDefault();
            var e = t.target;
            e.classList.contains("aboutGalleryNav") && (d(), l());
          }
          e.addEventListener("mousedown", m),
            e.addEventListener("touchstart", m),
            e.addEventListener("click", p),
            t.addEventListener("click", h),
            t.addEventListener("touch", h);
        };
      },
      { "utilities/passiveEvents": 21 },
    ],
    9: [
      function (t, e, n) {
        "use strict";
        var f = t("utilities/animationPerpetual"),
          m = 1500;
        e.exports = function () {
          var e = document.querySelector("#aboutLabBubble01"),
            n = document.querySelector("#aboutLabBubble02"),
            i = document.querySelector("#aboutLabBubble03"),
            r = document.querySelector("#aboutLabBubble04"),
            o = document.querySelector("#aboutLabBubble05"),
            s = document.querySelector("#aboutLabBubble06"),
            a = document.querySelector("#aboutLabBubble07"),
            u = document.querySelector("#aboutLabBubble08"),
            c = document.querySelector("#aboutLabBubble09"),
            l = document.querySelector("#aboutLabBubble10");
          function d(t, e) {
            e.setAttribute("transform", "translate(0 " + -120 * t + ")");
          }
          function v(t, e) {
            e.setAttribute("transform", "translate(0 " + -120 * t + ")"),
              e.setAttribute("r", "" + 5 * (1 - 0.7 * t));
          }
          setTimeout(function () {
            requestAnimationFrame(function () {
              f(m, function (t) {
                return d(t, e);
              }),
                setTimeout(function () {
                  return f(m, function (t) {
                    return d(t, n);
                  });
                }, 375),
                setTimeout(function () {
                  return f(m, function (t) {
                    return d(t, i);
                  });
                }, 750),
                setTimeout(function () {
                  return f(m, function (t) {
                    return d(t, r);
                  });
                }, 1125),
                f(m, function (t) {
                  return v(t, o);
                }),
                setTimeout(function () {
                  return f(m, function (t) {
                    return v(t, s);
                  });
                }, 240),
                setTimeout(function () {
                  return f(m, function (t) {
                    return v(t, a);
                  });
                }, 480),
                setTimeout(function () {
                  return f(m, function (t) {
                    return v(t, u);
                  });
                }, 720),
                setTimeout(function () {
                  return f(m, function (t) {
                    return v(t, c);
                  });
                }, 960),
                setTimeout(function () {
                  return f(m, function (t) {
                    return v(t, l);
                  });
                }, 1200);
            });
          }, 1e3);
        };
      },
      { "utilities/animationPerpetual": 20 },
    ],
    10: [
      function (t, e, n) {
        "use strict";
        var f = t("patterns/tx-slider");
        e.exports = function () {
          var o = [].slice.call(document.querySelectorAll(".aboutPartner")),
            s = document.querySelector("#aboutPartners"),
            t = document.querySelector("#aboutPartnersPrev"),
            e = document.querySelector("#aboutPartnersNext"),
            a = 900 < window.innerWidth ? 18 : 6,
            n = Math.ceil(o.length / a),
            i = void 0,
            r = void 0,
            u = void 0;
          function c(t) {
            var e = t * a,
              n = e + a,
              i = o.slice(e, n),
              r = document.createElement("div");
            r.classList.add("aboutPartnersPage"),
              i.forEach(function (t) {
                return r.appendChild(t);
              }),
              s.appendChild(r);
          }
          function l(t) {
            var e = t.target;
            if (e.classList.contains("js-dotsPage")) {
              var n = u.indexOf(e);
              i.slide(n);
            }
          }
          function d(t) {
            t.preventDefault(), t.stopPropagation(), i.prev();
          }
          function v(t) {
            t.preventDefault(), t.stopPropagation(), i.next();
          }
          !(function () {
            for (var t = 0; t < n; ) c(t), (t += 1);
          })(),
            (r = f.dots(n, "js-sliderNavigation", "js-sliderNavigationPage")),
            (i = f.init(s, r, "js-sliderNavigationPage")),
            r.classList.add("aboutPartnersDots"),
            i.object().parentElement.appendChild(r),
            (u = [].slice.call(r.children)),
            r.addEventListener("click", l),
            r.addEventListener("touchstart", l),
            t.addEventListener("click", d),
            e.addEventListener("click", v);
        };
      },
      { "patterns/tx-slider": 14 },
    ],
    11: [
      function (t, e, n) {
        "use strict";
        var i = t("utilities/passiveEvents"),
          r = void 0,
          o = void 0,
          s = void 0,
          a = void 0,
          u = void 0,
          c = void 0;
        function l() {
          var t = r.getBoundingClientRect();
          (u =
            t.top +
            (window.scrollY || window.pageYOffset) -
            window.innerHeight / 2),
            (c = u + t.height);
        }
        function d() {
          requestAnimationFrame(l);
        }
        (n.init = function () {
          (r = document.querySelector("#aboutMission")),
            (o = document.querySelector("#aboutMissionContent")),
            (s = document.querySelector("#aboutMissionText")),
            (a = document.querySelector("#aboutMissionImage")),
            l(),
            window.addEventListener(
              "resize",
              d,
              !!i.status() && { passive: !0 }
            );
        }),
          (n.update = function (t) {
            var e, n;
            u <= (n = t) && n <= c
              ? ((e = (t - u) / (c - u)),
                (s.style.opacity = e),
                (a.style.opacity = 1 - e),
                o.classList.add("aboutMissionContent-is-stuck"),
                o.classList.remove("aboutMissionContent-is-unstuckDown"))
              : t < u
              ? ((a.style.opacity = 1),
                (s.style.opacity = 0),
                o.classList.remove("aboutMissionContent-is-stuck"),
                o.classList.remove("aboutMissionContent-is-unstuckDown"))
              : ((a.style.opacity = 0),
                (s.style.opacity = 1),
                o.classList.remove("aboutMissionContent-is-stuck"),
                o.classList.add("aboutMissionContent-is-unstuckDown"));
          });
      },
      { "utilities/passiveEvents": 21 },
    ],
    12: [
      function (t, e, n) {
        "use strict";
        e.exports = function (t) {
          var e = document.createElement("div");
          return (e.innerHTML = t), e.firstChild;
        };
      },
      {},
    ],
    13: [
      function (t, e, n) {
        "use strict";
        function p(t, e) {
          var n = t;
          return (n.data = e), n;
        }
        (n.getData = function (t) {
          return t.data;
        }),
          (n.bind = function (t, e, n) {
            t.addEventListener(e, n);
          }),
          (n.unbind = function (t, e, n) {
            t.removeEventListener(e, n);
          }),
          (n.trigger = function (t, e) {
            var n,
              i,
              r,
              o,
              s,
              a,
              u,
              c,
              l,
              d,
              v =
                2 < arguments.length && void 0 !== arguments[2] && arguments[2],
              f =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : "MouseEvents",
              m = arguments[4];
            document.createEvent
              ? ((s = t),
                (a = e),
                (u = v),
                (c = f),
                (l = m),
                (d = document.createEvent(c)),
                l && p(d, l),
                d.initEvent(a, u, !1),
                s.dispatchEvent(d))
              : ((n = t),
                (i = e),
                (r = m),
                (o = document.createEventObject()),
                r && p(o, r),
                n.fireEvent("on" + i, o));
          }),
          (n.target = function (t) {
            return t.target;
          });
      },
      {},
    ],
    14: [
      function (t, e, n) {
        "use strict";
        var Z = t("./tx-event"),
          r = t("./tx-createNode"),
          K = t("./tx-transition")("transition", "end"),
          J = t("./tx-translate").css,
          Q = "slider-is-fixing",
          $ = "slider-is-changing",
          tt = "gallery:swipe",
          et = "-is-active",
          o = "js-dotsPage",
          nt = "" + o + et;
        (n.dots = function (t, e, n) {
          var i =
            '<ol class="' +
            e +
            ' js-dotsNavigation">' +
            (function (t, e) {
              for (var n = "", i = 0; i < t; i += 1)
                n +=
                  0 === i
                    ? '<li class="' +
                      e +
                      " " +
                      e +
                      et +
                      " " +
                      nt +
                      " " +
                      o +
                      '"></li>'
                    : '<li class="' + e + " " + o + '"></li>';
              return n;
            })(t, n) +
            "</ol>";
          return r(i);
        }),
          (n.init = function (t, e, n) {
            var i = void 0,
              r = void 0,
              o = void 0,
              s = void 0,
              a = void 0,
              u = void 0,
              c = void 0,
              l = void 0,
              d = void 0,
              v = void 0,
              f = void 0,
              m = void 0,
              p = void 0,
              h = void 0,
              y = void 0;
            function b() {
              return i;
            }
            function g(t) {
              return r[t];
            }
            function L() {
              return s;
            }
            function w() {
              return c;
            }
            function E() {
              return d;
            }
            function S() {
              return v;
            }
            function q() {
              return p;
            }
            function x() {
              r = e.getElementsByClassName(o);
            }
            function _() {
              var t = b().parentElement;
              l = t.classList.contains("aboutGalleryOverlay-is-active")
                ? b().getBoundingClientRect().left
                : t.getBoundingClientRect().width +
                  b().getBoundingClientRect().left;
            }
            function k(t) {
              d = t;
            }
            function T() {
              var t = E(),
                e = void 0;
              (e = t < 0 ? w() : t > w() ? 0 : t), (v = g(e));
            }
            function A(t) {
              m = t;
            }
            function D(t) {
              p = t;
            }
            function P(t, e) {
              (a = t), (u = e);
            }
            function N() {
              S().classList.remove(L(), nt), T(), S().classList.add(L(), nt);
            }
            function C() {
              return -100 * E() + "%";
            }
            function M() {
              var t = q() < 0 ? 15 : -15;
              return h + (q() + t) / m + "px";
            }
            function G(t) {
              b().style.transform = J("x", t).transform;
            }
            function j() {
              0 === E() && 0 < q() ? A(4) : E() === w() && q() < 0 && A(4),
                G(M());
            }
            function O() {
              P(!1, !1),
                b().classList.remove(Q, $),
                b().removeEventListener(K, O),
                Z.trigger(b(), tt, !1, "UIEvents");
            }
            function B(t) {
              var e,
                n = t ? t.touches[0].pageX : 0;
              (f = n),
                A(1),
                D(0),
                (e = b().getBoundingClientRect().left - l),
                (h = e);
            }
            function H(t) {
              t && t.preventDefault();
            }
            function I() {
              q() < -50 && E() !== w()
                ? k(E() + 1)
                : 50 < q() && 0 !== E() && k(E() - 1);
            }
            function R(t) {
              k(t), B(), N(), G(C());
            }
            function F() {
              15 < Math.abs(p) &&
                (I(),
                N(),
                b().addEventListener(K, O),
                P(!0, !0),
                b().classList.add(Q),
                G(C()));
            }
            function W(t) {
              B(), D(t), P(!0, !0), b().classList.add($), F();
            }
            function X(t) {
              var e;
              D(t.touches[0].pageX - f),
                15 < Math.abs(q()) && ((e = requestAnimationFrame(j)), (y = e));
            }
            function V() {
              document.removeEventListener("touchmove", X, !0),
                document.removeEventListener("touchend", V),
                cancelAnimationFrame(y),
                requestAnimationFrame(F);
            }
            function U(t) {
              var e = { fixing: a, changing: u };
              (e.fixing && e.changing) ||
                (B(t),
                document.addEventListener("touchmove", X, !0),
                document.addEventListener("touchend", V));
            }
            function Y() {
              _();
            }
            function z() {
              (i = t),
                (s = "" + (o = n) + et),
                x(),
                (c = r.length - 1),
                _(),
                k(0),
                T(),
                Z.trigger(b(), tt, !1, "UIEvents");
            }
            return (
              z(),
              b().parentElement.addEventListener("touchstart", U),
              window.addEventListener("resize", Y),
              {
                prev: function (t) {
                  H(t), W(51);
                },
                next: function (t) {
                  H(t), W(-51);
                },
                set: R,
                slide: function (t) {
                  b().classList.add($), R(t);
                },
                current: E,
                max: w,
                object: b,
              }
            );
          });
      },
      {
        "./tx-createNode": 12,
        "./tx-event": 13,
        "./tx-transition": 15,
        "./tx-translate": 16,
      },
    ],
    15: [
      function (t, e, n) {
        "use strict";
        function c(t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        }
        e.exports = function (t, e) {
          var n = "" + t + e,
            i = c(t),
            r = "" + c(t) + c(e),
            o = [n, "o" + r, "MS" + r, n, "webkit" + r],
            s = [t, "o" + i, "MS" + i, "Moz" + i, "Webkit" + i],
            a = document.createElement("element"),
            u = void 0;
          return (
            s.some(function (t, e) {
              var n = void 0 !== a.style[t];
              return n && (u = o[e]), n;
            }),
            u
          );
        };
      },
      {},
    ],
    16: [
      function (t, e, n) {
        "use strict";
        function i(t, e) {
          var n = "translate" + t.toUpperCase() + "(" + e + ")";
          return { property: n, propertyLayer: n + " translateZ(0)" };
        }
        (n.css = function (t, e) {
          var n = i(t, e);
          return {
            "-webkit-transform": n.propertyLayer,
            "-moz-transform": n.propertyLayer,
            "-ms-transform": n.property,
            "-o-transform": n.property,
            transform: n.propertyLayer,
          };
        }),
          (n.string = function (t, e) {
            var n = i(t, e);
            return (
              "-webkit-transform:" +
              n.propertyLayer +
              ";-moz-transform:" +
              n.propertyLayer +
              ";-ms-transform:" +
              n.property +
              ";-o-transform:" +
              n.property +
              ";transform:" +
              n.propertyLayer +
              ";"
            );
          });
      },
      {},
    ],
    17: [
      function (t, e, n) {
        "use strict";
        var i = t("about"),
          r = t("mission"),
          o = t("timeline"),
          s = t("utilities/passiveEvents");
        e.exports = function () {
          function t() {
            var t = window.scrollY || window.pageYOffset;
            !i.isActive() && i.isPassed(t) && i.activate(),
              r.update(t),
              o.update(t);
          }
          function e() {
            requestAnimationFrame(t);
          }
          i.init(),
            r.init(),
            o.init(),
            document.addEventListener(
              "scroll",
              e,
              !!s.status() && { passive: !0 }
            );
        };
      },
      { about: 1, mission: 11, timeline: 18, "utilities/passiveEvents": 21 },
    ],
    18: [
      function (t, e, n) {
        "use strict";
        var r = function (t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t))
            return (function (t, e) {
              var n = [],
                i = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var s, a = t[Symbol.iterator]();
                  !(i = (s = a.next()).done) &&
                  (n.push(s.value), !e || n.length !== e);
                  i = !0
                );
              } catch (t) {
                (r = !0), (o = t);
              } finally {
                try {
                  !i && a.return && a.return();
                } finally {
                  if (r) throw o;
                }
              }
              return n;
            })(t, e);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
        function o(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n;
          }
          return Array.from(t);
        }
        var i = t("utilities/animationOnce"),
          s = [
            { path: "sequence-01", frames: 151 },
            { path: "sequence-02", frames: 60 },
            { path: "sequence-03", frames: 90 },
            { path: "sequence-04", frames: 150 },
            { path: "sequence-05", frames: 180 },
            { path: "sequence-06", frames: 120 },
            { path: "sequence-07", frames: 120 },
            { path: "sequence-08", frames: 120 },
            { path: "sequence-09", frames: 120 },
            { path: "sequence-10", frames: 240 },
            { path: "sequence-11", frames: 90 },
          ],
          a = [
            0,
            5e3,
            7e3,
            1e4,
            15e3,
            21e3,
            25e3,
            29e3,
            33e3,
            37e3,
            45e3,
            48e3,
          ],
          u = 2950,
          c = (document.querySelector(".aboutContent"), window.innerWidth),
          l = document.querySelector(".aboutRussia"),
          d = document.querySelector(".aboutRussiaTextHolder"),
          v = document.querySelector(".aboutTimeline"),
          f = document.querySelector("#aboutTimelineCanvas"),
          m = document.querySelector("#aboutTimelineSliderPrev"),
          p = document.querySelector("#aboutTimelineSliderNext"),
          h = document.querySelector("#aboutTimelineSlider"),
          y = document.querySelector("#aboutTimelineSliderHandle"),
          b = [].slice.call(
            document.querySelectorAll(".aboutTimelineSliderStep")
          ),
          g = document.querySelector("#aboutTimelineTexts"),
          L = document.querySelector("#aboutRussiaMapPath"),
          w = b.length - 1,
          E = 0,
          S = h.clientWidth - 10,
          q = S / w,
          x = [],
          _ = 0,
          k = 0,
          T = 0,
          A = void 0,
          D = void 0,
          P = void 0,
          N = void 0,
          C = void 0,
          M = void 0,
          G = void 0,
          j = void 0,
          O = void 0,
          B = void 0,
          H = void 0,
          I = void 0,
          R = void 0;
        function F() {
          if ((G || M) && _ < w) {
            var t = (k - _ * q) / q,
              e = x[_],
              n = e.images,
              i = e.frames,
              r = Math.round(i * t) - 1;
            n[(r = -1 === r ? (R ? 0 : i + 1) : r)] &&
              (O.clearRect(0, 0, f.width, f.height),
              O.drawImage(H[r], 0, 0, f.width, f.height)),
              (R = !1);
          }
        }
        function W(t) {
          g.className =
            "aboutTimelineTexts aboutTimelineTexts-is-showingText-" +
            ((0 <= t ? t : _) + 1);
        }
        function X() {
          var t = T + (P - D);
          return Math.max(Math.min(t, S), E);
        }
        function V() {
          y.style.transform = "translateX(" + k + "px) translateZ(0)";
        }
        function U(t) {
          var e;
          (k = (_ = 0 <= (e = t) ? e : Math.round(X() / q)) * q), (T = k), V();
        }
        function Y(t) {
          (k = T + A * t),
            (_ = Math.min(Math.floor(k / q), w)),
            1 === t && (j || (j = !0), (I = !1), (T = k = T + A)),
            F(),
            V();
        }
        function z(n, i) {
          return new Promise(function (t) {
            var e = new Image();
            (H[i] = e).addEventListener("load", function () {
              return t(e);
            }),
              (e.src = n);
          });
        }
        function Z(t, e) {
          (I = !0),
            (A = t * q - T),
            (function (t) {
              var e = void 0;
              if (((H = []), _ < t))
                if (10 < t || !j) e = Promise.all(x[_].images.map(z));
                else {
                  var n = r(x[t].images, 1)[0];
                  e = Promise.all([].concat(o(x[_].images.map(z)), [z(n)]));
                }
              else if (10 < _) e = Promise.all(x[t].images.map(z));
              else {
                var i = r(x[_].images, 1)[0];
                e = Promise.all([z(i)].concat(o(x[t].images.map(z))));
              }
              return e;
            })(t).then(function () {
              i(e, Y);
            });
        }
        function K() {
          if (!I) {
            var t = Math.min(_ + 1, w);
            Z(t, Math.abs(a[_] - a[t])), W(t);
          }
        }
        function J() {
          G && (clearInterval(B), K());
        }
        function Q(s) {
          requestAnimationFrame(function () {
            if (
              ((P = s.touches ? s.touches[0].pageX : s.pageX),
              (k = X()),
              (_ = Math.min(Math.floor(k / q), w)),
              V(),
              _ < w)
            ) {
              R = !0;
              var t = (k - _ * q) / q,
                e = x[_],
                n = e.images,
                i = e.frames,
                r = Math.round(i * t) - 1;
              if (n[(r = -1 === r ? (R ? 0 : i + 1) : r)]) {
                var o = new Image();
                o.addEventListener("load", function t() {
                  o.removeEventListener("load", t),
                    O.clearRect(0, 0, f.width, f.height),
                    O.drawImage(o, 0, 0, f.width, f.height);
                }),
                  (o.src = n[r]);
              }
              R = !1;
            }
            W();
          });
        }
        function $() {
          document.removeEventListener("mousemove", Q),
            document.removeEventListener("touchmove", Q),
            document.removeEventListener("mouseup", $),
            document.removeEventListener("touchend", $),
            (P = event.touches ? event.touches[0].pageX : event.pageX),
            U(),
            (H = []),
            (R = !0),
            z(x[_].images[0], 0).then(F),
            W();
        }
        function tt(t) {
          t.preventDefault(),
            (function () {
              if (!I) {
                var t = Math.max(_ - 1, 0);
                Z(t, Math.abs(a[_] - a[t])), W(t);
              }
            })();
        }
        function et(t) {
          t.preventDefault(), K();
        }
        function nt(t) {
          I ||
            ((D = t.touches ? t.touches[0].pageX : t.pageX),
            document.addEventListener("mousemove", Q),
            document.addEventListener("touchmove", Q),
            document.addEventListener("mouseup", $),
            document.addEventListener("touchend", $));
        }
        function it(t) {
          var e = t.target;
          if (
            e.classList.contains("aboutTimelineSliderStep") &&
            (t.preventDefault(), !I)
          ) {
            var n = b.indexOf(e);
            U(n), (H = []), (R = !0), z(x[n].images[0], 0).then(F), W();
          }
        }
        function rt() {
          (M = !0), v.classList.add("aboutTimeline-has-loaded");
        }
        function ot(i) {
          return new Promise(function (t, e) {
            var n = new Image();
            n.addEventListener("load", function () {
              t(i);
            }),
              n.addEventListener("error", e),
              (n.src = i);
          });
        }
        function st(e, n, i) {
          var t = (function (t, e) {
            for (var n, i, r = [], o = 0; o < e; o += 1)
              r.push(
                "/local/templates/main/img/about/sequences/" +
                  t +
                  "/" +
                  t +
                  "-00" +
                  ((i = void 0),
                  (i = n = o) < 10 ? (i = "00" + n) : n < 100 && (i = "0" + n),
                  i) +
                  ".png"
              );
            return r;
          })(e.path, e.frames);
          return Promise.all(t.map(ot)).then(function (t) {
            x[n + i] = { images: t, frames: e.frames };
          });
        }
        function at() {
          var e = new Image();
          (G = !0),
            e.addEventListener("load", function t() {
              e.removeEventListener("load", t),
                O.clearRect(0, 0, f.width, f.height),
                O.drawImage(e, 0, 0, f.width, f.height);
            });
          var t = r(x[0].images, 1);
          e.src = t[0];
        }
        function ut() {
          return Promise.all(
            s.slice(1).map(function (t, e) {
              return st(t, e, 1);
            })
          );
        }
        function ct() {
          return st(s[0], 0, 0).then(at).then(ut);
        }
        (n.init = function () {
          var t;
          (N = 0),
            (C = window.innerHeight + 126),
            (t = window.devicePixelRatio || 1),
            (f.width = f.clientWidth * t),
            (f.height = f.clientHeight * t),
            (O = f.getContext("2d")),
            m.addEventListener("click", tt),
            p.addEventListener("click", et),
            y.addEventListener("mousedown", nt),
            y.addEventListener("touchstart", nt),
            h.addEventListener("click", it),
            ct().then(rt);
        }),
          (n.update = function (t) {
            var e, n;
            900 < c &&
              (N <= (n = t) && n <= C
                ? ((e = (t - N) / (C - N)),
                  (d.style.opacity = 1 - e),
                  (v.style.opacity = 0),
                  L.setAttribute("opacity", 1),
                  L.setAttribute("stroke-dasharray", u * e + " " + u * (1 - e)),
                  l.classList.add("aboutRussia-is-stuck"),
                  l.classList.remove("aboutRussia-is-unstuckDown"),
                  clearInterval(B))
                : t < N
                ? ((d.style.opacity = 1),
                  (v.style.opacity = 0),
                  L.setAttribute("opacity", 1),
                  L.setAttribute("stroke-dasharray", "0 " + u),
                  l.classList.remove("aboutRussia-is-stuck"),
                  l.classList.remove("aboutRussia-is-unstuckDown"),
                  clearInterval(B))
                : ((d.style.opacity = 0),
                  (v.style.opacity = 1),
                  L.setAttribute("opacity", 0),
                  l.classList.add("aboutRussia-is-unstuckDown"),
                  l.classList.remove("aboutRussia-is-stuck"),
                  j || (clearInterval(B), (B = setInterval(J, 100)))));
          });
      },
      { "utilities/animationOnce": 19 },
    ],
    19: [
      function (t, e, n) {
        "use strict";
        e.exports = function (i, r) {
          var t = void 0;
          return (
            (function e(n) {
              t = requestAnimationFrame(function () {
                var t = (Date.now() - n) / i;
                t < 1 ? (r(t), e(n)) : r(1);
              });
            })(Date.now()),
            {
              stop: function () {
                cancelAnimationFrame(t), r(1);
              },
            }
          );
        };
      },
      {},
    ],
    20: [
      function (t, e, n) {
        "use strict";
        e.exports = function (i, r) {
          !(function e(n) {
            requestAnimationFrame(function () {
              var t = (Date.now() - n) / i;
              t < 1 ? (r(t), e(n)) : e(Date.now());
            });
          })(Date.now());
        };
      },
      {},
    ],
    21: [
      function (t, e, n) {
        "use strict";
        var i = !1;
        (n.check = function () {
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function () {
                return (i = !0);
              },
            });
            window.addEventListener("test", null, t);
          } catch (t) {
            i = !1;
          }
        }),
          (n.status = function () {
            return i;
          });
      },
      {},
    ],
    22: [
      function (t, e, n) {
        "use strict";
        e.exports = function () {
          var t = document.querySelector("#aboutVideoBlock"),
            e = document.querySelector("#aboutVideoLightBlock"),
            n = document.querySelector("#aboutVideo"),
            i = document.querySelector("#aboutVideoLight"),
            r = document.querySelector("#aboutVideoPlay"),
            o = document.querySelector("#aboutVideoLightPlay"),
            s = document.querySelector("#aboutVideoPause"),
            a = document.querySelector("#aboutVideoLightPause");
          function u() {
            n.paused
              ? (n.play(), t.classList.add("aboutVideoBlock-is-playing"))
              : (n.pause(), t.classList.remove("aboutVideoBlock-is-playing"));
          }
          function c() {
            i.paused
              ? (i.play(), e.classList.add("aboutVideoBlock-is-playing"))
              : (i.pause(), e.classList.remove("aboutVideoBlock-is-playing"));
          }
          function l(t) {
            t.preventDefault(), u();
          }
          function d(t) {
            t.preventDefault(), c();
          }
          r.addEventListener("click", l),
            r.addEventListener("touchstart", l),
            s.addEventListener("click", l),
            s.addEventListener("touchstart", l),
            o.addEventListener("click", d),
            o.addEventListener("touchstart", d),
            a.addEventListener("click", d),
            a.addEventListener("touchstart", d);
        };
      },
      {},
    ],
    23: [
      function (t, e, n) {
        "use strict";
        var i = t("utilities/passiveEvents");
        t("es6-promise").polyfill(), i.check();
        var r = t("certificate"),
          o = t("departments"),
          s = t("gallery"),
          a = t("lab"),
          u = t("logos"),
          c = t("scroll"),
          l = t("video");
        r(), o(), s(), a(), u(), c(), l();
      },
      {
        certificate: 2,
        departments: 3,
        "es6-promise": 24,
        gallery: 6,
        lab: 9,
        logos: 10,
        scroll: 17,
        "utilities/passiveEvents": 21,
        video: 22,
      },
    ],
    24: [
      function (I, n, i) {
        (function (B, H) {
          var t, e;
          (t = this),
            (e = function () {
              "use strict";
              function u(t) {
                return "function" == typeof t;
              }
              var n = Array.isArray
                  ? Array.isArray
                  : function (t) {
                      return (
                        "[object Array]" === Object.prototype.toString.call(t)
                      );
                    },
                i = 0,
                e = void 0,
                r = void 0,
                a = function (t, e) {
                  (v[i] = t),
                    (v[i + 1] = e),
                    2 === (i += 2) && (r ? r(f) : b());
                };
              var t = "undefined" != typeof window ? window : void 0,
                o = t || {},
                s = o.MutationObserver || o.WebKitMutationObserver,
                c =
                  "undefined" == typeof self &&
                  void 0 !== B &&
                  "[object process]" === {}.toString.call(B),
                l =
                  "undefined" != typeof Uint8ClampedArray &&
                  "undefined" != typeof importScripts &&
                  "undefined" != typeof MessageChannel;
              function d() {
                var t = setTimeout;
                return function () {
                  return t(f, 1);
                };
              }
              var v = new Array(1e3);
              function f() {
                for (var t = 0; t < i; t += 2) {
                  (0, v[t])(v[t + 1]), (v[t] = void 0), (v[t + 1] = void 0);
                }
                i = 0;
              }
              var m,
                p,
                h,
                y,
                b = void 0;
              function g(t, e) {
                var n = this,
                  i = new this.constructor(E);
                void 0 === i[w] && G(i);
                var r = n._state;
                if (r) {
                  var o = arguments[r - 1];
                  a(function () {
                    return C(r, i, o, n._result);
                  });
                } else P(n, i, t, e);
                return i;
              }
              function L(t) {
                if (t && "object" == typeof t && t.constructor === this)
                  return t;
                var e = new this(E);
                return k(e, t), e;
              }
              b = c
                ? function () {
                    return B.nextTick(f);
                  }
                : s
                ? ((p = 0),
                  (h = new s(f)),
                  (y = document.createTextNode("")),
                  h.observe(y, { characterData: !0 }),
                  function () {
                    y.data = p = ++p % 2;
                  })
                : l
                ? (((m = new MessageChannel()).port1.onmessage = f),
                  function () {
                    return m.port2.postMessage(0);
                  })
                : void 0 === t && "function" == typeof I
                ? (function () {
                    try {
                      var t = Function("return this")().require("vertx");
                      return void 0 !== (e = t.runOnLoop || t.runOnContext)
                        ? function () {
                            e(f);
                          }
                        : d();
                    } catch (t) {
                      return d();
                    }
                  })()
                : d();
              var w = Math.random().toString(36).substring(2);
              function E() {}
              var S = void 0,
                q = 1,
                x = 2;
              function _(t, e, n) {
                var i, r, o, s;
                e.constructor === t.constructor &&
                n === g &&
                e.constructor.resolve === L
                  ? ((o = t),
                    (s = e)._state === q
                      ? A(o, s._result)
                      : s._state === x
                      ? D(o, s._result)
                      : P(
                          s,
                          void 0,
                          function (t) {
                            return k(o, t);
                          },
                          function (t) {
                            return D(o, t);
                          }
                        ))
                  : void 0 === n
                  ? A(t, e)
                  : u(n)
                  ? ((i = e),
                    (r = n),
                    a(function (e) {
                      var n = !1,
                        t = (function (t, e, n, i) {
                          try {
                            t.call(e, n, i);
                          } catch (t) {
                            return t;
                          }
                        })(
                          r,
                          i,
                          function (t) {
                            n || ((n = !0), i !== t ? k(e, t) : A(e, t));
                          },
                          function (t) {
                            n || ((n = !0), D(e, t));
                          },
                          e._label
                        );
                      !n && t && ((n = !0), D(e, t));
                    }, t))
                  : A(t, e);
              }
              function k(e, t) {
                if (e === t)
                  D(
                    e,
                    new TypeError("You cannot resolve a promise with itself")
                  );
                else if (
                  ((r = typeof (i = t)),
                  null === i || ("object" !== r && "function" !== r))
                )
                  A(e, t);
                else {
                  var n = void 0;
                  try {
                    n = t.then;
                  } catch (t) {
                    return void D(e, t);
                  }
                  _(e, t, n);
                }
                var i, r;
              }
              function T(t) {
                t._onerror && t._onerror(t._result), N(t);
              }
              function A(t, e) {
                t._state === S &&
                  ((t._result = e),
                  (t._state = q),
                  0 !== t._subscribers.length && a(N, t));
              }
              function D(t, e) {
                t._state === S && ((t._state = x), (t._result = e), a(T, t));
              }
              function P(t, e, n, i) {
                var r = t._subscribers,
                  o = r.length;
                (t._onerror = null),
                  (r[o] = e),
                  (r[o + q] = n),
                  (r[o + x] = i),
                  0 === o && t._state && a(N, t);
              }
              function N(t) {
                var e = t._subscribers,
                  n = t._state;
                if (0 !== e.length) {
                  for (
                    var i = void 0, r = void 0, o = t._result, s = 0;
                    s < e.length;
                    s += 3
                  )
                    (i = e[s]), (r = e[s + n]), i ? C(n, i, r, o) : r(o);
                  t._subscribers.length = 0;
                }
              }
              function C(t, e, n, i) {
                var r = u(n),
                  o = void 0,
                  s = void 0,
                  a = !0;
                if (r) {
                  try {
                    o = n(i);
                  } catch (t) {
                    (a = !1), (s = t);
                  }
                  if (e === o)
                    return void D(
                      e,
                      new TypeError(
                        "A promises callback cannot return that same promise."
                      )
                    );
                } else o = i;
                e._state !== S ||
                  (r && a
                    ? k(e, o)
                    : !1 === a
                    ? D(e, s)
                    : t === q
                    ? A(e, o)
                    : t === x && D(e, o));
              }
              var M = 0;
              function G(t) {
                (t[w] = M++),
                  (t._state = void 0),
                  (t._result = void 0),
                  (t._subscribers = []);
              }
              var j = (function () {
                function t(t, e) {
                  (this._instanceConstructor = t),
                    (this.promise = new t(E)),
                    this.promise[w] || G(this.promise),
                    n(e)
                      ? ((this.length = e.length),
                        (this._remaining = e.length),
                        (this._result = new Array(this.length)),
                        0 === this.length
                          ? A(this.promise, this._result)
                          : ((this.length = this.length || 0),
                            this._enumerate(e),
                            0 === this._remaining &&
                              A(this.promise, this._result)))
                      : D(
                          this.promise,
                          new Error("Array Methods must be provided an Array")
                        );
                }
                return (
                  (t.prototype._enumerate = function (t) {
                    for (var e = 0; this._state === S && e < t.length; e++)
                      this._eachEntry(t[e], e);
                  }),
                  (t.prototype._eachEntry = function (e, t) {
                    var n = this._instanceConstructor,
                      i = n.resolve;
                    if (i === L) {
                      var r = void 0,
                        o = void 0,
                        s = !1;
                      try {
                        r = e.then;
                      } catch (t) {
                        (s = !0), (o = t);
                      }
                      if (r === g && e._state !== S)
                        this._settledAt(e._state, t, e._result);
                      else if ("function" != typeof r)
                        this._remaining--, (this._result[t] = e);
                      else if (n === O) {
                        var a = new n(E);
                        s ? D(a, o) : _(a, e, r), this._willSettleAt(a, t);
                      } else
                        this._willSettleAt(
                          new n(function (t) {
                            return t(e);
                          }),
                          t
                        );
                    } else this._willSettleAt(i(e), t);
                  }),
                  (t.prototype._settledAt = function (t, e, n) {
                    var i = this.promise;
                    i._state === S &&
                      (this._remaining--,
                      t === x ? D(i, n) : (this._result[e] = n)),
                      0 === this._remaining && A(i, this._result);
                  }),
                  (t.prototype._willSettleAt = function (t, e) {
                    var n = this;
                    P(
                      t,
                      void 0,
                      function (t) {
                        return n._settledAt(q, e, t);
                      },
                      function (t) {
                        return n._settledAt(x, e, t);
                      }
                    );
                  }),
                  t
                );
              })();
              var O = (function () {
                function e(t) {
                  (this[w] = M++),
                    (this._result = this._state = void 0),
                    (this._subscribers = []),
                    E !== t &&
                      ("function" != typeof t &&
                        (function () {
                          throw new TypeError(
                            "You must pass a resolver function as the first argument to the promise constructor"
                          );
                        })(),
                      this instanceof e
                        ? (function (e, t) {
                            try {
                              t(
                                function (t) {
                                  k(e, t);
                                },
                                function (t) {
                                  D(e, t);
                                }
                              );
                            } catch (t) {
                              D(e, t);
                            }
                          })(this, t)
                        : (function () {
                            throw new TypeError(
                              "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                            );
                          })());
                }
                return (
                  (e.prototype.catch = function (t) {
                    return this.then(null, t);
                  }),
                  (e.prototype.finally = function (e) {
                    var n = this.constructor;
                    return u(e)
                      ? this.then(
                          function (t) {
                            return n.resolve(e()).then(function () {
                              return t;
                            });
                          },
                          function (t) {
                            return n.resolve(e()).then(function () {
                              throw t;
                            });
                          }
                        )
                      : this.then(e, e);
                  }),
                  e
                );
              })();
              return (
                (O.prototype.then = g),
                (O.all = function (t) {
                  return new j(this, t).promise;
                }),
                (O.race = function (r) {
                  var o = this;
                  return n(r)
                    ? new o(function (t, e) {
                        for (var n = r.length, i = 0; i < n; i++)
                          o.resolve(r[i]).then(t, e);
                      })
                    : new o(function (t, e) {
                        return e(
                          new TypeError("You must pass an array to race.")
                        );
                      });
                }),
                (O.resolve = L),
                (O.reject = function (t) {
                  var e = new this(E);
                  return D(e, t), e;
                }),
                (O._setScheduler = function (t) {
                  r = t;
                }),
                (O._setAsap = function (t) {
                  a = t;
                }),
                (O._asap = a),
                (O.polyfill = function () {
                  var t = void 0;
                  if (void 0 !== H) t = H;
                  else if ("undefined" != typeof self) t = self;
                  else
                    try {
                      t = Function("return this")();
                    } catch (t) {
                      throw new Error(
                        "polyfill failed because global object is unavailable in this environment"
                      );
                    }
                  var e = t.Promise;
                  if (e) {
                    var n = null;
                    try {
                      n = Object.prototype.toString.call(e.resolve());
                    } catch (t) {}
                    if ("[object Promise]" === n && !e.cast) return;
                  }
                  t.Promise = O;
                }),
                (O.Promise = O)
              );
            }),
            "object" == typeof i && void 0 !== n
              ? (n.exports = e())
              : "function" == typeof define && define.amd
              ? define(e)
              : (t.ES6Promise = e());
        }.call(
          this,
          I("_process"),
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      { _process: 25 },
    ],
    25: [
      function (t, e, n) {
        var i,
          r,
          o = (e.exports = {});
        function s() {
          throw new Error("setTimeout has not been defined");
        }
        function a() {
          throw new Error("clearTimeout has not been defined");
        }
        function u(e) {
          if (i === setTimeout) return setTimeout(e, 0);
          if ((i === s || !i) && setTimeout)
            return (i = setTimeout), setTimeout(e, 0);
          try {
            return i(e, 0);
          } catch (t) {
            try {
              return i.call(null, e, 0);
            } catch (t) {
              return i.call(this, e, 0);
            }
          }
        }
        !(function () {
          try {
            i = "function" == typeof setTimeout ? setTimeout : s;
          } catch (t) {
            i = s;
          }
          try {
            r = "function" == typeof clearTimeout ? clearTimeout : a;
          } catch (t) {
            r = a;
          }
        })();
        var c,
          l = [],
          d = !1,
          v = -1;
        function f() {
          d &&
            c &&
            ((d = !1),
            c.length ? (l = c.concat(l)) : (v = -1),
            l.length && m());
        }
        function m() {
          if (!d) {
            var t = u(f);
            d = !0;
            for (var e = l.length; e; ) {
              for (c = l, l = []; ++v < e; ) c && c[v].run();
              (v = -1), (e = l.length);
            }
            (c = null),
              (d = !1),
              (function (e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === a || !r) && clearTimeout)
                  return (r = clearTimeout), clearTimeout(e);
                try {
                  r(e);
                } catch (t) {
                  try {
                    return r.call(null, e);
                  } catch (t) {
                    return r.call(this, e);
                  }
                }
              })(t);
          }
        }
        function p(t, e) {
          (this.fun = t), (this.array = e);
        }
        function h() {}
        (o.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (1 < arguments.length)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          l.push(new p(t, e)), 1 !== l.length || d || u(m);
        }),
          (p.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (o.title = "browser"),
          (o.browser = !0),
          (o.env = {}),
          (o.argv = []),
          (o.version = ""),
          (o.versions = {}),
          (o.on = h),
          (o.addListener = h),
          (o.once = h),
          (o.off = h),
          (o.removeListener = h),
          (o.removeAllListeners = h),
          (o.emit = h),
          (o.prependListener = h),
          (o.prependOnceListener = h),
          (o.listeners = function (t) {
            return [];
          }),
          (o.binding = function (t) {
            throw new Error("process.binding is not supported");
          }),
          (o.cwd = function () {
            return "/";
          }),
          (o.chdir = function (t) {
            throw new Error("process.chdir is not supported");
          }),
          (o.umask = function () {
            return 0;
          });
      },
      {},
    ],
  },
  {},
  [23]
);
