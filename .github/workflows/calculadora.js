import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

/**
 * Executa a operação solicitada entre dois números.
 * @param {number} numero1 
 * @param {number} numero2 
 * @param {string} operacao 
 * @returns {number}
 */
function calcular(numero1, numero2, operacao) {
    if (operacao === "+") return numero1 + numero2;
    if (operacao === "-") return numero1 - numero2;
    if (operacao === "*") return numero1 * numero2;
    if (operacao === "/") {
        if (numero2 === 0) {
            throw new Error("Não é possível dividir por zero.");
        }
        return numero1 / numero2;
    }
    throw new Error("Operação inválida.");
}

/**
 * Pede um número ao usuário até que uma entrada válida seja informada.
 * @param {readline.Interface} rl
 * @param {string} mensagem 
 * @returns {Promise<number>}
 */
async function lerNumero(rl, mensagem) {
    while (true) {
        const entrada = await rl.question(mensagem);
        // Substitui vírgula por ponto e converte para número
        const numero = parseFloat(entrada.replace(",", "."));
        
        if (!isNaN(numero)) {
            return numero;
        }
        console.log("Entrada inválida. Digite um número.");
    }
}

async function main() {
    // Inicializa a interface de leitura do terminal
    const rl = readline.createInterface({ input, output });

    console.log("=== Calculadora ===");
    console.log("Operações disponíveis: +  -  *  /");

    while (true) {
        const numero1 = await lerNumero(rl, "Primeiro número: ");
        const numero2 = await lerNumero(rl, "Segundo número: ");
        
        const entradaOperacao = await rl.question("Operação: ");
        const operacao = entradaOperacao.trim();

        try {
            const resultado = calcular(numero1, numero2, operacao);
            // O código abaixo equivale ao :g do Python (remove zeros desnecessários no final)
            console.log(`Resultado: ${Number(resultado.toFixed(10))}`);
        } catch (erro) {
            console.log(`Erro: ${erro.message}`);
        }

        const entradaContinuar = await rl.question("Deseja realizar outro cálculo? (s/n): ");
        const continuar = entradaContinuar.trim().toLowerCase();
        
        if (continuar !== "s") {
            console.log("Até logo!");
            break;
        }
    }

    rl.close(); // Fecha a interface do terminal
}

// Executa a função principal
main();