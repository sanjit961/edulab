/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState} from 'react';
import { useContext } from 'react';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";

const Login=()=> {

   // eslint-disable-next-line no-unused-vars
   const {state,dispatch} = useContext(UserContext);
  //const history = useHistory();
  const navigate = useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const loginUser=async(e)=>
  {
    e.preventDefault();
    const res=await fetch("/signin",{
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          email,password
        })

  });
  const data=res.json();
  if(data.status ===4000 || !data)
  {
    window.alert("invalid password or email")
  } 
  else
  { 
    dispatch({type:"USER",payload:true});
    window.alert("login successfully");
     navigate('/');
  }
}
    return (
        <>
        <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid"
          alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form method='POST' className='register-form'>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <h1 className="lead fw-normal mb-0 me-3"><b>Sign in with</b></h1>
         
          </div>

      
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" name="email"
              value={email} onChange={(e)=>setEmail(e.target.value)}
              />
            <label className="form-label" for="form3Example3">Email address</label>
          </div>

         
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password"name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <label className="form-label" for="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
        
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg" onClick={loginUser}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                className="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>
        </>
    )
}

export default Login
