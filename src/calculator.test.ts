import { Calculator } from '../src/calculator';

describe('Calculator', () => {
  test('adds 2 + 3 to equal 5', () => {
    const calculator = new Calculator();
    expect(calculator.add(2, 3)).toBe(5);
  });
  test('subtracts 5 - 3 to equal 2', () => {
    const calculator = new Calculator();
    expect(calculator.subtract(5, 3)).toBe(2);
  });
  test('multiplies 2 * 3 to equal 6', () => {
    const calculator = new Calculator();
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  test('divides 6 / 3 to equal 2', () => {
    const calculator = new Calculator();
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test('throws error when dividing by zero', () => {
    const calculator = new Calculator();
    expect(() => calculator.divide(6, 0)).toThrow("Division by zero is not allowed.");
  });
});