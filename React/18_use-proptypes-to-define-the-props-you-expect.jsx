/**
 * You can set propTypes on your component to require the data to be of type array. This will throw a useful warning when the data is of any other type.
 */

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
// Define propTypes for the Items component to require quantity as a prop and verify that it is of type number.
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};

// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};