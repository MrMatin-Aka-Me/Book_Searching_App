export const SUBMIT = 'SUBMIT';
export const CHANGE = 'CHANGE';

export const submit = () => {
    return {
        type: SUBMIT,
        payload: {},
    };
};

export const change = (name, value) => {
    return {
        type: CHANGE,
        payload: {name, value},
    };
};