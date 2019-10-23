document.getElementById("addImageButton").addEventListener("click", addImage);
document.getElementById("sendNewsButton").addEventListener("click", sendNews);
var allNews = JSON.parse(localStorage.getItem("news"));
if (allNews == null) {
    allNews = [];
}

function addImage() {
    const input = document.querySelector("input[type=file]");
    const uploadedImage = document.getElementById("uploadedImage");
    if (input.files[0] != null) {
        uploadedImage.setAttribute("src", window.URL.createObjectURL(input.files[0]));
    }
    document.getElementById("addImageButton").blur();
}

function sendNews() {
    var newsImageSrc, newsTitle, newsBody;

    newsImageSrc = document.getElementById("uploadedImage").getAttribute("src");
    newsTitle = document.getElementById("newsTitle").value.trim();
    if (newsTitle === "" || newsTitle == null) {
        alert("News title is incorrect!");
        return;
    }
    newsBody = document.getElementById("newsBody").value.trim();
    if (newsBody === "" || newsBody == null) {
        alert("News body is incorrect!");
        return;
    }

    allNews.push({imgSrc: newsImageSrc, title: newsTitle, body: newsBody});
    localStorage.setItem("news", JSON.stringify(allNews));

    document.getElementById("newsTitle").value = "";
    document.getElementById("newsBody").value = "";
    document.getElementById("sendNewsButton").blur();
    alert("Successfully added!")
}
