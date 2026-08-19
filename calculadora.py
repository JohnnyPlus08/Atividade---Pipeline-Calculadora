"""Calculadora simples executada no terminal."""


def calcular(numero1: float, numero2: float, operacao: str) -> float:
    """Executa a operação solicitada entre dois números."""
    if operacao == "+":
        return numero1 + numero2
    if operacao == "-":
        return numero1 - numero2
    if operacao == "*":
        return numero1 * numero2
    if operacao == "/":
        if numero2 == 0:
            raise ZeroDivisionError("Não é possível dividir por zero.")
        return numero1 / numero2
    raise ValueError("Operação inválida.")


def ler_numero(mensagem: str) -> float:
    """Pede um número ao usuário até que uma entrada válida seja informada."""
    while True:
        try:
            return float(input(mensagem).replace(",", "."))
        except ValueError:
            print("Entrada inválida. Digite um número.")


def main() -> None:
    print("=== Calculadora ===")
    print("Operações disponíveis: +  -  *  /")

    while True:
        numero1 = ler_numero("Primeiro número: ")
        numero2 = ler_numero("Segundo número: ")
        operacao = input("Operação: ").strip()

        try:
            resultado = calcular(numero1, numero2, operacao)
            print(f"Resultado: {resultado:g}")
        except (ValueError, ZeroDivisionError) as erro:
            print(f"Erro: {erro}")

        continuar = input("Deseja realizar outro cálculo? (s/n): ").strip().lower()
        if continuar != "s":
            print("Até logo!")
            break


if __name__ == "__main__":
    main()
