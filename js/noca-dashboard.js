$(document).ready(function() {
  $('a.updatecontact').click(function(){
	  var $emailholder = $(this).parent().find('span.emailholder');
	  var $editemailobj = $(this).parent().find('input');
	  var $checkmark = $(this).parent().find('span.sentnotification');
	  if($emailholder.hasClass('hide')){
		  $emailholder.removeClass('hide').html($editemailobj.val());
		  $checkmark.removeClass('hide');
		  $(this).addClass('hide');
		  $editemailobj.addClass('hide');
	  }else{
		  $emailholder.addClass('hide');
		  $editemailobj.removeClass('hide').val($emailholder.html());
	  }
	  return false;
  });
});
