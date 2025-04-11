import Badge from '@mui/material/Badge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <Link to="/cart">
            <Badge badgeContent={1} color="success">
                <ShoppingBasketIcon color="action" />
            </Badge>
        </Link>
    )
}

export default CartWidget