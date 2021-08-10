document.getElementById("smallA").onclick = function() { changeSize("small") };
document.getElementById("normalA").onclick = function() { changeSize("normal") };
document.getElementById("mediumA").onclick = function() { changeSize("medium") };
document.getElementById("largeA").onclick = function() { changeSize("large") };


function changeSize(size) {
    document.getElementsByTagName("section")[0].className = size
};