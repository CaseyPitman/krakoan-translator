//App component

import React from "react";

//Components
import Header from "./Header";
import Footer from "./Footer";

//Styles
import "../css/global.css";

const lightStyles = {
  backgroundColor: "pink",
};

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
