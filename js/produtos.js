document.addEventListener("DOMContentLoaded", function () {
    const listaProdutos = document.getElementById("lista-produtos");

    fetch("produtos.json")
        .then(response => {
            if (!response.ok) throw new Error("Erro ao carregar os produtos.");
            return response.json();
        })
        .then(produtos => {
            produtos.forEach(produto => {
                const item = document.createElement("div");
                item.classList.add("produto");

                item.innerHTML = `
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <h3>${produto.nome}</h3>
                    <p>Marca: ${produto.marca}</p>
                    <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                `;
                listaProdutos.appendChild(item);
            });
        })
        .catch(error => {
            listaProdutos.innerHTML = `<p style="color:red;">Erro: ${error.message}</p>`;
        });
});
