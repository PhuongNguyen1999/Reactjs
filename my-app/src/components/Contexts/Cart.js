import React, {Component} from 'react';
export const CartContext = React.createContext();
export class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems: []
        };

        this.addToCart = this.addToCart.bind(this);
        this.removeCart = this.removeCart.bind(this);
    }

    addToCart(product) {
        // console.log("Adding to cart", product);
        this.setState({
            cartItems:this.state.cartItems.concat(product)
        });
        localStorage.setItem('cart',JSON.stringify(this.state.cartItems.concat(product)))
    }

    removeCart(product) {
        console.log("Remove", product);
        this.setState({
            cartItems:this.state.cartItems.filter(item => item.id !== product.id)
        });
        localStorage.setItem('cart',JSON.stringify(this.state.cartItems));
    }
    render() {
        return (
            <CartContext.Provider value={{
                cartItems: this.state.cartItems,
                addToCart: this.addToCart,
                removeCart: this.removeCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}
