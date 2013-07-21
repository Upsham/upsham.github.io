
$('a[rel=tooltip]').tooltip({
	'placement': 'bottom'
});


$('.navbar a, .subnav a').smoothScroll();

/*** Remove scrollspy if screen is small  or resized ***/
if($(window).width() > 980){
	$('body').attr('data-target', '.subnav');

}else{
	$('body').attr('data-target', 'nothing');
}

$(window).resize(function() { 
	if($(window).width() > 980){
		$('body').attr('data-target', '.subnav');

	}else{
		$('body').attr('data-target', 'nothing');
	}
 });

/*** Sticky subnav bar, responsive based on screen size ***/
(function ($) {
	$(function(){
	

		// fix sub nav on scroll
		var $win = $(window),
				$body = $('body'),
				$nav = $('.subnav'),
				navHeight = $('.navbar').first().height(),
				subnavHeight = $('.subnav').first().height(),
				subnavTop = $('.subnav').length && $('.subnav').offset().top - navHeight,
				marginTop = parseInt($body.css('margin-top'), 10);
				isFixed = 0;


		processScroll();
		
			$win.on('scroll', processScroll);
		
		function processScroll() {
			var i, scrollTop = $win.scrollTop();
			//If on small screen sizes, don't try as it will cause jitter
			if ( $(window).width() > 980){
				if (scrollTop >= subnavTop && !isFixed) {
					isFixed = 1;
					$nav.addClass('subnav-fixed');
					$body.css('margin-top', marginTop + subnavHeight + 'px');
				} else if (scrollTop <= subnavTop && isFixed) {
					isFixed = 0;
					$nav.removeClass('subnav-fixed');
					$body.css('margin-top', marginTop + 'px');
				}
			}
		}

});

})(window.jQuery);