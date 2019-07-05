import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return(<div>
        <Link to="/page1" ><p>Go to page 1</p></Link>
        <Link to="/page2" ><p>Go to page 2</p></Link>
        <Link to="/page3" ><p>Go to page 3</p></Link>
        </div>
    )
}

export default Home