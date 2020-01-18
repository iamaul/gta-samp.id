import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyApHUadwJVjtkC_oNaOpCNMrqcIu-OXymw",
    authDomain: "sa-mp-indonesia-4eb3c.firebaseapp.com",
    databaseURL: "https://sa-mp-indonesia-4eb3c.firebaseio.com",
    projectId: "sa-mp-indonesia-4eb3c",
    storageBucket: "",
    messagingSenderId: "500256952451",
    appId: "1:500256952451:web:c3faf6a49d28f9a9"
}

// react-redux-firestore config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase config
firebase.initializeApp(firebaseConfig);
// Initialize firestore config
// const firestore = firebase.firestore();
// const settings = {timestampsInSnapshots: true};
    // firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) 
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

// Initial state
const initialState = {};
// Create Store
const store = createStoreWithFirebase(
    rootReducer, 
    initialState, 
    compose(
        reactReduxFirebase(firebase),
        window.__REDUX_DEVTOOLS_EXTENSION__ && 
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;