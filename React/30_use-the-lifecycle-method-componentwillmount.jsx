class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  // life cycle method: special methods that proivide opportunities to perform actions at specific points in the lifecycle of a component

  // 1) componentWillMount() : before they are rendered
  // 2) componentDidMount() : before they update
  // 3) shouldComponentUpdate() : before they receive props
  // 4) componentDidUpdate() : before they unmount
  // 5) componentWillUnmount() :

  componentWillMount() {
    // Change code below this line
    // is called before the render() method when a component is being mounted to the DOM
    console.log("Heropy!");
    // Change code above this line
  }
  render() {
    return <div />
  }
};