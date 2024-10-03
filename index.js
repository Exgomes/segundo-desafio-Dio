// Função para calcular o saldo de vitórias e derrotas
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível com base nas vitórias
function determinarNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

function calculadoraDePartidas(vitorias, derrotas) {
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(vitorias);
    

    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

let vitorias = 1000; 
let derrotas = 12; 

calculadoraDePartidas(vitorias, derrotas);