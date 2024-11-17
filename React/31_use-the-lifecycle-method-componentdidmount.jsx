class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  // The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount().
  // This method is called after a component is mounted to the DOM.
  // It sets state after 2.5 seconds to simulate calling a server to retrieve data
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: {this.state.activeUsers}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}