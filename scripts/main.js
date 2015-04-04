$( document ).ready(function() {
	console.log('Check out the site repo here https://github.com/danielstclair/danielstclair.github.io');
	$(function(){
		$('.typed').typed({
			strings: ['design enthusiast.', 'musician.', 'front-end developer.'],
			typeSpeed: 50,
			backSpeed: 0,
			backDelay: 1000,
			loop: false,
			loopCount: false
		});
	});
	$('#menu').click(function(){
		$('.nav').toggleClass('open-nav');
		$(this).toggleClass('ion-navicon');
		$(this).toggleClass('ion-ios-close-empty');
		$('#nav-items').toggleClass('hide-nav');
	});
	$('li a').click(function(){
		$('.nav').toggleClass('open-nav');
		$('#menu').toggleClass('ion-navicon');
		$('#menu').toggleClass('ion-ios-close-empty');
		$('#nav-items').toggleClass('hide-nav');
	});
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').delay(150)
					.animate({
					scrollTop: target.offset().top
					}, 250);
					return false;
				}
			}
		});
	});



	var sections = $('section')
	, nav = $('nav')
	, outSize = nav.outerHeight();

	$(window).on('scroll', function () {
		var curPos = $(this).scrollTop();

		sections.each(function() {
			var top = $(this).offset().top - outSize,
			bottom = top + $(this).outerHeight();

			if (curPos >= top && curPos <= bottom) {
				nav.find('a').removeClass('active');
				sections.removeClass('active');

				$(this).addClass('active');
				nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
			}
		});
	});
	$(window).bind('scroll', function() {
		var navHeight = $( window ).height();
		if ($(window).scrollTop() > navHeight) {
			$('.nav').addClass('fixed');
			$('.about').addClass('push');
		}
		else {
			$('.nav').removeClass('fixed');
			$('.about').removeClass('push');
		}
	});
	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.fixed').outerHeight();

	$(window).scroll(function(){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 25);

	function hasScrolled() {
		var st = $(this).scrollTop();
		if(Math.abs(lastScrollTop - st) <= delta){
			return;
		}
		if (st > lastScrollTop && st > navbarHeight){
			$('.fixed').hide();
		} else {
			if(st + $(window).height() < $(document).height()) {
				$('.fixed').show();
			}
		}
		lastScrollTop = st;
	}
});


