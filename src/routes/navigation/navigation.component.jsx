import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as DimSum } from '../../assets/dimsum.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <DimSum className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
          BOUTIQUE
          </NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SE DECONECTER
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SE CONNECTER
            </NavLink>
          )}
          <CartIcon />
          </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
