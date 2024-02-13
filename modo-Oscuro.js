/* The code is using jQuery to add a click event listener to an element with the id "bt-modo-oscuro".
When that element is clicked, the code retrieves the "html" element using the jQuery selector
"$("html")". It then checks the value of the "data-bs-theme" attribute of the "html" element. If the
value is "dark", it sets the "theme" variable to "light", otherwise it sets it to "dark". Finally,
it sets the "data-bs-theme" attribute of the "html" element to the value of the "theme" variable.
This code is likely used to toggle between a light and dark theme on a website. */
$(document).ready(function() {
    $("#bt-modo-oscuro").click(function() {
        var html = $("html");
        var theme = html.attr("data-bs-theme") === "dark" ? "light" : "dark";
        html.attr("data-bs-theme", theme);
    });
});
