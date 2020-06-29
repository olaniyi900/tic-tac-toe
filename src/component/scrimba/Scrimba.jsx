import React from 'react'
import TodoItem from './TodoItem'
import GitHubCard from './GitHubCard'

function Scrimba(props) {
    let style = {
        marginTop: '15px'
    }
    return (
        <div style={ style }>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <GitHubCard />
            
        </div>
    )
}

export default Scrimba;
