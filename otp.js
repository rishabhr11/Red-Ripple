document.addEventListener('DOMContentLoaded', function () {
    const otpForm = document.getElementById('otp-form');
    const otpInput = document.getElementById('otp');
    const submitButton = document.getElementById('submit-btn');
    const errorMessage = document.getElementById('error-message');
    const timerElement = document.getElementById('timer');

    let timer = 300; // Timer set for 5 minutes (in seconds)
    let timerInterval;

    // Function to start the countdown timer
    function startTimer() {
        timerInterval = setInterval(function () {
            let minutes = Math.floor(timer / 60);
            let seconds = timer % 60;
            timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

            if (timer <= 0) {
                clearInterval(timerInterval);
                timerElement.textContent = 'OTP expired!';
                submitButton.disabled = true; // Disable the submit button
            } else {
                timer--;
            }
        }, 1000);
    }

    // Start the timer when the page loads
    startTimer();

    // Form submission handler
    otpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const otpValue = otpInput.value.trim();

        if (otpValue.length === 6) {
            // Normally you would send the OTP to the server here
            alert('OTP verified successfully!');
            errorMessage.textContent = ''; // Clear any previous error messages
        } else {
            errorMessage.textContent = 'Please enter a valid 6-digit OTP.';
        }
    });
});
