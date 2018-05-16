const expect = require('expect');
//import isRealString
const {isRealString} = require('./validation');


//isRealString
describe('isRealString', () => {
//should reject non-string values
  it('should reject non-string values', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });
//should reject string with only spaces
  it('should reject string with only spaces', () => {
    var res = isRealString('    ');
    expect(res).toBe(false);
  });
//should allow string with non-space characters
  it('should allow string with non-space characters', () => {
    var res = isRealString(' d sfsd ');
    expect(res).toBe(true);
  });

});