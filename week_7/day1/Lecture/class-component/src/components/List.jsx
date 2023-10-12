import React, { Component } from 'react';
    
class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: ['Hello', 'Hi', 'Hola', 'Sup']
        }
        console.log(this.state.list);
    }
    render() {
        return (<div>
            {
                this.state.list.map((item, idx) => {
                    <p key={idx}>{item}</p>
                })
            }
            <h1>Breaking???</h1>
            <p>{this.state.list}</p>
        </div>
        )
    }
}
    
export default List;