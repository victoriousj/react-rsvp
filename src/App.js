import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';

class App extends Component {

  state = {
    isFiltered: false,
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
      }
    ],
  };

  togglePropAt = (propToChange, keyToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === keyToChange) {
          return {
            ...guest,
            [propToChange]: !guest[propToChange],
          };
        }
        return guest;
      })
    });

  toggleConfirmationAt = (index) => this.togglePropAt("isConfirmed", index);

  toggleEditingAt = (index) => this.togglePropAt("isEditing", index);

  setNameAt = (name, keyToChange) => 
  this.setState({
    guests: this.state.guests.map((guest, index) => {
      if (index === keyToChange) {
        return {
          ...guest,
          name
        };
      }
      return guest;
    })
  });

  toggleFilter = () => this.setState({isFiltered: !this.state.isFiltered})

  getTotalInvited = () => this.state.guests.length;
  
  getTotalConfirmed = () => 
    this.state.guests.reduce((total, guest) => 
      total += (guest.isConfirmed ? 1 : 0), 
    0);

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
              <input type="text" value="Safia" placeholder="Invite Someone" readOnly/>
              <button type="submit" name="submit" value="submit">Submit</button>
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
          toggleConfirmationAt = {this.toggleConfirmationAt} 
          toggleEditingAt = {this.toggleEditingAt}
          setNameAt = {this.setNameAt}
          isFiltered = {this.state.isFiltered}
        />
        </div>
      </div>
    );
  }
}

export default App;