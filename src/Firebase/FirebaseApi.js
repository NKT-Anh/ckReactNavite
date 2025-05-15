import { collection,onSnapshot, where,query,getDocs, setDoc,doc,getDoc, deleteDoc, updateDoc, arrayUnion, writeBatch } from "firebase/firestore";
import { db,auth} from "./firebaseconfig";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail  } from "firebase/auth";
export const loadFoodHome  = (loadScreen) =>{
    const foodCollection = collection(db,'foods');
    const stopLoadFood  =  onSnapshot(
        foodCollection,
        (snapshot) =>{
        const foodList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()

        }))

        loadScreen(foodList);
    } , (error) =>{
        console.log("no firebase", error);
    }
)
    return stopLoadFood;

}