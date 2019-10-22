var allNews = [{imgSrc: "../img/neffexBestOfMe.jpg", title: "Title", body: "Body"}];
for (var i = 0; i < allNews.length; i++) {
    addNews(allNews[i].imgSrc, allNews[i].title, allNews[i].body);
}

function addNews(imgSrc, title, body) {
    const newsBlock = document.createElement("div");
    newsBlock.className = "col-sm-6 col-lg-4 mb-4";
    const card = document.createElement("div");
    card.className = "card shadow border-0 h-100";
    card.innerHTML = "<img src=\"" + imgSrc + "\" alt=\"News Image\" class=\"card-img-top p-2\">"
        + "<div class=\"card-body\"><h5 class=\"text-dark\">" + title + "</h5><p class=\"text-muted card-text\">"
        + body + "</p></div>";
    newsBlock.appendChild(card);

    document.getElementById("newsList").appendChild(newsBlock);
}
