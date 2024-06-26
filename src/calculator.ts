export class Calculator {
  add(a: number, b: number) {
    return a + b;
  }

  subtract(a: number, b: number) {
    return a - b;
  }

  multiply(a: number, b: number) {
    return a * b;
  }

  /**
   * asdsadasdasdsadasdasdsadasdasdsadasdasdsadasd
   * asdsadasdasdsadasdasdsadasdasdsadasd
   * asdsadasdasdsadasdasdsadasdasdsadasd
   * asdsadasdasdsadasdasdsadasdasdsadasd
   * @param a 
   * @param b 
   * @returns 
   */
  divide(a: number, b: number) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
}