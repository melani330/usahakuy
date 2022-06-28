import * as React from "react";
<<<<<<< Updated upstream
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Tentang from "./components/tentang";
import Pendaftaran from "./components/pendaftaran";
import data from "./data/pendaftaran.json"

function App() {
  return (
    <div>
      <Navbar />
      <Tentang/>
      <Pendaftaran data={data}/> 
      <Footer />
=======
import Home from "./pagesRouter/Home"

function App() {
  return (
    <div className="App">
      <Home/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
