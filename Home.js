import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.jpg';
const  Home=()=> {
    return (
        <>
           <div className='container'>
           <div id="demo" class="carousel slide" data-ride="carousel">

<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={one} alt="Los Angeles" width="100%" height="400"/>
  </div>
  <div class="carousel-item">
    <img src={two} alt="Chicago" width="100%" height="400"/>
  </div>
  <div class="carousel-item">
    <img src={three} alt="New York" width="100%" height="400"/>
  </div>
</div>

<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>
</div>

</div>
<br></br>
<div class="container">
  <div class="card-deck">
    <div class="card bg-white">
      <div class="card-body text-center">
        <p class="card-text">
        ava is a set of computer software and specifications developed by 
        James Gosling at Sun Microsystems, which was later acquired by the Oracle
         Corporation, that provides a system for developing application software 
         and deploying it in a cross-platform computing environment
        </p>
       
      </div>
    </div>
    <div class="card bg-white">
      <div class="card-body text-center">
        <p class="card-text">PHP is a general-purpose scripting language geared 
        towards web development. It was originally created by Danish-Canadian 
        programmer Rasmus Lerdorf in 1994. The PHP reference implementation is 
        now produced by The PHP Group</p>
      </div>
    </div>
    <div class="card bg-white">
      <div class="card-body text-center">
        <p class="card-text">

        MEAN is a free and open-source JavaScript software stack for building 
        dynamic web sites and web applications. Because all components of the MEAN 
        stack support programs that are written in JavaScript, MEAN applications can 
        be written in one language for both server-side and client-side execution 
        environments
        </p>
      </div>
    </div>
    <div class="card bgwhite">
      <div class="card-body text-center">
        <p class="card-text">
        MEAN is a free and open-source JavaScript software stack for 
        building dynamic web sites and web applications. Because all components 
        of the MEAN stack support programs that are written in JavaScript, MEAN 
        applications can be written in one language for both server-side and 
        client-side execution environments.
        </p>
      </div>
    </div>  
  </div>
</div>


<div class="container">
  <h2>Image Gallery</h2>
  <p>The .thumbnail class can be used to display an image gallery.</p>
  <p>The .caption class adds proper padding and a dark grey color to text inside thumbnails.</p>
  <p>Click on the images to enlarge them.</p>
  <div class="row">
    <div class="col-md-4">
      <div class="thumbnail">
        <a href="/w3images/lights.jpg" target="_blank">
          <img src="/w3images/lights.jpg" alt="Lights"/>
          <div class="caption">
            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail">
        <a href="/w3images/nature.jpg" target="_blank">
          <img src="/w3images/nature.jpg" alt="Nature"/>
          <div class="caption">
            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail">
        <a href="/w3images/fjords.jpg" target="_blank">
          <img src="/w3images/fjords.jpg" alt="Fjords"/>
          <div class="caption">
            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Home
