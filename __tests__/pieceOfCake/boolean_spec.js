/*
 * @Author: Kyle Xu
 * @Date: 2020-09-08 20:13:22
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-09-09 14:29:20
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
describe('for boolean type', () => {
  it('should convert to same type then compare for equality operator', () => {
    const objectLeft = { key: 'value' };
    const objectRight = { key: 'value' };

    const actual = [
      // eslint-disable-next-line no-self-compare, eqeqeq, yoda
      1 == 1, '1' == 1, 1 == '1', 0 == false, 0 == null, objectLeft == objectRight, 0 == undefined, null == undefined,
    ];

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = [true, true, true, true, false, false, false, true];
    // --end->

    expect(actual).toEqual(expected);
  });

  it('should not perform type conversion for strict equal operator', () => {
    const objectLeft = { key: 'value' };
    const objectRight = { key: 'value' };

    const actual = [
      // eslint-disable-next-line no-self-compare, eqeqeq, yoda
      3 === 3, 3 === '3', objectLeft === objectRight, null === undefined,
    ];

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = [true, false, false, false];
    // --end->

    expect(actual).toEqual(expected);
  });
});
