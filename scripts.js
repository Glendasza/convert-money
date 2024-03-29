const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.10
const euro = 5.53
const bitcoin = 106287

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')


    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }).format(inputReais);

    if (select.value === 'dolar') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            }).format(inputReais / dolar);
    }

    if (select.value === 'euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency',
                currency: 'EUR'
            }).format(inputReais / euro);
    }

    if (select.value === 'Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency',
                currency: 'BTC'
            }).format(inputReais / bitcoin);
    }

}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'dolar') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './assets/estados-unidos (1) 1.png'
    }


    if (select.value === 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.png'

    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/bitcoin.png'
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
