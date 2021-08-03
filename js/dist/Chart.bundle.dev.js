"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t();
  }
}(function () {
  return function t(e, n, i) {
    function a(o, s) {
      if (!n[o]) {
        if (!e[o]) {
          var l = "function" == typeof require && require;
          if (!s && l) return l(o, !0);
          if (r) return r(o, !0);
          var u = new Error("Cannot find module '" + o + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }

        var d = n[o] = {
          exports: {}
        };
        e[o][0].call(d.exports, function (t) {
          var n = e[o][1][t];
          return a(n || t);
        }, d, d.exports, t, e, n, i);
      }

      return n[o].exports;
    }

    for (var r = "function" == typeof require && require, o = 0; o < i.length; o++) {
      a(i[o]);
    }

    return a;
  }({
    1: [function (t, e, n) {
      var i = t(5);

      function a(t) {
        if (t) {
          var e = [0, 0, 0],
              n = 1,
              a = t.match(/^#([a-fA-F0-9]{3})$/i);

          if (a) {
            a = a[1];

            for (var r = 0; r < e.length; r++) {
              e[r] = parseInt(a[r] + a[r], 16);
            }
          } else if (a = t.match(/^#([a-fA-F0-9]{6})$/i)) {
            a = a[1];

            for (r = 0; r < e.length; r++) {
              e[r] = parseInt(a.slice(2 * r, 2 * r + 2), 16);
            }
          } else if (a = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (r = 0; r < e.length; r++) {
              e[r] = parseInt(a[r + 1]);
            }

            n = parseFloat(a[4]);
          } else if (a = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (r = 0; r < e.length; r++) {
              e[r] = Math.round(2.55 * parseFloat(a[r + 1]));
            }

            n = parseFloat(a[4]);
          } else if (a = t.match(/(\w+)/)) {
            if ("transparent" == a[1]) return [0, 0, 0, 0];
            if (!(e = i[a[1]])) return;
          }

          for (r = 0; r < e.length; r++) {
            e[r] = d(e[r], 0, 255);
          }

          return n = n || 0 == n ? d(n, 0, 1) : 1, e[3] = n, e;
        }
      }

      function r(t) {
        if (t) {
          var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

          if (e) {
            var n = parseFloat(e[4]);
            return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(n) ? 1 : n, 0, 1)];
          }
        }
      }

      function o(t) {
        if (t) {
          var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

          if (e) {
            var n = parseFloat(e[4]);
            return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(n) ? 1 : n, 0, 1)];
          }
        }
      }

      function s(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
      }

      function l(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")";
      }

      function u(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
      }

      function d(t, e, n) {
        return Math.min(Math.max(e, t), n);
      }

      function h(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e;
      }

      e.exports = {
        getRgba: a,
        getHsla: r,
        getRgb: function getRgb(t) {
          var e = a(t);
          return e && e.slice(0, 3);
        },
        getHsl: function getHsl(t) {
          var e = r(t);
          return e && e.slice(0, 3);
        },
        getHwb: o,
        getAlpha: function getAlpha(t) {
          var e = a(t);
          if (e) return e[3];
          if (e = r(t)) return e[3];
          if (e = o(t)) return e[3];
        },
        hexString: function hexString(t) {
          return "#" + h(t[0]) + h(t[1]) + h(t[2]);
        },
        rgbString: function rgbString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return s(t, e);
          return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        },
        rgbaString: s,
        percentString: function percentString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return l(t, e);
          var n = Math.round(t[0] / 255 * 100),
              i = Math.round(t[1] / 255 * 100),
              a = Math.round(t[2] / 255 * 100);
          return "rgb(" + n + "%, " + i + "%, " + a + "%)";
        },
        percentaString: l,
        hslString: function hslString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return u(t, e);
          return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
        },
        hslaString: u,
        hwbString: function hwbString(t, e) {
          void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
          return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
        },
        keyword: function keyword(t) {
          return c[t.slice(0, 3)];
        }
      };
      var c = {};

      for (var f in i) {
        c[i[f]] = f;
      }
    }, {
      5: 5
    }],
    2: [function (t, e, n) {
      var i = t(4),
          a = t(1),
          r = function r(t) {
        return t instanceof r ? t : this instanceof r ? (this.valid = !1, this.values = {
          rgb: [0, 0, 0],
          hsl: [0, 0, 0],
          hsv: [0, 0, 0],
          hwb: [0, 0, 0],
          cmyk: [0, 0, 0, 0],
          alpha: 1
        }, void ("string" == typeof t ? (e = a.getRgba(t)) ? this.setValues("rgb", e) : (e = a.getHsla(t)) ? this.setValues("hsl", e) : (e = a.getHwb(t)) && this.setValues("hwb", e) : "object" == _typeof(t) && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new r(t);
        var e;
      };

      r.prototype = {
        isValid: function isValid() {
          return this.valid;
        },
        rgb: function rgb() {
          return this.setSpace("rgb", arguments);
        },
        hsl: function hsl() {
          return this.setSpace("hsl", arguments);
        },
        hsv: function hsv() {
          return this.setSpace("hsv", arguments);
        },
        hwb: function hwb() {
          return this.setSpace("hwb", arguments);
        },
        cmyk: function cmyk() {
          return this.setSpace("cmyk", arguments);
        },
        rgbArray: function rgbArray() {
          return this.values.rgb;
        },
        hslArray: function hslArray() {
          return this.values.hsl;
        },
        hsvArray: function hsvArray() {
          return this.values.hsv;
        },
        hwbArray: function hwbArray() {
          var t = this.values;
          return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        },
        cmykArray: function cmykArray() {
          return this.values.cmyk;
        },
        rgbaArray: function rgbaArray() {
          var t = this.values;
          return t.rgb.concat([t.alpha]);
        },
        hslaArray: function hslaArray() {
          var t = this.values;
          return t.hsl.concat([t.alpha]);
        },
        alpha: function alpha(t) {
          return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
        },
        red: function red(t) {
          return this.setChannel("rgb", 0, t);
        },
        green: function green(t) {
          return this.setChannel("rgb", 1, t);
        },
        blue: function blue(t) {
          return this.setChannel("rgb", 2, t);
        },
        hue: function hue(t) {
          return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
        },
        saturation: function saturation(t) {
          return this.setChannel("hsl", 1, t);
        },
        lightness: function lightness(t) {
          return this.setChannel("hsl", 2, t);
        },
        saturationv: function saturationv(t) {
          return this.setChannel("hsv", 1, t);
        },
        whiteness: function whiteness(t) {
          return this.setChannel("hwb", 1, t);
        },
        blackness: function blackness(t) {
          return this.setChannel("hwb", 2, t);
        },
        value: function value(t) {
          return this.setChannel("hsv", 2, t);
        },
        cyan: function cyan(t) {
          return this.setChannel("cmyk", 0, t);
        },
        magenta: function magenta(t) {
          return this.setChannel("cmyk", 1, t);
        },
        yellow: function yellow(t) {
          return this.setChannel("cmyk", 2, t);
        },
        black: function black(t) {
          return this.setChannel("cmyk", 3, t);
        },
        hexString: function hexString() {
          return a.hexString(this.values.rgb);
        },
        rgbString: function rgbString() {
          return a.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function rgbaString() {
          return a.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function percentString() {
          return a.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function hslString() {
          return a.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function hslaString() {
          return a.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function hwbString() {
          return a.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function keyword() {
          return a.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function rgbNumber() {
          var t = this.values.rgb;
          return t[0] << 16 | t[1] << 8 | t[2];
        },
        luminosity: function luminosity() {
          for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
            var i = t[n] / 255;
            e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
          }

          return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        },
        contrast: function contrast(t) {
          var e = this.luminosity(),
              n = t.luminosity();
          return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05);
        },
        level: function level(t) {
          var e = this.contrast(t);
          return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        },
        dark: function dark() {
          var t = this.values.rgb;
          return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
        },
        light: function light() {
          return !this.dark();
        },
        negate: function negate() {
          for (var t = [], e = 0; e < 3; e++) {
            t[e] = 255 - this.values.rgb[e];
          }

          return this.setValues("rgb", t), this;
        },
        lighten: function lighten(t) {
          var e = this.values.hsl;
          return e[2] += e[2] * t, this.setValues("hsl", e), this;
        },
        darken: function darken(t) {
          var e = this.values.hsl;
          return e[2] -= e[2] * t, this.setValues("hsl", e), this;
        },
        saturate: function saturate(t) {
          var e = this.values.hsl;
          return e[1] += e[1] * t, this.setValues("hsl", e), this;
        },
        desaturate: function desaturate(t) {
          var e = this.values.hsl;
          return e[1] -= e[1] * t, this.setValues("hsl", e), this;
        },
        whiten: function whiten(t) {
          var e = this.values.hwb;
          return e[1] += e[1] * t, this.setValues("hwb", e), this;
        },
        blacken: function blacken(t) {
          var e = this.values.hwb;
          return e[2] += e[2] * t, this.setValues("hwb", e), this;
        },
        greyscale: function greyscale() {
          var t = this.values.rgb,
              e = .3 * t[0] + .59 * t[1] + .11 * t[2];
          return this.setValues("rgb", [e, e, e]), this;
        },
        clearer: function clearer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e - e * t), this;
        },
        opaquer: function opaquer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e + e * t), this;
        },
        rotate: function rotate(t) {
          var e = this.values.hsl,
              n = (e[0] + t) % 360;
          return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this;
        },
        mix: function mix(t, e) {
          var n = t,
              i = void 0 === e ? .5 : e,
              a = 2 * i - 1,
              r = this.alpha() - n.alpha(),
              o = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2,
              s = 1 - o;
          return this.rgb(o * this.red() + s * n.red(), o * this.green() + s * n.green(), o * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i));
        },
        toJSON: function toJSON() {
          return this.rgb();
        },
        clone: function clone() {
          var t,
              e,
              n = new r(),
              i = this.values,
              a = n.values;

          for (var o in i) {
            i.hasOwnProperty(o) && (t = i[o], "[object Array]" === (e = {}.toString.call(t)) ? a[o] = t.slice(0) : "[object Number]" === e ? a[o] = t : console.error("unexpected color value:", t));
          }

          return n;
        }
      }, r.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
      }, r.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
      }, r.prototype.getValues = function (t) {
        for (var e = this.values, n = {}, i = 0; i < t.length; i++) {
          n[t.charAt(i)] = e[t][i];
        }

        return 1 !== e.alpha && (n.a = e.alpha), n;
      }, r.prototype.setValues = function (t, e) {
        var n,
            a,
            r = this.values,
            o = this.spaces,
            s = this.maxes,
            l = 1;
        if (this.valid = !0, "alpha" === t) l = e;else if (e.length) r[t] = e.slice(0, t.length), l = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
          for (n = 0; n < t.length; n++) {
            r[t][n] = e[t.charAt(n)];
          }

          l = e.a;
        } else if (void 0 !== e[o[t][0]]) {
          var u = o[t];

          for (n = 0; n < t.length; n++) {
            r[t][n] = e[u[n]];
          }

          l = e.alpha;
        }
        if (r.alpha = Math.max(0, Math.min(1, void 0 === l ? r.alpha : l)), "alpha" === t) return !1;

        for (n = 0; n < t.length; n++) {
          a = Math.max(0, Math.min(s[t][n], r[t][n])), r[t][n] = Math.round(a);
        }

        for (var d in o) {
          d !== t && (r[d] = i[t][d](r[t]));
        }

        return !0;
      }, r.prototype.setSpace = function (t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this);
      }, r.prototype.setChannel = function (t, e, n) {
        var i = this.values[t];
        return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this);
      }, "undefined" != typeof window && (window.Color = r), e.exports = r;
    }, {
      1: 1,
      4: 4
    }],
    3: [function (t, e, n) {
      function i(t) {
        var e,
            n,
            i = t[0] / 255,
            a = t[1] / 255,
            r = t[2] / 255,
            o = Math.min(i, a, r),
            s = Math.max(i, a, r),
            l = s - o;
        return s == o ? e = 0 : i == s ? e = (a - r) / l : a == s ? e = 2 + (r - i) / l : r == s && (e = 4 + (i - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (o + s) / 2, [e, 100 * (s == o ? 0 : n <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * n];
      }

      function a(t) {
        var e,
            n,
            i = t[0],
            a = t[1],
            r = t[2],
            o = Math.min(i, a, r),
            s = Math.max(i, a, r),
            l = s - o;
        return n = 0 == s ? 0 : l / s * 1e3 / 10, s == o ? e = 0 : i == s ? e = (a - r) / l : a == s ? e = 2 + (r - i) / l : r == s && (e = 4 + (i - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, n, s / 255 * 1e3 / 10];
      }

      function o(t) {
        var e = t[0],
            n = t[1],
            a = t[2];
        return [i(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(n, a)))];
      }

      function s(t) {
        var e,
            n = t[0] / 255,
            i = t[1] / 255,
            a = t[2] / 255;
        return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - a))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e];
      }

      function l(t) {
        return S[JSON.stringify(t)];
      }

      function u(t) {
        var e = t[0] / 255,
            n = t[1] / 255,
            i = t[2] / 255;
        return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)];
      }

      function d(t) {
        var e = u(t),
            n = e[0],
            i = e[1],
            a = e[2];
        return i /= 100, a /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))];
      }

      function h(t) {
        var e,
            n,
            i,
            a,
            r,
            o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100;
        if (0 == s) return [r = 255 * l, r, r];
        e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];

        for (var u = 0; u < 3; u++) {
          (i = o + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, r = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, a[u] = 255 * r;
        }

        return a;
      }

      function c(t) {
        var e = t[0] / 60,
            n = t[1] / 100,
            i = t[2] / 100,
            a = Math.floor(e) % 6,
            r = e - Math.floor(e),
            o = 255 * i * (1 - n),
            s = 255 * i * (1 - n * r),
            l = 255 * i * (1 - n * (1 - r));
        i *= 255;

        switch (a) {
          case 0:
            return [i, l, o];

          case 1:
            return [s, i, o];

          case 2:
            return [o, i, l];

          case 3:
            return [o, s, i];

          case 4:
            return [l, o, i];

          case 5:
            return [i, o, s];
        }
      }

      function f(t) {
        var e,
            n,
            i,
            a,
            o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100,
            u = s + l;

        switch (u > 1 && (s /= u, l /= u), i = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (i = 1 - i), a = s + i * ((n = 1 - l) - s), e) {
          default:
          case 6:
          case 0:
            r = n, g = a, b = s;
            break;

          case 1:
            r = a, g = n, b = s;
            break;

          case 2:
            r = s, g = n, b = a;
            break;

          case 3:
            r = s, g = a, b = n;
            break;

          case 4:
            r = a, g = s, b = n;
            break;

          case 5:
            r = n, g = s, b = a;
        }

        return [255 * r, 255 * g, 255 * b];
      }

      function m(t) {
        var e = t[0] / 100,
            n = t[1] / 100,
            i = t[2] / 100,
            a = t[3] / 100;
        return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a))];
      }

      function p(t) {
        var e,
            n,
            i,
            a = t[0] / 100,
            r = t[1] / 100,
            o = t[2] / 100;
        return n = -.9689 * a + 1.8758 * r + .0415 * o, i = .0557 * a + -.204 * r + 1.057 * o, e = (e = 3.2406 * a + -1.5372 * r + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))];
      }

      function v(t) {
        var e = t[0],
            n = t[1],
            i = t[2];
        return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))];
      }

      function y(t) {
        var e,
            n,
            i,
            a,
            r = t[0],
            o = t[1],
            s = t[2];
        return r <= 8 ? a = (n = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((r + 16) / 116, 3), a = Math.pow(n / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (o / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + a, 3), n, i = i / 108.883 <= .008859 ? i = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)];
      }

      function x(t) {
        var e,
            n = t[0],
            i = t[1],
            a = t[2];
        return (e = 360 * Math.atan2(a, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + a * a), e];
      }

      function _(t) {
        return p(y(t));
      }

      function k(t) {
        var e,
            n = t[0],
            i = t[1];
        return e = t[2] / 360 * 2 * Math.PI, [n, i * Math.cos(e), i * Math.sin(e)];
      }

      function w(t) {
        return M[t];
      }

      e.exports = {
        rgb2hsl: i,
        rgb2hsv: a,
        rgb2hwb: o,
        rgb2cmyk: s,
        rgb2keyword: l,
        rgb2xyz: u,
        rgb2lab: d,
        rgb2lch: function rgb2lch(t) {
          return x(d(t));
        },
        hsl2rgb: h,
        hsl2hsv: function hsl2hsv(t) {
          var e = t[0],
              n = t[1] / 100,
              i = t[2] / 100;
          if (0 === i) return [0, 0, 0];
          return [e, 100 * (2 * (n *= (i *= 2) <= 1 ? i : 2 - i) / (i + n)), 100 * ((i + n) / 2)];
        },
        hsl2hwb: function hsl2hwb(t) {
          return o(h(t));
        },
        hsl2cmyk: function hsl2cmyk(t) {
          return s(h(t));
        },
        hsl2keyword: function hsl2keyword(t) {
          return l(h(t));
        },
        hsv2rgb: c,
        hsv2hsl: function hsv2hsl(t) {
          var e,
              n,
              i = t[0],
              a = t[1] / 100,
              r = t[2] / 100;
          return e = a * r, [i, 100 * (e = (e /= (n = (2 - a) * r) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)];
        },
        hsv2hwb: function hsv2hwb(t) {
          return o(c(t));
        },
        hsv2cmyk: function hsv2cmyk(t) {
          return s(c(t));
        },
        hsv2keyword: function hsv2keyword(t) {
          return l(c(t));
        },
        hwb2rgb: f,
        hwb2hsl: function hwb2hsl(t) {
          return i(f(t));
        },
        hwb2hsv: function hwb2hsv(t) {
          return a(f(t));
        },
        hwb2cmyk: function hwb2cmyk(t) {
          return s(f(t));
        },
        hwb2keyword: function hwb2keyword(t) {
          return l(f(t));
        },
        cmyk2rgb: m,
        cmyk2hsl: function cmyk2hsl(t) {
          return i(m(t));
        },
        cmyk2hsv: function cmyk2hsv(t) {
          return a(m(t));
        },
        cmyk2hwb: function cmyk2hwb(t) {
          return o(m(t));
        },
        cmyk2keyword: function cmyk2keyword(t) {
          return l(m(t));
        },
        keyword2rgb: w,
        keyword2hsl: function keyword2hsl(t) {
          return i(w(t));
        },
        keyword2hsv: function keyword2hsv(t) {
          return a(w(t));
        },
        keyword2hwb: function keyword2hwb(t) {
          return o(w(t));
        },
        keyword2cmyk: function keyword2cmyk(t) {
          return s(w(t));
        },
        keyword2lab: function keyword2lab(t) {
          return d(w(t));
        },
        keyword2xyz: function keyword2xyz(t) {
          return u(w(t));
        },
        xyz2rgb: p,
        xyz2lab: v,
        xyz2lch: function xyz2lch(t) {
          return x(v(t));
        },
        lab2xyz: y,
        lab2rgb: _,
        lab2lch: x,
        lch2lab: k,
        lch2xyz: function lch2xyz(t) {
          return y(k(t));
        },
        lch2rgb: function lch2rgb(t) {
          return _(k(t));
        }
      };
      var M = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      },
          S = {};

      for (var D in M) {
        S[JSON.stringify(M[D])] = D;
      }
    }, {}],
    4: [function (t, e, n) {
      var i = t(3),
          a = function a() {
        return new u();
      };

      for (var r in i) {
        a[r + "Raw"] = function (t) {
          return function (e) {
            return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e);
          };
        }(r);

        var o = /(\w+)2(\w+)/.exec(r),
            s = o[1],
            l = o[2];

        (a[s] = a[s] || {})[l] = a[r] = function (t) {
          return function (e) {
            "number" == typeof e && (e = Array.prototype.slice.call(arguments));
            var n = i[t](e);
            if ("string" == typeof n || void 0 === n) return n;

            for (var a = 0; a < n.length; a++) {
              n[a] = Math.round(n[a]);
            }

            return n;
          };
        }(r);
      }

      var u = function u() {
        this.convs = {};
      };

      u.prototype.routeSpace = function (t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n));
      }, u.prototype.setValues = function (t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this;
      }, u.prototype.getValues = function (t) {
        var e = this.convs[t];

        if (!e) {
          var n = this.space,
              i = this.convs[n];
          e = a[n][t](i), this.convs[t] = e;
        }

        return e;
      }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
        u.prototype[t] = function (e) {
          return this.routeSpace(t, arguments);
        };
      }), e.exports = a;
    }, {
      3: 3
    }],
    5: [function (t, e, n) {
      "use strict";

      e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      };
    }, {}],
    6: [function (t, e, n) {
      var i, a;
      i = this, a = function a() {
        "use strict";

        var n;

        function i() {
          return n.apply(null, arguments);
        }

        function a(t) {
          return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t);
        }

        function r(t) {
          return null != t && "[object Object]" === Object.prototype.toString.call(t);
        }

        function o(t) {
          return void 0 === t;
        }

        function s(t) {
          return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t);
        }

        function l(t) {
          return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t);
        }

        function u(t, e) {
          var n,
              i = [];

          for (n = 0; n < t.length; ++n) {
            i.push(e(t[n], n));
          }

          return i;
        }

        function d(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }

        function h(t, e) {
          for (var n in e) {
            d(e, n) && (t[n] = e[n]);
          }

          return d(e, "toString") && (t.toString = e.toString), d(e, "valueOf") && (t.valueOf = e.valueOf), t;
        }

        function c(t, e, n, i) {
          return Ce(t, e, n, i, !0).utc();
        }

        function f(t) {
          return null == t._pf && (t._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
          }), t._pf;
        }

        var g = Array.prototype.some ? Array.prototype.some : function (t) {
          for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++) {
            if (i in e && t.call(this, e[i], i, e)) return !0;
          }

          return !1;
        };

        function m(t) {
          if (null == t._isValid) {
            var e = f(t),
                n = g.call(e.parsedDateParts, function (t) {
              return null != t;
            }),
                i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
            if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return i;
            t._isValid = i;
          }

          return t._isValid;
        }

        function p(t) {
          var e = c(NaN);
          return null != t ? h(f(e), t) : f(e).userInvalidated = !0, e;
        }

        var v = i.momentProperties = [];

        function y(t, e) {
          var n, i, a;
          if (o(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), o(e._i) || (t._i = e._i), o(e._f) || (t._f = e._f), o(e._l) || (t._l = e._l), o(e._strict) || (t._strict = e._strict), o(e._tzm) || (t._tzm = e._tzm), o(e._isUTC) || (t._isUTC = e._isUTC), o(e._offset) || (t._offset = e._offset), o(e._pf) || (t._pf = f(e)), o(e._locale) || (t._locale = e._locale), v.length > 0) for (n = 0; n < v.length; n++) {
            o(a = e[i = v[n]]) || (t[i] = a);
          }
          return t;
        }

        var b = !1;

        function x(t) {
          y(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === b && (b = !0, i.updateOffset(this), b = !1);
        }

        function _(t) {
          return t instanceof x || null != t && null != t._isAMomentObject;
        }

        function k(t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        }

        function w(t) {
          var e = +t,
              n = 0;
          return 0 !== e && isFinite(e) && (n = k(e)), n;
        }

        function M(t, e, n) {
          var i,
              a = Math.min(t.length, e.length),
              r = Math.abs(t.length - e.length),
              o = 0;

          for (i = 0; i < a; i++) {
            (n && t[i] !== e[i] || !n && w(t[i]) !== w(e[i])) && o++;
          }

          return o + r;
        }

        function S(t) {
          !1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t);
        }

        function D(t, e) {
          var n = !0;
          return h(function () {
            if (null != i.deprecationHandler && i.deprecationHandler(null, t), n) {
              for (var a, r = [], o = 0; o < arguments.length; o++) {
                if (a = "", "object" == _typeof(arguments[o])) {
                  for (var s in a += "\n[" + o + "] ", arguments[0]) {
                    a += s + ": " + arguments[0][s] + ", ";
                  }

                  a = a.slice(0, -2);
                } else a = arguments[o];

                r.push(a);
              }

              S(t + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + new Error().stack), n = !1;
            }

            return e.apply(this, arguments);
          }, e);
        }

        var C = {};

        function P(t, e) {
          null != i.deprecationHandler && i.deprecationHandler(t, e), C[t] || (S(e), C[t] = !0);
        }

        function T(t) {
          return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t);
        }

        function A(t, e) {
          var n,
              i = h({}, t);

          for (n in e) {
            d(e, n) && (r(t[n]) && r(e[n]) ? (i[n] = {}, h(i[n], t[n]), h(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
          }

          for (n in t) {
            d(t, n) && !d(e, n) && r(t[n]) && (i[n] = h({}, i[n]));
          }

          return i;
        }

        function I(t) {
          null != t && this.set(t);
        }

        i.suppressDeprecationWarnings = !1, i.deprecationHandler = null;
        var O = Object.keys ? Object.keys : function (t) {
          var e,
              n = [];

          for (e in t) {
            d(t, e) && n.push(e);
          }

          return n;
        },
            F = {};

        function R(t, e) {
          var n = t.toLowerCase();
          F[n] = F[n + "s"] = F[e] = t;
        }

        function L(t) {
          return "string" == typeof t ? F[t] || F[t.toLowerCase()] : void 0;
        }

        function W(t) {
          var e,
              n,
              i = {};

          for (n in t) {
            d(t, n) && (e = L(n)) && (i[e] = t[n]);
          }

          return i;
        }

        var Y = {};

        function N(t, e) {
          Y[t] = e;
        }

        function z(t, e) {
          return function (n) {
            return null != n ? (V(this, t, n), i.updateOffset(this, e), this) : B(this, t);
          };
        }

        function B(t, e) {
          return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
        }

        function V(t, e, n) {
          t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n);
        }

        function H(t, e, n) {
          var i = "" + Math.abs(t),
              a = e - i.length;
          return (t >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + i;
        }

        var E = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            j = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            U = {},
            q = {};

        function G(t, e, n, i) {
          var a = i;
          "string" == typeof i && (a = function a() {
            return this[i]();
          }), t && (q[t] = a), e && (q[e[0]] = function () {
            return H(a.apply(this, arguments), e[1], e[2]);
          }), n && (q[n] = function () {
            return this.localeData().ordinal(a.apply(this, arguments), t);
          });
        }

        function Z(t, e) {
          return t.isValid() ? (e = X(e, t.localeData()), U[e] = U[e] || function (t) {
            var e,
                n,
                i,
                a = t.match(E);

            for (e = 0, n = a.length; e < n; e++) {
              q[a[e]] ? a[e] = q[a[e]] : a[e] = (i = a[e]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
            }

            return function (e) {
              var i,
                  r = "";

              for (i = 0; i < n; i++) {
                r += T(a[i]) ? a[i].call(e, t) : a[i];
              }

              return r;
            };
          }(e), U[e](t)) : t.localeData().invalidDate();
        }

        function X(t, e) {
          var n = 5;

          function i(t) {
            return e.longDateFormat(t) || t;
          }

          for (j.lastIndex = 0; n >= 0 && j.test(t);) {
            t = t.replace(j, i), j.lastIndex = 0, n -= 1;
          }

          return t;
        }

        var J = /\d/,
            K = /\d\d/,
            Q = /\d{3}/,
            $ = /\d{4}/,
            tt = /[+-]?\d{6}/,
            et = /\d\d?/,
            nt = /\d\d\d\d?/,
            it = /\d\d\d\d\d\d?/,
            at = /\d{1,3}/,
            rt = /\d{1,4}/,
            ot = /[+-]?\d{1,6}/,
            st = /\d+/,
            lt = /[+-]?\d+/,
            ut = /Z|[+-]\d\d:?\d\d/gi,
            dt = /Z|[+-]\d\d(?::?\d\d)?/gi,
            ht = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            ct = {};

        function ft(t, e, n) {
          ct[t] = T(e) ? e : function (t, i) {
            return t && n ? n : e;
          };
        }

        function gt(t, e) {
          return d(ct, t) ? ct[t](e._strict, e._locale) : new RegExp(mt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, a) {
            return e || n || i || a;
          })));
        }

        function mt(t) {
          return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }

        var pt = {};

        function vt(t, e) {
          var n,
              i = e;

          for ("string" == typeof t && (t = [t]), s(e) && (i = function i(t, n) {
            n[e] = w(t);
          }), n = 0; n < t.length; n++) {
            pt[t[n]] = i;
          }
        }

        function yt(t, e) {
          vt(t, function (t, n, i, a) {
            i._w = i._w || {}, e(t, i._w, i, a);
          });
        }

        function bt(t, e, n) {
          null != e && d(pt, t) && pt[t](e, n._a, n, t);
        }

        var xt = 0,
            _t = 1,
            kt = 2,
            wt = 3,
            Mt = 4,
            St = 5,
            Dt = 6,
            Ct = 7,
            Pt = 8,
            Tt = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
          var e;

          for (e = 0; e < this.length; ++e) {
            if (this[e] === t) return e;
          }

          return -1;
        };

        function At(t, e) {
          return new Date(Date.UTC(t, e + 1, 0)).getUTCDate();
        }

        G("M", ["MM", 2], "Mo", function () {
          return this.month() + 1;
        }), G("MMM", 0, 0, function (t) {
          return this.localeData().monthsShort(this, t);
        }), G("MMMM", 0, 0, function (t) {
          return this.localeData().months(this, t);
        }), R("month", "M"), N("month", 8), ft("M", et), ft("MM", et, K), ft("MMM", function (t, e) {
          return e.monthsShortRegex(t);
        }), ft("MMMM", function (t, e) {
          return e.monthsRegex(t);
        }), vt(["M", "MM"], function (t, e) {
          e[_t] = w(t) - 1;
        }), vt(["MMM", "MMMM"], function (t, e, n, i) {
          var a = n._locale.monthsParse(t, i, n._strict);

          null != a ? e[_t] = a : f(n).invalidMonth = t;
        });
        var It = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            Ot = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            Ft = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

        function Rt(t, e) {
          var n;
          if (!t.isValid()) return t;
          if ("string" == typeof e) if (/^\d+$/.test(e)) e = w(e);else if (!s(e = t.localeData().monthsParse(e))) return t;
          return n = Math.min(t.date(), At(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t;
        }

        function Lt(t) {
          return null != t ? (Rt(this, t), i.updateOffset(this, !0), this) : B(this, "Month");
        }

        var Wt = ht,
            Yt = ht;

        function Nt() {
          function t(t, e) {
            return e.length - t.length;
          }

          var e,
              n,
              i = [],
              a = [],
              r = [];

          for (e = 0; e < 12; e++) {
            n = c([2e3, e]), i.push(this.monthsShort(n, "")), a.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
          }

          for (i.sort(t), a.sort(t), r.sort(t), e = 0; e < 12; e++) {
            i[e] = mt(i[e]), a[e] = mt(a[e]);
          }

          for (e = 0; e < 24; e++) {
            r[e] = mt(r[e]);
          }

          this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
        }

        function zt(t) {
          return Bt(t) ? 366 : 365;
        }

        function Bt(t) {
          return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
        }

        G("Y", 0, 0, function () {
          var t = this.year();
          return t <= 9999 ? "" + t : "+" + t;
        }), G(0, ["YY", 2], 0, function () {
          return this.year() % 100;
        }), G(0, ["YYYY", 4], 0, "year"), G(0, ["YYYYY", 5], 0, "year"), G(0, ["YYYYYY", 6, !0], 0, "year"), R("year", "y"), N("year", 1), ft("Y", lt), ft("YY", et, K), ft("YYYY", rt, $), ft("YYYYY", ot, tt), ft("YYYYYY", ot, tt), vt(["YYYYY", "YYYYYY"], xt), vt("YYYY", function (t, e) {
          e[xt] = 2 === t.length ? i.parseTwoDigitYear(t) : w(t);
        }), vt("YY", function (t, e) {
          e[xt] = i.parseTwoDigitYear(t);
        }), vt("Y", function (t, e) {
          e[xt] = parseInt(t, 10);
        }), i.parseTwoDigitYear = function (t) {
          return w(t) + (w(t) > 68 ? 1900 : 2e3);
        };
        var Vt = z("FullYear", !0);

        function Ht(t) {
          var e = new Date(Date.UTC.apply(null, arguments));
          return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e;
        }

        function Et(t, e, n) {
          var i = 7 + e - n;
          return -((7 + Ht(t, 0, i).getUTCDay() - e) % 7) + i - 1;
        }

        function jt(t, e, n, i, a) {
          var r,
              o,
              s = 1 + 7 * (e - 1) + (7 + n - i) % 7 + Et(t, i, a);
          return s <= 0 ? o = zt(r = t - 1) + s : s > zt(t) ? (r = t + 1, o = s - zt(t)) : (r = t, o = s), {
            year: r,
            dayOfYear: o
          };
        }

        function Ut(t, e, n) {
          var i,
              a,
              r = Et(t.year(), e, n),
              o = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
          return o < 1 ? i = o + qt(a = t.year() - 1, e, n) : o > qt(t.year(), e, n) ? (i = o - qt(t.year(), e, n), a = t.year() + 1) : (a = t.year(), i = o), {
            week: i,
            year: a
          };
        }

        function qt(t, e, n) {
          var i = Et(t, e, n),
              a = Et(t + 1, e, n);
          return (zt(t) - i + a) / 7;
        }

        G("w", ["ww", 2], "wo", "week"), G("W", ["WW", 2], "Wo", "isoWeek"), R("week", "w"), R("isoWeek", "W"), N("week", 5), N("isoWeek", 5), ft("w", et), ft("ww", et, K), ft("W", et), ft("WW", et, K), yt(["w", "ww", "W", "WW"], function (t, e, n, i) {
          e[i.substr(0, 1)] = w(t);
        }), G("d", 0, "do", "day"), G("dd", 0, 0, function (t) {
          return this.localeData().weekdaysMin(this, t);
        }), G("ddd", 0, 0, function (t) {
          return this.localeData().weekdaysShort(this, t);
        }), G("dddd", 0, 0, function (t) {
          return this.localeData().weekdays(this, t);
        }), G("e", 0, 0, "weekday"), G("E", 0, 0, "isoWeekday"), R("day", "d"), R("weekday", "e"), R("isoWeekday", "E"), N("day", 11), N("weekday", 11), N("isoWeekday", 11), ft("d", et), ft("e", et), ft("E", et), ft("dd", function (t, e) {
          return e.weekdaysMinRegex(t);
        }), ft("ddd", function (t, e) {
          return e.weekdaysShortRegex(t);
        }), ft("dddd", function (t, e) {
          return e.weekdaysRegex(t);
        }), yt(["dd", "ddd", "dddd"], function (t, e, n, i) {
          var a = n._locale.weekdaysParse(t, i, n._strict);

          null != a ? e.d = a : f(n).invalidWeekday = t;
        }), yt(["d", "e", "E"], function (t, e, n, i) {
          e[i] = w(t);
        });
        var Gt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            Zt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            Xt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            Jt = ht,
            Kt = ht,
            Qt = ht;

        function $t() {
          function t(t, e) {
            return e.length - t.length;
          }

          var e,
              n,
              i,
              a,
              r,
              o = [],
              s = [],
              l = [],
              u = [];

          for (e = 0; e < 7; e++) {
            n = c([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), a = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), o.push(i), s.push(a), l.push(r), u.push(i), u.push(a), u.push(r);
          }

          for (o.sort(t), s.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++) {
            s[e] = mt(s[e]), l[e] = mt(l[e]), u[e] = mt(u[e]);
          }

          this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i");
        }

        function te() {
          return this.hours() % 12 || 12;
        }

        function ee(t, e) {
          G(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), e);
          });
        }

        function ne(t, e) {
          return e._meridiemParse;
        }

        G("H", ["HH", 2], 0, "hour"), G("h", ["hh", 2], 0, te), G("k", ["kk", 2], 0, function () {
          return this.hours() || 24;
        }), G("hmm", 0, 0, function () {
          return "" + te.apply(this) + H(this.minutes(), 2);
        }), G("hmmss", 0, 0, function () {
          return "" + te.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2);
        }), G("Hmm", 0, 0, function () {
          return "" + this.hours() + H(this.minutes(), 2);
        }), G("Hmmss", 0, 0, function () {
          return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2);
        }), ee("a", !0), ee("A", !1), R("hour", "h"), N("hour", 13), ft("a", ne), ft("A", ne), ft("H", et), ft("h", et), ft("k", et), ft("HH", et, K), ft("hh", et, K), ft("kk", et, K), ft("hmm", nt), ft("hmmss", it), ft("Hmm", nt), ft("Hmmss", it), vt(["H", "HH"], wt), vt(["k", "kk"], function (t, e, n) {
          var i = w(t);
          e[wt] = 24 === i ? 0 : i;
        }), vt(["a", "A"], function (t, e, n) {
          n._isPm = n._locale.isPM(t), n._meridiem = t;
        }), vt(["h", "hh"], function (t, e, n) {
          e[wt] = w(t), f(n).bigHour = !0;
        }), vt("hmm", function (t, e, n) {
          var i = t.length - 2;
          e[wt] = w(t.substr(0, i)), e[Mt] = w(t.substr(i)), f(n).bigHour = !0;
        }), vt("hmmss", function (t, e, n) {
          var i = t.length - 4,
              a = t.length - 2;
          e[wt] = w(t.substr(0, i)), e[Mt] = w(t.substr(i, 2)), e[St] = w(t.substr(a)), f(n).bigHour = !0;
        }), vt("Hmm", function (t, e, n) {
          var i = t.length - 2;
          e[wt] = w(t.substr(0, i)), e[Mt] = w(t.substr(i));
        }), vt("Hmmss", function (t, e, n) {
          var i = t.length - 4,
              a = t.length - 2;
          e[wt] = w(t.substr(0, i)), e[Mt] = w(t.substr(i, 2)), e[St] = w(t.substr(a));
        });
        var ie,
            ae = z("Hours", !0),
            re = {
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
          },
          invalidDate: "Invalid date",
          ordinal: "%d",
          dayOfMonthOrdinalParse: /\d{1,2}/,
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          months: Ot,
          monthsShort: Ft,
          week: {
            dow: 0,
            doy: 6
          },
          weekdays: Gt,
          weekdaysMin: Xt,
          weekdaysShort: Zt,
          meridiemParse: /[ap]\.?m?\.?/i
        },
            oe = {},
            se = {};

        function le(t) {
          return t ? t.toLowerCase().replace("_", "-") : t;
        }

        function ue(n) {
          var i = null;
          if (!oe[n] && void 0 !== e && e && e.exports) try {
            i = ie._abbr, t("./locale/" + n), de(i);
          } catch (t) {}
          return oe[n];
        }

        function de(t, e) {
          var n;
          return t && (n = o(e) ? ce(t) : he(t, e)) && (ie = n), ie._abbr;
        }

        function he(t, e) {
          if (null !== e) {
            var n = re;
            if (e.abbr = t, null != oe[t]) P("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = oe[t]._config;else if (null != e.parentLocale) {
              if (null == oe[e.parentLocale]) return se[e.parentLocale] || (se[e.parentLocale] = []), se[e.parentLocale].push({
                name: t,
                config: e
              }), null;
              n = oe[e.parentLocale]._config;
            }
            return oe[t] = new I(A(n, e)), se[t] && se[t].forEach(function (t) {
              he(t.name, t.config);
            }), de(t), oe[t];
          }

          return delete oe[t], null;
        }

        function ce(t) {
          var e;
          if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ie;

          if (!a(t)) {
            if (e = ue(t)) return e;
            t = [t];
          }

          return function (t) {
            for (var e, n, i, a, r = 0; r < t.length;) {
              for (e = (a = le(t[r]).split("-")).length, n = (n = le(t[r + 1])) ? n.split("-") : null; e > 0;) {
                if (i = ue(a.slice(0, e).join("-"))) return i;
                if (n && n.length >= e && M(a, n, !0) >= e - 1) break;
                e--;
              }

              r++;
            }

            return null;
          }(t);
        }

        function fe(t) {
          var e,
              n = t._a;
          return n && -2 === f(t).overflow && (e = n[_t] < 0 || n[_t] > 11 ? _t : n[kt] < 1 || n[kt] > At(n[xt], n[_t]) ? kt : n[wt] < 0 || n[wt] > 24 || 24 === n[wt] && (0 !== n[Mt] || 0 !== n[St] || 0 !== n[Dt]) ? wt : n[Mt] < 0 || n[Mt] > 59 ? Mt : n[St] < 0 || n[St] > 59 ? St : n[Dt] < 0 || n[Dt] > 999 ? Dt : -1, f(t)._overflowDayOfYear && (e < xt || e > kt) && (e = kt), f(t)._overflowWeeks && -1 === e && (e = Ct), f(t)._overflowWeekday && -1 === e && (e = Pt), f(t).overflow = e), t;
        }

        var ge = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            me = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            pe = /Z|[+-]\d\d(?::?\d\d)?/,
            ve = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
            ye = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
            be = /^\/?Date\((\-?\d+)/i;

        function xe(t) {
          var e,
              n,
              i,
              a,
              r,
              o,
              s = t._i,
              l = ge.exec(s) || me.exec(s);

          if (l) {
            for (f(t).iso = !0, e = 0, n = ve.length; e < n; e++) {
              if (ve[e][1].exec(l[1])) {
                a = ve[e][0], i = !1 !== ve[e][2];
                break;
              }
            }

            if (null == a) return void (t._isValid = !1);

            if (l[3]) {
              for (e = 0, n = ye.length; e < n; e++) {
                if (ye[e][1].exec(l[3])) {
                  r = (l[2] || " ") + ye[e][0];
                  break;
                }
              }

              if (null == r) return void (t._isValid = !1);
            }

            if (!i && null != r) return void (t._isValid = !1);

            if (l[4]) {
              if (!pe.exec(l[4])) return void (t._isValid = !1);
              o = "Z";
            }

            t._f = a + (r || "") + (o || ""), Se(t);
          } else t._isValid = !1;
        }

        var _e = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

        function ke(t) {
          var e,
              n,
              i,
              a,
              r,
              o,
              s,
              l = {
            " GMT": " +0000",
            " EDT": " -0400",
            " EST": " -0500",
            " CDT": " -0500",
            " CST": " -0600",
            " MDT": " -0600",
            " MST": " -0700",
            " PDT": " -0700",
            " PST": " -0800"
          };

          if (e = t._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), n = _e.exec(e)) {
            if (i = n[1] ? "ddd" + (5 === n[1].length ? ", " : " ") : "", a = "D MMM " + (n[2].length > 10 ? "YYYY " : "YY "), r = "HH:mm" + (n[4] ? ":ss" : ""), n[1]) {
              var u = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(n[2]).getDay()];
              if (n[1].substr(0, 3) !== u) return f(t).weekdayMismatch = !0, void (t._isValid = !1);
            }

            switch (n[5].length) {
              case 2:
                o = 0 === s ? " +0000" : ((s = "YXWVUTSRQPONZABCDEFGHIKLM".indexOf(n[5][1].toUpperCase()) - 12) < 0 ? " -" : " +") + ("" + s).replace(/^-?/, "0").match(/..$/)[0] + "00";
                break;

              case 4:
                o = l[n[5]];
                break;

              default:
                o = l[" GMT"];
            }

            n[5] = o, t._i = n.splice(1).join(""), " ZZ", t._f = i + a + r + " ZZ", Se(t), f(t).rfc2822 = !0;
          } else t._isValid = !1;
        }

        function we(t, e, n) {
          return null != t ? t : null != e ? e : n;
        }

        function Me(t) {
          var e,
              n,
              a,
              r,
              o = [];

          if (!t._d) {
            for (a = function (t) {
              var e = new Date(i.now());
              return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()];
            }(t), t._w && null == t._a[kt] && null == t._a[_t] && function (t) {
              var e, n, i, a, r, o, s, l;
              if (null != (e = t._w).GG || null != e.W || null != e.E) r = 1, o = 4, n = we(e.GG, t._a[xt], Ut(Pe(), 1, 4).year), i = we(e.W, 1), ((a = we(e.E, 1)) < 1 || a > 7) && (l = !0);else {
                r = t._locale._week.dow, o = t._locale._week.doy;
                var u = Ut(Pe(), r, o);
                n = we(e.gg, t._a[xt], u.year), i = we(e.w, u.week), null != e.d ? ((a = e.d) < 0 || a > 6) && (l = !0) : null != e.e ? (a = e.e + r, (e.e < 0 || e.e > 6) && (l = !0)) : a = r;
              }
              i < 1 || i > qt(n, r, o) ? f(t)._overflowWeeks = !0 : null != l ? f(t)._overflowWeekday = !0 : (s = jt(n, i, a, r, o), t._a[xt] = s.year, t._dayOfYear = s.dayOfYear);
            }(t), null != t._dayOfYear && (r = we(t._a[xt], a[xt]), (t._dayOfYear > zt(r) || 0 === t._dayOfYear) && (f(t)._overflowDayOfYear = !0), n = Ht(r, 0, t._dayOfYear), t._a[_t] = n.getUTCMonth(), t._a[kt] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) {
              t._a[e] = o[e] = a[e];
            }

            for (; e < 7; e++) {
              t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            }

            24 === t._a[wt] && 0 === t._a[Mt] && 0 === t._a[St] && 0 === t._a[Dt] && (t._nextDay = !0, t._a[wt] = 0), t._d = (t._useUTC ? Ht : function (t, e, n, i, a, r, o) {
              var s = new Date(t, e, n, i, a, r, o);
              return t < 100 && t >= 0 && isFinite(s.getFullYear()) && s.setFullYear(t), s;
            }).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[wt] = 24);
          }
        }

        function Se(t) {
          if (t._f !== i.ISO_8601) {
            if (t._f !== i.RFC_2822) {
              t._a = [], f(t).empty = !0;
              var e,
                  n,
                  a,
                  r,
                  o,
                  s = "" + t._i,
                  l = s.length,
                  u = 0;

              for (a = X(t._f, t._locale).match(E) || [], e = 0; e < a.length; e++) {
                r = a[e], (n = (s.match(gt(r, t)) || [])[0]) && ((o = s.substr(0, s.indexOf(n))).length > 0 && f(t).unusedInput.push(o), s = s.slice(s.indexOf(n) + n.length), u += n.length), q[r] ? (n ? f(t).empty = !1 : f(t).unusedTokens.push(r), bt(r, n, t)) : t._strict && !n && f(t).unusedTokens.push(r);
              }

              f(t).charsLeftOver = l - u, s.length > 0 && f(t).unusedInput.push(s), t._a[wt] <= 12 && !0 === f(t).bigHour && t._a[wt] > 0 && (f(t).bigHour = void 0), f(t).parsedDateParts = t._a.slice(0), f(t).meridiem = t._meridiem, t._a[wt] = function (t, e, n) {
                var i;
                if (null == n) return e;
                return null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? ((i = t.isPM(n)) && e < 12 && (e += 12), i || 12 !== e || (e = 0), e) : e;
              }(t._locale, t._a[wt], t._meridiem), Me(t), fe(t);
            } else ke(t);
          } else xe(t);
        }

        function De(t) {
          var e = t._i,
              n = t._f;
          return t._locale = t._locale || ce(t._l), null === e || void 0 === n && "" === e ? p({
            nullInput: !0
          }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), _(e) ? new x(fe(e)) : (l(e) ? t._d = e : a(n) ? function (t) {
            var e, n, i, a, r;
            if (0 === t._f.length) return f(t).invalidFormat = !0, void (t._d = new Date(NaN));

            for (a = 0; a < t._f.length; a++) {
              r = 0, e = y({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[a], Se(e), m(e) && (r += f(e).charsLeftOver, r += 10 * f(e).unusedTokens.length, f(e).score = r, (null == i || r < i) && (i = r, n = e));
            }

            h(t, n || e);
          }(t) : n ? Se(t) : function (t) {
            var e = t._i;
            o(e) ? t._d = new Date(i.now()) : l(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? function (t) {
              var e = be.exec(t._i);
              null === e ? (xe(t), !1 === t._isValid && (delete t._isValid, ke(t), !1 === t._isValid && (delete t._isValid, i.createFromInputFallback(t)))) : t._d = new Date(+e[1]);
            }(t) : a(e) ? (t._a = u(e.slice(0), function (t) {
              return parseInt(t, 10);
            }), Me(t)) : r(e) ? function (t) {
              if (!t._d) {
                var e = W(t._i);
                t._a = u([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                  return t && parseInt(t, 10);
                }), Me(t);
              }
            }(t) : s(e) ? t._d = new Date(e) : i.createFromInputFallback(t);
          }(t), m(t) || (t._d = null), t));
        }

        function Ce(t, e, n, i, o) {
          var s,
              l = {};
          return !0 !== n && !1 !== n || (i = n, n = void 0), (r(t) && function (t) {
            var e;

            for (e in t) {
              return !1;
            }

            return !0;
          }(t) || a(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = o, l._l = n, l._i = t, l._f = e, l._strict = i, (s = new x(fe(De(l))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s;
        }

        function Pe(t, e, n, i) {
          return Ce(t, e, n, i, !1);
        }

        i.createFromInputFallback = D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
          t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
        }), i.ISO_8601 = function () {}, i.RFC_2822 = function () {};
        var Te = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
          var t = Pe.apply(null, arguments);
          return this.isValid() && t.isValid() ? t < this ? this : t : p();
        }),
            Ae = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
          var t = Pe.apply(null, arguments);
          return this.isValid() && t.isValid() ? t > this ? this : t : p();
        });

        function Ie(t, e) {
          var n, i;
          if (1 === e.length && a(e[0]) && (e = e[0]), !e.length) return Pe();

          for (n = e[0], i = 1; i < e.length; ++i) {
            e[i].isValid() && !e[i][t](n) || (n = e[i]);
          }

          return n;
        }

        var Oe = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

        function Fe(t) {
          var e = W(t),
              n = e.year || 0,
              i = e.quarter || 0,
              a = e.month || 0,
              r = e.week || 0,
              o = e.day || 0,
              s = e.hour || 0,
              l = e.minute || 0,
              u = e.second || 0,
              d = e.millisecond || 0;
          this._isValid = function (t) {
            for (var e in t) {
              if (-1 === Oe.indexOf(e) || null != t[e] && isNaN(t[e])) return !1;
            }

            for (var n = !1, i = 0; i < Oe.length; ++i) {
              if (t[Oe[i]]) {
                if (n) return !1;
                parseFloat(t[Oe[i]]) !== w(t[Oe[i]]) && (n = !0);
              }
            }

            return !0;
          }(e), this._milliseconds = +d + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60, this._days = +o + 7 * r, this._months = +a + 3 * i + 12 * n, this._data = {}, this._locale = ce(), this._bubble();
        }

        function Re(t) {
          return t instanceof Fe;
        }

        function Le(t) {
          return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
        }

        function We(t, e) {
          G(t, 0, 0, function () {
            var t = this.utcOffset(),
                n = "+";
            return t < 0 && (t = -t, n = "-"), n + H(~~(t / 60), 2) + e + H(~~t % 60, 2);
          });
        }

        We("Z", ":"), We("ZZ", ""), ft("Z", dt), ft("ZZ", dt), vt(["Z", "ZZ"], function (t, e, n) {
          n._useUTC = !0, n._tzm = Ne(dt, t);
        });
        var Ye = /([\+\-]|\d\d)/gi;

        function Ne(t, e) {
          var n = (e || "").match(t);
          if (null === n) return null;
          var i = ((n[n.length - 1] || []) + "").match(Ye) || ["-", 0, 0],
              a = 60 * i[1] + w(i[2]);
          return 0 === a ? 0 : "+" === i[0] ? a : -a;
        }

        function ze(t, e) {
          var n, a;
          return e._isUTC ? (n = e.clone(), a = (_(t) || l(t) ? t.valueOf() : Pe(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + a), i.updateOffset(n, !1), n) : Pe(t).local();
        }

        function Be(t) {
          return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
        }

        function Ve() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }

        i.updateOffset = function () {};

        var He = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Ee = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

        function je(t, e) {
          var n,
              i,
              a,
              r = t,
              o = null;
          return Re(t) ? r = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
          } : s(t) ? (r = {}, e ? r[e] = t : r.milliseconds = t) : (o = He.exec(t)) ? (n = "-" === o[1] ? -1 : 1, r = {
            y: 0,
            d: w(o[kt]) * n,
            h: w(o[wt]) * n,
            m: w(o[Mt]) * n,
            s: w(o[St]) * n,
            ms: w(Le(1e3 * o[Dt])) * n
          }) : (o = Ee.exec(t)) ? (n = "-" === o[1] ? -1 : 1, r = {
            y: Ue(o[2], n),
            M: Ue(o[3], n),
            w: Ue(o[4], n),
            d: Ue(o[5], n),
            h: Ue(o[6], n),
            m: Ue(o[7], n),
            s: Ue(o[8], n)
          }) : null == r ? r = {} : "object" == _typeof(r) && ("from" in r || "to" in r) && (a = function (t, e) {
            var n;
            if (!t.isValid() || !e.isValid()) return {
              milliseconds: 0,
              months: 0
            };
            e = ze(e, t), t.isBefore(e) ? n = qe(t, e) : ((n = qe(e, t)).milliseconds = -n.milliseconds, n.months = -n.months);
            return n;
          }(Pe(r.from), Pe(r.to)), (r = {}).ms = a.milliseconds, r.M = a.months), i = new Fe(r), Re(t) && d(t, "_locale") && (i._locale = t._locale), i;
        }

        function Ue(t, e) {
          var n = t && parseFloat(t.replace(",", "."));
          return (isNaN(n) ? 0 : n) * e;
        }

        function qe(t, e) {
          var n = {
            milliseconds: 0,
            months: 0
          };
          return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n;
        }

        function Ge(t, e) {
          return function (n, i) {
            var a;
            return null === i || isNaN(+i) || (P(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = n, n = i, i = a), Ze(this, je(n = "string" == typeof n ? +n : n, i), t), this;
          };
        }

        function Ze(t, e, n, a) {
          var r = e._milliseconds,
              o = Le(e._days),
              s = Le(e._months);
          t.isValid() && (a = null == a || a, r && t._d.setTime(t._d.valueOf() + r * n), o && V(t, "Date", B(t, "Date") + o * n), s && Rt(t, B(t, "Month") + s * n), a && i.updateOffset(t, o || s));
        }

        je.fn = Fe.prototype, je.invalid = function () {
          return je(NaN);
        };
        var Xe = Ge(1, "add"),
            Je = Ge(-1, "subtract");

        function Ke(t) {
          var e;
          return void 0 === t ? this._locale._abbr : (null != (e = ce(t)) && (this._locale = e), this);
        }

        i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var Qe = D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
          return void 0 === t ? this.localeData() : this.locale(t);
        });

        function $e() {
          return this._locale;
        }

        function tn(t, e) {
          G(0, [t, t.length], 0, e);
        }

        function en(t, e, n, i, a) {
          var r;
          return null == t ? Ut(this, i, a).year : (e > (r = qt(t, i, a)) && (e = r), function (t, e, n, i, a) {
            var r = jt(t, e, n, i, a),
                o = Ht(r.year, 0, r.dayOfYear);
            return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
          }.call(this, t, e, n, i, a));
        }

        G(0, ["gg", 2], 0, function () {
          return this.weekYear() % 100;
        }), G(0, ["GG", 2], 0, function () {
          return this.isoWeekYear() % 100;
        }), tn("gggg", "weekYear"), tn("ggggg", "weekYear"), tn("GGGG", "isoWeekYear"), tn("GGGGG", "isoWeekYear"), R("weekYear", "gg"), R("isoWeekYear", "GG"), N("weekYear", 1), N("isoWeekYear", 1), ft("G", lt), ft("g", lt), ft("GG", et, K), ft("gg", et, K), ft("GGGG", rt, $), ft("gggg", rt, $), ft("GGGGG", ot, tt), ft("ggggg", ot, tt), yt(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
          e[i.substr(0, 2)] = w(t);
        }), yt(["gg", "GG"], function (t, e, n, a) {
          e[a] = i.parseTwoDigitYear(t);
        }), G("Q", 0, "Qo", "quarter"), R("quarter", "Q"), N("quarter", 7), ft("Q", J), vt("Q", function (t, e) {
          e[_t] = 3 * (w(t) - 1);
        }), G("D", ["DD", 2], "Do", "date"), R("date", "D"), N("date", 9), ft("D", et), ft("DD", et, K), ft("Do", function (t, e) {
          return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
        }), vt(["D", "DD"], kt), vt("Do", function (t, e) {
          e[kt] = w(t.match(et)[0]);
        });
        var nn = z("Date", !0);
        G("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), R("dayOfYear", "DDD"), N("dayOfYear", 4), ft("DDD", at), ft("DDDD", Q), vt(["DDD", "DDDD"], function (t, e, n) {
          n._dayOfYear = w(t);
        }), G("m", ["mm", 2], 0, "minute"), R("minute", "m"), N("minute", 14), ft("m", et), ft("mm", et, K), vt(["m", "mm"], Mt);
        var an = z("Minutes", !1);
        G("s", ["ss", 2], 0, "second"), R("second", "s"), N("second", 15), ft("s", et), ft("ss", et, K), vt(["s", "ss"], St);
        var rn,
            on = z("Seconds", !1);

        for (G("S", 0, 0, function () {
          return ~~(this.millisecond() / 100);
        }), G(0, ["SS", 2], 0, function () {
          return ~~(this.millisecond() / 10);
        }), G(0, ["SSS", 3], 0, "millisecond"), G(0, ["SSSS", 4], 0, function () {
          return 10 * this.millisecond();
        }), G(0, ["SSSSS", 5], 0, function () {
          return 100 * this.millisecond();
        }), G(0, ["SSSSSS", 6], 0, function () {
          return 1e3 * this.millisecond();
        }), G(0, ["SSSSSSS", 7], 0, function () {
          return 1e4 * this.millisecond();
        }), G(0, ["SSSSSSSS", 8], 0, function () {
          return 1e5 * this.millisecond();
        }), G(0, ["SSSSSSSSS", 9], 0, function () {
          return 1e6 * this.millisecond();
        }), R("millisecond", "ms"), N("millisecond", 16), ft("S", at, J), ft("SS", at, K), ft("SSS", at, Q), rn = "SSSS"; rn.length <= 9; rn += "S") {
          ft(rn, st);
        }

        function sn(t, e) {
          e[Dt] = w(1e3 * ("0." + t));
        }

        for (rn = "S"; rn.length <= 9; rn += "S") {
          vt(rn, sn);
        }

        var ln = z("Milliseconds", !1);
        G("z", 0, 0, "zoneAbbr"), G("zz", 0, 0, "zoneName");
        var un = x.prototype;

        function dn(t) {
          return t;
        }

        un.add = Xe, un.calendar = function (t, e) {
          var n = t || Pe(),
              a = ze(n, this).startOf("day"),
              r = i.calendarFormat(this, a) || "sameElse",
              o = e && (T(e[r]) ? e[r].call(this, n) : e[r]);
          return this.format(o || this.localeData().calendar(r, this, Pe(n)));
        }, un.clone = function () {
          return new x(this);
        }, un.diff = function (t, e, n) {
          var i, a, r, o;
          return this.isValid() && (i = ze(t, this)).isValid() ? (a = 6e4 * (i.utcOffset() - this.utcOffset()), "year" === (e = L(e)) || "month" === e || "quarter" === e ? (s = this, l = i, h = 12 * (l.year() - s.year()) + (l.month() - s.month()), c = s.clone().add(h, "months"), l - c < 0 ? (u = s.clone().add(h - 1, "months"), d = (l - c) / (c - u)) : (u = s.clone().add(h + 1, "months"), d = (l - c) / (u - c)), o = -(h + d) || 0, "quarter" === e ? o /= 3 : "year" === e && (o /= 12)) : (r = this - i, o = "second" === e ? r / 1e3 : "minute" === e ? r / 6e4 : "hour" === e ? r / 36e5 : "day" === e ? (r - a) / 864e5 : "week" === e ? (r - a) / 6048e5 : r), n ? o : k(o)) : NaN;
          var s, l, u, d, h, c;
        }, un.endOf = function (t) {
          return void 0 === (t = L(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"));
        }, un.format = function (t) {
          t || (t = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
          var e = Z(this, t);
          return this.localeData().postformat(e);
        }, un.from = function (t, e) {
          return this.isValid() && (_(t) && t.isValid() || Pe(t).isValid()) ? je({
            to: this,
            from: t
          }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
        }, un.fromNow = function (t) {
          return this.from(Pe(), t);
        }, un.to = function (t, e) {
          return this.isValid() && (_(t) && t.isValid() || Pe(t).isValid()) ? je({
            from: this,
            to: t
          }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
        }, un.toNow = function (t) {
          return this.to(Pe(), t);
        }, un.get = function (t) {
          return T(this[t = L(t)]) ? this[t]() : this;
        }, un.invalidAt = function () {
          return f(this).overflow;
        }, un.isAfter = function (t, e) {
          var n = _(t) ? t : Pe(t);
          return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = L(o(e) ? "millisecond" : e)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf());
        }, un.isBefore = function (t, e) {
          var n = _(t) ? t : Pe(t);
          return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = L(o(e) ? "millisecond" : e)) ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf());
        }, un.isBetween = function (t, e, n, i) {
          return ("(" === (i = i || "()")[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n));
        }, un.isSame = function (t, e) {
          var n,
              i = _(t) ? t : Pe(t);
          return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = L(e || "millisecond")) ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()));
        }, un.isSameOrAfter = function (t, e) {
          return this.isSame(t, e) || this.isAfter(t, e);
        }, un.isSameOrBefore = function (t, e) {
          return this.isSame(t, e) || this.isBefore(t, e);
        }, un.isValid = function () {
          return m(this);
        }, un.lang = Qe, un.locale = Ke, un.localeData = $e, un.max = Ae, un.min = Te, un.parsingFlags = function () {
          return h({}, f(this));
        }, un.set = function (t, e) {
          if ("object" == _typeof(t)) for (var n = function (t) {
            var e = [];

            for (var n in t) {
              e.push({
                unit: n,
                priority: Y[n]
              });
            }

            return e.sort(function (t, e) {
              return t.priority - e.priority;
            }), e;
          }(t = W(t)), i = 0; i < n.length; i++) {
            this[n[i].unit](t[n[i].unit]);
          } else if (T(this[t = L(t)])) return this[t](e);
          return this;
        }, un.startOf = function (t) {
          switch (t = L(t)) {
            case "year":
              this.month(0);

            case "quarter":
            case "month":
              this.date(1);

            case "week":
            case "isoWeek":
            case "day":
            case "date":
              this.hours(0);

            case "hour":
              this.minutes(0);

            case "minute":
              this.seconds(0);

            case "second":
              this.milliseconds(0);
          }

          return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this;
        }, un.subtract = Je, un.toArray = function () {
          var t = this;
          return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()];
        }, un.toObject = function () {
          var t = this;
          return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
          };
        }, un.toDate = function () {
          return new Date(this.valueOf());
        }, un.toISOString = function () {
          if (!this.isValid()) return null;
          var t = this.clone().utc();
          return t.year() < 0 || t.year() > 9999 ? Z(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : T(Date.prototype.toISOString) ? this.toDate().toISOString() : Z(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
        }, un.inspect = function () {
          if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
          var t = "moment",
              e = "";
          this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
          var n = "[" + t + '("]',
              i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
              a = e + '[")]';
          return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + a);
        }, un.toJSON = function () {
          return this.isValid() ? this.toISOString() : null;
        }, un.toString = function () {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }, un.unix = function () {
          return Math.floor(this.valueOf() / 1e3);
        }, un.valueOf = function () {
          return this._d.valueOf() - 6e4 * (this._offset || 0);
        }, un.creationData = function () {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
          };
        }, un.year = Vt, un.isLeapYear = function () {
          return Bt(this.year());
        }, un.weekYear = function (t) {
          return en.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
        }, un.isoWeekYear = function (t) {
          return en.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
        }, un.quarter = un.quarters = function (t) {
          return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3);
        }, un.month = Lt, un.daysInMonth = function () {
          return At(this.year(), this.month());
        }, un.week = un.weeks = function (t) {
          var e = this.localeData().week(this);
          return null == t ? e : this.add(7 * (t - e), "d");
        }, un.isoWeek = un.isoWeeks = function (t) {
          var e = Ut(this, 1, 4).week;
          return null == t ? e : this.add(7 * (t - e), "d");
        }, un.weeksInYear = function () {
          var t = this.localeData()._week;

          return qt(this.year(), t.dow, t.doy);
        }, un.isoWeeksInYear = function () {
          return qt(this.year(), 1, 4);
        }, un.date = nn, un.day = un.days = function (t) {
          if (!this.isValid()) return null != t ? this : NaN;
          var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != t ? (t = function (t, e) {
            return "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10);
          }(t, this.localeData()), this.add(t - e, "d")) : e;
        }, un.weekday = function (t) {
          if (!this.isValid()) return null != t ? this : NaN;
          var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return null == t ? e : this.add(t - e, "d");
        }, un.isoWeekday = function (t) {
          if (!this.isValid()) return null != t ? this : NaN;

          if (null != t) {
            var e = function (t, e) {
              return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t;
            }(t, this.localeData());

            return this.day(this.day() % 7 ? e : e - 7);
          }

          return this.day() || 7;
        }, un.dayOfYear = function (t) {
          var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
          return null == t ? e : this.add(t - e, "d");
        }, un.hour = un.hours = ae, un.minute = un.minutes = an, un.second = un.seconds = on, un.millisecond = un.milliseconds = ln, un.utcOffset = function (t, e, n) {
          var a,
              r = this._offset || 0;
          if (!this.isValid()) return null != t ? this : NaN;

          if (null != t) {
            if ("string" == typeof t) {
              if (null === (t = Ne(dt, t))) return this;
            } else Math.abs(t) < 16 && !n && (t *= 60);

            return !this._isUTC && e && (a = Be(this)), this._offset = t, this._isUTC = !0, null != a && this.add(a, "m"), r !== t && (!e || this._changeInProgress ? Ze(this, je(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this;
          }

          return this._isUTC ? r : Be(this);
        }, un.utc = function (t) {
          return this.utcOffset(0, t);
        }, un.local = function (t) {
          return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Be(this), "m")), this;
        }, un.parseZone = function () {
          if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
            var t = Ne(ut, this._i);
            null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
          }
          return this;
        }, un.hasAlignedHourOffset = function (t) {
          return !!this.isValid() && (t = t ? Pe(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0);
        }, un.isDST = function () {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }, un.isLocal = function () {
          return !!this.isValid() && !this._isUTC;
        }, un.isUtcOffset = function () {
          return !!this.isValid() && this._isUTC;
        }, un.isUtc = Ve, un.isUTC = Ve, un.zoneAbbr = function () {
          return this._isUTC ? "UTC" : "";
        }, un.zoneName = function () {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }, un.dates = D("dates accessor is deprecated. Use date instead.", nn), un.months = D("months accessor is deprecated. Use month instead", Lt), un.years = D("years accessor is deprecated. Use year instead", Vt), un.zone = D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (t, e) {
          return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
        }), un.isDSTShifted = D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
          if (!o(this._isDSTShifted)) return this._isDSTShifted;
          var t = {};

          if (y(t, this), (t = De(t))._a) {
            var e = t._isUTC ? c(t._a) : Pe(t._a);
            this._isDSTShifted = this.isValid() && M(t._a, e.toArray()) > 0;
          } else this._isDSTShifted = !1;

          return this._isDSTShifted;
        });
        var hn = I.prototype;

        function cn(t, e, n, i) {
          var a = ce(),
              r = c().set(i, e);
          return a[n](r, t);
        }

        function fn(t, e, n) {
          if (s(t) && (e = t, t = void 0), t = t || "", null != e) return cn(t, e, n, "month");
          var i,
              a = [];

          for (i = 0; i < 12; i++) {
            a[i] = cn(t, i, n, "month");
          }

          return a;
        }

        function gn(t, e, n, i) {
          "boolean" == typeof t ? (s(e) && (n = e, e = void 0), e = e || "") : (n = e = t, t = !1, s(e) && (n = e, e = void 0), e = e || "");
          var a,
              r = ce(),
              o = t ? r._week.dow : 0;
          if (null != n) return cn(e, (n + o) % 7, i, "day");
          var l = [];

          for (a = 0; a < 7; a++) {
            l[a] = cn(e, (a + o) % 7, i, "day");
          }

          return l;
        }

        hn.calendar = function (t, e, n) {
          var i = this._calendar[t] || this._calendar.sameElse;
          return T(i) ? i.call(e, n) : i;
        }, hn.longDateFormat = function (t) {
          var e = this._longDateFormat[t],
              n = this._longDateFormat[t.toUpperCase()];

          return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) {
            return t.slice(1);
          }), this._longDateFormat[t]);
        }, hn.invalidDate = function () {
          return this._invalidDate;
        }, hn.ordinal = function (t) {
          return this._ordinal.replace("%d", t);
        }, hn.preparse = dn, hn.postformat = dn, hn.relativeTime = function (t, e, n, i) {
          var a = this._relativeTime[n];
          return T(a) ? a(t, e, n, i) : a.replace(/%d/i, t);
        }, hn.pastFuture = function (t, e) {
          var n = this._relativeTime[t > 0 ? "future" : "past"];
          return T(n) ? n(e) : n.replace(/%s/i, e);
        }, hn.set = function (t) {
          var e, n;

          for (n in t) {
            T(e = t[n]) ? this[n] = e : this["_" + n] = e;
          }

          this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
        }, hn.months = function (t, e) {
          return t ? a(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || It).test(e) ? "format" : "standalone"][t.month()] : a(this._months) ? this._months : this._months.standalone;
        }, hn.monthsShort = function (t, e) {
          return t ? a(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[It.test(e) ? "format" : "standalone"][t.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
        }, hn.monthsParse = function (t, e, n) {
          var i, a, r;
          if (this._monthsParseExact) return function (t, e, n) {
            var i,
                a,
                r,
                o = t.toLocaleLowerCase();
            if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) {
              r = c([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(r, "").toLocaleLowerCase();
            }
            return n ? "MMM" === e ? -1 !== (a = Tt.call(this._shortMonthsParse, o)) ? a : null : -1 !== (a = Tt.call(this._longMonthsParse, o)) ? a : null : "MMM" === e ? -1 !== (a = Tt.call(this._shortMonthsParse, o)) ? a : -1 !== (a = Tt.call(this._longMonthsParse, o)) ? a : null : -1 !== (a = Tt.call(this._longMonthsParse, o)) ? a : -1 !== (a = Tt.call(this._shortMonthsParse, o)) ? a : null;
          }.call(this, t, e, n);

          for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
            if (a = c([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
            if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
            if (!n && this._monthsParse[i].test(t)) return i;
          }
        }, hn.monthsRegex = function (t) {
          return this._monthsParseExact ? (d(this, "_monthsRegex") || Nt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (d(this, "_monthsRegex") || (this._monthsRegex = Yt), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
        }, hn.monthsShortRegex = function (t) {
          return this._monthsParseExact ? (d(this, "_monthsRegex") || Nt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = Wt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
        }, hn.week = function (t) {
          return Ut(t, this._week.dow, this._week.doy).week;
        }, hn.firstDayOfYear = function () {
          return this._week.doy;
        }, hn.firstDayOfWeek = function () {
          return this._week.dow;
        }, hn.weekdays = function (t, e) {
          return t ? a(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone;
        }, hn.weekdaysMin = function (t) {
          return t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
        }, hn.weekdaysShort = function (t) {
          return t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
        }, hn.weekdaysParse = function (t, e, n) {
          var i, a, r;
          if (this._weekdaysParseExact) return function (t, e, n) {
            var i,
                a,
                r,
                o = t.toLocaleLowerCase();
            if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) {
              r = c([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(r, "").toLocaleLowerCase();
            }
            return n ? "dddd" === e ? -1 !== (a = Tt.call(this._weekdaysParse, o)) ? a : null : "ddd" === e ? -1 !== (a = Tt.call(this._shortWeekdaysParse, o)) ? a : null : -1 !== (a = Tt.call(this._minWeekdaysParse, o)) ? a : null : "dddd" === e ? -1 !== (a = Tt.call(this._weekdaysParse, o)) ? a : -1 !== (a = Tt.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Tt.call(this._minWeekdaysParse, o)) ? a : null : "ddd" === e ? -1 !== (a = Tt.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Tt.call(this._weekdaysParse, o)) ? a : -1 !== (a = Tt.call(this._minWeekdaysParse, o)) ? a : null : -1 !== (a = Tt.call(this._minWeekdaysParse, o)) ? a : -1 !== (a = Tt.call(this._weekdaysParse, o)) ? a : -1 !== (a = Tt.call(this._shortWeekdaysParse, o)) ? a : null;
          }.call(this, t, e, n);

          for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
            if (a = c([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(a, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (r = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[i] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
            if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
            if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
            if (!n && this._weekdaysParse[i].test(t)) return i;
          }
        }, hn.weekdaysRegex = function (t) {
          return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || $t.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = Jt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
        }, hn.weekdaysShortRegex = function (t) {
          return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || $t.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Kt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
        }, hn.weekdaysMinRegex = function (t) {
          return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || $t.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
        }, hn.isPM = function (t) {
          return "p" === (t + "").toLowerCase().charAt(0);
        }, hn.meridiem = function (t, e, n) {
          return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
        }, de("en", {
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function ordinal(t) {
            var e = t % 10;
            return t + (1 === w(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th");
          }
        }), i.lang = D("moment.lang is deprecated. Use moment.locale instead.", de), i.langData = D("moment.langData is deprecated. Use moment.localeData instead.", ce);
        var mn = Math.abs;

        function pn(t, e, n, i) {
          var a = je(e, n);
          return t._milliseconds += i * a._milliseconds, t._days += i * a._days, t._months += i * a._months, t._bubble();
        }

        function vn(t) {
          return t < 0 ? Math.floor(t) : Math.ceil(t);
        }

        function yn(t) {
          return 4800 * t / 146097;
        }

        function bn(t) {
          return 146097 * t / 4800;
        }

        function xn(t) {
          return function () {
            return this.as(t);
          };
        }

        var _n = xn("ms"),
            kn = xn("s"),
            wn = xn("m"),
            Mn = xn("h"),
            Sn = xn("d"),
            Dn = xn("w"),
            Cn = xn("M"),
            Pn = xn("y");

        function Tn(t) {
          return function () {
            return this.isValid() ? this._data[t] : NaN;
          };
        }

        var An = Tn("milliseconds"),
            In = Tn("seconds"),
            On = Tn("minutes"),
            Fn = Tn("hours"),
            Rn = Tn("days"),
            Ln = Tn("months"),
            Wn = Tn("years"),
            Yn = Math.round,
            Nn = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          M: 11
        },
            zn = Math.abs;

        function Bn() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var t,
              e,
              n = zn(this._milliseconds) / 1e3,
              i = zn(this._days),
              a = zn(this._months);
          t = k(n / 60), e = k(t / 60), n %= 60, t %= 60;
          var r = k(a / 12),
              o = a %= 12,
              s = i,
              l = e,
              u = t,
              d = n,
              h = this.asSeconds();
          return h ? (h < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (o ? o + "M" : "") + (s ? s + "D" : "") + (l || u || d ? "T" : "") + (l ? l + "H" : "") + (u ? u + "M" : "") + (d ? d + "S" : "") : "P0D";
        }

        var Vn = Fe.prototype;
        return Vn.isValid = function () {
          return this._isValid;
        }, Vn.abs = function () {
          var t = this._data;
          return this._milliseconds = mn(this._milliseconds), this._days = mn(this._days), this._months = mn(this._months), t.milliseconds = mn(t.milliseconds), t.seconds = mn(t.seconds), t.minutes = mn(t.minutes), t.hours = mn(t.hours), t.months = mn(t.months), t.years = mn(t.years), this;
        }, Vn.add = function (t, e) {
          return pn(this, t, e, 1);
        }, Vn.subtract = function (t, e) {
          return pn(this, t, e, -1);
        }, Vn.as = function (t) {
          if (!this.isValid()) return NaN;
          var e,
              n,
              i = this._milliseconds;
          if ("month" === (t = L(t)) || "year" === t) return e = this._days + i / 864e5, n = this._months + yn(e), "month" === t ? n : n / 12;

          switch (e = this._days + Math.round(bn(this._months)), t) {
            case "week":
              return e / 7 + i / 6048e5;

            case "day":
              return e + i / 864e5;

            case "hour":
              return 24 * e + i / 36e5;

            case "minute":
              return 1440 * e + i / 6e4;

            case "second":
              return 86400 * e + i / 1e3;

            case "millisecond":
              return Math.floor(864e5 * e) + i;

            default:
              throw new Error("Unknown unit " + t);
          }
        }, Vn.asMilliseconds = _n, Vn.asSeconds = kn, Vn.asMinutes = wn, Vn.asHours = Mn, Vn.asDays = Sn, Vn.asWeeks = Dn, Vn.asMonths = Cn, Vn.asYears = Pn, Vn.valueOf = function () {
          return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN;
        }, Vn._bubble = function () {
          var t,
              e,
              n,
              i,
              a,
              r = this._milliseconds,
              o = this._days,
              s = this._months,
              l = this._data;
          return r >= 0 && o >= 0 && s >= 0 || r <= 0 && o <= 0 && s <= 0 || (r += 864e5 * vn(bn(s) + o), o = 0, s = 0), l.milliseconds = r % 1e3, t = k(r / 1e3), l.seconds = t % 60, e = k(t / 60), l.minutes = e % 60, n = k(e / 60), l.hours = n % 24, o += k(n / 24), s += a = k(yn(o)), o -= vn(bn(a)), i = k(s / 12), s %= 12, l.days = o, l.months = s, l.years = i, this;
        }, Vn.get = function (t) {
          return t = L(t), this.isValid() ? this[t + "s"]() : NaN;
        }, Vn.milliseconds = An, Vn.seconds = In, Vn.minutes = On, Vn.hours = Fn, Vn.days = Rn, Vn.weeks = function () {
          return k(this.days() / 7);
        }, Vn.months = Ln, Vn.years = Wn, Vn.humanize = function (t) {
          if (!this.isValid()) return this.localeData().invalidDate();

          var e = this.localeData(),
              n = function (t, e, n) {
            var i = je(t).abs(),
                a = Yn(i.as("s")),
                r = Yn(i.as("m")),
                o = Yn(i.as("h")),
                s = Yn(i.as("d")),
                l = Yn(i.as("M")),
                u = Yn(i.as("y")),
                d = a <= Nn.ss && ["s", a] || a < Nn.s && ["ss", a] || r <= 1 && ["m"] || r < Nn.m && ["mm", r] || o <= 1 && ["h"] || o < Nn.h && ["hh", o] || s <= 1 && ["d"] || s < Nn.d && ["dd", s] || l <= 1 && ["M"] || l < Nn.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u];
            return d[2] = e, d[3] = +t > 0, d[4] = n, function (t, e, n, i, a) {
              return a.relativeTime(e || 1, !!n, t, i);
            }.apply(null, d);
          }(this, !t, e);

          return t && (n = e.pastFuture(+this, n)), e.postformat(n);
        }, Vn.toISOString = Bn, Vn.toString = Bn, Vn.toJSON = Bn, Vn.locale = Ke, Vn.localeData = $e, Vn.toIsoString = D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Bn), Vn.lang = Qe, G("X", 0, 0, "unix"), G("x", 0, 0, "valueOf"), ft("x", lt), ft("X", /[+-]?\d+(\.\d{1,3})?/), vt("X", function (t, e, n) {
          n._d = new Date(1e3 * parseFloat(t, 10));
        }), vt("x", function (t, e, n) {
          n._d = new Date(w(t));
        }), i.version = "2.18.1", n = Pe, i.fn = un, i.min = function () {
          return Ie("isBefore", [].slice.call(arguments, 0));
        }, i.max = function () {
          return Ie("isAfter", [].slice.call(arguments, 0));
        }, i.now = function () {
          return Date.now ? Date.now() : +new Date();
        }, i.utc = c, i.unix = function (t) {
          return Pe(1e3 * t);
        }, i.months = function (t, e) {
          return fn(t, e, "months");
        }, i.isDate = l, i.locale = de, i.invalid = p, i.duration = je, i.isMoment = _, i.weekdays = function (t, e, n) {
          return gn(t, e, n, "weekdays");
        }, i.parseZone = function () {
          return Pe.apply(null, arguments).parseZone();
        }, i.localeData = ce, i.isDuration = Re, i.monthsShort = function (t, e) {
          return fn(t, e, "monthsShort");
        }, i.weekdaysMin = function (t, e, n) {
          return gn(t, e, n, "weekdaysMin");
        }, i.defineLocale = he, i.updateLocale = function (t, e) {
          if (null != e) {
            var n,
                i = re;
            null != oe[t] && (i = oe[t]._config), (n = new I(e = A(i, e))).parentLocale = oe[t], oe[t] = n, de(t);
          } else null != oe[t] && (null != oe[t].parentLocale ? oe[t] = oe[t].parentLocale : null != oe[t] && delete oe[t]);

          return oe[t];
        }, i.locales = function () {
          return O(oe);
        }, i.weekdaysShort = function (t, e, n) {
          return gn(t, e, n, "weekdaysShort");
        }, i.normalizeUnits = L, i.relativeTimeRounding = function (t) {
          return void 0 === t ? Yn : "function" == typeof t && (Yn = t, !0);
        }, i.relativeTimeThreshold = function (t, e) {
          return void 0 !== Nn[t] && (void 0 === e ? Nn[t] : (Nn[t] = e, "s" === t && (Nn.ss = e - 1), !0));
        }, i.calendarFormat = function (t, e) {
          var n = t.diff(e, "days", !0);
          return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
        }, i.prototype = un, i;
      }, "object" == _typeof(n) && void 0 !== e ? e.exports = a() : i.moment = a();
    }, {}],
    7: [function (t, e, n) {
      var i = t(29)();
      i.helpers = t(45), t(27)(i), i.defaults = t(25), i.Element = t(26), i.elements = t(40), i.Interaction = t(28), i.platform = t(48), t(31)(i), t(22)(i), t(23)(i), t(24)(i), t(30)(i), t(33)(i), t(32)(i), t(35)(i), t(54)(i), t(52)(i), t(53)(i), t(55)(i), t(56)(i), t(57)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(21)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i);
      var a = [];
      a.push(t(49)(i), t(50)(i), t(51)(i)), i.plugins.register(a), i.platform.initialize(), e.exports = i, "undefined" != typeof window && (window.Chart = i), i.canvasHelpers = i.helpers.canvas;
    }, {
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      30: 30,
      31: 31,
      32: 32,
      33: 33,
      35: 35,
      40: 40,
      45: 45,
      48: 48,
      49: 49,
      50: 50,
      51: 51,
      52: 52,
      53: 53,
      54: 54,
      55: 55,
      56: 56,
      57: 57,
      8: 8,
      9: 9
    }],
    8: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Bar = function (e, n) {
          return n.type = "bar", new t(e, n);
        };
      };
    }, {}],
    9: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Bubble = function (e, n) {
          return n.type = "bubble", new t(e, n);
        };
      };
    }, {}],
    10: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Doughnut = function (e, n) {
          return n.type = "doughnut", new t(e, n);
        };
      };
    }, {}],
    11: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Line = function (e, n) {
          return n.type = "line", new t(e, n);
        };
      };
    }, {}],
    12: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.PolarArea = function (e, n) {
          return n.type = "polarArea", new t(e, n);
        };
      };
    }, {}],
    13: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Radar = function (e, n) {
          return n.type = "radar", new t(e, n);
        };
      };
    }, {}],
    14: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Scatter = function (e, n) {
          return n.type = "scatter", new t(e, n);
        };
      };
    }, {}],
    15: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(40),
          r = t(45);
      i._set("bar", {
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          }],
          yAxes: [{
            type: "linear"
          }]
        }
      }), i._set("horizontalBar", {
        hover: {
          mode: "index",
          axis: "y"
        },
        scales: {
          xAxes: [{
            type: "linear",
            position: "bottom"
          }],
          yAxes: [{
            position: "left",
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          }]
        },
        elements: {
          rectangle: {
            borderSkipped: "left"
          }
        },
        tooltips: {
          callbacks: {
            title: function title(t, e) {
              var n = "";
              return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n;
            },
            label: function label(t, e) {
              return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel;
            }
          },
          mode: "index",
          axis: "y"
        }
      }), e.exports = function (t) {
        t.controllers.bar = t.DatasetController.extend({
          dataElementType: a.Rectangle,
          initialize: function initialize() {
            var e;
            t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0;
          },
          update: function update(t) {
            var e,
                n,
                i = this.getMeta().data;

            for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) {
              this.updateElement(i[e], e, t);
            }
          },
          updateElement: function updateElement(t, e, n) {
            var i = this,
                a = i.chart,
                o = i.getMeta(),
                s = i.getDataset(),
                l = t.custom || {},
                u = a.options.elements.rectangle;
            t._xScale = i.getScaleForId(o.xAxisID), t._yScale = i.getScaleForId(o.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
              datasetLabel: s.label,
              label: a.data.labels[e],
              borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
              backgroundColor: l.backgroundColor ? l.backgroundColor : r.valueAtIndexOrDefault(s.backgroundColor, e, u.backgroundColor),
              borderColor: l.borderColor ? l.borderColor : r.valueAtIndexOrDefault(s.borderColor, e, u.borderColor),
              borderWidth: l.borderWidth ? l.borderWidth : r.valueAtIndexOrDefault(s.borderWidth, e, u.borderWidth)
            }, i.updateElementGeometry(t, e, n), t.pivot();
          },
          updateElementGeometry: function updateElementGeometry(t, e, n) {
            var i = this,
                a = t._model,
                r = i.getValueScale(),
                o = r.getBasePixel(),
                s = r.isHorizontal(),
                l = i._ruler || i.getRuler(),
                u = i.calculateBarValuePixels(i.index, e),
                d = i.calculateBarIndexPixels(i.index, e, l);
            a.horizontal = s, a.base = n ? o : u.base, a.x = s ? n ? o : u.head : d.center, a.y = s ? d.center : n ? o : u.head, a.height = s ? d.size : void 0, a.width = s ? void 0 : d.size;
          },
          getValueScaleId: function getValueScaleId() {
            return this.getMeta().yAxisID;
          },
          getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().xAxisID;
          },
          getValueScale: function getValueScale() {
            return this.getScaleForId(this.getValueScaleId());
          },
          getIndexScale: function getIndexScale() {
            return this.getScaleForId(this.getIndexScaleId());
          },
          getStackCount: function getStackCount(t) {
            var e,
                n,
                i = this.chart,
                a = this.getIndexScale().options.stacked,
                r = void 0 === t ? i.data.datasets.length : t + 1,
                o = [];

            for (e = 0; e < r; ++e) {
              (n = i.getDatasetMeta(e)).bar && i.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === o.indexOf(n.stack) || void 0 === a && (void 0 === n.stack || -1 === o.indexOf(n.stack))) && o.push(n.stack);
            }

            return o.length;
          },
          getStackIndex: function getStackIndex(t) {
            return this.getStackCount(t) - 1;
          },
          getRuler: function getRuler() {
            var t,
                e,
                n = this.getIndexScale(),
                i = this.getStackCount(),
                a = this.index,
                r = [],
                o = n.isHorizontal(),
                s = o ? n.left : n.top,
                l = s + (o ? n.width : n.height);

            for (t = 0, e = this.getMeta().data.length; t < e; ++t) {
              r.push(n.getPixelForValue(null, t, a));
            }

            return {
              pixels: r,
              start: s,
              end: l,
              stackCount: i,
              scale: n
            };
          },
          calculateBarValuePixels: function calculateBarValuePixels(t, e) {
            var n,
                i,
                a,
                r,
                o,
                s,
                l = this.chart,
                u = this.getMeta(),
                d = this.getValueScale(),
                h = l.data.datasets,
                c = d.getRightValue(h[t].data[e]),
                f = d.options.stacked,
                g = u.stack,
                m = 0;
            if (f || void 0 === f && void 0 !== g) for (n = 0; n < t; ++n) {
              (i = l.getDatasetMeta(n)).bar && i.stack === g && i.controller.getValueScaleId() === d.id && l.isDatasetVisible(n) && (a = d.getRightValue(h[n].data[e]), (c < 0 && a < 0 || c >= 0 && a > 0) && (m += a));
            }
            return r = d.getPixelForValue(m), {
              size: s = ((o = d.getPixelForValue(m + c)) - r) / 2,
              base: r,
              head: o,
              center: o + s / 2
            };
          },
          calculateBarIndexPixels: function calculateBarIndexPixels(t, e, n) {
            var i,
                a,
                o,
                s,
                l,
                u = n.scale.options,
                d = this.getStackIndex(t),
                h = n.pixels,
                c = h[e],
                f = h.length,
                g = n.start,
                m = n.end;
            return 1 === f ? (i = c > g ? c - g : m - c, a = c < m ? m - c : c - g) : (e > 0 && (i = (c - h[e - 1]) / 2, e === f - 1 && (a = i)), e < f - 1 && (a = (h[e + 1] - c) / 2, 0 === e && (i = a))), l = (s = ((o = i * u.categoryPercentage) + a * u.categoryPercentage) / n.stackCount) * u.barPercentage, c -= o, c += s * d, {
              size: l = Math.min(r.valueOrDefault(u.barThickness, l), r.valueOrDefault(u.maxBarThickness, 1 / 0)),
              base: c += (s - l) / 2,
              head: c + l,
              center: c + l / 2
            };
          },
          draw: function draw() {
            var t = this.chart,
                e = this.getValueScale(),
                n = this.getMeta().data,
                i = this.getDataset(),
                a = n.length,
                o = 0;

            for (r.canvas.clipArea(t.ctx, t.chartArea); o < a; ++o) {
              isNaN(e.getRightValue(i.data[o])) || n[o].draw();
            }

            r.canvas.unclipArea(t.ctx);
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                i = t.custom || {},
                a = t._model;
            a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : r.valueAtIndexOrDefault(e.hoverBackgroundColor, n, r.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : r.valueAtIndexOrDefault(e.hoverBorderColor, n, r.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : r.valueAtIndexOrDefault(e.hoverBorderWidth, n, a.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                i = t.custom || {},
                a = t._model,
                o = this.chart.options.elements.rectangle;
            a.backgroundColor = i.backgroundColor ? i.backgroundColor : r.valueAtIndexOrDefault(e.backgroundColor, n, o.backgroundColor), a.borderColor = i.borderColor ? i.borderColor : r.valueAtIndexOrDefault(e.borderColor, n, o.borderColor), a.borderWidth = i.borderWidth ? i.borderWidth : r.valueAtIndexOrDefault(e.borderWidth, n, o.borderWidth);
          }
        }), t.controllers.horizontalBar = t.controllers.bar.extend({
          getValueScaleId: function getValueScaleId() {
            return this.getMeta().xAxisID;
          },
          getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().yAxisID;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    16: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(40),
          r = t(45);
      i._set("bubble", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [{
            type: "linear",
            position: "bottom",
            id: "x-axis-0"
          }],
          yAxes: [{
            type: "linear",
            position: "left",
            id: "y-axis-0"
          }]
        },
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              var n = e.datasets[t.datasetIndex].label || "",
                  i = e.datasets[t.datasetIndex].data[t.index];
              return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")";
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.bubble = t.DatasetController.extend({
          dataElementType: a.Point,
          update: function update(t) {
            var e = this,
                n = e.getMeta().data;
            r.each(n, function (n, i) {
              e.updateElement(n, i, t);
            });
          },
          updateElement: function updateElement(t, e, n) {
            var i = this,
                a = i.getMeta(),
                r = t.custom || {},
                o = i.getScaleForId(a.xAxisID),
                s = i.getScaleForId(a.yAxisID),
                l = i._resolveElementOptions(t, e),
                u = i.getDataset().data[e],
                d = i.index,
                h = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == _typeof(u) ? u : NaN, e, d),
                c = n ? s.getBasePixel() : s.getPixelForValue(u, e, d);

            t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
              backgroundColor: l.backgroundColor,
              borderColor: l.borderColor,
              borderWidth: l.borderWidth,
              hitRadius: l.hitRadius,
              pointStyle: l.pointStyle,
              radius: n ? 0 : l.radius,
              skip: r.skip || isNaN(h) || isNaN(c),
              x: h,
              y: c
            }, t.pivot();
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = t._model,
                n = t._options;
            e.backgroundColor = r.valueOrDefault(n.hoverBackgroundColor, r.getHoverColor(n.backgroundColor)), e.borderColor = r.valueOrDefault(n.hoverBorderColor, r.getHoverColor(n.borderColor)), e.borderWidth = r.valueOrDefault(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius;
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = t._model,
                n = t._options;
            e.backgroundColor = n.backgroundColor, e.borderColor = n.borderColor, e.borderWidth = n.borderWidth, e.radius = n.radius;
          },
          _resolveElementOptions: function _resolveElementOptions(t, e) {
            var n,
                i,
                a,
                o = this.chart,
                s = o.data.datasets[this.index],
                l = t.custom || {},
                u = o.options.elements.point,
                d = r.options.resolve,
                h = s.data[e],
                c = {},
                f = {
              chart: o,
              dataIndex: e,
              dataset: s,
              datasetIndex: this.index
            },
                g = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];

            for (n = 0, i = g.length; n < i; ++n) {
              c[a = g[n]] = d([l[a], s[a], u[a]], f, e);
            }

            return c.radius = d([l.radius, h ? h.r : void 0, s.radius, u.radius], f, e), c;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    17: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(40),
          r = t(45);
      i._set("doughnut", {
        animation: {
          animateRotate: !0,
          animateScale: !1
        },
        hover: {
          mode: "single"
        },
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');
          var n = t.data,
              i = n.datasets,
              a = n.labels;
          if (i.length) for (var r = 0; r < i[0].data.length; ++r) {
            e.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
          }
          return e.push("</ul>"), e.join("");
        },
        legend: {
          labels: {
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
                var a = t.getDatasetMeta(0),
                    o = e.datasets[0],
                    s = a.data[i],
                    l = s && s.custom || {},
                    u = r.valueAtIndexOrDefault,
                    d = t.options.elements.arc;
                return {
                  text: n,
                  fillStyle: l.backgroundColor ? l.backgroundColor : u(o.backgroundColor, i, d.backgroundColor),
                  strokeStyle: l.borderColor ? l.borderColor : u(o.borderColor, i, d.borderColor),
                  lineWidth: l.borderWidth ? l.borderWidth : u(o.borderWidth, i, d.borderWidth),
                  hidden: isNaN(o.data[i]) || a.data[i].hidden,
                  index: i
                };
              }) : [];
            }
          },
          onClick: function onClick(t, e) {
            var n,
                i,
                a,
                r = e.index,
                o = this.chart;

            for (n = 0, i = (o.data.datasets || []).length; n < i; ++n) {
              (a = o.getDatasetMeta(n)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
            }

            o.update();
          }
        },
        cutoutPercentage: 50,
        rotation: -.5 * Math.PI,
        circumference: 2 * Math.PI,
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              var n = e.labels[t.index],
                  i = ": " + e.datasets[t.datasetIndex].data[t.index];
              return r.isArray(n) ? (n = n.slice())[0] += i : n += i, n;
            }
          }
        }
      }), i._set("pie", r.clone(i.doughnut)), i._set("pie", {
        cutoutPercentage: 0
      }), e.exports = function (t) {
        t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
          dataElementType: a.Arc,
          linkScales: r.noop,
          getRingIndex: function getRingIndex(t) {
            for (var e = 0, n = 0; n < t; ++n) {
              this.chart.isDatasetVisible(n) && ++e;
            }

            return e;
          },
          update: function update(t) {
            var e = this,
                n = e.chart,
                i = n.chartArea,
                a = n.options,
                o = a.elements.arc,
                s = i.right - i.left - o.borderWidth,
                l = i.bottom - i.top - o.borderWidth,
                u = Math.min(s, l),
                d = {
              x: 0,
              y: 0
            },
                h = e.getMeta(),
                c = a.cutoutPercentage,
                f = a.circumference;

            if (f < 2 * Math.PI) {
              var g = a.rotation % (2 * Math.PI),
                  m = (g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0)) + f,
                  p = {
                x: Math.cos(g),
                y: Math.sin(g)
              },
                  v = {
                x: Math.cos(m),
                y: Math.sin(m)
              },
                  y = g <= 0 && m >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= m,
                  b = g <= .5 * Math.PI && .5 * Math.PI <= m || g <= 2.5 * Math.PI && 2.5 * Math.PI <= m,
                  x = g <= -Math.PI && -Math.PI <= m || g <= Math.PI && Math.PI <= m,
                  _ = g <= .5 * -Math.PI && .5 * -Math.PI <= m || g <= 1.5 * Math.PI && 1.5 * Math.PI <= m,
                  k = c / 100,
                  w = {
                x: x ? -1 : Math.min(p.x * (p.x < 0 ? 1 : k), v.x * (v.x < 0 ? 1 : k)),
                y: _ ? -1 : Math.min(p.y * (p.y < 0 ? 1 : k), v.y * (v.y < 0 ? 1 : k))
              },
                  M = {
                x: y ? 1 : Math.max(p.x * (p.x > 0 ? 1 : k), v.x * (v.x > 0 ? 1 : k)),
                y: b ? 1 : Math.max(p.y * (p.y > 0 ? 1 : k), v.y * (v.y > 0 ? 1 : k))
              },
                  S = {
                width: .5 * (M.x - w.x),
                height: .5 * (M.y - w.y)
              };

              u = Math.min(s / S.width, l / S.height), d = {
                x: -.5 * (M.x + w.x),
                y: -.5 * (M.y + w.y)
              };
            }

            n.borderWidth = e.getMaxBorderWidth(h.data), n.outerRadius = Math.max((u - n.borderWidth) / 2, 0), n.innerRadius = Math.max(c ? n.outerRadius / 100 * c : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = d.x * n.outerRadius, n.offsetY = d.y * n.outerRadius, h.total = e.calculateTotal(), e.outerRadius = n.outerRadius - n.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - n.radiusLength, 0), r.each(h.data, function (n, i) {
              e.updateElement(n, i, t);
            });
          },
          updateElement: function updateElement(t, e, n) {
            var i = this,
                a = i.chart,
                o = a.chartArea,
                s = a.options,
                l = s.animation,
                u = (o.left + o.right) / 2,
                d = (o.top + o.bottom) / 2,
                h = s.rotation,
                c = s.rotation,
                f = i.getDataset(),
                g = n && l.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
                m = n && l.animateScale ? 0 : i.innerRadius,
                p = n && l.animateScale ? 0 : i.outerRadius,
                v = r.valueAtIndexOrDefault;
            r.extend(t, {
              _datasetIndex: i.index,
              _index: e,
              _model: {
                x: u + a.offsetX,
                y: d + a.offsetY,
                startAngle: h,
                endAngle: c,
                circumference: g,
                outerRadius: p,
                innerRadius: m,
                label: v(f.label, e, a.data.labels[e])
              }
            });
            var y = t._model;
            this.removeHoverStyle(t), n && l.animateRotate || (y.startAngle = 0 === e ? s.rotation : i.getMeta().data[e - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          calculateTotal: function calculateTotal() {
            var t,
                e = this.getDataset(),
                n = this.getMeta(),
                i = 0;
            return r.each(n.data, function (n, a) {
              t = e.data[a], isNaN(t) || n.hidden || (i += Math.abs(t));
            }), i;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0;
          },
          getMaxBorderWidth: function getMaxBorderWidth(t) {
            for (var e, n, i = 0, a = this.index, r = t.length, o = 0; o < r; o++) {
              e = t[o]._model ? t[o]._model.borderWidth : 0, i = (n = t[o]._chart ? t[o]._chart.config.data.datasets[a].hoverBorderWidth : 0) > (i = e > i ? e : i) ? n : i;
            }

            return i;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    18: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(40),
          r = t(45);
      i._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            type: "category",
            id: "x-axis-0"
          }],
          yAxes: [{
            type: "linear",
            id: "y-axis-0"
          }]
        }
      }), e.exports = function (t) {
        function e(t, e) {
          return r.valueOrDefault(t.showLine, e.showLines);
        }

        t.controllers.line = t.DatasetController.extend({
          datasetElementType: a.Line,
          dataElementType: a.Point,
          update: function update(t) {
            var n,
                i,
                a,
                o = this,
                s = o.getMeta(),
                l = s.dataset,
                u = s.data || [],
                d = o.chart.options,
                h = d.elements.line,
                c = o.getScaleForId(s.yAxisID),
                f = o.getDataset(),
                g = e(f, d);

            for (g && (a = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = c, l._datasetIndex = o.index, l._children = u, l._model = {
              spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps,
              tension: a.tension ? a.tension : r.valueOrDefault(f.lineTension, h.tension),
              backgroundColor: a.backgroundColor ? a.backgroundColor : f.backgroundColor || h.backgroundColor,
              borderWidth: a.borderWidth ? a.borderWidth : f.borderWidth || h.borderWidth,
              borderColor: a.borderColor ? a.borderColor : f.borderColor || h.borderColor,
              borderCapStyle: a.borderCapStyle ? a.borderCapStyle : f.borderCapStyle || h.borderCapStyle,
              borderDash: a.borderDash ? a.borderDash : f.borderDash || h.borderDash,
              borderDashOffset: a.borderDashOffset ? a.borderDashOffset : f.borderDashOffset || h.borderDashOffset,
              borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : f.borderJoinStyle || h.borderJoinStyle,
              fill: a.fill ? a.fill : void 0 !== f.fill ? f.fill : h.fill,
              steppedLine: a.steppedLine ? a.steppedLine : r.valueOrDefault(f.steppedLine, h.stepped),
              cubicInterpolationMode: a.cubicInterpolationMode ? a.cubicInterpolationMode : r.valueOrDefault(f.cubicInterpolationMode, h.cubicInterpolationMode)
            }, l.pivot()), n = 0, i = u.length; n < i; ++n) {
              o.updateElement(u[n], n, t);
            }

            for (g && 0 !== l._model.tension && o.updateBezierControlPoints(), n = 0, i = u.length; n < i; ++n) {
              u[n].pivot();
            }
          },
          getPointBackgroundColor: function getPointBackgroundColor(t, e) {
            var n = this.chart.options.elements.point.backgroundColor,
                i = this.getDataset(),
                a = t.custom || {};
            return a.backgroundColor ? n = a.backgroundColor : i.pointBackgroundColor ? n = r.valueAtIndexOrDefault(i.pointBackgroundColor, e, n) : i.backgroundColor && (n = i.backgroundColor), n;
          },
          getPointBorderColor: function getPointBorderColor(t, e) {
            var n = this.chart.options.elements.point.borderColor,
                i = this.getDataset(),
                a = t.custom || {};
            return a.borderColor ? n = a.borderColor : i.pointBorderColor ? n = r.valueAtIndexOrDefault(i.pointBorderColor, e, n) : i.borderColor && (n = i.borderColor), n;
          },
          getPointBorderWidth: function getPointBorderWidth(t, e) {
            var n = this.chart.options.elements.point.borderWidth,
                i = this.getDataset(),
                a = t.custom || {};
            return isNaN(a.borderWidth) ? !isNaN(i.pointBorderWidth) || r.isArray(i.pointBorderWidth) ? n = r.valueAtIndexOrDefault(i.pointBorderWidth, e, n) : isNaN(i.borderWidth) || (n = i.borderWidth) : n = a.borderWidth, n;
          },
          updateElement: function updateElement(t, e, n) {
            var i,
                a,
                o = this,
                s = o.getMeta(),
                l = t.custom || {},
                u = o.getDataset(),
                d = o.index,
                h = u.data[e],
                c = o.getScaleForId(s.yAxisID),
                f = o.getScaleForId(s.xAxisID),
                g = o.chart.options.elements.point;
            void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), i = f.getPixelForValue("object" == _typeof(h) ? h : NaN, e, d), a = n ? c.getBasePixel() : o.calculatePointY(h, e, d), t._xScale = f, t._yScale = c, t._datasetIndex = d, t._index = e, t._model = {
              x: i,
              y: a,
              skip: l.skip || isNaN(i) || isNaN(a),
              radius: l.radius || r.valueAtIndexOrDefault(u.pointRadius, e, g.radius),
              pointStyle: l.pointStyle || r.valueAtIndexOrDefault(u.pointStyle, e, g.pointStyle),
              backgroundColor: o.getPointBackgroundColor(t, e),
              borderColor: o.getPointBorderColor(t, e),
              borderWidth: o.getPointBorderWidth(t, e),
              tension: s.dataset._model ? s.dataset._model.tension : 0,
              steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
              hitRadius: l.hitRadius || r.valueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius)
            };
          },
          calculatePointY: function calculatePointY(t, e, n) {
            var i,
                a,
                r,
                o = this.chart,
                s = this.getMeta(),
                l = this.getScaleForId(s.yAxisID),
                u = 0,
                d = 0;

            if (l.options.stacked) {
              for (i = 0; i < n; i++) {
                if (a = o.data.datasets[i], "line" === (r = o.getDatasetMeta(i)).type && r.yAxisID === l.id && o.isDatasetVisible(i)) {
                  var h = Number(l.getRightValue(a.data[e]));
                  h < 0 ? d += h || 0 : u += h || 0;
                }
              }

              var c = Number(l.getRightValue(t));
              return c < 0 ? l.getPixelForValue(d + c) : l.getPixelForValue(u + c);
            }

            return l.getPixelForValue(t);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            var t,
                e,
                n,
                i,
                a = this.getMeta(),
                o = this.chart.chartArea,
                s = a.data || [];

            function l(t, e, n) {
              return Math.max(Math.min(t, n), e);
            }

            if (a.dataset._model.spanGaps && (s = s.filter(function (t) {
              return !t._model.skip;
            })), "monotone" === a.dataset._model.cubicInterpolationMode) r.splineCurveMonotone(s);else for (t = 0, e = s.length; t < e; ++t) {
              n = s[t]._model, i = r.splineCurve(r.previousItem(s, t)._model, n, r.nextItem(s, t)._model, a.dataset._model.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
            }
            if (this.chart.options.elements.line.capBezierPoints) for (t = 0, e = s.length; t < e; ++t) {
              (n = s[t]._model).controlPointPreviousX = l(n.controlPointPreviousX, o.left, o.right), n.controlPointPreviousY = l(n.controlPointPreviousY, o.top, o.bottom), n.controlPointNextX = l(n.controlPointNextX, o.left, o.right), n.controlPointNextY = l(n.controlPointNextY, o.top, o.bottom);
            }
          },
          draw: function draw() {
            var t = this.chart,
                n = this.getMeta(),
                i = n.data || [],
                a = t.chartArea,
                o = i.length,
                s = 0;

            for (r.canvas.clipArea(t.ctx, a), e(this.getDataset(), t.options) && n.dataset.draw(), r.canvas.unclipArea(t.ctx); s < o; ++s) {
              i[s].draw(a);
            }
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                i = t.custom || {},
                a = t._model;
            a.radius = i.hoverRadius || r.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), a.backgroundColor = i.hoverBackgroundColor || r.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, r.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor || r.valueAtIndexOrDefault(e.pointHoverBorderColor, n, r.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth || r.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this,
                n = e.chart.data.datasets[t._datasetIndex],
                i = t._index,
                a = t.custom || {},
                o = t._model;
            void 0 !== n.radius && void 0 === n.pointRadius && (n.pointRadius = n.radius), o.radius = a.radius || r.valueAtIndexOrDefault(n.pointRadius, i, e.chart.options.elements.point.radius), o.backgroundColor = e.getPointBackgroundColor(t, i), o.borderColor = e.getPointBorderColor(t, i), o.borderWidth = e.getPointBorderWidth(t, i);
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    19: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(40),
          r = t(45);
      i._set("polarArea", {
        scale: {
          type: "radialLinear",
          angleLines: {
            display: !1
          },
          gridLines: {
            circular: !0
          },
          pointLabels: {
            display: !1
          },
          ticks: {
            beginAtZero: !0
          }
        },
        animation: {
          animateRotate: !0,
          animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');
          var n = t.data,
              i = n.datasets,
              a = n.labels;
          if (i.length) for (var r = 0; r < i[0].data.length; ++r) {
            e.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
          }
          return e.push("</ul>"), e.join("");
        },
        legend: {
          labels: {
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
                var a = t.getDatasetMeta(0),
                    o = e.datasets[0],
                    s = a.data[i].custom || {},
                    l = r.valueAtIndexOrDefault,
                    u = t.options.elements.arc;
                return {
                  text: n,
                  fillStyle: s.backgroundColor ? s.backgroundColor : l(o.backgroundColor, i, u.backgroundColor),
                  strokeStyle: s.borderColor ? s.borderColor : l(o.borderColor, i, u.borderColor),
                  lineWidth: s.borderWidth ? s.borderWidth : l(o.borderWidth, i, u.borderWidth),
                  hidden: isNaN(o.data[i]) || a.data[i].hidden,
                  index: i
                };
              }) : [];
            }
          },
          onClick: function onClick(t, e) {
            var n,
                i,
                a,
                r = e.index,
                o = this.chart;

            for (n = 0, i = (o.data.datasets || []).length; n < i; ++n) {
              (a = o.getDatasetMeta(n)).data[r].hidden = !a.data[r].hidden;
            }

            o.update();
          }
        },
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              return e.labels[t.index] + ": " + t.yLabel;
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.polarArea = t.DatasetController.extend({
          dataElementType: a.Arc,
          linkScales: r.noop,
          update: function update(t) {
            var e = this,
                n = e.chart,
                i = n.chartArea,
                a = e.getMeta(),
                o = n.options,
                s = o.elements.arc,
                l = Math.min(i.right - i.left, i.bottom - i.top);
            n.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), n.innerRadius = Math.max(o.cutoutPercentage ? n.outerRadius / 100 * o.cutoutPercentage : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), e.outerRadius = n.outerRadius - n.radiusLength * e.index, e.innerRadius = e.outerRadius - n.radiusLength, a.count = e.countVisibleElements(), r.each(a.data, function (n, i) {
              e.updateElement(n, i, t);
            });
          },
          updateElement: function updateElement(t, e, n) {
            for (var i = this, a = i.chart, o = i.getDataset(), s = a.options, l = s.animation, u = a.scale, d = a.data.labels, h = i.calculateCircumference(o.data[e]), c = u.xCenter, f = u.yCenter, g = 0, m = i.getMeta(), p = 0; p < e; ++p) {
              isNaN(o.data[p]) || m.data[p].hidden || ++g;
            }

            var v = s.startAngle,
                y = t.hidden ? 0 : u.getDistanceFromCenterForValue(o.data[e]),
                b = v + h * g,
                x = b + (t.hidden ? 0 : h),
                _ = l.animateScale ? 0 : u.getDistanceFromCenterForValue(o.data[e]);

            r.extend(t, {
              _datasetIndex: i.index,
              _index: e,
              _scale: u,
              _model: {
                x: c,
                y: f,
                innerRadius: 0,
                outerRadius: n ? _ : y,
                startAngle: n && l.animateRotate ? v : b,
                endAngle: n && l.animateRotate ? v : x,
                label: r.valueAtIndexOrDefault(d, e, d[e])
              }
            }), i.removeHoverStyle(t), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          countVisibleElements: function countVisibleElements() {
            var t = this.getDataset(),
                e = this.getMeta(),
                n = 0;
            return r.each(e.data, function (e, i) {
              isNaN(t.data[i]) || e.hidden || n++;
            }), n;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().count;
            return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    20: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(40),
          r = t(45);
      i._set("radar", {
        scale: {
          type: "radialLinear"
        },
        elements: {
          line: {
            tension: 0
          }
        }
      }), e.exports = function (t) {
        t.controllers.radar = t.DatasetController.extend({
          datasetElementType: a.Line,
          dataElementType: a.Point,
          linkScales: r.noop,
          update: function update(t) {
            var e = this,
                n = e.getMeta(),
                i = n.dataset,
                a = n.data,
                o = i.custom || {},
                s = e.getDataset(),
                l = e.chart.options.elements.line,
                u = e.chart.scale;
            void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), r.extend(n.dataset, {
              _datasetIndex: e.index,
              _scale: u,
              _children: a,
              _loop: !0,
              _model: {
                tension: o.tension ? o.tension : r.valueOrDefault(s.lineTension, l.tension),
                backgroundColor: o.backgroundColor ? o.backgroundColor : s.backgroundColor || l.backgroundColor,
                borderWidth: o.borderWidth ? o.borderWidth : s.borderWidth || l.borderWidth,
                borderColor: o.borderColor ? o.borderColor : s.borderColor || l.borderColor,
                fill: o.fill ? o.fill : void 0 !== s.fill ? s.fill : l.fill,
                borderCapStyle: o.borderCapStyle ? o.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                borderDash: o.borderDash ? o.borderDash : s.borderDash || l.borderDash,
                borderDashOffset: o.borderDashOffset ? o.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
              }
            }), n.dataset.pivot(), r.each(a, function (n, i) {
              e.updateElement(n, i, t);
            }, e), e.updateBezierControlPoints();
          },
          updateElement: function updateElement(t, e, n) {
            var i = this,
                a = t.custom || {},
                o = i.getDataset(),
                s = i.chart.scale,
                l = i.chart.options.elements.point,
                u = s.getPointPositionForValue(e, o.data[e]);
            void 0 !== o.radius && void 0 === o.pointRadius && (o.pointRadius = o.radius), void 0 !== o.hitRadius && void 0 === o.pointHitRadius && (o.pointHitRadius = o.hitRadius), r.extend(t, {
              _datasetIndex: i.index,
              _index: e,
              _scale: s,
              _model: {
                x: n ? s.xCenter : u.x,
                y: n ? s.yCenter : u.y,
                tension: a.tension ? a.tension : r.valueOrDefault(o.lineTension, i.chart.options.elements.line.tension),
                radius: a.radius ? a.radius : r.valueAtIndexOrDefault(o.pointRadius, e, l.radius),
                backgroundColor: a.backgroundColor ? a.backgroundColor : r.valueAtIndexOrDefault(o.pointBackgroundColor, e, l.backgroundColor),
                borderColor: a.borderColor ? a.borderColor : r.valueAtIndexOrDefault(o.pointBorderColor, e, l.borderColor),
                borderWidth: a.borderWidth ? a.borderWidth : r.valueAtIndexOrDefault(o.pointBorderWidth, e, l.borderWidth),
                pointStyle: a.pointStyle ? a.pointStyle : r.valueAtIndexOrDefault(o.pointStyle, e, l.pointStyle),
                hitRadius: a.hitRadius ? a.hitRadius : r.valueAtIndexOrDefault(o.pointHitRadius, e, l.hitRadius)
              }
            }), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            var t = this.chart.chartArea,
                e = this.getMeta();
            r.each(e.data, function (n, i) {
              var a = n._model,
                  o = r.splineCurve(r.previousItem(e.data, i, !0)._model, a, r.nextItem(e.data, i, !0)._model, a.tension);
              a.controlPointPreviousX = Math.max(Math.min(o.previous.x, t.right), t.left), a.controlPointPreviousY = Math.max(Math.min(o.previous.y, t.bottom), t.top), a.controlPointNextX = Math.max(Math.min(o.next.x, t.right), t.left), a.controlPointNextY = Math.max(Math.min(o.next.y, t.bottom), t.top), n.pivot();
            });
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t.custom || {},
                i = t._index,
                a = t._model;
            a.radius = n.hoverRadius ? n.hoverRadius : r.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : r.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, r.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : r.valueAtIndexOrDefault(e.pointHoverBorderColor, i, r.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : r.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t.custom || {},
                i = t._index,
                a = t._model,
                o = this.chart.options.elements.point;
            a.radius = n.radius ? n.radius : r.valueAtIndexOrDefault(e.pointRadius, i, o.radius), a.backgroundColor = n.backgroundColor ? n.backgroundColor : r.valueAtIndexOrDefault(e.pointBackgroundColor, i, o.backgroundColor), a.borderColor = n.borderColor ? n.borderColor : r.valueAtIndexOrDefault(e.pointBorderColor, i, o.borderColor), a.borderWidth = n.borderWidth ? n.borderWidth : r.valueAtIndexOrDefault(e.pointBorderWidth, i, o.borderWidth);
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    21: [function (t, e, n) {
      "use strict";

      t(25)._set("scatter", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [{
            id: "x-axis-1",
            type: "linear",
            position: "bottom"
          }],
          yAxes: [{
            id: "y-axis-1",
            type: "linear",
            position: "left"
          }]
        },
        showLines: !1,
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t) {
              return "(" + t.xLabel + ", " + t.yLabel + ")";
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.scatter = t.controllers.line;
      };
    }, {
      25: 25
    }],
    22: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          r = t(45);
      i._set("global", {
        animation: {
          duration: 1e3,
          easing: "easeOutQuart",
          onProgress: r.noop,
          onComplete: r.noop
        }
      }), e.exports = function (t) {
        t.Animation = a.extend({
          chart: null,
          currentStep: 0,
          numSteps: 60,
          easing: "",
          render: null,
          onAnimationProgress: null,
          onAnimationComplete: null
        }), t.animationService = {
          frameDuration: 17,
          animations: [],
          dropFrames: 0,
          request: null,
          addAnimation: function addAnimation(t, e, n, i) {
            var a,
                r,
                o = this.animations;

            for (e.chart = t, i || (t.animating = !0), a = 0, r = o.length; a < r; ++a) {
              if (o[a].chart === t) return void (o[a] = e);
            }

            o.push(e), 1 === o.length && this.requestAnimationFrame();
          },
          cancelAnimation: function cancelAnimation(t) {
            var e = r.findIndex(this.animations, function (e) {
              return e.chart === t;
            });
            -1 !== e && (this.animations.splice(e, 1), t.animating = !1);
          },
          requestAnimationFrame: function requestAnimationFrame() {
            var t = this;
            null === t.request && (t.request = r.requestAnimFrame.call(window, function () {
              t.request = null, t.startDigest();
            }));
          },
          startDigest: function startDigest() {
            var t = this,
                e = Date.now(),
                n = 0;
            t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + n);
            var i = Date.now();
            t.dropFrames += (i - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame();
          },
          advance: function advance(t) {
            for (var e, n, i = this.animations, a = 0; a < i.length;) {
              n = (e = i[a]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), r.callback(e.render, [n, e], n), r.callback(e.onAnimationProgress, [e], n), e.currentStep >= e.numSteps ? (r.callback(e.onAnimationComplete, [e], n), n.animating = !1, i.splice(a, 1)) : ++a;
            }
          }
        }, Object.defineProperty(t.Animation.prototype, "animationObject", {
          get: function get() {
            return this;
          }
        }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
          get: function get() {
            return this.chart;
          },
          set: function set(t) {
            this.chart = t;
          }
        });
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    23: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(45),
          r = t(28),
          o = t(48);

      e.exports = function (t) {
        var e = t.plugins;

        function n(t) {
          return "top" === t || "bottom" === t;
        }

        t.types = {}, t.instances = {}, t.controllers = {}, a.extend(t.prototype, {
          construct: function construct(e, n) {
            var r = this;

            n = function (t) {
              var e = (t = t || {}).data = t.data || {};
              return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = a.configMerge(i.global, i[t.type], t.options || {}), t;
            }(n);

            var s = o.acquireContext(e, n),
                l = s && s.canvas,
                u = l && l.height,
                d = l && l.width;
            r.id = a.uid(), r.ctx = s, r.canvas = l, r.config = n, r.width = d, r.height = u, r.aspectRatio = u ? d / u : null, r.options = n.options, r._bufferedRender = !1, r.chart = r, r.controller = r, t.instances[r.id] = r, Object.defineProperty(r, "data", {
              get: function get() {
                return r.config.data;
              },
              set: function set(t) {
                r.config.data = t;
              }
            }), s && l ? (r.initialize(), r.update()) : console.error("Failed to create chart: can't acquire context from the given item");
          },
          initialize: function initialize() {
            var t = this;
            return e.notify(t, "beforeInit"), a.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildScales(), t.initToolTip(), e.notify(t, "afterInit"), t;
          },
          clear: function clear() {
            return a.canvas.clear(this), this;
          },
          stop: function stop() {
            return t.animationService.cancelAnimation(this), this;
          },
          resize: function resize(t) {
            var n = this,
                i = n.options,
                r = n.canvas,
                o = i.maintainAspectRatio && n.aspectRatio || null,
                s = Math.max(0, Math.floor(a.getMaximumWidth(r))),
                l = Math.max(0, Math.floor(o ? s / o : a.getMaximumHeight(r)));

            if ((n.width !== s || n.height !== l) && (r.width = n.width = s, r.height = n.height = l, r.style.width = s + "px", r.style.height = l + "px", a.retinaScale(n, i.devicePixelRatio), !t)) {
              var u = {
                width: s,
                height: l
              };
              e.notify(n, "resize", [u]), n.options.onResize && n.options.onResize(n, u), n.stop(), n.update(n.options.responsiveAnimationDuration);
            }
          },
          ensureScalesHaveIDs: function ensureScalesHaveIDs() {
            var t = this.options,
                e = t.scales || {},
                n = t.scale;
            a.each(e.xAxes, function (t, e) {
              t.id = t.id || "x-axis-" + e;
            }), a.each(e.yAxes, function (t, e) {
              t.id = t.id || "y-axis-" + e;
            }), n && (n.id = n.id || "scale");
          },
          buildScales: function buildScales() {
            var e = this,
                i = e.options,
                r = e.scales = {},
                o = [];
            i.scales && (o = o.concat((i.scales.xAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "category",
                dposition: "bottom"
              };
            }), (i.scales.yAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "linear",
                dposition: "left"
              };
            }))), i.scale && o.push({
              options: i.scale,
              dtype: "radialLinear",
              isDefault: !0,
              dposition: "chartArea"
            }), a.each(o, function (i) {
              var o = i.options,
                  s = a.valueOrDefault(o.type, i.dtype),
                  l = t.scaleService.getScaleConstructor(s);

              if (l) {
                n(o.position) !== n(i.dposition) && (o.position = i.dposition);
                var u = new l({
                  id: o.id,
                  options: o,
                  ctx: e.ctx,
                  chart: e
                });
                r[u.id] = u, u.mergeTicksOptions(), i.isDefault && (e.scale = u);
              }
            }), t.scaleService.addScalesToLayout(this);
          },
          buildOrUpdateControllers: function buildOrUpdateControllers() {
            var e = this,
                n = [],
                i = [];
            return a.each(e.data.datasets, function (a, r) {
              var o = e.getDatasetMeta(r),
                  s = a.type || e.config.type;
              if (o.type && o.type !== s && (e.destroyDatasetMeta(r), o = e.getDatasetMeta(r)), o.type = s, n.push(o.type), o.controller) o.controller.updateIndex(r);else {
                var l = t.controllers[o.type];
                if (void 0 === l) throw new Error('"' + o.type + '" is not a chart type.');
                o.controller = new l(e, r), i.push(o.controller);
              }
            }, e), i;
          },
          resetElements: function resetElements() {
            var t = this;
            a.each(t.data.datasets, function (e, n) {
              t.getDatasetMeta(n).controller.reset();
            }, t);
          },
          reset: function reset() {
            this.resetElements(), this.tooltip.initialize();
          },
          update: function update(t) {
            var n,
                i,
                r = this;

            if (t && "object" == _typeof(t) || (t = {
              duration: t,
              lazy: arguments[1]
            }), (i = (n = r).options).scale ? n.scale.options = i.scale : i.scales && i.scales.xAxes.concat(i.scales.yAxes).forEach(function (t) {
              n.scales[t.id].options = t;
            }), n.tooltip._options = i.tooltips, !1 !== e.notify(r, "beforeUpdate")) {
              r.tooltip._data = r.data;
              var o = r.buildOrUpdateControllers();
              a.each(r.data.datasets, function (t, e) {
                r.getDatasetMeta(e).controller.buildOrUpdateElements();
              }, r), r.updateLayout(), a.each(o, function (t) {
                t.reset();
              }), r.updateDatasets(), r.tooltip.initialize(), r.lastActive = [], e.notify(r, "afterUpdate"), r._bufferedRender ? r._bufferedRequest = {
                duration: t.duration,
                easing: t.easing,
                lazy: t.lazy
              } : r.render(t);
            }
          },
          updateLayout: function updateLayout() {
            !1 !== e.notify(this, "beforeLayout") && (t.layoutService.update(this, this.width, this.height), e.notify(this, "afterScaleUpdate"), e.notify(this, "afterLayout"));
          },
          updateDatasets: function updateDatasets() {
            if (!1 !== e.notify(this, "beforeDatasetsUpdate")) {
              for (var t = 0, n = this.data.datasets.length; t < n; ++t) {
                this.updateDataset(t);
              }

              e.notify(this, "afterDatasetsUpdate");
            }
          },
          updateDataset: function updateDataset(t) {
            var n = this.getDatasetMeta(t),
                i = {
              meta: n,
              index: t
            };
            !1 !== e.notify(this, "beforeDatasetUpdate", [i]) && (n.controller.update(), e.notify(this, "afterDatasetUpdate", [i]));
          },
          render: function render(n) {
            var i = this;
            n && "object" == _typeof(n) || (n = {
              duration: n,
              lazy: arguments[1]
            });
            var r = n.duration,
                o = n.lazy;

            if (!1 !== e.notify(i, "beforeRender")) {
              var s = i.options.animation,
                  l = function l(t) {
                e.notify(i, "afterRender"), a.callback(s && s.onComplete, [t], i);
              };

              if (s && (void 0 !== r && 0 !== r || void 0 === r && 0 !== s.duration)) {
                var u = new t.Animation({
                  numSteps: (r || s.duration) / 16.66,
                  easing: n.easing || s.easing,
                  render: function render(t, e) {
                    var n = a.easing.effects[e.easing],
                        i = e.currentStep,
                        r = i / e.numSteps;
                    t.draw(n(r), r, i);
                  },
                  onAnimationProgress: s.onProgress,
                  onAnimationComplete: l
                });
                t.animationService.addAnimation(i, u, r, o);
              } else i.draw(), l(new t.Animation({
                numSteps: 0,
                chart: i
              }));

              return i;
            }
          },
          draw: function draw(t) {
            var n = this;
            n.clear(), a.isNullOrUndef(t) && (t = 1), n.transition(t), !1 !== e.notify(n, "beforeDraw", [t]) && (a.each(n.boxes, function (t) {
              t.draw(n.chartArea);
            }, n), n.scale && n.scale.draw(), n.drawDatasets(t), n._drawTooltip(t), e.notify(n, "afterDraw", [t]));
          },
          transition: function transition(t) {
            for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) {
              this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            }

            this.tooltip.transition(t);
          },
          drawDatasets: function drawDatasets(t) {
            var n = this;

            if (!1 !== e.notify(n, "beforeDatasetsDraw", [t])) {
              for (var i = (n.data.datasets || []).length - 1; i >= 0; --i) {
                n.isDatasetVisible(i) && n.drawDataset(i, t);
              }

              e.notify(n, "afterDatasetsDraw", [t]);
            }
          },
          drawDataset: function drawDataset(t, n) {
            var i = this.getDatasetMeta(t),
                a = {
              meta: i,
              index: t,
              easingValue: n
            };
            !1 !== e.notify(this, "beforeDatasetDraw", [a]) && (i.controller.draw(n), e.notify(this, "afterDatasetDraw", [a]));
          },
          _drawTooltip: function _drawTooltip(t) {
            var n = this.tooltip,
                i = {
              tooltip: n,
              easingValue: t
            };
            !1 !== e.notify(this, "beforeTooltipDraw", [i]) && (n.draw(), e.notify(this, "afterTooltipDraw", [i]));
          },
          getElementAtEvent: function getElementAtEvent(t) {
            return r.modes.single(this, t);
          },
          getElementsAtEvent: function getElementsAtEvent(t) {
            return r.modes.label(this, t, {
              intersect: !0
            });
          },
          getElementsAtXAxis: function getElementsAtXAxis(t) {
            return r.modes["x-axis"](this, t, {
              intersect: !0
            });
          },
          getElementsAtEventForMode: function getElementsAtEventForMode(t, e, n) {
            var i = r.modes[e];
            return "function" == typeof i ? i(this, t, n) : [];
          },
          getDatasetAtEvent: function getDatasetAtEvent(t) {
            return r.modes.dataset(this, t, {
              intersect: !0
            });
          },
          getDatasetMeta: function getDatasetMeta(t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var n = e._meta[this.id];
            return n || (n = e._meta[this.id] = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null
            }), n;
          },
          getVisibleDatasetCount: function getVisibleDatasetCount() {
            for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) {
              this.isDatasetVisible(e) && t++;
            }

            return t;
          },
          isDatasetVisible: function isDatasetVisible(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
          },
          generateLegend: function generateLegend() {
            return this.options.legendCallback(this);
          },
          destroyDatasetMeta: function destroyDatasetMeta(t) {
            var e = this.id,
                n = this.data.datasets[t],
                i = n._meta && n._meta[e];
            i && (i.controller.destroy(), delete n._meta[e]);
          },
          destroy: function destroy() {
            var n,
                i,
                r = this,
                s = r.canvas;

            for (r.stop(), n = 0, i = r.data.datasets.length; n < i; ++n) {
              r.destroyDatasetMeta(n);
            }

            s && (r.unbindEvents(), a.canvas.clear(r), o.releaseContext(r.ctx), r.canvas = null, r.ctx = null), e.notify(r, "destroy"), delete t.instances[r.id];
          },
          toBase64Image: function toBase64Image() {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
          },
          initToolTip: function initToolTip() {
            var e = this;
            e.tooltip = new t.Tooltip({
              _chart: e,
              _chartInstance: e,
              _data: e.data,
              _options: e.options.tooltips
            }, e);
          },
          bindEvents: function bindEvents() {
            var t = this,
                e = t._listeners = {},
                n = function n() {
              t.eventHandler.apply(t, arguments);
            };

            a.each(t.options.events, function (i) {
              o.addEventListener(t, i, n), e[i] = n;
            }), t.options.responsive && (n = function n() {
              t.resize();
            }, o.addEventListener(t, "resize", n), e.resize = n);
          },
          unbindEvents: function unbindEvents() {
            var t = this,
                e = t._listeners;
            e && (delete t._listeners, a.each(e, function (e, n) {
              o.removeEventListener(t, n, e);
            }));
          },
          updateHoverStyle: function updateHoverStyle(t, e, n) {
            var i,
                a,
                r,
                o = n ? "setHoverStyle" : "removeHoverStyle";

            for (a = 0, r = t.length; a < r; ++a) {
              (i = t[a]) && this.getDatasetMeta(i._datasetIndex).controller[o](i);
            }
          },
          eventHandler: function eventHandler(t) {
            var n = this,
                i = n.tooltip;

            if (!1 !== e.notify(n, "beforeEvent", [t])) {
              n._bufferedRender = !0, n._bufferedRequest = null;
              var a = n.handleEvent(t);
              a |= i && i.handleEvent(t), e.notify(n, "afterEvent", [t]);
              var r = n._bufferedRequest;
              return r ? n.render(r) : a && !n.animating && (n.stop(), n.render(n.options.hover.animationDuration, !0)), n._bufferedRender = !1, n._bufferedRequest = null, n;
            }
          },
          handleEvent: function handleEvent(t) {
            var e,
                n = this,
                i = n.options || {},
                r = i.hover;
            return n.lastActive = n.lastActive || [], "mouseout" === t.type ? n.active = [] : n.active = n.getElementsAtEventForMode(t, r.mode, r), a.callback(i.onHover || i.hover.onHover, [t["native"], n.active], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t["native"], n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, r.mode, !1), n.active.length && r.mode && n.updateHoverStyle(n.active, r.mode, !0), e = !a.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e;
          }
        }), t.Controller = t;
      };
    }, {
      25: 25,
      28: 28,
      45: 45,
      48: 48
    }],
    24: [function (t, e, n) {
      "use strict";

      var i = t(45);

      e.exports = function (t) {
        var e = ["push", "pop", "shift", "splice", "unshift"];

        function n(t, n) {
          var i = t._chartjs;

          if (i) {
            var a = i.listeners,
                r = a.indexOf(n);
            -1 !== r && a.splice(r, 1), a.length > 0 || (e.forEach(function (e) {
              delete t[e];
            }), delete t._chartjs);
          }
        }

        t.DatasetController = function (t, e) {
          this.initialize(t, e);
        }, i.extend(t.DatasetController.prototype, {
          datasetElementType: null,
          dataElementType: null,
          initialize: function initialize(t, e) {
            this.chart = t, this.index = e, this.linkScales(), this.addElements();
          },
          updateIndex: function updateIndex(t) {
            this.index = t;
          },
          linkScales: function linkScales() {
            var t = this.getMeta(),
                e = this.getDataset();
            null === t.xAxisID && (t.xAxisID = e.xAxisID || this.chart.options.scales.xAxes[0].id), null === t.yAxisID && (t.yAxisID = e.yAxisID || this.chart.options.scales.yAxes[0].id);
          },
          getDataset: function getDataset() {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function getMeta() {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function getScaleForId(t) {
            return this.chart.scales[t];
          },
          reset: function reset() {
            this.update(!0);
          },
          destroy: function destroy() {
            this._data && n(this._data, this);
          },
          createMetaDataset: function createMetaDataset() {
            var t = this.datasetElementType;
            return t && new t({
              _chart: this.chart,
              _datasetIndex: this.index
            });
          },
          createMetaData: function createMetaData(t) {
            var e = this.dataElementType;
            return e && new e({
              _chart: this.chart,
              _datasetIndex: this.index,
              _index: t
            });
          },
          addElements: function addElements() {
            var t,
                e,
                n = this.getMeta(),
                i = this.getDataset().data || [],
                a = n.data;

            for (t = 0, e = i.length; t < e; ++t) {
              a[t] = a[t] || this.createMetaData(t);
            }

            n.dataset = n.dataset || this.createMetaDataset();
          },
          addElementAndReset: function addElementAndReset(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
          },
          buildOrUpdateElements: function buildOrUpdateElements() {
            var t,
                a,
                r = this,
                o = r.getDataset(),
                s = o.data || (o.data = []);
            r._data !== s && (r._data && n(r._data, r), a = r, (t = s)._chartjs ? t._chartjs.listeners.push(a) : (Object.defineProperty(t, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: {
                listeners: [a]
              }
            }), e.forEach(function (e) {
              var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                  a = t[e];
              Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value: function value() {
                  var e = Array.prototype.slice.call(arguments),
                      r = a.apply(this, e);
                  return i.each(t._chartjs.listeners, function (t) {
                    "function" == typeof t[n] && t[n].apply(t, e);
                  }), r;
                }
              });
            })), r._data = s), r.resyncElements();
          },
          update: i.noop,
          transition: function transition(t) {
            for (var e = this.getMeta(), n = e.data || [], i = n.length, a = 0; a < i; ++a) {
              n[a].transition(t);
            }

            e.dataset && e.dataset.transition(t);
          },
          draw: function draw() {
            var t = this.getMeta(),
                e = t.data || [],
                n = e.length,
                i = 0;

            for (t.dataset && t.dataset.draw(); i < n; ++i) {
              e[i].draw();
            }
          },
          removeHoverStyle: function removeHoverStyle(t, e) {
            var n = this.chart.data.datasets[t._datasetIndex],
                a = t._index,
                r = t.custom || {},
                o = i.valueAtIndexOrDefault,
                s = t._model;
            s.backgroundColor = r.backgroundColor ? r.backgroundColor : o(n.backgroundColor, a, e.backgroundColor), s.borderColor = r.borderColor ? r.borderColor : o(n.borderColor, a, e.borderColor), s.borderWidth = r.borderWidth ? r.borderWidth : o(n.borderWidth, a, e.borderWidth);
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                a = t.custom || {},
                r = i.valueAtIndexOrDefault,
                o = i.getHoverColor,
                s = t._model;
            s.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : r(e.hoverBackgroundColor, n, o(s.backgroundColor)), s.borderColor = a.hoverBorderColor ? a.hoverBorderColor : r(e.hoverBorderColor, n, o(s.borderColor)), s.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : r(e.hoverBorderWidth, n, s.borderWidth);
          },
          resyncElements: function resyncElements() {
            var t = this.getMeta(),
                e = this.getDataset().data,
                n = t.data.length,
                i = e.length;
            i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n);
          },
          insertElements: function insertElements(t, e) {
            for (var n = 0; n < e; ++n) {
              this.addElementAndReset(t + n);
            }
          },
          onDataPush: function onDataPush() {
            this.insertElements(this.getDataset().data.length - 1, arguments.length);
          },
          onDataPop: function onDataPop() {
            this.getMeta().data.pop();
          },
          onDataShift: function onDataShift() {
            this.getMeta().data.shift();
          },
          onDataSplice: function onDataSplice(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
          },
          onDataUnshift: function onDataUnshift() {
            this.insertElements(0, arguments.length);
          }
        }), t.DatasetController.extend = i.inherits;
      };
    }, {
      45: 45
    }],
    25: [function (t, e, n) {
      "use strict";

      var i = t(45);
      e.exports = {
        _set: function _set(t, e) {
          return i.merge(this[t] || (this[t] = {}), e);
        }
      };
    }, {
      45: 45
    }],
    26: [function (t, e, n) {
      "use strict";

      var i = t(2),
          a = t(45);

      var r = function r(t) {
        a.extend(this, t), this.initialize.apply(this, arguments);
      };

      a.extend(r.prototype, {
        initialize: function initialize() {
          this.hidden = !1;
        },
        pivot: function pivot() {
          var t = this;
          return t._view || (t._view = a.clone(t._model)), t._start = {}, t;
        },
        transition: function transition(t) {
          var e = this,
              n = e._model,
              a = e._start,
              r = e._view;
          return n && 1 !== t ? (r || (r = e._view = {}), a || (a = e._start = {}), function (t, e, n, a) {
            var r,
                o,
                s,
                l,
                u,
                d,
                h,
                c,
                f,
                g = Object.keys(n);

            for (r = 0, o = g.length; r < o; ++r) {
              if (d = n[s = g[r]], e.hasOwnProperty(s) || (e[s] = d), (l = e[s]) !== d && "_" !== s[0]) {
                if (t.hasOwnProperty(s) || (t[s] = l), (h = _typeof(d)) == _typeof(u = t[s])) if ("string" === h) {
                  if ((c = i(u)).valid && (f = i(d)).valid) {
                    e[s] = f.mix(c, a).rgbString();
                    continue;
                  }
                } else if ("number" === h && isFinite(u) && isFinite(d)) {
                  e[s] = u + (d - u) * a;
                  continue;
                }
                e[s] = d;
              }
            }
          }(a, r, n, t), e) : (e._view = n, e._start = null, e);
        },
        tooltipPosition: function tooltipPosition() {
          return {
            x: this._model.x,
            y: this._model.y
          };
        },
        hasValue: function hasValue() {
          return a.isNumber(this._model.x) && a.isNumber(this._model.y);
        }
      }), r.extend = a.inherits, e.exports = r;
    }, {
      2: 2,
      45: 45
    }],
    27: [function (t, e, n) {
      "use strict";

      var i = t(2),
          a = t(25),
          r = t(45);

      e.exports = function (t) {
        function e(t, e, n) {
          var i;
          return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i;
        }

        function n(t) {
          return null != t && "none" !== t;
        }

        function o(t, i, a) {
          var r = document.defaultView,
              o = t.parentNode,
              s = r.getComputedStyle(t)[i],
              l = r.getComputedStyle(o)[i],
              u = n(s),
              d = n(l),
              h = Number.POSITIVE_INFINITY;
          return u || d ? Math.min(u ? e(s, t, a) : h, d ? e(l, o, a) : h) : "none";
        }

        r.configMerge = function () {
          return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function merger(e, n, i, a) {
              var o = n[e] || {},
                  s = i[e];
              "scales" === e ? n[e] = r.scaleMerge(o, s) : "scale" === e ? n[e] = r.merge(o, [t.scaleService.getScaleDefaults(s.type), s]) : r._merger(e, n, i, a);
            }
          });
        }, r.scaleMerge = function () {
          return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function merger(e, n, i, a) {
              if ("xAxes" === e || "yAxes" === e) {
                var o,
                    s,
                    l,
                    u = i[e].length;

                for (n[e] || (n[e] = []), o = 0; o < u; ++o) {
                  l = i[e][o], s = r.valueOrDefault(l.type, "xAxes" === e ? "category" : "linear"), o >= n[e].length && n[e].push({}), !n[e][o].type || l.type && l.type !== n[e][o].type ? r.merge(n[e][o], [t.scaleService.getScaleDefaults(s), l]) : r.merge(n[e][o], l);
                }
              } else r._merger(e, n, i, a);
            }
          });
        }, r.where = function (t, e) {
          if (r.isArray(t) && Array.prototype.filter) return t.filter(e);
          var n = [];
          return r.each(t, function (t) {
            e(t) && n.push(t);
          }), n;
        }, r.findIndex = Array.prototype.findIndex ? function (t, e, n) {
          return t.findIndex(e, n);
        } : function (t, e, n) {
          n = void 0 === n ? t : n;

          for (var i = 0, a = t.length; i < a; ++i) {
            if (e.call(n, t[i], i, t)) return i;
          }

          return -1;
        }, r.findNextWhere = function (t, e, n) {
          r.isNullOrUndef(n) && (n = -1);

          for (var i = n + 1; i < t.length; i++) {
            var a = t[i];
            if (e(a)) return a;
          }
        }, r.findPreviousWhere = function (t, e, n) {
          r.isNullOrUndef(n) && (n = t.length);

          for (var i = n - 1; i >= 0; i--) {
            var a = t[i];
            if (e(a)) return a;
          }
        }, r.isNumber = function (t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }, r.almostEquals = function (t, e, n) {
          return Math.abs(t - e) < n;
        }, r.almostWhole = function (t, e) {
          var n = Math.round(t);
          return n - e < t && n + e > t;
        }, r.max = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.max(t, e);
          }, Number.NEGATIVE_INFINITY);
        }, r.min = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.min(t, e);
          }, Number.POSITIVE_INFINITY);
        }, r.sign = Math.sign ? function (t) {
          return Math.sign(t);
        } : function (t) {
          return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
        }, r.log10 = Math.log10 ? function (t) {
          return Math.log10(t);
        } : function (t) {
          return Math.log(t) / Math.LN10;
        }, r.toRadians = function (t) {
          return t * (Math.PI / 180);
        }, r.toDegrees = function (t) {
          return t * (180 / Math.PI);
        }, r.getAngleFromPoint = function (t, e) {
          var n = e.x - t.x,
              i = e.y - t.y,
              a = Math.sqrt(n * n + i * i),
              r = Math.atan2(i, n);
          return r < -.5 * Math.PI && (r += 2 * Math.PI), {
            angle: r,
            distance: a
          };
        }, r.distanceBetweenPoints = function (t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, r.aliasPixel = function (t) {
          return t % 2 == 0 ? 0 : .5;
        }, r.splineCurve = function (t, e, n, i) {
          var a = t.skip ? e : t,
              r = e,
              o = n.skip ? e : n,
              s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
              l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
              u = s / (s + l),
              d = l / (s + l),
              h = i * (u = isNaN(u) ? 0 : u),
              c = i * (d = isNaN(d) ? 0 : d);
          return {
            previous: {
              x: r.x - h * (o.x - a.x),
              y: r.y - h * (o.y - a.y)
            },
            next: {
              x: r.x + c * (o.x - a.x),
              y: r.y + c * (o.y - a.y)
            }
          };
        }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function (t) {
          var e,
              n,
              i,
              a,
              o,
              s,
              l,
              u,
              d,
              h = (t || []).map(function (t) {
            return {
              model: t._model,
              deltaK: 0,
              mK: 0
            };
          }),
              c = h.length;

          for (e = 0; e < c; ++e) {
            if (!(i = h[e]).model.skip) {
              if (n = e > 0 ? h[e - 1] : null, (a = e < c - 1 ? h[e + 1] : null) && !a.model.skip) {
                var f = a.model.x - i.model.x;
                i.deltaK = 0 !== f ? (a.model.y - i.model.y) / f : 0;
              }

              !n || n.model.skip ? i.mK = i.deltaK : !a || a.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2;
            }
          }

          for (e = 0; e < c - 1; ++e) {
            i = h[e], a = h[e + 1], i.model.skip || a.model.skip || (r.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (o = i.mK / i.deltaK, s = a.mK / i.deltaK, (u = Math.pow(o, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), i.mK = o * l * i.deltaK, a.mK = s * l * i.deltaK)));
          }

          for (e = 0; e < c; ++e) {
            (i = h[e]).model.skip || (n = e > 0 ? h[e - 1] : null, a = e < c - 1 ? h[e + 1] : null, n && !n.model.skip && (d = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - d, i.model.controlPointPreviousY = i.model.y - d * i.mK), a && !a.model.skip && (d = (a.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + d, i.model.controlPointNextY = i.model.y + d * i.mK));
          }
        }, r.nextItem = function (t, e, n) {
          return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
        }, r.previousItem = function (t, e, n) {
          return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
        }, r.niceNum = function (t, e) {
          var n = Math.floor(r.log10(t)),
              i = t / Math.pow(10, n);
          return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n);
        }, r.requestAnimFrame = "undefined" == typeof window ? function (t) {
          t();
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
          return window.setTimeout(t, 1e3 / 60);
        }, r.getRelativePosition = function (t, e) {
          var n,
              i,
              a = t.originalEvent || t,
              o = t.currentTarget || t.srcElement,
              s = o.getBoundingClientRect(),
              l = a.touches;
          l && l.length > 0 ? (n = l[0].clientX, i = l[0].clientY) : (n = a.clientX, i = a.clientY);
          var u = parseFloat(r.getStyle(o, "padding-left")),
              d = parseFloat(r.getStyle(o, "padding-top")),
              h = parseFloat(r.getStyle(o, "padding-right")),
              c = parseFloat(r.getStyle(o, "padding-bottom")),
              f = s.right - s.left - u - h,
              g = s.bottom - s.top - d - c;
          return {
            x: n = Math.round((n - s.left - u) / f * o.width / e.currentDevicePixelRatio),
            y: i = Math.round((i - s.top - d) / g * o.height / e.currentDevicePixelRatio)
          };
        }, r.getConstraintWidth = function (t) {
          return o(t, "max-width", "clientWidth");
        }, r.getConstraintHeight = function (t) {
          return o(t, "max-height", "clientHeight");
        }, r.getMaximumWidth = function (t) {
          var e = t.parentNode;
          if (!e) return t.clientWidth;
          var n = parseInt(r.getStyle(e, "padding-left"), 10),
              i = parseInt(r.getStyle(e, "padding-right"), 10),
              a = e.clientWidth - n - i,
              o = r.getConstraintWidth(t);
          return isNaN(o) ? a : Math.min(a, o);
        }, r.getMaximumHeight = function (t) {
          var e = t.parentNode;
          if (!e) return t.clientHeight;
          var n = parseInt(r.getStyle(e, "padding-top"), 10),
              i = parseInt(r.getStyle(e, "padding-bottom"), 10),
              a = e.clientHeight - n - i,
              o = r.getConstraintHeight(t);
          return isNaN(o) ? a : Math.min(a, o);
        }, r.getStyle = function (t, e) {
          return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
        }, r.retinaScale = function (t, e) {
          var n = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;

          if (1 !== n) {
            var i = t.canvas,
                a = t.height,
                r = t.width;
            i.height = a * n, i.width = r * n, t.ctx.scale(n, n), i.style.height = a + "px", i.style.width = r + "px";
          }
        }, r.fontString = function (t, e, n) {
          return e + " " + t + "px " + n;
        }, r.longestText = function (t, e, n, i) {
          var a = (i = i || {}).data = i.data || {},
              o = i.garbageCollect = i.garbageCollect || [];
          i.font !== e && (a = i.data = {}, o = i.garbageCollect = [], i.font = e), t.font = e;
          var s = 0;
          r.each(n, function (e) {
            null != e && !0 !== r.isArray(e) ? s = r.measureText(t, a, o, s, e) : r.isArray(e) && r.each(e, function (e) {
              null == e || r.isArray(e) || (s = r.measureText(t, a, o, s, e));
            });
          });
          var l = o.length / 2;

          if (l > n.length) {
            for (var u = 0; u < l; u++) {
              delete a[o[u]];
            }

            o.splice(0, l);
          }

          return s;
        }, r.measureText = function (t, e, n, i, a) {
          var r = e[a];
          return r || (r = e[a] = t.measureText(a).width, n.push(a)), r > i && (i = r), i;
        }, r.numberOfLabelLines = function (t) {
          var e = 1;
          return r.each(t, function (t) {
            r.isArray(t) && t.length > e && (e = t.length);
          }), e;
        }, r.color = i ? function (t) {
          return t instanceof CanvasGradient && (t = a.global.defaultColor), i(t);
        } : function (t) {
          return console.error("Color.js not found!"), t;
        }, r.getHoverColor = function (t) {
          return t instanceof CanvasPattern ? t : r.color(t).saturate(.5).darken(.1).rgbString();
        };
      };
    }, {
      2: 2,
      25: 25,
      45: 45
    }],
    28: [function (t, e, n) {
      "use strict";

      var i = t(45);

      function a(t, e) {
        return t["native"] ? {
          x: t.x,
          y: t.y
        } : i.getRelativePosition(t, e);
      }

      function r(t, e) {
        var n, i, a, r, o;

        for (i = 0, r = t.data.datasets.length; i < r; ++i) {
          if (t.isDatasetVisible(i)) for (a = 0, o = (n = t.getDatasetMeta(i)).data.length; a < o; ++a) {
            var s = n.data[a];
            s._view.skip || e(s);
          }
        }
      }

      function o(t, e) {
        var n = [];
        return r(t, function (t) {
          t.inRange(e.x, e.y) && n.push(t);
        }), n;
      }

      function s(t, e, n, i) {
        var a = Number.POSITIVE_INFINITY,
            o = [];
        return r(t, function (t) {
          if (!n || t.inRange(e.x, e.y)) {
            var r = t.getCenterPoint(),
                s = i(e, r);
            s < a ? (o = [t], a = s) : s === a && o.push(t);
          }
        }), o;
      }

      function l(t) {
        var e = -1 !== t.indexOf("x"),
            n = -1 !== t.indexOf("y");
        return function (t, i) {
          var a = e ? Math.abs(t.x - i.x) : 0,
              r = n ? Math.abs(t.y - i.y) : 0;
          return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2));
        };
      }

      function u(t, e, n) {
        var i = a(e, t);
        n.axis = n.axis || "x";
        var r = l(n.axis),
            u = n.intersect ? o(t, i) : s(t, i, !1, r),
            d = [];
        return u.length ? (t.data.datasets.forEach(function (e, n) {
          if (t.isDatasetVisible(n)) {
            var i = t.getDatasetMeta(n).data[u[0]._index];

            i && !i._view.skip && d.push(i);
          }
        }), d) : [];
      }

      e.exports = {
        modes: {
          single: function single(t, e) {
            var n = a(e, t),
                i = [];
            return r(t, function (t) {
              if (t.inRange(n.x, n.y)) return i.push(t), i;
            }), i.slice(0, 1);
          },
          label: u,
          index: u,
          dataset: function dataset(t, e, n) {
            var i = a(e, t);
            n.axis = n.axis || "xy";
            var r = l(n.axis),
                u = n.intersect ? o(t, i) : s(t, i, !1, r);
            return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u;
          },
          "x-axis": function xAxis(t, e) {
            return u(t, e, {
              intersect: !1
            });
          },
          point: function point(t, e) {
            return o(t, a(e, t));
          },
          nearest: function nearest(t, e, n) {
            var i = a(e, t);
            n.axis = n.axis || "xy";
            var r = l(n.axis),
                o = s(t, i, n.intersect, r);
            return o.length > 1 && o.sort(function (t, e) {
              var n = t.getArea() - e.getArea();
              return 0 === n && (n = t._datasetIndex - e._datasetIndex), n;
            }), o.slice(0, 1);
          },
          x: function x(t, e, n) {
            var i = a(e, t),
                o = [],
                s = !1;
            return r(t, function (t) {
              t.inXRange(i.x) && o.push(t), t.inRange(i.x, i.y) && (s = !0);
            }), n.intersect && !s && (o = []), o;
          },
          y: function y(t, e, n) {
            var i = a(e, t),
                o = [],
                s = !1;
            return r(t, function (t) {
              t.inYRange(i.y) && o.push(t), t.inRange(i.x, i.y) && (s = !0);
            }), n.intersect && !s && (o = []), o;
          }
        }
      };
    }, {
      45: 45
    }],
    29: [function (t, e, n) {
      "use strict";

      t(25)._set("global", {
        responsive: !0,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: !0,
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
          onHover: null,
          mode: "nearest",
          intersect: !0,
          animationDuration: 400
        },
        onClick: null,
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        showLines: !0,
        elements: {},
        layout: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      }), e.exports = function () {
        var t = function t(_t2, e) {
          return this.construct(_t2, e), this;
        };

        return t.Chart = t, t;
      };
    }, {
      25: 25
    }],
    30: [function (t, e, n) {
      "use strict";

      var i = t(45);

      e.exports = function (t) {
        function e(t, e) {
          return i.where(t, function (t) {
            return t.position === e;
          });
        }

        function n(t, e) {
          t.forEach(function (t, e) {
            return t._tmpIndex_ = e, t;
          }), t.sort(function (t, n) {
            var i = e ? n : t,
                a = e ? t : n;
            return i.weight === a.weight ? i._tmpIndex_ - a._tmpIndex_ : i.weight - a.weight;
          }), t.forEach(function (t) {
            delete t._tmpIndex_;
          });
        }

        t.layoutService = {
          defaults: {},
          addBox: function addBox(t, e) {
            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e);
          },
          removeBox: function removeBox(t, e) {
            var n = t.boxes ? t.boxes.indexOf(e) : -1;
            -1 !== n && t.boxes.splice(n, 1);
          },
          configure: function configure(t, e, n) {
            for (var i, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r; ++o) {
              i = a[o], n.hasOwnProperty(i) && (e[i] = n[i]);
            }
          },
          update: function update(t, a, r) {
            if (t) {
              var o = t.options.layout || {},
                  s = i.options.toPadding(o.padding),
                  l = s.left,
                  u = s.right,
                  d = s.top,
                  h = s.bottom,
                  c = e(t.boxes, "left"),
                  f = e(t.boxes, "right"),
                  g = e(t.boxes, "top"),
                  m = e(t.boxes, "bottom"),
                  p = e(t.boxes, "chartArea");
              n(c, !0), n(f, !1), n(g, !0), n(m, !1);

              var v = a - l - u,
                  y = r - d - h,
                  b = y / 2,
                  x = (a - v / 2) / (c.length + f.length),
                  _ = (r - b) / (g.length + m.length),
                  k = v,
                  w = y,
                  M = [];

              i.each(c.concat(f, g, m), function (t) {
                var e,
                    n = t.isHorizontal();
                n ? (e = t.update(t.fullWidth ? v : k, _), w -= e.height) : (e = t.update(x, b), k -= e.width), M.push({
                  horizontal: n,
                  minSize: e,
                  box: t
                });
              });
              var S = 0,
                  D = 0,
                  C = 0,
                  P = 0;
              i.each(g.concat(m), function (t) {
                if (t.getPadding) {
                  var e = t.getPadding();
                  S = Math.max(S, e.left), D = Math.max(D, e.right);
                }
              }), i.each(c.concat(f), function (t) {
                if (t.getPadding) {
                  var e = t.getPadding();
                  C = Math.max(C, e.top), P = Math.max(P, e.bottom);
                }
              });
              var T = l,
                  A = u,
                  I = d,
                  O = h;
              i.each(c.concat(f), z), i.each(c, function (t) {
                T += t.width;
              }), i.each(f, function (t) {
                A += t.width;
              }), i.each(g.concat(m), z), i.each(g, function (t) {
                I += t.height;
              }), i.each(m, function (t) {
                O += t.height;
              }), i.each(c.concat(f), function (t) {
                var e = i.findNextWhere(M, function (e) {
                  return e.box === t;
                }),
                    n = {
                  left: 0,
                  right: 0,
                  top: I,
                  bottom: O
                };
                e && t.update(e.minSize.width, w, n);
              }), T = l, A = u, I = d, O = h, i.each(c, function (t) {
                T += t.width;
              }), i.each(f, function (t) {
                A += t.width;
              }), i.each(g, function (t) {
                I += t.height;
              }), i.each(m, function (t) {
                O += t.height;
              });
              var F = Math.max(S - T, 0);
              T += F, A += Math.max(D - A, 0);
              var R = Math.max(C - I, 0);
              I += R, O += Math.max(P - O, 0);
              var L = r - I - O,
                  W = a - T - A;
              W === k && L === w || (i.each(c, function (t) {
                t.height = L;
              }), i.each(f, function (t) {
                t.height = L;
              }), i.each(g, function (t) {
                t.fullWidth || (t.width = W);
              }), i.each(m, function (t) {
                t.fullWidth || (t.width = W);
              }), w = L, k = W);
              var Y = l + F,
                  N = d + R;
              i.each(c.concat(g), B), Y += k, N += w, i.each(f, B), i.each(m, B), t.chartArea = {
                left: T,
                top: I,
                right: T + k,
                bottom: I + w
              }, i.each(p, function (e) {
                e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, w);
              });
            }

            function z(t) {
              var e = i.findNextWhere(M, function (e) {
                return e.box === t;
              });
              if (e) if (t.isHorizontal()) {
                var n = {
                  left: Math.max(T, S),
                  right: Math.max(A, D),
                  top: 0,
                  bottom: 0
                };
                t.update(t.fullWidth ? v : k, y / 2, n);
              } else t.update(e.minSize.width, w);
            }

            function B(t) {
              t.isHorizontal() ? (t.left = t.fullWidth ? l : T, t.right = t.fullWidth ? a - u : T + k, t.top = N, t.bottom = N + t.height, N = t.bottom) : (t.left = Y, t.right = Y + t.width, t.top = I, t.bottom = I + w, Y = t.right);
            }
          }
        };
      };
    }, {
      45: 45
    }],
    31: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          r = t(45);
      i._set("global", {
        plugins: {}
      }), e.exports = function (t) {
        t.plugins = {
          _plugins: [],
          _cacheId: 0,
          register: function register(t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
              -1 === e.indexOf(t) && e.push(t);
            }), this._cacheId++;
          },
          unregister: function unregister(t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
              var n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }), this._cacheId++;
          },
          clear: function clear() {
            this._plugins = [], this._cacheId++;
          },
          count: function count() {
            return this._plugins.length;
          },
          getAll: function getAll() {
            return this._plugins;
          },
          notify: function notify(t, e, n) {
            var i,
                a,
                r,
                o,
                s,
                l = this.descriptors(t),
                u = l.length;

            for (i = 0; i < u; ++i) {
              if ("function" == typeof (s = (r = (a = l[i]).plugin)[e]) && ((o = [t].concat(n || [])).push(a.options), !1 === s.apply(r, o))) return !1;
            }

            return !0;
          },
          descriptors: function descriptors(t) {
            var e = t._plugins || (t._plugins = {});
            if (e.id === this._cacheId) return e.descriptors;
            var n = [],
                a = [],
                o = t && t.config || {},
                s = o.options && o.options.plugins || {};
            return this._plugins.concat(o.plugins || []).forEach(function (t) {
              if (-1 === n.indexOf(t)) {
                var e = t.id,
                    o = s[e];
                !1 !== o && (!0 === o && (o = r.clone(i.global.plugins[e])), n.push(t), a.push({
                  plugin: t,
                  options: o || {}
                }));
              }
            }), e.descriptors = a, e.id = this._cacheId, a;
          }
        }, t.pluginService = t.plugins, t.PluginBase = a.extend({});
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    32: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          r = t(45),
          o = t(34);

      function s(t) {
        var e,
            n,
            i = [];

        for (e = 0, n = t.length; e < n; ++e) {
          i.push(t[e].label);
        }

        return i;
      }

      function l(t, e, n) {
        var i = t.getPixelForTick(e);
        return n && (i -= 0 === e ? (t.getPixelForTick(1) - i) / 2 : (i - t.getPixelForTick(e - 1)) / 2), i;
      }

      i._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
          display: !0,
          color: "rgba(0, 0, 0, 0.1)",
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickMarkLength: 10,
          zeroLineWidth: 1,
          zeroLineColor: "rgba(0,0,0,0.25)",
          zeroLineBorderDash: [],
          zeroLineBorderDashOffset: 0,
          offsetGridLines: !1,
          borderDash: [],
          borderDashOffset: 0
        },
        scaleLabel: {
          display: !1,
          labelString: "",
          lineHeight: 1.2,
          padding: {
            top: 4,
            bottom: 4
          }
        },
        ticks: {
          beginAtZero: !1,
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          padding: 0,
          reverse: !1,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 0,
          labelOffset: 0,
          callback: o.formatters.values,
          minor: {},
          major: {}
        }
      }), e.exports = function (t) {
        function e(t, e, n) {
          return r.isArray(e) ? r.longestText(t, n, e) : t.measureText(e).width;
        }

        function n(t) {
          var e = r.valueOrDefault,
              n = i.global,
              a = e(t.fontSize, n.defaultFontSize),
              o = e(t.fontStyle, n.defaultFontStyle),
              s = e(t.fontFamily, n.defaultFontFamily);
          return {
            size: a,
            style: o,
            family: s,
            font: r.fontString(a, o, s)
          };
        }

        function o(t) {
          return r.options.toLineHeight(r.valueOrDefault(t.lineHeight, 1.2), r.valueOrDefault(t.fontSize, i.global.defaultFontSize));
        }

        t.Scale = a.extend({
          getPadding: function getPadding() {
            return {
              left: this.paddingLeft || 0,
              top: this.paddingTop || 0,
              right: this.paddingRight || 0,
              bottom: this.paddingBottom || 0
            };
          },
          getTicks: function getTicks() {
            return this._ticks;
          },
          mergeTicksOptions: function mergeTicksOptions() {
            var t = this.options.ticks;

            for (var e in !1 === t.minor && (t.minor = {
              display: !1
            }), !1 === t.major && (t.major = {
              display: !1
            }), t) {
              "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]));
            }
          },
          beforeUpdate: function beforeUpdate() {
            r.callback(this.options.beforeUpdate, [this]);
          },
          update: function update(t, e, n) {
            var i,
                a,
                o,
                s,
                l,
                u,
                d = this;

            for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = r.extend({
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }, n), d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), l = d.buildTicks() || [], d.afterBuildTicks(), d.beforeTickToLabelConversion(), o = d.convertTicksToLabels(l) || d.ticks, d.afterTickToLabelConversion(), d.ticks = o, i = 0, a = o.length; i < a; ++i) {
              s = o[i], (u = l[i]) ? u.label = s : l.push(u = {
                label: s,
                major: !1
              });
            }

            return d._ticks = l, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize;
          },
          afterUpdate: function afterUpdate() {
            r.callback(this.options.afterUpdate, [this]);
          },
          beforeSetDimensions: function beforeSetDimensions() {
            r.callback(this.options.beforeSetDimensions, [this]);
          },
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
          },
          afterSetDimensions: function afterSetDimensions() {
            r.callback(this.options.afterSetDimensions, [this]);
          },
          beforeDataLimits: function beforeDataLimits() {
            r.callback(this.options.beforeDataLimits, [this]);
          },
          determineDataLimits: r.noop,
          afterDataLimits: function afterDataLimits() {
            r.callback(this.options.afterDataLimits, [this]);
          },
          beforeBuildTicks: function beforeBuildTicks() {
            r.callback(this.options.beforeBuildTicks, [this]);
          },
          buildTicks: r.noop,
          afterBuildTicks: function afterBuildTicks() {
            r.callback(this.options.afterBuildTicks, [this]);
          },
          beforeTickToLabelConversion: function beforeTickToLabelConversion() {
            r.callback(this.options.beforeTickToLabelConversion, [this]);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var t = this.options.ticks;
            this.ticks = this.ticks.map(t.userCallback || t.callback, this);
          },
          afterTickToLabelConversion: function afterTickToLabelConversion() {
            r.callback(this.options.afterTickToLabelConversion, [this]);
          },
          beforeCalculateTickRotation: function beforeCalculateTickRotation() {
            r.callback(this.options.beforeCalculateTickRotation, [this]);
          },
          calculateTickRotation: function calculateTickRotation() {
            var t = this,
                e = t.ctx,
                i = t.options.ticks,
                a = s(t._ticks),
                o = n(i);
            e.font = o.font;
            var l = i.minRotation || 0;
            if (a.length && t.options.display && t.isHorizontal()) for (var u, d = r.longestText(e, o.font, a, t.longestTextCache), h = d, c = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; h > c && l < i.maxRotation;) {
              var f = r.toRadians(l);

              if (u = Math.cos(f), Math.sin(f) * d > t.maxHeight) {
                l--;
                break;
              }

              l++, h = u * d;
            }
            t.labelRotation = l;
          },
          afterCalculateTickRotation: function afterCalculateTickRotation() {
            r.callback(this.options.afterCalculateTickRotation, [this]);
          },
          beforeFit: function beforeFit() {
            r.callback(this.options.beforeFit, [this]);
          },
          fit: function fit() {
            var t = this,
                i = t.minSize = {
              width: 0,
              height: 0
            },
                a = s(t._ticks),
                l = t.options,
                u = l.ticks,
                d = l.scaleLabel,
                h = l.gridLines,
                c = l.display,
                f = t.isHorizontal(),
                g = n(u),
                m = l.gridLines.tickMarkLength;

            if (i.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : c && h.drawTicks ? m : 0, i.height = f ? c && h.drawTicks ? m : 0 : t.maxHeight, d.display && c) {
              var p = o(d) + r.options.toPadding(d.padding).height;
              f ? i.height += p : i.width += p;
            }

            if (u.display && c) {
              var v = r.longestText(t.ctx, g.font, a, t.longestTextCache),
                  y = r.numberOfLabelLines(a),
                  b = .5 * g.size,
                  x = t.options.ticks.padding;

              if (f) {
                t.longestLabelWidth = v;

                var _ = r.toRadians(t.labelRotation),
                    k = Math.cos(_),
                    w = Math.sin(_) * v + g.size * y + b * (y - 1) + b;

                i.height = Math.min(t.maxHeight, i.height + w + x), t.ctx.font = g.font;
                var M = e(t.ctx, a[0], g.font),
                    S = e(t.ctx, a[a.length - 1], g.font);
                0 !== t.labelRotation ? (t.paddingLeft = "bottom" === l.position ? k * M + 3 : k * b + 3, t.paddingRight = "bottom" === l.position ? k * b + 3 : k * S + 3) : (t.paddingLeft = M / 2 + 3, t.paddingRight = S / 2 + 3);
              } else u.mirror ? v = 0 : v += x + b, i.width = Math.min(t.maxWidth, i.width + v), t.paddingTop = g.size / 2, t.paddingBottom = g.size / 2;
            }

            t.handleMargins(), t.width = i.width, t.height = i.height;
          },
          handleMargins: function handleMargins() {
            var t = this;
            t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0));
          },
          afterFit: function afterFit() {
            r.callback(this.options.afterFit, [this]);
          },
          isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          },
          isFullWidth: function isFullWidth() {
            return this.options.fullWidth;
          },
          getRightValue: function getRightValue(t) {
            if (r.isNullOrUndef(t)) return NaN;
            if ("number" == typeof t && !isFinite(t)) return NaN;
            if (t) if (this.isHorizontal()) {
              if (void 0 !== t.x) return this.getRightValue(t.x);
            } else if (void 0 !== t.y) return this.getRightValue(t.y);
            return t;
          },
          getLabelForIndex: r.noop,
          getPixelForValue: r.noop,
          getValueForPixel: r.noop,
          getPixelForTick: function getPixelForTick(t) {
            var e = this,
                n = e.options.offset;

            if (e.isHorizontal()) {
              var i = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (n ? 0 : 1), 1),
                  a = i * t + e.paddingLeft;
              n && (a += i / 2);
              var r = e.left + Math.round(a);
              return r += e.isFullWidth() ? e.margins.left : 0;
            }

            var o = e.height - (e.paddingTop + e.paddingBottom);
            return e.top + t * (o / (e._ticks.length - 1));
          },
          getPixelForDecimal: function getPixelForDecimal(t) {
            var e = this;

            if (e.isHorizontal()) {
              var n = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                  i = e.left + Math.round(n);
              return i += e.isFullWidth() ? e.margins.left : 0;
            }

            return e.top + t * e.height;
          },
          getBasePixel: function getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
          },
          getBaseValue: function getBaseValue() {
            var t = this.min,
                e = this.max;
            return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
          },
          _autoSkip: function _autoSkip(t) {
            var e,
                n,
                i,
                a,
                o = this,
                s = o.isHorizontal(),
                l = o.options.ticks.minor,
                u = t.length,
                d = r.toRadians(o.labelRotation),
                h = Math.cos(d),
                c = o.longestLabelWidth * h,
                f = [];

            for (l.maxTicksLimit && (a = l.maxTicksLimit), s && (e = !1, (c + l.autoSkipPadding) * u > o.width - (o.paddingLeft + o.paddingRight) && (e = 1 + Math.floor((c + l.autoSkipPadding) * u / (o.width - (o.paddingLeft + o.paddingRight)))), a && u > a && (e = Math.max(e, Math.floor(u / a)))), n = 0; n < u; n++) {
              i = t[n], (e > 1 && n % e > 0 || n % e == 0 && n + e >= u) && n !== u - 1 && delete i.label, f.push(i);
            }

            return f;
          },
          draw: function draw(t) {
            var e = this,
                a = e.options;

            if (a.display) {
              var s = e.ctx,
                  u = i.global,
                  d = a.ticks.minor,
                  h = a.ticks.major || d,
                  c = a.gridLines,
                  f = a.scaleLabel,
                  g = 0 !== e.labelRotation,
                  m = e.isHorizontal(),
                  p = d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                  v = r.valueOrDefault(d.fontColor, u.defaultFontColor),
                  y = n(d),
                  b = r.valueOrDefault(h.fontColor, u.defaultFontColor),
                  x = n(h),
                  _ = c.drawTicks ? c.tickMarkLength : 0,
                  k = r.valueOrDefault(f.fontColor, u.defaultFontColor),
                  w = n(f),
                  M = r.options.toPadding(f.padding),
                  S = r.toRadians(e.labelRotation),
                  D = [],
                  C = "right" === a.position ? e.left : e.right - _,
                  P = "right" === a.position ? e.left + _ : e.right,
                  T = "bottom" === a.position ? e.top : e.bottom - _,
                  A = "bottom" === a.position ? e.top + _ : e.bottom;

              if (r.each(p, function (n, i) {
                if (!r.isNullOrUndef(n.label)) {
                  var o,
                      s,
                      h,
                      f,
                      v,
                      y,
                      b,
                      x,
                      k,
                      w,
                      M,
                      I,
                      O,
                      F,
                      R = n.label;
                  i === e.zeroLineIndex && a.offset === c.offsetGridLines ? (o = c.zeroLineWidth, s = c.zeroLineColor, h = c.zeroLineBorderDash, f = c.zeroLineBorderDashOffset) : (o = r.valueAtIndexOrDefault(c.lineWidth, i), s = r.valueAtIndexOrDefault(c.color, i), h = r.valueOrDefault(c.borderDash, u.borderDash), f = r.valueOrDefault(c.borderDashOffset, u.borderDashOffset));
                  var L = "middle",
                      W = "middle",
                      Y = d.padding;

                  if (m) {
                    var N = _ + Y;
                    "bottom" === a.position ? (W = g ? "middle" : "top", L = g ? "right" : "center", F = e.top + N) : (W = g ? "middle" : "bottom", L = g ? "left" : "center", F = e.bottom - N);
                    var z = l(e, i, c.offsetGridLines && p.length > 1);
                    z < e.left && (s = "rgba(0,0,0,0)"), z += r.aliasPixel(o), O = e.getPixelForTick(i) + d.labelOffset, v = b = k = M = z, y = T, x = A, w = t.top, I = t.bottom;
                  } else {
                    var B,
                        V = "left" === a.position;
                    d.mirror ? (L = V ? "left" : "right", B = Y) : (L = V ? "right" : "left", B = _ + Y), O = V ? e.right - B : e.left + B;
                    var H = l(e, i, c.offsetGridLines && p.length > 1);
                    H < e.top && (s = "rgba(0,0,0,0)"), H += r.aliasPixel(o), F = e.getPixelForTick(i) + d.labelOffset, v = C, b = P, k = t.left, M = t.right, y = x = w = I = H;
                  }

                  D.push({
                    tx1: v,
                    ty1: y,
                    tx2: b,
                    ty2: x,
                    x1: k,
                    y1: w,
                    x2: M,
                    y2: I,
                    labelX: O,
                    labelY: F,
                    glWidth: o,
                    glColor: s,
                    glBorderDash: h,
                    glBorderDashOffset: f,
                    rotation: -1 * S,
                    label: R,
                    major: n.major,
                    textBaseline: W,
                    textAlign: L
                  });
                }
              }), r.each(D, function (t) {
                if (c.display && (s.save(), s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), c.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), c.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
                  s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? x.font : y.font, s.fillStyle = t.major ? b : v, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign;
                  var e = t.label;
                  if (r.isArray(e)) for (var n = 0, i = 0; n < e.length; ++n) {
                    s.fillText("" + e[n], 0, i), i += 1.5 * y.size;
                  } else s.fillText(e, 0, 0);
                  s.restore();
                }
              }), f.display) {
                var I,
                    O,
                    F = 0,
                    R = o(f) / 2;
                if (m) I = e.left + (e.right - e.left) / 2, O = "bottom" === a.position ? e.bottom - R - M.bottom : e.top + R + M.top;else {
                  var L = "left" === a.position;
                  I = L ? e.left + R + M.top : e.right - R - M.top, O = e.top + (e.bottom - e.top) / 2, F = L ? -.5 * Math.PI : .5 * Math.PI;
                }
                s.save(), s.translate(I, O), s.rotate(F), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = k, s.font = w.font, s.fillText(f.labelString, 0, 0), s.restore();
              }

              if (c.drawBorder) {
                s.lineWidth = r.valueAtIndexOrDefault(c.lineWidth, 0), s.strokeStyle = r.valueAtIndexOrDefault(c.color, 0);
                var W = e.left,
                    Y = e.right,
                    N = e.top,
                    z = e.bottom,
                    B = r.aliasPixel(s.lineWidth);
                m ? (N = z = "top" === a.position ? e.bottom : e.top, N += B, z += B) : (W = Y = "left" === a.position ? e.right : e.left, W += B, Y += B), s.beginPath(), s.moveTo(W, N), s.lineTo(Y, z), s.stroke();
              }
            }
          }
        });
      };
    }, {
      25: 25,
      26: 26,
      34: 34,
      45: 45
    }],
    33: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(45);

      e.exports = function (t) {
        t.scaleService = {
          constructors: {},
          defaults: {},
          registerScaleType: function registerScaleType(t, e, n) {
            this.constructors[t] = e, this.defaults[t] = a.clone(n);
          },
          getScaleConstructor: function getScaleConstructor(t) {
            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
          },
          getScaleDefaults: function getScaleDefaults(t) {
            return this.defaults.hasOwnProperty(t) ? a.merge({}, [i.scale, this.defaults[t]]) : {};
          },
          updateScaleDefaults: function updateScaleDefaults(t, e) {
            this.defaults.hasOwnProperty(t) && (this.defaults[t] = a.extend(this.defaults[t], e));
          },
          addScalesToLayout: function addScalesToLayout(e) {
            a.each(e.scales, function (n) {
              n.fullWidth = n.options.fullWidth, n.position = n.options.position, n.weight = n.options.weight, t.layoutService.addBox(e, n);
            });
          }
        };
      };
    }, {
      25: 25,
      45: 45
    }],
    34: [function (t, e, n) {
      "use strict";

      var i = t(45);
      e.exports = {
        generators: {
          linear: function linear(t, e) {
            var n,
                a = [];
            if (t.stepSize && t.stepSize > 0) n = t.stepSize;else {
              var r = i.niceNum(e.max - e.min, !1);
              n = i.niceNum(r / (t.maxTicks - 1), !0);
            }
            var o = Math.floor(e.min / n) * n,
                s = Math.ceil(e.max / n) * n;
            t.min && t.max && t.stepSize && i.almostWhole((t.max - t.min) / t.stepSize, n / 1e3) && (o = t.min, s = t.max);
            var l = (s - o) / n;
            l = i.almostEquals(l, Math.round(l), n / 1e3) ? Math.round(l) : Math.ceil(l), a.push(void 0 !== t.min ? t.min : o);

            for (var u = 1; u < l; ++u) {
              a.push(o + u * n);
            }

            return a.push(void 0 !== t.max ? t.max : s), a;
          },
          logarithmic: function logarithmic(t, e) {
            var n,
                a,
                r = [],
                o = i.valueOrDefault,
                s = o(t.min, Math.pow(10, Math.floor(i.log10(e.min)))),
                l = Math.floor(i.log10(e.max)),
                u = Math.ceil(e.max / Math.pow(10, l));
            0 === s ? (n = Math.floor(i.log10(e.minNotZero)), a = Math.floor(e.minNotZero / Math.pow(10, n)), r.push(s), s = a * Math.pow(10, n)) : (n = Math.floor(i.log10(s)), a = Math.floor(s / Math.pow(10, n)));

            do {
              r.push(s), 10 === ++a && (a = 1, ++n), s = a * Math.pow(10, n);
            } while (n < l || n === l && a < u);

            var d = o(t.max, s);
            return r.push(d), r;
          }
        },
        formatters: {
          values: function values(t) {
            return i.isArray(t) ? t : "" + t;
          },
          linear: function linear(t, e, n) {
            var a = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
            Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
            var r = i.log10(Math.abs(a)),
                o = "";

            if (0 !== t) {
              var s = -1 * Math.floor(r);
              s = Math.max(Math.min(s, 20), 0), o = t.toFixed(s);
            } else o = "0";

            return o;
          },
          logarithmic: function logarithmic(t, e, n) {
            var a = t / Math.pow(10, Math.floor(i.log10(t)));
            return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === e || e === n.length - 1 ? t.toExponential() : "";
          }
        }
      };
    }, {
      45: 45
    }],
    35: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          r = t(45);
      i._set("global", {
        tooltips: {
          enabled: !0,
          custom: null,
          mode: "nearest",
          position: "average",
          intersect: !0,
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          displayColors: !0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          callbacks: {
            beforeTitle: r.noop,
            title: function title(t, e) {
              var n = "",
                  i = e.labels,
                  a = i ? i.length : 0;

              if (t.length > 0) {
                var r = t[0];
                r.xLabel ? n = r.xLabel : a > 0 && r.index < a && (n = i[r.index]);
              }

              return n;
            },
            afterTitle: r.noop,
            beforeBody: r.noop,
            beforeLabel: r.noop,
            label: function label(t, e) {
              var n = e.datasets[t.datasetIndex].label || "";
              return n && (n += ": "), n += t.yLabel;
            },
            labelColor: function labelColor(t, e) {
              var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;

              return {
                borderColor: n.borderColor,
                backgroundColor: n.backgroundColor
              };
            },
            labelTextColor: function labelTextColor() {
              return this._options.bodyFontColor;
            },
            afterLabel: r.noop,
            afterBody: r.noop,
            beforeFooter: r.noop,
            footer: r.noop,
            afterFooter: r.noop
          }
        }
      }), e.exports = function (t) {
        function e(t, e) {
          var n = r.color(t);
          return n.alpha(e * n.alpha()).rgbaString();
        }

        function n(t, e) {
          return e && (r.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }

        function o(t) {
          var e = i.global,
              n = r.valueOrDefault;
          return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: n(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: n(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: n(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: n(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: n(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: n(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: n(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: n(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: n(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth
          };
        }

        t.Tooltip = a.extend({
          initialize: function initialize() {
            this._model = o(this._options), this._lastActive = [];
          },
          getTitle: function getTitle() {
            var t = this._options.callbacks,
                e = t.beforeTitle.apply(this, arguments),
                i = t.title.apply(this, arguments),
                a = t.afterTitle.apply(this, arguments),
                r = [];
            return r = n(r, e), r = n(r, i), r = n(r, a);
          },
          getBeforeBody: function getBeforeBody() {
            var t = this._options.callbacks.beforeBody.apply(this, arguments);

            return r.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getBody: function getBody(t, e) {
            var i = this,
                a = i._options.callbacks,
                o = [];
            return r.each(t, function (t) {
              var r = {
                before: [],
                lines: [],
                after: []
              };
              n(r.before, a.beforeLabel.call(i, t, e)), n(r.lines, a.label.call(i, t, e)), n(r.after, a.afterLabel.call(i, t, e)), o.push(r);
            }), o;
          },
          getAfterBody: function getAfterBody() {
            var t = this._options.callbacks.afterBody.apply(this, arguments);

            return r.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getFooter: function getFooter() {
            var t = this._options.callbacks,
                e = t.beforeFooter.apply(this, arguments),
                i = t.footer.apply(this, arguments),
                a = t.afterFooter.apply(this, arguments),
                r = [];
            return r = n(r, e), r = n(r, i), r = n(r, a);
          },
          update: function update(e) {
            var n,
                i,
                a,
                s,
                l,
                u,
                d,
                h = this,
                c = h._options,
                f = h._model,
                g = h._model = o(c),
                m = h._active,
                p = h._data,
                v = {
              xAlign: f.xAlign,
              yAlign: f.yAlign
            },
                y = {
              x: f.x,
              y: f.y
            },
                b = {
              width: f.width,
              height: f.height
            },
                x = {
              x: f.caretX,
              y: f.caretY
            };

            if (m.length) {
              g.opacity = 1;
              var _ = [],
                  k = [];
              x = t.Tooltip.positioners[c.position].call(h, m, h._eventPosition);
              var w = [];

              for (n = 0, i = m.length; n < i; ++n) {
                w.push((a = m[n], s = void 0, l = void 0, u = void 0, d = void 0, s = a._xScale, l = a._yScale || a._scale, u = a._index, d = a._datasetIndex, {
                  xLabel: s ? s.getLabelForIndex(u, d) : "",
                  yLabel: l ? l.getLabelForIndex(u, d) : "",
                  index: u,
                  datasetIndex: d,
                  x: a._model.x,
                  y: a._model.y
                }));
              }

              c.filter && (w = w.filter(function (t) {
                return c.filter(t, p);
              })), c.itemSort && (w = w.sort(function (t, e) {
                return c.itemSort(t, e, p);
              })), r.each(w, function (t) {
                _.push(c.callbacks.labelColor.call(h, t, h._chart)), k.push(c.callbacks.labelTextColor.call(h, t, h._chart));
              }), g.title = h.getTitle(w, p), g.beforeBody = h.getBeforeBody(w, p), g.body = h.getBody(w, p), g.afterBody = h.getAfterBody(w, p), g.footer = h.getFooter(w, p), g.x = Math.round(x.x), g.y = Math.round(x.y), g.caretPadding = c.caretPadding, g.labelColors = _, g.labelTextColors = k, g.dataPoints = w, b = function (t, e) {
                var n = t._chart.ctx,
                    i = 2 * e.yPadding,
                    a = 0,
                    o = e.body,
                    s = o.reduce(function (t, e) {
                  return t + e.before.length + e.lines.length + e.after.length;
                }, 0);
                s += e.beforeBody.length + e.afterBody.length;
                var l = e.title.length,
                    u = e.footer.length,
                    d = e.titleFontSize,
                    h = e.bodyFontSize,
                    c = e.footerFontSize;
                i += l * d, i += l ? (l - 1) * e.titleSpacing : 0, i += l ? e.titleMarginBottom : 0, i += s * h, i += s ? (s - 1) * e.bodySpacing : 0, i += u ? e.footerMarginTop : 0, i += u * c, i += u ? (u - 1) * e.footerSpacing : 0;

                var f = 0,
                    g = function g(t) {
                  a = Math.max(a, n.measureText(t).width + f);
                };

                return n.font = r.fontString(d, e._titleFontStyle, e._titleFontFamily), r.each(e.title, g), n.font = r.fontString(h, e._bodyFontStyle, e._bodyFontFamily), r.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? h + 2 : 0, r.each(o, function (t) {
                  r.each(t.before, g), r.each(t.lines, g), r.each(t.after, g);
                }), f = 0, n.font = r.fontString(c, e._footerFontStyle, e._footerFontFamily), r.each(e.footer, g), {
                  width: a += 2 * e.xPadding,
                  height: i
                };
              }(this, g), y = function (t, e, n) {
                var i = t.x,
                    a = t.y,
                    r = t.caretSize,
                    o = t.caretPadding,
                    s = t.cornerRadius,
                    l = n.xAlign,
                    u = n.yAlign,
                    d = r + o,
                    h = s + o;
                return "right" === l ? i -= e.width : "center" === l && (i -= e.width / 2), "top" === u ? a += d : a -= "bottom" === u ? e.height + d : e.height / 2, "center" === u ? "left" === l ? i += d : "right" === l && (i -= d) : "left" === l ? i -= h : "right" === l && (i += h), {
                  x: i,
                  y: a
                };
              }(g, b, v = function (t, e) {
                var n,
                    i,
                    a,
                    r,
                    o,
                    s = t._model,
                    l = t._chart,
                    u = t._chart.chartArea,
                    d = "center",
                    h = "center";
                s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");
                var c = (u.left + u.right) / 2,
                    f = (u.top + u.bottom) / 2;
                "center" === h ? (n = function n(t) {
                  return t <= c;
                }, i = function i(t) {
                  return t > c;
                }) : (n = function n(t) {
                  return t <= e.width / 2;
                }, i = function i(t) {
                  return t >= l.width - e.width / 2;
                }), a = function a(t) {
                  return t + e.width > l.width;
                }, r = function r(t) {
                  return t - e.width < 0;
                }, o = function o(t) {
                  return t <= f ? "top" : "bottom";
                }, n(s.x) ? (d = "left", a(s.x) && (d = "center", h = o(s.y))) : i(s.x) && (d = "right", r(s.x) && (d = "center", h = o(s.y)));
                var g = t._options;
                return {
                  xAlign: g.xAlign ? g.xAlign : d,
                  yAlign: g.yAlign ? g.yAlign : h
                };
              }(this, b));
            } else g.opacity = 0;

            return g.xAlign = v.xAlign, g.yAlign = v.yAlign, g.x = y.x, g.y = y.y, g.width = b.width, g.height = b.height, g.caretX = x.x, g.caretY = x.y, h._model = g, e && c.custom && c.custom.call(h, g), h;
          },
          drawCaret: function drawCaret(t, e) {
            var n = this._chart.ctx,
                i = this._view,
                a = this.getCaretPosition(t, e, i);
            n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3);
          },
          getCaretPosition: function getCaretPosition(t, e, n) {
            var i,
                a,
                r,
                o,
                s,
                l,
                u = n.caretSize,
                d = n.cornerRadius,
                h = n.xAlign,
                c = n.yAlign,
                f = t.x,
                g = t.y,
                m = e.width,
                p = e.height;
            if ("center" === c) s = g + p / 2, "left" === h ? (a = (i = f) - u, r = i, o = s + u, l = s - u) : (a = (i = f + m) + u, r = i, o = s - u, l = s + u);else if ("left" === h ? (i = (a = f + d + u) - u, r = a + u) : "right" === h ? (i = (a = f + m - d - u) - u, r = a + u) : (i = (a = f + m / 2) - u, r = a + u), "top" === c) s = (o = g) - u, l = o;else {
              s = (o = g + p) + u, l = o;
              var v = r;
              r = i, i = v;
            }
            return {
              x1: i,
              x2: a,
              x3: r,
              y1: o,
              y2: s,
              y3: l
            };
          },
          drawTitle: function drawTitle(t, n, i, a) {
            var o = n.title;

            if (o.length) {
              i.textAlign = n._titleAlign, i.textBaseline = "top";
              var s,
                  l,
                  u = n.titleFontSize,
                  d = n.titleSpacing;

              for (i.fillStyle = e(n.titleFontColor, a), i.font = r.fontString(u, n._titleFontStyle, n._titleFontFamily), s = 0, l = o.length; s < l; ++s) {
                i.fillText(o[s], t.x, t.y), t.y += u + d, s + 1 === o.length && (t.y += n.titleMarginBottom - d);
              }
            }
          },
          drawBody: function drawBody(t, n, i, a) {
            var o = n.bodyFontSize,
                s = n.bodySpacing,
                l = n.body;
            i.textAlign = n._bodyAlign, i.textBaseline = "top", i.font = r.fontString(o, n._bodyFontStyle, n._bodyFontFamily);

            var u = 0,
                d = function d(e) {
              i.fillText(e, t.x + u, t.y), t.y += o + s;
            };

            i.fillStyle = e(n.bodyFontColor, a), r.each(n.beforeBody, d);
            var h = n.displayColors;
            u = h ? o + 2 : 0, r.each(l, function (s, l) {
              var u = e(n.labelTextColors[l], a);
              i.fillStyle = u, r.each(s.before, d), r.each(s.lines, function (r) {
                h && (i.fillStyle = e(n.legendColorBackground, a), i.fillRect(t.x, t.y, o, o), i.lineWidth = 1, i.strokeStyle = e(n.labelColors[l].borderColor, a), i.strokeRect(t.x, t.y, o, o), i.fillStyle = e(n.labelColors[l].backgroundColor, a), i.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), i.fillStyle = u), d(r);
              }), r.each(s.after, d);
            }), u = 0, r.each(n.afterBody, d), t.y -= s;
          },
          drawFooter: function drawFooter(t, n, i, a) {
            var o = n.footer;
            o.length && (t.y += n.footerMarginTop, i.textAlign = n._footerAlign, i.textBaseline = "top", i.fillStyle = e(n.footerFontColor, a), i.font = r.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), r.each(o, function (e) {
              i.fillText(e, t.x, t.y), t.y += n.footerFontSize + n.footerSpacing;
            }));
          },
          drawBackground: function drawBackground(t, n, i, a, r) {
            i.fillStyle = e(n.backgroundColor, r), i.strokeStyle = e(n.borderColor, r), i.lineWidth = n.borderWidth;
            var o = n.xAlign,
                s = n.yAlign,
                l = t.x,
                u = t.y,
                d = a.width,
                h = a.height,
                c = n.cornerRadius;
            i.beginPath(), i.moveTo(l + c, u), "top" === s && this.drawCaret(t, a), i.lineTo(l + d - c, u), i.quadraticCurveTo(l + d, u, l + d, u + c), "center" === s && "right" === o && this.drawCaret(t, a), i.lineTo(l + d, u + h - c), i.quadraticCurveTo(l + d, u + h, l + d - c, u + h), "bottom" === s && this.drawCaret(t, a), i.lineTo(l + c, u + h), i.quadraticCurveTo(l, u + h, l, u + h - c), "center" === s && "left" === o && this.drawCaret(t, a), i.lineTo(l, u + c), i.quadraticCurveTo(l, u, l + c, u), i.closePath(), i.fill(), n.borderWidth > 0 && i.stroke();
          },
          draw: function draw() {
            var t = this._chart.ctx,
                e = this._view;

            if (0 !== e.opacity) {
              var n = {
                width: e.width,
                height: e.height
              },
                  i = {
                x: e.x,
                y: e.y
              },
                  a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                  r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
              this._options.enabled && r && (this.drawBackground(i, e, t, n, a), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, a), this.drawBody(i, e, t, a), this.drawFooter(i, e, t, a));
            }
          },
          handleEvent: function handleEvent(t) {
            var e = this,
                n = e._options,
                i = !1;
            if (e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, n.mode, n), !(i = !r.arrayEquals(e._active, e._lastActive))) return !1;

            if (e._lastActive = e._active, n.enabled || n.custom) {
              e._eventPosition = {
                x: t.x,
                y: t.y
              };
              var a = e._model;
              e.update(!0), e.pivot(), i |= a.x !== e._model.x || a.y !== e._model.y;
            }

            return i;
          }
        }), t.Tooltip.positioners = {
          average: function average(t) {
            if (!t.length) return !1;
            var e,
                n,
                i = 0,
                a = 0,
                r = 0;

            for (e = 0, n = t.length; e < n; ++e) {
              var o = t[e];

              if (o && o.hasValue()) {
                var s = o.tooltipPosition();
                i += s.x, a += s.y, ++r;
              }
            }

            return {
              x: Math.round(i / r),
              y: Math.round(a / r)
            };
          },
          nearest: function nearest(t, e) {
            var n,
                i,
                a,
                o = e.x,
                s = e.y,
                l = Number.POSITIVE_INFINITY;

            for (n = 0, i = t.length; n < i; ++n) {
              var u = t[n];

              if (u && u.hasValue()) {
                var d = u.getCenterPoint(),
                    h = r.distanceBetweenPoints(e, d);
                h < l && (l = h, a = u);
              }
            }

            if (a) {
              var c = a.tooltipPosition();
              o = c.x, s = c.y;
            }

            return {
              x: o,
              y: s
            };
          }
        };
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    36: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          r = t(45);
      i._set("global", {
        elements: {
          arc: {
            backgroundColor: i.global.defaultColor,
            borderColor: "#fff",
            borderWidth: 2
          }
        }
      }), e.exports = a.extend({
        inLabelRange: function inLabelRange(t) {
          var e = this._view;
          return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
        },
        inRange: function inRange(t, e) {
          var n = this._view;

          if (n) {
            for (var i = r.getAngleFromPoint(n, {
              x: t,
              y: e
            }), a = i.angle, o = i.distance, s = n.startAngle, l = n.endAngle; l < s;) {
              l += 2 * Math.PI;
            }

            for (; a > l;) {
              a -= 2 * Math.PI;
            }

            for (; a < s;) {
              a += 2 * Math.PI;
            }

            var u = a >= s && a <= l,
                d = o >= n.innerRadius && o <= n.outerRadius;
            return u && d;
          }

          return !1;
        },
        getCenterPoint: function getCenterPoint() {
          var t = this._view,
              e = (t.startAngle + t.endAngle) / 2,
              n = (t.innerRadius + t.outerRadius) / 2;
          return {
            x: t.x + Math.cos(e) * n,
            y: t.y + Math.sin(e) * n
          };
        },
        getArea: function getArea() {
          var t = this._view;
          return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view,
              e = t.startAngle + (t.endAngle - t.startAngle) / 2,
              n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
          return {
            x: t.x + Math.cos(e) * n,
            y: t.y + Math.sin(e) * n
          };
        },
        draw: function draw() {
          var t = this._chart.ctx,
              e = this._view,
              n = e.startAngle,
              i = e.endAngle;
          t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke();
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    37: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          r = t(45),
          o = i.global;
      i._set("global", {
        elements: {
          line: {
            tension: .4,
            backgroundColor: o.defaultColor,
            borderWidth: 3,
            borderColor: o.defaultColor,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            capBezierPoints: !0,
            fill: !0
          }
        }
      }), e.exports = a.extend({
        draw: function draw() {
          var t,
              e,
              n,
              i,
              a = this._view,
              s = this._chart.ctx,
              l = a.spanGaps,
              u = this._children.slice(),
              d = o.elements.line,
              h = -1;

          for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = a.borderCapStyle || d.borderCapStyle, s.setLineDash && s.setLineDash(a.borderDash || d.borderDash), s.lineDashOffset = a.borderDashOffset || d.borderDashOffset, s.lineJoin = a.borderJoinStyle || d.borderJoinStyle, s.lineWidth = a.borderWidth || d.borderWidth, s.strokeStyle = a.borderColor || o.defaultColor, s.beginPath(), h = -1, t = 0; t < u.length; ++t) {
            e = u[t], n = r.previousItem(u, t), i = e._view, 0 === t ? i.skip || (s.moveTo(i.x, i.y), h = t) : (n = -1 === h ? n : u[h], i.skip || (h !== t - 1 && !l || -1 === h ? s.moveTo(i.x, i.y) : r.canvas.lineTo(s, n._view, e._view), h = t));
          }

          s.stroke(), s.restore();
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    38: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          r = t(45),
          o = i.global.defaultColor;

      function s(t) {
        var e = this._view;
        return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2);
      }

      i._set("global", {
        elements: {
          point: {
            radius: 3,
            pointStyle: "circle",
            backgroundColor: o,
            borderColor: o,
            borderWidth: 1,
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1
          }
        }
      }), e.exports = a.extend({
        inRange: function inRange(t, e) {
          var n = this._view;
          return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2);
        },
        inLabelRange: s,
        inXRange: s,
        inYRange: function inYRange(t) {
          var e = this._view;
          return !!e && Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2);
        },
        getCenterPoint: function getCenterPoint() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y
          };
        },
        getArea: function getArea() {
          return Math.PI * Math.pow(this._view.radius, 2);
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y,
            padding: t.radius + t.borderWidth
          };
        },
        draw: function draw(t) {
          var e = this._view,
              n = this._model,
              a = this._chart.ctx,
              s = e.pointStyle,
              l = e.radius,
              u = e.x,
              d = e.y,
              h = r.color,
              c = 0;
          e.skip || (a.strokeStyle = e.borderColor || o, a.lineWidth = r.valueOrDefault(e.borderWidth, i.global.elements.point.borderWidth), a.fillStyle = e.backgroundColor || o, void 0 !== t && (n.x < t.left || 1.01 * t.right < n.x || n.y < t.top || 1.01 * t.bottom < n.y) && (n.x < t.left ? c = (u - n.x) / (t.left - n.x) : 1.01 * t.right < n.x ? c = (n.x - u) / (n.x - t.right) : n.y < t.top ? c = (d - n.y) / (t.top - n.y) : 1.01 * t.bottom < n.y && (c = (n.y - d) / (n.y - t.bottom)), c = Math.round(100 * c) / 100, a.strokeStyle = h(a.strokeStyle).alpha(c).rgbString(), a.fillStyle = h(a.fillStyle).alpha(c).rgbString()), r.canvas.drawPoint(a, s, l, u, d));
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    39: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26);

      function r(t) {
        return void 0 !== t._view.width;
      }

      function o(t) {
        var e,
            n,
            i,
            a,
            o = t._view;

        if (r(t)) {
          var s = o.width / 2;
          e = o.x - s, n = o.x + s, i = Math.min(o.y, o.base), a = Math.max(o.y, o.base);
        } else {
          var l = o.height / 2;
          e = Math.min(o.x, o.base), n = Math.max(o.x, o.base), i = o.y - l, a = o.y + l;
        }

        return {
          left: e,
          top: i,
          right: n,
          bottom: a
        };
      }

      i._set("global", {
        elements: {
          rectangle: {
            backgroundColor: i.global.defaultColor,
            borderColor: i.global.defaultColor,
            borderSkipped: "bottom",
            borderWidth: 0
          }
        }
      }), e.exports = a.extend({
        draw: function draw() {
          var t,
              e,
              n,
              i,
              a,
              r,
              o,
              s = this._chart.ctx,
              l = this._view,
              u = l.borderWidth;

          if (l.horizontal ? (t = l.base, e = l.x, n = l.y - l.height / 2, i = l.y + l.height / 2, a = e > t ? 1 : -1, r = 1, o = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, n = l.y, a = 1, r = (i = l.base) > n ? 1 : -1, o = l.borderSkipped || "bottom"), u) {
            var d = Math.min(Math.abs(t - e), Math.abs(n - i)),
                h = (u = u > d ? d : u) / 2,
                c = t + ("left" !== o ? h * a : 0),
                f = e + ("right" !== o ? -h * a : 0),
                g = n + ("top" !== o ? h * r : 0),
                m = i + ("bottom" !== o ? -h * r : 0);
            c !== f && (n = g, i = m), g !== m && (t = c, e = f);
          }

          s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
          var p = [[t, i], [t, n], [e, n], [e, i]],
              v = ["bottom", "left", "top", "right"].indexOf(o, 0);

          function y(t) {
            return p[(v + t) % 4];
          }

          -1 === v && (v = 0);
          var b = y(0);
          s.moveTo(b[0], b[1]);

          for (var x = 1; x < 4; x++) {
            b = y(x), s.lineTo(b[0], b[1]);
          }

          s.fill(), u && s.stroke();
        },
        height: function height() {
          var t = this._view;
          return t.base - t.y;
        },
        inRange: function inRange(t, e) {
          var n = !1;

          if (this._view) {
            var i = o(this);
            n = t >= i.left && t <= i.right && e >= i.top && e <= i.bottom;
          }

          return n;
        },
        inLabelRange: function inLabelRange(t, e) {
          if (!this._view) return !1;
          var n = o(this);
          return r(this) ? t >= n.left && t <= n.right : e >= n.top && e <= n.bottom;
        },
        inXRange: function inXRange(t) {
          var e = o(this);
          return t >= e.left && t <= e.right;
        },
        inYRange: function inYRange(t) {
          var e = o(this);
          return t >= e.top && t <= e.bottom;
        },
        getCenterPoint: function getCenterPoint() {
          var t,
              e,
              n = this._view;
          return r(this) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
            x: t,
            y: e
          };
        },
        getArea: function getArea() {
          var t = this._view;
          return t.width * Math.abs(t.y - t.base);
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y
          };
        }
      });
    }, {
      25: 25,
      26: 26
    }],
    40: [function (t, e, n) {
      "use strict";

      e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39);
    }, {
      36: 36,
      37: 37,
      38: 38,
      39: 39
    }],
    41: [function (t, e, n) {
      "use strict";

      var i = t(42);
      n = e.exports = {
        clear: function clear(t) {
          t.ctx.clearRect(0, 0, t.width, t.height);
        },
        roundedRect: function roundedRect(t, e, n, i, a, r) {
          if (r) {
            var o = Math.min(r, i / 2),
                s = Math.min(r, a / 2);
            t.moveTo(e + o, n), t.lineTo(e + i - o, n), t.quadraticCurveTo(e + i, n, e + i, n + s), t.lineTo(e + i, n + a - s), t.quadraticCurveTo(e + i, n + a, e + i - o, n + a), t.lineTo(e + o, n + a), t.quadraticCurveTo(e, n + a, e, n + a - s), t.lineTo(e, n + s), t.quadraticCurveTo(e, n, e + o, n);
          } else t.rect(e, n, i, a);
        },
        drawPoint: function drawPoint(t, e, n, i, a) {
          var r, o, s, l, u, d;

          if (!e || "object" != _typeof(e) || "[object HTMLImageElement]" !== (r = e.toString()) && "[object HTMLCanvasElement]" !== r) {
            if (!(isNaN(n) || n <= 0)) {
              switch (e) {
                default:
                  t.beginPath(), t.arc(i, a, n, 0, 2 * Math.PI), t.closePath(), t.fill();
                  break;

                case "triangle":
                  t.beginPath(), u = (o = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(i - o / 2, a + u / 3), t.lineTo(i + o / 2, a + u / 3), t.lineTo(i, a - 2 * u / 3), t.closePath(), t.fill();
                  break;

                case "rect":
                  d = 1 / Math.SQRT2 * n, t.beginPath(), t.fillRect(i - d, a - d, 2 * d, 2 * d), t.strokeRect(i - d, a - d, 2 * d, 2 * d);
                  break;

                case "rectRounded":
                  var h = n / Math.SQRT2,
                      c = i - h,
                      f = a - h,
                      g = Math.SQRT2 * n;
                  t.beginPath(), this.roundedRect(t, c, f, g, g, n / 2), t.closePath(), t.fill();
                  break;

                case "rectRot":
                  d = 1 / Math.SQRT2 * n, t.beginPath(), t.moveTo(i - d, a), t.lineTo(i, a + d), t.lineTo(i + d, a), t.lineTo(i, a - d), t.closePath(), t.fill();
                  break;

                case "cross":
                  t.beginPath(), t.moveTo(i, a + n), t.lineTo(i, a - n), t.moveTo(i - n, a), t.lineTo(i + n, a), t.closePath();
                  break;

                case "crossRot":
                  t.beginPath(), s = Math.cos(Math.PI / 4) * n, l = Math.sin(Math.PI / 4) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i - s, a + l), t.lineTo(i + s, a - l), t.closePath();
                  break;

                case "star":
                  t.beginPath(), t.moveTo(i, a + n), t.lineTo(i, a - n), t.moveTo(i - n, a), t.lineTo(i + n, a), s = Math.cos(Math.PI / 4) * n, l = Math.sin(Math.PI / 4) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i - s, a + l), t.lineTo(i + s, a - l), t.closePath();
                  break;

                case "line":
                  t.beginPath(), t.moveTo(i - n, a), t.lineTo(i + n, a), t.closePath();
                  break;

                case "dash":
                  t.beginPath(), t.moveTo(i, a), t.lineTo(i + n, a), t.closePath();
              }

              t.stroke();
            }
          } else t.drawImage(e, i - e.width / 2, a - e.height / 2, e.width, e.height);
        },
        clipArea: function clipArea(t, e) {
          t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
        },
        unclipArea: function unclipArea(t) {
          t.restore();
        },
        lineTo: function lineTo(t, e, n, i) {
          if (n.steppedLine) return "after" === n.steppedLine && !i || "after" !== n.steppedLine && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y), void t.lineTo(n.x, n.y);
          n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y);
        }
      };
      i.clear = n.clear, i.drawRoundedRectangle = function (t) {
        t.beginPath(), n.roundedRect.apply(n, arguments), t.closePath();
      };
    }, {
      42: 42
    }],
    42: [function (t, e, n) {
      "use strict";

      var i,
          a = {
        noop: function noop() {},
        uid: (i = 0, function () {
          return i++;
        }),
        isNullOrUndef: function isNullOrUndef(t) {
          return null == t;
        },
        isArray: Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        },
        isObject: function isObject(t) {
          return null !== t && "[object Object]" === Object.prototype.toString.call(t);
        },
        valueOrDefault: function valueOrDefault(t, e) {
          return void 0 === t ? e : t;
        },
        valueAtIndexOrDefault: function valueAtIndexOrDefault(t, e, n) {
          return a.valueOrDefault(a.isArray(t) ? t[e] : t, n);
        },
        callback: function callback(t, e, n) {
          if (t && "function" == typeof t.call) return t.apply(n, e);
        },
        each: function each(t, e, n, i) {
          var r, o, s;
          if (a.isArray(t)) {
            if (o = t.length, i) for (r = o - 1; r >= 0; r--) {
              e.call(n, t[r], r);
            } else for (r = 0; r < o; r++) {
              e.call(n, t[r], r);
            }
          } else if (a.isObject(t)) for (o = (s = Object.keys(t)).length, r = 0; r < o; r++) {
            e.call(n, t[s[r]], s[r]);
          }
        },
        arrayEquals: function arrayEquals(t, e) {
          var n, i, r, o;
          if (!t || !e || t.length !== e.length) return !1;

          for (n = 0, i = t.length; n < i; ++n) {
            if (r = t[n], o = e[n], r instanceof Array && o instanceof Array) {
              if (!a.arrayEquals(r, o)) return !1;
            } else if (r !== o) return !1;
          }

          return !0;
        },
        clone: function clone(t) {
          if (a.isArray(t)) return t.map(a.clone);

          if (a.isObject(t)) {
            for (var e = {}, n = Object.keys(t), i = n.length, r = 0; r < i; ++r) {
              e[n[r]] = a.clone(t[n[r]]);
            }

            return e;
          }

          return t;
        },
        _merger: function _merger(t, e, n, i) {
          var r = e[t],
              o = n[t];
          a.isObject(r) && a.isObject(o) ? a.merge(r, o, i) : e[t] = a.clone(o);
        },
        _mergerIf: function _mergerIf(t, e, n) {
          var i = e[t],
              r = n[t];
          a.isObject(i) && a.isObject(r) ? a.mergeIf(i, r) : e.hasOwnProperty(t) || (e[t] = a.clone(r));
        },
        merge: function merge(t, e, n) {
          var i,
              r,
              o,
              s,
              l,
              u = a.isArray(e) ? e : [e],
              d = u.length;
          if (!a.isObject(t)) return t;

          for (i = (n = n || {}).merger || a._merger, r = 0; r < d; ++r) {
            if (e = u[r], a.isObject(e)) for (l = 0, s = (o = Object.keys(e)).length; l < s; ++l) {
              i(o[l], t, e, n);
            }
          }

          return t;
        },
        mergeIf: function mergeIf(t, e) {
          return a.merge(t, e, {
            merger: a._mergerIf
          });
        },
        extend: function extend(t) {
          for (var e = function e(_e2, n) {
            t[n] = _e2;
          }, n = 1, i = arguments.length; n < i; ++n) {
            a.each(arguments[n], e);
          }

          return t;
        },
        inherits: function inherits(t) {
          var e = this,
              n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return e.apply(this, arguments);
          },
              i = function i() {
            this.constructor = n;
          };

          return i.prototype = e.prototype, n.prototype = new i(), n.extend = a.inherits, t && a.extend(n.prototype, t), n.__super__ = e.prototype, n;
        }
      };
      e.exports = a, a.callCallback = a.callback, a.indexOf = function (t, e, n) {
        return Array.prototype.indexOf.call(t, e, n);
      }, a.getValueOrDefault = a.valueOrDefault, a.getValueAtIndexOrDefault = a.valueAtIndexOrDefault;
    }, {}],
    43: [function (t, e, n) {
      "use strict";

      var i = t(42),
          a = {
        linear: function linear(t) {
          return t;
        },
        easeInQuad: function easeInQuad(t) {
          return t * t;
        },
        easeOutQuad: function easeOutQuad(t) {
          return -t * (t - 2);
        },
        easeInOutQuad: function easeInOutQuad(t) {
          return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        },
        easeInCubic: function easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic: function easeOutCubic(t) {
          return (t -= 1) * t * t + 1;
        },
        easeInOutCubic: function easeInOutCubic(t) {
          return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        },
        easeInQuart: function easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart: function easeOutQuart(t) {
          return -((t -= 1) * t * t * t - 1);
        },
        easeInOutQuart: function easeInOutQuart(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
        },
        easeInQuint: function easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint: function easeOutQuint(t) {
          return (t -= 1) * t * t * t * t + 1;
        },
        easeInOutQuint: function easeInOutQuint(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        },
        easeInSine: function easeInSine(t) {
          return 1 - Math.cos(t * (Math.PI / 2));
        },
        easeOutSine: function easeOutSine(t) {
          return Math.sin(t * (Math.PI / 2));
        },
        easeInOutSine: function easeInOutSine(t) {
          return -.5 * (Math.cos(Math.PI * t) - 1);
        },
        easeInExpo: function easeInExpo(t) {
          return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
        },
        easeOutExpo: function easeOutExpo(t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        easeInOutExpo: function easeInOutExpo(t) {
          return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
        },
        easeInCirc: function easeInCirc(t) {
          return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
        },
        easeOutCirc: function easeOutCirc(t) {
          return Math.sqrt(1 - (t -= 1) * t);
        },
        easeInOutCirc: function easeInOutCirc(t) {
          return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        easeInElastic: function easeInElastic(t) {
          var e = 1.70158,
              n = 0,
              i = 1;
          return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n));
        },
        easeOutElastic: function easeOutElastic(t) {
          var e = 1.70158,
              n = 0,
              i = 1;
          return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1);
        },
        easeInOutElastic: function easeInOutElastic(t) {
          var e = 1.70158,
              n = 0,
              i = 1;
          return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1);
        },
        easeInBack: function easeInBack(t) {
          var e = 1.70158;
          return t * t * ((e + 1) * t - e);
        },
        easeOutBack: function easeOutBack(t) {
          var e = 1.70158;
          return (t -= 1) * t * ((e + 1) * t + e) + 1;
        },
        easeInOutBack: function easeInOutBack(t) {
          var e = 1.70158;
          return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
        },
        easeInBounce: function easeInBounce(t) {
          return 1 - a.easeOutBounce(1 - t);
        },
        easeOutBounce: function easeOutBounce(t) {
          return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        },
        easeInOutBounce: function easeInOutBounce(t) {
          return t < .5 ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5;
        }
      };
      e.exports = {
        effects: a
      }, i.easingEffects = a;
    }, {
      42: 42
    }],
    44: [function (t, e, n) {
      "use strict";

      var i = t(42);
      e.exports = {
        toLineHeight: function toLineHeight(t, e) {
          var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
          if (!n || "normal" === n[1]) return 1.2 * e;

          switch (t = +n[2], n[3]) {
            case "px":
              return t;

            case "%":
              t /= 100;
          }

          return e * t;
        },
        toPadding: function toPadding(t) {
          var e, n, a, r;
          return i.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, a = +t.bottom || 0, r = +t.left || 0) : e = n = a = r = +t || 0, {
            top: e,
            right: n,
            bottom: a,
            left: r,
            height: e + a,
            width: r + n
          };
        },
        resolve: function resolve(t, e, n) {
          var a, r, o;

          for (a = 0, r = t.length; a < r; ++a) {
            if (void 0 !== (o = t[a]) && (void 0 !== e && "function" == typeof o && (o = o(e)), void 0 !== n && i.isArray(o) && (o = o[n]), void 0 !== o)) return o;
          }
        }
      };
    }, {
      42: 42
    }],
    45: [function (t, e, n) {
      "use strict";

      e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44);
    }, {
      41: 41,
      42: 42,
      43: 43,
      44: 44
    }],
    46: [function (t, e, n) {
      e.exports = {
        acquireContext: function acquireContext(t) {
          return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null;
        }
      };
    }, {}],
    47: [function (t, e, n) {
      "use strict";

      var i = t(45),
          a = "$chartjs",
          r = "chartjs-",
          o = r + "render-monitor",
          s = r + "render-animation",
          l = ["animationstart", "webkitAnimationStart"],
          u = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
      };

      function d(t, e) {
        var n = i.getStyle(t, e),
            a = n && n.match(/^(\d+)(\.\d+)?px$/);
        return a ? Number(a[1]) : void 0;
      }

      var h = !!function () {
        var t = !1;

        try {
          var e = Object.defineProperty({}, "passive", {
            get: function get() {
              t = !0;
            }
          });
          window.addEventListener("e", null, e);
        } catch (t) {}

        return t;
      }() && {
        passive: !0
      };

      function c(t, e, n) {
        t.addEventListener(e, n, h);
      }

      function f(t, e, n) {
        t.removeEventListener(e, n, h);
      }

      function g(t, e, n, i, a) {
        return {
          type: t,
          chart: e,
          "native": a || null,
          x: void 0 !== n ? n : null,
          y: void 0 !== i ? i : null
        };
      }

      function m(t, e, n) {
        var u,
            d,
            h,
            f,
            m = t[a] || (t[a] = {}),
            p = m.resizer = function (t) {
          var e = document.createElement("div"),
              n = r + "size-monitor",
              i = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
          e.style.cssText = i, e.className = n, e.innerHTML = '<div class="' + n + '-expand" style="' + i + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + i + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
          var a = e.childNodes[0],
              o = e.childNodes[1];

          e._reset = function () {
            a.scrollLeft = 1e6, a.scrollTop = 1e6, o.scrollLeft = 1e6, o.scrollTop = 1e6;
          };

          var s = function s() {
            e._reset(), t();
          };

          return c(a, "scroll", s.bind(a, "expand")), c(o, "scroll", s.bind(o, "shrink")), e;
        }((u = function u() {
          if (m.resizer) return e(g("resize", n));
        }, h = !1, f = [], function () {
          f = Array.prototype.slice.call(arguments), d = d || this, h || (h = !0, i.requestAnimFrame.call(window, function () {
            h = !1, u.apply(d, f);
          }));
        }));

        !function (t, e) {
          var n = t[a] || (t[a] = {}),
              r = n.renderProxy = function (t) {
            t.animationName === s && e();
          };

          i.each(l, function (e) {
            c(t, e, r);
          }), n.reflow = !!t.offsetParent, t.classList.add(o);
        }(t, function () {
          if (m.resizer) {
            var e = t.parentNode;
            e && e !== p.parentNode && e.insertBefore(p, e.firstChild), p._reset();
          }
        });
      }

      function p(t) {
        var e = t[a] || {},
            n = e.resizer;
        delete e.resizer, function (t) {
          var e = t[a] || {},
              n = e.renderProxy;
          n && (i.each(l, function (e) {
            f(t, e, n);
          }), delete e.renderProxy), t.classList.remove(o);
        }(t), n && n.parentNode && n.parentNode.removeChild(n);
      }

      e.exports = {
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        initialize: function initialize() {
          var t,
              e,
              n,
              i = "from{opacity:0.99}to{opacity:1}";
          e = "@-webkit-keyframes " + s + "{" + i + "}@keyframes " + s + "{" + i + "}." + o + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", n = (t = this)._style || document.createElement("style"), t._style || (t._style = n, e = "/* Chart.js */\n" + e, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(e));
        },
        acquireContext: function acquireContext(t, e) {
          "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
          var n = t && t.getContext && t.getContext("2d");
          return n && n.canvas === t ? (function (t, e) {
            var n = t.style,
                i = t.getAttribute("height"),
                r = t.getAttribute("width");

            if (t[a] = {
              initial: {
                height: i,
                width: r,
                style: {
                  display: n.display,
                  height: n.height,
                  width: n.width
                }
              }
            }, n.display = n.display || "block", null === r || "" === r) {
              var o = d(t, "width");
              void 0 !== o && (t.width = o);
            }

            if (null === i || "" === i) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);else {
              var s = d(t, "height");
              void 0 !== o && (t.height = s);
            }
          }(t, e), n) : null;
        },
        releaseContext: function releaseContext(t) {
          var e = t.canvas;

          if (e[a]) {
            var n = e[a].initial;
            ["height", "width"].forEach(function (t) {
              var a = n[t];
              i.isNullOrUndef(a) ? e.removeAttribute(t) : e.setAttribute(t, a);
            }), i.each(n.style || {}, function (t, n) {
              e.style[n] = t;
            }), e.width = e.width, delete e[a];
          }
        },
        addEventListener: function addEventListener(t, e, n) {
          var r = t.canvas;

          if ("resize" !== e) {
            var o = n[a] || (n[a] = {});
            c(r, e, (o.proxies || (o.proxies = {}))[t.id + "_" + e] = function (e) {
              n(function (t, e) {
                var n = u[t.type] || t.type,
                    a = i.getRelativePosition(t, e);
                return g(n, e, a.x, a.y, t);
              }(e, t));
            });
          } else m(r, n, t);
        },
        removeEventListener: function removeEventListener(t, e, n) {
          var i = t.canvas;

          if ("resize" !== e) {
            var r = ((n[a] || {}).proxies || {})[t.id + "_" + e];
            r && f(i, e, r);
          } else p(i);
        }
      }, i.addEvent = c, i.removeEvent = f;
    }, {
      45: 45
    }],
    48: [function (t, e, n) {
      "use strict";

      var i = t(45),
          a = t(46),
          r = t(47),
          o = r._enabled ? r : a;
      e.exports = i.extend({
        initialize: function initialize() {},
        acquireContext: function acquireContext() {},
        releaseContext: function releaseContext() {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {}
      }, o);
    }, {
      45: 45,
      46: 46,
      47: 47
    }],
    49: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(40),
          r = t(45);
      i._set("global", {
        plugins: {
          filler: {
            propagate: !0
          }
        }
      }), e.exports = function () {
        var t = {
          dataset: function dataset(t) {
            var e = t.fill,
                n = t.chart,
                i = n.getDatasetMeta(e),
                a = i && n.isDatasetVisible(e) && i.dataset._children || [],
                r = a.length || 0;
            return r ? function (t, e) {
              return e < r && a[e]._view || null;
            } : null;
          },
          boundary: function boundary(t) {
            var e = t.boundary,
                n = e ? e.x : null,
                i = e ? e.y : null;
            return function (t) {
              return {
                x: null === n ? t.x : n,
                y: null === i ? t.y : i
              };
            };
          }
        };

        function e(t, e, n) {
          var i,
              a = t._model || {},
              r = a.fill;
          if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1;
          if (!0 === r) return "origin";
          if (i = parseFloat(r, 10), isFinite(i) && Math.floor(i) === i) return "-" !== r[0] && "+" !== r[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;

          switch (r) {
            case "bottom":
              return "start";

            case "top":
              return "end";

            case "zero":
              return "origin";

            case "origin":
            case "start":
            case "end":
              return r;

            default:
              return !1;
          }
        }

        function n(t) {
          var e,
              n = t.el._model || {},
              i = t.el._scale || {},
              a = t.fill,
              r = null;
          if (isFinite(a)) return null;

          if ("start" === a ? r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === a ? r = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : i.getBasePosition ? r = i.getBasePosition() : i.getBasePixel && (r = i.getBasePixel()), null != r) {
            if (void 0 !== r.x && void 0 !== r.y) return r;
            if ("number" == typeof r && isFinite(r)) return {
              x: (e = i.isHorizontal()) ? r : null,
              y: e ? null : r
            };
          }

          return null;
        }

        function o(t, e, n) {
          var i,
              a = t[e].fill,
              r = [e];
          if (!n) return a;

          for (; !1 !== a && -1 === r.indexOf(a);) {
            if (!isFinite(a)) return a;
            if (!(i = t[a])) return !1;
            if (i.visible) return a;
            r.push(a), a = i.fill;
          }

          return !1;
        }

        function s(e) {
          var n = e.fill,
              i = "dataset";
          return !1 === n ? null : (isFinite(n) || (i = "boundary"), t[i](e));
        }

        function l(t) {
          return t && !t.skip;
        }

        function u(t, e, n, i, a) {
          var o;

          if (i && a) {
            for (t.moveTo(e[0].x, e[0].y), o = 1; o < i; ++o) {
              r.canvas.lineTo(t, e[o - 1], e[o]);
            }

            for (t.lineTo(n[a - 1].x, n[a - 1].y), o = a - 1; o > 0; --o) {
              r.canvas.lineTo(t, n[o], n[o - 1], !0);
            }
          }
        }

        return {
          id: "filler",
          afterDatasetsUpdate: function afterDatasetsUpdate(t, i) {
            var r,
                l,
                u,
                d,
                h = (t.data.datasets || []).length,
                c = i.propagate,
                f = [];

            for (l = 0; l < h; ++l) {
              d = null, (u = (r = t.getDatasetMeta(l)).dataset) && u._model && u instanceof a.Line && (d = {
                visible: t.isDatasetVisible(l),
                fill: e(u, l, h),
                chart: t,
                el: u
              }), r.$filler = d, f.push(d);
            }

            for (l = 0; l < h; ++l) {
              (d = f[l]) && (d.fill = o(f, l, c), d.boundary = n(d), d.mapper = s(d));
            }
          },
          beforeDatasetDraw: function beforeDatasetDraw(t, e) {
            var n = e.meta.$filler;

            if (n) {
              var a = t.ctx,
                  o = n.el,
                  s = o._view,
                  d = o._children || [],
                  h = n.mapper,
                  c = s.backgroundColor || i.global.defaultColor;
              h && c && d.length && (r.canvas.clipArea(a, t.chartArea), function (t, e, n, i, a, r) {
                var o,
                    s,
                    d,
                    h,
                    c,
                    f,
                    g,
                    m = e.length,
                    p = i.spanGaps,
                    v = [],
                    y = [],
                    b = 0,
                    x = 0;

                for (t.beginPath(), o = 0, s = m + !!r; o < s; ++o) {
                  c = n(h = e[d = o % m]._view, d, i), f = l(h), g = l(c), f && g ? (b = v.push(h), x = y.push(c)) : b && x && (p ? (f && v.push(h), g && y.push(c)) : (u(t, v, y, b, x), b = x = 0, v = [], y = []));
                }

                u(t, v, y, b, x), t.closePath(), t.fillStyle = a, t.fill();
              }(a, d, h, s, c, o._loop), r.canvas.unclipArea(a));
            }
          }
        };
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    50: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          r = t(45);
      i._set("global", {
        legend: {
          display: !0,
          position: "top",
          fullWidth: !0,
          reverse: !1,
          weight: 1e3,
          onClick: function onClick(t, e) {
            var n = e.datasetIndex,
                i = this.chart,
                a = i.getDatasetMeta(n);
            a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null, i.update();
          },
          onHover: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return r.isArray(e.datasets) ? e.datasets.map(function (e, n) {
                return {
                  text: e.label,
                  fillStyle: r.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                  hidden: !t.isDatasetVisible(n),
                  lineCap: e.borderCapStyle,
                  lineDash: e.borderDash,
                  lineDashOffset: e.borderDashOffset,
                  lineJoin: e.borderJoinStyle,
                  lineWidth: e.borderWidth,
                  strokeStyle: e.borderColor,
                  pointStyle: e.pointStyle,
                  datasetIndex: n
                };
              }, this) : [];
            }
          }
        },
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');

          for (var n = 0; n < t.data.datasets.length; n++) {
            e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
          }

          return e.push("</ul>"), e.join("");
        }
      }), e.exports = function (t) {
        var e = t.layoutService,
            n = r.noop;

        function o(t, e) {
          return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
        }

        function s(n, i) {
          var a = new t.Legend({
            ctx: n.ctx,
            options: i,
            chart: n
          });
          e.configure(n, a, i), e.addBox(n, a), n.legend = a;
        }

        return t.Legend = a.extend({
          initialize: function initialize(t) {
            r.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1;
          },
          beforeUpdate: n,
          update: function update(t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
          },
          afterUpdate: n,
          beforeSetDimensions: n,
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
              width: 0,
              height: 0
            };
          },
          afterSetDimensions: n,
          beforeBuildLabels: n,
          buildLabels: function buildLabels() {
            var t = this,
                e = t.options.labels || {},
                n = r.callback(e.generateLabels, [t.chart], t) || [];
            e.filter && (n = n.filter(function (n) {
              return e.filter(n, t.chart.data);
            })), t.options.reverse && n.reverse(), t.legendItems = n;
          },
          afterBuildLabels: n,
          beforeFit: n,
          fit: function fit() {
            var t = this,
                e = t.options,
                n = e.labels,
                a = e.display,
                s = t.ctx,
                l = i.global,
                u = r.valueOrDefault,
                d = u(n.fontSize, l.defaultFontSize),
                h = u(n.fontStyle, l.defaultFontStyle),
                c = u(n.fontFamily, l.defaultFontFamily),
                f = r.fontString(d, h, c),
                g = t.legendHitBoxes = [],
                m = t.minSize,
                p = t.isHorizontal();
            if (p ? (m.width = t.maxWidth, m.height = a ? 10 : 0) : (m.width = a ? 10 : 0, m.height = t.maxHeight), a) if (s.font = f, p) {
              var v = t.lineWidths = [0],
                  y = t.legendItems.length ? d + n.padding : 0;
              s.textAlign = "left", s.textBaseline = "top", r.each(t.legendItems, function (e, i) {
                var a = o(n, d) + d / 2 + s.measureText(e.text).width;
                v[v.length - 1] + a + n.padding >= t.width && (y += d + n.padding, v[v.length] = t.left), g[i] = {
                  left: 0,
                  top: 0,
                  width: a,
                  height: d
                }, v[v.length - 1] += a + n.padding;
              }), m.height += y;
            } else {
              var b = n.padding,
                  x = t.columnWidths = [],
                  _ = n.padding,
                  k = 0,
                  w = 0,
                  M = d + b;
              r.each(t.legendItems, function (t, e) {
                var i = o(n, d) + d / 2 + s.measureText(t.text).width;
                w + M > m.height && (_ += k + n.padding, x.push(k), k = 0, w = 0), k = Math.max(k, i), w += M, g[e] = {
                  left: 0,
                  top: 0,
                  width: i,
                  height: d
                };
              }), _ += k, x.push(k), m.width += _;
            }
            t.width = m.width, t.height = m.height;
          },
          afterFit: n,
          isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          },
          draw: function draw() {
            var t = this,
                e = t.options,
                n = e.labels,
                a = i.global,
                s = a.elements.line,
                l = t.width,
                u = t.lineWidths;

            if (e.display) {
              var d,
                  h = t.ctx,
                  c = r.valueOrDefault,
                  f = c(n.fontColor, a.defaultFontColor),
                  g = c(n.fontSize, a.defaultFontSize),
                  m = c(n.fontStyle, a.defaultFontStyle),
                  p = c(n.fontFamily, a.defaultFontFamily),
                  v = r.fontString(g, m, p);
              h.textAlign = "left", h.textBaseline = "middle", h.lineWidth = .5, h.strokeStyle = f, h.fillStyle = f, h.font = v;
              var y = o(n, g),
                  b = t.legendHitBoxes,
                  x = t.isHorizontal();
              d = x ? {
                x: t.left + (l - u[0]) / 2,
                y: t.top + n.padding,
                line: 0
              } : {
                x: t.left + n.padding,
                y: t.top + n.padding,
                line: 0
              };

              var _ = g + n.padding;

              r.each(t.legendItems, function (i, o) {
                var f = h.measureText(i.text).width,
                    m = y + g / 2 + f,
                    p = d.x,
                    v = d.y;
                x ? p + m >= l && (v = d.y += _, d.line++, p = d.x = t.left + (l - u[d.line]) / 2) : v + _ > t.bottom && (p = d.x = p + t.columnWidths[d.line] + n.padding, v = d.y = t.top + n.padding, d.line++), function (t, n, i) {
                  if (!(isNaN(y) || y <= 0)) {
                    h.save(), h.fillStyle = c(i.fillStyle, a.defaultColor), h.lineCap = c(i.lineCap, s.borderCapStyle), h.lineDashOffset = c(i.lineDashOffset, s.borderDashOffset), h.lineJoin = c(i.lineJoin, s.borderJoinStyle), h.lineWidth = c(i.lineWidth, s.borderWidth), h.strokeStyle = c(i.strokeStyle, a.defaultColor);
                    var o = 0 === c(i.lineWidth, s.borderWidth);

                    if (h.setLineDash && h.setLineDash(c(i.lineDash, s.borderDash)), e.labels && e.labels.usePointStyle) {
                      var l = g * Math.SQRT2 / 2,
                          u = l / Math.SQRT2,
                          d = t + u,
                          f = n + u;
                      r.canvas.drawPoint(h, i.pointStyle, l, d, f);
                    } else o || h.strokeRect(t, n, y, g), h.fillRect(t, n, y, g);

                    h.restore();
                  }
                }(p, v, i), b[o].left = p, b[o].top = v, function (t, e, n, i) {
                  var a = g / 2,
                      r = y + a + t,
                      o = e + a;
                  h.fillText(n.text, r, o), n.hidden && (h.beginPath(), h.lineWidth = 2, h.moveTo(r, o), h.lineTo(r + i, o), h.stroke());
                }(p, v, i, f), x ? d.x += m + n.padding : d.y += _;
              });
            }
          },
          handleEvent: function handleEvent(t) {
            var e = this,
                n = e.options,
                i = "mouseup" === t.type ? "click" : t.type,
                a = !1;

            if ("mousemove" === i) {
              if (!n.onHover) return;
            } else {
              if ("click" !== i) return;
              if (!n.onClick) return;
            }

            var r = t.x,
                o = t.y;
            if (r >= e.left && r <= e.right && o >= e.top && o <= e.bottom) for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
              var u = s[l];

              if (r >= u.left && r <= u.left + u.width && o >= u.top && o <= u.top + u.height) {
                if ("click" === i) {
                  n.onClick.call(e, t["native"], e.legendItems[l]), a = !0;
                  break;
                }

                if ("mousemove" === i) {
                  n.onHover.call(e, t["native"], e.legendItems[l]), a = !0;
                  break;
                }
              }
            }
            return a;
          }
        }), {
          id: "legend",
          beforeInit: function beforeInit(t) {
            var e = t.options.legend;
            e && s(t, e);
          },
          beforeUpdate: function beforeUpdate(t) {
            var n = t.options.legend,
                a = t.legend;
            n ? (r.mergeIf(n, i.global.legend), a ? (e.configure(t, a, n), a.options = n) : s(t, n)) : a && (e.removeBox(t, a), delete t.legend);
          },
          afterEvent: function afterEvent(t, e) {
            var n = t.legend;
            n && n.handleEvent(e);
          }
        };
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    51: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          r = t(45);
      i._set("global", {
        title: {
          display: !1,
          fontStyle: "bold",
          fullWidth: !0,
          lineHeight: 1.2,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3
        }
      }), e.exports = function (t) {
        var e = t.layoutService,
            n = r.noop;

        function o(n, i) {
          var a = new t.Title({
            ctx: n.ctx,
            options: i,
            chart: n
          });
          e.configure(n, a, i), e.addBox(n, a), n.titleBlock = a;
        }

        return t.Title = a.extend({
          initialize: function initialize(t) {
            r.extend(this, t), this.legendHitBoxes = [];
          },
          beforeUpdate: n,
          update: function update(t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
          },
          afterUpdate: n,
          beforeSetDimensions: n,
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
              width: 0,
              height: 0
            };
          },
          afterSetDimensions: n,
          beforeBuildLabels: n,
          buildLabels: n,
          afterBuildLabels: n,
          beforeFit: n,
          fit: function fit() {
            var t = this,
                e = r.valueOrDefault,
                n = t.options,
                a = n.display,
                o = e(n.fontSize, i.global.defaultFontSize),
                s = t.minSize,
                l = r.isArray(n.text) ? n.text.length : 1,
                u = r.options.toLineHeight(n.lineHeight, o),
                d = a ? l * u + 2 * n.padding : 0;
            t.isHorizontal() ? (s.width = t.maxWidth, s.height = d) : (s.width = d, s.height = t.maxHeight), t.width = s.width, t.height = s.height;
          },
          afterFit: n,
          isHorizontal: function isHorizontal() {
            var t = this.options.position;
            return "top" === t || "bottom" === t;
          },
          draw: function draw() {
            var t = this,
                e = t.ctx,
                n = r.valueOrDefault,
                a = t.options,
                o = i.global;

            if (a.display) {
              var s,
                  l,
                  u,
                  d = n(a.fontSize, o.defaultFontSize),
                  h = n(a.fontStyle, o.defaultFontStyle),
                  c = n(a.fontFamily, o.defaultFontFamily),
                  f = r.fontString(d, h, c),
                  g = r.options.toLineHeight(a.lineHeight, d),
                  m = g / 2 + a.padding,
                  p = 0,
                  v = t.top,
                  y = t.left,
                  b = t.bottom,
                  x = t.right;
              e.fillStyle = n(a.fontColor, o.defaultFontColor), e.font = f, t.isHorizontal() ? (l = y + (x - y) / 2, u = v + m, s = x - y) : (l = "left" === a.position ? y + m : x - m, u = v + (b - v) / 2, s = b - v, p = Math.PI * ("left" === a.position ? -.5 : .5)), e.save(), e.translate(l, u), e.rotate(p), e.textAlign = "center", e.textBaseline = "middle";
              var _ = a.text;
              if (r.isArray(_)) for (var k = 0, w = 0; w < _.length; ++w) {
                e.fillText(_[w], 0, k, s), k += g;
              } else e.fillText(_, 0, 0, s);
              e.restore();
            }
          }
        }), {
          id: "title",
          beforeInit: function beforeInit(t) {
            var e = t.options.title;
            e && o(t, e);
          },
          beforeUpdate: function beforeUpdate(n) {
            var a = n.options.title,
                s = n.titleBlock;
            a ? (r.mergeIf(a, i.global.title), s ? (e.configure(n, s, a), s.options = a) : o(n, a)) : s && (t.layoutService.removeBox(n, s), delete n.titleBlock);
          }
        };
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    52: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.Scale.extend({
          getLabels: function getLabels() {
            var t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
          },
          determineDataLimits: function determineDataLimits() {
            var t,
                e = this,
                n = e.getLabels();
            e.minIndex = 0, e.maxIndex = n.length - 1, void 0 !== e.options.ticks.min && (t = n.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = n.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = n[e.minIndex], e.max = n[e.maxIndex];
          },
          buildTicks: function buildTicks() {
            var t = this,
                e = t.getLabels();
            t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var n = this,
                i = n.chart.data,
                a = n.isHorizontal();
            return i.yLabels && !a ? n.getRightValue(i.datasets[e].data[t]) : n.ticks[t - n.minIndex];
          },
          getPixelForValue: function getPixelForValue(t, e) {
            var n,
                i = this,
                a = i.options.offset,
                r = Math.max(i.maxIndex + 1 - i.minIndex - (a ? 0 : 1), 1);

            if (null != t && (n = i.isHorizontal() ? t.x : t.y), void 0 !== n || void 0 !== t && isNaN(e)) {
              t = n || t;
              var o = i.getLabels().indexOf(t);
              e = -1 !== o ? o : e;
            }

            if (i.isHorizontal()) {
              var s = i.width / r,
                  l = s * (e - i.minIndex);
              return a && (l += s / 2), i.left + Math.round(l);
            }

            var u = i.height / r,
                d = u * (e - i.minIndex);
            return a && (d += u / 2), i.top + Math.round(d);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                n = e.options.offset,
                i = Math.max(e._ticks.length - (n ? 0 : 1), 1),
                a = e.isHorizontal(),
                r = (a ? e.width : e.height) / i;
            return t -= a ? e.left : e.top, n && (t -= r / 2), (t <= 0 ? 0 : Math.round(t / r)) + e.minIndex;
          },
          getBasePixel: function getBasePixel() {
            return this.bottom;
          }
        });
        t.scaleService.registerScaleType("category", e, {
          position: "bottom"
        });
      };
    }, {}],
    53: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(45),
          r = t(34);

      e.exports = function (t) {
        var e = {
          position: "left",
          ticks: {
            callback: r.formatters.linear
          }
        },
            n = t.LinearScaleBase.extend({
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.options,
                n = t.chart,
                i = n.data.datasets,
                r = t.isHorizontal();

            function o(e) {
              return r ? e.xAxisID === t.id : e.yAxisID === t.id;
            }

            t.min = null, t.max = null;
            var s = e.stacked;

            if (void 0 === s && a.each(i, function (t, e) {
              if (!s) {
                var i = n.getDatasetMeta(e);
                n.isDatasetVisible(e) && o(i) && void 0 !== i.stack && (s = !0);
              }
            }), e.stacked || s) {
              var l = {};
              a.each(i, function (i, r) {
                var s = n.getDatasetMeta(r),
                    u = [s.type, void 0 === e.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                void 0 === l[u] && (l[u] = {
                  positiveValues: [],
                  negativeValues: []
                });
                var d = l[u].positiveValues,
                    h = l[u].negativeValues;
                n.isDatasetVisible(r) && o(s) && a.each(i.data, function (n, i) {
                  var a = +t.getRightValue(n);
                  isNaN(a) || s.data[i].hidden || (d[i] = d[i] || 0, h[i] = h[i] || 0, e.relativePoints ? d[i] = 100 : a < 0 ? h[i] += a : d[i] += a);
                });
              }), a.each(l, function (e) {
                var n = e.positiveValues.concat(e.negativeValues),
                    i = a.min(n),
                    r = a.max(n);
                t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? r : Math.max(t.max, r);
              });
            } else a.each(i, function (e, i) {
              var r = n.getDatasetMeta(i);
              n.isDatasetVisible(i) && o(r) && a.each(e.data, function (e, n) {
                var i = +t.getRightValue(e);
                isNaN(i) || r.data[n].hidden || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i));
              });
            });

            t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var t,
                e = this.options.ticks;
            if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));else {
              var n = a.valueOrDefault(e.fontSize, i.global.defaultFontSize);
              t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * n)));
            }
            return t;
          },
          handleDirectionalChanges: function handleDirectionalChanges() {
            this.isHorizontal() || this.ticks.reverse();
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForValue: function getPixelForValue(t) {
            var e,
                n = this,
                i = n.start,
                a = +n.getRightValue(t),
                r = n.end - i;
            return n.isHorizontal() ? (e = n.left + n.width / r * (a - i), Math.round(e)) : (e = n.bottom - n.height / r * (a - i), Math.round(e));
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                n = e.isHorizontal(),
                i = n ? e.width : e.height,
                a = (n ? t - e.left : e.bottom - t) / i;
            return e.start + (e.end - e.start) * a;
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticksAsNumbers[t]);
          }
        });
        t.scaleService.registerScaleType("linear", n, e);
      };
    }, {
      25: 25,
      34: 34,
      45: 45
    }],
    54: [function (t, e, n) {
      "use strict";

      var i = t(45),
          a = t(34);

      e.exports = function (t) {
        var e = i.noop;
        t.LinearScaleBase = t.Scale.extend({
          getRightValue: function getRightValue(e) {
            return "string" == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e);
          },
          handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                e = t.options.ticks;

            if (e.beginAtZero) {
              var n = i.sign(t.min),
                  a = i.sign(t.max);
              n < 0 && a < 0 ? t.max = 0 : n > 0 && a > 0 && (t.min = 0);
            }

            var r = void 0 !== e.min || void 0 !== e.suggestedMin,
                o = void 0 !== e.max || void 0 !== e.suggestedMax;
            void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), r !== o && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--);
          },
          getTickLimit: e,
          handleDirectionalChanges: e,
          buildTicks: function buildTicks() {
            var t = this,
                e = t.options.ticks,
                n = t.getTickLimit(),
                r = {
              maxTicks: n = Math.max(2, n),
              min: e.min,
              max: e.max,
              stepSize: i.valueOrDefault(e.fixedStepSize, e.stepSize)
            },
                o = t.ticks = a.generators.linear(r, t);
            t.handleDirectionalChanges(), t.max = i.max(o), t.min = i.min(o), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e);
          }
        });
      };
    }, {
      34: 34,
      45: 45
    }],
    55: [function (t, e, n) {
      "use strict";

      var i = t(45),
          a = t(34);

      e.exports = function (t) {
        var e = {
          position: "left",
          ticks: {
            callback: a.formatters.logarithmic
          }
        },
            n = t.Scale.extend({
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.options,
                n = e.ticks,
                a = t.chart,
                r = a.data.datasets,
                o = i.valueOrDefault,
                s = t.isHorizontal();

            function l(e) {
              return s ? e.xAxisID === t.id : e.yAxisID === t.id;
            }

            t.min = null, t.max = null, t.minNotZero = null;
            var u = e.stacked;

            if (void 0 === u && i.each(r, function (t, e) {
              if (!u) {
                var n = a.getDatasetMeta(e);
                a.isDatasetVisible(e) && l(n) && void 0 !== n.stack && (u = !0);
              }
            }), e.stacked || u) {
              var d = {};
              i.each(r, function (n, r) {
                var o = a.getDatasetMeta(r),
                    s = [o.type, void 0 === e.stacked && void 0 === o.stack ? r : "", o.stack].join(".");
                a.isDatasetVisible(r) && l(o) && (void 0 === d[s] && (d[s] = []), i.each(n.data, function (n, i) {
                  var a = d[s],
                      r = +t.getRightValue(n);
                  isNaN(r) || o.data[i].hidden || (a[i] = a[i] || 0, e.relativePoints ? a[i] = 100 : a[i] += r);
                }));
              }), i.each(d, function (e) {
                var n = i.min(e),
                    a = i.max(e);
                t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? a : Math.max(t.max, a);
              });
            } else i.each(r, function (e, n) {
              var r = a.getDatasetMeta(n);
              a.isDatasetVisible(n) && l(r) && i.each(e.data, function (e, n) {
                var i = +t.getRightValue(e);
                isNaN(i) || r.data[n].hidden || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i), 0 !== i && (null === t.minNotZero || i < t.minNotZero) && (t.minNotZero = i));
              });
            });

            t.min = o(n.min, t.min), t.max = o(n.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(i.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(i.log10(t.max)) + 1)) : (t.min = 1, t.max = 10));
          },
          buildTicks: function buildTicks() {
            var t = this,
                e = t.options.ticks,
                n = {
              min: e.min,
              max: e.max
            },
                r = t.ticks = a.generators.logarithmic(n, t);
            t.isHorizontal() || r.reverse(), t.max = i.max(r), t.min = i.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickValues[t]);
          },
          getPixelForValue: function getPixelForValue(t) {
            var e,
                n,
                a,
                r = this,
                o = r.start,
                s = +r.getRightValue(t),
                l = r.options.ticks;
            return r.isHorizontal() ? (a = i.log10(r.end) - i.log10(o), 0 === s ? n = r.left : (e = r.width, n = r.left + e / a * (i.log10(s) - i.log10(o)))) : (e = r.height, 0 !== o || l.reverse ? 0 === r.end && l.reverse ? (a = i.log10(r.start) - i.log10(r.minNotZero), n = s === r.end ? r.top : s === r.minNotZero ? r.top + .02 * e : r.top + .02 * e + .98 * e / a * (i.log10(s) - i.log10(r.minNotZero))) : 0 === s ? n = l.reverse ? r.top : r.bottom : (a = i.log10(r.end) - i.log10(o), e = r.height, n = r.bottom - e / a * (i.log10(s) - i.log10(o))) : (a = i.log10(r.end) - i.log10(r.minNotZero), n = s === o ? r.bottom : s === r.minNotZero ? r.bottom - .02 * e : r.bottom - .02 * e - .98 * e / a * (i.log10(s) - i.log10(r.minNotZero)))), n;
          },
          getValueForPixel: function getValueForPixel(t) {
            var e,
                n,
                a = this,
                r = i.log10(a.end) - i.log10(a.start);
            return a.isHorizontal() ? (n = a.width, e = a.start * Math.pow(10, (t - a.left) * r / n)) : (n = a.height, e = Math.pow(10, (a.bottom - t) * r / n) / a.start), e;
          }
        });
        t.scaleService.registerScaleType("logarithmic", n, e);
      };
    }, {
      34: 34,
      45: 45
    }],
    56: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(45),
          r = t(34);

      e.exports = function (t) {
        var e = i.global,
            n = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1
          },
          gridLines: {
            circular: !1
          },
          ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: r.formatters.linear
          },
          pointLabels: {
            display: !0,
            fontSize: 10,
            callback: function callback(t) {
              return t;
            }
          }
        };

        function o(t) {
          var e = t.options;
          return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
        }

        function s(t) {
          var n = t.options.pointLabels,
              i = a.valueOrDefault(n.fontSize, e.defaultFontSize),
              r = a.valueOrDefault(n.fontStyle, e.defaultFontStyle),
              o = a.valueOrDefault(n.fontFamily, e.defaultFontFamily);
          return {
            size: i,
            style: r,
            family: o,
            font: a.fontString(i, r, o)
          };
        }

        function l(t, e, n, i, a) {
          return t === i || t === a ? {
            start: e - n / 2,
            end: e + n / 2
          } : t < i || t > a ? {
            start: e - n - 5,
            end: e
          } : {
            start: e,
            end: e + n + 5
          };
        }

        function u(t) {
          return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
        }

        function d(t, e, n, i) {
          if (a.isArray(e)) for (var r = n.y, o = 1.5 * i, s = 0; s < e.length; ++s) {
            t.fillText(e[s], n.x, r), r += o;
          } else t.fillText(e, n.x, n.y);
        }

        function h(t, e, n) {
          90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h);
        }

        function c(t) {
          return a.isNumber(t) ? t : 0;
        }

        var f = t.LinearScaleBase.extend({
          setDimensions: function setDimensions() {
            var t = this,
                n = t.options,
                i = n.ticks;
            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
            var r = a.min([t.height, t.width]),
                o = a.valueOrDefault(i.fontSize, e.defaultFontSize);
            t.drawingArea = n.display ? r / 2 - (o / 2 + i.backdropPaddingY) : r / 2;
          },
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.chart,
                n = Number.POSITIVE_INFINITY,
                i = Number.NEGATIVE_INFINITY;
            a.each(e.data.datasets, function (r, o) {
              if (e.isDatasetVisible(o)) {
                var s = e.getDatasetMeta(o);
                a.each(r.data, function (e, a) {
                  var r = +t.getRightValue(e);
                  isNaN(r) || s.data[a].hidden || (n = Math.min(r, n), i = Math.max(r, i));
                });
              }
            }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var t = this.options.ticks,
                n = a.valueOrDefault(t.fontSize, e.defaultFontSize);
            return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * n)));
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          fit: function fit() {
            var t, e;
            this.options.pointLabels.display ? function (t) {
              var e,
                  n,
                  i,
                  r = s(t),
                  u = Math.min(t.height / 2, t.width / 2),
                  d = {
                r: t.width,
                l: 0,
                t: t.height,
                b: 0
              },
                  h = {};
              t.ctx.font = r.font, t._pointLabelSizes = [];
              var c,
                  f,
                  g,
                  m = o(t);

              for (e = 0; e < m; e++) {
                i = t.getPointPosition(e, u), c = t.ctx, f = r.size, g = t.pointLabels[e] || "", n = a.isArray(g) ? {
                  w: a.longestText(c, c.font, g),
                  h: g.length * f + 1.5 * (g.length - 1) * f
                } : {
                  w: c.measureText(g).width,
                  h: f
                }, t._pointLabelSizes[e] = n;
                var p = t.getIndexAngle(e),
                    v = a.toDegrees(p) % 360,
                    y = l(v, i.x, n.w, 0, 180),
                    b = l(v, i.y, n.h, 90, 270);
                y.start < d.l && (d.l = y.start, h.l = p), y.end > d.r && (d.r = y.end, h.r = p), b.start < d.t && (d.t = b.start, h.t = p), b.end > d.b && (d.b = b.end, h.b = p);
              }

              t.setReductions(u, d, h);
            }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0));
          },
          setReductions: function setReductions(t, e, n) {
            var i = e.l / Math.sin(n.l),
                a = Math.max(e.r - this.width, 0) / Math.sin(n.r),
                r = -e.t / Math.cos(n.t),
                o = -Math.max(e.b - this.height, 0) / Math.cos(n.b);
            i = c(i), a = c(a), r = c(r), o = c(o), this.drawingArea = Math.min(Math.round(t - (i + a) / 2), Math.round(t - (r + o) / 2)), this.setCenterPoint(i, a, r, o);
          },
          setCenterPoint: function setCenterPoint(t, e, n, i) {
            var a = this,
                r = a.width - e - a.drawingArea,
                o = t + a.drawingArea,
                s = n + a.drawingArea,
                l = a.height - i - a.drawingArea;
            a.xCenter = Math.round((o + r) / 2 + a.left), a.yCenter = Math.round((s + l) / 2 + a.top);
          },
          getIndexAngle: function getIndexAngle(t) {
            return t * (2 * Math.PI / o(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360;
          },
          getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
            var e = this;
            if (null === t) return 0;
            var n = e.drawingArea / (e.max - e.min);
            return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n;
          },
          getPointPosition: function getPointPosition(t, e) {
            var n = this.getIndexAngle(t) - Math.PI / 2;
            return {
              x: Math.round(Math.cos(n) * e) + this.xCenter,
              y: Math.round(Math.sin(n) * e) + this.yCenter
            };
          },
          getPointPositionForValue: function getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
          },
          getBasePosition: function getBasePosition() {
            var t = this.min,
                e = this.max;
            return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0);
          },
          draw: function draw() {
            var t = this,
                n = t.options,
                i = n.gridLines,
                r = n.ticks,
                l = a.valueOrDefault;

            if (n.display) {
              var c = t.ctx,
                  f = this.getIndexAngle(0),
                  g = l(r.fontSize, e.defaultFontSize),
                  m = l(r.fontStyle, e.defaultFontStyle),
                  p = l(r.fontFamily, e.defaultFontFamily),
                  v = a.fontString(g, m, p);
              a.each(t.ticks, function (n, s) {
                if (s > 0 || r.reverse) {
                  var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);

                  if (i.display && 0 !== s && function (t, e, n, i) {
                    var r = t.ctx;
                    if (r.strokeStyle = a.valueAtIndexOrDefault(e.color, i - 1), r.lineWidth = a.valueAtIndexOrDefault(e.lineWidth, i - 1), t.options.gridLines.circular) r.beginPath(), r.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI), r.closePath(), r.stroke();else {
                      var s = o(t);
                      if (0 === s) return;
                      r.beginPath();
                      var l = t.getPointPosition(0, n);
                      r.moveTo(l.x, l.y);

                      for (var u = 1; u < s; u++) {
                        l = t.getPointPosition(u, n), r.lineTo(l.x, l.y);
                      }

                      r.closePath(), r.stroke();
                    }
                  }(t, i, u, s), r.display) {
                    var d = l(r.fontColor, e.defaultFontColor);

                    if (c.font = v, c.save(), c.translate(t.xCenter, t.yCenter), c.rotate(f), r.showLabelBackdrop) {
                      var h = c.measureText(n).width;
                      c.fillStyle = r.backdropColor, c.fillRect(-h / 2 - r.backdropPaddingX, -u - g / 2 - r.backdropPaddingY, h + 2 * r.backdropPaddingX, g + 2 * r.backdropPaddingY);
                    }

                    c.textAlign = "center", c.textBaseline = "middle", c.fillStyle = d, c.fillText(n, 0, -u), c.restore();
                  }
                }
              }), (n.angleLines.display || n.pointLabels.display) && function (t) {
                var n = t.ctx,
                    i = a.valueOrDefault,
                    r = t.options,
                    l = r.angleLines,
                    c = r.pointLabels;
                n.lineWidth = l.lineWidth, n.strokeStyle = l.color;
                var f = t.getDistanceFromCenterForValue(r.ticks.reverse ? t.min : t.max),
                    g = s(t);
                n.textBaseline = "top";

                for (var m = o(t) - 1; m >= 0; m--) {
                  if (l.display) {
                    var p = t.getPointPosition(m, f);
                    n.beginPath(), n.moveTo(t.xCenter, t.yCenter), n.lineTo(p.x, p.y), n.stroke(), n.closePath();
                  }

                  if (c.display) {
                    var v = t.getPointPosition(m, f + 5),
                        y = i(c.fontColor, e.defaultFontColor);
                    n.font = g.font, n.fillStyle = y;
                    var b = t.getIndexAngle(m),
                        x = a.toDegrees(b);
                    n.textAlign = u(x), h(x, t._pointLabelSizes[m], v), d(n, t.pointLabels[m] || "", v, g.size);
                  }
                }
              }(t);
            }
          }
        });
        t.scaleService.registerScaleType("radialLinear", f, n);
      };
    }, {
      25: 25,
      34: 34,
      45: 45
    }],
    57: [function (t, e, n) {
      "use strict";

      var i = t(6);
      i = "function" == typeof i ? i : window.moment;
      var a = t(25),
          r = t(45),
          o = Number.MIN_SAFE_INTEGER || -9007199254740991,
          s = Number.MAX_SAFE_INTEGER || 9007199254740991,
          l = {
        millisecond: {
          common: !0,
          size: 1,
          steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
        },
        second: {
          common: !0,
          size: 1e3,
          steps: [1, 2, 5, 10, 30]
        },
        minute: {
          common: !0,
          size: 6e4,
          steps: [1, 2, 5, 10, 30]
        },
        hour: {
          common: !0,
          size: 36e5,
          steps: [1, 2, 3, 6, 12]
        },
        day: {
          common: !0,
          size: 864e5,
          steps: [1, 2, 5]
        },
        week: {
          common: !1,
          size: 6048e5,
          steps: [1, 2, 3, 4]
        },
        month: {
          common: !0,
          size: 2628e6,
          steps: [1, 2, 3]
        },
        quarter: {
          common: !1,
          size: 7884e6,
          steps: [1, 2, 3, 4]
        },
        year: {
          common: !0,
          size: 3154e7
        }
      },
          u = Object.keys(l);

      function d(t, e) {
        return t - e;
      }

      function h(t) {
        var e,
            n,
            i,
            a = {},
            r = [];

        for (e = 0, n = t.length; e < n; ++e) {
          a[i = t[e]] || (a[i] = !0, r.push(i));
        }

        return r;
      }

      function c(t, e, n, i) {
        var a = function (t, e, n) {
          for (var i, a, r, o = 0, s = t.length - 1; o >= 0 && o <= s;) {
            if (a = t[(i = o + s >> 1) - 1] || null, r = t[i], !a) return {
              lo: null,
              hi: r
            };
            if (r[e] < n) o = i + 1;else {
              if (!(a[e] > n)) return {
                lo: a,
                hi: r
              };
              s = i - 1;
            }
          }

          return {
            lo: r,
            hi: null
          };
        }(t, e, n),
            r = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
            o = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
            s = o[e] - r[e],
            l = s ? (n - r[e]) / s : 0,
            u = (o[i] - r[i]) * l;

        return r[i] + u;
      }

      function f(t, e) {
        var n = e.parser,
            a = e.parser || e.format;
        return "function" == typeof n ? n(t) : "string" == typeof t && "string" == typeof a ? i(t, a) : (t instanceof i || (t = i(t)), t.isValid() ? t : "function" == typeof a ? a(t) : t);
      }

      function g(t, e) {
        if (r.isNullOrUndef(t)) return null;
        var n = e.options.time,
            i = f(e.getRightValue(t), n);
        return i.isValid() ? (n.round && i.startOf(n.round), i.valueOf()) : null;
      }

      function m(t) {
        for (var e = u.indexOf(t) + 1, n = u.length; e < n; ++e) {
          if (l[u[e]].common) return u[e];
        }
      }

      function p(t, e, n, a) {
        var o,
            d = a.time,
            h = d.unit || function (t, e, n, i) {
          var a,
              r,
              o,
              d = u.length;

          for (a = u.indexOf(t); a < d - 1; ++a) {
            if (o = (r = l[u[a]]).steps ? r.steps[r.steps.length - 1] : s, r.common && Math.ceil((n - e) / (o * r.size)) <= i) return u[a];
          }

          return u[d - 1];
        }(d.minUnit, t, e, n),
            c = m(h),
            f = r.valueOrDefault(d.stepSize, d.unitStepSize),
            g = "week" === h && d.isoWeekday,
            p = a.ticks.major.enabled,
            v = l[h],
            y = i(t),
            b = i(e),
            x = [];

        for (f || (f = function (t, e, n, i) {
          var a,
              r,
              o,
              s = e - t,
              u = l[n],
              d = u.size,
              h = u.steps;
          if (!h) return Math.ceil(s / ((i || 1) * d));

          for (a = 0, r = h.length; a < r && (o = h[a], !(Math.ceil(s / (d * o)) <= i)); ++a) {
            ;
          }

          return o;
        }(t, e, h, n)), g && (y = y.isoWeekday(g), b = b.isoWeekday(g)), y = y.startOf(g ? "day" : h), (b = b.startOf(g ? "day" : h)) < e && b.add(1, h), o = i(y), p && c && !g && !d.round && (o.startOf(c), o.add(~~((y - o) / (v.size * f)) * f, h)); o < b; o.add(f, h)) {
          x.push(+o);
        }

        return x.push(+o), x;
      }

      e.exports = function (t) {
        var e = t.Scale.extend({
          initialize: function initialize() {
            if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
            this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this);
          },
          update: function update() {
            var e = this.options;
            return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), t.Scale.prototype.update.apply(this, arguments);
          },
          getRightValue: function getRightValue(e) {
            return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e);
          },
          determineDataLimits: function determineDataLimits() {
            var t,
                e,
                n,
                a,
                l,
                u,
                c = this,
                f = c.chart,
                m = c.options.time,
                p = s,
                v = o,
                y = [],
                b = [],
                x = [];

            for (t = 0, n = f.data.labels.length; t < n; ++t) {
              x.push(g(f.data.labels[t], c));
            }

            for (t = 0, n = (f.data.datasets || []).length; t < n; ++t) {
              if (f.isDatasetVisible(t)) {
                if (l = f.data.datasets[t].data, r.isObject(l[0])) for (b[t] = [], e = 0, a = l.length; e < a; ++e) {
                  u = g(l[e], c), y.push(u), b[t][e] = u;
                } else y.push.apply(y, x), b[t] = x.slice(0);
              } else b[t] = [];
            }

            x.length && (x = h(x).sort(d), p = Math.min(p, x[0]), v = Math.max(v, x[x.length - 1])), y.length && (y = h(y).sort(d), p = Math.min(p, y[0]), v = Math.max(v, y[y.length - 1])), p = g(m.min, c) || p, v = g(m.max, c) || v, p = p === s ? +i().startOf("day") : p, v = v === o ? +i().endOf("day") + 1 : v, c.min = Math.min(p, v), c.max = Math.max(p + 1, v), c._horizontal = c.isHorizontal(), c._table = [], c._timestamps = {
              data: y,
              datasets: b,
              labels: x
            };
          },
          buildTicks: function buildTicks() {
            var t,
                e,
                n,
                a = this,
                r = a.min,
                o = a.max,
                s = a.options,
                d = s.time,
                h = [],
                f = [];

            switch (s.ticks.source) {
              case "data":
                h = a._timestamps.data;
                break;

              case "labels":
                h = a._timestamps.labels;
                break;

              case "auto":
              default:
                h = p(r, o, a.getLabelCapacity(r), s);
            }

            for ("ticks" === s.bounds && h.length && (r = h[0], o = h[h.length - 1]), r = g(d.min, a) || r, o = g(d.max, a) || o, t = 0, e = h.length; t < e; ++t) {
              (n = h[t]) >= r && n <= o && f.push(n);
            }

            return a.min = r, a.max = o, a._unit = d.unit || function (t, e, n, a) {
              var r,
                  o,
                  s = i.duration(i(a).diff(i(n)));

              for (r = u.length - 1; r >= u.indexOf(e); r--) {
                if (o = u[r], l[o].common && s.as(o) >= t.length) return o;
              }

              return u[e ? u.indexOf(e) : 0];
            }(f, d.minUnit, a.min, a.max), a._majorUnit = m(a._unit), a._table = function (t, e, n, i) {
              if ("linear" === i || !t.length) return [{
                time: e,
                pos: 0
              }, {
                time: n,
                pos: 1
              }];
              var a,
                  r,
                  o,
                  s,
                  l,
                  u = [],
                  d = [e];

              for (a = 0, r = t.length; a < r; ++a) {
                (s = t[a]) > e && s < n && d.push(s);
              }

              for (d.push(n), a = 0, r = d.length; a < r; ++a) {
                l = d[a + 1], o = d[a - 1], s = d[a], void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({
                  time: s,
                  pos: a / (r - 1)
                });
              }

              return u;
            }(a._timestamps.data, r, o, s.distribution), a._offsets = function (t, e, n, i, a) {
              var r,
                  o,
                  s = 0,
                  l = 0;
              return a.offset && e.length && (a.time.min || (r = e.length > 1 ? e[1] : i, o = e[0], s = (c(t, "time", r, "pos") - c(t, "time", o, "pos")) / 2), a.time.max || (r = e[e.length - 1], o = e.length > 1 ? e[e.length - 2] : n, l = (c(t, "time", r, "pos") - c(t, "time", o, "pos")) / 2)), {
                left: s,
                right: l
              };
            }(a._table, f, r, o, s), function (t, e) {
              var n,
                  a,
                  r,
                  o,
                  s = [];

              for (n = 0, a = t.length; n < a; ++n) {
                r = t[n], o = !!e && r === +i(r).startOf(e), s.push({
                  value: r,
                  major: o
                });
              }

              return s;
            }(f, a._majorUnit);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var n = this.chart.data,
                i = this.options.time,
                a = n.labels && t < n.labels.length ? n.labels[t] : "",
                o = n.datasets[e].data[t];
            return r.isObject(o) && (a = this.getRightValue(o)), i.tooltipFormat && (a = f(a, i).format(i.tooltipFormat)), a;
          },
          tickFormatFunction: function tickFormatFunction(t, e, n, i) {
            var a = this.options,
                o = t.valueOf(),
                s = a.time.displayFormats,
                l = s[this._unit],
                u = this._majorUnit,
                d = s[u],
                h = t.clone().startOf(u).valueOf(),
                c = a.ticks.major,
                f = c.enabled && u && d && o === h,
                g = t.format(i || (f ? d : l)),
                m = f ? c : a.ticks.minor,
                p = r.valueOrDefault(m.callback, m.userCallback);
            return p ? p(g, e, n) : g;
          },
          convertTicksToLabels: function convertTicksToLabels(t) {
            var e,
                n,
                a = [];

            for (e = 0, n = t.length; e < n; ++e) {
              a.push(this.tickFormatFunction(i(t[e].value), e, t));
            }

            return a;
          },
          getPixelForOffset: function getPixelForOffset(t) {
            var e = this,
                n = e._horizontal ? e.width : e.height,
                i = e._horizontal ? e.left : e.top,
                a = c(e._table, "time", t, "pos");
            return i + n * (e._offsets.left + a) / (e._offsets.left + 1 + e._offsets.right);
          },
          getPixelForValue: function getPixelForValue(t, e, n) {
            var i = null;
            if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = g(t, this)), null !== i) return this.getPixelForOffset(i);
          },
          getPixelForTick: function getPixelForTick(t) {
            var e = this.getTicks();
            return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                n = e._horizontal ? e.width : e.height,
                a = e._horizontal ? e.left : e.top,
                r = (n ? (t - a) / n : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                o = c(e._table, "pos", r, "time");
            return i(o);
          },
          getLabelWidth: function getLabelWidth(t) {
            var e = this.options.ticks,
                n = this.ctx.measureText(t).width,
                i = r.toRadians(e.maxRotation),
                o = Math.cos(i),
                s = Math.sin(i);
            return n * o + r.valueOrDefault(e.fontSize, a.global.defaultFontSize) * s;
          },
          getLabelCapacity: function getLabelCapacity(t) {
            var e = this,
                n = e.options.time.displayFormats.millisecond,
                a = e.tickFormatFunction(i(t), 0, [], n),
                r = e.getLabelWidth(a),
                o = e.isHorizontal() ? e.width : e.height;
            return Math.floor(o / r);
          }
        });
        t.scaleService.registerScaleType("time", e, {
          position: "bottom",
          distribution: "linear",
          bounds: "data",
          time: {
            parser: !1,
            format: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "h:mm:ss a",
              minute: "h:mm a",
              hour: "hA",
              day: "MMM D",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY"
            }
          },
          ticks: {
            autoSkip: !1,
            source: "auto",
            major: {
              enabled: !1
            }
          }
        });
      };
    }, {
      25: 25,
      45: 45,
      6: 6
    }]
  }, {}, [7])(7);
});