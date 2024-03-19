import './style/app.css';

import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import PageLoader from '@/components/PageLoader';
import { ConfigProvider } from 'antd';
import theme from './theme/theme';

const IdurarOs = lazy(() => import('./apps/IdurarOs'));

export default function RoutApp() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<PageLoader />}>
          <ConfigProvider theme={theme} >
            <IdurarOs />
          </ConfigProvider>
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}
