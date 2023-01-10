document.getElementById("eevee").style = "display:none"
document.getElementById("eevee-stats").style = "display:none"
document.getElementById("pidge").style = "display:none"
document.getElementById("pidge-stats").style = "display:none"

function chooseEevee(iChooseYou) {
    document.getElementById("pidge").style = "display:none"
    if (iChooseYou == 0) {
        document.getElementById("eevee").style = "display:block"
        document.getElementById("eevee-stats").style = "margin-top: -490px"
    } else {
        document.getElementById("eevee").style = "display:none"
    }
}

function choosePidge(iChooseYou) {
    document.getElementById("eevee").style = "display:none"
    document.getElementById("eevee-stats").style = "display:none"
    if (iChooseYou == 0) {
        document.getElementById("pidge").style = 
        "display:block;"
    } else {
        document.getElementById("pidge").style = "display:none"
    }
}

function stats() {
    var choose = chooseEevee(iChooseYou)
    if (iChooseYou == 0){
        document.getElementById("eevee-stats").style = "display:block"
    } else if (iChooseYou == 1) {
        document.getElementById("pidge-stats").style = "display:block"
    }
}

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

function standStill() {
  eeveeImage = "pokemon/eevee/eevee.gif"
  document.getElementById("eevee").src = eeveeImage
  pidgeImage = "pokemon/pidgeotto/pidgeotto.webp"
  document.getElementById("pidge").src = pidgeImage
}


