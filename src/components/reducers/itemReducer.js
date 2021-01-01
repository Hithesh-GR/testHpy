import {
    GET_ITEMS,
    ADD_ITEMS,
    DELETE_ITEM,
    TOGGLE_NAV,
    CLOSE_NAVBAR,
    INCREASE_ITEM,
    DECREASE_ITEM,
    TOTAL_ITEMS,
    UPDATE_CART_VALUE,
} from "../actions/types";

const initialState = {
    items: [
        {
            _id: 1,
            img:
                "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png",
            title: "Food Card",
            price: "21",
            original_price: "30",
            details: "This card is used for spending on Food merchants",
            count: 0
        },

        {
            _id: 2,
            img:
                "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png",
            title: "Travel Card",
            price: "20",
            details:
                "This card is used for spending on Travel and hotel bookings",
            count: 0
        },

        {
            _id: 3,
            img:
                "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png",
            title: "Epic Card",
            price: "40",
            details: "Use this card and get benefits on every transaction",
            count: 0
        },

        {
            _id: 4,
            img:
                "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png",
            title: "Happay Premium Card",
            price: "40",
            details: "Use this card and get benefits on every transaction",
            count: 0
        },
    ],
    cart: [],
    isOpen: false,
    total: 0,
    shipping: 5,
    taxesAndCharges: 2,
};

const Todos = (state = initialState, action) => {
    switch (action.type) {
        // get initial state
        case GET_ITEMS:
            return {
                ...state,
            };

        //  toggle navigation fro appearing
        case TOGGLE_NAV:
            return {
                ...state,
                isOpen: !state.isOpen,
            };

        // close navbar if it is open
        case CLOSE_NAVBAR:
            if (state.isOpen === true) {
                return {
                    ...state,
                    isOpen: false,
                };
            }
            break;

        // add items to cart
        case ADD_ITEMS:
            let check = state.cart.find((item) => item._id === action.payload);
            if (!check) {
                // bringing only the items that match the id
                let items = state.items.filter(
                    (item) => item._id === action.payload
                );
                let itemsCart = [...state.cart, ...items];
                return {
                    ...state,
                    cart: itemsCart,
                };
            } else {
                let items = state.items.filter(
                    (item) => item._id === action.payload
                );
                items.forEach((item) => {
                    item.isInCart = true;
                    // alert(`already in cart`)
                });
                return {
                    ...state,
                };
            }

        // delete item
        case DELETE_ITEM:
            const filteredCart = state.cart.filter(
                (item) => item._id !== action.payload
            );
            return {
                ...state,
                cart: filteredCart,
            };

        // increasing items inside cart
        case INCREASE_ITEM:
            let incResults = state.cart.map((item) => {
                if (item._id === action.payload) {
                    item = { ...item, count: item.count + 1 };
                }
                return item;
            });
            return {
                ...state,
                cart: incResults,
            };

        // decrease items inside the cart
        case DECREASE_ITEM:
            let decResults = state.cart.map((item) => {
                if (item._id === action.payload) {
                    item = {
                        ...item,
                        count:
                            item.count === 1
                                ? (item.count = 1)
                                : item.count - 1,
                    };
                }
                return item;
            });
            return {
                ...state,
                cart: decResults,
            };

        //get total price
        case TOTAL_ITEMS:
            const totals = state.cart.reduce((prev, item) => {
                return prev + item.price * item.count;
            }, 0);
            return {
                ...state,
                total: totals,
            };

        //adding cart count
        case UPDATE_CART_VALUE:
            console.log("action", action);
            let allItems = state.items;
            for (let i in allItems) {
                if (allItems[i]._id === action.payload.id) {
                    allItems[i].count = action.payload.cartCount;
                }
            }
            return {
                ...state,
                items: allItems
            };
        default:
            return state;
    }
};

export default Todos;
