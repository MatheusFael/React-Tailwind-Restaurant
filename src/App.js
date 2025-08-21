import React  from "react";
import NavBar  from "./components/NavBar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HealineCards";
import Food from "./components/Food";
import Category from "./components/Category";
import './index.css';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>

  );
    
}

export default App;
