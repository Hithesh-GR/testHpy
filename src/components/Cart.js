import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import { connect } from 'react-redux';
import { deleteItem, increaseItem, decreaseItem, getTotals } from './actions/itemActions';

const Cart = (props) => {
    const { cart, items } = props.item;
    const { getTotals } = props;
    useEffect(() => {
        getTotals();
    }, [getTotals])
    return (
        <div className="cart">
            <div className="inside-container">
                {cart.length === 0 ?
                    <>
                        <h3>Cart is Empty</h3>
                    </>
                    :
                    <>
                        <div className='link'>
                            <Link to="/products"><i className="fas fa-arrow-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;Back to Home</Link>
                        </div>
                        <div className='cart-name'>Order Summary&nbsp;&nbsp;(&nbsp;&nbsp;{cart.length}&nbsp;&nbsp;Items&nbsp;&nbsp;)</div>
                        <div className="cart-center">
                            <div className="cart-info">
                                <div className="single-cart list">
                                    <div>S. NO.</div>
                                &nbsp;
                                <div>Items</div>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <div>QTY</div>
                                &nbsp;
                                <div>DEL</div>
                                </div>
                                {cart.map((cart, index) => (
                                    <div className="list" key={cart._id}>
                                        <div>
                                            {index + 1}.
                                        </div>
                                        <div className="cart-title sameItem">
                                            <h4>{cart.title}</h4>
                                        </div>
                                        <div className="Cart-counter">
                                            <div className="Decrease-cart" onClick={() => {
                                                props.decreaseItem(cart._id);
                                                props.getTotals();
                                            }}>-</div>
                                            <div className="Cart-count">{cart.count}</div>
                                            <div className="Increase-cart" onClick={() => {
                                                props.increaseItem(cart._id);
                                                props.getTotals();
                                            }}>+</div>
                                        </div>
                                        <div className="delete-item">
                                            <i className="fas fa-trash" onClick={() => {
                                                props.deleteItem(cart._id);
                                                props.getTotals();
                                            }}></i>
                                        </div>
                                    </div>
                                ))}
                                {
                                    cart.length < 4 ? <div className='single-cart add'><Link to="/products"><i className="fas fa-plus"></i>&nbsp;&nbsp;Add more items</Link></div> : null
                                }
                            </div>
                            <div className="cart-results">
                                <div>
                                    <h3>Price Details</h3>
                                </div>
                                <div>
                                    <div className="horz-line"> </div>
                                </div>
                                {cart.map((cart, index) => (
                                    <div className="details" key={index}>
                                        <div>
                                            <h4>{cart.count} <i className="fas fa-times"></i> ${cart.price}.00</h4>
                                        </div>
                                        <div className="price">
                                            <h4>${cart.price * cart.count}.00</h4>
                                        </div>
                                    </div>
                                ))}
                                <div className="horz-line"> </div>
                                {cart.map((cart, index) => (
                                    <div key={index}>
                                        {
                                            cart.title === "Food Card" ?
                                                <div className="details">
                                                    <div>
                                                        <h4>Total Savings</h4>
                                                    </div>
                                                    <div>
                                                        <h4 style={{ fontWeight: "200" }}>{`-$${cart.title === "Food Card" ? (items[0].original_price - items[0].price) * cart.count : null}.00`}</h4>
                                                    </div>
                                                </div>
                                                : null
                                        }
                                    </div>
                                ))}
                                <div className="details">
                                    <div>
                                        <h4>Delivery Fee</h4>
                                    </div>
                                    <div>
                                        <h4>{`$${props.item.shipping}.00`}</h4>
                                    </div>
                                </div>
                                <div className="details">
                                    <div><h4>Taxes and Charges&nbsp;&nbsp;<i class="fas fa-exclamation-circle"></i></h4></div>
                                    <div><h4>{`$${props.item.taxesAndCharges}`}.00</h4></div>
                                </div>
                                <div className="details">
                                    <div><h4 style={{ fontWeight: '800' }}>To Pay</h4></div>
                                    <div><h4 style={{ fontWeight: '800' }}>${props.item.total + props.item.shipping + props.item.taxesAndCharges}</h4></div>
                                </div>
                                <div className="btn">
                                    <button>Place Order</button>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    item: state.item

})
export default connect(mapStateToProps, { deleteItem, increaseItem, decreaseItem, getTotals })(Cart);