if ("serviceWorker" in navigator) { 
  window.addEventListener("load", function() {   
    navigator.serviceWorker.register("/sw.js").then(
      function(registration) { 
        console.log("ServiceWorker registration successful with scope: ", registration.scope);
      }); 
  });
}

$(document).ready(function() {
  var $icons = $(".icon");
  $.each($icons, function() {
    $("img", $(this)).attr("src", "symbols/" + $("div", $(this)).text().replace(/ /g, "_") + ".svg");
  });
  
  $("#modal").on("shown.bs.modal", function(event){
    $(".modal-footer").html($(".icon__title", event.relatedTarget).text());
    $(".modal-body").html($("img", event.relatedTarget).clone().removeClass("icon__svg").addClass("img-fluid"));
  });
});