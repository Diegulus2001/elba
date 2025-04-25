$(document).on("touchstart", "#menu-toggle", function () {
    $("#left-nav").toggleClass("active");
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

$(document).on("click", "#lang-toggle", function () {
    const currentLang = $("html").attr("lang");
    const newLang = currentLang === "es" ? "en" : "es";
    $("html").attr("lang", newLang);

    // # IMPORTANT -> Translatable elements must have an id that ends with "-trans" AND their own translations in the translations.js file
    $("[id$='-trans']").each(function () {
        const id = $(this).attr("id");
        $(this).text(translations[newLang][id]);
    });

    // Update lang flag
    const flagSrc = newLang === "es" ? "images/gb.svg" : "images/es.svg";
    $("#lang-toggle").attr("src", flagSrc);
});

// * Nav Menu
$(document).ready(function () {
    // Mostrar la sección correspondiente al enlace clickeado
    $("nav a").click(function (e) {
        e.preventDefault(); // Prevenir el comportamiento por defecto del enlace

        // Obtener el valor del atributo data-target
        var target = $(this).data("target");

        // Ocultar todas las secciones
        $(".content-section").hide();

        // Mostrar la sección correspondiente
        $("#" + target).show();
    });
});
