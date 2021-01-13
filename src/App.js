import React from 'react';
import Navbar from './topContainer/Navbar';
import Content from './topContainer/Content';
import Team from './bottomContainer/team';


const App = () => {
    return (
        <div>
            <Navbar />
            <Content />
            <Team />
        </div>
        )
}

export default App;