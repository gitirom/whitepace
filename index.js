const cards = document.querySelectorAll('.card:not(.featured)');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('featured');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('featured');
    });
});


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (password.trim() === '' ||  password.length < 8) {
        alert('Please enter your password');
        return;
    }

    const toastElement = document.getElementById('successToast');
    const toast = new bootstrap.Toast(toastElement);
    toast.show();

    
    setTimeout(() => {
        window.location.href = 'home.html'; 
    }, 1000);
});

// Register form validation
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name.trim() === '') {
        alert('Please enter your name');
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (password.trim() === '' || password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }

    console.log(name, email, password);
    

    const toastElement = document.getElementById('successToast');
    const toast = new bootstrap.Toast(toastElement);
    toast.show();

    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1000);
});



function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.src = '/images/hidden.svg'; 
    } else {
        passwordInput.type = 'password';
        toggleIcon.src = '/images/eye.svg'; 
    }
}