// previous : send props to stateless functional component
//            --> pure function
//            --> 

// stateful component : a class component that does maintain its own internal state

// MAIN PATTERN
// try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};

// Change code below this line
const Camper = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};

Camper.defaultProps = {
  name: "CamperBot"
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};