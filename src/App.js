import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {

  const [user, setUser] = useState(null);


  const url = 'https://randomuser.me/api/'

useEffect(()  =>{


    axios.get(url)
    .then(function (response) {
      // handle success
      setUser(response.data.results[0]);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    })
  
  
},[]
)





  return (

  <div >
    <pre> 

    {JSON.stringify(user,null,2)}
    </pre>
     </div>
  );
}

export default App;
