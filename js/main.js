 $(function() { 
   $( "#slider-range" ).slider({ 
     range: true, 
     min: 1000, 
     max: 5000, 
     values: [ 2000, 4500 ], 
     slide: function( event, ui ) { 
       $( "#price-from" ).val(ui.values[ 0 ] + " " + "pуб."); 
       $( "#price-to" ).val(ui.values[ 1 ] + " " + "pуб."); 
       } 
     });
   $( "#price-from" ).val( $( "#slider-range" ).slider( "values", 0 )  + " " + "pуб.");
   $( "#price-to" ).val( $( "#slider-range" ).slider( "values", 01) + " " + "pуб.");
 });
 $(function() {
   $(".filters__btn").on("click", function(e){
        e.preventDefault();
   if ( $(window).width() < 600) {
      $(".filters__wrap").toggle();
    }else {
      $(".filters__wrap").show();
    }
   });
   $('[data-opener]').click(function() {
      $this = $(this);
      if($this.is('.is_active')) {
         $this.removeClass('is_active');
         $('[data-target="'+$this.data('opener')+'"]').removeClass('is_active');
      }else{
         $this.addClass('is_active');
         $('[data-target="'+$this.data('opener')+'"]').addClass('is_active');
      }
   });
});
 $(function() { 
  var item = $('.header__search').find('.search__wrap'),
      input = item.prev('.search__input');

   item.click(function (e) {
        e.preventDefault();
        input.addClass('active');
        if(input.hasClass('active')) {
           $('this').removeClass('active').show().css('width' , 'auto');
           item.unbind('click');
        }
    });
 });
 $(function() {
    $(document).on('click', function (e) {
       var $this = $(e.target);

       if (!$this.closest('.pulled-left').length) {
           $('.mobile_show').removeClass('is_active');
           $('.nav_mobile').removeClass('is_active');
       }
   });
 });
 $(function() {
     $('.product-slideshow__pic').on('click', function(e){
      e.preventDefault();
      var 
      $this = $(this),
      item = $this.closest('.product-slideshow__item'),
      container = $this.closest('.product-slideshow'),
      display = container.find('.product-slideshow__display'),
      path = item.find('img').attr('src'),
      duration = 300;

      if(!item.hasClass('active')) {
        item.addClass('active').siblings().removeClass('active');

        display.find('img').fadeOut(duration, function(){
          $(this).attr('src' , path).fadeIn(duration);
        });
      }
    });
 });
//  $(function() {
//   $(".fancybox-thumb").fancybox({
//     prevEffect  : 'none',
//     nextEffect  : 'none',
//     helpers : {
//       title : {
//         type: 'outside'
//       },
//       thumbs  : {
//         width : 50,
//         height  : 50
//       },
//       overlay : {
//           css : {
//               'background' : 'rgba(47, 50, 52, 0.6)'
//           }
//       }
//     }
//   });
// });
 $(function() {
    $('.order__quantity-minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
 });
     $('.order__quantity-plus').click(function () {
       var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
     // $('.order__quantity-plus').on('click',function(){
     //     var tot = $('.order__quantity-value').val() * this.value;
     //     $('.order__sum').val(tot);
     // });
 });
  $(function() {
    $(".slider").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
        speed: 400, //ms'
        auto: false,
        loop: true,
        slideEndAnimation: true,
        pause: 2000,
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
        rtl:false,
        adaptiveHeight:false,
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,
        thumbItem:10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
        enableTouch: false,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,
        responsive : [],
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });
  });
  $(function() { 
     $('.order__btn').click(function (e) {
        e.preventDefault();
        $this = $(this);
        $this.text('Оформить');
        $this.css({'padding' : "20px 27px"})
        $this.addClass('active');
        $('.product-order__text').hide();
        $('.product-order__hidden').addClass('active');

        if($this.hasClass('active')) {
           $this.attr('href', 'order.html');
           $this.unbind('click');
        }
     });
      $('.product-order__removeCart').click(function (e) {
        e.preventDefault()
        $this.text('Заказать');
        $this.css({'padding' : "20px 37px"})
        $('.product-order__text').show();
        $('.product-order__hidden').removeClass('active');
      });
  });
   $(function() { 
    $('.partner__img').on('click', function(){
         $(this).css({"filter":"grayscale(0)"});
    });
    
  });
    $(function() {
      $('.order__radio-elem').click(function () {
      
      if($('.order__radio_sender').is(':checked'))  {
        $('.order__delivery_sender').hide();
      }else {
        $('.order__delivery_sender').show();
      }
    });
      $('.order__radio-elem').click(function () {
      
      if($('.order__payment_online').is(':checked'))  {
        $('.order__payment-online').show();
      }else {
        $('.order__payment-online').hide();
      }
    });
  });
  $(function(){

  $("#datepicker").datepicker({
     monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
    'Октябрь', 'Ноябрь', 'Декабрь'],
     dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
     firstDay: 1,
  });
  $( "#alarm" ).timeDropper();
});
  // $(function(){ 
  //   var price = parseInt($('.product-order__number').text());
  //   $('.order__quantity-plus').click(function(){
  //     var quantity = parseInt($('.order__quantity-value').val());
  //     var newPrice = price*quantity;
  //   $('.product-order__number').text(newPrice);
  //   });
  //   $('.order__quantity-minus').click(function(){
  //     var quantity = parseInt($('.order__quantity-value').val());
  //     var newPrice = price*quantity;
  //     var minusPrice = (newPrice-price)+price;
  //   $('.product-order__number').text(minusPrice);
  //   });
  //   $('.order__quantity-value').keypress(function(){
  //     var quantity = parseInt($('.order__quantity-value').val());
  //     var newPrice = price*quantity;
  //     $('.product-order__number').text(newPrice);
  //   });
  // });
  $(function(){
    // var price = parseInt($('.order__price-number').text());
    //   $('.order__quantity-plus').click(function(){
    //   $this = $(this);
    //   var quantity = $this.parent().find('.order__quantity-value');
    //  quantity = parseInt($('.order__quantity-value').val());
    //   var newPrice = price*quantity;
    // $('.order__sum-number').text(newPrice);
    // });
    // $('.order__quantity-minus').click(function(){
    //   // var quantity = parseInt($('.order__quantity-value').val());
    //   var newPrice = price*quantity;
    //   var minusPrice = (newPrice-price)+price;
    // $('.order__sum-number').text(minusPrice);
    // });
    // $('.order__quantity-value').keypress(function(){
    //   var quantity = parseInt($('.order__quantity-value').val());
    //   var newPrice = price*quantity;
    //   $('.order__sum-number').text(newPrice);
    // });
     // $('.order__sum-number').change(function(){ 
     //   $('.price__number').text('.order__sum-number');
     // });
    // var  changedOrderPrice=0;
     $('.price-btn').on('click',function(){
        var $this = $(this),
            container = $this.closest('.price-wrap'),
            value = container.find('.price-value').val(),
            amount = container.find('.price-amount'),
            orderPrice = container.find('.price-order').text(),
            orderPriceVal = parseInt(orderPrice),
            orderPriceSum = container.find('.price-order-sum'),
            orderItemsPrice = $('.order-items-price'),
            priceData = amount.data('price'),
            deliveryPrice = $('.delivery-price'),
            orderTotalPrice= $('.order-total-price'),
            newPrice;

            if($this.hasClass('minus')) {
              newPrice = ((priceData*value)-priceData)+priceData;
              newOrderPrice = (( orderPriceVal*value)-orderPriceVal)+ orderPriceVal;
              
            }else {
              newPrice = value*priceData;
              newOrderPrice = value*orderPriceVal;
              // sum();
              // changedOrderPrice+=orderPriceSum;
            }

           amount.html(newPrice);
           orderPriceSum.html(newOrderPrice);
            // sum();
           // changedOrderPrice+=orderPriceSum;
           // orderItemsPrice.html(changedOrderPrice);
           // orderTotalPrice.html(deliveryPrice+orderItemsPrice);

     });
     // function sum() {
     //  var suma;
     //    $('.price-order-sum').each(function(){
     //      suma= parseInt($(this).text());
          
     //       // changedOrderPrice += 1000;
     //      console.log(suma);
     //    })
     //    changedOrderPrice+=suma;
        
     // }
    
  });