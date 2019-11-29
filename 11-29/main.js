function validateForm() {
    var email = document.getElementById("email");
    var senha = document.getElementById("password");
    if (email.value == "") {
        alert("Informar email")
        senha.value = null;
    } else if (senha.value == "") {
        alert("Informar senha")
    } else if (senha.value == "senha") {
        window.location.href = "https://g1.globo.com/";
    } else {
        alert("Senha inválida");
        senha.value = null;
    }
}