$(function(){
	var w_h = $("#wrap>.bg").height();
	var d_h = $("#wrap>.bg>img").height();
	$("#wrap>.bg>img").css("margin-top",(w_h - d_h) / 3);

	$(window).resize(function(){
		var w_h = $("#wrap>.bg").height();
		var d_h = $("#wrap>.bg>img").height();
		$("#wrap>.bg>img").css("margin-top",(w_h - d_h) / 2);
	})
	
	
	var h = $(window).height();
	var a = 0,b = 0,c = 0,d = 0;
	$(window).scroll(function(){
		$("#main .content h1").each(function(){
			a = $(this).offset().top - $(window).scrollTop();
			if (a < h) {
				$(this).addClass("animated slideInDown");
			}else{
				$(this).removeClass("animated slideInDown");
			}
		});
		
		$("#main .content p").each(function(){
			b = $(this).offset().top - $(window).scrollTop();
			if (b < h) {
				$(this).addClass("animated slideInLeft");
			}else{
				$(this).removeClass("animated slideInLeft");
			}
		});
		
		$("#main .content>img").each(function(){
			c = $(this).offset().top - $(window).scrollTop();
			if (c < h) {
				$(this).addClass("animated bounceInRight");
			}else{
				$(this).removeClass("animated bounceInRight");
			}
		});
		
		$("#main .content>div").each(function(){
			d = $(this).offset().top - $(window).scrollTop();
			var el1 = $(this).children("div").children("img").eq(0);
			var el2 = $(this).children("div").children("img").eq(1);
			if (d < h) {
				el1.addClass("animated slideInLeft");
				el2.addClass("animated slideInRight");
			}else{
				el1.removeClass("animated slideInLeft");
				el2.removeClass("animated slideInRight");
			}
		});
	})
})