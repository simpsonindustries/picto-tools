$(document).ready(function() {
if ("serviceWorker" in navigator) { 
  window.addEventListener("load", function() {   
    navigator.serviceWorker.register("/sw.js").then(
      function(registration) { 
        // Registration was successful
        console.log("ServiceWorker registration successful with scope: ", registration.scope); }, 
      function(err) { 
        // registration failed :( 
        console.log("ServiceWorker registration failed: ", err); 
      }); 
  })
}

    $(".icon").on("click tap", function(){
        $(".modal-footer").html($("div", this).text());
        $(".modal-body").html($("img", this).clone().removeClass("icon__svg").addClass("img-fluid"));
        $('#modal').modal('toggle');
    })
});