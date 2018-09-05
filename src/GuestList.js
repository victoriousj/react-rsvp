import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';

const GuestList = props =>  
    <ul>
        {props.guests.map((guest, index) =>
            <Guest 
                key={guest.key} 
                name={guest.name} 
                isConfirmed={guest.isConfirmed}
                isEditing={guest.isEditing}
                handleConfirmation={() => props.toggleConfirmationAt(guest.key)} 
                handleEditingToggle={() => props.toggleEditingAt(guest.key)}
                setName={text => props.setNameAt(text, index)}
            />
        )}
    </ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    setNameAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
};


export default GuestList;