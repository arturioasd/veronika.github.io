$(document).ready(function(){
    $('.section-filter__title').click(function(event){
        $(this).toggleClass('active').next().slideToggle(100)
    })
})