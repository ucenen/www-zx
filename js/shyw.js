$(function(){
	

	var w_h = $("#wrap>.bg").height();
	var d_h = $("#wrap>.bg>div").height();
	$("#wrap>.bg>div").css("bottom",(w_h - d_h) / 3);
	
	$(window).resize(function(){
		var w_h = $("#wrap>.bg").height();
		var d_h = $("#wrap>.bg>div").height();
		$("#wrap>.bg>div").css("bottom",(w_h - d_h) / 2);
	})
	
	
	
	var w = 0;
	var w1 = 0;
	
	
	$("#main .zxly .form div div").each(function(i,el){
		w = $(this).width();
		w1 = $(this).children("label").width();
		$(this).children("input").width(w - w1 - 20);
		$(this).children("textarea").width(w - w1 - 20);
	})
	
	$(window).resize(function(){
		$("#main .zxly .form div div").each(function(i,el){
			w = $(this).width();
			w1 = $(this).children("label").width();
			$(this).children("input").width(w - w1 - 20);
			$(this).children("textarea").width(w - w1 - 20);
		})
	})
	
	var h = $(window).height();
	var a = 0,b = 0,c = 0,d = 0;
	$(window).scroll(function(){
		
		
	})
	

})