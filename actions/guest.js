import * as GuestActionTypes from  '../actiontypes/guest';

export const removeQuest = id => {
    return {
        type: GuestActionTypes.REMOVE_GUEST,
        id,
    };
};

export const createGuest = name => {
    return {
        type: GuestActionTypes.CREATE_GUEST,
        name
    };
};

export const setGuestName = (id, name) => {
    return {
        type: GuestActionTypes.SET_GUEST_NAME,
        name,
        id
    };
};

export const toggleGuestProp = (id, prop) => {
    return {
        type: GuestActionTypes.TOGGLE_GUEST_PROP,
        prop,
        id
    };
};

export const toggleGuestEditing = id => {
    return {
        type: GuestActionTypes.TOGGLE_GUEST_EDITING,
        id
    };
};

export const toggleGuestConfirmation = id => {
    return {
        type: GuestActionTypes.TOGGLE_GUEST_CONFIRMATION,
        id
    };
};