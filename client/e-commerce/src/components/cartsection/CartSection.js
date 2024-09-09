import React from "react";
import { useCart } from "../../CartContext";
import "./CartSection.css";
import { Link } from "react-router-dom";

const CartSection = () => {
  const { cart, setCart } = useCart();

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
  };

  // Calculate the total price
  const totalPrice = cart
    .reduce(
      (acc, item) => acc + (item.price * (item.quantity || 1) || item.allPrice),
      0
    )
    .toFixed(2);

  console.log(cart);

  return (
    <>
      <div className="c-products-main">
        <div className="c-products">
          <p>PRODUCTS</p>
          <p>DESCRIPTION</p>
          <p>PRICE</p>
          <p>DELETE</p>
        </div>
      </div>
      <div className="c-items-main">
        {cart.length === 0 ? (
          <p className="txt-cen">No items in cart</p>
        ) : (
          cart.map((item) => (
            <div key={item._id} className="c-items">
              <img
                src={item.AllSelectedImage || item.selectedImage}
                alt={item.title || item.AllTitle}
              />
              <p>{item.title || item.allTitle}</p>
              <p>{item.description || item.allDescription}</p>
              <p>
                $
                {(item.price * (item.quantity || 1) || item.allPrice).toFixed(
                  2
                )}
              </p>
              <button
                className="del-btn"
                onClick={() => handleDelete(item._id)}
              >
                DELETE
              </button>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="c-summary">
          <div className="total-price">
            <p>Total Price:</p>
            <p>${totalPrice}</p>
          </div>
          <Link to="/address">
           
            <button className="checkout-btn">Checkout</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartSection;
