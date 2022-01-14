function getLink(movieNumber) {
  var name = document.getElementById("movie" + movieNumber).innerHTML;
  var url = 'file:///C:/Users/gwc/Desktop/Python%20Project/testFinalProj.html?movie-name=' + name;
  url = url.replace(/ /g, "&");

  document.location.href = url;
}
