import { createBrowserRouter } from 'react-router-dom';
import GlobalLayout from './layout/GlobalLayout';
import FirstCasePage from './components/Test/firstCasePage/FirstCasePage';
import SecondCasePage from './components/Test/secondCasePage/SecondCasePage';
import UseMemoPage from './components/Test/useMemo/UseMemoPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />,
    children: [{ index: true, element: <></> }],
  },
  { path: '/firstCase', element: <FirstCasePage /> },
  { path: '/secondCase', element: <SecondCasePage /> },
  { path: '/usememo', element: <UseMemoPage /> },
]);
