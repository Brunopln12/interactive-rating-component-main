function sel(botao){
    let result = document.getElementById('result')
    switch (botao) {
        case 1:
            let enviar = document.querySelector('.container-1__submit--button')
            enviar.disabled = false
            return result.innerHTML = "You selected out 1 of 5"          
            break;
        case 2:
            let enviar1 = document.querySelector('.container-1__submit--button')
            enviar1.disabled = false
            return result.innerHTML = "You selected out 2 of 5"          
            break;
        case 3:
            let enviar2 = document.querySelector('.container-1__submit--button')
            enviar2.disabled = false
            return result.innerHTML = "You selected out 3 of 5"          
            break;
        case 4:
            let enviar3 = document.querySelector('.container-1__submit--button')
            enviar3.disabled = false
            return result.innerHTML = "You selected out 4 of 5"          
            break;
        default:
            let enviar4 = document.querySelector('.container-1__submit--button')
            enviar4.disabled = false
            return result.innerHTML = "You selected out 5 of 5"
            break;
    }
}

function mudar(){
    let tela1 = document.querySelector('.container-1')
    let tela2 = document.querySelector('.container-2')
    tela1.style.display = "none"
    tela2.style.display = ""
}