// import { expect } from '../test_helper';
// import { createStore } from 'redux';
// import reducers from '../../components/reducers';
// import { ADD_ITEMS, UPDATE_CART_VALUE, DELETE_ITEM} from '../../components/actions/itemActions';

// const INIT_PRODUCTS = [
//     { _id: 1, title: 'Food Card', details: 'This card is used for spending on Food merchants', price: 21 },
//     { _id: 2, title: 'Travel Card ', details: 'This card is used for spending on Travel and hotel bookings', price: 20 },
//     { _id: 3, title: 'Epic Card', details: 'Use this card and get benefits on every transaction', price: 40 },
//     { _id: 4, title: 'Happay Premium Card', details: 'Use this card and get benefits on every transaction', price: 40 }
// ];

// describe('CartActions', () => {
//     let store = createStore(reducers, { cart: [], products: INIT_PRODUCTS });
//     it('addes 2 cart items, update  count. Deletes 1 item. Has correct state', () => {
//         let actionsPipeline = [
//             {
//                 type: ADD_ITEMS,
//                 payload: { _id: 1, title: 'Food Card', details: 'This card is used for spending on Food merchants', price: 21 }
//             },
//             {
//                 type: ADD_ITEMS,
//                 payload: { _id: 2, title: 'Travel Card ', details: 'This card is used for spending on Travel and hotel bookings', price: 20 }
//             },
//             {
//                 type: UPDATE_CART_VALUE,
//                 payload: { _id: 1, count: 1 }
//             },
//             {
//                 type: UPDATE_CART_VALUE,
//                 payload: { _id: 1, count: 1 }
//             },
//             {
//                 type: DELETE_ITEM,
//                 payload: { id: 2 }
//             }
//         ];

//         actionsPipeline.forEach(action => store.dispatch(action));
//         let state = store.getState().cart;
//         let expected = [
//             { _id: 1, title: 'Food Card', details: 'This card is used for spending on Food merchants', price: 21, count: 3 }
//         ];
//         expect(state.toString()).to.equal(expected.toString());
//     });

// });