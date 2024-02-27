import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";

function App() {
  return <div className="w-full h-screen text-zinc-900">
    <Navbar />
    <Landing />
    <Marquee />
    <About />
  </div>;
}

export default App;
