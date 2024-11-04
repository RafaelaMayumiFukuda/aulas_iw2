function produtos (prod){

    let n = parseInt(prod)

    switch(n){
        case 1 : 
            let prec1 = parseFloat(document.querySelector("#preco1").value)
            let qtd1 = parseInt(document.querySelector("#qtd1").value)
            let total1 = prec1 * qtd1
        break
        case 2:  
            let prec2 = parseFloat(document.querySelector("#preco2").value)
            let qtd2 = parseInt(document.querySelector("#qtd2").value)
            let total2 = prec2 * qtd2
        break
        case 3:
            let prec3 = parseFloat(document.querySelector("#preco3").value)
            let qtd3 = parseInt(document.querySelector("#qtd3").value)
            let total3 = prec3 * qtd3
        break
        case 4:
            let prec4 = parseFloat(document.querySelector("#preco4").value)
            let qtd4 = parseInt(document.querySelector("#qtd4").value)
            let total4 = prec4 * qtd4
        break
        case 5: 
            let prec5 = parseFloat(document.querySelector("#preco5").value)
            let qtd5 = parseInt(document.querySelector("#qtd5").value)
            let total5 = prec5 * qtd5
        break
        
        alert(n)
    }

    let prec = parseFloat(document.querySelector("#preco1").value)
    let qtd =parseInt(document.querySelector("#qtd1").value)

    let total = prec * qtd

    alert("O valor total: R$: " + total)
}

