let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let valorPorHora = document.getElementById("valorPorHora").value;
        let interfazHoras = document.getElementById("interfazHoras").value;
        let htmlHoras = document.getElementById("htmlHoras").value;
        let cssHoras = document.getElementById("cssHoras").value;
        let funcionalidadHoras = document.getElementById("funcionalidadHoras").value;
        let valorTotal = (valorPorHora * interfazHoras) + (valorPorHora * htmlHoras) + (valorPorHora * cssHoras) + (valorPorHora * funcionalidadHoras);
        document.getElementById("valorTotal").value = "$" + valorTotal;
        
      })
}
funcionPredeterminada();