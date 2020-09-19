<div className="header">
  				<div className="header-logo">
  					<a href="#default" className="logo"><img className="img" src="./logo1.jpg" alt="logo" /></a>
  				</div>
  				<div className="header-right">
  					<div className="column1">
  						<a className="active" href="#login">Sign Up/IN</a>
  						<a className="active" href="#login">Donate Now</a>
  					</div>
    				<div className="column2">
    					<div className="dropdown">
    						<button onClick=""className="dropbtn"><i className="fa fa-bars"></i>
    						</button>
    						<div className="dropdown-content">
    							<a href="#">How it's Works?</a>
    							<a href="#">FAQs?</a>
    							<a href="#"> Where do your donations go?</a>
    							<a className="active" href="#login">Sign Up/IN</a>
    							<a className="active" href="#login">Donate Now</a>
    						</div>
    					</div>
    				</div>
    			</div>
			</div>




body { 
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  overflow: hidden;
  background-color: #ffffff;
  padding: 10px 10px;
  width: 100%;
}

.header .header-logo,
.header .header-center,
.header .header-right{
  display: inline-block;
  vertical-align: top;
}

.header .header-logo
{
  width: 30%;
  position: relative;
}


.header-right a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 20px; 
  line-height: 25px;
  border-radius: 4px;
}

.header-logo{
  display: 40%;
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 20px; 
  line-height: 25px;
  border-radius: 4px;

}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
  margin-left: 50px;
}

.header .header-right{
  width: 60%;
  position: relative;
  display: flex;
  align-items: center;
}

 .column1 {
  float: left;
  width: 70%;
  padding-left: 5%;
}

.column2 {
  float: right;
  width: 30%;
  padding-left: 5%;
}

.header-right a:hover {
  background-color: #ddd;
  color: black;
}

.header-right .column1 a.active {
  background-color: #FC4C02;
  margin-right: 10px;
  margin-left: 10px;
  color: white;
  width: 150px;
  display: block;
}

.header-right a {
    float: right;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 20px;
    line-height: 25px;
    border-radius: 4px;
}

.header .header-right {
  float: right;
}




.img
{
  float: left;
  width: 60px;
  height: 60px;
}

.dropdown{
}

.dropdown .dropbtn{
  font-size: 12px;
  float: right;
  border:none;
  outline: none;
  color: white;
  padding: 0px 5px;
  font-family: inherit;
  margin: 0;
}

.dropdown:hover .dropbtn{
  background-color: orange;
}

.dropdown-content{
  display: none;
  position: absolute;
  background-color: lightgrey;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 0;
}

.dropdown-content a{
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;

}

dropdown-content a:hover{
  background-color: #999999;

}

.dropdown:hover .dropdown-content{
  display: block;
}



@media (max-width: 600px) {

  .header .header-left,
  .header .header-right{
    display: block;
    width: 50%;
    margin-bottom: 40px;
    text-align: center;

  }

  .header .header-right a.active {
  background-color: orange;
  margin-right: 50px;
  color: white;
  width: 40px;
  font-size: 14px;
  display: block;
}


}


<script>
          function myFunction() {

          document.getElementById("myDropdown").classList.toggle("show");
          }

        window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
      }
    }
    }
</script>




import React , { Component } from 'react'
import './home.css'
import Header from './../../header'
import Footer from './../../footer'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


class Home extends Component{

    state = {
    open: true,
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };


  render(){
    const { open } = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.onCloseModal} center>
                <Header />
            </Modal>


        <div className="banner">
          <div className="banner-text">
            <h1>Connecting Lives to Cure Aliments</h1>
            <br/><br/>
            <h3>Recovered from COVID?</h3>
            <br/>
            <h1>Share Your Journey</h1>
            <br/>
            <h1>Donate Plasma - Be the Change </h1>
          </div>
        </div>

        <div className="work">
            <h1 className="abc">How It Works?</h1>
            <p>Take these simple steps and become our partner</p>
            <div class="column">
              <div className="card">
                    <div className="cir"><div className="circle">01</div></div>
                    <div className="circle-text"><b>Come</b></div><br/>
                    <div className="card-text">
                      <p>Register yourself as a <b>Donor</b> or <b>Patient </b>by providing few key details.
                      </p>
                    </div>
                  </div>
            </div>
            <div class="column">
              <div className="card">
                    <div className="cir"><div className="circle">02</div></div>
                    <div className="circle-text"><b>Find</b></div><br/>
                    <div className="card-text">
                      <p>Share your geolocation to find nearest available plasma donor or be the change by donating plasma.
                      </p>
                    </div>
                  </div>
            </div>
            <div class="column">
              <div className="card">
                    <div className="cir"><div className="circle">03</div></div>
                    <div className="circle-text"><b>Connect</b></div><br/>
                    <div className="card-text">
                      <p>Get to know their experiences and reach out to plasma donors.
                      </p>
                    </div>
                  </div>
            </div>
        </div>
        <div className="column-button">
              <button onclick="" className="donor-button">Become Donor</button>
              <button className="patient-button">Patient</button>
            </div>
        <hr className="horizontal" />
        <br/>

        <div className="exp">
          <h1>Their COVID stories!</h1>
          <div className="exp-col">
            <div class="column">
                <div class="card">
                    <div className="card-img">
                      <img src="./../../logo1.jpg" alt=" " />
                    </div>
                    <div className="card-text">
                      <p>React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
                      </p>
                    </div>
                    <hr className="horizontal" />
                    <div className="detail">
                        <p className="detail-name"><b>Shubham</b></p>
                        <p className="detail-email">shinetooutshine@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div className="card-img">
                      <img src="./../../logo1.jpg" alt=" " />
                    </div>
                    <div className="card-text">
                      <p>React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
                      </p>
                    </div>
                    <hr className="horizontal" />
                    <div className="detail">
                        <p className="detail-name"><b>Shubham</b></p>
                        <p className="detail-email">shinetooutshine@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div className="card-img">
                      <img src="./../../logo1.jpg" alt=" " />
                    </div>
                    <div className="card-text">
                      <p>React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
                      </p>
                    </div>
                    <hr className="horizontal" />
                    <div className="detail">
                        <p className="detail-name"><b>Shubham</b></p>
                        <p className="detail-email">shinetooutshine@gmail.com</p>
                    </div>
                </div>
            </div>
          </div>

          
          </div>


        <Footer />
      </div>


      );
  }
}

export default Home