import { Button } from "react-bootstrap"
import fire from "../scripts/fire"
let Download = () => {
    // fire.downloadData();
    return <div>Download data
        <Button onClick={() => fire.downloadData()}>Download Data</Button>
    </div>
}

export default Download;