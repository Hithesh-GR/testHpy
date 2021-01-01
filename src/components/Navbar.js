import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleNav, closeNavbar } from "../components/actions/itemActions";
// import Avatar from "@material-ui/core/Avatar";
// import avatar from "../assets/images/heart.jpg";
const Navbar = (props) => {
    const [cartValue, setCartValue] = useState(0);
    useEffect(() => {
        let count = 0;
        const allItems = props.item.items;
        if (allItems) {
            for (let i in allItems) {
                count += allItems[i].count;
            }
        }
        setCartValue(count);
    }, [props.item]);
    return (
        <div className="navbar">
            <nav className="nav">
                <div className="logoBtn">
                    <Link to="/">
                        <img
                            src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
                            alt="logo"
                        />
                        <p>
                            <span>Happay</span>
                        </p>
                    </Link>
                    <div className="shopping-icon mobile-shopping">
                        <Link to="/cart">
                            <i className="fas fa-shopping-cart"></i>{" "}
                            <span>{cartValue}</span>
                        </Link>
                    </div>
                    <div className="hamburger" onClick={props.toggleNav}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="links">
                    <div
                        className={
                            props.item.isOpen
                                ? "new-links-navigation"
                                : "links-navigation"
                        }
                    >
                        <div className="nav-btn">
                            <span onClick={props.toggleNav}>x</span>
                        </div>
                        <ul
                            className="links-nav"
                            onClick={props.closeNavbar}
                        ></ul>
                    </div>
                </div>
                <Link to="/cart">
                    <div className="shopping-icon">
                        <i className="fas fa-shopping-cart"></i>{" "}
                        <span>{cartValue}</span>
                    </div>
                </Link>
                {/* <Link to="/cart">
                    <Avatar src={avatar} className="profile">
                        H
                    </Avatar>
                </Link> */}
            </nav>
        </div>
    );
};

const mapStateToProps = (state) => ({
    item: state.item,
});

export default connect(mapStateToProps, { toggleNav, closeNavbar })(Navbar);
