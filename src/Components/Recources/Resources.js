import React, { useRef } from "react";
import { useParams } from "react-router";
import Dashboard from "../Dashboard/Dashboard";
import DataTable from "../DataTable/DataTable";
import "./Resources.css";
// import fire from "../../scripts/fire";

let Resources = () => {
    // let match = useRouteMatch();
    const myRef = useRef(null);


    const exScroll = () => myRef.current.scrollIntoView();

    let { id } = useParams();

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
        return <DataTable id={id} ></DataTable>
    }


    return <div>
        <Dashboard onClick={exScroll}></Dashboard>
        <h1 ref={myRef} className="ResourcesHeader">{headingCalc(id) + " : "}</h1>
        {RenderData()};
    </div>
}

export default Resources;