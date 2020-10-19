import React from 'react'
import { connect } from 'react-redux';
import './collection.styles.scss'
import { selectCollection } from '../../redux/shop/shop.selector'
import CollectionItem from '../../components/collection-item/collection-item.component';


const CollectionPage = ({ collection, match }) => {

    console.log(match)
    console.log(collection)

    return (
        <div className="collection-page">
            <h2 className="title">COLLECTION</h2>
        </div>
    )
};


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);

// <div className='items'>
// {items.map(item => {
//     return <CollectionItem key={item.id} item={item} />
// })}
// </div>