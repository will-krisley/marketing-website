$(function(){
	//menu mobile

	$('nav.mobile .btn-menu').click(function(){
		$('nav.mobile ul').slideToggle();
	})

	//scroll

	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':offSetTop})

		return false;
	})

	//mask

});
