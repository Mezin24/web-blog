import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

function MyComponent() {
  const { t, i18n } = useTranslation();

  const toggle = () =>
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');

  return (
    <div>
      <h1>{t('Тест')}</h1>
      <button onClick={toggle}>{t('перевод')}</button>
    </div>
  );
}

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <MyComponent />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
export default App;
