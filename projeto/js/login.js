var email = window.document.forms ['form'] ['email']
var senha = window.document.forms ['form'] ['password']
var email_error = window.document.getElementById('erro_email_login')
var senha_error = window.document.getElementById('erro_senha_login')

function validação() {
    if (email.value.length < 9) {
        email.style.border = "1px solid red"
        email_error.style.display = "block"
        email.focus()
        return false
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red"
        senha_error.style.display = "block"
        senha.focus()
        return false
    }
}