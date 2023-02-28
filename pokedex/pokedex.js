document.getElementById("eevee").style = "display:none"
document.getElementById("eevee-stats").style = "display:none"
document.getElementById("pidge").style = "display:none"
document.getElementById("pidge-stats").style = "display:none"

var choose = null

// Choose a pokemon from the buttons
function choosePokemon(choose) {
    if (choose == eevee) {
        document.getElementById("pidge").style = "display:none"
        document.getElementById("eevee").style = "display:block"
    } else if (choose == pidge) {
        document.getElementById("eevee").style = "display:none"
        document.getElementById("pidge").style = "display:block"
    } 
}


// function chooseEevee(iChooseYou) {
//     document.getElementById("pidge").style = "display:none"
//     if (iChooseYou == 0) {
//         document.getElementById("eevee").style = "display:block"
//         document.getElementById("eevee-stats").style = "margin-top: -490px"
//     } else {
//         document.getElementById("eevee").style = "display:none"
//     }
// }

// function choosePidge(iChooseYou) {
//     document.getElementById("eevee").style = "display:none"
//     document.getElementById("eevee-stats").style = "display:none"
//     if (iChooseYou == 0) {
//         document.getElementById("pidge").style = 
//         "display:block;"
//     } else {
//         document.getElementById("pidge").style = "display:none"
//     }
// }

// function to show stats based on the Pokemon
statsBtn = document.getElementById("stats-btn")
statsBtn.addEventListener("click", () => {
    document.getElementById("eevee-stats").style = "display:block" // test
})
    



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


