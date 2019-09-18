$(document).ready(function(){

   $('#load-content').load("/gd5569/nav.htm");

   $(".expanding-nav-overlay-button").click(function(){
     $(".expanding-nav-overlay, .expanding-nav-overlay-button").toggleClass("nav-open");
   });

});
