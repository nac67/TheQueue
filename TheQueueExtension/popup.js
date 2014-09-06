document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.getSelected(function (tab) {
    //tab: https://developer.chrome.com/extensions/tabs#type-Tab

    // updates the cookie and the UI with the specified queue
    var set_queue = function(queue) {
      var queue_as_string = JSON.stringify(queue);
      Cookies.set("queue", queue_as_string, { expires: 60 * 60 * 24 * 30 });
      NAInterface.setWebList(queue.map(function (tab) {
        return tab.title;
      }));
    };

    // queue is a list of tabs, ordered from oldest to newest
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
      chrome.tabs.create({url:current_item.url});
    });

    NAInterface.addPushListener(function() {
      queue.push(tab);
      set_queue(queue);
      chrome.tabs.remove(tab.id);
    });
  });
});
