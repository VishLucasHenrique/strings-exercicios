const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(`Minha string tem um total de ${minhaString.length} caracteres`)

const outraString = minhaString.trim()
console.log(`Minha string agora tem um total de ${outraString.length} caracteres`)

const novaString = minhaString.replace("________", "sticioso")
console.log(novaString)
