 function dados(){
    const ds= [
    
        {id:1,login:"Bolo",senha:"1234",email:"ovo@gmail.com"},
        {id:2,login:"Bolo Choco",senha:"4321",email:"ovoeleite@gmail.com"},
        {id:3,login:"Bolo Ninho",senha:"2143",email:"ovoleitefarinha@gmail.com"}
    ]

    return ds

 }

 function login(user,password){

    const usuarios = dados()

    for(let i=0;i<usuarios.length;i++){
    if(user == usuarios[i].login && password == usuarios[i].senha){
        console.log("Bem-vindo")
        break
    } 
}
}

function logar(){
    let lg = document.getElementById("login").value
    let sn = document.getElementById("Senha").value

    login(lg,sn)
}
 login("Bolo","1234")
