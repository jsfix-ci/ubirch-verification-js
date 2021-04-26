import { FormUtils } from '../form-utils';

beforeEach(() => {});

describe('Get params from URL', () => {
  test('should get params', () => {
    global.window.history.pushState({}, '', '?a=1&b=2');
    const result = FormUtils.getFormParamsFromUrl(global.window);
    expect(result).toEqual({ a: '1', b: '2' });
  });
  test('should get param', () => {
    global.window.history.pushState({}, '', '?c=3');
    const result = FormUtils.getFormParamsFromUrl(global.window);
    expect(result).toEqual({ c: '3' });
  });
  test('should get params with array', () => {
    global.window.history.pushState({}, '', '?d=4&e=5,6,7');
    const result = FormUtils.getFormParamsFromUrl(global.window);
    expect(result).toEqual({ d: '4', e: ['5', '6', '7'] });
  });
  test("shouldn't get params", () => {
    global.window.history.pushState({}, '', '?');
    const result = FormUtils.getFormParamsFromUrl(global.window);
    expect(result).toEqual({});
  });
});
