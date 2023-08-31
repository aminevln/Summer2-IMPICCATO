
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

var paroleSegretee = [
    "ciao",
  "sole",
  "cane",
  "gatto",
  "casa",
  "mare",
  "cielo",
  "auto",
  "day",
  "notte",
  "festa",
  "amico",
  "felice",
  "banana",
  "garden",
  "libro",
  "musica",
  "mela",
  "computer",
  "stella",
  "bosco",
  "hot",
  "freddo",
  "gioco",
  "pranzo",
  "pasta",
  "pizza",
  "icecream",
  "torta",
  "calcio",
  "basket",
  "tennis",
  "swimming",
  "corsa",
  "school",
  "studio",
  "lezione",
  "pen",
  "matita",
  "quaderno",
  "telefono",
  "clock",
  "camicia",
  "pantalone",
  "scarpe",
  "borsa",
  "lampada",
  "settings",
  "martello",
  "cameriere",
  "programma",
  "umbrella",
  "coat",
  "tastiera",
  "torre",
  "bicicletta",
  "candel",
  "vento",
  "radio",
  "telefono",
  "carta",
  "luna",
  "juice",
  "cartella",
  "window",
  "anatra",
  "nave",
  "backpack",
]
var parolaSegreta = paroleSegrete[Math.floor(Math.random() * paroleSegrete.length)];
var parolaSegretaa = paroleSegretee[Math.floor(Math.random() * paroleSegretee.length)];
console.log(parolaSegreta+" "+parolaSegretaa)

//######################## GLOBAL VARIABLES ###########################à
let body = document.querySelector('body')
let main = document.querySelector('main')
let possibilita=6

main.innerHTML = ""
let h1 = document.createElement('h1')

h1.textContent = "scegli il tuo nickname..."
let input = document.createElement('input')
input.id = "chsNck"
input.placeholder = " inserisci il nome"
let btn = document.createElement('button')
btn.id = "avanti"
btn.textContent = "avanti"
main.appendChild(h1)
main.appendChild(input)
main.appendChild(btn)
btn.onclick = function() {start(input)} 
        
function start(name){
     
    if(name.value == "")
    {
        name.style.backgroundColor = "#c16e6e"
        name.focus()
        alert("inserisci un nome")
    }else{
        main.innerHTML = ""
        let h1 = document.createElement('h1')  
        h1.textContent = "ultimi dettagli..."
        let h3 = document.createElement('h3')
        h3.textContent = "vite giocatore"
        let h3i = document.createElement('h3')
        h3i.textContent = "evidenzia vocali"
        let h3b = document.createElement('h3')
        h3b.textContent = "parole straniere"

        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
        let div3 = document.createElement('div')

        ///DIV1 AREA
        let vite = document.createElement('h3')
        vite.textContent = "6"
        let divVite = document.createElement('div')
        let btn1 = document.createElement('button')
        let btn2 = document.createElement('button')

        btn1.textContent = "-"
        btn2.textContent = "+"

        btn1.onclick = function() {upAndDown(this, vite)}
        btn2.onclick = function() {upAndDown(this, vite)}

        btn1.style.margin = "10px"
        btn2.style.margin = "10px"
        btn1.style.width = "25px"
        btn2.style.width = "25px"
        btn1.style.fontSize = "1.5rem"
        btn2.style.fontSize = "1.5rem"

        divVite.appendChild(btn1)
        divVite.appendChild(vite)
        divVite.appendChild(btn2)
        divVite.id = "divDelCazzo"

        div1.appendChild(h3)
        div1.appendChild(divVite)
        div1.id = "div1"


        ///DIV2 AREA
        let flagVocali = document.createElement('h3')
        flagVocali.textContent = "no"

        let divVocali = document.createElement('div')
        let btn1v = document.createElement('button')
        let btn2v = document.createElement('button')

        btn1v.textContent = "<"
        btn2v.textContent = ">"

        btn1v.onclick = function() {yesOrNot(this, flagVocali)}
        btn2v.onclick = function() {yesOrNot(this, flagVocali)}

        btn1v.style.margin = "10px"
        btn2v.style.margin = "10px"
        btn1v.style.width = "25px"
        btn2v.style.width = "25px"
        btn1v.style.fontSize = "1.5rem"
        btn2v.style.fontSize = "1.5rem"

        divVocali.appendChild(btn1v)
        divVocali.appendChild(flagVocali)
        divVocali.appendChild(btn2v)
        divVocali.id = "divDelCazzo"

        div2.appendChild(h3i)
        div2.appendChild(divVocali)
        div2.id = "div1"

        ///DIV3
        let flagStraniera = document.createElement('h3')
        flagStraniera.textContent = "no"

        let divStraniere = document.createElement('div')
        let btn1f = document.createElement('button')
        let btn2f = document.createElement('button')

        btn1f.textContent = "<"
        btn2f.textContent = ">"

        btn1f.onclick = function() {yesOrNot(this, flagStraniera)}
        btn2f.onclick = function() {yesOrNot(this, flagStraniera)}

        btn1f.style.margin = "10px"
        btn2f.style.margin = "10px"
        btn1f.style.width = "25px"
        btn2f.style.width = "25px"
        btn1f.style.fontSize = "1.5rem"
        btn2f.style.fontSize = "1.5rem"

        divStraniere.appendChild(btn1f)
        divStraniere.appendChild(flagStraniera)
        divStraniere.appendChild(btn2f)
        divStraniere.id = "divDelCazzo"

        div3.appendChild(h3b)
        div3.appendChild(divStraniere)
        div3.id = "div1"

        let h2 = document.createElement('h2')
        h2.textContent = "iniziamo..."
        h2.id = "h2o"

        h2.onclick = function() {game(vite.textContent, flagVocali.textContent, flagStraniera.textContent, name, )}

        main.appendChild(h1)
        main.appendChild(div1)
        main.appendChild(div2)
        main.appendChild(div3)
        main.appendChild(h2)

    }
}
function upAndDown(btn, nVite){
    switch(btn.textContent){
        case "-":
            if(parseInt(nVite.textContent) > 0){
                let a = parseInt(nVite.textContent)-1
                nVite.textContent = a
            }
        break;
        case "+":
            if(parseInt(nVite.textContent)<15){
                let a = parseInt(nVite.textContent)+1
                nVite.textContent = a
            }
        break;
    }
}
function yesOrNot(btn, nVite){
    if(nVite.textContent == "no")
        nVite.textContent = "si"
    else
        nVite.textContent = "no"
}

function game(nVite, voc, stran, nick){
    possibilita = parseInt(nVite)
    let h1 = document.createElement('h1')
    let s="";
    for(let i=0; i<parseInt(nVite); ++i){
        s+="♥"
    }
    h1.textContent = nick.value + ": "+s
    main.innerHTML = ""
    let divWord = document.createElement('div')
    divWord.id = "divWord"
    let x
    if(stran == "si")
        x = parolaSegretaa
    else
        x = parolaSegreta
    for(let i=0; i<x.length; ++i){
        let div = document.createElement('div')
        div.classList.add('words')
        if(voc == "si"){
            if(x[i] == "a" || x[i] == "e" || x[i] == "i" || x[i] == "o" || x[i] == "u" )
            div.style.border = "2px solid red"
        }
        divWord.appendChild(div)
        
    }
    let input = document.createElement('input')
    input.id = "chsNck"
    input.placeholder = " indovina"
    input.onkeydown = function() {ver(event, this, h1, nick, nVite, x)}
    main.appendChild(h1)
    main.appendChild(divWord)
    main.appendChild(input)
}
function ver(e, input, h1, nick, nVite, x){
    let w = document.getElementsByClassName('words')
    let found = false, i;
    if(e.key == "Enter" && input.value!=""){
        for(i=0; i<x.length; i++ ){

            if(input.value == x[i]){
                found = true;
                w[i].textContent = input.value
            }else if(input.value == x){
                alert("hai vinto")
                return
            }
        }
        input.value=""

        if(!found)
        {
            input.value=""
            possibilita--
            let s=""
            for(let i=0; i<possibilita; ++i){
                s+="♥"
            }
            h1.textContent = nick.value + ": "+s
        }
        if(possibilita == 0){
            alert("hai perso! la parola era: "+x)
            window.location.reload();
        }
        let end = true
        for(let i=0; i<w.length; ++i){
            console.log(w[i].textContent)
            if(w[i].textContent == "")
                end = false
        }
        if(end){
            alert("hai vinto!")
            window.location.reload()
        }

        
    }
    
}