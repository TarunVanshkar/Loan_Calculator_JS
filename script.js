const loanAmount = document.getElementById('principle');
const loanTenure = document.getElementById('duration');
const rateOfInterest = document.getElementById('roi');
const calculateBtn = document.getElementById('calculate');
const resetBtn = document.getElementById('reset');
const alertBox = document.querySelector('.alert-container');
const loanAmountShow = document.getElementById('amt');
const totalAmountShow = document.getElementById('total-amt');
const totalInterestShow = document.getElementById('interest');
const emiPerMonthShow = document.getElementById('emi');


// Adding event listener to calculate button
calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const loanAmountValue = loanAmount.value;
    const loanTenureValue = loanTenure.value;
    const rateOfInterestValue = rateOfInterest.value;
    
    // To check if input is black or negative
    if(!loanAmountValue || !loanTenureValue || !rateOfInterestValue || loanAmountValue<0 || loanTenureValue<0 || rateOfInterestValue<0){
        alertBox.style.display = 'block'
        
        // To hide it after 5 seconds
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 5000);
    }
    else{
        calculateAns(loanAmountValue, loanTenureValue, rateOfInterestValue);
    }
});

// Adding event listener to reset button
resetBtn.addEventListener('click', () => {
    resetForm();   // To reset the form
    resetShownVlaues();    // To reset the calculated values
})

// Function to calculate answers
const calculateAns = (loanAmountValue, loanTenureValue, rateOfInterestValue) => {
    const si = (loanAmountValue * loanTenureValue * rateOfInterestValue)/100;

    // To show calculated values
    setTimeout(() => {
        loanAmountShow.innerText = loanAmountValue;
        totalAmountShow.innerText = (si) + (+loanAmountValue);
        totalInterestShow.innerText = si;
        emiPerMonthShow.innerText = (((si)+(+loanAmountValue))/(loanTenureValue*12));

        // reset the form after 30 seconds
        setTimeout(resetForm, 30000);
    }, 1500);
}

// Function to reset form values
const resetForm = () => {
    loanAmount.value = '';
    loanTenure.value = '';
    rateOfInterest.value = '';
}

// Function to reset shown values
const resetShownVlaues = () => {
    loanAmountShow.innerText = '';
    totalAmountShow.innerText = '';
    totalInterestShow.innerText = '';
    emiPerMonthShow.innerText = '';
}