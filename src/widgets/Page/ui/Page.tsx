import { StateSchema } from 'app/providers/StoreProvider';
import { MutableRefObject, ReactNode, UIEvent, memo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useTrottle } from 'shared/lib/hooks/useTrottle/useTrottle';
import { getSavePageScrollByPath } from '../model/selectors/getSavePage';
import { savePageActions } from '../model/slice/savePageSlice';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const rootRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getSavePageScrollByPath(state, pathname)
  );

  useInitialEffect(() => {
    rootRef.current.scrollTop = scrollPosition;
  });

  useInfiniteScroll({
    rootRef,
    triggerRef,
    callback: onScrollEnd,
  });

  const onScroll = useTrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      savePageActions.setPageScroll({
        path: pathname,
        postition: e.currentTarget.scrollTop,
      })
    );
  }, 500);

  return (
    <section
      onScroll={onScroll}
      ref={rootRef}
      className={classNames(cls.Page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
