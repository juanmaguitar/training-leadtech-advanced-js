import React, {Component} from 'react';
import { getUsers } from '../../services';

import './index.css';

import Counter from '../Counter/'

class Main extends Component {
    state = {
        users: []
    }
    async componentDidMount() {
        const users = await getUsers()
        setTimeout( ()=> {
            console.log(`${ Date.now() } ... render 2` )        
            this.setState({ users })
            }, 2000
        )    
    }
    render () {
        console.log(`${ Date.now() } ... render 1`)

        return(
            <div className="main">
                <h3>Main</h3>
                <Counter />
                <ul>
                    {
                        this.state.users.map(({ name }, index) => 
                            <li key={ index } className="list">{ name }</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Main