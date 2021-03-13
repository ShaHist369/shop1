const redux = require('redux')


    const instate = {
        counter: 0
    }


// reducer
    const reducer = (state = instate,action) =>{
        if(action.type === "ADD"){
            return {counter: state.counter + 2}
        }
        return state
    }
// store
    const store = redux.createStore(reducer);
    store.subscribe(()=>{
        console.log('subscribe', store.getState())
    })
//   console.log(store.getState());

// actions
    const addCounter = {
        type: "ADD"
    }

    store.dispatch(addCounter)
//    console.log(store.getState())