$(document).ready(function(){
	if($('#steps-breadcrumb')){
		var numOfSteps = $("#steps-breadcrumb ul li").length;
		var percentOfStepWidth = 100/(numOfSteps-1);
		var widthOfFirstAndLastStep = percentOfStepWidth*.5;
		var widthOfMiddleStep = percentOfStepWidth;
		var whichStep, percentageBarWidth, currenttxt;
		
		if($("html").hasClass("ie8")){
			$("#steps-breadcrumb ul li:first-child").addClass('first');
			$("#steps-breadcrumb ul li:last-child").addClass('last');
		}
		
		$("#steps-breadcrumb ul li:not(:first-child, :last-child)").css('width', widthOfMiddleStep+'%');
		$("#steps-breadcrumb ul li:first-child, #steps-breadcrumb ul li:last-of-type").css('width', widthOfFirstAndLastStep+'%');
		
		if($("#steps-breadcrumb ul li:last-of-type").hasClass('step-done')){
			percentageBarWidth = 100;
		}else{
			whichStep = $("#steps-breadcrumb ul li").index($('.step-current:eq(0)'));
			percentageBarWidth = (whichStep/(numOfSteps-1))*100;
		}
		
		$("#steps-breadcrumb div.progress-bar").css('width', percentageBarWidth+'%');
		
		
		if($("#steps-breadcrumb ul li").hasClass('step-current')){
			currenttxt = $("#steps-breadcrumb ul li.step-current p").html();
		}else if($("#steps-breadcrumb ul li").hasClass('step-done')){
			currenttxt = $("#steps-breadcrumb ul li:last.step-done p").html();
		}else{
			currenttxt = $("#steps-breadcrumb ul li:first p").html();
		}
		$("#steps-breadcrumb div.stepname").html(currenttxt);
		
		
	}
});