// var i = 20;
				// function nextPage(){
				// 	$(".q"+ i).css("display", "none");
				// 	if (i==20){
				// 		i = 1;
				// 	} else {
				// 		i++;
				// 	}

				// 	document.getElementById("progNum").innerHTML = i+"/20";
				// 	$("#prog").animate({
				// 		width:  i*5 + "%"
				// 	}, 100);
				// 	// $("#prog").css("width", i*5 + "%");
				// 	$(".q"+ i).css("display", "block");
				// }


				// var i = 20;
				// function nextTestPage(/*el, ev*/){
				// 	// ev.preventDefault();
				// 	nextPage(/* el.data( 'animation' ) */);

				// 	// $(".q"+ i).css("display", "none");
					

					
				// 	// $("#prog").css("width", i*5 + "%");
				// 	// $(".q"+ i).css("display", "block");
				// }

				var testPage = 1;

				// function nextPage(/*options*/ ) {
				// 	// var animation = (options.animation) ? options.animation : options;

				// 	isAnimating = true;
					
				// 	var currPage = $(".q"+ testPage);

				// 	if (testPage==21){
				// 		testPage = 1;
				// 	} else {
				// 		testPage++;
				// 	}

				// 	if (testPage <= 20) {
				// 		document.getElementById("progNum").innerHTML = testPage+"/20";
				// 		$("#prog").animate({
				// 			width:  testPage*5 + "%"
				// 		}, 500);
				// 	}

				// 	var nextPage = $(".q"+ testPage);

				// 	currPage.animate({
				// 		top: "-=20vw",
				// 		opacity: 0,
				// 	}, 1000, function(){
				// 		currPage.animate({
				// 			top: "+=20vw",
				// 			opacity: 1
				// 		});
				// 		for (var k = 1; k <= 20; k++) {
				// 			$(".q" + k).css("display", "none");
				// 		}
				// 	});

				// 	// nextPage.addClass("fadeInUp animated");
					
				// 	setTimeout(function(){
				// 		nextPage.css("display", "block");
				// 	}, 1200);

				// 	// $nextPage.addClass( 'pt-page-moveFromBottom' );

				// }
				$(".btn-ans").keypress(function(e){
				   if(e.keyCode === 13){
				       e.preventDefault();
				   }
				});

				function progressQ(n) {
					if (language == "kh") {
						var kh = "";
						for(var i = 0; i < (""+n).length; i++) {
							switch ((""+n).charAt(i)) {
								case '1': kh += '១'; break;
								case '2': kh += '២'; break;
								case '3': kh += '៣'; break;
								case '4': kh += '៤'; break;
								case '5': kh += '៥'; break;
								case '6': kh += '៦'; break;
								case '7': kh += '៧'; break;
								case '8': kh += '៨'; break;
								case '9': kh += '៩'; break;
								case '0': kh += '០'; break;
								case '-': kh += '-'; break;
							}
						}
						return kh+"/២០";
					} else if (language == "en") {
						return n+"/20";
					}
				}

				function replay() {
					score = 0;
					arrScore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
					document.getElementById("ans1001").value = "";
					document.getElementById("ans2001").value = "";
					document.getElementById("ans1004").value = "";
					document.getElementById("ans1008").value = "";
					document.getElementById("ans1012").value = "";

					var currPage = $(".q"+ testPage);

					$("#divProgressBar").css("display", "block");
					$("#hint").css("display", "block");
					testPage = 1;

					var nextPage = $(".q"+ testPage);

					document.getElementById("progNum").innerHTML = progressQ(testPage);
					$("#prog").animate({
						width:  testPage*5 + "%"
					}, 500);

					currPage.animate({
						top: "-=20vw",
						opacity: 0,
					}, 1000, function(){
						for (var k = 1; k <= 20; k++) {
							$(".q" + k).css("display", "none");
						}
						currPage.css("display", "none");
						currPage.animate({
							top: "+=20vw",
							opacity: 1
						});
						
					});

					setTimeout(function(){
						nextPage.css("display", "block");
					}, 1200);
				}

				//answer 1

				$("#submit1").click(function(){


					if ($("#ans1001").val() == "" || $("#ans2001").val() == ""){
						// alert("Please input answers");
						if ($("#ans1001").val() == "") {

							$("#ans1001").css("animation", "styleAlert 1s ease");
						}
						if ($("#ans2001").val() == "") {

							$("#ans2001").css("animation", "styleAlert 1s ease");
						}
						setTimeout(function(){
							document.getElementById("ans1001").style.animation = "";
							document.getElementById("ans2001").style.animation = "";
						}, 1000);
					} else {
						if (($("#ans1001").val() == 22 && $("#ans2001").val() == 24)||($("#ans1001").val() == '២២' && $("#ans2001").val() == '២៤')) {
							correctAnswer();
						} else {
							wrongAnswer();
						}
					}
				});

				// function clearAnimation() {
					
				// 	// $(".q1").css("display", "none");
				// 	// $(".q1").css("display", "block");
				// }

				$('#ans1001').keypress(function(e){
			        if(e.keyCode==13)
			        $('#submit1').click();
			    });

			    $('#ans2001').keypress(function(e){
			        if(e.keyCode==13)
			        $('#submit1').click();
			    });

				//answer 2

				$("#ans21").click(function(){
					wrongAnswer();
				});

				$("#ans22").click(function(){
					wrongAnswer();
				});

				$("#ans23").click(function(){
					correctAnswer();
				});

				$("#ans24").click(function(){
					wrongAnswer();
				});

				$("#ans25").click(function(){
					wrongAnswer();
				});

				$("#ans26").click(function(){
					wrongAnswer();
				});

				//answer 3

				$("#ans31").click(function(){
					wrongAnswer();
				});

				$("#ans32").click(function(){
					correctAnswer();
				});

				$("#ans33").click(function(){
					wrongAnswer();
				});

				$("#ans34").click(function(){
					wrongAnswer();
				});

				$("#ans35").click(function(){
					wrongAnswer();
				});

				//answer 4

				$("#submit4").click(function(){
					if ($("#ans1004").val() == ""){
						// alert("Please input answers");
						$("#ans1004").css("animation", "styleAlert 1s ease");
						setTimeout(function(){
							document.getElementById("ans1004").style.animation = "";
						}, 1000);
					} else {
						if ($("#ans1004").val() == "G" || $("#ans1004").val() == "g") {
							correctAnswer();
						} else {
							wrongAnswer();
						}
					}
				});

				$('#ans1004').keypress(function(e){
			        if(e.keyCode==13)
			        	$('#submit4').click();
			        else {
			        	setTimeout(function(){
			        		$("#ans1004").val($("#ans1004").val().toUpperCase());
			        	});
			        }
			    });

				//answer 5

				$("#ans51").click(function(){
					wrongAnswer();
				});

				$("#ans52").click(function(){
					correctAnswer();
				});

				$("#ans53").click(function(){
					wrongAnswer();
				});

				$("#ans54").click(function(){
					wrongAnswer();
				});

				$("#ans55").click(function(){
					wrongAnswer();
				});

				//answer 6

				$("#ans61").click(function(){
					wrongAnswer();
				});

				$("#ans62").click(function(){
					wrongAnswer();
				});

				$("#ans63").click(function(){
					wrongAnswer();
				});

				$("#ans64").click(function(){
					wrongAnswer();
				});

				$("#ans65").click(function(){
					correctAnswer();
				});

				//answer 7

				$("#ans71").click(function(){
					wrongAnswer();
				});

				$("#ans72").click(function(){
					wrongAnswer();
				});

				$("#ans73").click(function(){
					wrongAnswer();
				});

				$("#ans74").click(function(){
					correctAnswer();
				});

				$("#ans75").click(function(){
					wrongAnswer();
				});

				//answer 8

				$("#submit8").click(function(){
					if ($("#ans1008").val() == ""){
						// alert("Please input answers");
						$("#ans1008").css("animation", "styleAlert 1s ease");
						setTimeout(function(){
							document.getElementById("ans1008").style.animation = "";
						}, 1000);
					} else {
						if ($("#ans1008").val() == 8 || $("#ans1008").val() == "៨") {
							correctAnswer();
						} else {
							wrongAnswer();
						}
					}
				});

				$('#ans1008').keypress(function(e){
			        if(e.keyCode==13)
			        $('#submit8').click();
			    });

				//answer 9

				$("#ans91").click(function(){
					wrongAnswer();
				});

				$("#ans92").click(function(){
					correctAnswer();
				});

				$("#ans93").click(function(){
					wrongAnswer();
				});

				$("#ans94").click(function(){
					wrongAnswer();
				});

				//answer 10

				$("#ans101").click(function(){
					wrongAnswer();
				});

				$("#ans102").click(function(){
					wrongAnswer();
				});

				$("#ans103").click(function(){
					wrongAnswer();
				});

				$("#ans104").click(function(){
					wrongAnswer();
				});

				$("#ans105").click(function(){
					wrongAnswer();
				});

				$("#ans106").click(function(){
					correctAnswer();
				});

				//answer 11

				$("#ans111").click(function(){
					wrongAnswer();
				});

				$("#ans112").click(function(){
					wrongAnswer();
				});

				$("#ans113").click(function(){
					correctAnswer();
				});

				$("#ans114").click(function(){
					wrongAnswer();
				});

				//answer 12

				$("#submit12").click(function(){
					if ($("#ans1012").val() == ""){
						// alert("Please input answers");
						$("#ans1012").css("animation", "styleAlert 1s ease");
						setTimeout(function(){
							document.getElementById("ans1012").style.animation = "";
						}, 1000);
					} else {
						if ($("#ans1012").val() == 18 || $("#ans1012").val() == "១៨") {
							correctAnswer();
						} else {
							wrongAnswer();
						}
					}
				});

				$('#ans1012').keypress(function(e){
			        if(e.keyCode==13)
			        $('#submit12').click();
			    });

				//answer 13

				$("#ans131").click(function(){
					correctAnswer();
				});

				$("#ans132").click(function(){
					wrongAnswer();
				});

				$("#ans133").click(function(){
					wrongAnswer();
				});

				$("#ans134").click(function(){
					wrongAnswer();
				});

				//answer 14

				$("#ans141").click(function(){
					wrongAnswer();
				});

				$("#ans142").click(function(){
					correctAnswer();
				});

				$("#ans143").click(function(){
					wrongAnswer();
				});

				$("#ans144").click(function(){
					wrongAnswer();
				});

				//answer 15

				$("#ans151").click(function(){
					wrongAnswer();
				});

				$("#ans152").click(function(){
					wrongAnswer();
				});

				$("#ans153").click(function(){
					correctAnswer();
				});

				$("#ans154").click(function(){
					wrongAnswer();
				});

				//answer 16

				$("#ans161").click(function(){
					wrongAnswer();
				});

				$("#ans162").click(function(){
					correctAnswer();
				});

				$("#ans163").click(function(){
					wrongAnswer();
				});

				$("#ans164").click(function(){
					wrongAnswer();
				});

				//answer 17

				$("#ans171").click(function(){
					wrongAnswer();
				});

				$("#ans172").click(function(){
					wrongAnswer();
				});

				$("#ans173").click(function(){
					wrongAnswer();
				});

				$("#ans174").click(function(){
					correctAnswer();
				});

				//answer 18

				$("#ans181").click(function(){
					wrongAnswer();
				});

				$("#ans182").click(function(){
					wrongAnswer();
				});

				$("#ans183").click(function(){
					correctAnswer();
				});

				$("#ans184").click(function(){
					wrongAnswer();
				});

				//answer 19

				$("#btn119").click(function(){
					correctAnswer();
				});

				$("#btn219").click(function(){
					wrongAnswer();
				});

				$("#btn319").click(function(){
					wrongAnswer();
				});

				$("#btn419").click(function(){
					wrongAnswer();
				});

				//answer 20

				$("#btn120").click(function(){
					wrongAnswer();
				});

				$("#btn220").click(function(){
					correctAnswer();
				});

				$("#btn320").click(function(){
					wrongAnswer();
				});

				$("#btn420").click(function(){
					wrongAnswer();
				});

				//replay

				$("#replay").click(function(){
					replay();
				});




				function wrongAnswer(){
					// alert("wrong");
					
					if (onHint) {
						$("#hint").css("width", "70px");
						$("#hintContent").removeClass("flipInY").addClass("flipOutY");

						setTimeout(function(){
							if (language == "en") {
								$(".kh").css("display", "none");
								$(".en").css("display", "inline");
								$("#hint").html("<span class=\"en\" style=\"display: inline\">hint -1</span><span class=\"kh\" style=\"display: none\">គន្លឹះ -១</span>");
							} else if (language == "kh") {
								$("#hint").html("<span class=\"en\" style=\"display: none\">hint -1</span><span class=\"kh\" style=\"display: inline\">គន្លឹះ -១</span>");
							}
							$("#hintContent").css("display", "none");
							$("#hintContent").removeClass("flipOutY");
						}, 500);
						onHint = false;
					}

					var currPage = $(".q"+ testPage);

					if (testPage==20){
						$("#divProgressBar").css("display", "none");
						$("#hint").css("display", "none");

					score = 0;
					for (var a = 0; a < 20; a ++) {
						score += arrScore[a];
					}

						document.getElementById("totalScore").innerHTML = progressQ(score);
						document.getElementById("recordScore").innerHTML = arrScore[0] + "  " + arrScore[1] + "  " + arrScore[2] + "  " + arrScore[3] + "  " + arrScore[4] + "  " + arrScore[5] + "  " + arrScore[6] + "  " + arrScore[7] + "  " + arrScore[8] + "  " + arrScore[9] + "  " + arrScore[10] + "  " + arrScore[11] + "  " + arrScore[12] + "  " + arrScore[13] + "  " + arrScore[14] + "  " + arrScore[15] + "  " + arrScore[16] + "  " + arrScore[17] + "  " + arrScore[18] + "  " + arrScore[19];

						testPage++;
					} else {
						testPage++;
					}

					if (testPage <= 20) {
						document.getElementById("progNum").innerHTML = progressQ(testPage);
						$("#prog").animate({
							width:  testPage*5 + "%"
						}, 500);
					}

					var nextPage = $(".q"+ testPage);

					var animationHeight = (Math.random() * 50) - 25;
					var animationWidth = ((Math.random()-0.5 > 0)?(1):(-1))* Math.sqrt(625 - (animationHeight*animationHeight));

					showImageIncorrect();

					currPage.animate({
						top: "-="+ animationHeight +"vw",
						left: "-="+ animationWidth +"vw",
						opacity: 0,
					}, 1000, function(){
						currPage.animate({
							top: "+="+ animationHeight +"vw",
							left: "+="+ animationWidth +"vw",
							opacity: 1
						});
						for (var k = 1; k <= 21; k++) {
							$(".q" + k).css("display", "none");
						}
					});

					// nextPage.addClass("fadeInUp animated");
					
					setTimeout(function(){
						nextPage.css("display", "block");
					}, 1200);
				}

				function correctAnswer(/*options*/ ) {
					// var animation = (options.animation) ? options.animation : options;

					if (onHint) {
						$("#hint").css("width", "70px");
						$("#hintContent").removeClass("flipInY").addClass("flipOutY");

						setTimeout(function(){
							if (language == "en") {
								$(".kh").css("display", "none");
								$(".en").css("display", "inline");
								$("#hint").html("<span class=\"en\" style=\"display: inline\">hint -1</span><span class=\"kh\" style=\"display: none\">គន្លឹះ -១</span>");
							} else if (language == "kh") {
								$("#hint").html("<span class=\"en\" style=\"display: none\">hint -1</span><span class=\"kh\" style=\"display: inline\">គន្លឹះ -១</span>");
							}
							$("#hintContent").css("display", "none");
							$("#hintContent").removeClass("flipOutY");
						}, 500);
						onHint = false;
					}

					if (arrScore[testPage-1] == 0) {
						score ++;
						// alert(score);
						arrScore[testPage-1] = 1;
					}
					
					var currPage = $(".q"+ testPage);

					score = 0;
					for (var a = 0; a < 20; a ++) {
						score += arrScore[a];
					}

					if (testPage==20){
						$("#divProgressBar").css("display", "none");
						$("#hint").css("display", "none");

						document.getElementById("totalScore").innerHTML = progressQ(score);
						document.getElementById("recordScore").innerHTML = arrScore[0] + "  " + arrScore[1] + "  " + arrScore[2] + "  " + arrScore[3] + "  " + arrScore[4] + "  " + arrScore[5] + "  " + arrScore[6] + "  " + arrScore[7] + "  " + arrScore[8] + "  " + arrScore[9] + "  " + arrScore[10] + "  " + arrScore[11] + "  " + arrScore[12] + "  " + arrScore[13] + "  " + arrScore[14] + "  " + arrScore[15] + "  " + arrScore[16] + "  " + arrScore[17] + "  " + arrScore[18] + "  " + arrScore[19];

						testPage++;
					} else {
						testPage++;
					}

					if (testPage <= 20) {
						document.getElementById("progNum").innerHTML = progressQ(testPage);
						$("#prog").animate({
							width:  testPage*5 + "%"
						}, 500);
					}

					var nextPage = $(".q"+ testPage);

					var animationHeight = (Math.random() * 50) - 25;
					var animationWidth = ((Math.random()-0.5 > 0)?(1):(-1))* Math.sqrt(625 - (animationHeight*animationHeight));

					showImageCorrect();

					currPage.animate({
						top: "-="+ animationHeight +"vw",
						left: "-="+ animationWidth +"vw",
						opacity: 0,
					}, 1000, function(){
						currPage.animate({
							top: "+="+ animationHeight +"vw",
							left: "+="+ animationWidth +"vw",
							opacity: 1
						});
						for (var k = 1; k <= 21; k++) {
							$(".q" + k).css("display", "none");
						}
					});

					// nextPage.addClass("fadeInUp animated");
					
					setTimeout(function(){
						nextPage.css("display", "block");
					}, 1200);

					// $nextPage.addClass( 'pt-page-moveFromBottom' );

				}

				$("#hint").click(function(){
					if (onHint) {
						$("#hint").css("width", "calc(40px + 1.7vw)");
						
						$("#hintContent").removeClass("flipInY").addClass("flipOutY");

						setTimeout(function(){
							if (language == "en") {
								$(".kh").css("display", "none");
								$(".en").css("display", "inline");
								$("#hint").html("<span class=\"en\" style=\"display: inline\">hint -1</span><span class=\"kh\" style=\"display: none\">គន្លឹះ -១</span>");
							} else if (language == "kh") {
								$("#hint").html("<span class=\"en\" style=\"display: none\">hint -1</span><span class=\"kh\" style=\"display: inline\">គន្លឹះ -១</span>");
							}
							$("#hintContent").css("display", "none");
							$("#hintContent").removeClass("flipOutY");
						}, 500);
						// $("#hintContent").css("display", "none");
						onHint = false;
					} else {
						// score--;
						arrScore[testPage-1] = -1;
						$("#hint").css("width", "calc(12px + 0.8vw)");
						$("#hint").html("X");
						$("#hintContent").removeClass("flipOutY").addClass("flipInY");
						$("#hintContent").css("display", "block");
						if (language == "en") {
							switch (testPage) {
								case 1:
									$("#hintContent").html("There are two interwoven sequences. Starting at 19, alternate numbers progress +2, +3, +4, +5. Starting at 20, alternate numbers progress +2, +4, +6, +8.");
									break;
								case 2:
									$("#hintContent").html("All the others are three-digit numbers followed by their square root, eg 361 followed by its square root, 19.");
									break;
								case 3:
									$("#hintContent").html("(6 x 9 + 8) = ...");
									break;
								case 4:
									$("#hintContent").html("Letter G");
									break;
								case 5:
									$("#hintContent").html("If Mary is currently 16, her brother is currently 16 divided by 4 = 4. This makes Mary 12 years older than her brother. So, Mary will be double her brother's age when he is 12.");
									break;
								case 6:
									$("#hintContent").html("Reversing the order of the letters in PEACH gives you HCAEP. So, reversing the numbers 46251 gives you 15264");
									break;
								case 7:
									$("#hintContent").html("The only animal without legs");
									break;
								case 8:
									$("#hintContent").html("1 covers the corner of 7<br>7 covers the top half of 6<br>"+
										"6 covers the top half of 3<br>3 covers the left half of 4<br>"+
										"4 covers the left half of 5<br>5 covers the bottom half of 2<br>2 covers the bottom half of ...");
									break;
								case 9:
									$("#hintContent").html("The pattern here is in columns. In each column, the difference between the top number and the middle number is the sum of the digits of the bottom number.");
									break;
								case 10:
									$("#hintContent").html("Each square is made up of 9 smaller grey squares. In each row of 3, if we add the purple shapes together all 9 of the smaller squares are filled. ");
									break;
								case 11:
									$("#hintContent").html("Rotate the first shape 180 degree and put it is the gap of the second shape");
									break;
								case 12:
									$("#hintContent").html("Multiply the bottom numbers to obtain the numbers at the top, albeit they are at the top of a different pyramid");
									break;
								case 13:
									$("#hintContent").html("If we look at suspects C and D we can see that they cannot BOTH be true because they contradict each other over whether suspect B cheated. Our first leap of logic then, is to see that: if either suspect C or suspect D has to be the liar, then statements A and B have to be TRUE. Taking statement A to be TRUE, we can see that suspects B and C did the same thing. The last step is to see that suspect C contradicts our last statement in that he states that suspects B and C did opposite things. So the LIAR is ...");
									break;
								case 14:
									$("#hintContent").html("The first person shook hands with 11 remaining people, the second person also shook hands with 11 people, but we count 10, as the hand shake with the first person has already been counted. The add 9 for the third person, 8 for the fourth one & proceeding in the fashion.");
									break;
								case 15:
									$("#hintContent").html("The letters present in 3rd, 6th, 9th... et (multiples of 3) position are repeated thrice");
									break;
								case 16:
									$("#hintContent").html("Each letter in the original word is forwared two places (+2) in the alphabetical order, to get the encrypted word.");
									break;
								case 17:
									$("#hintContent").html("How many birds that cannot fly away?");
									break;
								case 18:
									$("#hintContent").html("If not son of dad, it is son of ...");
									break;
								case 19:
									$("#hintContent").html("Each line moves 45 degree clockwise from top to bottom");
									break;
								case 20:
									$("#hintContent").html("An alphabet that can be both vertically symmetrical and horizontally symmetrical");
									break;
							}
						} else if (language == "kh") {
							switch (testPage) {
								case 1:
									$("#hintContent").html("មានលេខពីរបន្ទាប់គ្នា ផ្តើមពីលេខ១៩​ លេខកើនឆ្លាស់គ្នា +២, +៣, +៤, +៥។ ផ្តើមពីលេខ២០, លេខកើនឆ្លាស់គ្នា +២, +៤, +៦, +៨។");
									break;
								case 2:
									$("#hintContent").html("បីខ្ទង់ខាងមុខជាការ៉េនៃពីរខ្ទង់ខាងក្រោយ");
									break; 
								case 3:
									$("#hintContent").html("(៦ x ៩ + ៨) = ...");
									break;
								case 4:
									$("#hintContent").html("អក្សរ​ G");
									break;
								case 5:
									$("#hintContent").html("បើ ម៉ារី មានអាយុ ១៦ ឆ្នាំ, ប្អូនប្រសរបស់នាងមានអាយុ ១៦ ចែកនឹង ៤ = ៤​​ ។ ម៉ារី មានអាយុ​​ ១២ ឆ្នាំលើសប្អូនប្រុសនាង។ ដូច្នេះ ម៉ារី នឹងមានអាយុលើសប្អូនប្រុសនាងពីរឆ្នាំ នៅពេលគេអាយុ១២ឆ្នាំ។");
									break;
								case 6:
									$("#hintContent").html("លំដាប់បញ្ច្រាសនៃពាក្យ PEACH ទៅជា​ HCAEP. ដូច្នេះ លេខបញ្ច្រាសនៃលេខ​ ៤៦២៥១ ទៅជា ១៥២៦៤​​ ។");
									break;
								case 7:
									$("#hintContent").html("មានសត្វគ្មានជើងតែមួយគត់។");
									break;
								case 8:
									$("#hintContent").html("១ គ្របលើជ្រុងម្ខាងនៃ ៧<br>៧​ គ្របលើពាក់កណ្តាលផ្នែកលើរបស់ ៦<br>"+
										"៦ គ្របលើពាក់កណ្តាលផ្នែកខាងលើនៃ ៣<br>៣ គ្របលើពាក់កណ្តាលផ្នែកខាងឆ្វេងនៃ​ ៤<br>"+
										"៤ គ្របលើពាក់កណ្តាលផ្នៃកខាងឆ្វេងរបស់លេខ ៥<br>៥ គ្របលើពាក់កណ្តាលផ្នែកខាងក្រោមរបស់លេខ ២<br>២ គ្របលើពាក់កណ្តាលផ្នែកខាងក្រោមនៃ...");
									break;
								case 9:
									$("#hintContent").html("ក្នុងជួរដេកនីមួយៗ ភាពខុសគ្នារវាងលេខខាងលើ និងលេខកណ្តាលគឺជាផលបូកនៃតួរបស់លេខខាងក្រោម។");
									break;
								case 10:
									$("#hintContent").html("ការ៉េនីមួយៗផ្គុំដោយការ៉េតូចៗ៩ពណ៌ប្រផេះ។​ ក្នុងជួរឈរទាំង៣ បើយើងបន្ថែមការ៉េពណ៌ស្វាយចូលគ្នា");
									break;
								case 11:
									$("#hintContent").html("បង្វិលរួបទីមួយ ១៨០ដឺក្រ ហើយក្នុងចន្លោះរួបទីពីរ។");
									break;
								case 12:
									$("#hintContent").html("គុណតួលេខខាងក្រោមដើម្បីទទួលបានលេខនៅខាងលើ សូម្បីតែវានៅលើកំពូលពីរ៉ាមីតផ្សេងគ្នា។");
									break;
								case 13:
									$("#hintContent").html("ប្រសិនបើយើងមើលសម្តីរបស់ជនសង្ស័យ​ គ និង​ ឃ យើងឃើញថាពួកគេមិនអាចជាការពិតទេ ព្រោះវាប្រឆាំងគ្នា៕ តាមតក្កវិជ្ជា, ប្រសិនបើរវាង គ និង ឃ ជាអ្នកដែលកុហក នោះសម្តីរបស់ ក​ និង ខ ប្រាកដជាពិត។ បើ ក និយាយពិត យើងឃើញថា ជន ខ និង គ ធ្វើរឿងដូចគ្នា។ តែសម្តោះរបស់ គ ប្រឆាំងនឹង សម្តីរបស់ ឃ ដែលថា ជន ខ និង​​ គ ធ្វើរឿងផ្ទុយគ្នា ចឹងយើងអាចដឹងថា ជនសង្ស័យ ជា...។");
									break;
								case 14:
									$("#hintContent").html("អ្នកដំបូងចាប់ដៃ១១នាក់ផ្សេងទៀត, អ្នកទី២ក៏ចាប់ដៃ១១នាក់ផ្សេងទៀត, ប៉ុន្តែយើងរាប់១០ព្រោះអ្នកទី១ចាប់ដៃគាត់ម្តងហើយ។ បន្ទាប់មកបូកបន្ថែម៩ ចំពោះអ្នកទី៣ រួចបន្តដល់អ្នកចុងក្រោយ​។");
									break;
								case 15:
									$("#hintContent").html("អក្សរយកចេញពីទីតាំងដែលគុណនឹង៣ ហើយសរសេរដដែល៣ដង។");
									break;
								case 16:
									$("#hintContent").html("អក្សរដើមនីមួយៗត្រូវបានបន្ថែម(+២) ក្នុងលំដាប់ជួរអក្សរ​ ដើម្បីក្លាយជាពាក្យសម្ងាត់៕");
									break;
								case 17:
									$("#hintContent").html("ចំនួនសត្វដែលមិនអានហើរបាន");
									break;
								case 18:
									$("#hintContent").html("បើមិនមែនជាកូនរបស់ឳពុក នោះវាជាកូនរបស់...");
									break;
								case 19:
									$("#hintContent").html("បន្ទាត់នីមួយៗផ្លាស់ទី៤៥ដឺក្រេតាមទ្រនិចនាឡិកាពីលើចុះក្រោម");
									break;
								case 20:
									$("#hintContent").html("អក្សរដែលមានស៊ីមេទ្រីទាំងបញ្ឈរ និងផ្តេក។");
									break;
							}
						}
						onHint = true;
					}
					
					// switch (testPage) {
					// 	case: 1
					// }
					
				});

				function showImageCorrect(){
					var rand = Math.floor((Math.random() * 5)+1);
					document.getElementById("imageCorrect").innerHTML = "<img style=\"width: 100%; height: 100%\" src=\"img/correct" + rand +".png\">";

					$("#imageCorrect").css("display", "block");
					setTimeout(function(){
						$("#imageCorrect").css("display", "none");
					}, 1000);
				}

				function showImageIncorrect(){
					rand = Math.floor((Math.random() * 5)+1);
					document.getElementById("imageIncorrect").innerHTML = "<img style=\"width: 100%; height: 100%\" src=\"img/incorrect" + rand +".png\">";

					$("#imageIncorrect").css("display", "block");
					setTimeout(function(){
						$("#imageIncorrect").css("display", "none");
					}, 1000);
				}
