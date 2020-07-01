import React, { useState } from 'react'
import TodoItem from './TodoItem'
import GitHubCard from './GitHubCard'
import FormInput from './FormInput'

function Scrimba(props) {
    const [ isLogIn, setisLogIn ] = useState(false);
    let style = {
        marginTop: '15px',
        display: 'flex'
    }

    let login = 'OUT';
        if (isLogIn) {
            login = 'IN';
        }

    let handleClick = () => {
        setisLogIn( !isLogIn )
    }
    
    return (
        <div style={ style }>
            
            <div>
                <FormInput />
                <h2 onClick={handleClick}>You are log {login}</h2>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
            
            <div style={{ margin: '10px' }}>
                <GitHubCard />
            </div>
            
            
        </div>
    )
}

export default Scrimba;
