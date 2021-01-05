import React from 'react';
import exporterindia from './exporterindia.png';
import handmadebritain from './handmadebritain.png';
import kashveedesign from './kashveedesign.png';
import thekidsgate from './thekidsgate.png';
import pic01 from './pic01.jpg';
import pic02 from './pic02.jpg';
import pic03 from './pic03.jpg';
import { FaCode, FaLock, FaCog, FaDesktop, FaTwitterSquare, FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import AddScript from './AddScript';

function Sidebar() {
  return (
    <section id="sidebar">
    <div className="inner">
      <nav>
        <ul>
          <li><a href="#intro">Welcome</a></li>
          <li><a href="#one">Who we are</a></li>
          <li><a href="#two">What we do</a></li>
          <li><a href="#three">Get in touch</a></li>
        </ul>
      </nav>
    </div>
  </section>

  );
}



function Intro() {
  return (
    <section id="intro" className="wrapper style1 fullscreen fade-up">
      <div className="inner">
        <h1>Hi Myself Amit singh</h1>
        <p>I'm a India, delhi based Full Stack Developer focused on crafting clean  & user‑friendly experience for my clients.
        </p>
        <ul className="actions">
          <li><a href="#one" className="button scrolly">Know more</a></li>
        </ul>
      </div>
    </section>
  );
}


function One() {
  return (
    <section id="one" className="wrapper style2 spotlights">
      <section>
        <a href="#" className="image"><img src={pic01} alt="" data-position="center center"  /></a>
        <div className="content">
          <div className="inner">
            <h2>What I Do</h2>
            <p>I'm full-stack developer with 3 years of professional experience. I'm interested in all kinds of visual communication, but my major focus is on developing web apps. I also have skills in other fields web designing.</p>
            <ul className="actions">
              <li><a href="/about" className="button">Learn more</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <a href="#" className="image"><img src={pic02} alt="" data-position="top center" /></a>
        <div className="content">
          <div className="inner">
            <h2>My Work Experience</h2>
            <p>I work with big b2b marketing company called ExporterIndia.com and some small company to with 1 years of freelancing work.</p>
            <ul className="actions">
              <li><a href="/about" className="button">Learn more</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <a href="#" className="image"><img src={pic03} alt="" data-position="25% 25%"  /></a>
        <div className="content">
          <div className="inner">
            <h2>My Web Development Skills</h2>
            <p>Mostly my experience is in php and wordpress develoment but i also have good amout nodejs and javascript framework reactjs knowledge with good html and css skills.</p>
            <ul className="actions">
              <li><a href="/about" className="button">Learn more</a></li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

function Two() {
  return (
    <section id="two" className="wrapper style3 fade-up">
      <div className="inner">
        <h2>Some Of my work</h2>
        <p>Throughout that time, I’ve worked remotely for a number of exciting startups and established companies.</p>
        <div className="features">
          <section>
            <span className="icon solid major ">
             <FaCode />
            </span>
            
            <h3>ExporterIndia.com</h3>
            <p><img src={exporterindia} alt="exporterindia.com" /></p>
          </section>
          <section>
            <span className="icon solid major">
              <FaLock />
            </span>
            <h3>Handmade Britain</h3>
            <p><img src={handmadebritain} alt="handmadebritain.com" /></p>
          </section>
          <section>
            <span className="icon solid major">
            <FaCog />
            </span>
            <h3>thekidsgate</h3>
            <p><img src={kashveedesign} alt="thekidsgate.com" /></p>
          </section>
          <section>
            <span className="icon solid major ">
            <FaDesktop />
            </span>
            <h3>Kashveedesign.stor</h3>
            <p><img src={thekidsgate} alt="kashveedesign.store" /></p>
          </section>
          
        </div>
        <ul className="actions">
          <li><a href="/about" className="button">Learn more</a></li>
        </ul>
      </div>
    </section>
  );
}


function Three() {
  return (
    <section id="three" className="wrapper style1 fade-up">
      <div className="inner">
        <h2>Get in touch</h2>
        <p>If you wanna get in touch, talk to me about a project collaboration or just say hi,
          fill up the awesome form below or send an email to 
          amitsingh17051@gmail.com
            and ~let's talk</p>
        <div className="split style1">
          <section>
            <form method="POST" data-netlify="true" name="contact" >
              <div className="fields">
                <div className="field half">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="5"></textarea>
                </div>
              </div>
              <ul className="actions">
                <li><a href="" onclick="$(this).closest('form').submit()" className="button submit">Send Message</a></li>
              </ul>
            </form>
          </section>
          <section>
            <ul className="contact">
              <li>
                <h3>Address</h3>
                <span>V-98 Arvind Nagar
                  Ghonda Delhi 110053
                </span>
              </li>
              <li>
                <h3>Email</h3>
                <a href="#">amitsingh17051@gmail.com</a>
              </li>
              <li>
                <h3>Phone</h3>
                <span>91-8588976213</span>
              </li>
              <li>
                <h3>Social</h3>
                <ul className="icons">
                  <li><a href="https://twitter.com/amitsingh17051" target="_blank" className="icon brands fa-twitter"><FaTwitterSquare /><span className="label">Twitter</span></a></li>
                  <li><a href="https://www.facebook.com/amitsingh17051" target="_blank" className="icon brands fa-facebook-f"><FaFacebookSquare /><span className="label">Facebook</span></a></li>
                  <li><a href="https://github.com/amitsingh17051" target="_blank" className="icon brands fa-github"><FaGithubSquare /><span className="label">GitHub</span></a></li>
                  <li><a href="https://www.linkedin.com/in/amit-kumar-48a56176/" target="_blank" className="icon brands fa-linkedin-in"><FaLinkedin /><span className="label">LinkedIn</span></a></li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}

function Wrapper() {
  return (
    <div id="wrapper">
      <Intro />
      <One />
      <Two />
      <Three />
    </div>
  );
}

function Footer() {
  
  return (
    <footer id="footer" className="wrapper alt">
			<div className="inner">
				<ul className="menu">
					<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="#">Amit Singh</a></li>
				</ul>
			</div>

      
		</footer>
  );

  
}



function Home() {
return( 
    <div className="App">
        <Sidebar />
        <Wrapper />
        <Footer /> 
    </div>
  );
}








export default Home;
