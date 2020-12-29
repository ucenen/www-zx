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
	var pageId = get('pageId');
	var xh = get('xh');
	var xh1 = parseInt(xh) + 1;
	var xh2 = parseInt(xh) - 1;
	var xh3 = parseInt(xh) + 2;
	var xh4 = parseInt(xh) + 3;
	var xh5 = parseInt(xh) + 4;
	var html = '';
	var html1 = '';
	$.ajax({
		type:"post",
		url:ip+"NewsService.htm",
		async:true,
		data:{
			"xh":xh
		},
		dataType:'json',
		success:function(data){	
			
			html = "<h1 class='fnt_40'>"+
			data[0].page_title+"</h1><p>"+
			data[0].pub_date+"</p>"+data[0].page_content;
			$("#main>.cont1>.list_1>div>.bot").before(html);
			
			var url = window.location.href;
//			console.log(url)
			$("#socialShare").socialShare({
		        content: '',
				url:url,
				titile:data[0].page_title,
				pic: data[0].page_index_pic
		    });
		}
	})
	
	
	
	$("#last").click(function(){
		var text = $(".last>h2").html()
		if( text == "没有数据了！"){
			alert("没有数据了！");
		}else{
			window.location.href = "newsDetails.html?xh="+xh1;
		}
	})
	
	$("#next").click(function(){
		var text = $(".next>h2").html()
		if( text == "没有数据了！"){
			alert("没有数据了！");
		}else{
			window.location.href = "newsDetails.html?xh="+xh2;
		}
	})
	
	//上一条
	$.ajax({
		type:"post",
		url:ip+"NewsService.htm",
		async:true,
		data:{
			"xh":xh1
		},
		dataType:'json',
		success:function(data){	
			if (data.length == 0) {
				html1 = '';
				$(".list_2>div>ul").append(html1);
			}else{
				html1 = '';
				html1 = "<li id='"+
				data[0].num+"'><img src='"+data[0].page_index_pic
				+"' /><span></span><p class='fnt_18'>"
				+data[0].page_title.substr(0,16)+"...</p><p>"
				+data[0].pub_date+"</p><hr /></li>";
				
				$(".list_2>div>ul").append(html1);
				$(".list_2>div>ul>li").click(function(){
					var id = $(this).attr("id");
					window.location.href = "newsDetails.html?xh="+id;
				})
			}
			
			if (data.length == 0) {
				$(".last h2").html("没有数据了！");
				$(".last p").html("");
			}else{
				$(".last h2")
				.html(data[0].page_title.substr(0,13)+"...")
				$(".last p").html(data[0].pub_date);
			}
			
		}
	})
	
	//下一条
	$.ajax({
		type:"post",
		url:ip+"NewsService.htm",
		async:true,
		data:{
			"xh":xh2
		},
		dataType:'json',
		success:function(data){	
			
			if (data.length == 0) {
				html1 = '';
				$(".list_2>div>ul").append(html1);
			}else{
				html1 = '';
				html1 = "<li id='"+
				data[0].num+"'><img src='"+data[0].page_index_pic
				+"' /><span></span><p class='fnt_18'>"
				+data[0].page_title.substr(0,16)+"...</p><p>"
				+data[0].pub_date+"</p><hr /></li>";
				
				$(".list_2>div>ul").append(html1);
				$(".list_2>div>ul>li").click(function(){
					var id = $(this).attr("id");
					window.location.href = "newsDetails.html?xh="+id;
				})
			}
			
			
			if (data.length === 0) {
				$(".next h2").html("没有数据了！");
				$(".next p").html("");
			}else{
				$(".next h2")
				.html(data[0].page_title.substr(0,13)+"...")
				$(".next p").html(data[0].pub_date);
			}
			
		}
	})
	
	$.ajax({
		type:"post",
		url:ip+"NewsService.htm",
		async:true,
		data:{
			"xh":xh3
		},
		dataType:'json',
		success:function(data){	
			
			if (data.length == 0) {
				html1 = '';
				$(".list_2>div>ul").append(html1);
			}else{
				html1 = '';
				html1 = "<li id='"+
				data[0].num+"'><img src='"+data[0].page_index_pic
				+"' /><span></span><p class='fnt_18'>"
				+data[0].page_title.substr(0,16)+"...</p><p>"
				+data[0].pub_date+"</p><hr /></li>";
				
				$(".list_2>div>ul").append(html1);
				$(".list_2>div>ul>li").click(function(){
					var id = $(this).attr("id");
					window.location.href = "newsDetails.html?xh="+id;
				})
			}
		}
	})
	
	$.ajax({
		type:"post",
		url:ip+"NewsService.htm",
		async:true,
		data:{
			"xh":xh4
		},
		dataType:'json',
		success:function(data){	
			
			if (data.length == 0) {
				html1 = '';
				$(".list_2>div>ul").append(html1);
			}else{
				html1 = '';
				html1 = "<li id='"+
				data[0].num+"'><img src='"+data[0].page_index_pic
				+"' /><span></span><p class='fnt_18'>"
				+data[0].page_title.substr(0,16)+"...</p><p>"
				+data[0].pub_date+"</p><hr /></li>";
				
				$(".list_2>div>ul").append(html1);
				$(".list_2>div>ul>li").click(function(){
					var id = $(this).attr("id");
					window.location.href = "newsDetails.html?xh="+id;
				})
			}
		}
	})
	
	$.ajax({
		type:"post",
		url:ip+"NewsService.htm",
		async:true,
		data:{
			"xh":xh5
		},
		dataType:'json',
		success:function(data){	
			if (data.length == 0) {
				html1 = '';
				$(".list_2>div>ul").append(html1);
			}else{
				html1 = '';
				html1 = "<li id='"+
				data[0].num+"'><img src='"+data[0].page_index_pic
				+"' /><span></span><p class='fnt_18'>"
				+data[0].page_title.substr(0,16)+"...</p><p>"
				+data[0].pub_date+"</p><hr /></li>";
				
				$(".list_2>div>ul").append(html1);
				$(".list_2>div>ul>li").click(function(){
					var id = $(this).attr("id");
					window.location.href = "newsDetails.html?xh="+id;
				})
			}			
		}
	})
	
	
	

	
	
	
	$(".cont > ul > li").not(".icon,.last,.next").hover(function(){
		$(this).css("border-color","#2EA5FF")
	},function(){
		$(this).css("border-color","#CCCCCC")
	})
})