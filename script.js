$(document).ready(function () {
    const menuToggle = $("#menu-toggle");
    const leftNav = $("#left-nav");
    const navLinks = $("#left-nav a");
    const mainContent = $("#main-content");

    // Toggle menu on button click
    menuToggle.on("click", function (e) {
        e.stopPropagation(); // Prevent click on button from immediately closing the menu
        leftNav.toggleClass("active");
    });

    // Close menu when a nav link is clicked
    navLinks.on("click", function () {
        leftNav.removeClass("active");
    });

    // Close menu when clicking outside the menu on mobile
    $(document).on("click touchstart", function (e) {
        if (leftNav.hasClass("active") && !$(e.target).closest("#left-nav").length && !$(e.target).is(menuToggle)) {
            leftNav.removeClass("active");
        }
    });

    // Prevent clicks inside the menu from closing it immediately
    leftNav.on("click touchstart", function (e) {
        e.stopPropagation();
    });

    $("nav a").click(function (e) {
        e.preventDefault();
        var target = $(this).data("target");
        $(".content-section").hide();
        $("#" + target).show();
    });
});

// * Custom Cursor
$(document).on("mousemove", function (e) {
    $(".custom-cursor").css({
        left: e.clientX + "px",
        top: e.clientY + "px",
        transform: "translate(-50%, -50%) scale(1.2)"
    }).delay(50).queue(function (next) {
        $(this).css("transform", "translate(-50%, -50%) scale(1)");
        next();
    });
});

// * Translations
$(document).ready(function () {
    const currentLang = $("html").attr("lang");
    $("[id$='-trans']").each(function () {
        const id = $(this).attr("id");
        $(this).text(translations[currentLang][id]);
    });
});

$(document).on("click", "#lang-toggle-trans", function () {
    const currentLang = $("html").attr("lang");
    const newLang = currentLang === "es" ? "en" : "es";
    $("html").attr("lang", newLang);

    // # IMPORTANT -> Translatable elements must have an id that ends with "-trans" AND their own translations in the translations.js file
    $("[id$='-trans']").each(function () {
        const id = $(this).attr("id");
        $(this).text(translations[newLang][id]);
    });
});