/*
 * @Author: Kyle Xu
 * @Date: 2020-09-08 20:13:22
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-09-09 15:07:11
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
import EventEmitter from 'events';

describe('for event', () => {
  function waitForEvents() {
    return new Promise(resolve => setTimeout(() => resolve(), 0));
  }

  it('should capture event', (done) => {
    const element = new EventEmitter();
    const logs = [];

    function onClick() {
      logs.push('I have been clicked.');
      done();
    }

    // <--start
    // Please add the event listener to handle `click` event on `element`.
    element.addListener('click', onClick);
    // --end->

    element.emit('click');
  }, 1000 /* 1 second to timeout */);

  it('should invoke multiple times', (done) => {
    const element = new EventEmitter();
    const logs = [];

    element.addListener('click', () => logs.push('I have been clicked'));
    element.emit('click');
    element.emit('click');

    waitForEvents()
      .then(() => {
        // <--start
        // Please write down the correct value. You should write the final result directly.
        const expected = ['I have been clicked', 'I have been clicked'];
        // --end->

        expect(logs).toEqual(expected);
        done();
      });
  });

  it('should remove event listener', (done) => {
    const element = new EventEmitter();
    const logs = [];

    element.addListener('click', () => {
      logs.push('I have been clicked');
      element.removeAllListeners('click');
    });
    element.emit('click');
    element.emit('click');

    waitForEvents()
      .then(() => {
        // <--start
        // Please write down the correct value. You should write the final result directly.
        const expected = ['I have been clicked'];
        // --end->

        expect(logs).toEqual(expected);
        done();
      });
  });
});
