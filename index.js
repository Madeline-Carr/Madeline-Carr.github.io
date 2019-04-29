//Scroll Navigation
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
    // var height = $("#header").height();
    var targetOffset = $target.offset().top - 100;
    // console.log(height);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: targetOffset
          //$target.offset().top - 300
        },
        600,
        function() {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });
});

//Active Link Color
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
//End Scroll Navigation

//Mobile Navigation
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//This makes it so if you resize out of the mobile nav the list will show up.
//It also makes sure the list does not appear until you hit the icon on mobile devices.
$(window).resize(function() {
  if ($(window).width() > 910) {
    $("#myLinks").css("display", "block");
  } else {
    $("#myLinks").css("display", "none");
  }
});

// End Mobile Navigation
