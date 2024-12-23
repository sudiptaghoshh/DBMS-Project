document.addEventListener('DOMContentLoaded', () => {
    const sendOtpBtn = document.getElementById('sendOtpBtn');
    const verifyOtpBtn = document.getElementById('verifyOtpBtn');
    const signupBtn = document.getElementById('signupBtn');
    const otpGroup = document.querySelectorAll('.otp-group');

    // Send OTP
    sendOtpBtn.addEventListener('click', async () => {
        const email = document.getElementById('email').value;

        if (!email) {
            alert('Please enter your email address.');
            return;
        }

        // Call backend API to send OTP
        const response = await fetch('/send-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            alert('OTP sent to your email.');
            otpGroup.forEach(group => group.style.display = 'block');
        } else {
            alert('Failed to send OTP. Try again.');
        }
    });

    // Verify OTP
    verifyOtpBtn.addEventListener('click', async () => {
        const email = document.getElementById('email').value;
        const otp = document.getElementById('otp').value;

        if (!otp) {
            alert('Please enter the OTP.');
            return;
        }

        // Call backend API to verify OTP
        const response = await fetch('/verify-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, otp }),
        });

        if (response.ok) {
            alert('OTP verified successfully.');
            signupBtn.disabled = false;
        } else {
            alert('Invalid or expired OTP. Try again.');
        }
    });

    // Handle form submission
    document.getElementById('signupForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sign-up successful!');
        // Add further form submission logic here
    });
});
