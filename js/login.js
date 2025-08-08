document.getElementById("loginForm").addEventListener("submit", function (event) {
    const usuario = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (usuario === "" || senha === "") {
        alert("⚠️ Os campos de usuário e senha não podem ficar vazios!");
        event.preventDefault(); 
    }
});
