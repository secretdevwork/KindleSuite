$(document).ready(function(){
 $("html").fadeIn(500);
 $(".title1").fadeOut(0);
 $(".title1").load($(".title1").fadeIn(2000));
 $(".title2").fadeOut(0);
 $(".title2").load($(".title2").fadeIn(2000));
   $("#driverBtn").click(function(){
    $("div.content").fadeOut(500);
    $("#drivers").delay(500).fadeIn(500);
  });
   $("#header").click(function(){
    $("div.content").fadeOut(500);
    $("#home").delay(500).fadeIn(500);
  });
   $("#rootBtn").click(function(){
    $("div.content").fadeOut(500);
    $("#root").delay(500).fadeIn(500);
  });
   $("#restoreBtn").click(function(){
    $("div.content").fadeOut(500);   
    $("#restore").delay(500).fadeIn(500);
  });
   $("#gappsBtn").click(function(){
    $("div.content").fadeOut(500);
    $("#gapps").delay(500).fadeIn(500);
  });
   $("#romsBtn").click(function(){
    $("div.content").fadeOut(500);
    $("#roms").delay(500).fadeIn(500);
  });
   $("#extrasBtn").click(function(){
    $("div.content").fadeOut(500);
    $("#extras").delay(500).fadeIn(500);
  });
   $("#ice_show").click(function(){
    $("#hellfire").fadeOut(500);
	$("#plasma").fadeOut(500);
    $("#ice").delay(500).fadeIn(500);
  });
     $("#hellfire_show").click(function(){
    $("#plasma").fadeOut(500);
	$("#ice").fadeOut(500);
    $("#hellfire").delay(500).fadeIn(500);
  });
     $("#plasma_show").click(function(){
    $("#hellfire").fadeOut(500);
	$("#ice").fadeOut(500);
    $("#plasma").delay(500).fadeIn(500);
  });
     $("div.navigation").hover(function(){
    $("div.navigation").fadeTo(200, 1);
    },function(){
    $("div.navigation").fadeTo(200, 0.5);
  });
});

