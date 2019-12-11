import React from 'react';
import './App.css';

const DATA_TREE = [
    {name: "vegetables", children: [{name: "cucumber"}, { name: "lettuce", children: [{name: "green"}, {name: "purple"}, {name: "arabic"}]}, {name: "tomato"}]},
    {name: "meat", children: [{name: "cow" }, {name: "chicken" }, {name: "donkey", children: [{name: "male"}, {name: "female", children: [{name: "fat" }, {name: "thin", children: [{name: "tall" }, {name: "short" }] }]}]}]},
    {name: "fish", children: [{name: "tuna" }, {name: "salmon" }, {name: "bass" }]}
];


function List({data}) {
    return (
        <ul>
            {data.map(item => {return (
                <li>
                    <span>{item.name}</span>
                    {item.children && <List data={item.children} /> }
                </li>
            )})}
        </ul>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <div className="App" style={{'textAlign': 'left'}}>
                <List data={DATA_TREE} />
            </div>
        );
    }
}

export default App;
