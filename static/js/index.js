window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    $('.results-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000
    });

    $('#rerender-slider').on('input', function(event) {
      updateImage(parseInt(this.value), '#rerender_grid1', 2274);
    });

    $('#shiny-slider').on('input', function(event) {
      updateImage(this.value, '#shiny_grid1', 880);
    });


    $('#soften-slider').on('input', function(event) {
      updateImage(this.value, '#soften_grid1', 878);
    });

    $('#time-slider').on('input', function(event) {
      updateImage((this.value + 85) % 99, '#time_grid1');
      updateImage((this.value + 85) % 99, '#time_grid2');
    });

    $('#fill-slider').on('input', function(event) {
      updateImage(this.value, '#fill_grid1');
      updateImage(this.value, '#fill_grid2');
    });

    $('#focal-slider').on('input', function(event) {
      updateImage(this.value, '#focal_grid1');
      updateImage(this.value, '#focal_grid2');
    });
    bulmaSlider.attach();

    updateImage($('#shiny-slider').val(), '#shiny_grid1');
    updateImage($('#shiny-slider').val(), '#shiny_grid2');
    updateImage(($('#azimuth-slider').val()+ 25) % 99, '#azimuth_grid1');
    updateImage(($('#azimuth-slider').val() + 25) % 99, '#azimuth_grid2');
    updateImage($('#soften-slider').val(), '#soften_grid1');
    updateImage($('#soften-slider').val(), '#soften_grid2');
    updateImage(($('#time-slider').val() + 85) % 99, '#time_grid1');
    updateImage(($('#time-slider').val() + 85) % 99, '#time_grid2');
    updateImage($('#fill-slider').val(), '#fill_grid1');
    updateImage($('#fill-slider').val(), '#fill_grid2');
    updateImage($('#focal-slider').val(), '#focal_grid1');
    updateImage($('#focal-slider').val(), '#focal_grid2');
})

window.onresize = function(){
    updateImage($('#shiny-slider').val(), '#shiny_grid1');
    updateImage($('#shiny-slider').val(), '#shiny_grid2');
    updateImage(($('#azimuth-slider').val()+ 25) % 99, '#azimuth_grid1');
    updateImage(($('#azimuth-slider').val() + 25) % 99, '#azimuth_grid2');
    updateImage($('#soften-slider').val(), '#soften_grid1');
    updateImage($('#soften-slider').val(), '#soften_grid2');
    updateImage(($('#time-slider').val() + 85) % 99, '#time_grid1');
    updateImage(($('#time-slider').val() + 85) % 99, '#time_grid2');
    updateImage($('#fill-slider').val(), '#fill_grid1');
    updateImage($('#fill-slider').val(), '#fill_grid2');
    updateImage($('#focal-slider').val(), '#focal_grid1');
    updateImage($('#focal-slider').val(), '#focal_grid2');
};


$(window).on("load", function(){
    updateImage($('#shiny-slider').val(), '#shiny_grid1');
    updateImage($('#shiny-slider').val(), '#shiny_grid2');
    updateImage(($('#azimuth-slider').val()+ 25) % 99, '#azimuth_grid1');
    updateImage(($('#azimuth-slider').val() + 25) % 99, '#azimuth_grid2');
    updateImage($('#soften-slider').val(), '#soften_grid1');
    updateImage($('#soften-slider').val(), '#soften_grid2');
    updateImage(($('#time-slider').val() + 85) % 99, '#time_grid1');
    updateImage(($('#time-slider').val() + 85) % 99, '#time_grid2');
    updateImage($('#fill-slider').val(), '#fill_grid1');
    updateImage($('#fill-slider').val(), '#fill_grid2');
    updateImage($('#focal-slider').val(), '#focal_grid1');
    updateImage($('#focal-slider').val(), '#focal_grid2');
    // Reset gifs once everything is loaded to synchronize playback.
    $('.preload').attr('src', function(i, a){
        $(this).attr('src','').removeClass('preload').attr('src', a);
    });

    $('.author-portrait').each(function() {
      $(this).mouseover(function() {
          $(this).find('.depth').css('top', '-100%');
          $(this).find('.sbs').css('top', '-100%');
      });
      $(this).mouseout(function() {
          $(this).find('.depth').css('top', '0%');
          $(this).find('.sbs').css('top', '0%');
      });
    });
});

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};


function updateImage(value, tag, max_size) {
  //$(tag).height(Math.round($(tag).height()))
  width = $(tag)[0].getBoundingClientRect().width
  naturalwidth= $(tag)[0].naturalWidth;
  num_images = naturalwidth/max_size;
  console.log(naturalwidth);
  let left = value * width / num_images;
  $(tag).css('left', -left + 'px');
}
