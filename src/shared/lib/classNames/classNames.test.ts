import { classNames } from './classNames';

describe('classNames', () => {
  test('only main class', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with only additional classes', () => {
    const expected = 'someClass cls1 cls2';
    expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe(expected);
  });
  test('with mods', () => {
    const expected = 'someClass cls1 cls2 hovered scrollable';
    expect(
      classNames('someClass', { hovered: true, scrollable: true }, [
        'cls1',
        'cls2',
      ])
    ).toBe(expected);
  });
  test('with mods false', () => {
    const expected = 'someClass cls1 cls2 hovered scrollable';
    expect(
      classNames(
        'someClass',
        { hovered: true, clicked: false, scrollable: true },
        ['cls1', 'cls2']
      )
    ).toBe(expected);
  });
  test('with mods undefined', () => {
    const expected = 'someClass cls1 cls2 hovered scrollable';
    expect(
      classNames(
        'someClass',
        { hovered: true, clicked: undefined, scrollable: true },
        ['cls1', 'cls2']
      )
    ).toBe(expected);
  });
});
