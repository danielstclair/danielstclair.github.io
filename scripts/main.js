$( document ).ready(function() {
	$(function(){
		$(".typed").typed({
			strings: ["front-end developer.", "musician.", "design enthusiast."],
			typeSpeed: 50,
			backSpeed: 0,
			backDelay: 1000,
			loop: true,
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
	})
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').delay(150)
					.animate({
					scrollTop: target.offset().top
					}, 170);
					return false;
				}
			}
		});
	});



	var sections = $('section')
	, nav = $('nav')
	, nav_height = nav.outerHeight();

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		sections.each(function() {
			var top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').removeClass('active');
				sections.removeClass('active');

				$(this).addClass('active');
				nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
			}
		});
	})
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

	$(window).scroll(function(event){
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
		if(Math.abs(lastScrollTop - st) <= delta)
			return;
		if (st > lastScrollTop && st > navbarHeight){
			$('.fixed').addClass('nav-up');
		} else {
			if(st + $(window).height() < $(document).height()) {
				$('.fixed').removeClass('nav-up');
			}
		}
		lastScrollTop = st;
	}

	$('.slideshow div').hide();
	$('.slideshow div:first-child').show();
	$('.project-nav a:first-child').css('color', '#09B8AC');
	$('.project1').click(function(){
		if($('#project1').is(':visible')){
			return;
		}
		else if($('#project2').is(':visible')){
			$('#project2').hide();
			$('.project2').css('color', '#0F0F0F');
			$('#project1').show();
			$('.project1').css('color', '#09B8AC');
		}
		else{
			$('#project3').hide();
			$('.project3').css('color', '#0F0F0F');
			$('#project1').show();
			$('.project1').css('color', '#09B8AC');
		}
	})
	$('.project2').click(function(){
		if($('#project2').is(':visible')){
			return;
		}
		else if($('#project1').is(':visible')){
			$('#project1').hide();
			$('.project1').css('color', '#0F0F0F');
			$('#project2').show();
			$('.project2').css('color', '#09B8AC');
		}
		else{
			$('#project3').hide();
			$('.project3').css('color', '#0F0F0F');
			$('#project2').show();
			$('.project2').css('color', '#09B8AC');
		}
	})
	$('.project3').click(function(){
		if($('#project3').is(':visible')){
			return;
		}
		else if($('#project1').is(':visible')){
			$('#project1').hide();
			$('.project1').css('color', '#0F0F0F');
			$('#project3').show();
			$('.project3').css('color', '#09B8AC');
		}
		else{
			$('#project2').hide();
			$('.project2').css('color', '#0F0F0F');
			$('#project3').show();
			$('.project3').css('color', '#09B8AC');
		}
	})
});


