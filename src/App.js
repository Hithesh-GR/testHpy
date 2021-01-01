import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Products from './components/Products';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Products} />
          <Route path='/products' component={Products} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </div>
    </Provider>
  );
}
export default App;
