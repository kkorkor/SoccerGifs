
var topics = ["Real Madrid","Barcelona","Chelsea","Juventus","Liverpool","Arsenal","Manchester United","Manchester City","Bayern Muinch","DC United",
 "PSG","AC Milan"];
var gif; 
var pausedGif; 
var stillGif;
var animatedGif; 


function createButtons(){
	$('#stButtons').empty();
	for(var i = 0; i < topics.length; i++) {
		var teamBtn = $('<button>').text(topics[i]).addClass('teamBtn').attr('data-name', topics[i]);
		$('#stButtons').append(teamBtn);
	}
}

$(document).on('click', '.teamBtn', function(){
		$('.display').empty();

		var socteams = $(this).attr('data-name');
		
		var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + socteams + "&api_key=pwsWqVJCSnqvzxAsVlL7boiSI19zv0oM&limit=10";
		$.ajax({url: giphyURL, method: 'GET'}).done(function(giphy){
			gif = giphy.data;
			console.log(gif)
			for
				$.each(gif, function(_index,value){
				animatedGif= value.images.original.url;
				pausedGif = value.images.original_still.url;
				var gifRating = value.rating;

				if (gifRating == ''){
					gifRating = 'unrated';
				}
				var rating = $('<h5>').html('Rated: '+ gifRating).addClass('ratingStyle');
				stillGif= $('<img>').attr('data-animated', animatedGif).attr('data-paused', pausedGif).attr('src', pausedGif).addClass('playOnHover');
				var fullGifDisplay = $('<button>').append(rating, stillGif);
				$('.display').append(fullGifDisplay);
			});
		});
	});

createButtons()
