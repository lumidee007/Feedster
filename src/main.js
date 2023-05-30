$(document).ready(() => {
  // Adding Hover Functionality to the Navigation Menu
  $(".menu").on("mouseenter", () => {
    $(".nav-menu").show(1000);
  });
  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide(1000);
  });

  // Adding Hover Functionality to the +1 btn
  $(".btn")
    .on("mouseenter", (event) => {
      $(event.currentTarget).addClass("btn-hover");
    })
    .on("mouseleave", (event) => {
      $(event.currentTarget).removeClass("btn-hover");
    });

  // Adding user post to 50 Characters
  $(".postText").on("keyup", (event) => {
    let post = $(event.currentTarget).val();
    let remaining = 50 - post.length;
    $(".characters").text(remaining);
    if (remaining <= 0) {
      $(".wordcount").addClass("red");
      $(".postText").blur();
    } else {
      $(".wordcount").removeClass("red");
    }
  });
});
