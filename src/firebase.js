import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAo1jtGmPUmASBLVhMMzG1eHh8pGoWmoWI",
  authDomain: "netflix-clone-19d0c.firebaseapp.com",
  projectId: "netflix-clone-19d0c",
  storageBucket: "netflix-clone-19d0c.firebasestorage.app",
  messagingSenderId: "443690072248",
  appId: "1:443690072248:web:ab4a3bc2c2b85df2f85c4d",
  measurementId: "G-RNRLMRDQN4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (email,password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth,email,password);
    const user = userCredential.user;
    console.log('User signed up: ',user);
    
    await addDoc(collection(db,"users"),{
      uid: user.uid,
      email:user.email,
    })
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const login = async (email,password) => {
  try {
    await signInWithEmailAndPassword(auth,email,password);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = () => {
  signOut(auth);
  console.log("User signed out");
}

export {auth,db,login,signup,logout};
