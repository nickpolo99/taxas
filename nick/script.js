
const inputtaxas = document.getElementById("taxas");
const inputvalor = document.getElementById("valor");
const form = document.querySelector("form");
const divResultado = document.querySelector(".resultado");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("formulário foi submetido");

    let taxas = inputtaxas.value;
    const valor = parseFloat(inputvalor.value);

    fetch(`https://brasilapi.com.br/api/taxas/v1/${taxas}`)
        .then(response => response.json())
        .then(dados => {
            console.log(dados);
            const juros = valor * dados.valor; 
            divResultado.innerHTML = "";
            const ptotal = document.createElement("p");
            ptotal.innerHTML = `Em um ano renderia ${juros}`; 
            divResultado.appendChild(ptotal);
        })
        .catch(error => console.error('Erro:', error)); 
});




