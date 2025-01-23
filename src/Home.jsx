import React from 'react';

    
function homePage() {
    return (
    <div>
 <img src="GREBE.jpg" height="320" width="280" alt="GrebeLogo" />
 
 <form>
     <input type="text" id='Name' />
     <label for="Name">Name</label>
     <input type='passord' id="password" placeholder='****'/>
     <label for='password'>Password</label>
 </form>
 </div>

);
}
export default homePage;