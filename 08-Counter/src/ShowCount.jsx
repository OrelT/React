import { Component } from "react/cjs/react.production.min";


class ShowCount extends Component {
    render() {
        const {count} =this.props; // this.props récupére les arguments recus dans le component.Ici on vient le déstructurer 
        return (
            <h1 className="p-2 m-4 text-4xl font-bold text-blue-600 text-center">{count}</h1>
        )
    }
}

export default ShowCount;