$(document).ready(function(){

$("ul.step-labels li a").on("click",function(){

	
	var progress=$(this).attr("href");
	console.log(progress);
	if(progress == "#goal")
		$(".progress-bar").css("width","33%");

		 if(progress == "#account")
			$(".progress-bar").css("width","66%");

		 if(progress == "#identity")
			$(".progress-bar").css("width","100%");
	
});

/*To hide goal meta bg color*/
$('#collapseOne').on('show.bs.collapse', function () {
		$("#headingOne .goal_metainfo").css("background-color","transparent");
		$("#headingOne #arrow").removeClass("glyphicon-menu-down");
		$("#headingOne #arrow").addClass("glyphicon-menu-up");

	});

$('#collapseOne').on('hide.bs.collapse', function () {
		$("#headingOne  .goal_metainfo").css("background-color","#F9F9F9");
		$("#headingOne #arrow").removeClass("glyphicon-menu-up");
		$("#headingOne #arrow").addClass("glyphicon-menu-down");

	});
$('#collapseTwo').on('show.bs.collapse', function () {
		$("#headingTwo .goal_metainfo").css("background-color","transparent");
		$("#headingTwo #arrow").removeClass("glyphicon-menu-down");
		$("#headingTwo #arrow").addClass("glyphicon-menu-up");
	});
$('#collapseTwo').on('hidden.bs.collapse', function () {
		$("#headingTwo  .goal_metainfo").css("background-color","#F9F9F9");
		$("#headingTwo #arrow").removeClass("glyphicon-menu-up");
		$("#headingTwo #arrow").addClass("glyphicon-menu-down");
	});

$('#collapseThree').on('show.bs.collapse', function () {
		$("#headingThree .goal_metainfo").css("background-color","transparent");
		$("#headingThree #arrow").removeClass("glyphicon-menu-down");
		$("#headingThree #arrow").addClass("glyphicon-menu-up");
	});
$('#collapseThree').on('hidden.bs.collapse', function () {
		$("#headingThree .goal_metainfo").css("background-color","#F9F9F9");
		$("#headingThree #arrow").removeClass("glyphicon-menu-up");
		$("#headingThree #arrow").addClass("glyphicon-menu-down");
	});

$('#collapseFour').on('show.bs.collapse', function () {
		$("#headingFour .goal_metainfo").css("background-color","transparent");
		$("#headingFour #arrow").removeClass("glyphicon-menu-down");
		$("#headingFour #arrow").addClass("glyphicon-menu-up");
	});
$('#collapseFour').on('hidden.bs.collapse', function () {
		$("#headingFour .goal_metainfo").css("background-color","#F9F9F9");
		$("#headingFour #arrow").removeClass("glyphicon-menu-up");
		$("#headingFour #arrow").addClass("glyphicon-menu-down");
	});

/*Deposit menu show and hide*/
/*$(".deposit_div .deposit_button").on("click", function(){
	$(".deposit_div .deposit-form").toggleClass("show_form");
});*/



 $("#deposit_toggle").click(function(){
            $(".deposit_div .deposit-form").slideToggle("fast");
 });

/*$('html').click(function() {
   $('.deposit_div .deposit-form').slideUp("fast");
});

$('.deposit_box').click(function(event){
     event.stopPropagation();
});*/

/*$("html").click(function(event) {
    if ($(event.target.id)!='deposit_toggle') {
        $('.deposit_div .deposit-form').slideUp("fast");
    }
});*/



/*$( "#second").on("click",function() {
  alert( "Handler for .click() called." );
});

$( "#third").on("click",function() {
  alert( "Handler for .click() called." );
});*/

$(".target-amount").on("click", function(event){
	$(this).hide();
	event.stopPropagation();
	$(this).next().show();
	$(this).next().children().focus();

});

$("span.target-amount+span input[type='text']").focusout(function(){
	if ($(this).val()!=""){
		$(this).parent().prev().text($(this).val());
		$(this).parent().prev().append("<span class='glyphicon glyphicon-pencil edit'></span>");
	}
	$(this).parent().hide();
	$(".target-amount").show();

});

$(".target-time").on("click", function(event){
	$(this).hide();
	event.stopPropagation();
	$(this).next().show();
	$(this).next().children().focus();

});

$("span.target-time+span input[type='text']").focusout(function(){
	if ($(this).val()!=""){
	$(this).parent().prev().text($(this).val());
	$(this).parent().prev().append("<span class='glyphicon glyphicon-pencil edit edit-time'></span>");
}
	$(this).parent().hide();
	$(".target-time").show();

});


/*Slide toggle for summary page*/
$("#earning_info_span").on("click",function(event){
	  $( "#earning_info" ).slideToggle( "slow");
	  $("#earning_info_span").toggleClass("plus-sign, minus-sign");

});

//for summary sub section
$("#invested_info_span").on("click",function(event){
	  $(this).parents("thead").next().slideToggle( "slow");
	  $("#invested_info_span").toggleClass("plus-sign, minus-sign");

});

$("#earned_sub_info_span").on("click",function(event){
	   $(this).parents("thead").next().slideToggle( "slow");
	  $("#earned_sub_info_span").toggleClass("plus-sign, minus-sign");

});


$("#retirement_info_span").on("click",function(){
	  $( "#retirement_info" ).slideToggle( "slow");
	  //$( ".basket_balance" ).slideToggle( "slow");
	  $("#retirement_info_span").toggleClass("plus-sign, minus-sign");
});

//retirement sub info

$("#retire-invest_info_span").on("click",function(event){
	   $(this).parents("thead").next().slideToggle( "slow");
	  $("#retire-invest_info_span").toggleClass("plus-sign, minus-sign");

});


$("#retire-earnedsub_info_span").on("click",function(event){
	   $(this).parents("thead").next().slideToggle( "slow");
	  $("#retire-earnedsub_info_span").toggleClass("plus-sign, minus-sign");

});





});


