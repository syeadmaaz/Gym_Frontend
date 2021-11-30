import React from 'react';
import './Style.css';
import { FaMobile, FaEnvelope, FaLocationArrow } from "react-icons/fa";

export default function Gym() {
    return (
        <div>
            <header>
            <nav>
                <div class="logo">
                    <span id="blue">GYM</span>POINT
                </div>
                <div class="menu">
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>

                <div class="icon">
                    <img src="logo.png" />
                </div>
            </nav>


            <div class="container">
                <div class="left">
                    <img src="1.jpg" height="650px" />
                </div>
                <div class="right">
                    <p>STEP UP YOUR</p>
                    <h1><span id="blue">FITNESS</span> WITH US</h1>
                    <p>Build Your Body And Fitness With Professional Touch</p>
                    <br/>
                    <button class="btn"><span class="btnstyle"><strong>Join Us</strong></span></button>
                </div>
            </div>
        </header>
            <section id="about">
                <div class="about-row">
                    <div class="about-left-col">
                        <h1>About<span id="blue"> GYM</span></h1>
                        <p id="p-title">Take care of your body. It's the only place you have to live.</p>
                        <p>
                            At GYM POINT, our mission is to provide you with the ultimate fitness experience, one that focuses on your specific fitness needs, helps you achieve the results you are after and invigorates your soul. We guarantee the highest quality equipment and training programs available, an expert staff, special amenities that are often not found in other health clubs, attentive service and truly sophisticated surroundings.
                        </p>
                    </div>
                    <div class="about-right-col">
                        <img src="10.jpg"/>
                    </div>
                </div>


            </section><section id="signup">
                <div class="signup-row">
                    <div class="signup-left-col">
                        <img src="img2.png"/>
                    </div>
                    <div class="signup-right-col">
                        <h1> BEING <span id="blue">BODY</span></h1>
                        <h2>BUILDER</h2>

                    </div>
                </div>
            </section>
            
            <section id="services">
                <div class="services-info">
                    <h1>Our <span id="blue">Services</span></h1>
                    <p>What we Provide</p>
                </div>

                <div class="services-row">
                    <div class="services-box">
                        <h1>Cardio</h1>
                    <br/>
                    <img src="treadmill.png" width="100px" height="100px"/>
                </div>

                <div class="services-box">
                    <h1>Flexing Muscle</h1>
                <br/>
                <img src="strongman.png" width="100px" height="100px"/>
                </div>

                <div class="services-box">
                    <h1>Weight - Lifting</h1>
                <br/>
                <img src="weightlifting.png" width="100px" height="100px"/>
                </div>



                <div class="services-box">
                    <h1>Dumbbells</h1>
                <br/>
                <img src="dumble.png" width="100px" height="100px"/>
                </div>

                <div class="services-box">
                    <h1>Bench Press</h1>
                <br/>
                <img src="bench.png" width="100px" height="100px"/>
                </div>

                <div class="services-box">
                    <h1>Abs Tower</h1>
                <br/>
                <img src="abs.jpg" width="100px" height="100px"/>
                </div>

            </div>
</section>


<section id="contact">
		<div class="services-info">
			<h1>Get in<span id="blue">Touch</span></h1>
	<p> We are Available</p>
</div>

<div class="contact-row">
	<div class="contact-left-col">
		<div class="form">
			<input type="text" name="" placeholder="E-mail"/>
			<input type="text" name="" placeholder="Subject"/>
            <br/>
			<textarea rows="10" cols="40" placeholder="Message"></textarea>
			<br/> <button class="c_btn">Send</button>
		</div>
	</div>
		<div class="contact-right-col">
			<h1><FaEnvelope/> E-mail</h1> <p>contact@gympoint.com</p><br/>
 			<h1><FaMobile/> Mobile</h1><p>    8741253941, 8741253942</p>
 			<br/>
 			<h1><FaLocationArrow/> Address</h1>
 			 <p>    Gym Point<br/>
 			 	    Boring Road, Patna
 			 </p>
		</div>
</div>
</section>


<section id="footer">
	<h1>GYM<span id="blue">POINT</span></h1>
	
	<p>&copy; 2021 GYM POINT</p>
	<img src="logo.png"/>

</section>

</div>
    )
}
