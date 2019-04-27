$(document).ready(function() {
  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on("click", function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function() {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top
        },
        600,
        function() {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });
});

function onScroll(event) {
  var scrollPosition = $(document).scrollTop();
  $("nav a").each(function() {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (
      refElement.position().top <= scrollPosition &&
      refElement.position().top + refElement.height() > scrollPosition
    ) {
      $("nav ul li a").removeClass("active");
      currentLink.addClass("active");
    } else {
      currentLink.removeClass("active");
    }
  });
}

//Mobile Navigation
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(window).resize(function() {
  if ($(window).width() > 910) {
    $("#myLinks").css("display", "block");
  }
});

// End Mobile Navigation
