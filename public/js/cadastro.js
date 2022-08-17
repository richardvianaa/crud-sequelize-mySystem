const cadastro = document.querySelector("form");

let errors = [];
cadastro.addEventListener("submit", (e) => {
    let nome = document.querySelector("input.nome");
    let email = document.querySelector("input.email");
    let senha = document.querySelector("input.senha")
    let ulErros = document.querySelector("div.errors ul")

    if (nome.value <= "" || senha.value <= "" || email.value <= "") {
        e.preventDefault();
    }
    if (nome.value <= 0) {
        errors.push("Preencha o campo Nome")
    }
    if (email.value <= 0) {
        errors.push("Preencha o campo E-mail")
    }
    if (senha.value <= 0) {
        errors.push("Preencha o campo Senha")
    }

    for (i = 0; i < errors.length; i++) {
        ulErros.innerHTML = "<li>" + errors[i] + "</li>"
    }
})

console.log(errors);