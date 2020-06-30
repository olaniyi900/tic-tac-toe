import React from 'react';
import Game from './component/Game'
import Scrimba from './component/scrimba/Scrimba';
import Navbar from './component/scrimba/Navbar';


const App = () => {
    let style = {
        display: 'flex'
    }
    return (
        <div >
            <Navbar />
            <div style={style}>
                <Game />
                <Scrimba />
            </div>
             
        </div>
   
    );
}

export default App;