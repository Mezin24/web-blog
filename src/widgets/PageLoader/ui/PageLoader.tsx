import { classNames } from 'shared/lib/classNames/classNames';
import './PageLoader.scss';
import { Loader } from 'shared/UI/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames('PageLoader', {}, [className])}>
    <Loader />
  </div>
);
