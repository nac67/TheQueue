document.addEventListener('DOMContentLoaded', function () {
  NATabTools.getTab(function (data) {
    var url = data.url,
    title = data.title;

    NAInterface.addPopListener(function() {
    alert("you pressed pop");
    });

    NAInterface.addPushListener(function() {
      alert("you pressed push");
    });

    NAInterface.setWebList([url,"b","c","d","e"]);
  });
  
});
