const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

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
        const numero = parseFloat(entrada.replace(",", "."));
        
        if (!isNaN(numero)) {
            return numero;
        }
        console.log("Entrada inválida. Digite um número.");
    }
}

async function main() {
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

    rl.close();
}

// Executa a aplicação apenas se o arquivo for chamado diretamente no terminal
if (require.main === module) {
    main();
}

// Exporta a função calcular para o arquivo calculadora.test.js conseguir ler
module.exports = { calcular };