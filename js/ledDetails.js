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
	
	$.ajax({
		type:"post",
		url:ip+"ProductService.htm",
		async:true,
		data:{
			"xh":xh
		},
		dataType:'json',
		success:function(data){
//			console.log(data)
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
			"xh":xh1
		},
		dataType:'json',
		success:function(data){
//			console.log(data)
			if (data.length == 0) {
				$(".more>ul>li>.last").html("没有了！");
			}else{
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
						window.location.href = "ledDetails.html?"
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
			"xh":xh2
		},
		dataType:'json',
		success:function(data){
//			console.log(data)
			if (data.length == 0) {
				$(".more>ul>li>.next").html("没有了！");
			}else{
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
						window.location.href = "ledDetails.html?"
						+"item_id="+data[0].item_id+"&xh="+xh2
						+"&id="+data[0].id
					}
				})
			}
		}
	});
	
	
	//相关产品
	var arr_xh = [];
	$.ajax({
		type:"post",
		url:ip+"IdXhService.htm",
		async:true,
		dataType:'json',
		success:function(data){
//			console.log(data)
			for (var i = 0; i<data.length; i++) {
				arr_xh.push(data[i]);
			}
//			console.log(arr_xh)
			
			$.ajax({
				type:"post",
				url:ip+"ProductService.htm",
				async:true,
				data:{
					"itemId":itemId
				},
				dataType:'json',
				success:function(data1){
//					console.log(data1)
					$(".bottom>div>ul").empty();
					var html = '';
					if (data1.length == 1) {
						html = '无相关产品！';
						$(".bottom>div>ul").append(html)
					}else{
						for (var j = 0; j<data1.length; j++) {							
							for (var i=0;i<arr_xh.length;i++) {
								if (data1[j].id == arr_xh[i].id) {
									data1[j].xh = arr_xh[i].xh;
								}
							}
						}
//						console.log(data1)
						var num_i = 0
						for (var i = 0; i<data1.length; i++) {
							if (num_i == 4) {
								break;
							}
							
							if (data1[i].id == id) {
								html += ''
							}else{
								
								html += "<li>"
								+"<a href='ledDetails.html?item_id="
								+data1[i].item_id
								+"&xh="+data1[i].xh
								+"&id="+data1[i].id+"'>"
								+"<img src='"
								+data1[i].page_index_pic
								+"'/></a><p>"
								+data1[i].page_title
								+"</p></li>"
								num_i++;
							}
							
						}
						$(".bottom>div>ul").append(html)
						
					}
				}
			});
			
			
		}
	});
	
	
	
	
	$(".led_bottom>button").click(function(){
		window.location.href = "contactUs.html"
	})
	
	
	
	$(".more ul li").not(".icon,.last1,.next1").hover(function(){
		$(this).css("border-color","#2EA5FF")
	},function(){
		$(this).css("border-color","#CCCCCC")
	})
})