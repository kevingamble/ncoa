// temp code use to control the fake headers
// please remove for dev
  var navIsBig = true;
  var $nav = $('.header-container');          
    $(function(){
        $(document).scroll( function() {
            var value = $(this).scrollTop();
            if ( value > 5 && navIsBig){
                $('.top-bar-section ul.right').removeClass("top-bar-section-noscroll").addClass("top-bar-section-scroll");
                $nav.removeClass("header-container-noscroll").addClass("header-container-scroll");
                navIsBig = false;
            }
            else if (value <= 5 && !navIsBig) {
                var w = $(window).width();
                if (w >1024)    {
                $('.top-bar-section ul.right').removeClass("top-bar-section-scroll").addClass("top-bar-section-noscroll");
                $nav.removeClass("header-container-scroll").addClass("header-container-noscroll");
                navIsBig = true;
                }
             }
        });
     });
// /temp code use to control the fake headers










$(document).ready(function(){
	
	
	//breadcrumb code
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
	//end of breadcrumb code
	
	
	
	
	
	//fake form validation 
	if($('.validateform')){
		
		$('input.submit').click(function() {
			$('input[type=text].required').each(function(){
				if($(this).val() == ""){
					if(!$(this).hasClass('error')){
						$(this).addClass('error').parent().append('<div class="msgError"><small class="error">This is a required field.</small></div>');
					}
				}
			});
			if(!isOneChecked('usertype')){
				$('.radiogroupholder.required').find('li').addClass('error')
			}
			
			
			$('input[type=checkbox].required').each(function(){
				if(!$(this).is(':checked')){
					if(!$(this).parent().hasClass('error')){
						$(this).parent().addClass('error').append('<div class="msgError"><small class="error">This is a required field.</small></div>');
					}
				}
			});
			
			
			return false;
		});
		
		$('input[type=text].required').on('change textInput input', function () {
			$(this).removeClass('error').parent().find('div.msgError').remove();
		});
		
		$('.required input[type=radio]').on('change textInput input', function () {
			$('.radiogroupholder.required').find('li').removeClass('error');
		});
		
		$('input[type=checkbox].required').on('change textInput input', function () {
			$(this).parent().removeClass('error').find('div.msgError').remove();
		});
		
	}
	
	
	
	
	
	
	function isOneChecked(name) {
		var checkboxes = document.getElementsByName( name ), i = checkboxes.length - 1;
	    for ( ; i > -1 ; i-- ) {
	        if ( checkboxes[i].checked ) { return true; }
	    }
	    return false;
	}
	
	
	
	
});