/**
 * Menu
 */
 $("a.menu-icon").on("click", function (event) {
    var w = $(".menu");
  
    w.css({
      display: w.css("display") === "none" ? "block" : "none",
    });
  });
  