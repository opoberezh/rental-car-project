import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Header } from 'components/Header/Header';

const SharedLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <>
    {!isHome && <Header />}
      
      <main>
         <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </main>
    { !isHome && <Footer/>}
    </>
  );
};

export default SharedLayout;
