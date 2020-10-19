import React from 'react';
import './collections-overview.style.scss'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import { selectCollections } from '../../redux/shop/shop.selector'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'

const CollectionOverview = ({ collections }) => (
    <div className='collections-overveiew'>
        {collections.map(({ id, ...otherCollectionsProps }) => (
            <CollectionPreview key={id} {...otherCollectionsProps} />
        ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);