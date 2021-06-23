export default class IssuerChecker {
  constructor(cards) {
    this.cards = cards;
  }

  checklength(allowed) {
    if (typeof allowed === 'object') return allowed.includes(this.input.length);
    return (this.input.length === allowed);
  }

  check(input) {
    this.input = input;
    const array = [];
    this.cards.forEach((card) => {
      const exp = new RegExp(card.regex);
      const allowed = card.ln;

      if (exp.exec(input) && ((this.input.length < 13) || this.checklength(allowed))) {
        array.push(card);
      }
    });
    return array;
  }
}
