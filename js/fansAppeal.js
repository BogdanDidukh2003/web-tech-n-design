document.getElementById("sendButton").addEventListener("click", addAppeal);

function addAppeal() {
    const commentText = document.getElementById("commentSection").value.trim();
    if (commentText === "") {
        alert("Enter text in comment section!");
        return;
    }
    const commentBlock = document.createElement("div");
    commentBlock.className = "row shadow-sm mb-4";
    const userInfo = document.createElement("div");
    userInfo.className = "col-2 order-1";
    const comment = document.createElement("div");
    comment.className = "col-10 order-2";

    const nickname = prompt("Enter your nickname: ", "User").trim();
    if (nickname === "" || nickname == null) {
        alert("Nickname is incorrect!");
        return;
    }
    const time = new Date();
    userInfo.innerHTML = "<p>" + nickname + "</p>" + "<p>" + time.getHours() + ":"
        + (0 < time.getMinutes() < 10 ? "0" : "") + (time.getMinutes() === 0 ? "00" : "") + time.getMinutes()
        + "</p>" + "<p>" + time.getDate() + "." + (time.getMonth() + 1) + "." + time.getFullYear() + "</p>";
    comment.innerHTML = "<p>" + commentText + "</p>";

    commentBlock.appendChild(userInfo);
    commentBlock.appendChild(comment);

    document.getElementById("sendButton").blur();
    document.getElementById("commentSection").value = "";

    const referenceNode = document.querySelector('#commentForm');
    referenceNode.parentNode.insertBefore(commentBlock, referenceNode);
}

String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};
