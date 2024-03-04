function dados(){

        const ds = [
                {id:1,login:"Mayumi",senha:"444555",email:"mayumirafaela0@gmail.com" },
                {id:2,login:"May",senha:"494555",email:"rafaela0@gmail.com" },
                {id:3,login:"Ma",senha:"4440955",email:"mrafaela0@gmail.com" }
        ]
        
        const dados = JSON.stringify(ds) //passa para o formato JSON - teste

        localStorage.setItem("nome", dados) //Insere no armazenamento do navegador


        return dados

}

function removerbd(){

    localStorage.removeItem("nome")

}


