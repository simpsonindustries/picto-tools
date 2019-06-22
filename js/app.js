if ("serviceWorker" in navigator) { 
  window.addEventListener("load", function() {   
    navigator.serviceWorker.register("/js/sw.js").then(
      function(registration) { 
        // Registration was successful
        console.log("ServiceWorker registration successful with scope: ", registration.scope); }, 
      function(err) { 
        // registration failed :( 
        console.log("ServiceWorker registration failed: ", err); 
      }); 
  })
}

$(document).ready(function() {
    $(".icon").click(function(){
        $(".modal-footer").html($("div", this).text());
        $(".modal-body").html($("img", this).clone());
        $('#modal').modal('toggle');
    })
});