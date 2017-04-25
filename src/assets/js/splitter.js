$( document ).ready(function() {


	// highlight on focus

	$('.form-w').focus(function() {
		
		$('.subtitle').css('color', '#ccc');
		$('span.math-b').css('color', '#999');
		$('span.math-m').css('color', '#999');
		$('.text-b').css('color', '#ccc');
		$('.text-m').css('color', '#ccc');

	});

	$('.form-b').focus(function() {
		
		$('.subtitle').css('color', '#ccc');
		$('span.math-w').css('color', '#999');
		$('span.math-m').css('color', '#999');
		$('.text-w').css('color', '#ccc');
		$('.text-m').css('color', '#ccc');

	});

	$('.form-m').focus(function() {
		
		$('.subtitle').css('color', '#ccc');
		$('span.math-b').css('color', '#999');
		$('span.math-w').css('color', '#999');
		$('.text-b').css('color', '#ccc');
		$('.text-w').css('color', '#ccc');

	});


	// unhighlight on blur

	$('input').blur(function() {
		
		$('.subtitle').removeAttr('style');
		$('span.math-w').removeAttr('style');
		$('span.math-b').removeAttr('style');
		$('span.math-m').removeAttr('style');
		$('.text-w').removeAttr('style');
		$('.text-b').removeAttr('style');
		$('.text-m').removeAttr('style');

	});



});