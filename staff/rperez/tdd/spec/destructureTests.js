// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

// Arrays
describe('Destructuring arrays makes shorter code', () => {
  it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
    let [firstValue] = [1];
    assert.strictEqual(firstValue, 1);
  });
  it('get the last item from array', () => {
    let [,,lastValue] = [1, 2, 3];
    assert.strictEqual(lastValue, 3);
  });
  it('swap two variables, in one operation', () => {
    let [x, y] = ['ax', 'why'];
    [y, x] = [x, y];
    assert.deepEqual([x, y], ['why', 'ax']);
  });
  it('leading commas', () => {
    const all = ['ax', 'why', 'zet'];
    const [,,z] = all;
    assert.equal(z, 'zet');
  });
  it('extract from nested arrays', () => {
    const user = [['Some', 'One'], 23];
    const [[firstName, surname], age] = user;
    const expected = 'Some One = 23 years';
    assert.equal(`${firstName} ${surname} = ${age} years`, expected);
  });
  it('chained assignments', () => {
    let c, d;
    let [a, b] = [c, d] = [1, 2];
    assert.deepEqual([a, b, c, d], [1, 2, 1, 2]);
  });
  it('in for-of loop', () => {
    for (var [,a, b] of [[0, 1, 2]]) {}
    assert.deepEqual([a, b], [1, 2]);
  });
});

// Objects
// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructure objects', () => {
  it('by surrounding the left-hand variable with `{}`', () => {
    const {x} = {x: 1};
    assert.equal(x, 1);
  });
  describe('nested', () => {
    it('multiple objects', () => {
      const magic = {first: 23, second: 42};
      const {magic: {second}} = {magic};
      assert.equal(second, 42);
    });
    it('object and array', () => {
      const {z:[,x]} = {z: [23, 42]};
      assert.equal(x, 42);
    });
    it('array and object', () => {
      const [,[{lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];
      assert.equal(lang, 'ES6');
    });
  });
  describe('interesting', () => {
    it('missing refs become undefined', () => {
      const {z} = {x: 1, z};
      assert.equal(z, void 0);
    });
    it('destructure from builtins (string)', () => {
      const {substr} = '1';
      assert.equal(substr, String.prototype.substr);
    });
  });
});

// Strings
// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
  it('destructure every character, just as if the string was an array', () => {
    let [a, b, c] = 'abc';
    assert.deepEqual([a, b, c], ['a', 'b', 'c']);
  });
  it('missing characters are undefined', () => {
    const [a,, c] = 'ab';
    assert.equal(c, void 0);
  });
  it('unicode character work too', () => {
    const [,space, coffee] = 'a ☕';
    assert.equal(coffee, '\u{2615}');
  });
});

// Defaults
// 13: destructuring - defaults
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('When destructuring you can also provide default values', () => {
  it('just assign a default value, like so `a=1`', () => {
    const [a=1] = [];
    assert.equal(a, 1);
  });
  it('for a missing value', () => {
    const [,b=2] = [1,,3];
    assert.equal(b, 2);
  });
  it('in an object', () => {
    const {a, b=2} = {a: 1};
    assert.equal(b, 2);
  });
  it('if the value is undefined', () => {
    const {a, b=2} = {a: 1, b: void 0};
    assert.strictEqual(b, 2);
  });
  it('also a string works with defaults', () => {
    const [a,b=2] = '1'
    assert.equal(a, '1')
    assert.equal(b, 2)
  })
})
