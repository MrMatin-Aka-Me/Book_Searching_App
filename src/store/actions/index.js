export const SUBMIT = 'SUBMIT';
export const CHANGE = 'CHANGE';
export const CHANGE_CLASS = 'CHANGE_CLASS';
// export const VIEW_MORE = 'VIEW_MORE';

export const submit = (items, totalItems) => {
    return {
        type: SUBMIT,
        payload: {items, totalItems},
    };
};

export const change = (name, value) => {
    return {
        type: CHANGE,
        payload: {name, value},
    };
};

export const changeClass = () => {
    return {
        type: CHANGE_CLASS,
        payload: {},
    };
};

// export const viewMore = (nextItems, totalItems) => {
//     return {
//         type: VIEW_MORE,
//         payload: {nextItems, totalItems},
//     };
// };