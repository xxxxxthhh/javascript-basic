/*
 * @Author: Kyle Xu
 * @Date: 2020-09-08 20:13:22
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-09-09 16:04:13
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
describe('for numbers', () => {
  it('should use real number calculation rather than integer in some languages', () => {
    const dividingResult = 3 / 4;

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 0.75;
    // --end->

    expect(dividingResult).toEqual(expected);
  });

  it('should be able to check if the number is NaN', () => {
    const notNumber = 0 / 0;

    // <--start
    // Please write an expression determine if `notNumber` is NaN.
    const isNan = isNaN(notNumber);
    // --end->

    expect(isNan).toBeTruthy();
  });
});
