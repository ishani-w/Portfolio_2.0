import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollProgress from '../ScrollProgress/ScrollProgress';
import PageTransition from '../PageTransition/PageTransition';

export default function Layout() {
  return (
    <>
      <Header />
      <ScrollProgress />
      <main style={{ paddingTop: '72px' }}>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
