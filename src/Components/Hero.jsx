import React from 'react'

const Hero = (props) => {


  /*const status =false;
  switch(status) {
    case true:
      return <button>Login</button>
      
       case false:
        return <button>Logout</button>
  
    default:
      return null;
  }*/
  return (
    <div>
       <ul>
        <li> Name: {props.item ['name']}</li>
        <li>Age : {props.item ['age']}</li>
        <li>City: {props.item['city']}</li>

       </ul>

       <button onClick={props.childBtnClick}>Submit</button>
        
    </div>
  )
}

export default Hero