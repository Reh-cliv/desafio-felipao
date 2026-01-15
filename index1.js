//Calculadora de partidas rankeadas

function infosDoJogador(vitorias, derrotas){
    let saldoDeRankeados = vitorias - derrotas
    let nivel = ""
        if (saldoDeRankeados <= 10){
            nivel = "Ferro"
        }
        else if (11 <= saldoDeRankeados && saldoDeRankeados <= 20){
            nivel = "Bronze"
        }
        else if(21 <= saldoDeRankeados && saldoDeRankeados <= 50){
            nivel = "Prata"
        }
        else if(51 <= saldoDeRankeados && saldoDeRankeados <= 80){
            nivel = "Ouro"
        }
        else if(81 <= saldoDeRankeados && saldoDeRankeados <= 90){
            nivel = "Diamante"
        }
        else if(91 <= saldoDeRankeados && saldoDeRankeados <= 100){
            nivel = "Lendário"
        }
        else{
            nivel = "Imortal"
        }

    console.log("O Herói tem saldo de " + saldoDeRankeados, "vitórias e está no nível de " + nivel)
}

infosDoJogador(6, 2)
infosDoJogador(15, 2)
infosDoJogador(40, 10)
infosDoJogador(70, 10)
infosDoJogador(100, 12)
infosDoJogador(200, 30)