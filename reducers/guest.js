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
        isEditing: false,
        isConfirmed: false,
      },
      {
        id: 1,
        key: 1,
        name: 'Nick',
        isEditing: false,
        isConfirmed: true,
      },
      {
        id: 2,
        key: 2,
        name: 'Khalil',
        isEditing: false,
        isConfirmed: true,
      },
    ],
    getNextKey: function() { return ++this.currentKey },
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
                    isConfirmed: false,
                    name: action.name,
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
            return {
                ...state,
                guests: toggleGuestPropList
            };
        };

        case GuestActionTypes.TOGGLE_IS_FILTERED: {
            return {
                ...state,
                isFiltered: !state.isFiltered
            };
        };

        case GuestActionTypes.TOGGLE_GUEST_EDITING: {
            const toggleIsEditingAction = 
            { 
                type: GuestActionTypes.TOGGLE_GUEST_PROP,
                prop: 'isEditing',
                id: action.id
            };
            return Guest(state, toggleIsEditingAction);
        };

        case GuestActionTypes.TOGGLE_GUEST_CONFIRMATION: {
            const toggleIsEditingAction = 
            { 
                type: GuestActionTypes.TOGGLE_GUEST_PROP,
                prop: 'isConfirmed',
                id: action.id
            };
            return Guest(state, toggleIsEditingAction);
        };

        case GuestActionTypes.CHANGE_PENDING_GUEST: {
            return {
                ...state,
                pendingGuest: action.e.target.value
            }
        };

        default:
            return state;
    }
}