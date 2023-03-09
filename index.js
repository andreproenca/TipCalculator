function formatMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$ ' + value
}

function formatSplit(value) {
    if (value == 1) return value + ' person'
    return value + ' people'
}

function newCalc() {
    window.location.reload() //essa função é chamada pelo HTML, quando pressiona o botao 'New'
}

function update() {
    // get values from HTML
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    //calculate values
    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    // return values to HTML    
    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billEach)
}