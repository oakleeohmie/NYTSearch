function buildQueryURL() {
    var searchTerm = $("#search-term").val().trim();
    var startYear = $("#start-year").val().trim();
    if (parseInt(startYear)) {
        startYear = startYear + "0101"
    };
    var endYear = $("#end-year").val().trim();
    if (parseInt(endYear)) {
        endYear = endYear + "0101"
    };
    var nytimes = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    var url = nytimes + "q=" + searchTerm + "&end_date=" + endYear + "&begin_date=" + startYear + "&api-key=UeINUwtwl3qcPvAUR4rfzLuqRpnqSafX";
    return (url);
};
function updatePage(NYTData) {
    var numArticles = $("#article-count").val();
    console.log(NYTData);
    for (i = 0; i < numArticles; i++) {
        var article = NYTData.response.docs[i];
        var articleCount = i + 1;
        var $articleList = $("<ul>");
        $articleList.addClass("list-group");
        $("#article-section").append($articleList);
        var headline = article.headline;
        var $articleListItem = $("<li class='list-group-item articleHeadline'>");
        if (headline && headline.main) {
            $articleListItem.append(
                "<span class='label label-primary'>" +
                articleCount +
                "</span>" +
                "<strong> " +
                headline.main +
                "</strong>"
            );
        }
        var byline = article.byline;

        if (byline && byline.original) {
            console.log(byline.original);
            $articleListItem.append("<h5>" + byline.original + "</h5>");
        }
        var section = article.section_name;
        console.log(article.section_name);
        if (section) {
            $articleListItem.append("<h5>Section: " + section + "</h5>");
        }
        var pubDate = article.pub_date;
        console.log(article.pub_date);
        if (pubDate) {
            $articleListItem.append("<h5>" + article.pub_date + "</h5>");
        }
        $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
        console.log(article.web_url);

        // Append the article
        $articleList.append($articleListItem);
    }
};

function clear() {
    $("#article-section").empty();
};
$('#run-search').on('click', function (event) {
    event.preventDefault();
    clear();
    var url = buildQueryURL();
    $.ajax({
        url: url,
        method: "GET"
    }).then(updatePage);
});

