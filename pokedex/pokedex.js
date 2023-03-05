document.getElementById("eevee").style = "display:none"
document.getElementById("eevee-stats").style = "display:none"
document.getElementById("pidge").style = "display:none"
document.getElementById("pidge-stats").style = "display:none"

statsBtn = document.getElementById("stats-btn")

// Choose a pokemon from the buttons
function choosePokemon(choose) {
    stats = document.getElementById("stats-btn")
    if (choose == eevee) {
        document.getElementById("pidge").style = "display:none"
        document.getElementById("eevee").style = "display:block"
        stats.addEventListener("mousedown", () => {
            document.getElementById("eevee-stats").style = "display:block"
            document.getElementById("pidge-stats").style = "display:none"
        })
        stats.addEventListener("mouseup", () => {
            document.getElementById("eevee-stats").style = "display:none"
        })
    } else if (choose == pidge) {
        document.getElementById("eevee").style = "display:none"
        document.getElementById("pidge").style = "display:block"
        stats.addEventListener("mousedown", () => {
            document.getElementById("pidge-stats").style = "display:block" 
            document.getElementById("eevee-stats").style = "display:none"
        })
        stats.addEventListener("mouseup", () => {
            document.getElementById("pidge-stats").style = "display:none"
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
    document.getElementById("eevee").src = eeveeImage
    document.getElementById("pidge").src = pidgeImage
}

// changes from the attack gif to the idle gif
function standStill() {
  eeveeImage = "pokemon/eevee/eevee.gif"
  document.getElementById("eevee").src = eeveeImage
  pidgeImage = "pokemon/pidgeotto/pidgeotto.webp"
  document.getElementById("pidge").src = pidgeImage
}


