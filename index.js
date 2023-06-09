import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import Footer from "./src/Footer";
/*
*header
  -logo
  -nav item
*body
  -search
  -restaurantcontainer
  -restaurantcard
    -img
    -name of res.
     -star rating cuisine , delvery time etc

*footer
  -copy
  -links
  -address
  -contact
*/

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
     <Body/>
     <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
