import * as React from "react";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Tentang from "./components/tentang";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Tentang />
      </div>
      <Footer />
    </div>
  );
}

export default App;
