import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollProps {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  rootRef: MutableRefObject<HTMLElement>;
}
export const useInfiniteScroll = ({
  callback,
  rootRef,
  triggerRef,
}: UseInfiniteScrollProps) => {
  useEffect(() => {
    if (!callback) return;
    const rootElement = rootRef.current;
    const triggerElement = triggerRef.current;

    const options = {
      root: rootElement,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(triggerElement);

    // eslint-disable-next-line
    return () => {
      if (triggerElement) {
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, rootRef, triggerRef]);
};
