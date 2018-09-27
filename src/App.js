import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux';

import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import * as GuestActionCreators from '../action/guest';

class App extends Component {
  static propTypes = {
    guests: PropTypes.array.isRequired,
  };
 
  render() {
    const { dispatch, guests, isFiltered, pendingGuest, currentKey } = this.props;
    const removeGuest = bindActionCreators(GuestActionCreators.removeGuest, dispatch);
    const createGuest = bindActionCreators(GuestActionCreators.createGuest, dispatch);
    const setGuestName = bindActionCreators(GuestActionCreators.setGuestName, dispatch);
    const toggleGuestProp = bindActionCreators(GuestActionCreators.toggleGuestProp, dispatch);
    const toggleIsFiltered = bindActionCreators(GuestActionCreators.toggleIsFiltered, dispatch);
    const toggleGuestEditing = bindActionCreators(GuestActionCreators.toggleGuestEditing, dispatch);
    const toggleGuestConfirmation = bindActionCreators(GuestActionCreators.toggleGuestConfirmation, dispatch);

    const getTotalInvited = function() { return this.guests.length };
    
    const getTotalConfirmed = function() { return reduce((total, guest) => 
        guest.isConfirmed ? total + 1 : total, 0);
    };
    
    const getTotalUnconfirmed = function() { 
        return (this.getTotalInvited() - this.getTotalConfirmed()); 
    };

    return (
      <div className="App">
        <Header 
          changePendingGuest={this.changePendingGuest}
          pendingGuest={this.state.pendingGuest}
          createNewGuest={this.createNewGuest}
        />
        <MainContent
           guests={this.state.guests}
           setNameAt={this.setNameAt}
           totalInvited={totalGuests}
           toggleFilter={this.toggleFilter}
           numberAttending={totalConfirmed}
           isFiltered={this.state.isFiltered}
           removeGuestAt={this.removeGuestAt}
           numberUnconfirmed={totalUnconfirmed}
           toggleEditingAt={this.toggleEditingAt}
           pendingGuest={this.state.pendingGuest} 
           toggleConfirmationAt={this.toggleConfirmationAt}
        />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    guests: state.guests,
    isFiltered: state.isFiltered,
    currentKey: state.currentKey,
    pendingGuest: state.pendingGuest,
  }
);

export default connect(mapStateToProps)(App);