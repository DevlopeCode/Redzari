import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
// import HomeV1 from './components/home-v1';
// import HomeV2 from './components/home-v2';
// import HomeV3 from './components/home-v3';
// import HomeV4 from './components/home-v4';
import HomeV5 from './components/home-v5';
import About from './components/about';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';
import SingleProducts from './components/product-details';
import ShoppingCart from './components/shoping-cart';
import Faq from './components/faq';
import Error from './components/error';
import CommingSoon from './components/comming-soon';
import Collection from './components/collection';
import CollectionList from './components/collection-list';
import CollectionFull from './components/collection-full';
import Contact from './components/contact';
import Login from './components/login';
import { Provider } from 'react-redux'
import { store } from '../src/components/redux/Store';
import Account from './components/account';
import Address from './components/section-components/address';
import Profile from './components/section-components/profile';
import Rent from './components/rent';
import Signup from './components/signup';


class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <HashRouter basename="/">
                        <div>
                            <Switch>
                                <Route exact path="/" component={HomeV5} />
                                <Route path="/login" component={Login} />
                                <Route path="/signup" component={Signup} />
                                <Route path="/account" component={Account} />
                                <Route path="/rent" component={Rent} />
                                {/* <Route path="/account/address" component={Address} />
                                <Route path='/account/Profile' component={Profile} /> */}
                                <Route path="/about" component={About} />
                                <Route path="/blog" component={Blog} />
                                <Route path="/blog-details" component={BlogDetails} />
                                <Route path="/product-details" component={SingleProducts} />
                                <Route path="/shoping-cart" component={ShoppingCart} />
                                <Route path="/faq" component={Faq} />
                                <Route path="/error" component={Error} />
                                <Route path="/comming-soon" component={CommingSoon} />
                                <Route path="/collection" component={Collection} />
                                <Route path="/collection-list" component={CollectionList} />
                                <Route path="/collection-full" component={CollectionFull} />
                                <Route path="/contact" component={Contact} />
                            </Switch>
                        </div>
                    </HashRouter>
                </Router>
            </Provider>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('stoon'));
