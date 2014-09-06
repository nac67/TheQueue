document.addEventListener('DOMContentLoaded', function () {
  NATabTools.getTab(function (data) {

    // updates the cookie and the UI with the specified queue
    var set_queue = function(queue) {
      var queue_as_string = JSON.stringify(queue);
      Cookies.set("queue", queue_as_string, { expires: 60 * 60 * 24 * 30 });
      NAInterface.setWebList(queue.map(function (data) {
        return data.title;
      }));
    };

    // queue is a list of objects with 'url' and 'title' properties,
    // ordered from oldest to newest
    var queue = Cookies.get("queue");
    if (queue === undefined) {
      queue = [];
    } else {
      queue = JSON.parse(queue);
    }
    set_queue(queue);

    NAInterface.addPopListener(function() {
      current_item = queue.shift();
      set_queue(queue);
      window.open(current_item.url);
    });

    NAInterface.addPushListener(function() {
      queue.push(data);
      set_queue(queue);
    });
  });
});
