// State : any data your application needs to know about
//         change over time
//         respond to state changes and present an updated UI when necessary
// * React offers a nice solution for the state management of modern web applications

// You create state in a React component by declaring a state property on the component class in its constructor. This initializes the component with state when it is created. The state property must be set to a JavaScript object.

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = {
      // Initialize the component with state in the constructor and assign your name to a property of firstName.
      firstName : "Gaon"
    };
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};