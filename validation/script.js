var password = document.getElementById("password")
confirmation_password = document.getElementById("confirmation_password")
function validation_password() {
    if (password.value != confirmation_password.value) {
        confirmation_password.setCustomValidity("Senha Diferentes")
    } else {
        confirmation_password.setCustomValidity("")
    }
}
password.onchange = validation_password
confirmation_password.onkeyup = validation_password