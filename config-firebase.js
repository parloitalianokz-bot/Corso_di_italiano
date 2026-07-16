import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = { 
    databaseURL: "https://esercizi-parlo-italiano-default-rtdb.europe-west1.firebasedatabase.app/" 
};

const app = initializeApp(firebaseConfig);

// Esportiamo il DB per poterlo usare negli altri file
export const db = getDatabase(app);