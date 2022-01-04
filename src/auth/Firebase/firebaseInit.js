import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const firebaseInit = () => initializeApp(firebaseConfig);


export default firebaseInit;