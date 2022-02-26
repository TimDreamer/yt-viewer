import React from "react";
import Header from "./Header";
import VideoList from "./VideoList";
import ContentView from "./ContentView";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="main">
      <Header />
      <ContentView />
      <VideoList />
      <Footer />
    </div>
  );
};

export default App;
