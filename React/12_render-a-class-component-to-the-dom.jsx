// Both the Fruits and Vegetables components are defined for you behind the scenes.
// Render both components as children of the TypesOfFood component, then render TypesOfFood to the DOM.
// There is a div with id='challenge-node' available for you to use.

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  // ReactDOM.render(componentToRender, targetNode)

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits/>
        <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));