$(function() {
  'use strict';

  /* CARUSEL */
	$('.carousel .carousel-item[data-src]').each(function() {
		var $this = $(this);

		$this.prepend([
			'<div style="background-image: url(', $this.attr('data-src'), ')"></div>'
		].join(''));
	});

  /* GALLERY */
  $(".filter-button").click(function(){
     var value = $(this).attr('data-filter');

     if(value == "all")
     {
         //$('.filter').removeClass('hidden');
         $('.filter').show('1000');
     }
     else
     {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
         $(".filter").not('.'+value).hide('3000');
         $('.filter').filter('.'+value).show('3000');

     }
 });

 if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");
});
