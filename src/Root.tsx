import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { HomePage } from './componets/HomePage';
import { TabsPage } from './componets/TabsPage';
import { App } from './App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        />
      </Route>
    </Routes>
  </HashRouter>
);
