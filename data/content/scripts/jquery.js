$(document).ready(function(){
 $("html").fadeIn(150);
 $(".title1").click(function(){
          $("html").fadeOut(150);
          location.reload();
	                         });
 $(".title1").load($(".title1").fadeIn(1500));
 $(".title2").fadeOut(0);
 $(".title2").load($(".title2").fadeIn(1500));
   $("#driverBtn").click(function(){
    $("div.content").fadeOut(150);
    $("#drivers").delay(150).fadeIn(150);
  });
   $("span.close").click(function(){
    window.close();
	});
	  $(".close").hover(function(){
    $(this).css("background-color","grey");
    },function(){
    $(this).css("background-color","transparent");
  });
   $("#rootBtn").click(function(){
    $("div.content").fadeOut(150);
    $("#root").delay(150).fadeIn(150);
  });
   $("#restoreBtn").click(function(){
    $("div.content").fadeOut(150);   
    $("#restore").delay(150).fadeIn(150);
  });
   $("#gappsBtn").click(function(){
    $("div.content").fadeOut(150);
    $("#gapps").delay(150).fadeIn(150);
  });
   $("#romsBtn").click(function(){
    $("div.content").fadeOut(150);
    $("#roms").delay(150).fadeIn(150);
  });
   $("#extrasBtn").click(function(){
    $("div.content").fadeOut(150);
    $("#extras").delay(150).fadeIn(150);
  });
   $("#ice_show").click(function(){
    $("#hellfire").fadeOut(150);
	$("#plasma").fadeOut(150);
    $("#ice").delay(150).fadeIn(150);
  });
     $("#hellfire_show").click(function(){
    $("#plasma").fadeOut(150);
	$("#ice").fadeOut(150);
    $("#hellfire").delay(150).fadeIn(150);
  });
     $("#plasma_show").click(function(){
    $("#hellfire").fadeOut(150);
	$("#ice").fadeOut(150);
    $("#plasma").delay(150).fadeIn(150);
  });
     $("div.navigation").hover(function(){
    $("div.navigation").fadeTo(150, .7);
    },function(){
    $("div.navigation").fadeTo(150, 0.5);
  });

});