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
});
