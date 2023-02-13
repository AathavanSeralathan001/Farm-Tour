import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { getAuth } from "firebase/auth"
import "firebase/compat/firestore"
import 'firebase/storage'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBSKphKHRMp8NiaecaJLnNVquwegLZHFVo",
  authDomain: "farm-tour.firebaseapp.com",
  projectId: "farm-tour",
  storageBucket: "farm-tour.appspot.com",
  messagingSenderId: "183943473032",
  appId: "1:183943473032:web:a7ac8b715a35b8ea34bc3d"
})



export const auth = getAuth(app);
const db = firebase.firestore();
// export const createUserDocument = async(user, additionalData)=>{
//   if(!user) return;
//   const userRef = db.doc(`landRegistration/${user.uid}`)
//   const snapshot = await userRef.get();
//   if(!snapshot.exists){
//     const {email} = user;
//     try{

//     }catch(error){
//       console.log("error in creating user", error)
//     }
//   }
// }
export {db};
export default app