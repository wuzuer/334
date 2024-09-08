(window._iconfont_svg_string_ =
  '<svg><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M675.349333 252.970667c-116.650667-116.650667-305.749333-116.650667-422.4 0-116.629333 116.629333-116.629333 305.728 0 422.378666 116.650667 116.629333 305.749333 116.629333 422.4 0 116.629333-116.650667 116.629333-305.749333 0-422.4zM192.618667 192.618667C342.613333 42.666667 585.728 42.666667 735.68 192.64c139.754667 139.776 149.269333 360.469333 28.522667 511.232l122.325333 122.346667a42.666667 42.666667 0 1 1-60.330667 60.330666l-122.346666-122.325333c-150.762667 120.746667-371.477333 111.253333-511.232-28.522667C42.666667 585.706667 42.666667 342.613333 192.64 192.64z" fill="#262C66" ></path></symbol></svg>'),
  (function (n) {
    var t = (t = document.getElementsByTagName("script"))[t.length - 1],
      e = t.getAttribute("data-injectcss"),
      t = t.getAttribute("data-disable-injectsvg");
    if (!t) {
      var o,
        i,
        c,
        d,
        s,
        a = function (t, e) {
          e.parentNode.insertBefore(t, e);
        };
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0;
        try {
          document.write(
            "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
          );
        } catch (t) {
          console && console.log(t);
        }
      }
      (o = function () {
        var t,
          e = document.createElement("div");
        (e.innerHTML = n._iconfont_svg_string_),
          (e = e.getElementsByTagName("svg")[0]) &&
            (e.setAttribute("aria-hidden", "true"),
            (e.style.position = "absolute"),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = "hidden"),
            (e = e),
            (t = document.body).firstChild
              ? a(e, t.firstChild)
              : t.appendChild(e));
      }),
        document.addEventListener
          ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener("DOMContentLoaded", i, !1), o();
              }),
              document.addEventListener("DOMContentLoaded", i, !1))
          : document.attachEvent &&
            ((c = o),
            (d = n.document),
            (s = !1),
            r(),
            (d.onreadystatechange = function () {
              "complete" == d.readyState &&
                ((d.onreadystatechange = null), l());
            }));
    }

    function l() {
      s || ((s = !0), c());
    }

    function r() {
      try {
        d.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(r, 50);
      }
      l();
    }
  })(window);
