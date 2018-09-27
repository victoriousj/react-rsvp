import React from 'react';
import PropTypes from 'prop-types';

const Counter = props =>
    <table className="counter">
        <tbody>
        <tr>
            <td>Attending:</td>
            <td>{props.totalInvited}</td>
        </tr>
        <tr>
            <td>Unconfirmed:</td>
            <td>{props.totalConfirmed}</td>
        </tr>
        <tr>
            <td>Total:</td>
            <td>{props.totalUnconfirmed}</td>
        </tr>
        </tbody>
  </table>


Counter.propTypes = {
    totalInvited: PropTypes.number.isRequired,
    totalConfirmed: PropTypes.number.isRequired,
    totalUnconfirmed: PropTypes.number.isRequired,
}

export default Counter;