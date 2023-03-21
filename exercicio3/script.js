//Crie a const para a frase aqui

const frase = "Jorge tem uma casa verde com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase)

const novaFrase = frase
.replaceAll('verde', 'rosa')
.replaceAll('azul', 'laranja')
console.log(novaFrase)

console.log(`A frase contem a palavra verde? ${novaFrase.includes("verde")}`)
console.log(`A frase contem a palavra laranja? ${novaFrase.includes("laranja")}`)

// DESAFIO

const outraFrase = "MAS NÃO DEIXE O GATO SAIR"
const tentativa1 = novaFrase.replace("mas não deixe o gato sair", outraFrase)
console.log(tentativa1)

// HIHIHIHIH DEU CERTOOOO