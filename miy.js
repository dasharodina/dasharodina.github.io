function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
var mywindow = $(window);
var mypos = mywindow.scrollTop();
mywindow.scroll(function() {
       if(mywindow.scrollTop() > mypos)
       {
           $('#stripe').fadeOut();  
       }
       else
       {
           $('#stripe').fadeIn();
       }
       mypos = mywindow.scrollTop();
    });