$(document).ready(function(){
	$('h1 p').click(function(){
		alert("this is a paragraph element");
	});
	$('h1').click(function() {
		$('p').fadeOut('slow');
	});

	$('#clickMe').click(function(){
		$('.top').toggleClass('transparent');
	});

	$('#scrollUp').click(function(){
		$('html, body').animate({scrollTop: 0}, 'slow');
	});

	$('.control').click(function(){
		$(this).next('.box').slideToggle();
	});

	$('#login-link').click(function(){
		$('#login-box').fadeIn();
	});
	$('#close').click(function(){
		$('#login-box').fadeOut();
	});

});