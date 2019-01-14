//SCROLL DOWN
$(document).ready(function(){
    $('.banner .common-btn').on('click',function(e){
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        },1500);
        e.preventDefault();
        return false;
    });
});

//INPUT
document.onchange = function(){
    var r = document.querySelectorAll('input[type="name"]');
    for(var i=0;i<r.length;i++){
        sup(r[i]);
    }
    function sup(p){
        if(p.value !== ''){
            p.classList.add('not-empty');
        }
        else{
            p.classList.remove('not-empty');
        }
    }
}

