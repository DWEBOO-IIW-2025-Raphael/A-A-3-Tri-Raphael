//Exercício 1
/*
Crie um programa que receba 3 conceitos (A, B, C ou D) e 3 frequências (0% a 100%) e verifique se no final a/o aluna/o está
ou não aprovado em LAEC. (1°, 2° e 3° trimestre)
*/

const conceitos = ['A', 'B', 'C']
const frequencias = [90, 70, 70]
function calcularConceito() {
    for (let i = 0; i < conceitos.length; i++) {
        const conc = conceitos[i];
        let somaConc = 0
        if (conc == 'A') {
            somaConc += 4
        } else if (conc == 'B') {
            somaConc += 3
        } else if (conc == 'C') {
            somaConc += 2
        } else{
            somaConc += 1
        }
        let media = somaConc / 3
        let concFinal = ''
        media = 1, concFinal = 'D'
        media > 1, concFinal = 'C'
        media > 2, concFinal = 'B'
        media > 3, concFinal = 'A'
        console.log(concFinal);
         
    }
}
calcularConceito()