import React from 'react';
import Proptypes from 'prop-types';

function ContactItemBody({ name, tag }) {
 return (
   <div className="contact-item__body">
     <h3 className="contact-item__title">{name}</h3>
     <p className="contact-item__username">@{tag}</p>
   </div>
 );
}

ContactItemBody.propTypes = {
  name : Proptypes.string.isRequired,
  tag : Proptypes.string.isRequired,
}

export default ContactItemBody;