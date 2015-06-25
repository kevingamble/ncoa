$(document).ready(function(){
	if($('#steps-breadcrumb')){
		var numOfSteps = $("#steps-breadcrumb ul li").length;
		var percentOfStepWidth = 100/(numOfSteps-1);
		var widthOfFirstAndLastStep = percentOfStepWidth*.5;
		var widthOfMiddleStep = percentOfStepWidth;
		var whichStep = $("#steps-breadcrumb ul li").index($('.step-current:eq(0)'));
		var percentageBarWidth = (whichStep/(numOfSteps-1))*100;
		$("#steps-breadcrumb ul li:not(:first-child, :last-child)").css('width', widthOfMiddleStep+'%');
		$("#steps-breadcrumb ul li:first-child, #steps-breadcrumb ul li:last-of-type").css('width', widthOfFirstAndLastStep+'%');
		$("#steps-breadcrumb div.progress-bar").css('width', percentageBarWidth+'%');
	}
});