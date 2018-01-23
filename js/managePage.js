		
		var language = "en";
		var long = 3000; //5000
		var medium = 1000; //3000
		var short = 600; //600
		var smallContentSize = "2vw";
		var dedicateSize = "3vw";
		var score = 0;

		$("#lang-kh").click(function(){
			language = "kh";
			$("#lang-kh").animate({
				opacity: 1
			}, 100, function(){
				$("#lang-en").animate({
					opacity: 0.5
				}, 100);
			});

			$(".brunoace").css("font-family", "khmermuol");
			$(".advent").css("font-family", "akbalthomkhmerbasic");
			$(".josefin").css("font-family", "kantumruylight");
			$(".comfortaa").css("font-family", "khmeroswatphnom");

			$(".en").css("display", "none");
			$(".kh").css("display", "inline");
			document.getElementById("progNum").innerHTML = progressQ(testPage);
			document.getElementById("totalScore").innerHTML = progressQ(score);

		});

		$("#lang-en").click(function(){
			language = "en";
			$("#lang-en").animate({
				opacity: 1
			}, 100, function(){
				$("#lang-kh").animate({
					opacity: 0.5
				}, 100);
			});

			$(".brunoace").css("font-family", "brunoace");
			$(".advent").css("font-family", "advent");
			$(".josefin").css("font-family", "josefin");
			$(".comfortaa").css("font-family", "comfortaa");

			$(".kh").css("display", "none");
			$(".en").css("display", "inline");
			document.getElementById("progNum").innerHTML = progressQ(testPage);
			document.getElementById("totalScore").innerHTML = progressQ(score);
		});

		function chooseHome() {
			$("#the-eye").animate({
				opacity: '0.3'
			}, 1000);
			if (currentChosen == 2) {
				document.getElementById('test').classList.remove('active');
				$("#testpage").css("display", "none");

			} else if (currentChosen == 3) {
				document.getElementById('about').classList.remove('active');
				$("#aboutpage").css("display", "none");
				$(".bar").css("background-color", "black");

			} else if (currentChosen == 4) {
				document.getElementById('credit').classList.remove('active');
				$("#creditpage").css("display", "none");
				$(".bar").css("background-color", "black");
				// resetCreditPage();
				// clearInterval(idCredit);
			}
			if (document.getElementById("homepage5").style.display == "block") {
				$("#homepage5").css("display", "none");
				$("#homepage1").css("display", "block");
			}
			document.getElementById('home').classList.add('active');
			currentChosen = 1;

			$("#homepage").css("display", "block");
		}

		function chooseTest() {
			if (currentChosen == 1) {
				$("#the-eye").css("opacity", "0");
				document.getElementById('home').classList.remove('active');
				$("#homepage").css("display", "none");
			} else if (currentChosen == 3) {
				document.getElementById('about').classList.remove('active');
				$("#aboutpage").css("display", "none");
				$(".bar").css("background-color", "black");
			} else if (currentChosen == 4) {
				document.getElementById('credit').classList.remove('active');
				$("#creditpage").css("display", "none");
				$(".bar").css("background-color", "black");
				// resetCreditPage();
				// clearInterval(idCredit);
			}
			document.getElementById('test').classList.add('active');
			currentChosen = 2;
			$("#testpage").css("display", "block");
			//bodyContent.innerHTML = "";

		}

		function chooseAbout() {
			if (currentChosen == 1) {
				$("#the-eye").css("opacity", "0");
				document.getElementById('home').classList.remove('active');
				$("#homepage").css("display", "none");
			} else if (currentChosen == 2) {
				document.getElementById('test').classList.remove('active');
				$("#testpage").css("display", "none");
			} else if (currentChosen == 4) {
				document.getElementById('credit').classList.remove('active');
				$("#creditpage").css("display", "none");
				// alert(idCredit);
				// resetCreditPage();
				// clearInterval(idCredit);
			}

			$(".bar").css("background-color", "white");
			document.getElementById('about').classList.add('active');
			currentChosen = 3;
			//bodyContent.innerHTML = "";
			$("#aboutpage").css("display", "block");

		}

		function chooseCredit() {
			if (currentChosen == 1) {
				$("#the-eye").css("opacity", "0");
				document.getElementById('home').classList.remove('active');
				$("#homepage").css("display", "none");
			} else if (currentChosen == 3) {
				document.getElementById('about').classList.remove('active');
				$("#aboutpage").css("display", "none");
			} else if (currentChosen == 2) {
				document.getElementById('test').classList.remove('active');
				$("#testpage").css("display", "none");
			}

			$(".bar").css("background-color", "white");

			var i = 2;
			for (; i <= 9; i++) {
				$("#creditpage"+i).css("display", "none");
			}

			// resetCreditPage();

			// $("#creditpage1").css("display", "block");
			document.getElementById('credit').classList.add('active');
			currentChosen = 4;
			//bodyContent.innerHTML = "";
			$("#creditpage").css("display", "block");
			
			// timeIndex = 0;
			// creditIndex = 2;

			if (startCredit) {
				idCredit = setInterval(function(){
					changeCreditPage(creditIndex, (timeIndex++)*3000);
					if (creditIndex == 11) {
						creditIndex = 2;
					} else {
						creditIndex++;
					}
					
				}, 1200);
				startCredit = false;
			}

			// alert(idCredit);
			
		}


		function changeCreditPage(Index, time){
			setTimeout(function(){
				$("#creditpage"+Index).css("display", "block");
				setTimeout(function() {
					$("#creditpage"+Index+">a").animate({
				    	opacity: 0,
				    	left: "-=50vw",
				    }, short, function(){
				    	for (var l = 2; l <= 11; l++) {
				    		$("#creditpage"+l+"").css("display", "none");
				    	}
				    	$("#creditpage"+Index+">a").animate({
					    	opacity: 1,
					    	left: "+=50vw",
					    });
				    });
				}, long);
			}, time);
		}


		function changePage01() {
		    // $("#homepage1").fadeOut(medium, function(){});
		    $("#homepage1").animate({
		    	opacity: 0,
		    	left: "-=50vw",
		    }, short, function(){
		    	$("#homepage1").css("display", "none");
		    	$("#homepage1").animate({
			    	opacity: 1,
			    	left: "+=50vw",
			    });
		    });

			setTimeout(function() {
				$("#homepage2").css("display", "block");

				setTimeout(function() {
					// $("#homepage2").fadeOut(medium, function(){});
					$("#homepage2").animate({
				    	opacity: 0,
				    	left: "-=50vw",
				    }, short, function(){
				    	$("#homepage2").css("display", "none");
				    	$("#homepage2").animate({
					    	opacity: 1,
					    	left: "+=50vw",
					    });
				    });

					setTimeout(function() {
						$("#homepage3").css("display", "block");

						setTimeout(function() {
							$( "#homepage3" ).fadeOut( medium, function(){});

							setTimeout(function() {
								$("#homepage4").css("display", "block");

								setTimeout(function() {
									$( "#homepage4" ).fadeOut( medium, function() {});

									setTimeout(function() {
										$("#homepage5").css("display", "block");

									}, medium);

								}, long);

							}, medium);
							
						}, long);

					}, 1000);

				}, 2000);

			}, 1200);

		};
