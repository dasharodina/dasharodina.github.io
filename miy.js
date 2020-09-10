//for stripe vanish while scrolling
var check = false;
var mywindow = $(window);
var mypos = mywindow.scrollTop();
mywindow.scroll(function() {
  if((mywindow.scrollTop() > mypos) || (check == true)){
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
//click on empty are close sidebar
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
  $('#menu').removeClass("animate__slideInDown").addClass("animate__slideOutUp");
  $('#stripe').hide();
  document.getElementById("html").style.overflowY = "hidden";
  //document.getElementById("wrapper").style.textOverflow = "clip";
  //document.getElementById("wrapper").style.marginLeft = "12.5em";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  $('#menu').removeClass("animate__slideOutUp").addClass("animate__slideInDown");
  $('#stripe').show();
    document.getElementById("html").style.overflowY = "visible";
  //document.getElementById("wrapper").style.marginLeft = "0em";
  document.body.style.backgroundColor = "white";
  check = true;
}

setTimeout(function (){
  $('div').removeClass("animate__slideInRight");
}, 1000);