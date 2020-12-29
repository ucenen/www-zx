$(function(){
	
	$(".back").hover(function(){
		$(this).attr("src","img/softwareDevelopment/back_active.png");
	},function(){
		$(this).attr("src","img/softwareDevelopment/back.png");
	})
	
	
	$(".back").click(function(){
		window.location.href = "softwareDevelopment.html"
	})
})
