$(document).ready(function () {
	var blockCard = $('.cards'),
			card = $('.price__card'),
			slide = $('.slider'),
			win = $(window),
			windowHeight = win.height();
	win.scroll(function () {
		var  scrollPos = $(this).scrollTop(),
				cardPos = blockCard.offset().top,
				slidePos = slide.offset().top;
		if(scrollPos >= cardPos - windowHeight) {
			card.addClass('animation');
		}
		if (scrollPos >= slidePos - windowHeight) {
			slide.addClass('animation');
		}
	});
});