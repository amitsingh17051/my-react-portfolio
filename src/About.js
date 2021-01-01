import React from 'react';
import profile from './profile.jpg';




function Header() {
    return (
        <header id="header">
            <a href="index.html" class="title">MySelfAmit</a>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about" class="active">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

function Main() {
    return (
        <section id="main" class="wrapper">
            <div class="inner">
                <h1 class="major">Who I Am</h1>
                <span class="image fit"><img src={profile} alt="Amitsingh" /></span>
                <p>My name's Amit. I'm a web designer and developer based in Delhi, India.

                    During the day I’m the lead developer at a local agency. During the evenings I spend my time working on freelance projects and building my own products.
                    
                    My most recent project is called handmadebritain. It’s a simple yet powerful online exhibitioning WordPress Website.</p>
                <p>There’s nothing I enjoy more than designing and developing good websites for nice people. It really is that simple.

                    I’ve spent many years trying to perfect what I do and while I’ll never be perfect, I do my best to come close.
                    
                    If you’ve got a project you’d like to work on with me just get in touch and we can get to work!</p>
            </div>
        </section>
    );
}

function Wrapper() {
    return (
      <div id="wrapper">
        <Main />
      </div>
    );
  }
  
  function Footer() {
    return (
      <footer id="footer" class="wrapper alt">
        <div class="inner">
            <ul class="menu">
                <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="#">Amit Singh</a></li>
            </ul>
        </div>
    </footer>
    );
  }

function Home() {
    return (
      <div className="App">
          <Header />
            <Wrapper />
          <Footer />
      </div>
    );
  }
  
  
  
  
  
  
  
  
  export default Home;