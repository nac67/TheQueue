function blah (data) {
  var queue = Cookies.get("queue");
  if (queue === undefined) {
    queue = [];
  } else {
    queue = JSON.parse(queue);
  }
  queue.push(data.url);

  var queue_as_string = JSON.stringify(queue);
  Cookies.set("queue", queue_as_string);
  var a = document.getElementById("thisthing");
  a.innerHTML = queue_as_string;
}

document.addEventListener('DOMContentLoaded', function () {
  NATabTools.getTab(blah);
});
