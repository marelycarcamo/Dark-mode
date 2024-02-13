$(document).ready(function() {
    $("#bt-modo-oscuro").click(function() {
        var html = $("html");
        var theme = html.attr("data-bs-theme") === "dark" ? "light" : "dark";
        html.attr("data-bs-theme", theme);
    });
});
