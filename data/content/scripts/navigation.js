$(document).ready(function(){
  $("#driverBtn").click(function(){
    $("#home").hide(1000);
    $("#drivers").show(1000);
    $("#root").hide(1000);
    $("#restore").hide(1000);
    $("#gapps").hide(1000);
    $("#roms").hide(1000);
    $("#extras").hide(1000);
  });
   $("#rootBtn").click(function(){
    $("#home").hide(1000);
    $("#drivers").hide(1000);
    $("#root").show(1000);
    $("#restore").hide(1000);
    $("#gapps").hide(1000);
    $("#roms").hide(1000);
    $("#extras").hide(1000);
  });
   $("#restoreBtn").click(function(){
    $("#home").hide(1000);
    $("#drivers").hide(1000);
    $("#root").hide(1000);
    $("#restore").show(1000);
    $("#gapps").hide(1000);
    $("#roms").hide(1000);
    $("#extras").hide(1000);
  });
   $("#gappsBtn").click(function(){
    $("#home").hide(1000);
    $("#drivers").hide(1000);
    $("#root").hide(1000);
    $("#restore").hide(1000);
    $("#gapps").show(1000);
    $("#roms").hide(1000);
    $("#extras").hide(1000);
  });
   $("#romsBtn").click(function(){
    $("#home").hide(1000);
    $("#drivers").hide(1000);
    $("#root").hide(1000);
    $("#restore").hide(1000);
    $("#gapps").hide(1000);
    $("#roms").show(1000);
    $("#extras").hide(1000);
  });
   $("#extrasBtn").click(function(){
    $("#home").hide(1000);
    $("#drivers").hide(1000);
    $("#root").hide(1000);
    $("#restore").hide(1000);
    $("#gapps").hide(1000);
    $("#roms").hide(1000);
    $("#extras").show(1000);
  });
});
