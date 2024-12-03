function calcularNivelRanqueado(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível baseado no número de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}


// Exemplos de uso
console.log(calcularNivelRanqueado(25, 10)); // Exemplo de Prata
console.log(calcularNivelRanqueado(90, 5));  // Exemplo de Diamante
console.log(calcularNivelRanqueado(105, 20)); // Exemplo de Imortal