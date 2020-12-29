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
		url:ip+"NewsNavigationService.htm",
		async:true,
		dataType:'json',
		success:function(data){	
//			console.log(data)
			if (data.length == 0) {
				return;
			}
			$("#wrap img").attr("src",data[0].page_index_pic);
			
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
	
	$("#wrap button").click(function(){
		window.location.href = "newsCenter.html"
	})
	
	
	
})