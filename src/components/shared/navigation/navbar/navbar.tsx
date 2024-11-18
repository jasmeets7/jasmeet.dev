import { PropsWithChildren } from 'react';

import style from './navbar.module.css';
import NavbarLink from '../navbar-link';
import NavbarToggle from '../navbar-toggle';
import { useNavigationContext } from '@portfolio/hooks/navigation';

const NavbarComponent: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOpen } = useNavigationContext();

  return (
    <div className={`${style.container} ${isOpen ? 'right-0' : '-right-60'}`}>
      <NavbarToggle className={`${style.toggle}`} />
      {children}
    </div>
  );
};

NavbarLink.displayName = 'Navbar.Link';
NavbarToggle.displayName = 'Navbar.Link';

export const Navbar = Object.assign(NavbarComponent, {
  Link: NavbarLink,
  Toggle: NavbarToggle,
});
