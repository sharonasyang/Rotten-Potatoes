// chrome.runtime.onInstalled.addListener(function() {
//   chrome.contextMenus.create({
//     "id": "sampleContextMenu",
//     "title": "Sample Context Menu",
//     "contexts": ["selection"]
//   });
// });

// function searchMovieAPI()
// {
//  makeMovieRequest();
//  chrome.tabs.create({url:   "https://www.myapifilms.com/imdb/idIMDB?title=" + movieName + "&token=b195f179-9b26-43b2-9d5d-862f50c35050&format=json&language=en-us&trailers=1&filmingLocations=1"})
//  searchMovieAPI();
// }
//
// chrome.contextMenus.create({title: "Search Movie API", contexts:["selection"], onclick: searchMovieAPI});

function newInput() {
    var x = document.getElementById('movie-name').value,
        url = 'file:///C:/Users/gwc/Desktop/Python%20Project/testFinalProj.html?movie-name=' + x;
        url = url.replace(/ /g, "&");

    document.location.href = url;
}

// Get and display movie info
function makeMovieRequest() {
var url = document.location.href
var movieName = url.split("=").pop();
movieName = movieName.replace(/&/g, " ");
movieName = movieName.replace(/#/g, " ");

if (movieName === "") {
  alert("You didn't enter a movie name!");
  return;
} else {
  var query =
    "https://www.myapifilms.com/imdb/idIMDB?title=" + movieName + "&token=b195f179-9b26-43b2-9d5d-862f50c35050&format=json&language=en-us&trailers=1&filmingLocations=1"
  query = query.replace(/ /g, "+");

  request = new XMLHttpRequest();
  request.open("GET", query, true);
  request.onload = processMovieData;
  request.send();
}
}

function processMovieData() {
var movieTitle = JSON.parse(request.responseText);
var movieInfo = movieTitle.data.movies[0];

document.getElementById("showTitle").innerHTML = movieInfo.title;
document.getElementById("showTitle").classList.remove("hide");

document.getElementById("showInfo").innerHTML = "Rated: " + movieInfo.rated + ", " + movieInfo.runtime + ", " + "Released: " + movieInfo.year;
document.getElementById("showPoster").src = movieInfo.urlPoster;
document.getElementById("showPoster").classList.remove("hide");

document.getElementById("showSummary").innerHTML = movieInfo.simplePlot;

document.getElementById("showTrailer").src = movieInfo.trailer.qualities[0].videoURL;
document.getElementById("showTrailer").classList.remove("hide");

document.getElementById("showLocation").innerHTML = movieInfo.filmingLocations[0].location;

openMap();
}


// get map
function openMap() {
var movieAddress = document.getElementById("showLocation").innerHTML;
var movieName = document.getElementById("showTitle").innerHTML;

if (movieAddress === "q") {
  document.getElementById("googleMap").innerHTML = "Map Unavailable";
} else {

  var movieLocName = movieAddress
  movieLocName = movieLocName.split(" - ")[0];
  document.getElementById("trailerText").innerHTML = "Visit " + movieLocName + ", the filming location of this movie, if you liked watching " + movieName + "!";

  movieAddress = movieAddress.replace(/ - /g, ",");
  movieAddress = movieAddress.replace(/, /g, ",");
  movieAddress = movieAddress.replace(/ /g, "+");

document.getElementById("googleMap").src = "https://www.google.com/maps/embed/v1/place?q=" + movieAddress +  "&key=AIzaSyCHVB2GQRul-sTvAW8vzB0RFjJ5J7-90hY";
  }
}

// nav bar
function openHome() {
  document.location.href = "file:///C:/Users/gwc/Desktop/Python%20Project/home.html";
}
function openMovies() {
  document.location.href = "file:///C:/Users/gwc/Desktop/Python%20Project/home.html#page-Movies";
}
// BOTH GO HOME
function openReviews() {
  document.location.href = "file:///C:/Users/gwc/Desktop/Python%20Project/reviews.html";
}
function openAbout() {
  document.location.href = "file:///C:/Users/gwc/Desktop/Python%20Project/about.html";
}
