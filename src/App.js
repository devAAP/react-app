import logo from './logo.svg';
import React from 'react';
import './App.css';
import './styles.css';

function App() {

 
 return ( 
   <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-home">
  <a className="navbar-brand" href="#"><img src="./images/horizonlogo.png" alt="logo" className="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
              <a href=""><img src="./images/ghana-logo.jpg" alt="ghana-logo" className="flag" /></a>
              <a href=""><img src="./images/nigeria-logo.jpg" alt="nigeria" className="flag"/></a>
              <a href=""><img src="./images/Kenya.jpg" alt="kenya" className="flag"/></a>
          </ul>
      </div>
      <div className="nav-item">
          <a className="nav-link" href="#">ABOUT US</a>
      </div>
  </nav>

  <div className="container-fluid">
      <div className="row">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-content">
              <div className="carousel-item active carousel images">
                <img src="./images/kaleb-tapp-1deQbU6DhBg-unsplash.jpg" className="d-block w-100" alt="images"/>
              </div>
              <div className="carousel-item">
                <img src="./images/pascal-meier-b7ilvCZnRX0-unsplash.jpg" className="d-block w-100 " alt="images"/>
              </div>
              <div className="carousel-item">
                <img src="./images/dane-deaner-_-KLkj7on_c-unsplash.jpg" className="d-block w-100" alt="images"/>
              </div>
              <div className="carousel-item">
                  <img src="./images/benjamin-child-0sT9YhNgSEs-unsplash.jpg" className="d-block w-100" alt="images"/>
                </div>
          </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
      </div>
  </div>

  <div className="container" >
  <h3 className="text-center" style={{margin:'20px 0px'}}>PLANS</h3>
    <div className="row">
      
      <div className="div col-md-3">
      <img src="./images/kate-sade-2zZp12ChxhU-unsplash.jpg" className="img-thumbnail" alt="space"/>

          <h3>VIRTUAL OFFICE</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Reprehenderit repudiandae pariatur cupiditate et placeat at fugit, 
          quis itaque, vero saepe deserunt amet eos eaque aperiam. 
          In delectus inventore voluptate ab?
        </p>
      </div>
        
      <div className="div col-md-3">
      <img src="./images/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg" className="img-thumbnail" alt="space"/>

      <h3>CUSTOM OFFICE</h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Reprehenderit repudiandae pariatur cupiditate et placeat at fugit, 
      quis itaque, vero saepe deserunt amet eos eaque aperiam. 
      In delectus inventore voluptate ab?
    </p>
    
    </div>
    
      <div className="div col-md-3">
      <img src="./images/horizon-2b.jpg" className="img-thumbnail" alt="space"/>

      <h3>SERVICED ROOMS</h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Reprehenderit repudiandae pariatur cupiditate et placeat at fugit, 
      quis itaque, vero saepe deserunt amet eos eaque aperiam. 
      In delectus inventore voluptate ab?
    </p>
    
    </div>
  
      <div className="div col-md-3">
      <img src="./images/horizon-2c1.jpg" className="img-thumbnail" alt="space"/>

      <h3>MEETING ROOMS</h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Reprehenderit repudiandae pariatur cupiditate et placeat at fugit, 
      quis itaque, vero saepe deserunt amet eos eaque aperiam. 
      In delectus inventore voluptate ab?
    </p>
    
    </div>
      </div>
    </div>
    <div class="container">
    <div class="row">
              <div class="col-md-4 footer">
                  <h5 class="newguy">VISIT US IN KENYA</h5>
                  <h6 class="newguy1">Nairobi, Kenya</h6>
                  <p class="new">Belgravia Centre, 14 Riverside drive,Off Riverside Drive, Hanover Centre, 14 Riverside Drive,6th floor, Off Riverside Drive</p>
              </div>
              <div class="col-md-4 footer">
                <h5 class="newguy">VISIT US IN GHANA</h5>
                <h6 class="newguy1">Accra, Ghana</h6>
                <p class="new">One Airport Square, Airport City 8th floor</p>
            </div>
            <div class="col-md-4 footer">
                <h5 class="newguy">VISIT US IN NIGERIA</h5>
                <h6 class="newguy1">Lagos, Nigeria</h6>
                <p class="new">Sterling Bank Building</p>
            </div>
          </div>
    </div>
    </div>

 	);	  
}

export default App;
