






const apps = document.querySelectorAll('.app');
let arrayApps = Array.from(apps);
let maiorClick = 0;
let indiceMaiorClick = 0;
const paiDaArray = document.querySelector('.main');
console.log(arrayApps)

arrayApps.forEach((app, index) => {
    let contadorDeClick = parseInt(app.dataset.contador); //ok. está pegando o contador do html

    app.addEventListener('click', (event) => {
        event.preventDefault();
        contadorDeClick++;
        app.dataset.index = contadorDeClick
        // console.log(arrayApps[4], parseInt(app.dataset.index))//pra saber se o contador de click funciona
        //daqui pra cima, tudo funcionando

        if (contadorDeClick > maiorClick) {
            maiorClick = contadorDeClick;
            indiceMaiorClick = index;
            // console.log(indiceMaiorClick) // testando - OK
            // console.log(`O maior clique agora é: ${maiorClick} do índice ${indiceMaiorClick}`);

            const elementoMaiorClick = arrayApps[indiceMaiorClick]
            // console.log(elementoMaiorClick) // TESTANDO - OK
            //O PROBLEMA ESTÁ A PARTIR DAQUI

            arrayApps.sort((a, b) => {
                const contadorA = parseInt(a.dataset.contador)
                const contadorB = parseInt(b.dataset.contador)
                return contadorB - contadorA
            })
            // arrayApps.splice(indiceMaiorClick, 1);
            // arrayApps.unshift(elementoMaiorClick);
            // console.log(arrayApps);
            
            console.log(arrayApps)
        }
    });
});

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