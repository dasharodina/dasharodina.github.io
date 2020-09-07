var check = false;
var mywindow = $(window);
var mypos = mywindow.scrollTop();
mywindow.scroll(function() {
       if((mywindow.scrollTop() > mypos) || (check == true))
       {
           $('#stripe').fadeOut();
           check = false;
       }
       else
       {
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
  document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  check = true;
}
