import {React, useState, useEffect} from "react";


const Image = (props) => {
  
  return (
    <div>
      <img src={props.imageUrl}/>
    </div>
  )
}

export default Image;