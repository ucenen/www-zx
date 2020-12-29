
var ip = "http://www.zemso.com/ZEMSO_NEW/";
//var ip1 = "http://192.168.1.90:8080/ZEMSO_NEW/";
var ip1 = "http://www.zemso.com/ZEMSO_NEW/";
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3cb508c8a421c3c96524a214c0fa0fc3";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

$(function(){
	
	var footer_text = '上海正先电子科技有限公司版权所有  沪ICP备11015154号 <a target="_blank" id="sw" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010802001539"><img src="img/police.png"/>  沪公安网备 31010802001539号  网站法律支持：炜衡律师事务所</a><a href="http://218.242.124.22:8081/businessCheck/verifKey.do?showType=extShow&serial=9031000020180507125047000002524569-SAIC_SHOW_310000-6786067id72408215585772270811111321&signData=MEUCIGE2li6vPmmJ/rY1Wd8lTnpp1biNT4e+3xUoXjAFro3FAiEA0BTVYZSqIAChnpdqwIVZsWIghXB1k0x2/VEIuAigdjM=" target="_blank"><img id="lz2" src="img/lz2.jpg"/></a>'
	$(".footer_ban>div p,footer p").html(footer_text)
			
	//定制设计菜单
	var dz_list = "<div class='dz_list'>"
	+"<div class='clearfloat fnt_16'>"
	+"<div id='dz'>"
	+"<h3 class='fnt_22'>产品定制化设计</h3>"
	+"<ul class='clearfloat'>"
	+"<li><a href='customDesign.html?id=0'>设计服务团队</a></li>"
	+"<li><a href='customDesign.html?id=1'>外观定制设计</a></li>"
	+"<li><a href='customDesign.html?id=2'>结构定制设计</a></li>"
	+"</ul>"
	+"<ul class='clearfloat'>"
	+"<li><a href='customDesign.html?id=3'>功能定制设计</a></li>"
	+"<li><a href='customDesign.html?id=4'>软件定制设计</a></li>"
	+"</ul>"
	+"</div>"
	+"</div>";
	$("header").append(dz_list);
	
	//案例展示菜单
	var case_list = "<div class='case_list'>"
	+"<div class='clearfloat fnt_16'>"
	+"<div id='case'>"
	+"<h3 class='fnt_22'>优秀案例展示</h3>"
	+"<ul class='clearfloat'>"
	+"<li><a></a></li>"
	+"<li><a></a></li>"
	+"<li><a></a></li>"
	+"</ul>"
	+"</div>"
	+"</div>";
	$("header").append(case_list);
	
	//产品中心子菜单
	var cp_list = "<div class='cp_list'>"
	+"<div class='clearfloat fnt_16'>"
	+"<div id='zp'>"
	+"<h1 class='fnt_44' id='pro'>01</h1>"
	+"<h3 class='fnt_24'>智能公交电子站牌</h3>"
	+"<div class='fnt_18' style='font-weight:bold'>"
	+"<li><a href='productCenter.html?item_id=1'>电子站牌核心技术</a></li>"
	+"<li><a href='productCenter.html?item_id=2'>电子站牌软件平台</a></li>"
	+"<li><a href='productCenter.html?item_id=3'>电子站牌核心部件</a></li>"
	+"</div>"
	+"<span></span>"
	+"<ul class='clearfloat'>"
	+"<li><a href='productCenter.html?item_id=undefined'>最新款电子站牌</a></li>"
	+"<li><a></a></li>"
	+"<li><a></a></li>"
	+"</ul>"
	+"<ul class='clearfloat'>"
	+"<li><a></a></li>"
	+"<li><a></a></li>"
	+"<li><a></a></li>"
	+"</ul>"
	+"<ul class='clearfloat'>"
	+"<li><a></a></li>"
	+"<li><a href='busShelter.html?itemId=undefined'>候车亭智能化升级套件</a></li>"
	+"</ul>"
	+"</div>"
	+"<div id='hct1'>"
	+"<h1 class='fnt_44' id='bus'>02</h1>"
	+"<h3 class='fnt_24'>智能公交候车亭</h3>"
	+"<ul class='clearfloat'>"
	
	+"</ul>"
	+"</div>"
	+"<div id='hct'>"
	+"<h1 class='fnt_40' id='sma'>03</h1>"
	+"<h3 class='fnt_24'>智慧城市配套设施</h3>"
	+"<ul class='clearfloat'>"
	+"<li><a href='smartCity.html?id=0'>智慧路牌</a></li>"
	+"<li><a href='smartCity.html?id=1'>综合信息服务亭</a></li>"
	+"<li><a href='smartCity.html?id=2'>社区智慧窗</a></li>"
	+"<li><a href='smartCity.html?id=3'>信息化充电桩</a></li>"
	+"<li><a href='smartCity.html?id=4'>户外智慧广告机</a></li>"
	+"</ul>"
	+"</div>"
	+"</div></div>";
	
	$("header").append(cp_list);
	
	$("#pro").click(function(){
		window.location.href = "productCenter.html";
	});
	$("#bus").click(function(){
		window.location.href = "busShelter.html";
	});
	$("#sma").click(function(){
		window.location.href = "smartCity.html";
	});
	
	
	$.ajax({
		type:"post",
		url:ip1+"ItemService.htm",
		async:false,
		dataType:'json',
		success:function(data){
			var arr = [19,40,20,24,22,23];
//			console.log(data)
			for (var j = 0; j < arr.length; j++) {
				for (var i = 0; i < data.length; i++) {
					if(data[i].item_id === arr[j]){
						$(".cp_list>div>#zp>ul>li").eq(j+1).children("a").attr("href","productCenter.html?item_id="+data[i].item_id).html(data[i].item_name);
					}
					
				}
			}
			
			
			
			//导航栏鼠标划过事件
			$("header>.right>ul>li").hover(function(){
				$(this).children("a").css({"color":"#2EA5FF"});
				if ($(this).children("a").html() == "产品中心") {
					$(".dz_list").css("display","none");
					$(".cp_list").css("display","block");
					var cp_list_w = $(".cp_list #zp").outerWidth() + $(".cp_list #hct").outerWidth() + $(".cp_list #hct1").outerWidth();
					var w = $(".cp_list").width();
					
					//主要是让边框的高度一样
					var zp_h = $("#zp").height();
					$("#hct,#hct1").height(zp_h);	
					
					
					$(".cp_list #zp").css("margin-left",(w - cp_list_w) / 2);
				}else if($(this).children("a").html() == "定制设计"){
					$(".dz_list").css("display","block");
					$(".cp_list,.case_list").css("display","none");
				}else if($(this).children("a").html() == "案例展示"){
					$(".case_list").css("display","block");
					$(".cp_list,.dz_list").css("display","none");
				}else{
					$(".dz_list,.case_list").css("display","none");
					$(".cp_list").css("display","none");
				}
			},function(){
				$(this).children("a").css({"color":"white"});
				$(".cp_list").css("display","none");
			});
			
			$(".cp_list,.dz_list,.case_list").hover(function(){
				$(this).css("display","block");
			},function(){
				$(this).css("display","none");
			})
		}
	});
	
	$.ajax({
		type:"post",
		url:ip+"products/zhcityItems",
		async:false,
		dataType:'json',
		success:function(data){
			var html = "<li><a href='busShelter.html'>智能候车亭整体解决方案</a></li>";
			
			$("#hct1 ul").empty();
//			console.log(data)
			for (var i = 0; i < data.length; i++) {
				html += "<li><a href='busShelter.html?itemId="
				+data[i].id+"'"
				+">"
				+data[i].item_name
				+"</a></li>"
			}
			html += "<li><a href='busShelter.html?itemId=undefined'>候车亭智能化升级套件</a></li>";	
			$("#hct1 ul").append(html);
		}
	});

	//案例展示菜单
	$.ajax({
		type:"post",
		url:ip1+"CaseMenuService.htm",
		async:false,
		dataType:'json',
		success:function(data){
//			console.log(data)
			for (var i = 0; i < data.length; i++) {
				$(".case_list>div>#case>ul>li").eq(i).children("a").attr("href","caseShow.html?item_id="+data[i].item_id).html(data[i].item_name);
			}
		}
	});
	
	
	$("footer img").click(function(){
		window.location.href = "index.html"
	})
	
	//header加载事件
	$(".center").css({
		"left":-$(".center").width(),
		"opacity":'0'
	})
	$(".nav_btn").stop().animate({
		"top":0
	},1000,function(){
		$(".center").stop().animate({
			"left":0,
			"opacity":'1'
		},1000)
	})
	
	
	//鼠标划过左边导航按钮事件
	$(".nav_btn").hover(function(){
		$(this).removeClass("anim");
	},function(){
		$(this).addClass("anim");
	})
	
	
	//左侧菜单栏出现事件
	$(".nav_btn").click(function(){
		$(".center").css({
			"left":-$(".center").width(),
			"opacity":'0'
		});
		$(this).css({
			"top":-$(this).width()
		});		
		$(".slide_nav").stop().animate({
			'left':0
		},500);
	})
	
	
	//左侧菜单栏消失事件
	$(".nav_colse").click(function(){
		$(".slide_nav").stop().animate({
			'left':"-100%"
		},1000);
		$(".nav_btn").stop().animate({
			"top":0
		},1000,function(){
			$(".center").stop().animate({
				"left":0,
				"opacity":'1'
			},1000)
		})
	})
	
	//左侧导航栏每一个的高度
	$(window).resize(function(){
	    $('.nav').css({
	      'height':$(window).height()-$('.n_logo').height()
	    });
	    $('.nav li>a').css({
	      'height':($('.nav').height()-11)/11-1,
	      'line-height':$('.nav').height()/11+'px'
	    })
	    $('.slide_nav ul li>a span').css({
	      'height':($('.nav').height()-11)/11
	    });
	    $('.slide_nav ul li>a q').css({
	      'height':($('.nav').height()-11)/11
	    });
	    $('.slide_nav ul li>a b').css({
	      'height':($('.nav').height()-11)/11
	    });
	}).resize();
	
	//鼠标划过左侧菜单时的样式
	$(".slide_nav ul li").hover(function(){
		$(this).children("a").children("span")
		.stop().animate({width:"100%"},300);
	},function(){
		$(this).children("a").children("span")
		.stop().animate({width:"0"},300);
	})
	
	//二级菜单
	var flag = true;
	$(".slide_nav ul li a q").click(function(){
		if (flag) {
			$('.slide_nav ul li dl').stop().animate({
				height:'135'
			},function(){
				flag = false;
			})
		}else{
			$('.slide_nav ul li dl').stop().animate({
				height:'0'
			},function(){
				flag = true;
			})
		}	
	});
	
	$(".slide_nav ul li dl dd").hover(function(){
		$(this).children("a").children("span")
		.stop().animate({width:"100%"},300);
	},function(){
		$(this).children("a").children("span")
		.stop().animate({width:"0"},300);
	})
	
	
	//导航栏鼠标划过事件
	$("header>.right>ul>li").hover(function(){
		$(this).children("a").css({"color":"#2EA5FF"})
	},function(){
		$(this).children("a").css({"color":"white"})
	})
	
	
	
	//菜单链接
	var aa = ['index.html','aboutZemso.html','productCenter.html','softwareDevelopment.html','customDesign.html','seikoManufacture.html','caseShow.html','shyw.html','newsCenter.html','joinZemso.html','contactUs.html']
	
	//左侧菜单
	$(".nav>ul>li").each(function(i,el){
		$(this).click(function(){
			window.location.href = aa[i];
		})
	})
	
	//头部菜单
	$("header>.right>ul>li").each(function(i,el){
		$(this).click(function(){
			window.location.href = aa[i];
		})
	})
	
	var html = "<div class='back_top1'></div><div class='back_top'>"
	+"</div>";
	$("body").append(html);
	$(window).scroll(function(){
		if($(window).scrollTop() > 200){
			$(".back_top").css("display","block");
			$(".back_top1").css("display","block");
			$(".back_top").addClass("animated fadeInRight");
			$(".back_top1").addClass("animated fadeInRight");
		}else{
			$(".back_top").css("display","none");
			$(".back_top").removeClass("animated fadeInRight");
			$(".back_top1").css("display","none");
			$(".back_top1").removeClass("animated fadeInRight");
		}
	})
	$(".back_top1").hover(function(){
		$(this).css("background","rgba(255,255,255,0.3)")
	},function(){
		$(this).css("background","rgba(255,255,255,0.5)")
	})
	
	$(".back_top,.back_top1").click(function(){
		$("html,body").animate({
			"scrollTop":0
		},1000);
	})
	
	
})