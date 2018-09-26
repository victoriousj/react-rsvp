import * as GuestActionTypes from '../actiontypes/guest';

const initialState = {
    isFiltered: false,
    pendingGuest: '',
    currentKey: 2,
    guests: [
      {
        id: 0,
        key: 0,
        name: 'Treasure',
        isConfirmed: false,
        isEditing: false,
      },
      {
        id: 1,
        key: 1,
        name: 'Nick',
        isConfirmed: true,
        isEditing: false,
      },
      {
        id: 2,
        key: 2,
        name: 'Khalil',
        isConfirmed: true,
        isEditing: false,
      },
    ],
    getNextKey: function() { return ++this.currentKey },
    getTotalInvited: function() { return this.guests.length },
    getTotalConfirmed: function() { return reduce((total, guest) => 
        guest.isConfirmed ? total + 1 : total, 
      0);
    },
    getTotalUnconfirmed: function() { 
        return this.getTotalInvited() - this.getTotalConfirmed() 
    },
}

export default function Guest(state=initialState, action) {
    switch(action.type) {
        case GuestActionTypes.REMOVE_GUEST: {
            const removeGuestList = state.guests.filter(guest =>
                guest.id !== action.id);
            return {
                ...state,
                guests: removeGuestList
            };
        }

        case GuestActionTypes.CREATE_GUEST: {
            const addGuestList = [
                ...state.guests,
                {
                    id: state.getNextKey(),
                    key: state.currentKey,
                    name: action.name,
                    isConfirmed: false,
                    isEditing: false,
                }
            ];
            return {
                ...state,
                guests: addGuestList
            };
        }

        case GuestActionTypes.SET_GUEST_NAME: {
            const setGuestNameList = state.guests.map(guest =>
                guest.id === action.id
                ? {...guest, name: action.name}
                : guest
            );
            return {
                ...state,
                guests: setGuestNameList
            };
        };

        case GuestActionTypes.TOGGLE_GUEST_PROP: {
            const toggleGuestPropList = state.guests.map(guest =>
                guest.id === action.id
                ? {...guest, [action.prop]: !guest[action.prop]}
                : guest
            );
        };
    }
}