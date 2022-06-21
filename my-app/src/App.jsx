import * as React from "react";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Tentang from "./components/tentang";
import Pendaftaran from "./components/pendaftaran";
import data from "./data/pendaftaran.json";

function App() {
  return (
    <div>
      <Navbar />
      <Tentang />
      <Pendaftaran data={data} />
      <div>
        <Tentang />
      </div>
      <Footer />
    </div>
  );
}

export default App;
