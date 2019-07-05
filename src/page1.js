import React from 'react';
import {Link} from "react-router-dom";



const Page1=()=>{
    return(<div>
  <h1>this is the first page </h1>
  <Link to="/page2" ><h1>Go to page 2</h1></Link>
  </div>);
  }
  export default Page1;