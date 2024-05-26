import React,{UseState,UseEffect} from 'react'
import UserDetails from './userDetails';

const profile = ({users}) => {
    const {name,bio, dateOfBirth} = UseState('');
    UseEffect(()=>{
      
    }
    
    )
    
    
  return (
    <div className="user-profie">
        <p>{name}</p>
        <p>{bio}</p>
        <p>{dateOfBirth}</p>
    </div>
  )
}

export default user-profile;