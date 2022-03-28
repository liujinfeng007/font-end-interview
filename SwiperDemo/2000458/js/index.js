$('.banner-1').swiperInit({});
jQuery('.ban-more-img').bannerRollLR({
	len: 4,
	type: 'left',
	moveTime: 3000,
	prev: '.ban-more-left',
	next: '.ban-more-right',
});
jQuery('.notice-list').rollImages({
	type: 'left',
	time: 75,
});

// 时间
$(function () {
	function time() {
		var date = new Date();
		var n = date.getFullYear();
		var y =
			date.getMonth() + 1 < 10
				? '0' + (date.getMonth() + 1)
				: date.getMonth() + 1;
		var t = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
		var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
		var m =
			date.getMinutes() < 10
				? '0' + date.getMinutes()
				: date.getMinutes();
		var s =
			date.getSeconds() < 10
				? '0' + date.getSeconds()
				: date.getSeconds();
		$('.time-box .time span').eq(0).html(n);
		$('.time-box .time span').eq(1).html(y);
		$('.time-box .time span').eq(2).html(t);
		$('.time-box .time span').eq(3).html(h);
		$('.time-box .time span').eq(4).html(m);
		$('.time-box .time span').eq(5).html(s);
		for (var i = 0; i < $('.time-box .time').length; i++) {
			if ($('.time-box .time').eq(i).text().length == 1) {
				$('.time-box .time')
					.eq(i)
					.html(function (index, html) {
						return 0 + html;
					});
			}
		}

		// 星期
		var week = date.getDay();
		var weeks = [
			'星期日',
			'星期一',
			'星期二',
			'星期三',
			'星期四',
			'星期五',
			'星期六',
		];
		$('.time-box .week').html(weeks[week]);
	}

	time();
	setInterval(time, 1000);

	// 广告
	function roll1() {
		var ggRoll = {
			//创建对象直接量
			roll: document.getElementById('roll'), //获取id属性为roll的对象
			speed: 50, //飘动速度，即为定时器函数多长时间执行一次
			statusX: 1, //规定每执行一次函数，left属性值变化的幅度
			statusY: 1, //规定每执行一次函数，top属性值变化的幅度
			x: 100, //规定初始状态下left属性的值
			y: 300, //规定初始状态下top属性的值
			//差值用来测算left属性值的极限
			winW:
				document.documentElement.clientWidth -
				document.getElementById('roll').offsetWidth,
			//差值用来测算top属性值的极限
			winH:
				document.documentElement.clientHeight -
				document.getElementById('roll').offsetHeight,
			//声明函数
			Go: function () {
				//设置div的left属性值
				this.roll.style.left = this.x + 'px';
				//设置div的top属性值
				this.roll.style.top = this.y + 'px';
				//如果statusX=1则每次减少1px,否则减少1px
				this.x = this.x + (this.statusX ? -1 : 1);
				//如果left属性值小于0，也就是div要超出左边界了，就将statusX设置为0
				if (this.x < 0) {
					this.statusX = 0;
				}
				//如果top属性值大于winW，也就是div要超出右边界了，就将statusX设置为1
				if (this.x > this.winW) {
					this.statusX = 1;
				}

				this.y = this.y + (this.statusY ? -1 : 1);
				if (this.y < 0) {
					this.statusY = 0;
				}
				if (this.y > this.winH) {
					this.statusY = 1;
				}
			},
		};

		var interval = setInterval(function () {
			ggRoll.Go();
		}, ggRoll.speed);

		document.getElementById('roll').onmouseover = function () {
			clearInterval(interval);
		}; //onmouseover属性：鼠标移动到元素上时触发
		document.getElementById('roll').onmouseout = function () {
			interval = setInterval(function () {
				ggRoll.Go();
			}, ggRoll.speed);
		};
		$('#roll .close').click(function () {
			$('#roll').hide();
			clearInterval(interval);
		});
		// setTimeout(function() {
		//     $('#roll').hide();
		//     clearInterval(interval);
		// }, 20000);
	}

	// roll1();
  
});

// 搜索
// var fuzzyWord = window.sessionStorage.keyword
// 	? window.sessionStorage.keyword
// 	: '';
// $('#inputs').val(fuzzyWord);

//监听输入框输入
var inputs = document.getElementById('inputs');
inputs.oninput = function (e) {
	console.log(inputs.value);
	window.sessionStorage.keyword = inputs.value;
};

//点击放大镜搜索
$('#searchEnter').click(function () {
	window.location.href =
		'/col1807582.html?' + 'fuzzyWord=' + $('#inputs').val();
});

//监听回车键跳转
$('#inputs').on('keypress', function (e) {
	if (e.keyCode === 13) {
		window.location.href =
			'/col1807582.html?' + 'fuzzyWord=' + $('#inputs').val();
	}
});
