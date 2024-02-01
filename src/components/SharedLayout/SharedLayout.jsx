import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Header } from 'components/Header/Header';
import { Loader } from '../Loader/Loader';

const SharedLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <>
    {!isHome && <Header />}
      
      <main>
         <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      </main>
    { !isHome && <Footer/>}
    </>
  );
};

export default SharedLayout;
