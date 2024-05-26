import React from 'react';
import userProfile from"./User-Profile";

const userProfile = ({users}) => {
  
  return (
    <>
    {users.map((user)=>{
     <userProfile user={user}/>
    }
 )}
 </>



  )
  
}

export default userProfiles;