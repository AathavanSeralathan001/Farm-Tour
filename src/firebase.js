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
  // apiKey: "AIzaSyCKAIR4igXgcjw6VXhiMbVuioCH8yCzxIk",
  // authDomain: "farm-tour-bb784.firebaseapp.com",
  // projectId: "farm-tour-bb784",
  // storageBucket: "farm-tour-bb784.appspot.com",
  // messagingSenderId: "281635073511",
  // appId: "1:281635073511:web:872ae1e986efff4393e142",
  // measurementId: "G-V0CMWP8P0R"
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