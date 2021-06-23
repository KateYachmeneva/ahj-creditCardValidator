export default class CardChecker {
  constructor() {
    this.sum = 0;
    this.nDigits = 0;
    this.parity = 0;
  }

  check(input) {
    this.nDigits = input.length;
    this.sum = parseInt(input[this.nDigits - 1], 10);
    this.beEven = this.nDigits % 2;
    for (let n = 0; n <= this.nDigits - 2; n += 1) {
      let digit = parseInt(input[n], 10);
      if (n % 2 === this.beEven) digit *= 2;
      if (digit > 9) digit -= 9;
      this.sum += digit;
    }
    if ((this.sum % 10) === 0) return 'pass';
    return 'fail';
  }
}
