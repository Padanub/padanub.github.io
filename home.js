const amount = document.querySelector('#amount')
const output = document.querySelector('.amount-output')

output.textContent = '£' + amount.value

amount.addEventListener('input', function() {
    output.textContent = '£' + amount.value
})

//eligibility function
function runCheck() {
const salary = document.getElementById("salary").value;
const loanAmount = document.getElementById("amount").value;
const term = document.getElementById("length").value;
const interest = 0.055
const monthlyPayment = ((loanAmount - 0) * interest / (1 - Math.pow((1 + interest), -term)));

//if statement for actual check
    if (salary/2 > monthlyPayment*1.1){
        document.getElementById("decision").innerHTML = "Congratulations! A Nub Loan is coming your way. Sit tight as our loan monkeys work out the specifics and they'll contact you shortly!";
    } else{
        document.getElementById("decision").innerHTML = "Your loan application has been declined, this could be due to several reasons but is most likely because we do not believe you can afford the repayments. Please refer to our handbook for more information.";
    }
}

//form replacement function
function replaceForm()
{
// Three places to customize:

// Specify the id of the form.
const IDofForm = "loanapply";

// Specify the id of the div containing the form.
const IDofDivWithForm = "centralBar";

const IDofAPR = "apr";

// End of customizations.

// This replaces the form with the replacement content.
document.getElementById("centralBar").style.display = "none";
}