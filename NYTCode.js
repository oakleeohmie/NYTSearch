var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=UeINUwtwl3qcPvAUR4rfzLuqRpnqSafX"
$('#run-search').on('click', function () {
    event.preventDefault()
    var searchTerm = $("#search-term").val().trim();
    var startYear = $("#start-year").val().trim();
    var endYear = $("#end-year").val().trim();
    console.log(searchTerm);
    console.log(startYear);
    console.log(endYear);

});

