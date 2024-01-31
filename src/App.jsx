import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from './pages/Home/Home';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Catalog from './pages/Catalog/Catalog';
import Favorite from './pages/Favorite/Favorite';


// const test = import.meta.env.VITE_API_TEST;

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />}/>
            <Route path="/favorite" element={<Favorite/>} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
