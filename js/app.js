$(document).ready(function() {
    $(".icon").click(function(){
        $(".modal-footer").html($("div", this).text());
        $(".modal-body").html($("img", this).clone());
        $('#modal').modal('toggle');
    });
});