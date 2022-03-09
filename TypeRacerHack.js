var arrSpan = document.querySelectorAll('[unselectable="on"]');
var fullSentence = '';
arrSpan.forEach(function (item) {
  fullSentence += item.innerHTML;
});

var index = 0;

function update() {
    if (index < fullSentence.length) {
    document.getElementsByClassName("txtInput")[0].value += fullSentence[index++];
}};

setInterval(update, 150);
