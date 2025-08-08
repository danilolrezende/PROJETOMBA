document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão

    const usuario = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value.trim();

    const usuarioPadrao = "admin@admin";
    const senhaPadrao = "123456";

    if (usuario === "" || senha === "") {
        alert("⚠️ Os campos de usuário e senha não podem ficar vazios!");
        return;
    }

    if (usuario === usuarioPadrao && senha === senhaPadrao) {
        alert("✅ Login feito com sucesso!");
        window.location.href = "index.html";
    } else {
        alert("❌ Usuário ou senha inválidos!");
    }
});
