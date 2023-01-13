import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Votre panier est vide</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>ALLER À LA CAISSE</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
