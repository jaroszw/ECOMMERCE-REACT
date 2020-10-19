<<<<<<< HEAD
import React from "react";
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'

const shopPage = ({match}) => {
  return (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)};

export default shopPage;
=======
import React from 'react';
import CollectionOverview from '../../components/collections.overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import { Route } from 'react-router-dom';

const shopPage = ({ match }) => {

  console.log(match)

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default shopPage;
>>>>>>> testing
