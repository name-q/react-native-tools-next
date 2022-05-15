import { useMount } from '../index';
import { renderHook } from '@testing-library/react-hooks';

describe('index', () => {
  it('should be defined', () => {
    expect(useMount).toBeDefined();
  });
  it('test index', async () => {
    const fn = jest.fn();
    const hook = renderHook(() => useMount(fn));
    expect(fn).toBeCalledTimes(1);
    hook.rerender();
    expect(fn).toBeCalledTimes(1);
    hook.unmount();
    expect(fn).toBeCalledTimes(1);
    renderHook(() => useMount(fn)).unmount();
    expect(fn).toBeCalledTimes(2);
  });
});
