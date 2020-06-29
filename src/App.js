import React from 'react';
import Game from './component/Game'
import Scrimba from './component/scrimba/Scrimba';
import Navbar from './component/scrimba/Navbar';


const App = () => {
    return (
        <div>
            <Navbar />
             <Game />
             <Scrimba name='sule'/>
        </div>
   
    );
}

export default App;