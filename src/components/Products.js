import React, { useEffect } from "react";
import "./Products.css";
import Product from "./Product.jsx";
import { connect } from "react-redux";
import {
    getItems,
    AddToCart
} from "../components/actions/itemActions";
const Products = (props) => {
    const { getItems } = props;
    useEffect(() => {
        getItems();
    }, [getItems]);

    // add to cart
    const AddToCart = (id) => {
        props.AddToCart(id);
    };

    const { items } = props.item;
    return (
        <div className="products">
            <div className="inside-container">
                <div className="most-popular-products">
                    <div className="most-popular-hd">Most Popular</div>
                    <div className="star-icon">
                        <div className="star-wrapper">
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="products-center">
                    {items.map((product, index) => (
                        <Product
                            key={product._id}
                            data={product}
                            AddToCart={() => AddToCart(product._id)}
                            pid={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    item: state.item,
});

export default connect(mapStateToProps, { getItems, AddToCart })(
    Products
);
