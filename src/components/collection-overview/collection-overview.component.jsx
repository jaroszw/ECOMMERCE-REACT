import React from 'react';
import './collection-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({collections}) => (
    <div>
    {collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
  });

export default connect(mapStateToProps)(CollectionOverview);