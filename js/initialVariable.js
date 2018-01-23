var currentChosen = 1;
		var creditIndex = 2;
		var timeIndex = 0;
		var idCredit;
		var startCredit = true;
		// var score = 0;
		var arrScore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var onHint = false;

		function resetCreditPage() {
			creditIndex = 2;
			timeIndex = 0;
			clearInterval(idCredit);
			alert(idCredit);
		}