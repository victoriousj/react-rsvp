import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import * as GuestActionCreators from '../actions/guest';

class App extends Component {
  static propTypes = {
    guests: PropTypes.array.isRequired,
  };
 
  render() {
    const { dispatch, guests, isFiltered, pendingGuest } = this.props;
    const removeGuest = bindActionCreators(GuestActionCreators.removeGuest, dispatch);
    const createGuest = bindActionCreators(GuestActionCreators.createGuest, dispatch);
    const setGuestName = bindActionCreators(GuestActionCreators.setGuestName, dispatch);
    const toggleIsFiltered = bindActionCreators(GuestActionCreators.toggleIsFiltered, dispatch);
    const toggleGuestEditing = bindActionCreators(GuestActionCreators.toggleGuestEditing, dispatch);
    const changePendingGuest = bindActionCreators(GuestActionCreators.changePendingGuest, dispatch);
    const toggleGuestConfirmation = bindActionCreators(GuestActionCreators.toggleGuestConfirmation, dispatch);

    let totalInvited = guests.length;
    
    let totalConfirmed =
      guests.reduce((total, guest) => guest.isConfirmed ? total + 1 : total, 0);
    
    let totalUnconfirmed = totalInvited - totalConfirmed;
    
    return (
      
      <div className="App">
        <Header 
          pendingGuest={pendingGuest}
          createNewGuest={createGuest}
          changePendingGuest={changePendingGuest}
        />
        <MainContent
           guests={guests}
           isFiltered={isFiltered}
           setNameAt={setGuestName}
           totalInvited={totalInvited}
           pendingGuest={pendingGuest} 
           removeGuestAt={removeGuest}
           toggleFilter={toggleIsFiltered}
           totalConfirmed={totalConfirmed}
           totalUnconfirmed={totalUnconfirmed}
           toggleEditingAt={toggleGuestEditing}
           toggleConfirmationAt={toggleGuestConfirmation}
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