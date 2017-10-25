$( document ).ready(function() {

	// visual

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

	// visual ENDS


	// semantic addons

		var solutions = 0; // how many integer solutions we get
		var plural = '(s)'; // adds plural if solutions are multiple

	// semantic addons ENDS


	// static variables

		var base = 10; // future versions

		var output = ''; // message content

	// static variables ENDS


	// do math

		function do_math() {

			// this function collects data from forms

			var X; // unknown width of a block

			var W = $('.form-w').val(); // totat width
			var B = $('.form-b').val(); // # of blocks
			var Mf = $('.form-mf').val(); // minimum size of a margin
			var Mt = $('.form-mt').val(); // maximum size of a margin

			var end = Mt; // end condition of the cycle

			$('.container').html(
			'<div class="small-12 columns spacer-16"></div>'
			); // clearing area

			// the cycle

				for (var i = end; i >= Mf; i--) {
					
					// MATH starts here

						X = (W - ((B - 1) * i)) / B;

					// MATH ends here

					if (X % 1 == 0) {

						solutions++;

						$('.container').append(
							'<div class="output small-12 columns"><p class="text-center">width: ' + X + 'px; margin: ' + i + 'px;</p></div>'
						);

					}					

				};

				$('.container').prepend(
					'<div class="small-12 columns spacer-32 show-for-small"></div>' + '<div class="small-12 columns"><p class="text-center">You have ' + solutions + ' possible solutions</p></div>'
				);

			// the cycle ENDS

		}

		$('.submit').click(function() {

			// pressing 'submit' button

			do_math(); // calculates data and posts it to the variable 'output'

		});

		$(document).keypress(function(e) {

			if(e.which == 13) {

				// pressing 'enter' key

				do_math(); // calculates data and posts it to the variable 'output'

			}

		});

	// do math ENDS



});