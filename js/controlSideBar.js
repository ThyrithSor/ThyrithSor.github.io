var bodyContent = document.getElementById('body-content');
			
			// if(currentChosen == 0) {
			// 	chooseHome();
			// 	currentChosen = 1;
			// }


			$("#home").click(function(){
				if(currentChosen != 1) {
					chooseHome();
				}
			});

			$("#test").click(function(){
				if(currentChosen != 2) {
					chooseTest();
				}
			});

			$("#about").click(function(){
				if(currentChosen != 3) {
					chooseAbout();
				}
			});

			$("#credit").click(function(){
				if(currentChosen != 4) {
					chooseCredit();
				}
			});

			$("#more").click(function(){
				window.open("content/started.html");
			})