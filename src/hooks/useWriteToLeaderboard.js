import { collection, addDoc } from "firebase/firestore";
import { db } from "../data/firebase";

const useWriteToLeaderboard =  async (newName, newScore) => {
  
    try {
      const collectionRef = collection(db, "leaderboard"); 
  
      // Add a new document with data
      const docRef = await addDoc(collectionRef, {
        name: newName,
        score: newScore,
      });
  
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  export default useWriteToLeaderboard;