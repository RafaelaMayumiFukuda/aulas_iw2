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

    //  i = 0
    // i = i + i (i++)
    // i < usuarios,length

    for(let i=0;i<usuarios.length;i++){
    if(user == usuarios[i].login && password == usuarios[i].senha){
        console.log("Bem-vindo")
        alert("Logado")
        break
    } 
}
}

function logar(){
    let lg = document.getElementById("login").value
    let sn = document.getElementById("senha").value

    login(lg,sn)
}










 //function login(){

    //let login = "Bolo"
    //let senha = "1234"



    //let bancologin1 = "Bolo"
    //let bancosenha1 = "1234"

    //let bancologin2 = "Bolo"
    //let bancosenha2 = "1234"

    //let bancologin3 = "Bolo"
    //let bancosenha3 = "1234"

    //const vetorlg = [bancologin1,bancologin2,bancologin3]
    //const vetorsn = [bancosenha1,bancosenha2,bancosenha3]

    //if(login == vetorlg[0] && senha == vetorsn[0]){
        
    //}
 //}
