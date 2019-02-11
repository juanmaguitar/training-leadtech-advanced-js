import React from 'react'
import './index.css'

// const Header = props => {
const Header = ({title, menu}) => {

    const subtitle = `Subtitle`;

    return (
        <div className="Header">
            {/* <h1>{ props.title }</h1> */}
            <h1>{ title }</h1>
            <h2>{ subtitle }</h2>
            <ul className="menu">
                {
                    menu.map((item, index) => (
                        <li key={ index } className="list">{ item }</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Header