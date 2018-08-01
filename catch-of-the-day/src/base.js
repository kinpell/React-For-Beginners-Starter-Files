import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCyX_vlDD7EYSs6V_v_SOsap-k49Oacoj0",
    authDomain: "catch-of-the-day-kinpell.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-kinpell.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;