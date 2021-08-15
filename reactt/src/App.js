import {useEffect} from 'react';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import SignUp from "./components/SignUp";
import Description from "./components/Description";
import Nutshell from "./components/Nutshell";
import ConvinceBox from "./components/ConvinceBox";
import Testimonial from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import ExampleGames from "./components/ExampleGames";
import LearnToCode from "./components/LearnToCode";
import Footer from "./components/Footer";

function App() {
  useEffect(()=>{
    var dropdown = document.getElementsByClassName("nav__item");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.maxHeight) {
          dropdownContent.style.maxHeight = null;
        } else {
          dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
        }
      });
    }
  },[]);
  return (
    <div className="container__all">
      <Sidebar />
      <Navbar />
      <HeroSection />
      <SignUp />
      <Description />
      <Nutshell />
      <ConvinceBox />
      <Testimonial />
      <HowItWorks />
      <ExampleGames />
      <LearnToCode />
      <Footer />
    </div>
  );
}

export default App;
