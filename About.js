/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import techlive from '../images/techlive.jpg';
import {NavLink} from 'react-router-dom';

function About() {
     const navigate=useNavigate();
     const[userData,setUserData]=useState({});
    const callAboutPage=async()=>
    {
        try
        {
        const res=await fetch('/about',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        });
        const data=await res.json();
        console.log(data);
        setUserData(data);
        if(!res.status===200)
        {
            const error=new Error(res.error);
            throw error;
        }
        }
        catch(err)
        {
        console.log(err);
        navigate('/about');
        }
    }

    useEffect(() => {
      callAboutPage();
        
    }, []);
    return (
        <>
        <div className='container emp-profile'>
            <form method="GET">
           <div className="row">
               <div className='col-md-4'>
                   <div className='profile-img'>
                       <img src={techlive} alt="Techlive"/>
                   </div>
               </div>
            <div className="col-md-6">
                <div className='profile-head'>
                    <h5>{userData.name}</h5>
                    <h6>Course Content</h6>
                    <p className='profile-rating mt-3 mb-5'>Full-Stack<span>by Deepak Gupta</span></p>
                   
                    <ul className="nav nav-tabs" role="tablist">
                     <li className="nav-item">
                    <NavLink className="nav-link active" id ="home-tab" data-toggle="tab" to="#home" role="tab">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" id ="profile-tab" data-toggle="tab" to="#profile" role="tab">TimeLine</NavLink>
                    </li>
                    </ul>
                    
                </div>
            </div>
            <div className='col-md-2'>
          <input type='submit' className="profile-edit-btn" name="btnAddMore" value="Edit Profile"></input>
                </div>
           </div>
           <div className="row">
               <div className='col-md-4'>
            <div className='profile-work'>
            <p>work link</p>
            <NavLink to='#' target="_blank">Details</NavLink>
            </div>
               </div>

               <div className='col-md-8 pl-5 about-info'>
               <div className='tab-content profile-tab' id ="myTabContent">
                   <div className='tab-pane fade show active' id="home" role='tabpanel' aria-labelledby='home-tab'>
             <div className='row'>
                 <div className='col-md-6'>
                     <label htmlFor='User Id'>User Id</label>                 
                     </div>
                     <div className='col-md-6'>
                     <p>123456789</p>                 
                     </div>

             </div>
             <div className='row mt-3'>
                 <div className='col-md-6'>
                     <label htmlFor='User Name'>Name</label>                 
                     </div>
                     <div className='col-md-6'>
                     <p>Deepak Gupta</p>                 
                     </div>

             </div>

                   </div>
                   <div className='tab-pane fade show active' id="profile" role='tabpanel' aria-labelledby='profile-tab'>
                   <div className='row mt-3'>
                 <div className='col-md-6'>
                     <label htmlFor='User Name'>Experience</label>                 
                     </div>
                     <div className='col-md-6'>
                     <p>Expert</p>                 
                     </div>

             </div>
             <div className='row mt-3'>
                 <div className='col-md-6'>
                     <label >Hourly Rate</label>                 
                     </div>
                     <div className='col-md-6'>
                     <p>$10</p>                 
                     </div>

             </div>
                       </div>
                   </div>
               </div>

               </div>

           

            </form>
        </div>
        </>
    )
}

export default About
