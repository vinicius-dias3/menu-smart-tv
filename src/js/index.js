const apps = document.querySelectorAll('.app');
let arrayApps = Array.from(apps);
let maiorClick = 0;
let indiceMaiorClick = 0;
const paiDaArray = document.querySelector('.main');
console.log(arrayApps)

arrayApps.forEach((app, index) => {
    // app.dataset.index = index; //confirmar esta linha
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
            // if(indiceMaiorClick){
                arrayApps.splice(indiceMaiorClick, 1);
                arrayApps.unshift(elementoMaiorClick);
                console.log(arrayApps);
            // }
                
                // arrayApps.forEach((app) => {
                //     paiDaArray.appendChild(app);
                // });
        }
    });
});



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