const redux=require('redux')

//Reducer Function =>mutates Stae
const counterReducer=(state={counter:0},action)=>{
    if(action.type==='increment'){
        return {
            counter:state.counter+1
        }
    }
    if(action.type==='decrement'){
        return {
            counter:state.counter-1
        }
    }
   
}

//Store contain state of Application
const store=redux.createStore(counterReducer)


//subscriber function
const counterSubscriber=()=>{
    const latestState=store.getState()
    console.log(latestState)
}

//Subscribing a function
store.subscribe(counterSubscriber)


//Dispatching action
store.dispatch({type:'increment'})
store.dispatch({type:'decrement'})