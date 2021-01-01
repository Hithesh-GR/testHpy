import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateCart } from "../components/actions/itemActions";
const Product = (props) => {
    const { data, AddToCart, updateCart } = props;
    const [showCounter, setShowCounter] = useState(false);
    const [cartCount, setCartCount] = useState(1);
    useEffect(() => {
        const count = props.item.items[props.pid].count;
        if (count > 0) {
            setShowCounter(true);
        }
        setCartCount(count);
    });
    const handleAddToCart = () => {
        setShowCounter(true);
        AddToCart();
        updateCart({ id: props.data._id, cartCount: 1 });
    };

    const decrementCart = () => {
        if (cartCount !== 1) {
            let newCartCount = cartCount - 1;
            setCartCount(newCartCount);
            updateCart({ id: props.data._id, cartCount: newCartCount });
        }
    };

    const incrementCart = () => {
        let newCartCount = cartCount + 1;
        setCartCount(newCartCount);
        updateCart({ id: props.data._id, cartCount: newCartCount });
    };
    return (
        <div className="product">
            <div className="box-img">
                <img src={data.img} alt="" />
            </div>
            <div className="product-details">
                <div style={{ fontWeight: "450", color: "darkmagenta" }}>
                    {data.title}
                </div>
                <div style={{ fontWeight: "700" }}>
                    <strike style={{ color: "grey", fontSize: "0.9rem" }}>
                        <span>
                            {data.original_price
                                ? `$${data.original_price}.00`
                                : null}
                        </span>
                    </strike>
                    &nbsp;&nbsp;
                    <span>${data.price}.00</span>
                </div>
            </div>
            <div className="product-detail">{data.details}</div>
            {showCounter ? (
                <div className="cart-counter">
                    <div className="decrease-cart" onClick={decrementCart}>
                        -
                    </div>
                    <div className="cart-count">{cartCount}</div>
                    <div className="increase-cart" onClick={incrementCart}>
                        +
                    </div>
                </div>
            ) : (
                <div className="product-btn">
                    <button onClick={() => handleAddToCart()}>
                        Add to cart
                    </button>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    item: state.item,
});

export default connect(mapStateToProps, { updateCart })(Product);
