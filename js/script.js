 
$(document).ready(function () {
    $(".tab_content").hide();
    $("ul.tabs li:first").addClass("active").show();
    $(".tab_content:first").show();

    //On Click Event
    $("ul.tabs li").click(function () {

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();

        var activeTab = $(this).find("a").attr("href");
            $(activeTab).fadeIn();
            return false;
        });

$(function(){
    $("#click").click(function(){
        $(".copyright").children(".hidden").slideToggle();
        $(".copyright").siblings().children(".hidden").slideUp();
    });
});

        
$(function(){
    $("#click").click(function(){
        $(this).toggleClass("turn");
            if($(this).hasClass("turn")===true){
                $(this).siblings().removeClass("turn");   
            }
    });
});

const subs = document.getElementById("click")
    subs.addEventListener("click", function() {
    if(subs.innerHTML === '사업자정보 접기<span></span>') {
        subs.innerHTML = '사업자정보 펼쳐보기<span></span>';
    } else subs.innerHTML ='사업자정보 접기<span></span>';
    });
});


$(function(){
	$(".title").click(function(){
		$(this).children(".answer").slideToggle();
		$(this).siblings().children(".answer").slideUp();
	});
});
$(function(){
	$(".title").click(function(){
		$(this).toggleClass("turn");
		
		if($(this).hasClass("turn")===true){
				$(this).siblings().removeClass("turn");
			
		}

	});
});

$(function(){
    var search_word = function(){
        setTimeout(function(){
            $('#search_word li:first').animate({marginTop: '-30px'}, 400, function(){
                $(this).detach().appendTo('ul#search_word').removeAttr('style');
            });
            search_word();
        }, 3000);
    };
    search_word();
});

