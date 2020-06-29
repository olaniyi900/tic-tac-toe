import React from 'react'

const Card = (props) => {
    const {name, avatar_url} = props
    return (
        <div>
            <div className="card" style={{width: '18rem', margin:'0.5rem'}}>
                <img src={avatar_url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3>{name}</h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
