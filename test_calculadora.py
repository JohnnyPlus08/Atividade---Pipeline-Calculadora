import pytest

from calculadora import calcular


def test_soma():
    assert calcular(2, 3, "+") == 5


def test_subtracao():
    assert calcular(7, 4, "-") == 3


def test_multiplicacao():
    assert calcular(6, 5, "*") == 30


def test_divisao():
    assert calcular(9, 2, "/") == 4.5


def test_divisao_por_zero():
    with pytest.raises(ZeroDivisionError, match="dividir por zero"):
        calcular(1, 0, "/")


def test_operacao_invalida():
    with pytest.raises(ValueError, match="Operação inválida"):
        calcular(1, 2, "%")
