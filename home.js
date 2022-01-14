function homeInput() {
    var x = document.getElementById('movie-name').value,
        url = 'file:///C:/Users/gwc/Desktop/Python%20Project/testFinalProj.html?movie-name=' + x;
        x = x.replace(/ /g, "&");

    document.location.href = url;
}
