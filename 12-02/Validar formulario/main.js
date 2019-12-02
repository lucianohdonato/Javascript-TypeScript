function validateForm() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailValid = false;
    var senhaValid = false;
    var usuariocomum = "usuario@comum";
    var senhacomum = "comum";
    var admin = "generation@admin";
    var senhaadmin = "admin";

    if (email.length == 0) {
        document.getElementById("alert-email").innerHTML = "Campo de entrada inválido. O email deve ter pelo menos 1 caractere!";
        document.getElementById("alert-email").style.visibility = "visible";
    } else {
        document.getElementById("alert-email").innerHTML = "";
        document.getElementById("alert-email").style.visibility = "hidden";
        if (email == admin || email == usuariocomum) {
            emailValid = true;
        } else {
            alert("email inválido");
        }
    }


    if (password.length == 0) {
        document.getElementById("alert-password").innerHTML = "Campo de entrada inválido. A senha deve ter pelo menos 1 caractere!";
        document.getElementById("alert-password").style.visibility = "visible";
    } else {
        document.getElementById("alert-password").innerHTML = "";
        document.getElementById("alert-password").style.visibility = "hidden";
        if (email == admin && password == senhaadmin || email == usuariocomum && password == senhacomum) {
            senhaValid = true;
        } else {
            if (emailValid == true) {
                alert("senha inválido");
                document.getElementById("password").value = null
            }
        }
    }

    if (emailValid == true && senhaValid == true) {
        if (email == admin) {
            window.location.href = "blog1.html";
        }
        if (email == usuariocomum) {
            window.location.href = "blog2.html";
        }
    }
}