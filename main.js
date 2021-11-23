$(function () {
  $("li#description").css("display", "none");
});

function toggleDescription() {
  $("li#description").toggle();
}

$(function () {
  $("span#event-bolder").css("font-weight", "bolder");
});

$(function () {
  $("input#description, #agenda-form, #message").css("padding", "50px 50px");
});

$(function () {
  $("ul#ceo-info").css("margin-top", "70px");
});

$(function () {
  $("#submitbtn").on("click", function () {
    $("#hidden-form").text(
      "Thank you for your message. We'll get back to you as soon as possible!"
    );
  });
});
