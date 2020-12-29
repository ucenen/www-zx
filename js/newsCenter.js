$(function () {
	var html = "";
	var html1 = "<div class='nr n_show'>"
		+ "<ul class='clearfloat'></ul></div>";
	$(".list").append(html1);
	var count = 0;
	var totalPage = 0;


	$.ajax({
		type: "post",
		url: ip + "NewsNavigationService.htm",
		async: true,
		dataType: 'json',
		success: function (data) {
			$("#wrap img").eq(0).attr("src", data[0].page_index_pic);
			$("#wrap button").click(function () {
				window.location.href = "newsDetails1.html"
			})
		}
	});
	//添加轮播
	var $bannerPic = $("#banner img");
	var $index = 0;
	var $t = setInterval(show, 3000);
	function show() {
		$index++;
		if ($index === $bannerPic.length) {
			$index = 0;
		}
		 // 轮播图改变
		$("#banner img").eq($index).fadeIn(500).css("display", "block").siblings().fadeOut(500).css("display", "none");
			// 指示器改变
			$(".yuan li").eq($index).addClass("active").siblings().removeClass("active");
	}

	load("", function () {
		var s_t = $("#main .list>h1").offset().top;
		$("#tj span").eq(0).html(count);
		$("#tj span").eq(1).html(totalPage);
		$("#pagination1").pagination({
			currentPage: 1,
			totalPage: totalPage,
			count: 3,
			callback: function (current) {
				$("html,body").animate({
					"scrollTop": s_t
				}, 0);
				load(current, function () { })
			}
		});
	});
	//新闻列表加载函数
	function load(num, callback) {
		$(".list ul").empty();
		$.ajax({
			type: "post",
			url: ip + "NewsService.htm",
			async: true,
			dataType: 'json',
			data: {
				"pageNo": num
			},
			success: function (data) {
				//				console.log(data);
				count = data[0].count;
				totalPage = data[0].totalPage;

				html = "";
				for (var i = 0; i < data.length; i++) {
					html += "<li><div>"
						+ "<a target='_blank' href='newsDetails.html?"
						//					+"pageId="+data[i].pageId
						+ "xh=" + data[i].num + "'>"
						//					+"<img src='img/newsCenter/001.png' />"
						+ "<img src='" + data[i].page_index_pic + "' />"
						+ "</a><span></span>"
						+ "<h1 class='fnt_26'>" + data[i].page_title + "</h1>"
						+ "<p class='fnt_16'>"
						+ data[i].pub_date + "</p><hr />"
						+ "<p class='fnt_16'>" + data[i].page_key
						+ "</p>"
						+ "</div></li>";
				}

				$(".list ul").append(html);
				$(".list ul li").click(function () {
					window.open($(this).children("div").children("a").attr("href"))
				})

				var t_img; // 定时器
				var isLoad = true; // 控制变量

				// 判断图片加载状况，加载完成后回调
				isImgLoad(function () {
					var arr2 = [], arr3 = [];
					$(".list .nr").eq(0).children("ul")
						.children("li")
						.each(function (i, el) {
							arr2.push($(this).height());
							arr3.push($(this).children("div")
								.children("h1").height());
						})
					arr2 = arr2.sort(sortNumber);
					arr3 = arr3.sort(sortNumber);
					$(".list .nr").eq(0).children("ul")
						.children("li").height(arr2[arr2.length - 1]);
					$(".list .nr").eq(0).children("ul")
						.children("li").children("div")
						.children("h1").height(arr3[arr3.length - 1]);

				});

				//判断图片是否加载完成
				function isImgLoad(callback) {
					// 查找所有封面图，迭代处理
					$('.list .nr ul li img').each(function () {
						// 找到为0就将isLoad设为false，并退出each
						if (this.height === 0) {
							isLoad = false;
							return false;
						}
					});
					// 为true，没有发现为0的。加载完毕
					if (isLoad) {
						clearTimeout(t_img); // 清除定时器
						// 回调函数
						callback();
						// 为false，因为找到了没有加载完成的图，将调用定时器递归
					} else {
						isLoad = true;
						t_img = setTimeout(function () {
							isImgLoad(callback); // 递归扫描
						}, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
					}
				}


				//回调函数
				callback(count, totalPage);

			}
		});
	}

	//排序
	function sortNumber(a, b) {
		return a - b;
	}


})