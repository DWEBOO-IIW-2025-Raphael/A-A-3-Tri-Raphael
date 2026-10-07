const nome = "Raphael";
const cidade = "Assis Chateaubriand"
const anoNasc = 2010;

console.log(`${nome} nasceu em ${cidade} em ${anoNasc} e possui ${2026 - anoNasc}`);

document.getElementById("saida").textContent = `${nome} nasceu em ${cidade} em ${anoNasc} e possui ${2026 - anoNasc} anos`;
