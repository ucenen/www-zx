$(function(){	
	$.ajax({
		type:"post",
		url:ip+"NewsService.htm",
		async:true,
		dataType:'json',
		success:function(data){
			console.log(data);
			var html1 = '';
			for (var i = 0; i < 3; i++) {
				html1 += "<div class='swiper-slide' id='"+
				data[i].num+"'>"
				+"<h2 class='clearfloat fnt_26'><span>"
				+data[i].page_title.substr(0,10)
				+"</span><span>"+data[i].pub_date.substr(5)
				+"</span></h2>"
				+"<h2 class='clearfloat fnt_26'><span>"
				+data[i].page_title.substr(10,9)
				+"...</span><span>"+data[i].pub_date.substr(0,4)
				+"</span></h2></div>";
			}
			$(".news_right>.swiper-wrapper").append(html1);
			
			var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    autoplay:2000,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			    paginationClickable :true,
			})
			
			$(".news_right>.swiper-wrapper>.swiper-slide")
			.click(function(){
				var id = $(this).attr("id");
				window.location.href = "newsDetails.html?xh="+id;
			})
			
		}
	});
	
	$.ajax({
		type:"post",
		url:ip+"workReports.htm",
		async:true,
		dataType:'json',
		success:function(data){
			console.log(data);
			var html1 = '';
			for (var i = 0; i < 3; i++) {
				html1 += "<div class='swiper-slide' id='"+
				data[i].num+"'>"
				+"<h2 class='clearfloat fnt_26'><span>"
				+data[i].page_title.substr(0,10)
				+"</span><span>"+data[i].pub_date.substr(5)
				+"</span></h2>"
				+"<h2 class='clearfloat fnt_26'><span>"
				+data[i].page_title.substr(10,9)
				+"...</span><span>"+data[i].pub_date.substr(0,4)
				+"</span></h2></div>";
			}
			$(".news_right>.swiper-wrapper").append(html1);
			
			var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    autoplay:2000,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			    paginationClickable :true,
			})
			
			$(".news_right>.swiper-wrapper>.swiper-slide")
			.click(function(){
				var id = $(this).attr("id");
				window.location.href = "newsDetails.html?xh="+id;
			})
			
		}
	});
	
	
	
	
	
	
	var qygk = $("#qygk_text").offset().top;
	var qywh = $("#qywh_left").offset().top;
	var qytd = $("#qytd").offset().top;
	var qyry = $("#qyzz .tu").offset().top;
	var w_h = $(window).height();
	var a = 0, b = 0, c = 0, d = 0;
	$(window).scroll(function(){
		var sT = $(window).scrollTop();
		if (sT < 100) {
			$(".situation ul li").removeClass("active1");
		}
		
		a = qygk - w_h;
		if (a < sT) {
			$("#qygk_text").addClass("animated fadeInLeft");
//			$(".video").addClass("animated fadeInRight");
		}else{
			$("#qygk_text").removeClass("animated fadeInLeft");
//			$(".video").removeClass("animated fadeInRight");
		}
		
		b = qywh - w_h;
		if (b < sT) {
			$("#qywh_left").addClass("animated fadeInLeft");
			$("#qywh_right").addClass("animated fadeInRight");
		}else{
			$("#qywh_left").removeClass("animated fadeInLeft");
			$("#qywh_right").removeClass("animated fadeInRight");
		}
		
		c = qytd - w_h;
		if (c < sT) {
			$("#qytd h2,#qytd p").addClass("animated fadeInLeft");
			$("#qytd>div").addClass("animated fadeInRight");
		}else{
			$("#qytd h2,#qytd p").removeClass("animated fadeInLeft");
			$("#qytd>div").removeClass("animated fadeInRight");
		}
		
		d = qyry - w_h;
		if (d < sT) {
			$("#qyzz .top").addClass("animated fadeInLeft");
			$("#qyzz .bottom").addClass("animated fadeInRight");
		}else{
			$("#qyzz .top").removeClass("animated fadeInLeft");
			$("#qyzz .bottom").removeClass("animated fadeInRight");
		}
		
	})
	
	$(".situation ul li").eq(0).click(function(){
		$(this).addClass("active1").siblings("li")
		.removeClass("active1");
		$("#banner #wrap img").attr("src","img/about/bg.png");
		
		setTimeout(function(){
			$("html,body").stop().animate({
				"scrollTop":qygk
			},1000)
		},1000)
	});
	
	$(".situation ul li").eq(1).click(function(){
		$(this).addClass("active1").siblings("li")
		.removeClass("active1");
		
		
		setTimeout(function(){
			$("html,body").stop().animate({
				"scrollTop":qywh
			},1000)
		},1000)
	});
	
	$(".situation ul li").eq(2).click(function(){
		$(this).addClass("active1").siblings("li")
		.removeClass("active1");
		
		
		setTimeout(function(){
			$("html,body").stop().animate({
				"scrollTop":qytd
			},1000)
		},1000)
	});
	
	$(".situation ul li").eq(3).click(function(){
		$(this).addClass("active1").siblings("li")
		.removeClass("active1");
		
		
		setTimeout(function(){
			$("html,body").stop().animate({
				"scrollTop":qyry
			},1000)
		},1000)
	});
	
	
	$(".situation ul li").hover(function(){
		$(this).addClass("active1");
		
	},function(){
		$(this).removeClass("active1")
	});
})