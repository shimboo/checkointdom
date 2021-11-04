var button2 = document.getElementById("minus"),
    count = 0;
button2.addEventListener("click", function () {
    if (po.innerHTML <= 0) {
        return null
    }
    po.innerHTML--
});
///////////////////////
var button1 = document.getElementById("plus"),
    count = 0;
button1.addEventListener("click", function () {
    po.innerHTML++
});
//////////
var button3 =
    document.getElementById("reset");
button3.addEventListener("click", function () {
    po.innerHTML = 0;
});