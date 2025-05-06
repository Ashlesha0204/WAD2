$(document).ready(function() {
    $("#updateBtn").click(function() {
        $("#content").fadeOut(500, function() {
            $(this).text("Text Updated with jQuery & CSS Effects!").fadeIn(500);
            $(this).css({
                "background": "#f8e71c",
                "color": "black",
                "padding": "15px"
            });
        });
    });
});