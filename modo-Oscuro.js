$(document).ready(function() {
    $("bt-modo-oscuro").click(function() {
        var body = $("body");
        var theme = body.attr("data-bs-theme") === "dark" ? "light" : "dark";
        body.attr("data-bs-theme", theme);
    });
});
