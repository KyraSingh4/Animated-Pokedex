let eevee = document.getElementById("eevee")
let eeveeStats = document.getElementById("eevee-stats")
let pidge = document.getElementById("pidge")
let pidgeStats = document.getElementById("pidge-stats")
let stats = document.getElementById("stats-btn")

eevee.style = "display:none"
eeveeStats.style = "display:none"
pidge.style = "display:none"
pidgeStats.style = "display:none"


statsBtn = document.getElementById("stats-btn")

// Choose a pokemon from the buttons
function choosePokemon(choose) {
    if (choose == eevee) {
        pidge.style = "display:none"
        eevee.style = "display:block"
        stats.addEventListener("mousedown", () => {
            eeveeStats.style = "display:block"
            pidgeStats.style = "display:none"
        })
        stats.addEventListener("mouseup", () => {
            eeveeStats.style = "display:none"
        })
    } else if (choose == pidge) {
        eevee.style = "display:none"
        pidge.style = "display:block"
        stats.addEventListener("mousedown", () => {
            pidgeStats.style = "display:block" 
            eeveeStats.style = "display:none"
        })
        stats.addEventListener("mouseup", () => {
            pidgeStats.style = "display:none"
        })
    } 
}

// use .innerHTML to change stats?
    

// changes the gif to attack gif
function attack(attack) {
    var eeveeImage
    var pidgeImage
    if (attack == 0) {
        eeveeImage = "pokemon/eevee/eevee-attack.webp"
        setTimeout(standStill, 2325);
        pidgeImage = "pokemon/pidgeotto/pidgeotto-attack.gif"
        setTimeout(standStill, 1825)
    } else {
        eeveeImage = "pokemon/eevee/eevee.gif"
        pidgeImage = "pokemon/pidgeotto/pidgeotto.webp"
    }
    eevee.src = eeveeImage
    pidge.src = pidgeImage
}

// changes from the attack gif to the idle gif
function standStill() {
  eeveeImage = "pokemon/eevee/eevee.gif"
  eevee.src = eeveeImage
  pidgeImage = "pokemon/pidgeotto/pidgeotto.webp"
  pidge.src = pidgeImage
}


