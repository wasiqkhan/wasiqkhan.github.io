$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".navigation").toggleClass("change");
  });
  $(".navigation a").click(function () {
    $(".hamburger-menu").click();
  });

  lightbox.option({
    showImageNumberLabel: false,
  });

  $(".e").click(function () {
    let value = $(this).attr("data-filter");
    if (value === "all") {
      $(".filter").show(300);
    } else {
      $(".filter")
        .not("." + value)
        .hide(300);
      $(".filter")
        .filter("." + value)
        .show(300);
    }
  });
  $(".d").click(function () {
    let value = $(this).attr("data-filte");
    if (value === "alll") {
      $(".filte").show(300);
    } else {
      $(".filte")
        .not("." + value)
        .hide(300);
      $(".filte")
        .filter("." + value)
        .show(300);
    }
  });
  $(".d").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(".e").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);
    if (position >= 2000) {
      $(".portfolio").addClass("change-back");
    } else {
      $(".portfolio").removeClass("change-back");
    }
  });
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);
    if (position >= 3050) {
      $(".skills-anim").addClass("change-line");
    } else {
      $(".skills-anim").removeClass("change-line");
    }
  });
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);
    if (position >= 1760) {
      $(".project").addClass("change-back");
    } else {
      $(".project").removeClass("change-back");
    }
  });
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);
    if (position >= 2900) {
      $(".skills-anim").addClass("change-back");
    } else {
      $(".skills-anim").removeClass("change-back");
    }
  });
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);
    if (position >= 135) {
      $(".about").addClass("change-back");
    } else {
      $(".about").removeClass("change-back");
    }
  });
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);
    if (position >= 1080) {
      $(".service").addClass("change-back");
    } else {
      $(".service").removeClass("change-back");
    }
  });
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    console.log(position);
    if (position >= 3400) {
      $(".contact").addClass("change-back");
    } else {
      $(".contact").removeClass("change-back");
    }
  });
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);
    if (position >= 220) {
      $(".about").addClass("change-back");
    } else {
      $(".about").removeClass("change-back");
    }
  });
});
$('#contact-form').submit(function(e) {
  e.preventDefault();

  $.ajax({
    url: 'https://formspree.io/mattwilliams85@gmail.com',
    method: 'POST',
    data: { message: $('form').serialize() },
    dataType: 'json'
  }).done(function(response) {
    $('#success').addClass('expand');
    $('#contact-form')
      .find('input[type=text], input[type=email], textarea')
      .val('');
  });
});

$('#close').click(function() {
  $('#success').removeClass('expand');
});

