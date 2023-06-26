
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
console.log(parolaSegreta);

console.log(parolaSegreta.length)
let ct = document.getElementsByClassName('ro')[0]
for(let i=0; i<parolaSegreta.length; ++i){
      let cas = document.createElement('div')
      cas.classList.add('cas')
      if(i==0)
          cas.textContent = parolaSegreta[0]
      ct.appendChild(cas)
    }
let possibilita = 9
let fnd = false
function ver(){
    fnd = false
    let cass = document.getElementsByClassName('cas')
    let str = document.querySelector('input')

    for(let i=0; i<parolaSegreta.length; ++i)
        if(str.value===parolaSegreta[i]){
            cass[i].textContent = str.value
            fnd = true   
        }
    if(!fnd)
    {
        possibilita--
        document.getElementById('possibilita').textContent = possibilita.toString()
    }
    if(str.value === parolaSegreta)
        document.getElementById('possibilita').textContent = 'HAI VINTO'
    str.value = ""
}