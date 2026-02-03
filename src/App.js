import React from 'react';
import { Header, About, Portfolio, Contact, Footer, Hero, Services } from './components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
