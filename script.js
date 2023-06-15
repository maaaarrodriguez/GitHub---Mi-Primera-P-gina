function showAlert() {
    alert("¡Hola, por favor ingresa tu correo electrónico!");
}

const form = document.getElementById("myForm");

form.addEventListener("submit", function(lala) {
    lala.preventDefault();
    validateForm();
});

function validateForm() {
    const input = document.getElementById("email");
    const inputValue = input.value;

    if (!validateEmail(inputValue)) {
        alert('Por favor ingrese un correo electrónico válido. ❌');
    } else {
        alert('Correo electrónico enviado correctamente. ✅');
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
    return regex.test(email);
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
        document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
    });