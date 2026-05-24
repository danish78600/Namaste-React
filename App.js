// JS Object
const heading = React.createElement("h1", 
  {id:"heading"},
  "Hello World From React"
); // core thing

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div",{ id: "child" },
    [
      React.createElement("h1", {}, "Heading 1"),
      React.createElement("h2",{},"Heading 2"),
    ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent)

root.render(parent);
 
