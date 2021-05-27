// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

//Initialize Firebase in your app
// TODO - da si sloja apiKEy, appId i projectId v env files i da si gi cheta ot tam!!!!!!!!!!!!!!!!!!!
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APPKEY,
  authDomain: "petmypet-pd.firebaseapp.com",
  projectId: "petmypet-pd",
  storageBucket: "petmypet-pd.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyA0LwWZ1uWLFKTJEC0xRpPG9fQrdZDrV5E",
//   authDomain: "petmypet-pd.firebaseapp.com",
//   projectId: "petmypet-pd",
//   storageBucket: "petmypet-pd.appspot.com",
//   messagingSenderId: "107181764066",
//   appId: "1:107181764066:web:ab099903dd18130fdfddbb",
// };

// Initialize Firebase only if it is not initialized already - - tova mi gyrmi, kogato nqmam initializiran firebase!!!!!!
// if (!firebase.app.length) {
firebase.initializeApp(firebaseConfig);
// }


const authentication = async function () { };
const auth = firebase.auth();

authentication.login = async function (email, password) {
   return await auth.signInWithEmailAndPassword(email, password)
};

authentication.register = async function (email, password, repeatPassword) {
  // const myFirstPromise = new Promise((resolve, reject) => {
  //   if (password !== repeatPassword || password === '' || repeatPassword === '') {
  //     console.log(email, password, 1);
  //     reject('Password fields must match and not be empty.');
  //   } else {
  //     resolve({ email: email, password: password });
  //     console.log(email, password, 2);
  //   }
  // });

  // return await myFirstPromise.then((user) => {
  //   // console.log({ ...user }, 3);
  //   auth.createUserWithEmailAndPassword(email, password)
  // })
  //   .catch(err => console.error(err));

  // if (password !== repeatPassword || password === '' || repeatPassword === '') {
  //   const pr = new Promise();
  //   pr.reject('Password fields must match and not be empty.');
  //   // return pr;
  //  } else {
    return auth.createUserWithEmailAndPassword(email, password);
  // }
};

authentication.logout = async function () {
  return await auth.signOut();
};

// authentication.checkUserStatus = function (user) {
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(user);
    console.log("Logged In")
  } else {
    // User is signed out
    console.log("Logged out")
  }
});
// }
// authentication.checkUserStatus();

export default authentication;


const myFirstPromise = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) {
    setTimeout(function () {
      resolve("Promise is resolved!"); // fulfilled
    }, 300);
  } else {
    reject('Promise is rejected!');
  }
});
