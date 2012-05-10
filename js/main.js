$(document).ready(function(){

	$('.box-filter a').click(function(){
		var demo = $(this).text();
		$('a, .box-filter *').removeClass('current-filter');
		$(this).addClass('current-filter');

		switch (demo)
		{
			case "All":
				$('.box-selector-type-all').attr('checked', true);
			break;

			case "Projects":
				$('.box-selector-type-1').attr('checked', true);
			break;

			case "Contributions":
				$('.box-selector-type-2').attr('checked', true);
			break;

			case "Gists":
				$('.box-selector-type-3').attr('checked', true);
			break;

			case "Posts":
				$('.box-selector-type-4').attr('checked', true);
			break;
		}
	});	

});

var $headline = $('#headline').hide();

google.load('webfont','1');

google.setOnLoadCallback(function() {
	WebFont.load({
		google		: {
			families	: ['Montserrat','Concert One']
		},
		fontactive	: function(fontFamily, fontDescription) {
			init();
		},
		fontinactive	: function(fontFamily, fontDescription) {
			init();
		}
	});
});

function init() {
	$headline.show().arctext({radius: 400});
};