document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    
    const campos = [
        { id: "nome", nome: "Nome" },
        { id: "email", nome: "E-mail" },
        { id: "senha", nome: "Senha" },
        { id: "confirmarSenha", nome: "Confirmar senha" },
        { id: "cep", nome: "CEP" },
        { id: "rua", nome: "Rua" },
        { id: "numero", nome: "Número" },
        { id: "bairro", nome: "Bairro" },
        { id: "cidade", nome: "Cidade" }
    ];

    for (let campo of campos) {
        let valor = document.getElementById(campo.id).value.trim();
        if (valor === "") {
            alert(`⚠️ O campo "${campo.nome}" é obrigatório!`);
            document.getElementById(campo.id).focus();
            return;
        }
    }


    const senha = document.getElementById("senha").value.trim();
    const confirmarSenha = document.getElementById("confirmarSenha").value.trim();

    if (senha !== confirmarSenha) {
        alert("❌ As senhas não conferem!");
        document.getElementById("confirmarSenha").focus();
        return;
    }

    alert("✅ Cadastro realizado com sucesso!");
    document.getElementById("cadastroForm").reset();
});
