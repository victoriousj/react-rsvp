import React, { Component } from 'react';

import Header from './Header/Header';
import MainContent from './MainContent/MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: '',
    currentKey: 0,
    guests: [
      {
        key: 0,
        name: 'Treasure',
        isConfirmed: false,
        isEditing: false,
      },
      {
        key: 1,
        name: 'Nick',
        isConfirmed: true,
        isEditing: false,
      },
      {
        key: 2,
        name: 'Khalil',
        isConfirmed: true,
        isEditing: false,
      },
    ],
  };

  getNextKey = () => {
    let highestKey = this.state.currentKey;
    this.state.guests.forEach(guest => {
      if ((guest.key > highestKey) 
      && (guest.key > this.state.currentKey)) { 
        highestKey = guest.key;
      }
    });
    this.setState({currentKey: ++highestKey});
    return highestKey;
  }

  changePendingGuest = e => {
    this.setState({pendingGuest: e.target.value});
  }

  createNewGuest = () => {
    this.setState(
      {
        guests: [
          {
            key: this.getNextKey(),
            name: this.state.pendingGuest,
            isConfirmed: false,
            isEditing: false,
          },
          ...this.state.guests
        ],
        pendingGuest: '',
      }
    )
  }

  togglePropAt = (propToChange, keyToChange) => 
    this.setState({
      guests: this.state.guests.map((guest) =>
        guest.key === keyToChange 
          ? { ...guest, [propToChange]:!guest[propToChange] } 
          : guest
        )
      });
        
  setNameAt = (name, keyToChange) => 
    this.setState({
      guests: this.state.guests.map((guest) =>
          guest.key === keyToChange 
          ? {...guest, name} 
          : guest
      )
    });

  toggleEditingAt = index => this.togglePropAt("isEditing", index);
    
  toggleConfirmationAt = index => this.togglePropAt("isConfirmed", index);

  toggleFilter = () => this.setState({isFiltered: !this.state.isFiltered})

  getTotalInvited = () => this.state.guests.length;
  
  getTotalConfirmed = () => 
    this.state.guests.reduce((total, guest) => 
      guest.isConfirmed ? total + 1 : total, 
    0);

  removeGuestAt = key =>
    this.setState(
      {guests: this.state.guests.filter(guest => guest.key !== key)}
    );

  render() {
    let totalGuests = this.getTotalInvited();
    let totalConfirmed = this.getTotalConfirmed();
    let totalUnconfirmed = (totalGuests - totalConfirmed);

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

export default App;