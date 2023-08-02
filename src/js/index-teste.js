let apps = document.querySelectorAll('.app')
let arrayApps = []
let maiorClick = 0
let indiceMaiorClick = 0; //testar com 0 como no outro documento
const paiDaArray = document.querySelector('.main');
let contadorDeClick = 0


apps.forEach((app)=> {
    let nomeDaClasse = Array.from(app.classList)
    arrayApps.push({element: app, nome: nomeDaClasse, contadorDeClick: 0})
})
console.log(arrayApps)

arrayApps.forEach((app, index)=> {
    app.element.addEventListener('click', (event)=> {
        event.preventDefault()
        app.contadorDeClick++ //verificar se está acessando a propriedade do objeto da array

        if(contadorDeClick > maiorClick){
            maiorClick = app.contadorDeClick
            indiceMaiorClick = index 
            console.log(arrayApps)
        }else{
            // console.log('algo deu errado')
            console.log(indiceMaiorClick)
            console.log(arrayApps) //o contador do objeto está icrementando
        }
    })
})
console.log(arrayApps)
/*
apps.forEach((app)=> {
    let nome = app.classList
    let contadorDeClick = parseInt(app.dataset.contador)
    
    objetoApps[nome] = {'nome': nome, 'contadorDeClick': contadorDeClick}

    // let nomeDaClasse = app.classList
    // let contadorDeClick = parseInt(app.dataset.contador)
    // objetoApps['nome'] = nomeDaClasse
    // objetoApps['contadorDeClick'] = contadorDeClick
})

let arrayApps = Object.values(objetoApps)

console.log(arrayApps)
*/
/*
let apps = [
    {nome: 'globoplay', acesso: 0},
    {nome: 'prime video', acesso: 0},
    {nome: 'hbo max', acesso: 0},
    {nome: 'netflix', acesso: 0},
    {nome: 'disney', acesso: 0},
    {nome: 'youtube', acesso: 0},
]

//função para acessar um app
function acessarApp(appNome){
    const appIndex = apps.findIndex(app => app.nome === appNome)
    //método findIndex encontra o indice do elemento na array
    console.log(appIndex)
    if (appIndex !== -1){
        apps[appIndex].acesso++
        apps.sort((a, b) => b.acesso - a.acesso)
    }else{
        console.log('App não encontrado')
    }
}

//exemplo de acesso aos apps (simulando acessos)
acessarApp('hbo max')
// acessarApp('netflix')
// acessarApp('netflix')
// acessarApp('netflix')

//imprime a lista atualizada de apps
console.log(apps)
*/