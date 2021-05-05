import { Table } from "antd";
import { useEffect, useState } from "react";
import fire from "../../scripts/fire";

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

let getData = async (id) => {
    let tableData = null;
    if (id === "oxygen") {
        tableData = await fire.getOxygen();
    }

    if (id === "hospitalbeds") {
        tableData = await fire.getBeds();
    }

    // if (id === "plasmaassiastance") {
    //     tableData = await fire.getPlasma();
    // }

    return tableData;
}


let renderTable = (id, tableData) => {
    if (tableData === null) {
        return <div>No Table</div>
    }

    if (id === "oxygen") {
        return <Table key={0} dataSource={tableData} columns={oxygenSchema}></Table>
    }

    if (id === "hospitalbeds") {
        return <Table key={0} dataSource={tableData} columns={bedSchema}></Table>
    }

    // if (id === "plasmaassiastance") {
    //     return <Table dataSource={tableData} columns={oxygenSchema}></Table>
    // }
}

let DataTable = (props) => {
    console.log("props.id", props.id);
    let [tableData, setTableData] = useState();

    useEffect(() => {
        let fetchData = async () => {
            console.log("USe Effect ran");
            setTableData(await getData(props.id));
        }
        fetchData();
    }, [props.id])


    return <div className="container-flex">
        {/* <Table dataSource={dataSource} columns={columns}></Table> */}
        {renderTable(props.id, tableData)}
    </div>
}

export default DataTable;