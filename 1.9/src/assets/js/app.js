import $ from 'jquery';

import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

// Splitter v.1.9

	// DECLARATIONS

		var X; // unknown width of a block

		var W; // total width
		var B; // # of blocks
		var Mf; // minimum size of a margin
		var Mt; // maximum size of a margin

	// END DECLARATIONS

	$(document).ready(function() {

		// INPUT FUNCTIONS


			// Restore previous values

			function restore_inputs () {

				parse_variables();

				$('.form-w').val(W);
				$('.form-b').val(B);
				$('.form-mf').val(Mf);
				$('.form-mt').val(Mt);

			};

			// END


			// Check for illegal?

				// later on

			// END


			// Send values to localStorage, move to the next page

			function submit_inputs() {

				var W = $('.form-w').val();
				var B = $('.form-b').val();
				var Mf = $('.form-mf').val();
				var Mt = $('.form-mt').val();

				localStorage.setItem('SPLITTER_W', W);
				localStorage.setItem('SPLITTER_B', B);
				localStorage.setItem('SPLITTER_MF', Mf);
				localStorage.setItem('SPLITTER_MT', Mt);

			};

			// END


			// Clear inputs and localStorage

			function clear_inputs() {

				$('.form-w').val("");
				$('.form-b').val("");
				$('.form-mf').val("");
				$('.form-mt').val("");

				localStorage.clear();

			};

			// END


		// END INPUT FUNCTIONS


		// OUTPUT FUNCTIONS


			// Parse variables from localStorage

			function parse_variables() {

				window.W = W = parseFloat(localStorage.getItem('SPLITTER_W'));
				window.B = B = parseFloat(localStorage.getItem('SPLITTER_B'));
				window.Mf = Mf = parseFloat(localStorage.getItem('SPLITTER_MF'));
				window.Mt = Mt = parseFloat(localStorage.getItem('SPLITTER_MT'));				

			};

			// END


			// Do math. Build table.

			function do_math() {

				var end = Mt;

				for (var i = end; i >= Mf; i--) {

					X = (W - ((B - 1) * i)) / B;

					if (X % 1 == 0) {

						$('.tbody').append('<tr class="trow"><td class="td_block">' + X + '</td><td class="td_margin">' + i + '</td></tr>');

					};

				};


			};

			// END Do math. Build table.


		// END OUTPUT FUNCTIONS


		// TEST FUNCTIONS

			function chk_localStorage() {

				if (typeof localStorage !== 'undefined') {
    			
					$('.chk_localStorage').append('localStorage is defined');

				} else {
					
					$('.chk_localStorage').append('localStorage is NOT defined');

				}

			};

			function chk_jquery() {

				$('.chk_jquery').append('jQuery is fine ');

				// document.getElementById('chk_jquery_id').innerHTML='JavaScript: JavaScript is fine';

			};

		// END TEST FUNCTIONS




		// Core

			// Test

				// chk_localStorage();
				// chk_jquery();

			// END Test

			// if(window.location.href == "http://localhost:8000/input/") {
			if(window.location.pathname == "/splitter/1.9/input/") {

				// input functions

				restore_inputs();

				$('.clear_inputs').click(function() {

					clear_inputs();

				});

				$('.submit_inputs').click(function() {

					submit_inputs();

					window.location.href = "../output/";

				});

			// } else if (window.location.href == "http://localhost:8000/output/"){
			} else if (window.location.pathname == "/splitter/1.9/output/"){

				parse_variables();

				do_math();

				$('.restart').click(function() {

					clear_inputs();

					window.location.href = "../input/";

				});

				$('.logo').click(function() {

					window.location.href = "../input/";

				});

				$('.back_button').click(function() {

					window.location.href = "../input/";

				});

			} else {

			};

		// END Core
		
	});

// END Splitter v.1.9
