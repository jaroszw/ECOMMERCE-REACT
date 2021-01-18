import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import shopPage from './page/shop/shop.component';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './page/checkout/checkout.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollections } from './redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';

import { addCollectionAndDocuments } from './firebase/firebase.utils';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import SHOP_DATA from './page/shop/shop.data';
import { objtoarr } from './firebase/firebase.utils';

const App = ({
  checkUserSession,
  currentUser,
  collectionsArray,
  collections,
}) => {
  useEffect(() => {
    checkUserSession();
    // addCollectionAndDocuments('collections', collectionsArray);
  }, [checkUserSession]);


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={shopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collections: selectCollections,
  collectionsArray: selectCollectionsForPreview,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
