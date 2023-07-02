
var paroleSegrete = [
  "ciao",
  "sole",
  "cane",
  "gatto",
  "casa",
  "mare",
  "cielo",
  "auto",
  "giorno",
  "notte",
  "festa",
  "amico",
  "felice",
  "banana",
  "giardino",
  "libro",
  "musica",
  "mela",
  "computer",
  "stella",
  "bosco",
  "caldo",
  "freddo",
  "gioco",
  "pranzo",
  "pasta",
  "pizza",
  "gelato",
  "torta",
  "calcio",
  "basket",
  "tennis",
  "nuoto",
  "corsa",
  "scuola",
  "studio",
  "lezione",
  "penna",
  "matita",
  "quaderno",
  "telefono",
  "orologio",
  "camicia",
  "pantalone",
  "scarpe",
  "borsa",
  "lampada",
  "calendario",
  "martello",
  "cameriere",
  "programma",
  "ombrello",
  "giubbotto",
  "tastiera",
  "torre",
  "bicicletta",
  "candela",
  "vento",
  "radio",
  "telefono",
  "carta",
  "luna",
  "frutta",
  "cartella",
  "finestra",
  "anatra",
  "nave",
  "zaino",
]
var parolaSegreta = paroleSegrete[Math.floor(Math.random() * paroleSegrete.length)];

console.log(parolaSegreta)

//######################## GLOBAL VARIABLES ###########################à
let body = document.querySelector('body')
let main = document.querySelector('main')
let possibilita = 9

function start(){
    main.style.backgroundImage = "url(./img/wall.jpg)"
    let h1 = document.createElement('h1')
    let p = document.createElement('h3')
    let div = document.createElement('div')
    h1.textContent = 'Benvenuto sfidante'
    p.textContent = 'Scegli la modalità di gioco'
    main.appendChild(h1)
    main.appendChild(p)
    div.id = 'div_1'
    for(let i=0; i<2; i++){
        let mini_div = document.createElement('div')
        mini_div.classList.add('mini_div')
        div.appendChild(mini_div)
        if(i==0){
            let img = document.createElement('img')
            img.src = './img/0.png'
            img.id = 'img_0'
            mini_div.appendChild(img)
            img.onclick = function() {start_game(this)};
        }else{
            let img = document.createElement('img')
            img.src = './img/1.png'
            img.id = 'img_1'
            mini_div.appendChild(img)
            img.onclick = function() {start_game(this)};
        }
    }
    main.appendChild(div)
}
function start_game(img){
    switch(img.id){
        case 'img_0':
            main.innerHTML = ""
        break;
        case 'img_1':
            main.innerHTML = ""
            let h1 = document.createElement('h1')
            h1.textContent = 'IMPICCATO'
            let div = document.createElement('div')
            div.id = 'div_2'
            let mini_div_1 = document.createElement('div')
            mini_div_1.id = 'mini_div_1'
            let h4 = document.createElement('h4')
            h4.textContent = 'barra tentativi restanti'
            h4.style.textAlign = 'start'
            for(let i=0; i<9; ++i){
                let possibilita = document.createElement('div')
                possibilita.classList.add('possibilita')
                mini_div_1.appendChild(possibilita)
            }
            div.appendChild(mini_div_1)
            main.appendChild(h1)
            main.appendChild(h4)
            main.appendChild(div)
        
            let h3 = document.createElement('h3')
            h3.textContent = 'parola segreta'
            h3.style.textAlign = 'center'
            div.appendChild(h3)
            let mini_div_2 = document.createElement('div')
            mini_div_2.id = 'mini_div_2'
            for(let i=0; i<parolaSegreta.length; ++i){
                let cas = document.createElement('div')
                cas.classList.add('cas')
                if(i==0)
                  cas.textContent = parolaSegreta[0]
                mini_div_2.appendChild(cas)
            }
            div.appendChild(mini_div_2)
            let input = document.createElement('input')
            input.id = 'input'
            div.appendChild(input)
            let value = ''
            let fnd = false
            let cass = document.getElementsByClassName('cas')
            let possibilit = document.getElementsByClassName('possibilita')
            input.addEventListener('keydown', (event)=>{
                if(event.keyCode === 13)
                    value = input.value
                    for(let i=0; i<parolaSegreta.length; ++i)
                    if(value===parolaSegreta[i]){
                        cass[i].textContent = value
                        fnd = true   
                    }
                if(!fnd)
                {
                    possibilita--
                    possibilit[possibilita].style.visibility = 'hidden'
                }
            })
            input.value = ''
            break;
        }
            
}
// console.log(parolaSegreta.length)
// let ct = document.getElementsByClassName('ro')[0]
// 
// let possibilita = 9
// 
// function ver(){
//     fnd = false
//     let cass = document.getElementsByClassName('cas')
//     let str = document.querySelector('input')

//     for(let i=0; i<parolaSegreta.length; ++i)
//         if(str.value===parolaSegreta[i]){
//             cass[i].textContent = str.value
//             fnd = true   
//         }
//     if(!fnd)
//     {
//         possibilita--
//         document.getElementById('possibilita').textContent = possibilita.toString()
//     }
//     if(str.value === parolaSegreta)
//         document.getElementById('possibilita').textContent = 'HAI VINTO'
//     str.value = ""
// }