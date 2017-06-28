import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDr28fADYbEzR0Y3vNBf79h9H0izHfGgPY",
    authDomain: "bsp-webapp-d01a0.firebaseapp.com",
    databaseURL: "https://bsp-webapp-d01a0.firebaseio.com",
    projectId: "bsp-webapp-d01a0"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;