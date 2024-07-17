let alturaInput = document.getElementById('altura')
let pesoInput = document.getElementById('peso')
let calcularButton = document.getElementById('calcular')
let resultadoInput = document.getElementById('resultado')


calcularButton.addEventListener('click', () => {
    let altura = parseFloat(alturaInput.value) / 100
    let peso = parseFloat(pesoInput.value)

    let imc = peso / (altura * altura)
        resultadoInput.value = imc.toFixed(1)
    }
)
