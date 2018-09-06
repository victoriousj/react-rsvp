import React, { Component } from 'react';

import GuestList from './GuestList';

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
      if ((guest.key >= highestKey) 
        && (guest.key > this.state.currentKey)) { 
        highestKey = guest.key;
      }
    });
    this.setState({currentKey: ++highestKey});
    return highestKey;
  }

  changePendingGuest = (e) => {
    this.setState({pendingGuest: e.target.value});
  }

  createNewGuest = () => {
    let guestsCopy = [...this.state.guests];
    let newGuest = {
      key: this.getNextKey(),
      name: this.state.pendingGuest,
      isConfirmed: false,
      isEditing: false,
    };
    guestsCopy.push(newGuest);
    this.setState(
      {
        guests: guestsCopy,
        pendingGuest: '',
      }
    );
  }

  togglePropAt = (propToChange, keyToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        return (index === keyToChange) 
          ? { 
              ...guest, 
              [propToChange]: !guest[propToChange] 
            } 
          :   guest;
      })
    });

  toggleEditingAt = (index) => 
    this.togglePropAt("isEditing", index);
    
  toggleConfirmationAt = (index) => 
    this.togglePropAt("isConfirmed", index);

  setNameAt = (name, keyToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        return (index === keyToChange)
          ? { 
              ...guest,
              name 
            }
          :   guest;
      })
    });

  toggleFilter = () => 
    this.setState({isFiltered: !this.state.isFiltered})

  getTotalInvited = () => 
    this.state.guests.length;
  
  getTotalConfirmed = () => 
    this.state.guests.reduce((total, guest) => 
      total += (guest.isConfirmed ? 1 : 0), 
    0);

  removeGuestAt = (index) => {
    let guestCopy = [...this.state.guests];
    guestCopy.splice(index, 1);
    this.setState({
      guests: [...guestCopy],
    });
  }

  render() {
    let totalGuests = this.getTotalInvited();
    let totalConfirmed = this.getTotalConfirmed();
    let totalUnconfirmed = (totalGuests - totalConfirmed);

    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
              <input type="text" value={this.state.pendingGuest} onChange={this.changePendingGuest} placeholder="Invite Someone"/>
              <button type="button" onClick={this.createNewGuest} name="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input 
                type="checkbox" 
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}
                /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>{totalConfirmed}</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>{totalUnconfirmed}</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>{totalGuests}</td>
              </tr>
            </tbody>
          </table>
         
        <GuestList 
          guests={this.state.guests} 
          setNameAt = {this.setNameAt}
          isFiltered = {this.state.isFiltered}
          removeGuestAt = {this.removeGuestAt} 
          toggleEditingAt = {this.toggleEditingAt}
          toggleConfirmationAt = {this.toggleConfirmationAt}
        />
        </div>
      </div>
    );
  }
}

export default App;