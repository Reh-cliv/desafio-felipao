let herói = "Eleven"
let valorXp = 11000
let nivel = ""

if(valorXp <= 1000){
    nivel = "Ferro"
}
else if(valorXp >= 1001 && valorXp <= 2000){
    nivel = "Bronze"
}
else if(valorXp >= 2001 && valorXp <= 5000){
    nivel = "Prata"
}
else if(valorXp >= 5001 && valorXp <= 7000){
    nivel = "Ouro"
}
else if(valorXp >= 7001 && valorXp <= 8000){
    nivel = "Platina"
}
else if(valorXp >= 8001 && valorXp <= 9000){
    nivel = "Ascendente"
}
else if(valorXp >= 9001 && valorXp <= 10000){
    nivel = "Imortal"
}
else{
    nivel = "Radiante"
}

console.log("O Herói do nome " + herói, "está no nível de " + nivel)