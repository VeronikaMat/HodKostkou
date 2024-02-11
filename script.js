

let teplota= Number (prompt("Zadej teplotu v jednotkách °F:"))


const stupneC= (5/9 * (teplota-32))

document.body.innerHTML = Math.round(+ stupneC + "°C" )