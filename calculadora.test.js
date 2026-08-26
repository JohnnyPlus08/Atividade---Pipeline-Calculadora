const { calcular } = require('./calculadora');

test('test_soma', () => {
    expect(calcular(2, 3, '+')).toBe(5);
});

test('test_subtracao', () => {
    expect(calcular(7, 4, '-')).toBe(3);
});

test('test_multiplicacao', () => {
    expect(calcular(6, 5, '*')).toBe(30);
});

test('test_divisao', () => {
    expect(calcular(9, 2, '/')).toBe(4.5);
});

test('test_divisao_por_zero', () => {
    expect(() => {
        calcular(1, 0, '/');
    }).toThrow(/dividir por zero/);
});

test('test_operacao_invalida', () => {
    expect(() => {
        calcular(1, 2, '%');
    }).toThrow(/Operação inválida/);
});
