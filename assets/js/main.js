// Preloader
$(document).ready(function(){
    $("#preloader").fadeOut();

    $("#btn-sidebar").on("click",function(){
        $("#sidebar").removeClass("hidden");
    });

    // $("#close-simple-modal").on("click",function(){
    //     $("#simpleModal").addClass("hidden");
    // });

    // $("#simple-modal").on("click",function(){
    //     $("#simpleModal").removeClass("hidden");
    // });

    $("[data-dismiss='modal']").click(function() {
        $("[data-modal='simpleModal']").addClass("hidden");
    });

    $("[data-modalButton='simple-modal']").click(function() {
        $("[data-modal='simpleModal']").removeClass("hidden");
    });

    $("[data-dismiss='modal']").click(function() {
        $("[data-modal='defaultModal']").addClass("hidden");
    });

    $("[data-modalButton='default-modal']").click(function() {
        $("[data-modal='defaultModal']").removeClass("hidden");
    });

    $("[data-dismiss='modal']").click(function() {
        $("[data-modal='lineModal']").addClass("hidden");
    });

    $("[data-modalButton='line-modal']").click(function() {
        $("[data-modal='lineModal']").removeClass("hidden");
    });
});

