import IssuerChecker from './issuerChecker';
import CardChecker from './cardChecker';
import CardUI from './cardUI';
import cards from '../json/cards.json';

export default class CardInit {
  constructor() {
    this.issuerChecker = new IssuerChecker(cards);
    this.cardChecker = new CardChecker();
    this.cardUI = new CardUI(cards);
    this.arraySuggest = [];
    this.cards = cards;
  }

  init() {
    this.cardUI.drawform();
    document.getElementById('input').addEventListener('keyup', () => {
      const input = document.getElementById('input').value;
      this.arraySuggest = this.issuerChecker.check(input);
      this.cards.forEach((card) => {
        const cardEl = document.getElementById(`${card.image}`);
        cardEl.classList.remove('bright');
        if (this.arraySuggest.includes(card)) {
          cardEl.classList.add('bright');
        }
      });
    });

    document.getElementById('validate_button').onclick = () => {
      const input = document.getElementById('input').value;
      const old = document.getElementsByClassName('card');
      if (old.length) {
        [...old].forEach((el) => {
          el.remove();
        });
      }
      if (this.arraySuggest.length) {
        this.arraySuggest.forEach((card) => {
          const cardInf = document.createElement('div');
          cardInf.className = 'card';
          cardInf.innerHTML = `Issuer: ${card.issuer} Check:${this.cardChecker.check(input)}`;
          document.getElementById('container').insertAdjacentElement('beforeend', cardInf);
        });
      }
    };
  }
}
