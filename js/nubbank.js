$(document).ready(function(){
	$('#amount').on('input change', function() {
		$("#amountHelp").html("£" + parseInt($(this).val()).toLocaleString());
	})
})