import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './container/ProductList';
import NavBar from './container/NavBar';
import Cart from './container/Cart';
import Details from './container/Details';
import Default from './container/Default';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';

library.add(faCartPlus)

 class App extends Component {
  render() {
  return (
 <React.Fragment>
   <NavBar />
   <Switch>
     <Route exact path="/" component={ProductList} />
     <Route path="/details" component={Details} />
     <Route path="/cart" component={Cart} />
     <Route  component={Default} />
   </Switch>
  
  
  
 </React.Fragment>
  );
}
}

export default App;
