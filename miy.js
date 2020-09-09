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