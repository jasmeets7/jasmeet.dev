import { Hamburger } from '@portfolio/icons/misc';
import { useNavigationContext } from '@portfolio/hooks/navigation';

import style from './navbar-toggle.module.css';

export const NavbarToggle: React.FC<{
  className?: string;
}> = ({ className = style.menu_button }) => {
  const { toggleNavigationState } = useNavigationContext();
  return (
    <button
      className={`${className}`}
      onClick={toggleNavigationState}
    >
      <Hamburger className={`${style.menu_icon}`} />
    </button>
  );
};
