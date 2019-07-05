import React from 'react';
import {Link} from "react-router-dom";


const Page2=()=>{
    return(<div>
  <h1>this is the second page </h1>
  <Link to="/page3" ><h1>Go to page 3</h1></Link>
  </div>);
  }
  export default Page2;