import React, { useEffect } from "react";
import useFetch from "./useFetch";

export default function GitFollowers({ username }) {
  const { data, loading, error } = useFetch(
    `https://api.github.com/users/${username}/followers`
  );
  useEffect(() => {
    console.log(data, loading, error);
  });
  return <div></div>;
}

$(function() {
  for (var t = [], i = [], e = 1; e <= 25; e++) t.push(e);
  for (e = 26; e <= 50; e++) i.push(e);
  var o,
    s = function() {
      (level = 1),
        (t = shuffle(t)),
        (i = shuffle(i)),
        $("#grid > div").each(function(e) {
          $(this)
            .css({ opacity: 1 })
            .show()
            .removeClass("second")
            .html(
              '<span class="box" style="z-index:' +
                (100 - t[e]) +
                '"></span>' +
                t[e]
            );
        }),
        clearInterval(l),
        $("#time").text("0.000");
    },
    l = 0,
    n = function() {
      var a = function(e, t) {
          1 == e &&
            ((o = +new Date()),
            (l = setInterval(function() {
              var e = +new Date();
              (resultTime = (e - o) / 1e3), $("#time").text(resultTime);
            }, 50))),
            e <= 25
              ? t.animate({ opacity: 0 }, 100, function() {
                  t.stop()
                    .addClass("second")
                    .animate({ opacity: 1 }, 100)
                    .html(
                      '<span class="box" style="z-index:' +
                        (100 - i[t.index()]) +
                        '"></span>' +
                        i[t.index()]
                    );
                })
              : t.text("").animate({ opacity: 0 }, 100),
            e < 50 ? $("#score").text(level) : c();
        },
        n = +new Date();
      $("#grid > div").on("touchstart", function(e) {
        var t = +new Date();
        t - n < 300
          ? (e.preventDefault(), e.stopImmediatePropagation())
          : (n = t);
      }),
        $("#grid > div").on("tap touchend", function(e) {
          var t, n;
          e.preventDefault(),
            e.stopImmediatePropagation(),
            $(this).text() == level &&
              ((t = level),
              (n = $(this)),
              setTimeout(function() {
                a(t, n);
              }, 0),
              level < 50 && level++);
        }),
        $(".resetBtn").on("click", function(e) {
          s();
        });
    },
    c = function() {
      clearInterval(l), redirectResultPage(resultTime);
    };
  (location.hash = ""), s(), n();
});
