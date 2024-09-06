// Loan Calculator
function calculateLoan() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;

    const interest = (principal * rate * years) / 100;
    const totalPayment = parseFloat(principal) + interest;

    document.getElementById("loanResult").textContent = `Total Payment: $${totalPayment.toFixed(2)} (Interest: $${interest.toFixed(2)})`;
}

// Scroll-triggered animations
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate');
    const scrollPosition = window.pageYOffset + window.innerHeight;

    elements.forEach(function(element) {
        if (scrollPosition > element.offsetTop + 100) {
            element.classList.add('active');
        }
    });
});

// Booking Form Submit (this is a simulation, actual email functionality requires a backend)
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("bookingResult").textContent = "Your consultation request has been sent!";
});
