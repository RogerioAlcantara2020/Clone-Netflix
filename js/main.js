$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function trailler_mostra(){
   $('#box-trailler').addClass('box-trailler');
   $('#box-trailler').show();
}

function trailler_esconde(){
    $('#box-trailler').hide();
}