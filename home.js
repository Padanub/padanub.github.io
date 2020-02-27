const formatConfig = {
    style: "currency",
    currency: "GBP", // CNY for Chinese Yen, EUR for Euro
    minimumFractionDigits: 2,
    currencyDisplay: "symbol"
};
const britishNumberFormatter = new Intl.NumberFormat("en-GB", formatConfig);

//slider value output JS
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
const userInput = [salary,loanAmount,term,interest,monthlyPayment]

//if statement for actual check
    if (salary/2 > monthlyPayment*1.1){
        document.getElementById("decision").innerHTML = "Congratulations! Your application has been sent to our team. A Nub Loan could be coming your way. Sit tight as our loan monkeys work out the specifics and they'll contact you shortly!";
        document.getElementById("loanFacts").innerHTML = '<li>' + userInput.join('</li><li>') + '</li>'
    } else{
        document.getElementById("decision").innerHTML = "Your loan application has been declined, this could be due to several reasons but is most likely because we do not believe you can afford the repayments. Please refer to our handbook for more information.";
    }
}

//form replacement function
function replaceForm() {
const IDofForm = "loanapply";
const IDofDivWithForm = "centralBar";
const IDofAPR = "apr";

document.getElementById("centralBar").style.display = "none";
}