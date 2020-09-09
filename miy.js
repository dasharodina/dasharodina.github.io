var check = false;
var mywindow = $(window);
var mypos = mywindow.scrollTop();
mywindow.scroll(function() {
  if((mywindow.scrollTop() > mypos) || (check == true)) {
    $('#menu').removeClass("animate__slideInDown").addClass("animate__slideOutUp");
    $('#stripe').fadeOut();
    check = false;
  }
  else {
    $('#menu').removeClass("animate__slideOutUp").addClass("animate__slideInDown");
    $('#stripe').fadeIn();
  }
  mypos = mywindow.scrollTop();
});

jQuery(function($){
	$(document).mouseup(function (e){
		var div = $("#mySidenav");
		if (!div.is(e.target) && div.has(e.target).length == 0) {
			closeNav();
		}
	});
});

function openNav() {
  document.getElementById("mySidenav").style.width = "12.5em";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  check = true;
}

setTimeout(function (){
  $('div').removeClass("animate__slideInRight");
}, 1000);

$(function() {      
  //Enable swiping...
  $("body").swipe( {
    //Generic swipe handler for all directions
    swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
      openNav();
    },
  //Default is 75px, set to 0 for demo so any distance triggers swipe
  threshold:125
  });
});
$(function() {      
  //Enable swiping...
  $("body").swipe( {
    //Generic swipe handler for all directions
    swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
      closeNav();
    },
  //Default is 75px, set to 0 for demo so any distance triggers swipe
  threshold:125
  });
});