import React from 'react';
import userProfile from './user-Profile';
import userDetails from './components/userDetails';




const users=[
  {name:'Emeka Eze',
    bio:'Emeka Eze is a renonwed content creator',
    dateOfBirth:'1980',
  },

  {
    name:'Gift Udeh',
    bio:'she is a Frontend developer and from Abia state',
    dateOfBirth:'1997',
  },

]
const App =()=>{
  return(
    <div className='App'>
      <h1>User-profile</h1>
      <p>userDetails ={users}</p>
      
    </div>
  )
}


export default App







