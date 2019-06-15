function parpadeo(selector) {
    $(selector).animate({
        opacity: '0.50',
    },500,{
        step: function(){
            $(this).css('color','white');
        },
        queue: true
    })
    .animate({
        opacity: '0.50'
    },500,{
        
    })
}