var theX;

		function viewSidebar(x) {
			theX = x;
	//	    x.classList.toggle("change");
		    $(".menuIcon").animate({
		    	width: 0
		    }, 300);
		}

		
			$ (".containerMenu").click(function(){
				// $ (".sidebar").animate({
				// 	width: "12vw"
				// }, 200);
				// $ (".brain").animate({
				// 	width: "5.7vw",
				// 	opacity: 1
				// }, 200);
				$ (".navigation").css("opacity", "0.8");
				$ (".navigation").css("display", "block");
				$ (".containerMenu").hide();
			});
			$ (".sidebar").hover(function(){
	//			theX.classList.toggle("change");
				$ (".navigation").stop();
				$ (".navigation").css("opacity", "0.8");
				// $ (".sidebar").animate({
				// 	width: 0
				// }, 200);
				// $ (".brain").animate({
				// 	opacity: 0,
				// 	width: 0
				// }, 200);
				// theX.classList.toggle("change");
			});

			$ (".sidebar").mouseleave(function(){
	//			theX.classList.toggle("change");
				
				// $ (".sidebar").animate({
				// 	width: 0
				// }, 200);
				// $ (".brain").animate({
				// 	opacity: 0,
				// 	width: 0
				// }, 200);
				$ (".navigation").animate({
					opacity: 0
				}, 1000, function(){
					$ (".navigation").css("display", "none");
					$ (".containerMenu").show();
				});
				
				// theX.classList.toggle("change");
			});
		

		$("#invert").click(function(){
			document.getElementById("ImTheBody").classList.toggle("invertEverything");
			document.getElementById("homepage3").classList.toggle("inverteverything");
			document.getElementById("homepage4").classList.toggle("inverteverything");
			document.getElementById("creditpage2").classList.toggle("inverteverything");
			document.getElementById("creditpage3").classList.toggle("inverteverything");
			document.getElementById("creditpage4").classList.toggle("inverteverything");
			document.getElementById("creditpage5").classList.toggle("inverteverything");
			document.getElementById("creditpage6").classList.toggle("inverteverything");
			document.getElementById("creditpage7").classList.toggle("inverteverything");
			document.getElementById("creditpage8").classList.toggle("inverteverything");
			document.getElementById("creditpage9").classList.toggle("inverteverything");
			document.getElementById("creditpage10").classList.toggle("inverteverything");
			document.getElementById("creditpage11").classList.toggle("inverteverything");
			document.getElementById("channimol").classList.toggle("inverteverything");
			document.getElementById("thyrith").classList.toggle("inverteverything");
			document.getElementById("sophearoth").classList.toggle("inverteverything");
			document.getElementById("sokkang").classList.toggle("inverteverything");
			document.getElementById("lang-kh").classList.toggle("inverteverything");
			document.getElementById("lang-en").classList.toggle("inverteverything");
			document.getElementById("the-eye").classList.toggle("inverteverything");
			document.getElementById("the-lids").classList.toggle("inverteverything");
		});