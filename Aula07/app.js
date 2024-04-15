function banco(){

const dados = [

    {id:1,login:"Serahine",senha:"1234",email:"Sera@email.com"},
    {id:2,login:"Rihna",senha:"4321",email:"Rih@email.com"},
    {id:3,login:"Molly",senha:"2134",email:"Mol@email.com"}

]

const ds = JSON.stringify(dados)

//localStorage.setItem("bd", ds)

return ds

}

console.log(banco())

function converte(){
    const ds = JSON.parse(localStorage.getItem("bd"))
    localStorage.removeItem("bd")

    let t = {id:4,login:"Phil",senha:"4312",email:"Ph@email.com"}

    ds.push(t)

    const json = JSON.setItem("bd", json)
    
}