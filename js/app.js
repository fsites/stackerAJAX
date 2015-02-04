$(document).ready(function() {
	$('.inspiration-getter').submit(function(event){
		//zero out results if previous search has run
		$('.results').html('');
		//get the value of tags submitted by user
		var tags = $('.inspiration-getter').find("input[name='answerers']").val();
		getAnswered(answerers);
	});
});

