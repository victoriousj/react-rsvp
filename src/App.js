import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    guests: [
      {
        name: 'Treasure',
        isConfirmed: false,
      },
      {
        name: 'Nick',
        isConfirmed: true,
      },
      {
        name: 'Khalil',
        isConfirmed: true,
      }
    ],
  };

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
              <input type="text" value="Safia" placeholder="Invite Someone" />
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
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
          <ul>
            <li className="pending"><span>Safia</span></li>
            <li className="responded"><span>Iver</span>
              <label>
                <input type="checkbox" checked /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
            </li>
            <li className="responded">
              <span>Corrina</span>
              <label>
                <input type="checkbox" checked /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
            </li>
            <li>
              <span>Joel</span>
              <label>
                <input type="checkbox" /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
