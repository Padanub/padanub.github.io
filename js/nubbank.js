const interest = 0.055;

$(document).ready(function(){
	$('#amount').on('input change', function() {
		$("#amountHelp").html("£" + parseInt($(this).val()).toLocaleString());
	});
});

Pageclip.form(document.querySelector('.pageclip-form'), {
	onSubmit: function (event) {
		const salary = $('#salary').val();
		const amount = $('#amount').val();
		const length = $('#length').val();
		const monthlyPayment = ((amount - 0) * interest / (1 - Math.pow((1 + interest), -length)));
		var success, msg, details;
		if($('#salary').val()/2 > monthlyPayment*1.1){
			msg = "Congratulations! Your application has been sent to our team. A Nub Loan could be coming your way. Sit tight as our loan monkeys work out the specifics and they'll contact you shortly!";
			details = `<br/><br/><p><b>Loan Amount:</b> £${amount.toLocaleString()}<br/><b>Loan Length:</b> ${length} year(s)<br/><b>Salary:</b> £${salary.toLocaleString()}<br/><b>Yearly Repayments:</b> £${monthlyPayment.toLocaleString()}</p>`;
		} else {
			msg = "Your loan application has been declined, this could be due to several reasons but is most likely because we do not believe you can afford the repayments. Please refer to our handbook for more information.";
			success = false;
		}
		$('#decision').html(msg);
		$('#decision').append(details);
		$('.jumbotron').show();
		$('html, body').animate({
	        scrollTop: $(".jumbotron").offset().top
	    }, 500);
		if(!success){
			return success;
		}
	}
})