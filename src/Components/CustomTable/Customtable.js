import "./Customtable.css";

let Customtable = (props) => {
    let makeSingleCard = (schema, data) => {
        let card = [];
        schema.forEach((scm) => {
            // console.log("Scheme", scm);
            // console.log(scm.key, data[scm.key]);
            card.push(<div className="CardField" key={scm.key}>
                <h6>{scm.title}  :  </h6>
                <p>&nbsp;{data[scm.key]}</p>
            </div>)
        })

        return card;
    }

    let genCards = () => {

        if (!props.dataSource || !props.columns) {
            return;
        }

        // console.log("tabledata", props.dataSource);
        // console.log("Schema", props.columns);
        let cards = [];

        props.dataSource.forEach((data) => {
            cards.push(<div className="DataCard" key={Math.random()}>
                {makeSingleCard(props.columns, data)}
            </div>)

        })

        return cards;
    }


    return <div className="CustomTable">
        {genCards()}
    </div>
}

export default Customtable;