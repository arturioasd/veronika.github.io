$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.filter__mobile').toggleClass('delete-element');
    })
})

$(document).ready(function(){
    $('.filter__mobile').click(function(event){
        $('.filter__title, .filter__body',).toggleClass('filter-swipe');
        $('.filter__mobile').toggleClass('filter-replace')
        $('body').toggleClass('lock');
    })
})

