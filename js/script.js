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

/*(function() {


   $('.target-amount').click(target);
})();*/

//calling function on page load and on event
jQuery(function($) {

	function target() {
		$(".target-amount").on("click", function(event){
		$(this).hide();
		event.stopPropagation();
		$(this).next().show();
		$(this).next().children().focus();
		});
    }

    $('.target-amount').click(target);
});



 
$("span.target-amount+span input[type='text']").focusout(function(){

	 var amtvalinput=$(this).val();	
	 amtvalinput=amtvalinput.replace(/,/g,"");
	//parseInt(amtvalinput);
	//var amtvalinputlength=amtvalinput.trim().lenght
	if (((amtvalinput)!="") && ($.isNumeric(amtvalinput)) && ((amtvalinput)>0) ) {
		/*var tempval=(($(this).val()).toLocaleString());
		console.log(tempval+ " temp value");*/
		//amtvalinput=parseInt(amtvalinput);
		amtvalinput=((parseInt(amtvalinput)).toLocaleString());
		//console.log(amtvalinput+ "val");

		$(this).parent().prev().text(amtvalinput);
		$(this).parent().prev().append("<span class='edittext'></span>");

	}
	$(this).parent().hide();
	$(".target-amount").show();

});

// to input commas while inputting value
  $(".target-amount+span input").keyup(function(event){
      // skip for arrow keys
      if(event.which >= 37 && event.which <= 40){
          event.preventDefault();
      }
      var $this = $(this);
      var num = $this.val().replace(/,/gi, "");
      var num2 = num.replace(/\d(?=(?:\d{3})+$)/g, '$&,');
      //console.log(num2);
      // the following line has been simplified. Revision history contains original.
      $this.val(num2);
  });


$(".target-time").on("click", function(event){
	$(this).hide();
	event.stopPropagation();
	$(this).next().show();
	$(this).next().children().focus();

});

$("span.target-time+span input[type='text']").focusout(function(){
	var timevalinput=$(this).val();
	if ( ((timevalinput)!="") && ($.isNumeric(timevalinput)) &&((timevalinput)>0) ) {
		var timeval=$(this).val().trim();
	$(this).parent().prev().text(timeval);	
	$(this).parent().prev().append("<span class='glyphicon glyphicon-pencil edit edit-time'></span>");
	panel_toupdate=($(this).parents(".panel-heading").attr("id"));	
	timechangefn(panel_toupdate,timeval);	
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

/*Script for determining the goals*/
var jsondata,formobj;	  
$.fn.serializeObject = function()
       
	{
	    var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] !== undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            o[this.name].push(this.value || '');
	        } else {
	            o[this.name] = this.value || '';
	        }
	    });
	    return o;
	};

$(function() {

$("form[name='onboardinfo']").submit(function() {
	formobj=JSON.stringify($("form[name='onboardinfo']").serializeObject());
	$('#result').text(formobj+"print");
	jsondata = JSON.parse(formobj);    
	//alert(jsondata.retirement);
	if((jsondata.age!="") && (jsondata.income !="")) {
		console.log("data filled");

			// Check browser support
			//var testObject = { 'one': 1, 'two': 2, 'three': 3 };
			// Put the object into storage			
			sessionStorage.setItem('formdata',formobj);
			//nextpage();
			return true;
	}
	else {
		console.log(jsondata);
		console.log("fill the fields");
	// retirement-info="here here";
	return false;
	}
	
	
});

});

/*function nextpage() {
	//alert("going in next function");
	document.location.href("onboarding.html");	
}*/


/*  for (var i = 0; i <= 4; i++) {
        if (Number(document.getElementById('value-'+i).value)) {
            chart.dataProvider.push({
                
                "chartConfig3.dataProvider[1].litres":150
            })
        }
    }
*/


/*Toggle icons for portfolio page + and - */
var eventID;
$(".panel.panel-default .panel.panel-default").on("shown.bs.collapse",function(event){
	//$(this).parent().prev().children().find("h4").css( "background-color", "red" );

	
	eventID="#"+(event.target.id);
/*	console.log(eventID);
	console.log($(eventID).siblings().find("span"));*/
	$(eventID).siblings().find("span.sign").toggleClass("plus-sign, minus-sign");
});

$(".panel.panel-default .panel.panel-default").on("hidden.bs.collapse",function(event){
	//$(this).parent().prev().children().find("h4").css( "background-color", "red" );
	eventID="#"+(event.target.id);
	/*console.log(eventID);
	console.log($(eventID).siblings().find("span"));*/
	$(eventID).siblings().find("span.sign").toggleClass("plus-sign, minus-sign");
});
$(".panel.panel-default .panel.panel-default").on("show.bs.collapse",function(event){
	eventID="#"+(event.target.id);
	$(eventID).siblings().find("span.Current-Value").fadeOut();
});
$(".panel.panel-default .panel.panel-default").on("hide.bs.collapse",function(event){
	eventID="#"+(event.target.id);
	$(eventID).siblings().find("span.Current-Value").fadeIn();
});


});