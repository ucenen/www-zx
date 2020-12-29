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
	var itmeId = get('itemId');
	
	
	
	
	$.ajax({
		type:"get",
		url:ip1+"products/zhcityItems",
		async:true,
		dataType:'json',
		success:function(data){
			console.log(data)
			$(".fl_list>ul").empty();
			var html_l = "<li id='undefined0'>智慧城市公共设施</li>"
			$(".fl_list>ul").append("")
			
			for (var i = 0; i < data.length; i++) {
				html_l += "<li id='"+data[i].id+"'>"
				+data[i].item_name
				+"</li>"
			}
			 html_l += "<li id='undefined1'>候车亭智能化升级套件</li>"

			$(".fl_list>ul").append(html_l);
			
			
			
			if(itmeId == false){
				itmeId = "undefined0";				
			}else if(itmeId == "undefined"){
				itmeId = "undefined1";
			}
			$("#"+itmeId).addClass("a_s").siblings("li").removeClass("a_s");
			if (itmeId === "undefined0") {
				$(".middle,.fenye,.undefined1").css("display","none");
				$(".undefined0").css("display","block");
			}else if(itmeId === "undefined1"){
				$(".middle,.fenye,.undefined0").css("display","none");
				$(".undefined1").css("display","block");
			}else{
				$(".undefined0,.undefined1").css("display","none");
				$(".middle,.fenye").css("display","block");
				$(".middle>h1").html($("#"+itmeId).html());			
				load(itmeId,"",function(){
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
							load(itmeId,current,function(){})
						}
					});
				});
			}
			
			
			$(".fl_list>ul li").click(function(){
				$(this).addClass("a_s").siblings().removeClass("a_s");
				itmeId = $(this).attr("id");
				if (itmeId === "undefined0") {
					$(".middle,.fenye,.undefined1").css("display","none");
					$(".undefined0").css("display","block");
				}else if(itmeId === "undefined1"){
					$(".middle,.fenye,.undefined0").css("display","none");
					$(".undefined1").css("display","block");
				}else{
					$(".undefined0,.undefined1").css("display","none");
					$(".middle,.fenye").css("display","block");
					$(".middle>h1").html($(this).html());
					load(itmeId,"",function(){
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
								load(itmeId,current,function(){})
							}
						});
					});
				}
			})
			
			
			function load(itemId,num,callback){
				$(".middle>.fenye_s>div>ul").empty();	
				$.ajax({
					type:"post",
					url:ip1+"products/zhcityByItemId/",
					async:true,
					dataType:'json',
					data:{
						"itemId":itmeId,
						"pageNo":num
					},
					success:function(data){
						if (data.length === 0) {
							html = "没有数据！";
							$("#tj span").eq(0).html(0);
							$("#tj span").eq(1).html(0);	
							$(".middle>.fenye_s>div>ul").append(html);
							$("#pagination").empty();
							return;
						}
//						console.log(data);
						count = data[0].count;
						totalPage = data[0].totalPage;
						
						html = "";
						for (var i = 0; i <  data.length; i++) {						
							html += "<li>"
							+"<a  href='shelterDetails.html?"
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
			
		}
	});
	

	
	$(".led_bottom>button").click(function(){
		window.location.href = "contactUs.html"
	})
	

})