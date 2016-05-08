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


});