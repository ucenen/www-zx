$(function(){
	
    //banner上的按钮鼠标划过事件开始
    $(".text>div a").eq(0).hover(function(){
    	$(this).children("img").attr("src","img/zp_active.png");
    },function(){
    	$(this).children("img").attr("src","img/zp.png");
    })
    $(".text>div a").eq(1).hover(function(){
    	$(this).children("img").attr("src","img/hct1_active.png");
    },function(){
    	$(this).children("img").attr("src","img/hct1.png");
    })
    $(".text>div a").eq(2).hover(function(){
    	$(this).children("img").attr("src","img/hct_active.png");
    },function(){
    	$(this).children("img").attr("src","img/hct.png");
    })
    //banner上的按钮鼠标划过事件结束
    
    
    //新闻及案例中更多按钮鼠标划过事件开始
    $(".more .a_i").eq(0).hover(function(){
    	$(this).children("img").attr("src","img/news_more_active.png");
    },function(){
    	$(this).children("img").attr("src","img/news_more.png");
    })
    $(".more .a_i").eq(1).hover(function(){
    	$(this).children("img").attr("src","img/al_more_active.png");
    },function(){
    	$(this).children("img").attr("src","img/al_more.png");
    })
    //新闻及案例中更多按钮鼠标划过事件开始
    
    	
	//底部案例开始
	$.ajax({
		type:"post",
		url:ip+"CaseService.htm",
		async:false,
		dataType:'json',
		success:function(data){
			console.log(data)
			var html = '';
			$(".al .lz>ul").empty();
			if (data.length == "0") {
				html = "没有数据！";
				$(".al .lz>ul").append(html);
				return;
			}		
			
			for (var i = 0; i < 4; i++) {
				html += "<li><div><a href='caseShow_1.html?itemId="+data[i].item_id+"&xh="
				+data[i].xh+"' target='_blank'>"
				+"<img src='"+data[i].page_index_pic+"' />"
				+"<span class='fnt_18'>"+data[i].page_title
				+"</span></a>"
				+"</div></li>"
			}
			$(".al .lz>ul").append(html);					
		}
	});
	//底部案例结束
    
    
    
    
    
    
    
    //底部新闻开始
	$.ajax({
		type:"post",
		url:ip+"NewsService.htm",
		async:false,
		dataType:'json',
		success:function(data){
//			console.log(data)
			var html = '';
			$(".news .lz>ul").empty();
			if (data.length == "0") {
				html = "没有数据！";
				$(".news .lz>ul").append(html);
				return;
			}						
			for (var i = 0; i < 4; i++) {
				html += "<li><div><a href='newsDetails.html?xh="
				+data[i].num+"' target='_blank'>"
				+"<img src='"+data[i].page_index_pic+"' />"
				+"<span class='fnt_18'>"+data[i].page_title.substring(0,7)
				+"...</span></a></div></li>"
			}
			$(".news .lz>ul").append(html);					
		}
	});
	//底部新闻结束
	

    
})
