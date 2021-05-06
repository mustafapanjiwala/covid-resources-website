import { Table } from "antd";
import { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import fire from "../../scripts/fire";
import DashMain from "../DashMain/DashMain";

let oxygenSchema = [
    {
        title: 'Oxygen Supplier',
        dataIndex: 'oxygendsupplier',
        key: 'oxygendsupplier',
    },
    {
        title: 'Process to get oxygen',
        dataIndex: 'oxygenprocess',
        key: 'oxygenprocess',
    },
    {
        title: 'Contact',
        dataIndex: 'oxygendcontact',
        key: 'oxygendcontact',
    },
    {
        title: 'Oxygen Address',
        dataIndex: 'oxygenaddress',
        key: 'oxygenaddress',
    },
    {
        title: 'Oxygen Price',
        dataIndex: 'oxygenprice',
        key: 'oxygenprice',
    },
    {
        title: 'Oxygen Description',
        dataIndex: 'oxygendescription',
        key: 'oxygendescription',
    },

];

let bedSchema = [
    {
        title: 'Hospital Name',
        dataIndex: 'hospitalname',
        key: 'hospitalname',
    },
    {
        title: 'Hospital Worker Name',
        dataIndex: 'workername',
        key: 'workername',
    },
    {
        title: 'Contact',
        dataIndex: 'contactnumber',
        key: 'contactnumber',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
]


let tiffinSchema = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Home Delivery',
        dataIndex: 'homedelivery',
        key: 'homedelivery',
    },
    {
        title: 'Contact',
        dataIndex: 'contact',
        key: 'contact',
    },
    {
        title: 'Area',
        dataIndex: 'area',
        key: 'area',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
]

let getData = async (id) => {
    let tableData = null;
    if (id === "oxygen") {
        tableData = await fire.getOxygen();
    }

    if (id === "hospitalbeds") {
        tableData = await fire.getBeds();
    }

    if (id === 'tiffinserv') {
        tableData = await fire.getTiffin();
    }

    // if (id === "plasmaassiastance") {
    //     tableData = await fire.getPlasma();
    // }

    return tableData;
}




let DataTable = (props) => {
    console.log("props.id", props.id);
    let [tableData, setTableData] = useState();
    // let [load, setLoad] = useState(1);
    let setLoading = props.setLoading;

    let renderTable = (id, tableData) => {
        if (props.loading === 1) {
            return <div className="DataLoading">
                <Spinner animation="border"></Spinner>
                Loading
                </div>
        }

        if (id === "dashboard" || !id) {
            return <DashMain></DashMain>
        }

        if (tableData === null) {
            return <Alert variant="danger">No data avilable</Alert>
        }

        if (id === "oxygen") {
            return <Table key={0} dataSource={tableData} columns={oxygenSchema}></Table>
        }

        if (id === "hospitalbeds") {
            return <Table key={0} dataSource={tableData} columns={bedSchema}></Table>
        }

        if (id === "tiffinserv") {
            return <Table key={0} dataSource={tableData} columns={tiffinSchema}></Table>
        }

        // if (id === "plasmaassiastance") {
        //     return <Table dataSource={tableData} columns={oxygenSchema}></Table>
        // }
    }

    useEffect(() => {

        let fetchData = async () => {
            console.log("USe Effect ran");
            setTableData(await getData(props.id));
            setLoading(0);
        }
        fetchData();
    }, [props.id, props.loading])

    console.log("rerender : load : ", props.loading);
    return <div className="container-flex" id="table">
        {/* <Table dataSource={dataSource} columns={columns}></Table> */}
        {renderTable(props.id, tableData)}
    </div>
}

export default DataTable;