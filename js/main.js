$( document ).ready(function(){

  $(".box-text").hide();

  $(".box-heading").on("mouseover", function(){

    $(".box-text").slideToggle("slow");
  });
