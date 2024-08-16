import React from "react";
// import Header from "./components/header";
import Discover from "./components/discover";
import About from "./components/about";
import Tips from "./components/tips";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Leaderboard from "./components/leaderboard";

export default function Component() {
  return (
    <div>
    <div className="flex flex-col min-h-dvh">
      
      <main className="flex-1">
        <Discover/>
        <About/>
        <Tips/>
        <Contact/>
      </main>
      <Footer/>
    </div>
    {/* <div className="min-h-screen p-6">
    <Leaderboard/>
    </div> */}
  </div>
  )
}

