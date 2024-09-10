import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const useFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCmuqfT2dm6f13hrYMxkzxgZHb4YTLsIxU",
        authDomain: "ss14-solution-designer.firebaseapp.com",
        projectId: "ss14-solution-designer",
        storageBucket: "ss14-solution-designer.appspot.com",
        messagingSenderId: "391627234436",
        appId: "1:391627234436:web:2c90a051bc8708e39636d1",
        measurementId: "G-MWCDJT56ZL"
      };

    const firebaseApp = initializeApp(firebaseConfig);
    const firestore = getFirestore(firebaseApp);

    return {
        firebaseApp,
        firestore,
    }
}