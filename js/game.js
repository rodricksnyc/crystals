$(document).ready(function() {

	crystals = ['img/red.png','img/blue.png','img/yellow.png','img/green.png'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);


	function newCrystals () {
		var numbers = [];
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random() * 12)
			  var rightAmount = false;
			  for (var i = 0; i < numbers.length; i++){
				if (numbers[i] === randomnumber){
					rightAmount = true;
					}
			  }
			  if(!rightAmount)numbers[numbers.length] = randomnumber;
			}
		console.log(numbers);

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
	}
	newCrystals();
	newGame();

	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max) {
		   	return Math.floor(Math.random() * ( max - min + 1) + min);
			}

		var numberToGuess = randomIntFromInterval(19,120);

		$('.value').text(numberToGuess);


		$('.crystalImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));

		    $('#yourScore').text(counter);

		    if (counter == numberToGuess) {
		      $('#status').text('You win!');
		      wins++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#crystals').empty();
		      newCrystals();
		      newGame();

		    } else if ( counter > numberToGuess) {
		        $('#status').text('You lose!')
		        losses++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#crystals').empty();
		        newCrystals();
		        newGame();
		    }
		});
	}

});
