import React, { Component } from 'react'
import Card from './Card'

class GitHubCard extends Component {
    state = {
        users: []
    }

    componentDidMount(){
        const url = 'https://api.github.com/users';
        fetch(url)
        .then((res) => {
           return res.json();  
        })
        .then( (data) => {
            this.setState({
                users: data
            })
            
        });
    }
    render(){
        
        return (
        
            <div >
               { this.state.users.map( (user) => <Card 
               key={user.id}
               avatar_url={user.avatar_url}
               name={user.login}
               />) } 

            </div>
        );
    }
    
}

export default GitHubCard;
