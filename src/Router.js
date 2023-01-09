import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routersPath } from './routersPath';
import { PrivateWrapper } from './PrivateWrapper';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routersPath.map((route, index) => {
          const { path, component: Component, exact } = route;
          <Route
            key={index}
            path={path}
            exact={exact}
            element={
              <PrivateWrapper>
                <Component />
              </PrivateWrapper>
            }
          />;
        })}
        {/* <Route path="/" element={<App />} /> */}
        {/* <Route path="users/*" element={<Users />} /> */}
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
