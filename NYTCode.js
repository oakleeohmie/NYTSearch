var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=UeINUwtwl3qcPvAUR4rfzLuqRpnqSafX"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    $("#run-search").click(function () {
        var searchTerm = $("#search-term").val().trim();
        var startYear = $("#start-year").val().trim();
        var endYear = $("#end-year").val().trim();
    });
});