$(document).on("touchstart", "#menu-toggle", function() {
    $("#left-nav").toggleClass("active");
});

$(document).on("mousemove", function(e) {
    $(".custom-cursor").css({
        left: e.clientX + "px",
        top: e.clientY + "px",
        transform: "translate(-50%, -50%) scale(1.2)"
    }).delay(50).queue(function(next) {
        $(this).css("transform", "translate(-50%, -50%) scale(1)");
        next();
    });
});
