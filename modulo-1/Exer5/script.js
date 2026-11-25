//Crie um algoritimo para sortear um numero de 1 a 10, inclusivos (???). O usuario tenta adivinhar, mostre quantas 
// tentativas ele necessitoupara acertar o numero. Insira uma condição onde o usuario delimita quantas chances ele 
// terá para acertar o número

const chances = Number(prompt('Quantas chances para acertar o número você quer ter?'))
const numeroSorteado = Math.floor(Math.random() * 10) + 1
let acertou = false

for (let i = 0; i < chances; i++) {
    const resposta = Number(prompt(`Tentativa ${i + 1} de ${chances}:`))
    
    if (resposta === numeroSorteado) {
        alert(`Você acertou o número em ${i + 1} tentativa(s)!`)
        acertou = true
        break
    }
}

if (!acertou) {
    alert(`Suas chances acabaram! O número sorteado era ${numeroSorteado}.`)
}
