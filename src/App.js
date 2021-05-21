import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import aut from './aut.png';

function App() {
  return (
    <div className="App-header">
     <h1>Authentication Portal</h1>
      <div className="row">
        <div className="col-md-6">
          <img className="float-start" src={aut} width="100%"/>
        </div>
        <div className="col-md-6 my-auto bg-dark p-5 rounded">
        <form>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control"  placeholder="Enter email"/>
   
  </div>
  <div class="form-group">
    <label >Password</label>
    <input type="password" className="form-control"  placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>

      </div>
    </div>


  );
}

export default App;
