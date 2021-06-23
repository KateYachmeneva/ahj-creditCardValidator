import dinersClub from '../img/diners-club.png';
import americanExpress from '../img/american-express.png';
import jcb from '../img/jcb.png';
import visa from '../img/visa.png';
import visaElectron from '../img/visa_electron.png';
import maestro from '../img/maestro.png';
import mastercard from '../img/mastercard.png';
import discover from '../img/discover.png';
import instapay from '../img/instapay.png';
import mir from '../img/mir.png';

export default class CardUI {
  constructor(cards) {
    this.cards = cards;
    this.images = {
      'american-express': americanExpress,
      'diners-club': dinersClub,
      maestro,
      mir,
      'visa_electron': visaElectron,
      visa,
      discover,
      instapay,
      jcb,
      mastercard,
    };
  }

  drawform() {
    const container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);

    const logos = document.createElement('div');
    logos.id = 'logos';
    container.appendChild(logos);

    this.cards.forEach((card) => {
      if (!document.getElementById(`${card.image}`)) {
        const cardImg = document.createElement('img');
        cardImg.id = card.image;
        const image = this.images[card.image];
        cardImg.src = image;
        cardImg.alt = card.issuer;
        logos.insertAdjacentElement('beforeend', cardImg);
      }
    });

    const inputForm = document.createElement('form');
    inputForm.id = 'form';
    container.insertAdjacentElement('beforeend', inputForm);
    inputForm.onsubmit = (ev) => ev.preventDefault();

    const txtInput = document.createElement('input');
    txtInput.id = 'input';
    inputForm.insertAdjacentElement('beforeend', txtInput);

    const vldBtn = document.createElement('button');
    vldBtn.onClick = (ev) => ev.preventDefault();
    vldBtn.id = 'validate_button';
    vldBtn.innerHTML = 'click to validate';
    inputForm.insertAdjacentElement('beforeend', vldBtn);
  }
}
