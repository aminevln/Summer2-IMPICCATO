
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
//######################## GLOBAL VARIABLES ###########################à
let body = document.querySelector('body')
let main = document.querySelector('main')
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
function start_game(){
    
}
// console.log(parolaSegreta.length)
// let ct = document.getElementsByClassName('ro')[0]
// for(let i=0; i<parolaSegreta.length; ++i){
//       let cas = document.createElement('div')
//       cas.classList.add('cas')
//       if(i==0)
//           cas.textContent = parolaSegreta[0]
//       ct.appendChild(cas)
//     }
// let possibilita = 9
// let fnd = false
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