

$(document).ready(function () {
	
	$(window).on('load',function () {
	
	$('.cssload-container').fadeOut(1000, function () {
		
		
		$(this).parent().fadeOut(1000, function () {
			
			$(this).remove();
			
		});
	})
	
});

	
	new WOW().init();
	
	
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:2
			}
		}
	});
	
	$("body").niceScroll({
		
		zindex: 99999,
		touchbehavior: true,
		cursorfixedheight: 30,
		smoothscroll: true, 
	});
	
	//$('body').css('paddingTop', $('nav').innerHeight());
	
	$('#statistics .counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	// ADJUST COLOR PANEL WITH DYNAMIC DEPEND ON WINDOW , CONTAINER WIDTH ..
	var winWidth = $(window).innerWidth(),
		conWidth = $('.container').innerWidth(),
		colorPanelWidth = (winWidth - conWidth) / 2;
	
	$('.colorpanel').css({
		
		//'width': colorPanelWidth,
		'top': $('nav').innerHeight(),
	
	});
	
	
	// ADD DATA COLOR TO BODY ..
	$('.colorpanel ul li').click(function () {
		
		var liColor = $(this).data('color');
		
		$('.colorpanel ul li').css('border', 'none');
		
		$(this).css('border', '1px solid #fff')
		
		$('body').attr('data-default-color', liColor);
		
	});
	
	// ADJUST LEFT POSITION OF COLOR PANEL ..
	$('.colorpanel ul').css('left', -colorPanelWidth - 50);
	
	$(window).resize(function () {
		
		var winWidth = $(window).innerWidth(),
			conWidth = $('.container').innerWidth(),
			colorPanelWidth = (winWidth - conWidth) / 2;
		
		$('.colorpanel ul').css('left', -colorPanelWidth - 50);
		$('.colorpanel').css({
		
			//'width': colorPanelWidth,
			'top': $('nav').innerHeight(),
	
		});
		
	});
	
	var colorPanelUl = $('.colorpanel ul');
		
	// TO TOGGLE ACTIVE CLASS ON COLOR PANEL ...
	$('.colorpanel span').click(function () {
		
		$(colorPanelUl).toggleClass('actcolorul');
		
		if( $(colorPanelUl).hasClass('actcolorul') ) {
			
			$(colorPanelUl).animate({left: 0}, 500);
			$('#home .header').animate({marginLeft: colorPanelWidth}, 500);
		
	
		} else {
			
			$('.colorpanel ul').animate({left: -colorPanelWidth - 50}, 500);
			$('#home .header').animate({marginLeft: 0}, 500);
			
		}
		
		
	});
	
	// ADD ACTIVE STYLE ON LINKS ...
	
	$('.navbar-brand').click(function(e) {
		
		e.preventDefault();
	})
	
	$('nav .nav-link').click(function (e) {
		
		e.preventDefault();
		
		$('nav .nav-link').removeClass('activelink');
		$(this).addClass('activelink');
		
		console.log( $(this).attr('href') );
		
		var linkHref = $(this).attr('href');
		
		$('body, html').animate({
			
			scrollTop : $(linkHref).offset().top,
			
		}, 1000);
		
		
	});
	
	
	// SYNC LINKS WITH SECTIONS ...
	
	$(window).scroll(function () {
		
		//$('nav.navbar').css('boxShadow', '0 0 5px rgba(0, 0, 0, .5)');
		
		$('section').each(function () {
			
		if ( $(window).scrollTop() >= $(this).offset().top ) {
			
				var secId = '#' + $(this).attr('id');
			
				$('nav .nav-link').removeClass('activelink');
			
				$('nav .nav-link[href="' + secId + '"]').addClass('activelink');
			
			}
			
		});
		
	});

	
	var downArrowWidth = $('#home .down-arrow').innerWidth(),
		homeWidth = $('#home').innerWidth(),
		downArrow = $('#home .down-arrow'),
		downArrowDiffer = (homeWidth - downArrowWidth) / 2;
	
	$(downArrow).css('left', downArrowDiffer);
	
	$(window).on('resize', function () {
		
		var downArrowWidth = $('#home .down-arrow').innerWidth(),
			homeWidth = $('#home').innerWidth(),
			downArrow = $('#home .down-arrow'),
			downArrowDiffer = (homeWidth - downArrowWidth) / 2;
	
		$(downArrow).css('left', downArrowDiffer);
		
	});
	
	
	// GO TO ABOUT ME SECTION BY HOME BTN...
	$('#home .down-arrow').click(function () {
		
		$('body, html').animate({
			
			scrollTop : $('#about').offset().top,
			
		}, 1000)
		
	});
	
	// TO PREVENT SOCIAL ICON LINK ACTION ..
	$('#about .social-icon a').click(function (e) {
		
		e.preventDefault();
		
	});
	
	var AboutWidth = $('#about').innerWidth(),
		workWidth = $('#work').innerWidth(),
		PortWidth = $('#portfolio').innerWidth(),
		servicesBtn = $('#about .services-btn').innerWidth(),
		portfolioBtn = $('#work .portfolio-btn').innerWidth(),
		contactBtn = $('#portfolio .cont-us-btn').innerWidth(),
		servicesBtnDiffer = (AboutWidth - servicesBtn) / 2,
		portfolioBtnDiffer = (workWidth - portfolioBtn) / 2,
		contBtnDiffer = (PortWidth - contactBtn) / 2,
		searchIcon = $('#portfolio .port-item span').innerHeight() / 2;
	
	$('#about .services-btn').css('marginLeft', servicesBtnDiffer + 'px');
	$('#work .portfolio-btn').css('marginLeft', portfolioBtnDiffer + 'px');
	$('#portfolio .port-item span').css('top', - searchIcon + 'px');
	$('#portfolio .port-item span i').css('line-height', searchIcon * 2 + 'px');
	$('#portfolio .cont-us-btn').css('marginLeft', contBtnDiffer + 'px');

	
	$(window).on('resize', function () {
		
		var AboutWidth = $('#about').innerWidth(),
			workWidth = $('#work').innerWidth(),
			PortWidth = $('#portfolio').innerWidth(),
			servicesBtn = $('#about .services-btn').innerWidth(),
			portfolioBtn = $('#work .portfolio-btn').innerWidth(),
			contactBtn = $('#portfolio .cont-us-btn').innerWidth(),
			servicesBtnDiffer = (AboutWidth - servicesBtn) / 2,
			portfolioBtnDiffer = (workWidth - portfolioBtn) / 2,
			contBtnDiffer = (PortWidth - contactBtn) / 2,
			searchIcon = $('#portfolio .port-item span').innerHeight() / 2,
			portFocusHeight = $('#portfolio .port-focus').innerHeight(),
			portFocusWidth = $('#portfolio .port-focus').innerWidth(),
			portFocusImgHeight = $('#portfolio .port-focus .port-gallery').innerHeight(),
			portFocusImgWidth = $('#portfolio .port-focus .port-gallery').innerWidth(),
			portgalleryHeightDiffer = (portFocusHeight - portFocusImgHeight) / 2,
			portgalleryWidthDiffer = (portFocusWidth - portFocusImgWidth) / 2,
			imageThumbnailsWidth = $('.image-thumbnails').innerWidth(),
			createdImgLength = $('.image-thumbnails img').length,
			createdImgWidth = imageThumbnailsWidth / createdImgLength,
			portFocusSpan = $('#portfolio .port-focus span').innerHeight(),
			portFocusSpanDiffer = (portFocusHeight - portFocusSpan) / 2;
	
		$('#about .services-btn').css('marginLeft', servicesBtnDiffer + 'px');
		$('#work .portfolio-btn').css('marginLeft', portfolioBtnDiffer + 'px');
		$('#portfolio .port-item span').css('top', - searchIcon + 'px');
		$('#portfolio .port-item span i').css('lineHeight', searchIcon * 2 + 'px');
		$('#portfolio .cont-us-btn').css('marginLeft', contBtnDiffer + 'px');
		$('#portfolio .port-focus .port-gallery').css('top', portgalleryHeightDiffer + 'px');
		$('#portfolio .port-focus .port-gallery').css('left', portgalleryWidthDiffer + 'px');
		$('.port-img-created').css('width', createdImgWidth + 'px')
		$('#portfolio .port-focus span').css('top', portFocusSpanDiffer + 'px')

		
	});
	
	$('#about .services-btn').click(function () {
		
		$('html, body').animate({
			scrollTop : $('#work').offset().top
		}, 1000)
		
	});
	
	$('#work .portfolio-btn').click(function () {
		
		$('html, body').animate({
			scrollTop : $('#portfolio').offset().top
		}, 1000)
		
	});
	
	
	$('#portfolio ul li').click(function () {
		
		$('#portfolio ul li').removeClass('act-shuffle main-color');
		$(this).addClass('act-shuffle main-color');
		var portLiData = $(this).data('shuffle');
		
		
		if( $(this).data('shuffle') === 'all' ) {
			
			$('#portfolio .port-item').css('opacity', 1)
			
			
		} else {
			
			$('#portfolio .port-item').css('opacity', '.1');
			$(portLiData).css('opacity', 1)
			
		}
		
	});
	
	
	$('#portfolio .port-item span').click(function () {
		
		var portFocusImgSrc = $(this).parent().find('img').attr('src');
		
		$('#portfolio .port-focus').fadeIn(500);
			
		$('#portfolio .port-focus .port-gallery .master-img img').attr('src', portFocusImgSrc)
		$('#portfolio .image-thumbnails .port-img-created').css('opacity', '.2');
		
		$('#portfolio .image-thumbnails .port-img-created[src="'+ portFocusImgSrc +'"]').
		css('opacity',1).addClass('act-thumbnail');
			
		
		var portFocusHeight = $('#portfolio .port-focus').innerHeight(),
			portFocusWidth = $('#portfolio .port-focus').innerWidth(),
			portFocusImgHeight = $('#portfolio .port-focus .port-gallery').innerHeight(),
			portFocusImgWidth = $('#portfolio .port-focus .port-gallery').innerWidth(),
			imageThumbnailsWidth = $('.image-thumbnails').innerWidth(),
			createdImgLength = $('.image-thumbnails img').length,
			portFocusSpan = $('#portfolio .port-focus span').innerHeight(),
			portgalleryHeightDiffer = (portFocusHeight - portFocusImgHeight) / 2,
			portgalleryWidthDiffer = (portFocusWidth - portFocusImgWidth) / 2,
			createdImgWidth = imageThumbnailsWidth / createdImgLength,
			portFocusSpanDiffer = (portFocusHeight - portFocusSpan) / 2;
		$('#portfolio .port-focus .port-gallery').css('top', portgalleryHeightDiffer + 'px');
		$('#portfolio .port-focus .port-gallery').css('left', portgalleryWidthDiffer + 'px');
		$('.port-img-created').css('width', createdImgWidth + 'px');
		$('#portfolio .port-focus span').css('top', portFocusSpanDiffer + 'px')
		
	});
	
	
	
	$('#portfolio .port-focus').click(function () {
		
		$(this).fadeOut(500)
		
	});
	
	$('#portfolio .port-focus .port-gallery').click(function (e) {
		
		e.stopPropagation();
		
	});
	
	$(document).on('keydown', function(e) {
		
		if (e.keyCode === 27) {
			
			$('#portfolio .port-focus').fadeOut(500);
			
		}
		
	});
	
	
	$('#portfolio .port-item img').each(function () {
		
		var createImg = '<img class="port-img-created" src="'+ $(this).attr('src') + '" alt="img"/>';
	
		$('#portfolio .port-gallery .image-thumbnails').append(createImg);
		
	});
	
	
	$('#portfolio .image-thumbnails').on('click', '.port-img-created', function () {
		
		var createdImgSrc = $(this).attr('src');
		$('#portfolio .image-thumbnails .port-img-created').css('opacity', '.2');
		$(this).css('opacity', 1)
		$('#portfolio .port-gallery img').removeClass('act-thumbnail');
		$(this).addClass('act-thumbnail');
		$('#portfolio .port-gallery .master-img img').attr('src', createdImgSrc);
		
	});
	

	$('#portfolio .port-focus span.right-arrow').click(function (e) {
		e.stopPropagation();
		
		if( $('#portfolio .image-thumbnails img:last').hasClass('act-thumbnail') ) {
			
			$('#portfolio .image-thumbnails img:eq(0)').click();
			
		} else {
			
			$('#portfolio .image-thumbnails img.act-thumbnail').next().click();
			
		}
 		
	});
	
	$(document).on('keydown', function (e) {
		
		if( e.keyCode === 39  ) {
			
			if( $('#portfolio .image-thumbnails img:last').hasClass('act-thumbnail') ) {
			
				$('#portfolio .image-thumbnails img:eq(0)').click();
			
			} else {
			
				$('#portfolio .image-thumbnails img.act-thumbnail').next().click();
			
			}
			
		}
		
	});
	
	
	$('#portfolio .port-focus span.left-arrow').click(function (e) {
			e.stopPropagation();
			
			if( $('#portfolio .image-thumbnails img:eq(0)').hasClass('act-thumbnail') ) {
				
				
				$('#portfolio .image-thumbnails img:last').click();
				
			} else {
				
				$('#portfolio .image-thumbnails img.act-thumbnail').prev().click();
			}
 		
	});
	
	$(document).on('keydown', function (e) {
		
		if ( e.keyCode === 37 ) {
			
			if( $('#portfolio .image-thumbnails img:eq(0)').hasClass('act-thumbnail') ) {
				
				
				$('#portfolio .image-thumbnails img:last').click();
				
			} else {
				
				$('#portfolio .image-thumbnails img.act-thumbnail').prev().click();
			}
			
		}
		
	});
	
	$('#portfolio .cont-us-btn').click(function () {
		
		$('body, html').animate({
			scrollTop: $('#hireme').offset().top
		}, 1000)
		
	});
	
	
	$(window).scroll(function () {
		
		if( $(window).scrollTop() > 2000 ) {
			
			
			$('.scrolltop').fadeIn(500);
			
		} else {
			
			$('.scrolltop').fadeOut(500)
		}
		
	});
	
	$('.scrolltop').on('click', function () {
		
		$('body, html').animate({scrollTop: 0}, 1000)
		
	});
	
	
	$('.textlength').html('Remaining Characters Are ' + $('form textarea').
						  attr('maxlength') + ' Character.' )
	
	$('form textarea').on('keyup', function () {
		var remCharas =  $(this).val().length,
			remCharsLength = $(this).attr('maxlength') - remCharas;
		
		if (remCharsLength > 0) {
			
			$('.textlength').html('Remaining Characters Are ' + remCharsLength + ' Character.' )
				
		} else {
			
			$('.textlength').html('There Is No Remaining Characters' )
		}
	
	});
	
	
	var inputPlaceholder = '';
	
	
		
		$('form input, form textarea').focus(function () {
		
			inputPlaceholder = $(this).attr('placeholder');
		
			$(this).attr('placeholder', '');
		
		});
		
		$('form input, form textarea').blur(function () {
				
			$(this).attr('placeholder', inputPlaceholder);
		
		});	
		
	
	var loadingWidth = $('#loading').innerWidth(),
		loadingHeight = $('#loading').innerHeight(),
		spinnerWidth = $('.cssload-container').innerWidth(),
		spinnerHeight = $('.cssload-container').innerHeight(),
		spinnerHeightDiffer = (loadingHeight - spinnerHeight) / 2,
		spinnerWidthDiffer = (loadingWidth - spinnerWidth)/ 2;
	
	$('.cssload-container').delay('1s').css({'top':spinnerHeightDiffer, 'display':"block"});
	$('.cssload-container').delay('1s').css({'left':spinnerWidthDiffer, 'display':"block"});
	
	
	$(window).on('resize', function () {
		
		var loadingWidth = $('#loading').innerWidth(),
		loadingHeight = $('#loading').innerHeight(),
		spinnerWidth = $('.cssload-container').innerWidth(),
		spinnerHeight = $('.cssload-container').innerHeight(),
		spinnerHeightDiffer = (loadingHeight - spinnerHeight) / 2,
		spinnerWidthDiffer = (loadingWidth - spinnerWidth)/ 2;
	
		$('.cssload-container').delay('1s').css({'top':spinnerHeightDiffer, 'display':"block"});
		$('.cssload-container').delay('1s').css({'left':spinnerWidthDiffer, 'display':"block"});
		
	});
});


