$(document).ready(function() {
   
	$("#background1").click(function(){
		$("body").attr('class', 'background1');
	});	   
	
	$("#background2").click(function(){
		$("body").attr('class', 'background2');
	});	
	
	$("#bluetheme").click(function(){
		$("#tooltipchanger").attr('class', 'progressioninfo tipblue');
		$("#socialchanger").attr('class', 'swrap sblue');
		$("#countchanger").attr('class', 'counterwrap cblue');
		$("#submit").attr('class', 'bluebutton');
	});	
	
	$("#greentheme").click(function(){
		$("#tooltipchanger").attr('class', 'progressioninfo tipgreen');
		$("#socialchanger").attr('class', 'swrap sgreen');
		$("#countchanger").attr('class', 'counterwrap cgreen');
		$("#submit").attr('class', 'greenbutton');
	});	
	
	$("#redtheme").click(function(){
		$("#tooltipchanger").attr('class', 'progressioninfo tipred');
		$("#socialchanger").attr('class', 'swrap sred');
		$("#countchanger").attr('class', 'counterwrap cred');
		$("#submit").attr('class', 'redbutton');
	});	

});