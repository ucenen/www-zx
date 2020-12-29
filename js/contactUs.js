$(function(){
	
//	var mySwiper = new Swiper ('.swiper-container', {
//	    direction: 'horizontal',
//	    loop: true,
//	    autoplay:2000,
//	    // 如果需要分页器
//	    pagination: '.swiper-pagination',
//	    paginationClickable :true,
//	    autoplayDisableOnInteraction:false
//	})
//	
	
	
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
		a = $(".address h1").offset().top - $(window).scrollTop();
		if (a < h) {
			$(".address h1").addClass("animated fadeInDown");
			$(".address p").addClass("animated fadeInLeft");
		}else{
			$(".address h1").removeClass("animated fadeInDown");
			$(".address p").removeClass("animated fadeInLeft");
		}
		
		b = $(".address img").offset().top - $(window).scrollTop();
		if (b < h) {
			$(".address img").addClass("animated fadeInRight");
		}else{
			$(".address img").removeClass("animated fadeInRight");
		}
		
		c = $(".bsc div").offset().top - $(window).scrollTop();
		if (c < h) {
			$(".bsc div").addClass("animated fadeInLeft");
		}else{
			$(".bsc div").removeClass("animated fadeInLeft");
		}
		
		d = $(".zxly>h1").offset().top - $(window).scrollTop();
		if (d < h) {
			$(".zxly>h1").addClass("animated fadeInLeft");
			$(".zxly>form").addClass("animated fadeInRight");
		}else{
			$(".zxly>form").removeClass("animated fadeInRight");
			$(".zxly>h1").removeClass("animated fadeInLeft");
		}
		
	})
	
	
	//提交
	$("#submit").click(function(){
		var name = $("#name").val();
		var tel = $("#tel").val();
		var email = $("#email").val();
		var address = $("#address").val();
		var title = $("#title").val();
		var con = $("#con").val();
		var re= /^(0[0-9]{2,3}\-)([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/;
		var re1 = /^1[34578][0-9]{9}$/;
		var re2 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
		
		
		if (name == "") {
			alert("请填写您的姓名！");
			return ;
		}
		if (tel == "") {
			alert("请填写您的电话号码！");
			return ;
		}else if( !re.test(tel) &&  !re1.test(tel)){
			alert("请填写正确的手机号或带区号的固定电话！");
			return ;
		}
		if (!re2.test(email)) {
			alert("请输入正确的邮箱格式！");
			return ;
		}
		$.ajax({
			type:"post",
			url:ip+"MessageService.htm",
			async:true,
			data:{
				"name":name,
				"tel":tel,
				"email":email,
				"message":con
			},
			dataType:'json',
			success:function(data){
				if(data.flag = "提交成功"){
					alert(data.flag);
					$("#name,#tel,#email,#address,#title,#con").val("");
				}else{
					alert(data.flag);
					alert(111)
				}
				
			}
		});
	})
	
	//重置
	$("#regest").click(function(){
		$("#name,#tel,#email,#address,#title,#con").val("");
	})
	
})