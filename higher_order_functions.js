let cont = 0
let jogadaX = []
let jogadaO = []
var jogadaFeita = ''
let jogadasFeitas = []
let v
const vitorias = {
    vitoria: ["1", "2", "3"],
    vitoria: ["4", "5", "6"],
    vitoria: ["7", "8", "9"],
    vitoria: ["1", "4", "7"],
    vitoria: ["2", "5", "8"],
    vitoria: ["3", "6", "9"],
    vitoria: ["1", "5", "9"],
    vitoria: ["3", "5", "7"]
}
const jogada = n => {
    cont++
    jogadaFeita = String(n)
    jogadasFeitas.push(jogadaFeita)

    if (jogadasFeitas.length >= 5) {
        jogadasFeitas.filter(item => {

        })
    }

    if (cont === 1) {
        document.getElementById(jogadaFeita).innerHTML = 'X'

    }
    if (cont === 2) {
        document.getElementById(jogadaFeita).innerHTML = 'O'

    }
    if (cont === 3) {
        document.getElementById(jogadaFeita).innerHTML = 'X'

    }
    if (cont === 4) {
        document.getElementById(jogadaFeita).innerHTML = 'O'

    }
    if (cont === 5) {
        document.getElementById(jogadaFeita).innerHTML = 'X'

    }
    if (cont === 6) {
        document.getElementById(jogadaFeita).innerHTML = 'O'

    }
    if (cont === 7) {
        document.getElementById(jogadaFeita).innerHTML = 'X'

    }
    if (cont === 8) {
        document.getElementById(jogadaFeita).innerHTML = 'O'

    }
    if (cont === 9) {
        document.getElementById(jogadaFeita).innerHTML = 'X'

    }

    if (cont > 9) {
        console.log('Fim de jogo');
        cont = 0
    }

    if (cont % 2 === 1) {
        jogadaX.push(jogadaFeita)
        console.log(jogadaX);
    }

    if (cont % 2 === 0) {
        jogadaO.push(jogadaFeita)
        console.log(jogadaO);
    }
}
