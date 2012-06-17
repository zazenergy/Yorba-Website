$(document).ready(function() { 
  	$("input[name$='group1']").click(function(){
  		$("input[name$='group1'] p").remove();
  	
		  var radio_value = $(this).val();
		 
		  if(radio_value=='opt1') {
		
		     $("#ubuntu").show();
		     $("#fedora").hide();
		     $("#other").hide();
		  }
		  
		  
		  else if(radio_value=='opt2') {
		   	 $("#fedora").show();
		     $("#ubuntu").hide();
		     $("#other").hide();
		   }
		   
		  else if(radio_value=='opt3') {
		    $("#other").show();
		    $("#ubuntu").hide();
		    $("#fedora").hide();
		   }
		  
		  $("#source").show();
  }); 
});



