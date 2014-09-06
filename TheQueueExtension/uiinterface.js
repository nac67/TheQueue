var NAInterface = (function () {
  var pop_btn = document.getElementById("pop_btn");
  var push_btn = document.getElementById("push_btn");
  var web_list = document.getElementById("web_list");

  return {
    addPopListener: function (callback) {
      pop_btn.onclick = callback;
    },

    addPushListener: function (callback) {
      push_btn.onclick = callback;
    },

    setWebList: function (web_array) {
      web_list.innerHTML = "";
      for(var i = 0; i < web_array.length; i++){
        web_list.innerHTML += "\n<option>"+web_array[i]+"</option>";
      }
    }
  }
})();