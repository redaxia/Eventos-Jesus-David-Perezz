const PesoColombianoInput = document.getElementById('PesoColombiano')
const dolarInput = document.getElementById('dolar')
const conversionRate = 3950

dolarInput.addEventListener('input', () => {
    const dolarValue = parseFloat(dolarInput.value)
    if (dolarValue) {
        PesoColombianoInput.value = (dolarValue * conversionRate)
    }
});

PesoColombianoInput.addEventListener('input', () => {
    const PesoColombianoValue = parseFloat(PesoColombianoInput.value);
    if (PesoColombianoValue) {
        dolarInput.value = (PesoColombianoValue / conversionRate)
    }
});