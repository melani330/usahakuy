import * as React from "react";
<<<<<<< HEAD
import Home from "./pagesRouter/Home"
=======
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Tentang from "./components/tentang";
import Pendaftaran from "./components/pendaftaran";
import data from "./data/pendaftaran.json"
import './App.css';
import Slider from './components/Slider/Slider';

>>>>>>> 7c25bf7 (Add Banner)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Home/>
=======
       <Navbar />
        <Slider/>
       <Pendaftaran data={data}/> 
         <Tentang />
       <Footer />
>>>>>>> 7c25bf7 (Add Banner)
    </div>
  );
}

export default App;
