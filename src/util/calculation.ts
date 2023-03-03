type strOrNum = number | string;
/**
 * 0.1+0.2  // 0.30000000000000004
 *
 * add(0.1,0.2) // 0.3
 * @public
 */
function add(a: strOrNum, b: strOrNum): number {
  const precision = getPrecision(a, b);
  const numA = toNumber(a, precision);
  const numB = toNumber(b, precision);
  return (numA + numB) / precision;
}

/**
 * 0.3-0.1  // 0.19999999999999998
 *
 * subtract(0.3,0.1) // 0.2
 * @public
 */
function subtract(a: strOrNum, b: strOrNum): number {
  const precision = getPrecision(a, b);
  const numA = toNumber(a, precision);
  const numB = toNumber(b, precision);
  return (numA - numB) / precision;
}

/**
 * 0.1*0.2  // 0.020000000000000004
 *
 * multiply(0.1,0.2) // 0.02
 * @public
 */
function multiply(a: strOrNum, b: strOrNum): number {
  const precision = getPrecision(a, b);
  const numA = toNumber(a, precision);
  const numB = toNumber(b, precision);
  return (numA * numB) / (precision * precision);
}

/**
 * 0.3/0.1  // 2.9999999999999996
 *
 * divide(0.3,0.1) // 3
 * @public
 */
function divide(a: strOrNum, b: strOrNum): number {
  const precision = getPrecision(a, b);
  const numA = toNumber(a, precision);
  const numB = toNumber(b, precision);
  return (
    multiply(numA, Math.pow(10, precision)) /
    multiply(numB, Math.pow(10, precision))
  );
}

function getPrecision(a: strOrNum, b: strOrNum): number {
  const precisionA = getNumberPrecision(a);
  const precisionB = getNumberPrecision(b);
  return Math.pow(10, Math.max(precisionA, precisionB));
}

function getNumberPrecision(num: strOrNum): number {
  const str = String(num);
  const dotIndex = str.indexOf('.');
  return dotIndex >= 0 ? str.length - dotIndex - 1 : 0;
}

function toNumber(num: strOrNum, precision: number): number {
  if (typeof num === 'string') {
    return parseFloat(num) * precision;
  }
  return num * precision;
}

/**
 * 0.19999999999999998.toFixed(2)  // '0.20'
 *
 * toFixedNoRound(0.19999999999999998,2) // 0.19
 * @public
 */
function toFixedNoRound(num: strOrNum, decimalPlaces: number): number {
  const parsedNum = Number(num);
  if (isNaN(parsedNum)) {
    throw new Error('Invalid number input');
  }
  const strNum = parsedNum.toString();
  const dotIndex = strNum.indexOf('.');
  const truncatedStrNum = strNum.substring(0, dotIndex + decimalPlaces + 1);
  const truncatedNum = Number(truncatedStrNum);
  return truncatedNum;
}

/**
 * 0.19999999999999998.toFixed(2)  // '0.20'
 *
 * toFixedRound(0.19999999999999998,2) // 0.2
 * @public
 */
function toFixedRound(num: strOrNum, decimalPlaces: number): number {
  const parsedNum = Number(num);
  if (isNaN(parsedNum)) {
    throw new Error('Invalid number input');
  }
  const power = Math.pow(10, decimalPlaces);
  return Math.round(parsedNum * power) / power;
}

export { add, subtract, multiply, divide, toFixedNoRound, toFixedRound };
