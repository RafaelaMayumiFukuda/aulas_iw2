function banco(){

    const ds = [
            {id:1,login:"mel",senha:"1234",email:"mayumirafaela0@gmail.com",tel:"4002-8922"},
            {id:2,login:"mah",senha:"4321",email:"mayumi0@gmail.com",tel:"4042-8922"},
            {id:3,login:"amai",senha:"1324",email:"mayumirafa0@gmail.com",tel:"4232-8922"}
        ]

    const dados = JSON.stringify(ds)

    localStorage.setItem("dados", dados)

    return dados

}


function cadCliente(){
    let id = document.getElementById("id").value
    let lg = document.getElementById("login").value
    let sn = document.getElementById("senha").value
    let em = document.getElementById("email").value
    let fn = document.getElementById("tel").value

    let meuId = parseInt(id)

    const ds = {id:meuId,login:lg,senha:sn,email:em,tel:fn}

    alert(ds)
}