import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";

let fire = (() => {
    let db;
    // let analytics;

    let init = () => {
        console.log("Firebase Initialized");
        var firebaseConfig = {
            apiKey: "AIzaSyDKFtpDFtdYMi7YRBV8F-aJoCHVCyARnxY",
            authDomain: "covidarmyujjain.firebaseapp.com",
            projectId: "covidarmyujjain",
            storageBucket: "covidarmyujjain.appspot.com",
            messagingSenderId: "277671483273",
            appId: "1:277671483273:web:f72d58cd1e463b77ffb358",
            measurementId: "G-43KVGH532B"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();

    }


    let db_init = () => {
        console.log("Database initialized");
        db = firebase.firestore();
    }

    let getOxygen = async () => {
        const oxygenRef = db.collection('oxygen');
        const oxygen = await oxygenRef.get();

        let avOxygen = [];
        oxygen.forEach(doc => {
            avOxygen.push(doc.data());
        })
        // console.log(avOxygen)
        return avOxygen;
    }

    let getBeds = async () => {
        const bedref = db.collection("bed");
        const bed = await bedref.get();

        let avBed = [];
        bed.forEach(doc => {
            avBed.push(doc.data());
        })
        console.log("Bed ", avBed);
        return avBed;
    }

    let getData = async () => {
        const dataRef = db.collection('info').doc('dailyinfo');
        let data = await dataRef.get();
        // console.log("data => ", data.data());
        return data.data();
    }

    // let getPlasma = async () => {
    //     const plasmaRef = db.collection('oxygen');
    //     const plasma = await plasmaRef.get();

    //     let avPlasma = [];
    //     plasma.forEach(doc => {
    //         avPlasma.push(doc.data());
    //     })
    //     console.log(avPlasma)
    //     return avPlasma;
    // }


    return { init, db_init, getOxygen, getBeds, getData };
})();
export default fire;