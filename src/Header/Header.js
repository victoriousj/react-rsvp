import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    static propTypes = {
        pendingGuest: PropTypes.string,
        createNewGuest: PropTypes.func.isRequired,
        changePendingGuest: PropTypes.func.isRequired,
    };

    render() {
        let peventDefaultAndCreateGuest = e => {
            e.preventDefault();
            this.props.createNewGuest();
        }

        return (
            <header>
                <h1>RSVP</h1>
                <p>A Treehouse App</p>
                <form onSubmit={peventDefaultAndCreateGuest}>
                    <input 
                        type="text" 
                        value={this.props.pendingGuest} 
                        onChange={this.props.changePendingGuest} 
                        placeholder="Invite Someone"
                        />
                    <button 
                        type="button" 
                        name="submit"
                        onClick={this.props.createNewGuest} 
                        >Submit</button>
                </form>
            </header>
        )
    }
}

export default Header;