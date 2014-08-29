function blah (data) {
  var txt = data.url;
  var a = document.getElementById("thisthing");
  a.innerHTML = txt;
}


document.addEventListener('DOMContentLoaded', function () {
  NATabTools.getTab(blah);
});
