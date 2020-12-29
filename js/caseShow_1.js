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
	var xh = get('xh');
	var itemId = get('itemId');
	var flag = true;
	var flag1 = true;
	if(itemId == '51'){
		$("#main>.content>h1").html("智能公交电子站牌");
	}else if(itemId == '52'){
		$("#main>.content>h1").html("智能公交候车亭");
	}else{
		$("#main>.content>h1").html("智慧城市公共设施");
	}
	
	
	$.ajax({
		type:"post",
		url:ip1+"CaseService.htm",
		async:true,
		data:{
			"xh":xh,
			"itemId":itemId
		},
		dataType:'json',
		success:function(data){	
//			console.log(data)
			if (data.length == 0) {
				return ;
			}else{
				var html = '';
				html = "<div>"+
				data[0].page_content+"</div>";
				$("#main>.content>ul>li>div").append(html);			
			}
		}
	})
	
	
	$("#last").click(function(){
		xh = parseInt(xh) - 1;
		$.ajax({
			type:"post",
			url:ip1+"CaseService.htm",
			async:true,
			data:{
				"xh":xh,
				"itemId":itemId
			},
			dataType:'json',
			success:function(data){
//				console.log(data)
				if (data.length == 0) {
					alert("没有了！");
					if (flag1 = true) {
						xh = parseInt(xh) + 1;
					}
					flag1 = false;
					return;
				}
				flag = true;
				var s_t = $("#main>.content>h1").offset().top;
				$("#main>.content>ul>li>div").empty();
				var html = '';
				html = "<div>"+
				data[0].page_content+"</div>";
				
				$("#main>.content>ul>li>div").append(html);
				$("html,body").animate({
					"scrollTop":s_t
				},0)
			}
		});
		
	})
	
	$("#next").click(function(){
		xh = parseInt(xh) + 1;
		$.ajax({
			type:"post",
			url:ip1+"CaseService.htm",
			async:true,
			data:{
				"xh":xh,
				"itemId":itemId
			},
			dataType:'json',
			success:function(data){
				if (data.length == 0) {
					alert("没有了！");
					if (flag = true) {
						xh = parseInt(xh) - 1;
					}
					flag = false;
					return;
				}
				flag1 = true;
				var s_t = $("#main>.content>h1").offset().top;
				$("#main>.content>ul>li>div").empty();
				var html = '';
				html = "<div>"+
				data[0].page_content+"</div>";
				
				$("#main>.content>ul>li>div").append(html);	
				$("html,body").animate({
					"scrollTop":s_t
				},0)
			}
		});	
		
	})
	
	
	

	$(".ym ul li").not(".icon").hover(function(){
		$(this).css("border-color","#2EA5FF")
	},function(){
		$(this).css("border-color","#CCCCCC")
	})
})


