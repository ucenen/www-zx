$(function(){
	var h_h = $("header").height();
	var b_h = $("#banner").height();
	var t_h = $(".tw").eq(0).height();
	var t_h1 = $(".tw").eq(1).height();
	var t_h2 = $(".tw").eq(2).height();
	var t_h3 = $(".tw").eq(3).height();
	var t_h4 = $(".tw").eq(4).height();
	var t_h5 = $(".tw").eq(5).height();
	var t_h6 = $(".tw").eq(6).height();
	$(window).scroll(function(){
		if($(this).scrollTop()>h_h){
			$("#main>.middle>h1").addClass("animated fadeInLeftBig");
			$("#main>.middle>p").addClass("animated fadeInRightBig");
		}else{
			$("#main>.middle>h1").removeClass("animated fadeInLeftBig");
			$("#main>.middle>p").removeClass("animated fadeInRightBig");
		}
		
		if ($(this).scrollTop()>h_h+b_h/3) {
			$("#main>.middle>.tw").eq(0).children(".tw_text").addClass("animated fadeInLeftBig");
			$("#main>.middle>.tw").eq(0).children(".tw_img").addClass("animated fadeInRightBig");
		}else{
			$("#main>.middle>.tw").eq(0).children(".tw_text").removeClass("animated fadeInLeftBig");
			$("#main>.middle>.tw").eq(0).children(".tw_img").removeClass("animated fadeInRightBig");
		}
		
		if ($(this).scrollTop()>h_h+b_h/3+t_h) {
			$("#main>.middle>.tw").eq(1).children(".tw_text").addClass("animated fadeInLeftBig");
			$("#main>.middle>.tw").eq(1).children(".tw_img").addClass("animated fadeInRightBig");
		}else{
			$("#main>.middle>.tw").eq(1).children(".tw_text").removeClass("animated fadeInLeftBig");
			$("#main>.middle>.tw").eq(1).children(".tw_img").removeClass("animated fadeInRightBig");
		}
		
		if ($(this).scrollTop()>h_h+b_h/3+t_h+t_h1) {
			$("#main>.middle>.tw").eq(2).children(".tw_text").addClass("animated fadeInLeftBig");
			$("#main>.middle>.tw").eq(2).children(".tw_img").addClass("animated fadeInRightBig");
		}else{
			$("#main>.middle>.tw").eq(2).children(".tw_text").removeClass("animated fadeInLeftBig");
			$("#main>.middle>.tw").eq(2).children(".tw_img").removeClass("animated fadeInRightBig");
		}
		
		if ($(this).scrollTop()>h_h+b_h/3+t_h+t_h1+t_h2) {
			$("#main>.middle>.tw").eq(3).children(".tw_text").addClass("animated fadeInLeftBig");
			$("#main>.middle>.tw").eq(3).children(".tw_img").addClass("animated fadeInRightBig");
		}else{
			$("#main>.middle>.tw").eq(3).children(".tw_text").removeClass("animated fadeInLeftBig");
			$("#main>.middle>.tw").eq(3).children(".tw_img").removeClass("animated fadeInRightBig");
		}
		
		if ($(this).scrollTop()>h_h+b_h/3+t_h+t_h1+t_h2+t_h3) {
			$("#main>.middle>.tw").eq(4).children(".tw_text").addClass("animated fadeInLeftBig");
			$("#main>.middle>.tw").eq(4).children(".tw_img").addClass("animated fadeInRightBig");
		}else{
			$("#main>.middle>.tw").eq(4).children(".tw_text").removeClass("animated fadeInLeftBig");
			$("#main>.middle>.tw").eq(4).children(".tw_img").removeClass("animated fadeInRightBig");
		}
		
		if ($(this).scrollTop()>h_h+b_h+t_h+t_h1+t_h2+t_h3+t_h4) {
			$("#main>.middle>.tw").eq(5).children(".tw_text").addClass("animated fadeInLeftBig");
			$("#main>.middle>.tw").eq(5).children(".tw_img").addClass("animated fadeInRightBig");
		}else{
			$("#main>.middle>.tw").eq(5).children(".tw_text").removeClass("animated fadeInLeftBig");
			$("#main>.middle>.tw").eq(5).children(".tw_img").removeClass("animated fadeInRightBig");
		}
		

		
	})
})
