import { SUBMIT, CHANGE, CHANGE_CLASS /*VIEW_MORE*/ } from '../actions'


export const initialState = {
    queryResponse: {
        totalItems: 0,
        items: [],
    },
    queryParameters: {
        volume: '',
        subject: 'all',
        orderBy: 'relevance',
    },
    classNameState: 'DisplayNone',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT:
            return reduceSubmit(state, action);
        case CHANGE:
            return reduceChange(state, action);
        case CHANGE_CLASS:
            return reduceChangeClass(state, action);
        // case VIEW_MORE:
        //     return reduceViewMore(state, action);
        default:
            return state;
    }
};

const reduceSubmit = (state, action) => {
    const { queryResponse } = state;
    const { payload: { items, totalItems } } = action;
    console.log('submit items length: ', queryResponse.items.length);
    

    return {
        ...state,
        queryResponse: { ...queryResponse, totalItems: totalItems, items: items }
    }
};

const reduceChange = (state, action) => {
    const { queryParameters } = state;
    const { payload: { name, value } } = action;

    return {
        ...state,
        queryParameters: { ...queryParameters, [name]: value },
    }
};

const reduceChangeClass = (state, action) => {
    const { classNameState } = state;
    const className = classNameState === 'DisplayNone' ? 'Loader' : 'DisplayNone';

    return {
        ...state,
        classNameState: className,
    }
};

// const reduceViewMore = (state, action) => {
//     const { queryResponse } = state;
//     let {items} = queryResponse;
//     const { payload: { nextItems, totalItems } } = action;
//     console.log('reduceViewMore');
//     // if (items[items.length - 1] === nextItems[0]) {
//     //     items.pop([items.length - 1]);
//     // }
//     // console.log(items);
//     // console.log(nextItems);
//     if (totalItems !== 0){
//         for (const iterator of nextItems) {
//             items.push(iterator);
//         }
//     } else {items = []};

//     // console.log(items);
//     return {
//         ...state,
//         queryResponse: { ...queryResponse, totalItems: totalItems, items: items}
//     }
// };