$('.SeeMore2').click(function(){
		var $this = $(this);
		$this.toggleClass('SeeMore2');
		if($this.hasClass('SeeMore2')){
			$this.text('Read More');			
		} else {
			$this.text('close');
		}
	});


$(document).ready(function(){

$('#collapse1').on('show.bs.collapse', function () {
		$("#heading1").css({"background-color":"#2C3E51","color":"#fff"});

	});

$('#collapse1').on('show.bs.collapse', function () {
		$("#heading1").css({"background-color":"#2C3E51","color":"#fff"});

	});

$('#collapse1').on('hide.bs.collapse', function () {
		$("#heading1").css({"background-color":"#F5F5F5","color":"#2c3e51"});

	});

$('#collapse2').on('show.bs.collapse', function () {
		$("#heading2").css({"background-color":"#2C3E51","color":"#fff"});

	});

$('#collapse2').on('hide.bs.collapse', function () {
		$("#heading2").css({"background-color":"#F5F5F5","color":"#2c3e51"});

	});

$('#collapse3').on('show.bs.collapse', function () {
		$("#heading3").css({"background-color":"#2C3E51","color":"#fff"});

	});

$('#collapse3').on('hide.bs.collapse', function () {
		$("#heading3").css({"background-color":"#F5F5F5","color":"#2c3e51"});

	});

$('#collapse4').on('show.bs.collapse', function () {
		$("#heading4").css({"background-color":"#2C3E51","color":"#fff"});

	});

$('#collapse4').on('hide.bs.collapse', function () {
		$("#heading4").css({"background-color":"#F5F5F5","color":"#2c3e51"});

	});

$('#collapse5').on('show.bs.collapse', function () {
		$("#heading5").css({"background-color":"#2C3E51","color":"#fff"});

	});

$('#collapse5').on('hide.bs.collapse', function () {
		$("#heading5").css({"background-color":"#F5F5F5","color":"#2c3e51"});

	});

$('#collapse6').on('show.bs.collapse', function () {
		$("#heading6").css({"background-color":"#2C3E51","color":"#fff"});

	});

$('#collapse6').on('hide.bs.collapse', function () {
		$("#heading6").css({"background-color":"#F5F5F5","color":"#2c3e51"});

	});

});



$(document).ready(function(){
  $('input.comma').keyup(function(event){
      // skip for arrow keys
      if(event.which >= 37 && event.which <= 40){
          event.preventDefault();
      }
      var $this = $(this);
      var num = $this.val().replace(/,/gi, "").split("").reverse().join("");
      
      var num2 = RemoveRougeChar(num.replace(/(.{3})/g,"$1,").split("").reverse().join(""));
      
      console.log(num2);
      
      
      // the following line has been simplified. Revision history contains original.
      $this.val(num2);
  });
});

function RemoveRougeChar(convertString){
    
    
    if(convertString.substring(0,1) == ","){
        
        return convertString.substring(1, convertString.length)            
        
    }
    return convertString;
    
}