import CardChecker from '../cardChecker';

const sumChecker = new CardChecker();
test.each([
  ['4929036063387728', 'pass'],
  ['6011654159996862789', 'pass'],
  ['30236829710221', 'pass'],
  ['3533997838076927479', 'pass'],
  ['6759640014773057', 'fail'],
  ['6759640014773056', 'fail'],
])(
  ('should validate checksum'),
  (input, expected) => {
    expect(sumChecker.check(input)).toBe(expected);
  },
);
