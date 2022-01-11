if (localStorage.getItem("content") && localStorage.getItem("title")) {
    $("#content").val(localStorage.getItem("content"));
    $("#nameInput").val(localStorage.getItem("title"));
}

var lm = false;

document.addEventListener("keydown", evt => {
    if (!evt) evt = event;

    if (evt.ctrlKey && evt.keyCode == 83) {

        var blob = new Blob([document.getElementById("content").value], {type: "text/plain; charset=utf-8"});
        saveAs(blob, `${document.getElementById("nameInput").value}.txt`);
        evt.preventDefault();

    } else if (evt.ctrlKey && evt.keyCode == 76) {

        if (lm == false) {
            document.body.style.backgroundColor = "white";
            document.getElementById("content").style.color = "#202124";
            document.getElementById("content").style.backgroundColor = "white";
            document.getElementById("nameInput").style.color = "#202124";
            document.getElementById("nameInput").style.backgroundColor = "white";
            lm = true;

        } else {
            document.body.style.backgroundColor = "#202124";
            document.getElementById("content").style.color = "white";
            document.getElementById("content").style.backgroundColor = "#202124";
            document.getElementById("nameInput").style.color = "white";
            document.getElementById("nameInput").style.backgroundColor = "#202124";
            lm = false;
        }

        evt.preventDefault();

    } else if (evt.keyCode == 13 && $("#nameInput").is(":focus")) {
        $("#content").focus();
        evt.preventDefault();
    } else if (evt.keyCode == 8 && $("#content").is(":focus") && $("#content").val() == "") {
        $("#nameInput").focus();
        evt.preventDefault();
    }

});

document.addEventListener("change", evt => {
    localStorage.setItem("content", $("#content").val());
    localStorage.setItem("title", $("#nameInput").val());
});

function isCookie(name) {
    var list = document.cookie.split("; ")
    for (var i = 0; i < list.length; i++) {
        if (list[i].split("=")[0] == name) {
            return true
        }
    }
}

if (!isCookie("visited")) {
    alert("Welcome!\n\nUse Ctrl+S to save, and and Ctrl+L to toggle light and dark mode. Your work will stay in the editor even if you close the tab or your  browser.");
    document.cookie = "visited=true;secure";
}
