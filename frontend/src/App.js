import logo from './logo.svg';
import {Link,Route} from 'react-router-dom'
import './App.css';
import Register from './Screens/Register';
import LawyerRegister from './Screens/RegisterForLawyer';
import SignIn from './Screens/SignIn';
import LawyerSignIn from './Screens/LawyerSignIn';

function App() {
  return (
    <>
    <div class="header">
  <a href="#default" class="logo">Lawyer's Room</a>
  <div class="header-right">
    <Link class="active" to="#home">Home</Link>
    <Link to="#contact">Contact</Link>
    <Link to="/signin">Sign-In</Link>
    <Link to="/register">Register</Link>
    <Link href="#about">About</Link>
  </div>
</div>
<Route path='/register' component={Register} />
<Route path='/lawyerregister' component={LawyerRegister} />
<Route path='/signin' component={SignIn} />
<Route path='/lawyersignin' component={LawyerSignIn} />
<div class='footer'>
<footer>  
@Copyright JavaTpoint 2020- All Right Reserved.   
</footer> 
</div>
</>
 
  );
}

export default App;
