import { useCallback, useEffect, useRef } from "react";

export default function useDebounceFn<T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
): [T, () => void] {
  const timeoutRef = useRef(0);

  const cancel = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = 0;
    }
  }, []);

  const debouncedFn = useCallback(
    (...args: Parameters<T>) => {
      cancel();
      timeoutRef.current = setTimeout(() => fn(...args), delay);
    },
    [fn, delay, cancel],
  ) as T;

  useEffect(() => {
    return () => {
      cancel();
    };
  }, []);

  return [debouncedFn, cancel];
}
