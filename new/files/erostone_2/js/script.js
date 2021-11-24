
$(document).ready(function() {


  /* Smooth Scroll */
  $(function() {
    $('a[href*=#]:not([href=#callbackform]):not([href=#ps-popup-call]):not([href=#ps-popup-sale]):not([href=#created-block-0])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1200);
          return false;
        }
      }
    });
  });

  var d = new Date();
  $(".date-now").text(d.toLocaleString());


      $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency;
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });

	function getCookie(name) {
	    var matches = document.cookie.match(new RegExp(
	        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	    ))
	    return matches ? decodeURIComponent(matches[1]) : undefined
	}

	function randRange(data) {
	       var newTime = data[Math.floor(data.length * Math.random())];
	       return newTime;
	}

	function lastpack(numpack) {
	    var minNumPack = 3; // Минимальное количество упаковок
	    var lastClass = $('.lastpack'); // Объект
	    var numpackCookie = getCookie("lastpack");
	    var timeArray = new Array(2000, 13000, 15000, 7000, 6000, 11000);

	    if(numpackCookie == undefined) {
	        document.cookie = numpack;
	    } else {
	        var numpack =  numpackCookie;
	    }
	    if (numpack > minNumPack) {
	        numpack--;
	        document.cookie = "lastpack="+numpack;
	        lastClass.text(numpack);   
	    } else {
	        lastClass.text(minNumPack);
	    }
	    clearInterval(timer);
	    timer = setInterval(lastpack, randRange(timeArray), numpack);
	}

	var timer = setInterval(lastpack, 0, 40);
});