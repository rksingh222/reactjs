create project
redux-demo.js
npm init -y
this will create package.json
npm install redux
In redux-demo.js
const redux = require('redux')
//reducer function
const counterReducer = (state = { counter : 0 }, action) =>{
  if(action.type === 'increment'){
    return {
    counter: state.counter + 1
    };
  }
  if(action.type === 'decrement'){
     return {
    counter: state.counter - 1
    };
  }
  return state;
}

//the store points at counterreducer
const store = redux.createStore(counterReducer)

console.log(store.getState())
const counterSubscriber = () => {
  // this will give the latest state snapshot
 const latestState = store.getState();
 console.log(latestState);
}

//this method should be executed when the state changes
store.subscribe(counterSubscriber)

//dispatch is a javascript object with type property
store.dispatch({type: 'increment'})

open terminal
node redux-demo.js //this will result in an error

for a new project in react to install redux we need to use this
npm install
npm install redux react-redux
npm start


to install redux toolkit
npm install @reduxjs/toolkit
