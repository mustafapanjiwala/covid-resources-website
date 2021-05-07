import React, { useRef, useState } from "react";
import { useParams } from "react-router";
import Dashboard from "../Dashboard/Dashboard";
import DataTable from "../DataTable/DataTable";
import "./Resources.css";
import language from "../../assets/language"
// import fire from "../../scripts/fire";

let Resources = (props) => {
    // let match = useRouteMatch();
    const myRef = useRef(null);
    let [loading, setLoading] = useState(0);
    let lan = props.lan;

    const exScroll = () => myRef.current.scrollIntoView();

    let { id } = useParams(null);

    let headingCalc = (id) => {
        if (id === "oxygen") {
            return "Oxygen";
        }

        if (id === "hospitalbeds") {
            return "Hospital Beds";
        }

        if (id === "tiffinserv") {
            return "Tiffin Service";
        }

        if (id === "plasmaassiastance") {
            return "Plasma Assiastance";
        }

        if (id === "oxycon") {
            return "Oxygen Concentrators";
        }

        if (id === 'dashboard' || !id) {
            return "Dashboard";
        }

        return "404 not found: " + id;
    }

    let RenderData = () => {
        return <DataTable lan={lan} id={id} loading={loading} setLoading={setLoading}></DataTable>
    }

    // console.log("loading : ", loading);
    return <div>
        <Dashboard lan={lan} setLoading={setLoading} onClick={exScroll}></Dashboard>
        <h1 ref={myRef} className="ResourcesHeader">{language[id || "dashboard"][lan] + " : "}</h1>
        {RenderData()};
    </div>
}

export default Resources;