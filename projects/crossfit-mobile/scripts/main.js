$(document).ready(function(){
	function fadeIns(){
		$("h3 span").each(function(i) {
			$(this).delay(i*1500).css({opacity: 0, visibility: "visible"}).animate({opacity: 1.0}, 1000);
		})
		$('.red-elite').delay(800).animate({color: '#FF4D4D'}, 800);
		$('nav').delay(3800).fadeIn(1000);
	}
	setTimeout(fadeIns, 1000);
	$('nav a').mouseover(function(){
		$(this).animate({color: '#FF4D4D', backgroundColor: 'rgba(255,255,255,0.3)', padding: '0 2em'}, 200);
	}).mouseout(function(){
		$(this).animate({color: '#fff', backgroundColor: 'rgba(255,255,255,0)', padding: '0'}, 200);
	});
	$('#about-link').click(function(){
		$('.main').addClass('overflow');
		$('.home-navs').fadeOut(500);
		$('.back').delay(500).fadeIn(500);
		$('.about').delay(500).fadeIn(500);
	})
	$('.back').click(function(){
		$('.main').removeClass('overflow');
		$('.home-navs').delay(500).fadeIn(500);
		$('.back').fadeOut(500);
		$('.about').fadeOut(500);
	})

})