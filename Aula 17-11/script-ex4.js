/*
Exercício 4.
Calcule a média de três notas lidas com prompt e mostre-a arredondada para uma casa decimal. 
 */

const nota1 = Number(prompt("Digite a primeira nota"))
const nota2 = Number(prompt("Digite a segunda nota"))
const nota3 = Number(prompt("Digite a terceira nota"))

function calcularMedia() {
    const soma = nota1 + nota2 + nota3
    const media = Math.round(soma / 3)
    console.log(`A nota média é de: ${media}`)
}
calcularMedia()