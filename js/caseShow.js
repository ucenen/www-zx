
$(function(){
	
	
		
	$.ajax({
		type:"post",
		url:ip1+"CaseMenuService.htm",
		async:false,
		dataType:'json',
		success:function(data){
//			console.log(data)
			for (var i = 0; i < data.length; i++) {
				$(".hct_fl>.fl_list ul li").eq(i).attr("id",data[i].item_id).html(data[i].item_name)
			}
		}
	});
	
	
	$(".hct_fl>.fl_list ul li").click(function(){
		$(this).addClass("a_s").siblings("li").removeClass("a_s");
		$("#main>.content>.al_s>div,#pagination1").empty();
		$("#main>.content>h1").html($(this).html());
		var itemId = $(this).attr("id");
		load(itemId,"",function(){
			var s_t = $("#main>.content>h1").offset().top;
			$("#tj span").eq(0).html(count);
			$("#tj span").eq(1).html(totalPage);
			$("#pagination1").pagination({
				currentPage: 1,
				totalPage: totalPage,
				count: 3,
				callback: function(current) {
					$("html,body").animate({
						"scrollTop":s_t
					},0);
					load(itemId,current,function(){})
				}
			})
		})
		
	})
	
	
	
	
		
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
	var index = null;
	var text = "";
	if(item_id2 == "51"){
		index = 0
	}else if(item_id2 == "52"){
		index = 1
	}else if(item_id2 == "53"){
		index = 2
	}else{
		index = 0;
		item_id2 = "51"
	}
	
	
	
	var count = 0 ,totalPage = 0;
	load(item_id2,"",function(){
		var s_t = $("#main>.content>h1").offset().top;
		$(".hct_fl>.fl_list ul li").eq(index).addClass("a_s").siblings("li").removeClass("a_s");
		$("#tj span").eq(0).html(count);
		$("#tj span").eq(1).html(totalPage);
		$("#pagination1").pagination({
			currentPage: 1,
			totalPage: totalPage,
			count: 3,
			callback: function(current) {
				$("html,body").animate({
					"scrollTop":s_t
				},0);
				load(item_id2,current,function(){})
			}
		});
	})
	
	function load(itemId,num,callback){
		$.ajax({
			type:"post",
			url:ip1+"CaseService.htm",
			async:true,
			data:{
				"itemId":itemId,
				"pageNo":num
			},
			dataType:'json',
			success:function(data){
//				console.log(data)
				if (data.length == 0) {
					$("#main>.content>.al_s>div").append("暂无数据！");	
					return ;
				}
				$("#main>.content>.al_s>div").empty();
				count = data[0].count;
				totalPage = data[0].totalPage;
				var html = '';
				if(itemId == "51"){
					for (var i = 0; i < data.length; i++) {
						html += "<div class='small'><div>"
						+"<a target='_blank' href="
						+"'caseShow_1.html?itemId="+itemId+"&xh="
						+data[i].xh+"'><img src='"
						+data[i].page_index_pic+"' /></a></div>"
						+"<span class='fnt_18'>"
						+data[i].page_title+"</span></div>"
					}	
				}else{
					for (var i = 0; i < data.length; i++) {
						html += "<div class='big'><div>"
						+"<a target='_blank' href="
						+"'caseShow_1.html?itemId="+itemId+"&xh="
						+data[i].xh+"'><img src='"
						+data[i].page_index_pic+"' /></a></div>"
						+"<span class='fnt_18'>"
						+data[i].page_title+"</span></div>"
					}
				}
				
				$("#main>.content>.al_s>div").append(html);	
				
				var h_arr = [];
				$(".small").each(function(){
					var h = $(this).children("span").height();
					h_arr.push(h);
				})
				h_arr = h_arr.sort(sortNumber);
				$(".small span").height(h_arr[h_arr.length - 1]);
				
				$(window).resize(function(){
					var h_arr = [];
					$(".small").each(function(){
						var h = $(this).children("span").height();
						h_arr.push(h);
					})
					h_arr = h_arr.sort(sortNumber);
					$(".small span").height(h_arr[h_arr.length - 1]);
				})
				
				
				callback(count,totalPage);
			}
		});
	}
	
	
	//排序
	function sortNumber(a,b){
	   return a - b;
	}

	
	
})