$(function(){
	//菜单链接
	var aa = ['index.html','aboutZemso.html','productCenter.html','softwareDevelopment.html','customDesign.html','seikoManufacture.html','caseShow.html','newsCenter.html','joinZemso.html','contactUs.html']
	$(".mCSB_container>ul>li").each(function(i,el){
		$(this).click(function(){
			window.location.href = aa[i];
		})
	});
	
	
	$(".header>.right>ul>li").each(function(i,el){
		$(this).click(function(){
			window.location.href = aa[i];
		})
	})
})