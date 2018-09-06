import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';

const GuestList = props =>  
    <ul>
        {props.guests
            .filter((guest) => !props.isFiltered || guest.isConfirmed)
            .map((guest) =>
            <Guest 
                key={guest.key} 
                name={guest.name} 
                isEditing={guest.isEditing}
                isConfirmed={guest.isConfirmed}
                setName={text => props.setNameAt(text, guest.key)}
                removeGuestAt = {() => props.removeGuestAt(guest.key)}
                handleEditingToggle={() => props.toggleEditingAt(guest.key)}
                handleConfirmation={() => props.toggleConfirmationAt(guest.key)} 
            />
        )}
    </ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    setNameAt: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
};


export default GuestList;