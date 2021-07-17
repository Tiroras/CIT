import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import ContentContainer from "./components/content/Content.container";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <ContentContainer />
      <Footer />
    </div>
  );
}

export default App;
