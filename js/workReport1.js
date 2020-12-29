var currentPage = 0;
var countPage = 0;
var currentId = 0;
var host = "http://www.zemso.com";

$(function () {
    searchAction(1);
        // $("pic").imgZoom();
    $(".pic1").click(function () {
        // 获取当前页码，-1 
        var pageNumber = currentPage - 1;
        if (pageNumber > 0) {
            searchAction(pageNumber);
        }
    })
    $(".pic2").click(function () {
        // 获取当前页码 +1
        var pageNumber = currentPage + 1;
        if (pageNumber <= countPage) {
            searchAction(pageNumber);
        }
    })
    $(".pic3").click(function () {
        searchAction(1);
    })
    $(".pic4").click(function () {
        if (currentId != 0) {
            window.location.href = host + "/ZEMSO_NEW/jobBrief/fileLoad?id=" + currentId;
        }
    })
})

//1. 鼠标点击分页跳转的时候搜索
//2. 加载完页面后调用一次
function searchAction(pageNumber) {
    $.ajax({
        type: "get",
        url: host + "/ZEMSO_NEW/jobBrief/jobBriefzx?pageNumber=" + pageNumber,
        success: function (data) {
            if (data.pageInfo.count != 0) {
                var count = data.pageInfo.count;// 总数量
                var pageSize = data.pageInfo.pageSize;// 每页大小
                var pageNo = data.pageInfo.pageNo;// 当前页
                currentPage = pageNo;
                currentId = data.pageInfo.list[0].id;
                var imgPath = data.pageInfo.list[0].page_content;
                // 置换图片路径
                $(".pic").attr({ src: host + imgPath }).appendTo(".content");
                // 改变页码样式
                // 分页
                $('#pageination').show();
                pagination(pageSize, pageNo, count);
            } else {
                //查询周报为空
            }
        }
    });
}

//分页
//perPage 每一页显示条数     current：当前第几页  totalCount 总记录数
function pagination(perPage, current, totalCount) {
    //设置表格总页数
    var totalPage = 0; //列表的总页数
    var pageSize = perPage;
    if (totalCount / pageSize > parseInt(totalCount / pageSize)) {
        totalPage = parseInt(totalCount / pageSize) + 1;
    } else {
        totalPage = parseInt(totalCount / pageSize);
    }
    countPage = totalPage;
    //生成当前的点击按钮
    createBtns(totalPage, current);
}
//生成点击按钮
//totalPages 分页的总页数
//current当前页
function createBtns(totalPages, current) {
    var tempStr = "";
    /*上一页按钮*/
    if (current > 1) {
        tempStr += "<span class='btn prev' onclick='btnClick(" + (current - 1) + ")' href=\"#\" data-page = " + (current - 1) + ">上一页</span>"
    }
    /*中间页码的显示*/
    /*如果总页数超出5个处理办法*/
    if (totalPages <= 5) {
        for (var pageIndex = 1; pageIndex < totalPages + 1; pageIndex++) {
            tempStr += "<a  class='btn page" + pageIndex + "' onclick='btnClick(" + pageIndex + ")' data-page = " + (pageIndex) + "><span>" + pageIndex + "</span></a>";
        }
    } else {
        if (current < 5) {
            for (var pageIndex = 1; pageIndex < 5; pageIndex++) {
                tempStr += "<a  class='btn page" + pageIndex + "' onclick='btnClick(" + pageIndex + ")'  data-page = " + (pageIndex) + "><span>" + pageIndex + "</span></a>";
            }
            tempStr += '<span>......</span>';
            tempStr += "<a  class='btn page" + totalPages + "' onclick='btnClick(" + totalPages + ")' data-page = " + (totalPages) + "><span>" + totalPages + "</span></a>";
        } else if (current >= totalPages - 4) {
            tempStr += "<a  class='btn page" + 1 + "' onclick='btnClick(" + 1 + ")'  data-page = " + (1) + "><span>" + 1 + "</span></a>";
            tempStr += '<span>......</span>';
            for (var pageIndex = totalPages - 4; pageIndex <= totalPages; pageIndex++) {
                tempStr += "<a  class='btn page" + pageIndex + "' onclick='btnClick(" + pageIndex + ")'  data-page = " + (pageIndex) + "><span>" + pageIndex + "</span></a>";
            }
        } else if (current >= 5 && current < totalPages - 4) {
            tempStr += "<a  class='btn page" + 1 + "' onclick='btnClick(" + 1 + ")'  data-page = " + (1) + "><span>" + 1 + "</span></a>";
            tempStr += '<span>......</span>';
            for (var pageIndex = current; pageIndex <= current + 4; pageIndex++) {
                tempStr += "<a  class='btn page" + pageIndex + "' onclick='btnClick(" + pageIndex + ")'  data-page = " + (pageIndex) + "><span>" + pageIndex + "</span></a>";
            }
            tempStr += '<span>......</span>';
            tempStr += "<a  class='btn page" + totalPages + "' onclick='btnClick(" + totalPages + ")'  data-page = " + (totalPages) + "><span>" + totalPages + "</span></a>";
        }
    }
    /*下一页按钮*/
    if (current < totalPages) {
        tempStr += "<span class='btn next' href=\"#\"  onclick='btnClick(" + (current + 1) + ")' data-page = " + (current + 1) + ">下一页</span>";
    }
    document.getElementById("pageination").innerHTML = tempStr;
    //对当前页码的样式做处理
    $('.page' + current).css({
        background: '#0449d4',
        color: '#fff'
    }).siblings().css({
        background: '#fff',
        color: '#999'
    });
}

function btnClick(param) {
    searchAction(param);
}
 
 
function bigit() {
    var image = document.getElementsByClassName("pic")[0];
    image.style.height = image.height*1.1 + 'px';
    image.style.width = image.width*1.1 + 'px';
}
function littleit() {
    var image = document.getElementsByClassName("pic")[0];
    image.style.height = image.height/1.1 + 'px';
    image.style.width = image.width/1.1 + 'px';
    $(".pic").css({ "margin": '0 auto' });
}