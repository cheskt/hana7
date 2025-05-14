import { useEffect } from "react";

export const useTimeout = <T extends (...args: unknown[]) => ReturnType<T>>(
  cb: T,
  delay: number,
  ...args: Parameters<T>
) => {
  console.log("🚀 Timeout.args:", args);
  useEffect(() => {
    const timer = setTimeout(cb, delay, ...args);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, ...args]);
};

export const useInterval = <T extends (...args: unknown[]) => ReturnType<T>>(
  cb: T,
  delay: number,
  ...args: Parameters<T>
) => {
  useEffect(() => {
    const timer = setInterval(cb, delay, ...args);

    return () => clearInterval(timer);
  }, [cb, delay, args]);
};
