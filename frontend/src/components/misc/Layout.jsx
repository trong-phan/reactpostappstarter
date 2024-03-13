import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { FooterSocial } from './Footer/FooterSocial';
import { useViewportSize } from '@mantine/hooks';
import { Container } from '@mantine/core';

const Layout = () => {
  const { height } = useViewportSize();
  return (
    <Container h={height}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FooterSocial />
    </Container>
  );
};

export default Layout;
