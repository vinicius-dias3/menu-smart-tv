let apps = document.querySelectorAll('.app')
let arrayApps = []
let maiorClick = 0
let indiceMaiorClick = -1; //testar com 0 como no outro documento
const paiDaArray = document.querySelector('.main');
let contadorDeClick = 0


apps.forEach((app)=> {
    let nomeDaClasse = Array.from(app.classList)
    arrayApps.push({element: app, nome: nomeDaClasse, contadorDeClick: 0})
})

arrayApps.forEach((app, index)=> {
    app.element.addEventListener('click', (event)=> {
        event.preventDefault()
        app.contadorDeClick++ //acessando a propriedade do objeto da array - OK

        if(app.contadorDeClick > maiorClick){
            maiorClick = app.contadorDeClick
            indiceMaiorClick = index 
            console.log('deu true!!!', 'o índice do maior click foi: ', indiceMaiorClick)
        }

        arrayApps.sort((a, b)=> b.contadorDeClick - a.contadorDeClick)
        console.log(arrayApps)
        paiDaArray.innerHTML = ''
        arrayApps.forEach((element)=> paiDaArray.appendChild(element.element))
    })
})

/*//código para entender melhor o conceito de mecher na array
const veiculos = ['carro', 'moto', 'barco', 'caminhão', 'bicicleta']
console.log(veiculos)
const barco = 'barco'
const indiceBarco = veiculos.indexOf(barco)
console.log(indiceBarco)

    if(indiceBarco){
        veiculos.splice(indiceBarco, 1)
        veiculos.unshift(barco)
    }
    console.log(veiculos)*/