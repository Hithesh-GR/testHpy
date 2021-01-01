// import { renderComponent , expect } from '../test_helper';
// import ProductsList from '../../components/Products.js';

// describe('ProductsList' , () => {
//     let component;
//     const props = {products: [
//         {_id:1, title: 'Food Card', details: 'This card is used for spending on Food merchants', price: 21},
//         {_id:2, title: 'Travel Card ', details: 'This card is used for spending on Travel and hotel bookings', price: 20},
//         {_id:3, title: 'Epic Card', details: 'Use this card and get benefits on every transaction', price: 40},
//         {_id:4, title: 'Happay Premium Card', details: 'Use this card and get benefits on every transaction', price: 40}
//     ]};

//     beforeEach(() => {
//         component = renderComponent(ProductsList, null, props);
//     });

//     it('ProductsList component exists', () => {
//         expect(component).to.exist;
//     });

//     it('contains products list', () => {
//         expect(component.find('.productsList')).to.exist;
//     });
//     it('shows productItem for each product in props', () => {
//         expect(component.find('.productItem').length).to.equal(props.products.length);
//     });

//     it('initial cart is empty', () => {
//         expect(component.find('aside.cart')).to.contain('cart empty');
//     });
//     it('when clicked Add-to-cart button, updates cart', () => {
//         component.find('.productItem button').simulate('click');
//         expect(component.find('aside.cart')).to.not.contain('cart empty');
//     });
// });