import { Calculator } from '../src/calculator';

describe('Calculator', () => {
  test('adds 2 + 3 to equal 5', () => {
    const calculator = new Calculator();
    expect(calculator.add(2, 3)).toBe(5);
  });
  test.todo('subtracts 5 - 3 to equal 2');
  test.todo('multiplies 2 * 3 to equal 6');
  test.todo('divides 6 / 3 to equal 2');
});