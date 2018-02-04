$(document).ready(function(){
	console.log('Ready to burger!');
	$(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  });

  $('#burgerSubmit').click(function(e){
  	e.preventDefault();
  	
  	var order = {
  		burgerOrder: $('#burgerOrder').val().trim()	
  	};

  	$.ajax('/order/new',{
  		type: 'POST',
  		data: order
  	}).then(
  		function(){
	  		console.log('Order placed!');
	  		location.reload();
  	});
  });

});