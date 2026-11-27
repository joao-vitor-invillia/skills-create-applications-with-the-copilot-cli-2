const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

describe('addition', () => {
  test.each([
    [2, 3, 5],
    [-2, -3, -5],
    [-2, 3, 1],
    [0, 0, 0],
    [5, 0, 5],
    [0.1, 0.2, 0.30000000000000004],
    [1e15, 1e15, 2e15],
  ])('%p + %p = %p', (a, b, expected) => {
    expect(addition(a, b)).toBe(expected);
  });
});

describe('subtraction', () => {
  test.each([
    [10, 4, 6],
    [4, 10, -6],
    [-5, -5, 0],
    [-5, 5, -10],
    [7, 0, 7],
    [0, 7, -7],
    [0.5, 0.25, 0.25],
  ])('%p - %p = %p', (a, b, expected) => {
    expect(subtraction(a, b)).toBe(expected);
  });
});

describe('multiplication', () => {
  test.each([
    [45, 2, 90],
    [-3, 4, -12],
    [-3, -4, 12],
    [5, 0, 0],
    [7, 1, 7],
    [0.5, 4, 2],
  ])('%p * %p = %p', (a, b, expected) => {
    expect(multiplication(a, b)).toBe(expected);
  });

  test('multiplicar por zero negativo retorna -0 ou 0', () => {
    expect(multiplication(-5, 0) + 0).toBe(0);
  });
});

describe('division', () => {
  test.each([
    [20, 5, 4],
    [5, 2, 2.5],
    [-20, 5, -4],
    [-20, -5, 4],
    [0, 5, 0],
    [7, 1, 7],
    [1, 4, 0.25],
  ])('%p / %p = %p', (a, b, expected) => {
    expect(division(a, b)).toBe(expected);
  });

  test('divisão por zero lança erro', () => {
    expect(() => division(10, 0)).toThrow('Divisão por zero não é permitida.');
  });

  test('zero dividido por zero lança erro', () => {
    expect(() => division(0, 0)).toThrow();
  });

  test('divisão por zero negativo lança erro', () => {
    expect(() => division(10, -0)).toThrow();
  });
});

describe('modulo', () => {
  test.each([
    [5, 2, 1],
    [10, 3, 1],
    [-10, 3, -1],
    [10, -3, 1],
    [8, 2, 0],
  ])('%p %% %p = %p', (a, b, expected) => {
    expect(modulo(a, b)).toBe(expected);
  });

  test('módulo por zero lança erro', () => {
    expect(() => modulo(10, 0)).toThrow('Módulo por zero não é permitido.');
  });
});

describe('power', () => {
  test.each([
    [2, 3, 8],
    [5, 0, 1],
    [2, -2, 0.25],
    [-3, 2, 9],
  ])('%p elevado a %p = %p', (base, exponent, expected) => {
    expect(power(base, exponent)).toBe(expected);
  });
});

describe('squareRoot', () => {
  test.each([
    [0, 0],
    [1, 1],
    [9, 3],
    [16, 4],
    [2, Math.sqrt(2)],
  ])('raiz quadrada de %p = %p', (n, expected) => {
    expect(squareRoot(n)).toBe(expected);
  });

  test('raiz quadrada de número negativo lança erro', () => {
    expect(() => squareRoot(-1)).toThrow(
      'Não é possível calcular a raiz quadrada de um número negativo.'
    );
  });
});
