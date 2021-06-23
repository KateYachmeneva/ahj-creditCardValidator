import IssuerChecker from '../issuerChecker';
import cards from '../../json/cards.json';

const issuerChecker = new IssuerChecker(cards);

test.each([
  ['30221647952759', [{
    issuer: 'Diners Club - Carte Blanche',
    regex: '^30[0-5]\\d*',
    ln: 14,
    image: 'diners-club',
  }]],

  ['347961382806219', [{
    issuer: 'American Express',
    regex: '^34|37\\d*',
    ln: 15,
    image: 'american-express',
  }]],

  ['3543747945262768', [{
    issuer: 'JCB',
    regex: '^((35[3-8][0-9]{1})|(352[8-9]))\\d*',
    ln: [16, 19],
    image: 'jcb',
  }]],

  ['36787117160424', [{
    issuer: 'Diners Club - International',
    regex: '^36\\d*',
    ln: 14,
    image: 'diners-club',
  }]],

  ['4929667274859616', [{
    issuer: 'Visa',
    regex: '^4\\d*',
    ln: [13, 16],
    image: 'visa',
  }]],

  ['4844319307416913', [{
    issuer: 'Visa', regex: '^4\\d*', ln: [13, 16], image: 'visa',
  },
  {
    issuer: 'Visa Electron',
    regex: '^(4026|4508|4844|4913|4947|417500)\\d*',
    ln: 16,
    image: 'visa_electron',
  }]],

  ['6761783439629343', [{
    issuer: 'Maestro',
    regex: '^(5018|5020|5038|5893|6304|6759|6761|6762|6763)\\d*',
    ln: [16, 19],
    image: 'maestro',
  }]],

  ['5191312375075113', [{
    issuer: 'MasterCard',
    regex: '^((2720[0-9]{2})|(27[0-1][0-9]{3})|(2[3-6][0-9]{4})|(22[3-9][0-9]{3})|(222[1-9][0-9]{2})|(5[1-5]))\\d*',
    ln: 16,
    image: 'mastercard',
  }]],

  ['5484341489750879', [{
    issuer: 'MasterCard',
    regex: '^((2720[0-9]{2})|(27[0-1][0-9]{3})|(2[3-6][0-9]{4})|(22[3-9][0-9]{3})|(222[1-9][0-9]{2})|(5[1-5]))\\d*',
    ln: 16,
    image: 'mastercard',
  },
  {
    issuer: 'Diners Club - USA & Canada',
    regex: '^54\\d*',
    ln: 16,
    image: 'diners-club',
  }]],

  ['6011654159996862789', [{
    issuer: 'Discover',
    regex: '^((62292[0-5])|(6229[0-1][0-9]{1})|(622[2-8][0-9]{2})|(6221[3-9][0-9]{1})|(62212[6-9])|(64[4-9])|(6011)|(65))\\d*',
    ln: [16, 19],
    image: 'discover',
  }]],

  ['6370706276888949', [{
    issuer: 'InstaPayment',
    regex: '^63[7-9]\\d*',
    ln: 16,
    image: 'instapay',
  }]],

  ['2000000000000000', [{
    issuer: 'МИР',
    regex: '^2\\d*',
    ln: 16,
    image: 'mir',
  }]],

])(
  ('should return correctly suggested issuer(s)'),
  (input, expected) => {
    const result = issuerChecker.check(input);
    for (let n = 0; n < result.length; n += 1) {
      expect(result[n]).toEqual(expected[n]);
    }
  },
);
