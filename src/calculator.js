#!/usr/bin/env node
/**
 * Calculadora CLI em Node.js.
 *
 * Operações suportadas:
 *  - addition       (+)  : soma de dois números
 *  - subtraction    (-)  : subtração de dois números
 *  - multiplication (*)  : multiplicação de dois números
 *  - division       (/)  : divisão de dois números (divisão por zero é erro)
 *  - modulo         (%)  : resto da divisão de dois números
 *  - power          (^)  : exponenciação
 *  - squareRoot     (sqrt): raiz quadrada de um número não negativo
 *
 * Uso: node src/calculator.js <numero1> <operador> <numero2>
 *      node src/calculator.js sqrt <numero>
 * Exemplo: node src/calculator.js 6 '*' 7
 */

// Adição: retorna a + b
function addition(a, b) {
  return a + b;
}

// Subtração: retorna a - b
function subtraction(a, b) {
  return a - b;
}

// Multiplicação: retorna a * b
function multiplication(a, b) {
  return a * b;
}

// Divisão: retorna a / b; lança erro se b for zero
function division(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero não é permitida.');
  }
  return a / b;
}

// Módulo: retorna o resto de a / b; lança erro se b for zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Módulo por zero não é permitido.');
  }
  return a % b;
}

// Potência: retorna base elevada a exponent
function power(base, exponent) {
  return base ** exponent;
}

// Raiz quadrada: lança erro para números negativos
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Não é possível calcular a raiz quadrada de um número negativo.');
  }
  return Math.sqrt(n);
}

const operations = {
  '+': addition,
  '-': subtraction,
  '*': multiplication,
  x: multiplication,
  '/': division,
  '%': modulo,
  '^': power,
  '**': power,
};

function main(args) {
  if (args.length === 2 && args[0] === 'sqrt') {
    const n = Number(args[1]);
    if (Number.isNaN(n)) {
      console.error('Erro: o operando deve ser um número.');
      process.exit(1);
    }

    try {
      console.log(squareRoot(n));
    } catch (err) {
      console.error(`Erro: ${err.message}`);
      process.exit(1);
    }
    return;
  }

  const [rawA, op, rawB] = args;
  if (args.length !== 3) {
    console.error('Uso: node src/calculator.js <numero1> <+|-|*|/|%|^|**> <numero2> ou sqrt <numero>');
    process.exit(1);
  }

  const a = Number(rawA);
  const b = Number(rawB);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Erro: os operandos devem ser números.');
    process.exit(1);
  }

  const fn = operations[op];
  if (!fn) {
    console.error(`Erro: operador "${op}" não suportado. Use +, -, *, /, %, ^ ou **.`);
    process.exit(1);
  }

  try {
    console.log(fn(a, b));
  } catch (err) {
    console.error(`Erro: ${err.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main(process.argv.slice(2));
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
