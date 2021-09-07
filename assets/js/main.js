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

    $("[data-dismiss='modal']").click(function() {
        $("[data-modal='smallModal']").addClass("hidden");
    });

    $("[data-modalButton='small-modal']").click(function() {
        $("[data-modal='smallModal']").removeClass("hidden");
    });
    
    $("[data-dismiss='modal']").click(function() {
        $("[data-modal='mediumModal']").addClass("hidden");
    });

    $("[data-modalButton='medium-modal']").click(function() {
        $("[data-modal='mediumModal']").removeClass("hidden");
    });

    $("[data-dismiss='modal']").click(function() {
        $("[data-modal='largeModal']").addClass("hidden");
    });

    $("[data-modalButton='large-modal']").click(function() {
        $("[data-modal='largeModal']").removeClass("hidden");
    });

    $("[data-dismiss='modal']").click(function() {
        $("[data-modal='successModal']").addClass("hidden");
    });

    $("[data-modalButton='success-modal']").click(function() {
        $("[data-modal='successModal']").removeClass("hidden");
    });

    $("[data-dismiss='modal']").click(function() {
        $("[data-modal='dangerModal']").addClass("hidden");
    });

    $("[data-modalButton='danger-modal']").click(function() {
        $("[data-modal='dangerModal']").removeClass("hidden");
    });

    $("[data-dismiss='modal']").click(function() {
        $("[data-modal='warningModal']").addClass("hidden");
    });

    $("[data-modalButton='warning-modal']").click(function() {
        $("[data-modal='warningModal']").removeClass("hidden");
    });

    $("[data-dismiss='modal']").click(function() {
        $("[data-modal='infoModal']").addClass("hidden");
    });

    $("[data-modalButton='info-modal']").click(function() {
        $("[data-modal='infoModal']").removeClass("hidden");
    });

    $("[data-dismiss='modal']").click(function() {
        $("[data-modal='signupModal']").addClass("hidden");
    });

    $("[data-modalButton='signup-modal']").click(function() {
        $("[data-modal='signupModal']").removeClass("hidden");
    });

    $("[data-dismiss='modal']").click(function() {
        $("[data-modal='signinModal']").addClass("hidden");
    });

    $("[data-modalButton='signin-modal']").click(function() {
        $("[data-modal='signinModal']").removeClass("hidden");
    });
});
