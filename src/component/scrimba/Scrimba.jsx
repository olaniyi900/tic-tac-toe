import React from 'react'

function Scrimba(props) {
    let {name} = props
    let style = {
        border: '1px solid black',
        margin: '1rem',
        borderRadius: '1rem',
        padding: '1rem'
    }
    return (
        <div style={style}>
            <h1>My name is { name }</h1>
            <p>I am { name } I love to code</p>
            <ul>
                <li>Elf tower in France </li>
                <li>Germany</li>
                <li>Dubai</li>
            </ul>
        </div>
    )
}

export default Scrimba;
