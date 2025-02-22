import { collection, addDoc } from "firebase/firestore";
import { db } from "../data/firebase";

const writeToLeaderboard = async (newName, newScore) => {
  try {
    const collectionRef = collection(db, "leaderboard");

    // Add a new document with data
    const docRef = await addDoc(collectionRef, {
      name: newName,
      score: newScore,
    });

    console.log("new score added!");
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default writeToLeaderboard;
