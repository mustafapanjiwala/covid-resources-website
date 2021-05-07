import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";

let fire = (() => {
    let db;
    // let analytics;

    let init = () => {
        // console.log("Firebase Initialized");
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
        // console.log("Database initialized");
        db = firebase.firestore();
    }

    function downloadObjectAsJson(exportObj, exportName) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    let downloadData = async () => {
        console.log("Download Ran");
        downloadObjectAsJson(await getOxygen(), "oxygen")
        downloadObjectAsJson(await getTiffin(), "tiffin")
        downloadObjectAsJson(await getBeds(), "beds")
        downloadObjectAsJson(await getData(), "currData")

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
        // console.log("Bed ", avBed);
        return avBed;
    }

    let getData = async () => {
        const dataRef = db.collection('info').doc('dailyinfo');
        let data = await dataRef.get();
        // console.log("data => ", data.data());
        return data.data();
    }

    let getTiffin = async () => {
        const tiffinRef = db.collection('tiffin');
        const tiffin = await tiffinRef.get();

        let avTiffin = [];
        tiffin.forEach(doc => {
            avTiffin.push(doc.data());
        })

        return avTiffin;

    }

    let getLocalTiffin = async () => {
        // fetch("data/tiffin.json", {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // }).then((res) => {
        //     return (res.json());
        // }).then((data) => {
        //     return data;
        // })
        let res = await fetch("data/tiffin.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        let data = await res.json();
        // console.log("Tiffin", data);
        return data;

    }

    let getLocalOxygen = async () => {

        let res = await fetch("data/oxygen.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        let data = await res.json();
        // console.log("Oxygen", data);
        return data;

    }
    let getLocalCurrData = async () => {

        let res = await fetch("data/currData.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        let data = await res.json();
        // console.log("Curr Data", data);
        return data;

    }
    let getLocalBeds = async () => {

        let res = await fetch("data/beds.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        let data = await res.json();
        // console.log("Beds", data);
        return data;

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


    return { init, db_init, getOxygen, getBeds, getData, getTiffin, downloadData, getLocalTiffin, getLocalBeds, getLocalOxygen, getLocalCurrData };
})();
export default fire;