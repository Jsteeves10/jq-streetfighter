var cool=true;

$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	}).mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	}).mousedown(function() {
		playHadouken();
		$('.ryu-still').hide();
  	$('.ryu-ready').hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').finish().show().animate({'left': '300px'}, 500, function() {
			$(this).hide();
			$(this).css('left', '-212px');
  	});
  }).mouseup(function() {
  	$('.ryu-throwing').hide();
	  $('.ryu-ready').show();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 88 && cool == true) {
    	playCool();
    	$('.ryu-still').hide();
    	$('.ryu-ready').hide();
    	$('.ryu-cool').show();
    	$('.interact').text('Baller Status = Complete');
      cool = false;
    }   
  }).keyup(function(e) {
		if (e.keyCode == 88 && cool == false) {
  		$('.ryu-still').show();
  		$('.ryu-ready').hide();
  		$('.ryu-cool').hide();
    	$('.interact').text('Press X to turn Ryu into a baller');
      cool = true;
		}
	}); 
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};

function playCool () {
  console.log('test')
	$('#cool-sound')[0].volume = 0.1;
	$('#cool-sound')[0].load();	
	$('#cool-sound')[0].play();
}
