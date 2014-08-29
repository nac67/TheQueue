var NATabTools = {
  getTab: function (func) {
    chrome.tabs.getSelected(function(tab){
      func({
        url: tab.url,
        title: tab.title
      });
    });
  }
}