import React from 'react';
<<<<<<< HEAD
import {connect } from 'react-redux';
// import CollectionItem from '../../components/collection-item/collection-item.component'
import {selectCollection} from '../../redux/shop/shop.selectors';
import './collection.styles.scss';

const CollectionPage = ({collection}) => {

console.log(collection)

    return (
    <div className='collection-page'>
       <h2>Collection PAGE {collection.title} </h2>
      </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
=======
import { connect } from 'react-redux';
import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
>>>>>>> testing
