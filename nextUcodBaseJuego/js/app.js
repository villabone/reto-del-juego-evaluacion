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
        step: function(){
            $(this).css('color','yellow');
        },
        queue: true
    },500)
    .animate({
        opacity: '0.50'
    }, {
        step: function () {
            $(this).css('color', 'white');
        },
        queue: true
    },500)
    .animate({
        opacity: '0.50'
    }, {
        step: function () {
            $(this).css('color', 'yellow');
            parpadeo('h1.main-titulo');
        },
        queue: true
    });
}