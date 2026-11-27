#!/usr/bin/env node
/**
 * Calculadora CLI em Node.js.
 *
 * Operações suportadas:
 *  - addition       (+)  : soma de dois números
 *  - subtraction    (-)  : subtração de dois números
 *  - multiplication (*)  : multiplicação de dois números
 *  - division       (/)  : divisão de dois números (divisão por zero é erro)
 *
 * Uso: node src/calculator.js <numero1> <operador> <numero2>
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

const operations = {
  '+': addition,
  '-': subtraction,
  '*': multiplication,
  x: multiplication,
  '/': division,
};

function main(args) {
  const [rawA, op, rawB] = args;
  if (args.length !== 3) {
    console.error('Uso: node src/calculator.js <numero1> <+|-|*|/> <numero2>');
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
    console.error(`Erro: operador "${op}" não suportado. Use +, -, * ou /.`);
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

module.exports = { addition, subtraction, multiplication, division };
