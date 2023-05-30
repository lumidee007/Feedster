$(document).ready(() => {
  // Add Hover Functionality to the Navigation Menu
  $(".menu").on("mouseenter", () => {
    $(".nav-menu").show(1000);
  });
  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide(1000);
  });
});
