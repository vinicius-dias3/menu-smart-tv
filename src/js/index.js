const apps = document.querySelectorAll('.app')
let arrayApps = Array.from(apps)
let maiorClick = 0
let indiceMaiorClick = 0

arrayApps.forEach((app, index)=> {
    let contadorDeClick = parseInt(app.dataset.contador)

    app.addEventListener('click', (event)=> {
        event.preventDefault()
        contadorDeClick++
        
        if(contadorDeClick > maiorClick){
            maiorClick = contadorDeClick
            indiceMaiorClick = index
            console.log(`O maior clique agora é: ${maiorClick} do índice ${indiceMaiorClick}`)
        }
    })
})
// let novoApps = []

//maneira diferente de escrever a mesma lógica.
// const apps = document.querySelectorAll('.app')
// let appsArray = [...apps]
// let maiorClick = 0
// let indiceMaiorClick = -1

// for (let i = 0; i < appsArray.length; i++){
//     const app = appsArray[i];
//     app.dataset.contador = 0

//     app.addEventListener('click', (event)=> {
//         event.preventDefault()
//         app.dataset.contador++
    
//         if(app.dataset.contador > maiorClick){
//             maiorClick = app.dataset.contador;
//             indiceMaiorClick = i;
//             console.log(`O maior clique agora é: ${maiorClick} do indice ${indiceMaiorClick}`)
//         }
//     })
// }