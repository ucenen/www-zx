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
	var xh = get("xh");
	var itemId = get("item_id");
	var id = get("id")
	var xh1 = parseInt(xh) + 1;
	var xh2 = parseInt(xh) - 1;
	var xh3 = parseInt(xh) - 2;
	var html_xg = '';
	$(".bottom>div>ul").empty();
	
	$.ajax({
		type:"post",
		url:ip+"ProductService.htm",
		async:true,
		data:{
			"xh":xh,
			"itemId":itemId
		},
		dataType:'json',
		success:function(data){
			console.log(data)
			$("#main>.content>.top").empty();
			if (data.length == 0) {
				var html = '无数据！';
				$("#main>.content>.top").append(html)
			}else{
				var html = data[0].page_content;
				$("#main>.content>.top").append(html)
			}
			
		}
	})
	
	
	
	//上一款
	$.ajax({
		type:"post",
		url:ip+"ProductService.htm",
		async:true,
		data:{
			"xh":xh1,
			"itemId":itemId
		},
		dataType:'json',
		success:function(data){
			console.log(data)
			
			if (data.length == 0) {
				$(".more>ul>li>.last").html("没有了！");
			}else{
				html_xg = "<li>"
				+"<a href='shelterDetails.html?item_id="
				+data[0].item_id
				+"&xh="+data[0].xh
				+"&id="+data[0].id+"'>"
				+"<img src='"
				+data[0].page_index_pic
				+"'/></a><p>"
				+data[0].page_title
				+"</p></li>"
				
				$(".bottom>div>ul").append(html_xg);
				
				if (data[0].page_title.substr(6,1) == "") {
					$(".more>ul>li>.last>span")
					.html(data[0].page_title);
				}else{
					$(".more>ul>li>.last>span")
					.html(data[0].page_title.substr(0,6)+"...");
				}	
				
				$("#last").click(function(){
					if ($(".more>ul>li>.last").html() == "没有了！") {
						alert("没有数据了！");
					}else{
						window.location.href = "shelterDetails.html?"
						+"item_id="+data[0].item_id+"&xh="+xh1
						+"&id="+data[0].id
					}
				})
			}
		}
	});
	
	
	
	//下一款
	$.ajax({
		type:"post",
		url:ip+"ProductService.htm",
		async:true,
		data:{
			"xh":xh2,
			"itemId":itemId
		},
		dataType:'json',
		success:function(data){
			if (data.length == 0) {
				$(".more>ul>li>.next").html("没有了！");
			}else{
				html_xg = "<li>"
				+"<a href='shelterDetails.html?item_id="
				+data[0].item_id
				+"&xh="+data[0].xh
				+"&id="+data[0].id+"'>"
				+"<img src='"
				+data[0].page_index_pic
				+"'/></a><p>"
				+data[0].page_title
				+"</p></li>"
				
				$(".bottom>div>ul").append(html_xg);
				
				if (data[0].page_title.substr(6,1) == "") {
					$(".more>ul>li>.next>span")
					.html(data[0].page_title.substr(0,6)+"...");
				}else{
					$(".more>ul>li>.next>span")
					.html(data[0].page_title);
				}
				
				$("#next").click(function(){
					if ($(".more>ul>li>.next").html() == "没有了！") {
						alert("没有数据了！");
					}else{
						window.location.href = "shelterDetails.html?"
						+"item_id="+data[0].item_id+"&xh="+xh2
						+"&id="+data[0].id
					}
				})
			}
		}
	});
	
	
	$.ajax({
		type:"get",
		url:ip+"ProductService.htm",
		async:true,
		data:{
			"xh":xh3,
			"itemId":itemId
		},
		dataType:'json',
		success:function(data){
			if (data.length == 0) {
				
			}else{
				html_xg = "<li>"
				+"<a href='shelterDetails.html?item_id="
				+data[0].item_id
				+"&xh="+data[0].xh
				+"&id="+data[0].id+"'>"
				+"<img src='"
				+data[0].page_index_pic
				+"'/></a><p>"
				+data[0].page_title
				+"</p></li>"
				
				$(".bottom>div>ul").append(html_xg);
			}
		}
	});
	
	$("#back").click(function(){
		window.location.href = "busShelter.html"
	})
	
	$(".led_bottom>button").click(function(){
		window.location.href = "contactUs.html"
	})
	
	
	$(".more ul li").not(".icon,.last1,.next1").hover(function(){
		$(this).css("border-color","#2EA5FF")
	},function(){
		$(this).css("border-color","#CCCCCC")
	})
})