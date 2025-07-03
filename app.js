const começo = document.getElementById('btnin')
const jogo = document.getElementById('resposta')

começo.addEventListener('click', ()=>{
    começo.style.display = 'none'
    jogo.style.opacity = '1'
})

const resul = document.getElementById('resul')
const btn = document.getElementById('btchu')
let resposta = Math.floor(Math.random() * 10)

console.log(resposta)
let tentativas = 0

function verificar(){
    const nuxm = document.getElementById('chute')
    let numechute = Number(nuxm.value)
    if(numechute === resposta){
        let img = new Image(200, 200)
        img.src = 'midia/_.jpeg'
        resul.innerHTML = `ACERTOU`
        resul.appendChild(img)
    } else {
        if(nuxm.value === ""){
            alert('chute um numero')
        } else {
            tentativas++
            resul.innerHTML = `ERROU`
            nuxm.value = ""
            if(tentativas >= 3){
                alert('acabou as suas tentativas, recarregue a pagina e tente novamente.')
                jogo.style.display = 'none'
            }
        }
    }
}
