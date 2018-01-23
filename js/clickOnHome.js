
<!-- hide script from old browsers
var long = 1000; //5000
var medium = 1000; //3000
var smallContentSize = "2vw";
var dedicateSize = "3vw";

	var bodyContent = document.getElementById('body-content');
	
	setTimeout(function() {
		bodyContent.innerHTML = "" +
			"<div id=\"big-content\" class=\"row\" style=\"height: 9vw\">" +
				"<p id=\"page01\" class=\"content wow fadeInRight animated\" data-wow-delay=\"0ms\" data-wow-duration=\"2s\" onclick=\"changePage01()\">Are you a genius?</p>" +
			"</div>" +
			"<div id=\"small-content\" class=\"row\">" +
				"<div class=\"fadeIn animated wow col-xs-12 col-sm-11 col-md-11 col-lg-10\" data-wow-delay=\"500ms\" data-wow-duration=\"3s\" style=\"text-align: right\">" +
					"<p style=\"font-family: josefin; font-size: "+smallContentSize+"; color: black\">" +
						"Imagination is better than knowledge<br>" +
						"<p style=\"font-family: josefin; font-size: "+smallContentSize+"; color: black\" class=\"wow bounce animated\" data-wow-delay=\"3s\">~Albert Einstein</p>" +
					"</p>" +
				"</div>" +
			"</div>";
	}, 300);

	function changePage01() {
	    bodyContent.innerHTML = "" +
			"<div id=\"big-content\" class=\"row\">" +
				"<p id=\"page01\" class=\"content wow fadeOutLeft animated\" data-wow-delay=\"100ms\" data-wow-duration=\"2s\" >Are you a genius?</p>" +
			"</div>" +
			"<div id=\"small-content\" class=\"row\">" +
				"<div class=\"fadeOut animated wow col-xs-12 col-sm-11 col-md-11 col-lg-10\"  data-wow-duration=\"1s\" style=\"text-align: right\">" +
					"<p style=\"font-family: josefin; font-size: "+smallContentSize+"; color: black\">" +
						"Imagination is better than knowledge<br>" +
						"<p style=\"font-family: josefin; font-size: "+smallContentSize+"; color: black\" class=\"wow fadeOut animated\" data-wow-delay=\"3s\">~Albert Einstein</p>" +
					"</p>" +
				"</div>" +
			"</div>";
		setTimeout(function() {
			bodyContent.innerHTML = "" +
			"<div id=\"big-content\" class=\"row\">" +
				"<p class=\"wow fadeInRight animated\" data-wow-duration=\"1s\" style=\"color: black; font-size: "+dedicateSize+"; font-family: josefin\">Dedicate to</p>" +
			"</div>";

			setTimeout(function() {
				bodyContent.innerHTML = "" +
				"<div id=\"big-content\" class=\"row\">" +
					"<p class=\"wow fadeOutLeft animated\" data-wow-duration=\"1s\" style=\"color: black; font-size: "+dedicateSize+"; font-family: josefin\">Dedicate to</p>" +
				"</div>";

				setTimeout(function() {
					// bodyContent.style.display = 'inline';
					// bodyContent.style.padding = 0;
					// bodyContent.style.margin = 0;
					bodyContent.innerHTML = "" +
					"<div class=\"einstein container\" style=\"text-align: center;\">" +
						"<img id=\"einstein\" src=\"img/einstein.png\" class=\"wow animated fadeIn\" data-wow-duration=\"5s\" style=\"max-height: 700px; max-width: 830px; width: 100%; height: 100%\">" +
					"</div>";
					setTimeout(function() {
						$( ".einstein" ).fadeOut( medium, function() {
							setTimeout(function() {
								bodyContent.innerHTML = "" +
								"<div class=\"tesla container\" style=\"text-align: center;\">" +
									"<img id=\"tesla\" src=\"img/tesla.png\" class=\"wow animated fadeIn\" data-wow-duration=\"5s\" style=\"max-height: 700px; max-width: 830px; width: 100%; height: 100%\">" +
								"</div>";
								setTimeout(function() {
									$( ".tesla" ).fadeOut( medium, function() {
										//put the final here
									});

									setTimeout(function() {
										bodyContent.innerHTML = "" +
										"<div class=\"last_home container\" style=\"text-align: center;\">" +
											"<div class=\"click2Play row fadeIn animated wow\" data-wow-duration=\"2000ms\" data-wow-delay=\"1000ms\">" +
												"<div class=\"click2Play row pulse animated wow\" data-wow-duration=\"2000ms\" data-wow-delay=\"3000ms\">" +
													"<div class=\"click2Play row pulse animated wow\" data-wow-duration=\"2000ms\" data-wow-delay=\"6000ms\">" +
														"<div class=\"click2Play row pulse animated wow\" data-wow-duration=\"2000ms\" data-wow-delay=\"9000ms\">" +
															"<div class=\"click2Play row pulse animated wow\" data-wow-duration=\"2000ms\" data-wow-delay=\"12000ms\">" +
																"<div class=\"click2Play row pulse animated wow\" data-wow-duration=\"2000ms\" data-wow-delay=\"15000ms\">" +
																	"<div class=\"click2Play row pulse animated wow\" data-wow-duration=\"2000ms\" data-wow-delay=\"18000ms\">" +
																		"<div class=\"click2Play row pulse animated wow\" data-wow-duration=\"2000ms\" data-wow-delay=\"21000ms\">" +
																			"<div class=\"click2Play row pulse animated wow\" data-wow-duration=\"2000ms\" data-wow-delay=\"24000ms\">" +
																				"<p class=\"pulse animated wow\" data-wow-duration=\"1500ms\" data-wow-delay=\"27000ms\">Click to start IQ test</p>" +
																			"</div>" +
																		"</div>" +
																	"</div>" +
																"</div>" +
															"</div>" +
														"</div>" +
													"</div>" +
												"</div>" +
											"</div>" +
											"<img id=\"btn_play\" src=\"img/btn_play.png\" class=\"wow animated fadeIn\" data-wow-duration=\"5s\" style=\"margin-top: 10px; width: 7vw; height: 7vw\">" +
										"</div>";

									}, medium);

								}, long);

							}, 0);
						});
						
					}, long);

				}, 1000);

			}, 2000);

		}, 1200);

	};
// end hiding script from old browsers -->
