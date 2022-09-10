import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBpP5c8HGqP2cZSv2Hu3Yq9AJ_zfvJyqMY",
    authDomain: "shellhacks-project.firebaseapp.com",
    databaseURL: "https://shellhacks-project-default-rtdb.firebaseio.com",
    projectId: "shellhacks-project",
    storageBucket: "shellhacks-project.appspot.com",
    messagingSenderId: "323439852486",
    appId: "1:323439852486:web:b674a4e3734914b10290c7",
    measurementId: "G-E44R03DTH0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
