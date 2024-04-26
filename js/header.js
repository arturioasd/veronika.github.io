$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header__filter').toggleClass('delete-element');
        $('.header__saved').toggleClass('delete-element')
    })
})

$(document).ready(function(){
    $('.header__filter').click(function(event){
        $('.filter__title, .filter__body',).toggleClass('filter-swipe');
        $('.header__filter').toggleClass('filter-replace')
        $('.header__burger').toggleClass('delete-element')
        $('.header__saved').toggleClass('delete-element')
        $('body').toggleClass('lock');
    })
})

