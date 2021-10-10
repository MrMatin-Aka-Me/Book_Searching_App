export const SUBMIT = 'SUBMIT';
export const CHANGE = 'CHANGE';
export const CHANGE_CLASS = 'CHANGE_CLASS';
export const CHANGE_BOOK_FULL_INFO = 'CHANGE_BOOK_FULL_INFO';
export const RESET_BOOK_FULL_INFO = 'RESET_BOOK_FULL_INFO';


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

export const changeBookFullInfo = (img, categories, title, authors, description, opened) => {
    return {
        type: CHANGE_BOOK_FULL_INFO,
        payload: {img, categories, title, authors, description, opened},
    };
};

export const resetBookFullInfo = () => {
    return {
        type: RESET_BOOK_FULL_INFO,
        payload: {},
    };
};
