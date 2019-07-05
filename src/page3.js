import React from 'react';
import {Link} from "react-router-dom";


const Page3=()=>{
    return(<div>
  <h1>this is the third page </h1>
  <Link to="/page1" ><h1>Go to page 1</h1></Link>
  </div>);
  }
  export default Page3;