import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";

function App() {
  return <div className="w-full h-screen text-zinc-900">
    <Navbar />
    <Landing />
    <Marquee />
    <About />
    <Eyes />
    <Featured />
    <Cards />
  </div>;
}

export default App;
