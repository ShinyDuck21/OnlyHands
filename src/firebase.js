import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDCiZ6bbFMCBZgouyoU52tOnrQMz4dxKeA",
  authDomain: "onlyhands-f2420.firebaseapp.com",
  projectId: "onlyhands-f2420",
  storageBucket: "onlyhands-f2420.appspot.com",
  messagingSenderId: "497487467556",
  appId: "1:497487467556:web:ec3dfb4e747362ec2fb4b1",
  measurementId: "G-699HFVWLMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
const auth = getAuth(app)

export const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
        localStorage.setItem("login", true)
    }).catch((err) => {
        console.log(err)
    })
}

export const SignOut = () => {
    signOut().then(() => {
        console.log("Success");
    }).catch((err) => {
        console.log(err);
    })
}   