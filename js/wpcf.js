jQuery(document).ready(function($) {	
	$(".wpcf7-form-control-wrap").mouseover(function(){
		$obj = $("span.wpcf7-not-valid-tip",this);
    	        $obj.css('display','none');
	});
});