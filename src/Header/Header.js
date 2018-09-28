import React from 'react';
import PropTypes from 'prop-types';

const Header = props =>
    <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form onSubmit={e => {e.preventDefault(); props.createNewGuest()}}>
            <input 
                type="text" 
                value={props.pendingGuest} 
                onChange={props.changePendingGuest} 
                placeholder="Invite Someone"
                />
            <button 
                type="button" 
                name="submit"
                onClick={props.createNewGuest} 
                >Submit</button>
        </form>
    </header>

Header.PropTypes = {
    pendingGuest: PropTypes.string,
    createNewGuest: PropTypes.func.isRequired,
    changePendingGuest: PropTypes.func.isRequired,
};

export default Header;