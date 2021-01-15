import React from 'react';
import Navbar from './topContainer/Navbar';
import Content from './topContainer/Content';
import Team from './bottomContainer/team';
import Definition from './middleContainer/middle1';
import Work from './middleContainer/middle3';
import Footer from './bottomContainer/footerTemp';


const App = () => {
    return (
        <div>
            <Navbar />
            <Content />
            <Definition />
            <Work />
            <Footer />
        </div>
        )
}

export default App;