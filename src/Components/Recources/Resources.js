import React from "react";
import { useParams } from "react-router";
import Dashboard from "../Dashboard/Dashboard";
import DataTable from "../DataTable/DataTable";
// import fire from "../../scripts/fire";

let Resources = () => {
    // let match = useRouteMatch();
    // const ref = useRef(null);

    // const exScroll = () => ref.current.scrollIntoView();

    let { id } = useParams();

    let RenderData = () => {
        return <DataTable id={id} ></DataTable>
    }


    return <div>
        <Dashboard ></Dashboard>
        <h1>{id}</h1>
        {RenderData()};
    </div>
}

export default Resources;