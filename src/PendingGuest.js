import React from 'react';
import PropTypes from 'prop-types';

const PendingGuest = props =>  
    <li>
        <span className="pending">
            {props.name}
        </span>
    </li>
    
PendingGuest.propTypes = {
    name: PropTypes.string,
};


export default PendingGuest;