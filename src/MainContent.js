import React from 'react';
import PropTypes from 'prop-types';

import GuestList from './GuestList';
import Counter from './Counter';

const MainContent = props => 
    <div className="main">
        <div>
        <h2>Invitees</h2>
        <label>
            <input 
                type="checkbox" 
                onChange={props.toggleFilter}
                checked={props.isFiltered}
            /> Hide those who haven't responded
        </label>
        </div>
        <Counter 
            totalInvited = {props.totalGuests}
            numberAttending = {props.totalConfirmed}
            numberUnconfirmed =  {props.totalUnconfirmed}
        />
        <GuestList 
            guests={props.guests} 
            setNameAt = {props.setNameAt}
            pendingGuest = {props.pendingGuest}
            isFiltered = {props.isFiltered}
            removeGuestAt = {props.removeGuestAt} 
            toggleEditingAt = {props.toggleEditingAt}
            toggleConfirmationAt = {props.toggleConfirmationAt}
        />
    </div>

MainContent.propTypes = {
    pendingGuest: PropTypes.string,
    guests: PropTypes.array.isRequired,
    setNameAt: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    toggleFilter: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    totalInvited: PropTypes.number.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    numberAttending: PropTypes.number.isRequired,
    numberUnconfirmed: PropTypes.number.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
}

export default MainContent;