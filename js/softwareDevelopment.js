$(function(){

	
	
	
	var w_h = $("#wrap>.bg").height();
	var d_h = $("#wrap>.bg>div").height();
	$("#wrap>.bg>div").css("margin-top",(w_h - d_h) / 3);
	$(window).resize(function(){
		var w_h = $("#wrap>.bg").height();
		var d_h = $("#wrap>.bg>div").height();
		$("#wrap>.bg>div").css("margin-top",(w_h - d_h) / 2);
	})
	
	
	var h = $(window).height()
	var a = 0,b = 0, c = 0, d = 0, e = 0;
	$(window).scroll(function(){
		$("#main .content p").each(function(i,el){
			a = $(this).offset().top - $(window).scrollTop();
			if (a < h) {
				$(this).addClass("animated fadeInLeft")
			}else{
				$(this).removeClass("animated fadeInLeft")
			}
		})
		
		$("#main .content img").each(function(i,el){
			b = $(this).offset().top - $(window).scrollTop();
			if (b < h) {
				$(this).addClass("animated fadeInRight")
			}else{
				$(this).removeClass("animated fadeInRight")
			}
		})
		
		$("#main .content>div").each(function(i,el){
			e = $(this).offset().top - $(window).scrollTop();
			if (e < h) {
				$(this).addClass("animated fadeInRight")
			}else{
				$(this).removeClass("animated fadeInRight")
			}
		})
		
		$("#main .content h3").each(function(i,el){
			c = $(this).offset().top - $(window).scrollTop();
			if (c < h) {
				$(this).addClass("animated fadeInDown")
			}else{
				$(this).removeClass("animated fadeInDown")
			}
		})
		
		$("#main .content h1").each(function(i,el){
			d = $(this).offset().top - $(window).scrollTop();
			if (d < h) {
				$(this).addClass("animated fadeInUp")
			}else{
				$(this).removeClass("animated fadeInUp")
			}
		})		
	})
	
	$("#main .content .go").each(function(i,el){
		$(this).click(function(){
			window.location.href = "softwareDevelopment_"+(i+1)+".html"
		})
	})
	$("#main .content .go").hover(function(){
		$(this).css({
			"background":"rgba(255,255,255,1)",
			"color":"black"
		})
	},function(){
		$(this).css({
			"background":"rgba(0,0,0,0)",
			"color":"white"
		})
	})
})