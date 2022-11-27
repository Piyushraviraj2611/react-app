import React from 'react';
const navtag=(props)=>{

 

    return(
        <div>
        <nav class={ `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Taxtes</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./About.js">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others Apps
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="https://piyushraviraj2611.github.io/calculator/">Calculator</a></li>
            <li><a className="dropdown-item" href="./">Piano Play</a></li>
           
          </ul>
        </li>
        
      </ul>
<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"onClick={props.changemode} />
  <label className="form-check-label mx-1" htmlfor="flexSwitchCheckDefault">Dark Mode</label>
</div>
     
    </div>
  </div>
</nav>
        </div>
    )
}
export default navtag;
