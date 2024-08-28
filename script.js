let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('fres') 
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado! 🎉`
        lista.appendChild(item)
        res.innerHTML = '' // Limpa o resultado ao adicionar novo número
        res.innerHTML += `<p><span style="color: green; font-weight: bold;">Excelente!</span> Valor ${num.value} foi adicionado com sucesso!</p>`
    } else {
        res.innerHTML = `<p><span style="color: red; font-weight: bold;">Oops!</span> Valor inválido ou já encontrado na lista. 😔</p>`
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        res.innerHTML = '<p><span style="color: red; font-weight: bold;">Atenção!</span> Adicione valores primeiro! 🤔</p>'
        return
    }

    let soma = 0
    let media = 0
    let maior = valores[0]
    let menor = valores[0]

    for (let i in valores) {
        soma += valores[i]
        if (valores[i] > maior) maior = valores[i]
        if (valores[i] < menor) menor = valores[i]
    }

    media = soma / valores.length

    res.innerHTML = ''
    res.innerHTML += `<p><span style="color: blue; font-weight: bold;">Resumo:</span></p>`
    res.innerHTML += `<p>Total de números cadastrados: ${valores.length}. 📊</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}. 🌟</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}. 🔽</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}. 🧮</p>`
    res.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}. 📈</p>`
}