$(function(){
	$("#join").click(function(){
		window.location.href = "joinZemso.htm"
	})
	
	
	var w = $(".content1 > div > .d > div >div").width();
	$(".content1 > div > .d > div> .lianxi").width(w);
	
	$(window).resize(function(){
		var w = $(".content1 > div > .d > div >div").width();
		$(".content1 > div > .d > div> .lianxi").width(w);
	})
	
	
	$(".content1 > div > div").each(function(i,el){
		var h = $(this).outerHeight()
		$(this).children("div").height(h);
	})
	
	
	var h1 = $(".content1 > div > .d > ul").height();
	$(".content1 > div > .d > div").css({
		"margin-top":-h1/2,
		"padding-top":h1/2+20
	});
	
	$(".content1 > div > .d > ul > li").each(function(i,el){
		$(this).click(function(){
			$(this).addClass("ul_active").siblings("li")
			.removeClass("ul_active");
			$(".zw").eq(i).addClass("zw_show").siblings(".zw")
			.removeClass("zw_show")
			
		})
	})
	
	$(".content1 > div > .d > ul > li").hover(function(){
		$(this).addClass("ul_active1");
	},function(){
		$(this).removeClass("ul_active1");
	})
	
})