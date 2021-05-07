import './currentData.css';
import React, { useEffect, useState } from "react";
import fire from '../../scripts/fire';
import language from '../../assets/language';

let CurrentData = (props) => {
    let [currData, setCurrData] = useState({});
    let lan = props.lan;
    useEffect(() => {
        let fetchData = async () => {
            setCurrData(await fire.getData());
        }
        fetchData();
    }, []);

    // console.log(currData);
    return <div className="CurrentDataCont">
        <h1 className="CurrentDataHeader">{language.mpStat[lan]}</h1>
        <div className="CurrentDataStat">
            <div className="CurrentDataMain">
                <h4>{language.totalCases[lan]}</h4>
                <h5>{currData.activecases || "NULL"}</h5>
            </div>
            <div className="CurrentDataMain">
                <h4>{language.newCases[lan]}</h4>
                <h5>{currData.newcases || "NULL"}</h5>
            </div>
            <div className="CurrentDataMain">
                <h4>{language.recovered[lan]}</h4>
                <h5>{currData.recovered || "NULL"}</h5>
            </div>
        </div>
    </div>

}

export default CurrentData;