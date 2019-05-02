var apiKey = "&api_key=pwsWqVJCSnqvzxAsVlL7boiSI19zv0oM"
var queryurl = "https://api.giphy.com/v1/gifs/search?" + apiKey;
var socteams;
var defaultteams = ["real madrid", "Barcelona", "chelsea fc", "Manchester United"]
var searchString;


// looping between the buttons and creating a button
function creatbuttons() {
	for (var i = 0; i < defaultteams.length; i++) {
		var defaultbutton = $("<button class='addedbtn' data-name =' " + defaultteams[i] + " '>" + defaultteams[i] + "</button>")
		$(".displaybtn").append(defaultbutton)
	}
}
creatbuttons()

$(document).on("click", ".addedbtn", function () {
	var nospaces= $(this).data("name").replace(/\s/g, "+")
	searchString = "&q=" + $(this).data("name").split(" ").join("+")
	console.log(nospaces)
	$.ajax({
		url: queryurl + searchString + "&limit=10",
		method: "GET"

	}).then(function (giphy) {
		console.log("query url: " + queryurl + searchString)
		//This is the source
		console.log(giphy.data[0])
		for (var i = 0; i < giphy.data.length; i++) {
			var gif = $("<img>").attr("src", giphy.data[i].images.downsized.url);
			$(".displayGif").prepend(gif)
		}
	})
})
