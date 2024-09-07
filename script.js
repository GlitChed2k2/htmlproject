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

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const templateParams = {
        user_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        user_message: document.getElementById("message").value,
    };

    // Send email via EmailJS
    emailjs.send('service_pk3yjn7', 'template_p200rn9', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("bookingResult").textContent = "Your consultation request has been sent!";
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById("bookingResult").textContent = "An error occurred, please try again.";
        });
});
