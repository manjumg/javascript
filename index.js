const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const emailSuccess = document.getElementById('emailSuccess');
const passwordError = document.getElementById('passwordError');
const passwordSuccess = document.getElementById('passwordSuccess');

        emailInput.addEventListener('input', function() {
            const emailValue = emailInput.value;
            if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
                emailError.classList.add('hidden');
                emailSuccess.classList.remove('hidden');
            } else {
                emailError.classList.remove('hidden');
                emailSuccess.classList.add('hidden');
            }
        });

        passwordInput.addEventListener('input', function() {
            const passwordValue = passwordInput.value;
            if (passwordValue.length > 8) {
                passwordError.classList.add('hidden');
                passwordSuccess.classList.remove('hidden');
            } else {
                passwordError.classList.remove('hidden');
                passwordSuccess.classList.add('hidden');
            }
        });

        document.getElementById('signupForm').addEventListener('submit', function(event) {
            event.preventDefault();

            if (confirm("Are you sure you want to sign up?")) {
                alert("Successful signup!");
                                window.location.href = window.location.href;
            } else {
                
                emailInput.value = '';
                passwordInput.value = '';
                emailSuccess.classList.add('hidden');
                passwordSuccess.classList.add('hidden');
            }
        });