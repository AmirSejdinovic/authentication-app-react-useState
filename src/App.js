import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import aut from './aut.png';
//Importing react and method useState
import React, {useState} from 'react';
import swal from 'sweetalert';

function App() {
  //Creating varaible and method inside useState react hook
  const [user,setUser] = useState('');
  const [pass,setPass] = useState('');
  //Creating custom function for form sumbition. 
  const handleValidate=(e)=>{
    //method for preventihg the reload of page
    e.preventDefault();
      //Condition if is right email and password than show succes message
       if(user== 'react@gmail.com' && pass == 123456)
       swal("Succesful Login","Wllcome ReactJs","success")
       //If is not sucess than show alert of eror
       else
       swal("Wrong Credentials","Please try again","error")
  }
  return (
    <div className="App-header">
     <h1>Authentication Portal</h1>
      <div className="row">
        <div className="col-md-6">
          <img className="float-start" src={aut} width="100%"/>
        </div>
        <div className="col-md-6 my-auto bg-dark p-5 rounded">
        <form onSubmit={handleValidate}>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control"  placeholder="Enter email"
    value={user} onChange={(e)=>setUser(e.target.value)}/>
   
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control"  placeholder="Password"
    value={pass} onChange={(e)=>setPass(e.target.value)}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

      <p>Email: react@gmail.com</p>
      <p>Password: 123456</p>
        </div>
      
      
      </div>
    </div>


  );
}

export default App;
