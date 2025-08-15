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

// Função para buscar endereço pelo CEP
document.getElementById("cep").addEventListener("blur", function () {
    let cep = this.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (cep.length !== 8) {
        alert("⚠️ CEP inválido! Digite 8 números.");
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert("❌ CEP não encontrado!");
                return;
            }

            document.getElementById("rua").value = data.logradouro || "";
            document.getElementById("bairro").value = data.bairro || "";
            document.getElementById("cidade").value = data.localidade || "";
        })
        .catch(error => {
            console.error("Erro ao buscar CEP:", error);
            alert("❌ Erro ao buscar o CEP. Tente novamente.");
        });
});
