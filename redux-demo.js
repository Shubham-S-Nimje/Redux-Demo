const redux = require('redux');

const counterReducer = (state = { counter: 0}, action) => {
    if(action.type == 'increment'){
    return {
        counter: state.counter + 1
    };
}
if(action.type == 'decrement'){
    return {
        counter: state.counter - 1
    };
}
};

const store = redux.createStore(counterReducer);

// const counterReducer = (state = { counter: 0}, action) => {
//     return {
//         counter: state.counter - 1
//     };
// };

// const store2 = redux.createStore(counterReducer);

// console.log(store.getState());

const countersubscriber = () => {
    const latestState = store.getState();
    // const latestState = store2.getState();
    console.log(latestState)
};

store.subscribe(countersubscriber);
// store2.subscribe(countersubscriber);

// for(i=0;i<5;i++){
// store.dispatch({type: 'increment' });
// }

// for(i=0;i<5;i++){
// store2.dispatch({type: 'decrement' });
// }

store.dispatch({type: 'increment' });
store.dispatch({type: 'decrement' });

