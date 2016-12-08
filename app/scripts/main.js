$('.header-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  navContainer: '.header-slider-navs',
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
});

$('.popular-items').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navContainer: '.popular-items-nav',
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  responsive:{
    0:{
      items:1
    },
    600:{
      items:2
    },
    1000:{
      items:4
    }
  }
});
$('.our-clients-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navContainer: '.our-clients-nav',
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:6
    }
  }
});
$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 3; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    loop: true,
    responsiveRefreshRate : 200,
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items : slidesPerPage,
      smartSpeed: 200,
      slideSpeed : 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate : 100
    }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);

    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();

    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});

$('#nomen').inputmask('AA-A9-9-99-999');
$(".nav-tabs-product-page a").on('click', function (e) {
  e.preventDefault();
  $('.nav-tabs-product-page a').removeClass('active');
  $(this).addClass('active');
})

$(document).on('click', '.checkbox-square-item', function (e) {
  if($(this).hasClass('active')){
    $(this).removeClass('active');
  }else{
    $(this).addClass('active');
  }

});
