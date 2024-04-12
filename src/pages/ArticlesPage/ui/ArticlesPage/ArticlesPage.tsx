import { ArticleList, ArticleView } from 'entities/Article';
import { ArticleViewSelector } from 'features/articleViewSelector';
import { fetchArticleList } from 'pages/ArticlesPage/model/services/fetchArticlesList';
import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Page } from 'shared/UI/Page/Page';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPagePage,
  getArticlesPageView,
} from '../../model/selectors/getArticlesPageData';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(
      fetchArticleList({
        page: 1,
      })
    );
  });

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.articlesPage, {}, [className])}
      >
        <ArticleViewSelector onViewChange={onChangeView} view={view} />
        <ArticleList view={view} articles={articles} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
