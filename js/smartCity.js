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
	var index = get('id');
	
	$(".fl_list ul li").eq(index).addClass("a_s").siblings("li").removeClass("a_s");
	$(".smartCity").eq(index).addClass("smartCityActive").siblings(".smartCity").removeClass("smartCityActive");
	
	
	
	
	
	$(".fl_list ul li").click(function(){
		var index = $(this).index();
		$(this).addClass("a_s").siblings("li").removeClass("a_s");
		$(".smartCity").eq(index).addClass("smartCityActive").siblings(".smartCity").removeClass("smartCityActive");
	});
	
	
	//信息化充电桩最后一张图片的宽度设置
	var w = document.body.clientWidth;
	var w1 = $(".smartCity:last-of-type").css("margin-left");
	var w2 = w * parseFloat(w1) / 100;
	$(".smartCity .bot").css("margin-left",-w2).width(w);
	$(window).resize(function(){
		var w = document.body.clientWidth;
		var w1 = $(".smartCity:last-of-type").css("margin-left");
		var w2 = w * parseFloat(w1) / 100;
		$(".smartCity .bot").css("margin-left",-w2).width(w);
	})
	
})
