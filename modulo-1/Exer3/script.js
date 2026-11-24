/*
let msn = ''
msn += 'Maçarico,'
msn += '\n Bomba Termonuclear,'
msn += '\n Placa de Urânio,'
msn += '\n Desassimilador Atômico,'
msn += '\n Ilha no Caribe,'
msn += '\n Arquivos da CIA,'
msn += '\n Neymar,'
console.log(msn)
*/
//Operadores lógicos >, <, <=, >=, !=== !== == === 
/*
const nota = 7
const aprovado = nota >= 6
console.log(aprovado)
*/
/*
console.log(5 === '5');
console.log(5 == '10');
console.log(0 == '');
console.log(0 == false);
*/
//Operadores lógicos
// && - AND
// || - OR
// ! - NOT

let media = 8.0
let frequencia = 80
const aprovadoPorNota = media >= 6
const aprovadoPorFrequencia = frequencia >= 75
const aprovado = aprovadoPorNota && aprovadoPorFrequencia
console.log(`Aprovado? ${aprovado}`);
//tarefa 1 - converter código