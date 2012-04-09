$(document).ready(function() { 
  $('input:radio:last-child').attr('checked',true);
  $("input[name$='group1']").click(function(){
  	$("input[name$='group1'] p").remove();
  	
  var radio_value = $(this).val();
 
  if(radio_value=='opt1') {

    $("#ubuntu").show();
     $("#fedora").hide();
     $("#suse").hide();
     $("#other").hide();
  }
  
  
  else if(radio_value=='opt2') {
   $("#fedora").show();
     $("#ubuntu").hide();
     $("#suse").hide();
     $("#other").hide();
   }
   
  else if(radio_value=='opt3') {
   $("#suse").show();
   	$("#ubuntu").hide();
   	$("#fedora").hide();
   	$("#other").hide();
   	
   }
   
  else if(radio_value=='opt4') {
   $("#other").show();
    $("#ubuntu").hide();
    $("#fedora").hide();
    $("#suse").hide();
   }
   
  }); 
});



