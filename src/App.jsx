import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";

function App() {
  return <div className="w-full h-screen text-zinc-900">
    <Navbar />
    <Landing />
    <Marquee />
    <About />
    <Eyes />
    <Featured />
  </div>;
}

export default App;
