import React from "react";
import MenuItem from "../menu-item/menu-item.component";
<<<<<<< HEAD
import { connect } from "react-redux";
import { selectDirectorySelections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

=======
import {connect} from 'react-redux'
>>>>>>> testing
import "./directory.styless.scss";
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect';

<<<<<<< HEAD
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelections,
});

=======
const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

>>>>>>> testing
export default connect(mapStateToProps)(Directory);
