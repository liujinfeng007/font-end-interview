//头条轮播
var mySwiper = new Swiper('.myTopTipsSwiper.swiper', {
    autoplay: {
        delay: 3000,//3秒切换一次
    },
    loop: true,
})
$(".swiper-box").swiperInit({});
$(".ban-more-img").bannerRollLR({
  len: 4,
  type: "left",
  moveTime: 3000,
  prev: ".ban-more-left",
  next: ".ban-more-right"
});
$(".notice-list").rollImages({
  type: "top",
  time: 75
});

// 时间
$(function () {
  function time() {
    var date = new Date();
    var n = date.getFullYear();
    var y =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    var t = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var m =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var s =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    $(".time-box .time span").eq(0).html(n);
    $(".time-box .time span").eq(1).html(y);
    $(".time-box .time span").eq(2).html(t);
    $(".time-box .time span").eq(3).html(h);
    $(".time-box .time span").eq(4).html(m);
    $(".time-box .time span").eq(5).html(s);
    for (var i = 0; i < $(".time-box .time").length; i++) {
      if ($(".time-box .time").eq(i).text().length == 1) {
        $(".time-box .time")
          .eq(i)
          .html(function (index, html) {
            return 0 + html;
          });
      }
    }

    // 星期
    var week = date.getDay();
    var weeks = [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六"
    ];
    $(".time-box .week").html(weeks[week]);
  }

  time();
  setInterval(time, 1000);
});

// 搜索
var fuzzyWord = window.sessionStorage.keyword
  ? window.sessionStorage.keyword
  : "";
$("#inputs").val(fuzzyWord);

//监听输入框输入
var inputs = document.getElementById("inputs");
// inputs.oninput = function (e) {
//   console.log(inputs.value);
//   window.sessionStorage.keyword = inputs.value;
// };

//点击放大镜搜索
$("#searchEnter").click(function () {
  window.location.href =
    "/col1807582.html?" + "fuzzyWord=" + $("#inputs").val();
});

//监听回车键跳转
$("#inputs").on("keypress", function (e) {
  if (e.keyCode === 13) {
    window.location.href =
      "/col1807582.html?" + "fuzzyWord=" + $("#inputs").val();
  }
});
