import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant Card
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Title =()=> (
  <h1 id="heading" className="head">
    Title
  </h1>
);

const HeadingComponent=()=>{
  return (
    <>
      {Title()}
      <Title />
      <Title></Title>
      <h1>Namaste React Functional Component</h1>
    </>
  );
}

// <HeadingComponent/> is understood by babel
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);
root.render(HeadingComponent())
