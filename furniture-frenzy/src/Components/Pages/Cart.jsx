import { useState, useEffect } from "react";
import { Footer } from "../Footer/footer";
import { Navbar } from "../Header/NavBar";
import "./Cart.css";
import { AiOutlineDelete } from "react-icons/ai"
export function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const handleRemoveFromCart = (id) => {
        const newCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(newCartItems);
    };

    const handleIncreaseQuantity = (id) => {
        const newCartItems = cartItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(newCartItems);
    };

    const handleDecreaseQuantity = (id) => {
        const newCartItems = cartItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter((item) => item.quantity > 0);
        setCartItems(newCartItems);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            if (typeof item.totalPrice === "number") {
                return total + item.totalPrice * item.quantity;
            }
            return total;
        }, 0);
    };

    useEffect(() => {
        const totalPrice = getTotalPrice();
        localStorage.setItem("cartTotal", JSON.stringify(totalPrice));
    }, [cartItems]);

    return (
        <div className="cart-page">
            <Navbar />
            <div className="cart-container">
                <h1 className="tag">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p className="tag">Your cart is empty.</p>
                ) : (
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                    <div>
                                        <img src={item.image} alt={item.name} />
                                        <h3>{item.name}</h3>
                                        <p>₹{item.totalPrice}</p>
                                    </div>
                                    <div className="quantity-controls">
                                        <button onClick={() => handleDecreaseQuantity(item.id)}> - </button>
                                        <p>{item.quantity}</p>
                                        <button onClick={() => handleIncreaseQuantity(item.id)}> + </button>
                                    </div>
                                    <div>
                                    <p className="price">Price:₹{item.totalPrice * item.quantity}</p>
                                    <button className="delbtn" onClick={() => handleRemoveFromCart(item.id)}><AiOutlineDelete /></button>
                                    </div>
                                </div>
                        ))}
                        <div className="cart-total">
                        <button className="buynowbtn">BuyNow</button>
                            <p>Total:₹{getTotalPrice().toFixed(2)}</p>
                           
                        </div>
                        
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}