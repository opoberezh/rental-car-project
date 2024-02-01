import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';


const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Favorite = lazy(() => import('./pages/Favorite/Favorite'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
// const test = import.meta.env.VITE_API_TEST;

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />}/>
            <Route path="/favorite" element={<Favorite/>} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
