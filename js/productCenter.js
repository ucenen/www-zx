$(function(){
	 //轮播
    var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:3000,
	    effect : 'fade',
		fade: {
		  crossFade: false,
		}
	})
    
    mySwiper.container[0].onmouseover=function(){
		mySwiper.stopAutoplay();
	}
	//鼠标移出开始自动切换
	mySwiper.container[0].onmouseout=function(){
		mySwiper.startAutoplay();
	}
	
	
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
	var item_id2 = get('item_id');	
	if(item_id2 === false){
		$.ajax({
			type:"post",
			url:ip+"ItemService.htm",
			async:false,
			dataType:'json',
			success:function(data2){
//				console.log(data2)
				var arr = [19,40,20,24,22,23,21];
				$(".led_top>div>ul").empty();
				var html1 = "<li><a>"
				+"<img src='img/productCenter/01.png' /></a></li>";
				var html2 = "";
				$(".led_top>div>ul").append(html1);
				if (data2.length == "0") {
					$(".led_top>div>ul").append(html2);
					return;
				}
				for (var j = 0; j < arr.length; j++) {
					if(arr[j] == 21){
						html2 += "<li id='21'><a><img src='img/productCenter/08.png' />"
						+"</a></li>"
					}else{
						for (var i = 0; i < data2.length; i++) {
							if(data2[i].item_id === arr[j]){
								html2 += "<li id='"
								+data2[i].item_id
								+"'><a><img src='img/productCenter/0"+(j+2)+".png' />"
								+"</a></li>"
							}
							
						}
					}
					
				}
				
				$(".led_top>div>ul").append(html2);
				
				$(".led_top>div>ul li").click(function(){
					var item_id1 = $(this).attr("id");
					main(item_id1)
				})
			}
		});		
	}else if(item_id2 == 1){
		$(".fl_list ul li").eq(1).addClass("a_s").siblings().removeClass("a_s");
		$("#zemso_prod").addClass("content_s").siblings("div")
		.removeClass("content_s");
		$("#main").css("background-color","#FAFAFC");						
	}else if(item_id2 == 2){
		$(".fl_list ul li").eq(2).addClass("a_s").siblings().removeClass("a_s");
		$("#software").addClass("content_s").siblings("div")
		.removeClass("content_s");
		$("#main").css("background-color","#FFFFFF");
	}else if(item_id2 == 3){
		$(".fl_list ul li").eq(3).addClass("a_s").siblings().removeClass("a_s");
		$("#control").addClass("content_s").siblings("div")
		.removeClass("content_s");
		$("#main").css("background-color","#134993");
	}else{
		main(item_id2)
	}
	
	

	
	
	function main(item_id1){
				
		
			
		if(item_id1 === undefined || item_id1 === "undefined"){
			$(".middle>h1").html("最新款产品");
		}else if(item_id1 === "20"){
			$(".middle>h1").html("交互式电子站牌");
		}else if(item_id1 === "21"){
			window.location.href = "busShelter.html?itemId=undefined";
			return ;
		}else if(item_id1 === "22"){
			$(".middle>h1").html("挂式电子站牌");
		}else if(item_id1 === "23"){
			$(".middle>h1").html("太阳能电子站牌");
		}else if(item_id1 === "24"){
			$(".middle>h1").html("墨水屏电子站牌");
		}else if(item_id1 === "19"){
			$(".middle>h1").html("LCD电子站牌");
		}else if(item_id1 === "40"){
			$(".middle>h1").html("LED电子站牌");
		}
		$(".led_top").css("display","none");
		$(".middle,.fenye").css("display","block");
			
		var arr_xh = [];
		$.ajax({
			type:"post",
			url:ip+"IdXhService.htm",
			async:false,
			dataType:'json',
			success:function(data1){
//				console.log(data1)
				for (var i = 0; i<data1.length; i++) {
					arr_xh.push(data1[i]);
				}
											
				function fenlei(itemId,pageNo,callback){
					$(".middle>.fenye_s>div>ul").empty();
					$.ajax({
						type:"post",
						url:ip+"ProductService.htm",
						async:false,
						data:{
							"itemId":itemId,
							"pageNo":pageNo
						},
						dataType:'json',
						success:function(data){
//							console.log(data)
							if (data.length == 0) {
								html = "无数据！";
								$(".middle>.fenye_s>div>ul").append(html);
								$("#pagination,#tj").css("display","none")
								return;
							}
							count = data[0].count;
							totalPage = data[0].totalPage;
							html = "";
							for (var j = 0; j<data.length; j++) {							
								for (var i=0;i<arr_xh.length;i++) {
									if (data[j].id == arr_xh[i].id) {
										data[j].xh = arr_xh[i].xh;
									}
								}
							}
							
							for (var i = 0; i <  data.length; i++) {	
								html += "<li>"
								+"<a target='_blank' href='ledDetails.html?"
								+"item_id="+data[i].item_id
								+"&xh="+data[i].xh+"&id="
								+data[i].id+"'><img src='"
								+data[i].page_index_pic
								+"'/></a><a class='fnt_16'>"
								+data[i].page_title+"</a></li>";								
							}
									
							
							$(".middle>.fenye_s>div>ul").append(html);
							callback(count,totalPage);
						}
					});
				}
				
				if (item_id1 === undefined || item_id1 === "undefined") {
					var html = '';	
					load("",function(){
						var s_t = $(".middle>h1").offset().top;
						$("#tj span").eq(0).html(count);
						$("#tj span").eq(1).html(totalPage);
						$("#pagination").pagination({
							currentPage: 1,
							totalPage: totalPage,
							count: 3,
							callback: function(current) {
								$("html,body").animate({
									"scrollTop":s_t
								},0);
								load(current,function(){})
							}
						});
					});
				
					function load(num,callback){
						$(".middle>.fenye_s>div>ul").empty();	
						$.ajax({
							type:"post",
							url:ip+"ProductService.htm",
							async:false,
							dataType:'json',
							data:{
								"pageNo":num
							},
							success:function(data){
//										console.log(data);
								if (data.length == "0") {
									html = "没有数据！";
									$(".middle>.fenye_s>div>ul").append(html);
									$("#tj span").eq(0).html(0);
									$("#tj span").eq(1).html(0);
									$("#pagination").empty();
									return;
								}
								count = data[0].count;
								totalPage = data[0].totalPage;
								
								html = "";
								for (var i = 0; i <  data.length; i++) {						
									html += "<li>"
									+"<a target='_blank'"
									+" href='ledDetails.html?"
									+"item_id="+data[i].item_id
									+"&xh="+data[i].xh+"&id="
									+data[i].id+"'><img src='"
									+data[i].page_index_pic
									+"'/></a><a class='fnt_16'>"
									+data[i].page_title+"</a></li>";								
								}
								$(".middle>.fenye_s>div>ul").append(html);	
								
								//回调函数
								callback(count,totalPage);
											
							}
						});
					}
				}else{													
					fenlei(item_id1,"",function(){
						var s_t = $(".middle>h1").offset().top;
						$("#tj span").eq(0).html(count);
						$("#tj span").eq(1).html(totalPage);
						$("#pagination").pagination({
							currentPage: 1,
							totalPage: totalPage,
							count: 3,
							callback: function(current) {
								$("html,body").animate({
									"scrollTop":s_t
								},0);
								fenlei(item_id1,current,function(){})
							}
						});
					})
				}
			}
		});
	}
	
		
	
	
	
	
	
	
	
	
	
	
	

	
	
	

	
	
	
	
	

	//4个分类切换样式
	$("#wrap .hct_fl .fl_list ul li").click(function(){
		$(this).addClass("a_s").siblings().removeClass("a_s");
	})
	
	$("#wrap .hct_fl .fl_list ul li").hover(function(){
		$(this).addClass("a_s1");
	},function(){
		$(this).removeClass("a_s1");
	})
	
	//内容切换
	$("#wrap .hct_fl .fl_list ul li").eq(0).click(function(){
		$("#led").addClass("content_s").siblings("div")
		.removeClass("content_s");
		$("#main").css("background-color","#E2E2E2");
		$(".led_top").css("display","block");
		$(".middle,.fenye").css("display","none");		
		$.ajax({
			type:"post",
			url:ip+"ItemService.htm",
			async:false,
			dataType:'json',
			success:function(data2){
				var arr = [19,40,20,21,22,23,24];
				$(".led_top>div>ul").empty();
				var html1 = "<li><a>"
				+"<img src='img/productCenter/01.png' /></a></li>";
				var html2 = "";
				$(".led_top>div>ul").append(html1);
				if (data2.length == "0") {
					$(".led_top>div>ul").append(html2);
					return;
				}
				for (var j = 0; j < arr.length; j++) {
					if(arr[j] == 21){
						html2 += "<li id='21'><a><img src='img/productCenter/05.png' />"
						+"</a></li>"
					}else{
						for (var i = 0; i < data2.length; i++) {
							if(data2[i].item_id === arr[j]){
								html2 += "<li id='"
								+data2[i].item_id
								+"'><a><img src='img/productCenter/0"+(j+2)+".png' />"
								+"</a></li>"
							}
							
						}
					}
					
				}
				$(".led_top>div>ul").append(html2);
				
				$(".led_top>div>ul li").click(function(){
					var item_id1 = $(this).attr("id");
					main(item_id1)
				})
			}
		});
	})
	
	$("#wrap .hct_fl .fl_list ul li").eq(1).click(function(){
		$("#zemso_prod").addClass("content_s").siblings("div")
		.removeClass("content_s");
		$("#main").css("background-color","#FAFAFC");
	})
		
	$("#wrap .hct_fl .fl_list ul li").eq(2).click(function(){
		$("#software").addClass("content_s").siblings("div")
		.removeClass("content_s");
		$("#main").css("background-color","#FFFFFF");
	})
	
	$("#wrap .hct_fl .fl_list ul li").eq(3).click(function(){
		$("#control").addClass("content_s").siblings("div")
		.removeClass("content_s");
		$("#main").css("background-color","#134993");
	})
	
	
	$(".led_bottom>button").click(function(){
		window.location.href = "contactUs.html"
	})
	
	
	
	//动画
	var h = $(window).height();
	var a = 0,b = 0,c = 0;
	$(window).scroll(function(){	
		$("#control .middle2 .tw").each(function(){
			a = $(this).offset().top - $(window).scrollTop();
			if (a < h) {
				$(this).children(".tw_text")
				.addClass("animated slideInLeft");
				$(this).children(".tw_img")
				.addClass("animated slideInRight");
			}else{
				$(this).children(".tw_text")
				.removeClass("animated slideInLeft");
				$(this).children(".tw_img")
				.removeClass("animated slideInRight");
			}
		});
		
		b = $("#control .middle2 h1").offset().top
		- $(window).scrollTop()
		if (b < h) {
			$("#control .middle2 h1")
			.addClass("animated slideInDown");
		}else{
			$("#control .middle2 h1")
			.removeClass("animated slideInDown");
		}
		
		c = $("#control .middle2 > p").offset().top
		- $(window).scrollTop()
		if (c < h) {
			$("#control .middle2 > p")
			.addClass("animated slideInLeft");
		}else{
			$("#control .middle2 > p")
			.removeClass("animated slideInLeft");
		}
	})
	
})
