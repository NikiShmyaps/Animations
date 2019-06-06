$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$('#up').fadeIn();
		}
		else {
			$('#up').fadeOut();
		}
	});
	$('#up').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});