$(document).ready(function(e) {
	
   jQuery(function($){
		$(".twitterbody").tweet({
		  join_text: "auto",
		  username: "UBLDesigns",
		  avatar_size: 48,
		  count: 1,
		  auto_join_text_default: "we said,",
		  auto_join_text_ed: "we",
		  auto_join_text_ing: "we were",
		  auto_join_text_reply: "we replied",
		  auto_join_text_url: "we were checking out",
		  loading_text: "loading tweets..."
		});
	});
	
//// Start Countdown ////
	countdown();
//// Start Countdown ////

/*
 * AJAX Section
 * This function will handle the contact process through AJAX
 */
	 $('#slickform').submit(
		function slickcontactparse() {
			
			// EMAIL VALIDATION FUNCTION
			var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			
			// EDIT THIS SECTION IF DIFFERENT FORM ELEMENTS
			// Values
			var successmessage = "Thank you for email, we will be in contact soon!";
			var failedmessage = "There was a problem, please try again!";
			var usersemail = $('#email');
			var isvalid = 1;
			var url = "contact.php";
			
			//Checking information is correct before sending data
			
			
			//CHECKING EMAIL IS PRESENT AND IS VALID
			if (usersemail.val() == "" || usersemail.val() == "iamquanlee_40gmail.com") {
				$(".errors").html('Please Insert Your Email!');
				$(".errors").delay(300).fadeIn(500).delay(4500).fadeOut(500);
				$('input[type=submit]', $("#slickform")).removeAttr('disabled');
				return false;
			}
			
			var valid = emailReg.test(usersemail.val());
			
			if(!valid) {
				$(".errors").html('Please Enter A Valid Email!');
				$(".errors").delay(300).fadeIn(500).delay(4500).fadeOut(500);
				$('input[type=submit]', $("#slickform")).removeAttr('disabled');
				return false;
			}
			//CHECKING EMAIL IS PRESENT AND IS VALID
			
			/* 
			 *
			 * POSTING DATA USING AJAX AND
			 * THEN RETREIVING DATA FROM PHP SCRIPT
			 *
			*/
			
			$.post(url,{ usersemail: usersemail.val(), isvalid: isvalid } , function(data) {
				
				if(data == 'success'){
					$(".successcontainer").html(successmessage);
					$(".successcontainer").delay(300).fadeIn(500).delay(4500).fadeOut(500);
					$("#email").val('johndoe_40email.com');
					$('input[type=submit]', $("#slickform")).removeAttr('disabled');
				
				} else {
					
					$(".errorcontainer").html(failedmessage);
					$(".errorcontainer").delay(300).fadeIn(500).delay(4500).fadeOut(500);
					$('input[type=submit]', $("#slickform")).removeAttr('disabled');
					return false;
					
				}
				
			});
			
			/* 
			 *
			 * POSTING DATA USING AJAX AND
			 * THEN RETREIVING DATA FROM PHP SCRIPT
			 *
			*/
			
		}
		
	);
/*
 * AJAX Section
 * This function will handle the contact process through AJAX
 */

});

//// Countdown Function ////
	function countdown() {
		// input new date here
		var startdate = new Date("Jan 5, 2017 00:00:00")
		var newdate = new Date("Apr 20, 2017 00:00:00");
		// input new date here
		
		//DO NOT TOUCH THE REST UNLESS YOU KNOW JQUERY WELL
		var now = new Date();
		var timeDifference = newdate.getTime() - now.getTime();
		var d = Math.floor(timeDifference / 1000);
		var l = Math.floor(d / 60);
		var b = Math.floor(l / 60);
		var u = Math.floor(b / 24);
		b %= 24; l %= 60; d %= 60;
		
		if(d < 0){ var d = 0}
		if(l < 0){ var l = 0}
		if(b < 0){ var b = 0}
		if(u < 0){ var u = 0}
		
		document.getElementById("days").innerHTML = u;
		document.getElementById("hours").innerHTML = b;
		document.getElementById("minutes").innerHTML = l;
		document.getElementById("seconds").innerHTML = d;
		
		//Creating the bar
		var percentage = (now.getTime() - startdate.getTime()) / (newdate.getTime() - startdate.getTime()) * 100;
		
		if(percentage > 100){var percentage = 100;}
		$(".progressionbar").delay(500).animate({width:percentage + '%'},3000);
		$(".progressionbar").delay(3000).fadeIn(1000);
		var barnumber = Math.ceil(percentage);
		$(".progressioninfo").html(barnumber + '% complete');
		
		var timer = setTimeout('countdown()',1000);
		//DO NOT TOUCH THE REST UNLESS YOU KNOW JQUERY WELL
	}
//// Countdown Function ////