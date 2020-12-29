$(function(){
	
	function get(a){
       	var query = window.location.search.substring(1);
       	var vars = query.split("&");
       	for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == a){
           		return pair[1];
            }
      	}
      	return(false);
	}
	var id = get('id');
	if(id === false){
		
	}else{
		$("#main .hct_fl .fl_list ul li").eq(id).addClass("a_s")
		.siblings("li").removeClass("a_s");
		$(".content").eq(id).addClass("content_s")
		.siblings(".content").removeClass("content_s");
	}
	
	
	
	
	var b_h = $("#wrap>.bg").height();
	var w_h = $("#wrap>.bg>img").height();
	$("#wrap>.bg>img").css("margin-top",(b_h - w_h) / 3);

	$(window).resize(function(){
		var b_h = $("#wrap>.bg").height();
		var w_h = $("#wrap>.bg>img").height();
		console.log(b_h)
		$("#wrap>.bg>img").css("margin-top",(b_h - w_h) / 2);
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
		
		$("#main .content img").each(function(){
			c = $(this).offset().top - $(window).scrollTop();
			if (c < h) {
				$(this).addClass("animated slideInRight");
			}else{
				$(this).removeClass("animated slideInRight");
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
	
	$(".hct_fl .fl_list ul li").hover(function(){
		$(this).addClass("a_s1");
	},function(){
		$(this).removeClass("a_s1");
	})
	$(".hct_fl .fl_list ul li").click(function(){
		var index = $(this).index();
		$(this).addClass("a_s").siblings("li").removeClass("a_s");
		$("#main .content").eq(index).addClass("content_s")
		.siblings(".content").removeClass("content_s");
		$("#main .all").removeClass("content_s");
		if(index === 3){
			$("#main .all").addClass("content_s");
		}
		
		if (index === 4) {
			var ar = [];
			$("#main .content .lis ul li").each(function(i,e){
				ar.push($(this).children("div").children("div").height());
			});
			function sortNum(a,b){
				return a - b;
			}
			ar = ar.sort(sortNum);
			$("#main .content .lis ul li").children("div")
			.children("div").height(ar[ar.length - 1]);
		}
	})
})