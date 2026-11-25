//Exercício 1
/*
Crie um programa que receba 3 conceitos (A, B, C ou D) e 3 frequências (0% a 100%) e verifique se no final a/o aluna/o está
ou não aprovado em LAEC. (1°, 2° e 3° trimestre)
*/

const conceitos = ['A', 'B', 'C']
const frequencias = [90, 70, 70]
function calcularConceito() {
    let somaConc = 0
    for (let i = 0; i < conceitos.length; i++) {
        const conc = conceitos[i]
        if (conc == 'A') {
            somaConc += 4
        } else if (conc == 'B') {
            somaConc += 3
        } else if (conc == 'C') {
            somaConc += 2
        } else{
            somaConc += 1
        }
    }
    let mediaConc = somaConc / 3
    console.log(mediaConc)

    if (mediaConc >=2) {
        const aprovacaoConc = true
        return aprovacaoConc
    } else {
        const aprovacaoConc = false
        return aprovacaoConc
    }
}

function calcularFrequencia() {
    let somaFreq = 0
    for (let i = 0; i < frequencias.length; i++) {
        const freq = frequencias[i];
        somaFreq += freq
    }
    let mediaFreq = Math.round(somaFreq / 3)
    console.log(mediaFreq)

    if (mediaFreq >= 75) {
        const aprovacaoFreq = true
        return aprovacaoFreq
    } else {
        const aprovacaoFreq = false
        return aprovacaoFreq
    }
}

function aprovacao() {
    if (calcularConceito() && calcularFrequencia()) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

aprovacao()