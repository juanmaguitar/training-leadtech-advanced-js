import React, {Component} from 'react';
import Counter from '../Counter';
import './index.css'

class List extends Component{

    render(){
        const {users} = this.props;
        return (
            <div className="List">
                <h1>List</h1>
                <Counter />
                <ul>
                    {users.map(({name}, index) => (
                        <li key={index} className="List-menu-list">{name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;
