import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Signup() {
 const navigate = useNavigate();
  const [user,setUser]=useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""

  });
  let name,value;
  const handleInputs=(e)=>
  {
console.log(e);
name=e.target.name;
value=e.target.value;
setUser({...user,[name]:value});
  }
  const PostData=async(e)=>
  {
  e.preventDefault();
  const {name,email,phone,work,password,cpassword}=user;
  const res=await fetch("/register",{
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    
  });
 const data=await res.json();
 if(data.status === 422 || !data){

  window.alert("Invalid Registration")
  console.log("Invalid Registration");
}else{

  window.alert("Registration Successful")
  console.log("Registration Successful");
  //history.push("/login");
  navigate('/login');
}
  }
    return (
        <>
      <section className="vh-50 gradient-custom">
  <div className="container py-5 h-50">
    <div className="row justify-content-center align-items-center h-50">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration">
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form method='post'>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="firstName" className="form-control form-control-lg" autoComplete='off'
                    value={user.name}
                    onChange={handleInputs}
                    placeholder='Enter data' name="name"
                    />
                    <label className="form-label" for="firstName">User Name</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="email" id="lastName" className="form-control form-control-lg" autoComplete='off'
                    value={user.email}
                    onChange={handleInputs}
                    placeholder='Enter data' name="email"
                    />
                    <label className="form-label" for="lastName">Enter Email</label>
                  </div>

                </div>
              </div>

              

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="number" id="emailAddress" className="form-control form-control-lg" autoComplete='off'
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder='Enter data' name="phone"
                    />
                    <label className="form-label" for="emailAddress">Enter Phone</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="text" id="phoneNumber" className="form-control form-control-lg" autoComplete='off'
                    value={user.work}
                    onChange={handleInputs}
                    placeholder='Enter data' name="work"
                    />
                    <label className="form-label" for="phoneNumber">Enter Work</label>
                  </div>

                </div>
              </div>
              <div className="row">
              <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="password" id="password" className="form-control form-control-lg" autoComplete='off'
                    value={user.password}
                    onChange={handleInputs}
                    placeholder='Enter password' name="password"
                    />
                    <label className="form-label" for="password">Enter Password</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

<div className="form-outline">
  <input type="password" id="cpassword" className="form-control form-control-lg" autoComplete='off'
  value={user.cpassword}
  onChange={handleInputs}
  placeholder='Enter confirm password' name="cpassword"
  />
  <label className="form-label" for="cpassword">Enter Confirm Password</label>
</div>

</div>
</div>

              <div className="mt-2 pt-2">
                <input className="btn btn-primary btn-lg" type="submit" value="Submit" onClick={PostData}/>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default Signup
