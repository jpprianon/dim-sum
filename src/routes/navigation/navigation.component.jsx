import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import { ReactComponent as DimSum } from '../../assets/dimsum.svg';

import { 
  NavigationContainer, 
  NavLinks, 
  NavLink, 
  LogoContainer 
} from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <DimSum className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
          TEST
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
