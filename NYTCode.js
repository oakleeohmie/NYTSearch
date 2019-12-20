function buildQueryURL() {
    var searchTerm = $("#search-term").val().trim();
    var startYear = $("#start-year").val().trim();
    var endYear = $("#end-year").val().trim();
    var nytimes = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    var url = nytimes + "q=" + searchTerm + "&end_date=" + endYear + "&begin_date=" + startYear + "&api-key=UeINUwtwl3qcPvAUR4rfzLuqRpnqSafX";
    return (url);
};

function clear() {
    $("#article-section").empty();
};




$('#run-search').on('click', function () {
    event.preventDefault();
    clear();
    var url = buildQueryURL();
    console.log(url);
});

