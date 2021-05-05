import './currentData.css';
import React, { useEffect, useState } from "react";
import fire from '../../scripts/fire';

let CurrentData = () => {
    let [currData, setCurrData] = useState({});

    useEffect(() => {
        let fetchData = async () => {
            setCurrData(await fire.getData());
        }
        fetchData();
    }, []);

    // console.log(currData);
    return <div className="CurrentDataCont">
        <h1 className="CurrentDataHeader">Madhya Pradesh Stats:</h1>
        <div className="CurrentDataStat">
            <div className="CurrentDataMain">
                <h4>Total Cases</h4>
                <h5>{currData.activecases || "NULL"}</h5>
            </div>
            <div className="CurrentDataMain">
                <h4>New Cases</h4>
                <h5>{currData.newcases || "NULL"}</h5>
            </div>
            <div className="CurrentDataMain">
                <h4>Recovered</h4>
                <h5>{currData.recovered || "NULL"}</h5>
            </div>
        </div>
    </div>

}

export default CurrentData;