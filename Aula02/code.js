//console.log("Pão de Queijo")

let c1 = "verde"
let c2 = "azul"
let c3 = "cinza"
let c4 = "amarelo"
let c5 = "roxo"

//Array - Vetor
const dados = [c1,c2,c3,c4,c5]

let cor = "verde"

for(let i=0;i<dados.length;i++){

    if(cor == dados[i]){
        console.log("Encontrado " + i)
        break
    } else{
        console.log("Não encontrado")
    }
    
    

}



